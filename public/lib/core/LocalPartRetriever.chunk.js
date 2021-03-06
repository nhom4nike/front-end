/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [10],
    {
      350: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(1),
          fa = h(119);
        ha = h(75);
        var ea = h(202);
        h = h(303);
        var z = window;
        ha = (function (h) {
          function e(e, x, r) {
            x = h.call(this, e, x, r) || this;
            if (e.name && 'xod' !== e.name.toLowerCase().split('.').pop())
              throw Error('Not an XOD file');
            if (!z.FileReader || !z.File || !z.Blob)
              throw Error('File API is not supported in this browser');
            x.file = e;
            x.Lx = [];
            x.AD = 0;
            return x;
          }
          Object(ca.c)(e, h);
          e.prototype.ZF = function (e, h, r) {
            var f = this,
              w = new FileReader();
            w.onloadend = function (e) {
              if (0 < f.Lx.length) {
                var n = f.Lx.shift();
                n.U7.readAsBinaryString(n.file);
              } else f.AD--;
              if (w.error) {
                e = w.error;
                if (e.code === e.ABORT_ERR) {
                  Object(aa.h)(
                    'Request for chunk ' +
                      h.start +
                      '-' +
                      h.stop +
                      ' was aborted'
                  );
                  return;
                }
                return r(e);
              }
              if ((e = w.content || e.target.result)) return r(!1, e);
              Object(aa.h)('No data was returned from FileReader.');
            };
            h &&
              (e = (e.slice || e.webkitSlice || e.mozSlice || e.Pda).call(
                e,
                h.start,
                h.stop
              ));
            0 === f.Lx.length && 50 > f.AD
              ? (w.readAsBinaryString(e), f.AD++)
              : f.Lx.push({ U7: w, file: e });
            return function () {
              w.abort();
            };
          };
          e.prototype.Nq = function (e) {
            var f = this;
            f.Hx = !0;
            var h = fa.a;
            f.ZF(f.file, { start: -h, stop: f.file.size }, function (n, r) {
              if (n)
                return Object(aa.h)('Error loading end header: %s ' + n), e(n);
              if (r.length !== h)
                throw Error('Zip end header data is wrong size!');
              f.Hd = new ea.a(r);
              var w = f.Hd.LN();
              f.ZF(f.file, w, function (h, n) {
                if (h)
                  return (
                    Object(aa.h)('Error loading central directory: %s ' + h),
                    e(h)
                  );
                if (n.length !== w.stop - w.start)
                  throw Error('Zip central directory data is wrong size!');
                f.Hd.eR(n);
                f.mD = !0;
                f.Hx = !1;
                return e(!1);
              });
            });
          };
          e.prototype.NG = function (e, h) {
            var f = this,
              n = f.Wg[e];
            if (f.Hd.rM(e)) {
              var w = f.Hd.Gt(e),
                x = f.ZF(f.file, w, function (n, r) {
                  delete f.Wg[e];
                  if (n)
                    return (
                      Object(aa.h)(
                        'Error loading part "%s": %s, ' + e + ', ' + n
                      ),
                      h(n)
                    );
                  if (r.length !== w.stop - w.start)
                    throw Error('Part data is wrong size!');
                  h(!1, e, r, f.Hd.iP(e));
                });
              n.nT = !0;
              n.cancel = x;
            } else h(Error('File not found: "' + e + '"'), e);
          };
          return e;
        })(ha.a);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
