import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';
import API from '../utils/API';
import Modal from "./MyModal";

class Signup extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            message: ""
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.password || !this.state.email || !this.state.confirmPassword) {
            this.setState({
                message: "One or More Fields not Entered"
            })
            this.handleShow();
        } else {
            API.signUpUser(this.state.email, this.state.password)
            .then(res => {
                console.log(res.data);
                // once the user has signed up
                // send them to the login page
                this.props.history.replace('/login');
            })
            .catch(err => alert(err));
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container">

                <h1>Signup</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input className="form-control"
                            placeholder="Email goes here..."
                            name="email"
                            type="email"
                            id="email"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input className="form-control"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            id="pwd"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPwd">Re-Enter Password:</label>
                        <input className="form-control"
                            placeholder="Password goes here..."
                            name="confirmPassword"
                            type="password"
                            id="confirmPwd"
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p><Link to="/login">Go to Login</Link></p>

                <Modal show={this.state.show} hide={this.handleClose} text={this.state.message} />
            </div>
        );
    }
}

export default Signup;