// @flow
import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  sendDocumentReducer,
  applyAnnot,
} from '../reducer/sendDocumentReducer';
import actionType from '../reducer/actionType';

import crypt from '../crypt';

export const pdfDocListContext = React.createContext();

const init = {
  author: localStorage.getItem('email'),
  title: '',
  message: '',
  xfdfStrings: [],
  signatures: [],
  partners: [],
  pdfDocList: [],
};

export const PdfDocListProvider = ({ children }) => {
  const [sendDocument, dispatch] = useReducer(sendDocumentReducer, init);
  const [instanced, setInstanced] = useState(null);
  const [fieldDocs, setfielDocs] = useState([]);

  const handleSendDocument = async () => {
    const xfdfs = [];
    const signs = [];

    const privateKey = localStorage.getItem('privateKey');
    const { docViewer } = instanced;
    const annotManager = docViewer.getAnnotationManager();
    for (let index = 0; index < sendDocument.pdfDocList.length; index += 1) {
      const document = sendDocument.pdfDocList[index];
      await docViewer.loadDocument(document.data);
      annotManager.addAnnotations(fieldDocs[index]);
      const xfdfString = await applyAnnot(instanced);
      // xfdfString = handleXFDF.openFieldFlagByEmail(sendDocument.author, xfdfString, 'ReadOnly');
      const sign = crypt.signature(privateKey, document.data + xfdfString);
      xfdfs.push(xfdfString);
      signs.push(sign);
    }
    dispatch({
      type: actionType.SEND_DOCUMENT,
      payload: {
        xfdfs,
        signs,
      },
    });
  };

  const removeListFieldDocs = (index) => {
    if (typeof fieldDocs[index] !== 'undefined') {
      const current = [...fieldDocs];
      current.splice(index, 1);
      setfielDocs([...current]);
    }
  };

  const updateListFieldDocs = (index = -1) => {
    if (instanced === null) return;
    const { docViewer } = instanced;
    const annotManager = docViewer.getAnnotationManager();
    const xfdf = annotManager
      .getAnnotationsList()
      .filter((annot) => annot.Subject === 'Free Text');

    if (index === -1 || fieldDocs.length === 0) {
      setfielDocs([...fieldDocs, xfdf]);
    } else {
      fieldDocs[index] = xfdf;
      setfielDocs([...fieldDocs]);
    }
  };

  const exportContext = {
    actionType,
    sendDocument,
    instanced,
    fieldDocs,

    setInstanced,
    dispatch,
    updateListFieldDocs,
    removeListFieldDocs,
    handleSendDocument,
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
