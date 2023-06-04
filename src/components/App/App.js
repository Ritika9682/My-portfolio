import React from 'react';
import "./App.css";
import { HashRouter,Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Projects/projects';
import Skill from '../Skills/skills';
import Contact from '../Contact/contact';
import Navbar from '../Navbar/Navbar';
import GoHome from '../GoHome/GoHome';


const App=()=>{
  return <div>
  <HashRouter>
        <div>
        <Navbar/>
         
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skill}/>
            <Route path="/projects" exact component={Project} />
            <Route path="/contact" exact component={Contact}/>
   
<GoHome/>

        </div>


      </HashRouter>


  </div>
}

export default App;
