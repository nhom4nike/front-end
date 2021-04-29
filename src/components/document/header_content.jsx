import React from 'react';
import { Button, Typography } from 'antd';
import '@/styles/document.scss';
import PropTypes from 'prop-types';

const { Title } = Typography;

const HeaderContent = ({ headerTitle }) => (
  <div className="header-content">
    <span>
      <Title level={4}>{headerTitle.title}</Title>
      <p style={{ opacity: '0.6' }}>{headerTitle.desciption}</p>
    </span>
    <Button type="primary">Gửi bản mẫu</Button>
  </div>
);

HeaderContent.propTypes = {
  headerTitle: PropTypes.instanceOf(Object).isRequired,
};

export default HeaderContent;
