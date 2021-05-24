import React from "react"
import "./style/MainButton.css"

const Button = props =>{
    return(
        <React.Fragment>
            <a className="Button" href="/">
                <p>{props.contentText}</p>
            </a>
        </React.Fragment>
    );
}

export default Button