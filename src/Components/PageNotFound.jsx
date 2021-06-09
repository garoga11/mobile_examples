import React, { Component } from "react"
import Footer from "./Footer"
import "./style/PageNotFound.css"

const PageNotFound = () =>{
    return(
        <React.Fragment>
            <img className="Img" src="https://image.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg" alt="404 page not found"/>
            <Footer s={{bottom:0}}> </Footer>
        </React.Fragment>
    );     

}

export default PageNotFound;