import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import RegisterNext from '@/pages/registerNext';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/registernext">
        <RegisterNext />
      </Route>
    </Switch>
  );
}
export default App;
