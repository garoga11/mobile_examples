import React, { Component } from "react"
import "./style/SignUp.css"

class SignUp extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="Container__signUp row mt-2">
                    <h1 className="mt-5 mb-5">Sign up</h1>
                    <div className="col-6">
                        <div className="row">
                            <form  className="Form1"> 
                                <div className="form-group mb-2">
                                    <label className="mb-1">
                                        Name
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="mb-1">
                                        Age
                                    </label>
                                    <input
                                    type="number"
                                    className="form-control"
                                    name="age"
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="mb-1">
                                        City
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    />
                                </div>
                            
                            </form>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <form className="Form2">
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
                                </div>

                                <div className="form-group mb-2">
                                    <label className="mb-1">
                                        Confirm password
                                    </label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    />
                                   <button type="submit" className="SignUp__button mt-5">
                                        Sign up
                    </button>
                                </div>
                            </form>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }

}

export default SignUp;