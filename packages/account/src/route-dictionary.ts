import { Dictionary, useTranslate } from '@stack-spot/portal-translate'

const dictionary = {
  en: {
    root: 'Home',
    account: 'Account',
    studios: 'Studios',
    studio: 'Studio',
    stacks: 'Stacks',
    stack: 'Stack',
    starters: 'Starters',
    starter: 'Starter',
  },
  pt: {
    root: 'Início',
    account: 'Conta',
    studios: 'Estúdios',
    studio: 'Estúdio',
    stacks: 'Stacks',
    stack: 'Stack',
    starters: 'Starters',
    starter: 'Starter',
  },
} satisfies Dictionary

export const useRouteDictionary = () => useTranslate(dictionary)
