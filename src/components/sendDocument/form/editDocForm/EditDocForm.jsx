// @flow
import './style.scss';
import React, { useRef, useState, useEffect, useContext } from 'react';
import WebViewer from '@pdftron/webviewer';
import { pdfDocListContext } from '../../../../contants/contexts/pdfDocListContext';

const TYPE = {
  TEXT: 'TEXT',
  SIGN: 'SIGNATURE',
};

export const EditDocForm = () => {
  const { pdfDocList, setPdfDocList } = useContext(pdfDocListContext);
  const [dropPoint, setDropPoint] = useState(null);
  const [currentDocShow, setCurrentDocShow] = useState(0);
  const [instanced, setInstanced] = useState(null);
  const viewer = useRef(null);

  const drop = (e, instance) => {
    // set pointDrop;
    const { docViewer } = instance;
    // post = scroll + e.page;

    const scrollView = docViewer.getScrollViewElement();
    const posScrollLeft = scrollView.scrollLeft || 0;
    const posScrollTop = scrollView.scrollTop || 0;
    setDropPoint({ x: e.pageX + posScrollLeft, y: e.pageY + posScrollTop });
    e.preventDefault();
    return false;
  };

  const dropOver = (e) => {
    e.preventDefault();
    return true;
  };

  const dragStart = (e) => {
    e.target.style.opacity = 0.3;

    const divDrag = document.createElement('div');
    divDrag.className = 'form-drag';
    divDrag.id = 'form-drag';
    const title = document.createElement('span');
    const icon = document.createElement('i');
    title.innerHTML = 'Ký tên';
    icon.className = 'fa fa-pencil fa-lg';
    divDrag.appendChild(title);
    divDrag.appendChild(icon);
    document.body.appendChild(divDrag);

    e.dataTransfer.setDragImage(divDrag, 80, 28);
  };

  const addField = (type, point = {}) => {
    const { docViewer, Annotations } = instanced;
    const annotManager = docViewer.getAnnotationManager();
    // const doc = docViewer.getDocument();
    const displayMode = docViewer.getDisplayModeManager().getDisplayMode();
    const page = displayMode.getSelectedPages(point, point);

    if (page.first === null) {
      return;
    }

    const pageIndex = page.first;
    // const pageInfo = doc.getPageInfo(pageIndex);
    const pagePoint = displayMode.windowToPage(point, pageIndex);
    // pagePoint fix positionWindow -> positonPage
    // const zoom = docViewer.getZoom();

    const newAnnot = new Annotations.FreeTextAnnotation();
    newAnnot.PageNumber = pageIndex;
    newAnnot.Rotation = docViewer.getCompleteRotation(pageIndex) * 90;

    newAnnot.setWidth(newAnnot.Rotation === 90 ? 50 : 250);
    newAnnot.setHeight(newAnnot.Rotation === 90 ? 250 : 50);

    newAnnot.X = pagePoint.x - newAnnot.getWidth() / 2;
    newAnnot.Y = pagePoint.y - newAnnot.getHeight() / 2;

    newAnnot.setPadding(new Annotations.Rect(0, 0, 0, 0));
    newAnnot.customs = {
      // add more info
      type,
    };
    newAnnot.setContents('_DIGITAL_SIGNATURE');
    newAnnot.FontSize = `${20.0}px`;
    newAnnot.FillColor = new Annotations.Color(23, 162, 184, 1);
    newAnnot.TextColor = new Annotations.Color(255, 255, 255, 1);
    newAnnot.StrokeThickness = 1;
    newAnnot.StrokeColor = new Annotations.Color(0, 165, 228);
    newAnnot.TextAlign = 'center';

    annotManager.deselectAllAnnotations();
    annotManager.addAnnotation(newAnnot, true);
    annotManager.redrawAnnotation(newAnnot);
    annotManager.selectAnnotation(newAnnot);
  };

  const dragEnd = (e, type) => {
    addField(type, dropPoint);
    e.target.style.opacity = 1;
    document.body.removeChild(document.getElementById('form-drag'));
    e.preventDefault();
  };

  useEffect(() => {
    WebViewer(
      {
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
      const { iframeWindow } = instance;

      const iframeDoc = iframeWindow.document.body;

      iframeDoc.addEventListener('dragover', dropOver);
      iframeDoc.addEventListener('drop', (e) => {
        e.preventDefault();
        drop(e, instanced);
      });
    });
  }, []);

  useEffect(() => {
    if (instanced && pdfDocList.length > -1) {
      const { docViewer } = instanced;
      docViewer.loadDocument(
        pdfDocList.length > 0 ? pdfDocList[currentDocShow].data : null
      );
    }
  }, [instanced, pdfDocList, currentDocShow]);

  /*
    const applyAnnot = async () => {
        const { Annotations, docViewer } = instance;
        const annotManager = docViewer.getAnnotationManager();
        const fieldManager = annotManager.getFieldManager();
        const annotationsList = annotManager.getAnnotationsList();
        const annotsToDelete = [];
        const annotsToDraw = [];

        annotationsList.forEach((annot, index) => {
            let applyAnnot;
            let field;
            if (typeof(annot.customs) === 'undefined') return;
            switch (annot.customs.type) {
                case TYPE.TEXT:
                    field = new Annotations.Forms.Field(annot.getContents() + index, {
                        type: 'Tx',
                        value: '',
                    });
                    applyAnnot = new Annotations.TextWidgetAnnotation(field);
                    break;
            }
            applyAnnot.PageNumber = annot.getPageNumber();
            applyAnnot.X = annot.getX();
            applyAnnot.Y = annot.getY();

            applyAnnot.rotation = annot.Rotation;
            console.log(annot.getWidth(), annot.getHeight())
            console.log(applyAnnot.rotation);
            applyAnnot.setWidth((applyAnnot.rotation === 90)? annot.getHeight() :annot.getWidth());
            applyAnnot.setHeight((applyAnnot.rotation === 90)? annot.getWidth(): annot.getHeight());

            // customize styles of the form field
            Annotations.WidgetAnnotation.getCustomStyles = function (widget) {
                if (widget instanceof Annotations.TextWidgetAnnotation) {
                  return {
                    'background-color': '#007bff',
                    color: 'white',
                    'font-size': '20px',
                    padding: '0.5rem'
                  };
                }
              };
            Annotations.WidgetAnnotation.getCustomStyles(applyAnnot);
            annotsToDelete.push(annot);
            annotManager.addAnnotation(applyAnnot);
            fieldManager.addField(field);
            annotsToDraw.push(applyAnnot);
        })
        annotManager.deleteAnnotations(annotsToDelete, { force: true });

        annotManager.drawAnnotationsFromList(annotsToDraw);
        
        //const data = await doc.getFileData({ xfdfString });
        //const arr = new Uint8Array(data);
        //const blob = new Blob([arr], { type: 'application/pdf' });
    }

    const downloadAnnot = async () =>{
        const {docViewer} = instance;
        const annotManager = docViewer.getAnnotationManager();
        const xfdfString = await annotManager.exportAnnotations({ widgets: true, fields: true });
        const pdfName = pdfDocList[currentDocShow].name;
        instance.downloadPdf({
            filename: pdfName,
            xfdfString,
            includeAnnotations: true,
            flatten: true
        })
    }
*/
  const handleRemoveFile = (e) => {
    const indexFileDelete = e.currentTarget.getAttribute('data-id');
    let currentList = [...pdfDocList];
    if (pdfDocList.length > 1) {
      currentList.splice(indexFileDelete, 1);
    } else {
      currentList = [];
    }
    const current =
      +currentDocShow > +currentList.length - 1
        ? currentDocShow - 1
        : currentDocShow;
    setCurrentDocShow(current);
    setPdfDocList(currentList);
  };

  const handleReloadDoc = (e) => {
    const indexDocSelect = e.currentTarget.getAttribute('data-id');
    if (currentDocShow !== indexDocSelect) {
      setCurrentDocShow(indexDocSelect);
    }
  };

  return (
    <div className="edit-doc-form">
      <div className="edit-field">
        <div className="edit-field__items">
          <div
            className="item"
            draggable="true"
            onDragStart={dragStart}
            onDragEnd={(e) => dragEnd(e, TYPE.TEXT)}
          >
            <i
              className="fa fa-pencil fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Ký tên</span>
          </div>
          <div className="item">
            <i
              className="fa fa-calendar fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Ngày ký</span>
          </div>
          <div className="item">
            <i
              className="fa fa-font fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Chữ</span>
          </div>
          <div className="item">
            <i
              className="fa fa-paint-brush fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Vẽ</span>
          </div>
        </div>
        <div className="edit-field__items">
          <div className="item">
            <i
              className="fa fa-user fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Tên</span>
          </div>
          <div className="item">
            <i
              className="fa fa-envelope fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Email</span>
          </div>
          <div className="item">
            <i
              className="fa fa-building-o fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Công ty</span>
          </div>
          <div className="item">
            <i
              className="fa fa-briefcase fa-2x edit-field__icon"
              aria-hidden="true"
            />
            <span className="edit-field__text">Tiêu đề</span>
          </div>
        </div>
      </div>

      <div className="edit-doc-form__preview-doc webviewer" ref={viewer} />
      {pdfDocList.length > 0 && (
        <div className="preview-file">
          {pdfDocList.map((item, index) => (
            <div
              role="button"
              tabIndex={index}
              data-id={index}
              className="preview-file__item"
              style={{ marginBottom: '1rem' }}
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
              <div className="info">
                <span
                  data-id={index}
                  className="preview-file__doc-name"
                  style={{ fontWeight: 'bold', wordWrap: 'break-word' }}
                >
                  {item.name}
                </span>
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
