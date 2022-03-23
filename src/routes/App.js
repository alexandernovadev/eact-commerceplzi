import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../containers/Home'
import { CheckOut } from '../containers/CheckOut'
import { Information } from '../containers/Information'
import { Payment } from '../containers/Payment'
import { Success } from '../containers/Success'
import { NotFound } from '../containers/NotFound'

import Layout from '../components/Layout'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="checkout" element={<CheckOut />} />
            <Route exact path="checkout/infomation" element={<Information />} />
            <Route exact path="checkout/payment" element={<Payment />} />
            <Route exact path="checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  )
}
export default App
