(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
  {
    1050: function (_, t, s) {
      _.exports = (function (_) {
        'use strict';
        _ = _ && _.hasOwnProperty('default') ? _.default : _;
        var t = 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split(
            '_'
          ),
          s = 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split(
            '_'
          ),
          n = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function e(_, t, s) {
          var n, e;
          return 'm' === s
            ? t
              ? 'хвилина'
              : 'хвилину'
            : 'h' === s
            ? t
              ? 'година'
              : 'годину'
            : _ +
              ' ' +
              ((n = +_),
              (e = {
                ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
                mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
                hh: t ? 'година_години_годин' : 'годину_години_годин',
                dd: 'день_дні_днів',
                MM: 'місяць_місяці_місяців',
                yy: 'рік_роки_років',
              }[s].split('_')),
              n % 10 == 1 && n % 100 != 11
                ? e[0]
                : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
                ? e[1]
                : e[2]);
        }
        var M = function (_, e) {
          return n.test(e) ? t[_.month()] : s[_.month()];
        };
        (M.s = s), (M.f = t);
        var r = {
          name: 'uk',
          weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split(
            '_'
          ),
          weekdaysShort: 'ндл_пнд_втр_срд_чтв_птн_сбт'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          months: M,
          monthsShort: 'сiч_лют_бер_квiт_трав_черв_лип_серп_вер_жовт_лист_груд'.split(
            '_'
          ),
          weekStart: 1,
          relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            m: e,
            mm: e,
            h: e,
            hh: e,
            d: 'день',
            dd: e,
            M: 'місяць',
            MM: e,
            y: 'рік',
            yy: e,
          },
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm',
          },
        };
        return _.locale(r, null, !0), r;
      })(s(28));
    },
  },
]);
