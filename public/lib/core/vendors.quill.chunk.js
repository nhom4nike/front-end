/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [2],
    {
      304: function (ha, da, h) {
        (function (h) {
          (function (h, ca) {
            ha.exports = ca();
          })('undefined' !== typeof self ? self : this, function () {
            return (function (h) {
              function aa(z) {
                if (ca[z]) return ca[z].exports;
                var x = (ca[z] = { i: z, l: !1, exports: {} });
                h[z].call(x.exports, x, x.exports, aa);
                x.l = !0;
                return x.exports;
              }
              var ca = {};
              aa.m = h;
              aa.c = ca;
              aa.d = function (h, x, e) {
                aa.o(h, x) ||
                  Object.defineProperty(h, x, {
                    configurable: !1,
                    enumerable: !0,
                    get: e,
                  });
              };
              aa.n = function (h) {
                var x =
                  h && h.__esModule
                    ? function () {
                        return h['default'];
                      }
                    : function () {
                        return h;
                      };
                aa.d(x, 'a', x);
                return x;
              };
              aa.o = function (h, x) {
                return Object.prototype.hasOwnProperty.call(h, x);
              };
              aa.p = '';
              return aa((aa.s = 109));
            })([
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(17);
                var z = ea(18),
                  x = ea(19),
                  e = ea(45),
                  f = ea(46),
                  y = ea(47),
                  r = ea(48),
                  n = ea(49),
                  w = ea(12),
                  ba = ea(32),
                  aa = ea(33),
                  fa = ea(31);
                ea = ea(1);
                ca.default = {
                  Scope: ea.Scope,
                  create: ea.create,
                  find: ea.find,
                  query: ea.query,
                  register: ea.register,
                  Container: h.default,
                  Format: z.default,
                  Leaf: x.default,
                  Embed: r.default,
                  Scroll: e.default,
                  Block: y.default,
                  Inline: f.default,
                  Text: n.default,
                  Attributor: {
                    Attribute: w.default,
                    Class: ba.default,
                    Style: aa.default,
                    Store: fa.default,
                  },
                };
              },
              function (h, ca) {
                function aa(e, f) {
                  void 0 === f && (f = !1);
                  return null == e
                    ? null
                    : null != e[ca.DATA_KEY]
                    ? e[ca.DATA_KEY].blot
                    : f
                    ? aa(e.parentNode, f)
                    : null;
                }
                function z(e, f) {
                  void 0 === f && (f = ba.ANY);
                  if ('string' === typeof e) var h = w[e] || y[e];
                  else if (e instanceof Text || e.nodeType === Node.TEXT_NODE)
                    h = w.text;
                  else if ('number' === typeof e)
                    e & ba.LEVEL & ba.BLOCK
                      ? (h = w.block)
                      : e & ba.LEVEL & ba.INLINE && (h = w.inline);
                  else if (e instanceof HTMLElement) {
                    var x = (e.getAttribute('class') || '').split(/\s+/),
                      z;
                    for (z in x) if ((h = r[x[z]])) break;
                    h = h || n[e.tagName];
                  }
                  return null == h
                    ? null
                    : f & ba.LEVEL & h.scope && f & ba.TYPE & h.scope
                    ? h
                    : null;
                }
                function x() {
                  for (var e = [], h = 0; h < arguments.length; h++)
                    e[h] = arguments[h];
                  if (1 < e.length)
                    return e.map(function (e) {
                      return x(e);
                    });
                  var ba = e[0];
                  if (
                    'string' !== typeof ba.blotName &&
                    'string' !== typeof ba.attrName
                  )
                    throw new f('Invalid definition');
                  if ('abstract' === ba.blotName)
                    throw new f('Cannot register abstract class');
                  w[ba.blotName || ba.attrName] = ba;
                  'string' === typeof ba.keyName
                    ? (y[ba.keyName] = ba)
                    : (null != ba.className && (r[ba.className] = ba),
                      null != ba.tagName &&
                        (Array.isArray(ba.tagName)
                          ? (ba.tagName = ba.tagName.map(function (e) {
                              return e.toUpperCase();
                            }))
                          : (ba.tagName = ba.tagName.toUpperCase()),
                        (Array.isArray(ba.tagName)
                          ? ba.tagName
                          : [ba.tagName]
                        ).forEach(function (e) {
                          if (null == n[e] || null == ba.className) n[e] = ba;
                        })));
                  return ba;
                }
                var e =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (f, h) {
                      function n() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((n.prototype = h.prototype), new n());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var f = (function (f) {
                  function h(e) {
                    e = '[Parchment] ' + e;
                    var h = f.call(this, e) || this;
                    h.message = e;
                    h.name = h.constructor.name;
                    return h;
                  }
                  e(h, f);
                  return h;
                })(Error);
                ca.ParchmentError = f;
                var y = {},
                  r = {},
                  n = {},
                  w = {};
                ca.DATA_KEY = '__blot';
                var ba;
                (function (e) {
                  e[(e.TYPE = 3)] = 'TYPE';
                  e[(e.LEVEL = 12)] = 'LEVEL';
                  e[(e.ATTRIBUTE = 13)] = 'ATTRIBUTE';
                  e[(e.BLOT = 14)] = 'BLOT';
                  e[(e.INLINE = 7)] = 'INLINE';
                  e[(e.BLOCK = 11)] = 'BLOCK';
                  e[(e.BLOCK_BLOT = 10)] = 'BLOCK_BLOT';
                  e[(e.INLINE_BLOT = 6)] = 'INLINE_BLOT';
                  e[(e.BLOCK_ATTRIBUTE = 9)] = 'BLOCK_ATTRIBUTE';
                  e[(e.INLINE_ATTRIBUTE = 5)] = 'INLINE_ATTRIBUTE';
                  e[(e.ANY = 15)] = 'ANY';
                })((ba = ca.Scope || (ca.Scope = {})));
                ca.create = function (e, h) {
                  var n = z(e);
                  if (null == n) throw new f('Unable to create ' + e + ' blot');
                  e =
                    e instanceof Node || e.nodeType === Node.TEXT_NODE
                      ? e
                      : n.create(h);
                  return new n(e, h);
                };
                ca.find = aa;
                ca.query = z;
                ca.register = x;
              },
              function (h, ca, ea) {
                function z(e) {
                  Array.isArray(e)
                    ? (this.ops = e)
                    : null != e && Array.isArray(e.ops)
                    ? (this.ops = e.ops)
                    : (this.ops = []);
                }
                var x = ea(51),
                  e = ea(11),
                  f = ea(3),
                  y = ea(20),
                  r = String.fromCharCode(0);
                z.prototype.insert = function (e, f) {
                  var h = {};
                  if (0 === e.length) return this;
                  h.insert = e;
                  null != f &&
                    'object' === typeof f &&
                    0 < Object.keys(f).length &&
                    (h.attributes = f);
                  return this.push(h);
                };
                z.prototype['delete'] = function (e) {
                  return 0 >= e ? this : this.push({ delete: e });
                };
                z.prototype.retain = function (e, f) {
                  if (0 >= e) return this;
                  e = { retain: e };
                  null != f &&
                    'object' === typeof f &&
                    0 < Object.keys(f).length &&
                    (e.attributes = f);
                  return this.push(e);
                };
                z.prototype.push = function (h) {
                  var n = this.ops.length,
                    r = this.ops[n - 1];
                  h = f(!0, {}, h);
                  if ('object' === typeof r) {
                    if (
                      'number' === typeof h['delete'] &&
                      'number' === typeof r['delete']
                    )
                      return (
                        (this.ops[n - 1] = {
                          delete: r['delete'] + h['delete'],
                        }),
                        this
                      );
                    if (
                      'number' === typeof r['delete'] &&
                      null != h.insert &&
                      (--n, (r = this.ops[n - 1]), 'object' !== typeof r)
                    )
                      return this.ops.unshift(h), this;
                    if (e(h.attributes, r.attributes)) {
                      if (
                        'string' === typeof h.insert &&
                        'string' === typeof r.insert
                      )
                        return (
                          (this.ops[n - 1] = { insert: r.insert + h.insert }),
                          'object' === typeof h.attributes &&
                            (this.ops[n - 1].attributes = h.attributes),
                          this
                        );
                      if (
                        'number' === typeof h.retain &&
                        'number' === typeof r.retain
                      )
                        return (
                          (this.ops[n - 1] = { retain: r.retain + h.retain }),
                          'object' === typeof h.attributes &&
                            (this.ops[n - 1].attributes = h.attributes),
                          this
                        );
                    }
                  }
                  n === this.ops.length
                    ? this.ops.push(h)
                    : this.ops.splice(n, 0, h);
                  return this;
                };
                z.prototype.chop = function () {
                  var e = this.ops[this.ops.length - 1];
                  e && e.retain && !e.attributes && this.ops.pop();
                  return this;
                };
                z.prototype.filter = function (e) {
                  return this.ops.filter(e);
                };
                z.prototype.forEach = function (e) {
                  this.ops.forEach(e);
                };
                z.prototype.map = function (e) {
                  return this.ops.map(e);
                };
                z.prototype.partition = function (e) {
                  var f = [],
                    h = [];
                  this.forEach(function (n) {
                    (e(n) ? f : h).push(n);
                  });
                  return [f, h];
                };
                z.prototype.reduce = function (e, f) {
                  return this.ops.reduce(e, f);
                };
                z.prototype.changeLength = function () {
                  return this.reduce(function (e, f) {
                    return f.insert
                      ? e + y.length(f)
                      : f.delete
                      ? e - f.delete
                      : e;
                  }, 0);
                };
                z.prototype.length = function () {
                  return this.reduce(function (e, f) {
                    return e + y.length(f);
                  }, 0);
                };
                z.prototype.slice = function (e, f) {
                  e = e || 0;
                  'number' !== typeof f && (f = Infinity);
                  for (
                    var h = [], n = y.iterator(this.ops), r = 0;
                    r < f && n.hasNext();

                  ) {
                    if (r < e) var w = n.next(e - r);
                    else (w = n.next(f - r)), h.push(w);
                    r += y.length(w);
                  }
                  return new z(h);
                };
                z.prototype.compose = function (f) {
                  var h = y.iterator(this.ops);
                  f = y.iterator(f.ops);
                  var n = [],
                    r = f.peek();
                  if (
                    null != r &&
                    'number' === typeof r.retain &&
                    null == r.attributes
                  ) {
                    for (
                      var x = r.retain;
                      'insert' === h.peekType() && h.peekLength() <= x;

                    )
                      (x -= h.peekLength()), n.push(h.next());
                    0 < r.retain - x && f.next(r.retain - x);
                  }
                  for (n = new z(n); h.hasNext() || f.hasNext(); )
                    if ('insert' === f.peekType()) n.push(f.next());
                    else if ('delete' === h.peekType()) n.push(h.next());
                    else {
                      x = Math.min(h.peekLength(), f.peekLength());
                      var aa = h.next(x),
                        ca = f.next(x);
                      if ('number' === typeof ca.retain) {
                        r = {};
                        'number' === typeof aa.retain
                          ? (r.retain = x)
                          : (r.insert = aa.insert);
                        if (
                          (x = y.attributes.compose(
                            aa.attributes,
                            ca.attributes,
                            'number' === typeof aa.retain
                          ))
                        )
                          r.attributes = x;
                        n.push(r);
                        if (!f.hasNext() && e(n.ops[n.ops.length - 1], r))
                          return (h = new z(h.rest())), n.concat(h).chop();
                      } else
                        'number' === typeof ca['delete'] &&
                          'number' === typeof aa.retain &&
                          n.push(ca);
                    }
                  return n.chop();
                };
                z.prototype.concat = function (e) {
                  var f = new z(this.ops.slice());
                  0 < e.ops.length &&
                    (f.push(e.ops[0]), (f.ops = f.ops.concat(e.ops.slice(1))));
                  return f;
                };
                z.prototype.diff = function (f, h) {
                  if (this.ops === f.ops) return new z();
                  var n = [this, f].map(function (e) {
                      return e
                        .map(function (h) {
                          if (null != h.insert)
                            return 'string' === typeof h.insert ? h.insert : r;
                          throw Error(
                            'diff() called ' +
                              (e === f ? 'on' : 'with') +
                              ' non-document'
                          );
                        })
                        .join('');
                    }),
                    w = new z();
                  h = x(n[0], n[1], h);
                  var aa = y.iterator(this.ops),
                    ca = y.iterator(f.ops);
                  h.forEach(function (f) {
                    for (var h = f[1].length; 0 < h; ) {
                      var n = 0;
                      switch (f[0]) {
                        case x.INSERT:
                          n = Math.min(ca.peekLength(), h);
                          w.push(ca.next(n));
                          break;
                        case x.DELETE:
                          n = Math.min(h, aa.peekLength());
                          aa.next(n);
                          w['delete'](n);
                          break;
                        case x.EQUAL:
                          n = Math.min(aa.peekLength(), ca.peekLength(), h);
                          var r = aa.next(n),
                            ba = ca.next(n);
                          if (e(r.insert, ba.insert))
                            w.retain(
                              n,
                              y.attributes.diff(r.attributes, ba.attributes)
                            );
                          else w.push(ba)['delete'](n);
                      }
                      h -= n;
                    }
                  });
                  return w.chop();
                };
                z.prototype.eachLine = function (e, f) {
                  f = f || '\n';
                  for (
                    var h = y.iterator(this.ops), n = new z(), r = 0;
                    h.hasNext();

                  ) {
                    if ('insert' !== h.peekType()) return;
                    var w = h.peek(),
                      x = y.length(w) - h.peekLength();
                    w =
                      'string' === typeof w.insert
                        ? w.insert.indexOf(f, x) - x
                        : -1;
                    if (0 > w) n.push(h.next());
                    else if (0 < w) n.push(h.next(w));
                    else {
                      if (!1 === e(n, h.next(1).attributes || {}, r)) return;
                      r += 1;
                      n = new z();
                    }
                  }
                  0 < n.length() && e(n, {}, r);
                };
                z.prototype.transform = function (e, f) {
                  f = !!f;
                  if ('number' === typeof e)
                    return this.transformPosition(e, f);
                  var h = y.iterator(this.ops);
                  e = y.iterator(e.ops);
                  for (var n = new z(); h.hasNext() || e.hasNext(); )
                    if (
                      'insert' !== h.peekType() ||
                      (!f && 'insert' === e.peekType())
                    )
                      if ('insert' === e.peekType()) n.push(e.next());
                      else {
                        var r = Math.min(h.peekLength(), e.peekLength()),
                          w = h.next(r),
                          x = e.next(r);
                        w['delete'] ||
                          (x['delete']
                            ? n.push(x)
                            : n.retain(
                                r,
                                y.attributes.transform(
                                  w.attributes,
                                  x.attributes,
                                  f
                                )
                              ));
                      }
                    else n.retain(y.length(h.next()));
                  return n.chop();
                };
                z.prototype.transformPosition = function (e, f) {
                  f = !!f;
                  for (
                    var h = y.iterator(this.ops), n = 0;
                    h.hasNext() && n <= e;

                  ) {
                    var r = h.peekLength(),
                      w = h.peekType();
                    h.next();
                    'delete' === w
                      ? (e -= Math.min(r, e - n))
                      : ('insert' === w && (n < e || !f) && (e += r), (n += r));
                  }
                  return e;
                };
                h.exports = z;
              },
              function (h) {
                function aa(f, h) {
                  if ('__proto__' === h) {
                    if (!e.call(f, h)) return;
                    if (r) return r(f, h).value;
                  }
                  return f[h];
                }
                function ca(e, f) {
                  y && '__proto__' === f.name
                    ? y(e, f.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: f.newValue,
                        writable: !0,
                      })
                    : (e[f.name] = f.newValue);
                }
                function z(h) {
                  if (!h || '[object Object]' !== f.call(h)) return !1;
                  var n = e.call(h, 'constructor'),
                    r =
                      h.constructor &&
                      h.constructor.prototype &&
                      e.call(h.constructor.prototype, 'isPrototypeOf');
                  if (h.constructor && !n && !r) return !1;
                  for (var y in h);
                  return 'undefined' === typeof y || e.call(h, y);
                }
                function x(e) {
                  return 'function' === typeof Array.isArray
                    ? Array.isArray(e)
                    : '[object Array]' === f.call(e);
                }
                var e = Object.prototype.hasOwnProperty,
                  f = Object.prototype.toString,
                  y = Object.defineProperty,
                  r = Object.getOwnPropertyDescriptor;
                h.exports = function w() {
                  var e,
                    f,
                    h = arguments[0],
                    r = 1,
                    y = arguments.length,
                    ea = !1;
                  'boolean' === typeof h &&
                    ((ea = h), (h = arguments[1] || {}), (r = 2));
                  if (
                    null == h ||
                    ('object' !== typeof h && 'function' !== typeof h)
                  )
                    h = {};
                  for (; r < y; ++r) {
                    var fa = arguments[r];
                    if (null != fa)
                      for (e in fa) {
                        var da = aa(h, e);
                        var ha = aa(fa, e);
                        h !== ha &&
                          (ea && ha && (z(ha) || (f = x(ha)))
                            ? (f
                                ? ((f = !1), (da = da && x(da) ? da : []))
                                : (da = da && z(da) ? da : {}),
                              ca(h, { name: e, newValue: w(ea, da, ha) }))
                            : 'undefined' !== typeof ha &&
                              ca(h, { name: e, newValue: ha }));
                      }
                  }
                  return h;
                };
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function y(e) {
                  var f =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (null == e) return f;
                  'function' === typeof e.formats &&
                    (f = (0, w.default)(f, e.formats()));
                  return null == e.parent ||
                    'scroll' == e.parent.blotName ||
                    e.parent.statics.scope !== e.statics.scope
                    ? f
                    : y(e.parent, f);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.BlockEmbed = ca.bubbleFormats = void 0;
                var r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  n = function sa(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return sa(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(3);
                var w = z(h);
                h = ea(2);
                var ba = z(h);
                h = ea(0);
                var aa = z(h);
                h = ea(16);
                var fa = z(h);
                h = ea(6);
                h = z(h);
                ea = ea(7);
                ea = z(ea);
                var da = (function (h) {
                  function y() {
                    x(this, y);
                    return e(
                      this,
                      (y.__proto__ || Object.getPrototypeOf(y)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(y, h);
                  r(y, [
                    {
                      key: 'attach',
                      value: function () {
                        n(
                          y.prototype.__proto__ ||
                            Object.getPrototypeOf(y.prototype),
                          'attach',
                          this
                        ).call(this);
                        this.attributes = new aa.default.Attributor.Store(
                          this.domNode
                        );
                      },
                    },
                    {
                      key: 'delta',
                      value: function () {
                        return new ba.default().insert(
                          this.value(),
                          (0, w.default)(
                            this.formats(),
                            this.attributes.values()
                          )
                        );
                      },
                    },
                    {
                      key: 'format',
                      value: function (e, f) {
                        e = aa.default.query(
                          e,
                          aa.default.Scope.BLOCK_ATTRIBUTE
                        );
                        null != e && this.attributes.attribute(e, f);
                      },
                    },
                    {
                      key: 'formatAt',
                      value: function (e, f, h, n) {
                        this.format(h, n);
                      },
                    },
                    {
                      key: 'insertAt',
                      value: function (e, f, h) {
                        'string' === typeof f && f.endsWith('\n')
                          ? ((h = aa.default.create(ha.blotName)),
                            this.parent.insertBefore(
                              h,
                              0 === e ? this : this.next
                            ),
                            h.insertAt(0, f.slice(0, -1)))
                          : n(
                              y.prototype.__proto__ ||
                                Object.getPrototypeOf(y.prototype),
                              'insertAt',
                              this
                            ).call(this, e, f, h);
                      },
                    },
                  ]);
                  return y;
                })(aa.default.Embed);
                da.scope = aa.default.Scope.BLOCK_BLOT;
                var ha = (function (h) {
                  function w(f) {
                    x(this, w);
                    f = e(
                      this,
                      (w.__proto__ || Object.getPrototypeOf(w)).call(this, f)
                    );
                    f.cache = {};
                    return f;
                  }
                  f(w, h);
                  r(w, [
                    {
                      key: 'delta',
                      value: function () {
                        null == this.cache.delta &&
                          (this.cache.delta = this.descendants(aa.default.Leaf)
                            .reduce(function (e, f) {
                              return 0 === f.length()
                                ? e
                                : e.insert(f.value(), y(f));
                            }, new ba.default())
                            .insert('\n', y(this)));
                        return this.cache.delta;
                      },
                    },
                    {
                      key: 'deleteAt',
                      value: function (e, f) {
                        n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'deleteAt',
                          this
                        ).call(this, e, f);
                        this.cache = {};
                      },
                    },
                    {
                      key: 'formatAt',
                      value: function (e, f, h, r) {
                        0 >= f ||
                          (aa.default.query(h, aa.default.Scope.BLOCK)
                            ? e + f === this.length() && this.format(h, r)
                            : n(
                                w.prototype.__proto__ ||
                                  Object.getPrototypeOf(w.prototype),
                                'formatAt',
                                this
                              ).call(
                                this,
                                e,
                                Math.min(f, this.length() - e - 1),
                                h,
                                r
                              ),
                          (this.cache = {}));
                      },
                    },
                    {
                      key: 'insertAt',
                      value: function (e, f, h) {
                        if (null != h)
                          return n(
                            w.prototype.__proto__ ||
                              Object.getPrototypeOf(w.prototype),
                            'insertAt',
                            this
                          ).call(this, e, f, h);
                        if (0 !== f.length) {
                          f = f.split('\n');
                          h = f.shift();
                          0 < h.length &&
                            (e < this.length() - 1 || null == this.children.tail
                              ? n(
                                  w.prototype.__proto__ ||
                                    Object.getPrototypeOf(w.prototype),
                                  'insertAt',
                                  this
                                ).call(this, Math.min(e, this.length() - 1), h)
                              : this.children.tail.insertAt(
                                  this.children.tail.length(),
                                  h
                                ),
                            (this.cache = {}));
                          var r = this;
                          f.reduce(function (e, f) {
                            r = r.split(e, !0);
                            r.insertAt(0, f);
                            return f.length;
                          }, e + h.length);
                        }
                      },
                    },
                    {
                      key: 'insertBefore',
                      value: function (e, f) {
                        var h = this.children.head;
                        n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'insertBefore',
                          this
                        ).call(this, e, f);
                        h instanceof fa.default && h.remove();
                        this.cache = {};
                      },
                    },
                    {
                      key: 'length',
                      value: function () {
                        null == this.cache.length &&
                          (this.cache.length =
                            n(
                              w.prototype.__proto__ ||
                                Object.getPrototypeOf(w.prototype),
                              'length',
                              this
                            ).call(this) + 1);
                        return this.cache.length;
                      },
                    },
                    {
                      key: 'moveChildren',
                      value: function (e, f) {
                        n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'moveChildren',
                          this
                        ).call(this, e, f);
                        this.cache = {};
                      },
                    },
                    {
                      key: 'optimize',
                      value: function (e) {
                        n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'optimize',
                          this
                        ).call(this, e);
                        this.cache = {};
                      },
                    },
                    {
                      key: 'path',
                      value: function (e) {
                        return n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'path',
                          this
                        ).call(this, e, !0);
                      },
                    },
                    {
                      key: 'removeChild',
                      value: function (e) {
                        n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'removeChild',
                          this
                        ).call(this, e);
                        this.cache = {};
                      },
                    },
                    {
                      key: 'split',
                      value: function (e) {
                        var f =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : !1;
                        if (f && (0 === e || e >= this.length() - 1)) {
                          f = this.clone();
                          if (0 === e)
                            return this.parent.insertBefore(f, this), this;
                          this.parent.insertBefore(f, this.next);
                          return f;
                        }
                        f = n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'split',
                          this
                        ).call(this, e, f);
                        this.cache = {};
                        return f;
                      },
                    },
                  ]);
                  return w;
                })(aa.default.Block);
                ha.blotName = 'block';
                ha.tagName = 'P';
                ha.defaultChild = 'break';
                ha.allowedChildren = [h.default, aa.default.Embed, ea.default];
                ca.bubbleFormats = y;
                ca.BlockEmbed = da;
                ca.default = ha;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f, h) {
                  f in e
                    ? Object.defineProperty(e, f, {
                        value: h,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[f] = h);
                  return e;
                }
                function e(e, f) {
                  f = (0, ma.default)(
                    !0,
                    {
                      container: e,
                      modules: { clipboard: !0, keyboard: !0, history: !0 },
                    },
                    f
                  );
                  if (f.theme && f.theme !== qa.DEFAULTS.theme) {
                    if (
                      ((f.theme = qa.import('themes/' + f.theme)),
                      null == f.theme)
                    )
                      throw Error(
                        'Invalid theme ' + f.theme + '. Did you register it?'
                      );
                  } else f.theme = Ba.default;
                  e = (0, ma.default)(!0, {}, f.theme.DEFAULTS);
                  [e, f].forEach(function (e) {
                    e.modules = e.modules || {};
                    Object.keys(e.modules).forEach(function (f) {
                      !0 === e.modules[f] && (e.modules[f] = {});
                    });
                  });
                  var h = Object.keys(e.modules)
                    .concat(Object.keys(f.modules))
                    .reduce(function (e, f) {
                      var h = qa.import('modules/' + f);
                      null == h
                        ? va.error(
                            'Cannot load ' +
                              f +
                              ' module. Are you sure you registered it?'
                          )
                        : (e[f] = h.DEFAULTS || {});
                      return e;
                    }, {});
                  null != f.modules &&
                    f.modules.toolbar &&
                    f.modules.toolbar.constructor !== Object &&
                    (f.modules.toolbar = { container: f.modules.toolbar });
                  f = (0, ma.default)(
                    !0,
                    {},
                    qa.DEFAULTS,
                    { modules: h },
                    e,
                    f
                  );
                  ['bounds', 'container', 'scrollingContainer'].forEach(
                    function (e) {
                      'string' === typeof f[e] &&
                        (f[e] = document.querySelector(f[e]));
                    }
                  );
                  f.modules = Object.keys(f.modules).reduce(function (e, h) {
                    f.modules[h] && (e[h] = f.modules[h]);
                    return e;
                  }, {});
                  return f;
                }
                function f(e, f, h, n) {
                  if (
                    this.options.strict &&
                    !this.isEnabled() &&
                    f === da.default.sources.USER
                  )
                    return new aa.default();
                  var w = null == h ? null : this.getSelection(),
                    y = this.editor.delta;
                  e = e();
                  null != w &&
                    (!0 === h && (h = w.index),
                    null == n
                      ? (w = r(w, e, f))
                      : 0 !== n && (w = r(w, h, n, f)),
                    this.setSelection(w, da.default.sources.SILENT));
                  if (0 < e.length()) {
                    var x;
                    h = [da.default.events.TEXT_CHANGE, e, y, f];
                    (x = this.emitter).emit.apply(
                      x,
                      [da.default.events.EDITOR_CHANGE].concat(h)
                    );
                    if (f !== da.default.sources.SILENT) {
                      var ba;
                      (ba = this.emitter).emit.apply(ba, h);
                    }
                  }
                  return e;
                }
                function y(e, f, h, r, w) {
                  var y = {};
                  'number' === typeof e.index && 'number' === typeof e.length
                    ? ('number' !== typeof f
                        ? ((w = r), (r = h), (h = f), (f = e.length))
                        : (f = e.length),
                      (e = e.index))
                    : 'number' !== typeof f &&
                      ((w = r), (r = h), (h = f), (f = 0));
                  'object' === ('undefined' === typeof h ? 'undefined' : n(h))
                    ? ((y = h), (w = r))
                    : 'string' === typeof h &&
                      (null != r ? (y[h] = r) : (w = h));
                  w = w || da.default.sources.API;
                  return [e, f, y, w];
                }
                function r(e, f, h, n) {
                  if (null == e) return null;
                  var r = void 0,
                    y = void 0;
                  f instanceof aa.default
                    ? ((r = [e.index, e.index + e.length].map(function (e) {
                        return f.transformPosition(
                          e,
                          n !== da.default.sources.USER
                        );
                      })),
                      (e = w(r, 2)),
                      (r = e[0]),
                      (y = e[1]))
                    : ((r = [e.index, e.index + e.length].map(function (e) {
                        return e < f ||
                          (e === f && n === da.default.sources.USER)
                          ? e
                          : 0 <= h
                          ? e + h
                          : Math.max(f, e + h);
                      })),
                      (e = w(r, 2)),
                      (r = e[0]),
                      (y = e[1]));
                  return new ja.Range(r, y - r);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.overload = ca.expandConfig = void 0;
                var n =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  w = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var y = e[Symbol.iterator](), x;
                            !(n = (x = y.next()).done) &&
                            (h.push(x.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (Da) {
                          (r = !0), (w = Da);
                        } finally {
                          try {
                            if (!n && y['return']) y['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  ba = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                ea(50);
                h = ea(2);
                var aa = z(h);
                h = ea(14);
                var fa = z(h);
                h = ea(8);
                var da = z(h);
                h = ea(9);
                h = z(h);
                var ha = ea(0),
                  ka = z(ha),
                  ja = ea(15),
                  ya = z(ja);
                ha = ea(3);
                var ma = z(ha);
                ha = ea(10);
                var sa = z(ha);
                ea = ea(34);
                var Ba = z(ea),
                  va = (0, sa.default)('quill'),
                  qa = (function () {
                    function h(n) {
                      var r = this,
                        w =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      if (!(this instanceof h))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                      this.options = e(n, w);
                      this.container = this.options.container;
                      if (null == this.container)
                        return va.error('Invalid Quill container', n);
                      this.options.debug && h.debug(this.options.debug);
                      w = this.container.innerHTML.trim();
                      this.container.classList.add('ql-container');
                      this.container.innerHTML = '';
                      this.container.__quill = this;
                      this.root = this.addContainer('ql-editor');
                      this.root.classList.add('ql-blank');
                      this.root.setAttribute('data-gramm', !1);
                      this.scrollingContainer =
                        this.options.scrollingContainer || this.root;
                      this.emitter = new da.default();
                      this.scroll = ka.default.create(this.root, {
                        emitter: this.emitter,
                        whitelist: this.options.formats,
                      });
                      this.editor = new fa.default(this.scroll);
                      this.selection = new ya.default(
                        this.scroll,
                        this.emitter
                      );
                      this.theme = new this.options.theme(this, this.options);
                      this.keyboard = this.theme.addModule('keyboard');
                      this.clipboard = this.theme.addModule('clipboard');
                      this.history = this.theme.addModule('history');
                      this.theme.init();
                      this.emitter.on(
                        da.default.events.EDITOR_CHANGE,
                        function (e) {
                          e === da.default.events.TEXT_CHANGE &&
                            r.root.classList.toggle(
                              'ql-blank',
                              r.editor.isBlank()
                            );
                        }
                      );
                      this.emitter.on(
                        da.default.events.SCROLL_UPDATE,
                        function (e, h) {
                          var n = r.selection.lastRange,
                            w = n && 0 === n.length ? n.index : void 0;
                          f.call(
                            r,
                            function () {
                              return r.editor.update(null, h, w);
                            },
                            e
                          );
                        }
                      );
                      w = this.clipboard.convert(
                        '<div class=\'ql-editor\' style="white-space: normal;">' +
                          w +
                          '<p><br></p></div>'
                      );
                      this.setContents(w);
                      this.history.clear();
                      this.options.placeholder &&
                        this.root.setAttribute(
                          'data-placeholder',
                          this.options.placeholder
                        );
                      this.options.readOnly && this.disable();
                    }
                    ba(h, null, [
                      {
                        key: 'debug',
                        value: function (e) {
                          !0 === e && (e = 'log');
                          sa.default.level(e);
                        },
                      },
                      {
                        key: 'find',
                        value: function (e) {
                          return e.__quill || ka.default.find(e);
                        },
                      },
                      {
                        key: 'import',
                        value: function (e) {
                          null == this.imports[e] &&
                            va.error(
                              'Cannot import ' +
                                e +
                                '. Are you sure it was registered?'
                            );
                          return this.imports[e];
                        },
                      },
                      {
                        key: 'register',
                        value: function (e, f) {
                          var h = this,
                            n =
                              2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : !1;
                          'string' !== typeof e
                            ? ((n = e.attrName || e.blotName),
                              'string' === typeof n
                                ? this.register('formats/' + n, e, f)
                                : Object.keys(e).forEach(function (n) {
                                    h.register(n, e[n], f);
                                  }))
                            : (null == this.imports[e] ||
                                n ||
                                va.warn('Overwriting ' + e + ' with', f),
                              (this.imports[e] = f),
                              (e.startsWith('blots/') ||
                                e.startsWith('formats/')) &&
                              'abstract' !== f.blotName
                                ? ka.default.register(f)
                                : e.startsWith('modules') &&
                                  'function' === typeof f.register &&
                                  f.register());
                        },
                      },
                    ]);
                    ba(h, [
                      {
                        key: 'addContainer',
                        value: function (e) {
                          var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          if ('string' === typeof e) {
                            var h = e;
                            e = document.createElement('div');
                            e.classList.add(h);
                          }
                          this.container.insertBefore(e, f);
                          return e;
                        },
                      },
                      {
                        key: 'blur',
                        value: function () {
                          this.selection.setRange(null);
                        },
                      },
                      {
                        key: 'deleteText',
                        value: function (e, h, n) {
                          var r = this;
                          n = y(e, h, n);
                          n = w(n, 4);
                          e = n[0];
                          h = n[1];
                          n = n[3];
                          return f.call(
                            this,
                            function () {
                              return r.editor.deleteText(e, h);
                            },
                            n,
                            e,
                            -1 * h
                          );
                        },
                      },
                      {
                        key: 'disable',
                        value: function () {
                          this.enable(!1);
                        },
                      },
                      {
                        key: 'enable',
                        value: function () {
                          var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : !0;
                          this.scroll.enable(e);
                          this.container.classList.toggle('ql-disabled', !e);
                        },
                      },
                      {
                        key: 'focus',
                        value: function () {
                          var e = this.scrollingContainer.scrollTop;
                          this.selection.focus();
                          this.scrollingContainer.scrollTop = e;
                          this.scrollIntoView();
                        },
                      },
                      {
                        key: 'format',
                        value: function (e, h) {
                          var n = this;
                          return f.call(
                            this,
                            function () {
                              var f = n.getSelection(!0),
                                r = new aa.default();
                              if (null == f) return r;
                              if (ka.default.query(e, ka.default.Scope.BLOCK))
                                r = n.editor.formatLine(
                                  f.index,
                                  f.length,
                                  x({}, e, h)
                                );
                              else {
                                if (0 === f.length)
                                  return n.selection.format(e, h), r;
                                r = n.editor.formatText(
                                  f.index,
                                  f.length,
                                  x({}, e, h)
                                );
                              }
                              n.setSelection(f, da.default.sources.SILENT);
                              return r;
                            },
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : da.default.sources.API
                          );
                        },
                      },
                      {
                        key: 'formatLine',
                        value: function (e, h, n, r, x) {
                          var ba = this,
                            z = void 0;
                          n = y(e, h, n, r, x);
                          n = w(n, 4);
                          e = n[0];
                          h = n[1];
                          z = n[2];
                          x = n[3];
                          return f.call(
                            this,
                            function () {
                              return ba.editor.formatLine(e, h, z);
                            },
                            x,
                            e,
                            0
                          );
                        },
                      },
                      {
                        key: 'formatText',
                        value: function (e, h, n, r, x) {
                          var ba = this,
                            z = void 0;
                          n = y(e, h, n, r, x);
                          n = w(n, 4);
                          e = n[0];
                          h = n[1];
                          z = n[2];
                          x = n[3];
                          return f.call(
                            this,
                            function () {
                              return ba.editor.formatText(e, h, z);
                            },
                            x,
                            e,
                            0
                          );
                        },
                      },
                      {
                        key: 'getBounds',
                        value: function (e) {
                          var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          f =
                            'number' === typeof e
                              ? this.selection.getBounds(e, f)
                              : this.selection.getBounds(e.index, e.length);
                          var h = this.container.getBoundingClientRect();
                          return {
                            bottom: f.bottom - h.top,
                            height: f.height,
                            left: f.left - h.left,
                            right: f.right - h.left,
                            top: f.top - h.top,
                            width: f.width,
                          };
                        },
                      },
                      {
                        key: 'getContents',
                        value: function () {
                          var e =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.getLength() - e;
                          e = y(e, f);
                          f = w(e, 2);
                          e = f[0];
                          f = f[1];
                          return this.editor.getContents(e, f);
                        },
                      },
                      {
                        key: 'getFormat',
                        value: function () {
                          var e =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : this.getSelection(!0),
                            f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : 0;
                          return 'number' === typeof e
                            ? this.editor.getFormat(e, f)
                            : this.editor.getFormat(e.index, e.length);
                        },
                      },
                      {
                        key: 'getIndex',
                        value: function (e) {
                          return e.offset(this.scroll);
                        },
                      },
                      {
                        key: 'getLength',
                        value: function () {
                          return this.scroll.length();
                        },
                      },
                      {
                        key: 'getLeaf',
                        value: function (e) {
                          return this.scroll.leaf(e);
                        },
                      },
                      {
                        key: 'getLine',
                        value: function (e) {
                          return this.scroll.line(e);
                        },
                      },
                      {
                        key: 'getLines',
                        value: function () {
                          var e =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : Number.MAX_VALUE;
                          return 'number' !== typeof e
                            ? this.scroll.lines(e.index, e.length)
                            : this.scroll.lines(e, f);
                        },
                      },
                      {
                        key: 'getModule',
                        value: function (e) {
                          return this.theme.modules[e];
                        },
                      },
                      {
                        key: 'getSelection',
                        value: function () {
                          0 < arguments.length &&
                            void 0 !== arguments[0] &&
                            arguments[0] &&
                            this.focus();
                          this.update();
                          return this.selection.getRange()[0];
                        },
                      },
                      {
                        key: 'getText',
                        value: function () {
                          var e =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.getLength() - e;
                          e = y(e, f);
                          f = w(e, 2);
                          e = f[0];
                          f = f[1];
                          return this.editor.getText(e, f);
                        },
                      },
                      {
                        key: 'hasFocus',
                        value: function () {
                          return this.selection.hasFocus();
                        },
                      },
                      {
                        key: 'insertEmbed',
                        value: function (e, n, r) {
                          var w = this;
                          return f.call(
                            this,
                            function () {
                              return w.editor.insertEmbed(e, n, r);
                            },
                            3 < arguments.length && void 0 !== arguments[3]
                              ? arguments[3]
                              : h.sources.API,
                            e
                          );
                        },
                      },
                      {
                        key: 'insertText',
                        value: function (e, h, n, r, x) {
                          var ba = this,
                            z = void 0;
                          n = y(e, 0, n, r, x);
                          n = w(n, 4);
                          e = n[0];
                          z = n[2];
                          x = n[3];
                          return f.call(
                            this,
                            function () {
                              return ba.editor.insertText(e, h, z);
                            },
                            x,
                            e,
                            h.length
                          );
                        },
                      },
                      {
                        key: 'isEnabled',
                        value: function () {
                          return !this.container.classList.contains(
                            'ql-disabled'
                          );
                        },
                      },
                      {
                        key: 'off',
                        value: function () {
                          return this.emitter.off.apply(
                            this.emitter,
                            arguments
                          );
                        },
                      },
                      {
                        key: 'on',
                        value: function () {
                          return this.emitter.on.apply(this.emitter, arguments);
                        },
                      },
                      {
                        key: 'once',
                        value: function () {
                          return this.emitter.once.apply(
                            this.emitter,
                            arguments
                          );
                        },
                      },
                      {
                        key: 'pasteHTML',
                        value: function (e, f, h) {
                          this.clipboard.dangerouslyPasteHTML(e, f, h);
                        },
                      },
                      {
                        key: 'removeFormat',
                        value: function (e, h, n) {
                          var r = this;
                          n = y(e, h, n);
                          n = w(n, 4);
                          e = n[0];
                          h = n[1];
                          n = n[3];
                          return f.call(
                            this,
                            function () {
                              return r.editor.removeFormat(e, h);
                            },
                            n,
                            e
                          );
                        },
                      },
                      {
                        key: 'scrollIntoView',
                        value: function () {
                          this.selection.scrollIntoView(
                            this.scrollingContainer
                          );
                        },
                      },
                      {
                        key: 'setContents',
                        value: function (e) {
                          var h = this;
                          return f.call(
                            this,
                            function () {
                              e = new aa.default(e);
                              var f = h.getLength();
                              f = h.editor.deleteText(0, f);
                              var n = h.editor.applyDelta(e),
                                r = n.ops[n.ops.length - 1];
                              null != r &&
                                'string' === typeof r.insert &&
                                '\n' === r.insert[r.insert.length - 1] &&
                                (h.editor.deleteText(h.getLength() - 1, 1),
                                n.delete(1));
                              return f.compose(n);
                            },
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : da.default.sources.API
                          );
                        },
                      },
                      {
                        key: 'setSelection',
                        value: function (e, f, n) {
                          null == e
                            ? this.selection.setRange(null, f || h.sources.API)
                            : ((e = y(e, f, n)),
                              (n = w(e, 4)),
                              (e = n[0]),
                              (f = n[1]),
                              (n = n[3]),
                              this.selection.setRange(new ja.Range(e, f), n),
                              n !== da.default.sources.SILENT &&
                                this.selection.scrollIntoView(
                                  this.scrollingContainer
                                ));
                        },
                      },
                      {
                        key: 'setText',
                        value: function (e) {
                          var f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : da.default.sources.API,
                            h = new aa.default().insert(e);
                          return this.setContents(h, f);
                        },
                      },
                      {
                        key: 'update',
                        value: function () {
                          var e =
                              0 < arguments.length && void 0 !== arguments[0]
                                ? arguments[0]
                                : da.default.sources.USER,
                            f = this.scroll.update(e);
                          this.selection.update(e);
                          return f;
                        },
                      },
                      {
                        key: 'updateContents',
                        value: function (e) {
                          var h = this,
                            n =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : da.default.sources.API;
                          return f.call(
                            this,
                            function () {
                              e = new aa.default(e);
                              return h.editor.applyDelta(e, n);
                            },
                            n,
                            !0
                          );
                        },
                      },
                    ]);
                    return h;
                  })();
                qa.DEFAULTS = {
                  bounds: null,
                  formats: null,
                  modules: {},
                  placeholder: '',
                  readOnly: !1,
                  scrollingContainer: null,
                  strict: !0,
                  theme: 'default',
                };
                qa.events = da.default.events;
                qa.sources = da.default.sources;
                qa.version = '1.3.7';
                qa.imports = {
                  delta: aa.default,
                  parchment: ka.default,
                  'core/module': h.default,
                  'core/theme': Ba.default,
                };
                ca.expandConfig = e;
                ca.overload = y;
                ca.default = qa;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  e = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (h = ea(7)) && h.__esModule ? h : { default: h };
                var f = (ea = ea(0)) && ea.__esModule ? ea : { default: ea };
                ea = (function (h) {
                  function n() {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (n.__proto__ || Object.getPrototypeOf(n)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(n, h);
                  x(
                    n,
                    [
                      {
                        key: 'formatAt',
                        value: function (h, r, x, z) {
                          0 > n.compare(this.statics.blotName, x) &&
                          f.default.query(x, f.default.Scope.BLOT)
                            ? ((h = this.isolate(h, r)), z && h.wrap(x, z))
                            : e(
                                n.prototype.__proto__ ||
                                  Object.getPrototypeOf(n.prototype),
                                'formatAt',
                                this
                              ).call(this, h, r, x, z);
                        },
                      },
                      {
                        key: 'optimize',
                        value: function (f) {
                          e(
                            n.prototype.__proto__ ||
                              Object.getPrototypeOf(n.prototype),
                            'optimize',
                            this
                          ).call(this, f);
                          this.parent instanceof n &&
                            0 <
                              n.compare(
                                this.statics.blotName,
                                this.parent.statics.blotName
                              ) &&
                            ((f = this.parent.isolate(
                              this.offset(),
                              this.length()
                            )),
                            this.moveChildren(f),
                            f.wrap(this));
                        },
                      },
                    ],
                    [
                      {
                        key: 'compare',
                        value: function (e, f) {
                          var h = n.order.indexOf(e),
                            r = n.order.indexOf(f);
                          return 0 <= h || 0 <= r
                            ? h - r
                            : e === f
                            ? 0
                            : e < f
                            ? -1
                            : 1;
                        },
                      },
                    ]
                  );
                  return n;
                })(f.default.Inline);
                ea.allowedChildren = [ea, f.default.Embed, h.default];
                ea.order = 'cursor inline underline strike italic bold script link code'.split(
                  ' '
                );
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(h, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    );
                  h.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: h,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(h, e)
                      : (h.__proto__ = e));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                    var f = (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !f ||
                      ('object' !== typeof f && 'function' !== typeof f)
                      ? this
                      : f;
                  }
                  z(e, h);
                  return e;
                })(
                  (function (h) {
                    return h && h.__esModule ? h : { default: h };
                  })(ea(0)).default.Text
                );
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  e = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (h = ea(54)) && h.__esModule ? h : { default: h };
                ea = (ea = ea(10)) && ea.__esModule ? ea : { default: ea };
                var f = (0, ea.default)('quill:events');
                ['selectionchange', 'mousedown', 'mouseup', 'click'].forEach(
                  function (e) {
                    document.addEventListener(e, function () {
                      for (
                        var e = arguments.length, f = Array(e), h = 0;
                        h < e;
                        h++
                      )
                        f[h] = arguments[h];
                      [].slice
                        .call(document.querySelectorAll('.ql-container'))
                        .forEach(function (e) {
                          if (e.__quill && e.__quill.emitter) {
                            var h;
                            (h = e.__quill.emitter).handleDOM.apply(h, f);
                          }
                        });
                    });
                  }
                );
                ea = (function (h) {
                  function n() {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (n.__proto__ || Object.getPrototypeOf(n)).call(
                      this
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    e =
                      !e || ('object' !== typeof e && 'function' !== typeof e)
                        ? this
                        : e;
                    e.listeners = {};
                    e.on('error', f.error);
                    return e;
                  }
                  z(n, h);
                  x(n, [
                    {
                      key: 'emit',
                      value: function () {
                        f.log.apply(f, arguments);
                        e(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'emit',
                          this
                        ).apply(this, arguments);
                      },
                    },
                    {
                      key: 'handleDOM',
                      value: function (e) {
                        for (
                          var f = arguments.length,
                            h = Array(1 < f ? f - 1 : 0),
                            n = 1;
                          n < f;
                          n++
                        )
                          h[n - 1] = arguments[n];
                        (this.listeners[e.type] || []).forEach(function (f) {
                          var n = f.node;
                          f = f.handler;
                          (e.target === n || n.contains(e.target)) &&
                            f.apply(void 0, [e].concat(h));
                        });
                      },
                    },
                    {
                      key: 'listenDOM',
                      value: function (e, f, h) {
                        this.listeners[e] || (this.listeners[e] = []);
                        this.listeners[e].push({ node: f, handler: h });
                      },
                    },
                  ]);
                  return n;
                })(h.default);
                ea.events = {
                  EDITOR_CHANGE: 'editor-change',
                  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
                  SCROLL_OPTIMIZE: 'scroll-optimize',
                  SCROLL_UPDATE: 'scroll-update',
                  SELECTION_CHANGE: 'selection-change',
                  TEXT_CHANGE: 'text-change',
                };
                ea.sources = { API: 'api', SILENT: 'silent', USER: 'user' };
                ca.default = ea;
              },
              function (h, ca) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = function x(h) {
                  var e =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!(this instanceof x))
                    throw new TypeError('Cannot call a class as a function');
                  this.quill = h;
                  this.options = e;
                };
                h.DEFAULTS = {};
                ca.default = h;
              },
              function (h, ca) {
                function aa(f) {
                  if (x.indexOf(f) <= x.indexOf(e)) {
                    for (
                      var h,
                        r = arguments.length,
                        n = Array(1 < r ? r - 1 : 0),
                        w = 1;
                      w < r;
                      w++
                    )
                      n[w - 1] = arguments[w];
                    (h = console)[f].apply(h, n);
                  }
                }
                function z(e) {
                  return x.reduce(function (f, h) {
                    f[h] = aa.bind(console, h, e);
                    return f;
                  }, {});
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = ['error', 'warn', 'log', 'info'],
                  e = 'warn';
                aa.level = z.level = function (f) {
                  e = f;
                };
                ca.default = z;
              },
              function (h, ca, ea) {
                function z(e) {
                  return !e ||
                    'object' !== typeof e ||
                    'number' !== typeof e.length ||
                    'function' !== typeof e.copy ||
                    'function' !== typeof e.slice ||
                    (0 < e.length && 'number' !== typeof e[0])
                    ? !1
                    : !0;
                }
                function x(h, w, x) {
                  var n;
                  if (
                    null === h ||
                    void 0 === h ||
                    null === w ||
                    void 0 === w ||
                    h.prototype !== w.prototype
                  )
                    return !1;
                  if (y(h)) {
                    if (!y(w)) return !1;
                    h = e.call(h);
                    w = e.call(w);
                    return r(h, w, x);
                  }
                  if (z(h)) {
                    if (!z(w) || h.length !== w.length) return !1;
                    for (n = 0; n < h.length; n++) if (h[n] !== w[n]) return !1;
                    return !0;
                  }
                  try {
                    var ba = f(h);
                    var aa = f(w);
                  } catch (na) {
                    return !1;
                  }
                  if (ba.length != aa.length) return !1;
                  ba.sort();
                  aa.sort();
                  for (n = ba.length - 1; 0 <= n; n--)
                    if (ba[n] != aa[n]) return !1;
                  for (n = ba.length - 1; 0 <= n; n--)
                    if (((aa = ba[n]), !r(h[aa], w[aa], x))) return !1;
                  return typeof h === typeof w;
                }
                var e = Array.prototype.slice,
                  f = ea(52),
                  y = ea(53),
                  r = (h.exports = function (e, f, h) {
                    h || (h = {});
                    return e === f
                      ? !0
                      : e instanceof Date && f instanceof Date
                      ? e.getTime() === f.getTime()
                      : !e ||
                        !f ||
                        ('object' != typeof e && 'object' != typeof f)
                      ? h.strict
                        ? e === f
                        : e == f
                      : x(e, f, h);
                  });
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var z = ea(1);
                h = (function () {
                  function h(e, f, h) {
                    void 0 === h && (h = {});
                    this.attrName = e;
                    this.keyName = f;
                    e = z.Scope.TYPE & z.Scope.ATTRIBUTE;
                    this.scope =
                      null != h.scope
                        ? (h.scope & z.Scope.LEVEL) | e
                        : z.Scope.ATTRIBUTE;
                    null != h.whitelist && (this.whitelist = h.whitelist);
                  }
                  h.keys = function (e) {
                    return [].map.call(e.attributes, function (e) {
                      return e.name;
                    });
                  };
                  h.prototype.add = function (e, f) {
                    if (!this.canAdd(e, f)) return !1;
                    e.setAttribute(this.keyName, f);
                    return !0;
                  };
                  h.prototype.canAdd = function (e, f) {
                    return null ==
                      z.query(e, z.Scope.BLOT & (this.scope | z.Scope.TYPE))
                      ? !1
                      : null == this.whitelist
                      ? !0
                      : 'string' === typeof f
                      ? -1 < this.whitelist.indexOf(f.replace(/["']/g, ''))
                      : -1 < this.whitelist.indexOf(f);
                  };
                  h.prototype.remove = function (e) {
                    e.removeAttribute(this.keyName);
                  };
                  h.prototype.value = function (e) {
                    var f = e.getAttribute(this.keyName);
                    return this.canAdd(e, f) && f ? f : '';
                  };
                  return h;
                })();
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.Code = void 0;
                var y = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var y = e[Symbol.iterator](), x;
                            !(n = (x = y.next()).done) &&
                            (h.push(x.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (va) {
                          (r = !0), (w = va);
                        } finally {
                          try {
                            if (!n && y['return']) y['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  n = function ya(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ya(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(2);
                var w = z(h);
                h = ea(0);
                var ba = z(h);
                h = ea(4);
                h = z(h);
                var aa = ea(6);
                aa = z(aa);
                ea = ea(7);
                var fa = z(ea);
                ea = (function (h) {
                  function n() {
                    x(this, n);
                    return e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(n, h);
                  return n;
                })(aa.default);
                ea.blotName = 'code';
                ea.tagName = 'CODE';
                h = (function (h) {
                  function z() {
                    x(this, z);
                    return e(
                      this,
                      (z.__proto__ || Object.getPrototypeOf(z)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(z, h);
                  r(
                    z,
                    [
                      {
                        key: 'delta',
                        value: function () {
                          var e = this,
                            f = this.domNode.textContent;
                          f.endsWith('\n') && (f = f.slice(0, -1));
                          return f.split('\n').reduce(function (f, h) {
                            return f.insert(h).insert('\n', e.formats());
                          }, new w.default());
                        },
                      },
                      {
                        key: 'format',
                        value: function (e, f) {
                          if (e !== this.statics.blotName || !f) {
                            var h = this.descendant(
                              fa.default,
                              this.length() - 1
                            );
                            h = y(h, 1)[0];
                            null != h && h.deleteAt(h.length() - 1, 1);
                            n(
                              z.prototype.__proto__ ||
                                Object.getPrototypeOf(z.prototype),
                              'format',
                              this
                            ).call(this, e, f);
                          }
                        },
                      },
                      {
                        key: 'formatAt',
                        value: function (e, f, h, n) {
                          if (
                            0 !== f &&
                            null !=
                              ba.default.query(h, ba.default.Scope.BLOCK) &&
                            (h !== this.statics.blotName ||
                              n !== this.statics.formats(this.domNode))
                          ) {
                            var r = this.newlineIndex(e);
                            if (!(0 > r || r >= e + f)) {
                              var w = this.newlineIndex(e, !0) + 1;
                              r = r - w + 1;
                              var y = this.isolate(w, r),
                                x = y.next;
                              y.format(h, n);
                              x instanceof z &&
                                x.formatAt(0, e - w + f - r, h, n);
                            }
                          }
                        },
                      },
                      {
                        key: 'insertAt',
                        value: function (e, f, h) {
                          null == h &&
                            ((e = this.descendant(fa.default, e)),
                            (e = y(e, 2)),
                            e[0].insertAt(e[1], f));
                        },
                      },
                      {
                        key: 'length',
                        value: function () {
                          var e = this.domNode.textContent.length;
                          return this.domNode.textContent.endsWith('\n')
                            ? e
                            : e + 1;
                        },
                      },
                      {
                        key: 'newlineIndex',
                        value: function (e) {
                          if (
                            1 < arguments.length &&
                            void 0 !== arguments[1] &&
                            arguments[1]
                          )
                            return this.domNode.textContent
                              .slice(0, e)
                              .lastIndexOf('\n');
                          var f = this.domNode.textContent
                            .slice(e)
                            .indexOf('\n');
                          return -1 < f ? e + f : -1;
                        },
                      },
                      {
                        key: 'optimize',
                        value: function (e) {
                          this.domNode.textContent.endsWith('\n') ||
                            this.appendChild(ba.default.create('text', '\n'));
                          n(
                            z.prototype.__proto__ ||
                              Object.getPrototypeOf(z.prototype),
                            'optimize',
                            this
                          ).call(this, e);
                          var f = this.next;
                          null != f &&
                            f.prev === this &&
                            f.statics.blotName === this.statics.blotName &&
                            this.statics.formats(this.domNode) ===
                              f.statics.formats(f.domNode) &&
                            (f.optimize(e), f.moveChildren(this), f.remove());
                        },
                      },
                      {
                        key: 'replace',
                        value: function (e) {
                          n(
                            z.prototype.__proto__ ||
                              Object.getPrototypeOf(z.prototype),
                            'replace',
                            this
                          ).call(this, e);
                          [].slice
                            .call(this.domNode.querySelectorAll('*'))
                            .forEach(function (e) {
                              var f = ba.default.find(e);
                              null == f
                                ? e.parentNode.removeChild(e)
                                : f instanceof ba.default.Embed
                                ? f.remove()
                                : f.unwrap();
                            });
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (e) {
                          e = n(
                            z.__proto__ || Object.getPrototypeOf(z),
                            'create',
                            this
                          ).call(this, e);
                          e.setAttribute('spellcheck', !1);
                          return e;
                        },
                      },
                      {
                        key: 'formats',
                        value: function () {
                          return !0;
                        },
                      },
                    ]
                  );
                  return z;
                })(h.default);
                h.blotName = 'code-block';
                h.tagName = 'PRE';
                h.TAB = '  ';
                ca.Code = ea;
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f, h) {
                  f in e
                    ? Object.defineProperty(e, f, {
                        value: h,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[f] = h);
                  return e;
                }
                function e(e, f) {
                  return Object.keys(f).reduce(function (h, n) {
                    if (null == e[n]) return h;
                    f[n] === e[n]
                      ? (h[n] = f[n])
                      : Array.isArray(f[n])
                      ? 0 > f[n].indexOf(e[n]) && (h[n] = f[n].concat([e[n]]))
                      : (h[n] = [f[n], e[n]]);
                    return h;
                  }, {});
                }
                function f(e) {
                  return e.reduce(function (e, f) {
                    if (1 === f.insert) {
                      var h = (0, ya.default)(f.attributes);
                      delete h.image;
                      return e.insert({ image: f.attributes.image }, h);
                    }
                    null == f.attributes ||
                      (!0 !== f.attributes.list &&
                        !0 !== f.attributes.bullet) ||
                      ((f = (0, ya.default)(f)),
                      f.attributes.list
                        ? (f.attributes.list = 'ordered')
                        : ((f.attributes.list = 'bullet'),
                          delete f.attributes.bullet));
                    return 'string' === typeof f.insert
                      ? ((h = f.insert
                          .replace(/\r\n/g, '\n')
                          .replace(/\r/g, '\n')),
                        e.insert(h, f.attributes))
                      : e.push(f);
                  }, new w.default());
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var y =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  r = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var y = e[Symbol.iterator](), x;
                            !(n = (x = y.next()).done) &&
                            (h.push(x.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (Aa) {
                          (r = !0), (w = Aa);
                        } finally {
                          try {
                            if (!n && y['return']) y['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  n = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(2);
                var w = z(h);
                h = ea(20);
                var ba = z(h);
                h = ea(0);
                var aa = z(h);
                h = ea(13);
                var fa = z(h);
                h = ea(24);
                var da = z(h),
                  ha = ea(4),
                  ka = z(ha);
                h = ea(16);
                var ja = z(h);
                h = ea(21);
                var ya = z(h);
                h = ea(11);
                var ma = z(h);
                ea = ea(3);
                var sa = z(ea),
                  Ba = /^[ -~]*$/;
                ea = (function () {
                  function h(e) {
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    this.scroll = e;
                    this.delta = this.getDelta();
                  }
                  n(h, [
                    {
                      key: 'applyDelta',
                      value: function (e) {
                        var h = this,
                          n = !1;
                        this.scroll.update();
                        var w = this.scroll.length();
                        this.scroll.batchStart();
                        e = f(e);
                        e.reduce(function (e, f) {
                          var x = f.retain || f.delete || f.insert.length || 1,
                            z = f.attributes || {};
                          if (null != f.insert) {
                            if ('string' === typeof f.insert) {
                              f = f.insert;
                              f.endsWith('\n') &&
                                n &&
                                ((n = !1), (f = f.slice(0, -1)));
                              e >= w && !f.endsWith('\n') && (n = !0);
                              h.scroll.insertAt(e, f);
                              f = h.scroll.line(e);
                              f = r(f, 2);
                              var ca = f[0],
                                ea = f[1];
                              f = (0, sa.default)(
                                {},
                                (0, ha.bubbleFormats)(ca)
                              );
                              ca instanceof ka.default &&
                                ((ca = ca.descendant(aa.default.Leaf, ea)),
                                (ca = r(ca, 1)[0]),
                                (f = (0, sa.default)(
                                  f,
                                  (0, ha.bubbleFormats)(ca)
                                )));
                              z = ba.default.attributes.diff(f, z) || {};
                            } else if ('object' === y(f.insert)) {
                              ca = Object.keys(f.insert)[0];
                              if (null == ca) return e;
                              h.scroll.insertAt(e, ca, f.insert[ca]);
                            }
                            w += x;
                          }
                          Object.keys(z).forEach(function (f) {
                            h.scroll.formatAt(e, x, f, z[f]);
                          });
                          return e + x;
                        }, 0);
                        e.reduce(function (e, f) {
                          return 'number' === typeof f.delete
                            ? (h.scroll.deleteAt(e, f.delete), e)
                            : e + (f.retain || f.insert.length || 1);
                        }, 0);
                        this.scroll.batchEnd();
                        return this.update(e);
                      },
                    },
                    {
                      key: 'deleteText',
                      value: function (e, f) {
                        this.scroll.deleteAt(e, f);
                        return this.update(new w.default().retain(e).delete(f));
                      },
                    },
                    {
                      key: 'formatLine',
                      value: function (e, f) {
                        var h = this,
                          n =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        this.scroll.update();
                        Object.keys(n).forEach(function (r) {
                          if (
                            null == h.scroll.whitelist ||
                            h.scroll.whitelist[r]
                          ) {
                            var w = h.scroll.lines(e, Math.max(f, 1)),
                              y = f;
                            w.forEach(function (f) {
                              var w = f.length();
                              if (f instanceof fa.default) {
                                var x = e - f.offset(h.scroll),
                                  ba = f.newlineIndex(x + y) - x + 1;
                                f.formatAt(x, ba, r, n[r]);
                              } else f.format(r, n[r]);
                              y -= w;
                            });
                          }
                        });
                        this.scroll.optimize();
                        return this.update(
                          new w.default()
                            .retain(e)
                            .retain(f, (0, ya.default)(n))
                        );
                      },
                    },
                    {
                      key: 'formatText',
                      value: function (e, f) {
                        var h = this,
                          n =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        Object.keys(n).forEach(function (r) {
                          h.scroll.formatAt(e, f, r, n[r]);
                        });
                        return this.update(
                          new w.default()
                            .retain(e)
                            .retain(f, (0, ya.default)(n))
                        );
                      },
                    },
                    {
                      key: 'getContents',
                      value: function (e, f) {
                        return this.delta.slice(e, e + f);
                      },
                    },
                    {
                      key: 'getDelta',
                      value: function () {
                        return this.scroll.lines().reduce(function (e, f) {
                          return e.concat(f.delta());
                        }, new w.default());
                      },
                    },
                    {
                      key: 'getFormat',
                      value: function (f) {
                        var h =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n = [],
                          w = [];
                        0 === h
                          ? this.scroll.path(f).forEach(function (e) {
                              e = r(e, 1)[0];
                              e instanceof ka.default
                                ? n.push(e)
                                : e instanceof aa.default.Leaf && w.push(e);
                            })
                          : ((n = this.scroll.lines(f, h)),
                            (w = this.scroll.descendants(
                              aa.default.Leaf,
                              f,
                              h
                            )));
                        h = [n, w].map(function (f) {
                          if (0 === f.length) return {};
                          for (
                            var h = (0, ha.bubbleFormats)(f.shift());
                            0 < Object.keys(h).length;

                          ) {
                            var n = f.shift();
                            if (null == n) break;
                            h = e((0, ha.bubbleFormats)(n), h);
                          }
                          return h;
                        });
                        return sa.default.apply(sa.default, h);
                      },
                    },
                    {
                      key: 'getText',
                      value: function (e, f) {
                        return this.getContents(e, f)
                          .filter(function (e) {
                            return 'string' === typeof e.insert;
                          })
                          .map(function (e) {
                            return e.insert;
                          })
                          .join('');
                      },
                    },
                    {
                      key: 'insertEmbed',
                      value: function (e, f, h) {
                        this.scroll.insertAt(e, f, h);
                        return this.update(
                          new w.default().retain(e).insert(x({}, f, h))
                        );
                      },
                    },
                    {
                      key: 'insertText',
                      value: function (e, f) {
                        var h = this,
                          n =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : {};
                        f = f.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                        this.scroll.insertAt(e, f);
                        Object.keys(n).forEach(function (r) {
                          h.scroll.formatAt(e, f.length, r, n[r]);
                        });
                        return this.update(
                          new w.default()
                            .retain(e)
                            .insert(f, (0, ya.default)(n))
                        );
                      },
                    },
                    {
                      key: 'isBlank',
                      value: function () {
                        if (0 == this.scroll.children.length) return !0;
                        if (1 < this.scroll.children.length) return !1;
                        var e = this.scroll.children.head;
                        return e.statics.blotName !== ka.default.blotName ||
                          1 < e.children.length
                          ? !1
                          : e.children.head instanceof ja.default;
                      },
                    },
                    {
                      key: 'removeFormat',
                      value: function (e, f) {
                        var h = this.getText(e, f),
                          n = this.scroll.line(e + f),
                          y = r(n, 2);
                        n = y[0];
                        y = y[1];
                        var x = 0,
                          ba = new w.default();
                        null != n &&
                          ((x =
                            n instanceof fa.default
                              ? n.newlineIndex(y) - y + 1
                              : n.length() - y),
                          (ba = n
                            .delta()
                            .slice(y, y + x - 1)
                            .insert('\n')));
                        f = this.getContents(e, f + x).diff(
                          new w.default().insert(h).concat(ba)
                        );
                        e = new w.default().retain(e).concat(f);
                        return this.applyDelta(e);
                      },
                    },
                    {
                      key: 'update',
                      value: function (e) {
                        var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : [],
                          h =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : void 0,
                          n = this.delta;
                        if (
                          1 === f.length &&
                          'characterData' === f[0].type &&
                          f[0].target.data.match(Ba) &&
                          aa.default.find(f[0].target)
                        ) {
                          var r = aa.default.find(f[0].target),
                            y = (0, ha.bubbleFormats)(r),
                            x = r.offset(this.scroll);
                          f = f[0].oldValue.replace(da.default.CONTENTS, '');
                          f = new w.default().insert(f);
                          r = new w.default().insert(r.value());
                          e = new w.default()
                            .retain(x)
                            .concat(f.diff(r, h))
                            .reduce(function (e, f) {
                              return f.insert
                                ? e.insert(f.insert, y)
                                : e.push(f);
                            }, new w.default());
                          this.delta = n.compose(e);
                        } else
                          (this.delta = this.getDelta()),
                            (e && (0, ma.default)(n.compose(e), this.delta)) ||
                              (e = n.diff(this.delta, h));
                        return e;
                      },
                    },
                  ]);
                  return h;
                })();
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e) {
                  if (Array.isArray(e)) {
                    for (var f = 0, h = Array(e.length); f < e.length; f++)
                      h[f] = e[f];
                    return h;
                  }
                  return Array.from(e);
                }
                function e(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function f(e, f) {
                  try {
                    f.parentNode;
                  } catch (ja) {
                    return !1;
                  }
                  f instanceof Text && (f = f.parentNode);
                  return e.contains(f);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.Range = void 0;
                var y = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var y = e[Symbol.iterator](), x;
                            !(n = (x = y.next()).done) &&
                            (h.push(x.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (qa) {
                          (r = !0), (w = qa);
                        } finally {
                          try {
                            if (!n && y['return']) y['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(0);
                var n = z(h);
                h = ea(21);
                var w = z(h);
                h = ea(11);
                var ba = z(h);
                h = ea(8);
                var aa = z(h);
                ea = ea(10);
                ea = z(ea);
                var fa = (0, ea.default)('quill:selection'),
                  da = function ja(f) {
                    var h =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    e(this, ja);
                    this.index = f;
                    this.length = h;
                  };
                ea = (function () {
                  function h(f, r) {
                    var w = this;
                    e(this, h);
                    this.emitter = r;
                    this.scroll = f;
                    this.mouseDown = this.composing = !1;
                    this.root = this.scroll.domNode;
                    this.cursor = n.default.create('cursor', this);
                    this.lastRange = this.savedRange = new da(0, 0);
                    this.handleComposition();
                    this.handleDragging();
                    this.emitter.listenDOM(
                      'selectionchange',
                      document,
                      function () {
                        w.mouseDown ||
                          setTimeout(
                            w.update.bind(w, aa.default.sources.USER),
                            1
                          );
                      }
                    );
                    this.emitter.on(
                      aa.default.events.EDITOR_CHANGE,
                      function (e, f) {
                        e === aa.default.events.TEXT_CHANGE &&
                          0 < f.length() &&
                          w.update(aa.default.sources.SILENT);
                      }
                    );
                    this.emitter.on(
                      aa.default.events.SCROLL_BEFORE_UPDATE,
                      function () {
                        if (w.hasFocus()) {
                          var e = w.getNativeRange();
                          if (null != e && e.start.node !== w.cursor.textNode)
                            w.emitter.once(
                              aa.default.events.SCROLL_UPDATE,
                              function () {
                                try {
                                  w.setNativeRange(
                                    e.start.node,
                                    e.start.offset,
                                    e.end.node,
                                    e.end.offset
                                  );
                                } catch (Ba) {}
                              }
                            );
                        }
                      }
                    );
                    this.emitter.on(
                      aa.default.events.SCROLL_OPTIMIZE,
                      function (e, f) {
                        f.range &&
                          ((e = f.range),
                          w.setNativeRange(
                            e.startNode,
                            e.startOffset,
                            e.endNode,
                            e.endOffset
                          ));
                      }
                    );
                    this.update(aa.default.sources.SILENT);
                  }
                  r(h, [
                    {
                      key: 'handleComposition',
                      value: function () {
                        var e = this;
                        this.root.addEventListener(
                          'compositionstart',
                          function () {
                            e.composing = !0;
                          }
                        );
                        this.root.addEventListener(
                          'compositionend',
                          function () {
                            e.composing = !1;
                            if (e.cursor.parent) {
                              var f = e.cursor.restore();
                              f &&
                                setTimeout(function () {
                                  e.setNativeRange(
                                    f.startNode,
                                    f.startOffset,
                                    f.endNode,
                                    f.endOffset
                                  );
                                }, 1);
                            }
                          }
                        );
                      },
                    },
                    {
                      key: 'handleDragging',
                      value: function () {
                        var e = this;
                        this.emitter.listenDOM(
                          'mousedown',
                          document.body,
                          function () {
                            e.mouseDown = !0;
                          }
                        );
                        this.emitter.listenDOM(
                          'mouseup',
                          document.body,
                          function () {
                            e.mouseDown = !1;
                            e.update(aa.default.sources.USER);
                          }
                        );
                      },
                    },
                    {
                      key: 'focus',
                      value: function () {
                        this.hasFocus() ||
                          (this.root.focus(), this.setRange(this.savedRange));
                      },
                    },
                    {
                      key: 'format',
                      value: function (e, f) {
                        if (
                          null == this.scroll.whitelist ||
                          this.scroll.whitelist[e]
                        ) {
                          this.scroll.update();
                          var h = this.getNativeRange();
                          if (
                            null != h &&
                            h.native.collapsed &&
                            !n.default.query(e, n.default.Scope.BLOCK)
                          ) {
                            if (h.start.node !== this.cursor.textNode) {
                              var r = n.default.find(h.start.node, !1);
                              if (null == r) return;
                              r instanceof n.default.Leaf
                                ? ((h = r.split(h.start.offset)),
                                  r.parent.insertBefore(this.cursor, h))
                                : r.insertBefore(this.cursor, h.start.node);
                              this.cursor.attach();
                            }
                            this.cursor.format(e, f);
                            this.scroll.optimize();
                            this.setNativeRange(
                              this.cursor.textNode,
                              this.cursor.textNode.data.length
                            );
                            this.update();
                          }
                        }
                      },
                    },
                    {
                      key: 'getBounds',
                      value: function (e) {
                        var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          h = this.scroll.length();
                        e = Math.min(e, h - 1);
                        f = Math.min(e + f, h - 1) - e;
                        h = this.scroll.leaf(e);
                        var n = y(h, 2);
                        h = n[0];
                        var r = n[1];
                        if (null == h) return null;
                        n = h.position(r, !0);
                        n = y(n, 2);
                        var w = n[0];
                        r = n[1];
                        n = document.createRange();
                        if (0 < f) {
                          n.setStart(w, r);
                          f = this.scroll.leaf(e + f);
                          f = y(f, 2);
                          h = f[0];
                          r = f[1];
                          if (null == h) return null;
                          f = h.position(r, !0);
                          f = y(f, 2);
                          w = f[0];
                          r = f[1];
                          n.setEnd(w, r);
                          return n.getBoundingClientRect();
                        }
                        f = 'left';
                        w instanceof Text
                          ? (r < w.data.length
                              ? (n.setStart(w, r), n.setEnd(w, r + 1))
                              : (n.setStart(w, r - 1),
                                n.setEnd(w, r),
                                (f = 'right')),
                            (h = n.getBoundingClientRect()))
                          : ((h = h.domNode.getBoundingClientRect()),
                            0 < r && (f = 'right'));
                        return {
                          bottom: h.top + h.height,
                          height: h.height,
                          left: h[f],
                          right: h[f],
                          top: h.top,
                          width: 0,
                        };
                      },
                    },
                    {
                      key: 'getNativeRange',
                      value: function () {
                        var e = document.getSelection();
                        if (null == e || 0 >= e.rangeCount) return null;
                        e = e.getRangeAt(0);
                        if (null == e) return null;
                        e = this.normalizeNative(e);
                        fa.info('getNativeRange', e);
                        return e;
                      },
                    },
                    {
                      key: 'getRange',
                      value: function () {
                        var e = this.getNativeRange();
                        return null == e
                          ? [null, null]
                          : [this.normalizedToRange(e), e];
                      },
                    },
                    {
                      key: 'hasFocus',
                      value: function () {
                        return document.activeElement === this.root;
                      },
                    },
                    {
                      key: 'normalizedToRange',
                      value: function (e) {
                        var f = this,
                          h = [[e.start.node, e.start.offset]];
                        e.native.collapsed ||
                          h.push([e.end.node, e.end.offset]);
                        h = h.map(function (e) {
                          var h = y(e, 2);
                          e = h[0];
                          h = h[1];
                          var r = n.default.find(e, !0),
                            w = r.offset(f.scroll);
                          return 0 === h
                            ? w
                            : r instanceof n.default.Container
                            ? w + r.length()
                            : w + r.index(e, h);
                        });
                        e = Math.min(
                          Math.max.apply(Math, x(h)),
                          this.scroll.length() - 1
                        );
                        h = Math.min.apply(Math, [e].concat(x(h)));
                        return new da(h, e - h);
                      },
                    },
                    {
                      key: 'normalizeNative',
                      value: function (e) {
                        if (
                          !f(this.root, e.startContainer) ||
                          (!e.collapsed && !f(this.root, e.endContainer))
                        )
                          return null;
                        e = {
                          start: {
                            node: e.startContainer,
                            offset: e.startOffset,
                          },
                          end: { node: e.endContainer, offset: e.endOffset },
                          native: e,
                        };
                        [e.start, e.end].forEach(function (e) {
                          for (
                            var f = e.node, h = e.offset;
                            !(f instanceof Text) && 0 < f.childNodes.length;

                          )
                            if (f.childNodes.length > h)
                              (f = f.childNodes[h]), (h = 0);
                            else if (f.childNodes.length === h)
                              (f = f.lastChild),
                                (h =
                                  f instanceof Text
                                    ? f.data.length
                                    : f.childNodes.length + 1);
                            else break;
                          e.node = f;
                          e.offset = h;
                        });
                        return e;
                      },
                    },
                    {
                      key: 'rangeToNative',
                      value: function (e) {
                        var f = this;
                        e = e.collapsed
                          ? [e.index]
                          : [e.index, e.index + e.length];
                        var h = [],
                          n = this.scroll.length();
                        e.forEach(function (e, r) {
                          e = Math.min(n - 1, e);
                          e = f.scroll.leaf(e);
                          var w = y(e, 2);
                          e = w[1];
                          r = w[0].position(e, 0 !== r);
                          e = y(r, 2);
                          r = e[0];
                          e = e[1];
                          h.push(r, e);
                        });
                        2 > h.length && (h = h.concat(h));
                        return h;
                      },
                    },
                    {
                      key: 'scrollIntoView',
                      value: function (e) {
                        var f = this.lastRange;
                        if (null != f) {
                          var h = this.getBounds(f.index, f.length);
                          if (null != h) {
                            var n = this.scroll.length() - 1,
                              r = this.scroll.line(Math.min(f.index, n)),
                              w = (r = y(r, 1)[0]);
                            0 < f.length &&
                              ((f = this.scroll.line(
                                Math.min(f.index + f.length, n)
                              )),
                              (w = y(f, 1)[0]));
                            null != r &&
                              null != w &&
                              ((f = e.getBoundingClientRect()),
                              h.top < f.top
                                ? (e.scrollTop -= f.top - h.top)
                                : h.bottom > f.bottom &&
                                  (e.scrollTop += h.bottom - f.bottom));
                          }
                        }
                      },
                    },
                    {
                      key: 'setNativeRange',
                      value: function (e, f) {
                        var h =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : e,
                          n =
                            3 < arguments.length && void 0 !== arguments[3]
                              ? arguments[3]
                              : f,
                          r =
                            4 < arguments.length && void 0 !== arguments[4]
                              ? arguments[4]
                              : !1;
                        fa.info('setNativeRange', e, f, h, n);
                        if (
                          null == e ||
                          (null != this.root.parentNode &&
                            null != e.parentNode &&
                            null != h.parentNode)
                        ) {
                          var w = document.getSelection();
                          if (null != w)
                            if (null != e) {
                              this.hasFocus() || this.root.focus();
                              var y = (this.getNativeRange() || {}).native;
                              if (
                                null == y ||
                                r ||
                                e !== y.startContainer ||
                                f !== y.startOffset ||
                                h !== y.endContainer ||
                                n !== y.endOffset
                              )
                                'BR' == e.tagName &&
                                  ((f = [].indexOf.call(
                                    e.parentNode.childNodes,
                                    e
                                  )),
                                  (e = e.parentNode)),
                                  'BR' == h.tagName &&
                                    ((n = [].indexOf.call(
                                      h.parentNode.childNodes,
                                      h
                                    )),
                                    (h = h.parentNode)),
                                  (r = document.createRange()),
                                  r.setStart(e, f),
                                  r.setEnd(h, n),
                                  w.removeAllRanges(),
                                  w.addRange(r);
                            } else
                              w.removeAllRanges(),
                                this.root.blur(),
                                document.body.focus();
                        }
                      },
                    },
                    {
                      key: 'setRange',
                      value: function (e) {
                        var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : !1,
                          h =
                            2 < arguments.length && void 0 !== arguments[2]
                              ? arguments[2]
                              : aa.default.sources.API;
                        'string' === typeof f && ((h = f), (f = !1));
                        fa.info('setRange', e);
                        if (null != e) {
                          var n = this.rangeToNative(e);
                          this.setNativeRange.apply(this, x(n).concat([f]));
                        } else this.setNativeRange(null);
                        this.update(h);
                      },
                    },
                    {
                      key: 'update',
                      value: function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : aa.default.sources.USER,
                          f = this.lastRange,
                          h = this.getRange();
                        h = y(h, 2);
                        var n = h[1];
                        this.lastRange = h[0];
                        null != this.lastRange &&
                          (this.savedRange = this.lastRange);
                        if (!(0, ba.default)(f, this.lastRange)) {
                          var r;
                          !this.composing &&
                            null != n &&
                            n.native.collapsed &&
                            n.start.node !== this.cursor.textNode &&
                            this.cursor.restore();
                          f = [
                            aa.default.events.SELECTION_CHANGE,
                            (0, w.default)(this.lastRange),
                            (0, w.default)(f),
                            e,
                          ];
                          (r = this.emitter).emit.apply(
                            r,
                            [aa.default.events.EDITOR_CHANGE].concat(f)
                          );
                          if (e !== aa.default.sources.SILENT) {
                            var x;
                            (x = this.emitter).emit.apply(x, f);
                          }
                        }
                      },
                    },
                  ]);
                  return h;
                })();
                ca.Range = da;
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e, h) {
                  if ('function' !== typeof h && null !== h)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof h
                    );
                  e.prototype = Object.create(h && h.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  h &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, h)
                      : (e.__proto__ = h));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var r = f[h];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        'value' in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  e = function w(e, h, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, h);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return w(e, h, n);
                    } else {
                      if ('value' in r) return r.value;
                      h = r.get;
                      return void 0 === h ? void 0 : h.call(n);
                    }
                  };
                h = (function (h) {
                  function r() {
                    if (!(this instanceof r))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (r.__proto__ || Object.getPrototypeOf(r)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(r, h);
                  x(
                    r,
                    [
                      {
                        key: 'insertInto',
                        value: function (h, w) {
                          0 === h.children.length
                            ? e(
                                r.prototype.__proto__ ||
                                  Object.getPrototypeOf(r.prototype),
                                'insertInto',
                                this
                              ).call(this, h, w)
                            : this.remove();
                        },
                      },
                      {
                        key: 'length',
                        value: function () {
                          return 0;
                        },
                      },
                      {
                        key: 'value',
                        value: function () {
                          return '';
                        },
                      },
                    ],
                    [{ key: 'value', value: function () {} }]
                  );
                  return r;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(0)).default.Embed
                );
                h.blotName = 'break';
                h.tagName = 'BR';
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  var h = f.find(e);
                  if (null == h)
                    try {
                      h = f.create(e);
                    } catch (n) {
                      (h = f.create(f.Scope.INLINE)),
                        [].slice.call(e.childNodes).forEach(function (e) {
                          h.domNode.appendChild(e);
                        }),
                        e.parentNode && e.parentNode.replaceChild(h.domNode, e),
                        h.attach();
                    }
                  return h;
                }
                var x =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (f, h) {
                      function n() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((n.prototype = h.prototype), new n());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var e = ea(44);
                h = ea(30);
                var f = ea(1);
                ea = (function (h) {
                  function r(e) {
                    e = h.call(this, e) || this;
                    e.build();
                    return e;
                  }
                  x(r, h);
                  r.prototype.appendChild = function (e) {
                    this.insertBefore(e);
                  };
                  r.prototype.attach = function () {
                    h.prototype.attach.call(this);
                    this.children.forEach(function (e) {
                      e.attach();
                    });
                  };
                  r.prototype.build = function () {
                    var h = this;
                    this.children = new e.default();
                    [].slice
                      .call(this.domNode.childNodes)
                      .reverse()
                      .forEach(function (e) {
                        try {
                          var n = z(e);
                          h.insertBefore(n, h.children.head || void 0);
                        } catch (ia) {
                          if (!(ia instanceof f.ParchmentError)) throw ia;
                        }
                      });
                  };
                  r.prototype.deleteAt = function (e, f) {
                    if (0 === e && f === this.length()) return this.remove();
                    this.children.forEachAt(e, f, function (e, f, h) {
                      e.deleteAt(f, h);
                    });
                  };
                  r.prototype.descendant = function (e, f) {
                    var h = this.children.find(f);
                    f = h[0];
                    h = h[1];
                    return (null == e.blotName && e(f)) ||
                      (null != e.blotName && f instanceof e)
                      ? [f, h]
                      : f instanceof r
                      ? f.descendant(e, h)
                      : [null, -1];
                  };
                  r.prototype.descendants = function (e, f, h) {
                    void 0 === f && (f = 0);
                    void 0 === h && (h = Number.MAX_VALUE);
                    var n = [],
                      w = h;
                    this.children.forEachAt(f, h, function (f, h, x) {
                      ((null == e.blotName && e(f)) ||
                        (null != e.blotName && f instanceof e)) &&
                        n.push(f);
                      f instanceof r && (n = n.concat(f.descendants(e, h, w)));
                      w -= x;
                    });
                    return n;
                  };
                  r.prototype.detach = function () {
                    this.children.forEach(function (e) {
                      e.detach();
                    });
                    h.prototype.detach.call(this);
                  };
                  r.prototype.formatAt = function (e, f, h, r) {
                    this.children.forEachAt(e, f, function (e, f, n) {
                      e.formatAt(f, n, h, r);
                    });
                  };
                  r.prototype.insertAt = function (e, h, r) {
                    var n = this.children.find(e);
                    e = n[0];
                    n = n[1];
                    e
                      ? e.insertAt(n, h, r)
                      : ((h = null == r ? f.create('text', h) : f.create(h, r)),
                        this.appendChild(h));
                  };
                  r.prototype.insertBefore = function (e, h) {
                    if (
                      null != this.statics.allowedChildren &&
                      !this.statics.allowedChildren.some(function (f) {
                        return e instanceof f;
                      })
                    )
                      throw new f.ParchmentError(
                        'Cannot insert ' +
                          e.statics.blotName +
                          ' into ' +
                          this.statics.blotName
                      );
                    e.insertInto(this, h);
                  };
                  r.prototype.length = function () {
                    return this.children.reduce(function (e, f) {
                      return e + f.length();
                    }, 0);
                  };
                  r.prototype.moveChildren = function (e, f) {
                    this.children.forEach(function (h) {
                      e.insertBefore(h, f);
                    });
                  };
                  r.prototype.optimize = function (e) {
                    h.prototype.optimize.call(this, e);
                    if (0 === this.children.length)
                      if (null != this.statics.defaultChild) {
                        var n = f.create(this.statics.defaultChild);
                        this.appendChild(n);
                        n.optimize(e);
                      } else this.remove();
                  };
                  r.prototype.path = function (e, f) {
                    void 0 === f && (f = !1);
                    var h = this.children.find(e, f),
                      n = h[0];
                    h = h[1];
                    e = [[this, e]];
                    if (n instanceof r) return e.concat(n.path(h, f));
                    null != n && e.push([n, h]);
                    return e;
                  };
                  r.prototype.removeChild = function (e) {
                    this.children.remove(e);
                  };
                  r.prototype.replace = function (e) {
                    e instanceof r && e.moveChildren(this);
                    h.prototype.replace.call(this, e);
                  };
                  r.prototype.split = function (e, f) {
                    void 0 === f && (f = !1);
                    if (!f) {
                      if (0 === e) return this;
                      if (e === this.length()) return this.next;
                    }
                    var h = this.clone();
                    this.parent.insertBefore(h, this.next);
                    this.children.forEachAt(e, this.length(), function (e, n) {
                      e = e.split(n, f);
                      h.appendChild(e);
                    });
                    return h;
                  };
                  r.prototype.unwrap = function () {
                    this.moveChildren(this.parent, this.next);
                    this.remove();
                  };
                  r.prototype.update = function (e) {
                    var h = this,
                      n = [],
                      r = [];
                    e.forEach(function (e) {
                      e.target === h.domNode &&
                        'childList' === e.type &&
                        (n.push.apply(n, e.addedNodes),
                        r.push.apply(r, e.removedNodes));
                    });
                    r.forEach(function (e) {
                      (null != e.parentNode &&
                        'IFRAME' !== e.tagName &&
                        document.body.compareDocumentPosition(e) &
                          Node.DOCUMENT_POSITION_CONTAINED_BY) ||
                        ((e = f.find(e)),
                        null != e &&
                          ((null != e.domNode.parentNode &&
                            e.domNode.parentNode !== h.domNode) ||
                            e.detach()));
                    });
                    n.filter(function (e) {
                      return e.parentNode == h.domNode;
                    })
                      .sort(function (e, f) {
                        return e === f
                          ? 0
                          : e.compareDocumentPosition(f) &
                            Node.DOCUMENT_POSITION_FOLLOWING
                          ? 1
                          : -1;
                      })
                      .forEach(function (e) {
                        var n = null;
                        null != e.nextSibling && (n = f.find(e.nextSibling));
                        e = z(e);
                        if (e.next != n || null == e.next)
                          null != e.parent && e.parent.removeChild(h),
                            h.insertBefore(e, n || void 0);
                      });
                  };
                  return r;
                })(h.default);
                ca.default = ea;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (f, h) {
                      function n() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((n.prototype = h.prototype), new n());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = ea(12),
                  e = ea(31);
                h = ea(17);
                var f = ea(1);
                ea = (function (h) {
                  function r(f) {
                    f = h.call(this, f) || this;
                    f.attributes = new e.default(f.domNode);
                    return f;
                  }
                  z(r, h);
                  r.formats = function (e) {
                    if ('string' === typeof this.tagName) return !0;
                    if (Array.isArray(this.tagName))
                      return e.tagName.toLowerCase();
                  };
                  r.prototype.format = function (e, h) {
                    var n = f.query(e);
                    n instanceof x.default
                      ? this.attributes.attribute(n, h)
                      : h &&
                        (null == n ||
                          (e === this.statics.blotName &&
                            this.formats()[e] === h) ||
                          this.replaceWith(e, h));
                  };
                  r.prototype.formats = function () {
                    var e = this.attributes.values(),
                      f = this.statics.formats(this.domNode);
                    null != f && (e[this.statics.blotName] = f);
                    return e;
                  };
                  r.prototype.replaceWith = function (e, f) {
                    e = h.prototype.replaceWith.call(this, e, f);
                    this.attributes.copy(e);
                    return e;
                  };
                  r.prototype.update = function (e, f) {
                    var n = this;
                    h.prototype.update.call(this, e, f);
                    e.some(function (e) {
                      return e.target === n.domNode && 'attributes' === e.type;
                    }) && this.attributes.build();
                  };
                  r.prototype.wrap = function (e, f) {
                    e = h.prototype.wrap.call(this, e, f);
                    e instanceof r &&
                      e.statics.scope === this.statics.scope &&
                      this.attributes.move(e);
                    return e;
                  };
                  return r;
                })(h.default);
                ca.default = ea;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, h) {
                          e.__proto__ = h;
                        }) ||
                      function (e, h) {
                        for (var f in h) h.hasOwnProperty(f) && (e[f] = h[f]);
                      };
                    return function (f, h) {
                      function r() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((r.prototype = h.prototype), new r());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(30);
                var x = ea(1);
                ea = (function (e) {
                  function f() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  z(f, e);
                  f.value = function () {
                    return !0;
                  };
                  f.prototype.index = function (e, f) {
                    return this.domNode === e ||
                      this.domNode.compareDocumentPosition(e) &
                        Node.DOCUMENT_POSITION_CONTAINED_BY
                      ? Math.min(f, 1)
                      : -1;
                  };
                  f.prototype.position = function (e) {
                    var f = [].indexOf.call(
                      this.parent.domNode.childNodes,
                      this.domNode
                    );
                    0 < e && (f += 1);
                    return [this.parent.domNode, f];
                  };
                  f.prototype.value = function () {
                    var e;
                    return (
                      (e = {}),
                      (e[this.statics.blotName] =
                        this.statics.value(this.domNode) || !0),
                      e
                    );
                  };
                  f.scope = x.Scope.INLINE_BLOT;
                  return f;
                })(h.default);
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  this.ops = e;
                  this.offset = this.index = 0;
                }
                var x = ea(11),
                  e = ea(3),
                  f = {
                    attributes: {
                      compose: function (f, h, n) {
                        'object' !== typeof f && (f = {});
                        'object' !== typeof h && (h = {});
                        var r = e(!0, {}, h);
                        n ||
                          (r = Object.keys(r).reduce(function (e, f) {
                            null != r[f] && (e[f] = r[f]);
                            return e;
                          }, {}));
                        for (var x in f)
                          void 0 !== f[x] && void 0 === h[x] && (r[x] = f[x]);
                        return 0 < Object.keys(r).length ? r : void 0;
                      },
                      diff: function (e, f) {
                        'object' !== typeof e && (e = {});
                        'object' !== typeof f && (f = {});
                        var h = Object.keys(e)
                          .concat(Object.keys(f))
                          .reduce(function (h, n) {
                            x(e[n], f[n]) ||
                              (h[n] = void 0 === f[n] ? null : f[n]);
                            return h;
                          }, {});
                        return 0 < Object.keys(h).length ? h : void 0;
                      },
                      transform: function (e, f, h) {
                        if ('object' !== typeof e) return f;
                        if ('object' === typeof f) {
                          if (!h) return f;
                          h = Object.keys(f).reduce(function (h, n) {
                            void 0 === e[n] && (h[n] = f[n]);
                            return h;
                          }, {});
                          return 0 < Object.keys(h).length ? h : void 0;
                        }
                      },
                    },
                    iterator: function (e) {
                      return new z(e);
                    },
                    length: function (e) {
                      return 'number' === typeof e['delete']
                        ? e['delete']
                        : 'number' === typeof e.retain
                        ? e.retain
                        : 'string' === typeof e.insert
                        ? e.insert.length
                        : 1;
                    },
                  };
                z.prototype.hasNext = function () {
                  return Infinity > this.peekLength();
                };
                z.prototype.next = function (e) {
                  e || (e = Infinity);
                  var h = this.ops[this.index];
                  if (h) {
                    var n = this.offset,
                      w = f.length(h);
                    e >= w - n
                      ? ((e = w - n), (this.index += 1), (this.offset = 0))
                      : (this.offset += e);
                    if ('number' === typeof h['delete']) return { delete: e };
                    w = {};
                    h.attributes && (w.attributes = h.attributes);
                    'number' === typeof h.retain
                      ? (w.retain = e)
                      : (w.insert =
                          'string' === typeof h.insert
                            ? h.insert.substr(n, e)
                            : h.insert);
                    return w;
                  }
                  return { retain: Infinity };
                };
                z.prototype.peek = function () {
                  return this.ops[this.index];
                };
                z.prototype.peekLength = function () {
                  return this.ops[this.index]
                    ? f.length(this.ops[this.index]) - this.offset
                    : Infinity;
                };
                z.prototype.peekType = function () {
                  if (this.ops[this.index]) {
                    if ('number' === typeof this.ops[this.index]['delete'])
                      return 'delete';
                    if ('number' !== typeof this.ops[this.index].retain)
                      return 'insert';
                  }
                  return 'retain';
                };
                z.prototype.rest = function () {
                  if (this.hasNext()) {
                    if (0 === this.offset) return this.ops.slice(this.index);
                    var e = this.offset,
                      f = this.index,
                      h = this.next(),
                      w = this.ops.slice(this.index);
                    this.offset = e;
                    this.index = f;
                    return [h].concat(w);
                  }
                  return [];
                };
                h.exports = f;
              },
              function (aa) {
                var ca = (function () {
                  function aa(e, f) {
                    return null != f && e instanceof f;
                  }
                  function z(n, w, x, ca, ea) {
                    function ba(n, x) {
                      if (null === n) return null;
                      if (0 === x || 'object' != typeof n) return n;
                      if (aa(n, f)) var ha = new f();
                      else if (aa(n, y)) ha = new y();
                      else if (aa(n, r))
                        ha = new r(function (e, f) {
                          n.then(
                            function (f) {
                              e(ba(f, x - 1));
                            },
                            function (e) {
                              f(ba(e, x - 1));
                            }
                          );
                        });
                      else if (z.__isArray(n)) ha = [];
                      else if (z.__isRegExp(n))
                        (ha = new RegExp(n.source, e(n))),
                          n.lastIndex && (ha.lastIndex = n.lastIndex);
                      else if (z.__isDate(n)) ha = new Date(n.getTime());
                      else {
                        if (ia && h.isBuffer(n))
                          return (
                            (ha = h.allocUnsafe
                              ? h.allocUnsafe(n.length)
                              : new h(n.length)),
                            n.copy(ha),
                            ha
                          );
                        if (aa(n, Error)) ha = Object.create(n);
                        else if ('undefined' == typeof ca) {
                          var la = Object.getPrototypeOf(n);
                          ha = Object.create(la);
                        } else (ha = Object.create(ca)), (la = ca);
                      }
                      if (w) {
                        var va = fa.indexOf(n);
                        if (-1 != va) return da[va];
                        fa.push(n);
                        da.push(ha);
                      }
                      aa(n, f) &&
                        n.forEach(function (e, f) {
                          f = ba(f, x - 1);
                          e = ba(e, x - 1);
                          ha.set(f, e);
                        });
                      aa(n, y) &&
                        n.forEach(function (e) {
                          e = ba(e, x - 1);
                          ha.add(e);
                        });
                      for (var ma in n) {
                        var ka;
                        la && (ka = Object.getOwnPropertyDescriptor(la, ma));
                        (ka && null == ka.set) || (ha[ma] = ba(n[ma], x - 1));
                      }
                      if (Object.getOwnPropertySymbols)
                        for (
                          va = Object.getOwnPropertySymbols(n), ma = 0;
                          ma < va.length;
                          ma++
                        )
                          if (
                            ((ka = va[ma]),
                            (la = Object.getOwnPropertyDescriptor(n, ka)),
                            !la || la.enumerable || ea)
                          )
                            (ha[ka] = ba(n[ka], x - 1)),
                              la.enumerable ||
                                Object.defineProperty(ha, ka, {
                                  enumerable: !1,
                                });
                      if (ea)
                        for (
                          va = Object.getOwnPropertyNames(n), ma = 0;
                          ma < va.length;
                          ma++
                        )
                          (ka = va[ma]),
                            (la = Object.getOwnPropertyDescriptor(n, ka)),
                            (la && la.enumerable) ||
                              ((ha[ka] = ba(n[ka], x - 1)),
                              Object.defineProperty(ha, ka, {
                                enumerable: !1,
                              }));
                      return ha;
                    }
                    'object' === typeof w &&
                      ((x = w.depth),
                      (ca = w.prototype),
                      (ea = w.includeNonEnumerable),
                      (w = w.circular));
                    var fa = [],
                      da = [],
                      ia = 'undefined' != typeof h;
                    'undefined' == typeof w && (w = !0);
                    'undefined' == typeof x && (x = Infinity);
                    return ba(n, x);
                  }
                  function x(e) {
                    return Object.prototype.toString.call(e);
                  }
                  function e(e) {
                    var f = '';
                    e.global && (f += 'g');
                    e.ignoreCase && (f += 'i');
                    e.multiline && (f += 'm');
                    return f;
                  }
                  try {
                    var f = Map;
                  } catch (n) {
                    f = function () {};
                  }
                  try {
                    var y = Set;
                  } catch (n) {
                    y = function () {};
                  }
                  try {
                    var r = Promise;
                  } catch (n) {
                    r = function () {};
                  }
                  z.clonePrototype = function (e) {
                    function f() {}
                    if (null === e) return null;
                    f.prototype = e;
                    return new f();
                  };
                  z.__objToStr = x;
                  z.__isDate = function (e) {
                    return 'object' === typeof e && '[object Date]' === x(e);
                  };
                  z.__isArray = function (e) {
                    return 'object' === typeof e && '[object Array]' === x(e);
                  };
                  z.__isRegExp = function (e) {
                    return 'object' === typeof e && '[object RegExp]' === x(e);
                  };
                  z.__getRegExpFlags = e;
                  return z;
                })();
                'object' === typeof aa && aa.exports && (aa.exports = ca);
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function e(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function f(e) {
                  return e instanceof fa.default || e instanceof aa.BlockEmbed;
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var y = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (ua) {
                          (r = !0), (w = ua);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  n = function sa(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return sa(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(0);
                var w = z(h);
                h = ea(8);
                var ba = z(h),
                  aa = ea(4),
                  fa = z(aa);
                h = ea(16);
                var da = z(h);
                h = ea(13);
                var ha = z(h);
                ea = ea(25);
                ea = z(ea);
                h = (function (h) {
                  function z(e, f) {
                    if (!(this instanceof z))
                      throw new TypeError('Cannot call a class as a function');
                    e = x(
                      this,
                      (z.__proto__ || Object.getPrototypeOf(z)).call(this, e)
                    );
                    e.emitter = f.emitter;
                    Array.isArray(f.whitelist) &&
                      (e.whitelist = f.whitelist.reduce(function (e, f) {
                        e[f] = !0;
                        return e;
                      }, {}));
                    e.domNode.addEventListener(
                      'DOMNodeInserted',
                      function () {}
                    );
                    e.optimize();
                    e.enable();
                    return e;
                  }
                  e(z, h);
                  r(z, [
                    {
                      key: 'batchStart',
                      value: function () {
                        this.batch = !0;
                      },
                    },
                    {
                      key: 'batchEnd',
                      value: function () {
                        this.batch = !1;
                        this.optimize();
                      },
                    },
                    {
                      key: 'deleteAt',
                      value: function (e, f) {
                        var h = this.line(e),
                          r = y(h, 2);
                        h = r[0];
                        var w = r[1];
                        r = this.line(e + f);
                        r = y(r, 1)[0];
                        n(
                          z.prototype.__proto__ ||
                            Object.getPrototypeOf(z.prototype),
                          'deleteAt',
                          this
                        ).call(this, e, f);
                        if (null != r && h !== r && 0 < w) {
                          if (
                            h instanceof aa.BlockEmbed ||
                            r instanceof aa.BlockEmbed
                          ) {
                            this.optimize();
                            return;
                          }
                          if (h instanceof ha.default) {
                            if (
                              ((e = h.newlineIndex(h.length(), !0)),
                              -1 < e && ((h = h.split(e + 1)), h === r))
                            ) {
                              this.optimize();
                              return;
                            }
                          } else
                            r instanceof ha.default &&
                              ((e = r.newlineIndex(0)),
                              -1 < e && r.split(e + 1));
                          h.moveChildren(
                            r,
                            r.children.head instanceof da.default
                              ? null
                              : r.children.head
                          );
                          h.remove();
                        }
                        this.optimize();
                      },
                    },
                    {
                      key: 'enable',
                      value: function () {
                        this.domNode.setAttribute(
                          'contenteditable',
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : !0
                        );
                      },
                    },
                    {
                      key: 'formatAt',
                      value: function (e, f, h, r) {
                        if (null == this.whitelist || this.whitelist[h])
                          n(
                            z.prototype.__proto__ ||
                              Object.getPrototypeOf(z.prototype),
                            'formatAt',
                            this
                          ).call(this, e, f, h, r),
                            this.optimize();
                      },
                    },
                    {
                      key: 'insertAt',
                      value: function (e, f, h) {
                        if (
                          null == h ||
                          null == this.whitelist ||
                          this.whitelist[f]
                        )
                          e >= this.length()
                            ? null == h ||
                              null == w.default.query(f, w.default.Scope.BLOCK)
                              ? ((e = w.default.create(
                                  this.statics.defaultChild
                                )),
                                this.appendChild(e),
                                null == h &&
                                  f.endsWith('\n') &&
                                  (f = f.slice(0, -1)),
                                e.insertAt(0, f, h))
                              : ((f = w.default.create(f, h)),
                                this.appendChild(f))
                            : n(
                                z.prototype.__proto__ ||
                                  Object.getPrototypeOf(z.prototype),
                                'insertAt',
                                this
                              ).call(this, e, f, h),
                            this.optimize();
                      },
                    },
                    {
                      key: 'insertBefore',
                      value: function (e, f) {
                        if (e.statics.scope === w.default.Scope.INLINE_BLOT) {
                          var h = w.default.create(this.statics.defaultChild);
                          h.appendChild(e);
                          e = h;
                        }
                        n(
                          z.prototype.__proto__ ||
                            Object.getPrototypeOf(z.prototype),
                          'insertBefore',
                          this
                        ).call(this, e, f);
                      },
                    },
                    {
                      key: 'leaf',
                      value: function (e) {
                        return this.path(e).pop() || [null, -1];
                      },
                    },
                    {
                      key: 'line',
                      value: function (e) {
                        return e === this.length()
                          ? this.line(e - 1)
                          : this.descendant(f, e);
                      },
                    },
                    {
                      key: 'lines',
                      value: function () {
                        return (function qa(e, h, n) {
                          var r = [],
                            x = n;
                          e.children.forEachAt(h, n, function (e, h, n) {
                            f(e)
                              ? r.push(e)
                              : e instanceof w.default.Container &&
                                (r = r.concat(qa(e, h, x)));
                            x -= n;
                          });
                          return r;
                        })(
                          this,
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : Number.MAX_VALUE
                        );
                      },
                    },
                    {
                      key: 'optimize',
                      value: function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        !0 !== this.batch &&
                          (n(
                            z.prototype.__proto__ ||
                              Object.getPrototypeOf(z.prototype),
                            'optimize',
                            this
                          ).call(this, e, f),
                          0 < e.length &&
                            this.emitter.emit(
                              ba.default.events.SCROLL_OPTIMIZE,
                              e,
                              f
                            ));
                      },
                    },
                    {
                      key: 'path',
                      value: function (e) {
                        return n(
                          z.prototype.__proto__ ||
                            Object.getPrototypeOf(z.prototype),
                          'path',
                          this
                        )
                          .call(this, e)
                          .slice(1);
                      },
                    },
                    {
                      key: 'update',
                      value: function (e) {
                        if (!0 !== this.batch) {
                          var f = ba.default.sources.USER;
                          'string' === typeof e && (f = e);
                          Array.isArray(e) || (e = this.observer.takeRecords());
                          0 < e.length &&
                            this.emitter.emit(
                              ba.default.events.SCROLL_BEFORE_UPDATE,
                              f,
                              e
                            );
                          n(
                            z.prototype.__proto__ ||
                              Object.getPrototypeOf(z.prototype),
                            'update',
                            this
                          ).call(this, e.concat([]));
                          0 < e.length &&
                            this.emitter.emit(
                              ba.default.events.SCROLL_UPDATE,
                              f,
                              e
                            );
                        }
                      },
                    },
                  ]);
                  return z;
                })(w.default.Scroll);
                h.blotName = 'scroll';
                h.className = 'ql-editor';
                h.tagName = 'DIV';
                h.defaultChild = 'block';
                h.allowedChildren = [fa.default, aa.BlockEmbed, ea.default];
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f, h) {
                  f in e
                    ? Object.defineProperty(e, f, {
                        value: h,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[f] = h);
                  return e;
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function y(e, f) {
                  var h,
                    n = e === pa.keys.LEFT ? 'prefix' : 'suffix';
                  return (
                    (h = { key: e, shiftKey: f, altKey: null }),
                    x(h, n, /^$/),
                    x(h, 'handler', function (h) {
                      var n = h.index;
                      e === pa.keys.RIGHT && (n += h.length + 1);
                      n = this.quill.getLeaf(n);
                      if (!(ka(n, 1)[0] instanceof qa.default.Embed)) return !0;
                      e === pa.keys.LEFT
                        ? f
                          ? this.quill.setSelection(
                              h.index - 1,
                              h.length + 1,
                              ua.default.sources.USER
                            )
                          : this.quill.setSelection(
                              h.index - 1,
                              ua.default.sources.USER
                            )
                        : f
                        ? this.quill.setSelection(
                            h.index,
                            h.length + 1,
                            ua.default.sources.USER
                          )
                        : this.quill.setSelection(
                            h.index + h.length + 1,
                            ua.default.sources.USER
                          );
                      return !1;
                    }),
                    h
                  );
                }
                function r(e, f) {
                  if (!(0 === e.index || 1 >= this.quill.getLength())) {
                    var h = this.quill.getLine(e.index),
                      n = ka(h, 1)[0];
                    h = {};
                    if (0 === f.offset) {
                      var r = this.quill.getLine(e.index - 1);
                      r = ka(r, 1)[0];
                      null != r &&
                        1 < r.length() &&
                        ((h = n.formats()),
                        (n = this.quill.getFormat(e.index - 1, 1)),
                        (h = va.default.attributes.diff(h, n) || {}));
                    }
                    f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(f.prefix)
                      ? 2
                      : 1;
                    this.quill.deleteText(
                      e.index - f,
                      f,
                      ua.default.sources.USER
                    );
                    0 < Object.keys(h).length &&
                      this.quill.formatLine(
                        e.index - f,
                        f,
                        h,
                        ua.default.sources.USER
                      );
                    this.quill.focus();
                  }
                }
                function n(e, f) {
                  var h = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(f.suffix)
                    ? 2
                    : 1;
                  if (!(e.index >= this.quill.getLength() - h)) {
                    var n = {},
                      r = 0,
                      w = this.quill.getLine(e.index);
                    w = ka(w, 1)[0];
                    f.offset >= w.length() - 1 &&
                      ((f = this.quill.getLine(e.index + 1)),
                      (f = ka(f, 1)[0])) &&
                      ((n = w.formats()),
                      (r = this.quill.getFormat(e.index, 1)),
                      (n = va.default.attributes.diff(n, r) || {}),
                      (r = f.length()));
                    this.quill.deleteText(e.index, h, ua.default.sources.USER);
                    0 < Object.keys(n).length &&
                      this.quill.formatLine(
                        e.index + r - 1,
                        h,
                        n,
                        ua.default.sources.USER
                      );
                  }
                }
                function w(e) {
                  var f = this.quill.getLines(e),
                    h = {};
                  1 < f.length &&
                    ((h = f[0].formats()),
                    (f = f[f.length - 1].formats()),
                    (h = va.default.attributes.diff(f, h) || {}));
                  this.quill.deleteText(e, ua.default.sources.USER);
                  0 < Object.keys(h).length &&
                    this.quill.formatLine(
                      e.index,
                      1,
                      h,
                      ua.default.sources.USER
                    );
                  this.quill.setSelection(e.index, ua.default.sources.SILENT);
                  this.quill.focus();
                }
                function ba(e, f) {
                  var h = this;
                  0 < e.length && this.quill.scroll.deleteAt(e.index, e.length);
                  var n = Object.keys(f.format).reduce(function (e, h) {
                    qa.default.query(h, qa.default.Scope.BLOCK) &&
                      !Array.isArray(f.format[h]) &&
                      (e[h] = f.format[h]);
                    return e;
                  }, {});
                  this.quill.insertText(
                    e.index,
                    '\n',
                    n,
                    ua.default.sources.USER
                  );
                  this.quill.setSelection(
                    e.index + 1,
                    ua.default.sources.SILENT
                  );
                  this.quill.focus();
                  Object.keys(f.format).forEach(function (e) {
                    null == n[e] &&
                      (Array.isArray(f.format[e]) ||
                        ('link' !== e &&
                          h.quill.format(
                            e,
                            f.format[e],
                            ua.default.sources.USER
                          )));
                  });
                }
                function aa(e) {
                  return {
                    key: pa.keys.TAB,
                    shiftKey: !e,
                    format: { 'code-block': !0 },
                    handler: function (f) {
                      var h = qa.default.query('code-block'),
                        n = f.index,
                        r = f.length;
                      f = this.quill.scroll.descendant(h, n);
                      f = ka(f, 2);
                      var w = f[0],
                        x = f[1];
                      if (null != w) {
                        f = this.quill.getIndex(w);
                        var y = w.newlineIndex(x, !0) + 1;
                        f = w.newlineIndex(f + x + r);
                        f = w.domNode.textContent.slice(y, f).split('\n');
                        x = 0;
                        f.forEach(function (f, ba) {
                          e
                            ? (w.insertAt(y + x, h.TAB),
                              (x += h.TAB.length),
                              0 === ba
                                ? (n += h.TAB.length)
                                : (r += h.TAB.length))
                            : f.startsWith(h.TAB) &&
                              (w.deleteAt(y + x, h.TAB.length),
                              (x -= h.TAB.length),
                              0 === ba
                                ? (n -= h.TAB.length)
                                : (r -= h.TAB.length));
                          x += f.length + 1;
                        });
                        this.quill.update(ua.default.sources.USER);
                        this.quill.setSelection(
                          n,
                          r,
                          ua.default.sources.SILENT
                        );
                      }
                    },
                  };
                }
                function fa(e) {
                  return {
                    key: e[0].toUpperCase(),
                    shortKey: !0,
                    handler: function (f, h) {
                      this.quill.format(
                        e,
                        !h.format[e],
                        ua.default.sources.USER
                      );
                    },
                  };
                }
                function da(e) {
                  if ('string' === typeof e || 'number' === typeof e)
                    return da({ key: e });
                  'object' ===
                    ('undefined' === typeof e ? 'undefined' : ha(e)) &&
                    (e = (0, ya.default)(e, !1));
                  if ('string' === typeof e.key)
                    if (null != pa.keys[e.key.toUpperCase()])
                      e.key = pa.keys[e.key.toUpperCase()];
                    else if (1 === e.key.length)
                      e.key = e.key.toUpperCase().charCodeAt(0);
                    else return null;
                  e.shortKey && ((e[za] = e.shortKey), delete e.shortKey);
                  return e;
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.SHORTKEY = ca.default = void 0;
                var ha =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  ka = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (Ga) {
                          (r = !0), (w = Ga);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  ja = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(21);
                var ya = z(h);
                h = ea(11);
                var ma = z(h);
                h = ea(3);
                var sa = z(h);
                h = ea(2);
                var Ba = z(h);
                h = ea(20);
                var va = z(h);
                h = ea(0);
                var qa = z(h);
                h = ea(5);
                var ua = z(h);
                h = ea(10);
                h = z(h);
                ea = ea(9);
                ea = z(ea);
                var ta = (0, h.default)('quill:keyboard'),
                  za = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey',
                  pa = (function (h) {
                    function x(f, h) {
                      if (!(this instanceof x))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                      var y = e(
                        this,
                        (x.__proto__ || Object.getPrototypeOf(x)).call(
                          this,
                          f,
                          h
                        )
                      );
                      y.bindings = {};
                      Object.keys(y.options.bindings).forEach(function (e) {
                        ('list autofill' !== e ||
                          null == f.scroll.whitelist ||
                          f.scroll.whitelist.list) &&
                          y.options.bindings[e] &&
                          y.addBinding(y.options.bindings[e]);
                      });
                      y.addBinding({ key: x.keys.ENTER, shiftKey: null }, ba);
                      y.addBinding(
                        {
                          key: x.keys.ENTER,
                          metaKey: null,
                          ctrlKey: null,
                          altKey: null,
                        },
                        function () {}
                      );
                      /Firefox/i.test(navigator.userAgent)
                        ? (y.addBinding(
                            { key: x.keys.BACKSPACE },
                            { collapsed: !0 },
                            r
                          ),
                          y.addBinding(
                            { key: x.keys.DELETE },
                            { collapsed: !0 },
                            n
                          ))
                        : (y.addBinding(
                            { key: x.keys.BACKSPACE },
                            { collapsed: !0, prefix: /^.?$/ },
                            r
                          ),
                          y.addBinding(
                            { key: x.keys.DELETE },
                            { collapsed: !0, suffix: /^.?$/ },
                            n
                          ));
                      y.addBinding(
                        { key: x.keys.BACKSPACE },
                        { collapsed: !1 },
                        w
                      );
                      y.addBinding(
                        { key: x.keys.DELETE },
                        { collapsed: !1 },
                        w
                      );
                      y.addBinding(
                        {
                          key: x.keys.BACKSPACE,
                          altKey: null,
                          ctrlKey: null,
                          metaKey: null,
                          shiftKey: null,
                        },
                        { collapsed: !0, offset: 0 },
                        r
                      );
                      y.listen();
                      return y;
                    }
                    f(x, h);
                    ja(x, null, [
                      {
                        key: 'match',
                        value: function (e, f) {
                          f = da(f);
                          return [
                            'altKey',
                            'ctrlKey',
                            'metaKey',
                            'shiftKey',
                          ].some(function (h) {
                            return !!f[h] !== e[h] && null !== f[h];
                          })
                            ? !1
                            : f.key === (e.which || e.keyCode);
                        },
                      },
                    ]);
                    ja(x, [
                      {
                        key: 'addBinding',
                        value: function (e) {
                          var f =
                              1 < arguments.length && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            h =
                              2 < arguments.length && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            n = da(e);
                          if (null == n || null == n.key)
                            return ta.warn(
                              'Attempted to add invalid keyboard binding',
                              n
                            );
                          'function' === typeof f && (f = { handler: f });
                          'function' === typeof h && (h = { handler: h });
                          n = (0, sa.default)(n, f, h);
                          this.bindings[n.key] = this.bindings[n.key] || [];
                          this.bindings[n.key].push(n);
                        },
                      },
                      {
                        key: 'listen',
                        value: function () {
                          var e = this;
                          this.quill.root.addEventListener(
                            'keydown',
                            function (f) {
                              if (!f.defaultPrevented) {
                                var h = (
                                  e.bindings[f.which || f.keyCode] || []
                                ).filter(function (e) {
                                  return x.match(f, e);
                                });
                                if (0 !== h.length) {
                                  var n = e.quill.getSelection();
                                  if (null != n && e.quill.hasFocus()) {
                                    var r = e.quill.getLine(n.index),
                                      w = ka(r, 2);
                                    r = w[0];
                                    w = w[1];
                                    var y = e.quill.getLeaf(n.index),
                                      ba = ka(y, 2);
                                    y = ba[0];
                                    ba = ba[1];
                                    var z =
                                        0 === n.length
                                          ? [y, ba]
                                          : e.quill.getLeaf(n.index + n.length),
                                      aa = ka(z, 2);
                                    z = aa[0];
                                    aa = aa[1];
                                    y =
                                      y instanceof qa.default.Text
                                        ? y.value().slice(0, ba)
                                        : '';
                                    ba =
                                      z instanceof qa.default.Text
                                        ? z.value().slice(aa)
                                        : '';
                                    var ca = {
                                      collapsed: 0 === n.length,
                                      empty: 0 === n.length && 1 >= r.length(),
                                      format: e.quill.getFormat(n),
                                      offset: w,
                                      prefix: y,
                                      suffix: ba,
                                    };
                                    h.some(function (f) {
                                      if (
                                        (null != f.collapsed &&
                                          f.collapsed !== ca.collapsed) ||
                                        (null != f.empty &&
                                          f.empty !== ca.empty) ||
                                        (null != f.offset &&
                                          f.offset !== ca.offset)
                                      )
                                        return !1;
                                      if (Array.isArray(f.format)) {
                                        if (
                                          f.format.every(function (e) {
                                            return null == ca.format[e];
                                          })
                                        )
                                          return !1;
                                      } else if (
                                        'object' === ha(f.format) &&
                                        !Object.keys(f.format).every(function (
                                          e
                                        ) {
                                          return !0 === f.format[e]
                                            ? null != ca.format[e]
                                            : !1 === f.format[e]
                                            ? null == ca.format[e]
                                            : (0, ma.default)(
                                                f.format[e],
                                                ca.format[e]
                                              );
                                        })
                                      )
                                        return !1;
                                      return (null != f.prefix &&
                                        !f.prefix.test(ca.prefix)) ||
                                        (null != f.suffix &&
                                          !f.suffix.test(ca.suffix))
                                        ? !1
                                        : !0 !== f.handler.call(e, n, ca);
                                    }) && f.preventDefault();
                                  }
                                }
                              }
                            }
                          );
                        },
                      },
                    ]);
                    return x;
                  })(ea.default);
                pa.keys = {
                  BACKSPACE: 8,
                  TAB: 9,
                  ENTER: 13,
                  ESCAPE: 27,
                  LEFT: 37,
                  UP: 38,
                  RIGHT: 39,
                  DOWN: 40,
                  DELETE: 46,
                };
                pa.DEFAULTS = {
                  bindings: {
                    bold: fa('bold'),
                    italic: fa('italic'),
                    underline: fa('underline'),
                    indent: {
                      key: pa.keys.TAB,
                      format: ['blockquote', 'indent', 'list'],
                      handler: function (e, f) {
                        if (f.collapsed && 0 !== f.offset) return !0;
                        this.quill.format(
                          'indent',
                          '+1',
                          ua.default.sources.USER
                        );
                      },
                    },
                    outdent: {
                      key: pa.keys.TAB,
                      shiftKey: !0,
                      format: ['blockquote', 'indent', 'list'],
                      handler: function (e, f) {
                        if (f.collapsed && 0 !== f.offset) return !0;
                        this.quill.format(
                          'indent',
                          '-1',
                          ua.default.sources.USER
                        );
                      },
                    },
                    'outdent backspace': {
                      key: pa.keys.BACKSPACE,
                      collapsed: !0,
                      shiftKey: null,
                      metaKey: null,
                      ctrlKey: null,
                      altKey: null,
                      format: ['indent', 'list'],
                      offset: 0,
                      handler: function (e, f) {
                        null != f.format.indent
                          ? this.quill.format(
                              'indent',
                              '-1',
                              ua.default.sources.USER
                            )
                          : null != f.format.list &&
                            this.quill.format(
                              'list',
                              !1,
                              ua.default.sources.USER
                            );
                      },
                    },
                    'indent code-block': aa(!0),
                    'outdent code-block': aa(!1),
                    'remove tab': {
                      key: pa.keys.TAB,
                      shiftKey: !0,
                      collapsed: !0,
                      prefix: /\t$/,
                      handler: function (e) {
                        this.quill.deleteText(
                          e.index - 1,
                          1,
                          ua.default.sources.USER
                        );
                      },
                    },
                    tab: {
                      key: pa.keys.TAB,
                      handler: function (e) {
                        this.quill.history.cutoff();
                        var f = new Ba.default()
                          .retain(e.index)
                          .delete(e.length)
                          .insert('\t');
                        this.quill.updateContents(f, ua.default.sources.USER);
                        this.quill.history.cutoff();
                        this.quill.setSelection(
                          e.index + 1,
                          ua.default.sources.SILENT
                        );
                      },
                    },
                    'list empty enter': {
                      key: pa.keys.ENTER,
                      collapsed: !0,
                      format: ['list'],
                      empty: !0,
                      handler: function (e, f) {
                        this.quill.format('list', !1, ua.default.sources.USER);
                        f.format.indent &&
                          this.quill.format(
                            'indent',
                            !1,
                            ua.default.sources.USER
                          );
                      },
                    },
                    'checklist enter': {
                      key: pa.keys.ENTER,
                      collapsed: !0,
                      format: { list: 'checked' },
                      handler: function (e) {
                        var f = this.quill.getLine(e.index),
                          h = ka(f, 2);
                        f = h[0];
                        h = h[1];
                        var n = (0, sa.default)({}, f.formats(), {
                          list: 'checked',
                        });
                        f = new Ba.default()
                          .retain(e.index)
                          .insert('\n', n)
                          .retain(f.length() - h - 1)
                          .retain(1, { list: 'unchecked' });
                        this.quill.updateContents(f, ua.default.sources.USER);
                        this.quill.setSelection(
                          e.index + 1,
                          ua.default.sources.SILENT
                        );
                        this.quill.scrollIntoView();
                      },
                    },
                    'header enter': {
                      key: pa.keys.ENTER,
                      collapsed: !0,
                      format: ['header'],
                      suffix: /^$/,
                      handler: function (e, f) {
                        var h = this.quill.getLine(e.index),
                          n = ka(h, 2);
                        h = n[0];
                        n = n[1];
                        f = new Ba.default()
                          .retain(e.index)
                          .insert('\n', f.format)
                          .retain(h.length() - n - 1)
                          .retain(1, { header: null });
                        this.quill.updateContents(f, ua.default.sources.USER);
                        this.quill.setSelection(
                          e.index + 1,
                          ua.default.sources.SILENT
                        );
                        this.quill.scrollIntoView();
                      },
                    },
                    'list autofill': {
                      key: ' ',
                      collapsed: !0,
                      format: { list: !1 },
                      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                      handler: function (e, f) {
                        var h = f.prefix.length,
                          n = this.quill.getLine(e.index),
                          r = ka(n, 2);
                        n = r[0];
                        r = r[1];
                        if (r > h) return !0;
                        switch (f.prefix.trim()) {
                          case '[]':
                          case '[ ]':
                            f = 'unchecked';
                            break;
                          case '[x]':
                            f = 'checked';
                            break;
                          case '-':
                          case '*':
                            f = 'bullet';
                            break;
                          default:
                            f = 'ordered';
                        }
                        this.quill.insertText(
                          e.index,
                          ' ',
                          ua.default.sources.USER
                        );
                        this.quill.history.cutoff();
                        f = new Ba.default()
                          .retain(e.index - r)
                          .delete(h + 1)
                          .retain(n.length() - 2 - r)
                          .retain(1, { list: f });
                        this.quill.updateContents(f, ua.default.sources.USER);
                        this.quill.history.cutoff();
                        this.quill.setSelection(
                          e.index - h,
                          ua.default.sources.SILENT
                        );
                      },
                    },
                    'code exit': {
                      key: pa.keys.ENTER,
                      collapsed: !0,
                      format: ['code-block'],
                      prefix: /\n\n$/,
                      suffix: /^\s+$/,
                      handler: function (e) {
                        var f = this.quill.getLine(e.index),
                          h = ka(f, 2);
                        f = h[0];
                        h = h[1];
                        e = new Ba.default()
                          .retain(e.index + f.length() - h - 2)
                          .retain(1, { 'code-block': null })
                          .delete(1);
                        this.quill.updateContents(e, ua.default.sources.USER);
                      },
                    },
                    'embed left': y(pa.keys.LEFT, !1),
                    'embed left shift': y(pa.keys.LEFT, !0),
                    'embed right': y(pa.keys.RIGHT, !1),
                    'embed right shift': y(pa.keys.RIGHT, !0),
                  },
                };
                ca.default = pa;
                ca.SHORTKEY = za;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (ja) {
                          (r = !0), (w = ja);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  e = function la(e, f, h) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return la(e, f, h);
                    } else {
                      if ('value' in r) return r.value;
                      f = r.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  },
                  f = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var r = f[h];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        'value' in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (f, h, r) {
                      h && e(f.prototype, h);
                      r && e(f, r);
                      return f;
                    };
                  })(),
                  y = (h = ea(0)) && h.__esModule ? h : { default: h },
                  r = (ea = ea(7)) && ea.__esModule ? ea : { default: ea };
                ea = (function (h) {
                  function w(e, f) {
                    if (!(this instanceof w))
                      throw new TypeError('Cannot call a class as a function');
                    e = (w.__proto__ || Object.getPrototypeOf(w)).call(this, e);
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    e =
                      !e || ('object' !== typeof e && 'function' !== typeof e)
                        ? this
                        : e;
                    e.selection = f;
                    e.textNode = document.createTextNode(w.CONTENTS);
                    e.domNode.appendChild(e.textNode);
                    e._length = 0;
                    return e;
                  }
                  z(w, h);
                  f(w, null, [{ key: 'value', value: function () {} }]);
                  f(w, [
                    {
                      key: 'detach',
                      value: function () {
                        null != this.parent && this.parent.removeChild(this);
                      },
                    },
                    {
                      key: 'format',
                      value: function (f, h) {
                        if (0 !== this._length)
                          return e(
                            w.prototype.__proto__ ||
                              Object.getPrototypeOf(w.prototype),
                            'format',
                            this
                          ).call(this, f, h);
                        for (
                          var r = this, x = 0;
                          null != r &&
                          r.statics.scope !== y.default.Scope.BLOCK_BLOT;

                        )
                          (x += r.offset(r.parent)), (r = r.parent);
                        null != r &&
                          ((this._length = w.CONTENTS.length),
                          r.optimize(),
                          r.formatAt(x, w.CONTENTS.length, f, h),
                          (this._length = 0));
                      },
                    },
                    {
                      key: 'index',
                      value: function (f, h) {
                        return f === this.textNode
                          ? 0
                          : e(
                              w.prototype.__proto__ ||
                                Object.getPrototypeOf(w.prototype),
                              'index',
                              this
                            ).call(this, f, h);
                      },
                    },
                    {
                      key: 'length',
                      value: function () {
                        return this._length;
                      },
                    },
                    {
                      key: 'position',
                      value: function () {
                        return [this.textNode, this.textNode.data.length];
                      },
                    },
                    {
                      key: 'remove',
                      value: function () {
                        e(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'remove',
                          this
                        ).call(this);
                        this.parent = null;
                      },
                    },
                    {
                      key: 'restore',
                      value: function () {
                        if (!this.selection.composing && null != this.parent) {
                          var e = this.textNode,
                            f = this.selection.getNativeRange(),
                            h = void 0,
                            z = void 0,
                            ba = void 0;
                          null != f &&
                            f.start.node === e &&
                            f.end.node === e &&
                            ((ba = [e, f.start.offset, f.end.offset]),
                            (h = ba[0]),
                            (z = ba[1]),
                            (ba = ba[2]));
                          for (
                            ;
                            null != this.domNode.lastChild &&
                            this.domNode.lastChild !== this.textNode;

                          )
                            this.domNode.parentNode.insertBefore(
                              this.domNode.lastChild,
                              this.domNode
                            );
                          this.textNode.data !== w.CONTENTS &&
                            ((e = this.textNode.data
                              .split(w.CONTENTS)
                              .join('')),
                            this.next instanceof r.default
                              ? ((h = this.next.domNode),
                                this.next.insertAt(0, e),
                                (this.textNode.data = w.CONTENTS))
                              : ((this.textNode.data = e),
                                this.parent.insertBefore(
                                  y.default.create(this.textNode),
                                  this
                                ),
                                (this.textNode = document.createTextNode(
                                  w.CONTENTS
                                )),
                                this.domNode.appendChild(this.textNode)));
                          this.remove();
                          if (null != z)
                            return (
                              (z = [z, ba].map(function (e) {
                                return Math.max(
                                  0,
                                  Math.min(h.data.length, e - 1)
                                );
                              })),
                              (ba = x(z, 2)),
                              (z = ba[0]),
                              (ba = ba[1]),
                              {
                                startNode: h,
                                startOffset: z,
                                endNode: h,
                                endOffset: ba,
                              }
                            );
                        }
                      },
                    },
                    {
                      key: 'update',
                      value: function (e, f) {
                        var h = this;
                        e.some(function (e) {
                          return (
                            'characterData' === e.type &&
                            e.target === h.textNode
                          );
                        }) &&
                          (e = this.restore()) &&
                          (f.range = e);
                      },
                    },
                    {
                      key: 'value',
                      value: function () {
                        return '';
                      },
                    },
                  ]);
                  return w;
                })(y.default.Embed);
                ea.blotName = 'cursor';
                ea.className = 'ql-cursor';
                ea.tagName = 'span';
                ea.CONTENTS = '\ufeff';
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (h = ea(0)) && h.__esModule ? h : { default: h };
                var x = (ea = ea(4)) && ea.__esModule ? ea : { default: ea };
                h = (function (e) {
                  function f() {
                    if (!(this instanceof f))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (f.__proto__ || Object.getPrototypeOf(f)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(f, e);
                  return f;
                })(h.default.Container);
                h.allowedChildren = [x.default, ea.BlockEmbed, h];
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.ColorStyle = ca.ColorClass = ca.ColorAttributor = void 0;
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  e = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  },
                  f = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(0));
                h = (function (f) {
                  function h() {
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (h.__proto__ || Object.getPrototypeOf(h)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(h, f);
                  x(h, [
                    {
                      key: 'value',
                      value: function (f) {
                        f = e(
                          h.prototype.__proto__ ||
                            Object.getPrototypeOf(h.prototype),
                          'value',
                          this
                        ).call(this, f);
                        if (!f.startsWith('rgb(')) return f;
                        f = f.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
                        return (
                          '#' +
                          f
                            .split(',')
                            .map(function (e) {
                              return ('00' + parseInt(e).toString(16)).slice(
                                -2
                              );
                            })
                            .join('')
                        );
                      },
                    },
                  ]);
                  return h;
                })(f.default.Attributor.Style);
                ea = new f.default.Attributor.Class('color', 'ql-color', {
                  scope: f.default.Scope.INLINE,
                });
                f = new h('color', 'color', { scope: f.default.Scope.INLINE });
                ca.ColorAttributor = h;
                ca.ColorClass = ea;
                ca.ColorStyle = f;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function x(e, f) {
                  var h = document.createElement('a');
                  h.href = e;
                  e = h.href.slice(0, h.href.indexOf(':'));
                  return -1 < f.indexOf(e);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.sanitize = ca.default = void 0;
                var e = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  f = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (function (h) {
                  function n() {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (n.__proto__ || Object.getPrototypeOf(n)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(n, h);
                  e(
                    n,
                    [
                      {
                        key: 'format',
                        value: function (e, h) {
                          if (e !== this.statics.blotName || !h)
                            return f(
                              n.prototype.__proto__ ||
                                Object.getPrototypeOf(n.prototype),
                              'format',
                              this
                            ).call(this, e, h);
                          h = this.constructor.sanitize(h);
                          this.domNode.setAttribute('href', h);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (e) {
                          var h = f(
                            n.__proto__ || Object.getPrototypeOf(n),
                            'create',
                            this
                          ).call(this, e);
                          e = this.sanitize(e);
                          h.setAttribute('href', e);
                          h.setAttribute('rel', 'noopener noreferrer');
                          h.setAttribute('target', '_blank');
                          return h;
                        },
                      },
                      {
                        key: 'formats',
                        value: function (e) {
                          return e.getAttribute('href');
                        },
                      },
                      {
                        key: 'sanitize',
                        value: function (e) {
                          return x(e, this.PROTOCOL_WHITELIST)
                            ? e
                            : this.SANITIZED_URL;
                        },
                      },
                    ]
                  );
                  return n;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(6)).default
                );
                h.blotName = 'link';
                h.tagName = 'A';
                h.SANITIZED_URL = 'about:blank';
                h.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];
                ca.default = h;
                ca.sanitize = x;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var z =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, r) {
                      h && e(f.prototype, h);
                      r && e(f, r);
                      return f;
                    };
                  })(),
                  e = (h = ea(23)) && h.__esModule ? h : { default: h },
                  f = (ea = ea(107)) && ea.__esModule ? ea : { default: ea },
                  y = 0;
                ea = (function () {
                  function h(f) {
                    var n = this;
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    this.select = f;
                    this.container = document.createElement('span');
                    this.buildPicker();
                    this.select.style.display = 'none';
                    this.select.parentNode.insertBefore(
                      this.container,
                      this.select
                    );
                    this.label.addEventListener('mousedown', function () {
                      n.togglePicker();
                    });
                    this.label.addEventListener('keydown', function (f) {
                      switch (f.keyCode) {
                        case e.default.keys.ENTER:
                          n.togglePicker();
                          break;
                        case e.default.keys.ESCAPE:
                          n.escape(), f.preventDefault();
                      }
                    });
                    this.select.addEventListener(
                      'change',
                      this.update.bind(this)
                    );
                  }
                  x(h, [
                    {
                      key: 'togglePicker',
                      value: function () {
                        this.container.classList.toggle('ql-expanded');
                        var e = this.label;
                        e.setAttribute(
                          'aria-expanded',
                          'true' !== e.getAttribute('aria-expanded')
                        );
                        e = this.options;
                        e.setAttribute(
                          'aria-hidden',
                          'true' !== e.getAttribute('aria-hidden')
                        );
                      },
                    },
                    {
                      key: 'buildItem',
                      value: function (f) {
                        var h = this,
                          n = document.createElement('span');
                        n.tabIndex = '0';
                        n.setAttribute('role', 'button');
                        n.classList.add('ql-picker-item');
                        f.hasAttribute('value') &&
                          n.setAttribute('data-value', f.getAttribute('value'));
                        f.textContent &&
                          n.setAttribute('data-label', f.textContent);
                        n.addEventListener('click', function () {
                          h.selectItem(n, !0);
                        });
                        n.addEventListener('keydown', function (f) {
                          switch (f.keyCode) {
                            case e.default.keys.ENTER:
                              h.selectItem(n, !0);
                              f.preventDefault();
                              break;
                            case e.default.keys.ESCAPE:
                              h.escape(), f.preventDefault();
                          }
                        });
                        return n;
                      },
                    },
                    {
                      key: 'buildLabel',
                      value: function () {
                        var e = document.createElement('span');
                        e.classList.add('ql-picker-label');
                        e.innerHTML = f.default;
                        e.tabIndex = '0';
                        e.setAttribute('role', 'button');
                        e.setAttribute('aria-expanded', 'false');
                        this.container.appendChild(e);
                        return e;
                      },
                    },
                    {
                      key: 'buildOptions',
                      value: function () {
                        var e = this,
                          f = document.createElement('span');
                        f.classList.add('ql-picker-options');
                        f.setAttribute('aria-hidden', 'true');
                        f.tabIndex = '-1';
                        f.id = 'ql-picker-options-' + y;
                        y += 1;
                        this.label.setAttribute('aria-controls', f.id);
                        this.options = f;
                        [].slice
                          .call(this.select.options)
                          .forEach(function (h) {
                            var n = e.buildItem(h);
                            f.appendChild(n);
                            !0 === h.selected && e.selectItem(n);
                          });
                        this.container.appendChild(f);
                      },
                    },
                    {
                      key: 'buildPicker',
                      value: function () {
                        var e = this;
                        [].slice
                          .call(this.select.attributes)
                          .forEach(function (f) {
                            e.container.setAttribute(f.name, f.value);
                          });
                        this.container.classList.add('ql-picker');
                        this.label = this.buildLabel();
                        this.buildOptions();
                      },
                    },
                    {
                      key: 'escape',
                      value: function () {
                        var e = this;
                        this.close();
                        setTimeout(function () {
                          return e.label.focus();
                        }, 1);
                      },
                    },
                    {
                      key: 'close',
                      value: function () {
                        this.container.classList.remove('ql-expanded');
                        this.label.setAttribute('aria-expanded', 'false');
                        this.options.setAttribute('aria-hidden', 'true');
                      },
                    },
                    {
                      key: 'selectItem',
                      value: function (e) {
                        var f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : !1,
                          h = this.container.querySelector('.ql-selected');
                        e !== h &&
                          (null != h && h.classList.remove('ql-selected'),
                          null != e &&
                            (e.classList.add('ql-selected'),
                            (this.select.selectedIndex = [].indexOf.call(
                              e.parentNode.children,
                              e
                            )),
                            e.hasAttribute('data-value')
                              ? this.label.setAttribute(
                                  'data-value',
                                  e.getAttribute('data-value')
                                )
                              : this.label.removeAttribute('data-value'),
                            e.hasAttribute('data-label')
                              ? this.label.setAttribute(
                                  'data-label',
                                  e.getAttribute('data-label')
                                )
                              : this.label.removeAttribute('data-label'),
                            f &&
                              ('function' === typeof Event
                                ? this.select.dispatchEvent(new Event('change'))
                                : 'object' ===
                                    ('undefined' === typeof Event
                                      ? 'undefined'
                                      : z(Event)) &&
                                  ((f = document.createEvent('Event')),
                                  f.initEvent('change', !0, !0),
                                  this.select.dispatchEvent(f)),
                              this.close())));
                      },
                    },
                    {
                      key: 'update',
                      value: function () {
                        var e = void 0;
                        if (-1 < this.select.selectedIndex) {
                          var f = this.container.querySelector(
                            '.ql-picker-options'
                          ).children[this.select.selectedIndex];
                          e = this.select.options[this.select.selectedIndex];
                          this.selectItem(f);
                        } else this.selectItem(null);
                        this.label.classList.toggle(
                          'ql-active',
                          null != e &&
                            e !== this.select.querySelector('option[selected]')
                        );
                      },
                    },
                  ]);
                  return h;
                })();
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(0);
                h = z(h);
                var x = ea(5);
                x = z(x);
                var e = ea(4),
                  f = z(e),
                  y = ea(16);
                y = z(y);
                var r = ea(25);
                r = z(r);
                var n = ea(24);
                n = z(n);
                var w = ea(35);
                w = z(w);
                var ba = ea(6);
                ba = z(ba);
                var aa = ea(22);
                aa = z(aa);
                var fa = ea(7);
                fa = z(fa);
                var da = ea(55);
                da = z(da);
                var ha = ea(42);
                ha = z(ha);
                ea = ea(23);
                x.default.register({
                  'blots/block': f.default,
                  'blots/block/embed': e.BlockEmbed,
                  'blots/break': y.default,
                  'blots/container': r.default,
                  'blots/cursor': n.default,
                  'blots/embed': w.default,
                  'blots/inline': ba.default,
                  'blots/scroll': aa.default,
                  'blots/text': fa.default,
                  'modules/clipboard': da.default,
                  'modules/history': ha.default,
                  'modules/keyboard': z(ea).default,
                });
                h.default.register(
                  f.default,
                  y.default,
                  n.default,
                  ba.default,
                  aa.default,
                  fa.default
                );
                ca.default = x.default;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var z = ea(1);
                h = (function () {
                  function h(e) {
                    this.domNode = e;
                    this.domNode[z.DATA_KEY] = { blot: this };
                  }
                  Object.defineProperty(h.prototype, 'statics', {
                    get: function () {
                      return this.constructor;
                    },
                    enumerable: !0,
                    configurable: !0,
                  });
                  h.create = function (e) {
                    if (null == this.tagName)
                      throw new z.ParchmentError(
                        'Blot definition missing tagName'
                      );
                    Array.isArray(this.tagName)
                      ? ('string' === typeof e &&
                          ((e = e.toUpperCase()),
                          parseInt(e).toString() === e && (e = parseInt(e))),
                        (e =
                          'number' === typeof e
                            ? document.createElement(this.tagName[e - 1])
                            : -1 < this.tagName.indexOf(e)
                            ? document.createElement(e)
                            : document.createElement(this.tagName[0])))
                      : (e = document.createElement(this.tagName));
                    this.className && e.classList.add(this.className);
                    return e;
                  };
                  h.prototype.attach = function () {
                    null != this.parent && (this.scroll = this.parent.scroll);
                  };
                  h.prototype.clone = function () {
                    var e = this.domNode.cloneNode(!1);
                    return z.create(e);
                  };
                  h.prototype.detach = function () {
                    null != this.parent && this.parent.removeChild(this);
                    delete this.domNode[z.DATA_KEY];
                  };
                  h.prototype.deleteAt = function (e, f) {
                    this.isolate(e, f).remove();
                  };
                  h.prototype.formatAt = function (e, f, h, r) {
                    e = this.isolate(e, f);
                    null != z.query(h, z.Scope.BLOT) && r
                      ? e.wrap(h, r)
                      : null != z.query(h, z.Scope.ATTRIBUTE) &&
                        ((f = z.create(this.statics.scope)),
                        e.wrap(f),
                        f.format(h, r));
                  };
                  h.prototype.insertAt = function (e, f, h) {
                    f = null == h ? z.create('text', f) : z.create(f, h);
                    e = this.split(e);
                    this.parent.insertBefore(f, e);
                  };
                  h.prototype.insertInto = function (e, f) {
                    void 0 === f && (f = null);
                    null != this.parent && this.parent.children.remove(this);
                    var h = null;
                    e.children.insertBefore(this, f);
                    null != f && (h = f.domNode);
                    (this.domNode.parentNode == e.domNode &&
                      this.domNode.nextSibling == h) ||
                      e.domNode.insertBefore(this.domNode, h);
                    this.parent = e;
                    this.attach();
                  };
                  h.prototype.isolate = function (e, f) {
                    e = this.split(e);
                    e.split(f);
                    return e;
                  };
                  h.prototype.length = function () {
                    return 1;
                  };
                  h.prototype.offset = function (e) {
                    void 0 === e && (e = this.parent);
                    return null == this.parent || this == e
                      ? 0
                      : this.parent.children.offset(this) +
                          this.parent.offset(e);
                  };
                  h.prototype.optimize = function () {
                    null != this.domNode[z.DATA_KEY] &&
                      delete this.domNode[z.DATA_KEY].mutations;
                  };
                  h.prototype.remove = function () {
                    null != this.domNode.parentNode &&
                      this.domNode.parentNode.removeChild(this.domNode);
                    this.detach();
                  };
                  h.prototype.replace = function (e) {
                    null != e.parent &&
                      (e.parent.insertBefore(this, e.next), e.remove());
                  };
                  h.prototype.replaceWith = function (e, f) {
                    e = 'string' === typeof e ? z.create(e, f) : e;
                    e.replace(this);
                    return e;
                  };
                  h.prototype.split = function (e) {
                    return 0 === e ? this : this.next;
                  };
                  h.prototype.update = function () {};
                  h.prototype.wrap = function (e, f) {
                    e = 'string' === typeof e ? z.create(e, f) : e;
                    null != this.parent &&
                      this.parent.insertBefore(e, this.next);
                    e.appendChild(this);
                    return e;
                  };
                  h.blotName = 'abstract';
                  return h;
                })();
                ca.default = h;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var z = ea(12),
                  x = ea(32),
                  e = ea(33),
                  f = ea(1);
                h = (function () {
                  function h(e) {
                    this.attributes = {};
                    this.domNode = e;
                    this.build();
                  }
                  h.prototype.attribute = function (e, f) {
                    f
                      ? e.add(this.domNode, f) &&
                        (null != e.value(this.domNode)
                          ? (this.attributes[e.attrName] = e)
                          : delete this.attributes[e.attrName])
                      : (e.remove(this.domNode),
                        delete this.attributes[e.attrName]);
                  };
                  h.prototype.build = function () {
                    var h = this;
                    this.attributes = {};
                    var n = z.default.keys(this.domNode),
                      w = x.default.keys(this.domNode),
                      y = e.default.keys(this.domNode);
                    n.concat(w)
                      .concat(y)
                      .forEach(function (e) {
                        e = f.query(e, f.Scope.ATTRIBUTE);
                        e instanceof z.default &&
                          (h.attributes[e.attrName] = e);
                      });
                  };
                  h.prototype.copy = function (e) {
                    var f = this;
                    Object.keys(this.attributes).forEach(function (h) {
                      var n = f.attributes[h].value(f.domNode);
                      e.format(h, n);
                    });
                  };
                  h.prototype.move = function (e) {
                    var f = this;
                    this.copy(e);
                    Object.keys(this.attributes).forEach(function (e) {
                      f.attributes[e].remove(f.domNode);
                    });
                    this.attributes = {};
                  };
                  h.prototype.values = function () {
                    var e = this;
                    return Object.keys(this.attributes).reduce(function (f, h) {
                      f[h] = e.attributes[h].value(e.domNode);
                      return f;
                    }, {});
                  };
                  return h;
                })();
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  return (e.getAttribute('class') || '')
                    .split(/\s+/)
                    .filter(function (e) {
                      return 0 === e.indexOf(f + '-');
                    });
                }
                var x =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, h) {
                          e.__proto__ = h;
                        }) ||
                      function (e, h) {
                        for (var f in h) h.hasOwnProperty(f) && (e[f] = h[f]);
                      };
                    return function (f, h) {
                      function r() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((r.prototype = h.prototype), new r());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (e) {
                  function f() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  x(f, e);
                  f.keys = function (e) {
                    return (e.getAttribute('class') || '')
                      .split(/\s+/)
                      .map(function (e) {
                        return e.split('-').slice(0, -1).join('-');
                      });
                  };
                  f.prototype.add = function (e, f) {
                    if (!this.canAdd(e, f)) return !1;
                    this.remove(e);
                    e.classList.add(this.keyName + '-' + f);
                    return !0;
                  };
                  f.prototype.remove = function (e) {
                    z(e, this.keyName).forEach(function (f) {
                      e.classList.remove(f);
                    });
                    0 === e.classList.length && e.removeAttribute('class');
                  };
                  f.prototype.value = function (e) {
                    var f = (z(e, this.keyName)[0] || '').slice(
                      this.keyName.length + 1
                    );
                    return this.canAdd(e, f) ? f : '';
                  };
                  return f;
                })(ea(12).default);
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  e = e.split('-');
                  var f = e
                    .slice(1)
                    .map(function (e) {
                      return e[0].toUpperCase() + e.slice(1);
                    })
                    .join('');
                  return e[0] + f;
                }
                var x =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, h) {
                          e.__proto__ = h;
                        }) ||
                      function (e, h) {
                        for (var f in h) h.hasOwnProperty(f) && (e[f] = h[f]);
                      };
                    return function (f, h) {
                      function r() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((r.prototype = h.prototype), new r());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (e) {
                  function f() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  x(f, e);
                  f.keys = function (e) {
                    return (e.getAttribute('style') || '')
                      .split(';')
                      .map(function (e) {
                        return e.split(':')[0].trim();
                      });
                  };
                  f.prototype.add = function (e, f) {
                    if (!this.canAdd(e, f)) return !1;
                    e.style[z(this.keyName)] = f;
                    return !0;
                  };
                  f.prototype.remove = function (e) {
                    e.style[z(this.keyName)] = '';
                    e.getAttribute('style') || e.removeAttribute('style');
                  };
                  f.prototype.value = function (e) {
                    var f = e.style[z(this.keyName)];
                    return this.canAdd(e, f) ? f : '';
                  };
                  return f;
                })(ea(12).default);
                ca.default = h;
              },
              function (h, ca) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var aa = (function () {
                  function h(h, e) {
                    for (var f = 0; f < e.length; f++) {
                      var x = e[f];
                      x.enumerable = x.enumerable || !1;
                      x.configurable = !0;
                      'value' in x && (x.writable = !0);
                      Object.defineProperty(h, x.key, x);
                    }
                  }
                  return function (x, e, f) {
                    e && h(x.prototype, e);
                    f && h(x, f);
                    return x;
                  };
                })();
                h = (function () {
                  function h(x, e) {
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    this.quill = x;
                    this.options = e;
                    this.modules = {};
                  }
                  aa(h, [
                    {
                      key: 'init',
                      value: function () {
                        var h = this;
                        Object.keys(this.options.modules).forEach(function (e) {
                          null == h.modules[e] && h.addModule(e);
                        });
                      },
                    },
                    {
                      key: 'addModule',
                      value: function (h) {
                        var e = this.quill.constructor.import('modules/' + h);
                        this.modules[h] = new e(
                          this.quill,
                          this.options.modules[h] || {}
                        );
                        return this.modules[h];
                      },
                    },
                  ]);
                  return h;
                })();
                h.DEFAULTS = { modules: {} };
                h.themes = { default: h };
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function x(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var e = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  f = function la(e, f, h) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return la(e, f, h);
                    } else {
                      if ('value' in r) return r.value;
                      f = r.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  },
                  y = (h = ea(0)) && h.__esModule ? h : { default: h },
                  r = (ea = ea(7)) && ea.__esModule ? ea : { default: ea };
                ea = (function (h) {
                  function w(e) {
                    if (!(this instanceof w))
                      throw new TypeError('Cannot call a class as a function');
                    var f = z(
                      this,
                      (w.__proto__ || Object.getPrototypeOf(w)).call(this, e)
                    );
                    f.contentNode = document.createElement('span');
                    f.contentNode.setAttribute('contenteditable', !1);
                    [].slice.call(f.domNode.childNodes).forEach(function (e) {
                      f.contentNode.appendChild(e);
                    });
                    f.leftGuard = document.createTextNode('\ufeff');
                    f.rightGuard = document.createTextNode('\ufeff');
                    f.domNode.appendChild(f.leftGuard);
                    f.domNode.appendChild(f.contentNode);
                    f.domNode.appendChild(f.rightGuard);
                    return f;
                  }
                  x(w, h);
                  e(w, [
                    {
                      key: 'index',
                      value: function (e, h) {
                        return e === this.leftGuard
                          ? 0
                          : e === this.rightGuard
                          ? 1
                          : f(
                              w.prototype.__proto__ ||
                                Object.getPrototypeOf(w.prototype),
                              'index',
                              this
                            ).call(this, e, h);
                      },
                    },
                    {
                      key: 'restore',
                      value: function (e) {
                        var f = void 0,
                          h = e.data.split('\ufeff').join('');
                        e === this.leftGuard
                          ? this.prev instanceof r.default
                            ? ((f = this.prev.length()),
                              this.prev.insertAt(f, h),
                              (f = {
                                startNode: this.prev.domNode,
                                startOffset: f + h.length,
                              }))
                            : ((f = document.createTextNode(h)),
                              this.parent.insertBefore(
                                y.default.create(f),
                                this
                              ),
                              (f = { startNode: f, startOffset: h.length }))
                          : e === this.rightGuard &&
                            (this.next instanceof r.default
                              ? (this.next.insertAt(0, h),
                                (f = {
                                  startNode: this.next.domNode,
                                  startOffset: h.length,
                                }))
                              : ((f = document.createTextNode(h)),
                                this.parent.insertBefore(
                                  y.default.create(f),
                                  this.next
                                ),
                                (f = { startNode: f, startOffset: h.length })));
                        e.data = '\ufeff';
                        return f;
                      },
                    },
                    {
                      key: 'update',
                      value: function (e, f) {
                        var h = this;
                        e.forEach(function (e) {
                          'characterData' !== e.type ||
                            (e.target !== h.leftGuard &&
                              e.target !== h.rightGuard) ||
                            !(e = h.restore(e.target)) ||
                            (f.range = e);
                        });
                      },
                    },
                  ]);
                  return w;
                })(y.default.Embed);
                ca.default = ea;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.AlignStyle = ca.AlignClass = ca.AlignAttribute = void 0;
                var z = (h = ea(0)) && h.__esModule ? h : { default: h };
                var x = {
                  scope: z.default.Scope.BLOCK,
                  whitelist: ['right', 'center', 'justify'],
                };
                h = new z.default.Attributor.Attribute('align', 'align', x);
                ea = new z.default.Attributor.Class('align', 'ql-align', x);
                z = new z.default.Attributor.Style('align', 'text-align', x);
                ca.AlignAttribute = h;
                ca.AlignClass = ea;
                ca.AlignStyle = z;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.BackgroundStyle = ca.BackgroundClass = void 0;
                h = (h = ea(0)) && h.__esModule ? h : { default: h };
                var z = ea(26);
                ea = new h.default.Attributor.Class('background', 'ql-bg', {
                  scope: h.default.Scope.INLINE,
                });
                h = new z.ColorAttributor('background', 'background-color', {
                  scope: h.default.Scope.INLINE,
                });
                ca.BackgroundClass = ea;
                ca.BackgroundStyle = h;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.DirectionStyle = ca.DirectionClass = ca.DirectionAttribute = void 0;
                var z = (h = ea(0)) && h.__esModule ? h : { default: h };
                var x = { scope: z.default.Scope.BLOCK, whitelist: ['rtl'] };
                h = new z.default.Attributor.Attribute('direction', 'dir', x);
                ea = new z.default.Attributor.Class(
                  'direction',
                  'ql-direction',
                  x
                );
                z = new z.default.Attributor.Style('direction', 'direction', x);
                ca.DirectionAttribute = h;
                ca.DirectionClass = ea;
                ca.DirectionStyle = z;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.FontClass = ca.FontStyle = void 0;
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  e = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                ea = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(ea(0));
                var f = {
                  scope: ea.default.Scope.INLINE,
                  whitelist: ['serif', 'monospace'],
                };
                h = new ea.default.Attributor.Class('font', 'ql-font', f);
                ea = new ((function (f) {
                  function h() {
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (h.__proto__ || Object.getPrototypeOf(h)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(h, f);
                  x(h, [
                    {
                      key: 'value',
                      value: function (f) {
                        return e(
                          h.prototype.__proto__ ||
                            Object.getPrototypeOf(h.prototype),
                          'value',
                          this
                        )
                          .call(this, f)
                          .replace(/["']/g, '');
                      },
                    },
                  ]);
                  return h;
                })(ea.default.Attributor.Style))('font', 'font-family', f);
                ca.FontStyle = ea;
                ca.FontClass = h;
              },
              function (h, ca, ea) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.SizeStyle = ca.SizeClass = void 0;
                ea = (h = ea(0)) && h.__esModule ? h : { default: h };
                h = new ea.default.Attributor.Class('size', 'ql-size', {
                  scope: ea.default.Scope.INLINE,
                  whitelist: ['small', 'large', 'huge'],
                });
                ea = new ea.default.Attributor.Style('size', 'font-size', {
                  scope: ea.default.Scope.INLINE,
                  whitelist: ['10px', '18px', '32px'],
                });
                ca.SizeClass = h;
                ca.SizeStyle = ea;
              },
              function (h, ca, ea) {
                h.exports = {
                  align: {
                    '': ea(76),
                    center: ea(77),
                    right: ea(78),
                    justify: ea(79),
                  },
                  background: ea(80),
                  blockquote: ea(81),
                  bold: ea(82),
                  clean: ea(83),
                  code: ea(58),
                  'code-block': ea(58),
                  color: ea(84),
                  direction: { '': ea(85), rtl: ea(86) },
                  float: {
                    center: ea(87),
                    full: ea(88),
                    left: ea(89),
                    right: ea(90),
                  },
                  formula: ea(91),
                  header: { 1: ea(92), 2: ea(93) },
                  italic: ea(94),
                  image: ea(95),
                  indent: { '+1': ea(96), '-1': ea(97) },
                  link: ea(98),
                  list: { ordered: ea(99), bullet: ea(100), check: ea(101) },
                  script: { sub: ea(102), super: ea(103) },
                  strike: ea(104),
                  underline: ea(105),
                  video: ea(106),
                };
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function e(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function f(e) {
                  e = e.ops[e.ops.length - 1];
                  return null == e
                    ? !1
                    : null != e.insert
                    ? 'string' === typeof e.insert && e.insert.endsWith('\n')
                    : null != e.attributes
                    ? Object.keys(e.attributes).some(function (e) {
                        return (
                          null != n.default.query(e, n.default.Scope.BLOCK)
                        );
                      })
                    : !1;
                }
                function y(e) {
                  var h = e.reduce(function (e, f) {
                    return (e += f.delete || 0);
                  }, 0);
                  h = e.length() - h;
                  f(e) && --h;
                  return h;
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.getLastChangeIndex = ca.default = void 0;
                var r = (function () {
                  function e(e, f) {
                    for (var h = 0; h < f.length; h++) {
                      var n = f[h];
                      n.enumerable = n.enumerable || !1;
                      n.configurable = !0;
                      'value' in n && (n.writable = !0);
                      Object.defineProperty(e, n.key, n);
                    }
                  }
                  return function (f, h, n) {
                    h && e(f.prototype, h);
                    n && e(f, n);
                    return f;
                  };
                })();
                h = ea(0);
                var n = z(h);
                h = ea(5);
                var w = z(h);
                ea = ea(9);
                ea = (function (f) {
                  function h(e, f) {
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    var n = x(
                      this,
                      (h.__proto__ || Object.getPrototypeOf(h)).call(this, e, f)
                    );
                    n.lastRecorded = 0;
                    n.ignoreChange = !1;
                    n.clear();
                    n.quill.on(
                      w.default.events.EDITOR_CHANGE,
                      function (e, f, h, r) {
                        e !== w.default.events.TEXT_CHANGE ||
                          n.ignoreChange ||
                          (n.options.userOnly && r !== w.default.sources.USER
                            ? n.transform(f)
                            : n.record(f, h));
                      }
                    );
                    n.quill.keyboard.addBinding(
                      { key: 'Z', shortKey: !0 },
                      n.undo.bind(n)
                    );
                    n.quill.keyboard.addBinding(
                      { key: 'Z', shortKey: !0, shiftKey: !0 },
                      n.redo.bind(n)
                    );
                    /Win/i.test(navigator.platform) &&
                      n.quill.keyboard.addBinding(
                        { key: 'Y', shortKey: !0 },
                        n.redo.bind(n)
                      );
                    return n;
                  }
                  e(h, f);
                  r(h, [
                    {
                      key: 'change',
                      value: function (e, f) {
                        if (0 !== this.stack[e].length) {
                          var h = this.stack[e].pop();
                          this.stack[f].push(h);
                          this.lastRecorded = 0;
                          this.ignoreChange = !0;
                          this.quill.updateContents(
                            h[e],
                            w.default.sources.USER
                          );
                          this.ignoreChange = !1;
                          e = y(h[e]);
                          this.quill.setSelection(e);
                        }
                      },
                    },
                    {
                      key: 'clear',
                      value: function () {
                        this.stack = { undo: [], redo: [] };
                      },
                    },
                    {
                      key: 'cutoff',
                      value: function () {
                        this.lastRecorded = 0;
                      },
                    },
                    {
                      key: 'record',
                      value: function (e, f) {
                        if (0 !== e.ops.length) {
                          this.stack.redo = [];
                          f = this.quill.getContents().diff(f);
                          var h = Date.now();
                          this.lastRecorded + this.options.delay > h &&
                          0 < this.stack.undo.length
                            ? ((h = this.stack.undo.pop()),
                              (f = f.compose(h.undo)),
                              (e = h.redo.compose(e)))
                            : (this.lastRecorded = h);
                          this.stack.undo.push({ redo: e, undo: f });
                          this.stack.undo.length > this.options.maxStack &&
                            this.stack.undo.shift();
                        }
                      },
                    },
                    {
                      key: 'redo',
                      value: function () {
                        this.change('redo', 'undo');
                      },
                    },
                    {
                      key: 'transform',
                      value: function (e) {
                        this.stack.undo.forEach(function (f) {
                          f.undo = e.transform(f.undo, !0);
                          f.redo = e.transform(f.redo, !0);
                        });
                        this.stack.redo.forEach(function (f) {
                          f.undo = e.transform(f.undo, !0);
                          f.redo = e.transform(f.redo, !0);
                        });
                      },
                    },
                    {
                      key: 'undo',
                      value: function () {
                        this.change('undo', 'redo');
                      },
                    },
                  ]);
                  return h;
                })(z(ea).default);
                ea.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
                ca.default = ea;
                ca.getLastChangeIndex = y;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function y(e, f) {
                  var h =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : !1;
                  f.forEach(function (f) {
                    var n = document.createElement('option');
                    f === h
                      ? n.setAttribute('selected', 'selected')
                      : n.setAttribute('value', f);
                    e.appendChild(n);
                  });
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.BaseTooltip = void 0;
                var r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  n = function pa(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return pa(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(3);
                h = z(h);
                var w = ea(2),
                  ba = z(w);
                w = ea(8);
                var aa = z(w);
                w = ea(23);
                var da = z(w);
                w = ea(34);
                w = z(w);
                var fa = ea(59),
                  ha = z(fa);
                fa = ea(60);
                var ka = z(fa);
                fa = ea(28);
                var ja = z(fa);
                ea = ea(61);
                fa = z(ea);
                var ya = [!1, 'center', 'right', 'justify'],
                  ma = '#000000 #e60000 #ff9900 #ffff00 #008a00 #0066cc #9933ff #ffffff #facccc #ffebcc #ffffcc #cce8cc #cce0f5 #ebd6ff #bbbbbb #f06666 #ffc266 #ffff66 #66b966 #66a3e0 #c285ff #888888 #a10000 #b26b00 #b2b200 #006100 #0047b2 #6b24b2 #444444 #5c0000 #663d00 #666600 #003700 #002966 #3d1466'.split(
                    ' '
                  ),
                  sa = [!1, 'serif', 'monospace'],
                  Ba = ['1', '2', '3', !1],
                  va = ['small', !1, 'large', 'huge'];
                ea = (function (h) {
                  function w(f, h) {
                    x(this, w);
                    var n = e(
                      this,
                      (w.__proto__ || Object.getPrototypeOf(w)).call(this, f, h)
                    );
                    f.emitter.listenDOM('click', document.body, function Ea(e) {
                      if (!document.body.contains(f.root))
                        return document.body.removeEventListener('click', Ea);
                      null == n.tooltip ||
                        n.tooltip.root.contains(e.target) ||
                        document.activeElement === n.tooltip.textbox ||
                        n.quill.hasFocus() ||
                        n.tooltip.hide();
                      null != n.pickers &&
                        n.pickers.forEach(function (f) {
                          f.container.contains(e.target) || f.close();
                        });
                    });
                    return n;
                  }
                  f(w, h);
                  r(w, [
                    {
                      key: 'addModule',
                      value: function (e) {
                        var f = n(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'addModule',
                          this
                        ).call(this, e);
                        'toolbar' === e && this.extendToolbar(f);
                        return f;
                      },
                    },
                    {
                      key: 'buildButtons',
                      value: function (e, f) {
                        e.forEach(function (e) {
                          (e.getAttribute('class') || '')
                            .split(/\s+/)
                            .forEach(function (h) {
                              if (
                                h.startsWith('ql-') &&
                                ((h = h.slice(3)), null != f[h])
                              )
                                if ('direction' === h)
                                  e.innerHTML = f[h][''] + f[h].rtl;
                                else if ('string' === typeof f[h])
                                  e.innerHTML = f[h];
                                else {
                                  var n = e.value || '';
                                  null != n &&
                                    f[h][n] &&
                                    (e.innerHTML = f[h][n]);
                                }
                            });
                        });
                      },
                    },
                    {
                      key: 'buildPickers',
                      value: function (e, f) {
                        var h = this;
                        this.pickers = e.map(function (e) {
                          if (e.classList.contains('ql-align'))
                            return (
                              null == e.querySelector('option') && y(e, ya),
                              new ka.default(e, f.align)
                            );
                          if (
                            e.classList.contains('ql-background') ||
                            e.classList.contains('ql-color')
                          ) {
                            var h = e.classList.contains('ql-background')
                              ? 'background'
                              : 'color';
                            null == e.querySelector('option') &&
                              y(
                                e,
                                ma,
                                'background' === h ? '#ffffff' : '#000000'
                              );
                            return new ha.default(e, f[h]);
                          }
                          null == e.querySelector('option') &&
                            (e.classList.contains('ql-font')
                              ? y(e, sa)
                              : e.classList.contains('ql-header')
                              ? y(e, Ba)
                              : e.classList.contains('ql-size') && y(e, va));
                          return new ja.default(e);
                        });
                        this.quill.on(
                          aa.default.events.EDITOR_CHANGE,
                          function () {
                            h.pickers.forEach(function (e) {
                              e.update();
                            });
                          }
                        );
                      },
                    },
                  ]);
                  return w;
                })(w.default);
                ea.DEFAULTS = (0, h.default)(!0, {}, w.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        formula: function () {
                          this.quill.theme.tooltip.edit('formula');
                        },
                        image: function () {
                          var e = this,
                            f = this.container.querySelector(
                              'input.ql-image[type=file]'
                            );
                          null == f &&
                            ((f = document.createElement('input')),
                            f.setAttribute('type', 'file'),
                            f.setAttribute(
                              'accept',
                              'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
                            ),
                            f.classList.add('ql-image'),
                            f.addEventListener('change', function () {
                              if (null != f.files && null != f.files[0]) {
                                var h = new FileReader();
                                h.onload = function (h) {
                                  var n = e.quill.getSelection(!0);
                                  e.quill.updateContents(
                                    new ba.default()
                                      .retain(n.index)
                                      .delete(n.length)
                                      .insert({ image: h.target.result }),
                                    aa.default.sources.USER
                                  );
                                  e.quill.setSelection(
                                    n.index + 1,
                                    aa.default.sources.SILENT
                                  );
                                  f.value = '';
                                };
                                h.readAsDataURL(f.files[0]);
                              }
                            }),
                            this.container.appendChild(f));
                          f.click();
                        },
                        video: function () {
                          this.quill.theme.tooltip.edit('video');
                        },
                      },
                    },
                  },
                });
                h = (function (h) {
                  function n(f, h) {
                    x(this, n);
                    f = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, f, h)
                    );
                    f.textbox = f.root.querySelector('input[type="text"]');
                    f.listen();
                    return f;
                  }
                  f(n, h);
                  r(n, [
                    {
                      key: 'listen',
                      value: function () {
                        var e = this;
                        this.textbox.addEventListener('keydown', function (f) {
                          da.default.match(f, 'enter')
                            ? (e.save(), f.preventDefault())
                            : da.default.match(f, 'escape') &&
                              (e.cancel(), f.preventDefault());
                        });
                      },
                    },
                    {
                      key: 'cancel',
                      value: function () {
                        this.hide();
                      },
                    },
                    {
                      key: 'edit',
                      value: function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : 'link',
                          f =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                        this.root.classList.remove('ql-hidden');
                        this.root.classList.add('ql-editing');
                        null != f
                          ? (this.textbox.value = f)
                          : e !== this.root.getAttribute('data-mode') &&
                            (this.textbox.value = '');
                        this.position(
                          this.quill.getBounds(this.quill.selection.savedRange)
                        );
                        this.textbox.select();
                        this.textbox.setAttribute(
                          'placeholder',
                          this.textbox.getAttribute('data-' + e) || ''
                        );
                        this.root.setAttribute('data-mode', e);
                      },
                    },
                    {
                      key: 'restoreFocus',
                      value: function () {
                        var e = this.quill.scrollingContainer.scrollTop;
                        this.quill.focus();
                        this.quill.scrollingContainer.scrollTop = e;
                      },
                    },
                    {
                      key: 'save',
                      value: function () {
                        var e = this.textbox.value;
                        switch (this.root.getAttribute('data-mode')) {
                          case 'link':
                            var f = this.quill.root.scrollTop;
                            this.linkRange
                              ? (this.quill.formatText(
                                  this.linkRange,
                                  'link',
                                  e,
                                  aa.default.sources.USER
                                ),
                                delete this.linkRange)
                              : (this.restoreFocus(),
                                this.quill.format(
                                  'link',
                                  e,
                                  aa.default.sources.USER
                                ));
                            this.quill.root.scrollTop = f;
                            break;
                          case 'video':
                            e = (f =
                              e.match(
                                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                              ) ||
                              e.match(
                                /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                              ))
                              ? (f[1] || 'https') +
                                '://www.youtube.com/embed/' +
                                f[2] +
                                '?showinfo=0'
                              : (f = e.match(
                                  /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                                ))
                              ? (f[1] || 'https') +
                                '://player.vimeo.com/video/' +
                                f[2] +
                                '/'
                              : e;
                          case 'formula':
                            e &&
                              ((f = this.quill.getSelection(!0)),
                              null != f &&
                                ((f = f.index + f.length),
                                this.quill.insertEmbed(
                                  f,
                                  this.root.getAttribute('data-mode'),
                                  e,
                                  aa.default.sources.USER
                                ),
                                'formula' ===
                                  this.root.getAttribute('data-mode') &&
                                  this.quill.insertText(
                                    f + 1,
                                    ' ',
                                    aa.default.sources.USER
                                  ),
                                this.quill.setSelection(
                                  f + 2,
                                  aa.default.sources.USER
                                )));
                        }
                        this.textbox.value = '';
                        this.hide();
                      },
                    },
                  ]);
                  return n;
                })(fa.default);
                ca.BaseTooltip = h;
                ca.default = ea;
              },
              function (h, ca) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function () {
                  function h() {
                    this.head = this.tail = null;
                    this.length = 0;
                  }
                  h.prototype.append = function () {
                    for (var h = [], x = 0; x < arguments.length; x++)
                      h[x] = arguments[x];
                    this.insertBefore(h[0], null);
                    1 < h.length && this.append.apply(this, h.slice(1));
                  };
                  h.prototype.contains = function (h) {
                    for (var x, e = this.iterator(); (x = e()); )
                      if (x === h) return !0;
                    return !1;
                  };
                  h.prototype.insertBefore = function (h, x) {
                    h &&
                      ((h.next = x),
                      null != x
                        ? ((h.prev = x.prev),
                          null != x.prev && (x.prev.next = h),
                          (x.prev = h),
                          x === this.head && (this.head = h))
                        : null != this.tail
                        ? ((this.tail.next = h),
                          (h.prev = this.tail),
                          (this.tail = h))
                        : ((h.prev = null), (this.head = this.tail = h)),
                      (this.length += 1));
                  };
                  h.prototype.offset = function (h) {
                    for (var x = 0, e = this.head; null != e; ) {
                      if (e === h) return x;
                      x += e.length();
                      e = e.next;
                    }
                    return -1;
                  };
                  h.prototype.remove = function (h) {
                    this.contains(h) &&
                      (null != h.prev && (h.prev.next = h.next),
                      null != h.next && (h.next.prev = h.prev),
                      h === this.head && (this.head = h.next),
                      h === this.tail && (this.tail = h.prev),
                      --this.length);
                  };
                  h.prototype.iterator = function (h) {
                    void 0 === h && (h = this.head);
                    return function () {
                      var x = h;
                      null != h && (h = h.next);
                      return x;
                    };
                  };
                  h.prototype.find = function (h, x) {
                    void 0 === x && (x = !1);
                    for (var e, f = this.iterator(); (e = f()); ) {
                      var y = e.length();
                      if (
                        h < y ||
                        (x &&
                          h === y &&
                          (null == e.next || 0 !== e.next.length()))
                      )
                        return [e, h];
                      h -= y;
                    }
                    return [null, 0];
                  };
                  h.prototype.forEach = function (h) {
                    for (var x, e = this.iterator(); (x = e()); ) h(x);
                  };
                  h.prototype.forEachAt = function (h, x, e) {
                    if (!(0 >= x))
                      for (
                        var f = this.find(h),
                          y = h - f[1],
                          r = this.iterator(f[0]);
                        (f = r()) && y < h + x;

                      ) {
                        var n = f.length();
                        h > y
                          ? e(f, h - y, Math.min(x, y + n - h))
                          : e(f, 0, Math.min(n, h + x - y));
                        y += n;
                      }
                  };
                  h.prototype.map = function (h) {
                    return this.reduce(function (x, e) {
                      x.push(h(e));
                      return x;
                    }, []);
                  };
                  h.prototype.reduce = function (h, x) {
                    for (var e, f = this.iterator(); (e = f()); ) x = h(x, e);
                    return x;
                  };
                  return h;
                })();
                ca.default = h;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (f, h) {
                      function n() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((n.prototype = h.prototype), new n());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = ea(17),
                  e = ea(1),
                  f = {
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0,
                  };
                h = (function (h) {
                  function r(e) {
                    var n = h.call(this, e) || this;
                    n.scroll = n;
                    n.observer = new MutationObserver(function (e) {
                      n.update(e);
                    });
                    n.observer.observe(n.domNode, f);
                    n.attach();
                    return n;
                  }
                  z(r, h);
                  r.prototype.detach = function () {
                    h.prototype.detach.call(this);
                    this.observer.disconnect();
                  };
                  r.prototype.deleteAt = function (e, f) {
                    this.update();
                    0 === e && f === this.length()
                      ? this.children.forEach(function (e) {
                          e.remove();
                        })
                      : h.prototype.deleteAt.call(this, e, f);
                  };
                  r.prototype.formatAt = function (e, f, r, x) {
                    this.update();
                    h.prototype.formatAt.call(this, e, f, r, x);
                  };
                  r.prototype.insertAt = function (e, f, r) {
                    this.update();
                    h.prototype.insertAt.call(this, e, f, r);
                  };
                  r.prototype.optimize = function (f, r) {
                    function n(f) {
                      null != f.domNode[e.DATA_KEY] &&
                        null != f.domNode[e.DATA_KEY].mutations &&
                        (f instanceof x.default && f.children.forEach(n),
                        f.optimize(r));
                    }
                    function w(f, h) {
                      void 0 === h && (h = !0);
                      null != f &&
                        f !== y &&
                        null != f.domNode.parentNode &&
                        (null == f.domNode[e.DATA_KEY].mutations &&
                          (f.domNode[e.DATA_KEY].mutations = []),
                        h && w(f.parent));
                    }
                    var y = this;
                    void 0 === f && (f = []);
                    void 0 === r && (r = {});
                    h.prototype.optimize.call(this, r);
                    for (
                      var z = [].slice.call(this.observer.takeRecords());
                      0 < z.length;

                    )
                      f.push(z.pop());
                    for (var aa = f, ca = 0; 0 < aa.length; ca += 1) {
                      if (100 <= ca)
                        throw Error(
                          '[Parchment] Maximum optimize iterations reached'
                        );
                      aa.forEach(function (f) {
                        var h = e.find(f.target, !0);
                        null != h &&
                          (h.domNode === f.target &&
                            ('childList' === f.type
                              ? (w(e.find(f.previousSibling, !1)),
                                [].forEach.call(f.addedNodes, function (f) {
                                  f = e.find(f, !1);
                                  w(f, !1);
                                  f instanceof x.default &&
                                    f.children.forEach(function (e) {
                                      w(e, !1);
                                    });
                                }))
                              : 'attributes' === f.type && w(h.prev)),
                          w(h));
                      });
                      this.children.forEach(n);
                      aa = [].slice.call(this.observer.takeRecords());
                      for (z = aa.slice(); 0 < z.length; ) f.push(z.pop());
                    }
                  };
                  r.prototype.update = function (f, r) {
                    var n = this;
                    void 0 === r && (r = {});
                    f = f || this.observer.takeRecords();
                    f.map(function (f) {
                      var h = e.find(f.target, !0);
                      if (null == h) return null;
                      if (null == h.domNode[e.DATA_KEY].mutations)
                        return (h.domNode[e.DATA_KEY].mutations = [f]), h;
                      h.domNode[e.DATA_KEY].mutations.push(f);
                      return null;
                    }).forEach(function (f) {
                      null != f &&
                        f !== n &&
                        null != f.domNode[e.DATA_KEY] &&
                        f.update(f.domNode[e.DATA_KEY].mutations || [], r);
                    });
                    null != this.domNode[e.DATA_KEY].mutations &&
                      h.prototype.update.call(
                        this,
                        this.domNode[e.DATA_KEY].mutations,
                        r
                      );
                    this.optimize(f, r);
                  };
                  r.blotName = 'scroll';
                  r.defaultChild = 'block';
                  r.scope = e.Scope.BLOCK_BLOT;
                  r.tagName = 'DIV';
                  return r;
                })(x.default);
                ca.default = h;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (f, h) {
                      function n() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((n.prototype = h.prototype), new n());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = ea(18),
                  e = ea(1);
                h = (function (f) {
                  function h() {
                    return (null !== f && f.apply(this, arguments)) || this;
                  }
                  z(h, f);
                  h.formats = function (e) {
                    if (e.tagName !== h.tagName) return f.formats.call(this, e);
                  };
                  h.prototype.format = function (e, n) {
                    var r = this;
                    e !== this.statics.blotName || n
                      ? f.prototype.format.call(this, e, n)
                      : (this.children.forEach(function (e) {
                          e instanceof x.default ||
                            (e = e.wrap(h.blotName, !0));
                          r.attributes.copy(e);
                        }),
                        this.unwrap());
                  };
                  h.prototype.formatAt = function (h, n, w, x) {
                    null != this.formats()[w] || e.query(w, e.Scope.ATTRIBUTE)
                      ? this.isolate(h, n).format(w, x)
                      : f.prototype.formatAt.call(this, h, n, w, x);
                  };
                  h.prototype.optimize = function (e) {
                    f.prototype.optimize.call(this, e);
                    e = this.formats();
                    if (0 === Object.keys(e).length) return this.unwrap();
                    var n = this.next,
                      r;
                    if ((r = n instanceof h && n.prev === this))
                      a: if (
                        ((r = n.formats()),
                        Object.keys(e).length !== Object.keys(r).length)
                      )
                        r = !1;
                      else {
                        for (var x in e)
                          if (e[x] !== r[x]) {
                            r = !1;
                            break a;
                          }
                        r = !0;
                      }
                    r && (n.moveChildren(this), n.remove());
                  };
                  h.blotName = 'inline';
                  h.scope = e.Scope.INLINE_BLOT;
                  h.tagName = 'SPAN';
                  return h;
                })(x.default);
                ca.default = h;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, h) {
                          e.__proto__ = h;
                        }) ||
                      function (e, h) {
                        for (var f in h) h.hasOwnProperty(f) && (e[f] = h[f]);
                      };
                    return function (f, h) {
                      function r() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((r.prototype = h.prototype), new r());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(18);
                var x = ea(1);
                ea = (function (e) {
                  function f() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  z(f, e);
                  f.formats = function (h) {
                    var r = x.query(f.blotName).tagName;
                    if (h.tagName !== r) return e.formats.call(this, h);
                  };
                  f.prototype.format = function (h, r) {
                    null != x.query(h, x.Scope.BLOCK) &&
                      (h !== this.statics.blotName || r
                        ? e.prototype.format.call(this, h, r)
                        : this.replaceWith(f.blotName));
                  };
                  f.prototype.formatAt = function (f, h, n, w) {
                    null != x.query(n, x.Scope.BLOCK)
                      ? this.format(n, w)
                      : e.prototype.formatAt.call(this, f, h, n, w);
                  };
                  f.prototype.insertAt = function (f, h, n) {
                    null == n || null != x.query(h, x.Scope.INLINE)
                      ? e.prototype.insertAt.call(this, f, h, n)
                      : ((f = this.split(f)),
                        (h = x.create(h, n)),
                        f.parent.insertBefore(h, f));
                  };
                  f.prototype.update = function (f, h) {
                    navigator.userAgent.match(/Trident/)
                      ? this.build()
                      : e.prototype.update.call(this, f, h);
                  };
                  f.blotName = 'block';
                  f.scope = x.Scope.BLOCK_BLOT;
                  f.tagName = 'P';
                  return f;
                })(h.default);
                ca.default = ea;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var h =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, f) {
                          e.__proto__ = f;
                        }) ||
                      function (e, f) {
                        for (var h in f) f.hasOwnProperty(h) && (e[h] = f[h]);
                      };
                    return function (e, f) {
                      function x() {
                        this.constructor = e;
                      }
                      h(e, f);
                      e.prototype =
                        null === f
                          ? Object.create(f)
                          : ((x.prototype = f.prototype), new x());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    return (null !== h && h.apply(this, arguments)) || this;
                  }
                  z(e, h);
                  e.formats = function () {};
                  e.prototype.format = function (e, x) {
                    h.prototype.formatAt.call(this, 0, this.length(), e, x);
                  };
                  e.prototype.formatAt = function (e, x, r, n) {
                    0 === e && x === this.length()
                      ? this.format(r, n)
                      : h.prototype.formatAt.call(this, e, x, r, n);
                  };
                  e.prototype.formats = function () {
                    return this.statics.formats(this.domNode);
                  };
                  return e;
                })(ea(19).default);
                ca.default = h;
              },
              function (h, ca, ea) {
                var z =
                  (this && this.__extends) ||
                  (function () {
                    var e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, h) {
                          e.__proto__ = h;
                        }) ||
                      function (e, h) {
                        for (var f in h) h.hasOwnProperty(f) && (e[f] = h[f]);
                      };
                    return function (f, h) {
                      function r() {
                        this.constructor = f;
                      }
                      e(f, h);
                      f.prototype =
                        null === h
                          ? Object.create(h)
                          : ((r.prototype = h.prototype), new r());
                    };
                  })();
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(19);
                var x = ea(1);
                ea = (function (e) {
                  function f(f) {
                    f = e.call(this, f) || this;
                    f.text = f.statics.value(f.domNode);
                    return f;
                  }
                  z(f, e);
                  f.create = function (e) {
                    return document.createTextNode(e);
                  };
                  f.value = function (e) {
                    e = e.data;
                    e.normalize && (e = e.normalize());
                    return e;
                  };
                  f.prototype.deleteAt = function (e, f) {
                    this.domNode.data = this.text =
                      this.text.slice(0, e) + this.text.slice(e + f);
                  };
                  f.prototype.index = function (e, f) {
                    return this.domNode === e ? f : -1;
                  };
                  f.prototype.insertAt = function (f, h, n) {
                    null == n
                      ? ((this.text =
                          this.text.slice(0, f) + h + this.text.slice(f)),
                        (this.domNode.data = this.text))
                      : e.prototype.insertAt.call(this, f, h, n);
                  };
                  f.prototype.length = function () {
                    return this.text.length;
                  };
                  f.prototype.optimize = function (h) {
                    e.prototype.optimize.call(this, h);
                    this.text = this.statics.value(this.domNode);
                    0 === this.text.length
                      ? this.remove()
                      : this.next instanceof f &&
                        this.next.prev === this &&
                        (this.insertAt(this.length(), this.next.value()),
                        this.next.remove());
                  };
                  f.prototype.position = function (e) {
                    return [this.domNode, e];
                  };
                  f.prototype.split = function (e, f) {
                    void 0 === f && (f = !1);
                    if (!f) {
                      if (0 === e) return this;
                      if (e === this.length()) return this.next;
                    }
                    e = x.create(this.domNode.splitText(e));
                    this.parent.insertBefore(e, this.next);
                    this.text = this.statics.value(this.domNode);
                    return e;
                  };
                  f.prototype.update = function (e) {
                    var f = this;
                    e.some(function (e) {
                      return (
                        'characterData' === e.type && e.target === f.domNode
                      );
                    }) && (this.text = this.statics.value(this.domNode));
                  };
                  f.prototype.value = function () {
                    return this.text;
                  };
                  f.blotName = 'text';
                  f.scope = x.Scope.INLINE_BLOT;
                  return f;
                })(h.default);
                ca.default = ea;
              },
              function () {
                var h = document.createElement('div');
                h.classList.toggle('test-class', !1);
                if (h.classList.contains('test-class')) {
                  var ca = DOMTokenList.prototype.toggle;
                  DOMTokenList.prototype.toggle = function (h, z) {
                    return 1 < arguments.length && !this.contains(h) === !z
                      ? z
                      : ca.call(this, h);
                  };
                }
                String.prototype.startsWith ||
                  (String.prototype.startsWith = function (h, z) {
                    return this.substr(z || 0, h.length) === h;
                  });
                String.prototype.endsWith ||
                  (String.prototype.endsWith = function (h, z) {
                    var x = this.toString();
                    if (
                      'number' !== typeof z ||
                      !isFinite(z) ||
                      Math.floor(z) !== z ||
                      z > x.length
                    )
                      z = x.length;
                    z -= h.length;
                    h = x.indexOf(h, z);
                    return -1 !== h && h === z;
                  });
                Array.prototype.find ||
                  Object.defineProperty(Array.prototype, 'find', {
                    value: function (h, z) {
                      if (null === this)
                        throw new TypeError(
                          'Array.prototype.find called on null or undefined'
                        );
                      if ('function' !== typeof h)
                        throw new TypeError('predicate must be a function');
                      for (
                        var x = Object(this), e = x.length >>> 0, f, y = 0;
                        y < e;
                        y++
                      )
                        if (((f = x[y]), h.call(z, f, y, x))) return f;
                    },
                  });
                document.addEventListener('DOMContentLoaded', function () {
                  document.execCommand('enableObjectResizing', !1, !1);
                  document.execCommand('autoUrlDetect', !1, !1);
                });
              },
              function (h) {
                function aa(f, h, w) {
                  if (f == h) return f ? [[0, f]] : [];
                  if (0 > w || f.length < w) w = null;
                  var z = x(f, h),
                    ba = f.substring(0, z);
                  f = f.substring(z);
                  h = h.substring(z);
                  z = e(f, h);
                  var aa = f.substring(f.length - z);
                  f = f.substring(0, f.length - z);
                  h = h.substring(0, h.length - z);
                  f = ca(f, h);
                  ba && f.unshift([0, ba]);
                  aa && f.push([0, aa]);
                  y(f);
                  null != w && (f = r(f, w));
                  return (f = n(f));
                }
                function ca(e, h) {
                  if (!e) return [[1, h]];
                  if (!h) return [[-1, e]];
                  var n = e.length > h.length ? e : h;
                  var r = e.length > h.length ? h : e,
                    w = n.indexOf(r);
                  if (-1 != w)
                    return (
                      (n = [
                        [1, n.substring(0, w)],
                        [0, r],
                        [1, n.substring(w + r.length)],
                      ]),
                      e.length > h.length && (n[0][0] = n[2][0] = -1),
                      n
                    );
                  if (1 == r.length)
                    return [
                      [-1, e],
                      [1, h],
                    ];
                  if ((n = f(e, h)))
                    return (
                      (h = n[1]),
                      (r = n[3]),
                      (e = n[4]),
                      (n = aa(n[0], n[2])),
                      (h = aa(h, r)),
                      n.concat([[0, e]], h)
                    );
                  a: {
                    n = e.length;
                    r = h.length;
                    w = Math.ceil((n + r) / 2);
                    for (
                      var x = 2 * w, y = Array(x), ba = Array(x), ca = 0;
                      ca < x;
                      ca++
                    )
                      (y[ca] = -1), (ba[ca] = -1);
                    y[w + 1] = 0;
                    ba[w + 1] = 0;
                    ca = n - r;
                    for (
                      var ea = 0 != ca % 2,
                        da = 0,
                        fa = 0,
                        ia = 0,
                        ha = 0,
                        ta = 0;
                      ta < w;
                      ta++
                    ) {
                      for (var za = -ta + da; za <= ta - fa; za += 2) {
                        var pa = w + za;
                        var Fa =
                          za == -ta || (za != ta && y[pa - 1] < y[pa + 1])
                            ? y[pa + 1]
                            : y[pa - 1] + 1;
                        for (
                          var Ca = Fa - za;
                          Fa < n && Ca < r && e.charAt(Fa) == h.charAt(Ca);

                        )
                          Fa++, Ca++;
                        y[pa] = Fa;
                        if (Fa > n) fa += 2;
                        else if (Ca > r) da += 2;
                        else if (
                          ea &&
                          ((pa = w + ca - za),
                          0 <= pa && pa < x && -1 != ba[pa])
                        ) {
                          var Aa = n - ba[pa];
                          if (Fa >= Aa) {
                            e = z(e, h, Fa, Ca);
                            break a;
                          }
                        }
                      }
                      for (za = -ta + ia; za <= ta - ha; za += 2) {
                        pa = w + za;
                        Aa =
                          za == -ta || (za != ta && ba[pa - 1] < ba[pa + 1])
                            ? ba[pa + 1]
                            : ba[pa - 1] + 1;
                        for (
                          Fa = Aa - za;
                          Aa < n &&
                          Fa < r &&
                          e.charAt(n - Aa - 1) == h.charAt(r - Fa - 1);

                        )
                          Aa++, Fa++;
                        ba[pa] = Aa;
                        if (Aa > n) ha += 2;
                        else if (Fa > r) ia += 2;
                        else if (
                          !ea &&
                          ((pa = w + ca - za),
                          0 <= pa &&
                            pa < x &&
                            -1 != y[pa] &&
                            ((Fa = y[pa]),
                            (Ca = w + Fa - pa),
                            (Aa = n - Aa),
                            Fa >= Aa))
                        ) {
                          e = z(e, h, Fa, Ca);
                          break a;
                        }
                      }
                    }
                    e = [
                      [-1, e],
                      [1, h],
                    ];
                  }
                  return e;
                }
                function z(e, f, h, n) {
                  var r = e.substring(h),
                    w = f.substring(n);
                  e = aa(e.substring(0, h), f.substring(0, n));
                  r = aa(r, w);
                  return e.concat(r);
                }
                function x(e, f) {
                  if (!e || !f || e.charAt(0) != f.charAt(0)) return 0;
                  for (
                    var h = 0, n = Math.min(e.length, f.length), r = n, w = 0;
                    h < r;

                  )
                    e.substring(w, r) == f.substring(w, r)
                      ? (w = h = r)
                      : (n = r),
                      (r = Math.floor((n - h) / 2 + h));
                  return r;
                }
                function e(e, f) {
                  if (
                    !e ||
                    !f ||
                    e.charAt(e.length - 1) != f.charAt(f.length - 1)
                  )
                    return 0;
                  for (
                    var h = 0, n = Math.min(e.length, f.length), r = n, w = 0;
                    h < r;

                  )
                    e.substring(e.length - r, e.length - w) ==
                    f.substring(f.length - r, f.length - w)
                      ? (w = h = r)
                      : (n = r),
                      (r = Math.floor((n - h) / 2 + h));
                  return r;
                }
                function f(f, h) {
                  function n(f, h, n) {
                    for (
                      var r = f.substring(n, n + Math.floor(f.length / 4)),
                        w = -1,
                        y = '',
                        z,
                        ba,
                        aa,
                        ca;
                      -1 != (w = h.indexOf(r, w + 1));

                    ) {
                      var ea = x(f.substring(n), h.substring(w)),
                        da = e(f.substring(0, n), h.substring(0, w));
                      y.length < da + ea &&
                        ((y = h.substring(w - da, w) + h.substring(w, w + ea)),
                        (z = f.substring(0, n - da)),
                        (ba = f.substring(n + ea)),
                        (aa = h.substring(0, w - da)),
                        (ca = h.substring(w + ea)));
                    }
                    return 2 * y.length >= f.length ? [z, ba, aa, ca, y] : null;
                  }
                  var r = f.length > h.length ? f : h,
                    w = f.length > h.length ? h : f;
                  if (4 > r.length || 2 * w.length < r.length) return null;
                  var y = n(r, w, Math.ceil(r.length / 4));
                  r = n(r, w, Math.ceil(r.length / 2));
                  if (y || r)
                    y = r ? (y ? (y[4].length > r[4].length ? y : r) : r) : y;
                  else return null;
                  f.length > h.length
                    ? ((f = y[0]), (h = y[1]), (r = y[2]), (w = y[3]))
                    : ((r = y[0]), (w = y[1]), (f = y[2]), (h = y[3]));
                  return [f, h, r, w, y[4]];
                }
                function y(f) {
                  f.push([0, '']);
                  for (
                    var h = 0, n = 0, r = 0, w = '', z = '', ba;
                    h < f.length;

                  )
                    switch (f[h][0]) {
                      case 1:
                        r++;
                        z += f[h][1];
                        h++;
                        break;
                      case -1:
                        n++;
                        w += f[h][1];
                        h++;
                        break;
                      case 0:
                        1 < n + r
                          ? (0 !== n &&
                              0 !== r &&
                              ((ba = x(z, w)),
                              0 !== ba &&
                                (0 < h - n - r && 0 == f[h - n - r - 1][0]
                                  ? (f[h - n - r - 1][1] += z.substring(0, ba))
                                  : (f.splice(0, 0, [0, z.substring(0, ba)]),
                                    h++),
                                (z = z.substring(ba)),
                                (w = w.substring(ba))),
                              (ba = e(z, w)),
                              0 !== ba &&
                                ((f[h][1] =
                                  z.substring(z.length - ba) + f[h][1]),
                                (z = z.substring(0, z.length - ba)),
                                (w = w.substring(0, w.length - ba)))),
                            0 === n
                              ? f.splice(h - r, n + r, [1, z])
                              : 0 === r
                              ? f.splice(h - n, n + r, [-1, w])
                              : f.splice(h - n - r, n + r, [-1, w], [1, z]),
                            (h = h - n - r + (n ? 1 : 0) + (r ? 1 : 0) + 1))
                          : 0 !== h && 0 == f[h - 1][0]
                          ? ((f[h - 1][1] += f[h][1]), f.splice(h, 1))
                          : h++,
                          (n = r = 0),
                          (z = w = '');
                    }
                  '' === f[f.length - 1][1] && f.pop();
                  n = !1;
                  for (h = 1; h < f.length - 1; )
                    0 == f[h - 1][0] &&
                      0 == f[h + 1][0] &&
                      (f[h][1].substring(f[h][1].length - f[h - 1][1].length) ==
                      f[h - 1][1]
                        ? ((f[h][1] =
                            f[h - 1][1] +
                            f[h][1].substring(
                              0,
                              f[h][1].length - f[h - 1][1].length
                            )),
                          (f[h + 1][1] = f[h - 1][1] + f[h + 1][1]),
                          f.splice(h - 1, 1),
                          (n = !0))
                        : f[h][1].substring(0, f[h + 1][1].length) ==
                            f[h + 1][1] &&
                          ((f[h - 1][1] += f[h + 1][1]),
                          (f[h][1] =
                            f[h][1].substring(f[h + 1][1].length) +
                            f[h + 1][1]),
                          f.splice(h + 1, 1),
                          (n = !0))),
                      h++;
                  n && y(f);
                }
                function r(e, f) {
                  a: {
                    var h = e;
                    if (0 === f) var n = [0, h];
                    else {
                      var r = 0;
                      for (n = 0; n < h.length; n++) {
                        var x = h[n];
                        if (-1 === x[0] || 0 === x[0]) {
                          var y = r + x[1].length;
                          if (f === y) {
                            n = [n + 1, h];
                            break a;
                          }
                          if (f < y) {
                            h = h.slice();
                            r = f - r;
                            f = [x[0], x[1].slice(0, r)];
                            x = [x[0], x[1].slice(r)];
                            h.splice(n, 1, f, x);
                            n = [n + 1, h];
                            break a;
                          }
                          r = y;
                        }
                      }
                      throw Error('cursor_pos is out of bounds!');
                    }
                  }
                  h = n[1];
                  n = n[0];
                  f = h[n];
                  x = h[n + 1];
                  return null == f || 0 !== f[0]
                    ? e
                    : null != x && f[1] + x[1] === x[1] + f[1]
                    ? (h.splice(n, 2, x, f), w(h, n, 2))
                    : null != x && 0 === x[1].indexOf(f[1])
                    ? (h.splice(n, 2, [x[0], f[1]], [0, f[1]]),
                      (e = x[1].slice(f[1].length)),
                      0 < e.length && h.splice(n + 2, 0, [x[0], e]),
                      w(h, n, 3))
                    : e;
                }
                function n(e) {
                  function f(e) {
                    return (
                      55296 <= e.charCodeAt(e.length - 1) &&
                      56319 >= e.charCodeAt(e.length - 1)
                    );
                  }
                  function h(e) {
                    return 56320 <= e.charCodeAt(0) && 57343 >= e.charCodeAt(0);
                  }
                  for (var n = !1, r = 2; r < e.length; r += 1)
                    0 === e[r - 2][0] &&
                      f(e[r - 2][1]) &&
                      -1 === e[r - 1][0] &&
                      h(e[r - 1][1]) &&
                      1 === e[r][0] &&
                      h(e[r][1]) &&
                      ((n = !0),
                      (e[r - 1][1] = e[r - 2][1].slice(-1) + e[r - 1][1]),
                      (e[r][1] = e[r - 2][1].slice(-1) + e[r][1]),
                      (e[r - 2][1] = e[r - 2][1].slice(0, -1)));
                  if (!n) return e;
                  n = [];
                  for (r = 0; r < e.length; r += 1)
                    0 < e[r][1].length && n.push(e[r]);
                  return n;
                }
                function w(e, f, h) {
                  for (h = f + h - 1; 0 <= h && h >= f - 1; h--)
                    if (h + 1 < e.length) {
                      var n = e[h],
                        r = e[h + 1];
                      n[0] === r[1] && e.splice(h, 2, [n[0], n[1] + r[1]]);
                    }
                  return e;
                }
                aa.INSERT = 1;
                aa.DELETE = -1;
                aa.EQUAL = 0;
                h.exports = aa;
              },
              function (h, ca) {
                function aa(h) {
                  var x = [],
                    e;
                  for (e in h) x.push(e);
                  return x;
                }
                ca = h.exports =
                  'function' === typeof Object.keys ? Object.keys : aa;
                ca.shim = aa;
              },
              function (h, ca) {
                function aa(h) {
                  return (
                    '[object Arguments]' == Object.prototype.toString.call(h)
                  );
                }
                function z(h) {
                  return (
                    (h &&
                      'object' == typeof h &&
                      'number' == typeof h.length &&
                      Object.prototype.hasOwnProperty.call(h, 'callee') &&
                      !Object.prototype.propertyIsEnumerable.call(
                        h,
                        'callee'
                      )) ||
                    !1
                  );
                }
                ca =
                  '[object Arguments]' ==
                  (function () {
                    return Object.prototype.toString.call(arguments);
                  })();
                ca = h.exports = ca ? aa : z;
                ca.supported = aa;
                ca.unsupported = z;
              },
              function (h) {
                function aa() {}
                function ca(e, h, r) {
                  this.fn = e;
                  this.context = h;
                  this.once = r || !1;
                }
                function z() {
                  this._events = new aa();
                  this._eventsCount = 0;
                }
                var x = Object.prototype.hasOwnProperty,
                  e = '~';
                Object.create &&
                  ((aa.prototype = Object.create(null)),
                  new aa().__proto__ || (e = !1));
                z.prototype.eventNames = function () {
                  var f = [],
                    h,
                    r;
                  if (0 === this._eventsCount) return f;
                  for (r in (h = this._events))
                    x.call(h, r) && f.push(e ? r.slice(1) : r);
                  return Object.getOwnPropertySymbols
                    ? f.concat(Object.getOwnPropertySymbols(h))
                    : f;
                };
                z.prototype.listeners = function (f, h) {
                  f = this._events[e ? e + f : f];
                  if (h) return !!f;
                  if (!f) return [];
                  if (f.fn) return [f.fn];
                  h = 0;
                  for (var r = f.length, n = Array(r); h < r; h++)
                    n[h] = f[h].fn;
                  return n;
                };
                z.prototype.emit = function (f, h, r, n, w, x) {
                  var y = e ? e + f : f;
                  if (!this._events[y]) return !1;
                  y = this._events[y];
                  var z = arguments.length,
                    ba;
                  if (y.fn) {
                    y.once && this.removeListener(f, y.fn, void 0, !0);
                    switch (z) {
                      case 1:
                        return y.fn.call(y.context), !0;
                      case 2:
                        return y.fn.call(y.context, h), !0;
                      case 3:
                        return y.fn.call(y.context, h, r), !0;
                      case 4:
                        return y.fn.call(y.context, h, r, n), !0;
                      case 5:
                        return y.fn.call(y.context, h, r, n, w), !0;
                      case 6:
                        return y.fn.call(y.context, h, r, n, w, x), !0;
                    }
                    var aa = 1;
                    for (ba = Array(z - 1); aa < z; aa++)
                      ba[aa - 1] = arguments[aa];
                    y.fn.apply(y.context, ba);
                  } else {
                    var ca = y.length;
                    for (aa = 0; aa < ca; aa++)
                      switch (
                        (y[aa].once &&
                          this.removeListener(f, y[aa].fn, void 0, !0),
                        z)
                      ) {
                        case 1:
                          y[aa].fn.call(y[aa].context);
                          break;
                        case 2:
                          y[aa].fn.call(y[aa].context, h);
                          break;
                        case 3:
                          y[aa].fn.call(y[aa].context, h, r);
                          break;
                        case 4:
                          y[aa].fn.call(y[aa].context, h, r, n);
                          break;
                        default:
                          if (!ba) {
                            var ea = 1;
                            for (ba = Array(z - 1); ea < z; ea++)
                              ba[ea - 1] = arguments[ea];
                          }
                          y[aa].fn.apply(y[aa].context, ba);
                      }
                  }
                  return !0;
                };
                z.prototype.on = function (f, h, r) {
                  h = new ca(h, r || this);
                  f = e ? e + f : f;
                  this._events[f]
                    ? this._events[f].fn
                      ? (this._events[f] = [this._events[f], h])
                      : this._events[f].push(h)
                    : ((this._events[f] = h), this._eventsCount++);
                  return this;
                };
                z.prototype.once = function (f, h, r) {
                  h = new ca(h, r || this, !0);
                  f = e ? e + f : f;
                  this._events[f]
                    ? this._events[f].fn
                      ? (this._events[f] = [this._events[f], h])
                      : this._events[f].push(h)
                    : ((this._events[f] = h), this._eventsCount++);
                  return this;
                };
                z.prototype.removeListener = function (f, h, r, n) {
                  f = e ? e + f : f;
                  if (!this._events[f]) return this;
                  if (!h)
                    return (
                      0 === --this._eventsCount
                        ? (this._events = new aa())
                        : delete this._events[f],
                      this
                    );
                  var w = this._events[f];
                  if (w.fn)
                    w.fn !== h ||
                      (n && !w.once) ||
                      (r && w.context !== r) ||
                      (0 === --this._eventsCount
                        ? (this._events = new aa())
                        : delete this._events[f]);
                  else {
                    for (var x = 0, y = [], z = w.length; x < z; x++)
                      (w[x].fn !== h ||
                        (n && !w[x].once) ||
                        (r && w[x].context !== r)) &&
                        y.push(w[x]);
                    y.length
                      ? (this._events[f] = 1 === y.length ? y[0] : y)
                      : 0 === --this._eventsCount
                      ? (this._events = new aa())
                      : delete this._events[f];
                  }
                  return this;
                };
                z.prototype.removeAllListeners = function (f) {
                  f
                    ? ((f = e ? e + f : f),
                      this._events[f] &&
                        (0 === --this._eventsCount
                          ? (this._events = new aa())
                          : delete this._events[f]))
                    : ((this._events = new aa()), (this._eventsCount = 0));
                  return this;
                };
                z.prototype.off = z.prototype.removeListener;
                z.prototype.addListener = z.prototype.on;
                z.prototype.setMaxListeners = function () {
                  return this;
                };
                z.prefixed = e;
                z.EventEmitter = z;
                'undefined' !== typeof h && (h.exports = z);
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f, h) {
                  f in e
                    ? Object.defineProperty(e, f, {
                        value: h,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[f] = h);
                  return e;
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function y(e, f, h) {
                  return 'object' ===
                    ('undefined' === typeof f ? 'undefined' : ya(f))
                    ? Object.keys(f).reduce(function (e, h) {
                        return y(e, h, f[h]);
                      }, e)
                    : e.reduce(function (e, n) {
                        return n.attributes && n.attributes[f]
                          ? e.push(n)
                          : e.insert(
                              n.insert,
                              (0, Ba.default)({}, x({}, f, h), n.attributes)
                            );
                      }, new va.default());
                }
                function r(e) {
                  return e.nodeType !== Node.ELEMENT_NODE
                    ? {}
                    : e['__ql-computed-style'] ||
                        (e['__ql-computed-style'] = window.getComputedStyle(e));
                }
                function n(e, f) {
                  for (
                    var h = '', n = e.ops.length - 1;
                    0 <= n && h.length < f.length;
                    --n
                  ) {
                    var r = e.ops[n];
                    if ('string' !== typeof r.insert) break;
                    h = r.insert + h;
                  }
                  return h.slice(-1 * f.length) === f;
                }
                function w(e) {
                  if (0 === e.childNodes.length) return !1;
                  e = r(e);
                  return -1 < ['block', 'list-item'].indexOf(e.display);
                }
                function ba(e, f, h) {
                  return e.nodeType === e.TEXT_NODE
                    ? h.reduce(function (f, h) {
                        return h(e, f);
                      }, new va.default())
                    : e.nodeType === e.ELEMENT_NODE
                    ? [].reduce.call(
                        e.childNodes || [],
                        function (n, r) {
                          var w = ba(r, f, h);
                          r.nodeType === e.ELEMENT_NODE &&
                            ((w = f.reduce(function (e, f) {
                              return f(r, e);
                            }, w)),
                            (w = (r['__ql-matcher'] || []).reduce(function (
                              e,
                              f
                            ) {
                              return f(r, e);
                            },
                            w)));
                          return n.concat(w);
                        },
                        new va.default()
                      )
                    : new va.default();
                }
                function aa(e, f, h) {
                  return y(h, e, !0);
                }
                function da(e, f) {
                  var h = qa.default.Attributor.Attribute.keys(e),
                    n = qa.default.Attributor.Class.keys(e),
                    r = qa.default.Attributor.Style.keys(e),
                    w = {};
                  h.concat(n)
                    .concat(r)
                    .forEach(function (f) {
                      var h = qa.default.query(f, qa.default.Scope.ATTRIBUTE);
                      if (
                        null != h &&
                        ((w[h.attrName] = h.value(e)), w[h.attrName])
                      )
                        return;
                      h = Ma[f];
                      null == h ||
                        (h.attrName !== f && h.keyName !== f) ||
                        (w[h.attrName] = h.value(e) || void 0);
                      h = wa[f];
                      null == h ||
                        (h.attrName !== f && h.keyName !== f) ||
                        ((h = wa[f]), (w[h.attrName] = h.value(e) || void 0));
                    });
                  0 < Object.keys(w).length && (f = y(f, w));
                  return f;
                }
                function fa(e, f) {
                  var h = qa.default.query(e);
                  if (null == h) return f;
                  if (h.prototype instanceof qa.default.Embed) {
                    var n = {},
                      r = h.value(e);
                    null != r &&
                      ((n[h.blotName] = r),
                      (f = new va.default().insert(n, h.formats(e))));
                  } else
                    'function' === typeof h.formats &&
                      (f = y(f, h.blotName, h.formats(e)));
                  return f;
                }
                function ha(e, f) {
                  n(f, '\n') ||
                    ((w(e) ||
                      (0 < f.length() && e.nextSibling && w(e.nextSibling))) &&
                      f.insert('\n'));
                  return f;
                }
                function ka(e, f) {
                  if (w(e) && null != e.nextElementSibling && !n(f, '\n\n')) {
                    var h =
                      e.offsetHeight +
                      parseFloat(r(e).marginTop) +
                      parseFloat(r(e).marginBottom);
                    e.nextElementSibling.offsetTop > e.offsetTop + 1.5 * h &&
                      f.insert('\n');
                  }
                  return f;
                }
                function ja(e, f) {
                  var h = e.data;
                  if ('O:P' === e.parentNode.tagName) return f.insert(h.trim());
                  if (
                    0 === h.trim().length &&
                    e.parentNode.classList.contains('ql-clipboard')
                  )
                    return f;
                  if (!r(e.parentNode).whiteSpace.startsWith('pre')) {
                    var n = function (e, f) {
                      f = f.replace(/[^\u00a0]/g, '');
                      return 1 > f.length && e ? ' ' : f;
                    };
                    h = h.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
                    h = h.replace(/\s\s+/g, n.bind(n, !0));
                    if (
                      (null == e.previousSibling && w(e.parentNode)) ||
                      (null != e.previousSibling && w(e.previousSibling))
                    )
                      h = h.replace(/^\s+/, n.bind(n, !1));
                    if (
                      (null == e.nextSibling && w(e.parentNode)) ||
                      (null != e.nextSibling && w(e.nextSibling))
                    )
                      h = h.replace(/\s+$/, n.bind(n, !1));
                  }
                  return f.insert(h);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.matchText = ca.matchSpacing = ca.matchNewline = ca.matchBlot = ca.matchAttributor = ca.default = void 0;
                var ya =
                    'function' === typeof Symbol &&
                    'symbol' === typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            'function' === typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        },
                  ma = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (Qa) {
                          (r = !0), (w = Qa);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  sa = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(3);
                var Ba = z(h);
                h = ea(2);
                var va = z(h);
                h = ea(0);
                var qa = z(h);
                h = ea(5);
                var ua = z(h);
                h = ea(10);
                h = z(h);
                var ta = ea(9);
                ta = z(ta);
                var za = ea(36),
                  pa = ea(37),
                  Fa = ea(13),
                  Ca = z(Fa);
                Fa = ea(26);
                var Aa = ea(38),
                  Ea = ea(39);
                ea = ea(40);
                var Da = (0, h.default)('quill:clipboard'),
                  Ja = [
                    [Node.TEXT_NODE, ja],
                    [Node.TEXT_NODE, ha],
                    [
                      'br',
                      function (e, f) {
                        n(f, '\n') || f.insert('\n');
                        return f;
                      },
                    ],
                    [Node.ELEMENT_NODE, ha],
                    [Node.ELEMENT_NODE, fa],
                    [Node.ELEMENT_NODE, ka],
                    [Node.ELEMENT_NODE, da],
                    [
                      Node.ELEMENT_NODE,
                      function (e, f) {
                        var h = {},
                          n = e.style || {};
                        n.fontStyle &&
                          'italic' === r(e).fontStyle &&
                          (h.italic = !0);
                        n.fontWeight &&
                          (r(e).fontWeight.startsWith('bold') ||
                            700 <= parseInt(r(e).fontWeight)) &&
                          (h.bold = !0);
                        0 < Object.keys(h).length && (f = y(f, h));
                        0 < parseFloat(n.textIndent || 0) &&
                          (f = new va.default().insert('\t').concat(f));
                        return f;
                      },
                    ],
                    [
                      'li',
                      function (e, f) {
                        var h = qa.default.query(e);
                        if (
                          null == h ||
                          'list-item' !== h.blotName ||
                          !n(f, '\n')
                        )
                          return f;
                        h = -1;
                        for (
                          e = e.parentNode;
                          !e.classList.contains('ql-clipboard');

                        )
                          'list' === (qa.default.query(e) || {}).blotName &&
                            (h += 1),
                            (e = e.parentNode);
                        return 0 >= h
                          ? f
                          : f.compose(
                              new va.default()
                                .retain(f.length() - 1)
                                .retain(1, { indent: h })
                            );
                      },
                    ],
                    ['b', aa.bind(aa, 'bold')],
                    ['i', aa.bind(aa, 'italic')],
                    [
                      'style',
                      function () {
                        return new va.default();
                      },
                    ],
                  ],
                  Ma = [za.AlignAttribute, Aa.DirectionAttribute].reduce(
                    function (e, f) {
                      e[f.keyName] = f;
                      return e;
                    },
                    {}
                  ),
                  wa = [
                    za.AlignStyle,
                    pa.BackgroundStyle,
                    Fa.ColorStyle,
                    Aa.DirectionStyle,
                    Ea.FontStyle,
                    ea.SizeStyle,
                  ].reduce(function (e, f) {
                    e[f.keyName] = f;
                    return e;
                  }, {});
                ea = (function (h) {
                  function r(f, h) {
                    if (!(this instanceof r))
                      throw new TypeError('Cannot call a class as a function');
                    var n = e(
                      this,
                      (r.__proto__ || Object.getPrototypeOf(r)).call(this, f, h)
                    );
                    n.quill.root.addEventListener('paste', n.onPaste.bind(n));
                    n.container = n.quill.addContainer('ql-clipboard');
                    n.container.setAttribute('contenteditable', !0);
                    n.container.setAttribute('tabindex', -1);
                    n.matchers = [];
                    Ja.concat(n.options.matchers).forEach(function (e) {
                      e = ma(e, 2);
                      var f = e[1];
                      (h.matchVisual || f !== ka) && n.addMatcher(e[0], f);
                    });
                    return n;
                  }
                  f(r, h);
                  sa(r, [
                    {
                      key: 'addMatcher',
                      value: function (e, f) {
                        this.matchers.push([e, f]);
                      },
                    },
                    {
                      key: 'convert',
                      value: function (e) {
                        if ('string' === typeof e)
                          return (
                            (this.container.innerHTML = e.replace(
                              />\r?\n +</g,
                              '><'
                            )),
                            this.convert()
                          );
                        e = this.quill.getFormat(
                          this.quill.selection.savedRange.index
                        );
                        if (e[Ca.default.blotName]) {
                          var f = this.container.innerText;
                          this.container.innerHTML = '';
                          return new va.default().insert(
                            f,
                            x({}, Ca.default.blotName, e[Ca.default.blotName])
                          );
                        }
                        e = this.prepareMatching();
                        e = ma(e, 2);
                        e = ba(this.container, e[0], e[1]);
                        n(e, '\n') &&
                          null == e.ops[e.ops.length - 1].attributes &&
                          (e = e.compose(
                            new va.default().retain(e.length() - 1).delete(1)
                          ));
                        Da.log('convert', this.container.innerHTML, e);
                        this.container.innerHTML = '';
                        return e;
                      },
                    },
                    {
                      key: 'dangerouslyPasteHTML',
                      value: function (e, f) {
                        var h =
                          2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : ua.default.sources.API;
                        if ('string' === typeof e)
                          this.quill.setContents(this.convert(e), f),
                            this.quill.setSelection(
                              0,
                              ua.default.sources.SILENT
                            );
                        else {
                          var n = this.convert(f);
                          this.quill.updateContents(
                            new va.default().retain(e).concat(n),
                            h
                          );
                          this.quill.setSelection(
                            e + n.length(),
                            ua.default.sources.SILENT
                          );
                        }
                      },
                    },
                    {
                      key: 'onPaste',
                      value: function (e) {
                        var f = this;
                        if (!e.defaultPrevented && this.quill.isEnabled()) {
                          var h = this.quill.getSelection(),
                            n = new va.default().retain(h.index),
                            r = this.quill.scrollingContainer.scrollTop;
                          this.container.focus();
                          this.quill.selection.update(
                            ua.default.sources.SILENT
                          );
                          setTimeout(function () {
                            n = n.concat(f.convert()).delete(h.length);
                            f.quill.updateContents(n, ua.default.sources.USER);
                            f.quill.setSelection(
                              n.length() - h.length,
                              ua.default.sources.SILENT
                            );
                            f.quill.scrollingContainer.scrollTop = r;
                            f.quill.focus();
                          }, 1);
                        }
                      },
                    },
                    {
                      key: 'prepareMatching',
                      value: function () {
                        var e = this,
                          f = [],
                          h = [];
                        this.matchers.forEach(function (n) {
                          n = ma(n, 2);
                          var r = n[0],
                            w = n[1];
                          switch (r) {
                            case Node.TEXT_NODE:
                              h.push(w);
                              break;
                            case Node.ELEMENT_NODE:
                              f.push(w);
                              break;
                            default:
                              [].forEach.call(
                                e.container.querySelectorAll(r),
                                function (e) {
                                  e['__ql-matcher'] = e['__ql-matcher'] || [];
                                  e['__ql-matcher'].push(w);
                                }
                              );
                          }
                        });
                        return [f, h];
                      },
                    },
                  ]);
                  return r;
                })(ta.default);
                ea.DEFAULTS = { matchers: [], matchVisual: !0 };
                ca.default = ea;
                ca.matchAttributor = da;
                ca.matchBlot = fa;
                ca.matchNewline = ha;
                ca.matchSpacing = ka;
                ca.matchText = ja;
              },
              function (h, ca, ea) {
                function z(e, h) {
                  if ('function' !== typeof h && null !== h)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof h
                    );
                  e.prototype = Object.create(h && h.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  h &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, h)
                      : (e.__proto__ = h));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var r = f[h];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        'value' in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  e = function w(e, h, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, h);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return w(e, h, n);
                    } else {
                      if ('value' in r) return r.value;
                      h = r.get;
                      return void 0 === h ? void 0 : h.call(n);
                    }
                  };
                h = (function (h) {
                  function r() {
                    if (!(this instanceof r))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (r.__proto__ || Object.getPrototypeOf(r)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(r, h);
                  x(
                    r,
                    [
                      {
                        key: 'optimize',
                        value: function (h) {
                          e(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            'optimize',
                            this
                          ).call(this, h);
                          this.domNode.tagName !== this.statics.tagName[0] &&
                            this.replaceWith(this.statics.blotName);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function () {
                          return e(
                            r.__proto__ || Object.getPrototypeOf(r),
                            'create',
                            this
                          ).call(this);
                        },
                      },
                      {
                        key: 'formats',
                        value: function () {
                          return !0;
                        },
                      },
                    ]
                  );
                  return r;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(6)).default
                );
                h.blotName = 'bold';
                h.tagName = ['STRONG', 'B'];
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f, h) {
                  f in e
                    ? Object.defineProperty(e, f, {
                        value: h,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[f] = h);
                  return e;
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                function y(e, f, h) {
                  var n = document.createElement('button');
                  n.setAttribute('type', 'button');
                  n.classList.add('ql-' + f);
                  null != h && (n.value = h);
                  e.appendChild(n);
                }
                function r(e, f) {
                  Array.isArray(f[0]) || (f = [f]);
                  f.forEach(function (f) {
                    var h = document.createElement('span');
                    h.classList.add('ql-formats');
                    f.forEach(function (e) {
                      if ('string' === typeof e) y(h, e);
                      else {
                        var f = Object.keys(e)[0];
                        e = e[f];
                        Array.isArray(e) ? n(h, f, e) : y(h, f, e);
                      }
                    });
                    e.appendChild(h);
                  });
                }
                function n(e, f, h) {
                  var n = document.createElement('select');
                  n.classList.add('ql-' + f);
                  h.forEach(function (e) {
                    var f = document.createElement('option');
                    !1 !== e
                      ? f.setAttribute('value', e)
                      : f.setAttribute('selected', 'selected');
                    n.appendChild(f);
                  });
                  e.appendChild(n);
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.addControls = ca.default = void 0;
                var w = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (ua) {
                          (r = !0), (w = ua);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  ba = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(2);
                var aa = z(h);
                h = ea(0);
                var da = z(h);
                h = ea(5);
                var fa = z(h);
                h = ea(10);
                h = z(h);
                ea = ea(9);
                ea = z(ea);
                var ha = (0, h.default)('quill:toolbar');
                ea = (function (h) {
                  function n(f, h) {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var x = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, f, h)
                    );
                    Array.isArray(x.options.container)
                      ? ((h = document.createElement('div')),
                        r(h, x.options.container),
                        f.container.parentNode.insertBefore(h, f.container),
                        (x.container = h))
                      : (x.container =
                          'string' === typeof x.options.container
                            ? document.querySelector(x.options.container)
                            : x.options.container);
                    if (!(x.container instanceof HTMLElement)) {
                      var y;
                      return (
                        (y = ha.error(
                          'Container required for toolbar',
                          x.options
                        )),
                        e(x, y)
                      );
                    }
                    x.container.classList.add('ql-toolbar');
                    x.controls = [];
                    x.handlers = {};
                    Object.keys(x.options.handlers).forEach(function (e) {
                      x.addHandler(e, x.options.handlers[e]);
                    });
                    [].forEach.call(
                      x.container.querySelectorAll('button, select'),
                      function (e) {
                        x.attach(e);
                      }
                    );
                    x.quill.on(
                      fa.default.events.EDITOR_CHANGE,
                      function (e, f) {
                        e === fa.default.events.SELECTION_CHANGE && x.update(f);
                      }
                    );
                    x.quill.on(fa.default.events.SCROLL_OPTIMIZE, function () {
                      var e = x.quill.selection.getRange();
                      e = w(e, 1)[0];
                      x.update(e);
                    });
                    return x;
                  }
                  f(n, h);
                  ba(n, [
                    {
                      key: 'addHandler',
                      value: function (e, f) {
                        this.handlers[e] = f;
                      },
                    },
                    {
                      key: 'attach',
                      value: function (e) {
                        var f = this,
                          h = [].find.call(e.classList, function (e) {
                            return 0 === e.indexOf('ql-');
                          });
                        if (h) {
                          h = h.slice(3);
                          'BUTTON' === e.tagName &&
                            e.setAttribute('type', 'button');
                          if (null == this.handlers[h]) {
                            if (
                              null != this.quill.scroll.whitelist &&
                              null == this.quill.scroll.whitelist[h]
                            ) {
                              ha.warn(
                                'ignoring attaching to disabled format',
                                h,
                                e
                              );
                              return;
                            }
                            if (null == da.default.query(h)) {
                              ha.warn(
                                'ignoring attaching to nonexistent format',
                                h,
                                e
                              );
                              return;
                            }
                          }
                          e.addEventListener(
                            'SELECT' === e.tagName ? 'change' : 'click',
                            function (n) {
                              if ('SELECT' === e.tagName) {
                                if (0 > e.selectedIndex) return;
                                var r = e.options[e.selectedIndex];
                                r = r.hasAttribute('selected')
                                  ? !1
                                  : r.value || !1;
                              } else
                                (r = e.classList.contains('ql-active')
                                  ? !1
                                  : e.value || !e.hasAttribute('value')),
                                  n.preventDefault();
                              f.quill.focus();
                              n = f.quill.selection.getRange();
                              n = w(n, 1)[0];
                              if (null != f.handlers[h])
                                f.handlers[h].call(f, r);
                              else if (
                                da.default.query(h).prototype instanceof
                                da.default.Embed
                              ) {
                                r = prompt('Enter ' + h);
                                if (!r) return;
                                f.quill.updateContents(
                                  new aa.default()
                                    .retain(n.index)
                                    .delete(n.length)
                                    .insert(x({}, h, r)),
                                  fa.default.sources.USER
                                );
                              } else
                                f.quill.format(h, r, fa.default.sources.USER);
                              f.update(n);
                            }
                          );
                          this.controls.push([h, e]);
                        }
                      },
                    },
                    {
                      key: 'update',
                      value: function (e) {
                        var f = null == e ? {} : this.quill.getFormat(e);
                        this.controls.forEach(function (h) {
                          h = w(h, 2);
                          var n = h[0];
                          h = h[1];
                          if ('SELECT' === h.tagName) {
                            var r = void 0;
                            null == e
                              ? (r = null)
                              : null == f[n]
                              ? (r = h.querySelector('option[selected]'))
                              : Array.isArray(f[n]) ||
                                ((n = f[n]),
                                'string' === typeof n &&
                                  (n = n.replace(/"/g, '\\"')),
                                (r = h.querySelector(
                                  'option[value="' + n + '"]'
                                )));
                            null == r
                              ? ((h.value = ''), (h.selectedIndex = -1))
                              : (r.selected = !0);
                          } else null == e ? h.classList.remove('ql-active') : h.hasAttribute('value') ? ((n = f[n] === h.getAttribute('value') || (null != f[n] && f[n].toString() === h.getAttribute('value')) || (null == f[n] && !h.getAttribute('value'))), h.classList.toggle('ql-active', n)) : h.classList.toggle('ql-active', null != f[n]);
                        });
                      },
                    },
                  ]);
                  return n;
                })(ea.default);
                ea.DEFAULTS = {};
                ea.DEFAULTS = {
                  container: null,
                  handlers: {
                    clean: function () {
                      var e = this,
                        f = this.quill.getSelection();
                      null != f &&
                        (0 == f.length
                          ? ((f = this.quill.getFormat()),
                            Object.keys(f).forEach(function (f) {
                              null !=
                                da.default.query(f, da.default.Scope.INLINE) &&
                                e.quill.format(f, !1);
                            }))
                          : this.quill.removeFormat(
                              f,
                              fa.default.sources.USER
                            ));
                    },
                    direction: function (e) {
                      var f = this.quill.getFormat().align;
                      'rtl' === e && null == f
                        ? this.quill.format(
                            'align',
                            'right',
                            fa.default.sources.USER
                          )
                        : e ||
                          'right' !== f ||
                          this.quill.format(
                            'align',
                            !1,
                            fa.default.sources.USER
                          );
                      this.quill.format(
                        'direction',
                        e,
                        fa.default.sources.USER
                      );
                    },
                    indent: function (e) {
                      var f = this.quill.getFormat(this.quill.getSelection()),
                        h = parseInt(f.indent || 0);
                      if ('+1' === e || '-1' === e)
                        (e = '+1' === e ? 1 : -1),
                          'rtl' === f.direction && (e *= -1),
                          this.quill.format(
                            'indent',
                            h + e,
                            fa.default.sources.USER
                          );
                    },
                    link: function (e) {
                      !0 === e && (e = prompt('Enter link URL:'));
                      this.quill.format('link', e, fa.default.sources.USER);
                    },
                    list: function (e) {
                      var f = this.quill.getFormat(this.quill.getSelection());
                      'check' === e
                        ? 'checked' === f.list || 'unchecked' === f.list
                          ? this.quill.format(
                              'list',
                              !1,
                              fa.default.sources.USER
                            )
                          : this.quill.format(
                              'list',
                              'unchecked',
                              fa.default.sources.USER
                            )
                        : this.quill.format('list', e, fa.default.sources.USER);
                    },
                  },
                };
                ca.default = ea;
                ca.addControls = r;
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function x(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var e = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  f = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (function (h) {
                  function n(e, f) {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    e = z(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                    );
                    e.label.innerHTML = f;
                    e.container.classList.add('ql-color-picker');
                    [].slice
                      .call(
                        e.container.querySelectorAll('.ql-picker-item'),
                        0,
                        7
                      )
                      .forEach(function (e) {
                        e.classList.add('ql-primary');
                      });
                    return e;
                  }
                  x(n, h);
                  e(n, [
                    {
                      key: 'buildItem',
                      value: function (e) {
                        var h = f(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'buildItem',
                          this
                        ).call(this, e);
                        h.style.backgroundColor = e.getAttribute('value') || '';
                        return h;
                      },
                    },
                    {
                      key: 'selectItem',
                      value: function (e, h) {
                        f(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'selectItem',
                          this
                        ).call(this, e, h);
                        h = this.label.querySelector('.ql-color-label');
                        e = e ? e.getAttribute('data-value') || '' : '';
                        h &&
                          ('line' === h.tagName
                            ? (h.style.stroke = e)
                            : (h.style.fill = e));
                      },
                    },
                  ]);
                  return n;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(28)).default
                );
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function x(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var e = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, w) {
                      h && e(f.prototype, h);
                      w && e(f, w);
                      return f;
                    };
                  })(),
                  f = function ba(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ba(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (function (h) {
                  function n(e, f) {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    e = z(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
                    );
                    e.container.classList.add('ql-icon-picker');
                    [].forEach.call(
                      e.container.querySelectorAll('.ql-picker-item'),
                      function (e) {
                        e.innerHTML = f[e.getAttribute('data-value') || ''];
                      }
                    );
                    e.defaultItem = e.container.querySelector('.ql-selected');
                    e.selectItem(e.defaultItem);
                    return e;
                  }
                  x(n, h);
                  e(n, [
                    {
                      key: 'selectItem',
                      value: function (e, h) {
                        f(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'selectItem',
                          this
                        ).call(this, e, h);
                        e = e || this.defaultItem;
                        this.label.innerHTML = e.innerHTML;
                      },
                    },
                  ]);
                  return n;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(28)).default
                );
                ca.default = h;
              },
              function (h, ca) {
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var aa = (function () {
                  function h(h, e) {
                    for (var f = 0; f < e.length; f++) {
                      var x = e[f];
                      x.enumerable = x.enumerable || !1;
                      x.configurable = !0;
                      'value' in x && (x.writable = !0);
                      Object.defineProperty(h, x.key, x);
                    }
                  }
                  return function (x, e, f) {
                    e && h(x.prototype, e);
                    f && h(x, f);
                    return x;
                  };
                })();
                h = (function () {
                  function h(x, e) {
                    var f = this;
                    if (!(this instanceof h))
                      throw new TypeError('Cannot call a class as a function');
                    this.quill = x;
                    this.boundsContainer = e || document.body;
                    this.root = x.addContainer('ql-tooltip');
                    this.root.innerHTML = this.constructor.TEMPLATE;
                    this.quill.root === this.quill.scrollingContainer &&
                      this.quill.root.addEventListener('scroll', function () {
                        f.root.style.marginTop =
                          -1 * f.quill.root.scrollTop + 'px';
                      });
                    this.hide();
                  }
                  aa(h, [
                    {
                      key: 'hide',
                      value: function () {
                        this.root.classList.add('ql-hidden');
                      },
                    },
                    {
                      key: 'position',
                      value: function (h) {
                        var e =
                            h.left + h.width / 2 - this.root.offsetWidth / 2,
                          f = h.bottom + this.quill.root.scrollTop;
                        this.root.style.left = e + 'px';
                        this.root.style.top = f + 'px';
                        this.root.classList.remove('ql-flip');
                        var x = this.boundsContainer.getBoundingClientRect(),
                          r = this.root.getBoundingClientRect(),
                          n = 0;
                        r.right > x.right &&
                          ((n = x.right - r.right),
                          (this.root.style.left = e + n + 'px'));
                        r.left < x.left &&
                          ((n = x.left - r.left),
                          (this.root.style.left = e + n + 'px'));
                        r.bottom > x.bottom &&
                          ((this.root.style.top =
                            f - (h.bottom - h.top + (r.bottom - r.top)) + 'px'),
                          this.root.classList.add('ql-flip'));
                        return n;
                      },
                    },
                    {
                      key: 'show',
                      value: function () {
                        this.root.classList.remove('ql-editing');
                        this.root.classList.remove('ql-hidden');
                      },
                    },
                  ]);
                  return h;
                })();
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var y = (function () {
                    return function (e, f) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e)) {
                        var h = [],
                          n = !0,
                          r = !1,
                          w = void 0;
                        try {
                          for (
                            var x = e[Symbol.iterator](), y;
                            !(n = (y = x.next()).done) &&
                            (h.push(y.value), !f || h.length !== f);
                            n = !0
                          );
                        } catch (pa) {
                          (r = !0), (w = pa);
                        } finally {
                          try {
                            if (!n && x['return']) x['return']();
                          } finally {
                            if (r) throw w;
                          }
                        }
                        return h;
                      }
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance'
                      );
                    };
                  })(),
                  r = function qa(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return qa(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  },
                  n = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(3);
                h = z(h);
                var w = ea(8),
                  ba = z(w);
                w = ea(43);
                var aa = z(w),
                  da = ea(27),
                  fa = z(da),
                  ha = ea(15);
                ea = ea(41);
                var ka = z(ea),
                  ja = [
                    [{ header: ['1', '2', '3', !1] }],
                    ['bold', 'italic', 'underline', 'link'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean'],
                  ];
                ea = (function (h) {
                  function r(f, h) {
                    x(this, r);
                    null != h.modules.toolbar &&
                      null == h.modules.toolbar.container &&
                      (h.modules.toolbar.container = ja);
                    f = e(
                      this,
                      (r.__proto__ || Object.getPrototypeOf(r)).call(this, f, h)
                    );
                    f.quill.container.classList.add('ql-snow');
                    return f;
                  }
                  f(r, h);
                  n(r, [
                    {
                      key: 'extendToolbar',
                      value: function (e) {
                        e.container.classList.add('ql-snow');
                        this.buildButtons(
                          [].slice.call(e.container.querySelectorAll('button')),
                          ka.default
                        );
                        this.buildPickers(
                          [].slice.call(e.container.querySelectorAll('select')),
                          ka.default
                        );
                        this.tooltip = new ya(this.quill, this.options.bounds);
                        e.container.querySelector('.ql-link') &&
                          this.quill.keyboard.addBinding(
                            { key: 'K', shortKey: !0 },
                            function (f, h) {
                              e.handlers.link.call(e, !h.format.link);
                            }
                          );
                      },
                    },
                  ]);
                  return r;
                })(aa.default);
                ea.DEFAULTS = (0, h.default)(!0, {}, aa.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function (e) {
                          e
                            ? ((e = this.quill.getSelection()),
                              null != e &&
                                0 != e.length &&
                                ((e = this.quill.getText(e)),
                                /^\S+@\S+\.\S+$/.test(e) &&
                                  0 !== e.indexOf('mailto:') &&
                                  (e = 'mailto:' + e),
                                this.quill.theme.tooltip.edit('link', e)))
                            : this.quill.format('link', !1);
                        },
                      },
                    },
                  },
                });
                var ya = (function (h) {
                  function w(f, h) {
                    x(this, w);
                    f = e(
                      this,
                      (w.__proto__ || Object.getPrototypeOf(w)).call(this, f, h)
                    );
                    f.preview = f.root.querySelector('a.ql-preview');
                    return f;
                  }
                  f(w, h);
                  n(w, [
                    {
                      key: 'listen',
                      value: function () {
                        var e = this;
                        r(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'listen',
                          this
                        ).call(this);
                        this.root
                          .querySelector('a.ql-action')
                          .addEventListener('click', function (f) {
                            e.root.classList.contains('ql-editing')
                              ? e.save()
                              : e.edit('link', e.preview.textContent);
                            f.preventDefault();
                          });
                        this.root
                          .querySelector('a.ql-remove')
                          .addEventListener('click', function (f) {
                            if (null != e.linkRange) {
                              var h = e.linkRange;
                              e.restoreFocus();
                              e.quill.formatText(
                                h,
                                'link',
                                !1,
                                ba.default.sources.USER
                              );
                              delete e.linkRange;
                            }
                            f.preventDefault();
                            e.hide();
                          });
                        this.quill.on(
                          ba.default.events.SELECTION_CHANGE,
                          function (f, h, n) {
                            if (null != f) {
                              if (
                                0 === f.length &&
                                n === ba.default.sources.USER
                              ) {
                                if (
                                  ((h = e.quill.scroll.descendant(
                                    fa.default,
                                    f.index
                                  )),
                                  (n = y(h, 2)),
                                  (h = n[0]),
                                  (n = n[1]),
                                  null != h)
                                ) {
                                  e.linkRange = new ha.Range(
                                    f.index - n,
                                    h.length()
                                  );
                                  f = fa.default.formats(h.domNode);
                                  e.preview.textContent = f;
                                  e.preview.setAttribute('href', f);
                                  e.show();
                                  e.position(e.quill.getBounds(e.linkRange));
                                  return;
                                }
                              } else delete e.linkRange;
                              e.hide();
                            }
                          }
                        );
                      },
                    },
                    {
                      key: 'show',
                      value: function () {
                        r(
                          w.prototype.__proto__ ||
                            Object.getPrototypeOf(w.prototype),
                          'show',
                          this
                        ).call(this);
                        this.root.removeAttribute('data-mode');
                      },
                    },
                  ]);
                  return w;
                })(w.BaseTooltip);
                ya.TEMPLATE =
                  '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a>';
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = ea(29);
                h = z(h);
                var x = ea(36),
                  e = ea(38),
                  f = ea(64),
                  y = ea(65);
                y = z(y);
                var r = ea(66);
                r = z(r);
                var n = ea(67),
                  w = z(n),
                  ba = ea(37),
                  aa = ea(26),
                  da = ea(39),
                  fa = ea(40),
                  ha = ea(56);
                ha = z(ha);
                var ka = ea(68);
                ka = z(ka);
                var ja = ea(27);
                ja = z(ja);
                var ya = ea(69);
                ya = z(ya);
                var ma = ea(70);
                ma = z(ma);
                var sa = ea(71);
                sa = z(sa);
                var Ba = ea(72);
                Ba = z(Ba);
                var va = ea(73);
                va = z(va);
                var qa = ea(13),
                  ua = z(qa),
                  ta = ea(74);
                ta = z(ta);
                var za = ea(75);
                za = z(za);
                var pa = ea(57);
                pa = z(pa);
                var Fa = ea(41);
                Fa = z(Fa);
                var Ca = ea(28);
                Ca = z(Ca);
                var Aa = ea(59);
                Aa = z(Aa);
                var Ea = ea(60);
                Ea = z(Ea);
                var Da = ea(61);
                Da = z(Da);
                var Ja = ea(108);
                Ja = z(Ja);
                ea = ea(62);
                ea = z(ea);
                h.default.register(
                  {
                    'attributors/attribute/direction': e.DirectionAttribute,
                    'attributors/class/align': x.AlignClass,
                    'attributors/class/background': ba.BackgroundClass,
                    'attributors/class/color': aa.ColorClass,
                    'attributors/class/direction': e.DirectionClass,
                    'attributors/class/font': da.FontClass,
                    'attributors/class/size': fa.SizeClass,
                    'attributors/style/align': x.AlignStyle,
                    'attributors/style/background': ba.BackgroundStyle,
                    'attributors/style/color': aa.ColorStyle,
                    'attributors/style/direction': e.DirectionStyle,
                    'attributors/style/font': da.FontStyle,
                    'attributors/style/size': fa.SizeStyle,
                  },
                  !0
                );
                h.default.register(
                  {
                    'formats/align': x.AlignClass,
                    'formats/direction': e.DirectionClass,
                    'formats/indent': f.IndentClass,
                    'formats/background': ba.BackgroundStyle,
                    'formats/color': aa.ColorStyle,
                    'formats/font': da.FontClass,
                    'formats/size': fa.SizeClass,
                    'formats/blockquote': y.default,
                    'formats/code-block': ua.default,
                    'formats/header': r.default,
                    'formats/list': w.default,
                    'formats/bold': ha.default,
                    'formats/code': qa.Code,
                    'formats/italic': ka.default,
                    'formats/link': ja.default,
                    'formats/script': ya.default,
                    'formats/strike': ma.default,
                    'formats/underline': sa.default,
                    'formats/image': Ba.default,
                    'formats/video': va.default,
                    'formats/list/item': n.ListItem,
                    'modules/formula': ta.default,
                    'modules/syntax': za.default,
                    'modules/toolbar': pa.default,
                    'themes/bubble': Ja.default,
                    'themes/snow': ea.default,
                    'ui/icons': Fa.default,
                    'ui/picker': Ca.default,
                    'ui/icon-picker': Ea.default,
                    'ui/color-picker': Aa.default,
                    'ui/tooltip': Da.default,
                  },
                  !0
                );
                ca.default = h.default;
              },
              function (h, ca, ea) {
                function z(e, h) {
                  if ('function' !== typeof h && null !== h)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof h
                    );
                  e.prototype = Object.create(h && h.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  h &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, h)
                      : (e.__proto__ = h));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.IndentClass = void 0;
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var r = f[h];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        'value' in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  e = function w(e, h, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, h);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return w(e, h, n);
                    } else {
                      if ('value' in r) return r.value;
                      h = r.get;
                      return void 0 === h ? void 0 : h.call(n);
                    }
                  };
                h = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(ea(0));
                h = new ((function (h) {
                  function r() {
                    if (!(this instanceof r))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (r.__proto__ || Object.getPrototypeOf(r)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(r, h);
                  x(r, [
                    {
                      key: 'add',
                      value: function (h, w) {
                        if ('+1' === w || '-1' === w) {
                          var n = this.value(h) || 0;
                          w = '+1' === w ? n + 1 : n - 1;
                        }
                        return 0 === w
                          ? (this.remove(h), !0)
                          : e(
                              r.prototype.__proto__ ||
                                Object.getPrototypeOf(r.prototype),
                              'add',
                              this
                            ).call(this, h, w);
                      },
                    },
                    {
                      key: 'canAdd',
                      value: function (h, w) {
                        return (
                          e(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            'canAdd',
                            this
                          ).call(this, h, w) ||
                          e(
                            r.prototype.__proto__ ||
                              Object.getPrototypeOf(r.prototype),
                            'canAdd',
                            this
                          ).call(this, h, parseInt(w))
                        );
                      },
                    },
                    {
                      key: 'value',
                      value: function (h) {
                        return (
                          parseInt(
                            e(
                              r.prototype.__proto__ ||
                                Object.getPrototypeOf(r.prototype),
                              'value',
                              this
                            ).call(this, h)
                          ) || void 0
                        );
                      },
                    },
                  ]);
                  return r;
                })(h.default.Attributor.Class))('indent', 'ql-indent', {
                  scope: h.default.Scope.BLOCK,
                  whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
                });
                ca.IndentClass = h;
              },
              function (h, ca, ea) {
                function z(h, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    );
                  h.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: h,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(h, e)
                      : (h.__proto__ = e));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                    var f = (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !f ||
                      ('object' !== typeof f && 'function' !== typeof f)
                      ? this
                      : f;
                  }
                  z(e, h);
                  return e;
                })(
                  (function (h) {
                    return h && h.__esModule ? h : { default: h };
                  })(ea(4)).default
                );
                h.blotName = 'blockquote';
                h.tagName = 'blockquote';
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                  function e(e, h) {
                    for (var f = 0; f < h.length; f++) {
                      var n = h[f];
                      n.enumerable = n.enumerable || !1;
                      n.configurable = !0;
                      'value' in n && (n.writable = !0);
                      Object.defineProperty(e, n.key, n);
                    }
                  }
                  return function (f, h, r) {
                    h && e(f.prototype, h);
                    r && e(f, r);
                    return f;
                  };
                })();
                h = (function (e) {
                  function f() {
                    if (!(this instanceof f))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (f.__proto__ || Object.getPrototypeOf(f)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(f, e);
                  x(f, null, [
                    {
                      key: 'formats',
                      value: function (e) {
                        return this.tagName.indexOf(e.tagName) + 1;
                      },
                    },
                  ]);
                  return f;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(4)).default
                );
                h.blotName = 'header';
                h.tagName = 'H1 H2 H3 H4 H5 H6'.split(' ');
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.ListItem = void 0;
                var y = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  r = function ka(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ka(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(0);
                var n = z(h);
                h = ea(4);
                h = z(h);
                ea = ea(25);
                ea = z(ea);
                var w = (function (h) {
                  function w() {
                    x(this, w);
                    return e(
                      this,
                      (w.__proto__ || Object.getPrototypeOf(w)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(w, h);
                  y(
                    w,
                    [
                      {
                        key: 'format',
                        value: function (e, f) {
                          e !== ba.blotName || f
                            ? r(
                                w.prototype.__proto__ ||
                                  Object.getPrototypeOf(w.prototype),
                                'format',
                                this
                              ).call(this, e, f)
                            : this.replaceWith(
                                n.default.create(this.statics.scope)
                              );
                        },
                      },
                      {
                        key: 'remove',
                        value: function () {
                          null == this.prev && null == this.next
                            ? this.parent.remove()
                            : r(
                                w.prototype.__proto__ ||
                                  Object.getPrototypeOf(w.prototype),
                                'remove',
                                this
                              ).call(this);
                        },
                      },
                      {
                        key: 'replaceWith',
                        value: function (e, f) {
                          this.parent.isolate(
                            this.offset(this.parent),
                            this.length()
                          );
                          if (e === this.parent.statics.blotName)
                            return this.parent.replaceWith(e, f), this;
                          this.parent.unwrap();
                          return r(
                            w.prototype.__proto__ ||
                              Object.getPrototypeOf(w.prototype),
                            'replaceWith',
                            this
                          ).call(this, e, f);
                        },
                      },
                    ],
                    [
                      {
                        key: 'formats',
                        value: function (e) {
                          return e.tagName === this.tagName
                            ? void 0
                            : r(
                                w.__proto__ || Object.getPrototypeOf(w),
                                'formats',
                                this
                              ).call(this, e);
                        },
                      },
                    ]
                  );
                  return w;
                })(h.default);
                w.blotName = 'list-item';
                w.tagName = 'LI';
                var ba = (function (h) {
                  function z(f) {
                    function h(e) {
                      if (e.target.parentNode === f) {
                        var h = r.statics.formats(f);
                        e = n.default.find(e.target);
                        'checked' === h
                          ? e.format('list', 'unchecked')
                          : 'unchecked' === h && e.format('list', 'checked');
                      }
                    }
                    x(this, z);
                    var r = e(
                      this,
                      (z.__proto__ || Object.getPrototypeOf(z)).call(this, f)
                    );
                    f.addEventListener('touchstart', h);
                    f.addEventListener('mousedown', h);
                    return r;
                  }
                  f(z, h);
                  y(z, null, [
                    {
                      key: 'create',
                      value: function (e) {
                        var f = 'ordered' === e ? 'OL' : 'UL';
                        f = r(
                          z.__proto__ || Object.getPrototypeOf(z),
                          'create',
                          this
                        ).call(this, f);
                        ('checked' !== e && 'unchecked' !== e) ||
                          f.setAttribute('data-checked', 'checked' === e);
                        return f;
                      },
                    },
                    {
                      key: 'formats',
                      value: function (e) {
                        if ('OL' === e.tagName) return 'ordered';
                        if ('UL' === e.tagName)
                          return e.hasAttribute('data-checked')
                            ? 'true' === e.getAttribute('data-checked')
                              ? 'checked'
                              : 'unchecked'
                            : 'bullet';
                      },
                    },
                  ]);
                  y(z, [
                    {
                      key: 'format',
                      value: function (e, f) {
                        0 < this.children.length &&
                          this.children.tail.format(e, f);
                      },
                    },
                    {
                      key: 'formats',
                      value: function () {
                        var e = {},
                          f = this.statics.blotName,
                          h = this.statics.formats(this.domNode);
                        f in e
                          ? Object.defineProperty(e, f, {
                              value: h,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (e[f] = h);
                        return e;
                      },
                    },
                    {
                      key: 'insertBefore',
                      value: function (e, f) {
                        e instanceof w
                          ? r(
                              z.prototype.__proto__ ||
                                Object.getPrototypeOf(z.prototype),
                              'insertBefore',
                              this
                            ).call(this, e, f)
                          : ((f = null == f ? this.length() : f.offset(this)),
                            (f = this.split(f)),
                            f.parent.insertBefore(e, f));
                      },
                    },
                    {
                      key: 'optimize',
                      value: function (e) {
                        r(
                          z.prototype.__proto__ ||
                            Object.getPrototypeOf(z.prototype),
                          'optimize',
                          this
                        ).call(this, e);
                        e = this.next;
                        null != e &&
                          e.prev === this &&
                          e.statics.blotName === this.statics.blotName &&
                          e.domNode.tagName === this.domNode.tagName &&
                          e.domNode.getAttribute('data-checked') ===
                            this.domNode.getAttribute('data-checked') &&
                          (e.moveChildren(this), e.remove());
                      },
                    },
                    {
                      key: 'replace',
                      value: function (e) {
                        if (e.statics.blotName !== this.statics.blotName) {
                          var f = n.default.create(this.statics.defaultChild);
                          e.moveChildren(f);
                          this.appendChild(f);
                        }
                        r(
                          z.prototype.__proto__ ||
                            Object.getPrototypeOf(z.prototype),
                          'replace',
                          this
                        ).call(this, e);
                      },
                    },
                  ]);
                  return z;
                })(ea.default);
                ba.blotName = 'list';
                ba.scope = n.default.Scope.BLOCK_BLOT;
                ba.tagName = ['OL', 'UL'];
                ba.defaultChild = 'list-item';
                ba.allowedChildren = [w];
                ca.ListItem = w;
                ca.default = ba;
              },
              function (h, ca, ea) {
                function z(h, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    );
                  h.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: h,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(h, e)
                      : (h.__proto__ = e));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                    var f = (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !f ||
                      ('object' !== typeof f && 'function' !== typeof f)
                      ? this
                      : f;
                  }
                  z(e, h);
                  return e;
                })(
                  (function (h) {
                    return h && h.__esModule ? h : { default: h };
                  })(ea(56)).default
                );
                h.blotName = 'italic';
                h.tagName = ['EM', 'I'];
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, h) {
                  if ('function' !== typeof h && null !== h)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof h
                    );
                  e.prototype = Object.create(h && h.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  h &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, h)
                      : (e.__proto__ = h));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var r = f[h];
                        r.enumerable = r.enumerable || !1;
                        r.configurable = !0;
                        'value' in r && (r.writable = !0);
                        Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  e = function w(e, h, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, h);
                    if (void 0 === r) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return w(e, h, n);
                    } else {
                      if ('value' in r) return r.value;
                      h = r.get;
                      return void 0 === h ? void 0 : h.call(n);
                    }
                  };
                h = (function (h) {
                  function r() {
                    if (!(this instanceof r))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (r.__proto__ || Object.getPrototypeOf(r)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(r, h);
                  x(r, null, [
                    {
                      key: 'create',
                      value: function (h) {
                        return 'super' === h
                          ? document.createElement('sup')
                          : 'sub' === h
                          ? document.createElement('sub')
                          : e(
                              r.__proto__ || Object.getPrototypeOf(r),
                              'create',
                              this
                            ).call(this, h);
                      },
                    },
                    {
                      key: 'formats',
                      value: function (e) {
                        if ('SUB' === e.tagName) return 'sub';
                        if ('SUP' === e.tagName) return 'super';
                      },
                    },
                  ]);
                  return r;
                })(
                  (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(6)).default
                );
                h.blotName = 'script';
                h.tagName = ['SUB', 'SUP'];
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(h, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    );
                  h.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: h,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(h, e)
                      : (h.__proto__ = e));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                    var f = (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !f ||
                      ('object' !== typeof f && 'function' !== typeof f)
                      ? this
                      : f;
                  }
                  z(e, h);
                  return e;
                })(
                  (function (h) {
                    return h && h.__esModule ? h : { default: h };
                  })(ea(6)).default
                );
                h.blotName = 'strike';
                h.tagName = 'S';
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(h, e) {
                  if ('function' !== typeof e && null !== e)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof e
                    );
                  h.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: h,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(h, e)
                      : (h.__proto__ = e));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                h = (function (h) {
                  function e() {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function');
                    var f = (e.__proto__ || Object.getPrototypeOf(e)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !f ||
                      ('object' !== typeof f && 'function' !== typeof f)
                      ? this
                      : f;
                  }
                  z(e, h);
                  return e;
                })(
                  (function (h) {
                    return h && h.__esModule ? h : { default: h };
                  })(ea(6)).default
                );
                h.blotName = 'underline';
                h.tagName = 'U';
                ca.default = h;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, r) {
                      h && e(f.prototype, h);
                      r && e(f, r);
                      return f;
                    };
                  })(),
                  e = function ia(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ia(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(ea(0));
                var f = ea(27),
                  y = ['alt', 'height', 'width'];
                ea = (function (h) {
                  function n() {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (n.__proto__ || Object.getPrototypeOf(n)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(n, h);
                  x(
                    n,
                    [
                      {
                        key: 'format',
                        value: function (f, h) {
                          -1 < y.indexOf(f)
                            ? h
                              ? this.domNode.setAttribute(f, h)
                              : this.domNode.removeAttribute(f)
                            : e(
                                n.prototype.__proto__ ||
                                  Object.getPrototypeOf(n.prototype),
                                'format',
                                this
                              ).call(this, f, h);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (f) {
                          var h = e(
                            n.__proto__ || Object.getPrototypeOf(n),
                            'create',
                            this
                          ).call(this, f);
                          'string' === typeof f &&
                            h.setAttribute('src', this.sanitize(f));
                          return h;
                        },
                      },
                      {
                        key: 'formats',
                        value: function (e) {
                          return y.reduce(function (f, h) {
                            e.hasAttribute(h) && (f[h] = e.getAttribute(h));
                            return f;
                          }, {});
                        },
                      },
                      {
                        key: 'match',
                        value: function (e) {
                          return (
                            /\.(jpe?g|gif|png)$/.test(e) ||
                            /^data:image\/.+;base64/.test(e)
                          );
                        },
                      },
                      {
                        key: 'sanitize',
                        value: function (e) {
                          return (0, f.sanitize)(e, ['http', 'https', 'data'])
                            ? e
                            : '//:0';
                        },
                      },
                      {
                        key: 'value',
                        value: function (e) {
                          return e.getAttribute('src');
                        },
                      },
                    ]
                  );
                  return n;
                })(h.default.Embed);
                ea.blotName = 'image';
                ea.tagName = 'IMG';
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                var x = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, r) {
                      h && e(f.prototype, h);
                      r && e(f, r);
                      return f;
                    };
                  })(),
                  e = function ia(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ia(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(4);
                var f = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(ea(27)),
                  y = ['height', 'width'];
                ea = (function (h) {
                  function n() {
                    if (!(this instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                    var e = (n.__proto__ || Object.getPrototypeOf(n)).apply(
                      this,
                      arguments
                    );
                    if (!this)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !e ||
                      ('object' !== typeof e && 'function' !== typeof e)
                      ? this
                      : e;
                  }
                  z(n, h);
                  x(
                    n,
                    [
                      {
                        key: 'format',
                        value: function (f, h) {
                          -1 < y.indexOf(f)
                            ? h
                              ? this.domNode.setAttribute(f, h)
                              : this.domNode.removeAttribute(f)
                            : e(
                                n.prototype.__proto__ ||
                                  Object.getPrototypeOf(n.prototype),
                                'format',
                                this
                              ).call(this, f, h);
                        },
                      },
                    ],
                    [
                      {
                        key: 'create',
                        value: function (f) {
                          var h = e(
                            n.__proto__ || Object.getPrototypeOf(n),
                            'create',
                            this
                          ).call(this, f);
                          h.setAttribute('frameborder', '0');
                          h.setAttribute('allowfullscreen', !0);
                          h.setAttribute('src', this.sanitize(f));
                          return h;
                        },
                      },
                      {
                        key: 'formats',
                        value: function (e) {
                          return y.reduce(function (f, h) {
                            e.hasAttribute(h) && (f[h] = e.getAttribute(h));
                            return f;
                          }, {});
                        },
                      },
                      {
                        key: 'sanitize',
                        value: function (e) {
                          return f.default.sanitize(e);
                        },
                      },
                      {
                        key: 'value',
                        value: function (e) {
                          return e.getAttribute('src');
                        },
                      },
                    ]
                  );
                  return n;
                })(h.BlockEmbed);
                ea.blotName = 'video';
                ea.className = 'ql-video';
                ea.tagName = 'IFRAME';
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.FormulaBlot = void 0;
                var y = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  r = function ka(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ka(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(35);
                h = z(h);
                var n = ea(5),
                  w = z(n);
                ea = ea(9);
                ea = z(ea);
                var aa = (function (h) {
                  function n() {
                    x(this, n);
                    return e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(n, h);
                  y(n, null, [
                    {
                      key: 'create',
                      value: function (e) {
                        var f = r(
                          n.__proto__ || Object.getPrototypeOf(n),
                          'create',
                          this
                        ).call(this, e);
                        'string' === typeof e &&
                          (window.katex.render(e, f, {
                            throwOnError: !1,
                            errorColor: '#f00',
                          }),
                          f.setAttribute('data-value', e));
                        return f;
                      },
                    },
                    {
                      key: 'value',
                      value: function (e) {
                        return e.getAttribute('data-value');
                      },
                    },
                  ]);
                  return n;
                })(h.default);
                aa.blotName = 'formula';
                aa.className = 'ql-formula';
                aa.tagName = 'SPAN';
                ea = (function (h) {
                  function n() {
                    x(this, n);
                    var f = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this)
                    );
                    if (null == window.katex)
                      throw Error('Formula module requires KaTeX.');
                    return f;
                  }
                  f(n, h);
                  y(n, null, [
                    {
                      key: 'register',
                      value: function () {
                        w.default.register(aa, !0);
                      },
                    },
                  ]);
                  return n;
                })(ea.default);
                ca.FormulaBlot = aa;
                ca.default = ea;
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.CodeToken = ca.CodeBlock = void 0;
                var y = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })(),
                  r = function ja(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return ja(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  };
                h = ea(0);
                h = z(h);
                var n = ea(5),
                  w = z(n);
                n = ea(9);
                n = z(n);
                ea = ea(13);
                var aa = (function (h) {
                  function n() {
                    x(this, n);
                    return e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).apply(
                        this,
                        arguments
                      )
                    );
                  }
                  f(n, h);
                  y(n, [
                    {
                      key: 'replaceWith',
                      value: function (e) {
                        this.domNode.textContent = this.domNode.textContent;
                        this.attach();
                        r(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'replaceWith',
                          this
                        ).call(this, e);
                      },
                    },
                    {
                      key: 'highlight',
                      value: function (e) {
                        var f = this.domNode.textContent;
                        if (this.cachedText !== f) {
                          if (0 < f.trim().length || null == this.cachedText)
                            (this.domNode.innerHTML = e(f)),
                              this.domNode.normalize(),
                              this.attach();
                          this.cachedText = f;
                        }
                      },
                    },
                  ]);
                  return n;
                })(z(ea).default);
                aa.className = 'ql-syntax';
                var da = new h.default.Attributor.Class('token', 'hljs', {
                  scope: h.default.Scope.INLINE,
                });
                ea = (function (h) {
                  function n(f, h) {
                    x(this, n);
                    var r = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, f, h)
                    );
                    if ('function' !== typeof r.options.highlight)
                      throw Error(
                        'Syntax module requires highlight.js. Please include the library on the page before Quill.'
                      );
                    var y = null;
                    r.quill.on(w.default.events.SCROLL_OPTIMIZE, function () {
                      clearTimeout(y);
                      y = setTimeout(function () {
                        r.highlight();
                        y = null;
                      }, r.options.interval);
                    });
                    r.highlight();
                    return r;
                  }
                  f(n, h);
                  y(n, null, [
                    {
                      key: 'register',
                      value: function () {
                        w.default.register(da, !0);
                        w.default.register(aa, !0);
                      },
                    },
                  ]);
                  y(n, [
                    {
                      key: 'highlight',
                      value: function () {
                        var e = this;
                        if (!this.quill.selection.composing) {
                          this.quill.update(w.default.sources.USER);
                          var f = this.quill.getSelection();
                          this.quill.scroll
                            .descendants(aa)
                            .forEach(function (f) {
                              f.highlight(e.options.highlight);
                            });
                          this.quill.update(w.default.sources.SILENT);
                          null != f &&
                            this.quill.setSelection(
                              f,
                              w.default.sources.SILENT
                            );
                        }
                      },
                    },
                  ]);
                  return n;
                })(n.default);
                ea.DEFAULTS = {
                  highlight: (function () {
                    return null == window.hljs
                      ? null
                      : function (e) {
                          return window.hljs.highlightAuto(e).value;
                        };
                  })(),
                  interval: 1e3,
                };
                ca.CodeBlock = aa;
                ca.CodeToken = da;
                ca.default = ea;
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
              },
              function (h) {
                h.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
              },
              function (h, ca, ea) {
                function z(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, f) {
                  if (!(e instanceof f))
                    throw new TypeError('Cannot call a class as a function');
                }
                function e(e, f) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !f ||
                    ('object' !== typeof f && 'function' !== typeof f)
                    ? e
                    : f;
                }
                function f(e, f) {
                  if ('function' !== typeof f && null !== f)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof f
                    );
                  e.prototype = Object.create(f && f.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  });
                  f &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, f)
                      : (e.__proto__ = f));
                }
                Object.defineProperty(ca, '__esModule', { value: !0 });
                ca.default = ca.BubbleTooltip = void 0;
                var y = function sa(e, f, h) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 === n) {
                      if (((e = Object.getPrototypeOf(e)), null !== e))
                        return sa(e, f, h);
                    } else {
                      if ('value' in n) return n.value;
                      f = n.get;
                      return void 0 === f ? void 0 : f.call(h);
                    }
                  },
                  r = (function () {
                    function e(e, f) {
                      for (var h = 0; h < f.length; h++) {
                        var n = f[h];
                        n.enumerable = n.enumerable || !1;
                        n.configurable = !0;
                        'value' in n && (n.writable = !0);
                        Object.defineProperty(e, n.key, n);
                      }
                    }
                    return function (f, h, n) {
                      h && e(f.prototype, h);
                      n && e(f, n);
                      return f;
                    };
                  })();
                h = ea(3);
                h = z(h);
                var n = ea(8),
                  w = z(n);
                n = ea(43);
                var ba = z(n),
                  aa = ea(15);
                ea = ea(41);
                var da = z(ea),
                  fa = [
                    ['bold', 'italic', 'link'],
                    [{ header: 1 }, { header: 2 }, 'blockquote'],
                  ];
                ea = (function (h) {
                  function n(f, h) {
                    x(this, n);
                    null != h.modules.toolbar &&
                      null == h.modules.toolbar.container &&
                      (h.modules.toolbar.container = fa);
                    f = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, f, h)
                    );
                    f.quill.container.classList.add('ql-bubble');
                    return f;
                  }
                  f(n, h);
                  r(n, [
                    {
                      key: 'extendToolbar',
                      value: function (e) {
                        this.tooltip = new ha(this.quill, this.options.bounds);
                        this.tooltip.root.appendChild(e.container);
                        this.buildButtons(
                          [].slice.call(e.container.querySelectorAll('button')),
                          da.default
                        );
                        this.buildPickers(
                          [].slice.call(e.container.querySelectorAll('select')),
                          da.default
                        );
                      },
                    },
                  ]);
                  return n;
                })(ba.default);
                ea.DEFAULTS = (0, h.default)(!0, {}, ba.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function (e) {
                          e
                            ? this.quill.theme.tooltip.edit()
                            : this.quill.format('link', !1);
                        },
                      },
                    },
                  },
                });
                var ha = (function (h) {
                  function n(f, h) {
                    x(this, n);
                    var r = e(
                      this,
                      (n.__proto__ || Object.getPrototypeOf(n)).call(this, f, h)
                    );
                    r.quill.on(
                      w.default.events.EDITOR_CHANGE,
                      function (e, f, h, n) {
                        e === w.default.events.SELECTION_CHANGE &&
                          (null != f &&
                          0 < f.length &&
                          n === w.default.sources.USER
                            ? (r.show(),
                              (r.root.style.left = '0px'),
                              (r.root.style.width = ''),
                              (r.root.style.width = r.root.offsetWidth + 'px'),
                              (e = r.quill.getLines(f.index, f.length)),
                              1 === e.length
                                ? r.position(r.quill.getBounds(f))
                                : ((h = e[e.length - 1]),
                                  (e = r.quill.getIndex(h)),
                                  (f = Math.min(
                                    h.length() - 1,
                                    f.index + f.length - e
                                  )),
                                  (f = r.quill.getBounds(new aa.Range(e, f))),
                                  r.position(f)))
                            : document.activeElement !== r.textbox &&
                              r.quill.hasFocus() &&
                              r.hide());
                      }
                    );
                    return r;
                  }
                  f(n, h);
                  r(n, [
                    {
                      key: 'listen',
                      value: function () {
                        var e = this;
                        y(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'listen',
                          this
                        ).call(this);
                        this.root
                          .querySelector('.ql-close')
                          .addEventListener('click', function () {
                            e.root.classList.remove('ql-editing');
                          });
                        this.quill.on(
                          w.default.events.SCROLL_OPTIMIZE,
                          function () {
                            setTimeout(function () {
                              if (!e.root.classList.contains('ql-hidden')) {
                                var f = e.quill.getSelection();
                                null != f && e.position(e.quill.getBounds(f));
                              }
                            }, 1);
                          }
                        );
                      },
                    },
                    {
                      key: 'cancel',
                      value: function () {
                        this.show();
                      },
                    },
                    {
                      key: 'position',
                      value: function (e) {
                        e = y(
                          n.prototype.__proto__ ||
                            Object.getPrototypeOf(n.prototype),
                          'position',
                          this
                        ).call(this, e);
                        var f = this.root.querySelector('.ql-tooltip-arrow');
                        f.style.marginLeft = '';
                        if (0 === e) return e;
                        f.style.marginLeft = -1 * e - f.offsetWidth / 2 + 'px';
                      },
                    },
                  ]);
                  return n;
                })(n.BaseTooltip);
                ha.TEMPLATE =
                  '<span class="ql-tooltip-arrow"></span><div class="ql-tooltip-editor"><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-close"></a></div>';
                ca.BubbleTooltip = ha;
                ca.default = ea;
              },
              function (h, ca, ea) {
                h.exports = ea(63);
              },
            ])['default'];
          });
        }.call(this, h(368).Buffer));
      },
    },
  ]);
}.call(this || window));
