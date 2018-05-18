import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';

/* const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  }
}); */

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };
  

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="container Profile">
        <h1>Welcome to Your Whistlr HQ!</h1>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <Link to="/">Go home</Link>
        
        <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
        </button>

        {/* style={styles.stretch}
        source={require('/react-native/assets/Whistlr.pdf')}
         */}
      </div>
    )
  }
}

export default withAuth(Profile);