/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [8],
    {
      355: function (ha, da, h) {
        h.r(da);
        var ca = h(3);
        ha = h(35);
        var aa = h(135),
          fa = h(303),
          ea = h(187),
          z = window;
        h = (function () {
          function h(e, f) {
            this.qP = function (e) {
              e = e.split('.');
              return e[e.length - 1].match(/(jpg|jpeg|png|gif)$/i);
            };
            f = f || {};
            this.url = e;
            this.filename = f.filename || e;
            this.Af = f.customHeaders;
            this.wba = !!f.useDownloader;
            this.withCredentials = !!f.withCredentials;
          }
          h.prototype.JA = function (e) {
            this.Af = e;
          };
          h.prototype.getFileData = function (e) {
            var f = this,
              x = this,
              r = new XMLHttpRequest(),
              n = 0 === this.url.indexOf('blob:') ? 'blob' : 'arraybuffer';
            r.open('GET', this.url, !0);
            r.withCredentials = this.withCredentials;
            r.responseType = n;
            this.Af &&
              Object.keys(this.Af).forEach(function (e) {
                r.setRequestHeader(e, f.Af[e]);
              });
            var w = /^https?:/i.test(this.url);
            r.addEventListener(
              'load',
              function (f) {
                return Object(ca.b)(this, void 0, void 0, function () {
                  var n, r, y, z, ba, da;
                  return Object(ca.d)(this, function (ca) {
                    switch (ca.label) {
                      case 0:
                        if (200 !== this.status && (w || 0 !== this.status))
                          return [3, 10];
                        x.trigger(h.Events.DOCUMENT_LOADING_PROGRESS, [
                          f.loaded,
                          f.loaded,
                        ]);
                        if ('blob' !== this.responseType) return [3, 4];
                        n = this.response;
                        return x.qP(x.filename) ? [4, Object(ea.b)(n)] : [3, 2];
                      case 1:
                        return (
                          (r = ca.la()),
                          (x.fileSize = r.byteLength),
                          e(new Uint8Array(r)),
                          [3, 3]
                        );
                      case 2:
                        (y = new FileReader()),
                          (y.onload = function (f) {
                            f = new Uint8Array(f.target.result);
                            x.fileSize = f.length;
                            e(f);
                          }),
                          y.readAsArrayBuffer(n),
                          (ca.label = 3);
                      case 3:
                        return [3, 9];
                      case 4:
                        ca.zm.push([4, 8, , 9]);
                        z = new Uint8Array(this.response);
                        if (!x.qP(x.filename)) return [3, 6];
                        n = new Blob([z.buffer]);
                        return [4, Object(ea.b)(n)];
                      case 5:
                        return (
                          (r = ca.la()),
                          (x.fileSize = r.byteLength),
                          e(new Uint8Array(r)),
                          [3, 7]
                        );
                      case 6:
                        (x.fileSize = z.length), e(z), (ca.label = 7);
                      case 7:
                        return [3, 9];
                      case 8:
                        return (
                          ca.la(),
                          x.trigger(h.Events.ERROR, [
                            'pdfLoad',
                            'Out of memory',
                          ]),
                          [3, 9]
                        );
                      case 9:
                        return [3, 11];
                      case 10:
                        (ba = f.currentTarget),
                          (da = Object(aa.a)(ba)),
                          x.trigger(h.Events.ERROR, [
                            'pdfLoad',
                            this.status + ' ' + ba.statusText,
                            da,
                          ]),
                          (ca.label = 11);
                      case 11:
                        return (x.Tv = null), [2];
                    }
                  });
                });
              },
              !1
            );
            r.onprogress = function (e) {
              x.trigger(h.Events.DOCUMENT_LOADING_PROGRESS, [
                e.loaded,
                0 < e.total ? e.total : 0,
              ]);
            };
            r.addEventListener(
              'error',
              function () {
                x.trigger(h.Events.ERROR, ['pdfLoad', 'Network failure']);
                x.Tv = null;
              },
              !1
            );
            r.send();
            this.Tv = r;
          };
          h.prototype.getFile = function () {
            var e = this;
            return new Promise(function (f) {
              z.utils.isJSWorker && f(e.url);
              if (e.wba) {
                var h = Object(ca.a)(
                  { url: e.url },
                  e.Af ? { customHeaders: e.Af } : {}
                );
                f(h);
              }
              f(null);
            });
          };
          h.prototype.abort = function () {
            this.Tv && (this.Tv.abort(), (this.Tv = null));
          };
          h.Events = {
            DOCUMENT_LOADING_PROGRESS: 'documentLoadingProgress',
            ERROR: 'error',
          };
          return h;
        })();
        Object(ha.b)(h);
        Object(fa.a)(h);
        Object(fa.b)(h);
        da['default'] = h;
      },
    },
  ]);
}.call(this || window));
