import { Text } from '@citric/core'
import { Skeleton } from '@citric/ui'
import { Route } from '@stack-spot/citron-navigator'
import { TITLE } from 'env'
import { titleEffect } from 'hooks/title'
import { last } from 'lodash'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useRouteDictionary } from '../../route-dictionary'
import { useDynamicReplacements } from './hook'
import { Box } from './styled'
import { ReplaceMap } from './types'

interface Props {
  replace?: ReplaceMap,
  updateTitle?: boolean,
}

export const Breadcrumb = ({ replace, updateTitle = true }: Props) => {
  const t = useRouteDictionary()
  const { replacements, route, isLoading } = useDynamicReplacements()

  // Utilizando useMemo para memorizar allReplacements
  const allReplacements = useMemo(
    () => ({
      ...replacements,
      ...replace,
    }),
    [replacements, replace],
  )

  const getLabel = useCallback(
    (key: string | undefined) => {
      if (!key || !allReplacements) return key
      if (key in allReplacements) return allReplacements[key]
      if (key in t) return t[key as keyof typeof t]
      return key
    },
    [allReplacements, t],
  )

  useEffect(() => {
    if (route && updateTitle && !isLoading) {
      const keys = route.$key.split('.')
      let titleIndex = keys.length - 1
      while (keys[titleIndex] && allReplacements[keys[titleIndex]] === null)
        titleIndex--
      const titleKey = keys[titleIndex]
      if (!titleKey) return
      const name = getLabel(titleKey)
      return titleEffect(name)
    }
    return () => {
      document.title = TITLE
    }
  }, [allReplacements, route, updateTitle, getLabel, isLoading])

  function getBreadcrumbForRoute(
    currentRoute: Route | undefined,
    isLink = false,
  ): React.ReactElement[] {
    if (!currentRoute) return []
    const key = last(currentRoute.$key.split('.'))
    if (key && allReplacements[key] === null)
      return getBreadcrumbForRoute(currentRoute.$parent, isLink)
    const text = <Text appearance="breadcrumb">{getLabel(key)}</Text>
    const element = isLink ? <a href={currentRoute.$link()}>{text}</a> : text
    return [
      ...getBreadcrumbForRoute(currentRoute.$parent, true),
      <li key={currentRoute.$key}>{element}</li>,
    ]
  }

  return (
    <Box>
      {isLoading ? (
        <Skeleton height="21px" />
      ) : (
        <ul>{getBreadcrumbForRoute(route)}</ul>
      )}
    </Box>
  )
}
