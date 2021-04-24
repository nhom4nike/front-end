(window.webpackJsonp = window.webpackJsonp || []).push([
  [102],
  {
    1020: function (e, i, t) {
      e.exports = (function (e) {
        'use strict';
        function i(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
        }
        function t(e, t, a) {
          var n = e + ' ';
          switch (a) {
            case 'm':
              return t ? 'minuta' : 'minutę';
            case 'mm':
              return n + (i(e) ? 'minuty' : 'minut');
            case 'h':
              return t ? 'godzina' : 'godzinę';
            case 'hh':
              return n + (i(e) ? 'godziny' : 'godzin');
            case 'MM':
              return n + (i(e) ? 'miesiące' : 'miesięcy');
            case 'yy':
              return n + (i(e) ? 'lata' : 'lat');
          }
        }
        e = e && e.hasOwnProperty('default') ? e.default : e;
        var a = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split(
            '_'
          ),
          n = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split(
            '_'
          ),
          _ = /D MMMM/,
          r = function (e, i) {
            return _.test(i) ? a[e.month()] : n[e.month()];
          };
        (r.s = n), (r.f = a);
        var s = {
          name: 'pl',
          weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split(
            '_'
          ),
          weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
          weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
          months: r,
          monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split(
            '_'
          ),
          ordinal: function (e) {
            return e + '.';
          },
          weekStart: 1,
          relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: t,
            y: 'rok',
            yy: t,
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
          },
        };
        return e.locale(s, null, !0), s;
      })(t(28));
    },
  },
]);
