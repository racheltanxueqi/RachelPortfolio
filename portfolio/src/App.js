import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/index.js';
import About from './pages/about/index.js';
import Timeline from './pages/timeline/index.js';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/timeline' exact component={Timeline} />
        </Switch>
    </Router>
  );
}

export default App;
