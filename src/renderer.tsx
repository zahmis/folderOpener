import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
// import NudleFolder from './NudleFolder'

import {HashRouter,Link,Route,Switch} from "react-router-dom";
import Home from './Home';
// import Folders from './Folders';

const App: React.VFC = () => {

    return (
      <HashRouter>
      <div className="App">
        <div className="menu">
          <Link to="/"><button className="btn btn-primary">Home</button></Link>
          <Link to="/folder"><button className="btn btn-primary">Folders</button></Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/folder" component={Folders}/>
        </Switch>     
      </div>
      </HashRouter>    
    );
  }


  const clickHandler = () => {
      console.log('foo')
  }

  const Folders = () => {

    console.log('1')
  
    return (  
      
      <div className="d-flex flex-column w-25">
          <button className="button" onClick={()=>clickHandler()}>hoge</button>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));
