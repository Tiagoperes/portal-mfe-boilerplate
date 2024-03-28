/**
 * This file is here just for demonstration and should be removed.
 * We used Promises and a delay to simulate network requests.
 */

import { random } from 'lodash'

const studios = [
  { id: '1', name: 'Studio 1' },
  { id: '2', name: 'Studio 2' },
]
const stacks = [
  { id: '1', name: 'Stack 1' },
  { id: '2', name: 'Stack 2' },
]

function delay<T>(data: T) {
  return new Promise<T>(resolve => {
    setTimeout(() => resolve(data), random(100, 500))
  })
}

export function fetchStudios() {
  return delay(studios)
}

export function fetchStacks() {
  return delay(stacks)
}

export function fetchStudio(id: string) {
  const studio = studios.find(s => s.id === id)
  if (!studio) throw new Error('404. Studio not found.')
  return delay(studio)
}

export function fetchStack(id: string) {
  const stack = stacks.find(s => s.id === id)
  if (!stack) throw new Error('404. Stack not found.')
  return delay(stack)
}
