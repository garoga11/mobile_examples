import React from "react"
import BadgeDetailsUi from "./BadgeDetailsUi"
import api from "../libs/fetch"

class BadgeDetails extends React.Component{

    state = {
        loading:false,
        error: null,
        data: {}
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading:true, error:null})
        try{
            console.log(this.props.match.params.badgeId)
            const data = await api.badges.read(this.props.match.params.badgeId)
            console.log(data)
            this.setState({loading:false, data:data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return <BadgeDetailsUi badge={this.state.data}></BadgeDetailsUi>;
    }
}

export default BadgeDetails;