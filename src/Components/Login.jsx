import React, { Component } from "react"
import "./style/login.css"

class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="Container__card">
                    
                    <form onSubmit={this.props.onSubmit} className="form"> 
                        <img  className="Icon__image" src="https://image.flaticon.com/icons/png/128/4689/4689456.png" alt="Icon"/>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Email
                            </label>
                            <input
                            type="email"
                            className="form-control"
                            name="email"
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Password
                            </label>
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            />
                            <button type="submit" className="Submit__button mt-5">
                                Login
                            </button>
                            <div className="row mb-5">
                                <a href="/" className="Link__password ml-4">Forgot your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Login;
