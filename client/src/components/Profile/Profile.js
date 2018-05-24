import React, { Component } from 'react';
import AuthService from './../AuthService';
import withAuth from './../withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import "./Profile.css";
import Posts from "./../Posts";
const Auth = new AuthService();

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            sideBar: true,
            open: false
        }
    }

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
    }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" className={this.state.sideBar ? "" : "active"}>

                    <div className="sidebar-header">
                        <h3>Whistlr</h3>
                        <strong>W</strong>
                    </div>


                    <ul className="list-unstyled components">
                        <li>
                            <Link to="/">
                                <i className="glyphicon glyphicon-home"></i>
                                Home
                    </Link>
                        </li>
                        <li>
                            <a id="logOut" onClick={this.handleLogout}>
                                <i className="glyphicon glyphicon-remove-sign"></i>
                                Log Out
                    </a>
                        </li>
                    </ul>
                    <button onClick={() => { this.toggleSide() }} type="button" id="sidebarCollapse" className="btn btn-primary navbar-btn">
                    <i className="glyphicon glyphicon-resize-horizontal"></i>
                    </button>
                </nav>

                <div id="content" className={this.state.sideBar ? "" : "contentActive"}>
                    <div className="row contentBody">
                        <div className="col-sx-12">
                            <Posts />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withAuth(Profile);