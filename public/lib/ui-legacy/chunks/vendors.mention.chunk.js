(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    474: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var u in n)
              Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
          }
          return e;
        };
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var o = (t.keys = function (e) {
        return e === Object(e) ? Object.keys(e) : [];
      });
      t.values = function (e) {
        return e === Object(e) ? Object.values(e) : [];
      };
      function s(e, t) {
        var n = i({}, e);
        return (
          a(e) &&
            a(t) &&
            o(t).forEach(function (u) {
              a(t[u]) && u in e ? (n[u] = s(e[u], t[u])) : i(n, r({}, u, t[u]));
            }),
          n
        );
      }
      t.merge = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), u = 1;
          u < t;
          u++
        )
          n[u - 1] = arguments[u];
        return n.reduce(function (e, t) {
          return s(e, t);
        }, e);
      };
      var i = (t.assign = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), u = 1;
          u < t;
          u++
        )
          n[u - 1] = arguments[u];
        return Object.assign.apply(Object, [e].concat(n));
      });
      t.identity = function (e) {
        return e;
      };
      t.omit = function (e, t) {
        var n = (function (e, t) {
          var n = {};
          for (var u in e)
            t.indexOf(u) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, u) && (n[u] = e[u]));
          return n;
        })(u({}, e), []);
        if (t) {
          var r = !0,
            o = !1,
            s = void 0;
          try {
            for (
              var i, a = t[Symbol.iterator]();
              !(r = (i = a.next()).done);
              r = !0
            ) {
              delete n[i.value];
            }
          } catch (e) {
            (o = !0), (s = e);
          } finally {
            try {
              !r && a.return && a.return();
            } finally {
              if (o) throw s;
            }
          }
        }
        return n;
      };
      var a = (t.isPlainObject = function (e) {
        return !(e !== Object(e) || e instanceof Date || Array.isArray(e));
      });
      t.compact = function (e) {
        return (e || []).filter(Boolean);
      };
    },
    484: function (e, t, n) {
      'use strict';
      e.exports = function (e, t, n, u, r, o, s, i) {
        if (!e) {
          var a;
          if (void 0 === t)
            a = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var l = [n, u, r, o, s, i],
              c = 0;
            (a = new Error(
              t.replace(/%s/g, function () {
                return l[c++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((a.framesToPop = 1), a);
        }
      };
    },
    485: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
            }
            return e;
          },
        r = f(n(484)),
        o = n(474),
        s = f(n(486)),
        i = n(487),
        a = n(488),
        l = f(n(489)),
        c = f(n(504));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var d = function (e) {
          var t = e && (0, o.keys)(e)[0];
          return t && t.split('__')[0].split('--')[0];
        },
        g = function (e, t, n) {
          if (e) {
            var u = e.split(' ')[0],
              r = [].concat(
                p(
                  0 === t.length
                    ? n.map(function (e) {
                        return u + '--' + e.substring(1);
                      })
                    : []
                ),
                p(
                  t.map(function (e) {
                    return u + '__' + e;
                  })
                )
              );
            return 0 === t.length ? [e].concat(p(r)) : r;
          }
        };
      (t.default = function e(t) {
        var n = t.style,
          f = t.className,
          E = t.classNames,
          h =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.default,
          y = f || d(E),
          v =
            'function' == typeof n
              ? n
              : (0, c.default)(function (t, s) {
                  var c = (0, l.default)(t);
                  (0, r.default)(
                    Array.isArray(c),
                    'First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value.'
                  ),
                    (0, r.default)(
                      !s || (0, o.isPlainObject)(s),
                      'Optional second parameter must be a plain object.'
                    );
                  var f = c.filter(a.isModifier),
                    d = c.filter(a.isElement),
                    v =
                      d.length > 0
                        ? function (e) {
                            return (0, o.values)((0, i.pickNestedStyles)(e, d));
                          }
                        : function (e) {
                            return [e];
                          },
                    b = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return v((0, i.hoistModifierStylesRecursive)(e, f));
                    },
                    m = g(y, d, f);
                  return e(
                    u(
                      {},
                      (n || s) && {
                        style: o.merge.apply(
                          void 0,
                          [{}].concat(p(b(s)), p(b(n)))
                        ),
                      },
                      m && { className: m.join(' ') },
                      E && { classNames: E }
                    ),
                    h
                  );
                }),
          b = u({}, 'function' == typeof n ? n : { style: n }),
          m = [].concat(
            p(b.className ? b.className.split(' ') : []),
            p(y ? y.split(' ') : [])
          ),
          A = E
            ? (0, o.compact)(
                m.map(function (e) {
                  return E[e];
                })
              )
            : m,
          C = h(u({}, b, A.length > 0 ? { className: A.join(' ') } : {}));
        return (0, o.assign)(v, C), v;
      }),
        (e.exports = t.default);
    },
    486: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
            }
            return e;
          },
        r = n(487),
        o = ['animationName'];
      (t.default = function (e) {
        var t = e.style,
          n = e.className;
        return u(
          {},
          t ? { style: (0, r.pickDirectStyles)(t, o) } : {},
          n ? { className: n } : {}
        );
      }),
        (e.exports = t.default);
    },
    487: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.hoistModifierStylesRecursive = t.pickNestedStyles = t.pickDirectStyles = void 0);
      var u = n(474),
        r = n(488);
      var o = function (e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        },
        s =
          ((t.pickDirectStyles = function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = (0, u.keys)(e),
                r = {},
                o = 0,
                s = n.length;
              o < s;
              o += 1
            ) {
              var i = n[o],
                a =
                  '[object Object]' !== Object.prototype.toString.call(e[i]) ||
                  ':' === i[0] ||
                  '@' === i[0] ||
                  t.indexOf(i) >= 0;
              a && (r[i] = e[i]);
            }
            return r;
          }),
          (t.pickNestedStyles = function (e, t) {
            for (
              var n = t.map(o), r = (0, u.keys)(e), s = {}, i = 0, a = r.length;
              i < a;
              i += 1
            ) {
              var l = r[i];
              (t.indexOf(l) >= 0 || n.indexOf(o(l)) >= 0) && (s[l] = e[l]);
            }
            return s;
          }));
      t.hoistModifierStylesRecursive = function e(t, n) {
        for (
          var o = u.merge.apply(
              void 0,
              [{}, (0, u.omit)(t, n)].concat(
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })((0, u.values)(s(t, n)))
              )
            ),
            i = (0, u.keys)(o).filter(r.isModifier),
            a = 0,
            l = i.length;
          a < l;
          a += 1
        ) {
          var c = i[a],
            f = e(o[c], n);
          n.indexOf(c) >= 0
            ? (delete o[c], (o = (0, u.merge)({}, o, f)))
            : (o[c] = f);
        }
        return o;
      };
    },
    488: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = (t.isModifier = function (e) {
        return '&' === e[0];
      });
      t.isElement = function (e) {
        return !u(e);
      };
    },
    489: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = n(474);
      (t.default = function (e) {
        if (!e) return [];
        if ('string' == typeof e) return [e];
        if (!Array.isArray(e)) {
          var t = e;
          return (0, u.keys)(e).reduce(function (e, n) {
            return e.concat(t[n] ? [n] : []);
          }, []);
        }
        return e;
      }),
        (e.exports = t.default);
    },
    490: function (e, t, n) {
      'use strict';
      var u;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ContextTypes = t.PropTypes = t.PROPS_DECORATOR_CONTEXT_NAME = t.ENHANCER_CONTEXT_NAME = void 0);
      var r,
        o = n(1),
        s = (r = o) && r.__esModule ? r : { default: r };
      !(function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        t.default = e;
      })(n(0));
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var a = (t.ENHANCER_CONTEXT_NAME = '__substyle__enhancer'),
        l = (t.PROPS_DECORATOR_CONTEXT_NAME = '__substyle__propsDecorator'),
        c = s.default.oneOfType([s.default.func, s.default.object]),
        f = s.default.objectOf(s.default.string);
      (t.PropTypes = {
        style: c,
        className: s.default.string,
        classNames: f,
        innerRef: s.default.oneOfType([
          s.default.func,
          s.default.shape({
            current:
              'undefined' == typeof Element
                ? s.default.any
                : s.default.instanceOf(Element),
          }),
        ]),
      }),
        (t.ContextTypes =
          (i((u = {}), a, s.default.func), i(u, l, s.default.func), u));
    },
    503: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.defaultPropsDecorator = t.defaultStyle = t.EnhancerProvider = t.createSubstyle = void 0);
      var u = i(n(485)),
        r = i(n(505)),
        o = i(n(507)),
        s = i(n(486));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.createSubstyle = u.default),
        (t.EnhancerProvider = o.default),
        (t.defaultStyle = r.default),
        (t.defaultPropsDecorator = s.default),
        (t.default = (0, r.default)());
    },
    504: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u,
        r = n(489),
        o = (u = r) && u.__esModule ? u : { default: u };
      var s = {};
      (t.default = function (e) {
        return function (t, n) {
          var u = n || s;
          e.memoize = e.memoize || new WeakMap();
          var r = void 0;
          e.memoize.has(u)
            ? (r = e.memoize.get(u))
            : ((r = {}), e.memoize.set(u, r));
          var i = (0, o.default)(t).join(' ');
          return i in r ? r[i] : (r[i] = e(t || [], n));
        };
      }),
        (e.exports = t.default);
    },
    505: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var u = t[n];
              (u.enumerable = u.enumerable || !1),
                (u.configurable = !0),
                'value' in u && (u.writable = !0),
                Object.defineProperty(e, u.key, u);
            }
          }
          return function (t, n, u) {
            return n && e(t.prototype, n), u && e(t, u), t;
          };
        })(),
        o = n(0),
        s = f(n(183)),
        i = f(n(506)),
        a = n(474),
        l = f(n(485)),
        c = n(490);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p(e, t) {
        var n = {};
        for (var u in e)
          t.indexOf(u) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, u) && (n[u] = e[u]));
        return n;
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function E(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var h = function (e) {
        return e.prototype && !e.prototype.render;
      };
      (t.default = function (e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : function () {
                return !0;
              };
        return function (f) {
          var y = (function (s) {
              function y(t, n) {
                d(this, y);
                var u = g(
                  this,
                  (y.__proto__ || Object.getPrototypeOf(y)).call(this, t, n)
                );
                u.setWrappedInstance = function (e) {
                  u.wrappedInstance = e;
                  var t = u.props.innerRef;
                  'function' == typeof t
                    ? t(e)
                    : t && 'string' != typeof t && (t.current = e);
                };
                var r = t.style,
                  o = t.className,
                  s = t.classNames,
                  i =
                    (t.innerRef,
                    p(t, ['style', 'className', 'classNames', 'innerRef']));
                return (
                  (u.substyle = (0, l.default)(
                    { style: r, className: o, classNames: s },
                    u.context[c.PROPS_DECORATOR_CONTEXT_NAME]
                  )),
                  'function' == typeof e && (u.defaultStyle = e(i)),
                  u
                );
              }
              return (
                E(y, s),
                r(y, [
                  {
                    key: 'shouldComponentUpdate',
                    value: function (t) {
                      var u = t.style,
                        r = t.className,
                        o = t.classNames,
                        s = p(t, ['style', 'className', 'classNames']),
                        i = this.props,
                        a = i.style,
                        f = i.className,
                        d = i.classNames,
                        g =
                          (i.innerRef,
                          p(i, [
                            'style',
                            'className',
                            'classNames',
                            'innerRef',
                          ]));
                      return (
                        (u === a && r === f && o === d) ||
                          (this.substyle = (0, l.default)(
                            { style: u, className: r, classNames: o },
                            this.context[c.PROPS_DECORATOR_CONTEXT_NAME]
                          )),
                        'function' == typeof e &&
                          n(s, g) &&
                          (this.defaultStyle = e(s)),
                        !0
                      );
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var n = this.props,
                        r =
                          (n.innerRef,
                          n.style,
                          n.className,
                          n.classNames,
                          p(n, [
                            'innerRef',
                            'style',
                            'className',
                            'classNames',
                          ])),
                        s = this.getWrappedComponent(),
                        i = t ? t(r) : [];
                      return (0, o.createElement)(
                        s,
                        u(
                          {
                            style: this.substyle(i, this.defaultStyle || e),
                            ref: h(s) ? void 0 : this.setWrappedInstance,
                          },
                          r
                        )
                      );
                    },
                  },
                  {
                    key: 'getWrappedComponent',
                    value: function () {
                      var e = this.context[c.ENHANCER_CONTEXT_NAME],
                        t = void 0 === e ? a.identity : e;
                      return (
                        this.memoizedEnhance !== t &&
                          ((this.memoizedEnhance = t),
                          (this.enhancedWrappedComponent = t(f)),
                          this.enhancedWrappedComponent.propTypes &&
                            (this.enhancedWrappedComponent.propTypes = u(
                              {},
                              this.enhancedWrappedComponent.propTypes,
                              { style: c.PropTypes.style }
                            ))),
                        this.enhancedWrappedComponent || f
                      );
                    },
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function () {
                      return (
                        (0, i.default)(
                          !0,
                          '`getWrappedInstance()` is deprecated and will be removed with the next major release. Instead, use the `innerRef` prop to get a ref to the wrapped instance.'
                        ),
                        this.wrappedInstance
                      );
                    },
                  },
                ]),
                y
              );
            })(o.Component),
            v = f.displayName || f.name;
          return (
            (y.displayName = 'withDefaultStyle(' + v + ')'),
            (y.propTypes = u({}, f.propTypes, c.PropTypes)),
            (y.contextTypes = c.ContextTypes),
            (y.WrappedComponent = f),
            (0, s.default)(y, f)
          );
        };
      }),
        (e.exports = t.default);
    },
    506: function (e, t, n) {
      'use strict';
      e.exports = function () {};
    },
    507: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u,
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var u = t[n];
              (u.enumerable = u.enumerable || !1),
                (u.configurable = !0),
                'value' in u && (u.writable = !0),
                Object.defineProperty(e, u.key, u);
            }
          }
          return function (t, n, u) {
            return n && e(t.prototype, n), u && e(t, u), t;
          };
        })(),
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(0)),
        s = n(1),
        i = (u = s) && u.__esModule ? u : { default: u },
        a = n(490);
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var p = (function (e) {
        function t() {
          return (
            c(this, t),
            f(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: 'getChildContext',
              value: function () {
                var e;
                return (
                  l((e = {}), a.ENHANCER_CONTEXT_NAME, this.props.enhancer),
                  l(
                    e,
                    a.PROPS_DECORATOR_CONTEXT_NAME,
                    this.props.propsDecorator
                  ),
                  e
                );
              },
            },
            {
              key: 'render',
              value: function () {
                return o.Children.only(this.props.children);
              },
            },
          ]),
          t
        );
      })(o.Component);
      (t.default = p),
        (p.propTypes = {
          enhancer: i.default.func,
          propsDecorator: i.default.func,
          children: i.default.element.isRequired,
        }),
        (p.childContextTypes = a.ContextTypes),
        (p.displayName = 'EnhancerProvider'),
        (e.exports = t.default);
    },
    538: function (e, t, n) {
      'use strict';
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
            }
            return e;
          }).apply(this, arguments);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var u = t[n];
          (u.enumerable = u.enumerable || !1),
            (u.configurable = !0),
            'value' in u && (u.writable = !0),
            Object.defineProperty(e, u.key, u);
        }
      }
      function i(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' === a(Symbol.iterator)
            ? function (e) {
                return a(e);
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : a(e);
              })(e);
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e, t) {
        return !t || ('object' !== l(t) && 'function' != typeof t) ? c(e) : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && d(e, t);
      }
      function E(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, 'a', function () {
        return Ee;
      }),
        n.d(t, 'b', function () {
          return ge;
        });
      var h = n(0),
        y = n.n(h),
        v = n(484),
        b = n.n(v);
      function m(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = [],
              u = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var s, i = e[Symbol.iterator]();
                !(u = (s = i.next()).done) &&
                (n.push(s.value), !t || n.length !== t);
                u = !0
              );
            } catch (e) {
              (r = !0), (o = e);
            } finally {
              try {
                u || null == i.return || i.return();
              } finally {
                if (r) throw o;
              }
            }
            return n;
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          })()
        );
      }
      var A = n(1),
        C = n.n(A),
        O = n(503),
        F = n.n(O),
        D = n(57),
        S = n.n(D),
        w = function (e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        _ = '__id__',
        P = '__display__',
        j = function (e, t) {
          b()(
            'id' === t || 'display' === t,
            'Second arg must be either "id" or "display", got: "'.concat(t, '"')
          );
          var n = e.indexOf(P),
            u = e.indexOf(_);
          return (
            n < 0 && (n = null),
            u < 0 && (u = null),
            b()(
              null !== n || null !== u,
              "The markup '".concat(
                e,
                "' does not contain either of the placeholders '__id__' or '__display__'"
              )
            ),
            null !== n && null !== u
              ? ('id' === t && u <= n) || ('display' === t && n <= u)
                ? 0
                : 1
              : 0
          );
        },
        T = function (e) {
          var t = /^\/(.+)\/(\w+)?$/;
          return new RegExp(
            e
              .map(function (e) {
                var n = m(t.exec(e.toString()), 3),
                  u = n[1],
                  r = n[2];
                return (
                  b()(
                    !r,
                    'RegExp flags are not supported. Change /'
                      .concat(u, '/')
                      .concat(r, ' into /')
                      .concat(u, '/')
                  ),
                  '('.concat(u, ')')
                );
              })
              .join('|'),
            'g'
          );
        },
        R = function (e) {
          var t = 0;
          return (
            e.indexOf('__id__') >= 0 && t++,
            e.indexOf('__display__') >= 0 && t++,
            t
          );
        },
        x = function () {},
        B = function (e, t, n) {
          for (
            var u,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : x,
              o = T(
                t.map(function (e) {
                  return e.regex;
                })
              ),
              s = 2,
              i = t.map(function (e) {
                var t = e.markup,
                  n = s;
                return (s += R(t) + 1), n;
              }),
              a = 0,
              l = 0;
            null !== (u = o.exec(e));

          ) {
            var c = i.find(function (e) {
                return !!u[e];
              }),
              f = i.indexOf(c),
              p = t[f],
              d = p.markup,
              g = p.displayTransform,
              E = c + j(d, 'id'),
              h = c + j(d, 'display'),
              y = u[E],
              v = g(y, u[h]),
              b = e.substring(a, u.index);
            r(b, a, l),
              (l += b.length),
              n(u[0], u.index, l, y, v, f, a),
              (l += v.length),
              (a = o.lastIndex);
          }
          a < e.length && r(e.substring(a), a, l);
        },
        N = function (e, t) {
          var n = '';
          return (
            B(
              e,
              t,
              function (e, t, u, r, o) {
                n += o;
              },
              function (e) {
                n += e;
              }
            ),
            n
          );
        },
        k = function (e, t, n) {
          var u,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 'START';
          if ('number' != typeof n) return n;
          var o = function (e, t, r) {
              void 0 === u && r + e.length >= n && (u = t + n - r);
            },
            s = function (e, t, o, s, i, a, l) {
              void 0 === u &&
                o + i.length > n &&
                (u = 'NULL' === r ? null : t + ('END' === r ? e.length : 0));
            };
          return B(e, t, s, o), void 0 === u ? e.length : u;
        },
        M = function (e, t, n, u) {
          return e.substring(0, t) + u + e.substring(n);
        },
        I = function (e, t) {
          var n = [];
          return (
            B(e, t, function (e, t, u, r, o, s, i) {
              n.push({
                id: r,
                display: o,
                childIndex: s,
                index: t,
                plainTextIndex: u,
              });
            }),
            n
          );
        },
        L = function (e) {
          return Object.values(e).reduce(function (e, t) {
            return e + t.results.length;
          }, 0);
        },
        q = function (e) {
          var t = w(e),
            n = e[e.indexOf(P) + P.length],
            u = e[e.indexOf(P) + P.length];
          return new RegExp(
            t
              .replace(P, '([^'.concat(w(n || ''), ']+?)'))
              .replace(_, '([^'.concat(w(u || ''), ']+?)'))
          );
        },
        H = function (e) {
          return h.Children.toArray(e).map(function (e) {
            var t = e.props,
              n = t.markup,
              u = t.regex,
              r = t.displayTransform;
            return {
              markup: n,
              regex: u ? W(u, n) : q(n),
              displayTransform:
                r ||
                function (e, t) {
                  return t || e;
                },
            };
          });
        },
        W = function (e, t) {
          var n = new RegExp(e.toString() + '|').exec('').length - 1,
            u = R(t);
          return (
            b()(
              n === u,
              'Number of capturing groups in RegExp '
                .concat(e.toString(), ' (')
                .concat(
                  n,
                  ") does not match the number of placeholders in the markup '"
                )
                .concat(t, "' (")
                .concat(u, ')')
            ),
            e
          );
        },
        U = [
          {
            base: 'A',
            letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g,
          },
          { base: 'AA', letters: /(&#42802;|[\uA732])/g },
          {
            base: 'AE',
            letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g,
          },
          { base: 'AO', letters: /(&#42804;|[\uA734])/g },
          { base: 'AU', letters: /(&#42806;|[\uA736])/g },
          { base: 'AV', letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g },
          { base: 'AY', letters: /(&#42812;|[\uA73C])/g },
          {
            base: 'B',
            letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g,
          },
          {
            base: 'C',
            letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g,
          },
          {
            base: 'D',
            letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g,
          },
          { base: 'DZ', letters: /(&#497;|&#452;|[\u01F1\u01C4])/g },
          { base: 'Dz', letters: /(&#498;|&#453;|[\u01F2\u01C5])/g },
          {
            base: 'E',
            letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g,
          },
          {
            base: 'F',
            letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g,
          },
          {
            base: 'G',
            letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g,
          },
          {
            base: 'H',
            letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g,
          },
          {
            base: 'I',
            letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g,
          },
          {
            base: 'J',
            letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g,
          },
          {
            base: 'K',
            letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g,
          },
          {
            base: 'L',
            letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g,
          },
          { base: 'LJ', letters: /(&#455;|[\u01C7])/g },
          { base: 'Lj', letters: /(&#456;|[\u01C8])/g },
          {
            base: 'M',
            letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g,
          },
          {
            base: 'N',
            letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g,
          },
          { base: 'NJ', letters: /(&#458;|[\u01CA])/g },
          { base: 'Nj', letters: /(&#459;|[\u01CB])/g },
          {
            base: 'O',
            letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g,
          },
          { base: 'OE', letters: /(&#338;|[\u0152])/g },
          { base: 'OI', letters: /(&#418;|[\u01A2])/g },
          { base: 'OO', letters: /(&#42830;|[\uA74E])/g },
          { base: 'OU', letters: /(&#546;|[\u0222])/g },
          {
            base: 'P',
            letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g,
          },
          {
            base: 'Q',
            letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g,
          },
          {
            base: 'R',
            letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g,
          },
          {
            base: 'S',
            letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g,
          },
          {
            base: 'T',
            letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g,
          },
          { base: 'TH', letters: /(&#222;|[\u00DE])/g },
          { base: 'TZ', letters: /(&#42792;|[\uA728])/g },
          {
            base: 'U',
            letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g,
          },
          {
            base: 'V',
            letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g,
          },
          { base: 'VY', letters: /(&#42848;|[\uA760])/g },
          {
            base: 'W',
            letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g,
          },
          {
            base: 'X',
            letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g,
          },
          {
            base: 'Y',
            letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g,
          },
          {
            base: 'Z',
            letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g,
          },
          {
            base: 'a',
            letters: /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g,
          },
          { base: 'aa', letters: /(&#42803;|[\uA733])/g },
          {
            base: 'ae',
            letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g,
          },
          { base: 'ao', letters: /(&#42805;|[\uA735])/g },
          { base: 'au', letters: /(&#42807;|[\uA737])/g },
          { base: 'av', letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g },
          { base: 'ay', letters: /(&#42813;|[\uA73D])/g },
          {
            base: 'b',
            letters: /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g,
          },
          {
            base: 'c',
            letters: /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g,
          },
          {
            base: 'd',
            letters: /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g,
          },
          { base: 'dz', letters: /(&#499;|&#454;|[\u01F3\u01C6])/g },
          {
            base: 'e',
            letters: /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g,
          },
          {
            base: 'f',
            letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g,
          },
          {
            base: 'g',
            letters: /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g,
          },
          {
            base: 'h',
            letters: /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g,
          },
          { base: 'hv', letters: /(&#405;|[\u0195])/g },
          {
            base: 'i',
            letters: /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g,
          },
          { base: 'ij', letters: /(&#307;|[\u0133])/g },
          {
            base: 'j',
            letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g,
          },
          {
            base: 'k',
            letters: /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g,
          },
          {
            base: 'l',
            letters: /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g,
          },
          { base: 'lj', letters: /(&#457;|[\u01C9])/g },
          {
            base: 'm',
            letters: /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g,
          },
          {
            base: 'n',
            letters: /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g,
          },
          { base: 'nj', letters: /(&#460;|[\u01CC])/g },
          {
            base: 'o',
            letters: /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g,
          },
          { base: 'oe', letters: /(&#339;|[\u0153])/g },
          { base: 'oi', letters: /(&#419;|[\u01A3])/g },
          { base: 'ou', letters: /(&#547;|[\u0223])/g },
          { base: 'oo', letters: /(&#42831;|[\uA74F])/g },
          {
            base: 'p',
            letters: /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g,
          },
          {
            base: 'q',
            letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g,
          },
          {
            base: 'r',
            letters: /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g,
          },
          {
            base: 's',
            letters: /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g,
          },
          { base: 'ss', letters: /(&#223;|[\u00DF])/g },
          {
            base: 't',
            letters: /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g,
          },
          { base: 'th', letters: /(&#254;|[\u00FE])/g },
          { base: 'tz', letters: /(&#42793;|[\uA729])/g },
          {
            base: 'u',
            letters: /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g,
          },
          {
            base: 'v',
            letters: /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g,
          },
          { base: 'vy', letters: /(&#42849;|[\uA761])/g },
          {
            base: 'w',
            letters: /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g,
          },
          {
            base: 'x',
            letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g,
          },
          {
            base: 'y',
            letters: /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g,
          },
          {
            base: 'z',
            letters: /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g,
          },
        ],
        z = function (e) {
          return (function (e) {
            var t = e;
            return (
              U.forEach(function (e) {
                t = t.replace(e.letters, e.base);
              }),
              t
            );
          })(e).toLowerCase();
        },
        V = function (e, t, n) {
          return n
            ? z(e).indexOf(z(t))
            : e.toLowerCase().indexOf(t.toLowerCase());
        },
        X = function (e, t) {
          if (!e || !t) return !1;
          var n = Object.keys(e),
            u = Object.keys(t);
          if (n.length !== u.length) return !1;
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (e[o] !== t[o]) return !1;
          }
          return !0;
        },
        K = function (e) {
          return 'number' == typeof e;
        },
        Q = function (e) {
          return e === Object(e) ? Object.keys(e) : [];
        },
        J = function (e) {
          for (
            var t,
              n = arguments.length,
              u = new Array(n > 1 ? n - 1 : 0),
              r = 1;
            r < n;
            r++
          )
            u[r - 1] = arguments[r];
          var o = (t = []).concat.apply(t, u);
          return Object.keys(e).reduce(function (t, n) {
            return (
              e.hasOwnProperty(n) &&
                !o.includes(n) &&
                void 0 !== e[n] &&
                (t[n] = e[n]),
              t
            );
          }, {});
        };
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, u);
        }
        return n;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                E(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Z = (function (e) {
        function t() {
          var e;
          return (
            o(this, t),
            ((e = f(this, p(t).apply(this, arguments))).state = {
              lastPosition: {},
            }),
            e
          );
        }
        return (
          g(t, e),
          i(t, [
            {
              key: 'componentDidMount',
              value: function () {
                this.notifyCaretPosition();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.notifyCaretPosition();
              },
            },
            {
              key: 'notifyCaretPosition',
              value: function () {
                if (this.caretRef) {
                  var e = {
                      left: this.caretRef.offsetLeft,
                      top: this.caretRef.offsetTop,
                    },
                    t = this.state.lastPosition;
                  X(t, e) ||
                    (this.setState({ lastPosition: e }),
                    this.props.onCaretPositionChange(e));
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this,
                  n = this.props,
                  u = n.selection,
                  o = n.value,
                  s = n.style,
                  i = n.inputStyle,
                  a = n.children,
                  l = H(a);
                u.start === u.end && (e = k(o, l, u.start, 'START'));
                var c = [],
                  f = {},
                  p = c,
                  d = 0;
                return (
                  B(
                    o,
                    l,
                    function (e, n, u, r, o, s, i) {
                      var a = (function (e, t) {
                        return (
                          e.hasOwnProperty(t) ? e[t]++ : (e[t] = 0),
                          t + '_' + e[t]
                        );
                      })(f, r);
                      p.push(t.getMentionComponentForMatch(r, o, s, a));
                    },
                    function (n, u, r) {
                      if (K(e) && e >= u && e <= u + n.length) {
                        var o = e - u;
                        p.push(t.renderSubstring(n.substring(0, o), d)),
                          (p = [t.renderSubstring(n.substring(o), d)]);
                      } else p.push(t.renderSubstring(n, d));
                      d++;
                    }
                  ),
                  p.push(' '),
                  p !== c && c.push(this.renderHighlighterCaret(p)),
                  y.a.createElement(
                    'div',
                    r({}, s, { style: $({}, i, {}, s.style) }),
                    c
                  )
                );
              },
            },
            {
              key: 'renderSubstring',
              value: function (e, t) {
                return y.a.createElement(
                  'span',
                  r({}, this.props.style('substring'), { key: t }),
                  e
                );
              },
            },
            {
              key: 'getMentionComponentForMatch',
              value: function (e, t, n, u) {
                var r = { id: e, display: t, key: u },
                  o = h.Children.toArray(this.props.children)[n];
                return y.a.cloneElement(o, r);
              },
            },
            {
              key: 'renderHighlighterCaret',
              value: function (e) {
                var t = this;
                return y.a.createElement(
                  'span',
                  r({}, this.props.style('caret'), {
                    ref: function (e) {
                      t.caretRef = e;
                    },
                    key: 'caret',
                  }),
                  e
                );
              },
            },
          ]),
          t
        );
      })(h.Component);
      E(Z, 'propTypes', {
        selection: C.a.shape({ start: C.a.number, end: C.a.number }).isRequired,
        value: C.a.string.isRequired,
        onCaretPositionChange: C.a.func.isRequired,
        inputStyle: C.a.object,
        children: C.a.oneOfType([C.a.element, C.a.arrayOf(C.a.element)])
          .isRequired,
      }),
        E(Z, 'defaultProps', { value: '', inputStyle: {} });
      var G = Object(O.defaultStyle)(
          {
            position: 'relative',
            width: 'inherit',
            color: 'transparent',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            '&singleLine': { whiteSpace: 'pre', wordWrap: null },
            substring: { visibility: 'hidden' },
          },
          function (e) {
            return { '&singleLine': e.singleLine };
          }
        )(Z),
        ee = (function (e) {
          function t() {
            return o(this, t), f(this, p(t).apply(this, arguments));
          }
          return (
            g(t, e),
            i(t, [
              {
                key: 'render',
                value: function () {
                  var e = J(this.props, 'style', Q(t.propTypes));
                  return y.a.createElement(
                    'li',
                    r({}, e, this.props.style),
                    this.renderContent()
                  );
                },
              },
              {
                key: 'renderContent',
                value: function () {
                  var e = this.props,
                    t = e.query,
                    n = e.renderSuggestion,
                    u = e.suggestion,
                    r = e.index,
                    o = e.focused,
                    s = this.getDisplay(),
                    i = this.renderHighlightedDisplay(s, t);
                  return n ? n(u, t, i, r, o) : i;
                },
              },
              {
                key: 'getDisplay',
                value: function () {
                  var e = this.props.suggestion;
                  if (e instanceof String) return e;
                  var t = e.id,
                    n = e.display;
                  return void 0 !== t && n ? n : t;
                },
              },
              {
                key: 'renderHighlightedDisplay',
                value: function (e) {
                  var t = this.props,
                    n = t.ignoreAccents,
                    u = t.query,
                    r = t.style,
                    o = V(e, u, n);
                  return -1 === o
                    ? y.a.createElement('span', r('display'), e)
                    : y.a.createElement(
                        'span',
                        r('display'),
                        e.substring(0, o),
                        y.a.createElement(
                          'b',
                          r('highlight'),
                          e.substring(o, o + u.length)
                        ),
                        e.substring(o + u.length)
                      );
                },
              },
            ]),
            t
          );
        })(h.Component);
      E(ee, 'propTypes', {
        id: C.a.oneOfType([C.a.string, C.a.number]).isRequired,
        query: C.a.string.isRequired,
        index: C.a.number.isRequired,
        ignoreAccents: C.a.bool,
        suggestion: C.a.oneOfType([
          C.a.string,
          C.a.shape({
            id: C.a.oneOfType([C.a.string, C.a.number]).isRequired,
            display: C.a.string,
          }),
        ]).isRequired,
        renderSuggestion: C.a.func,
        focused: C.a.bool,
      });
      var te = Object(O.defaultStyle)({ cursor: 'pointer' }, function (e) {
        return { '&focused': e.focused };
      })(ee);
      var ne = F()(function (e) {
        var t = e.style,
          n = t('spinner');
        return y.a.createElement(
          'div',
          t,
          y.a.createElement(
            'div',
            n,
            y.a.createElement('div', n(['element', 'element1'])),
            y.a.createElement('div', n(['element', 'element2'])),
            y.a.createElement('div', n(['element', 'element3'])),
            y.a.createElement('div', n(['element', 'element4'])),
            y.a.createElement('div', n(['element', 'element5']))
          )
        );
      });
      function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, u);
        }
        return n;
      }
      var re = (function (e) {
        function t() {
          return o(this, t), f(this, p(t).apply(this, arguments));
        }
        return (
          g(t, e),
          i(t, [
            {
              key: 'componentDidUpdate',
              value: function () {
                if (
                  this.suggestionsRef &&
                  !(
                    this.suggestionsRef.offsetHeight >=
                    this.suggestionsRef.scrollHeight
                  ) &&
                  this.props.scrollFocusedIntoView
                ) {
                  var e = this.suggestionsRef.scrollTop,
                    t = this.suggestionsRef.children[
                      this.props.focusIndex
                    ].getBoundingClientRect(),
                    n = t.top,
                    u = t.bottom,
                    r = this.suggestionsRef.getBoundingClientRect().top;
                  (u = u - r + e),
                    (n = n - r + e) < e
                      ? (this.suggestionsRef.scrollTop = n)
                      : u > this.suggestionsRef.offsetHeight &&
                        (this.suggestionsRef.scrollTop =
                          u - this.suggestionsRef.offsetHeight);
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.suggestions,
                  u = t.isLoading,
                  o = t.style,
                  s = t.onMouseDown;
                return 0 !== L(n) || u
                  ? y.a.createElement(
                      'div',
                      r({}, o, { onMouseDown: s }),
                      y.a.createElement(
                        'ul',
                        r(
                          {
                            ref: function (t) {
                              e.suggestionsRef = t;
                            },
                          },
                          o('list')
                        ),
                        this.renderSuggestions()
                      ),
                      this.renderLoadingIndicator()
                    )
                  : null;
              },
            },
            {
              key: 'renderSuggestions',
              value: function () {
                var e = this;
                return Object.values(this.props.suggestions).reduce(function (
                  t,
                  n
                ) {
                  var r = n.results,
                    o = n.queryInfo;
                  return [].concat(
                    u(t),
                    u(
                      r.map(function (n, u) {
                        return e.renderSuggestion(n, o, t.length + u);
                      })
                    )
                  );
                },
                []);
              },
            },
            {
              key: 'renderSuggestion',
              value: function (e, t, n) {
                var u = this,
                  r = this.getID(e),
                  o = n === this.props.focusIndex,
                  s = t.childIndex,
                  i = t.query,
                  a = h.Children.toArray(this.props.children)[s].props
                    .renderSuggestion,
                  l = this.props.ignoreAccents;
                return y.a.createElement(te, {
                  style: this.props.style('item'),
                  key: ''.concat(s, '-').concat(r),
                  id: r,
                  query: i,
                  index: n,
                  ignoreAccents: l,
                  renderSuggestion: a,
                  suggestion: e,
                  focused: o,
                  onClick: function () {
                    return u.select(e, t);
                  },
                  onMouseEnter: function () {
                    return u.handleMouseEnter(n);
                  },
                });
              },
            },
            {
              key: 'getID',
              value: function (e) {
                return e instanceof String ? e : e.id;
              },
            },
            {
              key: 'renderLoadingIndicator',
              value: function () {
                if (this.props.isLoading)
                  return y.a.createElement(ne, {
                    style: this.props.style('loadingIndicator'),
                  });
              },
            },
            {
              key: 'handleMouseEnter',
              value: function (e, t) {
                this.props.onMouseEnter && this.props.onMouseEnter(e);
              },
            },
            {
              key: 'select',
              value: function (e, t) {
                this.props.onSelect(e, t);
              },
            },
          ]),
          t
        );
      })(h.Component);
      E(re, 'propTypes', {
        suggestions: C.a.object.isRequired,
        focusIndex: C.a.number,
        scrollFocusedIntoView: C.a.bool,
        isLoading: C.a.bool,
        onSelect: C.a.func,
        ignoreAccents: C.a.bool,
        children: C.a.oneOfType([C.a.element, C.a.arrayOf(C.a.element)])
          .isRequired,
      }),
        E(re, 'defaultProps', {
          suggestions: {},
          onSelect: function () {
            return null;
          },
        });
      var oe = Object(O.defaultStyle)(function (e) {
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ue(Object(n), !0).forEach(function (t) {
                  E(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ue(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })(
          {
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'white',
            marginTop: 14,
            minWidth: 100,
          },
          e.position,
          { list: { margin: 0, padding: 0, listStyleType: 'none' } }
        );
      })(re);
      function se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, u);
        }
        return n;
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(n), !0).forEach(function (t) {
                E(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : se(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ae = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 },
        le = !1,
        ce = {
          singleLine: C.a.bool,
          allowSpaceInQuery: C.a.bool,
          EXPERIMENTAL_cutCopyPaste: C.a.bool,
          allowSuggestionsAboveCursor: C.a.bool,
          ignoreAccents: C.a.bool,
          value: C.a.string,
          onKeyDown: C.a.func,
          onSelect: C.a.func,
          onBlur: C.a.func,
          onChange: C.a.func,
          suggestionsPortalHost:
            'undefined' == typeof Element
              ? C.a.any
              : C.a.PropTypes.instanceOf(Element),
          inputRef: C.a.oneOfType([
            C.a.func,
            C.a.shape({
              current:
                'undefined' == typeof Element
                  ? C.a.any
                  : C.a.instanceOf(Element),
            }),
          ]),
          children: C.a.oneOfType([C.a.element, C.a.arrayOf(C.a.element)])
            .isRequired,
        },
        fe = (function (e) {
          function t(e) {
            var n;
            return (
              o(this, t),
              E(
                c((n = f(this, p(t).call(this, e)))),
                'getInputProps',
                function (e) {
                  var t = n.props,
                    u = t.readOnly,
                    r = t.disabled,
                    o = t.style;
                  return ie(
                    {},
                    J(n.props, 'style', Q(ce)),
                    {},
                    o('input'),
                    { value: n.getPlainText() },
                    !u &&
                      !r && {
                        onChange: n.handleChange,
                        onSelect: n.handleSelect,
                        onKeyDown: n.handleKeyDown,
                        onBlur: n.handleBlur,
                        onCompositionStart: n.handleCompositionStart,
                        onCompositionEnd: n.handleCompositionEnd,
                        onScroll: n.updateHighlighterScroll,
                      }
                  );
                }
              ),
              E(c(n), 'renderControl', function () {
                var e = n.props,
                  t = e.singleLine,
                  u = e.style,
                  r = n.getInputProps(!t);
                return y.a.createElement(
                  'div',
                  u('control'),
                  n.renderHighlighter(r.style),
                  t ? n.renderInput(r) : n.renderTextarea(r)
                );
              }),
              E(c(n), 'renderInput', function (e) {
                return y.a.createElement(
                  'input',
                  r({ type: 'text', ref: n.setInputRef }, e)
                );
              }),
              E(c(n), 'renderTextarea', function (e) {
                return y.a.createElement(
                  'textarea',
                  r({ ref: n.setInputRef }, e)
                );
              }),
              E(c(n), 'setInputRef', function (e) {
                n.inputRef = e;
                var t = n.props.inputRef;
                'function' == typeof t ? t(e) : t && (t.current = e);
              }),
              E(c(n), 'renderSuggestionsOverlay', function () {
                if (!K(n.state.selectionStart)) return null;
                var e = y.a.createElement(
                  oe,
                  {
                    style: n.props.style('suggestions'),
                    position: n.state.suggestionsPosition,
                    focusIndex: n.state.focusIndex,
                    scrollFocusedIntoView: n.state.scrollFocusedIntoView,
                    ref: function (e) {
                      n.suggestionsRef = e;
                    },
                    suggestions: n.state.suggestions,
                    onSelect: n.addMention,
                    onMouseDown: n.handleSuggestionsMouseDown,
                    onMouseEnter: function (e) {
                      return n.setState({
                        focusIndex: e,
                        scrollFocusedIntoView: !1,
                      });
                    },
                    isLoading: n.isLoading(),
                    ignoreAccents: n.props.ignoreAccents,
                  },
                  n.props.children
                );
                return n.props.suggestionsPortalHost
                  ? S.a.createPortal(e, n.props.suggestionsPortalHost)
                  : e;
              }),
              E(c(n), 'renderHighlighter', function (e) {
                var t = n.state,
                  u = t.selectionStart,
                  r = t.selectionEnd,
                  o = n.props,
                  s = o.singleLine,
                  i = o.children,
                  a = o.value,
                  l = o.style;
                return y.a.createElement(
                  G,
                  {
                    ref: function (e) {
                      n.highlighterRef = e;
                    },
                    style: l('highlighter'),
                    inputStyle: e,
                    value: a,
                    singleLine: s,
                    selection: { start: u, end: r },
                    onCaretPositionChange: function (e) {
                      return n.setState({ caretPosition: e });
                    },
                  },
                  i
                );
              }),
              E(c(n), 'getPlainText', function () {
                return N(n.props.value || '', H(n.props.children));
              }),
              E(c(n), 'executeOnChange', function (e) {
                for (
                  var t = arguments.length,
                    u = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  u[r - 1] = arguments[r];
                var o, s;
                return n.props.onChange
                  ? (o = n.props).onChange.apply(o, [e].concat(u))
                  : n.props.valueLink
                  ? (s = n.props.valueLink).requestChange.apply(
                      s,
                      [e.target.value].concat(u)
                    )
                  : void 0;
              }),
              E(c(n), 'handleChange', function (e) {
                if (
                  (
                    (document.activeElement &&
                      document.activeElement.contentDocument) ||
                    document
                  ).activeElement === e.target
                ) {
                  var t = n.props.value || '',
                    u = H(n.props.children),
                    r = e.target.value,
                    o = (function (e, t, n, u) {
                      var r = n.selectionStartBefore,
                        o = n.selectionEndBefore,
                        s = n.selectionEndAfter,
                        i = N(e, u),
                        a = i.length - t.length;
                      'undefined' === r && (r = s + a),
                        'undefined' === o && (o = r),
                        r === o && o === s && i.length === t.length && (r -= 1);
                      var l = t.slice(r, s),
                        c = Math.min(r, s),
                        f = o;
                      r === s && (f = Math.max(o, r + a));
                      var p = k(e, u, c, 'START'),
                        d = k(e, u, f, 'END'),
                        g = k(e, u, c, 'NULL'),
                        E = k(e, u, f, 'NULL'),
                        h = null === g || null === E,
                        y = M(e, p, d, l);
                      if (!h) {
                        var v = N(y, u);
                        if (v !== t) {
                          for (c = 0; t[c] === v[c]; ) c++;
                          (l = t.slice(c, s)),
                            (f = i.lastIndexOf(t.substring(s))),
                            (p = k(e, u, c, 'START')),
                            (d = k(e, u, f, 'END')),
                            (y = M(e, p, d, l));
                        }
                      }
                      return y;
                    })(
                      t,
                      r,
                      {
                        selectionStartBefore: n.state.selectionStart,
                        selectionEndBefore: n.state.selectionEnd,
                        selectionEndAfter: e.target.selectionEnd,
                      },
                      u
                    );
                  r = N(o, u);
                  var s = e.target.selectionStart,
                    i = e.target.selectionEnd,
                    a = !1,
                    l = (function (e, t, n) {
                      var u = n,
                        r = !1;
                      if (
                        (B(e, t, function (e, t, o, s, i, a, l) {
                          o <= n && o + i.length > n && ((u = o), (r = !0));
                        }),
                        r)
                      )
                        return u;
                    })(t, u, s);
                  void 0 !== l &&
                    n.state.selectionEnd > l &&
                    ((i = s = l), (a = !0)),
                    n.setState({
                      selectionStart: s,
                      selectionEnd: i,
                      setSelectionAfterMentionChange: a,
                    });
                  var c = I(o, u),
                    f = { target: { value: o } };
                  n.executeOnChange(f, o, r, c);
                }
              }),
              E(c(n), 'handleSelect', function (e) {
                if (n.selectFocusedCalled) n.selectFocusedCalled = !1;
                else if (
                  (n.setState({
                    selectionStart: e.target.selectionStart,
                    selectionEnd: e.target.selectionEnd,
                  }),
                  !le)
                ) {
                  var t = n.inputRef;
                  e.target.selectionStart === e.target.selectionEnd
                    ? n.updateMentionsQueries(t.value, e.target.selectionStart)
                    : n.clearSuggestions(),
                    n.updateHighlighterScroll(),
                    n.props.onSelect(e);
                }
              }),
              E(c(n), 'handleKeyDown', function (e) {
                var t = L(n.state.suggestions),
                  u = n.suggestionsRef;
                if (0 !== t && u)
                  switch (
                    (Object.values(ae).indexOf(e.keyCode) >= 0 &&
                      e.preventDefault(),
                    e.keyCode)
                  ) {
                    case ae.ESC:
                      return void n.clearSuggestions();
                    case ae.DOWN:
                      return void n.shiftFocus(1);
                    case ae.UP:
                      return void n.shiftFocus(-1);
                    case ae.RETURN:
                    case ae.TAB:
                      return void n.selectFocused();
                    default:
                      return;
                  }
                else n.props.onKeyDown(e);
              }),
              E(c(n), 'shiftFocus', function (e) {
                var t = L(n.state.suggestions);
                n.setState({
                  focusIndex: (t + n.state.focusIndex + e) % t,
                  scrollFocusedIntoView: !0,
                });
              }),
              E(c(n), 'selectFocused', function () {
                var e = n.state,
                  t = e.suggestions,
                  r = e.focusIndex,
                  o = Object.values(t).reduce(function (e, t) {
                    var n = t.results,
                      r = t.queryInfo;
                    return [].concat(
                      u(e),
                      u(
                        n.map(function (e) {
                          return { result: e, queryInfo: r };
                        })
                      )
                    );
                  }, [])[r],
                  s = o.result,
                  i = o.queryInfo;
                (n.selectFocusedCalled = !0),
                  n.addMention(s, i),
                  n.setState({ focusIndex: 0 });
              }),
              E(c(n), 'handleBlur', function (e) {
                var t = n._suggestionsMouseDown;
                (n._suggestionsMouseDown = !1),
                  t || n.setState({ selectionStart: null, selectionEnd: null }),
                  window.setTimeout(function () {
                    n.updateHighlighterScroll();
                  }, 1),
                  n.props.onBlur(e, t);
              }),
              E(c(n), 'handleSuggestionsMouseDown', function (e) {
                e.preventDefault(),
                  (n.selectFocusedCalled = !0),
                  (n._suggestionsMouseDown = !0);
              }),
              E(c(n), 'updateSuggestionsPosition', function () {
                var e = n.state.caretPosition,
                  t = n.props,
                  u = t.suggestionsPortalHost,
                  r = t.allowSuggestionsAboveCursor;
                if (e && n.suggestionsRef) {
                  var o = S.a.findDOMNode(n.suggestionsRef),
                    s = S.a.findDOMNode(n.highlighterRef),
                    i = s.getBoundingClientRect(),
                    a = pe(s, 'font-size'),
                    l = { left: i.left + e.left, top: i.top + e.top + a },
                    c = Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    );
                  if (o) {
                    var f = {};
                    if (u) {
                      f.position = 'fixed';
                      var p = l.left,
                        d = l.top;
                      (p -= pe(o, 'margin-left')),
                        (d -= pe(o, 'margin-top')),
                        (p -= s.scrollLeft),
                        (d -= s.scrollTop);
                      var g = Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      );
                      p + o.offsetWidth > g
                        ? (f.left = Math.max(0, g - o.offsetWidth))
                        : (f.left = p),
                        r && d + o.offsetHeight > c && o.offsetHeight < d - a
                          ? (f.top = Math.max(0, d - o.offsetHeight - a))
                          : (f.top = d);
                    } else {
                      var E = e.left - s.scrollLeft,
                        h = e.top - s.scrollTop;
                      E + o.offsetWidth > n.containerRef.offsetWidth
                        ? (f.right = 0)
                        : (f.left = E),
                        r &&
                        l.top - s.scrollTop + o.offsetHeight > c &&
                        o.offsetHeight < i.top - a - s.scrollTop
                          ? (f.top = h - o.offsetHeight - a)
                          : (f.top = h);
                    }
                    X(f, n.state.suggestionsPosition) ||
                      n.setState({ suggestionsPosition: f });
                  }
                }
              }),
              E(c(n), 'updateHighlighterScroll', function () {
                if (n.inputRef && n.highlighterRef) {
                  var e = n.inputRef,
                    t = S.a.findDOMNode(n.highlighterRef);
                  (t.scrollLeft = e.scrollLeft),
                    (t.scrollTop = e.scrollTop),
                    (t.height = e.height);
                }
              }),
              E(c(n), 'handleCompositionStart', function () {
                le = !0;
              }),
              E(c(n), 'handleCompositionEnd', function () {
                le = !1;
              }),
              E(c(n), 'setSelection', function (e, t) {
                if (null !== e && null !== t) {
                  var u = n.inputRef;
                  if (u.setSelectionRange) u.setSelectionRange(e, t);
                  else if (u.createTextRange) {
                    var r = u.createTextRange();
                    r.collapse(!0),
                      r.moveEnd('character', t),
                      r.moveStart('character', e),
                      r.select();
                  }
                }
              }),
              E(c(n), 'updateMentionsQueries', function (e, t) {
                n._queryId++,
                  (n.suggestions = {}),
                  n.setState({ suggestions: {} });
                var u = n.props.value || '',
                  r = n.props.children,
                  o = H(r),
                  s = k(u, o, t, 'NULL');
                if (null !== s) {
                  var i = (function (e, t) {
                      var n = I(e, t),
                        u = n[n.length - 1];
                      return u ? u.plainTextIndex + u.display.length : 0;
                    })(u.substring(0, s), o),
                    a = e.substring(i, t);
                  y.a.Children.forEach(r, function (t, u) {
                    if (t) {
                      var r = (function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          if (e instanceof RegExp) return e;
                          var n = t.allowSpaceInQuery,
                            u = w(e);
                          return new RegExp(
                            '(?:^|\\s)('
                              .concat(u, '([^')
                              .concat(n ? '' : '\\s')
                              .concat(u, ']*))$')
                          );
                        })(t.props.trigger, n.props),
                        o = a.match(r);
                      if (o) {
                        var s = i + a.indexOf(o[1], o.index);
                        n.queryData(o[2], u, s, s + o[1].length, e);
                      }
                    }
                  });
                }
              }),
              E(c(n), 'clearSuggestions', function () {
                n._queryId++,
                  (n.suggestions = {}),
                  n.setState({ suggestions: {}, focusIndex: 0 });
              }),
              E(c(n), 'queryData', function (e, t, u, r, o) {
                var s = n.props,
                  i = s.children,
                  a = s.ignoreAccents,
                  l = (function (e, t) {
                    return e instanceof Array
                      ? function (n, u) {
                          for (var r = [], o = 0, s = e.length; o < s; ++o) {
                            var i = e[o].display || e[o].id;
                            V(i, n, t) >= 0 && r.push(e[o]);
                          }
                          return r;
                        }
                      : e;
                  })(h.Children.toArray(i)[t].props.data, a)(
                    e,
                    n.updateSuggestions.bind(null, n._queryId, t, e, u, r, o)
                  );
                l instanceof Array &&
                  n.updateSuggestions(n._queryId, t, e, u, r, o, l);
              }),
              E(c(n), 'updateSuggestions', function (e, t, u, r, o, s, i) {
                if (e === n._queryId) {
                  n.suggestions = ie(
                    {},
                    n.suggestions,
                    E({}, t, {
                      queryInfo: {
                        childIndex: t,
                        query: u,
                        querySequenceStart: r,
                        querySequenceEnd: o,
                        plainTextValue: s,
                      },
                      results: i,
                    })
                  );
                  var a = n.state.focusIndex,
                    l = L(n.suggestions);
                  n.setState({
                    suggestions: n.suggestions,
                    focusIndex: a >= l ? Math.max(l - 1, 0) : a,
                  });
                }
              }),
              E(c(n), 'addMention', function (e, t) {
                var u = e.id,
                  r = e.display,
                  o = t.childIndex,
                  s = t.querySequenceStart,
                  i = t.querySequenceEnd,
                  a = t.plainTextValue,
                  l = n.props.value || '',
                  c = H(n.props.children),
                  f = h.Children.toArray(n.props.children)[o].props,
                  p = f.markup,
                  d = f.displayTransform,
                  g = f.appendSpaceOnAdd,
                  E = f.onAdd,
                  y = k(l, c, s, 'START'),
                  v = y + i - s,
                  b = (function (e, t, n) {
                    return e.replace(_, t).replace(P, n);
                  })(p, u, r);
                g && (b += ' ');
                var m = M(l, y, v, b);
                n.inputRef.focus();
                var A = d(u, r);
                g && (A += ' ');
                var C = s + A.length;
                n.setState({
                  selectionStart: C,
                  selectionEnd: C,
                  setSelectionAfterMentionChange: !0,
                });
                var O = { target: { value: m } },
                  F = I(m, c),
                  D = M(a, s, i, A);
                n.executeOnChange(O, m, D, F),
                  E && E(u, r),
                  n.clearSuggestions();
              }),
              E(c(n), 'isLoading', function () {
                var e = !1;
                return (
                  y.a.Children.forEach(n.props.children, function (t) {
                    e = e || (t && t.props.isLoading);
                  }),
                  e
                );
              }),
              E(c(n), '_queryId', 0),
              (n.suggestions = {}),
              (n.handleCopy = n.handleCopy.bind(c(n))),
              (n.handleCut = n.handleCut.bind(c(n))),
              (n.handlePaste = n.handlePaste.bind(c(n))),
              (n.selectFocusedCalled = !1),
              (n.state = {
                focusIndex: 0,
                selectionStart: null,
                selectionEnd: null,
                suggestions: {},
                caretPosition: null,
                suggestionsPosition: null,
              }),
              n
            );
          }
          return (
            g(t, e),
            i(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.EXPERIMENTAL_cutCopyPaste &&
                    (document.addEventListener('copy', this.handleCopy),
                    document.addEventListener('cut', this.handleCut),
                    document.addEventListener('paste', this.handlePaste)),
                    this.updateSuggestionsPosition();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  t.suggestionsPosition === this.state.suggestionsPosition &&
                    this.updateSuggestionsPosition(),
                    this.state.setSelectionAfterMentionChange &&
                      (this.setState({ setSelectionAfterMentionChange: !1 }),
                      this.setSelection(
                        this.state.selectionStart,
                        this.state.selectionEnd
                      ));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.EXPERIMENTAL_cutCopyPaste &&
                    (document.removeEventListener('copy', this.handleCopy),
                    document.removeEventListener('cut', this.handleCut),
                    document.removeEventListener('paste', this.handlePaste));
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return y.a.createElement(
                    'div',
                    r(
                      {
                        ref: function (t) {
                          e.containerRef = t;
                        },
                      },
                      this.props.style
                    ),
                    this.renderControl(),
                    this.renderSuggestionsOverlay()
                  );
                },
              },
              {
                key: 'handlePaste',
                value: function (e) {
                  if (
                    e.target === this.inputRef &&
                    this.supportsClipboardActions(e)
                  ) {
                    e.preventDefault();
                    var t = this.state,
                      n = t.selectionStart,
                      u = t.selectionEnd,
                      r = this.props,
                      o = r.value,
                      s = r.children,
                      i = H(s),
                      a = k(o, i, n, 'START'),
                      l = k(o, i, u, 'END'),
                      c = e.clipboardData.getData('text/react-mentions'),
                      f = e.clipboardData.getData('text/plain'),
                      p = M(o, a, l, c || f).replace(/\r/g, ''),
                      d = N(p, i),
                      g = { target: ie({}, e.target, { value: p }) };
                    this.executeOnChange(g, p, d, I(p, i));
                  }
                },
              },
              {
                key: 'saveSelectionToClipboard',
                value: function (e) {
                  var t = this.state,
                    n = t.selectionStart,
                    u = t.selectionEnd,
                    r = this.props,
                    o = r.children,
                    s = r.value,
                    i = H(o),
                    a = k(s, i, n, 'START'),
                    l = k(s, i, u, 'END');
                  e.clipboardData.setData(
                    'text/plain',
                    e.target.value.slice(n, u)
                  ),
                    e.clipboardData.setData(
                      'text/react-mentions',
                      s.slice(a, l)
                    );
                },
              },
              {
                key: 'supportsClipboardActions',
                value: function (e) {
                  return !!e.clipboardData;
                },
              },
              {
                key: 'handleCopy',
                value: function (e) {
                  e.target === this.inputRef &&
                    this.supportsClipboardActions(e) &&
                    (e.preventDefault(), this.saveSelectionToClipboard(e));
                },
              },
              {
                key: 'handleCut',
                value: function (e) {
                  if (
                    e.target === this.inputRef &&
                    this.supportsClipboardActions(e)
                  ) {
                    e.preventDefault(), this.saveSelectionToClipboard(e);
                    var t = this.state,
                      n = t.selectionStart,
                      u = t.selectionEnd,
                      r = this.props,
                      o = r.children,
                      s = r.value,
                      i = H(o),
                      a = k(s, i, n, 'START'),
                      l = k(s, i, u, 'END'),
                      c = [s.slice(0, a), s.slice(l)].join(''),
                      f = N(c, i),
                      p = { target: ie({}, e.target, { value: f }) };
                    this.executeOnChange(p, c, f, I(s, i));
                  }
                },
              },
            ]),
            t
          );
        })(y.a.Component);
      E(fe, 'propTypes', ce),
        E(fe, 'defaultProps', {
          ignoreAccents: !1,
          singleLine: !1,
          allowSuggestionsAboveCursor: !1,
          onKeyDown: function () {
            return null;
          },
          onSelect: function () {
            return null;
          },
          onBlur: function () {
            return null;
          },
        });
      var pe = function (e, t) {
          var n = parseFloat(
            window.getComputedStyle(e, null).getPropertyValue(t)
          );
          return isFinite(n) ? n : 0;
        },
        de =
          'undefined' != typeof navigator &&
          /iPhone|iPad|iPod/i.test(navigator.userAgent),
        ge = Object(O.defaultStyle)(
          {
            position: 'relative',
            overflowY: 'visible',
            input: {
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              boxSizing: 'border-box',
              backgroundColor: 'transparent',
              width: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              letterSpacing: 'inherit',
            },
            '&multiLine': {
              input: ie(
                {
                  width: '100%',
                  height: '100%',
                  bottom: 0,
                  overflow: 'hidden',
                  resize: 'none',
                },
                de ? { marginTop: 1, marginLeft: -3 } : null
              ),
            },
          },
          function (e) {
            var t = e.singleLine;
            return { '&singleLine': t, '&multiLine': !t };
          }
        )(fe),
        Ee = Object(O.defaultStyle)({ fontWeight: 'inherit' })(function (e) {
          var t = e.display,
            n = e.style;
          return y.a.createElement('strong', n, t);
        });
      (Ee.propTypes = {
        onAdd: C.a.func,
        onRemove: C.a.func,
        renderSuggestion: C.a.func,
        trigger: C.a.oneOfType([C.a.string, C.a.instanceOf(RegExp)]),
        markup: C.a.string,
        displayTransform: C.a.func,
        allowSpaceInQuery: C.a.bool,
        isLoading: C.a.bool,
      }),
        (Ee.defaultProps = {
          trigger: '@',
          markup: '@[__display__](__id__)',
          displayTransform: function (e, t) {
            return t || e;
          },
          onAdd: function () {
            return null;
          },
          onRemove: function () {
            return null;
          },
          renderSuggestion: null,
          isLoading: !1,
          appendSpaceOnAdd: !1,
        });
    },
  },
]);
