import { useNavigationContext } from 'navigation'
import { ReactElement, useState } from 'react'

export function useContent() {
  const [content, setContent] = useState<ReactElement | null>(null)

  useNavigationContext(context => {
    context
      .when('root', async props => {
        const { Account } = await import('./Account')
        setContent(<Account {...props} />)
      })
      .when('root.environments', async props => {
        const { Environments } = await import('./Environments')
        setContent(<Environments {...props} />)
      })
      .when('root.workspaces', async props => {
        const { Workspaces } = await import('./Workspaces')
        setContent(<Workspaces {...props} />)
      })
      .when('root.organization', async props => {
        const { Organization } = await import('./Organization')
        setContent(<Organization {...props} />)
      })
      .whenNotFound(() => setContent(<h1>404: Not Found</h1>))
  })

  return content
}

// Default export is required by Module Federation
// eslint-disable-next-line import/no-default-export
export default useContent
