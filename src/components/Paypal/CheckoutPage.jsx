import React from 'react';
import PayPalButton from './PaypalButtonTest';

const items = [
  { name: '13 mouvements du Shutaïdo', quantity: 1, price: 22 },
];

const CheckoutPage = () => {
  return (
    <div>      
      <PayPalButton items={items} />
    </div>
  );
};

export default CheckoutPage;
