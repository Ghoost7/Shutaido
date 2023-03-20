import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton({ amount }) {
  const initialOptions = {
    "client-id": "AYy7GllBkvuI473NGjEQZ_WlNBK3M-8oRASA3ZLsntlXyYW7K3KZI8vK__mmajGokPM2t2c39jtb4YFv",
    currency: "EUR",
    intent: "capture",
  };
  
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            // Call your server to save the transaction
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalButton
