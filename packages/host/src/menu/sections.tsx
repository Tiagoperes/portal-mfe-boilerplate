import { Home } from '@citric/icons'
import { MenuSection } from '@stack-spot/portal-layout'
import { root } from 'navigation'
import { useMenuModules } from './MenuModuleProvider'

export function useMenuSections(): MenuSection[] {
  const modules = useMenuModules()
  const account = modules.useAccountSections()
  const studios = modules.useStudiosSections()

  return [
    {
      icon: <Home />,
      label: 'Home',
      href: root.$link(),
      active: root.$isActive(),
    },
    ...account,
    ...studios,
  ]
}
