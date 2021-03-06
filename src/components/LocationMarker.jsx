import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import './LocationMarker.scss'

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='locationMarker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-icon' />
    </div>
  )
}

export default LocationMarker
