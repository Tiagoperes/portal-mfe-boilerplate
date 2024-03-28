/* This file is exported as a Module Federation Module */

import { MenuPropsWithDynamicContent } from '@stack-spot/portal-layout'
import { useAccountMenu } from './account'

// this menu is static, it doesn't change despite the route
export const menuContent: Pick<MenuPropsWithDynamicContent, 'content' | 'contentKey'> = {
  content: useAccountMenu,
  contentKey: 'account',
}
