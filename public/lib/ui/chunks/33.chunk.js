(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    951: function (e, a, _) {
      e.exports = (function (e) {
        'use strict';
        e = e && e.hasOwnProperty('default') ? e.default : e;
        var a = {
          name: 'en-au',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
          weekStart: 1,
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
          ),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          ordinal: function (e) {
            return e;
          },
          formats: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A',
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
        };
        return e.locale(a, null, !0), a;
      })(_(28));
    },
  },
]);
