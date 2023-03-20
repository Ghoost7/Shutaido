import react from "react";

const Contact = ({heading, message}) => {
    return (
        
    <div className="flex items-center justify-center">        
        {/*Overlay*/}
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]'/>
        <div className='p-5 text-black z-[2] nt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>        
                 
             <div className="max-w-[1240px] m-auto p-4 h-screen">

                
                <form className="max-w-[600px] m-auto">
                    <div className="grid grid-cols-2 gap-2">
                        <input className="border shadow-lg p-3" type="text" placeholder="Name" />
                        <input className="border shadow-lg p-3" type="text" placeholder="Email"/>
                    </div>

                    <input className="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject"/>

                    <textarea className="border shadow-lg p-3 w-full" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
                </form>
                   </div>         
            </div>
        </div>
            )
}
export default Contact