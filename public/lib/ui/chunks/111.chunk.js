(window.webpackJsonp = window.webpackJsonp || []).push([
  [111],
  {
    1029: function (e, r, t) {
      e.exports = (function (e) {
        'use strict';
        function r(e) {
          return e > 1 && e < 5 && 1 != ~~(e / 10);
        }
        function t(e, t, n, a) {
          var s = e + ' ';
          switch (n) {
            case 's':
              return t || a ? 'pár sekúnd' : 'pár sekundami';
            case 'm':
              return t ? 'minúta' : a ? 'minútu' : 'minútou';
            case 'mm':
              return t || a ? s + (r(e) ? 'minúty' : 'minút') : s + 'minútami';
            case 'h':
              return t ? 'hodina' : a ? 'hodinu' : 'hodinou';
            case 'hh':
              return t || a ? s + (r(e) ? 'hodiny' : 'hodín') : s + 'hodinami';
            case 'd':
              return t || a ? 'deň' : 'dňom';
            case 'dd':
              return t || a ? s + (r(e) ? 'dni' : 'dní') : s + 'dňami';
            case 'M':
              return t || a ? 'mesiac' : 'mesiacom';
            case 'MM':
              return t || a
                ? s + (r(e) ? 'mesiace' : 'mesiacov')
                : s + 'mesiacmi';
            case 'y':
              return t || a ? 'rok' : 'rokom';
            case 'yy':
              return t || a ? s + (r(e) ? 'roky' : 'rokov') : s + 'rokmi';
          }
        }
        e = e && e.hasOwnProperty('default') ? e.default : e;
        var n = {
          name: 'sk',
          weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
          weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
          months: 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split(
            '_'
          ),
          monthsShort: 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split(
            '_'
          ),
          weekStart: 1,
          yearStart: 4,
          ordinal: function (e) {
            return e + '.';
          },
          formats: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY',
          },
          relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
        };
        return e.locale(n, null, !0), n;
      })(t(28));
    },
  },
]);
