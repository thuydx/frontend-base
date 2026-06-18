# Frontend Base Architecture

This document provides a fuller architectural overview of the Frontend Base. It is intended for contributors, maintainers, and AI coding tools that need a reliable map of the codebase before making changes.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Architectural Pattern](#architectural-pattern)
- [Directory Structure](#directory-structure)
- [Routing System](#routing-system)
- [Layout Hierarchy](#layout-hierarchy)
- [State Management](#state-management)
- [Styling Architecture](#styling-architecture)
- [Documentation Components](#documentation-components)
- [Forms and PRO Components](#forms-and-pro-components)
- [Plugins and Feature Areas](#plugins-and-feature-areas)
- [Build and Export Model](#build-and-export-model)
- [TypeScript and Tooling](#typescript-and-tooling)
- [AI and Contributor Notes](#ai-and-contributor-notes)

## Project Overview

The Frontend Base is a professional dashboard application built with Next.js, React, TypeScript, Redux, Sass, and CoreUI React PRO. The repository mixes a reusable dashboard shell with many demo and documentation-oriented pages that showcase CoreUI PRO components.

The project is optimized for:

- component demos and documentation pages
- dashboard-style application shells
- static export deployment
- fast iteration on top of CoreUI React PRO
- predictable layout state shared across routes

Unlike the React Router version, this edition uses Next.js App Router and file-based routing. That changes how pages, layouts, and route groups are organized, but the visual shell remains very similar.

## Technology Stack

### Frontend Core

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.2 | Framework, App Router, build and export pipeline |
| React | 19.2.4 | Component-based UI |
| React DOM | 19.2.4 | DOM rendering |
| TypeScript | 6.0.2 | Static typing |

### UI Framework

| Library | Version | Purpose |
|---------|---------|---------|
| `@coreui/coreui-pro` | 5.24.2 | CoreUI PRO SCSS and Bootstrap-based styling |
| `@coreui/react-pro` | 5.24.1 | CoreUI PRO React components |
| `@coreui/icons` | 3.0.1 | Icon definitions |
| `@coreui/icons-react` | 2.3.0 | React icon renderer |
| `simplebar-react` | 3.3.2 | Custom scroll areas used by sidebar-related UI |

### State and Utilities

| Library | Version | Purpose |
|---------|---------|---------|
| `@reduxjs/toolkit` | 2.11.2 | Store configuration |
| `react-redux` | 9.2.0 | React bindings for Redux |
| `classnames` | 2.5.1 | Conditional class composition |

### Visualization and Integrations

| Library | Version | Purpose |
|---------|---------|---------|
| `@coreui/chartjs` | 4.2.0 | CoreUI defaults for Chart.js |
| `@coreui/react-chartjs` | 3.0.0 | React chart components |
| `@fullcalendar/*` | 6.1.20 | Calendar views and interactions |
| `@react-google-maps/api` | 2.20.8 | Google Maps integration |

## Architectural Pattern

The application follows a dashboard-shell architecture:

1. `src/app/layout.tsx` sets up global concerns for the whole app.
2. `src/app/(views)/layout.tsx` provides the dashboard shell used by the main app area.
3. Individual route pages under `src/app/(views)` render feature demos inside that shell.
4. Standalone auth and error pages live in a separate route group under `src/app/(pages)`.

This creates a clean split between:

- global bootstrapping
- persistent dashboard chrome
- feature pages
- standalone pages outside the dashboard shell

The shell itself is composed from reusable components in `src/components`:

- `BeSidebar`
- `BeHeader`
- `BeFooter`
- `AppAside`
- `Breadcrumb`

## Directory Structure

```text
coreui-pro-next-js-admin-template/
├── public/
│   ├── brand/
│   └── images/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   ├── (views)/
│   │   ├── apps/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── header/
│   │   ├── BeAside.tsx
│   │   ├── BeBreadcrumb.tsx
│   │   ├── BeFooter.tsx
│   │   ├── BeHeader.tsx
│   │   ├── BeSidebar.tsx
│   │   ├── BeSidebarNav.tsx
│   │   ├── DocsComponents.tsx
│   │   ├── DocsExample.tsx
│   │   └── DocsIcons.tsx
│   ├── store/
│   │   └── index.ts
│   ├── styles/
│   │   ├── style.scss
│   │   ├── examples.scss
│   │   └── vendors/
│   ├── _nav.tsx
│   ├── _data.ts
│   └── _nav.tsx
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Routing System

The project uses Next.js App Router, so routing is defined by folders and files under `src/app`.

### Main Route Groups

- `src/app/(views)/`
  Primary dashboard routes rendered inside the shell layout.
- `src/app/(pages)/`
  Standalone pages such as login, register, and error screens.
- `src/app/apps/`
  App-like feature sections such as email and invoicing with their own layouts.

### Important Route Files

- `src/app/layout.tsx`
  Root layout with Redux `Provider`, global SCSS, and theme bootstrap script.
- `src/app/(views)/layout.tsx`
  Shared dashboard layout.
- `src/app/(views)/page.tsx`
  Dashboard landing page.
- `src/app/(views)/loading.tsx`
  Loading UI for the dashboard area.

### Navigation Source of Truth

BeSidebar navigation is configured manually in `src/_nav.tsx`. This file is not automatically derived from the file tree, so route additions usually require two coordinated changes:

1. add the page under `src/app/...`
2. add the corresponding nav item in `src/_nav.tsx`

This explicit model is useful for AI tools because it reflects the intended public navigation structure, not just the available files.

## Layout Hierarchy

### Root Layout

`src/app/layout.tsx` is responsible for:

- loading `style.scss`
- loading `examples.scss`
- wrapping the app with Redux `Provider`
- applying initial color-mode script to the document before hydration

The root layout is client-rendered because it uses the Redux provider and browser-side theme bootstrapping.

### Dashboard Layout

`src/app/(views)/layout.tsx` builds the main shell:

- `BeSidebar`
- `BeHeader`
- central content wrapper with `CContainer`
- `BeFooter`
- `AppAside`

This is the layout most feature work plugs into.

### Feature Layouts

Some sections define additional layouts under `src/app/apps/.../layout.tsx` to create app-specific framing on top of the shared shell conventions.

## State Management

Global UI state is defined in `src/store/index.ts`.

### Current State Shape

- `sidebarShow`
- `sidebarUnfoldable`
- `asideShow`
- `theme`

This state is intentionally narrow and focused on shell behavior rather than business data.

### Store Characteristics

- built with Redux Toolkit `configureStore`
- uses a lightweight reducer pattern based on a generic `set` action
- exported typed hooks include `useTypedSelector`
- store is created once and provided at the root layout

### When to Use Redux Here

Use Redux in this repository for:

- shared dashboard chrome behavior
- sidebar visibility
- aside visibility
- shell-level visual preferences

Avoid Redux for:

- page-local form state
- temporary demo interactions
- component-only UI state that does not need cross-route coordination

## Styling Architecture

The styling system is layered.

### `src/styles/style.scss`

This is the main stylesheet. It imports CoreUI PRO SCSS and project-level shell adjustments such as:

- page background
- wrapper behavior
- sidebar brand spacing
- header/footer sizing

### `src/styles/examples.scss`

This file exists specifically for docs/demo presentation. It should contain example-only styling rather than foundational application styling.

### Styling Principles

- prefer CoreUI and Bootstrap utility classes first
- use SCSS only when utilities are not enough
- keep shell-level overrides in `style.scss`
- keep demo-specific polish in `examples.scss`
- preserve compatibility with CoreUI variables and color modes

## Documentation Components

The project includes helper components that standardize the look and structure of demo pages.

### `DocsComponents`

Use for pages that document a CoreUI component and link out to official docs.

### `DocsExample`

Wraps example code previews and keeps demos visually consistent.

### `DocsIcons`

Used for icon-related content and links to icon documentation.

These components are important because much of the repository is effectively a polished documentation/demo surface, not just application UI.

## Forms and PRO Components

The repository showcases many CoreUI PRO features under `src/app/(views)/forms` and other route segments. Examples include:

- multi-select
- date picker
- time picker
- one-time password input
- password input
- range slider
- rating
- stepper
- chip and chip input

The demo pages should generally:

- import only from `@coreui/react-pro`
- explain the use case in short prose
- use `DocsComponents`
- wrap rendered snippets in `DocsExample`

## Plugins and Feature Areas

Several sections demonstrate deeper integrations:

- charts
- FullCalendar
- Google Maps
- smart table
- email app
- invoicing app
- widgets

These features often have more internal helper files and examples than simple component demo pages.

## Build and Export Model

The project is configured for static export.

### `next.config.ts`

```ts
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
}
```

### Consequences

- pages should be compatible with static export
- do not depend on server-only runtime behavior unless the config changes
- be careful with `next/image` default optimization because it conflicts with export mode unless explicitly configured otherwise
- browser-only logic must be isolated to client components

## TypeScript and Tooling

### TypeScript

`tsconfig.json` enables:

- strict mode
- `moduleResolution: "bundler"`
- path aliases such as `@/*`
- JSX via `react-jsx`
- no emit

### ESLint

The repo uses `eslint-config-next` through `eslint.config.mjs`. This means changes are checked against Next.js-specific rules, including:

- image usage recommendations
- React/JSX best practices
- app/router conventions where applicable

## AI and Contributor Notes

When modifying the repository:

- inspect `src/_nav.tsx` before changing route-visible features
- inspect `src/app/(views)/layout.tsx` before changing anything shell-related
- keep Next.js App Router structure intact
- prefer route-group-aware changes over ad hoc layout duplication
- document new architectural patterns in JSDoc and this file

For AI tools specifically:

- treat `src/_nav.tsx` as the navigational index
- treat `src/app/layout.tsx` as the bootstrapping root
- treat `src/app/(views)/layout.tsx` as the dashboard shell
- treat `src/components/Docs*` as the standard documentation page toolkit
