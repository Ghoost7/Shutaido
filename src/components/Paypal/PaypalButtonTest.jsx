import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ items }) => {
  const [paypalClientId, setPaypalClientId] = useState('');

  useEffect(() => {
    // Fetch the PayPal client ID from your server
    // This is needed to authenticate with PayPal
    fetch('/api/paypal')
      .then(res => res.json())
      .then(data => setPaypalClientId(data.clientId))
      .catch(error => console.error(error));
  }, []);

  return (
    <PayPalScriptProvider options={{ 'client-id': "ARzokvrPWcI7m27HGcLwbL4OV5wBpHCbZCfjujuw__xoRgZ0SlR-WG3XZLv0S3bQr2YBsaU_fdttQYvP" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: items.reduce((total, item) => total + item.price, 0),
                  currency_code: 'EUR'
                },
                items: items.map(item => ({
                  name: item.name,
                  quantity: item.quantity,
                  unit_amount: {
                    value: item.price,
                    currency_code: 'EUR'
                  }
                }))
              }
            ]
          });
        }}
        onApprove={(data, actions) => {
          // Handle the approved payment
          console.log(data);
          console.log(actions);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
