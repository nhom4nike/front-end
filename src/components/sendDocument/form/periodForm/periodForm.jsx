import React, { useState, useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const iconType = ['circle-thin', 'check-circle'];

export const PeriodForm = ({ active, steps }) => {
  const [actived, setActived] = useState(1);

  useEffect(() => {
    setActived(active || 1);
  }, [active]);

  return (
    <div className="period-form">
      <div className="step">
        <i
          className={`fa fa-${iconType[actived > 1 ? 1 : 0]} fa-2x step__icon`}
          aria-hidden="true"
        />
        <p className="step__text">{steps[0] || ''}</p>
      </div>
      {steps &&
        steps.map((item, index) => {
          if (index + 1 === 1) return <></>;
          return (
            <div>
              <div
                className={`period-form__bar ${
                  +actived >= +index + 1 ? '' : 'bar--disabled'
                }`}
              />
              <div
                className={`step ${
                  +actived >= +index + 1 ? '' : 'step--disabled'
                }`}
              >
                <i
                  className={`fa fa-${
                    iconType[+actived > +index + 1 ? 1 : 0]
                  } fa-2x step__icon`}
                  aria-hidden="true"
                />
                <p className="step__text">{item}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

PeriodForm.propTypes = {
  active: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};
