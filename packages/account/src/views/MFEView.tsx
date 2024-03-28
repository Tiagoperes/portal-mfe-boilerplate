import { useContent } from './hook'

const MFEView = () => {
  const content = useContent()
  return content
}

// Default export is required by Module Federation
// eslint-disable-next-line import/no-default-export
export default MFEView
