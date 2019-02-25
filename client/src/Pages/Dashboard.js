import React, { Component } from 'react';
// import '../App.css';
import '../dashboard.css';
import ContactList from '../Components/ContactList';
import MessageCard from '../Components/MessageCard';
import Navbar from '../Components/Navbar';


class Dashboard extends Component {
  render(){
    return(
      <div className="dash-container">
      <Navbar />
        <div className="container-fluid h-100 contentcontainer">
          <div className="row justify-content-center h-100">
            <div className="col-md-4 col-xl-3 chat">
              <div className="card mb-sm-3 mb-md-0 contacts_card">
                <ContactList />
              </div>
            </div>
            <div className="col-md-8 col-xl-6 chat">
              <MessageCard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard 