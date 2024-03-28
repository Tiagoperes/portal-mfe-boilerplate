/* eslint-disable react-hooks/rules-of-hooks */

import { MenuProps } from '@stack-spot/portal-layout'
import { useMenuContent } from './content'
import { useMenuSections } from './sections'

export function useMenu(): MenuProps {
  const sections = useMenuSections()
  const content = useMenuContent()
  return content ? { sections, ...content } : { sections }
}
