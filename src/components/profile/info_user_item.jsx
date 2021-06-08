import React from 'react';

const InfoUserItem = ({ label, value }) => (

  <div className="info-user-item">
    <span className="info-user-item--label">{label}</span>
    <span className="info-user-item--value">{value}</span>
  </div>
);
export default InfoUserItem;
