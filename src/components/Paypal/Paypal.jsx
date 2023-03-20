import CheckoutPage from "./CheckoutPage";


const Paypal = (heading, message) => {
  return (

    <div className="">
   
      <div className="flex items-center justify-center">        
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]'/>
        <div className='p-5 text-black z-[2] nt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            < CheckoutPage/>
        </div>
        </div>
      </div>
     

  );
}

export default Paypal;