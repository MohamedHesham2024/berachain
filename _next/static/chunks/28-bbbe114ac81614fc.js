(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [28],
    {
        4713: function (e, t, n) {
            var r = 0 / 0,
                o = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                u = parseInt,
                s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                d = s || c || Function("return this")(),
                f = Object.prototype.toString,
                g = Math.max,
                p = Math.min,
                v = function () {
                    return d.Date.now();
                };
            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function h(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof (t = e) || (t && "object" == typeof t && "[object Symbol]" == f.call(t))) return r;
                if (m(e)) {
                    var t,
                        n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(n) ? n + "" : n;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(o, "");
                var s = i.test(e);
                return s || a.test(e) ? u(e.slice(2), s ? 2 : 8) : l.test(e) ? r : +e;
            }
            e.exports = function (e, t, n) {
                var r,
                    o,
                    l,
                    i,
                    a,
                    u,
                    s = 0,
                    c = !1,
                    d = !1,
                    f = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                function w(t) {
                    var n = r,
                        l = o;
                    return (r = o = void 0), (s = t), (i = e.apply(l, n));
                }
                function b(e) {
                    var n = e - u,
                        r = e - s;
                    return void 0 === u || n >= t || n < 0 || (d && r >= l);
                }
                function y() {
                    var e,
                        n,
                        r,
                        o = v();
                    if (b(o)) return C(o);
                    a = setTimeout(y, ((e = o - u), (n = o - s), (r = t - e), d ? p(r, l - n) : r));
                }
                function C(e) {
                    return ((a = void 0), f && r) ? w(e) : ((r = o = void 0), i);
                }
                function x() {
                    var e,
                        n = v(),
                        l = b(n);
                    if (((r = arguments), (o = this), (u = n), l)) {
                        if (void 0 === a) return (s = e = u), (a = setTimeout(y, t)), c ? w(e) : i;
                        if (d) return (a = setTimeout(y, t)), w(u);
                    }
                    return void 0 === a && (a = setTimeout(y, t)), i;
                }
                return (
                    (t = h(t) || 0),
                    m(n) && ((c = !!n.leading), (l = (d = "maxWait" in n) ? g(h(n.maxWait) || 0, t) : l), (f = "trailing" in n ? !!n.trailing : f)),
                    (x.cancel = function () {
                        void 0 !== a && clearTimeout(a), (s = 0), (r = u = o = a = void 0);
                    }),
                    (x.flush = function () {
                        return void 0 === a ? i : C(v());
                    }),
                    x
                );
            };
        },
        4689: function (e, t, n) {
            "use strict";
            n.d(t, {
                F: function () {
                    return i;
                },
            });
            var r = n(7653);
            let o = (0, r.createContext)(void 0),
                l = { setTheme: (e) => {}, themes: [] },
                i = () => {
                    var e;
                    return null !== (e = (0, r.useContext)(o)) && void 0 !== e ? e : l;
                };
        },
        4070: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return o.a;
                },
            });
            var r = n(9703),
                o = n.n(r);
        },
        1695: function (e, t, n) {
            "use strict";
            var r = n(1219);
            n.o(r, "usePathname") &&
                n.d(t, {
                    usePathname: function () {
                        return r.usePathname;
                    },
                });
        },
        8337: function (e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    DOMAttributeNames: function () {
                        return r;
                    },
                    default: function () {
                        return i;
                    },
                    isEqualNode: function () {
                        return l;
                    },
                });
            let r = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv", noModule: "noModule" };
            function o(e) {
                let { type: t, props: n } = e,
                    o = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let l = r[e] || e.toLowerCase();
                    "script" === t && ("async" === l || "defer" === l || "noModule" === l) ? (o[l] = !!n[e]) : o.setAttribute(l, n[e]);
                }
                let { children: l, dangerouslySetInnerHTML: i } = n;
                return i ? (o.innerHTML = i.__html || "") : l && (o.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""), o;
            }
            function l(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), (r.nonce = n), n === e.nonce && e.isEqualNode(r);
                    }
                }
                return e.isEqualNode(t);
            }
            function i() {
                return {
                    mountedInstances: new Set(),
                    updateHead: (e) => {
                        let t = {};
                        e.forEach((e) => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                (e.props.href = e.props["data-href"]), (e.props["data-href"] = void 0);
                            }
                            let n = t[e.type] || [];
                            n.push(e), (t[e.type] = n);
                        });
                        let r = t.title ? t.title[0] : null,
                            o = "";
                        if (r) {
                            let { children: e } = r.props;
                            o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
                        }
                        o !== document.title && (document.title = o),
                            ["meta", "base", "link", "style", "script"].forEach((e) => {
                                n(e, t[e] || []);
                            });
                    },
                };
            }
            (n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    i = Number(r.content),
                    a = [];
                for (let t = 0, n = r.previousElementSibling; t < i; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var u;
                    (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && a.push(n);
                }
                let s = t.map(o).filter((e) => {
                    for (let t = 0, n = a.length; t < n; t++) if (l(a[t], e)) return a.splice(t, 1), !1;
                    return !0;
                });
                a.forEach((e) => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
                }),
                    s.forEach((e) => n.insertBefore(e, r)),
                    (r.content = (i - a.length + s.length).toString());
            }),
                ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        2147: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return b;
                    },
                    handleClientScriptLoad: function () {
                        return m;
                    },
                    initScriptLoader: function () {
                        return h;
                    },
                });
            let r = n(1887),
                o = n(9766),
                l = n(7573),
                i = r._(n(3458)),
                a = o._(n(7653)),
                u = n(2764),
                s = n(8337),
                c = n(6588),
                d = new Map(),
                f = new Set(),
                g = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                p = (e) => {
                    if (i.default.preinit) {
                        e.forEach((e) => {
                            i.default.preinit(e, { as: "style" });
                        });
                        return;
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach((e) => {
                            let n = document.createElement("link");
                            (n.type = "text/css"), (n.rel = "stylesheet"), (n.href = e), t.appendChild(n);
                        });
                    }
                },
                v = (e) => {
                    let { src: t, id: n, onLoad: r = () => {}, onReady: o = null, dangerouslySetInnerHTML: l, children: i = "", strategy: a = "afterInteractive", onError: u, stylesheets: c } = e,
                        v = n || t;
                    if (v && f.has(v)) return;
                    if (d.has(t)) {
                        f.add(v), d.get(t).then(r, u);
                        return;
                    }
                    let m = () => {
                            o && o(), f.add(v);
                        },
                        h = document.createElement("script"),
                        w = new Promise((e, t) => {
                            h.addEventListener("load", function (t) {
                                e(), r && r.call(this, t), m();
                            }),
                                h.addEventListener("error", function (e) {
                                    t(e);
                                });
                        }).catch(function (e) {
                            u && u(e);
                        });
                    for (let [n, r] of (l ? ((h.innerHTML = l.__html || ""), m()) : i ? ((h.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""), m()) : t && ((h.src = t), d.set(t, w)), Object.entries(e))) {
                        if (void 0 === r || g.includes(n)) continue;
                        let e = s.DOMAttributeNames[n] || n.toLowerCase();
                        h.setAttribute(e, r);
                    }
                    "worker" === a && h.setAttribute("type", "text/partytown"), h.setAttribute("data-nscript", a), c && p(c), document.body.appendChild(h);
                };
            function m(e) {
                let { strategy: t = "afterInteractive" } = e;
                "lazyOnload" === t
                    ? window.addEventListener("load", () => {
                          (0, c.requestIdleCallback)(() => v(e));
                      })
                    : v(e);
            }
            function h(e) {
                e.forEach(m),
                    [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach((e) => {
                        let t = e.id || e.getAttribute("src");
                        f.add(t);
                    });
            }
            function w(e) {
                let { id: t, src: n = "", onLoad: r = () => {}, onReady: o = null, strategy: s = "afterInteractive", onError: d, stylesheets: g, ...p } = e,
                    { updateScripts: m, scripts: h, getIsSsr: w, appDir: b, nonce: y } = (0, a.useContext)(u.HeadManagerContext),
                    C = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    let e = t || n;
                    C.current || (o && e && f.has(e) && o(), (C.current = !0));
                }, [o, t, n]);
                let x = (0, a.useRef)(!1);
                if (
                    ((0, a.useEffect)(() => {
                        !x.current &&
                            ("afterInteractive" === s
                                ? v(e)
                                : "lazyOnload" === s &&
                                  ("complete" === document.readyState
                                      ? (0, c.requestIdleCallback)(() => v(e))
                                      : window.addEventListener("load", () => {
                                            (0, c.requestIdleCallback)(() => v(e));
                                        })),
                            (x.current = !0));
                    }, [e, s]),
                    ("beforeInteractive" === s || "worker" === s) && (m ? ((h[s] = (h[s] || []).concat([{ id: t, src: n, onLoad: r, onReady: o, onError: d, ...p }])), m(h)) : w && w() ? f.add(t || n) : w && !w() && v(e)),
                    b)
                ) {
                    if (
                        (g &&
                            g.forEach((e) => {
                                i.default.preinit(e, { as: "style" });
                            }),
                        "beforeInteractive" === s)
                    )
                        return n
                            ? (i.default.preload(n, p.integrity ? { as: "script", integrity: p.integrity, nonce: y, crossOrigin: p.crossOrigin } : { as: "script", nonce: y, crossOrigin: p.crossOrigin }),
                              (0, l.jsx)("script", { nonce: y, dangerouslySetInnerHTML: { __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...p, id: t }]) + ")" } }))
                            : (p.dangerouslySetInnerHTML && ((p.children = p.dangerouslySetInnerHTML.__html), delete p.dangerouslySetInnerHTML),
                              (0, l.jsx)("script", { nonce: y, dangerouslySetInnerHTML: { __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...p, id: t }]) + ")" } }));
                    "afterInteractive" === s && n && i.default.preload(n, p.integrity ? { as: "script", integrity: p.integrity, nonce: y, crossOrigin: p.crossOrigin } : { as: "script", nonce: y, crossOrigin: p.crossOrigin });
                }
                return null;
            }
            Object.defineProperty(w, "__nextScript", { value: !0 });
            let b = w;
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        9703: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = n(1887);
            n(7573), n(7653);
            let o = r._(n(8379));
            function l(e, t) {
                var n;
                let r = {
                    loading: (e) => {
                        let { error: t, isLoading: n, pastDelay: r } = e;
                        return null;
                    },
                };
                "function" == typeof e && (r.loader = e);
                let l = { ...r, ...t };
                return (0, o.default)({ ...l, modules: null == (n = l.loadableGenerated) ? void 0 : n.modules });
            }
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        2972: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "BailoutToCSR", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                });
            let r = n(951);
            function o(e) {
                let { reason: t, children: n } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n;
            }
        },
        8379: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let r = n(7573),
                o = n(7653),
                l = n(2972),
                i = n(9111);
            function a(e) {
                return { default: e && "default" in e ? e.default : e };
            }
            let u = { loader: () => Promise.resolve(a(() => null)), loading: null, ssr: !0 },
                s = function (e) {
                    let t = { ...u, ...e },
                        n = (0, o.lazy)(() => t.loader().then(a)),
                        s = t.loading;
                    function c(e) {
                        let a = s ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            u = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: ["undefined" == typeof window ? (0, r.jsx)(i.PreloadCss, { moduleIds: t.modules }) : null, (0, r.jsx)(n, { ...e })] })
                                : (0, r.jsx)(l.BailoutToCSR, { reason: "next/dynamic", children: (0, r.jsx)(n, { ...e }) });
                        return (0, r.jsx)(o.Suspense, { fallback: a, children: u });
                    }
                    return (c.displayName = "LoadableComponent"), c;
                };
        },
        9111: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "PreloadCss", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let r = n(7573),
                o = n(2399);
            function l(e) {
                let { moduleIds: t } = e;
                if ("undefined" != typeof window) return null;
                let n = (0, o.getExpectedRequestStore)("next/dynamic css"),
                    l = [];
                if (n.reactLoadableManifest && t) {
                    let e = n.reactLoadableManifest;
                    for (let n of t) {
                        if (!e[n]) continue;
                        let t = e[n].files.filter((e) => e.endsWith(".css"));
                        l.push(...t);
                    }
                }
                return 0 === l.length ? null : (0, r.jsx)(r.Fragment, { children: l.map((e) => (0, r.jsx)("link", { precedence: "dynamic", rel: "stylesheet", href: n.assetPrefix + "/_next/" + encodeURI(e), as: "style" }, e)) });
            }
        },
        1890: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return c;
                },
            });
            var r = n(7653),
                o = { cm: !0, mm: !0, in: !0, px: !0, pt: !0, pc: !0, em: !0, ex: !0, ch: !0, rem: !0, vw: !0, vh: !0, vmin: !0, vmax: !0, "%": !0 };
            function l(e) {
                if ("number" == typeof e) return { value: e, unit: "px" };
                var t,
                    n = (e.match(/^[0-9.]*/) || "").toString();
                t = n.includes(".") ? parseFloat(n) : parseInt(n, 10);
                var r = (e.match(/[^0-9]*$/) || "").toString();
                return o[r] ? { value: t, unit: r } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), { value: t, unit: "px" });
            }
            function i(e) {
                var t = l(e);
                return "".concat(t.value).concat(t.unit);
            }
            var a = function () {
                    return (a =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                u = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n;
                },
                s = (function (e, t, n) {
                    var r = "react-spinners-".concat(e, "-").concat(n);
                    if ("undefined" == typeof window || !window.document) return r;
                    var o = document.createElement("style");
                    document.head.appendChild(o);
                    var l = o.sheet,
                        i = "\n    @keyframes ".concat(r, " {\n      ").concat(t, "\n    }\n  ");
                    return l && l.insertRule(i, 0), r;
                })("MoonLoader", "100% {transform: rotate(360deg)}", "moon"),
                c = function (e) {
                    var t = e.loading,
                        n = e.color,
                        o = void 0 === n ? "#000000" : n,
                        c = e.speedMultiplier,
                        d = void 0 === c ? 1 : c,
                        f = e.cssOverride,
                        g = e.size,
                        p = u(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
                        v = l(void 0 === g ? 60 : g),
                        m = v.value,
                        h = v.unit,
                        w = m / 7,
                        b = a(
                            {
                                display: "inherit",
                                position: "relative",
                                width: "".concat("".concat(m + 2 * w).concat(h)),
                                height: "".concat("".concat(m + 2 * w).concat(h)),
                                animation: "".concat(s, " ").concat(0.6 / d, "s 0s infinite linear"),
                                animationFillMode: "forwards",
                            },
                            void 0 === f ? {} : f
                        ),
                        y = function (e) {
                            return { width: i(e), height: i(e), borderRadius: "100%" };
                        },
                        C = a(a({}, y(w)), {
                            backgroundColor: "".concat(o),
                            opacity: "0.8",
                            position: "absolute",
                            top: "".concat("".concat(m / 2 - w / 2).concat(h)),
                            animation: "".concat(s, " ").concat(0.6 / d, "s 0s infinite linear"),
                            animationFillMode: "forwards",
                        }),
                        x = a(a({}, y(m)), { border: "".concat(w, "px solid ").concat(o), opacity: "0.1", boxSizing: "content-box", position: "absolute" });
                    return void 0 === t || t ? r.createElement("span", a({ style: b }, p), r.createElement("span", { style: C }), r.createElement("span", { style: x })) : null;
                };
        },
        8571: function (e) {
            var t,
                n,
                r,
                o = (e.exports = {});
            function l() {
                throw Error("setTimeout has not been defined");
            }
            function i() {
                throw Error("clearTimeout has not been defined");
            }
            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === l || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                try {
                    return t(e, 0);
                } catch (n) {
                    try {
                        return t.call(null, e, 0);
                    } catch (n) {
                        return t.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : l;
                } catch (e) {
                    t = l;
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                    n = i;
                }
            })();
            var u = [],
                s = !1,
                c = -1;
            function d() {
                s && r && ((s = !1), r.length ? (u = r.concat(u)) : (c = -1), u.length && f());
            }
            function f() {
                if (!s) {
                    var e = a(d);
                    s = !0;
                    for (var t = u.length; t; ) {
                        for (r = u, u = []; ++c < t; ) r && r[c].run();
                        (c = -1), (t = u.length);
                    }
                    (r = null),
                        (s = !1),
                        (function (e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                            try {
                                n(e);
                            } catch (t) {
                                try {
                                    return n.call(null, e);
                                } catch (t) {
                                    return n.call(this, e);
                                }
                            }
                        })(e);
                }
            }
            function g(e, t) {
                (this.fun = e), (this.array = t);
            }
            function p() {}
            (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new g(e, t)), 1 !== u.length || s || a(f);
            }),
                (g.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = p),
                (o.addListener = p),
                (o.once = p),
                (o.off = p),
                (o.removeListener = p),
                (o.removeAllListeners = p),
                (o.emit = p),
                (o.prependListener = p),
                (o.prependOnceListener = p),
                (o.listeners = function (e) {
                    return [];
                }),
                (o.binding = function (e) {
                    throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                    return "/";
                }),
                (o.chdir = function (e) {
                    throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        1004: function (e, t, n) {
            "use strict";
            n.d(t, {
                gm: function () {
                    return l;
                },
            });
            var r = n(7653);
            n(7573);
            var o = r.createContext(void 0);
            function l(e) {
                let t = r.useContext(o);
                return e || t || "ltr";
            }
        },
        1403: function (e, t, n) {
            "use strict";
            n.d(t, {
                D: function () {
                    return o;
                },
            });
            var r = n(7653);
            function o(e) {
                let t = r.useRef({ value: e, previous: e });
                return r.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
            }
        },
        5032: function (e, t, n) {
            "use strict";
            n.d(t, {
                t: function () {
                    return l;
                },
            });
            var r = n(7653),
                o = n(1523);
            function l(e) {
                let [t, n] = r.useState(void 0);
                return (
                    (0, o.b)(() => {
                        if (e) {
                            n({ width: e.offsetWidth, height: e.offsetHeight });
                            let t = new ResizeObserver((t) => {
                                let r, o;
                                if (!Array.isArray(t) || !t.length) return;
                                let l = t[0];
                                if ("borderBoxSize" in l) {
                                    let e = l.borderBoxSize,
                                        t = Array.isArray(e) ? e[0] : e;
                                    (r = t.inlineSize), (o = t.blockSize);
                                } else (r = e.offsetWidth), (o = e.offsetHeight);
                                n({ width: r, height: o });
                            });
                            return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
                        }
                        n(void 0);
                    }, [e]),
                    t
                );
            }
        },
        8912: function (e, t, n) {
            "use strict";
            n.d(t, {
                b7: function () {
                    return i;
                },
                ie: function () {
                    return l;
                },
            });
            var r = n(7653),
                o = n(6492);
            function l(e, t) {
                return e
                    ? ("function" == typeof e &&
                          (() => {
                              let t = Object.getPrototypeOf(e);
                              return t.prototype && t.prototype.isReactComponent;
                          })()) ||
                      "function" == typeof e ||
                      ("object" == typeof e && "symbol" == typeof e.$$typeof && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description))
                        ? r.createElement(e, t)
                        : e
                    : null;
            }
            function i(e) {
                let t = { state: {}, onStateChange: () => {}, renderFallbackValue: null, ...e },
                    [n] = r.useState(() => ({ current: (0, o.W_)(t) })),
                    [l, i] = r.useState(() => n.current.initialState);
                return (
                    n.current.setOptions((t) => ({
                        ...t,
                        ...e,
                        state: { ...l, ...e.state },
                        onStateChange: (t) => {
                            i(t), null == e.onStateChange || e.onStateChange(t);
                        },
                    })),
                    n.current
                );
            }
        },
        6492: function (e, t, n) {
            "use strict";
            function r(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function o(e, t) {
                return (n) => {
                    t.setState((t) => ({ ...t, [e]: r(n, t[e]) }));
                };
            }
            function l(e) {
                return e instanceof Function;
            }
            function i(e, t, n) {
                let r,
                    o = [];
                return (l) => {
                    let i, a;
                    n.key && n.debug && (i = Date.now());
                    let u = e(l);
                    if (!(u.length !== o.length || u.some((e, t) => o[t] !== e))) return r;
                    if (((o = u), n.key && n.debug && (a = Date.now()), (r = t(...u)), null == n || null == n.onChange || n.onChange(r), n.key && n.debug && null != n && n.debug())) {
                        let e = Math.round((Date.now() - i) * 100) / 100,
                            t = Math.round((Date.now() - a) * 100) / 100,
                            r = t / 16,
                            o = (e, t) => {
                                for (e = String(e); e.length < t; ) e = " " + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key
                        );
                    }
                    return r;
                };
            }
            function a(e, t, n, r) {
                return {
                    debug: () => {
                        var n;
                        return null != (n = null == e ? void 0 : e.debugAll) ? n : e[t];
                    },
                    key: !1,
                    onChange: r,
                };
            }
            n.d(t, {
                G_: function () {
                    return X;
                },
                JG: function () {
                    return K;
                },
                W_: function () {
                    return W;
                },
                o6: function () {
                    return U;
                },
                sC: function () {
                    return $;
                },
                tj: function () {
                    return Y;
                },
                vL: function () {
                    return q;
                },
            });
            let u = "debugHeaders";
            function s(e, t, n) {
                var r;
                let o = {
                    id: null != (r = n.id) ? r : t.id,
                    column: t,
                    index: n.index,
                    isPlaceholder: !!n.isPlaceholder,
                    placeholderId: n.placeholderId,
                    depth: n.depth,
                    subHeaders: [],
                    colSpan: 0,
                    rowSpan: 0,
                    headerGroup: null,
                    getLeafHeaders: () => {
                        let e = [],
                            t = (n) => {
                                n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
                            };
                        return t(o), e;
                    },
                    getContext: () => ({ table: e, header: o, column: t }),
                };
                return (
                    e._features.forEach((t) => {
                        null == t.createHeader || t.createHeader(o, e);
                    }),
                    o
                );
            }
            function c(e, t, n, r) {
                var o, l;
                let i = 0,
                    a = function (e, t) {
                        void 0 === t && (t = 1),
                            (i = Math.max(i, t)),
                            e
                                .filter((e) => e.getIsVisible())
                                .forEach((e) => {
                                    var n;
                                    null != (n = e.columns) && n.length && a(e.columns, t + 1);
                                }, 0);
                    };
                a(e);
                let u = [],
                    c = (e, t) => {
                        let o = { depth: t, id: [r, `${t}`].filter(Boolean).join("_"), headers: [] },
                            l = [];
                        e.forEach((e) => {
                            let i;
                            let a = [...l].reverse()[0],
                                u = e.column.depth === o.depth,
                                c = !1;
                            if ((u && e.column.parent ? (i = e.column.parent) : ((i = e.column), (c = !0)), a && (null == a ? void 0 : a.column) === i)) a.subHeaders.push(e);
                            else {
                                let o = s(n, i, {
                                    id: [r, t, i.id, null == e ? void 0 : e.id].filter(Boolean).join("_"),
                                    isPlaceholder: c,
                                    placeholderId: c ? `${l.filter((e) => e.column === i).length}` : void 0,
                                    depth: t,
                                    index: l.length,
                                });
                                o.subHeaders.push(e), l.push(o);
                            }
                            o.headers.push(e), (e.headerGroup = o);
                        }),
                            u.push(o),
                            t > 0 && c(l, t - 1);
                    };
                c(
                    t.map((e, t) => s(n, e, { depth: i, index: t })),
                    i - 1
                ),
                    u.reverse();
                let d = (e) =>
                    e
                        .filter((e) => e.column.getIsVisible())
                        .map((e) => {
                            let t = 0,
                                n = 0,
                                r = [0];
                            return (
                                e.subHeaders && e.subHeaders.length
                                    ? ((r = []),
                                      d(e.subHeaders).forEach((e) => {
                                          let { colSpan: n, rowSpan: o } = e;
                                          (t += n), r.push(o);
                                      }))
                                    : (t = 1),
                                (n += Math.min(...r)),
                                (e.colSpan = t),
                                (e.rowSpan = n),
                                { colSpan: t, rowSpan: n }
                            );
                        });
                return d(null != (o = null == (l = u[0]) ? void 0 : l.headers) ? o : []), u;
            }
            let d = (e, t, n, r, o, l, u) => {
                    let s = {
                        id: t,
                        index: r,
                        original: n,
                        depth: o,
                        parentId: u,
                        _valuesCache: {},
                        _uniqueValuesCache: {},
                        getValue: (t) => {
                            if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
                            let n = e.getColumn(t);
                            if (null != n && n.accessorFn) return (s._valuesCache[t] = n.accessorFn(s.original, r)), s._valuesCache[t];
                        },
                        getUniqueValues: (t) => {
                            if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
                            let n = e.getColumn(t);
                            return null != n && n.accessorFn
                                ? (n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r)) : (s._uniqueValuesCache[t] = [s.getValue(t)]), s._uniqueValuesCache[t])
                                : void 0;
                        },
                        renderValue: (t) => {
                            var n;
                            return null != (n = s.getValue(t)) ? n : e.options.renderFallbackValue;
                        },
                        subRows: null != l ? l : [],
                        getLeafRows: () =>
                            (function (e, t) {
                                let n = [],
                                    r = (e) => {
                                        e.forEach((e) => {
                                            n.push(e);
                                            let o = t(e);
                                            null != o && o.length && r(o);
                                        });
                                    };
                                return r(e), n;
                            })(s.subRows, (e) => e.subRows),
                        getParentRow: () => (s.parentId ? e.getRow(s.parentId, !0) : void 0),
                        getParentRows: () => {
                            let e = [],
                                t = s;
                            for (;;) {
                                let n = t.getParentRow();
                                if (!n) break;
                                e.push(n), (t = n);
                            }
                            return e.reverse();
                        },
                        getAllCells: i(
                            () => [e.getAllLeafColumns()],
                            (t) =>
                                t.map((t) =>
                                    (function (e, t, n, r) {
                                        let o = {
                                            id: `${t.id}_${n.id}`,
                                            row: t,
                                            column: n,
                                            getValue: () => t.getValue(r),
                                            renderValue: () => {
                                                var t;
                                                return null != (t = o.getValue()) ? t : e.options.renderFallbackValue;
                                            },
                                            getContext: i(
                                                () => [e, n, t, o],
                                                (e, t, n, r) => ({ table: e, column: t, row: n, cell: r, getValue: r.getValue, renderValue: r.renderValue }),
                                                a(e.options, "debugCells", "cell.getContext")
                                            ),
                                        };
                                        return (
                                            e._features.forEach((r) => {
                                                null == r.createCell || r.createCell(o, n, t, e);
                                            }, {}),
                                            o
                                        );
                                    })(e, s, t, t.id)
                                ),
                            a(e.options, "debugRows", "getAllCells")
                        ),
                        _getAllCellsByColumnId: i(
                            () => [s.getAllCells()],
                            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
                            a(e.options, "debugRows", "getAllCellsByColumnId")
                        ),
                    };
                    for (let t = 0; t < e._features.length; t++) {
                        let n = e._features[t];
                        null == n || null == n.createRow || n.createRow(s, e);
                    }
                    return s;
                },
                f = (e, t, n) => {
                    var r, o;
                    let l = null == n || null == (r = n.toString()) ? void 0 : r.toLowerCase();
                    return !!(null == (o = e.getValue(t)) || null == (o = o.toString()) || null == (o = o.toLowerCase()) ? void 0 : o.includes(l));
                };
            f.autoRemove = (e) => x(e);
            let g = (e, t, n) => {
                var r;
                return !!(null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.includes(n));
            };
            g.autoRemove = (e) => x(e);
            let p = (e, t, n) => {
                var r;
                return (null == (r = e.getValue(t)) || null == (r = r.toString()) ? void 0 : r.toLowerCase()) === (null == n ? void 0 : n.toLowerCase());
            };
            p.autoRemove = (e) => x(e);
            let v = (e, t, n) => {
                var r;
                return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
            };
            v.autoRemove = (e) => x(e) || !(null != e && e.length);
            let m = (e, t, n) =>
                !n.some((n) => {
                    var r;
                    return !(null != (r = e.getValue(t)) && r.includes(n));
                });
            m.autoRemove = (e) => x(e) || !(null != e && e.length);
            let h = (e, t, n) =>
                n.some((n) => {
                    var r;
                    return null == (r = e.getValue(t)) ? void 0 : r.includes(n);
                });
            h.autoRemove = (e) => x(e) || !(null != e && e.length);
            let w = (e, t, n) => e.getValue(t) === n;
            w.autoRemove = (e) => x(e);
            let b = (e, t, n) => e.getValue(t) == n;
            b.autoRemove = (e) => x(e);
            let y = (e, t, n) => {
                let [r, o] = n,
                    l = e.getValue(t);
                return l >= r && l <= o;
            };
            (y.resolveFilterValue = (e) => {
                let [t, n] = e,
                    r = "number" != typeof t ? parseFloat(t) : t,
                    o = "number" != typeof n ? parseFloat(n) : n,
                    l = null === t || Number.isNaN(r) ? -1 / 0 : r,
                    i = null === n || Number.isNaN(o) ? 1 / 0 : o;
                if (l > i) {
                    let e = l;
                    (l = i), (i = e);
                }
                return [l, i];
            }),
                (y.autoRemove = (e) => x(e) || (x(e[0]) && x(e[1])));
            let C = { includesString: f, includesStringSensitive: g, equalsString: p, arrIncludes: v, arrIncludesAll: m, arrIncludesSome: h, equals: w, weakEquals: b, inNumberRange: y };
            function x(e) {
                return null == e || "" === e;
            }
            function R(e, t, n) {
                return (!!e && !!e.autoRemove && e.autoRemove(t, n)) || void 0 === t || ("string" == typeof t && !t);
            }
            let S = {
                    sum: (e, t, n) =>
                        n.reduce((t, n) => {
                            let r = n.getValue(e);
                            return t + ("number" == typeof r ? r : 0);
                        }, 0),
                    min: (e, t, n) => {
                        let r;
                        return (
                            n.forEach((t) => {
                                let n = t.getValue(e);
                                null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
                            }),
                            r
                        );
                    },
                    max: (e, t, n) => {
                        let r;
                        return (
                            n.forEach((t) => {
                                let n = t.getValue(e);
                                null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
                            }),
                            r
                        );
                    },
                    extent: (e, t, n) => {
                        let r, o;
                        return (
                            n.forEach((t) => {
                                let n = t.getValue(e);
                                null != n && (void 0 === r ? n >= n && (r = o = n) : (r > n && (r = n), o < n && (o = n)));
                            }),
                            [r, o]
                        );
                    },
                    mean: (e, t) => {
                        let n = 0,
                            r = 0;
                        if (
                            (t.forEach((t) => {
                                let o = t.getValue(e);
                                null != o && (o = +o) >= o && (++n, (r += o));
                            }),
                            n)
                        )
                            return r / n;
                    },
                    median: (e, t) => {
                        if (!t.length) return;
                        let n = t.map((t) => t.getValue(e));
                        if (!(Array.isArray(n) && n.every((e) => "number" == typeof e))) return;
                        if (1 === n.length) return n[0];
                        let r = Math.floor(n.length / 2),
                            o = n.sort((e, t) => e - t);
                        return n.length % 2 != 0 ? o[r] : (o[r - 1] + o[r]) / 2;
                    },
                    unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
                    uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
                    count: (e, t) => t.length,
                },
                E = () => ({ left: [], right: [] }),
                M = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
                P = () => ({ startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: !1, columnSizingStart: [] }),
                F = null;
            function _(e) {
                return "touchstart" === e.type;
            }
            function I(e, t) {
                return t ? ("center" === t ? e.getCenterVisibleLeafColumns() : "left" === t ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns()) : e.getVisibleLeafColumns();
            }
            let T = () => ({ pageIndex: 0, pageSize: 10 }),
                L = () => ({ top: [], bottom: [] }),
                A = (e, t, n, r, o) => {
                    var l;
                    let i = o.getRow(t, !0);
                    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), i.getCanSelect() && (e[t] = !0)) : delete e[t],
                        r && null != (l = i.subRows) && l.length && i.getCanSelectSubRows() && i.subRows.forEach((t) => A(e, t.id, n, r, o));
                };
            function O(e, t) {
                let n = e.getState().rowSelection,
                    r = [],
                    o = {},
                    l = function (e, t) {
                        return e
                            .map((e) => {
                                var t;
                                let i = D(e, n);
                                if ((i && (r.push(e), (o[e.id] = e)), null != (t = e.subRows) && t.length && (e = { ...e, subRows: l(e.subRows) }), i)) return e;
                            })
                            .filter(Boolean);
                    };
                return { rows: l(t.rows), flatRows: r, rowsById: o };
            }
            function D(e, t) {
                var n;
                return null != (n = t[e.id]) && n;
            }
            function j(e, t, n) {
                var r;
                if (!(null != (r = e.subRows) && r.length)) return !1;
                let o = !0,
                    l = !1;
                return (
                    e.subRows.forEach((e) => {
                        if ((!l || o) && (e.getCanSelect() && (D(e, t) ? (l = !0) : (o = !1)), e.subRows && e.subRows.length)) {
                            let n = j(e, t);
                            "all" === n ? (l = !0) : ("some" === n && (l = !0), (o = !1));
                        }
                    }),
                    o ? "all" : !!l && "some"
                );
            }
            let k = /([0-9]+)/gm;
            function V(e, t) {
                return e === t ? 0 : e > t ? 1 : -1;
            }
            function N(e) {
                return "number" == typeof e ? (isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e)) : "string" == typeof e ? e : "";
            }
            function z(e, t) {
                let n = e.split(k).filter(Boolean),
                    r = t.split(k).filter(Boolean);
                for (; n.length && r.length; ) {
                    let e = n.shift(),
                        t = r.shift(),
                        o = parseInt(e, 10),
                        l = parseInt(t, 10),
                        i = [o, l].sort();
                    if (isNaN(i[0])) {
                        if (e > t) return 1;
                        if (t > e) return -1;
                        continue;
                    }
                    if (isNaN(i[1])) return isNaN(o) ? -1 : 1;
                    if (o > l) return 1;
                    if (l > o) return -1;
                }
                return n.length - r.length;
            }
            let H = {
                    alphanumeric: (e, t, n) => z(N(e.getValue(n)).toLowerCase(), N(t.getValue(n)).toLowerCase()),
                    alphanumericCaseSensitive: (e, t, n) => z(N(e.getValue(n)), N(t.getValue(n))),
                    text: (e, t, n) => V(N(e.getValue(n)).toLowerCase(), N(t.getValue(n)).toLowerCase()),
                    textCaseSensitive: (e, t, n) => V(N(e.getValue(n)), N(t.getValue(n))),
                    datetime: (e, t, n) => {
                        let r = e.getValue(n),
                            o = t.getValue(n);
                        return r > o ? 1 : r < o ? -1 : 0;
                    },
                    basic: (e, t, n) => V(e.getValue(n), t.getValue(n)),
                },
                G = [
                    {
                        createTable: (e) => {
                            (e.getHeaderGroups = i(
                                () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right],
                                (t, n, r, o) => {
                                    var l, i;
                                    let a = null != (l = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean)) ? l : [],
                                        u = null != (i = null == o ? void 0 : o.map((e) => n.find((t) => t.id === e)).filter(Boolean)) ? i : [];
                                    return c(t, [...a, ...n.filter((e) => !(null != r && r.includes(e.id)) && !(null != o && o.includes(e.id))), ...u], e);
                                },
                                a(e.options, u, "getHeaderGroups")
                            )),
                                (e.getCenterHeaderGroups = i(
                                    () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right],
                                    (t, n, r, o) => c(t, (n = n.filter((e) => !(null != r && r.includes(e.id)) && !(null != o && o.includes(e.id)))), e, "center"),
                                    a(e.options, u, "getCenterHeaderGroups")
                                )),
                                (e.getLeftHeaderGroups = i(
                                    () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left],
                                    (t, n, r) => {
                                        var o;
                                        return c(t, null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean)) ? o : [], e, "left");
                                    },
                                    a(e.options, u, "getLeftHeaderGroups")
                                )),
                                (e.getRightHeaderGroups = i(
                                    () => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right],
                                    (t, n, r) => {
                                        var o;
                                        return c(t, null != (o = null == r ? void 0 : r.map((e) => n.find((t) => t.id === e)).filter(Boolean)) ? o : [], e, "right");
                                    },
                                    a(e.options, u, "getRightHeaderGroups")
                                )),
                                (e.getFooterGroups = i(
                                    () => [e.getHeaderGroups()],
                                    (e) => [...e].reverse(),
                                    a(e.options, u, "getFooterGroups")
                                )),
                                (e.getLeftFooterGroups = i(
                                    () => [e.getLeftHeaderGroups()],
                                    (e) => [...e].reverse(),
                                    a(e.options, u, "getLeftFooterGroups")
                                )),
                                (e.getCenterFooterGroups = i(
                                    () => [e.getCenterHeaderGroups()],
                                    (e) => [...e].reverse(),
                                    a(e.options, u, "getCenterFooterGroups")
                                )),
                                (e.getRightFooterGroups = i(
                                    () => [e.getRightHeaderGroups()],
                                    (e) => [...e].reverse(),
                                    a(e.options, u, "getRightFooterGroups")
                                )),
                                (e.getFlatHeaders = i(
                                    () => [e.getHeaderGroups()],
                                    (e) => e.map((e) => e.headers).flat(),
                                    a(e.options, u, "getFlatHeaders")
                                )),
                                (e.getLeftFlatHeaders = i(
                                    () => [e.getLeftHeaderGroups()],
                                    (e) => e.map((e) => e.headers).flat(),
                                    a(e.options, u, "getLeftFlatHeaders")
                                )),
                                (e.getCenterFlatHeaders = i(
                                    () => [e.getCenterHeaderGroups()],
                                    (e) => e.map((e) => e.headers).flat(),
                                    a(e.options, u, "getCenterFlatHeaders")
                                )),
                                (e.getRightFlatHeaders = i(
                                    () => [e.getRightHeaderGroups()],
                                    (e) => e.map((e) => e.headers).flat(),
                                    a(e.options, u, "getRightFlatHeaders")
                                )),
                                (e.getCenterLeafHeaders = i(
                                    () => [e.getCenterFlatHeaders()],
                                    (e) =>
                                        e.filter((e) => {
                                            var t;
                                            return !(null != (t = e.subHeaders) && t.length);
                                        }),
                                    a(e.options, u, "getCenterLeafHeaders")
                                )),
                                (e.getLeftLeafHeaders = i(
                                    () => [e.getLeftFlatHeaders()],
                                    (e) =>
                                        e.filter((e) => {
                                            var t;
                                            return !(null != (t = e.subHeaders) && t.length);
                                        }),
                                    a(e.options, u, "getLeftLeafHeaders")
                                )),
                                (e.getRightLeafHeaders = i(
                                    () => [e.getRightFlatHeaders()],
                                    (e) =>
                                        e.filter((e) => {
                                            var t;
                                            return !(null != (t = e.subHeaders) && t.length);
                                        }),
                                    a(e.options, u, "getRightLeafHeaders")
                                )),
                                (e.getLeafHeaders = i(
                                    () => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()],
                                    (e, t, n) => {
                                        var r, o, l, i, a, u;
                                        return [
                                            ...(null != (r = null == (o = e[0]) ? void 0 : o.headers) ? r : []),
                                            ...(null != (l = null == (i = t[0]) ? void 0 : i.headers) ? l : []),
                                            ...(null != (a = null == (u = n[0]) ? void 0 : u.headers) ? a : []),
                                        ]
                                            .map((e) => e.getLeafHeaders())
                                            .flat();
                                    },
                                    a(e.options, u, "getLeafHeaders")
                                ));
                        },
                    },
                    {
                        getInitialState: (e) => ({ columnVisibility: {}, ...e }),
                        getDefaultOptions: (e) => ({ onColumnVisibilityChange: o("columnVisibility", e) }),
                        createColumn: (e, t) => {
                            (e.toggleVisibility = (n) => {
                                e.getCanHide() && t.setColumnVisibility((t) => ({ ...t, [e.id]: null != n ? n : !e.getIsVisible() }));
                            }),
                                (e.getIsVisible = () => {
                                    var n, r;
                                    let o = e.columns;
                                    return null == (n = o.length ? o.some((e) => e.getIsVisible()) : null == (r = t.getState().columnVisibility) ? void 0 : r[e.id]) || n;
                                }),
                                (e.getCanHide = () => {
                                    var n, r;
                                    return (null == (n = e.columnDef.enableHiding) || n) && (null == (r = t.options.enableHiding) || r);
                                }),
                                (e.getToggleVisibilityHandler = () => (t) => {
                                    null == e.toggleVisibility || e.toggleVisibility(t.target.checked);
                                });
                        },
                        createRow: (e, t) => {
                            (e._getAllVisibleCells = i(
                                () => [e.getAllCells(), t.getState().columnVisibility],
                                (e) => e.filter((e) => e.column.getIsVisible()),
                                a(t.options, "debugRows", "_getAllVisibleCells")
                            )),
                                (e.getVisibleCells = i(
                                    () => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()],
                                    (e, t, n) => [...e, ...t, ...n],
                                    a(t.options, "debugRows", "getVisibleCells")
                                ));
                        },
                        createTable: (e) => {
                            let t = (t, n) =>
                                i(
                                    () => [
                                        n(),
                                        n()
                                            .filter((e) => e.getIsVisible())
                                            .map((e) => e.id)
                                            .join("_"),
                                    ],
                                    (e) => e.filter((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible())),
                                    a(e.options, "debugColumns", t)
                                );
                            (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns())),
                                (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns())),
                                (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns())),
                                (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns())),
                                (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns())),
                                (e.setColumnVisibility = (t) => (null == e.options.onColumnVisibilityChange ? void 0 : e.options.onColumnVisibilityChange(t))),
                                (e.resetColumnVisibility = (t) => {
                                    var n;
                                    e.setColumnVisibility(t ? {} : null != (n = e.initialState.columnVisibility) ? n : {});
                                }),
                                (e.toggleAllColumnsVisible = (t) => {
                                    var n;
                                    (t = null != (n = t) ? n : !e.getIsAllColumnsVisible()), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({ ...e, [n.id]: t || !(null != n.getCanHide && n.getCanHide()) }), {}));
                                }),
                                (e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
                                (e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => (null == e.getIsVisible ? void 0 : e.getIsVisible()))),
                                (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                                    var n;
                                    e.toggleAllColumnsVisible(null == (n = t.target) ? void 0 : n.checked);
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ columnOrder: [], ...e }),
                        getDefaultOptions: (e) => ({ onColumnOrderChange: o("columnOrder", e) }),
                        createColumn: (e, t) => {
                            (e.getIndex = i(
                                (e) => [I(t, e)],
                                (t) => t.findIndex((t) => t.id === e.id),
                                a(t.options, "debugColumns", "getIndex")
                            )),
                                (e.getIsFirstColumn = (n) => {
                                    var r;
                                    return (null == (r = I(t, n)[0]) ? void 0 : r.id) === e.id;
                                }),
                                (e.getIsLastColumn = (n) => {
                                    var r;
                                    let o = I(t, n);
                                    return (null == (r = o[o.length - 1]) ? void 0 : r.id) === e.id;
                                });
                        },
                        createTable: (e) => {
                            (e.setColumnOrder = (t) => (null == e.options.onColumnOrderChange ? void 0 : e.options.onColumnOrderChange(t))),
                                (e.resetColumnOrder = (t) => {
                                    var n;
                                    e.setColumnOrder(t ? [] : null != (n = e.initialState.columnOrder) ? n : []);
                                }),
                                (e._getOrderColumnsFn = i(
                                    () => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode],
                                    (e, t, n) => (r) => {
                                        let o = [];
                                        if (null != e && e.length) {
                                            let t = [...e],
                                                n = [...r];
                                            for (; n.length && t.length; ) {
                                                let e = t.shift(),
                                                    r = n.findIndex((t) => t.id === e);
                                                r > -1 && o.push(n.splice(r, 1)[0]);
                                            }
                                            o = [...o, ...n];
                                        } else o = r;
                                        return (function (e, t, n) {
                                            if (!(null != t && t.length) || !n) return e;
                                            let r = e.filter((e) => !t.includes(e.id));
                                            return "remove" === n ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
                                        })(o, t, n);
                                    },
                                    a(e.options, "debugTable", "_getOrderColumnsFn")
                                ));
                        },
                    },
                    {
                        getInitialState: (e) => ({ columnPinning: E(), ...e }),
                        getDefaultOptions: (e) => ({ onColumnPinningChange: o("columnPinning", e) }),
                        createColumn: (e, t) => {
                            (e.pin = (n) => {
                                let r = e
                                    .getLeafColumns()
                                    .map((e) => e.id)
                                    .filter(Boolean);
                                t.setColumnPinning((e) => {
                                    var t, o, l, i, a, u;
                                    return "right" === n
                                        ? {
                                              left: (null != (l = null == e ? void 0 : e.left) ? l : []).filter((e) => !(null != r && r.includes(e))),
                                              right: [...(null != (i = null == e ? void 0 : e.right) ? i : []).filter((e) => !(null != r && r.includes(e))), ...r],
                                          }
                                        : "left" === n
                                        ? {
                                              left: [...(null != (a = null == e ? void 0 : e.left) ? a : []).filter((e) => !(null != r && r.includes(e))), ...r],
                                              right: (null != (u = null == e ? void 0 : e.right) ? u : []).filter((e) => !(null != r && r.includes(e))),
                                          }
                                        : {
                                              left: (null != (t = null == e ? void 0 : e.left) ? t : []).filter((e) => !(null != r && r.includes(e))),
                                              right: (null != (o = null == e ? void 0 : e.right) ? o : []).filter((e) => !(null != r && r.includes(e))),
                                          };
                                });
                            }),
                                (e.getCanPin = () =>
                                    e.getLeafColumns().some((e) => {
                                        var n, r, o;
                                        return (null == (n = e.columnDef.enablePinning) || n) && (null == (r = null != (o = t.options.enableColumnPinning) ? o : t.options.enablePinning) || r);
                                    })),
                                (e.getIsPinned = () => {
                                    let n = e.getLeafColumns().map((e) => e.id),
                                        { left: r, right: o } = t.getState().columnPinning,
                                        l = n.some((e) => (null == r ? void 0 : r.includes(e))),
                                        i = n.some((e) => (null == o ? void 0 : o.includes(e)));
                                    return l ? "left" : !!i && "right";
                                }),
                                (e.getPinnedIndex = () => {
                                    var n, r;
                                    let o = e.getIsPinned();
                                    return o ? (null != (n = null == (r = t.getState().columnPinning) || null == (r = r[o]) ? void 0 : r.indexOf(e.id)) ? n : -1) : 0;
                                });
                        },
                        createRow: (e, t) => {
                            (e.getCenterVisibleCells = i(
                                () => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right],
                                (e, t, n) => {
                                    let r = [...(null != t ? t : []), ...(null != n ? n : [])];
                                    return e.filter((e) => !r.includes(e.column.id));
                                },
                                a(t.options, "debugRows", "getCenterVisibleCells")
                            )),
                                (e.getLeftVisibleCells = i(
                                    () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
                                    (e, t) =>
                                        (null != t ? t : [])
                                            .map((t) => e.find((e) => e.column.id === t))
                                            .filter(Boolean)
                                            .map((e) => ({ ...e, position: "left" })),
                                    a(t.options, "debugRows", "getLeftVisibleCells")
                                )),
                                (e.getRightVisibleCells = i(
                                    () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
                                    (e, t) =>
                                        (null != t ? t : [])
                                            .map((t) => e.find((e) => e.column.id === t))
                                            .filter(Boolean)
                                            .map((e) => ({ ...e, position: "right" })),
                                    a(t.options, "debugRows", "getRightVisibleCells")
                                ));
                        },
                        createTable: (e) => {
                            (e.setColumnPinning = (t) => (null == e.options.onColumnPinningChange ? void 0 : e.options.onColumnPinningChange(t))),
                                (e.resetColumnPinning = (t) => {
                                    var n, r;
                                    return e.setColumnPinning(t ? E() : null != (n = null == (r = e.initialState) ? void 0 : r.columnPinning) ? n : E());
                                }),
                                (e.getIsSomeColumnsPinned = (t) => {
                                    var n, r, o;
                                    let l = e.getState().columnPinning;
                                    return t ? !!(null == (n = l[t]) ? void 0 : n.length) : !!((null == (r = l.left) ? void 0 : r.length) || (null == (o = l.right) ? void 0 : o.length));
                                }),
                                (e.getLeftLeafColumns = i(
                                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                                    a(e.options, "debugColumns", "getLeftLeafColumns")
                                )),
                                (e.getRightLeafColumns = i(
                                    () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                                    (e, t) => (null != t ? t : []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
                                    a(e.options, "debugColumns", "getRightLeafColumns")
                                )),
                                (e.getCenterLeafColumns = i(
                                    () => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right],
                                    (e, t, n) => {
                                        let r = [...(null != t ? t : []), ...(null != n ? n : [])];
                                        return e.filter((e) => !r.includes(e.id));
                                    },
                                    a(e.options, "debugColumns", "getCenterLeafColumns")
                                ));
                        },
                    },
                    {
                        createColumn: (e, t) => {
                            (e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
                                (e.getFacetedRowModel = () => (e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel())),
                                (e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id)),
                                (e.getFacetedUniqueValues = () => (e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map())),
                                (e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id)),
                                (e.getFacetedMinMaxValues = () => {
                                    if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
                                });
                        },
                    },
                    {
                        getDefaultColumnDef: () => ({ filterFn: "auto" }),
                        getInitialState: (e) => ({ columnFilters: [], ...e }),
                        getDefaultOptions: (e) => ({ onColumnFiltersChange: o("columnFilters", e), filterFromLeafRows: !1, maxLeafRowFilterDepth: 100 }),
                        createColumn: (e, t) => {
                            (e.getAutoFilterFn = () => {
                                let n = t.getCoreRowModel().flatRows[0],
                                    r = null == n ? void 0 : n.getValue(e.id);
                                return "string" == typeof r
                                    ? C.includesString
                                    : "number" == typeof r
                                    ? C.inNumberRange
                                    : "boolean" == typeof r || (null !== r && "object" == typeof r)
                                    ? C.equals
                                    : Array.isArray(r)
                                    ? C.arrIncludes
                                    : C.weakEquals;
                            }),
                                (e.getFilterFn = () => {
                                    var n, r;
                                    return l(e.columnDef.filterFn)
                                        ? e.columnDef.filterFn
                                        : "auto" === e.columnDef.filterFn
                                        ? e.getAutoFilterFn()
                                        : null != (n = null == (r = t.options.filterFns) ? void 0 : r[e.columnDef.filterFn])
                                        ? n
                                        : C[e.columnDef.filterFn];
                                }),
                                (e.getCanFilter = () => {
                                    var n, r, o;
                                    return (null == (n = e.columnDef.enableColumnFilter) || n) && (null == (r = t.options.enableColumnFilters) || r) && (null == (o = t.options.enableFilters) || o) && !!e.accessorFn;
                                }),
                                (e.getIsFiltered = () => e.getFilterIndex() > -1),
                                (e.getFilterValue = () => {
                                    var n;
                                    return null == (n = t.getState().columnFilters) || null == (n = n.find((t) => t.id === e.id)) ? void 0 : n.value;
                                }),
                                (e.getFilterIndex = () => {
                                    var n, r;
                                    return null != (n = null == (r = t.getState().columnFilters) ? void 0 : r.findIndex((t) => t.id === e.id)) ? n : -1;
                                }),
                                (e.setFilterValue = (n) => {
                                    t.setColumnFilters((t) => {
                                        var o, l;
                                        let i = e.getFilterFn(),
                                            a = null == t ? void 0 : t.find((t) => t.id === e.id),
                                            u = r(n, a ? a.value : void 0);
                                        if (R(i, u, e)) return null != (o = null == t ? void 0 : t.filter((t) => t.id !== e.id)) ? o : [];
                                        let s = { id: e.id, value: u };
                                        return a ? (null != (l = null == t ? void 0 : t.map((t) => (t.id === e.id ? s : t))) ? l : []) : null != t && t.length ? [...t, s] : [s];
                                    });
                                });
                        },
                        createRow: (e, t) => {
                            (e.columnFilters = {}), (e.columnFiltersMeta = {});
                        },
                        createTable: (e) => {
                            (e.setColumnFilters = (t) => {
                                let n = e.getAllLeafColumns();
                                null == e.options.onColumnFiltersChange ||
                                    e.options.onColumnFiltersChange((e) => {
                                        var o;
                                        return null == (o = r(t, e))
                                            ? void 0
                                            : o.filter((e) => {
                                                  let t = n.find((t) => t.id === e.id);
                                                  return !(t && R(t.getFilterFn(), e.value, t));
                                              });
                                    });
                            }),
                                (e.resetColumnFilters = (t) => {
                                    var n, r;
                                    e.setColumnFilters(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.columnFilters) ? n : []);
                                }),
                                (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
                                (e.getFilteredRowModel = () =>
                                    (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel)
                                        ? e.getPreFilteredRowModel()
                                        : e._getFilteredRowModel());
                        },
                    },
                    {
                        createTable: (e) => {
                            (e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__")),
                                (e.getGlobalFacetedRowModel = () => (e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel())),
                                (e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__")),
                                (e.getGlobalFacetedUniqueValues = () => (e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : new Map())),
                                (e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__")),
                                (e.getGlobalFacetedMinMaxValues = () => {
                                    if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ globalFilter: void 0, ...e }),
                        getDefaultOptions: (e) => ({
                            onGlobalFilterChange: o("globalFilter", e),
                            globalFilterFn: "auto",
                            getColumnCanGlobalFilter: (t) => {
                                var n;
                                let r = null == (n = e.getCoreRowModel().flatRows[0]) || null == (n = n._getAllCellsByColumnId()[t.id]) ? void 0 : n.getValue();
                                return "string" == typeof r || "number" == typeof r;
                            },
                        }),
                        createColumn: (e, t) => {
                            e.getCanGlobalFilter = () => {
                                var n, r, o, l;
                                return (
                                    (null == (n = e.columnDef.enableGlobalFilter) || n) &&
                                    (null == (r = t.options.enableGlobalFilter) || r) &&
                                    (null == (o = t.options.enableFilters) || o) &&
                                    (null == (l = null == t.options.getColumnCanGlobalFilter ? void 0 : t.options.getColumnCanGlobalFilter(e)) || l) &&
                                    !!e.accessorFn
                                );
                            };
                        },
                        createTable: (e) => {
                            (e.getGlobalAutoFilterFn = () => C.includesString),
                                (e.getGlobalFilterFn = () => {
                                    var t, n;
                                    let { globalFilterFn: r } = e.options;
                                    return l(r) ? r : "auto" === r ? e.getGlobalAutoFilterFn() : null != (t = null == (n = e.options.filterFns) ? void 0 : n[r]) ? t : C[r];
                                }),
                                (e.setGlobalFilter = (t) => {
                                    null == e.options.onGlobalFilterChange || e.options.onGlobalFilterChange(t);
                                }),
                                (e.resetGlobalFilter = (t) => {
                                    e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ sorting: [], ...e }),
                        getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
                        getDefaultOptions: (e) => ({ onSortingChange: o("sorting", e), isMultiSortEvent: (e) => e.shiftKey }),
                        createColumn: (e, t) => {
                            (e.getAutoSortingFn = () => {
                                let n = t.getFilteredRowModel().flatRows.slice(10),
                                    r = !1;
                                for (let t of n) {
                                    let n = null == t ? void 0 : t.getValue(e.id);
                                    if ("[object Date]" === Object.prototype.toString.call(n)) return H.datetime;
                                    if ("string" == typeof n && ((r = !0), n.split(k).length > 1)) return H.alphanumeric;
                                }
                                return r ? H.text : H.basic;
                            }),
                                (e.getAutoSortDir = () => {
                                    let n = t.getFilteredRowModel().flatRows[0];
                                    return "string" == typeof (null == n ? void 0 : n.getValue(e.id)) ? "asc" : "desc";
                                }),
                                (e.getSortingFn = () => {
                                    var n, r;
                                    if (!e) throw Error();
                                    return l(e.columnDef.sortingFn)
                                        ? e.columnDef.sortingFn
                                        : "auto" === e.columnDef.sortingFn
                                        ? e.getAutoSortingFn()
                                        : null != (n = null == (r = t.options.sortingFns) ? void 0 : r[e.columnDef.sortingFn])
                                        ? n
                                        : H[e.columnDef.sortingFn];
                                }),
                                (e.toggleSorting = (n, r) => {
                                    let o = e.getNextSortingOrder(),
                                        l = null != n;
                                    t.setSorting((i) => {
                                        let a;
                                        let u = null == i ? void 0 : i.find((t) => t.id === e.id),
                                            s = null == i ? void 0 : i.findIndex((t) => t.id === e.id),
                                            c = [],
                                            d = l ? n : "desc" === o;
                                        if (
                                            ("toggle" != (a = null != i && i.length && e.getCanMultiSort() && r ? (u ? "toggle" : "add") : null != i && i.length && s !== i.length - 1 ? "replace" : u ? "toggle" : "replace") ||
                                                l ||
                                                o ||
                                                (a = "remove"),
                                            "add" === a)
                                        ) {
                                            var f;
                                            (c = [...i, { id: e.id, desc: d }]).splice(0, c.length - (null != (f = t.options.maxMultiSortColCount) ? f : Number.MAX_SAFE_INTEGER));
                                        } else c = "toggle" === a ? i.map((t) => (t.id === e.id ? { ...t, desc: d } : t)) : "remove" === a ? i.filter((t) => t.id !== e.id) : [{ id: e.id, desc: d }];
                                        return c;
                                    });
                                }),
                                (e.getFirstSortDir = () => {
                                    var n, r;
                                    return (null != (n = null != (r = e.columnDef.sortDescFirst) ? r : t.options.sortDescFirst) ? n : "desc" === e.getAutoSortDir()) ? "desc" : "asc";
                                }),
                                (e.getNextSortingOrder = (n) => {
                                    var r, o;
                                    let l = e.getFirstSortDir(),
                                        i = e.getIsSorted();
                                    return i ? (i === l || (null != (r = t.options.enableSortingRemoval) && !r) || (!!n && null != (o = t.options.enableMultiRemove) && !o)) && ("desc" === i ? "asc" : "desc") : l;
                                }),
                                (e.getCanSort = () => {
                                    var n, r;
                                    return (null == (n = e.columnDef.enableSorting) || n) && (null == (r = t.options.enableSorting) || r) && !!e.accessorFn;
                                }),
                                (e.getCanMultiSort = () => {
                                    var n, r;
                                    return null != (n = null != (r = e.columnDef.enableMultiSort) ? r : t.options.enableMultiSort) ? n : !!e.accessorFn;
                                }),
                                (e.getIsSorted = () => {
                                    var n;
                                    let r = null == (n = t.getState().sorting) ? void 0 : n.find((t) => t.id === e.id);
                                    return !!r && (r.desc ? "desc" : "asc");
                                }),
                                (e.getSortIndex = () => {
                                    var n, r;
                                    return null != (n = null == (r = t.getState().sorting) ? void 0 : r.findIndex((t) => t.id === e.id)) ? n : -1;
                                }),
                                (e.clearSorting = () => {
                                    t.setSorting((t) => (null != t && t.length ? t.filter((t) => t.id !== e.id) : []));
                                }),
                                (e.getToggleSortingHandler = () => {
                                    let n = e.getCanSort();
                                    return (r) => {
                                        n && (null == r.persist || r.persist(), null == e.toggleSorting || e.toggleSorting(void 0, !!e.getCanMultiSort() && (null == t.options.isMultiSortEvent ? void 0 : t.options.isMultiSortEvent(r))));
                                    };
                                });
                        },
                        createTable: (e) => {
                            (e.setSorting = (t) => (null == e.options.onSortingChange ? void 0 : e.options.onSortingChange(t))),
                                (e.resetSorting = (t) => {
                                    var n, r;
                                    e.setSorting(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.sorting) ? n : []);
                                }),
                                (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                                (e.getSortedRowModel = () =>
                                    (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel)
                                        ? e.getPreSortedRowModel()
                                        : e._getSortedRowModel());
                        },
                    },
                    {
                        getDefaultColumnDef: () => ({
                            aggregatedCell: (e) => {
                                var t, n;
                                return null != (t = null == (n = e.getValue()) || null == n.toString ? void 0 : n.toString()) ? t : null;
                            },
                            aggregationFn: "auto",
                        }),
                        getInitialState: (e) => ({ grouping: [], ...e }),
                        getDefaultOptions: (e) => ({ onGroupingChange: o("grouping", e), groupedColumnMode: "reorder" }),
                        createColumn: (e, t) => {
                            (e.toggleGrouping = () => {
                                t.setGrouping((t) => (null != t && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...(null != t ? t : []), e.id]));
                            }),
                                (e.getCanGroup = () => {
                                    var n, r;
                                    return (null == (n = e.columnDef.enableGrouping) || n) && (null == (r = t.options.enableGrouping) || r) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
                                }),
                                (e.getIsGrouped = () => {
                                    var n;
                                    return null == (n = t.getState().grouping) ? void 0 : n.includes(e.id);
                                }),
                                (e.getGroupedIndex = () => {
                                    var n;
                                    return null == (n = t.getState().grouping) ? void 0 : n.indexOf(e.id);
                                }),
                                (e.getToggleGroupingHandler = () => {
                                    let t = e.getCanGroup();
                                    return () => {
                                        t && e.toggleGrouping();
                                    };
                                }),
                                (e.getAutoAggregationFn = () => {
                                    let n = t.getCoreRowModel().flatRows[0],
                                        r = null == n ? void 0 : n.getValue(e.id);
                                    return "number" == typeof r ? S.sum : "[object Date]" === Object.prototype.toString.call(r) ? S.extent : void 0;
                                }),
                                (e.getAggregationFn = () => {
                                    var n, r;
                                    if (!e) throw Error();
                                    return l(e.columnDef.aggregationFn)
                                        ? e.columnDef.aggregationFn
                                        : "auto" === e.columnDef.aggregationFn
                                        ? e.getAutoAggregationFn()
                                        : null != (n = null == (r = t.options.aggregationFns) ? void 0 : r[e.columnDef.aggregationFn])
                                        ? n
                                        : S[e.columnDef.aggregationFn];
                                });
                        },
                        createTable: (e) => {
                            (e.setGrouping = (t) => (null == e.options.onGroupingChange ? void 0 : e.options.onGroupingChange(t))),
                                (e.resetGrouping = (t) => {
                                    var n, r;
                                    e.setGrouping(t ? [] : null != (n = null == (r = e.initialState) ? void 0 : r.grouping) ? n : []);
                                }),
                                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                                (e.getGroupedRowModel = () =>
                                    (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel)
                                        ? e.getPreGroupedRowModel()
                                        : e._getGroupedRowModel());
                        },
                        createRow: (e, t) => {
                            (e.getIsGrouped = () => !!e.groupingColumnId),
                                (e.getGroupingValue = (n) => {
                                    if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
                                    let r = t.getColumn(n);
                                    return null != r && r.columnDef.getGroupingValue ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original)), e._groupingValuesCache[n]) : e.getValue(n);
                                }),
                                (e._groupingValuesCache = {});
                        },
                        createCell: (e, t, n, r) => {
                            (e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
                                (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
                                (e.getIsAggregated = () => {
                                    var t;
                                    return !e.getIsGrouped() && !e.getIsPlaceholder() && !!(null != (t = n.subRows) && t.length);
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ expanded: {}, ...e }),
                        getDefaultOptions: (e) => ({ onExpandedChange: o("expanded", e), paginateExpandedRows: !0 }),
                        createTable: (e) => {
                            let t = !1,
                                n = !1;
                            (e._autoResetExpanded = () => {
                                var r, o;
                                if (!t) {
                                    e._queue(() => {
                                        t = !0;
                                    });
                                    return;
                                }
                                if (null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetExpanded) ? r : !e.options.manualExpanding) {
                                    if (n) return;
                                    (n = !0),
                                        e._queue(() => {
                                            e.resetExpanded(), (n = !1);
                                        });
                                }
                            }),
                                (e.setExpanded = (t) => (null == e.options.onExpandedChange ? void 0 : e.options.onExpandedChange(t))),
                                (e.toggleAllRowsExpanded = (t) => {
                                    (null != t ? t : !e.getIsAllRowsExpanded()) ? e.setExpanded(!0) : e.setExpanded({});
                                }),
                                (e.resetExpanded = (t) => {
                                    var n, r;
                                    e.setExpanded(t ? {} : null != (n = null == (r = e.initialState) ? void 0 : r.expanded) ? n : {});
                                }),
                                (e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand())),
                                (e.getToggleAllRowsExpandedHandler = () => (t) => {
                                    null == t.persist || t.persist(), e.toggleAllRowsExpanded();
                                }),
                                (e.getIsSomeRowsExpanded = () => {
                                    let t = e.getState().expanded;
                                    return !0 === t || Object.values(t).some(Boolean);
                                }),
                                (e.getIsAllRowsExpanded = () => {
                                    let t = e.getState().expanded;
                                    return "boolean" == typeof t ? !0 === t : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
                                }),
                                (e.getExpandedDepth = () => {
                                    let t = 0;
                                    return (
                                        (!0 === e.getState().expanded ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
                                            let n = e.split(".");
                                            t = Math.max(t, n.length);
                                        }),
                                        t
                                    );
                                }),
                                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                                (e.getExpandedRowModel = () =>
                                    (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel)
                                        ? e.getPreExpandedRowModel()
                                        : e._getExpandedRowModel());
                        },
                        createRow: (e, t) => {
                            (e.toggleExpanded = (n) => {
                                t.setExpanded((r) => {
                                    var o;
                                    let l = !0 === r || !!(null != r && r[e.id]),
                                        i = {};
                                    if (
                                        (!0 === r
                                            ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                                                  i[e] = !0;
                                              })
                                            : (i = r),
                                        (n = null != (o = n) ? o : !l),
                                        !l && n)
                                    )
                                        return { ...i, [e.id]: !0 };
                                    if (l && !n) {
                                        let { [e.id]: t, ...n } = i;
                                        return n;
                                    }
                                    return r;
                                });
                            }),
                                (e.getIsExpanded = () => {
                                    var n;
                                    let r = t.getState().expanded;
                                    return !!(null != (n = null == t.options.getIsRowExpanded ? void 0 : t.options.getIsRowExpanded(e)) ? n : !0 === r || (null == r ? void 0 : r[e.id]));
                                }),
                                (e.getCanExpand = () => {
                                    var n, r, o;
                                    return null != (n = null == t.options.getRowCanExpand ? void 0 : t.options.getRowCanExpand(e)) ? n : (null == (r = t.options.enableExpanding) || r) && !!(null != (o = e.subRows) && o.length);
                                }),
                                (e.getIsAllParentsExpanded = () => {
                                    let n = !0,
                                        r = e;
                                    for (; n && r.parentId; ) n = (r = t.getRow(r.parentId, !0)).getIsExpanded();
                                    return n;
                                }),
                                (e.getToggleExpandedHandler = () => {
                                    let t = e.getCanExpand();
                                    return () => {
                                        t && e.toggleExpanded();
                                    };
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ ...e, pagination: { ...T(), ...(null == e ? void 0 : e.pagination) } }),
                        getDefaultOptions: (e) => ({ onPaginationChange: o("pagination", e) }),
                        createTable: (e) => {
                            let t = !1,
                                n = !1;
                            (e._autoResetPageIndex = () => {
                                var r, o;
                                if (!t) {
                                    e._queue(() => {
                                        t = !0;
                                    });
                                    return;
                                }
                                if (null != (r = null != (o = e.options.autoResetAll) ? o : e.options.autoResetPageIndex) ? r : !e.options.manualPagination) {
                                    if (n) return;
                                    (n = !0),
                                        e._queue(() => {
                                            e.resetPageIndex(), (n = !1);
                                        });
                                }
                            }),
                                (e.setPagination = (t) => (null == e.options.onPaginationChange ? void 0 : e.options.onPaginationChange((e) => r(t, e)))),
                                (e.resetPagination = (t) => {
                                    var n;
                                    e.setPagination(t ? T() : null != (n = e.initialState.pagination) ? n : T());
                                }),
                                (e.setPageIndex = (t) => {
                                    e.setPagination((n) => {
                                        let o = r(t, n.pageIndex);
                                        return (o = Math.max(0, Math.min(o, void 0 === e.options.pageCount || -1 === e.options.pageCount ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1))), { ...n, pageIndex: o };
                                    });
                                }),
                                (e.resetPageIndex = (t) => {
                                    var n, r;
                                    e.setPageIndex(t ? 0 : null != (n = null == (r = e.initialState) || null == (r = r.pagination) ? void 0 : r.pageIndex) ? n : 0);
                                }),
                                (e.resetPageSize = (t) => {
                                    var n, r;
                                    e.setPageSize(t ? 10 : null != (n = null == (r = e.initialState) || null == (r = r.pagination) ? void 0 : r.pageSize) ? n : 10);
                                }),
                                (e.setPageSize = (t) => {
                                    e.setPagination((e) => {
                                        let n = Math.max(1, r(t, e.pageSize)),
                                            o = e.pageSize * e.pageIndex;
                                        return { ...e, pageIndex: Math.floor(o / n), pageSize: n };
                                    });
                                }),
                                (e.setPageCount = (t) =>
                                    e.setPagination((n) => {
                                        var o;
                                        let l = r(t, null != (o = e.options.pageCount) ? o : -1);
                                        return "number" == typeof l && (l = Math.max(-1, l)), { ...n, pageCount: l };
                                    })),
                                (e.getPageOptions = i(
                                    () => [e.getPageCount()],
                                    (e) => {
                                        let t = [];
                                        return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
                                    },
                                    a(e.options, "debugTable", "getPageOptions")
                                )),
                                (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
                                (e.getCanNextPage = () => {
                                    let { pageIndex: t } = e.getState().pagination,
                                        n = e.getPageCount();
                                    return -1 === n || (0 !== n && t < n - 1);
                                }),
                                (e.previousPage = () => e.setPageIndex((e) => e - 1)),
                                (e.nextPage = () => e.setPageIndex((e) => e + 1)),
                                (e.firstPage = () => e.setPageIndex(0)),
                                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                                (e.getPaginationRowModel = () =>
                                    (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel)
                                        ? e.getPrePaginationRowModel()
                                        : e._getPaginationRowModel()),
                                (e.getPageCount = () => {
                                    var t;
                                    return null != (t = e.options.pageCount) ? t : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
                                }),
                                (e.getRowCount = () => {
                                    var t;
                                    return null != (t = e.options.rowCount) ? t : e.getPrePaginationRowModel().rows.length;
                                });
                        },
                    },
                    {
                        getInitialState: (e) => ({ rowPinning: L(), ...e }),
                        getDefaultOptions: (e) => ({ onRowPinningChange: o("rowPinning", e) }),
                        createRow: (e, t) => {
                            (e.pin = (n, r, o) => {
                                let l = r
                                        ? e.getLeafRows().map((e) => {
                                              let { id: t } = e;
                                              return t;
                                          })
                                        : [],
                                    i = new Set([
                                        ...(o
                                            ? e.getParentRows().map((e) => {
                                                  let { id: t } = e;
                                                  return t;
                                              })
                                            : []),
                                        e.id,
                                        ...l,
                                    ]);
                                t.setRowPinning((e) => {
                                    var t, r, o, l, a, u;
                                    return "bottom" === n
                                        ? {
                                              top: (null != (o = null == e ? void 0 : e.top) ? o : []).filter((e) => !(null != i && i.has(e))),
                                              bottom: [...(null != (l = null == e ? void 0 : e.bottom) ? l : []).filter((e) => !(null != i && i.has(e))), ...Array.from(i)],
                                          }
                                        : "top" === n
                                        ? {
                                              top: [...(null != (a = null == e ? void 0 : e.top) ? a : []).filter((e) => !(null != i && i.has(e))), ...Array.from(i)],
                                              bottom: (null != (u = null == e ? void 0 : e.bottom) ? u : []).filter((e) => !(null != i && i.has(e))),
                                          }
                                        : {
                                              top: (null != (t = null == e ? void 0 : e.top) ? t : []).filter((e) => !(null != i && i.has(e))),
                                              bottom: (null != (r = null == e ? void 0 : e.bottom) ? r : []).filter((e) => !(null != i && i.has(e))),
                                          };
                                });
                            }),
                                (e.getCanPin = () => {
                                    var n;
                                    let { enableRowPinning: r, enablePinning: o } = t.options;
                                    return "function" == typeof r ? r(e) : null == (n = null != r ? r : o) || n;
                                }),
                                (e.getIsPinned = () => {
                                    let n = [e.id],
                                        { top: r, bottom: o } = t.getState().rowPinning,
                                        l = n.some((e) => (null == r ? void 0 : r.includes(e))),
                                        i = n.some((e) => (null == o ? void 0 : o.includes(e)));
                                    return l ? "top" : !!i && "bottom";
                                }),
                                (e.getPinnedIndex = () => {
                                    var n, r;
                                    let o = e.getIsPinned();
                                    if (!o) return -1;
                                    let l =
                                        null == (n = "top" === o ? t.getTopRows() : t.getBottomRows())
                                            ? void 0
                                            : n.map((e) => {
                                                  let { id: t } = e;
                                                  return t;
                                              });
                                    return null != (r = null == l ? void 0 : l.indexOf(e.id)) ? r : -1;
                                });
                        },
                        createTable: (e) => {
                            (e.setRowPinning = (t) => (null == e.options.onRowPinningChange ? void 0 : e.options.onRowPinningChange(t))),
                                (e.resetRowPinning = (t) => {
                                    var n, r;
                                    return e.setRowPinning(t ? L() : null != (n = null == (r = e.initialState) ? void 0 : r.rowPinning) ? n : L());
                                }),
                                (e.getIsSomeRowsPinned = (t) => {
                                    var n, r, o;
                                    let l = e.getState().rowPinning;
                                    return t ? !!(null == (n = l[t]) ? void 0 : n.length) : !!((null == (r = l.top) ? void 0 : r.length) || (null == (o = l.bottom) ? void 0 : o.length));
                                }),
                                (e._getPinnedRows = (t, n, r) => {
                                    var o;
                                    return (null == (o = e.options.keepPinnedRows) || o
                                        ? (null != n ? n : []).map((t) => {
                                              let n = e.getRow(t, !0);
                                              return n.getIsAllParentsExpanded() ? n : null;
                                          })
                                        : (null != n ? n : []).map((e) => t.find((t) => t.id === e))
                                    )
                                        .filter(Boolean)
                                        .map((e) => ({ ...e, position: r }));
                                }),
                                (e.getTopRows = i(
                                    () => [e.getRowModel().rows, e.getState().rowPinning.top],
                                    (t, n) => e._getPinnedRows(t, n, "top"),
                                    a(e.options, "debugRows", "getTopRows")
                                )),
                                (e.getBottomRows = i(
                                    () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                                    (t, n) => e._getPinnedRows(t, n, "bottom"),
                                    a(e.options, "debugRows", "getBottomRows")
                                )),
                                (e.getCenterRows = i(
                                    () => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom],
                                    (e, t, n) => {
                                        let r = new Set([...(null != t ? t : []), ...(null != n ? n : [])]);
                                        return e.filter((e) => !r.has(e.id));
                                    },
                                    a(e.options, "debugRows", "getCenterRows")
                                ));
                        },
                    },
                    {
                        getInitialState: (e) => ({ rowSelection: {}, ...e }),
                        getDefaultOptions: (e) => ({ onRowSelectionChange: o("rowSelection", e), enableRowSelection: !0, enableMultiRowSelection: !0, enableSubRowSelection: !0 }),
                        createTable: (e) => {
                            (e.setRowSelection = (t) => (null == e.options.onRowSelectionChange ? void 0 : e.options.onRowSelectionChange(t))),
                                (e.resetRowSelection = (t) => {
                                    var n;
                                    return e.setRowSelection(t ? {} : null != (n = e.initialState.rowSelection) ? n : {});
                                }),
                                (e.toggleAllRowsSelected = (t) => {
                                    e.setRowSelection((n) => {
                                        t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                                        let r = { ...n },
                                            o = e.getPreGroupedRowModel().flatRows;
                                        return (
                                            t
                                                ? o.forEach((e) => {
                                                      e.getCanSelect() && (r[e.id] = !0);
                                                  })
                                                : o.forEach((e) => {
                                                      delete r[e.id];
                                                  }),
                                            r
                                        );
                                    });
                                }),
                                (e.toggleAllPageRowsSelected = (t) =>
                                    e.setRowSelection((n) => {
                                        let r = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                                            o = { ...n };
                                        return (
                                            e.getRowModel().rows.forEach((t) => {
                                                A(o, t.id, r, !0, e);
                                            }),
                                            o
                                        );
                                    })),
                                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                                (e.getSelectedRowModel = i(
                                    () => [e.getState().rowSelection, e.getCoreRowModel()],
                                    (t, n) => (Object.keys(t).length ? O(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                                    a(e.options, "debugTable", "getSelectedRowModel")
                                )),
                                (e.getFilteredSelectedRowModel = i(
                                    () => [e.getState().rowSelection, e.getFilteredRowModel()],
                                    (t, n) => (Object.keys(t).length ? O(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                                    a(e.options, "debugTable", "getFilteredSelectedRowModel")
                                )),
                                (e.getGroupedSelectedRowModel = i(
                                    () => [e.getState().rowSelection, e.getSortedRowModel()],
                                    (t, n) => (Object.keys(t).length ? O(e, n) : { rows: [], flatRows: [], rowsById: {} }),
                                    a(e.options, "debugTable", "getGroupedSelectedRowModel")
                                )),
                                (e.getIsAllRowsSelected = () => {
                                    let t = e.getFilteredRowModel().flatRows,
                                        { rowSelection: n } = e.getState(),
                                        r = !!(t.length && Object.keys(n).length);
                                    return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
                                }),
                                (e.getIsAllPageRowsSelected = () => {
                                    let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()),
                                        { rowSelection: n } = e.getState(),
                                        r = !!t.length;
                                    return r && t.some((e) => !n[e.id]) && (r = !1), r;
                                }),
                                (e.getIsSomeRowsSelected = () => {
                                    var t;
                                    let n = Object.keys(null != (t = e.getState().rowSelection) ? t : {}).length;
                                    return n > 0 && n < e.getFilteredRowModel().flatRows.length;
                                }),
                                (e.getIsSomePageRowsSelected = () => {
                                    let t = e.getPaginationRowModel().flatRows;
                                    return !e.getIsAllPageRowsSelected() && t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
                                }),
                                (e.getToggleAllRowsSelectedHandler = () => (t) => {
                                    e.toggleAllRowsSelected(t.target.checked);
                                }),
                                (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                                    e.toggleAllPageRowsSelected(t.target.checked);
                                });
                        },
                        createRow: (e, t) => {
                            (e.toggleSelected = (n, r) => {
                                let o = e.getIsSelected();
                                t.setRowSelection((l) => {
                                    var i;
                                    if (((n = void 0 !== n ? n : !o), e.getCanSelect() && o === n)) return l;
                                    let a = { ...l };
                                    return A(a, e.id, n, null == (i = null == r ? void 0 : r.selectChildren) || i, t), a;
                                });
                            }),
                                (e.getIsSelected = () => {
                                    let { rowSelection: n } = t.getState();
                                    return D(e, n);
                                }),
                                (e.getIsSomeSelected = () => {
                                    let { rowSelection: n } = t.getState();
                                    return "some" === j(e, n);
                                }),
                                (e.getIsAllSubRowsSelected = () => {
                                    let { rowSelection: n } = t.getState();
                                    return "all" === j(e, n);
                                }),
                                (e.getCanSelect = () => {
                                    var n;
                                    return "function" == typeof t.options.enableRowSelection ? t.options.enableRowSelection(e) : null == (n = t.options.enableRowSelection) || n;
                                }),
                                (e.getCanSelectSubRows = () => {
                                    var n;
                                    return "function" == typeof t.options.enableSubRowSelection ? t.options.enableSubRowSelection(e) : null == (n = t.options.enableSubRowSelection) || n;
                                }),
                                (e.getCanMultiSelect = () => {
                                    var n;
                                    return "function" == typeof t.options.enableMultiRowSelection ? t.options.enableMultiRowSelection(e) : null == (n = t.options.enableMultiRowSelection) || n;
                                }),
                                (e.getToggleSelectedHandler = () => {
                                    let t = e.getCanSelect();
                                    return (n) => {
                                        var r;
                                        t && e.toggleSelected(null == (r = n.target) ? void 0 : r.checked);
                                    };
                                });
                        },
                    },
                    {
                        getDefaultColumnDef: () => M,
                        getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: P(), ...e }),
                        getDefaultOptions: (e) => ({ columnResizeMode: "onEnd", columnResizeDirection: "ltr", onColumnSizingChange: o("columnSizing", e), onColumnSizingInfoChange: o("columnSizingInfo", e) }),
                        createColumn: (e, t) => {
                            (e.getSize = () => {
                                var n, r, o;
                                let l = t.getState().columnSizing[e.id];
                                return Math.min(Math.max(null != (n = e.columnDef.minSize) ? n : M.minSize, null != (r = null != l ? l : e.columnDef.size) ? r : M.size), null != (o = e.columnDef.maxSize) ? o : M.maxSize);
                            }),
                                (e.getStart = i(
                                    (e) => [e, I(t, e), t.getState().columnSizing],
                                    (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
                                    a(t.options, "debugColumns", "getStart")
                                )),
                                (e.getAfter = i(
                                    (e) => [e, I(t, e), t.getState().columnSizing],
                                    (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
                                    a(t.options, "debugColumns", "getAfter")
                                )),
                                (e.resetSize = () => {
                                    t.setColumnSizing((t) => {
                                        let { [e.id]: n, ...r } = t;
                                        return r;
                                    });
                                }),
                                (e.getCanResize = () => {
                                    var n, r;
                                    return (null == (n = e.columnDef.enableResizing) || n) && (null == (r = t.options.enableColumnResizing) || r);
                                }),
                                (e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id);
                        },
                        createHeader: (e, t) => {
                            (e.getSize = () => {
                                let t = 0,
                                    n = (e) => {
                                        if (e.subHeaders.length) e.subHeaders.forEach(n);
                                        else {
                                            var r;
                                            t += null != (r = e.column.getSize()) ? r : 0;
                                        }
                                    };
                                return n(e), t;
                            }),
                                (e.getStart = () => {
                                    if (e.index > 0) {
                                        let t = e.headerGroup.headers[e.index - 1];
                                        return t.getStart() + t.getSize();
                                    }
                                    return 0;
                                }),
                                (e.getResizeHandler = (n) => {
                                    let r = t.getColumn(e.column.id),
                                        o = null == r ? void 0 : r.getCanResize();
                                    return (l) => {
                                        if (!r || !o || (null == l.persist || l.persist(), _(l) && l.touches && l.touches.length > 1)) return;
                                        let i = e.getSize(),
                                            a = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]],
                                            u = _(l) ? Math.round(l.touches[0].clientX) : l.clientX,
                                            s = {},
                                            c = (e, n) => {
                                                "number" == typeof n &&
                                                    (t.setColumnSizingInfo((e) => {
                                                        var r, o;
                                                        let l = "rtl" === t.options.columnResizeDirection ? -1 : 1,
                                                            i = (n - (null != (r = null == e ? void 0 : e.startOffset) ? r : 0)) * l,
                                                            a = Math.max(i / (null != (o = null == e ? void 0 : e.startSize) ? o : 0), -0.999999);
                                                        return (
                                                            e.columnSizingStart.forEach((e) => {
                                                                let [t, n] = e;
                                                                s[t] = Math.round(100 * Math.max(n + n * a, 0)) / 100;
                                                            }),
                                                            { ...e, deltaOffset: i, deltaPercentage: a }
                                                        );
                                                    }),
                                                    ("onChange" === t.options.columnResizeMode || "end" === e) && t.setColumnSizing((e) => ({ ...e, ...s })));
                                            },
                                            d = (e) => c("move", e),
                                            f = (e) => {
                                                c("end", e), t.setColumnSizingInfo((e) => ({ ...e, isResizingColumn: !1, startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, columnSizingStart: [] }));
                                            },
                                            g = n || "undefined" != typeof document ? document : null,
                                            p = {
                                                moveHandler: (e) => d(e.clientX),
                                                upHandler: (e) => {
                                                    null == g || g.removeEventListener("mousemove", p.moveHandler), null == g || g.removeEventListener("mouseup", p.upHandler), f(e.clientX);
                                                },
                                            },
                                            v = {
                                                moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
                                                upHandler: (e) => {
                                                    var t;
                                                    null == g || g.removeEventListener("touchmove", v.moveHandler),
                                                        null == g || g.removeEventListener("touchend", v.upHandler),
                                                        e.cancelable && (e.preventDefault(), e.stopPropagation()),
                                                        f(null == (t = e.touches[0]) ? void 0 : t.clientX);
                                                },
                                            },
                                            m = !!(function () {
                                                if ("boolean" == typeof F) return F;
                                                let e = !1;
                                                try {
                                                    let t = () => {};
                                                    window.addEventListener("test", t, {
                                                        get passive() {
                                                            return (e = !0), !1;
                                                        },
                                                    }),
                                                        window.removeEventListener("test", t);
                                                } catch (t) {
                                                    e = !1;
                                                }
                                                return (F = e);
                                            })() && { passive: !1 };
                                        _(l)
                                            ? (null == g || g.addEventListener("touchmove", v.moveHandler, m), null == g || g.addEventListener("touchend", v.upHandler, m))
                                            : (null == g || g.addEventListener("mousemove", p.moveHandler, m), null == g || g.addEventListener("mouseup", p.upHandler, m)),
                                            t.setColumnSizingInfo((e) => ({ ...e, startOffset: u, startSize: i, deltaOffset: 0, deltaPercentage: 0, columnSizingStart: a, isResizingColumn: r.id }));
                                    };
                                });
                        },
                        createTable: (e) => {
                            (e.setColumnSizing = (t) => (null == e.options.onColumnSizingChange ? void 0 : e.options.onColumnSizingChange(t))),
                                (e.setColumnSizingInfo = (t) => (null == e.options.onColumnSizingInfoChange ? void 0 : e.options.onColumnSizingInfoChange(t))),
                                (e.resetColumnSizing = (t) => {
                                    var n;
                                    e.setColumnSizing(t ? {} : null != (n = e.initialState.columnSizing) ? n : {});
                                }),
                                (e.resetHeaderSizeInfo = (t) => {
                                    var n;
                                    e.setColumnSizingInfo(t ? P() : null != (n = e.initialState.columnSizingInfo) ? n : P());
                                }),
                                (e.getTotalSize = () => {
                                    var t, n;
                                    return null != (t = null == (n = e.getHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0;
                                }),
                                (e.getLeftTotalSize = () => {
                                    var t, n;
                                    return null != (t = null == (n = e.getLeftHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0;
                                }),
                                (e.getCenterTotalSize = () => {
                                    var t, n;
                                    return null != (t = null == (n = e.getCenterHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0;
                                }),
                                (e.getRightTotalSize = () => {
                                    var t, n;
                                    return null != (t = null == (n = e.getRightHeaderGroups()[0]) ? void 0 : n.headers.reduce((e, t) => e + t.getSize(), 0)) ? t : 0;
                                });
                        },
                    },
                ];
            function W(e) {
                var t, n;
                let o = [...G, ...(null != (t = e._features) ? t : [])],
                    l = { _features: o },
                    u = l._features.reduce((e, t) => Object.assign(e, null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(l)), {}),
                    s = (e) => (l.options.mergeOptions ? l.options.mergeOptions(u, e) : { ...u, ...e }),
                    c = { ...(null != (n = e.initialState) ? n : {}) };
                l._features.forEach((e) => {
                    var t;
                    c = null != (t = null == e.getInitialState ? void 0 : e.getInitialState(c)) ? t : c;
                });
                let d = [],
                    f = !1,
                    g = {
                        _features: o,
                        options: { ...u, ...e },
                        initialState: c,
                        _queue: (e) => {
                            d.push(e),
                                f ||
                                    ((f = !0),
                                    Promise.resolve()
                                        .then(() => {
                                            for (; d.length; ) d.shift()();
                                            f = !1;
                                        })
                                        .catch((e) =>
                                            setTimeout(() => {
                                                throw e;
                                            })
                                        ));
                        },
                        reset: () => {
                            l.setState(l.initialState);
                        },
                        setOptions: (e) => {
                            let t = r(e, l.options);
                            l.options = s(t);
                        },
                        getState: () => l.options.state,
                        setState: (e) => {
                            null == l.options.onStateChange || l.options.onStateChange(e);
                        },
                        _getRowId: (e, t, n) => {
                            var r;
                            return null != (r = null == l.options.getRowId ? void 0 : l.options.getRowId(e, t, n)) ? r : `${n ? [n.id, t].join(".") : t}`;
                        },
                        getCoreRowModel: () => (l._getCoreRowModel || (l._getCoreRowModel = l.options.getCoreRowModel(l)), l._getCoreRowModel()),
                        getRowModel: () => l.getPaginationRowModel(),
                        getRow: (e, t) => {
                            let n = (t ? l.getPrePaginationRowModel() : l.getRowModel()).rowsById[e];
                            if (!n && !(n = l.getCoreRowModel().rowsById[e])) throw Error();
                            return n;
                        },
                        _getDefaultColumnDef: i(
                            () => [l.options.defaultColumn],
                            (e) => {
                                var t;
                                return (
                                    (e = null != (t = e) ? t : {}),
                                    {
                                        header: (e) => {
                                            let t = e.header.column.columnDef;
                                            return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
                                        },
                                        cell: (e) => {
                                            var t, n;
                                            return null != (t = null == (n = e.renderValue()) || null == n.toString ? void 0 : n.toString()) ? t : null;
                                        },
                                        ...l._features.reduce((e, t) => Object.assign(e, null == t.getDefaultColumnDef ? void 0 : t.getDefaultColumnDef()), {}),
                                        ...e,
                                    }
                                );
                            },
                            a(e, "debugColumns", "_getDefaultColumnDef")
                        ),
                        _getColumnDefs: () => l.options.columns,
                        getAllColumns: i(
                            () => [l._getColumnDefs()],
                            (e) => {
                                let t = function (e, n, r) {
                                    return (
                                        void 0 === r && (r = 0),
                                        e.map((e) => {
                                            let o = (function (e, t, n, r) {
                                                var o, l;
                                                let u;
                                                let s = { ...e._getDefaultColumnDef(), ...t },
                                                    c = s.accessorKey,
                                                    d =
                                                        null != (o = null != (l = s.id) ? l : c ? ("function" == typeof String.prototype.replaceAll ? c.replaceAll(".", "_") : c.replace(/\./g, "_")) : void 0)
                                                            ? o
                                                            : "string" == typeof s.header
                                                            ? s.header
                                                            : void 0;
                                                if (
                                                    (s.accessorFn
                                                        ? (u = s.accessorFn)
                                                        : c &&
                                                          (u = c.includes(".")
                                                              ? (e) => {
                                                                    let t = e;
                                                                    for (let e of c.split(".")) {
                                                                        var n;
                                                                        t = null == (n = t) ? void 0 : n[e];
                                                                    }
                                                                    return t;
                                                                }
                                                              : (e) => e[s.accessorKey]),
                                                    !d)
                                                )
                                                    throw Error();
                                                let f = {
                                                    id: `${String(d)}`,
                                                    accessorFn: u,
                                                    parent: r,
                                                    depth: n,
                                                    columnDef: s,
                                                    columns: [],
                                                    getFlatColumns: i(
                                                        () => [!0],
                                                        () => {
                                                            var e;
                                                            return [f, ...(null == (e = f.columns) ? void 0 : e.flatMap((e) => e.getFlatColumns()))];
                                                        },
                                                        a(e.options, "debugColumns", "column.getFlatColumns")
                                                    ),
                                                    getLeafColumns: i(
                                                        () => [e._getOrderColumnsFn()],
                                                        (e) => {
                                                            var t;
                                                            return null != (t = f.columns) && t.length ? e(f.columns.flatMap((e) => e.getLeafColumns())) : [f];
                                                        },
                                                        a(e.options, "debugColumns", "column.getLeafColumns")
                                                    ),
                                                };
                                                for (let t of e._features) null == t.createColumn || t.createColumn(f, e);
                                                return f;
                                            })(l, e, r, n);
                                            return (o.columns = e.columns ? t(e.columns, o, r + 1) : []), o;
                                        })
                                    );
                                };
                                return t(e);
                            },
                            a(e, "debugColumns", "getAllColumns")
                        ),
                        getAllFlatColumns: i(
                            () => [l.getAllColumns()],
                            (e) => e.flatMap((e) => e.getFlatColumns()),
                            a(e, "debugColumns", "getAllFlatColumns")
                        ),
                        _getAllFlatColumnsById: i(
                            () => [l.getAllFlatColumns()],
                            (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
                            a(e, "debugColumns", "getAllFlatColumnsById")
                        ),
                        getAllLeafColumns: i(
                            () => [l.getAllColumns(), l._getOrderColumnsFn()],
                            (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
                            a(e, "debugColumns", "getAllLeafColumns")
                        ),
                        getColumn: (e) => l._getAllFlatColumnsById()[e],
                    };
                Object.assign(l, g);
                for (let e = 0; e < l._features.length; e++) {
                    let t = l._features[e];
                    null == t || null == t.createTable || t.createTable(l);
                }
                return l;
            }
            function $() {
                return (e) =>
                    i(
                        () => [e.options.data],
                        (t) => {
                            let n = { rows: [], flatRows: [], rowsById: {} },
                                r = function (t, o, l) {
                                    void 0 === o && (o = 0);
                                    let i = [];
                                    for (let u = 0; u < t.length; u++) {
                                        let s = d(e, e._getRowId(t[u], u, l), t[u], u, o, void 0, null == l ? void 0 : l.id);
                                        if ((n.flatRows.push(s), (n.rowsById[s.id] = s), i.push(s), e.options.getSubRows)) {
                                            var a;
                                            (s.originalSubRows = e.options.getSubRows(t[u], u)), null != (a = s.originalSubRows) && a.length && (s.subRows = r(s.originalSubRows, o + 1, s));
                                        }
                                    }
                                    return i;
                                };
                            return (n.rows = r(t)), n;
                        },
                        a(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex())
                    );
            }
            function B(e, t, n) {
                return n.options.filterFromLeafRows
                    ? (function (e, t, n) {
                          var r;
                          let o = [],
                              l = {},
                              i = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                              a = function (e, r) {
                                  void 0 === r && (r = 0);
                                  let u = [];
                                  for (let c = 0; c < e.length; c++) {
                                      var s;
                                      let f = e[c],
                                          g = d(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
                                      if (((g.columnFilters = f.columnFilters), null != (s = f.subRows) && s.length && r < i)) {
                                          if (((g.subRows = a(f.subRows, r + 1)), (t((f = g)) && !g.subRows.length) || t(f) || g.subRows.length)) {
                                              u.push(f), (l[f.id] = f), o.push(f);
                                              continue;
                                          }
                                      } else t((f = g)) && (u.push(f), (l[f.id] = f), o.push(f));
                                  }
                                  return u;
                              };
                          return { rows: a(e), flatRows: o, rowsById: l };
                      })(e, t, n)
                    : (function (e, t, n) {
                          var r;
                          let o = [],
                              l = {},
                              i = null != (r = n.options.maxLeafRowFilterDepth) ? r : 100,
                              a = function (e, r) {
                                  void 0 === r && (r = 0);
                                  let u = [];
                                  for (let c = 0; c < e.length; c++) {
                                      let f = e[c];
                                      if (t(f)) {
                                          var s;
                                          if (null != (s = f.subRows) && s.length && r < i) {
                                              let e = d(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
                                              (e.subRows = a(f.subRows, r + 1)), (f = e);
                                          }
                                          u.push(f), o.push(f), (l[f.id] = f);
                                      }
                                  }
                                  return u;
                              };
                          return { rows: a(e), flatRows: o, rowsById: l };
                      })(e, t, n);
            }
            function U() {
                return (e, t) =>
                    i(
                        () => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter, e.getFilteredRowModel()],
                        (n, r, o) => {
                            if (!n.rows.length || (!(null != r && r.length) && !o)) return n;
                            let l = [...r.map((e) => e.id).filter((e) => e !== t), o ? "__global__" : void 0].filter(Boolean);
                            return B(
                                n.rows,
                                (e) => {
                                    for (let t = 0; t < l.length; t++) if (!1 === e.columnFilters[l[t]]) return !1;
                                    return !0;
                                },
                                e
                            );
                        },
                        a(e.options, "debugTable", "getFacetedRowModel")
                    );
            }
            function K() {
                return (e, t) =>
                    i(
                        () => {
                            var n;
                            return [null == (n = e.getColumn(t)) ? void 0 : n.getFacetedRowModel()];
                        },
                        (e) => {
                            if (!e) return new Map();
                            let n = new Map();
                            for (let o = 0; o < e.flatRows.length; o++) {
                                let l = e.flatRows[o].getUniqueValues(t);
                                for (let e = 0; e < l.length; e++) {
                                    let t = l[e];
                                    if (n.has(t)) {
                                        var r;
                                        n.set(t, (null != (r = n.get(t)) ? r : 0) + 1);
                                    } else n.set(t, 1);
                                }
                            }
                            return n;
                        },
                        a(e.options, "debugTable", `getFacetedUniqueValues_${t}`)
                    );
            }
            function q() {
                return (e) =>
                    i(
                        () => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter],
                        (t, n, r) => {
                            let o, l;
                            if (!t.rows.length || (!(null != n && n.length) && !r)) {
                                for (let e = 0; e < t.flatRows.length; e++) (t.flatRows[e].columnFilters = {}), (t.flatRows[e].columnFiltersMeta = {});
                                return t;
                            }
                            let i = [],
                                a = [];
                            (null != n ? n : []).forEach((t) => {
                                var n;
                                let r = e.getColumn(t.id);
                                if (!r) return;
                                let o = r.getFilterFn();
                                o && i.push({ id: t.id, filterFn: o, resolvedValue: null != (n = null == o.resolveFilterValue ? void 0 : o.resolveFilterValue(t.value)) ? n : t.value });
                            });
                            let u = (null != n ? n : []).map((e) => e.id),
                                s = e.getGlobalFilterFn(),
                                c = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
                            r &&
                                s &&
                                c.length &&
                                (u.push("__global__"),
                                c.forEach((e) => {
                                    var t;
                                    a.push({ id: e.id, filterFn: s, resolvedValue: null != (t = null == s.resolveFilterValue ? void 0 : s.resolveFilterValue(r)) ? t : r });
                                }));
                            for (let e = 0; e < t.flatRows.length; e++) {
                                let n = t.flatRows[e];
                                if (((n.columnFilters = {}), i.length))
                                    for (let e = 0; e < i.length; e++) {
                                        let t = (o = i[e]).id;
                                        n.columnFilters[t] = o.filterFn(n, t, o.resolvedValue, (e) => {
                                            n.columnFiltersMeta[t] = e;
                                        });
                                    }
                                if (a.length) {
                                    for (let e = 0; e < a.length; e++) {
                                        let t = (l = a[e]).id;
                                        if (
                                            l.filterFn(n, t, l.resolvedValue, (e) => {
                                                n.columnFiltersMeta[t] = e;
                                            })
                                        ) {
                                            n.columnFilters.__global__ = !0;
                                            break;
                                        }
                                    }
                                    !0 !== n.columnFilters.__global__ && (n.columnFilters.__global__ = !1);
                                }
                            }
                            return B(
                                t.rows,
                                (e) => {
                                    for (let t = 0; t < u.length; t++) if (!1 === e.columnFilters[u[t]]) return !1;
                                    return !0;
                                },
                                e
                            );
                        },
                        a(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex())
                    );
            }
            function X(e) {
                return (e) =>
                    i(
                        () => [e.getState().pagination, e.getPrePaginationRowModel(), e.options.paginateExpandedRows ? void 0 : e.getState().expanded],
                        (t, n) => {
                            let r;
                            if (!n.rows.length) return n;
                            let { pageSize: o, pageIndex: l } = t,
                                { rows: i, flatRows: a, rowsById: u } = n,
                                s = o * l;
                            (i = i.slice(s, s + o)),
                                ((r = e.options.paginateExpandedRows
                                    ? { rows: i, flatRows: a, rowsById: u }
                                    : (function (e) {
                                          let t = [],
                                              n = (e) => {
                                                  var r;
                                                  t.push(e), null != (r = e.subRows) && r.length && e.getIsExpanded() && e.subRows.forEach(n);
                                              };
                                          return e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById };
                                      })({ rows: i, flatRows: a, rowsById: u })).flatRows = []);
                            let c = (e) => {
                                r.flatRows.push(e), e.subRows.length && e.subRows.forEach(c);
                            };
                            return r.rows.forEach(c), r;
                        },
                        a(e.options, "debugTable", "getPaginationRowModel")
                    );
            }
            function Y() {
                return (e) =>
                    i(
                        () => [e.getState().sorting, e.getPreSortedRowModel()],
                        (t, n) => {
                            if (!n.rows.length || !(null != t && t.length)) return n;
                            let r = e.getState().sorting,
                                o = [],
                                l = r.filter((t) => {
                                    var n;
                                    return null == (n = e.getColumn(t.id)) ? void 0 : n.getCanSort();
                                }),
                                i = {};
                            l.forEach((t) => {
                                let n = e.getColumn(t.id);
                                n && (i[t.id] = { sortUndefined: n.columnDef.sortUndefined, invertSorting: n.columnDef.invertSorting, sortingFn: n.getSortingFn() });
                            });
                            let a = (e) => {
                                let t = e.map((e) => ({ ...e }));
                                return (
                                    t.sort((e, t) => {
                                        for (let r = 0; r < l.length; r += 1) {
                                            var n;
                                            let o = l[r],
                                                a = i[o.id],
                                                u = a.sortUndefined,
                                                s = null != (n = null == o ? void 0 : o.desc) && n,
                                                c = 0;
                                            if (u) {
                                                let n = e.getValue(o.id),
                                                    r = t.getValue(o.id),
                                                    l = void 0 === n,
                                                    i = void 0 === r;
                                                if (l || i) {
                                                    if ("first" === u) return l ? -1 : 1;
                                                    if ("last" === u) return l ? 1 : -1;
                                                    c = l && i ? 0 : l ? u : -u;
                                                }
                                            }
                                            if ((0 === c && (c = a.sortingFn(e, t, o.id)), 0 !== c)) return s && (c *= -1), a.invertSorting && (c *= -1), c;
                                        }
                                        return e.index - t.index;
                                    }),
                                    t.forEach((e) => {
                                        var t;
                                        o.push(e), null != (t = e.subRows) && t.length && (e.subRows = a(e.subRows));
                                    }),
                                    t
                                );
                            };
                            return { rows: a(n.rows), flatRows: o, rowsById: n.rowsById };
                        },
                        a(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex())
                    );
            }
        },
        9289: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return i;
                },
            });
            var r = n(4909);
            let o = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
                l = r.Z,
                i = (e, t) => (n) => {
                    var r;
                    if ((null == t ? void 0 : t.variants) == null) return l(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let { variants: i, defaultVariants: a } = t,
                        u = Object.keys(i).map((e) => {
                            let t = null == n ? void 0 : n[e],
                                r = null == a ? void 0 : a[e];
                            if (null === t) return null;
                            let l = o(t) || o(r);
                            return i[e][l];
                        }),
                        s =
                            n &&
                            Object.entries(n).reduce((e, t) => {
                                let [n, r] = t;
                                return void 0 === r || (e[n] = r), e;
                            }, {});
                    return l(
                        e,
                        u,
                        null == t
                            ? void 0
                            : null === (r = t.compoundVariants) || void 0 === r
                            ? void 0
                            : r.reduce((e, t) => {
                                  let { class: n, className: r, ...o } = t;
                                  return Object.entries(o).every((e) => {
                                      let [t, n] = e;
                                      return Array.isArray(n) ? n.includes({ ...a, ...s }[t]) : { ...a, ...s }[t] === n;
                                  })
                                      ? [...e, n, r]
                                      : e;
                              }, []),
                        null == n ? void 0 : n.class,
                        null == n ? void 0 : n.className
                    );
                };
        },
        7618: function (e, t, n) {
            "use strict";
            let r, o;
            n.d(t, {
                mY: function () {
                    return e7;
                },
            });
            var l = /[\\\/_+.#"@\[\(\{&]/,
                i = /[\\\/_+.#"@\[\(\{&]/g,
                a = /[\s-]/,
                u = /[\s-]/g;
            function s(e) {
                return e.toLowerCase().replace(u, " ");
            }
            function c() {
                return (c = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
                          }
                          return e;
                      }).apply(null, arguments);
            }
            var d = n(7653),
                f = n.t(d, 2);
            function g(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((null == e || e(r), !1 === n || !r.defaultPrevented)) return null == t ? void 0 : t(r);
                };
            }
            function p(...e) {
                return (t) =>
                    e.forEach((e) => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t);
                    });
            }
            function v(...e) {
                return (0, d.useCallback)(p(...e), e);
            }
            let m = (null == globalThis ? void 0 : globalThis.document) ? d.useLayoutEffect : () => {},
                h = f["useId".toString()] || (() => void 0),
                w = 0;
            function b(e) {
                let [t, n] = d.useState(h());
                return (
                    m(() => {
                        e || n((e) => (null != e ? e : String(w++)));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
            function y(e) {
                let t = (0, d.useRef)(e);
                return (
                    (0, d.useEffect)(() => {
                        t.current = e;
                    }),
                    (0, d.useMemo)(
                        () => (...e) => {
                            var n;
                            return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e);
                        },
                        []
                    )
                );
            }
            var C = n(3458);
            let x = (0, d.forwardRef)((e, t) => {
                let { children: n, ...r } = e,
                    o = d.Children.toArray(n),
                    l = o.find(E);
                if (l) {
                    let e = l.props.children,
                        n = o.map((t) => (t !== l ? t : d.Children.count(e) > 1 ? d.Children.only(null) : (0, d.isValidElement)(e) ? e.props.children : null));
                    return (0, d.createElement)(R, c({}, r, { ref: t }), (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, n) : null);
                }
                return (0, d.createElement)(R, c({}, r, { ref: t }), n);
            });
            x.displayName = "Slot";
            let R = (0, d.forwardRef)((e, t) => {
                let { children: n, ...r } = e;
                return (0, d.isValidElement)(n)
                    ? (0, d.cloneElement)(n, {
                          ...(function (e, t) {
                              let n = { ...t };
                              for (let r in t) {
                                  let o = e[r],
                                      l = t[r];
                                  /^on[A-Z]/.test(r)
                                      ? (n[r] = (...e) => {
                                            null == l || l(...e), null == o || o(...e);
                                        })
                                      : "style" === r
                                      ? (n[r] = { ...o, ...l })
                                      : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "));
                              }
                              return { ...e, ...n };
                          })(r, n.props),
                          ref: p(t, n.ref),
                      })
                    : d.Children.count(n) > 1
                    ? d.Children.only(null)
                    : null;
            });
            R.displayName = "SlotClone";
            let S = ({ children: e }) => (0, d.createElement)(d.Fragment, null, e);
            function E(e) {
                return (0, d.isValidElement)(e) && e.type === S;
            }
            let M = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, d.forwardRef)((e, n) => {
                        let { asChild: r, ...o } = e,
                            l = r ? x : t;
                        return (
                            (0, d.useEffect)(() => {
                                window[Symbol.for("radix-ui")] = !0;
                            }, []),
                            (0, d.createElement)(l, c({}, o, { ref: n }))
                        );
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {}),
                P = "dismissableLayer.update",
                F = (0, d.createContext)({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                _ = (0, d.forwardRef)((e, t) => {
                    let { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: o, onPointerDownOutside: l, onFocusOutside: i, onInteractOutside: a, onDismiss: u, ...s } = e,
                        f = (0, d.useContext)(F),
                        [p, m] = (0, d.useState)(null),
                        [, h] = (0, d.useState)({}),
                        w = v(t, (e) => m(e)),
                        b = Array.from(f.layers),
                        [C] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
                        x = b.indexOf(C),
                        R = p ? b.indexOf(p) : -1,
                        S = f.layersWithOutsidePointerEventsDisabled.size > 0,
                        E = R >= x,
                        _ = (function (e) {
                            let t = y(e),
                                n = (0, d.useRef)(!1),
                                r = (0, d.useRef)(() => {});
                            return (
                                (0, d.useEffect)(() => {
                                    let e = (e) => {
                                            if (e.target && !n.current) {
                                                let n = { originalEvent: e };
                                                function o() {
                                                    T("dismissableLayer.pointerDownOutside", t, n, { discrete: !0 });
                                                }
                                                "touch" === e.pointerType ? (document.removeEventListener("click", r.current), (r.current = o), document.addEventListener("click", r.current, { once: !0 })) : o();
                                            }
                                            n.current = !1;
                                        },
                                        o = window.setTimeout(() => {
                                            document.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(o), document.removeEventListener("pointerdown", e), document.removeEventListener("click", r.current);
                                    };
                                }, [t]),
                                { onPointerDownCapture: () => (n.current = !0) }
                            );
                        })((e) => {
                            let t = e.target,
                                n = [...f.branches].some((e) => e.contains(t));
                            !E || n || (null == l || l(e), null == a || a(e), e.defaultPrevented || null == u || u());
                        }),
                        L = (function (e) {
                            let t = y(e),
                                n = (0, d.useRef)(!1);
                            return (
                                (0, d.useEffect)(() => {
                                    let e = (e) => {
                                        e.target && !n.current && T("dismissableLayer.focusOutside", t, { originalEvent: e }, { discrete: !1 });
                                    };
                                    return document.addEventListener("focusin", e), () => document.removeEventListener("focusin", e);
                                }, [t]),
                                { onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
                            );
                        })((e) => {
                            let t = e.target;
                            [...f.branches].some((e) => e.contains(t)) || (null == i || i(e), null == a || a(e), e.defaultPrevented || null == u || u());
                        });
                    return (
                        !(function (e) {
                            let t = y(e);
                            (0, d.useEffect)(() => {
                                let e = (e) => {
                                    "Escape" === e.key && t(e);
                                };
                                return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
                            }, [t]);
                        })((e) => {
                            R !== f.layers.size - 1 || (null == o || o(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
                        }),
                        (0, d.useEffect)(() => {
                            if (p)
                                return (
                                    n && (0 === f.layersWithOutsidePointerEventsDisabled.size && ((r = document.body.style.pointerEvents), (document.body.style.pointerEvents = "none")), f.layersWithOutsidePointerEventsDisabled.add(p)),
                                    f.layers.add(p),
                                    I(),
                                    () => {
                                        n && 1 === f.layersWithOutsidePointerEventsDisabled.size && (document.body.style.pointerEvents = r);
                                    }
                                );
                        }, [p, n, f]),
                        (0, d.useEffect)(
                            () => () => {
                                p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), I());
                            },
                            [p, f]
                        ),
                        (0, d.useEffect)(() => {
                            let e = () => h({});
                            return document.addEventListener(P, e), () => document.removeEventListener(P, e);
                        }, []),
                        (0, d.createElement)(
                            M.div,
                            c({}, s, {
                                ref: w,
                                style: { pointerEvents: S ? (E ? "auto" : "none") : void 0, ...e.style },
                                onFocusCapture: g(e.onFocusCapture, L.onFocusCapture),
                                onBlurCapture: g(e.onBlurCapture, L.onBlurCapture),
                                onPointerDownCapture: g(e.onPointerDownCapture, _.onPointerDownCapture),
                            })
                        )
                    );
                });
            function I() {
                let e = new CustomEvent(P);
                document.dispatchEvent(e);
            }
            function T(e, t, n, { discrete: r }) {
                let o = n.originalEvent.target,
                    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                (t && o.addEventListener(e, t, { once: !0 }), r) ? o && (0, C.flushSync)(() => o.dispatchEvent(l)) : o.dispatchEvent(l);
            }
            let L = "focusScope.autoFocusOnMount",
                A = "focusScope.autoFocusOnUnmount",
                O = { bubbles: !1, cancelable: !0 },
                D = (0, d.forwardRef)((e, t) => {
                    let { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: l, ...i } = e,
                        [a, u] = (0, d.useState)(null),
                        s = y(o),
                        f = y(l),
                        g = (0, d.useRef)(null),
                        p = v(t, (e) => u(e)),
                        m = (0, d.useRef)({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    (0, d.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (m.paused || !a) return;
                                let t = e.target;
                                a.contains(t) ? (g.current = t) : V(g.current, { select: !0 });
                            }
                            function t(e) {
                                m.paused || !a || a.contains(e.relatedTarget) || V(g.current, { select: !0 });
                            }
                            return (
                                document.addEventListener("focusin", e),
                                document.addEventListener("focusout", t),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t);
                                }
                            );
                        }
                    }, [r, a, m.paused]),
                        (0, d.useEffect)(() => {
                            if (a) {
                                N.add(m);
                                let e = document.activeElement;
                                if (!a.contains(e)) {
                                    let t = new CustomEvent(L, O);
                                    a.addEventListener(L, s),
                                        a.dispatchEvent(t),
                                        t.defaultPrevented ||
                                            ((function (e, { select: t = !1 } = {}) {
                                                let n = document.activeElement;
                                                for (let r of e) if ((V(r, { select: t }), document.activeElement !== n)) return;
                                            })(
                                                j(a).filter((e) => "A" !== e.tagName),
                                                { select: !0 }
                                            ),
                                            document.activeElement === e && V(a));
                                }
                                return () => {
                                    a.removeEventListener(L, s),
                                        setTimeout(() => {
                                            let t = new CustomEvent(A, O);
                                            a.addEventListener(A, f), a.dispatchEvent(t), t.defaultPrevented || V(null != e ? e : document.body, { select: !0 }), a.removeEventListener(A, f), N.remove(m);
                                        }, 0);
                                };
                            }
                        }, [a, s, f, m]);
                    let h = (0, d.useCallback)(
                        (e) => {
                            if ((!n && !r) || m.paused) return;
                            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                o = document.activeElement;
                            if (t && o) {
                                let t = e.currentTarget,
                                    [r, l] = (function (e) {
                                        let t = j(e);
                                        return [k(t, e), k(t.reverse(), e)];
                                    })(t);
                                r && l ? (e.shiftKey || o !== l ? e.shiftKey && o === r && (e.preventDefault(), n && V(l, { select: !0 })) : (e.preventDefault(), n && V(r, { select: !0 }))) : o === t && e.preventDefault();
                            }
                        },
                        [n, r, m.paused]
                    );
                    return (0, d.createElement)(M.div, c({ tabIndex: -1 }, i, { ref: p, onKeyDown: h }));
                });
            function j(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                        },
                    });
                for (; n.nextNode(); ) t.push(n.currentNode);
                return t;
            }
            function k(e, t) {
                for (let n of e)
                    if (
                        !(function (e, { upTo: t }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t); ) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement;
                            }
                            return !1;
                        })(n, { upTo: t })
                    )
                        return n;
            }
            function V(e, { select: t = !1 } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({ preventScroll: !0 }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select();
                }
            }
            let N =
                ((o = []),
                {
                    add(e) {
                        let t = o[0];
                        e !== t && (null == t || t.pause()), (o = z(o, e)).unshift(e);
                    },
                    remove(e) {
                        var t;
                        null === (t = (o = z(o, e))[0]) || void 0 === t || t.resume();
                    },
                });
            function z(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
            let H = (0, d.forwardRef)((e, t) => {
                    var n;
                    let { container: r = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body, ...o } = e;
                    return r ? C.createPortal((0, d.createElement)(M.div, c({}, o, { ref: t })), r) : null;
                }),
                G = (e) => {
                    let { present: t, children: n } = e,
                        r = (function (e) {
                            var t, n;
                            let [r, o] = (0, d.useState)(),
                                l = (0, d.useRef)({}),
                                i = (0, d.useRef)(e),
                                a = (0, d.useRef)("none"),
                                [u, s] =
                                    ((t = e ? "mounted" : "unmounted"),
                                    (n = { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }),
                                    (0, d.useReducer)((e, t) => {
                                        let r = n[e][t];
                                        return null != r ? r : e;
                                    }, t));
                            return (
                                (0, d.useEffect)(() => {
                                    let e = W(l.current);
                                    a.current = "mounted" === u ? e : "none";
                                }, [u]),
                                m(() => {
                                    let t = l.current,
                                        n = i.current;
                                    if (n !== e) {
                                        let r = a.current,
                                            o = W(t);
                                        e ? s("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? s("UNMOUNT") : n && r !== o ? s("ANIMATION_OUT") : s("UNMOUNT"), (i.current = e);
                                    }
                                }, [e, s]),
                                m(() => {
                                    if (r) {
                                        let e = (e) => {
                                                let t = W(l.current).includes(e.animationName);
                                                e.target === r && t && (0, C.flushSync)(() => s("ANIMATION_END"));
                                            },
                                            t = (e) => {
                                                e.target === r && (a.current = W(l.current));
                                            };
                                        return (
                                            r.addEventListener("animationstart", t),
                                            r.addEventListener("animationcancel", e),
                                            r.addEventListener("animationend", e),
                                            () => {
                                                r.removeEventListener("animationstart", t), r.removeEventListener("animationcancel", e), r.removeEventListener("animationend", e);
                                            }
                                        );
                                    }
                                    s("ANIMATION_END");
                                }, [r, s]),
                                {
                                    isPresent: ["mounted", "unmountSuspended"].includes(u),
                                    ref: (0, d.useCallback)((e) => {
                                        e && (l.current = getComputedStyle(e)), o(e);
                                    }, []),
                                }
                            );
                        })(t),
                        o = "function" == typeof n ? n({ present: r.isPresent }) : d.Children.only(n),
                        l = v(r.ref, o.ref);
                    return "function" == typeof n || r.isPresent ? (0, d.cloneElement)(o, { ref: l }) : null;
                };
            function W(e) {
                return (null == e ? void 0 : e.animationName) || "none";
            }
            G.displayName = "Presence";
            let $ = 0;
            function B() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none"), e;
            }
            var U = n(3780),
                K = n(4718),
                q = n(4296),
                X = (0, n(8788)._)(),
                Y = function () {},
                Z = d.forwardRef(function (e, t) {
                    var n = d.useRef(null),
                        r = d.useState({ onScrollCapture: Y, onWheelCapture: Y, onTouchMoveCapture: Y }),
                        o = r[0],
                        l = r[1],
                        i = e.forwardProps,
                        a = e.children,
                        u = e.className,
                        s = e.removeScrollBar,
                        c = e.enabled,
                        f = e.shards,
                        g = e.sideCar,
                        p = e.noIsolation,
                        v = e.inert,
                        m = e.allowPinchZoom,
                        h = e.as,
                        w = (0, U._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        b = (0, q.q)([n, t]),
                        y = (0, U.pi)((0, U.pi)({}, w), o);
                    return d.createElement(
                        d.Fragment,
                        null,
                        c && d.createElement(g, { sideCar: X, removeScrollBar: s, shards: f, noIsolation: p, inert: v, setCallbacks: l, allowPinchZoom: !!m, lockRef: n }),
                        i ? d.cloneElement(d.Children.only(a), (0, U.pi)((0, U.pi)({}, y), { ref: b })) : d.createElement(void 0 === h ? "div" : h, (0, U.pi)({}, y, { className: u, ref: b }), a)
                    );
                });
            (Z.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (Z.classNames = { fullWidth: K.zi, zeroRight: K.pF });
            var J = n(9806),
                Q = n(3935),
                ee = n(304),
                et = !1;
            if ("undefined" != typeof window)
                try {
                    var en = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (et = !0), !0;
                        },
                    });
                    window.addEventListener("test", en, en), window.removeEventListener("test", en, en);
                } catch (e) {
                    et = !1;
                }
            var er = !!et && { passive: !1 },
                eo = function (e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowY && !(t.overflowY === t.overflowX && "visible" === t.overflowY);
                },
                el = function (e) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t.overflowX && !(t.overflowY === t.overflowX && "visible" === t.overflowX);
                },
                ei = function (e, t) {
                    var n = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), ea(e, n))) {
                            var r = eu(e, n);
                            if (r[1] > r[2]) return !0;
                        }
                        n = n.parentNode;
                    } while (n && n !== document.body);
                    return !1;
                },
                ea = function (e, t) {
                    return "v" === e ? eo(t) : el(t);
                },
                eu = function (e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                },
                es = function (e, t, n, r, o) {
                    var l,
                        i = ((l = window.getComputedStyle(t).direction), "h" === e && "rtl" === l ? -1 : 1),
                        a = i * r,
                        u = n.target,
                        s = t.contains(u),
                        c = !1,
                        d = a > 0,
                        f = 0,
                        g = 0;
                    do {
                        var p = eu(e, u),
                            v = p[0],
                            m = p[1] - p[2] - i * v;
                        (v || m) && ea(e, u) && ((f += m), (g += v)), (u = u.parentNode);
                    } while ((!s && u !== document.body) || (s && (t.contains(u) || t === u)));
                    return d && ((o && 0 === f) || (!o && a > f)) ? (c = !0) : !d && ((o && 0 === g) || (!o && -a > g)) && (c = !0), c;
                },
                ec = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                ed = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                ef = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                eg = 0,
                ep = [],
                ev = (0, J.L)(X, function (e) {
                    var t = d.useRef([]),
                        n = d.useRef([0, 0]),
                        r = d.useRef(),
                        o = d.useState(eg++)[0],
                        l = d.useState(function () {
                            return (0, ee.Ws)();
                        })[0],
                        i = d.useRef(e);
                    d.useEffect(
                        function () {
                            i.current = e;
                        },
                        [e]
                    ),
                        d.useEffect(
                            function () {
                                if (e.inert) {
                                    document.body.classList.add("block-interactivity-".concat(o));
                                    var t = (0, U.ev)([e.lockRef.current], (e.shards || []).map(ef), !0).filter(Boolean);
                                    return (
                                        t.forEach(function (e) {
                                            return e.classList.add("allow-interactivity-".concat(o));
                                        }),
                                        function () {
                                            document.body.classList.remove("block-interactivity-".concat(o)),
                                                t.forEach(function (e) {
                                                    return e.classList.remove("allow-interactivity-".concat(o));
                                                });
                                        }
                                    );
                                }
                            },
                            [e.inert, e.lockRef.current, e.shards]
                        );
                    var a = d.useCallback(function (e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o,
                                l = ec(e),
                                a = n.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - l[0],
                                s = "deltaY" in e ? e.deltaY : a[1] - l[1],
                                c = e.target,
                                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === c.type) return !1;
                            var f = ei(d, c);
                            if (!f) return !0;
                            if ((f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = ei(d, c))), !f)) return !1;
                            if ((!r.current && "changedTouches" in e && (u || s) && (r.current = o), !o)) return !0;
                            var g = r.current || o;
                            return es(g, t, e, "h" === g ? u : s, !0);
                        }, []),
                        u = d.useCallback(function (e) {
                            if (ep.length && ep[ep.length - 1] === l) {
                                var n = "deltaY" in e ? ed(e) : ec(e),
                                    r = t.current.filter(function (t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1];
                                    })[0];
                                if (r && r.should) {
                                    e.preventDefault();
                                    return;
                                }
                                if (!r) {
                                    var o = (i.current.shards || [])
                                        .map(ef)
                                        .filter(Boolean)
                                        .filter(function (t) {
                                            return t.contains(e.target);
                                        });
                                    (o.length > 0 ? a(e, o[0]) : !i.current.noIsolation) && e.preventDefault();
                                }
                            }
                        }, []),
                        s = d.useCallback(function (e, n, r, o) {
                            var l = { name: e, delta: n, target: r, should: o };
                            t.current.push(l),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== l;
                                    });
                                }, 1);
                        }, []),
                        c = d.useCallback(function (e) {
                            (n.current = ec(e)), (r.current = void 0);
                        }, []),
                        f = d.useCallback(function (t) {
                            s(t.type, ed(t), t.target, a(t, e.lockRef.current));
                        }, []),
                        g = d.useCallback(function (t) {
                            s(t.type, ec(t), t.target, a(t, e.lockRef.current));
                        }, []);
                    d.useEffect(function () {
                        return (
                            ep.push(l),
                            e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: g }),
                            document.addEventListener("wheel", u, er),
                            document.addEventListener("touchmove", u, er),
                            document.addEventListener("touchstart", c, er),
                            function () {
                                (ep = ep.filter(function (e) {
                                    return e !== l;
                                })),
                                    document.removeEventListener("wheel", u, er),
                                    document.removeEventListener("touchmove", u, er),
                                    document.removeEventListener("touchstart", c, er);
                            }
                        );
                    }, []);
                    var p = e.removeScrollBar,
                        v = e.inert;
                    return d.createElement(
                        d.Fragment,
                        null,
                        v ? d.createElement(l, { styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n") }) : null,
                        p ? d.createElement(Q.jp, { gapMode: "margin" }) : null
                    );
                }),
                em = d.forwardRef(function (e, t) {
                    return d.createElement(Z, (0, U.pi)({}, e, { ref: t, sideCar: ev }));
                });
            em.classNames = Z.classNames;
            var eh = n(7130);
            let ew = "Dialog",
                [eb, ey] = (function (e, t = []) {
                    let n = [],
                        r = () => {
                            let t = n.map((e) => (0, d.createContext)(e));
                            return function (n) {
                                let r = (null == n ? void 0 : n[e]) || t;
                                return (0, d.useMemo)(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
                            };
                        };
                    return (
                        (r.scopeName = e),
                        [
                            function (t, r) {
                                let o = (0, d.createContext)(r),
                                    l = n.length;
                                function i(t) {
                                    let { scope: n, children: r, ...i } = t,
                                        a = (null == n ? void 0 : n[e][l]) || o,
                                        u = (0, d.useMemo)(() => i, Object.values(i));
                                    return (0, d.createElement)(a.Provider, { value: u }, r);
                                }
                                return (
                                    (n = [...n, r]),
                                    (i.displayName = t + "Provider"),
                                    [
                                        i,
                                        function (n, i) {
                                            let a = (null == i ? void 0 : i[e][l]) || o,
                                                u = (0, d.useContext)(a);
                                            if (u) return u;
                                            if (void 0 !== r) return r;
                                            throw Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            (function (...e) {
                                let t = e[0];
                                if (1 === e.length) return t;
                                let n = () => {
                                    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                                    return function (e) {
                                        let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                                            let o = n(e)[`__scope${r}`];
                                            return { ...t, ...o };
                                        }, {});
                                        return (0, d.useMemo)(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                                    };
                                };
                                return (n.scopeName = t.scopeName), n;
                            })(r, ...t),
                        ]
                    );
                })(ew),
                [eC, ex] = eb(ew),
                eR = "DialogPortal",
                [eS, eE] = eb(eR, { forceMount: void 0 }),
                eM = "DialogOverlay",
                eP = (0, d.forwardRef)((e, t) => {
                    let n = eE(eM, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        l = ex(eM, e.__scopeDialog);
                    return l.modal ? (0, d.createElement)(G, { present: r || l.open }, (0, d.createElement)(eF, c({}, o, { ref: t }))) : null;
                }),
                eF = (0, d.forwardRef)((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        o = ex(eM, n);
                    return (0, d.createElement)(em, { as: x, allowPinchZoom: !0, shards: [o.contentRef] }, (0, d.createElement)(M.div, c({ "data-state": eO(o.open) }, r, { ref: t, style: { pointerEvents: "auto", ...r.style } })));
                }),
                e_ = "DialogContent",
                eI = (0, d.forwardRef)((e, t) => {
                    let n = eE(e_, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        l = ex(e_, e.__scopeDialog);
                    return (0, d.createElement)(G, { present: r || l.open }, l.modal ? (0, d.createElement)(eT, c({}, o, { ref: t })) : (0, d.createElement)(eL, c({}, o, { ref: t })));
                }),
                eT = (0, d.forwardRef)((e, t) => {
                    let n = ex(e_, e.__scopeDialog),
                        r = (0, d.useRef)(null),
                        o = v(t, n.contentRef, r);
                    return (
                        (0, d.useEffect)(() => {
                            let e = r.current;
                            if (e) return (0, eh.Ry)(e);
                        }, []),
                        (0, d.createElement)(
                            eA,
                            c({}, e, {
                                ref: o,
                                trapFocus: n.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: g(e.onCloseAutoFocus, (e) => {
                                    var t;
                                    e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus();
                                }),
                                onPointerDownOutside: g(e.onPointerDownOutside, (e) => {
                                    let t = e.detail.originalEvent,
                                        n = 0 === t.button && !0 === t.ctrlKey;
                                    (2 === t.button || n) && e.preventDefault();
                                }),
                                onFocusOutside: g(e.onFocusOutside, (e) => e.preventDefault()),
                            })
                        )
                    );
                }),
                eL = (0, d.forwardRef)((e, t) => {
                    let n = ex(e_, e.__scopeDialog),
                        r = (0, d.useRef)(!1);
                    return (0, d.createElement)(
                        eA,
                        c({}, e, {
                            ref: t,
                            trapFocus: !1,
                            disableOutsidePointerEvents: !1,
                            onCloseAutoFocus: (t) => {
                                var o, l;
                                null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current || null === (l = n.triggerRef.current) || void 0 === l || l.focus(), t.preventDefault()), (r.current = !1);
                            },
                            onInteractOutside: (t) => {
                                var o, l;
                                null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (r.current = !0);
                                let i = t.target;
                                (null === (l = n.triggerRef.current) || void 0 === l ? void 0 : l.contains(i)) && t.preventDefault();
                            },
                        })
                    );
                }),
                eA = (0, d.forwardRef)((e, t) => {
                    let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: l, ...i } = e,
                        a = ex(e_, n),
                        u = v(t, (0, d.useRef)(null));
                    return (
                        (0, d.useEffect)(() => {
                            var e, t;
                            let n = document.querySelectorAll("[data-radix-focus-guard]");
                            return (
                                document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : B()),
                                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : B()),
                                $++,
                                () => {
                                    1 === $ && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), $--;
                                }
                            );
                        }, []),
                        (0, d.createElement)(
                            d.Fragment,
                            null,
                            (0, d.createElement)(
                                D,
                                { asChild: !0, loop: !0, trapped: r, onMountAutoFocus: o, onUnmountAutoFocus: l },
                                (0, d.createElement)(_, c({ role: "dialog", id: a.contentId, "aria-describedby": a.descriptionId, "aria-labelledby": a.titleId, "data-state": eO(a.open) }, i, { ref: u, onDismiss: () => a.onOpenChange(!1) }))
                            ),
                            !1
                        )
                    );
                });
            function eO(e) {
                return e ? "open" : "closed";
            }
            let [eD, ej] = (function (e, t) {
                    let n = (0, d.createContext)(t);
                    function r(e) {
                        let { children: t, ...r } = e,
                            o = (0, d.useMemo)(() => r, Object.values(r));
                        return (0, d.createElement)(n.Provider, { value: o }, t);
                    }
                    return (
                        (r.displayName = e + "Provider"),
                        [
                            r,
                            function (r) {
                                let o = (0, d.useContext)(n);
                                if (o) return o;
                                if (void 0 !== t) return t;
                                throw Error(`\`${r}\` must be used within \`${e}\``);
                            },
                        ]
                    );
                })("DialogTitleWarning", { contentName: e_, titleName: "DialogTitle", docsSlug: "dialog" }),
                ek = (e) => {
                    let { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: l, modal: i = !0 } = e,
                        a = (0, d.useRef)(null),
                        u = (0, d.useRef)(null),
                        [s = !1, c] = (function ({ prop: e, defaultProp: t, onChange: n = () => {} }) {
                            let [r, o] = (function ({ defaultProp: e, onChange: t }) {
                                    let n = (0, d.useState)(e),
                                        [r] = n,
                                        o = (0, d.useRef)(r),
                                        l = y(t);
                                    return (
                                        (0, d.useEffect)(() => {
                                            o.current !== r && (l(r), (o.current = r));
                                        }, [r, o, l]),
                                        n
                                    );
                                })({ defaultProp: t, onChange: n }),
                                l = void 0 !== e,
                                i = l ? e : r,
                                a = y(n);
                            return [
                                i,
                                (0, d.useCallback)(
                                    (t) => {
                                        if (l) {
                                            let n = "function" == typeof t ? t(e) : t;
                                            n !== e && a(n);
                                        } else o(t);
                                    },
                                    [l, e, o, a]
                                ),
                            ];
                        })({ prop: r, defaultProp: o, onChange: l });
                    return (0, d.createElement)(
                        eC,
                        { scope: t, triggerRef: a, contentRef: u, contentId: b(), titleId: b(), descriptionId: b(), open: s, onOpenChange: c, onOpenToggle: (0, d.useCallback)(() => c((e) => !e), [c]), modal: i },
                        n
                    );
                },
                eV = (e) => {
                    let { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
                        l = ex(eR, t);
                    return (0, d.createElement)(
                        eS,
                        { scope: t, forceMount: n },
                        d.Children.map(r, (e) => (0, d.createElement)(G, { present: n || l.open }, (0, d.createElement)(H, { asChild: !0, container: o }, e)))
                    );
                };
            var eN = '[cmdk-group=""]',
                ez = '[cmdk-group-items=""]',
                eH = '[cmdk-item=""]',
                eG = `${eH}:not([aria-disabled="true"])`,
                eW = "cmdk-item-select",
                e$ = "data-value",
                eB = (e, t) =>
                    (function e(t, n, r, o, s, c, d) {
                        if (c === n.length) return s === t.length ? 1 : 0.99;
                        var f = `${s},${c}`;
                        if (void 0 !== d[f]) return d[f];
                        for (var g, p, v, m, h = o.charAt(c), w = r.indexOf(h, s), b = 0; w >= 0; )
                            (g = e(t, n, r, o, w + 1, c + 1, d)) > b &&
                                (w === s
                                    ? (g *= 1)
                                    : l.test(t.charAt(w - 1))
                                    ? ((g *= 0.8), (v = t.slice(s, w - 1).match(i)) && s > 0 && (g *= Math.pow(0.999, v.length)))
                                    : a.test(t.charAt(w - 1))
                                    ? ((g *= 0.9), (m = t.slice(s, w - 1).match(u)) && s > 0 && (g *= Math.pow(0.999, m.length)))
                                    : ((g *= 0.17), s > 0 && (g *= Math.pow(0.999, w - s))),
                                t.charAt(w) !== n.charAt(c) && (g *= 0.9999)),
                                ((g < 0.1 && r.charAt(w - 1) === o.charAt(c + 1)) || (o.charAt(c + 1) === o.charAt(c) && r.charAt(w - 1) !== o.charAt(c))) && 0.1 * (p = e(t, n, r, o, w + 1, c + 2, d)) > g && (g = 0.1 * p),
                                g > b && (b = g),
                                (w = r.indexOf(h, w + 1));
                        return (d[f] = b), b;
                    })(e, t, s(e), s(t), 0, 0, {}),
                eU = d.createContext(void 0),
                eK = () => d.useContext(eU),
                eq = d.createContext(void 0),
                eX = () => d.useContext(eq),
                eY = d.createContext(void 0),
                eZ = d.forwardRef((e, t) => {
                    let n = d.useRef(null),
                        r = e8(() => {
                            var t, n, r;
                            return { search: "", value: null != (r = null != (n = e.value) ? n : null == (t = e.defaultValue) ? void 0 : t.toLowerCase()) ? r : "", filtered: { count: 0, items: new Map(), groups: new Set() } };
                        }),
                        o = e8(() => new Set()),
                        l = e8(() => new Map()),
                        i = e8(() => new Map()),
                        a = e8(() => new Set()),
                        u = e9(e),
                        { label: s, children: c, value: f, onValueChange: g, filter: p, shouldFilter: v, vimBindings: m = !0, ...h } = e,
                        w = d.useId(),
                        b = d.useId(),
                        y = d.useId(),
                        C = tt();
                    e5(() => {
                        if (void 0 !== f) {
                            let e = f.trim().toLowerCase();
                            (r.current.value = e), C(6, F), x.emit();
                        }
                    }, [f]);
                    let x = d.useMemo(
                            () => ({
                                subscribe: (e) => (a.current.add(e), () => a.current.delete(e)),
                                snapshot: () => r.current,
                                setState: (e, t, n) => {
                                    var o, l, i;
                                    if (!Object.is(r.current[e], t)) {
                                        if (((r.current[e] = t), "search" === e)) P(), E(), C(1, M);
                                        else if ("value" === e) {
                                            if ((null == (o = u.current) ? void 0 : o.value) !== void 0) {
                                                null == (i = (l = u.current).onValueChange) || i.call(l, null != t ? t : "");
                                                return;
                                            }
                                            n || C(5, F);
                                        }
                                        x.emit();
                                    }
                                },
                                emit: () => {
                                    a.current.forEach((e) => e());
                                },
                            }),
                            []
                        ),
                        R = d.useMemo(
                            () => ({
                                value: (e, t) => {
                                    t !== i.current.get(e) &&
                                        (i.current.set(e, t),
                                        r.current.filtered.items.set(e, S(t)),
                                        C(2, () => {
                                            E(), x.emit();
                                        }));
                                },
                                item: (e, t) => (
                                    o.current.add(e),
                                    t && (l.current.has(t) ? l.current.get(t).add(e) : l.current.set(t, new Set([e]))),
                                    C(3, () => {
                                        P(), E(), r.current.value || M(), x.emit();
                                    }),
                                    () => {
                                        i.current.delete(e), o.current.delete(e), r.current.filtered.items.delete(e);
                                        let t = _();
                                        C(4, () => {
                                            P(), (null == t ? void 0 : t.getAttribute("id")) === e && M(), x.emit();
                                        });
                                    }
                                ),
                                group: (e) => (
                                    l.current.has(e) || l.current.set(e, new Set()),
                                    () => {
                                        i.current.delete(e), l.current.delete(e);
                                    }
                                ),
                                filter: () => u.current.shouldFilter,
                                label: s || e["aria-label"],
                                commandRef: n,
                                listId: w,
                                inputId: y,
                                labelId: b,
                            }),
                            []
                        );
                    function S(e) {
                        var t, n;
                        let o = null != (n = null == (t = u.current) ? void 0 : t.filter) ? n : eB;
                        return e ? o(e, r.current.search) : 0;
                    }
                    function E() {
                        if (!n.current || !r.current.search || !1 === u.current.shouldFilter) return;
                        let e = r.current.filtered.items,
                            t = [];
                        r.current.filtered.groups.forEach((n) => {
                            let r = l.current.get(n),
                                o = 0;
                            r.forEach((t) => {
                                o = Math.max(e.get(t), o);
                            }),
                                t.push([n, o]);
                        });
                        let o = n.current.querySelector('[cmdk-list-sizer=""]');
                        I()
                            .sort((t, n) => {
                                var r, o;
                                let l = t.getAttribute(e$),
                                    i = n.getAttribute(e$);
                                return (null != (r = e.get(i)) ? r : 0) - (null != (o = e.get(l)) ? o : 0);
                            })
                            .forEach((e) => {
                                let t = e.closest(ez);
                                t ? t.appendChild(e.parentElement === t ? e : e.closest(`${ez} > *`)) : o.appendChild(e.parentElement === o ? e : e.closest(`${ez} > *`));
                            }),
                            t
                                .sort((e, t) => t[1] - e[1])
                                .forEach((e) => {
                                    let t = n.current.querySelector(`${eN}[${e$}="${e[0]}"]`);
                                    null == t || t.parentElement.appendChild(t);
                                });
                    }
                    function M() {
                        let e = I().find((e) => !e.ariaDisabled),
                            t = null == e ? void 0 : e.getAttribute(e$);
                        x.setState("value", t || void 0);
                    }
                    function P() {
                        if (!r.current.search || !1 === u.current.shouldFilter) {
                            r.current.filtered.count = o.current.size;
                            return;
                        }
                        r.current.filtered.groups = new Set();
                        let e = 0;
                        for (let t of o.current) {
                            let n = S(i.current.get(t));
                            r.current.filtered.items.set(t, n), n > 0 && e++;
                        }
                        for (let [e, t] of l.current)
                            for (let n of t)
                                if (r.current.filtered.items.get(n) > 0) {
                                    r.current.filtered.groups.add(e);
                                    break;
                                }
                        r.current.filtered.count = e;
                    }
                    function F() {
                        var e, t, n;
                        let r = _();
                        r &&
                            ((null == (e = r.parentElement) ? void 0 : e.firstChild) === r && (null == (n = null == (t = r.closest(eN)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) || n.scrollIntoView({ block: "nearest" })),
                            r.scrollIntoView({ block: "nearest" }));
                    }
                    function _() {
                        var e;
                        return null == (e = n.current) ? void 0 : e.querySelector(`${eH}[aria-selected="true"]`);
                    }
                    function I() {
                        return Array.from(n.current.querySelectorAll(eG));
                    }
                    function T(e) {
                        let t = I()[e];
                        t && x.setState("value", t.getAttribute(e$));
                    }
                    function L(e) {
                        var t;
                        let n = _(),
                            r = I(),
                            o = r.findIndex((e) => e === n),
                            l = r[o + e];
                        null != (t = u.current) && t.loop && (l = o + e < 0 ? r[r.length - 1] : o + e === r.length ? r[0] : r[o + e]), l && x.setState("value", l.getAttribute(e$));
                    }
                    function A(e) {
                        let t = _(),
                            n = null == t ? void 0 : t.closest(eN),
                            r;
                        for (; n && !r; )
                            r =
                                null ==
                                (n =
                                    e > 0
                                        ? (function (e, t) {
                                              let n = e.nextElementSibling;
                                              for (; n; ) {
                                                  if (n.matches(t)) return n;
                                                  n = n.nextElementSibling;
                                              }
                                          })(n, eN)
                                        : (function (e, t) {
                                              let n = e.previousElementSibling;
                                              for (; n; ) {
                                                  if (n.matches(t)) return n;
                                                  n = n.previousElementSibling;
                                              }
                                          })(n, eN))
                                    ? void 0
                                    : n.querySelector(eG);
                        r ? x.setState("value", r.getAttribute(e$)) : L(e);
                    }
                    let O = () => T(I().length - 1),
                        D = (e) => {
                            e.preventDefault(), e.metaKey ? O() : e.altKey ? A(1) : L(1);
                        },
                        j = (e) => {
                            e.preventDefault(), e.metaKey ? T(0) : e.altKey ? A(-1) : L(-1);
                        };
                    return d.createElement(
                        "div",
                        {
                            ref: e6([n, t]),
                            ...h,
                            "cmdk-root": "",
                            onKeyDown: (e) => {
                                var t;
                                if ((null == (t = h.onKeyDown) || t.call(h, e), !e.defaultPrevented))
                                    switch (e.key) {
                                        case "n":
                                        case "j":
                                            m && e.ctrlKey && D(e);
                                            break;
                                        case "ArrowDown":
                                            D(e);
                                            break;
                                        case "p":
                                        case "k":
                                            m && e.ctrlKey && j(e);
                                            break;
                                        case "ArrowUp":
                                            j(e);
                                            break;
                                        case "Home":
                                            e.preventDefault(), T(0);
                                            break;
                                        case "End":
                                            e.preventDefault(), O();
                                            break;
                                        case "Enter":
                                            if (!e.nativeEvent.isComposing) {
                                                e.preventDefault();
                                                let t = _();
                                                if (t) {
                                                    let e = new Event(eW);
                                                    t.dispatchEvent(e);
                                                }
                                            }
                                    }
                            },
                        },
                        d.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: tn }, s),
                        d.createElement(eq.Provider, { value: x }, d.createElement(eU.Provider, { value: R }, c))
                    );
                }),
                eJ = d.forwardRef((e, t) => {
                    var n, r;
                    let o = d.useId(),
                        l = d.useRef(null),
                        i = d.useContext(eY),
                        a = eK(),
                        u = e9(e),
                        s = null != (r = null == (n = u.current) ? void 0 : n.forceMount) ? r : null == i ? void 0 : i.forceMount;
                    e5(() => a.item(o, null == i ? void 0 : i.id), []);
                    let c = te(o, l, [e.value, e.children, l]),
                        f = eX(),
                        g = e4((e) => e.value && e.value === c.current),
                        p = e4((e) => !!s || !1 === a.filter() || !e.search || e.filtered.items.get(o) > 0);
                    function v() {
                        var e, t;
                        m(), null == (t = (e = u.current).onSelect) || t.call(e, c.current);
                    }
                    function m() {
                        f.setState("value", c.current, !0);
                    }
                    if (
                        (d.useEffect(() => {
                            let t = l.current;
                            if (!(!t || e.disabled)) return t.addEventListener(eW, v), () => t.removeEventListener(eW, v);
                        }, [p, e.onSelect, e.disabled]),
                        !p)
                    )
                        return null;
                    let { disabled: h, value: w, onSelect: b, forceMount: y, ...C } = e;
                    return d.createElement(
                        "div",
                        {
                            ref: e6([l, t]),
                            ...C,
                            id: o,
                            "cmdk-item": "",
                            role: "option",
                            "aria-disabled": h || void 0,
                            "aria-selected": g || void 0,
                            "data-disabled": h || void 0,
                            "data-selected": g || void 0,
                            onPointerMove: h ? void 0 : m,
                            onClick: h ? void 0 : v,
                        },
                        e.children
                    );
                }),
                eQ = d.forwardRef((e, t) => {
                    let { heading: n, children: r, forceMount: o, ...l } = e,
                        i = d.useId(),
                        a = d.useRef(null),
                        u = d.useRef(null),
                        s = d.useId(),
                        c = eK(),
                        f = e4((e) => !!o || !1 === c.filter() || !e.search || e.filtered.groups.has(i));
                    e5(() => c.group(i), []), te(i, a, [e.value, e.heading, u]);
                    let g = d.useMemo(() => ({ id: i, forceMount: o }), [o]),
                        p = d.createElement(eY.Provider, { value: g }, r);
                    return d.createElement(
                        "div",
                        { ref: e6([a, t]), ...l, "cmdk-group": "", role: "presentation", hidden: !f || void 0 },
                        n && d.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: s }, n),
                        d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? s : void 0 }, p)
                    );
                }),
                e0 = d.forwardRef((e, t) => {
                    let { alwaysRender: n, ...r } = e,
                        o = d.useRef(null),
                        l = e4((e) => !e.search);
                    return n || l ? d.createElement("div", { ref: e6([o, t]), ...r, "cmdk-separator": "", role: "separator" }) : null;
                }),
                e1 = d.forwardRef((e, t) => {
                    let { onValueChange: n, ...r } = e,
                        o = null != e.value,
                        l = eX(),
                        i = e4((e) => e.search),
                        a = e4((e) => e.value),
                        u = eK(),
                        s = d.useMemo(() => {
                            var e;
                            let t = null == (e = u.commandRef.current) ? void 0 : e.querySelector(`${eH}[${e$}="${a}"]`);
                            return null == t ? void 0 : t.getAttribute("id");
                        }, [a, u.commandRef]);
                    return (
                        d.useEffect(() => {
                            null != e.value && l.setState("search", e.value);
                        }, [e.value]),
                        d.createElement("input", {
                            ref: t,
                            ...r,
                            "cmdk-input": "",
                            autoComplete: "off",
                            autoCorrect: "off",
                            spellCheck: !1,
                            "aria-autocomplete": "list",
                            role: "combobox",
                            "aria-expanded": !0,
                            "aria-controls": u.listId,
                            "aria-labelledby": u.labelId,
                            "aria-activedescendant": s,
                            id: u.inputId,
                            type: "text",
                            value: o ? e.value : i,
                            onChange: (e) => {
                                o || l.setState("search", e.target.value), null == n || n(e.target.value);
                            },
                        })
                    );
                }),
                e2 = d.forwardRef((e, t) => {
                    let { children: n, ...r } = e,
                        o = d.useRef(null),
                        l = d.useRef(null),
                        i = eK();
                    return (
                        d.useEffect(() => {
                            if (l.current && o.current) {
                                let e = l.current,
                                    t = o.current,
                                    n,
                                    r = new ResizeObserver(() => {
                                        n = requestAnimationFrame(() => {
                                            let n = e.offsetHeight;
                                            t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
                                        });
                                    });
                                return (
                                    r.observe(e),
                                    () => {
                                        cancelAnimationFrame(n), r.unobserve(e);
                                    }
                                );
                            }
                        }, []),
                        d.createElement(
                            "div",
                            { ref: e6([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: i.listId, "aria-labelledby": i.inputId },
                            d.createElement("div", { ref: l, "cmdk-list-sizer": "" }, n)
                        )
                    );
                }),
                e3 = d.forwardRef((e, t) => {
                    let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: l, container: i, ...a } = e;
                    return d.createElement(
                        ek,
                        { open: n, onOpenChange: r },
                        d.createElement(eV, { container: i }, d.createElement(eP, { "cmdk-overlay": "", className: o }), d.createElement(eI, { "aria-label": e.label, "cmdk-dialog": "", className: l }, d.createElement(eZ, { ref: t, ...a })))
                    );
                }),
                e7 = Object.assign(eZ, {
                    List: e2,
                    Item: eJ,
                    Input: e1,
                    Group: eQ,
                    Separator: e0,
                    Dialog: e3,
                    Empty: d.forwardRef((e, t) => {
                        let n = d.useRef(!0),
                            r = e4((e) => 0 === e.filtered.count);
                        return (
                            d.useEffect(() => {
                                n.current = !1;
                            }, []),
                            n.current || !r ? null : d.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" })
                        );
                    }),
                    Loading: d.forwardRef((e, t) => {
                        let { progress: n, children: r, ...o } = e;
                        return d.createElement(
                            "div",
                            { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." },
                            d.createElement("div", { "aria-hidden": !0 }, r)
                        );
                    }),
                });
            function e9(e) {
                let t = d.useRef(e);
                return (
                    e5(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            var e5 = "undefined" == typeof window ? d.useEffect : d.useLayoutEffect;
            function e8(e) {
                let t = d.useRef();
                return void 0 === t.current && (t.current = e()), t;
            }
            function e6(e) {
                return (t) => {
                    e.forEach((e) => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t);
                    });
                };
            }
            function e4(e) {
                let t = eX(),
                    n = () => e(t.snapshot());
                return d.useSyncExternalStore(t.subscribe, n, n);
            }
            function te(e, t, n) {
                let r = d.useRef(),
                    o = eK();
                return (
                    e5(() => {
                        var l;
                        let i = (() => {
                            var e;
                            for (let t of n) {
                                if ("string" == typeof t) return t.trim().toLowerCase();
                                if ("object" == typeof t && "current" in t) return t.current ? (null == (e = t.current.textContent) ? void 0 : e.trim().toLowerCase()) : r.current;
                            }
                        })();
                        o.value(e, i), null == (l = t.current) || l.setAttribute(e$, i), (r.current = i);
                    }),
                    r
                );
            }
            var tt = () => {
                    let [e, t] = d.useState(),
                        n = e8(() => new Map());
                    return (
                        e5(() => {
                            n.current.forEach((e) => e()), (n.current = new Map());
                        }, [e]),
                        (e, r) => {
                            n.current.set(e, r), t({});
                        }
                    );
                },
                tn = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
        },
        2005: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return r;
                },
            });
            let r = (0, n(5708).Z)("XCircle", [
                ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
                ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
                ["path", { d: "m9 9 6 6", key: "z0biqf" }],
            ]);
        },
        8699: function (e, t, n) {
            "use strict";
            n.d(t, {
                _: function () {
                    return a;
                },
            });
            var r = n(7653);
            n(4713);
            var o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;
            function l(e, t, n, l) {
                let i = (0, r.useRef)(t);
                o(() => {
                    i.current = t;
                }, [t]),
                    (0, r.useEffect)(() => {
                        let t = (null == n ? void 0 : n.current) ?? window;
                        if (!(t && t.addEventListener)) return;
                        let r = (e) => {
                            i.current(e);
                        };
                        return (
                            t.addEventListener(e, r, l),
                            () => {
                                t.removeEventListener(e, r, l);
                            }
                        );
                    }, [e, n, l]);
            }
            var i = "undefined" == typeof window;
            function a(e, t, n = {}) {
                let { initializeWithValue: a = !0 } = n,
                    u = (0, r.useCallback)((e) => (n.serializer ? n.serializer(e) : JSON.stringify(e)), [n]),
                    s = (0, r.useCallback)(
                        (e) => {
                            let r;
                            if (n.deserializer) return n.deserializer(e);
                            if ("undefined" === e) return;
                            let o = t instanceof Function ? t() : t;
                            try {
                                r = JSON.parse(e);
                            } catch (e) {
                                return console.error("Error parsing JSON:", e), o;
                            }
                            return r;
                        },
                        [n, t]
                    ),
                    c = (0, r.useCallback)(() => {
                        let n = t instanceof Function ? t() : t;
                        if (i) return n;
                        try {
                            let t = window.localStorage.getItem(e);
                            return t ? s(t) : n;
                        } catch (t) {
                            return console.warn(`Error reading localStorage key \u201C${e}\u201D:`, t), n;
                        }
                    }, [t, e, s]),
                    [d, f] = (0, r.useState)(() => (a ? c() : t instanceof Function ? t() : t)),
                    g = (function (e) {
                        let t = (0, r.useRef)(() => {
                            throw Error("Cannot call an event handler while rendering.");
                        });
                        return (
                            o(() => {
                                t.current = e;
                            }, [e]),
                            (0, r.useCallback)((...e) => t.current(...e), [t])
                        );
                    })((t) => {
                        i && console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);
                        try {
                            let n = t instanceof Function ? t(c()) : t;
                            window.localStorage.setItem(e, u(n)), f(n), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
                        } catch (t) {
                            console.warn(`Error setting localStorage key \u201C${e}\u201D:`, t);
                        }
                    });
                (0, r.useEffect)(() => {
                    f(c());
                }, [e]);
                let p = (0, r.useCallback)(
                    (t) => {
                        (null != t && t.key && t.key !== e) || f(c());
                    },
                    [e, c]
                );
                return l("storage", p), l("local-storage", p), [d, g];
            }
        },
        4753: function (e, t, n) {
            "use strict";
            n.d(t, {
                x: function () {
                    return Q;
                },
                K: function () {
                    return ee;
                },
            });
            let r = () => "viem@2.13.10";
            class o extends Error {
                constructor(e, t = {}) {
                    super(),
                        Object.defineProperty(this, "details", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, "docsPath", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, "metaMessages", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, "shortMessage", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "ViemError" }),
                        Object.defineProperty(this, "version", { enumerable: !0, configurable: !0, writable: !0, value: r() });
                    let n = t.cause instanceof o ? t.cause.details : t.cause?.message ? t.cause.message : t.details,
                        l = (t.cause instanceof o && t.cause.docsPath) || t.docsPath;
                    (this.message = [
                        e || "An error occurred.",
                        "",
                        ...(t.metaMessages ? [...t.metaMessages, ""] : []),
                        ...(l ? [`Docs: ${t.docsBaseUrl ?? "https://viem.sh"}${l}${t.docsSlug ? `#${t.docsSlug}` : ""}`] : []),
                        ...(n ? [`Details: ${n}`] : []),
                        `Version: ${this.version}`,
                    ].join("\n")),
                        t.cause && (this.cause = t.cause),
                        (this.details = n),
                        (this.docsPath = l),
                        (this.metaMessages = t.metaMessages),
                        (this.shortMessage = e);
                }
                walk(e) {
                    return (function e(t, n) {
                        return n?.(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, n) : n ? null : t;
                    })(this, e);
                }
            }
            class l extends o {
                constructor({ address: e }) {
                    super(`Address "${e}" is invalid.`, { metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."] }),
                        Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "InvalidAddressError" });
                }
            }
            function i(e, { strict: t = !0 } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"));
            }
            class a extends o {
                constructor({ size: e, targetSize: t, type: n }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),
                        Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "SizeExceedsPaddingSizeError" });
                }
            }
            function u(e, { dir: t, size: n = 32 } = {}) {
                return "string" == typeof e
                    ? (function (e, { dir: t, size: n = 32 } = {}) {
                          if (null === n) return e;
                          let r = e.replace("0x", "");
                          if (r.length > 2 * n) throw new a({ size: Math.ceil(r.length / 2), targetSize: n, type: "hex" });
                          return `0x${r["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
                      })(e, { dir: t, size: n })
                    : (function (e, { dir: t, size: n = 32 } = {}) {
                          if (null === n) return e;
                          if (e.length > n) throw new a({ size: e.length, targetSize: n, type: "bytes" });
                          let r = new Uint8Array(n);
                          for (let o = 0; o < n; o++) {
                              let l = "right" === t;
                              r[l ? o : n - o - 1] = e[l ? o : e.length - o - 1];
                          }
                          return r;
                      })(e, { dir: t, size: n });
            }
            class s extends o {
                constructor({ max: e, min: t, signed: n, size: r, value: o }) {
                    super(`Number "${o}" is not in safe ${r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`),
                        Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "IntegerOutOfRangeError" });
                }
            }
            class c extends o {
                constructor({ givenSize: e, maxSize: t }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: "SizeOverflowError" });
                }
            }
            function d(e) {
                return i(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
            }
            function f(e, { size: t }) {
                if (d(e) > t) throw new c({ givenSize: d(e), maxSize: t });
            }
            let g = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
            function p(e, t = {}) {
                let n = "";
                for (let t = 0; t < e.length; t++) n += g[e[t]];
                let r = `0x${n}`;
                return "number" == typeof t.size ? (f(r, { size: t.size }), u(r, { dir: "right", size: t.size })) : r;
            }
            function v(e, t = {}) {
                let n;
                let { signed: r, size: o } = t,
                    l = BigInt(e);
                o ? (n = r ? (1n << (8n * BigInt(o) - 1n)) - 1n : 2n ** (8n * BigInt(o)) - 1n) : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
                let i = "bigint" == typeof n && r ? -n - 1n : 0;
                if ((n && l > n) || l < i) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new s({ max: n ? `${n}${t}` : void 0, min: `${i}${t}`, signed: r, size: o, value: `${e}${t}` });
                }
                let a = `0x${(r && l < 0 ? (1n << BigInt(8 * o)) + BigInt(l) : l).toString(16)}`;
                return o ? u(a, { size: o }) : a;
            }
            let m = new TextEncoder(),
                h = new TextEncoder(),
                w = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
            function b(e) {
                return e >= w.zero && e <= w.nine ? e - w.zero : e >= w.A && e <= w.F ? e - (w.A - 10) : e >= w.a && e <= w.f ? e - (w.a - 10) : void 0;
            }
            function y(e, t = {}) {
                let n = e;
                t.size && (f(n, { size: t.size }), (n = u(n, { dir: "right", size: t.size })));
                let r = n.slice(2);
                r.length % 2 && (r = `0${r}`);
                let l = r.length / 2,
                    i = new Uint8Array(l);
                for (let e = 0, t = 0; e < l; e++) {
                    let n = b(r.charCodeAt(t++)),
                        l = b(r.charCodeAt(t++));
                    if (void 0 === n || void 0 === l) throw new o(`Invalid byte sequence ("${r[t - 2]}${r[t - 1]}" in "${r}").`);
                    i[e] = 16 * n + l;
                }
                return i;
            }
            function C(e, t = {}) {
                let n = h.encode(e);
                return "number" == typeof t.size ? (f(n, { size: t.size }), u(n, { dir: "right", size: t.size })) : n;
            }
            function x(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`);
            }
            function R(e, ...t) {
                if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
            }
            function S(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called");
            }
            let E = BigInt(4294967296 - 1),
                M = BigInt(32),
                P = (e, t, n) => (e << n) | (t >>> (32 - n)),
                F = (e, t, n) => (t << n) | (e >>> (32 - n)),
                _ = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
                I = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n)),
                T = (e) => e instanceof Uint8Array,
                L = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");
            function A(e) {
                if (
                    ("string" == typeof e &&
                        (e = (function (e) {
                            if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                            return new Uint8Array(new TextEncoder().encode(e));
                        })(e)),
                    !T(e))
                )
                    throw Error(`expected Uint8Array, got ${typeof e}`);
                return e;
            }
            class O {
                clone() {
                    return this._cloneInto();
                }
            }
            let [D, j, k] = [[], [], []],
                V = BigInt(0),
                N = BigInt(1),
                z = BigInt(2),
                H = BigInt(7),
                G = BigInt(256),
                W = BigInt(113);
            for (let e = 0, t = N, n = 1, r = 0; e < 24; e++) {
                ([n, r] = [r, (2 * n + 3 * r) % 5]), D.push(2 * (5 * r + n)), j.push((((e + 1) * (e + 2)) / 2) % 64);
                let o = V;
                for (let e = 0; e < 7; e++) (t = ((t << N) ^ ((t >> H) * W)) % G) & z && (o ^= N << ((N << BigInt(e)) - N));
                k.push(o);
            }
            let [$, B] = (function (e, t = !1) {
                    let n = new Uint32Array(e.length),
                        r = new Uint32Array(e.length);
                    for (let o = 0; o < e.length; o++) {
                        let { h: l, l: i } = (function (e, t = !1) {
                            return t ? { h: Number(e & E), l: Number((e >> M) & E) } : { h: 0 | Number((e >> M) & E), l: 0 | Number(e & E) };
                        })(e[o], t);
                        [n[o], r[o]] = [l, i];
                    }
                    return [n, r];
                })(k, !0),
                U = (e, t, n) => (n > 32 ? _(e, t, n) : P(e, t, n)),
                K = (e, t, n) => (n > 32 ? I(e, t, n) : F(e, t, n));
            class q extends O {
                constructor(e, t, n, r = !1, o = 24) {
                    if (
                        (super(),
                        (this.blockLen = e),
                        (this.suffix = t),
                        (this.outputLen = n),
                        (this.enableXOF = r),
                        (this.rounds = o),
                        (this.pos = 0),
                        (this.posOut = 0),
                        (this.finished = !1),
                        (this.destroyed = !1),
                        x(n),
                        0 >= this.blockLen || this.blockLen >= 200)
                    )
                        throw Error("Sha3 supports only keccak-f1600 function");
                    (this.state = new Uint8Array(200)), (this.state32 = L(this.state));
                }
                keccak() {
                    !(function (e, t = 24) {
                        let n = new Uint32Array(10);
                        for (let r = 24 - t; r < 24; r++) {
                            for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                            for (let t = 0; t < 10; t += 2) {
                                let r = (t + 8) % 10,
                                    o = (t + 2) % 10,
                                    l = n[o],
                                    i = n[o + 1],
                                    a = U(l, i, 1) ^ n[r],
                                    u = K(l, i, 1) ^ n[r + 1];
                                for (let n = 0; n < 50; n += 10) (e[t + n] ^= a), (e[t + n + 1] ^= u);
                            }
                            let t = e[2],
                                o = e[3];
                            for (let n = 0; n < 24; n++) {
                                let r = j[n],
                                    l = U(t, o, r),
                                    i = K(t, o, r),
                                    a = D[n];
                                (t = e[a]), (o = e[a + 1]), (e[a] = l), (e[a + 1] = i);
                            }
                            for (let t = 0; t < 50; t += 10) {
                                for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                            }
                            (e[0] ^= $[r]), (e[1] ^= B[r]);
                        }
                        n.fill(0);
                    })(this.state32, this.rounds),
                        (this.posOut = 0),
                        (this.pos = 0);
                }
                update(e) {
                    S(this);
                    let { blockLen: t, state: n } = this,
                        r = (e = A(e)).length;
                    for (let o = 0; o < r; ) {
                        let l = Math.min(t - this.pos, r - o);
                        for (let t = 0; t < l; t++) n[this.pos++] ^= e[o++];
                        this.pos === t && this.keccak();
                    }
                    return this;
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let { state: e, suffix: t, pos: n, blockLen: r } = this;
                    (e[n] ^= t), (128 & t) != 0 && n === r - 1 && this.keccak(), (e[r - 1] ^= 128), this.keccak();
                }
                writeInto(e) {
                    S(this, !1), R(e), this.finish();
                    let t = this.state,
                        { blockLen: n } = this;
                    for (let r = 0, o = e.length; r < o; ) {
                        this.posOut >= n && this.keccak();
                        let l = Math.min(n - this.posOut, o - r);
                        e.set(t.subarray(this.posOut, this.posOut + l), r), (this.posOut += l), (r += l);
                    }
                    return e;
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e);
                }
                xof(e) {
                    return x(e), this.xofInto(new Uint8Array(e));
                }
                digestInto(e) {
                    if (
                        (!(function (e, t) {
                            R(e);
                            let n = t.outputLen;
                            if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
                        })(e, this),
                        this.finished)
                    )
                        throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e;
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen));
                }
                destroy() {
                    (this.destroyed = !0), this.state.fill(0);
                }
                _cloneInto(e) {
                    let { blockLen: t, suffix: n, outputLen: r, rounds: o, enableXOF: l } = this;
                    return (
                        e || (e = new q(t, n, r, l, o)),
                        e.state32.set(this.state32),
                        (e.pos = this.pos),
                        (e.posOut = this.posOut),
                        (e.finished = this.finished),
                        (e.rounds = o),
                        (e.suffix = n),
                        (e.outputLen = r),
                        (e.enableXOF = l),
                        (e.destroyed = this.destroyed),
                        e
                    );
                }
            }
            let X = (function (e) {
                let t = (t) => e().update(A(t)).digest(),
                    n = e();
                return (t.outputLen = n.outputLen), (t.blockLen = n.blockLen), (t.create = () => e()), t;
            })(() => new q(136, 1, 32));
            var Y = n(4378),
                Z = n(8094);
            let J = new Y.k(8192);
            function Q(e, t) {
                if (J.has(`${e}.${t}`)) return J.get(`${e}.${t}`);
                let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    r = (function (e, t) {
                        let n = X(
                            i(e, { strict: !1 })
                                ? (function (e, t = {}) {
                                      return "number" == typeof e || "bigint" == typeof e
                                          ? y(v(e, t))
                                          : "boolean" == typeof e
                                          ? (function (e, t = {}) {
                                                let n = new Uint8Array(1);
                                                return ((n[0] = Number(e)), "number" == typeof t.size) ? (f(n, { size: t.size }), u(n, { size: t.size })) : n;
                                            })(e, t)
                                          : i(e)
                                          ? y(e, t)
                                          : C(e, t);
                                  })(e)
                                : e
                        );
                        return "bytes" === (t || "hex")
                            ? n
                            : (function (e, t = {}) {
                                  return "number" == typeof e || "bigint" == typeof e
                                      ? v(e, t)
                                      : "string" == typeof e
                                      ? (function (e, t = {}) {
                                            return p(m.encode(e), t);
                                        })(e, t)
                                      : "boolean" == typeof e
                                      ? (function (e, t = {}) {
                                            let n = `0x${Number(e)}`;
                                            return "number" == typeof t.size ? (f(n, { size: t.size }), u(n, { size: t.size })) : n;
                                        })(e, t)
                                      : p(e, t);
                              })(n);
                    })(C(n), "bytes"),
                    o = (t ? n.substring(`${t}0x`.length) : n).split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && o[e] && (o[e] = o[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && o[e + 1] && (o[e + 1] = o[e + 1].toUpperCase());
                let l = `0x${o.join("")}`;
                return J.set(`${e}.${t}`, l), l;
            }
            function ee(e, t) {
                if (!(0, Z.U)(e, { strict: !1 })) throw new l({ address: e });
                return Q(e, t);
            }
        },
        8094: function (e, t, n) {
            "use strict";
            n.d(t, {
                U: function () {
                    return a;
                },
            });
            var r = n(4378),
                o = n(4753);
            let l = /^0x[a-fA-F0-9]{40}$/,
                i = new r.k(8192);
            function a(e, t) {
                let { strict: n = !0 } = t ?? {},
                    r = `${e}.${n}`;
                if (i.has(r)) return i.get(r);
                let a = !!l.test(e) && (e.toLowerCase() === e || !n || (0, o.x)(e) === e);
                return i.set(r, a), a;
            }
        },
        4378: function (e, t, n) {
            "use strict";
            n.d(t, {
                k: function () {
                    return r;
                },
            });
            class r extends Map {
                constructor(e) {
                    super(), Object.defineProperty(this, "maxSize", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), (this.maxSize = e);
                }
                set(e, t) {
                    return super.set(e, t), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this;
                }
            }
        },
        9066: function (e, t, n) {
            "use strict";
            n.d(t, {
                Ee: function () {
                    return y;
                },
                NY: function () {
                    return C;
                },
                fC: function () {
                    return b;
                },
            });
            var r = n(7653),
                o = n(9933),
                l = n(523),
                i = n(1523),
                a = n(2122),
                u = n(7573),
                s = "Avatar",
                [c, d] = (0, o.b)(s),
                [f, g] = c(s),
                p = r.forwardRef((e, t) => {
                    let { __scopeAvatar: n, ...o } = e,
                        [l, i] = r.useState("idle");
                    return (0, u.jsx)(f, { scope: n, imageLoadingStatus: l, onImageLoadingStatusChange: i, children: (0, u.jsx)(a.WV.span, { ...o, ref: t }) });
                });
            p.displayName = s;
            var v = "AvatarImage",
                m = r.forwardRef((e, t) => {
                    let { __scopeAvatar: n, src: o, onLoadingStatusChange: s = () => {}, ...c } = e,
                        d = g(v, n),
                        f = (function (e, t) {
                            let [n, o] = r.useState("idle");
                            return (
                                (0, i.b)(() => {
                                    if (!e) {
                                        o("error");
                                        return;
                                    }
                                    let n = !0,
                                        r = new window.Image(),
                                        l = (e) => () => {
                                            n && o(e);
                                        };
                                    return (
                                        o("loading"),
                                        (r.onload = l("loaded")),
                                        (r.onerror = l("error")),
                                        (r.src = e),
                                        t && (r.referrerPolicy = t),
                                        () => {
                                            n = !1;
                                        }
                                    );
                                }, [e, t]),
                                n
                            );
                        })(o, c.referrerPolicy),
                        p = (0, l.W)((e) => {
                            s(e), d.onImageLoadingStatusChange(e);
                        });
                    return (
                        (0, i.b)(() => {
                            "idle" !== f && p(f);
                        }, [f, p]),
                        "loaded" === f ? (0, u.jsx)(a.WV.img, { ...c, ref: t, src: o }) : null
                    );
                });
            m.displayName = v;
            var h = "AvatarFallback",
                w = r.forwardRef((e, t) => {
                    let { __scopeAvatar: n, delayMs: o, ...l } = e,
                        i = g(h, n),
                        [s, c] = r.useState(void 0 === o);
                    return (
                        r.useEffect(() => {
                            if (void 0 !== o) {
                                let e = window.setTimeout(() => c(!0), o);
                                return () => window.clearTimeout(e);
                            }
                        }, [o]),
                        s && "loaded" !== i.imageLoadingStatus ? (0, u.jsx)(a.WV.span, { ...l, ref: t }) : null
                    );
                });
            w.displayName = h;
            var b = p,
                y = m,
                C = w;
        },
        1057: function (e, t, n) {
            "use strict";
            n.d(t, {
                fC: function () {
                    return S;
                },
                z$: function () {
                    return E;
                },
            });
            var r = n(7653),
                o = n(8709),
                l = n(9933),
                i = n(9764),
                a = n(7178),
                u = n(1403),
                s = n(5032),
                c = n(2163),
                d = n(2122),
                f = n(7573),
                g = "Checkbox",
                [p, v] = (0, l.b)(g),
                [m, h] = p(g),
                w = r.forwardRef((e, t) => {
                    let { __scopeCheckbox: n, name: l, checked: u, defaultChecked: s, required: c, disabled: g, value: p = "on", onCheckedChange: v, form: h, ...w } = e,
                        [b, y] = r.useState(null),
                        S = (0, o.e)(t, (e) => y(e)),
                        E = r.useRef(!1),
                        M = !b || h || !!b.closest("form"),
                        [P = !1, F] = (0, a.T)({ prop: u, defaultProp: s, onChange: v }),
                        _ = r.useRef(P);
                    return (
                        r.useEffect(() => {
                            let e = null == b ? void 0 : b.form;
                            if (e) {
                                let t = () => F(_.current);
                                return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
                            }
                        }, [b, F]),
                        (0, f.jsxs)(m, {
                            scope: n,
                            state: P,
                            disabled: g,
                            children: [
                                (0, f.jsx)(d.WV.button, {
                                    type: "button",
                                    role: "checkbox",
                                    "aria-checked": x(P) ? "mixed" : P,
                                    "aria-required": c,
                                    "data-state": R(P),
                                    "data-disabled": g ? "" : void 0,
                                    disabled: g,
                                    value: p,
                                    ...w,
                                    ref: S,
                                    onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                        "Enter" === e.key && e.preventDefault();
                                    }),
                                    onClick: (0, i.M)(e.onClick, (e) => {
                                        F((e) => !!x(e) || !e), M && ((E.current = e.isPropagationStopped()), E.current || e.stopPropagation());
                                    }),
                                }),
                                M && (0, f.jsx)(C, { control: b, bubbles: !E.current, name: l, value: p, checked: P, required: c, disabled: g, form: h, style: { transform: "translateX(-100%)" }, defaultChecked: !x(s) && s }),
                            ],
                        })
                    );
                });
            w.displayName = g;
            var b = "CheckboxIndicator",
                y = r.forwardRef((e, t) => {
                    let { __scopeCheckbox: n, forceMount: r, ...o } = e,
                        l = h(b, n);
                    return (0, f.jsx)(c.z, {
                        present: r || x(l.state) || !0 === l.state,
                        children: (0, f.jsx)(d.WV.span, { "data-state": R(l.state), "data-disabled": l.disabled ? "" : void 0, ...o, ref: t, style: { pointerEvents: "none", ...e.style } }),
                    });
                });
            y.displayName = b;
            var C = (e) => {
                let { control: t, checked: n, bubbles: o = !0, defaultChecked: l, ...i } = e,
                    a = r.useRef(null),
                    c = (0, u.D)(n),
                    d = (0, s.t)(t);
                r.useEffect(() => {
                    let e = a.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (c !== n && t) {
                        let r = new Event("click", { bubbles: o });
                        (e.indeterminate = x(n)), t.call(e, !x(n) && n), e.dispatchEvent(r);
                    }
                }, [c, n, o]);
                let g = r.useRef(!x(n) && n);
                return (0, f.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: null != l ? l : g.current,
                    ...i,
                    tabIndex: -1,
                    ref: a,
                    style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 },
                });
            };
            function x(e) {
                return "indeterminate" === e;
            }
            function R(e) {
                return x(e) ? "indeterminate" : e ? "checked" : "unchecked";
            }
            var S = w,
                E = y;
        },
        1735: function (e, t, n) {
            "use strict";
            n.d(t, {
                B: function () {
                    return a;
                },
            });
            var r = n(7653),
                o = n(7573),
                l = n(8709),
                i = n(4912);
            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (function (e, t = []) {
                        let n = [],
                            l = () => {
                                let t = n.map((e) => r.createContext(e));
                                return function (n) {
                                    let o = n?.[e] || t;
                                    return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                                };
                            };
                        return (
                            (l.scopeName = e),
                            [
                                function (t, l) {
                                    let i = r.createContext(l),
                                        a = n.length;
                                    function u(t) {
                                        let { scope: n, children: l, ...u } = t,
                                            s = n?.[e][a] || i,
                                            c = r.useMemo(() => u, Object.values(u));
                                        return (0, o.jsx)(s.Provider, { value: c, children: l });
                                    }
                                    return (
                                        (n = [...n, l]),
                                        (u.displayName = t + "Provider"),
                                        [
                                            u,
                                            function (n, o) {
                                                let u = o?.[e][a] || i,
                                                    s = r.useContext(u);
                                                if (s) return s;
                                                if (void 0 !== l) return l;
                                                throw Error(`\`${n}\` must be used within \`${t}\``);
                                            },
                                        ]
                                    );
                                },
                                (function (...e) {
                                    let t = e[0];
                                    if (1 === e.length) return t;
                                    let n = () => {
                                        let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                                        return function (e) {
                                            let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                                                let o = n(e)[`__scope${r}`];
                                                return { ...t, ...o };
                                            }, {});
                                            return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                                        };
                                    };
                                    return (n.scopeName = t.scopeName), n;
                                })(l, ...t),
                            ]
                        );
                    })(t),
                    [u, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
                    c = (e) => {
                        let { scope: t, children: n } = e,
                            l = r.useRef(null),
                            i = r.useRef(new Map()).current;
                        return (0, o.jsx)(u, { scope: t, itemMap: i, collectionRef: l, children: n });
                    };
                c.displayName = t;
                let d = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let { scope: n, children: r } = e,
                            a = s(d, n),
                            u = (0, l.e)(t, a.collectionRef);
                        return (0, o.jsx)(i.g7, { ref: u, children: r });
                    });
                f.displayName = d;
                let g = e + "CollectionItemSlot",
                    p = "data-radix-collection-item",
                    v = r.forwardRef((e, t) => {
                        let { scope: n, children: a, ...u } = e,
                            c = r.useRef(null),
                            d = (0, l.e)(t, c),
                            f = s(g, n);
                        return r.useEffect(() => (f.itemMap.set(c, { ref: c, ...u }), () => void f.itemMap.delete(c))), (0, o.jsx)(i.g7, { [p]: "", ref: d, children: a });
                    });
                return (
                    (v.displayName = g),
                    [
                        { Provider: c, Slot: f, ItemSlot: v },
                        function (t) {
                            let n = s(e + "CollectionConsumer", t);
                            return r.useCallback(() => {
                                let e = n.collectionRef.current;
                                if (!e) return [];
                                let t = Array.from(e.querySelectorAll("[".concat(p, "]")));
                                return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            }, [n.collectionRef, n.itemMap]);
                        },
                        a,
                    ]
                );
            }
        },
        791: function (e, t, n) {
            "use strict";
            n.d(t, {
                oC: function () {
                    return e5;
                },
                VY: function () {
                    return e2;
                },
                ZA: function () {
                    return e3;
                },
                ck: function () {
                    return e9;
                },
                wU: function () {
                    return e4;
                },
                __: function () {
                    return e7;
                },
                Uv: function () {
                    return e1;
                },
                Ee: function () {
                    return e8;
                },
                Rk: function () {
                    return e6;
                },
                fC: function () {
                    return eQ;
                },
                Z0: function () {
                    return te;
                },
                Tr: function () {
                    return tt;
                },
                tu: function () {
                    return tr;
                },
                fF: function () {
                    return tn;
                },
                xz: function () {
                    return e0;
                },
            });
            var r = n(7653),
                o = n(9764),
                l = n(8709),
                i = n(9933),
                a = n(7178),
                u = n(2122),
                s = n(1735),
                c = n(1004),
                d = n(3089),
                f = n(307),
                g = n(8083),
                p = n(7321),
                v = n(3546),
                m = n(6337),
                h = n(2163),
                w = n(3222),
                b = n(4912),
                y = n(523),
                C = n(7130),
                x = n(5399),
                R = n(7573),
                S = ["Enter", " "],
                E = ["ArrowUp", "PageDown", "End"],
                M = ["ArrowDown", "PageUp", "Home", ...E],
                P = { ltr: [...S, "ArrowRight"], rtl: [...S, "ArrowLeft"] },
                F = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
                _ = "Menu",
                [I, T, L] = (0, s.B)(_),
                [A, O] = (0, i.b)(_, [L, v.D7, w.Pc]),
                D = (0, v.D7)(),
                j = (0, w.Pc)(),
                [k, V] = A(_),
                [N, z] = A(_),
                H = (e) => {
                    let { __scopeMenu: t, open: n = !1, children: o, dir: l, onOpenChange: i, modal: a = !0 } = e,
                        u = D(t),
                        [s, d] = r.useState(null),
                        f = r.useRef(!1),
                        g = (0, y.W)(i),
                        p = (0, c.gm)(l);
                    return (
                        r.useEffect(() => {
                            let e = () => {
                                    (f.current = !0), document.addEventListener("pointerdown", t, { capture: !0, once: !0 }), document.addEventListener("pointermove", t, { capture: !0, once: !0 });
                                },
                                t = () => (f.current = !1);
                            return (
                                document.addEventListener("keydown", e, { capture: !0 }),
                                () => {
                                    document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
                                }
                            );
                        }, []),
                        (0, R.jsx)(v.fC, {
                            ...u,
                            children: (0, R.jsx)(k, {
                                scope: t,
                                open: n,
                                onOpenChange: g,
                                content: s,
                                onContentChange: d,
                                children: (0, R.jsx)(N, { scope: t, onClose: r.useCallback(() => g(!1), [g]), isUsingKeyboardRef: f, dir: p, modal: a, children: o }),
                            }),
                        })
                    );
                };
            H.displayName = _;
            var G = r.forwardRef((e, t) => {
                let { __scopeMenu: n, ...r } = e,
                    o = D(n);
                return (0, R.jsx)(v.ee, { ...o, ...r, ref: t });
            });
            G.displayName = "MenuAnchor";
            var W = "MenuPortal",
                [$, B] = A(W, { forceMount: void 0 }),
                U = (e) => {
                    let { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
                        l = V(W, t);
                    return (0, R.jsx)($, { scope: t, forceMount: n, children: (0, R.jsx)(h.z, { present: n || l.open, children: (0, R.jsx)(m.h, { asChild: !0, container: o, children: r }) }) });
                };
            U.displayName = W;
            var K = "MenuContent",
                [q, X] = A(K),
                Y = r.forwardRef((e, t) => {
                    let n = B(K, e.__scopeMenu),
                        { forceMount: r = n.forceMount, ...o } = e,
                        l = V(K, e.__scopeMenu),
                        i = z(K, e.__scopeMenu);
                    return (0, R.jsx)(I.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, R.jsx)(h.z, { present: r || l.open, children: (0, R.jsx)(I.Slot, { scope: e.__scopeMenu, children: i.modal ? (0, R.jsx)(Z, { ...o, ref: t }) : (0, R.jsx)(J, { ...o, ref: t }) }) }),
                    });
                }),
                Z = r.forwardRef((e, t) => {
                    let n = V(K, e.__scopeMenu),
                        i = r.useRef(null),
                        a = (0, l.e)(t, i);
                    return (
                        r.useEffect(() => {
                            let e = i.current;
                            if (e) return (0, C.Ry)(e);
                        }, []),
                        (0, R.jsx)(Q, {
                            ...e,
                            ref: a,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: n.open,
                            disableOutsideScroll: !0,
                            onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
                            onDismiss: () => n.onOpenChange(!1),
                        })
                    );
                }),
                J = r.forwardRef((e, t) => {
                    let n = V(K, e.__scopeMenu);
                    return (0, R.jsx)(Q, { ...e, ref: t, trapFocus: !1, disableOutsidePointerEvents: !1, disableOutsideScroll: !1, onDismiss: () => n.onOpenChange(!1) });
                }),
                Q = r.forwardRef((e, t) => {
                    let {
                            __scopeMenu: n,
                            loop: i = !1,
                            trapFocus: a,
                            onOpenAutoFocus: u,
                            onCloseAutoFocus: s,
                            disableOutsidePointerEvents: c,
                            onEntryFocus: p,
                            onEscapeKeyDown: m,
                            onPointerDownOutside: h,
                            onFocusOutside: y,
                            onInteractOutside: C,
                            onDismiss: S,
                            disableOutsideScroll: P,
                            ...F
                        } = e,
                        _ = V(K, n),
                        I = z(K, n),
                        L = D(n),
                        A = j(n),
                        O = T(n),
                        [k, N] = r.useState(null),
                        H = r.useRef(null),
                        G = (0, l.e)(t, H, _.onContentChange),
                        W = r.useRef(0),
                        $ = r.useRef(""),
                        B = r.useRef(0),
                        U = r.useRef(null),
                        X = r.useRef("right"),
                        Y = r.useRef(0),
                        Z = P ? x.Z : r.Fragment,
                        J = P ? { as: b.g7, allowPinchZoom: !0 } : void 0,
                        Q = (e) => {
                            var t, n;
                            let r = $.current + e,
                                o = O().filter((e) => !e.disabled),
                                l = document.activeElement,
                                i = null === (t = o.find((e) => e.ref.current === l)) || void 0 === t ? void 0 : t.textValue,
                                a = (function (e, t, n) {
                                    var r;
                                    let o = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
                                        l = ((r = Math.max(n ? e.indexOf(n) : -1, 0)), e.map((t, n) => e[(r + n) % e.length]));
                                    1 === o.length && (l = l.filter((e) => e !== n));
                                    let i = l.find((e) => e.toLowerCase().startsWith(o.toLowerCase()));
                                    return i !== n ? i : void 0;
                                })(
                                    o.map((e) => e.textValue),
                                    r,
                                    i
                                ),
                                u = null === (n = o.find((e) => e.textValue === a)) || void 0 === n ? void 0 : n.ref.current;
                            !(function e(t) {
                                ($.current = t), window.clearTimeout(W.current), "" !== t && (W.current = window.setTimeout(() => e(""), 1e3));
                            })(r),
                                u && setTimeout(() => u.focus());
                        };
                    r.useEffect(() => () => window.clearTimeout(W.current), []), (0, f.EW)();
                    let ee = r.useCallback((e) => {
                        var t, n, r;
                        return (
                            X.current === (null === (t = U.current) || void 0 === t ? void 0 : t.side) &&
                            !!(r = null === (n = U.current) || void 0 === n ? void 0 : n.area) &&
                            (function (e, t) {
                                let { x: n, y: r } = e,
                                    o = !1;
                                for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                                    let i = t[e].x,
                                        a = t[e].y,
                                        u = t[l].x,
                                        s = t[l].y;
                                    a > r != s > r && n < ((u - i) * (r - a)) / (s - a) + i && (o = !o);
                                }
                                return o;
                            })({ x: e.clientX, y: e.clientY }, r)
                        );
                    }, []);
                    return (0, R.jsx)(q, {
                        scope: n,
                        searchRef: $,
                        onItemEnter: r.useCallback(
                            (e) => {
                                ee(e) && e.preventDefault();
                            },
                            [ee]
                        ),
                        onItemLeave: r.useCallback(
                            (e) => {
                                var t;
                                ee(e) || (null === (t = H.current) || void 0 === t || t.focus(), N(null));
                            },
                            [ee]
                        ),
                        onTriggerLeave: r.useCallback(
                            (e) => {
                                ee(e) && e.preventDefault();
                            },
                            [ee]
                        ),
                        pointerGraceTimerRef: B,
                        onPointerGraceIntentChange: r.useCallback((e) => {
                            U.current = e;
                        }, []),
                        children: (0, R.jsx)(Z, {
                            ...J,
                            children: (0, R.jsx)(g.M, {
                                asChild: !0,
                                trapped: a,
                                onMountAutoFocus: (0, o.M)(u, (e) => {
                                    var t;
                                    e.preventDefault(), null === (t = H.current) || void 0 === t || t.focus({ preventScroll: !0 });
                                }),
                                onUnmountAutoFocus: s,
                                children: (0, R.jsx)(d.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: c,
                                    onEscapeKeyDown: m,
                                    onPointerDownOutside: h,
                                    onFocusOutside: y,
                                    onInteractOutside: C,
                                    onDismiss: S,
                                    children: (0, R.jsx)(w.fC, {
                                        asChild: !0,
                                        ...A,
                                        dir: I.dir,
                                        orientation: "vertical",
                                        loop: i,
                                        currentTabStopId: k,
                                        onCurrentTabStopIdChange: N,
                                        onEntryFocus: (0, o.M)(p, (e) => {
                                            I.isUsingKeyboardRef.current || e.preventDefault();
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, R.jsx)(v.VY, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": eP(_.open),
                                            "data-radix-menu-content": "",
                                            dir: I.dir,
                                            ...L,
                                            ...F,
                                            ref: G,
                                            style: { outline: "none", ...F.style },
                                            onKeyDown: (0, o.M)(F.onKeyDown, (e) => {
                                                let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    n = e.ctrlKey || e.altKey || e.metaKey,
                                                    r = 1 === e.key.length;
                                                t && ("Tab" === e.key && e.preventDefault(), !n && r && Q(e.key));
                                                let o = H.current;
                                                if (e.target !== o || !M.includes(e.key)) return;
                                                e.preventDefault();
                                                let l = O()
                                                    .filter((e) => !e.disabled)
                                                    .map((e) => e.ref.current);
                                                E.includes(e.key) && l.reverse(),
                                                    (function (e) {
                                                        let t = document.activeElement;
                                                        for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
                                                    })(l);
                                            }),
                                            onBlur: (0, o.M)(e.onBlur, (e) => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(W.current), ($.current = ""));
                                            }),
                                            onPointerMove: (0, o.M)(
                                                e.onPointerMove,
                                                eI((e) => {
                                                    let t = e.target,
                                                        n = Y.current !== e.clientX;
                                                    if (e.currentTarget.contains(t) && n) {
                                                        let t = e.clientX > Y.current ? "right" : "left";
                                                        (X.current = t), (Y.current = e.clientX);
                                                    }
                                                })
                                            ),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            Y.displayName = K;
            var ee = r.forwardRef((e, t) => {
                let { __scopeMenu: n, ...r } = e;
                return (0, R.jsx)(u.WV.div, { role: "group", ...r, ref: t });
            });
            ee.displayName = "MenuGroup";
            var et = r.forwardRef((e, t) => {
                let { __scopeMenu: n, ...r } = e;
                return (0, R.jsx)(u.WV.div, { ...r, ref: t });
            });
            et.displayName = "MenuLabel";
            var en = "MenuItem",
                er = "menu.itemSelect",
                eo = r.forwardRef((e, t) => {
                    let { disabled: n = !1, onSelect: i, ...a } = e,
                        s = r.useRef(null),
                        c = z(en, e.__scopeMenu),
                        d = X(en, e.__scopeMenu),
                        f = (0, l.e)(t, s),
                        g = r.useRef(!1);
                    return (0, R.jsx)(el, {
                        ...a,
                        ref: f,
                        disabled: n,
                        onClick: (0, o.M)(e.onClick, () => {
                            let e = s.current;
                            if (!n && e) {
                                let t = new CustomEvent(er, { bubbles: !0, cancelable: !0 });
                                e.addEventListener(er, (e) => (null == i ? void 0 : i(e)), { once: !0 }), (0, u.jH)(e, t), t.defaultPrevented ? (g.current = !1) : c.onClose();
                            }
                        }),
                        onPointerDown: (t) => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), (g.current = !0);
                        },
                        onPointerUp: (0, o.M)(e.onPointerUp, (e) => {
                            var t;
                            g.current || null === (t = e.currentTarget) || void 0 === t || t.click();
                        }),
                        onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                            let t = "" !== d.searchRef.current;
                            !n && (!t || " " !== e.key) && S.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
                        }),
                    });
                });
            eo.displayName = en;
            var el = r.forwardRef((e, t) => {
                    let { __scopeMenu: n, disabled: i = !1, textValue: a, ...s } = e,
                        c = X(en, n),
                        d = j(n),
                        f = r.useRef(null),
                        g = (0, l.e)(t, f),
                        [p, v] = r.useState(!1),
                        [m, h] = r.useState("");
                    return (
                        r.useEffect(() => {
                            let e = f.current;
                            if (e) {
                                var t;
                                h((null !== (t = e.textContent) && void 0 !== t ? t : "").trim());
                            }
                        }, [s.children]),
                        (0, R.jsx)(I.ItemSlot, {
                            scope: n,
                            disabled: i,
                            textValue: null != a ? a : m,
                            children: (0, R.jsx)(w.ck, {
                                asChild: !0,
                                ...d,
                                focusable: !i,
                                children: (0, R.jsx)(u.WV.div, {
                                    role: "menuitem",
                                    "data-highlighted": p ? "" : void 0,
                                    "aria-disabled": i || void 0,
                                    "data-disabled": i ? "" : void 0,
                                    ...s,
                                    ref: g,
                                    onPointerMove: (0, o.M)(
                                        e.onPointerMove,
                                        eI((e) => {
                                            i ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                                        })
                                    ),
                                    onPointerLeave: (0, o.M)(
                                        e.onPointerLeave,
                                        eI((e) => c.onItemLeave(e))
                                    ),
                                    onFocus: (0, o.M)(e.onFocus, () => v(!0)),
                                    onBlur: (0, o.M)(e.onBlur, () => v(!1)),
                                }),
                            }),
                        })
                    );
                }),
                ei = r.forwardRef((e, t) => {
                    let { checked: n = !1, onCheckedChange: r, ...l } = e;
                    return (0, R.jsx)(ep, {
                        scope: e.__scopeMenu,
                        checked: n,
                        children: (0, R.jsx)(eo, {
                            role: "menuitemcheckbox",
                            "aria-checked": eF(n) ? "mixed" : n,
                            ...l,
                            ref: t,
                            "data-state": e_(n),
                            onSelect: (0, o.M)(l.onSelect, () => (null == r ? void 0 : r(!!eF(n) || !n)), { checkForDefaultPrevented: !1 }),
                        }),
                    });
                });
            ei.displayName = "MenuCheckboxItem";
            var ea = "MenuRadioGroup",
                [eu, es] = A(ea, { value: void 0, onValueChange: () => {} }),
                ec = r.forwardRef((e, t) => {
                    let { value: n, onValueChange: r, ...o } = e,
                        l = (0, y.W)(r);
                    return (0, R.jsx)(eu, { scope: e.__scopeMenu, value: n, onValueChange: l, children: (0, R.jsx)(ee, { ...o, ref: t }) });
                });
            ec.displayName = ea;
            var ed = "MenuRadioItem",
                ef = r.forwardRef((e, t) => {
                    let { value: n, ...r } = e,
                        l = es(ed, e.__scopeMenu),
                        i = n === l.value;
                    return (0, R.jsx)(ep, {
                        scope: e.__scopeMenu,
                        checked: i,
                        children: (0, R.jsx)(eo, {
                            role: "menuitemradio",
                            "aria-checked": i,
                            ...r,
                            ref: t,
                            "data-state": e_(i),
                            onSelect: (0, o.M)(
                                r.onSelect,
                                () => {
                                    var e;
                                    return null === (e = l.onValueChange) || void 0 === e ? void 0 : e.call(l, n);
                                },
                                { checkForDefaultPrevented: !1 }
                            ),
                        }),
                    });
                });
            ef.displayName = ed;
            var eg = "MenuItemIndicator",
                [ep, ev] = A(eg, { checked: !1 }),
                em = r.forwardRef((e, t) => {
                    let { __scopeMenu: n, forceMount: r, ...o } = e,
                        l = ev(eg, n);
                    return (0, R.jsx)(h.z, { present: r || eF(l.checked) || !0 === l.checked, children: (0, R.jsx)(u.WV.span, { ...o, ref: t, "data-state": e_(l.checked) }) });
                });
            em.displayName = eg;
            var eh = r.forwardRef((e, t) => {
                let { __scopeMenu: n, ...r } = e;
                return (0, R.jsx)(u.WV.div, { role: "separator", "aria-orientation": "horizontal", ...r, ref: t });
            });
            eh.displayName = "MenuSeparator";
            var ew = r.forwardRef((e, t) => {
                let { __scopeMenu: n, ...r } = e,
                    o = D(n);
                return (0, R.jsx)(v.Eh, { ...o, ...r, ref: t });
            });
            ew.displayName = "MenuArrow";
            var eb = "MenuSub",
                [ey, eC] = A(eb),
                ex = (e) => {
                    let { __scopeMenu: t, children: n, open: o = !1, onOpenChange: l } = e,
                        i = V(eb, t),
                        a = D(t),
                        [u, s] = r.useState(null),
                        [c, d] = r.useState(null),
                        f = (0, y.W)(l);
                    return (
                        r.useEffect(() => (!1 === i.open && f(!1), () => f(!1)), [i.open, f]),
                        (0, R.jsx)(v.fC, {
                            ...a,
                            children: (0, R.jsx)(k, {
                                scope: t,
                                open: o,
                                onOpenChange: f,
                                content: c,
                                onContentChange: d,
                                children: (0, R.jsx)(ey, { scope: t, contentId: (0, p.M)(), triggerId: (0, p.M)(), trigger: u, onTriggerChange: s, children: n }),
                            }),
                        })
                    );
                };
            ex.displayName = eb;
            var eR = "MenuSubTrigger",
                eS = r.forwardRef((e, t) => {
                    let n = V(eR, e.__scopeMenu),
                        i = z(eR, e.__scopeMenu),
                        a = eC(eR, e.__scopeMenu),
                        u = X(eR, e.__scopeMenu),
                        s = r.useRef(null),
                        { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = u,
                        f = { __scopeMenu: e.__scopeMenu },
                        g = r.useCallback(() => {
                            s.current && window.clearTimeout(s.current), (s.current = null);
                        }, []);
                    return (
                        r.useEffect(() => g, [g]),
                        r.useEffect(() => {
                            let e = c.current;
                            return () => {
                                window.clearTimeout(e), d(null);
                            };
                        }, [c, d]),
                        (0, R.jsx)(G, {
                            asChild: !0,
                            ...f,
                            children: (0, R.jsx)(el, {
                                id: a.triggerId,
                                "aria-haspopup": "menu",
                                "aria-expanded": n.open,
                                "aria-controls": a.contentId,
                                "data-state": eP(n.open),
                                ...e,
                                ref: (0, l.F)(t, a.onTriggerChange),
                                onClick: (t) => {
                                    var r;
                                    null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                                },
                                onPointerMove: (0, o.M)(
                                    e.onPointerMove,
                                    eI((t) => {
                                        u.onItemEnter(t),
                                            t.defaultPrevented ||
                                                e.disabled ||
                                                n.open ||
                                                s.current ||
                                                (u.onPointerGraceIntentChange(null),
                                                (s.current = window.setTimeout(() => {
                                                    n.onOpenChange(!0), g();
                                                }, 100)));
                                    })
                                ),
                                onPointerLeave: (0, o.M)(
                                    e.onPointerLeave,
                                    eI((e) => {
                                        var t, r;
                                        g();
                                        let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                                        if (o) {
                                            let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                                l = "right" === t,
                                                i = o[l ? "left" : "right"],
                                                a = o[l ? "right" : "left"];
                                            u.onPointerGraceIntentChange({
                                                area: [
                                                    { x: e.clientX + (l ? -5 : 5), y: e.clientY },
                                                    { x: i, y: o.top },
                                                    { x: a, y: o.top },
                                                    { x: a, y: o.bottom },
                                                    { x: i, y: o.bottom },
                                                ],
                                                side: t,
                                            }),
                                                window.clearTimeout(c.current),
                                                (c.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300));
                                        } else {
                                            if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                                            u.onPointerGraceIntentChange(null);
                                        }
                                    })
                                ),
                                onKeyDown: (0, o.M)(e.onKeyDown, (t) => {
                                    let r = "" !== u.searchRef.current;
                                    if (!e.disabled && (!r || " " !== t.key) && P[i.dir].includes(t.key)) {
                                        var o;
                                        n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault();
                                    }
                                }),
                            }),
                        })
                    );
                });
            eS.displayName = eR;
            var eE = "MenuSubContent",
                eM = r.forwardRef((e, t) => {
                    let n = B(K, e.__scopeMenu),
                        { forceMount: i = n.forceMount, ...a } = e,
                        u = V(K, e.__scopeMenu),
                        s = z(K, e.__scopeMenu),
                        c = eC(eE, e.__scopeMenu),
                        d = r.useRef(null),
                        f = (0, l.e)(t, d);
                    return (0, R.jsx)(I.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, R.jsx)(h.z, {
                            present: i || u.open,
                            children: (0, R.jsx)(I.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, R.jsx)(Q, {
                                    id: c.contentId,
                                    "aria-labelledby": c.triggerId,
                                    ...a,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === s.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: (e) => {
                                        var t;
                                        s.isUsingKeyboardRef.current && (null === (t = d.current) || void 0 === t || t.focus()), e.preventDefault();
                                    },
                                    onCloseAutoFocus: (e) => e.preventDefault(),
                                    onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => {
                                        e.target !== c.trigger && u.onOpenChange(!1);
                                    }),
                                    onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, (e) => {
                                        s.onClose(), e.preventDefault();
                                    }),
                                    onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                                        let t = e.currentTarget.contains(e.target),
                                            n = F[s.dir].includes(e.key);
                                        if (t && n) {
                                            var r;
                                            u.onOpenChange(!1), null === (r = c.trigger) || void 0 === r || r.focus(), e.preventDefault();
                                        }
                                    }),
                                }),
                            }),
                        }),
                    });
                });
            function eP(e) {
                return e ? "open" : "closed";
            }
            function eF(e) {
                return "indeterminate" === e;
            }
            function e_(e) {
                return eF(e) ? "indeterminate" : e ? "checked" : "unchecked";
            }
            function eI(e) {
                return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
            }
            eM.displayName = eE;
            var eT = "DropdownMenu",
                [eL, eA] = (0, i.b)(eT, [O]),
                eO = O(),
                [eD, ej] = eL(eT),
                ek = (e) => {
                    let { __scopeDropdownMenu: t, children: n, dir: o, open: l, defaultOpen: i, onOpenChange: u, modal: s = !0 } = e,
                        c = eO(t),
                        d = r.useRef(null),
                        [f = !1, g] = (0, a.T)({ prop: l, defaultProp: i, onChange: u });
                    return (0, R.jsx)(eD, {
                        scope: t,
                        triggerId: (0, p.M)(),
                        triggerRef: d,
                        contentId: (0, p.M)(),
                        open: f,
                        onOpenChange: g,
                        onOpenToggle: r.useCallback(() => g((e) => !e), [g]),
                        modal: s,
                        children: (0, R.jsx)(H, { ...c, open: f, onOpenChange: g, dir: o, modal: s, children: n }),
                    });
                };
            ek.displayName = eT;
            var eV = "DropdownMenuTrigger",
                eN = r.forwardRef((e, t) => {
                    let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
                        a = ej(eV, n),
                        s = eO(n);
                    return (0, R.jsx)(G, {
                        asChild: !0,
                        ...s,
                        children: (0, R.jsx)(u.WV.button, {
                            type: "button",
                            id: a.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": a.open,
                            "aria-controls": a.open ? a.contentId : void 0,
                            "data-state": a.open ? "open" : "closed",
                            "data-disabled": r ? "" : void 0,
                            disabled: r,
                            ...i,
                            ref: (0, l.F)(t, a.triggerRef),
                            onPointerDown: (0, o.M)(e.onPointerDown, (e) => {
                                r || 0 !== e.button || !1 !== e.ctrlKey || (a.onOpenToggle(), a.open || e.preventDefault());
                            }),
                            onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                                !r && (["Enter", " "].includes(e.key) && a.onOpenToggle(), "ArrowDown" === e.key && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault());
                            }),
                        }),
                    });
                });
            eN.displayName = eV;
            var ez = (e) => {
                let { __scopeDropdownMenu: t, ...n } = e,
                    r = eO(t);
                return (0, R.jsx)(U, { ...r, ...n });
            };
            ez.displayName = "DropdownMenuPortal";
            var eH = "DropdownMenuContent",
                eG = r.forwardRef((e, t) => {
                    let { __scopeDropdownMenu: n, ...l } = e,
                        i = ej(eH, n),
                        a = eO(n),
                        u = r.useRef(!1);
                    return (0, R.jsx)(Y, {
                        id: i.contentId,
                        "aria-labelledby": i.triggerId,
                        ...a,
                        ...l,
                        ref: t,
                        onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                            var t;
                            u.current || null === (t = i.triggerRef.current) || void 0 === t || t.focus(), (u.current = !1), e.preventDefault();
                        }),
                        onInteractOutside: (0, o.M)(e.onInteractOutside, (e) => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!i.modal || r) && (u.current = !0);
                        }),
                        style: {
                            ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
                        },
                    });
                });
            eG.displayName = eH;
            var eW = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(ee, { ...o, ...r, ref: t });
            });
            eW.displayName = "DropdownMenuGroup";
            var e$ = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(et, { ...o, ...r, ref: t });
            });
            e$.displayName = "DropdownMenuLabel";
            var eB = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(eo, { ...o, ...r, ref: t });
            });
            eB.displayName = "DropdownMenuItem";
            var eU = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(ei, { ...o, ...r, ref: t });
            });
            eU.displayName = "DropdownMenuCheckboxItem";
            var eK = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(ec, { ...o, ...r, ref: t });
            });
            eK.displayName = "DropdownMenuRadioGroup";
            var eq = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(ef, { ...o, ...r, ref: t });
            });
            eq.displayName = "DropdownMenuRadioItem";
            var eX = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(em, { ...o, ...r, ref: t });
            });
            eX.displayName = "DropdownMenuItemIndicator";
            var eY = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(eh, { ...o, ...r, ref: t });
            });
            (eY.displayName = "DropdownMenuSeparator"),
                (r.forwardRef((e, t) => {
                    let { __scopeDropdownMenu: n, ...r } = e,
                        o = eO(n);
                    return (0, R.jsx)(ew, { ...o, ...r, ref: t });
                }).displayName = "DropdownMenuArrow");
            var eZ = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(eS, { ...o, ...r, ref: t });
            });
            eZ.displayName = "DropdownMenuSubTrigger";
            var eJ = r.forwardRef((e, t) => {
                let { __scopeDropdownMenu: n, ...r } = e,
                    o = eO(n);
                return (0, R.jsx)(eM, {
                    ...o,
                    ...r,
                    ref: t,
                    style: {
                        ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                });
            });
            eJ.displayName = "DropdownMenuSubContent";
            var eQ = ek,
                e0 = eN,
                e1 = ez,
                e2 = eG,
                e3 = eW,
                e7 = e$,
                e9 = eB,
                e5 = eU,
                e8 = eK,
                e6 = eq,
                e4 = eX,
                te = eY,
                tt = (e) => {
                    let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: l } = e,
                        i = eO(t),
                        [u = !1, s] = (0, a.T)({ prop: r, defaultProp: l, onChange: o });
                    return (0, R.jsx)(ex, { ...i, open: u, onOpenChange: s, children: n });
                },
                tn = eZ,
                tr = eJ;
        },
        1936: function (e, t, n) {
            "use strict";
            n.d(t, {
                VY: function () {
                    return T;
                },
                fC: function () {
                    return _;
                },
                xz: function () {
                    return I;
                },
            });
            var r,
                o = n(7653),
                l = n(9764),
                i = n(9933),
                a = n(7178),
                u = n(8709),
                s = n(3546),
                c = (n(6337), n(2163)),
                d = n(2122),
                f = n(3089),
                g = n(7573),
                p = "HoverCard",
                [v, m] = (0, i.b)(p, [s.D7]),
                h = (0, s.D7)(),
                [w, b] = v(p),
                y = (e) => {
                    let { __scopeHoverCard: t, children: n, open: r, defaultOpen: l, onOpenChange: i, openDelay: u = 700, closeDelay: c = 300 } = e,
                        d = h(t),
                        f = o.useRef(0),
                        p = o.useRef(0),
                        v = o.useRef(!1),
                        m = o.useRef(!1),
                        [b = !1, y] = (0, a.T)({ prop: r, defaultProp: l, onChange: i }),
                        C = o.useCallback(() => {
                            clearTimeout(p.current), (f.current = window.setTimeout(() => y(!0), u));
                        }, [u, y]),
                        x = o.useCallback(() => {
                            clearTimeout(f.current), v.current || m.current || (p.current = window.setTimeout(() => y(!1), c));
                        }, [c, y]),
                        R = o.useCallback(() => y(!1), [y]);
                    return (
                        o.useEffect(
                            () => () => {
                                clearTimeout(f.current), clearTimeout(p.current);
                            },
                            []
                        ),
                        (0, g.jsx)(w, { scope: t, open: b, onOpenChange: y, onOpen: C, onClose: x, onDismiss: R, hasSelectionRef: v, isPointerDownOnContentRef: m, children: (0, g.jsx)(s.fC, { ...d, children: n }) })
                    );
                };
            y.displayName = p;
            var C = "HoverCardTrigger",
                x = o.forwardRef((e, t) => {
                    let { __scopeHoverCard: n, ...r } = e,
                        o = b(C, n),
                        i = h(n);
                    return (0, g.jsx)(s.ee, {
                        asChild: !0,
                        ...i,
                        children: (0, g.jsx)(d.WV.a, {
                            "data-state": o.open ? "open" : "closed",
                            ...r,
                            ref: t,
                            onPointerEnter: (0, l.M)(e.onPointerEnter, F(o.onOpen)),
                            onPointerLeave: (0, l.M)(e.onPointerLeave, F(o.onClose)),
                            onFocus: (0, l.M)(e.onFocus, o.onOpen),
                            onBlur: (0, l.M)(e.onBlur, o.onClose),
                            onTouchStart: (0, l.M)(e.onTouchStart, (e) => e.preventDefault()),
                        }),
                    });
                });
            x.displayName = C;
            var [R, S] = v("HoverCardPortal", { forceMount: void 0 }),
                E = "HoverCardContent",
                M = o.forwardRef((e, t) => {
                    let n = S(E, e.__scopeHoverCard),
                        { forceMount: r = n.forceMount, ...o } = e,
                        i = b(E, e.__scopeHoverCard);
                    return (0, g.jsx)(c.z, {
                        present: r || i.open,
                        children: (0, g.jsx)(P, { "data-state": i.open ? "open" : "closed", ...o, onPointerEnter: (0, l.M)(e.onPointerEnter, F(i.onOpen)), onPointerLeave: (0, l.M)(e.onPointerLeave, F(i.onClose)), ref: t }),
                    });
                });
            M.displayName = E;
            var P = o.forwardRef((e, t) => {
                let { __scopeHoverCard: n, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: c, onInteractOutside: d, ...p } = e,
                    v = b(E, n),
                    m = h(n),
                    w = o.useRef(null),
                    y = (0, u.e)(t, w),
                    [C, x] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        if (C) {
                            let e = document.body;
                            return (
                                (r = e.style.userSelect || e.style.webkitUserSelect),
                                (e.style.userSelect = "none"),
                                (e.style.webkitUserSelect = "none"),
                                () => {
                                    (e.style.userSelect = r), (e.style.webkitUserSelect = r);
                                }
                            );
                        }
                    }, [C]),
                    o.useEffect(() => {
                        if (w.current) {
                            let e = () => {
                                x(!1),
                                    (v.isPointerDownOnContentRef.current = !1),
                                    setTimeout(() => {
                                        var e;
                                        (null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString()) !== "" && (v.hasSelectionRef.current = !0);
                                    });
                            };
                            return (
                                document.addEventListener("pointerup", e),
                                () => {
                                    document.removeEventListener("pointerup", e), (v.hasSelectionRef.current = !1), (v.isPointerDownOnContentRef.current = !1);
                                }
                            );
                        }
                    }, [v.isPointerDownOnContentRef, v.hasSelectionRef]),
                    o.useEffect(() => {
                        w.current &&
                            (function (e) {
                                let t = [],
                                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => (e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
                                for (; n.nextNode(); ) t.push(n.currentNode);
                                return t;
                            })(w.current).forEach((e) => e.setAttribute("tabindex", "-1"));
                    }),
                    (0, g.jsx)(f.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onInteractOutside: d,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: a,
                        onFocusOutside: (0, l.M)(c, (e) => {
                            e.preventDefault();
                        }),
                        onDismiss: v.onDismiss,
                        children: (0, g.jsx)(s.VY, {
                            ...m,
                            ...p,
                            onPointerDown: (0, l.M)(p.onPointerDown, (e) => {
                                e.currentTarget.contains(e.target) && x(!0), (v.hasSelectionRef.current = !1), (v.isPointerDownOnContentRef.current = !0);
                            }),
                            ref: y,
                            style: {
                                ...p.style,
                                userSelect: C ? "text" : void 0,
                                WebkitUserSelect: C ? "text" : void 0,
                                "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)",
                            },
                        }),
                    })
                );
            });
            function F(e) {
                return (t) => ("touch" === t.pointerType ? void 0 : e());
            }
            o.forwardRef((e, t) => {
                let { __scopeHoverCard: n, ...r } = e,
                    o = h(n);
                return (0, g.jsx)(s.Eh, { ...o, ...r, ref: t });
            }).displayName = "HoverCardArrow";
            var _ = y,
                I = x,
                T = M;
        },
        8704: function (e, t, n) {
            "use strict";
            n.d(t, {
                VY: function () {
                    return eb;
                },
                aV: function () {
                    return ep;
                },
                ck: function () {
                    return ev;
                },
                fC: function () {
                    return eg;
                },
                l_: function () {
                    return ey;
                },
                rU: function () {
                    return eh;
                },
                xz: function () {
                    return em;
                },
                z$: function () {
                    return ew;
                },
            });
            var r = n(7653),
                o = n(3458),
                l = n(9933),
                i = n(9764),
                a = n(2122),
                u = n(7178),
                s = n(8709),
                c = n(1004),
                d = n(2163),
                f = n(7321),
                g = n(1735),
                p = n(3089),
                v = n(1403),
                m = n(1523),
                h = n(523),
                w = n(3297),
                b = n(7573),
                y = "NavigationMenu",
                [C, x, R] = (0, g.B)(y),
                [S, E, M] = (0, g.B)(y),
                [P, F] = (0, l.b)(y, [R, M]),
                [_, I] = P(y),
                [T, L] = P(y),
                A = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, value: o, onValueChange: l, defaultValue: i, delayDuration: d = 200, skipDelayDuration: f = 300, orientation: g = "horizontal", dir: p, ...v } = e,
                        [m, h] = r.useState(null),
                        w = (0, s.e)(t, (e) => h(e)),
                        y = (0, c.gm)(p),
                        C = r.useRef(0),
                        x = r.useRef(0),
                        R = r.useRef(0),
                        [S, E] = r.useState(!0),
                        [M = "", P] = (0, u.T)({
                            prop: o,
                            onChange: (e) => {
                                let t = f > 0;
                                "" !== e ? (window.clearTimeout(R.current), t && E(!1)) : (window.clearTimeout(R.current), (R.current = window.setTimeout(() => E(!0), f))), null == l || l(e);
                            },
                            defaultProp: i,
                        }),
                        F = r.useCallback(() => {
                            window.clearTimeout(x.current), (x.current = window.setTimeout(() => P(""), 150));
                        }, [P]),
                        _ = r.useCallback(
                            (e) => {
                                window.clearTimeout(x.current), P(e);
                            },
                            [P]
                        ),
                        I = r.useCallback(
                            (e) => {
                                M === e
                                    ? window.clearTimeout(x.current)
                                    : (C.current = window.setTimeout(() => {
                                          window.clearTimeout(x.current), P(e);
                                      }, d));
                            },
                            [M, P, d]
                        );
                    return (
                        r.useEffect(
                            () => () => {
                                window.clearTimeout(C.current), window.clearTimeout(x.current), window.clearTimeout(R.current);
                            },
                            []
                        ),
                        (0, b.jsx)(D, {
                            scope: n,
                            isRootMenu: !0,
                            value: M,
                            dir: y,
                            orientation: g,
                            rootNavigationMenu: m,
                            onTriggerEnter: (e) => {
                                window.clearTimeout(C.current), S ? I(e) : _(e);
                            },
                            onTriggerLeave: () => {
                                window.clearTimeout(C.current), F();
                            },
                            onContentEnter: () => window.clearTimeout(x.current),
                            onContentLeave: F,
                            onItemSelect: (e) => {
                                P((t) => (t === e ? "" : e));
                            },
                            onItemDismiss: () => P(""),
                            children: (0, b.jsx)(a.WV.nav, { "aria-label": "Main", "data-orientation": g, dir: y, ...v, ref: w }),
                        })
                    );
                });
            A.displayName = y;
            var O = "NavigationMenuSub";
            r.forwardRef((e, t) => {
                let { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: l, orientation: i = "horizontal", ...s } = e,
                    c = I(O, n),
                    [d = "", f] = (0, u.T)({ prop: r, onChange: o, defaultProp: l });
                return (0, b.jsx)(D, {
                    scope: n,
                    isRootMenu: !1,
                    value: d,
                    dir: c.dir,
                    orientation: i,
                    rootNavigationMenu: c.rootNavigationMenu,
                    onTriggerEnter: (e) => f(e),
                    onItemSelect: (e) => f(e),
                    onItemDismiss: () => f(""),
                    children: (0, b.jsx)(a.WV.div, { "data-orientation": i, ...s, ref: t }),
                });
            }).displayName = O;
            var D = (e) => {
                    let { scope: t, isRootMenu: n, rootNavigationMenu: o, dir: l, orientation: i, children: a, value: u, onItemSelect: s, onItemDismiss: c, onTriggerEnter: d, onTriggerLeave: g, onContentEnter: p, onContentLeave: m } = e,
                        [w, y] = r.useState(null),
                        [x, R] = r.useState(new Map()),
                        [S, E] = r.useState(null);
                    return (0, b.jsx)(_, {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: o,
                        value: u,
                        previousValue: (0, v.D)(u),
                        baseId: (0, f.M)(),
                        dir: l,
                        orientation: i,
                        viewport: w,
                        onViewportChange: y,
                        indicatorTrack: S,
                        onIndicatorTrackChange: E,
                        onTriggerEnter: (0, h.W)(d),
                        onTriggerLeave: (0, h.W)(g),
                        onContentEnter: (0, h.W)(p),
                        onContentLeave: (0, h.W)(m),
                        onItemSelect: (0, h.W)(s),
                        onItemDismiss: (0, h.W)(c),
                        onViewportContentChange: r.useCallback((e, t) => {
                            R((n) => (n.set(e, t), new Map(n)));
                        }, []),
                        onViewportContentRemove: r.useCallback((e) => {
                            R((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
                        }, []),
                        children: (0, b.jsx)(C.Provider, { scope: t, children: (0, b.jsx)(T, { scope: t, items: x, children: a }) }),
                    });
                },
                j = "NavigationMenuList",
                k = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, ...r } = e,
                        o = I(j, n),
                        l = (0, b.jsx)(a.WV.ul, { "data-orientation": o.orientation, ...r, ref: t });
                    return (0, b.jsx)(a.WV.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: (0, b.jsx)(C.Slot, { scope: n, children: o.isRootMenu ? (0, b.jsx)(er, { asChild: !0, children: l }) : l }) });
                });
            k.displayName = j;
            var V = "NavigationMenuItem",
                [N, z] = P(V),
                H = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, value: o, ...l } = e,
                        i = (0, f.M)(),
                        u = r.useRef(null),
                        s = r.useRef(null),
                        c = r.useRef(null),
                        d = r.useRef(() => {}),
                        g = r.useRef(!1),
                        p = r.useCallback(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start";
                            if (u.current) {
                                d.current();
                                let t = ei(u.current);
                                t.length && ea("start" === e ? t : t.reverse());
                            }
                        }, []),
                        v = r.useCallback(() => {
                            if (u.current) {
                                let e = ei(u.current);
                                e.length &&
                                    (d.current =
                                        (e.forEach((e) => {
                                            (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
                                        }),
                                        () => {
                                            e.forEach((e) => {
                                                let t = e.dataset.tabindex;
                                                e.setAttribute("tabindex", t);
                                            });
                                        }));
                            }
                        }, []);
                    return (0, b.jsx)(N, {
                        scope: n,
                        value: o || i || "LEGACY_REACT_AUTO_VALUE",
                        triggerRef: s,
                        contentRef: u,
                        focusProxyRef: c,
                        wasEscapeCloseRef: g,
                        onEntryKeyDown: p,
                        onFocusProxyEnter: p,
                        onRootContentClose: v,
                        onContentFocusOutside: v,
                        children: (0, b.jsx)(a.WV.li, { ...l, ref: t }),
                    });
                });
            H.displayName = V;
            var G = "NavigationMenuTrigger",
                W = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, disabled: o, ...l } = e,
                        u = I(G, e.__scopeNavigationMenu),
                        c = z(G, e.__scopeNavigationMenu),
                        d = r.useRef(null),
                        f = (0, s.e)(d, c.triggerRef, t),
                        g = ec(u.baseId, c.value),
                        p = ed(u.baseId, c.value),
                        v = r.useRef(!1),
                        m = r.useRef(!1),
                        h = c.value === u.value;
                    return (0, b.jsxs)(b.Fragment, {
                        children: [
                            (0, b.jsx)(C.ItemSlot, {
                                scope: n,
                                value: c.value,
                                children: (0, b.jsx)(el, {
                                    asChild: !0,
                                    children: (0, b.jsx)(a.WV.button, {
                                        id: g,
                                        disabled: o,
                                        "data-disabled": o ? "" : void 0,
                                        "data-state": es(h),
                                        "aria-expanded": h,
                                        "aria-controls": p,
                                        ...l,
                                        ref: f,
                                        onPointerEnter: (0, i.M)(e.onPointerEnter, () => {
                                            (m.current = !1), (c.wasEscapeCloseRef.current = !1);
                                        }),
                                        onPointerMove: (0, i.M)(
                                            e.onPointerMove,
                                            ef(() => {
                                                o || m.current || c.wasEscapeCloseRef.current || v.current || (u.onTriggerEnter(c.value), (v.current = !0));
                                            })
                                        ),
                                        onPointerLeave: (0, i.M)(
                                            e.onPointerLeave,
                                            ef(() => {
                                                o || (u.onTriggerLeave(), (v.current = !1));
                                            })
                                        ),
                                        onClick: (0, i.M)(e.onClick, () => {
                                            u.onItemSelect(c.value), (m.current = h);
                                        }),
                                        onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                            let t = { horizontal: "ArrowDown", vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight" }[u.orientation];
                                            h && e.key === t && (c.onEntryKeyDown(), e.preventDefault());
                                        }),
                                    }),
                                }),
                            }),
                            h &&
                                (0, b.jsxs)(b.Fragment, {
                                    children: [
                                        (0, b.jsx)(w.f, {
                                            "aria-hidden": !0,
                                            tabIndex: 0,
                                            ref: c.focusProxyRef,
                                            onFocus: (e) => {
                                                let t = c.contentRef.current,
                                                    n = e.relatedTarget,
                                                    r = n === d.current,
                                                    o = null == t ? void 0 : t.contains(n);
                                                (r || !o) && c.onFocusProxyEnter(r ? "start" : "end");
                                            },
                                        }),
                                        u.viewport && (0, b.jsx)("span", { "aria-owns": p }),
                                    ],
                                }),
                        ],
                    });
                });
            W.displayName = G;
            var $ = "navigationMenu.linkSelect",
                B = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, active: r, onSelect: o, ...l } = e;
                    return (0, b.jsx)(el, {
                        asChild: !0,
                        children: (0, b.jsx)(a.WV.a, {
                            "data-active": r ? "" : void 0,
                            "aria-current": r ? "page" : void 0,
                            ...l,
                            ref: t,
                            onClick: (0, i.M)(
                                e.onClick,
                                (e) => {
                                    let t = e.target,
                                        n = new CustomEvent($, { bubbles: !0, cancelable: !0 });
                                    if ((t.addEventListener($, (e) => (null == o ? void 0 : o(e)), { once: !0 }), (0, a.jH)(t, n), !n.defaultPrevented && !e.metaKey)) {
                                        let e = new CustomEvent(J, { bubbles: !0, cancelable: !0 });
                                        (0, a.jH)(t, e);
                                    }
                                },
                                { checkForDefaultPrevented: !1 }
                            ),
                        }),
                    });
                });
            B.displayName = "NavigationMenuLink";
            var U = "NavigationMenuIndicator",
                K = r.forwardRef((e, t) => {
                    let { forceMount: n, ...r } = e,
                        l = I(U, e.__scopeNavigationMenu),
                        i = !!l.value;
                    return l.indicatorTrack ? o.createPortal((0, b.jsx)(d.z, { present: n || i, children: (0, b.jsx)(q, { ...r, ref: t }) }), l.indicatorTrack) : null;
                });
            K.displayName = U;
            var q = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, ...o } = e,
                        l = I(U, n),
                        i = x(n),
                        [u, s] = r.useState(null),
                        [c, d] = r.useState(null),
                        f = "horizontal" === l.orientation,
                        g = !!l.value;
                    r.useEffect(() => {
                        var e;
                        let t = null === (e = i().find((e) => e.value === l.value)) || void 0 === e ? void 0 : e.ref.current;
                        t && s(t);
                    }, [i, l.value]);
                    let p = () => {
                        u && d({ size: f ? u.offsetWidth : u.offsetHeight, offset: f ? u.offsetLeft : u.offsetTop });
                    };
                    return (
                        eu(u, p),
                        eu(l.indicatorTrack, p),
                        c
                            ? (0, b.jsx)(a.WV.div, {
                                  "aria-hidden": !0,
                                  "data-state": g ? "visible" : "hidden",
                                  "data-orientation": l.orientation,
                                  ...o,
                                  ref: t,
                                  style: {
                                      position: "absolute",
                                      ...(f ? { left: 0, width: c.size + "px", transform: "translateX(".concat(c.offset, "px)") } : { top: 0, height: c.size + "px", transform: "translateY(".concat(c.offset, "px)") }),
                                      ...o.style,
                                  },
                              })
                            : null
                    );
                }),
                X = "NavigationMenuContent",
                Y = r.forwardRef((e, t) => {
                    let { forceMount: n, ...r } = e,
                        o = I(X, e.__scopeNavigationMenu),
                        l = z(X, e.__scopeNavigationMenu),
                        a = (0, s.e)(l.contentRef, t),
                        u = l.value === o.value,
                        c = {
                            value: l.value,
                            triggerRef: l.triggerRef,
                            focusProxyRef: l.focusProxyRef,
                            wasEscapeCloseRef: l.wasEscapeCloseRef,
                            onContentFocusOutside: l.onContentFocusOutside,
                            onRootContentClose: l.onRootContentClose,
                            ...r,
                        };
                    return o.viewport
                        ? (0, b.jsx)(Z, { forceMount: n, ...c, ref: a })
                        : (0, b.jsx)(d.z, {
                              present: n || u,
                              children: (0, b.jsx)(Q, {
                                  "data-state": es(u),
                                  ...c,
                                  ref: a,
                                  onPointerEnter: (0, i.M)(e.onPointerEnter, o.onContentEnter),
                                  onPointerLeave: (0, i.M)(e.onPointerLeave, ef(o.onContentLeave)),
                                  style: { pointerEvents: !u && o.isRootMenu ? "none" : void 0, ...c.style },
                              }),
                          });
                });
            Y.displayName = X;
            var Z = r.forwardRef((e, t) => {
                    let { onViewportContentChange: n, onViewportContentRemove: r } = I(X, e.__scopeNavigationMenu);
                    return (
                        (0, m.b)(() => {
                            n(e.value, { ref: t, ...e });
                        }, [e, t, n]),
                        (0, m.b)(() => () => r(e.value), [e.value, r]),
                        null
                    );
                }),
                J = "navigationMenu.rootContentDismiss",
                Q = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, value: o, triggerRef: l, focusProxyRef: a, wasEscapeCloseRef: u, onRootContentClose: c, onContentFocusOutside: d, ...f } = e,
                        g = I(X, n),
                        v = r.useRef(null),
                        m = (0, s.e)(v, t),
                        h = ec(g.baseId, o),
                        w = ed(g.baseId, o),
                        y = x(n),
                        C = r.useRef(null),
                        { onItemDismiss: R } = g;
                    r.useEffect(() => {
                        let e = v.current;
                        if (g.isRootMenu && e) {
                            let t = () => {
                                var t;
                                R(), c(), e.contains(document.activeElement) && (null === (t = l.current) || void 0 === t || t.focus());
                            };
                            return e.addEventListener(J, t), () => e.removeEventListener(J, t);
                        }
                    }, [g.isRootMenu, e.value, l, R, c]);
                    let S = r.useMemo(() => {
                        let e = y().map((e) => e.value);
                        "rtl" === g.dir && e.reverse();
                        let t = e.indexOf(g.value),
                            n = e.indexOf(g.previousValue),
                            r = o === g.value,
                            l = n === e.indexOf(o);
                        if (!r && !l) return C.current;
                        let i = (() => {
                            if (t !== n) {
                                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                                if (l && -1 !== t) return t > n ? "to-start" : "to-end";
                            }
                            return null;
                        })();
                        return (C.current = i), i;
                    }, [g.previousValue, g.value, g.dir, y, o]);
                    return (0, b.jsx)(er, {
                        asChild: !0,
                        children: (0, b.jsx)(p.XB, {
                            id: w,
                            "aria-labelledby": h,
                            "data-motion": S,
                            "data-orientation": g.orientation,
                            ...f,
                            ref: m,
                            disableOutsidePointerEvents: !1,
                            onDismiss: () => {
                                var e;
                                let t = new Event(J, { bubbles: !0, cancelable: !0 });
                                null === (e = v.current) || void 0 === e || e.dispatchEvent(t);
                            },
                            onFocusOutside: (0, i.M)(e.onFocusOutside, (e) => {
                                var t;
                                d();
                                let n = e.target;
                                (null === (t = g.rootNavigationMenu) || void 0 === t ? void 0 : t.contains(n)) && e.preventDefault();
                            }),
                            onPointerDownOutside: (0, i.M)(e.onPointerDownOutside, (e) => {
                                var t;
                                let n = e.target,
                                    r = y().some((e) => {
                                        var t;
                                        return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n);
                                    }),
                                    o = g.isRootMenu && (null === (t = g.viewport) || void 0 === t ? void 0 : t.contains(n));
                                (r || o || !g.isRootMenu) && e.preventDefault();
                            }),
                            onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                let t = e.altKey || e.ctrlKey || e.metaKey;
                                if ("Tab" === e.key && !t) {
                                    let t = ei(e.currentTarget),
                                        r = document.activeElement,
                                        o = t.findIndex((e) => e === r);
                                    if (ea(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length))) e.preventDefault();
                                    else {
                                        var n;
                                        null === (n = a.current) || void 0 === n || n.focus();
                                    }
                                }
                            }),
                            onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, (e) => {
                                u.current = !0;
                            }),
                        }),
                    });
                }),
                ee = "NavigationMenuViewport",
                et = r.forwardRef((e, t) => {
                    let { forceMount: n, ...r } = e,
                        o = !!I(ee, e.__scopeNavigationMenu).value;
                    return (0, b.jsx)(d.z, { present: n || o, children: (0, b.jsx)(en, { ...r, ref: t }) });
                });
            et.displayName = ee;
            var en = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, children: o, ...l } = e,
                        u = I(ee, n),
                        c = (0, s.e)(t, u.onViewportChange),
                        f = L(X, e.__scopeNavigationMenu),
                        [g, p] = r.useState(null),
                        [v, m] = r.useState(null),
                        h = g ? (null == g ? void 0 : g.width) + "px" : void 0,
                        w = g ? (null == g ? void 0 : g.height) + "px" : void 0,
                        y = !!u.value,
                        C = y ? u.value : u.previousValue;
                    return (
                        eu(v, () => {
                            v && p({ width: v.offsetWidth, height: v.offsetHeight });
                        }),
                        (0, b.jsx)(a.WV.div, {
                            "data-state": es(y),
                            "data-orientation": u.orientation,
                            ...l,
                            ref: c,
                            style: { pointerEvents: !y && u.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": h, "--radix-navigation-menu-viewport-height": w, ...l.style },
                            onPointerEnter: (0, i.M)(e.onPointerEnter, u.onContentEnter),
                            onPointerLeave: (0, i.M)(e.onPointerLeave, ef(u.onContentLeave)),
                            children: Array.from(f.items).map((e) => {
                                let [t, { ref: n, forceMount: r, ...o }] = e,
                                    l = C === t;
                                return (0, b.jsx)(
                                    d.z,
                                    {
                                        present: r || l,
                                        children: (0, b.jsx)(Q, {
                                            ...o,
                                            ref: (0, s.F)(n, (e) => {
                                                l && e && m(e);
                                            }),
                                        }),
                                    },
                                    t
                                );
                            }),
                        })
                    );
                }),
                er = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, ...r } = e,
                        o = I("FocusGroup", n);
                    return (0, b.jsx)(S.Provider, { scope: n, children: (0, b.jsx)(S.Slot, { scope: n, children: (0, b.jsx)(a.WV.div, { dir: o.dir, ...r, ref: t }) }) });
                }),
                eo = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
                el = r.forwardRef((e, t) => {
                    let { __scopeNavigationMenu: n, ...r } = e,
                        o = E(n),
                        l = I("FocusGroupItem", n);
                    return (0, b.jsx)(S.ItemSlot, {
                        scope: n,
                        children: (0, b.jsx)(a.WV.button, {
                            ...r,
                            ref: t,
                            onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
                                if (["Home", "End", ...eo].includes(e.key)) {
                                    let t = o().map((e) => e.ref.current);
                                    if ((["rtl" === l.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), eo.includes(e.key))) {
                                        let n = t.indexOf(e.currentTarget);
                                        t = t.slice(n + 1);
                                    }
                                    setTimeout(() => ea(t)), e.preventDefault();
                                }
                            }),
                        }),
                    });
                });
            function ei(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                        },
                    });
                for (; n.nextNode(); ) t.push(n.currentNode);
                return t;
            }
            function ea(e) {
                let t = document.activeElement;
                return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
            }
            function eu(e, t) {
                let n = (0, h.W)(t);
                (0, m.b)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
                        });
                        return (
                            r.observe(e),
                            () => {
                                window.cancelAnimationFrame(t), r.unobserve(e);
                            }
                        );
                    }
                }, [e, n]);
            }
            function es(e) {
                return e ? "open" : "closed";
            }
            function ec(e, t) {
                return "".concat(e, "-trigger-").concat(t);
            }
            function ed(e, t) {
                return "".concat(e, "-content-").concat(t);
            }
            function ef(e) {
                return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
            }
            var eg = A,
                ep = k,
                ev = H,
                em = W,
                eh = B,
                ew = K,
                eb = Y,
                ey = et;
        },
        7888: function (e, t, n) {
            "use strict";
            n.d(t, {
                VY: function () {
                    return $;
                },
                fC: function () {
                    return H;
                },
                h_: function () {
                    return W;
                },
                xz: function () {
                    return G;
                },
            });
            var r = n(7653),
                o = n(9764),
                l = n(8709),
                i = n(9933),
                a = n(3089),
                u = n(307),
                s = n(8083),
                c = n(7321),
                d = n(3546),
                f = n(6337),
                g = n(2163),
                p = n(2122),
                v = n(4912),
                m = n(7178),
                h = n(7130),
                w = n(5399),
                b = n(7573),
                y = "Popover",
                [C, x] = (0, i.b)(y, [d.D7]),
                R = (0, d.D7)(),
                [S, E] = C(y),
                M = (e) => {
                    let { __scopePopover: t, children: n, open: o, defaultOpen: l, onOpenChange: i, modal: a = !1 } = e,
                        u = R(t),
                        s = r.useRef(null),
                        [f, g] = r.useState(!1),
                        [p = !1, v] = (0, m.T)({ prop: o, defaultProp: l, onChange: i });
                    return (0, b.jsx)(d.fC, {
                        ...u,
                        children: (0, b.jsx)(S, {
                            scope: t,
                            contentId: (0, c.M)(),
                            triggerRef: s,
                            open: p,
                            onOpenChange: v,
                            onOpenToggle: r.useCallback(() => v((e) => !e), [v]),
                            hasCustomAnchor: f,
                            onCustomAnchorAdd: r.useCallback(() => g(!0), []),
                            onCustomAnchorRemove: r.useCallback(() => g(!1), []),
                            modal: a,
                            children: n,
                        }),
                    });
                };
            M.displayName = y;
            var P = "PopoverAnchor";
            r.forwardRef((e, t) => {
                let { __scopePopover: n, ...o } = e,
                    l = E(P, n),
                    i = R(n),
                    { onCustomAnchorAdd: a, onCustomAnchorRemove: u } = l;
                return r.useEffect(() => (a(), () => u()), [a, u]), (0, b.jsx)(d.ee, { ...i, ...o, ref: t });
            }).displayName = P;
            var F = "PopoverTrigger",
                _ = r.forwardRef((e, t) => {
                    let { __scopePopover: n, ...r } = e,
                        i = E(F, n),
                        a = R(n),
                        u = (0, l.e)(t, i.triggerRef),
                        s = (0, b.jsx)(p.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": i.open, "aria-controls": i.contentId, "data-state": z(i.open), ...r, ref: u, onClick: (0, o.M)(e.onClick, i.onOpenToggle) });
                    return i.hasCustomAnchor ? s : (0, b.jsx)(d.ee, { asChild: !0, ...a, children: s });
                });
            _.displayName = F;
            var I = "PopoverPortal",
                [T, L] = C(I, { forceMount: void 0 }),
                A = (e) => {
                    let { __scopePopover: t, forceMount: n, children: r, container: o } = e,
                        l = E(I, t);
                    return (0, b.jsx)(T, { scope: t, forceMount: n, children: (0, b.jsx)(g.z, { present: n || l.open, children: (0, b.jsx)(f.h, { asChild: !0, container: o, children: r }) }) });
                };
            A.displayName = I;
            var O = "PopoverContent",
                D = r.forwardRef((e, t) => {
                    let n = L(O, e.__scopePopover),
                        { forceMount: r = n.forceMount, ...o } = e,
                        l = E(O, e.__scopePopover);
                    return (0, b.jsx)(g.z, { present: r || l.open, children: l.modal ? (0, b.jsx)(j, { ...o, ref: t }) : (0, b.jsx)(k, { ...o, ref: t }) });
                });
            D.displayName = O;
            var j = r.forwardRef((e, t) => {
                    let n = E(O, e.__scopePopover),
                        i = r.useRef(null),
                        a = (0, l.e)(t, i),
                        u = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            let e = i.current;
                            if (e) return (0, h.Ry)(e);
                        }, []),
                        (0, b.jsx)(w.Z, {
                            as: v.g7,
                            allowPinchZoom: !0,
                            children: (0, b.jsx)(V, {
                                ...e,
                                ref: a,
                                trapFocus: n.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                                    var t;
                                    e.preventDefault(), u.current || null === (t = n.triggerRef.current) || void 0 === t || t.focus();
                                }),
                                onPointerDownOutside: (0, o.M)(
                                    e.onPointerDownOutside,
                                    (e) => {
                                        let t = e.detail.originalEvent,
                                            n = 0 === t.button && !0 === t.ctrlKey,
                                            r = 2 === t.button || n;
                                        u.current = r;
                                    },
                                    { checkForDefaultPrevented: !1 }
                                ),
                                onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
                            }),
                        })
                    );
                }),
                k = r.forwardRef((e, t) => {
                    let n = E(O, e.__scopePopover),
                        o = r.useRef(!1),
                        l = r.useRef(!1);
                    return (0, b.jsx)(V, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            var r, i;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                                t.defaultPrevented || (o.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()),
                                (o.current = !1),
                                (l.current = !1);
                        },
                        onInteractOutside: (t) => {
                            var r, i;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || ((o.current = !0), "pointerdown" !== t.detail.originalEvent.type || (l.current = !0));
                            let a = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && l.current && t.preventDefault();
                        },
                    });
                }),
                V = r.forwardRef((e, t) => {
                    let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: l, disableOutsidePointerEvents: i, onEscapeKeyDown: c, onPointerDownOutside: f, onFocusOutside: g, onInteractOutside: p, ...v } = e,
                        m = E(O, n),
                        h = R(n);
                    return (
                        (0, u.EW)(),
                        (0, b.jsx)(s.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: l,
                            children: (0, b.jsx)(a.XB, {
                                asChild: !0,
                                disableOutsidePointerEvents: i,
                                onInteractOutside: p,
                                onEscapeKeyDown: c,
                                onPointerDownOutside: f,
                                onFocusOutside: g,
                                onDismiss: () => m.onOpenChange(!1),
                                children: (0, b.jsx)(d.VY, {
                                    "data-state": z(m.open),
                                    role: "dialog",
                                    id: m.contentId,
                                    ...h,
                                    ...v,
                                    ref: t,
                                    style: {
                                        ...v.style,
                                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)",
                                    },
                                }),
                            }),
                        })
                    );
                }),
                N = "PopoverClose";
            function z(e) {
                return e ? "open" : "closed";
            }
            (r.forwardRef((e, t) => {
                let { __scopePopover: n, ...r } = e,
                    l = E(N, n);
                return (0, b.jsx)(p.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => l.onOpenChange(!1)) });
            }).displayName = N),
                (r.forwardRef((e, t) => {
                    let { __scopePopover: n, ...r } = e,
                        o = R(n);
                    return (0, b.jsx)(d.Eh, { ...o, ...r, ref: t });
                }).displayName = "PopoverArrow");
            var H = M,
                G = _,
                W = A,
                $ = D;
        },
        3546: function (e, t, n) {
            "use strict";
            n.d(t, {
                ee: function () {
                    return eU;
                },
                Eh: function () {
                    return eq;
                },
                VY: function () {
                    return eK;
                },
                fC: function () {
                    return eB;
                },
                D7: function () {
                    return e_;
                },
            });
            var r = n(7653);
            let o = ["top", "right", "bottom", "left"],
                l = Math.min,
                i = Math.max,
                a = Math.round,
                u = Math.floor,
                s = (e) => ({ x: e, y: e }),
                c = { left: "right", right: "left", bottom: "top", top: "bottom" },
                d = { start: "end", end: "start" };
            function f(e, t) {
                return "function" == typeof e ? e(t) : e;
            }
            function g(e) {
                return e.split("-")[0];
            }
            function p(e) {
                return e.split("-")[1];
            }
            function v(e) {
                return "x" === e ? "y" : "x";
            }
            function m(e) {
                return "y" === e ? "height" : "width";
            }
            function h(e) {
                return ["top", "bottom"].includes(g(e)) ? "y" : "x";
            }
            function w(e) {
                return e.replace(/start|end/g, (e) => d[e]);
            }
            function b(e) {
                return e.replace(/left|right|bottom|top/g, (e) => c[e]);
            }
            function y(e) {
                return "number" != typeof e ? { top: 0, right: 0, bottom: 0, left: 0, ...e } : { top: e, right: e, bottom: e, left: e };
            }
            function C(e) {
                let { x: t, y: n, width: r, height: o } = e;
                return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
            }
            function x(e, t, n) {
                let r,
                    { reference: o, floating: l } = e,
                    i = h(t),
                    a = v(h(t)),
                    u = m(a),
                    s = g(t),
                    c = "y" === i,
                    d = o.x + o.width / 2 - l.width / 2,
                    f = o.y + o.height / 2 - l.height / 2,
                    w = o[u] / 2 - l[u] / 2;
                switch (s) {
                    case "top":
                        r = { x: d, y: o.y - l.height };
                        break;
                    case "bottom":
                        r = { x: d, y: o.y + o.height };
                        break;
                    case "right":
                        r = { x: o.x + o.width, y: f };
                        break;
                    case "left":
                        r = { x: o.x - l.width, y: f };
                        break;
                    default:
                        r = { x: o.x, y: o.y };
                }
                switch (p(t)) {
                    case "start":
                        r[a] -= w * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += w * (n && c ? -1 : 1);
                }
                return r;
            }
            let R = async (e, t, n) => {
                let { placement: r = "bottom", strategy: o = "absolute", middleware: l = [], platform: i } = n,
                    a = l.filter(Boolean),
                    u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
                    s = await i.getElementRects({ reference: e, floating: t, strategy: o }),
                    { x: c, y: d } = x(s, r, u),
                    f = r,
                    g = {},
                    p = 0;
                for (let n = 0; n < a.length; n++) {
                    let { name: l, fn: v } = a[n],
                        { x: m, y: h, data: w, reset: b } = await v({ x: c, y: d, initialPlacement: r, placement: f, strategy: o, middlewareData: g, rects: s, platform: i, elements: { reference: e, floating: t } });
                    (c = null != m ? m : c),
                        (d = null != h ? h : d),
                        (g = { ...g, [l]: { ...g[l], ...w } }),
                        b &&
                            p <= 50 &&
                            (p++,
                            "object" == typeof b && (b.placement && (f = b.placement), b.rects && (s = !0 === b.rects ? await i.getElementRects({ reference: e, floating: t, strategy: o }) : b.rects), ({ x: c, y: d } = x(s, f, u))),
                            (n = -1));
                }
                return { x: c, y: d, placement: f, strategy: o, middlewareData: g };
            };
            async function S(e, t) {
                var n;
                void 0 === t && (t = {});
                let { x: r, y: o, platform: l, rects: i, elements: a, strategy: u } = e,
                    { boundary: s = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: g = !1, padding: p = 0 } = f(t, e),
                    v = y(p),
                    m = a[g ? ("floating" === d ? "reference" : "floating") : d],
                    h = C(
                        await l.getClippingRect({
                            element: null == (n = await (null == l.isElement ? void 0 : l.isElement(m))) || n ? m : m.contextElement || (await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating))),
                            boundary: s,
                            rootBoundary: c,
                            strategy: u,
                        })
                    ),
                    w = "floating" === d ? { x: r, y: o, width: i.floating.width, height: i.floating.height } : i.reference,
                    b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)),
                    x = ((await (null == l.isElement ? void 0 : l.isElement(b))) && (await (null == l.getScale ? void 0 : l.getScale(b)))) || { x: 1, y: 1 },
                    R = C(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: a, rect: w, offsetParent: b, strategy: u }) : w);
                return { top: (h.top - R.top + v.top) / x.y, bottom: (R.bottom - h.bottom + v.bottom) / x.y, left: (h.left - R.left + v.left) / x.x, right: (R.right - h.right + v.right) / x.x };
            }
            function E(e, t) {
                return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
            }
            function M(e) {
                return o.some((t) => e[t] >= 0);
            }
            async function P(e, t) {
                let { placement: n, platform: r, elements: o } = e,
                    l = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
                    i = g(n),
                    a = p(n),
                    u = "y" === h(n),
                    s = ["left", "top"].includes(i) ? -1 : 1,
                    c = l && u ? -1 : 1,
                    d = f(t, e),
                    { mainAxis: v, crossAxis: m, alignmentAxis: w } = "number" == typeof d ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
                return a && "number" == typeof w && (m = "end" === a ? -1 * w : w), u ? { x: m * c, y: v * s } : { x: v * s, y: m * c };
            }
            function F() {
                return "undefined" != typeof window;
            }
            function _(e) {
                return L(e) ? (e.nodeName || "").toLowerCase() : "#document";
            }
            function I(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
            }
            function T(e) {
                var t;
                return null == (t = (L(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
            }
            function L(e) {
                return !!F() && (e instanceof Node || e instanceof I(e).Node);
            }
            function A(e) {
                return !!F() && (e instanceof Element || e instanceof I(e).Element);
            }
            function O(e) {
                return !!F() && (e instanceof HTMLElement || e instanceof I(e).HTMLElement);
            }
            function D(e) {
                return !!F() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof I(e).ShadowRoot);
            }
            function j(e) {
                let { overflow: t, overflowX: n, overflowY: r, display: o } = H(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
            }
            function k(e) {
                return [":popover-open", ":modal"].some((t) => {
                    try {
                        return e.matches(t);
                    } catch (e) {
                        return !1;
                    }
                });
            }
            function V(e) {
                let t = N(),
                    n = A(e) ? H(e) : e;
                return (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    (!!n.containerType && "normal" !== n.containerType) ||
                    (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
                    (!t && !!n.filter && "none" !== n.filter) ||
                    ["transform", "perspective", "filter"].some((e) => (n.willChange || "").includes(e)) ||
                    ["paint", "layout", "strict", "content"].some((e) => (n.contain || "").includes(e))
                );
            }
            function N() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
            }
            function z(e) {
                return ["html", "body", "#document"].includes(_(e));
            }
            function H(e) {
                return I(e).getComputedStyle(e);
            }
            function G(e) {
                return A(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
            }
            function W(e) {
                if ("html" === _(e)) return e;
                let t = e.assignedSlot || e.parentNode || (D(e) && e.host) || T(e);
                return D(t) ? t.host : t;
            }
            function $(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = (function e(t) {
                        let n = W(t);
                        return z(n) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : O(n) && j(n) ? n : e(n);
                    })(e),
                    l = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    i = I(o);
                if (l) {
                    let e = i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
                    return t.concat(i, i.visualViewport || [], j(o) ? o : [], e && n ? $(e) : []);
                }
                return t.concat(o, $(o, [], n));
            }
            function B(e) {
                let t = H(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = O(e),
                    l = o ? e.offsetWidth : n,
                    i = o ? e.offsetHeight : r,
                    u = a(n) !== l || a(r) !== i;
                return u && ((n = l), (r = i)), { width: n, height: r, $: u };
            }
            function U(e) {
                return A(e) ? e : e.contextElement;
            }
            function K(e) {
                let t = U(e);
                if (!O(t)) return s(1);
                let n = t.getBoundingClientRect(),
                    { width: r, height: o, $: l } = B(t),
                    i = (l ? a(n.width) : n.width) / r,
                    u = (l ? a(n.height) : n.height) / o;
                return (i && Number.isFinite(i)) || (i = 1), (u && Number.isFinite(u)) || (u = 1), { x: i, y: u };
            }
            let q = s(0);
            function X(e) {
                let t = I(e);
                return N() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : q;
            }
            function Y(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let l = e.getBoundingClientRect(),
                    i = U(e),
                    a = s(1);
                t && (r ? A(r) && (a = K(r)) : (a = K(e)));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === I(i)) && o) ? X(i) : s(0),
                    c = (l.left + u.x) / a.x,
                    d = (l.top + u.y) / a.y,
                    f = l.width / a.x,
                    g = l.height / a.y;
                if (i) {
                    let e = I(i),
                        t = r && A(r) ? I(r) : r,
                        n = e,
                        o = n.frameElement;
                    for (; o && r && t !== n; ) {
                        let e = K(o),
                            t = o.getBoundingClientRect(),
                            r = H(o),
                            l = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        (c *= e.x), (d *= e.y), (f *= e.x), (g *= e.y), (c += l), (d += i), (o = (n = I(o)).frameElement);
                    }
                }
                return C({ width: f, height: g, x: c, y: d });
            }
            function Z(e) {
                return Y(T(e)).left + G(e).scrollLeft;
            }
            function J(e, t, n) {
                let r;
                if ("viewport" === t)
                    r = (function (e, t) {
                        let n = I(e),
                            r = T(e),
                            o = n.visualViewport,
                            l = r.clientWidth,
                            i = r.clientHeight,
                            a = 0,
                            u = 0;
                        if (o) {
                            (l = o.width), (i = o.height);
                            let e = N();
                            (!e || (e && "fixed" === t)) && ((a = o.offsetLeft), (u = o.offsetTop));
                        }
                        return { width: l, height: i, x: a, y: u };
                    })(e, n);
                else if ("document" === t)
                    r = (function (e) {
                        let t = T(e),
                            n = G(e),
                            r = e.ownerDocument.body,
                            o = i(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                            l = i(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                            a = -n.scrollLeft + Z(e),
                            u = -n.scrollTop;
                        return "rtl" === H(r).direction && (a += i(t.clientWidth, r.clientWidth) - o), { width: o, height: l, x: a, y: u };
                    })(T(e));
                else if (A(t))
                    r = (function (e, t) {
                        let n = Y(e, !0, "fixed" === t),
                            r = n.top + e.clientTop,
                            o = n.left + e.clientLeft,
                            l = O(e) ? K(e) : s(1),
                            i = e.clientWidth * l.x;
                        return { width: i, height: e.clientHeight * l.y, x: o * l.x, y: r * l.y };
                    })(t, n);
                else {
                    let n = X(e);
                    r = { ...t, x: t.x - n.x, y: t.y - n.y };
                }
                return C(r);
            }
            function Q(e) {
                return "static" === H(e).position;
            }
            function ee(e, t) {
                return O(e) && "fixed" !== H(e).position ? (t ? t(e) : e.offsetParent) : null;
            }
            function et(e, t) {
                let n = I(e);
                if (k(e)) return n;
                if (!O(e)) {
                    let t = W(e);
                    for (; t && !z(t); ) {
                        if (A(t) && !Q(t)) return t;
                        t = W(t);
                    }
                    return n;
                }
                let r = ee(e, t);
                for (; r && ["table", "td", "th"].includes(_(r)) && Q(r); ) r = ee(r, t);
                return r && z(r) && Q(r) && !V(r)
                    ? n
                    : r ||
                          (function (e) {
                              let t = W(e);
                              for (; O(t) && !z(t); ) {
                                  if (V(t)) return t;
                                  if (k(t)) break;
                                  t = W(t);
                              }
                              return null;
                          })(e) ||
                          n;
            }
            let en = async function (e) {
                    let t = this.getOffsetParent || et,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: (function (e, t, n) {
                            let r = O(t),
                                o = T(t),
                                l = "fixed" === n,
                                i = Y(e, !0, l, t),
                                a = { scrollLeft: 0, scrollTop: 0 },
                                u = s(0);
                            if (r || (!r && !l)) {
                                if ((("body" !== _(t) || j(o)) && (a = G(t)), r)) {
                                    let e = Y(t, !0, l, t);
                                    (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                                } else o && (u.x = Z(o));
                            }
                            return { x: i.left + a.scrollLeft - u.x, y: i.top + a.scrollTop - u.y, width: i.width, height: i.height };
                        })(e.reference, await t(e.floating), e.strategy),
                        floating: { x: 0, y: 0, width: r.width, height: r.height },
                    };
                },
                er = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                        let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
                            l = "fixed" === o,
                            i = T(r),
                            a = !!t && k(t.floating);
                        if (r === i || (a && l)) return n;
                        let u = { scrollLeft: 0, scrollTop: 0 },
                            c = s(1),
                            d = s(0),
                            f = O(r);
                        if ((f || (!f && !l)) && (("body" !== _(r) || j(i)) && (u = G(r)), O(r))) {
                            let e = Y(r);
                            (c = K(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
                        }
                        return { width: n.width * c.x, height: n.height * c.y, x: n.x * c.x - u.scrollLeft * c.x + d.x, y: n.y * c.y - u.scrollTop * c.y + d.y };
                    },
                    getDocumentElement: T,
                    getClippingRect: function (e) {
                        let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
                            a = [
                                ...("clippingAncestors" === n
                                    ? k(t)
                                        ? []
                                        : (function (e, t) {
                                              let n = t.get(e);
                                              if (n) return n;
                                              let r = $(e, [], !1).filter((e) => A(e) && "body" !== _(e)),
                                                  o = null,
                                                  l = "fixed" === H(e).position,
                                                  i = l ? W(e) : e;
                                              for (; A(i) && !z(i); ) {
                                                  let t = H(i),
                                                      n = V(i);
                                                  n || "fixed" !== t.position || (o = null),
                                                      (
                                                          l
                                                              ? !n && !o
                                                              : (!n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position)) ||
                                                                (j(i) &&
                                                                    !n &&
                                                                    (function e(t, n) {
                                                                        let r = W(t);
                                                                        return !(r === n || !A(r) || z(r)) && ("fixed" === H(r).position || e(r, n));
                                                                    })(e, i))
                                                      )
                                                          ? (r = r.filter((e) => e !== i))
                                                          : (o = t),
                                                      (i = W(i));
                                              }
                                              return t.set(e, r), r;
                                          })(t, this._c)
                                    : [].concat(n)),
                                r,
                            ],
                            u = a[0],
                            s = a.reduce((e, n) => {
                                let r = J(t, n, o);
                                return (e.top = i(r.top, e.top)), (e.right = l(r.right, e.right)), (e.bottom = l(r.bottom, e.bottom)), (e.left = i(r.left, e.left)), e;
                            }, J(t, u, o));
                        return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
                    },
                    getOffsetParent: et,
                    getElementRects: en,
                    getClientRects: function (e) {
                        return Array.from(e.getClientRects());
                    },
                    getDimensions: function (e) {
                        let { width: t, height: n } = B(e);
                        return { width: t, height: n };
                    },
                    getScale: K,
                    isElement: A,
                    isRTL: function (e) {
                        return "rtl" === H(e).direction;
                    },
                },
                eo = (e) => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let { x: n, y: r, placement: o, rects: a, platform: u, elements: s, middlewareData: c } = t,
                            { element: d, padding: g = 0 } = f(e, t) || {};
                        if (null == d) return {};
                        let w = y(g),
                            b = { x: n, y: r },
                            C = v(h(o)),
                            x = m(C),
                            R = await u.getDimensions(d),
                            S = "y" === C,
                            E = S ? "clientHeight" : "clientWidth",
                            M = a.reference[x] + a.reference[C] - b[C] - a.floating[x],
                            P = b[C] - a.reference[C],
                            F = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(d)),
                            _ = F ? F[E] : 0;
                        (_ && (await (null == u.isElement ? void 0 : u.isElement(F)))) || (_ = s.floating[E] || a.floating[x]);
                        let I = _ / 2 - R[x] / 2 - 1,
                            T = l(w[S ? "top" : "left"], I),
                            L = l(w[S ? "bottom" : "right"], I),
                            A = _ - R[x] - L,
                            O = _ / 2 - R[x] / 2 + (M / 2 - P / 2),
                            D = i(T, l(O, A)),
                            j = !c.arrow && null != p(o) && O !== D && a.reference[x] / 2 - (O < T ? T : L) - R[x] / 2 < 0,
                            k = j ? (O < T ? O - T : O - A) : 0;
                        return { [C]: b[C] + k, data: { [C]: D, centerOffset: O - D - k, ...(j && { alignmentOffset: k }) }, reset: j };
                    },
                }),
                el = (e, t, n) => {
                    let r = new Map(),
                        o = { platform: er, ...n },
                        l = { ...o.platform, _c: r };
                    return R(e, t, { ...o, platform: l });
                };
            var ei = n(3458),
                ea = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
            function eu(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--; ) if (!eu(e[r], t[r])) return !1;
                        return !0;
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--; ) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !eu(e[n], t[n])) return !1;
                    }
                    return !0;
                }
                return e != e && t != t;
            }
            function es(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
            }
            function ec(e, t) {
                let n = es(e);
                return Math.round(t * n) / n;
            }
            function ed(e) {
                let t = r.useRef(e);
                return (
                    ea(() => {
                        t.current = e;
                    }),
                    t
                );
            }
            let ef = (e) => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
                        return n && {}.hasOwnProperty.call(n, "current") ? (null != n.current ? eo({ element: n.current, padding: r }).fn(t) : {}) : n ? eo({ element: n, padding: r }).fn(t) : {};
                    },
                }),
                eg = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = 0),
                        {
                            name: "offset",
                            options: n,
                            async fn(e) {
                                var t, r;
                                let { x: o, y: l, placement: i, middlewareData: a } = e,
                                    u = await P(e, n);
                                return i === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : { x: o + u.x, y: l + u.y, data: { ...u, placement: i } };
                            },
                        }),
                        options: [e, t],
                    };
                },
                ep = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}),
                        {
                            name: "shift",
                            options: n,
                            async fn(e) {
                                let { x: t, y: r, placement: o } = e,
                                    {
                                        mainAxis: a = !0,
                                        crossAxis: u = !1,
                                        limiter: s = {
                                            fn: (e) => {
                                                let { x: t, y: n } = e;
                                                return { x: t, y: n };
                                            },
                                        },
                                        ...c
                                    } = f(n, e),
                                    d = { x: t, y: r },
                                    p = await S(e, c),
                                    m = h(g(o)),
                                    w = v(m),
                                    b = d[w],
                                    y = d[m];
                                if (a) {
                                    let e = "y" === w ? "top" : "left",
                                        t = "y" === w ? "bottom" : "right",
                                        n = b + p[e],
                                        r = b - p[t];
                                    b = i(n, l(b, r));
                                }
                                if (u) {
                                    let e = "y" === m ? "top" : "left",
                                        t = "y" === m ? "bottom" : "right",
                                        n = y + p[e],
                                        r = y - p[t];
                                    y = i(n, l(y, r));
                                }
                                let C = s.fn({ ...e, [w]: b, [m]: y });
                                return { ...C, data: { x: C.x - t, y: C.y - r } };
                            },
                        }),
                        options: [e, t],
                    };
                },
                ev = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}),
                        {
                            options: n,
                            fn(e) {
                                let { x: t, y: r, placement: o, rects: l, middlewareData: i } = e,
                                    { offset: a = 0, mainAxis: u = !0, crossAxis: s = !0 } = f(n, e),
                                    c = { x: t, y: r },
                                    d = h(o),
                                    p = v(d),
                                    m = c[p],
                                    w = c[d],
                                    b = f(a, e),
                                    y = "number" == typeof b ? { mainAxis: b, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...b };
                                if (u) {
                                    let e = "y" === p ? "height" : "width",
                                        t = l.reference[p] - l.floating[e] + y.mainAxis,
                                        n = l.reference[p] + l.reference[e] - y.mainAxis;
                                    m < t ? (m = t) : m > n && (m = n);
                                }
                                if (s) {
                                    var C, x;
                                    let e = "y" === p ? "width" : "height",
                                        t = ["top", "left"].includes(g(o)),
                                        n = l.reference[d] - l.floating[e] + ((t && (null == (C = i.offset) ? void 0 : C[d])) || 0) + (t ? 0 : y.crossAxis),
                                        r = l.reference[d] + l.reference[e] + (t ? 0 : (null == (x = i.offset) ? void 0 : x[d]) || 0) - (t ? y.crossAxis : 0);
                                    w < n ? (w = n) : w > r && (w = r);
                                }
                                return { [p]: m, [d]: w };
                            },
                        }),
                        options: [e, t],
                    };
                },
                em = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}),
                        {
                            name: "flip",
                            options: n,
                            async fn(e) {
                                var t, r, o, l, i;
                                let { placement: a, middlewareData: u, rects: s, initialPlacement: c, platform: d, elements: y } = e,
                                    { mainAxis: C = !0, crossAxis: x = !0, fallbackPlacements: R, fallbackStrategy: E = "bestFit", fallbackAxisSideDirection: M = "none", flipAlignment: P = !0, ...F } = f(n, e);
                                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                                let _ = g(a),
                                    I = h(c),
                                    T = g(c) === c,
                                    L = await (null == d.isRTL ? void 0 : d.isRTL(y.floating)),
                                    A =
                                        R ||
                                        (T || !P
                                            ? [b(c)]
                                            : (function (e) {
                                                  let t = b(e);
                                                  return [w(e), t, w(t)];
                                              })(c)),
                                    O = "none" !== M;
                                !R &&
                                    O &&
                                    A.push(
                                        ...(function (e, t, n, r) {
                                            let o = p(e),
                                                l = (function (e, t, n) {
                                                    let r = ["left", "right"],
                                                        o = ["right", "left"];
                                                    switch (e) {
                                                        case "top":
                                                        case "bottom":
                                                            if (n) return t ? o : r;
                                                            return t ? r : o;
                                                        case "left":
                                                        case "right":
                                                            return t ? ["top", "bottom"] : ["bottom", "top"];
                                                        default:
                                                            return [];
                                                    }
                                                })(g(e), "start" === n, r);
                                            return o && ((l = l.map((e) => e + "-" + o)), t && (l = l.concat(l.map(w)))), l;
                                        })(c, P, M, L)
                                    );
                                let D = [c, ...A],
                                    j = await S(e, F),
                                    k = [],
                                    V = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                if ((C && k.push(j[_]), x)) {
                                    let e = (function (e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = p(e),
                                            o = v(h(e)),
                                            l = m(o),
                                            i = "x" === o ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
                                        return t.reference[l] > t.floating[l] && (i = b(i)), [i, b(i)];
                                    })(a, s, L);
                                    k.push(j[e[0]], j[e[1]]);
                                }
                                if (((V = [...V, { placement: a, overflows: k }]), !k.every((e) => e <= 0))) {
                                    let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                        t = D[e];
                                    if (t) return { data: { index: e, overflows: V }, reset: { placement: t } };
                                    let n = null == (l = V.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : l.placement;
                                    if (!n)
                                        switch (E) {
                                            case "bestFit": {
                                                let e =
                                                    null ==
                                                    (i = V.filter((e) => {
                                                        if (O) {
                                                            let t = h(e.placement);
                                                            return t === I || "y" === t;
                                                        }
                                                        return !0;
                                                    })
                                                        .map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)])
                                                        .sort((e, t) => e[1] - t[1])[0])
                                                        ? void 0
                                                        : i[0];
                                                e && (n = e);
                                                break;
                                            }
                                            case "initialPlacement":
                                                n = c;
                                        }
                                    if (a !== n) return { reset: { placement: n } };
                                }
                                return {};
                            },
                        }),
                        options: [e, t],
                    };
                },
                eh = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}),
                        {
                            name: "size",
                            options: n,
                            async fn(e) {
                                let t, r;
                                let { placement: o, rects: a, platform: u, elements: s } = e,
                                    { apply: c = () => {}, ...d } = f(n, e),
                                    v = await S(e, d),
                                    m = g(o),
                                    w = p(o),
                                    b = "y" === h(o),
                                    { width: y, height: C } = a.floating;
                                "top" === m || "bottom" === m ? ((t = m), (r = w === ((await (null == u.isRTL ? void 0 : u.isRTL(s.floating))) ? "start" : "end") ? "left" : "right")) : ((r = m), (t = "end" === w ? "top" : "bottom"));
                                let x = C - v.top - v.bottom,
                                    R = y - v.left - v.right,
                                    E = l(C - v[t], x),
                                    M = l(y - v[r], R),
                                    P = !e.middlewareData.shift,
                                    F = E,
                                    _ = M;
                                if ((b ? (_ = w || P ? l(M, R) : R) : (F = w || P ? l(E, x) : x), P && !w)) {
                                    let e = i(v.left, 0),
                                        t = i(v.right, 0),
                                        n = i(v.top, 0),
                                        r = i(v.bottom, 0);
                                    b ? (_ = y - 2 * (0 !== e || 0 !== t ? e + t : i(v.left, v.right))) : (F = C - 2 * (0 !== n || 0 !== r ? n + r : i(v.top, v.bottom)));
                                }
                                await c({ ...e, availableWidth: _, availableHeight: F });
                                let I = await u.getDimensions(s.floating);
                                return y !== I.width || C !== I.height ? { reset: { rects: !0 } } : {};
                            },
                        }),
                        options: [e, t],
                    };
                },
                ew = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}),
                        {
                            name: "hide",
                            options: n,
                            async fn(e) {
                                let { rects: t } = e,
                                    { strategy: r = "referenceHidden", ...o } = f(n, e);
                                switch (r) {
                                    case "referenceHidden": {
                                        let n = E(await S(e, { ...o, elementContext: "reference" }), t.reference);
                                        return { data: { referenceHiddenOffsets: n, referenceHidden: M(n) } };
                                    }
                                    case "escaped": {
                                        let n = E(await S(e, { ...o, altBoundary: !0 }), t.floating);
                                        return { data: { escapedOffsets: n, escaped: M(n) } };
                                    }
                                    default:
                                        return {};
                                }
                            },
                        }),
                        options: [e, t],
                    };
                },
                eb = (e, t) => ({ ...ef(e), options: [e, t] });
            var ey = n(2122),
                eC = n(7573),
                ex = r.forwardRef((e, t) => {
                    let { children: n, width: r = 10, height: o = 5, ...l } = e;
                    return (0, eC.jsx)(ey.WV.svg, { ...l, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : (0, eC.jsx)("polygon", { points: "0,0 30,0 15,10" }) });
                });
            ex.displayName = "Arrow";
            var eR = n(8709),
                eS = n(523),
                eE = n(1523),
                eM = n(5032),
                eP = "Popper",
                [eF, e_] = (function (e, t = []) {
                    let n = [],
                        o = () => {
                            let t = n.map((e) => r.createContext(e));
                            return function (n) {
                                let o = n?.[e] || t;
                                return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                            };
                        };
                    return (
                        (o.scopeName = e),
                        [
                            function (t, o) {
                                let l = r.createContext(o),
                                    i = n.length;
                                function a(t) {
                                    let { scope: n, children: o, ...a } = t,
                                        u = n?.[e][i] || l,
                                        s = r.useMemo(() => a, Object.values(a));
                                    return (0, eC.jsx)(u.Provider, { value: s, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (a.displayName = t + "Provider"),
                                    [
                                        a,
                                        function (n, a) {
                                            let u = a?.[e][i] || l,
                                                s = r.useContext(u);
                                            if (s) return s;
                                            if (void 0 !== o) return o;
                                            throw Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            (function (...e) {
                                let t = e[0];
                                if (1 === e.length) return t;
                                let n = () => {
                                    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                                    return function (e) {
                                        let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                                            let o = n(e)[`__scope${r}`];
                                            return { ...t, ...o };
                                        }, {});
                                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                                    };
                                };
                                return (n.scopeName = t.scopeName), n;
                            })(o, ...t),
                        ]
                    );
                })(eP),
                [eI, eT] = eF(eP),
                eL = (e) => {
                    let { __scopePopper: t, children: n } = e,
                        [o, l] = r.useState(null);
                    return (0, eC.jsx)(eI, { scope: t, anchor: o, onAnchorChange: l, children: n });
                };
            eL.displayName = eP;
            var eA = "PopperAnchor",
                eO = r.forwardRef((e, t) => {
                    let { __scopePopper: n, virtualRef: o, ...l } = e,
                        i = eT(eA, n),
                        a = r.useRef(null),
                        u = (0, eR.e)(t, a);
                    return (
                        r.useEffect(() => {
                            i.onAnchorChange((null == o ? void 0 : o.current) || a.current);
                        }),
                        o ? null : (0, eC.jsx)(ey.WV.div, { ...l, ref: u })
                    );
                });
            eO.displayName = eA;
            var eD = "PopperContent",
                [ej, ek] = eF(eD),
                eV = r.forwardRef((e, t) => {
                    var n, o, a, s, c, d, f, g;
                    let {
                            __scopePopper: p,
                            side: v = "bottom",
                            sideOffset: m = 0,
                            align: h = "center",
                            alignOffset: w = 0,
                            arrowPadding: b = 0,
                            avoidCollisions: y = !0,
                            collisionBoundary: C = [],
                            collisionPadding: x = 0,
                            sticky: R = "partial",
                            hideWhenDetached: S = !1,
                            updatePositionStrategy: E = "optimized",
                            onPlaced: M,
                            ...P
                        } = e,
                        F = eT(eD, p),
                        [_, I] = r.useState(null),
                        L = (0, eR.e)(t, (e) => I(e)),
                        [A, O] = r.useState(null),
                        D = (0, eM.t)(A),
                        j = null !== (f = null == D ? void 0 : D.width) && void 0 !== f ? f : 0,
                        k = null !== (g = null == D ? void 0 : D.height) && void 0 !== g ? g : 0,
                        V = "number" == typeof x ? x : { top: 0, right: 0, bottom: 0, left: 0, ...x },
                        N = Array.isArray(C) ? C : [C],
                        z = N.length > 0,
                        H = { padding: V, boundary: N.filter(eG), altBoundary: z },
                        { refs: G, floatingStyles: W, placement: B, isPositioned: K, middlewareData: q } = (function (e) {
                            void 0 === e && (e = {});
                            let { placement: t = "bottom", strategy: n = "absolute", middleware: o = [], platform: l, elements: { reference: i, floating: a } = {}, transform: u = !0, whileElementsMounted: s, open: c } = e,
                                [d, f] = r.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
                                [g, p] = r.useState(o);
                            eu(g, o) || p(o);
                            let [v, m] = r.useState(null),
                                [h, w] = r.useState(null),
                                b = r.useCallback((e) => {
                                    e !== R.current && ((R.current = e), m(e));
                                }, []),
                                y = r.useCallback((e) => {
                                    e !== S.current && ((S.current = e), w(e));
                                }, []),
                                C = i || v,
                                x = a || h,
                                R = r.useRef(null),
                                S = r.useRef(null),
                                E = r.useRef(d),
                                M = null != s,
                                P = ed(s),
                                F = ed(l),
                                _ = r.useCallback(() => {
                                    if (!R.current || !S.current) return;
                                    let e = { placement: t, strategy: n, middleware: g };
                                    F.current && (e.platform = F.current),
                                        el(R.current, S.current, e).then((e) => {
                                            let t = { ...e, isPositioned: !0 };
                                            I.current &&
                                                !eu(E.current, t) &&
                                                ((E.current = t),
                                                ei.flushSync(() => {
                                                    f(t);
                                                }));
                                        });
                                }, [g, t, n, F]);
                            ea(() => {
                                !1 === c && E.current.isPositioned && ((E.current.isPositioned = !1), f((e) => ({ ...e, isPositioned: !1 })));
                            }, [c]);
                            let I = r.useRef(!1);
                            ea(
                                () => (
                                    (I.current = !0),
                                    () => {
                                        I.current = !1;
                                    }
                                ),
                                []
                            ),
                                ea(() => {
                                    if ((C && (R.current = C), x && (S.current = x), C && x)) {
                                        if (P.current) return P.current(C, x, _);
                                        _();
                                    }
                                }, [C, x, _, P, M]);
                            let T = r.useMemo(() => ({ reference: R, floating: S, setReference: b, setFloating: y }), [b, y]),
                                L = r.useMemo(() => ({ reference: C, floating: x }), [C, x]),
                                A = r.useMemo(() => {
                                    let e = { position: n, left: 0, top: 0 };
                                    if (!L.floating) return e;
                                    let t = ec(L.floating, d.x),
                                        r = ec(L.floating, d.y);
                                    return u ? { ...e, transform: "translate(" + t + "px, " + r + "px)", ...(es(L.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: t, top: r };
                                }, [n, u, L.floating, d.x, d.y]);
                            return r.useMemo(() => ({ ...d, update: _, refs: T, elements: L, floatingStyles: A }), [d, _, T, L, A]);
                        })({
                            strategy: "fixed",
                            placement: v + ("center" !== h ? "-" + h : ""),
                            whileElementsMounted: function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return (function (e, t, n, r) {
                                    let o;
                                    void 0 === r && (r = {});
                                    let { ancestorScroll: a = !0, ancestorResize: s = !0, elementResize: c = "function" == typeof ResizeObserver, layoutShift: d = "function" == typeof IntersectionObserver, animationFrame: f = !1 } = r,
                                        g = U(e),
                                        p = a || s ? [...(g ? $(g) : []), ...$(t)] : [];
                                    p.forEach((e) => {
                                        a && e.addEventListener("scroll", n, { passive: !0 }), s && e.addEventListener("resize", n);
                                    });
                                    let v =
                                            g && d
                                                ? (function (e, t) {
                                                      let n,
                                                          r = null,
                                                          o = T(e);
                                                      function a() {
                                                          var e;
                                                          clearTimeout(n), null == (e = r) || e.disconnect(), (r = null);
                                                      }
                                                      return (
                                                          !(function s(c, d) {
                                                              void 0 === c && (c = !1), void 0 === d && (d = 1), a();
                                                              let { left: f, top: g, width: p, height: v } = e.getBoundingClientRect();
                                                              if ((c || t(), !p || !v)) return;
                                                              let m = u(g),
                                                                  h = u(o.clientWidth - (f + p)),
                                                                  w = { rootMargin: -m + "px " + -h + "px " + -u(o.clientHeight - (g + v)) + "px " + -u(f) + "px", threshold: i(0, l(1, d)) || 1 },
                                                                  b = !0;
                                                              function y(e) {
                                                                  let t = e[0].intersectionRatio;
                                                                  if (t !== d) {
                                                                      if (!b) return s();
                                                                      t
                                                                          ? s(!1, t)
                                                                          : (n = setTimeout(() => {
                                                                                s(!1, 1e-7);
                                                                            }, 1e3));
                                                                  }
                                                                  b = !1;
                                                              }
                                                              try {
                                                                  r = new IntersectionObserver(y, { ...w, root: o.ownerDocument });
                                                              } catch (e) {
                                                                  r = new IntersectionObserver(y, w);
                                                              }
                                                              r.observe(e);
                                                          })(!0),
                                                          a
                                                      );
                                                  })(g, n)
                                                : null,
                                        m = -1,
                                        h = null;
                                    c &&
                                        ((h = new ResizeObserver((e) => {
                                            let [r] = e;
                                            r &&
                                                r.target === g &&
                                                h &&
                                                (h.unobserve(t),
                                                cancelAnimationFrame(m),
                                                (m = requestAnimationFrame(() => {
                                                    var e;
                                                    null == (e = h) || e.observe(t);
                                                }))),
                                                n();
                                        })),
                                        g && !f && h.observe(g),
                                        h.observe(t));
                                    let w = f ? Y(e) : null;
                                    return (
                                        f &&
                                            (function t() {
                                                let r = Y(e);
                                                w && (r.x !== w.x || r.y !== w.y || r.width !== w.width || r.height !== w.height) && n(), (w = r), (o = requestAnimationFrame(t));
                                            })(),
                                        n(),
                                        () => {
                                            var e;
                                            p.forEach((e) => {
                                                a && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n);
                                            }),
                                                null == v || v(),
                                                null == (e = h) || e.disconnect(),
                                                (h = null),
                                                f && cancelAnimationFrame(o);
                                        }
                                    );
                                })(...t, { animationFrame: "always" === E });
                            },
                            elements: { reference: F.anchor },
                            middleware: [
                                eg({ mainAxis: m + k, alignmentAxis: w }),
                                y && ep({ mainAxis: !0, crossAxis: !1, limiter: "partial" === R ? ev() : void 0, ...H }),
                                y && em({ ...H }),
                                eh({
                                    ...H,
                                    apply: (e) => {
                                        let { elements: t, rects: n, availableWidth: r, availableHeight: o } = e,
                                            { width: l, height: i } = n.reference,
                                            a = t.floating.style;
                                        a.setProperty("--radix-popper-available-width", "".concat(r, "px")),
                                            a.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                                            a.setProperty("--radix-popper-anchor-width", "".concat(l, "px")),
                                            a.setProperty("--radix-popper-anchor-height", "".concat(i, "px"));
                                    },
                                }),
                                A && eb({ element: A, padding: b }),
                                eW({ arrowWidth: j, arrowHeight: k }),
                                S && ew({ strategy: "referenceHidden", ...H }),
                            ],
                        }),
                        [X, Z] = e$(B),
                        J = (0, eS.W)(M);
                    (0, eE.b)(() => {
                        K && (null == J || J());
                    }, [K, J]);
                    let Q = null === (n = q.arrow) || void 0 === n ? void 0 : n.x,
                        ee = null === (o = q.arrow) || void 0 === o ? void 0 : o.y,
                        et = (null === (a = q.arrow) || void 0 === a ? void 0 : a.centerOffset) !== 0,
                        [en, er] = r.useState();
                    return (
                        (0, eE.b)(() => {
                            _ && er(window.getComputedStyle(_).zIndex);
                        }, [_]),
                        (0, eC.jsx)("div", {
                            ref: G.setFloating,
                            "data-radix-popper-content-wrapper": "",
                            style: {
                                ...W,
                                transform: K ? W.transform : "translate(0, -200%)",
                                minWidth: "max-content",
                                zIndex: en,
                                "--radix-popper-transform-origin": [null === (s = q.transformOrigin) || void 0 === s ? void 0 : s.x, null === (c = q.transformOrigin) || void 0 === c ? void 0 : c.y].join(" "),
                                ...((null === (d = q.hide) || void 0 === d ? void 0 : d.referenceHidden) && { visibility: "hidden", pointerEvents: "none" }),
                            },
                            dir: e.dir,
                            children: (0, eC.jsx)(ej, {
                                scope: p,
                                placedSide: X,
                                onArrowChange: O,
                                arrowX: Q,
                                arrowY: ee,
                                shouldHideArrow: et,
                                children: (0, eC.jsx)(ey.WV.div, { "data-side": X, "data-align": Z, ...P, ref: L, style: { ...P.style, animation: K ? void 0 : "none" } }),
                            }),
                        })
                    );
                });
            eV.displayName = eD;
            var eN = "PopperArrow",
                ez = { top: "bottom", right: "left", bottom: "top", left: "right" },
                eH = r.forwardRef(function (e, t) {
                    let { __scopePopper: n, ...r } = e,
                        o = ek(eN, n),
                        l = ez[o.placedSide];
                    return (0,
                    eC.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, eC.jsx)(ex, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
                });
            function eG(e) {
                return null !== e;
            }
            eH.displayName = eN;
            var eW = (e) => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, l, i;
                    let { placement: a, rects: u, middlewareData: s } = t,
                        c = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0,
                        d = c ? 0 : e.arrowWidth,
                        f = c ? 0 : e.arrowHeight,
                        [g, p] = e$(a),
                        v = { start: "0%", center: "50%", end: "100%" }[p],
                        m = (null !== (l = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== l ? l : 0) + d / 2,
                        h = (null !== (i = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== i ? i : 0) + f / 2,
                        w = "",
                        b = "";
                    return (
                        "bottom" === g
                            ? ((w = c ? v : "".concat(m, "px")), (b = "".concat(-f, "px")))
                            : "top" === g
                            ? ((w = c ? v : "".concat(m, "px")), (b = "".concat(u.floating.height + f, "px")))
                            : "right" === g
                            ? ((w = "".concat(-f, "px")), (b = c ? v : "".concat(h, "px")))
                            : "left" === g && ((w = "".concat(u.floating.width + f, "px")), (b = c ? v : "".concat(h, "px"))),
                        { data: { x: w, y: b } }
                    );
                },
            });
            function e$(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n];
            }
            var eB = eL,
                eU = eO,
                eK = eV,
                eq = eH;
        },
        3222: function (e, t, n) {
            "use strict";
            n.d(t, {
                ck: function () {
                    return I;
                },
                fC: function () {
                    return _;
                },
                Pc: function () {
                    return y;
                },
            });
            var r = n(7653),
                o = n(9764),
                l = n(1735),
                i = n(8709),
                a = n(7573),
                u = n(7321),
                s = n(2122),
                c = n(523),
                d = n(7178),
                f = n(1004),
                g = "rovingFocusGroup.onEntryFocus",
                p = { bubbles: !1, cancelable: !0 },
                v = "RovingFocusGroup",
                [m, h, w] = (0, l.B)(v),
                [b, y] = (function (e, t = []) {
                    let n = [],
                        o = () => {
                            let t = n.map((e) => r.createContext(e));
                            return function (n) {
                                let o = n?.[e] || t;
                                return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                            };
                        };
                    return (
                        (o.scopeName = e),
                        [
                            function (t, o) {
                                let l = r.createContext(o),
                                    i = n.length;
                                function u(t) {
                                    let { scope: n, children: o, ...u } = t,
                                        s = n?.[e][i] || l,
                                        c = r.useMemo(() => u, Object.values(u));
                                    return (0, a.jsx)(s.Provider, { value: c, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (u.displayName = t + "Provider"),
                                    [
                                        u,
                                        function (n, a) {
                                            let u = a?.[e][i] || l,
                                                s = r.useContext(u);
                                            if (s) return s;
                                            if (void 0 !== o) return o;
                                            throw Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            (function (...e) {
                                let t = e[0];
                                if (1 === e.length) return t;
                                let n = () => {
                                    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                                    return function (e) {
                                        let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                                            let o = n(e)[`__scope${r}`];
                                            return { ...t, ...o };
                                        }, {});
                                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                                    };
                                };
                                return (n.scopeName = t.scopeName), n;
                            })(o, ...t),
                        ]
                    );
                })(v, [w]),
                [C, x] = b(v),
                R = r.forwardRef((e, t) => (0, a.jsx)(m.Provider, { scope: e.__scopeRovingFocusGroup, children: (0, a.jsx)(m.Slot, { scope: e.__scopeRovingFocusGroup, children: (0, a.jsx)(S, { ...e, ref: t }) }) }));
            R.displayName = v;
            var S = r.forwardRef((e, t) => {
                    let { __scopeRovingFocusGroup: n, orientation: l, loop: u = !1, dir: v, currentTabStopId: m, defaultCurrentTabStopId: w, onCurrentTabStopIdChange: b, onEntryFocus: y, preventScrollOnEntryFocus: x = !1, ...R } = e,
                        S = r.useRef(null),
                        E = (0, i.e)(t, S),
                        M = (0, f.gm)(v),
                        [P = null, _] = (0, d.T)({ prop: m, defaultProp: w, onChange: b }),
                        [I, T] = r.useState(!1),
                        L = (0, c.W)(y),
                        A = h(n),
                        O = r.useRef(!1),
                        [D, j] = r.useState(0);
                    return (
                        r.useEffect(() => {
                            let e = S.current;
                            if (e) return e.addEventListener(g, L), () => e.removeEventListener(g, L);
                        }, [L]),
                        (0, a.jsx)(C, {
                            scope: n,
                            orientation: l,
                            dir: M,
                            loop: u,
                            currentTabStopId: P,
                            onItemFocus: r.useCallback((e) => _(e), [_]),
                            onItemShiftTab: r.useCallback(() => T(!0), []),
                            onFocusableItemAdd: r.useCallback(() => j((e) => e + 1), []),
                            onFocusableItemRemove: r.useCallback(() => j((e) => e - 1), []),
                            children: (0, a.jsx)(s.WV.div, {
                                tabIndex: I || 0 === D ? -1 : 0,
                                "data-orientation": l,
                                ...R,
                                ref: E,
                                style: { outline: "none", ...e.style },
                                onMouseDown: (0, o.M)(e.onMouseDown, () => {
                                    O.current = !0;
                                }),
                                onFocus: (0, o.M)(e.onFocus, (e) => {
                                    let t = !O.current;
                                    if (e.target === e.currentTarget && t && !I) {
                                        let t = new CustomEvent(g, p);
                                        if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                                            let e = A().filter((e) => e.focusable);
                                            F(
                                                [e.find((e) => e.active), e.find((e) => e.id === P), ...e].filter(Boolean).map((e) => e.ref.current),
                                                x
                                            );
                                        }
                                    }
                                    O.current = !1;
                                }),
                                onBlur: (0, o.M)(e.onBlur, () => T(!1)),
                            }),
                        })
                    );
                }),
                E = "RovingFocusGroupItem",
                M = r.forwardRef((e, t) => {
                    let { __scopeRovingFocusGroup: n, focusable: l = !0, active: i = !1, tabStopId: c, ...d } = e,
                        f = (0, u.M)(),
                        g = c || f,
                        p = x(E, n),
                        v = p.currentTabStopId === g,
                        w = h(n),
                        { onFocusableItemAdd: b, onFocusableItemRemove: y } = p;
                    return (
                        r.useEffect(() => {
                            if (l) return b(), () => y();
                        }, [l, b, y]),
                        (0, a.jsx)(m.ItemSlot, {
                            scope: n,
                            id: g,
                            focusable: l,
                            active: i,
                            children: (0, a.jsx)(s.WV.span, {
                                tabIndex: v ? 0 : -1,
                                "data-orientation": p.orientation,
                                ...d,
                                ref: t,
                                onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                                    l ? p.onItemFocus(g) : e.preventDefault();
                                }),
                                onFocus: (0, o.M)(e.onFocus, () => p.onItemFocus(g)),
                                onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                                    if ("Tab" === e.key && e.shiftKey) {
                                        p.onItemShiftTab();
                                        return;
                                    }
                                    if (e.target !== e.currentTarget) return;
                                    let t = (function (e, t, n) {
                                        var r;
                                        let o = ((r = e.key), "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return P[o];
                                    })(e, p.orientation, p.dir);
                                    if (void 0 !== t) {
                                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                        e.preventDefault();
                                        let o = w()
                                            .filter((e) => e.focusable)
                                            .map((e) => e.ref.current);
                                        if ("last" === t) o.reverse();
                                        else if ("prev" === t || "next" === t) {
                                            var n, r;
                                            "prev" === t && o.reverse();
                                            let l = o.indexOf(e.currentTarget);
                                            o = p.loop ? ((n = o), (r = l + 1), n.map((e, t) => n[(r + t) % n.length])) : o.slice(l + 1);
                                        }
                                        setTimeout(() => F(o));
                                    }
                                }),
                            }),
                        })
                    );
                });
            M.displayName = E;
            var P = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
            function F(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = document.activeElement;
                for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
            }
            var _ = R,
                I = M;
        },
        156: function (e, t, n) {
            "use strict";
            n.d(t, {
                Ns: function () {
                    return q;
                },
                fC: function () {
                    return U;
                },
                gb: function () {
                    return x;
                },
                q4: function () {
                    return A;
                },
                l_: function () {
                    return K;
                },
            });
            var r = n(7653),
                o = n(2122),
                l = n(2163),
                i = n(9933),
                a = n(8709),
                u = n(523),
                s = n(1004),
                c = n(1523),
                d = n(9764),
                f = n(7573),
                g = "ScrollArea",
                [p, v] = (0, i.b)(g),
                [m, h] = p(g),
                w = r.forwardRef((e, t) => {
                    let { __scopeScrollArea: n, type: l = "hover", dir: i, scrollHideDelay: u = 600, ...c } = e,
                        [d, g] = r.useState(null),
                        [p, v] = r.useState(null),
                        [h, w] = r.useState(null),
                        [b, y] = r.useState(null),
                        [C, x] = r.useState(null),
                        [R, S] = r.useState(0),
                        [E, M] = r.useState(0),
                        [P, F] = r.useState(!1),
                        [_, I] = r.useState(!1),
                        T = (0, a.e)(t, (e) => g(e)),
                        L = (0, s.gm)(i);
                    return (0, f.jsx)(m, {
                        scope: n,
                        type: l,
                        dir: L,
                        scrollHideDelay: u,
                        scrollArea: d,
                        viewport: p,
                        onViewportChange: v,
                        content: h,
                        onContentChange: w,
                        scrollbarX: b,
                        onScrollbarXChange: y,
                        scrollbarXEnabled: P,
                        onScrollbarXEnabledChange: F,
                        scrollbarY: C,
                        onScrollbarYChange: x,
                        scrollbarYEnabled: _,
                        onScrollbarYEnabledChange: I,
                        onCornerWidthChange: S,
                        onCornerHeightChange: M,
                        children: (0, f.jsx)(o.WV.div, { dir: L, ...c, ref: T, style: { position: "relative", "--radix-scroll-area-corner-width": R + "px", "--radix-scroll-area-corner-height": E + "px", ...e.style } }),
                    });
                });
            w.displayName = g;
            var b = "ScrollAreaViewport",
                y = r.forwardRef((e, t) => {
                    let { __scopeScrollArea: n, children: l, asChild: i, nonce: u, ...s } = e,
                        c = h(b, n),
                        d = r.useRef(null),
                        g = (0, a.e)(t, d, c.onViewportChange);
                    return (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                    __html:
                                        "\n[data-radix-scroll-area-viewport] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n[data-radix-scroll-area-viewport]::-webkit-scrollbar {\n  display: none;\n}\n:where([data-radix-scroll-area-viewport]) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n:where([data-radix-scroll-area-content]) {\n  flex-grow: 1;\n}\n",
                                },
                                nonce: u,
                            }),
                            (0, f.jsx)(o.WV.div, {
                                "data-radix-scroll-area-viewport": "",
                                ...s,
                                asChild: i,
                                ref: g,
                                style: { overflowX: c.scrollbarXEnabled ? "scroll" : "hidden", overflowY: c.scrollbarYEnabled ? "scroll" : "hidden", ...e.style },
                                children: (function (e, t) {
                                    let { asChild: n, children: o } = e;
                                    if (!n) return "function" == typeof t ? t(o) : t;
                                    let l = r.Children.only(o);
                                    return r.cloneElement(l, { children: "function" == typeof t ? t(l.props.children) : t });
                                })({ asChild: i, children: l }, (e) => (0, f.jsx)("div", { "data-radix-scroll-area-content": "", ref: c.onContentChange, style: { minWidth: c.scrollbarXEnabled ? "fit-content" : void 0 }, children: e })),
                            }),
                        ],
                    });
                });
            y.displayName = b;
            var C = "ScrollAreaScrollbar",
                x = r.forwardRef((e, t) => {
                    let { forceMount: n, ...o } = e,
                        l = h(C, e.__scopeScrollArea),
                        { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = l,
                        u = "horizontal" === e.orientation;
                    return (
                        r.useEffect(
                            () => (
                                u ? i(!0) : a(!0),
                                () => {
                                    u ? i(!1) : a(!1);
                                }
                            ),
                            [u, i, a]
                        ),
                        "hover" === l.type
                            ? (0, f.jsx)(R, { ...o, ref: t, forceMount: n })
                            : "scroll" === l.type
                            ? (0, f.jsx)(S, { ...o, ref: t, forceMount: n })
                            : "auto" === l.type
                            ? (0, f.jsx)(E, { ...o, ref: t, forceMount: n })
                            : "always" === l.type
                            ? (0, f.jsx)(M, { ...o, ref: t })
                            : null
                    );
                });
            x.displayName = C;
            var R = r.forwardRef((e, t) => {
                    let { forceMount: n, ...o } = e,
                        i = h(C, e.__scopeScrollArea),
                        [a, u] = r.useState(!1);
                    return (
                        r.useEffect(() => {
                            let e = i.scrollArea,
                                t = 0;
                            if (e) {
                                let n = () => {
                                        window.clearTimeout(t), u(!0);
                                    },
                                    r = () => {
                                        t = window.setTimeout(() => u(!1), i.scrollHideDelay);
                                    };
                                return (
                                    e.addEventListener("pointerenter", n),
                                    e.addEventListener("pointerleave", r),
                                    () => {
                                        window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r);
                                    }
                                );
                            }
                        }, [i.scrollArea, i.scrollHideDelay]),
                        (0, f.jsx)(l.z, { present: n || a, children: (0, f.jsx)(E, { "data-state": a ? "visible" : "hidden", ...o, ref: t }) })
                    );
                }),
                S = r.forwardRef((e, t) => {
                    var n, o;
                    let { forceMount: i, ...a } = e,
                        u = h(C, e.__scopeScrollArea),
                        s = "horizontal" === e.orientation,
                        c = $(() => p("SCROLL_END"), 100),
                        [g, p] =
                            ((n = "hidden"),
                            (o = {
                                hidden: { SCROLL: "scrolling" },
                                scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
                                interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
                                idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" },
                            }),
                            r.useReducer((e, t) => {
                                let n = o[e][t];
                                return null != n ? n : e;
                            }, n));
                    return (
                        r.useEffect(() => {
                            if ("idle" === g) {
                                let e = window.setTimeout(() => p("HIDE"), u.scrollHideDelay);
                                return () => window.clearTimeout(e);
                            }
                        }, [g, u.scrollHideDelay, p]),
                        r.useEffect(() => {
                            let e = u.viewport,
                                t = s ? "scrollLeft" : "scrollTop";
                            if (e) {
                                let n = e[t],
                                    r = () => {
                                        let r = e[t];
                                        n !== r && (p("SCROLL"), c()), (n = r);
                                    };
                                return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r);
                            }
                        }, [u.viewport, s, p, c]),
                        (0, f.jsx)(l.z, {
                            present: i || "hidden" !== g,
                            children: (0, f.jsx)(M, {
                                "data-state": "hidden" === g ? "hidden" : "visible",
                                ...a,
                                ref: t,
                                onPointerEnter: (0, d.M)(e.onPointerEnter, () => p("POINTER_ENTER")),
                                onPointerLeave: (0, d.M)(e.onPointerLeave, () => p("POINTER_LEAVE")),
                            }),
                        })
                    );
                }),
                E = r.forwardRef((e, t) => {
                    let n = h(C, e.__scopeScrollArea),
                        { forceMount: o, ...i } = e,
                        [a, u] = r.useState(!1),
                        s = "horizontal" === e.orientation,
                        c = $(() => {
                            if (n.viewport) {
                                let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                                    t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                                u(s ? e : t);
                            }
                        }, 10);
                    return B(n.viewport, c), B(n.content, c), (0, f.jsx)(l.z, { present: o || a, children: (0, f.jsx)(M, { "data-state": a ? "visible" : "hidden", ...i, ref: t }) });
                }),
                M = r.forwardRef((e, t) => {
                    let { orientation: n = "vertical", ...o } = e,
                        l = h(C, e.__scopeScrollArea),
                        i = r.useRef(null),
                        a = r.useRef(0),
                        [u, s] = r.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }),
                        c = N(u.viewport, u.content),
                        d = { ...o, sizes: u, onSizesChange: s, hasThumb: !!(c > 0 && c < 1), onThumbChange: (e) => (i.current = e), onThumbPointerUp: () => (a.current = 0), onThumbPointerDown: (e) => (a.current = e) };
                    function g(e, t) {
                        return (function (e, t, n) {
                            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr",
                                o = z(n),
                                l = t || o / 2,
                                i = n.scrollbar.paddingStart + l,
                                a = n.scrollbar.size - n.scrollbar.paddingEnd - (o - l),
                                u = n.content - n.viewport;
                            return G([i, a], "ltr" === r ? [0, u] : [-1 * u, 0])(e);
                        })(e, a.current, u, t);
                    }
                    return "horizontal" === n
                        ? (0, f.jsx)(P, {
                              ...d,
                              ref: t,
                              onThumbPositionChange: () => {
                                  if (l.viewport && i.current) {
                                      let e = H(l.viewport.scrollLeft, u, l.dir);
                                      i.current.style.transform = "translate3d(".concat(e, "px, 0, 0)");
                                  }
                              },
                              onWheelScroll: (e) => {
                                  l.viewport && (l.viewport.scrollLeft = e);
                              },
                              onDragScroll: (e) => {
                                  l.viewport && (l.viewport.scrollLeft = g(e, l.dir));
                              },
                          })
                        : "vertical" === n
                        ? (0, f.jsx)(F, {
                              ...d,
                              ref: t,
                              onThumbPositionChange: () => {
                                  if (l.viewport && i.current) {
                                      let e = H(l.viewport.scrollTop, u);
                                      i.current.style.transform = "translate3d(0, ".concat(e, "px, 0)");
                                  }
                              },
                              onWheelScroll: (e) => {
                                  l.viewport && (l.viewport.scrollTop = e);
                              },
                              onDragScroll: (e) => {
                                  l.viewport && (l.viewport.scrollTop = g(e));
                              },
                          })
                        : null;
                }),
                P = r.forwardRef((e, t) => {
                    let { sizes: n, onSizesChange: o, ...l } = e,
                        i = h(C, e.__scopeScrollArea),
                        [u, s] = r.useState(),
                        c = r.useRef(null),
                        d = (0, a.e)(t, c, i.onScrollbarXChange);
                    return (
                        r.useEffect(() => {
                            c.current && s(getComputedStyle(c.current));
                        }, [c]),
                        (0, f.jsx)(T, {
                            "data-orientation": "horizontal",
                            ...l,
                            ref: d,
                            sizes: n,
                            style: {
                                bottom: 0,
                                left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                                right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                                "--radix-scroll-area-thumb-width": z(n) + "px",
                                ...e.style,
                            },
                            onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
                            onDragScroll: (t) => e.onDragScroll(t.x),
                            onWheelScroll: (t, n) => {
                                if (i.viewport) {
                                    let r = i.viewport.scrollLeft + t.deltaX;
                                    e.onWheelScroll(r), r > 0 && r < n && t.preventDefault();
                                }
                            },
                            onResize: () => {
                                c.current &&
                                    i.viewport &&
                                    u &&
                                    o({ content: i.viewport.scrollWidth, viewport: i.viewport.offsetWidth, scrollbar: { size: c.current.clientWidth, paddingStart: V(u.paddingLeft), paddingEnd: V(u.paddingRight) } });
                            },
                        })
                    );
                }),
                F = r.forwardRef((e, t) => {
                    let { sizes: n, onSizesChange: o, ...l } = e,
                        i = h(C, e.__scopeScrollArea),
                        [u, s] = r.useState(),
                        c = r.useRef(null),
                        d = (0, a.e)(t, c, i.onScrollbarYChange);
                    return (
                        r.useEffect(() => {
                            c.current && s(getComputedStyle(c.current));
                        }, [c]),
                        (0, f.jsx)(T, {
                            "data-orientation": "vertical",
                            ...l,
                            ref: d,
                            sizes: n,
                            style: { top: 0, right: "ltr" === i.dir ? 0 : void 0, left: "rtl" === i.dir ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": z(n) + "px", ...e.style },
                            onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
                            onDragScroll: (t) => e.onDragScroll(t.y),
                            onWheelScroll: (t, n) => {
                                if (i.viewport) {
                                    let r = i.viewport.scrollTop + t.deltaY;
                                    e.onWheelScroll(r), r > 0 && r < n && t.preventDefault();
                                }
                            },
                            onResize: () => {
                                c.current &&
                                    i.viewport &&
                                    u &&
                                    o({ content: i.viewport.scrollHeight, viewport: i.viewport.offsetHeight, scrollbar: { size: c.current.clientHeight, paddingStart: V(u.paddingTop), paddingEnd: V(u.paddingBottom) } });
                            },
                        })
                    );
                }),
                [_, I] = p(C),
                T = r.forwardRef((e, t) => {
                    let { __scopeScrollArea: n, sizes: l, hasThumb: i, onThumbChange: s, onThumbPointerUp: c, onThumbPointerDown: g, onThumbPositionChange: p, onDragScroll: v, onWheelScroll: m, onResize: w, ...b } = e,
                        y = h(C, n),
                        [x, R] = r.useState(null),
                        S = (0, a.e)(t, (e) => R(e)),
                        E = r.useRef(null),
                        M = r.useRef(""),
                        P = y.viewport,
                        F = l.content - l.viewport,
                        I = (0, u.W)(m),
                        T = (0, u.W)(p),
                        L = $(w, 10);
                    function A(e) {
                        E.current && v({ x: e.clientX - E.current.left, y: e.clientY - E.current.top });
                    }
                    return (
                        r.useEffect(() => {
                            let e = (e) => {
                                let t = e.target;
                                (null == x ? void 0 : x.contains(t)) && I(e, F);
                            };
                            return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
                        }, [P, x, F, I]),
                        r.useEffect(T, [l, T]),
                        B(x, L),
                        B(y.content, L),
                        (0, f.jsx)(_, {
                            scope: n,
                            scrollbar: x,
                            hasThumb: i,
                            onThumbChange: (0, u.W)(s),
                            onThumbPointerUp: (0, u.W)(c),
                            onThumbPositionChange: T,
                            onThumbPointerDown: (0, u.W)(g),
                            children: (0, f.jsx)(o.WV.div, {
                                ...b,
                                ref: S,
                                style: { position: "absolute", ...b.style },
                                onPointerDown: (0, d.M)(e.onPointerDown, (e) => {
                                    0 === e.button &&
                                        (e.target.setPointerCapture(e.pointerId),
                                        (E.current = x.getBoundingClientRect()),
                                        (M.current = document.body.style.webkitUserSelect),
                                        (document.body.style.webkitUserSelect = "none"),
                                        y.viewport && (y.viewport.style.scrollBehavior = "auto"),
                                        A(e));
                                }),
                                onPointerMove: (0, d.M)(e.onPointerMove, A),
                                onPointerUp: (0, d.M)(e.onPointerUp, (e) => {
                                    let t = e.target;
                                    t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), (document.body.style.webkitUserSelect = M.current), y.viewport && (y.viewport.style.scrollBehavior = ""), (E.current = null);
                                }),
                            }),
                        })
                    );
                }),
                L = "ScrollAreaThumb",
                A = r.forwardRef((e, t) => {
                    let { forceMount: n, ...r } = e,
                        o = I(L, e.__scopeScrollArea);
                    return (0, f.jsx)(l.z, { present: n || o.hasThumb, children: (0, f.jsx)(O, { ref: t, ...r }) });
                }),
                O = r.forwardRef((e, t) => {
                    let { __scopeScrollArea: n, style: l, ...i } = e,
                        u = h(L, n),
                        s = I(L, n),
                        { onThumbPositionChange: c } = s,
                        g = (0, a.e)(t, (e) => s.onThumbChange(e)),
                        p = r.useRef(),
                        v = $(() => {
                            p.current && (p.current(), (p.current = void 0));
                        }, 100);
                    return (
                        r.useEffect(() => {
                            let e = u.viewport;
                            if (e) {
                                let t = () => {
                                    if ((v(), !p.current)) {
                                        let t = W(e, c);
                                        (p.current = t), c();
                                    }
                                };
                                return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
                            }
                        }, [u.viewport, v, c]),
                        (0, f.jsx)(o.WV.div, {
                            "data-state": s.hasThumb ? "visible" : "hidden",
                            ...i,
                            ref: g,
                            style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...l },
                            onPointerDownCapture: (0, d.M)(e.onPointerDownCapture, (e) => {
                                let t = e.target.getBoundingClientRect(),
                                    n = e.clientX - t.left,
                                    r = e.clientY - t.top;
                                s.onThumbPointerDown({ x: n, y: r });
                            }),
                            onPointerUp: (0, d.M)(e.onPointerUp, s.onThumbPointerUp),
                        })
                    );
                });
            A.displayName = L;
            var D = "ScrollAreaCorner",
                j = r.forwardRef((e, t) => {
                    let n = h(D, e.__scopeScrollArea),
                        r = !!(n.scrollbarX && n.scrollbarY);
                    return "scroll" !== n.type && r ? (0, f.jsx)(k, { ...e, ref: t }) : null;
                });
            j.displayName = D;
            var k = r.forwardRef((e, t) => {
                let { __scopeScrollArea: n, ...l } = e,
                    i = h(D, n),
                    [a, u] = r.useState(0),
                    [s, c] = r.useState(0),
                    d = !!(a && s);
                return (
                    B(i.scrollbarX, () => {
                        var e;
                        let t = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                        i.onCornerHeightChange(t), c(t);
                    }),
                    B(i.scrollbarY, () => {
                        var e;
                        let t = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                        i.onCornerWidthChange(t), u(t);
                    }),
                    d ? (0, f.jsx)(o.WV.div, { ...l, ref: t, style: { width: a, height: s, position: "absolute", right: "ltr" === i.dir ? 0 : void 0, left: "rtl" === i.dir ? 0 : void 0, bottom: 0, ...e.style } }) : null
                );
            });
            function V(e) {
                return e ? parseInt(e, 10) : 0;
            }
            function N(e, t) {
                let n = e / t;
                return isNaN(n) ? 0 : n;
            }
            function z(e) {
                let t = N(e.viewport, e.content),
                    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
                return Math.max((e.scrollbar.size - n) * t, 18);
            }
            function H(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    r = z(t),
                    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                    l = t.scrollbar.size - o,
                    i = t.content - t.viewport,
                    a = (function (e, [t, n]) {
                        return Math.min(n, Math.max(t, e));
                    })(e, "ltr" === n ? [0, i] : [-1 * i, 0]);
                return G([0, i], [0, l - r])(a);
            }
            function G(e, t) {
                return (n) => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let r = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + r * (n - e[0]);
                };
            }
            var W = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = { left: e.scrollLeft, top: e.scrollTop },
                    r = 0;
                return (
                    !(function o() {
                        let l = { left: e.scrollLeft, top: e.scrollTop },
                            i = n.left !== l.left,
                            a = n.top !== l.top;
                        (i || a) && t(), (n = l), (r = window.requestAnimationFrame(o));
                    })(),
                    () => window.cancelAnimationFrame(r)
                );
            };
            function $(e, t) {
                let n = (0, u.W)(e),
                    o = r.useRef(0);
                return (
                    r.useEffect(() => () => window.clearTimeout(o.current), []),
                    r.useCallback(() => {
                        window.clearTimeout(o.current), (o.current = window.setTimeout(n, t));
                    }, [n, t])
                );
            }
            function B(e, t) {
                let n = (0, u.W)(t);
                (0, c.b)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
                        });
                        return (
                            r.observe(e),
                            () => {
                                window.cancelAnimationFrame(t), r.unobserve(e);
                            }
                        );
                    }
                }, [e, n]);
            }
            var U = w,
                K = y,
                q = j;
        },
        3196: function (e, t, n) {
            "use strict";
            n.d(t, {
                f: function () {
                    return s;
                },
            });
            var r = n(7653),
                o = n(2122),
                l = n(7573),
                i = "horizontal",
                a = ["horizontal", "vertical"],
                u = r.forwardRef((e, t) => {
                    let { decorative: n, orientation: r = i, ...u } = e,
                        s = a.includes(r) ? r : i;
                    return (0, l.jsx)(o.WV.div, { "data-orientation": s, ...(n ? { role: "none" } : { "aria-orientation": "vertical" === s ? s : void 0, role: "separator" }), ...u, ref: t });
                });
            u.displayName = "Separator";
            var s = u;
        },
        9717: function (e, t, n) {
            "use strict";
            n.d(t, {
                VY: function () {
                    return T;
                },
                aV: function () {
                    return _;
                },
                fC: function () {
                    return F;
                },
                xz: function () {
                    return I;
                },
            });
            var r = n(7653),
                o = n(9764),
                l = n(9933),
                i = n(3222),
                a = n(2163),
                u = n(2122),
                s = n(1004),
                c = n(7178),
                d = n(7321),
                f = n(7573),
                g = "Tabs",
                [p, v] = (0, l.b)(g, [i.Pc]),
                m = (0, i.Pc)(),
                [h, w] = p(g),
                b = r.forwardRef((e, t) => {
                    let { __scopeTabs: n, value: r, onValueChange: o, defaultValue: l, orientation: i = "horizontal", dir: a, activationMode: g = "automatic", ...p } = e,
                        v = (0, s.gm)(a),
                        [m, w] = (0, c.T)({ prop: r, onChange: o, defaultProp: l });
                    return (0, f.jsx)(h, { scope: n, baseId: (0, d.M)(), value: m, onValueChange: w, orientation: i, dir: v, activationMode: g, children: (0, f.jsx)(u.WV.div, { dir: v, "data-orientation": i, ...p, ref: t }) });
                });
            b.displayName = g;
            var y = "TabsList",
                C = r.forwardRef((e, t) => {
                    let { __scopeTabs: n, loop: r = !0, ...o } = e,
                        l = w(y, n),
                        a = m(n);
                    return (0, f.jsx)(i.fC, { asChild: !0, ...a, orientation: l.orientation, dir: l.dir, loop: r, children: (0, f.jsx)(u.WV.div, { role: "tablist", "aria-orientation": l.orientation, ...o, ref: t }) });
                });
            C.displayName = y;
            var x = "TabsTrigger",
                R = r.forwardRef((e, t) => {
                    let { __scopeTabs: n, value: r, disabled: l = !1, ...a } = e,
                        s = w(x, n),
                        c = m(n),
                        d = M(s.baseId, r),
                        g = P(s.baseId, r),
                        p = r === s.value;
                    return (0, f.jsx)(i.ck, {
                        asChild: !0,
                        ...c,
                        focusable: !l,
                        active: p,
                        children: (0, f.jsx)(u.WV.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": p,
                            "aria-controls": g,
                            "data-state": p ? "active" : "inactive",
                            "data-disabled": l ? "" : void 0,
                            disabled: l,
                            id: d,
                            ...a,
                            ref: t,
                            onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                                l || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(r);
                            }),
                            onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                                [" ", "Enter"].includes(e.key) && s.onValueChange(r);
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => {
                                let e = "manual" !== s.activationMode;
                                p || l || !e || s.onValueChange(r);
                            }),
                        }),
                    });
                });
            R.displayName = x;
            var S = "TabsContent",
                E = r.forwardRef((e, t) => {
                    let { __scopeTabs: n, value: o, forceMount: l, children: i, ...s } = e,
                        c = w(S, n),
                        d = M(c.baseId, o),
                        g = P(c.baseId, o),
                        p = o === c.value,
                        v = r.useRef(p);
                    return (
                        r.useEffect(() => {
                            let e = requestAnimationFrame(() => (v.current = !1));
                            return () => cancelAnimationFrame(e);
                        }, []),
                        (0, f.jsx)(a.z, {
                            present: l || p,
                            children: (n) => {
                                let { present: r } = n;
                                return (0, f.jsx)(u.WV.div, {
                                    "data-state": p ? "active" : "inactive",
                                    "data-orientation": c.orientation,
                                    role: "tabpanel",
                                    "aria-labelledby": d,
                                    hidden: !r,
                                    id: g,
                                    tabIndex: 0,
                                    ...s,
                                    ref: t,
                                    style: { ...e.style, animationDuration: v.current ? "0s" : void 0 },
                                    children: r && i,
                                });
                            },
                        })
                    );
                });
            function M(e, t) {
                return "".concat(e, "-trigger-").concat(t);
            }
            function P(e, t) {
                return "".concat(e, "-content-").concat(t);
            }
            E.displayName = S;
            var F = b,
                _ = C,
                I = R,
                T = E;
        },
        9956: function (e, t, n) {
            "use strict";
            n.d(t, {
                VY: function () {
                    return G;
                },
                fC: function () {
                    return z;
                },
                xz: function () {
                    return H;
                },
                zt: function () {
                    return N;
                },
            });
            var r = n(7653),
                o = n(9764),
                l = n(8709),
                i = n(9933),
                a = n(3089),
                u = n(7321),
                s = n(3546),
                c = (n(6337), n(2163)),
                d = n(2122),
                f = n(4912),
                g = n(7178),
                p = n(3297),
                v = n(7573),
                [m, h] = (0, i.b)("Tooltip", [s.D7]),
                w = (0, s.D7)(),
                b = "TooltipProvider",
                y = "tooltip.open",
                [C, x] = m(b),
                R = (e) => {
                    let { __scopeTooltip: t, delayDuration: n = 700, skipDelayDuration: o = 300, disableHoverableContent: l = !1, children: i } = e,
                        [a, u] = r.useState(!0),
                        s = r.useRef(!1),
                        c = r.useRef(0);
                    return (
                        r.useEffect(() => {
                            let e = c.current;
                            return () => window.clearTimeout(e);
                        }, []),
                        (0, v.jsx)(C, {
                            scope: t,
                            isOpenDelayed: a,
                            delayDuration: n,
                            onOpen: r.useCallback(() => {
                                window.clearTimeout(c.current), u(!1);
                            }, []),
                            onClose: r.useCallback(() => {
                                window.clearTimeout(c.current), (c.current = window.setTimeout(() => u(!0), o));
                            }, [o]),
                            isPointerInTransitRef: s,
                            onPointerInTransitChange: r.useCallback((e) => {
                                s.current = e;
                            }, []),
                            disableHoverableContent: l,
                            children: i,
                        })
                    );
                };
            R.displayName = b;
            var S = "Tooltip",
                [E, M] = m(S),
                P = (e) => {
                    let { __scopeTooltip: t, children: n, open: o, defaultOpen: l = !1, onOpenChange: i, disableHoverableContent: a, delayDuration: c } = e,
                        d = x(S, e.__scopeTooltip),
                        f = w(t),
                        [p, m] = r.useState(null),
                        h = (0, u.M)(),
                        b = r.useRef(0),
                        C = null != a ? a : d.disableHoverableContent,
                        R = null != c ? c : d.delayDuration,
                        M = r.useRef(!1),
                        [P = !1, F] = (0, g.T)({
                            prop: o,
                            defaultProp: l,
                            onChange: (e) => {
                                e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(y))) : d.onClose(), null == i || i(e);
                            },
                        }),
                        _ = r.useMemo(() => (P ? (M.current ? "delayed-open" : "instant-open") : "closed"), [P]),
                        I = r.useCallback(() => {
                            window.clearTimeout(b.current), (M.current = !1), F(!0);
                        }, [F]),
                        T = r.useCallback(() => {
                            window.clearTimeout(b.current), F(!1);
                        }, [F]),
                        L = r.useCallback(() => {
                            window.clearTimeout(b.current),
                                (b.current = window.setTimeout(() => {
                                    (M.current = !0), F(!0);
                                }, R));
                        }, [R, F]);
                    return (
                        r.useEffect(() => () => window.clearTimeout(b.current), []),
                        (0, v.jsx)(s.fC, {
                            ...f,
                            children: (0, v.jsx)(E, {
                                scope: t,
                                contentId: h,
                                open: P,
                                stateAttribute: _,
                                trigger: p,
                                onTriggerChange: m,
                                onTriggerEnter: r.useCallback(() => {
                                    d.isOpenDelayed ? L() : I();
                                }, [d.isOpenDelayed, L, I]),
                                onTriggerLeave: r.useCallback(() => {
                                    C ? T() : window.clearTimeout(b.current);
                                }, [T, C]),
                                onOpen: I,
                                onClose: T,
                                disableHoverableContent: C,
                                children: n,
                            }),
                        })
                    );
                };
            P.displayName = S;
            var F = "TooltipTrigger",
                _ = r.forwardRef((e, t) => {
                    let { __scopeTooltip: n, ...i } = e,
                        a = M(F, n),
                        u = x(F, n),
                        c = w(n),
                        f = r.useRef(null),
                        g = (0, l.e)(t, f, a.onTriggerChange),
                        p = r.useRef(!1),
                        m = r.useRef(!1),
                        h = r.useCallback(() => (p.current = !1), []);
                    return (
                        r.useEffect(() => () => document.removeEventListener("pointerup", h), [h]),
                        (0, v.jsx)(s.ee, {
                            asChild: !0,
                            ...c,
                            children: (0, v.jsx)(d.WV.button, {
                                "aria-describedby": a.open ? a.contentId : void 0,
                                "data-state": a.stateAttribute,
                                ...i,
                                ref: g,
                                onPointerMove: (0, o.M)(e.onPointerMove, (e) => {
                                    "touch" === e.pointerType || m.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), (m.current = !0));
                                }),
                                onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                                    a.onTriggerLeave(), (m.current = !1);
                                }),
                                onPointerDown: (0, o.M)(e.onPointerDown, () => {
                                    (p.current = !0), document.addEventListener("pointerup", h, { once: !0 });
                                }),
                                onFocus: (0, o.M)(e.onFocus, () => {
                                    p.current || a.onOpen();
                                }),
                                onBlur: (0, o.M)(e.onBlur, a.onClose),
                                onClick: (0, o.M)(e.onClick, a.onClose),
                            }),
                        })
                    );
                });
            _.displayName = F;
            var [I, T] = m("TooltipPortal", { forceMount: void 0 }),
                L = "TooltipContent",
                A = r.forwardRef((e, t) => {
                    let n = T(L, e.__scopeTooltip),
                        { forceMount: r = n.forceMount, side: o = "top", ...l } = e,
                        i = M(L, e.__scopeTooltip);
                    return (0, v.jsx)(c.z, { present: r || i.open, children: i.disableHoverableContent ? (0, v.jsx)(k, { side: o, ...l, ref: t }) : (0, v.jsx)(O, { side: o, ...l, ref: t }) });
                }),
                O = r.forwardRef((e, t) => {
                    let n = M(L, e.__scopeTooltip),
                        o = x(L, e.__scopeTooltip),
                        i = r.useRef(null),
                        a = (0, l.e)(t, i),
                        [u, s] = r.useState(null),
                        { trigger: c, onClose: d } = n,
                        f = i.current,
                        { onPointerInTransitChange: g } = o,
                        p = r.useCallback(() => {
                            s(null), g(!1);
                        }, [g]),
                        m = r.useCallback(
                            (e, t) => {
                                let n = e.currentTarget,
                                    r = { x: e.clientX, y: e.clientY },
                                    o = (function (e, t) {
                                        let n = Math.abs(t.top - e.y),
                                            r = Math.abs(t.bottom - e.y),
                                            o = Math.abs(t.right - e.x),
                                            l = Math.abs(t.left - e.x);
                                        switch (Math.min(n, r, o, l)) {
                                            case l:
                                                return "left";
                                            case o:
                                                return "right";
                                            case n:
                                                return "top";
                                            case r:
                                                return "bottom";
                                            default:
                                                throw Error("unreachable");
                                        }
                                    })(r, n.getBoundingClientRect());
                                s(
                                    (function (e) {
                                        let t = e.slice();
                                        return (
                                            t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                                            (function (e) {
                                                if (e.length <= 1) return e.slice();
                                                let t = [];
                                                for (let n = 0; n < e.length; n++) {
                                                    let r = e[n];
                                                    for (; t.length >= 2; ) {
                                                        let e = t[t.length - 1],
                                                            n = t[t.length - 2];
                                                        if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                        else break;
                                                    }
                                                    t.push(r);
                                                }
                                                t.pop();
                                                let n = [];
                                                for (let t = e.length - 1; t >= 0; t--) {
                                                    let r = e[t];
                                                    for (; n.length >= 2; ) {
                                                        let e = n[n.length - 1],
                                                            t = n[n.length - 2];
                                                        if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                        else break;
                                                    }
                                                    n.push(r);
                                                }
                                                return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n);
                                            })(t)
                                        );
                                    })([
                                        ...(function (e, t) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                                r = [];
                                            switch (t) {
                                                case "top":
                                                    r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                                                    break;
                                                case "bottom":
                                                    r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                                                    break;
                                                case "left":
                                                    r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                                                    break;
                                                case "right":
                                                    r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                                            }
                                            return r;
                                        })(r, o),
                                        ...(function (e) {
                                            let { top: t, right: n, bottom: r, left: o } = e;
                                            return [
                                                { x: o, y: t },
                                                { x: n, y: t },
                                                { x: n, y: r },
                                                { x: o, y: r },
                                            ];
                                        })(t.getBoundingClientRect()),
                                    ])
                                ),
                                    g(!0);
                            },
                            [g]
                        );
                    return (
                        r.useEffect(() => () => p(), [p]),
                        r.useEffect(() => {
                            if (c && f) {
                                let e = (e) => m(e, f),
                                    t = (e) => m(e, c);
                                return (
                                    c.addEventListener("pointerleave", e),
                                    f.addEventListener("pointerleave", t),
                                    () => {
                                        c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t);
                                    }
                                );
                            }
                        }, [c, f, m, p]),
                        r.useEffect(() => {
                            if (u) {
                                let e = (e) => {
                                    let t = e.target,
                                        n = { x: e.clientX, y: e.clientY },
                                        r = (null == c ? void 0 : c.contains(t)) || (null == f ? void 0 : f.contains(t)),
                                        o = !(function (e, t) {
                                            let { x: n, y: r } = e,
                                                o = !1;
                                            for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                                                let i = t[e].x,
                                                    a = t[e].y,
                                                    u = t[l].x,
                                                    s = t[l].y;
                                                a > r != s > r && n < ((u - i) * (r - a)) / (s - a) + i && (o = !o);
                                            }
                                            return o;
                                        })(n, u);
                                    r ? p() : o && (p(), d());
                                };
                                return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
                            }
                        }, [c, f, u, d, p]),
                        (0, v.jsx)(k, { ...e, ref: a })
                    );
                }),
                [D, j] = m(S, { isInside: !1 }),
                k = r.forwardRef((e, t) => {
                    let { __scopeTooltip: n, children: o, "aria-label": l, onEscapeKeyDown: i, onPointerDownOutside: u, ...c } = e,
                        d = M(L, n),
                        g = w(n),
                        { onClose: m } = d;
                    return (
                        r.useEffect(() => (document.addEventListener(y, m), () => document.removeEventListener(y, m)), [m]),
                        r.useEffect(() => {
                            if (d.trigger) {
                                let e = (e) => {
                                    let t = e.target;
                                    (null == t ? void 0 : t.contains(d.trigger)) && m();
                                };
                                return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
                            }
                        }, [d.trigger, m]),
                        (0, v.jsx)(a.XB, {
                            asChild: !0,
                            disableOutsidePointerEvents: !1,
                            onEscapeKeyDown: i,
                            onPointerDownOutside: u,
                            onFocusOutside: (e) => e.preventDefault(),
                            onDismiss: m,
                            children: (0, v.jsxs)(s.VY, {
                                "data-state": d.stateAttribute,
                                ...g,
                                ...c,
                                ref: t,
                                style: {
                                    ...c.style,
                                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                                },
                                children: [(0, v.jsx)(f.A4, { children: o }), (0, v.jsx)(D, { scope: n, isInside: !0, children: (0, v.jsx)(p.f, { id: d.contentId, role: "tooltip", children: l || o }) })],
                            }),
                        })
                    );
                });
            A.displayName = L;
            var V = "TooltipArrow";
            r.forwardRef((e, t) => {
                let { __scopeTooltip: n, ...r } = e,
                    o = w(n);
                return j(V, n).isInside ? null : (0, v.jsx)(s.Eh, { ...o, ...r, ref: t });
            }).displayName = V;
            var N = R,
                z = P,
                H = _,
                G = A;
        },
        3297: function (e, t, n) {
            "use strict";
            n.d(t, {
                f: function () {
                    return a;
                },
            });
            var r = n(7653),
                o = n(2122),
                l = n(7573),
                i = r.forwardRef((e, t) =>
                    (0, l.jsx)(o.WV.span, {
                        ...e,
                        ref: t,
                        style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style },
                    })
                );
            i.displayName = "VisuallyHidden";
            var a = i;
        },
    },
]);
