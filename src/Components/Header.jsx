import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://image.flaticon.com/icons/png/128/4689/4689456.png" alt="Icon"/>
                </div>
            </React.Fragment>

        );
    }
}

export default Header;