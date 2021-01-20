import React, {Component} from 'react';
var firebase = require('firebase');


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  // Initialize Firebase firebase.initializeApp(firebaseConfig);



class Uvisit extends Component {

 nameSubmit(event){
    event.preventDefault();
     var patientName = this.refs.name.value;
     this.setState({patientName}, function(){
      console.log(this.state);
     });
     var reason = this.refs.reason.value;
     var weight = this.refs.weight.value;
     var pulse = this.refs.pulse.value;
     var systolic = this.refs.systolic.value;
     var diastolic = this.refs.diastolic.value;
     var notes = this.refs.notes.value;

      this.setState({reason})
       this.setState({weight})
     this.setState({pulse})
      this.setState({systolic})
       this.setState((diastolic))
        this.setState({notes})  
   }

   questionSubmit(event){
    event.preventDefault();   

    firebase.database().ref('uVisit' + this.state.uid).set({
      patientName : this.state.patientName,
      answers: this.state.answers,
    
    });
    this.setState({isSubmitted: true});
    console.log(this.state);
  } 

 constructor(props) {
     super(props);
     this.state ={
      patientName: '',
      reason: '',
      weight: '',
      pulse: '',
      systolic:'',
      diastolic: '',
      notes: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
      },
      err: '',
      isLogin: false,
      isSubmitted: false,
     };

  }

  render(){
      var patientVisit;
      var questions;
       if ( this.state.isSubmitted === false){
           patientVisit = <div>
              <h1>Add New Visit </h1>
               <form onSubmit ={this.nameSubmit}>  
               <div className= "card">
                  <input className="name" type="text" placeholder="enter name" ref="name" />
                   <label> Reason for visit </label>
                  <input  type="text" placeholder="enter reason" ref="reason" />
                   <label>  weight </label>
                  <input  type="text" placeholder="enter your weight" ref="weight" />
                   <label>  systolic </label>
                 <input  type="text" placeholder="enter systolic" ref="systolic" />
                  <label>   diastolic </label>
                  <input  type="text" placeholder="enter " ref="diastolic" />
                   <label>    pulse </label>
                   <input  type="text" placeholder="enter " ref="pulse" />
                    <label>    notes </label>
                    <input  type="text" placeholder="enter your notes" ref="notes" />
                    <input className="button" type="submit" value = "submit" />
                  </div>  
               </form>
           </div>;
           questions = ''
      
      }
       return(
              <div> 
                    

                    ---------------------------------------
                    {patientVisit}
               
              </div>
      );

  }
}

export default Uvisit;