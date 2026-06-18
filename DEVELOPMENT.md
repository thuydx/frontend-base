# Frontend Base - Development Guide

This guide is for developers and AI coding assistants working on the Next.js edition of the CoreUI PRO admin template. It covers setup, structure, workflows, and conventions specific to this repository.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Working with Routes](#working-with-routes)
- [Adding a New Page](#adding-a-new-page)
- [Building Demo Pages](#building-demo-pages)
- [State Management](#state-management)
- [Styling Guidelines](#styling-guidelines)
- [TypeScript Guidelines](#typescript-guidelines)
- [JSDoc Guidelines](#jsdoc-guidelines)
- [Static Export Constraints](#static-export-constraints)
- [Common Patterns](#common-patterns)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Prerequisites

### Required Software

- Node.js 18+ recommended
- npm 9+ or compatible package manager
- Git

### Helpful Tooling

- Visual Studio Code
- ESLint extension
- TypeScript language support
- React Developer Tools

## Getting Started

### Installation

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

By default Next.js will run a local dev server with fast refresh for route, component, and style changes.

### Build the Project

```bash
npm run build
```

### Run Lint

```bash
npm run lint
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create the production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the repository |
| `npm run zip` | Create the export archive used by the template workflow |

## Project Structure

```text
src/
├── app/                  # App Router routes, layouts, and pages
│   ├── (pages)/          # Standalone pages: auth and errors
│   ├── (views)/          # Dashboard pages inside main shell
│   ├── apps/             # App-like sections with their own layouts
│   └── layout.tsx        # Root layout
├── components/           # Reusable shell and docs components
├── store/                # Redux store and typed selector
├── styles/               # Global and example SCSS
├── _nav.tsx              # Sidebar navigation config
├── _data.ts              # Shared sample data
└── _nav.tsx              # Navigation source
```

### Key Files

- `src/app/layout.tsx`
  Root layout with Redux provider, global style imports, and theme bootstrap script.
- `src/app/(views)/layout.tsx`
  Shared dashboard shell.
- `src/components/AppHeader.tsx`
  Header, theme switcher, dropdowns, breadcrumb integration.
- `src/components/AppSidebar.tsx`
  Sidebar chrome and navigation entry point.
- `src/store/index.ts`
  Shared UI state for shell behavior.
- `src/_nav.tsx`
  Sidebar navigation configuration.

## Working with Routes

This project uses file-based routing via Next.js App Router.

### Route Groups

- `(views)` contains dashboard content rendered inside the shared shell.
- `(pages)` contains pages outside that shell, such as auth and error pages.
- `apps/` contains larger feature areas like email and invoicing.

### Important Rule

Adding a page file does not automatically add it to the sidebar. If a page should be visible in navigation, update both:

1. the page under `src/app/...`
2. the entry in `src/_nav.tsx`

## Adding a New Page

### Basic Workflow

1. Create a new `page.tsx` under the correct route segment.
2. Add `'use client'` only if hooks, browser APIs, or interactive handlers are needed.
3. Import CoreUI PRO components from `@coreui/react-pro`.
4. If it is a demo/documentation page, use `DocsComponents` and `DocsExample`.
5. Add a matching entry to `src/_nav.tsx` if the page belongs in the sidebar.

### Example

```tsx
'use client'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DocsComponents, DocsExample } from '@/components'

export default function ExamplePage() {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/example/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Example</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/example">
              <div>Example content</div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

## Building Demo Pages

Most pages in this repository are documentation-style examples rather than business features. Keep that intent in mind.

### Preferred Structure

- short explanatory paragraph
- one or more `CCard` sections
- examples wrapped in `DocsExample`
- official docs banner via `DocsComponents`

### Content Style

- keep examples focused
- avoid unnecessary custom state unless showcasing interactivity
- prefer realistic labels and demo values
- align terminology with CoreUI documentation

## State Management

Redux is used for shared dashboard shell state.

### Current Shared State

- `sidebarShow`
- `sidebarUnfoldable`
- `asideShow`
- `theme`

### Guidelines

- use Redux for shell-level UI behavior
- use local component state for page-level demos
- keep the reducer shape simple unless there is a strong reason to expand it
- use `useTypedSelector` for typed reads from the store

## Styling Guidelines

### Global Styles

`src/styles/style.scss` is the correct place for shell-level and project-wide styling.

### Example Styles

`src/styles/examples.scss` is for docs/demo presentation only.

### Styling Priorities

1. use CoreUI components
2. use Bootstrap/CoreUI utility classes
3. add minimal SCSS only when necessary

### Avoid

- introducing another component library
- adding large one-off CSS for a small demo
- moving component semantics into CSS when CoreUI props already support the variant

## TypeScript Guidelines

The repository uses strict TypeScript settings with path aliases.

### Expectations

- avoid `any`
- prefer explicit component return types where helpful
- keep props typed
- use `@/` imports for local modules when possible
- keep helper types near the code that uses them unless they are broadly shared

### Path Aliases

Examples:

- `@/components`
- `@/public/images/...`
- `@/store` via direct relative import where already established

## JSDoc Guidelines

JSDoc in this repository is primarily for:

- architectural clarity
- IDE discoverability
- AI assistant context

Good candidates for JSDoc:

- shell components
- store modules
- configuration objects
- route or navigation metadata

Prefer comments that explain:

- what the module or component is responsible for
- what important props mean
- what a function returns

Avoid comments that only restate obvious JSX or assignments.

## Static Export Constraints

The project uses:

```ts
output: 'export'
```

This affects implementation choices.

### Important Consequences

- avoid relying on server-only runtime APIs for ordinary pages
- be careful with `next/image` default optimization
- prefer plain image tags for static demo assets unless export-safe image config is added
- browser-only logic belongs in client components

## Common Patterns

### Hydration-Safe Theme Controls

If UI depends on client-only state such as color mode, guard rendering until mounted. `AppHeader.tsx` is the reference pattern here.

### Dashboard Shell Changes

If a change affects:

- header
- sidebar
- breadcrumb
- footer
- aside

inspect both the component and `src/app/(views)/layout.tsx` before editing.

### New Navigation Entries

If you add a new page to the docs/demo area, update `src/_nav.tsx` at the same time so the app stays coherent.

## Troubleshooting

### Image Optimization Error with Static Export

If you see an error related to `Image Optimization using the default loader is not compatible with { output: 'export' }`, do one of the following:

- use a regular `<img>` for static demo content
- configure images as unoptimized in Next config
- avoid `next/image` unless there is a real need for it

### Sidebar or Theme Not Updating

Check:

- Redux provider is present in `src/app/layout.tsx`
- state keys match the reducer payload
- client components are marked with `'use client'`

### Page Exists but Is Missing from Navigation

Check `src/_nav.tsx`. The route tree and the sidebar config are maintained separately.

## Best Practices

- preserve CoreUI-first implementation choices
- make Next.js-compatible changes, not generic React SPA assumptions
- keep demo pages consistent with neighboring examples
- document architectural changes when introducing new patterns
- prefer small, coordinated edits over broad speculative refactors
