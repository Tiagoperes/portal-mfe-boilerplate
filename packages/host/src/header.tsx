import {
  Colors,
  Document,
  Download,
  Enter,
  Globe,
  MobileComments,
} from '@citric/icons'
import { HeaderProps } from '@stack-spot/portal-layout'
import { setTheme, useThemeName } from '@stack-spot/portal-theme'
import {
  Dictionary,
  setLanguage,
  useLanguage,
  useTranslate,
} from '@stack-spot/portal-translate'
import { root } from 'navigation'
import { sessionManager } from 'network/session-manager'
import { HeaderCreateButton } from './components/HeaderCreateButton'

export function useHeader(): HeaderProps {
  const t = useTranslate(dictionary)
  const theme = useThemeName()
  const language = useLanguage()
  const { name, email } = sessionManager.getSession().getTokenData()

  return {
    userName: name,
    email: email,
    logoHref: root.$link(),
    right: <HeaderCreateButton />,
    options: [
      {
        type: 'section',
        children: [
          {
            label: t.appearance,
            icon: <Colors />,
            children: [
              {
                label: t.dark,
                onClick: () => setTheme('dark'),
                active: theme === 'dark',
              },
              {
                label: t.light,
                onClick: () => setTheme('light'),
                active: theme === 'light',
              },
            ],
          },
          {
            label: t.language,
            icon: <Globe />,
            children: [
              {
                label: 'English - US',
                onClick: () => setLanguage('en'),
                active: language === 'en',
              },
              {
                label: 'Português - BR',
                onClick: () => setLanguage('pt'),
                active: language === 'pt',
              },
            ],
          },
        ],
      },
      {
        type: 'section',
        children: [
          { label: t.downloadCli, icon: <Download /> },
          { label: t.documentation, icon: <Document /> },
          { label: t.support, icon: <MobileComments /> },
        ],
      },
      {
        type: 'section',
        children: [
          {
            label: t.signOut,
            icon: <Enter />,
            onClick: () => sessionManager.logout(),
          },
        ],
      },
    ],
  }
}

const dictionary = {
  en: {
    appearance: 'Appearance',
    language: 'Language',
    dark: 'Dark Mode',
    light: 'Light Mode',
    downloadCli: 'Download CLI',
    documentation: 'Documentation',
    support: 'Support',
    signOut: 'Sign out',
  },
  pt: {
    appearance: 'Aparência',
    language: 'Idioma',
    dark: 'Tema Escuro',
    light: 'Tema Claro',
    downloadCli: 'Baixar CLI',
    documentation: 'Documentação',
    support: 'Suporte',
    signOut: 'Sair',
  },
} satisfies Dictionary
