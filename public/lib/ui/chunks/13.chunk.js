(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    931: function (_, t, e) {
      _.exports = (function (_) {
        'use strict';
        _ = _ && _.hasOwnProperty('default') ? _.default : _;
        var t = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
            '_'
          ),
          e = {
            name: 'ar',
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split(
              '_'
            ),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            months: t,
            monthsShort: t,
            weekStart: 6,
            relativeTime: {
              future: 'بعد %s',
              past: 'منذ %s',
              s: 'ثانية واحدة',
              m: 'دقيقة واحدة',
              mm: '%d دقائق',
              h: 'ساعة واحدة',
              hh: '%d ساعات',
              d: 'يوم واحد',
              dd: '%d أيام',
              M: 'شهر واحد',
              MM: '%d أشهر',
              y: 'عام واحد',
              yy: '%d أعوام',
            },
            ordinal: function (_) {
              return _;
            },
            formats: {
              LT: 'HH:mm',
              LTS: 'HH:mm:ss',
              L: 'D/‏M/‏YYYY',
              LL: 'D MMMM YYYY',
              LLL: 'D MMMM YYYY HH:mm',
              LLLL: 'dddd D MMMM YYYY HH:mm',
            },
          };
        return _.locale(e, null, !0), e;
      })(e(28));
    },
  },
]);
