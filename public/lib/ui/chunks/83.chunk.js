(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    1001: function (s, M, i) {
      s.exports = (function (s) {
        'use strict';
        s = s && s.hasOwnProperty('default') ? s.default : s;
        var M = 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split(
            '_'
          ),
          i = 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split(
            '_'
          ),
          a = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          Y = function (s, Y) {
            return a.test(Y) ? M[s.month()] : i[s.month()];
          };
        (Y.s = i), (Y.f = M);
        var e = {
          name: 'lt',
          weekdays: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split(
            '_'
          ),
          weekdaysShort: 'sek_pir_ant_tre_ket_pen_šeš'.split('_'),
          weekdaysMin: 's_p_a_t_k_pn_š'.split('_'),
          months: Y,
          monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split(
            '_'
          ),
          ordinal: function (s) {
            return s + '.';
          },
          weekStart: 1,
          relativeTime: {
            future: 'už %s',
            past: 'prieš %s',
            s: 'kelias sekundes',
            m: 'minutę',
            mm: '%d minutes',
            h: 'valandą',
            hh: '%d valandas',
            d: 'dieną',
            dd: '%d dienas',
            M: 'menesį',
            MM: '%d mėnesius',
            y: 'metus',
            yy: '%d metus',
          },
          format: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
          },
        };
        return s.locale(e, null, !0), e;
      })(i(28));
    },
  },
]);
