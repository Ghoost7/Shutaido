import React from "react";
import Heros from "../components/Heros"
import ListAnim from "../components/ListAnim";


const Animator = () => {
    return(
        <div className= "custom-img bg-center bg-cover bg-scroll">
            <Heros heading={"Animateurs"} message=""/>
          <ListAnim/>
        </div>
    )
}

export default Animator