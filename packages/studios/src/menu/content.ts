/* This file is exported as a Module Federation Module */
/* eslint-disable react-hooks/rules-of-hooks */

import { MenuPropsWithDynamicContent } from '@stack-spot/portal-layout'
import { useNavigationContext } from 'navigation'
import { useState } from 'react'
import { useStackMenu } from './stack'
import { useStudioMenu } from './studio'
import { useStudiosMenu } from './studios'

type CurrentContent = Pick<MenuPropsWithDynamicContent, 'content' | 'contentKey'>

export function useMenuContent(): CurrentContent | undefined {
  const [current, setCurrent] = useState<CurrentContent | undefined>()

  useNavigationContext((context) => {
    context
      .when('root', () => setCurrent({ contentKey: 'studios', content: useStudiosMenu }))
      .whenSubrouteOf('root.studio', props => setCurrent({ contentKey: 'studio', content: () => useStudioMenu(props) }))
      .whenSubrouteOf('root.studio.stacks.stack', props => setCurrent({ contentKey: 'stack', content: () => useStackMenu(props) }))
      .otherwise(() => setCurrent(undefined))
  })

  return current
}
