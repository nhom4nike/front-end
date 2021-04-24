// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const pdfDocListContext = React.createContext();

export const PdfDocListProvider = ({ children }) => {
  const [pdfDocList, setPdfDocList] = useState([]);

  const setDocList = (value) => {
    setPdfDocList(value);
  };

  const exportContext = {
    pdfDocList,
    setPdfDocList: setDocList,
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
