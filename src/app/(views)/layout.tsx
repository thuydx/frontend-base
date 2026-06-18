'use client'

import { AppAside, AppSidebar, AppFooter, AppHeader, AppBreadcrumb } from '@/components'
import { CContainer } from '@coreui/react-pro'

/**
 * Dashboard layout wrapping all protected dashboard views.
 *
 * It renders the persistent application shell shared by feature pages:
 * sidebar, header, content container, footer, and right aside panel.
 *
 * @param {{ children: React.ReactNode }} props Layout props
 * @returns {React.ReactNode} Full dashboard application layout
 */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <CContainer lg className="px-4">
            <AppBreadcrumb />
            {children}
          </CContainer>
        </div>
        <AppFooter />
      </div>
      <AppAside />
    </>
  )
}
