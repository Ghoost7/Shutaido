import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Image from 'next/image';
import Shutaido from "../public/Shutaido.png";


function MyApp({ Component, pageProps }) {
  return (
    
    <div className='max-w-[1240px] m-auto justify-between items-center'>
      <div className='p-10 block top-0 left-0 right-0 z-0'>
          <Navbar/>                     
          <Image 
                  src={Shutaido} 
                  alt="/" 
                  className=
                  "w-full h-full" 
                  layout="responsive"/>        
        <Component {...pageProps} />
        
       </div>    
  </div>
  );
}


export default MyApp
