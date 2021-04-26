import React from 'react';
import { Dropdown, Button } from 'antd';
import '@/styles/document.css';
import { CaretDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ButtonFilter = ({ title, menu }) => (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button className="button-filter">
          {title}
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </>
  );

ButtonFilter.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.string.isRequired,
};

export default ButtonFilter;
