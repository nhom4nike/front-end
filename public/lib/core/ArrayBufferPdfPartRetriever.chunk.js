/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [4],
    {
      353: function (ha, da, h) {
        h.r(da);
        ha = h(35);
        h = h(303);
        var ca = (function () {
          function h(h) {
            this.buffer = h;
            this.fileSize = null === h || void 0 === h ? void 0 : h.byteLength;
          }
          h.prototype.getFileData = function (h) {
            h(new Uint8Array(this.buffer));
          };
          h.prototype.getFile = function () {
            return Promise.resolve(null);
          };
          return h;
        })();
        Object(ha.b)(ca);
        Object(h.a)(ca);
        Object(h.b)(ca);
        da['default'] = ca;
      },
    },
  ]);
}.call(this || window));
