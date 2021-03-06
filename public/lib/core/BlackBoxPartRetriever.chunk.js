/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [6],
    {
      359: function (ha, da, h) {
        function ca(e, h, n) {
          h.endsWith('/') || (h += '/');
          n = n || {};
          var r = n.disableWebsockets || !1;
          this.eT = n.singleServerMode || !1;
          h.endsWith('blackbox/') || (h += 'blackbox/');
          this.Bm = n.uploadData || null;
          this.Mv = n.uriData || null;
          this.YL = n.cacheKey || null;
          this.df = Object(f.a)(h, null, r);
          this.Lf = h;
          this.LD = e;
          this.kf = null;
          this.Kh = aa();
          this.Gl = aa();
          this.Qx = !1;
          this.Yf = this.Td = this.ne = this.Ve = null;
          this.sf = [];
          this.Cy = [];
          this.cache = {};
          this.timeStamp = 0;
          this.Hf = [];
          this.Qg = [];
          this.iE = null;
          this.ED = !1;
          this.tH = this.id = null;
          this.XF = this.UO = fa;
          this.zA = 0;
          this.gF = !1;
          this.T5 = 1;
          this.Iz = {};
          this.az = null;
          this.qr(!0);
        }
        function aa() {
          var e = {
            promise: null,
            resolve: null,
            reject: null,
            state: 0,
            result: null,
            request: null,
            fo: function () {
              return 1 === (e.state & 1);
            },
            R4: function () {
              return 2 === (e.state & 2);
            },
            Gh: function () {
              return !e.R4() && !e.fo();
            },
            z4: function () {
              return 4 === (e.state & 4);
            },
            vS: function () {
              e.state |= 4;
            },
          };
          e.promise = new Promise(function (f, h) {
            e.resolve = function () {
              if (0 === e.state || 4 === e.state)
                (e.state = 1),
                  (e.result = arguments[0]),
                  f.apply(null, arguments);
            };
            e.reject = function () {
              if (0 === e.state || 4 === e.state)
                (e.state = 2), h.apply(null, arguments);
            };
          });
          return e;
        }
        function fa() {
          return !1;
        }
        function ea(e, f, h) {
          if (!(f in w)) return !0;
          f = w[f];
          for (var n = 0; n < f.length; n++) {
            var r = e;
            var x = f[n];
            var y = h;
            if (x.name in r) {
              var ba = '',
                aa = !1;
              r = r[x.name];
              switch (x.type) {
                case 's':
                  ba = 'String';
                  aa = Object(z.isString)(r);
                  break;
                case 'a':
                  ba = 'Array';
                  aa = Object(z.isArray)(r);
                  break;
                case 'n':
                  ba = 'Number';
                  aa = Object(z.isNumber)(r) && Object(z.isFinite)(r);
                  break;
                case 'o':
                  (ba = 'Object'),
                    (aa = Object(z.isObject)(r) && !Object(z.isArray)(r));
              }
              aa ||
                y.reject(
                  'Expected response field "' + x.name + '" to have type ' + ba
                );
              x = aa;
            } else
              y.reject('Response missing field "' + x.name + '"'), (x = !1);
            if (!x) return !1;
          }
          return !0;
        }
        h.r(da);
        var z = h(0);
        h.n(z);
        var x = h(1);
        ha = h(35);
        var e = h(26),
          f = h(376),
          y = h(75),
          r = h(303),
          n = h(123),
          w = {
            pages: [{ name: 'pages', type: 'a' }],
            pdf: [{ name: 'url', type: 's' }],
            docmod: [
              { name: 'url', type: 's' },
              { name: 'rID', type: 's' },
            ],
            health: [],
            tiles: [
              { name: 'z', type: 'n' },
              { name: 'rID', type: 'n' },
              { name: 'tiles', type: 'a' },
              { name: 'size', type: 'n' },
            ],
            annots: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
            ],
            image: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
              { name: 'p', type: 'n' },
            ],
            text: [
              { name: 'url', type: 's' },
              { name: 'name', type: 's' },
              { name: 'p', type: 'n' },
            ],
          };
        ca.prototype = Object(z.extend)(ca.prototype, {
          g_: function () {
            var e = this;
            return new Promise(function (f, h) {
              var n = new XMLHttpRequest();
              n.open('GET', e.Lf + 'ck');
              n.withCredentials = e.Tn();
              n.onreadystatechange = function () {
                n.readyState === XMLHttpRequest.DONE &&
                  (200 === n.status ? f() : h());
              };
              n.send();
            });
          },
          k$: function (e, f) {
            this.UO = e || fa;
            this.XF = f || fa;
          },
          nM: function () {
            var e = this;
            this.Gl = aa();
            this.Kh = aa();
            return this.df.XD().then(function () {
              e.Qx = !1;
              e.id = null;
              e.ED = !1;
              return e.g_();
            });
          },
          eH: function () {
            this.df.clientId = Object(e.j)(8);
            this.UO();
            this.nz();
            this.Ve &&
              (this.Ve.Gh()
                ? this.lf(this.Ve.request)
                : this.Ve.fo() &&
                  this.XF(this.Ve.result.url, 'pdf') &&
                  ((this.Ve = null), this.TR()));
            this.Yf && this.Yf.Gh() && this.lf(this.Yf.request);
            this.ne && this.ne.Gh()
              ? this.lf(this.ne.request)
              : this.Td && this.Td.Gh() && this.HO(this.Td.request);
            var f;
            for (f = 0; f < this.Hf.length; f++)
              this.Hf[f] &&
                this.Hf[f] &&
                (this.Hf[f].Gh()
                  ? this.lf(this.Hf[f].request)
                  : this.Hf[f].fo() &&
                    this.XF(this.Hf[f].result.url, 'image') &&
                    ((this.Hf[f] = null), this.wA(f)));
            for (f = 0; f < this.Qg.length; f++)
              this.Qg[f] &&
                this.Qg[f] &&
                this.Qg[f].Gh() &&
                !this.Qg[f].z4() &&
                this.lf(this.Qg[f].request);
            for (f = 0; f < this.sf.length; f++)
              this.sf[f] && this.sf[f].Gh() && this.lf(this.sf[f].request);
          },
          nz: function (e) {
            var f = this;
            this.Qx ||
              ((this.timeStamp = Date.now()),
              this.df
                .ZH(
                  function (e) {
                    f.g6(e);
                  },
                  function () {
                    return null;
                  },
                  function () {
                    return null;
                  },
                  this.df.clientId
                )
                .then(
                  function () {
                    clearInterval(f.qA);
                    f.qA = null;
                  },
                  function (h) {
                    f.Qx = !1;
                    if (!f.qA) {
                      var r = 0;
                      f.ED = !0;
                      f.tH = 0;
                      f.qA = setInterval(function () {
                        2 > r++
                          ? f.eH()
                          : (clearInterval(f.qA),
                            e && e.reject(n.a),
                            Object(x.e)('Blackbox connection failed:' + h));
                      }, 5e3);
                    }
                  }
                ),
              (this.Qx = !0));
          },
          tba: function () {
            var f = this,
              h = createPromiseCapability();
            if (this.Bm) {
              var n = new FormData();
              n.append('file', this.Bm.fileHandle, this.Bm.fileHandle.name);
              var r = this.Bm.loadCallback;
              var w = 'upload';
              var x = this.Bm.extension;
            } else if (this.Mv) {
              n = { uri: this.Mv.uri, ffa: this.Mv.shareId };
              n = Object.keys(n)
                .map(function (e) {
                  return e + '=' + (n[e] ? encodeURIComponent(n[e]) : '');
                })
                .join('&');
              var y = 'application/x-www-form-urlencoded; charset=UTF-8';
              r = this.Mv.loadCallback;
              w = 'url';
              x = this.Mv.extension;
            } else return Promise.resolve();
            var z = new XMLHttpRequest();
            z.open(
              'POST',
              Object(e.i)(
                f.Lf,
                'AuxUpload?ext=' +
                  x +
                  '&type=' +
                  w +
                  '&bcid=' +
                  this.df.clientId
              )
            );
            z.withCredentials = this.Tn();
            y && z.setRequestHeader('Content-Type', y);
            z.addEventListener('load', function () {
              if (z.readyState === z.DONE && 200 === z.status) {
                var e = JSON.parse(z.response);
                f.LD = e.uri;
                r(e);
                h.resolve(e);
              }
            });
            z.addEventListener('error', function () {
              h.reject(z.statusText + ' ' + JSON.stringify(z));
            });
            this.Bm &&
              null != this.Bm.onProgress &&
              (z.upload.onprogress = function (e) {
                f.Bm.onProgress(e);
              });
            z.send(n);
            return h.promise;
          },
          A$: function (e) {
            this.az = e;
          },
          w3: function (e) {
            this.password && this.Kh.fo() ? e(this.password) : this.az(e);
          },
          W8: function (e) {
            this.password = e || null;
            this.Kh.fo() || (this.nz(this.Kh), this.lf({ t: 'pages' }));
            return this.Kh.promise;
          },
          gv: function (e) {
            this.iE = e || null;
            this.Kh.fo() || (this.nz(this.Kh), this.lf({ t: 'pages' }));
            return this.Kh.promise;
          },
          pM: function (e) {
            e = Object.assign(e, { uri: encodeURIComponent(this.LD) });
            this.iE && (e.ext = this.iE);
            this.kf && (e.c = this.kf);
            this.password && (e.pswd = this.password);
            this.YL && (e.cacheKey = this.YL);
            return e;
          },
          lf: function (e) {
            e = this.pM(e);
            this.df.send(e);
          },
          Uj: function (e) {
            return e;
          },
          g6: function (e) {
            var f = this,
              h = e.data,
              n = e.err,
              r = e.t;
            if (
              n &&
              f.az &&
              'This document could not be decrypted with the given password' ===
                n
            )
              f.az(function (e) {
                f.W8(e);
              });
            else
              switch (r) {
                case 'upload':
                  n ? f.uba.reject(n) : f.uba.resolve('Success');
                  break;
                case 'pages':
                  n ? f.Kh.reject(n) : ea(h, r, f.Kh) && f.Kh.resolve(h);
                  break;
                case 'config':
                  n
                    ? f.Gl.reject(n)
                    : ea(h, r, f.Gl) &&
                      (h.id && (f.id = h.id),
                      h.serverVersion &&
                        ((f.Nba = h.serverVersion),
                        Object(x.f)(
                          '[WebViewer Server] server version: ' + f.Nba
                        )),
                      h.serverID
                        ? ((f.zA = h.serverID === f.tH && f.gF ? f.zA + 1 : 0),
                          (f.tH = h.serverID))
                        : (f.zA = 0),
                      (f.gF = !1),
                      f.Gl.resolve(h));
                  break;
                case 'health':
                  n
                    ? f.Gl.reject(n)
                    : ea(h, r, f.Gl) &&
                      ((h = h.unhealthy),
                      f.eT && h
                        ? Object(x.h)(
                            'Server failed health check. Single server mode ignoring check.'
                          )
                        : !f.Cda &&
                          h &&
                          1 >= f.zA &&
                          ((f.gF = !0),
                          f.nM().then(
                            function () {
                              f.eH();
                            },
                            function () {
                              f.eH();
                            }
                          )));
                  break;
                case 'pdf':
                  h.url =
                    f.Lf +
                    '../' +
                    encodeURI(h.url) +
                    '?bcid=' +
                    this.df.clientId;
                  n ? f.Ve.reject(n) : ea(h, r, f.Ve) && f.Ve.resolve(h);
                  break;
                case 'docmod':
                  h.url =
                    f.Lf +
                    '../' +
                    encodeURI(h.url) +
                    '?bcid=' +
                    this.df.clientId;
                  n
                    ? f.Iz[h.rID].reject(n)
                    : ea(h, r, f.Ve) && f.Iz[h.rID].resolve(h);
                  break;
                case 'xod':
                  if (n)
                    this.ne && this.ne.Gh() && this.ne.reject(n),
                      this.Td && this.Td.Gh() && this.Td.reject(n);
                  else if (h.notFound)
                    h.noCreate ||
                      (this.ne && this.ne.Gh() && this.ne.resolve(h)),
                      this.Td && this.Td.Gh() && this.Td.resolve(h);
                  else {
                    h.url &&
                      (h.url =
                        f.Lf +
                        '../' +
                        encodeURI(h.url) +
                        '?bcid=' +
                        this.df.clientId);
                    if (!this.Td || this.Td.fo())
                      (this.Td = aa()),
                        (this.Td.request = { t: 'xod', noCreate: !0 });
                    this.ne ||
                      ((this.ne = aa()), (this.ne.request = { t: 'xod' }));
                    this.Td.resolve(h);
                    this.ne.resolve(h);
                  }
                  break;
                case 'annots':
                  if (n) f.Yf.reject(n);
                  else if (ea(h, r, f.Yf)) {
                    f.Yf.vS();
                    var w = new XMLHttpRequest();
                    e = f.Lf + '../' + encodeURI(h.url);
                    var z = h.hasAppearance
                      ? e + '.xodapp?bcid=' + this.df.clientId
                      : null;
                    e += '?bcid=' + this.df.clientId;
                    w.open('GET', e);
                    w.responseType = 'text';
                    w.withCredentials = this.Tn();
                    w.addEventListener('load', function () {
                      w.readyState === w.DONE &&
                        200 === w.status &&
                        f.Yf.resolve({ wI: w.response, JL: z });
                    });
                    w.addEventListener('error', function () {
                      f.Yf.reject(w.statusText + ' ' + JSON.stringify(w));
                    });
                    w.send();
                  }
                  break;
                case 'image':
                  var ba = this.Hf[h.p];
                  n
                    ? ba.promise.reject(n)
                    : ea(h, r, ba) &&
                      ((ba.result = h),
                      (ba.result.url =
                        f.Lf +
                        '../' +
                        encodeURI(ba.result.url) +
                        '?bcid=' +
                        this.df.clientId),
                      ba.resolve(ba.result));
                  break;
                case 'tiles':
                  ba = h.rID;
                  e = this.sf[ba];
                  this.sf[ba] = null;
                  this.Cy.push(ba);
                  if (n) e.reject(n);
                  else if (ea(h, r, e)) {
                    for (n = 0; n < h.tiles.length; n++)
                      h.tiles[n] =
                        f.Lf +
                        '../' +
                        encodeURI(h.tiles[n]) +
                        '?bcid=' +
                        this.df.clientId;
                    e.resolve(h);
                  }
                  break;
                case 'text':
                  ba = this.Qg[h.p];
                  if (n) ba.reject(n);
                  else if (ea(h, r, ba)) {
                    ba.vS();
                    var ca = new XMLHttpRequest();
                    ca.open(
                      'GET',
                      f.Lf +
                        '../' +
                        encodeURI(h.url) +
                        '?bcid=' +
                        this.df.clientId
                    );
                    ca.withCredentials = this.Tn();
                    ca.addEventListener('load', function () {
                      if (ca.readyState === ca.DONE && 200 === ca.status)
                        try {
                          (ba.result = JSON.parse(ca.response)),
                            ba.resolve(ba.result);
                        } catch (sa) {
                          console.warn(
                            'Text parsing error: text will not be able to be copy/pasted.\n',
                            sa
                          ),
                            ba.resolve({
                              offsets: [],
                              quads: [],
                              str: '',
                              struct: [],
                            });
                        }
                    });
                    ca.addEventListener('error', function (e) {
                      ba.reject(ca.statusText + ' ' + JSON.stringify(e));
                    });
                    ca.send();
                  }
                  break;
                case 'progress':
                  'loading' === h.t &&
                    f.trigger(y.a.Events.DOCUMENT_LOADING_PROGRESS, [
                      h.bytes,
                      h.total,
                    ]);
              }
          },
          GN: function () {
            this.nz(this.Gl);
            return this.Gl.promise;
          },
          A1: function () {
            this.Yf ||
              ((this.Yf = aa()),
              (this.Yf.request = { t: 'annots' }),
              this.lf(this.Yf.request));
            return this.Yf.promise;
          },
          wA: function (e) {
            this.Hf[e] ||
              ((this.Hf[e] = aa()),
              (this.Hf[e].request = { t: 'image', p: e }),
              this.lf(this.Hf[e].request));
            return this.Hf[e].promise;
          },
          X8: function (e) {
            this.Qg[e] ||
              ((this.Qg[e] = aa()),
              (this.Qg[e].request = { t: 'text', p: e }),
              this.lf(this.Qg[e].request));
            return this.Qg[e].promise;
          },
          Y8: function (e, f, h, n) {
            var r = this.sf.length;
            this.Cy.length && (r = this.Cy.pop());
            this.sf[r] = aa();
            this.sf[r].request = {
              t: 'tiles',
              p: e,
              z: f,
              r: h,
              size: n,
              rID: r,
            };
            this.lf(this.sf[r].request);
            return this.sf[r].promise;
          },
          TR: function () {
            this.Ve ||
              ((this.Ve = aa()),
              (this.Ve.request = { t: 'pdf' }),
              this.ED
                ? this.Ve.resolve({ url: this.LD })
                : this.lf(this.Ve.request));
            return this.Ve.promise;
          },
          aO: function (e) {
            var f = this,
              h = new XMLHttpRequest(),
              n = this.Lf + 'aul?id=' + this.id + '&bcid=' + this.df.clientId,
              r = new FormData(),
              w = {};
            e.annots && (w.annots = 'xfdf');
            e.watermark && (w.watermark = 'png');
            e.redactions && (w.redactions = 'redact');
            w = { t: 'docmod', reqID: this.T5++, parts: w };
            e.print && (w.print = !0);
            var x = this.pM(w);
            r.append('msg', JSON.stringify(x));
            return Promise.all(
              [e.annots, e.watermark, e.redactions].map(function (e) {
                return Promise.resolve(e);
              })
            ).then(function (e) {
              var w = e[0],
                y = e[1],
                z = e[2];
              w && r.append('annots', w);
              y && r.append('watermark', e.watermark);
              z && r.append('redactions', z);
              f.Iz[x.reqID] = aa();
              h.open('POST', n);
              h.withCredentials = f.Tn;
              h.send(r);
              return f.Iz[x.reqID].promise;
            });
          },
          HO: function () {
            this.Td ||
              ((this.Td = aa()),
              (this.Td.request = { t: 'xod', noCreate: !0 }),
              this.lf(this.Td.request));
            return this.Td.promise;
          },
          Z8: function () {
            this.ne ||
              ((this.ne = aa()),
              (this.ne.request = { t: 'xod' }),
              this.lf(this.ne.request));
            return this.ne.promise;
          },
          jm: function () {
            return !0;
          },
          request: function () {},
          nR: function () {},
          abort: function () {
            for (var e = 0; e < this.sf.length; e++)
              this.sf[e] &&
                (this.sf[e].resolve(null),
                (this.sf[e] = null),
                this.Cy.push(e));
            this.close();
          },
          JA: function (e) {
            this.kf = this.kf || {};
            this.kf.headers = e;
          },
          Yda: function () {
            return this.kf
              ? Object(z.omit)(this.kf.headers, ['Cookie', 'cookie'])
              : null;
          },
          qr: function (e) {
            this.kf = this.kf || {};
            this.kf.internal = this.kf.internal || {};
            this.kf.internal.withCredentials = e;
          },
          Tn: function () {
            return this.kf && this.kf.internal
              ? this.kf.internal.withCredentials
              : null;
          },
          getFileData: function () {
            return Promise.reject();
          },
        });
        Object(ha.b)(ca);
        Object(r.a)(ca);
        Object(r.b)(ca);
        da['default'] = ca;
      },
      376: function (ha, da, h) {
        function ca(h, z, x) {
          function e(e, f, h) {
            function n(e) {
              w().then(function (f) {
                da && !ea
                  ? setTimeout(function () {
                      n(e);
                    }, 1)
                  : f.send(JSON.stringify(e));
              });
            }
            function r(e, f, r, w) {
              var ba = window.createPromiseCapability(),
                ia = !1,
                ja = ba;
              z = e;
              aa = f;
              ca = r;
              y = null;
              w && (h = w);
              try {
                e = fa ? ha + '/' + fa : ha + '/ws';
                e += '?bcid=' + h;
                var ka = new WebSocket(e);
                ka.onopen = function () {
                  ba.resolve();
                  ia = !0;
                  ba = null;
                  da = !1;
                  x.resolve(ka);
                  aa && aa();
                };
                ka.onerror = function (e) {
                  da = ea = !0;
                  ba && ba.reject(e);
                  y && y.reject();
                };
                ka.onclose = function () {
                  x = window.createPromiseCapability();
                  da = !0;
                  y || (y = window.createPromiseCapability());
                  y.resolve();
                  ca && ca();
                  z &&
                    ia &&
                    z({ t: 'health', data: { unhealthy: !0, isDead: !0 } });
                };
                ka.onmessage = function (e) {
                  e &&
                    e.data &&
                    ((e = JSON.parse(e.data)),
                    e.hb ? n({ hb: !0 }) : e.end ? close() : z(e));
                };
              } catch (Ea) {
                ba.reject(Ea), (ba = null);
              }
              return ja.promise;
            }
            function w() {
              da && z && r(z);
              return x.promise;
            }
            var x = window.createPromiseCapability(),
              y = null,
              z,
              aa,
              ca = null,
              da = !1,
              ea = !1,
              fa = f,
              ha = (function (e) {
                var f = e.indexOf('://'),
                  h = 'ws://';
                0 > f ? (f = 0) : (5 === f && (h = 'wss://'), (f += 3));
                var n = e.lastIndexOf('/');
                0 > n && (n = e.length);
                return h + e.slice(f, n);
              })(e);
            return {
              send: n,
              ZH: r,
              XD: function () {
                return y
                  ? y.promise
                  : w().then(function (e) {
                      y = window.createPromiseCapability();
                      z = null;
                      e.close();
                      return y.promise;
                    });
              },
              clientId: h,
            };
          }
          function f(e) {
            var f = e.lastIndexOf('/');
            0 > f && (f = e.length);
            return e.slice(0, f);
          }
          var y = Object(fa.j)(8);
          return window.WebSocket && !x
            ? e(h, z, y)
            : (function (e, h, w) {
                function n(e) {
                  (ea ? ea.promise : Promise.resolve(da)).then(function (f) {
                    var h = new XMLHttpRequest();
                    f = ca ? z + '/' + ca + 'pf?id=' + f : z + '/pf?id=' + f;
                    f += '&bcid=' + w;
                    var n = new FormData();
                    n.append('data', JSON.stringify(e));
                    h.open('POST', f);
                    h.withCredentials = !0;
                    h.send(n);
                  });
                }
                function r() {
                  da = 0;
                  ea || (ea = window.createPromiseCapability());
                }
                function x() {
                  y = new XMLHttpRequest();
                  var e = z + '/pf';
                  e += 0 !== da ? '?id=' + da + '&uc=' + va : '?uc=' + va;
                  va++;
                  y.open('GET', e, !0);
                  y.withCredentials = !0;
                  y.setRequestHeader('Cache-Control', 'no-cache');
                  y.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                  var f = y,
                    h = !1;
                  y.onreadystatechange = function () {
                    a: if (3 <= f.readyState && !h) {
                      try {
                        var e = f.responseText.length;
                      } catch (Ca) {
                        Object(aa.f)('caught exception');
                        break a;
                      }
                      if (0 < e)
                        try {
                          var w = f.responseText.split('\n');
                          for (
                            w[w.length - 1] && w.pop();
                            0 < w.length && 3 > w[w.length - 1].length;

                          )
                            ']' === w.pop() && r();
                          0 < w.length && 3 > w[0].length && w.shift();
                          for (e = 0; e < w.length; ++e)
                            w[e].endsWith(',') &&
                              (w[e] = w[e].substr(0, w[e].length - 1));
                          0 === da &&
                            0 < w.length &&
                            ((da = JSON.parse(w.shift()).id),
                            (e = ea),
                            (ea = null),
                            e.resolve(da));
                          var y;
                          for (e = 0; e < w.length; ++e)
                            (y = JSON.parse(w[e])) && y.end
                              ? close()
                              : y && y.hb && y.id === da
                              ? n({ hb: !0 })
                              : Ba(y);
                        } catch (Ca) {}
                      fa || ((h = !0), x());
                    }
                  };
                  y.send();
                }
                var y,
                  z = f(e),
                  ca = h,
                  da = 0,
                  ea = window.createPromiseCapability(),
                  fa = !1,
                  ha = null,
                  Ba = null,
                  va = 0;
                return {
                  send: n,
                  ZH: function (e, f, h) {
                    Ba = e;
                    ha = h;
                    fa = !1;
                    r();
                    x();
                    f && f();
                    return Promise.resolve();
                  },
                  XD: function () {
                    r();
                    Ba = null;
                    fa = !0;
                    ha && ha();
                    y.abort();
                    return Promise.resolve();
                  },
                  clientId: w,
                };
              })(h, z, y);
        }
        h.d(da, 'a', function () {
          return ca;
        });
        var aa = h(1),
          fa = h(26);
      },
    },
  ]);
}.call(this || window));
