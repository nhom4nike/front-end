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
  $jscomp.arrayIteratorImpl = function (c) {
    var l = 0;
    return function () {
      return l < c.length ? { done: !1, value: c[l++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (c) {
    return { next: $jscomp.arrayIteratorImpl(c) };
  };
  $jscomp.makeIterator = function (c) {
    var l =
      'undefined' != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
    return l ? l.call(c) : $jscomp.arrayIterator(c);
  };
  $jscomp.getGlobal = function (c) {
    return 'undefined' != typeof window && window === c
      ? c
      : 'undefined' != typeof global && null != global
      ? global
      : c;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (c, l, h) {
          c != Array.prototype && c != Object.prototype && (c[l] = h.value);
        };
  $jscomp.polyfill = function (c, l, h, f) {
    if (l) {
      h = $jscomp.global;
      c = c.split('.');
      for (f = 0; f < c.length - 1; f++) {
        var n = c[f];
        n in h || (h[n] = {});
        h = h[n];
      }
      c = c[c.length - 1];
      f = h[c];
      l = l(f);
      l != f &&
        null != l &&
        $jscomp.defineProperty(h, c, {
          configurable: !0,
          writable: !0,
          value: l,
        });
    }
  };
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.polyfill(
    'Promise',
    function (c) {
      function l() {
        this.batch_ = null;
      }
      function h(b) {
        return b instanceof n
          ? b
          : new n(function (a, e) {
              a(b);
            });
      }
      if (c && !$jscomp.FORCE_POLYFILL_PROMISE) return c;
      l.prototype.asyncExecute = function (b) {
        null == this.batch_ && ((this.batch_ = []), this.asyncExecuteBatch_());
        this.batch_.push(b);
        return this;
      };
      l.prototype.asyncExecuteBatch_ = function () {
        var b = this;
        this.asyncExecuteFunction(function () {
          b.executeBatch_();
        });
      };
      var f = $jscomp.global.setTimeout;
      l.prototype.asyncExecuteFunction = function (b) {
        f(b, 0);
      };
      l.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var b = this.batch_;
          this.batch_ = [];
          for (var a = 0; a < b.length; ++a) {
            var e = b[a];
            b[a] = null;
            try {
              e();
            } catch (g) {
              this.asyncThrow_(g);
            }
          }
        }
        this.batch_ = null;
      };
      l.prototype.asyncThrow_ = function (b) {
        this.asyncExecuteFunction(function () {
          throw b;
        });
      };
      var n = function (b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var a = this.createResolveAndReject_();
        try {
          b(a.resolve, a.reject);
        } catch (e) {
          a.reject(e);
        }
      };
      n.prototype.createResolveAndReject_ = function () {
        function b(g) {
          return function (b) {
            e || ((e = !0), g.call(a, b));
          };
        }
        var a = this,
          e = !1;
        return { resolve: b(this.resolveTo_), reject: b(this.reject_) };
      };
      n.prototype.resolveTo_ = function (b) {
        if (b === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (b instanceof n) this.settleSameAsPromise_(b);
        else {
          a: switch (typeof b) {
            case 'object':
              var a = null != b;
              break a;
            case 'function':
              a = !0;
              break a;
            default:
              a = !1;
          }
          a ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
        }
      };
      n.prototype.resolveToNonPromiseObj_ = function (b) {
        var a = void 0;
        try {
          a = b.then;
        } catch (e) {
          this.reject_(e);
          return;
        }
        'function' == typeof a
          ? this.settleSameAsThenable_(a, b)
          : this.fulfill_(b);
      };
      n.prototype.reject_ = function (b) {
        this.settle_(2, b);
      };
      n.prototype.fulfill_ = function (b) {
        this.settle_(1, b);
      };
      n.prototype.settle_ = function (b, a) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              b +
              ', ' +
              a +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = b;
        this.result_ = a;
        this.executeOnSettledCallbacks_();
      };
      n.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var f = 0; f < this.onSettledCallbacks_.length; ++f)
            b.asyncExecute(this.onSettledCallbacks_[f]);
          this.onSettledCallbacks_ = null;
        }
      };
      var b = new l();
      n.prototype.settleSameAsPromise_ = function (b) {
        var a = this.createResolveAndReject_();
        b.callWhenSettled_(a.resolve, a.reject);
      };
      n.prototype.settleSameAsThenable_ = function (b, a) {
        var e = this.createResolveAndReject_();
        try {
          b.call(a, e.resolve, e.reject);
        } catch (g) {
          e.reject(g);
        }
      };
      n.prototype.then = function (b, a) {
        function e(a, e) {
          return 'function' == typeof a
            ? function (e) {
                try {
                  g(a(e));
                } catch (v) {
                  p(v);
                }
              }
            : e;
        }
        var g,
          p,
          u = new n(function (a, e) {
            g = a;
            p = e;
          });
        this.callWhenSettled_(e(b, g), e(a, p));
        return u;
      };
      n.prototype.catch = function (b) {
        return this.then(void 0, b);
      };
      n.prototype.callWhenSettled_ = function (f, a) {
        function e() {
          switch (g.state_) {
            case 1:
              f(g.result_);
              break;
            case 2:
              a(g.result_);
              break;
            default:
              throw Error('Unexpected state: ' + g.state_);
          }
        }
        var g = this;
        null == this.onSettledCallbacks_
          ? b.asyncExecute(e)
          : this.onSettledCallbacks_.push(e);
      };
      n.resolve = h;
      n.reject = function (b) {
        return new n(function (a, e) {
          e(b);
        });
      };
      n.race = function (b) {
        return new n(function (a, e) {
          for (
            var g = $jscomp.makeIterator(b), p = g.next();
            !p.done;
            p = g.next()
          )
            h(p.value).callWhenSettled_(a, e);
        });
      };
      n.all = function (b) {
        var a = $jscomp.makeIterator(b),
          e = a.next();
        return e.done
          ? h([])
          : new n(function (g, b) {
              function p(a) {
                return function (e) {
                  m[a] = e;
                  f--;
                  0 == f && g(m);
                };
              }
              var m = [],
                f = 0;
              do
                m.push(void 0),
                  f++,
                  h(e.value).callWhenSettled_(p(m.length - 1), b),
                  (e = a.next());
              while (!e.done);
            });
      };
      return n;
    },
    'es6',
    'es3'
  );
  $jscomp.checkStringArgs = function (c, l, h) {
    if (null == c)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          h +
          ' must not be null or undefined'
      );
    if (l instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          h +
          ' must not be a regular expression'
      );
    return c + '';
  };
  $jscomp.polyfill(
    'String.prototype.endsWith',
    function (c) {
      return c
        ? c
        : function (c, h) {
            var f = $jscomp.checkStringArgs(this, c, 'endsWith');
            c += '';
            void 0 === h && (h = f.length);
            h = Math.max(0, Math.min(h | 0, f.length));
            for (var n = c.length; 0 < n && 0 < h; )
              if (f[--h] != c[--n]) return !1;
            return 0 >= n;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.checkEs6ConformanceViaProxy = function () {
    try {
      var c = {},
        l = Object.create(
          new $jscomp.global.Proxy(c, {
            get: function (h, f, n) {
              return h == c && 'q' == f && n == l;
            },
          })
        );
      return !0 === l.q;
    } catch (h) {
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
    var c = 0;
    return function (l) {
      return $jscomp.SYMBOL_PREFIX + (l || '') + c++;
    };
  })();
  $jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var c = $jscomp.global.Symbol.iterator;
    c ||
      (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator'));
    'function' != typeof Array.prototype[c] &&
      $jscomp.defineProperty(Array.prototype, c, {
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
    var c = $jscomp.global.Symbol.asyncIterator;
    c ||
      (c = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol(
        'asyncIterator'
      ));
    $jscomp.initSymbolAsyncIterator = function () {};
  };
  $jscomp.iteratorPrototype = function (c) {
    $jscomp.initSymbolIterator();
    c = { next: c };
    c[$jscomp.global.Symbol.iterator] = function () {
      return this;
    };
    return c;
  };
  $jscomp.owns = function (c, l) {
    return Object.prototype.hasOwnProperty.call(c, l);
  };
  $jscomp.polyfill(
    'WeakMap',
    function (c) {
      function l() {
        if (!c || !Object.seal) return !1;
        try {
          var a = Object.seal({}),
            g = Object.seal({}),
            b = new c([
              [a, 2],
              [g, 3],
            ]);
          if (2 != b.get(a) || 3 != b.get(g)) return !1;
          b.delete(a);
          b.set(g, 4);
          return !b.has(a) && 4 == b.get(g);
        } catch (u) {
          return !1;
        }
      }
      function h() {}
      function f(a) {
        if (!$jscomp.owns(a, b)) {
          var e = new h();
          $jscomp.defineProperty(a, b, { value: e });
        }
      }
      function n(a) {
        var e = Object[a];
        e &&
          (Object[a] = function (a) {
            if (a instanceof h) return a;
            f(a);
            return e(a);
          });
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (c && $jscomp.ES6_CONFORMANCE) return c;
      } else if (l()) return c;
      var b = '$jscomp_hidden_' + Math.random();
      n('freeze');
      n('preventExtensions');
      n('seal');
      var t = 0,
        a = function (a) {
          this.id_ = (t += Math.random() + 1).toString();
          if (a) {
            a = $jscomp.makeIterator(a);
            for (var e; !(e = a.next()).done; )
              (e = e.value), this.set(e[0], e[1]);
          }
        };
      a.prototype.set = function (a, g) {
        f(a);
        if (!$jscomp.owns(a, b)) throw Error('WeakMap key fail: ' + a);
        a[b][this.id_] = g;
        return this;
      };
      a.prototype.get = function (a) {
        return $jscomp.owns(a, b) ? a[b][this.id_] : void 0;
      };
      a.prototype.has = function (a) {
        return $jscomp.owns(a, b) && $jscomp.owns(a[b], this.id_);
      };
      a.prototype.delete = function (a) {
        return $jscomp.owns(a, b) && $jscomp.owns(a[b], this.id_)
          ? delete a[b][this.id_]
          : !1;
      };
      return a;
    },
    'es6',
    'es3'
  );
  $jscomp.MapEntry = function () {};
  $jscomp.polyfill(
    'Map',
    function (c) {
      function l() {
        if (
          $jscomp.ASSUME_NO_NATIVE_MAP ||
          !c ||
          'function' != typeof c ||
          !c.prototype.entries ||
          'function' != typeof Object.seal
        )
          return !1;
        try {
          var a = Object.seal({ x: 4 }),
            b = new c($jscomp.makeIterator([[a, 's']]));
          if (
            's' != b.get(a) ||
            1 != b.size ||
            b.get({ x: 4 }) ||
            b.set({ x: 4 }, 't') != b ||
            2 != b.size
          )
            return !1;
          var p = b.entries(),
            u = p.next();
          if (u.done || u.value[0] != a || 's' != u.value[1]) return !1;
          u = p.next();
          return u.done ||
            4 != u.value[0].x ||
            't' != u.value[1] ||
            !p.next().done
            ? !1
            : !0;
        } catch (m) {
          return !1;
        }
      }
      if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
        if (c && $jscomp.ES6_CONFORMANCE) return c;
      } else if (l()) return c;
      $jscomp.initSymbolIterator();
      var h = new WeakMap(),
        f = function (a) {
          this.data_ = {};
          this.head_ = t();
          this.size = 0;
          if (a) {
            a = $jscomp.makeIterator(a);
            for (var e; !(e = a.next()).done; )
              (e = e.value), this.set(e[0], e[1]);
          }
        };
      f.prototype.set = function (a, b) {
        a = 0 === a ? 0 : a;
        var e = n(this, a);
        e.list || (e.list = this.data_[e.id] = []);
        e.entry
          ? (e.entry.value = b)
          : ((e.entry = {
              next: this.head_,
              previous: this.head_.previous,
              head: this.head_,
              key: a,
              value: b,
            }),
            e.list.push(e.entry),
            (this.head_.previous.next = e.entry),
            (this.head_.previous = e.entry),
            this.size++);
        return this;
      };
      f.prototype.delete = function (a) {
        a = n(this, a);
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
      f.prototype.clear = function () {
        this.data_ = {};
        this.head_ = this.head_.previous = t();
        this.size = 0;
      };
      f.prototype.has = function (a) {
        return !!n(this, a).entry;
      };
      f.prototype.get = function (a) {
        return (a = n(this, a).entry) && a.value;
      };
      f.prototype.entries = function () {
        return b(this, function (a) {
          return [a.key, a.value];
        });
      };
      f.prototype.keys = function () {
        return b(this, function (a) {
          return a.key;
        });
      };
      f.prototype.values = function () {
        return b(this, function (a) {
          return a.value;
        });
      };
      f.prototype.forEach = function (a, b) {
        for (var e = this.entries(), g; !(g = e.next()).done; )
          (g = g.value), a.call(b, g[1], g[0], this);
      };
      f.prototype[Symbol.iterator] = f.prototype.entries;
      var n = function (e, b) {
          var g = b && typeof b;
          'object' == g || 'function' == g
            ? h.has(b)
              ? (g = h.get(b))
              : ((g = '' + ++a), h.set(b, g))
            : (g = 'p_' + b);
          var f = e.data_[g];
          if (f && $jscomp.owns(e.data_, g))
            for (e = 0; e < f.length; e++) {
              var m = f[e];
              if ((b !== b && m.key !== m.key) || b === m.key)
                return { id: g, list: f, index: e, entry: m };
            }
          return { id: g, list: f, index: -1, entry: void 0 };
        },
        b = function (a, b) {
          var e = a.head_;
          return $jscomp.iteratorPrototype(function () {
            if (e) {
              for (; e.head != a.head_; ) e = e.previous;
              for (; e.next != e.head; )
                return (e = e.next), { done: !1, value: b(e) };
              e = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        t = function () {
          var a = {};
          return (a.previous = a.next = a.head = a);
        },
        a = 0;
      return f;
    },
    'es6',
    'es3'
  );
  $jscomp.findInternal = function (c, l, h) {
    c instanceof String && (c = String(c));
    for (var f = c.length, n = 0; n < f; n++) {
      var b = c[n];
      if (l.call(h, b, n, c)) return { i: n, v: b };
    }
    return { i: -1, v: void 0 };
  };
  $jscomp.polyfill(
    'Array.prototype.find',
    function (c) {
      return c
        ? c
        : function (c, h) {
            return $jscomp.findInternal(this, c, h).v;
          };
    },
    'es6',
    'es3'
  );
  $jscomp.underscoreProtoCanBeSet = function () {
    var c = { a: !0 },
      l = {};
    try {
      return (l.__proto__ = c), l.a;
    } catch (h) {}
    return !1;
  };
  $jscomp.setPrototypeOf =
    'function' == typeof Object.setPrototypeOf
      ? Object.setPrototypeOf
      : $jscomp.underscoreProtoCanBeSet()
      ? function (c, l) {
          c.__proto__ = l;
          if (c.__proto__ !== l) throw new TypeError(c + ' is not extensible');
          return c;
        }
      : null;
  $jscomp.polyfill(
    'Object.setPrototypeOf',
    function (c) {
      return c || $jscomp.setPrototypeOf;
    },
    'es6',
    'es5'
  );
  $jscomp.assign =
    'function' == typeof Object.assign
      ? Object.assign
      : function (c, l) {
          for (var h = 1; h < arguments.length; h++) {
            var f = arguments[h];
            if (f) for (var n in f) $jscomp.owns(f, n) && (c[n] = f[n]);
          }
          return c;
        };
  $jscomp.polyfill(
    'Object.assign',
    function (c) {
      return c || $jscomp.assign;
    },
    'es6',
    'es3'
  );
  $jscomp.iteratorFromArray = function (c, l) {
    $jscomp.initSymbolIterator();
    c instanceof String && (c += '');
    var h = 0,
      f = {
        next: function () {
          if (h < c.length) {
            var n = h++;
            return { value: l(n, c[n]), done: !1 };
          }
          f.next = function () {
            return { done: !0, value: void 0 };
          };
          return f.next();
        },
      };
    f[Symbol.iterator] = function () {
      return f;
    };
    return f;
  };
  $jscomp.polyfill(
    'Array.prototype.keys',
    function (c) {
      return c
        ? c
        : function () {
            return $jscomp.iteratorFromArray(this, function (c) {
              return c;
            });
          };
    },
    'es6',
    'es3'
  );
  (function (c) {
    function l(f) {
      if (h[f]) return h[f].exports;
      var n = (h[f] = { i: f, l: !1, exports: {} });
      c[f].call(n.exports, n, n.exports, l);
      n.l = !0;
      return n.exports;
    }
    var h = {};
    l.m = c;
    l.c = h;
    l.d = function (f, n, b) {
      l.o(f, n) || Object.defineProperty(f, n, { enumerable: !0, get: b });
    };
    l.r = function (f) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(f, '__esModule', { value: !0 });
    };
    l.t = function (f, n) {
      n & 1 && (f = l(f));
      if (n & 8 || (n & 4 && 'object' === typeof f && f && f.__esModule))
        return f;
      var b = Object.create(null);
      l.r(b);
      Object.defineProperty(b, 'default', { enumerable: !0, value: f });
      if (n & 2 && 'string' != typeof f)
        for (var c in f)
          l.d(
            b,
            c,
            function (a) {
              return f[a];
            }.bind(null, c)
          );
      return b;
    };
    l.n = function (f) {
      var c =
        f && f.__esModule
          ? function () {
              return f['default'];
            }
          : function () {
              return f;
            };
      l.d(c, 'a', c);
      return c;
    };
    l.o = function (f, c) {
      return Object.prototype.hasOwnProperty.call(f, c);
    };
    l.p = '/core/pdf/';
    return l((l.s = 17));
  })([
    function (c, l, h) {
      h.d(l, 'c', function () {
        return e;
      });
      h.d(l, 'a', function () {
        return g;
      });
      h.d(l, 'b', function () {
        return p;
      });
      h.d(l, 'd', function () {
        return u;
      });
      var f = h(9),
        n = console.log,
        b = console.warn,
        t = console.error,
        a = function (a) {
          void 0 === a && (a = !0);
          a
            ? ((console.log = function () {}),
              (console.warn = function () {}),
              (console.error = function () {}))
            : ((console.log = n), (console.warn = b), (console.error = t));
        },
        e = function () {
          var e = Object(f.a)(location.search);
          a('1' === e.disableLogs);
        },
        g = function (e) {
          e.on('disableLogs', function (e) {
            a(e.disabled);
          });
        },
        p = function (a, e) {
          return function () {};
        },
        u = function (a, e) {
          e ? console.warn(a + ': ' + e) : console.warn(a);
        };
    },
    function (c, l, h) {
      h.d(l, 'c', function () {
        return b;
      });
      h.d(l, 'd', function () {
        return n;
      });
      h.d(l, 'b', function () {
        return t;
      });
      h.d(l, 'a', function () {
        return a;
      });
      var f = h(3),
        n = function (a, b) {
          Object(f.a)('disableLogs') ||
            (b ? console.warn(a + ': ' + b) : console.warn(a));
        },
        b = function (a, b) {
          Object(f.a)('disableLogs') ||
            (b ? console.log(a + ': ' + b) : console.log(a));
        },
        t = function (a) {
          if (!Object(f.a)('disableLogs')) throw (console.error(a), Error(a));
        },
        a = function (a, b) {};
    },
    function (c, l, h) {
      h.d(l, 'a', function () {
        return A;
      });
      h.d(l, 'b', function () {
        return r;
      });
      h.d(l, 'c', function () {
        return k;
      });
      var f = h(12),
        n = h(1),
        b = h(5),
        t = h(4),
        a = 'undefined' === typeof window ? self : window,
        e = a.importScripts,
        g = !1,
        p = function (d, k) {
          g || (e(a.basePath + 'decode.min.js'), (g = !0));
          d = self.BrotliDecode(Object(t.b)(d));
          return k ? d : Object(t.a)(d);
        },
        u = function (d, k) {
          return Object(f.a)(void 0, void 0, Promise, function () {
            var a;
            return Object(f.b)(this, function (r) {
              switch (r.label) {
                case 0:
                  return g
                    ? [3, 2]
                    : [
                        4,
                        Object(b.b)(
                          self.CoreControls.getWorkerPath() +
                            'external/decode.min.js',
                          'Failed to download decode.min.js',
                          window
                        ),
                      ];
                case 1:
                  r.sent(), (g = !0), (r.label = 2);
                case 2:
                  return (
                    (a = self.BrotliDecode(Object(t.b)(d))),
                    [2, k ? a : Object(t.a)(a)]
                  );
              }
            });
          });
        };
      (function () {
        function d() {
          this.remainingDataArrays = [];
        }
        d.prototype.processRaw = function (d) {
          return d;
        };
        d.prototype.processBrotli = function (d) {
          this.remainingDataArrays.push(d);
          return null;
        };
        d.prototype.GetNextChunk = function (d) {
          this.decodeFunction ||
            (this.decodeFunction =
              0 === d[0] && 97 === d[1] && 115 === d[2] && 109 === d[3]
                ? this.processRaw
                : this.processBrotli);
          return this.decodeFunction(d);
        };
        d.prototype.End = function () {
          if (this.remainingDataArrays.length) {
            for (var d = this.arrays, k = 0, a = 0; a < d.length; ++a)
              k += d[a].length;
            k = new Uint8Array(k);
            var r = 0;
            for (a = 0; a < d.length; ++a) {
              var e = d[a];
              k.set(e, r);
              r += e.length;
            }
            return p(k, !0);
          }
          return null;
        };
        return d;
      })();
      var m = !1,
        q = function (d) {
          m || (e(a.basePath + 'pako_inflate.min.js'), (m = !0));
          var k = 10;
          if ('string' === typeof d) {
            if (d.charCodeAt(3) & 8) {
              for (; 0 !== d.charCodeAt(k); ++k);
              ++k;
            }
          } else if (d[3] & 8) {
            for (; 0 !== d[k]; ++k);
            ++k;
          }
          d = Object(t.b)(d);
          d = d.subarray(k, d.length - 8);
          return a.pako.inflate(d, { windowBits: -15 });
        },
        z = function (d, k) {
          return k ? d : Object(t.a)(d);
        },
        v = function (d) {
          var k = !d.shouldOutputArray,
            a = new XMLHttpRequest();
          a.open('GET', d.url, d.isAsync);
          var r = k && a.overrideMimeType;
          a.responseType = r ? 'text' : 'arraybuffer';
          r && a.overrideMimeType('text/plain; charset=x-user-defined');
          a.send();
          var b = function () {
            var w = Date.now();
            var b = r ? a.responseText : new Uint8Array(a.response);
            Object(n.a)('worker', 'Result length is ' + b.length);
            b.length < d.compressedMaximum
              ? ((b = d.decompressFunction(b, d.shouldOutputArray)),
                Object(n.d)(
                  'There may be some degradation of performance. Your server has not been configured to serve .gz. and .br. files with the expected Content-Encoding. See http://www.pdftron.com/kb_content_encoding for instructions on how to resolve this.'
                ),
                e &&
                  Object(n.a)('worker', 'Decompressed length is ' + b.length))
              : k && (b = Object(t.a)(b));
            e &&
              Object(n.a)(
                'worker',
                d.url + ' Decompression took ' + (Date.now() - w)
              );
            return b;
          };
          if (d.isAsync)
            var B = new Promise(function (k, r) {
              a.onload = function () {
                200 === this.status || 0 === this.status
                  ? k(b())
                  : r('Download Failed ' + d.url);
              };
              a.onerror = function () {
                r('Network error occurred ' + d.url);
              };
            });
          else {
            if (200 === a.status || 0 === a.status) return b();
            throw Error('Failed to load ' + d.url);
          }
          return B;
        },
        A = function (d) {
          var k = d.lastIndexOf('/');
          -1 === k && (k = 0);
          var a = d.slice(k).replace('.', '.br.');
          e ||
            (a.endsWith('.js.mem')
              ? (a = a.replace('.js.mem', '.mem'))
              : a.endsWith('.js') && (a = a.concat('.mem')));
          return d.slice(0, k) + a;
        },
        C = function (d, k) {
          var a = d.lastIndexOf('/');
          -1 === a && (a = 0);
          var r = d.slice(a).replace('.', '.gz.');
          k.url = d.slice(0, a) + r;
          k.decompressFunction = q;
          return v(k);
        },
        x = function (d, k) {
          k.url = A(d);
          k.decompressFunction = e ? p : u;
          return v(k);
        },
        y = function (d, k) {
          d.endsWith('.js.mem')
            ? (d = d.slice(0, -4))
            : d.endsWith('.mem') && (d = d.slice(0, -4) + '.js.mem');
          k.url = d;
          k.decompressFunction = z;
          return v(k);
        },
        E = function (d, k, a, r) {
          return d.catch(function (d) {
            Object(n.d)(d);
            return r(k, a);
          });
        },
        d = function (d, k, a) {
          var r;
          if (a.isAsync) {
            var b = k[0](d, a);
            for (r = 1; r < k.length; ++r) b = E(b, d, a, k[r]);
            return b;
          }
          for (r = 0; r < k.length; ++r)
            try {
              return k[r](d, a);
            } catch (N) {
              Object(n.d)(N.message);
            }
          throw Error('');
        },
        k = function (k, a, r, b) {
          return d(k, [C, x, y], {
            compressedMaximum: a,
            isAsync: r,
            shouldOutputArray: b,
          });
        },
        r = function (k, a, r, b) {
          return d(k, [x, C, y], {
            compressedMaximum: a,
            isAsync: r,
            shouldOutputArray: b,
          });
        };
    },
    function (c, l, h) {
      h.d(l, 'a', function () {
        return b;
      });
      h.d(l, 'b', function () {
        return t;
      });
      var f = {},
        n = {
          flattenedResources: !1,
          CANVAS_CACHE_SIZE: void 0,
          maxPagesBefore: void 0,
          maxPagesAhead: void 0,
          disableLogs: !1,
          _trnDebugMode: !1,
          _logFiltersEnabled: null,
        },
        b = function (a) {
          return n[a];
        },
        t = function (a, b) {
          var e;
          n[a] = b;
          null === (e = f[a]) || void 0 === e
            ? void 0
            : e.forEach(function (a) {
                a(b);
              });
        };
    },
    function (c, l, h) {
      h.d(l, 'b', function () {
        return f;
      });
      h.d(l, 'a', function () {
        return n;
      });
      var f = function (b) {
          if ('string' === typeof b) {
            for (
              var f = new Uint8Array(b.length), a = b.length, e = 0;
              e < a;
              e++
            )
              f[e] = b.charCodeAt(e);
            return f;
          }
          return b;
        },
        n = function (b) {
          if ('string' !== typeof b) {
            for (var f = '', a = 0, e = b.length, g; a < e; )
              (g = b.subarray(a, a + 1024)),
                (a += 1024),
                (f += String.fromCharCode.apply(null, g));
            return f;
          }
          return b;
        };
    },
    function (c, l, h) {
      function f(a, e, g) {
        function f(p) {
          m = m || Date.now();
          return p
            ? (Object(b.a)('load', 'Try instantiateStreaming'),
              fetch(Object(t.a)(a))
                .then(function (a) {
                  return WebAssembly.instantiateStreaming(a, e);
                })
                .catch(function (e) {
                  Object(b.a)(
                    'load',
                    'instantiateStreaming Failed ' + a + ' message ' + e.message
                  );
                  return f(!1);
                }))
            : Object(t.b)(a, g, !0, !0).then(function (a) {
                c = Date.now();
                Object(b.a)('load', 'Request took ' + (c - m) + ' ms');
                return WebAssembly.instantiate(a, e);
              });
        }
        var c, m;
        return f(!!WebAssembly.instantiateStreaming).then(function (a) {
          Object(b.a)(
            'load',
            'WASM compilation took ' + (Date.now() - (c || m)) + ' ms'
          );
          return a;
        });
      }
      function n(a, e, g) {
        return new Promise(function (f) {
          if (!a) return f();
          var c = g.document.createElement('script');
          c.type = 'text/javascript';
          c.onload = function () {
            f();
          };
          c.onerror = function () {
            e && Object(b.d)(e);
            f();
          };
          c.src = a;
          g.document.getElementsByTagName('head')[0].appendChild(c);
        });
      }
      h.d(l, 'a', function () {
        return f;
      });
      h.d(l, 'b', function () {
        return n;
      });
      var b = h(1),
        t = h(2);
    },
    function (c, l, h) {
      h.d(l, 'c', function () {
        return g;
      });
      h.d(l, 'b', function () {
        return p;
      });
      h.d(l, 'a', function () {
        return u;
      });
      var f = 'undefined' === typeof window ? self : window;
      c = (function () {
        var a = navigator.userAgent.toLowerCase();
        return (a =
          /(msie) ([\w.]+)/.exec(a) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(a))
          ? parseInt(a[2], 10)
          : a;
      })();
      var n = (function () {
        var a = f.navigator.userAgent.match(/OPR/),
          b = f.navigator.userAgent.match(/Maxthon/),
          e = f.navigator.userAgent.match(/Edge/);
        return f.navigator.userAgent.match(/Chrome\/(.*?) /) && !a && !b && !e;
      })();
      (function () {
        if (!n) return null;
        var a = f.navigator.userAgent.match(/Chrome\/([0-9]+)\./);
        return a ? parseInt(a[1], 10) : a;
      })();
      var b =
        !!navigator.userAgent.match(/Edge/i) ||
        (navigator.userAgent.match(/Edg\/(.*?)/) &&
          f.navigator.userAgent.match(/Chrome\/(.*?) /));
      (function () {
        if (!b) return null;
        var a = f.navigator.userAgent.match(/Edg\/([0-9]+)\./);
        return a ? parseInt(a[1], 10) : a;
      })();
      l =
        /iPad|iPhone|iPod/.test(f.navigator.platform) ||
        ('MacIntel' === navigator.platform && 1 < navigator.maxTouchPoints);
      (function () {
        var a = f.navigator.userAgent.match(
          /.*\/([0-9\.]+)\s(Safari|Mobile).*/i
        );
        return a ? parseFloat(a[1]) : a;
      })();
      var t =
          /^((?!chrome|android).)*safari/i.test(f.navigator.userAgent) ||
          (/^((?!chrome|android).)*$/.test(f.navigator.userAgent) && l),
        a = f.navigator.userAgent.match(/Firefox/);
      (function () {
        if (!a) return null;
        var b = f.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
        return b ? parseInt(b[1], 10) : b;
      })();
      c || /Android|webOS|Touch|IEMobile|Silk/i.test(navigator.userAgent);
      navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
      f.navigator.userAgent.indexOf('Android');
      var e = /Mac OS X 10_13_6.*\(KHTML, like Gecko\)$/.test(
          f.navigator.userAgent
        ),
        g = function () {
          return t || e;
        },
        p = !(!self.WebAssembly || !self.WebAssembly.validate),
        u =
          -1 < f.navigator.userAgent.indexOf('Edge/16') ||
          -1 < f.navigator.userAgent.indexOf('MSAppHost');
    },
    function (c, l, h) {
      function f(a) {
        '@babel/helpers - typeof';
        f =
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
        return f(a);
      }
      var n, b, t;
      !(function (a) {
        'object' === f(l) && 'undefined' !== typeof c
          ? (c.exports = a())
          : !((b = []),
            (n = a),
            (t = 'function' === typeof n ? n.apply(l, b) : n),
            void 0 !== t && (c.exports = t));
      })(function () {
        return (function u(b, g, f) {
          function e(m, p) {
            if (!g[m]) {
              if (!b[m]) {
                if (c) return c(m, !0);
                p = Error("Cannot find module '".concat(m, "'"));
                throw ((p.code = 'MODULE_NOT_FOUND'), p);
              }
              p = g[m] = { exports: {} };
              b[m][0].call(
                p.exports,
                function (g) {
                  return e(b[m][1][g] || g);
                },
                p,
                p.exports,
                u,
                b,
                g,
                f
              );
            }
            return g[m].exports;
          }
          for (var c = !1, p = 0; p < f.length; p++) e(f[p]);
          return e;
        })(
          {
            1: [
              function (b, g, f) {
                var e = {}.hasOwnProperty,
                  m = function (b, g) {
                    function f() {
                      this.constructor = b;
                    }
                    for (var m in g) e.call(g, m) && (b[m] = g[m]);
                    f.prototype = g.prototype;
                    b.prototype = new f();
                    b.__super__ = g.prototype;
                    return b;
                  };
                f = b('./PriorityQueue/AbstractPriorityQueue');
                b = b('./PriorityQueue/ArrayStrategy');
                f = (function (b) {
                  function e(b) {
                    b || (b = {});
                    b.strategy || (b.strategy = BinaryHeapStrategy);
                    b.comparator ||
                      (b.comparator = function (b, e) {
                        return (b || 0) - (e || 0);
                      });
                    e.__super__.constructor.call(this, b);
                  }
                  m(e, b);
                  return e;
                })(f);
                f.ArrayStrategy = b;
                g.exports = f;
              },
              {
                './PriorityQueue/AbstractPriorityQueue': 2,
                './PriorityQueue/ArrayStrategy': 3,
              },
            ],
            2: [
              function (b, g, f) {
                g.exports = (function () {
                  function b(b) {
                    if (null == (null != b ? b.strategy : void 0))
                      throw 'Must pass options.strategy, a strategy';
                    if (null == (null != b ? b.comparator : void 0))
                      throw 'Must pass options.comparator, a comparator';
                    this.priv = new b.strategy(b);
                    this.length = 0;
                  }
                  b.prototype.queue = function (b) {
                    this.length++;
                    this.priv.queue(b);
                  };
                  b.prototype.dequeue = function (b) {
                    if (!this.length) throw 'Empty queue';
                    this.length--;
                    return this.priv.dequeue();
                  };
                  b.prototype.peek = function (b) {
                    if (!this.length) throw 'Empty queue';
                    return this.priv.peek();
                  };
                  b.prototype.remove = function (b) {
                    this.priv.remove(b) && --this.length;
                  };
                  b.prototype.find = function (b) {
                    return 0 <= this.priv.find(b);
                  };
                  b.prototype.removeAllMatching = function (b, e) {
                    b = this.priv.removeAllMatching(b, e);
                    this.length -= b;
                  };
                  return b;
                })();
              },
              {},
            ],
            3: [
              function (b, g, f) {
                var e = function (b, e, g) {
                  var f;
                  var c = 0;
                  for (f = b.length; c < f; ) {
                    var m = (c + f) >>> 1;
                    0 <= g(b[m], e) ? (c = m + 1) : (f = m);
                  }
                  return c;
                };
                g.exports = (function () {
                  function b(b) {
                    var e;
                    this.options = b;
                    this.comparator = this.options.comparator;
                    this.data =
                      (null != (e = this.options.initialValues)
                        ? e.slice(0)
                        : void 0) || [];
                    this.data.sort(this.comparator).reverse();
                  }
                  b.prototype.queue = function (b) {
                    var g = e(this.data, b, this.comparator);
                    this.data.splice(g, 0, b);
                  };
                  b.prototype.dequeue = function () {
                    return this.data.pop();
                  };
                  b.prototype.peek = function () {
                    return this.data[this.data.length - 1];
                  };
                  b.prototype.find = function (b) {
                    var g = e(this.data, b, this.comparator) - 1;
                    return 0 <= g && !this.comparator(this.data[g], b) ? g : -1;
                  };
                  b.prototype.remove = function (b) {
                    b = this.find(b);
                    return 0 <= b ? (this.data.splice(b, 1), !0) : !1;
                  };
                  b.prototype.removeAllMatching = function (b, e) {
                    for (var g = 0, f = this.data.length - 1; 0 <= f; --f)
                      if (b(this.data[f])) {
                        var c = this.data.splice(f, 1)[0];
                        e && e(c);
                        ++g;
                      }
                    return g;
                  };
                  return b;
                })();
              },
              {},
            ],
          },
          {},
          [1]
        )(1);
      });
    },
    function (c, l, h) {
      (function (f) {
        function c(a, b) {
          this._id = a;
          this._clearFn = b;
        }
        var b =
            ('undefined' !== typeof f && f) ||
            ('undefined' !== typeof self && self) ||
            window,
          t = Function.prototype.apply;
        l.setTimeout = function () {
          return new c(t.call(setTimeout, b, arguments), clearTimeout);
        };
        l.setInterval = function () {
          return new c(t.call(setInterval, b, arguments), clearInterval);
        };
        l.clearTimeout = l.clearInterval = function (a) {
          a && a.close();
        };
        c.prototype.unref = c.prototype.ref = function () {};
        c.prototype.close = function () {
          this._clearFn.call(b, this._id);
        };
        l.enroll = function (a, b) {
          clearTimeout(a._idleTimeoutId);
          a._idleTimeout = b;
        };
        l.unenroll = function (a) {
          clearTimeout(a._idleTimeoutId);
          a._idleTimeout = -1;
        };
        l._unrefActive = l.active = function (a) {
          clearTimeout(a._idleTimeoutId);
          var b = a._idleTimeout;
          0 <= b &&
            (a._idleTimeoutId = setTimeout(function () {
              a._onTimeout && a._onTimeout();
            }, b));
        };
        h(21);
        l.setImmediate =
          ('undefined' !== typeof self && self.setImmediate) ||
          ('undefined' !== typeof f && f.setImmediate) ||
          (this && this.setImmediate);
        l.clearImmediate =
          ('undefined' !== typeof self && self.clearImmediate) ||
          ('undefined' !== typeof f && f.clearImmediate) ||
          (this && this.clearImmediate);
      }.call(this, h(10)));
    },
    function (c, l, h) {
      l.a = function (f) {
        var c = {};
        decodeURIComponent(f.slice(1))
          .split('&')
          .forEach(function (b) {
            b = b.split('=', 2);
            c[b[0]] = b[1];
          });
        return c;
      };
    },
    function (c, l) {
      l = (function () {
        return this;
      })();
      try {
        l = l || new Function('return this')();
      } catch (h) {
        'object' === typeof window && (l = window);
      }
      c.exports = l;
    },
    function (c, l, h) {
      h.d(l, 'b', function () {
        return t;
      });
      h.d(l, 'a', function () {
        return e;
      });
      var f = h(2),
        n = h(5),
        b = h(6),
        t = function () {
          return b.b && !b.a && !Object(b.c)();
        },
        a = (function () {
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
        e = function (b, e, c) {
          if (t() && !c)
            (self.Module.instantiateWasm = function (a, g) {
              return Object(n.a)(b + 'Wasm.wasm', a, e['Wasm.wasm']).then(
                function (a) {
                  g(a.instance);
                }
              );
            }),
              (c = Object(f.b)(b + 'Wasm.js.mem', e['Wasm.js.mem'], !1, !1));
          else {
            c = Object(f.b)(
              (self.Module.asmjsPrefix ? self.Module.asmjsPrefix : '') +
                b +
                '.js.mem',
              e['.js.mem'],
              !1
            );
            var g = Object(f.c)(
              (self.Module.memoryInitializerPrefixURL
                ? self.Module.memoryInitializerPrefixURL
                : '') +
                b +
                '.mem',
              e['.mem'],
              !0,
              !0
            );
            self.Module.memoryInitializerRequest = new a(g);
          }
          c = new Blob([c], { type: 'application/javascript' });
          importScripts(URL.createObjectURL(c));
        };
    },
    function (c, l, h) {
      function f(b, f, a, e) {
        function g(b) {
          return b instanceof a
            ? b
            : new a(function (a) {
                a(b);
              });
        }
        return new (a || (a = Promise))(function (a, c) {
          function m(a) {
            try {
              n(e.next(a));
            } catch (A) {
              c(A);
            }
          }
          function p(a) {
            try {
              n(e['throw'](a));
            } catch (A) {
              c(A);
            }
          }
          function n(b) {
            b.done ? a(b.value) : g(b.value).then(m, p);
          }
          n((e = e.apply(b, f || [])).next());
        });
      }
      function n(b, f) {
        function a(a) {
          return function (b) {
            return e([a, b]);
          };
        }
        function e(a) {
          if (c) throw new TypeError('Generator is already executing.');
          for (; g; )
            try {
              if (
                ((c = 1),
                n &&
                  (m =
                    a[0] & 2
                      ? n['return']
                      : a[0]
                      ? n['throw'] || ((m = n['return']) && m.call(n), 0)
                      : n.next) &&
                  !(m = m.call(n, a[1])).done)
              )
                return m;
              if (((n = 0), m)) a = [a[0] & 2, m.value];
              switch (a[0]) {
                case 0:
                case 1:
                  m = a;
                  break;
                case 4:
                  return g.label++, { value: a[1], done: !1 };
                case 5:
                  g.label++;
                  n = a[1];
                  a = [0];
                  continue;
                case 7:
                  a = g.ops.pop();
                  g.trys.pop();
                  continue;
                default:
                  if (
                    !((m = g.trys), (m = 0 < m.length && m[m.length - 1])) &&
                    (6 === a[0] || 2 === a[0])
                  ) {
                    g = 0;
                    continue;
                  }
                  if (3 === a[0] && (!m || (a[1] > m[0] && a[1] < m[3])))
                    g.label = a[1];
                  else if (6 === a[0] && g.label < m[1])
                    (g.label = m[1]), (m = a);
                  else if (m && g.label < m[2]) (g.label = m[2]), g.ops.push(a);
                  else {
                    m[2] && g.ops.pop();
                    g.trys.pop();
                    continue;
                  }
              }
              a = f.call(b, g);
            } catch (v) {
              (a = [6, v]), (n = 0);
            } finally {
              c = m = 0;
            }
          if (a[0] & 5) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        }
        var g = {
            label: 0,
            sent: function () {
              if (m[0] & 1) throw m[1];
              return m[1];
            },
            trys: [],
            ops: [],
          },
          c,
          n,
          m,
          h;
        return (
          (h = { next: a(0), throw: a(1), return: a(2) }),
          'function' === typeof Symbol &&
            (h[Symbol.iterator] = function () {
              return this;
            }),
          h
        );
      }
      h.d(l, 'a', function () {
        return f;
      });
      h.d(l, 'b', function () {
        return n;
      });
    },
    function (c, l) {
      function h() {
        throw Error('setTimeout has not been defined');
      }
      function f() {
        throw Error('clearTimeout has not been defined');
      }
      function n(a) {
        if (p === setTimeout) return setTimeout(a, 0);
        if ((p === h || !p) && setTimeout)
          return (p = setTimeout), setTimeout(a, 0);
        try {
          return p(a, 0);
        } catch (C) {
          try {
            return p.call(null, a, 0);
          } catch (x) {
            return p.call(this, a, 0);
          }
        }
      }
      function b(a) {
        if (u === clearTimeout) return clearTimeout(a);
        if ((u === f || !u) && clearTimeout)
          return (u = clearTimeout), clearTimeout(a);
        try {
          return u(a);
        } catch (C) {
          try {
            return u.call(null, a);
          } catch (x) {
            return u.call(this, a);
          }
        }
      }
      function t() {
        q &&
          z &&
          ((q = !1), z.length ? (m = z.concat(m)) : (v = -1), m.length && a());
      }
      function a() {
        if (!q) {
          var a = n(t);
          q = !0;
          for (var e = m.length; e; ) {
            z = m;
            for (m = []; ++v < e; ) z && z[v].run();
            v = -1;
            e = m.length;
          }
          z = null;
          q = !1;
          b(a);
        }
      }
      function e(a, b) {
        this.fun = a;
        this.array = b;
      }
      function g() {}
      c = c.exports = {};
      try {
        var p = 'function' === typeof setTimeout ? setTimeout : h;
      } catch (A) {
        p = h;
      }
      try {
        var u = 'function' === typeof clearTimeout ? clearTimeout : f;
      } catch (A) {
        u = f;
      }
      var m = [],
        q = !1,
        z,
        v = -1;
      c.nextTick = function (b) {
        var g = Array(arguments.length - 1);
        if (1 < arguments.length)
          for (var f = 1; f < arguments.length; f++) g[f - 1] = arguments[f];
        m.push(new e(b, g));
        1 !== m.length || q || n(a);
      };
      e.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      c.title = 'browser';
      c.browser = !0;
      c.env = {};
      c.argv = [];
      c.version = '';
      c.versions = {};
      c.on = g;
      c.addListener = g;
      c.once = g;
      c.off = g;
      c.removeListener = g;
      c.removeAllListeners = g;
      c.emit = g;
      c.prependListener = g;
      c.prependOnceListener = g;
      c.listeners = function (a) {
        return [];
      };
      c.binding = function (a) {
        throw Error('process.binding is not supported');
      };
      c.cwd = function () {
        return '/';
      };
      c.chdir = function (a) {
        throw Error('process.chdir is not supported');
      };
      c.umask = function () {
        return 0;
      };
    },
    function (c, l, h) {
      l.a = function () {
        ArrayBuffer.prototype.slice ||
          (ArrayBuffer.prototype.slice = function (f, c) {
            void 0 === f && (f = 0);
            void 0 === c && (c = this.byteLength);
            f = Math.floor(f);
            c = Math.floor(c);
            0 > f && (f += this.byteLength);
            0 > c && (c += this.byteLength);
            f = Math.min(Math.max(0, f), this.byteLength);
            c = Math.min(Math.max(0, c), this.byteLength);
            if (0 >= c - f) return new ArrayBuffer(0);
            var b = new ArrayBuffer(c - f),
              n = new Uint8Array(b);
            f = new Uint8Array(this, f, c - f);
            n.set(f);
            return b;
          });
      };
    },
    function (c, l, h) {
      (function (f) {
        function c(a) {
          'function' !== typeof a && (a = new Function('' + a));
          for (var b = Array(arguments.length - 1), d = 0; d < b.length; d++)
            b[d] = arguments[d + 1];
          z[q] = { callback: a, args: b };
          C(q);
          return q++;
        }
        function b(a) {
          delete z[a];
        }
        function h(a) {
          if (v) setTimeout(h, 0, a);
          else {
            var e = z[a];
            if (e) {
              v = !0;
              try {
                var d = e.callback,
                  k = e.args;
                switch (k.length) {
                  case 0:
                    d();
                    break;
                  case 1:
                    d(k[0]);
                    break;
                  case 2:
                    d(k[0], k[1]);
                    break;
                  case 3:
                    d(k[0], k[1], k[2]);
                    break;
                  default:
                    d.apply(void 0, k);
                }
              } finally {
                b(a), (v = !1);
              }
            }
          }
        }
        function a() {
          C = function (a) {
            f.nextTick(function () {
              h(a);
            });
          };
        }
        function e() {
          if (m.postMessage && !m.importScripts) {
            var a = !0,
              b = m.onmessage;
            m.onmessage = function () {
              a = !1;
            };
            m.postMessage('', '*');
            m.onmessage = b;
            return a;
          }
        }
        function g() {
          var a = 'setImmediate$' + Math.random() + '$',
            b = function (d) {
              (d.source !== m && d.source !== m.parent) ||
                'string' !== typeof d.data ||
                0 !== d.data.indexOf(a) ||
                h(+d.data.slice(a.length));
            };
          m.addEventListener
            ? m.addEventListener('message', b, !1)
            : m.attachEvent('onmessage', b);
          C = function (d) {
            m.postMessage(a + d, '*');
          };
        }
        function p() {
          var a = A.documentElement;
          C = function (b) {
            var d = A.createElement('script');
            d.onreadystatechange = function () {
              h(b);
              d.onreadystatechange = null;
              a.removeChild(d);
              d = null;
            };
            a.appendChild(d);
          };
        }
        function u() {
          C = function (a) {
            setTimeout(h, 0, a);
          };
        }
        var m = 'undefined' === typeof window ? self : window,
          q = 1,
          z = {},
          v = !1,
          A = m.document,
          C,
          x = Object.getPrototypeOf && Object.getPrototypeOf(m);
        x = x && x.setTimeout ? x : m;
        '[object process]' === {}.toString.call(m.process)
          ? a()
          : e()
          ? g()
          : A && 'onreadystatechange' in A.createElement('script')
          ? p()
          : u();
        x.setImmediate = c;
        x.clearImmediate = b;
        l.a = { setImmediate: c, clearImmediate: b };
      }.call(this, h(13)));
    },
    function (c, l, h) {
      var f = h(1);
      c = (function () {
        function c(b, c) {
          this.name = b;
          this.comObj = c;
          this.callbackIndex = 1;
          this.postMessageTransfers = !0;
          this.callbacksCapabilities = {};
          this.actionHandler = {};
          this.actionHandlerAsync = {};
          this.nextAsync = null;
          this.actionHandler.console_log = [
            function (a) {
              Object(f.c)(a);
            },
          ];
          this.actionHandler.console_error = [
            function (a) {
              Object(f.b)(a);
            },
          ];
          this.actionHandler.workerLoaded = [function () {}];
          this.msgHandler = this.handleMessage.bind(this);
          c.addEventListener('message', this.msgHandler);
        }
        c.prototype.on = function (b, c, a) {
          var e = this.actionHandler;
          e[b] &&
            Object(f.b)('There is already an actionName called "' + b + '"');
          e[b] = [c, a];
        };
        c.prototype.clearActionHandlers = function () {
          this.actionHandler = {};
          this.comObj.removeEventListener('message', this.msgHandler);
        };
        c.prototype.reset = function () {
          this.clearActionHandlers();
          this.comObj.reset && this.comObj.reset();
        };
        c.prototype.replace = function (b, c, a) {
          this.actionHandler[b] = [c, a];
        };
        c.prototype.onAsync = function (b, c, a) {
          var e = this.actionHandlerAsync;
          e[b] &&
            Object(f.b)('There is already an actionName called "' + b + '"');
          e[b] = [c, a];
        };
        c.prototype.replaceAsync = function (b, c, a) {
          var e = this.actionHandlerAsync,
            g = this.actionHandler;
          g[b] && delete g[b];
          e[b] = [c, a];
        };
        c.prototype.onNextAsync = function (b) {
          this.nextAsync = b;
        };
        c.prototype.send = function (b, c) {
          this.postMessage({ action: b, data: c });
        };
        c.prototype.getNextId = function () {
          return this.callbackIndex++;
        };
        c.prototype.sendWithPromise = function (b, c, a) {
          var e = this.getNextId();
          b = { action: b, data: c, callbackId: e, priority: a };
          c = window.createPromiseCapability();
          this.callbacksCapabilities[e] = c;
          try {
            this.postMessage(b);
          } catch (g) {
            c.reject(g);
          }
          return c.promise;
        };
        c.prototype.sendWithPromiseReturnId = function (b, c, a) {
          var e = this.getNextId();
          b = { action: b, data: c, callbackId: e, priority: a };
          c = window.createPromiseCapability();
          this.callbacksCapabilities[e] = c;
          try {
            this.postMessage(b);
          } catch (g) {
            c.reject(g);
          }
          return { promise: c.promise, callbackId: e };
        };
        c.prototype.sendWithPromiseWithId = function (b, c, a) {
          c > this.callbackIndex &&
            Object(f.b)(
              "Can't reuse callbackId " +
                c +
                ' lesser than callbackIndex ' +
                this.callbackIndex
            );
          c in this.callbacksCapabilities &&
            Object(f.b)(
              "Can't reuse callbackId " +
                c +
                '. There is a capability waiting to be resolved. '
            );
          b = { action: b, data: a, callbackId: c };
          a = window.createPromiseCapability();
          this.callbacksCapabilities[c] = a;
          try {
            this.postMessage(b);
          } catch (e) {
            a.reject(e);
          }
          return a.promise;
        };
        c.prototype.sendError = function (b, c) {
          if (b.message || b.errorData) {
            b.message && b.message.message && (b.message = b.message.message);
            var a = b.errorData;
            b = {
              type: b.type ? b.type : 'JavascriptError',
              message: b.message,
            };
            a &&
              Object.keys(a).forEach(function (e) {
                a.hasOwnProperty(e) && (b[e] = a[e]);
              });
          }
          this.postMessage({ isReply: !0, callbackId: c, error: b });
        };
        c.prototype.getPromise = function (b) {
          if (b in this.callbacksCapabilities)
            return this.callbacksCapabilities[b];
          Object(f.b)('Cannot get promise for callback ' + b);
        };
        c.prototype.cancelPromise = function (b) {
          if (b in this.callbacksCapabilities) {
            var c = this.callbacksCapabilities[b];
            delete this.callbacksCapabilities[b];
            c.reject({
              type: 'Cancelled',
              message: 'Request has been cancelled.',
            });
            this.postMessage({
              action: 'actionCancel',
              data: { callbackId: b },
            });
          } else Object(f.d)('Cannot cancel callback ' + b);
        };
        c.prototype.postMessage = function (b) {
          if (this.postMessageTransfers) {
            var c = this.getTransfersArray(b);
            this.comObj.postMessage(b, c);
          } else this.comObj.postMessage(b);
        };
        c.prototype.getObjectTransfers = function (b, c) {
          var a = this;
          null !== b &&
            'object' === typeof b &&
            (b instanceof Uint8Array
              ? c.push(b.buffer)
              : b instanceof ArrayBuffer
              ? c.push(b)
              : Object.keys(b).forEach(function (e) {
                  b.hasOwnProperty(e) && a.getObjectTransfers(b[e], c);
                }));
        };
        c.prototype.getTransfersArray = function (b) {
          var c = [];
          this.getObjectTransfers(b, c);
          return 0 === c.length ? void 0 : c;
        };
        c.prototype.handleMessage = function (b) {
          var c = this,
            a = b.data,
            e = this.actionHandler,
            g = this.actionHandlerAsync;
          b = this.callbacksCapabilities;
          if (a.isReply)
            (e = a.callbackId),
              e in b
                ? ((g = b[e]),
                  delete b[e],
                  'error' in a ? g.reject(a.error) : g.resolve(a.data))
                : Object(f.a)('Cannot resolve callback ' + e);
          else if (a.action in e) {
            var p = e[a.action];
            a.callbackId
              ? Promise.resolve()
                  .then(function () {
                    return p[0].call(p[1], a.data);
                  })
                  .then(
                    function (b) {
                      c.postMessage({
                        isReply: !0,
                        callbackId: a.callbackId,
                        data: b,
                      });
                    },
                    function (b) {
                      c.sendError(b, a.callbackId);
                    }
                  )
              : p[0].call(p[1], a.data);
          } else
            a.action in g
              ? ((p = g[a.action]),
                a.callbackId
                  ? p[0].call(p[1], a).then(
                      function (b) {
                        c.postMessage({
                          isReply: !0,
                          callbackId: a.callbackId,
                          data: b,
                        });
                        c.nextAsync();
                      },
                      function (b) {
                        c.sendError(b, a.callbackId);
                        c.nextAsync();
                      }
                    )
                  : p[0].call(p[1], a).then(
                      function () {
                        c.nextAsync();
                      },
                      function () {
                        c.nextAsync();
                      }
                    ))
              : Object(f.b)('Unknown action from worker: ' + a.action);
        };
        return c;
      })();
      l.a = c;
    },
    function (c, l, h) {
      c.exports = h(18);
    },
    function (c, l, h) {
      h.r(l);
      h(6);
      c = h(14);
      h(19);
      h(20);
      h(23);
      h(24);
      h(25);
      h(26);
      h(27);
      Object(c.a)();
    },
    function (c, l, h) {
      (function (c) {
        'undefined' === typeof c.crypto &&
          (c.crypto = {
            getRandomValues: function (c) {
              for (var b = 0; b < c.length; b++) c[b] = 256 * Math.random();
            },
          });
      })('undefined' === typeof window ? self : window);
    },
    function (c, l, h) {
      (function (c, n) {
        function b(c) {
          '@babel/helpers - typeof';
          b =
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
          return b(c);
        }
        (function (c) {
          function a() {
            for (var a = 0; a < D.length; a++) D[a][0](D[a][1]);
            D = [];
            K = !1;
          }
          function e(d, k) {
            D.push([d, k]);
            K || ((K = !0), F(a, 0));
          }
          function g(a, d) {
            function k(a) {
              m(d, a);
            }
            function b(a) {
              z(d, a);
            }
            try {
              a(k, b);
            } catch (G) {
              b(G);
            }
          }
          function f(a) {
            var d = a.owner,
              k = d.state_;
            d = d.data_;
            var b = a[k];
            a = a.then;
            if ('function' === typeof b) {
              k = r;
              try {
                d = b(d);
              } catch (G) {
                z(a, G);
              }
            }
            l(a, d) || (k === r && m(a, d), k === B && z(a, d));
          }
          function l(a, d) {
            var k;
            try {
              if (a === d)
                throw new TypeError(
                  'A promises callback cannot return that same promise.'
                );
              if (d && ('function' === typeof d || 'object' === b(d))) {
                var r = d.then;
                if ('function' === typeof r)
                  return (
                    r.call(
                      d,
                      function (b) {
                        k || ((k = !0), d !== b ? m(a, b) : q(a, b));
                      },
                      function (d) {
                        k || ((k = !0), z(a, d));
                      }
                    ),
                    !0
                  );
              }
            } catch (G) {
              return k || z(a, G), !0;
            }
            return !1;
          }
          function m(a, d) {
            (a !== d && l(a, d)) || q(a, d);
          }
          function q(a, b) {
            a.state_ === d && ((a.state_ = k), (a.data_ = b), e(A, a));
          }
          function z(a, b) {
            a.state_ === d && ((a.state_ = k), (a.data_ = b), e(C, a));
          }
          function v(a) {
            var d = a.then_;
            a.then_ = void 0;
            for (a = 0; a < d.length; a++) f(d[a]);
          }
          function A(a) {
            a.state_ = r;
            v(a);
          }
          function C(a) {
            a.state_ = B;
            v(a);
          }
          function x(a) {
            if ('function' !== typeof a)
              throw new TypeError(
                'Promise constructor takes a function argument'
              );
            if (!(this instanceof x))
              throw new TypeError(
                "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
              );
            this.then_ = [];
            g(a, this);
          }
          c.createPromiseCapability = function () {
            var a = {};
            a.promise = new x(function (d, k) {
              a.resolve = d;
              a.reject = k;
            });
            return a;
          };
          var y = c.Promise,
            E =
              y &&
              'resolve' in y &&
              'reject' in y &&
              'all' in y &&
              'race' in y &&
              (function () {
                var a;
                new y(function (d) {
                  a = d;
                });
                return 'function' === typeof a;
              })();
          'undefined' !== typeof exports && exports
            ? ((exports.Promise = E ? y : x), (exports.Polyfill = x))
            : 'function' === typeof define && h(22)
            ? define(function () {
                return E ? y : x;
              })
            : E || (c.Promise = x);
          var d = 'pending',
            k = 'sealed',
            r = 'fulfilled',
            B = 'rejected',
            w = function () {},
            F = 'undefined' !== typeof n ? n : setTimeout,
            D = [],
            K;
          x.prototype = {
            constructor: x,
            state_: d,
            then_: null,
            data_: void 0,
            then: function (a, d) {
              a = {
                owner: this,
                then: new this.constructor(w),
                fulfilled: a,
                rejected: d,
              };
              this.state_ === r || this.state_ === B
                ? e(f, a)
                : this.then_.push(a);
              return a.then;
            },
            catch: function (a) {
              return this.then(null, a);
            },
          };
          x.all = function (a) {
            if ('[object Array]' !== Object.prototype.toString.call(a))
              throw new TypeError('You must pass an array to Promise.all().');
            return new this(function (d, k) {
              function b(a) {
                e++;
                return function (k) {
                  r[a] = k;
                  --e || d(r);
                };
              }
              for (var r = [], e = 0, c = 0, w; c < a.length; c++)
                (w = a[c]) && 'function' === typeof w.then
                  ? w.then(b(c), k)
                  : (r[c] = w);
              e || d(r);
            });
          };
          x.race = function (a) {
            if ('[object Array]' !== Object.prototype.toString.call(a))
              throw new TypeError('You must pass an array to Promise.race().');
            return new this(function (d, k) {
              for (var b = 0, r; b < a.length; b++)
                (r = a[b]) && 'function' === typeof r.then
                  ? r.then(d, k)
                  : d(r);
            });
          };
          x.resolve = function (a) {
            return a && 'object' === b(a) && a.constructor === this
              ? a
              : new this(function (d) {
                  d(a);
                });
          };
          x.reject = function (a) {
            return new this(function (d, k) {
              k(a);
            });
          };
        })(
          'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof c
            ? c
            : 'undefined' !== typeof self
            ? self
            : void 0
        );
      }.call(this, h(10), h(8).setImmediate));
    },
    function (c, l, h) {
      (function (c, h) {
        (function (b, c) {
          function a(a) {
            delete A[a];
          }
          function e(d) {
            if (C) setTimeout(e, 0, d);
            else {
              var k = A[d];
              if (k) {
                C = !0;
                try {
                  var b = k.callback,
                    g = k.args;
                  switch (g.length) {
                    case 0:
                      b();
                      break;
                    case 1:
                      b(g[0]);
                      break;
                    case 2:
                      b(g[0], g[1]);
                      break;
                    case 3:
                      b(g[0], g[1], g[2]);
                      break;
                    default:
                      b.apply(c, g);
                  }
                } finally {
                  a(d), (C = !1);
                }
              }
            }
          }
          function g() {
            y = function (a) {
              h.nextTick(function () {
                e(a);
              });
            };
          }
          function f() {
            if (b.postMessage && !b.importScripts) {
              var a = !0,
                k = b.onmessage;
              b.onmessage = function () {
                a = !1;
              };
              b.postMessage('', '*');
              b.onmessage = k;
              return a;
            }
          }
          function n() {
            var a = 'setImmediate$' + Math.random() + '$',
              k = function (d) {
                d.source === b &&
                  'string' === typeof d.data &&
                  0 === d.data.indexOf(a) &&
                  e(+d.data.slice(a.length));
              };
            b.addEventListener
              ? b.addEventListener('message', k, !1)
              : b.attachEvent('onmessage', k);
            y = function (d) {
              b.postMessage(a + d, '*');
            };
          }
          function m() {
            var a = new MessageChannel();
            a.port1.onmessage = function (a) {
              e(a.data);
            };
            y = function (d) {
              a.port2.postMessage(d);
            };
          }
          function l() {
            var a = x.documentElement;
            y = function (d) {
              var k = x.createElement('script');
              k.onreadystatechange = function () {
                e(d);
                k.onreadystatechange = null;
                a.removeChild(k);
                k = null;
              };
              a.appendChild(k);
            };
          }
          function z() {
            y = function (a) {
              setTimeout(e, 0, a);
            };
          }
          if (!b.setImmediate) {
            var v = 1,
              A = {},
              C = !1,
              x = b.document,
              y,
              E = Object.getPrototypeOf && Object.getPrototypeOf(b);
            E = E && E.setTimeout ? E : b;
            '[object process]' === {}.toString.call(b.process)
              ? g()
              : f()
              ? n()
              : b.MessageChannel
              ? m()
              : x && 'onreadystatechange' in x.createElement('script')
              ? l()
              : z();
            E.setImmediate = function (a) {
              'function' !== typeof a && (a = new Function('' + a));
              for (
                var d = Array(arguments.length - 1), b = 0;
                b < d.length;
                b++
              )
                d[b] = arguments[b + 1];
              A[v] = { callback: a, args: d };
              y(v);
              return v++;
            };
            E.clearImmediate = a;
          }
        })(
          'undefined' === typeof self
            ? 'undefined' === typeof c
              ? this
              : c
            : self
        );
      }.call(this, h(10), h(13)));
    },
    function (c, l) {
      c.exports = {};
    },
    function (c, l, h) {
      (function (c) {
        var f = function (b, c) {
          var a = function u(a) {
              a = this['catch'](a);
              return {
                cancel: c,
                promise: a,
                then: e.bind(a),
                catch: u.bind(a),
              };
            },
            e = function q(b, e) {
              b = this.then(b, e);
              return {
                cancel: c,
                promise: b,
                then: q.bind(b),
                catch: a.bind(b),
              };
            };
          return { cancel: c, promise: b, then: e.bind(b), catch: a.bind(b) };
        };
        c.CancellablePromise = function (b, c) {
          var a = !1,
            e,
            g = new Promise(function (g, f) {
              e = function () {
                a || (c(), f('cancelled'));
              };
              new Promise(b).then(
                function (b) {
                  a = !0;
                  g(b);
                },
                function (b) {
                  a = !0;
                  f(b);
                }
              );
            });
          return f(g, e);
        };
        c.CancellablePromise.all = function (b) {
          var c = Promise.all(b);
          return f(c, function () {
            b.forEach(function (a) {
              a.cancel && a.cancel();
            });
          });
        };
      })('undefined' === typeof self ? void 0 : self);
    },
    function (c, l, h) {
      (function (c, l) {
        var b = h(0);
        (function (f) {
          f.Module = {
            INITIAL_MEMORY: 50331648,
            noExitRuntime: !0,
            devicePixelRatio: 1,
            cur_doc: null,
            cachePtrSize: 0,
            hasBufOwnership: !0,
            loaded: !1,
            initCb: null,
            cachePtr: null,
            cleanupState: null,
            docs: {},
            postEvent: function (a, b, c) {
              Module.workerMessageHandler.send('event', {
                docId: a,
                type: b,
                data: c,
              });
            },
            postPagesUpdatedEvent: function (a, b, c, f) {
              a = { pageDimensions: Module.GetPageDimensions(a) };
              if (c)
                for (var e = 0; e < c.length; ++e)
                  c[e] in a.pageDimensions
                    ? ((a.pageDimensions[c[e]].contentChanged = !0),
                      f && (a.pageDimensions[c[e]].annotationsUnchanged = !0))
                    : console.warn('Invalid Page Number '.concat(c[e]));
              Module.postEvent(b, 'pagesUpdated', a);
              return a;
            },
            GetIndividualPageDimensions: function (a, b, c) {
              a = Module.PageGetPageInfo(c);
              a.id = Module.PageGetId(c);
              return a;
            },
            GetPageDimensionsRange: function (a, b, c) {
              for (
                var e = {}, g = Module.PDFDocGetPageIterator(a, b);
                b < c && Module.IteratorHasNext(g);
                ++b
              ) {
                var f = Module.stackSave(),
                  h = Module.IteratorCurrent(g);
                e[b] = this.GetIndividualPageDimensions(a, b, h);
                Module.IteratorNext(g);
                Module.stackRestore(f);
              }
              return e;
            },
            GetPageDimensions: function (a) {
              try {
                var b = Module.stackSave();
                var c = Module.GetPageCount(a);
                if (0 === c) throw 'This document has no pages.';
                return Module.GetPageDimensionsRange(a, 1, c + 1);
              } finally {
                Module.stackRestore(b);
              }
            },
            loadDoc: function (a, b) {
              'undefined' === typeof Module && this._main();
              var c = null;
              try {
                var e = Module.stackSave();
                b = Module.CreateDoc(a, b);
                var f = Module.GetDoc(b);
                if (Module.PDFDocInitSecurityHandler(f))
                  return {
                    docId: b,
                    pageDimensions: Module.GetPageDimensions(f),
                  };
                c = {
                  type: 'NeedsPassword',
                  errorData: { docId: b },
                  message: 'This document requires a password',
                };
              } catch (m) {
                c = { type: 'InvalidPDF', message: m };
              } finally {
                Module.stackRestore(e);
              }
              throw c;
            },
            loadCanvas: function (a, b, c, f, h, m, l, n) {
              return new Promise(function (e, g) {
                var p = Module.GetDoc(a),
                  v = b + 1,
                  q = function () {
                    e(Module.RasterizePage(p, v, c, f, m, h, l, n));
                  },
                  u = Module.docs[a].chunkStorage;
                if (u) {
                  var d = Module.GetDownloadData(p).downloader,
                    k = u.getRequiredChunkOffsetArrays(d, v);
                  u.keepChunks(k.have);
                  d = function () {
                    var a = u.getChunks(k.missing);
                    Module.loadPromise = a
                      .then(function () {
                        var a = Module.loadPromise.cancelled;
                        Module.loadPromise = null;
                        a || q();
                      })
                      ['catch'](function (a) {
                        'cancelled' !== a ? g(a) : (Module.loadPromise = null);
                      });
                  };
                  Module.loadPromise ? Module.loadPromise.then(d, d) : d();
                } else q();
              });
            },
            loadResources: function (a, c) {
              Module.Initialize(c);
              Object(b.b)('worker', 'PDFNet initialized!');
              Module._TRN_PDFNetSetDefaultDiskCachingEnabled(!1);
              a = new Uint8Array(a);
              Module.PDFNetSetResourceData(a);
            },
            onRuntimeInitialized: function () {
              'undefined' === typeof Module &&
                (('undefined' !== typeof window ? window : self).Module = {});
              (function (a) {
                a.PDFDocExportXFDF = function (a, b) {
                  a = Module.GetDoc(a);
                  var c = Module.stackSave();
                  try {
                    var e = b
                      ? Module.PDFDocFDFExtract(a, b)
                      : Module.PDFDocFDFExtract(a);
                    var g = Module.FDFDocSaveAsXFDF(e);
                    Module.stackRestore(c);
                  } catch (q) {
                    throw (Module.stackRestore(c), q);
                  }
                  return g;
                };
                a.PageArrayToPageSet = function (a) {
                  var b = Module.stackSave();
                  try {
                    var c = Module.PageSetCreate();
                    for (var e = 0; e < a.length; ++e)
                      Module.PageSetAddPage(c, a[e]);
                    Module.stackRestore(b);
                  } catch (m) {
                    throw (Module.stackRestore(b), m);
                  }
                  return c;
                };
                a.cancelCurrent = function () {
                  var a = Module.loadPromise;
                  return a
                    ? (a.cancel(), (a.cancelled = !0))
                    : (a = Module.cleanupState)
                    ? (c(a.timeout),
                      a.cleanupArr.forEach(function (a) {
                        a();
                      }),
                      (Module.cleanupState = null),
                      !0)
                    : !1;
                };
                a.SetWorkerRestartCallback = function (a) {
                  Module.workerRestartCallback = a;
                };
                a.XFDFMerge = function (a, c, f) {
                  if (c) {
                    var e = [];
                    try {
                      Object(b.b)(
                        'worker',
                        'Merge XFDF of length '.concat(c.length)
                      );
                      var g = Module.GetUStringFromJSString(c, !0);
                      e.push(function () {
                        Module.UStringDestroy(g);
                      });
                      var h = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                      REX(Module._TRN_FDFDocCreateFromXFDF(g, h));
                      var l = Module.getValue(h, 'i8*');
                      e.push(function () {
                        Module.FDFDocDestroy(l);
                      });
                      Module.PDFDocFDFUpdate(a, l, f);
                    } finally {
                      e.forEach(function (a) {
                        a();
                      });
                    }
                  }
                };
                a.MergeXFDF = function (a, b, c) {
                  return new Promise(function (e, f) {
                    var g = [];
                    try {
                      var m = Module.stackSave();
                      g[g.length] = function () {
                        Module.stackRestore(m);
                      };
                      var h = Module.GetDoc(a);
                      Module.XFDFMerge(h, b, c);
                      g.forEach(function (a) {
                        a();
                      });
                      e({});
                    } catch (A) {
                      g.forEach(function (a) {
                        a();
                      }),
                        f(A);
                    }
                  });
                };
                a.CreateBufferFile = function (a, b, c) {
                  Module.MakeDev(a);
                  var e = new ArrayBuffer(b);
                  e = new Uint8Array(e);
                  c = c ? 0 : 255;
                  for (var f = 0; f < b; ++f) e[f] = c;
                  Module.docs[a] = { buffer: e };
                };
                a.ReadBufferFile = function (a, b) {
                  var c = Module.docs[a].buffer;
                  b &&
                    (Module.docs[a].buffer = new Uint8Array(c.buffer.slice(0)));
                  return c;
                };
                a.RemoveBufferFile = function (a) {
                  Module.docs[a] = null;
                };
                a.SaveHelper = function (a, b, c) {
                  c = 'undefined' === typeof c ? 2 : c;
                  Module.MakeDev(b);
                  a = Module._TRN_PDFDocSave(
                    a,
                    Module.GetUStringFromJSString(b),
                    c,
                    0
                  );
                  Module.docs[b].sink = null;
                  REX(a);
                  return Module.docs[b].buffer.buffer;
                };
                a.SaveDoc = function (a, b, c, h, m, l, n) {
                  return new Promise(function (e, g) {
                    var p = [];
                    try {
                      var v = Module.GetDoc(a),
                        y = Module.stackSave();
                      p[p.length] = function () {
                        Module.stackRestore(y);
                      };
                      Module.XFDFMerge(v, b, n);
                      for (
                        var q = Module.PDFDocGetPageIterator(v, 1);
                        Module.IteratorHasNext(q);

                      ) {
                        var d = Module.IteratorCurrent(q);
                        try {
                          for (var k = Module.PageGetNumAnnots(d); 0 < k; ) {
                            var r = Module.PageGetAnnot(d, --k);
                            Module.AnnotHasAppearance(r) ||
                              Module.AnnotRefreshAppearance(r);
                          }
                        } catch (H) {
                          console.warn(H);
                        }
                        Module.IteratorNext(q);
                      }
                      if (l) {
                        d = function (a) {
                          a = new Uint8Array(a);
                          f.FS.writeFile('watermarkFile', a);
                          a = Module.ImageCreateFromFile(
                            v,
                            Module.GetUStringFromJSString('watermarkFile')
                          );
                          f.FS.unlink('watermarkFile');
                          return a;
                        };
                        var B = Module.ElementBuilderCreate();
                        p.push(function () {
                          Module.ElementBuilderDestroy(B);
                        });
                        var w = Module.ElementWriterCreate();
                        p.push(function () {
                          Module.ElementWriterDestroy(w);
                        });
                        try {
                          if (!l.hasOwnProperty('default'))
                            throw Error(
                              "Watermark dictionary has no 'default' key!"
                            );
                          var F = d(l['default']);
                          q = Module.PDFDocGetPageIterator(v, 1);
                          for (k = -1; Module.IteratorHasNext(q); ) {
                            currentPage = Module.IteratorCurrent(q);
                            Module.IteratorNext(q);
                            k++;
                            var D = k.toString();
                            try {
                              r = void 0;
                              if (l.hasOwnProperty(D)) {
                                var A = l[D];
                                if (A) r = d(A);
                                else continue;
                              } else r = F;
                              var z = Module.PageGetPageInfo(currentPage),
                                u = Module.ElementBuilderCreateImage(
                                  B,
                                  r,
                                  0,
                                  0,
                                  z.width,
                                  z.height
                                );
                              Module.ElementWriterBegin(w, currentPage);
                              Module.ElementWriterWritePlacedElement(w, u);
                              Module.ElementWriterEnd(w);
                            } catch (H) {
                              console.warn(
                                'Watermark for page ' +
                                  D +
                                  'can not be added due to error: ' +
                                  H
                              );
                            }
                          }
                        } catch (H) {
                          console.warn(
                            'Watermarks can not be added due to error: ' + H
                          );
                        }
                      }
                      q = 0;
                      if (h) {
                        var t = Module.PDFDocGetRoot(v);
                        (q = Module.ObjFindObj(t, 'OpenAction')) &&
                          Module.ObjPut(t, '__OpenActionBackup__', q);
                        var I = Module.ObjPutDict(t, 'OpenAction');
                        Module.ObjPutName(I, 'Type', 'Action');
                        Module.ObjPutName(I, 'S', 'JavaScript');
                        Module.ObjPutString(I, 'JS', 'this.print()');
                      }
                      var G = Module.SaveHelper(v, a, m);
                      h &&
                        (q
                          ? Module.ObjPut(
                              t,
                              'OpenAction',
                              Module.ObjFindObj(t, '__OpenActionBackup__')
                            )
                          : Module.ObjErase(t, 'OpenAction'));
                      p.forEach(function (a) {
                        a();
                      });
                      if (c) e({ fileData: G });
                      else {
                        var L = G.slice(0);
                        e({ fileData: L });
                      }
                    } catch (H) {
                      p.forEach(function (a) {
                        a();
                      }),
                        g(H);
                    }
                  });
                };
                a.SaveDocFromFixedElements = function (a, b, c) {
                  a = Module.PDFDocCreateFromLayoutEls(a);
                  a = Module.CreateDoc({ type: 'ptr', value: a });
                  return Module.SaveDoc(a, b, !0, !1, c);
                };
                a.GetCurrentCanvasData = function (a) {
                  var c = Module.currentRenderData;
                  if (!c) return null;
                  a && REX(Module._TRN_PDFRasterizerUpdateBuffer(c.rast));
                  var e = Date.now();
                  a = Module.ReadBufferFile('b', a);
                  Object(b.b)(
                    'bufferTiming',
                    'Copy took '.concat(Date.now() - e)
                  );
                  return {
                    pageBuf: a.buffer,
                    pageWidth: c.out_width,
                    pageHeight: c.out_height,
                  };
                };
                a.RasterizePage = function (a, c, f, h, m, n, z, v) {
                  return new Promise(function (e, g) {
                    Module.currentRenderData = {};
                    var p = Module.currentRenderData;
                    p.out_width = parseInt(f, 10);
                    p.out_height = parseInt(h, 10);
                    var q = [];
                    q.push(function () {
                      Module.currentRenderData = null;
                    });
                    try {
                      var A = Module.stackSave();
                      q[q.length] = function () {
                        Module.stackRestore(A);
                      };
                      var d = Module.GetPage(a, c),
                        k = Module.PageGetPageWidth(d),
                        r = Module.PageGetPageHeight(d);
                      p.stride = 4 * p.out_width;
                      p.buf_size = p.out_width * p.out_height * 4;
                      Object(b.b)('Memory', 'Created rasterizer');
                      p.rast = Module.PDFRasterizerCreate();
                      q.push(function () {
                        Object(b.b)('Memory', 'Destroyed rasterizer');
                        Module._TRN_PDFRasterizerDestroy(p.rast);
                      });
                      if (z) {
                        var B = Module.EMSCreateUpdatedLayersContext(a, z);
                        0 !== B &&
                          (Module._TRN_PDFRasterizerSetOCGContext(p.rast, B),
                          q.push(function () {
                            Module._TRN_OCGContextDestroy(B);
                          }));
                      }
                      var w = Module.PageGetRotation(d),
                        F = 1 === n || 3 === n;
                      w = (1 === w || 3 === w) !== F;
                      var D = Module.allocate(48, 'i8', Module.ALLOC_STACK);
                      if (m) {
                        m.x1 = m[0];
                        m.y1 = m[1];
                        m.x2 = m[2];
                        m.y2 = m[3];
                        var C = Module.PageGetDefaultMatrix(d, 0),
                          u = Module.Matrix2DInverse(C);
                        m = Module.Matrix2DMultBBox(u, m);
                        if (m.x2 < m.x1) {
                          var t = m.x1;
                          m.x1 = m.x2;
                          m.x2 = t;
                        }
                        m.y2 < m.y1 && ((t = m.y1), (m.y1 = m.y2), (m.y2 = t));
                        var J = p.out_width / (w ? m.y2 - m.y1 : m.x2 - m.x1);
                        var I = Module.GetDefaultMatrixBox(d, m, n);
                      } else (I = Module.PageGetDefaultMatrix(d, n)), (J = p.out_width / (F ? r : k));
                      Module.Matrix2DSet(D, J, 0, 0, J, 0, 0);
                      Module.Matrix2DConcat(D, I);
                      Object(b.b)(
                        'Memory',
                        'Allocated buffer of '.concat(p.buf_size)
                      );
                      q.push(function () {
                        Object(b.b)(
                          'Memory',
                          'Deallocated buffer of '.concat(p.buf_size)
                        );
                        Module._free(p.bufPtr);
                      });
                      var G = Module.allocate(4, 'i8', Module.ALLOC_STACK),
                        L = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                      REX(
                        Module._TRN_PDFRasterizerSetDrawAnnotations(p.rast, 0)
                      );
                      Module.CreateBufferFile(
                        'b',
                        p.buf_size,
                        v.pageTransparent
                      );
                      q.push(function () {
                        Module.RemoveBufferFile('b');
                      });
                      var H = v.overprintMode;
                      if (10 === H) {
                        REX(Module._TRN_PDFRasterizerSetOverprint(p.rast, 1));
                        var Q = Module.PDFRasterizerRasterizeSeparations(
                          p.rast,
                          d,
                          p.out_width,
                          p.out_height,
                          D,
                          0,
                          0
                        );
                        e({
                          pageBuf: Q,
                          pageWidth: p.out_width,
                          pageHeight: p.out_height,
                        });
                      } else {
                        REX(Module._TRN_PDFRasterizerSetOverprint(p.rast, H));
                        REX(
                          Module._TRN_PDFRasterizerGetChunkRendererPath(
                            p.rast,
                            d,
                            Module.GetUStringFromJSString('b'),
                            p.out_width,
                            p.out_height,
                            !0,
                            D,
                            0,
                            0,
                            0,
                            G
                          )
                        );
                        var M = Module.getValue(G, 'i8*');
                        q.splice(1, 0, function () {
                          REX(Module._TRN_ChunkRendererDestroy(M));
                        });
                      }
                      var P = new Date().getTime(),
                        T = l(function R() {
                          try {
                            for (
                              var a = 0, d = new Date().getTime(), k = !1;
                              200 > a;

                            ) {
                              REX(Module._TRN_ChunkRendererRenderNext(M, L));
                              if (!Module.getValue(L, 'i8*')) {
                                k = !0;
                                break;
                              }
                              a = new Date().getTime() - d;
                            }
                            if (k) {
                              var c = Module.GetCurrentCanvasData(!1);
                              Object(b.b)(
                                'worker',
                                'Total Page Time '.concat(
                                  new Date().getTime() - P
                                )
                              );
                              q.forEach(function (a) {
                                a();
                              });
                              e(c);
                            } else Module.cleanupState.timeout = l(R);
                          } catch (S) {
                            q.forEach(function (a) {
                              a();
                            }),
                              g(S);
                          }
                        });
                      Module.cleanupState = { cleanupArr: q, timeout: T };
                      q.push(function () {
                        Module.cleanupState = null;
                      });
                    } catch (U) {
                      q.forEach(function (a) {
                        a();
                      }),
                        g(U);
                    }
                  });
                };
                a.UpdatePassword = function (a, b) {
                  try {
                    var c = Module.stackSave();
                    var e = Module.GetDoc(a);
                    return Module.PDFDocInitStdSecurityHandler(e, b)
                      ? (e in downloadDataMap &&
                          REX(
                            Module._TRN_PDFDocDownloaderInitialize(
                              e,
                              downloadDataMap[e].downloader
                            )
                          ),
                        {
                          success: !0,
                          pageDimensions: Module.GetPageDimensions(e),
                        })
                      : { success: !1 };
                  } finally {
                    Module.stackRestore(c);
                  }
                };
                a.GetTextData = function (a, b) {
                  return new Promise(function (c, e) {
                    var f = b + 1,
                      g = Module.GetDoc(a),
                      h = [];
                    try {
                      var l = Module.stackSave();
                      h[h.length] = function () {
                        Module.stackRestore(l);
                      };
                      var p = Module.GetPage(g, f),
                        n = Module.allocate(8, 'i8', Module.ALLOC_STACK);
                      REX(Module._TRN_TextExtractorCreate(n));
                      var x = Module.getValue(n, 'i8*');
                      h[h.length] = function () {
                        Module._TRN_TextExtractorDestroy(x);
                      };
                      REX(Module._TRN_TextExtractorBegin(x, p, 0, 1));
                      var y = Module.allocate(48, 'i8', Module.ALLOC_STACK);
                      REX(Module._TRN_PageGetDefaultMatrix(p, !0, 1, 0, y));
                      var u = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                      REX(Module._TRN_TextExtractorGetQuads(x, y, 0, u));
                      var d = Module.getValue(u, 'i8*'),
                        k = Module._malloc(8 * d);
                      h[h.length] = function () {
                        Module._free(k);
                      };
                      REX(Module._TRN_TextExtractorGetQuads(x, y, k, u));
                      var r = Module.GetJSDoubleArrFromCore(k, d),
                        B = Module.allocate(4, 'i8', Module.ALLOC_STACK),
                        w = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                      REX(Module._TRN_UStringCreate(w));
                      h[h.length] = function () {
                        Module._TRN_UStringDestroy(F);
                      };
                      var F = Module.getValue(w, 'i8*');
                      REX(
                        Module._TRN_TextExtractorGetAsTextWithOffsets(
                          x,
                          F,
                          0,
                          B
                        )
                      );
                      var D = Module.GetJSStringFromUString(F),
                        K = Module.getValue(B, 'i8*'),
                        t = Module._malloc(4 * K);
                      h[h.length] = function () {
                        Module._free(t);
                      };
                      REX(
                        Module._TRN_TextExtractorGetAsTextWithOffsets(
                          x,
                          F,
                          t,
                          B
                        )
                      );
                      var O = Module.GetJSIntArrayFromCore(t, K),
                        J = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                      REX(
                        Module._TRN_TextExtractorCmptSemanticInfo(x, y, 0, J)
                      );
                      var I = Module.getValue(J, 'i8*'),
                        G = Module._malloc(8 * I);
                      h[h.length] = function () {
                        Module._free(G);
                      };
                      REX(
                        Module._TRN_TextExtractorCmptSemanticInfo(x, y, G, J)
                      );
                      var L = Module.GetJSDoubleArrFromCore(G, I);
                      h.forEach(function (a) {
                        a();
                      });
                      c({ str: D, quads: r, offsets: O, struct: L });
                    } catch (H) {
                      h.forEach(function (a) {
                        a();
                      }),
                        e(H);
                    }
                  });
                };
                a.InsertBlankPages = function (a, b, c, f) {
                  return new Promise(function (e, g) {
                    var h = [],
                      m = Module.GetDoc(a);
                    try {
                      var l = Module.stackSave();
                      h[h.length] = function () {
                        Module.stackRestore(l);
                      };
                      for (var n = b.length - 1; 0 <= n; --n) {
                        var p = Module.PDFDocGetPageIterator(m, b[n]),
                          q = Module.PDFDocPageCreate(m, c, f);
                        Module.PDFDocPageInsert(m, p, q);
                      }
                      var u = Module.postPagesUpdatedEvent(m, a);
                      h.forEach(function (a) {
                        a();
                      });
                      e(u);
                    } catch (d) {
                      h.forEach(function (a) {
                        a();
                      }),
                        g(d);
                    }
                  });
                };
                a.InsertPages = function (a, b, c, f, h) {
                  return new Promise(function (e, g) {
                    var m = [],
                      l = Module.GetDoc(a);
                    try {
                      var n = Module.stackSave();
                      m[m.length] = function () {
                        Module.stackRestore(n);
                      };
                      if (b instanceof ArrayBuffer) {
                        var p = Module.CreateDoc(b);
                        var q = Module.GetDoc(p);
                        m[m.length] = function () {
                          Module.DeleteDoc(p);
                        };
                      } else q = Module.GetDoc(b);
                      for (
                        var u = c.length, d = Module.PageSetCreate(), k = 0;
                        k < u;
                        ++k
                      )
                        Module.PageSetAddPage(d, c[k]);
                      Module.PDFDocInsertPages(l, f, q, d, h);
                      var r = Module.postPagesUpdatedEvent(l, a);
                      m.forEach(function (a) {
                        a();
                      });
                      e(r);
                    } catch (B) {
                      m.forEach(function (a) {
                        a();
                      }),
                        g(B);
                    }
                  });
                };
                a.MovePages = function (a, b, c) {
                  return new Promise(function (e, f) {
                    var g = [],
                      h = Module.GetDoc(a);
                    try {
                      var m = Module.stackSave();
                      g[g.length] = function () {
                        Module.stackRestore(m);
                      };
                      for (
                        var l = b.length, n = Module.PageSetCreate(), p = 0;
                        p < l;
                        ++p
                      )
                        Module.PageSetAddPage(n, b[p]);
                      Module.PDFDocMovePages(h, c, n);
                      var y = Module.postPagesUpdatedEvent(h, a);
                      g.forEach(function (a) {
                        a();
                      });
                      e(y);
                    } catch (E) {
                      g.forEach(function (a) {
                        a();
                      }),
                        f(E);
                    }
                  });
                };
                a.RemovePages = function (a, b) {
                  return new Promise(function (c, e) {
                    var f = Module.GetDoc(a),
                      g = [];
                    try {
                      var h = Module.stackSave();
                      g[g.length] = function () {
                        Module.stackRestore(h);
                      };
                      for (var l = b.length - 1; 0 <= l; --l) {
                        var n = Module.PDFDocGetPageIterator(f, b[l]);
                        Module.IteratorHasNext(n) &&
                          Module.PDFDocPageRemove(f, n);
                      }
                      var p = Module.postPagesUpdatedEvent(f, a);
                      g.forEach(function (a) {
                        a();
                      });
                      c(p);
                    } catch (x) {
                      g.forEach(function (a) {
                        a();
                      }),
                        e(x);
                    }
                  });
                };
                a.RotatePages = function (a, b, c) {
                  return new Promise(function (e, f) {
                    var g = Module.GetDoc(a),
                      h = [];
                    try {
                      var l = Module.stackSave();
                      h[h.length] = function () {
                        Module.stackRestore(l);
                      };
                      var m = b.length,
                        n = 0,
                        p = Module.PDFDocGetPageIterator(g, b[0]),
                        y = [];
                      h.push(function () {
                        Module._TRN_IteratorDestroy(p);
                      });
                      for (
                        var u = b[0];
                        Module.IteratorHasNext(p) && n < b[m - 1];
                        ++u
                      ) {
                        if (u === b[n]) {
                          var d = Module.IteratorCurrent(p),
                            k = (Module.PageGetRotation(d) + c) % 4;
                          Module.PageSetRotation(d, k);
                          y.push(u);
                          n++;
                        }
                        Module.IteratorNext(p);
                      }
                      var r = Module.postPagesUpdatedEvent(g, a, y, !0);
                      h.forEach(function (a) {
                        a();
                      });
                      e(r);
                    } catch (B) {
                      h.forEach(function (a) {
                        a();
                      }),
                        f(B);
                    }
                  });
                };
                a.ExtractPages = function (a, b, c, f, h) {
                  return new Promise(function (e, g) {
                    var l = [];
                    try {
                      var m = Module.GetDoc(a),
                        n = Module.stackSave();
                      l[l.length] = function () {
                        Module.stackRestore(n);
                      };
                      var p = function (a) {
                        l.forEach(function (a) {
                          a();
                        });
                        g(a);
                      };
                      Module.XFDFMerge(m, c, h);
                      var q = Module.CreateEmptyDoc();
                      l[l.length] = function () {
                        Module.DeleteDoc(q);
                      };
                      var u = Module.InsertPages(q, a, b, 1, !0)
                        .then(function () {
                          return Module.SaveDoc(q, void 0, !0, !1, void 0, f);
                        })
                        .then(function (a) {
                          l.forEach(function (a) {
                            a();
                          });
                          return a;
                        })
                        ['catch'](p);
                      e(u);
                    } catch (d) {
                      p(d);
                    }
                  });
                };
                a.CropPages = function (a, b, c, f, h, l) {
                  return new Promise(function (e, g) {
                    var n = Module.GetDoc(a),
                      m = [];
                    try {
                      var p = Module.stackSave();
                      m[m.length] = function () {
                        Module.stackRestore(p);
                      };
                      var q = b.length,
                        v = 0,
                        d = Module.PDFDocGetPageIterator(n, b[0]);
                      m.push(function () {
                        Module._TRN_IteratorDestroy(d);
                      });
                      for (
                        var k = [], r = b[0];
                        Module.IteratorHasNext(d) && v < b[q - 1];
                        ++r
                      ) {
                        if (r === b[v]) {
                          var B = Module.IteratorCurrent(d),
                            w = Module.allocate(8, 'i8', Module.ALLOC_STACK);
                          REX(Module._TRN_PageGetCropBox(B, w));
                          var F = Module.PageGetRotation(B),
                            D = Module.getValue(w, 'double'),
                            u = Module.getValue(w + 8, 'double'),
                            t = Module.getValue(w + 16, 'double'),
                            z = Module.getValue(w + 24, 'double');
                          0 === F % 4
                            ? (Module.setValue(w, D + h, 'double'),
                              Module.setValue(w + 8, u + f, 'double'),
                              Module.setValue(w + 16, t - l, 'double'),
                              Module.setValue(w + 24, z - c, 'double'))
                            : 1 === F % 4
                            ? (Module.setValue(w, D + c, 'double'),
                              Module.setValue(w + 8, u + h, 'double'),
                              Module.setValue(w + 16, t - f, 'double'),
                              Module.setValue(w + 24, z - l, 'double'))
                            : 2 === F % 4
                            ? (Module.setValue(w, D + l, 'double'),
                              Module.setValue(w + 8, u + c, 'double'),
                              Module.setValue(w + 16, t - h, 'double'),
                              Module.setValue(w + 24, z - f, 'double'))
                            : 3 === F % 4 &&
                              (Module.setValue(w, D + f, 'double'),
                              Module.setValue(w + 8, u + l, 'double'),
                              Module.setValue(w + 16, t - c, 'double'),
                              Module.setValue(w + 24, z - h, 'double'));
                          Module.setValue(w + 32, 0, 'double');
                          REX(Module._TRN_PageSetBox(B, 0, w));
                          REX(Module._TRN_PageSetBox(B, 1, w));
                          k.push(r);
                          v++;
                        }
                        Module.IteratorNext(d);
                      }
                      var J = Module.postPagesUpdatedEvent(n, a, k, !0);
                      m.forEach(function (a) {
                        a();
                      });
                      e(J);
                    } catch (I) {
                      m.forEach(function (a) {
                        a();
                      }),
                        g(I);
                    }
                  });
                };
              })('undefined' === typeof self ? this.Module : self.Module);
              this.loaded = !0;
              Module.initCb && Module.initCb();
            },
          };
        })(self);
      }.call(this, h(8).clearImmediate, h(8).setImmediate));
    },
    function (c, l, h) {
      (function (c) {
        function f(a) {
          '@babel/helpers - typeof';
          f =
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
          return f(a);
        }
        var b = h(0),
          l = 'undefined' !== typeof window ? window : self;
        l.global = l;
        (function (a) {
          a.currentFileString = '/current';
          var e = 0,
            g = 0,
            h = {},
            n = null;
          Module.chunkMax = 200;
          var m = function (a, k, b, c, e) {
              var d = new XMLHttpRequest();
              return CancellablePromise(
                function (r, w) {
                  d.open('GET', a, !0);
                  d.responseType = 'arraybuffer';
                  d.onerror = function () {
                    w('Network error occurred');
                  };
                  d.onload = function () {
                    if (206 === this.status && d.response.byteLength === b) {
                      var a = new Int8Array(d.response);
                      r(a);
                    } else w('Download Failed');
                  };
                  var f = ['bytes=', k, '-', k + b - 1].join('');
                  d.setRequestHeader('Range', f);
                  e && (d.withCredentials = e);
                  c &&
                    Object.keys(c).forEach(function (a) {
                      d.setRequestHeader(a, c[a]);
                    });
                  d.send();
                },
                function () {
                  d.abort();
                }
              );
            },
            q = function (a) {
              this.file = a;
              this.filePosition = 0;
              this.fileLength = a.size;
              this.chunkData = null;
              this.chunkPosition = 0;
              this.chunkSize = 2097152;
              this.reader = new FileReaderSync();
            };
          q.prototype = {
            read: function (a, k, b) {
              b =
                this.filePosition + b <= this.fileLength
                  ? b
                  : this.fileLength - this.filePosition;
              a = a.subarray(k, k + b);
              k = b;
              if (
                0 < b &&
                this.chunkData &&
                this.chunkPosition < this.chunkData.length
              ) {
                var d = this.chunkPosition + b;
                d <= this.chunkData.length
                  ? (a.set(this.chunkData.subarray(this.chunkPosition, d)),
                    (this.chunkPosition = d),
                    (this.filePosition += b),
                    (b = 0))
                  : (a.set(this.chunkData.subarray(this.chunkPosition)),
                    (this.filePosition +=
                      this.chunkData.length - this.chunkPosition),
                    (b = d - this.chunkData.length));
              }
              0 < b &&
                (this.fileLength <= this.chunkSize
                  ? ((this.chunkData = new Int8Array(
                      this.reader.readAsArrayBuffer(this.file)
                    )),
                    (this.chunkPosition = this.filePosition),
                    a.set(
                      this.chunkData.subarray(
                        this.chunkPosition,
                        this.chunkPosition + b
                      )
                    ),
                    (this.chunkPosition += b))
                  : b < this.chunkSize
                  ? ((this.chunkPosition = 0),
                    (d = this.filePosition),
                    d + this.chunkSize > this.fileLength &&
                      ((d = this.fileLength - this.chunkSize),
                      (this.chunkPosition = this.filePosition - d)),
                    (this.chunkData = new Int8Array(
                      this.reader.readAsArrayBuffer(
                        this.file.slice(d, d + this.chunkSize)
                      )
                    )),
                    a.set(
                      this.chunkData.subarray(
                        this.chunkPosition,
                        this.chunkPosition + b
                      ),
                      k - b
                    ),
                    (this.chunkPosition += b))
                  : ((d = new Int8Array(
                      this.reader.readAsArrayBuffer(
                        this.file.slice(
                          this.filePosition,
                          this.filePosition + b
                        )
                      )
                    )),
                    a.set(d),
                    (this.chunkPosition = 0),
                    (this.chunkData = null)),
                (this.filePosition += b));
              return k;
            },
            seek: function (a) {
              this.chunkData &&
                ((this.chunkPosition += a - this.filePosition),
                this.fileLength > this.chunkSize &&
                  (this.chunkPosition > this.chunkData.length ||
                    0 > this.chunkPosition) &&
                  ((this.chunkPosition = 0), (this.chunkData = null)));
              this.filePosition = a;
            },
            close: function () {
              this.reader = this.file = null;
            },
            getPos: function () {
              return this.filePosition;
            },
            getTotalSize: function () {
              return this.fileLength;
            },
          };
          var t = function (a) {
            this.data = a;
            this.position = 0;
            this.length = this.data.length;
          };
          t.prototype = {
            read: function (a, b, c) {
              c =
                this.position + c <= this.length
                  ? c
                  : this.length - this.position;
              a = a.subarray(b, b + c);
              b = this.data.subarray(this.position, this.position + c);
              a.set(b);
              this.position += c;
              return c;
            },
            write: function (a, b, c) {
              c =
                this.position + c <= this.length
                  ? c
                  : this.length - this.position;
              a = a.subarray(b, b + c);
              this.data.subarray(this.position, this.position + c).set(a);
              this.position += c;
              return c;
            },
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              this.data = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
          };
          var v = function (a, b, c, e, w) {
            'object' === f(a)
              ? ((this.lruList = a.lruList),
                (this.chunkMap = a.chunkMap),
                (this.length = a.length),
                (this.url = a.url),
                (this.customHeaders = a.customHeaders),
                (this.withCredentials = a.withCredentials))
              : ((this.lruList = []),
                (this.chunkMap = {}),
                (this.chunkMap[b] = w),
                (this.length = b),
                (this.url = a),
                (this.customHeaders = c),
                (this.withCredentials = e));
          };
          v.prototype = {
            lruUpdate: function (a) {
              var d = this.lruList.lastIndexOf(a);
              0 <= d && this.lruList.splice(d, 1);
              this.lruList.push(a);
            },
            getChunk: function (a) {
              var d = this;
              if (this.chunkMap[a]) this.lruUpdate(a);
              else {
                var b = Math.min(a + 1048576, this.length) - 1,
                  c = new XMLHttpRequest();
                c.open('GET', this.url, !1);
                c.responseType = 'arraybuffer';
                c.setRequestHeader('Range', ['bytes=', a, '-', b].join(''));
                this.withCredentials &&
                  (c.withCredentials = this.withCredentials);
                this.customHeaders &&
                  Object.keys(this.customHeaders).forEach(function (a) {
                    c.setRequestHeader(a, d.customHeaders[a]);
                  });
                c.send();
                if (200 === c.status || 206 === c.status)
                  this.writeChunk(new Int8Array(c.response), a);
                else throw Error('Failed to load data from');
              }
              return this.chunkMap[a];
            },
            hadChunk: function (a) {
              return a in this.chunkMap;
            },
            hasChunk: function (a) {
              return this.chunkMap[a];
            },
            getCacheData: function () {
              return this.chunkMap[this.length];
            },
            getRequiredChunkOffsetArrays: function (a, b) {
              var d = { have: [], downloading: [], missing: [] };
              try {
                var k = Module.stackSave();
                var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
                REX(Module._TRN_DownloaderGetRequiredChunksSize(a, b, c));
                var e = Module.getValue(c, 'i8*');
                if (e) {
                  var f = Module._malloc(4 * e);
                  REX(Module._TRN_DownloaderGetRequiredChunks(a, b, f, e));
                  for (a = 0; a < e; ++a) {
                    var g = Module.getValue(f + 4 * a, 'i8*');
                    this.hasChunk(g)
                      ? d.have.push(g)
                      : this.hadChunk(g)
                      ? d.missing.push(g)
                      : d.downloading.push(g);
                  }
                }
              } finally {
                f && Module._free(f), Module.stackRestore(k);
              }
              return d;
            },
            keepVisibleChunks: function (a, b) {
              for (
                var d = b.length, k = Module.chunkMax / 2, c = 0, e = 0;
                e < d;
                ++e
              ) {
                var f = this.getRequiredChunkOffsetArrays(a, b[e]),
                  g = f.have,
                  h = g.length;
                c += h;
                if (c > k) {
                  this.keepChunks(g.slice(0, h - c + k));
                  break;
                }
                this.keepChunks(f.have);
              }
            },
            getChunkAsync: function (a) {
              var d = this,
                b = a + 1048576,
                c = 1048576;
              b > this.length && (c -= b - this.length);
              return m(
                this.url,
                a,
                c,
                this.customHeaders,
                this.withCredentials
              ).then(function (b) {
                d.writeChunk(b, a);
              });
            },
            getChunks: function (a) {
              for (var d = a.length, b = Array(d), c = 0; c < d; ++c)
                b[c] = this.getChunkAsync(a[c]);
              return CancellablePromise.all(b);
            },
            keepChunks: function (a) {
              for (var d = a.length, b = 0; b < d; ++b) this.lruUpdate(a[b]);
            },
            writeChunk: function (a, b, c) {
              c = c || 0;
              var d = this.chunkMap[b],
                k = a.length,
                e = this.lruList.length >= Module.chunkMax && !d;
              1048576 !== k || a.buffer.byteLength !== k
                ? (e
                    ? ((d = this.lruList.shift()),
                      (e = this.chunkMap[d]),
                      1048576 > e.length && (e = new Int8Array(1048576)),
                      (this.chunkMap[d] = null))
                    : (e = d ? this.chunkMap[b] : new Int8Array(1048576)),
                  e.subarray(c, c + k).set(a),
                  (a = e))
                : e && ((d = this.lruList.shift()), (this.chunkMap[d] = null));
              this.lruUpdate(b);
              this.chunkMap[b] = a;
            },
          };
          var A = function (a) {
            this.chunkStorage = a;
            this.position = 0;
            this.length = this.chunkStorage.length;
          };
          A.prototype = {
            read: function (a, b, c) {
              var d = this.position + c <= this.length,
                k = d ? c : this.length - this.position;
              if (this.position < this.length) {
                var e;
                for (e = 0; e < k; ) {
                  var r = this.position % 1048576;
                  var f = this.position - r;
                  var g = k - e;
                  if (this.chunkStorage.hadChunk(f)) {
                    f = this.chunkStorage.getChunk(f);
                    var h = a.subarray(b + e, b + e + g);
                    r = f.subarray(r, r + g);
                    h.set(r);
                    r = r.length;
                    e += r;
                    this.position += r;
                  } else for (this.position += g; e < k; ++e) h[e] = 0;
                }
              }
              if (!d) {
                h = b + k;
                if ((c -= k))
                  (b = this.chunkStorage.getCacheData()),
                    c > b.length && (c = b.length),
                    (d = this.position - this.length),
                    (h = a.subarray(h, h + c)),
                    (r = b.subarray(d, d + c)),
                    h.set(r);
                this.position += c;
                return k + c;
              }
              return k;
            },
            write: function (a, b, c) {
              var d = this.position + c <= this.length,
                k =
                  this.position + c <= this.length
                    ? c
                    : this.length - this.position,
                e = a.subarray(b, b + k),
                r = this.position % 1048576;
              this.chunkStorage.writeChunk(e, this.position - r, r);
              this.position += k;
              if (!d) {
                e = b + k;
                if ((c -= k))
                  (b = this.chunkStorage.getCacheData()),
                    c > b.length && (c = b.length),
                    (d = this.position - this.length),
                    (e = a.subarray(e, e + c)),
                    b.subarray(d, d + c).set(e);
                this.position += c;
                return k + c;
              }
              return k;
            },
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              this.chunkStorage = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
          };
          var C = function (a) {
            this.docId = a;
            this.length = 0;
            this.data = new Int8Array(8192);
            this.position = 0;
          };
          C.prototype = {
            seek: function (a) {
              this.position = a;
            },
            close: function () {
              var a = new Int8Array(this.data.buffer.slice(0, this.length));
              Module.ChangeDocBackend(this.docId, {
                ptr: Module.GetDoc(this.docId),
                buffer: a,
              });
              this.data = null;
            },
            getPos: function () {
              return this.position;
            },
            getTotalSize: function () {
              return this.length;
            },
            read: function (a, b, c) {
              var d = this.data.length;
              c = c + b < d ? c : d - b;
              a = a.subarray(b, b + c);
              b = this.data.subarray(this.position, this.position + c);
              a.set(b);
              this.position += c;
              return c;
            },
            write: function (a, b, c) {
              for (var d = this.position + c, k = this.data.length; d > k; ) {
                k = Math.max(k * (16777216 < k ? 1.5 : 2), d);
                var e = new Int8Array(k);
                e.set(this.data.subarray(0, this.length), 0);
                this.data = e;
              }
              a = a.subarray(b, b + c);
              this.data.set(a, this.position);
              this.position += c;
              this.position > this.length && (this.length = this.position);
              return c;
            },
          };
          var x = {
            IsSink: function (a) {
              return 66 === (a.flags & 255);
            },
            open: function (a) {
              var b = a.path.slice(1);
              this.IsSink(a)
                ? ((a.provider = new C(b)), (Module.docs[b].sink = a.provider))
                : (a.provider = Module.docs[b].sink
                    ? new t(Module.docs[b].sink.data)
                    : Module.docs[b].chunkStorage
                    ? new A(Module.docs[b].chunkStorage)
                    : Module.docs[b].buffer
                    ? new t(Module.docs[b].buffer)
                    : new q(Module.docs[b].file));
            },
            close: function (a) {
              a.provider.close();
            },
            read: function (a, b, c, e, f) {
              return a.provider.read(b, c, e);
            },
            llseek: function (a, b, c) {
              a = a.provider;
              1 === c
                ? (b += a.getPos())
                : 2 === c && (b = a.getTotalSize() + b);
              if (0 > b) throw new FS.ErrnoError(l.ERRNO_CODES.EINVAL);
              a.seek(b);
              return b;
            },
            write: function (a, b, c, e, f) {
              return e ? a.provider.write(b, c, e) : 0;
            },
          };
          l.THROW = function (a) {
            throw { type: 'InvalidPDF', message: a };
          };
          var y = function (b) {
            return 'Exception: \n\t Message: '
              .concat(
                a.GetJSStringFromCString(Module._TRN_GetMessage(b)),
                '\n\t Filename: '
              )
              .concat(
                a.GetJSStringFromCString(Module._TRN_GetFileName(b)),
                '\n\t Function: '
              )
              .concat(
                a.GetJSStringFromCString(Module._TRN_GetFunction(b)),
                '\n\t Linenumber: '
              )
              .concat(a.GetJSStringFromCString(Module._TRN_GetLineNum(b)));
          };
          a.GetErrToString = y;
          l.REX = function (a) {
            a && THROW(y(a));
          };
          a.Initialize = function (a) {
            var b = Module.stackSave();
            a = a
              ? Module.allocate(
                  Module.intArrayFromString(a),
                  'i8',
                  Module.ALLOC_STACK
                )
              : 0;
            REX(Module._TRN_PDFNetInitialize(a));
            Module.stackRestore(b);
          };
          a.GetDoc = function (a) {
            if (a in Module.docs) return Module.docs[a].ptr;
            throw {
              type: 'InvalidDocReference',
              message: 'Unable to access Document id='.concat(
                a,
                '. The document appears to be invalid or was deleted.'
              ),
            };
          };
          a.clearDocBackend = function () {
            null !== Module.cachePtr
              ? (Module.hasBufOwnership && Module._free(Module.cachePtr),
                (Module.cachePtr = null))
              : Module.docs[a.currentFileString] &&
                delete Module.docs[a.currentFileString];
          };
          a.MakeDev = function (a) {
            if (!h[a]) {
              var b = FS.makedev(3, 5);
              FS.registerDevice(b, x);
              FS.mkdev(a, 511, b);
              h[a] = !0;
            }
          };
          a.CreateDocFileBackend = function (a, b) {
            Module.MakeDev(b);
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            Module.docs[b] = { file: a };
            a = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            REX(Module._TRN_PDFDocCreateFromFilePath(a, d));
            d = Module.getValue(d, 'i8*');
            Module.docs[b].ptr = d;
          };
          a.InsertImageIntoDoc = function (a, b, c) {
            var d = [];
            try {
              var k = Module.ElementBuilderCreate();
              d.push(function () {
                Module.ElementBuilderDestroy(k);
              });
              var e = Module.ElementWriterCreate();
              d.push(function () {
                Module.ElementWriterDestroy(e);
              });
              if (c) {
                var f = c.width;
                var r = c.height;
              } else
                (f = Module.ImageGetImageWidth(b)),
                  (r = Module.ImageGetImageHeight(b)),
                  (c = f / r),
                  c > 612 / 792
                    ? ((f = 612), (r = parseInt(f / c, 10)))
                    : ((r = 792), (f = parseInt(r * c, 10)));
              var g = Module.ElementBuilderCreateImage(k, b, 0, 0, f, r),
                h = Module.PDFDocPageCreate(a, f, r);
              Module.ElementWriterBegin(e, h);
              Module.ElementWriterWritePlacedElement(e, g);
              Module.ElementWriterEnd(e);
              Module.PDFDocPagePushBack(a, h);
            } finally {
              d.forEach(function (a) {
                a();
              });
            }
          };
          var E = function (a, b, c) {
            'object' === f(a)
              ? ((this.m_pages = a.m_pages),
                (this.m_has_named_dests = a.m_has_named_dests),
                (this.m_finished_download = a.m_finished_download),
                (this.m_has_outline = a.m_has_outline),
                (this.m_current_page = a.m_current_page),
                (this.m_id = a.m_id),
                (this.size = a.size),
                (this.timeout = a.timeout),
                (this.eventPageArray = a.eventPageArray),
                (this.requirePageCallbacks = a.requirePageCallbacks))
              : ((this.m_pages = []),
                (this.m_has_outline = this.m_finished_download = this.m_has_named_dests = !1),
                (this.m_current_page = 1),
                (this.m_id = c),
                (this.size = a),
                (this.timeout = null),
                (this.eventPageArray = []),
                (this.requirePageCallbacks = {}));
            this.downloadUserData = Module.createDownloadUserData(b, c);
          };
          E.prototype = {
            getJSUrl: function () {
              return Module.extractDownloadUserData(this.downloadUserData).url;
            },
            getDocId: function () {
              return Module.extractDownloadUserData(this.downloadUserData)
                .docId;
            },
            destroyUserData: function () {
              this.m_id in Module.withCredentials &&
                delete Module.withCredentials[this.m_id];
              this.m_id in Module.customHeadersMap &&
                delete Module.customHeadersMap[this.m_id];
              Module.destroyDownloadUserData(this.downloadUserData);
            },
          };
          a.createDownloadUserData = function (a, b) {
            a = Module.allocate(
              Module.intArrayFromString(a),
              'i8',
              Module.ALLOC_NORMAL
            );
            var d = Module.allocate(8, 'i8', Module.ALLOC_NORMAL);
            Module.setValue(d, a, 'i8*');
            Module.setValue(d + 4, parseInt(b, 10), 'i32');
            return (this.downloadUserData = d);
          };
          a.extractDownloadUserData = function (b) {
            var d = Module.getValue(b, 'i8*');
            d = a.GetJSStringFromCString(d);
            b = Module.getValue(b + 4, 'i32').toString();
            return { url: d, docId: b };
          };
          a.destroyDownloadUserData = function (a) {
            Module._free(Module.getValue(a, 'i8*'));
            Module._free(a);
          };
          l.downloadDataMap = {};
          Module.customHeadersMap = {};
          Module.withCredentials = {};
          a.GetDownloadData = function (a) {
            if (a in downloadDataMap) return downloadDataMap[a];
          };
          a.DownloaderHint = function (a, b) {
            var d = this,
              c = Module.GetDoc(a),
              k = downloadDataMap[c];
            b.currentPage && (k.m_current_page = b.currentPage);
            if (b.visiblePages) {
              var e = b.visiblePages;
              for (b = 0; b < e.length; ++b) ++e[b];
              Object.keys(this.requirePageCallbacks).forEach(function (a) {
                d.requirePageCallbacks.hasOwnProperty(a) &&
                  e.push(parseInt(a, 10));
              });
              (b = Module.docs[a].chunkStorage) &&
                b.keepVisibleChunks(k.downloader, e);
              k = e.length;
              a = Module.allocate(4 * k, 'i8', Module.ALLOC_STACK);
              for (b = 0; b < k; ++b) Module.setValue(a + 4 * b, e[b], 'i32');
              REX(Module._TRN_PDFDocDownloadPages(c, a, k, 1, 0));
            }
          };
          a.RequirePage = function (a, b) {
            return new Promise(function (d, c) {
              c = Module.GetDoc(a);
              var k = downloadDataMap[c];
              !k || k.m_finished_download || k.m_pages[b]
                ? d()
                : (b in k.requirePageCallbacks
                    ? k.requirePageCallbacks[b].push(d)
                    : (k.requirePageCallbacks[b] = [d]),
                  (d = Module.allocate(4, 'i8', Module.ALLOC_STACK)),
                  Module.setValue(d, b, 'i32'),
                  Module._TRN_PDFDocDownloadPages(c, d, 1, 0, 0));
            });
          };
          a.IsLinearizationValid = function (a) {
            a = Module.GetDoc(a);
            if ((a = downloadDataMap[a])) {
              var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
              REX(Module._TRN_DownloaderIsLinearizationValid(a.downloader, b));
              return 0 !== Module.getValue(b, 'i8');
            }
            return !1;
          };
          a.ShouldRunRender = function (a, b) {
            a = Module.GetDoc(a);
            return (a = downloadDataMap[a])
              ? a.m_finished_download
                ? !0
                : a.m_pages[b]
              : !0;
          };
          a.createCallbacksStruct = function (a) {
            if (!n) {
              var b = function (a) {
                return function (b) {
                  var d = arguments;
                  b in downloadDataMap
                    ? a.apply(this, d)
                    : c(function () {
                        b in downloadDataMap && a.apply(this, d);
                      }, 0);
                };
              };
              n = {
                downloadProc: Module.addFunction(function (a, b, d, c, k) {
                  c = Module.extractDownloadUserData(c);
                  var e = c.docId;
                  m(
                    c.url,
                    b,
                    d,
                    Module.customHeadersMap[e],
                    Module.withCredentials[e]
                  ).then(function (c) {
                    e in Module.docs &&
                      Module.docs[e].chunkStorage &&
                      Module.docs[e].chunkStorage.writeChunk(c, b);
                    Module._TRN_DownloadComplete(0, b, d, a);
                  });
                }),
                notifyUpdatePage: Module.addFunction(
                  b(function (a, b, d, c) {
                    var k = downloadDataMap[a];
                    k.m_pages[b] = !0;
                    var e = k.eventPageArray;
                    if (b in k.requirePageCallbacks)
                      for (
                        d = k.requirePageCallbacks[b], c = 0;
                        c < d.length;
                        ++c
                      )
                        d[c]();
                    k.timeout
                      ? e.push(b)
                      : ((e = k.eventPageArray = [b]),
                        (k.timeout = setTimeout(function () {
                          Module.postPagesUpdatedEvent(a, k.m_id, e);
                          k.timeout = null;
                        }, 100)));
                  })
                ),
                notifyUpdateOutline: Module.addFunction(
                  b(function (a, b) {
                    a = downloadDataMap[a];
                    a.m_has_outline ||
                      ((a.m_has_outline = !0),
                      Module.postEvent(a.m_id, 'bookmarksUpdated', {}));
                  })
                ),
                notifyUpdateNamedDests: Module.addFunction(
                  b(function (a, b) {
                    a = downloadDataMap[a];
                    a.m_has_named_dests || (a.m_has_named_dests = !0);
                  })
                ),
                notifyUpdateThumb: Module.addFunction(b(function (a, b) {})),
                notifyFinishedDownload: Module.addFunction(
                  b(function (a, b) {
                    a = downloadDataMap[a];
                    a.m_finished_download ||
                      ((a.m_finished_download = !0),
                      Module.postEvent(a.m_id, 'documentComplete', {}));
                  })
                ),
                notifyDocumentError: Module.addFunction(function (a, b) {}),
                getCurrentPage: Module.addFunction(function (a, b) {
                  return downloadDataMap[a].m_current_page;
                }),
              };
            }
            b = Module.allocate(40, 'i8', Module.ALLOC_STACK);
            Module.setValue(b, n.downloadProc, 'i8*');
            Module.setValue(b + 4, a, 'i8*');
            Module.setValue(b + 8, n.notifyUpdatePage, 'i8*');
            Module.setValue(b + 12, n.notifyUpdateOutline, 'i8*');
            Module.setValue(b + 16, n.notifyUpdateNamedDests, 'i8*');
            Module.setValue(b + 20, n.notifyUpdateThumb, 'i8*');
            Module.setValue(b + 24, n.notifyFinishedDownload, 'i8*');
            Module.setValue(b + 28, n.notifyDocumentError, 'i8*');
            Module.setValue(b + 32, n.getCurrentPage, 'i8*');
            Module.setValue(b + 36, 0, 'i8*');
            return b;
          };
          a.CreateDocDownloaderBackend = function (a, b, c) {
            var d = a.url,
              k = a.size,
              e = a.customHeaders,
              f = a.withCredentials;
            e && (Module.customHeadersMap[c] = e);
            f && (Module.withCredentials[c] = f);
            var g = a.downloadData
              ? new E(a.downloadData, d, c, e, f)
              : new E(a.size, d, c, e, f);
            var r = Module.createCallbacksStruct(g.downloadUserData),
              h = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            Module.MakeDev(c);
            a.chunkStorage
              ? (d = new v(a.chunkStorage))
              : ((a = new Int8Array(
                  new ArrayBuffer(
                    Math.ceil((a.size + 1048576 - 1) / 1048576 / 8)
                  )
                )),
                (d = new v(d, k, e, f, a)));
            Module.docs[c] = { chunkStorage: d };
            REX(
              Module._TRN_DownloaderCreate(
                r,
                k,
                Module.GetUStringFromJSString(c),
                h
              )
            );
            g.downloader = Module.getValue(h, 'i8*');
            if ((k = Module._TRN_PDFDocCreateFromFilter(g.downloader, b)))
              Module._TRN_FilterDestroy(g.downloader), REX(k);
            b = Module.getValue(b, 'i8*');
            Module.docs[c].ptr = b;
            Module.PDFDocInitSecurityHandler(b) &&
              REX(Module._TRN_PDFDocDownloaderInitialize(b, g.downloader));
            downloadDataMap[b] = g;
          };
          a.CreateDocBackend = function (b, c) {
            var d = b.value,
              k = b.extension,
              g = b.type,
              h = Module.allocate(4, 'i8', Module.ALLOC_STACK),
              l = Module.stackSave();
            try {
              if (d)
                if ('ptr' === g) Module.docs[c] = { ptr: d };
                else {
                  var n = 'object' === f(d) && d.url;
                  g = k && 'pdf' !== k;
                  if (n) a.CreateDocDownloaderBackend(d, h, c);
                  else {
                    var m = d instanceof ArrayBuffer;
                    n = m ? 'buffer' : 'file';
                    if (
                      m &&
                      ((d = new Uint8Array(d)), 10485760 > d.length + e && !g)
                    ) {
                      e += d.length;
                      var p = d.length,
                        q = Module._malloc(d.length);
                      Module.HEAPU8.set(d, q);
                      REX(Module._TRN_PDFDocCreateFromBuffer(q, p, h));
                      var v = Module.getValue(h, 'i8*');
                      Module.docs[c] = {
                        ptr: v,
                        bufPtr: q,
                        bufPtrSize: p,
                        ownership: !0,
                      };
                      Module.docs[c].extension = k;
                      return;
                    }
                    Module.MakeDev(c);
                    m = {};
                    m[n] = d;
                    Module.docs[c] = m;
                    if (g) {
                      if (b.pageSizes && b.pageSizes.length)
                        var y = b.pageSizes[0];
                      else b.defaultPageSize && (y = b.defaultPageSize);
                      var A = Module.GetUStringFromJSString(c);
                      REX(Module._TRN_PDFDocCreate(h));
                      v = Module.getValue(h, 'i8*');
                      var u = Module.ImageCreateFromFile(v, A);
                      Module.InsertImageIntoDoc(v, u, y);
                    } else {
                      var t = Module.allocate(
                        Module.intArrayFromString(c),
                        'i8',
                        Module.ALLOC_STACK
                      );
                      REX(Module._TRN_PDFDocCreateFromFilePath(t, h));
                      v = Module.getValue(h, 'i8*');
                    }
                    Module.docs[c].extension = k;
                    Module.docs[c].ptr = v;
                  }
                }
              else
                REX(Module._TRN_PDFDocCreate(h)),
                  (v = Module.getValue(h, 'i8*')),
                  (Module.docs[c] = { ptr: v }),
                  (Module.docs[c].extension = k);
            } finally {
              Module.stackRestore(l);
            }
          };
          a.ChangeDocBackend = function (a, c) {
            var d = Module.docs[a];
            d
              ? (d.bufPtr &&
                  d.ownership &&
                  (Module._free(d.bufPtr), (e -= d.bufPtrSize)),
                delete Module.docs[a])
              : Object(b.d)(
                  'Trying to delete document '.concat(
                    a,
                    ' that does not exist.'
                  )
                );
            Module.docs[a] = c;
          };
          a.DeleteDoc = function (a) {
            var d = Module.docs[a];
            d
              ? (d.ptr &&
                  (d.ptr in downloadDataMap &&
                    (clearTimeout(downloadDataMap[d.ptr].timeout),
                    downloadDataMap[d.ptr].destroyUserData(),
                    delete downloadDataMap[d.ptr]),
                  Module.PDFDocDestroy(d.ptr)),
                d.bufPtr &&
                  d.ownership &&
                  (Module._free(d.bufPtr), (e -= d.bufPtrSize)),
                delete Module.docs[a])
              : Object(b.d)(
                  'Trying to delete document '.concat(
                    a,
                    ' that does not exist.'
                  )
                );
          };
          a.CreateDoc = function (b, c) {
            if ('id' === b.type) return Module.docPtrStringToIdMap[b.value];
            if (!c) {
              do c = (++g).toString();
              while (c in Module.docs);
            }
            Module.hasBufOwnership = !0;
            a.CreateDocBackend(b, c);
            return c;
          };
          a.CreateEmptyDoc = function () {
            var a = (++g).toString(),
              b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocCreate(b));
            b = Module.getValue(b, 'i8*');
            Module.docs[a] = { ptr: b };
            return a;
          };
          a.PDFDocCreateFromLayoutEls = function (a) {
            var b = new Uint8Array(a);
            a = Module._malloc(b.length);
            var d = Module.stackSave(),
              c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            Module.HEAPU8.set(b, a);
            b = Module._TRN_PDFDocCreateFromLayoutEls(a, b.length, c);
            c = Module.getValue(c, 'i8*');
            Module._free(a);
            Module.stackRestore(d);
            REX(b);
            return c;
          };
          a.GetPageCount = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPageCount(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.GetPage = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPage(a, b, c));
            a = Module.getValue(c, 'i8*');
            Module.PageIsValid(a) ||
              THROW(
                "Trying to access page that doesn't exist at index ".concat(b)
              );
            return a;
          };
          a.PageGetPageWidth = function (a) {
            var b = Module.allocate(8, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageWidth(a, 1, b));
            return Module.getValue(b, 'double');
          };
          a.PageGetPageHeight = function (a) {
            var b = Module.allocate(8, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageHeight(a, 1, b));
            return Module.getValue(b, 'double');
          };
          a.PageGetDefaultMatrix = function (a, b) {
            var c = Module.allocate(48, 'i8', Module.ALLOC_STACK);
            b || (b = 0);
            REX(Module._TRN_PageGetDefaultMatrix(a, !0, 1, b, c));
            return c;
          };
          a.GetMatrixAsArray = function (a) {
            for (var b = [], c = 0; 6 > c; ++c)
              b[c] = Module.getValue(a + 8 * c, 'double');
            return b;
          };
          a.PageGetPageInfo = function (a) {
            var b = Module.allocate(48, 'i8', Module.ALLOC_STACK),
              c = Module.allocate(8, 'i8', Module.ALLOC_STACK),
              d = Module.allocate(8, 'i8', Module.ALLOC_STACK),
              e = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetPageInfo(a, !0, 1, 0, c, d, b, e));
            return {
              rotation: Module.getValue(e, 'i8*'),
              width: Module.getValue(c, 'double'),
              height: Module.getValue(d, 'double'),
              matrix: Module.GetMatrixAsArray(b),
            };
          };
          a.GetUStringFromJSString = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK),
              d = 2 * (a.length + 1),
              k = Module.allocate(
                d,
                'i8',
                b ? Module.ALLOC_NORMAL : Module.ALLOC_STACK
              );
            Module.stringToUTF16(a, k, d);
            a = Module._TRN_UStringCreateFromString(k, c);
            b && Module._free(k);
            REX(a);
            return Module.getValue(c, 'i8*');
          };
          a.GetJSStringFromUString = function (a) {
            var b = Module.allocate(4, 'i16*', Module.ALLOC_STACK);
            REX(Module._TRN_UStringCStr(a, b));
            return Module.UTF16ToString(Module.getValue(b, 'i16*'));
          };
          a.GetJSStringFromCString = function (a) {
            return Module.UTF8ToString(a);
          };
          a.PDFNetSetResourceData = function (a) {
            Module.res_ptr = Module._malloc(a.length);
            Module.HEAPU8.set(a, Module.res_ptr);
            REX(Module._TRN_PDFNetSetResourceData(Module.res_ptr, a.length));
            Module.res_ptr_size = a.length;
          };
          a.PDFDocDestroy = function (a) {
            REX(Module._TRN_PDFDocDestroy(a));
          };
          a.VectorGetSize = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_VectorGetSize(a, b));
            return Module.getValue(b, 'i32');
          };
          a.VectorGetAt = function (a, b) {
            var c = Module.allocate(1, 'i8*', Module.ALLOC_STACK);
            REX(Module._TRN_VectorGetAt(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.VectorDestroy = function (a) {
            REX(Module._TRN_VectorDestroy(a));
          };
          a.PDFRasterizerCreate = function () {
            var a = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFRasterizerCreate(0, a));
            return Module.getValue(a, 'i8*');
          };
          a.ExtractSeparationData = function (a) {
            var b = Module.getValue(a, 'i8*'),
              c = Module.getValue(a + 4, 'i32'),
              d = Module.getValue(a + 8, 'i8*'),
              e = Module.HEAPU8[a + 12],
              f = Module.HEAPU8[a + 13],
              g = Module.HEAPU8[a + 14];
            a = Module.HEAPU8[a + 15];
            var h = new Uint8Array(c);
            h.set(Module.HEAPU8.subarray(b, b + c));
            b = Module.GetJSStringFromUString(d);
            return { color: [e, f, g, a], data: h.buffer, name: b };
          };
          a.PDFRasterizerRasterizeSeparations = function (a, b, c, e, f, g, h) {
            var d = Module.allocate(8, 'i8', Module.ALLOC_STACK);
            REX(
              Module._TRN_PDFRasterizerRasterizeSeparations(
                a,
                b,
                c,
                e,
                f,
                g,
                h,
                d
              )
            );
            a = Module.getValue(d, 'i8*');
            b = Module.VectorGetSize(a);
            c = Array(b);
            for (e = 0; e < b; ++e)
              (f = Module.VectorGetAt(a, e)),
                (c[e] = Module.ExtractSeparationData(f));
            Module.VectorDestroy(a);
            return c;
          };
          a.PageGetRotation = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetRotation(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.PageGetId = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetSDFObj(a, b));
            b = Module.getValue(b, 'i8*');
            a = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetObjNum(b, a));
            a = Module.getValue(a, 'i32');
            var c = Module.allocate(2, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetGenNum(b, c));
            c = Module.getValue(c, 'i16');
            return ''.concat(a, '-').concat(c);
          };
          a.PageSetRotation = function (a, b) {
            REX(Module._TRN_PageSetRotation(a, b));
          };
          a.GetDefaultMatrixBox = function (a, b, c) {
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetRotation(a, d));
            a = (Module.getValue(d, 'i32') + c) % 4;
            c = Module.allocate(48, 'i8', Module.ALLOC_STACK);
            switch (a) {
              case 0:
                return (
                  REX(Module._TRN_Matrix2DSet(c, 1, 0, 0, -1, -b.x1, b.y2)), c
                );
              case 1:
                return (
                  REX(Module._TRN_Matrix2DSet(c, 0, 1, 1, 0, -b.y1, -b.x1)), c
                );
              case 2:
                return (
                  REX(Module._TRN_Matrix2DSet(c, -1, 0, 0, 1, b.x2, -b.y1)), c
                );
              case 3:
                return (
                  REX(Module._TRN_Matrix2DSet(c, 0, -1, -1, 0, b.y2, b.x2)), c
                );
            }
            throw Error("Yikes, we don't support that rotation type");
          };
          a.Matrix2DMultBBox = function (a, b) {
            var c = Module.allocate(8, 'i8', Module.ALLOC_STACK),
              d = Module.allocate(8, 'i8', Module.ALLOC_STACK);
            Module.setValue(c, b.x1, 'double');
            Module.setValue(d, b.y1, 'double');
            REX(Module._TRN_Matrix2DMult(a, c, d));
            b.x1 = Module.getValue(c, 'double');
            b.y1 = Module.getValue(d, 'double');
            Module.setValue(c, b.x2, 'double');
            Module.setValue(d, b.y2, 'double');
            REX(Module._TRN_Matrix2DMult(a, c, d));
            b.x2 = Module.getValue(c, 'double');
            b.y2 = Module.getValue(d, 'double');
            return b;
          };
          a.Matrix2DMult = function (a, b) {
            var c = Module.allocate(8, 'i8', Module.ALLOC_STACK),
              d = Module.allocate(8, 'i8', Module.ALLOC_STACK);
            Module.setValue(c, b.x, 'double');
            Module.setValue(d, b.y, 'double');
            REX(Module._TRN_Matrix2DMult(a, c, d));
            b.x = Module.getValue(c, 'double');
            b.y = Module.getValue(d, 'double');
            return b;
          };
          a.Matrix2DConcat = function (a, b) {
            var c = Module.getValue(b, 'double'),
              d = Module.getValue(b + 8, 'double'),
              e = Module.getValue(b + 16, 'double'),
              k = Module.getValue(b + 24, 'double'),
              f = Module.getValue(b + 32, 'double');
            b = Module.getValue(b + 40, 'double');
            REX(Module._TRN_Matrix2DConcat(a, c, d, e, k, f, b));
          };
          a.Matrix2DSet = function (a, b, c, e, f, g, h) {
            REX(Module._TRN_Matrix2DSet(a, b, c, e, f, g, h));
          };
          a.IteratorHasNext = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_IteratorHasNext(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.IteratorCurrent = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_IteratorCurrent(a, b));
            return Module.getValue(Module.getValue(b, 'i8*'), 'i8*');
          };
          a.IteratorNext = function (a) {
            REX(Module._TRN_IteratorNext(a));
          };
          a.PageGetNumAnnots = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetNumAnnots(a, b));
            return Module.getValue(b, 'i32');
          };
          a.PageGetAnnot = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetAnnot(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.PageAnnotRemove = function (a, b) {
            REX(Module._TRN_PageAnnotRemoveByIndex(a, b));
          };
          a.AnnotGetType = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetType(a, b));
            return Module.getValue(b, 'i32');
          };
          a.AnnotHasAppearance = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_AnnotGetAppearance(a, 0, 0, b));
            return 0 !== Module.getValue(b, 'i8*');
          };
          a.AnnotRefreshAppearance = function (a) {
            REX(Module._TRN_AnnotRefreshAppearance(a));
          };
          a.ObjErase = function (a, b) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            REX(Module._TRN_ObjEraseFromKey(a, b));
          };
          a.GetJSDoubleArrFromCore = function (a, b) {
            for (var c = Array(b), d = 0; d < b; ++d)
              (c[d] = Module.getValue(a, 'double')), (a += 8);
            return c;
          };
          a.GetJSIntArrayFromCore = function (a, b) {
            for (var c = Array(b), d = 0; d < b; ++d)
              (c[d] = Module.getValue(a, 'i32')), (a += 4);
            return c;
          };
          a.BookmarkIsValid = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkIsValid(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.BookmarkGetNext = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetNext(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.BookmarkGetFirstChild = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetFirstChild(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.BookmarkHasChildren = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkHasChildren(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.BookmarkGetAction = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetAction(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.BookmarkGetTitle = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_BookmarkGetTitle(a, b));
            a = Module.getValue(b, 'i8*');
            return Module.GetJSStringFromUString(a);
          };
          a.ActionIsValid = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ActionIsValid(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.ActionGetType = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ActionGetType(a, b));
            return Module.getValue(b, 'i32');
          };
          a.ActionGetDest = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ActionGetDest(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.DestinationIsValid = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_DestinationIsValid(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.DestinationGetPage = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetPage(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.PageIsValid = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageIsValid(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.PageGetIndex = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageGetIndex(a, b));
            return Module.getValue(b, 'i32');
          };
          a.ObjGetAsPDFText = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetAsPDFText(a, b));
            a = Module.getValue(b, 'i8*');
            return Module.GetJSStringFromUString(a);
          };
          a.ObjFindObj = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            REX(Module._TRN_ObjFindObj(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.PDFDocGetFirstBookmark = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetFirstBookmark(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.DestinationGetExplicitDestObj = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetExplicitDestObj(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.DestinationGetFitType = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_DestinationGetFitType(a, b));
            return Module.getValue(b, 'i32');
          };
          a.ObjIsNumber = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjIsNumber(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.ObjGetNumber = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetNumber(a, b));
            return Module.getValue(b, 'double');
          };
          a.PDFDocGetRoot = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetRoot(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.ObjPutName = function (a, b, c) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            c = Module.allocate(
              Module.intArrayFromString(c),
              'i8',
              Module.ALLOC_STACK
            );
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutName(a, b, c, d));
            return Module.getValue(d, 'i8*');
          };
          a.ObjPutDict = function (a, b) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutDict(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.ObjPutString = function (a, b, c) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            c = Module.allocate(
              Module.intArrayFromString(c),
              'i8',
              Module.ALLOC_STACK
            );
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjPutString(a, b, c, d));
            return Module.getValue(d, 'i8*');
          };
          a.ObjPut = function (a, b, c) {
            b = Module.allocate(
              Module.intArrayFromString(b),
              'i8',
              Module.ALLOC_STACK
            );
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjPut(a, b, c, d));
            return Module.getValue(d, 'i8*');
          };
          a.ObjGetAt = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ObjGetAt(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.Matrix2DInverse = function (a) {
            var b = Module.allocate(48, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_Matrix2DInverse(a, b));
            return b;
          };
          a.PDFDocInitSecurityHandler = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocInitSecurityHandler(a, 0, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.PDFDocInitStdSecurityHandler = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            b = Module.intArrayFromString(b);
            var d = Module.allocate(b, 'i8', Module.ALLOC_STACK);
            REX(
              Module._TRN_PDFDocInitStdSecurityHandler(a, d, b.length - 1, c)
            );
            return 0 !== Module.getValue(c, 'i8');
          };
          a.PDFDocInsertPages = function (a, b, c, e, f) {
            REX(Module._TRN_PDFDocInsertPageSet(a, b, c, e, f ? 1 : 0, 0));
          };
          a.PDFDocMovePages = function (a, b, c) {
            REX(Module._TRN_PDFDocMovePageSet(a, b, a, c, 0, 0));
          };
          a.PDFDocGetPageIterator = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetPageIterator(a, b, c));
            return Module.getValue(c, 'i8*');
          };
          a.PDFDocPageRemove = function (a, b) {
            REX(Module._TRN_PDFDocPageRemove(a, b));
          };
          a.PDFDocPageCreate = function (a, b, c) {
            var d = Module.allocate(40, 'i8', Module.ALLOC_STACK);
            Module.setValue(d, 0, 'double');
            Module.setValue(d + 8, 0, 'double');
            Module.setValue(d + 16, b, 'double');
            Module.setValue(d + 24, c, 'double');
            Module.setValue(d + 32, 0, 'double');
            b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocPageCreate(a, d, b));
            return Module.getValue(b, 'i8*');
          };
          a.PDFDocPageInsert = function (a, b, c) {
            REX(Module._TRN_PDFDocPageInsert(a, b, c));
          };
          a.PageSetCreate = function () {
            var a = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageSetCreate(a));
            return Module.getValue(a, 'i8*');
          };
          a.PageSetCreateRange = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PageSetCreateRange(c, a, b));
            return Module.getValue(c, 'i8*');
          };
          a.PageSetAddPage = function (a, b) {
            REX(Module._TRN_PageSetAddPage(a, b));
          };
          a.ElementBuilderCreate = function () {
            var a = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ElementBuilderCreate(a));
            return Module.getValue(a, 'i8*');
          };
          a.ElementBuilderDestroy = function (a) {
            REX(Module._TRN_ElementBuilderDestroy(a));
          };
          a.ElementBuilderCreateImage = function (a, b, c, e, f, g) {
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(
              Module._TRN_ElementBuilderCreateImageScaled(a, b, c, e, f, g, d)
            );
            return Module.getValue(d, 'i8*');
          };
          a.ElementWriterCreate = function () {
            var a = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ElementWriterCreate(a));
            return Module.getValue(a, 'i8*');
          };
          a.ElementWriterDestroy = function (a) {
            REX(Module._TRN_ElementWriterDestroy(a));
          };
          a.ElementWriterBegin = function (a, b) {
            REX(Module._TRN_ElementWriterBeginOnPage(a, b, 1));
          };
          a.ElementWriterWritePlacedElement = function (a, b) {
            REX(Module._TRN_ElementWriterWritePlacedElement(a, b));
          };
          a.ElementWriterEnd = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ElementWriterEnd(a, b));
          };
          a.ImageGetImageWidth = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ImageGetImageWidth(a, b));
            return Module.getValue(b, 'i32');
          };
          a.ImageGetImageHeight = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ImageGetImageHeight(a, b));
            return Module.getValue(b, 'i32');
          };
          a.ImageCreateFromMemory2 = function (a, b, c) {
            var d = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ImageCreateFromMemory2(a, b, c, 0, d));
            return Module.getValue(d, 'i8*');
          };
          a.ImageCreateFromFile = function (a, b) {
            var c = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_ImageCreateFromFile(a, b, 0, c));
            return Module.getValue(c, 'i8*');
          };
          a.PDFDocPagePushBack = function (a, b) {
            REX(Module._TRN_PDFDocPagePushBack(a, b));
          };
          a.PDFDocHasOC = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocHasOC(a, b));
            return 0 !== Module.getValue(b, 'i8');
          };
          a.PDFDocGetOCGConfig = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_PDFDocGetOCGConfig(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.OCGContextCreate = function (a) {
            var b = Module.allocate(4, 'i8', Module.ALLOC_STACK);
            REX(Module._TRN_OCGContextCreateFromConfig(a, b));
            return Module.getValue(b, 'i8*');
          };
          a.UStringDestroy = function (a) {
            REX(Module._TRN_UStringDestroy(a));
          };
          a.PDFDocFDFUpdate = function (a, b, c) {
            if (c) {
              for (
                var d = Object.keys(c),
                  e = d.length,
                  f = Module._malloc(8 * e),
                  g = 0;
                g < e;
                ++g
              ) {
                var h = 8 * g,
                  k = d[g],
                  l = Module.GetDoc(c[k]);
                k = Module.GetUStringFromJSString(k);
                Module.setValue(f + h, l, 'i8*');
                Module.setValue(f + h + 4, k, 'i8*');
              }
              REX(Module._TRN_PDFDocFDFUpdateAppearanceDocs(a, b, f, e));
            } else REX(Module._TRN_PDFDocFDFUpdate(a, b));
          };
          a.FDFDocDestroy = function (a) {
            REX(Module._TRN_FDFDocDestroy(a));
          };
        })(l.Module);
      }.call(this, h(8).setImmediate));
    },
    function (c, l, h) {
      function f(c) {
        '@babel/helpers - typeof';
        f =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (b) {
                return typeof b;
              }
            : function (b) {
                return b &&
                  'function' === typeof Symbol &&
                  b.constructor === Symbol &&
                  b !== Symbol.prototype
                  ? 'symbol'
                  : typeof b;
              };
        return f(c);
      }
      (function (c) {
        c.SetupPDFNetFunctions = function (b) {
          Module._IB_ = [];
          for (
            var h = function C(a) {
                if ('object' === f(a) && null !== a)
                  if ('undefined' !== typeof a.byteLength) {
                    var b = Module._IB_.length;
                    Module._IB_[b] = new Uint8Array(a);
                    a = { handle: b, isArrayBufferRef: !0 };
                  } else
                    Object.keys(a).forEach(function (b) {
                      a.hasOwnProperty(b) && (a[b] = C(a[b]));
                    });
                return a;
              },
              a = function x(a) {
                'object' === f(a) &&
                  null !== a &&
                  (a.buffer
                    ? (a = a.buffer.slice(
                        a.byteOffset,
                        a.byteOffset + a.length
                      ))
                    : a.isArrayBufferRef
                    ? (a = Module._IB_[a.handle].buffer)
                    : Object.keys(a).forEach(function (b) {
                        a.hasOwnProperty(b) && (a[b] = x(a[b]));
                      }));
                return a;
              },
              e = Module._TRN_EMSCreateSharedWorkerInstance(),
              g,
              l = Module._TRN_EMSWorkerInstanceGetFunctionIterator(e),
              n = function (b, c) {
                return new Promise(function (f, g) {
                  b = h(b);
                  var d = b.docId;
                  d = d ? Module.GetDoc(d) : 0;
                  (d = Module.EMSCallSharedFunction(e, c, d))
                    ? g({
                        type: 'InvalidPDF',
                        message: Module.GetErrToString(d),
                      })
                    : ((g = Module.EMSGetLastResponse(e)), (g = a(g)), f(g));
                });
              };
            (g = Module._TRN_EMSFunctionIteratorGetNextCommandName(l));

          )
            (g = Module.GetJSStringFromCString(g)), c.queue.onAsync(g, n);
          Module._TRN_EMSFunctionIteratorDestroy(l);
          if (Module._TRN_EMSCreatePDFNetWorkerInstance) {
            var m = {};
            l = function (a, c) {
              b.on(a, c);
              m[a] = !0;
            };
            Module.docPtrStringToIdMap = {};
            var q = function (a) {
              if (a in Module.docPtrStringToIdMap)
                return Module.docPtrStringToIdMap[a];
              throw Error("Couldn't find document ".concat(a));
            };
            c.queue.onAsync('PDFDoc.RequirePage', function (a) {
              return Module.RequirePage(q(a.docId), a.pageNum);
            });
            l('pdfDocCreateFromBuffer', function (a) {
              a = Module.CreateDoc({ type: 'array', value: a.buf });
              var b = Module.GetDoc(a).toString(16);
              Module.docPtrStringToIdMap[b] = a;
              return b;
            });
            l('PDFDoc.destroy', function (a) {
              a = q(a.auto_dealloc_obj);
              Module.DeleteDoc(a);
            });
            l('PDFDoc.saveMemoryBuffer', function (a) {
              var b = q(a.doc);
              return Module.SaveHelper(Module.GetDoc(b), b, a.flags).slice(0);
            });
            l('pdfDocCreate', function () {
              var a = Module.CreateDoc({ type: 'new' }),
                b = Module.GetDoc(a).toString(16);
              Module.docPtrStringToIdMap[b] = a;
              return b;
            });
            l('GetPDFDoc', function (a) {
              a = a.docId;
              var b = Module.GetDoc(a).toString(16);
              Module.docPtrStringToIdMap[b] = a;
              return b;
            });
            l('ExtractPDFNetLayersContext', function (a) {
              var b = a.layers;
              a = Module.GetDoc(a.docId);
              var c = 0;
              b
                ? (c = Module.EMSCreateUpdatedLayersContext(a, b))
                : Module.PDFDocHasOC(a) &&
                  ((b = Module.PDFDocGetOCGConfig(a)),
                  (c = Module.OCGContextCreate(b)));
              return c.toString(16);
            });
            var z = Module._TRN_EMSCreatePDFNetWorkerInstance();
            l = Module._TRN_EMSWorkerInstanceGetFunctionIterator(z);
            for (
              n = function (b) {
                return new Promise(function (c, e) {
                  b = h(b);
                  var f = Module.EMSCallPDFNetFunction(z, b);
                  f
                    ? e(Module.GetErrToString(f))
                    : ((e = Module.EMSGetLastResponse(z)), (e = a(e)), c(e));
                });
              };
              (g = Module._TRN_EMSFunctionIteratorGetNextCommandName(l));

            )
              if (((g = Module.GetJSStringFromCString(g)), !m[g]))
                b.onAsync(g, n);
            Module._TRN_EMSFunctionIteratorDestroy(l);
          }
        };
      })(self);
    },
    function (c, l, h) {
      c = h(7);
      var f = h.n(c),
        n = h(15),
        b = h(16),
        t = h(11),
        a = h(0),
        e = h(9);
      (function (c) {
        var g = null;
        c.basePath = '../';
        var h = function () {
          var b = c.pdfWorkerPath || '';
          c.workerBasePath && (c.basePath = c.workerBasePath);
          var f = Object(e.a)(c.location.search),
            g = 'true' === f.isfull,
            h = g ? 'full/' : 'lean/';
          Object(a.c)();
          f.pdfWorkerPath &&
            ((b = f.pdfWorkerPath),
            (c.basePath = '../'),
            Object(t.b)() || (b = ''));
          c.basePath = f.externalPath
            ? f.externalPath
            : c.basePath + 'external/';
          Object(t.a)(''.concat(b + h, 'PDFNetC'), {
            'Wasm.wasm': g ? 1e7 : 4e6,
            'Wasm.js.mem': 1e5,
            '.js.mem': 6e6,
            '.mem': g ? 2e6 : 3e5,
          });
        };
        self.shouldResize || h();
        c.EmscriptenPDFManager = function () {};
        c.EmscriptenPDFManager.prototype = {
          OnInitialized: function (b) {
            Module.loaded
              ? b()
              : ((Module.initCb = function () {
                  b();
                }),
                Object(a.b)('worker', 'PDFNet is not initialized yet!'));
          },
          NewDoc: function (a, b) {
            return new Promise(function (c, e) {
              try {
                c(Module.loadDoc(a, b));
              } catch (C) {
                e(C);
              }
            });
          },
          Initialize: function (a, b, e, f) {
            a && (Module.TOTAL_MEMORY = a);
            Module.memoryInitializerPrefixURL = b;
            Module.asmjsPrefix = e;
            c.basePath = f;
            h();
          },
          shouldRunRender: function (a) {
            return Module.ShouldRunRender(a.docId, a.pageIndex + 1);
          },
        };
        var l = new b.a('worker_processor', self);
        Object(a.a)(l);
        (function (b) {
          function e(b) {
            var d = b.data,
              e = b.action;
            var f =
              'GetCanvas' === e || 'GetCanvasPartial' === e
                ? p.shouldRunRender(d)
                : !0;
            if (f) {
              g = b;
              var h = b.asyncCallCapability;
              Object(a.b)('Memory', 'Worker running command: '.concat(e));
              q.actionMap[e](d, b).then(
                function (a) {
                  'BeginOperation' !== g.action && (g = null);
                  h.resolve(a);
                },
                function (a) {
                  g = null;
                  h.reject(a);
                }
              );
            } else c.deferredQueue.queue(b), m();
          }
          function h(a) {
            a.asyncCallCapability = createPromiseCapability();
            g || q.length ? q.queue(a) : e(a);
            return a.asyncCallCapability.promise;
          }
          function l(a) {
            self.shouldResize &&
              p.Initialize(
                a.options.workerHeapSize,
                a.options.pdfResourcePath,
                a.options.pdfAsmPath,
                a.options.parentUrl
              );
            Module.chunkMax = a.options.chunkMax;
            if (a.array instanceof Uint8Array) {
              var d = 255 === a.array[0];
              b.postMessageTransfers = d;
              'response' in new XMLHttpRequest()
                ? p.OnInitialized(function () {
                    c.SetupPDFNetFunctions(b);
                    k();
                    b.send('test', {
                      supportTypedArray: !0,
                      supportTransfers: d,
                    });
                  })
                : b.send('test', !1);
            } else b.send('test', !1);
          }
          function m() {
            n.a.setImmediate(function () {
              if ((!g || 'BeginOperation' !== g.action) && q.length && !g) {
                var a = q.dequeue();
                e(a);
              }
            });
          }
          var p = new c.EmscriptenPDFManager(),
            q,
            t = !1,
            d = !1;
          Module.workerMessageHandler = b;
          var k = function () {
            t ? d || (b.send('workerLoaded', {}), (d = !0)) : (t = !0);
          };
          p.OnInitialized(k);
          (function () {
            c.queue = q = new f.a({
              strategy: f.a.ArrayStrategy,
              comparator: function (a, b) {
                return a.priority === b.priority
                  ? a.callbackId - b.callbackId
                  : b.priority - a.priority;
              },
            });
            c.deferredQueue = new f.a({
              strategy: f.a.ArrayStrategy,
              comparator: function (a, b) {
                return a.priority === b.priority
                  ? a.callbackId - b.callbackId
                  : b.priority - a.priority;
              },
            });
            q.actionMap = {};
            q.onAsync = function (a, c) {
              b.onAsync(a, h);
              q.actionMap[a] = c;
            };
          })();
          b.on('test', l);
          b.on('InitWorker', l);
          var r = function (a) {
              g && a(g) && (Module.cancelCurrent(), (g = null));
              q.removeAllMatching(a, function (a) {
                a.asyncCallCapability.reject({
                  type: 'Cancelled',
                  message:
                    'Operation was cancelled due to a change affecting the loaded document.',
                });
              });
            },
            u = function (a) {
              r(function (b) {
                return b.data && b.data.docId === a;
              });
            };
          b.on('UpdatePassword', function (a) {
            return Module.UpdatePassword(a.docId, a.password);
          });
          b.on('LoadRes', function (a) {
            Module.loadResources(a.array, a.l);
            return {};
          });
          b.on('DownloaderHint', function (a) {
            Module.DownloaderHint(a.docId, a.hint);
          });
          b.on('IsLinearized', function (a) {
            return Module.IsLinearizationValid(a.docId);
          });
          b.onNextAsync(m);
          q.onAsync('NewDoc', function (a) {
            return p.NewDoc(a);
          });
          q.onAsync('GetCanvas', function (b) {
            Object(a.b)(
              'workerdetails',
              'Run GetCanvas PageIdx: '
                .concat(b.pageIndex, ' Width: ')
                .concat(b.width)
            );
            Object(a.b)(
              'Memory',
              'loadCanvas with potential memory usage '.concat(
                b.width * b.height * 8
              )
            );
            return Module.loadCanvas(
              b.docId,
              b.pageIndex,
              b.width,
              b.height,
              b.rotation,
              null,
              b.layers,
              b.renderOptions
            );
          });
          q.onAsync('GetCanvasPartial', function (b) {
            Object(a.b)(
              'Memory',
              'GetCanvasPartial with potential memory usage '.concat(
                b.width * b.height * 8
              )
            );
            return Module.loadCanvas(
              b.docId,
              b.pageIndex,
              b.width,
              b.height,
              b.rotation,
              b.bbox,
              b.layers,
              b.renderOptions
            );
          });
          q.onAsync('LoadText', function (a) {
            return Module.GetTextData(a.docId, a.pageIndex);
          });
          q.onAsync('SaveDoc', function (a) {
            return Module.SaveDoc(
              a.docId,
              a.xfdfString,
              a.finishedWithDocument,
              a.printDocument,
              a.flags,
              a.watermarks,
              a.apdocs
            );
          });
          q.onAsync('SaveDocFromFixedElements', function (a) {
            return Module.SaveDocFromFixedElements(
              a.bytes,
              a.xfdfString,
              a.flags,
              a.watermarks
            );
          });
          q.onAsync('MergeXFDF', function (a) {
            return Module.MergeXFDF(a.docId, a.xfdf, a.apdocs);
          });
          q.onAsync('InsertPages', function (a) {
            return Module.InsertPages(
              a.docId,
              a.doc,
              a.pageArray,
              a.destPos,
              a.insertBookmarks
            );
          });
          q.onAsync('MovePages', function (a) {
            return Module.MovePages(a.docId, a.pageArray, a.destPos);
          });
          q.onAsync('RemovePages', function (a) {
            return Module.RemovePages(a.docId, a.pageArray);
          });
          q.onAsync('RotatePages', function (a) {
            return Module.RotatePages(a.docId, a.pageArray, a.rotation);
          });
          q.onAsync('ExtractPages', function (a) {
            return Module.ExtractPages(
              a.docId,
              a.pageArray,
              a.xfdfString,
              a.watermarks,
              a.apdocs
            );
          });
          q.onAsync('CropPages', function (a) {
            return Module.CropPages(
              a.docId,
              a.pageArray,
              a.topMargin,
              a.botMargin,
              a.leftMargin,
              a.rightMargin
            );
          });
          q.onAsync('InsertBlankPages', function (a) {
            return Module.InsertBlankPages(
              a.docId,
              a.pageArray,
              a.width,
              a.height
            );
          });
          q.onAsync('BeginOperation', function () {
            return Promise.resolve();
          });
          q.onAsync('RequirePage', function (a, b) {
            return Module.RequirePage(a.docId, a.pageNum);
          });
          b.on('FinishOperation', function () {
            if (g && 'BeginOperation' === g.action) (g = null), m();
            else throw { message: 'Operation has not started.' };
          });
          b.on('DeleteDocument', function (a) {
            a = a.docId;
            u(a);
            Module.DeleteDoc(a);
          });
          b.on('GetCanvasProgressive', function (b) {
            if (g && g.callbackId === b.callbackId) {
              Object(a.b)('worker', 'Progressive request in progress');
              var d = Module.GetCurrentCanvasData(!0);
            } else {
              if (q.find({ priority: 0, callbackId: b.callbackId }))
                throw (
                  (Object(a.b)('worker', 'Progressive request Queued'),
                  { type: 'Queued', message: 'Rendering has not started yet.' })
                );
              if (
                c.deferredQueue.find({ priority: 0, callbackId: b.callbackId })
              )
                throw (
                  (Object(a.b)('worker', 'Progressive request Deferred'),
                  { type: 'Queued', message: 'Rendering has not started yet.' })
                );
            }
            if (!d)
              throw (
                (Object(a.b)(
                  'worker',
                  'Progressive request invalid (render already complete)'
                ),
                {
                  type: 'Unavailable',
                  message: 'Rendering is complete or was cancelled.',
                })
              );
            return d;
          });
          b.on('actionCancel', function (b) {
            g && g.callbackId === b.callbackId
              ? (Object(a.b)('workerdetails', 'Cancelled Current Operation'),
                Module.cancelCurrent() && ((g = null), m()))
              : (Object(a.b)('workerdetails', 'Cancelled queued operation'),
                q.remove({ priority: 0, callbackId: b.callbackId }),
                c.deferredQueue.remove({
                  priority: 0,
                  callbackId: b.callbackId,
                }));
          });
        })(l);
      })('undefined' === typeof window ? self : window);
    },
  ]);
}.call(this || window));
