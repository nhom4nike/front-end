/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [15],
    {
      360: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(0);
        h.n(aa);
        ha = h(75);
        h = h(303);
        ha = (function (h) {
          function ea(z, x, e) {
            x = h.call(this, z, x, e) || this;
            x.db = z;
            return x;
          }
          Object(ca.c)(ea, h);
          ea.prototype.request = function (h) {
            var x = this;
            Object(aa.each)(h, function (e) {
              x.db.get(e, function (f, h, r) {
                return f
                  ? x.trigger('partReady', { $a: e, error: f })
                  : x.trigger('partReady', {
                      $a: e,
                      data: h,
                      rh: !1,
                      zf: !1,
                      error: null,
                      Oc: r,
                    });
              });
            });
          };
          ea.prototype.Nq = function (h) {
            h();
          };
          return ea;
        })(ha.a);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
