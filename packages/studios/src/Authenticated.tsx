import { Flex } from '@citric/core'
import { Login } from '@stack-spot/portal-components'
import { CSSToCitricAdapter } from '@stack-spot/portal-theme'
import '@stack-spot/portal-theme/dist/theme.css'
import { useEffectOnce } from 'hooks/use-effect-once'
import { sessionManager } from 'network/session-manager'
import { useState } from 'react'

type AuthStatus = 'unknown' | 'authenticated' | 'unauthenticated'

export const Authenticated = ({
  children,
}: {
  children: React.ReactElement,
}) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('unknown')

  useEffectOnce(() => {
    async function checkAuth() {
      await sessionManager.restoreSession()
      if (sessionManager.hasSession()) {
        setAuthStatus('authenticated')
      } else if (sessionManager.urlHasThirdPartyLoginData()) {
        await sessionManager.completeThirdPartyLogin()
        setAuthStatus('authenticated')
      } else {
        setAuthStatus('unauthenticated')
      }
    }

    checkAuth()
  })

  if (authStatus === 'unknown') return null
  if (authStatus === 'authenticated') return children
  return (
    <CSSToCitricAdapter>
      <Flex
        justifyContent="center"
        alignItems="center"
        flex={1}
        style={{ height: '100%' }}
      >
        <Login
          style={{ width: '360px' }}
          onSubmit={data => sessionManager.startThirdPartyLogin(data)}
          initialValue={sessionManager.getEmailForLogin()}
        />
      </Flex>
    </CSSToCitricAdapter>
  )
}
