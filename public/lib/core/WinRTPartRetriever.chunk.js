/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [16],
    {
      358: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(201);
        ha = h(349);
        var fa = h(75);
        h = h(303);
        var ea = {},
          z = (function (h) {
            function e(e, y) {
              var f = h.call(this, e, y) || this;
              f.url = e;
              f.range = y;
              f.status = aa.a.NOT_STARTED;
              return f;
            }
            Object(ca.c)(e, h);
            e.prototype.start = function (e) {
              var f = this;
              'undefined' === typeof ea[this.range.start] &&
                ((ea[this.range.start] = {
                  zr: function (h) {
                    var n = atob(h),
                      r,
                      y = n.length;
                    h = new Uint8Array(y);
                    for (r = 0; r < y; ++r) h[r] = n.charCodeAt(r);
                    n = h.length;
                    r = '';
                    for (var x = 0; x < n; )
                      (y = h.subarray(x, x + 1024)),
                        (x += 1024),
                        (r += String.fromCharCode.apply(null, y));
                    f.zr(r, e);
                  },
                  fN: function () {
                    f.status = aa.a.ERROR;
                    e({ code: f.status });
                  },
                }),
                window.external.Dea(this.url),
                (this.status = aa.a.STARTED));
              f.Vy();
            };
            return e;
          })(ha.ByteRangeRequest);
        ha = (function (h) {
          function e(e, y, r, n) {
            e = h.call(this, e, r, n) || this;
            e.Zu = z;
            return e;
          }
          Object(ca.c)(e, h);
          e.prototype.Ws = function (e, h) {
            return e + '?' + h.start + '&' + (h.stop ? h.stop : '');
          };
          return e;
        })(fa.a);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
