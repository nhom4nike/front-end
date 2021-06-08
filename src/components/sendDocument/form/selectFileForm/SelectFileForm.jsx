// @flow
import './style.scss';
import '@pdftron/webviewer/public/core/CoreControls';
import React, { useRef, useContext } from 'react';
import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';

let docList = [];
export const SelectFileForm = () => {
  const fileInputRef = useRef();
  const { sendDocument, dispatch, actionType } = useContext(pdfDocListContext);

  const handleRefInput = () => {
    fileInputRef.current.click();
  };
  const setThumbnail = async (dataFile, object, cb) => {
    const Object = object;
    const coreControls = window.CoreControls;
    coreControls.setWorkerPath('/lib/core');
    const doc = await coreControls.createDocument(dataFile, {
      extension: 'pdf',
    });

    Object.pageCount = doc.getPageCount();
    doc.loadCanvasAsync({
      pageNumber: 1,
      drawComplete: (canvas) => {
        Object.thumbnailData = canvas.toDataURL();
        docList = [...docList, Object];
        cb(docList);
      },
    });
  };
  const handleRemoveFile = (e) => {
    dispatch({
      type: actionType.REMOVE_DOC,
      payload: +e.target.getAttribute('data-id'),
    });
  };

  const handleSelectFile = (e) => {
    const { files } = e.target;

    for (let index = 0; index < files.length; index += 1) {
      const element = files[index];
      const reader = new FileReader();
      const seletedFile = {
        name: element.name,
      };
      reader.readAsDataURL(element);
      reader.onload = (ev) => {
        seletedFile.data = ev.target.result;
        setThumbnail(ev.target.result, seletedFile, (documentList) => {
          const docslist = documentList;
          if (docslist.length === files.length) {
            dispatch({
              type: actionType.ADD_DOC_LIST,
              payload: [...docslist],
            });
            docslist.length = 0;
          }
        });
      };
    }
  };

  return (
    <div className="select-file-form">
      <div
        className="select-file-form__input"
        onClick={handleRefInput}
        role="button"
        tabIndex="-100"
      >
        <i className="fa fa-cloud-upload fa-4x" aria-hidden="true" />
        <p style={{ margin: '0rem', fontWeight: 'bold' }}>Tải tài liệu</p>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleSelectFile}
          multiple
        />
      </div>

      {sendDocument.pdfDocList.length > 0 && (
        <div className="preview-file">
          {sendDocument.pdfDocList.map((item, index) => (
            <div
              data-id={index}
              className="preview-file__item"
              style={{ marginBottom: '1rem' }}
            >
              <div className="preview-file__thumbnail">
                <img
                  alt=""
                  src={item.thumbnailData}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="info">
                <span style={{ fontWeight: 'bold', wordWrap: 'break-word' }}>
                  {item.name}
                </span>
                <div className="preview-file__sub-Info">
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
                    onClick={handleRemoveFile}
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
