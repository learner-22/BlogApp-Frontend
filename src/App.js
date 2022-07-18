
import './App.css';
import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import About from './components/pages/About'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      

      <Switch>
        <Route exact path = '/' component ={Landing} />
        <Route  path = '/home' component ={Home} />
        <Route  path = '/about' component ={About} />

      </Switch>
    </div>
  );
}

export default App;
