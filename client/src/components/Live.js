import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

// Making the App component
class Live extends Component {
  constructor() {
    super()
    this.state = {
      endpoint: "http://localhost:3001"
    }




  }
  send = () => {
    const socket = socketIOClient(this.state.endpoint);

    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.

    socket.emit('change color', 'red');
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  }

  updateInput = (e) => {
    let {name, value} = e.target;
    this.setState({
      [name] : value
    });
  }

  sendMessage = e => {
    e.preventDefault();
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('message', this.state.message);
  }
  // render method that renders in code if the state is updated
  render() {
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    const socket = socketIOClient(this.state.endpoint)

    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.on('change color', (color) => {
      // setting the color of our button
      document.body.style.backgroundColor = color;
    })

    socket.on('message', message => {
      this.setState({
        sentMessage : message
      });
      console.log("message from socket", this.state.sentMessage);
    });
    return (
      <div>
        <button onClick={() => this.send() }>Change Color</button>
        <p>{this.state.sentMessage}</p>
        <form onSubmit={this.sendMessage}>
          <input type="text" onChange={this.updateInput} name="message" />
          <button type="submit">Submit</button>
        </form>
        <p>Making sure this works</p>
      </div>

    )
  }
}

export default Live;