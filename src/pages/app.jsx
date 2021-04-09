import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'src/pages/home';
import LoginPage from 'src/pages/login';
import RegisterPage from 'src/pages/register';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
