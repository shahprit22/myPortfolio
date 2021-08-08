import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const settoggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Router>
        <Navbar settoggle={settoggle} />
        <Dropdown isOpen={isOpen}/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
