import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
