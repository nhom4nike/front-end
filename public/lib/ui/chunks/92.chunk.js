(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    1010: function (a, e, _) {
      a.exports = (function (a) {
        'use strict';
        a = a && a.hasOwnProperty('default') ? a.default : a;
        var e = {
          name: 'ms',
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_'
          ),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split(
            '_'
          ),
          weekStart: 1,
          formats: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH.mm',
            LLLL: 'dddd, D MMMM YYYY HH.mm',
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
          },
          ordinal: function (a) {
            return a + '.';
          },
        };
        return a.locale(e, null, !0), e;
      })(_(28));
    },
  },
]);
