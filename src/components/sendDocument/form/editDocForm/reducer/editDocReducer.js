export const editDocAction = {
  INIT: 0,
  EDIT_DROPPOINT: 1,
  DRAG_FIELD: 2,
  ADD_FIELD: 3,
  LOAD_DOC: 4,
  REMOVE_DOC: 5,
  RELOAD_DOC: 6,
  MAILSELECTED_CHANGE: 7,
};
export const editDocReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case editDocAction.INIT: {
      return {
        ...state,
        authors: [...state.authors, ...payload.partners],
      };
    }
    case editDocAction.EDIT_DROPPOINT: {
      const scrollView = payload.docViewer.getScrollViewElement();
      const posScrollLeft = scrollView.scrollLeft || 0;
      const posScrollTop = scrollView.scrollTop || 0;

      return {
        ...state,
        dropPoint: {
          x: payload.e.pageX + posScrollLeft,
          y: payload.e.pageY + posScrollTop,
        },
      };
    }
    case editDocAction.DRAG_FIELD: {
      payload.e.target.style.opacity = 0.3;

      const divDrag = document.createElement('div');
      divDrag.className = 'form-drag';
      divDrag.id = 'form-drag';
      const title = document.createElement('span');
      const icon = document.createElement('i');
      title.innerHTML = payload.text;
      icon.className = 'fa fa-pencil fa-lg';
      divDrag.appendChild(title);
      divDrag.appendChild(icon);
      document.body.appendChild(divDrag);
      payload.e.dataTransfer.setDragImage(divDrag, 80, 28);
      return state;
    }
    case editDocAction.ADD_FIELD: {
      (async () => {
        const { docViewer, Annotations } = payload.instanced;
        const annotManager = docViewer.getAnnotationManager();
        const displayMode = docViewer.getDisplayModeManager().getDisplayMode();
        const page = displayMode.getSelectedPages(
          state.dropPoint,
          state.dropPoint
        );

        if (page.first === null) {
          return state;
        }

        const pageIndex = page.first;
        const pagePoint = displayMode.windowToPage(state.dropPoint, pageIndex);

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
          email: state.authors[state.mailSelected],
          author: state.authors[state.mailSelected].replace('.', '_'),
          type: payload.type,
        };
        newAnnot.setContents(payload.content);
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

        payload.updateListFieldDocs(state.currentDocShow);

        return {};
      })();
      return state;
    }
    case editDocAction.LOAD_DOC: {
      (async () => {
        localStorage.setItem('currentDoc', state.currentDocShow);
        if (payload.instanced && payload.sendDocument.pdfDocList.length > -1) {
          const { docViewer, Annotations } = payload.instanced;
          const annotManager = docViewer.getAnnotationManager();
          await annotManager.deleteAnnotations(
            annotManager.getAnnotationsList(),
            { force: true }
          );
          await docViewer.loadDocument(
            payload.sendDocument.pdfDocList.length > 0
              ? payload.sendDocument.pdfDocList[payload.current].data
              : null
          );
          setTimeout(() => {
            if (
              typeof payload.fieldDocs[payload.current] !== 'undefined' &&
              payload.fieldDocs.length > 0
            ) {
              payload.fieldDocs[payload.current].forEach((annot) => {
                if (!state.authors.includes(annot.customs.email)) return;
                const newAnnot = new Annotations.FreeTextAnnotation();
                newAnnot.PageNumber = annot.PageNumber;
                newAnnot.Rotation = annot.Rotation;

                newAnnot.setWidth(annot.getWidth());
                newAnnot.setHeight(annot.getHeight());

                newAnnot.X = annot.X;
                newAnnot.Y = annot.Y;

                newAnnot.setPadding(new Annotations.Rect(0, 0, 0, 0));
                newAnnot.customs = annot.customs;
                newAnnot.setContents(annot.getContents());
                newAnnot.FontSize = `${20.0}px`;
                newAnnot.FillColor = new Annotations.Color(23, 162, 184, 1);
                newAnnot.TextColor = new Annotations.Color(255, 255, 255, 1);
                newAnnot.StrokeThickness = 1;
                newAnnot.StrokeColor = new Annotations.Color(0, 165, 228);
                newAnnot.TextAlign = 'center';

                annotManager.deselectAllAnnotations();
                annotManager.addAnnotation(newAnnot, true);
                annotManager.redrawAnnotation(newAnnot);
              });
            }
          }, 500);
        }
      })();
      return state;
    }
    case editDocAction.RELOAD_DOC: {
      if (state.currentDocShow !== payload) {
        return {
          ...state,
          currentDocShow: payload,
        };
      }
      return state;
    }
    case editDocAction.MAILSELECTED_CHANGE: {
      return {
        ...state,
        mailSelected: payload,
      };
    }
    case editDocAction.REMOVE_DOC: {
      let currentList = [...payload.sendDocument.pdfDocList];
      if (payload.sendDocument.pdfDocList.length > 1) {
        currentList.splice(payload.indexFileDelete, 1);
      } else {
        currentList = [];
      }
      const current =
        +state.currentDocShow > +currentList.length - 1
          ? state.currentDocShow - 1
          : state.currentDocShow;
      return {
        ...state,
        currentDocShow: current,
      };
    }
    default:
      return state;
  }
};
