/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [11],
    {
      351: function (ha, da, h) {
        h.r(da);
        var ca = h(3);
        ha = h(35);
        var aa = h(303),
          fa = h(187),
          ea = window;
        h = (function () {
          function h(h) {
            var e = this;
            this.G4 = function (e) {
              return (
                e &&
                ('image' === e.type.split('/')[0].toLowerCase() ||
                  (e.name && !!e.name.match(/.(jpg|jpeg|png|gif)$/i)))
              );
            };
            this.file = h;
            this.Q4 = new Promise(function (f) {
              return Object(ca.b)(e, void 0, void 0, function () {
                var e;
                return Object(ca.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.G4(this.file) ? [4, Object(fa.b)(h)] : [3, 2];
                    case 1:
                      (e = r.la()),
                        (this.file = new File(
                          [e],
                          null === h || void 0 === h ? void 0 : h.name,
                          { type: h.type }
                        )),
                        (r.label = 2);
                    case 2:
                      return f(!0), [2];
                  }
                });
              });
            });
          }
          h.prototype.getFileData = function (x) {
            var e = this,
              f = new FileReader();
            f.onload = function (f) {
              e.trigger(h.Events.DOCUMENT_LOADING_PROGRESS, [
                f.loaded,
                f.loaded,
              ]);
              x(new Uint8Array(f.target.result));
            };
            f.onprogress = function (f) {
              f.lengthComputable &&
                e.trigger(h.Events.DOCUMENT_LOADING_PROGRESS, [
                  f.loaded,
                  0 < f.total ? f.total : 0,
                ]);
            };
            f.readAsArrayBuffer(this.file);
          };
          h.prototype.getFile = function () {
            return Object(ca.b)(this, void 0, Promise, function () {
              return Object(ca.d)(this, function (h) {
                switch (h.label) {
                  case 0:
                    return [4, this.Q4];
                  case 1:
                    return (
                      h.la(),
                      ea.utils.isJSWorker ? [2, this.file.path] : [2, this.file]
                    );
                }
              });
            });
          };
          h.Events = { DOCUMENT_LOADING_PROGRESS: 'documentLoadingProgress' };
          return h;
        })();
        Object(ha.b)(h);
        Object(aa.a)(h);
        Object(aa.b)(h);
        da['default'] = h;
      },
    },
  ]);
}.call(this || window));
