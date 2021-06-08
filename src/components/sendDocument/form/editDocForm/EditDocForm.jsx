// @flow
import './style.scss';
import React, { useRef, useEffect, useContext, useReducer } from 'react';

import WebViewer from '@pdftron/webviewer';
import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';
import { Select } from '../../input/select/select';
import { editDocReducer, editDocAction } from './reducer/editDocReducer';

const TYPE = {
  DATE: 'DATE_TIME',
  TEXT: 'TEXT',
  SIGN: 'SIGNATURE',
};

const init = {
  mailSelected: 0,
  authors: [localStorage.getItem('email')],
  dropPoint: null,
  currentDocShow: 0,
};
export const EditDocForm = () => {
  const {
    removeListFieldDocs,
    updateListFieldDocs,
    fieldDocs,
    sendDocument,
    dispatch,
    actionType,
    instanced,
    setInstanced,
  } = useContext(pdfDocListContext);
  const [editDoc, editDocDispatch] = useReducer(editDocReducer, init);
  const viewer = useRef(null);

  const drop = (e, instance) => {
    editDocDispatch({
      type: editDocAction.EDIT_DROPPOINT,
      payload: {
        docViewer: instance.docViewer,
        e,
      },
    });
    return false;
  };

  const dropOver = (e) => {
    e.preventDefault();
    return true;
  };

  const dragStart = (e, text) => {
    editDocDispatch({
      type: editDocAction.DRAG_FIELD,
      payload: { e, text },
    });
  };

  const dragEnd = (e, type, content) => {
    editDocDispatch({
      type: editDocAction.ADD_FIELD,
      payload: { instanced, type, content, updateListFieldDocs },
    });

    e.target.style.opacity = 1;
    document.body.removeChild(document.getElementById('form-drag'));
    e.preventDefault();
  };

  useEffect(() => {
    editDocDispatch({
      type: editDocAction.INIT,
      payload: {
        partners: [...sendDocument.partners.map((partner) => partner.email)],
      },
    });
    WebViewer(
      {
        extension: 'pdf',
        path: '/lib',
        disabledElements: [
          'viewControlsButton',
          'selectToolButton',
          'leftPanelButton',
          'ribbons',
          'toggleNotesButton',
          'searchButton',
          'menuButton',
          'rubberStampToolGroupButton',
          'stampToolGroupButton',
          'fileAttachmentToolGroupButton',
          'calloutToolGroupButton',
          'undo',
          'redo',
          'eraserToolButton',
          'toolsHeader',
        ],
      },
      viewer.current
    ).then((instance) => {
      setInstanced(instance);
      const { iframeWindow, Annotations } = instance;
      Annotations.SignatureWidgetAnnotation.prototype.createSignHereElement = function () {
        const div = document.createElement('div');
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.cursor = 'pointer';

        const inlineSvg =
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25.588 25.588" style="enable-background:new 0 0 25.588 25.588; width: 100%; height: 100%; transform: translateX(-35%);" xml:space="preserve"><g><path style="fill:#030104;" d="M18.724,9.903l3.855,1.416l-3.206,8.729c-0.3,0.821-1.927,3.39-3.06,3.914l-0.275,0.75c-0.07,0.19-0.25,0.309-0.441,0.309c-0.054,0-0.108-0.01-0.162-0.029c-0.243-0.09-0.369-0.359-0.279-0.604l0.26-0.709c-0.575-1.117-0.146-4.361,0.106-5.047L18.724,9.903z M24.303,0.667c-1.06-0.388-2.301,0.414-2.656,1.383l-2.322,6.326l3.854,1.414l2.319-6.325C25.79,2.673,25.365,1.056,24.303,0.667z M17.328,9.576c0.108,0.04,0.219,0.059,0.327,0.059c0.382,0,0.741-0.234,0.882-0.614l2.45-6.608c0.181-0.487-0.068-1.028-0.555-1.208c-0.491-0.178-1.028,0.068-1.209,0.555l-2.45,6.608C16.592,8.855,16.841,9.396,17.328,9.576z M13.384,21.967c-0.253-0.239-0.568-0.537-1.078-0.764c-0.42-0.187-0.829-0.196-1.128-0.203c-0.031,0-0.067-0.001-0.103-0.002c-0.187-0.512-0.566-0.834-1.135-0.96c-0.753-0.159-1.354,0.196-1.771,0.47c0.037-0.21,0.098-0.46,0.143-0.64c0.144-0.58,0.292-1.18,0.182-1.742c-0.087-0.444-0.462-0.774-0.914-0.806c-1.165-0.065-2.117,0.562-2.956,1.129c-0.881,0.595-1.446,0.95-2.008,0.749c-0.686-0.244-0.755-2.101-0.425-3.755c0.295-1.49,0.844-4.264,2.251-5.524c0.474-0.424,1.16-0.883,1.724-0.66c0.663,0.26,1.211,1.352,1.333,2.653c0.051,0.549,0.53,0.952,1.089,0.902c0.55-0.051,0.954-0.539,0.902-1.089c-0.198-2.12-1.192-3.778-2.593-4.329C6.058,7.07,4.724,6.982,3.107,8.429c-1.759,1.575-2.409,4.246-2.88,6.625c-0.236,1.188-0.811,5.13,1.717,6.029c1.54,0.549,2.791-0.298,3.796-0.976c0.184-0.124,0.365-0.246,0.541-0.355c-0.167,0.725-0.271,1.501,0.167,2.155c0.653,0.982,1.576,1.089,2.742,0.321c0.045-0.029,0.097-0.063,0.146-0.097c0.108,0.226,0.299,0.475,0.646,0.645c0.42,0.206,0.84,0.216,1.146,0.224c0.131,0.003,0.31,0.007,0.364,0.031c0.188,0.083,0.299,0.185,0.515,0.389c0.162,0.153,0.333,0.312,0.55,0.476c0.18,0.135,0.39,0.199,0.598,0.199c0.304,0,0.605-0.139,0.801-0.4c0.331-0.442,0.241-1.069-0.201-1.4C13.61,22.183,13.495,22.072,13.384,21.967z"/></g></svg>';
        div.innerHTML = inlineSvg;

        return div;
      };
      const iframeDoc = iframeWindow.document.body;

      iframeDoc.addEventListener('dragover', dropOver);
      iframeDoc.addEventListener('drop', (e) => {
        e.preventDefault();
        drop(e, instance);
      });
    });
  }, []);

  useEffect(() => {
    editDocDispatch({
      type: editDocAction.LOAD_DOC,
      payload: {
        instanced,
        sendDocument,
        fieldDocs,
        current: editDoc.currentDocShow,
      },
    });
  }, [instanced, sendDocument.pdfDocList, editDoc.currentDocShow]);

  const handleRemoveFile = (e) => {
    const indexFileDelete = e.currentTarget.getAttribute('data-id');
    removeListFieldDocs(indexFileDelete);
    editDocDispatch({
      type: editDocAction.REMOVE_DOC,
      payload: {
        indexFileDelete,
        sendDocument,
      },
    });
    dispatch({
      type: actionType.REMOVE_DOC,
      payload: indexFileDelete,
    });
  };

  const handleReloadDoc = (e) => {
    updateListFieldDocs(editDoc.currentDocShow);
    editDocDispatch({
      type: editDocAction.RELOAD_DOC,
      payload: +e.currentTarget.getAttribute('data-id'),
    });
  };

  const handleMailSelected = (e) => {
    editDocDispatch({
      type: editDocAction.MAILSELECTED_CHANGE,
      payload: +e.target.value,
    });
  };

  return (
    <div className="edit-doc-form">
      <div className="edit-field">
        <Select
          value={editDoc.mailSelected}
          onChange={(e) => {
            handleMailSelected(e);
          }}
          className="drop--bottom"
          defaultSelected={editDoc.authors[editDoc.mailSelected]}
          data={editDoc.authors}
        />
        <div className="edit-field__items">
          <div
            className="item"
            draggable="true"
            onDragStart={(e) => {
              dragStart(e, 'Ký tên');
            }}
            onDragEnd={(e) =>
              dragEnd(
                e,
                TYPE.SIGN,
                `_SIGNATURE_FOR_${
                  editDoc.mailSelected === 0
                    ? 'ME'
                    : editDoc.authors[editDoc.mailSelected]
                }`
              )
            }
          >
            <i
              className="fa fa-pencil fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Ký tên</span>
          </div>
          <div
            className="item"
            draggable="true"
            onDragStart={(e) => {
              dragStart(e, 'Ngày ký');
            }}
            onDragEnd={(e) =>
              dragEnd(
                e,
                TYPE.DATE,
                `_DATE_FOR_${
                  editDoc.mailSelected === 0
                    ? 'ME'
                    : editDoc.authors[editDoc.mailSelected]
                }`
              )
            }
          >
            <i
              className="fa fa-calendar fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Ngày ký</span>
          </div>
          <div
            className="item"
            draggable="true"
            onDragStart={(e) => {
              dragStart(e, 'Chữ');
            }}
            onDragEnd={(e) =>
              dragEnd(
                e,
                TYPE.TEXT,
                `_NAME_FOR_${
                  editDoc.mailSelected === 0
                    ? 'ME'
                    : editDoc.authors[editDoc.mailSelected]
                }`
              )
            }
          >
            <i
              className="fa fa-font fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Chữ</span>
          </div>
        </div>
      </div>

      <div className="edit-doc-form__preview-doc webviewer" ref={viewer} />
      {sendDocument.pdfDocList.length > 0 && (
        <div className="preview-file">
          {sendDocument.pdfDocList.map((item, index) => (
            <div
              className="preview-file__item"
              style={{ marginBottom: '1rem' }}
            >
              <div
                data-id={index}
                className="preview-file__header"
                role="button"
                tabIndex={index}
                onClick={(e) => handleReloadDoc(e)}
              >
                <div className="preview-file__thumbnail">
                  <img
                    alt=""
                    data-id={index}
                    src={item.thumbnailData}
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <span
                  data-id={index}
                  className="preview-file__doc-name"
                  style={{ fontWeight: 'bold', wordWrap: 'break-word' }}
                >
                  {item.name}
                </span>
              </div>

              <div className="info">
                <div className="preview-file__sub-info">
                  <span>{item.pageCount} trang</span>
                  <span
                    role="button"
                    tabIndex={index}
                    data-id={index}
                    style={{
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                      color: 'red',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => handleRemoveFile(e)}
                  >
                    Xóa
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
