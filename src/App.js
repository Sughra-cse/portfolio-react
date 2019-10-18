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
    <footer className="foot">
      For Contact:<a href="telto:7892832236">Click-here</a>
      For Mail:<a href="mailto:sughra788@gmail.com">Click-here</a>
    </footer>
    </Router>
  );
}
}

export default App;
