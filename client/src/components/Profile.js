import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import d3 from "d3";
import { Link } from 'react-router-dom';
//import { Col, Row, Container } from "../../components/Grid";

/* const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  }
}); */

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

  render() {
    return (
      <div className="container Profile">
        <h1>Welcome to your Whistlr HQ!</h1>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.createdAt}</p>
        <Link to="/">Go home</Link>
        <Link to="/">Check local Whistlrs</Link>

        
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