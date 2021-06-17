import React from "react"
import Hero from "../../Components/Hero"
import Badge from "../../Components/Badge"
import BadgeForm from "../../Components/BadgeForm"
import Footer from "../../Components/Footer"
import "../NewBadge/NewBadge.css"
import PageError from "../../Components/PageError"
import Loader from "../../Components/Loader"
import api from "../../libs/fetch"

class EditBadge extends React.Component{

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
            post:""
        }
    }

    componentDidMount(){
        this.fetchData();
    }
    
    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data})
        }catch(error){
            this.setState({loading:false, error:error})
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/badges")

        }catch(error){
            this.setState({loading:false, error: error})
            
        }
        
    
    }

    render(){

        if(this.state.loading){
            return <Loader></Loader>
        }

        if(this.state.error){
            return <PageError error={this.state.error.message}></PageError>
        }

        return(
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                header_img_url = {this.state.form.header_img_url || "https://images.pexels.com/photos/4792686/pexels-photo-4792686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                                profile__picture_url = {this.state.form.profile__picture_url || "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
                                name = {this.state.form.name || "Name Lastname"}
                                age = {this.state.form.age || "XX"}
                                city= {this.state.form.city || "State Country"}
                                followers = {this.state.form.followers || "0"}
                                likes = {this.state.form.like || "0"}
                                post = {this.state.form.like || "0"}
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
export default EditBadge;