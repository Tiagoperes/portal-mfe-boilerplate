# StackSpot Portal Boilerplate Alpha

This boilerplate is not yet finalized, but represents the current architecture used by the web-portals in StackSpot.

## Navigation

The navigation is represented by the file `navigation.yaml` at the root directory.

- Each line in the format `+ routeName (routePath):` represents a route. `routePath` can contain variables declared in the format `{name}`;
  example: `+ studio (/studios/{studioId}):`.
- Each route under another route makes a sub-route of the parent.
- Each line in the format `paramName: paramType (tsType)` under a route, represent one of its search parameters. `paramType` can be
  `string`, `boolean`, `number`, `object` or `array`. `(tsType)` is optional and when present, it's used to define the typescript type of
  the parameter. Example: `documentType: string ('cpf' | 'rg' | 'cnh' | 'passport')`; in this example, the searchParam `documentType` is not
  any string when performing type validation.

To generate code based on the navigation file, run:

```sh
pnpm generate:navigation
```

### Views

Each route UI must be defined in the file `src/views/hook.tsx`.

The boilerplate navigation contains some route examples. Replace them with your actual routes.

### Menus

The menus are defined as a hook, just like the views. To edit the example, modify `src/menu/hook`.

Use the menu "studios" to see the interaction with the navigation. The other menus don't do anything

## Layout

The home page shows some examples of common layout requirements, please check them all for guidance on how to interact with the layout.

## Network

We don't yet have a default way for making network requests on StackSpot Web Applications. This will be defined further down the line.
What we can do is inform that whatever solution we decide on, it will:

- be based on REST, not GraphQL;
- be managed by the library react-query;
- use generated code from the OpenAPI JSON files.

Using one or more of the guidelines above will greatly reduce the amount of future refactoring.

### Authentication

The authentication is already setup and uses the URLs provided in the environment files (`.env.*`).

- To get details on the current session: `sessionManager.getSession()`.
- To get details on the user: `sessionManager.getSession().getTokenData()`.
- To make an authenticated request: `sessionManager.getSession().fetch(...args)`. This function has the same signature as the browser's
  fetch function.

## Stability

None of the libraries under `@stack-spot/*` are stable yet. They don't have every feature we need yet and they might have bugs. These
libraries will evolve with the refactoring of the EDP Portal. For any feature request or bug report, please contact the StackSpot Web Team.

These libraries are also not yet documented.

Feel free to replace whatever doesn't meet your requirements. But remember that these libraries will be updated constantly and it is our
intention to use them in every StackSpot Web Application when they become stable.

## Installing and running

### Pre-installation

1. Make sure you have Node >= 18 installed. To check this, type `node -v` in a terminal window. If you don't have it, follow the
   instructions [here](https://nodejs.org/en).
2. Make sure you have PNPM >= 8 installed. To check this, type `pnpm -v` in a terminal window. If you don't have it, in a terminal window
   type:

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

If the commands above don't work, please follow the instructions [here](https://pnpm.io/installation)

### Installation

In a terminal window, in the root directory, run:

```sh
pnpm i
```

### Running

```sh
pnpm start
```

The site will always run with the variables set in `.env.development`, if you need to change the environment, create a file named
`.env.development.local` and copy everything you need there. `.env.development.local` has priority over `.env.development` and is ignored
by git commits.
