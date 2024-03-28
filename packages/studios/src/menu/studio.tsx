import { Studio } from '@citric/icons'
import { MenuSectionContent } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { useQuery } from '@tanstack/react-query'
import { ViewPropsOf } from 'navigation'
import { fetchStudio, fetchStudios } from 'network/mocks'
import { useRouteDictionary } from '../route-dictionary'

export function useStudioMenu({ route, params: { studioId } }: ViewPropsOf<'root.studio'>): MenuSectionContent {
  const t = { ...useRouteDictionary(), ...useTranslate(dictionary) }
  const { data: studios = [], isLoading, error } = useQuery({ queryKey: ['studios'], queryFn: fetchStudios })
  const { data: studio } = useQuery({ queryKey: ['studio', studioId], queryFn: () => fetchStudio(studioId) })
  return {
    title: studio?.name ?? t.studio,
    loading: isLoading,
    error: error?.message,
    pageSelector: {
      value: studioId,
      options: studios.map(({ id, name }) => ({ key: id, label: name, href: route.$link({ studioId: id }), icon: <Studio /> })),
      button: { label: t.viewAll, href: route.$parent.$link() },
    },
    options: [
      { label: 'Dashboard', active: route.$isActive(), href: route.$link() },
      { label: 'Stacks', active: route.stacks.$isActive(), href: route.stacks.$link() },
      { label: 'Plugins' },
      { label: 'Actions' },
      {
        label: 'Insights',
        children: [
          { label: t.overview },
          { label: t.report },
        ],
      },
      {
        label: t.settings,
        children: [
          { label: t.general },
          { label: t.visibility },
        ],
      },
    ],
  }
}

const dictionary = {
  en: {
    overview: 'Overview',
    report: 'Usage Report (beta)',
    settings: 'Settings',
    general: 'General',
    visibility: 'Visibility',
    viewAll: 'See All',
  },
  pt: {
    overview: 'Visão Geral',
    report: 'Relatório de uso (beta)',
    settings: 'Configurações',
    general: 'Geral',
    visibility: 'Visibilidade',
    viewAll: 'Ver Todos',
  },
} satisfies Dictionary
