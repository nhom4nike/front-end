(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1134: function (e, t, n) {
      var o, r;
      window,
        (e.exports =
          ((o = n(0)),
          (r = n(24)),
          (function (e) {
            var t = {};
            function n(o) {
              if (t[o]) return t[o].exports;
              var r = (t[o] = { i: o, l: !1, exports: {} });
              return (
                e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, o) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: o });
              }),
              (n.r = function (e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                  return e;
                var o = Object.create(null);
                if (
                  (n.r(o),
                  Object.defineProperty(o, 'default', {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && 'string' != typeof e)
                )
                  for (var r in e)
                    n.d(
                      o,
                      r,
                      function (t) {
                        return e[t];
                      }.bind(null, r)
                    );
                return o;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 34))
            );
          })([
            function (e, t) {
              e.exports = function (e, t, n) {
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
              };
            },
            function (e, t) {
              e.exports = function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              };
            },
            function (e, t) {
              e.exports = o;
            },
            function (e, t) {
              e.exports = function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              };
            },
            function (e, t) {
              function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              e.exports = function (e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e;
              };
            },
            function (e, t, n) {
              e.exports = n(20)();
            },
            function (e, t, n) {
              var o = n(25),
                r = n(1);
              e.exports = function (e, t) {
                return !t || ('object' !== o(t) && 'function' != typeof t)
                  ? r(e)
                  : t;
              };
            },
            function (e, t) {
              function n(t) {
                return (
                  (e.exports = n = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      }),
                  n(t)
                );
              }
              e.exports = n;
            },
            function (e, t, n) {
              var o = n(26);
              e.exports = function (e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && o(e, t);
              };
            },
            function (e, t) {
              function n() {
                return (
                  (e.exports = n =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n)
                          Object.prototype.hasOwnProperty.call(n, o) &&
                            (e[o] = n[o]);
                      }
                      return e;
                    }),
                  n.apply(this, arguments)
                );
              }
              e.exports = n;
            },
            function (e, t) {
              e.exports = r;
            },
            function (e, t, n) {
              var o = n(27);
              e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = o(e, t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < l.length; r++)
                    (n = l[r]),
                      t.indexOf(n) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, n) &&
                          (i[n] = e[n]));
                }
                return i;
              };
            },
            function (e, t, n) {
              'use strict';
              (function (e) {
                function o(t, n) {
                  var o,
                    r,
                    i,
                    l =
                      void 0 !==
                        (o =
                          void 0 !== n
                            ? n
                            : 'undefined' != typeof window
                            ? window
                            : 'undefined' != typeof self
                            ? self
                            : e).document && o.document.attachEvent;
                  if (!l) {
                    var s =
                        ((i =
                          o.requestAnimationFrame ||
                          o.mozRequestAnimationFrame ||
                          o.webkitRequestAnimationFrame ||
                          function (e) {
                            return o.setTimeout(e, 20);
                          }),
                        function (e) {
                          return i(e);
                        }),
                      a =
                        ((r =
                          o.cancelAnimationFrame ||
                          o.mozCancelAnimationFrame ||
                          o.webkitCancelAnimationFrame ||
                          o.clearTimeout),
                        function (e) {
                          return r(e);
                        }),
                      c = function (e) {
                        var t = e.__resizeTriggers__,
                          n = t.firstElementChild,
                          o = t.lastElementChild,
                          r = n.firstElementChild;
                        (o.scrollLeft = o.scrollWidth),
                          (o.scrollTop = o.scrollHeight),
                          (r.style.width = n.offsetWidth + 1 + 'px'),
                          (r.style.height = n.offsetHeight + 1 + 'px'),
                          (n.scrollLeft = n.scrollWidth),
                          (n.scrollTop = n.scrollHeight);
                      },
                      u = function (e) {
                        if (
                          !(
                            e.target.className &&
                            'function' == typeof e.target.className.indexOf &&
                            e.target.className.indexOf('contract-trigger') <
                              0 &&
                            e.target.className.indexOf('expand-trigger') < 0
                          )
                        ) {
                          var t = this;
                          c(this),
                            this.__resizeRAF__ && a(this.__resizeRAF__),
                            (this.__resizeRAF__ = s(function () {
                              (function (e) {
                                return (
                                  e.offsetWidth != e.__resizeLast__.width ||
                                  e.offsetHeight != e.__resizeLast__.height
                                );
                              })(t) &&
                                ((t.__resizeLast__.width = t.offsetWidth),
                                (t.__resizeLast__.height = t.offsetHeight),
                                t.__resizeListeners__.forEach(function (n) {
                                  n.call(t, e);
                                }));
                            }));
                        }
                      },
                      d = !1,
                      h = '',
                      f = 'animationstart',
                      p = 'Webkit Moz O ms'.split(' '),
                      m = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(
                        ' '
                      ),
                      g = o.document.createElement('fakeelement');
                    if (
                      (void 0 !== g.style.animationName && (d = !0), !1 === d)
                    )
                      for (var v = 0; v < p.length; v++)
                        if (void 0 !== g.style[p[v] + 'AnimationName']) {
                          (h = '-' + p[v].toLowerCase() + '-'),
                            (f = m[v]),
                            (d = !0);
                          break;
                        }
                    var _ = 'resizeanim',
                      y =
                        '@' +
                        h +
                        'keyframes ' +
                        _ +
                        ' { from { opacity: 0; } to { opacity: 0; } } ',
                      S = h + 'animation: 1ms ' + _ + '; ';
                  }
                  return {
                    addResizeListener: function (e, n) {
                      if (l) e.attachEvent('onresize', n);
                      else {
                        if (!e.__resizeTriggers__) {
                          var r = e.ownerDocument,
                            i = o.getComputedStyle(e);
                          i &&
                            'static' == i.position &&
                            (e.style.position = 'relative'),
                            (function (e) {
                              if (!e.getElementById('detectElementResize')) {
                                var n =
                                    (y || '') +
                                    '.resize-triggers { ' +
                                    (S || '') +
                                    'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                  o =
                                    e.head || e.getElementsByTagName('head')[0],
                                  r = e.createElement('style');
                                (r.id = 'detectElementResize'),
                                  (r.type = 'text/css'),
                                  null != t && r.setAttribute('nonce', t),
                                  r.styleSheet
                                    ? (r.styleSheet.cssText = n)
                                    : r.appendChild(e.createTextNode(n)),
                                  o.appendChild(r);
                              }
                            })(r),
                            (e.__resizeLast__ = {}),
                            (e.__resizeListeners__ = []),
                            ((e.__resizeTriggers__ = r.createElement(
                              'div'
                            )).className = 'resize-triggers'),
                            (e.__resizeTriggers__.innerHTML =
                              '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>'),
                            e.appendChild(e.__resizeTriggers__),
                            c(e),
                            e.addEventListener('scroll', u, !0),
                            f &&
                              ((e.__resizeTriggers__.__animationListener__ = function (
                                t
                              ) {
                                t.animationName == _ && c(e);
                              }),
                              e.__resizeTriggers__.addEventListener(
                                f,
                                e.__resizeTriggers__.__animationListener__
                              ));
                        }
                        e.__resizeListeners__.push(n);
                      }
                    },
                    removeResizeListener: function (e, t) {
                      if (l) e.detachEvent('onresize', t);
                      else if (
                        (e.__resizeListeners__.splice(
                          e.__resizeListeners__.indexOf(t),
                          1
                        ),
                        !e.__resizeListeners__.length)
                      ) {
                        e.removeEventListener('scroll', u, !0),
                          e.__resizeTriggers__.__animationListener__ &&
                            (e.__resizeTriggers__.removeEventListener(
                              f,
                              e.__resizeTriggers__.__animationListener__
                            ),
                            (e.__resizeTriggers__.__animationListener__ = null));
                        try {
                          e.__resizeTriggers__ = !e.removeChild(
                            e.__resizeTriggers__
                          );
                        } catch (e) {}
                      }
                    },
                  };
                }
                n.d(t, 'a', function () {
                  return o;
                });
              }.call(this, n(13)));
            },
            function (e, t) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || new Function('return this')();
              } catch (e) {
                'object' == typeof window && (n = window);
              }
              e.exports = n;
            },
            function (e, t) {
              e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
              };
            },
            function (e, t, n) {
              var o = n(14);
              e.exports = function (e, t) {
                if (e) {
                  if ('string' == typeof e) return o(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(e, t)
                      : void 0
                  );
                }
              };
            },
            function (e, t, n) {
              'use strict';
              (function (e) {
                var n = (function () {
                    if ('undefined' != typeof Map) return Map;
                    function e(e, t) {
                      var n = -1;
                      return (
                        e.some(function (e, o) {
                          return e[0] === t && ((n = o), !0);
                        }),
                        n
                      );
                    }
                    return (function () {
                      function t() {
                        this.__entries__ = [];
                      }
                      return (
                        Object.defineProperty(t.prototype, 'size', {
                          get: function () {
                            return this.__entries__.length;
                          },
                          enumerable: !0,
                          configurable: !0,
                        }),
                        (t.prototype.get = function (t) {
                          var n = e(this.__entries__, t),
                            o = this.__entries__[n];
                          return o && o[1];
                        }),
                        (t.prototype.set = function (t, n) {
                          var o = e(this.__entries__, t);
                          ~o
                            ? (this.__entries__[o][1] = n)
                            : this.__entries__.push([t, n]);
                        }),
                        (t.prototype.delete = function (t) {
                          var n = this.__entries__,
                            o = e(n, t);
                          ~o && n.splice(o, 1);
                        }),
                        (t.prototype.has = function (t) {
                          return !!~e(this.__entries__, t);
                        }),
                        (t.prototype.clear = function () {
                          this.__entries__.splice(0);
                        }),
                        (t.prototype.forEach = function (e, t) {
                          void 0 === t && (t = null);
                          for (
                            var n = 0, o = this.__entries__;
                            n < o.length;
                            n++
                          ) {
                            var r = o[n];
                            e.call(t, r[1], r[0]);
                          }
                        }),
                        t
                      );
                    })();
                  })(),
                  o =
                    'undefined' != typeof window &&
                    'undefined' != typeof document &&
                    window.document === document,
                  r =
                    void 0 !== e && e.Math === Math
                      ? e
                      : 'undefined' != typeof self && self.Math === Math
                      ? self
                      : 'undefined' != typeof window && window.Math === Math
                      ? window
                      : Function('return this')(),
                  i =
                    'function' == typeof requestAnimationFrame
                      ? requestAnimationFrame.bind(r)
                      : function (e) {
                          return setTimeout(function () {
                            return e(Date.now());
                          }, 1e3 / 60);
                        },
                  l = [
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'width',
                    'height',
                    'size',
                    'weight',
                  ],
                  s = 'undefined' != typeof MutationObserver,
                  a = (function () {
                    function e() {
                      (this.connected_ = !1),
                        (this.mutationEventsAdded_ = !1),
                        (this.mutationsObserver_ = null),
                        (this.observers_ = []),
                        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(
                          this
                        )),
                        (this.refresh = (function (e, t) {
                          var n = !1,
                            o = !1,
                            r = 0;
                          function l() {
                            n && ((n = !1), e()), o && a();
                          }
                          function s() {
                            i(l);
                          }
                          function a() {
                            var e = Date.now();
                            if (n) {
                              if (e - r < 2) return;
                              o = !0;
                            } else (n = !0), (o = !1), setTimeout(s, 20);
                            r = e;
                          }
                          return a;
                        })(this.refresh.bind(this)));
                    }
                    return (
                      (e.prototype.addObserver = function (e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e),
                          this.connected_ || this.connect_();
                      }),
                      (e.prototype.removeObserver = function (e) {
                        var t = this.observers_,
                          n = t.indexOf(e);
                        ~n && t.splice(n, 1),
                          !t.length && this.connected_ && this.disconnect_();
                      }),
                      (e.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh();
                      }),
                      (e.prototype.updateObservers_ = function () {
                        var e = this.observers_.filter(function (e) {
                          return e.gatherActive(), e.hasActive();
                        });
                        return (
                          e.forEach(function (e) {
                            return e.broadcastActive();
                          }),
                          e.length > 0
                        );
                      }),
                      (e.prototype.connect_ = function () {
                        o &&
                          !this.connected_ &&
                          (document.addEventListener(
                            'transitionend',
                            this.onTransitionEnd_
                          ),
                          window.addEventListener('resize', this.refresh),
                          s
                            ? ((this.mutationsObserver_ = new MutationObserver(
                                this.refresh
                              )),
                              this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                              }))
                            : (document.addEventListener(
                                'DOMSubtreeModified',
                                this.refresh
                              ),
                              (this.mutationEventsAdded_ = !0)),
                          (this.connected_ = !0));
                      }),
                      (e.prototype.disconnect_ = function () {
                        o &&
                          this.connected_ &&
                          (document.removeEventListener(
                            'transitionend',
                            this.onTransitionEnd_
                          ),
                          window.removeEventListener('resize', this.refresh),
                          this.mutationsObserver_ &&
                            this.mutationsObserver_.disconnect(),
                          this.mutationEventsAdded_ &&
                            document.removeEventListener(
                              'DOMSubtreeModified',
                              this.refresh
                            ),
                          (this.mutationsObserver_ = null),
                          (this.mutationEventsAdded_ = !1),
                          (this.connected_ = !1));
                      }),
                      (e.prototype.onTransitionEnd_ = function (e) {
                        var t = e.propertyName,
                          n = void 0 === t ? '' : t;
                        l.some(function (e) {
                          return !!~n.indexOf(e);
                        }) && this.refresh();
                      }),
                      (e.getInstance = function () {
                        return (
                          this.instance_ || (this.instance_ = new e()),
                          this.instance_
                        );
                      }),
                      (e.instance_ = null),
                      e
                    );
                  })(),
                  c = function (e, t) {
                    for (var n = 0, o = Object.keys(t); n < o.length; n++) {
                      var r = o[n];
                      Object.defineProperty(e, r, {
                        value: t[r],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0,
                      });
                    }
                    return e;
                  },
                  u = function (e) {
                    return (
                      (e && e.ownerDocument && e.ownerDocument.defaultView) || r
                    );
                  },
                  d = g(0, 0, 0, 0);
                function h(e) {
                  return parseFloat(e) || 0;
                }
                function f(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return t.reduce(function (t, n) {
                    return t + h(e['border-' + n + '-width']);
                  }, 0);
                }
                var p =
                  'undefined' != typeof SVGGraphicsElement
                    ? function (e) {
                        return e instanceof u(e).SVGGraphicsElement;
                      }
                    : function (e) {
                        return (
                          e instanceof u(e).SVGElement &&
                          'function' == typeof e.getBBox
                        );
                      };
                function m(e) {
                  return o
                    ? p(e)
                      ? (function (e) {
                          var t = e.getBBox();
                          return g(0, 0, t.width, t.height);
                        })(e)
                      : (function (e) {
                          var t = e.clientWidth,
                            n = e.clientHeight;
                          if (!t && !n) return d;
                          var o = u(e).getComputedStyle(e),
                            r = (function (e) {
                              for (
                                var t = {},
                                  n = 0,
                                  o = ['top', 'right', 'bottom', 'left'];
                                n < o.length;
                                n++
                              ) {
                                var r = o[n],
                                  i = e['padding-' + r];
                                t[r] = h(i);
                              }
                              return t;
                            })(o),
                            i = r.left + r.right,
                            l = r.top + r.bottom,
                            s = h(o.width),
                            a = h(o.height);
                          if (
                            ('border-box' === o.boxSizing &&
                              (Math.round(s + i) !== t &&
                                (s -= f(o, 'left', 'right') + i),
                              Math.round(a + l) !== n &&
                                (a -= f(o, 'top', 'bottom') + l)),
                            !(function (e) {
                              return e === u(e).document.documentElement;
                            })(e))
                          ) {
                            var c = Math.round(s + i) - t,
                              p = Math.round(a + l) - n;
                            1 !== Math.abs(c) && (s -= c),
                              1 !== Math.abs(p) && (a -= p);
                          }
                          return g(r.left, r.top, s, a);
                        })(e)
                    : d;
                }
                function g(e, t, n, o) {
                  return { x: e, y: t, width: n, height: o };
                }
                var v = (function () {
                    function e(e) {
                      (this.broadcastWidth = 0),
                        (this.broadcastHeight = 0),
                        (this.contentRect_ = g(0, 0, 0, 0)),
                        (this.target = e);
                    }
                    return (
                      (e.prototype.isActive = function () {
                        var e = m(this.target);
                        return (
                          (this.contentRect_ = e),
                          e.width !== this.broadcastWidth ||
                            e.height !== this.broadcastHeight
                        );
                      }),
                      (e.prototype.broadcastRect = function () {
                        var e = this.contentRect_;
                        return (
                          (this.broadcastWidth = e.width),
                          (this.broadcastHeight = e.height),
                          e
                        );
                      }),
                      e
                    );
                  })(),
                  _ = function (e, t) {
                    var n,
                      o,
                      r,
                      i,
                      l,
                      s,
                      a,
                      u =
                        ((o = (n = t).x),
                        (r = n.y),
                        (i = n.width),
                        (l = n.height),
                        (s =
                          'undefined' != typeof DOMRectReadOnly
                            ? DOMRectReadOnly
                            : Object),
                        (a = Object.create(s.prototype)),
                        c(a, {
                          x: o,
                          y: r,
                          width: i,
                          height: l,
                          top: r,
                          right: o + i,
                          bottom: l + r,
                          left: o,
                        }),
                        a);
                    c(this, { target: e, contentRect: u });
                  },
                  y = (function () {
                    function e(e, t, o) {
                      if (
                        ((this.activeObservations_ = []),
                        (this.observations_ = new n()),
                        'function' != typeof e)
                      )
                        throw new TypeError(
                          'The callback provided as parameter 1 is not a function.'
                        );
                      (this.callback_ = e),
                        (this.controller_ = t),
                        (this.callbackCtx_ = o);
                    }
                    return (
                      (e.prototype.observe = function (e) {
                        if (!arguments.length)
                          throw new TypeError(
                            '1 argument required, but only 0 present.'
                          );
                        if (
                          'undefined' != typeof Element &&
                          Element instanceof Object
                        ) {
                          if (!(e instanceof u(e).Element))
                            throw new TypeError(
                              'parameter 1 is not of type "Element".'
                            );
                          var t = this.observations_;
                          t.has(e) ||
                            (t.set(e, new v(e)),
                            this.controller_.addObserver(this),
                            this.controller_.refresh());
                        }
                      }),
                      (e.prototype.unobserve = function (e) {
                        if (!arguments.length)
                          throw new TypeError(
                            '1 argument required, but only 0 present.'
                          );
                        if (
                          'undefined' != typeof Element &&
                          Element instanceof Object
                        ) {
                          if (!(e instanceof u(e).Element))
                            throw new TypeError(
                              'parameter 1 is not of type "Element".'
                            );
                          var t = this.observations_;
                          t.has(e) &&
                            (t.delete(e),
                            t.size || this.controller_.removeObserver(this));
                        }
                      }),
                      (e.prototype.disconnect = function () {
                        this.clearActive(),
                          this.observations_.clear(),
                          this.controller_.removeObserver(this);
                      }),
                      (e.prototype.gatherActive = function () {
                        var e = this;
                        this.clearActive(),
                          this.observations_.forEach(function (t) {
                            t.isActive() && e.activeObservations_.push(t);
                          });
                      }),
                      (e.prototype.broadcastActive = function () {
                        if (this.hasActive()) {
                          var e = this.callbackCtx_,
                            t = this.activeObservations_.map(function (e) {
                              return new _(e.target, e.broadcastRect());
                            });
                          this.callback_.call(e, t, e), this.clearActive();
                        }
                      }),
                      (e.prototype.clearActive = function () {
                        this.activeObservations_.splice(0);
                      }),
                      (e.prototype.hasActive = function () {
                        return this.activeObservations_.length > 0;
                      }),
                      e
                    );
                  })(),
                  S = 'undefined' != typeof WeakMap ? new WeakMap() : new n(),
                  w = function e(t) {
                    if (!(this instanceof e))
                      throw new TypeError('Cannot call a class as a function.');
                    if (!arguments.length)
                      throw new TypeError(
                        '1 argument required, but only 0 present.'
                      );
                    var n = a.getInstance(),
                      o = new y(t, n, this);
                    S.set(this, o);
                  };
                ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
                  w.prototype[e] = function () {
                    var t;
                    return (t = S.get(this))[e].apply(t, arguments);
                  };
                });
                var b = void 0 !== r.ResizeObserver ? r.ResizeObserver : w;
                t.a = b;
              }.call(this, n(13)));
            },
            function (e, t, n) {
              'use strict';
              e.exports = function (e) {
                var t = [];
                return (
                  (t.toString = function () {
                    return this.map(function (t) {
                      var n = (function (e, t) {
                        var n,
                          o,
                          r,
                          i = e[1] || '',
                          l = e[3];
                        if (!l) return i;
                        if (t && 'function' == typeof btoa) {
                          var s =
                              ((n = l),
                              (o = btoa(
                                unescape(encodeURIComponent(JSON.stringify(n)))
                              )),
                              (r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                o
                              )),
                              '/*# '.concat(r, ' */')),
                            a = l.sources.map(function (e) {
                              return '/*# sourceURL='
                                .concat(l.sourceRoot || '')
                                .concat(e, ' */');
                            });
                          return [i].concat(a).concat([s]).join('\n');
                        }
                        return [i].join('\n');
                      })(t, e);
                      return t[2]
                        ? '@media '.concat(t[2], ' {').concat(n, '}')
                        : n;
                    }).join('');
                  }),
                  (t.i = function (e, n, o) {
                    'string' == typeof e && (e = [[null, e, '']]);
                    var r = {};
                    if (o)
                      for (var i = 0; i < this.length; i++) {
                        var l = this[i][0];
                        null != l && (r[l] = !0);
                      }
                    for (var s = 0; s < e.length; s++) {
                      var a = [].concat(e[s]);
                      (o && r[a[0]]) ||
                        (n &&
                          (a[2]
                            ? (a[2] = ''.concat(n, ' and ').concat(a[2]))
                            : (a[2] = n)),
                        t.push(a));
                    }
                  }),
                  t
                );
              };
            },
            function (e, t, n) {
              var o = n(28),
                r = n(29),
                i = n(15),
                l = n(30);
              e.exports = function (e) {
                return o(e) || r(e) || i(e) || l();
              };
            },
            function (e, t, n) {
              var o = n(31),
                r = n(32),
                i = n(15),
                l = n(33);
              e.exports = function (e, t) {
                return o(e) || r(e, t) || i(e, t) || l();
              };
            },
            function (e, t, n) {
              'use strict';
              var o = n(21);
              function r() {}
              function i() {}
              (i.resetWarningCache = r),
                (e.exports = function () {
                  function e(e, t, n, r, i, l) {
                    if (l !== o) {
                      var s = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                      );
                      throw ((s.name = 'Invariant Violation'), s);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: r,
                  };
                  return (n.PropTypes = n), n;
                });
            },
            function (e, t, n) {
              'use strict';
              e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            },
            function (e, t, n) {
              var o = n(23),
                r = n(24);
              'string' == typeof (r = r.__esModule ? r.default : r) &&
                (r = [[e.i, r, '']]),
                o(r, { insert: 'head', singleton: !1 }),
                (e.exports = r.locals || {});
            },
            function (e, t, n) {
              'use strict';
              var o,
                r = (function () {
                  var e = {};
                  return function (t) {
                    if (void 0 === e[t]) {
                      var n = document.querySelector(t);
                      if (
                        window.HTMLIFrameElement &&
                        n instanceof window.HTMLIFrameElement
                      )
                        try {
                          n = n.contentDocument.head;
                        } catch (e) {
                          n = null;
                        }
                      e[t] = n;
                    }
                    return e[t];
                  };
                })(),
                i = [];
              function l(e) {
                for (var t = -1, n = 0; n < i.length; n++)
                  if (i[n].identifier === e) {
                    t = n;
                    break;
                  }
                return t;
              }
              function s(e, t) {
                for (var n = {}, o = [], r = 0; r < e.length; r++) {
                  var s = e[r],
                    a = t.base ? s[0] + t.base : s[0],
                    c = n[a] || 0,
                    u = ''.concat(a, ' ').concat(c);
                  n[a] = c + 1;
                  var d = l(u),
                    h = { css: s[1], media: s[2], sourceMap: s[3] };
                  -1 !== d
                    ? (i[d].references++, i[d].updater(h))
                    : i.push({
                        identifier: u,
                        updater: m(h, t),
                        references: 1,
                      }),
                    o.push(u);
                }
                return o;
              }
              function a(e) {
                var t = document.createElement('style'),
                  o = e.attributes || {};
                if (void 0 === o.nonce) {
                  var i = n.nc;
                  i && (o.nonce = i);
                }
                if (
                  (Object.keys(o).forEach(function (e) {
                    t.setAttribute(e, o[e]);
                  }),
                  'function' == typeof e.insert)
                )
                  e.insert(t);
                else {
                  var l = r(e.insert || 'head');
                  if (!l)
                    throw new Error(
                      "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                  l.appendChild(t);
                }
                return t;
              }
              var c,
                u =
                  ((c = []),
                  function (e, t) {
                    return (c[e] = t), c.filter(Boolean).join('\n');
                  });
              function d(e, t, n, o) {
                var r = n
                  ? ''
                  : o.media
                  ? '@media '.concat(o.media, ' {').concat(o.css, '}')
                  : o.css;
                if (e.styleSheet) e.styleSheet.cssText = u(t, r);
                else {
                  var i = document.createTextNode(r),
                    l = e.childNodes;
                  l[t] && e.removeChild(l[t]),
                    l.length ? e.insertBefore(i, l[t]) : e.appendChild(i);
                }
              }
              function h(e, t, n) {
                var o = n.css,
                  r = n.media,
                  i = n.sourceMap;
                if (
                  (r ? e.setAttribute('media', r) : e.removeAttribute('media'),
                  i &&
                    btoa &&
                    (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  e.styleSheet)
                )
                  e.styleSheet.cssText = o;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(o));
                }
              }
              var f = null,
                p = 0;
              function m(e, t) {
                var n, o, r;
                if (t.singleton) {
                  var i = p++;
                  (n = f || (f = a(t))),
                    (o = d.bind(null, n, i, !1)),
                    (r = d.bind(null, n, i, !0));
                } else
                  (n = a(t)),
                    (o = h.bind(null, n, t)),
                    (r = function () {
                      !(function (e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                      })(n);
                    });
                return (
                  o(e),
                  function (t) {
                    if (t) {
                      if (
                        t.css === e.css &&
                        t.media === e.media &&
                        t.sourceMap === e.sourceMap
                      )
                        return;
                      o((e = t));
                    } else r();
                  }
                );
              }
              e.exports = function (e, t) {
                (t = t || {}).singleton ||
                  'boolean' == typeof t.singleton ||
                  (t.singleton =
                    (void 0 === o &&
                      (o = Boolean(
                        window && document && document.all && !window.atob
                      )),
                    o));
                var n = s((e = e || []), t);
                return function (e) {
                  if (
                    ((e = e || []),
                    '[object Array]' === Object.prototype.toString.call(e))
                  ) {
                    for (var o = 0; o < n.length; o++) {
                      var r = l(n[o]);
                      i[r].references--;
                    }
                    for (var a = s(e, t), c = 0; c < n.length; c++) {
                      var u = l(n[c]);
                      0 === i[u].references && (i[u].updater(), i.splice(u, 1));
                    }
                    n = a;
                  }
                };
              };
            },
            function (e, t, n) {
              'use strict';
              n.r(t);
              var o = n(17),
                r = n.n(o)()(!1);
              r.push([
                e.i,
                '.reader-mode-spinner-wrapper {\n   position: fixed;\n   width: inherit;\n   background-color: white;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n}\n\n.reader-mode-spinner-wrapper.hidden {\n   display: none;\n}\n\n.reader-mode-spinner {\n   position: absolute;\n   height: 60px;\n   width: 60px;\n   margin: 0px auto;\n   -webkit-animation: rotation .6s infinite linear;\n   -moz-animation: rotation .6s infinite linear;\n   -o-animation: rotation .6s infinite linear;\n   animation: rotation .6s infinite linear;\n   border-left: 6px solid rgba(0, 174, 239, .15);\n   border-right: 6px solid rgba(0, 174, 239, .15);\n   border-bottom: 6px solid rgba(0, 174, 239, .15);\n   border-top: 6px solid rgba(0, 174, 239, .8);\n   border-radius: 100%;\n}\n\n@-webkit-keyframes rotation {\n   from {\n      -webkit-transform: rotate(0deg);\n   }\n\n   to {\n      -webkit-transform: rotate(359deg);\n   }\n}\n\n@-moz-keyframes rotation {\n   from {\n      -moz-transform: rotate(0deg);\n   }\n\n   to {\n      -moz-transform: rotate(359deg);\n   }\n}\n\n@-o-keyframes rotation {\n   from {\n      -o-transform: rotate(0deg);\n   }\n\n   to {\n      -o-transform: rotate(359deg);\n   }\n}\n\n@keyframes rotation {\n   from {\n      transform: rotate(0deg);\n   }\n\n   to {\n      transform: rotate(359deg);\n   }\n}\n',
                '',
              ]),
                (t.default = r);
            },
            function (e, t) {
              function n(t) {
                return (
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? (e.exports = n = function (e) {
                        return typeof e;
                      })
                    : (e.exports = n = function (e) {
                        return e &&
                          'function' == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      }),
                  n(t)
                );
              }
              e.exports = n;
            },
            function (e, t) {
              function n(t, o) {
                return (
                  (e.exports = n =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  n(t, o)
                );
              }
              e.exports = n;
            },
            function (e, t) {
              e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                  o,
                  r = {},
                  i = Object.keys(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r;
              };
            },
            function (e, t, n) {
              var o = n(14);
              e.exports = function (e) {
                if (Array.isArray(e)) return o(e);
              };
            },
            function (e, t) {
              e.exports = function (e) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e);
              };
            },
            function (e, t) {
              e.exports = function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              };
            },
            function (e, t) {
              e.exports = function (e) {
                if (Array.isArray(e)) return e;
              };
            },
            function (e, t) {
              e.exports = function (e, t) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(e)
                ) {
                  var n = [],
                    o = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (
                      var l, s = e[Symbol.iterator]();
                      !(o = (l = s.next()).done) &&
                      (n.push(l.value), !t || n.length !== t);
                      o = !0
                    );
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      o || null == s.return || s.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  return n;
                }
              };
            },
            function (e, t) {
              e.exports = function () {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              };
            },
            function (e, t, n) {
              'use strict';
              n.r(t);
              var o = n(2),
                r = n.n(o),
                i = n(10),
                l = n.n(i);
              function s() {
                return (s =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          (e[o] = n[o]);
                    }
                    return e;
                  }).apply(this, arguments);
              }
              var a = n(5),
                c = n.n(a),
                u = n(16),
                d = ['client', 'offset', 'scroll', 'bounds', 'margin'];
              function h(e) {
                var t = [];
                return (
                  d.forEach(function (n) {
                    e[n] && t.push(n);
                  }),
                  t
                );
              }
              function f(e, t) {
                var n = {};
                if (
                  (t.indexOf('client') > -1 &&
                    (n.client = {
                      top: e.clientTop,
                      left: e.clientLeft,
                      width: e.clientWidth,
                      height: e.clientHeight,
                    }),
                  t.indexOf('offset') > -1 &&
                    (n.offset = {
                      top: e.offsetTop,
                      left: e.offsetLeft,
                      width: e.offsetWidth,
                      height: e.offsetHeight,
                    }),
                  t.indexOf('scroll') > -1 &&
                    (n.scroll = {
                      top: e.scrollTop,
                      left: e.scrollLeft,
                      width: e.scrollWidth,
                      height: e.scrollHeight,
                    }),
                  t.indexOf('bounds') > -1)
                ) {
                  var o = e.getBoundingClientRect();
                  n.bounds = {
                    top: o.top,
                    right: o.right,
                    bottom: o.bottom,
                    left: o.left,
                    width: o.width,
                    height: o.height,
                  };
                }
                if (t.indexOf('margin') > -1) {
                  var r = getComputedStyle(e);
                  n.margin = {
                    top: r ? parseInt(r.marginTop) : 0,
                    right: r ? parseInt(r.marginRight) : 0,
                    bottom: r ? parseInt(r.marginBottom) : 0,
                    left: r ? parseInt(r.marginLeft) : 0,
                  };
                }
                return n;
              }
              function p(e) {
                return (
                  (e && e.ownerDocument && e.ownerDocument.defaultView) ||
                  window
                );
              }
              var m,
                g,
                v,
                y =
                  ((m = function (e) {
                    var t = e.measure,
                      n = e.measureRef,
                      o = e.contentRect;
                    return (0, e.children)({
                      measure: t,
                      measureRef: n,
                      contentRect: o,
                    });
                  }),
                  (v = g = (function (e) {
                    var t, n;
                    function r() {
                      for (
                        var t, n = arguments.length, o = new Array(n), r = 0;
                        r < n;
                        r++
                      )
                        o[r] = arguments[r];
                      return (
                        ((t =
                          e.call.apply(e, [this].concat(o)) || this).state = {
                          contentRect: {
                            entry: {},
                            client: {},
                            offset: {},
                            scroll: {},
                            bounds: {},
                            margin: {},
                          },
                        }),
                        (t._animationFrameID = null),
                        (t._resizeObserver = null),
                        (t._node = null),
                        (t._window = null),
                        (t.measure = function (e) {
                          var n = f(t._node, h(t.props));
                          e && (n.entry = e[0].contentRect),
                            (t._animationFrameID = t._window.requestAnimationFrame(
                              function () {
                                null !== t._resizeObserver &&
                                  (t.setState({ contentRect: n }),
                                  'function' == typeof t.props.onResize &&
                                    t.props.onResize(n));
                              }
                            ));
                        }),
                        (t._handleRef = function (e) {
                          null !== t._resizeObserver &&
                            null !== t._node &&
                            t._resizeObserver.unobserve(t._node),
                            (t._node = e),
                            (t._window = p(t._node));
                          var n = t.props.innerRef;
                          n &&
                            ('function' == typeof n
                              ? n(t._node)
                              : (n.current = t._node)),
                            null !== t._resizeObserver &&
                              null !== t._node &&
                              t._resizeObserver.observe(t._node);
                        }),
                        t
                      );
                    }
                    (n = e),
                      ((t = r).prototype = Object.create(n.prototype)),
                      (t.prototype.constructor = t),
                      (t.__proto__ = n);
                    var i = r.prototype;
                    return (
                      (i.componentDidMount = function () {
                        (this._resizeObserver =
                          null !== this._window && this._window.ResizeObserver
                            ? new this._window.ResizeObserver(this.measure)
                            : new u.a(this.measure)),
                          null !== this._node &&
                            (this._resizeObserver.observe(this._node),
                            'function' == typeof this.props.onResize &&
                              this.props.onResize(
                                f(this._node, h(this.props))
                              ));
                      }),
                      (i.componentWillUnmount = function () {
                        null !== this._window &&
                          this._window.cancelAnimationFrame(
                            this._animationFrameID
                          ),
                          null !== this._resizeObserver &&
                            (this._resizeObserver.disconnect(),
                            (this._resizeObserver = null));
                      }),
                      (i.render = function () {
                        var e = this.props,
                          t =
                            (e.innerRef,
                            e.onResize,
                            (function (e, t) {
                              if (null == e) return {};
                              var n,
                                o,
                                r = {},
                                i = Object.keys(e);
                              for (o = 0; o < i.length; o++)
                                (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                              return r;
                            })(e, ['innerRef', 'onResize']));
                        return Object(o.createElement)(
                          m,
                          s({}, t, {
                            measureRef: this._handleRef,
                            measure: this.measure,
                            contentRect: this.state.contentRect,
                          })
                        );
                      }),
                      r
                    );
                  })(o.Component)),
                  (g.propTypes = {
                    client: c.a.bool,
                    offset: c.a.bool,
                    scroll: c.a.bool,
                    bounds: c.a.bool,
                    margin: c.a.bool,
                    innerRef: c.a.oneOfType([c.a.object, c.a.func]),
                    onResize: c.a.func,
                  }),
                  v);
              (y.displayName = 'Measure'), (y.propTypes.children = c.a.func);
              var S = y;
              function w(e) {
                return (w =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function b(e) {
                return (
                  (function (e) {
                    if (Array.isArray(e)) return C(e);
                  })(e) ||
                  (function (e) {
                    if (
                      'undefined' != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    )
                      return Array.from(e);
                  })(e) ||
                  (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return C(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? C(e, t)
                          : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  })()
                );
              }
              function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
              }
              function x(e, t, n, o, r, i, l) {
                try {
                  var s = e[i](l),
                    a = s.value;
                } catch (e) {
                  return void n(e);
                }
                s.done ? t(a) : Promise.resolve(a).then(o, r);
              }
              function R(e) {
                return function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (o, r) {
                    var i = e.apply(t, n);
                    function l(e) {
                      x(i, o, r, l, s, 'next', e);
                    }
                    function s(e) {
                      x(i, o, r, l, s, 'throw', e);
                    }
                    l(void 0);
                  });
                };
              }
              function T(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function z(e, t) {
                return (z =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function O(e, t) {
                return !t || ('object' !== w(t) && 'function' != typeof t)
                  ? I(e)
                  : t;
              }
              function I(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function P(e) {
                return (P = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              n(22);
              var k = (function (e) {
                !(function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && z(e, t);
                })(s, e);
                var t,
                  n,
                  o,
                  r,
                  i,
                  l = (function (e) {
                    var t = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ('function' == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        o = P(e);
                      if (t) {
                        var r = P(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                      } else n = o.apply(this, arguments);
                      return O(this, n);
                    };
                  })(s);
                function s(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, s),
                    ((t = l.call(this, e)).state = {
                      pages: [],
                      zoom: '1',
                      showSpinner: !0,
                      spinnerStyle: {},
                    }),
                    (t.initialized = !1),
                    (t.doc = void 0),
                    (t.pageObjNumMap = new Map()),
                    (t.preloadPagesNum = 1),
                    (t.handleLinkClicked = t.handleLinkClicked.bind(I(t))),
                    t
                  );
                }
                return (
                  (t = s),
                  (n = [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        (this.viewerElement = document.getElementById(
                          'wv-read-mode'
                        )),
                          this.resizeSpinner(),
                          this.props.viewport.addEventListener(
                            'pageNumberUpdated',
                            this.handlePageNumberUpdated
                          ),
                          this.props.viewport.addEventListener(
                            'zoomUpdated',
                            this.handleZoomUpdated
                          ),
                          this.initialize();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        this.props.viewport.removeEventListener(
                          'pageNumberUpdated',
                          this.handlePageNumberUpdated
                        ),
                          this.props.viewport.removeEventListener(
                            'zoomUpdated',
                            this.handleZoomUpdated
                          );
                      },
                    },
                    {
                      key: 'runPdfNetTask',
                      value: function (e) {
                        var t = this;
                        this.props.pdfNet
                          .initialize(void 0, 'ems')
                          .then(function () {
                            var n = (function () {
                              var t = R(
                                regeneratorRuntime.mark(function t() {
                                  return regeneratorRuntime.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0), (t.next = 3), e()
                                            );
                                          case 3:
                                            t.next = 8;
                                            break;
                                          case 5:
                                            (t.prev = 5),
                                              (t.t0 = t.catch(0)),
                                              console.log(t.t0);
                                          case 8:
                                          case 'end':
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 5]]
                                  );
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })();
                            t.props.pdfNet.runWithoutCleanup(n);
                          });
                      },
                    },
                    {
                      key: 'initialize',
                      value: function () {
                        var e = this,
                          t = (function () {
                            var t = R(
                              regeneratorRuntime.mark(function t() {
                                var n;
                                return regeneratorRuntime.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), e.props.doc;
                                      case 2:
                                        return (
                                          (e.doc = t.sent),
                                          (t.next = 5),
                                          e.doc.initSecurityHandler()
                                        );
                                      case 5:
                                        return (
                                          (t.next = 7), e.doc.getPageCount()
                                        );
                                      case 7:
                                        if (0 !== (n = t.sent)) {
                                          t.next = 12;
                                          break;
                                        }
                                        e.setState(function (e) {
                                          return {
                                            pages: e.pages.concat({
                                              content:
                                                'There is no text content in this file.',
                                              loaded: !0,
                                            }),
                                          };
                                        }),
                                          (t.next = 14);
                                        break;
                                      case 12:
                                        return (
                                          (t.next = 14), e.initializePages(n)
                                        );
                                      case 14:
                                        (e.initialized = !0),
                                          e.props.options.pageNum > 1 &&
                                            e.props.options.pageNum <= n &&
                                            e.jumpToPage(
                                              e.props.options.pageNum - 1
                                            ),
                                          e.setState({ showSpinner: !1 });
                                      case 17:
                                      case 'end':
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function () {
                              return t.apply(this, arguments);
                            };
                          })();
                        this.runPdfNetTask(t);
                      },
                    },
                    {
                      key: 'initializePages',
                      value:
                        ((i = R(
                          regeneratorRuntime.mark(function e(t) {
                            var n,
                              o,
                              r = this;
                            return regeneratorRuntime.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (n = regeneratorRuntime.mark(function e(n) {
                                      var o;
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (!(n < r.preloadPagesNum)) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                r.getPageContent(n, !1, t)
                                              );
                                            case 3:
                                              (e.t0 = e.sent.htmlStr),
                                                (e.next = 7);
                                              break;
                                            case 6:
                                              e.t0 = '';
                                            case 7:
                                              (o = e.t0),
                                                r.setState(function (e) {
                                                  return {
                                                    pages: e.pages.concat({
                                                      content: o,
                                                      loaded:
                                                        n < r.preloadPagesNum,
                                                    }),
                                                  };
                                                });
                                            case 9:
                                            case 'end':
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })),
                                      (o = 0);
                                  case 2:
                                    if (!(o < t)) {
                                      e.next = 7;
                                      break;
                                    }
                                    return e.delegateYield(n(o), 't0', 4);
                                  case 4:
                                    o++, (e.next = 2);
                                    break;
                                  case 7:
                                  case 'end':
                                    return e.stop();
                                }
                            }, e);
                          })
                        )),
                        function (e) {
                          return i.apply(this, arguments);
                        }),
                    },
                    {
                      key: 'getPageContent',
                      value:
                        ((r = R(
                          regeneratorRuntime.mark(function e(t) {
                            var n,
                              o,
                              r,
                              i,
                              l = arguments;
                            return regeneratorRuntime.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n =
                                          l.length > 1 &&
                                          void 0 !== l[1] &&
                                          l[1]),
                                        l.length > 2 && l[2],
                                        (e.next = 5),
                                        this.doc.getPage(t + 1)
                                      );
                                    case 5:
                                      return (
                                        (o = e.sent),
                                        (e.next = 8),
                                        o.getSDFObj()
                                      );
                                    case 8:
                                      return (e.next = 10), e.sent.getObjNum();
                                    case 10:
                                      if (
                                        ((r = e.sent),
                                        this.pageObjNumMap.set(r, t),
                                        !n)
                                      ) {
                                        e.next = 16;
                                        break;
                                      }
                                      (e.t0 = ''), (e.next = 19);
                                      break;
                                    case 16:
                                      return (
                                        (e.next = 18),
                                        this.props.pdfNet.Convert.pageToHtml(o)
                                      );
                                    case 18:
                                      e.t0 = e.sent;
                                    case 19:
                                      return (
                                        (i = e.t0),
                                        e.abrupt('return', {
                                          htmlStr: i,
                                          objNum: r,
                                        })
                                      );
                                    case 21:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function (e) {
                          return r.apply(this, arguments);
                        }),
                    },
                    {
                      key: 'loadPageByNum',
                      value:
                        ((o = R(
                          regeneratorRuntime.mark(function e(t) {
                            var n, o;
                            return regeneratorRuntime.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2), this.getPageContent(t)
                                      );
                                    case 2:
                                      (n = e.sent),
                                        (o = n.htmlStr),
                                        this.setState(function (e) {
                                          var n = b(e.pages);
                                          return (
                                            (n[t] = { content: o, loaded: !0 }),
                                            { pages: n }
                                          );
                                        });
                                    case 5:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function (e) {
                          return o.apply(this, arguments);
                        }),
                    },
                    {
                      key: 'resize',
                      value: function () {
                        this.resizeSpinner();
                      },
                    },
                    {
                      key: 'handleLinkClicked',
                      value: function (e) {
                        var t = this;
                        if (e.match(/^\d+\-0\.html$/)) {
                          var n = Number(e.split('-')[0]);
                          if (this.pageObjNumMap.has(n)) {
                            var o = this.pageObjNumMap.get(n);
                            this.jumpToPage(o);
                          } else {
                            var r = (function () {
                              var e = R(
                                regeneratorRuntime.mark(function e() {
                                  var o, r, i;
                                  return regeneratorRuntime.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          t.setState({ showSpinner: !0 }),
                                            (o = 0);
                                        case 2:
                                          if (!(o < t.state.pages.length)) {
                                            e.next = 16;
                                            break;
                                          }
                                          if (!t.state.pages[o].loaded) {
                                            e.next = 5;
                                            break;
                                          }
                                          return e.abrupt('continue', 13);
                                        case 5:
                                          return (
                                            (e.next = 7),
                                            t.getPageContent(o, !0)
                                          );
                                        case 7:
                                          if (
                                            ((r = e.sent),
                                            (i = r.objNum),
                                            n !== i)
                                          ) {
                                            e.next = 13;
                                            break;
                                          }
                                          return (
                                            t.jumpToPage(o),
                                            t.setState({ showSpinner: !1 }),
                                            e.abrupt('break', 16)
                                          );
                                        case 13:
                                          o++, (e.next = 2);
                                          break;
                                        case 16:
                                        case 'end':
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })();
                            this.runPdfNetTask(r);
                          }
                        } else {
                          var i;
                          null === (i = window) || void 0 === i || i.open(e);
                        }
                      },
                    },
                    {
                      key: 'handleZoomUpdated',
                      value: function (e) {
                        var t = this;
                        this.setState(
                          { zoom: e.detail.toString() },
                          function () {
                            t.resize();
                          }
                        );
                      },
                    },
                    {
                      key: 'resizeSpinner',
                      value: function () {
                        this.setState({
                          spinnerStyle: {
                            zIndex: 10,
                            height: this.viewerElement.clientHeight + 'px',
                          },
                        });
                      },
                    },
                    { key: 'jumpToPage', value: function (e) {} },
                    { key: 'handlePageNumberUpdated', value: function (e) {} },
                  ]) && T(t.prototype, n),
                  s
                );
              })(r.a.PureComponent);
              function M(e) {
                return 'read-mode-page-'.concat(e);
              }
              function E() {
                return navigator.userAgent.indexOf('Safari') > -1;
              }
              function L(e) {
                return (L =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function j(e, t) {
                return (j =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function A(e, t) {
                return !t || ('object' !== L(t) && 'function' != typeof t)
                  ? G(e)
                  : t;
              }
              function G(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function W(e) {
                return (W = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function D(e, t, n) {
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
              var N = (function (e) {
                !(function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && j(e, t);
                })(i, e);
                var t,
                  n,
                  o = (function (e) {
                    var t = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ('function' == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        o = W(e);
                      if (t) {
                        var r = W(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                      } else n = o.apply(this, arguments);
                      return A(this, n);
                    };
                  })(i);
                function i(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, i),
                    D(G((t = o.call(this, e))), 'handleOnLoad', function () {
                      t.props.page.loaded &&
                        (t.resetZoom(),
                        t
                          .getPageDoc()
                          .addEventListener('click', t.handleClickEvent),
                        t.initialized ||
                          (t.pageIframe.current.addEventListener(
                            'resize',
                            t.resetHeight
                          ),
                          (t.initialized = !0)));
                    }),
                    D(G(t), 'handleClickEvent', function (e) {
                      'A' === e.target.tagName &&
                        e.target.getAttribute('href') &&
                        (e.preventDefault(),
                        t.props.clickLinkHandler(
                          e.target.getAttribute('href')
                        ));
                    }),
                    (t.pageIframe = r.a.createRef()),
                    (t.initialized = !1),
                    (t.style = t.getStyle()),
                    t.bindFunctions(),
                    t
                  );
                }
                return (
                  (t = i),
                  (n = [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        this.props.page.loaded && this.loadContent();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function (e) {
                        this.props.page.loaded &&
                          (e.page !== this.props.page && this.loadContent(),
                          e.zoom !== this.props.zoom && this.resetZoom());
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        var e, t, n;
                        null === (e = this.getPageDoc()) ||
                          void 0 === e ||
                          e.removeEventListener('click', this.handleClickEvent),
                          null === (t = this.pageIframe) ||
                            void 0 === t ||
                            null === (n = t.current) ||
                            void 0 === n ||
                            n.removeEventListener('resize', this.resetHeight);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        return r.a.createElement('iframe', {
                          ref: this.pageIframe,
                          id: M(this.props.index + 1),
                          style: this.style,
                          onLoad: this.handleOnLoad,
                        });
                      },
                    },
                    {
                      key: 'getStyle',
                      value: function () {
                        return {
                          border: 'none',
                          width: '100%',
                          height: '500px',
                        };
                      },
                    },
                    {
                      key: 'bindFunctions',
                      value: function () {
                        this.resetHeight = _.throttle(
                          this.resetHeight.bind(this),
                          300,
                          { leading: !1 }
                        );
                      },
                    },
                    {
                      key: 'getPageDoc',
                      value: function () {
                        var e, t, n;
                        return null === (e = this.pageIframe) ||
                          void 0 === e ||
                          null === (t = e.current) ||
                          void 0 === t ||
                          null === (n = t.contentWindow) ||
                          void 0 === n
                          ? void 0
                          : n.document;
                      },
                    },
                    {
                      key: 'getPageDocHtml',
                      value: function () {
                        var e;
                        return null === (e = this.getPageDoc()) || void 0 === e
                          ? void 0
                          : e.getElementsByTagName('html')[0];
                      },
                    },
                    {
                      key: 'loadContent',
                      value: function () {
                        var e = this.getPageDoc();
                        e.open(), e.write(this.props.page.content), e.close();
                      },
                    },
                    {
                      key: 'resetZoom',
                      value: function () {
                        var e = this.getPageDocHtml();
                        if (e) {
                          if (window.chrome || E())
                            e.style.zoom = this.props.zoom;
                          else {
                            var t = (100 / this.props.zoom).toFixed(2);
                            (e.style.transform = 'scale('.concat(
                              this.props.zoom,
                              ')'
                            )),
                              (e.style.transformOrigin = '0 0'),
                              (e.style.width = ''.concat(t, '%')),
                              (e.style.overflow = 'hidden');
                          }
                          this.resetHeight();
                        }
                      },
                    },
                    {
                      key: 'resetHeight',
                      value: function () {
                        this.getPageDocHtml() &&
                          ((this.pageIframe.current.style.height = '1px'),
                          (this.pageIframe.current.style.height =
                            this.getActualScrollHeight() + 'px'),
                          this.props.load && this.props.load());
                      },
                    },
                    {
                      key: 'getActualScrollHeight',
                      value: function () {
                        return this.getPageDocHtml()
                          ? Math.ceil(
                              this.getPageDocHtml().scrollHeight *
                                this.props.zoom
                            ) + 1
                          : void 0;
                      },
                    },
                  ]) && H(t.prototype, n),
                  i
                );
              })(r.a.PureComponent);
              function F(e) {
                return (F =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function U(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              }
              function B(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function V(e, t) {
                return (V =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function q(e, t) {
                return !t || ('object' !== F(t) && 'function' != typeof t)
                  ? (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(e)
                  : t;
              }
              function Z(e) {
                return (Z = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              var K = (function (e) {
                !(function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && V(e, t);
                })(r, e);
                var t,
                  n,
                  o = (function (e) {
                    var t = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ('function' == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        o = Z(e);
                      if (t) {
                        var r = Z(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                      } else n = o.apply(this, arguments);
                      return q(this, n);
                    };
                  })(r);
                function r() {
                  return U(this, r), o.apply(this, arguments);
                }
                return (
                  (t = r),
                  (n = [
                    {
                      key: 'resetHeight',
                      value: function () {
                        if (this.getPageDocHtml()) {
                          var e =
                            this.props.getViewerElement().scrollTop /
                            this.pageIframe.current.scrollHeight;
                          (this.pageIframe.current.style.height = '1px'),
                            (this.pageIframe.current.style.height =
                              this.getActualScrollHeight() + 'px'),
                            (this.props.getViewerElement().scrollTop =
                              e * this.pageIframe.current.scrollHeight);
                        }
                      },
                    },
                  ]) && B(t.prototype, n),
                  r
                );
              })(N);
              function Y(e) {
                return (Y =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function X(e, t, n, o, r, i, l) {
                try {
                  var s = e[i](l),
                    a = s.value;
                } catch (e) {
                  return void n(e);
                }
                s.done ? t(a) : Promise.resolve(a).then(o, r);
              }
              function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? J(Object(n), !0).forEach(function (t) {
                        ie(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : J(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              function Q(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function ee(e, t, n) {
                return (ee =
                  'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                        var o = (function (e, t) {
                          for (
                            ;
                            !Object.prototype.hasOwnProperty.call(e, t) &&
                            null !== (e = re(e));

                          );
                          return e;
                        })(e, t);
                        if (o) {
                          var r = Object.getOwnPropertyDescriptor(o, t);
                          return r.get ? r.get.call(n) : r.value;
                        }
                      })(e, t, n || e);
              }
              function te(e, t) {
                return (te =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function ne(e, t) {
                return !t || ('object' !== Y(t) && 'function' != typeof t)
                  ? oe(e)
                  : t;
              }
              function oe(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function re(e) {
                return (re = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function ie(e, t, n) {
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
              var le = (function (e) {
                !(function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && te(e, t);
                })(i, e);
                var t,
                  n,
                  o = (function (e) {
                    var t = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ('function' == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        o = re(e);
                      if (t) {
                        var r = re(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                      } else n = o.apply(this, arguments);
                      return ne(this, n);
                    };
                  })(i);
                function i(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, i),
                    ie(
                      oe((t = o.call(this, e))),
                      'getViewerElement',
                      function () {
                        return t.viewerElement;
                      }
                    ),
                    (t.state = $(
                      $({}, t.state),
                      {},
                      { pageNum: t.props.options.pageNum || 1 }
                    )),
                    (t.pageContent = r.a.createRef()),
                    (t.handlePageNumberUpdated = _.debounce(
                      t.handlePageNumberUpdated.bind(oe(t)),
                      100
                    )),
                    (t.resize = _.throttle(t.resize.bind(oe(t)), 100)),
                    (t.handleZoomUpdated = _.throttle(
                      t.handleZoomUpdated.bind(oe(t)),
                      100
                    )),
                    t
                  );
                }
                return (
                  (t = i),
                  (n = [
                    {
                      key: 'render',
                      value: function () {
                        var e = this,
                          t = this.state.pages[this.state.pageNum - 1];
                        return r.a.createElement(
                          S,
                          { onResize: this.resize },
                          function (n) {
                            var o = n.measureRef;
                            return r.a.createElement(
                              'div',
                              {
                                id: 'wv-read-mode',
                                style: {
                                  overflowY: 'scroll',
                                  height: '100%',
                                  backgroundColor: 'white',
                                  width: 'inherit',
                                },
                                ref: o,
                              },
                              e.state.showSpinner &&
                                r.a.createElement(
                                  'div',
                                  {
                                    className: 'reader-mode-spinner-wrapper',
                                    style: e.state.spinnerStyle,
                                  },
                                  r.a.createElement('div', {
                                    className: 'reader-mode-spinner',
                                  })
                                ),
                              e.state.pages.length > 0 &&
                                t &&
                                r.a.createElement(K, {
                                  ref: e.pageContent,
                                  page: t,
                                  index: e.state.pageNum - 1,
                                  zoom: e.state.zoom,
                                  clickLinkHandler: e.handleLinkClicked,
                                  getViewerElement: e.getViewerElement,
                                })
                            );
                          }
                        );
                      },
                    },
                    {
                      key: 'resize',
                      value: function () {
                        var e, t, n, o;
                        if (this.initialized) {
                          ee(re(i.prototype), 'resize', this).call(this);
                          var r = new CustomEvent('resize');
                          null === (e = this.pageContent) ||
                            void 0 === e ||
                            null === (t = e.current) ||
                            void 0 === t ||
                            null === (n = t.pageIframe) ||
                            void 0 === n ||
                            null === (o = n.current) ||
                            void 0 === o ||
                            o.dispatchEvent(r);
                        }
                      },
                    },
                    {
                      key: 'jumpToPage',
                      value: function (e) {
                        var t = this;
                        if (
                          (e + 1 !== this.state.pageNum &&
                            (this.setState({ pageNum: e + 1 }),
                            this.props.options.pageNumberUpdateHandler(e + 1)),
                          !this.state.pages[e].loaded)
                        ) {
                          var n = (function () {
                            var n = (function (e) {
                              return function () {
                                var t = this,
                                  n = arguments;
                                return new Promise(function (o, r) {
                                  var i = e.apply(t, n);
                                  function l(e) {
                                    X(i, o, r, l, s, 'next', e);
                                  }
                                  function s(e) {
                                    X(i, o, r, l, s, 'throw', e);
                                  }
                                  l(void 0);
                                });
                              };
                            })(
                              regeneratorRuntime.mark(function n() {
                                return regeneratorRuntime.wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (n.next = 2), t.loadPageByNum(e);
                                      case 2:
                                      case 'end':
                                        return n.stop();
                                    }
                                }, n);
                              })
                            );
                            return function () {
                              return n.apply(this, arguments);
                            };
                          })();
                          this.runPdfNetTask(n);
                        }
                      },
                    },
                    {
                      key: 'handlePageNumberUpdated',
                      value: function (e) {
                        var t = e.detail;
                        t > this.state.pages.length ||
                          t === this.state.pageNum ||
                          (this.setState({ pageNum: t }),
                          this.jumpToPage(t - 1));
                      },
                    },
                  ]) && Q(t.prototype, n),
                  i
                );
              })(k);
              function se(e) {
                return (se =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? ae(Object(n), !0).forEach(function (t) {
                        ue(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : ae(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              function ue(e, t, n) {
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
              function de(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function he(e, t, n) {
                return (he =
                  'undefined' != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (e, t, n) {
                        var o = (function (e, t) {
                          for (
                            ;
                            !Object.prototype.hasOwnProperty.call(e, t) &&
                            null !== (e = me(e));

                          );
                          return e;
                        })(e, t);
                        if (o) {
                          var r = Object.getOwnPropertyDescriptor(o, t);
                          return r.get ? r.get.call(n) : r.value;
                        }
                      })(e, t, n || e);
              }
              function fe(e, t) {
                return (fe =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function pe(e, t) {
                return !t || ('object' !== se(t) && 'function' != typeof t)
                  ? (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(e)
                  : t;
              }
              function me(e) {
                return (me = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              var ge = (function (e) {
                  !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && fe(e, t);
                  })(r, e);
                  var t,
                    n,
                    o = (function (e) {
                      var t = (function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham) return !1;
                        if ('function' == typeof Proxy) return !0;
                        try {
                          return (
                            Date.prototype.toString.call(
                              Reflect.construct(Date, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })();
                      return function () {
                        var n,
                          o = me(e);
                        if (t) {
                          var r = me(this).constructor;
                          n = Reflect.construct(o, arguments, r);
                        } else n = o.apply(this, arguments);
                        return pe(this, n);
                      };
                    })(r);
                  function r(e) {
                    var t;
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          );
                      })(this, r),
                      ((t = o.call(this, e)).isResettingHeight = !1),
                      (t.isResetHeightNeeded = !1),
                      t
                    );
                  }
                  return (
                    (t = r),
                    (n = [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          this.loadContent();
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function (e) {
                          e.zoom !== this.props.zoom && this.resetZoom();
                        },
                      },
                      {
                        key: 'getStyle',
                        value: function () {
                          return ce(
                            ce(
                              {},
                              he(me(r.prototype), 'getStyle', this).call(this)
                            ),
                            {},
                            { height: '100%' }
                          );
                        },
                      },
                      {
                        key: 'bindFunctions',
                        value: function () {
                          this.resetHeight = this.resetHeight.bind(this);
                        },
                      },
                      {
                        key: 'resetHeight',
                        value: function () {
                          this.isResettingHeight
                            ? this.isResetHeightNeeded ||
                              (this.isResetHeightNeeded = !0)
                            : this._resetHeight();
                        },
                      },
                      {
                        key: '_resetHeight',
                        value: function () {
                          var e = this,
                            t = function () {
                              e.isResetHeightNeeded
                                ? e._resetHeight()
                                : (e.isResettingHeight = !1);
                            };
                          this.isResetHeightNeeded = !1;
                          var n = this.pageIframe.current;
                          if (n) {
                            (this.isResettingHeight = !0),
                              (n.style.height = '1px');
                            var o = function () {
                              var o = e.getActualScrollHeight();
                              o
                                ? ((n.style.height = '100%'),
                                  e.props.onResetHeight(
                                    e.props.index + 1,
                                    o,
                                    e.props.parent,
                                    t
                                  ))
                                : t();
                            };
                            E() ? setTimeout(o, 500) : o();
                          }
                        },
                      },
                    ]) && de(t.prototype, n),
                    r
                  );
                })(N),
                ve = n(3),
                _e = n.n(ve),
                ye = n(4),
                Se = n.n(ye),
                we = n(6),
                be = n.n(we),
                Ce = n(7),
                xe = n.n(Ce),
                Re = n(1),
                Te = n.n(Re),
                ze = n(8),
                Oe = n.n(ze),
                Ie = n(0),
                Pe = n.n(Ie);
              function ke() {
                var e = this.constructor.getDerivedStateFromProps(
                  this.props,
                  this.state
                );
                null != e && this.setState(e);
              }
              function Me(e) {
                this.setState(
                  function (t) {
                    var n = this.constructor.getDerivedStateFromProps(e, t);
                    return null != n ? n : null;
                  }.bind(this)
                );
              }
              function Ee(e, t) {
                try {
                  var n = this.props,
                    o = this.state;
                  (this.props = e),
                    (this.state = t),
                    (this.__reactInternalSnapshotFlag = !0),
                    (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
                      n,
                      o
                    ));
                } finally {
                  (this.props = n), (this.state = o);
                }
              }
              function Le(e) {
                var t = e.prototype;
                if (!t || !t.isReactComponent)
                  throw new Error('Can only polyfill class components');
                if (
                  'function' != typeof e.getDerivedStateFromProps &&
                  'function' != typeof t.getSnapshotBeforeUpdate
                )
                  return e;
                var n = null,
                  o = null,
                  r = null;
                if (
                  ('function' == typeof t.componentWillMount
                    ? (n = 'componentWillMount')
                    : 'function' == typeof t.UNSAFE_componentWillMount &&
                      (n = 'UNSAFE_componentWillMount'),
                  'function' == typeof t.componentWillReceiveProps
                    ? (o = 'componentWillReceiveProps')
                    : 'function' == typeof t.UNSAFE_componentWillReceiveProps &&
                      (o = 'UNSAFE_componentWillReceiveProps'),
                  'function' == typeof t.componentWillUpdate
                    ? (r = 'componentWillUpdate')
                    : 'function' == typeof t.UNSAFE_componentWillUpdate &&
                      (r = 'UNSAFE_componentWillUpdate'),
                  null !== n || null !== o || null !== r)
                ) {
                  var i = e.displayName || e.name,
                    l =
                      'function' == typeof e.getDerivedStateFromProps
                        ? 'getDerivedStateFromProps()'
                        : 'getSnapshotBeforeUpdate()';
                  throw Error(
                    'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
                      i +
                      ' uses ' +
                      l +
                      ' but also contains the following legacy lifecycles:' +
                      (null !== n ? '\n  ' + n : '') +
                      (null !== o ? '\n  ' + o : '') +
                      (null !== r ? '\n  ' + r : '') +
                      '\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks'
                  );
                }
                if (
                  ('function' == typeof e.getDerivedStateFromProps &&
                    ((t.componentWillMount = ke),
                    (t.componentWillReceiveProps = Me)),
                  'function' == typeof t.getSnapshotBeforeUpdate)
                ) {
                  if ('function' != typeof t.componentDidUpdate)
                    throw new Error(
                      'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
                    );
                  t.componentWillUpdate = Ee;
                  var s = t.componentDidUpdate;
                  t.componentDidUpdate = function (e, t, n) {
                    var o = this.__reactInternalSnapshotFlag
                      ? this.__reactInternalSnapshot
                      : n;
                    s.call(this, e, t, o);
                  };
                }
                return e;
              }
              (ke.__suppressDeprecationWarning = !0),
                (Me.__suppressDeprecationWarning = !0),
                (Ee.__suppressDeprecationWarning = !0);
              var He = n(9),
                je = n.n(He);
              function Ae(e) {
                var t,
                  n,
                  o = '';
                if ('string' == typeof e || 'number' == typeof e) o += e;
                else if ('object' == typeof e)
                  if (Array.isArray(e))
                    for (t = 0; t < e.length; t++)
                      e[t] && (n = Ae(e[t])) && (o && (o += ' '), (o += n));
                  else for (t in e) e[t] && (o && (o += ' '), (o += t));
                return o;
              }
              var Ge = function () {
                for (var e, t, n = 0, o = ''; n < arguments.length; )
                  (e = arguments[n++]) &&
                    (t = Ae(e)) &&
                    (o && (o += ' '), (o += t));
                return o;
              };
              function We(e) {
                var t = e.cellCount,
                  n = e.cellSize,
                  o = e.computeMetadataCallback,
                  r = e.computeMetadataCallbackProps,
                  i = e.nextCellsCount,
                  l = e.nextCellSize,
                  s = e.nextScrollToIndex,
                  a = e.scrollToIndex,
                  c = e.updateScrollOffsetForScrollToIndex;
                (t === i &&
                  (('number' != typeof n && 'number' != typeof l) ||
                    n === l)) ||
                  (o(r), a >= 0 && a === s && c());
              }
              var De = n(11),
                Ne = n.n(De),
                Fe = (function () {
                  function e(t) {
                    var n = t.cellCount,
                      o = t.cellSizeGetter,
                      r = t.estimatedCellSize;
                    _e()(this, e),
                      Pe()(this, '_cellSizeAndPositionData', {}),
                      Pe()(this, '_lastMeasuredIndex', -1),
                      Pe()(this, '_lastBatchedIndex', -1),
                      Pe()(this, '_cellCount', void 0),
                      Pe()(this, '_cellSizeGetter', void 0),
                      Pe()(this, '_estimatedCellSize', void 0),
                      (this._cellSizeGetter = o),
                      (this._cellCount = n),
                      (this._estimatedCellSize = r);
                  }
                  return (
                    Se()(e, [
                      {
                        key: 'areOffsetsAdjusted',
                        value: function () {
                          return !1;
                        },
                      },
                      {
                        key: 'configure',
                        value: function (e) {
                          var t = e.cellCount,
                            n = e.estimatedCellSize,
                            o = e.cellSizeGetter;
                          (this._cellCount = t),
                            (this._estimatedCellSize = n),
                            (this._cellSizeGetter = o);
                        },
                      },
                      {
                        key: 'getCellCount',
                        value: function () {
                          return this._cellCount;
                        },
                      },
                      {
                        key: 'getEstimatedCellSize',
                        value: function () {
                          return this._estimatedCellSize;
                        },
                      },
                      {
                        key: 'getLastMeasuredIndex',
                        value: function () {
                          return this._lastMeasuredIndex;
                        },
                      },
                      {
                        key: 'getOffsetAdjustment',
                        value: function () {
                          return 0;
                        },
                      },
                      {
                        key: 'getSizeAndPositionOfCell',
                        value: function (e) {
                          if (e < 0 || e >= this._cellCount)
                            throw Error(
                              'Requested index '
                                .concat(e, ' is outside of range 0..')
                                .concat(this._cellCount)
                            );
                          if (e > this._lastMeasuredIndex)
                            for (
                              var t = this.getSizeAndPositionOfLastMeasuredCell(),
                                n = t.offset + t.size,
                                o = this._lastMeasuredIndex + 1;
                              o <= e;
                              o++
                            ) {
                              var r = this._cellSizeGetter({ index: o });
                              if (void 0 === r || isNaN(r))
                                throw Error(
                                  'Invalid size returned for cell '
                                    .concat(o, ' of value ')
                                    .concat(r)
                                );
                              null === r
                                ? ((this._cellSizeAndPositionData[o] = {
                                    offset: n,
                                    size: 0,
                                  }),
                                  (this._lastBatchedIndex = e))
                                : ((this._cellSizeAndPositionData[o] = {
                                    offset: n,
                                    size: r,
                                  }),
                                  (n += r),
                                  (this._lastMeasuredIndex = e));
                            }
                          return this._cellSizeAndPositionData[e];
                        },
                      },
                      {
                        key: 'getSizeAndPositionOfLastMeasuredCell',
                        value: function () {
                          return this._lastMeasuredIndex >= 0
                            ? this._cellSizeAndPositionData[
                                this._lastMeasuredIndex
                              ]
                            : { offset: 0, size: 0 };
                        },
                      },
                      {
                        key: 'getTotalSize',
                        value: function () {
                          var e = this.getSizeAndPositionOfLastMeasuredCell();
                          return (
                            e.offset +
                            e.size +
                            (this._cellCount - this._lastMeasuredIndex - 1) *
                              this._estimatedCellSize
                          );
                        },
                      },
                      {
                        key: 'getUpdatedOffsetForIndex',
                        value: function (e) {
                          var t = e.align,
                            n = void 0 === t ? 'auto' : t,
                            o = e.containerSize,
                            r = e.currentOffset,
                            i = e.targetIndex;
                          if (o <= 0) return 0;
                          var l,
                            s = this.getSizeAndPositionOfCell(i),
                            a = s.offset,
                            c = a - o + s.size;
                          switch (n) {
                            case 'start':
                              l = a;
                              break;
                            case 'end':
                              l = c;
                              break;
                            case 'center':
                              l = a - (o - s.size) / 2;
                              break;
                            default:
                              l = Math.max(c, Math.min(a, r));
                          }
                          var u = this.getTotalSize();
                          return Math.max(0, Math.min(u - o, l));
                        },
                      },
                      {
                        key: 'getVisibleCellRange',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset;
                          if (0 === this.getTotalSize()) return {};
                          var o = n + t,
                            r = this._findNearestCell(n),
                            i = this.getSizeAndPositionOfCell(r);
                          n = i.offset + i.size;
                          for (var l = r; n < o && l < this._cellCount - 1; )
                            l++, (n += this.getSizeAndPositionOfCell(l).size);
                          return { start: r, stop: l };
                        },
                      },
                      {
                        key: 'resetCell',
                        value: function (e) {
                          this._lastMeasuredIndex = Math.min(
                            this._lastMeasuredIndex,
                            e - 1
                          );
                        },
                      },
                      {
                        key: '_binarySearch',
                        value: function (e, t, n) {
                          for (; t <= e; ) {
                            var o = t + Math.floor((e - t) / 2),
                              r = this.getSizeAndPositionOfCell(o).offset;
                            if (r === n) return o;
                            r < n ? (t = o + 1) : r > n && (e = o - 1);
                          }
                          return t > 0 ? t - 1 : 0;
                        },
                      },
                      {
                        key: '_exponentialSearch',
                        value: function (e, t) {
                          for (
                            var n = 1;
                            e < this._cellCount &&
                            this.getSizeAndPositionOfCell(e).offset < t;

                          )
                            (e += n), (n *= 2);
                          return this._binarySearch(
                            Math.min(e, this._cellCount - 1),
                            Math.floor(e / 2),
                            t
                          );
                        },
                      },
                      {
                        key: '_findNearestCell',
                        value: function (e) {
                          if (isNaN(e))
                            throw Error(
                              'Invalid offset '.concat(e, ' specified')
                            );
                          e = Math.max(0, e);
                          var t = this.getSizeAndPositionOfLastMeasuredCell(),
                            n = Math.max(0, this._lastMeasuredIndex);
                          return t.offset >= e
                            ? this._binarySearch(n, 0, e)
                            : this._exponentialSearch(n, e);
                        },
                      },
                    ]),
                    e
                  );
                })(),
                Ue = (function () {
                  function e(t) {
                    var n = t.maxScrollSize,
                      o =
                        void 0 === n
                          ? 'undefined' != typeof window && window.chrome
                            ? 16777100
                            : 15e5
                          : n,
                      r = Ne()(t, ['maxScrollSize']);
                    _e()(this, e),
                      Pe()(this, '_cellSizeAndPositionManager', void 0),
                      Pe()(this, '_maxScrollSize', void 0),
                      (this._cellSizeAndPositionManager = new Fe(r)),
                      (this._maxScrollSize = o);
                  }
                  return (
                    Se()(e, [
                      {
                        key: 'areOffsetsAdjusted',
                        value: function () {
                          return (
                            this._cellSizeAndPositionManager.getTotalSize() >
                            this._maxScrollSize
                          );
                        },
                      },
                      {
                        key: 'configure',
                        value: function (e) {
                          this._cellSizeAndPositionManager.configure(e);
                        },
                      },
                      {
                        key: 'getCellCount',
                        value: function () {
                          return this._cellSizeAndPositionManager.getCellCount();
                        },
                      },
                      {
                        key: 'getEstimatedCellSize',
                        value: function () {
                          return this._cellSizeAndPositionManager.getEstimatedCellSize();
                        },
                      },
                      {
                        key: 'getLastMeasuredIndex',
                        value: function () {
                          return this._cellSizeAndPositionManager.getLastMeasuredIndex();
                        },
                      },
                      {
                        key: 'getOffsetAdjustment',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset,
                            o = this._cellSizeAndPositionManager.getTotalSize(),
                            r = this.getTotalSize(),
                            i = this._getOffsetPercentage({
                              containerSize: t,
                              offset: n,
                              totalSize: r,
                            });
                          return Math.round(i * (r - o));
                        },
                      },
                      {
                        key: 'getSizeAndPositionOfCell',
                        value: function (e) {
                          return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(
                            e
                          );
                        },
                      },
                      {
                        key: 'getSizeAndPositionOfLastMeasuredCell',
                        value: function () {
                          return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
                        },
                      },
                      {
                        key: 'getTotalSize',
                        value: function () {
                          return Math.min(
                            this._maxScrollSize,
                            this._cellSizeAndPositionManager.getTotalSize()
                          );
                        },
                      },
                      {
                        key: 'getUpdatedOffsetForIndex',
                        value: function (e) {
                          var t = e.align,
                            n = void 0 === t ? 'auto' : t,
                            o = e.containerSize,
                            r = e.currentOffset,
                            i = e.targetIndex;
                          r = this._safeOffsetToOffset({
                            containerSize: o,
                            offset: r,
                          });
                          var l = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex(
                            {
                              align: n,
                              containerSize: o,
                              currentOffset: r,
                              targetIndex: i,
                            }
                          );
                          return this._offsetToSafeOffset({
                            containerSize: o,
                            offset: l,
                          });
                        },
                      },
                      {
                        key: 'getVisibleCellRange',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset;
                          return (
                            (n = this._safeOffsetToOffset({
                              containerSize: t,
                              offset: n,
                            })),
                            this._cellSizeAndPositionManager.getVisibleCellRange(
                              { containerSize: t, offset: n }
                            )
                          );
                        },
                      },
                      {
                        key: 'resetCell',
                        value: function (e) {
                          this._cellSizeAndPositionManager.resetCell(e);
                        },
                      },
                      {
                        key: '_getOffsetPercentage',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset,
                            o = e.totalSize;
                          return o <= t ? 0 : n / (o - t);
                        },
                      },
                      {
                        key: '_offsetToSafeOffset',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset,
                            o = this._cellSizeAndPositionManager.getTotalSize(),
                            r = this.getTotalSize();
                          if (o === r) return n;
                          var i = this._getOffsetPercentage({
                            containerSize: t,
                            offset: n,
                            totalSize: o,
                          });
                          return Math.round(i * (r - t));
                        },
                      },
                      {
                        key: '_safeOffsetToOffset',
                        value: function (e) {
                          var t = e.containerSize,
                            n = e.offset,
                            o = this._cellSizeAndPositionManager.getTotalSize(),
                            r = this.getTotalSize();
                          if (o === r) return n;
                          var i = this._getOffsetPercentage({
                            containerSize: t,
                            offset: n,
                            totalSize: r,
                          });
                          return Math.round(i * (o - t));
                        },
                      },
                    ]),
                    e
                  );
                })();
              function Be() {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = {};
                return function (n) {
                  var o = n.callback,
                    r = n.indices,
                    i = Object.keys(r),
                    l =
                      !e ||
                      i.every(function (e) {
                        var t = r[e];
                        return Array.isArray(t) ? t.length > 0 : t >= 0;
                      }),
                    s =
                      i.length !== Object.keys(t).length ||
                      i.some(function (e) {
                        var n = t[e],
                          o = r[e];
                        return Array.isArray(o)
                          ? n.join(',') !== o.join(',')
                          : n !== o;
                      });
                  (t = r), l && s && o(r);
                };
              }
              function Ve(e) {
                var t = e.cellSize,
                  n = e.cellSizeAndPositionManager,
                  o = e.previousCellsCount,
                  r = e.previousCellSize,
                  i = e.previousScrollToAlignment,
                  l = e.previousScrollToIndex,
                  s = e.previousSize,
                  a = e.scrollOffset,
                  c = e.scrollToAlignment,
                  u = e.scrollToIndex,
                  d = e.size,
                  h = e.sizeJustIncreasedFromZero,
                  f = e.updateScrollIndexCallback,
                  p = n.getCellCount(),
                  m = u >= 0 && u < p;
                m &&
                (d !== s ||
                  h ||
                  !r ||
                  ('number' == typeof t && t !== r) ||
                  c !== i ||
                  u !== l)
                  ? f(u)
                  : !m &&
                    p > 0 &&
                    (d < s || p < o) &&
                    a > n.getTotalSize() - d &&
                    f(p - 1);
              }
              var qe,
                Ze,
                Ke = !(
                  'undefined' == typeof window ||
                  !window.document ||
                  !window.document.createElement
                );
              function Ye(e) {
                if (((!qe && 0 !== qe) || e) && Ke) {
                  var t = document.createElement('div');
                  (t.style.position = 'absolute'),
                    (t.style.top = '-9999px'),
                    (t.style.width = '50px'),
                    (t.style.height = '50px'),
                    (t.style.overflow = 'scroll'),
                    document.body.appendChild(t),
                    (qe = t.offsetWidth - t.clientWidth),
                    document.body.removeChild(t);
                }
                return qe;
              }
              var Xe,
                Je,
                $e =
                  (Ze =
                    'undefined' != typeof window
                      ? window
                      : 'undefined' != typeof self
                      ? self
                      : {}).requestAnimationFrame ||
                  Ze.webkitRequestAnimationFrame ||
                  Ze.mozRequestAnimationFrame ||
                  Ze.oRequestAnimationFrame ||
                  Ze.msRequestAnimationFrame ||
                  function (e) {
                    return Ze.setTimeout(e, 1e3 / 60);
                  },
                Qe =
                  Ze.cancelAnimationFrame ||
                  Ze.webkitCancelAnimationFrame ||
                  Ze.mozCancelAnimationFrame ||
                  Ze.oCancelAnimationFrame ||
                  Ze.msCancelAnimationFrame ||
                  function (e) {
                    Ze.clearTimeout(e);
                  },
                et = $e,
                tt = Qe,
                nt = function (e) {
                  return tt(e.id);
                },
                ot = function (e, t) {
                  var n;
                  Promise.resolve().then(function () {
                    n = Date.now();
                  });
                  var o = {
                    id: et(function r() {
                      Date.now() - n >= t ? e.call() : (o.id = et(r));
                    }),
                  };
                  return o;
                };
              function rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function it(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? rt(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : rt(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var lt = 'requested',
                st =
                  ((Je = Xe = (function (e) {
                    function t(e) {
                      var n;
                      _e()(this, t),
                        (n = be()(this, xe()(t).call(this, e))),
                        Pe()(Te()(n), '_onGridRenderedMemoizer', Be()),
                        Pe()(Te()(n), '_onScrollMemoizer', Be(!1)),
                        Pe()(Te()(n), '_deferredInvalidateColumnIndex', null),
                        Pe()(Te()(n), '_deferredInvalidateRowIndex', null),
                        Pe()(Te()(n), '_recomputeScrollLeftFlag', !1),
                        Pe()(Te()(n), '_recomputeScrollTopFlag', !1),
                        Pe()(Te()(n), '_horizontalScrollBarSize', 0),
                        Pe()(Te()(n), '_verticalScrollBarSize', 0),
                        Pe()(Te()(n), '_scrollbarPresenceChanged', !1),
                        Pe()(Te()(n), '_scrollingContainer', void 0),
                        Pe()(Te()(n), '_childrenToDisplay', void 0),
                        Pe()(Te()(n), '_columnStartIndex', void 0),
                        Pe()(Te()(n), '_columnStopIndex', void 0),
                        Pe()(Te()(n), '_rowStartIndex', void 0),
                        Pe()(Te()(n), '_rowStopIndex', void 0),
                        Pe()(Te()(n), '_renderedColumnStartIndex', 0),
                        Pe()(Te()(n), '_renderedColumnStopIndex', 0),
                        Pe()(Te()(n), '_renderedRowStartIndex', 0),
                        Pe()(Te()(n), '_renderedRowStopIndex', 0),
                        Pe()(Te()(n), '_initialScrollTop', void 0),
                        Pe()(Te()(n), '_initialScrollLeft', void 0),
                        Pe()(Te()(n), '_disablePointerEventsTimeoutId', void 0),
                        Pe()(Te()(n), '_styleCache', {}),
                        Pe()(Te()(n), '_cellCache', {}),
                        Pe()(
                          Te()(n),
                          '_debounceScrollEndedCallback',
                          function () {
                            (n._disablePointerEventsTimeoutId = null),
                              n.setState({
                                isScrolling: !1,
                                needToResetStyleCache: !1,
                              });
                          }
                        ),
                        Pe()(
                          Te()(n),
                          '_invokeOnGridRenderedHelper',
                          function () {
                            var e = n.props.onSectionRendered;
                            n._onGridRenderedMemoizer({
                              callback: e,
                              indices: {
                                columnOverscanStartIndex: n._columnStartIndex,
                                columnOverscanStopIndex: n._columnStopIndex,
                                columnStartIndex: n._renderedColumnStartIndex,
                                columnStopIndex: n._renderedColumnStopIndex,
                                rowOverscanStartIndex: n._rowStartIndex,
                                rowOverscanStopIndex: n._rowStopIndex,
                                rowStartIndex: n._renderedRowStartIndex,
                                rowStopIndex: n._renderedRowStopIndex,
                              },
                            });
                          }
                        ),
                        Pe()(
                          Te()(n),
                          '_setScrollingContainerRef',
                          function (e) {
                            n._scrollingContainer = e;
                          }
                        ),
                        Pe()(Te()(n), '_onScroll', function (e) {
                          e.target === n._scrollingContainer &&
                            n.handleScrollEvent(e.target);
                        });
                      var o = new Ue({
                          cellCount: e.columnCount,
                          cellSizeGetter: function (n) {
                            return t._wrapSizeGetter(e.columnWidth)(n);
                          },
                          estimatedCellSize: t._getEstimatedColumnSize(e),
                        }),
                        r = new Ue({
                          cellCount: e.rowCount,
                          cellSizeGetter: function (n) {
                            return t._wrapSizeGetter(e.rowHeight)(n);
                          },
                          estimatedCellSize: t._getEstimatedRowSize(e),
                        });
                      return (
                        (n.state = {
                          instanceProps: {
                            columnSizeAndPositionManager: o,
                            rowSizeAndPositionManager: r,
                            prevColumnWidth: e.columnWidth,
                            prevRowHeight: e.rowHeight,
                            prevColumnCount: e.columnCount,
                            prevRowCount: e.rowCount,
                            prevIsScrolling: !0 === e.isScrolling,
                            prevScrollToColumn: e.scrollToColumn,
                            prevScrollToRow: e.scrollToRow,
                            scrollbarSize: 0,
                            scrollbarSizeMeasured: !1,
                          },
                          isScrolling: !1,
                          scrollDirectionHorizontal: 1,
                          scrollDirectionVertical: 1,
                          scrollLeft: 0,
                          scrollTop: 0,
                          scrollPositionChangeReason: null,
                          needToResetStyleCache: !1,
                        }),
                        e.scrollToRow > 0 &&
                          (n._initialScrollTop = n._getCalculatedScrollTop(
                            e,
                            n.state
                          )),
                        e.scrollToColumn > 0 &&
                          (n._initialScrollLeft = n._getCalculatedScrollLeft(
                            e,
                            n.state
                          )),
                        n
                      );
                    }
                    return (
                      Oe()(t, e),
                      Se()(
                        t,
                        [
                          {
                            key: 'getOffsetForCell',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                t = e.alignment,
                                n =
                                  void 0 === t
                                    ? this.props.scrollToAlignment
                                    : t,
                                o = e.columnIndex,
                                r =
                                  void 0 === o ? this.props.scrollToColumn : o,
                                i = e.rowIndex,
                                l = void 0 === i ? this.props.scrollToRow : i,
                                s = it({}, this.props, {
                                  scrollToAlignment: n,
                                  scrollToColumn: r,
                                  scrollToRow: l,
                                });
                              return {
                                scrollLeft: this._getCalculatedScrollLeft(s),
                                scrollTop: this._getCalculatedScrollTop(s),
                              };
                            },
                          },
                          {
                            key: 'getTotalRowsHeight',
                            value: function () {
                              return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
                            },
                          },
                          {
                            key: 'getTotalColumnsWidth',
                            value: function () {
                              return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
                            },
                          },
                          {
                            key: 'handleScrollEvent',
                            value: function (e) {
                              var t = e.scrollLeft,
                                n = void 0 === t ? 0 : t,
                                o = e.scrollTop,
                                r = void 0 === o ? 0 : o;
                              if (!(r < 0)) {
                                this._debounceScrollEnded();
                                var i = this.props,
                                  l = i.autoHeight,
                                  s = i.autoWidth,
                                  a = i.height,
                                  c = i.width,
                                  u = this.state.instanceProps,
                                  d = u.scrollbarSize,
                                  h = u.rowSizeAndPositionManager.getTotalSize(),
                                  f = u.columnSizeAndPositionManager.getTotalSize(),
                                  p = Math.min(Math.max(0, f - c + d), n),
                                  m = Math.min(Math.max(0, h - a + d), r);
                                if (
                                  this.state.scrollLeft !== p ||
                                  this.state.scrollTop !== m
                                ) {
                                  var g = {
                                    isScrolling: !0,
                                    scrollDirectionHorizontal:
                                      p !== this.state.scrollLeft
                                        ? p > this.state.scrollLeft
                                          ? 1
                                          : -1
                                        : this.state.scrollDirectionHorizontal,
                                    scrollDirectionVertical:
                                      m !== this.state.scrollTop
                                        ? m > this.state.scrollTop
                                          ? 1
                                          : -1
                                        : this.state.scrollDirectionVertical,
                                    scrollPositionChangeReason: 'observed',
                                  };
                                  l || (g.scrollTop = m),
                                    s || (g.scrollLeft = p),
                                    (g.needToResetStyleCache = !1),
                                    this.setState(g);
                                }
                                this._invokeOnScrollMemoizer({
                                  scrollLeft: p,
                                  scrollTop: m,
                                  totalColumnsWidth: f,
                                  totalRowsHeight: h,
                                });
                              }
                            },
                          },
                          {
                            key: 'invalidateCellSizeAfterRender',
                            value: function (e) {
                              var t = e.columnIndex,
                                n = e.rowIndex;
                              (this._deferredInvalidateColumnIndex =
                                'number' ==
                                typeof this._deferredInvalidateColumnIndex
                                  ? Math.min(
                                      this._deferredInvalidateColumnIndex,
                                      t
                                    )
                                  : t),
                                (this._deferredInvalidateRowIndex =
                                  'number' ==
                                  typeof this._deferredInvalidateRowIndex
                                    ? Math.min(
                                        this._deferredInvalidateRowIndex,
                                        n
                                      )
                                    : n);
                            },
                          },
                          {
                            key: 'measureAllCells',
                            value: function () {
                              var e = this.props,
                                t = e.columnCount,
                                n = e.rowCount,
                                o = this.state.instanceProps;
                              o.columnSizeAndPositionManager.getSizeAndPositionOfCell(
                                t - 1
                              ),
                                o.rowSizeAndPositionManager.getSizeAndPositionOfCell(
                                  n - 1
                                );
                            },
                          },
                          {
                            key: 'recomputeGridSize',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                t = e.columnIndex,
                                n = void 0 === t ? 0 : t,
                                o = e.rowIndex,
                                r = void 0 === o ? 0 : o,
                                i = this.props,
                                l = i.scrollToColumn,
                                s = i.scrollToRow,
                                a = this.state.instanceProps;
                              a.columnSizeAndPositionManager.resetCell(n),
                                a.rowSizeAndPositionManager.resetCell(r),
                                (this._recomputeScrollLeftFlag =
                                  l >= 0 &&
                                  (1 === this.state.scrollDirectionHorizontal
                                    ? n <= l
                                    : n >= l)),
                                (this._recomputeScrollTopFlag =
                                  s >= 0 &&
                                  (1 === this.state.scrollDirectionVertical
                                    ? r <= s
                                    : r >= s)),
                                (this._styleCache = {}),
                                (this._cellCache = {}),
                                this.forceUpdate();
                            },
                          },
                          {
                            key: 'scrollToCell',
                            value: function (e) {
                              var t = e.columnIndex,
                                n = e.rowIndex,
                                o = this.props.columnCount,
                                r = this.props;
                              o > 1 &&
                                void 0 !== t &&
                                this._updateScrollLeftForScrollToColumn(
                                  it({}, r, { scrollToColumn: t })
                                ),
                                void 0 !== n &&
                                  this._updateScrollTopForScrollToRow(
                                    it({}, r, { scrollToRow: n })
                                  );
                            },
                          },
                          {
                            key: 'componentDidMount',
                            value: function () {
                              var e = this.props,
                                n = e.getScrollbarSize,
                                o = e.height,
                                r = e.scrollLeft,
                                i = e.scrollToColumn,
                                l = e.scrollTop,
                                s = e.scrollToRow,
                                a = e.width,
                                c = this.state.instanceProps;
                              if (
                                ((this._initialScrollTop = 0),
                                (this._initialScrollLeft = 0),
                                this._handleInvalidatedGridSize(),
                                c.scrollbarSizeMeasured ||
                                  this.setState(function (e) {
                                    var t = it({}, e, {
                                      needToResetStyleCache: !1,
                                    });
                                    return (
                                      (t.instanceProps.scrollbarSize = n()),
                                      (t.instanceProps.scrollbarSizeMeasured = !0),
                                      t
                                    );
                                  }),
                                ('number' == typeof r && r >= 0) ||
                                  ('number' == typeof l && l >= 0))
                              ) {
                                var u = t._getScrollToPositionStateUpdate({
                                  prevState: this.state,
                                  scrollLeft: r,
                                  scrollTop: l,
                                });
                                u &&
                                  ((u.needToResetStyleCache = !1),
                                  this.setState(u));
                              }
                              this._scrollingContainer &&
                                (this._scrollingContainer.scrollLeft !==
                                  this.state.scrollLeft &&
                                  (this._scrollingContainer.scrollLeft = this.state.scrollLeft),
                                this._scrollingContainer.scrollTop !==
                                  this.state.scrollTop &&
                                  (this._scrollingContainer.scrollTop = this.state.scrollTop));
                              var d = o > 0 && a > 0;
                              i >= 0 &&
                                d &&
                                this._updateScrollLeftForScrollToColumn(),
                                s >= 0 &&
                                  d &&
                                  this._updateScrollTopForScrollToRow(),
                                this._invokeOnGridRenderedHelper(),
                                this._invokeOnScrollMemoizer({
                                  scrollLeft: r || 0,
                                  scrollTop: l || 0,
                                  totalColumnsWidth: c.columnSizeAndPositionManager.getTotalSize(),
                                  totalRowsHeight: c.rowSizeAndPositionManager.getTotalSize(),
                                }),
                                this._maybeCallOnScrollbarPresenceChange();
                            },
                          },
                          {
                            key: 'componentDidUpdate',
                            value: function (e, t) {
                              var n = this,
                                o = this.props,
                                r = o.autoHeight,
                                i = o.autoWidth,
                                l = o.columnCount,
                                s = o.height,
                                a = o.rowCount,
                                c = o.scrollToAlignment,
                                u = o.scrollToColumn,
                                d = o.scrollToRow,
                                h = o.width,
                                f = this.state,
                                p = f.scrollLeft,
                                m = f.scrollPositionChangeReason,
                                g = f.scrollTop,
                                v = f.instanceProps;
                              this._handleInvalidatedGridSize();
                              var _ =
                                (l > 0 && 0 === e.columnCount) ||
                                (a > 0 && 0 === e.rowCount);
                              m === lt &&
                                (!i &&
                                  p >= 0 &&
                                  (p !== this._scrollingContainer.scrollLeft ||
                                    _) &&
                                  (this._scrollingContainer.scrollLeft = p),
                                !r &&
                                  g >= 0 &&
                                  (g !== this._scrollingContainer.scrollTop ||
                                    _) &&
                                  (this._scrollingContainer.scrollTop = g));
                              var y =
                                (0 === e.width || 0 === e.height) &&
                                s > 0 &&
                                h > 0;
                              if (
                                (this._recomputeScrollLeftFlag
                                  ? ((this._recomputeScrollLeftFlag = !1),
                                    this._updateScrollLeftForScrollToColumn(
                                      this.props
                                    ))
                                  : Ve({
                                      cellSizeAndPositionManager:
                                        v.columnSizeAndPositionManager,
                                      previousCellsCount: e.columnCount,
                                      previousCellSize: e.columnWidth,
                                      previousScrollToAlignment:
                                        e.scrollToAlignment,
                                      previousScrollToIndex: e.scrollToColumn,
                                      previousSize: e.width,
                                      scrollOffset: p,
                                      scrollToAlignment: c,
                                      scrollToIndex: u,
                                      size: h,
                                      sizeJustIncreasedFromZero: y,
                                      updateScrollIndexCallback: function () {
                                        return n._updateScrollLeftForScrollToColumn(
                                          n.props
                                        );
                                      },
                                    }),
                                this._recomputeScrollTopFlag
                                  ? ((this._recomputeScrollTopFlag = !1),
                                    this._updateScrollTopForScrollToRow(
                                      this.props
                                    ))
                                  : Ve({
                                      cellSizeAndPositionManager:
                                        v.rowSizeAndPositionManager,
                                      previousCellsCount: e.rowCount,
                                      previousCellSize: e.rowHeight,
                                      previousScrollToAlignment:
                                        e.scrollToAlignment,
                                      previousScrollToIndex: e.scrollToRow,
                                      previousSize: e.height,
                                      scrollOffset: g,
                                      scrollToAlignment: c,
                                      scrollToIndex: d,
                                      size: s,
                                      sizeJustIncreasedFromZero: y,
                                      updateScrollIndexCallback: function () {
                                        return n._updateScrollTopForScrollToRow(
                                          n.props
                                        );
                                      },
                                    }),
                                this._invokeOnGridRenderedHelper(),
                                p !== t.scrollLeft || g !== t.scrollTop)
                              ) {
                                var S = v.rowSizeAndPositionManager.getTotalSize(),
                                  w = v.columnSizeAndPositionManager.getTotalSize();
                                this._invokeOnScrollMemoizer({
                                  scrollLeft: p,
                                  scrollTop: g,
                                  totalColumnsWidth: w,
                                  totalRowsHeight: S,
                                });
                              }
                              this._maybeCallOnScrollbarPresenceChange();
                            },
                          },
                          {
                            key: 'componentWillUnmount',
                            value: function () {
                              this._disablePointerEventsTimeoutId &&
                                nt(this._disablePointerEventsTimeoutId);
                            },
                          },
                          {
                            key: 'render',
                            value: function () {
                              var e = this.props,
                                t = e.autoContainerWidth,
                                n = e.autoHeight,
                                r = e.autoWidth,
                                i = e.className,
                                l = e.containerProps,
                                s = e.containerRole,
                                a = e.containerStyle,
                                c = e.height,
                                u = e.id,
                                d = e.noContentRenderer,
                                h = e.role,
                                f = e.style,
                                p = e.tabIndex,
                                m = e.width,
                                g = this.state,
                                v = g.instanceProps,
                                _ = g.needToResetStyleCache,
                                y = this._isScrolling(),
                                S = {
                                  boxSizing: 'border-box',
                                  direction: 'ltr',
                                  height: n ? 'auto' : c,
                                  position: 'relative',
                                  width: r ? 'auto' : m,
                                  WebkitOverflowScrolling: 'touch',
                                  willChange: 'transform',
                                };
                              _ && (this._styleCache = {}),
                                this.state.isScrolling ||
                                  this._resetStyleCache(),
                                this._calculateChildrenToRender(
                                  this.props,
                                  this.state
                                );
                              var w = v.columnSizeAndPositionManager.getTotalSize(),
                                b = v.rowSizeAndPositionManager.getTotalSize(),
                                C = b > c ? v.scrollbarSize : 0,
                                x = w > m ? v.scrollbarSize : 0;
                              (x === this._horizontalScrollBarSize &&
                                C === this._verticalScrollBarSize) ||
                                ((this._horizontalScrollBarSize = x),
                                (this._verticalScrollBarSize = C),
                                (this._scrollbarPresenceChanged = !0)),
                                (S.overflowX = w + C <= m ? 'hidden' : 'auto'),
                                (S.overflowY = b + x <= c ? 'hidden' : 'auto');
                              var R = this._childrenToDisplay,
                                T = 0 === R.length && c > 0 && m > 0;
                              return o.createElement(
                                'div',
                                je()(
                                  { ref: this._setScrollingContainerRef },
                                  l,
                                  {
                                    'aria-label': this.props['aria-label'],
                                    'aria-readonly': this.props[
                                      'aria-readonly'
                                    ],
                                    className: Ge('ReactVirtualized__Grid', i),
                                    id: u,
                                    onScroll: this._onScroll,
                                    role: h,
                                    style: it({}, S, {}, f),
                                    tabIndex: p,
                                  }
                                ),
                                R.length > 0 &&
                                  o.createElement(
                                    'div',
                                    {
                                      className:
                                        'ReactVirtualized__Grid__innerScrollContainer',
                                      role: s,
                                      style: it(
                                        {
                                          width: t ? 'auto' : w,
                                          height: b,
                                          maxWidth: w,
                                          maxHeight: b,
                                          overflow: 'hidden',
                                          pointerEvents: y ? 'none' : '',
                                          position: 'relative',
                                        },
                                        a
                                      ),
                                    },
                                    R
                                  ),
                                T && d()
                              );
                            },
                          },
                          {
                            key: '_calculateChildrenToRender',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state,
                                n = e.cellRenderer,
                                o = e.cellRangeRenderer,
                                r = e.columnCount,
                                i = e.deferredMeasurementCache,
                                l = e.height,
                                s = e.overscanColumnCount,
                                a = e.overscanIndicesGetter,
                                c = e.overscanRowCount,
                                u = e.rowCount,
                                d = e.width,
                                h = e.isScrollingOptOut,
                                f = t.scrollDirectionHorizontal,
                                p = t.scrollDirectionVertical,
                                m = t.instanceProps,
                                g =
                                  this._initialScrollTop > 0
                                    ? this._initialScrollTop
                                    : t.scrollTop,
                                v =
                                  this._initialScrollLeft > 0
                                    ? this._initialScrollLeft
                                    : t.scrollLeft,
                                _ = this._isScrolling(e, t);
                              if (
                                ((this._childrenToDisplay = []), l > 0 && d > 0)
                              ) {
                                var y = m.columnSizeAndPositionManager.getVisibleCellRange(
                                    { containerSize: d, offset: v }
                                  ),
                                  S = m.rowSizeAndPositionManager.getVisibleCellRange(
                                    { containerSize: l, offset: g }
                                  ),
                                  w = m.columnSizeAndPositionManager.getOffsetAdjustment(
                                    { containerSize: d, offset: v }
                                  ),
                                  b = m.rowSizeAndPositionManager.getOffsetAdjustment(
                                    { containerSize: l, offset: g }
                                  );
                                (this._renderedColumnStartIndex = y.start),
                                  (this._renderedColumnStopIndex = y.stop),
                                  (this._renderedRowStartIndex = S.start),
                                  (this._renderedRowStopIndex = S.stop);
                                var C = a({
                                    direction: 'horizontal',
                                    cellCount: r,
                                    overscanCellsCount: s,
                                    scrollDirection: f,
                                    startIndex:
                                      'number' == typeof y.start ? y.start : 0,
                                    stopIndex:
                                      'number' == typeof y.stop ? y.stop : -1,
                                  }),
                                  x = a({
                                    direction: 'vertical',
                                    cellCount: u,
                                    overscanCellsCount: c,
                                    scrollDirection: p,
                                    startIndex:
                                      'number' == typeof S.start ? S.start : 0,
                                    stopIndex:
                                      'number' == typeof S.stop ? S.stop : -1,
                                  }),
                                  R = C.overscanStartIndex,
                                  T = C.overscanStopIndex,
                                  z = x.overscanStartIndex,
                                  O = x.overscanStopIndex;
                                if (i) {
                                  if (!i.hasFixedHeight())
                                    for (var I = z; I <= O; I++)
                                      if (!i.has(I, 0)) {
                                        (R = 0), (T = r - 1);
                                        break;
                                      }
                                  if (!i.hasFixedWidth())
                                    for (var P = R; P <= T; P++)
                                      if (!i.has(0, P)) {
                                        (z = 0), (O = u - 1);
                                        break;
                                      }
                                }
                                (this._childrenToDisplay = o({
                                  cellCache: this._cellCache,
                                  cellRenderer: n,
                                  columnSizeAndPositionManager:
                                    m.columnSizeAndPositionManager,
                                  columnStartIndex: R,
                                  columnStopIndex: T,
                                  deferredMeasurementCache: i,
                                  horizontalOffsetAdjustment: w,
                                  isScrolling: _,
                                  isScrollingOptOut: h,
                                  parent: this,
                                  rowSizeAndPositionManager:
                                    m.rowSizeAndPositionManager,
                                  rowStartIndex: z,
                                  rowStopIndex: O,
                                  scrollLeft: v,
                                  scrollTop: g,
                                  styleCache: this._styleCache,
                                  verticalOffsetAdjustment: b,
                                  visibleColumnIndices: y,
                                  visibleRowIndices: S,
                                })),
                                  (this._columnStartIndex = R),
                                  (this._columnStopIndex = T),
                                  (this._rowStartIndex = z),
                                  (this._rowStopIndex = O);
                              }
                            },
                          },
                          {
                            key: '_debounceScrollEnded',
                            value: function () {
                              var e = this.props.scrollingResetTimeInterval;
                              this._disablePointerEventsTimeoutId &&
                                nt(this._disablePointerEventsTimeoutId),
                                (this._disablePointerEventsTimeoutId = ot(
                                  this._debounceScrollEndedCallback,
                                  e
                                ));
                            },
                          },
                          {
                            key: '_handleInvalidatedGridSize',
                            value: function () {
                              if (
                                'number' ==
                                  typeof this._deferredInvalidateColumnIndex &&
                                'number' ==
                                  typeof this._deferredInvalidateRowIndex
                              ) {
                                var e = this._deferredInvalidateColumnIndex,
                                  t = this._deferredInvalidateRowIndex;
                                (this._deferredInvalidateColumnIndex = null),
                                  (this._deferredInvalidateRowIndex = null),
                                  this.recomputeGridSize({
                                    columnIndex: e,
                                    rowIndex: t,
                                  });
                              }
                            },
                          },
                          {
                            key: '_invokeOnScrollMemoizer',
                            value: function (e) {
                              var t = this,
                                n = e.scrollLeft,
                                o = e.scrollTop,
                                r = e.totalColumnsWidth,
                                i = e.totalRowsHeight;
                              this._onScrollMemoizer({
                                callback: function (e) {
                                  var n = e.scrollLeft,
                                    o = e.scrollTop,
                                    l = t.props,
                                    s = l.height;
                                  (0, l.onScroll)({
                                    clientHeight: s,
                                    clientWidth: l.width,
                                    scrollHeight: i,
                                    scrollLeft: n,
                                    scrollTop: o,
                                    scrollWidth: r,
                                  });
                                },
                                indices: { scrollLeft: n, scrollTop: o },
                              });
                            },
                          },
                          {
                            key: '_isScrolling',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state;
                              return Object.hasOwnProperty.call(
                                e,
                                'isScrolling'
                              )
                                ? Boolean(e.isScrolling)
                                : Boolean(t.isScrolling);
                            },
                          },
                          {
                            key: '_maybeCallOnScrollbarPresenceChange',
                            value: function () {
                              if (this._scrollbarPresenceChanged) {
                                var e = this.props.onScrollbarPresenceChange;
                                (this._scrollbarPresenceChanged = !1),
                                  e({
                                    horizontal:
                                      this._horizontalScrollBarSize > 0,
                                    size: this.state.instanceProps
                                      .scrollbarSize,
                                    vertical: this._verticalScrollBarSize > 0,
                                  });
                              }
                            },
                          },
                          {
                            key: 'scrollToPosition',
                            value: function (e) {
                              var n = e.scrollLeft,
                                o = e.scrollTop,
                                r = t._getScrollToPositionStateUpdate({
                                  prevState: this.state,
                                  scrollLeft: n,
                                  scrollTop: o,
                                });
                              r &&
                                ((r.needToResetStyleCache = !1),
                                this.setState(r));
                            },
                          },
                          {
                            key: '_getCalculatedScrollLeft',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                n =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state;
                              return t._getCalculatedScrollLeft(e, n);
                            },
                          },
                          {
                            key: '_updateScrollLeftForScrollToColumn',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                n =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state,
                                o = t._getScrollLeftForScrollToColumnStateUpdate(
                                  e,
                                  n
                                );
                              o &&
                                ((o.needToResetStyleCache = !1),
                                this.setState(o));
                            },
                          },
                          {
                            key: '_getCalculatedScrollTop',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                n =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state;
                              return t._getCalculatedScrollTop(e, n);
                            },
                          },
                          {
                            key: '_resetStyleCache',
                            value: function () {
                              var e = this._styleCache,
                                t = this._cellCache,
                                n = this.props.isScrollingOptOut;
                              (this._cellCache = {}), (this._styleCache = {});
                              for (
                                var o = this._rowStartIndex;
                                o <= this._rowStopIndex;
                                o++
                              )
                                for (
                                  var r = this._columnStartIndex;
                                  r <= this._columnStopIndex;
                                  r++
                                ) {
                                  var i = ''.concat(o, '-').concat(r);
                                  (this._styleCache[i] = e[i]),
                                    n && (this._cellCache[i] = t[i]);
                                }
                            },
                          },
                          {
                            key: '_updateScrollTopForScrollToRow',
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : this.props,
                                n =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : this.state,
                                o = t._getScrollTopForScrollToRowStateUpdate(
                                  e,
                                  n
                                );
                              o &&
                                ((o.needToResetStyleCache = !1),
                                this.setState(o));
                            },
                          },
                        ],
                        [
                          {
                            key: 'getDerivedStateFromProps',
                            value: function (e, n) {
                              var o = {};
                              (0 === e.columnCount && 0 !== n.scrollLeft) ||
                              (0 === e.rowCount && 0 !== n.scrollTop)
                                ? ((o.scrollLeft = 0), (o.scrollTop = 0))
                                : ((e.scrollLeft !== n.scrollLeft &&
                                    e.scrollToColumn < 0) ||
                                    (e.scrollTop !== n.scrollTop &&
                                      e.scrollToRow < 0)) &&
                                  Object.assign(
                                    o,
                                    t._getScrollToPositionStateUpdate({
                                      prevState: n,
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    })
                                  );
                              var r,
                                i,
                                l = n.instanceProps;
                              return (
                                (o.needToResetStyleCache = !1),
                                (e.columnWidth === l.prevColumnWidth &&
                                  e.rowHeight === l.prevRowHeight) ||
                                  (o.needToResetStyleCache = !0),
                                l.columnSizeAndPositionManager.configure({
                                  cellCount: e.columnCount,
                                  estimatedCellSize: t._getEstimatedColumnSize(
                                    e
                                  ),
                                  cellSizeGetter: t._wrapSizeGetter(
                                    e.columnWidth
                                  ),
                                }),
                                l.rowSizeAndPositionManager.configure({
                                  cellCount: e.rowCount,
                                  estimatedCellSize: t._getEstimatedRowSize(e),
                                  cellSizeGetter: t._wrapSizeGetter(
                                    e.rowHeight
                                  ),
                                }),
                                (0 !== l.prevColumnCount &&
                                  0 !== l.prevRowCount) ||
                                  ((l.prevColumnCount = 0),
                                  (l.prevRowCount = 0)),
                                e.autoHeight &&
                                  !1 === e.isScrolling &&
                                  !0 === l.prevIsScrolling &&
                                  Object.assign(o, { isScrolling: !1 }),
                                We({
                                  cellCount: l.prevColumnCount,
                                  cellSize:
                                    'number' == typeof l.prevColumnWidth
                                      ? l.prevColumnWidth
                                      : null,
                                  computeMetadataCallback: function () {
                                    return l.columnSizeAndPositionManager.resetCell(
                                      0
                                    );
                                  },
                                  computeMetadataCallbackProps: e,
                                  nextCellsCount: e.columnCount,
                                  nextCellSize:
                                    'number' == typeof e.columnWidth
                                      ? e.columnWidth
                                      : null,
                                  nextScrollToIndex: e.scrollToColumn,
                                  scrollToIndex: l.prevScrollToColumn,
                                  updateScrollOffsetForScrollToIndex: function () {
                                    r = t._getScrollLeftForScrollToColumnStateUpdate(
                                      e,
                                      n
                                    );
                                  },
                                }),
                                We({
                                  cellCount: l.prevRowCount,
                                  cellSize:
                                    'number' == typeof l.prevRowHeight
                                      ? l.prevRowHeight
                                      : null,
                                  computeMetadataCallback: function () {
                                    return l.rowSizeAndPositionManager.resetCell(
                                      0
                                    );
                                  },
                                  computeMetadataCallbackProps: e,
                                  nextCellsCount: e.rowCount,
                                  nextCellSize:
                                    'number' == typeof e.rowHeight
                                      ? e.rowHeight
                                      : null,
                                  nextScrollToIndex: e.scrollToRow,
                                  scrollToIndex: l.prevScrollToRow,
                                  updateScrollOffsetForScrollToIndex: function () {
                                    i = t._getScrollTopForScrollToRowStateUpdate(
                                      e,
                                      n
                                    );
                                  },
                                }),
                                (l.prevColumnCount = e.columnCount),
                                (l.prevColumnWidth = e.columnWidth),
                                (l.prevIsScrolling = !0 === e.isScrolling),
                                (l.prevRowCount = e.rowCount),
                                (l.prevRowHeight = e.rowHeight),
                                (l.prevScrollToColumn = e.scrollToColumn),
                                (l.prevScrollToRow = e.scrollToRow),
                                (l.scrollbarSize = e.getScrollbarSize()),
                                void 0 === l.scrollbarSize
                                  ? ((l.scrollbarSizeMeasured = !1),
                                    (l.scrollbarSize = 0))
                                  : (l.scrollbarSizeMeasured = !0),
                                (o.instanceProps = l),
                                it({}, o, {}, r, {}, i)
                              );
                            },
                          },
                          {
                            key: '_getEstimatedColumnSize',
                            value: function (e) {
                              return 'number' == typeof e.columnWidth
                                ? e.columnWidth
                                : e.estimatedColumnSize;
                            },
                          },
                          {
                            key: '_getEstimatedRowSize',
                            value: function (e) {
                              return 'number' == typeof e.rowHeight
                                ? e.rowHeight
                                : e.estimatedRowSize;
                            },
                          },
                          {
                            key: '_getScrollToPositionStateUpdate',
                            value: function (e) {
                              var t = e.prevState,
                                n = e.scrollLeft,
                                o = e.scrollTop,
                                r = { scrollPositionChangeReason: lt };
                              return (
                                'number' == typeof n &&
                                  n >= 0 &&
                                  ((r.scrollDirectionHorizontal =
                                    n > t.scrollLeft ? 1 : -1),
                                  (r.scrollLeft = n)),
                                'number' == typeof o &&
                                  o >= 0 &&
                                  ((r.scrollDirectionVertical =
                                    o > t.scrollTop ? 1 : -1),
                                  (r.scrollTop = o)),
                                ('number' == typeof n &&
                                  n >= 0 &&
                                  n !== t.scrollLeft) ||
                                ('number' == typeof o &&
                                  o >= 0 &&
                                  o !== t.scrollTop)
                                  ? r
                                  : {}
                              );
                            },
                          },
                          {
                            key: '_wrapSizeGetter',
                            value: function (e) {
                              return 'function' == typeof e
                                ? e
                                : function () {
                                    return e;
                                  };
                            },
                          },
                          {
                            key: '_getCalculatedScrollLeft',
                            value: function (e, t) {
                              var n = e.columnCount,
                                o = e.height,
                                r = e.scrollToAlignment,
                                i = e.scrollToColumn,
                                l = e.width,
                                s = t.scrollLeft,
                                a = t.instanceProps;
                              if (n > 0) {
                                var c = n - 1,
                                  u = i < 0 ? c : Math.min(c, i),
                                  d = a.rowSizeAndPositionManager.getTotalSize(),
                                  h =
                                    a.scrollbarSizeMeasured && d > o
                                      ? a.scrollbarSize
                                      : 0;
                                return a.columnSizeAndPositionManager.getUpdatedOffsetForIndex(
                                  {
                                    align: r,
                                    containerSize: l - h,
                                    currentOffset: s,
                                    targetIndex: u,
                                  }
                                );
                              }
                              return 0;
                            },
                          },
                          {
                            key: '_getScrollLeftForScrollToColumnStateUpdate',
                            value: function (e, n) {
                              var o = n.scrollLeft,
                                r = t._getCalculatedScrollLeft(e, n);
                              return 'number' == typeof r && r >= 0 && o !== r
                                ? t._getScrollToPositionStateUpdate({
                                    prevState: n,
                                    scrollLeft: r,
                                    scrollTop: -1,
                                  })
                                : {};
                            },
                          },
                          {
                            key: '_getCalculatedScrollTop',
                            value: function (e, t) {
                              var n = e.height,
                                o = e.rowCount,
                                r = e.scrollToAlignment,
                                i = e.scrollToRow,
                                l = e.width,
                                s = t.scrollTop,
                                a = t.instanceProps;
                              if (o > 0) {
                                var c = o - 1,
                                  u = i < 0 ? c : Math.min(c, i),
                                  d = a.columnSizeAndPositionManager.getTotalSize(),
                                  h =
                                    a.scrollbarSizeMeasured && d > l
                                      ? a.scrollbarSize
                                      : 0;
                                return a.rowSizeAndPositionManager.getUpdatedOffsetForIndex(
                                  {
                                    align: r,
                                    containerSize: n - h,
                                    currentOffset: s,
                                    targetIndex: u,
                                  }
                                );
                              }
                              return 0;
                            },
                          },
                          {
                            key: '_getScrollTopForScrollToRowStateUpdate',
                            value: function (e, n) {
                              var o = n.scrollTop,
                                r = t._getCalculatedScrollTop(e, n);
                              return 'number' == typeof r && r >= 0 && o !== r
                                ? t._getScrollToPositionStateUpdate({
                                    prevState: n,
                                    scrollLeft: -1,
                                    scrollTop: r,
                                  })
                                : {};
                            },
                          },
                        ]
                      ),
                      t
                    );
                  })(o.PureComponent)),
                  Pe()(Xe, 'propTypes', null),
                  Je);
              Pe()(st, 'defaultProps', {
                'aria-label': 'grid',
                'aria-readonly': !0,
                autoContainerWidth: !1,
                autoHeight: !1,
                autoWidth: !1,
                cellRangeRenderer: function (e) {
                  for (
                    var t = e.cellCache,
                      n = e.cellRenderer,
                      o = e.columnSizeAndPositionManager,
                      r = e.columnStartIndex,
                      i = e.columnStopIndex,
                      l = e.deferredMeasurementCache,
                      s = e.horizontalOffsetAdjustment,
                      a = e.isScrolling,
                      c = e.isScrollingOptOut,
                      u = e.parent,
                      d = e.rowSizeAndPositionManager,
                      h = e.rowStartIndex,
                      f = e.rowStopIndex,
                      p = e.styleCache,
                      m = e.verticalOffsetAdjustment,
                      g = e.visibleColumnIndices,
                      v = e.visibleRowIndices,
                      _ = [],
                      y = o.areOffsetsAdjusted() || d.areOffsetsAdjusted(),
                      S = !a && !y,
                      w = h;
                    w <= f;
                    w++
                  )
                    for (
                      var b = d.getSizeAndPositionOfCell(w), C = r;
                      C <= i;
                      C++
                    ) {
                      var x = o.getSizeAndPositionOfCell(C),
                        R =
                          C >= g.start &&
                          C <= g.stop &&
                          w >= v.start &&
                          w <= v.stop,
                        T = ''.concat(w, '-').concat(C),
                        z = void 0;
                      S && p[T]
                        ? (z = p[T])
                        : l && !l.has(w, C)
                        ? (z = {
                            height: 'auto',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: 'auto',
                          })
                        : ((z = {
                            height: b.size,
                            left: x.offset + s,
                            position: 'absolute',
                            top: b.offset + m,
                            width: x.size,
                          }),
                          (p[T] = z));
                      var O = {
                          columnIndex: C,
                          isScrolling: a,
                          isVisible: R,
                          key: T,
                          parent: u,
                          rowIndex: w,
                          style: z,
                        },
                        I = void 0;
                      (!c && !a) || s || m
                        ? (I = n(O))
                        : (t[T] || (t[T] = n(O)), (I = t[T])),
                        null != I && !1 !== I && _.push(I);
                    }
                  return _;
                },
                containerRole: 'rowgroup',
                containerStyle: {},
                estimatedColumnSize: 100,
                estimatedRowSize: 30,
                getScrollbarSize: Ye,
                noContentRenderer: function () {
                  return null;
                },
                onScroll: function () {},
                onScrollbarPresenceChange: function () {},
                onSectionRendered: function () {},
                overscanColumnCount: 0,
                overscanIndicesGetter: function (e) {
                  var t = e.cellCount,
                    n = e.overscanCellsCount,
                    o = e.scrollDirection,
                    r = e.startIndex,
                    i = e.stopIndex;
                  return 1 === o
                    ? {
                        overscanStartIndex: Math.max(0, r),
                        overscanStopIndex: Math.min(t - 1, i + n),
                      }
                    : {
                        overscanStartIndex: Math.max(0, r - n),
                        overscanStopIndex: Math.min(t - 1, i),
                      };
                },
                overscanRowCount: 10,
                role: 'grid',
                scrollingResetTimeInterval: 150,
                scrollToAlignment: 'auto',
                scrollToColumn: -1,
                scrollToRow: -1,
                style: {},
                tabIndex: 0,
                isScrollingOptOut: !1,
              }),
                Le(st);
              var at,
                ct,
                ut = st;
              function dt(e) {
                var t = e.cellCount,
                  n = e.overscanCellsCount,
                  o = e.scrollDirection,
                  r = e.startIndex,
                  i = e.stopIndex;
                return (
                  (n = Math.max(1, n)),
                  1 === o
                    ? {
                        overscanStartIndex: Math.max(0, r - 1),
                        overscanStopIndex: Math.min(t - 1, i + n),
                      }
                    : {
                        overscanStartIndex: Math.max(0, r - n),
                        overscanStopIndex: Math.min(t - 1, i + 1),
                      }
                );
              }
              function ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              var ft =
                ((ct = at = (function (e) {
                  function t() {
                    var e, n;
                    _e()(this, t);
                    for (
                      var o = arguments.length, r = new Array(o), i = 0;
                      i < o;
                      i++
                    )
                      r[i] = arguments[i];
                    return (
                      (n = be()(
                        this,
                        (e = xe()(t)).call.apply(e, [this].concat(r))
                      )),
                      Pe()(Te()(n), 'state', {
                        scrollToColumn: 0,
                        scrollToRow: 0,
                        instanceProps: {
                          prevScrollToColumn: 0,
                          prevScrollToRow: 0,
                        },
                      }),
                      Pe()(Te()(n), '_columnStartIndex', 0),
                      Pe()(Te()(n), '_columnStopIndex', 0),
                      Pe()(Te()(n), '_rowStartIndex', 0),
                      Pe()(Te()(n), '_rowStopIndex', 0),
                      Pe()(Te()(n), '_onKeyDown', function (e) {
                        var t = n.props,
                          o = t.columnCount,
                          r = t.disabled,
                          i = t.mode,
                          l = t.rowCount;
                        if (!r) {
                          var s = n._getScrollState(),
                            a = s.scrollToColumn,
                            c = s.scrollToRow,
                            u = n._getScrollState(),
                            d = u.scrollToColumn,
                            h = u.scrollToRow;
                          switch (e.key) {
                            case 'ArrowDown':
                              h =
                                'cells' === i
                                  ? Math.min(h + 1, l - 1)
                                  : Math.min(n._rowStopIndex + 1, l - 1);
                              break;
                            case 'ArrowLeft':
                              d =
                                'cells' === i
                                  ? Math.max(d - 1, 0)
                                  : Math.max(n._columnStartIndex - 1, 0);
                              break;
                            case 'ArrowRight':
                              d =
                                'cells' === i
                                  ? Math.min(d + 1, o - 1)
                                  : Math.min(n._columnStopIndex + 1, o - 1);
                              break;
                            case 'ArrowUp':
                              h =
                                'cells' === i
                                  ? Math.max(h - 1, 0)
                                  : Math.max(n._rowStartIndex - 1, 0);
                          }
                          (d === a && h === c) ||
                            (e.preventDefault(),
                            n._updateScrollState({
                              scrollToColumn: d,
                              scrollToRow: h,
                            }));
                        }
                      }),
                      Pe()(Te()(n), '_onSectionRendered', function (e) {
                        var t = e.columnStartIndex,
                          o = e.columnStopIndex,
                          r = e.rowStartIndex,
                          i = e.rowStopIndex;
                        (n._columnStartIndex = t),
                          (n._columnStopIndex = o),
                          (n._rowStartIndex = r),
                          (n._rowStopIndex = i);
                      }),
                      n
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(
                      t,
                      [
                        {
                          key: 'setScrollIndexes',
                          value: function (e) {
                            var t = e.scrollToColumn,
                              n = e.scrollToRow;
                            this.setState({
                              scrollToRow: n,
                              scrollToColumn: t,
                            });
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props,
                              t = e.className,
                              n = e.children,
                              r = this._getScrollState(),
                              i = r.scrollToColumn,
                              l = r.scrollToRow;
                            return o.createElement(
                              'div',
                              { className: t, onKeyDown: this._onKeyDown },
                              n({
                                onSectionRendered: this._onSectionRendered,
                                scrollToColumn: i,
                                scrollToRow: l,
                              })
                            );
                          },
                        },
                        {
                          key: '_getScrollState',
                          value: function () {
                            return this.props.isControlled
                              ? this.props
                              : this.state;
                          },
                        },
                        {
                          key: '_updateScrollState',
                          value: function (e) {
                            var t = e.scrollToColumn,
                              n = e.scrollToRow,
                              o = this.props,
                              r = o.isControlled,
                              i = o.onScrollToChange;
                            'function' == typeof i &&
                              i({ scrollToColumn: t, scrollToRow: n }),
                              r ||
                                this.setState({
                                  scrollToColumn: t,
                                  scrollToRow: n,
                                });
                          },
                        },
                      ],
                      [
                        {
                          key: 'getDerivedStateFromProps',
                          value: function (e, t) {
                            return e.isControlled
                              ? {}
                              : e.scrollToColumn !==
                                  t.instanceProps.prevScrollToColumn ||
                                e.scrollToRow !==
                                  t.instanceProps.prevScrollToRow
                              ? (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var n =
                                      null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                      ? ht(n, !0).forEach(function (t) {
                                          Pe()(e, t, n[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(n)
                                        )
                                      : ht(n).forEach(function (t) {
                                          Object.defineProperty(
                                            e,
                                            t,
                                            Object.getOwnPropertyDescriptor(
                                              n,
                                              t
                                            )
                                          );
                                        });
                                  }
                                  return e;
                                })({}, t, {
                                  scrollToColumn: e.scrollToColumn,
                                  scrollToRow: e.scrollToRow,
                                  instanceProps: {
                                    prevScrollToColumn: e.scrollToColumn,
                                    prevScrollToRow: e.scrollToRow,
                                  },
                                })
                              : {};
                          },
                        },
                      ]
                    ),
                    t
                  );
                })(o.PureComponent)),
                Pe()(at, 'propTypes', null),
                ct);
              Pe()(ft, 'defaultProps', {
                disabled: !1,
                isControlled: !1,
                mode: 'edges',
                scrollToColumn: 0,
                scrollToRow: 0,
              }),
                Le(ft);
              var pt,
                mt,
                gt = n(12);
              function vt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? vt(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : vt(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var yt =
                ((mt = pt = (function (e) {
                  function t() {
                    var e, n;
                    _e()(this, t);
                    for (
                      var o = arguments.length, r = new Array(o), i = 0;
                      i < o;
                      i++
                    )
                      r[i] = arguments[i];
                    return (
                      (n = be()(
                        this,
                        (e = xe()(t)).call.apply(e, [this].concat(r))
                      )),
                      Pe()(Te()(n), 'state', {
                        height: n.props.defaultHeight || 0,
                        width: n.props.defaultWidth || 0,
                      }),
                      Pe()(Te()(n), '_parentNode', void 0),
                      Pe()(Te()(n), '_autoSizer', void 0),
                      Pe()(Te()(n), '_window', void 0),
                      Pe()(Te()(n), '_detectElementResize', void 0),
                      Pe()(Te()(n), '_onResize', function () {
                        var e = n.props,
                          t = e.disableHeight,
                          o = e.disableWidth,
                          r = e.onResize;
                        if (n._parentNode) {
                          var i = n._parentNode.offsetHeight || 0,
                            l = n._parentNode.offsetWidth || 0,
                            s =
                              (n._window || window).getComputedStyle(
                                n._parentNode
                              ) || {},
                            a = parseInt(s.paddingLeft, 10) || 0,
                            c = parseInt(s.paddingRight, 10) || 0,
                            u = parseInt(s.paddingTop, 10) || 0,
                            d = parseInt(s.paddingBottom, 10) || 0,
                            h = i - u - d,
                            f = l - a - c;
                          ((!t && n.state.height !== h) ||
                            (!o && n.state.width !== f)) &&
                            (n.setState({
                              height: i - u - d,
                              width: l - a - c,
                            }),
                            r({ height: i, width: l }));
                        }
                      }),
                      Pe()(Te()(n), '_setRef', function (e) {
                        n._autoSizer = e;
                      }),
                      n
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(t, [
                      {
                        key: 'componentDidMount',
                        value: function () {
                          var e = this.props.nonce;
                          this._autoSizer &&
                            this._autoSizer.parentNode &&
                            this._autoSizer.parentNode.ownerDocument &&
                            this._autoSizer.parentNode.ownerDocument
                              .defaultView &&
                            this._autoSizer.parentNode instanceof
                              this._autoSizer.parentNode.ownerDocument
                                .defaultView.HTMLElement &&
                            ((this._parentNode = this._autoSizer.parentNode),
                            (this._window = this._autoSizer.parentNode.ownerDocument.defaultView),
                            (this._detectElementResize = Object(gt.a)(
                              e,
                              this._window
                            )),
                            this._detectElementResize.addResizeListener(
                              this._parentNode,
                              this._onResize
                            ),
                            this._onResize());
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function () {
                          this._detectElementResize &&
                            this._parentNode &&
                            this._detectElementResize.removeResizeListener(
                              this._parentNode,
                              this._onResize
                            );
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var e = this.props,
                            t = e.children,
                            n = e.className,
                            r = e.disableHeight,
                            i = e.disableWidth,
                            l = e.style,
                            s = this.state,
                            a = s.height,
                            c = s.width,
                            u = { overflow: 'visible' },
                            d = {};
                          return (
                            r || ((u.height = 0), (d.height = a)),
                            i || ((u.width = 0), (d.width = c)),
                            o.createElement(
                              'div',
                              {
                                className: n,
                                ref: this._setRef,
                                style: _t({}, u, {}, l),
                              },
                              t(d)
                            )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(o.Component)),
                Pe()(pt, 'propTypes', null),
                mt);
              Pe()(yt, 'defaultProps', {
                onResize: function () {},
                disableHeight: !1,
                disableWidth: !1,
                style: {},
              });
              var St,
                wt,
                bt =
                  ((wt = St = (function (e) {
                    function t() {
                      var e, n;
                      _e()(this, t);
                      for (
                        var o = arguments.length, r = new Array(o), i = 0;
                        i < o;
                        i++
                      )
                        r[i] = arguments[i];
                      return (
                        (n = be()(
                          this,
                          (e = xe()(t)).call.apply(e, [this].concat(r))
                        )),
                        Pe()(Te()(n), '_child', void 0),
                        Pe()(Te()(n), '_measure', function () {
                          var e = n.props,
                            t = e.cache,
                            o = e.columnIndex,
                            r = void 0 === o ? 0 : o,
                            i = e.parent,
                            l = e.rowIndex,
                            s = void 0 === l ? n.props.index || 0 : l,
                            a = n._getCellMeasurements(),
                            c = a.height,
                            u = a.width;
                          (c === t.getHeight(s, r) && u === t.getWidth(s, r)) ||
                            (t.set(s, r, u, c),
                            i &&
                              'function' == typeof i.recomputeGridSize &&
                              i.recomputeGridSize({
                                columnIndex: r,
                                rowIndex: s,
                              }));
                        }),
                        Pe()(Te()(n), '_registerChild', function (e) {
                          !e ||
                            e instanceof Element ||
                            console.warn(
                              'CellMeasurer registerChild expects to be passed Element or null'
                            ),
                            (n._child = e),
                            e && n._maybeMeasureCell();
                        }),
                        n
                      );
                    }
                    return (
                      Oe()(t, e),
                      Se()(t, [
                        {
                          key: 'componentDidMount',
                          value: function () {
                            this._maybeMeasureCell();
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function () {
                            this._maybeMeasureCell();
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props.children;
                            return 'function' == typeof e
                              ? e({
                                  measure: this._measure,
                                  registerChild: this._registerChild,
                                })
                              : e;
                          },
                        },
                        {
                          key: '_getCellMeasurements',
                          value: function () {
                            var e = this.props.cache,
                              t = this._child || Object(i.findDOMNode)(this);
                            if (
                              t &&
                              t.ownerDocument &&
                              t.ownerDocument.defaultView &&
                              t instanceof
                                t.ownerDocument.defaultView.HTMLElement
                            ) {
                              var n = t.style.width,
                                o = t.style.height;
                              e.hasFixedWidth() || (t.style.width = 'auto'),
                                e.hasFixedHeight() || (t.style.height = 'auto');
                              var r = Math.ceil(t.offsetHeight),
                                l = Math.ceil(t.offsetWidth);
                              return (
                                n && (t.style.width = n),
                                o && (t.style.height = o),
                                { height: r, width: l }
                              );
                            }
                            return { height: 0, width: 0 };
                          },
                        },
                        {
                          key: '_maybeMeasureCell',
                          value: function () {
                            var e = this.props,
                              t = e.cache,
                              n = e.columnIndex,
                              o = void 0 === n ? 0 : n,
                              r = e.parent,
                              i = e.rowIndex,
                              l = void 0 === i ? this.props.index || 0 : i;
                            if (!t.has(l, o)) {
                              var s = this._getCellMeasurements(),
                                a = s.height,
                                c = s.width;
                              t.set(l, o, c, a),
                                r &&
                                  'function' ==
                                    typeof r.invalidateCellSizeAfterRender &&
                                  r.invalidateCellSizeAfterRender({
                                    columnIndex: o,
                                    rowIndex: l,
                                  });
                            }
                          },
                        },
                      ]),
                      t
                    );
                  })(o.PureComponent)),
                  Pe()(St, 'propTypes', null),
                  wt);
              Pe()(bt, '__internalCellMeasurerFlag', !1);
              var Ct = (function () {
                function e() {
                  var t = this,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  _e()(this, e),
                    Pe()(this, '_cellHeightCache', {}),
                    Pe()(this, '_cellWidthCache', {}),
                    Pe()(this, '_columnWidthCache', {}),
                    Pe()(this, '_rowHeightCache', {}),
                    Pe()(this, '_defaultHeight', void 0),
                    Pe()(this, '_defaultWidth', void 0),
                    Pe()(this, '_minHeight', void 0),
                    Pe()(this, '_minWidth', void 0),
                    Pe()(this, '_keyMapper', void 0),
                    Pe()(this, '_hasFixedHeight', void 0),
                    Pe()(this, '_hasFixedWidth', void 0),
                    Pe()(this, '_columnCount', 0),
                    Pe()(this, '_rowCount', 0),
                    Pe()(this, 'columnWidth', function (e) {
                      var n = e.index,
                        o = t._keyMapper(0, n);
                      return void 0 !== t._columnWidthCache[o]
                        ? t._columnWidthCache[o]
                        : t._defaultWidth;
                    }),
                    Pe()(this, 'rowHeight', function (e) {
                      var n = e.index,
                        o = t._keyMapper(n, 0);
                      return void 0 !== t._rowHeightCache[o]
                        ? t._rowHeightCache[o]
                        : t._defaultHeight;
                    });
                  var o = n.defaultHeight,
                    r = n.defaultWidth,
                    i = n.fixedHeight,
                    l = n.fixedWidth,
                    s = n.keyMapper,
                    a = n.minHeight,
                    c = n.minWidth;
                  (this._hasFixedHeight = !0 === i),
                    (this._hasFixedWidth = !0 === l),
                    (this._minHeight = a || 0),
                    (this._minWidth = c || 0),
                    (this._keyMapper = s || xt),
                    (this._defaultHeight = Math.max(
                      this._minHeight,
                      'number' == typeof o ? o : 30
                    )),
                    (this._defaultWidth = Math.max(
                      this._minWidth,
                      'number' == typeof r ? r : 100
                    ));
                }
                return (
                  Se()(e, [
                    {
                      key: 'clear',
                      value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n = this._keyMapper(e, t);
                        delete this._cellHeightCache[n],
                          delete this._cellWidthCache[n],
                          this._updateCachedColumnAndRowSizes(e, t);
                      },
                    },
                    {
                      key: 'clearAll',
                      value: function () {
                        (this._cellHeightCache = {}),
                          (this._cellWidthCache = {}),
                          (this._columnWidthCache = {}),
                          (this._rowHeightCache = {}),
                          (this._rowCount = 0),
                          (this._columnCount = 0);
                      },
                    },
                    {
                      key: 'hasFixedHeight',
                      value: function () {
                        return this._hasFixedHeight;
                      },
                    },
                    {
                      key: 'hasFixedWidth',
                      value: function () {
                        return this._hasFixedWidth;
                      },
                    },
                    {
                      key: 'getHeight',
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        if (this._hasFixedHeight) return this._defaultHeight;
                        var n = this._keyMapper(e, t);
                        return void 0 !== this._cellHeightCache[n]
                          ? Math.max(this._minHeight, this._cellHeightCache[n])
                          : this._defaultHeight;
                      },
                    },
                    {
                      key: 'getWidth',
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        if (this._hasFixedWidth) return this._defaultWidth;
                        var n = this._keyMapper(e, t);
                        return void 0 !== this._cellWidthCache[n]
                          ? Math.max(this._minWidth, this._cellWidthCache[n])
                          : this._defaultWidth;
                      },
                    },
                    {
                      key: 'has',
                      value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n = this._keyMapper(e, t);
                        return void 0 !== this._cellHeightCache[n];
                      },
                    },
                    {
                      key: 'set',
                      value: function (e, t, n, o) {
                        var r = this._keyMapper(e, t);
                        t >= this._columnCount && (this._columnCount = t + 1),
                          e >= this._rowCount && (this._rowCount = e + 1),
                          (this._cellHeightCache[r] = o),
                          (this._cellWidthCache[r] = n),
                          this._updateCachedColumnAndRowSizes(e, t);
                      },
                    },
                    {
                      key: '_updateCachedColumnAndRowSizes',
                      value: function (e, t) {
                        if (!this._hasFixedWidth) {
                          for (var n = 0, o = 0; o < this._rowCount; o++)
                            n = Math.max(n, this.getWidth(o, t));
                          var r = this._keyMapper(0, t);
                          this._columnWidthCache[r] = n;
                        }
                        if (!this._hasFixedHeight) {
                          for (var i = 0, l = 0; l < this._columnCount; l++)
                            i = Math.max(i, this.getHeight(e, l));
                          var s = this._keyMapper(e, 0);
                          this._rowHeightCache[s] = i;
                        }
                      },
                    },
                    {
                      key: 'defaultHeight',
                      get: function () {
                        return this._defaultHeight;
                      },
                    },
                    {
                      key: 'defaultWidth',
                      get: function () {
                        return this._defaultWidth;
                      },
                    },
                  ]),
                  e
                );
              })();
              function xt(e, t) {
                return ''.concat(e, '-').concat(t);
              }
              function Rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Rt(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : Rt(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var zt = 'observed',
                Ot = 'requested',
                It = (function (e) {
                  function t() {
                    var e, n;
                    _e()(this, t);
                    for (
                      var o = arguments.length, r = new Array(o), i = 0;
                      i < o;
                      i++
                    )
                      r[i] = arguments[i];
                    return (
                      (n = be()(
                        this,
                        (e = xe()(t)).call.apply(e, [this].concat(r))
                      )),
                      Pe()(Te()(n), 'state', {
                        isScrolling: !1,
                        scrollLeft: 0,
                        scrollTop: 0,
                      }),
                      Pe()(
                        Te()(n),
                        '_calculateSizeAndPositionDataOnNextUpdate',
                        !1
                      ),
                      Pe()(Te()(n), '_onSectionRenderedMemoizer', Be()),
                      Pe()(Te()(n), '_onScrollMemoizer', Be(!1)),
                      Pe()(
                        Te()(n),
                        '_invokeOnSectionRenderedHelper',
                        function () {
                          var e = n.props,
                            t = e.cellLayoutManager,
                            o = e.onSectionRendered;
                          n._onSectionRenderedMemoizer({
                            callback: o,
                            indices: { indices: t.getLastRenderedIndices() },
                          });
                        }
                      ),
                      Pe()(Te()(n), '_setScrollingContainerRef', function (e) {
                        n._scrollingContainer = e;
                      }),
                      Pe()(
                        Te()(n),
                        '_updateScrollPositionForScrollToCell',
                        function () {
                          var e = n.props,
                            t = e.cellLayoutManager,
                            o = e.height,
                            r = e.scrollToAlignment,
                            i = e.scrollToCell,
                            l = e.width,
                            s = n.state,
                            a = s.scrollLeft,
                            c = s.scrollTop;
                          if (i >= 0) {
                            var u = t.getScrollPositionForCell({
                              align: r,
                              cellIndex: i,
                              height: o,
                              scrollLeft: a,
                              scrollTop: c,
                              width: l,
                            });
                            (u.scrollLeft === a && u.scrollTop === c) ||
                              n._setScrollPosition(u);
                          }
                        }
                      ),
                      Pe()(Te()(n), '_onScroll', function (e) {
                        if (e.target === n._scrollingContainer) {
                          n._enablePointerEventsAfterDelay();
                          var t = n.props,
                            o = t.cellLayoutManager,
                            r = t.height,
                            i = t.isScrollingChange,
                            l = t.width,
                            s = n._scrollbarSize,
                            a = o.getTotalSize(),
                            c = a.height,
                            u = a.width,
                            d = Math.max(
                              0,
                              Math.min(u - l + s, e.target.scrollLeft)
                            ),
                            h = Math.max(
                              0,
                              Math.min(c - r + s, e.target.scrollTop)
                            );
                          if (
                            n.state.scrollLeft !== d ||
                            n.state.scrollTop !== h
                          ) {
                            var f = e.cancelable ? zt : Ot;
                            n.state.isScrolling || i(!0),
                              n.setState({
                                isScrolling: !0,
                                scrollLeft: d,
                                scrollPositionChangeReason: f,
                                scrollTop: h,
                              });
                          }
                          n._invokeOnScrollMemoizer({
                            scrollLeft: d,
                            scrollTop: h,
                            totalWidth: u,
                            totalHeight: c,
                          });
                        }
                      }),
                      (n._scrollbarSize = Ye()),
                      void 0 === n._scrollbarSize
                        ? ((n._scrollbarSizeMeasured = !1),
                          (n._scrollbarSize = 0))
                        : (n._scrollbarSizeMeasured = !0),
                      n
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(
                      t,
                      [
                        {
                          key: 'recomputeCellSizesAndPositions',
                          value: function () {
                            (this._calculateSizeAndPositionDataOnNextUpdate = !0),
                              this.forceUpdate();
                          },
                        },
                        {
                          key: 'componentDidMount',
                          value: function () {
                            var e = this.props,
                              t = e.cellLayoutManager,
                              n = e.scrollLeft,
                              o = e.scrollToCell,
                              r = e.scrollTop;
                            this._scrollbarSizeMeasured ||
                              ((this._scrollbarSize = Ye()),
                              (this._scrollbarSizeMeasured = !0),
                              this.setState({})),
                              o >= 0
                                ? this._updateScrollPositionForScrollToCell()
                                : (n >= 0 || r >= 0) &&
                                  this._setScrollPosition({
                                    scrollLeft: n,
                                    scrollTop: r,
                                  }),
                              this._invokeOnSectionRenderedHelper();
                            var i = t.getTotalSize(),
                              l = i.height,
                              s = i.width;
                            this._invokeOnScrollMemoizer({
                              scrollLeft: n || 0,
                              scrollTop: r || 0,
                              totalHeight: l,
                              totalWidth: s,
                            });
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function (e, t) {
                            var n = this.props,
                              o = n.height,
                              r = n.scrollToAlignment,
                              i = n.scrollToCell,
                              l = n.width,
                              s = this.state,
                              a = s.scrollLeft,
                              c = s.scrollPositionChangeReason,
                              u = s.scrollTop;
                            c === Ot &&
                              (a >= 0 &&
                                a !== t.scrollLeft &&
                                a !== this._scrollingContainer.scrollLeft &&
                                (this._scrollingContainer.scrollLeft = a),
                              u >= 0 &&
                                u !== t.scrollTop &&
                                u !== this._scrollingContainer.scrollTop &&
                                (this._scrollingContainer.scrollTop = u)),
                              (o === e.height &&
                                r === e.scrollToAlignment &&
                                i === e.scrollToCell &&
                                l === e.width) ||
                                this._updateScrollPositionForScrollToCell(),
                              this._invokeOnSectionRenderedHelper();
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            this._disablePointerEventsTimeoutId &&
                              clearTimeout(this._disablePointerEventsTimeoutId);
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props,
                              t = e.autoHeight,
                              n = e.cellCount,
                              r = e.cellLayoutManager,
                              i = e.className,
                              l = e.height,
                              s = e.horizontalOverscanSize,
                              a = e.id,
                              c = e.noContentRenderer,
                              u = e.style,
                              d = e.verticalOverscanSize,
                              h = e.width,
                              f = this.state,
                              p = f.isScrolling,
                              m = f.scrollLeft,
                              g = f.scrollTop;
                            (this._lastRenderedCellCount !== n ||
                              this._lastRenderedCellLayoutManager !== r ||
                              this._calculateSizeAndPositionDataOnNextUpdate) &&
                              ((this._lastRenderedCellCount = n),
                              (this._lastRenderedCellLayoutManager = r),
                              (this._calculateSizeAndPositionDataOnNextUpdate = !1),
                              r.calculateSizeAndPositionData());
                            var v = r.getTotalSize(),
                              _ = v.height,
                              y = v.width,
                              S = Math.max(0, m - s),
                              w = Math.max(0, g - d),
                              b = Math.min(y, m + h + s),
                              C = Math.min(_, g + l + d),
                              x =
                                l > 0 && h > 0
                                  ? r.cellRenderers({
                                      height: C - w,
                                      isScrolling: p,
                                      width: b - S,
                                      x: S,
                                      y: w,
                                    })
                                  : [],
                              R = {
                                boxSizing: 'border-box',
                                direction: 'ltr',
                                height: t ? 'auto' : l,
                                position: 'relative',
                                WebkitOverflowScrolling: 'touch',
                                width: h,
                                willChange: 'transform',
                              },
                              T = _ > l ? this._scrollbarSize : 0,
                              z = y > h ? this._scrollbarSize : 0;
                            return (
                              (R.overflowX = y + T <= h ? 'hidden' : 'auto'),
                              (R.overflowY = _ + z <= l ? 'hidden' : 'auto'),
                              o.createElement(
                                'div',
                                {
                                  ref: this._setScrollingContainerRef,
                                  'aria-label': this.props['aria-label'],
                                  className: Ge(
                                    'ReactVirtualized__Collection',
                                    i
                                  ),
                                  id: a,
                                  onScroll: this._onScroll,
                                  role: 'grid',
                                  style: Tt({}, R, {}, u),
                                  tabIndex: 0,
                                },
                                n > 0 &&
                                  o.createElement(
                                    'div',
                                    {
                                      className:
                                        'ReactVirtualized__Collection__innerScrollContainer',
                                      style: {
                                        height: _,
                                        maxHeight: _,
                                        maxWidth: y,
                                        overflow: 'hidden',
                                        pointerEvents: p ? 'none' : '',
                                        width: y,
                                      },
                                    },
                                    x
                                  ),
                                0 === n && c()
                              )
                            );
                          },
                        },
                        {
                          key: '_enablePointerEventsAfterDelay',
                          value: function () {
                            var e = this;
                            this._disablePointerEventsTimeoutId &&
                              clearTimeout(this._disablePointerEventsTimeoutId),
                              (this._disablePointerEventsTimeoutId = setTimeout(
                                function () {
                                  (0, e.props.isScrollingChange)(!1),
                                    (e._disablePointerEventsTimeoutId = null),
                                    e.setState({ isScrolling: !1 });
                                },
                                150
                              ));
                          },
                        },
                        {
                          key: '_invokeOnScrollMemoizer',
                          value: function (e) {
                            var t = this,
                              n = e.scrollLeft,
                              o = e.scrollTop,
                              r = e.totalHeight,
                              i = e.totalWidth;
                            this._onScrollMemoizer({
                              callback: function (e) {
                                var n = e.scrollLeft,
                                  o = e.scrollTop,
                                  l = t.props,
                                  s = l.height;
                                (0, l.onScroll)({
                                  clientHeight: s,
                                  clientWidth: l.width,
                                  scrollHeight: r,
                                  scrollLeft: n,
                                  scrollTop: o,
                                  scrollWidth: i,
                                });
                              },
                              indices: { scrollLeft: n, scrollTop: o },
                            });
                          },
                        },
                        {
                          key: '_setScrollPosition',
                          value: function (e) {
                            var t = e.scrollLeft,
                              n = e.scrollTop,
                              o = { scrollPositionChangeReason: Ot };
                            t >= 0 && (o.scrollLeft = t),
                              n >= 0 && (o.scrollTop = n),
                              ((t >= 0 && t !== this.state.scrollLeft) ||
                                (n >= 0 && n !== this.state.scrollTop)) &&
                                this.setState(o);
                          },
                        },
                      ],
                      [
                        {
                          key: 'getDerivedStateFromProps',
                          value: function (e, t) {
                            return 0 !== e.cellCount ||
                              (0 === t.scrollLeft && 0 === t.scrollTop)
                              ? e.scrollLeft !== t.scrollLeft ||
                                e.scrollTop !== t.scrollTop
                                ? {
                                    scrollLeft:
                                      null != e.scrollLeft
                                        ? e.scrollLeft
                                        : t.scrollLeft,
                                    scrollTop:
                                      null != e.scrollTop
                                        ? e.scrollTop
                                        : t.scrollTop,
                                    scrollPositionChangeReason: Ot,
                                  }
                                : null
                              : {
                                  scrollLeft: 0,
                                  scrollTop: 0,
                                  scrollPositionChangeReason: Ot,
                                };
                          },
                        },
                      ]
                    ),
                    t
                  );
                })(o.PureComponent);
              Pe()(It, 'defaultProps', {
                'aria-label': 'grid',
                horizontalOverscanSize: 0,
                noContentRenderer: function () {
                  return null;
                },
                onScroll: function () {
                  return null;
                },
                onSectionRendered: function () {
                  return null;
                },
                scrollToAlignment: 'auto',
                scrollToCell: -1,
                style: {},
                verticalOverscanSize: 0,
              }),
                (It.propTypes = {}),
                Le(It);
              var Pt = It,
                kt = (function () {
                  function e(t) {
                    var n = t.height,
                      o = t.width,
                      r = t.x,
                      i = t.y;
                    _e()(this, e),
                      (this.height = n),
                      (this.width = o),
                      (this.x = r),
                      (this.y = i),
                      (this._indexMap = {}),
                      (this._indices = []);
                  }
                  return (
                    Se()(e, [
                      {
                        key: 'addCellIndex',
                        value: function (e) {
                          var t = e.index;
                          this._indexMap[t] ||
                            ((this._indexMap[t] = !0), this._indices.push(t));
                        },
                      },
                      {
                        key: 'getCellIndices',
                        value: function () {
                          return this._indices;
                        },
                      },
                      {
                        key: 'toString',
                        value: function () {
                          return ''
                            .concat(this.x, ',')
                            .concat(this.y, ' ')
                            .concat(this.width, 'x')
                            .concat(this.height);
                        },
                      },
                    ]),
                    e
                  );
                })(),
                Mt = (function () {
                  function e() {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 100;
                    _e()(this, e),
                      (this._sectionSize = t),
                      (this._cellMetadata = []),
                      (this._sections = {});
                  }
                  return (
                    Se()(e, [
                      {
                        key: 'getCellIndices',
                        value: function (e) {
                          var t = e.height,
                            n = e.width,
                            o = e.x,
                            r = e.y,
                            i = {};
                          return (
                            this.getSections({
                              height: t,
                              width: n,
                              x: o,
                              y: r,
                            }).forEach(function (e) {
                              return e.getCellIndices().forEach(function (e) {
                                i[e] = e;
                              });
                            }),
                            Object.keys(i).map(function (e) {
                              return i[e];
                            })
                          );
                        },
                      },
                      {
                        key: 'getCellMetadata',
                        value: function (e) {
                          var t = e.index;
                          return this._cellMetadata[t];
                        },
                      },
                      {
                        key: 'getSections',
                        value: function (e) {
                          for (
                            var t = e.height,
                              n = e.width,
                              o = e.x,
                              r = e.y,
                              i = Math.floor(o / this._sectionSize),
                              l = Math.floor((o + n - 1) / this._sectionSize),
                              s = Math.floor(r / this._sectionSize),
                              a = Math.floor((r + t - 1) / this._sectionSize),
                              c = [],
                              u = i;
                            u <= l;
                            u++
                          )
                            for (var d = s; d <= a; d++) {
                              var h = ''.concat(u, '.').concat(d);
                              this._sections[h] ||
                                (this._sections[h] = new kt({
                                  height: this._sectionSize,
                                  width: this._sectionSize,
                                  x: u * this._sectionSize,
                                  y: d * this._sectionSize,
                                })),
                                c.push(this._sections[h]);
                            }
                          return c;
                        },
                      },
                      {
                        key: 'getTotalSectionCount',
                        value: function () {
                          return Object.keys(this._sections).length;
                        },
                      },
                      {
                        key: 'toString',
                        value: function () {
                          var e = this;
                          return Object.keys(this._sections).map(function (t) {
                            return e._sections[t].toString();
                          });
                        },
                      },
                      {
                        key: 'registerCell',
                        value: function (e) {
                          var t = e.cellMetadatum,
                            n = e.index;
                          (this._cellMetadata[n] = t),
                            this.getSections(t).forEach(function (e) {
                              return e.addCellIndex({ index: n });
                            });
                        },
                      },
                    ]),
                    e
                  );
                })();
              function Et(e) {
                var t = e.align,
                  n = void 0 === t ? 'auto' : t,
                  o = e.cellOffset,
                  r = e.cellSize,
                  i = e.containerSize,
                  l = e.currentOffset,
                  s = o,
                  a = s - i + r;
                switch (n) {
                  case 'start':
                    return s;
                  case 'end':
                    return a;
                  case 'center':
                    return s - (i - r) / 2;
                  default:
                    return Math.max(a, Math.min(s, l));
                }
              }
              var Lt = (function (e) {
                function t(e, n) {
                  var o;
                  return (
                    _e()(this, t),
                    ((o = be()(
                      this,
                      xe()(t).call(this, e, n)
                    ))._cellMetadata = []),
                    (o._lastRenderedCellIndices = []),
                    (o._cellCache = []),
                    (o._isScrollingChange = o._isScrollingChange.bind(Te()(o))),
                    (o._setCollectionViewRef = o._setCollectionViewRef.bind(
                      Te()(o)
                    )),
                    o
                  );
                }
                return (
                  Oe()(t, e),
                  Se()(t, [
                    {
                      key: 'forceUpdate',
                      value: function () {
                        void 0 !== this._collectionView &&
                          this._collectionView.forceUpdate();
                      },
                    },
                    {
                      key: 'recomputeCellSizesAndPositions',
                      value: function () {
                        (this._cellCache = []),
                          this._collectionView.recomputeCellSizesAndPositions();
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var e = je()({}, this.props);
                        return o.createElement(
                          Pt,
                          je()(
                            {
                              cellLayoutManager: this,
                              isScrollingChange: this._isScrollingChange,
                              ref: this._setCollectionViewRef,
                            },
                            e
                          )
                        );
                      },
                    },
                    {
                      key: 'calculateSizeAndPositionData',
                      value: function () {
                        var e = this.props,
                          t = (function (e) {
                            for (
                              var t = e.cellCount,
                                n = e.cellSizeAndPositionGetter,
                                o = [],
                                r = new Mt(e.sectionSize),
                                i = 0,
                                l = 0,
                                s = 0;
                              s < t;
                              s++
                            ) {
                              var a = n({ index: s });
                              if (
                                null == a.height ||
                                isNaN(a.height) ||
                                null == a.width ||
                                isNaN(a.width) ||
                                null == a.x ||
                                isNaN(a.x) ||
                                null == a.y ||
                                isNaN(a.y)
                              )
                                throw Error(
                                  'Invalid metadata returned for cell '
                                    .concat(s, ':\n        x:')
                                    .concat(a.x, ', y:')
                                    .concat(a.y, ', width:')
                                    .concat(a.width, ', height:')
                                    .concat(a.height)
                                );
                              (i = Math.max(i, a.y + a.height)),
                                (l = Math.max(l, a.x + a.width)),
                                (o[s] = a),
                                r.registerCell({ cellMetadatum: a, index: s });
                            }
                            return {
                              cellMetadata: o,
                              height: i,
                              sectionManager: r,
                              width: l,
                            };
                          })({
                            cellCount: e.cellCount,
                            cellSizeAndPositionGetter:
                              e.cellSizeAndPositionGetter,
                            sectionSize: e.sectionSize,
                          });
                        (this._cellMetadata = t.cellMetadata),
                          (this._sectionManager = t.sectionManager),
                          (this._height = t.height),
                          (this._width = t.width);
                      },
                    },
                    {
                      key: 'getLastRenderedIndices',
                      value: function () {
                        return this._lastRenderedCellIndices;
                      },
                    },
                    {
                      key: 'getScrollPositionForCell',
                      value: function (e) {
                        var t = e.align,
                          n = e.cellIndex,
                          o = e.height,
                          r = e.scrollLeft,
                          i = e.scrollTop,
                          l = e.width,
                          s = this.props.cellCount;
                        if (n >= 0 && n < s) {
                          var a = this._cellMetadata[n];
                          (r = Et({
                            align: t,
                            cellOffset: a.x,
                            cellSize: a.width,
                            containerSize: l,
                            currentOffset: r,
                            targetIndex: n,
                          })),
                            (i = Et({
                              align: t,
                              cellOffset: a.y,
                              cellSize: a.height,
                              containerSize: o,
                              currentOffset: i,
                              targetIndex: n,
                            }));
                        }
                        return { scrollLeft: r, scrollTop: i };
                      },
                    },
                    {
                      key: 'getTotalSize',
                      value: function () {
                        return { height: this._height, width: this._width };
                      },
                    },
                    {
                      key: 'cellRenderers',
                      value: function (e) {
                        var t = this,
                          n = e.height,
                          o = e.isScrolling,
                          r = e.width,
                          i = e.x,
                          l = e.y,
                          s = this.props,
                          a = s.cellGroupRenderer,
                          c = s.cellRenderer;
                        return (
                          (this._lastRenderedCellIndices = this._sectionManager.getCellIndices(
                            { height: n, width: r, x: i, y: l }
                          )),
                          a({
                            cellCache: this._cellCache,
                            cellRenderer: c,
                            cellSizeAndPositionGetter: function (e) {
                              var n = e.index;
                              return t._sectionManager.getCellMetadata({
                                index: n,
                              });
                            },
                            indices: this._lastRenderedCellIndices,
                            isScrolling: o,
                          })
                        );
                      },
                    },
                    {
                      key: '_isScrollingChange',
                      value: function (e) {
                        e || (this._cellCache = []);
                      },
                    },
                    {
                      key: '_setCollectionViewRef',
                      value: function (e) {
                        this._collectionView = e;
                      },
                    },
                  ]),
                  t
                );
              })(o.PureComponent);
              Pe()(Lt, 'defaultProps', {
                'aria-label': 'grid',
                cellGroupRenderer: function (e) {
                  var t = e.cellCache,
                    n = e.cellRenderer,
                    o = e.cellSizeAndPositionGetter,
                    r = e.indices,
                    i = e.isScrolling;
                  return r
                    .map(function (e) {
                      var r = o({ index: e }),
                        l = {
                          index: e,
                          isScrolling: i,
                          key: e,
                          style: {
                            height: r.height,
                            left: r.x,
                            position: 'absolute',
                            top: r.y,
                            width: r.width,
                          },
                        };
                      return i ? (e in t || (t[e] = n(l)), t[e]) : n(l);
                    })
                    .filter(function (e) {
                      return !!e;
                    });
                },
              }),
                (Lt.propTypes = {}),
                ((function (e) {
                  function t(e, n) {
                    var o;
                    return (
                      _e()(this, t),
                      ((o = be()(
                        this,
                        xe()(t).call(this, e, n)
                      ))._registerChild = o._registerChild.bind(Te()(o))),
                      o
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(t, [
                      {
                        key: 'componentDidUpdate',
                        value: function (e) {
                          var t = this.props,
                            n = t.columnMaxWidth,
                            o = t.columnMinWidth,
                            r = t.columnCount,
                            i = t.width;
                          (n === e.columnMaxWidth &&
                            o === e.columnMinWidth &&
                            r === e.columnCount &&
                            i === e.width) ||
                            (this._registeredChild &&
                              this._registeredChild.recomputeGridSize());
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var e = this.props,
                            t = e.children,
                            n = e.columnMaxWidth,
                            o = e.columnMinWidth,
                            r = e.columnCount,
                            i = e.width,
                            l = o || 1,
                            s = n ? Math.min(n, i) : i,
                            a = i / r;
                          return (
                            (a = Math.max(l, a)),
                            (a = Math.min(s, a)),
                            (a = Math.floor(a)),
                            t({
                              adjustedWidth: Math.min(i, a * r),
                              columnWidth: a,
                              getColumnWidth: function () {
                                return a;
                              },
                              registerChild: this._registerChild,
                            })
                          );
                        },
                      },
                      {
                        key: '_registerChild',
                        value: function (e) {
                          if (e && 'function' != typeof e.recomputeGridSize)
                            throw Error(
                              'Unexpected child type registered; only Grid/MultiGrid children are supported.'
                            );
                          (this._registeredChild = e),
                            this._registeredChild &&
                              this._registeredChild.recomputeGridSize();
                        },
                      },
                    ]),
                    t
                  );
                })(o.PureComponent).propTypes = {});
              var Ht = n(18),
                jt = n.n(Ht),
                At = (function (e) {
                  function t(e, n) {
                    var o;
                    return (
                      _e()(this, t),
                      ((o = be()(
                        this,
                        xe()(t).call(this, e, n)
                      ))._loadMoreRowsMemoizer = Be()),
                      (o._onRowsRendered = o._onRowsRendered.bind(Te()(o))),
                      (o._registerChild = o._registerChild.bind(Te()(o))),
                      o
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(t, [
                      {
                        key: 'resetLoadMoreRowsCache',
                        value: function (e) {
                          (this._loadMoreRowsMemoizer = Be()),
                            e &&
                              this._doStuff(
                                this._lastRenderedStartIndex,
                                this._lastRenderedStopIndex
                              );
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          return (0, this.props.children)({
                            onRowsRendered: this._onRowsRendered,
                            registerChild: this._registerChild,
                          });
                        },
                      },
                      {
                        key: '_loadUnloadedRanges',
                        value: function (e) {
                          var t = this,
                            n = this.props.loadMoreRows;
                          e.forEach(function (e) {
                            var o = n(e);
                            o &&
                              o.then(function () {
                                var n;
                                (n = {
                                  lastRenderedStartIndex:
                                    t._lastRenderedStartIndex,
                                  lastRenderedStopIndex:
                                    t._lastRenderedStopIndex,
                                  startIndex: e.startIndex,
                                  stopIndex: e.stopIndex,
                                }).startIndex > n.lastRenderedStopIndex ||
                                  n.stopIndex < n.lastRenderedStartIndex ||
                                  (t._registeredChild &&
                                    (function (e) {
                                      var t =
                                          arguments.length > 1 &&
                                          void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 0,
                                        n =
                                          'function' ==
                                          typeof e.recomputeGridSize
                                            ? e.recomputeGridSize
                                            : e.recomputeRowHeights;
                                      n ? n.call(e, t) : e.forceUpdate();
                                    })(
                                      t._registeredChild,
                                      t._lastRenderedStartIndex
                                    ));
                              });
                          });
                        },
                      },
                      {
                        key: '_onRowsRendered',
                        value: function (e) {
                          var t = e.startIndex,
                            n = e.stopIndex;
                          (this._lastRenderedStartIndex = t),
                            (this._lastRenderedStopIndex = n),
                            this._doStuff(t, n);
                        },
                      },
                      {
                        key: '_doStuff',
                        value: function (e, t) {
                          var n,
                            o = this,
                            r = this.props,
                            i = r.isRowLoaded,
                            l = r.minimumBatchSize,
                            s = r.rowCount,
                            a = r.threshold,
                            c = (function (e) {
                              for (
                                var t = e.isRowLoaded,
                                  n = e.minimumBatchSize,
                                  o = e.rowCount,
                                  r = e.stopIndex,
                                  i = [],
                                  l = null,
                                  s = null,
                                  a = e.startIndex;
                                a <= r;
                                a++
                              )
                                t({ index: a })
                                  ? null !== s &&
                                    (i.push({ startIndex: l, stopIndex: s }),
                                    (l = s = null))
                                  : ((s = a), null === l && (l = a));
                              if (null !== s) {
                                for (
                                  var c = Math.min(
                                      Math.max(s, l + n - 1),
                                      o - 1
                                    ),
                                    u = s + 1;
                                  u <= c && !t({ index: u });
                                  u++
                                )
                                  s = u;
                                i.push({ startIndex: l, stopIndex: s });
                              }
                              if (i.length)
                                for (
                                  var d = i[0];
                                  d.stopIndex - d.startIndex + 1 < n &&
                                  d.startIndex > 0;

                                ) {
                                  var h = d.startIndex - 1;
                                  if (t({ index: h })) break;
                                  d.startIndex = h;
                                }
                              return i;
                            })({
                              isRowLoaded: i,
                              minimumBatchSize: l,
                              rowCount: s,
                              startIndex: Math.max(0, e - a),
                              stopIndex: Math.min(s - 1, t + a),
                            }),
                            u = (n = []).concat.apply(
                              n,
                              jt()(
                                c.map(function (e) {
                                  return [e.startIndex, e.stopIndex];
                                })
                              )
                            );
                          this._loadMoreRowsMemoizer({
                            callback: function () {
                              o._loadUnloadedRanges(c);
                            },
                            indices: { squashedUnloadedRanges: u },
                          });
                        },
                      },
                      {
                        key: '_registerChild',
                        value: function (e) {
                          this._registeredChild = e;
                        },
                      },
                    ]),
                    t
                  );
                })(o.PureComponent);
              Pe()(At, 'defaultProps', {
                minimumBatchSize: 10,
                rowCount: 0,
                threshold: 15,
              }),
                (At.propTypes = {});
              var Gt,
                Wt,
                Dt =
                  ((Wt = Gt = (function (e) {
                    function t() {
                      var e, n;
                      _e()(this, t);
                      for (
                        var o = arguments.length, r = new Array(o), i = 0;
                        i < o;
                        i++
                      )
                        r[i] = arguments[i];
                      return (
                        (n = be()(
                          this,
                          (e = xe()(t)).call.apply(e, [this].concat(r))
                        )),
                        Pe()(Te()(n), 'Grid', void 0),
                        Pe()(Te()(n), '_cellRenderer', function (e) {
                          var t = e.parent,
                            o = e.rowIndex,
                            r = e.style,
                            i = e.isScrolling,
                            l = e.isVisible,
                            s = e.key,
                            a = n.props.rowRenderer,
                            c = Object.getOwnPropertyDescriptor(r, 'width');
                          return (
                            c && c.writable && (r.width = '100%'),
                            a({
                              index: o,
                              style: r,
                              isScrolling: i,
                              isVisible: l,
                              key: s,
                              parent: t,
                            })
                          );
                        }),
                        Pe()(Te()(n), '_setRef', function (e) {
                          n.Grid = e;
                        }),
                        Pe()(Te()(n), '_onScroll', function (e) {
                          var t = e.clientHeight,
                            o = e.scrollHeight,
                            r = e.scrollTop;
                          (0,
                          n.props
                            .onScroll)({ clientHeight: t, scrollHeight: o, scrollTop: r });
                        }),
                        Pe()(Te()(n), '_onSectionRendered', function (e) {
                          var t = e.rowOverscanStartIndex,
                            o = e.rowOverscanStopIndex,
                            r = e.rowStartIndex,
                            i = e.rowStopIndex;
                          (0,
                          n.props
                            .onRowsRendered)({ overscanStartIndex: t, overscanStopIndex: o, startIndex: r, stopIndex: i });
                        }),
                        n
                      );
                    }
                    return (
                      Oe()(t, e),
                      Se()(t, [
                        {
                          key: 'forceUpdateGrid',
                          value: function () {
                            this.Grid && this.Grid.forceUpdate();
                          },
                        },
                        {
                          key: 'getOffsetForRow',
                          value: function (e) {
                            var t = e.alignment,
                              n = e.index;
                            return this.Grid
                              ? this.Grid.getOffsetForCell({
                                  alignment: t,
                                  rowIndex: n,
                                  columnIndex: 0,
                                }).scrollTop
                              : 0;
                          },
                        },
                        {
                          key: 'invalidateCellSizeAfterRender',
                          value: function (e) {
                            var t = e.columnIndex,
                              n = e.rowIndex;
                            this.Grid &&
                              this.Grid.invalidateCellSizeAfterRender({
                                rowIndex: n,
                                columnIndex: t,
                              });
                          },
                        },
                        {
                          key: 'measureAllRows',
                          value: function () {
                            this.Grid && this.Grid.measureAllCells();
                          },
                        },
                        {
                          key: 'recomputeGridSize',
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              t = e.columnIndex,
                              n = void 0 === t ? 0 : t,
                              o = e.rowIndex,
                              r = void 0 === o ? 0 : o;
                            this.Grid &&
                              this.Grid.recomputeGridSize({
                                rowIndex: r,
                                columnIndex: n,
                              });
                          },
                        },
                        {
                          key: 'recomputeRowHeights',
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                            this.Grid &&
                              this.Grid.recomputeGridSize({
                                rowIndex: e,
                                columnIndex: 0,
                              });
                          },
                        },
                        {
                          key: 'scrollToPosition',
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                            this.Grid &&
                              this.Grid.scrollToPosition({ scrollTop: e });
                          },
                        },
                        {
                          key: 'scrollToRow',
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                            this.Grid &&
                              this.Grid.scrollToCell({
                                columnIndex: 0,
                                rowIndex: e,
                              });
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props,
                              t = e.className,
                              n = e.noRowsRenderer,
                              r = e.scrollToIndex,
                              i = e.width,
                              l = Ge('ReactVirtualized__List', t);
                            return o.createElement(
                              ut,
                              je()({}, this.props, {
                                autoContainerWidth: !0,
                                cellRenderer: this._cellRenderer,
                                className: l,
                                columnWidth: i,
                                columnCount: 1,
                                noContentRenderer: n,
                                onScroll: this._onScroll,
                                onSectionRendered: this._onSectionRendered,
                                ref: this._setRef,
                                scrollToRow: r,
                              })
                            );
                          },
                        },
                      ]),
                      t
                    );
                  })(o.PureComponent)),
                  Pe()(Gt, 'propTypes', null),
                  Wt);
              Pe()(Dt, 'defaultProps', {
                autoHeight: !1,
                estimatedRowSize: 30,
                onScroll: function () {},
                noRowsRenderer: function () {
                  return null;
                },
                onRowsRendered: function () {},
                overscanIndicesGetter: dt,
                overscanRowCount: 10,
                scrollToAlignment: 'auto',
                scrollToIndex: -1,
                style: {},
              });
              var Nt = n(19),
                Ft = n.n(Nt),
                Ut = function (e, t, n, o, r) {
                  return 'function' == typeof n
                    ? (function (e, t, n, o, r) {
                        for (var i = n + 1; t <= n; ) {
                          var l = (t + n) >>> 1;
                          r(e[l], o) >= 0
                            ? ((i = l), (n = l - 1))
                            : (t = l + 1);
                        }
                        return i;
                      })(
                        e,
                        void 0 === o ? 0 : 0 | o,
                        void 0 === r ? e.length - 1 : 0 | r,
                        t,
                        n
                      )
                    : (function (e, t, n, o) {
                        for (var r = n + 1; t <= n; ) {
                          var i = (t + n) >>> 1;
                          e[i] >= o ? ((r = i), (n = i - 1)) : (t = i + 1);
                        }
                        return r;
                      })(
                        e,
                        void 0 === n ? 0 : 0 | n,
                        void 0 === o ? e.length - 1 : 0 | o,
                        t
                      );
                };
              function Bt(e, t, n, o, r) {
                (this.mid = e),
                  (this.left = t),
                  (this.right = n),
                  (this.leftPoints = o),
                  (this.rightPoints = r),
                  (this.count =
                    (t ? t.count : 0) + (n ? n.count : 0) + o.length);
              }
              var Vt = Bt.prototype;
              function qt(e, t) {
                (e.mid = t.mid),
                  (e.left = t.left),
                  (e.right = t.right),
                  (e.leftPoints = t.leftPoints),
                  (e.rightPoints = t.rightPoints),
                  (e.count = t.count);
              }
              function Zt(e, t) {
                var n = nn(t);
                (e.mid = n.mid),
                  (e.left = n.left),
                  (e.right = n.right),
                  (e.leftPoints = n.leftPoints),
                  (e.rightPoints = n.rightPoints),
                  (e.count = n.count);
              }
              function Kt(e, t) {
                var n = e.intervals([]);
                n.push(t), Zt(e, n);
              }
              function Yt(e, t) {
                var n = e.intervals([]),
                  o = n.indexOf(t);
                return o < 0 ? 0 : (n.splice(o, 1), Zt(e, n), 1);
              }
              function Xt(e, t, n) {
                for (var o = 0; o < e.length && e[o][0] <= t; ++o) {
                  var r = n(e[o]);
                  if (r) return r;
                }
              }
              function Jt(e, t, n) {
                for (var o = e.length - 1; o >= 0 && e[o][1] >= t; --o) {
                  var r = n(e[o]);
                  if (r) return r;
                }
              }
              function $t(e, t) {
                for (var n = 0; n < e.length; ++n) {
                  var o = t(e[n]);
                  if (o) return o;
                }
              }
              function Qt(e, t) {
                return e - t;
              }
              function en(e, t) {
                return e[0] - t[0] || e[1] - t[1];
              }
              function tn(e, t) {
                return e[1] - t[1] || e[0] - t[0];
              }
              function nn(e) {
                if (0 === e.length) return null;
                for (var t = [], n = 0; n < e.length; ++n)
                  t.push(e[n][0], e[n][1]);
                t.sort(Qt);
                var o = t[t.length >> 1],
                  r = [],
                  i = [],
                  l = [];
                for (n = 0; n < e.length; ++n) {
                  var s = e[n];
                  s[1] < o ? r.push(s) : o < s[0] ? i.push(s) : l.push(s);
                }
                var a = l,
                  c = l.slice();
                return a.sort(en), c.sort(tn), new Bt(o, nn(r), nn(i), a, c);
              }
              function on(e) {
                this.root = e;
              }
              (Vt.intervals = function (e) {
                return (
                  e.push.apply(e, this.leftPoints),
                  this.left && this.left.intervals(e),
                  this.right && this.right.intervals(e),
                  e
                );
              }),
                (Vt.insert = function (e) {
                  var t = this.count - this.leftPoints.length;
                  if (((this.count += 1), e[1] < this.mid))
                    this.left
                      ? 4 * (this.left.count + 1) > 3 * (t + 1)
                        ? Kt(this, e)
                        : this.left.insert(e)
                      : (this.left = nn([e]));
                  else if (e[0] > this.mid)
                    this.right
                      ? 4 * (this.right.count + 1) > 3 * (t + 1)
                        ? Kt(this, e)
                        : this.right.insert(e)
                      : (this.right = nn([e]));
                  else {
                    var n = Ut(this.leftPoints, e, en),
                      o = Ut(this.rightPoints, e, tn);
                    this.leftPoints.splice(n, 0, e),
                      this.rightPoints.splice(o, 0, e);
                  }
                }),
                (Vt.remove = function (e) {
                  var t = this.count - this.leftPoints;
                  if (e[1] < this.mid)
                    return this.left
                      ? 4 * (this.right ? this.right.count : 0) > 3 * (t - 1)
                        ? Yt(this, e)
                        : 2 === (i = this.left.remove(e))
                        ? ((this.left = null), (this.count -= 1), 1)
                        : (1 === i && (this.count -= 1), i)
                      : 0;
                  if (e[0] > this.mid)
                    return this.right
                      ? 4 * (this.left ? this.left.count : 0) > 3 * (t - 1)
                        ? Yt(this, e)
                        : 2 === (i = this.right.remove(e))
                        ? ((this.right = null), (this.count -= 1), 1)
                        : (1 === i && (this.count -= 1), i)
                      : 0;
                  if (1 === this.count) return this.leftPoints[0] === e ? 2 : 0;
                  if (
                    1 === this.leftPoints.length &&
                    this.leftPoints[0] === e
                  ) {
                    if (this.left && this.right) {
                      for (var n = this, o = this.left; o.right; )
                        (n = o), (o = o.right);
                      if (n === this) o.right = this.right;
                      else {
                        var r = this.left,
                          i = this.right;
                        (n.count -= o.count),
                          (n.right = o.left),
                          (o.left = r),
                          (o.right = i);
                      }
                      qt(this, o),
                        (this.count =
                          (this.left ? this.left.count : 0) +
                          (this.right ? this.right.count : 0) +
                          this.leftPoints.length);
                    } else
                      this.left ? qt(this, this.left) : qt(this, this.right);
                    return 1;
                  }
                  for (
                    r = Ut(this.leftPoints, e, en);
                    r < this.leftPoints.length &&
                    this.leftPoints[r][0] === e[0];
                    ++r
                  )
                    if (this.leftPoints[r] === e)
                      for (
                        this.count -= 1,
                          this.leftPoints.splice(r, 1),
                          i = Ut(this.rightPoints, e, tn);
                        i < this.rightPoints.length &&
                        this.rightPoints[i][1] === e[1];
                        ++i
                      )
                        if (this.rightPoints[i] === e)
                          return this.rightPoints.splice(i, 1), 1;
                  return 0;
                }),
                (Vt.queryPoint = function (e, t) {
                  return e < this.mid
                    ? this.left && (n = this.left.queryPoint(e, t))
                      ? n
                      : Xt(this.leftPoints, e, t)
                    : e > this.mid
                    ? this.right && (n = this.right.queryPoint(e, t))
                      ? n
                      : Jt(this.rightPoints, e, t)
                    : $t(this.leftPoints, t);
                  var n;
                }),
                (Vt.queryInterval = function (e, t, n) {
                  var o;
                  return (e < this.mid &&
                    this.left &&
                    (o = this.left.queryInterval(e, t, n))) ||
                    (t > this.mid &&
                      this.right &&
                      (o = this.right.queryInterval(e, t, n)))
                    ? o
                    : t < this.mid
                    ? Xt(this.leftPoints, t, n)
                    : e > this.mid
                    ? Jt(this.rightPoints, e, n)
                    : $t(this.leftPoints, n);
                });
              var rn = on.prototype;
              (rn.insert = function (e) {
                this.root
                  ? this.root.insert(e)
                  : (this.root = new Bt(e[0], null, null, [e], [e]));
              }),
                (rn.remove = function (e) {
                  if (this.root) {
                    var t = this.root.remove(e);
                    return 2 === t && (this.root = null), 0 !== t;
                  }
                  return !1;
                }),
                (rn.queryPoint = function (e, t) {
                  if (this.root) return this.root.queryPoint(e, t);
                }),
                (rn.queryInterval = function (e, t, n) {
                  if (e <= t && this.root)
                    return this.root.queryInterval(e, t, n);
                }),
                Object.defineProperty(rn, 'count', {
                  get: function () {
                    return this.root ? this.root.count : 0;
                  },
                }),
                Object.defineProperty(rn, 'intervals', {
                  get: function () {
                    return this.root ? this.root.intervals([]) : [];
                  },
                });
              var ln,
                sn,
                an = (function () {
                  function e() {
                    _e()(this, e),
                      Pe()(this, '_columnSizeMap', {}),
                      Pe()(this, '_intervalTree', new on(null)),
                      Pe()(this, '_leftMap', {});
                  }
                  return (
                    Se()(e, [
                      {
                        key: 'estimateTotalHeight',
                        value: function (e, t, n) {
                          var o = e - this.count;
                          return this.tallestColumnSize + Math.ceil(o / t) * n;
                        },
                      },
                      {
                        key: 'range',
                        value: function (e, t, n) {
                          var o = this;
                          this._intervalTree.queryInterval(
                            e,
                            e + t,
                            function (e) {
                              var t = Ft()(e, 3),
                                r = t[0],
                                i = (t[1], t[2]);
                              return n(i, o._leftMap[i], r);
                            }
                          );
                        },
                      },
                      {
                        key: 'setPosition',
                        value: function (e, t, n, o) {
                          this._intervalTree.insert([n, n + o, e]),
                            (this._leftMap[e] = t);
                          var r = this._columnSizeMap,
                            i = r[t];
                          r[t] = void 0 === i ? n + o : Math.max(i, n + o);
                        },
                      },
                      {
                        key: 'count',
                        get: function () {
                          return this._intervalTree.count;
                        },
                      },
                      {
                        key: 'shortestColumnSize',
                        get: function () {
                          var e = this._columnSizeMap,
                            t = 0;
                          for (var n in e) {
                            var o = e[n];
                            t = 0 === t ? o : Math.min(t, o);
                          }
                          return t;
                        },
                      },
                      {
                        key: 'tallestColumnSize',
                        get: function () {
                          var e = this._columnSizeMap,
                            t = 0;
                          for (var n in e) {
                            var o = e[n];
                            t = Math.max(t, o);
                          }
                          return t;
                        },
                      },
                    ]),
                    e
                  );
                })();
              function cn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function un(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? cn(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : cn(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var dn =
                ((sn = ln = (function (e) {
                  function t() {
                    var e, n;
                    _e()(this, t);
                    for (
                      var o = arguments.length, r = new Array(o), i = 0;
                      i < o;
                      i++
                    )
                      r[i] = arguments[i];
                    return (
                      (n = be()(
                        this,
                        (e = xe()(t)).call.apply(e, [this].concat(r))
                      )),
                      Pe()(Te()(n), 'state', { isScrolling: !1, scrollTop: 0 }),
                      Pe()(Te()(n), '_debounceResetIsScrollingId', void 0),
                      Pe()(Te()(n), '_invalidateOnUpdateStartIndex', null),
                      Pe()(Te()(n), '_invalidateOnUpdateStopIndex', null),
                      Pe()(Te()(n), '_positionCache', new an()),
                      Pe()(Te()(n), '_startIndex', null),
                      Pe()(Te()(n), '_startIndexMemoized', null),
                      Pe()(Te()(n), '_stopIndex', null),
                      Pe()(Te()(n), '_stopIndexMemoized', null),
                      Pe()(
                        Te()(n),
                        '_debounceResetIsScrollingCallback',
                        function () {
                          n.setState({ isScrolling: !1 });
                        }
                      ),
                      Pe()(Te()(n), '_setScrollingContainerRef', function (e) {
                        n._scrollingContainer = e;
                      }),
                      Pe()(Te()(n), '_onScroll', function (e) {
                        var t = n.props.height,
                          o = e.currentTarget.scrollTop,
                          r = Math.min(
                            Math.max(0, n._getEstimatedTotalHeight() - t),
                            o
                          );
                        o === r &&
                          (n._debounceResetIsScrolling(),
                          n.state.scrollTop !== r &&
                            n.setState({ isScrolling: !0, scrollTop: r }));
                      }),
                      n
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(
                      t,
                      [
                        {
                          key: 'clearCellPositions',
                          value: function () {
                            (this._positionCache = new an()),
                              this.forceUpdate();
                          },
                        },
                        {
                          key: 'invalidateCellSizeAfterRender',
                          value: function (e) {
                            var t = e.rowIndex;
                            null === this._invalidateOnUpdateStartIndex
                              ? ((this._invalidateOnUpdateStartIndex = t),
                                (this._invalidateOnUpdateStopIndex = t))
                              : ((this._invalidateOnUpdateStartIndex = Math.min(
                                  this._invalidateOnUpdateStartIndex,
                                  t
                                )),
                                (this._invalidateOnUpdateStopIndex = Math.max(
                                  this._invalidateOnUpdateStopIndex,
                                  t
                                )));
                          },
                        },
                        {
                          key: 'recomputeCellPositions',
                          value: function () {
                            var e = this._positionCache.count - 1;
                            (this._positionCache = new an()),
                              this._populatePositionCache(0, e),
                              this.forceUpdate();
                          },
                        },
                        {
                          key: 'componentDidMount',
                          value: function () {
                            this._checkInvalidateOnUpdate(),
                              this._invokeOnScrollCallback(),
                              this._invokeOnCellsRenderedCallback();
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function (e, t) {
                            this._checkInvalidateOnUpdate(),
                              this._invokeOnScrollCallback(),
                              this._invokeOnCellsRenderedCallback(),
                              this.props.scrollTop !== e.scrollTop &&
                                this._debounceResetIsScrolling();
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            this._debounceResetIsScrollingId &&
                              nt(this._debounceResetIsScrollingId);
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e,
                              t = this,
                              n = this.props,
                              r = n.autoHeight,
                              i = n.cellCount,
                              l = n.cellMeasurerCache,
                              s = n.cellRenderer,
                              a = n.className,
                              c = n.height,
                              u = n.id,
                              d = n.keyMapper,
                              h = n.overscanByPixels,
                              f = n.role,
                              p = n.style,
                              m = n.tabIndex,
                              g = n.width,
                              v = n.rowDirection,
                              _ = this.state,
                              y = _.isScrolling,
                              S = _.scrollTop,
                              w = [],
                              b = this._getEstimatedTotalHeight(),
                              C = this._positionCache.shortestColumnSize,
                              x = this._positionCache.count,
                              R = 0;
                            if (
                              (this._positionCache.range(
                                Math.max(0, S - h),
                                c + 2 * h,
                                function (n, o, r) {
                                  var i;
                                  void 0 === e
                                    ? ((R = n), (e = n))
                                    : ((R = Math.min(R, n)),
                                      (e = Math.max(e, n))),
                                    w.push(
                                      s({
                                        index: n,
                                        isScrolling: y,
                                        key: d(n),
                                        parent: t,
                                        style:
                                          ((i = { height: l.getHeight(n) }),
                                          Pe()(
                                            i,
                                            'ltr' === v ? 'left' : 'right',
                                            o
                                          ),
                                          Pe()(i, 'position', 'absolute'),
                                          Pe()(i, 'top', r),
                                          Pe()(i, 'width', l.getWidth(n)),
                                          i),
                                      })
                                    );
                                }
                              ),
                              C < S + c + h && x < i)
                            )
                              for (
                                var T = Math.min(
                                    i - x,
                                    Math.ceil(
                                      (((S + c + h - C) / l.defaultHeight) *
                                        g) /
                                        l.defaultWidth
                                    )
                                  ),
                                  z = x;
                                z < x + T;
                                z++
                              )
                                (e = z),
                                  w.push(
                                    s({
                                      index: z,
                                      isScrolling: y,
                                      key: d(z),
                                      parent: this,
                                      style: { width: l.getWidth(z) },
                                    })
                                  );
                            return (
                              (this._startIndex = R),
                              (this._stopIndex = e),
                              o.createElement(
                                'div',
                                {
                                  ref: this._setScrollingContainerRef,
                                  'aria-label': this.props['aria-label'],
                                  className: Ge('ReactVirtualized__Masonry', a),
                                  id: u,
                                  onScroll: this._onScroll,
                                  role: f,
                                  style: un(
                                    {
                                      boxSizing: 'border-box',
                                      direction: 'ltr',
                                      height: r ? 'auto' : c,
                                      overflowX: 'hidden',
                                      overflowY: b < c ? 'hidden' : 'auto',
                                      position: 'relative',
                                      width: g,
                                      WebkitOverflowScrolling: 'touch',
                                      willChange: 'transform',
                                    },
                                    p
                                  ),
                                  tabIndex: m,
                                },
                                o.createElement(
                                  'div',
                                  {
                                    className:
                                      'ReactVirtualized__Masonry__innerScrollContainer',
                                    style: {
                                      width: '100%',
                                      height: b,
                                      maxWidth: '100%',
                                      maxHeight: b,
                                      overflow: 'hidden',
                                      pointerEvents: y ? 'none' : '',
                                      position: 'relative',
                                    },
                                  },
                                  w
                                )
                              )
                            );
                          },
                        },
                        {
                          key: '_checkInvalidateOnUpdate',
                          value: function () {
                            if (
                              'number' ==
                              typeof this._invalidateOnUpdateStartIndex
                            ) {
                              var e = this._invalidateOnUpdateStartIndex,
                                t = this._invalidateOnUpdateStopIndex;
                              (this._invalidateOnUpdateStartIndex = null),
                                (this._invalidateOnUpdateStopIndex = null),
                                this._populatePositionCache(e, t),
                                this.forceUpdate();
                            }
                          },
                        },
                        {
                          key: '_debounceResetIsScrolling',
                          value: function () {
                            var e = this.props.scrollingResetTimeInterval;
                            this._debounceResetIsScrollingId &&
                              nt(this._debounceResetIsScrollingId),
                              (this._debounceResetIsScrollingId = ot(
                                this._debounceResetIsScrollingCallback,
                                e
                              ));
                          },
                        },
                        {
                          key: '_getEstimatedTotalHeight',
                          value: function () {
                            var e = this.props,
                              t = e.cellCount,
                              n = e.cellMeasurerCache,
                              o = e.width,
                              r = Math.max(1, Math.floor(o / n.defaultWidth));
                            return this._positionCache.estimateTotalHeight(
                              t,
                              r,
                              n.defaultHeight
                            );
                          },
                        },
                        {
                          key: '_invokeOnScrollCallback',
                          value: function () {
                            var e = this.props,
                              t = e.height,
                              n = e.onScroll,
                              o = this.state.scrollTop;
                            this._onScrollMemoized !== o &&
                              (n({
                                clientHeight: t,
                                scrollHeight: this._getEstimatedTotalHeight(),
                                scrollTop: o,
                              }),
                              (this._onScrollMemoized = o));
                          },
                        },
                        {
                          key: '_invokeOnCellsRenderedCallback',
                          value: function () {
                            (this._startIndexMemoized === this._startIndex &&
                              this._stopIndexMemoized === this._stopIndex) ||
                              ((0, this.props.onCellsRendered)({
                                startIndex: this._startIndex,
                                stopIndex: this._stopIndex,
                              }),
                              (this._startIndexMemoized = this._startIndex),
                              (this._stopIndexMemoized = this._stopIndex));
                          },
                        },
                        {
                          key: '_populatePositionCache',
                          value: function (e, t) {
                            for (
                              var n = this.props,
                                o = n.cellMeasurerCache,
                                r = n.cellPositioner,
                                i = e;
                              i <= t;
                              i++
                            ) {
                              var l = r(i),
                                s = l.left,
                                a = l.top;
                              this._positionCache.setPosition(
                                i,
                                s,
                                a,
                                o.getHeight(i)
                              );
                            }
                          },
                        },
                      ],
                      [
                        {
                          key: 'getDerivedStateFromProps',
                          value: function (e, t) {
                            return void 0 !== e.scrollTop &&
                              t.scrollTop !== e.scrollTop
                              ? { isScrolling: !0, scrollTop: e.scrollTop }
                              : null;
                          },
                        },
                      ]
                    ),
                    t
                  );
                })(o.PureComponent)),
                Pe()(ln, 'propTypes', null),
                sn);
              function hn() {}
              Pe()(dn, 'defaultProps', {
                autoHeight: !1,
                keyMapper: function (e) {
                  return e;
                },
                onCellsRendered: hn,
                onScroll: hn,
                overscanByPixels: 20,
                role: 'grid',
                scrollingResetTimeInterval: 150,
                style: {},
                tabIndex: 0,
                rowDirection: 'ltr',
              }),
                Le(dn);
              var fn = (function () {
                function e() {
                  var t = this,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  _e()(this, e),
                    Pe()(this, '_cellMeasurerCache', void 0),
                    Pe()(this, '_columnIndexOffset', void 0),
                    Pe()(this, '_rowIndexOffset', void 0),
                    Pe()(this, 'columnWidth', function (e) {
                      var n = e.index;
                      t._cellMeasurerCache.columnWidth({
                        index: n + t._columnIndexOffset,
                      });
                    }),
                    Pe()(this, 'rowHeight', function (e) {
                      var n = e.index;
                      t._cellMeasurerCache.rowHeight({
                        index: n + t._rowIndexOffset,
                      });
                    });
                  var o = n.cellMeasurerCache,
                    r = n.columnIndexOffset,
                    i = void 0 === r ? 0 : r,
                    l = n.rowIndexOffset,
                    s = void 0 === l ? 0 : l;
                  (this._cellMeasurerCache = o),
                    (this._columnIndexOffset = i),
                    (this._rowIndexOffset = s);
                }
                return (
                  Se()(e, [
                    {
                      key: 'clear',
                      value: function (e, t) {
                        this._cellMeasurerCache.clear(
                          e + this._rowIndexOffset,
                          t + this._columnIndexOffset
                        );
                      },
                    },
                    {
                      key: 'clearAll',
                      value: function () {
                        this._cellMeasurerCache.clearAll();
                      },
                    },
                    {
                      key: 'hasFixedHeight',
                      value: function () {
                        return this._cellMeasurerCache.hasFixedHeight();
                      },
                    },
                    {
                      key: 'hasFixedWidth',
                      value: function () {
                        return this._cellMeasurerCache.hasFixedWidth();
                      },
                    },
                    {
                      key: 'getHeight',
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        return this._cellMeasurerCache.getHeight(
                          e + this._rowIndexOffset,
                          t + this._columnIndexOffset
                        );
                      },
                    },
                    {
                      key: 'getWidth',
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        return this._cellMeasurerCache.getWidth(
                          e + this._rowIndexOffset,
                          t + this._columnIndexOffset
                        );
                      },
                    },
                    {
                      key: 'has',
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                        return this._cellMeasurerCache.has(
                          e + this._rowIndexOffset,
                          t + this._columnIndexOffset
                        );
                      },
                    },
                    {
                      key: 'set',
                      value: function (e, t, n, o) {
                        this._cellMeasurerCache.set(
                          e + this._rowIndexOffset,
                          t + this._columnIndexOffset,
                          n,
                          o
                        );
                      },
                    },
                    {
                      key: 'defaultHeight',
                      get: function () {
                        return this._cellMeasurerCache.defaultHeight;
                      },
                    },
                    {
                      key: 'defaultWidth',
                      get: function () {
                        return this._cellMeasurerCache.defaultWidth;
                      },
                    },
                  ]),
                  e
                );
              })();
              function pn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function mn(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? pn(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : pn(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var gn = (function (e) {
                function t(e, n) {
                  var r;
                  _e()(this, t),
                    (r = be()(this, xe()(t).call(this, e, n))),
                    Pe()(Te()(r), 'state', {
                      scrollLeft: 0,
                      scrollTop: 0,
                      scrollbarSize: 0,
                      showHorizontalScrollbar: !1,
                      showVerticalScrollbar: !1,
                    }),
                    Pe()(Te()(r), '_deferredInvalidateColumnIndex', null),
                    Pe()(Te()(r), '_deferredInvalidateRowIndex', null),
                    Pe()(Te()(r), '_bottomLeftGridRef', function (e) {
                      r._bottomLeftGrid = e;
                    }),
                    Pe()(Te()(r), '_bottomRightGridRef', function (e) {
                      r._bottomRightGrid = e;
                    }),
                    Pe()(Te()(r), '_cellRendererBottomLeftGrid', function (e) {
                      var t = e.rowIndex,
                        n = Ne()(e, ['rowIndex']),
                        i = r.props,
                        l = i.cellRenderer,
                        s = i.fixedRowCount;
                      return t === i.rowCount - s
                        ? o.createElement('div', {
                            key: n.key,
                            style: mn({}, n.style, { height: 20 }),
                          })
                        : l(mn({}, n, { parent: Te()(r), rowIndex: t + s }));
                    }),
                    Pe()(Te()(r), '_cellRendererBottomRightGrid', function (e) {
                      var t = e.columnIndex,
                        n = e.rowIndex,
                        o = Ne()(e, ['columnIndex', 'rowIndex']),
                        i = r.props,
                        l = i.cellRenderer,
                        s = i.fixedColumnCount,
                        a = i.fixedRowCount;
                      return l(
                        mn({}, o, {
                          columnIndex: t + s,
                          parent: Te()(r),
                          rowIndex: n + a,
                        })
                      );
                    }),
                    Pe()(Te()(r), '_cellRendererTopRightGrid', function (e) {
                      var t = e.columnIndex,
                        n = Ne()(e, ['columnIndex']),
                        i = r.props,
                        l = i.cellRenderer,
                        s = i.columnCount,
                        a = i.fixedColumnCount;
                      return t === s - a
                        ? o.createElement('div', {
                            key: n.key,
                            style: mn({}, n.style, { width: 20 }),
                          })
                        : l(mn({}, n, { columnIndex: t + a, parent: Te()(r) }));
                    }),
                    Pe()(Te()(r), '_columnWidthRightGrid', function (e) {
                      var t = e.index,
                        n = r.props,
                        o = n.columnCount,
                        i = n.fixedColumnCount,
                        l = n.columnWidth,
                        s = r.state,
                        a = s.scrollbarSize;
                      return s.showHorizontalScrollbar && t === o - i
                        ? a
                        : 'function' == typeof l
                        ? l({ index: t + i })
                        : l;
                    }),
                    Pe()(Te()(r), '_onScroll', function (e) {
                      var t = e.scrollLeft,
                        n = e.scrollTop;
                      r.setState({ scrollLeft: t, scrollTop: n });
                      var o = r.props.onScroll;
                      o && o(e);
                    }),
                    Pe()(Te()(r), '_onScrollbarPresenceChange', function (e) {
                      var t = e.horizontal,
                        n = e.size,
                        o = e.vertical,
                        i = r.state,
                        l = i.showHorizontalScrollbar,
                        s = i.showVerticalScrollbar;
                      if (t !== l || o !== s) {
                        r.setState({
                          scrollbarSize: n,
                          showHorizontalScrollbar: t,
                          showVerticalScrollbar: o,
                        });
                        var a = r.props.onScrollbarPresenceChange;
                        'function' == typeof a &&
                          a({ horizontal: t, size: n, vertical: o });
                      }
                    }),
                    Pe()(Te()(r), '_onScrollLeft', function (e) {
                      var t = e.scrollLeft;
                      r._onScroll({
                        scrollLeft: t,
                        scrollTop: r.state.scrollTop,
                      });
                    }),
                    Pe()(Te()(r), '_onScrollTop', function (e) {
                      var t = e.scrollTop;
                      r._onScroll({
                        scrollTop: t,
                        scrollLeft: r.state.scrollLeft,
                      });
                    }),
                    Pe()(Te()(r), '_rowHeightBottomGrid', function (e) {
                      var t = e.index,
                        n = r.props,
                        o = n.fixedRowCount,
                        i = n.rowCount,
                        l = n.rowHeight,
                        s = r.state,
                        a = s.scrollbarSize;
                      return s.showVerticalScrollbar && t === i - o
                        ? a
                        : 'function' == typeof l
                        ? l({ index: t + o })
                        : l;
                    }),
                    Pe()(Te()(r), '_topLeftGridRef', function (e) {
                      r._topLeftGrid = e;
                    }),
                    Pe()(Te()(r), '_topRightGridRef', function (e) {
                      r._topRightGrid = e;
                    });
                  var i = e.deferredMeasurementCache,
                    l = e.fixedColumnCount,
                    s = e.fixedRowCount;
                  return (
                    r._maybeCalculateCachedStyles(!0),
                    i &&
                      ((r._deferredMeasurementCacheBottomLeftGrid =
                        s > 0
                          ? new fn({
                              cellMeasurerCache: i,
                              columnIndexOffset: 0,
                              rowIndexOffset: s,
                            })
                          : i),
                      (r._deferredMeasurementCacheBottomRightGrid =
                        l > 0 || s > 0
                          ? new fn({
                              cellMeasurerCache: i,
                              columnIndexOffset: l,
                              rowIndexOffset: s,
                            })
                          : i),
                      (r._deferredMeasurementCacheTopRightGrid =
                        l > 0
                          ? new fn({
                              cellMeasurerCache: i,
                              columnIndexOffset: l,
                              rowIndexOffset: 0,
                            })
                          : i)),
                    r
                  );
                }
                return (
                  Oe()(t, e),
                  Se()(
                    t,
                    [
                      {
                        key: 'forceUpdateGrids',
                        value: function () {
                          this._bottomLeftGrid &&
                            this._bottomLeftGrid.forceUpdate(),
                            this._bottomRightGrid &&
                              this._bottomRightGrid.forceUpdate(),
                            this._topLeftGrid &&
                              this._topLeftGrid.forceUpdate(),
                            this._topRightGrid &&
                              this._topRightGrid.forceUpdate();
                        },
                      },
                      {
                        key: 'invalidateCellSizeAfterRender',
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.columnIndex,
                            n = void 0 === t ? 0 : t,
                            o = e.rowIndex,
                            r = void 0 === o ? 0 : o;
                          (this._deferredInvalidateColumnIndex =
                            'number' ==
                            typeof this._deferredInvalidateColumnIndex
                              ? Math.min(this._deferredInvalidateColumnIndex, n)
                              : n),
                            (this._deferredInvalidateRowIndex =
                              'number' ==
                              typeof this._deferredInvalidateRowIndex
                                ? Math.min(this._deferredInvalidateRowIndex, r)
                                : r);
                        },
                      },
                      {
                        key: 'measureAllCells',
                        value: function () {
                          this._bottomLeftGrid &&
                            this._bottomLeftGrid.measureAllCells(),
                            this._bottomRightGrid &&
                              this._bottomRightGrid.measureAllCells(),
                            this._topLeftGrid &&
                              this._topLeftGrid.measureAllCells(),
                            this._topRightGrid &&
                              this._topRightGrid.measureAllCells();
                        },
                      },
                      {
                        key: 'recomputeGridSize',
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.columnIndex,
                            n = void 0 === t ? 0 : t,
                            o = e.rowIndex,
                            r = void 0 === o ? 0 : o,
                            i = this.props,
                            l = i.fixedColumnCount,
                            s = i.fixedRowCount,
                            a = Math.max(0, n - l),
                            c = Math.max(0, r - s);
                          this._bottomLeftGrid &&
                            this._bottomLeftGrid.recomputeGridSize({
                              columnIndex: n,
                              rowIndex: c,
                            }),
                            this._bottomRightGrid &&
                              this._bottomRightGrid.recomputeGridSize({
                                columnIndex: a,
                                rowIndex: c,
                              }),
                            this._topLeftGrid &&
                              this._topLeftGrid.recomputeGridSize({
                                columnIndex: n,
                                rowIndex: r,
                              }),
                            this._topRightGrid &&
                              this._topRightGrid.recomputeGridSize({
                                columnIndex: a,
                                rowIndex: r,
                              }),
                            (this._leftGridWidth = null),
                            (this._topGridHeight = null),
                            this._maybeCalculateCachedStyles(!0);
                        },
                      },
                      {
                        key: 'componentDidMount',
                        value: function () {
                          var e = this.props,
                            t = e.scrollLeft,
                            n = e.scrollTop;
                          if (t > 0 || n > 0) {
                            var o = {};
                            t > 0 && (o.scrollLeft = t),
                              n > 0 && (o.scrollTop = n),
                              this.setState(o);
                          }
                          this._handleInvalidatedGridSize();
                        },
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function () {
                          this._handleInvalidatedGridSize();
                        },
                      },
                      {
                        key: 'render',
                        value: function () {
                          var e = this.props,
                            t = e.onScroll,
                            n = e.onSectionRendered,
                            r =
                              (e.onScrollbarPresenceChange,
                              e.scrollLeft,
                              e.scrollToColumn),
                            i = (e.scrollTop, e.scrollToRow),
                            l = Ne()(e, [
                              'onScroll',
                              'onSectionRendered',
                              'onScrollbarPresenceChange',
                              'scrollLeft',
                              'scrollToColumn',
                              'scrollTop',
                              'scrollToRow',
                            ]);
                          if (
                            (this._prepareForRender(),
                            0 === this.props.width || 0 === this.props.height)
                          )
                            return null;
                          var s = this.state,
                            a = s.scrollLeft,
                            c = s.scrollTop;
                          return o.createElement(
                            'div',
                            { style: this._containerOuterStyle },
                            o.createElement(
                              'div',
                              { style: this._containerTopStyle },
                              this._renderTopLeftGrid(l),
                              this._renderTopRightGrid(
                                mn({}, l, { onScroll: t, scrollLeft: a })
                              )
                            ),
                            o.createElement(
                              'div',
                              { style: this._containerBottomStyle },
                              this._renderBottomLeftGrid(
                                mn({}, l, { onScroll: t, scrollTop: c })
                              ),
                              this._renderBottomRightGrid(
                                mn({}, l, {
                                  onScroll: t,
                                  onSectionRendered: n,
                                  scrollLeft: a,
                                  scrollToColumn: r,
                                  scrollToRow: i,
                                  scrollTop: c,
                                })
                              )
                            )
                          );
                        },
                      },
                      {
                        key: '_getBottomGridHeight',
                        value: function (e) {
                          return e.height - this._getTopGridHeight(e);
                        },
                      },
                      {
                        key: '_getLeftGridWidth',
                        value: function (e) {
                          var t = e.fixedColumnCount,
                            n = e.columnWidth;
                          if (null == this._leftGridWidth)
                            if ('function' == typeof n) {
                              for (var o = 0, r = 0; r < t; r++)
                                o += n({ index: r });
                              this._leftGridWidth = o;
                            } else this._leftGridWidth = n * t;
                          return this._leftGridWidth;
                        },
                      },
                      {
                        key: '_getRightGridWidth',
                        value: function (e) {
                          return e.width - this._getLeftGridWidth(e);
                        },
                      },
                      {
                        key: '_getTopGridHeight',
                        value: function (e) {
                          var t = e.fixedRowCount,
                            n = e.rowHeight;
                          if (null == this._topGridHeight)
                            if ('function' == typeof n) {
                              for (var o = 0, r = 0; r < t; r++)
                                o += n({ index: r });
                              this._topGridHeight = o;
                            } else this._topGridHeight = n * t;
                          return this._topGridHeight;
                        },
                      },
                      {
                        key: '_handleInvalidatedGridSize',
                        value: function () {
                          if (
                            'number' ==
                            typeof this._deferredInvalidateColumnIndex
                          ) {
                            var e = this._deferredInvalidateColumnIndex,
                              t = this._deferredInvalidateRowIndex;
                            (this._deferredInvalidateColumnIndex = null),
                              (this._deferredInvalidateRowIndex = null),
                              this.recomputeGridSize({
                                columnIndex: e,
                                rowIndex: t,
                              }),
                              this.forceUpdate();
                          }
                        },
                      },
                      {
                        key: '_maybeCalculateCachedStyles',
                        value: function (e) {
                          var t = this.props,
                            n = t.columnWidth,
                            o = t.enableFixedColumnScroll,
                            r = t.enableFixedRowScroll,
                            i = t.height,
                            l = t.fixedColumnCount,
                            s = t.fixedRowCount,
                            a = t.rowHeight,
                            c = t.style,
                            u = t.styleBottomLeftGrid,
                            d = t.styleBottomRightGrid,
                            h = t.styleTopLeftGrid,
                            f = t.styleTopRightGrid,
                            p = t.width,
                            m =
                              e ||
                              i !== this._lastRenderedHeight ||
                              p !== this._lastRenderedWidth,
                            g =
                              e ||
                              n !== this._lastRenderedColumnWidth ||
                              l !== this._lastRenderedFixedColumnCount,
                            v =
                              e ||
                              s !== this._lastRenderedFixedRowCount ||
                              a !== this._lastRenderedRowHeight;
                          (e || m || c !== this._lastRenderedStyle) &&
                            (this._containerOuterStyle = mn(
                              { height: i, overflow: 'visible', width: p },
                              c
                            )),
                            (e || m || v) &&
                              ((this._containerTopStyle = {
                                height: this._getTopGridHeight(this.props),
                                position: 'relative',
                                width: p,
                              }),
                              (this._containerBottomStyle = {
                                height: i - this._getTopGridHeight(this.props),
                                overflow: 'visible',
                                position: 'relative',
                                width: p,
                              })),
                            (e ||
                              u !== this._lastRenderedStyleBottomLeftGrid) &&
                              (this._bottomLeftGridStyle = mn(
                                {
                                  left: 0,
                                  overflowX: 'hidden',
                                  overflowY: o ? 'auto' : 'hidden',
                                  position: 'absolute',
                                },
                                u
                              )),
                            (e ||
                              g ||
                              d !== this._lastRenderedStyleBottomRightGrid) &&
                              (this._bottomRightGridStyle = mn(
                                {
                                  left: this._getLeftGridWidth(this.props),
                                  position: 'absolute',
                                },
                                d
                              )),
                            (e || h !== this._lastRenderedStyleTopLeftGrid) &&
                              (this._topLeftGridStyle = mn(
                                {
                                  left: 0,
                                  overflowX: 'hidden',
                                  overflowY: 'hidden',
                                  position: 'absolute',
                                  top: 0,
                                },
                                h
                              )),
                            (e ||
                              g ||
                              f !== this._lastRenderedStyleTopRightGrid) &&
                              (this._topRightGridStyle = mn(
                                {
                                  left: this._getLeftGridWidth(this.props),
                                  overflowX: r ? 'auto' : 'hidden',
                                  overflowY: 'hidden',
                                  position: 'absolute',
                                  top: 0,
                                },
                                f
                              )),
                            (this._lastRenderedColumnWidth = n),
                            (this._lastRenderedFixedColumnCount = l),
                            (this._lastRenderedFixedRowCount = s),
                            (this._lastRenderedHeight = i),
                            (this._lastRenderedRowHeight = a),
                            (this._lastRenderedStyle = c),
                            (this._lastRenderedStyleBottomLeftGrid = u),
                            (this._lastRenderedStyleBottomRightGrid = d),
                            (this._lastRenderedStyleTopLeftGrid = h),
                            (this._lastRenderedStyleTopRightGrid = f),
                            (this._lastRenderedWidth = p);
                        },
                      },
                      {
                        key: '_prepareForRender',
                        value: function () {
                          (this._lastRenderedColumnWidth ===
                            this.props.columnWidth &&
                            this._lastRenderedFixedColumnCount ===
                              this.props.fixedColumnCount) ||
                            (this._leftGridWidth = null),
                            (this._lastRenderedFixedRowCount ===
                              this.props.fixedRowCount &&
                              this._lastRenderedRowHeight ===
                                this.props.rowHeight) ||
                              (this._topGridHeight = null),
                            this._maybeCalculateCachedStyles(),
                            (this._lastRenderedColumnWidth = this.props.columnWidth),
                            (this._lastRenderedFixedColumnCount = this.props.fixedColumnCount),
                            (this._lastRenderedFixedRowCount = this.props.fixedRowCount),
                            (this._lastRenderedRowHeight = this.props.rowHeight);
                        },
                      },
                      {
                        key: '_renderBottomLeftGrid',
                        value: function (e) {
                          var t = e.enableFixedColumnScroll,
                            n = e.fixedColumnCount,
                            r = e.fixedRowCount,
                            i = e.rowCount,
                            l = e.hideBottomLeftGridScrollbar,
                            s = this.state.showVerticalScrollbar;
                          if (!n) return null;
                          var a = s ? 1 : 0,
                            c = this._getBottomGridHeight(e),
                            u = this._getLeftGridWidth(e),
                            d = this.state.showVerticalScrollbar
                              ? this.state.scrollbarSize
                              : 0,
                            h = l ? u + d : u,
                            f = o.createElement(
                              ut,
                              je()({}, e, {
                                cellRenderer: this._cellRendererBottomLeftGrid,
                                className: this.props.classNameBottomLeftGrid,
                                columnCount: n,
                                deferredMeasurementCache: this
                                  ._deferredMeasurementCacheBottomLeftGrid,
                                height: c,
                                onScroll: t ? this._onScrollTop : void 0,
                                ref: this._bottomLeftGridRef,
                                rowCount: Math.max(0, i - r) + a,
                                rowHeight: this._rowHeightBottomGrid,
                                style: this._bottomLeftGridStyle,
                                tabIndex: null,
                                width: h,
                              })
                            );
                          return l
                            ? o.createElement(
                                'div',
                                {
                                  className: 'BottomLeftGrid_ScrollWrapper',
                                  style: mn({}, this._bottomLeftGridStyle, {
                                    height: c,
                                    width: u,
                                    overflowY: 'hidden',
                                  }),
                                },
                                f
                              )
                            : f;
                        },
                      },
                      {
                        key: '_renderBottomRightGrid',
                        value: function (e) {
                          var t = e.columnCount,
                            n = e.fixedColumnCount,
                            r = e.fixedRowCount,
                            i = e.rowCount,
                            l = e.scrollToColumn,
                            s = e.scrollToRow;
                          return o.createElement(
                            ut,
                            je()({}, e, {
                              cellRenderer: this._cellRendererBottomRightGrid,
                              className: this.props.classNameBottomRightGrid,
                              columnCount: Math.max(0, t - n),
                              columnWidth: this._columnWidthRightGrid,
                              deferredMeasurementCache: this
                                ._deferredMeasurementCacheBottomRightGrid,
                              height: this._getBottomGridHeight(e),
                              onScroll: this._onScroll,
                              onScrollbarPresenceChange: this
                                ._onScrollbarPresenceChange,
                              ref: this._bottomRightGridRef,
                              rowCount: Math.max(0, i - r),
                              rowHeight: this._rowHeightBottomGrid,
                              scrollToColumn: l - n,
                              scrollToRow: s - r,
                              style: this._bottomRightGridStyle,
                              width: this._getRightGridWidth(e),
                            })
                          );
                        },
                      },
                      {
                        key: '_renderTopLeftGrid',
                        value: function (e) {
                          var t = e.fixedColumnCount,
                            n = e.fixedRowCount;
                          return t && n
                            ? o.createElement(
                                ut,
                                je()({}, e, {
                                  className: this.props.classNameTopLeftGrid,
                                  columnCount: t,
                                  height: this._getTopGridHeight(e),
                                  ref: this._topLeftGridRef,
                                  rowCount: n,
                                  style: this._topLeftGridStyle,
                                  tabIndex: null,
                                  width: this._getLeftGridWidth(e),
                                })
                              )
                            : null;
                        },
                      },
                      {
                        key: '_renderTopRightGrid',
                        value: function (e) {
                          var t = e.columnCount,
                            n = e.enableFixedRowScroll,
                            r = e.fixedColumnCount,
                            i = e.fixedRowCount,
                            l = e.scrollLeft,
                            s = e.hideTopRightGridScrollbar,
                            a = this.state,
                            c = a.showHorizontalScrollbar,
                            u = a.scrollbarSize;
                          if (!i) return null;
                          var d = c ? 1 : 0,
                            h = this._getTopGridHeight(e),
                            f = this._getRightGridWidth(e),
                            p = c ? u : 0,
                            m = h,
                            g = this._topRightGridStyle;
                          s &&
                            ((m = h + p),
                            (g = mn({}, this._topRightGridStyle, { left: 0 })));
                          var v = o.createElement(
                            ut,
                            je()({}, e, {
                              cellRenderer: this._cellRendererTopRightGrid,
                              className: this.props.classNameTopRightGrid,
                              columnCount: Math.max(0, t - r) + d,
                              columnWidth: this._columnWidthRightGrid,
                              deferredMeasurementCache: this
                                ._deferredMeasurementCacheTopRightGrid,
                              height: m,
                              onScroll: n ? this._onScrollLeft : void 0,
                              ref: this._topRightGridRef,
                              rowCount: i,
                              scrollLeft: l,
                              style: g,
                              tabIndex: null,
                              width: f,
                            })
                          );
                          return s
                            ? o.createElement(
                                'div',
                                {
                                  className: 'TopRightGrid_ScrollWrapper',
                                  style: mn({}, this._topRightGridStyle, {
                                    height: h,
                                    width: f,
                                    overflowX: 'hidden',
                                  }),
                                },
                                v
                              )
                            : v;
                        },
                      },
                    ],
                    [
                      {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                          return e.scrollLeft !== t.scrollLeft ||
                            e.scrollTop !== t.scrollTop
                            ? {
                                scrollLeft:
                                  null != e.scrollLeft && e.scrollLeft >= 0
                                    ? e.scrollLeft
                                    : t.scrollLeft,
                                scrollTop:
                                  null != e.scrollTop && e.scrollTop >= 0
                                    ? e.scrollTop
                                    : t.scrollTop,
                              }
                            : null;
                        },
                      },
                    ]
                  ),
                  t
                );
              })(o.PureComponent);
              function vn(e) {
                var t = e.className,
                  n = e.columns,
                  r = e.style;
                return o.createElement(
                  'div',
                  { className: t, role: 'row', style: r },
                  n
                );
              }
              Pe()(gn, 'defaultProps', {
                classNameBottomLeftGrid: '',
                classNameBottomRightGrid: '',
                classNameTopLeftGrid: '',
                classNameTopRightGrid: '',
                enableFixedColumnScroll: !1,
                enableFixedRowScroll: !1,
                fixedColumnCount: 0,
                fixedRowCount: 0,
                scrollToColumn: -1,
                scrollToRow: -1,
                style: {},
                styleBottomLeftGrid: {},
                styleBottomRightGrid: {},
                styleTopLeftGrid: {},
                styleTopRightGrid: {},
                hideTopRightGridScrollbar: !1,
                hideBottomLeftGridScrollbar: !1,
              }),
                (gn.propTypes = {}),
                Le(gn),
                ((function (e) {
                  function t(e, n) {
                    var o;
                    return (
                      _e()(this, t),
                      ((o = be()(this, xe()(t).call(this, e, n))).state = {
                        clientHeight: 0,
                        clientWidth: 0,
                        scrollHeight: 0,
                        scrollLeft: 0,
                        scrollTop: 0,
                        scrollWidth: 0,
                      }),
                      (o._onScroll = o._onScroll.bind(Te()(o))),
                      o
                    );
                  }
                  return (
                    Oe()(t, e),
                    Se()(t, [
                      {
                        key: 'render',
                        value: function () {
                          var e = this.props.children,
                            t = this.state,
                            n = t.clientHeight,
                            o = t.clientWidth,
                            r = t.scrollHeight,
                            i = t.scrollLeft,
                            l = t.scrollTop,
                            s = t.scrollWidth;
                          return e({
                            clientHeight: n,
                            clientWidth: o,
                            onScroll: this._onScroll,
                            scrollHeight: r,
                            scrollLeft: i,
                            scrollTop: l,
                            scrollWidth: s,
                          });
                        },
                      },
                      {
                        key: '_onScroll',
                        value: function (e) {
                          var t = e.clientHeight,
                            n = e.clientWidth,
                            o = e.scrollHeight,
                            r = e.scrollLeft,
                            i = e.scrollTop,
                            l = e.scrollWidth;
                          this.setState({
                            clientHeight: t,
                            clientWidth: n,
                            scrollHeight: o,
                            scrollLeft: r,
                            scrollTop: i,
                            scrollWidth: l,
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(o.PureComponent).propTypes = {}),
                (vn.propTypes = null);
              var _n = 'ASC',
                yn = 'DESC';
              function Sn(e) {
                var t = e.sortDirection,
                  n = Ge('ReactVirtualized__Table__sortableHeaderIcon', {
                    'ReactVirtualized__Table__sortableHeaderIcon--ASC':
                      t === _n,
                    'ReactVirtualized__Table__sortableHeaderIcon--DESC':
                      t === yn,
                  });
                return o.createElement(
                  'svg',
                  { className: n, width: 18, height: 18, viewBox: '0 0 24 24' },
                  t === _n
                    ? o.createElement('path', { d: 'M7 14l5-5 5 5z' })
                    : o.createElement('path', { d: 'M7 10l5 5 5-5z' }),
                  o.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                );
              }
              function wn(e) {
                var t = e.dataKey,
                  n = e.label,
                  r = e.sortBy,
                  i = e.sortDirection,
                  l = r === t,
                  s = [
                    o.createElement(
                      'span',
                      {
                        className:
                          'ReactVirtualized__Table__headerTruncatedText',
                        key: 'label',
                        title: 'string' == typeof n ? n : null,
                      },
                      n
                    ),
                  ];
                return (
                  l &&
                    s.push(
                      o.createElement(Sn, {
                        key: 'SortIndicator',
                        sortDirection: i,
                      })
                    ),
                  s
                );
              }
              function bn(e) {
                var t = e.className,
                  n = e.columns,
                  r = e.index,
                  i = e.key,
                  l = e.onRowClick,
                  s = e.onRowDoubleClick,
                  a = e.onRowMouseOut,
                  c = e.onRowMouseOver,
                  u = e.onRowRightClick,
                  d = e.rowData,
                  h = e.style,
                  f = { 'aria-rowindex': r + 1 };
                return (
                  (l || s || a || c || u) &&
                    ((f['aria-label'] = 'row'),
                    (f.tabIndex = 0),
                    l &&
                      (f.onClick = function (e) {
                        return l({ event: e, index: r, rowData: d });
                      }),
                    s &&
                      (f.onDoubleClick = function (e) {
                        return s({ event: e, index: r, rowData: d });
                      }),
                    a &&
                      (f.onMouseOut = function (e) {
                        return a({ event: e, index: r, rowData: d });
                      }),
                    c &&
                      (f.onMouseOver = function (e) {
                        return c({ event: e, index: r, rowData: d });
                      }),
                    u &&
                      (f.onContextMenu = function (e) {
                        return u({ event: e, index: r, rowData: d });
                      })),
                  o.createElement(
                    'div',
                    je()({}, f, {
                      className: t,
                      key: i,
                      role: 'row',
                      style: h,
                    }),
                    n
                  )
                );
              }
              (Sn.propTypes = {}), (wn.propTypes = null), (bn.propTypes = null);
              var Cn = (function (e) {
                function t() {
                  return (
                    _e()(this, t), be()(this, xe()(t).apply(this, arguments))
                  );
                }
                return Oe()(t, e), t;
              })(o.Component);
              function xn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function Rn(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? xn(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : xn(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              Pe()(Cn, 'defaultProps', {
                cellDataGetter: function (e) {
                  var t = e.dataKey,
                    n = e.rowData;
                  return 'function' == typeof n.get ? n.get(t) : n[t];
                },
                cellRenderer: function (e) {
                  var t = e.cellData;
                  return null == t ? '' : String(t);
                },
                defaultSortDirection: _n,
                flexGrow: 0,
                flexShrink: 1,
                headerRenderer: wn,
                style: {},
              }),
                (Cn.propTypes = {});
              var Tn = (function (e) {
                function t(e) {
                  var n;
                  return (
                    _e()(this, t),
                    ((n = be()(this, xe()(t).call(this, e))).state = {
                      scrollbarWidth: 0,
                    }),
                    (n._createColumn = n._createColumn.bind(Te()(n))),
                    (n._createRow = n._createRow.bind(Te()(n))),
                    (n._onScroll = n._onScroll.bind(Te()(n))),
                    (n._onSectionRendered = n._onSectionRendered.bind(Te()(n))),
                    (n._setRef = n._setRef.bind(Te()(n))),
                    n
                  );
                }
                return (
                  Oe()(t, e),
                  Se()(t, [
                    {
                      key: 'forceUpdateGrid',
                      value: function () {
                        this.Grid && this.Grid.forceUpdate();
                      },
                    },
                    {
                      key: 'getOffsetForRow',
                      value: function (e) {
                        var t = e.alignment,
                          n = e.index;
                        return this.Grid
                          ? this.Grid.getOffsetForCell({
                              alignment: t,
                              rowIndex: n,
                            }).scrollTop
                          : 0;
                      },
                    },
                    {
                      key: 'invalidateCellSizeAfterRender',
                      value: function (e) {
                        var t = e.columnIndex,
                          n = e.rowIndex;
                        this.Grid &&
                          this.Grid.invalidateCellSizeAfterRender({
                            rowIndex: n,
                            columnIndex: t,
                          });
                      },
                    },
                    {
                      key: 'measureAllRows',
                      value: function () {
                        this.Grid && this.Grid.measureAllCells();
                      },
                    },
                    {
                      key: 'recomputeGridSize',
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = e.columnIndex,
                          n = void 0 === t ? 0 : t,
                          o = e.rowIndex,
                          r = void 0 === o ? 0 : o;
                        this.Grid &&
                          this.Grid.recomputeGridSize({
                            rowIndex: r,
                            columnIndex: n,
                          });
                      },
                    },
                    {
                      key: 'recomputeRowHeights',
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0;
                        this.Grid &&
                          this.Grid.recomputeGridSize({ rowIndex: e });
                      },
                    },
                    {
                      key: 'scrollToPosition',
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0;
                        this.Grid &&
                          this.Grid.scrollToPosition({ scrollTop: e });
                      },
                    },
                    {
                      key: 'scrollToRow',
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0;
                        this.Grid &&
                          this.Grid.scrollToCell({
                            columnIndex: 0,
                            rowIndex: e,
                          });
                      },
                    },
                    {
                      key: 'getScrollbarWidth',
                      value: function () {
                        if (this.Grid) {
                          var e = Object(i.findDOMNode)(this.Grid),
                            t = e.clientWidth || 0;
                          return (e.offsetWidth || 0) - t;
                        }
                        return 0;
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function () {
                        this._setScrollbarWidth();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function () {
                        this._setScrollbarWidth();
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var e = this,
                          t = this.props,
                          n = t.children,
                          r = t.className,
                          i = t.disableHeader,
                          l = t.gridClassName,
                          s = t.gridStyle,
                          a = t.headerHeight,
                          c = t.headerRowRenderer,
                          u = t.height,
                          d = t.id,
                          h = t.noRowsRenderer,
                          f = t.rowClassName,
                          p = t.rowStyle,
                          m = t.scrollToIndex,
                          g = t.style,
                          v = t.width,
                          _ = this.state.scrollbarWidth,
                          y = i ? u : u - a,
                          S = 'function' == typeof f ? f({ index: -1 }) : f,
                          w = 'function' == typeof p ? p({ index: -1 }) : p;
                        return (
                          (this._cachedColumnStyles = []),
                          o.Children.toArray(n).forEach(function (t, n) {
                            var o = e._getFlexStyleForColumn(t, t.props.style);
                            e._cachedColumnStyles[n] = Rn(
                              { overflow: 'hidden' },
                              o
                            );
                          }),
                          o.createElement(
                            'div',
                            {
                              'aria-label': this.props['aria-label'],
                              'aria-labelledby': this.props['aria-labelledby'],
                              'aria-colcount': o.Children.toArray(n).length,
                              'aria-rowcount': this.props.rowCount,
                              className: Ge('ReactVirtualized__Table', r),
                              id: d,
                              role: 'grid',
                              style: g,
                            },
                            !i &&
                              c({
                                className: Ge(
                                  'ReactVirtualized__Table__headerRow',
                                  S
                                ),
                                columns: this._getHeaderColumns(),
                                style: Rn(
                                  {
                                    height: a,
                                    overflow: 'hidden',
                                    paddingRight: _,
                                    width: v,
                                  },
                                  w
                                ),
                              }),
                            o.createElement(
                              ut,
                              je()({}, this.props, {
                                'aria-readonly': null,
                                autoContainerWidth: !0,
                                className: Ge(
                                  'ReactVirtualized__Table__Grid',
                                  l
                                ),
                                cellRenderer: this._createRow,
                                columnWidth: v,
                                columnCount: 1,
                                height: y,
                                id: void 0,
                                noContentRenderer: h,
                                onScroll: this._onScroll,
                                onSectionRendered: this._onSectionRendered,
                                ref: this._setRef,
                                role: 'rowgroup',
                                scrollbarWidth: _,
                                scrollToRow: m,
                                style: Rn({}, s, { overflowX: 'hidden' }),
                              })
                            )
                          )
                        );
                      },
                    },
                    {
                      key: '_createColumn',
                      value: function (e) {
                        var t = e.column,
                          n = e.columnIndex,
                          r = e.isScrolling,
                          i = e.parent,
                          l = e.rowData,
                          s = e.rowIndex,
                          a = this.props.onColumnClick,
                          c = t.props,
                          u = c.cellDataGetter,
                          d = c.cellRenderer,
                          h = c.className,
                          f = c.columnData,
                          p = c.dataKey,
                          m = c.id,
                          g = d({
                            cellData: u({
                              columnData: f,
                              dataKey: p,
                              rowData: l,
                            }),
                            columnData: f,
                            columnIndex: n,
                            dataKey: p,
                            isScrolling: r,
                            parent: i,
                            rowData: l,
                            rowIndex: s,
                          }),
                          v = this._cachedColumnStyles[n],
                          _ = 'string' == typeof g ? g : null;
                        return o.createElement(
                          'div',
                          {
                            'aria-colindex': n + 1,
                            'aria-describedby': m,
                            className: Ge(
                              'ReactVirtualized__Table__rowColumn',
                              h
                            ),
                            key: 'Row' + s + '-Col' + n,
                            onClick: function (e) {
                              a && a({ columnData: f, dataKey: p, event: e });
                            },
                            role: 'gridcell',
                            style: v,
                            title: _,
                          },
                          g
                        );
                      },
                    },
                    {
                      key: '_createHeader',
                      value: function (e) {
                        var t,
                          n,
                          r,
                          i,
                          l,
                          s = e.column,
                          a = e.index,
                          c = this.props,
                          u = c.headerClassName,
                          d = c.headerStyle,
                          h = c.onHeaderClick,
                          f = c.sort,
                          p = c.sortBy,
                          m = c.sortDirection,
                          g = s.props,
                          v = g.columnData,
                          _ = g.dataKey,
                          y = g.defaultSortDirection,
                          S = g.disableSort,
                          w = g.headerRenderer,
                          b = g.id,
                          C = g.label,
                          x = !S && f,
                          R = Ge(
                            'ReactVirtualized__Table__headerColumn',
                            u,
                            s.props.headerClassName,
                            { ReactVirtualized__Table__sortableHeaderColumn: x }
                          ),
                          T = this._getFlexStyleForColumn(
                            s,
                            Rn({}, d, {}, s.props.headerStyle)
                          ),
                          z = w({
                            columnData: v,
                            dataKey: _,
                            disableSort: S,
                            label: C,
                            sortBy: p,
                            sortDirection: m,
                          });
                        if (x || h) {
                          var O = p !== _ ? y : m === yn ? _n : yn,
                            I = function (e) {
                              x &&
                                f({
                                  defaultSortDirection: y,
                                  event: e,
                                  sortBy: _,
                                  sortDirection: O,
                                }),
                                h && h({ columnData: v, dataKey: _, event: e });
                            };
                          (l = s.props['aria-label'] || C || _),
                            (i = 'none'),
                            (r = 0),
                            (t = I),
                            (n = function (e) {
                              ('Enter' !== e.key && ' ' !== e.key) || I(e);
                            });
                        }
                        return (
                          p === _ &&
                            (i = m === _n ? 'ascending' : 'descending'),
                          o.createElement(
                            'div',
                            {
                              'aria-label': l,
                              'aria-sort': i,
                              className: R,
                              id: b,
                              key: 'Header-Col' + a,
                              onClick: t,
                              onKeyDown: n,
                              role: 'columnheader',
                              style: T,
                              tabIndex: r,
                            },
                            z
                          )
                        );
                      },
                    },
                    {
                      key: '_createRow',
                      value: function (e) {
                        var t = this,
                          n = e.rowIndex,
                          r = e.isScrolling,
                          i = e.key,
                          l = e.parent,
                          s = e.style,
                          a = this.props,
                          c = a.children,
                          u = a.onRowClick,
                          d = a.onRowDoubleClick,
                          h = a.onRowRightClick,
                          f = a.onRowMouseOver,
                          p = a.onRowMouseOut,
                          m = a.rowClassName,
                          g = a.rowGetter,
                          v = a.rowRenderer,
                          _ = a.rowStyle,
                          y = this.state.scrollbarWidth,
                          S = 'function' == typeof m ? m({ index: n }) : m,
                          w = 'function' == typeof _ ? _({ index: n }) : _,
                          b = g({ index: n }),
                          C = o.Children.toArray(c).map(function (e, o) {
                            return t._createColumn({
                              column: e,
                              columnIndex: o,
                              isScrolling: r,
                              parent: l,
                              rowData: b,
                              rowIndex: n,
                              scrollbarWidth: y,
                            });
                          }),
                          x = Ge('ReactVirtualized__Table__row', S),
                          R = Rn(
                            {},
                            s,
                            {
                              height: this._getRowHeight(n),
                              overflow: 'hidden',
                              paddingRight: y,
                            },
                            w
                          );
                        return v({
                          className: x,
                          columns: C,
                          index: n,
                          isScrolling: r,
                          key: i,
                          onRowClick: u,
                          onRowDoubleClick: d,
                          onRowRightClick: h,
                          onRowMouseOver: f,
                          onRowMouseOut: p,
                          rowData: b,
                          style: R,
                        });
                      },
                    },
                    {
                      key: '_getFlexStyleForColumn',
                      value: function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = ''
                            .concat(e.props.flexGrow, ' ')
                            .concat(e.props.flexShrink, ' ')
                            .concat(e.props.width, 'px'),
                          o = Rn({}, t, { flex: n, msFlex: n, WebkitFlex: n });
                        return (
                          e.props.maxWidth && (o.maxWidth = e.props.maxWidth),
                          e.props.minWidth && (o.minWidth = e.props.minWidth),
                          o
                        );
                      },
                    },
                    {
                      key: '_getHeaderColumns',
                      value: function () {
                        var e = this,
                          t = this.props,
                          n = t.children;
                        return (t.disableHeader
                          ? []
                          : o.Children.toArray(n)
                        ).map(function (t, n) {
                          return e._createHeader({ column: t, index: n });
                        });
                      },
                    },
                    {
                      key: '_getRowHeight',
                      value: function (e) {
                        var t = this.props.rowHeight;
                        return 'function' == typeof t ? t({ index: e }) : t;
                      },
                    },
                    {
                      key: '_onScroll',
                      value: function (e) {
                        var t = e.clientHeight,
                          n = e.scrollHeight,
                          o = e.scrollTop;
                        (0, this.props.onScroll)({
                          clientHeight: t,
                          scrollHeight: n,
                          scrollTop: o,
                        });
                      },
                    },
                    {
                      key: '_onSectionRendered',
                      value: function (e) {
                        var t = e.rowOverscanStartIndex,
                          n = e.rowOverscanStopIndex,
                          o = e.rowStartIndex,
                          r = e.rowStopIndex;
                        (0, this.props.onRowsRendered)({
                          overscanStartIndex: t,
                          overscanStopIndex: n,
                          startIndex: o,
                          stopIndex: r,
                        });
                      },
                    },
                    {
                      key: '_setRef',
                      value: function (e) {
                        this.Grid = e;
                      },
                    },
                    {
                      key: '_setScrollbarWidth',
                      value: function () {
                        var e = this.getScrollbarWidth();
                        this.setState({ scrollbarWidth: e });
                      },
                    },
                  ]),
                  t
                );
              })(o.PureComponent);
              Pe()(Tn, 'defaultProps', {
                disableHeader: !1,
                estimatedRowSize: 30,
                headerHeight: 0,
                headerStyle: {},
                noRowsRenderer: function () {
                  return null;
                },
                onRowsRendered: function () {
                  return null;
                },
                onScroll: function () {
                  return null;
                },
                overscanIndicesGetter: dt,
                overscanRowCount: 10,
                rowRenderer: bn,
                headerRowRenderer: vn,
                rowStyle: {},
                scrollToAlignment: 'auto',
                scrollToIndex: -1,
                style: {},
              }),
                (Tn.propTypes = {});
              var zn = [],
                On = null,
                In = null;
              function Pn() {
                In &&
                  ((In = null),
                  document.body &&
                    null != On &&
                    (document.body.style.pointerEvents = On),
                  (On = null));
              }
              function kn() {
                Pn(),
                  zn.forEach(function (e) {
                    return e.__resetIsScrolling();
                  });
              }
              function Mn(e) {
                e.currentTarget === window &&
                  null == On &&
                  document.body &&
                  ((On = document.body.style.pointerEvents),
                  (document.body.style.pointerEvents = 'none')),
                  (function () {
                    In && nt(In);
                    var e = 0;
                    zn.forEach(function (t) {
                      e = Math.max(e, t.props.scrollingResetTimeInterval);
                    }),
                      (In = ot(kn, e));
                  })(),
                  zn.forEach(function (t) {
                    t.props.scrollElement === e.currentTarget &&
                      t.__handleWindowScrollEvent();
                  });
              }
              function En(e, t) {
                zn.some(function (e) {
                  return e.props.scrollElement === t;
                }) || t.addEventListener('scroll', Mn),
                  zn.push(e);
              }
              function Ln(e, t) {
                (zn = zn.filter(function (t) {
                  return t !== e;
                })).length ||
                  (t.removeEventListener('scroll', Mn), In && (nt(In), Pn()));
              }
              var Hn,
                jn,
                An = function (e) {
                  return e === window;
                },
                Gn = function (e) {
                  return e.getBoundingClientRect();
                };
              function Wn(e, t) {
                if (e) {
                  if (An(e)) {
                    var n = window,
                      o = n.innerHeight,
                      r = n.innerWidth;
                    return {
                      height: 'number' == typeof o ? o : 0,
                      width: 'number' == typeof r ? r : 0,
                    };
                  }
                  return Gn(e);
                }
                return { height: t.serverHeight, width: t.serverWidth };
              }
              function Dn(e, t) {
                if (An(t) && document.documentElement) {
                  var n = document.documentElement,
                    o = Gn(e),
                    r = Gn(n);
                  return { top: o.top - r.top, left: o.left - r.left };
                }
                var i = Nn(t),
                  l = Gn(e),
                  s = Gn(t);
                return {
                  top: l.top + i.top - s.top,
                  left: l.left + i.left - s.left,
                };
              }
              function Nn(e) {
                return An(e) && document.documentElement
                  ? {
                      top:
                        'scrollY' in window
                          ? window.scrollY
                          : document.documentElement.scrollTop,
                      left:
                        'scrollX' in window
                          ? window.scrollX
                          : document.documentElement.scrollLeft,
                    }
                  : { top: e.scrollTop, left: e.scrollLeft };
              }
              function Fn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function Un(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Fn(n, !0).forEach(function (t) {
                        Pe()(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : Fn(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              var Bn = function () {
                  return 'undefined' != typeof window ? window : void 0;
                },
                Vn =
                  ((jn = Hn = (function (e) {
                    function t() {
                      var e, n;
                      _e()(this, t);
                      for (
                        var o = arguments.length, r = new Array(o), i = 0;
                        i < o;
                        i++
                      )
                        r[i] = arguments[i];
                      return (
                        (n = be()(
                          this,
                          (e = xe()(t)).call.apply(e, [this].concat(r))
                        )),
                        Pe()(Te()(n), '_window', Bn()),
                        Pe()(Te()(n), '_isMounted', !1),
                        Pe()(Te()(n), '_positionFromTop', 0),
                        Pe()(Te()(n), '_positionFromLeft', 0),
                        Pe()(Te()(n), '_detectElementResize', void 0),
                        Pe()(Te()(n), '_child', void 0),
                        Pe()(
                          Te()(n),
                          'state',
                          Un({}, Wn(n.props.scrollElement, n.props), {
                            isScrolling: !1,
                            scrollLeft: 0,
                            scrollTop: 0,
                          })
                        ),
                        Pe()(Te()(n), '_registerChild', function (e) {
                          !e ||
                            e instanceof Element ||
                            console.warn(
                              'WindowScroller registerChild expects to be passed Element or null'
                            ),
                            (n._child = e),
                            n.updatePosition();
                        }),
                        Pe()(Te()(n), '_onChildScroll', function (e) {
                          var t = e.scrollTop;
                          if (n.state.scrollTop !== t) {
                            var o = n.props.scrollElement;
                            o &&
                              ('function' == typeof o.scrollTo
                                ? o.scrollTo(0, t + n._positionFromTop)
                                : (o.scrollTop = t + n._positionFromTop));
                          }
                        }),
                        Pe()(Te()(n), '_registerResizeListener', function (e) {
                          e === window
                            ? window.addEventListener('resize', n._onResize, !1)
                            : n._detectElementResize.addResizeListener(
                                e,
                                n._onResize
                              );
                        }),
                        Pe()(
                          Te()(n),
                          '_unregisterResizeListener',
                          function (e) {
                            e === window
                              ? window.removeEventListener(
                                  'resize',
                                  n._onResize,
                                  !1
                                )
                              : e &&
                                n._detectElementResize.removeResizeListener(
                                  e,
                                  n._onResize
                                );
                          }
                        ),
                        Pe()(Te()(n), '_onResize', function () {
                          n.updatePosition();
                        }),
                        Pe()(Te()(n), '__handleWindowScrollEvent', function () {
                          if (n._isMounted) {
                            var e = n.props.onScroll,
                              t = n.props.scrollElement;
                            if (t) {
                              var o = Nn(t),
                                r = Math.max(0, o.left - n._positionFromLeft),
                                i = Math.max(0, o.top - n._positionFromTop);
                              n.setState({
                                isScrolling: !0,
                                scrollLeft: r,
                                scrollTop: i,
                              }),
                                e({ scrollLeft: r, scrollTop: i });
                            }
                          }
                        }),
                        Pe()(Te()(n), '__resetIsScrolling', function () {
                          n.setState({ isScrolling: !1 });
                        }),
                        n
                      );
                    }
                    return (
                      Oe()(t, e),
                      Se()(t, [
                        {
                          key: 'updatePosition',
                          value: function () {
                            var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : this.props.scrollElement,
                              t = this.props.onResize,
                              n = this.state,
                              o = n.height,
                              r = n.width,
                              l = this._child || i.findDOMNode(this);
                            if (l instanceof Element && e) {
                              var s = Dn(l, e);
                              (this._positionFromTop = s.top),
                                (this._positionFromLeft = s.left);
                            }
                            var a = Wn(e, this.props);
                            (o === a.height && r === a.width) ||
                              (this.setState({
                                height: a.height,
                                width: a.width,
                              }),
                              t({ height: a.height, width: a.width }));
                          },
                        },
                        {
                          key: 'componentDidMount',
                          value: function () {
                            var e = this.props.scrollElement;
                            (this._detectElementResize = Object(gt.a)()),
                              this.updatePosition(e),
                              e &&
                                (En(this, e), this._registerResizeListener(e)),
                              (this._isMounted = !0);
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function (e, t) {
                            var n = this.props.scrollElement,
                              o = e.scrollElement;
                            o !== n &&
                              null != o &&
                              null != n &&
                              (this.updatePosition(n),
                              Ln(this, o),
                              En(this, n),
                              this._unregisterResizeListener(o),
                              this._registerResizeListener(n));
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            var e = this.props.scrollElement;
                            e &&
                              (Ln(this, e), this._unregisterResizeListener(e)),
                              (this._isMounted = !1);
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var e = this.props.children,
                              t = this.state,
                              n = t.isScrolling,
                              o = t.scrollTop,
                              r = t.scrollLeft,
                              i = t.height,
                              l = t.width;
                            return e({
                              onChildScroll: this._onChildScroll,
                              registerChild: this._registerChild,
                              height: i,
                              isScrolling: n,
                              scrollLeft: r,
                              scrollTop: o,
                              width: l,
                            });
                          },
                        },
                      ]),
                      t
                    );
                  })(o.PureComponent)),
                  Pe()(Hn, 'propTypes', null),
                  jn);
              function qn(e) {
                return (qn =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
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
              function Zn(e, t, n, o, r, i, l) {
                try {
                  var s = e[i](l),
                    a = s.value;
                } catch (e) {
                  return void n(e);
                }
                s.done ? t(a) : Promise.resolve(a).then(o, r);
              }
              function Kn(e) {
                return function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (o, r) {
                    var i = e.apply(t, n);
                    function l(e) {
                      Zn(i, o, r, l, s, 'next', e);
                    }
                    function s(e) {
                      Zn(i, o, r, l, s, 'throw', e);
                    }
                    l(void 0);
                  });
                };
              }
              function Yn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function Xn(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? Yn(Object(n), !0).forEach(function (t) {
                        no(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : Yn(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              function Jn(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function $n(e, t) {
                return ($n =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  })(e, t);
              }
              function Qn(e, t) {
                return !t || ('object' !== qn(t) && 'function' != typeof t)
                  ? eo(e)
                  : t;
              }
              function eo(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              }
              function to(e) {
                return (to = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
              }
              function no(e, t, n) {
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
              Pe()(Vn, 'defaultProps', {
                onResize: function () {},
                onScroll: function () {},
                scrollingResetTimeInterval: 150,
                scrollElement: Bn(),
                serverHeight: 0,
                serverWidth: 0,
              });
              var oo = (function (e) {
                !(function (e, t) {
                  if ('function' != typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && $n(e, t);
                })(s, e);
                var t,
                  n,
                  o,
                  i,
                  l = (function (e) {
                    var t = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ('function' == typeof Proxy) return !0;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })();
                    return function () {
                      var n,
                        o = to(e);
                      if (t) {
                        var r = to(this).constructor;
                        n = Reflect.construct(o, arguments, r);
                      } else n = o.apply(this, arguments);
                      return Qn(this, n);
                    };
                  })(s);
                function s(e) {
                  var t;
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, s),
                    no(eo((t = l.call(this, e))), 'rowRenderer', function (e) {
                      var n = e.key,
                        o = e.index,
                        i = e.style,
                        l = e.parent;
                      return r.a.createElement(
                        bt,
                        {
                          cache: t.cache,
                          columnIndex: 0,
                          key: n,
                          parent: l,
                          rowIndex: o,
                        },
                        function (e) {
                          var n,
                            s = e.registerChild;
                          return r.a.createElement(
                            'div',
                            {
                              ref: s,
                              style: i,
                              id: ((n = o + 1), 'rm-page-'.concat(n)),
                            },
                            t.state.pages[o].loaded &&
                              r.a.createElement(ge, {
                                page: t.state.pages[o],
                                index: o,
                                zoom: t.state.zoom,
                                clickLinkHandler: t.handleLinkClicked,
                                parent: l,
                                onResetHeight: t.onResetHeight,
                              })
                          );
                        }
                      );
                    }),
                    no(eo(t), 'setListRef', function (e, n) {
                      e && !t.listRef && ((t.listRef = e), n(e));
                    }),
                    no(eo(t), 'onResize', function (e) {
                      var n = e.bounds;
                      t.setState({ dimensions: n }),
                        t.initialized && (t.resizeSpinner(), t.resize());
                    }),
                    no(eo(t), 'isRowLoaded', function (e) {
                      var n = e.index;
                      return (
                        n < t.state.pages.length && t.state.pages[n].loaded
                      );
                    }),
                    no(eo(t), 'loadMoreRows', function (e) {
                      var n = e.startIndex,
                        o = e.stopIndex;
                      return (
                        (t.nextLoadTask = { startIndex: n, stopIndex: o }),
                        t.isLoading ||
                          ((t.loadPromise = t.loadRows()), (t.isLoading = !0)),
                        t.loadPromise
                      );
                    }),
                    no(eo(t), 'onResetHeight', function (e, n, o, r) {
                      if (t.isResettingHeight)
                        setTimeout(function () {
                          t.onResetHeight(e, n, o, r);
                        }, 50);
                      else {
                        t.isResettingHeight = !0;
                        var i = t.cache.getHeight(e - 1, 0);
                        if (n && n !== i) {
                          var l;
                          t.spinnerTimer
                            ? t._stopSpinnerTimer()
                            : t.setState({ showSpinner: !0 });
                          var s = 0,
                            a = document.getElementById('reader-mode-list');
                          for (
                            l = 0;
                            l < t.state.pages.length && a.scrollTop > 0;
                            l++
                          ) {
                            var c = t.cache.getHeight(l);
                            if (s <= a.scrollTop && s + c >= a.scrollTop) {
                              l++;
                              break;
                            }
                            s += c;
                          }
                          var u = -1;
                          0 === l
                            ? (u = 0)
                            : l > e
                            ? (u = a.scrollTop - i + n)
                            : l === e && (u = s + ((a.scrollTop - s) / i) * n),
                            t.cache.set(
                              e - 1,
                              0,
                              t.cache.getWidth(e - 1, 0),
                              n
                            ),
                            o &&
                              'function' == typeof o.recomputeGridSize &&
                              o.recomputeGridSize({
                                columnIndex: 0,
                                rowIndex: e - 1,
                              }),
                            u >= 0
                              ? setTimeout(function () {
                                  t.listRef.scrollToPosition(u),
                                    setTimeout(function () {
                                      t._finishResetHeight(r);
                                    }, 50);
                                }, 50)
                              : t._finishResetHeight(r);
                        } else t._finishResetHeight(r, !1);
                      }
                    }),
                    (t.state = Xn(
                      Xn({}, t.state),
                      {},
                      { dimensions: { width: 0, height: 0 } }
                    )),
                    (t.isLoading = !1),
                    (t.pageNum = 1),
                    (t.nextLoadTask = void 0),
                    (t.loadPromise = void 0),
                    (t.listRef = void 0),
                    (t.cache = new Ct({ defaultHeight: 800, fixedWidth: !0 })),
                    (t.isResettingHeight = !1),
                    (t.spinnerTimer = void 0),
                    (t.handlePageNumberUpdated = _.debounce(
                      t.handlePageNumberUpdated.bind(eo(t)),
                      300
                    )),
                    (t.resize = _.throttle(t.resize.bind(eo(t)), 300)),
                    (t.handleZoomUpdated = _.throttle(
                      t.handleZoomUpdated.bind(eo(t)),
                      300
                    )),
                    (t.onScroll = _.throttle(t.onScroll.bind(eo(t)), 300, {
                      leading: !1,
                    })),
                    t
                  );
                }
                return (
                  (t = s),
                  (n = [
                    {
                      key: 'render',
                      value: function () {
                        var e = this;
                        return r.a.createElement(
                          S,
                          { bounds: !0, onResize: this.onResize },
                          function (t) {
                            var n = t.measureRef;
                            return r.a.createElement(
                              'div',
                              {
                                id: 'wv-read-mode',
                                style: {
                                  overflow: 'hidden',
                                  height: '100%',
                                  backgroundColor: 'white',
                                  width: 'inherit',
                                },
                                ref: n,
                              },
                              r.a.createElement(
                                'div',
                                {
                                  className:
                                    'reader-mode-spinner-wrapper ' +
                                    (e.state.showSpinner ? '' : 'hidden'),
                                  style: e.state.spinnerStyle,
                                },
                                r.a.createElement('div', {
                                  className: 'reader-mode-spinner',
                                })
                              ),
                              e.state.pages.length > 0 &&
                                r.a.createElement(
                                  At,
                                  {
                                    isRowLoaded: e.isRowLoaded,
                                    loadMoreRows: e.loadMoreRows,
                                    rowCount: e.state.pages.length,
                                    threshold: 1,
                                    minimumBatchSize: 1,
                                  },
                                  function (t) {
                                    var n = t.onRowsRendered,
                                      o = t.registerChild;
                                    return r.a.createElement(Dt, {
                                      onRowsRendered: n,
                                      ref: function (t) {
                                        return e.setListRef(t, o);
                                      },
                                      width: e.state.dimensions.width,
                                      height: e.state.dimensions.height,
                                      rowCount: e.state.pages.length,
                                      rowRenderer: e.rowRenderer,
                                      rowHeight: e.cache.rowHeight,
                                      deferredMeasurementCache: e.cache,
                                      zoom: e.state.zoom,
                                      onScroll: e.onScroll,
                                      id: 'reader-mode-list',
                                    });
                                  }
                                )
                            );
                          }
                        );
                      },
                    },
                    {
                      key: 'initializePages',
                      value:
                        ((i = Kn(
                          regeneratorRuntime.mark(function e(t) {
                            var n, o;
                            return regeneratorRuntime.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      for (n = [], o = 0; o < t; o++)
                                        n.push({ content: '', loaded: !1 }),
                                          this.cache.set(
                                            o,
                                            0,
                                            this.cache.getWidth(o, 0),
                                            800
                                          );
                                      this.setState({ pages: n });
                                    case 3:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function (e) {
                          return i.apply(this, arguments);
                        }),
                    },
                    {
                      key: 'loadRows',
                      value:
                        ((o = Kn(
                          regeneratorRuntime.mark(function e() {
                            var t = this;
                            return regeneratorRuntime.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this.nextLoadTask) {
                                        e.next = 3;
                                        break;
                                      }
                                      return (
                                        (this.isLoading = !1),
                                        e.abrupt('return')
                                      );
                                    case 3:
                                      return (
                                        (e.next = 5),
                                        new Promise(function (e) {
                                          var n = (function () {
                                            var n = Kn(
                                              regeneratorRuntime.mark(
                                                function n() {
                                                  var o, r, i, l, s, a;
                                                  return regeneratorRuntime.wrap(
                                                    function (n) {
                                                      for (;;)
                                                        switch (
                                                          (n.prev = n.next)
                                                        ) {
                                                          case 0:
                                                            (o =
                                                              t.nextLoadTask),
                                                              (r =
                                                                o.startIndex),
                                                              (i = o.stopIndex),
                                                              (t.nextLoadTask = void 0),
                                                              (l = r);
                                                          case 3:
                                                            if (!(l <= i)) {
                                                              n.next = 14;
                                                              break;
                                                            }
                                                            if (
                                                              t.state.pages[l]
                                                                .loaded
                                                            ) {
                                                              n.next = 11;
                                                              break;
                                                            }
                                                            return (
                                                              (n.next = 7),
                                                              t.getPageContent(
                                                                l
                                                              )
                                                            );
                                                          case 7:
                                                            (s = n.sent),
                                                              (a = s.htmlStr),
                                                              (t.state.pages[
                                                                l
                                                              ].content = a),
                                                              (t.state.pages[
                                                                l
                                                              ].loaded = !0);
                                                          case 11:
                                                            l++, (n.next = 3);
                                                            break;
                                                          case 14:
                                                            e();
                                                          case 15:
                                                          case 'end':
                                                            return n.stop();
                                                        }
                                                    },
                                                    n
                                                  );
                                                }
                                              )
                                            );
                                            return function () {
                                              return n.apply(this, arguments);
                                            };
                                          })();
                                          t.runPdfNetTask(n);
                                        })
                                      );
                                    case 5:
                                      return (e.next = 7), this.loadRows();
                                    case 7:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function () {
                          return o.apply(this, arguments);
                        }),
                    },
                    {
                      key: 'resize',
                      value: function () {
                        this._startSpinnerTimer(),
                          this.state.showSpinner ||
                            this.setState({ showSpinner: !0 });
                        for (var e = 0; e < this.state.pages.length; e++)
                          if (this.state.pages[e].loaded) {
                            var t =
                              ((o = e), document.getElementById(M(o + 1)));
                            if (t) {
                              var n = new CustomEvent('resize');
                              t.dispatchEvent(n);
                            }
                          }
                        var o;
                      },
                    },
                    {
                      key: 'jumpToPage',
                      value: function (e) {
                        this.setPageNumber(e + 1);
                        for (var t = 0, n = 0; n < e; n++)
                          t += this.cache.getHeight(n, 0);
                        this.listRef.scrollToPosition(t);
                      },
                    },
                    {
                      key: 'handlePageNumberUpdated',
                      value: function (e) {
                        var t = e.detail;
                        t > this.state.pages.length ||
                          t === this.pageNum ||
                          this.jumpToPage(t - 1);
                      },
                    },
                    {
                      key: 'setPageNumber',
                      value: function (e) {
                        e !== this.pageNum &&
                          ((this.pageNum = e),
                          this.props.options.pageNumberUpdateHandler(e));
                      },
                    },
                    {
                      key: 'onScroll',
                      value: function (e) {
                        var t = e.clientHeight,
                          n = e.scrollHeight,
                          o = e.scrollTop;
                        if (this.state.pages.length > 0) {
                          if (0 === o) return void this.setPageNumber(1);
                          if (n === t + o)
                            return void this.setPageNumber(
                              this.state.pages.length
                            );
                          for (
                            var r = o + t / 2, i = 0, l = 0;
                            l < this.state.pages.length;
                            l++
                          ) {
                            var s = this.cache.getHeight(l);
                            if (i < r && i + s >= r) {
                              this.setPageNumber(l + 1);
                              break;
                            }
                            i += s;
                          }
                        }
                      },
                    },
                    {
                      key: '_finishResetHeight',
                      value: function (e) {
                        var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                        t && this._startSpinnerTimer(),
                          e(),
                          (this.isResettingHeight = !1);
                      },
                    },
                    {
                      key: '_startSpinnerTimer',
                      value: function () {
                        var e = this;
                        this._stopSpinnerTimer(),
                          (this.spinnerTimer = setTimeout(function () {
                            (e.spinnerTimer = void 0),
                              e.setState({ showSpinner: !1 });
                          }, 500));
                      },
                    },
                    {
                      key: '_stopSpinnerTimer',
                      value: function () {
                        this.spinnerTimer &&
                          (clearTimeout(this.spinnerTimer),
                          (this.spinnerTimer = void 0));
                      },
                    },
                  ]) && Jn(t.prototype, n),
                  s
                );
              })(k);
              function ro(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              }
              function io(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? ro(Object(n), !0).forEach(function (t) {
                        lo(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : ro(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              }
              function lo(e, t, n) {
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
              !(function () {
                if ('function' == typeof window.CustomEvent) return !1;
                window.CustomEvent = function (e, t) {
                  t = t || { bubbles: !1, cancelable: !1, detail: null };
                  var n = document.createEvent('CustomEvent');
                  return (
                    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                  );
                };
              })();
              var so = {
                initialize: function (e) {
                  return {
                    pdfNet: e,
                    viewerElement: void 0,
                    render: function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        o = io(
                          {
                            pageNumberUpdateHandler: function (e) {},
                            pageNum: 1,
                            isSinglePageMode: !0,
                          },
                          n
                        );
                      (this.viewerElement = t),
                        this.unmount(),
                        o.isSinglePageMode
                          ? l.a.render(
                              r.a.createElement(le, {
                                doc: e,
                                pdfNet: this.pdfNet,
                                viewport: this.viewerElement,
                                options: o,
                              }),
                              this.viewerElement
                            )
                          : l.a.render(
                              r.a.createElement(oo, {
                                doc: e,
                                pdfNet: this.pdfNet,
                                viewport: this.viewerElement,
                                options: o,
                              }),
                              this.viewerElement
                            );
                    },
                    goToPage: function (e) {
                      var t = new CustomEvent('pageNumberUpdated', {
                        detail: e,
                      });
                      this.viewerElement.dispatchEvent(t);
                    },
                    setZoom: function (e) {
                      var t = new CustomEvent('zoomUpdated', { detail: e });
                      this.viewerElement.dispatchEvent(t);
                    },
                    unmount: function () {
                      this.viewerElement &&
                        l.a.unmountComponentAtNode(this.viewerElement);
                    },
                  };
                },
              };
              (t.default = so), (window.WebViewerReadingMode = so);
            },
          ])));
    },
  },
]);
