import React from 'react';
import { AddTask, Tasks, Login } from './pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/new-task" component={AddTask} />
        <Route path="/" component={Tasks} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
