import React from 'react'

const Heros = ({heading, message}) => { 
    return (
      
    <div className="">        
        {/*Overlay*/}
        <div>
        <h2 className='flex justify-center p-5 text-black z-[2] nt-[-10rem] text-5xl font-bold'>{heading}</h2> 
        <p className='flex justify-center p-5 text-black z-[2] nt-[-10rem] py-5 text-xl'>{message}</p>
              </div>  
    </div>


    )
}

export default Heros