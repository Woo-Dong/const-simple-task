import React from 'react';  
import { Route, Switch } from 'react-router-dom'; 
import './App.css';

import MainPage from "views/MainPage/MainPage"; 

class App extends React.Component {

  constructor(props) { 
    super(props); 
  }

  render() {  
    return  ( 
      <div className="App" style={{padding: '0'}} >
        <Switch>
          <Route exact path="/" component={MainPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
