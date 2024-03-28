import { MenuProps } from '@stack-spot/portal-layout'
// import { useLanguage } from '@stack-spot/portal-translate'
import { menuContent } from './content'
import { useMenuSections } from './sections'
// import { createMenuSections } from './sections'

export function useMenu(): MenuProps {
  const sections = useMenuSections()
  return {
    sections,
    ...menuContent,
  }
}
