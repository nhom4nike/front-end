import TYPE from './actionType';

export const sendDocumentReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.ADD_DOC_LIST: {
      return {
        ...state,
        pdfDocList: [...state.pdfDocList, ...payload],
      };
    }
    case TYPE.REMOVE_DOC: {
      const currentList = [...state.pdfDocList];
      currentList.splice(payload, 1);
      return {
        ...state,
        pdfDocList: [...currentList],
      };
    }

    case TYPE.REMOVE_PARTNER: {
      const currentListPartner = [...state.partners];
      currentListPartner.splice(payload, 1);
      return {
        ...state,
        partners: [...currentListPartner],
      };
    }
    case TYPE.ADD_PARTNERS: {
      return {
        ...state,
        partners: [...state.partners, payload],
      };
    }
    case TYPE.UPDATE_MESSAGE: {
      return {
        ...state,
        message: payload,
      };
    }
    case TYPE.UPDATE_TITLE: {
      return {
        ...state,
        title: payload,
      };
    }
    case TYPE.SEND_DOCUMENT: {
      return {
        ...state,
        xfdfStrings: [...payload.xfdfs],
        signatures: [...payload.signs],
      };
    }
    default:
      return state;
  }
};

const ANNOT_TYPE = {
  DATE: 'DATE_TIME',
  TEXT: 'TEXT',
  SIGN: 'SIGNATURE',
};

export const applyAnnot = async (instanced) => {
  const { Annotations, docViewer } = instanced;
  const { WidgetFlags } = Annotations;
  const annotManager = docViewer.getAnnotationManager();
  const fieldManager = annotManager.getFieldManager();
  const annotationsList = annotManager.getAnnotationsList();
  const annotsToDelete = [];
  const annotsToDraw = [];
  // annotManager.setCurrentUser(author.replace('.', '_'));
  annotationsList.forEach((annot, index) => {
    let applyAnnotation;
    let field;
    if (typeof annot.customs === 'undefined') return;

    const flags = new WidgetFlags();
    // flags.set('ReadOnly', (author.replace('.', '_') === annot.customs.author) ? false : true);
    flags.set('ReadOnly', true);
    switch (annot.customs.type) {
      case ANNOT_TYPE.SIGN:
        field = new Annotations.Forms.Field(
          `${annot.customs.author}#Sig${index}`,
          {
            type: 'Sig',
            flags,
          }
        );
        applyAnnotation = new Annotations.SignatureWidgetAnnotation(field, {
          appearance: '_DEFAULT',
          appearances: {
            _DEFAULT: {
              Normal: {
                data:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC',
                offset: {
                  x: 100,
                  y: 100,
                },
              },
            },
          },
        });
        break;
      case ANNOT_TYPE.TEXT:
        field = new Annotations.Forms.Field(
          `${annot.customs.author}#Name${index}`,
          {
            type: 'Tx',
            flags,
          }
        );
        applyAnnotation = new Annotations.TextWidgetAnnotation(field);
        break;
      case ANNOT_TYPE.DATE:
        field = new Annotations.Forms.Field(
          `${annot.customs.author}#Date${index}`,
          {
            type: 'Tx',
            value: 'm-d-yyyy',
            flags,
            actions: {
              F: [
                {
                  name: 'JavaScript',
                  javascript: 'AFDate_FormatEx("mmm d, yyyy");',
                },
              ],
              K: [
                {
                  name: 'JavaScript',
                  javascript: 'AFDate_FormatEx("mmm d, yyyy");',
                },
              ],
            },
          }
        );

        applyAnnotation = new Annotations.DatePickerWidgetAnnotation(field);
        break;
      default:
        break;
    }
    const zoom = docViewer.getZoom();
    applyAnnotation.PageNumber = annot.getPageNumber();
    applyAnnotation.X = annot.getX();
    applyAnnotation.Y = annot.getY();
    applyAnnotation.rotation = annot.Rotation;
    applyAnnotation.setWidth(
      (applyAnnotation.rotation === 90 ? annot.getHeight() : annot.getWidth()) *
        zoom
    );
    applyAnnotation.setHeight(
      (applyAnnotation.rotation === 90 ? annot.getWidth() : annot.getHeight()) *
        zoom
    );
    Annotations.WidgetAnnotation.getCustomStyles = function (widget) {
      if (widget instanceof Annotations.TextWidgetAnnotation) {
        return {
          'font-size': `calc(1rem / ${zoom}`,
          'text-align': 'center',
          borderBottom: '2px solid #a5c7ff',
          color: 'black',
          'background-color': '#e0e3e6',
          fontWeight: 'bold',
        };
      }
      if (widget instanceof Annotations.SignatureWidgetAnnotation) {
        return {
          borderBottom: '2px solid #a5c7ff',
        };
      }
      return {};
    };

    Annotations.WidgetAnnotation.getCustomStyles(applyAnnotation);

    annotsToDelete.push(annot);
    annotManager.addAnnotation(applyAnnotation);
    fieldManager.addField(field);
    annotsToDraw.push(applyAnnotation);
  });
  await annotManager.deleteAnnotations(annotsToDelete, { force: true });
  const xfdfString = await annotManager.exportAnnotations({
    widgets: true,
    fields: true,
  });
  return xfdfString;
  // const data = await doc.getFileData({ xfdfString });
  // const arr = new Uint8Array(data);
  // const blob = new Blob([arr], { type: 'application/pdf' });
};
