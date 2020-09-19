import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Portifolio from './pages/portifolio'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/home/Portifolio" exact component={Portifolio}/>
      
      
      
      
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


