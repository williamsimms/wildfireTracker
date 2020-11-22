import React from 'react'
import GoogleMapReact from 'google-map-react'
import { API_KEY } from '../utility/API'
import LocationMarker from './LocationMarker'
import './Map.scss'

const Map = ({ eventData, center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact bootstrapURLKeys={{ key: API_KEY }} defaultCenter={center} defaultZoom={zoom}>
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}

export default Map
