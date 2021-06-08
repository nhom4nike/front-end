const handleXFDF = (() => {
  const converterStringtoXML = (String) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(String, 'text/xml');
    return xmlDoc;
  };
  const converterXMLtoString = (xml) =>
    new XMLSerializer().serializeToString(xml);
  return {
    convertXMLtoString: (xml) => new XMLSerializer().serializeToString(xml),

    convertStringtoXML: (String) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(String, 'text/xml');
      return xmlDoc;
    },

    openFieldFlagByEmail: (email, xfdfString, flags) => {
      const xmlDoc = converterStringtoXML(xfdfString);
      for (
        let index = 0;
        index < xmlDoc.getElementsByTagName('ffield').length;
        index += 1
      ) {
        const field = xmlDoc.getElementsByTagName('ffield')[index];
        let name = field.getAttribute('name');
        const indexLine = name.indexOf('#');
        name = name.substr(0, indexLine);
        if (name === email.replace('.', '_')) {
          field.setAttribute('flags', flags);
        }
      }
      return converterXMLtoString(xmlDoc);
    },

    removeWidgetSigned: (email, xfdfString) => {
      let flag = false;
      const xmlDoc = converterStringtoXML(xfdfString);
      const inks = xmlDoc.getElementsByTagName('ink');
      const widgets = xmlDoc.getElementsByTagName('widget');
      for (let index = 0; index < inks.length; index += 1) {
        const ink = inks[index];
        const name = ink.getAttribute('title');
        if (name === email.replace('.', '_')) {
          flag = true;
          // signed
        }
      }

      if (flag) {
        for (let index = 0; index < widgets.length; index += 1) {
          const widget = widgets[index];
          const name = widget.getAttribute('field');
          const indexLine = name.indexOf('#');
          const author = name.substr(0, indexLine);

          const typeCheck = name.startsWith('Sig', indexLine + 1);

          if (author === email.replace('.', '_') && typeCheck) {
            widget.parentNode.removeChild(widget);
            index -= 1;
          }
        }
      }
      return converterXMLtoString(xmlDoc);
    },

    removeWidgetDuplicate: (xfdfString) => {
      const xmlDoc = converterStringtoXML(xfdfString);
      const widgets = xmlDoc.getElementsByTagName('widget');
      for (let index = 0; index < widgets.length; index += 1) {
        const widget = widgets[index];
        const duplicate = widget.getAttribute('index');
        if (duplicate !== null) {
          widget.parentNode.removeChild(widget);
          index -= 1;
        }
      }

      return converterXMLtoString(xmlDoc);
    },

    mergexfdf: (xfdfStringBase, xfdfStringMerge, email) => {
      const xmlBase = converterStringtoXML(xfdfStringBase);
      const xmlMerge = converterStringtoXML(xfdfStringMerge);
      let currentIndexBase = 0;

      // --- append field ---
      const fields = xmlMerge.getElementsByTagName('field');
      for (let index = 0; index < fields.length; index += 1) {
        const field = fields[index];
        const name = field.getAttribute('name').substr();
        const indexLine = name.indexOf('#');

        const author = name.substr(0, indexLine);
        if (author === email.replace('.', '_')) {
          const fieldBase = xmlBase.getElementsByTagName('field')[
            currentIndexBase
          ];
          xmlBase
            .getElementsByTagName('fields')[0]
            .replaceChild(field, fieldBase);
          index -= 1;
        }

        currentIndexBase += 1;
      }
      currentIndexBase = 0;

      // --- append ink ---
      const inks = xmlMerge.getElementsByTagName('ink');
      for (let index = 0; index < inks.length; index += 1) {
        const ink = inks[index];
        const author = ink.getAttribute('title');

        if (author === email.replace('.', '_')) {
          const inkBase = xmlBase.getElementsByTagName('ink')[currentIndexBase];
          if (typeof inkBase === 'undefined') {
            xmlBase.getElementsByTagName('annots')[0].appendChild(ink);
          } else {
            xmlBase
              .getElementsByTagName('annots')[0]
              .replaceChild(ink, inkBase);
          }
          index -= 1;
        }

        currentIndexBase += 1;
      }

      return converterXMLtoString(xmlBase);
    },
  };
})();

export default handleXFDF;
