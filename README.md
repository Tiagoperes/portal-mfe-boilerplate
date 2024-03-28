## Introduction
A Boilerplate for using the StackSpot Web Components in a project with Module Federation.

This is not a Monorepo! Every package inside of the directory `packages` is expected to be a separate repository in a real world environment.

There are 3 packages:
- host: the host application.
- account: a module loaded by the host.
- studios: another module loaded by the host.

## Installation
For each project inside `/projects`, run:

```sh
pnpm i
```

## Running the modules in a stand-alone environment
Every module is independent from each other and it's much easier to develop and debug a module by running it without Module Federation.

To start up the standalone module, inside the module's directory, run:

```sh
pnpm start
```

This will run the app with a default Layout wrapper, which simulates the host application.

## Running the Host Application with all of its modules
1. Build both modules:
```sh
cd packages/account
pnpm build
cd ../studios
pnpm build
```
2. Serve both modules in preview mode:
```sh
## First terminal window
cd packages/account
pnpm preview
## Second terminal window
cd packages/studios
pnpm preview
```
3. Start up the host application:
```sh
cd packages/host
pnpm start
```

When building in preview mode, the variables at `.env.preview` will be used.

The commands above will:
- start a modularized version of the project "account" in "http://localhost:3001";
- start a modularized version of the project "studios" in "http://localhost:3002";
- start the host application at "http://localhost:3000".

## How does it work
- The host application acts as a shell, loading all the modules when needed.
- The main menu (sections) uses the modules "menu-sections", provided by "account", and "menu-sections", provided by "studios". Both are React hooks.
- The menu content (second panel left-to-right) uses the modules "menu-content", provided by "account", and "menu-content", provided by "studios". The
first is a constant (static menu) while the second is a React hook (more complex, changes according to the route).
- The current view uses the modules "View", provided by "account", and "View", provided by "studios". They're both React components.

The decision of what to render depends on the current route.

## Testing
TODO

## Navigation
In order for it to work in a modular environment, some changes have been made to the navigation library (Citron Navigator). The relevant changes are
the following:

#### Wildcards
Wildcards are now accepted at the end of paths. This tells the navigator we don't yet know all the routes in that path and we should accept anything
as valid instead of throwing a 404.

This is only useful in a host application, see the example below:

```yaml
+ root (/):
  + account (/account/*):
  + studios (/studios/*):
```

`account` and `studios` are modules that will load their own routes, the host application has no idea yet what these routes are, so we add the
wildcard.

#### Route Links (modules)
In a module, we must tell the navigator this is a module and where it should attach itself in the host application. Let's take the module `account`
as an example.

All the routes of the module `account` must replace the route named `root.account` in the host application. We declare this in the `navigation.yaml`
of the module:

```yaml
+ root ~ root.account (/account):
  + environments (/environments):
    search: string
  + organization (/organization):
  + workspaces (/workspaces):
    search: string
    type: string ('ALL' | 'OWNED')
```

In the module `application` we'll access the routes normally, but when running in a modular environment, the navigator will know that the root route
of this module must replace `root.account` in the parent. The character `~` is what indicates the link between the module and the host.

- NOTE 1: when running `application` as a standalone app, the route `/` will result in a 404, since our root is actually at the path `/account`.
- NOTE 2: the host navigator will accept everything under `account/` until the module is loaded. When it is loaded, the wildcard is replaced by the
actual route (from the module) and any attempt to access an invalid route will result in a 404.
