import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Starter = ({ route, params }: ViewPropsOf<'root.studio.stacks.stack.starters.starter'>) => (
  <>
    <Breadcrumb />
    <p>Starter {params.starterId} of Stack {params.stackId} of Studio {params.studioId}</p>
    <a href={route.$parent.$link()}>Go back to Starters</a>
  </>
)
