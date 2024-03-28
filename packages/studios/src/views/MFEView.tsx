/* This file is exported as a Module Federation Module */

import { useContent } from './hook'

export const MFEView = () => {
  const content = useContent()
  return content
}
