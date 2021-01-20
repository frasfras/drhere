import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
var firebase = require('firebase');
var uuid = require('uuid');


function AddPatient () {
   const[firstName, setFirstname] =useState('')
   const[lastName, setlastname] =useState('')
   const[age, setAge] =useState('')
   const[submitted, setSubmitted] =useState('')
    const history = useHistory(); 


 function handleSubmit(event){
 	event.preventDefault();
     const patientData= {
     	Name:firstName,
     	age: age,
     	
     }
    var uid = uuid.v1();
       firebase.database().ref('uPatient' ).push({
      Name:firstName,
      age: age,
 
    
    });
    history.push('/');
    setSubmitted(true);
  
    
  }	

  return (
    <div className="App">
      <h2> New Patient Registration </h2>
      <form> 
      <div className="card">
      	 Name: <input  type= "text" name="firstName" align="center" onChange={e => setFirstname(e.target.value)} />
      	last Name: <input  type= "text" name="lastName" align="left" onChange={e => setlastname(e.target.value)} />
      	Age: <input  type= "text" name="age" align="left" onChange={e => setAge(e.target.value)} />
      	<button onClick={handleSubmit.bind(this)} >Confirm </button>
        </div>

      </form>
    </div>
  );
}

export default AddPatient;