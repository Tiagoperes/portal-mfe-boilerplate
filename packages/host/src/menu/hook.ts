 

import { MenuProps, MenuSectionContent } from '@stack-spot/portal-layout'
import { useNavigationContext } from 'navigation'
import { useState } from 'react'
import { useMenuSections } from './sections'

interface CurrentContent {
  // attention: this key must be unique for each possible menu, otherwise there will be React Hook errors.
  key: string,
  content: () => MenuSectionContent,
}

export function useMenu(): MenuProps {
  const sections = useMenuSections()
  const [current, setCurrent] = useState<CurrentContent | undefined>()

  useNavigationContext(context => {
    context
      .whenSubrouteOf('root.account', async () => {
        const { default: useAccountMenu } = await import('account/menu')
        setCurrent({ key: 'account', content: useAccountMenu })
      })
      .otherwise(() => setCurrent(undefined))
  })

  return current
    ? { sections, content: current.content, contentKey: current.key }
    : { sections }
}
