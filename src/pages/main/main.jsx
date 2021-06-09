import React from "react"
import Hero from "../../Components/Hero"
import Button from "../../Components/MainButton"
import Footer from "../../Components/Footer"
import "./main.css"

const Main = (props) => {
    return (
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Start"} theme={"Button"} link={"/badges"}></Button>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
            <Footer s={{bottom:0}}> </Footer>
        </React.Fragment>
    );
} 

export default Main;