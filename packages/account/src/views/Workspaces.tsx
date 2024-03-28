import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Workspaces = ({
  route,
  params: { search, type },
}: ViewPropsOf<'root.workspaces'>) => (
  <>
    <Breadcrumb />
    <p>
      Workspaces ({search}, {type})
    </p>
    <a href={route.$parent.$link()}>Go back to Account</a>
  </>
)
