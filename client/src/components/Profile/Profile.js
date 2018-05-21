import React, { Component } from 'react';
import AuthService from './../AuthService';
import withAuth from './../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import "./Profile.css";
import { Panel } from "react-bootstrap";
const Auth = new AuthService();

class Profile extends Component {

    state = {
        email: "",
        sideBar: true
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                email: res.data.email
            })
        });
    }

    toggleSide = () => {
        this.setState({
            sideBar: !this.state.sideBar
        })
    }

    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/login');
    };

    render() {
        return (
            <div className="Profile">
                <div className="row">
                    <div className={this.state.sideBar ? "sidebar col-md-3" : "col-md-3 sidebar active"}>
                        <h3>On the profile page!</h3>
                        <p>Email: {this.state.email}</p>
                        <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                        <button type="button" className="btn btn-default toggleBtn" onClick={this.toggleSide}>{this.state.sideBar ? "<" : ">"}</button>
                        <Link to="/">Go home</Link>
                    </div>
                    <div className={this.state.sideBar ? "col-md-8 text-center" : "col-md-8 text-center mainFull"}>
                        <h2>Whistles</h2>
                        <Panel>
                            <Panel.Body>Panel content</Panel.Body>
                            <Panel.Footer>Panel footer</Panel.Footer>
                        </Panel>
                    </div>

                </div>

            </div>
        )
    }
}

export default withAuth(Profile);