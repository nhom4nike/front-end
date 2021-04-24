/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [14],
    {
      357: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(0);
        h.n(aa);
        var fa = h(1),
          ea = h(119);
        ha = h(35);
        var z = h(75),
          x = h(202),
          e = h(50),
          f = h(201);
        h = h(303);
        var y = window,
          r = (function () {
            function h(h, n, r) {
              var w = -1 === h.indexOf('?') ? '?' : '&';
              switch (n) {
                case e.a.NEVER_CACHE:
                  this.url = h + w + '_=' + Object(aa.uniqueId)();
                  break;
                default:
                  this.url = h;
              }
              this.Af = r;
              this.request = new XMLHttpRequest();
              this.request.open('GET', this.url, !0);
              this.request.setRequestHeader(
                'X-Requested-With',
                'XMLHttpRequest'
              );
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
            h.prototype.start = function (e, n) {
              var r = this,
                w = this,
                x = this.request,
                y;
              w.qu = 0;
              e &&
                Object.keys(e).forEach(function (f) {
                  r.request.setRequestHeader(f, e[f]);
                });
              n && (this.request.withCredentials = n);
              this.lA = setInterval(function () {
                var e = 0 === window.document.URL.indexOf('file:///');
                e = 200 === x.status || (e && 0 === x.status);
                if (x.readyState !== f.b.DONE || e) {
                  try {
                    x.responseText;
                  } catch (ma) {
                    return;
                  }
                  w.qu < x.responseText.length &&
                    (y = w.B7()) &&
                    w.trigger(h.Events.DATA, [y]);
                  0 === x.readyState &&
                    (clearInterval(w.lA), w.trigger(h.Events.DONE));
                } else clearInterval(w.lA), w.trigger(h.Events.DONE, ['Error received return status ' + x.status]);
              }, 1e3);
              this.request.send(null);
              this.status = f.a.STARTED;
            };
            h.prototype.B7 = function () {
              var e = this.request,
                f = e.responseText;
              if (0 !== f.length)
                if (this.qu === f.length)
                  clearInterval(this.lA), this.trigger(h.Events.DONE);
                else
                  return (
                    (f = Math.min(this.qu + 3e6, f.length)),
                    (e = y.kO(e, this.qu, !0, f)),
                    (this.qu = f),
                    e
                  );
            };
            h.prototype.abort = function () {
              clearInterval(this.lA);
              var e = this;
              this.request.onreadystatechange = function () {
                Object(fa.h)('StreamingRequest aborted');
                e.status = f.a.ABORTED;
                return e.trigger(h.Events.ABORTED);
              };
              this.request.abort();
            };
            h.prototype.finish = function () {
              var e = this;
              this.request.onreadystatechange = function () {
                e.status = f.a.SUCCESS;
                return e.trigger(h.Events.DONE);
              };
              this.request.abort();
            };
            h.Events = { DONE: 'done', DATA: 'data', ABORTED: 'aborted' };
            return h;
          })();
        Object(ha.b)(r);
        var n;
        (function (e) {
          e[(e.LOCAL_HEADER = 0)] = 'LOCAL_HEADER';
          e[(e.FILE = 1)] = 'FILE';
          e[(e.CENTRAL_DIR = 2)] = 'CENTRAL_DIR';
        })(n || (n = {}));
        var w = (function (e) {
          function f() {
            var f = e.call(this) || this;
            f.buffer = '';
            f.state = n.LOCAL_HEADER;
            f.WH = 4;
            f.vk = null;
            f.Rq = ea.c;
            f.Kl = {};
            return f;
          }
          Object(ca.c)(f, e);
          f.prototype.v7 = function (e) {
            var h;
            for (e = this.buffer + e; e.length >= this.Rq; )
              switch (this.state) {
                case n.LOCAL_HEADER:
                  this.vk = h = this.F7(e.slice(0, this.Rq));
                  if (h.sr !== ea.g)
                    throw Error('Wrong signature in local header: ' + h.sr);
                  e = e.slice(this.Rq);
                  this.state = n.FILE;
                  this.Rq = h.dD + h.oo + h.ut + this.WH;
                  this.trigger(f.Events.HEADER, [h]);
                  break;
                case n.FILE:
                  this.vk.name = e.slice(0, this.vk.oo);
                  this.Kl[this.vk.name] = this.vk;
                  h = this.Rq - this.WH;
                  var r = e.slice(this.vk.oo + this.vk.ut, h);
                  this.trigger(f.Events.FILE, [this.vk.name, r, this.vk.uD]);
                  e = e.slice(h);
                  if (e.slice(0, this.WH) === ea.h)
                    (this.state = n.LOCAL_HEADER), (this.Rq = ea.c);
                  else return (this.state = n.CENTRAL_DIR), !0;
              }
            this.buffer = e;
            return !1;
          };
          f.Events = { HEADER: 'header', FILE: 'file' };
          return f;
        })(x.a);
        Object(ha.b)(w);
        ha = (function (e) {
          function f(f, h, n, x, y) {
            n = e.call(this, f, n, x) || this;
            n.url = f;
            n.stream = new r(f, h);
            n.Hd = new w();
            n.SQ = window.createPromiseCapability();
            n.oR = {};
            n.Af = y;
            return n;
          }
          Object(ca.c)(f, e);
          f.prototype.gv = function (e) {
            var f = this;
            this.request([this.ii, this.sj, this.hi]);
            this.stream.on(r.Events.DATA, function (h) {
              try {
                if (f.Hd.v7(h)) return f.stream.finish();
              } catch (ka) {
                throw (f.stream.abort(), f.ot(ka), e(ka), ka);
              }
            });
            this.stream.on(r.Events.DONE, function (h) {
              f.d7 = !0;
              f.SQ.resolve();
              h && (f.ot(h), e(h));
            });
            this.Hd.on(w.Events.HEADER, Object(aa.bind)(this.nR, this));
            this.Hd.on(w.Events.FILE, Object(aa.bind)(this.V7, this));
            return this.stream.start(this.Af, this.withCredentials);
          };
          f.prototype.hO = function (e) {
            var f = this;
            this.SQ.promise.then(function () {
              e(Object.keys(f.Hd.Kl));
            });
          };
          f.prototype.jm = function () {
            return !0;
          };
          f.prototype.request = function (e) {
            var f = this;
            this.d7 &&
              e.forEach(function (e) {
                f.oR[e] || f.Yaa(e);
              });
          };
          f.prototype.nR = function () {};
          f.prototype.abort = function () {
            this.stream && this.stream.abort();
          };
          f.prototype.Yaa = function (e) {
            this.trigger(z.a.Events.PART_READY, [
              { $a: e, error: 'Requested part not found', rh: !1, zf: !1 },
            ]);
          };
          f.prototype.V7 = function (e, f, h) {
            this.oR[e] = !0;
            this.trigger(z.a.Events.PART_READY, [
              { $a: e, data: f, rh: !1, zf: !1, error: null, Oc: h },
            ]);
          };
          return f;
        })(z.a);
        Object(h.a)(ha);
        Object(h.b)(ha);
        da['default'] = ha;
      },
    },
  ]);
}.call(this || window));
