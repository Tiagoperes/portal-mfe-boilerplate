// Checks if all env variables are available

const envVars = [
  'CODEBUDDY_URL',
  'WORKSPACE_URL',
  'ACCOUNT_URL',
  'CONTENT_URL',
  'LOGIN_URL',
  'SERVICE_CATALOG_URL',
  'API_RUNTIME_URL',
  'CLOUD_SERVICES_URL',
  'DATA_PLATFORM_URL',
  'FINOPS_URL',
  'INSIGHTS_URL',
  'PLUGIN_URL',
  'RUNTIME_MANAGER_URL',
  'WORKFLOWS_URL',
  'WORKSPACE_MANAGER_URL',
  'DOCS_URL',
  'MIXPANEL_PROJECT_TOKEN',
  'LOG_LEVEL',
  'STACKSPOT_IAM_URL',
  'PUBLIC_SHELL_URL',
  'TITLE',
]
const invalidEnvVars = envVars.reduce<string[]>(
  (result, name) =>
    import.meta.env[`VITE_APP_${name}`]
      ? result
      : [...result, `VITE_APP_${name}`],
  [],
)
if (invalidEnvVars.length) {
  throw new Error(
    `Invalid set of environment variables. Please make sure you declared the following variables: ${invalidEnvVars.join(', ')}.`,
  )
}

// Exports the env variables

export const CODEBUDDY_URL = import.meta.env.VITE_APP_CODEBUDDY_URL ?? ''
export const WORKSPACE_URL = import.meta.env.VITE_APP_WORKSPACE_URL ?? ''
export const ACCOUNT_URL = import.meta.env.VITE_APP_ACCOUNT_URL ?? ''
export const CONTENT_URL = import.meta.env.VITE_APP_CONTENT_URL ?? ''
export const LOGIN_URL = import.meta.env.VITE_APP_LOGIN_URL ?? ''
export const SERVICE_CATALOG_URL =
  import.meta.env.VITE_APP_SERVICE_CATALOG_URL ?? ''
export const API_RUNTIME_URL = import.meta.env.VITE_APP_API_RUNTIME_URL ?? ''
export const CLOUD_SERVICES_URL =
  import.meta.env.VITE_APP_CLOUD_SERVICES_URL ?? ''
export const DATA_PLATFORM_URL =
  import.meta.env.VITE_APP_DATA_PLATFORM_URL ?? ''
export const FINOPS_URL = import.meta.env.VITE_APP_FINOPS_URL ?? ''
export const INSIGHTS_URL = import.meta.env.VITE_APP_INSIGHTS_URL ?? ''
export const PLUGIN_URL = import.meta.env.VITE_APP_PLUGIN_URL ?? ''
export const RUNTIME_MANAGER_URL =
  import.meta.env.VITE_APP_RUNTIME_MANAGER_URL ?? ''
export const WORKFLOWS_URL = import.meta.env.VITE_APP_WORKFLOWS_URL ?? ''
export const WORKSPACE_MANAGER_URL =
  import.meta.env.VITE_APP_WORKSPACE_MANAGER_URL ?? ''
export const DOCS_URL = import.meta.env.VITE_APP_DOCS_URL ?? ''
export const MIXPANEL_PROJECT_TOKEN =
  import.meta.env.VITE_APP_MIXPANEL_PROJECT_TOKEN ?? ''
export const LOG_LEVEL = import.meta.env.VITE_APP_LOG_LEVEL ?? ''
export const STACKSPOT_IAM_URL =
  import.meta.env.VITE_APP_STACKSPOT_IAM_URL ?? ''
export const PUBLIC_SHELL_URL = import.meta.env.VITE_APP_PUBLIC_SHELL_URL ?? ''
export const TITLE = import.meta.env.VITE_APP_TITLE ?? ''
