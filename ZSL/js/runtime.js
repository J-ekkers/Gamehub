(() => {
    "use strict";
    var r,
      e = {},
      t = {};
    function o(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var a = (t[r] = { exports: {} });
      return e[r](a, a.exports, o), a.exports;
    }
    (o.m = e),
      (r = []),
      (o.O = (e, t, n, a) => {
        if (!t) {
          var i = 1 / 0;
          for (f = 0; f < r.length; f++) {
            for (var [t, n, a] = r[f], s = !0, l = 0; l < t.length; l++)
              (!1 & a || i >= a) && Object.keys(o.O).every((r) => o.O[r](t[l]))
                ? t.splice(l--, 1)
                : ((s = !1), a < i && (i = a));
            if (s) {
              r.splice(f--, 1);
              var p = n();
              void 0 !== p && (e = p);
            }
          }
          return e;
        }
        a = a || 0;
        for (var f = r.length; f > 0 && r[f - 1][2] > a; f--) r[f] = r[f - 1];
        r[f] = [t, n, a];
      }),
      (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
      (() => {
        var r = { 666: 0 };
        o.O.j = (e) => 0 === r[e];
        var e = (e, t) => {
            var n,
              a,
              [i, s, l] = t,
              p = 0;
            if (i.some((e) => 0 !== r[e])) {
              for (n in s) o.o(s, n) && (o.m[n] = s[n]);
              if (l) var f = l(o);
            }
            for (e && e(t); p < i.length; p++)
              (a = i[p]), o.o(r, a) && r[a] && r[a][0](), (r[a] = 0);
            return o.O(f);
          },
          t = (self.webpackChunkBattleship = self.webpackChunkBattleship || []);
        t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
      })();
  })();
  