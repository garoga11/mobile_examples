import React, { Component } from 'react';
import "./style/Badge.css";


class Badge extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5 flex-column">
                    <div className="Badge__header">
                        <img src="https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="Header background"></img>
                    </div>
                    <div className="Badge__userInfo container mt-5 mb-1">
                        <div className="Badge__userImage">
                            <img src="https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Profile pic"></img>
                        </div>
                        <h4 className="text-center mt-5">Ricardo Rodriguez <i>21</i></h4>
                        <p className="text-center">New York City</p>
                    </div>
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">80k</h4>
                                <p className="text-center">Followers</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">803k</h4>
                                <p className="text-center">Likes</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">1.5k</h4>
                                <p className="text-center">Picures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Badge;