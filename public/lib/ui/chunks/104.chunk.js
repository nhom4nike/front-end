(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    1022: function (e, a, _) {
      e.exports = (function (e) {
        'use strict';
        e = e && e.hasOwnProperty('default') ? e.default : e;
        var a = {
          name: 'pt',
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split(
            '_'
          ),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sab'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sa'.split('_'),
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
            '_'
          ),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
            '_'
          ),
          ordinal: function (e) {
            return e + 'º';
          },
          weekStart: 1,
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'alguns segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
          },
        };
        return e.locale(a, null, !0), a;
      })(_(28));
    },
  },
]);
