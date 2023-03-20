import React from "react";
import Contact from "../components/Contact";
import Heros from "../components/Heros"


const contact = () => {
    return(
        <div className="">
            <div>
            <Heros heading={"Contact"} message="Ready to Work together"/>
            <Contact/>
            </div>
        </div>
    )
}

export default contact