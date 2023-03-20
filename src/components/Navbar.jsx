import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
        const [nav, setNav] = useState(false);
        const [color, setColor] = useState("transparent")
        const [textColor, setTextColor] = useState("blue")

        const handleNav = () => {
            setNav(!nav);
        };

        useEffect(()=>{
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor("text-blue-900")
            } else {
                setColor("transparent")
                setTextColor('text-blue-900')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return(
        <div style={{backgroundColor:`${color}`}} className="block fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-blue-900">
                <Link href='/'>

                   <h1 style={{color:`${textColor}`}} className="font-bold text-4xl text-blue-900"> Shutaïdo</h1> 
                
                </Link>
                <ul style={{color:`${textColor}`}} className=" hidden sm:flex">
                    <li className="p-4">
                    <Link href='/'>Home</Link>
                    </li>                    
                    <li className="p-4">
                    <Link href='/Instructor'>Instructeurs</Link>
                    </li>
                    <li className="p-4">
                    <Link href='/Animator'>Animateurs</Link>
                    </li>
                    <li className="p-4">
                    <Link href='/Shop'>Shop</Link>
                    </li>
                    <li className="p-4">
                    <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/*Mobile button*/}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav? <AiOutlineClose size={20} style={{color:`${textColor}`}}/> : <AiOutlineMenu size={20} style={{color:`${textColor}`}}/>}
                </div>

                {/*Mobile Menu*/}

                <div className={
                    nav?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
                        :  "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
                }
                >
                    <ul>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                        <Link href='/'>Home</Link>
                    </li>                        
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                    <Link href='/Instructor'>Instructeurs</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                    <Link href='/Animator'>Animateurs</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                    <Link href='/Shop'>Shop</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                    <Link href='/contact'>Contact</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar