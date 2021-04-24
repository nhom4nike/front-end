/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [13],
    {
      365: function (ha, da, h) {
        h.r(da);
        var ca = h(375),
          aa = h(92),
          fa = h(31),
          ea = h(57);
        ha = (function () {
          function h() {
            this.mb = this.de = this.Cb = this.Qb = null;
            this.we = !1;
          }
          h.prototype.clear = function () {
            Object(fa.b)(this.Qb);
            this.Cb = '';
            Object(fa.b)(this.de);
            Object(fa.b)(this.mb);
            this.we = !1;
          };
          h.prototype.zc = function () {
            this.Qb = [];
            this.de = [];
            this.mb = [];
            this.we = !1;
          };
          h.prototype.Nw = function (h) {
            for (var e = '', f = 0, x, r, n; f < h.length; )
              (x = h.charCodeAt(f)),
                9 == x
                  ? ((e += String.fromCharCode(10)), f++)
                  : 128 > x
                  ? ((e += String.fromCharCode(x)), f++)
                  : 191 < x && 224 > x
                  ? ((r = h.charCodeAt(f + 1)),
                    (e += String.fromCharCode(((x & 31) << 6) | (r & 63))),
                    (f += 2))
                  : ((r = h.charCodeAt(f + 1)),
                    (n = h.charCodeAt(f + 2)),
                    (e += String.fromCharCode(
                      ((x & 15) << 12) | ((r & 63) << 6) | (n & 63)
                    )),
                    (f += 3));
            return e;
          };
          h.prototype.initData = function (h) {
            this.Qb = [];
            this.de = [];
            this.mb = [];
            this.we = !1;
            try {
              var e = new ea.a(h);
              this.Cb = '';
              e.Ia();
              if (!e.advance()) return;
              var f = e.current.textContent;
              this.Cb = f = this.Nw(f);
              Object(fa.b)(this.de);
              e.advance();
              f = e.current.textContent;
              for (var x = f.split(','), r = Object(aa.a)(x); r.xk(); ) {
                var n = r.current;
                try {
                  var w = parseInt(n.trim());
                  this.de.push(w);
                } catch (ja) {}
              }
              Object(fa.b)(this.Qb);
              e.advance();
              f = e.current.textContent;
              x = f.split(',');
              for (var z = Object(aa.a)(x); z.xk(); ) {
                n = z.current;
                try {
                  (w = parseFloat(n.trim())), this.Qb.push(w);
                } catch (ja) {}
              }
              Object(fa.b)(this.mb);
              e.advance();
              f = e.current.textContent;
              x = f.split(',');
              h = [];
              e = [];
              f = 0;
              for (var ca = Object(aa.a)(x); ca.xk(); ) {
                n = ca.current;
                switch (n) {
                  case 'Q':
                    f = 1;
                    break;
                  case 'R':
                    f = 2;
                    break;
                  case 'S':
                    f = 3;
                    break;
                  default:
                    f = 0;
                }
                if (f) h.push(0), e.push(f);
                else
                  try {
                    (w = parseFloat(n.trim())), h.push(w), e.push(f);
                  } catch (ja) {
                    return;
                  }
              }
              f = 0;
              var da = h.length;
              r = ca = n = x = void 0;
              for (var ha = (z = 0), na = 0; na < da; ) {
                var ka = e[na];
                if (0 < ka)
                  (f = ka),
                    ++na,
                    3 === f && ((z = h[na]), (ha = h[na + 1]), (na += 2));
                else if (1 === f) for (w = 0; 8 > w; ++w) this.mb.push(h[na++]);
                else
                  2 === f
                    ? ((x = h[na++]),
                      (n = h[na++]),
                      (ca = h[na++]),
                      (r = h[na++]),
                      this.mb.push(x),
                      this.mb.push(n),
                      this.mb.push(ca),
                      this.mb.push(n),
                      this.mb.push(ca),
                      this.mb.push(r),
                      this.mb.push(x),
                      this.mb.push(r))
                    : 3 === f &&
                      ((x = h[na++]),
                      (n = z),
                      (ca = h[na++]),
                      (r = ha),
                      this.mb.push(x),
                      this.mb.push(n),
                      this.mb.push(ca),
                      this.mb.push(n),
                      this.mb.push(ca),
                      this.mb.push(r),
                      this.mb.push(x),
                      this.mb.push(r));
              }
            } catch (ja) {
              return;
            }
            this.Cb.length &&
              this.Cb.length === this.de.length &&
              8 * this.Cb.length === this.mb.length &&
              (this.we = !0);
          };
          h.prototype.ready = function () {
            return this.we;
          };
          h.prototype.Ht = function () {
            var h = new ca.a();
            if (!this.Qb.length)
              return h.hg(this.Qb, -1, this.Cb, this.mb, 0), h;
            h.hg(this.Qb, 1, this.Cb, this.mb, 1);
            return h;
          };
          h.prototype.Qe = function () {
            return this.mb;
          };
          h.prototype.getData = function () {
            return {
              m_Struct: this.Qb,
              m_Str: this.Cb,
              m_Offsets: this.de,
              m_Quads: this.mb,
              m_Ready: this.we,
            };
          };
          return h;
        })();
        da['default'] = ha;
      },
      375: function (ha, da, h) {
        var ca = h(52),
          aa = h(203),
          fa = h(390);
        ha = (function () {
          function h() {
            this.Ld = 0;
            this.eb = this.Aa = this.Fe = null;
            this.qc = 0;
            this.Kd = null;
          }
          h.prototype.zc = function () {
            this.Ld = -1;
            this.qc = 0;
            this.Kd = [];
          };
          h.prototype.hg = function (h, x, e, f, y) {
            this.Ld = x;
            this.qc = y;
            this.Kd = [];
            this.Fe = h;
            this.Aa = e;
            this.eb = f;
          };
          h.prototype.Na = function (h) {
            return this.Ld === h.Ld;
          };
          h.prototype.Gi = function () {
            return Math.abs(this.Fe[this.Ld]);
          };
          h.prototype.uk = function () {
            return 0 < this.Fe[this.Ld];
          };
          h.prototype.Ec = function () {
            var h = this.uk() ? 6 : 10,
              x = new fa.a();
            x.hg(this.Fe, this.Ld + h, this.Ld, this.Aa, this.eb, 1);
            return x;
          };
          h.prototype.GO = function (h) {
            if (0 > h || h >= this.Gi())
              return (
                (h = new fa.a()), h.hg(this.Fe, -1, -1, this.Aa, this.eb, 0), h
              );
            var x = this.uk() ? 6 : 10,
              e = this.uk() ? 5 : 11,
              f = new fa.a();
            f.hg(
              this.Fe,
              this.Ld + x + e * h,
              this.Ld,
              this.Aa,
              this.eb,
              1 + h
            );
            return f;
          };
          h.prototype.Df = function () {
            var z = this.Ld + parseInt(this.Fe[this.Ld + 1]);
            if (z >= this.Fe.length)
              return (z = new h()), z.hg(this.Fe, -1, this.Aa, this.eb, 0), z;
            var x = new h();
            x.hg(this.Fe, z, this.Aa, this.eb, this.qc + 1);
            return x;
          };
          h.prototype.ec = function (h) {
            if (this.uk())
              (h.ha = this.Fe[this.Ld + 2 + 0]),
                (h.ea = this.Fe[this.Ld + 2 + 1]),
                (h.ia = this.Fe[this.Ld + 2 + 2]),
                (h.fa = this.Fe[this.Ld + 2 + 3]);
            else {
              for (
                var x = 1.79769e308,
                  e = ca.a.MIN,
                  f = 1.79769e308,
                  y = ca.a.MIN,
                  r = 0;
                4 > r;
                ++r
              ) {
                var n = this.Fe[this.Ld + 2 + 2 * r],
                  w = this.Fe[this.Ld + 2 + 2 * r + 1];
                x = Math.min(x, n);
                e = Math.max(e, n);
                f = Math.min(f, w);
                y = Math.max(y, w);
              }
              h.ha = x;
              h.ea = f;
              h.ia = e;
              h.fa = y;
            }
          };
          h.prototype.Fi = function () {
            if (this.Kd.length) return this.Kd[0];
            var h = new aa.a(),
              x = new aa.a(),
              e = new fa.a();
            e.zc();
            var f = this.Ec(),
              y = new fa.a();
            y.zc();
            for (var r = this.Ec(); !r.Na(e); r = r.gf()) y = r;
            e = Array(8);
            r = Array(8);
            f.te(0, e);
            h.x = (e[0] + e[2] + e[4] + e[6]) / 4;
            h.y = (e[1] + e[3] + e[5] + e[7]) / 4;
            y.te(y.Zc() - 1, r);
            x.x = (r[0] + r[2] + r[4] + r[6]) / 4;
            x.y = (r[1] + r[3] + r[5] + r[7]) / 4;
            0.01 > Math.abs(h.x - x.x) &&
              0.01 > Math.abs(h.y - x.y) &&
              this.Kd.push(0);
            h = Math.atan2(x.y - h.y, x.x - h.x);
            h *= 180 / 3.1415926;
            0 > h && (h += 360);
            this.Kd.push(h);
            return 0;
          };
          return h;
        })();
        da.a = ha;
      },
      390: function (ha, da, h) {
        var ca = h(375),
          aa = h(111),
          fa = h(52);
        ha = (function () {
          function h() {
            this.zj = this.nd = 0;
            this.eb = this.Aa = this.Qb = null;
            this.qc = 0;
          }
          h.prototype.zc = function () {
            this.zj = this.nd = -1;
            this.qc = 0;
          };
          h.prototype.hg = function (h, x, e, f, y, r) {
            this.nd = x;
            this.zj = e;
            this.Qb = h;
            this.Aa = f;
            this.eb = y;
            this.qc = r;
          };
          h.prototype.Na = function (h) {
            return this.nd === h.nd;
          };
          h.prototype.Zc = function () {
            return parseInt(this.Qb[this.nd]);
          };
          h.prototype.zh = function () {
            return parseInt(this.Qb[this.nd + 2]);
          };
          h.prototype.Gb = function () {
            return parseInt(this.Qb[this.nd + 1]);
          };
          h.prototype.uk = function () {
            return 0 < this.Qb[this.zj];
          };
          h.prototype.J2 = function () {
            return Math.abs(this.Qb[this.zj]);
          };
          h.prototype.gf = function () {
            var z = this.uk(),
              x = z ? 5 : 11;
            if (this.nd >= this.zj + (z ? 6 : 10) + (this.J2() - 1) * x)
              return (
                (x = new h()), x.hg(this.Qb, -1, -1, this.Aa, this.eb, 0), x
              );
            z = new h();
            z.hg(this.Qb, this.nd + x, this.zj, this.Aa, this.eb, this.qc + 1);
            return z;
          };
          h.prototype.g2 = function (h) {
            var x = this.Zc();
            return 0 > h || h >= x ? -1 : parseInt(this.Qb[this.nd + 1]) + h;
          };
          h.prototype.te = function (h, x) {
            h = this.g2(h);
            if (!(0 > h)) {
              var e = new ca.a();
              e.hg(this.Qb, this.zj, this.Aa, this.eb, 0);
              if (e.uk()) {
                var f = new aa.a();
                e.ec(f);
                e = f.ea < f.fa ? f.ea : f.fa;
                f = f.ea > f.fa ? f.ea : f.fa;
                h *= 8;
                x[0] = this.eb[h];
                x[1] = e;
                x[2] = this.eb[h + 2];
                x[3] = x[1];
                x[4] = this.eb[h + 4];
                x[5] = f;
                x[6] = this.eb[h + 6];
                x[7] = x[5];
              } else for (h *= 8, e = 0; 8 > e; ++e) x[e] = this.eb[h + e];
            }
          };
          h.prototype.Qd = function (h) {
            var x = new ca.a();
            x.hg(this.Qb, this.zj, this.Aa, this.eb, 0);
            if (x.uk()) {
              var e = this.Qb[this.nd + 3],
                f = this.Qb[this.nd + 4];
              if (e > f) {
                var y = e;
                e = f;
                f = y;
              }
              y = new aa.a();
              x.ec(y);
              x = y.ea < y.fa ? y.ea : y.fa;
              y = y.ea > y.fa ? y.ea : y.fa;
              h[0] = e;
              h[1] = x;
              h[2] = f;
              h[3] = x;
              h[4] = f;
              h[5] = y;
              h[6] = e;
              h[7] = y;
            } else
              for (e = this.nd + 3, f = 0; 8 > f; ++f) h[f] = this.Qb[e + f];
          };
          h.prototype.ec = function (h) {
            var x = new ca.a();
            x.hg(this.Qb, this.zj, this.Aa, this.eb, 0);
            if (x.uk()) {
              var e = this.Qb[this.nd + 3],
                f = this.Qb[this.nd + 4];
              if (e > f) {
                var y = e;
                e = f;
                f = y;
              }
              y = new aa.a();
              x.ec(y);
              x = y.ea < y.fa ? y.ea : y.fa;
              y = y.ea > y.fa ? y.ea : y.fa;
              h[0] = e;
              h[1] = x;
              h[2] = f;
              h[3] = y;
            } else {
              e = 1.79769e308;
              f = fa.a.MIN;
              x = 1.79769e308;
              y = fa.a.MIN;
              for (var r = this.nd + 3, n = 0; 4 > n; ++n) {
                var w = this.Qb[r + 2 * n],
                  z = this.Qb[r + 2 * n + 1];
                e = Math.min(e, w);
                f = Math.max(f, w);
                x = Math.min(x, z);
                y = Math.max(y, z);
              }
              h[0] = e;
              h[1] = x;
              h[2] = f;
              h[3] = y;
            }
          };
          return h;
        })();
        da.a = ha;
      },
    },
  ]);
}.call(this || window));
