import {
  AccordionChevron,
  ActionIcon,
  Box,
  CheckIcon,
  CloseButton,
  Input,
  InputBase,
  Modal,
  Popover,
  UnstyledButton,
  createVarsResolver,
  factory,
  getFontSize,
  getSize,
  getSpacing,
  useInputProps,
  useProps,
  useResolvedStylesApi,
  useStyles
} from "./chunk-2CSGMQ4Z.js";
import {
  clamp,
  useDidUpdate,
  useDisclosure,
  useMergedRef,
  useUncontrolled
} from "./chunk-2I7PVGSB.js";
import "./chunk-7EJ2HHV3.js";
import "./chunk-6EEL643C.js";
import {
  require_react
} from "./chunk-XCERESLX.js";
import {
  __commonJS,
  __toESM
} from "./chunk-J32WSRGE.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r2 = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r3 = String(t2);
        return !r3 || r3.length >= e2 ? t2 : "" + Array(e2 + 1 - r3.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r3 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r3 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r3, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r3 + (s2 ? -1 : 1), c);
        return +(-(r3 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r2, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r3) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r3 && i2 && (g = i2), i2 || !r3 && g;
      }, O = function(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r3 = e2.match($);
              if (r3) {
                var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r3 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r3 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r3 ? l2(1, 0) : l2(31, 11);
            case c:
              return r3 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r2] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r3, f2) {
          var d2, l2 = this;
          r3 = Number(r3);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r3)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r3);
          if ($2 === h)
            return this.set(h, this.$y + r3);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r3 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r3)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r4 = t3 < 12 ? "AM" : "PM";
            return n3 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y, function(t3, r4) {
            return r4 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r3, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r3 = w(t2, e2, true);
          return r3 && (n2.$L = r3), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/dayjs/plugin/timezone.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    }(exports, function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r2, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r3 = function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r4 = e[o3];
            return r4 || (r4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r4), r4;
          }(n2, i2);
          return r3.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r3 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r3[c] = parseInt(m, 10));
          }
          var d = r3[3], l = 24 === d ? 0 : d, h = r3[0] + "-" + r3[1] + "-" + r3[2] + " " + l + ":" + r3[4] + ":" + r3[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r2);
          var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f2 = o(a2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u2, true);
          if (e2) {
            var s2 = f2.utcOffset();
            f2 = f2.add(n2 - s2, "minute");
          }
          return f2.$x.$timezone = t2, f2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          });
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone)
            return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r2, f2 = u(+o(), a2);
          if ("string" != typeof t2)
            return o(t2).tz(a2);
          var s2 = function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2)
              return [i3, e3];
            var r3 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r3 ? [i3, o2] : [t3 - 60 * Math.min(o2, r3) * 1e3, Math.max(o2, r3)];
          }(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r2 = t2;
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports, module) {
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r2 = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else
            r2.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2))
            return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3)
              return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2))
            return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f2)
            return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r3, t)).$offset = u2, o2.$x.$localOffset = r3;
          } else
            o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u)
            return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    });
  }
});

// node_modules/@mantine/dates/esm/utils/get-formatted-date.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
function defaultDateFormatter({
  type,
  date,
  locale,
  format,
  labelSeparator
}) {
  const formatDate = (value) => (0, import_dayjs.default)(value).locale(locale).format(format);
  if (type === "default") {
    return date === null ? "" : formatDate(date);
  }
  if (type === "multiple") {
    return date.map(formatDate).join(", ");
  }
  if (type === "range" && Array.isArray(date)) {
    if (date[0] && date[1]) {
      return `${formatDate(date[0])} ${labelSeparator} ${formatDate(date[1])}`;
    }
    if (date[0]) {
      return `${formatDate(date[0])} ${labelSeparator} `;
    }
    return "";
  }
  return "";
}
function getFormattedDate({ formatter, ...others }) {
  return (formatter || defaultDateFormatter)(others);
}

// node_modules/@mantine/dates/esm/utils/handle-control-key-down.mjs
function getNextIndex({ direction, levelIndex, rowIndex, cellIndex, size }) {
  switch (direction) {
    case "up":
      if (levelIndex === 0 && rowIndex === 0) {
        return null;
      }
      if (rowIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: cellIndex <= size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1 ? size[levelIndex - 1].length - 1 : size[levelIndex - 1].length - 2,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex - 1,
        cellIndex
      };
    case "down":
      if (rowIndex === size[levelIndex].length - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      if (rowIndex === size[levelIndex].length - 2 && cellIndex >= size[levelIndex][size[levelIndex].length - 1]) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex
        };
      }
      return {
        levelIndex,
        rowIndex: rowIndex + 1,
        cellIndex
      };
    case "left":
      if (levelIndex === 0 && rowIndex === 0 && cellIndex === 0) {
        return null;
      }
      if (rowIndex === 0 && cellIndex === 0) {
        return {
          levelIndex: levelIndex - 1,
          rowIndex: size[levelIndex - 1].length - 1,
          cellIndex: size[levelIndex - 1][size[levelIndex - 1].length - 1] - 1
        };
      }
      if (cellIndex === 0) {
        return {
          levelIndex,
          rowIndex: rowIndex - 1,
          cellIndex: size[levelIndex][rowIndex - 1] - 1
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex - 1
      };
    case "right":
      if (rowIndex === size[levelIndex].length - 1 && cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex: levelIndex + 1,
          rowIndex: 0,
          cellIndex: 0
        };
      }
      if (cellIndex === size[levelIndex][rowIndex] - 1) {
        return {
          levelIndex,
          rowIndex: rowIndex + 1,
          cellIndex: 0
        };
      }
      return {
        levelIndex,
        rowIndex,
        cellIndex: cellIndex + 1
      };
    default:
      return { levelIndex, rowIndex, cellIndex };
  }
}
function focusOnNextFocusableControl({
  controlsRef,
  direction,
  levelIndex,
  rowIndex,
  cellIndex,
  size
}) {
  var _a, _b, _c;
  const nextIndex = getNextIndex({ direction, size, rowIndex, cellIndex, levelIndex });
  if (!nextIndex) {
    return;
  }
  const controlToFocus = (_c = (_b = (_a = controlsRef.current) == null ? void 0 : _a[nextIndex.levelIndex]) == null ? void 0 : _b[nextIndex.rowIndex]) == null ? void 0 : _c[nextIndex.cellIndex];
  if (!controlToFocus) {
    return;
  }
  if (controlToFocus.disabled || controlToFocus.getAttribute("data-hidden") || controlToFocus.getAttribute("data-outside")) {
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex: nextIndex.levelIndex,
      cellIndex: nextIndex.cellIndex,
      rowIndex: nextIndex.rowIndex,
      size
    });
  } else {
    controlToFocus.focus();
  }
}
function getDirection(key) {
  switch (key) {
    case "ArrowDown":
      return "down";
    case "ArrowUp":
      return "up";
    case "ArrowRight":
      return "right";
    case "ArrowLeft":
      return "left";
    default:
      return null;
  }
}
function getControlsSize(controlsRef) {
  var _a;
  return (_a = controlsRef.current) == null ? void 0 : _a.map((column) => column.map((row) => row.length));
}
function handleControlKeyDown({
  controlsRef,
  levelIndex,
  rowIndex,
  cellIndex,
  event
}) {
  const direction = getDirection(event.key);
  if (direction) {
    event.preventDefault();
    const size = getControlsSize(controlsRef);
    focusOnNextFocusableControl({
      controlsRef,
      direction,
      levelIndex,
      rowIndex,
      cellIndex,
      size
    });
  }
}

// node_modules/@mantine/dates/esm/utils/assign-time/assign-time.mjs
function assignTime(originalDate, resultDate) {
  if (!originalDate || !resultDate) {
    return resultDate;
  }
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  const ms = originalDate.getMilliseconds();
  const result = new Date(resultDate);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(ms);
  return result;
}

// node_modules/@mantine/dates/esm/utils/get-default-clamped-date.mjs
var import_dayjs4 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
var import_dayjs3 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/utils/get-timezone-offset.mjs
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var import_timezone = __toESM(require_timezone(), 1);
var import_utc = __toESM(require_utc(), 1);
import_dayjs2.default.extend(import_utc.default);
import_dayjs2.default.extend(import_timezone.default);
function getTimezoneOffset(date, timezone) {
  if (timezone) {
    return (0, import_dayjs2.default)(date).tz(timezone).utcOffset() + date.getTimezoneOffset();
  }
  return 0;
}

// node_modules/@mantine/dates/esm/utils/shift-timezone.mjs
var updateTimezone = (date, timezone, direction) => {
  if (!date) {
    return null;
  }
  if (!timezone) {
    return date;
  }
  let offset = getTimezoneOffset(date, timezone);
  if (direction === "remove") {
    offset *= -1;
  }
  return (0, import_dayjs3.default)(date).add(offset, "minutes").toDate();
};
function shiftTimezone(direction, date, timezone, disabled) {
  if (disabled || !date) {
    return date;
  }
  if (Array.isArray(date)) {
    return date.map((d) => updateTimezone(d, timezone, direction));
  }
  return updateTimezone(date, timezone, direction);
}

// node_modules/@mantine/dates/esm/utils/get-default-clamped-date.mjs
function getDefaultClampedDate({ minDate, maxDate, timezone }) {
  const today = shiftTimezone("add", /* @__PURE__ */ new Date(), timezone);
  if (!minDate && !maxDate) {
    return today;
  }
  if (minDate && (0, import_dayjs4.default)(today).isBefore(minDate)) {
    return minDate;
  }
  if (maxDate && (0, import_dayjs4.default)(today).isAfter(maxDate)) {
    return maxDate;
  }
  return today;
}

// node_modules/@mantine/dates/esm/components/DatesProvider/DatesProvider.mjs
var import_react = __toESM(require_react(), 1);
var DATES_PROVIDER_DEFAULT_SETTINGS = {
  locale: "en",
  timezone: null,
  firstDayOfWeek: 1,
  weekendDays: [0, 6],
  labelSeparator: "–",
  consistentWeeks: false
};
var DatesProviderContext = (0, import_react.createContext)(DATES_PROVIDER_DEFAULT_SETTINGS);
function DatesProvider({ settings, children }) {
  return import_react.default.createElement(DatesProviderContext.Provider, { value: { ...DATES_PROVIDER_DEFAULT_SETTINGS, ...settings } }, children);
}

// node_modules/@mantine/dates/esm/components/DatesProvider/use-dates-context.mjs
var import_react2 = __toESM(require_react(), 1);
function useDatesContext() {
  const ctx = (0, import_react2.useContext)(DatesProviderContext);
  const getLocale = (0, import_react2.useCallback)((input) => input || ctx.locale, [ctx.locale]);
  const getTimezone = (0, import_react2.useCallback)(
    (input) => input || ctx.timezone || void 0,
    [ctx.timezone]
  );
  const getFirstDayOfWeek = (0, import_react2.useCallback)(
    (input) => typeof input === "number" ? input : ctx.firstDayOfWeek,
    [ctx.firstDayOfWeek]
  );
  const getWeekendDays = (0, import_react2.useCallback)(
    (input) => Array.isArray(input) ? input : ctx.weekendDays,
    [ctx.weekendDays]
  );
  const getLabelSeparator = (0, import_react2.useCallback)(
    (input) => typeof input === "string" ? input : ctx.labelSeparator,
    [ctx.labelSeparator]
  );
  return {
    ...ctx,
    getLocale,
    getTimezone,
    getFirstDayOfWeek,
    getWeekendDays,
    getLabelSeparator
  };
}

// node_modules/@mantine/dates/esm/components/HiddenDatesInput/HiddenDatesInput.mjs
var import_react3 = __toESM(require_react(), 1);
function formatValue(value, type) {
  if (type === "range" && Array.isArray(value)) {
    const [startDate, endDate] = value;
    if (!startDate) {
      return "";
    }
    if (!endDate) {
      return `${startDate.toISOString()} –`;
    }
    return `${startDate.toISOString()} – ${endDate.toISOString()}`;
  }
  if (type === "multiple" && Array.isArray(value)) {
    return value.map((date) => date == null ? void 0 : date.toISOString()).filter(Boolean).join(", ");
  }
  if (!Array.isArray(value) && value) {
    return value.toISOString();
  }
  return "";
}
function HiddenDatesInput({ value, type, name, form }) {
  return import_react3.default.createElement("input", { type: "hidden", value: formatValue(value, type), name, form });
}
HiddenDatesInput.displayName = "@mantine/dates/HiddenDatesInput";

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.module.css.mjs
var classes = { "input": "m_468e7eda" };

// node_modules/@mantine/dates/esm/components/TimeInput/TimeInput.mjs
var defaultProps = {};
var TimeInput = factory((_props, ref) => {
  const props = useProps("TimeInput", defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withSeconds,
    minTime,
    maxTime,
    value,
    onChange,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const checkIfTimeLimitExceeded = (val) => {
    if (minTime !== void 0 || maxTime !== void 0) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      if (minTime) {
        const [minHours, minMinutes, minSeconds] = minTime.split(":").map(Number);
        if (hours < minHours || hours === minHours && minutes < minMinutes || withSeconds && hours === minHours && minutes === minMinutes && seconds < minSeconds) {
          return -1;
        }
      }
      if (maxTime) {
        const [maxHours, maxMinutes, maxSeconds] = maxTime.split(":").map(Number);
        if (hours > maxHours || hours === maxHours && minutes > maxMinutes || withSeconds && hours === maxHours && minutes === maxMinutes && seconds > maxSeconds) {
          return 1;
        }
      }
    }
    return 0;
  };
  const onTimeBlur = (event) => {
    var _a, _b, _c;
    (_a = props.onBlur) == null ? void 0 : _a.call(props, event);
    if (minTime !== void 0 || maxTime !== void 0) {
      const val = event.currentTarget.value;
      if (val) {
        const check = checkIfTimeLimitExceeded(val);
        if (check === 1) {
          event.currentTarget.value = maxTime;
          (_b = props.onChange) == null ? void 0 : _b.call(props, event);
        } else if (check === -1) {
          event.currentTarget.value = minTime;
          (_c = props.onChange) == null ? void 0 : _c.call(props, event);
        }
      }
    }
  };
  return import_react4.default.createElement(
    InputBase,
    {
      classNames: { ...resolvedClassNames, input: clsx_default(classes.input, resolvedClassNames == null ? void 0 : resolvedClassNames.input) },
      styles: resolvedStyles,
      unstyled,
      ref,
      value,
      ...others,
      step: withSeconds ? 1 : 60,
      onChange,
      onBlur: onTimeBlur,
      type: "time",
      __staticSelector: "TimeInput"
    }
  );
});
TimeInput.classes = InputBase.classes;
TimeInput.displayName = "@mantine/dates/TimeInput";

// node_modules/@mantine/dates/esm/components/Day/Day.mjs
var import_dayjs5 = __toESM(require_dayjs_min(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/Day/Day.module.css.mjs
var classes2 = { "day": "m_396ce5cb" };

// node_modules/@mantine/dates/esm/components/Day/Day.mjs
var defaultProps2 = {};
var varsResolver = createVarsResolver((_, { size }) => ({
  day: {
    "--day-size": getSize(size, "day-size")
  }
}));
var Day = factory((_props, ref) => {
  const props = useProps("Day", defaultProps2, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    date,
    disabled,
    __staticSelector,
    weekend,
    outside,
    selected,
    renderDay,
    inRange,
    firstInRange,
    lastInRange,
    hidden,
    static: isStatic,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Day",
    classes: classes2,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: "day"
  });
  const ctx = useDatesContext();
  return import_react5.default.createElement(
    UnstyledButton,
    {
      ...getStyles("day", { style: hidden ? { display: "none" } : void 0 }),
      component: isStatic ? "div" : "button",
      ref,
      disabled,
      "data-today": (0, import_dayjs5.default)(date).isSame(shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone()), "day") || void 0,
      "data-hidden": hidden || void 0,
      "data-disabled": disabled || void 0,
      "data-weekend": !disabled && !outside && weekend || void 0,
      "data-outside": !disabled && outside || void 0,
      "data-selected": !disabled && selected || void 0,
      "data-in-range": inRange && !disabled || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      "data-static": isStatic || void 0,
      unstyled,
      ...others
    },
    (renderDay == null ? void 0 : renderDay(date)) || date.getDate()
  );
});
Day.classes = classes2;
Day.displayName = "@mantine/dates/Day";

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/WeekdaysRow/get-weekdays-names/get-weekdays-names.mjs
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
function getWeekdayNames({
  locale,
  format = "dd",
  firstDayOfWeek = 1
}) {
  const baseDate = (0, import_dayjs6.default)().day(firstDayOfWeek);
  const labels = [];
  for (let i = 0; i < 7; i += 1) {
    if (typeof format === "string") {
      labels.push((0, import_dayjs6.default)(baseDate).add(i, "days").locale(locale).format(format));
    } else {
      labels.push(format((0, import_dayjs6.default)(baseDate).add(i, "days").toDate()));
    }
  }
  return labels;
}

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.module.css.mjs
var classes3 = { "weekday": "m_18a3eca" };

// node_modules/@mantine/dates/esm/components/WeekdaysRow/WeekdaysRow.mjs
var defaultProps3 = {};
var varsResolver2 = createVarsResolver((_, { size }) => ({
  weekdaysRow: {
    "--wr-fz": getFontSize(size),
    "--wr-spacing": getSpacing(size)
  }
}));
var WeekdaysRow = factory((_props, ref) => {
  const props = useProps("WeekdaysRow", defaultProps3, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = "th",
    __staticSelector,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "WeekdaysRow",
    classes: classes3,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver2,
    rootSelector: "weekdaysRow"
  });
  const ctx = useDatesContext();
  const weekdays = getWeekdayNames({
    locale: ctx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek)
  }).map((weekday, index) => import_react6.default.createElement(CellComponent, { key: index, ...getStyles("weekday") }, weekday));
  return import_react6.default.createElement(Box, { component: "tr", ref, ...getStyles("weekdaysRow"), ...others }, weekdays);
});
WeekdaysRow.classes = classes3;
WeekdaysRow.displayName = "@mantine/dates/WeekdaysRow";

// node_modules/@mantine/dates/esm/components/Month/get-end-of-week/get-end-of-week.mjs
function getEndOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  while (value.getDay() !== lastDayOfWeek) {
    value.setDate(value.getDate() + 1);
  }
  return value;
}

// node_modules/@mantine/dates/esm/components/Month/get-start-of-week/get-start-of-week.mjs
function getStartOfWeek(date, firstDayOfWeek = 1) {
  const value = new Date(date);
  while (value.getDay() !== firstDayOfWeek) {
    value.setDate(value.getDate() - 1);
  }
  return value;
}

// node_modules/@mantine/dates/esm/components/Month/get-month-days/get-month-days.mjs
function getMonthDays({
  month,
  firstDayOfWeek = 1,
  consistentWeeks
}) {
  const currentMonth = month.getMonth();
  const startOfMonth = new Date(month.getFullYear(), currentMonth, 1);
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const endDate = getEndOfWeek(endOfMonth, firstDayOfWeek);
  const date = getStartOfWeek(startOfMonth, firstDayOfWeek);
  const weeks = [];
  while (date <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    weeks.push(days);
  }
  if (consistentWeeks && weeks.length < 6) {
    const lastWeek = weeks[weeks.length - 1];
    const lastDay = lastWeek[lastWeek.length - 1];
    const nextDay = new Date(lastDay);
    nextDay.setDate(nextDay.getDate() + 1);
    while (weeks.length < 6) {
      const days = [];
      for (let i = 0; i < 7; i += 1) {
        days.push(new Date(nextDay));
        nextDay.setDate(nextDay.getDate() + 1);
      }
      weeks.push(days);
    }
  }
  return weeks;
}

// node_modules/@mantine/dates/esm/components/Month/is-same-month/is-same-month.mjs
function isSameMonth(date, comparison) {
  return date.getFullYear() === comparison.getFullYear() && date.getMonth() === comparison.getMonth();
}

// node_modules/@mantine/dates/esm/components/Month/Month.mjs
var import_dayjs10 = __toESM(require_dayjs_min(), 1);
var import_react7 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
var import_dayjs9 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/Month/is-after-min-date/is-after-min-date.mjs
var import_dayjs7 = __toESM(require_dayjs_min(), 1);
function isAfterMinDate(date, minDate) {
  return minDate instanceof Date ? (0, import_dayjs7.default)(date).isAfter((0, import_dayjs7.default)(minDate).subtract(1, "day"), "day") : true;
}

// node_modules/@mantine/dates/esm/components/Month/is-before-max-date/is-before-max-date.mjs
var import_dayjs8 = __toESM(require_dayjs_min(), 1);
function isBeforeMaxDate(date, maxDate) {
  return maxDate instanceof Date ? (0, import_dayjs8.default)(date).isBefore((0, import_dayjs8.default)(maxDate).add(1, "day"), "day") : true;
}

// node_modules/@mantine/dates/esm/components/Month/get-date-in-tab-order/get-date-in-tab-order.mjs
function getDateInTabOrder(dates, minDate, maxDate, getDateControlProps, excludeDate, hideOutsideDates, month) {
  const enabledDates = dates.flat().filter(
    (date) => {
      var _a;
      return isBeforeMaxDate(date, maxDate) && isAfterMinDate(date, minDate) && !(excludeDate == null ? void 0 : excludeDate(date)) && !((_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.disabled) && (!hideOutsideDates || isSameMonth(date, month));
    }
  );
  const selectedDate = enabledDates.find((date) => {
    var _a;
    return (_a = getDateControlProps == null ? void 0 : getDateControlProps(date)) == null ? void 0 : _a.selected;
  });
  if (selectedDate) {
    return selectedDate;
  }
  const currentDate = enabledDates.find((date) => (0, import_dayjs9.default)().isSame(date, "date"));
  if (currentDate) {
    return currentDate;
  }
  return enabledDates[0];
}

// node_modules/@mantine/dates/esm/components/Month/Month.module.css.mjs
var classes4 = { "month": "m_cc9820d3", "monthCell": "m_8f457cd5" };

// node_modules/@mantine/dates/esm/components/Month/Month.mjs
var defaultProps4 = {
  withCellSpacing: true
};
var Month = factory((_props, ref) => {
  const props = useProps("Month", defaultProps4, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    month,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    static: isStatic,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "Month",
    classes: classes4,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "month"
  });
  const ctx = useDatesContext();
  const dates = getMonthDays({
    month,
    firstDayOfWeek: ctx.getFirstDayOfWeek(firstDayOfWeek),
    consistentWeeks: ctx.consistentWeeks
  });
  const dateInTabOrder = getDateInTabOrder(
    dates,
    minDate,
    maxDate,
    getDayProps,
    excludeDate,
    hideOutsideDates,
    month
  );
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const rows = dates.map((row, rowIndex) => {
    const cells = row.map((date, cellIndex) => {
      const outside = !isSameMonth(date, month);
      const ariaLabel = (getDayAriaLabel == null ? void 0 : getDayAriaLabel(date)) || (0, import_dayjs10.default)(date).locale(locale || ctx.locale).format("D MMMM YYYY");
      const dayProps = getDayProps == null ? void 0 : getDayProps(date);
      const isDateInTabOrder = (0, import_dayjs10.default)(date).isSame(dateInTabOrder, "date");
      return import_react7.default.createElement(
        "td",
        {
          key: date.toString(),
          ...getStyles("monthCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        import_react7.default.createElement(
          Day,
          {
            __staticSelector: __staticSelector || "Month",
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            unstyled,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            renderDay,
            date,
            size,
            weekend: ctx.getWeekendDays(weekendDays).includes(date.getDay()),
            outside,
            hidden: hideOutsideDates ? outside : false,
            "aria-label": ariaLabel,
            static: isStatic,
            disabled: (excludeDate == null ? void 0 : excludeDate(date)) || !isBeforeMaxDate(date, maxDate) || !isAfterMinDate(date, minDate),
            ref: (node) => __getDayRef == null ? void 0 : __getDayRef(rowIndex, cellIndex, node),
            ...dayProps,
            onKeyDown: (event) => {
              var _a;
              (_a = dayProps == null ? void 0 : dayProps.onKeyDown) == null ? void 0 : _a.call(dayProps, event);
              __onDayKeyDown == null ? void 0 : __onDayKeyDown(event, { rowIndex, cellIndex, date });
            },
            onMouseEnter: (event) => {
              var _a;
              (_a = dayProps == null ? void 0 : dayProps.onMouseEnter) == null ? void 0 : _a.call(dayProps, event);
              __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(event, date);
            },
            onClick: (event) => {
              var _a;
              (_a = dayProps == null ? void 0 : dayProps.onClick) == null ? void 0 : _a.call(dayProps, event);
              __onDayClick == null ? void 0 : __onDayClick(event, date);
            },
            onMouseDown: (event) => {
              var _a;
              (_a = dayProps == null ? void 0 : dayProps.onMouseDown) == null ? void 0 : _a.call(dayProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isDateInTabOrder ? -1 : 0
          }
        )
      );
    });
    return import_react7.default.createElement("tr", { key: rowIndex, ...getStyles("monthRow") }, cells);
  });
  return import_react7.default.createElement(Box, { component: "table", ...getStyles("month"), size, ref, ...others }, !hideWeekdays && import_react7.default.createElement("thead", { ...getStyles("monthThead") }, import_react7.default.createElement(
    WeekdaysRow,
    {
      __staticSelector: __staticSelector || "Month",
      locale,
      firstDayOfWeek,
      weekdayFormat,
      size,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled
    }
  )), import_react7.default.createElement("tbody", { ...getStyles("monthTbody") }, rows));
});
Month.classes = classes4;
Month.displayName = "@mantine/dates/Month";

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.module.css.mjs
var classes5 = { "pickerControl": "m_dc6a3c71" };

// node_modules/@mantine/dates/esm/components/PickerControl/PickerControl.mjs
var defaultProps5 = {};
var varsResolver3 = createVarsResolver((_, { size }) => ({
  pickerControl: {
    "--dpc-fz": getFontSize(size),
    "--dpc-size": getSize(size, "dpc-size")
  }
}));
var PickerControl = factory((_props, ref) => {
  const props = useProps("PickerControl", defaultProps5, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    firstInRange,
    lastInRange,
    inRange,
    __staticSelector,
    selected,
    disabled,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "PickerControl",
    classes: classes5,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver3,
    rootSelector: "pickerControl"
  });
  return import_react8.default.createElement(
    UnstyledButton,
    {
      ...getStyles("pickerControl"),
      ref,
      unstyled,
      "data-picker-control": true,
      "data-selected": selected && !disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-in-range": inRange && !disabled && !selected || void 0,
      "data-first-in-range": firstInRange && !disabled || void 0,
      "data-last-in-range": lastInRange && !disabled || void 0,
      disabled,
      ...others
    }
  );
});
PickerControl.classes = classes5;
PickerControl.displayName = "@mantine/dates/PickerControl";

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
var import_dayjs13 = __toESM(require_dayjs_min(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
var import_dayjs12 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/YearsList/is-year-disabled/is-year-disabled.mjs
var import_dayjs11 = __toESM(require_dayjs_min(), 1);
function isYearDisabled(year, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs11.default)(year).isBefore(minDate, "year")) {
    return true;
  }
  if (maxDate && (0, import_dayjs11.default)(year).isAfter(maxDate, "year")) {
    return true;
  }
  return false;
}

// node_modules/@mantine/dates/esm/components/YearsList/get-year-in-tab-order/get-year-in-tab-order.mjs
function getYearInTabOrder(years, minDate, maxDate, getYearControlProps) {
  const enabledYears = years.flat().filter(
    (year) => {
      var _a;
      return !isYearDisabled(year, minDate, maxDate) && !((_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedYear = enabledYears.find((year) => {
    var _a;
    return (_a = getYearControlProps == null ? void 0 : getYearControlProps(year)) == null ? void 0 : _a.selected;
  });
  if (selectedYear) {
    return selectedYear;
  }
  const currentYear = enabledYears.find((year) => (0, import_dayjs12.default)().isSame(year, "year"));
  if (currentYear) {
    return currentYear;
  }
  return enabledYears[0];
}

// node_modules/@mantine/dates/esm/components/YearsList/get-years-data/get-years-data.mjs
function getYearsData(decade) {
  const year = decade.getFullYear();
  const rounded = year - year % 10;
  let currentYearIndex = 0;
  const results = [[], [], [], []];
  for (let i = 0; i < 4; i += 1) {
    const max = i === 3 ? 1 : 3;
    for (let j = 0; j < max; j += 1) {
      results[i].push(new Date(rounded + currentYearIndex, 0));
      currentYearIndex += 1;
    }
  }
  return results;
}

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.module.css.mjs
var classes6 = { "yearsList": "m_9206547b", "yearsListCell": "m_c5a19c7d" };

// node_modules/@mantine/dates/esm/components/YearsList/YearsList.mjs
var defaultProps6 = {
  yearsListFormat: "YYYY",
  withCellSpacing: true
};
var YearsList = factory((_props, ref) => {
  const props = useProps("YearsList", defaultProps6, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    decade,
    yearsListFormat,
    locale,
    minDate,
    maxDate,
    getYearControlProps,
    __staticSelector,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "YearsList",
    classes: classes6,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "yearsList"
  });
  const ctx = useDatesContext();
  const years = getYearsData(decade);
  const yearInTabOrder = getYearInTabOrder(years, minDate, maxDate, getYearControlProps);
  const rows = years.map((yearsRow, rowIndex) => {
    const cells = yearsRow.map((year, cellIndex) => {
      const controlProps = getYearControlProps == null ? void 0 : getYearControlProps(year);
      const isYearInTabOrder = (0, import_dayjs13.default)(year).isSame(yearInTabOrder, "year");
      return import_react9.default.createElement(
        "td",
        {
          key: cellIndex,
          ...getStyles("yearsListCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        import_react9.default.createElement(
          PickerControl,
          {
            ...getStyles("yearsListControl"),
            size,
            unstyled,
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            disabled: isYearDisabled(year, minDate, maxDate),
            ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node),
            ...controlProps,
            onKeyDown: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a.call(controlProps, event);
              __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: year });
            },
            onClick: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a.call(controlProps, event);
              __onControlClick == null ? void 0 : __onControlClick(event, year);
            },
            onMouseEnter: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a.call(controlProps, event);
              __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, year);
            },
            onMouseDown: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a.call(controlProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isYearInTabOrder ? -1 : 0
          },
          (0, import_dayjs13.default)(year).locale(ctx.getLocale(locale)).format(yearsListFormat)
        )
      );
    });
    return import_react9.default.createElement("tr", { key: rowIndex, ...getStyles("yearsListRow") }, cells);
  });
  return import_react9.default.createElement(Box, { component: "table", ref, size, ...getStyles("yearsList"), ...others }, import_react9.default.createElement("tbody", null, rows));
});
YearsList.classes = classes6;
YearsList.displayName = "@mantine/dates/YearsList";

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
var import_dayjs17 = __toESM(require_dayjs_min(), 1);
var import_react10 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
var import_dayjs15 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/components/MonthsList/is-month-disabled/is-month-disabled.mjs
var import_dayjs14 = __toESM(require_dayjs_min(), 1);
function isMonthDisabled(month, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return false;
  }
  if (minDate && (0, import_dayjs14.default)(month).isBefore(minDate, "month")) {
    return true;
  }
  if (maxDate && (0, import_dayjs14.default)(month).isAfter(maxDate, "month")) {
    return true;
  }
  return false;
}

// node_modules/@mantine/dates/esm/components/MonthsList/get-month-in-tab-order/get-month-in-tab-order.mjs
function getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps) {
  const enabledMonths = months.flat().filter(
    (month) => {
      var _a;
      return !isMonthDisabled(month, minDate, maxDate) && !((_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.disabled);
    }
  );
  const selectedMonth = enabledMonths.find((month) => {
    var _a;
    return (_a = getMonthControlProps == null ? void 0 : getMonthControlProps(month)) == null ? void 0 : _a.selected;
  });
  if (selectedMonth) {
    return selectedMonth;
  }
  const currentMonth = enabledMonths.find((month) => (0, import_dayjs15.default)().isSame(month, "month"));
  if (currentMonth) {
    return currentMonth;
  }
  return enabledMonths[0];
}

// node_modules/@mantine/dates/esm/components/MonthsList/get-months-data/get-months-data.mjs
var import_dayjs16 = __toESM(require_dayjs_min(), 1);
function getMonthsData(year) {
  const startOfYear = (0, import_dayjs16.default)(year).startOf("year").toDate();
  const results = [[], [], [], []];
  let currentMonthIndex = 0;
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push((0, import_dayjs16.default)(startOfYear).add(currentMonthIndex, "months").toDate());
      currentMonthIndex += 1;
    }
  }
  return results;
}

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.module.css.mjs
var classes7 = { "monthsList": "m_2a6c32d", "monthsListCell": "m_fe27622f" };

// node_modules/@mantine/dates/esm/components/MonthsList/MonthsList.mjs
var defaultProps7 = {
  monthsListFormat: "MMM",
  withCellSpacing: true
};
var MonthsList = factory((_props, ref) => {
  const props = useProps("MonthsList", defaultProps7, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    year,
    monthsListFormat,
    locale,
    minDate,
    maxDate,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    __preventFocus,
    __stopPropagation,
    withCellSpacing,
    size,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "MonthsList",
    classes: classes7,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "monthsList"
  });
  const ctx = useDatesContext();
  const months = getMonthsData(year);
  const monthInTabOrder = getMonthInTabOrder(months, minDate, maxDate, getMonthControlProps);
  const rows = months.map((monthsRow, rowIndex) => {
    const cells = monthsRow.map((month, cellIndex) => {
      const controlProps = getMonthControlProps == null ? void 0 : getMonthControlProps(month);
      const isMonthInTabOrder = (0, import_dayjs17.default)(month).isSame(monthInTabOrder, "month");
      return import_react10.default.createElement(
        "td",
        {
          key: cellIndex,
          ...getStyles("monthsListCell"),
          "data-with-spacing": withCellSpacing || void 0
        },
        import_react10.default.createElement(
          PickerControl,
          {
            ...getStyles("monthsListControl"),
            size,
            unstyled,
            __staticSelector: __staticSelector || "MonthsList",
            "data-mantine-stop-propagation": __stopPropagation || void 0,
            disabled: isMonthDisabled(month, minDate, maxDate),
            ref: (node) => __getControlRef == null ? void 0 : __getControlRef(rowIndex, cellIndex, node),
            ...controlProps,
            onKeyDown: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onKeyDown) == null ? void 0 : _a.call(controlProps, event);
              __onControlKeyDown == null ? void 0 : __onControlKeyDown(event, { rowIndex, cellIndex, date: month });
            },
            onClick: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onClick) == null ? void 0 : _a.call(controlProps, event);
              __onControlClick == null ? void 0 : __onControlClick(event, month);
            },
            onMouseEnter: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onMouseEnter) == null ? void 0 : _a.call(controlProps, event);
              __onControlMouseEnter == null ? void 0 : __onControlMouseEnter(event, month);
            },
            onMouseDown: (event) => {
              var _a;
              (_a = controlProps == null ? void 0 : controlProps.onMouseDown) == null ? void 0 : _a.call(controlProps, event);
              __preventFocus && event.preventDefault();
            },
            tabIndex: __preventFocus || !isMonthInTabOrder ? -1 : 0
          },
          (0, import_dayjs17.default)(month).locale(ctx.getLocale(locale)).format(monthsListFormat)
        )
      );
    });
    return import_react10.default.createElement("tr", { key: rowIndex, ...getStyles("monthsListRow") }, cells);
  });
  return import_react10.default.createElement(Box, { component: "table", ref, size, ...getStyles("monthsList"), ...others }, import_react10.default.createElement("tbody", null, rows));
});
MonthsList.classes = classes7;
MonthsList.displayName = "@mantine/dates/MonthsList";

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.module.css.mjs
var classes8 = { "calendarHeader": "m_730a79ed", "calendarHeaderLevel": "m_f6645d97", "calendarHeaderControl": "m_2351eeb0", "calendarHeaderControlIcon": "m_367dc749" };

// node_modules/@mantine/dates/esm/components/CalendarHeader/CalendarHeader.mjs
var defaultProps8 = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true
};
var varsResolver4 = createVarsResolver((_, { size }) => ({
  calendarHeader: {
    "--dch-control-size": getSize(size, "dch-control-size"),
    "--dch-fz": getFontSize(size)
  }
}));
var CalendarHeader = factory((_props, ref) => {
  const props = useProps("CalendarHeader", defaultProps8, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    ...others
  } = props;
  const getStyles = useStyles({
    name: __staticSelector || "CalendarHeader",
    classes: classes8,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: varsResolver4,
    rootSelector: "calendarHeader"
  });
  const preventFocus = __preventFocus ? (event) => event.preventDefault() : void 0;
  return import_react11.default.createElement(Box, { ...getStyles("calendarHeader"), ref, ...others }, withPrevious && import_react11.default.createElement(
    UnstyledButton,
    {
      ...getStyles("calendarHeaderControl"),
      "data-direction": "previous",
      "aria-label": previousLabel,
      onClick: onPrevious,
      unstyled,
      onMouseDown: preventFocus,
      disabled: previousDisabled,
      "data-disabled": previousDisabled || void 0,
      tabIndex: __preventFocus || previousDisabled ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    previousIcon || import_react11.default.createElement(
      AccordionChevron,
      {
        ...getStyles("calendarHeaderControlIcon"),
        "data-direction": "previous",
        size: "45%"
      }
    )
  ), import_react11.default.createElement(
    UnstyledButton,
    {
      component: hasNextLevel ? "button" : "div",
      ...getStyles("calendarHeaderLevel"),
      onClick: hasNextLevel ? onLevelClick : void 0,
      unstyled,
      onMouseDown: hasNextLevel ? preventFocus : void 0,
      disabled: !hasNextLevel,
      "data-static": !hasNextLevel || void 0,
      "aria-label": levelControlAriaLabel,
      tabIndex: __preventFocus || !hasNextLevel ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    label
  ), withNext && import_react11.default.createElement(
    UnstyledButton,
    {
      ...getStyles("calendarHeaderControl"),
      "data-direction": "next",
      "aria-label": nextLabel,
      onClick: onNext,
      unstyled,
      onMouseDown: preventFocus,
      disabled: nextDisabled,
      "data-disabled": nextDisabled || void 0,
      tabIndex: __preventFocus || nextDisabled ? -1 : 0,
      "data-mantine-stop-propagation": __stopPropagation || void 0
    },
    nextIcon || import_react11.default.createElement(
      AccordionChevron,
      {
        ...getStyles("calendarHeaderControlIcon"),
        "data-direction": "next",
        size: "45%"
      }
    )
  ));
});
CalendarHeader.classes = classes8;
CalendarHeader.displayName = "@mantine/dates/CalendarHeader";

// node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
var import_dayjs18 = __toESM(require_dayjs_min(), 1);
var import_react12 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/DecadeLevel/get-decade-range/get-decade-range.mjs
function getDecadeRange(decade) {
  const years = getYearsData(decade);
  return [years[0][0], years[3][0]];
}

// node_modules/@mantine/dates/esm/components/DecadeLevel/DecadeLevel.mjs
var defaultProps9 = {
  decadeLabelFormat: "YYYY"
};
var DecadeLevel = factory((_props, ref) => {
  const props = useProps("DecadeLevel", defaultProps9, _props);
  const {
    // YearsList settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    decadeLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    size,
    ...others
  } = props;
  const ctx = useDatesContext();
  const [startOfDecade, endOfDecade] = getDecadeRange(decade);
  const stylesApiProps = {
    __staticSelector: __staticSelector || "DecadeLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs18.default)(endOfDecade).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs18.default)(startOfDecade).startOf("year").isAfter(minDate) : false;
  const formatDecade = (date, format) => (0, import_dayjs18.default)(date).locale(locale || ctx.locale).format(format);
  return import_react12.default.createElement(Box, { "data-decade-level": true, size, ref, ...others }, import_react12.default.createElement(
    CalendarHeader,
    {
      label: typeof decadeLabelFormat === "function" ? decadeLabelFormat(startOfDecade, endOfDecade) : `${formatDecade(startOfDecade, decadeLabelFormat)} – ${formatDecade(
        endOfDecade,
        decadeLabelFormat
      )}`,
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel: false,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), import_react12.default.createElement(
    YearsList,
    {
      decade,
      locale,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
DecadeLevel.classes = { ...YearsList.classes, ...CalendarHeader.classes };
DecadeLevel.displayName = "@mantine/dates/DecadeLevel";

// node_modules/@mantine/dates/esm/components/YearLevel/YearLevel.mjs
var import_dayjs19 = __toESM(require_dayjs_min(), 1);
var import_react13 = __toESM(require_react(), 1);
var defaultProps10 = {
  yearLabelFormat: "YYYY"
};
var YearLevel = factory((_props, ref) => {
  const props = useProps("YearLevel", defaultProps10, _props);
  const {
    // MonthsList settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __getControlRef,
    __onControlKeyDown,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    yearLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    classNames,
    styles,
    unstyled,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "YearLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs19.default)(year).endOf("year").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs19.default)(year).startOf("year").isAfter(minDate) : false;
  return import_react13.default.createElement(Box, { "data-year-level": true, size, ref, ...others }, import_react13.default.createElement(
    CalendarHeader,
    {
      label: typeof yearLabelFormat === "function" ? yearLabelFormat(year) : (0, import_dayjs19.default)(year).locale(locale || ctx.locale).format(yearLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), import_react13.default.createElement(
    MonthsList,
    {
      year,
      locale,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      __getControlRef,
      __onControlKeyDown,
      __onControlClick,
      __onControlMouseEnter,
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
YearLevel.classes = { ...CalendarHeader.classes, ...MonthsList.classes };
YearLevel.displayName = "@mantine/dates/YearLevel";

// node_modules/@mantine/dates/esm/components/MonthLevel/MonthLevel.mjs
var import_dayjs20 = __toESM(require_dayjs_min(), 1);
var import_react14 = __toESM(require_react(), 1);
var defaultProps11 = {
  monthLabelFormat: "MMMM YYYY"
};
var MonthLevel = factory((_props, ref) => {
  const props = useProps("MonthLevel", defaultProps11, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __getDayRef,
    __onDayKeyDown,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    __stopPropagation,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    // Other props
    monthLabelFormat,
    classNames,
    styles,
    unstyled,
    __staticSelector,
    size,
    static: isStatic,
    ...others
  } = props;
  const ctx = useDatesContext();
  const stylesApiProps = {
    __staticSelector: __staticSelector || "MonthLevel",
    classNames,
    styles,
    unstyled,
    size
  };
  const _nextDisabled = typeof nextDisabled === "boolean" ? nextDisabled : maxDate ? !(0, import_dayjs20.default)(month).endOf("month").isBefore(maxDate) : false;
  const _previousDisabled = typeof previousDisabled === "boolean" ? previousDisabled : minDate ? !(0, import_dayjs20.default)(month).startOf("month").isAfter(minDate) : false;
  return import_react14.default.createElement(Box, { "data-month-level": true, size, ref, ...others }, import_react14.default.createElement(
    CalendarHeader,
    {
      label: typeof monthLabelFormat === "function" ? monthLabelFormat(month) : (0, import_dayjs20.default)(month).locale(locale || ctx.locale).format(monthLabelFormat),
      __preventFocus,
      __stopPropagation,
      nextIcon,
      previousIcon,
      nextLabel,
      previousLabel,
      onNext,
      onPrevious,
      onLevelClick,
      nextDisabled: _nextDisabled,
      previousDisabled: _previousDisabled,
      hasNextLevel,
      levelControlAriaLabel,
      withNext,
      withPrevious,
      ...stylesApiProps
    }
  ), import_react14.default.createElement(
    Month,
    {
      month,
      locale,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      minDate,
      maxDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      __getDayRef,
      __onDayKeyDown,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
MonthLevel.classes = { ...Month.classes, ...CalendarHeader.classes };
MonthLevel.displayName = "@mantine/dates/MonthLevel";

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.module.css.mjs
var classes9 = { "levelsGroup": "m_30b26e33" };

// node_modules/@mantine/dates/esm/components/LevelsGroup/LevelsGroup.mjs
var defaultProps12 = {};
var LevelsGroup = factory((_props, ref) => {
  const props = useProps("LevelsGroup", defaultProps12, _props);
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } = props;
  const getStyles = useStyles({
    name: __staticSelector || "LevelsGroup",
    classes: classes9,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: "levelsGroup"
  });
  return import_react15.default.createElement(Box, { ref, ...getStyles("levelsGroup"), ...others });
});
LevelsGroup.classes = classes9;
LevelsGroup.displayName = "@mantine/dates/LevelsGroup";

// node_modules/@mantine/dates/esm/components/DecadeLevelGroup/DecadeLevelGroup.mjs
var import_dayjs21 = __toESM(require_dayjs_min(), 1);
var import_react16 = __toESM(require_react(), 1);
var defaultProps13 = {
  numberOfColumns: 1
};
var DecadeLevelGroup = factory((_props, ref) => {
  const props = useProps("DecadeLevelGroup", defaultProps13, _props);
  const {
    // DecadeLevel settings
    decade,
    locale,
    minDate,
    maxDate,
    yearsListFormat,
    getYearControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    nextDisabled,
    previousDisabled,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    decadeLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react16.useRef)([]);
  const decades = Array(numberOfColumns).fill(0).map((_, decadeIndex) => {
    const currentDecade = (0, import_dayjs21.default)(decade).add(decadeIndex * 10, "years").toDate();
    return import_react16.default.createElement(
      DecadeLevel,
      {
        key: decadeIndex,
        size,
        yearsListFormat,
        decade: currentDecade,
        withNext: decadeIndex === numberOfColumns - 1,
        withPrevious: decadeIndex === 0,
        decadeLabelFormat,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: decadeIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[decadeIndex])) {
            controlsRef.current[decadeIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[decadeIndex][rowIndex])) {
            controlsRef.current[decadeIndex][rowIndex] = [];
          }
          controlsRef.current[decadeIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentDecade) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        __stopPropagation,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        nextDisabled,
        previousDisabled,
        getYearControlProps,
        __staticSelector: __staticSelector || "DecadeLevelGroup",
        classNames,
        styles,
        unstyled,
        withCellSpacing
      }
    );
  });
  return import_react16.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "DecadeLevelGroup",
      ref,
      size,
      unstyled,
      ...others
    },
    decades
  );
});
DecadeLevelGroup.classes = { ...LevelsGroup.classes, ...DecadeLevel.classes };
DecadeLevelGroup.displayName = "@mantine/dates/DecadeLevelGroup";

// node_modules/@mantine/dates/esm/components/YearLevelGroup/YearLevelGroup.mjs
var import_dayjs22 = __toESM(require_dayjs_min(), 1);
var import_react17 = __toESM(require_react(), 1);
var defaultProps14 = {
  numberOfColumns: 1
};
var YearLevelGroup = factory((_props, ref) => {
  const props = useProps("YearLevelGroup", defaultProps14, _props);
  const {
    // YearLevel settings
    year,
    locale,
    minDate,
    maxDate,
    monthsListFormat,
    getMonthControlProps,
    __onControlClick,
    __onControlMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    __staticSelector,
    __stopPropagation,
    numberOfColumns,
    levelControlAriaLabel,
    yearLabelFormat,
    size,
    vars,
    ...others
  } = props;
  const controlsRef = (0, import_react17.useRef)([]);
  const years = Array(numberOfColumns).fill(0).map((_, yearIndex) => {
    const currentYear = (0, import_dayjs22.default)(year).add(yearIndex, "years").toDate();
    return import_react17.default.createElement(
      YearLevel,
      {
        key: yearIndex,
        size,
        monthsListFormat,
        year: currentYear,
        withNext: yearIndex === numberOfColumns - 1,
        withPrevious: yearIndex === 0,
        yearLabelFormat,
        __stopPropagation,
        __onControlClick,
        __onControlMouseEnter,
        __onControlKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: yearIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef
        }),
        __getControlRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(controlsRef.current[yearIndex])) {
            controlsRef.current[yearIndex] = [];
          }
          if (!Array.isArray(controlsRef.current[yearIndex][rowIndex])) {
            controlsRef.current[yearIndex][rowIndex] = [];
          }
          controlsRef.current[yearIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentYear) : levelControlAriaLabel,
        locale,
        minDate,
        maxDate,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        getMonthControlProps,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "YearLevelGroup",
        withCellSpacing
      }
    );
  });
  return import_react17.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "YearLevelGroup",
      ref,
      size,
      unstyled,
      ...others
    },
    years
  );
});
YearLevelGroup.classes = { ...YearLevel.classes, ...LevelsGroup.classes };
YearLevelGroup.displayName = "@mantine/dates/YearLevelGroup";

// node_modules/@mantine/dates/esm/components/MonthLevelGroup/MonthLevelGroup.mjs
var import_dayjs23 = __toESM(require_dayjs_min(), 1);
var import_react18 = __toESM(require_react(), 1);
var defaultProps15 = {
  numberOfColumns: 1
};
var MonthLevelGroup = factory((_props, ref) => {
  const props = useProps("MonthLevelGroup", defaultProps15, _props);
  const {
    // Month settings
    month,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    minDate,
    maxDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // CalendarHeader settings
    __preventFocus,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    // Other settings
    classNames,
    styles,
    unstyled,
    numberOfColumns,
    levelControlAriaLabel,
    monthLabelFormat,
    __staticSelector,
    __stopPropagation,
    size,
    static: isStatic,
    vars,
    ...others
  } = props;
  const daysRefs = (0, import_react18.useRef)([]);
  const months = Array(numberOfColumns).fill(0).map((_, monthIndex) => {
    const currentMonth = (0, import_dayjs23.default)(month).add(monthIndex, "months").toDate();
    return import_react18.default.createElement(
      MonthLevel,
      {
        key: monthIndex,
        month: currentMonth,
        withNext: monthIndex === numberOfColumns - 1,
        withPrevious: monthIndex === 0,
        monthLabelFormat,
        __stopPropagation,
        __onDayClick,
        __onDayMouseEnter,
        __onDayKeyDown: (event, payload) => handleControlKeyDown({
          levelIndex: monthIndex,
          rowIndex: payload.rowIndex,
          cellIndex: payload.cellIndex,
          event,
          controlsRef: daysRefs
        }),
        __getDayRef: (rowIndex, cellIndex, node) => {
          if (!Array.isArray(daysRefs.current[monthIndex])) {
            daysRefs.current[monthIndex] = [];
          }
          if (!Array.isArray(daysRefs.current[monthIndex][rowIndex])) {
            daysRefs.current[monthIndex][rowIndex] = [];
          }
          daysRefs.current[monthIndex][rowIndex][cellIndex] = node;
        },
        levelControlAriaLabel: typeof levelControlAriaLabel === "function" ? levelControlAriaLabel(currentMonth) : levelControlAriaLabel,
        locale,
        firstDayOfWeek,
        weekdayFormat,
        weekendDays,
        getDayProps,
        excludeDate,
        minDate,
        maxDate,
        renderDay,
        hideOutsideDates,
        hideWeekdays,
        getDayAriaLabel,
        __preventFocus,
        nextIcon,
        previousIcon,
        nextLabel,
        previousLabel,
        onNext,
        onPrevious,
        onLevelClick,
        nextDisabled,
        previousDisabled,
        hasNextLevel,
        classNames,
        styles,
        unstyled,
        __staticSelector: __staticSelector || "MonthLevelGroup",
        size,
        static: isStatic,
        withCellSpacing
      }
    );
  });
  return import_react18.default.createElement(
    LevelsGroup,
    {
      classNames,
      styles,
      __staticSelector: __staticSelector || "MonthLevelGroup",
      ref,
      size,
      ...others
    },
    months
  );
});
MonthLevelGroup.classes = { ...LevelsGroup.classes, ...MonthLevel.classes };
MonthLevelGroup.displayName = "@mantine/dates/MonthLevelGroup";

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.module.css.mjs
var classes10 = { "input": "m_6fa5e2aa" };

// node_modules/@mantine/dates/esm/components/PickerInputBase/PickerInputBase.mjs
var defaultProps16 = {};
var PickerInputBase = factory((_props, ref) => {
  const {
    inputProps,
    wrapperProps,
    placeholder,
    classNames,
    styles,
    unstyled,
    popoverProps,
    modalProps,
    dropdownType,
    children,
    formattedValue,
    dropdownHandlers,
    dropdownOpened,
    onClick,
    clearable,
    onClear,
    clearButtonProps,
    rightSection,
    shouldClear,
    readOnly,
    disabled,
    value,
    name,
    form,
    type,
    ...others
  } = useInputProps("PickerInputBase", defaultProps16, _props);
  const _rightSection = rightSection || (clearable && shouldClear && !readOnly && !disabled ? import_react19.default.createElement(
    CloseButton,
    {
      variant: "transparent",
      onClick: onClear,
      unstyled,
      size: inputProps.size || "sm",
      ...clearButtonProps
    }
  ) : null);
  const handleClose = () => {
    const isInvalidRangeValue = type === "range" && Array.isArray(value) && value[0] && !value[1];
    if (isInvalidRangeValue) {
      onClear();
    }
    dropdownHandlers.close();
  };
  return import_react19.default.createElement(import_react19.default.Fragment, null, dropdownType === "modal" && !readOnly && import_react19.default.createElement(
    Modal,
    {
      opened: dropdownOpened,
      onClose: handleClose,
      withCloseButton: false,
      size: "auto",
      "data-dates-modal": true,
      unstyled,
      ...modalProps
    },
    children
  ), import_react19.default.createElement(Input.Wrapper, { ...wrapperProps }, import_react19.default.createElement(
    Popover,
    {
      position: "bottom-start",
      opened: dropdownOpened,
      trapFocus: true,
      returnFocus: true,
      unstyled,
      ...popoverProps,
      disabled: (popoverProps == null ? void 0 : popoverProps.disabled) || dropdownType === "modal" || readOnly,
      onClose: () => {
        var _a;
        (_a = popoverProps == null ? void 0 : popoverProps.onClose) == null ? void 0 : _a.call(popoverProps);
        handleClose();
      }
    },
    import_react19.default.createElement(Popover.Target, null, import_react19.default.createElement(
      Input,
      {
        "aria-label": formattedValue || placeholder,
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        disabled,
        component: "button",
        type: "button",
        multiline: true,
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          dropdownHandlers.toggle();
        },
        rightSection: _rightSection,
        ...inputProps,
        ref,
        classNames: { ...classNames, input: clsx_default(classes10.input, classNames == null ? void 0 : classNames.input) },
        ...others
      },
      formattedValue || import_react19.default.createElement(
        Input.Placeholder,
        {
          error: inputProps.error,
          unstyled,
          className: classNames == null ? void 0 : classNames.placeholder,
          style: styles == null ? void 0 : styles.placeholder
        },
        placeholder
      )
    )),
    import_react19.default.createElement(Popover.Dropdown, { "data-dates-dropdown": true }, children)
  )), import_react19.default.createElement(HiddenDatesInput, { value, name, form, type }));
});
PickerInputBase.classes = classes10;
PickerInputBase.displayName = "@mantine/dates/PickerInputBase";

// node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
var import_dayjs25 = __toESM(require_dayjs_min(), 1);
var import_react21 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-uncontrolled-dates/use-uncontrolled-dates.mjs
var import_react20 = __toESM(require_react(), 1);
var import_dayjs24 = __toESM(require_dayjs_min(), 1);
var getEmptyValue = (type) => type === "range" ? [null, null] : type === "multiple" ? [] : null;
function useUncontrolledDates({
  type,
  value,
  defaultValue,
  onChange,
  applyTimezone = true
}) {
  const storedType = (0, import_react20.useRef)(type);
  const ctx = useDatesContext();
  const [_value, _setValue, controlled] = useUncontrolled({
    value: shiftTimezone("add", value, ctx.getTimezone(), !applyTimezone),
    defaultValue: shiftTimezone("add", defaultValue, ctx.getTimezone(), !applyTimezone),
    finalValue: getEmptyValue(type),
    onChange: (newDate) => {
      onChange == null ? void 0 : onChange(shiftTimezone("remove", newDate, ctx.getTimezone(), !applyTimezone));
    }
  });
  let _finalValue = _value;
  if (storedType.current !== type) {
    storedType.current = type;
    if (value === void 0) {
      _finalValue = defaultValue !== void 0 ? defaultValue : getEmptyValue(type);
      _setValue(_finalValue);
    } else if (true) {
      switch (type) {
        case "default":
          if (value !== null && typeof value !== "string") {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `null` or `string`"
            );
          }
          break;
        case "multiple":
          if (!(value instanceof Array)) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `string[]`"
            );
          }
          break;
        case "range":
          if (!(value instanceof Array) || value.length !== 2) {
            console.error(
              "[@mantine/dates/use-uncontrolled-dates] Value must be type of `[string, string]`"
            );
          }
          break;
      }
    }
  }
  return [_finalValue, _setValue, controlled];
}

// node_modules/@mantine/dates/esm/components/Calendar/clamp-level/clamp-level.mjs
function levelToNumber(level, fallback) {
  if (!level) {
    return fallback || 0;
  }
  return level === "month" ? 0 : level === "year" ? 1 : 2;
}
function levelNumberToLevel(levelNumber) {
  return levelNumber === 0 ? "month" : levelNumber === 1 ? "year" : "decade";
}
function clampLevel(level, minLevel, maxLevel) {
  return levelNumberToLevel(
    clamp(
      levelToNumber(level, 0),
      levelToNumber(minLevel, 0),
      levelToNumber(maxLevel, 2)
    )
  );
}

// node_modules/@mantine/dates/esm/components/Calendar/Calendar.mjs
var defaultProps17 = {
  maxLevel: "decade",
  minLevel: "month",
  __updateDateOnYearSelect: true,
  __updateDateOnMonthSelect: true
};
var Calendar = factory((_props, ref) => {
  const props = useProps("Calendar", defaultProps17, _props);
  const {
    vars,
    // CalendarLevel props
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    nextIcon,
    previousIcon,
    __onDayClick,
    __onDayMouseEnter,
    withCellSpacing,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // Other props
    classNames,
    styles,
    unstyled,
    minDate,
    maxDate,
    locale,
    __staticSelector,
    size,
    __preventFocus,
    __stopPropagation,
    onNextDecade,
    onPreviousDecade,
    onNextYear,
    onPreviousYear,
    onNextMonth,
    onPreviousMonth,
    static: isStatic,
    __timezoneApplied,
    ...others
  } = props;
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const [_level, setLevel] = useUncontrolled({
    value: level ? clampLevel(level, minLevel, maxLevel) : void 0,
    defaultValue: defaultLevel ? clampLevel(defaultLevel, minLevel, maxLevel) : void 0,
    finalValue: clampLevel(void 0, minLevel, maxLevel),
    onChange: onLevelChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultDate,
    onChange: onDateChange,
    applyTimezone: !__timezoneApplied
  });
  const stylesApiProps = {
    __staticSelector: __staticSelector || "Calendar",
    styles: resolvedStyles,
    classNames: resolvedClassNames,
    unstyled,
    size
  };
  const ctx = useDatesContext();
  const _columnsToScroll = columnsToScroll || numberOfColumns || 1;
  const currentDate = _date || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
  const handleNextMonth = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(_columnsToScroll, "month").toDate();
    onNextMonth == null ? void 0 : onNextMonth(nextDate);
    setDate(nextDate);
  };
  const handlePreviousMonth = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(_columnsToScroll, "month").toDate();
    onPreviousMonth == null ? void 0 : onPreviousMonth(nextDate);
    setDate(nextDate);
  };
  const handleNextYear = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(_columnsToScroll, "year").toDate();
    onNextYear == null ? void 0 : onNextYear(nextDate);
    setDate(nextDate);
  };
  const handlePreviousYear = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(_columnsToScroll, "year").toDate();
    onPreviousYear == null ? void 0 : onPreviousYear(nextDate);
    setDate(nextDate);
  };
  const handleNextDecade = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).add(10 * _columnsToScroll, "year").toDate();
    onNextDecade == null ? void 0 : onNextDecade(nextDate);
    setDate(nextDate);
  };
  const handlePreviousDecade = () => {
    const nextDate = (0, import_dayjs25.default)(currentDate).subtract(10 * _columnsToScroll, "year").toDate();
    onPreviousDecade == null ? void 0 : onPreviousDecade(nextDate);
    setDate(nextDate);
  };
  return import_react21.default.createElement(Box, { ref, size, "data-calendar": true, ...others }, _level === "month" && import_react21.default.createElement(
    MonthLevelGroup,
    {
      month: currentDate,
      minDate,
      maxDate,
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      onNext: handleNextMonth,
      onPrevious: handlePreviousMonth,
      hasNextLevel: maxLevel !== "month",
      onLevelClick: () => setLevel("year"),
      numberOfColumns,
      locale,
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.monthLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextMonth,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousMonth,
      previousIcon,
      monthLabelFormat,
      __onDayClick,
      __onDayMouseEnter,
      __preventFocus,
      __stopPropagation,
      static: isStatic,
      withCellSpacing,
      ...stylesApiProps
    }
  ), _level === "year" && import_react21.default.createElement(
    YearLevelGroup,
    {
      year: currentDate,
      numberOfColumns,
      minDate,
      maxDate,
      monthsListFormat,
      getMonthControlProps,
      locale,
      onNext: handleNextYear,
      onPrevious: handlePreviousYear,
      hasNextLevel: maxLevel !== "month" && maxLevel !== "year",
      onLevelClick: () => setLevel("decade"),
      levelControlAriaLabel: ariaLabels == null ? void 0 : ariaLabels.yearLevelControl,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextYear,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousYear,
      previousIcon,
      yearLabelFormat,
      __onControlMouseEnter: onMonthMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnMonthSelect && setDate(payload);
        setLevel(clampLevel("month", minLevel, maxLevel));
        onMonthSelect == null ? void 0 : onMonthSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ), _level === "decade" && import_react21.default.createElement(
    DecadeLevelGroup,
    {
      decade: currentDate,
      minDate,
      maxDate,
      yearsListFormat,
      getYearControlProps,
      locale,
      onNext: handleNextDecade,
      onPrevious: handlePreviousDecade,
      numberOfColumns,
      nextLabel: ariaLabels == null ? void 0 : ariaLabels.nextDecade,
      nextIcon,
      previousLabel: ariaLabels == null ? void 0 : ariaLabels.previousDecade,
      previousIcon,
      decadeLabelFormat,
      __onControlMouseEnter: onYearMouseEnter,
      __onControlClick: (_event, payload) => {
        __updateDateOnYearSelect && setDate(payload);
        setLevel(clampLevel("year", minLevel, maxLevel));
        onYearSelect == null ? void 0 : onYearSelect(payload);
      },
      __preventFocus,
      __stopPropagation,
      withCellSpacing,
      ...stylesApiProps
    }
  ));
});
Calendar.classes = {
  ...DecadeLevelGroup.classes,
  ...YearLevelGroup.classes,
  ...MonthLevelGroup.classes
};
Calendar.displayName = "@mantine/dates/Calendar";

// node_modules/@mantine/dates/esm/components/Calendar/pick-calendar-levels-props/pick-calendar-levels-props.mjs
function pickCalendarProps(props) {
  const {
    maxLevel,
    minLevel,
    defaultLevel,
    level,
    onLevelChange,
    nextIcon,
    previousIcon,
    date,
    defaultDate,
    onDateChange,
    numberOfColumns,
    columnsToScroll,
    ariaLabels,
    onYearSelect,
    onMonthSelect,
    onYearMouseEnter,
    onMonthMouseEnter,
    onNextMonth,
    onPreviousMonth,
    onNextYear,
    onPreviousYear,
    onNextDecade,
    onPreviousDecade,
    withCellSpacing,
    __updateDateOnYearSelect,
    __updateDateOnMonthSelect,
    // MonthLevelGroup props
    firstDayOfWeek,
    weekdayFormat,
    weekendDays,
    getDayProps,
    excludeDate,
    renderDay,
    hideOutsideDates,
    hideWeekdays,
    getDayAriaLabel,
    monthLabelFormat,
    // YearLevelGroup props
    monthsListFormat,
    getMonthControlProps,
    yearLabelFormat,
    // DecadeLevelGroup props
    yearsListFormat,
    getYearControlProps,
    decadeLabelFormat,
    // External picker props
    allowSingleDateInRange,
    allowDeselect,
    // Other props
    minDate,
    maxDate,
    locale,
    ...others
  } = props;
  return {
    calendarProps: {
      maxLevel,
      minLevel,
      defaultLevel,
      level,
      onLevelChange,
      nextIcon,
      previousIcon,
      date,
      defaultDate,
      onDateChange,
      numberOfColumns,
      columnsToScroll,
      ariaLabels,
      onYearSelect,
      onMonthSelect,
      onYearMouseEnter,
      onMonthMouseEnter,
      onNextMonth,
      onPreviousMonth,
      onNextYear,
      onPreviousYear,
      onNextDecade,
      onPreviousDecade,
      withCellSpacing,
      __updateDateOnYearSelect,
      __updateDateOnMonthSelect,
      // MonthLevelGroup props
      firstDayOfWeek,
      weekdayFormat,
      weekendDays,
      getDayProps,
      excludeDate,
      renderDay,
      hideOutsideDates,
      hideWeekdays,
      getDayAriaLabel,
      monthLabelFormat,
      // YearLevelGroup props
      monthsListFormat,
      getMonthControlProps,
      yearLabelFormat,
      // DecadeLevelGroup props
      yearsListFormat,
      getYearControlProps,
      decadeLabelFormat,
      // External picker props
      allowSingleDateInRange,
      allowDeselect,
      // Other props
      minDate,
      maxDate,
      locale
    },
    others
  };
}

// node_modules/@mantine/dates/esm/components/YearPicker/YearPicker.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-state/use-dates-state.mjs
var import_dayjs27 = __toESM(require_dayjs_min(), 1);
var import_react22 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-state/is-in-range/is-in-range.mjs
var import_dayjs26 = __toESM(require_dayjs_min(), 1);
function isInRange(date, range) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return (0, import_dayjs26.default)(_range[0]).startOf("day").subtract(1, "ms").isBefore(date) && (0, import_dayjs26.default)(_range[1]).endOf("day").add(1, "ms").isAfter(date);
}

// node_modules/@mantine/dates/esm/hooks/use-dates-state/use-dates-state.mjs
function useDatesState({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave,
  applyTimezone = true
}) {
  const [_value, setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
    applyTimezone
  });
  const [pickedDate, setPickedDate] = (0, import_react22.useState)(
    type === "range" ? _value[0] && !_value[1] ? _value[0] : null : null
  );
  const [hoveredDate, setHoveredDate] = (0, import_react22.useState)(null);
  const onDateChange = (date) => {
    if (type === "range") {
      if (pickedDate instanceof Date && !_value[1]) {
        if ((0, import_dayjs27.default)(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }
        const result = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }
      if (_value[0] && !_value[1] && (0, import_dayjs27.default)(date).isSame(_value[0], level) && !allowSingleDateInRange) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }
      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }
    if (type === "multiple") {
      if (_value.some((selected) => (0, import_dayjs27.default)(selected).isSame(date, level))) {
        setValue(_value.filter((selected) => !(0, import_dayjs27.default)(selected).isSame(date, level)));
      } else {
        setValue([..._value, date]);
      }
      return;
    }
    if (_value && allowDeselect && (0, import_dayjs27.default)(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };
  const isDateInRange = (date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }
    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }
    return false;
  };
  const onRootMouseLeave = type === "range" ? (event) => {
    onMouseLeave == null ? void 0 : onMouseLeave(event);
    setHoveredDate(null);
  } : onMouseLeave;
  const isFirstInRange = (date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }
    if ((0, import_dayjs27.default)(date).isSame(_value[0], level)) {
      return !(hoveredDate && (0, import_dayjs27.default)(hoveredDate).isBefore(_value[0]));
    }
    return false;
  };
  const isLastInRange = (date) => {
    if (_value[1] instanceof Date) {
      return (0, import_dayjs27.default)(date).isSame(_value[1], level);
    }
    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }
    return (0, import_dayjs27.default)(hoveredDate).isBefore(_value[0]) && (0, import_dayjs27.default)(date).isSame(_value[0], level);
  };
  const getControlProps = (date) => {
    if (type === "range") {
      return {
        selected: _value.some(
          (selection) => selection && (0, import_dayjs27.default)(selection).isSame(date, level)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        "data-autofocus": !!_value[0] && (0, import_dayjs27.default)(_value[0]).isSame(date, level) || void 0
      };
    }
    if (type === "multiple") {
      return {
        selected: _value.some(
          (selection) => selection && (0, import_dayjs27.default)(selection).isSame(date, level)
        ),
        "data-autofocus": !!_value[0] && (0, import_dayjs27.default)(_value[0]).isSame(date, level) || void 0
      };
    }
    const selected = (0, import_dayjs27.default)(_value).isSame(date, level);
    return { selected, "data-autofocus": selected || void 0 };
  };
  const onHoveredDateChange = type === "range" && pickedDate ? setHoveredDate : () => {
  };
  (0, import_react22.useEffect)(() => {
    if (type === "range" && !_value[0] && !_value[1]) {
      setPickedDate(null);
    }
  }, [value]);
  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue
  };
}

// node_modules/@mantine/dates/esm/components/YearPicker/YearPicker.mjs
var import_dayjs28 = __toESM(require_dayjs_min(), 1);
var defaultProps18 = {
  type: "default"
};
var YearPicker = factory((_props, ref) => {
  const props = useProps("YearPicker", defaultProps18, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onYearSelect,
    __updateDateOnYearSelect,
    __timezoneApplied,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "year",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return import_react23.default.createElement(
    Calendar,
    {
      ref,
      minLevel: "decade",
      __updateDateOnYearSelect: __updateDateOnYearSelect ?? false,
      __staticSelector: __staticSelector || "YearPicker",
      onMouseLeave: onRootMouseLeave,
      onYearMouseEnter: (_event, date) => onHoveredDateChange(date),
      onYearSelect: (date) => {
        onDateChange(date);
        onYearSelect == null ? void 0 : onYearSelect(date);
      },
      getYearControlProps: (date) => ({
        ...getControlProps(date),
        ...getYearControlProps == null ? void 0 : getYearControlProps(date)
      }),
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied),
      __timezoneApplied: true
    }
  );
});
YearPicker.classes = Calendar.classes;
YearPicker.displayName = "@mantine/dates/YearPicker";

// node_modules/@mantine/dates/esm/components/MonthPicker/MonthPicker.mjs
var import_react24 = __toESM(require_react(), 1);
var import_dayjs29 = __toESM(require_dayjs_min(), 1);
var defaultProps19 = {
  type: "default"
};
var MonthPicker = factory((_props, ref) => {
  const props = useProps("MonthPicker", defaultProps19, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getMonthControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onMonthSelect,
    __updateDateOnMonthSelect,
    __timezoneApplied,
    onLevelChange,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "month",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return import_react24.default.createElement(
    Calendar,
    {
      ref,
      minLevel: "year",
      __updateDateOnMonthSelect: __updateDateOnMonthSelect ?? false,
      __staticSelector: __staticSelector || "MonthPicker",
      onMouseLeave: onRootMouseLeave,
      onMonthMouseEnter: (_event, date) => onHoveredDateChange(date),
      onMonthSelect: (date) => {
        onDateChange(date);
        onMonthSelect == null ? void 0 : onMonthSelect(date);
      },
      getMonthControlProps: (date) => ({
        ...getControlProps(date),
        ...getMonthControlProps == null ? void 0 : getMonthControlProps(date)
      }),
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      onLevelChange,
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied)
    }
  );
});
MonthPicker.classes = Calendar.classes;
MonthPicker.displayName = "@mantine/dates/MonthPicker";

// node_modules/@mantine/dates/esm/components/DatePicker/DatePicker.mjs
var import_react25 = __toESM(require_react(), 1);
var import_dayjs30 = __toESM(require_dayjs_min(), 1);
var defaultProps20 = {
  type: "default",
  defaultLevel: "month",
  numberOfColumns: 1
};
var DatePicker = factory((_props, ref) => {
  const props = useProps("DatePicker", defaultProps20, _props);
  const {
    classNames,
    styles,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getDayProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    numberOfColumns,
    hideOutsideDates,
    __onDayMouseEnter,
    __onDayClick,
    __timezoneApplied,
    ...others
  } = props;
  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type,
    level: "day",
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
    applyTimezone: !__timezoneApplied
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const ctx = useDatesContext();
  return import_react25.default.createElement(
    Calendar,
    {
      ref,
      minLevel: "month",
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      __staticSelector: __staticSelector || "DatePicker",
      onMouseLeave: onRootMouseLeave,
      numberOfColumns,
      hideOutsideDates: hideOutsideDates ?? numberOfColumns !== 1,
      __onDayMouseEnter: (_event, date) => {
        onHoveredDateChange(date);
        __onDayMouseEnter == null ? void 0 : __onDayMouseEnter(_event, date);
      },
      __onDayClick: (_event, date) => {
        onDateChange(date);
        __onDayClick == null ? void 0 : __onDayClick(_event, date);
      },
      getDayProps: (date) => ({
        ...getControlProps(date),
        ...getDayProps == null ? void 0 : getDayProps(date)
      }),
      ...others,
      date: shiftTimezone("add", others.date, ctx.getTimezone(), __timezoneApplied),
      __timezoneApplied: true
    }
  );
});
DatePicker.classes = Calendar.classes;
DatePicker.displayName = "@mantine/dates/DatePicker";

// node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
var import_dayjs33 = __toESM(require_dayjs_min(), 1);
var import_react26 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/DateInput/date-string-parser/date-string-parser.mjs
var import_dayjs31 = __toESM(require_dayjs_min(), 1);
function dateStringParser(dateString, timezone) {
  if (dateString === null) {
    return null;
  }
  const date = shiftTimezone("add", new Date(dateString), timezone);
  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }
  return date;
}

// node_modules/@mantine/dates/esm/components/DateInput/is-date-valid/is-date-valid.mjs
var import_dayjs32 = __toESM(require_dayjs_min(), 1);
function isDateValid({ date, maxDate, minDate }) {
  if (date == null) {
    return false;
  }
  if (Number.isNaN(date.getTime())) {
    return false;
  }
  if (maxDate && (0, import_dayjs32.default)(date).isAfter(maxDate, "date")) {
    return false;
  }
  if (minDate && (0, import_dayjs32.default)(date).isBefore(minDate, "date")) {
    return false;
  }
  return true;
}

// node_modules/@mantine/dates/esm/components/DateInput/DateInput.mjs
var defaultProps21 = {
  valueFormat: "MMMM D, YYYY",
  fixOnBlur: true,
  preserveTime: true
};
var DateInput = factory((_props, ref) => {
  const props = useInputProps("DateInput", defaultProps21, _props);
  const {
    inputProps,
    wrapperProps,
    value,
    defaultValue,
    onChange,
    clearable,
    clearButtonProps,
    popoverProps,
    getDayProps,
    locale,
    valueFormat,
    dateParser,
    minDate,
    maxDate,
    fixOnBlur,
    onFocus,
    onBlur,
    onClick,
    readOnly,
    name,
    form,
    rightSection,
    unstyled,
    classNames,
    styles,
    allowDeselect,
    preserveTime,
    date,
    defaultDate,
    onDateChange,
    ...rest
  } = props;
  const [dropdownOpened, setDropdownOpened] = (0, import_react26.useState)(false);
  const { calendarProps, others } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const defaultDateParser = (val) => {
    const parsedDate = (0, import_dayjs33.default)(val, valueFormat, ctx.getLocale(locale)).toDate();
    return Number.isNaN(parsedDate.getTime()) ? dateStringParser(val, ctx.getTimezone()) : parsedDate;
  };
  const _dateParser = dateParser || defaultDateParser;
  const _allowDeselect = allowDeselect !== void 0 ? allowDeselect : clearable;
  const formatValue2 = (val) => val ? (0, import_dayjs33.default)(val).locale(ctx.getLocale(locale)).format(valueFormat) : "";
  const [_value, setValue, controlled] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const [_date, setDate] = useUncontrolledDates({
    type: "default",
    value: date,
    defaultValue: defaultValue || defaultDate,
    onChange: onDateChange
  });
  (0, import_react26.useEffect)(() => {
    if (controlled) {
      setDate(value);
    }
  }, [controlled, value]);
  const [inputValue, setInputValue] = (0, import_react26.useState)(formatValue2(_value));
  (0, import_react26.useEffect)(() => {
    setInputValue(formatValue2(_value));
  }, [ctx.getLocale(locale)]);
  const handleInputChange = (event) => {
    const val = event.currentTarget.value;
    setInputValue(val);
    setDropdownOpened(true);
    if (val.trim() === "" && clearable) {
      setValue(null);
    } else {
      const dateValue = _dateParser(val);
      if (isDateValid({ date: dateValue, minDate, maxDate })) {
        setValue(dateValue);
        setDate(dateValue);
      }
    }
  };
  const handleInputBlur = (event) => {
    onBlur == null ? void 0 : onBlur(event);
    setDropdownOpened(false);
    fixOnBlur && setInputValue(formatValue2(_value));
  };
  const handleInputFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
    setDropdownOpened(true);
  };
  const handleInputClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    setDropdownOpened(true);
  };
  const _getDayProps = (day) => ({
    ...getDayProps == null ? void 0 : getDayProps(day),
    selected: (0, import_dayjs33.default)(_value).isSame(day, "day"),
    onClick: () => {
      const valueWithTime = preserveTime ? assignTime(_value, day) : day;
      const val = clearable && _allowDeselect ? (0, import_dayjs33.default)(_value).isSame(day, "day") ? null : valueWithTime : valueWithTime;
      setValue(val);
      !controlled && setInputValue(formatValue2(val));
      setDropdownOpened(false);
    }
  });
  const _rightSection = rightSection || (clearable && _value && !readOnly ? import_react26.default.createElement(
    CloseButton,
    {
      variant: "transparent",
      onMouseDown: (event) => event.preventDefault(),
      tabIndex: -1,
      onClick: () => {
        setValue(null);
        !controlled && setInputValue("");
        setDropdownOpened(false);
      },
      unstyled,
      size: inputProps.size || "sm",
      ...clearButtonProps
    }
  ) : null);
  useDidUpdate(() => {
    value !== void 0 && !dropdownOpened && setInputValue(formatValue2(value));
  }, [value]);
  return import_react26.default.createElement(import_react26.default.Fragment, null, import_react26.default.createElement(Input.Wrapper, { ...wrapperProps, __staticSelector: "DateInput" }, import_react26.default.createElement(
    Popover,
    {
      opened: dropdownOpened,
      trapFocus: false,
      position: "bottom-start",
      disabled: readOnly,
      withRoles: false,
      unstyled,
      ...popoverProps
    },
    import_react26.default.createElement(Popover.Target, null, import_react26.default.createElement(
      Input,
      {
        "data-dates-input": true,
        "data-read-only": readOnly || void 0,
        autoComplete: "off",
        ref,
        value: inputValue,
        onChange: handleInputChange,
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        onClick: handleInputClick,
        readOnly,
        rightSection: _rightSection,
        ...inputProps,
        ...others,
        __staticSelector: "DateInput"
      }
    )),
    import_react26.default.createElement(Popover.Dropdown, { onMouseDown: (event) => event.preventDefault(), "data-dates-dropdown": true }, import_react26.default.createElement(
      Calendar,
      {
        __staticSelector: "DateInput",
        __timezoneApplied: true,
        ...calendarProps,
        classNames,
        styles,
        unstyled,
        __preventFocus: true,
        minDate,
        maxDate,
        locale,
        getDayProps: _getDayProps,
        size: inputProps.size,
        date: _date,
        onDateChange: setDate
      }
    ))
  )), import_react26.default.createElement(HiddenDatesInput, { name, form, value: _value, type: "default" }));
});
DateInput.classes = { ...Input.classes, ...Calendar.classes };
DateInput.displayName = "@mantine/dates/DateInput";

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.mjs
var import_dayjs34 = __toESM(require_dayjs_min(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.module.css.mjs
var classes11 = { "timeWrapper": "m_208d2562", "timeInput": "m_62ee059" };

// node_modules/@mantine/dates/esm/components/DateTimePicker/DateTimePicker.mjs
var defaultProps22 = {
  dropdownType: "popover"
};
var DateTimePicker = factory((_props, ref) => {
  const props = useProps("DateTimePicker", defaultProps22, _props);
  const {
    value,
    defaultValue,
    onChange,
    valueFormat,
    locale,
    classNames,
    styles,
    unstyled,
    timeInputProps,
    submitButtonProps,
    withSeconds,
    level,
    defaultLevel,
    size,
    variant,
    dropdownType,
    vars,
    minDate,
    maxDate,
    ...rest
  } = props;
  const getStyles = useStyles({
    name: "DateTimePicker",
    classes: classes11,
    props,
    classNames,
    styles,
    unstyled,
    vars
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    classNames,
    styles,
    props
  });
  const _valueFormat = valueFormat || (withSeconds ? "DD/MM/YYYY HH:mm:ss" : "DD/MM/YYYY HH:mm");
  const timeInputRef = (0, import_react27.useRef)();
  const timeInputRefMerged = useMergedRef(timeInputRef, timeInputProps == null ? void 0 : timeInputProps.ref);
  const {
    calendarProps: { allowSingleDateInRange, ...calendarProps },
    others
  } = pickCalendarProps(rest);
  const ctx = useDatesContext();
  const [_value, setValue] = useUncontrolledDates({
    type: "default",
    value,
    defaultValue,
    onChange
  });
  const formatTime = (dateValue) => dateValue ? (0, import_dayjs34.default)(dateValue).format(withSeconds ? "HH:mm:ss" : "HH:mm") : "";
  const [timeValue, setTimeValue] = (0, import_react27.useState)(formatTime(_value));
  const [currentLevel, setCurrentLevel] = (0, import_react27.useState)(level || defaultLevel || "month");
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const formattedValue = _value ? (0, import_dayjs34.default)(_value).locale(ctx.getLocale(locale)).format(_valueFormat) : "";
  const handleTimeChange = (event) => {
    var _a;
    (_a = timeInputProps == null ? void 0 : timeInputProps.onChange) == null ? void 0 : _a.call(timeInputProps, event);
    const val = event.currentTarget.value;
    setTimeValue(val);
    if (val) {
      const [hours, minutes, seconds] = val.split(":").map(Number);
      const timeDate = shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone());
      timeDate.setHours(hours);
      timeDate.setMinutes(minutes);
      timeDate.setSeconds(seconds || 0);
      setValue(assignTime(timeDate, _value || shiftTimezone("add", /* @__PURE__ */ new Date(), ctx.getTimezone())));
    }
  };
  const handleDateChange = (date) => {
    var _a;
    if (date) {
      setValue(assignTime(_value, date));
    }
    (_a = timeInputRef.current) == null ? void 0 : _a.focus();
  };
  const handleTimeInputKeyDown = (event) => {
    var _a;
    (_a = timeInputProps == null ? void 0 : timeInputProps.onKeyDown) == null ? void 0 : _a.call(timeInputProps, event);
    if (event.key === "Enter") {
      event.preventDefault();
      dropdownHandlers.close();
    }
  };
  useDidUpdate(() => {
    if (!dropdownOpened) {
      setTimeValue(formatTime(_value));
    }
  }, [_value, dropdownOpened]);
  useDidUpdate(() => {
    if (dropdownOpened) {
      setCurrentLevel("month");
    }
  }, [dropdownOpened]);
  const minTime = minDate ? (0, import_dayjs34.default)(minDate).format("HH:mm:ss") : null;
  const maxTime = maxDate ? (0, import_dayjs34.default)(maxDate).format("HH:mm:ss") : null;
  const __stopPropagation = dropdownType === "popover";
  return import_react27.default.createElement(
    PickerInputBase,
    {
      formattedValue,
      dropdownOpened,
      dropdownHandlers,
      classNames: resolvedClassNames,
      styles: resolvedStyles,
      unstyled,
      ref,
      onClear: () => setValue(null),
      shouldClear: !!_value,
      value: _value,
      size,
      variant,
      dropdownType,
      ...others,
      type: "default",
      __staticSelector: "DateTimePicker"
    },
    import_react27.default.createElement(
      DatePicker,
      {
        ...calendarProps,
        maxDate,
        minDate,
        size,
        variant,
        type: "default",
        value: _value,
        defaultDate: _value,
        onChange: handleDateChange,
        locale,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "DateTimePicker",
        __stopPropagation,
        level,
        defaultLevel,
        onLevelChange: (_level) => {
          var _a;
          setCurrentLevel(_level);
          (_a = calendarProps.onLevelChange) == null ? void 0 : _a.call(calendarProps, _level);
        },
        __timezoneApplied: true
      }
    ),
    currentLevel === "month" && import_react27.default.createElement("div", { ...getStyles("timeWrapper") }, import_react27.default.createElement(
      TimeInput,
      {
        value: timeValue,
        withSeconds,
        ref: timeInputRefMerged,
        unstyled,
        ...timeInputProps,
        ...getStyles("timeInput", {
          className: timeInputProps == null ? void 0 : timeInputProps.className,
          style: timeInputProps == null ? void 0 : timeInputProps.style
        }),
        onChange: handleTimeChange,
        onKeyDown: handleTimeInputKeyDown,
        minTime: _value && minDate && _value.toDateString() === minDate.toDateString() ? minTime != null ? minTime : void 0 : void 0,
        maxTime: _value && maxDate && _value.toDateString() === maxDate.toDateString() ? maxTime != null ? maxTime : void 0 : void 0,
        size,
        "data-mantine-stop-propagation": __stopPropagation || void 0
      }
    ), import_react27.default.createElement(
      ActionIcon,
      {
        variant: "default",
        size: `input-${size || "sm"}`,
        ...getStyles("submitButton", {
          className: submitButtonProps == null ? void 0 : submitButtonProps.className,
          style: submitButtonProps == null ? void 0 : submitButtonProps.style
        }),
        unstyled,
        "data-mantine-stop-propagation": __stopPropagation || void 0,
        children: import_react27.default.createElement(CheckIcon, { size: "30%" }),
        ...submitButtonProps,
        onClick: (event) => {
          var _a;
          (_a = submitButtonProps == null ? void 0 : submitButtonProps.onClick) == null ? void 0 : _a.call(submitButtonProps, event);
          dropdownHandlers.close();
        }
      }
    ))
  );
});
DateTimePicker.classes = { ...classes11, ...PickerInputBase.classes, ...DatePicker.classes };
DateTimePicker.displayName = "@mantine/dates/DateTimePicker";

// node_modules/@mantine/dates/esm/components/YearPickerInput/YearPickerInput.mjs
var import_react28 = __toESM(require_react(), 1);
var import_dayjs36 = __toESM(require_dayjs_min(), 1);

// node_modules/@mantine/dates/esm/hooks/use-dates-input/use-dates-input.mjs
var import_dayjs35 = __toESM(require_dayjs_min(), 1);
function useDatesInput({
  type,
  value,
  defaultValue,
  onChange,
  locale,
  format,
  closeOnChange,
  sortDates,
  labelSeparator,
  valueFormatter
}) {
  const ctx = useDatesContext();
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);
  const [_value, _setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange
  });
  const formattedValue = getFormattedDate({
    type,
    date: _value,
    locale: ctx.getLocale(locale),
    format,
    labelSeparator: ctx.getLabelSeparator(labelSeparator),
    formatter: valueFormatter
  });
  const setValue = (val) => {
    if (closeOnChange) {
      if (type === "default") {
        dropdownHandlers.close();
      }
      if (type === "range" && val[0] && val[1]) {
        dropdownHandlers.close();
      }
    }
    if (sortDates && type === "multiple") {
      _setValue([...val].sort((a, b) => a.getTime() - b.getTime()));
    } else {
      _setValue(val);
    }
  };
  const onClear = () => setValue(type === "range" ? [null, null] : type === "multiple" ? [] : null);
  const shouldClear = type === "range" ? !!_value[0] : type === "multiple" ? _value.length > 0 : _value !== null;
  return {
    _value,
    setValue,
    onClear,
    shouldClear,
    formattedValue,
    dropdownOpened,
    dropdownHandlers
  };
}

// node_modules/@mantine/dates/esm/components/YearPickerInput/YearPickerInput.mjs
var defaultProps23 = {
  type: "default",
  valueFormat: "YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var YearPickerInput = factory(
  (_props, ref) => {
    const props = useProps("YearPickerInput", defaultProps23, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const ctx = useDatesContext();
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    return import_react28.default.createElement(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "YearPickerInput"
      },
      import_react28.default.createElement(
        YearPicker,
        {
          ...calendarProps,
          size,
          variant,
          type,
          value: _value,
          defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }) : _value || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }),
          onChange: setValue,
          locale,
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          __staticSelector: "YearPickerInput",
          __stopPropagation: dropdownType === "popover",
          minDate,
          maxDate,
          date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
          __timezoneApplied: true
        }
      )
    );
  }
);
YearPickerInput.classes = { ...PickerInputBase.classes, ...YearPicker.classes };
YearPickerInput.displayName = "@mantine/dates/YearPickerInput";

// node_modules/@mantine/dates/esm/components/MonthPickerInput/MonthPickerInput.mjs
var import_react29 = __toESM(require_react(), 1);
var import_dayjs37 = __toESM(require_dayjs_min(), 1);
var defaultProps24 = {
  type: "default",
  valueFormat: "MMMM YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var MonthPickerInput = factory(
  (_props, ref) => {
    const props = useProps("MonthPickerInput", defaultProps24, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    const ctx = useDatesContext();
    return import_react29.default.createElement(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "MonthPickerInput"
      },
      import_react29.default.createElement(
        MonthPicker,
        {
          ...calendarProps,
          date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
          size,
          variant,
          type,
          value: _value,
          defaultDate: Array.isArray(_value) ? _value[0] || getDefaultClampedDate({ maxDate, minDate }) : _value || getDefaultClampedDate({ maxDate, minDate }),
          onChange: setValue,
          locale,
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          __staticSelector: "MonthPickerInput",
          __stopPropagation: dropdownType === "popover",
          minDate,
          maxDate,
          __timezoneApplied: true
        }
      )
    );
  }
);
MonthPickerInput.classes = { ...PickerInputBase.classes, ...MonthPicker.classes };
MonthPickerInput.displayName = "@mantine/dates/MonthPickerInput";

// node_modules/@mantine/dates/esm/components/DatePickerInput/DatePickerInput.mjs
var import_react30 = __toESM(require_react(), 1);
var import_dayjs38 = __toESM(require_dayjs_min(), 1);
var defaultProps25 = {
  type: "default",
  valueFormat: "MMMM D, YYYY",
  closeOnChange: true,
  sortDates: true,
  dropdownType: "popover"
};
var DatePickerInput = factory(
  (_props, ref) => {
    const props = useProps("DatePickerInput", defaultProps25, _props);
    const {
      type,
      value,
      defaultValue,
      onChange,
      valueFormat,
      labelSeparator,
      locale,
      classNames,
      styles,
      unstyled,
      closeOnChange,
      size,
      variant,
      dropdownType,
      sortDates,
      minDate,
      maxDate,
      vars,
      defaultDate,
      valueFormatter,
      ...rest
    } = props;
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    const { calendarProps, others } = pickCalendarProps(rest);
    const {
      _value,
      setValue,
      formattedValue,
      dropdownHandlers,
      dropdownOpened,
      onClear,
      shouldClear
    } = useDatesInput({
      type,
      value,
      defaultValue,
      onChange,
      locale,
      format: valueFormat,
      labelSeparator,
      closeOnChange,
      sortDates,
      valueFormatter
    });
    const _defaultDate = Array.isArray(_value) ? _value[0] || defaultDate : _value || defaultDate;
    const ctx = useDatesContext();
    return import_react30.default.createElement(
      PickerInputBase,
      {
        formattedValue,
        dropdownOpened,
        dropdownHandlers,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        ref,
        onClear,
        shouldClear,
        value: _value,
        size,
        variant,
        dropdownType,
        ...others,
        type,
        __staticSelector: "DatePickerInput"
      },
      import_react30.default.createElement(
        DatePicker,
        {
          ...calendarProps,
          size,
          variant,
          type,
          value: _value,
          defaultDate: _defaultDate || getDefaultClampedDate({ maxDate, minDate, timezone: ctx.getTimezone() }),
          onChange: setValue,
          locale,
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          unstyled,
          __staticSelector: "DatePickerInput",
          __stopPropagation: dropdownType === "popover",
          minDate,
          maxDate,
          date: shiftTimezone("add", calendarProps.date, ctx.getTimezone()),
          __timezoneApplied: true
        }
      )
    );
  }
);
DatePickerInput.classes = { ...PickerInputBase.classes, ...DatePicker.classes };
DatePickerInput.displayName = "@mantine/dates/DatePickerInput";
export {
  Calendar,
  CalendarHeader,
  DATES_PROVIDER_DEFAULT_SETTINGS,
  DateInput,
  DatePicker,
  DatePickerInput,
  DateTimePicker,
  DatesProvider,
  Day,
  DecadeLevel,
  DecadeLevelGroup,
  HiddenDatesInput,
  LevelsGroup,
  Month,
  MonthLevel,
  MonthLevelGroup,
  MonthPicker,
  MonthPickerInput,
  MonthsList,
  PickerControl,
  PickerInputBase,
  TimeInput,
  WeekdaysRow,
  YearLevel,
  YearLevelGroup,
  YearPicker,
  YearPickerInput,
  YearsList,
  assignTime,
  getDefaultClampedDate,
  getEndOfWeek,
  getFormattedDate,
  getMonthDays,
  getStartOfWeek,
  handleControlKeyDown,
  isSameMonth,
  pickCalendarProps,
  shiftTimezone,
  useDatesContext
};
//# sourceMappingURL=@mantine_dates.js.map
