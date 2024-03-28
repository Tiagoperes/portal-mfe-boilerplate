import { Account, Home, Studio } from '@citric/icons'
import { MenuSection, MenuSectionContent } from '@stack-spot/portal-layout'
import { useEffectOnce } from 'hooks/use-effect-once'
import { root } from 'navigation'
import { useRef, useState } from 'react'

type MenuSectionName = 'account'

export function useMenuSections(): MenuSection[] {
  const menus = useRef<Partial<Record<MenuSectionName, () => MenuSectionContent>>>({})
  const [ready, setReady] = useState(false)

  async function loadModules() {
    const [account] = await Promise.all([import('account/menu')])
    menus.current.account = account.default
    setReady(true)
  }

  useEffectOnce(() => {
    loadModules()
  })

  return ready ? [
    {
      icon: <Home />,
      label: 'Home',
      href: root.$link(),
      active: root.$isActive(),
    },
    {
      icon: <Account />,
      label: 'Account',
      href: root.account.$link(),
      active: root.account.$isSubrouteActive(),
      content: menus.current.account,
    },
    {
      icon: <Studio />,
      label: 'Studios',
      href: root.studios.$link(),
      active: root.studios.$isSubrouteActive(),
    },
  ] : []
}
