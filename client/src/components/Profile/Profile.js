import React, { Component } from 'react';
import AuthService from './../AuthService';
import withAuth from './../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
const Auth = new AuthService();

class Profile extends Component {

    state = {
        email: ""
    };

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                email: res.data.email
            })
        });
    }

    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/login');
    };

    render() {
        return (
            <div className="container Profile">
                <h1>On the profile page!</h1>
                <p>Email: {this.state.email}</p>
                <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                <Link to="/">Go home</Link>
            </div>
        )
    }
}

export default withAuth(Profile);