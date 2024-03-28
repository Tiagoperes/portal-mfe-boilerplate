import { TITLE } from 'env'
import { useEffect } from 'react'

export function titleEffect(title: string | undefined | null) {
  document.title = title ? `${title} - ${TITLE}` : TITLE
  return () => (document.title = TITLE)
}

export function useTitleEffect(title: string | undefined | null) {
  useEffect(() => titleEffect(title), [title])
}
