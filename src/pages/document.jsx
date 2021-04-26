import React from 'react';

import Header from '@/components/header/header';
import MenuDocument from '@/components/document/menu_document';
import ContentDocument from '@/components/document/content_document';
import Footer from '../components/footer';
import '@/styles/document.css';

const document = () => (
    <div className="document">
      <Header />
      <div className="document__content">
        <div className="content__left">
          <MenuDocument />
        </div>
        <div className="content__right">
          <ContentDocument />
        </div>
      </div>
      <Footer />
    </div>
  );

export default document;
