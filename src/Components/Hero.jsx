import React from "react"
import HeroImage from "../images/flowers.jpg"
import "./style/Hero.css"

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src={HeroImage}></img>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hero;