(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    940: function (_, e, a) {
      _.exports = (function (_) {
        'use strict';
        _ = _ && _.hasOwnProperty('default') ? _.default : _;
        var e = {
          name: 'bs',
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split(
            '_'
          ),
          months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
            '_'
          ),
          weekStart: 1,
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split(
            '_'
          ),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm',
          },
        };
        return _.locale(e, null, !0), e;
      })(a(28));
    },
  },
]);
