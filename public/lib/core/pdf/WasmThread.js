(function () {
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.arrayIteratorImpl = function (f) {
    var b = 0;
    return function () {
      return b < f.length ? { done: !1, value: f[b++] } : { done: !0 };
    };
  };
  $jscomp.arrayIterator = function (f) {
    return { next: $jscomp.arrayIteratorImpl(f) };
  };
  $jscomp.makeIterator = function (f) {
    var b =
      'undefined' != typeof Symbol && Symbol.iterator && f[Symbol.iterator];
    return b ? b.call(f) : $jscomp.arrayIterator(f);
  };
  $jscomp.getGlobal = function (f) {
    return 'undefined' != typeof window && window === f
      ? f
      : 'undefined' != typeof global && null != global
      ? global
      : f;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (f, b, m) {
          f != Array.prototype && f != Object.prototype && (f[b] = m.value);
        };
  $jscomp.polyfill = function (f, b, m, c) {
    if (b) {
      m = $jscomp.global;
      f = f.split('.');
      for (c = 0; c < f.length - 1; c++) {
        var a = f[c];
        a in m || (m[a] = {});
        m = m[a];
      }
      f = f[f.length - 1];
      c = m[f];
      b = b(c);
      b != c &&
        null != b &&
        $jscomp.defineProperty(m, f, {
          configurable: !0,
          writable: !0,
          value: b,
        });
    }
  };
  $jscomp.FORCE_POLYFILL_PROMISE = !1;
  $jscomp.polyfill(
    'Promise',
    function (f) {
      function b() {
        this.batch_ = null;
      }
      function m(l) {
        return l instanceof a
          ? l
          : new a(function (a, b) {
              a(l);
            });
      }
      if (f && !$jscomp.FORCE_POLYFILL_PROMISE) return f;
      b.prototype.asyncExecute = function (l) {
        null == this.batch_ && ((this.batch_ = []), this.asyncExecuteBatch_());
        this.batch_.push(l);
        return this;
      };
      b.prototype.asyncExecuteBatch_ = function () {
        var l = this;
        this.asyncExecuteFunction(function () {
          l.executeBatch_();
        });
      };
      var c = $jscomp.global.setTimeout;
      b.prototype.asyncExecuteFunction = function (l) {
        c(l, 0);
      };
      b.prototype.executeBatch_ = function () {
        for (; this.batch_ && this.batch_.length; ) {
          var l = this.batch_;
          this.batch_ = [];
          for (var a = 0; a < l.length; ++a) {
            var b = l[a];
            l[a] = null;
            try {
              b();
            } catch (q) {
              this.asyncThrow_(q);
            }
          }
        }
        this.batch_ = null;
      };
      b.prototype.asyncThrow_ = function (l) {
        this.asyncExecuteFunction(function () {
          throw l;
        });
      };
      var a = function (l) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var a = this.createResolveAndReject_();
        try {
          l(a.resolve, a.reject);
        } catch (t) {
          a.reject(t);
        }
      };
      a.prototype.createResolveAndReject_ = function () {
        function a(a) {
          return function (l) {
            d || ((d = !0), a.call(b, l));
          };
        }
        var b = this,
          d = !1;
        return { resolve: a(this.resolveTo_), reject: a(this.reject_) };
      };
      a.prototype.resolveTo_ = function (l) {
        if (l === this)
          this.reject_(new TypeError('A Promise cannot resolve to itself'));
        else if (l instanceof a) this.settleSameAsPromise_(l);
        else {
          a: switch (typeof l) {
            case 'object':
              var b = null != l;
              break a;
            case 'function':
              b = !0;
              break a;
            default:
              b = !1;
          }
          b ? this.resolveToNonPromiseObj_(l) : this.fulfill_(l);
        }
      };
      a.prototype.resolveToNonPromiseObj_ = function (a) {
        var b = void 0;
        try {
          b = a.then;
        } catch (t) {
          this.reject_(t);
          return;
        }
        'function' == typeof b
          ? this.settleSameAsThenable_(b, a)
          : this.fulfill_(a);
      };
      a.prototype.reject_ = function (a) {
        this.settle_(2, a);
      };
      a.prototype.fulfill_ = function (a) {
        this.settle_(1, a);
      };
      a.prototype.settle_ = function (a, b) {
        if (0 != this.state_)
          throw Error(
            'Cannot settle(' +
              a +
              ', ' +
              b +
              '): Promise already settled in state' +
              this.state_
          );
        this.state_ = a;
        this.result_ = b;
        this.executeOnSettledCallbacks_();
      };
      a.prototype.executeOnSettledCallbacks_ = function () {
        if (null != this.onSettledCallbacks_) {
          for (var a = 0; a < this.onSettledCallbacks_.length; ++a)
            d.asyncExecute(this.onSettledCallbacks_[a]);
          this.onSettledCallbacks_ = null;
        }
      };
      var d = new b();
      a.prototype.settleSameAsPromise_ = function (a) {
        var b = this.createResolveAndReject_();
        a.callWhenSettled_(b.resolve, b.reject);
      };
      a.prototype.settleSameAsThenable_ = function (a, b) {
        var d = this.createResolveAndReject_();
        try {
          a.call(b, d.resolve, d.reject);
        } catch (q) {
          d.reject(q);
        }
      };
      a.prototype.then = function (b, d) {
        function c(a, b) {
          return 'function' == typeof a
            ? function (b) {
                try {
                  l(a(b));
                } catch (u) {
                  f(u);
                }
              }
            : b;
        }
        var l,
          f,
          m = new a(function (a, b) {
            l = a;
            f = b;
          });
        this.callWhenSettled_(c(b, l), c(d, f));
        return m;
      };
      a.prototype.catch = function (a) {
        return this.then(void 0, a);
      };
      a.prototype.callWhenSettled_ = function (a, b) {
        function c() {
          switch (l.state_) {
            case 1:
              a(l.result_);
              break;
            case 2:
              b(l.result_);
              break;
            default:
              throw Error('Unexpected state: ' + l.state_);
          }
        }
        var l = this;
        null == this.onSettledCallbacks_
          ? d.asyncExecute(c)
          : this.onSettledCallbacks_.push(c);
      };
      a.resolve = m;
      a.reject = function (b) {
        return new a(function (a, d) {
          d(b);
        });
      };
      a.race = function (b) {
        return new a(function (a, d) {
          for (
            var c = $jscomp.makeIterator(b), l = c.next();
            !l.done;
            l = c.next()
          )
            m(l.value).callWhenSettled_(a, d);
        });
      };
      a.all = function (b) {
        var d = $jscomp.makeIterator(b),
          c = d.next();
        return c.done
          ? m([])
          : new a(function (a, b) {
              function l(b) {
                return function (d) {
                  f[b] = d;
                  w--;
                  0 == w && a(f);
                };
              }
              var f = [],
                w = 0;
              do
                f.push(void 0),
                  w++,
                  m(c.value).callWhenSettled_(l(f.length - 1), b),
                  (c = d.next());
              while (!c.done);
            });
      };
      return a;
    },
    'es6',
    'es3'
  );
  (function (f) {
    function b(c) {
      if (m[c]) return m[c].exports;
      var a = (m[c] = { i: c, l: !1, exports: {} });
      f[c].call(a.exports, a, a.exports, b);
      a.l = !0;
      return a.exports;
    }
    var m = {};
    b.m = f;
    b.c = m;
    b.d = function (c, a, d) {
      b.o(c, a) || Object.defineProperty(c, a, { enumerable: !0, get: d });
    };
    b.r = function (b) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(b, Symbol.toStringTag, { value: 'Module' });
      Object.defineProperty(b, '__esModule', { value: !0 });
    };
    b.t = function (c, a) {
      a & 1 && (c = b(c));
      if (a & 8 || (a & 4 && 'object' === typeof c && c && c.__esModule))
        return c;
      var d = Object.create(null);
      b.r(d);
      Object.defineProperty(d, 'default', { enumerable: !0, value: c });
      if (a & 2 && 'string' != typeof c)
        for (var l in c)
          b.d(
            d,
            l,
            function (a) {
              return c[a];
            }.bind(null, l)
          );
      return d;
    };
    b.n = function (c) {
      var a =
        c && c.__esModule
          ? function () {
              return c['default'];
            }
          : function () {
              return c;
            };
      b.d(a, 'a', a);
      return a;
    };
    b.o = function (b, a) {
      return Object.prototype.hasOwnProperty.call(b, a);
    };
    b.p = '/core';
    return b((b.s = 1));
  })([
    function (f, b, m) {
      (function (c) {
        m.d(b, 'b', function () {
          return E;
        });
        m.d(b, 'a', function () {
          return r;
        });
        m.d(b, 'c', function () {
          return C;
        });
        m.d(b, 'd', function () {
          return D;
        });
        var a = m(4);
        m.n(a);
        var d = window,
          l = (function () {
            return function (a, h) {
              this.fs_q = this.fs_read_counter = 0;
              this.needCallback = !1;
              this.fs_read_total = a;
              this.fs_q = h;
            };
          })();
        d.AsyncFSHack = { readingAsyncFS: 0, readingCounter: 0, readCalls: {} };
        var f = d.Module,
          t = 0,
          q = {},
          x = function (a) {
            d.AsyncFSHack.readingAsyncFS = 1;
            a in d.AsyncFSHack.readCalls ||
              (d.AsyncFSHack.readCalls[a] = new l(
                d.AsyncFSHack.read_total,
                d.AsyncFSHack.q
              ));
          },
          y = function (a) {
            var h = d.AsyncFSHack.readCalls[a];
            ++h.fs_read_counter;
            h.fs_read_counter >= h.fs_read_total &&
              (h.needCallback
                ? f._finish_do_call_operation(h.fs_q)
                : (d.AsyncFSHack.readingAsyncFS = 0),
              delete d.AsyncFSHack.readCalls[a]);
          },
          B = function (a, h, b, g, n, e) {
            this.lruList = [];
            this.chunkMap = {};
            this.chunkReader = {};
            this.chunkMap[h] = g;
            this.length = h;
            this.cacheDataSize = b;
            this.url = a;
            this.customHeaders = n;
            this.withCredentials = e;
            this.chunkSize = 1048576;
          };
        B.prototype = {
          lruUpdate: function (a) {
            var h = this.lruList.lastIndexOf(a);
            0 <= h && this.lruList.splice(h, 1);
            this.lruList.push(a);
          },
          downloadChunk: function (a, h) {
            var b = !1;
            a in this.chunkReader || ((this.chunkReader[a] = []), (b = !0));
            h && this.chunkReader[a].push(h);
            if (b) {
              h = Math.min(a + this.chunkSize, this.length) - 1;
              var g = new XMLHttpRequest();
              g.open('GET', this.url, !0);
              g.responseType = 'arraybuffer';
              g.setRequestHeader('Range', ['bytes=', a, '-', h].join(''));
              this.withCredentials &&
                (g.withCredentials = this.withCredentials);
              if (this.customHeaders)
                for (var n in this.customHeaders)
                  g.setRequestHeader(n, this.customHeaders[n]);
              g.send();
              var e = this;
              g.onload = function () {
                if (200 === g.status || 206 === g.status) {
                  var b = new Int8Array(g.response);
                  e.writeChunk(b, a);
                } else
                  window.parent.parentWarn('Failed to load data from' + e.url),
                    (b = new Int8Array(0));
                for (var h = e.chunkReader[a], n = 0; n < h.length; n++)
                  h[n](b);
                delete e.chunkReader[a];
              };
            }
          },
          hadChunk: function (a) {
            return a in this.chunkMap;
          },
          hasChunk: function (a) {
            return this.chunkMap[a];
          },
          getCacheData: function () {
            return this.chunkMap[this.length];
          },
          updateCache: function (a) {
            for (var b = 0; b < a.length; b++) {
              var k = a[b];
              this.hadChunk(k) &&
                (this.hasChunk(k) ? this.lruUpdate(k) : this.downloadChunk(k));
            }
          },
          wrapChunkRetrieval: function (a, b, k) {
            this.downloadChunk(a, function (a) {
              k(a, b);
            });
          },
          downloadChunks: function (a, b) {
            for (
              var h = a.length,
                g = Array(h),
                n = 0,
                e = function (a, e) {
                  g[e] = a;
                  ++n;
                  n === h && b(g);
                },
                d = 0;
              d < h;
              ++d
            )
              this.wrapChunkRetrieval(a[d][0], d, e);
          },
          readFromCache: function (a, b, k) {
            var g = [],
              n = 0,
              e = Math.floor(b / this.chunkSize) * this.chunkSize,
              h = b % this.chunkSize;
            b = this.chunkSize - h;
            b = b > k ? k : b;
            this.chunkMap[e]
              ? ((h = this.chunkMap[e].subarray(h, h + b)),
                a.set(h),
                this.lruUpdate(e))
              : this.hadChunk(e)
              ? g.push([e, h, b, n])
              : ((h = new Int8Array(b)), a.set(h));
            for (k -= b; 0 < k; )
              (n += b),
                (e += this.chunkSize),
                (b = this.chunkSize > k ? k : this.chunkSize),
                this.chunkMap[e]
                  ? ((h = this.chunkMap[e].subarray(0, b)),
                    a.set(h, n),
                    this.lruUpdate(e))
                  : this.hadChunk(e)
                  ? g.push([e, 0, b, n])
                  : ((h = new Int8Array(b)), a.set(h, n)),
                (k -= b);
            return g;
          },
          writeChunk: function (a, b, k) {
            k = k || 0;
            var g = this.chunkMap[b],
              h = a.length,
              e = this.lruList.length >= f.chunkMax && !g;
            h !== this.chunkSize || a.buffer.byteLength !== h
              ? (e
                  ? ((g = this.lruList.shift()),
                    (e = this.chunkMap[g]),
                    e.length < this.chunkSize &&
                      (e = new Int8Array(this.chunkSize)),
                    (this.chunkMap[g] = null))
                  : (e = g ? this.chunkMap[b] : new Int8Array(this.chunkSize)),
                e.subarray(k, k + h).set(a),
                (a = e))
              : e && ((g = this.lruList.shift()), (this.chunkMap[g] = null));
            this.lruUpdate(b);
            this.chunkMap[b] = a;
          },
        };
        var z = function (a) {
          this.chunkStorage = a;
          this.position = 0;
          this.length = this.chunkStorage.length;
        };
        z.prototype = {
          read: function (a, b, k, g) {
            var h = g + k <= this.length,
              e = h ? k : this.length - g,
              f = d.AsyncFSHack.readingCounter.toString();
            if (0 < e) {
              x(f);
              var c = a.subarray(b, b + e);
              var l = this.chunkStorage.readFromCache(c, g, e);
              l.length
                ? ((d.AsyncFSHack.readCalls[f].needCallback = !0),
                  this.chunkStorage.downloadChunks(l, function (a) {
                    for (var b = 0; b < a.length; ++b) {
                      var g = l[b],
                        h = a[b].subarray(g[1], g[1] + g[2]);
                      c.set(h, g[3]);
                    }
                    y(f);
                  }))
                : h && y(f);
              g += e;
            } else e = 0;
            if (!h) {
              x(f);
              b += e;
              if ((k -= e)) {
                h = this.chunkStorage.getCacheData();
                k > h.length && (k = h.length);
                var A = g - this.length;
                k -= A;
                a = a.subarray(b, b + k);
                b = h.subarray(A, A + k);
                a.set(b);
              }
              (l && l.length) || y(f);
              g += k;
              e += k;
            }
            this.position = g;
            return e;
          },
          write: function (a, b, k, g) {
            var h = g + k <= this.length,
              e = g + k <= this.length ? k : this.length - g;
            if (0 < e) {
              var d = a.subarray(b, b + e),
                f = g % 1048576;
              this.chunkStorage.writeChunk(d, g - f, f);
              g += e;
            } else e = 0;
            if (!h) {
              d = b + e;
              if ((k -= e))
                (b = this.chunkStorage.getCacheData()),
                  k > b.length && (k = b.length),
                  (h = g - this.length),
                  (k -= h),
                  (d = a.subarray(d, d + k)),
                  b.subarray(h, h + k).set(d);
              g += k;
              e += k;
            }
            this.position = g;
            return e;
          },
          seek: function (a) {
            this.position = a;
          },
          close: function () {
            this.chunkStorage = null;
          },
          getPos: function () {
            return this.position;
          },
          getTotalSize: function () {
            return this.length + this.chunkStorage.cacheDataSize;
          },
        };
        var v = function (a) {
          this.file = a;
          this.filePosition = 0;
          this.fileLength = a.size;
          this.readerPool = [];
        };
        v.prototype = {
          readFromFile: function (a, b, k) {
            var g = this.readerPool.length
              ? this.readerPool.pop()
              : new FileReader();
            var h = this;
            g.onload = function () {
              var a = new Int8Array(g.result);
              h.readerPool.push(g);
              k(a);
            };
            g.readAsArrayBuffer(this.file.slice(b, b + a));
          },
          read: function (a, b, k, g) {
            k = g + k <= this.fileLength ? k : this.fileLength - g;
            if (0 < k) {
              var h = d.AsyncFSHack.readingCounter.toString();
              x(h);
              var e = a.subarray(b, b + k);
              d.AsyncFSHack.readCalls[h].needCallback = !0;
              this.readFromFile(k, g, function (a) {
                e.set(a);
                y(h);
              });
              this.filePosition = g + k;
            }
            return k;
          },
          seek: function (a) {
            this.filePosition = a;
          },
          close: function () {
            this.reader = this.file = null;
          },
          getPos: function () {
            return this.filePosition;
          },
          getTotalSize: function () {
            return this.fileLength;
          },
        };
        var u = {
            open: function (a) {
              var b = a.path.slice(1);
              a.provider = f.docs[b].chunkStorage
                ? new z(f.docs[b].chunkStorage)
                : new v(f.docs[b]);
            },
            close: function (a) {
              a.provider.close();
            },
            read: function (a, b, k, g, d) {
              return a.provider.read(b, k, g, d);
            },
            llseek: function (a, b, k) {
              a = a.provider;
              1 === k
                ? (b += a.getPos())
                : 2 === k && (b = a.getTotalSize() + b);
              if (0 > b) throw new d.FS.ErrnoError(c.ERRNO_CODES.EINVAL);
              a.seek(b);
              return b;
            },
            write: function (a, b, k, g, d) {
              return g ? a.provider.write(b, k, g, d) : 0;
            },
          },
          p = function (a) {
            if (!q[a]) {
              var b = d.FS.makedev(3, 5);
              d.FS.registerDevice(b, u);
              d.FS.mkdev(a, 511, b);
              q[a] = !0;
            }
          },
          E = function (a, b, d, g) {
            var k = (++t).toString();
            p(k);
            var e = Math.ceil((b + 1048576 - 1) / 1048576 / 8),
              h = new Int8Array(new ArrayBuffer(e));
            a = new B(a, b, e, h, d, g);
            f.docs[k] = { chunkStorage: a };
            return k;
          },
          r = function (a) {
            var b = (++t).toString();
            p(b);
            f.docs[b] = a;
            return b;
          },
          C = function (a) {
            d.FS.unlink(a);
            f.docs[a] && delete f.docs[a];
          },
          D = function (a) {
            var b = Object.prototype.toString.call(a);
            return (
              'object' === typeof a &&
              null !== a &&
              ('[object File]' === b || '[object Blob]' === b)
            );
          };
      }.call(this, m(3)));
    },
    function (f, b, m) {
      f.exports = m(2);
    },
    function (f, b, m) {
      function c(a) {
        '@babel/helpers - typeof';
        c =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (a) {
                return typeof a;
              }
            : function (a) {
                return a &&
                  'function' === typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? 'symbol'
                  : typeof a;
              };
        return c(a);
      }
      m.r(b);
      var a = m(0),
        d = window,
        l;
      d.Module.onRuntimeInitialized = function () {
        w = !0;
        q || (r.handleMessage({ action: 'workerLoaded', data: {} }), (q = !0));
        r.sendTestResponse();
        d.PThread.receiveObjectTransfer = function () {
          var a = d.Module.GetNextResponseMessage();
          d.getThreadedWasmWorker().handleMessage(a);
          d.Module.PopNextResponseMessage();
        };
      };
      d.Module.locateFile = function (a) {
        return l + a;
      };
      d.Module.INITIAL_MEMORY = 100663296;
      var w = !1,
        t = !1,
        q = !1,
        x = 1,
        y = function g(a) {
          if ('object' === c(a) && null !== a)
            if ('undefined' !== typeof a.byteLength) {
              var b = 'mainThreadArrayBuffer'.concat(x);
              x++;
              a = new Uint8Array(a);
              d.FS.writeFile(b, a);
              a = { handle: b, isArrayBufferRef: !0 };
            } else for (b in a) a.hasOwnProperty(b) && (a[b] = g(a[b]));
          return a;
        },
        B = function n(a) {
          if ('object' === c(a) && null !== a)
            if (a.isArrayBufferRef) {
              var b = d.FS.readFile(a.handle, { encoding: 'binary' });
              d.FS.unlink(a.handle);
              a = b.buffer;
            } else if (a.constructor === Uint8Array)
              a = new Uint8Array(a).buffer;
            else for (b in a) a.hasOwnProperty(b) && (a[b] = n(a[b]));
          return a;
        },
        z = 0,
        v = {},
        u = {},
        p = {},
        E = function (b) {
          var g = b.action,
            e = b.data,
            f = b.callbackId;
          if ('NewDoc' === g && e) {
            var c = e.value;
            'url' === e.type
              ? ((c = Object(a.b)(
                  c.url,
                  c.size,
                  c.customHeaders,
                  c.withCredentials
                )),
                (u[f] = c),
                (e.value.docDevId = c))
              : Object(a.d)(c) &&
                ((c = Object(a.a)(c)), (u[f] = c), (e.value = c));
          } else if (
            ('SaveDoc' !== g && 'SaveDocFromFixedElements' !== g) ||
            !e
          )
            'GetCanvas' === g &&
              e &&
              ((f = e.docId),
              f in p &&
                ((c = p[f]),
                c in d.Module.docs &&
                  ((c = d.Module.docs[c]),
                  'chunkStorage' in c &&
                    ((f = d.Module.GetRequiredChunkOffsetArray(
                      f,
                      e.pageIndex + 1
                    )),
                    f.length && c.chunkStorage.updateCache(f)))));
          else {
            c = e.docId;
            var l = e.finishedWithDocument,
              m = 'docFilePath'.concat(z);
            v[f] = { filePath: m, docId: c, finishedWithDocument: l };
            z++;
            e.filePath = m;
          }
          d.Module.HandleMessage(y(b));
          'DeleteDocument' === g &&
            e &&
            ((b = e.docId), b in p && (Object(a.c)(p[b]), delete p[b]));
        },
        r;
      d.MainThreadLabel = !0;
      d.getThreadedWasmWorker = function () {
        return r;
      };
      var C = function (a, b) {
        window.parent.loadThreadedBackend(
          a,
          { 'Wasm.wasm': 1e7, 'Wasm.js': 2e5, 'Wasm.js.mem': b ? 2e6 : 6e5 },
          window
        );
        this.eventListeners = [];
      };
      C.prototype = {
        addEventListener: function (a, b) {
          if ('message' === a) this.eventListeners.push(b);
          else
            throw Error(
              'event type '.concat(a, ' is not supported by WasmWorker.')
            );
        },
        removeEventListener: function (a, b) {
          'message' === a &&
            (this.eventListeners = this.eventListeners.filter(function (a) {
              return a !== b;
            }));
        },
        sendTestResponse: function () {
          w &&
            t &&
            (this.handleMessage({
              action: 'test',
              data: { supportTypedArray: !0, supportTransfers: !0 },
            }),
            (this.postMessage = E));
        },
        postMessage: function (a) {
          if ('test' === a.action) (t = !0), this.sendTestResponse();
          else throw Error('Need to do handshake first!');
        },
        handleMessage: function (b) {
          var c = b.callbackId,
            e = b.data;
          if (c in u)
            e && e.docId ? (p[e.docId] = u[c]) : Object(a.c)(u[c]), delete u[c];
          else if (c in v) {
            if (!b.hasOwnProperty('error')) {
              var g = v[c].filePath,
                f = d.FS.readFile(g, { encoding: 'binary' });
              e.fileData = f.buffer;
              e = v[c].docId;
              e in p && (Object(a.c)(p[e]), delete p[e]);
              e && !v[c].finishedWithDocument ? (p[e] = g) : d.FS.unlink(g);
            }
            delete v[c];
          }
          b = B(b);
          window.parent.postMessage(b);
        },
        reset: function () {
          r = null;
          q = t = w = !1;
        },
      };
      var D = (function () {
          var a = {},
            b = new Promise(function (b, c) {
              a.resolve = b;
              a.reject = c;
            });
          a.promise = b;
          return a;
        })(),
        A = function e(a) {
          'object' === c(a.data) &&
            'action' in a.data &&
            'workerLoaded' === a.data.action &&
            (D.resolve(r), r.removeEventListener('message', e));
        };
      window.addEventListener('message', function (a) {
        a = a.data;
        if ('loadWasmWorker' === a.action) {
          var b = a.isFull;
          l = b ? 'full/' : 'lean/';
          r = new C(''.concat(a.wasmSource, 'PDFNetThreaded'), b);
          q || r.addEventListener('message', A);
        } else r.postMessage(a);
      });
      d.getWasmWorkerPromise = function () {
        return D.promise;
      };
    },
    function (f, b) {
      b = (function () {
        return this;
      })();
      try {
        b = b || new Function('return this')();
      } catch (m) {
        'object' === typeof window && (b = window);
      }
      f.exports = b;
    },
    function (f, b) {
      window.Module = { chunkMax: 100, docs: {} };
    },
  ]);
}.call(this || window));
