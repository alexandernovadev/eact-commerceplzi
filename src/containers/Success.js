import React, { useContext } from 'react'
import Map from '../components/Map'
import AppContext from '../context/AppContext'

import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

export const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state
  // const direciation = buyer[0].address ? buyer[0].address : 'Calle 14 # 10 -02 Zipaquira- Cundinamarcar'
  // const adrresToLatLong = useGoogleAddress('Calle 14 # 10 -02 Zipaquira- Cundinamarca' )
  const location = {
    lat:'2.565767',
    lng:'-75.78676'
  }
  // console.log("zsi", adrresToLatLong);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="Success-map">
        <Map data={location} />
        </div>
      </div>
    </div>
  )
}
