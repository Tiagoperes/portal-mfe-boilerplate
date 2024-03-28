import { MenuSectionContent } from '@stack-spot/portal-layout'
import { Dictionary, useTranslate } from '@stack-spot/portal-translate'
import { root } from 'navigation'
import { useRouteDictionary } from '../route-dictionary'

const dictionary = {
  pt: {
    quickStart: 'Quick Start',
    organization: 'Organização',
    environments: 'Ambientes',
    workspaces: 'Workspaces',
    eventHistory: 'Histórico de eventos',
    cloudAccounts: 'Cloud Accounts',
    cloudServices: 'Cloud Services',
    guardRails: 'Guard Rails',
    finOps: 'FinOps',
    resourceExplorer: 'Explorador de Recursos',
    billing: 'Cobranças',
    settings: 'Configurações',
    visibility: 'Visibilidade',
    sso: 'SSO',
    teams: 'Times',
    partners: 'Parceiros',
    accessManagement: 'Gerenciamento de Acessos',
    members: 'Membros',
    groups: 'Grupos',
    roles: 'Papéis',
    serviceCredentials: 'Credenciais de Serviço',
    scmIntegration: 'Integração de SCM',
    clientCredential: 'Credencial de cliente',
  },
  en: {
    quickStart: 'Quick Start',
    organization: 'Organization',
    environments: 'Environments',
    workspaces: 'Workspaces',
    eventHistory: 'Event History',
    cloudAccounts: 'Cloud Accounts',
    cloudServices: 'Cloud Services',
    guardRails: 'Guard Rails',
    finOps: 'FinOps',
    resourceExplorer: 'Resource Explorer',
    billing: 'Billing',
    settings: 'Settings',
    visibility: 'Visibility',
    sso: 'SSO',
    teams: 'Teams',
    partners: 'Partners',
    accessManagement: 'Access Management',
    members: 'Members',
    groups: 'Groups',
    roles: 'Roles',
    serviceCredentials: 'Service Credentials',
    scmIntegration: 'SCM Integration',
    clientCredential: 'Client Credential',
  },
} satisfies Dictionary

export function useAccountMenu(): MenuSectionContent {
  const t = { ...useRouteDictionary(), ...useTranslate(dictionary) }
  return {
    title: t.account,
    options: [
      { label: t.quickStart, href: root.$link(), active: root.$isActive() },
      {
        label: t.organization,
        children: [
          {
            label: 'Dashboard',
            href: root.organization.$link(),
            active: root.organization.$isActive(),
          },
          {
            label: t.environments,
            href: root.environments.$link(),
            active: root.environments.$isActive(),
          },
          { label: t.stacks },
          { label: t.studios },
          {
            label: t.workspaces,
            href: root.workspaces.$link(),
            active: root.workspaces.$isActive(),
          },
          { label: t.eventHistory },
        ],
      },
      {
        label: t.cloudServices,
        children: [{ label: t.guardRails }, { label: t.resourceExplorer }],
      },
      {
        label: t.settings,
        children: [
          { label: t.serviceCredentials },
          { label: t.scmIntegration },
          { label: t.partners },
          { label: t.sso },
          { label: t.teams },
          {
            label: t.accessManagement,
            children: [
              { label: t.members },
              { label: t.roles },
              { label: t.clientCredential },
            ],
          },
        ],
      },
    ],
  }
}
