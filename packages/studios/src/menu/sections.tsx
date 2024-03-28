/* This file is exported as a Module Federation Module */

import { Studio } from '@citric/icons'
import { MenuSection } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { root } from 'navigation'
import { useStudiosMenu } from './studios'

export function useMenuSections(): MenuSection[] {
  const t = useTranslate(dictionary)
  return [{ icon: <Studio />, label: t.studios, active: root.$isSubrouteActive(), href: root.$link(), content: useStudiosMenu }]
}

const dictionary = {
  en: {
    studios: 'Studios',
  },
  pt: {
    studios: 'Estúdios',
  },
} satisfies Dictionary
