var zr = Object.defineProperty;
var Gr = (r, e, l) =>
  e in r
    ? zr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (r[e] = l);
var al = (r, e, l) => (Gr(r, typeof e != "symbol" ? e + "" : e, l), l);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) t(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && t(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function t(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = l(n);
    fetch(n.href, a);
  }
})();
function R() {}
const Ur = (r) => r;
function Jr(r, e) {
  for (const l in e) r[l] = e[l];
  return r;
}
function Cr(r) {
  return r();
}
function Vl() {
  return Object.create(null);
}
function ve(r) {
  r.forEach(Cr);
}
function nl(r) {
  return typeof r == "function";
}
function K(r, e) {
  return r != r
    ? e == e
    : r !== e || (r && typeof r == "object") || typeof r == "function";
}
let Jt;
function fl(r, e) {
  return r === e
    ? !0
    : (Jt || (Jt = document.createElement("a")), (Jt.href = e), r === Jt.href);
}
function Yr(r) {
  return Object.keys(r).length === 0;
}
function qr(r, ...e) {
  if (r == null) {
    for (const t of e) t(void 0);
    return R;
  }
  const l = r.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function V(r, e, l) {
  r.$$.on_destroy.push(qr(e, l));
}
function Er(r, e, l, t) {
  if (r) {
    const n = Dr(r, e, l, t);
    return r[0](n);
  }
}
function Dr(r, e, l, t) {
  return r[1] && t ? Jr(l.ctx.slice(), r[1](t(e))) : l.ctx;
}
function Lr(r, e, l, t) {
  if (r[2] && t) {
    const n = r[2](t(l));
    if (e.dirty === void 0) return n;
    if (typeof n == "object") {
      const a = [],
        o = Math.max(e.dirty.length, n.length);
      for (let s = 0; s < o; s += 1) a[s] = e.dirty[s] | n[s];
      return a;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function Sr(r, e, l, t, n, a) {
  if (n) {
    const o = Dr(e, l, t, a);
    r.p(o, n);
  }
}
function Ar(r) {
  if (r.ctx.length > 32) {
    const e = [],
      l = r.ctx.length / 32;
    for (let t = 0; t < l; t++) e[t] = -1;
    return e;
  }
  return -1;
}
function Kt(r) {
  return r ?? "";
}
function be(r, e, l) {
  return r.set(l), e;
}
function Hl(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [r, "px"];
}
const Nr = typeof window < "u";
let Wr = Nr ? () => window.performance.now() : () => Date.now(),
  Ll = Nr ? (r) => requestAnimationFrame(r) : R;
const Tt = new Set();
function Ir(r) {
  Tt.forEach((e) => {
    e.c(r) || (Tt.delete(e), e.f());
  }),
    Tt.size !== 0 && Ll(Ir);
}
function xr(r) {
  let e;
  return (
    Tt.size === 0 && Ll(Ir),
    {
      promise: new Promise((l) => {
        Tt.add((e = { c: r, f: l }));
      }),
      abort() {
        Tt.delete(e);
      },
    }
  );
}
function f(r, e) {
  r.appendChild(e);
}
function Mr(r) {
  if (!r) return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && e.host ? e : r.ownerDocument;
}
function Kr(r) {
  const e = p("style");
  return (e.textContent = "/* empty */"), Qr(Mr(r), e), e.sheet;
}
function Qr(r, e) {
  return f(r.head || r, e), e.sheet;
}
function E(r, e, l) {
  r.insertBefore(e, l || null);
}
function C(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function _e(r, e) {
  for (let l = 0; l < r.length; l += 1) r[l] && r[l].d(e);
}
function p(r) {
  return document.createElement(r);
}
function L(r) {
  return document.createTextNode(r);
}
function y() {
  return L(" ");
}
function Q() {
  return L("");
}
function B(r, e, l, t) {
  return r.addEventListener(e, l, t), () => r.removeEventListener(e, l, t);
}
function h(r, e, l) {
  l == null
    ? r.removeAttribute(e)
    : r.getAttribute(e) !== l && r.setAttribute(e, l);
}
function Pr(r) {
  return r === "" ? null : +r;
}
function Xr(r) {
  return Array.from(r.childNodes);
}
function M(r, e) {
  (e = "" + e), r.data !== e && (r.data = e);
}
function ze(r, e) {
  r.value = e ?? "";
}
function Mt(r, e, l, t) {
  l == null
    ? r.style.removeProperty(e)
    : r.style.setProperty(e, l, t ? "important" : "");
}
function Te(r, e, l) {
  r.classList.toggle(e, !!l);
}
function Zr(r, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: l, cancelable: t });
}
const Qt = new Map();
let Xt = 0;
function eo(r) {
  let e = 5381,
    l = r.length;
  for (; l--; ) e = ((e << 5) - e) ^ r.charCodeAt(l);
  return e >>> 0;
}
function to(r, e) {
  const l = { stylesheet: Kr(e), rules: {} };
  return Qt.set(r, l), l;
}
function Fl(r, e, l, t, n, a, o, s = 0) {
  const i = 16.666 / t;
  let c = `{
`;
  for (let w = 0; w <= 1; w += i) {
    const g = e + (l - e) * a(w);
    c +=
      w * 100 +
      `%{${o(g, 1 - g)}}
`;
  }
  const u =
      c +
      `100% {${o(l, 1 - l)}}
}`,
    d = `__svelte_${eo(u)}_${s}`,
    _ = Mr(r),
    { stylesheet: v, rules: m } = Qt.get(_) || to(_, r);
  m[d] ||
    ((m[d] = !0), v.insertRule(`@keyframes ${d} ${u}`, v.cssRules.length));
  const k = r.style.animation || "";
  return (
    (r.style.animation = `${
      k ? `${k}, ` : ""
    }${d} ${t}ms linear ${n}ms 1 both`),
    (Xt += 1),
    d
  );
}
function lo(r, e) {
  const l = (r.style.animation || "").split(", "),
    t = l.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    n = l.length - t.length;
  n && ((r.style.animation = t.join(", ")), (Xt -= n), Xt || no());
}
function no() {
  Ll(() => {
    Xt ||
      (Qt.forEach((r) => {
        const { ownerNode: e } = r.stylesheet;
        e && C(e);
      }),
      Qt.clear());
  });
}
let Gt;
function Ft(r) {
  Gt = r;
}
function Tr() {
  if (!Gt) throw new Error("Function called outside component initialization");
  return Gt;
}
function it(r) {
  Tr().$$.on_mount.push(r);
}
function ro(r) {
  Tr().$$.on_destroy.push(r);
}
const It = [],
  zl = [];
let jt = [];
const Gl = [],
  oo = Promise.resolve();
let cl = !1;
function ao() {
  cl || ((cl = !0), oo.then(jr));
}
function qe(r) {
  jt.push(r);
}
const il = new Set();
let At = 0;
function jr() {
  if (At !== 0) return;
  const r = Gt;
  do {
    try {
      for (; At < It.length; ) {
        const e = It[At];
        At++, Ft(e), io(e.$$);
      }
    } catch (e) {
      throw ((It.length = 0), (At = 0), e);
    }
    for (Ft(null), It.length = 0, At = 0; zl.length; ) zl.pop()();
    for (let e = 0; e < jt.length; e += 1) {
      const l = jt[e];
      il.has(l) || (il.add(l), l());
    }
    jt.length = 0;
  } while (It.length);
  for (; Gl.length; ) Gl.pop()();
  (cl = !1), il.clear(), Ft(r);
}
function io(r) {
  if (r.fragment !== null) {
    r.update(), ve(r.before_update);
    const e = r.dirty;
    (r.dirty = [-1]),
      r.fragment && r.fragment.p(r.ctx, e),
      r.after_update.forEach(qe);
  }
}
function so(r) {
  const e = [],
    l = [];
  jt.forEach((t) => (r.indexOf(t) === -1 ? e.push(t) : l.push(t))),
    l.forEach((t) => t()),
    (jt = e);
}
let Ht;
function fo() {
  return (
    Ht ||
      ((Ht = Promise.resolve()),
      Ht.then(() => {
        Ht = null;
      })),
    Ht
  );
}
function sl(r, e, l) {
  r.dispatchEvent(Zr(`${e ? "intro" : "outro"}${l}`));
}
const Wt = new Set();
let at;
function Z() {
  at = { r: 0, c: [], p: at };
}
function ee() {
  at.r || ve(at.c), (at = at.p);
}
function S(r, e) {
  r && r.i && (Wt.delete(r), r.i(e));
}
function N(r, e, l, t) {
  if (r && r.o) {
    if (Wt.has(r)) return;
    Wt.add(r),
      at.c.push(() => {
        Wt.delete(r), t && (l && r.d(1), t());
      }),
      r.o(e);
  } else t && t();
}
const co = { duration: 0 };
function je(r, e, l, t) {
  let a = e(r, l, { direction: "both" }),
    o = t ? 0 : 1,
    s = null,
    i = null,
    c = null,
    u;
  function d() {
    c && lo(r, c);
  }
  function _(m, k) {
    const w = m.b - o;
    return (
      (k *= Math.abs(w)),
      {
        a: o,
        b: m.b,
        d: w,
        duration: k,
        start: m.start,
        end: m.start + k,
        group: m.group,
      }
    );
  }
  function v(m) {
    const {
        delay: k = 0,
        duration: w = 300,
        easing: g = Ur,
        tick: b = R,
        css: $,
      } = a || co,
      A = { start: Wr() + k, b: m };
    m || ((A.group = at), (at.r += 1)),
      "inert" in r &&
        (m ? u !== void 0 && (r.inert = u) : ((u = r.inert), (r.inert = !0))),
      s || i
        ? (i = A)
        : ($ && (d(), (c = Fl(r, o, m, w, k, g, $))),
          m && b(0, 1),
          (s = _(A, w)),
          qe(() => sl(r, m, "start")),
          xr((D) => {
            if (
              (i &&
                D > i.start &&
                ((s = _(i, w)),
                (i = null),
                sl(r, s.b, "start"),
                $ && (d(), (c = Fl(r, o, s.b, s.duration, 0, g, a.css)))),
              s)
            ) {
              if (D >= s.end)
                b((o = s.b), 1 - o),
                  sl(r, s.b, "end"),
                  i || (s.b ? d() : --s.group.r || ve(s.group.c)),
                  (s = null);
              else if (D >= s.start) {
                const I = D - s.start;
                (o = s.a + s.d * g(I / s.duration)), b(o, 1 - o);
              }
            }
            return !!(s || i);
          }));
  }
  return {
    run(m) {
      nl(a)
        ? fo().then(() => {
            (a = a({ direction: m ? "in" : "out" })), v(m);
          })
        : v(m);
    },
    end() {
      d(), (s = i = null);
    },
  };
}
function Y(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function Sl(r, e) {
  r.d(1), e.delete(r.key);
}
function Al(r, e, l, t, n, a, o, s, i, c, u, d) {
  let _ = r.length,
    v = a.length,
    m = _;
  const k = {};
  for (; m--; ) k[r[m].key] = m;
  const w = [],
    g = new Map(),
    b = new Map(),
    $ = [];
  for (m = v; m--; ) {
    const T = d(n, a, m),
      O = l(T);
    let z = o.get(O);
    z ? t && $.push(() => z.p(T, e)) : ((z = c(O, T)), z.c()),
      g.set(O, (w[m] = z)),
      O in k && b.set(O, Math.abs(m - k[O]));
  }
  const A = new Set(),
    D = new Set();
  function I(T) {
    S(T, 1), T.m(s, u), o.set(T.key, T), (u = T.first), v--;
  }
  for (; _ && v; ) {
    const T = w[v - 1],
      O = r[_ - 1],
      z = T.key,
      j = O.key;
    T === O
      ? ((u = T.first), _--, v--)
      : g.has(j)
      ? !o.has(z) || A.has(z)
        ? I(T)
        : D.has(j)
        ? _--
        : b.get(z) > b.get(j)
        ? (D.add(z), I(T))
        : (A.add(j), _--)
      : (i(O, o), _--);
  }
  for (; _--; ) {
    const T = r[_];
    g.has(T.key) || i(T, o);
  }
  for (; v; ) I(w[v - 1]);
  return ve($), w;
}
function G(r) {
  r && r.c();
}
function H(r, e, l) {
  const { fragment: t, after_update: n } = r.$$;
  t && t.m(e, l),
    qe(() => {
      const a = r.$$.on_mount.map(Cr).filter(nl);
      r.$$.on_destroy ? r.$$.on_destroy.push(...a) : ve(a),
        (r.$$.on_mount = []);
    }),
    n.forEach(qe);
}
function F(r, e) {
  const l = r.$$;
  l.fragment !== null &&
    (so(l.after_update),
    ve(l.on_destroy),
    l.fragment && l.fragment.d(e),
    (l.on_destroy = l.fragment = null),
    (l.ctx = []));
}
function uo(r, e) {
  r.$$.dirty[0] === -1 && (It.push(r), ao(), r.$$.dirty.fill(0)),
    (r.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function le(r, e, l, t, n, a, o = null, s = [-1]) {
  const i = Gt;
  Ft(r);
  const c = (r.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: R,
    not_equal: n,
    bound: Vl(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: Vl(),
    dirty: s,
    skip_bound: !1,
    root: e.target || i.$$.root,
  });
  o && o(c.root);
  let u = !1;
  if (
    ((c.ctx = l
      ? l(r, e.props || {}, (d, _, ...v) => {
          const m = v.length ? v[0] : _;
          return (
            c.ctx &&
              n(c.ctx[d], (c.ctx[d] = m)) &&
              (!c.skip_bound && c.bound[d] && c.bound[d](m), u && uo(r, d)),
            _
          );
        })
      : []),
    c.update(),
    (u = !0),
    ve(c.before_update),
    (c.fragment = t ? t(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = Xr(e.target);
      c.fragment && c.fragment.l(d), d.forEach(C);
    } else c.fragment && c.fragment.c();
    e.intro && S(r.$$.fragment), H(r, e.target, e.anchor), jr();
  }
  Ft(i);
}
class ne {
  constructor() {
    al(this, "$$");
    al(this, "$$set");
  }
  $destroy() {
    F(this, 1), (this.$destroy = R);
  }
  $on(e, l) {
    if (!nl(l)) return R;
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      t.push(l),
      () => {
        const n = t.indexOf(l);
        n !== -1 && t.splice(n, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Yr(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const po = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(po);
function Qe(r, e) {
  const l = (t) => {
    const { action: n, data: a } = t.data;
    n === r && e(a);
  };
  it(() => window.addEventListener("message", l)),
    ro(() => window.removeEventListener("message", l));
}
const Nt = [];
function ae(r, e = R) {
  let l;
  const t = new Set();
  function n(s) {
    if (K(r, s) && ((r = s), l)) {
      const i = !Nt.length;
      for (const c of t) c[1](), Nt.push(c, r);
      if (i) {
        for (let c = 0; c < Nt.length; c += 2) Nt[c][0](Nt[c + 1]);
        Nt.length = 0;
      }
    }
  }
  function a(s) {
    n(s(r));
  }
  function o(s, i = R) {
    const c = [s, i];
    return (
      t.add(c),
      t.size === 1 && (l = e(n, a) || R),
      s(r),
      () => {
        t.delete(c), t.size === 0 && l && (l(), (l = null));
      }
    );
  }
  return { set: n, update: a, subscribe: o };
}
const Yt = ae(!1),
  Zt = ae(!1),
  ul = ae(""),
  Ul = ae(!1),
  Be = ae(!1),
  dl = ae("Actions"),
  Jl = ae("");
let pl = !1;
Zt.subscribe((r) => {
  pl = r;
});
let Rr = "";
ul.subscribe((r) => {
  Rr = r;
});
async function pe(r, e = {}, l) {
  if ((pl == !0 && l) || pl == !0) return Promise.resolve(l || {});
  const t = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(e),
    },
    n = window.GetParentResourceName ? window.GetParentResourceName() : Rr;
  return await (await fetch(`https://${n}/${r}`, t)).json();
}
function Yl(r) {
  let e, l, t;
  const n = r[3].default,
    a = Er(n, r, r[2], null);
  return {
    c() {
      (e = p("main")),
        a && a.c(),
        h(
          e,
          "class",
          (l =
            "w-screen h-screen flex justify-end items-center " +
            (r[1] ? "justify-center" : " ") +
            " svelte-1afztrv")
        );
    },
    m(o, s) {
      E(o, e, s), a && a.m(e, null), (t = !0);
    },
    p(o, s) {
      a &&
        a.p &&
        (!t || s & 4) &&
        Sr(a, n, o, o[2], t ? Lr(n, o[2], s, null) : Ar(o[2]), null),
        (!t ||
          (s & 2 &&
            l !==
              (l =
                "w-screen h-screen flex justify-end items-center " +
                (o[1] ? "justify-center" : " ") +
                " svelte-1afztrv"))) &&
          h(e, "class", l);
    },
    i(o) {
      t || (S(a, o), (t = !0));
    },
    o(o) {
      N(a, o), (t = !1);
    },
    d(o) {
      o && C(e), a && a.d(o);
    },
  };
}
function _o(r) {
  let e,
    l,
    t = r[0] && Yl(r);
  return {
    c() {
      t && t.c(), (e = Q());
    },
    m(n, a) {
      t && t.m(n, a), E(n, e, a), (l = !0);
    },
    p(n, [a]) {
      n[0]
        ? t
          ? (t.p(n, a), a & 1 && S(t, 1))
          : ((t = Yl(n)), t.c(), S(t, 1), t.m(e.parentNode, e))
        : t &&
          (Z(),
          N(t, 1, 1, () => {
            t = null;
          }),
          ee());
    },
    i(n) {
      l || (S(t), (l = !0));
    },
    o(n) {
      N(t), (l = !1);
    },
    d(n) {
      n && C(e), t && t.d(n);
    },
  };
}
function ho(r, e, l) {
  let t;
  V(r, Be, (i) => l(1, (t = i)));
  let { $$slots: n = {}, $$scope: a } = e,
    o,
    s;
  return (
    Zt.subscribe((i) => {
      s = i;
    }),
    Yt.subscribe((i) => {
      l(0, (o = i));
    }),
    Qe("setVisible", (i) => {
      Yt.set(i);
    }),
    Qe("setBrowserMode", (i) => {
      Zt.set(i);
    }),
    it(() => {
      const i = (c) => {
        o && ["Escape"].includes(c.code) && (pe("hideUI"), Yt.set(!1)),
          !o && ["Escape"].includes(c.code) && s === !0 && Yt.set(!0);
      };
      return (
        window.addEventListener("keydown", i),
        () => window.removeEventListener("keydown", i)
      );
    }),
    (r.$$set = (i) => {
      "$$scope" in i && l(2, (a = i.$$scope));
    }),
    [o, t, a, n]
  );
}
class mo extends ne {
  constructor(e) {
    super(), le(this, e, ho, _o, K, {});
  }
}
const bo = () => !window.invokeNative,
  Pt = (r, e = 0) => {
    if (bo())
      for (const l of r)
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: { action: l.action, data: l.data },
            })
          );
        }, e);
  };
function ql(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function Wl(r, e, l) {
  const t = r.slice();
  return (t[10] = e[l]), t;
}
function xl(r) {
  let e,
    l = Y(r[1]),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = Ql(ql(r, l, n));
  return {
    c() {
      e = p("div");
      for (let n = 0; n < t.length; n += 1) t[n].c();
      h(e, "class", "w-fit h-fit bg-neutral-800 p-2 ");
    },
    m(n, a) {
      E(n, e, a);
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(e, null);
    },
    p(n, a) {
      if (a & 2) {
        l = Y(n[1]);
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = ql(n, l, o);
          t[o] ? t[o].p(s, a) : ((t[o] = Ql(s)), t[o].c(), t[o].m(e, null));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Kl(r) {
  let e, l, t;
  function n() {
    return r[3](r[10]);
  }
  return {
    c() {
      (e = p("button")),
        (e.textContent = `${r[10].name}`),
        h(e, "class", "bg-neutral-600 p-2");
    },
    m(a, o) {
      E(a, e, o), l || ((t = B(e, "click", n)), (l = !0));
    },
    p(a, o) {
      r = a;
    },
    d(a) {
      a && C(e), (l = !1), t();
    },
  };
}
function Ql(r) {
  let e,
    l,
    t,
    n,
    a = Y(r[7].actions),
    o = [];
  for (let s = 0; s < a.length; s += 1) o[s] = Kl(Wl(r, a, s));
  return {
    c() {
      (e = p("div")),
        (l = p("p")),
        (l.textContent = `${r[7].component}`),
        (t = y());
      for (let s = 0; s < o.length; s += 1) o[s].c();
      (n = y()),
        h(l, "class", "h-full w-full mr-2"),
        h(e, "class", "flex flex-row gap-2 items-center m-1");
    },
    m(s, i) {
      E(s, e, i), f(e, l), f(e, t);
      for (let c = 0; c < o.length; c += 1) o[c] && o[c].m(e, null);
      f(e, n);
    },
    p(s, i) {
      if (i & 2) {
        a = Y(s[7].actions);
        let c;
        for (c = 0; c < a.length; c += 1) {
          const u = Wl(s, a, c);
          o[c] ? o[c].p(u, i) : ((o[c] = Kl(u)), o[c].c(), o[c].m(e, n));
        }
        for (; c < o.length; c += 1) o[c].d(1);
        o.length = a.length;
      }
    },
    d(s) {
      s && C(e), _e(o, s);
    },
  };
}
function vo(r) {
  let e,
    l,
    t,
    n,
    a,
    o = r[0] && xl(r);
  return {
    c() {
      (e = p("div")),
        (l = p("button")),
        (l.textContent = "Show"),
        (t = y()),
        o && o.c(),
        h(l, "class", "bg-neutral-800 p-3 3 font-medium uppercase"),
        h(e, "class", "absolute top-0 z-[1000] font-medium uppercase m-4");
    },
    m(s, i) {
      E(s, e, i),
        f(e, l),
        f(e, t),
        o && o.m(e, null),
        n || ((a = B(l, "click", r[2])), (n = !0));
    },
    p(s, [i]) {
      s[0]
        ? o
          ? o.p(s, i)
          : ((o = xl(s)), o.c(), o.m(e, null))
        : o && (o.d(1), (o = null));
    },
    i: R,
    o: R,
    d(s) {
      s && C(e), o && o.d(), (n = !1), a();
    },
  };
}
function go(r, e, l) {
  let t = !1;
  const n = [
      {
        id: "admin_car",
        label: "Admin Car",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:admincar",
      },
      {
        id: "ban_player",
        label: "Ban Player",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "noclip",
        label: "Noclip",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:noclip",
      },
      {
        id: "invisible",
        label: "Invisible",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:invisible",
      },
      {
        id: "kick_player",
        label: "Kick Player",
        type: "client",
        perms: "mod",
        event: "ps-adminmenu:client:kickplayer",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "mod",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "ps-adminmenu:client:banplayer",
          },
        ],
      },
    ],
    a = [
      { name: "ps-adminmenu", resourceState: "started" },
      {
        name: "ps-mdt",
        version: "1.0.0",
        description: "A cool mdt",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-dispatch",
        version: "1.0.0",
        description: "A cool dispatch",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-hosuing",
        version: "1.0.0",
        description: "A cool house",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-camera",
        version: "1.0.0",
        description: "A cool camera",
        author: "Project Sloth and ok1ez ok1ez",
        resourceState: "started",
      },
      {
        name: "ps-hud",
        version: "1.0.0",
        description: "A cool hud",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-fuel",
        version: "1.0.0",
        description: "A cool gas pump",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-liveries",
        version: "1.0.0",
        description: "A cool liverie",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-ui",
        version: "1.0.0",
        description: "A cool ui",
        author: "Project Sloth",
        resourceState: "stopped",
      },
    ],
    o = [
      {
        id: "1",
        citizenid: "ERP95808",
        name: "John Doe",
        job: "Police Officer",
        phone: "555-555-5555",
        discord: "discord:917110675220865025",
        dateofbirth: "01/12/2001",
        bank: "10022",
        cash: "2022",
        license: "license:9e9df5e3b52641da00f5b2aba25edc45317689b2",
      },
      {
        id: "2",
        citizenid: "ERP87521",
        name: "Jane Smith",
        job: "Paramedic",
        phone: "555-555-1234",
        discord: "discord:732198415678290144",
        dateofbirth: "05/18/1990",
        bank: "8000",
        cash: "150",
        license: "license:5a0f4e86c7d283b3cde6acba9821d4a5913076d8",
      },
      {
        id: "3",
        citizenid: "ERP35267",
        name: "Michael Johnson",
        job: "Mechanic",
        phone: "555-555-9876",
        discord: "discord:609827518329704632",
        dateofbirth: "11/03/1985",
        bank: "500",
        cash: "3500",
        license: "license:c5f2b76a8e1e0d4c7892a3d1b74cf561b89e25e7",
      },
      {
        id: "4",
        citizenid: "ERP70125",
        name: "Emily Davis",
        job: "Lawyer",
        phone: "555-555-2222",
        discord: "discord:815369027403189267",
        dateofbirth: "09/21/1988",
        bank: "22000",
        cash: "500",
        license: "license:3d4e6f7aa1b9e8c5d2fbc0439e1a865b470192f4",
      },
      {
        id: "5",
        citizenid: "ERP48039",
        name: "Robert Wilson",
        job: "Taxi Driver",
        phone: "555-555-7777",
        discord: "discord:518942015678302479",
        dateofbirth: "07/08/1977",
        bank: "1200",
        cash: "780",
        license: "license:98e7c6d5a2b3f1e4d0c9876a5432109bfedc8a76",
      },
      {
        id: "6",
        citizenid: "ERP91726",
        name: "Amanda Lee",
        job: "Chef",
        phone: "555-555-3333",
        discord: "discord:725048390162871590",
        dateofbirth: "03/15/1995",
        bank: "4000",
        cash: "200",
        license: "license:4a5b6c7d8e9f01234567890abcdef1234567890",
      },
      {
        id: "7",
        citizenid: "ERP24680",
        name: "Christopher Martinez",
        job: "Firefighter",
        phone: "555-555-8888",
        discord: "discord:926371058274690831",
        dateofbirth: "12/30/1982",
        bank: "7500",
        cash: "1000",
        license: "license:7890123456abcdef0123456789a5b4c3d2e1f0",
      },
    ];
  return (
    Pt([{ action: "setActionData", data: n }]),
    Pt([{ action: "setResourceData", data: a }]),
    Pt([{ action: "setPlayersData", data: o }]),
    [
      t,
      [
        {
          component: "Show",
          actions: [
            { name: "show", action: "setVisible", data: !0 },
            { name: "hide", action: "setVisible", data: !1 },
          ],
        },
        {
          component: "Actions Data",
          actions: [{ name: "Set Data", action: "setActionData", data: n }],
        },
        {
          component: "Resource Data",
          actions: [{ name: "Set Data", action: "setResourceData", data: a }],
        },
        {
          component: "Player Data",
          actions: [{ name: "Set Data", action: "setPlayersData", data: o }],
        },
      ],
      () => {
        l(0, (t = !t));
      },
      (u) => {
        if (u.custom == !0) {
          u.customFunction();
          return;
        }
        Pt([{ action: u.action, data: u.data }]);
      },
    ]
  );
}
class wo extends ne {
  constructor(e) {
    super(), le(this, e, go, vo, K, {});
  }
}
const xt = ae(!0),
  _l = ae(null),
  hl = ae(null),
  ml = ae(null),
  bl = ae(null),
  vl = ae(null),
  gl = ae(null),
  wl = ae(null),
  kl = ae(null),
  Or = ae(null),
  Rt = ae(null),
  ko = ae(null),
  zt = ae(null),
  yl = ae(null),
  $l = ae(null),
  Cl = ae(null),
  Xl = ae(null),
  el = ae(null),
  tl = ae(null),
  El = ae(null),
  Br = ae(null),
  ll = ae(null);
function yo(r, e, l) {
  let t, n, a, o, s, i, c, u, d, _, v, m, k, w, g, b, $, A;
  return (
    V(r, El, (D) => l(0, (t = D))),
    V(r, ll, (D) => l(1, (n = D))),
    V(r, tl, (D) => l(2, (a = D))),
    V(r, el, (D) => l(3, (o = D))),
    V(r, wl, (D) => l(4, (s = D))),
    V(r, gl, (D) => l(5, (i = D))),
    V(r, vl, (D) => l(6, (c = D))),
    V(r, bl, (D) => l(7, (u = D))),
    V(r, ml, (D) => l(8, (d = D))),
    V(r, hl, (D) => l(9, (_ = D))),
    V(r, Rt, (D) => l(10, (v = D))),
    V(r, zt, (D) => l(11, (m = D))),
    V(r, Xl, (D) => l(12, (k = D))),
    V(r, $l, (D) => l(13, (w = D))),
    V(r, Cl, (D) => l(14, (g = D))),
    V(r, yl, (D) => l(15, (b = D))),
    V(r, kl, (D) => l(16, ($ = D))),
    V(r, _l, (D) => l(17, (A = D))),
    Pt([{ action: "setVisible", data: !0 }]),
    Pt([{ action: "setBrowserMode", data: !0 }]),
    Qe("setupUI", (D) => {
      be(_l, (A = D.actions), A),
        be(zt, (m = D.resources), m),
        be(kl, ($ = D.playerData), $),
        be(yl, (b = D.commands), b),
        be(Cl, (g = D.vehicles), g),
        be($l, (w = D.items), w),
        be(Xl, (k = D.server), k);
    }),
    Qe("setResourceData", (D) => {
      be(zt, (m = D), m);
    }),
    Qe("setPlayersData", (D) => {
      be(Rt, (v = D), v);
    }),
    Qe("data", (D) => {
      be(hl, (_ = D.vehicles), _),
        be(ml, (d = D.items), d),
        be(bl, (u = D.jobs), u),
        be(vl, (c = D.gangs), c),
        be(gl, (i = D.locations), i),
        be(wl, (s = D.pedlist), s);
    }),
    Qe("showVehicleMenu", (D) => {
      be(el, (o = D), o);
    }),
    Qe("showCoordsMenu", (D) => {
      be(tl, (a = D), a);
    }),
    Qe("showEntityInfo", (D) => {
      be(ll, (n = D), n);
    }),
    Qe("setMessages", (D) => {
      El.set(D), Br.set(t[0]);
    }),
    []
  );
}
class $o extends ne {
  constructor(e) {
    super(), le(this, e, yo, null, K, {});
  }
}
function Vr(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function ht(
  r,
  {
    delay: e = 0,
    duration: l = 400,
    easing: t = Vr,
    x: n = 0,
    y: a = 0,
    opacity: o = 0,
  } = {}
) {
  const s = getComputedStyle(r),
    i = +s.opacity,
    c = s.transform === "none" ? "" : s.transform,
    u = i * (1 - o),
    [d, _] = Hl(n),
    [v, m] = Hl(a);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (k, w) => `
			transform: ${c} translate(${(1 - k) * d}${_}, ${(1 - k) * v}${m});
			opacity: ${i - u * w}`,
  };
}
function Ot(
  r,
  { delay: e = 0, duration: l = 400, easing: t = Vr, axis: n = "y" } = {}
) {
  const a = getComputedStyle(r),
    o = +a.opacity,
    s = n === "y" ? "height" : "width",
    i = parseFloat(a[s]),
    c = n === "y" ? ["top", "bottom"] : ["left", "right"],
    u = c.map((g) => `${g[0].toUpperCase()}${g.slice(1)}`),
    d = parseFloat(a[`padding${u[0]}`]),
    _ = parseFloat(a[`padding${u[1]}`]),
    v = parseFloat(a[`margin${u[0]}`]),
    m = parseFloat(a[`margin${u[1]}`]),
    k = parseFloat(a[`border${u[0]}Width`]),
    w = parseFloat(a[`border${u[1]}Width`]);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (g) =>
      `overflow: hidden;opacity: ${Math.min(g * 20, 1) * o};${s}: ${
        g * i
      }px;padding-${c[0]}: ${g * d}px;padding-${c[1]}: ${g * _}px;margin-${
        c[0]
      }: ${g * v}px;margin-${c[1]}: ${g * m}px;border-${c[0]}-width: ${
        g * k
      }px;border-${c[1]}-width: ${g * w}px;`,
  };
}
function Co(r) {
  let e, l, t, n, a;
  return {
    c() {
      (e = p("button")),
        (l = p("i")),
        h(l, "class", r[0]),
        h(e, "title", r[2]),
        h(
          e,
          "class",
          (t =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (r[3] == r[1] ? "bg-tertiary" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        h(e, "data-tip", r[2]);
    },
    m(o, s) {
      E(o, e, s), f(e, l), n || ((a = B(e, "click", r[4])), (n = !0));
    },
    p(o, [s]) {
      s & 1 && h(l, "class", o[0]),
        s & 4 && h(e, "title", o[2]),
        s & 10 &&
          t !==
            (t =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (o[3] == o[1] ? "bg-tertiary" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100") &&
          h(e, "class", t),
        s & 4 && h(e, "data-tip", o[2]);
    },
    i: R,
    o: R,
    d(o) {
      o && C(e), (n = !1), a();
    },
  };
}
function Eo(r, e, l) {
  let t;
  V(r, dl, (i) => l(3, (t = i)));
  let { icon: n } = e,
    { value: a } = e,
    { tooltiptext: o } = e;
  const s = () => {
    dl.set(a);
  };
  return (
    (r.$$set = (i) => {
      "icon" in i && l(0, (n = i.icon)),
        "value" in i && l(1, (a = i.value)),
        "tooltiptext" in i && l(2, (o = i.tooltiptext));
    }),
    [n, a, o, t, s]
  );
}
let Do = class extends ne {
  constructor(e) {
    super(), le(this, e, Eo, Co, K, { icon: 0, value: 1, tooltiptext: 2 });
  }
};
function Zl(r, e, l) {
  const t = r.slice();
  return (t[5] = e[l]), t;
}
function en(r) {
  let e, l;
  return (
    (e = new Do({
      props: { tooltiptext: r[5].value, icon: r[5].icon, value: r[5].value },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p: R,
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Lo(r) {
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i,
    c,
    u,
    d,
    _,
    v = Y(r[2]),
    m = [];
  for (let w = 0; w < v.length; w += 1) m[w] = en(Zl(r, v, w));
  const k = (w) =>
    N(m[w], 1, 1, () => {
      m[w] = null;
    });
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("button")),
        (n = p("i")),
        (a = y());
      for (let w = 0; w < m.length; w += 1) m[w].c();
      (o = y()),
        (s = p("button")),
        (i = p("i")),
        h(n, "class", "fas"),
        Te(n, "fa-angle-right", r[0]),
        Te(n, "fa-angle-left", !r[0]),
        h(t, "class", "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary"),
        h(l, "class", "mb-auto"),
        h(i, "class", "fas fa-code"),
        h(
          s,
          "class",
          (c =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (r[1] ? "text-accent" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        h(s, "data-tip", "Dev Mode"),
        h(
          e,
          "class",
          "w-[7vh] h-full flex flex-col gap-y-[1vh] items-center py-[1.4vh] border-r-[0.2vh] border-tertiary"
        );
    },
    m(w, g) {
      E(w, e, g), f(e, l), f(l, t), f(t, n), f(e, a);
      for (let b = 0; b < m.length; b += 1) m[b] && m[b].m(e, null);
      f(e, o),
        f(e, s),
        f(s, i),
        (u = !0),
        d || ((_ = [B(t, "click", r[3]), B(s, "click", r[4])]), (d = !0));
    },
    p(w, [g]) {
      if (
        ((!u || g & 1) && Te(n, "fa-angle-right", w[0]),
        (!u || g & 1) && Te(n, "fa-angle-left", !w[0]),
        g & 4)
      ) {
        v = Y(w[2]);
        let b;
        for (b = 0; b < v.length; b += 1) {
          const $ = Zl(w, v, b);
          m[b]
            ? (m[b].p($, g), S(m[b], 1))
            : ((m[b] = en($)), m[b].c(), S(m[b], 1), m[b].m(e, o));
        }
        for (Z(), b = v.length; b < m.length; b += 1) k(b);
        ee();
      }
      (!u ||
        (g & 2 &&
          c !==
            (c =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (w[1] ? "text-accent" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:px-[1vh] before:py-[0.5vh] before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"))) &&
        h(s, "class", c);
    },
    i(w) {
      if (!u) {
        for (let g = 0; g < v.length; g += 1) S(m[g]);
        u = !0;
      }
    },
    o(w) {
      m = m.filter(Boolean);
      for (let g = 0; g < m.length; g += 1) N(m[g]);
      u = !1;
    },
    d(w) {
      w && C(e), _e(m, w), (d = !1), ve(_);
    },
  };
}
function So(r, e, l) {
  let t, n;
  return (
    V(r, Be, (i) => l(0, (t = i))),
    V(r, Ul, (i) => l(1, (n = i))),
    [
      t,
      n,
      [
        { value: "Chat Staff", icon: "fas fa-message" },
        { value: "Players", icon: "fas fa-user" },
        { value: "Groups", icon: "fas fa-users" },
        { value: "Resources", icon: "fas fa-server" },
        { value: "Commands", icon: "fas fa-slash" },
        { value: "Items", icon: "fas fa-box" },
        { value: "Vehicles", icon: "fas fa-car" },
        { value: "Actions", icon: "fas fa-wand-magic-sparkles" },
        { value: "Credits", icon: "fa-solid fa-copyright" },
        { value: "Dashboard", icon: "fas fa-chart-line" },
      ],
      () => Be.update(i => !i),
      () => {
        Ul.update((i) => !i), pe("clickButton", { data: "toggleDevmode" });
      },
    ]
  );  
}
class Ao extends ne {
  constructor(e) {
    super(), le(this, e, So, Lo, K, {});
  }
}
function tn(r) {
  let e, l, t, n, a, o, s;
  return {
    c() {
      (e = p("div")),
        (l = p("i")),
        (t = y()),
        (n = p("input")),
        h(l, "class", "fas fa-magnifying-glass text-[1.5vh]"),
        h(n, "type", "text"),
        h(n, "placeholder", "Search"),
        h(
          n,
          "class",
          (a =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (r[3] && r[5] ? "w-[94%]" : "w-[80%]"))
        ),
        h(
          e,
          "class",
          "w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, c) {
      E(i, e, c),
        f(e, l),
        f(e, t),
        f(e, n),
        ze(n, r[0]),
        o ||
          ((s = [
            B(n, "input", function () {
              nl(r[4]) && r[4].apply(this, arguments);
            }),
            B(n, "input", r[6]),
          ]),
          (o = !0));
    },
    p(i, c) {
      (r = i),
        c & 40 &&
          a !==
            (a =
              "h-full px-[1vh] bg-transparent text-[1.7vh] " +
              (r[3] && r[5] ? "w-[94%]" : "w-[80%]")) &&
          h(n, "class", a),
        c & 1 && n.value !== r[0] && ze(n, r[0]);
    },
    d(i) {
      i && C(e), (o = !1), ve(s);
    },
  };
}
function No(r) {
  let e,
    l,
    t,
    n,
    a = r[2] && tn(r);
  return {
    c() {
      (e = p("p")),
        (l = L(r[1])),
        (t = y()),
        a && a.c(),
        (n = Q()),
        h(e, "class", "my-[2vh] font-medium text-[2vh]");
    },
    m(o, s) {
      E(o, e, s), f(e, l), E(o, t, s), a && a.m(o, s), E(o, n, s);
    },
    p(o, [s]) {
      s & 2 && M(l, o[1]),
        o[2]
          ? a
            ? a.p(o, s)
            : ((a = tn(o)), a.c(), a.m(n.parentNode, n))
          : a && (a.d(1), (a = null));
    },
    i: R,
    o: R,
    d(o) {
      o && (C(e), C(t), C(n)), a && a.d(o);
    },
  };
}
function Io(r, e, l) {
  let t;
  V(r, Be, (u) => l(5, (t = u)));
  let { title: n } = e,
    { hasSearch: a = !1 } = e,
    { hasLargeMenu: o = !1 } = e,
    { onSearchInput: s = null } = e,
    { search: i = null } = e;
  function c() {
    (i = this.value), l(0, i);
  }
  return (
    (r.$$set = (u) => {
      "title" in u && l(1, (n = u.title)),
        "hasSearch" in u && l(2, (a = u.hasSearch)),
        "hasLargeMenu" in u && l(3, (o = u.hasLargeMenu)),
        "onSearchInput" in u && l(4, (s = u.onSearchInput)),
        "search" in u && l(0, (i = u.search));
    }),
    [i, n, a, o, s, t, c]
  );
}
class Ge extends ne {
  constructor(e) {
    super(),
      le(this, e, Io, No, K, {
        title: 1,
        hasSearch: 2,
        hasLargeMenu: 3,
        onSearchInput: 4,
        search: 0,
      });
  }
}
function Mo(r) {
  let e, l, t, n, a, o, s, i, c, u;
  return {
    c() {
      (e = p("div")),
        (l = p("button")),
        (t = L("All Actions")),
        (a = y()),
        (o = p("button")),
        (s = L("Favorites")),
        h(
          l,
          "class",
          (n =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (r[0] ? "bg-tertiary" : " "))
        ),
        h(
          o,
          "class",
          (i =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (r[0] ? " " : "bg-tertiary"))
        ),
        h(e, "class", "mt-[1vh] w-full h-[4.5vh] flex gap-[1vh] font-medium");
    },
    m(d, _) {
      E(d, e, _),
        f(e, l),
        f(l, t),
        f(e, a),
        f(e, o),
        f(o, s),
        c || ((u = [B(l, "click", r[1]), B(o, "click", r[2])]), (c = !0));
    },
    p(d, [_]) {
      _ & 1 &&
        n !==
          (n =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (d[0] ? "bg-tertiary" : " ")) &&
        h(l, "class", n),
        _ & 1 &&
          i !==
            (i =
              "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
              (d[0] ? " " : "bg-tertiary")) &&
          h(o, "class", i);
    },
    i: R,
    o: R,
    d(d) {
      d && C(e), (c = !1), ve(u);
    },
  };
}
function Po(r, e, l) {
  let t;
  return (
    V(r, xt, (o) => l(0, (t = o))),
    [
      t,
      () => {
        xt.set(!0);
      },
      () => {
        xt.set(!1);
      },
    ]
  );
}
class To extends ne {
  constructor(e) {
    super(), le(this, e, Po, Mo, K, {});
  }
}
function jo(r) {
  let e, l, t, n;
  return {
    c() {
      (e = p("button")),
        h(e, "class", (l = (r[0] ? "fas" : "far") + " fa-star"));
    },
    m(a, o) {
      E(a, e, o), t || ((n = B(e, "click", r[1])), (t = !0));
    },
    p(a, [o]) {
      o & 1 &&
        l !== (l = (a[0] ? "fas" : "far") + " fa-star") &&
        h(e, "class", l);
    },
    i: R,
    o: R,
    d(a) {
      a && C(e), (t = !1), n();
    },
  };
}
function Ro(r, e, l) {
  let { data: t } = e,
    n = localStorage.getItem(`favorite-${t}`) === "true";
  const a = () => {
    event.stopPropagation(),
      l(0, (n = !n)),
      localStorage.setItem(`favorite-${t}`, n);
  };
  return (
    it(() => {}),
    (r.$$set = (o) => {
      "data" in o && l(2, (t = o.data));
    }),
    [n, a, t]
  );
}
class Hr extends ne {
  constructor(e) {
    super(), le(this, e, Ro, jo, K, { data: 2 });
  }
}
function Oo(r) {
  let e,
    l,
    t,
    n,
    a,
    o = r[0].label + "",
    s,
    i,
    c,
    u;
  return (
    (t = new Hr({ props: { data: r[1] } })),
    {
      c() {
        (e = p("button")),
          (l = p("div")),
          G(t.$$.fragment),
          (n = y()),
          (a = p("p")),
          (s = L(o)),
          h(l, "class", "flex items-center gap-[1vh]"),
          h(
            e,
            "class",
            "min-h-[4.5vh] w-full flex items-center px-[1.5vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90"
          );
      },
      m(d, _) {
        E(d, e, _),
          f(e, l),
          H(t, l, null),
          f(l, n),
          f(l, a),
          f(a, s),
          (i = !0),
          c || ((u = B(e, "click", r[2])), (c = !0));
      },
      p(d, [_]) {
        const v = {};
        _ & 2 && (v.data = d[1]),
          t.$set(v),
          (!i || _ & 1) && o !== (o = d[0].label + "") && M(s, o);
      },
      i(d) {
        i || (S(t.$$.fragment, d), (i = !0));
      },
      o(d) {
        N(t.$$.fragment, d), (i = !1);
      },
      d(d) {
        d && C(e), F(t), (c = !1), u();
      },
    }
  );
}
function Bo(r, e, l) {
  let { data: t } = e,
    { id: n } = e;
  it(() => {});
  const a = () => {
    pe("clickButton", { data: n });
  };
  return (
    (r.$$set = (o) => {
      "data" in o && l(0, (t = o.data)), "id" in o && l(1, (n = o.id));
    }),
    [t, n, a]
  );
}
let Vo = class extends ne {
  constructor(e) {
    super(), le(this, e, Bo, Oo, K, { data: 0, id: 1 });
  }
};
function ln(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function nn(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function rn(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function on(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function an(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function sn(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function fn(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function cn(r, e, l) {
  const t = r.slice();
  return (t[37] = e[l]), t;
}
function un(r) {
  let e, l, t, n, a;
  function o(c, u) {
    return c[1] === "players"
      ? qo
      : c[1] === "vehicles"
      ? Yo
      : c[1] === "items"
      ? Jo
      : c[1] === "jobs"
      ? Uo
      : c[1] === "gangs"
      ? Go
      : c[1] === "locations"
      ? zo
      : c[1] === "pedlist"
      ? Fo
      : Ho;
  }
  let s = o(r),
    i = s(r);
  return {
    c() {
      (e = p("button")),
        i.c(),
        h(
          e,
          "class",
          "w-full rounded-b-[0.5vh] flex flex-col max-h-[15vh] overflow-y-auto border-t border-primary scroll-visible"
        );
    },
    m(c, u) {
      E(c, e, u),
        i.m(e, null),
        (t = !0),
        n || ((a = [B(e, "mouseenter", r[34]), B(e, "blur", r[35])]), (n = !0));
    },
    p(c, u) {
      s === (s = o(c)) && i
        ? i.p(c, u)
        : (i.d(1), (i = s(c)), i && (i.c(), i.m(e, null)));
    },
    i(c) {
      t ||
        (c &&
          qe(() => {
            t && (l || (l = je(e, Ot, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(c) {
      c && (l || (l = je(e, Ot, { duration: 150 }, !1)), l.run(0)), (t = !1);
    },
    d(c) {
      c && C(e), i.d(), c && l && l.end(), (n = !1), ve(a);
    },
  };
}
function Ho(r) {
  let e,
    l = Y(r[1].filter(r[32])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = dn(ln(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4102) {
        l = Y(n[1].filter(n[32]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = ln(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = dn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Fo(r) {
  let e,
    l = Y(r[11].filter(r[30])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = pn(nn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 6148) {
        l = Y(n[11].filter(n[30]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = nn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = pn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function zo(r) {
  let e,
    l = Y(r[10].filter(r[28])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = _n(rn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 5124) {
        l = Y(n[10].filter(n[28]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = rn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = _n(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Go(r) {
  let e,
    l = Y(r[9].filter(r[26])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = hn(on(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4612) {
        l = Y(n[9].filter(n[26]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = on(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = hn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Uo(r) {
  let e,
    l = Y(r[8].filter(r[24])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = mn(an(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4356) {
        l = Y(n[8].filter(n[24]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = an(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = mn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Jo(r) {
  let e,
    l = Y(r[7].filter(r[22])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = bn(sn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4228) {
        l = Y(n[7].filter(n[22]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = sn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = bn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Yo(r) {
  let e,
    l = Y(r[6].filter(r[20])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = vn(fn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4164) {
        l = Y(n[6].filter(n[20]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = fn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = vn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function qo(r) {
  let e,
    l = Y(r[5].filter(r[18])),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = gn(cn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a[0] & 4132) {
        l = Y(n[5].filter(n[18]));
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = cn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = gn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function dn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s;
  function i() {
    return r[33](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(c, u) {
      E(c, e, u),
        f(e, l),
        f(l, n),
        f(e, a),
        o || ((s = B(e, "click", i)), (o = !0));
    },
    p(c, u) {
      (r = c), u[0] & 6 && t !== (t = r[37].label + "") && M(n, t);
    },
    d(c) {
      c && C(e), (o = !1), s();
    },
  };
}
function pn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[31](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 2052 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 2052 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function _n(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[29](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 1028 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 1028 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function hn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[27](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 516 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 516 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function mn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[25](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 260 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 260 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function bn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[23](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 132 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 132 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function vn(r) {
  let e,
    l,
    t = r[37].label + "",
    n,
    a,
    o,
    s,
    i = r[37].value + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[21](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 68 && t !== (t = r[37].label + "") && M(n, t),
        w[0] & 68 && i !== (i = r[37].value + "") && M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function gn(r) {
  let e,
    l,
    t = r[37].name + "",
    n,
    a,
    o,
    s,
    i = (r[37].id ? r[37].id : "Offline") + "",
    c,
    u,
    d,
    _,
    v;
  function m() {
    return r[19](r[37]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        (o = p("p")),
        (s = L("(")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(l, n),
        f(e, a),
        f(e, o),
        f(o, s),
        f(o, c),
        f(o, u),
        f(e, d),
        _ || ((v = B(e, "click", m)), (_ = !0));
    },
    p(k, w) {
      (r = k),
        w[0] & 36 && t !== (t = r[37].name + "") && M(n, t),
        w[0] & 36 &&
          i !== (i = (r[37].id ? r[37].id : "Offline") + "") &&
          M(c, i);
    },
    d(k) {
      k && C(e), (_ = !1), v();
    },
  };
}
function Wo(r) {
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i,
    c,
    u = r[4] && un(r);
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("input")),
        (n = y()),
        (a = p("i")),
        (s = y()),
        u && u.c(),
        h(t, "type", "text"),
        h(t, "placeholder", r[0]),
        h(t, "class", "h-full w-[90%] bg-transparent"),
        h(
          a,
          "class",
          (o = "fas fa-angle-" + (r[4] ? "down" : "right") + " text-[1.2vh]")
        ),
        h(
          l,
          "class",
          "w-full h-[3.8vh] px-[1vh] flex justify-between items-center"
        ),
        h(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(d, _) {
      E(d, e, _),
        f(e, l),
        f(l, t),
        ze(t, r[2]),
        f(l, n),
        f(l, a),
        f(e, s),
        u && u.m(e, null),
        i ||
          ((c = [
            B(t, "focus", r[13]),
            B(t, "blur", r[14]),
            B(t, "input", r[17]),
          ]),
          (i = !0));
    },
    p(d, _) {
      _[0] & 1 && h(t, "placeholder", d[0]),
        _[0] & 4 && t.value !== d[2] && ze(t, d[2]),
        _[0] & 16 &&
          o !==
            (o =
              "fas fa-angle-" + (d[4] ? "down" : "right") + " text-[1.2vh]") &&
          h(a, "class", o),
        d[4]
          ? u
            ? (u.p(d, _), _[0] & 16 && S(u, 1))
            : ((u = un(d)), u.c(), S(u, 1), u.m(e, null))
          : u &&
            (Z(),
            N(u, 1, 1, () => {
              u = null;
            }),
            ee());
    },
    i(d) {
      S(u);
    },
    o(d) {
      N(u);
    },
    d(d) {
      d && C(e), u && u.d(), (i = !1), ve(c);
    },
  };
}
function xo(r, e, l) {
  let t, n, a, o, s, i, c;
  V(r, Rt, (P) => l(5, (t = P))),
    V(r, hl, (P) => l(6, (n = P))),
    V(r, ml, (P) => l(7, (a = P))),
    V(r, bl, (P) => l(8, (o = P))),
    V(r, vl, (P) => l(9, (s = P))),
    V(r, gl, (P) => l(10, (i = P))),
    V(r, wl, (P) => l(11, (c = P)));
  let { action: u } = e,
    { label_title: d } = e,
    { data: _ } = e,
    { selectedData: v } = e,
    m = "",
    k = !1,
    w = !1;
  function g(P, ue) {
    l(2, (m = P)), l(4, (w = !1)), v({ label: P, value: ue, id: d });
  }
  function b() {
    l(3, (k = !0)), l(4, (w = !0)), l(2, (m = ""));
  }
  function $() {
    k || l(4, (w = !1)), l(3, (k = !1));
  }
  async function A() {
    const P = await pe("getPlayers");
    Rt.set(P);
  }
  it(() => {
    _ === "players" && A();
  });
  function D() {
    (m = this.value), l(2, m);
  }
  const I = (P) => P.name.toLowerCase().includes(m.toLowerCase()),
    T = (P) => g(P.name, P.id),
    O = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    z = (P) => g(P.label, P.value),
    j = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    U = (P) => g(P.label, P.value),
    X = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    ie = (P) => g(P.label, P.value),
    J = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    W = (P) => g(P.label, P.value),
    re = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    fe = (P) => g(P.label, P.value),
    ke = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    te = (P) => g(P.label, P.value),
    he = (P) =>
      P.label.toLowerCase().includes(m.toLowerCase()) ||
      P.value.toLowerCase().includes(m.toLowerCase()),
    Ve = (P) => g(P.label, P.value),
    de = () => {
      l(3, (k = !0));
    },
    ce = () => {
      l(3, (k = !1));
    };
  return (
    (r.$$set = (P) => {
      "action" in P && l(15, (u = P.action)),
        "label_title" in P && l(0, (d = P.label_title)),
        "data" in P && l(1, (_ = P.data)),
        "selectedData" in P && l(16, (v = P.selectedData));
    }),
    [
      d,
      _,
      m,
      k,
      w,
      t,
      n,
      a,
      o,
      s,
      i,
      c,
      g,
      b,
      $,
      u,
      v,
      D,
      I,
      T,
      O,
      z,
      j,
      U,
      X,
      ie,
      J,
      W,
      re,
      fe,
      ke,
      te,
      he,
      Ve,
      de,
      ce,
    ]
  );
}
class Nl extends ne {
  constructor(e) {
    super(),
      le(
        this,
        e,
        xo,
        Wo,
        K,
        { action: 15, label_title: 0, data: 1, selectedData: 16 },
        null,
        [-1, -1]
      );
  }
}
function Ko(r) {
  let e, l, t, n, a, o;
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("input")),
        h(t, "type", "text"),
        h(t, "placeholder", (n = r[0].label)),
        h(t, "class", "h-full w-[90%] bg-transparent"),
        h(l, "class", "w-full h-[3.8vh] pl-[1vh] flex justify-between"),
        h(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(s, i) {
      E(s, e, i),
        f(e, l),
        f(l, t),
        ze(t, r[1]),
        a ||
          ((o = [
            B(t, "input", r[4]),
            B(t, "input", r[5]),
            B(t, "blur", r[6]),
            B(t, "click", r[7]),
          ]),
          (a = !0));
    },
    p(s, [i]) {
      i & 1 && n !== (n = s[0].label) && h(t, "placeholder", n),
        i & 2 && t.value !== s[1] && ze(t, s[1]);
    },
    i: R,
    o: R,
    d(s) {
      s && C(e), (a = !1), ve(o);
    },
  };
}
function Qo(r, e, l) {
  let { data: t } = e,
    { selectedData: n } = e;
  function a(d, _) {
    n({ label: d, value: _, id: d });
  }
  let o = "";
  function s() {
    (o = this.value), l(1, o);
  }
  const i = (d) => l(1, (o = d.target.value)),
    c = () => a(t.label, o),
    u = () => a(t.label, o);
  return (
    (r.$$set = (d) => {
      "data" in d && l(0, (t = d.data)),
        "selectedData" in d && l(3, (n = d.selectedData));
    }),
    [t, o, a, n, s, i, c, u]
  );
}
class Il extends ne {
  constructor(e) {
    super(), le(this, e, Qo, Ko, K, { data: 0, selectedData: 3 });
  }
}
function wn(r, e, l) {
  const t = r.slice();
  return (t[8] = e[l]), t;
}
function kn(r) {
  let e,
    l,
    t,
    n = r[0].dropdown && yn(r);
  return {
    c() {
      (e = p("div")),
        n && n.c(),
        h(
          e,
          "class",
          "w-full rounded-b-[1vh] p-[1.5vh] flex flex-col gap-[1vh] justify-start items-start"
        );
    },
    m(a, o) {
      E(a, e, o), n && n.m(e, null), (t = !0);
    },
    p(a, o) {
      a[0].dropdown
        ? n
          ? (n.p(a, o), o & 1 && S(n, 1))
          : ((n = yn(a)), n.c(), S(n, 1), n.m(e, null))
        : n &&
          (Z(),
          N(n, 1, 1, () => {
            n = null;
          }),
          ee());
    },
    i(a) {
      t ||
        (S(n),
        a &&
          qe(() => {
            t && (l || (l = je(e, Ot, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(a) {
      N(n),
        a && (l || (l = je(e, Ot, { duration: 150 }, !1)), l.run(0)),
        (t = !1);
    },
    d(a) {
      a && C(e), n && n.d(), a && l && l.end();
    },
  };
}
function yn(r) {
  let e,
    l,
    t = Y(r[0].dropdown),
    n = [];
  for (let o = 0; o < t.length; o += 1) n[o] = $n(wn(r, t, o));
  const a = (o) =>
    N(n[o], 1, 1, () => {
      n[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1) n[o].c();
      e = Q();
    },
    m(o, s) {
      for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(o, s);
      E(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 25) {
        t = Y(o[0].dropdown);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = wn(o, t, i);
          n[i]
            ? (n[i].p(c, s), S(n[i], 1))
            : ((n[i] = $n(c)), n[i].c(), S(n[i], 1), n[i].m(e.parentNode, e));
        }
        for (Z(), i = t.length; i < n.length; i += 1) a(i);
        ee();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) S(n[s]);
        l = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) N(n[s]);
      l = !1;
    },
    d(o) {
      o && C(e), _e(n, o);
    },
  };
}
function Xo(r) {
  let e,
    l,
    t = r[8].label + "",
    n,
    a,
    o,
    s;
  function i() {
    return r[6](r[8]);
  }
  return {
    c() {
      (e = p("button")),
        (l = p("p")),
        (n = L(t)),
        (a = y()),
        h(
          e,
          "class",
          "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
        );
    },
    m(c, u) {
      E(c, e, u),
        f(e, l),
        f(l, n),
        f(e, a),
        o || ((s = B(e, "click", i)), (o = !0));
    },
    p(c, u) {
      (r = c), u & 1 && t !== (t = r[8].label + "") && M(n, t);
    },
    i: R,
    o: R,
    d(c) {
      c && C(e), (o = !1), s();
    },
  };
}
function Zo(r) {
  let e, l;
  return (
    (e = new Nl({
      props: {
        action: r[8],
        label_title: r[8].label,
        data: r[8].data,
        selectedData: r[3],
      },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.action = t[8]),
          n & 1 && (a.label_title = t[8].label),
          n & 1 && (a.data = t[8].data),
          e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function ea(r) {
  let e, l;
  return (
    (e = new Il({ props: { data: r[8], selectedData: r[3] } })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.data = t[8]), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function $n(r) {
  let e, l, t, n;
  const a = [ea, Zo, Xo],
    o = [];
  function s(i, c) {
    return i[8].option === "text"
      ? 0
      : i[8].option === "dropdown"
      ? 1
      : i[8].option === "button"
      ? 2
      : -1;
  }
  return (
    ~(e = s(r)) && (l = o[e] = a[e](r)),
    {
      c() {
        l && l.c(), (t = Q());
      },
      m(i, c) {
        ~e && o[e].m(i, c), E(i, t, c), (n = !0);
      },
      p(i, c) {
        let u = e;
        (e = s(i)),
          e === u
            ? ~e && o[e].p(i, c)
            : (l &&
                (Z(),
                N(o[u], 1, 1, () => {
                  o[u] = null;
                }),
                ee()),
              ~e
                ? ((l = o[e]),
                  l ? l.p(i, c) : ((l = o[e] = a[e](i)), l.c()),
                  S(l, 1),
                  l.m(t.parentNode, t))
                : (l = null));
      },
      i(i) {
        n || (S(l), (n = !0));
      },
      o(i) {
        N(l), (n = !1);
      },
      d(i) {
        i && C(t), ~e && o[e].d(i);
      },
    }
  );
}
function ta(r) {
  let e,
    l,
    t,
    n,
    a,
    o,
    s = r[0].label + "",
    i,
    c,
    u,
    d,
    _,
    v,
    m,
    k,
    w;
  n = new Hr({ props: { data: r[1] } });
  let g = r[2] && kn(r);
  return {
    c() {
      (e = p("div")),
        (l = p("button")),
        (t = p("div")),
        G(n.$$.fragment),
        (a = y()),
        (o = p("p")),
        (i = L(s)),
        (c = y()),
        (u = p("i")),
        (_ = y()),
        g && g.c(),
        h(t, "class", "flex items-center gap-[1vh]"),
        h(u, "class", (d = "fas fa-angle-" + (r[2] ? "down" : "right"))),
        h(
          l,
          "class",
          "w-full h-[4.5vh] flex items-center justify-between px-[1.5vh]"
        ),
        h(
          e,
          "class",
          (v =
            "bg-tertiary rounded-[0.5vh] " +
            (r[2] ? "" : "hover:bg-opacity-90"))
        );
    },
    m(b, $) {
      E(b, e, $),
        f(e, l),
        f(l, t),
        H(n, t, null),
        f(t, a),
        f(t, o),
        f(o, i),
        f(l, c),
        f(l, u),
        f(e, _),
        g && g.m(e, null),
        (m = !0),
        k || ((w = B(l, "click", r[5])), (k = !0));
    },
    p(b, [$]) {
      const A = {};
      $ & 2 && (A.data = b[1]),
        n.$set(A),
        (!m || $ & 1) && s !== (s = b[0].label + "") && M(i, s),
        (!m ||
          ($ & 4 && d !== (d = "fas fa-angle-" + (b[2] ? "down" : "right")))) &&
          h(u, "class", d),
        b[2]
          ? g
            ? (g.p(b, $), $ & 4 && S(g, 1))
            : ((g = kn(b)), g.c(), S(g, 1), g.m(e, null))
          : g &&
            (Z(),
            N(g, 1, 1, () => {
              g = null;
            }),
            ee()),
        (!m ||
          ($ & 4 &&
            v !==
              (v =
                "bg-tertiary rounded-[0.5vh] " +
                (b[2] ? "" : "hover:bg-opacity-90")))) &&
          h(e, "class", v);
    },
    i(b) {
      m || (S(n.$$.fragment, b), S(g), (m = !0));
    },
    o(b) {
      N(n.$$.fragment, b), N(g), (m = !1);
    },
    d(b) {
      b && C(e), F(n), g && g.d(), (k = !1), w();
    },
  };
}
function la(r, e, l) {
  let { data: t } = e,
    { id: n } = e,
    a,
    o = {};
  function s(d) {
    o[d.id] = d;
  }
  function i(d, _) {
    d && (l(0, (t.event = d), t), l(0, (t.type = _), t)),
      pe("clickButton", { data: n, selectedData: o });
  }
  const c = () => l(2, (a = !a)),
    u = (d) => {
      i(d.event, d.type);
    };
  return (
    (r.$$set = (d) => {
      "data" in d && l(0, (t = d.data)), "id" in d && l(1, (n = d.id));
    }),
    [t, n, a, s, i, c, u]
  );
}
class na extends ne {
  constructor(e) {
    super(), le(this, e, la, ta, K, { data: 0, id: 1 });
  }
}
function ra(r) {
  let e, l, t, n;
  return {
    c() {
      (e = p("button")),
        (l = p("i")),
        h(l, "class", r[0]),
        h(
          e,
          "class",
          "w-[3vh] h-[3vh] rounded-[0.5vh] bg-secondary hover:bg-primary"
        );
    },
    m(a, o) {
      E(a, e, o), f(e, l), t || ((n = B(e, "click", r[1])), (t = !0));
    },
    p(a, [o]) {
      o & 1 && h(l, "class", a[0]);
    },
    i: R,
    o: R,
    d(a) {
      a && C(e), (t = !1), n();
    },
  };
}
function oa(r, e, l) {
  let { resource: t } = e,
    { icon: n } = e,
    { state: a } = e;
  async function o() {
    event.stopPropagation();
    const s = await pe("setResourceState", { name: t, state: a });
    zt.set(s);
  }
  return (
    (r.$$set = (s) => {
      "resource" in s && l(2, (t = s.resource)),
        "icon" in s && l(0, (n = s.icon)),
        "state" in s && l(3, (a = s.state));
    }),
    [n, o, t, a]
  );
}
class Dl extends ne {
  constructor(e) {
    super(), le(this, e, oa, ra, K, { resource: 2, icon: 0, state: 3 });
  }
}
function Cn(r, e, l) {
  const t = r.slice();
  return (t[5] = e[l][0]), (t[6] = e[l][1]), t;
}
function En(r) {
  let e,
    l,
    t = Y(Object.entries(r[1]).filter(r[4]).sort(Ln)),
    n = [];
  for (let o = 0; o < t.length; o += 1) n[o] = Dn(Cn(r, t, o));
  const a = (o) =>
    N(n[o], 1, 1, () => {
      n[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1) n[o].c();
      e = Q();
    },
    m(o, s) {
      for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(o, s);
      E(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 7) {
        t = Y(Object.entries(o[1]).filter(o[4]).sort(Ln));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = Cn(o, t, i);
          n[i]
            ? (n[i].p(c, s), S(n[i], 1))
            : ((n[i] = Dn(c)), n[i].c(), S(n[i], 1), n[i].m(e.parentNode, e));
        }
        for (Z(), i = t.length; i < n.length; i += 1) a(i);
        ee();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) S(n[s]);
        l = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) N(n[s]);
      l = !1;
    },
    d(o) {
      o && C(e), _e(n, o);
    },
  };
}
function aa(r) {
  let e, l;
  return (
    (e = new Vo({ props: { data: r[6], id: r[5] } })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 7 && (a.data = t[6]), n & 7 && (a.id = t[5]), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function ia(r) {
  let e, l;
  return (
    (e = new na({ props: { data: r[6], id: r[5] } })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 7 && (a.data = t[6]), n & 7 && (a.id = t[5]), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Dn(r) {
  let e, l, t, n;
  const a = [ia, aa],
    o = [];
  function s(i, c) {
    return i[6].dropdown ? 0 : 1;
  }
  return (
    (e = s(r)),
    (l = o[e] = a[e](r)),
    {
      c() {
        l.c(), (t = Q());
      },
      m(i, c) {
        o[e].m(i, c), E(i, t, c), (n = !0);
      },
      p(i, c) {
        let u = e;
        (e = s(i)),
          e === u
            ? o[e].p(i, c)
            : (Z(),
              N(o[u], 1, 1, () => {
                o[u] = null;
              }),
              ee(),
              (l = o[e]),
              l ? l.p(i, c) : ((l = o[e] = a[e](i)), l.c()),
              S(l, 1),
              l.m(t.parentNode, t));
      },
      i(i) {
        n || (S(l), (n = !0));
      },
      o(i) {
        N(l), (n = !1);
      },
      d(i) {
        i && C(t), o[e].d(i);
      },
    }
  );
}
function sa(r) {
  let e, l, t, n, a, o, s;
  (l = new Ge({
    props: {
      title: "Actions",
      hasSearch: !0,
      hasLargeMenu: !0,
      onSearchInput: r[3],
      search: r[0],
    },
  })),
    (n = new To({}));
  let i = r[1] && En(r);
  return {
    c() {
      (e = p("div")),
        G(l.$$.fragment),
        (t = y()),
        G(n.$$.fragment),
        (a = y()),
        (o = p("div")),
        i && i.c(),
        h(
          o,
          "class",
          "w-full h-[77%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto scroll-visble"
        ),
        h(e, "class", "h-full w-[99vh] px-[2vh]");
    },
    m(c, u) {
      E(c, e, u),
        H(l, e, null),
        f(e, t),
        H(n, e, null),
        f(e, a),
        f(e, o),
        i && i.m(o, null),
        (s = !0);
    },
    p(c, [u]) {
      const d = {};
      u & 1 && (d.onSearchInput = c[3]),
        u & 1 && (d.search = c[0]),
        l.$set(d),
        c[1]
          ? i
            ? (i.p(c, u), u & 2 && S(i, 1))
            : ((i = En(c)), i.c(), S(i, 1), i.m(o, null))
          : i &&
            (Z(),
            N(i, 1, 1, () => {
              i = null;
            }),
            ee());
    },
    i(c) {
      s || (S(l.$$.fragment, c), S(n.$$.fragment, c), S(i), (s = !0));
    },
    o(c) {
      N(l.$$.fragment, c), N(n.$$.fragment, c), N(i), (s = !1);
    },
    d(c) {
      c && C(e), F(l), F(n), i && i.d();
    },
  };
}
const Ln = ([r, e], [l, t]) => e.label.localeCompare(t.label);
function fa(r, e, l) {
  let t, n, a;
  return (
    V(r, Jl, (i) => l(0, (t = i))),
    V(r, _l, (i) => l(1, (n = i))),
    V(r, xt, (i) => l(2, (a = i))),
    [
      t,
      n,
      a,
      (i) => be(Jl, (t = i.target.value), t),
      ([i, c]) =>
        a
          ? c.label.toLowerCase().includes(t.toLowerCase())
          : localStorage.getItem(`favorite-${i}`) === "true",
    ]
  );
}
class ca extends ne {
  constructor(e) {
    super(), le(this, e, fa, sa, K, {});
  }
}
function Sn(r) {
  let e,
    l,
    t = (r[3] ? r[3] : "") + "",
    n,
    a,
    o;
  return {
    c() {
      (e = p("div")), (l = p("p")), (n = L(t)), h(l, "class", "text-gray-400");
    },
    m(s, i) {
      E(s, e, i), f(e, l), f(l, n), (o = !0);
    },
    p(s, i) {
      (!o || i & 8) && t !== (t = (s[3] ? s[3] : "") + "") && M(n, t);
    },
    i(s) {
      o ||
        (s &&
          qe(() => {
            o && (a || (a = je(e, Ot, { duration: 150 }, !0)), a.run(1));
          }),
        (o = !0));
    },
    o(s) {
      s && (a || (a = je(e, Ot, { duration: 150 }, !1)), a.run(0)), (o = !1);
    },
    d(s) {
      s && C(e), s && a && a.end();
    },
  };
}
function ua(r) {
  let e, l;
  return (
    (e = new Dl({
      props: { icon: "fas fa-play", resource: r[0], state: "start" },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.resource = t[0]), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function da(r) {
  let e, l, t, n;
  return (
    (e = new Dl({
      props: { icon: "fas fa-stop", resource: r[0], state: "stop" },
    })),
    (t = new Dl({
      props: { icon: "fas fa-arrows-rotate", resource: r[0], state: "restart" },
    })),
    {
      c() {
        G(e.$$.fragment), (l = y()), G(t.$$.fragment);
      },
      m(a, o) {
        H(e, a, o), E(a, l, o), H(t, a, o), (n = !0);
      },
      p(a, o) {
        const s = {};
        o & 1 && (s.resource = a[0]), e.$set(s);
        const i = {};
        o & 1 && (i.resource = a[0]), t.$set(i);
      },
      i(a) {
        n || (S(e.$$.fragment, a), S(t.$$.fragment, a), (n = !0));
      },
      o(a) {
        N(e.$$.fragment, a), N(t.$$.fragment, a), (n = !1);
      },
      d(a) {
        a && C(l), F(e, a), F(t, a);
      },
    }
  );
}
function pa(r) {
  let e,
    l,
    t,
    n = (r[0] ? r[0] : "") + "",
    a,
    o,
    s,
    i = r[1] ? "Version: " + r[1] : "",
    c,
    u,
    d,
    _ = r[2] ? "Author: " + r[2] : "",    
    v,
    m,
    k,
    w,
    g,
    b,
    $,
    A,
    D,
    I = r[5] && Sn(r);
  const T = [da, ua],
    O = [];
  function z(j, U) {
    return j[4] == "started" ? 0 : 1;
  }
  return (
    (g = z(r)),
    (b = O[g] = T[g](r)),
    {
      c() {
        (e = p("button")),
          (l = p("div")),
          (t = p("p")),
          (a = L(n)),
          (o = y()),
          (s = p("p")),
          (c = L(i)),
          (u = y()),
          (d = p("p")),
          (v = L(_)),
          (m = y()),
          I && I.c(),
          (k = y()),
          (w = p("div")),
          b.c(),
          h(t, "class", "text-[1.8vh] font-medium"),
          h(s, "class", "text-gray-400"),
          h(d, "class", "text-gray-400"),
          h(
            l,
            "class",
            "h-full p-[2vh] -mr-[8vh] flex flex-col items-start text-start"
          ),
          h(w, "class", "flex gap-[1vh] h-full py-[1.8vh] pr-[1.8vh]"),
          h(
            e,
            "class",
            "w-full flex justify-between rounded-[0.5vh] bg-tertiary items-center"
          );
      },
      m(j, U) {
        E(j, e, U),
          f(e, l),
          f(l, t),
          f(t, a),
          f(l, o),
          f(l, s),
          f(s, c),
          f(l, u),
          f(l, d),
          f(d, v),
          f(l, m),
          I && I.m(l, null),
          f(e, k),
          f(e, w),
          O[g].m(w, null),
          ($ = !0),
          A || ((D = B(e, "click", r[6])), (A = !0));
      },
      p(j, [U]) {
        (!$ || U & 1) && n !== (n = (j[0] ? j[0] : "") + "") && M(a, n),
          (!$ || U & 2) && i !== (i = j[1] ? "Version: " + j[1] : "") && M(c, i),
          (!$ || U & 4) && _ !== (_ = j[2] ? "Author: " + j[2] : "") && M(v, _),
          j[5]
            ? I
              ? (I.p(j, U), U & 32 && S(I, 1))
              : ((I = Sn(j)), I.c(), S(I, 1), I.m(l, null))
            : I &&
              (Z(),
              N(I, 1, 1, () => {
                I = null;
              }),
              ee());
        let X = g;
        (g = z(j)),
          g === X
            ? O[g].p(j, U)
            : (Z(),
              N(O[X], 1, 1, () => {
                O[X] = null;
              }),
              ee(),
              (b = O[g]),
              b ? b.p(j, U) : ((b = O[g] = T[g](j)), b.c()),
              S(b, 1),
              b.m(w, null));
      },
      i(j) {
        $ || (S(I), S(b), ($ = !0));
      },
      o(j) {
        N(I), N(b), ($ = !1);
      },
      d(j) {
        j && C(e), I && I.d(), O[g].d(), (A = !1), D();
      },
    }
  );
}
function _a(r, e, l) {
  let { label: t } = e,
    { version: n } = e,
    { author: a } = e,
    { description: o } = e,
    { state: s } = e,
    i;
  const c = () => l(5, (i = !i));
  return (
    (r.$$set = (u) => {
      "label" in u && l(0, (t = u.label)),
        "version" in u && l(1, (n = u.version)),
        "author" in u && l(2, (a = u.author)),
        "description" in u && l(3, (o = u.description)),
        "state" in u && l(4, (s = u.state));
    }),
    [t, n, a, o, s, i, c]
  );
}
class ha extends ne {
  constructor(e) {
    super(),
      le(this, e, _a, pa, K, {
        label: 0,
        version: 1,
        author: 2,
        description: 3,
        state: 4,
      });
  }
}
function ma(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.innerHTML =
          '<div class="inline-block h-[10rem] w-[10rem] animate-spin rounded-full border-8 border-solid border-secondary border-r-tertiary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>'),
        h(
          e,
          "class",
          "w-full h-full flex justify-center items-center opacity-50"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
class rl extends ne {
  constructor(e) {
    super(), le(this, e, null, ma, K, {});
  }
}
function An(r, e, l) {
  const t = r.slice();
  return (t[11] = e[l]), t;
}
function Nn(r, e, l) {
  const t = r.slice();
  return (t[14] = e[l]), t;
}
function In(r) {
  let e, l, t, n, a;
  const o = [va, ba],
    s = [];
  function i(c, u) {
    return (
      u & 9 && (e = null),
      e == null && (e = !!(c[3] && c[3].filter(c[7]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(r, -1)),
    (t = s[l] = o[l](r)),
    {
      c() {
        t.c(), (n = Q());
      },
      m(c, u) {
        s[l].m(c, u), E(c, n, u), (a = !0);
      },
      p(c, u) {
        let d = l;
        (l = i(c, u)),
          l === d
            ? s[l].p(c, u)
            : (Z(),
              N(s[d], 1, 1, () => {
                s[d] = null;
              }),
              ee(),
              (t = s[l]),
              t ? t.p(c, u) : ((t = s[l] = o[l](c)), t.c()),
              S(t, 1),
              t.m(n.parentNode, n));
      },
      i(c) {
        a || (S(t), (a = !0));
      },
      o(c) {
        N(t), (a = !1);
      },
      d(c) {
        c && C(n), s[l].d(c);
      },
    }
  );
}
function ba(r) {
  let e,
    l,
    t = Y(r[6].filter(r[9])),
    n = [];
  for (let o = 0; o < t.length; o += 1) n[o] = Mn(Nn(r, t, o));
  const a = (o) =>
    N(n[o], 1, 1, () => {
      n[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1) n[o].c();
      e = Q();
    },
    m(o, s) {
      for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(o, s);
      E(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s & 65) {
        t = Y(o[6].filter(o[9]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = Nn(o, t, i);
          n[i]
            ? (n[i].p(c, s), S(n[i], 1))
            : ((n[i] = Mn(c)), n[i].c(), S(n[i], 1), n[i].m(e.parentNode, e));
        }
        for (Z(), i = t.length; i < n.length; i += 1) a(i);
        ee();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) S(n[s]);
        l = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) N(n[s]);
      l = !1;
    },
    d(o) {
      o && C(e), _e(n, o);
    },
  };
}
function va(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No Resource Found."),
        h(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
function Mn(r) {
  let e, l;
  return (
    (e = new ha({
      props: {
        label: r[14].name,
        version: r[14].version,
        author: r[14].author,
        description: r[14].description,
        state: r[14].resourceState,
      },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.label = t[14].name),
          n & 1 && (a.version = t[14].version),
          n & 1 && (a.author = t[14].author),
          n & 1 && (a.description = t[14].description),
          n & 1 && (a.state = t[14].resourceState),
          e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Pn(r) {
  let e, l, t, n, a, o, s;
  l = new Ge({ props: { title: "Changelog" } });
  const i = [ya, ka, wa, ga],
    c = [];
  function u(d, _) {
    return d[1] ? 0 : d[2] ? 1 : d[5].length === 0 ? 2 : 3;
  }
  return (
    (a = u(r)),
    (o = c[a] = i[a](r)),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          (t = y()),
          (n = p("div")),
          o.c(),
          h(
            n,
            "class",
            "w-full h-[90%] mt-[1vh] rounded-[0.5vh] p-[2vh] overflow-auto bg-secondary"
          ),
          h(
            e,
            "class",
            "h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]"
          );
      },
      m(d, _) {
        E(d, e, _), H(l, e, null), f(e, t), f(e, n), c[a].m(n, null), (s = !0);
      },
      p(d, _) {
        let v = a;
        (a = u(d)),
          a === v
            ? c[a].p(d, _)
            : (Z(),
              N(c[v], 1, 1, () => {
                c[v] = null;
              }),
              ee(),
              (o = c[a]),
              o ? o.p(d, _) : ((o = c[a] = i[a](d)), o.c()),
              S(o, 1),
              o.m(n, null));
      },
      i(d) {
        s || (S(l.$$.fragment, d), S(o), (s = !0));
      },
      o(d) {
        N(l.$$.fragment, d), N(o), (s = !1);
      },
      d(d) {
        d && C(e), F(l), c[a].d();
      },
    }
  );
}
function ga(r) {
  let e,
    l = Y(r[5]),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = Tn(An(r, l, n));
  return {
    c() {
      e = p("ul");
      for (let n = 0; n < t.length; n += 1) t[n].c();
      h(e, "class", "flex flex-col gap-[1vh]");
    },
    m(n, a) {
      E(n, e, a);
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(e, null);
    },
    p(n, a) {
      if (a & 32) {
        l = Y(n[5]);
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = An(n, l, o);
          t[o] ? t[o].p(s, a) : ((t[o] = Tn(s)), t[o].c(), t[o].m(e, null));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    i: R,
    o: R,
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function wa(r) {
  let e;
  return {
    c() {
      (e = p("div")),
      (e.textContent = "No changelog found."),
      h(e, "class", "text-tertiary text-center text-[1.5vh] font-medium");
      },
      m(l, t) {
        E(l, e, t);
      },
      p: R,
      i: R,
      o: R,
      d(l) {
        l && C(e);
      },
      };
      }
      function ka(r) {
        let e;
        return {
          c() {
            (e = p("div")),
              (e.innerHTML = "Error loading changelog.<br/>"),      
        h(e, "class", "text-tertiary text-center text-[1.5vh] font-medium");
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
function ya(r) {
  let e, l, t;
  return (
    (l = new rl({})),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          h(e, "class", "flex justify-center items-center h-full");
      },
      m(n, a) {
        E(n, e, a), H(l, e, null), (t = !0);
      },
      p: R,
      i(n) {
        t || (S(l.$$.fragment, n), (t = !0));
      },
      o(n) {
        N(l.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && C(e), F(l);
      },
    }
  );
}
function Tn(r) {
  let e, l, t, n, a, o, s, i, c;
  return {
    c() {
      (e = p("li")),
        (l = p("p")),
        (l.textContent = `${r[11].repo}`),
        (t = y()),
        (n = p("p")),
        (n.textContent = `${r[11].message}`),
        (a = y()),
        (o = p("p")),
        (o.textContent = `Autor: ${r[11].author} - Data: ${r[11].date}`),
        (s = y()),
        (i = p("pre")),
        (i.textContent = `${r[11].url}`),
        (c = y()),
        h(l, "class", "text-[1.7vh] font-medium"),
        h(n, "class", "text-[1.5vh]"),
        h(o, "class", "text-[1.3vh] text-accent"),
        h(
          i,
          "class",
          "bg-secondary text-tertiary p-[1vh] rounded-[0.3vh] text-[1.3vh] overflow-auto"
        ),
        h(e, "class", "bg-tertiary rounded-[0.5vh] p-[1.5vh]");
    },
    m(u, d) {
      E(u, e, d),
        f(e, l),
        f(e, t),
        f(e, n),
        f(e, a),
        f(e, o),
        f(e, s),
        f(e, i),
        f(e, c);
    },
    p: R,
    d(u) {
      u && C(e);
    },
  };
}
function $a(r) {
  let e, l, t, n, a, o, s;
  l = new Ge({
    props: { title: "Resources", hasSearch: !0, onSearchInput: r[8] },
  });
  let i = r[3] && In(r),
    c = r[4] && Pn(r);
  return {
    c() {
      (e = p("div")),
        G(l.$$.fragment),
        (t = y()),
        (n = p("div")),
        i && i.c(),
        (a = y()),
        c && c.c(),
        (o = Q()),
        h(
          n,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        h(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(u, d) {
      E(u, e, d),
        H(l, e, null),
        f(e, t),
        f(e, n),
        i && i.m(n, null),
        E(u, a, d),
        c && c.m(u, d),
        E(u, o, d),
        (s = !0);
    },
    p(u, [d]) {
      const _ = {};
      d & 1 && (_.onSearchInput = u[8]),
        l.$set(_),
        u[3]
          ? i
            ? (i.p(u, d), d & 8 && S(i, 1))
            : ((i = In(u)), i.c(), S(i, 1), i.m(n, null))
          : i &&
            (Z(),
            N(i, 1, 1, () => {
              i = null;
            }),
            ee()),
        u[4]
          ? c
            ? (c.p(u, d), d & 16 && S(c, 1))
            : ((c = Pn(u)), c.c(), S(c, 1), c.m(o.parentNode, o))
          : c &&
            (Z(),
            N(c, 1, 1, () => {
              c = null;
            }),
            ee());
    },
    i(u) {
      s || (S(l.$$.fragment, u), S(i), S(c), (s = !0));
    },
    o(u) {
      N(l.$$.fragment, u), N(i), N(c), (s = !1);
    },
    d(u) {
      u && (C(e), C(a), C(o)), F(l), i && i.d(), c && c.d(u);
    },
  };
}
function Ca(r, e, l) {
  let t, n;
  V(r, zt, (m) => l(3, (t = m))), V(r, Be, (m) => l(4, (n = m)));
  let a = "",
    o = !0,
    s = !1,
    i = [],
    c = t ? t.slice().sort((m, k) => m.name.localeCompare(k.name)) : [];
  async function u() {
    try {
      const m = await fetch(
        "https://api.github.com/orgs/mri-Qbox-Brasil/repos?per_page=10&sort=updated"
      );
      if (!m.ok) throw new Error("Failed to fetch changelogs");
      const k = await m.json();
      for (const w of k) {
        const g = await fetch(
          `https://api.github.com/repos/mri-Qbox-Brasil/${w.name}/commits?per_page=1`
        );
        if (g.ok) {
          const [b] = await g.json();
          i.push({
            repo: w.name,
            author: b.commit.author.name,
            date: new Date(b.commit.author.date).toLocaleString(),
            message: b.commit.message,
            url: b.html_url,
          });
        }
      }
    } catch {
      l(2, (s = !0));
    } finally {
      l(1, (o = !1));
    }
  }
  return (
    u(),
    [
      a,
      o,
      s,
      t,
      n,
      i,
      c,
      (m) => m.name.toLowerCase().includes(a.toLowerCase()),
      (m) => l(0, (a = m.target.value)),
      (m) => m.name.toLowerCase().includes(a.toLowerCase()),
    ]
  );
}
class Ea extends ne {
  constructor(e) {
    super(), le(this, e, Ca, $a, K, {});
  }
}
function Da(r) {
  let e, l, t, n, a, o, s;
  return {
    c() {
      (e = p("div")),
        (l = p("input")),
        (n = y()),
        (a = p("button")),
        (a.innerHTML = '<i class="fas fa-paper-plane text-[1.5vh]"></i>'),
        h(l, "type", "text"),
        h(l, "placeholder", "Enter your message"),
        h(
          l,
          "class",
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (r[1] ? "w-[94%]" : "w-[80%]"))
        ),
        h(a, "class", "h-full w-[5vh] rounded-r-[0.5vh] hover:bg-secondary"),
        h(
          e,
          "class",
          "mt-auto w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, c) {
      E(i, e, c),
        f(e, l),
        ze(l, r[0]),
        f(e, n),
        f(e, a),
        o ||
          ((s = [
            B(l, "keydown", r[3]),
            B(l, "input", r[4]),
            B(a, "click", r[2]),
          ]),
          (o = !0));
    },
    p(i, [c]) {
      c & 2 &&
        t !==
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (i[1] ? "w-[94%]" : "w-[80%]")) &&
        h(l, "class", t),
        c & 1 && l.value !== i[0] && ze(l, i[0]);
    },
    i: R,
    o: R,
    d(i) {
      i && C(e), (o = !1), ve(s);
    },
  };
}
function La() {
  let r = document.getElementById("chatList");
  r.scroll({ top: r.scrollHeight, behavior: "auto" });
}
function Sa(r, e, l) {
  let t;
  V(r, Be, (i) => l(1, (t = i)));
  let n = "";
  function a() {
    n.trim() &&
      (pe("SendMessage", { message: n }),
      l(0, (n = "")),
      setTimeout(() => {
        La();
      }, 100));
  }
  const o = (i) => {
    i.key === "Enter" && a();
  };
  function s() {
    (n = this.value), l(0, n);
  }
  return [n, t, a, o, s];
}
const Na = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Aa extends ne {
  constructor(e) {
    super(), le(this, e, Sa, Da, K, {});
  }
}
  
  function qt(r, e = !1, l = !1) {
    const t = r.getDate(),
      n = Na[r.getMonth()],
      a = r.getFullYear(),
      o = r.getHours();
    let s = r.getMinutes();
    return (
      s < 10 && (s = `0${s}`),
      e
        ? `${e} at ${o}:${s}`
        : l
        ? `${t} of ${n} at ${o}:${s}`
        : `${t} of ${n} of ${a} at ${o}:${s}`
    );
  }
  
  function jn(r) {
    if (!r) return "Unknown";
    let e;
    try {
      e = typeof r == "object" ? r : new Date(r);
    } catch {
      return "Invalid date";
    }
    if (isNaN(e)) return "Invalid date";
    const l = 864e5,
      t = new Date(),
      n = new Date(t - l),
      a = Math.round((t - e) / 1e3),
      o = Math.round(a / 60),
      s = t.toDateString() === e.toDateString(),
      i = n.toDateString() === e.toDateString(),
      c = t.getFullYear() === e.getFullYear();
    return a < 5
      ? "Just now"
      : a < 60
      ? `${a} seconds ago`
      : a < 90
      ? "One minute ago"
      : o < 60
      ? `${o} minutes ago`
      : s
      ? qt(e, "Today")
      : i
      ? qt(e, "Yesterday")
      : c
      ? qt(e, !1, !0)
      : qt(e);
  }  
function Rn(r, e, l) {
  const t = r.slice();
  return (t[5] = e[l]), t;
}
function On(r) {
  let e,
    l = Y(r[0]),
    t = [];
  for (let n = 0; n < l.length; n += 1) t[n] = Bn(Rn(r, l, n));
  return {
    c() {
      for (let n = 0; n < t.length; n += 1) t[n].c();
      e = Q();
    },
    m(n, a) {
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(n, a);
      E(n, e, a);
    },
    p(n, a) {
      if (a & 13) {
        l = Y(n[0]);
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = Rn(n, l, o);
          t[o]
            ? t[o].p(s, a)
            : ((t[o] = Bn(s)), t[o].c(), t[o].m(e.parentNode, e));
        }
        for (; o < t.length; o += 1) t[o].d(1);
        t.length = l.length;
      }
    },
    d(n) {
      n && C(e), _e(t, n);
    },
  };
}
function Bn(r) {
  let e,
    l,
    t,
    n = r[5].fullname + "",
    a,
    o,
    s,
    i,
    c = r[5].message + "",
    u,
    d,
    _,
    v,
    m = jn(Number(r[5].time)) + "",
    k,
    w,
    g;
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("p")),
        (a = L(n)),
        (o = y()),
        (s = p("div")),
        (i = p("p")),
        (u = L(c)),
        (_ = y()),
        (v = p("p")),
        (k = L(m)),
        (w = y()),
        h(t, "class", "text-[1.2vh]"),
        h(
          l,
          "class",
          "w-fit flex justify-between items-center text-gray-400 font-medium -mb-[0.5vh]"
        ),
        h(
          s,
          "class",
          (d =
            "w-fit max-w-[85%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
            (r[2] && r[3].cid === r[5].citizenid ? "bg-accent" : "bg-tertiary"))
        ),
        h(v, "class", "text-[1vh] ml-[0.5vh]"),
        h(
          e,
          "class",
          (g =
            "w-full flex flex-col text-[1.3vh] text-gray-400 " +
            (r[2] && r[3].cid === r[5].citizenid ? "items-end" : "items-start"))
        );
    },
    m(b, $) {
      E(b, e, $),
        f(e, l),
        f(l, t),
        f(t, a),
        f(e, o),
        f(e, s),
        f(s, i),
        f(i, u),
        f(e, _),
        f(e, v),
        f(v, k),
        f(e, w);
    },
    p(b, $) {
      $ & 1 && n !== (n = b[5].fullname + "") && M(a, n),
        $ & 1 && c !== (c = b[5].message + "") && M(u, c),
        $ & 13 &&
          d !==
            (d =
              "w-fit max-w-[85%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
              (b[2] && b[3].cid === b[5].citizenid
                ? "bg-accent"
                : "bg-tertiary")) &&
          h(s, "class", d),
        $ & 1 && m !== (m = jn(Number(b[5].time)) + "") && M(k, m),
        $ & 13 &&
          g !==
            (g =
              "w-full flex flex-col text-[1.3vh] text-gray-400 " +
              (b[2] && b[3].cid === b[5].citizenid
                ? "items-end"
                : "items-start")) &&
          h(e, "class", g);
    },
    d(b) {
      b && C(e);
    },
  };
}
function Ia(r) {
  let e,
    l,
    t = r[0] && r[1] && On(r);
  return {
    c() {
      (e = p("div")), (l = p("div")), t && t.c();
    },
    m(n, a) {
      E(n, e, a), f(e, l), t && t.m(l, null);
    },
    p(n, [a]) {
      n[0] && n[1]
        ? t
          ? t.p(n, a)
          : ((t = On(n)), t.c(), t.m(l, null))
        : t && (t.d(1), (t = null));
    },
    i: R,
    o: R,
    d(n) {
      n && C(e), t && t.d();
    },
  };
}
function Ma(r, e, l) {
  let t, n, a, o;
  V(r, El, (i) => l(0, (t = i))),
    V(r, Br, (i) => l(1, (n = i))),
    V(r, Rt, (i) => l(2, (a = i))),
    V(r, kl, (i) => l(3, (o = i)));
  function s() {
    pe("GetMessages");
  }
  return (
    it(() => {
      const i = setInterval(() => {
        s();
      }, 1e3);
      return () => clearInterval(i);
    }),
    [t, n, a, o]
  );
}
class Pa extends ne {
  constructor(e) {
    super(), le(this, e, Ma, Ia, K, {});
  }
}
function Ta(r) {
  let e, l, t, n, a, o, s, i;
  return (
    (l = new Ge({ props: { title: "Chat Staff" } })),
    (a = new Pa({})),
    (s = new Aa({})),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          (t = y()),
          (n = p("div")),
          G(a.$$.fragment),
          (o = y()),
          G(s.$$.fragment),
          h(n, "id", "chatList"),
          h(n, "class", "w-full h-[84%] overflow-auto"),
          h(e, "class", "h-full w-full px-[2vh] pb-[2vh] flex flex-col ");
      },
      m(c, u) {
        E(c, e, u),
          H(l, e, null),
          f(e, t),
          f(e, n),
          H(a, n, null),
          f(e, o),
          H(s, e, null),
          (i = !0);
      },
      p: R,
      i(c) {
        i ||
          (S(l.$$.fragment, c),
          S(a.$$.fragment, c),
          S(s.$$.fragment, c),
          (i = !0));
      },
      o(c) {
        N(l.$$.fragment, c), N(a.$$.fragment, c), N(s.$$.fragment, c), (i = !1);
      },
      d(c) {
        c && C(e), F(l), F(a), F(s);
      },
    }
  );
}
class ja extends ne {
  constructor(e) {
    super(), le(this, e, null, Ta, K, {});
  }
}
function Ra(r) {
  let e,
    l,
    t,
    n = (r[0].id ? `${r[0].id} - ${r[1]}` : r[1]) + "",
    a,
    o,
    s,
    i,
    c;
  return {
    c() {
      (e = p("button")),
        (l = p("div")),
        (t = p("p")),
        (a = L(n)),
        (o = y()),
        (s = p("i")),
        h(s, "class", "fas fa-angle-right"),
        h(l, "class", "w-full flex items-center justify-between gap-[1vh]"),
        h(
          e,
          "class",
          "w-full flex items-center px-[1.5vh] py-[1vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90 "
        );
    },
    m(u, d) {
      E(u, e, d),
        f(e, l),
        f(l, t),
        f(t, a),
        f(l, o),
        f(l, s),
        i || ((c = B(e, "click", r[3])), (i = !0));
    },
    p(u, [d]) {
      d & 3 &&
        n !== (n = (u[0].id ? `${u[0].id} - ${u[1]}` : u[1]) + "") &&
        M(a, n);
    },
    i: R,
    o: R,
    d(u) {
      u && C(e), (i = !1), c();
    },
  };
}
function Oa(r, e, l) {
  let t,
    { player: n } = e;
  function a(s) {
    Or.set(s), Be.set(!0), ko.set(s.vehicles);
  }
  const o = () => a(n);
  return (
    (r.$$set = (s) => {
      "player" in s && l(0, (n = s.player));
    }),
    (r.$$.update = () => {
      r.$$.dirty & 1 &&
        l(
          1,
          (t =
            n.name && n.name.length > 20 ? n.name.slice(0, 20) + "..." : n.name)
        );
    }),
    [n, t, a, o]
  );
}
class Fr extends ne {
  constructor(e) {
    super(), le(this, e, Oa, Ra, K, { player: 0 });
  }
}
function Ba(r) {
  let e, l, t;
  const n = r[1].default,
    a = Er(n, r, r[0], null);
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        a && a.c(),
        h(
          l,
          "class",
          "bg-tertiary rounded-[0.5vh] flex flex-col px-[2vh] py-[1.5vh] gap-[0.8vh]"
        ),
        h(
          e,
          "class",
          "fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-75"
        );
    },
    m(o, s) {
      E(o, e, s), f(e, l), a && a.m(l, null), (t = !0);
    },
    p(o, [s]) {
      a &&
        a.p &&
        (!t || s & 1) &&
        Sr(a, n, o, o[0], t ? Lr(n, o[0], s, null) : Ar(o[0]), null);
    },
    i(o) {
      t || (S(a, o), (t = !0));
    },
    o(o) {
      N(a, o), (t = !1);
    },
    d(o) {
      o && C(e), a && a.d(o);
    },
  };
}
function Va(r, e, l) {
  let { $$slots: t = {}, $$scope: n } = e;
  return (
    (r.$$set = (a) => {
      "$$scope" in a && l(0, (n = a.$$scope));
    }),
    [n, t]
  );
}
class Ml extends ne {
  constructor(e) {
    super(), le(this, e, Va, Ba, K, {});
  }
}
function Vn(r, e, l) {
  const t = r.slice();
  return (t[27] = e[l]), t;
}
function Hn(r, e, l) {
  const t = r.slice();
  return (t[30] = e[l]), t;
}
function Fn(r, e, l) {
  const t = r.slice();
  return (t[30] = e[l]), t;
}
function Ha(r) {
  let e, l, t, n, a, o, s, i, c, u, d, _, v;
  const m = [Ga, za],
    k = [];
  function w(A, D) {
    return (
      D[0] & 5 && (t = null),
      t == null && (t = !!(A[2] && A[2].filter(A[12]).length === 0)),
      t ? 0 : 1
    );
  }
  (n = w(r, [-1, -1])), (a = k[n] = m[n](r));
  const g = [Ja, Ua],
    b = [];
  function $(A, D) {
    return (
      D[0] & 9 && (c = null),
      c == null && (c = !!(A[3] && A[3].filter(A[11]).length === 0)),
      c ? 0 : 1
    );
  }
  return (
    (u = $(r, [-1, -1])),
    (d = b[u] = g[u](r)),
    {
      c() {
        (e = p("p")),
          (e.textContent = "Players Online"),
          (l = y()),
          a.c(),
          (o = y()),
          (s = p("p")),
          (s.textContent = "Players Offline"),
          (i = y()),
          d.c(),
          (_ = Q()),
          h(e, "class", "font-medium text-[1.7vh]"),
          h(s, "class", "font-medium text-[1.7vh] mt-[2vh]");
      },
      m(A, D) {
        E(A, e, D),
          E(A, l, D),
          k[n].m(A, D),
          E(A, o, D),
          E(A, s, D),
          E(A, i, D),
          b[u].m(A, D),
          E(A, _, D),
          (v = !0);
      },
      p(A, D) {
        let I = n;
        (n = w(A, D)),
          n === I
            ? k[n].p(A, D)
            : (Z(),
              N(k[I], 1, 1, () => {
                k[I] = null;
              }),
              ee(),
              (a = k[n]),
              a ? a.p(A, D) : ((a = k[n] = m[n](A)), a.c()),
              S(a, 1),
              a.m(o.parentNode, o));
        let T = u;
        (u = $(A, D)),
          u === T
            ? b[u].p(A, D)
            : (Z(),
              N(b[T], 1, 1, () => {
                b[T] = null;
              }),
              ee(),
              (d = b[u]),
              d ? d.p(A, D) : ((d = b[u] = g[u](A)), d.c()),
              S(d, 1),
              d.m(_.parentNode, _));
      },
      i(A) {
        v || (S(a), S(d), (v = !0));
      },
      o(A) {
        N(a), N(d), (v = !1);
      },
      d(A) {
        A && (C(e), C(l), C(o), C(s), C(i), C(_)), k[n].d(A), b[u].d(A);
      },
    }
  );
}
function Fa(r) {
  let e, l;
  return (
    (e = new rl({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p: R,
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function za(r) {
  let e,
    l,
    t = Y(r[2].filter(r[14])),
    n = [];
  for (let o = 0; o < t.length; o += 1) n[o] = zn(Fn(r, t, o));
  const a = (o) =>
    N(n[o], 1, 1, () => {
      n[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1) n[o].c();
      e = Q();
    },
    m(o, s) {
      for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(o, s);
      E(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s[0] & 5) {
        t = Y(o[2].filter(o[14]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = Fn(o, t, i);
          n[i]
            ? (n[i].p(c, s), S(n[i], 1))
            : ((n[i] = zn(c)), n[i].c(), S(n[i], 1), n[i].m(e.parentNode, e));
        }
        for (Z(), i = t.length; i < n.length; i += 1) a(i);
        ee();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) S(n[s]);
        l = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) N(n[s]);
      l = !1;
    },
    d(o) {
      o && C(e), _e(n, o);
    },
  };
}
function Ga(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No players online found."),
        h(
          e,
          "class",
          "text-accent text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
function zn(r) {
  let e, l, t, n, a, o;
  return (
    (n = new Fr({ props: { player: r[30] } })),
    {
      c() {
        (e = p("div")),
          (l = p("span")),
          (l.textContent = "🟢"),
          (t = y()),
          G(n.$$.fragment),
          (a = y()),
          h(l, "class", "text-green-500 text-[2.5vh]"),
          h(e, "class", "flex items-center gap-[1vh]");
      },
      m(s, i) {
        E(s, e, i), f(e, l), f(e, t), H(n, e, null), f(e, a), (o = !0);
      },
      p(s, i) {
        const c = {};
        i[0] & 5 && (c.player = s[30]), n.$set(c);
      },
      i(s) {
        o || (S(n.$$.fragment, s), (o = !0));
      },
      o(s) {
        N(n.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && C(e), F(n);
      },
    }
  );
}
function Ua(r) {
  let e,
    l,
    t = Y(r[3].filter(r[15])),
    n = [];
  for (let o = 0; o < t.length; o += 1) n[o] = Gn(Hn(r, t, o));
  const a = (o) =>
    N(n[o], 1, 1, () => {
      n[o] = null;
    });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1) n[o].c();
      e = Q();
    },
    m(o, s) {
      for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(o, s);
      E(o, e, s), (l = !0);
    },
    p(o, s) {
      if (s[0] & 9) {
        t = Y(o[3].filter(o[15]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const c = Hn(o, t, i);
          n[i]
            ? (n[i].p(c, s), S(n[i], 1))
            : ((n[i] = Gn(c)), n[i].c(), S(n[i], 1), n[i].m(e.parentNode, e));
        }
        for (Z(), i = t.length; i < n.length; i += 1) a(i);
        ee();
      }
    },
    i(o) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) S(n[s]);
        l = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1) N(n[s]);
      l = !1;
    },
    d(o) {
      o && C(e), _e(n, o);
    },
  };
}
function Ja(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No players online found."),
        h(
          e,
          "class",
          "text-accent text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
function Gn(r) {
  let e, l, t, n, a, o;
  return (
    (n = new Fr({ props: { player: r[30] } })),
    {
      c() {
        (e = p("div")),
          (l = p("span")),
          (l.textContent = "🔴"),
          (t = y()),
          G(n.$$.fragment),
          (a = y()),
          h(l, "class", "text-red-500 text-[2.5vh]"),
          h(e, "class", "flex items-center gap-[1vh]");
      },
      m(s, i) {
        E(s, e, i), f(e, l), f(e, t), H(n, e, null), f(e, a), (o = !0);
      },
      p(s, i) {
        const c = {};
        i[0] & 9 && (c.player = s[30]), n.$set(c);
      },
      i(s) {
        o || (S(n.$$.fragment, s), (o = !0));
      },
      o(s) {
        N(n.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && C(e), F(n);
      },
    }
  );
}
function Un(r) {
  let e;
  function l(a, o) {
    return a[8] ? Ya : qa;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      (e = p("div")),
        n.c(),
        h(
          e,
          "class",
          "h-full w-[66vh] border-l-[0.2vh] border-tertiary p-[2vh]"
        );
    },
    m(a, o) {
      E(a, e, o), n.m(e, null);
    },
    p(a, o) {
      t === (t = l(a)) && n
        ? n.p(a, o)
        : (n.d(1), (n = t(a)), n && (n.c(), n.m(e, null)));
    },
    d(a) {
      a && C(e), n.d();
    },
  };
}
function Ya(r) {
  let e,
    l,
    t = r[8].id + "",
    n,
    a,
    o = r[8].name + "",
    s,
    i,
    c,
    u,
    d,
    _,
    v,
    m,
    k,
    w,
    g,
    b =
      (r[8].discord
        ? r[8].discord.replace("discord:", "Discord: ")
        : "Discord: N/A") + "",
    $,
    A,
    D,
    I =
      (r[8].license
        ? r[8].license.replace("license:", "License: ")
        : "License: N/A") + "",
    T,
    O,
    z,
    j = (r[8].fivem ? r[8].fivem : "") + "",
    U,
    X,
    ie,
    J = (r[8].steam ? r[8].steam : "") + "",
    W,
    re,
    fe,
    ke,
    te,
    he,
    Ve,
    de = r[8].cid + "",
    ce,
    P,
    ue,
    We,
    Ue = r[8].name + "",
    Xe,
    He,
    Le,
    st,
    Re = r[8].job + "",
    se,
    Ce,
    Fe = r[8].job_grade + "",
    Je,
    Ze,
    ft,
    ye,
    et,
    xe = r[8].gang + "",
    tt,
    mt,
    bt = r[8].gang_grade + "",
    ct,
    vt,
    Ct,
    gt,
    lt,
    ut = r[8].cash + "",
    Et,
    dt,
    nt,
    Bt,
    rt = r[8].bank + "",
    pt,
    Dt,
    _t,
    Ke,
    Ee = r[8].phone + "",
    Lt,
    wt,
    Ye,
    kt;
  function Se(q, oe) {
    return q[8].online ? xa : Wa;
  }
  let ot = Se(r),
    Oe = ot(r),
    Ae = Y(r[8].vehicles),
    ge = [];
  for (let q = 0; q < Ae.length; q += 1) ge[q] = Jn(Vn(r, Ae, q));
  return {
    c() {
        (e = p("p")),
          (l = L("ID: ")),
          (n = L(t)),
          (a = L(" - ")),
          (s = L(o)),
          (i = y()),
          (c = p("div")),
          (u = p("p")),
          (u.textContent = "Quick Actions"),
          (d = y()),
          Oe.c(),
          (_ = y()),
          (v = p("div")),
          (m = p("p")),
          (m.textContent = "Licenses"),
          (k = y()),
          (w = p("div")),
          (g = p("p")),
          ($ = L(b)),
          (A = y()),
          (D = p("p")),
          (T = L(I)),
          (O = y()),
          (z = p("p")),
          (U = L(j)),
          (X = y()),
          (ie = p("p")),
          (W = L(J)),
          (re = y()),
          (fe = p("p")),
          (fe.textContent = "Information"),
          (ke = y()),
          (te = p("div")),
          (he = p("p")),
          (Ve = L("ID: ")),
          (ce = L(de)),
          (P = y()),
          (ue = p("p")),
          (We = L("Name: ")),
          (Xe = L(Ue)),
          (He = y()),
          (Le = p("p")),
          (st = L("Job: ")),
          (se = L(Re)),
          (Ce = L(" (")),
          (Je = L(Fe)),
          (Ze = L(")")),
          (ft = y()),
          (ye = p("p")),
          (et = L("Gang: ")),
          (tt = L(xe)),
          (mt = L(" (")),
          (ct = L(bt)),
          (vt = L(")")),
          (Ct = y()),
          (gt = p("p")),
          (lt = L("Wallet: R$ ")),
          (Et = L(ut)),
          (dt = y()),
          (nt = p("p")),
          (Bt = L("Bank: R$ ")),
          (pt = L(rt)),
          (Dt = y()),
          (_t = p("p")),
          (Ke = L("Phone: ")),
          (Lt = L(Ee)),
          (wt = y()),
          (Ye = p("p")),
          (Ye.textContent = "Vehicles"),
          (kt = y());
        for (let q = 0; q < ge.length; q += 1) ge[q].c();
        h(e, "class", "text-[2vh] font-medium"),
          h(u, "class", "font-medium text-[1.7vh]"),
          h(m, "class", "font-medium text-[1.7vh]"),
          h(
            w,
            "class",
            "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
          ),
          h(fe, "class", "font-medium text-[1.7vh]"),
          h(
            te,
            "class",
            "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
          ),
          h(Ye, "class", "font-medium text-[1.7vh]"),
          h(
            v,
            "class",
            "h-[90%] overflow-auto flex flex-col gap-[1vh] select-text"
          ),
          h(c, "class", "w-full h-[96.5%] pt-[2vh] flex flex-col gap-[1vh]");
    },
    m(q, oe) {
      E(q, e, oe),
        f(e, l),
        f(e, n),
        f(e, a),
        f(e, s),
        E(q, i, oe),
        E(q, c, oe),
        f(c, u),
        f(c, d),
        Oe.m(c, null),
        f(c, _),
        f(c, v),
        f(v, m),
        f(v, k),
        f(v, w),
        f(w, g),
        f(g, $),
        f(w, A),
        f(w, D),
        f(D, T),
        f(w, O),
        f(w, z),
        f(z, U),
        f(w, X),
        f(w, ie),
        f(ie, W),
        f(v, re),
        f(v, fe),
        f(v, ke),
        f(v, te),
        f(te, he),
        f(he, Ve),
        f(he, ce),
        f(te, P),
        f(te, ue),
        f(ue, We),
        f(ue, Xe),
        f(te, He),
        f(te, Le),
        f(Le, st),
        f(Le, se),
        f(Le, Ce),
        f(Le, Je),
        f(Le, Ze),
        f(te, ft),
        f(te, ye),
        f(ye, et),
        f(ye, tt),
        f(ye, mt),
        f(ye, ct),
        f(ye, vt),
        f(te, Ct),
        f(te, gt),
        f(gt, lt),
        f(gt, Et),
        f(te, dt),
        f(te, nt),
        f(nt, Bt),
        f(nt, pt),
        f(te, Dt),
        f(te, _t),
        f(_t, Ke),
        f(_t, Lt),
        f(v, wt),
        f(v, Ye),
        f(v, kt);
      for (let me = 0; me < ge.length; me += 1) ge[me] && ge[me].m(v, null);
    },
    p(q, oe) {
      if (
        (oe[0] & 256 && t !== (t = q[8].id + "") && M(n, t),
        oe[0] & 256 && o !== (o = q[8].name + "") && M(s, o),
        ot === (ot = Se(q)) && Oe
          ? Oe.p(q, oe)
          : (Oe.d(1), (Oe = ot(q)), Oe && (Oe.c(), Oe.m(c, _))),
        oe[0] & 256 &&
          b !==
            (b =
              (q[8].discord
                ? q[8].discord.replace("discord:", "Discord: ")
                : "Discord: N/A") + "") &&
          M($, b),
        oe[0] & 256 &&
          I !==
            (I =
              (q[8].license
                ? q[8].license.replace("license:", "License: ")
                : "License: N/A") + "") &&
          M(T, I),
        oe[0] & 256 &&
          j !== (j = (q[8].fivem ? q[8].fivem : "") + "") &&
          M(U, j),
        oe[0] & 256 &&
          J !== (J = (q[8].steam ? q[8].steam : "") + "") &&
          M(W, J),
        oe[0] & 256 && de !== (de = q[8].cid + "") && M(ce, de),
        oe[0] & 256 && Ue !== (Ue = q[8].name + "") && M(Xe, Ue),
        oe[0] & 256 && Re !== (Re = q[8].job + "") && M(se, Re),
        oe[0] & 256 && Fe !== (Fe = q[8].job_grade + "") && M(Je, Fe),
        oe[0] & 256 && xe !== (xe = q[8].gang + "") && M(tt, xe),
        oe[0] & 256 && bt !== (bt = q[8].gang_grade + "") && M(ct, bt),
        oe[0] & 256 && ut !== (ut = q[8].cash + "") && M(Et, ut),
        oe[0] & 256 && rt !== (rt = q[8].bank + "") && M(pt, rt),
        oe[0] & 256 && Ee !== (Ee = q[8].phone + "") && M(Lt, Ee),
        oe[0] & 256)
      ) {
        Ae = Y(q[8].vehicles);
        let me;
        for (me = 0; me < Ae.length; me += 1) {
          const Vt = Vn(q, Ae, me);
          ge[me]
            ? ge[me].p(Vt, oe)
            : ((ge[me] = Jn(Vt)), ge[me].c(), ge[me].m(v, null));
        }
        for (; me < ge.length; me += 1) ge[me].d(1);
        ge.length = Ae.length;
      }
    },
    d(q) {
      q && (C(e), C(i), C(c)), Oe.d(), _e(ge, q);
    },
  };
}
function qa(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.innerHTML =
          '<div class="text-4xl text-accent">No player selected.</div>');
      h(
        e,
        "class",
        "h-full w-full flex flex-col items-center justify-center"
      );
    },
    m(l, t) {
      E(l, e, t); // Correctly separated by a comma
    },
    p: R,
    d(l) {
      l && C(e);
    },
  };
}

function Wa(r) {
  let e;
  return {
    c() {
      (e = p("p")),
        (e.textContent = "Player offline - actions have been limited"),
        h(e, "class", "text-center text-[1.5vh] text-accent");
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    d(l) {
      l && C(e);
    },
  };
}
function xa(r) {
  let e, l, t, n, a, o, s, i, c, u, d, _, v, m;
  return {
    c() {
        (e = p("div")),
        (l = p("button")),
        (l.innerHTML = '<i class="fas fa-user-minus"></i>'),
        (t = y()),
        (n = p("button")),
        (n.innerHTML = '<i class="fas fa-ban"></i>'),
        (a = y()),
        (o = p("button")),
        (o.innerHTML = '<i class="fas fa-person-walking-arrow-right"></i>'),
        (s = y()),
        (i = p("button")),
        (i.innerHTML = '<i class="fas fa-person-walking-arrow-loop-left"></i>'),
        (c = y()),
        (u = p("button")),
        (u.innerHTML = '<i class="fas fa-heart-pulse"></i>'),
        (d = y()),
        (_ = p("button")),
        (_.innerHTML = '<i class="fas fa-eye"></i>'),
        h(l, "title", "Kick"),
        h(
          l,
          "class",
          "h-[4.5vh] w-full rounded-l-[0.5vh] hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(l, "data-tip", "Kick"),
        h(n, "title", "Ban"),
        h(
          n,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(n, "data-tip", "Ban"),
        h(o, "title", "Teleport"),
        h(
          o,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(o, "data-tip", "Teleport"),
        h(i, "title", "Bring"),
        h(
          i,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(i, "data-tip", "Bring"),
        h(u, "title", "Revive"),
        h(
          u,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(u, "data-tip", "Revive"),
        h(_, "title", "Spectator Mode"),
        h(
          _,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(_, "data-tip", "Spectator Mode"),
        h(e, "class", "w-full bg-tertiary flex rounded-[0.5vh]");
      },      
    m(k, w) {
      E(k, e, w),
        f(e, l),
        f(e, t),
        f(e, n),
        f(e, a),
        f(e, o),
        f(e, s),
        f(e, i),
        f(e, c),
        f(e, u),
        f(e, d),
        f(e, _),
        v ||
          ((m = [
            B(l, "click", r[16]),
            B(n, "click", r[17]),
            B(o, "click", r[18]),
            B(i, "click", r[19]),
            B(u, "click", r[20]),
            B(_, "click", r[21]),
          ]),
          (v = !0));
    },
    p: R,
    d(k) {
      k && C(e), (v = !1), ve(m);
    },
  };
}
function Jn(r) {
  let e,
    l,
    t,
    n = r[27].label + "",
    a,
    o,
    s,
    i,
    c = r[27].plate + "",
    u,
    d,
    _,
    v,
    m,
    k,
    w;
  function g() {
    return r[22](r[27]);
  }
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("p")),
        (a = L(n)),
        (o = y()),
        (s = p("p")),
        (i = L("License Plate: ")),
        (u = L(c)),
        (d = y()),
        (_ = p("div")),
        (v = p("button")),
        (v.textContent = "Spawn"),
        (m = y()),
        h(t, "class", "font-medium text-[1.7vh]"),
        h(
          v,
          "class",
          "bg-secondary px-[1vh] py-[0.5vh] rounded-[0.5vh] border border-primary"
        ),
        h(_, "class", "ml-auto h-full flex items-center"),
        h(
          e,
          "class",
          "w-full bg-tertiary flex flex-row rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        );
    },
    m(b, $) {
      E(b, e, $),
        f(e, l),
        f(l, t),
        f(t, a),
        f(l, o),
        f(l, s),
        f(s, i),
        f(s, u),
        f(e, d),
        f(e, _),
        f(_, v),
        f(e, m),
        k || ((w = B(v, "click", g)), (k = !0));
    },
    p(b, $) {
      (r = b),
        $[0] & 256 && n !== (n = r[27].label + "") && M(a, n),
        $[0] & 256 && c !== (c = r[27].plate + "") && M(u, c);
    },
    d(b) {
      b && C(e), (k = !1), w();
    },
  };
}
function Yn(r) {
  let e, l;
  return (
    (e = new Ml({
      props: { $$slots: { default: [Ka] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        (n[0] & 336) | (n[1] & 16) && (a.$$scope = { dirty: n, ctx: t }),
          e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Ka(r) {
  let e,
    l,
    t,
    n = r[8].name + "",
    a,
    o,
    s,
    i,
    c,
    u,
    d,
    _,
    v,
    m,
    k,
    w;
  return (
    (c = new Il({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: r[10],
      },
    })),
    (d = new Nl({
      props: {
        action: { label: "Duration", value: "duration", id: "duration" },
        label_title: "Duration",
        data: r[9],
        selectedData: r[10],
      },
    })),
    {
      c() {
        (e = p("div")),
          (l = p("p")),
          (t = L("Ban ")),
          (a = L(n)),
          (o = y()),
          (s = p("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = y()),
          G(c.$$.fragment),
          (u = y()),
          G(d.$$.fragment),
          (_ = y()),
          (v = p("button")),
          (v.innerHTML = "<p>Ban</p>"),
          h(l, "class", "font-medium text-[1.8vh]"),
          h(s, "class", "hover:text-accent"),
          h(e, "class", "flex justify-between"),
          h(
            v,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(g, b) {
        E(g, e, b),
          f(e, l),
          f(l, t),
          f(l, a),
          f(e, o),
          f(e, s),
          E(g, i, b),
          H(c, g, b),
          E(g, u, b),
          H(d, g, b),
          E(g, _, b),
          E(g, v, b),
          (m = !0),
          k || ((w = [B(s, "click", r[23]), B(v, "click", r[24])]), (k = !0));
      },
      p(g, b) {
        (!m || b[0] & 256) && n !== (n = g[8].name + "") && M(a, n);
      },
      i(g) {
        m || (S(c.$$.fragment, g), S(d.$$.fragment, g), (m = !0));
      },
      o(g) {
        N(c.$$.fragment, g), N(d.$$.fragment, g), (m = !1);
      },
      d(g) {
        g && (C(e), C(i), C(u), C(_), C(v)), F(c, g), F(d, g), (k = !1), ve(w);
      },
    }
  );
}
function qn(r) {
  let e, l;
  return (
    (e = new Ml({
      props: { $$slots: { default: [Qa] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        (n[0] & 288) | (n[1] & 16) && (a.$$scope = { dirty: n, ctx: t }),
          e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Qa(r) {
  let e,
    l,
    t,
    n = r[8].name + "",
    a,
    o,
    s,
    i,
    c,
    u,
    d,
    _,
    v,
    m;
  return (
    (c = new Il({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: r[10],
      },
    })),
    {
      c() {
        (e = p("div")),
          (l = p("p")),
          (t = L("Kick ")),
          (a = L(n)),
          (o = y()),
          (s = p("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = y()),
          G(c.$$.fragment),
          (u = y()),
          (d = p("button")),
          (d.innerHTML = "<p>Kick</p>"),
          h(l, "class", "font-medium text-[1.8vh]"),
          h(s, "class", "hover:text-accent"),
          h(e, "class", "flex justify-between"),
          h(
            d,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(k, w) {
        E(k, e, w),
          f(e, l),
          f(l, t),
          f(l, a),
          f(e, o),
          f(e, s),
          E(k, i, w),
          H(c, k, w),
          E(k, u, w),
          E(k, d, w),
          (_ = !0),
          v || ((m = [B(s, "click", r[25]), B(d, "click", r[26])]), (v = !0));
      },
      p(k, w) {
        (!_ || w[0] & 256) && n !== (n = k[8].name + "") && M(a, n);
      },
      i(k) {
        _ || (S(c.$$.fragment, k), (_ = !0));
      },
      o(k) {
        N(c.$$.fragment, k), (_ = !1);
      },
      d(k) {
        k && (C(e), C(i), C(u), C(d)), F(c, k), (v = !1), ve(m);
      },
    }
  );
}
function Xa(r) {
  let e, l, t, n, a, o, s, i, c, u, d;
  l = new Ge({
    props: { title: "Players", hasSearch: !0, onSearchInput: r[13] },
  });
  const _ = [Fa, Ha],
    v = [];
  function m(b, $) {
    return b[1] ? 0 : 1;
  }
  (a = m(r)), (o = v[a] = _[a](r));
  let k = r[7] && Un(r),
    w = r[4] && Yn(r),
    g = r[5] && qn(r);
  return {
    c() {
      (e = p("div")),
        G(l.$$.fragment),
        (t = y()),
        (n = p("div")),
        o.c(),
        (s = y()),
        k && k.c(),
        (i = y()),
        w && w.c(),
        (c = y()),
        g && g.c(),
        (u = Q()),
        h(
          n,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        h(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(b, $) {
      E(b, e, $),
        H(l, e, null),
        f(e, t),
        f(e, n),
        v[a].m(n, null),
        E(b, s, $),
        k && k.m(b, $),
        E(b, i, $),
        w && w.m(b, $),
        E(b, c, $),
        g && g.m(b, $),
        E(b, u, $),
        (d = !0);
    },
    p(b, $) {
      const A = {};
      $[0] & 1 && (A.onSearchInput = b[13]), l.$set(A);
      let D = a;
      (a = m(b)),
        a === D
          ? v[a].p(b, $)
          : (Z(),
            N(v[D], 1, 1, () => {
              v[D] = null;
            }),
            ee(),
            (o = v[a]),
            o ? o.p(b, $) : ((o = v[a] = _[a](b)), o.c()),
            S(o, 1),
            o.m(n, null)),
        b[7]
          ? k
            ? k.p(b, $)
            : ((k = Un(b)), k.c(), k.m(i.parentNode, i))
          : k && (k.d(1), (k = null)),
        b[4]
          ? w
            ? (w.p(b, $), $[0] & 16 && S(w, 1))
            : ((w = Yn(b)), w.c(), S(w, 1), w.m(c.parentNode, c))
          : w &&
            (Z(),
            N(w, 1, 1, () => {
              w = null;
            }),
            ee()),
        b[5]
          ? g
            ? (g.p(b, $), $[0] & 32 && S(g, 1))
            : ((g = qn(b)), g.c(), S(g, 1), g.m(u.parentNode, u))
          : g &&
            (Z(),
            N(g, 1, 1, () => {
              g = null;
            }),
            ee());
    },
    i(b) {
      d || (S(l.$$.fragment, b), S(o), S(w), S(g), (d = !0));
    },
    o(b) {
      N(l.$$.fragment, b), N(o), N(w), N(g), (d = !1);
    },
    d(b) {
      b && (C(e), C(s), C(i), C(c), C(u)),
        F(l),
        v[a].d(),
        k && k.d(b),
        w && w.d(b),
        g && g.d(b);
    },
  };
}
function Za(r, e, l) {
  let t, n;
  V(r, Be, (J) => l(7, (t = J))), V(r, Or, (J) => l(8, (n = J)));
  let a = "",
    o = !1,
    s = [],
    i = [],
    c = !1,
    u = !1,
    d = {},
    _ = [
      { label: "Permanent", value: "2147483647" },
      { label: "10 Minutes", value: "600" },
      { label: "30 Minutes", value: "1800" },
      { label: "1 Hour", value: "3600" },
      { label: "6 Hours", value: "21600" },
      { label: "12 Hours", value: "43200" },
      { label: "1 Day", value: "86400" },
      { label: "3 Days", value: "259200" },
      { label: "1 Week", value: "604800" },
      { label: "3 Weeks", value: "1814400" },
    ];
  function v(J) {
    l(6, (d[J.id] = J), d);
  }
  return (
    it(async () => {
      try {
        l(1, (o = !0));
        const J = await pe("getPlayers");
        J &&
          (l(2, (s = J.filter((W) => W.online))),
          l(3, (i = J.filter((W) => !W.online))),
          Rt.set(J));
      } catch (J) {
        console.error("Error loading players:", J);
      } finally {
        l(1, (o = !1));
      }
    }),
    [
      a,
      o,
      s,
      i,
      c,
      u,
      d,
      t,
      n,
      _,
      v,
      (J) => J.name.toLowerCase().includes(a.toLowerCase()),
      (J) => J.name.toLowerCase().includes(a.toLowerCase()),
      (J) => l(0, (a = J.target.value)),
      (J) => J.name.toLowerCase().includes(a.toLowerCase()),
      (J) => J.name.toLowerCase().includes(a.toLowerCase()),
      () => l(5, (u = !0)),
      () => l(4, (c = !0)),
      () =>
        pe("clickButton", {
          data: "teleportToPlayer",
          selectedData: { Player: { value: n.id } },
        }),
      () =>
        pe("clickButton", {
          data: "bringPlayer",
          selectedData: { Player: { value: n.id } },
        }),
      () =>
        pe("clickButton", {
          data: "revivePlayer",
          selectedData: { Player: { value: n.id } },
        }),
      () =>
        pe("clickButton", {
          data: "spectate_player",
          selectedData: { Player: { value: n.id } },
        }),
      (J) =>
        pe("clickButton", {
          data: "spawnPersonalVehicle",
          selectedData: { VehiclePlate: { value: J.plate } },
        }),
      () => l(4, (c = !1)),
      () => {
        pe("clickButton", {
          data: "banPlayer",
          selectedData: {
            Player: { value: n.id },
            Duration: { value: d.Duration.value },
            Reason: { value: d.Reason.value },
          },
        });
      },
      () => l(5, (u = !1)),
      () => {
        pe("clickButton", {
          data: "kickPlayer",
          selectedData: { Player: { value: n.id }, Reason: { value: n.id } },
        });
      },
    ]
  );
}
class ei extends ne {
  constructor(e) {
    super(), le(this, e, Za, Xa, K, {}, null, [-1, -1]);
  }
}
function ti(r) {
  let e,
    l,
    t,
    n,
    a,
    o = (r[0] ? r[0] : "") + "",
    s;
  return {
    c() {
      (e = p("button")),
        (l = p("div")),
        (t = p("i")),
        (n = y()),
        (a = p("p")),
        (s = L(o)),
        h(t, "class", "fas fa-angle-right mr-[1vh]"),
        h(a, "class", "text-[1.5vh]"),
        h(l, "class", "flex items-center p-[2vh]"),
        h(
          e,
          "class",
          "w-full flex justify-between rounded-[0.5vh] bg-tertiary items-center"
        );
    },
    m(i, c) {
      E(i, e, c), f(e, l), f(l, t), f(l, n), f(l, a), f(a, s);
    },
    p(i, [c]) {
      c & 1 && o !== (o = (i[0] ? i[0] : "") + "") && M(s, o);
    },
    i: R,
    o: R,
    d(i) {
      i && C(e);
    },
  };
}
function li(r, e, l) {
  let { label: t } = e;
  return (
    (r.$$set = (n) => {
      "label" in n && l(0, (t = n.label));
    }),
    [t]
  );
}
class ni extends ne {
  constructor(e) {
    super(), le(this, e, li, ti, K, { label: 0 });
  }
}
function Wn(r, e, l) {
  const t = r.slice();
  return (t[7] = e[l]), t;
}
function xn(r) {
  let e, l, t, n, a;
  const o = [oi, ri],
    s = [];
  function i(c, u) {
    return (
      u & 3 && (e = null),
      e == null && (e = !!(c[1] && c[1].filter(c[4]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(r, -1)),
    (t = s[l] = o[l](r)),
    {
      c() {
        t.c(), (n = Q());
      },
      m(c, u) {
        s[l].m(c, u), E(c, n, u), (a = !0);
      },
      p(c, u) {
        let d = l;
        (l = i(c, u)),
          l === d
            ? s[l].p(c, u)
            : (Z(),
              N(s[d], 1, 1, () => {
                s[d] = null;
              }),
              ee(),
              (t = s[l]),
              t ? t.p(c, u) : ((t = s[l] = o[l](c)), t.c()),
              S(t, 1),
              t.m(n.parentNode, n));
      },
      i(c) {
        a || (S(t), (a = !0));
      },
      o(c) {
        N(t), (a = !1);
      },
      d(c) {
        c && C(n), s[l].d(c);
      },
    }
  );
}
function ri(r) {
  let e,
    l,
    t,
    n,
    a = Y(r[3].filter(r[6])),
    o = [];
  for (let i = 0; i < a.length; i += 1) o[i] = Kn(Wn(r, a, i));
  const s = (i) =>
    N(o[i], 1, 1, () => {
      o[i] = null;
    });
  return {
    c() {
      (e = p("small")),
        (e.textContent = `Total Commands: ${r[3].length}`),
        (l = y());
      for (let i = 0; i < o.length; i += 1) o[i].c();
      (t = Q()), h(e, "class", "font-medium");
    },
    m(i, c) {
      E(i, e, c), E(i, l, c);
      for (let u = 0; u < o.length; u += 1) o[u] && o[u].m(i, c);
      E(i, t, c), (n = !0);
    },
    p(i, c) {
      if (c & 9) {
        a = Y(i[3].filter(i[6]));
        let u;
        for (u = 0; u < a.length; u += 1) {
          const d = Wn(i, a, u);
          o[u]
            ? (o[u].p(d, c), S(o[u], 1))
            : ((o[u] = Kn(d)), o[u].c(), S(o[u], 1), o[u].m(t.parentNode, t));
        }
        for (Z(), u = a.length; u < o.length; u += 1) s(u);
        ee();
      }
    },
    i(i) {
      if (!n) {
        for (let c = 0; c < a.length; c += 1) S(o[c]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1) N(o[c]);
      n = !1;
    },
    d(i) {
      i && (C(e), C(l), C(t)), _e(o, i);
    },
  };
}
function oi(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No command found."),
        h(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    i: R,
    o: R,
    d(l) {
      l && C(e);
    },
  };
}
function Kn(r) {
  let e, l;
  return (
    (e = new ni({ props: { label: r[7].name } })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1 && (a.label = t[7].name), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Qn(r) {
  let e, l, t;
  return (
    (l = new Ge({ props: { title: "Dashboard" } })),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          h(
            e,
            "class",
            "h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]"
          );
      },
      m(n, a) {
        E(n, e, a), H(l, e, null), (t = !0);
      },
      i(n) {
        t || (S(l.$$.fragment, n), (t = !0));
      },
      o(n) {
        N(l.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && C(e), F(l);
      },
    }
  );
}
function ai(r) {
  let e, l, t, n, a, o, s;
  l = new Ge({
    props: { title: "Commands", hasSearch: !0, onSearchInput: r[5] },
  });
  let i = r[1] && xn(r),
    c = r[2] && Qn();
  return {
    c() {
      (e = p("div")),
        G(l.$$.fragment),
        (t = y()),
        (n = p("div")),
        i && i.c(),
        (a = y()),
        c && c.c(),
        (o = Q()),
        h(
          n,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        h(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(u, d) {
      E(u, e, d),
        H(l, e, null),
        f(e, t),
        f(e, n),
        i && i.m(n, null),
        E(u, a, d),
        c && c.m(u, d),
        E(u, o, d),
        (s = !0);
    },
    p(u, [d]) {
      const _ = {};
      d & 1 && (_.onSearchInput = u[5]),
        l.$set(_),
        u[1]
          ? i
            ? (i.p(u, d), d & 2 && S(i, 1))
            : ((i = xn(u)), i.c(), S(i, 1), i.m(n, null))
          : i &&
            (Z(),
            N(i, 1, 1, () => {
              i = null;
            }),
            ee()),
        u[2]
          ? c
            ? d & 4 && S(c, 1)
            : ((c = Qn()), c.c(), S(c, 1), c.m(o.parentNode, o))
          : c &&
            (Z(),
            N(c, 1, 1, () => {
              c = null;
            }),
            ee());
    },
    i(u) {
      s || (S(l.$$.fragment, u), S(i), S(c), (s = !0));
    },
    o(u) {
      N(l.$$.fragment, u), N(i), N(c), (s = !1);
    },
    d(u) {
      u && (C(e), C(a), C(o)), F(l), i && i.d(), c && c.d(u);
    },
  };
}
function ii(r, e, l) {
  let t, n;
  V(r, yl, (u) => l(1, (t = u))), V(r, Be, (u) => l(2, (n = u)));
  let a = "",
    o = t ? t.slice().sort((u, d) => u.name.localeCompare(d.name)) : [];
  return [
    a,
    t,
    n,
    o,
    (u) => u.name.toLowerCase().includes(a.toLowerCase()),
    (u) => l(0, (a = u.target.value)),
    (u) => u.name.toLowerCase().includes(a.toLowerCase()),
  ];
}
class si extends ne {
  constructor(e) {
    super(), le(this, e, ii, ai, K, {});
  }
}
function Xn(r, e, l) {
  const t = r.slice();
  return (t[17] = e[l]), t;
}
function Zn(r) {
  let e;
  function l(a, o) {
    return a[7].length === 0 ? ci : fi;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t === (t = l(a)) && n
        ? n.p(a, o)
        : (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function fi(r) {
  let e,
    l,
    t = r[1].length + "",
    n,
    a,
    o = [],
    s = new Map(),
    i,
    c = Y(r[7]);
  const u = (d) => d[17].item;
  for (let d = 0; d < c.length; d += 1) {
    let _ = Xn(r, c, d),
      v = u(_);
    s.set(v, (o[d] = er(v, _)));
  }
  return {
    c() {
      (e = p("small")), (l = L("Total Items: ")), (n = L(t)), (a = y());
      for (let d = 0; d < o.length; d += 1) o[d].c();
      (i = Q()), h(e, "class", "text-gray-400 font-medium");
    },
    m(d, _) {
      E(d, e, _), f(e, l), f(e, n), E(d, a, _);
      for (let v = 0; v < o.length; v += 1) o[v] && o[v].m(d, _);
      E(d, i, _);
    },
    p(d, _) {
      _ & 2 && t !== (t = d[1].length + "") && M(n, t),
        _ & 1920 &&
          ((c = Y(d[7])),
          (o = Al(o, _, u, 1, d, c, s, i.parentNode, Sl, er, i, Xn)));
    },
    d(d) {
      d && (C(e), C(a), C(i));
      for (let _ = 0; _ < o.length; _ += 1) o[_].d(d);
    },
  };
}
function ci(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No item found."),
        h(e, "class", "text-gray-500 text-center text-sm font-medium mt-4");
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    d(l) {
      l && C(e);
    },
  };
}
function er(r, e) {
  let l,
    t,
    n,
    a,
    o,
    s,
    i =
      (e[8]
        ? e[17].name || "No Name"
        : (e[17].name || "No Name").substring(0, 20) +
          (e[17].name.length > 20 ? "..." : "")) + "",
    c,
    u,
    d,
    _ = (e[17].description || "No description available.") + "",
    v,
    m,
    k,
    w,
    g,
    b = (e[17].item || "N/A") + "",
    $,
    A,
    D,
    I = (e[17].weight || "N/A") + "",
    T,
    O,
    z,
    j,
    U,
    X,
    ie;
  function J() {
    return e[14](e[17]);
  }
  return {
    key: r,
    first: null,
    c() {
      (l = p("div")),
        (t = p("div")),
        (a = y()),
        (o = p("div")),
        (s = p("span")),
        (c = L(i)),
        (u = y()),
        (d = p("span")),
        (v = L(_)),
        (m = y()),
        (k = p("div")),
        (w = p("span")),
        (g = L("ID: ")),
        ($ = L(b)),
        (A = y()),
        (D = p("div")),
        (T = L(I)),
        (O = L(" kg")),
        (z = y()),
        (j = p("button")),
        (j.textContent = "Spawn"),
        (U = y()),
        h(t, "class", "item-image svelte-t2adb2"),
        Mt(t, "background-image", "url(" + e[9](e[17].item) + ")"),
        h(t, "data-fallback", (n = !e[17].item)),
        h(s, "class", "text-white font-bold text-2xl truncate svelte-t2adb2"),
        h(d, "class", "text-gray-400 text-xl"),
        h(
          k,
          "class",
          "flex justify-between text-lg text-gray-300 font-medium mt-2"
        ),
        h(o, "class", "flex flex-col flex-grow"),
        h(
          D,
          "class",
          "absolute bottom-4 right-4 text-gray-300 text-sm font-medium svelte-t2adb2"
        ),
        h(
          j,
          "class",
          "spawn-button absolute top-4 right-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded svelte-t2adb2"
        ),
        h(
          l,
          "class",
          "relative flex items-center gap-4 bg-secondary p-4 rounded-lg shadow-md"
        ),
        (this.first = l);
    },
    m(W, re) {
      E(W, l, re),
        f(l, t),
        f(l, a),
        f(l, o),
        f(o, s),
        f(s, c),
        f(o, u),
        f(o, d),
        f(d, v),
        f(o, m),
        f(o, k),
        f(k, w),
        f(w, g),
        f(w, $),
        f(l, A),
        f(l, D),
        f(D, T),
        f(D, O),
        f(l, z),
        f(l, j),
        f(l, U),
        X || ((ie = B(j, "click", J)), (X = !0));
    },
    p(W, re) {
      (e = W),
        re & 128 && Mt(t, "background-image", "url(" + e[9](e[17].item) + ")"),
        re & 128 && n !== (n = !e[17].item) && h(t, "data-fallback", n),
        re & 384 &&
          i !==
            (i =
              (e[8]
                ? e[17].name || "No name"
                : (e[17].name || "No name").substring(0, 20) +
                  (e[17].name.length > 20 ? "..." : "")) + "") &&
          M(c, i),
        re & 128 &&
          _ !== (_ = (e[17].description || "No description available.") + "") &&
          M(v, _),
        re & 128 && b !== (b = (e[17].item || "N/A") + "") && M($, b),
        re & 128 && I !== (I = (e[17].weight || "N/A") + "") && M(T, I);
    },
    d(W) {
      W && C(l), (X = !1), ie();
    },
  };
}
function tr(r) {
  let e, l;
  return (
    (e = new Ml({
      props: { $$slots: { default: [ui] }, $$scope: { ctx: r } },
    })),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      p(t, n) {
        const a = {};
        n & 1048688 && (a.$$scope = { dirty: n, ctx: t }), e.$set(a);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function ui(r) {
  var A;
  let e,
    l,
    t,
    n = ((A = r[4]) == null ? void 0 : A.name) + "",
    a,
    o,
    s,
    i,
    c,
    u,
    d,
    _,
    v,
    m,
    k,
    w,
    g,
    b,
    $;
  return (
    (c = new Nl({
      props: {
        label_title: "Select Player",
        data: "players",
        selectedData: r[15],
      },
    })),
    {
      c() {
        (e = p("div")),
          (l = p("p")),
          (t = L("Give Item: ")),
          (a = L(n)),
          (o = y()),
          (s = p("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = y()),
          G(c.$$.fragment),
          (u = y()),
          (d = p("div")),
          (_ = p("label")),
          (_.textContent = "Quantity"),
          (v = y()),
          (m = p("input")),
          (k = y()),
          (w = p("button")),
          (w.innerHTML = "<p>Confirm</p>"),
          h(l, "class", "font-medium text-[1.8vh]"),
          h(s, "class", "hover:text-accent"),
          h(e, "class", "flex justify-between"),
          h(_, "class", "block text-sm font-medium text-gray-300"),
          h(m, "type", "number"),
          h(m, "min", "1"),
          h(
            m,
            "class",
            "w-full px-3 py-2 border border-gray-600 rounded bg-tertiary text-white"
          ),
          h(d, "class", "mt-4"),
          h(
            w,
            "class",
            "mt-4 h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(D, I) {
        E(D, e, I),
          f(e, l),
          f(l, t),
          f(l, a),
          f(e, o),
          f(e, s),
          E(D, i, I),
          H(c, D, I),
          E(D, u, I),
          E(D, d, I),
          f(d, _),
          f(d, v),
          f(d, m),
          ze(m, r[6]),
          E(D, k, I),
          E(D, w, I),
          (g = !0),
          b ||
            (($ = [
              B(s, "click", r[11]),
              B(m, "input", r[16]),
              B(w, "click", r[12]),
            ]),
            (b = !0));
      },
      p(D, I) {
        var O;
        (!g || I & 16) &&
          n !== (n = ((O = D[4]) == null ? void 0 : O.name) + "") &&
          M(a, n);
        const T = {};
        I & 32 && (T.selectedData = D[15]),
          c.$set(T),
          I & 64 && Pr(m.value) !== D[6] && ze(m, D[6]);
      },
      i(D) {
        g || (S(c.$$.fragment, D), (g = !0));
      },
      o(D) {
        N(c.$$.fragment, D), (g = !1);
      },
      d(D) {
        D && (C(e), C(i), C(u), C(d), C(k), C(w)), F(c, D), (b = !1), ve($);
      },
    }
  );
}
function di(r) {
  let e, l, t, n, a, o, s, i, c;
  t = new Ge({
    props: {
      title: "Items",
      hasSearch: !0,
      hasLargeMenu: !0,
      onSearchInput: r[13],
    },
  });
  let u = r[2] && Zn(r),
    d = r[3] && tr(r);
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        G(t.$$.fragment),
        (n = y()),
        (a = p("div")),
        u && u.c(),
        (s = y()),
        d && d.c(),
        (i = Q()),
        h(a, "class", "w-full h-[84%] flex flex-col gap-4 mt-4 overflow-auto"),
        h(l, "class", "flex flex-col h-full gap-4"),
        h(
          e,
          "class",
          (o =
            Kt(`h-full ${r[8] ? "w-full" : "w-[33vh]"} px-4`) +
            " svelte-t2adb2")
        );
    },
    m(_, v) {
      E(_, e, v),
        f(e, l),
        H(t, l, null),
        f(l, n),
        f(l, a),
        u && u.m(a, null),
        E(_, s, v),
        d && d.m(_, v),
        E(_, i, v),
        (c = !0);
    },
    p(_, [v]) {
      const m = {};
      v & 1 && (m.onSearchInput = _[13]),
        t.$set(m),
        _[2]
          ? u
            ? u.p(_, v)
            : ((u = Zn(_)), u.c(), u.m(a, null))
          : u && (u.d(1), (u = null)),
        (!c ||
          (v & 256 &&
            o !==
              (o =
                Kt(`h-full ${_[8] ? "w-full" : "w-[33vh]"} px-4`) +
                " svelte-t2adb2"))) &&
          h(e, "class", o),
        _[3]
          ? d
            ? (d.p(_, v), v & 8 && S(d, 1))
            : ((d = tr(_)), d.c(), S(d, 1), d.m(i.parentNode, i))
          : d &&
            (Z(),
            N(d, 1, 1, () => {
              d = null;
            }),
            ee());
    },
    i(_) {
      c || (S(t.$$.fragment, _), S(d), (c = !0));
    },
    o(_) {
      N(t.$$.fragment, _), N(d), (c = !1);
    },
    d(_) {
      _ && (C(e), C(s), C(i)), F(t), u && u.d(), d && d.d(_);
    },
  };
}
function pi(r, e, l) {
  let t, n, a, o;
  V(r, $l, (A) => l(2, (a = A))), V(r, Be, (A) => l(8, (o = A)));
  let s = "",
    i = !1,
    c = null,
    u = null,
    d = 1;
  const _ = (A) => `https://cfx-nui-ox_inventory/web/images/${A}.png`;
  function v(A) {
    l(4, (c = A)), l(3, (i = !0)), l(6, (d = 1));
  }
  function m() {
    l(3, (i = !1)), l(4, (c = null)), l(5, (u = null)), l(6, (d = 1));
  }
  async function k() {
    !u ||
      !c ||
      d <= 0 ||
      (pe("clickButton", {
        type: "server",
        data: "give_item",
        selectedData: {
          Player: { value: u.value },
          Item: { value: c.item },
          Amount: { value: d },
        },
      }),
      m());
  }
  const w = (A) => l(0, (s = A.target.value)),
    g = (A) => v(A),
    b = (A) => l(5, (u = A));
  function $() {
    (d = Pr(this.value)), l(6, d);
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 4 &&
        l(
          1,
          (t = a ? a.slice().sort((A, D) => A.name.localeCompare(D.name)) : [])
        ),
        r.$$.dirty & 3 &&
          l(
            7,
            (n = t.filter(
              (A) =>
                A.name.toLowerCase().includes(s.toLowerCase()) ||
                A.item.toLowerCase().includes(s.toLowerCase()) ||
                (A.description &&
                  A.description.toLowerCase().includes(s.toLowerCase()))
            ))
          );
    }),
    [s, t, a, i, c, u, d, n, o, _, v, m, k, w, g, b, $]
  );
}
class _i extends ne {
  constructor(e) {
    super(), le(this, e, pi, di, K, {});
  }
}
function lr(r, e, l) {
  const t = r.slice();
  return (t[9] = e[l]), t;
}
function nr(r) {
  let e;
  function l(a, o) {
    return a[3].length === 0 ? mi : hi;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t === (t = l(a)) && n
        ? n.p(a, o)
        : (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function hi(r) {
  let e,
    l,
    t = r[1].length + "",
    n,
    a,
    o = [],
    s = new Map(),
    i,
    c = Y(r[3]);
  const u = (d) => d[9].hash;
  for (let d = 0; d < c.length; d += 1) {
    let _ = lr(r, c, d),
      v = u(_);
    s.set(v, (o[d] = rr(v, _)));
  }
  return {
    c() {
      (e = p("small")), (l = L("Total Vehicles: ")), (n = L(t)), (a = y());
      for (let d = 0; d < o.length; d += 1) o[d].c();
      (i = Q()), h(e, "class", "text-gray-400 font-medium");
    },
    m(d, _) {
      E(d, e, _), f(e, l), f(e, n), E(d, a, _);
      for (let v = 0; v < o.length; v += 1) o[v] && o[v].m(d, _);
      E(d, i, _);
    },
    p(d, _) {
      _ & 2 && t !== (t = d[1].length + "") && M(n, t),
        _ & 120 &&
          ((c = Y(d[3])),
          (o = Al(o, _, u, 1, d, c, s, i.parentNode, Sl, rr, i, lr)));
    },
    d(d) {
      d && (C(e), C(a), C(i));
      for (let _ = 0; _ < o.length; _ += 1) o[_].d(d);
    },
  };
}
function mi(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No vehicle found."),
        h(e, "class", "text-gray-500 text-center text-sm font-medium mt-4");
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    d(l) {
      l && C(e);
    },
  };
}
function rr(r, e) {
  let l,
    t,
    n,
    a,
    o,
    s,
    i,
    c =
      (e[4]
        ? e[9].name || "No name"
        : (e[9].name || "No name").substring(0, 20) +
          (e[9].name.length > 20 ? "..." : "")) + "",
    u,
    d,
    _,
    v,
    m = (e[9].brand || "No brand") + "",
    k,
    w,
    g,
    b,
    $ = (e[9].category || "No catergory") + "",
    A,
    D,
    I,
    T,
    O,
    z = (e[9].model || "N/A") + "",
    j,
    U,
    X,
    ie,
    J = (e[9].price || "N/A") + "",
    W,
    re,
    fe,
    ke,
    te,
    he;
  function Ve() {
    return e[8](e[9]);
  }
  return {
    key: r,
    first: null,
    c() {
      (l = p("div")),
        (t = p("img")),
        (o = y()),
        (s = p("div")),
        (i = p("span")),
        (u = L(c)),
        (d = y()),
        (_ = p("div")),
        (v = L("Brand: ")),
        (k = L(m)),
        (w = y()),
        (g = p("div")),
        (b = L("Category: ")),
        (A = L($)),
        (D = y()),
        (I = p("div")),
        (T = p("span")),
        (O = L("Model: ")),
        (j = L(z)),
        (U = y()),
        (X = p("span")),
        (ie = L("Price: $")),
        (W = L(J)),
        (re = y()),
        (fe = p("button")),
        (fe.textContent = "Spawn"),
        (ke = y()),
        fl(t.src, (n = e[6](e[9].model))) || h(t, "src", n),
        h(
          t,
          "onerror",
          "this.src='https://via.placeholder.com/128x80?text=No+Image'"
        ),
        h(t, "alt", (a = e[9].name)),
        h(t, "class", "vehicle-image rounded-lg object-cover svelte-qif144"),
        h(i, "class", "text-white font-bold text-xl truncate svelte-qif144"),
        h(_, "class", "text-gray-400 text-base"),
        h(g, "class", "text-gray-400 text-base"),
        h(
          I,
          "class",
          "flex justify-between text-base text-gray-300 font-medium mt-2"
        ),
        h(s, "class", "flex flex-col flex-grow"),
        h(
          fe,
          "class",
          "spawn-button absolute top-4 right-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded svelte-qif144"
        ),
        h(
          l,
          "class",
          "relative flex items-center gap-6 bg-secondary p-6 rounded-lg shadow-md"
        ),
        (this.first = l);
    },
    m(de, ce) {
      E(de, l, ce),
        f(l, t),
        f(l, o),
        f(l, s),
        f(s, i),
        f(i, u),
        f(s, d),
        f(s, _),
        f(_, v),
        f(_, k),
        f(s, w),
        f(s, g),
        f(g, b),
        f(g, A),
        f(s, D),
        f(s, I),
        f(I, T),
        f(T, O),
        f(T, j),
        f(I, U),
        f(I, X),
        f(X, ie),
        f(X, W),
        f(l, re),
        f(l, fe),
        f(l, ke),
        te || ((he = B(fe, "click", Ve)), (te = !0));
    },
    p(de, ce) {
      (e = de),
        ce & 8 && !fl(t.src, (n = e[6](e[9].model))) && h(t, "src", n),
        ce & 8 && a !== (a = e[9].name) && h(t, "alt", a),
        ce & 24 &&
          c !==
            (c =
              (e[4]
                ? e[9].name || "No name"
                : (e[9].name || "No name").substring(0, 20) +
                  (e[9].name.length > 20 ? "..." : "")) + "") &&
          M(u, c),
        ce & 8 && m !== (m = (e[9].brand || "No brand") + "") && M(k, m),
        ce & 8 &&
          $ !== ($ = (e[9].category || "No category") + "") &&
          M(A, $),
        ce & 8 && z !== (z = (e[9].model || "N/A") + "") && M(j, z),
        ce & 8 && J !== (J = (e[9].price || "N/A") + "") && M(W, J);
    },
    d(de) {
      de && C(l), (te = !1), he();
    },
  };
}
function bi(r) {
  let e, l, t, n, a, o, s;
  t = new Ge({
    props: {
      title: "Vehicles",
      hasSearch: !0,
      hasLargeMenu: !0,
      onSearchInput: r[7],
    },
  });
  let i = r[2] && nr(r);
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        G(t.$$.fragment),
        (n = y()),
        (a = p("div")),
        i && i.c(),
        h(a, "class", "w-full h-[84%] flex flex-col gap-4 mt-4 overflow-auto"),
        h(l, "class", "flex flex-col h-full gap-4"),
        h(
          e,
          "class",
          (o =
            Kt(`h-full ${r[4] ? "w-full" : "w-[33vh]"} px-4`) +
            " svelte-qif144")
        );
    },
    m(c, u) {
      E(c, e, u),
        f(e, l),
        H(t, l, null),
        f(l, n),
        f(l, a),
        i && i.m(a, null),
        (s = !0);
    },
    p(c, [u]) {
      const d = {};
      u & 1 && (d.onSearchInput = c[7]),
        t.$set(d),
        c[2]
          ? i
            ? i.p(c, u)
            : ((i = nr(c)), i.c(), i.m(a, null))
          : i && (i.d(1), (i = null)),
        (!s ||
          (u & 16 &&
            o !==
              (o =
                Kt(`h-full ${c[4] ? "w-full" : "w-[33vh]"} px-4`) +
                " svelte-qif144"))) &&
          h(e, "class", o);
    },
    i(c) {
      s || (S(t.$$.fragment, c), (s = !0));
    },
    o(c) {
      N(t.$$.fragment, c), (s = !1);
    },
    d(c) {
      c && C(e), F(t), i && i.d();
    },
  };
}
function vi(r, e, l) {
  let t, n, a, o;
  V(r, Cl, (_) => l(2, (a = _))), V(r, Be, (_) => l(4, (o = _)));
  let s = "";
  function i(_) {
    pe("clickButton", {
      type: "client",
      data: "spawn_vehicle",
      selectedData: { Vehicle: { value: _.model } },
    });
  }
  const c = (_) => `https://docs.fivem.net/vehicles/${_}.webp`,
    u = (_) => l(0, (s = _.target.value)),
    d = (_) => i(_);
  return (
    (r.$$.update = () => {
      r.$$.dirty & 4 &&
        l(
          1,
          (t = a ? a.slice().sort((_, v) => _.name.localeCompare(v.name)) : [])
        ),
        r.$$.dirty & 3 &&
          l(
            3,
            (n = t.filter((_) => {
              var v, m, k, w, g;
              return [
                (v = _.name) == null ? void 0 : v.toLowerCase(),
                (m = _.brand) == null ? void 0 : m.toLowerCase(),
                (k = _.category) == null ? void 0 : k.toLowerCase(),
                (w = _.model) == null ? void 0 : w.toLowerCase(),
                (g = _.price) == null ? void 0 : g.toString(),
              ].some((b) => (b == null ? void 0 : b.includes(s.toLowerCase())));
            }))
          );
    }),
    [s, t, a, n, o, i, c, u, d]
  );
}
class gi extends ne {
  constructor(e) {
    super(), le(this, e, vi, bi, K, {});
  }
}
function or(r) {
  let e, l, t;
  return (
    (l = new rl({})),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          h(
            e,
            "class",
            "absolute inset-0 flex items-center justify-center bg-secondary/50 z-10"
          );
      },
      m(n, a) {
        E(n, e, a), H(l, e, null), (t = !0);
      },
      i(n) {
        t || (S(l.$$.fragment, n), (t = !0));
      },
      o(n) {
        N(l.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && C(e), F(l);
      },
    }
  );
}
function wi(r) {
  let e, l, t, n, a, o, s, i, c, u;
  l = new Ge({ props: { title: "Credits" } });
  let d = r[0] && or();
  return {
    c() {
      (e = p("div")),
        G(l.$$.fragment),
        (t = y()),
        (n = p("div")),
        d && d.c(),
        (a = y()),
        (o = p("iframe")),
        fl(o.src, (s = "https://docs.mriqbox.com.br/")) || h(o, "src", s),
        h(o, "class", "w-full h-full"),
        h(o, "sandbox", "allow-same-origin allow-scripts"),
        h(
          n,
          "class",
          "w-full h-[90%] mt-[1vh] rounded-[0.5vh] border-none overflow-hidden relative"
        ),
        h(e, "class", "h-full w-full px-[2vh]");
    },
    m(_, v) {
      E(_, e, v),
        H(l, e, null),
        f(e, t),
        f(e, n),
        d && d.m(n, null),
        f(n, a),
        f(n, o),
        (i = !0),
        c || ((u = B(o, "load", r[1])), (c = !0));
    },
    p(_, [v]) {
      _[0]
        ? d
          ? v & 1 && S(d, 1)
          : ((d = or()), d.c(), S(d, 1), d.m(n, a))
        : d &&
          (Z(),
          N(d, 1, 1, () => {
            d = null;
          }),
          ee());
    },
    i(_) {
      i || (S(l.$$.fragment, _), S(d), (i = !0));
    },
    o(_) {
      N(l.$$.fragment, _), N(d), (i = !1);
    },
    d(_) {
      _ && C(e), F(l), d && d.d(), (c = !1), u();
    },
  };
}
function ki(r, e, l) {
  let t = !0;
  return [t, () => l(0, (t = !1))];
}
class yi extends ne {
  constructor(e) {
    super(), le(this, e, ki, wi, K, {});
  }
}
function ar(r, e, l) {
  const t = r.slice();
  return (t[16] = e[l]), (t[18] = l), t;
}
function $i(r) {
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i,
    c,
    u = r[3].totalCash + "",
    d,
    _,
    v,
    m,
    k,
    w,
    g,
    b,
    $,
    A,
    D = r[3].totalBank + "",
    I,
    T,
    O,
    z,
    j,
    U,
    X,
    ie,
    J,
    W,
    re = r[3].totalCrypto + "",
    fe,
    ke,
    te,
    he,
    Ve,
    de,
    ce,
    P,
    ue,
    We = r[3].uniquePlayers + "",
    Ue,
    Xe,
    He,
    Le,
    st,
    Re,
    se,
    Ce,
    Fe,
    Je = r[3].vehicleCount + "",
    Ze,
    ft,
    ye,
    et,
    xe,
    tt,
    mt,
    bt,
    ct,
    vt = r[3].bansCount + "",
    Ct,
    gt,
    lt,
    ut,
    Et,
    dt,
    nt,
    Bt,
    rt,
    pt = r[3].characterCount + "",
    Dt,
    _t,
    Ke,
    Ee,
    Lt,
    wt,
    Ye,
    kt,
    Se,
    ot,
    Oe,
    Ae,
    ge,
    q,
    oe,
    me,
    Vt,
    yt,
    Pl,
    Tl,
    $t,
    jl,
    Rl,
    Ut,
    ol,
    Ol,
    Ne = r[5] === "name" && ir(r),
    Ie = r[5] === "bank" && sr(r),
    Me = r[5] === "cash" && fr(r),
    Pe = r[5] === "crypto" && cr(r),
    St = Y(r[4]),
    De = [];
  for (let x = 0; x < St.length; x += 1) De[x] = ur(ar(r, St, x));
  return {
    c() {
        (e = p("div")),
        (l = p("div")),
        (t = p("i")),
        (n = y()),
        (a = p("div")),
        (o = p("h3")),
        (o.textContent = "Money in Hand"),
        (s = y()),
        (i = p("p")),
        (c = L("R$ ")),
        (d = L(u)),
        (_ = y()),
        (v = p("div")),
        (m = p("i")),
        (k = y()),
        (w = p("div")),
        (g = p("h3")),
        (g.textContent = "Money in Bank"),
        (b = y()),
        ($ = p("p")),
        (A = L("R$ ")),
        (I = L(D)),
        (T = y()),
        (O = p("div")),
        (z = p("i")),
        (j = y()),
        (U = p("div")),
        (X = p("h3")),
        (X.textContent = "Cryptocurrencies"),
        (ie = y()),
        (J = p("p")),
        (W = L("R$ ")),
        (fe = L(re)),
        (ke = y()),
        (te = p("div")),
        (he = p("i")),
        (Ve = y()),
        (de = p("div")),
        (ce = p("h3")),
        (ce.textContent = "Unique Players"),
        (P = y()),
        (ue = p("p")),
        (Ue = L(We)),
        (Xe = y()),
        (He = p("div")),
        (Le = p("i")),
        (st = y()),
        (Re = p("div")),
        (se = p("h3")),
        (se.textContent = "Vehicles"),
        (Ce = y()),
        (Fe = p("p")),
        (Ze = L(Je)),
        (ft = y()),
        (ye = p("div")),
        (et = p("i")),
        (xe = y()),
        (tt = p("div")),
        (mt = p("h3")),
        (mt.textContent = "Bans"),
        (bt = y()),
        (ct = p("p")),
        (Ct = L(vt)),
        (gt = y()),
        (lt = p("div")),
        (ut = p("i")),
        (Et = y()),
        (dt = p("div")),
        (nt = p("h3")),
        (nt.textContent = "Characters"),
        (Bt = y()),
        (rt = p("p")),
        (Dt = L(pt)),
        (_t = y()),
        (Ke = p("div")),
        (Ee = p("input")),
        (Lt = y()),
        (wt = p("div")),
        (Ye = p("table")),
        (kt = p("thead")),
        (Se = p("tr")),
        (ot = p("th")),
        (ot.textContent = "#"),
        (Oe = y()),
        (Ae = p("th")),
        (ge = L(`Name (CitizenID)\r
        `)),
        Ne && Ne.c(),
        (q = y()),
        (oe = p("th")),
        (me = L(`Money in Bank\r
        `)),
        Ie && Ie.c(),
        (Vt = y()),
        (yt = p("th")),
        (Pl = L(`Money in Hand\r
        `)),
        Me && Me.c(),
        (Tl = y()),
        ($t = p("th")),
        (jl = L(`Cryptocurrencies\r
        `)),
        Pe && Pe.c(),
        (Rl = y()),
        (Ut = p("tbody"));    
      for (let x = 0; x < De.length; x += 1) De[x].c();
      h(t, "class", "fas fa-wallet text-accent text-3xl mr-4"),
        h(o, "class", "text-lg font-semibold"),
        h(i, "class", "text-xl font-bold"),
        h(l, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(m, "class", "fas fa-piggy-bank text-green-500 text-3xl mr-4"),
        h(g, "class", "text-lg font-semibold"),
        h($, "class", "text-xl font-bold"),
        h(v, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(z, "class", "fas fa-coins text-yellow-500 text-3xl mr-4"),
        h(X, "class", "text-lg font-semibold"),
        h(J, "class", "text-xl font-bold"),
        h(O, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(he, "class", "fas fa-users text-blue-500 text-3xl mr-4"),
        h(ce, "class", "text-lg font-semibold"),
        h(ue, "class", "text-xl font-bold"),
        h(te, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(Le, "class", "fas fa-car text-red-500 text-3xl mr-4"),
        h(se, "class", "text-lg font-semibold"),
        h(Fe, "class", "text-xl font-bold"),
        h(He, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(et, "class", "fas fa-ban text-purple-500 text-3xl mr-4"),
        h(mt, "class", "text-lg font-semibold"),
        h(ct, "class", "text-xl font-bold"),
        h(ye, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(ut, "class", "fas fa-id-card text-teal-500 text-3xl mr-4"),
        h(nt, "class", "text-lg font-semibold"),
        h(rt, "class", "text-xl font-bold"),
        h(lt, "class", "bg-secondary p-4 rounded-lg shadow flex items-center"),
        h(
          e,
          "class",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6"
        ),
        h(Ee, "type", "text"),
        h(Ee, "placeholder", "Search by Name or CID..."),
        h(
          Ee,
          "class",
          "w-full p-2 rounded-lg border border-border_primary bg-tertiary text-white mb-4"
        ),
        h(ot, "class", "p-2"),
        h(Ae, "class", "p-2 cursor-pointer"),
        h(oe, "class", "p-2 cursor-pointer"),
        h(yt, "class", "p-2 cursor-pointer"),
        h($t, "class", "p-2 cursor-pointer"),
        h(kt, "class", "sticky top-0 bg-tertiary"),
        h(Ye, "class", "w-full text-left border-collapse"),
        h(wt, "class", "overflow-auto max-h-[50vh]"),
        h(Ke, "class", "bg-secondary p-4 rounded-lg shadow");
    },
    m(x, we) {
      E(x, e, we),
        f(e, l),
        f(l, t),
        f(l, n),
        f(l, a),
        f(a, o),
        f(a, s),
        f(a, i),
        f(i, c),
        f(i, d),
        f(e, _),
        f(e, v),
        f(v, m),
        f(v, k),
        f(v, w),
        f(w, g),
        f(w, b),
        f(w, $),
        f($, A),
        f($, I),
        f(e, T),
        f(e, O),
        f(O, z),
        f(O, j),
        f(O, U),
        f(U, X),
        f(U, ie),
        f(U, J),
        f(J, W),
        f(J, fe),
        f(e, ke),
        f(e, te),
        f(te, he),
        f(te, Ve),
        f(te, de),
        f(de, ce),
        f(de, P),
        f(de, ue),
        f(ue, Ue),
        f(e, Xe),
        f(e, He),
        f(He, Le),
        f(He, st),
        f(He, Re),
        f(Re, se),
        f(Re, Ce),
        f(Re, Fe),
        f(Fe, Ze),
        f(e, ft),
        f(e, ye),
        f(ye, et),
        f(ye, xe),
        f(ye, tt),
        f(tt, mt),
        f(tt, bt),
        f(tt, ct),
        f(ct, Ct),
        f(e, gt),
        f(e, lt),
        f(lt, ut),
        f(lt, Et),
        f(lt, dt),
        f(dt, nt),
        f(dt, Bt),
        f(dt, rt),
        f(rt, Dt),
        E(x, _t, we),
        E(x, Ke, we),
        f(Ke, Ee),
        ze(Ee, r[2]),
        f(Ke, Lt),
        f(Ke, wt),
        f(wt, Ye),
        f(Ye, kt),
        f(kt, Se),
        f(Se, ot),
        f(Se, Oe),
        f(Se, Ae),
        f(Ae, ge),
        Ne && Ne.m(Ae, null),
        f(Se, q),
        f(Se, oe),
        f(oe, me),
        Ie && Ie.m(oe, null),
        f(Se, Vt),
        f(Se, yt),
        f(yt, Pl),
        Me && Me.m(yt, null),
        f(Se, Tl),
        f(Se, $t),
        f($t, jl),
        Pe && Pe.m($t, null),
        f(Ye, Rl),
        f(Ye, Ut);
      for (let $e = 0; $e < De.length; $e += 1) De[$e] && De[$e].m(Ut, null);
      ol ||
        ((Ol = [
          B(Ee, "input", r[9]),
          B(Ee, "input", r[7]),
          B(Ae, "click", r[10]),
          B(oe, "click", r[11]),
          B(yt, "click", r[12]),
          B($t, "click", r[13]),
        ]),
        (ol = !0));
    },
    p(x, we) {
      if (
        (we & 8 && u !== (u = x[3].totalCash + "") && M(d, u),
        we & 8 && D !== (D = x[3].totalBank + "") && M(I, D),
        we & 8 && re !== (re = x[3].totalCrypto + "") && M(fe, re),
        we & 8 && We !== (We = x[3].uniquePlayers + "") && M(Ue, We),
        we & 8 && Je !== (Je = x[3].vehicleCount + "") && M(Ze, Je),
        we & 8 && vt !== (vt = x[3].bansCount + "") && M(Ct, vt),
        we & 8 && pt !== (pt = x[3].characterCount + "") && M(Dt, pt),
        we & 4 && Ee.value !== x[2] && ze(Ee, x[2]),
        x[5] === "name"
          ? Ne
            ? Ne.p(x, we)
            : ((Ne = ir(x)), Ne.c(), Ne.m(Ae, null))
          : Ne && (Ne.d(1), (Ne = null)),
        x[5] === "bank"
          ? Ie
            ? Ie.p(x, we)
            : ((Ie = sr(x)), Ie.c(), Ie.m(oe, null))
          : Ie && (Ie.d(1), (Ie = null)),
        x[5] === "cash"
          ? Me
            ? Me.p(x, we)
            : ((Me = fr(x)), Me.c(), Me.m(yt, null))
          : Me && (Me.d(1), (Me = null)),
        x[5] === "crypto"
          ? Pe
            ? Pe.p(x, we)
            : ((Pe = cr(x)), Pe.c(), Pe.m($t, null))
          : Pe && (Pe.d(1), (Pe = null)),
        we & 16)
      ) {
        St = Y(x[4]);
        let $e;
        for ($e = 0; $e < St.length; $e += 1) {
          const Bl = ar(x, St, $e);
          De[$e]
            ? De[$e].p(Bl, we)
            : ((De[$e] = ur(Bl)), De[$e].c(), De[$e].m(Ut, null));
        }
        for (; $e < De.length; $e += 1) De[$e].d(1);
        De.length = St.length;
      }
    },
    i: R,
    o: R,
    d(x) {
      x && (C(e), C(_t), C(Ke)),
        Ne && Ne.d(),
        Ie && Ie.d(),
        Me && Me.d(),
        Pe && Pe.d(),
        _e(De, x),
        (ol = !1),
        ve(Ol);
    },
  };
}
function Ci(r) {
  let e, l;
  return {
    c() {
      (e = p("div")),
        (l = L(r[1])),
        h(e, "class", "text-red-500 text-center font-bold");
    },
    m(t, n) {
      E(t, e, n), f(e, l);
    },
    p(t, n) {
      n & 2 && M(l, t[1]);
    },
    i: R,
    o: R,
    d(t) {
      t && C(e);
    },
  };
}
function Ei(r) {
  let e, l, t;
  return (
    (l = new rl({})),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          h(e, "class", "flex justify-center items-center h-full");
      },
      m(n, a) {
        E(n, e, a), H(l, e, null), (t = !0);
      },
      p: R,
      i(n) {
        t || (S(l.$$.fragment, n), (t = !0));
      },
      o(n) {
        N(l.$$.fragment, n), (t = !1);
      },
      d(n) {
        n && C(e), F(l);
      },
    }
  );
}
function ir(r) {
  let e;
  function l(a, o) {
    return a[6] === "asc" ? Li : Di;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t !== (t = l(a)) &&
        (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function Di(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-down ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function Li(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-up ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function sr(r) {
  let e;
  function l(a, o) {
    return a[6] === "asc" ? Ai : Si;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t !== (t = l(a)) &&
        (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function Si(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-down ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function Ai(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-up ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function fr(r) {
  let e;
  function l(a, o) {
    return a[6] === "asc" ? Ii : Ni;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t !== (t = l(a)) &&
        (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function Ni(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-down ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function Ii(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-up ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function cr(r) {
  let e;
  function l(a, o) {
    return a[6] === "asc" ? Pi : Mi;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      n.c(), (e = Q());
    },
    m(a, o) {
      n.m(a, o), E(a, e, o);
    },
    p(a, o) {
      t !== (t = l(a)) &&
        (n.d(1), (n = t(a)), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(a) {
      a && C(e), n.d(a);
    },
  };
}
function Mi(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-down ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function Pi(r) {
  let e;
  return {
    c() {
      (e = p("i")), h(e, "class", "fas fa-arrow-up ml-1");
    },
    m(l, t) {
      E(l, e, t);
    },
    d(l) {
      l && C(e);
    },
  };
}
function ur(r) {
  let e,
    l,
    t,
    n,
    a = (r[16].name || "N/A") + "",
    o,
    s,
    i = (r[16].cid || "N/A") + "",
    c,
    u,
    d,
    _,
    v,
    m = (r[16].bank || 0) + "",
    k,
    w,
    g,
    b,
    $ = (r[16].cash || 0) + "",
    A,
    D,
    I,
    T = (r[16].crypto || 0) + "",
    O,
    z;
  return {
    c() {
      (e = p("tr")),
        (l = p("td")),
        (l.textContent = `${r[18] + 1}`),
        (t = y()),
        (n = p("td")),
        (o = L(a)),
        (s = L(" (")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        (_ = p("td")),
        (v = L("R$ ")),
        (k = L(m)),
        (w = y()),
        (g = p("td")),
        (b = L("R$ ")),
        (A = L($)),
        (D = y()),
        (I = p("td")),
        (O = L(T)),
        (z = y()),
        h(l, "class", "p-2"),
        h(n, "class", "p-2"),
        h(_, "class", "p-2"),
        h(g, "class", "p-2"),
        h(I, "class", "p-2"),
        h(e, "class", "border-b border-border_primary");
    },
    m(j, U) {
      E(j, e, U),
        f(e, l),
        f(e, t),
        f(e, n),
        f(n, o),
        f(n, s),
        f(n, c),
        f(n, u),
        f(e, d),
        f(e, _),
        f(_, v),
        f(_, k),
        f(e, w),
        f(e, g),
        f(g, b),
        f(g, A),
        f(e, D),
        f(e, I),
        f(I, O),
        f(e, z);
    },
    p(j, U) {
      U & 16 && a !== (a = (j[16].name || "N/A") + "") && M(o, a),
        U & 16 && i !== (i = (j[16].cid || "N/A") + "") && M(c, i),
        U & 16 && m !== (m = (j[16].bank || 0) + "") && M(k, m),
        U & 16 && $ !== ($ = (j[16].cash || 0) + "") && M(A, $),
        U & 16 && T !== (T = (j[16].crypto || 0) + "") && M(O, T);
    },
    d(j) {
      j && C(e);
    },
  };
}
function Ti(r) {
  let e, l, t, n, a, o;
  l = new Ge({ props: { title: "Player Dashboard" } });
  const s = [Ei, Ci, $i],
    i = [];
  function c(u, d) {
    return u[0] ? 0 : u[1] ? 1 : 2;
  }
  return (
    (n = c(r)),
    (a = i[n] = s[n](r)),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          (t = y()),
          a.c(),
          h(e, "class", "h-full w-full px-6 py-6 bg-primary text-white");
      },
      m(u, d) {
        E(u, e, d), H(l, e, null), f(e, t), i[n].m(e, null), (o = !0);
      },
      p(u, [d]) {
        let _ = n;
        (n = c(u)),
          n === _
            ? i[n].p(u, d)
            : (Z(),
              N(i[_], 1, 1, () => {
                i[_] = null;
              }),
              ee(),
              (a = i[n]),
              a ? a.p(u, d) : ((a = i[n] = s[n](u)), a.c()),
              S(a, 1),
              a.m(e, null));
      },
      i(u) {
        o || (S(l.$$.fragment, u), S(a), (o = !0));
      },
      o(u) {
        N(l.$$.fragment, u), N(a), (o = !1);
      },
      d(u) {
        u && C(e), F(l), i[n].d();
      },
    }
  );
}
function ji(r, e, l) {
  let t = !0,
    n = "",
    a = "",
    o = {
      totalCash: 0,
      totalBank: 0,
      totalCrypto: 0,
      uniquePlayers: 0,
      vehicleCount: 0,
      bansCount: 0,
      characterCount: 0,
    },
    s = [],
    i = [],
    c = "bank",
    u = "desc";
  async function d() {
    try {
      l(0, (t = !0));
      const $ = await pe("getServerInfo");
      if ($)
        l(
          3,
          (o = {
            totalCash: $.totalCash || 0,
            totalBank: $.totalBank || 0,
            totalCrypto: $.totalCrypto || 0,
            uniquePlayers: $.uniquePlayers || 0,
            vehicleCount: $.vehicleCount || 0,
            bansCount: $.bansCount || 0,
            characterCount: $.characterCount || 0,
          })
        );
        else throw new Error("Invalid server data");
        const A = await pe("getPlayers");
        if (A && Array.isArray(A)) (s = A), _();
        else throw new Error("Invalid player data");
        } catch ($) {
          l(1, (n = $.message || "Error loading data"));        
    } finally {
      l(0, (t = !1));
    }
  }
  function _() {
    l(
      4,
      (i = [...s]
        .filter(($) => {
          var A, D;
          return (
            ((A = $.name) == null
              ? void 0
              : A.toLowerCase().includes(a.toLowerCase())) ||
            ((D = $.cid) == null
              ? void 0
              : D.toLowerCase().includes(a.toLowerCase()))
          );
        })
        .sort(($, A) =>
          c === "name"
            ? u === "asc"
              ? $.name.localeCompare(A.name)
              : A.name.localeCompare($.name)
            : u === "asc"
            ? ($[c] || 0) - (A[c] || 0)
            : (A[c] || 0) - ($[c] || 0)
        ))
    );
  }
  function v($) {
    c === $
      ? l(6, (u = u === "asc" ? "desc" : "asc"))
      : (l(5, (c = $)), l(6, (u = "desc"))),
      _();
  }
  it(d);
  function m() {
    (a = this.value), l(2, a);
  }
  return [
    t,
    n,
    a,
    o,
    i,
    c,
    u,
    _,
    v,
    m,
    () => v("name"),
    () => v("bank"),
    () => v("cash"),
    () => v("crypto"),
  ];
}
class Ri extends ne {
  constructor(e) {
    super(), le(this, e, ji, Ti, K, {});
  }
}
function dr(r, e, l) {
  const t = r.slice();
  return (t[16] = e[l]), t;
}
function pr(r, e, l) {
  const t = r.slice();
  return (t[19] = e[l]), (t[21] = l), t;
}
function _r(r, e, l) {
  const t = r.slice();
  return (t[22] = e[l]), t;
}
function hr(r) {
  let e;
  function l(a, o) {
    var s;
    return ((s = a[19].members) == null ? void 0 : s.length) === 0 ? Bi : Oi;
  }
  let t = l(r),
    n = t(r);
  return {
    c() {
      (e = p("div")), n.c(), h(e, "class", "px-4 py-2 space-y-2");
    },
    m(a, o) {
      E(a, e, o), n.m(e, null);
    },
    p(a, o) {
      t === (t = l(a)) && n
        ? n.p(a, o)
        : (n.d(1), (n = t(a)), n && (n.c(), n.m(e, null)));
    },
    d(a) {
      a && C(e), n.d();
    },
  };
}
function Oi(r) {
  let e = [],
    l = new Map(),
    t,
    n = Y(r[19].members);
  const a = (o) => o[22].id;
  for (let o = 0; o < n.length; o += 1) {
    let s = _r(r, n, o),
      i = a(s);
    l.set(i, (e[o] = mr(i, s)));
  }
  return {
    c() {
      for (let o = 0; o < e.length; o += 1) e[o].c();
      t = Q();
    },
    m(o, s) {
      for (let i = 0; i < e.length; i += 1) e[i] && e[i].m(o, s);
      E(o, t, s);
    },
    p(o, s) {
      s & 392 &&
        ((n = Y(o[19].members)),
        (e = Al(e, s, a, 1, o, n, l, t.parentNode, Sl, mr, t, _r)));
    },
    d(o) {
      o && C(t);
      for (let s = 0; s < e.length; s += 1) e[s].d(o);
    },
  };
}
function Bi(r) {
  let e;
  return {
    c() {
      (e = p("div")),
        (e.textContent = "No members in this group."),
        h(e, "class", "text-gray-500 text-sm font-medium");
    },
    m(l, t) {
      E(l, e, t);
    },
    p: R,
    d(l) {
      l && C(e);
    },
  };
}
function mr(r, e) {
  let l,
    t,
    n = e[22].name + "",
    a,
    o,
    s,
    i,
    c,
    u,
    d,
    _ = e[22].online ? "Online" : "Offline",
    v,
    m,
    k,
    w,
    g,
    b,
    $;
  function A() {
    return e[11](e[22], e[16]);
  }
  function D() {
    return e[12](e[22], e[16]);
  }
  return {
    key: r,
    first: null,
    c() {
      (l = p("div")),
        (t = p("span")),
        (a = L(n)),
        (o = y()),
        (s = p("div")),
        (i = p("div")),
        (c = p("span")),
        (u = y()),
        (d = p("span")),
        (v = L(_)),
        (m = y()),
        (k = p("i")),
        (w = y()),
        (g = p("i")),
        h(t, "class", "truncate"),
        h(c, "class", "inline-block w-2 h-2 rounded-full"),
        Te(c, "bg-green-400", e[22].online),
        Te(c, "bg-red-400", !e[22].online),
        h(d, "class", "text-sm font-medium"),
        Te(d, "text-green-400", e[22].online),
        Te(d, "text-red-400", !e[22].online),
        h(i, "class", "flex items-center gap-1"),
        h(
          k,
          "class",
          "fas fa-user-slash text-red-500 hover:text-red-400 cursor-pointer"
        ),
        h(
          g,
          "class",
          "fas fa-user-edit text-blue-500 hover:text-blue-400 cursor-pointer"
        ),
        h(s, "class", "flex items-center gap-4"),
        h(
          l,
          "class",
          "flex items-center justify-between py-1 border-b border-border_primary last:border-b-0"
        ),
        (this.first = l);
    },
    m(I, T) {
      E(I, l, T),
        f(l, t),
        f(t, a),
        f(l, o),
        f(l, s),
        f(s, i),
        f(i, c),
        f(i, u),
        f(i, d),
        f(d, v),
        f(s, m),
        f(s, k),
        f(s, w),
        f(s, g),
        b || (($ = [B(k, "click", A), B(g, "click", D)]), (b = !0));
    },
    p(I, T) {
      (e = I),
        T & 8 && n !== (n = e[22].name + "") && M(a, n),
        T & 8 && Te(c, "bg-green-400", e[22].online),
        T & 8 && Te(c, "bg-red-400", !e[22].online),
        T & 8 && _ !== (_ = e[22].online ? "Online" : "Offline") && M(v, _),
        T & 8 && Te(d, "text-green-400", e[22].online),
        T & 8 && Te(d, "text-red-400", !e[22].online);
    },
    d(I) {
      I && C(l), (b = !1), ve($);
    },
  };
}
function br(r) {
  var T;
  let e,
    l,
    t,
    n,
    a = r[19].label + "",
    o,
    s,
    i = r[19].name + "",
    c,
    u,
    d,
    _,
    v,
    m = (((T = r[19].members) == null ? void 0 : T.length) || 0) + "",
    k,
    w,
    g,
    b,
    $,
    A;
  function D() {
    return r[10](r[19], r[21]);
  }
  let I = !r[2][`${r[19].name}-${r[21]}`] && hr(r);
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("div")),
        (n = p("span")),
        (o = L(a)),
        (s = L(" (")),
        (c = L(i)),
        (u = L(")")),
        (d = y()),
        (_ = p("small")),
        (v = L("Membros: ")),
        (k = L(m)),
        (w = y()),
        (g = p("i")),
        (b = y()),
        I && I.c(),
        h(n, "class", "text-white font-semibold text-xl"),
        h(_, "class", "text-gray-400"),
        h(t, "class", "flex flex-col"),
        h(
          g,
          "class",
          "fas fa-chevron-down text-gray-300 transition-transform duration-200"
        ),
        Te(g, "rotate-180", !r[2][`${r[19].name}-${r[21]}`]),
        h(
          l,
          "class",
          "flex items-center justify-between cursor-pointer px-4 py-3 border-b border-border_primary hover:bg-hover_secondary"
        ),
        h(
          e,
          "class",
          "bg-secondary rounded-lg shadow-md border border-border_primary"
        );
    },
    m(O, z) {
      E(O, e, z),
        f(e, l),
        f(l, t),
        f(t, n),
        f(n, o),
        f(n, s),
        f(n, c),
        f(n, u),
        f(t, d),
        f(t, _),
        f(_, v),
        f(_, k),
        f(l, w),
        f(l, g),
        f(e, b),
        I && I.m(e, null),
        $ || ((A = B(l, "click", D)), ($ = !0));
    },
    p(O, z) {
      var j;
      (r = O),
        z & 8 && a !== (a = r[19].label + "") && M(o, a),
        z & 8 && i !== (i = r[19].name + "") && M(c, i),
        z & 8 &&
          m !==
            (m =
              (((j = r[19].members) == null ? void 0 : j.length) || 0) + "") &&
          M(k, m),
        z & 12 && Te(g, "rotate-180", !r[2][`${r[19].name}-${r[21]}`]),
        r[2][`${r[19].name}-${r[21]}`]
          ? I && (I.d(1), (I = null))
          : I
          ? I.p(r, z)
          : ((I = hr(r)), I.c(), I.m(e, null));
    },
    d(O) {
      O && C(e), I && I.d(), ($ = !1), A();
    },
  };
}
function vr(r) {
  let e = `${r[19].name}-${r[21]}`,
    l,
    t = br(r);
  return {
    c() {
      t.c(), (l = Q());
    },
    m(n, a) {
      t.m(n, a), E(n, l, a);
    },
    p(n, a) {
      a & 8 && K(e, (e = `${n[19].name}-${n[21]}`))
        ? (t.d(1), (t = br(n)), t.c(), t.m(l.parentNode, l))
        : t.p(n, a);
    },
    d(n) {
      n && C(l), t.d(n);
    },
  };
}
function gr(r) {
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i = Y(r[3][r[16]]),
    c = [];
  for (let u = 0; u < i.length; u += 1) c[u] = vr(pr(r, i, u));
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("i")),
        (n = y()),
        (a = p("span")),
        (a.textContent = `${r[16] === "jobs" ? "Jobs" : "Gangs"}`),
        (o = y());
      for (let u = 0; u < c.length; u += 1) c[u].c();
      (s = y()),
        h(
          t,
          "class",
          `fas ${
            r[16] === "jobs" ? "fa-briefcase" : "fa-skull-crossbones"
          } text-gray-300`
        ),
        h(a, "class", "font-bold text-white text-xl"),
        h(l, "class", "flex items-center gap-2"),
        h(e, "class", "flex-1 flex flex-col space-y-4 overflow-auto");
    },
    m(u, d) {
      E(u, e, d), f(e, l), f(l, t), f(l, n), f(l, a), f(e, o);
      for (let _ = 0; _ < c.length; _ += 1) c[_] && c[_].m(e, null);
      f(e, s);
    },
    p(u, d) {
      if (d & 460) {
        i = Y(u[3][u[16]]);
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const v = pr(u, i, _);
          c[_] ? c[_].p(v, d) : ((c[_] = vr(v)), c[_].c(), c[_].m(e, s));
        }
        for (; _ < c.length; _ += 1) c[_].d(1);
        c.length = i.length;
      }
    },
    d(u) {
      u && C(e), _e(c, u);
    },
  };
}
function Vi(r) {
  let e,
    l,
    t,
    n,
    a,
    o = r[1] ? "Updating..." : "Update",
    s,
    i,
    c,
    u,
    d,
    _,
    v;
  t = new Ge({
    props: {
      title: "Groups - Jobs & Gangs",
      hasSearch: !0,
      hasLargeMenu: r[4],
      onSearchInput: r[9],
    },
  });
  let m = Y(["jobs", "gangs"]),
    k = [];
  for (let w = 0; w < 2; w += 1) k[w] = gr(dr(r, m, w));
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        G(t.$$.fragment),
        (n = y()),
        (a = p("button")),
        (s = L(o)),
        (i = y()),
        (c = p("div"));
      for (let w = 0; w < 2; w += 1) k[w].c();
      h(
        a,
        "class",
        "self-end bg-accent text-white px-4 py-2 rounded hover:bg-green-500 transition duration-200"
      ),
        (a.disabled = r[1]),
        h(
          c,
          "class",
          "flex flex-col md:flex-row gap-4 h-full overflow-hidden pb-2"
        ),
        h(l, "class", "flex flex-col h-full gap-4"),
        h(e, "class", (u = `h-full ${r[4] ? "w-full" : "w-[33vh]"} px-4`));
    },
    m(w, g) {
      E(w, e, g),
        f(e, l),
        H(t, l, null),
        f(l, n),
        f(l, a),
        f(a, s),
        f(l, i),
        f(l, c);
      for (let b = 0; b < 2; b += 1) k[b] && k[b].m(c, null);
      (d = !0), _ || ((v = B(a, "click", r[5])), (_ = !0));
    },
    p(w, [g]) {
      const b = {};
      if (
        (g & 16 && (b.hasLargeMenu = w[4]),
        g & 1 && (b.onSearchInput = w[9]),
        t.$set(b),
        (!d || g & 2) &&
          o !== (o = w[1] ? "Updating..." : "Update") &&
          M(s, o),
        (!d || g & 2) && (a.disabled = w[1]),
        g & 460)
      ) {
        m = Y(["jobs", "gangs"]);
        let $;
        for ($ = 0; $ < 2; $ += 1) {
          const A = dr(w, m, $);
          k[$] ? k[$].p(A, g) : ((k[$] = gr(A)), k[$].c(), k[$].m(c, null));
        }
        for (; $ < 2; $ += 1) k[$].d(1);
      }
      (!d ||
        (g & 16 &&
          u !== (u = `h-full ${w[4] ? "w-full" : "w-[33vh]"} px-4`))) &&
        h(e, "class", u);
    },
    i(w) {
      d || (S(t.$$.fragment, w), (d = !0));
    },
    o(w) {
      N(t.$$.fragment, w), (d = !1);
    },
    d(w) {
      w && C(e), F(t), _e(k, w), (_ = !1), v();
    },
  };
}
function Hi(r, e, l) {
  let t;
  V(r, Be, (b) => l(4, (t = b)));
  let n = "",
    a = !0,
    o = { jobs: [], gangs: [] },
    s = {},
    i = { jobs: [], gangs: [] };
  it(async () => {
    await c();
  });
  async function c() {
    l(1, (a = !0));
    try {
      const b = await pe("getGroupsData");
      if (!b) throw new Error("Invalid group data.");
      (o.jobs = (b.jobs || []).filter(
        ($) => $.name.toLowerCase() !== "unemployed"
      )),
        (o.gangs = (b.gangs || []).filter(
          ($) => $.name.toLowerCase() !== "none"
        )),
        l(2, (s = {})),
        [...o.jobs, ...o.gangs].forEach(($, A) => {
          l(2, (s[`${$.name}-${A}`] = !1), s);
        }),
        u();
    } catch (b) {
      b.message;
    } finally {
      l(1, (a = !1));
    }
  }
  function u() {
    const b = n.toLowerCase();
    l(
      3,
      (i.jobs = o.jobs
        .map(($) => ({
          ...$,
          members: $.members.filter((A) => A.name.toLowerCase().includes(b)),
        }))
        .filter(
          ($) => $.members.length > 0 || $.name.toLowerCase().includes(b)
        )),
      i
    ),
      l(
        3,
        (i.gangs = o.gangs
          .map(($) => ({
            ...$,
            members: $.members.filter((A) => A.name.toLowerCase().includes(b)),
          }))
          .filter(
            ($) => $.members.length > 0 || $.name.toLowerCase().includes(b)
          )),
        i
      );
  }
  function d(b) {
    l(2, (s[b] = !s[b]), s);
  }
  function _(b, $) {
    const A = $ === "gangs" ? "fire_gang" : "fire_job",
      D =
        $ === "gangs"
          ? { Gang: { value: "none" } }
          : { Job: { value: "unemployed" } };
    pe("clickButton", {
      data: A,
      selectedData: { Player: { value: b.id }, ...D, Grade: { value: 0 } },
    });
  }
  function v(b, $) {
    pe("clickButton", {
      data: $ === "gangs" ? "set_gang" : "set_job",
      selectedData: {
        Player: { value: b.id },
        Job: { value: b.job },
        Grade: { value: 0 },
      },
    });
  }
  const m = (b) => l(0, (n = b.target.value)),
    k = (b, $) => d(`${b.name}-${$}`),
    w = (b, $) => _(b, $),
    g = (b, $) => v(b, $);
  return u(), [n, a, s, i, t, c, d, _, v, m, k, w, g];
}
class Fi extends ne {
  constructor(e) {
    super(), le(this, e, Hi, Vi, K, {});
  }
}
function zi(r) {
  let e, l;
  return (
    (e = new Ri({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Gi(r) {
  let e, l;
  return (
    (e = new yi({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Ui(r) {
  let e, l;
  return (
    (e = new gi({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Ji(r) {
  let e, l;
  return (
    (e = new _i({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Yi(r) {
  let e, l;
  return (
    (e = new si({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function qi(r) {
  let e, l;
  return (
    (e = new Fi({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Wi(r) {
  let e, l;
  return (
    (e = new ei({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function xi(r) {
  let e, l;
  return (
    (e = new ja({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Ki(r) {
  let e, l;
  return (
    (e = new Ea({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Qi(r) {
  let e, l;
  return (
    (e = new ca({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function Xi(r) {
  let e, l, t, n, a, o, s, i, c, u;
  l = new Ao({});
  const d = [Qi, Ki, xi, Wi, qi, Yi, Ji, Ui, Gi, zi],
    _ = [];
    function v(m, k) {
        return m[1] == "Actions"
          ? 0
          : m[1] == "Resources"
          ? 1
          : m[1] == "Chat Staff"
          ? 2
          : m[1] == "Players"
          ? 3
          : m[1] == "Groups"
          ? 4
          : m[1] == "Commands"
          ? 5
          : m[1] == "Items"
          ? 6
          : m[1] == "Vehicles"
          ? 7
          : m[1] == "Credits"
          ? 8
          : m[1] == "Dashboard"
          ? 9
          : -1;
    }    
  return (
    ~(a = v(r)) && (o = _[a] = d[a](r)),
    {
      c() {
        (e = p("div")),
          G(l.$$.fragment),
          (t = y()),
          (n = p("div")),
          o && o.c(),
          h(
            n,
            "class",
            (s = "h-full flex " + (r[0] ? "w-[99vh]" : "w-[33vh]"))
          ),
          h(
            e,
            "class",
            (i =
              "h-[85vh] flex rounded-[0.5vh] bg-primary bg-opacity-95 " +
              (r[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] "))
          );
      },
      m(m, k) {
        E(m, e, k),
          H(l, e, null),
          f(e, t),
          f(e, n),
          ~a && _[a].m(n, null),
          (u = !0);
      },
      p(m, [k]) {
        let w = a;
        (a = v(m)),
          a !== w &&
            (o &&
              (Z(),
              N(_[w], 1, 1, () => {
                _[w] = null;
              }),
              ee()),
            ~a
              ? ((o = _[a]),
                o || ((o = _[a] = d[a](m)), o.c()),
                S(o, 1),
                o.m(n, null))
              : (o = null)),
          (!u ||
            (k & 1 &&
              s !== (s = "h-full flex " + (m[0] ? "w-[99vh]" : "w-[33vh]")))) &&
            h(n, "class", s),
          (!u ||
            (k & 1 &&
              i !==
                (i =
                  "h-[85vh] flex rounded-[0.5vh] bg-primary bg-opacity-95 " +
                  (m[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] ")))) &&
            h(e, "class", i);
      },
      i(m) {
        u ||
          (S(l.$$.fragment, m),
          S(o),
          m &&
            qe(() => {
              u && (c || (c = je(e, ht, { x: 100 }, !0)), c.run(1));
            }),
          (u = !0));
      },
      o(m) {
        N(l.$$.fragment, m),
          N(o),
          m && (c || (c = je(e, ht, { x: 100 }, !1)), c.run(0)),
          (u = !1);
      },
      d(m) {
        m && C(e), F(l), ~a && _[a].d(), m && c && c.end();
      },
    }
  );
}
function Zi(r, e, l) {
  let t, n;
  return V(r, Be, (a) => l(0, (t = a))), V(r, dl, (a) => l(1, (n = a))), [t, n];
}
class es extends ne {
  constructor(e) {
    super(), le(this, e, Zi, Xi, K, {});
  }
}
function ts(r) {
  var We, Ue, Xe, He, Le, st, Re;
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i = ((We = r[0]) == null ? void 0 : We.name) + "",
    c,
    u,
    d,
    _,
    v = ((Ue = r[0]) == null ? void 0 : Ue.model) + "",
    m,
    k,
    w,
    g,
    b = ((Xe = r[0]) == null ? void 0 : Xe.netID) + "",
    $,
    A,
    D,
    I,
    T = ((He = r[0]) == null ? void 0 : He.plate) + "",
    O,
    z,
    j,
    U,
    X = ((Le = r[0]) == null ? void 0 : Le.fuel) + "",
    ie,
    J,
    W,
    re,
    fe = ((st = r[0]) == null ? void 0 : st.engine_health) + "",
    ke,
    te,
    he,
    Ve,
    de = ((Re = r[0]) == null ? void 0 : Re.body_health) + "",
    ce,
    P,
    ue;
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("div")),
        (t.innerHTML =
          '<i class="fas fa-code"></i> <p>Vehicle Information</p>'),
        (n = y()),
        (a = p("div")),
        (o = p("p")),
        (s = L("Model: ")),
        (c = L(i)),
        (u = y()),
        (d = p("p")),
        (_ = L("Hash: ")),
        (m = L(v)),
        (k = y()),
        (w = p("p")),
        (g = L("NetID: ")),
        ($ = L(b)),
        (A = y()),
        (D = p("p")),
        (I = L("Plate: ")),
        (O = L(T)),
        (z = y()),
        (j = p("p")),
        (U = L("Fuel: ")),
        (ie = L(X)),
        (J = y()),
        (W = p("p")),
        (re = L("Engine: ")),
        (ke = L(fe)),
        (te = y()),
        (he = p("p")),
        (Ve = L("Body: ")),
        (ce = L(de)),
        h(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        h(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        h(e, "class", "w-screen h-screen flex items-center");
    },
    m(se, Ce) {
      E(se, e, Ce),
        f(e, l),
        f(l, t),
        f(l, n),
        f(l, a),
        f(a, o),
        f(o, s),
        f(o, c),
        f(a, u),
        f(a, d),
        f(d, _),
        f(d, m),
        f(a, k),
        f(a, w),
        f(w, g),
        f(w, $),
        f(a, A),
        f(a, D),
        f(D, I),
        f(D, O),
        f(a, z),
        f(a, j),
        f(j, U),
        f(j, ie),
        f(a, J),
        f(a, W),
        f(W, re),
        f(W, ke),
        f(a, te),
        f(a, he),
        f(he, Ve),
        f(he, ce),
        (ue = !0);
    },
    p(se, [Ce]) {
      var Fe, Je, Ze, ft, ye, et, xe;
      (!ue || Ce & 1) &&
        i !== (i = ((Fe = se[0]) == null ? void 0 : Fe.name) + "") &&
        M(c, i),
        (!ue || Ce & 1) &&
          v !== (v = ((Je = se[0]) == null ? void 0 : Je.model) + "") &&
          M(m, v),
        (!ue || Ce & 1) &&
          b !== (b = ((Ze = se[0]) == null ? void 0 : Ze.netID) + "") &&
          M($, b),
        (!ue || Ce & 1) &&
          T !== (T = ((ft = se[0]) == null ? void 0 : ft.plate) + "") &&
          M(O, T),
        (!ue || Ce & 1) &&
          X !== (X = ((ye = se[0]) == null ? void 0 : ye.fuel) + "") &&
          M(ie, X),
        (!ue || Ce & 1) &&
          fe !==
            (fe = ((et = se[0]) == null ? void 0 : et.engine_health) + "") &&
          M(ke, fe),
        (!ue || Ce & 1) &&
          de !== (de = ((xe = se[0]) == null ? void 0 : xe.body_health) + "") &&
          M(ce, de);
    },
    i(se) {
      ue ||
        (se &&
          qe(() => {
            ue && (P || (P = je(l, ht, { x: -100 }, !0)), P.run(1));
          }),
        (ue = !0));
    },
    o(se) {
      se && (P || (P = je(l, ht, { x: -100 }, !1)), P.run(0)), (ue = !1);
    },
    d(se) {
      se && C(e), se && P && P.end();
    },
  };
}
function ls(r, e, l) {
  let t;
  return V(r, el, (n) => l(0, (t = n))), [t];
}
class ns extends ne {
  constructor(e) {
    super(), le(this, e, ls, ts, K, {});
  }
}
function rs(r) {
  var U, X, ie, J;
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i = ((U = r[0]) == null ? void 0 : U.x) + "",
    c,
    u,
    d,
    _,
    v = ((X = r[0]) == null ? void 0 : X.y) + "",
    m,
    k,
    w,
    g,
    b = ((ie = r[0]) == null ? void 0 : ie.z) + "",
    $,
    A,
    D,
    I,
    T = ((J = r[0]) == null ? void 0 : J.heading) + "",
    O,
    z,
    j;
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("div")),
        (t.innerHTML = '<i class="fas fa-code"></i> <p>Coords Information</p>'),
        (n = y()),
        (a = p("div")),
        (o = p("p")),
        (s = L("X: ")),
        (c = L(i)),
        (u = y()),
        (d = p("p")),
        (_ = L("Y: ")),
        (m = L(v)),
        (k = y()),
        (w = p("p")),
        (g = L("Z: ")),
        ($ = L(b)),
        (A = y()),
        (D = p("p")),
        (I = L("Heading: ")),
        (O = L(T)),
        h(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        h(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        h(e, "class", "w-screen h-screen flex items-center");
    },
    m(W, re) {
      E(W, e, re),
        f(e, l),
        f(l, t),
        f(l, n),
        f(l, a),
        f(a, o),
        f(o, s),
        f(o, c),
        f(a, u),
        f(a, d),
        f(d, _),
        f(d, m),
        f(a, k),
        f(a, w),
        f(w, g),
        f(w, $),
        f(a, A),
        f(a, D),
        f(D, I),
        f(D, O),
        (j = !0);
    },
    p(W, [re]) {
      var fe, ke, te, he;
      (!j || re & 1) &&
        i !== (i = ((fe = W[0]) == null ? void 0 : fe.x) + "") &&
        M(c, i),
        (!j || re & 1) &&
          v !== (v = ((ke = W[0]) == null ? void 0 : ke.y) + "") &&
          M(m, v),
        (!j || re & 1) &&
          b !== (b = ((te = W[0]) == null ? void 0 : te.z) + "") &&
          M($, b),
        (!j || re & 1) &&
          T !== (T = ((he = W[0]) == null ? void 0 : he.heading) + "") &&
          M(O, T);
    },
    i(W) {
      j ||
        (W &&
          qe(() => {
            j && (z || (z = je(l, ht, { x: -100 }, !0)), z.run(1));
          }),
        (j = !0));
    },
    o(W) {
      W && (z || (z = je(l, ht, { x: -100 }, !1)), z.run(0)), (j = !1);
    },
    d(W) {
      W && C(e), W && z && z.end();
    },
  };
}
function os(r, e, l) {
  let t;
  return V(r, tl, (n) => l(0, (t = n))), [t];
}
class as extends ne {
  constructor(e) {
    super(), le(this, e, os, rs, K, {});
  }
}
function is(r) {
  var z, j;
  let e,
    l,
    t,
    n,
    a,
    o,
    s,
    i = ((z = r[0]) == null ? void 0 : z.name) + "",
    c,
    u,
    d,
    _,
    v = ((j = r[0]) == null ? void 0 : j.hash) + "",
    m,
    k,
    w,
    g,
    b,
    $,
    A,
    D,
    I,
    T,
    O;
  return {
    c() {
      (e = p("div")),
        (l = p("div")),
        (t = p("div")),
        (t.innerHTML = '<i class="fas fa-code"></i> <p>Entity Information</p>'),
        (n = y()),
        (a = p("div")),
        (o = p("p")),
        (s = L("Model: ")),
        (c = L(i)),
        (u = y()),
        (d = p("p")),
        (_ = L("Hash: ")),
        (m = L(v)),
        (k = y()),
        (w = p("br")),
        (g = y()),
        (b = p("p")),
        (b.textContent = "C - Copy Information"),
        ($ = y()),
        (A = p("p")),
        (A.textContent = "E - Delete Entity"),
        (D = y()),
        (I = p("p")),
        (I.textContent = "ESC - Close"),
        h(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        h(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        h(e, "class", "w-screen h-screen flex items-center");
    },
    m(U, X) {
      E(U, e, X),
        f(e, l),
        f(l, t),
        f(l, n),
        f(l, a),
        f(a, o),
        f(o, s),
        f(o, c),
        f(a, u),
        f(a, d),
        f(d, _),
        f(d, m),
        f(a, k),
        f(a, w),
        f(a, g),
        f(a, b),
        f(a, $),
        f(a, A),
        f(a, D),
        f(a, I),
        (O = !0);
    },
    p(U, [X]) {
      var ie, J;
      (!O || X & 1) &&
        i !== (i = ((ie = U[0]) == null ? void 0 : ie.name) + "") &&
        M(c, i),
        (!O || X & 1) &&
          v !== (v = ((J = U[0]) == null ? void 0 : J.hash) + "") &&
          M(m, v);
    },
    i(U) {
      O ||
        (U &&
          qe(() => {
            O && (T || (T = je(l, ht, { x: -100 }, !0)), T.run(1));
          }),
        (O = !0));
    },
    o(U) {
      U && (T || (T = je(l, ht, { x: -100 }, !1)), T.run(0)), (O = !1);
    },
    d(U) {
      U && C(e), U && T && T.end();
    },
  };
}
function ss(r, e, l) {
  let t;
  return V(r, ll, (n) => l(0, (t = n))), [t];
}
class fs extends ne {
  constructor(e) {
    super(), le(this, e, ss, is, K, {});
  }
}
function cs(r) {
  let e, l;
  return (
    (e = new es({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function wr(r) {
  let e, l;
  return (
    (e = new ns({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function kr(r) {
  let e, l;
  return (
    (e = new as({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function yr(r) {
  let e, l;
  return (
    (e = new fs({})),
    {
      c() {
        G(e.$$.fragment);
      },
      m(t, n) {
        H(e, t, n), (l = !0);
      },
      i(t) {
        l || (S(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        N(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        F(e, t);
      },
    }
  );
}
function $r(r) {
  let e, l, t, n;
  return (
    (e = new wo({})),
    {
      c() {
        G(e.$$.fragment),
          (l = y()),
          (t = p("div")),
          h(t, "class", "absolute w-screen h-screen "),
          Mt(t, "background-image", 'url("https://i.imgur.com/3pzRj9n.png")'),
          Mt(t, "background-size", "cover"),
          Mt(t, "background-position", "center"),
          Mt(t, "background-repeat", "no-repeat");
      },
      m(a, o) {
        H(e, a, o), E(a, l, o), E(a, t, o), (n = !0);
      },
      i(a) {
        n || (S(e.$$.fragment, a), (n = !0));
      },
      o(a) {
        N(e.$$.fragment, a), (n = !1);
      },
      d(a) {
        a && (C(l), C(t)), F(e, a);
      },
    }
  );
}
function us(r) {
  var m, k, w;
  let e, l, t, n, a, o, s, i, c;
  e = new mo({ props: { $$slots: { default: [cs] }, $$scope: { ctx: r } } });
  let u = ((m = r[0]) == null ? void 0 : m.show) && wr(),
    d = ((k = r[1]) == null ? void 0 : k.show) && kr(),
    _ = ((w = r[2]) == null ? void 0 : w.show) && yr();
  o = new $o({});
  let v = r[3] && $r();
  return {
    c() {
      G(e.$$.fragment),
        (l = y()),
        u && u.c(),
        (t = y()),
        d && d.c(),
        (n = y()),
        _ && _.c(),
        (a = y()),
        G(o.$$.fragment),
        (s = y()),
        v && v.c(),
        (i = Q());
    },
    m(g, b) {
      H(e, g, b),
        E(g, l, b),
        u && u.m(g, b),
        E(g, t, b),
        d && d.m(g, b),
        E(g, n, b),
        _ && _.m(g, b),
        E(g, a, b),
        H(o, g, b),
        E(g, s, b),
        v && v.m(g, b),
        E(g, i, b),
        (c = !0);
    },
    p(g, [b]) {
      var A, D, I;
      const $ = {};
      b & 32 && ($.$$scope = { dirty: b, ctx: g }),
        e.$set($),
        (A = g[0]) != null && A.show
          ? u
            ? b & 1 && S(u, 1)
            : ((u = wr()), u.c(), S(u, 1), u.m(t.parentNode, t))
          : u &&
            (Z(),
            N(u, 1, 1, () => {
              u = null;
            }),
            ee()),
        (D = g[1]) != null && D.show
          ? d
            ? b & 2 && S(d, 1)
            : ((d = kr()), d.c(), S(d, 1), d.m(n.parentNode, n))
          : d &&
            (Z(),
            N(d, 1, 1, () => {
              d = null;
            }),
            ee()),
        (I = g[2]) != null && I.show
          ? _
            ? b & 4 && S(_, 1)
            : ((_ = yr()), _.c(), S(_, 1), _.m(a.parentNode, a))
          : _ &&
            (Z(),
            N(_, 1, 1, () => {
              _ = null;
            }),
            ee()),
        g[3]
          ? v
            ? b & 8 && S(v, 1)
            : ((v = $r()), v.c(), S(v, 1), v.m(i.parentNode, i))
          : v &&
            (Z(),
            N(v, 1, 1, () => {
              v = null;
            }),
            ee());
    },
    i(g) {
      c ||
        (S(e.$$.fragment, g),
        S(u),
        S(d),
        S(_),
        S(o.$$.fragment, g),
        S(v),
        (c = !0));
    },
    o(g) {
      N(e.$$.fragment, g),
        N(u),
        N(d),
        N(_),
        N(o.$$.fragment, g),
        N(v),
        (c = !1);
    },
    d(g) {
      g && (C(l), C(t), C(n), C(a), C(s), C(i)),
        F(e, g),
        u && u.d(g),
        d && d.d(g),
        _ && _.d(g),
        F(o, g),
        v && v.d(g);
    },
  };
}
function ds(r, e, l) {
  let t, n, a, o, s;
  return (
    V(r, ul, (i) => l(4, (t = i))),
    V(r, el, (i) => l(0, (n = i))),
    V(r, tl, (i) => l(1, (a = i))),
    V(r, ll, (i) => l(2, (o = i))),
    V(r, Zt, (i) => l(3, (s = i))),
    be(ul, (t = "ps-adminmenu"), t),
    [n, a, o, s]
  );
}
class ps extends ne {
  constructor(e) {
    super(), le(this, e, ds, us, K, {});
  }
}
new ps({ target: document.getElementById("app") });
