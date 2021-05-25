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
                <Footer></Footer>
            </div>
        </React.Fragment>

    );
}

export default Layout;