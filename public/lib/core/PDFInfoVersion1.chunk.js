/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
  (window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
    [12],
    {
      363: function (ha, da, h) {
        function ca(e) {
          e.Ia();
          e.advance();
          var f = e.current.textContent;
          e.Ya();
          return f;
        }
        function aa(e) {
          var f = [];
          for (e.Ia(); e.advance(); ) {
            var h = e.Oa();
            'field' === h
              ? f.push(String(e.ba('name')))
              : Object(ia.h)('unrecognised field list element: ' + h);
          }
          e.Ya();
          return f;
        }
        function fa(e, f) {
          return f ? 'false' !== e : 'true' === e;
        }
        function ea(e, f) {
          var h = e.Oa();
          switch (h) {
            case 'javascript':
              return { name: 'JavaScript', javascript: e.current.textContent };
            case 'uri':
              return { name: 'URI', uri: e.ba('uri') };
            case 'goto':
              h = null;
              e.Ia();
              if (e.advance()) {
                var n = e.ba('fit');
                h = { page: e.ba('page'), fit: n };
                if ('0' === h.page)
                  Object(ia.h)('null page encountered in dest');
                else
                  switch (((f = f(Number(h.page))), n)) {
                    case 'Fit':
                    case 'FitB':
                      break;
                    case 'FitH':
                    case 'FitBH':
                      h.top = f.ka({ x: 0, y: e.ba('top') || 0 }).y;
                      break;
                    case 'FitV':
                    case 'FitBV':
                      h.left = f.ka({ x: e.ba('left') || 0, y: 0 }).x;
                      break;
                    case 'FitR':
                      n = f.ka({ x: e.ba('left') || 0, y: e.ba('top') || 0 });
                      f = f.ka({
                        x: e.ba('right') || 0,
                        y: e.ba('bottom') || 0,
                      });
                      f = new na.d(n.x, n.y, f.x, f.y);
                      h.top = f.ea;
                      h.left = f.ha;
                      h.bottom = f.fa;
                      h.right = f.ia;
                      break;
                    case 'XYZ':
                      n = f.ka({ x: e.ba('left') || 0, y: e.ba('top') || 0 });
                      h.top = n.y;
                      h.left = n.x;
                      h.zoom = e.ba('zoom') || 0;
                      break;
                    default:
                      Object(ia.h)('unknown dest fit: ' + n);
                  }
                h = { name: 'GoTo', dest: h };
              } else Object(ia.h)('missing dest in GoTo action');
              e.Ya();
              return h;
            case 'submit-form':
              h = {
                name: 'SubmitForm',
                url: e.ba('url'),
                format: e.ba('format'),
                method: e.ba('method') || 'POST',
                exclude: fa(e.ba('exclude'), !1),
              };
              f = e.ba('flags');
              h.flags = f ? f.split(' ') : [];
              for (e.Ia(); e.advance(); )
                switch (((f = e.Oa()), f)) {
                  case 'fields':
                    h.fields = aa(e);
                    break;
                  default:
                    Object(ia.h)('unrecognised submit-form child: ' + f);
                }
              e.Ya();
              return h;
            case 'reset-form':
              h = { name: 'ResetForm', exclude: fa(e.ba('exclude'), !1) };
              for (e.Ia(); e.advance(); )
                switch (((f = e.Oa()), f)) {
                  case 'fields':
                    h.fields = aa(e);
                    break;
                  default:
                    Object(ia.h)('unrecognised reset-form child: ' + f);
                }
              e.Ya();
              return h;
            case 'hide':
              h = { name: 'Hide', hide: fa(e.ba('hide'), !0) };
              for (e.Ia(); e.advance(); )
                switch (((f = e.Oa()), f)) {
                  case 'fields':
                    h.fields = aa(e);
                    break;
                  default:
                    Object(ia.h)('unrecognised hide child: ' + f);
                }
              e.Ya();
              return h;
            case 'named':
              return { name: 'Named', action: e.ba('name') };
            default:
              Object(ia.h)('Encountered unexpected action type: ' + h);
          }
          return null;
        }
        function z(e, f, h) {
          var n = {};
          for (e.Ia(); e.advance(); ) {
            var r = e.Oa();
            switch (r) {
              case 'action':
                r = e.ba('trigger');
                if (f ? -1 !== f.indexOf(r) : 1) {
                  n[r] = [];
                  for (e.Ia(); e.advance(); ) {
                    var w = ea(e, h);
                    Object(la.isNull)(w) || n[r].push(w);
                  }
                  e.Ya();
                } else
                  Object(ia.h)('encountered unexpected trigger on field: ' + r);
                break;
              default:
                Object(ia.h)('encountered unknown action child: ' + r);
            }
          }
          e.Ya();
          return n;
        }
        function x(e) {
          return new ka.a(
            e.ba('r') || 0,
            e.ba('g') || 0,
            e.ba('b') || 0,
            e.ba('a') || 1
          );
        }
        function e(e, f) {
          var h = e.ba('name'),
            n = e.ba('type') || 'Type1',
            r = e.ba('size'),
            w = f.ka({ x: 0, y: 0 });
          r = f.ka({ x: Number(r), y: 0 });
          f = w.x - r.x;
          w = w.y - r.y;
          h = {
            name: h,
            type: n,
            size: Math.sqrt(f * f + w * w) || 0,
            strokeColor: [0, 0, 0],
            fillColor: [0, 0, 0],
          };
          for (e.Ia(); e.advance(); )
            switch (((n = e.Oa()), n)) {
              case 'stroke-color':
                h.strokeColor = x(e);
                break;
              case 'fill-color':
                h.fillColor = x(e);
                break;
              default:
                Object(ia.h)('unrecognised font child: ' + n);
            }
          e.Ya();
          return h;
        }
        function f(e) {
          return {
            value: e.ba('value'),
            displayValue: e.ba('display-value') || void 0,
          };
        }
        function y(e) {
          var h = [];
          for (e.Ia(); e.advance(); ) {
            var n = e.Oa();
            switch (n) {
              case 'option':
                h.push(f(e));
                break;
              default:
                Object(ia.h)('unrecognised options child: ' + n);
            }
          }
          e.Ya();
          return h;
        }
        function r(f, h) {
          var n = f.ba('name'),
            r = {
              type: f.ba('type'),
              quadding: f.ba('quadding') || 'Left-justified',
              maxLen: f.ba('max-len') || -1,
            },
            w = f.ba('flags');
          Object(la.isString)(w) && (r.flags = w.split(' '));
          for (f.Ia(); f.advance(); )
            switch (((w = f.Oa()), w)) {
              case 'actions':
                r.actions = z(f, ['C', 'F', 'K', 'V'], function () {
                  return h;
                });
                break;
              case 'default-value':
                r.defaultValue = ca(f);
                break;
              case 'font':
                r.font = e(f, h);
                break;
              case 'options':
                r.options = y(f);
                break;
              default:
                Object(ia.h)('unknown field child: ' + w);
            }
          f.Ya();
          return new window.Annotations.da.qa(n, r);
        }
        function n(e, f) {
          switch (e.type) {
            case 'Tx':
              try {
                if (Object(ya.c)(e.actions))
                  return new oa.a.DatePickerWidgetAnnotation(e, f);
              } catch (va) {
                Object(ia.h)(va);
              }
              return new oa.a.TextWidgetAnnotation(e, f);
            case 'Ch':
              return e.flags.get(ma.WidgetFlags.COMBO)
                ? new oa.a.ChoiceWidgetAnnotation(e, f)
                : new oa.a.ListWidgetAnnotation(e, f);
            case 'Btn':
              return e.flags.get(ma.WidgetFlags.PUSH_BUTTON)
                ? new oa.a.PushButtonWidgetAnnotation(e, f)
                : e.flags.get(ma.WidgetFlags.RADIO)
                ? new oa.a.RadioButtonWidgetAnnotation(e, f)
                : new oa.a.CheckButtonWidgetAnnotation(e, f);
            case 'Sig':
              return new oa.a.SignatureWidgetAnnotation(e, f);
            default:
              Object(ia.h)('Unrecognised field type: ' + e.type);
          }
          return null;
        }
        function w(e, f) {
          var h = { number: e.ba('number') };
          for (e.Ia(); e.advance(); ) {
            var n = e.Oa();
            switch (n) {
              case 'actions':
                h.actions = z(e, ['O', 'C'], f);
                break;
              default:
                Object(ia.h)('unrecognised page child: ' + n);
            }
          }
          e.Ya();
          return h;
        }
        function ba(f, h, y, ba) {
          var ca = [],
            ea = {};
          f.Ia();
          var da = [],
            fa = {},
            ha = [];
          Object(ja.a)(
            function () {
              if (f.advance()) {
                var y = f.Oa();
                switch (y) {
                  case 'calculation-order':
                    da = 'calculation-order' === f.Oa() ? aa(f) : [];
                    break;
                  case 'document-actions':
                    fa = z(f, ['Init', 'Open'], h);
                    break;
                  case 'pages':
                    y = [];
                    for (f.Ia(); f.advance(); ) {
                      var ba = f.Oa();
                      switch (ba) {
                        case 'page':
                          y.push(w(f, h));
                          break;
                        default:
                          Object(ia.h)('unrecognised page child: ' + ba);
                      }
                    }
                    f.Ya();
                    ha = y;
                    break;
                  case 'field':
                    ba = r(f, h(1));
                    ea[ba.name] = ba;
                    break;
                  case 'widget':
                    y = {
                      border: { style: 'Solid', width: 1 },
                      backgroundColor: [],
                      fieldName: f.ba('field'),
                      page: f.ba('page'),
                      index: f.ba('index') || 0,
                      rotation: f.ba('rotation') || 0,
                      flags: [],
                      isImporting: !0,
                    };
                    (ba = f.ba('appearance')) && (y.appearance = ba);
                    (ba = f.ba('flags')) && (y.flags = ba.split(' '));
                    for (f.Ia(); f.advance(); )
                      switch (((ba = f.Oa()), ba)) {
                        case 'rect':
                          var va = f,
                            ma = h(Number(y.page));
                          ba = ma.ka({
                            x: va.ba('x1') || 0,
                            y: va.ba('y1') || 0,
                          });
                          va = ma.ka({
                            x: va.ba('x2') || 0,
                            y: va.ba('y2') || 0,
                          });
                          ba = new na.d(ba.x, ba.y, va.x, va.y);
                          ba.normalize();
                          y.rect = {
                            x1: ba.x1,
                            y1: ba.y1,
                            x2: ba.x2,
                            y2: ba.y2,
                          };
                          break;
                        case 'border':
                          ba = f;
                          va = {
                            style: ba.ba('style') || 'Solid',
                            width: ba.ba('width') || 1,
                            color: [0, 0, 0],
                          };
                          for (ba.Ia(); ba.advance(); )
                            switch (((ma = ba.Oa()), ma)) {
                              case 'color':
                                va.color = x(ba);
                                break;
                              default:
                                Object(ia.h)(
                                  'unrecognised border child: ' + ma
                                );
                            }
                          ba.Ya();
                          y.border = va;
                          break;
                        case 'background-color':
                          y.backgroundColor = x(f);
                          break;
                        case 'actions':
                          y.actions = z(
                            f,
                            'E X D U Fo Bl PO PC PV PI'.split(' '),
                            h
                          );
                          break;
                        case 'appearances':
                          ba = f;
                          va = Object(ya.b)(y, 'appearances');
                          for (ba.Ia(); ba.advance(); )
                            if (((ma = ba.Oa()), 'appearance' === ma)) {
                              ma = ba.ba('name');
                              var ja = Object(ya.b)(va, ma);
                              ma = ba;
                              for (ma.Ia(); ma.advance(); ) {
                                var ka = ma.Oa();
                                switch (ka) {
                                  case 'Normal':
                                    Object(ya.b)(ja, 'Normal').data =
                                      ma.current.textContent;
                                    break;
                                  default:
                                    Object(ia.h)(
                                      'unexpected appearance state: ',
                                      ka
                                    );
                                }
                              }
                              ma.Ya();
                            } else
                              Object(ia.h)(
                                'unexpected appearances child: ' + ma
                              );
                          ba.Ya();
                          break;
                        case 'extra':
                          ba = f;
                          va = h;
                          ma = {};
                          for (ba.Ia(); ba.advance(); )
                            switch (((ja = ba.Oa()), ja)) {
                              case 'font':
                                ma.font = e(ba, va(1));
                                break;
                              default:
                                Object(ia.h)('unrecognised extra child: ' + ja);
                            }
                          ba.Ya();
                          ba = ma;
                          ba.font && (y.font = ba.font);
                          break;
                        case 'captions':
                          va = f;
                          ba = {};
                          (ma = va.ba('Normal')) && (ba.Normal = ma);
                          (ma = va.ba('Rollover')) && (ba.Rollover = ma);
                          (va = va.ba('Down')) && (ba.Down = va);
                          y.captions = ba;
                          break;
                        default:
                          Object(ia.h)('unrecognised widget child: ' + ba);
                      }
                    f.Ya();
                    (ba = ea[y.fieldName])
                      ? ((y = n(ba, y)), ca.push(y))
                      : Object(ia.h)(
                          'ignoring widget with no corresponding field data: ' +
                            y.fieldName
                        );
                    break;
                  default:
                    Object(ia.h)(
                      'Unknown element encountered in PDFInfo: ' + y
                    );
                }
                return !0;
              }
              return !1;
            },
            function () {
              f.Ya();
              y({
                calculationOrder: da,
                widgets: ca,
                fields: ea,
                documentActions: fa,
                pages: ha,
                custom: [],
              });
            },
            ba
          );
        }
        h.r(da);
        h.d(da, 'parse', function () {
          return ba;
        });
        var ia = h(1),
          la = h(0);
        h.n(la);
        var oa = h(93),
          na = h(2),
          ka = h(8),
          ja = h(30),
          ya = h(81),
          ma = h(22);
      },
    },
  ]);
}.call(this || window));
