/* This file is exported as a Module Federation Module */

import { Account } from '@citric/icons'
import { MenuSection } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { root } from 'navigation'
import { useAccountMenu } from './account'

export function useMenuSections(): MenuSection[] {
  const t = useTranslate(dictionary)
  return [{ icon: <Account />, label: t.account, active: root.$isSubrouteActive(), href: root.$link(), content: useAccountMenu }]
}

const dictionary = {
  en: {
    account: 'Account',
  },
  pt: {
    account: 'Conta',
  },
} satisfies Dictionary
