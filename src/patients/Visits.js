import React, {Component} from 'react';
// import './login.css';
import Navbar from '../navbar';

var firebase = require('firebase');

 var firebaseConfig = {
    apiKey: "AIzaSyDXgWcmb5i87aTyvZAtUo1jXzSDwX3uwdA",
    authDomain: "patientracker-5875d.firebaseapp.com",
    databaseURL: "https://patientracker-5875d-default-rtdb.firebaseio.com",
    projectId: "patientracker-5875d",
    storageBucket: "patientracker-5875d.appspot.com",
    messagingSenderId: "420390054338",
    appId: "1:420390054338:web:94012e8a8a51d0cefe4e5b",
    measurementId: "G-06NC3DPVGW"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // if(firebase.apps.length){
  //  firebase.initializeApp(firebaseConfig);
  // }else{
  // 	firebase.app();
  // }

class Visits extends Component {
 
	constructor(props) {
     super(props);
     this.state ={
     	err: '',
     };

    

    }

  

   render() {
    var vists;
    // <!-- Page Content -->
    var navbar;
    navbar =<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Demo: Online Patient Portal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="visits.html">My Visits
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="messages.html">Messages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://c0afw230.caspio.com/folderlogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
     vists =  <div class="container">

    <div class="row">

      <div class="col-lg-12" style={{padding: '20px 0px 0px 0px'}}>
  <div class="card my-4" style={{padding: '20px'}}>
  <h3>My Visits</h3>
<script type="text/javascript" src="https://c0afw230.caspio.com/dp/6fbd3000ec74fcc7b9e745d0881a/emb"></script>

        </div>
      </div>


    </div>
     

  </div>; 
  
   	  return(

              <div> 
                     {vists}
              </div>

   	  );
   }

}

export default Visits;