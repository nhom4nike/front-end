/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [3],
    {
      352: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(201);
        ha = h(349);
        h = h(303);
        var fa = window,
          ea = (function (h) {
            function x(e, f) {
              var y = h.call(this, e, f) || this;
              y.url = e;
              y.range = f;
              y.request = new XMLHttpRequest();
              y.request.open('GET', y.url, !0);
              fa.Uint8Array && (y.request.responseType = 'arraybuffer');
              y.request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
              y.status = aa.a.NOT_STARTED;
              return y;
            }
            Object(ca.c)(x, h);
            return x;
          })(ha.ByteRangeRequest);
        ha = (function (h) {
          function x(e, f, y, r) {
            e = h.call(this, e, f, y, r) || this;
            e.Zu = ea;
            return e;
          }
          Object(ca.c)(x, h);
          x.prototype.Ws = function (e, f) {
            return e + '/bytes=' + f.start + ',' + (f.stop ? f.stop : '');
          };
          return x;
        })(ha['default']);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
