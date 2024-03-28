declare module 'account/View' {
  const component: React.FunctionComponent<{
    route: import('@stack-spot/citron-navigator').Route<any, any, any>,
    params?: Record<string, any>,
  }>
  export = component
}

declare module 'account/menu' {
  const useAccountMenu: () => import('@stack-spot/portal-layout').MenuSectionContent
  export = useAccountMenu
}
