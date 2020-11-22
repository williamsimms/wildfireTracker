import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import './App.scss'

const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  return (
    <div className='app'>
      <Map />
    </div>
  )
}

export default App
