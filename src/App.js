import './App.scss';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Repositories from './Components/Repositories';
import Home from './Components/Home';
import NotFound from "./Components/NotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/repositories/:user' component={Repositories}/>
          <Route exact path='/404' component={NotFound}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
