(function () {
  (function (c) {
    function d(a) {
      if (e[a]) return e[a].exports;
      var b = (e[a] = { i: a, l: !1, exports: {} });
      c[a].call(b.exports, b, b.exports, d);
      b.l = !0;
      return b.exports;
    }
    var e = {};
    d.m = c;
    d.c = e;
    d.d = function (a, b, c) {
      d.o(a, b) || Object.defineProperty(a, b, { enumerable: !0, get: c });
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
    d.p = '/core/';
    return d((d.s = 0));
  })([
    function (c, d, e) {
      c.exports = e(1);
    },
    function (c, d, e) {
      c = (function (a) {
        var b = {};
        decodeURIComponent(a.slice(1))
          .split('&')
          .forEach(function (a) {
            a = a.split('=', 2);
            b[a[0]] = a[1];
          });
        return b;
      })(self.location.hash);
      c.path &&
        ((self.workerBasePath = c.path),
        (self.pdfWorkerPath = ''.concat(c.path, 'pdf/')),
        (self.officeWorkerPath = ''.concat(c.path, 'office/')));
      importScripts(c.file);
    },
  ]);
}.call(this || window));
