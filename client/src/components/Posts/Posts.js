import socketIOClient from 'socket.io-client';
import React, { Component } from 'react';
import { Panel, Collapse } from "react-bootstrap";
import API from '../../utils/API';
import "./Posts.css"

class Posts extends Component {

    constructor() {
        super()
        this.state = {
            endpoint: process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001/',
            email: "",
            sideBar: true,
            open: false,
            results: [],
            title: "",
            category: "",
            content: ""
        }
    }

    componentDidMount() {

        this.getPosts();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.content) {
            API.create({
                title: this.state.title,
                category: this.state.category,
                content: this.state.content
            })
                .then(res => {
                    this.getPosts()
                    console.log(res);
                }

                ).then(this.setState({
                    title: "",
                    category: "",
                    content: ""
                }))
                .catch(err => console.log(err));
        }
    }

    getPosts = () => {
        API.findPost()
            .then(res => this.setState({
                results: res.data
            }))

            .then(() => { this.createPost() })
            .catch(err => console.log(err));
    }

    createPost = () => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('post', this.state.results);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {

        const socket = socketIOClient(this.state.endpoint)

        socket.on('post', results => {
            this.setState({
                results: results
            });
            console.log("message from socket", this.state.results);
        });


        return (
            <div>
                <Panel>
                    <Panel.Heading className="text-center">
                        <button className="text-center btn btn-info" onClick={() => this.setState({ open: !this.state.open })}>Blow the Whistle</button>
                        <Collapse in={this.state.open}>
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="Title" className="col-sm-2 control-label">Title</label>
                                    <div className="col-sm-10">
                                        <input value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="title" type="text" className="form-control" id="Title" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formContent" className="col-sm-2 control-label">Category</label>
                                    <div className="col-sm-10">
                                        <select onChange={this.handleInputChange} id="category" name="category" className="form-control">
                                            <option className="selectPh" value="" selected disabled hidden>Choose a category</option>
                                            <option value="General">General</option>
                                            <option value="Theft">Theft</option>
                                            <option value="Assault">Assault</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formContent" className="col-sm-2 control-label">Content</label>
                                    <div className="col-sm-10">
                                        <textarea value={this.state.content}
                                            onChange={this.handleInputChange}
                                            name="content" id="formContent" className="form-control" rows="3" placeholder="Content"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Collapse>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.state.results.length === 0 ? "Nothing Posted" :
                            this.state.results.map((key, index) =>

                                <Panel key={index}>
                                    <Panel.Body>
                                        <p>Title: {key.title} Category: {key.category}</p>
                                        <div id="panelContent">Content: {key.content}</div>
                                    </Panel.Body>
                                </Panel>

                            )}
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Posts;