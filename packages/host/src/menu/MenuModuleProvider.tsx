import { MenuPropsWithDynamicContent, MenuSection } from '@stack-spot/portal-layout'
import { useEffectOnce } from 'hooks/use-effect-once'
import { createContext, useContext, useState } from 'react'

type MenuContent = Pick<MenuPropsWithDynamicContent, 'content' | 'contentKey'>

interface MenuModules {
  useAccountSections: () => MenuSection[],
  accountContent: MenuContent,
  useStudiosSections: () => MenuSection[],
  useStudiosContent: () => MenuContent | undefined,
}

const context = createContext<MenuModules | undefined>(undefined)

/**
 * We must have all modular hooks used by the menu loaded before we render the app.
 */
export const MenuModuleProvider = ({ children }: { children: React.ReactNode }) => {
  const [modules, setModules] = useState<MenuModules | undefined>()

  useEffectOnce(() => {
    (async () => {
      const [accountSections, accountContent, studiosSections, studiosContent] = await Promise.all([
        import('account/menu-sections'),
        import('account/menu-content'),
        import('studios/menu-sections'),
        import('studios/menu-content'),
      ])
      setModules({
        useAccountSections: accountSections.default.useMenuSections,
        accountContent: accountContent.default.menuContent,
        useStudiosSections: studiosSections.default.useMenuSections,
        useStudiosContent: studiosContent.default.useMenuContent,
      })
    })()
  })

  return modules ? <context.Provider value={modules}>{children}</context.Provider> : null
}

export function useMenuModules() {
  const modules = useContext(context)
  if (!modules) throw new Error("Can't call useMenuModules outside the context of a MenuModuleProvider!")
  return modules
}
