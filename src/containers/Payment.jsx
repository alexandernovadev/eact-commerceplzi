import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import '../styles/components/Payment.css'
import '../styles/components/Products.css'
import { Link } from 'react-router-dom'

// import { PayPalBtn } from './PayPalButton'

export const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state
  const history = useNavigate()

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        {cart.length > 0 ? (
          <>
            <h3>Resument del pedido:</h3>
            {cart.map((item) => (
              <div className="Payment-item" key={item.title}>
                <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
              </div>
            ))}
            <div className="Payment-button">
              {/* <PayPalBtn
                handlePaymentSuccess={handlePaymentSuccess}
                handleSumTotal={handleSumTotal}
              /> */}
            <Link to="/checkout/success">
              Pagar 
            </Link>
            </div>
          </>
        ) : (
          <div className='Product-item-info'>
            <h3>No tienes productos </h3>
            <button className="Payment-button">Ir a comprar</button>
          </div>
        )}
      </div>
      <div />
    </div>
  )
}
