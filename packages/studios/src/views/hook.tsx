import { useNavigationContext } from 'navigation'
import { ReactElement, useState } from 'react'
import { Stack } from './Stack'
import { Stacks as StudioStacks } from './Stacks'
import { Starter } from './Starter'
import { Starters } from './Starters'
import { Studio } from './Studio'
import { Studios } from './Studios'

export function useContent() {
  const [content, setContent] = useState<ReactElement>()
  
  useNavigationContext((context) => {
    context
      .when('root', props => setContent(<Studios {...props} />))
      .when('root.studio', props => setContent(<Studio {...props} />))
      .when('root.studio.stacks', props => setContent(<StudioStacks {...props} />))
      .when('root.studio.stacks.stack', props => setContent(<Stack {...props} />))
      .when('root.studio.stacks.stack.starters', props => setContent(<Starters {...props} />))
      .when('root.studio.stacks.stack.starters.starter', props => setContent(<Starter {...props} />))
      .whenNotFound(() => setContent(<h1>404: Not Found</h1>))
  })
    
  return content
}

// Default export is required by Module Federation
// eslint-disable-next-line import/no-default-export
export default useContent
