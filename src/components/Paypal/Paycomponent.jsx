import { PayPalButtons } from '@paypal/react-paypal-js';

function MyComponent() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.01'
          }
        }
      ]
    });
  };
 
  return (
    <PayPalButtons createOrder={createOrder} />
  );
}

export default MyComponent;