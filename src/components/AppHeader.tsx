/**
 * AppHeader Component
 *
 * Main application header with navigation, theme switcher, and user menu.
 * Features include:
 * - Sidebar toggle button
 * - Aside panel toggle button (PRO feature)
 * - Primary navigation links
 * - Notification, message, and task dropdowns (PRO)
 * - Theme switcher with light/dark/auto modes
 * - Breadcrumb navigation
 * - Sticky positioning with scroll shadow effect
 * - Hydration-safe color mode rendering for Next.js
 *
 * @component
 * @example
 * return (
 *   <AppHeader />
 * )
 */
import React, { JSX, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'

import {
  CContainer,
  CForm,
  CFormInput,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CInputGroup,
  CInputGroupText,
  useColorModes,
} from '@coreui/react-pro'
import {
  cilContrast,
  cilApplicationsSettings,
  cilMenu,
  cilMoon,
  cilSearch,
  cilSun,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { useTypedSelector } from './../store'

import {
  AppHeaderDropdown,
  AppHeaderDropdownMssg,
  AppHeaderDropdownNotif,
  AppHeaderDropdownTasks,
} from './header/'

/**
 * Renders the application header used across dashboard views.
 *
 * @returns {JSX.Element} Application header component
 */
const AppHeader = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)
  const { colorMode, setColorMode } = useColorModes(
    'coreui-pro-next-js-admin-template-theme-modern',
  )
  const [isMounted, setIsMounted] = useState(false)

  const dispatch = useDispatch()
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)
  const asideShow = useTypedSelector((state) => state.asideShow)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="px-4" fluid>
        <CHeaderToggler
          className={classNames('d-lg-none', {
            'prevent-hide': !sidebarShow,
          })}
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CForm className="d-none d-sm-flex">
          <CInputGroup>
            <CInputGroupText id="search-addon" className="bg-body-secondary border-0 px-1">
              <CIcon icon={cilSearch} size="lg" className="my-1 mx-2 text-body-secondary" />
            </CInputGroupText>
            <CFormInput
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              className="bg-body-secondary border-0"
            />
          </CInputGroup>
        </CForm>
        <CHeaderNav className="d-none d-md-flex ms-auto">
          <AppHeaderDropdownNotif />
          <AppHeaderDropdownTasks />
          <AppHeaderDropdownMssg />
        </CHeaderNav>
        <CHeaderNav className="ms-auto ms-md-0">
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {isMounted ? (
                <>
                  {colorMode === 'auto' && <CIcon icon={cilContrast} size="lg" />}
                  {colorMode === 'dark' && <CIcon icon={cilMoon} size="lg" />}
                  {colorMode === 'light' && <CIcon icon={cilSun} size="lg" />}
                </>
              ) : (
                <CIcon icon={cilContrast} size="lg" style={{ opacity: 0 }} />
              )}
            </CDropdownToggle>
            {isMounted && (
              <CDropdownMenu>
                <CDropdownItem
                  active={colorMode === 'light'}
                  className="d-flex align-items-center"
                  as="button"
                  type="button"
                  onClick={() => setColorMode('light')}
                >
                  <CIcon className="me-2" icon={cilSun} size="lg" /> Light
                </CDropdownItem>
                <CDropdownItem
                  active={colorMode === 'dark'}
                  className="d-flex align-items-center"
                  as="button"
                  type="button"
                  onClick={() => setColorMode('dark')}
                >
                  <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
                </CDropdownItem>
                <CDropdownItem
                  active={colorMode === 'auto'}
                  className="d-flex align-items-center"
                  as="button"
                  type="button"
                  onClick={() => setColorMode('auto')}
                >
                  <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
                </CDropdownItem>
              </CDropdownMenu>
            )}
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <AppHeaderDropdown />
        </CHeaderNav>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', asideShow: !asideShow })}
          style={{ marginInlineEnd: '-12px' }}
        >
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
