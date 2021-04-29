import React from 'react';
import { Select } from 'antd';
import '@/styles/document.scss';
import PropTypes from 'prop-types';

const { Option } = Select;

const ButtonFilter = ({ menu, isDisabled }) => (
    <div>
      <Select
        defaultValue={menu[0].value}
        style={{ width: 150 }}
        disabled={!isDisabled}
      >
        {menu.map((element) => (
          <Option value={element.atributeValue} key={element.atributeValue}>
            {element.value}
          </Option>
        ))}
      </Select>
    </div>
  );
ButtonFilter.propTypes = {
  menu: PropTypes.instanceOf(Array).isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ButtonFilter;
