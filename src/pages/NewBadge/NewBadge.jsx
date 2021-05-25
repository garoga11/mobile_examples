import React from "react"
import Hero from "../../Components/Hero"
import Badge from "../../Components/Badge"
import "./NewBadge.css"

class NewBadge extends React.Component{

    state  = {
        loading: false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge>
                            header_picture = {this.state.form.header_picture || "image link goes here"}
                            profile_picture = {this.state.form.profile_picture || ""}
                            name = {this.state.form.name || "Janeth Gonzales"}
                            age = {this.state.form.age || "21"}
                            city= {this.state.form.city || "New Yo0rk"}
                            followers = {this.state.form.followers || "20k"}
                            likes = {this.state.form.like || "30k"}
                            post = {this.state.form.like || "40k"}
                        </Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default NewBadge;