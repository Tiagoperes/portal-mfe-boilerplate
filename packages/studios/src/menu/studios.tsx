import { MenuSectionContent } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { useQuery } from '@tanstack/react-query'
import { root } from 'navigation'
import { fetchStudios } from 'network/mocks'
import { useRouteDictionary } from '../route-dictionary'

export function useStudiosMenu(): MenuSectionContent {
  const t = { ...useRouteDictionary(), ...useTranslate(dictionary) }
  const { data: studios = [], isLoading, error } = useQuery({ queryKey: ['studios'], queryFn: fetchStudios })

  return {
    title: t.studios,
    loading: isLoading,
    error: error?.message,
    options: [
      {
        label: t.myStudios,
        children: studios.map(({ id, name }) => ({ label: name, href: root.studio.$link({ studioId: id }) })),
      },
    ],
  }
}

const dictionary = {
  en: {
    myStudios: 'My Studios',
  },
  pt: {
    myStudios: 'Meus Estúdios',
  },
} satisfies Dictionary
