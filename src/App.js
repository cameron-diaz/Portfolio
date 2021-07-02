import  Home  from "./components/Home"
import Resume from './components/Resume'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Container } from "@material-ui/core";
import Particle from "./Particle";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Container className='appContainer' maxWidth='lg' disableGutters>
        <Navbar />
        <Particle />
      </Container>

      <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
