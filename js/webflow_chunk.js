(self.webpackChunk = self.webpackChunk || []).push([
  ["216"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new V.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !K.test(e)
              ? (a = parseInt(e, 10))
              : K.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          X.debug && window && window.console.warn(e);
        }
        var c,
          d,
          s,
          l = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(c, d) {
              function s() {
                var e = new l();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function l() {}
              d === n && ((d = c), (c = Object)), (s.Bare = l);
              var u,
                f = (o[e] = c[e]),
                g = (l[e] = s[e] = new o());
              return (
                (g.constructor = s),
                (s.mixin = function (t) {
                  return (l[e] = s[e] = r(s, t)[e]), s;
                }),
                (s.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(s, g, f, s, c)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (g[n] = u[n]);
                  return i(g.init) || (g.init = c), s;
                }),
                s.open(d)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          g = window,
          E = "bkwld-tram",
          p = /[\-\.0-9]/g,
          I = /[A-Z]/,
          T = "number",
          b = /^(rgb|#)/,
          y = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          _ = /(deg|rad|turn)$/,
          O = "unitless",
          v = /(all|none) 0s ease 0s/,
          L = /^(width|height)$/,
          S = document.createElement("a"),
          h = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          C = function (e) {
            if (e in S.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < h.length; t++)
              if ((n = h[t] + a) in S.style) return { dom: n, css: R[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: C("transform"),
            transition: C("transition"),
            backface: C("backface-visibility"),
            timing: C("transition-timing-function"),
          });
        if (N.transition) {
          var A = N.timing.dom;
          if (((S.style[A] = u["ease-in-back"][0]), !S.style[A]))
            for (var P in f) u[P][0] = f[P];
        }
        var x = (t.frame =
            (c =
              g.requestAnimationFrame ||
              g.webkitRequestAnimationFrame ||
              g.mozRequestAnimationFrame ||
              g.oRequestAnimationFrame ||
              g.msRequestAnimationFrame) && N.bind
              ? c.bind(g)
              : function (e) {
                  g.setTimeout(e, 16);
                }),
          G = (t.now =
            (s =
              (d = g.performance) &&
              (d.now || d.webkitNow || d.msNow || d.mozNow)) && N.bind
              ? s.bind(d)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          M = l(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = W[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new o.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new Y({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      d.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    l.call(this),
                    f > 0 &&
                      ((this.timer = new Y({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var g = this,
                    E = !1,
                    p = {};
                  x(function () {
                    u.call(g, e, function (e) {
                      e.active && ((E = !0), (p[e.name] = e.nextStyle));
                    }),
                      E && g.$el.css(p);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                l.call(this);
            }
            function d() {
              c.call(this), (this.el.style.display = "none");
            }
            function s() {
              this.el.offsetHeight;
            }
            function l() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[N.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                c,
                d = t !== f,
                s = {};
              for (i in e)
                (r = e[i]),
                  i in Q
                    ? (s.transform || (s.transform = {}), (s.transform[i] = r))
                    : (I.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in W ? (s[i] = r) : (c || (c = {}), (c[i] = r)));
              for (i in s) {
                if (((r = s[i]), !(o = this.props[i]))) {
                  if (!d) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && c && a.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function g(e, t) {
              e.set(t);
            }
            function p(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? b.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function b(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                X.keepInherited && !X.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !v.test(n) && (this.upstream = n);
              }
              N.backface &&
                X.hideBackface &&
                B(this.el, N.backface.css, "hidden");
            }),
              T("add", n),
              T("start", a),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new Y({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", c),
              T("set", function (e) {
                c.call(this, e), u.call(this, e, g, p);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", d),
              T("redraw", s),
              T("destroy", function () {
                c.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          V = l(M, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new M.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          U = l(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                r,
                c,
                d = t[0];
              n[2] && (d = n[2]),
                j[d] && (d = j[d]),
                (this.name = d),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (c = "ease"),
                  void 0 !== r && (c = r),
                  i in u ? i : c)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = L.test(this.name)),
                (this.unit = a.unit || this.unit || X.defaultUnit),
                (this.angle = a.angle || this.angle || X.defaultAngle),
                X.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                B(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  B(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case T:
                    if (o) return e;
                    if (c && "" === e.replace(p, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case b:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case y:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case _:
                    if (o) return e + this.angle;
                    if (c && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case O:
                    if (o || (c && m.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          w = l(U, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), b));
            };
          }),
          F = l(U, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          D = l(U, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = Q[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    X.perspective &&
                    ((this.current.perspective = X.perspective),
                    B(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  B(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                B(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          k = l(function (t) {
            function o() {
              var e,
                t,
                n,
                a = d.length;
              if (a)
                for (x(o), t = G(), e = a; e--; ) (n = d[e]) && n.render(t);
            }
            var c = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || c.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = G()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = G()),
                  (this.active = !0),
                  1 === d.push(this) && x(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, d)) >= 0 &&
                    ((t = d.slice(n + 1)),
                    (d.length = n),
                    t.length && (d = d.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(p, "");
                  a !== e.replace(p, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var d = [],
              s = 1e3;
          }),
          Y = l(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          H = l(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          X = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (X.fallback = !0);
          X.agentTests.push("(" + e + ")");
          var t = RegExp(X.agentTests.join("|"), "i");
          X.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new Y({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var B = e.style,
          z = e.css,
          j = { transform: N.transform && N.transform.css },
          W = {
            color: [w, b],
            background: [w, b, "background-color"],
            "outline-color": [w, b],
            "border-color": [w, b],
            "border-top-color": [w, b],
            "border-right-color": [w, b],
            "border-bottom-color": [w, b],
            "border-left-color": [w, b],
            "border-width": [U, y],
            "border-top-width": [U, y],
            "border-right-width": [U, y],
            "border-bottom-width": [U, y],
            "border-left-width": [U, y],
            "border-spacing": [U, y],
            "letter-spacing": [U, y],
            margin: [U, y],
            "margin-top": [U, y],
            "margin-right": [U, y],
            "margin-bottom": [U, y],
            "margin-left": [U, y],
            padding: [U, y],
            "padding-top": [U, y],
            "padding-right": [U, y],
            "padding-bottom": [U, y],
            "padding-left": [U, y],
            "outline-width": [U, y],
            opacity: [U, T],
            top: [U, m],
            right: [U, m],
            bottom: [U, m],
            left: [U, m],
            "font-size": [U, m],
            "text-indent": [U, m],
            "word-spacing": [U, m],
            width: [U, m],
            "min-width": [U, m],
            "max-width": [U, m],
            height: [U, m],
            "min-height": [U, m],
            "max-height": [U, m],
            "line-height": [U, O],
            "scroll-top": [F, T, "scrollTop"],
            "scroll-left": [F, T, "scrollLeft"],
          },
          Q = {};
        N.transform &&
          ((W.transform = [D]),
          (Q = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [_],
            rotateX: [_],
            rotateY: [_],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [_],
            skewX: [_],
            skewY: [_],
          })),
          N.transform &&
            N.backface &&
            ((Q.z = [m, "translateZ"]),
            (Q.rotateZ = [_]),
            (Q.scaleZ = [T]),
            (Q.perspective = [y]));
        var $ = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        c,
        d,
        s,
        l,
        u,
        f,
        g,
        E,
        p,
        I,
        T,
        b,
        y,
        m,
        _,
        O,
        v = window.$,
        L = n(5487) && v.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (c = Function.prototype),
        o.push,
        (d = o.slice),
        o.concat,
        r.toString,
        (s = r.hasOwnProperty),
        (l = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (g = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (p = Object.keys),
        c.bind,
        (I =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (l && e.forEach === l) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                  if (t.call(n, e[c[o]], c[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (I(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              T(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (I(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (T =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : g && e.some === g
                ? e.some(t, n)
                : (I(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = d.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              L.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            c,
            d,
            s = function () {
              var l = a.now() - c;
              l < t
                ? (i = setTimeout(s, t - l))
                : ((i = null), n || ((d = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (c = a.now());
            var l = n && !i;
            return (
              i || (i = setTimeout(s, t)),
              l && ((d = e.apply(r, o)), (r = o = null)),
              d
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (p) return p(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return s.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (b = /(.)^/),
        (y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (_ = function (e) {
          return "\\" + y[e];
        }),
        (O = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || b)
                  .source,
                (t.interpolate || b).source,
                (t.evaluate || b).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            c = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (c += e.slice(r, o).replace(m, _)),
              (r = o + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n");
          var d = t.variable;
          if (d) {
            if (!O.test(d))
              throw Error("variable is not a bare identifier: " + d);
          } else (c = "with(obj||{}){\n" + c + "}\n"), (d = "obj");
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var s = function (e) {
            return i.call(this, e, a);
          };
          return (s.source = "function(" + d + "){\n" + c + "}"), s;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            c = window.location,
            d = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function l() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = r.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || r.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                a,
                r,
                f = o.attr("data-wf-status"),
                g = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(g) && c.hostname !== g && (f = !0),
                f &&
                  !d &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (a = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (r = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(a, r),
                    n[0])),
                  u(),
                  setTimeout(u, 500),
                  e(i).off(s, l).on(s, l));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            c = document.location,
            d = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(d, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: g("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : g("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            l = !1;
          try {
            l =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(c.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function g(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            l
              ? s()
              : c.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                  /\?edit$/.test(c.href)) &&
                s()
              : o.on(d, u).triggerHandler(d),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function d() {
                      document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s);
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), d());
                        },
                        !0
                      ),
                      d(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, c;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        c = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        c = [],
        d = window.Webflow || [],
        s = window.jQuery,
        l = s(window),
        u = s(document),
        f = s.isFunction,
        g = (o._ = n(5756)),
        E = (o.tram = n(5487) && s.tram),
        p = !1,
        I = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && l.on("__wf_design", e.design),
          f(e.preview) && l.on("__wf_preview", e.preview)),
          f(e.destroy) && l.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (p) return e.ready();
              g.contains(c, e.ready) || c.push(e.ready);
            })(e);
      }
      function b(e) {
        var t;
        f(e.design) && l.off("__wf_design", e.design),
          f(e.preview) && l.off("__wf_preview", e.preview),
          f(e.destroy) && l.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (c = g.filter(c, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && b(r[e]);
          var a = (r[e] = t(s, g, n) || {});
          return T(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (p) {
            f(e) && e();
            return;
          }
          d.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var y = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        _ = (o.env.chrome =
          /chrome/.test(y) &&
          /Google/.test(navigator.vendor) &&
          parseInt(y.match(/chrome\/(\d+)\./)[1], 10)),
        O = (o.env.ios = /(ipod|iphone|ipad)/.test(y));
      (o.env.safari = /safari/.test(y) && !_ && !O),
        m &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === a || s.contains(e, a);
            }
          : function () {
              return !0;
            });
      var v = "resize.webflow orientationchange.webflow load.webflow",
        L = "scroll.webflow " + v;
      function S(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = g.throttle(function (e) {
            g.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (g.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = g.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function h(e) {
        f(e) && e();
      }
      function R() {
        i && (i.reject(), l.off("load", i.resolve)),
          (i = new s.Deferred()),
          l.on("load", i.resolve);
      }
      (o.resize = S(l, v)),
        (o.scroll = S(l, L)),
        (o.redraw = S()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (p = !0),
            I ? ((I = !1), g.each(r, T)) : g.each(c, h),
            g.each(d, h),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (I = !0),
            l.triggerHandler("__wf_destroy"),
            null != e.domready && (p = e.domready),
            g.each(r, b),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (c = []),
            (d = []),
            "pending" === i.state() && R();
        }),
        s(o.ready),
        R(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            c = e(window),
            d = a.env(),
            s = window.location,
            l = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            g = /\/$/;
          function E() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  c = 0.5 * n,
                  d = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                t.active !== d && ((t.active = d), p(a, u, d));
              }
            });
          }
          function p(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  (n = d && a.env("design")),
                    (o = a.env("slug") || s.pathname || ""),
                    a.scroll.off(E),
                    (i = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((l.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            l.hash.length > 1 &&
                            l.host + l.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                            var c = e(l.hash);
                            c.length && i.push({ link: r, sec: c, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            p(
                              r,
                              u,
                              (!d && l.href === s.href) ||
                                a === o ||
                                (f.test(a) && g.test(o))
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(E), E());
                }),
            r
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            c = e(document.body),
            d =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = a.env("editor") ? ".w-editor-body" : "body",
            l =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            g = document.createElement("style");
          g.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let p =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function I(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var s =
                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== s) {
                var u,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = s),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(l),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              c = t.outerHeight();
                            c < r && (i -= Math.round((r - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              p.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          s = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              c,
                              l,
                              f = Date.now() - s;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (c = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((l = o / c) < 0.5
                                      ? 4 * l * l * l
                                      : (l - 1) * (2 * l - 2) * (2 * l - 2) +
                                        1))
                            ),
                              f <= r ? d(u) : "function" == typeof n && n();
                          };
                        d(u);
                      }
                    })(f, function () {
                      I(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        I(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, T),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(g, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function d(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function s(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  d,
                  s,
                  l,
                  f = t.touches,
                  g = f ? f[0].clientX : t.clientX,
                  E = g - i;
                (i = g),
                  Math.abs(E) > c &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (d = t),
                    (s = { direction: E > 0 ? "right" : "left" }),
                    (l = e.Event(a, { originalEvent: d })),
                    e(d.target).trigger(l, s),
                    u());
              }
            }
            function l(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (r = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", d, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", l, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", d, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", l, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", d, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", l, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", d, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", l, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return V;
        },
        elementStateChanged: function () {
          return B;
        },
        eventListenerAdded: function () {
          return U;
        },
        eventStateChanged: function () {
          return F;
        },
        instanceAdded: function () {
          return Y;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return H;
        },
        mediaQueriesDefined: function () {
          return W;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return G;
        },
        previewRequested: function () {
          return x;
        },
        rawDataImported: function () {
          return C;
        },
        sessionInitialized: function () {
          return N;
        },
        sessionStarted: function () {
          return A;
        },
        sessionStopped: function () {
          return P;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return w;
        },
        viewportWidthChanged: function () {
          return j;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: l,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: g,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: p,
          IX2_TEST_FRAME_RENDERED: I,
          IX2_EVENT_STATE_CHANGED: T,
          IX2_ANIMATION_FRAME_CHANGED: b,
          IX2_PARAMETER_CHANGED: y,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: _,
          IX2_INSTANCE_REMOVED: O,
          IX2_ELEMENT_STATE_CHANGED: v,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: L,
          IX2_VIEWPORT_WIDTH_CHANGED: S,
          IX2_MEDIA_QUERIES_DEFINED: h,
        } = o.IX2EngineActionTypes,
        { reifyState: R } = r.IX2VanillaUtils,
        C = (e) => ({ type: c, payload: { ...R(e) } }),
        N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: d,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        A = () => ({ type: s }),
        P = () => ({ type: l }),
        x = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        G = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: c,
          verbose: d,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: d,
            rawData: s,
          },
        }),
        M = (e) => ({ type: g, payload: { actionListId: e } }),
        V = () => ({ type: E }),
        U = (e, t) => ({ type: p, payload: { target: e, listenerParams: t } }),
        w = (e = 1) => ({ type: I, payload: { step: e } }),
        F = (e, t) => ({ type: T, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: b, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: y, payload: { key: e, value: t } }),
        Y = (e) => ({ type: m, payload: { ...e } }),
        H = (e, t) => ({ type: _, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: O, payload: { instanceId: e } }),
        B = (e, t, n, a) => ({
          type: v,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: L,
          payload: { actionListId: e, isPlaying: t },
        }),
        j = ({ width: e, mediaQueries: t }) => ({
          type: S,
          payload: { width: e, mediaQueries: t },
        }),
        W = () => ({ type: h });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return g;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        c = (a = n(7243)) && a.__esModule ? a : { default: a },
        d = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(c.default);
      function f(e) {
        e() && (0, d.observeRequests)(u);
      }
      function g(e) {
        E(), (0, d.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, d.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return y;
        },
        getChildElements: function () {
          return _;
        },
        getClosestElement: function () {
          return v;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return I;
        },
        getRefType: function () {
          return L;
        },
        getSiblingElements: function () {
          return O;
        },
        getStyle: function () {
          return g;
        },
        getValidDocument: function () {
          return T;
        },
        isSiblingNode: function () {
          return m;
        },
        matchSelector: function () {
          return p;
        },
        queryDocument: function () {
          return b;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: c } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: d,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: l,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function g(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function p(e) {
        return (t) => t[c](e);
      }
      function I({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(d)) {
            let n = e.split(d),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function T(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function b(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function y(e, t) {
        return e.contains(t);
      }
      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function _(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function O(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let v = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function L(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : l
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return Z;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return eg;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = b(n(9777)),
        r = b(n(4738)),
        c = b(n(4659)),
        d = b(n(3452)),
        s = b(n(6633)),
        l = b(n(3729)),
        u = b(n(2397)),
        f = b(n(5082)),
        g = n(7087),
        E = n(9468),
        p = n(3946),
        I = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = y(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        T = b(n(8955));
      function b(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (y = function (e) {
          return e ? n : t;
        })(e);
      }
      let m = Object.keys(g.QuickEffectIds),
        _ = (e) => m.includes(e),
        {
          COLON_DELIMITER: O,
          BOUNDARY_SELECTOR: v,
          HTML_ELEMENT: L,
          RENDER_GENERAL: S,
          W_MOD_IX: h,
        } = g.IX2EngineConstants,
        {
          getAffectedElements: R,
          getElementId: C,
          getDestinationValues: N,
          observeStore: A,
          getInstanceId: P,
          renderHTMLElement: x,
          clearAllStyles: G,
          getMaxDurationItemIndex: M,
          getComputedStyle: V,
          getInstanceOrigin: U,
          reduceListToGroup: w,
          shouldNamespaceEventParameter: F,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: Y,
          clearObjectCache: H,
          stringifyTarget: X,
          mediaQueriesEqual: B,
          shallowEqual: z,
        } = E.IX2VanillaUtils,
        {
          isPluginType: j,
          createPluginInstance: W,
          getPluginDuration: Q,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        K = $.match(/iPad/i) || $.match(/iPhone/);
      function Z(e) {
        A({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: q }),
          A({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          A({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          A({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function q({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: c,
            testManual: d,
            verbose: s = !0,
          } = e,
          { rawData: l } = e;
        if (a && i && l && c) {
          let e = l.actionLists[a];
          e && (l = w({ actionList: e, actionItemId: i, rawData: l }));
        }
        if (
          (ea({ store: t, rawData: l, allowEvents: r, testManual: d }),
          (a && n === g.ActionTypeConsts.GENERAL_START_ACTION) || _(n))
        ) {
          eg({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: c,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, p.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? eg({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), G({ store: t, elementApi: I });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, p.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, p.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(v),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ec(e),
                (0, u.default)(n, (t, n) => {
                  let a = T.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = I.getQuerySelector(o);
                        t[r] ||
                          ((i === g.EventTypeConsts.MOUSE_CLICK ||
                            i === g.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: d } = t.getState(),
                      { actionLists: s } = d,
                      l = ed(n, el);
                    if (!(0, c.default)(l)) return;
                    (0, u.default)(l, (e, a) => {
                      let i = n[a],
                        {
                          action: c,
                          id: l,
                          mediaQueries: u = d.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = c.config;
                      B(u, d.mediaQueryKeys) ||
                        t.dispatch((0, p.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              c = (0, o.default)(i, ({ id: e }) => e === a),
                              d = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: s,
                                }) {
                                  let { ixData: l, ixSession: u } =
                                      e.getState(),
                                    { events: f } = l,
                                    E = f[a],
                                    { eventTypeId: p } = E,
                                    T = {},
                                    b = {},
                                    y = [],
                                    { continuousActionGroups: m } = c,
                                    { id: _ } = c;
                                  F(p, i) && (_ = D(t, _));
                                  let L =
                                    u.hasBoundaryNodes && n
                                      ? I.getClosestElement(n, v)
                                      : null;
                                  m.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? L : null,
                                        r = X(i) + O + a;
                                      if (
                                        ((b[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(b[r], t, e)),
                                        !T[r])
                                      ) {
                                        T[r] = !0;
                                        let { config: t } = e;
                                        R({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: I,
                                        }).forEach((e) => {
                                          y.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    y.forEach(({ element: t, key: n }) => {
                                      let i = b[n],
                                        c = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: l } = c,
                                        u = (
                                          l === g.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : j(l)
                                        )
                                          ? W(l)?.(t, c)
                                          : null,
                                        f = N(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: I,
                                          },
                                          u
                                        );
                                      ep({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: c,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: _,
                                        actionGroups: i,
                                        smoothing: d,
                                        restingValue: s,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: l + O + a,
                                  eventTarget: e,
                                  eventId: l,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: c,
                                  smoothing: d,
                                  restingValue: u,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          g.ActionTypeConsts.GENERAL_START_ACTION ||
                          _(c.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: l });
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        es(l, (o, r, c) => {
                          let s = n[r],
                            l = a.eventState[c],
                            { action: u, mediaQueries: f = d.mediaQueryKeys } =
                              s;
                          if (!k(f, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              l
                            );
                            z(a, l) ||
                              t.dispatch((0, p.eventStateChanged)(c, a));
                          };
                          u.actionTypeId ===
                          g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      T = (0, f.default)(E, 12),
                      b = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? T : E;
                            e.addEventListener(n, i),
                              t.dispatch((0, p.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(b)
                      : "string" == typeof a && b(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  er.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, p.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(h) && (e.className += ` ${h}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              A({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    G({ store: e, elementApi: I }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, p.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, p.animationFrameChanged)(a, o)), t)) {
                    let t = A({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), H(), e.dispatch((0, p.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, p.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let ed = (e, t) => (0, d.default)((0, l.default)(e, t), s.default),
        es = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + O + a);
            });
          });
        },
        el = (e) =>
          R({
            config: { target: e.target, targets: e.targets },
            elementApi: I,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: c } = a,
          d = c[n],
          s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
          let o = (0, r.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, r.default)(d, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = R({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: d.target, targets: d.targets }
                    : i,
                event: d,
                elementApi: I,
              }),
              c = j(o);
            r.forEach((i) => {
              let r = c ? W(o)?.(i, a) : null;
              ep({
                destination: N({ element: i, actionItem: a, elementApi: I }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            eI(t, e),
              a &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eg({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: c } = e.getState(),
          d = c.hasBoundaryNodes && n ? I.getClosestElement(n, v) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && c) {
            if (d && o && !I.elementContains(d, n.element)) return;
            eI(n, e),
              n.verbose &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: c,
        verbose: d,
      }) {
        let { ixData: s, ixSession: l } = e.getState(),
          { events: u } = s,
          f = u[t] || {},
          { mediaQueries: g = s.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: p } = (0,
          r.default)(s, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && p && o++;
        let T =
            (0 === o || (1 === o && p)) && _(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          b = (0, r.default)(E, [o, "actionItems"], []);
        if (!b.length || !k(g, l.mediaQueryKey)) return !1;
        let y = l.hasBoundaryNodes && n ? I.getClosestElement(n, v) : null,
          m = M(b),
          O = !1;
        return (
          b.forEach((r, s) => {
            let { config: l, actionTypeId: u } = r,
              g = j(u),
              { target: E } = l;
            E &&
              R({
                config: l,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? y : null,
                elementApi: I,
              }).forEach((l, f) => {
                let E = g ? W(u)?.(l, r) : null,
                  p = g ? Q(u)(l, r) : null;
                O = !0;
                let b = V({ element: l, actionItem: r }),
                  y = N({ element: l, actionItem: r, elementApi: I }, E);
                ep({
                  store: e,
                  element: l,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: m === s && 0 === f,
                  computedStyle: b,
                  destination: y,
                  immediate: c,
                  verbose: d,
                  pluginInstance: E,
                  pluginDuration: p,
                  instanceDelay: T,
                });
              });
          }),
          O
        );
      }
      function ep(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: c,
            pluginInstance: d,
            continuous: s,
            restingValue: l,
            eventId: u,
          } = i,
          f = P(),
          { ixElements: E, ixSession: T, ixData: b } = n.getState(),
          y = C(E, o),
          { refState: m } = E[y] || {},
          _ = I.getRefType(o),
          O = T.reducedMotion && g.ReducedMotionTypes[r.actionTypeId];
        if (O && s)
          switch (b.events[u]?.eventTypeId) {
            case g.EventTypeConsts.MOUSE_MOVE:
            case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = l;
              break;
            default:
              t = 0.5;
          }
        let v = U(o, m, a, r, I, d);
        if (
          (n.dispatch(
            (0, p.instanceAdded)({
              instanceId: f,
              elementId: y,
              origin: v,
              refType: _,
              skipMotion: O,
              skipToValue: t,
              ...i,
            })
          ),
          eT(document.body, "ix2-animation-started", f),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, p.instanceStarted)(t, 0)),
              e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            eb(a[t], e);
          })(n, f);
        A({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eb }),
          s || n.dispatch((0, p.instanceStarted)(f, T.tick));
      }
      function eI(e, t) {
        eT(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === L && Y(o, a, I), t.dispatch((0, p.instanceRemoved)(e.id));
      }
      function eT(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function eb(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: c,
            renderType: d,
            current: s,
            groupIndex: l,
            eventId: u,
            eventTarget: f,
            eventStateKey: g,
            actionListId: E,
            isCarrier: T,
            styleProp: b,
            verbose: y,
            pluginInstance: m,
          } = e,
          { ixData: _, ixSession: O } = t.getState(),
          { events: v } = _,
          { mediaQueries: h = _.mediaQueryKeys } = v && v[u] ? v[u] : {};
        if (k(h, O.mediaQueryKey) && (a || n || i)) {
          if (s || (d === S && i)) {
            t.dispatch((0, p.elementStateChanged)(o, c, s, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              l = i && i[c];
            (a === L || j(c)) && x(n, i, l, u, r, b, I, d, m);
          }
          if (i) {
            if (T) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: g,
                actionListId: E,
                groupIndex: l + 1,
                verbose: y,
              });
              y &&
                !e &&
                t.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eI(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eg;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        c = n(7087),
        d = n(1970),
        s = n(3946),
        l = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: g,
          MOUSE_DOWN: E,
          MOUSE_UP: p,
          MOUSE_OVER: I,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: b,
          DROPDOWN_OPEN: y,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: _,
          TAB_ACTIVE: O,
          TAB_INACTIVE: v,
          NAVBAR_CLOSE: L,
          NAVBAR_OPEN: S,
          MOUSE_MOVE: h,
          PAGE_SCROLL_DOWN: R,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: N,
          PAGE_SCROLL_UP: A,
          SCROLLING_IN_VIEW: P,
          PAGE_FINISH: x,
          ECOMMERCE_CART_CLOSE: G,
          ECOMMERCE_CART_OPEN: M,
          PAGE_START: V,
          PAGE_SCROLL: U,
        } = c.EventTypeConsts,
        w = "COMPONENT_ACTIVE",
        F = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = c.IX2EngineConstants,
        { getNamespacedParameterId: k } = l.IX2VanillaUtils,
        Y = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        H = Y(({ element: e, nativeEvent: t }) => e === t.target),
        X = Y(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        B = (0, i.default)([H, X]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        j = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!z(e, a);
        },
        W = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: c } = t,
            { actionListId: s, autoStopEventId: l } = r.config,
            u = z(e, l);
          return (
            u &&
              (0, d.stopActionGroup)({
                store: e,
                eventId: l,
                eventTarget: n,
                eventStateKey: l + D + a.split(D)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, d.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            (0, d.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            i
          );
        },
        Q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: Q(B, W) },
        K = { ...$, types: [w, F].join(" ") },
        Z = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        q = "mouseover mouseout",
        J = { types: Z },
        ee = { PAGE_START: V, PAGE_FINISH: x },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [w, F].indexOf(a) ? a === w : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: c } = et(),
              {
                event: { config: d, eventTypeId: s },
              } = t,
              { scrollOffsetValue: l, scrollOffsetUnit: u } = d,
              f = r - c,
              g = Number((o / f).toFixed(2));
            if (n && n.percentTop === g) return n;
            let E = ("PX" === u ? l : (c * (l || 0)) / 100) / f,
              p = 0;
            n &&
              ((a = g > n.percentTop),
              (p = (i = n.scrollingDown !== a) ? g : n.anchorTop));
            let I = s === R ? g >= p + E : g <= p - E,
              T = {
                ...n,
                percentTop: g,
                inBounds: I,
                anchorTop: p,
                scrollingDown: a,
              };
            return (n && I && (i || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        ed = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        el = (e = !0) => ({
          ...K,
          handler: Q(
            e ? B : H,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...K,
          handler: Q(
            e ? B : H,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === C) === n
                ? (W(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        eg = {
          [m]: el(),
          [_]: eu(),
          [y]: el(),
          [b]: eu(),
          [S]: el(!1),
          [L]: eu(!1),
          [O]: el(),
          [v]: eu(),
          [M]: { types: "ecommerce-cart-open", handler: Q(B, W) },
          [G]: { types: "ecommerce-cart-close", handler: Q(B, W) },
          [f]: {
            types: "click",
            handler: Q(
              B,
              es((e, { clickCount: t }) => {
                j(e) ? 1 === t && W(e) : W(e);
              })
            ),
          },
          [g]: {
            types: "click",
            handler: Q(
              B,
              es((e, { clickCount: t }) => {
                2 === t && W(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [p]: { ...$, types: "mouseup" },
          [I]: {
            types: q,
            handler: Q(
              B,
              er((e, t) => {
                t.elementHovered && W(e);
              })
            ),
          },
          [T]: {
            types: q,
            handler: Q(
              B,
              er((e, t) => {
                t.elementHovered || W(e);
              })
            ),
          },
          [h]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: d,
                  continuousParameterGroupId: l,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: g = o.clientX,
                  clientY: E = o.clientY,
                  pageX: p = o.pageX,
                  pageY: I = o.pageY,
                } = a,
                T = "X_AXIS" === d,
                b = "mouseout" === a.type,
                y = f / 100,
                m = l,
                _ = !1;
              switch (r) {
                case c.EventBasedOn.VIEWPORT:
                  y = T
                    ? Math.min(g, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  y = T ? Math.min(e + p, n) / n : Math.min(t + I, a) / a;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  m = k(i, l);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== B({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: c, height: d } = n;
                  if (!e && !ed({ left: g, top: E }, n)) break;
                  (_ = !0), (y = T ? (g - o) / c : (E - r) / d);
                }
              }
              return (
                b && (y > 0.95 || y < 0.05) && (y = Math.round(y)),
                (r !== c.EventBasedOn.ELEMENT || _ || _ !== o.elementHovered) &&
                  ((y = u ? 1 - y : y),
                  e.dispatch((0, s.parameterChanged)(m, y))),
                {
                  elementHovered: _,
                  clientX: g,
                  clientY: E,
                  pageX: p,
                  pageY: I,
                }
              );
            },
          },
          [U]: {
            types: Z,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                c = i / (o - r);
              (c = a ? 1 - c : c), e.dispatch((0, s.parameterChanged)(n, c));
            },
          },
          [P]: {
            types: Z,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: d,
                  scrollHeight: l,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: g,
                  continuousParameterGroupId: E,
                  startsEntering: p,
                  startsExiting: I,
                  addEndOffset: T,
                  addStartOffset: b,
                  addOffsetValue: y = 0,
                  endOffsetValue: m = 0,
                } = n;
              if (f === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === g ? o / d : r / l;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(a, E),
                  o = e.getBoundingClientRect(),
                  r = (b ? y : 0) / 100,
                  c = (T ? m : 0) / 100;
                (r = p ? r : 1 - r), (c = I ? c : 1 - c);
                let d = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * c - d), l),
                  g = Math.min(Math.max(0, u - d), f) / f;
                return (
                  g !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, g)),
                  { scrollPercent: g }
                );
              }
            },
          },
          [C]: ef,
          [N]: ef,
          [R]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && W(e);
            }),
          },
          [A]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || W(e);
            }),
          },
          [x]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(H, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && W(e), n;
            }),
          },
          [V]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Q(H, (e, t) => (t || W(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: d,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: l,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: g,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: p } = a.IX2EngineConstants,
        {
          getItemConfigByKey: I,
          getRenderType: T,
          getStyleProp: b,
        } = i.IX2VanillaUtils,
        y = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: c,
              parameterId: d,
              actionGroups: s,
              destinationKeys: l,
              smoothing: u,
              restingValue: E,
              actionTypeId: p,
              customEasingFn: T,
              skipMotion: b,
              skipToValue: y,
            } = e,
            { parameters: m } = t.payload,
            _ = Math.max(1 - u, 0.01),
            O = m[d];
          null == O && ((_ = 1), (O = E));
          let v = f((Math.max(O, 0) || 0) - c),
            L = b ? y : f(c + v * _),
            S = 100 * L;
          if (L === c && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: o } = s[e];
            if ((0 === e && (n = o[0]), S >= t)) {
              n = o[0];
              let c = s[e + 1],
                d = c && S !== t;
              (a = d ? c.actionItems[0] : null),
                d && ((i = t / 100), (r = (c.keyframe - t) / 100));
            }
          }
          let h = {};
          if (n && !a)
            for (let e = 0, { length: t } = l; e < t; e++) {
              let t = l[e];
              h[t] = I(p, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (L - i) / r,
              t = g(n.config.easing, e, T);
            for (let e = 0, { length: i } = l; e < i; e++) {
              let i = l[e],
                o = I(p, i, n.config),
                r = (I(p, i, a.config) - o) * t + o;
              h[i] = r;
            }
          }
          return (0, o.merge)(e, { position: L, current: h });
        },
        m = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: c,
              verbose: d,
              actionItem: s,
              destination: l,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: I,
              customEasingFn: T,
              skipMotion: b,
            } = e,
            y = s.config.easing,
            { duration: m, delay: _ } = s.config;
          null != E && (m = E),
            (_ = null != I ? I : _),
            c === p ? (m = 0) : (r || b) && (m = _ = 0);
          let { now: O } = t.payload;
          if (n && a) {
            let t = O - (i + _);
            if (d) {
              let t = m + _,
                n = f(Math.min(Math.max(0, (O - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / m), 1)),
              r = g(y, n, T),
              c = {},
              s = null;
            return (
              u.length &&
                (s = u.reduce((e, t) => {
                  let n = l[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (c.current = s),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, o.merge)(e, c)
            );
          }
          return e;
        },
        _ = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case d: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: c,
                  eventStateKey: d,
                  actionListId: s,
                  groupIndex: l,
                  isCarrier: u,
                  origin: f,
                  destination: g,
                  immediate: p,
                  verbose: I,
                  continuous: y,
                  parameterId: m,
                  actionGroups: _,
                  smoothing: O,
                  restingValue: v,
                  pluginInstance: L,
                  pluginDuration: S,
                  instanceDelay: h,
                  skipMotion: R,
                  skipToValue: C,
                } = t.payload,
                { actionTypeId: N } = i,
                A = T(N),
                P = b(A, N),
                x = Object.keys(g).filter(
                  (e) => null != g[e] && "string" != typeof g[e]
                ),
                { easing: G } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: g,
                destinationKeys: x,
                immediate: p,
                verbose: I,
                current: null,
                actionItem: i,
                actionTypeId: N,
                eventId: r,
                eventTarget: c,
                eventStateKey: d,
                actionListId: s,
                groupIndex: l,
                renderType: A,
                isCarrier: u,
                styleProp: P,
                continuous: y,
                parameterId: m,
                actionGroups: _,
                smoothing: O,
                restingValue: v,
                pluginInstance: L,
                pluginDuration: S,
                instanceDelay: h,
                skipMotion: R,
                skipToValue: C,
                customEasingFn:
                  Array.isArray(G) && 4 === G.length ? E(G) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case l: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  c = e[i],
                  d = c.continuous ? y : m;
                n = (0, o.set)(n, i, d(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        c = n(9468),
        d = n(7718),
        s = n(1540),
        { ixElements: l } = c.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: l,
          ixInstances: d.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: d,
        } = a.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        l = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [c]: { value: "stop" },
          [d]: { value: "clear" },
        }),
        u = (e = s, t) => {
          if (t.type in l) {
            let n = [l[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return I;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: d,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: l,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: g,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        p = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        I = (e = p, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case d:
              return p;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case s: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case l: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case g: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return l;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        d = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        s = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        l = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        d = (e, t) => e.value.inputs[t],
        s = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        g = (e, { PLUGIN_RIVE: t }, n) => {
          let a = c();
          if (!a) return;
          let r = a.getInstance(e),
            d = a.rive.StateMachineInputType,
            { name: s, inputs: l = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), i in l || o in l)) {
                  let t = e.layout,
                    n = l[i] ?? t.fit,
                    a = l[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in l) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case d.Boolean:
                        null != l[e] && (a.value = !!l[e]);
                        break;
                      case d.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case d.Trigger:
                        l[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return g;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        d = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        l = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        g = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? c(i.spline) : a.setLoadHandler(e, c);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        c = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        s = (e) => e.value,
        l = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        g = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let a = n(7087),
        i = s(n(7377)),
        o = s(n(2866)),
        r = s(n(2570)),
        c = s(n(1407));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let l = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return m;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return y;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return g;
        },
        IX2_INSTANCE_ADDED: function () {
          return I;
        },
        IX2_INSTANCE_REMOVED: function () {
          return b;
        },
        IX2_INSTANCE_STARTED: function () {
          return T;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return O;
        },
        IX2_PARAMETER_CHANGED: function () {
          return p;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return d;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return l;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return v;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return _;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        d = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        l = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        g = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        p = "IX2_PARAMETER_CHANGED",
        I = "IX2_INSTANCE_ADDED",
        T = "IX2_INSTANCE_STARTED",
        b = "IX2_INSTANCE_REMOVED",
        y = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        _ = "IX2_VIEWPORT_WIDTH_CHANGED",
        O = "IX2_MEDIA_QUERIES_DEFINED",
        v = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return B;
        },
        BACKGROUND: function () {
          return F;
        },
        BACKGROUND_COLOR: function () {
          return w;
        },
        BAR_DELIMITER: function () {
          return W;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return d;
        },
        CHILDREN: function () {
          return Q;
        },
        COLON_DELIMITER: function () {
          return j;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return I;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return g;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return l;
        },
        CONFIG_Z_UNIT: function () {
          return p;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return Y;
        },
        FILTER: function () {
          return G;
        },
        FLEX: function () {
          return H;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return U;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return x;
        },
        PARENT: function () {
          return Z;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return q;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return h;
        },
        ROTATE_Y: function () {
          return R;
        },
        ROTATE_Z: function () {
          return C;
        },
        SCALE_3D: function () {
          return S;
        },
        SCALE_X: function () {
          return O;
        },
        SCALE_Y: function () {
          return v;
        },
        SCALE_Z: function () {
          return L;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return N;
        },
        SKEW_X: function () {
          return A;
        },
        SKEW_Y: function () {
          return P;
        },
        TRANSFORM: function () {
          return T;
        },
        TRANSLATE_3D: function () {
          return _;
        },
        TRANSLATE_X: function () {
          return b;
        },
        TRANSLATE_Y: function () {
          return y;
        },
        TRANSLATE_Z: function () {
          return m;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return V;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        c = "w-mod-ix",
        d = ".w-dyn-item",
        s = "xValue",
        l = "yValue",
        u = "zValue",
        f = "value",
        g = "xUnit",
        E = "yUnit",
        p = "zUnit",
        I = "unit",
        T = "transform",
        b = "translateX",
        y = "translateY",
        m = "translateZ",
        _ = "translate3d",
        O = "scaleX",
        v = "scaleY",
        L = "scaleZ",
        S = "scale3d",
        h = "rotateX",
        R = "rotateY",
        C = "rotateZ",
        N = "skew",
        A = "skewX",
        P = "skewY",
        x = "opacity",
        G = "filter",
        M = "font-variation-settings",
        V = "width",
        U = "height",
        w = "backgroundColor",
        F = "background",
        D = "borderColor",
        k = "color",
        Y = "display",
        H = "flex",
        X = "willChange",
        B = "AUTO",
        z = ",",
        j = ":",
        W = "|",
        Q = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        Z = "PARENT",
        q = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return d;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = s(n(1833), t),
        r = s(n(262), t);
      s(n(8704), t), s(n(3213), t);
      let c = u(n(8023)),
        d = u(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: c,
          STYLE_FILTER: d,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        l = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [c]: !0, [d]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return d;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return l;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        d = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        l = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            r,
            d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(d[0]),
            l = parseFloat(d[1].replace("%", "")) / 100,
            u = parseFloat(d[2].replace("%", "")) / 100;
          o = parseFloat(d[3]);
          let f = (1 - Math.abs(2 * u - 1)) * l,
            g = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = u - f / 2;
          s >= 0 && s < 60
            ? ((e = f), (n = g), (r = 0))
            : s >= 60 && s < 120
            ? ((e = g), (n = f), (r = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (n = f), (r = g))
            : s >= 180 && s < 240
            ? ((e = 0), (n = g), (r = f))
            : s >= 240 && s < 300
            ? ((e = g), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = g)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((r + E) * 255));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            o,
            r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            d = parseFloat(r[0]),
            s = parseFloat(r[1].replace("%", "")) / 100,
            l = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * l - 1)) * s,
            f = u * (1 - Math.abs(((d / 60) % 2) - 1)),
            g = l - u / 2;
          d >= 0 && d < 60
            ? ((e = u), (n = f), (o = 0))
            : d >= 60 && d < 120
            ? ((e = f), (n = u), (o = 0))
            : d >= 120 && d < 180
            ? ((e = 0), (n = u), (o = f))
            : d >= 180 && d < 240
            ? ((e = 0), (n = f), (o = u))
            : d >= 240 && d < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + g) * 255)),
            (a = Math.round((n + g) * 255)),
            (i = Math.round((o + g) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return d;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return l;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        c = f(n(3767)),
        d = f(n(5861)),
        s = f(n(1799)),
        l = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return l;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return g;
          },
          withBrowser: function () {
            return d;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        c = "undefined" != typeof window,
        d = (e, t) => (c ? e() : t),
        s = d(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        l = d(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = d(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        g = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return l;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        c = (a = n(1361)) && a.__esModule ? a : { default: a };
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function l(e) {
        return (0, c.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? s(t > 0 ? n(t) : t)
          : s(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return H;
          },
          bouncePast: function () {
            return X;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return d;
          },
          easeInOut: function () {
            return l;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return G;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return U;
          },
          inExpo: function () {
            return h;
          },
          inOutBack: function () {
            return V;
          },
          inOutCirc: function () {
            return P;
          },
          inOutCubic: function () {
            return I;
          },
          inOutElastic: function () {
            return F;
          },
          inOutExpo: function () {
            return C;
          },
          inOutQuad: function () {
            return g;
          },
          inOutQuart: function () {
            return y;
          },
          inOutQuint: function () {
            return O;
          },
          inOutSine: function () {
            return S;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return T;
          },
          inQuint: function () {
            return m;
          },
          inSine: function () {
            return v;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return x;
          },
          outCirc: function () {
            return A;
          },
          outCubic: function () {
            return p;
          },
          outElastic: function () {
            return w;
          },
          outExpo: function () {
            return R;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return b;
          },
          outQuint: function () {
            return _;
          },
          outSine: function () {
            return L;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return Y;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        c = (0, r.default)(0.25, 0.1, 0.25, 1),
        d = (0, r.default)(0.42, 0, 1, 1),
        s = (0, r.default)(0, 0, 0.58, 1),
        l = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function p(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function I(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function T(e) {
        return Math.pow(e, 4);
      }
      function b(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function m(e) {
        return Math.pow(e, 5);
      }
      function _(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function O(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function v(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function L(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function S(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function h(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function C(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function N(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function A(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function P(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function x(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function G(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function V(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function w(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function Y(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function H(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return g;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return l;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function c(e) {
        return r.pluginMethodMap.has(e);
      }
      let d = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        s = d("getPluginConfig"),
        l = d("getPluginOrigin"),
        u = d("getPluginDuration"),
        f = d("getPluginDestination"),
        g = d("createPluginInstance"),
        E = d("renderPlugin"),
        p = d("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return ez;
        },
        clearAllStyles: function () {
          return eH;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return em;
        },
        getComputedStyle: function () {
          return e_;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return ep;
        },
        getInstanceId: function () {
          return eg;
        },
        getInstanceOrigin: function () {
          return eS;
        },
        getItemConfigByKey: function () {
          return eC;
        },
        getMaxDurationItemIndex: function () {
          return eQ;
        },
        getNamespacedParameterId: function () {
          return eq;
        },
        getRenderType: function () {
          return eA;
        },
        getStyleProp: function () {
          return eP;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eb;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return eI;
        },
        renderHTMLElement: function () {
          return ex;
        },
        shallowEqual: function () {
          return l.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eZ;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = p(n(4075)),
        r = p(n(1455)),
        c = p(n(5720)),
        d = n(1185),
        s = n(7087),
        l = p(n(7164)),
        u = n(3767),
        f = n(380),
        g = n(1799),
        E = n(2662);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: I,
          TRANSFORM: T,
          TRANSLATE_3D: b,
          SCALE_3D: y,
          ROTATE_X: m,
          ROTATE_Y: _,
          ROTATE_Z: O,
          SKEW: v,
          PRESERVE_3D: L,
          FLEX: S,
          OPACITY: h,
          FILTER: R,
          FONT_VARIATION_SETTINGS: C,
          WIDTH: N,
          HEIGHT: A,
          BACKGROUND_COLOR: P,
          BORDER_COLOR: x,
          COLOR: G,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: V,
          SIBLINGS: U,
          PARENT: w,
          DISPLAY: F,
          WILL_CHANGE: D,
          AUTO: k,
          COMMA_DELIMITER: Y,
          COLON_DELIMITER: H,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: B,
          RENDER_GENERAL: z,
          RENDER_STYLE: j,
          RENDER_PLUGIN: W,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Q,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: Z,
          STYLE_OPACITY: q,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = s.ActionTypeConsts,
        ec = (e) => e.trim(),
        ed = Object.freeze({ [en]: P, [ea]: x, [ei]: G }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: T,
          [P]: I,
          [h]: h,
          [R]: R,
          [N]: N,
          [A]: A,
          [C]: C,
        }),
        el = new Map();
      function eu() {
        el.clear();
      }
      let ef = 1;
      function eg() {
        return "i" + ef++;
      }
      let eE = 1;
      function ep(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function eI({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eT = (e, t) => e === t;
      function eb({ store: e, select: t, onChange: n, comparator: a = eT }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, c) || n((c = o), e);
          }),
          c = t(i());
        return r;
      }
      function ey(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function em({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, c;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: d } = e;
        if (Array.isArray(d) && d.length > 0)
          return d.reduce(
            (e, o) =>
              e.concat(
                em({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: l,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: g,
            getSiblingElements: p,
            matchSelector: I,
            elementContains: T,
            isSiblingNode: b,
          } = i,
          { target: y } = e;
        if (!y) return [];
        let {
          id: m,
          objectId: _,
          selector: O,
          selectorGuids: v,
          appliesTo: L,
          useEventTarget: S,
        } = ey(y);
        if (_) return [el.has(_) ? el.get(_) : el.set(_, {}).get(_)];
        if (L === s.EventAppliesTo.PAGE) {
          let e = l(m);
          return e ? [e] : [];
        }
        let h = (t?.action?.config?.affectedElements ?? {})[m || O] || {},
          R = !!(h.id || h.selector),
          C = t && u(ey(t.target));
        if (
          (R
            ? ((o = h.limitAffectedElements), (r = C), (c = u(h)))
            : (r = c = u({ id: m, selector: O, selectorGuids: v })),
          t && S)
        ) {
          let e = n && (c || !0 === S) ? [n] : f(C);
          if (c) {
            if (S === w) return f(c).filter((t) => e.some((e) => T(t, e)));
            if (S === M) return f(c).filter((t) => e.some((e) => T(e, t)));
            if (S === U) return f(c).filter((t) => e.some((e) => b(e, t)));
          }
          return e;
        }
        return null == r || null == c
          ? []
          : E.IS_BROWSER_ENV && a
          ? f(c).filter((e) => a.contains(e))
          : o === M
          ? f(r, c)
          : o === V
          ? g(f(r)).filter(I(c))
          : o === U
          ? p(f(r)).filter(I(c))
          : f(c);
      }
      function e_({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eO = /px/,
        ev = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e),
            e || {}
          ),
        eL = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eV[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eS(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: c } = a;
        if ((0, g.isPluginType)(c)) return (0, g.getPluginOrigin)(c)(t[c], a);
        switch (a.actionTypeId) {
          case Q:
          case $:
          case K:
          case Z:
            return t[a.actionTypeId] || eG[a.actionTypeId];
          case J:
            return ev(t[a.actionTypeId], a.config.filters);
          case ee:
            return eL(t[a.actionTypeId], a.config.fontVariations);
          case q:
            return { value: (0, o.default)(parseFloat(r(e, h)), 1) };
          case et: {
            let t,
              i = r(e, N),
              c = r(e, A);
            return {
              widthValue:
                a.config.widthUnit === k
                  ? eO.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === k
                  ? eO.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ed[t],
                r = a(e, i),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eF.test(r) ? r : n[i]).split(Y);
              return {
                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                aValue: (0, o.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, F), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eC = (e, t, n) => {
          if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eN({ element: e, actionItem: t, elementApi: n }) {
        if ((0, g.isPluginType)(t.actionTypeId))
          return (0, g.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Q:
          case $:
          case K:
          case Z: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: c } = t.config,
              { widthValue: d, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: d, heightValue: s };
            if (r === k) {
              let t = a(e, N);
              i(e, N, ""), (d = o(e, "offsetWidth")), i(e, N, t);
            }
            if (c === k) {
              let t = a(e, A);
              i(e, A, ""), (s = o(e, "offsetHeight")), i(e, A, t);
            }
            return { widthValue: d, heightValue: s };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eh, {});
          case ee:
            return t.config.fontVariations.reduce(eR, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eA(e) {
        return /^TRANSFORM_/.test(e)
          ? B
          : /^STYLE_/.test(e)
          ? j
          : /^GENERAL_/.test(e)
          ? z
          : /^PLUGIN_/.test(e)
          ? W
          : void 0;
      }
      function eP(e, t) {
        return e === j ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function ex(e, t, n, a, i, o, c, d, s) {
        switch (d) {
          case B:
            var l = e,
              u = t,
              f = n,
              p = i,
              I = c;
            let T = ew
                .map((e) => {
                  let t = eG[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: c = "",
                    } = u[e] || {};
                  switch (e) {
                    case Q:
                      return `${b}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case $:
                      return `${y}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case K:
                      return `${m}(${n}${o}) ${_}(${a}${r}) ${O}(${i}${c})`;
                    case Z:
                      return `${v}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: h } = I;
            ek(l, E.TRANSFORM_PREFIXED, I),
              h(l, E.TRANSFORM_PREFIXED, T),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === Q && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(p, f) && h(l, E.TRANSFORM_STYLE_PREFIXED, L);
            return;
          case j:
            return (function (e, t, n, a, i, o) {
              let { setStyle: c } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: d } = n;
                  void 0 !== r &&
                    (t === k && (t = "px"), ek(e, N, o), c(e, N, r + t)),
                    void 0 !== d &&
                      (i === k && (i = "px"), ek(e, A, o), c(e, A, d + i));
                  break;
                }
                case J:
                  var d = a.config;
                  let s = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eU(n, d)})`,
                      ""
                    ),
                    { setStyle: l } = o;
                  ek(e, R, o), l(e, R, s);
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  ek(e, C, o), f(e, C, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ed[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    d = Math.round(n.bValue),
                    s = n.aValue;
                  ek(e, t, o),
                    c(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${i},${r},${d})`
                        : `rgba(${i},${r},${d},${s})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  ek(e, i, o), c(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, c);
          case z:
            var P = e,
              x = i,
              G = c;
            let { setStyle: M } = G;
            if (x.actionTypeId === eo) {
              let { value: e } = x.config;
              M(P, F, e === S && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case W: {
            let { actionTypeId: e } = i;
            if ((0, g.isPluginType)(e)) return (0, g.renderPlugin)(e)(s, t, i);
          }
        }
      }
      let eG = {
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Z]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eV = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eU = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ew = Object.keys(eG),
        eF = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        if (!r) return void o(e, D, a);
        let c = r.split(Y).map(ec);
        -1 === c.indexOf(a) && o(e, D, c.concat(a).join(Y));
      }
      function eY(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            D,
            r
              .split(Y)
              .map(ec)
              .filter((e) => e !== a)
              .join(Y)
          );
      }
      function eH({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            c = i[r];
          c && eX({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eX({ actionList: i[e], elementApi: t });
          });
      }
      function eX({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            eB({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eB({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eB({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, g.isPluginType)(i)
            ? (t) => (0, g.clearPlugin)(i)(t, e)
            : ej({ effect: eW, actionTypeId: i, elementApi: n })),
            em({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function ez(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === k && a(e, N, ""), n.heightUnit === k && a(e, A, "");
        }
        i(e, D) && ej({ effect: eY, actionTypeId: o, elementApi: n })(e);
      }
      let ej =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case Q:
            case $:
            case K:
            case Z:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, R, n);
              break;
            case ee:
              e(a, C, n);
              break;
            case q:
              e(a, h, n);
              break;
            case et:
              e(a, N, n), e(a, A, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, ed[t], n);
              break;
            case eo:
              e(a, F, n);
          }
        };
      function eW(e, t, n) {
        let { setStyle: a } = n;
        eY(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eQ(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              d = n[eQ(n)],
              { config: s, actionTypeId: l } = d;
            i.id === d.id && (c = r + o);
            let u = eA(l) === z ? 0 : s.duration;
            r += s.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(c / r) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, d.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, d.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eZ(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eq(e, t) {
        return e + H + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, l.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + X + n + X + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return v;
        },
        ixElements: function () {
          return O;
        },
        mergeActionState: function () {
          return L;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: d,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: l,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: g,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: p,
          CONFIG_Z_UNIT: I,
          CONFIG_UNIT: T,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: b,
          IX2_INSTANCE_ADDED: y,
          IX2_ELEMENT_STATE_CHANGED: m,
        } = r.IX2EngineActionTypes,
        _ = {},
        O = (e = _, t = {}) => {
          switch (t.type) {
            case b:
              return _;
            case y: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: c,
                } = t.payload,
                { actionTypeId: d } = r,
                s = e;
              return (
                (0, o.getIn)(s, [n, a]) !== a && (s = v(s, a, c, n, r)),
                L(s, n, d, i, r)
              );
            }
            case m: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return L(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function v(e, t, n, a, i) {
        let r =
          n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function L(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return S.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let S = [
        [l, E],
        [u, p],
        [f, I],
        [g, T],
      ];
    },
    8460: function () {
      Webflow.require("ix2").init({
        events: {
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".sidebar_menu_link-block",
              originalId:
                "6272e35f347eb7625804271c|fa83638d-a87a-1978-6268-1ea276deb172",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".sidebar_menu_link-block",
                originalId:
                  "6272e35f347eb7625804271c|fa83638d-a87a-1978-6268-1ea276deb172",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17fb15aa9d7,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".sidebar_menu_link-block",
              originalId:
                "6272e35f347eb7625804271c|fa83638d-a87a-1978-6268-1ea276deb172",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".sidebar_menu_link-block",
                originalId:
                  "6272e35f347eb7625804271c|fa83638d-a87a-1978-6268-1ea276deb172",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17fb15aa9d7,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team_member_read-more",
              originalId:
                "6272e35f347eb72052042725|277f5b4c-753f-da3d-a65b-c0c9e67c4df1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team_member_read-more",
                originalId:
                  "6272e35f347eb72052042725|277f5b4c-753f-da3d-a65b-c0c9e67c4df1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17fbbe9d3ee,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team_member_read-more",
              originalId:
                "6272e35f347eb72052042725|277f5b4c-753f-da3d-a65b-c0c9e67c4df1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team_member_read-more",
                originalId:
                  "6272e35f347eb72052042725|277f5b4c-753f-da3d-a65b-c0c9e67c4df1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17fbbe9d3ef,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "8a6d156a-72d3-d401-a666-c9cc6773730f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "8a6d156a-72d3-d401-a666-c9cc6773730f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffe1e3cc1,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "8a6d156a-72d3-d401-a666-c9cc67737307",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "8a6d156a-72d3-d401-a666-c9cc67737307",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffe6ceeda,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb74902042726",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb74902042726",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffec1ba4e,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb74dd5042729",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb74dd5042729",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffee105c0,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7692e04272a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7692e04272a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffee13991,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7f1a1042728",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7f1a1042728",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffee17022,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "517a1597-9875-4392-920b-de0058b7766a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "517a1597-9875-4392-920b-de0058b7766a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17ffef59b07,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18071748dc1,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-18",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-18-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1807550a08b,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-19",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-19-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18075a276e8,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-20",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-20-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1808e6d6da3,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-21",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-21-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1809341ddf6,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-22",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-22-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18093f45751,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-23",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-23-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18095446310,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-24",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-24-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180956ce77b,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|f32a9d69-120f-2af4-3c36-2e54319d7758",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|f32a9d69-120f-2af4-3c36-2e54319d7758",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180957ce5d7,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".scene-2_dropdowns",
              originalId:
                "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scene-2_dropdowns",
                originalId:
                  "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a3d8557d,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".scene-2_dropdowns",
              originalId:
                "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scene-2_dropdowns",
                originalId:
                  "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180a3d8557e,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-30",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-30-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180a514243b,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-31",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|9ab96e23-f3e9-457a-ea28-d99bc6f99bfc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-31-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180a5384154,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".portfolio_trigger",
              originalId:
                "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".portfolio_trigger",
                originalId:
                  "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180aec26e2a,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              selector: ".portfolio_trigger",
              originalId:
                "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".portfolio_trigger",
                originalId:
                  "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180aec26e2a,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|5875fa3c-293b-321a-4a1e-ff102bc35a6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|5875fa3c-293b-321a-4a1e-ff102bc35a6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180aeefe0ef,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6272e35f347eb72052042725|17997f81-2bea-cee1-70ba-d3b064663e8c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|17997f81-2bea-cee1-70ba-d3b064663e8c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180b2e20e36,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b3861bfa,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-36",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-36-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b393003e,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-37",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|f4cd98de-2d8a-34dd-8e76-77aa509f43c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-37-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b3a4bab3,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-71",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "627a3d305a5be550f24ebcf1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "627a3d305a5be550f24ebcf1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180b7397817,
          },
          "e-71": {
            id: "e-71",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-70",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "627a3d305a5be550f24ebcf1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "627a3d305a5be550f24ebcf1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180b7397819,
          },
          "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-76",
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".portfolio_trigger",
              originalId:
                "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".portfolio_trigger",
                originalId:
                  "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180b9159cec,
          },
          "e-79": {
            id: "e-79",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-80",
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              selector: ".about_floating_block",
              originalId:
                "6272e35f347eb72052042725|34a1dff3-7800-f617-59a7-36562e1005a6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".about_floating_block",
                originalId:
                  "6272e35f347eb72052042725|34a1dff3-7800-f617-59a7-36562e1005a6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180b9198bc8,
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb72052042725",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b922d51c,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "627a3d305a5be550f24ebcf1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "627a3d305a5be550f24ebcf1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b92e9075,
          },
          "e-83": {
            id: "e-83",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb74902042726",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb74902042726",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b930f69f,
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb766f804272c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb766f804272c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b93298a4,
          },
          "e-85": {
            id: "e-85",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180b9efabe6,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb72052042725|f87b0a1a-4934-1c64-df1f-b30cf124ccfe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|f87b0a1a-4934-1c64-df1f-b30cf124ccfe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180ba579d10,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-41",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|16685fb6-8dba-15a4-087e-89b982c1d2a5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|16685fb6-8dba-15a4-087e-89b982c1d2a5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-41-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180bca89db9,
          },
          "e-89": {
            id: "e-89",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-42",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|6723d735-733a-040b-da2a-9b28cb53263b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|6723d735-733a-040b-da2a-9b28cb53263b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-42-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x180bcab7f9b,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|32471949-83d5-2430-e045-3a6eb5ea2b9a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|32471949-83d5-2430-e045-3a6eb5ea2b9a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180bcb713a1,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-90",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|32471949-83d5-2430-e045-3a6eb5ea2b9a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|32471949-83d5-2430-e045-3a6eb5ea2b9a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180bcb713a2,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290e9d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290e9d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcbd994f,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-95",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290ea2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290ea2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcbe55db,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290e9e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290e9e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcbeaaff,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290ea3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290ea3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc1a7da,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290e9f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290e9f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc1dbae,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290ea4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290ea4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc222c7,
          },
          "e-104": {
            id: "e-104",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-105",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "afd4747b-1770-8390-8c0b-3159af290ea0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "afd4747b-1770-8390-8c0b-3159af290ea0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc2509c,
          },
          "e-108": {
            id: "e-108",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-109",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc2a9c8,
          },
          "e-110": {
            id: "e-110",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc2d28c,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc2faef,
          },
          "e-116": {
            id: "e-116",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-117",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".slider-h1",
              originalId: "451da6f0-1063-5ba9-bce3-2b7d6840b36f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".slider-h1",
                originalId: "451da6f0-1063-5ba9-bce3-2b7d6840b36f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc5afe7,
          },
          "e-124": {
            id: "e-124",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-125",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".colour_text",
              originalId: "99bca974-d395-a133-c183-9145753ee470",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".colour_text",
                originalId: "99bca974-d395-a133-c183-9145753ee470",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc8d924,
          },
          "e-126": {
            id: "e-126",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-127",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".slider-h1-alt",
              originalId: "b7e41998-330c-c1b7-e14e-b631fce93fe6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".slider-h1-alt",
                originalId: "b7e41998-330c-c1b7-e14e-b631fce93fe6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc96e81,
          },
          "e-128": {
            id: "e-128",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-129",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".invest-text",
              originalId: "38cd7950-9907-9e2c-72f2-c20010945bbd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".invest-text",
                originalId: "38cd7950-9907-9e2c-72f2-c20010945bbd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcc9d42f,
          },
          "e-130": {
            id: "e-130",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".scene-3_grid",
              originalId: "4166ae9e-a520-258d-8afa-cab613d9d78b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scene-3_grid",
                originalId: "4166ae9e-a520-258d-8afa-cab613d9d78b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bccad27c,
          },
          "e-132": {
            id: "e-132",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-133",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".device-image-text",
              originalId:
                "6272e35f347eb7625804271c|0d9cf6ff-094a-5f0e-066c-367e966bef2d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".device-image-text",
                originalId:
                  "6272e35f347eb7625804271c|0d9cf6ff-094a-5f0e-066c-367e966bef2d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bccbc9e2,
          },
          "e-134": {
            id: "e-134",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-135",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".small_heading-text",
              originalId:
                "6272e35f347eb72052042725|26aece37-7a8c-f0cc-ff25-ea91b4265d4e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".small_heading-text",
                originalId:
                  "6272e35f347eb72052042725|26aece37-7a8c-f0cc-ff25-ea91b4265d4e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcd39782,
          },
          "e-136": {
            id: "e-136",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-137",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".satndard_page-h2",
              originalId:
                "6272e35f347eb72052042725|15160971-88bc-2eb2-1a5f-9571e189f1a8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".satndard_page-h2",
                originalId:
                  "6272e35f347eb72052042725|15160971-88bc-2eb2-1a5f-9571e189f1a8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcd3d298,
          },
          "e-138": {
            id: "e-138",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".collective_experience-h4",
              originalId:
                "6272e35f347eb72052042725|f903494d-ce2c-55cf-8e81-60116c59c959",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".collective_experience-h4",
                originalId:
                  "6272e35f347eb72052042725|f903494d-ce2c-55cf-8e81-60116c59c959",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcd43c75,
          },
          "e-140": {
            id: "e-140",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-141",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".collective_experience-content",
              originalId:
                "6272e35f347eb72052042725|056c8447-38d8-4826-1e9c-04c88a7fc333",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".collective_experience-content",
                originalId:
                  "6272e35f347eb72052042725|056c8447-38d8-4826-1e9c-04c88a7fc333",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcd4e339,
          },
          "e-142": {
            id: "e-142",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-143",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb72052042725|3b40ddb6-b1cc-7959-c545-876dca44bc45",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb72052042725|3b40ddb6-b1cc-7959-c545-876dca44bc45",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180bcd53d39,
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-145",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".slider_body-text",
              originalId: "4a40e5d4-3f29-9473-9cb9-5527bf589ecf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".slider_body-text",
                originalId: "4a40e5d4-3f29-9473-9cb9-5527bf589ecf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180c6da657e,
          },
          "e-146": {
            id: "e-146",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-147",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb7625804271c|8956a5f7-f25a-b3ac-8839-c987c0f03e55",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb7625804271c|8956a5f7-f25a-b3ac-8839-c987c0f03e55",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180c6eb3433,
          },
          "e-148": {
            id: "e-148",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-149",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f604ff5e-828b-9e38-6cf5-b1c42e7d87d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x180c86c32cd,
          },
          "e-150": {
            id: "e-150",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-151",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".scene-2_dropdowns",
              originalId:
                "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scene-2_dropdowns",
                originalId:
                  "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180c8892494,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".scene-2_dropdowns",
              originalId:
                "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scene-2_dropdowns",
                originalId:
                  "6272e35f347eb7625804271c|9a5f9119-959d-e283-c465-c3375a0e5696",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180c8892496,
          },
          "e-152": {
            id: "e-152",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9349a0b071e3b27407e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "660d9349a0b071e3b27407e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea5075797,
          },
          "e-156": {
            id: "e-156",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "660d9349a0b071e3b27407e3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "660d9349a0b071e3b27407e3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ea5075797,
          },
          "e-157": {
            id: "e-157",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".founder-spotlight_card-wrapper",
              originalId:
                "660d9349a0b071e3b27407e3|61378ca0-76fc-5a17-128d-260e8be696ae",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".founder-spotlight_card-wrapper",
                originalId:
                  "660d9349a0b071e3b27407e3|61378ca0-76fc-5a17-128d-260e8be696ae",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea5733e71,
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-157",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".founder-spotlight_card-wrapper",
              originalId:
                "660d9349a0b071e3b27407e3|61378ca0-76fc-5a17-128d-260e8be696ae",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".founder-spotlight_card-wrapper",
                originalId:
                  "660d9349a0b071e3b27407e3|61378ca0-76fc-5a17-128d-260e8be696ae",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea5733e72,
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".scroll-link_arrow",
              originalId:
                "660d950b79e67e78947a1132|a080bbff-4936-b76e-a084-132cf471bf70",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".scroll-link_arrow",
                originalId:
                  "660d950b79e67e78947a1132|a080bbff-4936-b76e-a084-132cf471bf70",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ea5b32982,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-50",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".image-bubble_circle",
              originalId: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-bubble_circle",
                originalId: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-50-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ea66165d7,
          },
          "e-162": {
            id: "e-162",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-163",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".image-bubble_circle",
              originalId: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-bubble_circle",
                originalId: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18ebeee352d,
          },
          "e-164": {
            id: "e-164",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-165",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb74902042726|07865a51-84ce-6c75-bfa7-8751d4642c4f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb74902042726|07865a51-84ce-6c75-bfa7-8751d4642c4f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ebf48ca43,
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-164",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb74902042726|07865a51-84ce-6c75-bfa7-8751d4642c4f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb74902042726|07865a51-84ce-6c75-bfa7-8751d4642c4f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ebf48ca43,
          },
          "e-166": {
            id: "e-166",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-167",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d950b79e67e78947a1132",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "660d950b79e67e78947a1132",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ebf9d6815,
          },
          "e-168": {
            id: "e-168",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-40",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "660d950b79e67e78947a1132",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "660d950b79e67e78947a1132",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-40-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18ebf9de66c,
          },
          "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-170",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".homepage_bannner-boundary",
              originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".homepage_bannner-boundary",
                originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192b56e3e73,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-52",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-172",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".homepage_bannner-boundary",
              originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".homepage_bannner-boundary",
                originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192b56f4f61,
          },
          "e-172": {
            id: "e-172",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-171",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".homepage_bannner-boundary",
              originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".homepage_bannner-boundary",
                originalId: "c539529f-ed80-eb3b-fa73-d6c52851be77",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192b56f4f64,
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-174",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6272e35f347eb766f804272c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6272e35f347eb766f804272c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193510a44fc,
          },
          "e-175": {
            id: "e-175",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-176",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "627a3d305a5be550f24ebcf1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "627a3d305a5be550f24ebcf1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x193891bb602,
          },
        },
        actionLists: {
          "a-3": {
            id: "a-3",
            title: "Home - Hide Filled Text",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sidebar_filled-text",
                        selectorGuids: ["751f9b6c-9132-4dac-ba07-246dd0eb74ea"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sidebar_filled-text",
                        selectorGuids: ["751f9b6c-9132-4dac-ba07-246dd0eb74ea"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17fb155cf23,
          },
          "a-4": {
            id: "a-4",
            title: "Home - Show Filled Text",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sidebar_filled-text",
                        selectorGuids: ["751f9b6c-9132-4dac-ba07-246dd0eb74ea"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17fb155cf23,
          },
          "a-5": {
            id: "a-5",
            title: "Team Read More | Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".team_member-details",
                        selectorGuids: ["410f65a3-aef0-df5e-d75a-3a521a33a289"],
                      },
                      widthValue: 100,
                      heightValue: 17,
                      widthUnit: "%",
                      heightUnit: "rem",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member-description",
                        selectorGuids: ["dd23c390-7be4-4ec3-3bb5-8ba6eb5068c3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member_short-description",
                        selectorGuids: ["50cd0f31-8142-5e0c-2660-21a1b5d88863"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".team_member-details",
                        selectorGuids: ["410f65a3-aef0-df5e-d75a-3a521a33a289"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 135,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-5-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 100,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member-description",
                        selectorGuids: ["dd23c390-7be4-4ec3-3bb5-8ba6eb5068c3"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member_short-description",
                        selectorGuids: ["50cd0f31-8142-5e0c-2660-21a1b5d88863"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17fbbe9e5e9,
          },
          "a-6": {
            id: "a-6",
            title: "Team Read More | Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".team_member-details",
                        selectorGuids: ["410f65a3-aef0-df5e-d75a-3a521a33a289"],
                      },
                      widthValue: 100,
                      heightValue: 17,
                      widthUnit: "%",
                      heightUnit: "rem",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member_short-description",
                        selectorGuids: ["50cd0f31-8142-5e0c-2660-21a1b5d88863"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".team_member-description",
                        selectorGuids: ["dd23c390-7be4-4ec3-3bb5-8ba6eb5068c3"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17fbbe9e5e9,
          },
          "a-9": {
            id: "a-9",
            title: "Sidebar Menu Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-wrap",
                        selectorGuids: ["82e1075a-3a5c-e31d-b75e-b51d97e2cc2e"],
                      },
                      xValue: -101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      xValue: -20,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        selector: ".sidebar_menu-wrap",
                        selectorGuids: ["82e1075a-3a5c-e31d-b75e-b51d97e2cc2e"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-9-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17fb11665a5,
          },
          "a-10": {
            id: "a-10",
            title: "Sidebar Menu Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      xValue: -20,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-10-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-close",
                        selectorGuids: ["ae854f3c-ef51-459f-0c71-7fe77db2f70c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-10-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".sidebar_menu-grid",
                        selectorGuids: ["609b4e26-20ce-647d-5bb8-165362ab2388"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".sidebar_menu-wrap",
                        selectorGuids: ["82e1075a-3a5c-e31d-b75e-b51d97e2cc2e"],
                      },
                      xValue: -101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17fb11665a5,
          },
          "a-11": {
            id: "a-11",
            title: "Change Menu Colour",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".contact_us-wrap",
                        selectorGuids: ["69f74c2e-7ed2-99de-6cb9-a02cc6ef68ac"],
                      },
                      globalSwatchId: "",
                      rValue: 20,
                      bValue: 129,
                      gValue: 26,
                      aValue: 0.9,
                    },
                  },
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".sidebar_menu-wrap",
                        selectorGuids: ["82e1075a-3a5c-e31d-b75e-b51d97e2cc2e"],
                      },
                      globalSwatchId: "",
                      rValue: 20,
                      bValue: 129,
                      gValue: 26,
                      aValue: 0.9,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ffebff763,
          },
          "a-13": {
            id: "a-13",
            title: "Contact Action Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        selector: ".contact_us-wrap",
                        selectorGuids: ["69f74c2e-7ed2-99de-6cb9-a02cc6ef68ac"],
                      },
                      xValue: 101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ffeeca0f3,
          },
          "a-16": {
            id: "a-16",
            title: "Home Page Side Scroller",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-1_animation",
                            selectorGuids: [
                              "f86a4083-674e-9db1-f8dc-bb1d149daa05",
                            ],
                          },
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-19",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".back-link",
                            selectorGuids: [
                              "e4b55429-0d50-f05b-5e8a-00b6041a6828",
                            ],
                          },
                          widthValue: 0,
                          heightValue: 0,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 9,
                    actionItems: [
                      {
                        id: "a-16-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-1_animation",
                            selectorGuids: [
                              "f86a4083-674e-9db1-f8dc-bb1d149daa05",
                            ],
                          },
                          xValue: 13,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".side-scroll__track__train",
                            selectorGuids: [
                              "d2eaac27-9f22-a391-c777-866bc37095ab",
                            ],
                          },
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-16-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_2",
                            selectorGuids: [
                              "9318675c-aa41-b05f-6840-97e927d8644a",
                            ],
                          },
                          xValue: 101,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-21",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "393d86f1",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.15,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 23,
                    actionItems: [
                      {
                        id: "a-16-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_2",
                            selectorGuids: [
                              "9318675c-aa41-b05f-6840-97e927d8644a",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-16-n-22",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.7,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 41,
                    actionItems: [
                      {
                        id: "a-16-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_3",
                            selectorGuids: [
                              "f982753c-01d4-21a9-cfcf-94313640f249",
                            ],
                          },
                          xValue: 101,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_2",
                            selectorGuids: [
                              "9318675c-aa41-b05f-6840-97e927d8644a",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 44,
                    actionItems: [
                      {
                        id: "a-16-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_3",
                            selectorGuids: [
                              "f982753c-01d4-21a9-cfcf-94313640f249",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 52,
                    actionItems: [
                      {
                        id: "a-16-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_4",
                            selectorGuids: [
                              "679a6dcb-4e96-baf3-69f2-2c58fd9c48e4",
                            ],
                          },
                          xValue: 101,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_3",
                            selectorGuids: [
                              "f982753c-01d4-21a9-cfcf-94313640f249",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-23",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.7,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 54,
                    actionItems: [
                      {
                        id: "a-16-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_4",
                            selectorGuids: [
                              "679a6dcb-4e96-baf3-69f2-2c58fd9c48e4",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-18",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene_3",
                            selectorGuids: [
                              "f982753c-01d4-21a9-cfcf-94313640f249",
                            ],
                          },
                          xValue: -101,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-16-n-24",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "393d86f1",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.15,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 99,
                    actionItems: [
                      {
                        id: "a-16-n-20",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".back-link",
                            selectorGuids: [
                              "e4b55429-0d50-f05b-5e8a-00b6041a6828",
                            ],
                          },
                          widthValue: 112,
                          heightValue: 112,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".side-scroll__track__train",
                            selectorGuids: [
                              "d2eaac27-9f22-a391-c777-866bc37095ab",
                            ],
                          },
                          xValue: -2e3,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1807174a381,
          },
          "a-18": {
            id: "a-18",
            title: "Home Page Scene 1",
            continuousParameterGroups: [
              {
                id: "a-18-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-18-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          heightValue: 290,
                          widthUnit: "AUTO",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-18",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-18-n-26",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|9d5b681a-1389-87ab-8192-aed45d599edc",
                          },
                          widthValue: 160,
                          heightValue: 290,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-35",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|960b6532-a006-e129-70c9-c63db076ee74",
                          },
                          xValue: -40,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 5,
                    actionItems: [
                      {
                        id: "a-18-n-4",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          heightValue: 290,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|f3f5acd8-8c1b-226a-50ef-1ddccf48690f",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-18-n-19",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-18-n-21",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|f3f5acd8-8c1b-226a-50ef-1ddccf48690f",
                          },
                          widthValue: 245,
                          widthUnit: "px",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-28",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|61f7bd05-355b-dc9e-4b59-a2b0c10aacbc",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-18-n-34",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|9d5b681a-1389-87ab-8192-aed45d599edc",
                          },
                          widthValue: 160,
                          heightValue: 290,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-36",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|960b6532-a006-e129-70c9-c63db076ee74",
                          },
                          xValue: -40,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-18-n-32",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|79cacff6-be59-3396-ace1-d57d00bb8711",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-18-n-39",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|61f7bd05-355b-dc9e-4b59-a2b0c10aacbc",
                          },
                          widthValue: 342,
                          widthUnit: "px",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 6,
                    actionItems: [
                      {
                        id: "a-18-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|f3f5acd8-8c1b-226a-50ef-1ddccf48690f",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 8,
                    actionItems: [
                      {
                        id: "a-18-n-22",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|f3f5acd8-8c1b-226a-50ef-1ddccf48690f",
                          },
                          widthValue: 0,
                          widthUnit: "px",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-33",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|79cacff6-be59-3396-ace1-d57d00bb8711",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 9,
                    actionItems: [
                      {
                        id: "a-18-n-20",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          xValue: 1.6,
                          yValue: 1.6,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-18-n-27",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|9d5b681a-1389-87ab-8192-aed45d599edc",
                          },
                          widthValue: 104,
                          heightValue: 0,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-29",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|61f7bd05-355b-dc9e-4b59-a2b0c10aacbc",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-18-n-37",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|960b6532-a006-e129-70c9-c63db076ee74",
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-18-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|3b23b16e-f2b8-0c27-927e-3e8838fed944",
                          },
                          heightValue: 90,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-18-n-40",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|61f7bd05-355b-dc9e-4b59-a2b0c10aacbc",
                          },
                          widthValue: 242,
                          widthUnit: "px",
                          heightUnit: "PX",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1807550c00f,
          },
          "a-19": {
            id: "a-19",
            title: "Homepage Scroll Wheel",
            continuousParameterGroups: [
              {
                id: "a-19-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 6,
                    actionItems: [
                      {
                        id: "a-19-n",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".lottie-animation",
                            selectorGuids: [
                              "d1898e99-a663-3cfb-4a26-5c47523eb7bc",
                            ],
                          },
                          value: 0,
                        },
                      },
                      {
                        id: "a-19-n-3",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6272e35f347eb7625804271c|72cc985e-1c05-5096-4b18-2f0ed3c74686",
                          },
                          zValue: 0,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-19-n-2",
                        actionTypeId: "PLUGIN_LOTTIE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".lottie-animation",
                            selectorGuids: [
                              "d1898e99-a663-3cfb-4a26-5c47523eb7bc",
                            ],
                          },
                          value: 41,
                        },
                      },
                      {
                        id: "a-19-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6272e35f347eb7625804271c|72cc985e-1c05-5096-4b18-2f0ed3c74686",
                          },
                          zValue: 360,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18075a28a0c,
          },
          "a-20": {
            id: "a-20",
            title: "Home Page Scene 2",
            continuousParameterGroups: [
              {
                id: "a-20-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 24,
                    actionItems: [
                      {
                        id: "a-20-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|9daf7c5e-a2ca-a028-50d3-f77e5d25b58a",
                          },
                          xValue: 0,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "861b9cd3-40c7-d825-f10c-fb6892b42dbf",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.connect",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "863e180d-9a04-dce5-04ba-868e7a34160e",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-20-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "861b9cd3-40c7-d825-f10c-fb6892b42dbf",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 26,
                    actionItems: [
                      {
                        id: "a-20-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|9daf7c5e-a2ca-a028-50d3-f77e5d25b58a",
                          },
                          xValue: -32,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.connect",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "c5a6205d-34af-81f2-3ded-8d66d9c0174a",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.connect",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "863e180d-9a04-dce5-04ba-868e7a34160e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.connect",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "c5a6205d-34af-81f2-3ded-8d66d9c0174a",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 26.5,
                    actionItems: [
                      {
                        id: "a-20-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.connect",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "c5a6205d-34af-81f2-3ded-8d66d9c0174a",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 27,
                    actionItems: [
                      {
                        id: "a-20-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.connect",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "863e180d-9a04-dce5-04ba-868e7a34160e",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.connect",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "c5a6205d-34af-81f2-3ded-8d66d9c0174a",
                            ],
                          },
                          xValue: -34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 28,
                    actionItems: [
                      {
                        id: "a-20-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          xValue: 100,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.connect",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "863e180d-9a04-dce5-04ba-868e7a34160e",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-20-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 32,
                    actionItems: [
                      {
                        id: "a-20-n-19",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.evaluate-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "8645c5af-6d16-a9d4-fb1d-d929f5ef3732",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-24",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.evaluate-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "8645c5af-6d16-a9d4-fb1d-d929f5ef3732",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-26",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          xValue: 164,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-28",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 34,
                    actionItems: [
                      {
                        id: "a-20-n-21",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.evaluate",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "0d70a964-c994-5bb0-cea4-94c7ddfe2522",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.evaluate-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "8645c5af-6d16-a9d4-fb1d-d929f5ef3732",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-25",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.evaluate-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "8645c5af-6d16-a9d4-fb1d-d929f5ef3732",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-27",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          xValue: 68,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-29",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 36,
                    actionItems: [
                      {
                        id: "a-20-n-30",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.earn-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ace16bd8-057e-ef0e-d4d9-de19098e09f5",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-32",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.earn-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ace16bd8-057e-ef0e-d4d9-de19098e09f5",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-34",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          xValue: 64,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-36",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-38",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-40",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          xValue: 164,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 38,
                    actionItems: [
                      {
                        id: "a-20-n-31",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.earn-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ace16bd8-057e-ef0e-d4d9-de19098e09f5",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-33",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.earn-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ace16bd8-057e-ef0e-d4d9-de19098e09f5",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-35",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-37",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.earn",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "e27b3d4f-fcc4-a1ac-3a16-1955a93af086",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-41",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          xValue: 102,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-39",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-20-n-48",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-50",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          xValue: 102,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-52",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.deliver-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ca15aa51-ed0e-47e0-fe05-34677d7c5a30",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-54",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.deliver-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ca15aa51-ed0e-47e0-fe05-34677d7c5a30",
                            ],
                          },
                          xValue: 34,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-20-n-49",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-51",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section-content.deliver",
                            selectorGuids: [
                              "1d31ea49-6b8f-8a39-d150-36b910540390",
                              "a15f9e0d-741e-7737-82bf-09ade9d31f26",
                            ],
                          },
                          xValue: 64,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-20-n-53",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.deliver-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ca15aa51-ed0e-47e0-fe05-34677d7c5a30",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-20-n-55",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_section_side-title.deliver-side",
                            selectorGuids: [
                              "8990c193-e6d4-4208-3cd6-77ca164ba4b6",
                              "ca15aa51-ed0e-47e0-fe05-34677d7c5a30",
                            ],
                          },
                          xValue: 0,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1808e6d99cc,
          },
          "a-21": {
            id: "a-21",
            title: "Home Page Scene 3",
            continuousParameterGroups: [
              {
                id: "a-21-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 42,
                    actionItems: [
                      {
                        id: "a-21-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_slider_content-wrapper.scene-3",
                            selectorGuids: [
                              "731aae77-e08e-316e-3f7e-986792f29bfa",
                              "a10897f0-cf4b-cbba-042c-cadae8b0e287",
                            ],
                          },
                          xValue: 100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-9",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_slider_content-wrapper.scene-3",
                            selectorGuids: [
                              "731aae77-e08e-316e-3f7e-986792f29bfa",
                              "a10897f0-cf4b-cbba-042c-cadae8b0e287",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 45,
                    actionItems: [
                      {
                        id: "a-21-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_slider_content-wrapper.scene-3",
                            selectorGuids: [
                              "731aae77-e08e-316e-3f7e-986792f29bfa",
                              "a10897f0-cf4b-cbba-042c-cadae8b0e287",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-10",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sub_slider_content-wrapper.scene-3",
                            selectorGuids: [
                              "731aae77-e08e-316e-3f7e-986792f29bfa",
                              "a10897f0-cf4b-cbba-042c-cadae8b0e287",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 47,
                    actionItems: [
                      {
                        id: "a-21-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".opening_content.scene-3",
                            selectorGuids: [
                              "58eb8eb1-0886-6a6e-c7d3-e9b2d3281b56",
                              "61534ecb-3707-ceed-0623-3d8f5c6b1ba3",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-7",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".opening_content.scene-3",
                            selectorGuids: [
                              "58eb8eb1-0886-6a6e-c7d3-e9b2d3281b56",
                              "61534ecb-3707-ceed-0623-3d8f5c6b1ba3",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 48,
                    actionItems: [
                      {
                        id: "a-21-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3_grid",
                            selectorGuids: [
                              "1467f44e-6556-13ab-6907-b9697a72bb1d",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 49,
                    actionItems: [
                      {
                        id: "a-21-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".opening_content.scene-3",
                            selectorGuids: [
                              "58eb8eb1-0886-6a6e-c7d3-e9b2d3281b56",
                              "61534ecb-3707-ceed-0623-3d8f5c6b1ba3",
                            ],
                          },
                          xValue: -100,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-21-n-8",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".opening_content.scene-3",
                            selectorGuids: [
                              "58eb8eb1-0886-6a6e-c7d3-e9b2d3281b56",
                              "61534ecb-3707-ceed-0623-3d8f5c6b1ba3",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-21-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3_grid",
                            selectorGuids: [
                              "1467f44e-6556-13ab-6907-b9697a72bb1d",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18093420b03,
          },
          "a-22": {
            id: "a-22",
            title: "Home Page Scene 4 Pt 1",
            continuousParameterGroups: [
              {
                id: "a-22-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-22-n-66",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: "a-22-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_background-blur",
                            selectorGuids: [
                              "ccf4b2fd-ebe2-57c6-2ead-5f4397914bac",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 57,
                    actionItems: [
                      {
                        id: "a-22-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_background-blur",
                            selectorGuids: [
                              "ccf4b2fd-ebe2-57c6-2ead-5f4397914bac",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-60",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-62",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          yValue: 100,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-22-n-50",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-circles",
                            selectorGuids: [
                              "cbc69a43-58a7-e5c4-eed1-777813b83429",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-67",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 58,
                    actionItems: [
                      {
                        id: "a-22-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_content-wrapper.scene-4",
                            selectorGuids: [
                              "57bb3eee-8144-a6eb-9f40-c50e03ac8d57",
                              "b4906caa-32ee-60d7-236d-0bb1575d91ae",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-7",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".piston-3",
                            selectorGuids: [
                              "0ce3f0ea-7f44-be81-b1ab-b87b4bfe3af0",
                            ],
                          },
                          heightValue: 200,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-22-n-54",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_background-blur",
                            selectorGuids: [
                              "ccf4b2fd-ebe2-57c6-2ead-5f4397914bac",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "96b1",
                              value: 10,
                              unit: "px",
                            },
                          ],
                        },
                      },
                      {
                        id: "a-22-n-58",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 59,
                    actionItems: [
                      {
                        id: "a-22-n-8",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".piston-3",
                            selectorGuids: [
                              "0ce3f0ea-7f44-be81-b1ab-b87b4bfe3af0",
                            ],
                          },
                          heightValue: 0,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-22-n-51",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-circles",
                            selectorGuids: [
                              "cbc69a43-58a7-e5c4-eed1-777813b83429",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-53",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_background-blur",
                            selectorGuids: [
                              "ccf4b2fd-ebe2-57c6-2ead-5f4397914bac",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "96b1",
                              value: 0,
                              unit: "px",
                            },
                          ],
                        },
                      },
                      {
                        id: "a-22-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_content-wrapper.scene-4",
                            selectorGuids: [
                              "57bb3eee-8144-a6eb-9f40-c50e03ac8d57",
                              "b4906caa-32ee-60d7-236d-0bb1575d91ae",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-61",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-22-n-63",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-22-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-bubbles-frame.b2b",
                            selectorGuids: [
                              "3aa67268-34b3-edd3-8a32-2a6b15f7bbff",
                              "d73bff2e-316c-18de-d627-e9e9f48ff2e6",
                            ],
                          },
                          yValue: 101,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 78,
                    actionItems: [
                      {
                        id: "a-22-n-68",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-22-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-bubbles-frame.b2b",
                            selectorGuids: [
                              "3aa67268-34b3-edd3-8a32-2a6b15f7bbff",
                              "d73bff2e-316c-18de-d627-e9e9f48ff2e6",
                            ],
                          },
                          yValue: -101,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-22-n-69",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 95,
                    actionItems: [
                      {
                        id: "a-22-n-70",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 96,
                    actionItems: [
                      {
                        id: "a-22-n-71",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".b2b-filled",
                            selectorGuids: [
                              "c059e64a-2ab4-148c-90de-189cab1d3f4e",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18093f473f7,
          },
          "a-23": {
            id: "a-23",
            title: "Home Page Scene 4 Pt 2",
            continuousParameterGroups: [
              {
                id: "a-23-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 57,
                    actionItems: [
                      {
                        id: "a-23-n-34",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 58,
                    actionItems: [
                      {
                        id: "a-23-n-35",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  // {
                  //   keyframe: 61,
                  //   actionItems: [
                  //     {
                  //       id: "a-23-n-26",
                  //       actionTypeId: "TRANSFORM_MOVE",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector: ".slider_body-text.slide-7-intro-text",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                  //           ],
                  //         },
                  //         yValue: 0,
                  //         xUnit: "PX",
                  //         yUnit: "px",
                  //         zUnit: "PX",
                  //       },
                  //     },
                  //     {
                  //       id: "a-23-n-28",
                  //       actionTypeId: "STYLE_OPACITY",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector: ".slider_body-text.slide-7-intro-text",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                  //           ],
                  //         },
                  //         value: 1,
                  //         unit: "",
                  //       },
                  //     },
                  //     {
                  //       id: "a-23-n-30",
                  //       actionTypeId: "TRANSFORM_MOVE",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector:
                  //             ".slider_body-text.slide-7-colour-text.investments",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "58830f80-4fc0-3589-b6fb-80b7ff76762a",
                  //             "4d1c5be1-b35b-d345-841a-81f521a9f565",
                  //           ],
                  //         },
                  //         yValue: 0,
                  //         xUnit: "PX",
                  //         yUnit: "px",
                  //         zUnit: "PX",
                  //       },
                  //     },
                  //   ],
                  // },
                  // {
                  //   keyframe: 63,
                  //   actionItems: [
                  //     {
                  //       id: "a-23-n-29",
                  //       actionTypeId: "STYLE_OPACITY",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector: ".slider_body-text.slide-7-intro-text",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                  //           ],
                  //         },
                  //         value: 0,
                  //         unit: "",
                  //       },
                  //     },
                  //     {
                  //       id: "a-23-n-31",
                  //       actionTypeId: "TRANSFORM_MOVE",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector:
                  //             ".slider_body-text.slide-7-colour-text.investments",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "58830f80-4fc0-3589-b6fb-80b7ff76762a",
                  //             "4d1c5be1-b35b-d345-841a-81f521a9f565",
                  //           ],
                  //         },
                  //         yValue: -200,
                  //         xUnit: "PX",
                  //         yUnit: "px",
                  //         zUnit: "PX",
                  //       },
                  //     },
                  //     {
                  //       id: "a-23-n-27",
                  //       actionTypeId: "TRANSFORM_MOVE",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector: ".slider_body-text.slide-7-intro-text",
                  //           selectorGuids: [
                  //             "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                  //             "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                  //           ],
                  //         },
                  //         yValue: -200,
                  //         xUnit: "PX",
                  //         yUnit: "px",
                  //         zUnit: "PX",
                  //       },
                  //     },
                  //   ],
                  // },
                  {
                    keyframe: 76,
                    actionItems: [
                      {
                        id: "a-23-n-32",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 77,
                    actionItems: [
                      {
                        id: "a-23-n-33",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".b2b-text",
                            selectorGuids: [
                              "40fe4b84-b81b-257d-7b70-2b8223c3ccf1",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".commerce-filled",
                            selectorGuids: [
                              "1f2d61b1-cb7f-8fc6-9684-576b791d1219",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".comerce-text",
                            selectorGuids: [
                              "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                            ],
                          },
                          xValue: 200,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  // {
                  //   keyframe: 78,
                  //   actionItems: [
                  //     {
                  //       id: "a-23-n-14",
                  //       actionTypeId: "STYLE_OPACITY",
                  //       config: {
                  //         delay: 0,
                  //         easing: "",
                  //         duration: 500,
                  //         target: {
                  //           useEventTarget: "CHILDREN",
                  //           selector: ".comerce-text",
                  //           selectorGuids: [
                  //             "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                  //           ],
                  //         },
                  //         value: 0,
                  //         unit: "",
                  //       },
                  //     },
                  //   ],
                  // },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-23-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".commerce-filled",
                            selectorGuids: [
                              "1f2d61b1-cb7f-8fc6-9684-576b791d1219",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      // {
                      //   id: "a-23-n-7",
                      //   actionTypeId: "TRANSFORM_MOVE",
                      //   config: {
                      //     delay: 0,
                      //     easing: "",
                      //     duration: 500,
                      //     target: {
                      //       useEventTarget: "CHILDREN",
                      //       selector: ".slider_body-text.slide-7-intro-text",
                      //       selectorGuids: [
                      //         "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                      //         "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                      //       ],
                      //     },
                      //     yValue: -100,
                      //     xUnit: "PX",
                      //     yUnit: "px",
                      //     zUnit: "PX",
                      //   },
                      // },
                      // {
                      //   id: "a-23-n-9",
                      //   actionTypeId: "STYLE_OPACITY",
                      //   config: {
                      //     delay: 0,
                      //     easing: "",
                      //     duration: 500,
                      //     target: {
                      //       useEventTarget: "CHILDREN",
                      //       selector: ".slider_body-text.slide-7-intro-text",
                      //       selectorGuids: [
                      //         "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                      //         "57b9d46f-ebf6-3b3f-c08e-04953cf1ee1a",
                      //       ],
                      //     },
                      //     value: 0,
                      //     unit: "",
                      //   },
                      // },
                      {
                        id: "a-23-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".comerce-text",
                            selectorGuids: [
                              "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".comerce-text",
                            selectorGuids: [
                              "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 83,
                    actionItems: [
                      {
                        id: "a-23-n-18",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_body-text.slide-8-intro-text",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-20",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".slider_body-text.slide-8-intro-text.investments",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                              "a114a162-b2e0-d9df-8503-d17c9b541561",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_body-text.slide-8-intro-text",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-24",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".slider_body-text.slide-8-intro-text.investments",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                              "a114a162-b2e0-d9df-8503-d17c9b541561",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 84,
                    actionItems: [
                      {
                        id: "a-23-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_body-text.slide-8-intro-text",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-23-n-25",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".slider_body-text.slide-8-intro-text.investments",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                              "a114a162-b2e0-d9df-8503-d17c9b541561",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 86,
                    actionItems: [
                      {
                        id: "a-23-n-19",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slider_body-text.slide-8-intro-text",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                            ],
                          },
                          yValue: -200,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-23-n-21",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".slider_body-text.slide-8-intro-text.investments",
                            selectorGuids: [
                              "c707a431-6579-c253-9cb2-2d9ff05aedb4",
                              "c705a120-8722-1c24-6579-704c04920ce4",
                              "a114a162-b2e0-d9df-8503-d17c9b541561",
                            ],
                          },
                          yValue: -200,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18095449da0,
          },
          "a-24": {
            id: "a-24",
            title: "Home Page Scene 4 Pt 3",
            continuousParameterGroups: [
              {
                id: "a-24-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 87,
                    actionItems: [
                      {
                        id: "a-24-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-bubbles-frame.commerce",
                            selectorGuids: [
                              "3aa67268-34b3-edd3-8a32-2a6b15f7bbff",
                              "84ee26ce-20a7-1997-f2da-6efe98efe3e5",
                            ],
                          },
                          yValue: 100,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 96,
                    actionItems: [
                      {
                        id: "a-24-n-18",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".contact_us-wrap.home",
                            selectorGuids: [
                              "69f74c2e-7ed2-99de-6cb9-a02cc6ef68ac",
                              "ad03e331-85d9-82c4-b23c-4a50ac1ab010",
                            ],
                          },
                          xValue: 101,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-24-n-20",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_foreground",
                            selectorGuids: [
                              "92b668bb-d8f7-da49-18b8-00c0f19b3113",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-24-n-22",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".back-link",
                            selectorGuids: [
                              "e4b55429-0d50-f05b-5e8a-00b6041a6828",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-24-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".slide-bubbles-frame.commerce",
                            selectorGuids: [
                              "3aa67268-34b3-edd3-8a32-2a6b15f7bbff",
                              "84ee26ce-20a7-1997-f2da-6efe98efe3e5",
                            ],
                          },
                          yValue: -200,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      // {
                      //   id: "a-24-n-24",
                      //   actionTypeId: "STYLE_OPACITY",
                      //   config: {
                      //     delay: 0,
                      //     easing: "",
                      //     duration: 500,
                      //     target: {
                      //       useEventTarget: "CHILDREN",
                      //       selector: ".comerce-text",
                      //       selectorGuids: [
                      //         "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                      //       ],
                      //     },
                      //     value: 1,
                      //     unit: "",
                      //   },
                      // },
                      {
                        id: "a-24-n-26",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_foreground",
                            selectorGuids: [
                              "92b668bb-d8f7-da49-18b8-00c0f19b3113",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 97,
                    actionItems: [
                      {
                        id: "a-24-n-19",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "SIBLINGS",
                            selector: ".contact_us-wrap.home",
                            selectorGuids: [
                              "69f74c2e-7ed2-99de-6cb9-a02cc6ef68ac",
                              "ad03e331-85d9-82c4-b23c-4a50ac1ab010",
                            ],
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-24-n-21",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_foreground",
                            selectorGuids: [
                              "92b668bb-d8f7-da49-18b8-00c0f19b3113",
                            ],
                          },
                          xValue: -10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-24-n-23",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".back-link",
                            selectorGuids: [
                              "e4b55429-0d50-f05b-5e8a-00b6041a6828",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      // {
                      //   id: "a-24-n-25",
                      //   actionTypeId: "STYLE_OPACITY",
                      //   config: {
                      //     delay: 0,
                      //     easing: "",
                      //     duration: 500,
                      //     target: {
                      //       useEventTarget: "CHILDREN",
                      //       selector: ".comerce-text",
                      //       selectorGuids: [
                      //         "3a1e7d36-9c65-f62c-bd57-4945cc84bd4f",
                      //       ],
                      //     },
                      //     value: 0,
                      //     unit: "",
                      //   },
                      // },
                      {
                        id: "a-24-n-27",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-4_foreground",
                            selectorGuids: [
                              "92b668bb-d8f7-da49-18b8-00c0f19b3113",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180956ca16a,
          },
          "a-25": {
            id: "a-25",
            title: "Contact Action Close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 700,
                      target: {
                        selector: ".contact_us-wrap",
                        selectorGuids: ["69f74c2e-7ed2-99de-6cb9-a02cc6ef68ac"],
                      },
                      xValue: 101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17ffeeca0f3,
          },
          "a-26": {
            id: "a-26",
            title: "Open Scene 2 Dropdowns",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sub_section-title",
                        selectorGuids: ["64b58f7c-f008-e351-6eb4-f41ae2c4fac6"],
                      },
                      xValue: -55,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-26-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scene-2-dropdown-content",
                        selectorGuids: ["e3e4e4de-29f3-84e8-5592-236cbdc49cf1"],
                      },
                      heightValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sub_section-title",
                        selectorGuids: ["64b58f7c-f008-e351-6eb4-f41ae2c4fac6"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-26-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scene-2-dropdown-content",
                        selectorGuids: ["e3e4e4de-29f3-84e8-5592-236cbdc49cf1"],
                      },
                      widthUnit: "px",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180a3d87bad,
          },
          "a-27": {
            id: "a-27",
            title: "Close Scene 2 Dropdowns",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".sub_section-title",
                        selectorGuids: ["64b58f7c-f008-e351-6eb4-f41ae2c4fac6"],
                      },
                      xValue: -55,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".scene-2-dropdown-content",
                        selectorGuids: ["e3e4e4de-29f3-84e8-5592-236cbdc49cf1"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180a3d87bad,
          },
          "a-30": {
            id: "a-30",
            title: "Home Scene 2 Bubbles",
            continuousParameterGroups: [
              {
                id: "a-30-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 18,
                    actionItems: [
                      {
                        id: "a-30-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|a21c8fe5-8299-149d-ee30-73b7214e4313",
                          },
                          xValue: 3,
                          yValue: 20,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|a21c8fe5-8299-149d-ee30-73b7214e4313",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-30-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|c74f8463-b0d3-5406-819f-4d5859231de7",
                          },
                          xValue: -7,
                          yValue: -32,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|c74f8463-b0d3-5406-819f-4d5859231de7",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-30-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|314a5445-21ea-e12d-cd54-10bb0edcec12",
                          },
                          xValue: -20,
                          yValue: 8,
                          xUnit: "vw",
                          yUnit: "vw",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-11",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|314a5445-21ea-e12d-cd54-10bb0edcec12",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 53,
                    actionItems: [
                      {
                        id: "a-30-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|a21c8fe5-8299-149d-ee30-73b7214e4313",
                          },
                          xValue: 59,
                          yValue: -7,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|a21c8fe5-8299-149d-ee30-73b7214e4313",
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-30-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|c74f8463-b0d3-5406-819f-4d5859231de7",
                          },
                          xValue: -5,
                          yValue: 90,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|c74f8463-b0d3-5406-819f-4d5859231de7",
                          },
                          xValue: 1.4,
                          yValue: 1.4,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-30-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|314a5445-21ea-e12d-cd54-10bb0edcec12",
                          },
                          xValue: -90,
                          yValue: -20,
                          xUnit: "vw",
                          yUnit: "vw",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-30-n-12",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6272e35f347eb7625804271c|314a5445-21ea-e12d-cd54-10bb0edcec12",
                          },
                          xValue: 0.6,
                          yValue: 0.6,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180a5143781,
          },
          "a-31": {
            id: "a-31",
            title: "Home Scene 3 Bubbles",
            continuousParameterGroups: [
              {
                id: "a-31-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-31-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-1",
                            selectorGuids: [
                              "38655db9-99f1-19c7-1ba2-5ef99a829131",
                            ],
                          },
                          xValue: -9,
                          yValue: 26,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-2",
                            selectorGuids: [
                              "4fa5e209-3248-6ddb-429a-911fa7b40a0d",
                            ],
                          },
                          xValue: -10,
                          yValue: -10,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-3",
                            selectorGuids: [
                              "8fb500ab-5f89-c6c0-d514-5594302fbad3",
                            ],
                          },
                          xValue: 8,
                          yValue: 10,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-2",
                            selectorGuids: [
                              "4fa5e209-3248-6ddb-429a-911fa7b40a0d",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-31-n-9",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-1",
                            selectorGuids: [
                              "38655db9-99f1-19c7-1ba2-5ef99a829131",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-31-n-11",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-3",
                            selectorGuids: [
                              "8fb500ab-5f89-c6c0-d514-5594302fbad3",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 52,
                    actionItems: [
                      {
                        id: "a-31-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-1",
                            selectorGuids: [
                              "38655db9-99f1-19c7-1ba2-5ef99a829131",
                            ],
                          },
                          xValue: 60,
                          yValue: 35,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-2",
                            selectorGuids: [
                              "4fa5e209-3248-6ddb-429a-911fa7b40a0d",
                            ],
                          },
                          xValue: -90,
                          yValue: 10,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-3",
                            selectorGuids: [
                              "8fb500ab-5f89-c6c0-d514-5594302fbad3",
                            ],
                          },
                          xValue: 10,
                          yValue: -70,
                          xUnit: "vw",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-31-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-2",
                            selectorGuids: [
                              "4fa5e209-3248-6ddb-429a-911fa7b40a0d",
                            ],
                          },
                          xValue: 2,
                          yValue: 2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-31-n-10",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-1",
                            selectorGuids: [
                              "38655db9-99f1-19c7-1ba2-5ef99a829131",
                            ],
                          },
                          xValue: 0.2,
                          yValue: 0.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-31-n-12",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".scene-3-circle-3",
                            selectorGuids: [
                              "8fb500ab-5f89-c6c0-d514-5594302fbad3",
                            ],
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180a53863d6,
          },
          "a-32": {
            id: "a-32",
            title: "Portfolio Load",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6272e35f347eb766f804272c|9bda68f7-0d3b-d5db-8f2b-586e546bd866",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180aec27e33,
          },
          "a-33": {
            id: "a-33",
            title: "Back Button Hidder",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      xValue: -101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-33-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "",
                      duration: 100,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      xValue: -101,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-33-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "",
                      duration: 100,
                      target: {
                        selector: ".back-hide",
                        selectorGuids: ["1c6dc071-ab02-0706-56be-afff263d37ac"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180aeea50f9,
          },
          "a-35": {
            id: "a-35",
            title: "About Section Load Paragraphs",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_1",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "cb99d78b-0a34-6a70-61dd-e4b33b9fb304",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_2",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "df7f9180-715d-20ae-fe94-150d4f3b9529",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_3",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "93126b3c-689d-4f52-86c2-9ee0ac5ddb32",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_4",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "c8fdc8de-bf1b-206b-c7e3-7e1199ae2b52",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_5",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "38530efd-8713-bfa2-8dfb-72b00713963d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_1",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "cb99d78b-0a34-6a70-61dd-e4b33b9fb304",
                        ],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-35-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_2",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "df7f9180-715d-20ae-fe94-150d4f3b9529",
                        ],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-35-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_3",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "93126b3c-689d-4f52-86c2-9ee0ac5ddb32",
                        ],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-35-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_4",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "c8fdc8de-bf1b-206b-c7e3-7e1199ae2b52",
                        ],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-35-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_5",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "38530efd-8713-bfa2-8dfb-72b00713963d",
                        ],
                      },
                      yValue: 20,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_1",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "cb99d78b-0a34-6a70-61dd-e4b33b9fb304",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_1",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "cb99d78b-0a34-6a70-61dd-e4b33b9fb304",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_2",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "df7f9180-715d-20ae-fe94-150d4f3b9529",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_2",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "df7f9180-715d-20ae-fe94-150d4f3b9529",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_3",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "93126b3c-689d-4f52-86c2-9ee0ac5ddb32",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_3",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "93126b3c-689d-4f52-86c2-9ee0ac5ddb32",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_4",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "c8fdc8de-bf1b-206b-c7e3-7e1199ae2b52",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-19",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_4",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "c8fdc8de-bf1b-206b-c7e3-7e1199ae2b52",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_5",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "38530efd-8713-bfa2-8dfb-72b00713963d",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-35-n-20",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about_floating_block.float_5",
                        selectorGuids: [
                          "0a3bc837-55e9-a0ca-b547-fd5aa20d6751",
                          "38530efd-8713-bfa2-8dfb-72b00713963d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180b2e22201,
          },
          "a-15": {
            id: "a-15",
            title: "About Scroll",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-outline",
                            selectorGuids: [
                              "0162bd72-6290-47c7-be65-11f1073c9f2f",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-filled",
                            selectorGuids: [
                              "474043c2-9714-5e52-fcdd-01dc35e2f622",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators_outline",
                            selectorGuids: [
                              "730b18bc-a29a-6756-b101-53f946b0e12b",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-22",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          heightValue: 0,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-15-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-outline",
                            selectorGuids: [
                              "0162bd72-6290-47c7-be65-11f1073c9f2f",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-5",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-filled",
                            selectorGuids: [
                              "474043c2-9714-5e52-fcdd-01dc35e2f622",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-7",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-2",
                            selectorGuids: [
                              "4db27338-c462-99e2-0032-4e0145194fe4",
                            ],
                          },
                          heightValue: 0,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-15-n-11",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-2",
                            selectorGuids: [
                              "4db27338-c462-99e2-0032-4e0145194fe4",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 24,
                    actionItems: [
                      {
                        id: "a-15-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-outline",
                            selectorGuids: [
                              "0162bd72-6290-47c7-be65-11f1073c9f2f",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-6",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".experienced-filled",
                            selectorGuids: [
                              "474043c2-9714-5e52-fcdd-01dc35e2f622",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-15-n-10",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-2",
                            selectorGuids: [
                              "4db27338-c462-99e2-0032-4e0145194fe4",
                            ],
                          },
                          heightValue: 7,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-15-n-12",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-2",
                            selectorGuids: [
                              "4db27338-c462-99e2-0032-4e0145194fe4",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33,
                    actionItems: [
                      {
                        id: "a-15-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-2",
                            selectorGuids: [
                              "4db27338-c462-99e2-0032-4e0145194fe4",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-15",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators-filled",
                            selectorGuids: [
                              "7f7c9853-842e-e9f8-c4d4-3477eab7baeb",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-15-n-23",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          heightValue: 7,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-15-n-19",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators-filled",
                            selectorGuids: [
                              "7f7c9853-842e-e9f8-c4d4-3477eab7baeb",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 55,
                    actionItems: [
                      {
                        id: "a-15-n-17",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators_outline",
                            selectorGuids: [
                              "730b18bc-a29a-6756-b101-53f946b0e12b",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 62,
                    actionItems: [
                      {
                        id: "a-15-n-24",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          heightValue: 7,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-15-n-25",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                      {
                        id: "a-15-n-16",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators-filled",
                            selectorGuids: [
                              "7f7c9853-842e-e9f8-c4d4-3477eab7baeb",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 63,
                    actionItems: [
                      {
                        id: "a-15-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".operators_outline",
                            selectorGuids: [
                              "730b18bc-a29a-6756-b101-53f946b0e12b",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 65,
                    actionItems: [
                      {
                        id: "a-15-n-26",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".frame_item-3",
                            selectorGuids: [
                              "d3af327e-0652-1cc6-b91a-f83621c61d87",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1802325f7b6,
          },
          "a-36": {
            id: "a-36",
            title: "About Scroll 2",
            continuousParameterGroups: [
              {
                id: "a-36-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 85,
                    actionItems: [
                      {
                        id: "a-36-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-piston-1",
                            selectorGuids: [
                              "9042504a-1842-ee8a-d051-6e5fae252d37",
                            ],
                          },
                          heightValue: 40,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-36-n-2",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-piston-1",
                            selectorGuids: [
                              "9042504a-1842-ee8a-d051-6e5fae252d37",
                            ],
                          },
                          heightValue: 0,
                          widthUnit: "PX",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180b39314f3,
          },
          "a-37": {
            id: "a-37",
            title: "About Circle Scroll",
            continuousParameterGroups: [
              {
                id: "a-37-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-37-n",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "b566",
                              value: 16,
                              unit: "px",
                            },
                          ],
                        },
                      },
                      {
                        id: "a-37-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          xValue: 30,
                          yValue: -20,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-37-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 90,
                    actionItems: [
                      {
                        id: "a-37-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          xValue: 0.5,
                          yValue: 0.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-37-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          xValue: -150,
                          yValue: 80,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-37-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".circle-frame",
                            selectorGuids: [
                              "d6a6fa71-d335-fb21-20ad-a86617384a1a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 99,
                    actionItems: [
                      {
                        id: "a-37-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".circle-frame",
                            selectorGuids: [
                              "d6a6fa71-d335-fb21-20ad-a86617384a1a",
                            ],
                          },
                          yValue: -75,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-37-n-2",
                        actionTypeId: "STYLE_FILTER",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".image-21",
                            selectorGuids: [
                              "bf23d207-039b-d9f9-ef25-76d938aade32",
                            ],
                          },
                          filters: [
                            {
                              type: "blur",
                              filterId: "a019",
                              value: 0,
                              unit: "px",
                            },
                          ],
                        },
                      },
                      {
                        id: "a-37-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".circle-frame",
                            selectorGuids: [
                              "d6a6fa71-d335-fb21-20ad-a86617384a1a",
                            ],
                          },
                          yValue: -100,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180b3a4d547,
          },
          "a-38": {
            id: "a-38",
            title: "Contact Form Wait",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-38-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      yValue: 40,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-38-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180b7398966,
          },
          "a-39": {
            id: "a-39",
            title: "Contact Form Load",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      yValue: 40,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-39-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-39-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        id: "627a3d305a5be550f24ebcf1|a985be11-300a-6529-00cb-babcbf637881",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180b73a4bcd,
          },
          "a-40": {
            id: "a-40",
            title: "Resize Nav",
            continuousParameterGroups: [
              {
                id: "a-40-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-40-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".logo_desktop",
                            selectorGuids: [
                              "05b41849-466b-7a06-cd58-04587524b623",
                            ],
                          },
                          heightValue: 44,
                          widthUnit: "AUTO",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sidebar_menu",
                            selectorGuids: [
                              "63cf78b5-b3df-5eba-0b23-8b1c7ab59942",
                            ],
                          },
                          heightValue: 80,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-5",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "8a6d156a-72d3-d401-a666-c9cc6773730a",
                          },
                          widthValue: 80,
                          heightValue: 80,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-7",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "8a6d156a-72d3-d401-a666-c9cc6773730f",
                          },
                          widthValue: 80,
                          heightValue: 80,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 2,
                    actionItems: [
                      {
                        id: "a-40-n-2",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".logo_desktop",
                            selectorGuids: [
                              "05b41849-466b-7a06-cd58-04587524b623",
                            ],
                          },
                          heightValue: 18,
                          widthUnit: "AUTO",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-4",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".sidebar_menu",
                            selectorGuids: [
                              "63cf78b5-b3df-5eba-0b23-8b1c7ab59942",
                            ],
                          },
                          heightValue: 40,
                          widthUnit: "PX",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-6",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "8a6d156a-72d3-d401-a666-c9cc6773730a",
                          },
                          widthValue: 40,
                          heightValue: 40,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-40-n-8",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "8a6d156a-72d3-d401-a666-c9cc6773730f",
                          },
                          widthValue: 40,
                          heightValue: 40,
                          widthUnit: "px",
                          heightUnit: "px",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180b91de9e0,
          },
          "a-41": {
            id: "a-41",
            title: "Device Menu Colour Change to Dark",
            continuousParameterGroups: [
              {
                id: "a-41-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-41-n",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "393d86f1",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.15,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 1,
                    actionItems: [
                      {
                        id: "a-41-n-2",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.7,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180bca8dd29,
          },
          "a-42": {
            id: "a-42",
            title: "Device Menu Colour Change to Dark 2",
            continuousParameterGroups: [
              {
                id: "a-42-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-42-n-2",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.7,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 1,
                    actionItems: [
                      {
                        id: "a-42-n",
                        actionTypeId: "STYLE_BACKGROUND_COLOR",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".sidebar_menu-wrap",
                            selectorGuids: [
                              "82e1075a-3a5c-e31d-b75e-b51d97e2cc2e",
                            ],
                          },
                          globalSwatchId: "393d86f1",
                          rValue: 20,
                          bValue: 129,
                          gValue: 26,
                          aValue: 0.15,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x180bca8dd29,
          },
          "a-43": {
            id: "a-43",
            title: "Homepage Device Hero Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-forground-text",
                        selectorGuids: ["79c19899-fb2a-486e-e032-ca681b95084a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-43-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-43-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2e3,
                      easing: "outExpo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-forground-text",
                        selectorGuids: ["79c19899-fb2a-486e-e032-ca681b95084a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-43-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 2e3,
                      easing: "outExpo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-43-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 2e3,
                      easing: "outExpo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      xValue: 0.6,
                      yValue: 0.6,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180bcb72c7e,
          },
          "a-44": {
            id: "a-44",
            title: "Homepage Device Hero Animation 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-44-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-forground-text",
                        selectorGuids: ["79c19899-fb2a-486e-e032-ca681b95084a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-44-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-44-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".device-background-text",
                        selectorGuids: ["c06bda93-08c1-9745-9875-27331ff03d4d"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180bcb72c7e,
          },
          "a-45": {
            id: "a-45",
            title: "Home Device Dropdowns Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-45-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 135,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-45-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180c88932c9,
          },
          "a-46": {
            id: "a-46",
            title: "Home Device Dropdowns Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-46-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-text",
                        selectorGuids: ["48e2ba0b-328c-689d-b0dd-06b20a14279b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".close-text",
                        selectorGuids: ["6e98a16a-ee44-782a-43d1-f550ec03757f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".read_more-icon",
                        selectorGuids: ["d7e33396-2c89-b4ec-0717-405604e8d35b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180c88932c9,
          },
          "a-47": {
            id: "a-47",
            title: "Founder Spotlight [Over]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overflow_hidden",
                        selectorGuids: ["5a07bc88-6589-e07b-e49b-1a132575d611"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-47-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_overlay-grad",
                        selectorGuids: ["1b2f15d2-4869-e5d1-28be-9e94a09171d0"],
                      },
                      widthValue: 100,
                      heightValue: 150,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-47-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background_overlay",
                        selectorGuids: ["f6f01a71-fd4e-8905-1e74-f995d9d56a42"],
                      },
                      value: 0.2,
                      unit: "",
                    },
                  },
                  {
                    id: "a-47-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_img-contain",
                        selectorGuids: ["0805c957-5d58-441c-a0af-d9e86507e5cf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-47-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_image-wrapper",
                        selectorGuids: ["0e06dda3-ddb3-0af6-2300-c7924b78644b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-47-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overflow_hidden",
                        selectorGuids: ["5a07bc88-6589-e07b-e49b-1a132575d611"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-47-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_overlay-grad",
                        selectorGuids: ["1b2f15d2-4869-e5d1-28be-9e94a09171d0"],
                      },
                      widthValue: 100,
                      heightValue: 110,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-47-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background_overlay",
                        selectorGuids: ["f6f01a71-fd4e-8905-1e74-f995d9d56a42"],
                      },
                      value: 0.3,
                      unit: "",
                    },
                  },
                  {
                    id: "a-47-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_img-contain",
                        selectorGuids: ["0805c957-5d58-441c-a0af-d9e86507e5cf"],
                      },
                      xValue: 1.03,
                      yValue: 1.03,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-47-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 700,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_image-wrapper",
                        selectorGuids: ["0e06dda3-ddb3-0af6-2300-c7924b78644b"],
                      },
                      xValue: 0.97,
                      yValue: 0.97,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ea5734c42,
          },
          "a-48": {
            id: "a-48",
            title: "Founder Spotlight [leave]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".overflow_hidden",
                        selectorGuids: ["5a07bc88-6589-e07b-e49b-1a132575d611"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-48-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_overlay-grad",
                        selectorGuids: ["1b2f15d2-4869-e5d1-28be-9e94a09171d0"],
                      },
                      widthValue: 100,
                      heightValue: 150,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-48-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background_overlay",
                        selectorGuids: ["f6f01a71-fd4e-8905-1e74-f995d9d56a42"],
                      },
                      value: 0.2,
                      unit: "",
                    },
                  },
                  {
                    id: "a-48-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_img-contain",
                        selectorGuids: ["0805c957-5d58-441c-a0af-d9e86507e5cf"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-48-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".founder-spotlight_image-wrapper",
                        selectorGuids: ["0e06dda3-ddb3-0af6-2300-c7924b78644b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea5734c42,
          },
          "a-49": {
            id: "a-49",
            title: "Circle Arrow Link [Over]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-embed-xxsmall",
                        selectorGuids: ["c2669f70-7a81-9c81-1869-1851c8441aba"],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-49-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-embed-xxsmall",
                        selectorGuids: ["c2669f70-7a81-9c81-1869-1851c8441aba"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea5b33325,
          },
          "a-50": {
            id: "a-50",
            title: "Logo Bubble Scroll",
            continuousParameterGroups: [
              {
                id: "a-50-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-50-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                          },
                          value: 0.3,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 22.5,
                    actionItems: [
                      {
                        id: "a-50-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "easeIn",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-50-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-50-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "easeOut",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "3bd317cd-ac9c-817d-0ec0-19c81d0b7ad2",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18ea661731d,
          },
          "a-7": {
            id: "a-7",
            title: "Careers Item Hover | In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".cms_dynamic-border-box",
                        selectorGuids: ["c9d5b9c4-893c-df17-f442-d72f11ef5bd0"],
                      },
                      globalSwatchId: "9ff30540",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-green",
                        selectorGuids: ["77f503d5-d299-40d4-5c7a-34aefd89a6f2"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-title",
                        selectorGuids: ["1110d5cc-62fd-e419-3f36-3bb78cecf892"],
                      },
                      globalSwatchId: "d9c38a26",
                      rValue: 17,
                      bValue: 17,
                      gValue: 17,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-7-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job-list-image_hover",
                        selectorGuids: ["ea2c3adc-0ecc-2b70-4ebd-d81f9d04e89b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-image",
                        selectorGuids: ["7fb80e57-b471-d646-f8ff-785c09870c1c"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-white",
                        selectorGuids: ["d83fa4b4-cbcf-4609-fd13-592e5a7708f9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".cms_dynamic-border-box",
                        selectorGuids: ["c9d5b9c4-893c-df17-f442-d72f11ef5bd0"],
                      },
                      globalSwatchId: "c1e99fc5",
                      rValue: 0,
                      bValue: 158,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-green",
                        selectorGuids: ["77f503d5-d299-40d4-5c7a-34aefd89a6f2"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-title",
                        selectorGuids: ["1110d5cc-62fd-e419-3f36-3bb78cecf892"],
                      },
                      globalSwatchId: "9ff30540",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-7-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job-list-image_hover",
                        selectorGuids: ["ea2c3adc-0ecc-2b70-4ebd-d81f9d04e89b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-image",
                        selectorGuids: ["7fb80e57-b471-d646-f8ff-785c09870c1c"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-white",
                        selectorGuids: ["d83fa4b4-cbcf-4609-fd13-592e5a7708f9"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17fbda3c52d,
          },
          "a-8": {
            id: "a-8",
            title: "Careers Item Hover | Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".cms_dynamic-border-box",
                        selectorGuids: ["c9d5b9c4-893c-df17-f442-d72f11ef5bd0"],
                      },
                      globalSwatchId: "9ff30540",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-white",
                        selectorGuids: ["d83fa4b4-cbcf-4609-fd13-592e5a7708f9"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".link-green",
                        selectorGuids: ["77f503d5-d299-40d4-5c7a-34aefd89a6f2"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-title",
                        selectorGuids: ["1110d5cc-62fd-e419-3f36-3bb78cecf892"],
                      },
                      globalSwatchId: "d9c38a26",
                      rValue: 17,
                      bValue: 17,
                      gValue: 17,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job_list-image",
                        selectorGuids: ["7fb80e57-b471-d646-f8ff-785c09870c1c"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".job-list-image_hover",
                        selectorGuids: ["ea2c3adc-0ecc-2b70-4ebd-d81f9d04e89b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17fbda3c52d,
          },
          "a-51": {
            id: "a-51",
            title: "Banner Arrow [Hover]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-51-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".clip-arrow",
                        selectorGuids: ["6032b2b4-6f3f-3fdc-9d43-119368b61307"],
                      },
                      xValue: 100,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-51-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".clip-arrow",
                        selectorGuids: ["6032b2b4-6f3f-3fdc-9d43-119368b61307"],
                      },
                      xValue: 0,
                      yValue: null,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ea5b33325,
          },
          "a-52": {
            id: "a-52",
            title: "Banner Glow [Grow]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-52-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".homepage_banner-glow",
                        selectorGuids: ["ec002dc7-bc9c-83d6-9fbe-c9f9f684c751"],
                      },
                      value: 0.1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-52-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".homepage_banner-glow",
                        selectorGuids: ["ec002dc7-bc9c-83d6-9fbe-c9f9f684c751"],
                      },
                      value: 0.35,
                      unit: "",
                    },
                  },
                  {
                    id: "a-52-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".homepage_banner-glow",
                        selectorGuids: ["ec002dc7-bc9c-83d6-9fbe-c9f9f684c751"],
                      },
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192b56f5aef,
          },
          "a-53": {
            id: "a-53",
            title: "Banner Glow [Shrink]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".homepage_banner-glow",
                        selectorGuids: ["ec002dc7-bc9c-83d6-9fbe-c9f9f684c751"],
                      },
                      value: 0.1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-53-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".homepage_banner-glow",
                        selectorGuids: ["ec002dc7-bc9c-83d6-9fbe-c9f9f684c751"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192b56f5aef,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
