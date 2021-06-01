import './style.scss';
import Input from '@/components/sendDocument/input/input/input';
import PropTypes from 'prop-types';
import React from 'react';

export const InputWithLabel = ({
  className,
  name,
  labelName,
  type,
  placeHolder,
  value,
  children,
  onChange,
}) => (
  <div className={`input-with-label ${className}`}>
    <label className="input-with-label__label" htmlFor={`txt${name}`}>
      {labelName}
    </label>
    <Input
      onChange={onChange}
      type={type}
      name={name}
      placeHolder={placeHolder}
      id={`txt${name}`}
      value={value}
    />
    {children}
  </div>
);

InputWithLabel.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  labelName: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.element,
  placeHolder: PropTypes.string,
};

InputWithLabel.defaultProps = {
  className: '',
  name: '',
  labelName: '',
  value: '',
  children: <></>,
  placeHolder: '',
};
