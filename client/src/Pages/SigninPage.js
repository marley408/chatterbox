import React, { Component } from 'react';
import '../App.css';
import SignInCard from '../Components/SignInCard';
import Navbar from '../Components/Navbar';


class SigninPage extends Component {
  render(){
    return(
      <div className="container">
        <SignInCard />
      </div>
    )
  }
}

export default SigninPage