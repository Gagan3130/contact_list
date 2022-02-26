
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
<Navbar/>
<Switch>
  <Route exact path="/" component={()=><Home/>}/>
  <Route exact path="/add">
<AddContact/>
  </Route>
  <Route path="/edit/:id">
<Edit/>
  </Route>
</Switch>
    </div>
  );
}

export default App;
