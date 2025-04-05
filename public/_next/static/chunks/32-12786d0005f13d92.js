"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [32],
    {
        7130: function (e, t, n) {
            n.d(t, {
                Ry: function () {
                    return l;
                },
            });
            var r = new WeakMap(),
                o = new WeakMap(),
                i = {},
                u = 0,
                a = function (e) {
                    return e && (e.host || a(e.parentNode));
                },
                c = function (e, t, n, c) {
                    var l = (Array.isArray(e) ? e : [e])
                        .map(function (e) {
                            if (t.contains(e)) return e;
                            var n = a(e);
                            return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null);
                        })
                        .filter(function (e) {
                            return !!e;
                        });
                    i[n] || (i[n] = new WeakMap());
                    var s = i[n],
                        d = [],
                        f = new Set(),
                        p = new Set(l),
                        v = function (e) {
                            !e || f.has(e) || (f.add(e), v(e.parentNode));
                        };
                    l.forEach(v);
                    var m = function (e) {
                        !e ||
                            p.has(e) ||
                            Array.prototype.forEach.call(e.children, function (e) {
                                if (f.has(e)) m(e);
                                else
                                    try {
                                        var t = e.getAttribute(c),
                                            i = null !== t && "false" !== t,
                                            u = (r.get(e) || 0) + 1,
                                            a = (s.get(e) || 0) + 1;
                                        r.set(e, u), s.set(e, a), d.push(e), 1 === u && i && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), i || e.setAttribute(c, "true");
                                    } catch (t) {
                                        console.error("aria-hidden: cannot operate on ", e, t);
                                    }
                            });
                    };
                    return (
                        m(t),
                        f.clear(),
                        u++,
                        function () {
                            d.forEach(function (e) {
                                var t = r.get(e) - 1,
                                    i = s.get(e) - 1;
                                r.set(e, t), s.set(e, i), t || (o.has(e) || e.removeAttribute(c), o.delete(e)), i || e.removeAttribute(n);
                            }),
                                --u || ((r = new WeakMap()), (r = new WeakMap()), (o = new WeakMap()), (i = {}));
                        }
                    );
                },
                l = function (e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o
                        ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), c(r, o, n, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
        4718: function (e, t, n) {
            n.d(t, {
                Av: function () {
                    return u;
                },
                pF: function () {
                    return r;
                },
                xv: function () {
                    return i;
                },
                zi: function () {
                    return o;
                },
            });
            var r = "right-scroll-bar-position",
                o = "width-before-scroll-bar",
                i = "with-scroll-bars-hidden",
                u = "--removed-body-scroll-bar-size";
        },
        3935: function (e, t, n) {
            n.d(t, {
                jp: function () {
                    return m;
                },
            });
            var r = n(7653),
                o = n(304),
                i = n(4718),
                u = { left: 0, top: 0, right: 0, gap: 0 },
                a = function (e) {
                    return parseInt(e || "", 10) || 0;
                },
                c = function (e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [a(n), a(r), a(o)];
                },
                l = function (e) {
                    if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return u;
                    var t = c(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                },
                s = (0, o.Ws)(),
                d = "data-scroll-locked",
                f = function (e, t, n, r) {
                    var o = e.left,
                        u = e.top,
                        a = e.right,
                        c = e.gap;
                    return (
                        void 0 === n && (n = "margin"),
                        "\n  ."
                            .concat(i.xv, " {\n   overflow: hidden ")
                            .concat(r, ";\n   padding-right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  body[")
                            .concat(d, "] {\n    overflow: hidden ")
                            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
                            .concat(
                                [
                                    t && "position: relative ".concat(r, ";"),
                                    "margin" === n &&
                                        "\n    padding-left: "
                                            .concat(o, "px;\n    padding-top: ")
                                            .concat(u, "px;\n    padding-right: ")
                                            .concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                                            .concat(c, "px ")
                                            .concat(r, ";\n    "),
                                    "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";"),
                                ]
                                    .filter(Boolean)
                                    .join(""),
                                "\n  }\n  \n  ."
                            )
                            .concat(i.pF, " {\n    right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i.zi, " {\n    margin-right: ")
                            .concat(c, "px ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i.pF, " .")
                            .concat(i.pF, " {\n    right: 0 ")
                            .concat(r, ";\n  }\n  \n  .")
                            .concat(i.zi, " .")
                            .concat(i.zi, " {\n    margin-right: 0 ")
                            .concat(r, ";\n  }\n  \n  body[")
                            .concat(d, "] {\n    ")
                            .concat(i.Av, ": ")
                            .concat(c, "px;\n  }\n")
                    );
                },
                p = function () {
                    var e = parseInt(document.body.getAttribute(d) || "0", 10);
                    return isFinite(e) ? e : 0;
                },
                v = function () {
                    r.useEffect(function () {
                        return (
                            document.body.setAttribute(d, (p() + 1).toString()),
                            function () {
                                var e = p() - 1;
                                e <= 0 ? document.body.removeAttribute(d) : document.body.setAttribute(d, e.toString());
                            }
                        );
                    }, []);
                },
                m = function (e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        o = e.gapMode,
                        i = void 0 === o ? "margin" : o;
                    v();
                    var u = r.useMemo(
                        function () {
                            return l(i);
                        },
                        [i]
                    );
                    return r.createElement(s, { styles: f(u, !t, i, n ? "" : "!important") });
                };
        },
        304: function (e, t, n) {
            n.d(t, {
                Ws: function () {
                    return a;
                },
            });
            var r,
                o = n(7653),
                i = function () {
                    var e = 0,
                        t = null;
                    return {
                        add: function (o) {
                            if (
                                0 == e &&
                                (t = (function () {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = r || n.nc;
                                    return t && e.setAttribute("nonce", t), e;
                                })())
                            ) {
                                var i, u;
                                (i = t).styleSheet ? (i.styleSheet.cssText = o) : i.appendChild(document.createTextNode(o)), (u = t), (document.head || document.getElementsByTagName("head")[0]).appendChild(u);
                            }
                            e++;
                        },
                        remove: function () {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                        },
                    };
                },
                u = function () {
                    var e = i();
                    return function (t, n) {
                        o.useEffect(
                            function () {
                                return (
                                    e.add(t),
                                    function () {
                                        e.remove();
                                    }
                                );
                            },
                            [t && n]
                        );
                    };
                },
                a = function () {
                    var e = u();
                    return function (t) {
                        return e(t.styles, t.dynamic), null;
                    };
                };
        },
        4296: function (e, t, n) {
            n.d(t, {
                q: function () {
                    return a;
                },
            });
            var r = n(7653);
            function o(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                u = new WeakMap();
            function a(e, t) {
                var n,
                    a,
                    c,
                    l =
                        ((n = t || null),
                        (a = function (t) {
                            return e.forEach(function (e) {
                                return o(e, t);
                            });
                        }),
                        ((c = (0, r.useState)(function () {
                            return {
                                value: n,
                                callback: a,
                                facade: {
                                    get current() {
                                        return c.value;
                                    },
                                    set current(value) {
                                        var e = c.value;
                                        e !== value && ((c.value = value), c.callback(value, e));
                                    },
                                },
                            };
                        })[0]).callback = a),
                        c.facade);
                return (
                    i(
                        function () {
                            var t = u.get(l);
                            if (t) {
                                var n = new Set(t),
                                    r = new Set(e),
                                    i = l.current;
                                n.forEach(function (e) {
                                    r.has(e) || o(e, null);
                                }),
                                    r.forEach(function (e) {
                                        n.has(e) || o(e, i);
                                    });
                            }
                            u.set(l, e);
                        },
                        [e]
                    ),
                    l
                );
            }
        },
        9806: function (e, t, n) {
            n.d(t, {
                L: function () {
                    return u;
                },
            });
            var r = n(3780),
                o = n(7653),
                i = function (e) {
                    var t = e.sideCar,
                        n = (0, r._T)(e, ["sideCar"]);
                    if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                    var i = t.read();
                    if (!i) throw Error("Sidecar medium not found");
                    return o.createElement(i, (0, r.pi)({}, n));
                };
            function u(e, t) {
                return e.useMedium(t), i;
            }
            i.isSideCarExport = !0;
        },
        8788: function (e, t, n) {
            n.d(t, {
                _: function () {
                    return i;
                },
            });
            var r = n(3780);
            function o(e) {
                return e;
            }
            function i(e) {
                void 0 === e && (e = {});
                var t,
                    n,
                    i,
                    u =
                        (void 0 === t && (t = o),
                        (n = []),
                        (i = !1),
                        {
                            read: function () {
                                if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                                return n.length ? n[n.length - 1] : null;
                            },
                            useMedium: function (e) {
                                var r = t(e, i);
                                return (
                                    n.push(r),
                                    function () {
                                        n = n.filter(function (e) {
                                            return e !== r;
                                        });
                                    }
                                );
                            },
                            assignSyncMedium: function (e) {
                                for (i = !0; n.length; ) {
                                    var t = n;
                                    (n = []), t.forEach(e);
                                }
                                n = {
                                    push: function (t) {
                                        return e(t);
                                    },
                                    filter: function () {
                                        return n;
                                    },
                                };
                            },
                            assignMedium: function (e) {
                                i = !0;
                                var t = [];
                                if (n.length) {
                                    var r = n;
                                    (n = []), r.forEach(e), (t = n);
                                }
                                var o = function () {
                                        var n = t;
                                        (t = []), n.forEach(e);
                                    },
                                    u = function () {
                                        return Promise.resolve().then(o);
                                    };
                                u(),
                                    (n = {
                                        push: function (e) {
                                            t.push(e), u();
                                        },
                                        filter: function (e) {
                                            return (t = t.filter(e)), n;
                                        },
                                    });
                            },
                        });
                return (u.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), u;
            }
        },
        5399: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return O;
                },
            });
            var r = n(3780),
                o = n(7653),
                i = n(4718),
                u = n(4296),
                a = (0, n(8788)._)(),
                c = function () {},
                l = o.forwardRef(function (e, t) {
                    var n = o.useRef(null),
                        i = o.useState({ onScrollCapture: c, onWheelCapture: c, onTouchMoveCapture: c }),
                        l = i[0],
                        s = i[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        v = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        E = e.inert,
                        b = e.allowPinchZoom,
                        w = e.as,
                        C = e.gapMode,
                        N = (0, r._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        x = (0, u.q)([n, t]),
                        R = (0, r.pi)((0, r.pi)({}, N), l);
                    return o.createElement(
                        o.Fragment,
                        null,
                        m && o.createElement(g, { sideCar: a, removeScrollBar: v, shards: h, noIsolation: y, inert: E, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: C }),
                        d ? o.cloneElement(o.Children.only(f), (0, r.pi)((0, r.pi)({}, R), { ref: x })) : o.createElement(void 0 === w ? "div" : w, (0, r.pi)({}, R, { className: p, ref: x }), f)
                    );
                });
            (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (l.classNames = { fullWidth: i.zi, zeroRight: i.pF });
            var s = n(9806),
                d = n(3935),
                f = n(304),
                p = !1;
            if ("undefined" != typeof window)
                try {
                    var v = Object.defineProperty({}, "passive", {
                        get: function () {
                            return (p = !0), !0;
                        },
                    });
                    window.addEventListener("test", v, v), window.removeEventListener("test", v, v);
                } catch (e) {
                    p = !1;
                }
            var m = !!p && { passive: !1 },
                h = function (e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t]);
                },
                g = function (e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if (("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), y(e, r))) {
                            var o = E(e, r);
                            if (o[1] > o[2]) return !0;
                        }
                        r = r.parentNode;
                    } while (r && r !== n.body);
                    return !1;
                },
                y = function (e, t) {
                    return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
                },
                E = function (e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                },
                b = function (e, t, n, r, o) {
                    var i,
                        u = ((i = window.getComputedStyle(t).direction), "h" === e && "rtl" === i ? -1 : 1),
                        a = u * r,
                        c = n.target,
                        l = t.contains(c),
                        s = !1,
                        d = a > 0,
                        f = 0,
                        p = 0;
                    do {
                        var v = E(e, c),
                            m = v[0],
                            h = v[1] - v[2] - u * m;
                        (m || h) && y(e, c) && ((f += h), (p += m)), c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
                    } while ((!l && c !== document.body) || (l && (t.contains(c) || t === c)));
                    return d && ((o && 1 > Math.abs(f)) || (!o && a > f)) ? (s = !0) : !d && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (s = !0), s;
                },
                w = function (e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                },
                C = function (e) {
                    return [e.deltaX, e.deltaY];
                },
                N = function (e) {
                    return e && "current" in e ? e.current : e;
                },
                x = 0,
                R = [],
                M = (0, s.L)(a, function (e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        i = o.useRef(),
                        u = o.useState(x++)[0],
                        a = o.useState(f.Ws)[0],
                        c = o.useRef(e);
                    o.useEffect(
                        function () {
                            c.current = e;
                        },
                        [e]
                    ),
                        o.useEffect(
                            function () {
                                if (e.inert) {
                                    document.body.classList.add("block-interactivity-".concat(u));
                                    var t = (0, r.ev)([e.lockRef.current], (e.shards || []).map(N), !0).filter(Boolean);
                                    return (
                                        t.forEach(function (e) {
                                            return e.classList.add("allow-interactivity-".concat(u));
                                        }),
                                        function () {
                                            document.body.classList.remove("block-interactivity-".concat(u)),
                                                t.forEach(function (e) {
                                                    return e.classList.remove("allow-interactivity-".concat(u));
                                                });
                                        }
                                    );
                                }
                            },
                            [e.inert, e.lockRef.current, e.shards]
                        );
                    var l = o.useCallback(function (e, t) {
                            if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey)) return !c.current.allowPinchZoom;
                            var r,
                                o = w(e),
                                u = n.current,
                                a = "deltaX" in e ? e.deltaX : u[0] - o[0],
                                l = "deltaY" in e ? e.deltaY : u[1] - o[1],
                                s = e.target,
                                d = Math.abs(a) > Math.abs(l) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = g(d, s);
                            if (!f) return !0;
                            if ((f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = g(d, s))), !f)) return !1;
                            if ((!i.current && "changedTouches" in e && (a || l) && (i.current = r), !r)) return !0;
                            var p = i.current || r;
                            return b(p, t, e, "h" === p ? a : l, !0);
                        }, []),
                        s = o.useCallback(function (e) {
                            if (R.length && R[R.length - 1] === a) {
                                var n = "deltaY" in e ? C(e) : w(e),
                                    r = t.current.filter(function (t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1];
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return;
                                }
                                if (!r) {
                                    var o = (c.current.shards || [])
                                        .map(N)
                                        .filter(Boolean)
                                        .filter(function (t) {
                                            return t.contains(e.target);
                                        });
                                    (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) && e.cancelable && e.preventDefault();
                                }
                            }
                        }, []),
                        p = o.useCallback(function (e, n, r, o) {
                            var i = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o,
                                shadowParent: (function (e) {
                                    for (var t = null; null !== e; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
                                    return t;
                                })(r),
                            };
                            t.current.push(i),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== i;
                                    });
                                }, 1);
                        }, []),
                        v = o.useCallback(function (e) {
                            (n.current = w(e)), (i.current = void 0);
                        }, []),
                        h = o.useCallback(function (t) {
                            p(t.type, C(t), t.target, l(t, e.lockRef.current));
                        }, []),
                        y = o.useCallback(function (t) {
                            p(t.type, w(t), t.target, l(t, e.lockRef.current));
                        }, []);
                    o.useEffect(function () {
                        return (
                            R.push(a),
                            e.setCallbacks({ onScrollCapture: h, onWheelCapture: h, onTouchMoveCapture: y }),
                            document.addEventListener("wheel", s, m),
                            document.addEventListener("touchmove", s, m),
                            document.addEventListener("touchstart", v, m),
                            function () {
                                (R = R.filter(function (e) {
                                    return e !== a;
                                })),
                                    document.removeEventListener("wheel", s, m),
                                    document.removeEventListener("touchmove", s, m),
                                    document.removeEventListener("touchstart", v, m);
                            }
                        );
                    }, []);
                    var E = e.removeScrollBar,
                        M = e.inert;
                    return o.createElement(
                        o.Fragment,
                        null,
                        M ? o.createElement(a, { styles: "\n  .block-interactivity-".concat(u, " {pointer-events: none;}\n  .allow-interactivity-").concat(u, " {pointer-events: all;}\n") }) : null,
                        E ? o.createElement(d.jp, { gapMode: e.gapMode }) : null
                    );
                }),
                S = o.forwardRef(function (e, t) {
                    return o.createElement(l, (0, r.pi)({}, e, { ref: t, sideCar: M }));
                });
            S.classNames = l.classNames;
            var O = S;
        },
        9933: function (e, t, n) {
            n.d(t, {
                b: function () {
                    return u;
                },
                k: function () {
                    return i;
                },
            });
            var r = n(7653),
                o = n(7573);
            function i(e, t) {
                let n = r.createContext(t),
                    i = (e) => {
                        let { children: t, ...i } = e,
                            u = r.useMemo(() => i, Object.values(i));
                        return (0, o.jsx)(n.Provider, { value: u, children: t });
                    };
                return (
                    (i.displayName = e + "Provider"),
                    [
                        i,
                        function (o) {
                            let i = r.useContext(n);
                            if (i) return i;
                            if (void 0 !== t) return t;
                            throw Error(`\`${o}\` must be used within \`${e}\``);
                        },
                    ]
                );
            }
            function u(e, t = []) {
                let n = [],
                    i = () => {
                        let t = n.map((e) => r.createContext(e));
                        return function (n) {
                            let o = n?.[e] || t;
                            return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                        };
                    };
                return (
                    (i.scopeName = e),
                    [
                        function (t, i) {
                            let u = r.createContext(i),
                                a = n.length;
                            n = [...n, i];
                            let c = (t) => {
                                let { scope: n, children: i, ...c } = t,
                                    l = n?.[e]?.[a] || u,
                                    s = r.useMemo(() => c, Object.values(c));
                                return (0, o.jsx)(l.Provider, { value: s, children: i });
                            };
                            return (
                                (c.displayName = t + "Provider"),
                                [
                                    c,
                                    function (n, o) {
                                        let c = o?.[e]?.[a] || u,
                                            l = r.useContext(c);
                                        if (l) return l;
                                        if (void 0 !== i) return i;
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
                        })(i, ...t),
                    ]
                );
            }
        },
        307: function (e, t, n) {
            n.d(t, {
                EW: function () {
                    return i;
                },
            });
            var r = n(7653),
                o = 0;
            function i() {
                r.useEffect(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return (
                        document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : u()),
                        document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : u()),
                        o++,
                        () => {
                            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), o--;
                        }
                    );
                }, []);
            }
            function u() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
            }
        },
        7321: function (e, t, n) {
            n.d(t, {
                M: function () {
                    return c;
                },
            });
            var r,
                o = n(7653),
                i = n(1523),
                u = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                a = 0;
            function c(e) {
                let [t, n] = o.useState(u());
                return (
                    (0, i.b)(() => {
                        e || n((e) => e ?? String(a++));
                    }, [e]),
                    e || (t ? `radix-${t}` : "")
                );
            }
        },
        523: function (e, t, n) {
            n.d(t, {
                W: function () {
                    return o;
                },
            });
            var r = n(7653);
            function o(e) {
                let t = r.useRef(e);
                return (
                    r.useEffect(() => {
                        t.current = e;
                    }),
                    r.useMemo(() => (...e) => t.current?.(...e), [])
                );
            }
        },
        7178: function (e, t, n) {
            n.d(t, {
                T: function () {
                    return i;
                },
            });
            var r = n(7653),
                o = n(523);
            function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
                let [i, u] = (function ({ defaultProp: e, onChange: t }) {
                        let n = r.useState(e),
                            [i] = n,
                            u = r.useRef(i),
                            a = (0, o.W)(t);
                        return (
                            r.useEffect(() => {
                                u.current !== i && (a(i), (u.current = i));
                            }, [i, u, a]),
                            n
                        );
                    })({ defaultProp: t, onChange: n }),
                    a = void 0 !== e,
                    c = a ? e : i,
                    l = (0, o.W)(n);
                return [
                    c,
                    r.useCallback(
                        (t) => {
                            if (a) {
                                let n = "function" == typeof t ? t(e) : t;
                                n !== e && l(n);
                            } else u(t);
                        },
                        [a, e, u, l]
                    ),
                ];
            }
        },
        1523: function (e, t, n) {
            n.d(t, {
                b: function () {
                    return o;
                },
            });
            var r = n(7653),
                o = globalThis?.document ? r.useLayoutEffect : () => {};
        },
        3780: function (e, t, n) {
            n.d(t, {
                _T: function () {
                    return o;
                },
                ev: function () {
                    return i;
                },
                pi: function () {
                    return r;
                },
            });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n;
            }
            function i(e, t, n) {
                if (n || 2 == arguments.length) for (var r, o = 0, i = t.length; o < i; o++) (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            "function" == typeof SuppressedError && SuppressedError;
        },
        9764: function (e, t, n) {
            n.d(t, {
                M: function () {
                    return r;
                },
            });
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
                };
            }
        },
        8709: function (e, t, n) {
            n.d(t, {
                F: function () {
                    return o;
                },
                e: function () {
                    return i;
                },
            });
            var r = n(7653);
            function o(...e) {
                return (t) =>
                    e.forEach((e) => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t);
                    });
            }
            function i(...e) {
                return r.useCallback(o(...e), e);
            }
        },
        4032: function (e, t, n) {
            n.d(t, {
                Dx: function () {
                    return en;
                },
                VY: function () {
                    return et;
                },
                aV: function () {
                    return ee;
                },
                dk: function () {
                    return er;
                },
                fC: function () {
                    return G;
                },
                h_: function () {
                    return Q;
                },
                x8: function () {
                    return eo;
                },
                xz: function () {
                    return J;
                },
            });
            var r = n(7653),
                o = n(9764),
                i = n(8709),
                u = n(9933),
                a = n(7321),
                c = n(7178),
                l = n(3089),
                s = n(8083),
                d = n(6337),
                f = n(2163),
                p = n(2122),
                v = n(307),
                m = n(5399),
                h = n(7130),
                g = n(4912),
                y = n(7573),
                E = "Dialog",
                [b, w] = (0, u.b)(E),
                [C, N] = b(E),
                x = (e) => {
                    let { __scopeDialog: t, children: n, open: o, defaultOpen: i, onOpenChange: u, modal: l = !0 } = e,
                        s = r.useRef(null),
                        d = r.useRef(null),
                        [f = !1, p] = (0, c.T)({ prop: o, defaultProp: i, onChange: u });
                    return (0, y.jsx)(C, {
                        scope: t,
                        triggerRef: s,
                        contentRef: d,
                        contentId: (0, a.M)(),
                        titleId: (0, a.M)(),
                        descriptionId: (0, a.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p((e) => !e), [p]),
                        modal: l,
                        children: n,
                    });
                };
            x.displayName = E;
            var R = "DialogTrigger",
                M = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        u = N(R, n),
                        a = (0, i.e)(t, u.triggerRef);
                    return (0, y.jsx)(p.WV.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": u.open, "aria-controls": u.contentId, "data-state": X(u.open), ...r, ref: a, onClick: (0, o.M)(e.onClick, u.onOpenToggle) });
                });
            M.displayName = R;
            var S = "DialogPortal",
                [O, D] = b(S, { forceMount: void 0 }),
                T = (e) => {
                    let { __scopeDialog: t, forceMount: n, children: o, container: i } = e,
                        u = N(S, t);
                    return (0, y.jsx)(O, { scope: t, forceMount: n, children: r.Children.map(o, (e) => (0, y.jsx)(f.z, { present: n || u.open, children: (0, y.jsx)(d.h, { asChild: !0, container: i, children: e }) })) });
                };
            T.displayName = S;
            var P = "DialogOverlay",
                L = r.forwardRef((e, t) => {
                    let n = D(P, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        i = N(P, e.__scopeDialog);
                    return i.modal ? (0, y.jsx)(f.z, { present: r || i.open, children: (0, y.jsx)(W, { ...o, ref: t }) }) : null;
                });
            L.displayName = P;
            var W = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        o = N(P, n);
                    return (0, y.jsx)(m.Z, { as: g.g7, allowPinchZoom: !0, shards: [o.contentRef], children: (0, y.jsx)(p.WV.div, { "data-state": X(o.open), ...r, ref: t, style: { pointerEvents: "auto", ...r.style } }) });
                }),
                A = "DialogContent",
                j = r.forwardRef((e, t) => {
                    let n = D(A, e.__scopeDialog),
                        { forceMount: r = n.forceMount, ...o } = e,
                        i = N(A, e.__scopeDialog);
                    return (0, y.jsx)(f.z, { present: r || i.open, children: i.modal ? (0, y.jsx)(k, { ...o, ref: t }) : (0, y.jsx)(I, { ...o, ref: t }) });
                });
            j.displayName = A;
            var k = r.forwardRef((e, t) => {
                    let n = N(A, e.__scopeDialog),
                        u = r.useRef(null),
                        a = (0, i.e)(t, n.contentRef, u);
                    return (
                        r.useEffect(() => {
                            let e = u.current;
                            if (e) return (0, h.Ry)(e);
                        }, []),
                        (0, y.jsx)(F, {
                            ...e,
                            ref: a,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
                                var t;
                                e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus();
                            }),
                            onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, (e) => {
                                let t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                (2 === t.button || n) && e.preventDefault();
                            }),
                            onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => e.preventDefault()),
                        })
                    );
                }),
                I = r.forwardRef((e, t) => {
                    let n = N(A, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, y.jsx)(F, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: (t) => {
                            var r, u;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t),
                                t.defaultPrevented || (o.current || null === (u = n.triggerRef.current) || void 0 === u || u.focus(), t.preventDefault()),
                                (o.current = !1),
                                (i.current = !1);
                        },
                        onInteractOutside: (t) => {
                            var r, u;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || ((o.current = !0), "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let a = t.target;
                            (null === (u = n.triggerRef.current) || void 0 === u ? void 0 : u.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault();
                        },
                    });
                }),
                F = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: u, onCloseAutoFocus: a, ...c } = e,
                        d = N(A, n),
                        f = r.useRef(null),
                        p = (0, i.e)(t, f);
                    return (
                        (0, v.EW)(),
                        (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(s.M, {
                                    asChild: !0,
                                    loop: !0,
                                    trapped: o,
                                    onMountAutoFocus: u,
                                    onUnmountAutoFocus: a,
                                    children: (0, y.jsx)(l.XB, {
                                        role: "dialog",
                                        id: d.contentId,
                                        "aria-describedby": d.descriptionId,
                                        "aria-labelledby": d.titleId,
                                        "data-state": X(d.open),
                                        ...c,
                                        ref: p,
                                        onDismiss: () => d.onOpenChange(!1),
                                    }),
                                }),
                                (0, y.jsxs)(y.Fragment, { children: [(0, y.jsx)(H, { titleId: d.titleId }), (0, y.jsx)(q, { contentRef: f, descriptionId: d.descriptionId })] }),
                            ],
                        })
                    );
                }),
                _ = "DialogTitle",
                B = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        o = N(_, n);
                    return (0, y.jsx)(p.WV.h2, { id: o.titleId, ...r, ref: t });
                });
            B.displayName = _;
            var V = "DialogDescription",
                z = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        o = N(V, n);
                    return (0, y.jsx)(p.WV.p, { id: o.descriptionId, ...r, ref: t });
                });
            z.displayName = V;
            var U = "DialogClose",
                K = r.forwardRef((e, t) => {
                    let { __scopeDialog: n, ...r } = e,
                        i = N(U, n);
                    return (0, y.jsx)(p.WV.button, { type: "button", ...r, ref: t, onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1)) });
                });
            function X(e) {
                return e ? "open" : "closed";
            }
            K.displayName = U;
            var $ = "DialogTitleWarning",
                [Y, Z] = (0, u.k)($, { contentName: A, titleName: _, docsSlug: "dialog" }),
                H = (e) => {
                    let { titleId: t } = e,
                        n = Z($),
                        o = "`"
                            .concat(n.contentName, "` requires a `")
                            .concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `")
                            .concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/")
                            .concat(n.docsSlug);
                    return (
                        r.useEffect(() => {
                            t && !document.getElementById(t) && console.error(o);
                        }, [o, t]),
                        null
                    );
                },
                q = (e) => {
                    let { contentRef: t, descriptionId: n } = e,
                        o = Z("DialogDescriptionWarning"),
                        i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return (
                        r.useEffect(() => {
                            var e;
                            let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                            n && r && !document.getElementById(n) && console.warn(i);
                        }, [i, t, n]),
                        null
                    );
                },
                G = x,
                J = M,
                Q = T,
                ee = L,
                et = j,
                en = B,
                er = z,
                eo = K;
        },
        3089: function (e, t, n) {
            n.d(t, {
                XB: function () {
                    return f;
                },
            });
            var r,
                o = n(7653),
                i = n(9764),
                u = n(2122),
                a = n(8709),
                c = n(523),
                l = n(7573),
                s = "dismissableLayer.update",
                d = o.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
                f = o.forwardRef((e, t) => {
                    var n, f;
                    let { disableOutsidePointerEvents: m = !1, onEscapeKeyDown: h, onPointerDownOutside: g, onFocusOutside: y, onInteractOutside: E, onDismiss: b, ...w } = e,
                        C = o.useContext(d),
                        [N, x] = o.useState(null),
                        R = null !== (f = null == N ? void 0 : N.ownerDocument) && void 0 !== f ? f : null === (n = globalThis) || void 0 === n ? void 0 : n.document,
                        [, M] = o.useState({}),
                        S = (0, a.e)(t, (e) => x(e)),
                        O = Array.from(C.layers),
                        [D] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
                        T = O.indexOf(D),
                        P = N ? O.indexOf(N) : -1,
                        L = C.layersWithOutsidePointerEventsDisabled.size > 0,
                        W = P >= T,
                        A = (function (e) {
                            var t;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                                r = (0, c.W)(e),
                                i = o.useRef(!1),
                                u = o.useRef(() => {});
                            return (
                                o.useEffect(() => {
                                    let e = (e) => {
                                            if (e.target && !i.current) {
                                                let t = function () {
                                                        v("dismissableLayer.pointerDownOutside", r, o, { discrete: !0 });
                                                    },
                                                    o = { originalEvent: e };
                                                "touch" === e.pointerType ? (n.removeEventListener("click", u.current), (u.current = t), n.addEventListener("click", u.current, { once: !0 })) : t();
                                            } else n.removeEventListener("click", u.current);
                                            i.current = !1;
                                        },
                                        t = window.setTimeout(() => {
                                            n.addEventListener("pointerdown", e);
                                        }, 0);
                                    return () => {
                                        window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", u.current);
                                    };
                                }, [n, r]),
                                { onPointerDownCapture: () => (i.current = !0) }
                            );
                        })((e) => {
                            let t = e.target,
                                n = [...C.branches].some((e) => e.contains(t));
                            !W || n || (null == g || g(e), null == E || E(e), e.defaultPrevented || null == b || b());
                        }, R),
                        j = (function (e) {
                            var t;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                                r = (0, c.W)(e),
                                i = o.useRef(!1);
                            return (
                                o.useEffect(() => {
                                    let e = (e) => {
                                        e.target && !i.current && v("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 });
                                    };
                                    return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
                                }, [n, r]),
                                { onFocusCapture: () => (i.current = !0), onBlurCapture: () => (i.current = !1) }
                            );
                        })((e) => {
                            let t = e.target;
                            [...C.branches].some((e) => e.contains(t)) || (null == y || y(e), null == E || E(e), e.defaultPrevented || null == b || b());
                        }, R);
                    return (
                        !(function (e, t = globalThis?.document) {
                            let n = (0, c.W)(e);
                            o.useEffect(() => {
                                let e = (e) => {
                                    "Escape" === e.key && n(e);
                                };
                                return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
                            }, [n, t]);
                        })((e) => {
                            P !== C.layers.size - 1 || (null == h || h(e), !e.defaultPrevented && b && (e.preventDefault(), b()));
                        }, R),
                        o.useEffect(() => {
                            if (N)
                                return (
                                    m && (0 === C.layersWithOutsidePointerEventsDisabled.size && ((r = R.body.style.pointerEvents), (R.body.style.pointerEvents = "none")), C.layersWithOutsidePointerEventsDisabled.add(N)),
                                    C.layers.add(N),
                                    p(),
                                    () => {
                                        m && 1 === C.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r);
                                    }
                                );
                        }, [N, R, m, C]),
                        o.useEffect(
                            () => () => {
                                N && (C.layers.delete(N), C.layersWithOutsidePointerEventsDisabled.delete(N), p());
                            },
                            [N, C]
                        ),
                        o.useEffect(() => {
                            let e = () => M({});
                            return document.addEventListener(s, e), () => document.removeEventListener(s, e);
                        }, []),
                        (0, l.jsx)(u.WV.div, {
                            ...w,
                            ref: S,
                            style: { pointerEvents: L ? (W ? "auto" : "none") : void 0, ...e.style },
                            onFocusCapture: (0, i.M)(e.onFocusCapture, j.onFocusCapture),
                            onBlurCapture: (0, i.M)(e.onBlurCapture, j.onBlurCapture),
                            onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, A.onPointerDownCapture),
                        })
                    );
                });
            function p() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e);
            }
            function v(e, t, n, r) {
                let { discrete: o } = r,
                    i = n.originalEvent.target,
                    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
                t && i.addEventListener(e, t, { once: !0 }), o ? (0, u.jH)(i, a) : i.dispatchEvent(a);
            }
            (f.displayName = "DismissableLayer"),
                (o.forwardRef((e, t) => {
                    let n = o.useContext(d),
                        r = o.useRef(null),
                        i = (0, a.e)(t, r);
                    return (
                        o.useEffect(() => {
                            let e = r.current;
                            if (e)
                                return (
                                    n.branches.add(e),
                                    () => {
                                        n.branches.delete(e);
                                    }
                                );
                        }, [n.branches]),
                        (0, l.jsx)(u.WV.div, { ...e, ref: i })
                    );
                }).displayName = "DismissableLayerBranch");
        },
        8083: function (e, t, n) {
            let r;
            n.d(t, {
                M: function () {
                    return f;
                },
            });
            var o = n(7653),
                i = n(8709),
                u = n(2122),
                a = n(523),
                c = n(7573),
                l = "focusScope.autoFocusOnMount",
                s = "focusScope.autoFocusOnUnmount",
                d = { bubbles: !1, cancelable: !0 },
                f = o.forwardRef((e, t) => {
                    let { loop: n = !1, trapped: r = !1, onMountAutoFocus: f, onUnmountAutoFocus: g, ...y } = e,
                        [E, b] = o.useState(null),
                        w = (0, a.W)(f),
                        C = (0, a.W)(g),
                        N = o.useRef(null),
                        x = (0, i.e)(t, (e) => b(e)),
                        R = o.useRef({
                            paused: !1,
                            pause() {
                                this.paused = !0;
                            },
                            resume() {
                                this.paused = !1;
                            },
                        }).current;
                    o.useEffect(() => {
                        if (r) {
                            let e = function (e) {
                                    if (R.paused || !E) return;
                                    let t = e.target;
                                    E.contains(t) ? (N.current = t) : m(N.current, { select: !0 });
                                },
                                t = function (e) {
                                    if (R.paused || !E) return;
                                    let t = e.relatedTarget;
                                    null === t || E.contains(t) || m(N.current, { select: !0 });
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function (e) {
                                if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && m(E);
                            });
                            return (
                                E && n.observe(E, { childList: !0, subtree: !0 }),
                                () => {
                                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect();
                                }
                            );
                        }
                    }, [r, E, R.paused]),
                        o.useEffect(() => {
                            if (E) {
                                h.add(R);
                                let e = document.activeElement;
                                if (!E.contains(e)) {
                                    let t = new CustomEvent(l, d);
                                    E.addEventListener(l, w),
                                        E.dispatchEvent(t),
                                        t.defaultPrevented ||
                                            ((function (e) {
                                                let { select: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                    n = document.activeElement;
                                                for (let r of e) if ((m(r, { select: t }), document.activeElement !== n)) return;
                                            })(
                                                p(E).filter((e) => "A" !== e.tagName),
                                                { select: !0 }
                                            ),
                                            document.activeElement === e && m(E));
                                }
                                return () => {
                                    E.removeEventListener(l, w),
                                        setTimeout(() => {
                                            let t = new CustomEvent(s, d);
                                            E.addEventListener(s, C), E.dispatchEvent(t), t.defaultPrevented || m(null != e ? e : document.body, { select: !0 }), E.removeEventListener(s, C), h.remove(R);
                                        }, 0);
                                };
                            }
                        }, [E, w, C, R]);
                    let M = o.useCallback(
                        (e) => {
                            if ((!n && !r) || R.paused) return;
                            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                                o = document.activeElement;
                            if (t && o) {
                                let t = e.currentTarget,
                                    [r, i] = (function (e) {
                                        let t = p(e);
                                        return [v(t, e), v(t.reverse(), e)];
                                    })(t);
                                r && i ? (e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && m(i, { select: !0 })) : (e.preventDefault(), n && m(r, { select: !0 }))) : o === t && e.preventDefault();
                            }
                        },
                        [n, r, R.paused]
                    );
                    return (0, c.jsx)(u.WV.div, { tabIndex: -1, ...y, ref: x, onKeyDown: M });
                });
            function p(e) {
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
            function v(e, t) {
                for (let n of e)
                    if (
                        !(function (e, t) {
                            let { upTo: n } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n); ) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement;
                            }
                            return !1;
                        })(n, { upTo: t })
                    )
                        return n;
            }
            function m(e) {
                let { select: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({ preventScroll: !0 }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select();
                }
            }
            f.displayName = "FocusScope";
            var h =
                ((r = []),
                {
                    add(e) {
                        let t = r[0];
                        e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
                    },
                    remove(e) {
                        var t;
                        null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
                    },
                });
            function g(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n;
            }
        },
        6337: function (e, t, n) {
            n.d(t, {
                h: function () {
                    return c;
                },
            });
            var r = n(7653),
                o = n(3458),
                i = n(2122),
                u = n(1523),
                a = n(7573),
                c = r.forwardRef((e, t) => {
                    var n, c;
                    let { container: l, ...s } = e,
                        [d, f] = r.useState(!1);
                    (0, u.b)(() => f(!0), []);
                    let p = l || (d && (null === (c = globalThis) || void 0 === c ? void 0 : null === (n = c.document) || void 0 === n ? void 0 : n.body));
                    return p ? o.createPortal((0, a.jsx)(i.WV.div, { ...s, ref: t }), p) : null;
                });
            c.displayName = "Portal";
        },
        2163: function (e, t, n) {
            n.d(t, {
                z: function () {
                    return u;
                },
            });
            var r = n(7653),
                o = n(8709),
                i = n(1523),
                u = (e) => {
                    var t, n;
                    let u, c;
                    let { present: l, children: s } = e,
                        d = (function (e) {
                            var t, n;
                            let [o, u] = r.useState(),
                                c = r.useRef({}),
                                l = r.useRef(e),
                                s = r.useRef("none"),
                                [d, f] =
                                    ((t = e ? "mounted" : "unmounted"),
                                    (n = { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } }),
                                    r.useReducer((e, t) => {
                                        let r = n[e][t];
                                        return null != r ? r : e;
                                    }, t));
                            return (
                                r.useEffect(() => {
                                    let e = a(c.current);
                                    s.current = "mounted" === d ? e : "none";
                                }, [d]),
                                (0, i.b)(() => {
                                    let t = c.current,
                                        n = l.current;
                                    if (n !== e) {
                                        let r = s.current,
                                            o = a(t);
                                        e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), (l.current = e);
                                    }
                                }, [e, f]),
                                (0, i.b)(() => {
                                    if (o) {
                                        var e;
                                        let t;
                                        let n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                            r = (e) => {
                                                let r = a(c.current).includes(e.animationName);
                                                if (e.target === o && r && (f("ANIMATION_END"), !l.current)) {
                                                    let e = o.style.animationFillMode;
                                                    (o.style.animationFillMode = "forwards"),
                                                        (t = n.setTimeout(() => {
                                                            "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e);
                                                        }));
                                                }
                                            },
                                            i = (e) => {
                                                e.target === o && (s.current = a(c.current));
                                            };
                                        return (
                                            o.addEventListener("animationstart", i),
                                            o.addEventListener("animationcancel", r),
                                            o.addEventListener("animationend", r),
                                            () => {
                                                n.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r);
                                            }
                                        );
                                    }
                                    f("ANIMATION_END");
                                }, [o, f]),
                                {
                                    isPresent: ["mounted", "unmountSuspended"].includes(d),
                                    ref: r.useCallback((e) => {
                                        e && (c.current = getComputedStyle(e)), u(e);
                                    }, []),
                                }
                            );
                        })(l),
                        f = "function" == typeof s ? s({ present: d.isPresent }) : r.Children.only(s),
                        p = (0, o.e)(
                            d.ref,
                            (u = null === (t = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in u && u.isReactWarning
                                ? f.ref
                                : (u = null === (n = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in u && u.isReactWarning
                                ? f.props.ref
                                : f.props.ref || f.ref
                        );
                    return "function" == typeof s || d.isPresent ? r.cloneElement(f, { ref: p }) : null;
                };
            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none";
            }
            u.displayName = "Presence";
        },
        2122: function (e, t, n) {
            n.d(t, {
                WV: function () {
                    return a;
                },
                jH: function () {
                    return c;
                },
            });
            var r = n(7653),
                o = n(3458),
                i = n(4912),
                u = n(7573),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = r.forwardRef((e, n) => {
                        let { asChild: r, ...o } = e,
                            a = r ? i.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, u.jsx)(a, { ...o, ref: n });
                    });
                    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
                }, {});
            function c(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t));
            }
        },
        4912: function (e, t, n) {
            n.d(t, {
                A4: function () {
                    return c;
                },
                g7: function () {
                    return u;
                },
            });
            var r = n(7653),
                o = n(8709),
                i = n(7573),
                u = r.forwardRef((e, t) => {
                    let { children: n, ...o } = e,
                        u = r.Children.toArray(n),
                        c = u.find(l);
                    if (c) {
                        let e = c.props.children,
                            n = u.map((t) => (t !== c ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null));
                        return (0, i.jsx)(a, { ...o, ref: t, children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null });
                    }
                    return (0, i.jsx)(a, { ...o, ref: t, children: n });
                });
            u.displayName = "Slot";
            var a = r.forwardRef((e, t) => {
                let { children: n, ...i } = e;
                if (r.isValidElement(n)) {
                    let e, u;
                    let a =
                        (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning
                            ? n.ref
                            : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) && "isReactWarning" in e && e.isReactWarning
                            ? n.props.ref
                            : n.props.ref || n.ref;
                    return r.cloneElement(n, {
                        ...(function (e, t) {
                            let n = { ...t };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r)
                                    ? o && i
                                        ? (n[r] = (...e) => {
                                              i(...e), o(...e);
                                          })
                                        : o && (n[r] = o)
                                    : "style" === r
                                    ? (n[r] = { ...o, ...i })
                                    : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                            }
                            return { ...e, ...n };
                        })(i, n.props),
                        ref: t ? (0, o.F)(t, a) : a,
                    });
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null;
            });
            a.displayName = "SlotClone";
            var c = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
            function l(e) {
                return r.isValidElement(e) && e.type === c;
            }
        },
    },
]);
