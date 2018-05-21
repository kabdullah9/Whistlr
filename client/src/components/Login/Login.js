import React, { Component } from 'react';
import AuthService from './../AuthService';
import { Link } from 'react-router-dom';
import Modal from "./../MyModal";
import logo from "./whistlr-black.png";
import "./Login.css";

class Login extends Component {
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
        // if (this.Auth.loggedIn()) {
        //     this.props.history.replace('/');
        // }
    }

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState({
                message: "One or More Fields not Entered"
            })
            this.handleShow();
        } else {
            this.Auth.login(this.state.email, this.state.password)
                .then(res => {
                    // once user is logged in
                    // take them to their profile page
                    this.props.history.replace(`/profile/${res.data.user._id}`);
                })
                .catch(err => {
                    this.setState({
                        message: "Username or Password Incorrect"
                    })
                    this.handleShow();
                });
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
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/"><img alt="logo" src={logo} id="logo" /></Link>
                    </div>
                    <div className="col-md-6 login">
                        <h1>Login</h1>
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
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <p><Link to="/signup">Go to Signup</Link></p>

                        <Modal show={this.state.show} hide={this.handleClose} text={this.state.message} />
                    </div>
                </div>

            </div>

        );
    }
}

export default Login;