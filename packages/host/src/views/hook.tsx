import { useNavigationContext } from 'navigation'
import { ReactElement, useState } from 'react'

export function useContent() {
  const [content, setContent] = useState<ReactElement>()

  useNavigationContext(context => {
    context
      // Home
      .when('root', async props => {
        const { Home } = await import('./Home')
        setContent(<Home {...props} />)
      })
      // Account
      .whenSubrouteOf('root.account', async props => {
        const AccountView = (await import('account/View')).default
        setContent(<AccountView {...props} />)
      })
  })

  return content
}
