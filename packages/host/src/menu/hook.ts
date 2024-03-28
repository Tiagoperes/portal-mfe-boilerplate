import { MenuProps } from '@stack-spot/portal-layout'
import { useNavigationContext } from 'navigation'
import { useState } from 'react'
import { useMenuModules } from './MenuModuleProvider'
import { useMenuSections } from './sections'

type MenuType = 'account' | 'studios' | undefined

export function useMenu(): MenuProps {
  const modules = useMenuModules()
  const sections = useMenuSections()
  const contents = {
    account: modules.accountContent,
    studios: modules.useStudiosContent(),
  }
  const [current, setCurrent] = useState<MenuType>()

  useNavigationContext(context => {
    context
      .whenSubrouteOf('root.account', () => setCurrent('account'))
      .whenSubrouteOf('root.studios', () => setCurrent('studios'))
      .otherwise(() => setCurrent(undefined))
  })

  const currentContent = current ? contents[current] : undefined
  return currentContent ? { sections, ...currentContent } : { sections }
}
