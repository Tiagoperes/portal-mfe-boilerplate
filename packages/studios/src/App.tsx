import { Layout } from '@stack-spot/portal-layout'
import { loadTheme } from '@stack-spot/portal-theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useMenu } from './menu/hook'
import { queryClient } from './network/react-query'
import { useContent } from './views/hook'

export const App = () => {
  const menu = useMenu()
  const content = useContent()

  useEffect(loadTheme, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Layout header={{}} menu={menu}>
        {content}
      </Layout>
    </QueryClientProvider>
  )
}
