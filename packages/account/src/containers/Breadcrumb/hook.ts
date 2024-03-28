import { CitronNavigator, Route } from '@stack-spot/citron-navigator'
import { useQueryClient } from '@tanstack/react-query'
import { useRouteData } from 'navigation'
import { fetchStudio } from 'network/mocks'
import { sessionManager } from 'network/session-manager'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { ReplaceMap } from './types'

export function useDynamicReplacements() {
  const queryClient = useQueryClient()
  const nav = CitronNavigator.instance!
  // Replaces the key "root" with the account name

  const initial = useMemo(
    () => ({
      root: sessionManager.getSession()?.getTokenData()?.account_name,
    }),
    [],
  )

  const { route, params } = useRouteData()
  const [data, setData] = useState<{
    replacements: ReplaceMap,
    route: Route | undefined,
    isLoading: boolean,
  }>({
    replacements: initial,
    route: nav?.currentRoute,
    isLoading: true,
  })

  const update = useCallback(
    async (updatedRoute: Route, updatedParams: Record<string, any>) => {
      const result: ReplaceMap = { ...initial }
      const promises: (() => Promise<any>)[] = []
      const routeKey = updatedRoute.$key.split('.')

      // replaces the route key "studio" with the studio's name
      if (routeKey.includes('studio') && updatedParams.studioId) {
        promises.push(async () => {
          const studio = await queryClient.fetchQuery({
            queryKey: ['studio', updatedParams.studioId],
            queryFn: () => fetchStudio(updatedParams.studioId),
          })
          result.studio = studio?.name
        })
      }

      // replaces the route key "stack" with the stack's name
      if (routeKey.includes('stack') && updatedParams.stackId) {
        promises.push(async () => {
          const stack = await queryClient.fetchQuery({
            queryKey: ['stack', updatedParams.studioId],
            queryFn: () => fetchStudio(updatedParams.studioId),
          })
          result.stack = stack?.name
        })
      }

      await Promise.allSettled(promises.map(p => p()))
      setData({ replacements: result, route: updatedRoute, isLoading: false })
    },
    [initial, queryClient],
  )

  useEffect(() => {
    update(route as Route, params as Record<string, any>)
  }, [route, params, update])

  return data
}
