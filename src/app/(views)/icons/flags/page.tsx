'use client'

import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react-pro'
import { flagSet } from '@coreui/icons'

import { DocsIcons } from '@/components'
import { getIconsView } from '../IconsView'

const CoreUIFlagsIcons = () => {
  return (
    <>
      <DocsIcons />
      <CCard className="mb-4">
        <CCardHeader>Flag Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIFlagsIcons
