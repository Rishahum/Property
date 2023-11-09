import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Map from './Components/map.jsx'
import Home from './Components/Home/Home.jsx';
import Properties from './Components/Properties/Properties.jsx';
function App() {
 
  return (
   <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/map' component={Map}/>
        <Route path='/properties' component={Properties} />
        
      </Switch>
   </Router>
 
  );
}

export default App;
