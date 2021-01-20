
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";

var firebase = require('firebase');
function Home2() {
  
    const options = {
	  headers: { 
	  		    'Cookie': '__cfduid=d3f84dc67e5ffe97ed86c014a9a975dbf1611040818; _uetsid=735f32c05a2511ebbf1223283cc2a02c; _uetvid=735ffca05a2511ebb25a2f9609dd1ae9; _ga=GA1.2.327912607.1611040246; _gid=GA1.2.256223301.1611040246; wcsid=5IGZ1GXhPk62C9890P21I0H0Ub3zfSaP; hblid=V6goHVJOVwL5jWMx0P21I0H0BfaazSUB; _pk_id.3.44fd=e4b6b105fe5d7e85.1611040247.0.1611040247..; _fbp=fb.1.1611040247307.1273384342; v2_DrChrono={%22bid%22:%229873dda6-3459-4a0e-8178-cfb189c75da5%22%2C%22storedData%22:{}}; _okdetect=%7B%22token%22%3A%2216110402484280%22%2C%22proto%22%3A%22https%3A%22%2C%22host%22%3A%22app.drchrono.com%22%7D; olfsk=olfsk013196725141499277; _okbk=cd4%3Dtrue%2Cwa1%3Dfalse%2Cvi5%3D0%2Cvi4%3D1611040248750%2Cvi3%3Dactive%2Cvi2%3Dfalse%2Cvi1%3Dfalse%2Ccd8%3Dchat%2Ccd6%3D0%2Ccd5%3Daway%2Ccd3%3Dfalse%2Ccd2%3D0%2Ccd1%3D0%2C; _ok=6657-800-10-2870; _ga=GA1.3.327912607.1611040246; _gid=GA1.3.256223301.1611040246; _oklv=1611040307258%2C5IGZ1GXhPk62C9890P21I0H0Ub3zfSaP; sessionid=05teva7ci8uhfm60uhtwgno1egdf4ueg; csrftoken=0xfMuDQwRW7Ao8bzOgyOoEEzXTdk9FppN6PNCnUgY62ivGofVKq3itqTMMsEfLS5'
	  }
    };
    const [patientData,setPatientData] = useState([])

    useEffect(()=>{
       
         var linksRef =  firebase.database().ref('uPatient' );

      linksRef.on('value', snapshot => {
      
      let allPatients = [];
      snapshot.forEach(snap => {
        allPatients.push(snap.val());
          
       })
      console.log(allPatients);
      setPatientData(allPatients);

    }, function (erro) {
      console.log("The read failed: " + erro.code);
    })

        
    },patientData)
    
    return (
      <div>
       <h2>Patients:</h2>

       <a href="https://drchrono.com/o/authorize/?redirect_uri='https://lighthouse247.com/drchrono/drc_connect.php'&?response_type=code
     &client_id=CyKPHeQH1SIYZpRqDMfkxbjwnVzk4FfuCLPliz3T&state=''&scope=users:read" className="cLink">Connect Your Account</a>

       <table align='center'>
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Age</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {patientData.map(patient=><RowCreator item={patient}/>)}
            </tbody>
       </table>
       <Link className="cLink" to={'/addPatient'}>Register Patient</Link>
      </div>
    );
  }

class RowCreator extends React.Component{
    render(){
        var patient = this.props.item;
        return <tr>
            <td>{patient.Name}</td>
            <td>{patient.Name}</td>
            <td>{patient.age}</td>
            <td><Link className="clink" to={'/addClinicals/'+patient._id}>Add Data</Link></td>
        </tr>
    }
}


export default Home2;
