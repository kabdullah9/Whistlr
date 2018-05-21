import React, { Component } from 'react';
import AuthService from './../AuthService';
import withAuth from './../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import "./Profile.css";
import { Panel, Collapse } from "react-bootstrap";
const Auth = new AuthService();

class Profile extends Component {

    state = {
        email: "",
        sideBar: true,
        open: false
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
                            <Panel.Heading>
                                <h3 onClick={() => this.setState({ open: !this.state.open })}>Blow the Whistle</h3>
                                <Collapse in={this.state.open}>
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                            <label htmlFor="Title" className="col-sm-2 control-label">Title</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="Title" placeholder="Title" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" id="category" placeholder="Category" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
                                            <div className="col-sm-10">
                                                <textarea id="content" className="form-control" rows="3" placeholder="Content"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-default">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </Collapse>
                            </Panel.Heading>
                            <Panel.Body>
                                Panel footer
                                </Panel.Body>
                        </Panel>
                    </div>

                </div>

            </div>
        )
    }
}

export default withAuth(Profile);