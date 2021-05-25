import React from "react"
import Hero from "../../Components/Hero"
import Badge from "../../Components/Badge"
import BadgeForm from "../../Components/BadgeForm"
import "./NewBadge.css"
import api from "../../libs/api"

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

    handleChange = event => {
        this.setState({
            form:{
                ...this.state.form, 
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})
    
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")

        }catch(error){
            this.setState({loading:false, error: error})
            
        }
        
    
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_picture = {this.state.form.header_picture || "image link goes here"}
                                profile_picture = {this.state.form.profile_picture || ""}
                                name = {this.state.form.name || "Janeth Gonzales"}
                                age = {this.state.form.age || "21"}
                                city= {this.state.form.city || "New Yo0rk"}
                                followers = {this.state.form.followers || "20k"}
                                likes = {this.state.form.like || "30k"}
                                post = {this.state.form.like || "40k"}
                                ></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}>

                             </BadgeForm>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default NewBadge;