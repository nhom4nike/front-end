(function () {
  /*
 *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (b) {
    var d = 0;
    return function () {
      return d < b.length ? { done: !1, value: b[d++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (b) {
    return { next: $jscomp.arrayIteratorImpl(b) };
  };
  $jscomp.makeIterator = function (b) {
    var d =
      'undefined' != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    return d ? d.call(b) : $jscomp.arrayIterator(b);
  };
  $jscomp.getGlobal = function (b) {
    return 'undefined' != typeof window && window === b
      ? b
      : 'undefined' != typeof global && null != global
      ? global
      : b;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (b, d, e) {
          b != Array.prototype && b != Object.prototype && (b[d] = e.value);
        };
  $jscomp.polyfill = function (b, d, e, a) {
    if (d) {
      e = $jscomp.global;
      b = b.split('.');
      for (a = 0; a < b.length - 1; a++) {
        var c = b[a];
        c in e || (e[c] = {});
        e = e[c];
      }
      b = b[b.length - 1];
      a = e[b];
      d = d(a);
      d != a &&
        null != d &&
        $jscomp.defineProperty(e, b, {
          configurable: !0,
          writable: !0,
          value: d,
        });
    }
  };
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.polyfill(
    'Promise',
    function (b) {
      function d() {
        this.batch_ = null;
      }
      function e(a) {
        return a instanceof c
          ? a
          : new c(function (b, f) {
              b(a);
            });
      }
      if (b && !$jscomp.FORCE_POLYFILL_PROMISE) return b;
      d.prototype.asyncExecute = function (a) {
        null == this.batch_ && ((this.batch_ = []), this.asyncExecuteBatch_());
        this.batch_.push(a);
        return this;
      };
      d.prototype.asyncExecuteBatch_ = function () {
        var a = this;
        this.asyncExecuteFunction(function () {
          a.executeBatch_();
        });
      };
      var a = $jscomp.global.setTimeout;
      d.prototype.asyncExecuteFunction = function (b) {
        a(b, 0);
      };
      d.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var a = this.batch_;
          this.batch_ = [];
          for (var b = 0; b < a.length; ++b) {
            var f = a[b];
            a[b] = null;
            try {
              f();
            } catch (l) {
              this.asyncThrow_(l);
            }
          }
        }
        this.batch_ = null;
      };
      d.prototype.asyncThrow_ = function (a) {
        this.asyncExecuteFunction(function () {
          throw a;
        });
      };
      var c = function (a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var b = this.createResolveAndReject_();
        try {
          a(b.resolve, b.reject);
        } catch (f) {
          b.reject(f);
        }
      };
      c.prototype.createResolveAndReject_ = function () {
        function a(a) {
          return function (l) {
            f || ((f = !0), a.call(b, l));
          };
        }
        var b = this,
          f = !1;
        return { resolve: a(this.resolveTo_), reject: a(this.reject_) };
      };
      c.prototype.resolveTo_ = function (a) {
        if (a === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (a instanceof c) this.settleSameAsPromise_(a);
        else {
          a: switch (typeof a) {
            case 'object':
              var b = null != a;
              break a;
            case 'function':
              b = !0;
              break a;
            default:
              b = !1;
          }
          b ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
        }
      };
      c.prototype.resolveToNonPromiseObj_ = function (a) {
        var b = void 0;
        try {
          b = a.then;
        } catch (f) {
          this.reject_(f);
          return;
        }
        'function' == typeof b
          ? this.settleSameAsThenable_(b, a)
          : this.fulfill_(a);
      };
      c.prototype.reject_ = function (a) {
        this.settle_(2, a);
      };
      c.prototype.fulfill_ = function (a) {
        this.settle_(1, a);
      };
      c.prototype.settle_ = function (a, b) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              a +
              ', ' +
              b +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = a;
        this.result_ = b;
        this.executeOnSettledCallbacks_();
      };
      c.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var a = 0; a < this.onSettledCallbacks_.length; ++a)
            g.asyncExecute(this.onSettledCallbacks_[a]);
          this.onSettledCallbacks_ = null;
        }
      };
      var g = new d();
      c.prototype.settleSameAsPromise_ = function (a) {
        var b = this.createResolveAndReject_();
        a.callWhenSettled_(b.resolve, b.reject);
      };
      c.prototype.settleSameAsThenable_ = function (a, b) {
        var f = this.createResolveAndReject_();
        try {
          a.call(b, f.resolve, f.reject);
        } catch (l) {
          f.reject(l);
        }
      };
      c.prototype.then = function (a, b) {
        function f(a, f) {
          return 'function' == typeof a
            ? function (f) {
                try {
                  l(a(f));
                } catch (q) {
                  d(q);
                }
              }
            : f;
        }
        var l,
          d,
          e = new c(function (a, f) {
            l = a;
            d = f;
          });
        this.callWhenSettled_(f(a, l), f(b, d));
        return e;
      };
      c.prototype.catch = function (a) {
        return this.then(void 0, a);
      };
      c.prototype.callWhenSettled_ = function (a, b) {
        function f() {
          switch (l.state_) {
            case 1:
              a(l.result_);
              break;
            case 2:
              b(l.result_);
              break;
            default:
              throw Error('Unexpected state: ' + l.state_);
          }
        }
        var l = this;
        null == this.onSettledCallbacks_
          ? g.asyncExecute(f)
          : this.onSettledCallbacks_.push(f);
      };
      c.resolve = e;
      c.reject = function (a) {
        return new c(function (b, f) {
          f(a);
        });
      };
      c.race = function (a) {
        return new c(function (b, f) {
          for (
            var l = $jscomp.makeIterator(a), d = l.next();
            !d.done;
            d = l.next()
          )
            e(d.value).callWhenSettled_(b, f);
        });
      };
      c.all = function (a) {
        var b = $jscomp.makeIterator(a),
          f = b.next();
        return f.done
          ? e([])
          : new c(function (a, d) {
              function l(f) {
                return function (b) {
                  c[f] = b;
                  w--;
                  0 == w && a(c);
                };
              }
              var c = [],
                w = 0;
              do
                c.push(void 0),
                  w++,
                  e(f.value).callWhenSettled_(l(c.length - 1), d),
                  (f = b.next());
              while (!f.done);
            });
      };
      return c;
    },
    'es6',
    'es3'
  );
  $jscomp.checkStringArgs = function (b, d, e) {
    if (null == b)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          e +
          ' must not be null or undefined'
      );
    if (d instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          e +
          ' must not be a regular expression'
      );
    return b + '';
  };
  $jscomp.polyfill(
    'String.prototype.endsWith',
    function (b) {
      return b
        ? b
        : function (b, e) {
            var a = $jscomp.checkStringArgs(this, b, 'endsWith');
            b += '';
            void 0 === e && (e = a.length);
            e = Math.max(0, Math.min(e | 0, a.length));
            for (var c = b.length; 0 < c && 0 < e; )
              if (a[--e] != b[--c]) return !1;
            return 0 >= c;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var b = {},
        d = Object.create(
          new $jscomp.global.Proxy(b, {
            get: function (e, a, c) {
              return e == b && 'q' == a && c == d;
            },
          })
        );
      return !0 === d.q;
    } catch (e) {
      return !1;
    }
  };
  $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
  $jscomp.ES6_CONFORMANCE =
    $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS &&
    $jscomp.checkEs6ConformanceViaProxy();
  $jscomp.SYMBOL_PREFIX = 'jscomp_symbol_';
  $jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
  };
  $jscomp.Symbol = (function () {
    var b = 0;
    return function (d) {
      return $jscomp.SYMBOL_PREFIX + (d || '') + b++;
    };
  })();
  $jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.iterator;
    b ||
      (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator'));
    'function' != typeof Array.prototype[b] &&
      $jscomp.defineProperty(Array.prototype, b, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
        },
      });
    $jscomp.initSymbolIterator = function () {};
  };
  $jscomp.initSymbolAsyncIterator = function () {
    $jscomp.initSymbol();
    var b = $jscomp.global.Symbol.asyncIterator;
    b ||
      (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol(
        'asyncIterator'
      ));
    $jscomp.initSymbolAsyncIterator = function () {};
  };
  $jscomp.iteratorPrototype = function (b) {
    $jscomp.initSymbolIterator();
    b = { next: b };
    b[$jscomp.global.Symbol.iterator] = function () {
      return this;
    };
    return b;
  };
  $jscomp.owns = function (b, d) {
    return Object.prototype.hasOwnProperty.call(b, d);
  };
  $jscomp.polyfill(
    'WeakMap',
    function (b) {
      function d() {
        if (!b || !Object.seal) return !1;
        try {
          var a = Object.seal({}),
            l = Object.seal({}),
            c = new b([
              [a, 2],
              [l, 3],
            ]);
          if (2 != c.get(a) || 3 != c.get(l)) return !1;
          c.delete(a);
          c.set(l, 4);
          return !c.has(a) && 4 == c.get(l);
        } catch (p) {
          return !1;
        }
      }
      function e() {}
      function a(a) {
        if (!$jscomp.owns(a, g)) {
          var f = new e();
          $jscomp.defineProperty(a, g, { value: f });
        }
      }
      function c(f) {
        var b = Object[f];
        b &&
          (Object[f] = function (f) {
            if (f instanceof e) return f;
            a(f);
            return b(f);
          });
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (b && $jscomp.ES6_CONFORMANCE) return b;
      } else if (d()) return b;
      var g = '$jscomp_hidden_' + Math.random();
      c('freeze');
      c('preventExtensions');
      c('seal');
      var k = 0,
        m = function (a) {
          this.id_ = (k += Math.random() + 1).toString();
          if (a) {
            a = $jscomp.makeIterator(a);
            for (var f; !(f = a.next()).done; )
              (f = f.value), this.set(f[0], f[1]);
          }
        };
      m.prototype.set = function (f, b) {
        a(f);
        if (!$jscomp.owns(f, g)) throw Error('WeakMap key fail: ' + f);
        f[g][this.id_] = b;
        return this;
      };
      m.prototype.get = function (a) {
        return $jscomp.owns(a, g) ? a[g][this.id_] : void 0;
      };
      m.prototype.has = function (a) {
        return $jscomp.owns(a, g) && $jscomp.owns(a[g], this.id_);
      };
      m.prototype.delete = function (a) {
        return $jscomp.owns(a, g) && $jscomp.owns(a[g], this.id_)
          ? delete a[g][this.id_]
          : !1;
      };
      return m;
    },
    'es6',
    'es3'
  );
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    'Map',
    function (b) {
      function d() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !b ||
          'function' != typeof b ||
          !b.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var a = Object.seal({ x: 4 }),
            c = new b($jscomp.makeIterator([[a, 's']]));
          if (
            's' != c.get(a) ||
            1 != c.size ||
            c.get({ x: 4 }) ||
            c.set({ x: 4 }, 't') != c ||
            2 != c.size
          )
            return !1;
          var d = c.entries(),
            e = d.next();
          if (e.done || e.value[0] != a || 's' != e.value[1]) return !1;
          e = d.next();
          return e.done ||
            4 != e.value[0].x ||
            't' != e.value[1] ||
            !d.next().done
            ? !1
            : !0;
        } catch (h) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (b && $jscomp.ES6_CONFORMANCE) return b;
      } else if (d()) return b;
      $jscomp.initSymbolIterator();
      var e = new WeakMap(),
        a = function (a) {
          this.data_ = {};
          this.head_ = k();
          this.size = 0;
          if (a) {
            a = $jscomp.makeIterator(a);
            for (var b; !(b = a.next()).done; )
              (b = b.value), this.set(b[0], b[1]);
          }
        };
      a.prototype.set = function (a, b) {
        a = 0 === a ? 0 : a;
        var f = c(this, a);
        f.list || (f.list = this.data_[f.id] = []);
        f.entry
          ? (f.entry.value = b)
          : ((f.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: a,
              value: b,
            }),
            f.list.push(f.entry),
            (this.head_.previous.next = f.entry),
            (this.head_.previous = f.entry),
            this.size++);
        return this;
      };
      a.prototype.delete = function (a) {
        a = c(this, a);
        return a.entry && a.list
          ? (a.list.splice(a.index, 1),
            a.list.length || delete this.data_[a.id],
            (a.entry.previous.next = a.entry.next),
            (a.entry.next.previous = a.entry.previous),
            (a.entry.head = null),
            this.size--,
            !0)
          : !1;
      };
      a.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = k();
        this.size = 0;
      };
      a.prototype.has = function (a) {
        return !!c(this, a).entry;
      };
      a.prototype.get = function (a) {
        return (a = c(this, a).entry) && a.value;
      };
      a.prototype.entries = function () {
        return g(this, function (a) {
          return [a.key, a.value];
        });
      };
      a.prototype.keys = function () {
        return g(this, function (a) {
          return a.key;
        });
      };
      a.prototype.values = function () {
        return g(this, function (a) {
          return a.value;
        });
      };
      a.prototype.forEach = function (a, b) {
        for (var f = this.entries(), c; !(c = f.next()).done; )
          (c = c.value), a.call(b, c[1], c[0], this);
      };
      a.prototype[Symbol.iterator] = a.prototype.entries;
      var c = function (a, b) {
          var c = b && typeof b;
          'object' == c || 'function' == c
            ? e.has(b)
              ? (c = e.get(b))
              : ((c = '' + ++m), e.set(b, c))
            : (c = 'p_' + b);
          var f = a.data_[c];
          if (f && $jscomp.owns(a.data_, c))
            for (a = 0; a < f.length; a++) {
              var d = f[a];
              if ((b !== b && d.key !== d.key) || b === d.key)
                return { id: c, list: f, index: a, entry: d };
            }
          return { id: c, list: f, index: -1, entry: void 0 };
        },
        g = function (a, b) {
          var c = a.head_;
          return $jscomp.iteratorPrototype(function () {
            if (c) {
              for (; c.head != a.head_; ) c = c.previous;
              for (; c.next != c.head; )
                return (c = c.next), { done: !1, value: b(c) };
              c = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        k = function () {
          var a = {};
          return (a.previous = a.next = a.head = a);
        },
        m = 0;
      return a;
    },
    'es6',
    'es3'
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var b = { a: !0 },
      d = {};
    try {
      return (d.__proto__ = b), d.a;
    } catch (e) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    'function' == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
      ? function (b, d) {
          b.__proto__ = d;
          if (b.__proto__ !== d) throw new TypeError(b + ' is not extensible');
          return b;
        }
      : null;
  $jscomp.polyfill(
    'Object.setPrototypeOf',
    function (b) {
      return b || $jscomp.setPrototypeOf;
    },
    'es6',
    'es5'
  );
  $jscomp.assign =
    'function' == typeof Object.assign
      ? Object.assign
      : function (b, d) {
          for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            if (a) for (var c in a) $jscomp.owns(a, c) && (b[c] = a[c]);
          }
          return b;
        };
  $jscomp.polyfill(
    'Object.assign',
    function (b) {
      return b || $jscomp.assign;
    },
    'es6',
    'es3'
  );
  (function (b) {
    function d(a) {
      if (e[a]) return e[a].exports;
      var c = (e[a] = { i: a, l: !1, exports: {} });
      b[a].call(c.exports, c, c.exports, d);
      c.l = !0;
      return c.exports;
    }
    var e = {};
    d.m = b;
    d.c = e;
    d.d = function (a, b, e) {
      d.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: e });
    };
    d.r = function (a) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(a, '__esModule', { value: !0 });
    };
    d.t = function (a, b) {
      b & 1 && (a = d(a));
      if (b & 8 || (b & 4 && 'object' === typeof a && a && a.__esModule))
        return a;
      var c = Object.create(null);
      d.r(c);
      Object.defineProperty(c, 'default', { enumerable: !0, value: a });
      if (b & 2 && 'string' != typeof a)
        for (var e in a)
          d.d(
            c,
            e,
            function (b) {
              return a[b];
            }.bind(null, e)
          );
      return c;
    };
    d.n = function (a) {
      var b =
        a && a.__esModule
          ? function () {
              return a['default'];
            }
          : function () {
              return a;
            };
      d.d(b, 'a', b);
      return b;
    };
    d.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
    d.p = '/core/office/';
    return d((d.s = 12));
  })([
    function (b, d, e) {
      e.d(d, 'b', function () {
        return c;
      });
      e.d(d, 'a', function () {
        return g;
      });
      var a = e(2),
        c = function (b, c) {
          Object(a.a)('disableLogs') ||
            (c ? console.warn(b + ': ' + c) : console.warn(b));
        },
        g = function (a, b) {};
    },
    function (b, d, e) {
      e.d(d, 'a', function () {
        return r;
      });
      e.d(d, 'b', function () {
        return z;
      });
      e.d(d, 'c', function () {
        return D;
      });
      var a = e(7),
        c = e(0),
        g = e(4),
        k = e(3),
        m = 'undefined' === typeof window ? self : window,
        f = m.importScripts,
        l = !1,
        w = function (a, b) {
          l || (f(m.basePath + 'decode.min.js'), (l = !0));
          a = self.BrotliDecode(Object(k.b)(a));
          return b ? a : Object(k.a)(a);
        },
        p = function (b, c) {
          return Object(a.a)(void 0, void 0, Promise, function () {
            var f;
            return Object(a.b)(this, function (a) {
              switch (a.label) {
                case 0:
                  return l
                    ? [3, 2]
                    : [
                        4,
                        Object(g.b)(
                          self.CoreControls.getWorkerPath() +
                            'external/decode.min.js',
                          'Failed to download decode.min.js',
                          window
                        ),
                      ];
                case 1:
                  a.sent(), (l = !0), (a.label = 2);
                case 2:
                  return (
                    (f = self.BrotliDecode(Object(k.b)(b))),
                    [2, c ? f : Object(k.a)(f)]
                  );
              }
            });
          });
        };
      (function () {
        function a() {
          this.remainingDataArrays = [];
        }
        a.prototype.processRaw = function (a) {
          return a;
        };
        a.prototype.processBrotli = function (a) {
          this.remainingDataArrays.push(a);
          return null;
        };
        a.prototype.GetNextChunk = function (a) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === a[0] && 97 === a[1] && 115 === a[2] && 109 === a[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(a);
        };
        a.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var a = this.arrays, b = 0, c = 0; c < a.length; ++c)
              b += a[c].length;
            b = new Uint8Array(b);
            var f = 0;
            for (c = 0; c < a.length; ++c) {
              var d = a[c];
              b.set(d, f);
              f += d.length;
            }
            return w(b, !0);
          }
          return null;
        };
        return a;
      })();
      var h = !1,
        t = function (a) {
          h || (f(m.basePath + 'pako_inflate.min.js'), (h = !0));
          var b = 10;
          if ('string' === typeof a) {
            if (a.charCodeAt(3) & 8) {
              for (; 0 !== a.charCodeAt(b); ++b);
              ++b;
            }
          } else if (a[3] & 8) {
            for (; 0 !== a[b]; ++b);
            ++b;
          }
          a = Object(k.b)(a);
          a = a.subarray(b, a.length - 8);
          return m.pako.inflate(a, { windowBits: -15 });
        },
        u = function (a, b) {
          return b ? a : Object(k.a)(a);
        },
        q = function (a) {
          var b = !a.shouldOutputArray,
            d = new XMLHttpRequest();
          d.open('GET', a.url, a.isAsync);
          var e = b && d.overrideMimeType;
          d.responseType = e ? 'text' : 'arraybuffer';
          e && d.overrideMimeType('text/plain; charset=x-user-defined');
          d.send();
          var g = function () {
            var g = Date.now();
            var m = e ? d.responseText : new Uint8Array(d.response);
            Object(c.a)('worker', 'Result length is ' + m.length);
            m.length < a.compressedMaximum
              ? ((m = a.decompressFunction(m, a.shouldOutputArray)),
                Object(c.b)(
                  'There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See http://www.pdftron.com/kb_content_encoding for instructions on how to resolve this.'
                ),
                f &&
                  Object(c.a)('worker', 'Decompressed length is ' + m.length))
              : b && (m = Object(k.a)(m));
            f &&
              Object(c.a)(
                'worker',
                a.url + ' Decompression took ' + (Date.now() - g)
              );
            return m;
          };
          if (a.isAsync)
            var m = new Promise(function (b, c) {
              d.onload = function () {
                200 === this.status || 0 === this.status
                  ? b(g())
                  : c('Download Failed ' + a.url);
              };
              d.onerror = function () {
                c('Network error occurred ' + a.url);
              };
            });
          else {
            if (200 === d.status || 0 === d.status) return g();
            throw Error('Failed to load ' + a.url);
          }
          return m;
        },
        r = function (a) {
          var b = a.lastIndexOf('/');
          -1 === b && (b = 0);
          var c = a.slice(b).replace('.', '.br.');
          f ||
            (c.endsWith('.js.mem')
              ? (c = c.replace('.js.mem', '.mem'))
              : c.endsWith('.js') && (c = c.concat('.mem')));
          return a.slice(0, b) + c;
        },
        x = function (a, b) {
          var c = a.lastIndexOf('/');
          -1 === c && (c = 0);
          var f = a.slice(c).replace('.', '.gz.');
          b.url = a.slice(0, c) + f;
          b.decompressFunction = t;
          return q(b);
        },
        n = function (a, b) {
          b.url = r(a);
          b.decompressFunction = f ? w : p;
          return q(b);
        },
        v = function (a, b) {
          a.endsWith('.js.mem')
            ? (a = a.slice(0, -4))
            : a.endsWith('.mem') && (a = a.slice(0, -4) + '.js.mem');
          b.url = a;
          b.decompressFunction = u;
          return q(b);
        },
        y = function (a, b, f, d) {
          return a.catch(function (a) {
            Object(c.b)(a);
            return d(b, f);
          });
        },
        A = function (a, b, f) {
          var d;
          if (f.isAsync) {
            var e = b[0](a, f);
            for (d = 1; d < b.length; ++d) e = y(e, a, f, b[d]);
            return e;
          }
          for (d = 0; d < b.length; ++d)
            try {
              return b[d](a, f);
            } catch (I) {
              Object(c.b)(I.message);
            }
          throw Error('');
        },
        D = function (a, b, c, d) {
          return A(a, [x, n, v], {
            compressedMaximum: b,
            isAsync: c,
            shouldOutputArray: d,
          });
        },
        z = function (a, b, c, d) {
          return A(a, [n, x, v], {
            compressedMaximum: b,
            isAsync: c,
            shouldOutputArray: d,
          });
        };
    },
    function (b, d, e) {
      e.d(d, 'a', function () {
        return g;
      });
      e.d(d, 'b', function () {
        return k;
      });
      var a = {},
        c = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        g = function (a) {
          return c[a];
        },
        k = function (b, d) {
          var f;
          c[b] = d;
          null === (f = a[b]) || void 0 === f
            ? void 0
            : f.forEach(function (a) {
                a(d);
              });
        };
    },
    function (b, d, e) {
      e.d(d, 'b', function () {
        return a;
      });
      e.d(d, 'a', function () {
        return c;
      });
      var a = function (a) {
          if ('string' === typeof a) {
            for (
              var b = new Uint8Array(a.length), c = a.length, d = 0;
              d < c;
              d++
            )
              b[d] = a.charCodeAt(d);
            return b;
          }
          return a;
        },
        c = function (a) {
          if ('string' !== typeof a) {
            for (var b = '', c = 0, d = a.length, e; c < d; )
              (e = a.subarray(c, c + 1024)),
                (c += 1024),
                (b += String.fromCharCode.apply(null, e));
            return b;
          }
          return a;
        };
    },
    function (b, d, e) {
      function a(a, b, c) {
        function d(m) {
          e = e || Date.now();
          return m
            ? (Object(g.a)('load', 'Try instantiateStreaming'),
              fetch(Object(k.a)(a))
                .then(function (a) {
                  return WebAssembly.instantiateStreaming(a, b);
                })
                .catch(function (b) {
                  Object(g.a)(
                    'load',
                    'instantiateStreaming Failed ' + a + ' message ' + b.message
                  );
                  return d(!1);
                }))
            : Object(k.b)(a, c, !0, !0).then(function (a) {
                f = Date.now();
                Object(g.a)('load', 'Request took ' + (f - e) + ' ms');
                return WebAssembly.instantiate(a, b);
              });
        }
        var f, e;
        return d(!!WebAssembly.instantiateStreaming).then(function (a) {
          Object(g.a)(
            'load',
            'WASM compilation took ' + (Date.now() - (f || e)) + ' ms'
          );
          return a;
        });
      }
      function c(a, b, c) {
        return new Promise(function (d) {
          if (!a) return d();
          var f = c.document.createElement('script');
          f.type = 'text/javascript';
          f.onload = function () {
            d();
          };
          f.onerror = function () {
            b && Object(g.b)(b);
            d();
          };
          f.src = a;
          c.document.getElementsByTagName('head')[0].appendChild(f);
        });
      }
      e.d(d, 'a', function () {
        return a;
      });
      e.d(d, 'b', function () {
        return c;
      });
      var g = e(0),
        k = e(1);
    },
    function (b, d, e) {
      e.d(d, 'c', function () {
        return l;
      });
      e.d(d, 'b', function () {
        return w;
      });
      e.d(d, 'a', function () {
        return p;
      });
      var a = 'undefined' === typeof window ? self : window;
      b = (function () {
        var a = navigator.userAgent.toLowerCase();
        return (a =
          /(msie) ([\w.]+)/.exec(a) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(a))
          ? parseInt(a[2], 10)
          : a;
      })();
      var c = (function () {
        var b = a.navigator.userAgent.match(/OPR/),
          c = a.navigator.userAgent.match(/Maxthon/),
          d = a.navigator.userAgent.match(/Edge/);
        return a.navigator.userAgent.match(/Chrome\/(.*?) /) && !b && !c && !d;
      })();
      (function () {
        if (!c) return null;
        var b = a.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return b ? parseInt(b[1], 10) : b;
      })();
      var g =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          a.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!g) return null;
        var b = a.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return b ? parseInt(b[1], 10) : b;
      })();
      d =
        /iPad|iPhone|iPod/.test(a.navigator.platform) ||
        ('MacIntel' === navigator.platform && 1 < navigator.maxTouchPoints);
      (function () {
        var b = a.navigator.userAgent.match(
          /.*\/([0-9\.]+)\s(Safari|Mobile).*/i
        );
        return b ? parseFloat(b[1]) : b;
      })();
      var k =
          /^((?!chrome|android).)*safari/i.test(a.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(a.navigator.userAgent) && d),
        m = a.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!m) return null;
        var b = a.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return b ? parseInt(b[1], 10) : b;
      })();
      b || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      a.navigator.userAgent.indexOf('Android');
      var f = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          a.navigator.userAgent
        ),
        l = function () {
          return k || f;
        },
        w = !(!self.WebAssembly || !self.WebAssembly.validate),
        p =
          -1 < a.navigator.userAgent.indexOf('Edge/16') ||
          -1 < a.navigator.userAgent.indexOf('MSAppHost');
    },
    function (b, d) {
      d = (function () {
        return this;
      })();
      try {
        d = d || new Function('return this')();
      } catch (e) {
        'object' === typeof window && (d = window);
      }
      b.exports = d;
    },
    function (b, d, e) {
      function a(a, b, c, d) {
        function f(a) {
          return a instanceof c
            ? a
            : new c(function (b) {
                b(a);
              });
        }
        return new (c || (c = Promise))(function (c, e) {
          function g(a) {
            try {
              l(d.next(a));
            } catch (r) {
              e(r);
            }
          }
          function m(a) {
            try {
              l(d['throw'](a));
            } catch (r) {
              e(r);
            }
          }
          function l(a) {
            a.done ? c(a.value) : f(a.value).then(g, m);
          }
          l((d = d.apply(a, b || [])).next());
        });
      }
      function c(a, b) {
        function c(a) {
          return function (b) {
            return d([a, b]);
          };
        }
        function d(c) {
          if (g) throw new TypeError('Generator is already executing.');
          for (; e; )
            try {
              if (
                ((g = 1),
                k &&
                  (h =
                    c[0] & 2
                      ? k['return']
                      : c[0]
                      ? k['throw'] || ((h = k['return']) && h.call(k), 0)
                      : k.next) &&
                  !(h = h.call(k, c[1])).done)
              )
                return h;
              if (((k = 0), h)) c = [c[0] & 2, h.value];
              switch (c[0]) {
                case 0:
                case 1:
                  h = c;
                  break;
                case 4:
                  return e.label++, { value: c[1], done: !1 };
                case 5:
                  e.label++;
                  k = c[1];
                  c = [0];
                  continue;
                case 7:
                  c = e.ops.pop();
                  e.trys.pop();
                  continue;
                default:
                  if (
                    !((h = e.trys), (h = 0 < h.length && h[h.length - 1])) &&
                    (6 === c[0] || 2 === c[0])
                  ) {
                    e = 0;
                    continue;
                  }
                  if (3 === c[0] && (!h || (c[1] > h[0] && c[1] < h[3])))
                    e.label = c[1];
                  else if (6 === c[0] && e.label < h[1])
                    (e.label = h[1]), (h = c);
                  else if (h && e.label < h[2]) (e.label = h[2]), e.ops.push(c);
                  else {
                    h[2] && e.ops.pop();
                    e.trys.pop();
                    continue;
                  }
              }
              c = b.call(a, e);
            } catch (q) {
              (c = [6, q]), (k = 0);
            } finally {
              g = h = 0;
            }
          if (c[0] & 5) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        }
        var e = {
            label: 0,
            sent: function () {
              if (h[0] & 1) throw h[1];
              return h[1];
            },
            trys: [],
            ops: [],
          },
          g,
          k,
          h,
          t;
        return (
          (t = { next: c(0), throw: c(1), return: c(2) }),
          'function' === typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
      }
      e.d(d, 'a', function () {
        return a;
      });
      e.d(d, 'b', function () {
        return c;
      });
    },
    function (b, d, e) {
      d.a = function () {
        ArrayBuffer.prototype.slice ||
          (ArrayBuffer.prototype.slice = function (a, b) {
            void 0 === a && (a = 0);
            void 0 === b && (b = this.byteLength);
            a = Math.floor(a);
            b = Math.floor(b);
            0 > a && (a += this.byteLength);
            0 > b && (b += this.byteLength);
            a = Math.min(Math.max(0, a), this.byteLength);
            b = Math.min(Math.max(0, b), this.byteLength);
            if (0 >= b - a) return new ArrayBuffer(0);
            var c = new ArrayBuffer(b - a),
              d = new Uint8Array(c);
            a = new Uint8Array(this, a, b - a);
            d.set(a);
            return c;
          });
      };
    },
    function (b, d, e) {
      e.d(d, 'a', function () {
        return a;
      });
      e(10);
      var a = function (a, b) {
        return function () {};
      };
    },
    function (b, d, e) {
      d.a = function (a) {
        var b = {};
        decodeURIComponent(a.slice(1))
          .split('&')
          .forEach(function (a) {
            a = a.split('=', 2);
            b[a[0]] = a[1];
          });
        return b;
      };
    },
    function (b, d, e) {
      e.d(d, 'a', function () {
        return m;
      });
      var a = e(1),
        c = e(4),
        g = e(5),
        k = (function () {
          function a(a) {
            var b = this;
            this.promise = a.then(function (a) {
              b.response = a;
              b.status = 200;
            });
          }
          a.prototype.addEventListener = function (a, b) {
            this.promise.then(b);
          };
          return a;
        })(),
        m = function (b, d, e) {
          if (!g.b || g.a || Object(g.c)() || e) {
            e = Object(a.b)(
              (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                b +
                '.js.mem',
              d['.js.mem'],
              !1
            );
            var f = Object(a.c)(
              (self.Module.memoryInitializerPrefixURL
                ? self.Module.memoryInitializerPrefixURL
                : '') +
                b +
                '.mem',
              d['.mem'],
              !0,
              !0
            );
            self.Module.memoryInitializerRequest = new k(f);
          } else
            (self.Module.instantiateWasm = function (a, e) {
              return Object(c.a)(b + 'Wasm.wasm', a, d['Wasm.wasm']).then(
                function (a) {
                  e(a.instance);
                }
              );
            }),
              (e = Object(a.b)(b + 'Wasm.js.mem', d['Wasm.js.mem'], !1, !1));
          e = new Blob([e], { type: 'application/javascript' });
          importScripts(URL.createObjectURL(e));
        };
    },
    function (b, d, e) {
      b.exports = e(13);
    },
    function (b, d, e) {
      e.r(d);
      e(14);
      e(19);
      b = e(8);
      e(20);
      Object(b.a)();
    },
    function (b, d, e) {
      (function (a, b) {
        function c(a) {
          '@babel/helpers - typeof';
          c =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    'function' === typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                };
          return c(a);
        }
        (function (a) {
          function d() {
            for (var a = 0; a < B.length; a++) B[a][0](B[a][1]);
            B = [];
            F = !1;
          }
          function f(a, b) {
            B.push([a, b]);
            F || ((F = !0), H(d, 0));
          }
          function g(a, b) {
            function c(a) {
              h(b, a);
            }
            function d(a) {
              u(b, a);
            }
            try {
              a(c, d);
            } catch (C) {
              d(C);
            }
          }
          function k(a) {
            var b = a.owner,
              c = b.state_;
            b = b.data_;
            var d = a[c];
            a = a.then;
            if ('function' === typeof d) {
              c = z;
              try {
                b = d(b);
              } catch (C) {
                u(a, C);
              }
            }
            p(a, b) || (c === z && h(a, b), c === E && u(a, b));
          }
          function p(a, b) {
            var d;
            try {
              if (a === b)
                throw new TypeError(
                  'A promises callback cannot return that same promise.'
                );
              if (b && ('function' === typeof b || 'object' === c(b))) {
                var e = b.then;
                if ('function' === typeof e)
                  return (
                    e.call(
                      b,
                      function (c) {
                        d || ((d = !0), b !== c ? h(a, c) : t(a, c));
                      },
                      function (b) {
                        d || ((d = !0), u(a, b));
                      }
                    ),
                    !0
                  );
              }
            } catch (C) {
              return d || u(a, C), !0;
            }
            return !1;
          }
          function h(a, b) {
            (a !== b && p(a, b)) || t(a, b);
          }
          function t(a, b) {
            a.state_ === A && ((a.state_ = D), (a.data_ = b), f(r, a));
          }
          function u(a, b) {
            a.state_ === A && ((a.state_ = D), (a.data_ = b), f(x, a));
          }
          function q(a) {
            var b = a.then_;
            a.then_ = void 0;
            for (a = 0; a < b.length; a++) k(b[a]);
          }
          function r(a) {
            a.state_ = z;
            q(a);
          }
          function x(a) {
            a.state_ = E;
            q(a);
          }
          function n(a) {
            if ('function' !== typeof a)
              throw new TypeError(
                'Promise constructor takes a function argument'
              );
            if (!(this instanceof n))
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              );
            this.then_ = [];
            g(a, this);
          }
          a.createPromiseCapability = function () {
            var a = {};
            a.promise = new n(function (b, c) {
              a.resolve = b;
              a.reject = c;
            });
            return a;
          };
          var v = a.Promise,
            y =
              v &&
              'resolve' in v &&
              'reject' in v &&
              'all' in v &&
              'race' in v &&
              (function () {
                var a;
                new v(function (b) {
                  a = b;
                });
                return 'function' === typeof a;
              })();
          'undefined' !== typeof exports && exports
            ? ((exports.Promise = y ? v : n), (exports.Polyfill = n))
            : 'function' === typeof define && e(18)
            ? define(function () {
                return y ? v : n;
              })
            : y || (a.Promise = n);
          var A = 'pending',
            D = 'sealed',
            z = 'fulfilled',
            E = 'rejected',
            G = function () {},
            H = 'undefined' !== typeof b ? b : setTimeout,
            B = [],
            F;
          n.prototype = {
            constructor: n,
            state_: A,
            then_: null,
            data_: void 0,
            then: function (a, b) {
              a = {
                owner: this,
                then: new this.constructor(G),
                fulfilled: a,
                rejected: b,
              };
              this.state_ === z || this.state_ === E
                ? f(k, a)
                : this.then_.push(a);
              return a.then;
            },
            catch: function (a) {
              return this.then(null, a);
            },
          };
          n.all = function (a) {
            if ('[object Array]' !== Object.prototype.toString.call(a))
              throw new TypeError('You must pass an array to Promise.all().');
            return new this(function (b, c) {
              function d(a) {
                f++;
                return function (c) {
                  e[a] = c;
                  --f || b(e);
                };
              }
              for (var e = [], f = 0, g = 0, m; g < a.length; g++)
                (m = a[g]) && 'function' === typeof m.then
                  ? m.then(d(g), c)
                  : (e[g] = m);
              f || b(e);
            });
          };
          n.race = function (a) {
            if ('[object Array]' !== Object.prototype.toString.call(a))
              throw new TypeError('You must pass an array to Promise.race().');
            return new this(function (b, c) {
              for (var d = 0, e; d < a.length; d++)
                (e = a[d]) && 'function' === typeof e.then
                  ? e.then(b, c)
                  : b(e);
            });
          };
          n.resolve = function (a) {
            return a && 'object' === c(a) && a.constructor === this
              ? a
              : new this(function (b) {
                  b(a);
                });
          };
          n.reject = function (a) {
            return new this(function (b, c) {
              c(a);
            });
          };
        })(
          'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof a
            ? a
            : 'undefined' !== typeof self
            ? self
            : void 0
        );
      }.call(this, e(6), e(15).setImmediate));
    },
    function (b, d, e) {
      (function (a) {
        function b(a, b) {
          this._id = a;
          this._clearFn = b;
        }
        var g =
            ('undefined' !== typeof a && a) ||
            ('undefined' !== typeof self && self) ||
            window,
          k = Function.prototype.apply;
        d.setTimeout = function () {
          return new b(k.call(setTimeout, g, arguments), clearTimeout);
        };
        d.setInterval = function () {
          return new b(k.call(setInterval, g, arguments), clearInterval);
        };
        d.clearTimeout = d.clearInterval = function (a) {
          a && a.close();
        };
        b.prototype.unref = b.prototype.ref = function () {};
        b.prototype.close = function () {
          this._clearFn.call(g, this._id);
        };
        d.enroll = function (a, b) {
          clearTimeout(a._idleTimeoutId);
          a._idleTimeout = b;
        };
        d.unenroll = function (a) {
          clearTimeout(a._idleTimeoutId);
          a._idleTimeout = -1;
        };
        d._unrefActive = d.active = function (a) {
          clearTimeout(a._idleTimeoutId);
          var b = a._idleTimeout;
          0 <= b &&
            (a._idleTimeoutId = setTimeout(function () {
              a._onTimeout && a._onTimeout();
            }, b));
        };
        e(16);
        d.setImmediate =
          ('undefined' !== typeof self && self.setImmediate) ||
          ('undefined' !== typeof a && a.setImmediate) ||
          (this && this.setImmediate);
        d.clearImmediate =
          ('undefined' !== typeof self && self.clearImmediate) ||
          ('undefined' !== typeof a && a.clearImmediate) ||
          (this && this.clearImmediate);
      }.call(this, e(6)));
    },
    function (b, d, e) {
      (function (a, b) {
        (function (a, c) {
          function d(a) {
            delete r[a];
          }
          function e(a) {
            if (x) setTimeout(e, 0, a);
            else {
              var b = r[a];
              if (b) {
                x = !0;
                try {
                  var f = b.callback,
                    g = b.args;
                  switch (g.length) {
                    case 0:
                      f();
                      break;
                    case 1:
                      f(g[0]);
                      break;
                    case 2:
                      f(g[0], g[1]);
                      break;
                    case 3:
                      f(g[0], g[1], g[2]);
                      break;
                    default:
                      f.apply(c, g);
                  }
                } finally {
                  d(a), (x = !1);
                }
              }
            }
          }
          function g() {
            v = function (a) {
              b.nextTick(function () {
                e(a);
              });
            };
          }
          function k() {
            if (a.postMessage && !a.importScripts) {
              var b = !0,
                c = a.onmessage;
              a.onmessage = function () {
                b = !1;
              };
              a.postMessage('', '*');
              a.onmessage = c;
              return b;
            }
          }
          function p() {
            var b = 'setImmediate$' + Math.random() + '$',
              c = function (c) {
                c.source === a &&
                  'string' === typeof c.data &&
                  0 === c.data.indexOf(b) &&
                  e(+c.data.slice(b.length));
              };
            a.addEventListener
              ? a.addEventListener('message', c, !1)
              : a.attachEvent('onmessage', c);
            v = function (c) {
              a.postMessage(b + c, '*');
            };
          }
          function h() {
            var a = new MessageChannel();
            a.port1.onmessage = function (a) {
              e(a.data);
            };
            v = function (b) {
              a.port2.postMessage(b);
            };
          }
          function t() {
            var a = n.documentElement;
            v = function (b) {
              var c = n.createElement('script');
              c.onreadystatechange = function () {
                e(b);
                c.onreadystatechange = null;
                a.removeChild(c);
                c = null;
              };
              a.appendChild(c);
            };
          }
          function u() {
            v = function (a) {
              setTimeout(e, 0, a);
            };
          }
          if (!a.setImmediate) {
            var q = 1,
              r = {},
              x = !1,
              n = a.document,
              v,
              y = Object.getPrototypeOf && Object.getPrototypeOf(a);
            y = y && y.setTimeout ? y : a;
            '[object process]' === {}.toString.call(a.process)
              ? g()
              : k()
              ? p()
              : a.MessageChannel
              ? h()
              : n && 'onreadystatechange' in n.createElement('script')
              ? t()
              : u();
            y.setImmediate = function (a) {
              'function' !== typeof a && (a = new Function('' + a));
              for (
                var b = Array(arguments.length - 1), c = 0;
                c < b.length;
                c++
              )
                b[c] = arguments[c + 1];
              r[q] = { callback: a, args: b };
              v(q);
              return q++;
            };
            y.clearImmediate = d;
          }
        })(
          'undefined' === typeof self
            ? 'undefined' === typeof a
              ? this
              : a
            : self
        );
      }.call(this, e(6), e(17)));
    },
    function (b, d) {
      function e() {
        throw Error('setTimeout has not been defined');
      }
      function a() {
        throw Error('clearTimeout has not been defined');
      }
      function c(a) {
        if (w === setTimeout) return setTimeout(a, 0);
        if ((w === e || !w) && setTimeout)
          return (w = setTimeout), setTimeout(a, 0);
        try {
          return w(a, 0);
        } catch (x) {
          try {
            return w.call(null, a, 0);
          } catch (n) {
            return w.call(this, a, 0);
          }
        }
      }
      function g(b) {
        if (p === clearTimeout) return clearTimeout(b);
        if ((p === a || !p) && clearTimeout)
          return (p = clearTimeout), clearTimeout(b);
        try {
          return p(b);
        } catch (x) {
          try {
            return p.call(null, b);
          } catch (n) {
            return p.call(this, b);
          }
        }
      }
      function k() {
        t &&
          u &&
          ((t = !1), u.length ? (h = u.concat(h)) : (q = -1), h.length && m());
      }
      function m() {
        if (!t) {
          var a = c(k);
          t = !0;
          for (var b = h.length; b; ) {
            u = h;
            for (h = []; ++q < b; ) u && u[q].run();
            q = -1;
            b = h.length;
          }
          u = null;
          t = !1;
          g(a);
        }
      }
      function f(a, b) {
        this.fun = a;
        this.array = b;
      }
      function l() {}
      b = b.exports = {};
      try {
        var w = 'function' === typeof setTimeout ? setTimeout : e;
      } catch (r) {
        w = e;
      }
      try {
        var p = 'function' === typeof clearTimeout ? clearTimeout : a;
      } catch (r) {
        p = a;
      }
      var h = [],
        t = !1,
        u,
        q = -1;
      b.nextTick = function (a) {
        var b = Array(arguments.length - 1);
        if (1 < arguments.length)
          for (var d = 1; d < arguments.length; d++) b[d - 1] = arguments[d];
        h.push(new f(a, b));
        1 !== h.length || t || c(m);
      };
      f.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      b.title = 'browser';
      b.browser = !0;
      b.env = {};
      b.argv = [];
      b.version = '';
      b.versions = {};
      b.on = l;
      b.addListener = l;
      b.once = l;
      b.off = l;
      b.removeListener = l;
      b.removeAllListeners = l;
      b.emit = l;
      b.prependListener = l;
      b.prependOnceListener = l;
      b.listeners = function (a) {
        return [];
      };
      b.binding = function (a) {
        throw Error('process.binding is not supported');
      };
      b.cwd = function () {
        return '/';
      };
      b.chdir = function (a) {
        throw Error('process.chdir is not supported');
      };
      b.umask = function () {
        return 0;
      };
    },
    function (b, d) {
      b.exports = {};
    },
    function (b, d, e) {
      (function (a) {
        'undefined' === typeof a.crypto &&
          (a.crypto = {
            getRandomValues: function (a) {
              for (var b = 0; b < a.length; b++) a[b] = 256 * Math.random();
            },
          });
      })('undefined' === typeof window ? self : window);
    },
    function (b, d, e) {
      function a(b) {
        '@babel/helpers - typeof';
        a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' === typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              };
        return a(b);
      }
      var c = e(9),
        g = e(11),
        k = null;
      (function (b) {
        function d() {
          p = function () {};
        }
        function e(b) {
          var c = [];
          return {
            resource_array: c,
            msg: JSON.stringify(b.data, function (b, d) {
              if (
                'object' === a(d) &&
                ((b = null),
                d instanceof Uint8Array
                  ? (b = d)
                  : d instanceof ArrayBuffer && (b = new Uint8Array(d)),
                b)
              ) {
                d = t(b.length);
                var e = u(d);
                e && new Uint8Array(Module.HEAPU8.buffer, e, b.length).set(b);
                c.push(d);
                return { __trn_res_id: d };
              }
              return d;
            }),
          };
        }
        function m(a) {
          a = e(a);
          h(a.msg);
        }
        var p, h, t, u;
        b.basePath = '../';
        var q = b.officeWorkerPath || '';
        b.workerBasePath && (b.basePath = b.workerBasePath);
        var r = (function (a) {
          var b = {};
          decodeURIComponent(a.slice(1))
            .split('&')
            .forEach(function (a) {
              a = a.split('=', 2);
              b[a[0]] = a[1];
            });
          return b;
        })(b.location.search);
        b.basePath = r.externalPath ? r.externalPath : b.basePath + 'external/';
        importScripts(''.concat(b.basePath, 'Promise.js'));
        var x = [];
        onmessage = function (a) {
          x || (x = []);
          x.push(a);
        };
        b.ContinueFunc = function (a) {
          p('ContinueFunc called');
          setTimeout(function () {
            onmessage({ data: { action: 'continue' } });
          }, a);
        };
        if (r.pdfWorkerPath) var n = r.pdfWorkerPath;
        if (r.officeAsmPath) var v = r.officeAsmPath;
        b.Module = {
          memoryInitializerPrefixURL: n,
          asmjsPrefix: v,
          onRuntimeInitialized: function () {
            p || d();
            var a = Date.now() - k;
            Object(c.a)(
              'load',
              'time duration from start to ready: '.concat(JSON.stringify(a))
            );
            h = function (a) {
              if (null !== a && void 0 !== a && 0 !== a) {
                var b = (a.length << 2) + 1,
                  c = Module._malloc(b);
                0 < Module.stringToUTF8(a, c, b) && Module._TRN_OnMessage(c);
              }
            };
            t = function (a) {
              return Module._TRN_CreateBufferResource(a);
            };
            u = function (a) {
              return Module._TRN_GetResourcePointer(a);
            };
            p('OnReady called');
            onmessage = m;
            Module._TRN_InitWorker();
            for (a = 0; a < x.length; ++a) onmessage(x[a]);
            x = null;
          },
          fetchSelf: function () {
            k = Date.now();
            Object(g.a)(
              ''.concat(q, 'WebOfficeWorker'),
              {
                'Wasm.wasm': 5e6,
                'Wasm.js.mem': 1e5,
                '.js.mem': 5e6,
                '.mem': 3e6,
              },
              !!navigator.userAgent.match(/Edge/i)
            );
          },
          noExitRuntime: !0,
        };
        b.Module.fetchSelf();
      })('undefined' === typeof window ? self : window);
    },
  ]);
}.call(this || window));