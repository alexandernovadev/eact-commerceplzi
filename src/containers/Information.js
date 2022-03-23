import React, { useRef, useContext } from 'react'
import AppContext from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/components/Information.css'
import { Helmet } from 'react-helmet'

export const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext)
  const navigate = useNavigate()

  // console.log(state)
  const form = useRef(null)
  console.log(form)

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = Object.fromEntries(formData)
    addToBuyer(buyer)
    navigate('/checkout/payment', { replace: true })
  }

  return (
    <>
      <Helmet>
        <title>Store - Information</title>
      </Helmet>

      <div className="Information animate__animated animate__slideInLeft">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Codigo postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button onClick={handleSubmit}>Pagar</button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item, i) => (
            <div className="Information-item" key={new Date().getTime() + i}>
              <div className="Information-element">
                <h4>ITEM Name</h4>
                <span>$10</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
