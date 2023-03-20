import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const initialOptions = {
  "client-id": "ARzokvrPWcI7m27HGcLwbL4OV5wBpHCbZCfjujuw__xoRgZ0SlR-WG3XZLv0S3bQr2YBsaU_fdttQYvP",
  currency: "EUR",
  intent: "capture",
};

export default function PayPalButton() {
  return (

    <PayPalScriptProvider
      options={{initialOptions}}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          // This function will be called when the user clicks on the PayPal button
          // and will return the order ID.
          return actions.order.create({
            purchase_units: [
              {
                amount: {             
                  value: '22.00',
                  
                }
              }
            ]
          });
        }}
        
        onApprove={(data, actions) => {
          // This function will be called when the user approves the payment.
          return actions.order.capture().then(function(details) {
            // Show a success message to the user.
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          console.log(data)  
          });
        }}        
      />
    </PayPalScriptProvider>
  );
}
