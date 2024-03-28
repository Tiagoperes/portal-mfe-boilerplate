import { MenuSectionContent } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { useQuery } from '@tanstack/react-query'
import { ViewPropsOf } from 'navigation'
import { fetchStack } from 'network/mocks'

export function useStackMenu({ route, params: { stackId } }: ViewPropsOf<'root.studio.stacks.stack'>): MenuSectionContent {
  const t = useTranslate(dictionary)
  const { data: stack } = useQuery({ queryKey: ['stack', stackId], queryFn: () => fetchStack(stackId) })
  return {
    goBack: { label: t.goBack, href: route.$parent.$parent.$link() },
    title: stack?.name ?? 'Stack',
    options: [
      { label: 'Stack', active: route.$isActive(), href: route.$link() },
      { label: 'Starters', active: route.starters.$isSubrouteActive(), href: route.starters.$link() },
      {
        label: 'Plugins',
        children: [
          { label: 'App' },
          { label: 'Infra' },
        ],
      },
      { label: 'Links', href: route.$link() },
      { label: 'Actions', href: route.$link() },
      {
        label: t.settings,
        children: [
          { label: t.general },
        ],
      },
    ],
  }
}

const dictionary = {
  en: {
    goBack: 'Go back to studio',
    settings: 'Settings',
    general: 'General Information',
  },
  pt: {
    goBack: 'Voltar para o Estúdio',
    settings: 'Configurações',
    general: 'Informações gerais',
  },
} satisfies Dictionary
