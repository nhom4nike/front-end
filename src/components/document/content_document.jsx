import React from 'react';
import { Layout } from 'antd';
import '@/styles/document.css';
import HeaderContent from '@/components/document/header_content';
import ManagementDocument from '@/components/document/management_document';

const { Content } = Layout;
const ContentDocument = () => (
    <>
      <Content className="main_content">
        <HeaderContent />
        <ManagementDocument />
      </Content>
    </>
  );

export default ContentDocument;
