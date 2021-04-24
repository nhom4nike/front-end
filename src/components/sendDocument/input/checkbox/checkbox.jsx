import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ defaultChecked }) => (
  <input type="checkbox" className="checkbox" defaultChecked={defaultChecked} />
);

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
};

Checkbox.defaultProps = {
  defaultChecked: false,
};
