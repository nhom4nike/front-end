import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import RegisterNext from '@/pages/registerNext';
import ProfilePage from '@/pages/profile';
import Document from '@/pages/document';
import { SendDocument } from '@/pages/sendDocument';
import { PdfDocListProvider } from '../contants/contexts/pdfDocListContext';
import PrivateRoute from './privateRoute';

function App() {
  useEffect(() => {
    localStorage.setItem('isAuth', 'false');
    localStorage.setItem('isLogin', 'false');
  });
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      {/* <Route exact path="/">
        <HomePage />
      </Route> */}
      <Route path="/document/create">
        <PdfDocListProvider>
          <SendDocument />
        </PdfDocListProvider>
      </Route>
      <PrivateRoute
        path="/registerNext"
        authen="isRegisterPassword"
        component={RegisterNext}
        pathNameRedirect="/register"
      />
      <Route path="/document/list">
        <Document />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <PrivateRoute
        component={HomePage}
        path="/"
        authen="isLogin"
        pathNameRedirect="/login"
      />
    </Switch>
  );
}
export default App;
