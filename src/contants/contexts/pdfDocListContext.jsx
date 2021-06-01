// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const pdfDocListContext = React.createContext();

export const PdfDocListProvider = ({ children }) => {
  const [pdfDocList, setPdfDocList] = useState([]);
  const [partners, setPartners] = useState([]);
  const setDocList = (value) => {
    setPdfDocList(value);
  };
  const setPartnerList = (value) => {
    setPartners(value);
  };

  const exportContext = {
    pdfDocList,
    setPdfDocList: setDocList,
    partners,
    setPartners: setPartnerList,
  };

  return (
    <pdfDocListContext.Provider value={exportContext}>
      {children}
    </pdfDocListContext.Provider>
  );
};

PdfDocListProvider.propTypes = {
  children: PropTypes.element,
};

PdfDocListProvider.defaultProps = {
  children: <></>,
};
