/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  /*
 Pikaday

 Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
*/
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [18],
    {
      362: function (ha, da) {
        !(function (h, ca) {
          if ('object' == typeof da) {
            try {
              var aa = require('moment');
            } catch (fa) {}
            ha.exports = ca(aa);
          } else
            'function' == typeof define && define.amd
              ? define(function (h) {
                  try {
                    aa = h('moment');
                  } catch (ea) {}
                  return ca(aa);
                })
              : (h.Pikaday = ca(h.moment));
        })(this, function (h) {
          function ca(e) {
            var f = this,
              n = f.config(e);
            f._onMouseDown = function (e) {
              if (f._v) {
                var h = (e = e || window.event).target || e.srcElement;
                if (h)
                  if (
                    (ia(h, 'is-disabled') ||
                      (!ia(h, 'pika-button') ||
                      ia(h, 'is-empty') ||
                      ia(h.parentNode, 'is-disabled')
                        ? ia(h, 'pika-prev')
                          ? f.prevMonth()
                          : ia(h, 'pika-next') && f.nextMonth()
                        : (f.setDate(
                            new Date(
                              h.getAttribute('data-pika-year'),
                              h.getAttribute('data-pika-month'),
                              h.getAttribute('data-pika-day')
                            )
                          ),
                          n.bound &&
                            ya(function () {
                              f.hide();
                              n.blurFieldOnSelect && n.field && n.field.blur();
                            }, 100))),
                    ia(h, 'pika-select'))
                  )
                    f._c = !0;
                  else {
                    if (!e.preventDefault) return (e.returnValue = !1), !1;
                    e.preventDefault();
                  }
              }
            };
            f._onChange = function (e) {
              var h = (e = e || window.event).target || e.srcElement;
              h &&
                (ia(h, 'pika-select-month')
                  ? f.gotoMonth(h.value)
                  : ia(h, 'pika-select-year') && f.gotoYear(h.value));
            };
            f._onKeyChange = function (e) {
              if (((e = e || window.event), f.isVisible()))
                switch (e.keyCode) {
                  case 13:
                  case 27:
                    n.field && n.field.blur();
                    break;
                  case 37:
                    e.preventDefault();
                    f.adjustDate('subtract', 1);
                    break;
                  case 38:
                    f.adjustDate('subtract', 7);
                    break;
                  case 39:
                    f.adjustDate('add', 1);
                    break;
                  case 40:
                    f.adjustDate('add', 7);
                }
            };
            f._onInputChange = function (e) {
              var w;
              e.firedBy !== f &&
                ((w = n.parse
                  ? n.parse(n.field.value, n.format)
                  : na
                  ? (w = h(n.field.value, n.format, n.formatStrict)) &&
                    w.isValid()
                    ? w.toDate()
                    : null
                  : new Date(Date.parse(n.field.value))),
                r(w) && f.setDate(w),
                f._v || f.show());
            };
            f._onInputFocus = function () {
              f.show();
            };
            f._onInputClick = function () {
              f.show();
            };
            f._onInputBlur = function () {
              var e = ja.activeElement;
              do if (ia(e, 'pika-single')) return;
              while ((e = e.parentNode));
              f._c ||
                (f._b = ya(function () {
                  f.hide();
                }, 50));
              f._c = !1;
            };
            f._onClick = function (e) {
              var h = (e = e || window.event).target || e.srcElement;
              if ((e = h)) {
                !ka &&
                  ia(h, 'pika-select') &&
                  (h.onchange ||
                    (h.setAttribute('onchange', 'return;'),
                    oa(h, 'change', f._onChange)));
                do if (ia(e, 'pika-single') || e === n.trigger) return;
                while ((e = e.parentNode));
                f._v && h !== n.trigger && e !== n.trigger && f.hide();
              }
            };
            f.el = ja.createElement('div');
            f.el.className =
              'pika-single' +
              (n.isRTL ? ' is-rtl' : '') +
              (n.theme ? ' ' + n.theme : '');
            oa(f.el, 'mousedown', f._onMouseDown, !0);
            oa(f.el, 'touchend', f._onMouseDown, !0);
            oa(f.el, 'change', f._onChange);
            n.keyboardInput && oa(ja, 'keydown', f._onKeyChange);
            n.field &&
              (n.container
                ? n.container.appendChild(f.el)
                : n.bound
                ? ja.body.appendChild(f.el)
                : n.field.parentNode.insertBefore(f.el, n.field.nextSibling),
              oa(n.field, 'change', f._onInputChange),
              n.defaultDate ||
                (na && n.field.value
                  ? (n.defaultDate = h(n.field.value, n.format).toDate())
                  : (n.defaultDate = new Date(Date.parse(n.field.value))),
                (n.setDefaultDate = !0)));
            e = n.defaultDate;
            r(e)
              ? n.setDefaultDate
                ? f.setDate(e, !0)
                : f.gotoDate(e)
              : f.gotoDate(new Date());
            n.bound
              ? (this.hide(),
                (f.el.className += ' is-bound'),
                oa(n.trigger, 'click', f._onInputClick),
                oa(n.trigger, 'focus', f._onInputFocus),
                oa(n.trigger, 'blur', f._onInputBlur))
              : this.show();
          }
          function aa(e, f, h, r, w, x) {
            var y,
              z,
              ba = e._o,
              aa = h === ba.minYear,
              ca = h === ba.maxYear,
              ea =
                '<div id="' +
                x +
                '" class="pika-title" role="heading" aria-live="assertive">',
              da = !0,
              fa = !0;
            var ia = [];
            for (x = 0; 12 > x; x++)
              ia.push(
                '<option value="' +
                  (h === w ? x - f : 12 + x - f) +
                  '"' +
                  (x === r ? ' selected="selected"' : '') +
                  ((aa && x < ba.minMonth) || (ca && x > ba.maxMonth)
                    ? 'disabled="disabled"'
                    : '') +
                  '>' +
                  ba.i18n.months[x] +
                  '</option>'
              );
            w =
              '<div class="pika-label">' +
              ba.i18n.months[r] +
              '<select class="pika-select pika-select-month" tabindex="-1">' +
              ia.join('') +
              '</select></div>';
            n(ba.yearRange)
              ? ((x = ba.yearRange[0]), (y = ba.yearRange[1] + 1))
              : ((x = h - ba.yearRange), (y = 1 + h + ba.yearRange));
            for (ia = []; x < y && x <= ba.maxYear; x++)
              x >= ba.minYear &&
                ia.push(
                  '<option value="' +
                    x +
                    '"' +
                    (x === h ? ' selected="selected"' : '') +
                    '>' +
                    x +
                    '</option>'
                );
            return (
              (z =
                '<div class="pika-label">' +
                h +
                ba.yearSuffix +
                '<select class="pika-select pika-select-year" tabindex="-1">' +
                ia.join('') +
                '</select></div>'),
              ba.showMonthAfterYear ? (ea += z + w) : (ea += w + z),
              aa && (0 === r || ba.minMonth >= r) && (da = !1),
              ca && (11 === r || ba.maxMonth <= r) && (fa = !1),
              0 === f &&
                (ea +=
                  '<button class="pika-prev' +
                  (da ? '' : ' is-disabled') +
                  '" type="button">' +
                  ba.i18n.previousMonth +
                  '</button>'),
              f === e._o.numberOfMonths - 1 &&
                (ea +=
                  '<button class="pika-next' +
                  (fa ? '' : ' is-disabled') +
                  '" type="button">' +
                  ba.i18n.nextMonth +
                  '</button>'),
              ea + '</div>'
            );
          }
          function da(e, f, h, n) {
            return (
              '<tr class="pika-row' +
              (h ? ' pick-whole-week' : '') +
              (n ? ' is-selected' : '') +
              '">' +
              (f ? e.reverse() : e).join('') +
              '</tr>'
            );
          }
          function ea(e) {
            var f = [],
              h = 'false';
            if (e.isEmpty) {
              if (!e.showDaysInNextAndPreviousMonths)
                return '<td class="is-empty"></td>';
              f.push('is-outside-current-month');
              e.enableSelectionDaysInNextAndPreviousMonths ||
                f.push('is-selection-disabled');
            }
            return (
              e.isDisabled && f.push('is-disabled'),
              e.isToday && f.push('is-today'),
              e.isSelected && (f.push('is-selected'), (h = 'true')),
              e.hasEvent && f.push('has-event'),
              e.isInRange && f.push('is-inrange'),
              e.isStartRange && f.push('is-startrange'),
              e.isEndRange && f.push('is-endrange'),
              '<td data-day="' +
                e.day +
                '" class="' +
                f.join(' ') +
                '" aria-selected="' +
                h +
                '"><button class="pika-button pika-day" type="button" data-pika-year="' +
                e.year +
                '" data-pika-month="' +
                e.month +
                '" data-pika-day="' +
                e.day +
                '">' +
                e.day +
                '</button></td>'
            );
          }
          function z(e, f, h) {
            for (f += e.firstDay; 7 <= f; ) f -= 7;
            return h ? e.i18n.weekdaysShort[f] : e.i18n.weekdays[f];
          }
          function x(e) {
            return (
              0 > e.month &&
                ((e.year -= Math.ceil(Math.abs(e.month) / 12)),
                (e.month += 12)),
              11 < e.month &&
                ((e.year += Math.floor(Math.abs(e.month) / 12)),
                (e.month -= 12)),
              e
            );
          }
          function e(e, h, n) {
            var r;
            ja.createEvent
              ? ((r = ja.createEvent('HTMLEvents')).initEvent(h, !0, !1),
                (r = f(r, n)),
                e.dispatchEvent(r))
              : ja.createEventObject &&
                ((r = ja.createEventObject()),
                (r = f(r, n)),
                e.fireEvent('on' + h, r));
          }
          function f(e, h, w) {
            var x, y;
            for (x in h)
              (y = void 0 !== e[x]) &&
              'object' == typeof h[x] &&
              null !== h[x] &&
              void 0 === h[x].nodeName
                ? r(h[x])
                  ? w && (e[x] = new Date(h[x].getTime()))
                  : n(h[x])
                  ? w && (e[x] = h[x].slice(0))
                  : (e[x] = f({}, h[x], w))
                : (!w && y) || (e[x] = h[x]);
            return e;
          }
          function y(e) {
            r(e) && e.setHours(0, 0, 0, 0);
          }
          function r(e) {
            return (
              /Date/.test(Object.prototype.toString.call(e)) &&
              !isNaN(e.getTime())
            );
          }
          function n(e) {
            return /Array/.test(Object.prototype.toString.call(e));
          }
          function w(e, f) {
            var h;
            e.className = (h = (' ' + e.className + ' ').replace(
              ' ' + f + ' ',
              ' '
            )).trim
              ? h.trim()
              : h.replace(/^\s+|\s+$/g, '');
          }
          function ba(e, f) {
            ia(e, f) ||
              (e.className = '' === e.className ? f : e.className + ' ' + f);
          }
          function ia(e, f) {
            return -1 !== (' ' + e.className + ' ').indexOf(' ' + f + ' ');
          }
          function ha(e, f, h, n) {
            ka ? e.removeEventListener(f, h, !!n) : e.detachEvent('on' + f, h);
          }
          function oa(e, f, h, n) {
            ka ? e.addEventListener(f, h, !!n) : e.attachEvent('on' + f, h);
          }
          var na = 'function' == typeof h,
            ka = !!window.addEventListener,
            ja = window.document,
            ya = window.setTimeout,
            ma = {
              field: null,
              bound: void 0,
              ariaLabel: 'Use the arrow keys to pick a date',
              position: 'bottom left',
              reposition: !0,
              format: 'YYYY-MM-DD',
              toString: null,
              parse: null,
              defaultDate: null,
              setDefaultDate: !1,
              firstDay: 0,
              formatStrict: !1,
              minDate: null,
              maxDate: null,
              yearRange: 10,
              showWeekNumber: !1,
              pickWholeWeek: !1,
              minYear: 0,
              maxYear: 9999,
              minMonth: void 0,
              maxMonth: void 0,
              startRange: null,
              endRange: null,
              isRTL: !1,
              yearSuffix: '',
              showMonthAfterYear: !1,
              showDaysInNextAndPreviousMonths: !1,
              enableSelectionDaysInNextAndPreviousMonths: !1,
              numberOfMonths: 1,
              mainCalendar: 'left',
              container: void 0,
              blurFieldOnSelect: !0,
              i18n: {
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                months: 'January February March April May June July August September October November December'.split(
                  ' '
                ),
                weekdays: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(
                  ' '
                ),
                weekdaysShort: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
              },
              theme: null,
              events: [],
              onSelect: null,
              onOpen: null,
              onClose: null,
              onDraw: null,
              keyboardInput: !0,
            };
          return (
            (ca.prototype = {
              config: function (e) {
                this._o || (this._o = f({}, ma, !0));
                e = f(this._o, e, !0);
                e.isRTL = !!e.isRTL;
                e.field = e.field && e.field.nodeName ? e.field : null;
                e.theme =
                  'string' == typeof e.theme && e.theme ? e.theme : null;
                e.bound = !!(void 0 !== e.bound ? e.field && e.bound : e.field);
                e.trigger =
                  e.trigger && e.trigger.nodeName ? e.trigger : e.field;
                e.disableWeekends = !!e.disableWeekends;
                e.disableDayFn =
                  'function' == typeof e.disableDayFn ? e.disableDayFn : null;
                var h = parseInt(e.numberOfMonths, 10) || 1;
                ((e.numberOfMonths = 4 < h ? 4 : h),
                r(e.minDate) || (e.minDate = !1),
                r(e.maxDate) || (e.maxDate = !1),
                e.minDate &&
                  e.maxDate &&
                  e.maxDate < e.minDate &&
                  (e.maxDate = e.minDate = !1),
                e.minDate && this.setMinDate(e.minDate),
                e.maxDate && this.setMaxDate(e.maxDate),
                n(e.yearRange))
                  ? ((h = new Date().getFullYear() - 10),
                    (e.yearRange[0] = parseInt(e.yearRange[0], 10) || h),
                    (e.yearRange[1] = parseInt(e.yearRange[1], 10) || h))
                  : ((e.yearRange =
                      Math.abs(parseInt(e.yearRange, 10)) || ma.yearRange),
                    100 < e.yearRange && (e.yearRange = 100));
                return e;
              },
              toString: function (e) {
                return (
                  (e = e || this._o.format),
                  r(this._d)
                    ? this._o.toString
                      ? this._o.toString(this._d, e)
                      : na
                      ? h(this._d).format(e)
                      : this._d.toDateString()
                    : ''
                );
              },
              getMoment: function () {
                return na ? h(this._d) : null;
              },
              setMoment: function (e, f) {
                na && h.isMoment(e) && this.setDate(e.toDate(), f);
              },
              getDate: function () {
                return r(this._d) ? new Date(this._d.getTime()) : null;
              },
              setDate: function (f, h) {
                if (!f)
                  return (
                    (this._d = null),
                    this._o.field &&
                      ((this._o.field.value = ''),
                      e(this._o.field, 'change', { firedBy: this })),
                    this.draw()
                  );
                if (
                  ('string' == typeof f && (f = new Date(Date.parse(f))), r(f))
                ) {
                  var n = this._o.minDate,
                    w = this._o.maxDate;
                  r(n) && f < n ? (f = n) : r(w) && f > w && (f = w);
                  this._d = new Date(f.getTime());
                  y(this._d);
                  this.gotoDate(this._d);
                  this._o.field &&
                    ((this._o.field.value = this.toString()),
                    e(this._o.field, 'change', { firedBy: this }));
                  h ||
                    'function' != typeof this._o.onSelect ||
                    this._o.onSelect.call(this, this.getDate());
                }
              },
              gotoDate: function (e) {
                var f = !0;
                if (r(e)) {
                  if (this.calendars) {
                    f = new Date(
                      this.calendars[0].year,
                      this.calendars[0].month,
                      1
                    );
                    var h = new Date(
                        this.calendars[this.calendars.length - 1].year,
                        this.calendars[this.calendars.length - 1].month,
                        1
                      ),
                      n = e.getTime();
                    h.setMonth(h.getMonth() + 1);
                    h.setDate(h.getDate() - 1);
                    f = n < f.getTime() || h.getTime() < n;
                  }
                  f &&
                    ((this.calendars = [
                      { month: e.getMonth(), year: e.getFullYear() },
                    ]),
                    'right' === this._o.mainCalendar &&
                      (this.calendars[0].month += 1 - this._o.numberOfMonths));
                  this.adjustCalendars();
                }
              },
              adjustDate: function (e, f) {
                var h,
                  n = this.getDate() || new Date();
                f = 864e5 * parseInt(f);
                'add' === e
                  ? (h = new Date(n.valueOf() + f))
                  : 'subtract' === e && (h = new Date(n.valueOf() - f));
                this.setDate(h);
              },
              adjustCalendars: function () {
                this.calendars[0] = x(this.calendars[0]);
                for (var e = 1; e < this._o.numberOfMonths; e++)
                  this.calendars[e] = x({
                    month: this.calendars[0].month + e,
                    year: this.calendars[0].year,
                  });
                this.draw();
              },
              gotoToday: function () {
                this.gotoDate(new Date());
              },
              gotoMonth: function (e) {
                isNaN(e) ||
                  ((this.calendars[0].month = parseInt(e, 10)),
                  this.adjustCalendars());
              },
              nextMonth: function () {
                this.calendars[0].month++;
                this.adjustCalendars();
              },
              prevMonth: function () {
                this.calendars[0].month--;
                this.adjustCalendars();
              },
              gotoYear: function (e) {
                isNaN(e) ||
                  ((this.calendars[0].year = parseInt(e, 10)),
                  this.adjustCalendars());
              },
              setMinDate: function (e) {
                e instanceof Date
                  ? (y(e),
                    (this._o.minDate = e),
                    (this._o.minYear = e.getFullYear()),
                    (this._o.minMonth = e.getMonth()))
                  : ((this._o.minDate = ma.minDate),
                    (this._o.minYear = ma.minYear),
                    (this._o.minMonth = ma.minMonth),
                    (this._o.startRange = ma.startRange));
                this.draw();
              },
              setMaxDate: function (e) {
                e instanceof Date
                  ? (y(e),
                    (this._o.maxDate = e),
                    (this._o.maxYear = e.getFullYear()),
                    (this._o.maxMonth = e.getMonth()))
                  : ((this._o.maxDate = ma.maxDate),
                    (this._o.maxYear = ma.maxYear),
                    (this._o.maxMonth = ma.maxMonth),
                    (this._o.endRange = ma.endRange));
                this.draw();
              },
              setStartRange: function (e) {
                this._o.startRange = e;
              },
              setEndRange: function (e) {
                this._o.endRange = e;
              },
              draw: function (e) {
                if (this._v || e) {
                  var f = this._o;
                  var h = f.minYear;
                  var n = f.maxYear,
                    r = f.minMonth,
                    w = f.maxMonth;
                  e = '';
                  this._y <= h &&
                    ((this._y = h), !isNaN(r) && this._m < r && (this._m = r));
                  this._y >= n &&
                    ((this._y = n), !isNaN(w) && this._m > w && (this._m = w));
                  h =
                    'pika-title-' +
                    Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, '')
                      .substr(0, 2);
                  for (n = 0; n < f.numberOfMonths; n++)
                    e +=
                      '<div class="pika-lendar">' +
                      aa(
                        this,
                        n,
                        this.calendars[n].year,
                        this.calendars[n].month,
                        this.calendars[0].year,
                        h
                      ) +
                      this.render(
                        this.calendars[n].year,
                        this.calendars[n].month,
                        h
                      ) +
                      '</div>';
                  this.el.innerHTML = e;
                  f.bound &&
                    'hidden' !== f.field.type &&
                    ya(function () {
                      f.trigger.focus();
                    }, 1);
                  'function' == typeof this._o.onDraw && this._o.onDraw(this);
                  f.bound && f.field.setAttribute('aria-label', f.ariaLabel);
                }
              },
              adjustPosition: function () {
                var e, f, h, n, r, x, y, z, aa;
                if (!this._o.container) {
                  if (
                    ((this.el.style.position = 'absolute'),
                    (f = e = this._o.trigger),
                    (h = this.el.offsetWidth),
                    (n = this.el.offsetHeight),
                    (r = window.innerWidth || ja.documentElement.clientWidth),
                    (x = window.innerHeight || ja.documentElement.clientHeight),
                    (y =
                      window.pageYOffset ||
                      ja.body.scrollTop ||
                      ja.documentElement.scrollTop),
                    (z = !0),
                    (aa = !0),
                    'function' == typeof e.getBoundingClientRect)
                  ) {
                    var ca =
                      (f = e.getBoundingClientRect()).left + window.pageXOffset;
                    var ea = f.bottom + window.pageYOffset;
                  } else
                    for (
                      ca = f.offsetLeft, ea = f.offsetTop + f.offsetHeight;
                      (f = f.offsetParent);

                    )
                      (ca += f.offsetLeft), (ea += f.offsetTop);
                  ((this._o.reposition && ca + h > r) ||
                    (-1 < this._o.position.indexOf('right') &&
                      0 < ca - h + e.offsetWidth)) &&
                    ((ca = ca - h + e.offsetWidth), (z = !1));
                  ((this._o.reposition && ea + n > x + y) ||
                    (-1 < this._o.position.indexOf('top') &&
                      0 < ea - n - e.offsetHeight)) &&
                    ((ea = ea - n - e.offsetHeight), (aa = !1));
                  this.el.style.left = ca + 'px';
                  this.el.style.top = ea + 'px';
                  ba(this.el, z ? 'left-aligned' : 'right-aligned');
                  ba(this.el, aa ? 'bottom-aligned' : 'top-aligned');
                  w(this.el, z ? 'right-aligned' : 'left-aligned');
                  w(this.el, aa ? 'top-aligned' : 'bottom-aligned');
                }
              },
              render: function (e, f, h) {
                var n = this._o,
                  w = new Date(),
                  x = [
                    31,
                    (0 == e % 4 && 0 != e % 100) || 0 == e % 400 ? 29 : 28,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31,
                  ][f],
                  ba = new Date(e, f, 1).getDay(),
                  aa = [],
                  ca = [];
                y(w);
                0 < n.firstDay && 0 > (ba -= n.firstDay) && (ba += 7);
                for (
                  var fa = 0 === f ? 11 : f - 1,
                    ia = 11 === f ? 0 : f + 1,
                    ha = 0 === f ? e - 1 : e,
                    ma = 11 === f ? e + 1 : e,
                    va = [
                      31,
                      (0 == ha % 4 && 0 != ha % 100) || 0 == ha % 400 ? 29 : 28,
                      31,
                      30,
                      31,
                      30,
                      31,
                      31,
                      30,
                      31,
                      30,
                      31,
                    ][fa],
                    ja = x + ba,
                    ka = ja;
                  7 < ka;

                )
                  ka -= 7;
                ja += 7 - ka;
                var la, oa, na, sa;
                ka = !1;
                for (var ya = 0, xa = 0; ya < ja; ya++) {
                  var Ba = new Date(e, f, ya - ba + 1),
                    Ha = !!r(this._d) && Ba.getTime() === this._d.getTime(),
                    Qa = Ba.getTime() === w.getTime(),
                    Ta = -1 !== n.events.indexOf(Ba.toDateString()),
                    Ra = ya < ba || ya >= x + ba,
                    ib = ya - ba + 1,
                    Lb = f,
                    Mb = e,
                    Db =
                      n.startRange && n.startRange.getTime() === Ba.getTime(),
                    ub = n.endRange && n.endRange.getTime() === Ba.getTime(),
                    $b =
                      n.startRange &&
                      n.endRange &&
                      n.startRange < Ba &&
                      Ba < n.endRange;
                  Ra &&
                    (ya < ba
                      ? ((ib = va + ib), (Lb = fa), (Mb = ha))
                      : ((ib -= x), (Lb = ia), (Mb = ma)));
                  var wb;
                  !(wb =
                    (n.minDate && Ba < n.minDate) ||
                    (n.maxDate && Ba > n.maxDate)) &&
                    (wb = n.disableWeekends) &&
                    ((wb = Ba.getDay()), (wb = 0 === wb || 6 === wb));
                  Ba = {
                    day: ib,
                    month: Lb,
                    year: Mb,
                    hasEvent: Ta,
                    isSelected: Ha,
                    isToday: Qa,
                    isDisabled: wb || (n.disableDayFn && n.disableDayFn(Ba)),
                    isEmpty: Ra,
                    isStartRange: Db,
                    isEndRange: ub,
                    isInRange: $b,
                    showDaysInNextAndPreviousMonths:
                      n.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths:
                      n.enableSelectionDaysInNextAndPreviousMonths,
                  };
                  n.pickWholeWeek && Ha && (ka = !0);
                  ca.push(ea(Ba));
                  7 == ++xa &&
                    (n.showWeekNumber &&
                      ca.unshift(
                        ((la = ya - ba),
                        (oa = f),
                        (na = e),
                        (sa = void 0),
                        (sa = new Date(na, 0, 1)),
                        '<td class="pika-week">' +
                          Math.ceil(
                            ((new Date(na, oa, la) - sa) / 864e5 +
                              sa.getDay() +
                              1) /
                              7
                          ) +
                          '</td>')
                      ),
                    aa.push(da(ca, n.isRTL, n.pickWholeWeek, ka)),
                    (ca = []),
                    (xa = 0),
                    (ka = !1));
                }
                f = [];
                n.showWeekNumber && f.push('<th></th>');
                for (e = 0; 7 > e; e++)
                  f.push(
                    '<th scope="col"><abbr title="' +
                      z(n, e) +
                      '">' +
                      z(n, e, !0) +
                      '</abbr></th>'
                  );
                n =
                  '<thead><tr>' +
                  (n.isRTL ? f.reverse() : f).join('') +
                  '</tr></thead>';
                return (
                  '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
                  h +
                  '">' +
                  n +
                  ('<tbody>' + aa.join('') + '</tbody>') +
                  '</table>'
                );
              },
              isVisible: function () {
                return this._v;
              },
              show: function () {
                this.isVisible() ||
                  ((this._v = !0),
                  this.draw(),
                  w(this.el, 'is-hidden'),
                  this._o.bound &&
                    (oa(ja, 'click', this._onClick), this.adjustPosition()),
                  'function' == typeof this._o.onOpen &&
                    this._o.onOpen.call(this));
              },
              hide: function () {
                var e = this._v;
                !1 !== e &&
                  (this._o.bound && ha(ja, 'click', this._onClick),
                  (this.el.style.position = 'static'),
                  (this.el.style.left = 'auto'),
                  (this.el.style.top = 'auto'),
                  ba(this.el, 'is-hidden'),
                  (this._v = !1),
                  void 0 !== e &&
                    'function' == typeof this._o.onClose &&
                    this._o.onClose.call(this));
              },
              destroy: function () {
                var e = this._o;
                this.hide();
                ha(this.el, 'mousedown', this._onMouseDown, !0);
                ha(this.el, 'touchend', this._onMouseDown, !0);
                ha(this.el, 'change', this._onChange);
                e.keyboardInput && ha(ja, 'keydown', this._onKeyChange);
                e.field &&
                  (ha(e.field, 'change', this._onInputChange),
                  e.bound &&
                    (ha(e.trigger, 'click', this._onInputClick),
                    ha(e.trigger, 'focus', this._onInputFocus),
                    ha(e.trigger, 'blur', this._onInputBlur)));
                this.el.parentNode && this.el.parentNode.removeChild(this.el);
              },
            }),
            ca
          );
        });
      },
    },
  ]);
}.call(this || window));
