import React, { VFC } from 'react';
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import Home from './Home';
import Folders from './Folders';

const App: React.VFC = () => {

  return (
    <HashRouter>
    <div className="App">
      <div className="menu">
        <Link to="/"><button className="btn btn-primary">Home</button></Link>
        <Link to="/folders"><button className="btn btn-primary">Folders</button></Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/folders" component={Folders}/>
      </Switch>     
    </div>
    </HashRouter>    
  );
}

export default App;
