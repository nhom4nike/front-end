import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className, onClick, icon, children }) => {
  const targetBtnStyle = className || 'btn--primary';
  return (
    <div
      className={`button ${className} ${targetBtnStyle}`}
      onClick={onClick}
      role="button"
      tabIndex={-100}
    >
      {typeof icon === 'object' && (
        <i
          className={`fa fa-${icon.name}`}
          aria-hidden="true"
          style={icon.style}
        />
      )}
      {children}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.objectOf({
    name: PropTypes.string,
    style: PropTypes.object,
  }),
  children: PropTypes.element,
};

Button.defaultProps = {
  className: '',
  icon: {},
  children: <></>,
  onClick: () => {},
};
