(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    508: function (e, n, r) {},
    540: function (e, n, r) {
      'use strict';
      r.r(n);
      r(5),
        r(10),
        r(11),
        r(24),
        r(20),
        r(18),
        r(16),
        r(6),
        r(31),
        r(17),
        r(9),
        r(14),
        r(39),
        r(13),
        r(40),
        r(41),
        r(25),
        r(4),
        r(12),
        r(7),
        r(21),
        r(8);
      var t = r(0),
        o = r.n(t),
        a = r(1),
        i = r.n(a),
        c = r(538);
      r(508);
      function u(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, t);
        }
        return r;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? u(Object(r), !0).forEach(function (n) {
                f(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                );
              });
        }
        return e;
      }
      function f(e, n, r) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = r),
          e
        );
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return p(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ('string' == typeof e) return p(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return p(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function p(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
        return t;
      }
      var y = {
          value: i.a.string,
          placeholder: i.a.string,
          onChange: i.a.func.isRequired,
          onBlur: i.a.func,
          onFocus: i.a.func,
          onKeyDown: i.a.func,
          userData: i.a.arrayOf(i.a.object),
        },
        b = o.a.forwardRef(function (e, n) {
          var r = e.value,
            t = void 0 === r ? '' : r,
            a = e.onChange,
            i = e.onKeyDown,
            u = void 0 === i ? function () {} : i,
            f = e.onBlur,
            p = void 0 === f ? function () {} : f,
            y = e.onFocus,
            b = void 0 === y ? function () {} : y,
            d = e.placeholder,
            m = void 0 === d ? '' : d,
            g = s(
              e.userData.map(function (e) {
                return l(l({}, e), {}, { display: e.value });
              })
            );
          return o.a.createElement(
            'div',
            {
              onMouseDown: function (e) {
                return e.stopPropagation();
              },
            },
            o.a.createElement(
              c.b,
              {
                className: 'mention',
                inputRef: n,
                value: t,
                onChange: a,
                onKeyDown: u,
                onBlur: p,
                onFocus: b,
                placeholder: m,
                allowSpaceInQuery: !0,
              },
              o.a.createElement(c.a, {
                trigger: '@',
                data: g,
                displayTransform: function (e, n) {
                  return '@'.concat(n);
                },
                renderSuggestion: function (e, n, r) {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    r,
                    o.a.createElement('div', { className: 'email' }, e.email)
                  );
                },
              })
            )
          );
        });
      b.propTypes = y;
      var d = b;
      n.default = d;
    },
  },
]);
