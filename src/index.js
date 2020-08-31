import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Serviço from './pages/serviço'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}/>
      <Route path="/home/serviço" exact component={Serviço}/>
      
      
      
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


