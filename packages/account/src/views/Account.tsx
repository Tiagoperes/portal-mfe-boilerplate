import { Breadcrumb } from 'containers/Breadcrumb'
import { ViewPropsOf } from 'navigation'

export const Account = ({ route }: ViewPropsOf<'root'>) => (
  <>
    <Breadcrumb />
    <p>Account</p>
    <a href={route.organization.$link()}>Organization</a>
    <a href={route.environments.$link({ search: 'minha busca de ambiente' })}>
      Environments
    </a>
    <a
      href={route.workspaces.$link({
        search: 'minha busca de workspace',
        type: 'ALL',
      })}
    >
      Workspaces
    </a>
  </>
)
