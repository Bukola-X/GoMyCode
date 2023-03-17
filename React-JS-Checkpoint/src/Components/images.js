// import React, { useState } from 'react'
 import hotel2 from "../assets/hotel2.jpeg"
 import hotel3 from "../assets/hotel3.jpeg"

const Images = () => {
    return (
        <div className = "checkpoint">
            <img className="hotel1" src={require("../assets/hotel1.jpg")} alt={"First slide"}/>
            <img className="hotel1" src={hotel2} alt="Second Slide"/>
            <img className="hotel1" src={hotel3} alt="Third Slide"/>
        </div>
    )
}

export default Images;