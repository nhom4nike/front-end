/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [9],
    {
      356: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(201);
        ha = h(349);
        var fa = h(26);
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
              ea[this.range.start] = {
                zr: function (h) {
                  var n = atob(h),
                    r,
                    y = n.length;
                  h = new Uint8Array(y);
                  for (r = 0; r < y; ++r) h[r] = n.charCodeAt(r);
                  n = h.length;
                  r = '';
                  var x = 0;
                  if (Object(fa.p)())
                    for (; x < n; )
                      (y = h.subarray(x, x + 1024)),
                        (x += 1024),
                        (r += String.fromCharCode.apply(null, y));
                  else
                    for (y = Array(1024); x < n; ) {
                      for (
                        var z = 0, aa = Math.min(x + 1024, n);
                        x < aa;
                        z++, x++
                      )
                        y[z] = h[x];
                      r += String.fromCharCode.apply(
                        null,
                        1024 > z ? y.slice(0, z) : y
                      );
                    }
                  f.zr(r, e);
                },
                fN: function () {
                  f.status = aa.a.ERROR;
                  e({ code: f.status });
                },
              };
              var h = document.createElement('IFRAME');
              h.setAttribute('src', this.url);
              document.documentElement.appendChild(h);
              h.parentNode.removeChild(h);
              h = null;
              this.status = aa.a.STARTED;
              f.Vy();
            };
            return e;
          })(ha.ByteRangeRequest);
        ha = (function (h) {
          function e(e, y, r, n) {
            e = h.call(this, e, y, r, n) || this;
            e.Zu = z;
            return e;
          }
          Object(ca.c)(e, h);
          e.prototype.Ws = function (e, h) {
            return e + '#' + h.start + '&' + (h.stop ? h.stop : '');
          };
          e.Nea = function (e, h) {
            var f = ea[h];
            delete ea[h];
            f.zr(e);
          };
          e.Mea = function (e, h) {
            e = ea[h];
            delete ea[h];
            e.fN();
          };
          return e;
        })(ha['default']);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
