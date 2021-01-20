import React, {Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



class Usurvey extends Component {
   nameSubmit(event){
   	event.preventDefault();
   	 var patientName = this.refs.name.value;
   	 this.setState({patientName}, function(){
   	 	console.log(this.state);
   	 });
   }
  answerSelected(event){
   var answers = this.state.answers;
   if (event.target.name === "answer1"){
   	 answers.answer1 = event.target.value;
   }else if (event.target.name === "answer2"){
   	 answers.answer2 = event.target.value;
   } else if (event.target.name === "answer3"){
   	 answers.answer3 = event.target.value;
   }

   this.setState({answers: answers}, function(){
   	 	console.log(this.state);
   	 });
  }
 checkSelected(event){
   var checks = this.state.checks;
   if (event.target.name === "check1"){
   	 checks.check1 = event.target.value;
   }else if (event.target.name === "check2"){
   	 checks.check2 = event.target.value;
   } else if (event.target.name === "check3"){
   	 checks.check3 = event.target.value;
   }
    this.setState({checks: checks}, function(){
   	 	console.log(this.state);
   	 });
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
     this.setState({[name]: value}, function(){
   	 	console.log(this.state);
   	 });
  }

  questionSubmit(event){
    event.preventDefault();  	

    firebase.database().ref('uSurvey ' + this.state.uid).set({
    	patientName : this.state.patientName,
    	answers: this.state.answers,
    
    });
    this.setState({isSubmitted: true});
    console.log(this.state);
  } 
  constructor(props) {
     super(props);
     this.state ={

     	uid: uuid.v1(),
     	patientName: '',
     	answers: {
     		answer1: '',
     		answer2: '',
     		answer3: '',
     	},
     	checks: {
     		check1: '',
     		check2: '',
     		check3: '',
     		check4: '',
     	},
     	age: '',
     	policy: '',
     	insurance: '',
     	email: '',
     	pass: '',
     	phone: '',
     	meds: '',
     	isCigar: false,
     	isAlchol: false,
     	isCoffee: false,
     	isOther: false,
     	isAlcholicsm: false,
     	isHepp: false,
     	isDiabetes: false,
     	isSurgerys: false,
     	isSubmitted: false
     };
     this.nameSubmit = this.nameSubmit.bind(this);
     this.answerSelected = this.answerSelected.bind(this);
     this.questionSubmit = this.questionSubmit.bind(this);
     this.checkSelected = this.checkSelected.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.questionSubmit = this.questionSubmit.bind(this);
  }

	render(){
      var patientName;
      var questions;
      var survey;
      var thanky;
      	survey= <div className="container">
				  <div style={{textAlign: 'center'}}>
				    <h2>New Patient </h2>
				    <h2>Welcome To Patient questions {this.state.patientName}</h2>
				  </div>
				   <form onSubmit={this.questionSubmit}>
				  <div className="row">
				    <div className="column">
				      <div className="card">
				        <label htmlFor="fname"> Name</label>
				        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
				        <label htmlFor="lname">Age</label>
				        <input type="text" id="lname" name="lastname" placeholder="Your age" ref="age"/>
				         <label>   Policy </label>
				        <input className="namy2" type="text" placeholder="" ref="policy" />
				          <label>   Insurance </label>
	                    <input className="namy2" type="text" placeholder="" ref="insurance" />
	                    </div>
	              <div className="card">
                  <label>    what is your Family Medical History </label><br/>
                  <input name="isAlcholicsm" type="checkbox" checked={this.state.isAlcholicsm} onChange={this.handleInputChange} />alcoholic
                   <input name="isDiabetes" type="checkbox" checked= {this.state.isDiabetes} onChange={this.handleInputChange} />Diabetes
        		   <input name="isSurgerys" type="checkbox" checked= {this.state.isSurgerys} onChange={this.handleInputChange} />Surgeries
        		   <input name="isHepp" type="checkbox" checked= {this.state.isHepp} onChange={this.handleInputChange} />Hepatitis

                   </div>
                    <div className="card">
                  <label>    how often exercise </label><br/>
                  <input name="answer2" type="radio" value="walking" onChange={this.answerSelected} />walking
                  <input name="answer2" type="radio" value="looking" onChange={this.answerSelected} />gym
                  <input name="answer2" type="radio" value="other " onChange={this.answerSelected} />other
                   
                   </div>
                   <div className="card">
                   <label>  email  </label><br/>
                    <input className="namy2" type="text" placeholder="email" ref="email" />
                     <label>   password </label><br/>
                    <input className="namy2" type="text" placeholder="password" ref="pass" />
				    </div>
				    </div>
				    <div className="column">
				     

	                  
	                     <label>   Phone </label>
	                    <input className="namy2" type="text" placeholder="" ref="phone" />
	                   
	                   
				       
				        <div className="card">
		                  <label>Gender </label><br/>
		                  <input name="answer1" type="radio" value="tech" onChange={this.answerSelected} />Male
		                  <input name="answer1" type="radio" value="Design" onChange={this.answerSelected} />Female
		                   </div>
		                <div className="card">
		                  <label>    what is your habitual consumption </label><br/>
		                  <input name="isAlchol" type="checkbox" checked={this.state.isAlchol} onChange={this.handleInputChange} />Alcohol
		                   <input name="isCigar" type="checkbox" checked= {this.state.isCigar} onChange={this.handleInputChange} />Cigarretes
		        		   <input name="isCoffee" type="checkbox" checked= {this.state.isCoffee} onChange={this.handleInputChange} />Coffee, tea
		        		   <input name="isOther" type="checkbox" checked= {this.state.isOther} onChange={this.handleInputChange} />Other

		                   </div>
		                    <div className="card">
			                  <label>   Medication taken in the last month </label><br/>
			                    <input className="namy" type="text" placeholder=" " ref="meds" />
			                 

			                </div>
			                    
						       
						        <input type="button" value="Submit" />
						       
						  </div>
				    </div>
				   </form>
			</div>;
      
      if (this.state.patientName === '' && this.state.isSubmitted === false){
           patientName = <div>
              <h1> Hey patient, please let us know your name </h1>
               <form onSubmit ={this.nameSubmit}>  
               	  <input className="namy" type="text" placeholder="enter your name" ref="name" />
               	
               </form>
           </div>;
           questions = ''
      
      } else if (this.state.patientName !== '' && this.state.isSubmitted === false){
            patientName = <h1> {this.state.patientName} </h1>

            questions = <div>
              <h2> Welcome To Patient questions {this.state.patientName} </h2>
              <form onSubmit={this.questionSubmit}>	
               
                   

                   <div className="card">
                  <label>  what is your Insurance carrier </label><br/>
                  <input name="answer1" type="radio" value="tech" onChange={this.answerSelected} />Philam
                  <input name="answer1" type="radio" value="Design" onChange={this.answerSelected} />Kaiser
                  <input name="answer1" type="radio" value="Marketing" onChange={this.answerSelected} />Deltek


                   </div>
                    <div className="card">
                  <label>    what is your Family Medical History </label><br/>
                  <input name="isAlcholicsm" type="checkbox" checked={this.state.isAlcholicsm} onChange={this.handleInputChange} />alcoholic
                   <input name="isDiabetes" type="checkbox" checked= {this.state.isDiabetes} onChange={this.handleInputChange} />Diabetes
        		   <input name="isSurgerys" type="checkbox" checked= {this.state.isSurgerys} onChange={this.handleInputChange} />Surgeries
        		   <input name="isHepp" type="checkbox" checked= {this.state.isHepp} onChange={this.handleInputChange} />Hepatitis

                   </div>
                    <div className="card">
                  <label>    how often exercise </label><br/>
                  <input name="answer2" type="radio" value="walking" onChange={this.answerSelected} />walking
                  <input name="answer2" type="radio" value="looking" onChange={this.answerSelected} />gym
                  <input name="answer2" type="radio" value="other " onChange={this.answerSelected} />other
                   
                   </div>
                      <div className="card">
                  <label>    what is your habitual consumption </label><br/>
                  <input name="isAlchol" type="checkbox" checked={this.state.isAlchol} onChange={this.handleInputChange} />Alcohol
                   <input name="isCigar" type="checkbox" checked= {this.state.isCigar} onChange={this.handleInputChange} />Cigarretes
        		   <input name="isCoffee" type="checkbox" checked= {this.state.isCoffee} onChange={this.handleInputChange} />Coffee, tea
        		   <input name="isOther" type="checkbox" checked= {this.state.isOther} onChange={this.handleInputChange} />Other

                   </div>
                  <div className="card">
                  <label>   Medication taken in the last month </label><br/>
                    <input className="namy" type="text" placeholder="enter your meds" ref="meds" />
                     

                   </div>
                   <input className="button" type="submit" value = "submit" />
              </form>
              </div>
      }else if (this.state.patientName !== '' && this.state.isSubmitted === true){
      		patientName = <div>
              <h2> Thank you {this.state.patientName} </h2>
              </div>
      }
		return(
			<div> 
              {patientName}
              
              --------------------------------------------------------
      			{questions}
             
             

			</div>
	  );
	}
}

export default Usurvey;
