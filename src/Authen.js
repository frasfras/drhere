import React, {Component} from 'react';
// import './login.css';
import Navbar from './navbar';
import Visits from './patients/Visits';
import Uvisit from './patients/Uvisit';
import Home from './components/Home2';

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

class Authen extends Component {
 
	constructor(props) {
     super(props);
     this.state ={
     	err: '',
      isLogin: false,
     };

     this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);

    }

    logout(){firebase.auth().signOut();
         var logoot = document.getElementById('logout');

            logoot.classList.remove('button');
            logoot.classList.add('hide');
             this.setState({isLogin:false});
     }

    login(event){
		const email = this.refs.email.value;
     	const password = this.refs.password.value;

        console.log(email, password);
        const auth = firebase.auth();

         const promise =  auth.signInWithEmailAndPassword(email,password);
        promise
         .then(user => {
            var logoot = document.getElementById('logout');

            logoot.classList.remove('hide');
            logoot.classList.add('button');
            this.setState({isLogin:true});
         });
         promise
         .catch(e =>{
          var err = e.message;
          console.log(e.message);
          this.setState({err: err});
         });

    }
     signup(){
     	const email = this.refs.email.value;
     	const password = this.refs.password.value;

        console.log(email, password);
        const auth = firebase.auth();

        const promise =  auth.createUserWithEmailAndPassword(email,password);
        promise
         .then(user => {
         	var err = "hello" + user.email;
         	firebase.database().ref('users/' + user.uid ).set({
         		email: user.email
         	});
         	console.log(user);
         } );
         promise
         .catch(e =>{
         	var err = e.message;
         	console.log(e.message);
         	this.setState({err: e.message});
         });

     }

   render() {
    var navbar;
    var visits;
    var add;
       if(this.state.isLogin === true) {
        
            visits =  <Visits />
            add = <Uvisit />

               } 
     navbar =  <nav class="navbar navbar-expand-lg bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Demo: Online Patient Portal</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="../index.html">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../patient_registration.html">New Patients</a>
          </li>         
       <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Login
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="login.html">Doctors</a>
                <a class="dropdown-item" href="../patients/login.html">Patients</a>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </nav>;
  

   	  return(
              <div> 


              	 <input id = "email" type="email" placeholder="enter your email" ref="email" /><br/>
              	  <input id = "pass" type="password" placeholder="enter your password" ref="password" /><br/>
              	<div >  <button className="button" onClick={this.login} > Login </button>|
                  <button className="button" onClick={this.signup}>Signup</button>
                  <button className="hide " onClick={this.logout} id="logout" >Logout</button>
                </div>
                {visits}
                {add}
              </div>
             
   	  );
   }

}

export default Authen;