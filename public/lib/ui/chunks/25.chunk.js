(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    943: function (_, t, s) {
      _.exports = (function (_) {
        'use strict';
        _ = _ && _.hasOwnProperty('default') ? _.default : _;
        var t = {
          name: 'cv',
          weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split(
            '_'
          ),
          months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split(
            '_'
          ),
          weekStart: 1,
          weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
          monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split(
            '_'
          ),
          weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
          ordinal: function (_) {
            return _;
          },
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          },
        };
        return _.locale(t, null, !0), t;
      })(s(28));
    },
  },
]);
