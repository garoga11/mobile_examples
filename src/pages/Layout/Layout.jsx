import React from "react"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import './Layout.css'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
               <Header></Header>
                {props.children}
                <Footer s={{bottom:0}}> </Footer>
            </div>
        </React.Fragment>

    );
}

export default Layout;