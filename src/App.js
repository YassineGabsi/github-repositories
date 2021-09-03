import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Repositories from './Components/Repositories';
import Home from './Components/Home';
import NotFound from "./Components/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {/** Repositories route **/}
                    <Route path='/repositories/:user' component={Repositories}/>

                    {/** Not found route ( when there is no user with the given name ) **/}
                    <Route exact path='/404' component={NotFound}/>

                    {/** Main page ( where the user can make his search ) **/}
                    <Route exact path='/' component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
