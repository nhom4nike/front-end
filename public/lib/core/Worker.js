(function () {
  var Q =
    'undefined' != typeof window && window === this
      ? this
      : 'undefined' != typeof global && null != global
      ? global
      : this;
  function R(p) {
    var f = 0;
    return function () {
      return f < p.length ? { done: !1, value: p[f++] } : { done: !0 };
    };
  }
  var U =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (p, f, l) {
          p != Array.prototype && p != Object.prototype && (p[f] = l.value);
        };
  function V() {
    V = function () {};
    Q.Symbol || (Q.Symbol = aa);
  }
  var aa = (function () {
    var p = 0;
    return function (f) {
      return 'jscomp_symbol_' + (f || '') + p++;
    };
  })();
  function W() {
    V();
    var p = Q.Symbol.iterator;
    p || (p = Q.Symbol.iterator = Q.Symbol('iterator'));
    'function' != typeof Array.prototype[p] &&
      U(Array.prototype, p, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ba(R(this));
        },
      });
    W = function () {};
  }
  function ba(p) {
    W();
    p = { next: p };
    p[Q.Symbol.iterator] = function () {
      return this;
    };
    return p;
  }
  function Y(p, f) {
    return Object.prototype.hasOwnProperty.call(p, f);
  }
  function Z(p, f) {
    if (f) {
      var l = Q;
      p = p.split('.');
      for (var h = 0; h < p.length - 1; h++) {
        var d = p[h];
        d in l || (l[d] = {});
        l = l[d];
      }
      p = p[p.length - 1];
      h = l[p];
      f = f(h);
      f != h &&
        null != f &&
        U(l, p, { configurable: !0, writable: !0, value: f });
    }
  }
  Z('WeakMap', function (p) {
    function f(d) {
      this.vb = (z += Math.random() + 1).toString();
      if (d) {
        var n =
          'undefined' != typeof Symbol && Symbol.iterator && d[Symbol.iterator];
        for (d = n ? n.call(d) : { next: R(d) }; !(n = d.next()).done; )
          (n = n.value), this.set(n[0], n[1]);
      }
    }
    function l() {}
    function h(d) {
      Y(d, A) || U(d, A, { value: new l() });
    }
    function d(d) {
      var n = Object[d];
      n &&
        (Object[d] = function (b) {
          if (b instanceof l) return b;
          h(b);
          return n(b);
        });
    }
    if (
      (function () {
        if (!p || !Object.seal) return !1;
        try {
          var d = Object.seal({}),
            n = Object.seal({}),
            b = new p([
              [d, 2],
              [n, 3],
            ]);
          if (2 != b.get(d) || 3 != b.get(n)) return !1;
          b.delete(d);
          b.set(n, 4);
          return !b.has(d) && 4 == b.get(n);
        } catch (a) {
          return !1;
        }
      })()
    )
      return p;
    var A = '$jscomp_hidden_' + Math.random();
    d('freeze');
    d('preventExtensions');
    d('seal');
    var z = 0;
    f.prototype.set = function (d, n) {
      h(d);
      if (!Y(d, A)) throw Error('WeakMap key fail: ' + d);
      d[A][this.vb] = n;
      return this;
    };
    f.prototype.get = function (d) {
      return Y(d, A) ? d[A][this.vb] : void 0;
    };
    f.prototype.has = function (d) {
      return Y(d, A) && Y(d[A], this.vb);
    };
    f.prototype.delete = function (d) {
      return Y(d, A) && Y(d[A], this.vb) ? delete d[A][this.vb] : !1;
    };
    return f;
  });
  Z('String.fromCodePoint', function (p) {
    return p
      ? p
      : function (f) {
          for (var l = '', h = 0; h < arguments.length; h++) {
            var d = Number(arguments[h]);
            if (0 > d || 1114111 < d || d !== Math.floor(d))
              throw new RangeError('invalid_code_point ' + d);
            65535 >= d
              ? (l += String.fromCharCode(d))
              : ((d -= 65536),
                (l += String.fromCharCode(((d >>> 10) & 1023) | 55296)),
                (l += String.fromCharCode((d & 1023) | 56320)));
          }
          return l;
        };
  });
  function ca(p, f) {
    W();
    p instanceof String && (p += '');
    var l = 0,
      h = {
        next: function () {
          if (l < p.length) {
            var d = l++;
            return { value: f(d, p[d]), done: !1 };
          }
          h.next = function () {
            return { done: !0, value: void 0 };
          };
          return h.next();
        },
      };
    h[Symbol.iterator] = function () {
      return h;
    };
    return h;
  }
  Z('Array.prototype.keys', function (p) {
    return p
      ? p
      : function () {
          return ca(this, function (f) {
            return f;
          });
        };
  });
  (function (p) {
    function f(h) {
      if (l[h]) return l[h].la;
      var d = (l[h] = { Af: h, ue: !1, la: {} });
      p[h].call(d.la, d, d.la, f);
      d.ue = !0;
      return d.la;
    }
    var l = {};
    f.Gf = p;
    f.c = l;
    f.d = function (h, d, A) {
      f.xe(h, d) || Object.defineProperty(h, d, { enumerable: !0, get: A });
    };
    f.r = function (h) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(h, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(h, '__esModule', { value: !0 });
    };
    f.t = function (h, d) {
      d & 1 && (h = f(h));
      if (d & 8 || (d & 4 && 'object' === typeof h && h && h.kd)) return h;
      var A = Object.create(null);
      f.r(A);
      Object.defineProperty(A, 'default', { enumerable: !0, value: h });
      if (d & 2 && 'string' != typeof h)
        for (var z in h)
          f.d(
            A,
            z,
            function (d) {
              return h[d];
            }.bind(null, z)
          );
      return A;
    };
    f.n = function (h) {
      var d =
        h && h.kd
          ? function () {
              return h['default'];
            }
          : function () {
              return h;
            };
      f.d(d, 'a', d);
      return d;
    };
    f.xe = function (h, d) {
      return Object.prototype.hasOwnProperty.call(h, d);
    };
    f.p = '/core/';
    return f((f.Hf = 9));
  })([
    function (p, f, l) {
      function h(d, h) {
        d.splice(h, 1);
      }
      function d(d) {
        return d.length ? d[d.length - 1] : null;
      }
      l.d(f, 'a', function () {
        return d;
      });
      l.d(f, 'b', function () {
        return h;
      });
      l(6);
    },
    function (p, f, l) {
      function h(d, h) {
        var b;
        z[d] = h;
        null === (b = A[d]) || void 0 === b
          ? void 0
          : b.forEach(function (a) {
              a(h);
            });
      }
      function d(d) {
        return z[d];
      }
      l.d(f, 'a', function () {
        return d;
      });
      l.d(f, 'b', function () {
        return h;
      });
      var A = {},
        z = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        };
    },
    function (p, f, l) {
      function h(h, f) {
        Object(d.a)('disableLogs') ||
          (f ? console.warn(h + ': ' + f) : console.warn(h));
      }
      l.d(f, 'a', function () {
        return h;
      });
      var d = l(1);
    },
    function (p, f) {
      p =
        'undefined' !== typeof Uint8Array &&
        'undefined' !== typeof Uint16Array &&
        'undefined' !== typeof Int32Array;
      f.assign = function (d) {
        for (var h = Array.prototype.slice.call(arguments, 1); h.length; ) {
          var f = h.shift();
          if (f) {
            if ('object' !== typeof f)
              throw new TypeError(f + 'must be non-object');
            for (var l in f)
              Object.prototype.hasOwnProperty.call(f, l) && (d[l] = f[l]);
          }
        }
        return d;
      };
      f.shrinkBuf = function (d, h) {
        if (d.length === h) return d;
        if (d.subarray) return d.subarray(0, h);
        d.length = h;
        return d;
      };
      var l = {
          arraySet: function (d, h, f, l, n) {
            if (h.subarray && d.subarray) d.set(h.subarray(f, f + l), n);
            else for (var b = 0; b < l; b++) d[n + b] = h[f + b];
          },
          flattenChunks: function (d) {
            var h, f;
            var l = (f = 0);
            for (h = d.length; l < h; l++) f += d[l].length;
            var n = new Uint8Array(f);
            l = f = 0;
            for (h = d.length; l < h; l++) {
              var b = d[l];
              n.set(b, f);
              f += b.length;
            }
            return n;
          },
        },
        h = {
          arraySet: function (d, h, f, l, n) {
            for (var b = 0; b < l; b++) d[n + b] = h[f + b];
          },
          flattenChunks: function (d) {
            return [].concat.apply([], d);
          },
        };
      f.ze = function (d) {
        d
          ? ((f.Buf8 = Uint8Array),
            (f.kb = Uint16Array),
            (f.lb = Int32Array),
            f.assign(f, l))
          : ((f.Buf8 = Array), (f.kb = Array), (f.lb = Array), f.assign(f, h));
      };
      f.ze(p);
    },
    function (p, f) {
      p = (function () {
        function f(h) {
          this.depth = this.index = 0;
          this.M = h;
          this.location = {
            start: 0,
            Rb: 1,
            Sb: 1,
            end: !!h.length,
            empty: !0,
          };
          this.wb = [this.location];
          this.oc = !1;
          '?' === this.M.charAt(1) && this.dd();
          this.location.empty = !1;
        }
        f.prototype.advance = function () {
          this.Ea = null;
          this.dd();
          var h = this.location.start;
          ++h;
          this.location.empty = !1;
          if ('/' !== this.M.charAt(h))
            return (
              (this.location.empty =
                '/' === this.M.charAt(this.M.indexOf('>', h) - 1)),
              !0
            );
          this.location.end = !0;
          return !1;
        };
        f.prototype.gd = function () {
          var h = this.location.start + 1,
            d = this.M.indexOf('>', h);
          this.location.empty && --d;
          h = this.M.substring(h, d);
          this.Ea = {};
          d = h.indexOf(' ');
          if (-1 !== d) {
            this.bd = h.substring(0, d);
            h = h.slice(d);
            h = h.split('"');
            d = h.length - 1;
            for (var f = 0; f < d; ++f) {
              var l = h[f],
                p = h[++f];
              this.Ea[l.substring(1, l.length - 1)] = p;
            }
          } else this.bd = h;
        };
        f.prototype.dd = function () {
          if (this.oc)
            (this.oc = !1),
              (this.location.start = this.M.indexOf(
                '<',
                this.location.start + 1
              ));
          else {
            var h = this.location.Rb;
            if (!this.location.empty)
              for (var d = this.location.Sb; 0 < d; )
                (h = this.M.indexOf('<', h)),
                  '/' === this.M.charAt(++h)
                    ? --d
                    : ((h = this.M.indexOf('>', h)),
                      '/' !== this.M.charAt(h - 1) && ++d);
            this.location.start = this.M.indexOf('<', h);
          }
          this.location.Rb = this.location.start + 1;
          this.location.Sb = 1;
        };
        f.prototype.mark = function () {
          this.M.mark && this.M.mark(this.location.start);
        };
        f.prototype.O = function () {
          (null !== this.Ea && 'undefined' !== typeof this.Ea) || this.gd();
          return this.bd;
        };
        f.prototype.J = function () {
          ++this.depth;
          this.location = { start: this.location.start };
          this.wb[this.wb.length] = this.location;
          this.oc = !0;
        };
        f.prototype.I = function () {
          --this.depth;
          this.Ea = null;
          var h = this.location.Rb,
            d = this.location.Sb,
            f = this.location.empty,
            l = this.location.end;
          this.wb.pop();
          this.location = this.wb[this.wb.length - 1];
          this.location.Rb = h;
          this.location.Sb = l ? 0 : f ? d : d + 1;
        };
        f.prototype.V = function () {
          return this.location.empty
            ? !0
            : '/' ===
                this.M.charAt(this.M.indexOf('<', this.location.start + 1) + 1);
        };
        f.prototype.D = function (h) {
          (null !== this.Ea && 'undefined' !== typeof this.Ea) || this.gd();
          return this.Be(this.Ea[h]);
        };
        f.prototype.Be = function (h) {
          if (h)
            return h.replace(/&[^;]*;/g, function (d) {
              switch (d.charAt(1)) {
                case 'q':
                  return '"';
                case 'a':
                  return '&';
                case 'l':
                  return '<';
                case 'g':
                  return '>';
                case '#':
                  return 'x' === d.charAt(2)
                    ? String.fromCharCode(
                        parseInt(d.substring(3, d.length - 1), 16)
                      )
                    : String.fromCharCode(
                        parseInt(d.substring(2, d.length - 1), 10)
                      );
              }
              return d;
            });
        };
        return f;
      })();
      f.a = p;
    },
    function (p, f, l) {
      function h(h) {
        return new d(h);
      }
      l.d(f, 'a', function () {
        return h;
      });
      var d = (function () {
        function d(d) {
          this.uc = d;
          this.Ha = -1;
          this.current = null;
        }
        d.prototype.ve = function () {
          this.Ha++;
          this.current = this.uc[this.Ha];
          return this.Ha < this.uc.length;
        };
        d.prototype.reset = function () {
          this.Ha = -1;
          this.current = null;
        };
        return d;
      })();
    },
    function (p, f, l) {
      function h() {
        for (var d = 0, h = 0, f = arguments.length; h < f; h++)
          d += arguments[h].length;
        d = Array(d);
        var l = 0;
        for (h = 0; h < f; h++)
          for (var n = arguments[h], b = 0, a = n.length; b < a; b++, l++)
            d[l] = n[b];
        return d;
      }
      l.d(f, 'a', function () {
        return h;
      });
    },
    function (p, f, l) {
      function h(d) {
        if ('string' !== typeof d) {
          for (var h = '', f = 0, l = d.length, n; f < l; )
            (n = d.subarray(f, f + 1024)),
              (f += 1024),
              (h += String.fromCharCode.apply(null, n));
          return h;
        }
        return d;
      }
      l.d(f, 'a', function () {
        return h;
      });
    },
    function (p, f, l) {
      function h(m) {
        if (!(this instanceof h)) return new h(m);
        var q = (this.options = z.assign(
          { chunkSize: 16384, windowBits: 0, to: '' },
          m || {}
        ));
        q.raw &&
          0 <= q.windowBits &&
          16 > q.windowBits &&
          ((q.windowBits = -q.windowBits),
          0 === q.windowBits && (q.windowBits = -15));
        !(0 <= q.windowBits && 16 > q.windowBits) ||
          (m && m.windowBits) ||
          (q.windowBits += 32);
        15 < q.windowBits &&
          48 > q.windowBits &&
          0 === (q.windowBits & 15) &&
          (q.windowBits |= 15);
        this.err = 0;
        this.msg = '';
        this.ended = !1;
        this.chunks = [];
        this.strm = new a();
        this.strm.avail_out = 0;
        m = A.inflateInit2(this.strm, q.windowBits);
        if (m !== n.Z_OK) throw Error(b[m]);
        this.header = new k();
        A.inflateGetHeader(this.strm, this.header);
        if (
          q.dictionary &&
          ('string' === typeof q.dictionary
            ? (q.dictionary = w.string2buf(q.dictionary))
            : '[object ArrayBuffer]' === e.call(q.dictionary) &&
              (q.dictionary = new Uint8Array(q.dictionary)),
          q.raw &&
            ((m = A.inflateSetDictionary(this.strm, q.dictionary)),
            m !== n.Z_OK))
        )
          throw Error(b[m]);
      }
      function d(a, e) {
        e = new h(e);
        e.push(a, !0);
        if (e.err) throw e.msg || b[e.err];
        return e.result;
      }
      var A = l(13),
        z = l(3),
        w = l(18),
        n = l(19),
        b = l(20),
        a = l(21),
        k = l(22),
        e = Object.prototype.toString;
      h.prototype.push = function (a, b) {
        var k = this.strm,
          q = this.options.chunkSize,
          m = this.options.dictionary,
          v = !1;
        if (this.ended) return !1;
        b = b === ~~b ? b : !0 === b ? n.Z_FINISH : n.Z_NO_FLUSH;
        'string' === typeof a
          ? (k.input = w.binstring2buf(a))
          : '[object ArrayBuffer]' === e.call(a)
          ? (k.input = new Uint8Array(a))
          : (k.input = a);
        k.next_in = 0;
        k.avail_in = k.input.length;
        do {
          0 === k.avail_out &&
            ((k.output = new z.Buf8(q)), (k.next_out = 0), (k.avail_out = q));
          a = A.inflate(k, n.Z_NO_FLUSH);
          a === n.Z_NEED_DICT &&
            m &&
            (a = A.inflateSetDictionary(this.strm, m));
          a === n.Z_BUF_ERROR && !0 === v && ((a = n.Z_OK), (v = !1));
          if (a !== n.Z_STREAM_END && a !== n.Z_OK)
            return this.onEnd(a), (this.ended = !0), !1;
          if (
            k.next_out &&
            (0 === k.avail_out ||
              a === n.Z_STREAM_END ||
              (0 === k.avail_in && (b === n.Z_FINISH || b === n.Z_SYNC_FLUSH)))
          )
            if ('string' === this.options.to) {
              var d = w.utf8border(k.output, k.next_out);
              var h = k.next_out - d;
              var f = w.buf2string(k.output, d);
              k.next_out = h;
              k.avail_out = q - h;
              h && z.arraySet(k.output, k.output, d, h, 0);
              this.onData(f);
            } else this.onData(z.shrinkBuf(k.output, k.next_out));
          0 === k.avail_in && 0 === k.avail_out && (v = !0);
        } while ((0 < k.avail_in || 0 === k.avail_out) && a !== n.Z_STREAM_END);
        a === n.Z_STREAM_END && (b = n.Z_FINISH);
        if (b === n.Z_FINISH)
          return (
            (a = A.inflateEnd(this.strm)),
            this.onEnd(a),
            (this.ended = !0),
            a === n.Z_OK
          );
        b === n.Z_SYNC_FLUSH && (this.onEnd(n.Z_OK), (k.avail_out = 0));
        return !0;
      };
      h.prototype.onData = function (a) {
        this.chunks.push(a);
      };
      h.prototype.onEnd = function (a) {
        a === n.Z_OK &&
          (this.result =
            'string' === this.options.to
              ? this.chunks.join('')
              : z.flattenChunks(this.chunks));
        this.chunks = [];
        this.err = a;
        this.msg = this.strm.msg;
      };
      f.Inflate = h;
      f.inflate = d;
      f.inflateRaw = function (a, b) {
        b = b || {};
        b.raw = !0;
        return d(a, b);
      };
      f.ungzip = d;
    },
    function (p, f, l) {
      p.la = l(10);
    },
    function (p, f, l) {
      l.r(f);
      l(4);
      l(11);
      l(12);
    },
    function (p, f, l) {
      function h(d) {
        '@babel/helpers - typeof';
        h =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (d) {
                return typeof d;
              }
            : function (d) {
                return d &&
                  'function' === typeof Symbol &&
                  d.constructor === Symbol &&
                  d !== Symbol.prototype
                  ? 'symbol'
                  : typeof d;
              };
        return h(d);
      }
      var d = l(2),
        A = l(5),
        z = l(0);
      (function (f) {
        function n(a, b) {
          this.v = [];
          this.A = [];
          a && this.L(a, b);
        }
        var b = f.trn || {};
        f.trn = b;
        String.fromCodePoint ||
          (function () {
            function a() {
              var a = [],
                b = -1,
                k = arguments.length;
              if (!k) return '';
              for (var d = ''; ++b < k; ) {
                var v = Number(arguments[b]);
                if (!isFinite(v) || 0 > v || 1114111 < v || m(v) !== v)
                  throw RangeError('Invalid code point: '.concat(v));
                if (65535 >= v) a.push(v);
                else {
                  v -= 65536;
                  var h = (v >> 10) + 55296;
                  v = (v % 1024) + 56320;
                  a.push(h, v);
                }
                if (b + 1 === k || 16384 < a.length)
                  (d += e.apply(void 0, a)), (a.length = 0);
              }
              return d;
            }
            var b = (function () {
                try {
                  var a = {},
                    b = Object.defineProperty;
                  var e = b(a, a, a) && b;
                } catch (S) {}
                return e;
              })(),
              e = String.fromCharCode,
              m = Math.floor;
            b
              ? b(String, 'fromCodePoint', {
                  value: a,
                  configurable: !0,
                  writable: !0,
                })
              : (String.fromCodePoint = a);
          })();
        Array.prototype.Pa &&
          Object(d.a)(
            "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
          );
        Array.prototype.Pa = function (a) {
          if (!a || this.length !== a.length) return !1;
          for (var b = 0, e = this.length; b < e; b++)
            if (this[b] instanceof Array && a[b] instanceof Array) {
              if (!this[b].Pa(a[b])) return !1;
            } else if (this[b] !== a[b]) return !1;
          return !0;
        };
        Object.defineProperty(Array.prototype, 'equals', {
          enumerable: !1,
          writable: !0,
        });
        n.prototype = {
          C: function (a) {
            this.v = this.v.concat(a.v);
            this.A = this.A.concat(a.A);
          },
          L: function (a, b) {
            this.v.push(a);
            a = h(b);
            this.A.push('object' === a ? b : 'undefined' === a ? null : [b]);
          },
          Pa: function (a) {
            return this.v.Pa(a.v) && this.A.Pa(a.A);
          },
          save: function () {
            this.v.push(b.f.Nd);
            this.A.push(null);
          },
          restore: function () {
            this.L(b.f.Md, null);
          },
        };
        b.f = function (a, k, e, m) {
          this.done = !1;
          this.Hc = 2e3;
          this.Ja = {};
          this.La = 0;
          this.P = [];
          this.Ib = [];
          this.fa = [];
          this.fa.push({});
          this.g = a;
          this.Lc = this.yb('Width');
          this.Kc = this.yb('Height');
          this.P.push(b.Sa.se(this.Lc, this.Kc));
          this.ea = !1;
          this.Hb = e;
          this.ce =
            -1 < navigator.userAgent.indexOf('Android') &&
            -1 === navigator.userAgent.indexOf('Chrome') &&
            -1 === navigator.userAgent.indexOf('Firefox');
          this.v = [];
          this.A = [];
          this.g.J();
          this.g.advance();
          this.lc = m;
          a = this.g.O();
          b.f.m(a, 'FixedPage.Resources', b.f.l) &&
            (this.g.J(), this.g.advance(), this.Qc(), this.g.I());
          this.Ia = !1;
        };
        b.f.m = function (a, b, e) {
          return a === b ? !0 : a === e + b;
        };
        b.f.ad = function (a) {
          return b.f.ne(a);
        };
        b.f.ne = function (a) {
          var b = 3,
            e = Math.abs(a);
          0.5 > e && (b = 5e-4 > e ? (5e-7 > e ? 9 : 7) : 5);
          b = Math.pow(10, b);
          a = Math.round(a * b) / b;
          return a.toString();
        };
        b.f.H = function (a, b) {
          if (!a) throw Error(b);
        };
        b.f.zf = function (a) {
          return new b.f(a, !1).Td();
        };
        b.f.prototype = {
          $d: function () {
            return this.ac();
          },
          Wb: function (a, k) {
            var e = this.Sd(),
              m = this.g.O();
            if (b.f.m(m, 'Path', b.f.l)) var q = this.Zb();
            else
              b.f.m(m, 'Canvas', b.f.l)
                ? (q = this.Eb())
                : b.f.m(m, 'Glyphs', b.f.l)
                ? (q = this.Yb())
                : ((q = null), b.f.H(!1, 'Invalid Element '.concat(m)));
            q.gb(e);
            if (q.te()) {
              e = this.$d();
              m = this.Ua();
              e.mtx = [m.W, m.X, m.Y, m.Z, m.ba, m.ca];
              if (a) {
                a = { operators: a.v, data: a.A };
                var d = this.g.D('RenderTransform');
                if (null != d) {
                  var h = new b.K();
                  h.$(d);
                  d = new b.K();
                  d.bc(m);
                  d.Ga(h);
                  m = d;
                }
                a.mtx = [m.W, m.X, m.Y, m.Z, m.ba, m.ca];
              }
              this.L(b.f.Qd, [
                e,
                { x1: q.s, y1: q.u, x2: q.s + q.G, y2: q.u + q.F },
                k,
                a,
              ]);
              this.Mc = !0;
            } else this.ea = !1;
          },
          Eb: function () {
            var a = new b.ha();
            this.aa();
            var k = this.g.D('RenderTransform');
            if (null != k) {
              var e = new b.K();
              e.$(k);
              this.S(e);
            }
            k = this.g.D('Clip');
            null != k && (a = this.Ba(k));
            k = null;
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); )
                (e = this.g.O()),
                  b.f.m(e, 'Canvas.Clip', b.f.l)
                    ? (b.f.H(
                        !this.g.V(),
                        'Canvas.Clip: Must contain PathGeometry element'
                      ),
                      this.g.J(),
                      this.g.advance() &&
                        ((e = new b.K()),
                        e.$(this.B('Transform')),
                        this.S(e),
                        a.gb(this.Ba(this.B('Figures'))),
                        (e = e.Va()),
                        this.S(e)),
                      this.g.I())
                    : b.f.m(e, 'Path', b.f.l)
                    ? null != k
                      ? k.sc(this.Zb())
                      : (k = this.Zb())
                    : b.f.m(e, 'Glyphs', b.f.l)
                    ? null != k
                      ? k.sc(this.Yb())
                      : (k = this.Yb())
                    : b.f.m(e, 'Canvas', b.f.l) &&
                      (null != k ? k.sc(this.Eb()) : (k = this.Eb()));
              this.g.I();
            }
            null != k && a.gb(k);
            this.pa();
            return a;
          },
          ge: function () {
            var a = this.sa('trn:BlendMode', 'source-over');
            a = this.ea ? 'source-over' : a;
            var k = this.hc();
            k || (this.save(), this.aa());
            var e = null,
              m = this.g.D('OpacityMask');
            null != m &&
              (Object(d.a)('Uh oh OpacityMask Resource!'), (e = this.Ca(m)));
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); )
                if (((m = this.g.O()), b.f.m(m, 'Canvas.Resources', b.f.l)))
                  this.g.V()
                    ? b.f.H(
                        !1,
                        'Canvas.Resources must contain ResourceDictionary element'
                      )
                    : (this.g.J(), this.g.advance(), this.Qc(), this.g.I());
                else if (b.f.m(m, 'Canvas.Clip', b.f.l))
                  b.f.H(
                    !this.g.V(),
                    'Canvas.Clip: Must contain PathGeometry element'
                  ),
                    this.g.J(),
                    this.g.advance() &&
                      (k || (this.save(), (k = !0), this.aa()),
                      (m = new b.K()),
                      m.$(this.B('Transform')),
                      this.C(this.S(m)),
                      b.f.H(
                        b.f.m(this.g.O(), 'PathGeometry', b.f.l),
                        'Path.Clip must contain PathGeometry'
                      ),
                      this.Pb(this.B('Figures')),
                      (m = m.Va()),
                      this.C(this.S(m))),
                    this.g.I();
                else if (b.f.m(m, 'Canvas.OpacityMask', b.f.l))
                  this.ea ||
                    (this.g.J(),
                    this.g.advance(),
                    (e = this.Ta(b.f.ma, new n(b.f.Bb))),
                    this.g.I());
                else if (
                  b.f.m(m, 'Path', b.f.l) ||
                  b.f.m(m, 'Glyphs', b.f.l) ||
                  b.f.m(m, 'Canvas', b.f.l) ||
                  b.f.m(m, 'trn:Glyphs', b.f.l)
                ) {
                  if (null != e || 'source-over' !== a) {
                    this.ub();
                    this.g.I();
                    this.ea = !0;
                    this.Wb(e, a);
                    return;
                  }
                  this.Ia = !1;
                  break;
                }
              this.Ia && this.g.I();
            }
            this.Ia && this.ub();
            this.ea = !1;
          },
          ub: function () {
            this.restore();
            this.pa();
          },
          yb: function (a) {
            a = this.g.D(a);
            b.f.H(
              null != a,
              ''.concat(this.g.O(), ': ').concat(a, ' is not defined')
            );
            return parseFloat(a);
          },
          ra: function (a, b) {
            a = this.g.D(a);
            return null != a ? parseFloat(a) : b;
          },
          B: function (a) {
            a = this.g.D(a);
            b.f.H(
              null != a,
              ''.concat(this.g.O(), ': ').concat(a, ' is not defined')
            );
            return a;
          },
          sa: function (a, b) {
            a = this.g.D(a);
            return null != a ? a : b;
          },
          cd: function () {
            var a = this.g.D('x:Key');
            b.f.H(
              null != a,
              'Key must be defined for elements in a resource dictionary'
            );
            return a;
          },
          hc: function () {
            0 === this.La && this.g.mark();
            var a = !1,
              b = this.ra('Opacity', 1);
            1 > b &&
              (a || ((a = !0), this.save(), this.aa()), this.C(this.Ra(b)));
            b = this.g.D('RenderTransform');
            null != b && (a || ((a = !0), this.save(), this.aa()), this.ie(b));
            b = this.g.D('Clip');
            null != b && (a || (this.save(), this.aa()), this.Pb(b), (a = !0));
            return a;
          },
          Pb: function (a) {
            var k = !0;
            a && 'F' === a[0] && (k = !1);
            this.Sc(k ? 'evenodd' : 'nonzero');
            this.be(this.Ba(a));
            this.Oc(a);
            this.v.push(b.f.rd);
            this.A.push(k ? ['evenodd'] : []);
          },
          fe: function (a) {
            var k = [];
            for (a = Object(A.a)(a.split(';')); a.ve(); ) {
              var e = a.current,
                m = new b.Ha();
              e = e.split(',');
              if (1 <= e.length) {
                if (0 < e[0].length) {
                  var q = e[0].split(')');
                  if (2 <= q.length) {
                    var d = q[0].substr(1).split(':');
                    m.Jb = parseInt(d[0]);
                    m.dc = parseInt(d[1]);
                  }
                  m.Mb = parseInt(q[q.length - 1]);
                  m.tb = !0;
                }
                2 <= e.length &&
                  (0 < e[1].length && ((m.cc = parseFloat(e[1])), (m.fc = !0)),
                  3 <= e.length &&
                    (0 < e[2].length && (m.Nb = parseFloat(e[2])),
                    4 <= e.length &&
                      0 < e[3].length &&
                      (m.Ob = parseFloat(e[3]))));
              }
              k.push(m);
            }
            return k;
          },
          ae: function () {
            var a = this.B('UnicodeString'),
              b = '',
              e = 0;
            for (
              2 <= a.length &&
              '{' === a.charAt(0) &&
              '}' === a.charAt(1) &&
              (a = a.substr(2));
              e < a.length;

            ) {
              var m = a.charCodeAt(e);
              if (9 == m) (b += String.fromCharCode(10)), e++;
              else if (128 > m) (b += String.fromCharCode(m)), e++;
              else if (191 < m)
                if (224 > m) {
                  var q = a.charCodeAt(e + 1);
                  b += String.fromCharCode(((m & 31) << 6) | (q & 63));
                  e += 2;
                } else if (240 > m) {
                  q = a.charCodeAt(e + 1);
                  var h = a.charCodeAt(e + 2);
                  b += String.fromCharCode(
                    ((m & 15) << 12) | ((q & 63) << 6) | (h & 63)
                  );
                  e += 3;
                } else {
                  q = a.charCodeAt(e + 1);
                  h = a.charCodeAt(e + 2);
                  var f = a.charCodeAt(e + 3);
                  b += String.fromCodePoint(
                    ((m & 7) << 18) |
                      ((q & 63) << 12) |
                      ((h & 63) << 6) |
                      (f & 63)
                  );
                  e += 4;
                }
              else Object(d.a)('Invalid UTF-8 character');
            }
            return b;
          },
          Yb: function () {
            var a = new b.ha(),
              k = this.g.D('Clip');
            null != k && (a = this.Ba(k));
            return a;
          },
          $b: function (a, k) {
            return this.ce && 1 === a.length
              ? k === b.f.wc
                ? b.f.yd
                : k === b.f.Xb
                ? b.f.Xb
                : b.f.zd
              : k;
          },
          tc: function (a) {
            return 0 === Object.keys(a).length && a.constructor === Object;
          },
          Nc: function (a) {
            var k = this.sa('trn:BlendMode', 'source-over');
            k = this.ea ? 'source-over' : k;
            var e = 'source-over' != k && !this.Hb,
              m = this.hc();
            this.Hb && this.Rc(k);
            var q = this.yb('OriginX'),
              h = this.yb('OriginY'),
              f = this.B('FontUri');
            this.qb[f] = null;
            var l = this.yb('FontRenderingEmSize'),
              v = this.fe(this.sa('Indices', ''));
            if (200 > l) {
              var E = l / 200;
              m || (this.aa(), this.save(), (m = !0));
              var p = new b.K();
              p.ob(E, 0, 0, E, q, h);
              l = 200;
              h = 0;
              this.v.push(b.f.Db);
              this.A.push(p.Fb());
            }
            var C = 0;
            q = new n();
            var x = this.ae(),
              g = 0,
              z = 0,
              A = l / 100,
              w = '';
            p = null;
            var O = this.g.D('Stroke');
            a = O ? b.f.Xb : a ? b.f.wc : b.f.xd;
            q.L(b.f.Od, 0);
            for (var D = {}, y, t = 0; t < v.length; ) {
              var r = v[t],
                P = x.charCodeAt(C);
              P = r.Jb + (55296 <= P && 57344 > P ? 1 : 0);
              if (g !== r.Nb || z !== r.Ob)
                w &&
                  (q.L(this.$b(y, a), [w, g ? g * A : 0, h - z * A]),
                  q.L(b.f.yc, [w])),
                  (g = r.Nb),
                  (z = r.Ob),
                  (w = '');
              r.tb && (D[w.length] = x.substr(C, r.Jb));
              r.fc
                ? (this.tc(D) || q.L(b.f.Bc, [D]),
                  (y =
                    w +
                    (r.tb
                      ? String.fromCharCode(r.Mb + 57344)
                      : x.substr(C, P))),
                  q.L(this.$b(y, a), [y, g ? g * A : 0, h - z * A]),
                  w && q.L(b.f.yc, [w]),
                  q.L(b.f.od, [r.cc * A]),
                  (D = {}),
                  (w = ''))
                : (w += r.tb
                    ? String.fromCharCode(r.Mb + 57344)
                    : x.substr(C, P));
              t += r.dc;
              C += P;
            }
            if (w || C < x.length)
              this.tc(D) || q.L(b.f.Bc, [D]),
                (y = w + x.substr(C, x.length - C)),
                q.L(this.$b(y, a), [y, 0, 0]);
            h = y = null;
            g = this.g.D('Fill');
            C = !1;
            null != g &&
              (this.Gb(g)
                ? (y = this.Ca(g, b.f.ma, q))
                : ((C = !0), (y = this.nb(g, b.f.ma, q))));
            v = !1;
            null != O &&
              (this.Gb(O)
                ? (p = this.Ca(O, b.f.Aa, q))
                : ((v = !0), (p = this.nb(O, b.f.Aa, q))));
            g = this.g.D('OpacityMask');
            null != g &&
              (Object(d.a)('Uh oh OpacityMask Resource!'), (h = this.Ca(g)));
            if (!this.g.V() && !a) {
              for (this.g.J(); this.g.advance(); )
                (a = this.g.O()),
                  b.f.m(a, 'Glyphs.Clip', b.f.l)
                    ? (b.f.H(
                        !this.g.V(),
                        'Canvas.Clip: Must contain PathGeometry element'
                      ),
                      this.g.J(),
                      this.g.advance() &&
                        (m || ((m = !0), this.save(), this.aa()),
                        (a = new b.K()),
                        a.$(this.B('Transform')),
                        this.v.push(b.f.Db),
                        this.A.push(a.Fb()),
                        b.f.H(
                          b.f.m(this.g.O(), 'PathGeometry', b.f.l),
                          'Path.Clip must contain PathGeometry'
                        ),
                        (O = this.B('Figures')),
                        this.Pb(O),
                        (a = a.Va()),
                        this.v.push(b.f.Db),
                        this.A.push(a.Fb())),
                      this.g.I())
                    : b.f.m(a, 'Glyphs.Fill', b.f.l)
                    ? (this.g.J(),
                      this.g.advance(),
                      (y = this.Ta(b.f.ma, q)),
                      this.g.I())
                    : b.f.m(a, 'Glyphs.OpacityMask', b.f.l) &&
                      !this.ea &&
                      (this.g.J(),
                      this.g.advance(),
                      (h = this.Ta(b.f.ma, new n(b.f.Bb))),
                      this.g.I());
              this.g.I();
            }
            if (null == h || e)
              'otf' === f.substr(f.indexOf('.') + 1)
                ? ((f = f.substr(0, f.length - 4)), (f = parseInt(f.substr(7))))
                : (f = parseInt(f.substr(35, 8), 16)),
                (f = 'f'.concat(this.lc, '-').concat(f)),
                this.Ja[f]
                  ? 10 > this.Ja[f].length &&
                    (this.Ja[f] += x.substr(0, 10 - this.Ja[f].length))
                  : (this.Ja[f] = x.substr(0, 10)),
                this.ke(''.concat(b.f.ad(l), 'px ').concat(f)),
                null !== y &&
                  (C || ((y = new n(b.f.ma, '#000000')), y.C(q)),
                  this.ic(y, q)),
                null != p &&
                  ((l = this.ra('StrokeThickness', 1)),
                  (f = this.g.D('RenderTransform')),
                  (x = new b.K()),
                  null != f && x.$(f),
                  this.jc(l / (E * x.Qa())),
                  this.Tc(this.Ec(this.sa('StrokeStartLineCap', 'Flat'))),
                  this.Uc(this.sa('StrokeLineJoin', 'miter').toLowerCase()),
                  this.Vc(this.ra('StrokeMiterLimit', 10)),
                  v || ((p = new n(b.f.Aa, '#000000')), p.C(q)),
                  this.Wc(p, q));
            m && (this.restore(), this.pa());
            if (null != h || e) (this.ea = !0), this.Wb(h, k);
            this.ea = !1;
          },
          Dc: function () {
            var a = [];
            this.g.J();
            b.f.H(
              this.g.advance(),
              'Gradient brushes must contain GradientStops'
            );
            for (this.g.J(); this.g.advance(); ) {
              var k = this.B('Color'),
                e = this.B('Offset');
              a.push(e);
              a.push(this.Cc(k));
            }
            this.g.I();
            this.g.I();
            return a;
          },
          Wd: function (a, k, e) {
            var m = this.g.D('Transform'),
              q = new n();
            q.save();
            this.aa();
            null != m && (e.$(m), q.C(this.S(e)));
            e = this.ra('Opacity', 1);
            1 > e && q.C(this.Ra(e));
            m = this.B('StartPoint').split(',');
            e = parseFloat(m[0]);
            m = parseFloat(m[1]);
            var d = this.B('EndPoint').split(',');
            e = {
              type: b.f.Hd,
              x0: e,
              y0: m,
              x1: parseFloat(d[0]),
              y1: parseFloat(d[1]),
              stops: this.Dc(),
            };
            q.L(a, [e]);
            q.C(k);
            q.restore();
            this.pa();
            return q;
          },
          Yd: function (a, k, e) {
            var m = this.g.D('Transform'),
              q = new n(),
              d = this.B('RadiusX'),
              h = this.B('RadiusY'),
              f = this.B('GradientOrigin'),
              v = this.B('Center');
            q.save();
            this.aa();
            var l = parseFloat(d),
              p = parseFloat(h);
            b.f.H(0 < l && 0 < p, 'Invalid radius value');
            var C = v.split(',');
            v = parseFloat(C[0]);
            C = parseFloat(C[1]);
            var x = f.split(',');
            f = parseFloat(x[0]);
            x = parseFloat(x[1]);
            if (null != m || d !== h)
              null != m && e.$(m),
                (m = p / l),
                (x /= m),
                (C /= m),
                (h = new b.K()),
                h.ob(1, 0, 0, m, 0, 0),
                e.Ga(h),
                q.C(this.S(e));
            e = this.ra('Opacity', 1);
            1 > e && q.C(this.Ra(e));
            d = {
              type: b.f.Kd,
              x0: f,
              y0: x,
              x1: v,
              y1: C,
              r: d,
              stops: this.Dc(),
            };
            q.L(a, [d]);
            q.C(k);
            q.restore();
            this.pa();
            return q;
          },
          le: function () {
            b.f.H(!this.Lb, 'Incorrect custom glyph start');
            this.v.push(b.f.td);
            this.A.push(null);
            this.Lb = !0;
          },
          Rd: function () {
            b.f.H(this.Lb, 'Incorrect custom glyph end');
            this.v.push(b.f.ud);
            this.A.push(null);
            this.Lb = !1;
          },
          C: n.prototype.C,
          L: n.prototype.L,
          Wc: function (a, k) {
            var e = Object(z.a)(this.P);
            a.Pa(e.cb)
              ? k
                ? this.C(k)
                : this.L(b.f.Cb, null)
              : (a.v[0] === b.f.Aa && (e.cb = a), this.C(a));
          },
          ic: function (a, k) {
            var e = Object(z.a)(this.P);
            a.Pa(e.Xa)
              ? this.C(k)
              : (a.v[0] === b.f.ma && (e.Xa = a), this.C(a));
          },
          Rc: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.sb && ((k.sb = a), this.L(b.f.Cd, [a]));
          },
          Ra: function (a) {
            var k = Object(z.a)(this.P);
            k.Ka *= a;
            return new n(b.f.Bd, [k.Ka]);
          },
          Sc: function (a) {
            var b = Object(z.a)(this.P);
            a !== b.Wa && (b.Wa = a);
          },
          jc: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.ab &&
              ((k.ab = a),
              this.v.push(b.f.Gd),
              this.A.push([a, this.Ua().Qa()]));
          },
          Tc: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.Za && ((k.Za = a), this.v.push(b.f.Ed), this.A.push([a]));
          },
          Uc: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.$a && ((k.$a = a), this.v.push(b.f.Fd), this.A.push([a]));
          },
          Vc: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.bb && ((k.bb = a), this.v.push(b.f.Id), this.A.push([a]));
          },
          ke: function (a) {
            var k = Object(z.a)(this.P);
            a !== k.Ya && ((k.Ya = a), this.v.push(b.f.Ad), this.A.push([a]));
          },
          S: function (a) {
            Object(z.a)(this.P).wa.Ga(a);
            return new n(b.f.Db, a.Fb());
          },
          Ua: function () {
            return Object(z.a)(this.P).wa;
          },
          Sd: function () {
            return Object(z.a)(this.P).ta;
          },
          be: function (a) {
            Object(z.a)(this.P).ta.gb(a);
          },
          aa: function (a) {
            a = a ? Object(z.a)(this.P).we() : Object(z.a)(this.P).clone();
            this.P.push(a);
            this.fa.push({});
          },
          pa: function () {
            this.P.pop();
            for (
              var a = Object.keys(this.fa[this.fa.length - 1]), k = 0;
              k < a;
              ++k
            )
              this.L(b.f.wd);
            Object(z.b)(this.fa, this.fa.length - 1);
          },
          Ud: function (a, k, e) {
            var m = new n(),
              d = this.g.D('Transform');
            m.save();
            this.aa();
            var h = this.B('Viewbox'),
              f = new b.ha();
            f.fb(h);
            h = this.B('Viewport');
            var l = new b.ha();
            l.fb(h);
            if (null != d || f !== l) {
              h = l.G / f.G;
              var v = l.F / f.F,
                E = l.s - f.s * h;
              f = l.u - f.u * v;
              null != d && e.$(d);
              d = new b.K();
              d.ob(h, 0, 0, v, E, f);
              e.Ga(d);
              m.C(this.S(e));
            }
            e = this.ra('Opacity', 1);
            1 > e && m.C(this.Ra(e));
            e = this.sa('TileMode', 'None');
            d = this.B('ImageSource');
            this.qb[d] = null;
            m.L(a, [
              {
                type: b.f.Dd,
                name: 'i'
                  .concat(this.lc, '-')
                  .concat(parseInt(d.split('/')[2])),
                tm: 'None' === e ? 'no-repeat' : 'repeat',
              },
            ]);
            m.C(k);
            m.restore();
            this.pa();
            return m;
          },
          Vd: function () {
            var a = new n(),
              k = this.g.D('Transform');
            a.save();
            this.aa();
            var e = this.B('Viewbox'),
              d = new b.ha();
            d.fb(e);
            e = this.B('Viewport');
            var q = new b.ha();
            q.fb(e);
            if (null != k || d !== q) {
              e = q.G / d.G;
              var h = q.F / d.F,
                f = q.s - d.s * e;
              d = q.u - d.u * h;
              q = new b.K();
              null != k && q.$(k);
              k = new b.K();
              k.ob(e, 0, 0, h, f, d);
              q.Ga(k);
              a.C(this.S(q));
            }
            k = this.ra('Opacity', 1);
            1 > k && a.C(this.Ra(k));
            this.sa('TileMode', 'None');
            k = this.B('ImageSource');
            this.qb[k] = null;
            k = 'i'.concat(this.lc, '-').concat(parseInt(k.split('/')[2]));
            e = 'false' !== this.sa('trn:smooth', 'true');
            a.L(b.f.vd, [k, this.Ua().Qa(), e]);
            a.restore();
            this.pa();
            return a;
          },
          ie: function (a) {
            if (null != a) {
              var k = new b.K();
              k.$(a);
              this.C(this.S(k));
            }
          },
          o: function (a) {
            for (
              var b, e = (b = a.N), d = a.ga, h = d[b];
              ' ' !== h && ',' !== h;

            )
              ++b, (h = d[b]);
            e = d.substring(e, b);
            ++b;
            a.N = b;
            return parseFloat(e);
          },
          Ba: function (a) {
            var k = ' ',
              e = new b.Vb(a, null, 0),
              d = new b.ha(),
              h = !0;
            d.initData(0, 0, 0, 0);
            if (e.N < e.ga.length) for (; ' ' === e.ga.charAt(e.N); ) e.N++;
            for (; e.N < a.length; ) {
              if (
                ('A' <= e.ga.charAt(e.N) && 'Z' >= e.ga.charAt(e.N)) ||
                ('a' <= e.ga.charAt(e.N) && 'z' >= e.ga.charAt(e.N))
              )
                (k = e.ga.charAt(e.N)), e.N++;
              else
                switch (
                  ('a' > k && ('H' !== k && (e.j = 0), 'V' !== k && (e.i = 0)),
                  k)
                ) {
                  case 'm':
                  case 'M':
                    e.i += this.o(e);
                    e.j += this.o(e);
                    h
                      ? (d.initData(e.i, e.j, e.i, e.j), (h = !1))
                      : d.ia(e.i, e.j);
                    e.T = !1;
                    break;
                  case 'l':
                  case 'L':
                    e.i += this.o(e);
                    e.j += this.o(e);
                    d.ia(e.i, e.j);
                    e.T = !1;
                    break;
                  case 'c':
                  case 'C':
                    var f = this.o(e) + e.i;
                    var n = this.o(e) + e.j;
                    d.ia(f, n);
                    e.T = !0;
                    e.na = this.o(e) + e.i;
                    e.oa = this.o(e) + e.j;
                    d.ia(e.na, e.oa);
                    e.i += this.o(e);
                    e.j += this.o(e);
                    d.ia(e.i, e.j);
                    break;
                  case 'q':
                  case 'Q':
                    f = this.o(e) + e.i;
                    n = this.o(e) + e.j;
                    d.ia(f, n);
                    e.i += this.o(e);
                    e.j += this.o(e);
                    d.ia(e.i, e.j);
                    e.T = !1;
                    break;
                  case 's':
                  case 'S':
                    e.T || ((e.na = e.i), (e.oa = e.j));
                    f = 2 * e.i - e.na;
                    n = 2 * e.j - e.oa;
                    d.ia(f, n);
                    e.T = !0;
                    e.na = this.o(e) + e.i;
                    e.oa = this.o(e) + e.j;
                    d.ia(e.na, e.oa);
                    e.i += this.o(e);
                    e.j += this.o(e);
                    d.ia(e.i, e.j);
                    break;
                  case 'h':
                  case 'H':
                    e.i += this.o(e);
                    d.ia(e.i, e.j);
                    e.T = !1;
                    break;
                  case 'v':
                  case 'V':
                    e.j += this.o(e);
                    d.ia(e.i, e.j);
                    e.T = !1;
                    break;
                  default:
                    this.o(e), (e.T = !1);
                }
              for (; ' ' === a.charAt(e.N); ) ++e.N;
            }
            return d.qe(this.Ua());
          },
          Zb: function () {
            var a = null;
            this.aa();
            var k = this.g.D('RenderTransform');
            if (null != k) {
              var e = new b.K();
              e.$(k);
              this.S(e);
            }
            e = this.g.D('Stroke');
            var d = this.ra('StrokeThickness', 1);
            k = this.g.D('Clip');
            null != k && (a = this.Ba(k));
            k = this.g.D('Data');
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); ) {
                var h = this.g.O();
                if (b.f.m(h, 'Path.Data', b.f.l) && !this.g.V()) {
                  this.g.J();
                  this.g.advance() &&
                    ((k = new b.K()),
                    k.$(this.B('Transform')),
                    this.S(k),
                    b.f.H(
                      b.f.m(this.g.O(), 'PathGeometry', b.f.l),
                      'Path.Data must contain PathGeometry'
                    ),
                    (k = this.B('Figures')));
                  this.g.I();
                  break;
                } else
                  b.f.m(h, 'Path.Clip', b.f.l)
                    ? (b.f.H(
                        !this.g.V(),
                        'Path.Clip: Must contain PathGeometry element'
                      ),
                      this.g.J(),
                      this.g.advance() &&
                        ((h = new b.K()),
                        h.$(this.B('Transform')),
                        this.S(h),
                        (a = this.Ba(this.B('Figures'))),
                        (h = h.Va()),
                        this.S(h)),
                      this.g.I())
                    : b.f.m(h, 'Path.Stroke', b.f.l) && (e = !0);
              }
              this.g.I();
            }
            null != a ? a.gb(this.Ba(k)) : (a = this.Ba(k));
            this.pa();
            e && a.inflate(d);
            return a;
          },
          pb: function (a, k, e) {
            a.T = !1;
            if (null == a.ua) this.v.push(b.f.xc), this.A.push([a.i, a.j]);
            else
              for (
                var d = a.ua.length,
                  h = a.i - k,
                  f = a.j - e,
                  n = f / h,
                  l = Math.sqrt(h * h + f * f);
                1e-10 < l;

              ) {
                var v = a.ua[a.Kb % d] - a.rb,
                  E = v > l;
                E && ((a.rb += l), (v = l));
                if (h) {
                  var p = Math.sqrt((v * v) / (1 + n * n));
                  0 > h && (p = -p);
                  k += p;
                  e += n * p;
                } else e += 0 < f ? v : -v;
                this.v.push(a.Kb % 2 ? b.f.zc : b.f.xc);
                this.A.push([k, e]);
                l -= v;
                E || (++a.Kb, (a.rb = 0));
              }
          },
          vc: function (a, k, e, d, h) {
            a.T = !0;
            if (null == a.ua)
              this.v.push(b.f.qd), this.A.push([d, h, a.na, a.oa, a.i, a.j]);
            else {
              var f = this.Ua().Qa();
              f *= (Math.abs(a.i - k) + Math.abs(a.j - e)) / 5;
              var m = a.i,
                q = a.j;
              a.i = k;
              a.j = e;
              f = 1 / parseInt(f);
              for (var v = 0; 1 >= v; v += f) {
                var n = 1 - v,
                  l = a.i,
                  p = a.j;
                a.i =
                  n * n * n * k +
                  3 * n * n * v * d +
                  3 * n * v * v * a.na +
                  v * v * v * m;
                a.j =
                  n * n * n * e +
                  3 * n * n * v * h +
                  3 * n * v * v * a.oa +
                  v * v * v * q;
                this.pb(a, l, p);
              }
            }
          },
          nd: function (a) {
            if (null == a.ua) this.v.push(b.f.sd), this.A.push(null);
            else {
              var k = a.i,
                e = a.j;
              a.i = a.Ic;
              a.j = a.Jc;
              this.pb(a, k, e);
            }
          },
          de: function (a) {
            a.Ic = a.i;
            a.Jc = a.j;
            this.v.push(b.f.zc);
            this.A.push([a.i, a.j]);
            a.T = !1;
            a.Kb = a.ec;
            a.rb = a.Da;
          },
          he: function (a, k) {
            var e = a.i,
              d = a.j;
            'a' > k && ('H' !== k && (a.j = 0), 'V' !== k && (a.i = 0));
            switch (k) {
              case 'm':
              case 'M':
                a.i += this.o(a);
                a.j += this.o(a);
                this.de(a);
                break;
              case 'l':
              case 'L':
                a.i += this.o(a);
                a.j += this.o(a);
                this.pb(a, e, d);
                break;
              case 'c':
              case 'C':
                k = this.o(a) + a.i;
                var h = this.o(a) + a.j;
                a.na = this.o(a) + a.i;
                a.oa = this.o(a) + a.j;
                a.i += this.o(a);
                a.j += this.o(a);
                this.vc(a, e, d, k, h);
                break;
              case 'q':
              case 'Q':
                k = this.o(a) + a.i;
                h = this.o(a) + a.j;
                a.i += this.o(a);
                a.j += this.o(a);
                this.L(b.f.Jd, [k, h, a.i, a.j]);
                a.T = !1;
                break;
              case 's':
              case 'S':
                a.T || ((a.na = a.i), (a.oa = a.j));
                k = 2 * a.i - a.na;
                h = 2 * a.j - a.oa;
                a.T = !0;
                a.na = this.o(a) + a.i;
                a.oa = this.o(a) + a.j;
                a.i += this.o(a);
                a.j += this.o(a);
                this.vc(a, e, d, k, h);
                break;
              case 'h':
              case 'H':
                a.i += this.o(a);
                this.pb(a, e, d);
                a.T = !1;
                break;
              case 'v':
              case 'V':
                a.j += this.o(a);
                this.pb(a, e, d);
                a.T = !1;
                break;
              default:
                this.o(a), (a.T = !1);
            }
          },
          Ec: function (a) {
            if ('Flat' === a) return 'butt';
            if ('Square' === a) return 'square';
            if ('Round' === a || 'Triangle' === a) return 'round';
            b.f.H(!1, 'Invalid line cap '.concat(a));
            return '';
          },
          Oc: function (a) {
            this.Pc(a, null, 0);
          },
          Pc: function (a, k, e) {
            var d = ' ';
            k = new b.Vb(a, k, e);
            e = k.ga.charAt(k.N);
            this.v.push(b.f.pd);
            this.A.push(null);
            if (k.N < k.ga.length)
              for (; ' ' === e; ) k.N++, (e = k.ga.charAt(k.N));
            for (; k.N < a.length; )
              for (
                ('A' <= e && 'Z' >= e) || ('a' <= e && 'z' >= e)
                  ? ((d = e), ('z' !== e && 'Z' !== e) || this.nd(k), k.N++)
                  : this.he(k, d),
                  e = k.ga.charAt(k.N);
                ' ' === e;

              )
                ++k.N, (e = k.ga.charAt(k.N));
          },
          save: n.prototype.save,
          restore: n.prototype.restore,
          je: function () {
            var a = this.sa('trn:BlendMode', 'source-over');
            a = this.ea ? 'source-over' : a;
            var k = 'source-over' != a && !this.Hb,
              e = this.g.D('Data'),
              h = !0;
            e && 'F' === e[0] && (h = !1);
            var f = new n(b.f.Bb, h ? ['evenodd'] : null),
              l = !1,
              p = this.hc(),
              z = null,
              v = this.g.D('Fill');
            null != v &&
              (z = this.Gb(v) ? this.Ca(v, b.f.ma, f) : this.nb(v, b.f.ma, f));
            this.Hb && this.Rc(a);
            var E = (v = null),
              A = this.ra('StrokeThickness', 1),
              C = this.g.D('Stroke');
            null != C &&
              (this.jc(A),
              (v = this.Gb(C)
                ? this.Ca(C, b.f.Aa, new n(b.f.Cb))
                : this.nb(C, b.f.Aa, new n(b.f.Cb))));
            C = null;
            var x = this.g.D('OpacityMask');
            null != x &&
              (Object(d.a)('Uh oh OpacityMask Resource!'), (C = this.Ca(x)));
            x = null;
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); ) {
                var g = this.g.O();
                b.f.m(g, 'Path.Clip', b.f.l)
                  ? (b.f.H(
                      !this.g.V(),
                      'Path.Clip: Must contain PathGeometry element'
                    ),
                    this.g.J(),
                    this.g.advance() &&
                      (p || ((p = !0), this.save(), this.aa()),
                      (x = new b.K()),
                      x.$(this.B('Transform')),
                      this.C(this.S(x)),
                      b.f.H(
                        b.f.m(this.g.O(), 'PathGeometry', b.f.l),
                        'Path.Clip must contain PathGeometry'
                      ),
                      (g = this.B('Figures')),
                      this.Pb(g),
                      (x = x.Va())),
                    this.g.I())
                  : b.f.m(g, 'Path.Data', b.f.l) && !this.g.V()
                  ? (this.g.J(),
                    this.g.advance() &&
                      ((e = new b.K()),
                      e.$(this.B('Transform')),
                      null != x ? x.Ga(e) : (x = e),
                      this.C(this.S(x)),
                      b.f.H(
                        b.f.m(this.g.O(), 'PathGeometry', b.f.l),
                        'Path.Data must contain PathGeometry'
                      ),
                      (e = this.B('Figures'))),
                    this.g.I())
                  : b.f.m(g, 'Path.Fill', b.f.l)
                  ? (this.g.J(),
                    this.g.advance(),
                    null != C || k || 'ImageBrush' !== this.g.O()
                      ? (z = this.Ta(b.f.ma, f))
                      : ((l = !0), this.C(this.Vd())),
                    this.g.I())
                  : b.f.m(g, 'Path.OpacityMask', b.f.l)
                  ? this.ea ||
                    (this.g.J(),
                    this.g.advance(),
                    (C = this.Ta(b.f.ma, f)),
                    this.g.I())
                  : b.f.m(g, 'Path.Stroke', b.f.l) &&
                    (this.g.J(),
                    this.g.advance(),
                    (v = this.Ta(b.f.Aa, new n(b.f.Cb), A)),
                    this.g.I());
              }
              this.g.I();
            }
            if (null == C && !k && !l) {
              b.f.H(null != e, 'Paths must have Data defined');
              l = this.g.D('StrokeDashArray');
              if (null != l)
                for (
                  l = l.split(' '), E = Array(l.length), x = 0;
                  x < l.length;
                  ++x
                )
                  if (((E[x] = parseFloat(l[x]) * A), !E[x] || 0.02 > E[x]))
                    E[x] = 0.02;
              this.Sc(h ? 'evenodd' : 'nonzero');
              h = this.ra('StrokeDashOffset', 0);
              null != E &&
                null != z &&
                (this.Oc(e), null != z && this.ic(z, f), (z = null));
              this.Pc(e, E, h);
              null != z && this.ic(z, f);
              null != v &&
                (this.Tc(this.Ec(this.sa('StrokeStartLineCap', 'Flat'))),
                this.Uc(this.sa('StrokeLineJoin', 'miter').toLowerCase()),
                this.Vc(this.ra('StrokeMiterLimit', 10)),
                this.Wc(v));
            }
            p && (this.restore(), this.pa());
            if (null != C || k) (this.ea = !0), this.Wb(C, a);
            this.ea = !1;
          },
          Cc: function (a) {
            var k = 1,
              e = [255, 255, 255, 255];
            if ('#' === a.charAt(0)) {
              if (7 === a.length) return a;
              b.f.H(
                9 === a.length,
                'Color '.concat(a, ' is invalid in a XOD file')
              );
              k = a.substr(1, 2);
              var d = a.substr(3, 2);
              var h = a.substr(5, 2);
              a = a.substr(7, 2);
              k = parseInt(k, 16) / 255;
              e[0] = parseInt(d, 16);
              e[1] = parseInt(h, 16);
              e[2] = parseInt(a, 16);
            } else
              's' === a.charAt(0)
                ? ((d = a.split('#')[1].split(',')),
                  3 < d.length
                    ? ((k = parseFloat(d[0])),
                      (h = 255 * parseFloat(d[1])),
                      (e[0] = parseInt(0 > h ? 0 : 255 < h ? 255 : h)),
                      (h = 255 * parseFloat(d[2])),
                      (e[1] = parseInt(0 > h ? 0 : 255 < h ? 255 : h)),
                      (h = 255 * parseFloat(d[3])),
                      (e[2] = parseInt(0 > h ? 0 : 255 < h ? 255 : h)))
                    : ((h = 255 * parseFloat(d[0])),
                      (e[0] = parseInt(0 > h ? 0 : 255 < h ? 255 : h)),
                      (h = 255 * parseFloat(d[1])),
                      (e[1] = parseInt(0 > h ? 0 : 255 < h ? 255 : h)),
                      (h = 255 * parseFloat(d[2])),
                      (e[2] = parseInt(0 > h ? 0 : 255 < h ? 255 : h))))
                : b.f.H(!1, 'Invalid color for a XOD file');
            return 'rgba('
              .concat(e[0], ',')
              .concat(e[1], ',')
              .concat(e[2], ',')
              .concat(b.f.ad(k), ')');
          },
          Zd: function (a, b) {
            return this.nb(this.B('Color'), a, b);
          },
          nb: function (a, b, e) {
            a = new n(b, this.Cc(a));
            a.C(e);
            return a;
          },
          ac: function () {
            var a = this.La,
              k = this.v,
              e = this.A;
            this.v = [];
            this.A = [];
            this.La = this.g.depth;
            this.aa(!0);
            if (!this.g.V() || !b.f.m(this.g.O(), 'Canvas', b.f.l))
              for (this.Ia = !1; this.gc(); );
            this.pa();
            var d = { operators: this.v, data: this.A };
            this.La = a;
            this.v = k;
            this.A = e;
            return d;
          },
          Fc: function (a, k, e, d) {
            var h = new n(),
              f = this.B('Viewbox'),
              m = new b.ha();
            m.fb(f);
            f = this.B('Viewport');
            var l = new b.ha();
            l.fb(f);
            f = this.g.D('Transform');
            h.save();
            this.aa();
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); ) {
                var v = this.g.O();
                if (b.f.m(v, 'VisualBrush.Visual', b.f.l)) {
                  this.g.J();
                  b.f.H(
                    this.g.advance(),
                    'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
                  );
                  this.aa(!0);
                  Object(z.a)(this.P).wa = new b.K();
                  var p = this.Eb();
                  this.pa();
                  this.g.I();
                }
              }
              this.g.I();
            }
            if ('undefined' !== typeof p && 0 !== p.F && 0 !== p.G) {
              v = l.s - m.s;
              var A = l.u - m.u;
              m.gb(p);
              l = m;
              l.s += v;
              l.u += A;
            }
            if (0 === m.G || 0 === m.F)
              return (a = new n(a, 'rgba(0,0,0,0)')), a.C(k), a;
            if (null != f || m !== l)
              (p = l.G / m.G),
                (v = l.F / m.F),
                (A = l.s - m.s * p),
                (l = l.u - m.u * v),
                null != f && e.$(f),
                (f = new b.K()),
                f.ob(p, 0, 0, v, A, l),
                e.Ga(f),
                h.C(this.S(e));
            l = this.Ua().Qa();
            f = Math.min(m.G, m.F);
            p = this.ra('Opacity', 1);
            1 > p && h.C(this.Ra(p));
            p = this.sa('TileMode', 'None');
            v = {};
            A = this.g.D('Visual');
            null != A &&
              ((A = this.Ca(A)), (v.operators = { operators: A.v, data: A.A }));
            if (!this.g.V()) {
              for (this.g.J(); this.g.advance(); )
                (A = this.g.O()),
                  b.f.m(A, 'VisualBrush.Visual', b.f.l) &&
                    (this.g.J(),
                    b.f.H(
                      this.g.advance(),
                      'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
                    ),
                    (v.operators = this.ac()),
                    this.g.I());
              this.g.I();
            }
            v.type = b.f.Pd;
            v.tm = 'None' === p ? 'no-repeat' : 'repeat';
            a === b.f.Aa && (v.strokeAdjust = d / e.Qa());
            if (m.s || m.u) (v.x = m.s), (v.y = m.u);
            v.w = m.G;
            v.h = m.F;
            v.minwh = f;
            v.scale = l;
            h.L(a, [v]);
            h.C(k);
            h.restore();
            this.pa();
            return h;
          },
          Gb: function (a) {
            return '{' === a.charAt(0);
          },
          Ca: function (a) {
            var k = a.indexOf('StaticResource');
            b.f.H(0 < k, 'Invalid resource reference: '.concat(a));
            k += 15;
            a = a.substr(k, a.length - 1 - k);
            k = null;
            for (var e = this.fa.length - 1; 0 <= e; --e)
              if (this.fa[e][a]) {
                k = this.fa[e][a];
                break;
              }
            b.f.H(null != k, 'Dictionary key '.concat(a, ' does not exist.'));
            return new n(b.f.Ld, [a]);
          },
          gc: function () {
            if (this.Ia) {
              if (this.g.depth === this.La)
                return b.f.m(this.g.O(), 'Canvas', b.f.l) && this.ub(), !1;
              var a = this.g.advance();
              if (!a) {
                this.g.I();
                if (Object(z.a)(this.Ib) === this.g.depth)
                  return this.Ib.pop(), this.Rd(), !0;
                if (this.g.depth === this.La)
                  return b.f.m(this.g.O(), 'Canvas', b.f.l) && this.ub(), !1;
                this.ub();
                return !0;
              }
            }
            this.Ia = !0;
            a = this.g.O();
            b.f.m(a, 'Canvas', b.f.l)
              ? this.ge()
              : b.f.m(a, 'Path', b.f.l)
              ? this.je()
              : b.f.m(a, 'Glyphs', b.f.l)
              ? this.Nc(!1)
              : b.f.m(a, 'trn:Glyphs', b.f.l) &&
                (this.g.V() || this.Ib.push(this.g.depth),
                this.Nc(!0),
                this.g.V() || (this.g.J(), this.le()));
            return !0;
          },
          md: function () {
            var a = b.f.ma,
              k = new n(b.f.Bb);
            a = this.Fc(a, k, new b.K());
            k = this.cd();
            this.fa[this.fa.length - 1][k] = a;
            this.L(b.f.Ac, [k, a.v, a.A]);
          },
          ld: function (a) {
            a = this.ac();
            var k = this.cd();
            this.fa[this.fa.length - 1][k] = a;
            this.L(b.f.Ac, [k, a.operators, a.data]);
          },
          Ta: function (a, k, e) {
            var d = new b.K(),
              h = this.g.O();
            if (b.f.m(h, 'VisualBrush', b.f.l)) var f = this.Fc(a, k, d, e);
            else
              b.f.m(h, 'ImageBrush', b.f.l)
                ? (f = this.Ud(a, k, d))
                : b.f.m(h, 'LinearGradientBrush', b.f.l)
                ? (f = this.Wd(a, k, d))
                : b.f.m(h, 'RadialGradientBrush', b.f.l)
                ? (f = this.Yd(a, k, d))
                : b.f.m(h, 'SolidColorBrush', b.f.l)
                ? (f = this.Zd(a, k))
                : b.f.H(!1, 'Invalid Brush Type: '.concat(h)),
                'undefined' !== typeof e &&
                  (this.S(d), this.jc(e / d.Qa()), this.S(d.Va()));
            return f;
          },
          Qc: function () {
            var a = this.g.O();
            if (b.f.m(a, 'ResourceDictionary', b.f.l) && !this.g.V()) {
              for (this.g.J(); this.g.advance(); )
                (a = this.g.O()),
                  b.f.m(a, 'VisualBrush', b.f.l)
                    ? this.md()
                    : b.f.m(a, 'Canvas', b.f.l)
                    ? this.ld()
                    : b.f.H(!1, 'Resource type is invalid: '.concat(a));
              this.g.I();
            }
          },
          Td: function () {
            for (var a = ''; !this.done; ) a += this.hb();
            return a;
          },
          hb: function () {
            this.Mc = !1;
            for (
              this.qb = {};
              this.v.length < this.Hc && !this.Mc && this.gc();

            );
            this.gc() || (this.done = !0);
            var a = { operators: this.v, data: this.A };
            this.v = [];
            this.A = [];
            return a;
          },
          oe: function () {
            var a = [],
              b = this.qb,
              e;
            for (e in b) a.push(e.substr(1));
            return a;
          },
          done: !1,
          Ia: !1,
          ea: !1,
          Lc: 0,
          Kc: 0,
          Hc: 0,
          Ja: null,
          qb: null,
          La: 0,
          fa: null,
          P: null,
          g: null,
          Ib: null,
          Lb: !1,
        };
        b.Ha = function () {
          this.fc = this.tb = !1;
          this.Jb = this.dc = 1;
          this.cc = this.Nb = this.Ob = this.Mb = 0;
        };
        b.Ha.prototype = {
          tb: !1,
          fc: !1,
          Jb: 0,
          dc: 0,
          Mb: 0,
          cc: 0,
          Nb: 0,
          Ob: 0,
        };
        b.Sa = function () {};
        b.Sa.se = function (a, k) {
          var e = new b.Sa();
          e.cb = 'black';
          e.Xa = 'black';
          e.Wa = 'nonzero';
          e.Ka = 1;
          e.sb = 'source-over';
          e.ab = 1;
          e.Za = 'butt';
          e.$a = 'miter';
          e.bb = 10;
          e.Ya = '10px sans-serif';
          e.wa = new b.K();
          e.ta = new b.ha();
          e.ta.initData(0, 0, a, k);
          return e;
        };
        b.Sa.prototype = {
          clone: function () {
            var a = new b.Sa();
            a.cb = this.cb;
            a.Xa = this.Xa;
            a.Wa = this.Wa;
            a.Ka = this.Ka;
            a.sb = this.sb;
            a.ab = this.ab;
            a.Za = this.Za;
            a.$a = this.$a;
            a.bb = this.bb;
            a.Ya = this.Ya;
            a.wa = new b.K();
            a.wa.bc(this.wa);
            a.ta = new b.ha();
            a.ta.initData(this.ta.s, this.ta.u, this.ta.G, this.ta.F);
            return a;
          },
          we: function () {
            var a = new b.Sa();
            a.cb = 'black';
            a.Xa = 'black';
            a.Wa = 'nonzero';
            a.Ka = 1;
            a.sb = 'source-over';
            a.ab = 1;
            a.Za = 'butt';
            a.$a = 'miter';
            a.bb = 10;
            a.Ya = '10px sans-serif';
            a.wa = new b.K();
            a.wa.bc(this.wa);
            a.ta = new b.ha();
            return a;
          },
          cb: null,
          Xa: null,
          Wa: null,
          Ka: 0,
          ab: 0,
          Za: null,
          $a: null,
          bb: 0,
          Ya: null,
          wa: null,
          ta: null,
        };
        b.mb = function (a, b) {
          this.x = a;
          this.y = b;
        };
        b.mb.prototype = { x: 0, y: 0 };
        b.ha = function () {
          this.u = this.s = -1e6;
          this.G = this.F = 2e6;
        };
        b.ha.prototype = {
          initData: function (a, b, e, d) {
            this.s = a;
            this.u = b;
            this.G = e;
            this.F = d;
          },
          te: function () {
            return 0 < this.G && 0 < this.F;
          },
          fb: function (a) {
            a = a.split(',');
            b.f.H(4 === a.length, 'Rectangles should contain 4 numbers');
            this.s = parseFloat(a[0]);
            this.u = parseFloat(a[1]);
            this.G = parseFloat(a[2]);
            this.F = parseFloat(a[3]);
          },
          qe: function (a) {
            if (a.Gc()) return this;
            var k = new b.mb(this.s, this.u),
              e = new b.mb(this.s, this.u + this.F),
              d = new b.mb(this.s + this.G, this.u),
              h = new b.mb(this.s + this.G, this.u + this.F);
            a.Ub(k);
            a.Ub(e);
            a.Ub(d);
            a.Ub(h);
            a = Math.min(k.x, e.x, d.x, h.x);
            var f = Math.min(k.y, e.y, d.y, h.y),
              l = new b.ha();
            l.initData(
              a,
              f,
              Math.max(k.x, e.x, d.x, h.x) - a,
              Math.max(k.y, e.y, d.y, h.y) - f
            );
            return l;
          },
          ia: function (a, b) {
            a < this.s
              ? ((this.G += this.s - a), (this.s = a))
              : a > this.s + this.G && (this.G = a - this.s);
            b < this.u
              ? ((this.F += this.u - b), (this.u = b))
              : b > this.u + this.F && (this.F = b - this.u);
          },
          sc: function (a) {
            this.ia(a.s, a.u);
            this.ia(a.s + a.G, a.u + a.F);
          },
          gb: function (a) {
            var b = this.s;
            var e = this.s + this.G;
            var d = this.u;
            var h = this.u + this.F;
            var f = a.s;
            var l = a.s + a.G;
            var n = a.u;
            a = a.u + a.F;
            e < f || l < b || h < n || a < d
              ? (this.s = this.G = this.u = this.F = 0)
              : ((this.s = b < f ? f : b),
                (this.G = (e < l ? e : l) - this.s),
                (this.u = d < n ? n : d),
                (this.F = (h < a ? h : a) - this.u),
                (this.G && this.F) || (this.s = this.G = this.u = this.F = 0));
          },
          inflate: function (a) {
            this.s -= a;
            this.u -= a;
            this.G += 2 * a;
            this.F += 2 * a;
          },
          s: 0,
          u: 0,
          G: 0,
          F: 0,
        };
        b.K = function () {};
        b.K.prototype = {
          W: 1,
          X: 0,
          Y: 0,
          Z: 1,
          ba: 0,
          ca: 0,
          $: function (a) {
            var b = [1, 0, 0, 1, 0, 0];
            a = a.split(',');
            for (var e = 0; e < a.length && 6 > e; ++e) b[e] = parseFloat(a[e]);
            this.W = b[0];
            this.X = b[1];
            this.Y = b[2];
            this.Z = b[3];
            this.ba = b[4];
            this.ca = b[5];
          },
          ob: function (a, b, e, d, h, f) {
            this.W = a;
            this.X = b;
            this.Y = e;
            this.Z = d;
            this.ba = h;
            this.ca = f;
          },
          bc: function (a) {
            this.W = a.W;
            this.X = a.X;
            this.Y = a.Y;
            this.Z = a.Z;
            this.ba = a.ba;
            this.ca = a.ca;
          },
          Ga: function (a) {
            var b = this.W,
              e = this.X,
              d = this.Y,
              h = this.Z;
            this.W = a.W * b + a.X * d;
            this.X = a.W * e + a.X * h;
            this.Y = a.Y * b + a.Z * d;
            this.Z = a.Y * e + a.Z * h;
            this.ba = a.ba * b + a.ca * d + this.ba;
            this.ca = a.ba * e + a.ca * h + this.ca;
          },
          Va: function () {
            var a = new b.K(),
              d = this.W * this.Z - this.X * this.Y;
            if (!d) return a;
            a.W = this.Z / d;
            a.Y = -this.Y / d;
            a.ba = (this.Y * this.ca - this.ba * this.Z) / d;
            a.X = -this.X / d;
            a.Z = this.W / d;
            a.ca = -(this.W * this.ca - this.ba * this.X) / d;
            return a;
          },
          Ub: function (a) {
            var b = a.x * this.X + a.y * this.Z + this.ca;
            a.x = a.x * this.W + a.y * this.Y + this.ba;
            a.y = b;
          },
          Qa: function () {
            var a = 0.707106781 * this.W + 0.707106781 * this.X,
              b = 0.707106781 * this.Y + 0.707106781 * this.Z;
            return Math.sqrt(a * a + b * b);
          },
          Gc: function () {
            return 1 !== this.W ||
              this.X ||
              this.Y ||
              1 !== this.Z ||
              this.ba ||
              this.ca
              ? !1
              : !0;
          },
          Fb: function () {
            return this.Xd();
          },
          Xd: function () {
            return this.Gc()
              ? null
              : [this.W, this.X, this.Y, this.Z, this.ba, this.ca];
          },
        };
        b.Vb = function (a, b, e) {
          this.ga = a;
          this.i = this.j = this.N = 0;
          this.T = !1;
          this.ua = b;
          if (null != this.ua) {
            for (b = a = 0; b < this.ua.length; ++b) a += this.ua[b];
            this.Da = e % a;
            0 > this.Da && (this.Da += a);
            for (e = this.ec = 0; this.Da > this.ua[e]; ++e)
              (this.Da -= this.ua[e]), ++this.ec;
          }
        };
        b.Vb.prototype = {
          ga: null,
          N: 0,
          ua: null,
          Kb: 0,
          rb: 0,
          ec: 0,
          Da: 0,
          i: 0,
          j: 0,
          Ic: 0,
          Jc: 0,
          T: !1,
          na: 0,
          oa: 0,
        };
        b.ee = function () {};
        b.ee.prototype = {};
        b.f.ff =
          'http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key';
        b.f.mf = 'http://schemas.openxps.org/oxps/v1.0/resourcedictionary-key';
        b.f.tf = 'http://schemas.microsoft.com/winfx/2006/xaml';
        b.f.l = 'http://schemas.microsoft.com/xps/2005/06';
        b.f.uf = 'http://schemas.microsoft.com/winfx/2006/xaml/presentation';
        b.f.nf = 'http://schemas.openxps.org/oxps/v1.0';
        b.f.wf = 'http://schemas.microsoft.com/xps/2005/06/documentstructure';
        b.f.lf = 'http://schemas.openxps.org/oxps/v1.0/documentstructure';
        b.f.rf = 'http://schemas.openxmlformats.org/package/2006/relationships';
        b.f.Ye = 'http://schemas.openxmlformats.org/package/2006/content-types';
        b.f.gf = 'http://schemas.openxmlformats.org/markup-compatibility/2006';
        b.f.Ze =
          'http://schemas.openxmlformats.org/package/2006/metadata/core-properties';
        b.f.$e = 'http://purl.org/dc/elements/1.1/';
        b.f.af = 'http://purl.org/dc/terms/';
        b.f.vf = 'http://www.w3.org/XML/1998/namespace';
        b.f.sf = 'clr-namespace:PDFTron.SilverDox.Internal;assembly=SilverDox';
        b.f.xf = 'http://schemas.microsoft.com/xps/2005/06/restricted-font';
        b.f.pf = 'http://schemas.openxps.org/oxps/v1.0/restricted-font';
        b.f.hf = 'application/vnd.ms-package.obfuscated-opentype';
        b.f.qf = 'http://www.pdftron.com/silverdox/2010/09';
        b.f.Nd = 0;
        b.f.Md = 1;
        b.f.Db = 2;
        b.f.ef = 3;
        b.f.Gd = 4;
        b.f.Ed = 5;
        b.f.Aa = 6;
        b.f.ma = 7;
        b.f.Bd = 8;
        b.f.Ac = 9;
        b.f.wd = 10;
        b.f.od = 11;
        b.f.Ld = 12;
        b.f.pd = 13;
        b.f.sd = 14;
        b.f.Bb = 15;
        b.f.Cb = 16;
        b.f.rd = 17;
        b.f.zc = 18;
        b.f.xc = 19;
        b.f.Jd = 20;
        b.f.qd = 21;
        b.f.Ad = 22;
        b.f.xd = 23;
        b.f.yc = 24;
        b.f.Od = 25;
        b.f.Id = 26;
        b.f.Fd = 27;
        b.f.vd = 28;
        b.f.df = 29;
        b.f.cf = 30;
        b.f.zd = 31;
        b.f.td = 32;
        b.f.ud = 33;
        b.f.Cd = 34;
        b.f.Bc = 35;
        b.f.Qd = 36;
        b.f.bf = 37;
        b.f.wc = 38;
        b.f.yd = 39;
        b.f.Xb = 40;
        b.f.Pd = 1;
        b.f.Hd = 2;
        b.f.Kd = 3;
        b.f.Dd = 4;
        b.f.jf = 'S r t T w c s f a L R P A b z F X C M l q B n x m W i j I Z d D e xw cgb cge g bO tm'.split(
          ' '
        );
        b.f.kf = 'S r t T w c s f a L R P A b z F X C M l q B n xc m W i j I Z d D e xcw cgb cge g bO tm'.split(
          ' '
        );
      })('undefined' !== typeof window ? window : self);
    },
    function (p, f, l) {
      var h = l(7),
        d = l(4),
        A = l(8);
      l.n(A);
      (function (f) {
        f.trn.f || (f.trn = trn);
        var l = function k(a) {
          this.M = '';
          this.data = a;
          this.ed = new A.Inflate({
            windowBits: -15,
            chunkSize: k.prototype.chunkSize,
          });
          this.pc();
          this.start = 0;
        };
        l.prototype = {
          chunkSize: 102400,
          mark: function (a) {
            var d = a - this.start;
            d > l.prototype.chunkSize &&
              ((this.M = this.M.slice(d)), (this.start = a));
          },
          indexOf: function (a, d) {
            d -= this.start;
            do var e = this.M.indexOf(a, d);
            while (-1 === e && this.pc());
            return e + this.start;
          },
          charAt: function (a) {
            a -= this.start;
            a >= this.M.length && this.pc();
            return this.M.charAt(a);
          },
          substring: function (a, d) {
            a -= this.start;
            d -= this.start;
            return this.M.substring(a, d);
          },
          pe: function () {
            var a = '';
            this.ed.onData = function (d) {
              a += Object(h.a)(d);
            };
            this.ed.push(this.data.slice(0, l.prototype.chunkSize), 2);
            this.data = this.data.slice(l.prototype.chunkSize);
            return a;
          },
          pc: function () {
            var a = this.pe();
            return a.length ? ((this.M += a), !0) : !1;
          },
        };
        f.hb = function () {
          if (f.Na.done)
            return f.postMessage({ command: 'done' }), (f.Na = null), !1;
          var a = f.Na.hb();
          f.postMessage({
            command: 'nextChunk',
            resources: f.Na.oe(),
            dataString: a,
          });
          return !0;
        };
        var n = (function () {
          var a = navigator.userAgent.toLowerCase();
          return (a =
            /(msie) ([\w.]+)/.exec(a) ||
            /(trident)(?:.*? rv:([\w.]+)|)/.exec(a))
            ? parseInt(a[2], 10)
            : a;
        })();
        f.Yc = function () {
          if (9 === n) for (; f.hb(); );
          else
            setTimeout(function () {
              f.Na && f.hb() && f.Yc();
            }, 0);
        };
        f.jd = l;
        f.Xc = !1;
        f.onmessage = function (a) {
          switch (a.data.command) {
            case 'data':
              var h = new d.a(new f.jd(a.data.dataString));
              f.Na = new f.trn.f(h, f.Xc, f.Ae, a.data.docId);
              f.Zc && f.Yc();
              break;
            case 'nextChunk':
              f.Zc || (f.Na && f.hb());
              break;
            case 'cancel':
              f.Na = null;
              f.postMessage({ command: 'done' });
              break;
            case 'options':
              f.Xc = a.data.imageScaling;
              f.Ae = a.data.specialBlendSupported;
              f.Zc = a.data.continueWithoutPrompt;
              break;
            default:
              throw Error('Unknown message command '.concat(a.data.command));
          }
        };
      })(self);
    },
    function (p, f, l) {
      function h(a) {
        return (
          ((a >>> 24) & 255) +
          ((a >>> 8) & 65280) +
          ((a & 65280) << 8) +
          ((a & 255) << 24)
        );
      }
      function d() {
        this.mode = 0;
        this.Tb = !1;
        this.va = 0;
        this.nc = !1;
        this.total = this.check = this.Qb = this.flags = 0;
        this.head = null;
        this.ja = this.za = this.ka = this.jb = 0;
        this.window = null;
        this.U = this.offset = this.length = this.R = this.Fa = 0;
        this.Oa = this.ya = null;
        this.qa = this.xb = this.ib = this.hd = this.eb = this.xa = 0;
        this.next = null;
        this.da = new a.kb(320);
        this.Ab = new a.kb(288);
        this.$c = this.fd = null;
        this.Ce = this.back = this.qc = 0;
      }
      function A(b) {
        if (!b || !b.state) return -2;
        var e = b.state;
        b.rc = b.zb = e.total = 0;
        b.msg = '';
        e.va && (b.Ma = e.va & 1);
        e.mode = 1;
        e.Tb = 0;
        e.nc = 0;
        e.Qb = 32768;
        e.head = null;
        e.Fa = 0;
        e.R = 0;
        e.ya = e.fd = new a.lb(852);
        e.Oa = e.$c = new a.lb(592);
        e.qc = 1;
        e.back = -1;
        return 0;
      }
      function z(a) {
        if (!a || !a.state) return -2;
        var b = a.state;
        b.ka = 0;
        b.za = 0;
        b.ja = 0;
        return A(a);
      }
      function w(a, b) {
        if (!a || !a.state) return -2;
        var e = a.state;
        if (0 > b) {
          var d = 0;
          b = -b;
        } else (d = (b >> 4) + 1), 48 > b && (b &= 15);
        if (b && (8 > b || 15 < b)) return -2;
        null !== e.window && e.jb !== b && (e.window = null);
        e.va = d;
        e.jb = b;
        return z(a);
      }
      function n(a, b) {
        if (!a) return -2;
        var e = new d();
        a.state = e;
        e.window = null;
        b = w(a, b);
        0 !== b && (a.state = null);
        return b;
      }
      function b(b, e, d, h) {
        var f = b.state;
        null === f.window &&
          ((f.ka = 1 << f.jb),
          (f.ja = 0),
          (f.za = 0),
          (f.window = new a.Buf8(f.ka)));
        h >= f.ka
          ? (a.arraySet(f.window, e, d - f.ka, f.ka, 0),
            (f.ja = 0),
            (f.za = f.ka))
          : ((b = f.ka - f.ja),
            b > h && (b = h),
            a.arraySet(f.window, e, d - h, b, f.ja),
            (h -= b)
              ? (a.arraySet(f.window, e, d - h, h, 0),
                (f.ja = h),
                (f.za = f.ka))
              : ((f.ja += b),
                f.ja === f.ka && (f.ja = 0),
                f.za < f.ka && (f.za += b)));
        return 0;
      }
      var a = l(3),
        k = l(14),
        e = l(15),
        m = l(16),
        q = l(17),
        J = !0,
        F,
        S;
      f.Df = z;
      f.Ef = w;
      f.Ff = A;
      f.Cf = function (a) {
        return n(a, 15);
      };
      f.inflateInit2 = n;
      f.inflate = function (d, f) {
        var l,
          n = new a.Buf8(4),
          p = [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15,
          ];
        if (!d || !d.state || !d.output || (!d.input && 0 !== d.avail_in))
          return -2;
        var g = d.state;
        12 === g.mode && (g.mode = 13);
        var v = d.next_out;
        var A = d.output;
        var z = d.avail_out;
        var w = d.next_in;
        var D = d.input;
        var y = d.avail_in;
        var t = g.Fa;
        var r = g.R;
        var E = y;
        var I = z;
        var N = 0;
        a: for (;;)
          switch (g.mode) {
            case 1:
              if (0 === g.va) {
                g.mode = 13;
                break;
              }
              for (; 16 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              if (g.va & 2 && 35615 === t) {
                g.check = 0;
                n[0] = t & 255;
                n[1] = (t >>> 8) & 255;
                g.check = e(g.check, n, 2, 0);
                r = t = 0;
                g.mode = 2;
                break;
              }
              g.flags = 0;
              g.head && (g.head.done = !1);
              if (!(g.va & 1) || (((t & 255) << 8) + (t >> 8)) % 31) {
                d.msg = 'incorrect header check';
                g.mode = 30;
                break;
              }
              if (8 !== (t & 15)) {
                d.msg = 'unknown compression method';
                g.mode = 30;
                break;
              }
              t >>>= 4;
              r -= 4;
              var B = (t & 15) + 8;
              if (0 === g.jb) g.jb = B;
              else if (B > g.jb) {
                d.msg = 'invalid window size';
                g.mode = 30;
                break;
              }
              g.Qb = 1 << B;
              d.Ma = g.check = 1;
              g.mode = t & 512 ? 10 : 12;
              r = t = 0;
              break;
            case 2:
              for (; 16 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              g.flags = t;
              if (8 !== (g.flags & 255)) {
                d.msg = 'unknown compression method';
                g.mode = 30;
                break;
              }
              if (g.flags & 57344) {
                d.msg = 'unknown header flags set';
                g.mode = 30;
                break;
              }
              g.head && (g.head.text = (t >> 8) & 1);
              g.flags & 512 &&
                ((n[0] = t & 255),
                (n[1] = (t >>> 8) & 255),
                (g.check = e(g.check, n, 2, 0)));
              r = t = 0;
              g.mode = 3;
            case 3:
              for (; 32 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              g.head && (g.head.time = t);
              g.flags & 512 &&
                ((n[0] = t & 255),
                (n[1] = (t >>> 8) & 255),
                (n[2] = (t >>> 16) & 255),
                (n[3] = (t >>> 24) & 255),
                (g.check = e(g.check, n, 4, 0)));
              r = t = 0;
              g.mode = 4;
            case 4:
              for (; 16 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              g.head && ((g.head.De = t & 255), (g.head.ye = t >> 8));
              g.flags & 512 &&
                ((n[0] = t & 255),
                (n[1] = (t >>> 8) & 255),
                (g.check = e(g.check, n, 2, 0)));
              r = t = 0;
              g.mode = 5;
            case 5:
              if (g.flags & 1024) {
                for (; 16 > r; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                g.length = t;
                g.head && (g.head.mc = t);
                g.flags & 512 &&
                  ((n[0] = t & 255),
                  (n[1] = (t >>> 8) & 255),
                  (g.check = e(g.check, n, 2, 0)));
                r = t = 0;
              } else g.head && (g.head.U = null);
              g.mode = 6;
            case 6:
              if (g.flags & 1024) {
                var u = g.length;
                u > y && (u = y);
                u &&
                  (g.head &&
                    ((B = g.head.mc - g.length),
                    g.head.U || (g.head.U = Array(g.head.mc)),
                    a.arraySet(g.head.U, D, w, u, B)),
                  g.flags & 512 && (g.check = e(g.check, D, u, w)),
                  (y -= u),
                  (w += u),
                  (g.length -= u));
                if (g.length) break a;
              }
              g.length = 0;
              g.mode = 7;
            case 7:
              if (g.flags & 2048) {
                if (0 === y) break a;
                u = 0;
                do
                  (B = D[w + u++]),
                    g.head &&
                      B &&
                      65536 > g.length &&
                      (g.head.name += String.fromCharCode(B));
                while (B && u < y);
                g.flags & 512 && (g.check = e(g.check, D, u, w));
                y -= u;
                w += u;
                if (B) break a;
              } else g.head && (g.head.name = null);
              g.length = 0;
              g.mode = 8;
            case 8:
              if (g.flags & 4096) {
                if (0 === y) break a;
                u = 0;
                do
                  (B = D[w + u++]),
                    g.head &&
                      B &&
                      65536 > g.length &&
                      (g.head.kc += String.fromCharCode(B));
                while (B && u < y);
                g.flags & 512 && (g.check = e(g.check, D, u, w));
                y -= u;
                w += u;
                if (B) break a;
              } else g.head && (g.head.kc = null);
              g.mode = 9;
            case 9:
              if (g.flags & 512) {
                for (; 16 > r; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                if (t !== (g.check & 65535)) {
                  d.msg = 'header crc mismatch';
                  g.mode = 30;
                  break;
                }
                r = t = 0;
              }
              g.head && ((g.head.re = (g.flags >> 9) & 1), (g.head.done = !0));
              d.Ma = g.check = 0;
              g.mode = 12;
              break;
            case 10:
              for (; 32 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              d.Ma = g.check = h(t);
              r = t = 0;
              g.mode = 11;
            case 11:
              if (0 === g.nc)
                return (
                  (d.next_out = v),
                  (d.avail_out = z),
                  (d.next_in = w),
                  (d.avail_in = y),
                  (g.Fa = t),
                  (g.R = r),
                  2
                );
              d.Ma = g.check = 1;
              g.mode = 12;
            case 12:
              if (5 === f || 6 === f) break a;
            case 13:
              if (g.Tb) {
                t >>>= r & 7;
                r -= r & 7;
                g.mode = 27;
                break;
              }
              for (; 3 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              g.Tb = t & 1;
              t >>>= 1;
              --r;
              switch (t & 3) {
                case 0:
                  g.mode = 14;
                  break;
                case 1:
                  B = g;
                  if (J) {
                    F = new a.lb(512);
                    S = new a.lb(32);
                    for (u = 0; 144 > u; ) B.da[u++] = 8;
                    for (; 256 > u; ) B.da[u++] = 9;
                    for (; 280 > u; ) B.da[u++] = 7;
                    for (; 288 > u; ) B.da[u++] = 8;
                    q(1, B.da, 0, 288, F, 0, B.Ab, { R: 9 });
                    for (u = 0; 32 > u; ) B.da[u++] = 5;
                    q(2, B.da, 0, 32, S, 0, B.Ab, { R: 5 });
                    J = !1;
                  }
                  B.ya = F;
                  B.xa = 9;
                  B.Oa = S;
                  B.eb = 5;
                  g.mode = 20;
                  if (6 === f) {
                    t >>>= 2;
                    r -= 2;
                    break a;
                  }
                  break;
                case 2:
                  g.mode = 17;
                  break;
                case 3:
                  (d.msg = 'invalid block type'), (g.mode = 30);
              }
              t >>>= 2;
              r -= 2;
              break;
            case 14:
              t >>>= r & 7;
              for (r -= r & 7; 32 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              if ((t & 65535) !== ((t >>> 16) ^ 65535)) {
                d.msg = 'invalid stored block lengths';
                g.mode = 30;
                break;
              }
              g.length = t & 65535;
              r = t = 0;
              g.mode = 15;
              if (6 === f) break a;
            case 15:
              g.mode = 16;
            case 16:
              if ((u = g.length)) {
                u > y && (u = y);
                u > z && (u = z);
                if (0 === u) break a;
                a.arraySet(A, D, w, u, v);
                y -= u;
                w += u;
                z -= u;
                v += u;
                g.length -= u;
                break;
              }
              g.mode = 12;
              break;
            case 17:
              for (; 14 > r; ) {
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              g.ib = (t & 31) + 257;
              t >>>= 5;
              r -= 5;
              g.xb = (t & 31) + 1;
              t >>>= 5;
              r -= 5;
              g.hd = (t & 15) + 4;
              t >>>= 4;
              r -= 4;
              if (286 < g.ib || 30 < g.xb) {
                d.msg = 'too many length or distance symbols';
                g.mode = 30;
                break;
              }
              g.qa = 0;
              g.mode = 18;
            case 18:
              for (; g.qa < g.hd; ) {
                for (; 3 > r; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                g.da[p[g.qa++]] = t & 7;
                t >>>= 3;
                r -= 3;
              }
              for (; 19 > g.qa; ) g.da[p[g.qa++]] = 0;
              g.ya = g.fd;
              g.xa = 7;
              u = { R: g.xa };
              N = q(0, g.da, 0, 19, g.ya, 0, g.Ab, u);
              g.xa = u.R;
              if (N) {
                d.msg = 'invalid code lengths set';
                g.mode = 30;
                break;
              }
              g.qa = 0;
              g.mode = 19;
            case 19:
              for (; g.qa < g.ib + g.xb; ) {
                for (;;) {
                  var H = g.ya[t & ((1 << g.xa) - 1)];
                  u = H >>> 24;
                  H &= 65535;
                  if (u <= r) break;
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                if (16 > H) (t >>>= u), (r -= u), (g.da[g.qa++] = H);
                else {
                  if (16 === H) {
                    for (B = u + 2; r < B; ) {
                      if (0 === y) break a;
                      y--;
                      t += D[w++] << r;
                      r += 8;
                    }
                    t >>>= u;
                    r -= u;
                    if (0 === g.qa) {
                      d.msg = 'invalid bit length repeat';
                      g.mode = 30;
                      break;
                    }
                    B = g.da[g.qa - 1];
                    u = 3 + (t & 3);
                    t >>>= 2;
                    r -= 2;
                  } else if (17 === H) {
                    for (B = u + 3; r < B; ) {
                      if (0 === y) break a;
                      y--;
                      t += D[w++] << r;
                      r += 8;
                    }
                    t >>>= u;
                    r -= u;
                    B = 0;
                    u = 3 + (t & 7);
                    t >>>= 3;
                    r -= 3;
                  } else {
                    for (B = u + 7; r < B; ) {
                      if (0 === y) break a;
                      y--;
                      t += D[w++] << r;
                      r += 8;
                    }
                    t >>>= u;
                    r -= u;
                    B = 0;
                    u = 11 + (t & 127);
                    t >>>= 7;
                    r -= 7;
                  }
                  if (g.qa + u > g.ib + g.xb) {
                    d.msg = 'invalid bit length repeat';
                    g.mode = 30;
                    break;
                  }
                  for (; u--; ) g.da[g.qa++] = B;
                }
              }
              if (30 === g.mode) break;
              if (0 === g.da[256]) {
                d.msg = 'invalid code -- missing end-of-block';
                g.mode = 30;
                break;
              }
              g.xa = 9;
              u = { R: g.xa };
              N = q(1, g.da, 0, g.ib, g.ya, 0, g.Ab, u);
              g.xa = u.R;
              if (N) {
                d.msg = 'invalid literal/lengths set';
                g.mode = 30;
                break;
              }
              g.eb = 6;
              g.Oa = g.$c;
              u = { R: g.eb };
              N = q(2, g.da, g.ib, g.xb, g.Oa, 0, g.Ab, u);
              g.eb = u.R;
              if (N) {
                d.msg = 'invalid distances set';
                g.mode = 30;
                break;
              }
              g.mode = 20;
              if (6 === f) break a;
            case 20:
              g.mode = 21;
            case 21:
              if (6 <= y && 258 <= z) {
                d.next_out = v;
                d.avail_out = z;
                d.next_in = w;
                d.avail_in = y;
                g.Fa = t;
                g.R = r;
                m(d, I);
                v = d.next_out;
                A = d.output;
                z = d.avail_out;
                w = d.next_in;
                D = d.input;
                y = d.avail_in;
                t = g.Fa;
                r = g.R;
                12 === g.mode && (g.back = -1);
                break;
              }
              for (g.back = 0; ; ) {
                H = g.ya[t & ((1 << g.xa) - 1)];
                u = H >>> 24;
                B = (H >>> 16) & 255;
                H &= 65535;
                if (u <= r) break;
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              if (B && 0 === (B & 240)) {
                var M = u;
                var X = B;
                for (l = H; ; ) {
                  H = g.ya[l + ((t & ((1 << (M + X)) - 1)) >> M)];
                  u = H >>> 24;
                  B = (H >>> 16) & 255;
                  H &= 65535;
                  if (M + u <= r) break;
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                t >>>= M;
                r -= M;
                g.back += M;
              }
              t >>>= u;
              r -= u;
              g.back += u;
              g.length = H;
              if (0 === B) {
                g.mode = 26;
                break;
              }
              if (B & 32) {
                g.back = -1;
                g.mode = 12;
                break;
              }
              if (B & 64) {
                d.msg = 'invalid literal/length code';
                g.mode = 30;
                break;
              }
              g.U = B & 15;
              g.mode = 22;
            case 22:
              if (g.U) {
                for (B = g.U; r < B; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                g.length += t & ((1 << g.U) - 1);
                t >>>= g.U;
                r -= g.U;
                g.back += g.U;
              }
              g.Ce = g.length;
              g.mode = 23;
            case 23:
              for (;;) {
                H = g.Oa[t & ((1 << g.eb) - 1)];
                u = H >>> 24;
                B = (H >>> 16) & 255;
                H &= 65535;
                if (u <= r) break;
                if (0 === y) break a;
                y--;
                t += D[w++] << r;
                r += 8;
              }
              if (0 === (B & 240)) {
                M = u;
                X = B;
                for (l = H; ; ) {
                  H = g.Oa[l + ((t & ((1 << (M + X)) - 1)) >> M)];
                  u = H >>> 24;
                  B = (H >>> 16) & 255;
                  H &= 65535;
                  if (M + u <= r) break;
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                t >>>= M;
                r -= M;
                g.back += M;
              }
              t >>>= u;
              r -= u;
              g.back += u;
              if (B & 64) {
                d.msg = 'invalid distance code';
                g.mode = 30;
                break;
              }
              g.offset = H;
              g.U = B & 15;
              g.mode = 24;
            case 24:
              if (g.U) {
                for (B = g.U; r < B; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                g.offset += t & ((1 << g.U) - 1);
                t >>>= g.U;
                r -= g.U;
                g.back += g.U;
              }
              if (g.offset > g.Qb) {
                d.msg = 'invalid distance too far back';
                g.mode = 30;
                break;
              }
              g.mode = 25;
            case 25:
              if (0 === z) break a;
              u = I - z;
              if (g.offset > u) {
                u = g.offset - u;
                if (u > g.za && g.qc) {
                  d.msg = 'invalid distance too far back';
                  g.mode = 30;
                  break;
                }
                u > g.ja ? ((u -= g.ja), (B = g.ka - u)) : (B = g.ja - u);
                u > g.length && (u = g.length);
                M = g.window;
              } else (M = A), (B = v - g.offset), (u = g.length);
              u > z && (u = z);
              z -= u;
              g.length -= u;
              do A[v++] = M[B++];
              while (--u);
              0 === g.length && (g.mode = 21);
              break;
            case 26:
              if (0 === z) break a;
              A[v++] = g.length;
              z--;
              g.mode = 21;
              break;
            case 27:
              if (g.va) {
                for (; 32 > r; ) {
                  if (0 === y) break a;
                  y--;
                  t |= D[w++] << r;
                  r += 8;
                }
                I -= z;
                d.zb += I;
                g.total += I;
                I &&
                  (d.Ma = g.check = g.flags
                    ? e(g.check, A, I, v - I)
                    : k(g.check, A, I, v - I));
                I = z;
                if ((g.flags ? t : h(t)) !== g.check) {
                  d.msg = 'incorrect data check';
                  g.mode = 30;
                  break;
                }
                r = t = 0;
              }
              g.mode = 28;
            case 28:
              if (g.va && g.flags) {
                for (; 32 > r; ) {
                  if (0 === y) break a;
                  y--;
                  t += D[w++] << r;
                  r += 8;
                }
                if (t !== (g.total & 4294967295)) {
                  d.msg = 'incorrect length check';
                  g.mode = 30;
                  break;
                }
                r = t = 0;
              }
              g.mode = 29;
            case 29:
              N = 1;
              break a;
            case 30:
              N = -3;
              break a;
            case 31:
              return -4;
            default:
              return -2;
          }
        d.next_out = v;
        d.avail_out = z;
        d.next_in = w;
        d.avail_in = y;
        g.Fa = t;
        g.R = r;
        if (
          (g.ka ||
            (I !== d.avail_out && 30 > g.mode && (27 > g.mode || 4 !== f))) &&
          b(d, d.output, d.next_out, I - d.avail_out)
        )
          return (g.mode = 31), -4;
        E -= d.avail_in;
        I -= d.avail_out;
        d.rc += E;
        d.zb += I;
        g.total += I;
        g.va &&
          I &&
          (d.Ma = g.check = g.flags
            ? e(g.check, A, I, d.next_out - I)
            : k(g.check, A, I, d.next_out - I));
        d.me =
          g.R +
          (g.Tb ? 64 : 0) +
          (12 === g.mode ? 128 : 0) +
          (20 === g.mode || 15 === g.mode ? 256 : 0);
        ((0 === E && 0 === I) || 4 === f) && 0 === N && (N = -5);
        return N;
      };
      f.inflateEnd = function (a) {
        if (!a || !a.state) return -2;
        var b = a.state;
        b.window && (b.window = null);
        a.state = null;
        return 0;
      };
      f.inflateGetHeader = function (a, b) {
        if (!a || !a.state) return -2;
        a = a.state;
        if (0 === (a.va & 2)) return -2;
        a.head = b;
        b.done = !1;
        return 0;
      };
      f.inflateSetDictionary = function (a, d) {
        var e = d.length;
        if (!a || !a.state) return -2;
        var f = a.state;
        if (0 !== f.va && 11 !== f.mode) return -2;
        if (11 === f.mode) {
          var h = k(1, d, e, 0);
          if (h !== f.check) return -3;
        }
        if (b(a, d, e, e)) return (f.mode = 31), -4;
        f.nc = 1;
        return 0;
      };
      f.Bf = 'pako inflate (from Nodeca project)';
    },
    function (p) {
      p.la = function (f, l, h, d) {
        var p = (f & 65535) | 0;
        f = ((f >>> 16) & 65535) | 0;
        for (var z; 0 !== h; ) {
          z = 2e3 < h ? 2e3 : h;
          h -= z;
          do (p = (p + l[d++]) | 0), (f = (f + p) | 0);
          while (--z);
          p %= 65521;
          f %= 65521;
        }
        return p | (f << 16) | 0;
      };
    },
    function (p) {
      var f = (function () {
        for (var f, h = [], d = 0; 256 > d; d++) {
          f = d;
          for (var p = 0; 8 > p; p++)
            f = f & 1 ? 3988292384 ^ (f >>> 1) : f >>> 1;
          h[d] = f;
        }
        return h;
      })();
      p.la = function (l, h, d, p) {
        d = p + d;
        for (l ^= -1; p < d; p++) l = (l >>> 8) ^ f[(l ^ h[p]) & 255];
        return l ^ -1;
      };
    },
    function (p) {
      p.la = function (f, l) {
        var h = f.state;
        var d = f.next_in;
        var p = f.input;
        var z = d + (f.avail_in - 5);
        var w = f.next_out;
        var n = f.output;
        l = w - (l - f.avail_out);
        var b = w + (f.avail_out - 257);
        var a = h.Qb;
        var k = h.ka;
        var e = h.za;
        var m = h.ja;
        var q = h.window;
        var J = h.Fa;
        var F = h.R;
        var S = h.ya;
        var v = h.Oa;
        var E = (1 << h.xa) - 1;
        var L = (1 << h.eb) - 1;
        a: do {
          15 > F &&
            ((J += p[d++] << F), (F += 8), (J += p[d++] << F), (F += 8));
          var C = S[J & E];
          b: for (;;) {
            var x = C >>> 24;
            J >>>= x;
            F -= x;
            x = (C >>> 16) & 255;
            if (0 === x) n[w++] = C & 65535;
            else if (x & 16) {
              var g = C & 65535;
              if ((x &= 15))
                F < x && ((J += p[d++] << F), (F += 8)),
                  (g += J & ((1 << x) - 1)),
                  (J >>>= x),
                  (F -= x);
              15 > F &&
                ((J += p[d++] << F), (F += 8), (J += p[d++] << F), (F += 8));
              C = v[J & L];
              c: for (;;) {
                x = C >>> 24;
                J >>>= x;
                F -= x;
                x = (C >>> 16) & 255;
                if (x & 16) {
                  C &= 65535;
                  x &= 15;
                  F < x &&
                    ((J += p[d++] << F),
                    (F += 8),
                    F < x && ((J += p[d++] << F), (F += 8)));
                  C += J & ((1 << x) - 1);
                  if (C > a) {
                    f.msg = 'invalid distance too far back';
                    h.mode = 30;
                    break a;
                  }
                  J >>>= x;
                  F -= x;
                  x = w - l;
                  if (C > x) {
                    x = C - x;
                    if (x > e && h.qc) {
                      f.msg = 'invalid distance too far back';
                      h.mode = 30;
                      break a;
                    }
                    var G = 0;
                    var K = q;
                    if (0 === m) {
                      if (((G += k - x), x < g)) {
                        g -= x;
                        do n[w++] = q[G++];
                        while (--x);
                        G = w - C;
                        K = n;
                      }
                    } else if (m < x) {
                      if (((G += k + m - x), (x -= m), x < g)) {
                        g -= x;
                        do n[w++] = q[G++];
                        while (--x);
                        G = 0;
                        if (m < g) {
                          x = m;
                          g -= x;
                          do n[w++] = q[G++];
                          while (--x);
                          G = w - C;
                          K = n;
                        }
                      }
                    } else if (((G += m - x), x < g)) {
                      g -= x;
                      do n[w++] = q[G++];
                      while (--x);
                      G = w - C;
                      K = n;
                    }
                    for (; 2 < g; )
                      (n[w++] = K[G++]),
                        (n[w++] = K[G++]),
                        (n[w++] = K[G++]),
                        (g -= 3);
                    g && ((n[w++] = K[G++]), 1 < g && (n[w++] = K[G++]));
                  } else {
                    G = w - C;
                    do
                      (n[w++] = n[G++]),
                        (n[w++] = n[G++]),
                        (n[w++] = n[G++]),
                        (g -= 3);
                    while (2 < g);
                    g && ((n[w++] = n[G++]), 1 < g && (n[w++] = n[G++]));
                  }
                } else if (0 === (x & 64)) {
                  C = v[(C & 65535) + (J & ((1 << x) - 1))];
                  continue c;
                } else {
                  f.msg = 'invalid distance code';
                  h.mode = 30;
                  break a;
                }
                break;
              }
            } else if (0 === (x & 64)) {
              C = S[(C & 65535) + (J & ((1 << x) - 1))];
              continue b;
            } else {
              x & 32
                ? (h.mode = 12)
                : ((f.msg = 'invalid literal/length code'), (h.mode = 30));
              break a;
            }
            break;
          }
        } while (d < z && w < b);
        g = F >> 3;
        d -= g;
        F -= g << 3;
        f.next_in = d;
        f.next_out = w;
        f.avail_in = d < z ? 5 + (z - d) : 5 - (d - z);
        f.avail_out = w < b ? 257 + (b - w) : 257 - (w - b);
        h.Fa = J & ((1 << F) - 1);
        h.R = F;
      };
    },
    function (p, f, l) {
      var h = l(3),
        d = [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          0,
          0,
        ],
        A = [
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          19,
          19,
          19,
          19,
          20,
          20,
          20,
          20,
          21,
          21,
          21,
          21,
          16,
          72,
          78,
        ],
        z = [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577,
          0,
          0,
        ],
        w = [
          16,
          16,
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          64,
          64,
        ];
      p.la = function (f, b, a, k, e, l, p, J) {
        var n = J.R,
          m,
          q,
          E,
          L,
          C,
          x,
          g = 0,
          G = new h.kb(16);
        var K = new h.kb(16);
        var T,
          O = 0;
        for (m = 0; 15 >= m; m++) G[m] = 0;
        for (q = 0; q < k; q++) G[b[a + q]]++;
        var D = n;
        for (E = 15; 1 <= E && 0 === G[E]; E--);
        D > E && (D = E);
        if (0 === E)
          return (e[l++] = 20971520), (e[l++] = 20971520), (J.R = 1), 0;
        for (n = 1; n < E && 0 === G[n]; n++);
        D < n && (D = n);
        for (m = L = 1; 15 >= m; m++)
          if (((L <<= 1), (L -= G[m]), 0 > L)) return -1;
        if (0 < L && (0 === f || 1 !== E)) return -1;
        K[1] = 0;
        for (m = 1; 15 > m; m++) K[m + 1] = K[m] + G[m];
        for (q = 0; q < k; q++) 0 !== b[a + q] && (p[K[b[a + q]]++] = q);
        if (0 === f) {
          var y = (T = p);
          var t = 19;
        } else
          1 === f
            ? ((y = d), (g -= 257), (T = A), (O -= 257), (t = 256))
            : ((y = z), (T = w), (t = -1));
        q = C = 0;
        m = n;
        var r = l;
        k = D;
        K = 0;
        var P = -1;
        var I = 1 << D;
        var N = I - 1;
        if ((1 === f && 852 < I) || (2 === f && 592 < I)) return 1;
        for (;;) {
          var B = m - K;
          if (p[q] < t) {
            var u = 0;
            var H = p[q];
          } else
            p[q] > t
              ? ((u = T[O + p[q]]), (H = y[g + p[q]]))
              : ((u = 96), (H = 0));
          L = 1 << (m - K);
          n = x = 1 << k;
          do (x -= L), (e[r + (C >> K) + x] = (B << 24) | (u << 16) | H | 0);
          while (0 !== x);
          for (L = 1 << (m - 1); C & L; ) L >>= 1;
          0 !== L ? ((C &= L - 1), (C += L)) : (C = 0);
          q++;
          if (0 === --G[m]) {
            if (m === E) break;
            m = b[a + p[q]];
          }
          if (m > D && (C & N) !== P) {
            0 === K && (K = D);
            r += n;
            k = m - K;
            for (L = 1 << k; k + K < E; ) {
              L -= G[k + K];
              if (0 >= L) break;
              k++;
              L <<= 1;
            }
            I += 1 << k;
            if ((1 === f && 852 < I) || (2 === f && 592 < I)) return 1;
            P = C & N;
            e[P] = (D << 24) | (k << 16) | (r - l) | 0;
          }
        }
        0 !== C && (e[r + C] = ((m - K) << 24) | 4194304);
        J.R = D;
        return 0;
      };
    },
    function (p, f, l) {
      function h(f, b) {
        if (65534 > b && ((f.subarray && z) || (!f.subarray && A)))
          return String.fromCharCode.apply(null, d.shrinkBuf(f, b));
        for (var a = '', h = 0; h < b; h++) a += String.fromCharCode(f[h]);
        return a;
      }
      var d = l(3),
        A = !0,
        z = !0,
        w = new d.Buf8(256);
      for (p = 0; 256 > p; p++)
        w[p] =
          252 <= p
            ? 6
            : 248 <= p
            ? 5
            : 240 <= p
            ? 4
            : 224 <= p
            ? 3
            : 192 <= p
            ? 2
            : 1;
      w[254] = w[254] = 1;
      f.string2buf = function (f) {
        var b,
          a,
          h = f.length,
          e = 0;
        for (b = 0; b < h; b++) {
          var m = f.charCodeAt(b);
          if (55296 === (m & 64512) && b + 1 < h) {
            var l = f.charCodeAt(b + 1);
            56320 === (l & 64512) &&
              ((m = 65536 + ((m - 55296) << 10) + (l - 56320)), b++);
          }
          e += 128 > m ? 1 : 2048 > m ? 2 : 65536 > m ? 3 : 4;
        }
        var n = new d.Buf8(e);
        for (b = a = 0; a < e; b++)
          (m = f.charCodeAt(b)),
            55296 === (m & 64512) &&
              b + 1 < h &&
              ((l = f.charCodeAt(b + 1)),
              56320 === (l & 64512) &&
                ((m = 65536 + ((m - 55296) << 10) + (l - 56320)), b++)),
            128 > m
              ? (n[a++] = m)
              : (2048 > m
                  ? (n[a++] = 192 | (m >>> 6))
                  : (65536 > m
                      ? (n[a++] = 224 | (m >>> 12))
                      : ((n[a++] = 240 | (m >>> 18)),
                        (n[a++] = 128 | ((m >>> 12) & 63))),
                    (n[a++] = 128 | ((m >>> 6) & 63))),
                (n[a++] = 128 | (m & 63)));
        return n;
      };
      f.yf = function (d) {
        return h(d, d.length);
      };
      f.binstring2buf = function (f) {
        for (var b = new d.Buf8(f.length), a = 0, h = b.length; a < h; a++)
          b[a] = f.charCodeAt(a);
        return b;
      };
      f.buf2string = function (d, b) {
        var a,
          f = b || d.length,
          e = Array(2 * f);
        for (b = a = 0; b < f; ) {
          var l = d[b++];
          if (128 > l) e[a++] = l;
          else {
            var n = w[l];
            if (4 < n) (e[a++] = 65533), (b += n - 1);
            else {
              for (l &= 2 === n ? 31 : 3 === n ? 15 : 7; 1 < n && b < f; )
                (l = (l << 6) | (d[b++] & 63)), n--;
              1 < n
                ? (e[a++] = 65533)
                : 65536 > l
                ? (e[a++] = l)
                : ((l -= 65536),
                  (e[a++] = 55296 | ((l >> 10) & 1023)),
                  (e[a++] = 56320 | (l & 1023)));
            }
          }
        }
        return h(e, a);
      };
      f.utf8border = function (d, b) {
        var a;
        b = b || d.length;
        b > d.length && (b = d.length);
        for (a = b - 1; 0 <= a && 128 === (d[a] & 192); ) a--;
        return 0 > a || 0 === a ? b : a + w[d[a]] > b ? a : b;
      };
    },
    function (p) {
      p.la = {
        Z_NO_FLUSH: 0,
        Se: 1,
        Z_SYNC_FLUSH: 2,
        Pe: 3,
        Z_FINISH: 4,
        He: 5,
        We: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Me: -1,
        Ue: -2,
        Ie: -3,
        Z_BUF_ERROR: -5,
        Re: 0,
        Fe: 1,
        Ee: 9,
        Je: -1,
        Ne: 1,
        Qe: 2,
        Te: 3,
        Oe: 4,
        Ke: 0,
        Ge: 0,
        Ve: 1,
        Xe: 2,
        Le: 8,
      };
    },
    function (p) {
      p.la = {
        2: 'need dictionary',
        1: 'stream end',
        0: '',
        '-1': 'file error',
        '-2': 'stream error',
        '-3': 'data error',
        '-4': 'insufficient memory',
        '-5': 'buffer error',
        '-6': 'incompatible version',
      };
    },
    function (p) {
      p.la = function () {
        this.input = null;
        this.rc = this.avail_in = this.next_in = 0;
        this.output = null;
        this.zb = this.avail_out = this.next_out = 0;
        this.msg = '';
        this.state = null;
        this.me = 2;
        this.Ma = 0;
      };
    },
    function (p) {
      p.la = function () {
        this.ye = this.De = this.time = this.text = 0;
        this.U = null;
        this.mc = 0;
        this.kc = this.name = '';
        this.re = 0;
        this.done = !1;
      };
    },
  ]);
}.call(this || window));
