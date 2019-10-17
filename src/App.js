import React from 'react';
import "./StyleApp.css";
import "./App.css";
import Profile from "./Components/Profile";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Hobbies from "./Components/Hobbies";
import Header from "./Header";

import {BrowserRouter as Router,Route,Link} from "react-router-dom" 

class App extends React.Component {
  render(){
  return (
  <Router>
    <Header/>
    <div className="parent">
    <div  className="Classnav">
      <ul>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          </ul>
    </div>
    <Route exact path={"/"} component={Profile}/>
    <Route exact path={"/education"} component={Education}/>
    <Route exact path={"/skills"} component={Skills}/>
    <Route exact path={"/hobbies"} component={Hobbies}/>
    </div>
  </Router>
  );
}
}

export default App;
