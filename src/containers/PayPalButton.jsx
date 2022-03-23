import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export const PayPalBtn = ({ handlePaymentSuccess, handleSumTotal }) => {
  const paypalOtions = {
    clientId: 'ABNyKfSQPCVGhyivickm67aa2RqxAkbdgR7ycM8jlplAK5CkOatNdcXeA123',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  return (
    <PayPalButton
      amount={handleSumTotal()}
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details) => {
        console.log('Woor ddoodododoododododdjh')
        return alert(
          'Transaction completed by ' + details.payer.name.given_name
        )
      }}
      onPaymentStart={(data) => console.log(data)}
      paypalOptions={paypalOtions}
      buttonStyles={buttonStyles}
      onPaymentStart={() => console.log('Start Payment')}
      onApprove={(data) => handlePaymentSuccess(data)}
      onError={(error) => console.warn("Hubo un hp error",error)}
      onCancel={(data) => console.log(data)}
    />
  )
}
