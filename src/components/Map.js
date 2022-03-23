import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ data }) => {

  console.log("esto ",data);
  const mapStyles = {
    height: '50vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: +data.lat,
    lng:  +data.lng,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyDaAKSeSDBFGD5lgG5o3nabOGxgq9mP2vY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={4} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
