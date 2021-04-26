import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import RegisterNext from '@/pages/registerNext';
import Document from '@/pages/document';
import { SendDocument } from '@/pages/sendDocument';
import { PdfDocListProvider } from '../contants/contexts/pdfDocListContext';

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
      <Route path="/document/create">
        <PdfDocListProvider>
          <SendDocument />
        </PdfDocListProvider>
      </Route>
      <Route path="/registernext">
        <RegisterNext />
      </Route>
      <Route path="/document/list">
        <Document />
      </Route>
    </Switch>
  );
}
export default App;
