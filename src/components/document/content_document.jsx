import React from 'react';
import { Layout } from 'antd';
import '@/styles/document.scss';
import HeaderContent from '@/components/document/header_content';
import ManagementDocument from '@/components/document/management_document';
import PropTypes from 'prop-types';

const { Content } = Layout;
const ContentDocument = ({ headerTitle, data }) => (
  <>
    <Content className="main_content">
      <HeaderContent headerTitle={headerTitle} />
      <ManagementDocument data={data} />
    </Content>
  </>
);

ContentDocument.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  headerTitle: PropTypes.instanceOf(Object).isRequired,
};

export default ContentDocument;
