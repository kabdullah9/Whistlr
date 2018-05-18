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
<<<<<<< HEAD
        <h1>Welcome to Your Whistlr HQ!</h1>
        <p>Username: {this.state.username}</p>
=======
        <h1>On the profile page!</h1>
>>>>>>> e0d6ddae1022dab40c0fa8c4150ad0556098e522
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