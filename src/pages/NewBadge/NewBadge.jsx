import React from "react"
import Hero from "../../Components/Hero"
import Badge from "../../Components/Badge"
import BadgeForm from "../../Components/BadgeForm"
import Footer from "../../Components/Footer"
import "./NewBadge.css"
import api from "../../libs/fetch"

class NewBadge extends React.Component{

    state  = {
        loading: false,
        error: null,
        form:{
            header_img_url:"",
            profile__picture_url:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            post:"",
            posts:"",
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
            this.props.history.push("/badges")

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
                                header_img_url = {this.state.form.header_img_url || "image link goes here"}
                                profile__picture_url = {this.state.form.profile__picture_url || "iumage link goes here"}
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
                <Footer s={{bottom:0}}> </Footer>
                
            </React.Fragment>
        );
    }
}

export default NewBadge;