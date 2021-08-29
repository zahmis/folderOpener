import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, Route, Switch } from "react-router-dom";

import Home from './Home'
import NudleImages from './NudleImges'


const App: React.VFC = () => {
  return (
    <>
      <h1 className="text-center">folder opener app</h1>
      <HashRouter>
        <div className="App">
          <div className="menu text-center">
            <Link to="/"><button className="btn btn-primary m-3">Home</button></Link>
            <Link to="/folder"><button className="btn btn-primary m-3">NudleImages</button></Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/nudleimages" component={NudleImages}/>
          </Switch>     
        </div>
      </HashRouter>    
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
