import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Environments = ({
  route,
  params: { search },
}: ViewPropsOf<'root.environments'>) => (
  <>
    <Breadcrumb />
    <p>Environments ({search})</p>
    <a href={route.$parent.$link()}>Go back to Account</a>
  </>
)
