(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    970: function (r, a, e) {
      r.exports = (function (r) {
        'use strict';
        r = r && r.hasOwnProperty('default') ? r.default : r;
        var a = {
          name: 'fo',
          weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split(
            '_'
          ),
          months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_'
          ),
          weekStart: 1,
          weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split(
            '_'
          ),
          weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
          ordinal: function (r) {
            return r;
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D. MMMM, YYYY HH:mm',
          },
          relativeTime: {
            future: 'um %s',
            past: '%s síðani',
            s: 'fá sekund',
            m: 'ein minuttur',
            mm: '%d minuttir',
            h: 'ein tími',
            hh: '%d tímar',
            d: 'ein dagur',
            dd: '%d dagar',
            M: 'ein mánaður',
            MM: '%d mánaðir',
            y: 'eitt ár',
            yy: '%d ár',
          },
        };
        return r.locale(a, null, !0), a;
      })(e(28));
    },
  },
]);
