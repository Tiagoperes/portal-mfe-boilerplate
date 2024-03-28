import { useNavigationContext } from 'navigation'
import { ReactElement, useState } from 'react'

export function useContent() {
  const [content, setContent] = useState<ReactElement>()

  useNavigationContext(context => {
    context
      .when('root', async props => {
        const { Home } = await import('./Home')
        setContent(<Home {...props} />)
      })
      .whenSubrouteOf('root.account', async () => {
        const { MFEView } = (await import('account/View')).default
        setContent(<MFEView />)
      })
      .whenSubrouteOf('root.studios', async () => {
        const { MFEView } = (await import('studios/View')).default
        setContent(<MFEView />)
      })
  })

  return content
}
