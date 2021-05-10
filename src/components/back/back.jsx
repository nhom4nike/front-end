import React from 'react';
import { withRouter } from 'react-router-dom';
import { BackIosIcon } from '@/components/icons/icon';

import './back.less';

const Back = ({ history }) => {
  const goPrevPage = () => {
    history.goBack();
  };

  return (
    <div className="wrap-button">
      <button type="button" onClick={goPrevPage} className="btn-back">
        <BackIosIcon />
        Quay lại trước
      </button>
    </div>
  );
};

export default withRouter(Back);
