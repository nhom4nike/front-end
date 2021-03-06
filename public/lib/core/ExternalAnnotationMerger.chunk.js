/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [7],
    {
      364: function (ha, da, h) {
        h.r(da);
        var ca = h(3),
          aa = h(388),
          fa = h(389),
          ea;
        (function (h) {
          h[(h.EXTERNAL_XFDF_NOT_REQUESTED = 0)] =
            'EXTERNAL_XFDF_NOT_REQUESTED';
          h[(h.EXTERNAL_XFDF_NOT_AVAILABLE = 1)] =
            'EXTERNAL_XFDF_NOT_AVAILABLE';
          h[(h.EXTERNAL_XFDF_AVAILABLE = 2)] = 'EXTERNAL_XFDF_AVAILABLE';
        })(ea || (ea = {}));
        ha = (function () {
          function h(h) {
            this.N = h;
            this.state = ea.EXTERNAL_XFDF_NOT_REQUESTED;
          }
          h.prototype.s3 = function () {
            var h = this;
            return function (e, f, x) {
              return Object(ca.b)(h, void 0, void 0, function () {
                var h,
                  n,
                  w,
                  y,
                  z,
                  aa,
                  da,
                  fa = this,
                  ha;
                return Object(ca.d)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (this.state !== ea.EXTERNAL_XFDF_NOT_REQUESTED)
                        return [3, 2];
                      h = this.N.getDocument().kq();
                      return [4, this.Z1(h)];
                    case 1:
                      (n = r.la()),
                        (w = this.DZ(n)),
                        (this.dE =
                          null !==
                            (ha =
                              null === w || void 0 === w
                                ? void 0
                                : w.parse()) && void 0 !== ha
                            ? ha
                            : null),
                        (this.state =
                          null === this.dE
                            ? ea.EXTERNAL_XFDF_NOT_AVAILABLE
                            : ea.EXTERNAL_XFDF_AVAILABLE),
                        (r.label = 2);
                    case 2:
                      if (this.state === ea.EXTERNAL_XFDF_NOT_AVAILABLE)
                        return x(e), [2];
                      y = new DOMParser();
                      z = y.parseFromString(e, 'text/xml');
                      f.forEach(function (e) {
                        fa.merge(z, fa.dE, e);
                      });
                      aa = new XMLSerializer();
                      da = aa.serializeToString(z);
                      x(da);
                      return [2];
                  }
                });
              });
            };
          };
          h.prototype.yH = function (h) {
            this.Z1 = h;
          };
          h.prototype.Zd = function () {
            this.dE = void 0;
            this.state = ea.EXTERNAL_XFDF_NOT_REQUESTED;
          };
          h.prototype.DZ = function (h) {
            return h
              ? Array.isArray(h)
                ? new aa.a(h)
                : 'string' !== typeof h
                ? null
                : new DOMParser()
                    .parseFromString(h, 'text/xml')
                    .querySelector('xfdf > add')
                ? new aa.a(h)
                : new fa.a(h)
              : null;
          };
          h.prototype.merge = function (h, e, f) {
            var x = this;
            0 === f && (this.E5(h, e.nn), this.G5(h, e.MD));
            var r = e.aa[f];
            r &&
              (this.H5(h, r.xl),
              this.J5(h, r.dU, e.wt),
              this.I5(h, r.page, f),
              this.F5(h, r.JM));
            r = this.N.fc();
            if (f === r - 1) {
              var n = e.wt;
              Object.keys(n).forEach(function (e) {
                n[e].iF || x.XP(h, e, n[e]);
              });
            }
          };
          h.prototype.E5 = function (h, e) {
            null !== e &&
              ((h = this.Gs(h)), this.Do(h, 'calculation-order', e));
          };
          h.prototype.G5 = function (h, e) {
            null !== e && ((h = this.Gs(h)), this.Do(h, 'document-actions', e));
          };
          h.prototype.H5 = function (h, e) {
            var f = this,
              x = this.Fs(h.querySelector('xfdf'), 'annots');
            Object.keys(e).forEach(function (h) {
              f.Do(x, '[name="' + h + '"]', e[h]);
            });
          };
          h.prototype.J5 = function (h, e, f) {
            var x = this;
            if (0 !== e.length) {
              var r = this.Gs(h);
              e.forEach(function (e) {
                var n = e.getAttribute('field'),
                  y = f[n];
                y && (x.XP(h, n, y), x.Do(r, 'null', e));
              });
            }
          };
          h.prototype.XP = function (h, e, f) {
            var x = this.Gs(h);
            null !== f.wy && this.Do(x, 'ffield [name="' + e + '"]', f.wy);
            h = this.Fs(h.querySelector('xfdf'), 'fields');
            e = e.split('.');
            this.KG(h, e, 0, f.value);
            f.iF = !0;
          };
          h.prototype.I5 = function (h, e, f) {
            null !== e &&
              ((h = this.Gs(h)),
              (h = this.Fs(h, 'pages')),
              this.Do(h, '[number="' + (f + 1) + '"]', e));
          };
          h.prototype.F5 = function (h, e) {
            Object.keys(e).forEach(function (e) {
              (e = h.querySelector('annots [name="' + e + '"]')) &&
                e.parentElement.removeChild(e);
            });
          };
          h.prototype.KG = function (h, e, f, y) {
            if (f === e.length)
              (e = document.createElementNS('', 'value')),
                (e.textContent = y),
                this.Do(h, 'value', e);
            else {
              var r = e[f];
              this.Fs(h, '[name="' + r + '"]', 'field').setAttribute('name', r);
              h = h.querySelectorAll('[name="' + r + '"]');
              1 === h.length
                ? this.KG(h[0], e, f + 1, y)
                : ((r = this.a1(h)),
                  this.KG(
                    f === e.length - 1 ? r : this.Oaa(h, r),
                    e,
                    f + 1,
                    y
                  ));
            }
          };
          h.prototype.a1 = function (h) {
            for (var e = null, f = 0; f < h.length; f++) {
              var x = h[f];
              if (
                0 === x.childElementCount ||
                (1 === x.childElementCount && 'value' === x.children[0].tagName)
              ) {
                e = x;
                break;
              }
            }
            return e;
          };
          h.prototype.Oaa = function (h, e) {
            for (var f = 0; f < h.length; f++) if (h[f] !== e) return h[f];
            return null;
          };
          h.prototype.Do = function (h, e, f) {
            e = h.querySelector(e);
            null !== e && h.removeChild(e);
            h.appendChild(f);
          };
          h.prototype.Gs = function (h) {
            var e = h.querySelector('pdf-info');
            if (null !== e) return e;
            e = this.Fs(h.querySelector('xfdf'), 'pdf-info');
            e.setAttribute('xmlns', 'http://www.pdftron.com/pdfinfo');
            e.setAttribute('version', '2');
            e.setAttribute('import-version', '3');
            return e;
          };
          h.prototype.Fs = function (h, e, f) {
            var x = h.querySelector(e);
            if (null !== x) return x;
            x = document.createElementNS('', f || e);
            h.appendChild(x);
            return x;
          };
          return h;
        })();
        da['default'] = ha;
      },
      374: function (ha, da) {
        ha = (function () {
          function h() {}
          h.prototype.hx = function (h) {
            var aa = { nn: null, MD: null, wt: {}, aa: {} };
            h = new DOMParser().parseFromString(h, 'text/xml');
            aa.nn = h.querySelector('pdf-info calculation-order');
            aa.MD = h.querySelector('pdf-info document-actions');
            aa.wt = this.z6(h);
            aa.aa = this.L6(h);
            return aa;
          };
          h.prototype.z6 = function (h) {
            var aa = h.querySelector('fields');
            h = h.querySelectorAll('pdf-info > ffield');
            if (null === aa && null === h) return {};
            var ca = {};
            this.GX(ca, aa);
            this.EX(ca, h);
            return ca;
          };
          h.prototype.GX = function (h, aa) {
            if (null !== aa && aa.children) {
              for (var ca = [], da = 0; da < aa.children.length; da++) {
                var z = aa.children[da];
                ca.push({ name: z.getAttribute('name'), element: z });
              }
              for (; 0 !== ca.length; )
                for (
                  aa = ca.shift(), da = 0;
                  da < aa.element.children.length;
                  da++
                )
                  (z = aa.element.children[da]),
                    'value' === z.tagName
                      ? (h[aa.name] = {
                          value: z.textContent,
                          wy: null,
                          iF: !1,
                        })
                      : z.children &&
                        ca.push({
                          name: aa.name + '.' + z.getAttribute('name'),
                          element: z,
                        });
            }
          };
          h.prototype.EX = function (h, aa) {
            aa.forEach(function (aa) {
              var ca = aa.getAttribute('name');
              h[ca]
                ? (h[ca].wy = aa)
                : (h[ca] = { value: null, wy: aa, iF: !1 });
            });
          };
          h.prototype.L6 = function (h) {
            var aa = this,
              ca = {};
            h.querySelectorAll('pdf-info widget').forEach(function (h) {
              var z = parseInt(h.getAttribute('page'), 10) - 1;
              aa.pz(ca, z);
              ca[z].dU.push(h);
            });
            h.querySelectorAll('pdf-info page').forEach(function (h) {
              var z = parseInt(h.getAttribute('number'), 10) - 1;
              aa.pz(ca, z);
              ca[z].page = h;
            });
            this.$N(h).forEach(function (h) {
              var z = parseInt(h.getAttribute('page'), 10),
                x = h.getAttribute('name');
              aa.pz(ca, z);
              ca[z].xl[x] = h;
            });
            this.KN(h).forEach(function (h) {
              var z = parseInt(h.getAttribute('page'), 10);
              h = h.textContent;
              aa.pz(ca, z);
              ca[z].JM[h] = !0;
            });
            return ca;
          };
          h.prototype.pz = function (h, aa) {
            h[aa] || (h[aa] = { xl: {}, JM: {}, dU: [], page: null });
          };
          return h;
        })();
        da.a = ha;
      },
      388: function (ha, da, h) {
        var ca = h(3),
          aa = h(0);
        h.n(aa);
        ha = (function (h) {
          function da(z) {
            var x = h.call(this) || this;
            x.Q0 = Array.isArray(z) ? z : [z];
            return x;
          }
          Object(ca.c)(da, h);
          da.prototype.parse = function () {
            var h = this,
              x = { nn: null, MD: null, wt: {}, aa: {} };
            this.Q0.forEach(function (e) {
              x = Object(aa.merge)(x, h.hx(e));
            });
            return x;
          };
          da.prototype.$N = function (h) {
            var x = [];
            h.querySelectorAll('add > *').forEach(function (e) {
              x.push(e);
            });
            h.querySelectorAll('modify > *').forEach(function (e) {
              x.push(e);
            });
            return x;
          };
          da.prototype.KN = function (h) {
            return h.querySelectorAll('delete > *');
          };
          return da;
        })(h(374).a);
        da.a = ha;
      },
      389: function (ha, da, h) {
        var ca = h(3);
        ha = (function (h) {
          function aa(aa) {
            var z = h.call(this) || this;
            z.R0 = aa;
            return z;
          }
          Object(ca.c)(aa, h);
          aa.prototype.parse = function () {
            return this.hx(this.R0);
          };
          aa.prototype.$N = function (h) {
            return h.querySelectorAll('annots > *');
          };
          aa.prototype.KN = function () {
            return [];
          };
          return aa;
        })(h(374).a);
        da.a = ha;
      },
    },
  ]);
}.call(this || window));
