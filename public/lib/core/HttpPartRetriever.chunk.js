/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [0],
    {
      349: function (ha, da, h) {
        h.r(da);
        h.d(da, 'ByteRangeRequest', function () {
          return la;
        });
        var ca = h(3),
          aa = h(0);
        h.n(aa);
        var fa = h(1),
          ea = h(119);
        ha = h(75);
        var z = h(202),
          x = h(54),
          e = h(50),
          f = h(201),
          y = h(135);
        h = h(303);
        var r = [],
          n = [],
          w = window,
          ba = (function () {
            return function () {
              this.Jk = 1;
            };
          })(),
          ia;
        (function (e) {
          e[(e.UNSENT = 0)] = 'UNSENT';
          e[(e.DONE = 4)] = 'DONE';
        })(ia || (ia = {}));
        var la = (function () {
            function e(e, h, n, r) {
              var y = this;
              this.url = e;
              this.range = h;
              this.Af = n;
              this.withCredentials = r;
              this.SV = ia;
              this.request = new XMLHttpRequest();
              this.request.open('GET', this.url, !0);
              w.Uint8Array && (this.request.responseType = 'arraybuffer');
              r && (this.request.withCredentials = r);
              oa.DISABLE_RANGE_HEADER ||
                (Object(aa.isUndefined)(h.stop)
                  ? this.request.setRequestHeader('Range', 'bytes=' + h.start)
                  : this.request.setRequestHeader(
                      'Range',
                      ['bytes=', h.start, '-', h.stop - 1].join('')
                    ));
              this.request.setRequestHeader(
                'X-Requested-With',
                'XMLHttpRequest'
              );
              n &&
                Object.keys(n).forEach(function (e) {
                  y.request.setRequestHeader(e, n[e]);
                });
              this.request.overrideMimeType
                ? this.request.overrideMimeType(
                    'text/plain; charset=x-user-defined'
                  )
                : this.request.setRequestHeader(
                    'Accept-Charset',
                    'x-user-defined'
                  );
              this.status = f.a.NOT_STARTED;
            }
            e.prototype.start = function (e) {
              var h = this,
                n = this.request;
              n.onreadystatechange = function () {
                if (h.aborted)
                  return (h.status = f.a.ABORTED), e({ code: f.a.ABORTED });
                if (this.readyState === h.SV.DONE) {
                  h.Vy();
                  var r = 0 === window.document.URL.indexOf('file:///');
                  200 === n.status || 206 === n.status || (r && 0 === n.status)
                    ? ((r = w.kO(this)), h.zr(r, e))
                    : ((h.status = f.a.ERROR),
                      e({ code: h.status, status: h.status }));
                }
              };
              this.request.send(null);
              this.status = f.a.STARTED;
            };
            e.prototype.zr = function (e, h) {
              this.status = f.a.SUCCESS;
              if (h) return h(!1, e);
            };
            e.prototype.abort = function () {
              this.Vy();
              this.aborted = !0;
              this.request.abort();
            };
            e.prototype.Vy = function () {
              var f = Object(y.b)(this.url, this.range, n);
              -1 !== f && n.splice(f, 1);
              if (0 < r.length) {
                f = r.shift();
                var h = new e(f.url, f.range, this.Af, this.withCredentials);
                f.request = h;
                n.push(f);
                h.start(Object(y.c)(f));
              }
            };
            e.prototype.extend = function (e) {
              var f = Object.assign({}, this, e.prototype);
              f.constructor = e;
              return f;
            };
            return e;
          })(),
          oa = (function (f) {
            function h(e, h, n, r, w) {
              n = f.call(this, e, n, r) || this;
              n.Lk = {};
              n.Cx = h;
              n.url = e;
              n.DISABLE_RANGE_HEADER = !1;
              n.Zu = la;
              n.OI = 3;
              n.Af = w || {};
              return n;
            }
            Object(ca.c)(h, f);
            h.prototype.Ws = function (f, h, n) {
              var r = -1 === f.indexOf('?') ? '?' : '&';
              switch (n) {
                case !1:
                case e.a.NEVER_CACHE:
                  f = f + r + '_=' + Object(aa.uniqueId)();
                  break;
                case !0:
                case e.a.CACHE:
                  f =
                    f +
                    r +
                    '_=' +
                    h.start +
                    ',' +
                    (Object(aa.isUndefined)(h.stop) ? '' : h.stop);
              }
              return f;
            };
            h.prototype.zM = function (e, f, h, n) {
              void 0 === h && (h = {});
              return new this.Zu(e, f, h, n);
            };
            h.prototype.I0 = function (e, f, h, w, y) {
              for (var x = 0; x < r.length; x++)
                if (
                  Object(aa.isEqual)(r[x].range, f) &&
                  Object(aa.isEqual)(r[x].url, e)
                )
                  return r[x].ag.push(w), r[x].Qz++, null;
              for (x = 0; x < n.length; x++)
                if (
                  Object(aa.isEqual)(n[x].range, f) &&
                  Object(aa.isEqual)(n[x].url, e)
                )
                  return n[x].ag.push(w), n[x].Qz++, null;
              h = { url: e, range: f, Cx: h, ag: [w], Qz: 1 };
              if (0 === r.length && n.length < this.OI)
                return (
                  n.push(h),
                  (h.request = this.zM(e, f, y, this.withCredentials)),
                  h
                );
              r.push(h);
              return null;
            };
            h.prototype.am = function (e, f, h) {
              var w = this.Ws(e, f, this.Cx);
              (e = this.I0(w, f, this.Cx, h, this.Af)) &&
                e.request.start(Object(y.c)(e));
              return function () {
                var e = Object(y.b)(w, f, n);
                if (-1 !== e) {
                  var h = --n[e].Qz;
                  0 === h && n[e].request && n[e].request.abort();
                } else
                  (e = Object(y.b)(w, f, r)),
                    -1 !== e && ((h = --r[e].Qz), 0 === h && r.splice(e, 1));
              };
            };
            h.prototype.PN = function () {
              return { start: -ea.a };
            };
            h.prototype.F3 = function () {
              var e = -(ea.a + ea.e);
              return { start: e - ea.d, end: e };
            };
            h.prototype.Nq = function (e) {
              var f = this;
              this.Hx = !0;
              var h = ea.a;
              this.am(this.url, this.PN(), function (n, r, w) {
                function y() {
                  var h = f.Hd.LN();
                  f.am(f.url, h, function (n, r) {
                    if (n)
                      return (
                        Object(fa.h)('Error loading central directory: ' + n),
                        e(n)
                      );
                    r = Object(x.a)(r);
                    if (r.length !== h.stop - h.start)
                      return e(
                        'Invalid XOD file: Zip central directory data is wrong size! Should be ' +
                          (h.stop - h.start) +
                          ' but is ' +
                          r.length
                      );
                    f.Hd.eR(r);
                    f.mD = !0;
                    f.Hx = !1;
                    return e(!1);
                  });
                }
                if (n)
                  return (
                    Object(fa.h)('Error loading end header: ' + n), e(n, r, w)
                  );
                r = Object(x.a)(r);
                if (r.length !== h)
                  return e(
                    'Invalid XOD file: Zip end header data is wrong size!'
                  );
                try {
                  f.Hd = new z.a(r);
                } catch (ua) {
                  return e(ua);
                }
                f.Hd.b5
                  ? f.am(f.url, f.F3(), function (h, n) {
                      if (h)
                        return (
                          Object(fa.h)('Error loading zip64 header: ' + h), e(h)
                        );
                      n = Object(x.a)(n);
                      f.Hd.s5(n);
                      y();
                    })
                  : y();
              });
            };
            h.prototype.hO = function (e) {
              e(Object.keys(this.Hd.Kl));
            };
            h.prototype.NG = function (e, f) {
              var h = this;
              if (this.Hd.rM(e)) {
                var n = this.Hd.Oy(e);
                if (n in this.Lk) {
                  var r = this.Wg[e];
                  r.Lp = this.Lk[n];
                  r.Lp.Jk++;
                  r.cancel = r.Lp.cancel;
                } else {
                  var w = this.Hd.a2(e),
                    y = this.am(this.url, w, function (r, y) {
                      r
                        ? (Object(fa.h)('Error loading part "' + e + '": ' + r),
                          h.am(h.url, w, function (r, y) {
                            if (r) return f(r, e);
                            h.iR(y, w, n, e, f);
                          }))
                        : h.iR(y, w, n, e, f);
                    }),
                    x = this.Wg[e];
                  x &&
                    ((x.nT = !0),
                    (x.cancel = function () {
                      x.Lp.Jk--;
                      0 === x.Lp.Jk && (y(), delete h.Lk[n]);
                    }),
                    (this.Lk[n] = new ba(n)),
                    (x.Lp = this.Lk[n]),
                    (x.Lp.cancel = x.cancel));
                }
              } else
                delete this.Wg[e], f(Error('File not found: "' + e + '"'), e);
            };
            h.prototype.iR = function (e, f, h, n, r) {
              if (e.length !== f.stop - f.start)
                r(Error('Part data is wrong size!'), n);
              else {
                do {
                  if (!this.Lk[h]) return;
                  n = this.Lk[h].Jk;
                  for (var w = f.Eo.length, y = 0; y < w; ++y) {
                    var x = f.Eo[y];
                    r(
                      !1,
                      x.zo,
                      e['string' === typeof e ? 'substring' : 'subarray'](
                        x.start,
                        x.stop
                      ),
                      this.Hd.iP(x.zo)
                    );
                    x.zo in this.Wg && delete this.Wg[x.zo];
                  }
                } while (n !== this.Lk[h].Jk);
                delete this.Lk[h];
              }
            };
            h.DISABLE_RANGE_HEADER = !1;
            h.OI = 3;
            return h;
          })(ha.a);
        (function (e) {
          function f(f, h, n) {
            var r = e.call(this) || this,
              w;
            for (w in f) r[w] = f[w];
            r.Iea = f;
            r.startOffset = h;
            r.endOffset = n;
            r.zM = function (e, h, n, w) {
              Object(aa.isUndefined)(h.stop)
                ? ((h.start += r.endOffset), (h.stop = r.endOffset))
                : ((h.start += r.startOffset), (h.stop += r.startOffset));
              e = r.Ws(r.url, h, r.Cx);
              return new f.Zu(e, h, n, w);
            };
            return r;
          }
          Object(ca.c)(f, e);
          return f;
        })(oa);
        Object(h.a)(oa);
        Object(h.b)(oa);
        da['default'] = oa;
      },
    },
  ]);
}.call(this || window));
