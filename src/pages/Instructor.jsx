import React from "react";
import ListInst from "../components/ListInst";
import Heros from "../components/Heros"

const Instructor = () => {
    return(
        <div className="">
            <Heros heading={"Instructeurs"} message="Liste instructeurs"/>
          <ListInst/>
        </div>
    )
}

export default Instructor