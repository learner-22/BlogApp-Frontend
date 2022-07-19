
import './App.css';
import Landing from './components/pages/Landing'
import Home from './components/pages/Home'
import About from './components/pages/About'
import UpdateBlog from './components/forms/UpdateBlog'
import {Route,Switch} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [user,setUser] = useState({})
  return (
    <div className="container">
      

      <Switch>
        <Route exact path = '/' render ={routerProps => <Landing {...routerProps} setUser={setUser} />} />
        <Route  path = '/home' render ={routerProps => <Home {...routerProps} user ={user} />} />
        <Route  path = '/about' component ={About} />
        <Route path = '/update/:id' component ={ UpdateBlog} />
      </Switch>
    </div>
  );
}

export default App;
