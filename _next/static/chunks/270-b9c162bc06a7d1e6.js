"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [270],
    {
        5314: function (t, e, i) {
            i.d(e, {
                I: function () {
                    return o;
                },
            });
            var s = i(6266);
            function o(t, e, i) {
                var o;
                if ("string" == typeof t) {
                    let n = document;
                    e && ((0, s.k)(!!e.current, "Scope provided, but no element detected."), (n = e.current)), i ? ((null !== (o = i[t]) && void 0 !== o) || (i[t] = n.querySelectorAll(t)), (t = i[t])) : (t = n.querySelectorAll(t));
                } else t instanceof Element && (t = [t]);
                return Array.from(t || []);
            }
        },
        578: function (t, e, i) {
            i.d(e, {
                Y: function () {
                    return a;
                },
            });
            var s = i(7653),
                o = i(5314);
            let n = { some: 0, all: 1 };
            function a(t, { root: e, margin: i, amount: a, once: r = !1 } = {}) {
                let [l, c] = (0, s.useState)(!1);
                return (
                    (0, s.useEffect)(() => {
                        if (!t.current || (r && l)) return;
                        let s = { root: (e && e.current) || void 0, margin: i, amount: a };
                        return (function (t, e, { root: i, margin: s, amount: a = "some" } = {}) {
                            let r = (0, o.I)(t),
                                l = new WeakMap(),
                                c = new IntersectionObserver(
                                    (t) => {
                                        t.forEach((t) => {
                                            let i = l.get(t.target);
                                            if (!!i !== t.isIntersecting) {
                                                if (t.isIntersecting) {
                                                    let i = e(t);
                                                    "function" == typeof i ? l.set(t.target, i) : c.unobserve(t.target);
                                                } else i && (i(t), l.delete(t.target));
                                            }
                                        });
                                    },
                                    { root: i, rootMargin: s, threshold: "number" == typeof a ? a : n[a] }
                                );
                            return r.forEach((t) => c.observe(t)), () => c.disconnect();
                        })(t.current, () => (c(!0), r ? void 0 : () => c(!1)), s);
                    }, [e, t, i, r, a]),
                    l
                );
            }
        },
        2591: function (t, e, i) {
            let s, o;
            i.d(e, {
                v: function () {
                    return L;
                },
            });
            var n = i(9086),
                a = i(1311),
                r = i(7653),
                l = i(6266),
                c = i(5314);
            let h = new WeakMap();
            function d({ target: t, contentRect: e, borderBoxSize: i }) {
                var s;
                null === (s = h.get(t)) ||
                    void 0 === s ||
                    s.forEach((s) => {
                        s({
                            target: t,
                            contentSize: e,
                            get size() {
                                return (function (t, e) {
                                    if (e) {
                                        let { inlineSize: t, blockSize: i } = e[0];
                                        return { width: t, height: i };
                                    }
                                    return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : { width: t.offsetWidth, height: t.offsetHeight };
                                })(t, i);
                            },
                        });
                    });
            }
            function u(t) {
                t.forEach(d);
            }
            let p = new Set();
            var f = i(1357),
                v = i(5311);
            let y = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }),
                m = () => ({ time: 0, x: y(), y: y() }),
                g = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
            function b(t, e, i, s) {
                let o = i[e],
                    { length: n, position: a } = g[e],
                    r = o.current,
                    l = i.time;
                (o.current = t["scroll" + a]), (o.scrollLength = t["scroll" + n] - t["client" + n]), (o.offset.length = 0), (o.offset[0] = 0), (o.offset[1] = o.scrollLength), (o.progress = (0, f.Y)(0, o.scrollLength, o.current));
                let c = s - l;
                o.velocity = c > 50 ? 0 : (0, v.R)(o.current - r, c);
            }
            let w = [
                    [0, 0],
                    [1, 1],
                ],
                x = { start: 0, center: 0.5, end: 1 };
            function _(t, e, i = 0) {
                let s = 0;
                if ((void 0 !== x[t] && (t = x[t]), "string" == typeof t)) {
                    let e = parseFloat(t);
                    t.endsWith("px")
                        ? (s = e)
                        : t.endsWith("%")
                        ? (t = e / 100)
                        : t.endsWith("vw")
                        ? (s = (e / 100) * document.documentElement.clientWidth)
                        : t.endsWith("vh")
                        ? (s = (e / 100) * document.documentElement.clientHeight)
                        : (t = e);
                }
                return "number" == typeof t && (s = e * t), i + s;
            }
            let z = [0, 0];
            var k = i(6292),
                C = i(1999);
            let P = { x: 0, y: 0 };
            var O = i(5126);
            let M = new WeakMap(),
                S = new WeakMap(),
                D = new WeakMap(),
                E = (t) => (t === document.documentElement ? window : t);
            var R = i(8918);
            function T(t, e) {
                (0, l.K)(
                    !!(!e || e.current),
                    `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
                );
            }
            let I = () => ({ scrollX: (0, n.BX)(0), scrollY: (0, n.BX)(0), scrollXProgress: (0, n.BX)(0), scrollYProgress: (0, n.BX)(0) });
            function L({ container: t, target: e, layoutEffect: i = !0, ...n } = {}) {
                let l = (0, a.h)(I);
                return (
                    (i ? R.L : r.useEffect)(
                        () => (
                            T("target", e),
                            T("container", t),
                            (function (t, { container: e = document.documentElement, ...i } = {}) {
                                let n = D.get(e);
                                n || ((n = new Set()), D.set(e, n));
                                let a = (function (t, e, i, s = {}) {
                                    return {
                                        measure: () =>
                                            (function (t, e = t, i) {
                                                if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), e !== t)) {
                                                    let s = e;
                                                    for (; s && s !== t; ) (i.x.targetOffset += s.offsetLeft), (i.y.targetOffset += s.offsetTop), (s = s.offsetParent);
                                                }
                                                (i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                                                    (i.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
                                                    (i.x.containerLength = t.clientWidth),
                                                    (i.y.containerLength = t.clientHeight);
                                            })(t, s.target, i),
                                        update: (e) => {
                                            b(t, "x", i, e),
                                                b(t, "y", i, e),
                                                (i.time = e),
                                                (s.offset || s.target) &&
                                                    (function (t, e, i) {
                                                        let { offset: s = w } = i,
                                                            { target: o = t, axis: n = "y" } = i,
                                                            a = "y" === n ? "height" : "width",
                                                            r =
                                                                o !== t
                                                                    ? (function (t, e) {
                                                                          let i = { x: 0, y: 0 },
                                                                              s = t;
                                                                          for (; s && s !== e; )
                                                                              if (s instanceof HTMLElement) (i.x += s.offsetLeft), (i.y += s.offsetTop), (s = s.offsetParent);
                                                                              else if ("svg" === s.tagName) {
                                                                                  let t = s.getBoundingClientRect(),
                                                                                      e = (s = s.parentElement).getBoundingClientRect();
                                                                                  (i.x += t.left - e.left), (i.y += t.top - e.top);
                                                                              } else if (s instanceof SVGGraphicsElement) {
                                                                                  let { x: t, y: e } = s.getBBox();
                                                                                  (i.x += t), (i.y += e);
                                                                                  let o = null,
                                                                                      n = s.parentNode;
                                                                                  for (; !o; ) "svg" === n.tagName && (o = n), (n = s.parentNode);
                                                                                  s = o;
                                                                              } else break;
                                                                          return i;
                                                                      })(o, t)
                                                                    : P,
                                                            l = o === t ? { width: t.scrollWidth, height: t.scrollHeight } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : { width: o.clientWidth, height: o.clientHeight },
                                                            c = { width: t.clientWidth, height: t.clientHeight };
                                                        e[n].offset.length = 0;
                                                        let h = !e[n].interpolate,
                                                            d = s.length;
                                                        for (let t = 0; t < d; t++) {
                                                            let i = (function (t, e, i, s) {
                                                                let o = Array.isArray(t) ? t : z,
                                                                    n = 0;
                                                                return "number" == typeof t ? (o = [t, t]) : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, x[t] ? t : "0"]), _(o[0], i, s) - _(o[1], e);
                                                            })(s[t], c[a], l[a], r[n]);
                                                            h || i === e[n].interpolatorOffsets[t] || (h = !0), (e[n].offset[t] = i);
                                                        }
                                                        h && ((e[n].interpolate = (0, k.s)(e[n].offset, (0, C.Y)(s))), (e[n].interpolatorOffsets = [...e[n].offset])), (e[n].progress = e[n].interpolate(e[n].current));
                                                    })(t, i, s);
                                        },
                                        notify: () => e(i),
                                    };
                                })(e, t, m(), i);
                                if ((n.add(a), !M.has(e))) {
                                    let t = () => {
                                            for (let t of n) t.measure();
                                        },
                                        i = () => {
                                            for (let t of n) t.update(O.frameData.timestamp);
                                        },
                                        a = () => {
                                            for (let t of n) t.notify();
                                        },
                                        r = () => {
                                            O.Wi.read(t, !1, !0), O.Wi.read(i, !1, !0), O.Wi.update(a, !1, !0);
                                        };
                                    M.set(e, r);
                                    let l = E(e);
                                    window.addEventListener("resize", r, { passive: !0 }),
                                        e !== document.documentElement &&
                                            S.set(
                                                e,
                                                "function" == typeof e
                                                    ? (p.add(e),
                                                      o ||
                                                          ((o = () => {
                                                              let t = { width: window.innerWidth, height: window.innerHeight },
                                                                  e = { target: window, size: t, contentSize: t };
                                                              p.forEach((t) => t(e));
                                                          }),
                                                          window.addEventListener("resize", o)),
                                                      () => {
                                                          p.delete(e), !p.size && o && (o = void 0);
                                                      })
                                                    : (function (t, e) {
                                                          s || "undefined" == typeof ResizeObserver || (s = new ResizeObserver(u));
                                                          let i = (0, c.I)(t);
                                                          return (
                                                              i.forEach((t) => {
                                                                  let i = h.get(t);
                                                                  i || ((i = new Set()), h.set(t, i)), i.add(e), null == s || s.observe(t);
                                                              }),
                                                              () => {
                                                                  i.forEach((t) => {
                                                                      let i = h.get(t);
                                                                      null == i || i.delete(e), (null == i ? void 0 : i.size) || null == s || s.unobserve(t);
                                                                  });
                                                              }
                                                          );
                                                      })(e, r)
                                            ),
                                        l.addEventListener("scroll", r, { passive: !0 });
                                }
                                let r = M.get(e);
                                return (
                                    O.Wi.read(r, !1, !0),
                                    () => {
                                        var t;
                                        (0, O.Pn)(r);
                                        let i = D.get(e);
                                        if (!i || (i.delete(a), i.size)) return;
                                        let s = M.get(e);
                                        M.delete(e), s && (E(e).removeEventListener("scroll", s), null === (t = S.get(e)) || void 0 === t || t(), window.removeEventListener("resize", s));
                                    }
                                );
                            })(
                                ({ x: t, y: e }) => {
                                    l.scrollX.set(t.current), l.scrollXProgress.set(t.progress), l.scrollY.set(e.current), l.scrollYProgress.set(e.progress);
                                },
                                { ...n, container: (null == t ? void 0 : t.current) || void 0, target: (null == e ? void 0 : e.current) || void 0 }
                            )
                        ),
                        [t, e, JSON.stringify(n.offset)]
                    ),
                    l
                );
            }
        },
        9882: function (t, e, i) {
            i.d(e, {
                H: function () {
                    return p;
                },
            });
            var s = i(6292);
            let o = (t) => t && "object" == typeof t && t.mix,
                n = (t) => (o(t) ? t.mix : void 0);
            var a = i(7653),
                r = i(9086),
                l = i(7508),
                c = i(1311),
                h = i(8918),
                d = i(5126);
            function u(t, e) {
                let i = (function (t) {
                        let e = (0, c.h)(() => (0, r.BX)(t)),
                            { isStatic: i } = (0, a.useContext)(l._);
                        if (i) {
                            let [, i] = (0, a.useState)(t);
                            (0, a.useEffect)(() => e.on("change", i), []);
                        }
                        return e;
                    })(e()),
                    s = () => i.set(e());
                return (
                    s(),
                    (0, h.L)(() => {
                        let e = () => d.Wi.update(s, !1, !0),
                            i = t.map((t) => t.on("change", e));
                        return () => {
                            i.forEach((t) => t()), (0, d.Pn)(s);
                        };
                    }),
                    i
                );
            }
            function p(t, e, i, o) {
                if ("function" == typeof t)
                    return (function (t) {
                        (r.S1.current = []), t();
                        let e = u(r.S1.current, t);
                        return (r.S1.current = void 0), e;
                    })(t);
                let a =
                    "function" == typeof e
                        ? e
                        : (function (...t) {
                              let e = !Array.isArray(t[0]),
                                  i = e ? 0 : -1,
                                  o = t[0 + i],
                                  a = t[1 + i],
                                  r = t[2 + i],
                                  l = t[3 + i],
                                  c = (0, s.s)(a, r, { mixer: n(r[0]), ...l });
                              return e ? c(o) : c;
                          })(e, i, o);
                return Array.isArray(t) ? f(t, a) : f([t], ([t]) => a(t));
            }
            function f(t, e) {
                let i = (0, c.h)(() => []);
                return u(t, () => {
                    i.length = 0;
                    let s = t.length;
                    for (let e = 0; e < s; e++) i[e] = t[e].get();
                    return e(i);
                });
            }
        },
        9280: function (t, e, i) {
            var s, o, n, a, r, l, c, h, d, u, p, f, v, y, m, g, b, w, x, _, z, k, C, P, O, M, S, D, E, R, T, I, L, B, A, q, F, W, G, H, $, V, Z, U, Y, X, j, N, K, J;
            i.d(e, {
                qHU: function () {
                    return h;
                },
                RC2: function () {
                    return eZ;
                },
                NV1: function () {
                    return n;
                },
                Cdc: function () {
                    return iC;
                },
                Dpx: function () {
                    return m;
                },
                Hyf: function () {
                    return a;
                },
                gqJ: function () {
                    return f;
                },
                nxi: function () {
                    return O;
                },
                L8z: function () {
                    return iZ;
                },
                OzF: function () {
                    return ek;
                },
                Voc: function () {
                    return g;
                },
                DYc: function () {
                    return r;
                },
                Igb: function () {
                    return x;
                },
                $Sh: function () {
                    return iU;
                },
                lZr: function () {
                    return l;
                },
                AeJ: function () {
                    return iP;
                },
                RnL: function () {
                    return C;
                },
                SWe: function () {
                    return eX;
                },
                OWs: function () {
                    return tv;
                },
                bx6: function () {
                    return tx;
                },
                dUB: function () {
                    return tZ;
                },
                paW: function () {
                    return tL;
                },
                Gz$: function () {
                    return tB;
                },
                M_G: function () {
                    return tX;
                },
                kRC: function () {
                    return t0;
                },
                gy4: function () {
                    return tQ;
                },
                uZ5: function () {
                    return tk;
                },
                ocL: function () {
                    return ec;
                },
                ZBL: function () {
                    return tj;
                },
                Idc: function () {
                    return tT;
                },
                iCg: function () {
                    return tJ;
                },
                XDe: function () {
                    return tK;
                },
                pSR: function () {
                    return eg;
                },
                gK4: function () {
                    return ts;
                },
                KH1: function () {
                    return t2;
                },
                Spd: function () {
                    return tR;
                },
                oW6: function () {
                    return tE;
                },
                _Xd: function () {
                    return t_;
                },
                bS$: function () {
                    return ep;
                },
                BEi: function () {
                    return eh;
                },
                Dt5: function () {
                    return ed;
                },
                jl5: function () {
                    return tF;
                },
                sZz: function () {
                    return tz;
                },
                KIV: function () {
                    return tS;
                },
                Gu7: function () {
                    return tO;
                },
                apW: function () {
                    return t4;
                },
                vzQ: function () {
                    return el;
                },
                izR: function () {
                    return er;
                },
                vqy: function () {
                    return tn;
                },
                V0: function () {
                    return t3;
                },
                kJL: function () {
                    return tu;
                },
                wm$: function () {
                    return tN;
                },
                mf2: function () {
                    return th;
                },
                dBL: function () {
                    return t$;
                },
                hj$: function () {
                    return tc;
                },
                Kn2: function () {
                    return td;
                },
                Ac: function () {
                    return tY;
                },
                KrJ: function () {
                    return tG;
                },
                HD0: function () {
                    return tl;
                },
                c86: function () {
                    return tU;
                },
                wA_: function () {
                    return t5;
                },
                mxw: function () {
                    return tV;
                },
                hTV: function () {
                    return iy;
                },
                X5o: function () {
                    return ta;
                },
                aMP: function () {
                    return tt;
                },
                WtO: function () {
                    return te;
                },
                tZy: function () {
                    return to;
                },
                vdf: function () {
                    return tP;
                },
                lNs: function () {
                    return es;
                },
                tXk: function () {
                    return ei;
                },
                dpV: function () {
                    return t1;
                },
                lCU: function () {
                    return eo;
                },
                Cst: function () {
                    return tD;
                },
                S6T: function () {
                    return iY;
                },
                CrJ: function () {
                    return t8;
                },
                PBz: function () {
                    return ey;
                },
            });
            let Q = "generated",
                tt = "pointerleave",
                te = "pointermove",
                ti = "touchend",
                ts = "tsParticles - Error",
                to = 100,
                tn = 0.5,
                ta = 1e3;
            function tr(t) {
                return "boolean" == typeof t;
            }
            function tl(t) {
                return "string" == typeof t;
            }
            function tc(t) {
                return "number" == typeof t;
            }
            function th(t) {
                return "function" == typeof t;
            }
            function td(t) {
                return "object" == typeof t && null !== t;
            }
            function tu(t) {
                return Array.isArray(t);
            }
            ((M = s || (s = {})).bottom = "bottom"),
                (M.bottomLeft = "bottom-left"),
                (M.bottomRight = "bottom-right"),
                (M.left = "left"),
                (M.none = "none"),
                (M.right = "right"),
                (M.top = "top"),
                (M.topLeft = "top-left"),
                (M.topRight = "top-right"),
                (M.outside = "outside"),
                (M.inside = "inside");
            let tp = { x: 0, y: 0, z: 0 };
            class tf {
                constructor(t, e, i) {
                    if (
                        ((this._updateFromAngle = (t, e) => {
                            (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
                        }),
                        !tc(t) && t)
                    )
                        (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : tp.z);
                    else if (void 0 !== t && void 0 !== e) (this.x = t), (this.y = e), (this.z = i ?? tp.z);
                    else throw Error(`${ts} Vector3d not initialized correctly`);
                }
                static get origin() {
                    return tf.create(tp.x, tp.y, tp.z);
                }
                get angle() {
                    return Math.atan2(this.y, this.x);
                }
                set angle(t) {
                    this._updateFromAngle(t, this.length);
                }
                get length() {
                    return Math.sqrt(this.getLengthSq());
                }
                set length(t) {
                    this._updateFromAngle(this.angle, t);
                }
                static clone(t) {
                    return tf.create(t.x, t.y, t.z);
                }
                static create(t, e, i) {
                    return new tf(t, e, i);
                }
                add(t) {
                    return tf.create(this.x + t.x, this.y + t.y, this.z + t.z);
                }
                addTo(t) {
                    (this.x += t.x), (this.y += t.y), (this.z += t.z);
                }
                copy() {
                    return tf.clone(this);
                }
                distanceTo(t) {
                    return this.sub(t).length;
                }
                distanceToSq(t) {
                    return this.sub(t).getLengthSq();
                }
                div(t) {
                    return tf.create(this.x / t, this.y / t, this.z / t);
                }
                divTo(t) {
                    (this.x /= t), (this.y /= t), (this.z /= t);
                }
                getLengthSq() {
                    return this.x ** 2 + this.y ** 2;
                }
                mult(t) {
                    return tf.create(this.x * t, this.y * t, this.z * t);
                }
                multTo(t) {
                    (this.x *= t), (this.y *= t), (this.z *= t);
                }
                normalize() {
                    let t = this.length;
                    0 != t && this.multTo(1 / t);
                }
                rotate(t) {
                    return tf.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), tp.z);
                }
                setTo(t) {
                    (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : tp.z);
                }
                sub(t) {
                    return tf.create(this.x - t.x, this.y - t.y, this.z - t.z);
                }
                subFrom(t) {
                    (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
                }
            }
            class tv extends tf {
                constructor(t, e) {
                    super(t, e, tp.z);
                }
                static get origin() {
                    return tv.create(tp.x, tp.y);
                }
                static clone(t) {
                    return tv.create(t.x, t.y);
                }
                static create(t, e) {
                    return new tv(t, e);
                }
            }
            let ty = Math.random,
                tm = (t) => requestAnimationFrame(t),
                tg = (t) => cancelAnimationFrame(t),
                tb = new Map(),
                tw = 2 * Math.PI;
            function tx(t, e) {
                tb.get(t) || tb.set(t, e);
            }
            function t_(t) {
                return tb.get(t) ?? ((t) => t);
            }
            function tz() {
                return tk(ty(), 0, 1 - Number.EPSILON);
            }
            function tk(t, e, i) {
                return Math.min(Math.max(t, e), i);
            }
            function tC(t, e, i, s) {
                return Math.floor((t * i + e * s) / (i + s));
            }
            function tP(t) {
                let e = tS(t),
                    i = tM(t);
                return e === i && (i = 0), tz() * (e - i) + i;
            }
            function tO(t) {
                return tc(t) ? t : tP(t);
            }
            function tM(t) {
                return tc(t) ? t : t.min;
            }
            function tS(t) {
                return tc(t) ? t : t.max;
            }
            function tD(t, e) {
                if (t === e || (void 0 === e && tc(t))) return t;
                let i = tM(t),
                    s = tS(t);
                return void 0 !== e ? { min: Math.min(i, e), max: Math.max(s, e) } : tD(i, s);
            }
            function tE(t, e) {
                let i = t.x - e.x,
                    s = t.y - e.y;
                return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
            }
            function tR(t, e) {
                return tE(t, e).distance;
            }
            function tT(t) {
                return (t * Math.PI) / 180;
            }
            function tI(t, e, i, s) {
                return tv.create((t.x * (i - s)) / (i + s) + (2 * e.x * s) / (i + s), t.y);
            }
            function tL(t) {
                return { x: ((t.position?.x ?? tz() * to) * t.size.width) / to, y: ((t.position?.y ?? tz() * to) * t.size.height) / to };
            }
            function tB(t) {
                let e = { x: t.position?.x !== void 0 ? tO(t.position.x) : void 0, y: t.position?.y !== void 0 ? tO(t.position.y) : void 0 };
                return tL({ size: t.size, position: e });
            }
            function tA(t) {
                return t ? (t.endsWith("%") ? parseFloat(t) / to : parseFloat(t)) : 1;
            }
            ((S = o || (o = {})).auto = "auto"),
                (S.increase = "increase"),
                (S.decrease = "decrease"),
                (S.random = "random"),
                ((D = n || (n = {})).increasing = "increasing"),
                (D.decreasing = "decreasing"),
                ((E = a || (a = {})).none = "none"),
                (E.max = "max"),
                (E.min = "min"),
                ((R = r || (r = {})).bottom = "bottom"),
                (R.left = "left"),
                (R.right = "right"),
                (R.top = "top"),
                ((T = l || (l = {})).precise = "precise"),
                (T.percent = "percent"),
                ((I = c || (c = {})).max = "max"),
                (I.min = "min"),
                (I.random = "random");
            let tq = { debug: console.debug, error: console.error, info: console.info, log: console.log, verbose: console.log, warning: console.warn };
            function tF() {
                return tq;
            }
            function tW(t) {
                let e = { bounced: !1 },
                    { pSide: i, pOtherSide: s, rectSide: o, rectOtherSide: n, velocity: a, factor: r } = t;
                return (
                    s.min < n.min ||
                        s.min > n.max ||
                        s.max < n.min ||
                        s.max > n.max ||
                        (((i.max >= o.min && i.max <= (o.max + o.min) * 0.5 && a > 0) || (i.min <= o.max && i.min > (o.max + o.min) * 0.5 && a < 0)) && ((e.velocity = -(a * r)), (e.bounced = !0))),
                    e
                );
            }
            function tG() {
                return "undefined" == typeof window || !window || void 0 === window.document || !window.document;
            }
            function tH(t) {
                if (!tG() && "undefined" != typeof matchMedia) return matchMedia(t);
            }
            function t$(t, e) {
                return t === e || (tu(e) && e.indexOf(t) > -1);
            }
            async function tV(t, e) {
                try {
                    await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
                } catch {}
            }
            function tZ(t) {
                return Math.floor(tz() * t.length);
            }
            function tU(t, e, i = !0) {
                return t[void 0 !== e && i ? e % t.length : tZ(t)];
            }
            function tY(t, e, i, s, o) {
                var n;
                let a;
                return (
                    (n = tX(t, s ?? 0)),
                    (a = !0),
                    (o && o !== r.bottom) || (a = n.top < e.height + i.x),
                    a && (!o || o === r.left) && (a = n.right > i.x),
                    a && (!o || o === r.right) && (a = n.left < e.width + i.y),
                    a && (!o || o === r.top) && (a = n.bottom > i.y),
                    a
                );
            }
            function tX(t, e) {
                return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
            }
            function tj(t, ...e) {
                for (let i of e) {
                    if (null == i) continue;
                    if (!td(i)) {
                        t = i;
                        continue;
                    }
                    let e = Array.isArray(i);
                    for (let s in (e && (td(t) || !t || !Array.isArray(t)) ? (t = []) : !e && (td(t) || !t || Array.isArray(t)) && (t = {}), i)) {
                        if ("__proto__" === s) continue;
                        let e = i[s],
                            o = t;
                        o[s] = td(e) && Array.isArray(e) ? e.map((t) => tj(o[s], t)) : tj(o[s], e);
                    }
                }
                return t;
            }
            function tN(t, e) {
                return !!t6(e, (e) => e.enable && t$(t, e.mode));
            }
            function tK(t, e, i) {
                t2(e, (e) => {
                    let s = e.mode;
                    e.enable &&
                        t$(t, s) &&
                        t2(e.selectors, (t) => {
                            i(t, e);
                        });
                });
            }
            function tJ(t, e) {
                if (e && t)
                    return t6(t, (t) =>
                        (function (t, e) {
                            let i = t2(e, (e) => t.matches(e));
                            return tu(i) ? i.some((t) => t) : i;
                        })(e, t.selectors)
                    );
            }
            function tQ(t) {
                return { position: t.getPosition(), radius: t.getRadius(), mass: t.getMass(), velocity: t.velocity, factor: tv.create(tO(t.options.bounce.horizontal.value), tO(t.options.bounce.vertical.value)) };
            }
            function t0(t, e) {
                let { x: i, y: s } = t.velocity.sub(e.velocity),
                    [o, n] = [t.position, e.position],
                    { dx: a, dy: r } = tE(n, o);
                if (i * a + s * r < 0) return;
                let l = -Math.atan2(r, a),
                    c = t.mass,
                    h = e.mass,
                    d = t.velocity.rotate(l),
                    u = e.velocity.rotate(l),
                    p = tI(d, u, c, h),
                    f = tI(u, d, c, h),
                    v = p.rotate(-l),
                    y = f.rotate(-l);
                (t.velocity.x = v.x * t.factor.x), (t.velocity.y = v.y * t.factor.y), (e.velocity.x = y.x * e.factor.x), (e.velocity.y = y.y * e.factor.y);
            }
            function t1(t, e) {
                let i = tX(t.getPosition(), t.getRadius()),
                    s = t.options.bounce,
                    o = tW({
                        pSide: { min: i.left, max: i.right },
                        pOtherSide: { min: i.top, max: i.bottom },
                        rectSide: { min: e.left, max: e.right },
                        rectOtherSide: { min: e.top, max: e.bottom },
                        velocity: t.velocity.x,
                        factor: tO(s.horizontal.value),
                    });
                o.bounced && (void 0 !== o.velocity && (t.velocity.x = o.velocity), void 0 !== o.position && (t.position.x = o.position));
                let n = tW({
                    pSide: { min: i.top, max: i.bottom },
                    pOtherSide: { min: i.left, max: i.right },
                    rectSide: { min: e.top, max: e.bottom },
                    rectOtherSide: { min: e.left, max: e.right },
                    velocity: t.velocity.y,
                    factor: tO(s.vertical.value),
                });
                n.bounced && (void 0 !== n.velocity && (t.velocity.y = n.velocity), void 0 !== n.position && (t.position.y = n.position));
            }
            function t2(t, e) {
                return tu(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
            }
            function t5(t, e, i) {
                return tu(t) ? tU(t, e, i) : t;
            }
            function t6(t, e) {
                return tu(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
            }
            function t3(t, e) {
                let i = t.value,
                    s = t.animation,
                    a = { delayTime: tO(s.delay) * ta, enable: s.enable, value: tO(t.value) * e, max: tS(i) * e, min: tM(i) * e, loops: 0, maxLoops: tO(s.count), time: 0 };
                if (s.enable) {
                    switch (((a.decay = 1 - tO(s.decay)), s.mode)) {
                        case o.increase:
                            a.status = n.increasing;
                            break;
                        case o.decrease:
                            a.status = n.decreasing;
                            break;
                        case o.random:
                            a.status = tz() >= tn ? n.increasing : n.decreasing;
                    }
                    let t = s.mode === o.auto;
                    switch (s.startValue) {
                        case c.min:
                            (a.value = a.min), t && (a.status = n.increasing);
                            break;
                        case c.max:
                            (a.value = a.max), t && (a.status = n.decreasing);
                            break;
                        case c.random:
                        default:
                            (a.value = tP(a)), t && (a.status = tz() >= tn ? n.increasing : n.decreasing);
                    }
                }
                return (a.initialValue = a.value), a;
            }
            function t7(t, e) {
                if (t.mode !== l.percent) {
                    let { mode: e, ...i } = t;
                    return i;
                }
                return "x" in t ? { x: (t.x / to) * e.width, y: (t.y / to) * e.height } : { width: (t.width / to) * e.width, height: (t.height / to) * e.height };
            }
            function t4(t, e) {
                return t7(t, e);
            }
            function t8(t, e, i, s, o) {
                if (t.destroyed || !e || !e.enable || ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))) return;
                let r = (e.velocity ?? 0) * o.factor,
                    l = e.min,
                    c = e.max,
                    h = e.decay ?? 1;
                if ((e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += o.value), !((e.delayTime ?? 0) > 0) || !(e.time < (e.delayTime ?? 0)))) {
                    switch (e.status) {
                        case n.increasing:
                            e.value >= c ? (i ? (e.status = n.decreasing) : (e.value -= c), e.loops || (e.loops = 0), e.loops++) : (e.value += r);
                            break;
                        case n.decreasing:
                            e.value <= l ? (i ? (e.status = n.increasing) : (e.value += c), e.loops || (e.loops = 0), e.loops++) : (e.value -= r);
                    }
                    e.velocity && 1 !== h && (e.velocity *= h),
                        (function (t, e, i, s, o) {
                            switch (e) {
                                case a.max:
                                    i >= o && t.destroy();
                                    break;
                                case a.min:
                                    i <= s && t.destroy();
                            }
                        })(t, s, e.value, l, c),
                        t.destroyed || (e.value = tk(e.value, l, c));
                }
            }
            ((L = h || (h = {})).darken = "darken"), (L.enlighten = "enlighten"), ((B = d || (d = {}))[(B.r = 1)] = "r"), (B[(B.g = 2)] = "g"), (B[(B.b = 3)] = "b"), (B[(B.a = 4)] = "a");
            let t9 = "random",
                et = new Map();
            function ee(t) {
                et.set(t.key, t);
            }
            function ei(t, e, i = !0) {
                if (!t) return;
                let s = tl(t) ? { value: t } : t;
                if (tl(s.value))
                    return (function t(e, i, s = !0) {
                        if (!e) return;
                        let o = tl(e) ? { value: e } : e;
                        if (tl(o.value))
                            return o.value === t9
                                ? ea()
                                : (function (t) {
                                      for (let [, e] of et) if (t.startsWith(e.stringPrefix)) return e.parseString(t);
                                      let e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, i, s, o) => e + e + i + i + s + s + (void 0 !== o ? o + o : "")),
                                          i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                                      return i ? { a: void 0 !== i[d.a] ? parseInt(i[d.a], 16) / 255 : 1, b: parseInt(i[d.b], 16), g: parseInt(i[d.g], 16), r: parseInt(i[d.r], 16) } : void 0;
                                  })(o.value);
                        if (tu(o.value)) return t({ value: tU(o.value, i, s) });
                        for (let [, t] of et) {
                            let e = t.handleColor(o);
                            if (e) return e;
                        }
                    })(s.value, e, i);
                if (tu(s.value)) return ei({ value: tU(s.value, e, i) });
                for (let [, t] of et) {
                    let e = t.handleRangeColor(s);
                    if (e) return e;
                }
            }
            function es(t, e, i = !0) {
                let s = ei(t, e, i);
                return s ? eo(s) : void 0;
            }
            function eo(t) {
                let e = t.r / 255,
                    i = t.g / 255,
                    s = t.b / 255,
                    o = Math.max(e, i, s),
                    n = Math.min(e, i, s),
                    a = { h: 0, l: (o + n) * 0.5, s: 0 };
                return (
                    o !== n && ((a.s = a.l < 0.5 ? (o - n) / (o + n) : (o - n) / (2 - o - n)), (a.h = e === o ? (i - s) / (o - n) : (a.h = i === o ? 2 + (s - e) / (o - n) : 4 + (e - i) / (o - n)))),
                    (a.l *= 100),
                    (a.s *= 100),
                    (a.h *= 60),
                    a.h < 0 && (a.h += 360),
                    a.h >= 360 && (a.h -= 360),
                    a
                );
            }
            function en(t) {
                let e = ((t.h % 360) + 360) % 360,
                    i = Math.max(0, Math.min(100, t.s)),
                    s = Math.max(0, Math.min(100, t.l)),
                    o = e / 360,
                    n = i / 100,
                    a = s / 100;
                if (0 === i) {
                    let t = Math.round(255 * a);
                    return { r: t, g: t, b: t };
                }
                let r = (t, e, i) => ((i < 0 && i++, i > 1 && i--, 6 * i < 1) ? t + (e - t) * 6 * i : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (0.6666666666666666 - i) * 6 : t),
                    l = a < 0.5 ? a * (1 + n) : a + n - a * n,
                    c = 2 * a - l;
                return { r: Math.round(Math.min(255, 255 * r(c, l, o + 0.3333333333333333))), g: Math.round(Math.min(255, 255 * r(c, l, o))), b: Math.round(Math.min(255, 255 * r(c, l, o - 0.3333333333333333))) };
            }
            function ea(t) {
                let e = t ?? 0;
                return { b: Math.floor(tP(tD(e, 256))), g: Math.floor(tP(tD(e, 256))), r: Math.floor(tP(tD(e, 256))) };
            }
            function er(t, e) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
            }
            function el(t, e) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
            }
            function ec(t, e, i, s) {
                let o = t,
                    n = e;
                return void 0 === o.r && (o = en(t)), void 0 === n.r && (n = en(e)), { b: tC(o.b, n.b, i, s), g: tC(o.g, n.g, i, s), r: tC(o.r, n.r, i, s) };
            }
            function eh(t, e, i) {
                if (i === t9) return ea();
                if ("mid" !== i) return i;
                {
                    let i = t.getFillColor() ?? t.getStrokeColor(),
                        s = e?.getFillColor() ?? e?.getStrokeColor();
                    if (i && s && e) return ec(i, s, t.getRadius(), e.getRadius());
                    {
                        let t = i ?? s;
                        if (t) return en(t);
                    }
                }
            }
            function ed(t, e, i) {
                let s = tl(t) ? t : t.value;
                return s === t9 ? (i ? ei({ value: s }) : e ? t9 : "mid") : "mid" === s ? "mid" : ei({ value: s });
            }
            function eu(t) {
                return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
            }
            function ep(t, e, i) {
                let s = { h: { enable: !1, value: t.h }, s: { enable: !1, value: t.s }, l: { enable: !1, value: t.l } };
                return e && (ef(s.h, e.h, i), ef(s.s, e.s, i), ef(s.l, e.l, i)), s;
            }
            function ef(t, e, i) {
                (t.enable = e.enable),
                    t.enable
                        ? ((t.velocity = (tO(e.speed) / to) * i),
                          (t.decay = 1 - tO(e.decay)),
                          (t.status = n.increasing),
                          (t.loops = 0),
                          (t.maxLoops = tO(e.count)),
                          (t.time = 0),
                          (t.delayTime = tO(e.delay) * ta),
                          e.sync || ((t.velocity *= tz()), (t.value *= tz())),
                          (t.initialValue = t.value),
                          (t.offset = tD(e.offset)))
                        : (t.velocity = 0);
            }
            function ev(t, e, i, s) {
                if (
                    !t ||
                    !t.enable ||
                    ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0)) ||
                    (t.time || (t.time = 0), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += s.value), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))
                )
                    return;
                let o = t.offset ? tP(t.offset) : 0,
                    a = (t.velocity ?? 0) * s.factor + 3.6 * o,
                    r = t.decay ?? 1,
                    l = tS(e),
                    c = tM(e);
                i && t.status !== n.increasing
                    ? ((t.value -= a), t.value < 0 && (t.loops || (t.loops = 0), t.loops++, (t.status = n.increasing)))
                    : ((t.value += a), t.value > l && (t.loops || (t.loops = 0), t.loops++, i ? (t.status = n.decreasing) : (t.value -= l))),
                    t.velocity && 1 !== r && (t.velocity *= r),
                    (t.value = tk(t.value, c, l));
            }
            function ey(t, e) {
                if (!t) return;
                let { h: i, s, l: o } = t,
                    n = { h: { min: 0, max: 360 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } };
                i && ev(i, n.h, !1, e), s && ev(s, n.s, !0, e), o && ev(o, n.l, !0, e);
            }
            let em = { a: 1, b: 0, c: 0, d: 1 };
            function eg(t, e, i) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
            }
            function eb(t, e) {
                t.clearRect(0, 0, e.width, e.height);
            }
            function ew(t, e, i = !1) {
                if (!e || !t) return;
                let s = t.style;
                if (s)
                    for (let t in e) {
                        let o = e[t];
                        o && s.setProperty(t, o, i ? "important" : "");
                    }
            }
            class ex {
                constructor(t) {
                    (this.container = t),
                        (this._applyPostDrawUpdaters = (t) => {
                            for (let e of this._postDrawUpdaters) e.afterDraw?.(t);
                        }),
                        (this._applyPreDrawUpdaters = (t, e, i, s, o, n) => {
                            for (let a of this._preDrawUpdaters) {
                                if (a.getColorStyles) {
                                    let { fill: n, stroke: r } = a.getColorStyles(e, t, i, s);
                                    n && (o.fill = n), r && (o.stroke = r);
                                }
                                if (a.getTransformValues) {
                                    let t = a.getTransformValues(e);
                                    for (let e in t)
                                        !(function (t, e, i) {
                                            let s = e[i];
                                            void 0 !== s && (t[i] = (t[i] ?? 1) * s);
                                        })(n, t, e);
                                }
                                a.beforeDraw?.(e);
                            }
                        }),
                        (this._applyResizePlugins = () => {
                            for (let t of this._resizePlugins) t.resize?.();
                        }),
                        (this._getPluginParticleColors = (t) => {
                            let e, i;
                            for (let s of this._colorPlugins) if ((!e && s.particleFillColor && (e = es(s.particleFillColor(t))), !i && s.particleStrokeColor && (i = es(s.particleStrokeColor(t))), e && i)) break;
                            return [e, i];
                        }),
                        (this._initCover = async () => {
                            let t = this.container.actualOptions.backgroundMask.cover,
                                e = t.color;
                            if (e) {
                                let i = ei(e);
                                if (i) {
                                    let e = { ...i, a: t.opacity };
                                    this._coverColorStyle = er(e, e.a);
                                }
                            } else
                                await new Promise((e, i) => {
                                    if (!t.image) return;
                                    let s = document.createElement("img");
                                    s.addEventListener("load", () => {
                                        (this._coverImage = { image: s, opacity: t.opacity }), e();
                                    }),
                                        s.addEventListener("error", (t) => {
                                            i(t.error);
                                        }),
                                        (s.src = t.image);
                                });
                        }),
                        (this._initStyle = () => {
                            let t = this.element,
                                e = this.container.actualOptions;
                            if (t)
                                for (let i in (this._fullScreen ? ((this._originalStyle = tj({}, t.style)), this._setFullScreenStyle()) : this._resetOriginalStyle(), e.style)) {
                                    if (!i || !e.style) continue;
                                    let s = e.style[i];
                                    s && t.style.setProperty(i, s, "important");
                                }
                        }),
                        (this._initTrail = async () => {
                            let t = this.container.actualOptions.particles.move.trail,
                                e = t.fill;
                            if (!t.enable) return;
                            let i = 1 / t.length;
                            if (e.color) {
                                let t = ei(e.color);
                                if (!t) return;
                                this._trailFill = { color: { ...t }, opacity: i };
                            } else
                                await new Promise((t, s) => {
                                    if (!e.image) return;
                                    let o = document.createElement("img");
                                    o.addEventListener("load", () => {
                                        (this._trailFill = { image: o, opacity: i }), t();
                                    }),
                                        o.addEventListener("error", (t) => {
                                            s(t.error);
                                        }),
                                        (o.src = e.image);
                                });
                        }),
                        (this._paintBase = (t) => {
                            this.draw((e) => {
                                var i;
                                return (i = this.size), void ((e.fillStyle = t ?? "rgba(0,0,0,0)"), e.fillRect(0, 0, i.width, i.height));
                            });
                        }),
                        (this._paintImage = (t, e) => {
                            this.draw((i) => {
                                var s;
                                return (s = this.size), void (t && ((i.globalAlpha = e), i.drawImage(t, 0, 0, s.width, s.height), (i.globalAlpha = 1)));
                            });
                        }),
                        (this._repairStyle = () => {
                            let t = this.element;
                            t &&
                                (this._safeMutationObserver((t) => t.disconnect()),
                                this._initStyle(),
                                this.initBackground(),
                                this._safeMutationObserver((e) => {
                                    t && t instanceof Node && e.observe(t, { attributes: !0 });
                                }));
                        }),
                        (this._resetOriginalStyle = () => {
                            let t = this.element,
                                e = this._originalStyle;
                            t && e && ew(t, e);
                        }),
                        (this._safeMutationObserver = (t) => {
                            this._mutationObserver && t(this._mutationObserver);
                        }),
                        (this._setFullScreenStyle = () => {
                            let t = this.element;
                            t && ew(t, { position: "fixed", zIndex: this.container.actualOptions.fullScreen.zIndex.toString(10), top: "0", left: "0", width: "100%", height: "100%" }, !0);
                        }),
                        (this.size = { height: 0, width: 0 }),
                        (this._context = null),
                        (this._generated = !1),
                        (this._preDrawUpdaters = []),
                        (this._postDrawUpdaters = []),
                        (this._resizePlugins = []),
                        (this._colorPlugins = []);
                }
                get _fullScreen() {
                    return this.container.actualOptions.fullScreen.enable;
                }
                clear() {
                    let t = this.container.actualOptions,
                        e = t.particles.move.trail,
                        i = this._trailFill;
                    t.backgroundMask.enable
                        ? this.paint()
                        : e.enable && e.length > 0 && i
                        ? i.color
                            ? this._paintBase(er(i.color, i.opacity))
                            : i.image && this._paintImage(i.image, i.opacity)
                        : t.clear &&
                          this.draw((t) => {
                              eb(t, this.size);
                          });
                }
                destroy() {
                    if ((this.stop(), this._generated)) {
                        let t = this.element;
                        t?.remove();
                    } else this._resetOriginalStyle();
                    (this._preDrawUpdaters = []), (this._postDrawUpdaters = []), (this._resizePlugins = []), (this._colorPlugins = []);
                }
                draw(t) {
                    let e = this._context;
                    if (e) return t(e);
                }
                drawAsync(t) {
                    let e = this._context;
                    if (e) return t(e);
                }
                drawParticle(t, e) {
                    if (t.spawning || t.destroyed) return;
                    let i = t.getRadius();
                    if (i <= 0) return;
                    let s = t.getFillColor(),
                        o = t.getStrokeColor() ?? s,
                        [n, a] = this._getPluginParticleColors(t);
                    n || (n = s),
                        a || (a = o),
                        (n || a) &&
                            this.draw((s) => {
                                let o = this.container,
                                    r = o.actualOptions,
                                    l = t.options.zIndex,
                                    c = 1 - t.zIndexFactor,
                                    h = c ** l.opacityRate,
                                    d = t.bubble.opacity ?? t.opacity?.value ?? 1,
                                    u = t.strokeOpacity ?? d,
                                    p = d * h,
                                    f = {},
                                    v = { fill: n ? el(n, p) : void 0 };
                                (v.stroke = a ? el(a, u * h) : v.fill),
                                    this._applyPreDrawUpdaters(s, t, i, p, v, f),
                                    (function (t) {
                                        let { container: e, context: i, particle: s, delta: o, colorStyles: n, backgroundMask: a, composite: r, radius: l, opacity: c, shadow: h, transform: d } = t,
                                            u = s.getPosition(),
                                            p = s.rotation + (s.pathRotation ? s.velocity.angle : 0),
                                            f = { sin: Math.sin(p), cos: Math.cos(p) },
                                            v = !!p,
                                            y = { a: f.cos * (d.a ?? em.a), b: v ? f.sin * (d.b ?? 1) : d.b ?? em.b, c: v ? -f.sin * (d.c ?? 1) : d.c ?? em.c, d: f.cos * (d.d ?? em.d) };
                                        i.setTransform(y.a, y.b, y.c, y.d, u.x, u.y), a && (i.globalCompositeOperation = r);
                                        let m = s.shadowColor;
                                        h.enable && m && ((i.shadowBlur = h.blur), (i.shadowColor = er(m)), (i.shadowOffsetX = h.offset.x), (i.shadowOffsetY = h.offset.y)), n.fill && (i.fillStyle = n.fill);
                                        let g = s.strokeWidth ?? 0;
                                        (i.lineWidth = g), n.stroke && (i.strokeStyle = n.stroke);
                                        let b = { container: e, context: i, particle: s, radius: l, opacity: c, delta: o, transformData: y, strokeWidth: g };
                                        (function (t) {
                                            let { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, strokeWidth: r, transformData: l } = t;
                                            if (!s.shape) return;
                                            let c = e.shapeDrawers.get(s.shape);
                                            c &&
                                                (i.beginPath(),
                                                c.draw({ context: i, particle: s, radius: o, opacity: n, delta: a, pixelRatio: e.retina.pixelRatio, transformData: { ...l } }),
                                                s.shapeClose && i.closePath(),
                                                r > 0 && i.stroke(),
                                                s.shapeFill && i.fill());
                                        })(b),
                                            (function (t) {
                                                let { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, transformData: r } = t;
                                                if (!s.shape) return;
                                                let l = e.shapeDrawers.get(s.shape);
                                                l?.afterDraw && l.afterDraw({ context: i, particle: s, radius: o, opacity: n, delta: a, pixelRatio: e.retina.pixelRatio, transformData: { ...r } });
                                            })(b),
                                            (function (t) {
                                                let { container: e, context: i, particle: s, radius: o, opacity: n, delta: a, transformData: r } = t;
                                                if (!s.effect) return;
                                                let l = e.effectDrawers.get(s.effect);
                                                l && l.draw({ context: i, particle: s, radius: o, opacity: n, delta: a, pixelRatio: e.retina.pixelRatio, transformData: { ...r } });
                                            })(b),
                                            (i.globalCompositeOperation = "source-over"),
                                            i.resetTransform();
                                    })({
                                        container: o,
                                        context: s,
                                        particle: t,
                                        delta: e,
                                        colorStyles: v,
                                        backgroundMask: r.backgroundMask.enable,
                                        composite: r.backgroundMask.composite,
                                        radius: i * c ** l.sizeRate,
                                        opacity: p,
                                        shadow: t.options.shadow,
                                        transform: f,
                                    }),
                                    this._applyPostDrawUpdaters(t);
                            });
                }
                drawParticlePlugin(t, e, i) {
                    this.draw((s) => {
                        t.drawParticle && t.drawParticle(s, e, i);
                    });
                }
                drawPlugin(t, e) {
                    this.draw((i) => {
                        t.draw && t.draw(i, e);
                    });
                }
                async init() {
                    this._safeMutationObserver((t) => t.disconnect()),
                        (this._mutationObserver = (function (t) {
                            if (!tG() && "undefined" != typeof MutationObserver) return new MutationObserver(t);
                        })((t) => {
                            for (let e of t) "attributes" === e.type && "style" === e.attributeName && this._repairStyle();
                        })),
                        this.resize(),
                        this._initStyle(),
                        await this._initCover();
                    try {
                        await this._initTrail();
                    } catch (t) {
                        tq.error(t);
                    }
                    this.initBackground(),
                        this._safeMutationObserver((t) => {
                            this.element && this.element instanceof Node && t.observe(this.element, { attributes: !0 });
                        }),
                        this.initUpdaters(),
                        this.initPlugins(),
                        this.paint();
                }
                initBackground() {
                    let t = this.container.actualOptions.background,
                        e = this.element;
                    if (!e) return;
                    let i = e.style;
                    if (i) {
                        if (t.color) {
                            let e = ei(t.color);
                            i.backgroundColor = e ? er(e, t.opacity) : "";
                        } else i.backgroundColor = "";
                        (i.backgroundImage = t.image || ""), (i.backgroundPosition = t.position || ""), (i.backgroundRepeat = t.repeat || ""), (i.backgroundSize = t.size || "");
                    }
                }
                initPlugins() {
                    for (let [, t] of ((this._resizePlugins = []), this.container.plugins)) t.resize && this._resizePlugins.push(t), (t.particleFillColor ?? t.particleStrokeColor) && this._colorPlugins.push(t);
                }
                initUpdaters() {
                    for (let t of ((this._preDrawUpdaters = []), (this._postDrawUpdaters = []), this.container.particles.updaters))
                        t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles ?? t.getTransformValues ?? t.beforeDraw) && this._preDrawUpdaters.push(t);
                }
                loadCanvas(t) {
                    this._generated && this.element && this.element.remove(),
                        (this._generated = t.dataset && Q in t.dataset ? "true" === t.dataset[Q] : this._generated),
                        (this.element = t),
                        (this.element.ariaHidden = "true"),
                        (this._originalStyle = tj({}, this.element.style)),
                        (this.size.height = t.offsetHeight),
                        (this.size.width = t.offsetWidth),
                        (this._context = this.element.getContext("2d")),
                        this._safeMutationObserver((t) => {
                            this.element && this.element instanceof Node && t.observe(this.element, { attributes: !0 });
                        }),
                        this.container.retina.init(),
                        this.initBackground();
                }
                paint() {
                    let t = this.container.actualOptions;
                    this.draw((e) => {
                        t.backgroundMask.enable && t.backgroundMask.cover
                            ? (eb(e, this.size), this._coverImage ? this._paintImage(this._coverImage.image, this._coverImage.opacity) : this._coverColorStyle ? this._paintBase(this._coverColorStyle) : this._paintBase())
                            : this._paintBase();
                    });
                }
                resize() {
                    if (!this.element) return !1;
                    let t = this.container,
                        e = t.retina.pixelRatio,
                        i = t.canvas.size,
                        s = { width: this.element.offsetWidth * e, height: this.element.offsetHeight * e };
                    if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width) return !1;
                    let o = { ...i };
                    return (
                        (this.element.width = i.width = this.element.offsetWidth * e),
                        (this.element.height = i.height = this.element.offsetHeight * e),
                        this.container.started && t.particles.setResizeFactor({ width: i.width / o.width, height: i.height / o.height }),
                        !0
                    );
                }
                stop() {
                    this._safeMutationObserver((t) => t.disconnect()), (this._mutationObserver = void 0), this.draw((t) => eb(t, this.size));
                }
                async windowResize() {
                    if (!this.element || !this.resize()) return;
                    let t = this.container,
                        e = t.updateActualOptions();
                    t.particles.setDensity(), this._applyResizePlugins(), e && (await t.refresh());
                }
            }
            function e_(t, e, i, s, o) {
                if (s) {
                    let s = { passive: !0 };
                    tr(o) ? (s.capture = o) : void 0 !== o && (s = o), t.addEventListener(e, i, s);
                } else t.removeEventListener(e, i, o);
            }
            ((A = u || (u = {})).canvas = "canvas"), (A.parent = "parent"), (A.window = "window");
            class ez {
                constructor(t) {
                    (this.container = t),
                        (this._doMouseTouchClick = (t) => {
                            let e = this.container,
                                i = e.actualOptions;
                            if (this._canPush) {
                                let t = e.interactivity.mouse,
                                    s = t.position;
                                if (!s) return;
                                (t.clickPosition = { ...s }), (t.clickTime = new Date().getTime()), t2(i.interactivity.events.onClick.mode, (t) => this.container.handleClickMode(t));
                            }
                            "touchend" === t.type && setTimeout(() => this._mouseTouchFinish(), 500);
                        }),
                        (this._handleThemeChange = (t) => {
                            let e = this.container,
                                i = e.options,
                                s = i.defaultThemes,
                                o = t.matches ? s.dark : s.light,
                                n = i.themes.find((t) => t.name === o);
                            n?.default.auto && e.loadTheme(o);
                        }),
                        (this._handleVisibilityChange = () => {
                            let t = this.container,
                                e = t.actualOptions;
                            this._mouseTouchFinish(), e.pauseOnBlur && (document?.hidden ? ((t.pageHidden = !0), t.pause()) : ((t.pageHidden = !1), t.animationStatus ? t.play(!0) : t.draw(!0)));
                        }),
                        (this._handleWindowResize = () => {
                            this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
                            let t = async () => {
                                let t = this.container.canvas;
                                await t?.windowResize();
                            };
                            this._resizeTimeout = setTimeout(() => void t(), this.container.actualOptions.interactivity.events.resize.delay * ta);
                        }),
                        (this._manageInteractivityListeners = (t, e) => {
                            let i = this._handlers,
                                s = this.container,
                                o = s.actualOptions,
                                n = s.interactivity.element;
                            if (!n) return;
                            let a = s.canvas.element;
                            a && (a.style.pointerEvents = n === a ? "initial" : "none"),
                                (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) &&
                                    (e_(n, te, i.mouseMove, e),
                                    e_(n, "touchstart", i.touchStart, e),
                                    e_(n, "touchmove", i.touchMove, e),
                                    o.interactivity.events.onClick.enable ? (e_(n, ti, i.touchEndClick, e), e_(n, "pointerup", i.mouseUp, e), e_(n, "pointerdown", i.mouseDown, e)) : e_(n, ti, i.touchEnd, e),
                                    e_(n, t, i.mouseLeave, e),
                                    e_(n, "touchcancel", i.touchCancel, e));
                        }),
                        (this._manageListeners = (t) => {
                            let e = this._handlers,
                                i = this.container,
                                s = i.actualOptions.interactivity.detectsOn,
                                o = i.canvas.element,
                                n = tt;
                            s === u.window ? ((i.interactivity.element = window), (n = "pointerout")) : s === u.parent && o ? (i.interactivity.element = o.parentElement ?? o.parentNode) : (i.interactivity.element = o),
                                this._manageMediaMatch(t),
                                this._manageResize(t),
                                this._manageInteractivityListeners(n, t),
                                document && e_(document, "visibilitychange", e.visibilityChange, t, !1);
                        }),
                        (this._manageMediaMatch = (t) => {
                            let e = this._handlers,
                                i = tH("(prefers-color-scheme: dark)");
                            if (i) {
                                if (void 0 !== i.addEventListener) {
                                    e_(i, "change", e.themeChange, t);
                                    return;
                                }
                                void 0 !== i.addListener && (t ? i.addListener(e.oldThemeChange) : i.removeListener(e.oldThemeChange));
                            }
                        }),
                        (this._manageResize = (t) => {
                            let e = this._handlers,
                                i = this.container;
                            if (!i.actualOptions.interactivity.events.resize) return;
                            if ("undefined" == typeof ResizeObserver) {
                                e_(window, "resize", e.resize, t);
                                return;
                            }
                            let s = i.canvas.element;
                            this._resizeObserver && !t
                                ? (s && this._resizeObserver.unobserve(s), this._resizeObserver.disconnect(), delete this._resizeObserver)
                                : !this._resizeObserver &&
                                  t &&
                                  s &&
                                  ((this._resizeObserver = new ResizeObserver((t) => {
                                      t.find((t) => t.target === s) && this._handleWindowResize();
                                  })),
                                  this._resizeObserver.observe(s));
                        }),
                        (this._mouseDown = () => {
                            let { interactivity: t } = this.container;
                            if (!t) return;
                            let { mouse: e } = t;
                            (e.clicking = !0), (e.downPosition = e.position);
                        }),
                        (this._mouseTouchClick = (t) => {
                            let e = this.container,
                                i = e.actualOptions,
                                { mouse: s } = e.interactivity;
                            s.inside = !0;
                            let o = !1,
                                n = s.position;
                            if (n && i.interactivity.events.onClick.enable) {
                                for (let [, t] of e.plugins) if (t.clickPositionValid && (o = t.clickPositionValid(n))) break;
                                o || this._doMouseTouchClick(t), (s.clicking = !1);
                            }
                        }),
                        (this._mouseTouchFinish = () => {
                            let t = this.container.interactivity;
                            if (!t) return;
                            let e = t.mouse;
                            delete e.position, delete e.clickPosition, delete e.downPosition, (t.status = tt), (e.inside = !1), (e.clicking = !1);
                        }),
                        (this._mouseTouchMove = (t) => {
                            let e;
                            let i = this.container,
                                s = i.actualOptions,
                                o = i.interactivity,
                                n = i.canvas.element;
                            if (!o?.element) return;
                            if (((o.mouse.inside = !0), t.type.startsWith("pointer"))) {
                                if (((this._canPush = !0), o.element === window)) {
                                    if (n) {
                                        let i = n.getBoundingClientRect();
                                        e = { x: t.clientX - i.left, y: t.clientY - i.top };
                                    }
                                } else if (s.interactivity.detectsOn === u.parent) {
                                    let i = t.target,
                                        s = t.currentTarget;
                                    if (i && s && n) {
                                        let o = i.getBoundingClientRect(),
                                            a = s.getBoundingClientRect(),
                                            r = n.getBoundingClientRect();
                                        e = { x: t.offsetX + 2 * o.left - (a.left + r.left), y: t.offsetY + 2 * o.top - (a.top + r.top) };
                                    } else e = { x: t.offsetX ?? t.clientX, y: t.offsetY ?? t.clientY };
                                } else t.target === n && (e = { x: t.offsetX ?? t.clientX, y: t.offsetY ?? t.clientY });
                            } else if (((this._canPush = "touchmove" !== t.type), n)) {
                                let i = t.touches[t.touches.length - 1],
                                    s = n.getBoundingClientRect();
                                e = { x: i.clientX - (s.left ?? 0), y: i.clientY - (s.top ?? 0) };
                            }
                            let a = i.retina.pixelRatio;
                            e && ((e.x *= a), (e.y *= a)), (o.mouse.position = e), (o.status = te);
                        }),
                        (this._touchEnd = (t) => {
                            for (let e of Array.from(t.changedTouches)) this._touches.delete(e.identifier);
                            this._mouseTouchFinish();
                        }),
                        (this._touchEndClick = (t) => {
                            for (let e of Array.from(t.changedTouches)) this._touches.delete(e.identifier);
                            this._mouseTouchClick(t);
                        }),
                        (this._touchStart = (t) => {
                            for (let e of Array.from(t.changedTouches)) this._touches.set(e.identifier, performance.now());
                            this._mouseTouchMove(t);
                        }),
                        (this._canPush = !0),
                        (this._touches = new Map()),
                        (this._handlers = {
                            mouseDown: () => this._mouseDown(),
                            mouseLeave: () => this._mouseTouchFinish(),
                            mouseMove: (t) => this._mouseTouchMove(t),
                            mouseUp: (t) => this._mouseTouchClick(t),
                            touchStart: (t) => this._touchStart(t),
                            touchMove: (t) => this._mouseTouchMove(t),
                            touchEnd: (t) => this._touchEnd(t),
                            touchCancel: (t) => this._touchEnd(t),
                            touchEndClick: (t) => this._touchEndClick(t),
                            visibilityChange: () => this._handleVisibilityChange(),
                            themeChange: (t) => this._handleThemeChange(t),
                            oldThemeChange: (t) => this._handleThemeChange(t),
                            resize: () => {
                                this._handleWindowResize();
                            },
                        });
                }
                addListeners() {
                    this._manageListeners(!0);
                }
                removeListeners() {
                    this._manageListeners(!1);
                }
            }
            ((q = p || (p = {})).configAdded = "configAdded"),
                (q.containerInit = "containerInit"),
                (q.particlesSetup = "particlesSetup"),
                (q.containerStarted = "containerStarted"),
                (q.containerStopped = "containerStopped"),
                (q.containerDestroyed = "containerDestroyed"),
                (q.containerPaused = "containerPaused"),
                (q.containerPlay = "containerPlay"),
                (q.containerBuilt = "containerBuilt"),
                (q.particleAdded = "particleAdded"),
                (q.particleDestroyed = "particleDestroyed"),
                (q.particleRemoved = "particleRemoved");
            class ek {
                constructor() {
                    this.value = "";
                }
                static create(t, e) {
                    let i = new ek();
                    return i.load(t), void 0 !== e && (tl(e) || tu(e) ? i.load({ value: e }) : i.load(e)), i;
                }
                load(t) {
                    t?.value !== void 0 && (this.value = t.value);
                }
            }
            class eC {
                constructor() {
                    (this.color = new ek()), (this.color.value = ""), (this.image = ""), (this.position = ""), (this.repeat = ""), (this.size = ""), (this.opacity = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = ek.create(this.color, t.color)),
                        void 0 !== t.image && (this.image = t.image),
                        void 0 !== t.position && (this.position = t.position),
                        void 0 !== t.repeat && (this.repeat = t.repeat),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class eP {
                constructor() {
                    this.opacity = 1;
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = ek.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class eO {
                constructor() {
                    (this.composite = "destination-out"), (this.cover = new eP()), (this.enable = !1);
                }
                load(t) {
                    if (t) {
                        if ((void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover)) {
                            let e = t.cover,
                                i = tl(t.cover) ? { color: t.cover } : t.cover;
                            this.cover.load(void 0 !== e.color || void 0 !== e.image ? e : { color: i });
                        }
                        void 0 !== t.enable && (this.enable = t.enable);
                    }
                }
            }
            class eM {
                constructor() {
                    (this.enable = !0), (this.zIndex = 0);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex));
                }
            }
            class eS {
                constructor() {
                    (this.enable = !1), (this.mode = []);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode));
                }
            }
            ((F = f || (f = {})).circle = "circle"), (F.rectangle = "rectangle");
            class eD {
                constructor() {
                    (this.selectors = []), (this.enable = !1), (this.mode = []), (this.type = f.circle);
                }
                load(t) {
                    t && (void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type));
                }
            }
            class eE {
                constructor() {
                    (this.enable = !1), (this.force = 2), (this.smooth = 10);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth));
                }
            }
            class eR {
                constructor() {
                    (this.enable = !1), (this.mode = []), (this.parallax = new eE());
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax));
                }
            }
            class eT {
                constructor() {
                    (this.delay = 0.5), (this.enable = !0);
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable));
                }
            }
            class eI {
                constructor() {
                    (this.onClick = new eS()), (this.onDiv = new eD()), (this.onHover = new eR()), (this.resize = new eT());
                }
                load(t) {
                    if (!t) return;
                    this.onClick.load(t.onClick);
                    let e = t.onDiv;
                    void 0 !== e &&
                        (this.onDiv = t2(e, (t) => {
                            let e = new eD();
                            return e.load(t), e;
                        })),
                        this.onHover.load(t.onHover),
                        this.resize.load(t.resize);
                }
            }
            class eL {
                constructor(t, e) {
                    (this._engine = t), (this._container = e);
                }
                load(t) {
                    if (!t || !this._container) return;
                    let e = this._engine.interactors.get(this._container);
                    if (e) for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t);
                }
            }
            class eB {
                constructor(t, e) {
                    (this.detectsOn = u.window), (this.events = new eI()), (this.modes = new eL(t, e));
                }
                load(t) {
                    if (!t) return;
                    let e = t.detectsOn;
                    void 0 !== e && (this.detectsOn = e), this.events.load(t.events), this.modes.load(t.modes);
                }
            }
            class eA {
                load(t) {
                    t && (t.position && (this.position = { x: t.position.x ?? 50, y: t.position.y ?? 50, mode: t.position.mode ?? l.percent }), t.options && (this.options = tj({}, t.options)));
                }
            }
            ((W = v || (v = {})).screen = "screen"), (W.canvas = "canvas");
            class eq {
                constructor() {
                    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = v.canvas);
                }
                load(t) {
                    t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && (t.mode === v.screen ? (this.mode = v.screen) : (this.mode = v.canvas)), void 0 !== t.options && (this.options = tj({}, t.options)));
                }
            }
            ((G = y || (y = {})).any = "any"), (G.dark = "dark"), (G.light = "light");
            class eF {
                constructor() {
                    (this.auto = !1), (this.mode = y.any), (this.value = !1);
                }
                load(t) {
                    t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
                }
            }
            class eW {
                constructor() {
                    (this.name = ""), (this.default = new eF());
                }
                load(t) {
                    t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = tj({}, t.options)));
                }
            }
            class eG {
                constructor() {
                    (this.count = 0), (this.enable = !1), (this.speed = 1), (this.decay = 0), (this.delay = 0), (this.sync = !1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.count && (this.count = tD(t.count)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.speed && (this.speed = tD(t.speed)),
                        void 0 !== t.decay && (this.decay = tD(t.decay)),
                        void 0 !== t.delay && (this.delay = tD(t.delay)),
                        void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class eH extends eG {
                constructor() {
                    super(), (this.mode = o.auto), (this.startValue = c.random);
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.startValue && (this.startValue = t.startValue));
                }
            }
            class e$ extends eG {
                constructor() {
                    super(), (this.offset = 0), (this.sync = !0);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.offset && (this.offset = tD(t.offset));
                }
            }
            class eV {
                constructor() {
                    (this.h = new e$()), (this.s = new e$()), (this.l = new e$());
                }
                load(t) {
                    t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
                }
            }
            class eZ extends ek {
                constructor() {
                    super(), (this.animation = new eV());
                }
                static create(t, e) {
                    let i = new eZ();
                    return i.load(t), void 0 !== e && (tl(e) || tu(e) ? i.load({ value: e }) : i.load(e)), i;
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation));
                }
            }
            ((H = m || (m = {})).absorb = "absorb"), (H.bounce = "bounce"), (H.destroy = "destroy");
            class eU {
                constructor() {
                    this.speed = 2;
                }
                load(t) {
                    t && void 0 !== t.speed && (this.speed = t.speed);
                }
            }
            class eY {
                constructor() {
                    (this.enable = !0), (this.retries = 0);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries));
                }
            }
            class eX {
                constructor() {
                    this.value = 0;
                }
                load(t) {
                    t && void 0 !== t.value && (this.value = tD(t.value));
                }
            }
            class ej extends eX {
                constructor() {
                    super(), (this.animation = new eG());
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
            class eN extends ej {
                constructor() {
                    super(), (this.animation = new eH());
                }
                load(t) {
                    super.load(t);
                }
            }
            class eK extends eX {
                constructor() {
                    super(), (this.value = 1);
                }
            }
            class eJ {
                constructor() {
                    (this.horizontal = new eK()), (this.vertical = new eK());
                }
                load(t) {
                    t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
                }
            }
            class eQ {
                constructor() {
                    (this.absorb = new eU()), (this.bounce = new eJ()), (this.enable = !1), (this.maxSpeed = 50), (this.mode = m.bounce), (this.overlap = new eY());
                }
                load(t) {
                    t &&
                        (this.absorb.load(t.absorb),
                        this.bounce.load(t.bounce),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.maxSpeed && (this.maxSpeed = tD(t.maxSpeed)),
                        void 0 !== t.mode && (this.mode = t.mode),
                        this.overlap.load(t.overlap));
                }
            }
            class e0 {
                constructor() {
                    (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = []);
                }
                load(t) {
                    if (!t) return;
                    let e = t.options;
                    if (void 0 !== e)
                        for (let t in e) {
                            let i = e[t];
                            i && (this.options[t] = tj(this.options[t] ?? {}, i));
                        }
                    void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
                }
            }
            class e1 {
                constructor() {
                    (this.offset = 0), (this.value = 90);
                }
                load(t) {
                    t && (void 0 !== t.offset && (this.offset = tD(t.offset)), void 0 !== t.value && (this.value = tD(t.value)));
                }
            }
            class e2 {
                constructor() {
                    (this.distance = 200), (this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
                }
                load(t) {
                    if (t && (void 0 !== t.distance && (this.distance = tD(t.distance)), void 0 !== t.enable && (this.enable = t.enable), t.rotate)) {
                        let e = t.rotate.x;
                        void 0 !== e && (this.rotate.x = e);
                        let i = t.rotate.y;
                        void 0 !== i && (this.rotate.y = i);
                    }
                }
            }
            class e5 {
                constructor() {
                    (this.x = 50), (this.y = 50), (this.mode = l.percent), (this.radius = 0);
                }
                load(t) {
                    t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius));
                }
            }
            class e6 {
                constructor() {
                    (this.acceleration = 9.81), (this.enable = !1), (this.inverse = !1), (this.maxSpeed = 50);
                }
                load(t) {
                    t &&
                        (void 0 !== t.acceleration && (this.acceleration = tD(t.acceleration)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.inverse && (this.inverse = t.inverse),
                        void 0 !== t.maxSpeed && (this.maxSpeed = tD(t.maxSpeed)));
                }
            }
            class e3 {
                constructor() {
                    (this.clamp = !0), (this.delay = new eX()), (this.enable = !1), (this.options = {});
                }
                load(t) {
                    t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), (this.generator = t.generator), t.options && (this.options = tj(this.options, t.options)));
                }
            }
            class e7 {
                load(t) {
                    t && (void 0 !== t.color && (this.color = ek.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image));
                }
            }
            class e4 {
                constructor() {
                    (this.enable = !1), (this.length = 10), (this.fill = new e7());
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.fill && this.fill.load(t.fill), void 0 !== t.length && (this.length = t.length));
                }
            }
            (($ = g || (g = {})).bounce = "bounce"), ($.none = "none"), ($.out = "out"), ($.destroy = "destroy"), ($.split = "split");
            class e8 {
                constructor() {
                    this.default = g.out;
                }
                load(t) {
                    t && (void 0 !== t.default && (this.default = t.default), (this.bottom = t.bottom ?? t.default), (this.left = t.left ?? t.default), (this.right = t.right ?? t.default), (this.top = t.top ?? t.default));
                }
            }
            class e9 {
                constructor() {
                    (this.acceleration = 0), (this.enable = !1);
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = tD(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), t.position && (this.position = tj({}, t.position)));
                }
            }
            class it {
                constructor() {
                    (this.angle = new e1()),
                        (this.attract = new e2()),
                        (this.center = new e5()),
                        (this.decay = 0),
                        (this.distance = {}),
                        (this.direction = s.none),
                        (this.drift = 0),
                        (this.enable = !1),
                        (this.gravity = new e6()),
                        (this.path = new e3()),
                        (this.outModes = new e8()),
                        (this.random = !1),
                        (this.size = !1),
                        (this.speed = 2),
                        (this.spin = new e9()),
                        (this.straight = !1),
                        (this.trail = new e4()),
                        (this.vibrate = !1),
                        (this.warp = !1);
                }
                load(t) {
                    if (!t) return;
                    this.angle.load(tc(t.angle) ? { value: t.angle } : t.angle),
                        this.attract.load(t.attract),
                        this.center.load(t.center),
                        void 0 !== t.decay && (this.decay = tD(t.decay)),
                        void 0 !== t.direction && (this.direction = t.direction),
                        void 0 !== t.distance && (this.distance = tc(t.distance) ? { horizontal: t.distance, vertical: t.distance } : { ...t.distance }),
                        void 0 !== t.drift && (this.drift = tD(t.drift)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        this.gravity.load(t.gravity);
                    let e = t.outModes;
                    void 0 !== e && (td(e) ? this.outModes.load(e) : this.outModes.load({ default: e })),
                        this.path.load(t.path),
                        void 0 !== t.random && (this.random = t.random),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.speed && (this.speed = tD(t.speed)),
                        this.spin.load(t.spin),
                        void 0 !== t.straight && (this.straight = t.straight),
                        this.trail.load(t.trail),
                        void 0 !== t.vibrate && (this.vibrate = t.vibrate),
                        void 0 !== t.warp && (this.warp = t.warp);
                }
            }
            class ie extends eH {
                constructor() {
                    super(), (this.destroy = a.none), (this.speed = 2);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
                }
            }
            class ii extends eN {
                constructor() {
                    super(), (this.animation = new ie()), (this.value = 1);
                }
                load(t) {
                    if (!t) return;
                    super.load(t);
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
            class is {
                constructor() {
                    (this.enable = !1), (this.width = 1920), (this.height = 1080);
                }
                load(t) {
                    if (!t) return;
                    void 0 !== t.enable && (this.enable = t.enable);
                    let e = t.width;
                    void 0 !== e && (this.width = e);
                    let i = t.height;
                    void 0 !== i && (this.height = i);
                }
            }
            ((V = b || (b = {})).delete = "delete"), (V.wait = "wait");
            class io {
                constructor() {
                    (this.mode = b.delete), (this.value = 0);
                }
                load(t) {
                    t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
                }
            }
            class ia {
                constructor() {
                    (this.density = new is()), (this.limit = new io()), (this.value = 0);
                }
                load(t) {
                    t && (this.density.load(t.density), this.limit.load(t.limit), void 0 !== t.value && (this.value = t.value));
                }
            }
            class ir {
                constructor() {
                    (this.blur = 0), (this.color = new ek()), (this.enable = !1), (this.offset = { x: 0, y: 0 }), (this.color.value = "#000");
                }
                load(t) {
                    t &&
                        (void 0 !== t.blur && (this.blur = t.blur),
                        (this.color = ek.create(this.color, t.color)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
                }
            }
            class il {
                constructor() {
                    (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = "circle");
                }
                load(t) {
                    if (!t) return;
                    let e = t.options;
                    if (void 0 !== e)
                        for (let t in e) {
                            let i = e[t];
                            i && (this.options[t] = tj(this.options[t] ?? {}, i));
                        }
                    void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type);
                }
            }
            class ic extends eH {
                constructor() {
                    super(), (this.destroy = a.none), (this.speed = 5);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy);
                }
            }
            class ih extends eN {
                constructor() {
                    super(), (this.animation = new ic()), (this.value = 3);
                }
                load(t) {
                    if ((super.load(t), !t)) return;
                    let e = t.animation;
                    void 0 !== e && this.animation.load(e);
                }
            }
            class id {
                constructor() {
                    this.width = 0;
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = eZ.create(this.color, t.color)), void 0 !== t.width && (this.width = tD(t.width)), void 0 !== t.opacity && (this.opacity = tD(t.opacity)));
                }
            }
            class iu extends eX {
                constructor() {
                    super(), (this.opacityRate = 1), (this.sizeRate = 1), (this.velocityRate = 1);
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
                }
            }
            class ip {
                constructor(t, e) {
                    (this._engine = t),
                        (this._container = e),
                        (this.bounce = new eJ()),
                        (this.collisions = new eQ()),
                        (this.color = new eZ()),
                        (this.color.value = "#fff"),
                        (this.effect = new e0()),
                        (this.groups = {}),
                        (this.move = new it()),
                        (this.number = new ia()),
                        (this.opacity = new ii()),
                        (this.reduceDuplicates = !1),
                        (this.shadow = new ir()),
                        (this.shape = new il()),
                        (this.size = new ih()),
                        (this.stroke = new id()),
                        (this.zIndex = new iu());
                }
                load(t) {
                    if (!t) return;
                    if (void 0 !== t.groups)
                        for (let e of Object.keys(t.groups)) {
                            if (!Object.hasOwn(t.groups, e)) continue;
                            let i = t.groups[e];
                            void 0 !== i && (this.groups[e] = tj(this.groups[e] ?? {}, i));
                        }
                    void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates),
                        this.bounce.load(t.bounce),
                        this.color.load(eZ.create(this.color, t.color)),
                        this.effect.load(t.effect),
                        this.move.load(t.move),
                        this.number.load(t.number),
                        this.opacity.load(t.opacity),
                        this.shape.load(t.shape),
                        this.size.load(t.size),
                        this.shadow.load(t.shadow),
                        this.zIndex.load(t.zIndex),
                        this.collisions.load(t.collisions),
                        void 0 !== t.interactivity && (this.interactivity = tj({}, t.interactivity));
                    let e = t.stroke;
                    if (
                        (e &&
                            (this.stroke = t2(e, (t) => {
                                let e = new id();
                                return e.load(t), e;
                            })),
                        this._container)
                    ) {
                        let e = this._engine.updaters.get(this._container);
                        if (e) for (let i of e) i.loadOptions && i.loadOptions(this, t);
                        let i = this._engine.interactors.get(this._container);
                        if (i) for (let e of i) e.loadParticlesOptions && e.loadParticlesOptions(this, t);
                    }
                }
            }
            function iv(t, ...e) {
                for (let i of e) t.load(i);
            }
            function iy(t, e, ...i) {
                let s = new ip(t, e);
                return iv(s, ...i), s;
            }
            class im {
                constructor(t, e) {
                    (this._findDefaultTheme = (t) => this.themes.find((e) => e.default.value && e.default.mode === t) ?? this.themes.find((t) => t.default.value && t.default.mode === y.any)),
                        (this._importPreset = (t) => {
                            this.load(this._engine.getPreset(t));
                        }),
                        (this._engine = t),
                        (this._container = e),
                        (this.autoPlay = !0),
                        (this.background = new eC()),
                        (this.backgroundMask = new eO()),
                        (this.clear = !0),
                        (this.defaultThemes = {}),
                        (this.delay = 0),
                        (this.fullScreen = new eM()),
                        (this.detectRetina = !0),
                        (this.duration = 0),
                        (this.fpsLimit = 120),
                        (this.interactivity = new eB(t, e)),
                        (this.manualParticles = []),
                        (this.particles = iy(this._engine, this._container)),
                        (this.pauseOnBlur = !0),
                        (this.pauseOnOutsideViewport = !0),
                        (this.responsive = []),
                        (this.smooth = !1),
                        (this.style = {}),
                        (this.themes = []),
                        (this.zLayers = 100);
                }
                load(t) {
                    if (!t) return;
                    void 0 !== t.preset && t2(t.preset, (t) => this._importPreset(t)),
                        void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
                        void 0 !== t.clear && (this.clear = t.clear),
                        void 0 !== t.key && (this.key = t.key),
                        void 0 !== t.name && (this.name = t.name),
                        void 0 !== t.delay && (this.delay = tD(t.delay));
                    let e = t.detectRetina;
                    void 0 !== e && (this.detectRetina = e), void 0 !== t.duration && (this.duration = tD(t.duration));
                    let i = t.fpsLimit;
                    void 0 !== i && (this.fpsLimit = i),
                        void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
                        void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
                        void 0 !== t.zLayers && (this.zLayers = t.zLayers),
                        this.background.load(t.background);
                    let s = t.fullScreen;
                    tr(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
                        this.backgroundMask.load(t.backgroundMask),
                        this.interactivity.load(t.interactivity),
                        t.manualParticles &&
                            (this.manualParticles = t.manualParticles.map((t) => {
                                let e = new eA();
                                return e.load(t), e;
                            })),
                        this.particles.load(t.particles),
                        (this.style = tj(this.style, t.style)),
                        this._engine.loadOptions(this, t),
                        void 0 !== t.smooth && (this.smooth = t.smooth);
                    let o = this._engine.interactors.get(this._container);
                    if (o) for (let e of o) e.loadOptions && e.loadOptions(this, t);
                    if (void 0 !== t.responsive)
                        for (let e of t.responsive) {
                            let t = new eq();
                            t.load(e), this.responsive.push(t);
                        }
                    if ((this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes))
                        for (let e of t.themes) {
                            let t = this.themes.find((t) => t.name === e.name);
                            if (t) t.load(e);
                            else {
                                let t = new eW();
                                t.load(e), this.themes.push(t);
                            }
                        }
                    (this.defaultThemes.dark = this._findDefaultTheme(y.dark)?.name), (this.defaultThemes.light = this._findDefaultTheme(y.light)?.name);
                }
                setResponsive(t, e, i) {
                    this.load(i);
                    let s = this.responsive.find((i) => (i.mode === v.screen && screen ? i.maxWidth > screen.availWidth : i.maxWidth * e > t));
                    return this.load(s?.options), s?.maxWidth;
                }
                setTheme(t) {
                    if (t) {
                        let e = this.themes.find((e) => e.name === t);
                        e && this.load(e.options);
                    } else {
                        let t = tH("(prefers-color-scheme: dark)"),
                            e = t?.matches,
                            i = this._findDefaultTheme(e ? y.dark : y.light);
                        i && this.load(i.options);
                    }
                }
            }
            ((Z = w || (w = {})).external = "external"), (Z.particles = "particles");
            class ig {
                constructor(t, e) {
                    (this.container = e), (this._engine = t), (this._interactors = []), (this._externalInteractors = []), (this._particleInteractors = []);
                }
                externalInteract(t) {
                    for (let e of this._externalInteractors) e.isEnabled() && e.interact(t);
                }
                handleClickMode(t) {
                    for (let e of this._externalInteractors) e.handleClickMode?.(t);
                }
                async init() {
                    for (let t of ((this._interactors = await this._engine.getInteractors(this.container, !0)), (this._externalInteractors = []), (this._particleInteractors = []), this._interactors)) {
                        switch (t.type) {
                            case w.external:
                                this._externalInteractors.push(t);
                                break;
                            case w.particles:
                                this._particleInteractors.push(t);
                        }
                        t.init();
                    }
                }
                particlesInteract(t, e) {
                    for (let i of this._externalInteractors) i.clear(t, e);
                    for (let i of this._particleInteractors) i.isEnabled(t) && i.interact(t, e);
                }
                reset(t) {
                    for (let e of this._externalInteractors) e.isEnabled() && e.reset(t);
                    for (let e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
                }
            }
            ((U = x || (x = {})).normal = "normal"), (U.inside = "inside"), (U.outside = "outside");
            let ib = 0,
                iw = "random";
            function ix(t) {
                if (!t$(t.outMode, t.checkModes)) return;
                let e = 2 * t.radius;
                t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius);
            }
            class i_ {
                constructor(t, e) {
                    (this.container = e),
                        (this._calcPosition = (t, e, i, s = ib) => {
                            var o;
                            for (let [, s] of t.plugins) {
                                let t = void 0 !== s.particlePosition ? s.particlePosition(e, this) : void 0;
                                if (t) return tf.create(t.x, t.y, i);
                            }
                            let n = ((o = { size: t.canvas.size, position: e }), { x: o.position?.x ?? tz() * o.size.width, y: o.position?.y ?? tz() * o.size.height }),
                                a = tf.create(n.x, n.y, i),
                                r = this.getRadius(),
                                l = this.options.move.outModes,
                                c = (e) => {
                                    ix({ outMode: e, checkModes: [g.bounce], coord: a.x, maxCoord: t.canvas.size.width, setCb: (t) => (a.x += t), radius: r });
                                },
                                h = (e) => {
                                    ix({ outMode: e, checkModes: [g.bounce], coord: a.y, maxCoord: t.canvas.size.height, setCb: (t) => (a.y += t), radius: r });
                                };
                            return (c(l.left ?? l.default), c(l.right ?? l.default), h(l.top ?? l.default), h(l.bottom ?? l.default), this._checkOverlap(a, s)) ? this._calcPosition(t, void 0, i, s + 1) : a;
                        }),
                        (this._calculateVelocity = () => {
                            let t = (function (t) {
                                    let e = tv.origin;
                                    return (e.length = 1), (e.angle = t), e;
                                })(this.direction).copy(),
                                e = this.options.move;
                            if (e.direction === s.inside || e.direction === s.outside) return t;
                            let i = tT(tO(e.angle.value)),
                                o = tT(tO(e.angle.offset)),
                                n = { left: o - 0.5 * i, right: o + 0.5 * i };
                            return e.straight || (t.angle += tP(tD(n.left, n.right))), e.random && "number" == typeof e.speed && (t.length *= tz()), t;
                        }),
                        (this._checkOverlap = (t, e = ib) => {
                            let i = this.options.collisions,
                                s = this.getRadius();
                            if (!i.enable) return !1;
                            let o = i.overlap;
                            if (o.enable) return !1;
                            let n = o.retries;
                            if (n >= 0 && e > n) throw Error(`${ts} particle is overlapping and can't be placed`);
                            return !!this.container.particles.find((e) => tR(t, e.position) < s + e.getRadius());
                        }),
                        (this._getRollColor = (t) => {
                            if (!t || !this.roll || (!this.backColor && !this.roll.alter)) return t;
                            let e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                                i = this.roll.horizontal ? 0.5 * Math.PI : 0;
                            if (!(Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % 2)) return t;
                            if (this.backColor) return this.backColor;
                            if (this.roll.alter) {
                                var s, o;
                                return (s = this.roll.alter.type), (o = this.roll.alter.value), { h: t.h, s: t.s, l: t.l + (s === h.darken ? -1 : 1) * o };
                            }
                            return t;
                        }),
                        (this._initPosition = (t) => {
                            let e = this.container,
                                i = tO(this.options.zIndex.value);
                            (this.position = this._calcPosition(e, t, tk(i, 0, e.zLayers))), (this.initialPosition = this.position.copy());
                            let o = e.canvas.size;
                            switch (
                                ((this.moveCenter = { ...t7(this.options.move.center, o), radius: this.options.move.center.radius ?? 0, mode: this.options.move.center.mode ?? l.percent }),
                                (this.direction = (function (t, e, i) {
                                    if (tc(t)) return tT(t);
                                    switch (t) {
                                        case s.top:
                                            return -(0.5 * Math.PI);
                                        case s.topRight:
                                            return -(0.25 * Math.PI);
                                        case s.right:
                                            return 0;
                                        case s.bottomRight:
                                            return 0.25 * Math.PI;
                                        case s.bottom:
                                            return 0.5 * Math.PI;
                                        case s.bottomLeft:
                                            return 0.75 * Math.PI;
                                        case s.left:
                                            return Math.PI;
                                        case s.topLeft:
                                            return -(0.75 * Math.PI);
                                        case s.inside:
                                            return Math.atan2(i.y - e.y, i.x - e.x);
                                        case s.outside:
                                            return Math.atan2(e.y - i.y, e.x - i.x);
                                        default:
                                            return tz() * tw;
                                    }
                                })(this.options.move.direction, this.position, this.moveCenter)),
                                this.options.move.direction)
                            ) {
                                case s.inside:
                                    this.outType = x.inside;
                                    break;
                                case s.outside:
                                    this.outType = x.outside;
                            }
                            this.offset = tv.origin;
                        }),
                        (this._engine = t);
                }
                destroy(t) {
                    if (this.unbreakable || this.destroyed) return;
                    (this.destroyed = !0), (this.bubble.inRange = !1), (this.slow.inRange = !1);
                    let e = this.container,
                        i = this.pathGenerator,
                        s = e.shapeDrawers.get(this.shape);
                    for (let [, i] of (s?.particleDestroy?.(this), e.plugins)) i.particleDestroyed?.(this, t);
                    for (let i of e.particles.updaters) i.particleDestroyed?.(this, t);
                    i?.reset(this), this._engine.dispatchEvent(p.particleDestroyed, { container: this.container, data: { particle: this } });
                }
                draw(t) {
                    let e = this.container,
                        i = e.canvas;
                    for (let [, s] of e.plugins) i.drawParticlePlugin(s, this, t);
                    i.drawParticle(this, t);
                }
                getFillColor() {
                    return this._getRollColor(this.bubble.color ?? eu(this.color));
                }
                getMass() {
                    return this.getRadius() ** 2 * Math.PI * 0.5;
                }
                getPosition() {
                    return { x: this.position.x + this.offset.x, y: this.position.y + this.offset.y, z: this.position.z };
                }
                getRadius() {
                    return this.bubble.radius ?? this.size.value;
                }
                getStrokeColor() {
                    return this._getRollColor(this.bubble.color ?? eu(this.strokeColor));
                }
                init(t, e, i, s) {
                    let o = this.container,
                        n = this._engine;
                    (this.id = t),
                        (this.group = s),
                        (this.effectClose = !0),
                        (this.effectFill = !0),
                        (this.shapeClose = !0),
                        (this.shapeFill = !0),
                        (this.pathRotation = !1),
                        (this.lastPathTime = 0),
                        (this.destroyed = !1),
                        (this.unbreakable = !1),
                        (this.isRotating = !1),
                        (this.rotation = 0),
                        (this.misplaced = !1),
                        (this.retina = { maxDistance: {} }),
                        (this.outType = x.normal),
                        (this.ignoresResizeRatio = !0);
                    let a = o.retina.pixelRatio,
                        r = o.actualOptions,
                        l = iy(this._engine, o, r.particles),
                        { reduceDuplicates: c } = l,
                        h = l.effect.type,
                        d = l.shape.type;
                    (this.effect = t5(h, this.id, c)), (this.shape = t5(d, this.id, c));
                    let u = l.effect,
                        p = l.shape;
                    if (i) {
                        if (i.effect?.type) {
                            let t = t5(i.effect.type, this.id, c);
                            t && ((this.effect = t), u.load(i.effect));
                        }
                        if (i.shape?.type) {
                            let t = t5(i.shape.type, this.id, c);
                            t && ((this.shape = t), p.load(i.shape));
                        }
                    }
                    if (this.effect === iw) {
                        let t = [...this.container.effectDrawers.keys()];
                        this.effect = t[Math.floor(Math.random() * t.length)];
                    }
                    if (this.shape === iw) {
                        let t = [...this.container.shapeDrawers.keys()];
                        this.shape = t[Math.floor(Math.random() * t.length)];
                    }
                    (this.effectData = (function (t, e, i, s) {
                        let o = e.options[t];
                        if (o) return tj({ close: e.close, fill: e.fill }, t5(o, i, s));
                    })(this.effect, u, this.id, c)),
                        (this.shapeData = (function (t, e, i, s) {
                            let o = e.options[t];
                            if (o) return tj({ close: e.close, fill: e.fill }, t5(o, i, s));
                        })(this.shape, p, this.id, c)),
                        l.load(i);
                    let f = this.effectData;
                    f && l.load(f.particles);
                    let v = this.shapeData;
                    v && l.load(v.particles);
                    let y = new eB(n, o);
                    y.load(o.actualOptions.interactivity),
                        y.load(l.interactivity),
                        (this.interactivity = y),
                        (this.effectFill = f?.fill ?? l.effect.fill),
                        (this.effectClose = f?.close ?? l.effect.close),
                        (this.shapeFill = v?.fill ?? l.shape.fill),
                        (this.shapeClose = v?.close ?? l.shape.close),
                        (this.options = l);
                    let m = this.options.move.path;
                    (this.pathDelay = tO(m.delay.value) * ta),
                        m.generator && ((this.pathGenerator = this._engine.getPathGenerator(m.generator)), this.pathGenerator && o.addPath(m.generator, this.pathGenerator) && this.pathGenerator.init(o)),
                        o.retina.initParticle(this),
                        (this.size = t3(this.options.size, a)),
                        (this.bubble = { inRange: !1 }),
                        (this.slow = { inRange: !1, factor: 1 }),
                        this._initPosition(e),
                        (this.initialVelocity = this._calculateVelocity()),
                        (this.velocity = this.initialVelocity.copy()),
                        (this.moveDecay = 1 - tO(this.options.move.decay));
                    let g = o.particles;
                    g.setLastZIndex(this.position.z), (this.zIndexFactor = this.position.z / o.zLayers), (this.sides = 24);
                    let b = o.effectDrawers.get(this.effect);
                    !b && (b = this._engine.getEffectDrawer(this.effect)) && o.effectDrawers.set(this.effect, b), b?.loadEffect && b.loadEffect(this);
                    let w = o.shapeDrawers.get(this.shape);
                    !w && (w = this._engine.getShapeDrawer(this.shape)) && o.shapeDrawers.set(this.shape, w), w?.loadShape && w.loadShape(this);
                    let _ = w?.getSidesCount;
                    for (let t of (_ && (this.sides = _(this)), (this.spawning = !1), (this.shadowColor = ei(this.options.shadow.color)), g.updaters)) t.init(this);
                    for (let t of g.movers) t.init?.(this);
                    for (let [, t] of (b?.particleInit?.(o, this), w?.particleInit?.(o, this), o.plugins)) t.particleCreated?.(this);
                }
                isInsideCanvas() {
                    let t = this.getRadius(),
                        e = this.container.canvas.size,
                        i = this.position;
                    return i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t;
                }
                isVisible() {
                    return !this.destroyed && !this.spawning && this.isInsideCanvas();
                }
                reset() {
                    for (let t of this.container.particles.updaters) t.reset?.(this);
                }
            }
            class iz {
                constructor(t, e) {
                    (this.position = t), (this.particle = e);
                }
            }
            ((Y = _ || (_ = {})).circle = "circle"), (Y.rectangle = "rectangle");
            class ik {
                constructor(t, e, i) {
                    (this.position = { x: t, y: e }), (this.type = i);
                }
            }
            class iC extends ik {
                constructor(t, e, i) {
                    super(t, e, _.circle), (this.radius = i);
                }
                contains(t) {
                    return tR(t, this.position) <= this.radius;
                }
                intersects(t) {
                    let e = this.position,
                        i = t.position,
                        s = { x: Math.abs(i.x - e.x), y: Math.abs(i.y - e.y) },
                        o = this.radius;
                    if (t instanceof iC || t.type === _.circle) return o + t.radius > Math.sqrt(s.x ** 2 + s.y ** 2);
                    if (t instanceof iP || t.type === _.rectangle) {
                        let { width: e, height: i } = t.size;
                        return Math.pow(s.x - e, 2) + Math.pow(s.y - i, 2) <= o ** 2 || (s.x <= o + e && s.y <= o + i) || s.x <= e || s.y <= i;
                    }
                    return !1;
                }
            }
            class iP extends ik {
                constructor(t, e, i, s) {
                    super(t, e, _.rectangle), (this.size = { height: s, width: i });
                }
                contains(t) {
                    let e = this.size.width,
                        i = this.size.height,
                        s = this.position;
                    return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
                }
                intersects(t) {
                    if (t instanceof iC) return t.intersects(this);
                    let e = this.size.width,
                        i = this.size.height,
                        s = this.position,
                        o = t.position,
                        n = t instanceof iP ? t.size : { width: 0, height: 0 },
                        a = n.width,
                        r = n.height;
                    return o.x < s.x + e && o.x + a > s.x && o.y < s.y + i && o.y + r > s.y;
                }
            }
            class iO {
                constructor(t, e) {
                    (this.rectangle = t),
                        (this.capacity = e),
                        (this._subdivide = () => {
                            let { x: t, y: e } = this.rectangle.position,
                                { width: i, height: s } = this.rectangle.size,
                                { capacity: o } = this;
                            for (let n = 0; n < 4; n++) {
                                let a = n % 2;
                                this._subs.push(new iO(new iP(t + 0.5 * i * a, e + 0.5 * s * (Math.round(0.5 * n) - a), 0.5 * i, 0.5 * s), o));
                            }
                            this._divided = !0;
                        }),
                        (this._points = []),
                        (this._divided = !1),
                        (this._subs = []);
                }
                insert(t) {
                    return !!this.rectangle.contains(t.position) && (this._points.length < this.capacity ? (this._points.push(t), !0) : (this._divided || this._subdivide(), this._subs.some((e) => e.insert(t))));
                }
                query(t, e) {
                    let i = [];
                    if (!t.intersects(this.rectangle)) return [];
                    for (let s of this._points) (!t.contains(s.position) && tR(t.position, s.position) > s.particle.getRadius() && (!e || e(s.particle))) || i.push(s.particle);
                    if (this._divided) for (let s of this._subs) i.push(...s.query(t, e));
                    return i;
                }
                queryCircle(t, e, i) {
                    return this.query(new iC(t.x, t.y, e), i);
                }
                queryRectangle(t, e, i) {
                    return this.query(new iP(t.x, t.y, e.width, e.height), i);
                }
            }
            let iM = (t) => {
                let { height: e, width: i } = t;
                return new iP(-0.25 * i, -0.25 * e, 1.5 * i, 1.5 * e);
            };
            class iS {
                constructor(t, e) {
                    (this._addToPool = (...t) => {
                        this._pool.push(...t);
                    }),
                        (this._applyDensity = (t, e, i) => {
                            let s = t.number;
                            if (!t.number.density?.enable) {
                                void 0 === i ? (this._limit = s.limit.value) : s.limit && this._groupLimits.set(i, s.limit.value);
                                return;
                            }
                            let o = this._initDensityFactor(s.density),
                                n = s.value,
                                a = s.limit.value > 0 ? s.limit.value : n,
                                r = Math.min(n, a) * o + e,
                                l = Math.min(this.count, this.filter((t) => t.group === i).length);
                            void 0 === i ? (this._limit = s.limit.value * o) : this._groupLimits.set(i, s.limit.value * o), l < r ? this.push(Math.abs(r - l), void 0, t, i) : l > r && this.removeQuantity(l - r, i);
                        }),
                        (this._initDensityFactor = (t) => {
                            let e = this._container;
                            if (!e.canvas.element || !t.enable) return 1;
                            let i = e.canvas.element,
                                s = e.retina.pixelRatio;
                            return (i.width * i.height) / (t.height * t.width * s ** 2);
                        }),
                        (this._pushParticle = (t, e, i, s) => {
                            try {
                                let o = this._pool.pop();
                                o || (o = new i_(this._engine, this._container)), o.init(this._nextId, t, e, i);
                                let n = !0;
                                if ((s && (n = s(o)), !n)) return;
                                return this._array.push(o), this._zArray.push(o), this._nextId++, this._engine.dispatchEvent(p.particleAdded, { container: this._container, data: { particle: o } }), o;
                            } catch (t) {
                                tq.warning(`${ts} adding particle: ${t}`);
                            }
                        }),
                        (this._removeParticle = (t, e, i) => {
                            let s = this._array[t];
                            if (!s || s.group !== e) return !1;
                            let o = this._zArray.indexOf(s);
                            return this._array.splice(t, 1), this._zArray.splice(o, 1), s.destroy(i), this._engine.dispatchEvent(p.particleRemoved, { container: this._container, data: { particle: s } }), this._addToPool(s), !0;
                        }),
                        (this._engine = t),
                        (this._container = e),
                        (this._nextId = 0),
                        (this._array = []),
                        (this._zArray = []),
                        (this._pool = []),
                        (this._limit = 0),
                        (this._groupLimits = new Map()),
                        (this._needsSort = !1),
                        (this._lastZIndex = 0),
                        (this._interactionManager = new ig(t, e)),
                        (this._pluginsInitialized = !1);
                    let i = e.canvas.size;
                    (this.quadTree = new iO(iM(i), 4)), (this.movers = []), (this.updaters = []);
                }
                get count() {
                    return this._array.length;
                }
                addManualParticles() {
                    let t = this._container;
                    t.actualOptions.manualParticles.forEach((e) => this.addParticle(e.position ? t7(e.position, t.canvas.size) : void 0, e.options));
                }
                addParticle(t, e, i, s) {
                    let o = this._container.actualOptions.particles.number.limit.mode,
                        n = void 0 === i ? this._limit : this._groupLimits.get(i) ?? this._limit,
                        a = this.count;
                    if (n > 0)
                        switch (o) {
                            case b.delete: {
                                let t = a + 1 - n;
                                t > 0 && this.removeQuantity(t);
                                break;
                            }
                            case b.wait:
                                if (a >= n) return;
                        }
                    return this._pushParticle(t, e, i, s);
                }
                clear() {
                    (this._array = []), (this._zArray = []), (this._pluginsInitialized = !1);
                }
                destroy() {
                    (this._array = []), (this._zArray = []), (this.movers = []), (this.updaters = []);
                }
                draw(t) {
                    let e = this._container,
                        i = e.canvas;
                    for (let [, s] of (i.clear(), this.update(t), e.plugins)) i.drawPlugin(s, t);
                    for (let e of this._zArray) e.draw(t);
                }
                filter(t) {
                    return this._array.filter(t);
                }
                find(t) {
                    return this._array.find(t);
                }
                get(t) {
                    return this._array[t];
                }
                handleClickMode(t) {
                    this._interactionManager.handleClickMode(t);
                }
                async init() {
                    let t = this._container,
                        e = t.actualOptions;
                    (this._lastZIndex = 0), (this._needsSort = !1), await this.initPlugins();
                    let i = !1;
                    for (let [, e] of t.plugins) if ((i = e.particlesInitialization?.() ?? i)) break;
                    if ((this.addManualParticles(), !i)) {
                        let t = e.particles,
                            i = t.groups;
                        for (let e in i) {
                            let s = i[e];
                            for (let i = this.count, o = 0; o < s.number?.value && i < t.number.value; i++, o++) this.addParticle(void 0, s, e);
                        }
                        for (let e = this.count; e < t.number.value; e++) this.addParticle();
                    }
                }
                async initPlugins() {
                    if (this._pluginsInitialized) return;
                    let t = this._container;
                    for (let [, e] of ((this.movers = await this._engine.getMovers(t, !0)), (this.updaters = await this._engine.getUpdaters(t, !0)), await this._interactionManager.init(), t.pathGenerators)) e.init(t);
                }
                push(t, e, i, s) {
                    for (let o = 0; o < t; o++) this.addParticle(e?.position, i, s);
                }
                async redraw() {
                    this.clear(), await this.init(), this.draw({ value: 0, factor: 0 });
                }
                remove(t, e, i) {
                    this.removeAt(this._array.indexOf(t), void 0, e, i);
                }
                removeAt(t, e = 1, i, s) {
                    if (t < 0 || t > this.count) return;
                    let o = 0;
                    for (let n = t; o < e && n < this.count; n++) this._removeParticle(n--, i, s) && o++;
                }
                removeQuantity(t, e) {
                    this.removeAt(0, t, e);
                }
                setDensity() {
                    let t = this._container.actualOptions,
                        e = t.particles.groups;
                    for (let t in e) this._applyDensity(e[t], 0, t);
                    this._applyDensity(t.particles, t.manualParticles.length);
                }
                setLastZIndex(t) {
                    (this._lastZIndex = t), (this._needsSort = this._needsSort || this._lastZIndex < t);
                }
                setResizeFactor(t) {
                    this._resizeFactor = t;
                }
                update(t) {
                    let e = this._container,
                        i = new Set();
                    for (let [, t] of ((this.quadTree = new iO(iM(e.canvas.size), 4)), e.pathGenerators)) t.update();
                    for (let [, i] of e.plugins) i.update?.(t);
                    let s = this._resizeFactor;
                    for (let e of this._array) {
                        for (let [, i] of (s && !e.ignoresResizeRatio && ((e.position.x *= s.width), (e.position.y *= s.height), (e.initialPosition.x *= s.width), (e.initialPosition.y *= s.height)),
                        (e.ignoresResizeRatio = !1),
                        this._interactionManager.reset(e),
                        this._container.plugins)) {
                            if (e.destroyed) break;
                            i.particleUpdate?.(e, t);
                        }
                        for (let i of this.movers) i.isEnabled(e) && i.move(e, t);
                        if (e.destroyed) {
                            i.add(e);
                            continue;
                        }
                        this.quadTree.insert(new iz(e.getPosition(), e));
                    }
                    if (i.size) {
                        let t = (t) => !i.has(t);
                        for (let e of ((this._array = this.filter(t)), (this._zArray = this._zArray.filter(t)), i)) this._engine.dispatchEvent(p.particleRemoved, { container: this._container, data: { particle: e } });
                        this._addToPool(...i);
                    }
                    for (let e of (this._interactionManager.externalInteract(t), this._array)) {
                        for (let i of this.updaters) i.update(e, t);
                        e.destroyed || e.spawning || this._interactionManager.particlesInteract(e, t);
                    }
                    if ((delete this._resizeFactor, this._needsSort)) {
                        let t = this._zArray;
                        t.sort((t, e) => e.position.z - t.position.z || t.id - e.id), (this._lastZIndex = t[t.length - 1].position.z), (this._needsSort = !1);
                    }
                }
            }
            class iD {
                constructor(t) {
                    (this.container = t), (this.pixelRatio = 1), (this.reduceFactor = 1);
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions;
                    (this.pixelRatio = !e.detectRetina || tG() ? 1 : window.devicePixelRatio), (this.reduceFactor = 1);
                    let i = this.pixelRatio,
                        s = t.canvas;
                    if (s.element) {
                        let t = s.element;
                        (s.size.width = t.offsetWidth * i), (s.size.height = t.offsetHeight * i);
                    }
                    let o = e.particles,
                        n = o.move;
                    (this.maxSpeed = tO(n.gravity.maxSpeed) * i), (this.sizeAnimationSpeed = tO(o.size.animation.speed) * i);
                }
                initParticle(t) {
                    let e = t.options,
                        i = this.pixelRatio,
                        s = e.move,
                        o = s.distance,
                        n = t.retina;
                    (n.moveDrift = tO(s.drift) * i), (n.moveSpeed = tO(s.speed) * i), (n.sizeAnimationSpeed = tO(e.size.animation.speed) * i);
                    let a = n.maxDistance;
                    (a.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0), (a.vertical = void 0 !== o.vertical ? o.vertical * i : void 0), (n.maxSpeed = tO(s.gravity.maxSpeed) * i);
                }
            }
            function iE(t) {
                return t && !t.destroyed;
            }
            function iR(t, e, ...i) {
                let s = new im(t, e);
                return iv(s, ...i), s;
            }
            class iT {
                constructor(t, e, i) {
                    (this._intersectionManager = (t) => {
                        if (iE(this) && this.actualOptions.pauseOnOutsideViewport) for (let e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause());
                    }),
                        (this._nextFrame = (t) => {
                            try {
                                if (!this._smooth && void 0 !== this._lastFrameTime && t < this._lastFrameTime + ta / this.fpsLimit) {
                                    this.draw(!1);
                                    return;
                                }
                                this._lastFrameTime ??= t;
                                let e = (function (t, e = 60, i = !1) {
                                    return { value: t, factor: i ? 60 / e : (60 * t) / ta };
                                })(t - this._lastFrameTime, this.fpsLimit, this._smooth);
                                if ((this.addLifeTime(e.value), (this._lastFrameTime = t), e.value > ta)) {
                                    this.draw(!1);
                                    return;
                                }
                                if ((this.particles.draw(e), !this.alive())) {
                                    this.destroy();
                                    return;
                                }
                                this.animationStatus && this.draw(!1);
                            } catch (t) {
                                tq.error(`${ts} in animation loop`, t);
                            }
                        }),
                        (this._engine = t),
                        (this.id = Symbol(e)),
                        (this.fpsLimit = 120),
                        (this._smooth = !1),
                        (this._delay = 0),
                        (this._duration = 0),
                        (this._lifeTime = 0),
                        (this._firstStart = !0),
                        (this.started = !1),
                        (this.destroyed = !1),
                        (this._paused = !0),
                        (this._lastFrameTime = 0),
                        (this.zLayers = 100),
                        (this.pageHidden = !1),
                        (this._clickHandlers = new Map()),
                        (this._sourceOptions = i),
                        (this._initialSourceOptions = i),
                        (this.retina = new iD(this)),
                        (this.canvas = new ex(this)),
                        (this.particles = new iS(this._engine, this)),
                        (this.pathGenerators = new Map()),
                        (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
                        (this.plugins = new Map()),
                        (this.effectDrawers = new Map()),
                        (this.shapeDrawers = new Map()),
                        (this._options = iR(this._engine, this)),
                        (this.actualOptions = iR(this._engine, this)),
                        (this._eventListeners = new ez(this)),
                        (this._intersectionObserver = (function (t) {
                            if (!tG() && "undefined" != typeof IntersectionObserver) return new IntersectionObserver(t);
                        })((t) => this._intersectionManager(t))),
                        this._engine.dispatchEvent(p.containerBuilt, { container: this });
                }
                get animationStatus() {
                    return !this._paused && !this.pageHidden && iE(this);
                }
                get options() {
                    return this._options;
                }
                get sourceOptions() {
                    return this._sourceOptions;
                }
                addClickHandler(t) {
                    if (!iE(this)) return;
                    let e = this.interactivity.element;
                    if (!e) return;
                    let i = (e, i, s) => {
                            if (!iE(this)) return;
                            let o = this.retina.pixelRatio,
                                n = { x: i.x * o, y: i.y * o };
                            t(e, this.particles.quadTree.queryCircle(n, s * o));
                        },
                        s = !1,
                        o = !1;
                    for (let [t, n] of (this._clickHandlers.set("click", (t) => {
                        if (!iE(this)) return;
                        let e = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
                        i(t, e, 1);
                    }),
                    this._clickHandlers.set("touchstart", () => {
                        iE(this) && ((s = !0), (o = !1));
                    }),
                    this._clickHandlers.set("touchmove", () => {
                        iE(this) && (o = !0);
                    }),
                    this._clickHandlers.set("touchend", (t) => {
                        if (iE(this)) {
                            if (s && !o) {
                                let e = t.touches[t.touches.length - 1];
                                if (!e && !(e = t.changedTouches[t.changedTouches.length - 1])) return;
                                let s = this.canvas.element,
                                    o = s ? s.getBoundingClientRect() : void 0;
                                i(t, { x: e.clientX - (o ? o.left : 0), y: e.clientY - (o ? o.top : 0) }, Math.max(e.radiusX, e.radiusY));
                            }
                            (s = !1), (o = !1);
                        }
                    }),
                    this._clickHandlers.set("touchcancel", () => {
                        iE(this) && ((s = !1), (o = !1));
                    }),
                    this._clickHandlers))
                        e.addEventListener(t, n);
                }
                addLifeTime(t) {
                    this._lifeTime += t;
                }
                addPath(t, e, i = !1) {
                    return !(!iE(this) || (!i && this.pathGenerators.has(t))) && (this.pathGenerators.set(t, e), !0);
                }
                alive() {
                    return !this._duration || this._lifeTime <= this._duration;
                }
                clearClickHandlers() {
                    if (iE(this)) {
                        for (let [t, e] of this._clickHandlers) this.interactivity.element?.removeEventListener(t, e);
                        this._clickHandlers.clear();
                    }
                }
                destroy(t = !0) {
                    if (iE(this)) {
                        for (let [, t] of (this.stop(), this.clearClickHandlers(), this.particles.destroy(), this.canvas.destroy(), this.effectDrawers)) t.destroy?.(this);
                        for (let [, t] of this.shapeDrawers) t.destroy?.(this);
                        for (let t of this.effectDrawers.keys()) this.effectDrawers.delete(t);
                        for (let t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
                        if ((this._engine.clearPlugins(this), (this.destroyed = !0), t)) {
                            let t = this._engine.items,
                                e = t.findIndex((t) => t === this);
                            e >= 0 && t.splice(e, 1);
                        }
                        this._engine.dispatchEvent(p.containerDestroyed, { container: this });
                    }
                }
                draw(t) {
                    if (!iE(this)) return;
                    let e = t,
                        i = (t) => {
                            e && ((this._lastFrameTime = void 0), (e = !1)), this._nextFrame(t);
                        };
                    this._drawAnimationFrame = tm((t) => i(t));
                }
                async export(t, e = {}) {
                    for (let [, i] of this.plugins) {
                        if (!i.export) continue;
                        let s = await i.export(t, e);
                        if (s.supported) return s.blob;
                    }
                    tq.error(`${ts} - Export plugin with type ${t} not found`);
                }
                handleClickMode(t) {
                    if (iE(this)) for (let [, e] of (this.particles.handleClickMode(t), this.plugins)) e.handleClickMode?.(t);
                }
                async init() {
                    if (!iE(this)) return;
                    for (let t of this._engine.getSupportedEffects()) {
                        let e = this._engine.getEffectDrawer(t);
                        e && this.effectDrawers.set(t, e);
                    }
                    for (let t of this._engine.getSupportedShapes()) {
                        let e = this._engine.getShapeDrawer(t);
                        e && this.shapeDrawers.set(t, e);
                    }
                    for (let [t, e] of (await this.particles.initPlugins(),
                    (this._options = iR(this._engine, this, this._initialSourceOptions, this.sourceOptions)),
                    (this.actualOptions = iR(this._engine, this, this._options)),
                    await this._engine.getAvailablePlugins(this)))
                        this.plugins.set(t, e);
                    this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize();
                    let { zLayers: t, duration: e, delay: i, fpsLimit: s, smooth: o } = this.actualOptions;
                    for (let [, n] of ((this.zLayers = t), (this._duration = tO(e) * ta), (this._delay = tO(i) * ta), (this._lifeTime = 0), (this.fpsLimit = s > 0 ? s : 120), (this._smooth = o), this.effectDrawers)) await n.init?.(this);
                    for (let [, t] of this.shapeDrawers) await t.init?.(this);
                    for (let [, t] of this.plugins) await t.init?.();
                    for (let [, t] of (this._engine.dispatchEvent(p.containerInit, { container: this }), await this.particles.init(), this.particles.setDensity(), this.plugins)) t.particlesSetup?.();
                    this._engine.dispatchEvent(p.particlesSetup, { container: this });
                }
                async loadTheme(t) {
                    iE(this) && ((this._currentTheme = t), await this.refresh());
                }
                pause() {
                    if (iE(this) && (void 0 !== this._drawAnimationFrame && (tg(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
                        for (let [, t] of this.plugins) t.pause?.();
                        this.pageHidden || (this._paused = !0), this._engine.dispatchEvent(p.containerPaused, { container: this });
                    }
                }
                play(t) {
                    if (!iE(this)) return;
                    let e = this._paused || t;
                    if (this._firstStart && !this.actualOptions.autoPlay) {
                        this._firstStart = !1;
                        return;
                    }
                    if ((this._paused && (this._paused = !1), e)) for (let [, t] of this.plugins) t.play && t.play();
                    this._engine.dispatchEvent(p.containerPlay, { container: this }), this.draw(e ?? !1);
                }
                async refresh() {
                    if (iE(this)) return this.stop(), this.start();
                }
                async reset(t) {
                    if (iE(this))
                        return (
                            (this._initialSourceOptions = t),
                            (this._sourceOptions = t),
                            (this._options = iR(this._engine, this, this._initialSourceOptions, this.sourceOptions)),
                            (this.actualOptions = iR(this._engine, this, this._options)),
                            this.refresh()
                        );
                }
                async start() {
                    iE(this) &&
                        !this.started &&
                        (await this.init(),
                        (this.started = !0),
                        await new Promise((t) => {
                            let e = async () => {
                                for (let [, t] of (this._eventListeners.addListeners(),
                                this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element),
                                this.plugins))
                                    await t.start?.();
                                this._engine.dispatchEvent(p.containerStarted, { container: this }), this.play(), t();
                            };
                            this._delayTimeout = setTimeout(() => void e(), this._delay);
                        }));
                }
                stop() {
                    if (iE(this) && this.started) {
                        for (let [, t] of (this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout),
                        (this._firstStart = !0),
                        (this.started = !1),
                        this._eventListeners.removeListeners(),
                        this.pause(),
                        this.particles.clear(),
                        this.canvas.stop(),
                        this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element),
                        this.plugins))
                            t.stop?.();
                        for (let t of this.plugins.keys()) this.plugins.delete(t);
                        (this._sourceOptions = this._options), this._engine.dispatchEvent(p.containerStopped, { container: this });
                    }
                }
                updateActualOptions() {
                    this.actualOptions.responsive = [];
                    let t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                    return this.actualOptions.setTheme(this._currentTheme), this._responsiveMaxWidth !== t && ((this._responsiveMaxWidth = t), !0);
                }
            }
            class iI {
                constructor() {
                    this._listeners = new Map();
                }
                addEventListener(t, e) {
                    this.removeEventListener(t, e);
                    let i = this._listeners.get(t);
                    i || ((i = []), this._listeners.set(t, i)), i.push(e);
                }
                dispatchEvent(t, e) {
                    let i = this._listeners.get(t);
                    i?.forEach((t) => t(e));
                }
                hasEventListener(t) {
                    return !!this._listeners.get(t);
                }
                removeAllEventListeners(t) {
                    t ? this._listeners.delete(t) : (this._listeners = new Map());
                }
                removeEventListener(t, e) {
                    let i = this._listeners.get(t);
                    if (!i) return;
                    let s = i.length,
                        o = i.indexOf(e);
                    o < 0 || (1 === s ? this._listeners.delete(t) : i.splice(o, 1));
                }
            }
            async function iL(t, e, i, s = !1) {
                let o = e.get(t);
                return (!o || s) && ((o = await Promise.all([...i.values()].map((e) => e(t)))), e.set(t, o)), o;
            }
            async function iB(t) {
                let e = t5(t.url, t.index);
                if (!e) return t.fallback;
                let i = await fetch(e);
                return i.ok ? await i.json() : (tq.error(`${ts} ${i.status} while retrieving config file`), t.fallback);
            }
            let iA = "true",
                iq = "false",
                iF = "canvas",
                iW = (t) => {
                    let e;
                    if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === iF) (e = t).dataset[Q] || (e.dataset[Q] = iq);
                    else {
                        let i = t.getElementsByTagName(iF);
                        i.length ? ((e = i[0]).dataset[Q] = iq) : (((e = document.createElement(iF)).dataset[Q] = iA), t.appendChild(e));
                    }
                    let i = "100%";
                    return e.style.width || (e.style.width = i), e.style.height || (e.style.height = i), e;
                },
                iG = (t, e) => {
                    let i = e ?? document.getElementById(t);
                    return i || (((i = document.createElement("div")).id = t), (i.dataset[Q] = iA), document.body.append(i)), i;
                };
            class iH {
                constructor() {
                    (this._configs = new Map()),
                        (this._domArray = []),
                        (this._eventDispatcher = new iI()),
                        (this._initialized = !1),
                        (this.plugins = []),
                        (this._initializers = { interactors: new Map(), movers: new Map(), updaters: new Map() }),
                        (this.interactors = new Map()),
                        (this.movers = new Map()),
                        (this.updaters = new Map()),
                        (this.presets = new Map()),
                        (this.effectDrawers = new Map()),
                        (this.shapeDrawers = new Map()),
                        (this.pathGenerators = new Map());
                }
                get configs() {
                    let t = {};
                    for (let [e, i] of this._configs) t[e] = i;
                    return t;
                }
                get items() {
                    return this._domArray;
                }
                get version() {
                    return "3.5.0";
                }
                addConfig(t) {
                    let e = t.key ?? t.name ?? "default";
                    this._configs.set(e, t), this._eventDispatcher.dispatchEvent(p.configAdded, { data: { name: e, config: t } });
                }
                async addEffect(t, e, i = !0) {
                    t2(t, (t) => {
                        this.getEffectDrawer(t) || this.effectDrawers.set(t, e);
                    }),
                        await this.refresh(i);
                }
                addEventListener(t, e) {
                    this._eventDispatcher.addEventListener(t, e);
                }
                async addInteractor(t, e, i = !0) {
                    this._initializers.interactors.set(t, e), await this.refresh(i);
                }
                async addMover(t, e, i = !0) {
                    this._initializers.movers.set(t, e), await this.refresh(i);
                }
                async addParticleUpdater(t, e, i = !0) {
                    this._initializers.updaters.set(t, e), await this.refresh(i);
                }
                async addPathGenerator(t, e, i = !0) {
                    this.getPathGenerator(t) || this.pathGenerators.set(t, e), await this.refresh(i);
                }
                async addPlugin(t, e = !0) {
                    this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e);
                }
                async addPreset(t, e, i = !1, s = !0) {
                    (i || !this.getPreset(t)) && this.presets.set(t, e), await this.refresh(s);
                }
                async addShape(t, e = !0) {
                    for (let e of t.validTypes) this.getShapeDrawer(e) || this.shapeDrawers.set(e, t);
                    await this.refresh(e);
                }
                clearPlugins(t) {
                    this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t);
                }
                dispatchEvent(t, e) {
                    this._eventDispatcher.dispatchEvent(t, e);
                }
                dom() {
                    return this.items;
                }
                domItem(t) {
                    return this.item(t);
                }
                async getAvailablePlugins(t) {
                    let e = new Map();
                    for (let i of this.plugins) i.needsPlugin(t.actualOptions) && e.set(i.id, await i.getPlugin(t));
                    return e;
                }
                getEffectDrawer(t) {
                    return this.effectDrawers.get(t);
                }
                async getInteractors(t, e = !1) {
                    return iL(t, this.interactors, this._initializers.interactors, e);
                }
                async getMovers(t, e = !1) {
                    return iL(t, this.movers, this._initializers.movers, e);
                }
                getPathGenerator(t) {
                    return this.pathGenerators.get(t);
                }
                getPlugin(t) {
                    return this.plugins.find((e) => e.id === t);
                }
                getPreset(t) {
                    return this.presets.get(t);
                }
                getShapeDrawer(t) {
                    return this.shapeDrawers.get(t);
                }
                getSupportedEffects() {
                    return this.effectDrawers.keys();
                }
                getSupportedShapes() {
                    return this.shapeDrawers.keys();
                }
                async getUpdaters(t, e = !1) {
                    return iL(t, this.updaters, this._initializers.updaters, e);
                }
                init() {
                    this._initialized || (this._initialized = !0);
                }
                item(t) {
                    let { items: e } = this,
                        i = e[t];
                    if (!i || i.destroyed) {
                        e.splice(t, 1);
                        return;
                    }
                    return i;
                }
                async load(t) {
                    let e = t.id ?? t.element?.id ?? `tsparticles${Math.floor(1e4 * tz())}`,
                        { index: i, url: s } = t,
                        o = t5(s ? await iB({ fallback: t.options, url: s, index: i }) : t.options, i),
                        { items: n } = this,
                        a = n.findIndex((t) => t.id.description === e),
                        r = new iT(this, e, o);
                    if (a >= 0) {
                        let t = this.item(a);
                        t && !t.destroyed && t.destroy(!1), n.splice(a, t ? 1 : 0, r);
                    } else n.push(r);
                    let l = iW(iG(e, t.element));
                    return r.canvas.loadCanvas(l), await r.start(), r;
                }
                loadOptions(t, e) {
                    this.plugins.forEach((i) => i.loadOptions?.(t, e));
                }
                loadParticlesOptions(t, e, ...i) {
                    let s = this.updaters.get(t);
                    s && s.forEach((t) => t.loadOptions?.(e, ...i));
                }
                async refresh(t = !0) {
                    t && (await Promise.all(this.items.map((t) => t.refresh())));
                }
                removeEventListener(t, e) {
                    this._eventDispatcher.removeEventListener(t, e);
                }
                setOnClickHandler(t) {
                    let { items: e } = this;
                    if (!e.length) throw Error(`${ts} can only set click handlers after calling tsParticles.load()`);
                    e.forEach((e) => e.addClickHandler(t));
                }
            }
            ((X = z || (z = {}))[(X.h = 1)] = "h"), (X[(X.s = 2)] = "s"), (X[(X.l = 3)] = "l"), (X[(X.a = 5)] = "a");
            class i$ {
                constructor() {
                    (this.key = "hsl"), (this.stringPrefix = "hsl");
                }
                handleColor(t) {
                    let e = t.value.hsl ?? t.value;
                    if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return en(e);
                }
                handleRangeColor(t) {
                    let e = t.value.hsl ?? t.value;
                    if (void 0 !== e.h && void 0 !== e.l) return en({ h: tO(e.h), l: tO(e.l), s: tO(e.s) });
                }
                parseString(t) {
                    if (!t.startsWith("hsl")) return;
                    let e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e
                        ? (function (t) {
                              let e = en(t);
                              return { a: t.a, b: e.b, g: e.g, r: e.r };
                          })({ a: e.length > 4 ? tA(e[z.a]) : 1, h: parseInt(e[z.h], 10), l: parseInt(e[z.l], 10), s: parseInt(e[z.s], 10) })
                        : void 0;
                }
            }
            ((j = k || (k = {}))[(j.r = 1)] = "r"), (j[(j.g = 2)] = "g"), (j[(j.b = 3)] = "b"), (j[(j.a = 5)] = "a");
            class iV {
                constructor() {
                    (this.key = "rgb"), (this.stringPrefix = "rgb");
                }
                handleColor(t) {
                    let e = t.value.rgb ?? t.value;
                    if (void 0 !== e.r) return e;
                }
                handleRangeColor(t) {
                    let e = t.value.rgb ?? t.value;
                    if (void 0 !== e.r) return { r: tO(e.r), g: tO(e.g), b: tO(e.b) };
                }
                parseString(t) {
                    if (!t.startsWith(this.stringPrefix)) return;
                    let e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e ? { a: e.length > 4 ? tA(e[k.a]) : 1, b: parseInt(e[k.b], 10), g: parseInt(e[k.g], 10), r: parseInt(e[k.r], 10) } : void 0;
                }
            }
            class iZ {
                constructor(t) {
                    (this.type = w.external), (this.container = t);
                }
            }
            class iU {
                constructor(t) {
                    (this.type = w.particles), (this.container = t);
                }
            }
            ((N = C || (C = {})).clockwise = "clockwise"),
                (N.counterClockwise = "counter-clockwise"),
                (N.random = "random"),
                ((K = P || (P = {})).linear = "linear"),
                (K.radial = "radial"),
                (K.random = "random"),
                ((J = O || (O = {})).easeInBack = "ease-in-back"),
                (J.easeInCirc = "ease-in-circ"),
                (J.easeInCubic = "ease-in-cubic"),
                (J.easeInLinear = "ease-in-linear"),
                (J.easeInQuad = "ease-in-quad"),
                (J.easeInQuart = "ease-in-quart"),
                (J.easeInQuint = "ease-in-quint"),
                (J.easeInExpo = "ease-in-expo"),
                (J.easeInSine = "ease-in-sine"),
                (J.easeOutBack = "ease-out-back"),
                (J.easeOutCirc = "ease-out-circ"),
                (J.easeOutCubic = "ease-out-cubic"),
                (J.easeOutLinear = "ease-out-linear"),
                (J.easeOutQuad = "ease-out-quad"),
                (J.easeOutQuart = "ease-out-quart"),
                (J.easeOutQuint = "ease-out-quint"),
                (J.easeOutExpo = "ease-out-expo"),
                (J.easeOutSine = "ease-out-sine"),
                (J.easeInOutBack = "ease-in-out-back"),
                (J.easeInOutCirc = "ease-in-out-circ"),
                (J.easeInOutCubic = "ease-in-out-cubic"),
                (J.easeInOutLinear = "ease-in-out-linear"),
                (J.easeInOutQuad = "ease-in-out-quad"),
                (J.easeInOutQuart = "ease-in-out-quart"),
                (J.easeInOutQuint = "ease-in-out-quint"),
                (J.easeInOutExpo = "ease-in-out-expo"),
                (J.easeInOutSine = "ease-in-out-sine");
            let iY = (function () {
                let t = new iV(),
                    e = new i$();
                ee(t), ee(e);
                let i = new iH();
                return i.init(), i;
            })();
            tG() || (window.tsParticles = iY);
        },
        5293: function (t, e, i) {
            i.d(e, {
                E: function () {
                    return y;
                },
            });
            class s {
                constructor() {
                    (this.color = !0), (this.opacity = !1);
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = t.color), void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            var o = i(9280);
            class n {
                constructor() {
                    (this.filter = (t) => t.a > 0), (this.offset = 4);
                }
                load(t) {
                    if (t) {
                        if (void 0 !== t.filter) {
                            if ((0, o.HD0)(t.filter)) {
                                if (Object.hasOwn(window, t.filter)) {
                                    let e = window[t.filter];
                                    (0, o.mf2)(e) && (this.filter = e);
                                }
                            } else this.filter = t.filter;
                        }
                        void 0 !== t.offset && (this.offset = t.offset);
                    }
                }
            }
            class a {
                constructor() {
                    this.src = "";
                }
                load(t) {
                    t && void 0 !== t.src && (this.src = t.src);
                }
            }
            class r {
                constructor() {
                    (this.family = "sans-serif"), (this.size = 100);
                }
                load(t) {
                    t &&
                        (void 0 !== t.family && (this.family = t.family),
                        void 0 !== t.size && (this.size = t.size),
                        void 0 !== t.style && (this.style = t.style),
                        void 0 !== t.variant && (this.variant = t.variant),
                        void 0 !== t.weight && (this.weight = t.weight));
                }
            }
            class l {
                constructor() {
                    (this.separator = "\n"), (this.spacing = 10);
                }
                load(t) {
                    t && (void 0 !== t.separator && (this.separator = t.separator), void 0 !== t.spacing && (this.spacing = t.spacing));
                }
            }
            class c {
                constructor() {
                    (this.color = "#000000"), (this.font = new r()), (this.lines = new l()), (this.text = "");
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = t.color), this.font.load(t.font), this.lines.load(t.lines), void 0 !== t.text && (this.text = t.text));
                }
            }
            class h {
                constructor() {
                    (this.enable = !1), (this.override = new s()), (this.pixels = new n()), (this.position = { x: 50, y: 50 }), (this.scale = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.element && t.element instanceof HTMLCanvasElement && (this.element = t.element),
                        void 0 !== t.enable && (this.enable = t.enable),
                        t.image && (this.image || (this.image = new a()), this.image.load(t.image)),
                        this.pixels.load(t.pixels),
                        t.position && (this.position = { x: t.position.x ?? this.position.x, y: t.position.y ?? this.position.y }),
                        this.override.load(t.override),
                        void 0 !== t.scale && (this.scale = t.scale),
                        void 0 !== t.selector && (this.selector = t.selector),
                        t.text && (this.text || (this.text = new c()), this.text.load(t.text)));
                }
            }
            let d = { x: 0, y: 0 };
            function u(t, e, i, s = !0) {
                let o = t.getImageData(d.x, d.y, e.width, e.height).data;
                s && t.clearRect(d.x, d.y, e.width, e.height);
                let n = [];
                for (let t = 0; t < o.length; t += i) {
                    let s = t / i,
                        a = { x: s % e.width, y: Math.floor(s / e.width) };
                    n[a.y] || (n[a.y] = []);
                    let r = { r: 0, g: 1, b: 2, a: 3 };
                    n[a.y][a.x] = { r: o[t + r.r], g: o[t + r.g], b: o[t + r.b], a: o[t + r.a] / 255 };
                }
                return { pixels: n, width: Math.min(...n.map((t) => t.length)), height: n.length };
            }
            let p = (t) => [...Array(t).keys()];
            class f {
                constructor(t) {
                    this._container = t;
                }
                async init() {
                    let t = this._container,
                        e = t.actualOptions.canvasMask;
                    if (!e?.enable) return;
                    let i = { pixels: [], height: 0, width: 0 },
                        s = e.pixels.offset;
                    if (e.image) {
                        let t = e.image.src;
                        if (!t) return;
                        i = await (function (t, e) {
                            let i = new Image();
                            i.crossOrigin = "Anonymous";
                            let s = new Promise((t, s) => {
                                (i.onerror = s),
                                    (i.onload = () => {
                                        let n = document.createElement("canvas");
                                        (n.width = i.width), (n.height = i.height);
                                        let a = n.getContext("2d");
                                        if (!a) return s(Error(`${o.gK4} Could not get canvas context`));
                                        a.drawImage(i, d.x, d.y, i.width, i.height, d.x, d.y, n.width, n.height), t(u(a, n, e));
                                    });
                            });
                            return (i.src = t), s;
                        })(t, s);
                    } else if (e.text) {
                        let t = (function (t, e) {
                            let i = document.createElement("canvas"),
                                s = i.getContext("2d"),
                                { font: n, text: a, lines: r, color: l } = t;
                            if (!a || !s) return;
                            let c = a.split(r.separator),
                                h = (0, o.hj$)(n.size) ? `${n.size}px` : n.size,
                                p = [],
                                f = 0,
                                v = 0;
                            for (let t of c) {
                                s.font = `${n.style ?? ""} ${n.variant ?? ""} ${n.weight ?? ""} ${h} ${n.family}`;
                                let e = s.measureText(t),
                                    i = { measure: e, text: t, height: e.actualBoundingBoxAscent + e.actualBoundingBoxDescent, width: e.width };
                                (f = Math.max(f || 0, i.width)), (v += i.height + r.spacing), p.push(i);
                            }
                            (i.width = f), (i.height = v);
                            let y = 0;
                            for (let t of p)
                                (s.font = `${n.style ?? ""} ${n.variant ?? ""} ${n.weight ?? ""} ${h} ${n.family}`), (s.fillStyle = l), s.fillText(t.text, d.x, y + t.measure.actualBoundingBoxAscent), (y += t.height + r.spacing);
                            return u(s, i, e);
                        })(e.text, s);
                        if (!t) return;
                        i = t;
                    } else if (e.element ?? e.selector) {
                        let t = e.element ?? (e.selector && document.querySelector(e.selector));
                        if (!t) return;
                        let o = t.getContext("2d");
                        if (!o) return;
                        i = u(o, t, s);
                    }
                    !(function (t, e, i, s, n, a) {
                        let { height: r, width: l } = e,
                            c = r * l,
                            h = (function (t) {
                                for (let e = t.length - 1; e >= 0; e--) {
                                    let i = Math.floor((0, o.sZz)() * e);
                                    [t[e], t[i]] = [t[i], t[e]];
                                }
                                return t;
                            })(p(c)),
                            d = Math.min(c, t.actualOptions.particles.number.value),
                            u = t.canvas.size,
                            f = 0,
                            v = { x: (u.width * i.x) / o.tZy - l * s * 0.5, y: (u.height * i.y) / o.tZy - r * s * 0.5 };
                        for (; f < d && h.length; ) {
                            let i = h.pop() ?? 0,
                                o = { x: i % l, y: Math.floor(i / l) },
                                r = e.pixels[o.y][o.x];
                            if (!a(r)) continue;
                            let c = { x: o.x * s + v.x, y: o.y * s + v.y },
                                d = {};
                            n.color && (d.color = { value: r }), n.opacity && (d.opacity = { value: r.a }), t.particles.addParticle(c, d), f++;
                        }
                    })(t, i, e.position, e.scale, e.override, e.pixels.filter);
                }
            }
            class v {
                constructor() {
                    this.id = "canvasMask";
                }
                getPlugin(t) {
                    return Promise.resolve(new f(t));
                }
                loadOptions(t, e) {
                    if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                    let i = t.canvasMask;
                    i?.load === void 0 && (t.canvasMask = i = new h()), i.load(e?.canvasMask);
                }
                needsPlugin(t) {
                    return t?.canvasMask?.enable ?? !1;
                }
            }
            async function y(t, e = !0) {
                await t.addPlugin(new v(), e);
            }
        },
        4354: function (t, e, i) {
            i.d(e, {
                ZP: function () {
                    return a;
                },
                bP: function () {
                    return r;
                },
            });
            var s = i(9280),
                o = i(7573),
                n = i(7653);
            let a = (t) => {
                let e = t.id ?? "tsparticles";
                return (
                    (0, n.useEffect)(() => {
                        let i;
                        return (
                            s.S6T.load({ id: e, url: t.url, options: t.options }).then((e) => {
                                var s;
                                (i = e), null == (s = t.particlesLoaded) || s.call(t, e);
                            }),
                            () => {
                                null == i || i.destroy();
                            }
                        );
                    }, [e, t, t.url, t.options]),
                    (0, o.jsx)("div", { id: e, className: t.className })
                );
            };
            async function r(t) {
                await t(s.S6T);
            }
        },
        633: function (t, e, i) {
            i.d(e, {
                R: function () {
                    return iL;
                },
            });
            var s,
                o,
                n,
                a,
                r,
                l,
                c,
                h,
                d,
                u,
                p,
                f,
                v,
                y,
                m,
                g,
                b = i(9280);
            class w {
                constructor() {
                    (this.radius = 0), (this.mass = 0);
                }
                load(t) {
                    t && (void 0 !== t.mass && (this.mass = t.mass), void 0 !== t.radius && (this.radius = t.radius));
                }
            }
            class x extends b.SWe {
                constructor() {
                    super(), (this.density = 5), (this.value = 50), (this.limit = new w());
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.density && (this.density = t.density), (0, b.hj$)(t.limit) ? (this.limit.radius = t.limit) : this.limit.load(t.limit));
                }
            }
            class _ {
                constructor() {
                    (this.color = new b.OzF()), (this.color.value = "#000000"), (this.draggable = !1), (this.opacity = 1), (this.destroy = !0), (this.orbits = !1), (this.size = new x());
                }
                load(t) {
                    void 0 !== t &&
                        (void 0 !== t.color && (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.draggable && (this.draggable = t.draggable),
                        (this.name = t.name),
                        void 0 !== t.opacity && (this.opacity = t.opacity),
                        void 0 !== t.position && ((this.position = {}), void 0 !== t.position.x && (this.position.x = (0, b.Cst)(t.position.x)), void 0 !== t.position.y && (this.position.y = (0, b.Cst)(t.position.y))),
                        void 0 !== t.size && this.size.load(t.size),
                        void 0 !== t.destroy && (this.destroy = t.destroy),
                        void 0 !== t.orbits && (this.orbits = t.orbits));
                }
            }
            (h || (h = {})).absorber = "absorber";
            let z = 2 * Math.PI;
            class k {
                constructor(t, e, i, s) {
                    (this.absorbers = t),
                        (this.container = e),
                        (this._calcPosition = () => {
                            let t = (0, b.Gz$)({ size: this.container.canvas.size, position: this.options.position });
                            return b.OWs.create(t.x, t.y);
                        }),
                        (this._updateParticlePosition = (t, e) => {
                            if (t.destroyed) return;
                            let i = this.container,
                                s = i.canvas.size;
                            if (t.needsNewPosition) {
                                let e = (0, b.paW)({ size: s });
                                t.position.setTo(e), t.velocity.setTo(t.initialVelocity), (t.absorberOrbit = void 0), (t.needsNewPosition = !1);
                            }
                            if (this.options.orbits) {
                                if (
                                    (void 0 === t.absorberOrbit && ((t.absorberOrbit = b.OWs.origin), (t.absorberOrbit.length = (0, b.Spd)(t.getPosition(), this.position)), (t.absorberOrbit.angle = (0, b.sZz)() * z)),
                                    t.absorberOrbit.length <= this.size && !this.options.destroy)
                                ) {
                                    let e = Math.min(s.width, s.height);
                                    t.absorberOrbit.length = e * (1 + (0.2 * (0, b.sZz)() - 0.1));
                                }
                                void 0 === t.absorberOrbitDirection && (t.absorberOrbitDirection = t.velocity.x >= 0 ? b.RnL.clockwise : b.RnL.counterClockwise);
                                let o = t.absorberOrbit.length,
                                    n = t.absorberOrbit.angle,
                                    a = t.absorberOrbitDirection;
                                t.velocity.setTo(b.OWs.origin);
                                let r = { x: a === b.RnL.clockwise ? Math.cos : Math.sin, y: a === b.RnL.clockwise ? Math.sin : Math.cos };
                                (t.position.x = this.position.x + o * r.x(n)),
                                    (t.position.y = this.position.y + o * r.y(n)),
                                    (t.absorberOrbit.length -= e.length),
                                    (t.absorberOrbit.angle += (((t.retina.moveSpeed ?? 0) * i.retina.pixelRatio) / b.tZy) * i.retina.reduceFactor);
                            } else {
                                let i = b.OWs.origin;
                                (i.length = e.length), (i.angle = e.angle), t.velocity.addTo(i);
                            }
                        }),
                        (this.initialPosition = s ? b.OWs.create(s.x, s.y) : void 0),
                        i instanceof _ ? (this.options = i) : ((this.options = new _()), this.options.load(i)),
                        (this.dragging = !1),
                        (this.name = this.options.name),
                        (this.opacity = this.options.opacity),
                        (this.size = (0, b.Gu7)(this.options.size.value) * e.retina.pixelRatio),
                        (this.mass = this.size * this.options.size.density * e.retina.reduceFactor);
                    let o = this.options.size.limit;
                    (this.limit = { radius: o.radius * e.retina.pixelRatio * e.retina.reduceFactor, mass: o.mass }),
                        (this.color = (0, b.tXk)(this.options.color) ?? { b: 0, g: 0, r: 0 }),
                        (this.position = this.initialPosition?.copy() ?? this._calcPosition());
                }
                attract(t) {
                    let e = this.container,
                        i = this.options;
                    if (i.draggable) {
                        let t = e.interactivity.mouse;
                        t.clicking && t.downPosition ? (0, b.Spd)(this.position, t.downPosition) <= this.size && (this.dragging = !0) : (this.dragging = !1),
                            this.dragging && t.position && ((this.position.x = t.position.x), (this.position.y = t.position.y));
                    }
                    let s = t.getPosition(),
                        { dx: o, dy: n, distance: a } = (0, b.oW6)(this.position, s),
                        r = b.OWs.create(o, n);
                    if (((r.length = (this.mass / Math.pow(a, 2)) * e.retina.reduceFactor), a < this.size + t.getRadius())) {
                        let s = 0.033 * t.getRadius() * e.retina.pixelRatio;
                        (this.size > t.getRadius() && a < this.size - t.getRadius()) || (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
                            ? i.destroy
                                ? t.destroy()
                                : ((t.needsNewPosition = !0), this._updateParticlePosition(t, r))
                            : (i.destroy && (t.size.value -= s), this._updateParticlePosition(t, r)),
                            (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += s),
                            (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += s * this.options.size.density * e.retina.reduceFactor);
                    } else this._updateParticlePosition(t, r);
                }
                draw(t) {
                    t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, z, !1), t.closePath(), (t.fillStyle = (0, b.izR)(this.color, this.opacity)), t.fill();
                }
                resize() {
                    let t = this.initialPosition;
                    this.position = t && (0, b.Ac)(t, this.container.canvas.size, b.OWs.origin) ? t : this._calcPosition();
                }
            }
            class C {
                constructor(t) {
                    (this.container = t),
                        (this.array = []),
                        (this.absorbers = []),
                        (this.interactivityAbsorbers = []),
                        (t.getAbsorber = (t) => (void 0 === t || (0, b.hj$)(t) ? this.array[t ?? 0] : this.array.find((e) => e.name === t))),
                        (t.addAbsorber = async (t, e) => this.addAbsorber(t, e));
                }
                async addAbsorber(t, e) {
                    let i = new k(this, this.container, t, e);
                    return this.array.push(i), Promise.resolve(i);
                }
                draw(t) {
                    for (let e of this.array) e.draw(t);
                }
                handleClickMode(t) {
                    let e = this.absorbers,
                        i = this.interactivityAbsorbers;
                    if (t === h.absorber) {
                        let t = (0, b.wA_)(i) ?? (0, b.wA_)(e),
                            s = this.container.interactivity.mouse.clickPosition;
                        this.addAbsorber(t, s);
                    }
                }
                async init() {
                    (this.absorbers = this.container.actualOptions.absorbers), (this.interactivityAbsorbers = this.container.actualOptions.interactivity.modes.absorbers);
                    let t = (0, b.KH1)(this.absorbers, async (t) => {
                        await this.addAbsorber(t);
                    });
                    t instanceof Array ? await Promise.all(t) : await t;
                }
                particleUpdate(t) {
                    for (let e of this.array) if ((e.attract(t), t.destroyed)) break;
                }
                removeAbsorber(t) {
                    let e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1);
                }
                resize() {
                    for (let t of this.array) t.resize();
                }
                stop() {
                    this.array = [];
                }
            }
            class P {
                constructor() {
                    this.id = "absorbers";
                }
                async getPlugin(t) {
                    return Promise.resolve(new C(t));
                }
                loadOptions(t, e) {
                    (this.needsPlugin(t) || this.needsPlugin(e)) &&
                        (e?.absorbers &&
                            (t.absorbers = (0, b.KH1)(e.absorbers, (t) => {
                                let e = new _();
                                return e.load(t), e;
                            })),
                        (t.interactivity.modes.absorbers = (0, b.KH1)(e?.interactivity?.modes?.absorbers, (t) => {
                            let e = new _();
                            return e.load(t), e;
                        })));
                }
                needsPlugin(t) {
                    if (!t) return !1;
                    let e = t.absorbers;
                    return (0, b.kJL)(e) ? !!e.length : !!(e || (t.interactivity?.events?.onClick?.mode && (0, b.dBL)(h.absorber, t.interactivity.events.onClick.mode)));
                }
            }
            async function O(t, e = !0) {
                await t.addPlugin(new P(), e);
            }
            class M {
                load(t) {
                    t &&
                        (void 0 !== t.bottom && (this.bottom = (0, b.Cst)(t.bottom)),
                        void 0 !== t.left && (this.left = (0, b.Cst)(t.left)),
                        void 0 !== t.right && (this.right = (0, b.Cst)(t.right)),
                        void 0 !== t.top && (this.top = (0, b.Cst)(t.top)));
                }
            }
            ((s = d || (d = {})).none = "none"), (s.split = "split");
            class S extends b.SWe {
                constructor() {
                    super(), (this.value = 3);
                }
            }
            class D extends b.SWe {
                constructor() {
                    super(), (this.value = { min: 4, max: 9 });
                }
            }
            class E {
                constructor() {
                    (this.count = 1), (this.factor = new S()), (this.rate = new D()), (this.sizeOffset = !0);
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.count && (this.count = t.count),
                        this.factor.load(t.factor),
                        this.rate.load(t.rate),
                        (this.particles = (0, b.KH1)(t.particles, (t) => (0, b.ZBL)({}, t))),
                        void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset),
                        t.colorOffset &&
                            ((this.colorOffset = this.colorOffset ?? {}),
                            void 0 !== t.colorOffset.h && (this.colorOffset.h = t.colorOffset.h),
                            void 0 !== t.colorOffset.s && (this.colorOffset.s = t.colorOffset.s),
                            void 0 !== t.colorOffset.l && (this.colorOffset.l = t.colorOffset.l)));
                }
            }
            class R {
                constructor() {
                    (this.bounds = new M()), (this.mode = d.none), (this.split = new E());
                }
                load(t) {
                    t && (t.mode && (this.mode = t.mode), t.bounds && this.bounds.load(t.bounds), this.split.load(t.split));
                }
            }
            class T {
                constructor(t, e) {
                    (this.container = e), (this.engine = t);
                }
                init(t) {
                    let e = this.container,
                        i = t.options.destroy;
                    if (!i) return;
                    t.splitCount = 0;
                    let s = i.bounds;
                    t.destroyBounds || (t.destroyBounds = {});
                    let { bottom: o, left: n, right: a, top: r } = s,
                        { destroyBounds: l } = t,
                        c = e.canvas.size;
                    o && (l.bottom = ((0, b.Gu7)(o) * c.height) / b.tZy), n && (l.left = ((0, b.Gu7)(n) * c.width) / b.tZy), a && (l.right = ((0, b.Gu7)(a) * c.width) / b.tZy), r && (l.top = ((0, b.Gu7)(r) * c.height) / b.tZy);
                }
                isEnabled(t) {
                    return !t.destroyed;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.destroy || (t.destroy = new R()), e)) t.destroy.load(i?.destroy);
                }
                particleDestroyed(t, e) {
                    if (e) return;
                    let i = t.options.destroy;
                    i &&
                        i.mode === d.split &&
                        (function (t, e, i) {
                            let s = i.options.destroy;
                            if (!s) return;
                            let o = s.split;
                            if (o.count >= 0 && (void 0 === i.splitCount || i.splitCount++ > o.count)) return;
                            let n = (0, b.Gu7)(o.rate.value),
                                a = (0, b.wA_)(o.particles);
                            for (let s = 0; s < n; s++)
                                !(function (t, e, i, s) {
                                    let o = i.options.destroy;
                                    if (!o) return;
                                    let n = o.split,
                                        a = (0, b.hTV)(t, e, i.options),
                                        r = (0, b.Gu7)(n.factor.value),
                                        l = i.getFillColor();
                                    n.color
                                        ? a.color.load(n.color)
                                        : n.colorOffset && l
                                        ? a.color.load({ value: { hsl: { h: l.h + (0, b.Gu7)(n.colorOffset.h ?? 0), s: l.s + (0, b.Gu7)(n.colorOffset.s ?? 0), l: l.l + (0, b.Gu7)(n.colorOffset.l ?? 0) } } })
                                        : a.color.load({ value: { hsl: i.getFillColor() } }),
                                        a.move.load({ center: { x: i.position.x, y: i.position.y, mode: b.lZr.precise } }),
                                        (0, b.hj$)(a.size.value) ? (a.size.value /= r) : ((a.size.value.min /= r), (a.size.value.max /= r)),
                                        a.load(s);
                                    let c = n.sizeOffset ? (0, b.Cst)(-i.size.value, i.size.value) : 0,
                                        h = { x: i.position.x + (0, b.vdf)(c), y: i.position.y + (0, b.vdf)(c) };
                                    e.particles.addParticle(
                                        h,
                                        a,
                                        i.group,
                                        (t) =>
                                            !(t.size.value < 0.5) &&
                                            ((t.velocity.length = (0, b.vdf)((0, b.Cst)(i.velocity.length, t.velocity.length))),
                                            (t.splitCount = (i.splitCount ?? 0) + 1),
                                            (t.unbreakable = !0),
                                            setTimeout(() => {
                                                t.unbreakable = !1;
                                            }, 500),
                                            !0)
                                    );
                                })(t, e, i, a);
                        })(this.engine, this.container, t);
                }
                update(t) {
                    if (!this.isEnabled(t)) return;
                    let e = t.getPosition(),
                        i = t.destroyBounds;
                    i && ((void 0 !== i.bottom && e.y >= i.bottom) || (void 0 !== i.left && e.x <= i.left) || (void 0 !== i.right && e.x >= i.right) || (void 0 !== i.top && e.y <= i.top)) && t.destroy();
                }
            }
            async function I(t, e = !0) {
                await t.addParticleUpdater("destroy", (e) => Promise.resolve(new T(t, e)), e);
            }
            class L {
                constructor() {
                    this.wait = !1;
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = (0, b.Cst)(t.delay)), void 0 !== t.duration && (this.duration = (0, b.Cst)(t.duration)), void 0 !== t.wait && (this.wait = t.wait));
                }
            }
            class B {
                constructor() {
                    (this.quantity = 1), (this.delay = 0.1);
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.quantity && (this.quantity = (0, b.Cst)(t.quantity)), void 0 !== t.delay && (this.delay = (0, b.Cst)(t.delay)));
                }
            }
            class A {
                constructor() {
                    (this.color = !1), (this.opacity = !1);
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = t.color), void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class q {
                constructor() {
                    (this.options = {}), (this.replace = new A()), (this.type = "square");
                }
                load(t) {
                    t && (void 0 !== t.options && (this.options = (0, b.ZBL)({}, t.options ?? {})), this.replace.load(t.replace), void 0 !== t.type && (this.type = t.type));
                }
            }
            class F {
                constructor() {
                    (this.mode = b.lZr.percent), (this.height = 0), (this.width = 0);
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width));
                }
            }
            class W {
                constructor() {
                    (this.autoPlay = !0), (this.fill = !0), (this.life = new L()), (this.rate = new B()), (this.shape = new q()), (this.startCount = 0);
                }
                load(t) {
                    t &&
                        (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
                        void 0 !== t.size && (this.size || (this.size = new F()), this.size.load(t.size)),
                        void 0 !== t.direction && (this.direction = t.direction),
                        (this.domId = t.domId),
                        void 0 !== t.fill && (this.fill = t.fill),
                        this.life.load(t.life),
                        (this.name = t.name),
                        (this.particles = (0, b.KH1)(t.particles, (t) => (0, b.ZBL)({}, t))),
                        this.rate.load(t.rate),
                        this.shape.load(t.shape),
                        void 0 !== t.position && ((this.position = {}), void 0 !== t.position.x && (this.position.x = (0, b.Cst)(t.position.x)), void 0 !== t.position.y && (this.position.y = (0, b.Cst)(t.position.y))),
                        void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new b.RC2()), this.spawnColor.load(t.spawnColor)),
                        void 0 !== t.startCount && (this.startCount = t.startCount));
                }
            }
            (u || (u = {})).emitter = "emitter";
            let G = 1;
            function H(t, e) {
                t.color ? (t.color.value = e) : (t.color = { value: e });
            }
            class $ {
                constructor(t, e, i, s, o) {
                    (this.emitters = e),
                        (this.container = i),
                        (this._destroy = () => {
                            this._mutationObserver?.disconnect(),
                                (this._mutationObserver = void 0),
                                this._resizeObserver?.disconnect(),
                                (this._resizeObserver = void 0),
                                this.emitters.removeEmitter(this),
                                this._engine.dispatchEvent("emitterDestroyed", { container: this.container, data: { emitter: this } });
                        }),
                        (this._prepareToDie = () => {
                            if (this._paused) return;
                            let t = this.options.life?.duration !== void 0 ? (0, b.Gu7)(this.options.life.duration) : void 0;
                            this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && void 0 !== t && t > 0 && (this._duration = t * b.X5o);
                        }),
                        (this._setColorAnimation = (t, e, i, s = G) => {
                            let o = this.container;
                            if (!t.enable) return e;
                            let n = (0, b.vdf)(t.offset),
                                a = ((0, b.Gu7)(this.options.rate.delay) * b.X5o) / o.retina.reduceFactor;
                            return (e + ((0, b.Gu7)(t.speed ?? 0) * o.fpsLimit) / a + n * s) % i;
                        }),
                        (this._engine = t),
                        (this._currentDuration = 0),
                        (this._currentEmitDelay = 0),
                        (this._currentSpawnDelay = 0),
                        (this._initialPosition = o),
                        s instanceof W ? (this.options = s) : ((this.options = new W()), this.options.load(s)),
                        (this._spawnDelay = ((0, b.Gu7)(this.options.life.delay ?? 0) * b.X5o) / this.container.retina.reduceFactor),
                        (this.position = this._initialPosition ?? this._calcPosition()),
                        (this.name = this.options.name),
                        (this.fill = this.options.fill),
                        (this._firstSpawn = !this.options.life.wait),
                        (this._startParticlesAdded = !1);
                    let n = (0, b.ZBL)({}, this.options.particles);
                    if (
                        ((n ??= {}),
                        (n.move ??= {}),
                        (n.move.direction ??= this.options.direction),
                        this.options.spawnColor && (this.spawnColor = (0, b.lNs)(this.options.spawnColor)),
                        (this._paused = !this.options.autoPlay),
                        (this._particlesOptions = n),
                        (this._size = this._calcSize()),
                        (this.size = (0, b.apW)(this._size, this.container.canvas.size)),
                        (this._lifeCount = this.options.life.count ?? -1),
                        (this._immortal = this._lifeCount <= 0),
                        this.options.domId)
                    ) {
                        let t = document.getElementById(this.options.domId);
                        t &&
                            ((this._mutationObserver = new MutationObserver(() => {
                                this.resize();
                            })),
                            (this._resizeObserver = new ResizeObserver(() => {
                                this.resize();
                            })),
                            this._mutationObserver.observe(t, { attributes: !0, attributeFilter: ["style", "width", "height"] }),
                            this._resizeObserver.observe(t));
                    }
                    let a = this.options.shape,
                        r = this._engine.emitterShapeManager?.getShapeGenerator(a.type);
                    r && (this._shape = r.generate(this.position, this.size, this.fill, a.options)), this._engine.dispatchEvent("emitterCreated", { container: i, data: { emitter: this } }), this.play();
                }
                externalPause() {
                    (this._paused = !0), this.pause();
                }
                externalPlay() {
                    (this._paused = !1), this.play();
                }
                async init() {
                    await this._shape?.init();
                }
                pause() {
                    this._paused || delete this._emitDelay;
                }
                play() {
                    if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0))) {
                        if (void 0 === this._emitDelay) {
                            let t = (0, b.Gu7)(this.options.rate.delay);
                            this._emitDelay = (t * b.X5o) / this.container.retina.reduceFactor;
                        }
                        (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
                    }
                }
                resize() {
                    let t = this._initialPosition;
                    (this.position = t && (0, b.Ac)(t, this.container.canvas.size, b.OWs.origin) ? t : this._calcPosition()),
                        (this._size = this._calcSize()),
                        (this.size = (0, b.apW)(this._size, this.container.canvas.size)),
                        this._shape?.resize(this.position, this.size);
                }
                update(t) {
                    !this._paused &&
                        (this._firstSpawn && ((this._firstSpawn = !1), (this._currentSpawnDelay = this._spawnDelay ?? 0), (this._currentEmitDelay = this._emitDelay ?? 0)),
                        this._startParticlesAdded || ((this._startParticlesAdded = !0), this._emitParticles(this.options.startCount)),
                        void 0 !== this._duration &&
                            ((this._currentDuration += t.value),
                            this._currentDuration >= this._duration &&
                                (this.pause(),
                                void 0 !== this._spawnDelay && delete this._spawnDelay,
                                !this._immortal && this._lifeCount--,
                                this._lifeCount > 0 || this._immortal
                                    ? ((this.position = this._calcPosition()), this._shape?.resize(this.position, this.size), (this._spawnDelay = ((0, b.Gu7)(this.options.life.delay ?? 0) * b.X5o) / this.container.retina.reduceFactor))
                                    : this._destroy(),
                                (this._currentDuration -= this._duration),
                                delete this._duration)),
                        void 0 !== this._spawnDelay &&
                            ((this._currentSpawnDelay += t.value),
                            this._currentSpawnDelay >= this._spawnDelay &&
                                (this._engine.dispatchEvent("emitterPlay", { container: this.container }), this.play(), (this._currentSpawnDelay -= this._currentSpawnDelay), delete this._spawnDelay)),
                        void 0 !== this._emitDelay && ((this._currentEmitDelay += t.value), this._currentEmitDelay >= this._emitDelay && (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
                }
                _calcPosition() {
                    if (this.options.domId) {
                        let t = document.getElementById(this.options.domId);
                        if (t) {
                            let e = t.getBoundingClientRect(),
                                i = this.container.retina.pixelRatio;
                            return { x: (e.x + 0.5 * e.width) * i, y: (e.y + 0.5 * e.height) * i };
                        }
                    }
                    return (0, b.Gz$)({ size: this.container.canvas.size, position: this.options.position });
                }
                _calcSize() {
                    let t = this.container;
                    if (this.options.domId) {
                        let e = document.getElementById(this.options.domId);
                        if (e) {
                            let i = e.getBoundingClientRect();
                            return { width: i.width * t.retina.pixelRatio, height: i.height * t.retina.pixelRatio, mode: b.lZr.precise };
                        }
                    }
                    return (
                        this.options.size ??
                        (() => {
                            let t = new F();
                            return t.load({ height: 0, mode: b.lZr.percent, width: 0 }), t;
                        })()
                    );
                }
                _emit() {
                    if (this._paused) return;
                    let t = (0, b.Gu7)(this.options.rate.quantity);
                    this._emitParticles(t);
                }
                _emitParticles(t) {
                    let e = (0, b.wA_)(this._particlesOptions);
                    for (let i = 0; i < t; i++) {
                        let t = (0, b.ZBL)({}, e);
                        if (this.spawnColor) {
                            let e = this.options.spawnColor?.animation;
                            if (e) {
                                let t = { h: 360, s: 100, l: 100 };
                                (this.spawnColor.h = this._setColorAnimation(e.h, this.spawnColor.h, t.h, 3.6)),
                                    (this.spawnColor.s = this._setColorAnimation(e.s, this.spawnColor.s, t.s)),
                                    (this.spawnColor.l = this._setColorAnimation(e.l, this.spawnColor.l, t.l));
                            }
                            H(t, this.spawnColor);
                        }
                        let i = this.options.shape,
                            s = this.position;
                        if (this._shape) {
                            let e = this._shape.randomPosition();
                            if (e) {
                                s = e.position;
                                let o = i.replace;
                                o.color && e.color && H(t, e.color), o.opacity && (t.opacity ? (t.opacity.value = e.opacity) : (t.opacity = { value: e.opacity }));
                            } else s = null;
                        }
                        s && this.container.particles.addParticle(s, t);
                    }
                }
            }
            class V {
                constructor(t, e) {
                    (this.container = e),
                        (this._engine = t),
                        (this.array = []),
                        (this.emitters = []),
                        (this.interactivityEmitters = { random: { count: 1, enable: !1 }, value: [] }),
                        (e.getEmitter = (t) => (void 0 === t || (0, b.hj$)(t) ? this.array[t ?? 0] : this.array.find((e) => e.name === t))),
                        (e.addEmitter = async (t, e) => this.addEmitter(t, e)),
                        (e.removeEmitter = (t) => {
                            let i = e.getEmitter(t);
                            i && this.removeEmitter(i);
                        }),
                        (e.playEmitter = (t) => {
                            let i = e.getEmitter(t);
                            i && i.externalPlay();
                        }),
                        (e.pauseEmitter = (t) => {
                            let i = e.getEmitter(t);
                            i && i.externalPause();
                        });
                }
                async addEmitter(t, e) {
                    let i = new W();
                    i.load(t);
                    let s = new $(this._engine, this, this.container, i, e);
                    return await s.init(), this.array.push(s), s;
                }
                handleClickMode(t) {
                    let e;
                    let i = this.emitters,
                        s = this.interactivityEmitters;
                    if (t !== u.emitter) return;
                    if (s && (0, b.kJL)(s.value)) {
                        if (s.value.length > 0 && s.random.enable) {
                            e = [];
                            let t = [];
                            for (let i = 0; i < s.random.count; i++) {
                                let o = (0, b.dUB)(s.value);
                                if (t.includes(o) && t.length < s.value.length) {
                                    i--;
                                    continue;
                                }
                                t.push(o), e.push((0, b.c86)(s.value, o));
                            }
                        } else e = s.value;
                    } else e = s?.value;
                    let o = e ?? i,
                        n = this.container.interactivity.mouse.clickPosition;
                    (0, b.KH1)(o, async (t) => {
                        await this.addEmitter(t, n);
                    });
                }
                async init() {
                    if (((this.emitters = this.container.actualOptions.emitters), (this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters), this.emitters)) {
                        if ((0, b.kJL)(this.emitters)) for (let t of this.emitters) await this.addEmitter(t);
                        else await this.addEmitter(this.emitters);
                    }
                }
                pause() {
                    for (let t of this.array) t.pause();
                }
                play() {
                    for (let t of this.array) t.play();
                }
                removeEmitter(t) {
                    let e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1);
                }
                resize() {
                    for (let t of this.array) t.resize();
                }
                stop() {
                    this.array = [];
                }
                update(t) {
                    for (let e of this.array) e.update(t);
                }
            }
            class Z {
                constructor(t) {
                    (this._engine = t), (this.id = "emitters");
                }
                getPlugin(t) {
                    return Promise.resolve(new V(this._engine, t));
                }
                loadOptions(t, e) {
                    if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                    e?.emitters &&
                        (t.emitters = (0, b.KH1)(e.emitters, (t) => {
                            let e = new W();
                            return e.load(t), e;
                        }));
                    let i = e?.interactivity?.modes?.emitters;
                    if (i) {
                        if ((0, b.kJL)(i))
                            t.interactivity.modes.emitters = {
                                random: { count: 1, enable: !0 },
                                value: i.map((t) => {
                                    let e = new W();
                                    return e.load(t), e;
                                }),
                            };
                        else if (void 0 !== i.value) {
                            if ((0, b.kJL)(i.value))
                                t.interactivity.modes.emitters = {
                                    random: { count: i.random.count ?? 1, enable: i.random.enable ?? !1 },
                                    value: i.value.map((t) => {
                                        let e = new W();
                                        return e.load(t), e;
                                    }),
                                };
                            else {
                                let e = new W();
                                e.load(i.value), (t.interactivity.modes.emitters = { random: { count: i.random.count ?? 1, enable: i.random.enable ?? !1 }, value: e });
                            }
                        } else (t.interactivity.modes.emitters = { random: { count: 1, enable: !1 }, value: new W() }).value.load(i);
                    }
                }
                needsPlugin(t) {
                    if (!t) return !1;
                    let e = t.emitters;
                    return ((0, b.kJL)(e) && !!e.length) || void 0 !== e || (!!t.interactivity?.events?.onClick?.mode && (0, b.dBL)(u.emitter, t.interactivity.events.onClick.mode));
                }
            }
            let U = new Map();
            class Y {
                constructor(t) {
                    this._engine = t;
                }
                addShapeGenerator(t, e) {
                    this.getShapeGenerator(t) || U.set(t, e);
                }
                getShapeGenerator(t) {
                    return U.get(t);
                }
                getSupportedShapeGenerators() {
                    return U.keys();
                }
            }
            class X {
                constructor(t, e, i, s) {
                    (this.position = t), (this.size = e), (this.fill = i), (this.options = s);
                }
                resize(t, e) {
                    (this.position = t), (this.size = e);
                }
            }
            async function j(t, e = !0) {
                t.emitterShapeManager || (t.emitterShapeManager = new Y(t)),
                    t.addEmitterShapeGenerator ||
                        (t.addEmitterShapeGenerator = (e, i) => {
                            t.emitterShapeManager?.addShapeGenerator(e, i);
                        });
                let i = new Z(t);
                await t.addPlugin(i, e);
            }
            let N = 2 * Math.PI;
            class K extends X {
                constructor(t, e, i, s) {
                    super(t, e, i, s);
                }
                async init() {}
                randomPosition() {
                    let t = this.size,
                        e = this.fill,
                        i = this.position,
                        [s, o] = [0.5 * t.width, 0.5 * t.height],
                        n = ((t, e) => {
                            let i = Math.atan((e / t) * Math.tan(0.25 * (0, b.sZz)() * N)),
                                s = (0, b.sZz)();
                            return s < 0.25 ? i : s < 0.5 ? Math.PI - i : s < 0.75 ? Math.PI + i : -i;
                        })(s, o),
                        a = (s * o) / Math.sqrt((o * Math.cos(n)) ** 2 + (s * Math.sin(n)) ** 2),
                        r = e ? a * Math.sqrt((0, b.sZz)()) : a;
                    return { position: { x: i.x + r * Math.cos(n), y: i.y + r * Math.sin(n) } };
                }
            }
            class J {
                generate(t, e, i, s) {
                    return new K(t, e, i, s);
                }
            }
            async function Q(t, e = !0) {
                t.addEmitterShapeGenerator?.("circle", new J()), await t.refresh(e);
            }
            function tt(t, e) {
                return t + e * ((0, b.sZz)() - b.vqy);
            }
            ((o = p || (p = {}))[(o.TopLeft = 0)] = "TopLeft"), (o[(o.TopRight = 1)] = "TopRight"), (o[(o.BottomRight = 2)] = "BottomRight"), (o[(o.BottomLeft = 3)] = "BottomLeft");
            class te extends X {
                constructor(t, e, i, s) {
                    super(t, e, i, s);
                }
                async init() {}
                randomPosition() {
                    let t = this.fill,
                        e = this.position,
                        i = this.size;
                    if (t) return { position: { x: tt(e.x, i.width), y: tt(e.y, i.height) } };
                    {
                        let t = 0.5 * i.width,
                            s = 0.5 * i.height,
                            o = Math.floor(4 * (0, b.sZz)()),
                            n = ((0, b.sZz)() - b.vqy) * 2;
                        switch (o) {
                            case p.TopLeft:
                                return { position: { x: e.x + n * t, y: e.y - s } };
                            case p.TopRight:
                                return { position: { x: e.x - t, y: e.y + n * s } };
                            case p.BottomRight:
                                return { position: { x: e.x + n * t, y: e.y + s } };
                            case p.BottomLeft:
                            default:
                                return { position: { x: e.x + t, y: e.y + n * s } };
                        }
                    }
                }
            }
            class ti {
                generate(t, e, i, s) {
                    return new te(t, e, i, s);
                }
            }
            async function ts(t, e = !0) {
                t.addEmitterShapeGenerator?.("square", new ti()), await t.refresh(e);
            }
            class to {
                constructor() {
                    (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.delay && (this.delay = t.delay),
                        void 0 !== t.quantity && (this.quantity = t.quantity),
                        void 0 !== t.particles && (this.particles = (0, b.ZBL)({}, t.particles)),
                        void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop));
                }
            }
            let tn = "trail";
            class ta extends b.L8z {
                constructor(t) {
                    super(t), (this._delay = 0);
                }
                clear() {}
                init() {}
                interact(t) {
                    let e = this.container,
                        { interactivity: i } = e;
                    if (!e.retina.reduceFactor) return;
                    let s = e.actualOptions.interactivity.modes.trail;
                    if (!s) return;
                    let o = (s.delay * b.X5o) / this.container.retina.reduceFactor;
                    if ((this._delay < o && (this._delay += t.value), this._delay < o)) return;
                    let n = !(s.pauseOnStop && (i.mouse.position === this._lastPosition || (i.mouse.position?.x === this._lastPosition?.x && i.mouse.position?.y === this._lastPosition?.y))),
                        a = e.interactivity.mouse.position;
                    a ? (this._lastPosition = { ...a }) : delete this._lastPosition, n && e.particles.push(s.quantity, e.interactivity.mouse, s.particles), (this._delay -= o);
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse,
                        o = (t?.interactivity ?? i.interactivity).events;
                    return (s.clicking && s.inside && !!s.position && (0, b.dBL)(tn, o.onClick.mode)) || (s.inside && !!s.position && (0, b.dBL)(tn, o.onHover.mode));
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.trail || (t.trail = new to()), e)) t.trail.load(i?.trail);
                }
                reset() {}
            }
            async function tr(t, e = !0) {
                await t.addInteractor("externalTrail", (t) => Promise.resolve(new ta(t)), e);
            }
            ((n = f || (f = {})).both = "both"), (n.horizontal = "horizontal"), (n.vertical = "vertical");
            let tl = 2 * Math.PI;
            class tc {
                constructor() {
                    (this.enable = !1), (this.value = 0);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = (0, b.Cst)(t.value)));
                }
            }
            class th {
                constructor() {
                    (this.darken = new tc()), (this.enable = !1), (this.enlighten = new tc()), (this.mode = f.vertical), (this.speed = 25);
                }
                load(t) {
                    t &&
                        (void 0 !== t.backColor && (this.backColor = b.OzF.create(this.backColor, t.backColor)),
                        this.darken.load(t.darken),
                        void 0 !== t.enable && (this.enable = t.enable),
                        this.enlighten.load(t.enlighten),
                        void 0 !== t.mode && (this.mode = t.mode),
                        void 0 !== t.speed && (this.speed = (0, b.Cst)(t.speed)));
                }
            }
            class td {
                getTransformValues(t) {
                    let e = t.roll?.enable && t.roll,
                        i = e && e.horizontal,
                        s = e && e.vertical;
                    return { a: i ? Math.cos(e.angle) : void 0, d: s ? Math.sin(e.angle) : void 0 };
                }
                init(t) {
                    !(function (t) {
                        let e = t.options.roll;
                        if (!e?.enable) {
                            t.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
                            return;
                        }
                        if (
                            ((t.roll = { enable: e.enable, horizontal: e.mode === f.horizontal || e.mode === f.both, vertical: e.mode === f.vertical || e.mode === f.both, angle: (0, b.sZz)() * tl, speed: (0, b.Gu7)(e.speed) / 360 }),
                            e.backColor)
                        )
                            t.backColor = (0, b.lNs)(e.backColor);
                        else if (e.darken.enable && e.enlighten.enable) {
                            let i = (0, b.sZz)() >= b.vqy ? b.qHU.darken : b.qHU.enlighten;
                            t.roll.alter = { type: i, value: (0, b.Gu7)(i === b.qHU.darken ? e.darken.value : e.enlighten.value) };
                        } else e.darken.enable ? (t.roll.alter = { type: b.qHU.darken, value: (0, b.Gu7)(e.darken.value) }) : e.enlighten.enable && (t.roll.alter = { type: b.qHU.enlighten, value: (0, b.Gu7)(e.enlighten.value) });
                    })(t);
                }
                isEnabled(t) {
                    let e = t.options.roll;
                    return !t.destroyed && !t.spawning && !!e?.enable;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.roll || (t.roll = new th()), e)) t.roll.load(i?.roll);
                }
                update(t, e) {
                    this.isEnabled(t) &&
                        (function (t, e) {
                            let i = t.options.roll,
                                s = t.roll;
                            if (!s || !i?.enable) return;
                            let o = s.speed * e.factor;
                            (s.angle += o), s.angle > tl && (s.angle -= tl);
                        })(t, e);
                }
            }
            async function tu(t, e = !0) {
                await t.addParticleUpdater("roll", () => Promise.resolve(new td()), e);
            }
            class tp {
                init(t) {
                    let e = t.options.move.gravity;
                    (t.gravity = { enable: e.enable, acceleration: (0, b.Gu7)(e.acceleration), inverse: e.inverse }),
                        (function (t) {
                            let e = t.container,
                                i = t.options.move.spin;
                            if (!i.enable) return;
                            let s = i.position ?? { x: 50, y: 50 },
                                o = { x: 0.01 * s.x * e.canvas.size.width, y: 0.01 * s.y * e.canvas.size.height },
                                n = t.getPosition(),
                                a = (0, b.Spd)(n, o),
                                r = (0, b.Gu7)(i.acceleration);
                            (t.retina.spinAcceleration = r * e.retina.pixelRatio),
                                (t.spin = { center: o, direction: t.velocity.x >= 0 ? b.RnL.clockwise : b.RnL.counterClockwise, angle: t.velocity.angle, radius: a, acceleration: t.retina.spinAcceleration });
                        })(t);
                }
                isEnabled(t) {
                    return !t.destroyed && t.options.move.enable;
                }
                move(t, e) {
                    let i = t.options,
                        s = i.move;
                    if (!s.enable) return;
                    let o = t.container,
                        n = o.retina.pixelRatio;
                    (t.retina.moveSpeed ??= (0, b.Gu7)(s.speed) * n), (t.retina.moveDrift ??= (0, b.Gu7)(t.options.move.drift) * n);
                    let a = t.slow.inRange ? t.slow.factor : 1,
                        r = t.retina.moveSpeed * o.retina.reduceFactor,
                        l = t.retina.moveDrift,
                        c = (0, b.KIV)(i.size.value) * n,
                        h = (r * (s.size ? t.getRadius() / c : 1) * a * (e.factor || 1)) / 2,
                        d = t.retina.maxSpeed ?? o.retina.maxSpeed;
                    s.spin.enable
                        ? (function (t, e) {
                              let i = t.container;
                              if (!t.spin) return;
                              let s = { x: t.spin.direction === b.RnL.clockwise ? Math.cos : Math.sin, y: t.spin.direction === b.RnL.clockwise ? Math.sin : Math.cos };
                              (t.position.x = t.spin.center.x + t.spin.radius * s.x(t.spin.angle)), (t.position.y = t.spin.center.y + t.spin.radius * s.y(t.spin.angle)), (t.spin.radius += t.spin.acceleration);
                              let o = Math.max(i.canvas.size.width, i.canvas.size.height),
                                  n = 0.5 * o;
                              t.spin.radius > n ? ((t.spin.radius = n), (t.spin.acceleration *= -1)) : t.spin.radius < 0 && ((t.spin.radius = 0), (t.spin.acceleration *= -1)), (t.spin.angle += 0.01 * e * (1 - t.spin.radius / o));
                          })(t, h)
                        : (function (t, e, i, s, o, n) {
                              (function (t, e) {
                                  let i = t.options.move.path;
                                  if (!i.enable) return;
                                  if (t.lastPathTime <= t.pathDelay) {
                                      t.lastPathTime += e.value;
                                      return;
                                  }
                                  let s = t.pathGenerator?.generate(t, e);
                                  s && t.velocity.addTo(s), i.clamp && ((t.velocity.x = (0, b.uZ5)(t.velocity.x, -1, 1)), (t.velocity.y = (0, b.uZ5)(t.velocity.y, -1, 1))), (t.lastPathTime -= t.pathDelay);
                              })(t, n);
                              let a = t.gravity,
                                  r = a?.enable && a.inverse ? -1 : 1;
                              o && i && (t.velocity.x += (o * n.factor) / (60 * i)), a?.enable && i && (t.velocity.y += (a.acceleration * n.factor * r) / (60 * i));
                              let l = t.moveDecay;
                              t.velocity.multTo(l);
                              let c = t.velocity.mult(i);
                              a?.enable && s > 0 && ((!a.inverse && c.y >= 0 && c.y >= s) || (a.inverse && c.y <= 0 && c.y <= -s)) && ((c.y = r * s), i && (t.velocity.y = c.y / i));
                              let h = t.options.zIndex,
                                  d = (1 - t.zIndexFactor) ** h.velocityRate;
                              c.multTo(d);
                              let { position: u } = t;
                              u.addTo(c), e.vibrate && ((u.x += Math.sin(u.x * Math.cos(u.y))), (u.y += Math.cos(u.y * Math.sin(u.x))));
                          })(t, s, h, d, l, e),
                        (function (t) {
                            let e = t.initialPosition,
                                { dx: i, dy: s } = (0, b.oW6)(e, t.position),
                                o = Math.abs(i),
                                n = Math.abs(s),
                                { maxDistance: a } = t.retina,
                                r = a.horizontal,
                                l = a.vertical;
                            if (r || l) {
                                if (((r && o >= r) || (l && n >= l)) && !t.misplaced)
                                    (t.misplaced = (!!r && o > r) || (!!l && n > l)), r && (t.velocity.x = 0.5 * t.velocity.y - t.velocity.x), l && (t.velocity.y = 0.5 * t.velocity.x - t.velocity.y);
                                else if ((!r || o < r) && (!l || n < l) && t.misplaced) t.misplaced = !1;
                                else if (t.misplaced) {
                                    let i = t.position,
                                        s = t.velocity;
                                    r && ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) && (s.x *= -(0, b.sZz)()), l && ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) && (s.y *= -(0, b.sZz)());
                                }
                            }
                        })(t);
                }
            }
            async function tf(t, e = !0) {
                await t.addMover("base", () => Promise.resolve(new tp()), e);
            }
            let tv = 2 * Math.PI;
            class ty {
                constructor() {
                    this.validTypes = ["circle"];
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, particle: i, radius: s } = t;
                        i.circleRange || (i.circleRange = { min: 0, max: tv });
                        let o = i.circleRange;
                        e.arc(0, 0, s, o.min, o.max, !1);
                    })(t);
                }
                getSidesCount() {
                    return 12;
                }
                particleInit(t, e) {
                    let i = e.shapeData,
                        s = i?.angle ?? { max: 360, min: 0 };
                    e.circleRange = (0, b.Kn2)(s) ? { min: (0, b.Idc)(s.min), max: (0, b.Idc)(s.max) } : { min: 0, max: (0, b.Idc)(s) };
                }
            }
            async function tm(t, e = !0) {
                await t.addShape(new ty(), e);
            }
            class tg {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = (0, b.lNs)(t.options.color, t.id, t.options.reduceDuplicates);
                    e && (t.color = (0, b.bS$)(e, t.options.color.animation, this.container.retina.reduceFactor));
                }
                isEnabled(t) {
                    let { h: e, s: i, l: s } = t.options.color.animation,
                        { color: o } = t;
                    return !t.destroyed && !t.spawning && ((o?.h.value !== void 0 && e.enable) || (o?.s.value !== void 0 && i.enable) || (o?.l.value !== void 0 && s.enable));
                }
                update(t, e) {
                    (0, b.PBz)(t.color, e);
                }
            }
            async function tb(t, e = !0) {
                await t.addParticleUpdater("color", (t) => Promise.resolve(new tg(t)), e);
            }
            class tw {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = t.options.opacity;
                    t.opacity = (0, b.V0)(e, 1);
                    let i = e.animation;
                    i.enable && ((t.opacity.velocity = ((0, b.Gu7)(i.speed) / b.tZy) * this.container.retina.reduceFactor), i.sync || (t.opacity.velocity *= (0, b.sZz)()));
                }
                isEnabled(t) {
                    return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((t.opacity.maxLoops ?? 0) <= 0 || ((t.opacity.maxLoops ?? 0) > 0 && (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)));
                }
                reset(t) {
                    t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
                }
                update(t, e) {
                    this.isEnabled(t) && t.opacity && (0, b.CrJ)(t, t.opacity, !0, t.options.opacity.animation.destroy, e);
                }
            }
            async function tx(t, e = !0) {
                await t.addParticleUpdater("opacity", (t) => Promise.resolve(new tw(t)), e);
            }
            class t_ {
                constructor(t) {
                    (this.container = t), (this.modes = [b.Voc.bounce, b.Voc.split]);
                }
                update(t, e, i, s) {
                    if (!this.modes.includes(s)) return;
                    let o = this.container,
                        n = !1;
                    for (let [, s] of o.plugins) if ((void 0 !== s.particleBounce && (n = s.particleBounce(t, i, e)), n)) break;
                    if (n) return;
                    let a = t.getPosition(),
                        r = t.offset,
                        l = t.getRadius(),
                        c = (0, b.M_G)(a, l),
                        h = o.canvas.size;
                    !(function (t) {
                        if ((t.outMode !== b.Voc.bounce && t.outMode !== b.Voc.split) || (t.direction !== b.DYc.left && t.direction !== b.DYc.right)) return;
                        t.bounds.right < 0 && t.direction === b.DYc.left
                            ? (t.particle.position.x = t.size + t.offset.x)
                            : t.bounds.left > t.canvasSize.width && t.direction === b.DYc.right && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
                        let e = t.particle.velocity.x,
                            i = !1;
                        if ((t.direction === b.DYc.right && t.bounds.right >= t.canvasSize.width && e > 0) || (t.direction === b.DYc.left && t.bounds.left <= 0 && e < 0)) {
                            let e = (0, b.Gu7)(t.particle.options.bounce.horizontal.value);
                            (t.particle.velocity.x *= -e), (i = !0);
                        }
                        if (!i) return;
                        let s = t.offset.x + t.size;
                        t.bounds.right >= t.canvasSize.width && t.direction === b.DYc.right ? (t.particle.position.x = t.canvasSize.width - s) : t.bounds.left <= 0 && t.direction === b.DYc.left && (t.particle.position.x = s),
                            t.outMode === b.Voc.split && t.particle.destroy();
                    })({ particle: t, outMode: s, direction: e, bounds: c, canvasSize: h, offset: r, size: l }),
                        (function (t) {
                            if ((t.outMode !== b.Voc.bounce && t.outMode !== b.Voc.split) || (t.direction !== b.DYc.bottom && t.direction !== b.DYc.top)) return;
                            t.bounds.bottom < 0 && t.direction === b.DYc.top
                                ? (t.particle.position.y = t.size + t.offset.y)
                                : t.bounds.top > t.canvasSize.height && t.direction === b.DYc.bottom && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
                            let e = t.particle.velocity.y,
                                i = !1;
                            if ((t.direction === b.DYc.bottom && t.bounds.bottom >= t.canvasSize.height && e > 0) || (t.direction === b.DYc.top && t.bounds.top <= 0 && e < 0)) {
                                let e = (0, b.Gu7)(t.particle.options.bounce.vertical.value);
                                (t.particle.velocity.y *= -e), (i = !0);
                            }
                            if (!i) return;
                            let s = t.offset.y + t.size;
                            t.bounds.bottom >= t.canvasSize.height && t.direction === b.DYc.bottom ? (t.particle.position.y = t.canvasSize.height - s) : t.bounds.top <= 0 && t.direction === b.DYc.top && (t.particle.position.y = s),
                                t.outMode === b.Voc.split && t.particle.destroy();
                        })({ particle: t, outMode: s, direction: e, bounds: c, canvasSize: h, offset: r, size: l });
                }
            }
            class tz {
                constructor(t) {
                    (this.container = t), (this.modes = [b.Voc.destroy]);
                }
                update(t, e, i, s) {
                    if (!this.modes.includes(s)) return;
                    let o = this.container;
                    switch (t.outType) {
                        case b.Igb.normal:
                        case b.Igb.outside:
                            if ((0, b.Ac)(t.position, o.canvas.size, b.OWs.origin, t.getRadius(), e)) return;
                            break;
                        case b.Igb.inside: {
                            let { dx: e, dy: i } = (0, b.oW6)(t.position, t.moveCenter),
                                { x: s, y: o } = t.velocity;
                            if ((s < 0 && e > t.moveCenter.radius) || (o < 0 && i > t.moveCenter.radius) || (s >= 0 && e < -t.moveCenter.radius) || (o >= 0 && i < -t.moveCenter.radius)) return;
                        }
                    }
                    o.particles.remove(t, void 0, !0);
                }
            }
            class tk {
                constructor(t) {
                    (this.container = t), (this.modes = [b.Voc.none]);
                }
                update(t, e, i, s) {
                    if (!this.modes.includes(s) || ((t.options.move.distance.horizontal && (e === b.DYc.left || e === b.DYc.right)) ?? (t.options.move.distance.vertical && (e === b.DYc.top || e === b.DYc.bottom)))) return;
                    let o = t.options.move.gravity,
                        n = this.container,
                        a = n.canvas.size,
                        r = t.getRadius();
                    if (o.enable) {
                        let i = t.position;
                        ((!o.inverse && i.y > a.height + r && e === b.DYc.bottom) || (o.inverse && i.y < -r && e === b.DYc.top)) && n.particles.remove(t);
                    } else {
                        if ((t.velocity.y > 0 && t.position.y <= a.height + r) || (t.velocity.y < 0 && t.position.y >= -r) || (t.velocity.x > 0 && t.position.x <= a.width + r) || (t.velocity.x < 0 && t.position.x >= -r)) return;
                        (0, b.Ac)(t.position, n.canvas.size, b.OWs.origin, r, e) || n.particles.remove(t);
                    }
                }
            }
            class tC {
                constructor(t) {
                    (this.container = t), (this.modes = [b.Voc.out]);
                }
                update(t, e, i, s) {
                    if (!this.modes.includes(s)) return;
                    let o = this.container;
                    if (t.outType === b.Igb.inside) {
                        let { x: e, y: i } = t.velocity,
                            s = b.OWs.origin;
                        (s.length = t.moveCenter.radius), (s.angle = t.velocity.angle + Math.PI), s.addTo(b.OWs.create(t.moveCenter));
                        let { dx: n, dy: a } = (0, b.oW6)(t.position, s);
                        if ((e <= 0 && n >= 0) || (i <= 0 && a >= 0) || (e >= 0 && n <= 0) || (i >= 0 && a <= 0)) return;
                        (t.position.x = Math.floor((0, b.vdf)({ min: 0, max: o.canvas.size.width }))), (t.position.y = Math.floor((0, b.vdf)({ min: 0, max: o.canvas.size.height })));
                        let { dx: r, dy: l } = (0, b.oW6)(t.position, t.moveCenter);
                        (t.direction = Math.atan2(-l, -r)), (t.velocity.angle = t.direction);
                    } else {
                        if ((0, b.Ac)(t.position, o.canvas.size, b.OWs.origin, t.getRadius(), e)) return;
                        switch (t.outType) {
                            case b.Igb.outside: {
                                (t.position.x = Math.floor((0, b.vdf)({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.x),
                                    (t.position.y = Math.floor((0, b.vdf)({ min: -t.moveCenter.radius, max: t.moveCenter.radius })) + t.moveCenter.y);
                                let { dx: e, dy: i } = (0, b.oW6)(t.position, t.moveCenter);
                                t.moveCenter.radius && ((t.direction = Math.atan2(i, e)), (t.velocity.angle = t.direction));
                                break;
                            }
                            case b.Igb.normal: {
                                let i = t.options.move.warp,
                                    s = o.canvas.size,
                                    n = { bottom: s.height + t.getRadius() + t.offset.y, left: -t.getRadius() - t.offset.x, right: s.width + t.getRadius() + t.offset.x, top: -t.getRadius() - t.offset.y },
                                    a = t.getRadius(),
                                    r = (0, b.M_G)(t.position, a);
                                e === b.DYc.right && r.left > s.width + t.offset.x
                                    ? ((t.position.x = n.left), (t.initialPosition.x = t.position.x), i || ((t.position.y = (0, b.sZz)() * s.height), (t.initialPosition.y = t.position.y)))
                                    : e === b.DYc.left && r.right < -t.offset.x && ((t.position.x = n.right), (t.initialPosition.x = t.position.x), i || ((t.position.y = (0, b.sZz)() * s.height), (t.initialPosition.y = t.position.y))),
                                    e === b.DYc.bottom && r.top > s.height + t.offset.y
                                        ? (i || ((t.position.x = (0, b.sZz)() * s.width), (t.initialPosition.x = t.position.x)), (t.position.y = n.top), (t.initialPosition.y = t.position.y))
                                        : e === b.DYc.top && r.bottom < -t.offset.y && (i || ((t.position.x = (0, b.sZz)() * s.width), (t.initialPosition.x = t.position.x)), (t.position.y = n.bottom), (t.initialPosition.y = t.position.y));
                            }
                        }
                    }
                }
            }
            let tP = (t, e) => t.default === e || t.bottom === e || t.left === e || t.right === e || t.top === e;
            class tO {
                constructor(t) {
                    (this._updateOutMode = (t, e, i, s) => {
                        for (let o of this.updaters) o.update(t, s, e, i);
                    }),
                        (this.container = t),
                        (this.updaters = []);
                }
                init(t) {
                    this.updaters = [];
                    let e = t.options.move.outModes;
                    tP(e, b.Voc.bounce)
                        ? this.updaters.push(new t_(this.container))
                        : tP(e, b.Voc.out)
                        ? this.updaters.push(new tC(this.container))
                        : tP(e, b.Voc.destroy)
                        ? this.updaters.push(new tz(this.container))
                        : tP(e, b.Voc.none) && this.updaters.push(new tk(this.container));
                }
                isEnabled(t) {
                    return !t.destroyed && !t.spawning;
                }
                update(t, e) {
                    let i = t.options.move.outModes;
                    this._updateOutMode(t, e, i.bottom ?? i.default, b.DYc.bottom),
                        this._updateOutMode(t, e, i.left ?? i.default, b.DYc.left),
                        this._updateOutMode(t, e, i.right ?? i.default, b.DYc.right),
                        this._updateOutMode(t, e, i.top ?? i.default, b.DYc.top);
                }
            }
            async function tM(t, e = !0) {
                await t.addParticleUpdater("outModes", (t) => Promise.resolve(new tO(t)), e);
            }
            class tS {
                init(t) {
                    let e = t.container,
                        i = t.options.size.animation;
                    i.enable && ((t.size.velocity = ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) / b.tZy) * e.retina.reduceFactor), i.sync || (t.size.velocity *= (0, b.sZz)()));
                }
                isEnabled(t) {
                    return !t.destroyed && !t.spawning && t.size.enable && ((t.size.maxLoops ?? 0) <= 0 || ((t.size.maxLoops ?? 0) > 0 && (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)));
                }
                reset(t) {
                    t.size.loops = 0;
                }
                update(t, e) {
                    this.isEnabled(t) && (0, b.CrJ)(t, t.size, !0, t.options.size.animation.destroy, e);
                }
            }
            async function tD(t, e = !0) {
                await t.addParticleUpdater("size", () => Promise.resolve(new tS()), e);
            }
            async function tE(t, e = !0) {
                await tf(t, !1), await tm(t, !1), await tb(t, !1), await tx(t, !1), await tM(t, !1), await tD(t, !1), await t.refresh(e);
            }
            async function tR() {
                (0, b.bx6)(b.nxi.easeInQuad, (t) => t ** 2), (0, b.bx6)(b.nxi.easeOutQuad, (t) => 1 - (1 - t) ** 2), (0, b.bx6)(b.nxi.easeInOutQuad, (t) => (t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2)), await Promise.resolve();
            }
            let tT = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
            class tI {
                constructor() {
                    (this.validTypes = ["emoji"]), (this._emojiShapeDict = new Map());
                }
                destroy() {
                    for (let [t, e] of this._emojiShapeDict) e instanceof ImageBitmap && (e?.close(), this._emojiShapeDict.delete(t));
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, particle: i, radius: s, opacity: o } = t,
                            n = i.emojiData,
                            a = 2 * s,
                            r = e.globalAlpha;
                        n && ((e.globalAlpha = o), e.drawImage(n, -s, -s, a, a), (e.globalAlpha = r));
                    })(t);
                }
                async init(t) {
                    let e = t.actualOptions,
                        { validTypes: i } = this;
                    if (!i.find((t) => (0, b.dBL)(t, e.particles.shape.type))) return;
                    let s = [(0, b.mxw)(tT)],
                        o = i.map((t) => e.particles.shape.options[t]).find((t) => !!t);
                    o &&
                        (0, b.KH1)(o, (t) => {
                            t.font && s.push((0, b.mxw)(t.font));
                        }),
                        await Promise.all(s);
                }
                particleDestroy(t) {
                    delete t.emojiData;
                }
                particleInit(t, e) {
                    let i;
                    let s = e.shapeData;
                    if (!s?.value) return;
                    let o = (0, b.wA_)(s.value, e.randomIndexData),
                        n = s.font ?? tT;
                    if (!o) return;
                    let a = `${o}_${n}`,
                        r = this._emojiShapeDict.get(a);
                    if (r) {
                        e.emojiData = r;
                        return;
                    }
                    let l = 2 * (0, b.KIV)(e.size.value),
                        c = (0, b.KIV)(e.size.value);
                    if ("undefined" != typeof OffscreenCanvas) {
                        let t = new OffscreenCanvas(l, l),
                            e = t.getContext("2d");
                        if (!e) return;
                        (e.font = `400 ${2 * c}px ${n}`), (e.textBaseline = "middle"), (e.textAlign = "center"), e.fillText(o, c, c), (i = t.transferToImageBitmap());
                    } else {
                        let t = document.createElement("canvas");
                        (t.width = l), (t.height = l);
                        let e = t.getContext("2d");
                        if (!e) return;
                        (e.font = `400 ${2 * c}px ${n}`), (e.textBaseline = "middle"), (e.textAlign = "center"), e.fillText(o, c, c), (i = t);
                    }
                    this._emojiShapeDict.set(a, i), (e.emojiData = i);
                }
            }
            async function tL(t, e = !0) {
                await t.addShape(new tI(), e);
            }
            function tB(t, e, i, s, o) {
                let n = t.actualOptions.interactivity.modes.attract;
                if (n)
                    for (let a of t.particles.quadTree.query(s, o)) {
                        let { dx: t, dy: s, distance: o } = (0, b.oW6)(a.position, e),
                            r = n.speed * n.factor,
                            l = (0, b.uZ5)((0, b._Xd)(n.easing)(1 - o / i) * r, 1, n.maxSpeed),
                            c = b.OWs.create(o ? (t / o) * l : r, o ? (s / o) * l : r);
                        a.position.subFrom(c);
                    }
            }
            class tA {
                constructor() {
                    (this.distance = 200), (this.duration = 0.4), (this.easing = b.nxi.easeOutQuad), (this.factor = 1), (this.maxSpeed = 50), (this.speed = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.distance && (this.distance = t.distance),
                        void 0 !== t.duration && (this.duration = t.duration),
                        void 0 !== t.easing && (this.easing = t.easing),
                        void 0 !== t.factor && (this.factor = t.factor),
                        void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
                        void 0 !== t.speed && (this.speed = t.speed));
                }
            }
            let tq = "attract";
            class tF extends b.L8z {
                constructor(t, e) {
                    super(e),
                        (this._engine = t),
                        e.attract || (e.attract = { particles: [] }),
                        (this.handleClickMode = (t) => {
                            let i = this.container.actualOptions.interactivity.modes.attract;
                            if (i && t === tq) {
                                for (let t of (e.attract || (e.attract = { particles: [] }), (e.attract.clicking = !0), (e.attract.count = 0), e.attract.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                                (e.attract.particles = []),
                                    (e.attract.finish = !1),
                                    setTimeout(() => {
                                        e.destroyed || (e.attract || (e.attract = { particles: [] }), (e.attract.clicking = !1));
                                    }, i.duration * b.X5o);
                            }
                        });
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.attract;
                    e && (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio);
                }
                interact() {
                    let t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === b.WtO,
                        s = e.interactivity.events,
                        { enable: o, mode: n } = s.onHover,
                        { enable: a, mode: r } = s.onClick;
                    i && o && (0, b.dBL)(tq, n)
                        ? (function (t, e) {
                              let i = t.interactivity.mouse.position,
                                  s = t.retina.attractModeDistance;
                              s && !(s < 0) && i && tB(t, i, s, new b.Cdc(i.x, i.y, s), (t) => e(t));
                          })(this.container, (t) => this.isEnabled(t))
                        : a &&
                          (0, b.dBL)(tq, r) &&
                          (function (t, e) {
                              t.attract || (t.attract = { particles: [] });
                              let { attract: i } = t;
                              if ((i.finish || (i.count || (i.count = 0), i.count++, i.count !== t.particles.count || (i.finish = !0)), i.clicking)) {
                                  let i = t.interactivity.mouse.clickPosition,
                                      s = t.retina.attractModeDistance;
                                  if (!s || s < 0 || !i) return;
                                  tB(t, i, s, new b.Cdc(i.x, i.y, s), (t) => e(t));
                              } else !1 === i.clicking && (i.particles = []);
                          })(this.container, (t) => this.isEnabled(t));
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse,
                        o = (t?.interactivity ?? i.interactivity).events;
                    if ((!s.position || !o.onHover.enable) && (!s.clickPosition || !o.onClick.enable)) return !1;
                    let n = o.onHover.mode,
                        a = o.onClick.mode;
                    return (0, b.dBL)(tq, n) || (0, b.dBL)(tq, a);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.attract || (t.attract = new tA()), e)) t.attract.load(i?.attract);
                }
                reset() {}
            }
            async function tW(t, e = !0) {
                await t.addInteractor("externalAttract", (e) => Promise.resolve(new tF(t, e)), e);
            }
            let tG = 0.5 * Math.PI;
            function tH(t, e, i, s, o) {
                for (let n of t.particles.quadTree.query(s, o))
                    s instanceof b.Cdc ? (0, b.kRC)((0, b.gy4)(n), { position: e, radius: i, mass: i ** 2 * tG, velocity: b.OWs.origin, factor: b.OWs.origin }) : s instanceof b.AeJ && (0, b.dpV)(n, (0, b.M_G)(e, i));
            }
            class t$ {
                constructor() {
                    this.distance = 200;
                }
                load(t) {
                    t && void 0 !== t.distance && (this.distance = t.distance);
                }
            }
            let tV = "bounce";
            class tZ extends b.L8z {
                constructor(t) {
                    super(t);
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.bounce;
                    e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio);
                }
                interact() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.events,
                        i = t.interactivity.status === b.WtO,
                        s = e.onHover.enable,
                        o = e.onHover.mode,
                        n = e.onDiv;
                    if (i && s && (0, b.dBL)(tV, o))
                        !(function (t, e) {
                            let i = t.retina.pixelRatio,
                                s = t.interactivity.mouse.position,
                                o = t.retina.bounceModeDistance;
                            o && !(o < 0) && s && tH(t, s, o, new b.Cdc(s.x, s.y, o + 10 * i), e);
                        })(this.container, (t) => this.isEnabled(t));
                    else {
                        var a, r;
                        (a = this.container),
                            (r = (t) => this.isEnabled(t)),
                            (0, b.XDe)(tV, n, (t, e) =>
                                (function (t, e, i, s) {
                                    let o = document.querySelectorAll(e);
                                    o.length &&
                                        o.forEach((e) => {
                                            let o = t.retina.pixelRatio,
                                                n = { x: (e.offsetLeft + 0.5 * e.offsetWidth) * o, y: (e.offsetTop + 0.5 * e.offsetHeight) * o },
                                                a = 0.5 * e.offsetWidth * o,
                                                r = 10 * o,
                                                l = i.type === b.gqJ.circle ? new b.Cdc(n.x, n.y, a + r) : new b.AeJ(e.offsetLeft * o - r, e.offsetTop * o - r, e.offsetWidth * o + 2 * r, e.offsetHeight * o + 2 * r);
                                            s(n, a, l);
                                        });
                                })(a, t, e, (t, e, i) => tH(a, t, e, i, r))
                            );
                    }
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse,
                        o = (t?.interactivity ?? i.interactivity).events,
                        n = o.onDiv;
                    return (!!s.position && o.onHover.enable && (0, b.dBL)(tV, o.onHover.mode)) || (0, b.wm$)(tV, n);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.bounce || (t.bounce = new t$()), e)) t.bounce.load(i?.bounce);
                }
                reset() {}
            }
            async function tU(t, e = !0) {
                await t.addInteractor("externalBounce", (t) => Promise.resolve(new tZ(t)), e);
            }
            class tY {
                constructor() {
                    (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
                }
                load(t) {
                    if (t) {
                        if (
                            (void 0 !== t.distance && (this.distance = t.distance),
                            void 0 !== t.duration && (this.duration = t.duration),
                            void 0 !== t.mix && (this.mix = t.mix),
                            void 0 !== t.opacity && (this.opacity = t.opacity),
                            void 0 !== t.color)
                        ) {
                            let e = (0, b.kJL)(this.color) ? void 0 : this.color;
                            this.color = (0, b.KH1)(t.color, (t) => b.OzF.create(e, t));
                        }
                        void 0 !== t.size && (this.size = t.size);
                    }
                }
            }
            class tX extends tY {
                constructor() {
                    super(), (this.selectors = []);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.selectors && (this.selectors = t.selectors);
                }
            }
            class tj extends tY {
                load(t) {
                    super.load(t),
                        t &&
                            (this.divs = (0, b.KH1)(t.divs, (t) => {
                                let e = new tX();
                                return e.load(t), e;
                            }));
                }
            }
            function tN(t, e, i, s) {
                return e >= i ? (0, b.uZ5)(t + (e - i) * s, t, e) : e < i ? (0, b.uZ5)(t - (i - e) * s, e, t) : void 0;
            }
            ((a = v || (v = {})).color = "color"), (a.opacity = "opacity"), (a.size = "size");
            let tK = "bubble";
            class tJ extends b.L8z {
                constructor(t) {
                    super(t),
                        (this._clickBubble = () => {
                            let t = this.container,
                                e = t.actualOptions,
                                i = t.interactivity.mouse.clickPosition,
                                s = e.interactivity.modes.bubble;
                            if (!s || !i) return;
                            t.bubble || (t.bubble = {});
                            let o = t.retina.bubbleModeDistance;
                            if (!o || o < 0) return;
                            let n = t.particles.quadTree.queryCircle(i, o, (t) => this.isEnabled(t)),
                                { bubble: a } = t;
                            for (let e of n) {
                                if (!a.clicking) continue;
                                e.bubble.inRange = !a.durationEnd;
                                let n = e.getPosition(),
                                    r = (0, b.Spd)(n, i),
                                    l = (new Date().getTime() - (t.interactivity.mouse.clickTime ?? 0)) / b.X5o;
                                l > s.duration && (a.durationEnd = !0), l > 2 * s.duration && ((a.clicking = !1), (a.durationEnd = !1));
                                let c = { bubbleObj: { optValue: t.retina.bubbleModeSize, value: e.bubble.radius }, particlesObj: { optValue: (0, b.KIV)(e.options.size.value) * t.retina.pixelRatio, value: e.size.value }, type: v.size };
                                this._process(e, r, l, c);
                                let h = { bubbleObj: { optValue: s.opacity, value: e.bubble.opacity }, particlesObj: { optValue: (0, b.KIV)(e.options.opacity.value), value: e.opacity?.value ?? 1 }, type: v.opacity };
                                this._process(e, r, l, h), !a.durationEnd && r <= o ? this._hoverBubbleColor(e, r) : delete e.bubble.color;
                            }
                        }),
                        (this._hoverBubble = () => {
                            let t = this.container,
                                e = t.interactivity.mouse.position,
                                i = t.retina.bubbleModeDistance;
                            if (i && !(i < 0) && e)
                                for (let s of t.particles.quadTree.queryCircle(e, i, (t) => this.isEnabled(t))) {
                                    s.bubble.inRange = !0;
                                    let o = s.getPosition(),
                                        n = (0, b.Spd)(o, e),
                                        a = 1 - n / i;
                                    n <= i ? a >= 0 && t.interactivity.status === b.WtO && (this._hoverBubbleSize(s, a), this._hoverBubbleOpacity(s, a), this._hoverBubbleColor(s, a)) : this.reset(s),
                                        t.interactivity.status === b.aMP && this.reset(s);
                                }
                        }),
                        (this._hoverBubbleColor = (t, e, i) => {
                            let s = this.container.actualOptions,
                                o = i ?? s.interactivity.modes.bubble;
                            if (o) {
                                if (!t.bubble.finalColor) {
                                    let e = o.color;
                                    if (!e) return;
                                    let i = (0, b.wA_)(e);
                                    t.bubble.finalColor = (0, b.lNs)(i);
                                }
                                if (t.bubble.finalColor) {
                                    if (o.mix) {
                                        t.bubble.color = void 0;
                                        let i = t.getFillColor();
                                        t.bubble.color = i ? (0, b.lCU)((0, b.ocL)(i, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor;
                                    } else t.bubble.color = t.bubble.finalColor;
                                }
                            }
                        }),
                        (this._hoverBubbleOpacity = (t, e, i) => {
                            let s = this.container.actualOptions,
                                o = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
                            if (!o) return;
                            let n = t.options.opacity.value,
                                a = tN(t.opacity?.value ?? 1, o, (0, b.KIV)(n), e);
                            void 0 !== a && (t.bubble.opacity = a);
                        }),
                        (this._hoverBubbleSize = (t, e, i) => {
                            let s = this.container,
                                o = i?.size ? i.size * s.retina.pixelRatio : s.retina.bubbleModeSize;
                            if (void 0 === o) return;
                            let n = (0, b.KIV)(t.options.size.value) * s.retina.pixelRatio,
                                a = tN(t.size.value, o, n, e);
                            void 0 !== a && (t.bubble.radius = a);
                        }),
                        (this._process = (t, e, i, s) => {
                            let o = this.container,
                                n = s.bubbleObj.optValue,
                                a = o.actualOptions.interactivity.modes.bubble;
                            if (!a || void 0 === n) return;
                            let r = a.duration,
                                l = o.retina.bubbleModeDistance,
                                c = s.particlesObj.optValue,
                                h = s.bubbleObj.value,
                                d = s.particlesObj.value ?? 0,
                                u = s.type;
                            if (l && !(l < 0) && n !== c) {
                                if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd)) h && (u === v.size && delete t.bubble.radius, u === v.opacity && delete t.bubble.opacity);
                                else if (e <= l) {
                                    if ((h ?? d) !== n) {
                                        let e = d - (i * (d - n)) / r;
                                        u === v.size && (t.bubble.radius = e), u === v.opacity && (t.bubble.opacity = e);
                                    }
                                } else u === v.size && delete t.bubble.radius, u === v.opacity && delete t.bubble.opacity;
                            }
                        }),
                        (this._singleSelectorHover = (t, e, i) => {
                            let s = this.container,
                                o = document.querySelectorAll(e),
                                n = s.actualOptions.interactivity.modes.bubble;
                            n &&
                                o.length &&
                                o.forEach((e) => {
                                    let o = s.retina.pixelRatio,
                                        a = { x: (e.offsetLeft + 0.5 * e.offsetWidth) * o, y: (e.offsetTop + 0.5 * e.offsetHeight) * o },
                                        r = 0.5 * e.offsetWidth * o,
                                        l = i.type === b.gqJ.circle ? new b.Cdc(a.x, a.y, r) : new b.AeJ(e.offsetLeft * o, e.offsetTop * o, e.offsetWidth * o, e.offsetHeight * o);
                                    for (let i of s.particles.quadTree.query(l, (t) => this.isEnabled(t))) {
                                        if (!l.contains(i.getPosition())) continue;
                                        i.bubble.inRange = !0;
                                        let s = n.divs,
                                            o = (0, b.iCg)(s, e);
                                        (i.bubble.div && i.bubble.div === e) || (this.clear(i, t, !0), (i.bubble.div = e)), this._hoverBubbleSize(i, 1, o), this._hoverBubbleOpacity(i, 1, o), this._hoverBubbleColor(i, 1, o);
                                    }
                                });
                        }),
                        t.bubble || (t.bubble = {}),
                        (this.handleClickMode = (e) => {
                            e === tK && (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0));
                        });
                }
                clear(t, e, i) {
                    (!t.bubble.inRange || i) && (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color);
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.bubble;
                    e && ((t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio), void 0 !== e.size && (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio));
                }
                interact(t) {
                    let e = this.container.actualOptions.interactivity.events,
                        i = e.onHover,
                        s = e.onClick,
                        o = i.enable,
                        n = i.mode,
                        a = s.enable,
                        r = s.mode,
                        l = e.onDiv;
                    o && (0, b.dBL)(tK, n) ? this._hoverBubble() : a && (0, b.dBL)(tK, r) ? this._clickBubble() : (0, b.XDe)(tK, l, (e, i) => this._singleSelectorHover(t, e, i));
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse,
                        { onClick: o, onDiv: n, onHover: a } = (t?.interactivity ?? i.interactivity).events,
                        r = (0, b.wm$)(tK, n);
                    return (!!r || (!!a.enable && !!s.position) || (!!o.enable && !!s.clickPosition)) && ((0, b.dBL)(tK, a.mode) || (0, b.dBL)(tK, o.mode) || r);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.bubble || (t.bubble = new tj()), e)) t.bubble.load(i?.bubble);
                }
                reset(t) {
                    t.bubble.inRange = !1;
                }
            }
            async function tQ(t, e = !0) {
                await t.addInteractor("externalBubble", (t) => Promise.resolve(new tJ(t)), e);
            }
            class t0 {
                constructor() {
                    this.opacity = 0.5;
                }
                load(t) {
                    t && void 0 !== t.opacity && (this.opacity = t.opacity);
                }
            }
            class t1 {
                constructor() {
                    (this.distance = 80), (this.links = new t0()), (this.radius = 60);
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(t.links), void 0 !== t.radius && (this.radius = t.radius));
                }
            }
            class t2 extends b.L8z {
                constructor(t) {
                    super(t);
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.connect;
                    e && ((t.retina.connectModeDistance = e.distance * t.retina.pixelRatio), (t.retina.connectModeRadius = e.radius * t.retina.pixelRatio));
                }
                interact() {
                    let t = this.container;
                    if (t.actualOptions.interactivity.events.onHover.enable && "pointermove" === t.interactivity.status) {
                        let e = t.interactivity.mouse.position,
                            { connectModeDistance: i, connectModeRadius: s } = t.retina;
                        if (!i || i < 0 || !s || s < 0 || !e) return;
                        let o = t.particles.quadTree.queryCircle(e, Math.abs(s), (t) => this.isEnabled(t));
                        o.forEach((e, s) => {
                            let n = e.getPosition();
                            for (let a of o.slice(s + 1)) {
                                let s = a.getPosition(),
                                    o = Math.abs(i),
                                    r = Math.abs(n.x - s.x),
                                    l = Math.abs(n.y - s.y);
                                r < o &&
                                    l < o &&
                                    (function (t, e, i) {
                                        t.canvas.draw((s) => {
                                            var o;
                                            let n = (function (t, e, i, s) {
                                                let o = t.actualOptions.interactivity.modes.connect;
                                                if (o)
                                                    return (function (t, e, i, s) {
                                                        let o = Math.floor(i.getRadius() / e.getRadius()),
                                                            n = e.getFillColor(),
                                                            a = i.getFillColor();
                                                        if (!n || !a) return;
                                                        let r = e.getPosition(),
                                                            l = i.getPosition(),
                                                            c = (0, b.ocL)(n, a, e.getRadius(), i.getRadius()),
                                                            h = t.createLinearGradient(r.x, r.y, l.x, l.y);
                                                        return h.addColorStop(0, (0, b.vzQ)(n, s)), h.addColorStop((0, b.uZ5)(o, 0, 1), (0, b.izR)(c, s)), h.addColorStop(1, (0, b.vzQ)(a, s)), h;
                                                    })(e, i, s, o.links.opacity);
                                            })(t, s, e, i);
                                            if (!n) return;
                                            let a = e.getPosition(),
                                                r = i.getPosition();
                                            (o = e.retina.linksWidth ?? 0), (0, b.pSR)(s, a, r), (s.lineWidth = o), (s.strokeStyle = n), s.stroke();
                                        });
                                    })(t, e, a);
                            }
                        });
                    }
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.interactivity.mouse,
                        s = (t?.interactivity ?? e.actualOptions.interactivity).events;
                    return !!s.onHover.enable && !!i.position && (0, b.dBL)("connect", s.onHover.mode);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.connect || (t.connect = new t1()), e)) t.connect.load(i?.connect);
                }
                reset() {}
            }
            async function t5(t, e = !0) {
                await t.addInteractor("externalConnect", (t) => Promise.resolve(new t2(t)), e);
            }
            class t6 {
                constructor() {
                    (this.blink = !1), (this.consent = !1), (this.opacity = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.blink && (this.blink = t.blink),
                        void 0 !== t.color && (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.consent && (this.consent = t.consent),
                        void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class t3 {
                constructor() {
                    (this.distance = 100), (this.links = new t6());
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(t.links));
                }
            }
            class t7 extends b.L8z {
                constructor(t) {
                    super(t);
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.grab;
                    e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio);
                }
                interact() {
                    let t = this.container,
                        e = t.actualOptions.interactivity;
                    if (!e.modes.grab || !e.events.onHover.enable || t.interactivity.status !== b.WtO) return;
                    let i = t.interactivity.mouse.position;
                    if (!i) return;
                    let s = t.retina.grabModeDistance;
                    if (s && !(s < 0))
                        for (let o of t.particles.quadTree.queryCircle(i, s, (t) => this.isEnabled(t))) {
                            let n = o.getPosition(),
                                a = (0, b.Spd)(n, i);
                            if (a > s) continue;
                            let r = e.modes.grab.links,
                                l = r.opacity,
                                c = l - (a * l) / s;
                            if (c <= 0) continue;
                            let h = r.color ?? o.options.links?.color;
                            if (!t.particles.grabLineColor && h) {
                                let i = e.modes.grab.links;
                                t.particles.grabLineColor = (0, b.Dt5)(h, i.blink, i.consent);
                            }
                            let d = (0, b.BEi)(o, void 0, t.particles.grabLineColor);
                            d &&
                                (function (t, e, i, s, o) {
                                    t.canvas.draw((t) => {
                                        var n;
                                        let a = e.getPosition();
                                        (n = e.retina.linksWidth ?? 0), (0, b.pSR)(t, a, o), (t.strokeStyle = (0, b.izR)(i, s)), (t.lineWidth = n), t.stroke();
                                    });
                                })(t, o, d, c, i);
                        }
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.interactivity.mouse,
                        s = (t?.interactivity ?? e.actualOptions.interactivity).events;
                    return s.onHover.enable && !!i.position && (0, b.dBL)("grab", s.onHover.mode);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.grab || (t.grab = new t3()), e)) t.grab.load(i?.grab);
                }
                reset() {}
            }
            async function t4(t, e = !0) {
                await t.addInteractor("externalGrab", (t) => Promise.resolve(new t7(t)), e);
            }
            class t8 extends b.L8z {
                constructor(t) {
                    super(t),
                        (this.handleClickMode = (t) => {
                            if ("pause" !== t) return;
                            let e = this.container;
                            e.animationStatus ? e.pause() : e.play();
                        });
                }
                clear() {}
                init() {}
                interact() {}
                isEnabled() {
                    return !0;
                }
                reset() {}
            }
            async function t9(t, e = !0) {
                await t.addInteractor("externalPause", (t) => Promise.resolve(new t8(t)), e);
            }
            class et {
                constructor() {
                    (this.default = !0), (this.groups = []), (this.quantity = 4);
                }
                load(t) {
                    if (!t) return;
                    void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map((t) => t)), this.groups.length || (this.default = !0);
                    let e = t.quantity;
                    void 0 !== e && (this.quantity = (0, b.Cst)(e));
                }
            }
            class ee extends b.L8z {
                constructor(t) {
                    super(t),
                        (this.handleClickMode = (t) => {
                            if ("push" !== t) return;
                            let e = this.container,
                                i = e.actualOptions.interactivity.modes.push;
                            if (!i) return;
                            let s = (0, b.Gu7)(i.quantity);
                            if (s <= 0) return;
                            let o = (0, b.c86)([void 0, ...i.groups]),
                                n = void 0 !== o ? e.actualOptions.particles.groups[o] : void 0;
                            e.particles.push(s, e.interactivity.mouse, n, o);
                        });
                }
                clear() {}
                init() {}
                interact() {}
                isEnabled() {
                    return !0;
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.push || (t.push = new et()), e)) t.push.load(i?.push);
                }
                reset() {}
            }
            async function ei(t, e = !0) {
                await t.addInteractor("externalPush", (t) => Promise.resolve(new ee(t)), e);
            }
            class es {
                constructor() {
                    this.quantity = 2;
                }
                load(t) {
                    if (!t) return;
                    let e = t.quantity;
                    void 0 !== e && (this.quantity = (0, b.Cst)(e));
                }
            }
            class eo extends b.L8z {
                constructor(t) {
                    super(t),
                        (this.handleClickMode = (t) => {
                            let e = this.container,
                                i = e.actualOptions;
                            if (!i.interactivity.modes.remove || "remove" !== t) return;
                            let s = (0, b.Gu7)(i.interactivity.modes.remove.quantity);
                            e.particles.removeQuantity(s);
                        });
                }
                clear() {}
                init() {}
                interact() {}
                isEnabled() {
                    return !0;
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.remove || (t.remove = new es()), e)) t.remove.load(i?.remove);
                }
                reset() {}
            }
            async function en(t, e = !0) {
                await t.addInteractor("externalRemove", (t) => Promise.resolve(new eo(t)), e);
            }
            class ea {
                constructor() {
                    (this.distance = 200), (this.duration = 0.4), (this.factor = 100), (this.speed = 1), (this.maxSpeed = 50), (this.easing = b.nxi.easeOutQuad);
                }
                load(t) {
                    t &&
                        (void 0 !== t.distance && (this.distance = t.distance),
                        void 0 !== t.duration && (this.duration = t.duration),
                        void 0 !== t.easing && (this.easing = t.easing),
                        void 0 !== t.factor && (this.factor = t.factor),
                        void 0 !== t.speed && (this.speed = t.speed),
                        void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
                }
            }
            class er extends ea {
                constructor() {
                    super(), (this.selectors = []);
                }
                load(t) {
                    super.load(t), t && void 0 !== t.selectors && (this.selectors = t.selectors);
                }
            }
            class el extends ea {
                load(t) {
                    super.load(t),
                        t &&
                            (this.divs = (0, b.KH1)(t.divs, (t) => {
                                let e = new er();
                                return e.load(t), e;
                            }));
                }
            }
            let ec = "repulse";
            class eh extends b.L8z {
                constructor(t, e) {
                    super(e),
                        (this._clickRepulse = () => {
                            let t = this.container,
                                e = t.actualOptions.interactivity.modes.repulse;
                            if (!e) return;
                            let i = t.repulse ?? { particles: [] };
                            if ((i.finish || (i.count || (i.count = 0), i.count++, i.count !== t.particles.count || (i.finish = !0)), i.clicking)) {
                                let s = t.retina.repulseModeDistance;
                                if (!s || s < 0) return;
                                let o = Math.pow(s / 6, 3),
                                    n = t.interactivity.mouse.clickPosition;
                                if (void 0 === n) return;
                                let a = new b.Cdc(n.x, n.y, o);
                                for (let s of t.particles.quadTree.query(a, (t) => this.isEnabled(t))) {
                                    let { dx: t, dy: a, distance: r } = (0, b.oW6)(n, s.position),
                                        l = r ** 2,
                                        c = (-o * e.speed) / l;
                                    if (l <= o) {
                                        i.particles.push(s);
                                        let e = b.OWs.create(t, a);
                                        (e.length = c), s.velocity.setTo(e);
                                    }
                                }
                            } else if (!1 === i.clicking) {
                                for (let t of i.particles) t.velocity.setTo(t.initialVelocity);
                                i.particles = [];
                            }
                        }),
                        (this._hoverRepulse = () => {
                            let t = this.container,
                                e = t.interactivity.mouse.position,
                                i = t.retina.repulseModeDistance;
                            i && !(i < 0) && e && this._processRepulse(e, i, new b.Cdc(e.x, e.y, i));
                        }),
                        (this._processRepulse = (t, e, i, s) => {
                            let o = this.container,
                                n = o.particles.quadTree.query(i, (t) => this.isEnabled(t)),
                                a = o.actualOptions.interactivity.modes.repulse;
                            if (!a) return;
                            let { easing: r, speed: l, factor: c, maxSpeed: h } = a,
                                d = (0, b._Xd)(r),
                                u = (s?.speed ?? l) * c;
                            for (let i of n) {
                                let { dx: s, dy: o, distance: n } = (0, b.oW6)(i.position, t),
                                    a = (0, b.uZ5)(d(1 - n / e) * u, 0, h),
                                    r = b.OWs.create(n ? (s / n) * a : u, n ? (o / n) * a : u);
                                i.position.addTo(r);
                            }
                        }),
                        (this._singleSelectorRepulse = (t, e) => {
                            let i = this.container,
                                s = i.actualOptions.interactivity.modes.repulse;
                            if (!s) return;
                            let o = document.querySelectorAll(t);
                            o.length &&
                                o.forEach((t) => {
                                    let o = i.retina.pixelRatio,
                                        n = { x: (t.offsetLeft + 0.5 * t.offsetWidth) * o, y: (t.offsetTop + 0.5 * t.offsetHeight) * o },
                                        a = 0.5 * t.offsetWidth * o,
                                        r = e.type === b.gqJ.circle ? new b.Cdc(n.x, n.y, a) : new b.AeJ(t.offsetLeft * o, t.offsetTop * o, t.offsetWidth * o, t.offsetHeight * o),
                                        l = s.divs,
                                        c = (0, b.iCg)(l, t);
                                    this._processRepulse(n, a, r, c);
                                });
                        }),
                        (this._engine = t),
                        e.repulse || (e.repulse = { particles: [] }),
                        (this.handleClickMode = (t) => {
                            let i = this.container.actualOptions.interactivity.modes.repulse;
                            if (!i || t !== ec) return;
                            e.repulse || (e.repulse = { particles: [] });
                            let s = e.repulse;
                            for (let t of ((s.clicking = !0), (s.count = 0), e.repulse.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                            (s.particles = []),
                                (s.finish = !1),
                                setTimeout(() => {
                                    e.destroyed || (s.clicking = !1);
                                }, i.duration * b.X5o);
                        });
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.repulse;
                    e && (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio);
                }
                interact() {
                    let t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === b.WtO,
                        s = e.interactivity.events,
                        o = s.onHover,
                        n = o.enable,
                        a = o.mode,
                        r = s.onClick,
                        l = r.enable,
                        c = r.mode,
                        h = s.onDiv;
                    i && n && (0, b.dBL)(ec, a) ? this._hoverRepulse() : l && (0, b.dBL)(ec, c) ? this._clickRepulse() : (0, b.XDe)(ec, h, (t, e) => this._singleSelectorRepulse(t, e));
                }
                isEnabled(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse,
                        o = (t?.interactivity ?? i.interactivity).events,
                        n = o.onDiv,
                        a = o.onHover,
                        r = o.onClick,
                        l = (0, b.wm$)(ec, n);
                    if (!(l || (a.enable && s.position) || (r.enable && s.clickPosition))) return !1;
                    let c = a.mode,
                        h = r.mode;
                    return (0, b.dBL)(ec, c) || (0, b.dBL)(ec, h) || l;
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.repulse || (t.repulse = new el()), e)) t.repulse.load(i?.repulse);
                }
                reset() {}
            }
            async function ed(t, e = !0) {
                await t.addInteractor("externalRepulse", (e) => Promise.resolve(new eh(t, e)), e);
            }
            class eu {
                constructor() {
                    (this.factor = 3), (this.radius = 200);
                }
                load(t) {
                    t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius));
                }
            }
            class ep extends b.L8z {
                constructor(t) {
                    super(t);
                }
                clear(t, e, i) {
                    (!t.slow.inRange || i) && (t.slow.factor = 1);
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.slow;
                    e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio);
                }
                interact() {}
                isEnabled(t) {
                    let e = this.container,
                        i = e.interactivity.mouse,
                        s = (t?.interactivity ?? e.actualOptions.interactivity).events;
                    return s.onHover.enable && !!i.position && (0, b.dBL)("slow", s.onHover.mode);
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.slow || (t.slow = new eu()), e)) t.slow.load(i?.slow);
                }
                reset(t) {
                    t.slow.inRange = !1;
                    let e = this.container,
                        i = e.actualOptions,
                        s = e.interactivity.mouse.position,
                        o = e.retina.slowModeRadius,
                        n = i.interactivity.modes.slow;
                    if (!n || !o || o < 0 || !s) return;
                    let a = t.getPosition(),
                        r = (0, b.Spd)(s, a),
                        l = n.factor,
                        { slow: c } = t;
                    r > o || ((c.inRange = !0), (c.factor = r / o / l));
                }
            }
            async function ef(t, e = !0) {
                await t.addInteractor("externalSlow", (t) => Promise.resolve(new ep(t)), e);
            }
            let ev = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
            async function ey(t) {
                return new Promise((e) => {
                    t.loading = !0;
                    let i = new Image();
                    (t.element = i),
                        i.addEventListener("load", () => {
                            (t.loading = !1), e();
                        }),
                        i.addEventListener("error", () => {
                            (t.element = void 0), (t.error = !0), (t.loading = !1), (0, b.jl5)().error(`${b.gK4} loading image: ${t.source}`), e();
                        }),
                        (i.src = t.source);
                });
            }
            async function em(t) {
                if ("svg" !== t.type) {
                    await ey(t);
                    return;
                }
                t.loading = !0;
                let e = await fetch(t.source);
                e.ok ? (t.svgData = await e.text()) : ((0, b.jl5)().error(`${b.gK4} Image not found`), (t.error = !0)), (t.loading = !1);
            }
            let eg = [0, 4, 2, 1],
                eb = [8, 8, 4, 2];
            class ew {
                constructor(t) {
                    (this.pos = 0), (this.data = new Uint8ClampedArray(t));
                }
                getString(t) {
                    let e = this.data.slice(this.pos, this.pos + t);
                    return (this.pos += e.length), e.reduce((t, e) => t + String.fromCharCode(e), "");
                }
                nextByte() {
                    return this.data[this.pos++];
                }
                nextTwoBytes() {
                    return (this.pos += 2), this.data[this.pos - 2] + (this.data[this.pos - 1] << 8);
                }
                readSubBlocks() {
                    let t = "",
                        e = 0;
                    do {
                        e = this.data[this.pos++];
                        for (let i = e; --i >= 0; t += String.fromCharCode(this.data[this.pos++]));
                    } while (0 !== e);
                    return t;
                }
                readSubBlocksBin() {
                    let t = this.data[this.pos],
                        e = 0;
                    for (let i = 0; 0 !== t; i += t + 1, t = this.data[this.pos + i]) e += t;
                    let i = new Uint8Array(e);
                    t = this.data[this.pos++];
                    for (let e = 0; 0 !== t; t = this.data[this.pos++]) for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
                    return i;
                }
                skipSubBlocks() {
                    for (; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1);
                    this.pos++;
                }
            }
            ((r = y || (y = {}))[(r.Replace = 0)] = "Replace"),
                (r[(r.Combine = 1)] = "Combine"),
                (r[(r.RestoreBackground = 2)] = "RestoreBackground"),
                (r[(r.RestorePrevious = 3)] = "RestorePrevious"),
                (r[(r.UndefinedA = 4)] = "UndefinedA"),
                (r[(r.UndefinedB = 5)] = "UndefinedB"),
                (r[(r.UndefinedC = 6)] = "UndefinedC"),
                (r[(r.UndefinedD = 7)] = "UndefinedD"),
                ((l = m || (m = {}))[(l.Extension = 33)] = "Extension"),
                (l[(l.ApplicationExtension = 255)] = "ApplicationExtension"),
                (l[(l.GraphicsControlExtension = 249)] = "GraphicsControlExtension"),
                (l[(l.PlainTextExtension = 1)] = "PlainTextExtension"),
                (l[(l.CommentExtension = 254)] = "CommentExtension"),
                (l[(l.Image = 44)] = "Image"),
                (l[(l.EndOfFile = 59)] = "EndOfFile");
            let ex = { x: 0, y: 0 };
            function e_(t, e) {
                let i = [];
                for (let s = 0; s < e; s++) i.push({ r: t.data[t.pos], g: t.data[t.pos + 1], b: t.data[t.pos + 2] }), (t.pos += 3);
                return i;
            }
            async function ez(t, e, i, s, o, n) {
                let a = e.frames[s(!0)];
                (a.left = t.nextTwoBytes()), (a.top = t.nextTwoBytes()), (a.width = t.nextTwoBytes()), (a.height = t.nextTwoBytes());
                let r = t.nextByte(),
                    l = (128 & r) == 128;
                (a.sortFlag = (32 & r) == 32), (a.reserved = (24 & r) >>> 3), l && (a.localColorTable = e_(t, 1 << ((7 & r) + 1)));
                let c = (t) => {
                        let { r: s, g: n, b: r } = (l ? a.localColorTable : e.globalColorTable)[t];
                        return t !== o(null) ? { r: s, g: n, b: r, a: 255 } : { r: s, g: n, b: r, a: i ? ~~((s + n + r) / 3) : 0 };
                    },
                    h = (() => {
                        try {
                            return new ImageData(a.width, a.height, { colorSpace: "srgb" });
                        } catch (t) {
                            if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
                            throw t;
                        }
                    })();
                if (null == h) throw EvalError("GIF frame size is to large");
                let d = t.nextByte(),
                    u = t.readSubBlocksBin(),
                    p = 1 << d,
                    f = (t, e) => {
                        let i = t >>> 3,
                            s = 7 & t;
                        return ((u[i] + (u[i + 1] << 8) + (u[i + 2] << 16)) & (((1 << e) - 1) << s)) >>> s;
                    };
                if ((64 & r) == 64) {
                    for (let i = 0, o = d + 1, r = 0, l = [[0]], u = 0; u < 4; u++) {
                        if (eg[u] < a.height) {
                            let t = 0,
                                e = 0,
                                s = !1;
                            for (; !s; ) {
                                let n = i;
                                if (((i = f(r, o)), (r += o + 1), i === p)) {
                                    (o = d + 1), (l.length = p + 2);
                                    for (let t = 0; t < l.length; t++) l[t] = t < p ? [t] : [];
                                } else {
                                    for (let s of (i >= l.length ? l.push(l[n].concat(l[n][0])) : n !== p && l.push(l[n].concat(l[i][0])), l[i])) {
                                        let { r: i, g: o, b: n, a: r } = c(s);
                                        h.data.set([i, o, n, r], eg[u] * a.width + eb[u] * e + (t % (4 * a.width))), (t += 4);
                                    }
                                    l.length === 1 << o && o < 12 && o++;
                                }
                                t === 4 * a.width * (e + 1) && (e++, eg[u] + eb[u] * e >= a.height && (s = !0));
                            }
                        }
                        n?.(t.pos / (t.data.length - 1), s(!1) + 1, h, { x: a.left, y: a.top }, { width: e.width, height: e.height });
                    }
                    (a.image = h), (a.bitmap = await createImageBitmap(h));
                } else {
                    let i = 0,
                        o = d + 1,
                        r = 0,
                        l = -4,
                        u = !1,
                        v = [[0]];
                    for (; !u; ) {
                        let t = i;
                        if (((i = f(r, o)), (r += o), i === p)) {
                            (o = d + 1), (v.length = p + 2);
                            for (let t = 0; t < v.length; t++) v[t] = t < p ? [t] : [];
                        } else {
                            if (i === p + 1) {
                                u = !0;
                                break;
                            }
                            for (let e of (i >= v.length ? v.push(v[t].concat(v[t][0])) : t !== p && v.push(v[t].concat(v[i][0])), v[i])) {
                                let { r: t, g: i, b: s, a: o } = c(e);
                                h.data.set([t, i, s, o], (l += 4));
                            }
                            v.length >= 1 << o && o < 12 && o++;
                        }
                    }
                    (a.image = h), (a.bitmap = await createImageBitmap(h)), n?.((t.pos + 1) / t.data.length, s(!1) + 1, a.image, { x: a.left, y: a.top }, { width: e.width, height: e.height });
                }
            }
            async function ek(t, e, i, s, o, n) {
                switch (t.nextByte()) {
                    case m.EndOfFile:
                        return !0;
                    case m.Image:
                        await ez(t, e, i, s, o, n);
                        break;
                    case m.Extension:
                        !(function (t, e, i, s) {
                            switch (t.nextByte()) {
                                case m.GraphicsControlExtension: {
                                    let o = e.frames[i(!1)];
                                    t.pos++;
                                    let n = t.nextByte();
                                    (o.GCreserved = (224 & n) >>> 5), (o.disposalMethod = (28 & n) >>> 2), (o.userInputDelayFlag = (2 & n) == 2), (o.delayTime = 10 * t.nextTwoBytes());
                                    let a = t.nextByte();
                                    (1 & n) == 1 && s(a), t.pos++;
                                    break;
                                }
                                case m.ApplicationExtension: {
                                    t.pos++;
                                    let i = { identifier: t.getString(8), authenticationCode: t.getString(3), data: t.readSubBlocksBin() };
                                    e.applicationExtensions.push(i);
                                    break;
                                }
                                case m.CommentExtension:
                                    e.comments.push([i(!1), t.readSubBlocks()]);
                                    break;
                                case m.PlainTextExtension:
                                    if (0 === e.globalColorTable.length) throw EvalError("plain text extension without global color table");
                                    t.pos++,
                                        (e.frames[i(!1)].plainTextData = {
                                            left: t.nextTwoBytes(),
                                            top: t.nextTwoBytes(),
                                            width: t.nextTwoBytes(),
                                            height: t.nextTwoBytes(),
                                            charSize: { width: t.nextTwoBytes(), height: t.nextTwoBytes() },
                                            foregroundColor: t.nextByte(),
                                            backgroundColor: t.nextByte(),
                                            text: t.readSubBlocks(),
                                        });
                                    break;
                                default:
                                    t.skipSubBlocks();
                            }
                        })(t, e, s, o);
                        break;
                    default:
                        throw EvalError("undefined block found");
                }
                return !1;
            }
            async function eC(t, e, i) {
                i || (i = !1);
                let s = await fetch(t);
                if (!s.ok && 404 === s.status) throw EvalError("file not found");
                let o = await s.arrayBuffer(),
                    n = {
                        width: 0,
                        height: 0,
                        totalTime: 0,
                        colorRes: 0,
                        pixelAspectRatio: 0,
                        frames: [],
                        sortFlag: !1,
                        globalColorTable: [],
                        backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
                        comments: [],
                        applicationExtensions: [],
                    },
                    a = new ew(new Uint8ClampedArray(o));
                if ("GIF89a" !== a.getString(6)) throw Error("not a supported GIF file");
                (n.width = a.nextTwoBytes()), (n.height = a.nextTwoBytes());
                let r = a.nextByte(),
                    l = (128 & r) == 128;
                (n.colorRes = (112 & r) >>> 4), (n.sortFlag = (8 & r) == 8);
                let c = a.nextByte();
                (n.pixelAspectRatio = a.nextByte()), 0 !== n.pixelAspectRatio && (n.pixelAspectRatio = (n.pixelAspectRatio + 15) / 64), l && (n.globalColorTable = e_(a, 1 << ((7 & r) + 1)));
                let h = (() => {
                    try {
                        return new ImageData(n.width, n.height, { colorSpace: "srgb" });
                    } catch (t) {
                        if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
                        throw t;
                    }
                })();
                if (null == h) throw Error("GIF frame size is to large");
                let { r: d, g: u, b: p } = n.globalColorTable[c];
                h.data.set(l ? [d, u, p, 255] : [0, 0, 0, 0]);
                for (let t = 4; t < h.data.length; t *= 2) h.data.copyWithin(t, 0, t);
                n.backgroundImage = h;
                let f = -1,
                    v = !0,
                    m = -1,
                    g = (t) => (t && (v = !0), f),
                    b = (t) => (null != t && (m = t), m);
                try {
                    do
                        v &&
                            (n.frames.push({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                disposalMethod: y.Replace,
                                image: new ImageData(1, 1, { colorSpace: "srgb" }),
                                plainTextData: null,
                                userInputDelayFlag: !1,
                                delayTime: 0,
                                sortFlag: !1,
                                localColorTable: [],
                                reserved: 0,
                                GCreserved: 0,
                            }),
                            f++,
                            (m = -1),
                            (v = !1));
                    while (!(await ek(a, n, i, g, b, e)));
                    for (let t of (n.frames.length--, n.frames)) {
                        if (t.userInputDelayFlag && 0 === t.delayTime) {
                            n.totalTime = 1 / 0;
                            break;
                        }
                        n.totalTime += t.delayTime;
                    }
                    return n;
                } catch (t) {
                    if (t instanceof EvalError) throw Error(`error while parsing frame ${f} "${t.message}"`);
                    throw t;
                }
            }
            async function eP(t) {
                if ("gif" !== t.type) {
                    await ey(t);
                    return;
                }
                t.loading = !0;
                try {
                    (t.gifData = await eC(t.source)),
                        (t.gifLoopCount =
                            (function (t) {
                                for (let e of t.applicationExtensions) if (e.identifier + e.authenticationCode === "NETSCAPE2.0") return e.data[1] + (e.data[2] << 8);
                                return NaN;
                            })(t.gifData) ?? 0),
                        t.gifLoopCount || (t.gifLoopCount = 1 / 0);
                } catch {
                    t.error = !0;
                }
                t.loading = !1;
            }
            class eO {
                constructor(t) {
                    (this.validTypes = ["image", "images"]),
                        (this.loadImageShape = async (t) => {
                            if (!this._engine.loadImage) throw Error(`${b.gK4} image shape not initialized`);
                            await this._engine.loadImage({ gif: t.gif, name: t.name, replaceColor: t.replaceColor ?? !1, src: t.src });
                        }),
                        (this._engine = t);
                }
                addImage(t) {
                    this._engine.images || (this._engine.images = []), this._engine.images.push(t);
                }
                draw(t) {
                    let { context: e, radius: i, particle: s, opacity: o } = t,
                        n = s.image,
                        a = n?.element;
                    if (n) {
                        if (((e.globalAlpha = o), n.gif && n.gifData))
                            !(function (t) {
                                let { context: e, radius: i, particle: s, delta: o } = t,
                                    n = s.image;
                                if (!n?.gifData || !n.gif) return;
                                let a = new OffscreenCanvas(n.gifData.width, n.gifData.height),
                                    r = a.getContext("2d");
                                if (!r) throw Error("could not create offscreen canvas context");
                                (r.imageSmoothingQuality = "low"), (r.imageSmoothingEnabled = !1), r.clearRect(ex.x, ex.y, a.width, a.height), void 0 === s.gifLoopCount && (s.gifLoopCount = n.gifLoopCount ?? 0);
                                let l = s.gifFrame ?? 0,
                                    c = { x: -(0.5 * n.gifData.width), y: -(0.5 * n.gifData.height) },
                                    h = n.gifData.frames[l];
                                if ((void 0 === s.gifTime && (s.gifTime = 0), h.bitmap)) {
                                    switch ((e.scale(i / n.gifData.width, i / n.gifData.height), h.disposalMethod)) {
                                        case y.UndefinedA:
                                        case y.UndefinedB:
                                        case y.UndefinedC:
                                        case y.UndefinedD:
                                        case y.Replace:
                                            r.drawImage(h.bitmap, h.left, h.top), e.drawImage(a, c.x, c.y), r.clearRect(ex.x, ex.y, a.width, a.height);
                                            break;
                                        case y.Combine:
                                            r.drawImage(h.bitmap, h.left, h.top), e.drawImage(a, c.x, c.y);
                                            break;
                                        case y.RestoreBackground:
                                            r.drawImage(h.bitmap, h.left, h.top),
                                                e.drawImage(a, c.x, c.y),
                                                r.clearRect(ex.x, ex.y, a.width, a.height),
                                                n.gifData.globalColorTable.length ? r.putImageData(n.gifData.backgroundImage, c.x, c.y) : r.putImageData(n.gifData.frames[0].image, c.x + h.left, c.y + h.top);
                                            break;
                                        case y.RestorePrevious: {
                                            let t = r.getImageData(ex.x, ex.y, a.width, a.height);
                                            r.drawImage(h.bitmap, h.left, h.top), e.drawImage(a, c.x, c.y), r.clearRect(ex.x, ex.y, a.width, a.height), r.putImageData(t, ex.x, ex.y);
                                        }
                                    }
                                    if (((s.gifTime += o.value), s.gifTime > h.delayTime)) {
                                        if (((s.gifTime -= h.delayTime), ++l >= n.gifData.frames.length)) {
                                            if (--s.gifLoopCount <= 0) return;
                                            (l = 0), r.clearRect(ex.x, ex.y, a.width, a.height);
                                        }
                                        s.gifFrame = l;
                                    }
                                    e.scale(n.gifData.width / i, n.gifData.height / i);
                                }
                            })(t);
                        else if (a) {
                            let t = n.ratio,
                                s = { x: -i, y: -i },
                                o = 2 * i;
                            e.drawImage(a, s.x, s.y, o, o / t);
                        }
                        e.globalAlpha = 1;
                    }
                }
                getSidesCount() {
                    return 12;
                }
                async init(t) {
                    let e = t.actualOptions;
                    if (e.preload && this._engine.loadImage) for (let t of e.preload) await this._engine.loadImage(t);
                }
                loadShape(t) {
                    if ("image" !== t.shape && "images" !== t.shape) return;
                    this._engine.images || (this._engine.images = []);
                    let e = t.shapeData;
                    e &&
                        (this._engine.images.find((t) => t.name === e.name || t.source === e.src) ||
                            this.loadImageShape(e).then(() => {
                                this.loadShape(t);
                            }));
                }
                particleInit(t, e) {
                    if ("image" !== e.shape && "images" !== e.shape) return;
                    this._engine.images || (this._engine.images = []);
                    let i = this._engine.images,
                        s = e.shapeData;
                    if (!s) return;
                    let o = e.getFillColor(),
                        n = i.find((t) => t.name === s.name || t.source === s.src);
                    if (!n) return;
                    let a = s.replaceColor ?? n.replaceColor;
                    if (n.loading) {
                        setTimeout(() => {
                            this.particleInit(t, e);
                        });
                        return;
                    }
                    (async () => {
                        let t;
                        (t =
                            n.svgData && o
                                ? await (function (t, e, i, s) {
                                      let o = (function (t, e, i) {
                                              let { svgData: s } = t;
                                              if (!s) return "";
                                              let o = (0, b.vzQ)(e, i);
                                              if (s.includes("fill")) return s.replace(ev, () => o);
                                              let n = s.indexOf(">");
                                              return `${s.substring(0, n)} fill="${o}"${s.substring(n)}`;
                                          })(t, i, s.opacity?.value ?? 1),
                                          n = { color: i, gif: e.gif, data: { ...t, svgData: o }, loaded: !1, ratio: e.width / e.height, replaceColor: e.replaceColor, source: e.src };
                                      return new Promise((e) => {
                                          let i = new Blob([o], { type: "image/svg+xml" }),
                                              s = URL || window.URL || window.webkitURL || window,
                                              a = s.createObjectURL(i),
                                              r = new Image();
                                          r.addEventListener("load", () => {
                                              (n.loaded = !0), (n.element = r), e(n), s.revokeObjectURL(a);
                                          });
                                          let l = async () => {
                                              s.revokeObjectURL(a);
                                              let i = { ...t, error: !1, loading: !0 };
                                              await ey(i), (n.loaded = !0), (n.element = i.element), e(n);
                                          };
                                          r.addEventListener("error", () => void l()), (r.src = a);
                                      });
                                  })(n, s, o, e)
                                : {
                                      color: o,
                                      data: n,
                                      element: n.element,
                                      gif: n.gif,
                                      gifData: n.gifData,
                                      gifLoopCount: n.gifLoopCount,
                                      loaded: !0,
                                      ratio: s.width && s.height ? s.width / s.height : n.ratio ?? 1,
                                      replaceColor: a,
                                      source: s.src,
                                  }).ratio || (t.ratio = 1);
                        let i = s.fill ?? e.shapeFill,
                            r = s.close ?? e.shapeClose;
                        (e.image = t), (e.shapeFill = i), (e.shapeClose = r);
                    })();
                }
            }
            class eM {
                constructor() {
                    (this.src = ""), (this.gif = !1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.gif && (this.gif = t.gif),
                        void 0 !== t.height && (this.height = t.height),
                        void 0 !== t.name && (this.name = t.name),
                        void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
                        void 0 !== t.src && (this.src = t.src),
                        void 0 !== t.width && (this.width = t.width));
                }
            }
            class eS {
                constructor(t) {
                    (this.id = "imagePreloader"), (this._engine = t);
                }
                async getPlugin() {
                    return await Promise.resolve(), {};
                }
                loadOptions(t, e) {
                    if (!e?.preload) return;
                    t.preload || (t.preload = []);
                    let i = t.preload;
                    for (let t of e.preload) {
                        let e = i.find((e) => e.name === t.name || e.src === t.src);
                        if (e) e.load(t);
                        else {
                            let e = new eM();
                            e.load(t), i.push(e);
                        }
                    }
                }
                needsPlugin() {
                    return !0;
                }
            }
            async function eD(t, e = !0) {
                t.loadImage ||
                    (t.loadImage = async (e) => {
                        if (!e.name && !e.src) throw Error(`${b.gK4} no image source provided`);
                        if ((t.images || (t.images = []), !t.images.find((t) => t.name === e.name || t.source === e.src)))
                            try {
                                let i;
                                let s = {
                                    gif: e.gif ?? !1,
                                    name: e.name ?? e.src,
                                    source: e.src,
                                    type: e.src.substring(e.src.length - 3),
                                    error: !1,
                                    loading: !0,
                                    replaceColor: e.replaceColor,
                                    ratio: e.width && e.height ? e.width / e.height : void 0,
                                };
                                t.images.push(s), (i = e.gif ? eP : e.replaceColor ? em : ey), await i(s);
                            } catch {
                                throw Error(`${b.gK4} ${e.name ?? e.src} not found`);
                            }
                    });
                let i = new eS(t);
                await t.addPlugin(i, e), await t.addShape(new eO(t), e);
            }
            class eE extends b.SWe {
                constructor() {
                    super(), (this.sync = !1);
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class eR extends b.SWe {
                constructor() {
                    super(), (this.sync = !1);
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class eT {
                constructor() {
                    (this.count = 0), (this.delay = new eE()), (this.duration = new eR());
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration));
                }
            }
            class eI {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = this.container,
                        i = t.options.life;
                    i &&
                        ((t.life = {
                            delay: e.retina.reduceFactor ? (((0, b.Gu7)(i.delay.value) * (i.delay.sync ? 1 : (0, b.sZz)())) / e.retina.reduceFactor) * b.X5o : 0,
                            delayTime: 0,
                            duration: e.retina.reduceFactor ? (((0, b.Gu7)(i.duration.value) * (i.duration.sync ? 1 : (0, b.sZz)())) / e.retina.reduceFactor) * b.X5o : 0,
                            time: 0,
                            count: i.count,
                        }),
                        t.life.duration <= 0 && (t.life.duration = -1),
                        t.life.count <= 0 && (t.life.count = -1),
                        t.life && (t.spawning = t.life.delay > 0));
                }
                isEnabled(t) {
                    return !t.destroyed;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.life || (t.life = new eT()), e)) t.life.load(i?.life);
                }
                update(t, e) {
                    this.isEnabled(t) &&
                        t.life &&
                        (function (t, e, i) {
                            if (!t.life) return;
                            let s = t.life,
                                o = !1;
                            if (t.spawning) {
                                if (((s.delayTime += e.value), !(s.delayTime >= t.life.delay))) return;
                                (o = !0), (t.spawning = !1), (s.delayTime = 0), (s.time = 0);
                            }
                            if (-1 === s.duration || t.spawning || (o ? (s.time = 0) : (s.time += e.value), s.time < s.duration)) return;
                            if (((s.time = 0), t.life.count > 0 && t.life.count--, 0 === t.life.count)) {
                                t.destroy();
                                return;
                            }
                            let n = (0, b.Cst)(0, i.width),
                                a = (0, b.Cst)(0, i.width);
                            (t.position.x = (0, b.vdf)(n)), (t.position.y = (0, b.vdf)(a)), (t.spawning = !0), (s.delayTime = 0), (s.time = 0), t.reset();
                            let r = t.options.life;
                            r && ((s.delay = (0, b.Gu7)(r.delay.value) * b.X5o), (s.duration = (0, b.Gu7)(r.duration.value) * b.X5o));
                        })(t, e, this.container.canvas.size);
                }
            }
            async function eL(t, e = !0) {
                await t.addParticleUpdater("life", async (t) => Promise.resolve(new eI(t)), e);
            }
            class eB {
                constructor() {
                    this.validTypes = ["line"];
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, particle: i, radius: s } = t,
                            o = i.shapeData;
                        e.moveTo(-s, 0), e.lineTo(s, 0), (e.lineCap = o?.cap ?? "butt");
                    })(t);
                }
                getSidesCount() {
                    return 1;
                }
            }
            async function eA(t, e = !0) {
                await t.addShape(new eB(), e);
            }
            class eq {
                init() {}
                isEnabled(t) {
                    return !(0, b.KrJ)() && !t.destroyed && t.container.actualOptions.interactivity.events.onHover.parallax.enable;
                }
                move(t) {
                    let e = t.container,
                        i = e.actualOptions.interactivity.events.onHover.parallax;
                    if ((0, b.KrJ)() || !i.enable) return;
                    let s = i.force,
                        o = e.interactivity.mouse.position;
                    if (!o) return;
                    let n = e.canvas.size,
                        a = { x: 0.5 * n.width, y: 0.5 * n.height },
                        r = i.smooth,
                        l = t.getRadius() / s,
                        c = { x: (o.x - a.x) * l, y: (o.y - a.y) * l },
                        { offset: h } = t;
                    (h.x += (c.x - h.x) / r), (h.y += (c.y - h.y) / r);
                }
            }
            async function eF(t, e = !0) {
                await t.addMover("parallax", () => Promise.resolve(new eq()), e);
            }
            class eW extends b.$Sh {
                constructor(t) {
                    super(t);
                }
                clear() {}
                init() {}
                interact(t) {
                    let e = this.container;
                    void 0 === t.attractDistance && (t.attractDistance = (0, b.Gu7)(t.options.move.attract.distance) * e.retina.pixelRatio);
                    let i = t.attractDistance,
                        s = t.getPosition();
                    for (let o of e.particles.quadTree.queryCircle(s, i)) {
                        if (t === o || !o.options.move.attract.enable || o.destroyed || o.spawning) continue;
                        let e = o.getPosition(),
                            { dx: i, dy: n } = (0, b.oW6)(s, e),
                            a = t.options.move.attract.rotate,
                            r = i / (1e3 * a.x),
                            l = n / (1e3 * a.y),
                            c = o.size.value / t.size.value,
                            h = 1 / c;
                        (t.velocity.x -= r * c), (t.velocity.y -= l * c), (o.velocity.x += r * h), (o.velocity.y += l * h);
                    }
                }
                isEnabled(t) {
                    return t.options.move.attract.enable;
                }
                reset() {}
            }
            async function eG(t, e = !0) {
                await t.addInteractor("particlesAttract", (t) => Promise.resolve(new eW(t)), e);
            }
            function eH(t, e, i, s, o, n) {
                let a = (0, b.uZ5)((t.options.collisions.absorb.speed * o.factor) / 10, 0, s);
                (t.size.value += 0.5 * a), (i.size.value -= a), s <= n && ((i.size.value = 0), i.destroy());
            }
            let e$ = (t) => {
                void 0 === t.collisionMaxSpeed && (t.collisionMaxSpeed = (0, b.Gu7)(t.options.collisions.maxSpeed)), t.velocity.length > t.collisionMaxSpeed && (t.velocity.length = t.collisionMaxSpeed);
            };
            function eV(t, e) {
                (0, b.kRC)((0, b.gy4)(t), (0, b.gy4)(e)), e$(t), e$(e);
            }
            class eZ extends b.$Sh {
                constructor(t) {
                    super(t);
                }
                clear() {}
                init() {}
                interact(t, e) {
                    if (t.destroyed || t.spawning) return;
                    let i = this.container,
                        s = t.getPosition(),
                        o = t.getRadius();
                    for (let n of i.particles.quadTree.queryCircle(s, 2 * o)) {
                        if (t === n || !n.options.collisions.enable || t.options.collisions.mode !== n.options.collisions.mode || n.destroyed || n.spawning) continue;
                        let a = n.getPosition(),
                            r = n.getRadius();
                        !(Math.abs(Math.round(s.z) - Math.round(a.z)) > o + r) &&
                            ((0, b.Spd)(s, a) > o + r ||
                                (function (t, e, i, s) {
                                    switch (t.options.collisions.mode) {
                                        case b.Dpx.absorb:
                                            !(function (t, e, i, s) {
                                                let o = t.getRadius(),
                                                    n = e.getRadius();
                                                void 0 === o && void 0 !== n ? t.destroy() : void 0 !== o && void 0 === n ? e.destroy() : void 0 !== o && void 0 !== n && (o >= n ? eH(t, o, e, n, i, s) : eH(e, n, t, o, i, s));
                                            })(t, e, i, s);
                                            break;
                                        case b.Dpx.bounce:
                                            eV(t, e);
                                            break;
                                        case b.Dpx.destroy:
                                            t.unbreakable || e.unbreakable || eV(t, e),
                                                void 0 === t.getRadius() && void 0 !== e.getRadius()
                                                    ? t.destroy()
                                                    : void 0 !== t.getRadius() && void 0 === e.getRadius()
                                                    ? e.destroy()
                                                    : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? e : t).destroy();
                                    }
                                })(t, n, e, i.retina.pixelRatio));
                    }
                }
                isEnabled(t) {
                    return t.options.collisions.enable;
                }
                reset() {}
            }
            async function eU(t, e = !0) {
                await t.addInteractor("particlesCollisions", (t) => Promise.resolve(new eZ(t)), e);
            }
            class eY extends b.Cdc {
                constructor(t, e, i, s) {
                    super(t, e, i), (this.canvasSize = s), (this.canvasSize = { ...s });
                }
                contains(t) {
                    let { width: e, height: i } = this.canvasSize,
                        { x: s, y: o } = t;
                    return super.contains(t) || super.contains({ x: s - e, y: o }) || super.contains({ x: s - e, y: o - i }) || super.contains({ x: s, y: o - i });
                }
                intersects(t) {
                    if (super.intersects(t)) return !0;
                    let e = { x: t.position.x - this.canvasSize.width, y: t.position.y - this.canvasSize.height };
                    if (void 0 !== t.radius) {
                        let i = new b.Cdc(e.x, e.y, 2 * t.radius);
                        return super.intersects(i);
                    }
                    if (void 0 !== t.size) {
                        let i = new b.AeJ(e.x, e.y, 2 * t.size.width, 2 * t.size.height);
                        return super.intersects(i);
                    }
                    return !1;
                }
            }
            class eX {
                constructor() {
                    (this.blur = 5), (this.color = new b.OzF()), (this.color.value = "#000"), (this.enable = !1);
                }
                load(t) {
                    t && (void 0 !== t.blur && (this.blur = t.blur), (this.color = b.OzF.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable));
                }
            }
            class ej {
                constructor() {
                    (this.enable = !1), (this.frequency = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.frequency && (this.frequency = t.frequency),
                        void 0 !== t.opacity && (this.opacity = t.opacity));
                }
            }
            class eN {
                constructor() {
                    (this.blink = !1),
                        (this.color = new b.OzF()),
                        (this.color.value = "#fff"),
                        (this.consent = !1),
                        (this.distance = 100),
                        (this.enable = !1),
                        (this.frequency = 1),
                        (this.opacity = 1),
                        (this.shadow = new eX()),
                        (this.triangles = new ej()),
                        (this.width = 1),
                        (this.warp = !1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.id && (this.id = t.id),
                        void 0 !== t.blink && (this.blink = t.blink),
                        (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.consent && (this.consent = t.consent),
                        void 0 !== t.distance && (this.distance = t.distance),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.frequency && (this.frequency = t.frequency),
                        void 0 !== t.opacity && (this.opacity = t.opacity),
                        this.shadow.load(t.shadow),
                        this.triangles.load(t.triangles),
                        void 0 !== t.width && (this.width = t.width),
                        void 0 !== t.warp && (this.warp = t.warp));
                }
            }
            let eK = { x: 0, y: 0 };
            class eJ extends b.$Sh {
                constructor(t) {
                    super(t),
                        (this._setColor = (t) => {
                            if (!t.options.links) return;
                            let e = this.linkContainer,
                                i = t.options.links,
                                s = void 0 === i.id ? e.particles.linksColor : e.particles.linksColors.get(i.id);
                            if (s) return;
                            let o = i.color;
                            (s = (0, b.Dt5)(o, i.blink, i.consent)), void 0 === i.id ? (e.particles.linksColor = s) : e.particles.linksColors.set(i.id, s);
                        }),
                        (this.linkContainer = t);
                }
                clear() {}
                init() {
                    (this.linkContainer.particles.linksColor = void 0), (this.linkContainer.particles.linksColors = new Map());
                }
                interact(t) {
                    let e;
                    if (!t.options.links) return;
                    t.links = [];
                    let i = t.getPosition(),
                        s = this.container,
                        o = s.canvas.size;
                    if (i.x < eK.x || i.y < eK.y || i.x > o.width || i.y > o.height) return;
                    let n = t.options.links,
                        a = n.opacity,
                        r = t.retina.linksDistance ?? 0,
                        l = n.warp;
                    for (let c of ((e = l ? new eY(i.x, i.y, r, o) : new b.Cdc(i.x, i.y, r)), s.particles.quadTree.query(e))) {
                        let e = c.options.links;
                        if (t === c || !e?.enable || n.id !== e.id || c.spawning || c.destroyed || !c.links || t.links.some((t) => t.destination === c) || c.links.some((e) => e.destination === t)) continue;
                        let s = c.getPosition();
                        if (s.x < eK.x || s.y < eK.y || s.x > o.width || s.y > o.height) continue;
                        let h = (function (t, e, i, s, o) {
                            let { dx: n, dy: a, distance: r } = (0, b.oW6)(t, e);
                            if (!o || r <= i) return r;
                            let l = { x: Math.abs(n), y: Math.abs(a) },
                                c = { x: Math.min(l.x, s.width - l.x), y: Math.min(l.y, s.height - l.y) };
                            return Math.sqrt(c.x ** 2 + c.y ** 2);
                        })(i, s, r, o, l && e.warp);
                        if (h > r) continue;
                        let d = (1 - h / r) * a;
                        this._setColor(t), t.links.push({ destination: c, opacity: d });
                    }
                }
                isEnabled(t) {
                    return !!t.options.links?.enable;
                }
                loadParticlesOptions(t, ...e) {
                    for (let i of (t.links || (t.links = new eN()), e)) t.links.load(i?.links);
                }
                reset() {}
            }
            async function eQ(t, e = !0) {
                await t.addInteractor("particlesLinks", async (t) => Promise.resolve(new eJ(t)), e);
            }
            function e0(t, e) {
                var i;
                let s = ((i = t.map((t) => t.id)).sort((t, e) => t - e), i.join("_")),
                    o = e.get(s);
                return void 0 === o && ((o = (0, b.sZz)()), e.set(s, o)), o;
            }
            class e1 {
                constructor(t) {
                    (this.container = t),
                        (this._drawLinkLine = (t, e) => {
                            let i = t.options.links;
                            if (!i?.enable) return;
                            let s = this.container,
                                o = s.actualOptions,
                                n = e.destination,
                                a = t.getPosition(),
                                r = n.getPosition(),
                                l = e.opacity;
                            s.canvas.draw((e) => {
                                let c;
                                let h = t.options.twinkle?.lines;
                                if (h?.enable) {
                                    let t = h.frequency,
                                        e = (0, b.tXk)(h.color);
                                    (0, b.sZz)() < t && e && ((c = e), (l = (0, b.Gu7)(h.opacity)));
                                }
                                if (!c) {
                                    let e = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                                    c = (0, b.BEi)(t, n, e);
                                }
                                if (!c) return;
                                let d = t.retina.linksWidth ?? 0,
                                    u = t.retina.linksDistance ?? 0,
                                    { backgroundMask: p } = o;
                                !(function (t) {
                                    let e = !1,
                                        { begin: i, end: s, maxDistance: o, context: n, canvasSize: a, width: r, backgroundMask: l, colorLine: c, opacity: h, links: d } = t;
                                    if ((0, b.Spd)(i, s) <= o) (0, b.pSR)(n, i, s), (e = !0);
                                    else if (d.warp) {
                                        let t, r;
                                        let l = { x: s.x - a.width, y: s.y },
                                            c = (0, b.oW6)(i, l);
                                        if (c.distance <= o) {
                                            let e = i.y - (c.dy / c.dx) * i.x;
                                            (t = { x: 0, y: e }), (r = { x: a.width, y: e });
                                        } else {
                                            let e = { x: s.x, y: s.y - a.height },
                                                n = (0, b.oW6)(i, e);
                                            if (n.distance <= o) {
                                                let e = -(i.y - (n.dy / n.dx) * i.x) / (n.dy / n.dx);
                                                (t = { x: e, y: 0 }), (r = { x: e, y: a.height });
                                            } else {
                                                let e = { x: s.x - a.width, y: s.y - a.height },
                                                    n = (0, b.oW6)(i, e);
                                                if (n.distance <= o) {
                                                    let e = i.y - (n.dy / n.dx) * i.x;
                                                    r = { x: (t = { x: -e / (n.dy / n.dx), y: e }).x + a.width, y: t.y + a.height };
                                                }
                                            }
                                        }
                                        t && r && ((0, b.pSR)(n, i, t), (0, b.pSR)(n, s, r), (e = !0));
                                    }
                                    if (!e) return;
                                    (n.lineWidth = r), l.enable && (n.globalCompositeOperation = l.composite), (n.strokeStyle = (0, b.izR)(c, h));
                                    let { shadow: u } = d;
                                    if (u.enable) {
                                        let t = (0, b.tXk)(u.color);
                                        t && ((n.shadowBlur = u.blur), (n.shadowColor = (0, b.izR)(t)));
                                    }
                                    n.stroke();
                                })({ context: e, width: d, begin: a, end: r, maxDistance: u, canvasSize: s.canvas.size, links: i, backgroundMask: p, colorLine: c, opacity: l });
                            });
                        }),
                        (this._drawLinkTriangle = (t, e, i) => {
                            let s = t.options.links;
                            if (!s?.enable) return;
                            let o = s.triangles;
                            if (!o.enable) return;
                            let n = this.container,
                                a = n.actualOptions,
                                r = e.destination,
                                l = i.destination,
                                c = o.opacity ?? (e.opacity + i.opacity) * 0.5;
                            c <= 0 ||
                                n.canvas.draw((e) => {
                                    let i = t.getPosition(),
                                        h = r.getPosition(),
                                        d = l.getPosition(),
                                        u = t.retina.linksDistance ?? 0;
                                    if ((0, b.Spd)(i, h) > u || (0, b.Spd)(d, h) > u || (0, b.Spd)(d, i) > u) return;
                                    let p = (0, b.tXk)(o.color);
                                    if (!p) {
                                        let e = void 0 !== s.id ? n.particles.linksColors.get(s.id) : n.particles.linksColor;
                                        p = (0, b.BEi)(t, r, e);
                                    }
                                    p &&
                                        (function (t) {
                                            let { context: e, pos1: i, pos2: s, pos3: o, backgroundMask: n, colorTriangle: a, opacityTriangle: r } = t;
                                            e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.lineTo(o.x, o.y), e.closePath(), n.enable && (e.globalCompositeOperation = n.composite), (e.fillStyle = (0, b.izR)(a, r)), e.fill();
                                        })({ context: e, pos1: i, pos2: h, pos3: d, backgroundMask: a.backgroundMask, colorTriangle: p, opacityTriangle: c });
                                });
                        }),
                        (this._drawTriangles = (t, e, i, s) => {
                            let o = i.destination;
                            if (!(t.links?.triangles.enable && o.options.links?.triangles.enable)) return;
                            let n = o.links?.filter((t) => {
                                let e = this._getLinkFrequency(o, t.destination);
                                return o.options.links && e <= o.options.links.frequency && s.findIndex((e) => e.destination === t.destination) >= 0;
                            });
                            if (n?.length)
                                for (let s of n) {
                                    let n = s.destination;
                                    this._getTriangleFrequency(e, o, n) > t.links.triangles.frequency || this._drawLinkTriangle(e, i, s);
                                }
                        }),
                        (this._getLinkFrequency = (t, e) => e0([t, e], this._freqs.links)),
                        (this._getTriangleFrequency = (t, e, i) => e0([t, e, i], this._freqs.triangles)),
                        (this._freqs = { links: new Map(), triangles: new Map() });
                }
                drawParticle(t, e) {
                    let { links: i, options: s } = e;
                    if (!i?.length) return;
                    let o = i.filter((t) => s.links && (s.links.frequency >= 1 || this._getLinkFrequency(e, t.destination) <= s.links.frequency));
                    for (let t of o) this._drawTriangles(s, e, t, o), t.opacity > 0 && (e.retina.linksWidth ?? 0) > 0 && this._drawLinkLine(e, t);
                }
                async init() {
                    (this._freqs.links = new Map()), (this._freqs.triangles = new Map()), await Promise.resolve();
                }
                particleCreated(t) {
                    if (((t.links = []), !t.options.links)) return;
                    let e = this.container.retina.pixelRatio,
                        { retina: i } = t,
                        { distance: s, width: o } = t.options.links;
                    (i.linksDistance = s * e), (i.linksWidth = o * e);
                }
                particleDestroyed(t) {
                    t.links = [];
                }
            }
            class e2 {
                constructor() {
                    this.id = "links";
                }
                getPlugin(t) {
                    return Promise.resolve(new e1(t));
                }
                loadOptions() {}
                needsPlugin() {
                    return !0;
                }
            }
            async function e5(t, e = !0) {
                let i = new e2();
                await t.addPlugin(i, e);
            }
            async function e6(t, e = !0) {
                await eQ(t, e), await e5(t, e);
            }
            let e3 = { x: 0, y: 0 };
            class e7 {
                draw(t) {
                    let { particle: e, radius: i } = t;
                    !(function (t, e, i) {
                        let { context: s } = t,
                            o = i.count.numerator * i.count.denominator,
                            n = i.count.numerator / i.count.denominator,
                            a = Math.PI - (0, b.Idc)((180 * (n - 2)) / n);
                        if (s) {
                            s.beginPath(), s.translate(e.x, e.y), s.moveTo(e3.x, e3.y);
                            for (let t = 0; t < o; t++) s.lineTo(i.length, e3.y), s.translate(i.length, e3.y), s.rotate(a);
                        }
                    })(t, this.getCenter(e, i), this.getSidesData(e, i));
                }
                getSidesCount(t) {
                    let e = t.shapeData;
                    return Math.round((0, b.Gu7)(e?.sides ?? 5));
                }
            }
            class e4 extends e7 {
                constructor() {
                    super(...arguments), (this.validTypes = ["polygon"]);
                }
                getCenter(t, e) {
                    return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
                }
                getSidesData(t, e) {
                    let i = t.sides;
                    return { count: { denominator: 1, numerator: i }, length: (2.66 * e) / (i / 3) };
                }
            }
            class e8 extends e7 {
                constructor() {
                    super(...arguments), (this.validTypes = ["triangle"]);
                }
                getCenter(t, e) {
                    return { x: -e, y: e / 1.66 };
                }
                getSidesCount() {
                    return 3;
                }
                getSidesData(t, e) {
                    return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
                }
            }
            async function e9(t, e = !0) {
                await t.addShape(new e4(), e);
            }
            async function it(t, e = !0) {
                await t.addShape(new e8(), e);
            }
            async function ie(t, e = !0) {
                await e9(t, e), await it(t, e);
            }
            class ii {
                constructor() {
                    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, b.Cst)(t.speed)), void 0 !== t.decay && (this.decay = (0, b.Cst)(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class is extends b.SWe {
                constructor() {
                    super(), (this.animation = new ii()), (this.direction = b.RnL.clockwise), (this.path = !1), (this.value = 0);
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path));
                }
            }
            let io = 2 * Math.PI;
            class ia {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = t.options.rotate;
                    if (!e) return;
                    (t.rotate = { enable: e.animation.enable, value: (0, b.Idc)((0, b.Gu7)(e.value)), min: 0, max: io }), (t.pathRotation = e.path);
                    let i = e.direction;
                    switch ((i === b.RnL.random && (i = Math.floor(2 * (0, b.sZz)()) > 0 ? b.RnL.counterClockwise : b.RnL.clockwise), i)) {
                        case b.RnL.counterClockwise:
                        case "counterClockwise":
                            t.rotate.status = b.NV1.decreasing;
                            break;
                        case b.RnL.clockwise:
                            t.rotate.status = b.NV1.increasing;
                    }
                    let s = e.animation;
                    s.enable && ((t.rotate.decay = 1 - (0, b.Gu7)(s.decay)), (t.rotate.velocity = ((0, b.Gu7)(s.speed) / 360) * this.container.retina.reduceFactor), s.sync || (t.rotate.velocity *= (0, b.sZz)())),
                        (t.rotation = t.rotate.value);
                }
                isEnabled(t) {
                    let e = t.options.rotate;
                    return !!e && !t.destroyed && !t.spawning && (!!e.value || e.animation.enable || e.path);
                }
                loadOptions(t, ...e) {
                    for (let i of (t.rotate || (t.rotate = new is()), e)) t.rotate.load(i?.rotate);
                }
                update(t, e) {
                    this.isEnabled(t) && ((t.isRotating = !!t.rotate), t.rotate && ((0, b.CrJ)(t, t.rotate, !1, b.Hyf.none, e), (t.rotation = t.rotate.value)));
                }
            }
            async function ir(t, e = !0) {
                await t.addParticleUpdater("rotate", (t) => Promise.resolve(new ia(t)), e);
            }
            let il = Math.sqrt(2);
            class ic {
                constructor() {
                    this.validTypes = ["edge", "square"];
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, radius: i } = t,
                            s = i / il,
                            o = 2 * s;
                        e.rect(-s, -s, o, o);
                    })(t);
                }
                getSidesCount() {
                    return 4;
                }
            }
            async function ih(t, e = !0) {
                await t.addShape(new ic(), e);
            }
            let id = { x: 0, y: 0 };
            class iu {
                constructor() {
                    this.validTypes = ["star"];
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, particle: i, radius: s } = t,
                            o = i.sides,
                            n = i.starInset ?? 2;
                        e.moveTo(id.x, id.y - s);
                        for (let t = 0; t < o; t++) e.rotate(Math.PI / o), e.lineTo(id.x, id.y - s * n), e.rotate(Math.PI / o), e.lineTo(id.x, id.y - s);
                    })(t);
                }
                getSidesCount(t) {
                    let e = t.shapeData;
                    return Math.round((0, b.Gu7)(e?.sides ?? 5));
                }
                particleInit(t, e) {
                    let i = e.shapeData;
                    e.starInset = (0, b.Gu7)(i?.inset ?? 2);
                }
            }
            async function ip(t, e = !0) {
                await t.addShape(new iu(), e);
            }
            class iv {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = this.container,
                        i = t.options,
                        s = (0, b.wA_)(i.stroke, t.id, i.reduceDuplicates);
                    (t.strokeWidth = (0, b.Gu7)(s.width) * e.retina.pixelRatio), (t.strokeOpacity = (0, b.Gu7)(s.opacity ?? 1)), (t.strokeAnimation = s.color?.animation);
                    let o = (0, b.lNs)(s.color) ?? t.getFillColor();
                    o && (t.strokeColor = (0, b.bS$)(o, t.strokeAnimation, e.retina.reduceFactor));
                }
                isEnabled(t) {
                    let e = t.strokeAnimation,
                        { strokeColor: i } = t;
                    return !t.destroyed && !t.spawning && !!e && ((i?.h.value !== void 0 && i.h.enable) || (i?.s.value !== void 0 && i.s.enable) || (i?.l.value !== void 0 && i.l.enable));
                }
                update(t, e) {
                    this.isEnabled(t) && (0, b.PBz)(t.strokeColor, e);
                }
            }
            async function iy(t, e = !0) {
                await t.addParticleUpdater("strokeColor", (t) => Promise.resolve(new iv(t)), e);
            }
            async function im(t, e = !0) {
                await eF(t, !1),
                    await tW(t, !1),
                    await tU(t, !1),
                    await tQ(t, !1),
                    await t5(t, !1),
                    await t4(t, !1),
                    await t9(t, !1),
                    await ei(t, !1),
                    await en(t, !1),
                    await ed(t, !1),
                    await ef(t, !1),
                    await eG(t, !1),
                    await eU(t, !1),
                    await e6(t, !1),
                    await tR(),
                    await tL(t, !1),
                    await eD(t, !1),
                    await eA(t, !1),
                    await ie(t, !1),
                    await ih(t, !1),
                    await ip(t, !1),
                    await eL(t, !1),
                    await ir(t, !1),
                    await iy(t, !1),
                    await tE(t, e);
            }
            class ig {
                constructor() {
                    this.validTypes = ["text", "character", "char", "multiline-text"];
                }
                draw(t) {
                    !(function (t) {
                        let { context: e, particle: i, radius: s, opacity: o } = t,
                            n = i.shapeData;
                        if (!n) return;
                        let a = n.value;
                        if (void 0 === a) return;
                        void 0 === i.text && (i.text = (0, b.wA_)(a, i.randomIndexData));
                        let r = i.text,
                            l = n.style ?? "",
                            c = n.weight ?? "400",
                            h = n.font ?? "Verdana",
                            d = i.shapeFill,
                            u = r?.split("\n");
                        if (u) {
                            (e.font = `${l} ${c} ${2 * Math.round(s)}px "${h}"`), (e.globalAlpha = o);
                            for (let t = 0; t < u.length; t++)
                                !(function (t, e, i, s, o, n) {
                                    let a = { x: -(e.length * i * 0.5), y: 0.5 * i },
                                        r = 2 * i;
                                    n ? t.fillText(e, a.x, a.y + r * o) : t.strokeText(e, a.x, a.y + r * o);
                                })(e, u[t], s, 0, t, d);
                            e.globalAlpha = 1;
                        }
                    })(t);
                }
                async init(t) {
                    let e = t.actualOptions,
                        { validTypes: i } = this;
                    if (i.find((t) => (0, b.dBL)(t, e.particles.shape.type))) {
                        let t = i.map((t) => e.particles.shape.options[t]).find((t) => !!t),
                            s = [];
                        (0, b.KH1)(t, (t) => {
                            s.push((0, b.mxw)(t.font, t.weight));
                        }),
                            await Promise.all(s);
                    }
                }
                particleInit(t, e) {
                    if (!e.shape || !this.validTypes.includes(e.shape)) return;
                    let i = e.shapeData;
                    if (void 0 === i) return;
                    let s = i.value;
                    void 0 !== s && (e.text = (0, b.wA_)(s, e.randomIndexData));
                }
            }
            async function ib(t, e = !0) {
                await t.addShape(new ig(), e);
            }
            ((c = g || (g = {})).clockwise = "clockwise"), (c.counterClockwise = "counter-clockwise"), (c.random = "random");
            class iw {
                constructor() {
                    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, b.Cst)(t.speed)), void 0 !== t.decay && (this.decay = (0, b.Cst)(t.decay)), void 0 !== t.sync && (this.sync = t.sync));
                }
            }
            class ix extends b.SWe {
                constructor() {
                    super(), (this.animation = new iw()), (this.direction = g.clockwise), (this.enable = !1), (this.value = 0);
                }
                load(t) {
                    super.load(t), t && (this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable));
                }
            }
            let i_ = 2 * Math.PI;
            class iz {
                constructor(t) {
                    this.container = t;
                }
                getTransformValues(t) {
                    let e = t.tilt?.enable && t.tilt;
                    return { b: e ? Math.cos(e.value) * e.cosDirection : void 0, c: e ? Math.sin(e.value) * e.sinDirection : void 0 };
                }
                init(t) {
                    let e = t.options.tilt;
                    if (!e) return;
                    t.tilt = { enable: e.enable, value: (0, b.Idc)((0, b.Gu7)(e.value)), sinDirection: (0, b.sZz)() >= b.vqy ? 1 : -1, cosDirection: (0, b.sZz)() >= b.vqy ? 1 : -1, min: 0, max: i_ };
                    let i = e.direction;
                    switch ((i === g.random && (i = Math.floor(2 * (0, b.sZz)()) > 0 ? g.counterClockwise : g.clockwise), i)) {
                        case g.counterClockwise:
                        case "counterClockwise":
                            t.tilt.status = b.NV1.decreasing;
                            break;
                        case g.clockwise:
                            t.tilt.status = b.NV1.increasing;
                    }
                    let s = t.options.tilt?.animation;
                    s?.enable && ((t.tilt.decay = 1 - (0, b.Gu7)(s.decay)), (t.tilt.velocity = ((0, b.Gu7)(s.speed) / 360) * this.container.retina.reduceFactor), s.sync || (t.tilt.velocity *= (0, b.sZz)()));
                }
                isEnabled(t) {
                    let e = t.options.tilt?.animation;
                    return !t.destroyed && !t.spawning && !!e?.enable;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.tilt || (t.tilt = new ix()), e)) t.tilt.load(i?.tilt);
                }
                async update(t, e) {
                    this.isEnabled(t) && t.tilt && ((0, b.CrJ)(t, t.tilt, !1, b.Hyf.none, e), await Promise.resolve());
                }
            }
            async function ik(t, e = !0) {
                await t.addParticleUpdater("tilt", (t) => Promise.resolve(new iz(t)), e);
            }
            class iC {
                constructor() {
                    (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
                }
                load(t) {
                    t &&
                        (void 0 !== t.color && (this.color = b.OzF.create(this.color, t.color)),
                        void 0 !== t.enable && (this.enable = t.enable),
                        void 0 !== t.frequency && (this.frequency = t.frequency),
                        void 0 !== t.opacity && (this.opacity = (0, b.Cst)(t.opacity)));
                }
            }
            class iP {
                constructor() {
                    (this.lines = new iC()), (this.particles = new iC());
                }
                load(t) {
                    t && (this.lines.load(t.lines), this.particles.load(t.particles));
                }
            }
            class iO {
                getColorStyles(t, e, i, s) {
                    let o = t.options.twinkle;
                    if (!o) return {};
                    let n = o.particles,
                        a = n.enable && (0, b.sZz)() < n.frequency,
                        r = t.options.zIndex,
                        l = (1 - t.zIndexFactor) ** r.opacityRate,
                        c = a ? (0, b.Gu7)(n.opacity) * l : s,
                        h = (0, b.lNs)(n.color),
                        d = h ? (0, b.vzQ)(h, c) : void 0,
                        u = {},
                        p = a && d;
                    return (u.fill = p ? d : void 0), (u.stroke = p ? d : void 0), u;
                }
                async init() {
                    await Promise.resolve();
                }
                isEnabled(t) {
                    let e = t.options.twinkle;
                    return !!e && e.particles.enable;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.twinkle || (t.twinkle = new iP()), e)) t.twinkle.load(i?.twinkle);
                }
                async update() {
                    await Promise.resolve();
                }
            }
            async function iM(t, e = !0) {
                await t.addParticleUpdater("twinkle", () => Promise.resolve(new iO()), e);
            }
            class iS {
                constructor() {
                    (this.angle = 50), (this.move = 10);
                }
                load(t) {
                    t && (void 0 !== t.angle && (this.angle = (0, b.Cst)(t.angle)), void 0 !== t.move && (this.move = (0, b.Cst)(t.move)));
                }
            }
            class iD {
                constructor() {
                    (this.distance = 5), (this.enable = !1), (this.speed = new iS());
                }
                load(t) {
                    if (t && (void 0 !== t.distance && (this.distance = (0, b.Cst)(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed)) {
                        if ((0, b.hj$)(t.speed)) this.speed.load({ angle: t.speed });
                        else {
                            let e = t.speed;
                            void 0 !== e.min ? this.speed.load({ angle: e }) : this.speed.load(t.speed);
                        }
                    }
                }
            }
            let iE = 2 * Math.PI,
                iR = 2 * Math.PI;
            class iT {
                constructor(t) {
                    this.container = t;
                }
                init(t) {
                    let e = t.options.wobble;
                    e?.enable ? (t.wobble = { angle: (0, b.sZz)() * iR, angleSpeed: (0, b.Gu7)(e.speed.angle) / 360, moveSpeed: (0, b.Gu7)(e.speed.move) / 10 }) : (t.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
                        (t.retina.wobbleDistance = (0, b.Gu7)(e?.distance ?? 0) * this.container.retina.pixelRatio);
                }
                isEnabled(t) {
                    return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
                }
                loadOptions(t, ...e) {
                    for (let i of (t.wobble || (t.wobble = new iD()), e)) t.wobble.load(i?.wobble);
                }
                update(t, e) {
                    this.isEnabled(t) &&
                        (function (t, e) {
                            let { wobble: i } = t.options,
                                { wobble: s } = t;
                            if (!i?.enable || !s) return;
                            let o = s.angleSpeed * e.factor,
                                n = s.moveSpeed * e.factor,
                                a = ((t.retina.wobbleDistance ?? 0) * e.factor * n) / (b.X5o / 60),
                                { position: r } = t;
                            (s.angle += o), s.angle > iE && (s.angle -= iE), (r.x += a * Math.cos(s.angle)), (r.y += a * Math.abs(Math.sin(s.angle)));
                        })(t, e);
                }
            }
            async function iI(t, e = !0) {
                await t.addParticleUpdater("wobble", (t) => Promise.resolve(new iT(t)), e);
            }
            async function iL(t, e = !0) {
                await I(t, !1), await tu(t, !1), await ik(t, !1), await iM(t, !1), await iI(t, !1), await ib(t, !1), await tr(t, !1), await O(t, !1), await j(t, !1), await Q(t, !1), await ts(t, !1), await im(t, e);
            }
        },
    },
]);
