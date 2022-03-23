import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import AppContext from '../context/AppContext'

const Header = () => {


  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <div className="Header">
      <h1 className="Header-title">Store</h1>
      <div className="Header-checkout">
        <nav style={{ display: 'flex' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/checkout"><i className="fas fa-shopping-basket" /></Link>(
            {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
          )|{" "}
          <Link to="/checkout/infomation">Information</Link>|{' '}
          <Link to="/checkout/payment">Payment</Link>|{' '}
          <Link to="checkout/success">Success</Link>|{' '}
          <Link to="ss">NotFound</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
