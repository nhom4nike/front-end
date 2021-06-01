import React from 'react';

const InfoUser = ({ children, title, description }) => (
  <div className="info-user">
    <div className="info-user--head">
      <div className="info-user--head--right">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
    <div className="info-user--body">{children}</div>
  </div>
);

export default InfoUser;
