import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
var firebase = require('firebase');
var uuid = require('uuid');

function AddClinicals(props) {
  const [componentName,setComponentName] = useState('')
  const [componentValue,setComponentValue] = useState('')
  const history = useHistory();
  

 function handleSubmit(event){
  event.preventDefault();
     const data= {
    patient:props.match.params.patientId,
    componentName:componentName,
    componentValue:componentValue
  }
    var uid = uuid.v1();
       firebase.database().ref('uClinicals' + uid ).set({
      clinicData : data,
 
    
    });
    history.push('/');
    console.log(data);
  } 

    return (
      <div>
       <h2>Add Clinical Data:</h2>
       <form><div className="card" >
      Clinical Entry Type: <select  onChange={e=>setComponentName(e.target.value)}>
        <option>Select One</option>
        <option value="bp">Blood Pressure</option>
        <option value="hw">Height/Weight</option>
        <option value="heartrate">Heart Rate</option>
      </select>
      Component Value: <input type="text" name="componentValue" align="left" onChange={e=>setComponentValue(e.target.value)}/>
    
      <button onClick={handleSubmit.bind(this)}>Confirm</button>
      </div>
       </form>
      </div>
    );
  }

export default  AddClinicals;