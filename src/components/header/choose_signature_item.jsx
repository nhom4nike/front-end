import React from 'react';
import PropTypes from 'prop-types';

const ChooseSignatureItem = ({ data, selected }) => (
    <div
      className={
        selected ? 'choose-signature-item active' : 'choose-signature-item'
      }
    >
      <div className="choose-signature-item__check">
        <div className="choose-signature-item__circle-1">
          <div className="choose-signature-item__circle-2" />
        </div>
      </div>
      <div className="choose-signature-item__inner">
        <span className="choose-signature-item__label">Chữ ký:</span>
        <span className="choose-signature-item__signature">{data.name}</span>
      </div>
      <div className="choose-signature-item__inner">
        <span className="choose-signature-item__label">Chữ ký tắt:</span>
        <span className="choose-signature-item__signature">{data.initial}</span>
      </div>
    </div>
  );

ChooseSignatureItem.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ChooseSignatureItem;
