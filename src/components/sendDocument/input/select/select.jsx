import './style.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  defaultSelected,
  className,
  labelName,
  value,
  onChange,
  name,
  data,
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({
    value,
    text: defaultSelected,
  });

  const dropDownFocus = () => {
    setShow(!show);
  };
  const dropDownSelected = (e) => {
    setSelected({
      ...selected,
      value: +e.target.getAttribute('data-id'),
      text: e.target.innerText,
    });
    setShow(!show);
    e.target.value = e.target.getAttribute('value');
    onChange(e);
  };
  return (
    <div className={`select ${className || ''}`}>
      <label htmlFor={`dropdown ${name}`} className="select__label">
        {labelName}
      </label>
      <div className="drop-down">
        <input type="hidden" name={name} value={selected.value} />
        <div
          className="drop-down__select"
          onClick={dropDownFocus}
          role="button"
          tabIndex={-100}
          id={`dropdown ${name}`}
        >
          <span>{selected.text}</span>
          <i className="fa fa-caret-down icon" />
        </div>
        <div className={`drop-down__list ${!show ? 'Hidden' : ''}`}>
          {+data.length > 0 &&
            data.map((item, key) => (
              <div
                className={`drop-down__item ${
                  selected.value === key ? 'item--active' : ''
                }`}
                onClick={dropDownSelected}
                role="button"
                tabIndex={key}
                data-id={key}
                value={key}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  defaultSelected: PropTypes.string,
  className: PropTypes.string,
  labelName: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.string),
};

Select.defaultProps = {
  defaultSelected: '',
  className: '',
  labelName: '',
  name: '',
  data: [],
};
