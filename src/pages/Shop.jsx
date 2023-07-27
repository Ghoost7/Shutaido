import React from "react";
import Heros from "../components/Heros"
import PayPalButton from "../components/Paypal/PaypalButton";


const Shop = () => {
    
    return(
        
        <div className= "">
            <div>
                <Heros heading={"Shop"} message="Buy the 13 movements of shutaido"/>
                <div className="relative flex justify-center items-center">          
                <PayPalButton/>       
                </div>      
            </div>
        </div>
        
    )
}

export default Shop