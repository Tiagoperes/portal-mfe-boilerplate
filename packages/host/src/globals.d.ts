declare module 'account/View' {
  const MFEView: React.FunctionComponent
  export = { MFEView }
}

declare module 'account/menu-content' {
  const menuContent: Pick<import('@stack-spot/portal-layout').MenuPropsWithDynamicContent, 'content' | 'contentKey'>
  export = { menuContent }
}

declare module 'account/menu-sections' {
  const useMenuSections: () => import('@stack-spot/portal-layout').MenuSection[]
  export = { useMenuSections }
}

declare module 'studios/View' {
  const MFEView: React.FunctionComponent
  export = { MFEView }
}

declare module 'studios/menu-content' {
  const useMenuContent: () => Pick<import('@stack-spot/portal-layout').MenuPropsWithDynamicContent, 'content' | 'contentKey'> | undefined
  export = { useMenuContent }
}

declare module 'studios/menu-sections' {
  const useMenuSections: () => import('@stack-spot/portal-layout').MenuSection[]
  export = { useMenuSections }
}
