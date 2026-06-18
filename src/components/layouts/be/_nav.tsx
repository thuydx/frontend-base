/**
 * Sidebar navigation configuration for the dashboard shell.
 *
 * This module defines grouped navigation entries used by `AppSidebarNav`.
 * It is intentionally static, so tools and AI assistants can reason about
 * the route structure without traversing the full application tree.
 *
 * @module _nav
 */
import React, { ElementType, JSX } from 'react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

/**
 * Optional badge metadata rendered next to navigation labels.
 */
export type Badge = {
  color: string
  text: string
}

/**
 * Single navigation item or group entry used by the sidebar tree.
 */
export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

/**
 * Static sidebar navigation model consumed by `AppSidebarNav`.
 */
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
    href: '/',
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   href: '/demo/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   href: '/demo/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Components',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   href: '/demo/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       href: '/demo/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       href: '/demo/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Calendar',
  //       href: '/demo/base/calendar',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       href: '/demo/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       href: '/demo/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Chip',
  //       href: '/demo/base/chip',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       href: '/demo/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       href: '/demo/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       href: '/demo/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       href: '/demo/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       href: '/demo/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       href: '/demo/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       href: '/demo/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       href: '/demo/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       href: '/demo/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tabs',
  //       href: '/demo/base/tabs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       href: '/demo/base/tooltips',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Virtual Scroller',
  //       href: '/demo/base/virtual-scroller',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   href: '/demo/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       href: '/demo/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       href: '/demo/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       href: '/demo/buttons/dropdowns',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Loading Buttons',
  //       href: '/demo/buttons/loading-buttons',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   href: '/demo/forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       href: '/demo/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       href: '/demo/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Chip Input',
  //       href: '/demo/forms/chip-input',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Date Picker',
  //       href: '/demo/forms/date-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Date Range Picker',
  //       href: '/demo/forms/date-range-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       href: '/demo/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       href: '/demo/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Multi Select',
  //       href: '/demo/forms/multi-select',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'OTP Input',
  //       href: '/demo/forms/otp-input',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Password Input',
  //       href: '/demo/forms/password-input',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       href: '/demo/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range Slider',
  //       href: '/demo/forms/range-slider',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Rating',
  //       href: '/demo/forms/rating',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Stepper',
  //       href: '/demo/forms/stepper',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       href: '/demo/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Stepper',
  //       href: '/demo/forms/stepper',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Time Picker',
  //       href: '/demo/forms/time-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       href: '/demo/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       href: '/demo/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   href: '/demo/icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       href: '/demo/icons/free',
  //       badge: {
  //         color: 'success-gradient',
  //         text: 'FREE',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       href: '/demo/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       href: '/demo/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   href: '/demo/notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       href: '/demo/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       href: '/demo/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       href: '/demo/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       href: '/demo/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   href: '/demo/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info-gradient',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Smart Table',
  //   icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   href: '/demo/smart-table',
  // },
  {
    component: CNavTitle,
    name: 'Plugins',
  },
  // {
  //   component: CNavItem,
  //   name: 'FullCalendar',
  //   icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   href: '/demo/plugins/fullcalendar',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  //   href: '/demo/plugins/charts',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Google Maps',
  //   icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   href: '/demo/plugins/google-maps',
  // },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavItem,
    name: 'Demo',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
    href: '/demo/',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       href: '/demo/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       href: '/demo/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       href: '/demo/e404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       href: '/demo/e500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Apps',
  //   icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavGroup,
  //       name: 'Invoicing',
  //       icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //       href: '/demo/apps/invoicing',
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Invoice',
  //           badge: {
  //             color: 'danger-gradient',
  //             text: 'PRO',
  //           },
  //           href: '/demo/apps/invoicing/invoice',
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       name: 'Email',
  //       href: '/demo/apps/email',
  //       icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Inbox',
  //           badge: {
  //             color: 'danger-gradient',
  //             text: 'PRO',
  //           },
  //           href: '/demo/apps/email/inbox',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Message',
  //           badge: {
  //             color: 'danger-gradient',
  //             text: 'PRO',
  //           },
  //           href: '/demo/apps/email/message',
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Compose',
  //           badge: {
  //             color: 'danger-gradient',
  //             text: 'PRO',
  //           },
  //           href: '/demo/apps/email/compose',
  //         },
  //       ],
  //     },
  //   ],
  // },
]

export default _nav
