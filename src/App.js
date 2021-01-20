import logo from './logo.svg';
import './App.css';
import Usurvey from './Usurvey';

import Authen from'./Authen';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home2';
import AddPatient from './components/AddPatient';
import AddClinicols from './components/AddClinicols';
import Visits from './patients/Visits';


function App () {
  return (
    <div className="App">
      
        <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/addPatient" component={AddPatient} />
            <Route exact path="/addClinicals/:patientId" component={AddClinicols} />
            <Route exact path="/visits" component={Visits} />
        </Switch>
      <Authen />
      <Usurvey />
    </div>
  );
}

export default App;
