"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [406],
    {
        994: function (e, t, i) {
            i.d(t, {
                wJ: function () {
                    return x;
                },
                dj: function () {
                    return b;
                },
                VG: function () {
                    return v;
                },
                px: function () {
                    return g;
                },
                f: function () {
                    return d;
                },
                Qb: function () {
                    return s;
                },
                rd: function () {
                    return h;
                },
                AV: function () {
                    return y;
                },
                is: function () {
                    return f;
                },
                TD: function () {
                    return p;
                },
                cI: function () {
                    return l;
                },
                FM: function () {
                    return c;
                },
                RO: function () {
                    return u;
                },
                Nb: function () {
                    return m;
                },
                zK: function () {
                    return a;
                },
            });
            let r = "https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1";
            [
                null !== (n = r.split("image")[0] || (0, r.split("raw")[0])) && void 0 !== n ? n : "",
                "https://raw.githubusercontent.com/berachain/default-lists/",
                "https://raw.githubusercontent.com/berachain/metadata/",
                "https://assets.coingecko.com/coins/images/",
                "https://iconic.dynamic-static-assets.com/",
                "https://artio-static-asset-public.s3.ap-southeast-1.amazonaws.com/assets/",
            ].filter((e) => (!!e && "" !== e.trim()) || (console.warn("One of pictureSources is empty or undefined"), !1));
            var n,
                o = i(8571);
            o.env.NEXT_PUBLIC_INDEXER_ENDPOINT;
            let a = "https://res.cloudinary.com/duv0g402y/raw/upload/v1717603357/src/tokens/bartio/defaultTokenList.json";
            o.env.NEXT_PUBLIC_ANALYTICS;
            let s = "https://bartio.beratrail.io";
            o.env.NEXT_PUBLIC_LEND_ENDPOINT, o.env.NEXT_PUBLIC_VALIDATOR_ENDPOINT, o.env.NEXT_PUBLIC_AWS_URL;
            let l = "https://www.berachain.com/",
                c = "Honey",
                d = "BGT Station",
                h = "BEX";
            o.env.NEXT_PUBLIC_HUB_NAME, o.env.NEXT_PUBLIC_HUB_URL;
            let u = "BEND",
                m = "BERPS",
                f = "Faucet",
                p = "https://bartio.faucet.berachain.com",
                y = "https://ecosystem.berachain.com/",
                g = "https://bepolia.hub.berachain.com/",
                v = "https://bepolia.honey.berachain.com/",
                x = "https://bepolia.beratrail.io",
                b = "https://docs.berachain.com/";
            o.env.NEXT_PUBLIC_PRESS_KIT,
                o.env.NEXT_PUBLIC_STAKING_TOKEN,
                o.env.NEXT_PUBLIC_BECH32_PREFIX,
                o.env.NEXT_PUBLIC_GOVERNANCE_MIN_DEPOSIT,
                o.env.NEXT_PUBLIC_ERC20_DEX_ADDRESS,
                o.env.NEXT_PUBLIC_ERC20_MODULE_ADDRESS,
                o.env.NEXT_PUBLIC_STAKING_ADDRESS,
                o.env.NEXT_PUBLIC_GOVERNANCE_ADDRESS,
                o.env.NEXT_PUBLIC_BANK_ADDRESS,
                o.env.NEXT_PUBLIC_EPOCHS_ADDRESS,
                o.env.NEXT_PUBLIC_ERC20_BGT_ADDRESS,
                o.env.NEXT_PUBLIC_BERACHEF_ADDRESS,
                o.env.NEXT_PUBLIC_REWARDS_ADDRESS,
                o.env.NEXT_PUBLIC_ERC20BRIBEMODULE_ADDRESS,
                o.env.NEXT_PUBLIC_ERC20_BRIBE_ADDRESS,
                o.env.NEXT_PUBLIC_REWARDS_ADDRESS,
                o.env.NEXT_PUBLIC_GTOKEN_CONTRACT_ADDRESS,
                o.env.NEXT_PUBLIC_VILIDATOR_CLUE_ENDPOINT,
                o.env.NEXT_PUBLIC_GOVERNANCE_AUTHORITY,
                o.env.NEXT_PUBLIC_BANNER_ENABLED,
                o.env.NEXT_PUBLIC_RPC_BANNER_ENABLED;
        },
        257: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    AccessDeny: function () {
                        return a;
                    },
                    AccessDenyModal: function () {
                        return o;
                    },
                });
            var r = i(7573),
                n = i(2730);
            let o = (e) => {
                    let { open: t } = e;
                    return (0, r.jsx)(n.Vq, {
                        open: t,
                        children: (0, r.jsx)(n.cZ, {
                            hideClose: !0,
                            className: "focus:outline-none md:w-[calc(100vw-32px)] lg:w-[800px] lg:min-w-[800px]",
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-col gap-8",
                                children: [
                                    (0, r.jsx)("div", { className: "leading-12 text-center text-5xl font-bold", children: "Access Denied" }),
                                    (0, r.jsx)("div", {
                                        className: "leading-6",
                                        children:
                                            "We’re sorry, but due to geographical restrictions, our services are not available in your current location. This is due to regulatory and compliance reasons and includes residents and citizens of the restricted country.",
                                    }),
                                    (0, r.jsx)("div", {
                                        className: "text-sm leading-6",
                                        children: "Please be advised that any attempts to bypass these restrictions, including but not limited to the use of VPNs, proxy services, or other circumvention techniques, are strictly prohibited.",
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                a = () => (0, r.jsx)(o, { open: !0 });
        },
        5668: function (e, t, i) {
            i.d(t, {
                r: function () {
                    return n;
                },
                q: function () {
                    return u;
                },
            });
            var r,
                n,
                o = i(7573);
            i(7653);
            var a = i(994),
                s = i(4103),
                l = i(5866);
            let c = (e) => {
                    let { appName: t, className: i } = e;
                    return (0, o.jsx)("header", {
                        className: (0, s.a)("top-[72px] z-50 flex h-12 w-[100vw] items-center justify-center gap-2 bg-warning-foreground px-1 py-3 text-white", i),
                        children: (0, o.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                (0, o.jsx)(l.P.clock8, { className: "h-4 w-4" }),
                                (0, o.jsx)("div", { className: "md:text-md text-sm font-semibold leading-tight", children: "Validators can now point liquidity to ".concat(t, ". Users may earn BGT after Artio Epoch 9.") }),
                            ],
                        }),
                    });
                },
                d = (e) => {
                    let { className: t } = e;
                    return (0, o.jsx)("header", {
                        className: (0, s.a)("top-[72px] z-50 flex h-12 w-[100vw] items-center justify-center gap-2 bg-destructive-foreground px-1 py-3 text-white", t),
                        children: (0, o.jsx)("div", {
                            className: "md:text-md text-center text-xs font-semibold leading-tight md:text-sm",
                            children: "We are currently performing system-wide updates. Our services will be temporarily unavailable, but we'll be back up shortly.",
                        }),
                    });
                },
                h = (e) => {
                    let { className: t } = e;
                    return (0, o.jsx)("header", {
                        className: (0, s.a)("top-[72px] z-50 flex h-12 w-[100vw] items-center justify-center gap-2 bg-info-foreground px-1 py-3 text-white", t),
                        children: (0, o.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                (0, o.jsx)(l.P.clock8, { className: "h-4 w-4" }),
                                (0, o.jsx)("div", {
                                    className: "md:text-md text-center text-xs font-semibold leading-tight md:text-sm",
                                    children: "We are currently experiencing network congestion in our system, please be patient with us.",
                                }),
                            ],
                        }),
                    });
                };
            ((r = n || (n = {})).LAUNCH = "LAUNCH"), (r.RPC = "RPC"), (r.SLOW = "SLOW");
            let u = {
                global: { LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: "Berachain Dapps" }) }, RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) }, SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) } },
                BEND: { LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.RO }) }, RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) }, SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) } },
                BEX: {
                    LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.rd }) },
                    RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}), hrefs: ["/pools", "/swap", "/"] },
                    SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}), hrefs: ["/pools", "/"] },
                },
                Honey: { LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.FM }) }, RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) }, SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) } },
                BERPS: {
                    LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.Nb }), hrefs: ["/leaderboard", "/portfolio"] },
                    RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) },
                    SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) },
                },
                "BGT Station": { LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.f }) }, RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) }, SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) } },
                Faucet: { LAUNCH: { enabled: !1, bannerComponent: (0, o.jsx)(c, { appName: a.is }) }, RPC: { enabled: !1, bannerComponent: (0, o.jsx)(d, {}) }, SLOW: { enabled: !1, bannerComponent: (0, o.jsx)(h, {}) } },
            };
        },
        3059: function (e, t, i) {
            i.d(t, {
                BearBG: function () {
                    return a;
                },
            });
            var r = i(7573),
                n = i(294),
                o = i(4689);
            function a(e) {
                let { lightUrl: t, darkUrl: i } = e,
                    { theme: a, systemTheme: s } = (0, o.F)();
                return ("system" === a ? s : a) === "light"
                    ? (0, r.jsx)(n.default, { className: "fixed bottom-0 left-1/2 right-0 h-[300px] -translate-x-1/2 object-cover", src: t, alt: "bera banner", width: 2e3, height: 300, style: { width: "auto" }, priority: !1 })
                    : (0, r.jsx)(n.default, { className: "fixed bottom-0 left-1/2 right-0 h-[300px] -translate-x-1/2 object-cover", src: i, alt: "bera banner", width: 2e3, height: 300, priority: !1, style: { width: "auto" } });
            }
        },
        5776: function (e, t, i) {
            i.d(t, {
                MultiSelectFormField: function () {
                    return I;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(4103),
                a = i(9289),
                s = (0, a.j)("inline-flex items-center border rounded-full px-2 py-1 font-thin transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-fit text-xs", {
                    variants: {
                        variant: {
                            default: "bg-primary border-transparent text-primary-foreground",
                            secondary: "bg-muted border-border text-muted-foreground",
                            outline: "text-foreground",
                            destructive: "bg-destructive border-destructive-foreground text-destructive-foreground",
                            warning: "bg-warning text-warning-foreground border-warning-foreground",
                            info: "bg-info text-info-foreground border-info-foreground",
                            success: "bg-success text-success-foreground border-success-foreground",
                        },
                    },
                    defaultVariants: { variant: "default" },
                });
            function l(e) {
                let { className: t, variant: i, ...n } = e;
                return (0, r.jsx)("div", { className: (0, o.a)(s({ variant: i }), t), ...n });
            }
            var c = i(1152);
            i(8106);
            var d = i(963),
                h = i(7618),
                u = i(5865),
                m = n.forwardRef((e, t) => {
                    let { className: i, ...n } = e;
                    return (0, r.jsx)(h.mY, { ref: t, className: (0, d.a)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", i), ...n });
                });
            m.displayName = h.mY.displayName;
            var f = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center border-b px-3",
                    "cmdk-input-wrapper": "",
                    children: [
                        (0, r.jsx)(u.Z, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
                        (0, r.jsx)(h.mY.Input, {
                            ref: t,
                            className: (0, d.a)("placeholder:text-foreground-muted flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50", i),
                            ...n,
                        }),
                    ],
                });
            });
            f.displayName = h.mY.Input.displayName;
            var p = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(h.mY.List, { ref: t, className: (0, d.a)("max-h-[300px] overflow-y-auto overflow-x-hidden", i), ...n });
            });
            p.displayName = h.mY.List.displayName;
            var y = n.forwardRef((e, t) => (0, r.jsx)(h.mY.Empty, { ref: t, className: "py-6 text-center text-sm", ...e }));
            y.displayName = h.mY.Empty.displayName;
            var g = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(h.mY.Group, {
                    ref: t,
                    className: (0, d.a)(
                        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
                        i
                    ),
                    ...n,
                });
            });
            g.displayName = h.mY.Group.displayName;
            var v = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(h.mY.Separator, { ref: t, className: (0, d.a)("-mx-1 h-px bg-border", i), ...n });
            });
            v.displayName = h.mY.Separator.displayName;
            var x = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(h.mY.Item, {
                    ref: t,
                    className: (0, d.a)(
                        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-muted aria-selected:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                        i
                    ),
                    ...n,
                });
            });
            x.displayName = h.mY.Item.displayName;
            var b = i(745),
                w = i(3196),
                j = n.forwardRef((e, t) => {
                    let { className: i, orientation: n = "horizontal", decorative: o = !0, ...a } = e;
                    return (0, r.jsx)(w.f, { ref: t, decorative: o, orientation: n, className: (0, d.a)("shrink-0 bg-border", "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]", i), ...a });
                });
            j.displayName = w.f.displayName;
            var N = i(5696),
                S = i(4744),
                k = i(9998),
                A = i(2005);
            let C = (0, a.j)("m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", {
                    variants: {
                        variant: {
                            default: "border-foreground/10 drop-shadow-md text-foreground bg-card hover:bg-card/80",
                            secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                            inverted: "inverted",
                        },
                    },
                    defaultVariants: { variant: "default" },
                }),
                I = (e) => {
                    let { className: t, variant: i, asChild: a = !1, options: s, defaultValue: d, onValueChange: h, disabled: u, placeholder: w, numberOfProjects: I, animation: P = 0, itemName: T = "Projects", ...E } = e,
                        [R, D] = (0, n.useState)(d || []),
                        O = (0, n.useRef)(new Set(R)),
                        [L, _] = (0, n.useState)(!1),
                        [B, U] = (0, n.useState)(0),
                        z = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        z.current && U(z.current.offsetWidth);
                    }, [L]),
                        (0, n.useEffect)(() => {
                            D(d || []), (O.current = new Set(d));
                        }, [d]);
                    let Y = (e) => {
                        O.current.has(e) ? (O.current.delete(e), D(R.filter((t) => t !== e))) : (O.current.add(e), D([...R, e])), h([...O.current]);
                    };
                    return (0, r.jsxs)("div", {
                        className: "flex w-full max-w-full flex-col items-center justify-center gap-4",
                        children: [
                            (0, r.jsxs)(b.J2, {
                                open: L,
                                onOpenChange: _,
                                children: [
                                    (0, r.jsx)(b.xo, {
                                        asChild: !0,
                                        children: (0, r.jsxs)(c.z, {
                                            ref: z,
                                            ...E,
                                            className: "flex h-auto min-h-10 w-full items-center justify-between rounded-md border bg-inherit hover:bg-muted",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: "mx-auto flex w-full items-center justify-between",
                                                    children: (0, r.jsx)("span", { className: "mx-3 text-sm font-normal text-muted-foreground", children: w }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        (0, r.jsx)(N.Z, {
                                                            className: "mx-4 h-4 w-4 cursor-pointer text-muted-foreground hover:rounded-sm hover:bg-secondary",
                                                            onClick: (e) => {
                                                                D([]), O.current.clear(), h([]), e.stopPropagation();
                                                            },
                                                        }),
                                                        (0, r.jsx)(j, { orientation: "vertical", className: "flex h-full min-h-6" }),
                                                        (0, r.jsx)(S.Z, { className: "ml-4 h-4 w-4 cursor-pointer text-muted-foreground" }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(b.yk, {
                                        className: " max-w-full p-0 drop-shadow-sm",
                                        style: { width: "".concat(B, "px") },
                                        align: "start",
                                        onEscapeKeyDown: () => _(!1),
                                        children: (0, r.jsxs)(m, {
                                            className: "w-full",
                                            children: [
                                                (0, r.jsx)(f, {
                                                    placeholder: "Search...",
                                                    onKeyDown: (e) => {
                                                        if ("Enter" === e.key) _(!0);
                                                        else if ("Backspace" === e.key && !e.target.value) {
                                                            R.pop(), D([...R]);
                                                            let e = R[R.length - 1];
                                                            void 0 !== e && (O.current.delete(e), h([...R]));
                                                        }
                                                    },
                                                    className: "w-full",
                                                }),
                                                (0, r.jsxs)(p, {
                                                    className: "w-full",
                                                    children: [
                                                        (0, r.jsx)(y, { children: "No results found." }),
                                                        (0, r.jsx)(g, {
                                                            className: "w-full",
                                                            children: s.map((e) => {
                                                                let t = O.current.has(e.value);
                                                                return (0, r.jsxs)(
                                                                    x,
                                                                    {
                                                                        onSelect: () => Y(e.value),
                                                                        style: { pointerEvents: "auto", opacity: 1 },
                                                                        className: "cursor-pointer",
                                                                        children: [
                                                                            (0, r.jsx)("div", {
                                                                                className: (0, o.a)(
                                                                                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                                                    t ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                                                                ),
                                                                                children: (0, r.jsx)(k.Z, { className: "h-4 w-4" }),
                                                                            }),
                                                                            e.icon && (0, r.jsx)(e.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                                                                            (0, r.jsx)("span", { children: e.label }),
                                                                        ],
                                                                    },
                                                                    e.value
                                                                );
                                                            }),
                                                        }),
                                                        (0, r.jsx)(v, {}),
                                                        (0, r.jsx)(g, {
                                                            children: (0, r.jsxs)("div", {
                                                                className: "flex items-center justify-between gap-1",
                                                                children: [
                                                                    R.length > 0 &&
                                                                        (0, r.jsx)(r.Fragment, {
                                                                            children: (0, r.jsx)(x, {
                                                                                onSelect: () => {
                                                                                    D([]), O.current.clear(), h([]);
                                                                                },
                                                                                style: { pointerEvents: "auto", opacity: 1 },
                                                                                className: "cursor-pointer justify-center",
                                                                                children: "Clear",
                                                                            }),
                                                                        }),
                                                                    R.length > 0 ? (0, r.jsx)(j, { orientation: "vertical", className: "flex h-full min-h-6" }) : (0, r.jsx)(v, {}),
                                                                    (0, r.jsx)(x, { onSelect: () => _(!1), style: { pointerEvents: "auto", opacity: 1 }, className: "cursor-pointer justify-center", children: "Close" }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            R.length > 0 &&
                                (0, r.jsxs)("div", {
                                    className: "flex w-full flex-row flex-wrap items-center gap-2",
                                    children: [
                                        (0, r.jsx)("div", { className: "font-semibold", children: "".concat(I, " ").concat(T, " filtered by:") }),
                                        (0, r.jsx)("div", {
                                            className: "flex w-full items-center justify-between",
                                            children: (0, r.jsx)("div", {
                                                className: "flex flex-wrap items-center",
                                                children: R.map((e) => {
                                                    let n = s.find((t) => t.value === e),
                                                        a = null == n ? void 0 : n.icon;
                                                    return (0, r.jsxs)(
                                                        l,
                                                        {
                                                            className: (0, o.a)(C({ variant: i, className: t })),
                                                            style: { animationDuration: "".concat(P, "s") },
                                                            children: [
                                                                a && (0, r.jsx)(a, { className: "mr-2 h-4 w-4" }),
                                                                null == n ? void 0 : n.label,
                                                                (0, r.jsx)(A.Z, {
                                                                    className: "ml-2 h-4 w-4 cursor-pointer",
                                                                    onClick: (t) => {
                                                                        t.stopPropagation(), Y(e);
                                                                    },
                                                                }),
                                                            ],
                                                        },
                                                        e
                                                    );
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                        ],
                    });
                };
            I.displayName = "MultiSelectFormField";
        },
        6682: function (e, t, i) {
            i.d(t, {
                ErrorToast: function () {
                    return d;
                },
                LoadingToast: function () {
                    return u;
                },
                SubmissionToast: function () {
                    return h;
                },
                SuccessToast: function () {
                    return c;
                },
            });
            var r = i(7573),
                n = i(4103),
                o = i(5866),
                a = i(6955),
                s = i(994);
            let l = (e) => {
                    let { title: t, href: i, className: a = "", startAdornment: s, description: l } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, n.a)("z-50 w-[350px] flex flex-col rounded-md  p-4 text-white shadow", a),
                        style: { background: "#292524", zIndex: 500 },
                        children: [
                            (0, r.jsxs)("div", {
                                className: "flex flex-row gap-2 text-sm font-semibold text-white",
                                children: [
                                    (0, r.jsx)("div", { className: "flex flex-0 items-center", children: s && s }),
                                    (0, r.jsx)("span", { className: "flex-1 line-clamp-2", title: t, children: "string" == typeof t ? t : "" }),
                                    i &&
                                        (0, r.jsxs)("a", {
                                            href: i,
                                            className: "flex flex-row gap-2 flex-0 items-center",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [(0, r.jsx)("p", { className: "text-sm font-normal", children: "View Txn" }), (0, r.jsx)(o.P.external, { className: "h-4 w-4" })],
                                        }),
                                ],
                            }),
                            l &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: "my-2 w-[311px] h-[0px] border" }),
                                        (0, r.jsx)("span", { title: l, className: "w-[311px] text-stone-500 text-xs font-medium font-['IBM Plex Sans'] leading-tight line-clamp-2", children: l }),
                                    ],
                                }),
                        ],
                    });
                },
                c = (e) => {
                    let { title: t = "Success", hash: i, description: n, onClose: a } = e;
                    return (0, r.jsx)(l, { title: t, onClose: a, description: n, startAdornment: (0, r.jsx)(o.P.checkCircle, { className: "h-6 w-6 text-positive" }), href: i ? "".concat(s.Qb, "/tx/").concat(i) : void 0 });
                },
                d = (e) => {
                    let { title: t = "Error", onClose: i, description: n, hash: a } = e;
                    return "User rejected txn" === t
                        ? (0, r.jsx)(l, { title: t, onClose: i, startAdornment: (0, r.jsx)(o.P.userX, { className: "h-6 w-6 text-destructive-foreground" }) })
                        : (0, r.jsx)(l, { title: t, onClose: i, description: n, startAdornment: (0, r.jsx)(o.P.XOctagon, { className: "h-6 w-6 text-destructive-foreground" }), href: a ? "".concat(s.Qb, "/tx/").concat(a) : void 0 });
                },
                h = (e) => {
                    let { title: t = "Submitting", hash: i, description: n, onClose: o } = e;
                    return (0, r.jsx)(l, { title: t, onClose: o, description: n, startAdornment: (0, r.jsx)(a.$, { size: 18, color: "#f8b613" }), href: i ? "".concat(s.Qb, "/tx/").concat(i) : void 0 });
                },
                u = (e) => {
                    let { title: t = "Loading", description: i, onClose: n, hash: o } = e;
                    return (0, r.jsx)(l, { title: t, onClose: n, description: i, startAdornment: (0, r.jsx)(a.$, { size: 18, color: "#f8b613" }), href: o ? "".concat(s.Qb, "/tx/").concat(o) : void 0 });
                };
        },
        8882: function (e, t, i) {
            i.d(t, {
                DataTable: function () {
                    return j;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(4103),
                a = i(95),
                s = i(1812),
                l = i.n(s),
                c = n.forwardRef((e, t) => {
                    let { className: i, ...n } = e;
                    return (0, r.jsx)("div", { className: "w-full", children: (0, r.jsx)("table", { ref: t, className: (0, o.a)("w-full caption-top text-sm", i), ...n }) });
                });
            c.displayName = "Table";
            var d = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("thead", { ref: t, className: (0, o.a)("[&_tr]:border-b", i), ...n });
            });
            d.displayName = "TableHeader";
            var h = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("tbody", { ref: t, className: (0, o.a)("[&_tr:last-child]:border-0", i), ...n });
            });
            (h.displayName = "TableBody"),
                (n.forwardRef((e, t) => {
                    let { className: i, ...n } = e;
                    return (0, r.jsx)("tfoot", { ref: t, className: (0, o.a)("bg-primary font-medium text-primary-foreground", i), ...n });
                }).displayName = "TableFooter");
            var u = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("tr", { ref: t, className: (0, o.a)("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted [&:not(:last-child)]:border-b", i), ...n });
            });
            u.displayName = "TableRow";
            var m = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("th", { ref: t, className: (0, o.a)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", i), ...n });
            });
            m.displayName = "TableHead";
            var f = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("td", { ref: t, className: (0, o.a)("px-4 py-3 align-middle font-medium [&:has([role=checkbox])]:pr-0", i), ...n });
            });
            f.displayName = "TableCell";
            var p = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("caption", { ref: t, className: (0, o.a)("border-b border-border bg-muted px-8 py-4 text-left text-2xl font-semibold text-foreground", i), ...n });
            });
            p.displayName = "TableCaption";
            var y = i(8912),
                g = i(6492),
                v = i(5981);
            i(1561);
            var x = i(6955);
            let b = ["columnFilters", "sorting", "pagination", "globalFilter"],
                w = {
                    id: "select",
                    header: function (e) {
                        var t;
                        let { table: i } = e;
                        return (0, r.jsx)(r.Fragment, {
                            children: (null === (t = i.options.meta) || void 0 === t ? void 0 : t.selectVisibleRows)
                                ? (0, r.jsx)(a.X, { className: "mt-1", checked: !!i.getIsAllPageRowsSelected() || (!!i.getIsSomePageRowsSelected() && "indeterminate"), onClick: i.getToggleAllPageRowsSelectedHandler() })
                                : (0, r.jsx)(a.X, { className: "mt-1", checked: !!i.getIsAllRowsSelected() || (!!i.getIsSomeRowsSelected() && "indeterminate"), onClick: i.getToggleAllRowsSelectedHandler() }),
                        });
                    },
                    cell: function (e) {
                        return (0, r.jsx)(a.X, { className: "mt-1", checked: e.row.getIsSelected(), disabled: !e.row.getCanSelect(), onClick: e.row.getToggleSelectedHandler() });
                    },
                    enableHiding: !1,
                    enableResizing: !1,
                };
            function j(e) {
                var t, i, a, s, j, N, S;
                let {
                        columns: k,
                        data: A,
                        onRowClick: C,
                        className: I,
                        title: P,
                        enablePagination: T,
                        enableSelection: E,
                        embedded: R,
                        fetchData: D,
                        stateChangeFetchInclusions: O = b,
                        loading: L = !1,
                        additionalTableProps: _,
                        customEmptyDataState: B,
                        onCustomSortingChange: U,
                        stickyHeaders: z,
                        additionalActions: Y,
                    } = e,
                    F = {
                        columnFilters: [],
                        sorting: [],
                        rowSelection: {},
                        columnVisibility: {},
                        columnOrder: [],
                        columnPinning: {},
                        expanded: {},
                        globalFilter: null,
                        columnSizing: {},
                        ...(null == _ ? void 0 : _.initialState),
                        pagination: {
                            pageIndex: null !== (N = null == _ ? void 0 : null === (i = _.initialState) || void 0 === i ? void 0 : null === (t = i.pagination) || void 0 === t ? void 0 : t.pageIndex) && void 0 !== N ? N : 0,
                            pageSize: null !== (S = null == _ ? void 0 : null === (s = _.initialState) || void 0 === s ? void 0 : null === (a = s.pagination) || void 0 === a ? void 0 : a.pageSize) && void 0 !== S ? S : 10,
                        },
                    },
                    [W, q] = (0, n.useState)(F),
                    V = (0, n.useMemo)(() => {
                        if (null == _ ? void 0 : _.state) {
                            var e;
                            return { ...W, ...(null !== (e = null == _ ? void 0 : _.state) && void 0 !== e ? e : {}) };
                        }
                        return W;
                    }, [W, null == _ ? void 0 : _.state]),
                    M = (0, v.usePrevious)(V);
                (0, n.useEffect)(() => {
                    D && !l().isEqual(l().pick(M, O), l().pick(V, O)) && D(V);
                }, [D, M, V, O]);
                let H = (0, n.useMemo)(() => (E ? [w, ...k] : k), [k, E]),
                    X = (0, y.b7)({
                        state: V,
                        data: A,
                        columns: H,
                        initialState: F,
                        enableRowSelection: !0,
                        onStateChange: q,
                        getCoreRowModel: (0, g.sC)(),
                        getFilteredRowModel: (0, g.vL)(),
                        getSortedRowModel: (0, g.tj)(),
                        getFacetedRowModel: (0, g.o6)(),
                        getFacetedUniqueValues: (0, g.JG)(),
                        ..._,
                        ...(T ? { getPaginationRowModel: (0, g.G_)() } : {}),
                        meta: { ...(null == _ ? void 0 : _.meta) },
                    });
                return (
                    (0, n.useEffect)(() => {
                        null == U || U(null == W ? void 0 : W.sorting);
                    }, [W]),
                    (0, r.jsxs)("div", {
                        className: (0, o.a)("flex h-full w-full flex-col overflow-auto bg-background", R ? "" : "rounded-md border border-border"),
                        children: [
                            (0, r.jsx)("div", {
                                className: (0, o.a)("h-full w-full overflow-x-auto overflow-y-auto border-border", R ? "" : "rounded-tl-md rounded-tr-md"),
                                children: (0, r.jsx)("div", {
                                    className: (0, o.a)(I),
                                    children: (0, r.jsxs)(c, {
                                        children: [
                                            P && (0, r.jsxs)(p, { className: "text-lg sm:text-2xl", children: [" ", P] }),
                                            (0, r.jsx)(d, {
                                                className: (0, o.a)("relative bg-muted", z && "sticky top-0"),
                                                children: X.getHeaderGroups().map((e) =>
                                                    (0, r.jsx)(u, { children: e.headers.map((e) => (0, r.jsx)(m, { children: e.isPlaceholder ? null : (0, y.ie)(e.column.columnDef.header, e.getContext()) }, e.id)) }, e.id)
                                                ),
                                            }),
                                            (0, r.jsx)(h, {
                                                children: (null === (j = X.getRowModel().rows) || void 0 === j ? void 0 : j.length)
                                                    ? null == X
                                                        ? void 0
                                                        : X.getRowModel().rows.map((e) =>
                                                              (0, r.jsx)(
                                                                  u,
                                                                  {
                                                                      className: (0, o.a)(C && "hover:cursor-pointer"),
                                                                      onClick: () => (null == C ? void 0 : C(e)),
                                                                      "data-state": e.getIsSelected() && "selected",
                                                                      children: e.getVisibleCells().map((e) => (0, r.jsx)(f, { className: "border-b", children: (0, y.ie)(e.column.columnDef.cell, e.getContext()) }, e.id)),
                                                                  },
                                                                  e.id
                                                              )
                                                          )
                                                    : (0, r.jsx)(u, { className: "hover:bg-background", children: (0, r.jsx)(f, { colSpan: k.length + (E ? 1 : 0), className: "h-24 text-center", children: null != B ? B : "No results." }) }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            T &&
                                (0, r.jsxs)("div", {
                                    className: "flex border-t p-2 text-primary-foreground",
                                    children: [
                                        (0, r.jsx)("div", { className: "flex justify-center overflow-hidden", children: null == Y ? void 0 : Y.map((e, t) => (0, r.jsx)("div", { className: "inline-flex gap-2.5", children: e }, t)) }),
                                        (0, r.jsxs)("div", {
                                            className: "flex-shink-0 ml-auto flex",
                                            children: [
                                                L && (0, r.jsx)("p", { className: "self-center px-4", children: (0, r.jsx)(x.$, { size: 16, color: "white" }) }),
                                                (0, r.jsxs)("div", {
                                                    className: "inline-flex h-9 items-center justify-start rounded-lg border py-3",
                                                    children: [
                                                        (0, r.jsx)("div", {
                                                            className: "flex items-center justify-center gap-2.5 border-r px-2 py-2",
                                                            children: (0, r.jsx)("button", {
                                                                type: "button",
                                                                onClick: () => X.setPageIndex(0),
                                                                disabled: !X.getCanPreviousPage(),
                                                                className: "font-['IBM Plex Sans'] w-8 select-none text-xs leading-tight text-foreground disabled:opacity-50",
                                                                children: "First",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: "flex w-8 items-center justify-center border-r p-1",
                                                            children: (0, r.jsx)("button", {
                                                                type: "button",
                                                                onClick: () => X.previousPage(),
                                                                disabled: !X.getCanPreviousPage(),
                                                                className: "relative select-none text-foreground disabled:opacity-50",
                                                                children: "<",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: "flex flex-shrink-0 items-center justify-center gap-2.5 p-1",
                                                            children: (0, r.jsx)("div", {
                                                                className: "font-['IBM Plex Sans'] p-2 text-xs leading-tight text-foreground",
                                                                children: "".concat(X.getState().pagination.pageIndex + 1, " of ").concat(X.getPageCount() || 1),
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: "flex w-8 items-center justify-center border-l p-1",
                                                            children: (0, r.jsx)("button", {
                                                                type: "button",
                                                                onClick: () => X.nextPage(),
                                                                disabled: !X.getCanNextPage(),
                                                                className: "relative select-none text-foreground disabled:opacity-50 ",
                                                                children: ">",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: "flex items-center justify-center gap-2.5 border-l px-2 py-2",
                                                            children: (0, r.jsx)("button", {
                                                                type: "button",
                                                                disabled: !X.getCanNextPage(),
                                                                onClick: () => X.setPageIndex(X.getPageCount() - 1),
                                                                className: "font-['IBM Plex Sans'] w-8 select-none text-xs leading-tight text-foreground disabled:opacity-50",
                                                                children: "Last",
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    })
                );
            }
        },
        9371: function (e, t, i) {
            i.d(t, {
                ErrorPage: function () {
                    return a;
                },
            });
            var r = i(7573),
                n = i(294),
                o = i(1152);
            function a(e) {
                let { onBack: t, reset: i } = e;
                return (0, r.jsxs)("div", {
                    className: "m-auto flex w-fit flex-col justify-center gap-4",
                    children: [
                        (0, r.jsx)(n.default, { src: "https://res.cloudinary.com/duv0g402y/image/upload/f_auto,q_auto/v1/bears/hlt8meamxdaayj8qjyqs", alt: "404", width: 240, height: 150, className: "mx-auto" }),
                        (0, r.jsx)("div", { className: "text-center text-lg font-semibold leading-7", children: "Oh no! Something went wrong" }),
                        (0, r.jsxs)("div", {
                            className: "text-center text-sm font-medium leading-tight text-muted-foreground",
                            children: ["This page either doesn’t exist or we messed up.", (0, r.jsx)("br", {}), "Would you like to return to the homepage?"],
                        }),
                        t && (0, r.jsxs)(o.z, { onClick: t, className: "mx-auto w-fit", children: [" ", "Go back"] }),
                        i && (0, r.jsx)(o.z, { onClick: i, className: "mx-auto w-fit", children: "Refresh" }),
                    ],
                });
            }
        },
        2676: function (e, t, i) {
            i.d(t, {
                Explore: function () {
                    return d;
                },
            });
            var r = i(7573),
                n = i(294),
                o = i(8146),
                a = i(994),
                s = i(4103),
                l = i(5866);
            let c = (e) => {
                    let { image: t, title: i, subtitle: a, background: l, color: c, href: d, disabled: h } = e,
                        u = (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: "flex h-[7.25rem] h-full w-[5.25rem] flex-col items-center justify-center",
                                    style: { background: l },
                                    children: (0, r.jsx)(n.default, { src: t, alt: "explore-".concat(i), width: 336, height: 464 }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-1 py-4 pr-2",
                                    children: [(0, r.jsx)("div", { className: "text-lg font-bold text-background", children: i }), (0, r.jsx)("div", { className: "text-sm text-background", children: a })],
                                }),
                            ],
                        }),
                        m = (0, s.a)(
                            "grid w-full grid-cols-[minmax(70px,80px)_3fr] items-start justify-between gap-4 overflow-hidden rounded-xl border-[1px] border-border bg-transparent shadow-[0_10px_10px_0px_transparent]",
                            !h && "cursor-pointer transition duration-300 hover:translate-y-[-1%] hover:scale-[1.02] hover:shadow-[".concat(c, "]")
                        );
                    return h ? (0, r.jsx)("div", { className: m, children: u }) : (0, r.jsx)(o.default, { href: d, target: "_blank", className: m, children: u });
                },
                d = (e) => {
                    let { currentApp: t } = e,
                        i = [
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148757/dapps/shared/explore-section/ffv7tfzlhxpnetobmfih.png",
                                title: "Foundation",
                                subtitle: (0, r.jsx)(r.Fragment, { children: "Explore Berachain and learn more about the vision" }),
                                background: "#775A49",
                                href: a.cI,
                            },
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148759/dapps/shared/explore-section/pp58k8l640yhhjgtk2y0.png",
                                title: "BeraHub",
                                subtitle: "The hub for everything Proof of Liquidity",
                                background: "#EDBD42",
                                href: a.px,
                            },
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148758/dapps/shared/explore-section/g4msmaqxvghuzc4afzkn.png",
                                title: "Honey",
                                subtitle: "Mint or redeem Berachain's native stablecoin",
                                background: "#EC8A19",
                                href: a.VG,
                            },
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148757/dapps/shared/explore-section/ly5ifkupuumhqcsxrtpv.png",
                                title: "Berascan",
                                subtitle: "Blockchain Explorer",
                                background: "#96532C",
                                href: a.wJ,
                            },
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148757/dapps/shared/explore-section/jxgatstusngb2tzzt8gd.png",
                                title: "Ecosystem",
                                subtitle: "Browse Berachain Projects",
                                background: "#326FE5",
                                href: a.AV,
                            },
                            {
                                image: "https://res.cloudinary.com/duv0g402y/image/upload/v1740148757/dapps/shared/explore-section/rui3gpjeyixl1yru43p5.png",
                                title: "NFT Bridge",
                                subtitle: "Dive into the Documentation",
                                background: "#7464E5",
                                href: a.dj,
                            },
                        ].filter((e) => e.title !== t);
                    return (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("p", {
                                className: " leading-15 mb-6 gap-2 text-4xl font-bold text-background",
                                children: ["Explore the", (0, r.jsx)("br", {}), (0, r.jsx)(l.P.logo, { className: "inline-block", width: 52, height: 52 }), " Berachain Ecosystem."],
                            }),
                            (0, r.jsx)("div", { className: "grid w-full auto-rows-[116px] grid-cols-1 justify-around gap-4 lg:grid-cols-3", children: i.map((e, t) => (0, r.jsx)(c, { ...e }, t)) }),
                        ],
                    });
                };
        },
        8544: function (e, t, i) {
            i.d(t, {
                Gradient: function () {
                    return a;
                },
            });
            var r = i(7573),
                n = i(294),
                o = i(4689);
            function a(e) {
                let { lightUrl: t, darkUrl: i } = e,
                    { theme: a, systemTheme: s } = (0, o.F)();
                return ("system" === a ? s : a) === "light"
                    ? (0, r.jsx)(n.default, { className: "-z-1 fixed left-1/2 right-0 top-0 -translate-x-1/2", src: t, alt: "bera banner", width: 1078, height: 820, priority: !0, loading: "eager", style: { height: "auto" } })
                    : (0, r.jsx)(n.default, { className: "-z-1 fixed left-1/2 right-0 top-0 -translate-x-1/2", src: i, alt: "bera banner", width: 1078, height: 820, priority: !0, loading: "eager", style: { height: "auto" } });
            }
        },
        8127: function (e, t, i) {
            i.d(t, {
                Header: function () {
                    return p;
                },
            });
            var r = i(7573);
            i(7653);
            var n = i(4070),
                o = i(8146),
                a = i(994),
                s = i(4103),
                l = i(5866),
                c = i(1695),
                d = i(5668),
                h = (e) => {
                    let { appName: t } = e,
                        i = (0, c.usePathname)(),
                        n = (e, t) => {
                            var r, n;
                            let o = null === (r = d.q.global) || void 0 === r ? void 0 : r[e],
                                a = null === (n = d.q[t]) || void 0 === n ? void 0 : n[e],
                                s = (null == o ? void 0 : o.enabled) && (!o.hrefs || o.hrefs.includes(i)),
                                l = (null == a ? void 0 : a.enabled) && (!a.hrefs || a.hrefs.includes(i));
                            return s || l;
                        },
                        o = t || "Berachain Dapps";
                    return (0, r.jsx)(r.Fragment, {
                        children: Object.values(d.r).map((e) => {
                            var t, i;
                            return (0, r.jsx)("div", { children: n(e, o) && (null === (i = d.q[o]) || void 0 === i ? void 0 : null === (t = i[e]) || void 0 === t ? void 0 : t.bannerComponent) }, e);
                        }),
                    });
                },
                u = i(4597),
                m = i(870);
            let f = (0, n.default)(
                () =>
                    i
                        .e(940)
                        .then(i.bind(i, 4940))
                        .then((e) => e.ThemeToggleMobile),
                { loadableGenerated: { webpack: () => [4940] }, ssr: !1, loading: () => (0, r.jsx)(r.Fragment, { children: " " }) }
            );
            function p(e) {
                let { navItems: t, mobileNavItems: i = [], hideConnectBtn: n = !1, isHoney: c = !1, hideTheme: d = !1, appName: p } = e;
                return (0, r.jsxs)("nav", {
                    className: (0, s.a)("h-18 fixed left-0 right-0 top-0 z-50 w-full border-b border-border bg-background bg-opacity-20 backdrop-blur-2xl"),
                    children: [
                        (0, r.jsxs)("div", {
                            className: "flex items-end justify-between px-6 py-3",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        (0, r.jsx)("span", {
                                            className: "text-lg font-bold tracking-tight lg:mr-5",
                                            children: (0, r.jsx)(o.default, { href: "/", children: (0, r.jsx)(l.P.logo, { className: "h-12 w-12 text-foreground" }) }),
                                        }),
                                        (0, r.jsx)(u.$, { navItems: t }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: "flex h-full items-center gap-2 xl:gap-2",
                                    children: [
                                        !d && (0, r.jsx)(f, {}),
                                        (0, r.jsx)(o.default, {
                                            className: "hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-md sm:flex",
                                            href: null !== a.TD && void 0 !== a.TD ? a.TD : "",
                                            target: "_blank",
                                            children: (0, r.jsx)(l.P.faucetFav, { className: "h-10 w-10 hover:opacity-80" }),
                                        }),
                                        (0, r.jsx)(m.MobileDropdown, { navItems: c ? i : t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(h, { appName: p }),
                    ],
                });
            }
        },
        1561: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    BREAKPOINTS: function () {
                        return n;
                    },
                    useBreakpoint: function () {
                        return a;
                    },
                });
            var r,
                n,
                o = i(7653);
            ((r = n || (n = {}))[(r.xs = 0)] = "xs"), (r[(r.sm = 576)] = "sm"), (r[(r.md = 768)] = "md"), (r[(r.lg = 992)] = "lg"), (r[(r.xl = 1200)] = "xl");
            let a = () => {
                let e = (e) => {
                        if (!e) return;
                        let t = 1200;
                        return e < 576 ? (t = 0) : e >= 576 && e < 768 ? (t = 576) : e >= 768 && e < 992 ? (t = 768) : e >= 992 && e < 1200 && (t = 992), t;
                    },
                    [t, i] = (0, o.useState)(void 0);
                return (
                    (0, o.useEffect)(() => {
                        let t = () => {
                            var t;
                            i(e(null === (t = window) || void 0 === t ? void 0 : t.innerWidth));
                        };
                        if (void 0 !== window) {
                            var r;
                            null === (r = window) || void 0 === r || r.addEventListener("resize", t);
                        }
                        return () => {
                            if (void 0 !== window) {
                                var e;
                                null === (e = window) || void 0 === e || e.removeEventListener("resize", t);
                            }
                        };
                    }, []),
                    t
                );
            };
        },
        5981: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    usePrevious: function () {
                        return n;
                    },
                });
            var r = i(7653);
            function n(e) {
                let t = (0, r.useRef)();
                return (
                    (0, r.useEffect)(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        4597: function (e, t, i) {
            i.d(t, {
                $: function () {
                    return l;
                },
                p: function () {
                    return c;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(8146),
                a = i(4103),
                s = i(5620);
            function l(e) {
                let { navItems: t, className: i, titleClassName: n, ...l } = e;
                return (0, r.jsx)("nav", {
                    className: (0, a.a)("hidden items-center lg:flex xl:gap-2", i),
                    ...l,
                    children: t.map((e, t) =>
                        "#" === e.href && e.children
                            ? (0, r.jsx)(
                                  s.NavigationMenu,
                                  {
                                      children: (0, r.jsx)(s.NavigationMenuList, {
                                          children: (0, r.jsxs)(s.NavigationMenuItem, {
                                              children: [
                                                  (0, r.jsx)(s.NavigationMenuTrigger, { className: (0, a.a)("text-muted-foreground", n), children: e.title }),
                                                  (0, r.jsx)(s.NavigationMenuContent, {
                                                      children: (0, r.jsx)("ul", {
                                                          className: "flex w-[404px] flex-col gap-1 p-4",
                                                          children: e.children.map((e) => (0, r.jsx)(c, { title: e.title, href: e.href, type: e.type, icon: e.icon, children: e.blurb }, e.title)),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      }),
                                  },
                                  e.href
                              )
                            : (0, r.jsx)(
                                  o.default,
                                  {
                                      href: e.href,
                                      className: (0, a.a)(
                                          "flex-shrink-0 whitespace-nowrap rounded-xs px-4 py-2 text-sm font-medium outline-none transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                      ),
                                      children: (0, r.jsx)("span", { className: (0, a.a)("text-muted-foreground", n), children: e.title }),
                                  },
                                  "".concat(e.href, "-").concat(t)
                              )
                    ),
                });
            }
            let c = (0, n.forwardRef)((e, t) => {
                let { className: i, icon: n, title: o, type: l, children: c, onClick: d, ...h } = e;
                return (0, r.jsx)("li", {
                    onClick: d,
                    children: (0, r.jsx)(s.NavigationMenuLink, {
                        asChild: !0,
                        children: (0, r.jsxs)("a", {
                            target: "external" === l ? "_blank" : "_self",
                            ref: t,
                            className: (0, a.a)("flex select-none items-center gap-2 rounded-xs p-1 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary", i),
                            ...h,
                            children: [
                                n,
                                (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", { className: "text-sm font-medium leading-5", children: o }), (0, r.jsx)("p", { className: "line-clamp-2 text-sm leading-6 text-foreground", children: c })],
                                }),
                            ],
                        }),
                    }),
                });
            });
            c.displayName = "ListItem";
        },
        6007: function (e, t, i) {
            i.d(t, {
                MainWithBanners: function () {
                    return u;
                },
            });
            var r,
                n,
                o,
                a,
                s = i(7573),
                l = i(1695),
                c = i(4103);
            ((r = o || (o = {})).CONNECTOR_ID = "wagmi.wallet"),
                (r.SLIPPAGE_TOLERANCE = "SLIPPAGE_TOLERANCE"),
                (r.TRANSACTION_TYPE = "TRANSACTION_TYPE"),
                (r.USE_SIGNATURES = "USE_SIGNATURES"),
                ((n = a || (a = {}))[(n.FAST = 1e4)] = "FAST"),
                (n[(n.NORMAL = 2e4)] = "NORMAL"),
                (n[(n.SLOW = 2e5)] = "SLOW");
            var d = i(5668);
            let h = (e, t) => {
                    let i = [];
                    if (e) {
                        let r = d.q[e];
                        r &&
                            Object.keys(r).forEach((e) => {
                                let n = r[e];
                                n.enabled && (!n.hrefs || n.hrefs.includes(t)) && i.push(e);
                            });
                    }
                    let r = d.q.global;
                    return (
                        r &&
                            Object.keys(r).forEach((e) => {
                                let n = r[e];
                                n.enabled && (!n.hrefs || n.hrefs.includes(t)) && !i.includes(e) && i.push(e);
                            }),
                        i.length
                    );
                },
                u = (e) => {
                    let { appName: t, children: i, paddingTop: r = 64, multiplier: n = 48, className: o, customBannerText: a, ...d } = e,
                        u = (0, l.usePathname)(),
                        m = h(t, null != u ? u : "");
                    return a && (m += 1), (0, s.jsx)("main", { className: (0, c.a)("w-full", o), ...d, style: { paddingTop: "".concat(n * m + r, "px"), ...d.style }, children: i });
                };
        },
        870: function (e, t, i) {
            i.d(t, {
                MobileDropdown: function () {
                    return y;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(8146),
                a = i(4103),
                s = i(1152),
                l = i(5866),
                c = i(5620),
                d = i(745),
                h = i(963),
                u = i(156),
                m = n.forwardRef((e, t) => {
                    let { className: i, children: n, ...o } = e;
                    return (0, r.jsxs)(u.fC, {
                        ref: t,
                        className: (0, h.a)("relative overflow-auto", i),
                        ...o,
                        children: [(0, r.jsx)(u.l_, { className: "h-full w-full rounded-[inherit]", children: n }), (0, r.jsx)(f, {}), (0, r.jsx)(u.Ns, {})],
                    });
                });
            m.displayName = u.fC.displayName;
            var f = n.forwardRef((e, t) => {
                let { className: i, orientation: n = "vertical", ...o } = e;
                return (0, r.jsx)(u.gb, {
                    ref: t,
                    orientation: n,
                    className: (0, h.a)("flex touch-none select-none transition-colors", "vertical" === n && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === n && "h-2.5 border-t border-t-transparent p-[1px]", i),
                    ...o,
                    children: (0, r.jsx)(u.q4, { className: "relative flex-1 rounded-full bg-border" }),
                });
            });
            f.displayName = u.gb.displayName;
            var p = i(4597);
            function y(e) {
                let { navItems: t } = e,
                    [i, a] = n.useState(!1);
                return (
                    n.useEffect(() => {
                        i ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
                    }, [i]),
                    (0, r.jsxs)(d.J2, {
                        open: i,
                        onOpenChange: a,
                        children: [
                            (0, r.jsx)(d.xo, {
                                asChild: !0,
                                children: (0, r.jsx)(s.z, {
                                    variant: "ghost",
                                    className: "mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden",
                                    children: i ? (0, r.jsx)(l.P.close, { className: "h-6 w-6" }) : (0, r.jsx)(l.P.menu, { className: "h-6 w-6" }),
                                }),
                            }),
                            (0, r.jsx)(d.yk, {
                                className: "z-40 mt-2 h-[calc(100vh-4rem)] w-screen animate-none rounded-none border-none transition-transform",
                                children: (0, r.jsx)(m, {
                                    className: "h-full py-8",
                                    children: t.map((e) => {
                                        let { href: t, title: i, children: n } = e;
                                        return "#" === t && n
                                            ? (0, r.jsx)(
                                                  c.NavigationMenu,
                                                  {
                                                      children: (0, r.jsx)(
                                                          "ul",
                                                          { className: "flex w-full flex-col gap-1 p-4", children: n.map((e) => (0, r.jsx)(p.p, { title: e.title, href: e.href, type: e.type, icon: e.icon, children: e.blurb }, e.title)) },
                                                          t
                                                      ),
                                                  },
                                                  t
                                              )
                                            : (0, r.jsx)(o.default, { onClick: () => a(!1), href: { pathname: t }, className: "flex p-4 font-medium text-foreground transition-colors hover:text-primary", children: i }, t);
                                    }),
                                }),
                            }),
                        ],
                    })
                );
            }
            n.forwardRef((e, t) => {
                let { className: i, title: n, children: o, ...s } = e;
                return (0, r.jsx)("li", {
                    children: (0, r.jsxs)("a", {
                        target: "_blank",
                        ref: t,
                        className: (0, a.a)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary", i),
                        ...s,
                        children: [(0, r.jsx)("div", { className: "text-sm font-medium leading-none", children: n }), (0, r.jsx)("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: o })],
                    }),
                });
            }).displayName = "ListItem";
        },
        6955: function (e, t, i) {
            i.d(t, {
                $: function () {
                    return o;
                },
            });
            var r = i(7573),
                n = i(1890);
            let o = (e) => {
                let { size: t, color: i, ...o } = e;
                return (0, r.jsx)(n.Z, { size: t, color: i, ...o });
            };
        },
        4546: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    PrivacyPolicy: function () {
                        return x;
                    },
                    TermOfUseModal: function () {
                        return b;
                    },
                    TermsOfUse: function () {
                        return v;
                    },
                });
            var r = i(7573),
                n = i(7653),
                o = i(4103),
                a = i(963),
                s = (0, i(9289).j)("relative w-full rounded-md border px-4 py-3 text-sm font-normal leading-tight", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            warning: "border-solid border-warning-foreground bg-warning text-warning-foreground",
                            info: "border-solid border-info-foreground bg-info text-info-foreground",
                            success: "border-solid border-success-foreground bg-success text-success-foreground",
                            destructive: "text-destructive-foreground border-destructive-foreground dark:border-destructive text-destructive-foreground bg-destructive",
                        },
                    },
                    defaultVariants: { variant: "default" },
                }),
                l = n.forwardRef((e, t) => {
                    let { className: i, variant: n, ...o } = e;
                    return (0, r.jsx)("div", { ref: t, role: "alert", className: (0, a.a)(s({ variant: n }), i), ...o });
                });
            l.displayName = "Alert";
            var c = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("h5", { ref: t, className: (0, a.a)("text-sm font-semibold leading-tight tracking-tight", i), ...n });
            });
            c.displayName = "AlertTitle";
            var d = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)("div", { ref: t, className: (0, a.a)("text-xs leading-tight md:text-sm", i), ...n });
            });
            d.displayName = "AlertDescription";
            var h = i(1152),
                u = i(95),
                m = i(2730),
                f = i(5866),
                p = i(8699);
            let y = (e) => {
                let { className: t } = e;
                return (0, r.jsxs)("div", {
                    className: t,
                    style: { paddingLeft: "12px" },
                    children: [
                        (0, r.jsxs)("p", {
                            children: [
                                (0, r.jsx)("span", {
                                    children:
                                        "If you are a business, company, association, project group, institution or other legal entity, you may permit Authorized Users to access and use the Services, provided: (a) they have agreed to the terms of, and shall remain in compliance with, this Agreement; and (b) you shall be liable for any acts or omissions of your Authorized Users. “",
                                }),
                                (0, r.jsx)("span", { children: "Authorized User(s)" }),
                                (0, r.jsx)("span", {
                                    children:
                                        "” mean the following users that you authorize to access or use the Services on your behalf: (i) your employees, agents, or independent contractors; and (ii) other users expressly authorized to use and access the Services by us.",
                                }),
                            ],
                        }),
                        (0, r.jsx)("p", { children: (0, r.jsx)("span", { children: "Please read this Agreement carefully to ensure that you understand each provision." }) }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Our Site and Services" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", { children: "As part of the Site, we provide a user interface (the “" }),
                                        (0, r.jsx)("span", { children: "Platform" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”) to access certain applications and smart contracts, decentralized applications, APIs and other software that have been developed by us or on our behalf for the Berachain Network (the “",
                                        }),
                                        (0, r.jsx)("span", { children: "Protocol" }),
                                        (0, r.jsx)("span", {
                                            children: "”), including without limitation software for the execution of transactions with cryptocurrencies, digital tokens or coins and other blockchain-based assets (collectively, “",
                                        }),
                                        (0, r.jsx)("span", { children: "Digital Assets" }),
                                        (0, r.jsx)("span", { children: "”) in a decentralized, peer-to-peer manner. " }),
                                        (0, r.jsx)("span", { children: "This " }),
                                        (0, r.jsx)("span", { children: "Agreement" }),
                                        (0, r.jsx)("span", {
                                            children: "governs your use of our Site, the Platform, the Protocol, and all related tools, applications, data, software and other services provided by us (collectively, the “",
                                        }),
                                        (0, r.jsx)("span", { children: "Services" }),
                                        (0, r.jsx)("span", { children: "”)." }),
                                    ],
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "By accessing or using the Site or the Services, you agree that we do not provide execution, settlement, or clearing services of any kind and are not responsible for the execution, settlement, or clearing of transactions automated through the Services.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Use of Our Site and Services" }) }) }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Eligibility" }) }) }),
                        (0, r.jsx)("ol", {
                            children: (0, r.jsx)("li", {
                                children: (0, r.jsx)("span", {
                                    children:
                                        "This is a contract between you and us. You must read and agree to the terms of this Agreement before using the Site and the Services. If you do not agree, you may not use the Site and/or the Services. You may use the Site and the Services only if you can form a binding contract with us, and only in compliance with this Agreement and all applicable:",
                                }),
                            }),
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "laws, constitutions, treaties, statutes, codes, ordinances, principles of common and civil law and equity, orders, decrees, rules, regulations and municipal by-laws, whether domestic, foreign or international;",
                                    }),
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "judicial, arbitral, administrative, ministerial, departmental and regulatory judgments, orders, writs, injunctions, decisions, rulings, decrees and awards of any: (1) multinational or supranational body or organization, nation, government, state, province, country, territory, municipality, quasi-government, administrative, judicial or regulatory authority, agency, board, body, bureau, commission, instrumentality, court or tribunal or any political subdivision thereof, or any central bank (or similar monetary or regulatory authority) thereof, any taxing authority, any ministry or department or agency of any of the foregoing; (2) self-regulatory organization or stock exchange; (3) entity exercising executive, legislative, judicial, regulatory or administrative functions of or pertaining to government; and (4) corporation or other entity owned or controlled, through stock or capital ownership or otherwise, by any of such entities or other bodies pursuant to the foregoing (collectively, “",
                                        }),
                                        (0, r.jsx)("span", { children: "Governmental Authority" }),
                                        (0, r.jsx)("span", { children: "”); and " }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "policies, practices and guidelines of, or contracts with, any Governmental Authority, which, although not actually having the force of law, are considered by such Governmental Authority as requiring compliance as if having the force of law, as the same may be amended from time to time and any successor thereto and in each case binding on or affecting the person or entity, or the assets of the person or entity, referred to in the context in which such word is used; (collectively, “",
                                        }),
                                        (0, r.jsx)("span", { children: "Applicable Laws" }),
                                        (0, r.jsx)("span", { children: "”). " }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            children: [
                                                "The Services are intended for users who are at least the age of majority in the jurisdiction of their residence. You agree that by using the Services you are at least the age of legal majority in your jurisdiction of residence or accessing the Services under the supervision of a parent or guardian, and you are legally able to enter into a contract. If you are a parent or legal guardian of a user under the age of legal majority in the jurisdiction of their residence, you agree to be fully responsible for the acts or omissions of such user in relation to the Service.",
                                                " ",
                                            ],
                                        }),
                                        (0, r.jsx)("span", { children: "The Site and the Services are not available to any person previously removed from the Site or the Services by us." }),
                                    ],
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "By entering or using this Site or the Services you represent, warrant and covenant that:" }) }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "if you are an individual, you are of legal age in the jurisdiction in which you reside and you have the legal capacity to enter into this Agreement and be bound by them;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "if you are an entity, then you have the legal authority to accept this Agreement;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "you are not a resident, national, or agent of, located in, incorporated or otherwise formed in, or have a registered office in, the United States or any Restricted Territory;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", { children: "you have the right, authority and capacity to enter into this Agreement on behalf of yourself and the person or entity that you represent (if applicable);" }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you are not prohibited from entering or using this Site or the Services or transacting with the Protocol under any Applicable Laws;" }) }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you understand the risks associated with using our Site and the Services, including using the Protocol;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "you understand that you will be dealing with third parties and we have not verified and will not be in a position to verify any transaction you make using the Protocol;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "you are not a Restricted Person, Sanctioned Person or Blocked Person or acting on behalf or under the authority, instruction or employment of a Restricted Person, Sanctioned Person or Blocked Person;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you do not intend to transact with any Restricted Person or Sanctioned Person; or" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "you do not, and will not, use a VPN or any other privacy or anonymization tools or techniques to circumvent, or attempt to circumvent, any restrictions that apply to the Services.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "User Responsibilities; Wallet" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", { children: "In order to use certain features of the Site and Services, you may be required to connect your digital asset wallet or address (“" }),
                                        (0, r.jsx)("span", { children: "Wallet" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”) to the Platform. These features may include providing you with the ability to create a user account, associate an existing user account or making payments for our paid services using digital currencies held in your digital asset wallet. If you choose to access and/or use our Services through web3 services, you agree to our collection, use, and/or disclosure of your digital asset wallet, transaction information, and token identifiers in accordance with our Privacy Policy. You acknowledge that we are not responsible for transferring, safeguarding, or maintaining your private keys or any assets associated with your Wallet. If you lose, mishandle or have stolen your Wallet private keys, you acknowledge that you may not be able to recover associated assets and that we are not responsible for such loss.",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "You acknowledge that you may disconnect your Wallet from the Platform at any time." }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "You agree to notify us immediately if you suspect your linked Wallet has been compromised or otherwise suspect any security issues related to your use of the Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "You agree that you will not use the Services to transact with any Digital Asset that may be considered a security under Applicable Laws." }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You acknowledge and agree that we may restrict, suspend or close your Wallet and access to the Platform for any reason or no reason, including if we reasonably believe that you have breached any of the terms of this Agreement.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "Digital Assets that you purchase or use in relation to the Services may be held in one or more Wallets of yours. We do not operate, maintain, control or have custody over any contents of your Wallet. We accept no responsibility for, or liability to, you in connection with your Wallet and make no representations or warranties regarding how the Platform or the Services will operate with any specific Wallet. Any issues relating to your Wallet should be addressed to your Wallet provider.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You must provide all equipment, connectivity, and software necessary to connect to the Service. You are solely responsible for any costs and expenses, including Internet connection or mobile fees, which you incur when accessing the Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "You acknowledge that we are not responsible for, and you agree to indemnify us for, any loss or damage arising from your failure to comply with the requirements hereunder.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Access and Use of the Site and Services" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, non-sublicensable and freely revocable right to use the Site and the Services. You agree to comply, and agree to ensure that Authorized Users comply, with the terms of this Agreement and all applicable fees for the Services, if any, are paid to the applicable person or entity in relation to the use of the Services by yourself and/or all Authorized Users. We reserve all rights not expressly granted herein in the Site, the Services and the Foundation Content (as defined below). We may terminate this right of use, in whole or in part, at any time for any reason or no reason.",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "You agree that rights granted to you in this Agreement are subject to, and you covenant to abide with, the following restrictions:" }) }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "you shall not use the Site or the Services from a jurisdiction that we have, in our sole discretion, determined is a jurisdiction where the use of the Site or the Services is prohibited, including without limitation the United States and the Restricted Territories (as defined below);",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site or the Services, whether in whole or in part, or any content displayed on the Site or the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site or the Services;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "you shall not access the Site or the Services in order to build a similar or competitive websites, product, API or service or for benchmarking or competitive analysis with respect to competitive or related products or services, or to develop, commercialize, license, or sell any product, service or technology that could, directly or indirectly, be a substitute for our Services or affect our ability to realize revenue in connection with our Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "except as expressly stated herein, no part of the Site or the Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "you shall not use our Services to develop, test, market, or train artificial intelligence technology, machine learning models, automated analytical techniques, or related technology;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "in connection with using the Services, you only will transfer legally-obtained Digital Assets that belong to you; and" }) }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you shall not use the Site or the Services other than as permitted hereunder." }) }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "Unless otherwise indicated, any future release, update, or other addition to the functionality of the Site and Services shall be subject to this Agreement. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "You acknowledge and agree that: " }) }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "we have no obligation to provide you with any support or maintenance in connection with the Site and the Services;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "the pricing information and other data provided on the Site or the Platform does not represent (1) an offer, a solicitation of an offer, or recommendation to enter into, a transaction with us or (2) any advice regarding a transaction entered into using the Site, the Platform and the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "we do not act as an agent for you or any other user of the Site, the Platform or the Services;" }) }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you are solely responsible for your use of the Services, including all of your transfers of Digital Assets;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "any Digital Assets you use in connection with the Services are either (1) owned by you or (2) you are validly authorized to carry out actions using such Digital Assets;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "to the fullest extent not prohibited by Applicable Law, we owe no fiduciary duties or liabilities to you or any other party, and that to the extent any such duties or liabilities may exist at law or in equity, you hereby irrevocably disclaim, waive, and eliminate those duties and liabilities;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "you are solely responsible for reporting and paying any taxes applicable to your use of the Services; and" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "we have no control over, or liability for, the delivery, quality, safety, legality, or any other aspect of any Digital Assets that you may transfer to or from a third party, and we are not responsible for ensuring that an entity with whom you transact completes the transaction or is authorized to do so, and if you experience a problem with any transactions in Digital Assets using the Services, then you bear the entire risk.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", {
                            children: (0, r.jsx)("li", {
                                children: (0, r.jsx)("span", {
                                    children:
                                        "You acknowledge and agree that the Services are non-custodial and we do not have any control over your use of the Services. You understand that by using the Service you are interacting directly with the smart contracts on the network and we do not facilitate or execute any transactions on your behalf. When you deposit Digital Assets into any smart contract, you retain control over those Digital Assets at all times. The private key associated with the Wallet from which you transfer Digital Assets is the only private key that can control the Digital Assets you transfer into the smart contracts. In some cases, you may withdraw Digital Assets from any smart contract only to the Wallet from which you deposited the Digital Assets.",
                                }),
                            }),
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Acceptable Use" }) }) }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "You agree not to engage in any of the following prohibited activities:" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "copying, distributing, or disclosing any part of the Site or the Services in any medium, including without limitation by any automated or non-automated “scraping”;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "using any automated system, including without limitation “robots”, “spiders” and “offline readers” to access the Site or the Services in a manner that sends more request messages to our servers than a human can reasonably produce in the same period of time by using a conventional on-line web browser (except that we grant the operators of public search engines revocable permission to use spiders to copy publicly available materials from the Site for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials);",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "transmitting spam, chain letters, or other unsolicited email or messages through the Site or the Services;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "attempting to interfere with, compromise the system integrity or security of or decipher any transmissions to or from the servers running the Site or the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", { children: "taking any action that imposes, or may impose at our sole discretion an unreasonable or disproportionately large load on our infrastructure;" }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "uploading invalid data, viruses, worms, or other software agents through the Site or the Services;" }) }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "collecting or harvesting any personally identifiable information, including account names, from the Site or the Services;" }) }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "using the Site or the Services for any commercial solicitation purposes;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "interfering with the proper working of the Site or the Services;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", { children: "accessing any content on the Site or the Services through any technology or means other than those provided or authorized by the Site or the Services;" }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "bypassing the measures we may use to prevent or restrict access to the Site or the Services, including without limitation features that prevent or restrict use or copying of any content or enforce limitations on use of the Site or the content therein;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "using the Site or the Services for any purpose prohibited or regulated by Applicable Laws;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", { children: "violate any Applicable Laws including, without limitation, any applicable anti-money laundering and anti-terrorist financing laws and sanctions programs;" }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "use or access the Site or Services to transmit or exchange Digital Assets that are the direct or indirect proceeds of any criminal or fraudulent activity, including without limitation terrorism or tax evasion;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "using the Site or the Services to mint, issue, collect, upload, transmit, display, or distribute any content or tokens: (1) that violates any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right; (2) that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual or is otherwise objectionable; or (3) that is harmful to minors in any way;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "engage in any attack, hack, Sybil attack, DoS attack, distributed denial-of-service of attack, “griefing” attacks, interference, or any other type of exploit or unfair misuse of the Services or any related smart contracts;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "engage in improper or abusive trading practices, including (1) any fraudulent act or scheme to defraud, deceive, trick or mislead; (2) trading ahead of another user of the Services or front-running; (3) fraudulent trading; (4) accommodation trading; (5) fictitious transactions; (6) pre-arranged or non-competitive transactions; (7) violations of bids or offers; (8) spoofing; (9) manipulation; (10) knowingly making any bid or offer for the purpose of making a market price that does not reflect the true state of the market; or (11) entering orders for the purpose of entering into transactions without a net change in either party’s open positions but a resulting profit to one party and a loss to the other party, commonly known as a “money pass”; or (12) any other trading activity that, we have, in our sole discretion, determined to be abusive, improper or disruptive to the operation of the Services; or",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "using the Site or the Platform for any purposes other than using our Services." }) }),
                            ],
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "We may, without prior notice, change the Site or the Services; stop providing the Site or the Services or features of the Site or the Services to you or to users generally; or create usage limits for the Site or the Services. We may permanently or temporarily terminate or suspend your access to the Site or the Services without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or the Services or any part thereof.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You are solely responsible for your interactions with other users of the Site and the Services. We reserve the right, but have no obligation, to monitor disputes between you and other users. We shall have no liability for your interactions with other users, or for any user’s action or inaction.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Restrictions on Use" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "We make no representations that the Site or the Services are appropriate or available for use in any location. Those who access or use the Site or the Services do so at their own volition and are entirely responsible for compliance with all Applicable Laws, including but not limited to export and import regulations.",
                                    }),
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "You may not use the Site or the Services if you are a person or entity resident in, a citizen of, located in, incorporated, formed or organized in or have a registered office in Iran, Cuba, North Korea, Syria, Myanmar (Burma), the regions of Crimea, Donetsk or Luhansk or any other country, region, territory or jurisdiction which has been sanctioned or embargoed by the United States, the United Kingdom or the European Union, the United Nations, North Atlantic Treaty Organisation, Organisation for Economic Cooperation and Development, Financial Action Task Force, or any other applicable Governmental Authority (any such country, region, territory or jurisdiction being a “",
                                        }),
                                        (0, r.jsx)("span", { children: "Restricted Territory" }),
                                        (0, r.jsx)("span", {
                                            children: "” and any such person or entity resident in, a citizen of, located in, incorporated, formed or organized in or having a registered office in such Restricted Territory being a “",
                                        }),
                                        (0, r.jsx)("span", { children: "Restricted Person" }),
                                        (0, r.jsx)("span", { children: "”). " }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "You may not use the Site or the Services if you are a person or entity subject to sanctions administered or enforced by any applicable Governmental Authority or otherwise designated on any list of prohibited or restricted parties by any applicable Governmental Authority, including without limitation the Office of Foreign Assets Control of the United States Department of the Treasury (a “",
                                        }),
                                        (0, r.jsx)("span", { children: "Sanctioned Person" }),
                                        (0, r.jsx)("span", { children: "”)." }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "You may not use the Site or the Services if you are a person or entity resident in, a citizen of, located in, incorporated, formed or organized in or have a registered office in the United States (a “",
                                        }),
                                        (0, r.jsx)("span", { children: "Blocked Person" }),
                                        (0, r.jsx)("span", { children: "”)." }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Our Proprietary Rights" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "You acknowledge that the Site, the Platform and the Services may use, incorporate or link to certain open-source components and that your use of the Site or Services is subject to, and you will comply with, any applicable open-source licenses that govern any such open-source components (collectively, “",
                                        }),
                                        (0, r.jsx)("span", { children: "Open-Source Licenses" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”). Without limiting the generality of the foregoing, you may not (A) resell, lease, lend, share, distribute, or otherwise permit any third party to use the Site or the Services; (B) use the Site or the Services for time-sharing or service bureau purposes; or (C) otherwise use the Site or the Services in a manner that violates any Open-Source Licenses.",
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "The Site, the Platform and the Services and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos and music and all intellectual property rights related thereto (the “",
                                        }),
                                        (0, r.jsx)("span", { children: "Foundation Content" }),
                                        (0, r.jsx)("span", { children: "”) but excluding all material, content or information posted or upload by you or other users to the Site, the Platform or the Services (“" }),
                                        (0, r.jsx)("span", { children: "User Content" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”), are the exclusive property of us and our licensors. Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such Foundation Content or intellectual property rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Foundation Content. Use of the Foundation Content for any purpose not expressly permitted by this Agreement is strictly prohibited. Foundation Content is made available solely for your personal, non-commercial use and may not be copied, reproduced, published, republished, modified, mirrored, uploaded, posted, transmitted, displayed, encoded, translated or distributed in any form or in way, including by e-mail or other electronic means, or stored in any retrieval system of any nature in any way, without the express prior written consent of us or such third party that may own such Foundation Content in each instance. You agree to abide by all copyright and other proprietary notices, information and restrictions contained in the Foundation Content and any other material accessed through the Site.",
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "Any of our product or service names, logos, and other marks used on the Site or as a part of the Services, including our name and logo are trademarks owned by us, our affiliates, or our applicable licensors (collectively, the “",
                                        }),
                                        (0, r.jsx)("span", { children: "Trademarks" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”). You may not copy, imitate, or use them without our prior written consent or the applicable licensors, and notwithstanding to the contrary this Agreement does not grant you any rights in the Trademarks. You may not remove, obscure, or alter any legal notices displayed in or along with the Services.",
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "You may choose to, or we may invite you to submit comments, feedback, or ideas about the Site and the Services, including without limitation about how to improve the Site or our Services (“",
                                        }),
                                        (0, r.jsx)("span", { children: "Feedback" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”). By submitting any Feedback, you agree that (A) your disclosure is non-confidential, gratuitous, unsolicited and without restriction and will not place us under any fiduciary or other obligation, (B) you grant to us a perpetual, worldwide, royalty-free, irrevocable, transferable, sublicensable, non-exclusive and fully paid-up right to copy, use, reproduce, modify, adapt, publish, create derivative works from, translate, transmit, display, distribute, market, promote, sell or offer for sale, rent or lease such information or materials or any portions thereof (including any ideas for new products or Services or modifications to existing products or Services) and/or products or Services which practice or embody, or are configured for use in practicing, such information or materials or any portion thereof, in any form or medium known or later developed, in furtherance of the terms of the Agreement and the actions and transactions contemplated hereby, including the right to bring an action for infringement of these rights, (C) we are free to use the Feedback without any additional compensation to you, and/or to disclose the Feedback on a non-confidential basis or otherwise to anyone and (D) you will have no claim against for any actual or alleged infringement of any proprietary rights, rights of privacy or publicity, moral rights or rights of attribution in connection with our use of any Feedback you provide. You further acknowledge that, by acceptance of your submission, we do not waive any rights to use similar or related comments, feedback and ideas previously known to us, or developed by our employees, or obtained from sources other than you.",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Fees and Price Estimates" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "In connection with your use of the Services you are required to pay all fees necessary for interacting with the applicable blockchain, including “gas” costs, as well as all other fees reflected on the Site or the Platform at the time of your use of the Services. Although we attempt to provide accurate fee information, this information reflects an estimate of fees, which may vary from the actual fees paid to use the Services and interact with the applicable blockchain.",
                            }),
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Artificial Intelligence and Similar Technologies" }) }) }),
                        (0, r.jsxs)("p", {
                            children: [
                                (0, r.jsx)("span", {
                                    children:
                                        "We may, from time to time, use automated analysis, artificial intelligence, machine learning and related technologies to improve, create or maintain our Services, features, functionalities, information, data and/or Foundation Content (collectively, “",
                                }),
                                (0, r.jsx)("span", { children: "AI Services" }),
                                (0, r.jsx)("span", {
                                    children:
                                        "”) provided to you as part of or in connection with our Services. If you choose to use such AI Services, you acknowledge and agree that: (a) you are interacting with a non-human algorithm, even if such AI Services claim or appear to understand natural language queries and/or simulate realistic interactions; (b) not all requests or queries made by you will be accepted by or compatible with the AI Services and the AI Services may produce outputs that are inaccurate, inappropriate, not fit for use or which lack context; (c) you accept the sole risk of any misunderstandings, inaccuracies, and/or lack of context in the responses generated by your use of any AI Services; (d) we may, at times, process your requests more slowly, suspend or restrict access to the AI Services, without providing any reason for doing so; and (e) the AI Services may integrate, interact or interoperate with third party services and/or be fully or partially provided by third parties. You acknowledge and agree that we shall not be liable to you or any third party for your use of the AI Services.",
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "No Professional Advice or Fiduciary Duties" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "All information on the Site and the Services is for informational purposes only and should not be construed as professional advice. You should contact your own legal, financial, tax or other professional advisors. Neither the Site, the Services nor we provide any legal, financial, taxation or any other professional advice. No action should be taken based upon any information contained in the Site or the Services. You should seek independent professional advice from a person who is licensed and/or qualified in the applicable area. This Agreement is not intended to, and do not, create or impose any fiduciary duties on us. You further agree that the only duties and obligations that we owe you are those set out expressly in this Agreement.",
                            }),
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Privacy" }) }) }),
                        (0, r.jsxs)("p", {
                            children: [
                                (0, r.jsxs)("span", {
                                    children: [
                                        "We care about the privacy of our users. You understand that by using the Site you consent to the collection, use and disclosure of personally identifiable information and aggregate data, and to have your personally identifiable information collected, used, transferred to and processed in accordance with our Privacy Policy, a copy of which can be found here:",
                                        " ",
                                    ],
                                }),
                                (0, r.jsx)("span", {
                                    children: (0, r.jsx)("a", {
                                        href: "https://www.google.com/url?q=http://berachain.com/privacy-policy&sa=D&source=editors&ust=1738838776071738&usg=AOvVaw3poiJccqc4T3PwJ1_ORsZH",
                                        children: "http://berachain.com/privacy-policy",
                                    }),
                                }),
                                (0, r.jsx)("span", { children: ". Our Privacy Policy is hereby incorporated into and forms part of this Agreement." }),
                            ],
                        }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", { children: "Please note that, while using the Services, you are acting on public blockchains and your activities are transparent, allowing anyone to view your transactions." }),
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Cautionary Note on Forward-looking Statements" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "All statements contained in the Foundation Content, the Services, the Site, statements made in press releases or in any place accessible by the public and oral statements that may be made by the Company Parties (as defined below) may constitute forward-looking statements (including statements regarding the intent, belief or current expectations with respect to market conditions, business strategy and plans, financial condition, specific provisions and risk management practices). You are cautioned not to place undue reliance on these forward-looking statements given that these statements involve known and unknown risks, uncertainties and other factors that may cause the actual future results to be materially different from that described by such forward-looking statements, and no independent third party has reviewed the reasonableness of any such statements or assumptions. These forward-looking statements are applicable only as of the date indicated therein and the Company Parties disclaim any responsibility (whether express or implied) to release any revisions to these forward-looking statements to reflect events after such date.",
                            }),
                        }),
                        (0, r.jsx)("ol", { children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Security" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "We are an early stage platform. You acknowledge that applications are code that are subject to flaws and acknowledge that you are solely responsible for evaluating any available code provided by the Services. You further expressly acknowledge and represent that applications can be written maliciously or negligently, and that we cannot be held liable for your interaction with such applications. These warnings and others later provided by us in no way evidence or represent an ongoing duty to alert you to all the potential risks of utilizing the Site and Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "We use commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your personal information and implement your privacy settings. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "10", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Third-Party Links and Information" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "The Site or the Services may contain links to third-party materials that are not owned or controlled by us. we do not endorse or assume any responsibility for any such third-party websites, information, materials, products, or services. If you access a third-party website or service from the Site or the Services on or through any third-party website or service, you do so at your own risk, and you understand that this Agreement and our Privacy Policy do not apply to your use of such websites. You expressly relieve us from any and all liability arising from your use of any third-party website, service, or content. Additionally, your dealings with or participation in promotions of advertisers found on the Site or the Services, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertisers. You agree that we shall not be responsible for any loss or damage of any sort relating to your dealings with such advertisers.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "11", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Indemnity" }) }) }),
                        (0, r.jsxs)("p", {
                            id: "h.gjdgxs",
                            children: [
                                (0, r.jsx)("span", {
                                    children:
                                        "You agree to defend, indemnify and hold harmless us, our affiliates, and each of our and their respective shareholders, members, directors, officers, managers, employees, lawyers, agents, accountants, advisors, representatives, suppliers, licensors, dealers and contractors (collectively, the “",
                                }),
                                (0, r.jsx)("span", { children: "Company Parties" }),
                                (0, r.jsx)("span", {
                                    children:
                                        "”), from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to lawyer’s fees and disbursements) arising from: (a) your use of and access to the Site, the Platform, Foundation Content and the Services, including without limitation minting, selling and transferring Digital Assets and any act or omission by you or users of your account or any data or content transmitted or received by you; (b) your violation of any term of this Agreement, including without limitation your breach of any of the representations and warranties above; (c) your violation of any third-party right, including without limitation any right of privacy or intellectual property rights; (d) your violation of any Applicable Laws; (e) any User Content that you submit to the Site or the Services including without limitation misleading, false, or inaccurate information; (f) your willful misconduct; or (g) any other party’s access and use of the Site, the Platform, Foundation Content or the Services with your unique username, password or other appropriate security code. You will co-operate as fully as reasonably required in the defense of any claim.",
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "12", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "No Warranty" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "The Site and the Services are provided on an “as is” and “as available” basis. Use of the Site, the Platform, Foundation Content and the Services is at your own risk. To the maximum extent permitted by applicable law, the Site, the Platform, Foundation Content and the Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. No advice or information, whether oral or written, obtained by you from a Company Party or through the Site or the Services will create any warranty not expressly stated herein. Without limiting the foregoing, the Company Parties do not warrant that the Foundation Content is accurate, reliable or correct; that the Site, the Platform, Foundation Content and the Services will meet your requirements; that the Site, the Platform, Foundation Content and the Services will be available at any particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the Site, the Platform, Foundation Content and the Services are free of viruses or other harmful components. Any content downloaded or otherwise obtained through the use of the Site or the Services is downloaded at your own risk and you will be solely responsible for any damage to your computer system or mobile device or loss of data that results from such download or your use of the Site, the Platform, Foundation Content or the Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You acknowledge and agree that: (i) we are a developer of software; (ii) we do not operate a Digital Asset or derivatives exchange platform or offer trade execution or clearing services and have no oversight, involvement, or control concerning your transactions using the Services; (iii) we do not own or control the underlying software protocols that used in connection with the Services; (iv) we are not responsible for the operation of the underlying protocols used in connection with the Services, and we make no guarantee of their functionality, security, or availability; and (v) all transactions between users are executed peer-to-peer directly between the users’ digital wallet addresses through a smart contract.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You understand and agree that we are not registered or licensed by any regulatory agency or authority. No such agency or authority has reviewed or approved the use of the Site, the Platform or the Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "We do not warrant, endorse, guarantee, or assume responsibility for any product or websites advertised or offered by a third party through the Site or the Services or any hyperlinked websites, and we will not be a party to or in any way monitor any transaction between you and third-party providers of products or services.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "13", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Disclaimers" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "None of the Company Parties will have any responsibilities or liability with respect to the following: (a) the Services could be impacted by one or more regulatory inquiries or actions, which could prevent or limit our ability to continue to develop or provide the Services, or for you and your users to use the Services, (b) we have no obligation to update the Services or its underlying platforms and networks to address, mitigate, or remediate any security or other vulnerabilities in the Services, or such platforms or networks and (c) portions of the Services or any other underlying networks and platforms may rest on open-source software, and there is a risk that weaknesses or bugs that may be introduced in the infrastructural elements of the Services or any other underlying networks and platforms, which may result in security vulnerabilities, data loss, damage, destructions, disclosure, or other compromises.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "14", children: (0, r.jsx)("li", { id: "h.30j0zll", children: (0, r.jsx)("span", { children: "Assumption of Risk" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "You acknowledge that the Site and the Services, and your use of the Site and the Services contain certain risks, including without limitation the risks below, and accordingly, you expressly agree that you assume all risk in connection with your access and use of the Site and Services:",
                            }),
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "by utilizing the Services or interacting with the Site or the Platform in any way, you understand and agree to the inherent risks associated with: (i) cryptographic systems and blockchain-based networks; (ii) Digital Assets, including without limitation the usage and intricacies of native Digital Assets; (iii) smart contract-based Digital Assets, including fungible and non-fungible tokens; and (iv) systems that interact with blockchain-based networks. We do not own or control any of the underlying software through which blockchain networks are formed. In general, the software underlying blockchain networks is open source, such that anyone can use, copy, modify, and distribute it. By using the Services, you acknowledge and agree that (A) we are not responsible for the operation of the blockchain-based software and networks underlying the Services, (B) there exists no guarantee of the functionality, security, or availability of that software and networks, and (C) the underlying blockchain-based networks are subject to sudden changes in operating rules, such as those commonly referred to as “forks,” which may materially affect the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "blockchain networks use public and private key cryptography. You alone are responsible for securing your private key(s). We do not have access to your private key(s). Losing control of your private key(s) will permanently and irreversibly deny you access to Digital Assets on the applicable blockchain-based network. Neither we nor any other person or entity will be able to retrieve or protect your Digital Assets. If your private key(s) are lost, then you will not be able to transfer your Digital Assets to any other blockchain address or wallet. If this occurs, then you will not be able to realize any value or utility from the Digital Assets that you may hold;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "the Services and your Digital Assets could be impacted by one or more regulatory inquiries or regulatory actions, which could impede or limit our ability to continue to make available our proprietary software and could impede or limit your ability to access or use the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptographic systems and the Services, which could result in the theft or loss of your assets. To the extent possible, we intend to update or propose updates to the code underlying the Services to account for any advances in cryptography and to incorporate additional security measures but does not guarantee or otherwise represent full security of the system. By using the Services, you acknowledge these inherent risks;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "the blockchain and any other applicable blockchains on which the Protocol operates remains under development, which creates technological and security risks when using the Services in addition to uncertainty relating to Digital Assets and transactions therein. You acknowledge that the cost of transacting on an applicable blockchain is variable and may increase at any time causing impact to any activities taking place on such blockchain, which may result in price fluctuations or increased costs when using the Services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "the Services are subject to flaws and that you are solely responsible for evaluating any code provided by the Services, the Site or the Platform. This warning and other warnings that we provide in this Agreement are in no way evidence or represent an on-going duty to alert you to all of the potential risks of utilizing the Services or accessing the Site or the Platform;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "although we intend to provide accurate and timely information and data on the Site and the Platform during your use of the Services, the Site, the Platform and other information available when using the Services may not always be entirely accurate, complete, or current and may also include technical inaccuracies or typographical errors. To continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including information regarding our policies. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Site, the Platform or as part of the Services are your sole responsibility. No representation is made as to the accuracy, completeness, or appropriateness for any particular purpose of any pricing information distributed via the Site or the Platform or otherwise when using the Services. Prices and pricing information may be higher or lower than prices available on platforms providing similar services;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "any use or interaction with the Services requires a comprehensive understanding of applied cryptography and computer science to appreciate the inherent risks, including those listed above. You represent and warrant that you possess relevant knowledge and skills. Any reference to a type of Digital Asset on the Site, the Platform or otherwise during the use of the Services does not indicate our approval or disapproval of the technology on which the Digital Asset relies, and should not be used as a substitute for your understanding of the risks specific to each type of Digital Asset;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "use of the Services, in particular for trading Digital Assets, may carry financial risk. Digital Assets are, by their nature, highly experimental, risky, and volatile. Transactions entered into in connection with the Services are irreversible, final and there are no refunds. You acknowledge and agree that you will access and use the Site, the Platform and the Services at your own risk. The risk of loss in trading or transferring Digital Assets can be substantial. You should, therefore, carefully consider whether such trading or transfer is suitable for you in light of your circumstances and financial resources. By using the Services, you represent and warrant that you have been, are, and will be solely responsible for making your independent appraisal and investigations into the risks of a given transaction and the underlying Digital Assets. You represent that you have sufficient knowledge, market sophistication, professional advice, and experience to make your evaluation of the merits and risks of any transaction conducted in connection with the Services or any Digital Asset. You accept all consequences of using the Services, including the risk that you may lose access to your Digital Assets indefinitely. All transaction decisions are made solely by you. Notwithstanding anything in this Agreement, we accept no responsibility whatsoever for, and will in no circumstances be liable to you in connection with, your use of the Services for performing Digital Asset transactions;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "we must comply with Applicable Laws, which may require us to, upon request by government agencies, take certain actions or provide information, which may not be in your best interests;",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "you are responsible for all trades you place, including any erroneous orders that may be filled. We do not take any action to resolve erroneous trades that result from your errors;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "any Services you interact with are entirely your own responsibility and liability, and we are not a party to the Protocol;" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "at any time, your access to your Digital Assets may be suspended or terminated or there may be a delay in your access or use of your Digital Assets which may result in the Digital Assets diminishing in value;",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "the Services may be suspended or terminated for any or no reason, which may limit your access to your Digital Assets; and" }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "we will have no responsibility or liability for the risks set forth in this Section 14. You hereby irrevocably waive, release and discharge all claims, whether known or unknown to you, against the Company Parties related to any of the risks set forth in this Section 14.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "15", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Limitation of Liability" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    id: "h.1fob9te",
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You agree that to the maximum extent permitted by Applicable Laws, in no event shall any Company Party be liable for any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the Site, the Platform, Foundation Content or the Services. Under no circumstances will any Company Party be responsible for any damage, loss or injury resulting from hacking, tampering or other unauthorized access or use of the Site, the Platform, the Services or the Foundation Content and other information contained therein. To the maximum extent permitted by Applicable Laws, we assume no liability or responsibility for any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our Site, the Platform, Foundation Content or the Services; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information stored therein; (iv) any interruption or cessation of transmission to or from the Site, the Platform or the Services; (v) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Site, the Platform, Foundation Content or the Services by any third party; (vi) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Site, the Platform or the Services; and/or (vii) User Content or the defamatory, offensive, or illegal conduct of any third party. You agree that if, notwithstanding the other provisions of this Agreement, a Company Party is found to be liable for any claims, proceedings, liabilities, obligations, damages, losses or costs, such Company Party’s liability shall in no event exceed the greater of (A) US$100 and (B) the amount you paid to us hereunder during the one-month period prior to the date on which such claim arose, if any.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage. The foregoing limitation of liability shall apply to the fullest extent permitted by Applicable Laws.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "16", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Limitations as Allowed by Law" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "Some states, provinces and other jurisdictions do not allow the exclusion and limitations of certain implied warranties, or the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you. This Agreement gives you specific legal rights, and you may also have other rights which vary from jurisdiction to jurisdiction. The disclaimers, exclusions, and limitations of liability under this agreement will not apply to the extent prohibited by Applicable Laws.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "17", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Force Majeure" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "We will have no responsibility or liability for any failure or delay in performance of the Site, the Platform or any of the Services, or any loss or damage that you may incur, due to any circumstance or event beyond our control, including any (a) flood, extraordinary weather conditions, earthquake, or other act of God, (b) fire, (c) war, (d) insurrection, (e) riot, (f) labour dispute, (g) accident, (h) epidemic or pandemic, (i) action of government, (j) new laws or regulations or change in existing laws or regulations or the interpretation or enforcement of any of the foregoing, (k) communications, (l) power failure, (m) equipment or software unavailability, disruption or malfunction, (n) hacking or other attack on the Site, the Platform or the Services, (o) the unavailability, disruption or malfunction of any network or blockchains or (p) the unavailability, disruption or malfunction of the Internet.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "18", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Non-Waiver" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "Our failure or delay in insisting upon or enforcing strict performance of any provision of this Agreement shall not be construed as a waiver of any provision or rights. No waiver of any provision of this Agreement shall constitute a waiver of any other provision, nor shall any waiver of any provision of this Agreement constitute a continuing waiver unless expressly made in writing by us.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "19", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Severability" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "In the event that any of the provisions of this Agreement are held by a court or other tribunal of competent jurisdiction to be unenforceable, such provisions shall be limited or eliminated to the minimum extent necessary so that these terms and conditions shall otherwise remain in full force and effect.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "20", children: (0, r.jsx)("li", { id: "h.3znysh7", children: (0, r.jsx)("span", { children: "Governing Law and Jurisdiction" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "This Agreement is entered into in the British Virgin Islands and shall be governed by, and construed in accordance with, the laws of the British Virgin Islands. You agree that we may initiate a proceeding related to the enforcement or validity of our intellectual property rights in any court having jurisdiction. For any other proceeding that is not subject to arbitration under this Agreement, the courts located in Road Town, Tortola, British Virgin Islands will have exclusive jurisdiction. You waive any objection to venue in any such courts.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "21", children: (0, r.jsx)("li", { id: "h.2et92p0", children: (0, r.jsx)("span", { children: "Dispute Resolution and Arbitration" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "PLEASE READ THE FOLLOWING SECTION CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH US AND LIMITS HOW YOU CAN SEEK RELIEF FROM US. ALSO, ARBITRATION PRECLUDES YOU FROM SUING IN COURT OR HAVING A JURY TRIAL.",
                            }),
                        }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You and we agree that subject to Section 20 above, any dispute arising out of or related to this Agreement, the Site or the Services is personal to you and us and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class action, or any other type of representative proceeding.",
                                    }),
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", {
                                            children:
                                                "Except for disputes in which you or we seek injunctive or other equitable relief for the alleged unlawful use of intellectual property, you and we waive all rights to a jury trial and to have any dispute arising out of or related to this Agreement or the Services resolved in court. Instead, for any dispute or claim that you have against us or relating in any way to the Site or the Services, you agree to first contact us and attempt to resolve the claim informally by sending a written notice of your claim (“",
                                        }),
                                        (0, r.jsx)("span", { children: "Notice" }),
                                        (0, r.jsx)("span", { children: "”) to " }),
                                        (0, r.jsx)("span", { children: (0, r.jsx)("a", { href: "mailto:legal@berachain.com", children: "legal@berachain.com" }) }),
                                        (0, r.jsx)("span", { children: "." }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "The Notice must: (i) include your name, residence address, email address, and telephone number; (ii) describe the nature and basis of the claim; and (iii) set forth the specific relief sought. Our notice to you will be similar in form to that described above. If you and we cannot reach an agreement to resolve the claim within thirty (30) days after such Notice is received, then either party may submit the dispute to binding arbitration administered by the British Virgin Islands International Arbitration Centre (the “",
                                        }),
                                        (0, r.jsx)("span", { children: "BVI IAC" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”) or, under the limited circumstances set forth above, in court. All disputes submitted to the BVI IAC will be resolved through confidential, binding arbitration before one arbitrator (the “",
                                        }),
                                        (0, r.jsx)("span", { children: "Arbitrator" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”). The place of arbitration shall be Road Town, Tortola, British Virgin Islands, unless the parties mutually agree otherwise and shall be conducted under the BVI IAC Arbitration Rules. The language to be used in the arbitral proceedings shall be English. The most recent version of the BVI IAC Arbitration Rules is available on the BVI IAC website and are hereby incorporated by reference. You either acknowledge and agree that you have read and understand the BVI IAC Arbitration Rules or waive your opportunity to read the BVI IAC Arbitration Rules and waive any claim that the BVI IAC Arbitration Rules are unfair or should not apply for any reason.",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "The Arbitrator will have exclusive authority to make all procedural and substantive decisions regarding any dispute and to grant any remedy that would otherwise be available in court, including the power to determine the question of arbitrability. The Arbitrator may conduct only an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "The Arbitrator, we and you will maintain the confidentiality of any arbitration proceedings, judgments and awards, including, but not limited to, all information gathered, prepared, and presented for purposes of the arbitration or related to the dispute(s) therein. The Arbitrator will have the authority to make appropriate rulings to safeguard confidentiality unless the law provides to the contrary. The duty of confidentiality does not apply to the extent that disclosure is necessary to prepare for or conduct the arbitration hearing on the merits, in connection with a court application for a preliminary remedy or in connection with a judicial challenge to an arbitration award or its enforcement, or to the extent that disclosure is otherwise required by law or judicial decision.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You and we agree that for any arbitration you initiate, you will pay the filing fee and all other BVI IAC fees and costs. For any arbitration initiated by us, we will pay the filing fee and all other BVI IAC fees and costs. You and we agree that the courts of the British Virgin Islands sitting in Road Town, Tortola, British Virgin Islands have exclusive jurisdiction over the enforcement of an arbitration award.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You further agree as follows: (i) any claim brought by you arising out of or related to this Agreement or the Services must be filed within one year after such claim arose; otherwise, the claim is permanently barred, which means that you will not have the right to assert the claim; (ii) no recovery by you may be sought or received for damages other than out-of-pocket expenses, except that the prevailing party will be entitled to costs and legal fees; and (iii) any claim must be brought by you individually and not consolidated as part of a group or class action complaint.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "If any portion of this Section 21 is found to be unenforceable or unlawful for any reason: (i) the unenforceable or unlawful provision shall be severed from this Agreement; (ii) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of this Section 21 or the parties’ ability to compel arbitration of any remaining claims on an individual basis under this Section 21; and (iii) to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration. Further, if any part of this Section 21 is found to prohibit an individual claim seeking injunctive relief, then that provision will have no effect to the extent such relief is allowed to be sought out of arbitration, and the remainder of this Section 21 will be enforceable.",
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ol", { start: "22", children: (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Amendments" }) }) }),
                        (0, r.jsx)("p", {
                            children: (0, r.jsx)("span", {
                                children:
                                    "We reserve the right, in our sole discretion, to modify the terms of this Agreement from time to time. If we make changes, we will provide you with notice of such changes, such as by providing notice through the Site, the Services or updating the “Last Updated” date at the top of this Agreement. Unless we state otherwise in our notice, all such modifications are effective immediately, and your continued use of the Site and the Services after we provide that notice will confirm your acceptance of the changes. If you do not agree to the amended terms of this Agreement, then your only recourse is to terminate this Agreement by providing written notice to us and must stop using the Site and the Services.",
                            }),
                        }),
                        (0, r.jsx)("ol", { start: "23", children: (0, r.jsx)("li", { id: "h.tyjcwt", children: (0, r.jsx)("span", { children: "General" }) }) }),
                        (0, r.jsxs)("ol", {
                            children: [
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsx)("span", { children: "You consent to receive all communications, agreements, documents, receipts, notices, and disclosures electronically (collectively, our “" }),
                                        (0, r.jsx)("span", { children: "Communications" }),
                                        (0, r.jsx)("span", {
                                            children:
                                                "”) that we provide in connection with this Agreement, the Site or any Services. You agree that we may provide our Communications to you by posting them on the Site or by emailing them to you at the email address you provide in connection with using the Services, if any.",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "Any right or remedy of any Company Party set forth in this Agreement is in addition to, and not in lieu of, any other right or remedy whether described in this Agreement or under Applicable Laws, whether at law or in equity. The failure or delay of such Indemnified Party in exercising any right, power, or privilege under this Agreement shall not operate as a waiver thereof.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "The invalidity or unenforceability of any provision of this Agreement shall not affect the validity or enforceability of any other provision of this Agreement, all of which shall remain in full force and effect.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "You agree that you may not assign or transfer any right to use the Site or the Services, or any of your rights or obligations under this Agreement, without our express prior written consent, including by operation of law or in connection with any change of control, which may be withheld at our sole discretion. We may assign or transfer any or all of our rights or obligations under this Agreement, in whole or in part, without notice or obtaining your consent or approval.",
                                    }),
                                }),
                                (0, r.jsx)("li", { children: (0, r.jsx)("span", { children: "Headings of sections are for convenience only and shall not be used to limit or construe such sections." }) }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "This Agreement contains the entire agreement between you and us and supersedes all prior and contemporaneous understandings between the parties regarding the Site and the Services.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children:
                                            "In the event of any conflict between this Agreement and any other agreement you may have with us, this Agreement will control unless the other agreement specifically identifies this Agreement and declares that the other agreement supersedes this Agreement.",
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)("span", {
                                        children: "You agree that, except as otherwise expressly provided in this Agreement, there shall be no third-party beneficiaries to the Agreement other than the Indemnified Parties.",
                                    }),
                                }),
                                (0, r.jsxs)("li", {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            children: [
                                                "This Agreement, including all other documents incorporated by reference herein, are binding and constitute the entire agreement between us and you with respect to your use of the Site and the Services. The parties agree that the English language will be the language of the Agreement and all documents in connection thereto, and each party waives any right (whether statutory or otherwise) to use and rely upon any other language, or translations.",
                                                " ",
                                            ],
                                        }),
                                        (0, r.jsx)("span", { children: "Il est de la volont\xe9 expresse des parties que tous les documents qui s'y rattachent soient r\xe9dig\xe9s en langue anglaise." }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", { children: [(0, r.jsx)("p", { children: (0, r.jsx)("span", {}) }), (0, r.jsx)("p", { children: (0, r.jsx)("span", {}) })] }),
                    ],
                });
            };
            var g = JSON.parse(
                '{"TN":"Privacy Policy","CI":"December 18, 2023","kQ":[{"content":["This Privacy Notice does not address our privacy practices relating to job applicants, employees and other personnel. This Privacy Notice is also not a contract and does not create any legal rights or obligations. "]},{"title":"OUR COLLECTION OF PERSONAL INFORMATION","content":["The Company is the controller of the personal information we collect or otherwise maintain in connection with our services. This means that we determine and are responsible for how personal information is used. ","The categories of personal information we collect depend on how you interact with us and our services. The Company collects information that individuals provide directly to us, information we collect automatically when individuals interact with us, and information we collect from third-party sources and other organizations."]},{"title":"Personal Information Individuals Provide Directly to Us","content":["We may collect the following personal information individuals provide directly to us in connection with our services:",["Contact Information, including name, email address, social media handles, and communication preferences;","Account Information, including username, profile pictures, profile description, general location, trust level, join date, and the products and services developed, used, or interacted with and any requests for feedback you provide in connection with your account, including requests for feedback on code you have developed;","Community information, including number of days visited, topics and posts created, topics viewed, posts read, time spent reading, likes given and received, badges, certifications, and community preferences;","Event, contest, promotion, and survey information, including contact information, preferences, feedback, and other relevant content provided when signing up for an event, entering a contest or promotion, or completing a survey; and","Inquiry information, including information provided in custom messages sent through our services or provided directly to a member of our team."],"When an individual chooses to contact us, we may need additional information to fulfill the request or respond to inquiries. We may provide additional privacy-related information where the scope of the inquiry/request and/or personal information we require fall outside the scope of this Privacy Notice. In that case, the additional privacy notice will govern how we may process the information provided at that time."]},{"title":"Personal Information Automatically Collected","content":["As is true of many digital platforms, we and our third-party providers may also collect certain personal information from an individual’s device, browsing actions, and site usage patterns automatically when visiting or interacting with our services, which may include:",["Log data, such as cookie identifiers, internet protocol (IP) address, mobile carrier, MAC address, user settings, mobile ad identifiers, Internet service provider, browser or device information, the URL entered and the referring page/campaign, date/time of visit, the time spent on our services, and any errors that may occur during the visit to our services;","Analytics data, such as the electronic path taken to our services, through our services, and when exiting our services, as well as information pertaining to usage and activity on our services (including pages visited, links clicked, content interacted with, and duration and frequency of the activities); and","Location data, such as general geographic location based on the log data we or our third-party providers collect."],"For information about our and our third-party providers’ use of cookies and related technologies to collect information automatically, and any choices individuals may have in relation to its collection, please review the Cookies and Related Technologies section below."]},{"title":"Personal Information from Third Parties and Other Sources","content":["We also obtain personal information from third-party sources, which we often combine with personal information we collect either automatically or directly from an individual.","We may receive the same categories of personal information as described above from the following third parties:",["Affiliates: We may receive personal information from other companies owned or controlled by the Company, and other companies owning or under common ownership with the Company, particularly when we collaborate in providing services.","Single Sign-On: Some parts of our services may allow community members to login through a third-party social network or authentication service such as Discord, Google, or Github. These services will authenticate the community member’s identity and provide them the option to share certain personal information with us, which could include name, email address, address book and contacts, or other information. The data we receive is dependent on that third party’s policies and the community member’s privacy settings on that third-party site. However, we do not receive the community member’s login credentials for the relevant third-party service. Instead, we receive tokens from the single sign-on service to help identify the community member in our system (such as by their username) and confirm the community member successfully authenticated with the single sign-on services. This information allows us to more easily provide community members access to our platform.","Social Media: If an individual chooses to interact with us on social media, we may collect personal information about them from their social media account that they make public. We use personal information collected in connection with their social media account to communicate with them, better understand their interests and preferences, and better understand our user base in the aggregate.","Identity Verification Providers: In rare circumstances, we may engage third-party identity verification providers to help us verify the identity of a specific individual with whom we are interacting. This information is used primarily for purposes of preventing fraud.","Event, Promotion and Other Business Partners: We may from time to time offer opportunities for individuals to take part in events or promotions, or obtain services provided in connection with a third-party business partner. Our event, promotion, and other business partners may collect or share personal information with us in connection with the relevant event, promotion or service. For example, we may receive personal information from third-party business partners that help foster the community in order to identify community members eligible for benefits in relation to a promotion.","Data Analytics Providers: We rely on third-party providers to help us collect analytics relating to our services and user base. These data analytics providers often collect personal information directly from individuals and share some or all of this information with us in connection with their analytics services.","Other Service Providers: Other service providers that perform services solely on our behalf, such as website hosting and marketing providers, collect personal information and often share some or all of this information with us in connection with their services.","Information Providers: We may from time to time obtain information from third-party information providers to correct or supplement personal information we collect. For example, we may obtain updated contact information from third-party information providers to connect with an individual who may be interested in our services.","Publicly Available Sources: We may collect personal information about individuals that we do not otherwise have, such as contact information or an individual’s interest in our services, from publicly available sources. We may combine this information with the information we collect from an individual directly.","Inferences: We may generate inferences or predictions about individuals and their interests and preferences based on the other personal information we collect and the interactions we have with the individuals."]]},{"title":"Our Collection of Blockchain Information","content":["Blockchain is a shared, immutable ledger used to record transactions of assets. In connection with our services, we may collect the following blockchain information directly from individuals, from the third parties identified above, or from the public blockchain itself (including the Berachain blockchain):",["Account Address: The unique blockchain address or domain from or to which assets are transferred;","Wallet Information: The wallet connected to a specific account address;","Account Balance and Assets: The balance associated with the blockchain address, as well as the assets stored in connection with that account;","Transaction Details: The transaction identifier, blockchain position for the transaction, date and time of the transaction, type of transaction, amount sent or received, fee amount, account address of the sender and recipient, and storage size of the transaction;","Connected Apps: The name of the apps to which an individual connects using our blockchain services."],"We may in certain circumstances combine the blockchain information we obtain with the personal information described above."]},{"title":"OUR USE OF PERSONAL INFORMATION AND BLOCKCHAIN INFORMATION","content":["We use the information we collect to:",["Manage our organization and its day-to-day operations;","Administer, provide, maintain, improve, and personalize our products and services;","Improve and support the community;","Facilitate identity and transaction management services at your request;","Process or otherwise facilitate transactions and send you related information, including confirmations, receipts, invoices, customer experience surveys, and recall notices;","Personalize and improve your experience on our services;","Send you technical notices, security alerts, and support and administrative messages;","Respond to your comments and questions and provide customer service;","Communicate with you about products, services, and events offered by the Company and others and provide news and information that we think will interest you;","Tailor and provide you with content and advertisements, including through in-person events, social media, email, and other online venues, based on individual interests and interactions with us;","Monitor and analyze trends, usage, and activities in connection with our services;","Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards;","Test, enhance, update, and monitor the services, or diagnose or fix technology problems;","Help maintain the safety, security, and integrity of our property and services, technology assets, and business;","Detect, prevent, investigate, or provide notice of security incidents or other malicious, deceptive, fraudulent, or illegal activity and protect the rights and property of The Company and others;","Debug to identify and repair errors in our services;","Facilitate business transactions and reorganizations impacting the structure of our business;","Defend, protect, or enforce our rights or applicable contracts and agreements;","Comply with our legal and financial obligations;","Carry out any other purpose described to you at the time the information was collected."]]},{"title":"OUR DISCLOSURE OF PERSONAL INFORMATION AND BLOCKCHAIN INFORMATION","content":["We disclose the information we collect to:",["Affiliates: We share information with other companies owned or controlled by the Company, and other companies owning or under common ownership with the Company, particularly when we collaborate in providing services.","Identity Verification Providers: Where we engage a third-party identity verification provider to help us verify the identity of a specific individual with whom we are interacting, we will typically provide the third-party identity verification provider sufficient information to facilitate the identity verification service.","Event, Promotion and Other Business Partners: Just as we may receive information from our event, promotion and other business partners, we may share information with them in connection with the relevant event, promotion or service we are offering.","Data Analytics Providers: We may share information with our data analytics providers to facilitate the analytics services they are providing us.","Other Service Providers: In addition to the third parties identified above, we engage other third-party service providers that perform business or operational services for us or on our behalf, such as web hosting, shipping and delivery, payment processing, fraud prevention, customer service, contests, sweepstakes, promotions, and marketing and advertising service. Depending on the function the provider serves, the service provider may process information on our behalf or have access to information while performing functions on our behalf.","Business Transaction or Reorganization: We may share or otherwise disclose personal information or blockchain information to a third-party during negotiations concerning, in connection with, or as an asset in a merger, sale or other transfer of company assets, joint venture, financing, or acquisition of all or a portion of our business by another company. Personal information or blockchain information may also be disclosed in the event of insolvency, bankruptcy, or receivership.","Legal Obligations and Rights: We share or otherwise disclose information to third parties, such as our lawyers, other professional advisors and law enforcement:",["Where necessary to obtain advice or otherwise protect and manage our business interests;","In connection with the establishment, exercise, or defense of legal claims;","To comply with laws or to respond to lawful requests or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements;","To protect our rights and property and the rights and property of others, including to enforce our agreements and policies;","To detect, suppress, or prevent fraud;","To protect the health and safety of us and others;","As otherwise required by applicable law."],"Otherwise with Consent or Direction: We may share or otherwise disclose information with your consent or at your direction. We may also share community content with your intended recipients or make information available to the public blockchain to facilitate proper recording of activities relating to your blockchain wallet. We also share aggregated or de-identified information that cannot reasonably be used to identify you."]]},{"title":"Cookies and Related Technologies","content":["We engage third parties to provide us with analytics and other services across the web and in mobile apps. We and our third-party providers may use (i) cookies or small data files that are stored on an individual’s computer and (ii) other, similar technologies, such as web beacons, pixels, embedded scripts, location-identifying technologies and logging technologies (collectively, “cookies”) to automatically collect personal information and use or disclose the personal information for the purposes described in the sections above, including to analyze and track data, determine the popularity of certain content, and better understand each user’s online activity.","If an individual would prefer not to accept cookies, most browsers will allow the individual to: (i) change the individual’s browser settings to notify the individual when the individual receives a cookie, which lets the individual choose whether to accept it; (ii) disable existing cookies; or (iii) set the individual’s browser to automatically reject cookies. Please note that doing so may negatively impact the individual’s experience using our website, as some features and offerings may not work properly or at all. Depending on the individual’s device and operating system, the individual may not be able to delete or block all cookies. In addition, if the individual wants to reject cookies across all browsers and devices, the individual will need to do so on each browser on each device the individual actively uses.","The individual may also set their email options to prevent the automatic downloading of images that may contain technologies that would allow us to know whether they have accessed our email and performed certain functions with it."]},{"title":"CHILDREN’S PERSONAL INFORMATION","content":["Our services are not directed to, and we do not intend to, or knowingly, collect or solicit personal information from children under the age of 13. If an individual is under the age of 13, they should not use our services or otherwise provide us with any personal information either directly or by other means. If a child under the age of 13 has provided personal information to us, we encourage the child’s parent or guardian to contact us to request that we remove the personal information from our systems. If we learn that any personal information we collect has been provided by a child under the age of 13, we will promptly delete that personal information."]},{"title":"LINKS TO THIRD-PARTY WEBSITE OR SERVICE","content":["Our services may include links to third-party websites, plug-ins, and applications. Except where we post, link to, or expressly adopt or refer to this Privacy Notice, this Privacy Notice does not apply to, and we are not responsible for, any personal information practices of third-party websites and online services or the practices of other third parties. To learn about the personal information practices of third parties, please visit their respective privacy notices."]},{"title":"UPDATES TO THIS PRIVACY NOTICE","content":["We may change this Privacy Notice from time to time. If we make changes, we will notify you by revising the date at the top of this notice and, if we make material changes, we may provide you with additional notice (such as adding a statement to our services or sending you a notification). We encourage you to review this Privacy Notice regularly to stay informed about our information practices and the choices available to you."]},{"title":"Contact Us","content":["If you have any questions or requests in connection with this Privacy Notice or other privacy-related matters, please send an email to: founders@berachain.com."]},{"title":"ADDITIONAL PRIVACY DISCLOSURES"},{"title":"Residents of the European Economic Area","content":["If you are a resident of the European Economic Area (“EEA”), you have certain rights and protections under the law regarding the processing of your personal data. Any reference to Personal Information in this Privacy Policy should be understood as referring to “personal data”,  defined under the General Data Protection Regulation (“GDPR”) as “any information relating to an identified or identifiable natural person (“data subject”); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person”."]},{"title":"Legal Basis for Processing","Content":["If you are a resident of the EEA, when we process your personal data we will only do so in the following situations:",["with your consent;","to perform the Services you have requested from us or, upon your request, to take the steps necessary to provide you with such Services; or","in the furtherance of our legitimate interests in maintaining business relationships and communicating with you as a business contact, about our activities and Services and providing, securing and improving our Services."]]},{"title":"Data Subject Requests","content":["If you are a resident of the EEA, you have the right to access personal data we hold about you and to ask that your personal data be corrected, erased, or transferred. You may also have the right to object to, or request that we restrict, certain processing. If you would like to exercise any of these rights, you can contact us as indicated below. Please note that the limitation or deletion of your personal data may mean we will be unable to provide our Services. You also have the right to receive your personal data in a machine-readable format and have the data transferred to another party responsible for data processing."]},{"title":"Questions or Complaints","content":["If you are a resident of the EEA and have a concern about our processing of personal data that we are not able to resolve, you have the right to lodge a complaint with the data privacy authority where you reside. For contact details of your local Data Protection Authority, please see: http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm."]},{"title":"Residents of California","content":["California Civil Code Section \xa7 1798.83 permits users who are California residents to request certain information, including the categories of personal information disclosed to third parties for their marketing purposes and the names and addresses of those third parties, regarding our disclosure of personal information to third parties for their direct marketing purposes, if any. If you are a California resident and you have questions about our practices with respect to sharing information with third parties and affiliates for their direct marketing purposes, please contact us at founders@berachain.com. "]}]}'
            );
            let v = (e) => {
                    let { className: t } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, o.a)("flex flex-col gap-4 font-mikado", t),
                        children: [
                            (0, r.jsx)("div", { className: "text-left text-4xl sm:text-5xl font-bold", children: "Terms of Use" }),
                            (0, r.jsx)("p", { className: "text-xl font-bold", children: "Last updated: February 5, 2025" }),
                            (0, r.jsxs)("div", {
                                className: "text-lg font-bold",
                                children: [
                                    "NONE OF THE SITE OR THE SERVICES ARE OFFERED TO PERSONS OR ENTITIES WHO ARE BLOCKED PERSONS (AS DEFINED BELOW), SANCTIONED PERSONS (AS DEFINED BELOW) OR RESTRICTED PERSONS (AS DEFINED BELOW). USE OF A VIRTUAL PRIVATE NETWORK (",
                                    (0, r.jsx)("span", { className: "font-bold", children: "“VPN”" }),
                                    ") TO CIRCUMVENT THESE RESTRICTIONS IS PROHIBITED.",
                                ],
                            }),
                            (0, r.jsxs)("p", {
                                className: "text-lg",
                                children: [
                                    (0, r.jsx)("span", { children: "This page explains the terms by which you may use the Bera Chain Foundation’s website and its subdomains (collectively, the “" }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "Site" }),
                                    (0, r.jsx)("span", { children: "”), Foundation Content (as defined below) and the Services (as defined below) of Bera Chain Foundation (“" }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "we" }),
                                    (0, r.jsx)("span", { children: "”, “" }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "our" }),
                                    (0, r.jsx)("span", { children: "” and “" }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "us" }),
                                    (0, r.jsx)("span", {
                                        children:
                                            "”). By accessing or using the Site or the Services, you signify on your behalf and any person or entity that you represent that you have read, understood, and agree to be bound by these terms of service (the “",
                                    }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "Agreement" }),
                                    (0, r.jsx)("span", {
                                        children:
                                            "”), whether or not you are a registered user of our Site or the Services. We reserve the right to make unilateral modifications to these terms and will provide notice of these changes as described below. This Agreement applies to all visitors, users, and others who access the Site or the Services (“",
                                    }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "you" }),
                                    (0, r.jsx)("span", { children: "” and “" }),
                                    (0, r.jsx)("span", { className: "font-bold", children: "your" }),
                                    (0, r.jsx)("span", { children: "”)." }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: "text-lg",
                                children: [
                                    "If you are a business, company, association, project group, institution or other legal entity, you may permit Authorized Users to access and use the Services, provided: (a) they have agreed to the terms of, and shall remain in compliance with, this Agreement; and (b) you shall be liable for any acts or omissions of your Authorized Users.",
                                    " ",
                                    (0, r.jsx)("span", { className: "font-bold", children: "“Authorized User(s)”" }),
                                    "mean the following users that you authorize to access or use the Services on your behalf: (i) your employees, agents, or independent contractors; and (ii) other users expressly authorized to use and access the Services by us.",
                                ],
                            }),
                            (0, r.jsx)("div", { className: "text-lg", children: "Please read this Agreement carefully to ensure that you understand each provision." }),
                            (0, r.jsx)(y, { className: "text-lg" }),
                        ],
                    });
                },
                x = (e) => {
                    let { className: t } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, o.a)("flex flex-col gap-4", t),
                        children: [
                            (0, r.jsx)("div", { className: "font-mikado text-left text-4xl sm:text-5xl font-bold", children: g.TN }),
                            (0, r.jsxs)("div", { className: "font-mikado text-xl font-bold text-left", children: ["Last updated: ", g.CI] }),
                            (0, r.jsxs)("div", {
                                className: "text-md font-mikado",
                                children: [
                                    "This Privacy Notice explains how Berachain Corporation (the “",
                                    (0, r.jsx)("b", { children: "Company" }),
                                    "”, “",
                                    (0, r.jsx)("b", { children: "we”" }),
                                    ", “",
                                    (0, r.jsx)("b", { children: "our”" }),
                                    " or “",
                                    (0, r.jsx)("b", { children: "us”" }),
                                    ") collects, uses, and discloses personal information in connection with our websites, forums, blogs, web applications and other online products and services (collectively the “",
                                    (0, r.jsx)("b", { children: "services”" }),
                                    ").",
                                ],
                            }),
                            g.kQ.map((e, t) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: "flex flex-col gap-6 font-mikado",
                                        children: [
                                            e.title && (0, r.jsx)("div", { className: "text-left text-xl font-bold", children: e.title }),
                                            e.content &&
                                                (0, r.jsx)(r.Fragment, {
                                                    children: e.content.map((e, t) =>
                                                        (0, r.jsx)(r.Fragment, {
                                                            children:
                                                                "string" == typeof e
                                                                    ? (0, r.jsx)("div", { className: "text-sm font-mikado", children: e }, "".concat(t, "-privacy-subcontent"))
                                                                    : (0, r.jsx)("div", {
                                                                          className: "flex flex-col gap-2",
                                                                          children: e.map((e, t) => (0, r.jsx)("div", { className: "pl-4 text-sm font-mikado", children: e }, "".concat(t, "-privacy-subsubcontent"))),
                                                                      }),
                                                        })
                                                    ),
                                                }),
                                        ],
                                    },
                                    "".concat(t, "-privacy-content")
                                )
                            ),
                        ],
                    });
                },
                b = () => {
                    let [e, t] = (0, p._)("FIRST_TIME_USER", !0),
                        [i, o] = (0, n.useState)(!1),
                        [a, s] = (0, n.useState)(!1);
                    return (0, r.jsx)(m.Vq, {
                        open: e,
                        children: (0, r.jsxs)(m.cZ, {
                            hideClose: !0,
                            className: "h-screen overflow-y-hidden pb-6 focus:outline-none md:h-fit md:w-[calc(100vw-32px)] lg:w-[800px] lg:min-w-[800px]",
                            children: [
                                (0, r.jsx)(m.fK, { children: (0, r.jsx)(m.$N, { className: "mb-3 font-semibold", children: "Terms of Service" }) }),
                                (0, r.jsxs)("div", {
                                    className: "max-h-[100vh-200px)] flex flex-grow-0 flex-col gap-4 overflow-y-scroll sm:h-full sm:max-h-[600px]",
                                    children: [
                                        (0, r.jsx)("div", { className: "h-full max-h-[300px] flex-grow-0 overflow-y-scroll rounded-xl border border-border bg-muted p-4 pr-8", children: (0, r.jsx)(v, {}) }),
                                        (0, r.jsx)("div", { className: "h-full max-h-[300px] flex-grow-0 overflow-y-scroll rounded-xl border border-border bg-muted p-4 pr-8", children: (0, r.jsx)(x, {}) }),
                                        (0, r.jsxs)("div", {
                                            className: "text-xs leading-4 sm:text-sm sm:leading-6",
                                            children: [
                                                "By checking the box below and using our services, you acknowledge that you have read, understood, and agree to be bound by the",
                                                " ",
                                                (0, r.jsx)("a", { className: "font-bold underline", href: "terms-of-use", children: "terms and conditions" }),
                                                ', including any additional guidelines and future modifications (the "Terms of Service"). If you do not agree to these terms, please do not use our services.',
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                (0, r.jsx)(u.X, {
                                                    id: "terms",
                                                    className: "ml-1 mt-1.5",
                                                    checked: i,
                                                    onCheckedChange: (e) => {
                                                        o(e), e && s(!1);
                                                    },
                                                }),
                                                (0, r.jsx)("label", {
                                                    htmlFor: "terms",
                                                    className: "text-xs leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-sm sm:leading-6",
                                                    children:
                                                        "I have read, understood, and agree to be bound by the terms and conditions, including any additional guidelines and future modifications outlined in the Public Testnet Terms of Use.",
                                                }),
                                            ],
                                        }),
                                        a &&
                                            (0, r.jsxs)(l, {
                                                variant: "warning",
                                                children: [
                                                    (0, r.jsxs)(c, { children: [" ", (0, r.jsx)(f.P.info, { className: "inline-block h-4 w-4" }), " You Must Agree to Use Our Services"] }),
                                                    (0, r.jsx)(d, {
                                                        className: "text-xs",
                                                        children: "Looks like you selected “I Disagree”, unfortunately you won't be able to use our services unless you agree to our terms of use agreement.",
                                                    }),
                                                ],
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: "flex gap-4",
                                            children: [
                                                (0, r.jsx)(h.z, { disabled: !i, onClick: () => t(!1), className: "flex-1", children: "I AGREE" }),
                                                (0, r.jsx)(h.z, { onClick: () => s(!0), variant: "outline", className: "flex-1", children: "I DISAGREE" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
        },
        9396: function (e, t, i) {
            i.d(t, {
                ThemeToggle: function () {
                    return u;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(5866),
                a = i(963),
                s = i(9717),
                l = s.fC,
                c = n.forwardRef((e, t) => {
                    let { className: i, variant: n, ...o } = e;
                    return (0, r.jsx)(s.aV, { ref: t, className: (0, a.a)("inline-flex h-10 items-center justify-center gap-1 rounded-md p-1 text-muted-foreground", "ghost" === n ? "bg-transparent" : "bg-muted", i), ...o });
                });
            c.displayName = s.aV.displayName;
            var d = n.forwardRef((e, t) => {
                let { className: i, variant: n, ...o } = e;
                return (0, r.jsx)(s.xz, {
                    ref: t,
                    className: (0, a.a)(
                        "inline-flex h-[30px] items-center justify-center whitespace-nowrap rounded-sm px-2 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                        "ghost" === n ? "data-[state=active]:bg-secondary data-[state=active]:text-foreground" : "data-[state=active]:bg-primary data-[state=active]:text-background",
                        i
                    ),
                    ...o,
                });
            });
            (d.displayName = s.xz.displayName),
                (n.forwardRef((e, t) => {
                    let { className: i, ...n } = e;
                    return (0, r.jsx)(s.VY, { ref: t, className: (0, a.a)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", i), ...n });
                }).displayName = s.VY.displayName);
            var h = i(4689);
            function u() {
                let { setTheme: e, theme: t } = (0, h.F)(),
                    i = [
                        { theme: "system", icon: (0, r.jsx)(o.P.laptop, { className: "h-4 w-4" }) },
                        { theme: "light", icon: (0, r.jsx)(o.P.sun, { className: "h-4 w-4" }) },
                        { theme: "dark", icon: (0, r.jsx)(o.P.moon, { className: "h-4 w-4" }) },
                    ];
                return (0, r.jsx)(l, {
                    defaultValue: t,
                    className: "block",
                    children: (0, r.jsx)(c, { className: "rounded-full", children: i.map((t, i) => (0, r.jsx)(d, { value: t.theme, className: "flex-1 rounded-full capitalize", onClick: () => e(t.theme), children: t.icon }, i)) }),
                });
            }
        },
        9057: function (e, t, i) {
            i.d(t, {
                TokenIcon: function () {
                    return y;
                },
            });
            var r = i(7573),
                n = i(7653),
                o = i(994),
                a = i(4103),
                s = i(963),
                l = i(9066),
                c = n.forwardRef((e, t) => {
                    let { className: i, ...n } = e;
                    return (0, r.jsx)(l.fC, { ref: t, className: (0, s.a)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", i), ...n });
                });
            c.displayName = l.fC.displayName;
            var d = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(l.Ee, { ref: t, className: (0, s.a)("aspect-square h-full w-full", i), ...n });
            });
            d.displayName = l.Ee.displayName;
            var h = n.forwardRef((e, t) => {
                let { className: i, ...n } = e;
                return (0, r.jsx)(l.NY, { ref: t, className: (0, s.a)("flex h-full w-full items-center justify-center rounded-full bg-muted", i), ...n });
            });
            h.displayName = l.NY.displayName;
            var u = i(9289),
                m = i(8094),
                f = i(4753);
            let p = (0, u.j)("aspect-square flex items-center justify-center rounded-full text-foreground", {
                    variants: {
                        size: {
                            "3xl": "w-16 h-16 text-lg font-semibold leading-7",
                            "2xl": "w-12 h-12 text-[14px] font-semibold leading-tight",
                            xl: "w-8 h-8 text-xs font-normal leading-3",
                            lg: "w-6 h-6 text-[8px]",
                            md: "w-4 h-4 text-[6px]",
                            sm: "w-3 h-3 text-[4px]",
                            xs: "w-2 h-2 text-[3px]",
                        },
                    },
                    defaultVariants: { size: "lg" },
                }),
                y = (e) => {
                    let { address: t, className: i, size: s, symbol: l, imgOverride: u, ...y } = e,
                        [g, v] = (0, n.useState)([]),
                        x = (0, m.U)(null != t ? t : "") ? (0, f.K)(null != t ? t : "") : t;
                    (0, n.useEffect)(() => {
                        (async () => {
                            let e = await fetch(o.zK),
                                t = await e.json();
                            return t.tokens ? t.tokens.map((e) => ({ ...e, default: !0 })) : [];
                        })().then((e) => {
                            v(e);
                        });
                    }, []);
                    let b = (0, n.useMemo)(() => {
                        if (g.length > 0 && x && (0, m.U)(x)) {
                            var e;
                            return null === (e = g.find((e) => e.address === x)) || void 0 === e ? void 0 : e.logoURI;
                        }
                        return "";
                    }, [g, x]);
                    return (0, r.jsxs)(c, {
                        className: (0, a.a)(p({ size: s }), i),
                        ...y,
                        children: [
                            (0, r.jsx)(d, { src: null != u ? u : b, className: "rounded-full", alt: x }),
                            (0, r.jsx)(h, { className: "h-full w-full border border-foreground bg-background text-inherit", children: l ? l.slice(0, 3) : "TKN" }),
                        ],
                    });
                };
        },
        9872: function (e, t, i) {
            i.d(t, {
                TooltipCustom: function () {
                    return o;
                },
            });
            var r = i(7573),
                n = i(7653);
            let o = (e) => {
                let { children: t, className: i, tooltipContent: o, anchor: a = "left", position: s = "bottom-left", hidden: l } = e,
                    [c, d] = (0, n.useState)(!1),
                    h = (0, n.useMemo)(() => {
                        let e = { transform: "translateX(-50%)" };
                        switch (s) {
                            case "top-left":
                                e = { transform: "translateY(-100%)" };
                                break;
                            case "left":
                                e = { transform: "translateY(-50%)" };
                                break;
                            case "bottom-left":
                                e = { transform: "" };
                                break;
                            case "top-center":
                                e = { transform: "translate(-50%,-100%)" };
                                break;
                            case "top-right":
                                e = { transform: "translate(-100%, -100%)" };
                                break;
                            case "right":
                                e = { transform: "translate(-100%,-50%)" };
                                break;
                            case "bottom-right":
                                e = { transform: "translateX(-100%)" };
                                break;
                            case "center":
                                e = { transform: "translate(-50%, -50%)" };
                        }
                        return e;
                    }, [s]),
                    u = (0, n.useMemo)(() => {
                        let e = { transform: "translateY(100%) translateX(50%)" };
                        switch (a) {
                            case "top-left":
                                e = { transform: "" };
                                break;
                            case "left":
                                e = { transform: "translateY(50%)" };
                                break;
                            case "bottom-left":
                                e = { transform: "translateY(100%)" };
                                break;
                            case "top-center":
                                e = { transform: "translateX(50%)" };
                                break;
                            case "top-right":
                                e = { transform: "translateX(100%)" };
                                break;
                            case "right":
                                e = { transform: "translateY(50%) translateX(100%)" };
                                break;
                            case "bottom-right":
                                e = { transform: "translateY(100%) translateX(100%)" };
                        }
                        return e;
                    }, [a]),
                    m = (0, n.useMemo)(() => {
                        let e = { className: null, transform: null };
                        return (
                            "left" === a && "right" === s && (e = { className: "items-center justify-end", transform: "translate(-13px,-9px) rotate(180deg)" }),
                            "right" === a && "left" === s && (e = { className: "items-center", transform: "translate(-3px,-25%)" }),
                            "bottom-center" === a && "bottom-center" === s && (e = { className: "justify-center items-start", transform: "translate(-9px,1px) rotate(-270deg)" }),
                            "top-center" === a && "top-center" === s && (e = { className: "justify-center items-end", transform: "translate(-3px,-17px) rotate(270deg)" }),
                            e
                        );
                    }, [a]);
                return (0, r.jsxs)("div", {
                    onMouseEnter: () => d(!0),
                    onMouseLeave: () => d(!1),
                    onClick: () => d((e) => !e),
                    className: "relative",
                    children: [
                        (0, r.jsx)("div", {
                            className: "".concat((c || !1 === l) && !0 !== l ? "z-[999] opacity-100" : "z-[-1] opacity-0", " absolute flex h-full w-full ").concat(i),
                            style: { transform: u.transform, transition: "350ms" },
                            onMouseEnter: (e) => {
                                e.preventDefault(), e.stopPropagation();
                            },
                            children: (0, r.jsxs)("div", {
                                className: "border-1 relative h-fit w-fit p-2",
                                style: { transform: h.transform },
                                children: [
                                    (0, r.jsx)(() => {
                                        var e, t;
                                        return m.transform || m.className
                                            ? (0, r.jsx)("div", {
                                                  className: "absolute z-[999] flex h-full w-full ".concat(null !== (e = m.className) && void 0 !== e ? e : ""),
                                                  children: (0, r.jsxs)("div", {
                                                      className: "flex",
                                                      style: { transform: null !== (t = m.transform) && void 0 !== t ? t : "" },
                                                      children: [
                                                          (0, r.jsx)("div", { className: "border-1 z-[2] h-3 w-3 border bg-black", style: { transform: "translateY(20%) scaleX(1.3) rotate(45deg)" } }),
                                                          (0, r.jsx)("div", { className: "z-[3] h-5 w-4 bg-black", style: { transform: "translateX(-50%)" } }),
                                                      ],
                                                  }),
                                              })
                                            : null;
                                    }, {}),
                                    (0, r.jsx)("div", { className: "rounded-md border bg-black p-4", children: o }),
                                ],
                            }),
                        }),
                        (0, r.jsx)("div", { className: "z-1", children: t }),
                    ],
                });
            };
        },
        1152: function (e, t, i) {
            i.d(t, {
                z: function () {
                    return a;
                },
            });
            var r = i(4103),
                n = i(7653),
                o = (0,
                i(9289)
                    .j)(
                    "inline-flex h-fit items-center justify-center transition-duration-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-30 disabled:pointer-events-none ring-offset-background",
                    {
                        variants: {
                            variant: {
                                primary: "bg-primary text-primary-foreground hover:opacity-90",
                                secondary: "bg-muted border border-border text-muted-foreground hover:text-foreground",
                                outline: "bg-transparent text-secondary-foreground border border-secondary-foreground hover:bg-secondary",
                                ghost: "text-muted-foreground hover:bg-muted",
                                link: "underline-offset-4 hover:underline text-primary",
                                destructive: "bg-destructive-foreground text-accent-foreground hover:opacity-90",
                                warning: "bg-warning-foreground text-accent-foreground hover:opacity-90",
                                success: "bg-success-foreground text-accent-foreground hover:opacity-90",
                                info: "bg-info-foreground text-accent-foreground hover:opacity-90",
                            },
                            size: {
                                lg: "px-4 py-3 rounded-md text-lg font-semibold",
                                md: "px-4 py-2 rounded-md text-lg font-semibold leading-7",
                                sm: "px-2 py-1 rounded-sm text-sm font-semibold leading-tight",
                                xs: "px-1 py-1/2 rounded-sm text-xs font-medium leading-tight",
                            },
                        },
                        defaultVariants: { variant: "primary", size: "md" },
                    }
                ),
                a = n.forwardRef((e, t) => {
                    let { className: i, variant: a, size: s, as: l, ...c } = e;
                    return n.createElement(l || "button", { className: (0, r.a)(o({ variant: a, size: s, className: i })), ref: t, ...c });
                });
            a.displayName = "Button";
        },
        95: function (e, t, i) {
            i.d(t, {
                X: function () {
                    return l;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(1057),
                s = i(9998),
                l = o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)(a.fC, {
                        ref: t,
                        className: (0, n.a)(
                            "peer h-4 w-4 shrink-0 rounded-2xs border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-muted",
                            i
                        ),
                        ...o,
                        children: (0, r.jsx)(a.z$, { className: (0, n.a)("flex items-center justify-center text-current"), children: (0, r.jsx)(s.Z, { className: "h-4 w-4" }) }),
                    });
                });
            l.displayName = a.fC.displayName;
        },
        963: function (e, t, i) {
            i.d(t, {
                a: function () {
                    return o;
                },
            });
            var r = i(4909),
                n = i(2609);
            function o() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return (0, n.m)((0, r.W)(t));
            }
        },
        8106: function (e, t, i) {
            i.d(t, {
                a: function () {
                    return l;
                },
                c: function () {
                    return h;
                },
                d: function () {
                    return u;
                },
                f: function () {
                    return m;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(4032),
                s = i(5696),
                l = a.fC,
                c =
                    (a.xz,
                    (e) => {
                        let { className: t, children: i, ...o } = e;
                        return (0, r.jsx)(a.h_, { className: (0, n.a)(t), ...o, children: (0, r.jsx)("div", { className: "fixed inset-0 z-[99] flex items-start justify-center sm:items-center", children: i }) });
                    });
            c.displayName = a.h_.displayName;
            var d = o.forwardRef((e, t) => {
                let { className: i, ...o } = e;
                return (0, r.jsx)(a.aV, {
                    ref: t,
                    className: (0, n.a)("fixed inset-0  bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", i),
                    ...o,
                });
            });
            d.displayName = a.aV.displayName;
            var h = o.forwardRef((e, t) => {
                let { className: i, children: o, hideClose: l = !1, ...h } = e;
                return (0, r.jsxs)(c, {
                    children: [
                        (0, r.jsx)(d, {}),
                        (0, r.jsxs)(a.VY, {
                            ref: t,
                            className: (0, n.a)(
                                "fixed grid h-fit w-full gap-4 self-end rounded-t-md border bg-card p-6 pb-16 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-[500px] sm:self-center sm:rounded-md sm:pb-6 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
                                i
                            ),
                            ...h,
                            children: [
                                o,
                                !l &&
                                    (0, r.jsxs)(a.x8, {
                                        className:
                                            "absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-muted-foreground",
                                        children: [(0, r.jsx)(s.Z, { className: "h-5 w-5" }), (0, r.jsx)("span", { className: "sr-only", children: "Close" })],
                                    }),
                            ],
                        }),
                    ],
                });
            });
            h.displayName = a.VY.displayName;
            var u = (e) => {
                let { className: t, ...i } = e;
                return (0, r.jsx)("div", { className: (0, n.a)("flex flex-col space-y-1.5 text-center sm:text-left", t), ...i });
            };
            u.displayName = "DialogHeader";
            var m = o.forwardRef((e, t) => {
                let { className: i, ...o } = e;
                return (0, r.jsx)(a.Dx, { ref: t, className: (0, n.a)("text-xl font-medium leading-none tracking-tight text-foreground", i), ...o });
            });
            (m.displayName = a.Dx.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)(a.dk, { ref: t, className: (0, n.a)("text-sm text-muted-foreground", i), ...o });
                }).displayName = a.dk.displayName);
        },
        2730: function (e, t, i) {
            i.d(t, {
                $N: function () {
                    return r.f;
                },
                Vq: function () {
                    return r.a;
                },
                cZ: function () {
                    return r.c;
                },
                fK: function () {
                    return r.d;
                },
            });
            var r = i(8106);
        },
        9326: function (e, t, i) {
            i.d(t, {
                DropdownMenu: function () {
                    return d;
                },
                DropdownMenuCheckboxItem: function () {
                    return f;
                },
                DropdownMenuContent: function () {
                    return u;
                },
                DropdownMenuTrigger: function () {
                    return h;
                },
                Xi: function () {
                    return m;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(791),
                s = i(7352),
                l = i(9998),
                c = i(6661),
                d = a.fC,
                h = a.xz;
            ((a.ZA,
            a.Uv,
            a.Tr,
            a.Ee,
            o.forwardRef((e, t) => {
                let { className: i, inset: o, children: l, ...c } = e;
                return (0, r.jsxs)(a.fF, {
                    ref: t,
                    className: (0, n.a)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus-visible:ring-ring", o && "pl-8", i),
                    ...c,
                    children: [l, (0, r.jsx)(s.Z, { className: "ml-auto h-4 w-4" })],
                });
            })).displayName = a.fF.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)(a.tu, {
                        ref: t,
                        className: (0, n.a)(
                            "text-on-popover z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                            i
                        ),
                        ...o,
                    });
                }).displayName = a.tu.displayName);
            var u = o.forwardRef((e, t) => {
                let { className: i, sideOffset: o = 4, ...s } = e;
                return (0, r.jsx)(a.Uv, {
                    children: (0, r.jsx)(a.VY, {
                        ref: t,
                        sideOffset: o,
                        className: (0, n.a)(
                            "z-50 min-w-[8rem] overflow-hidden rounded-md bg-background p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            i
                        ),
                        ...s,
                    }),
                });
            });
            u.displayName = a.VY.displayName;
            var m = o.forwardRef((e, t) => {
                let { className: i, inset: o, ...s } = e;
                return (0, r.jsx)(a.ck, {
                    ref: t,
                    className: (0, n.a)(
                        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                        o && "pl-8",
                        i
                    ),
                    ...s,
                });
            });
            m.displayName = a.ck.displayName;
            var f = o.forwardRef((e, t) => {
                let { className: i, children: o, checked: s, ...c } = e;
                return (0, r.jsxs)(a.oC, {
                    ref: t,
                    checked: s,
                    className: (0, n.a)(
                        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-muted-foreground outline-none transition-colors hover:cursor-pointer hover:text-hover focus:text-foreground data-[disabled]:pointer-events-none data-[checked]:text-foreground data-[disabled]:opacity-50",
                        i
                    ),
                    ...c,
                    children: [(0, r.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, r.jsx)(a.wU, { children: (0, r.jsx)(l.Z, { className: "h-4 w-4 text-foreground" }) }) }), o],
                });
            });
            (f.displayName = a.oC.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, children: o, ...s } = e;
                    return (0, r.jsxs)(a.Rk, {
                        ref: t,
                        className: (0, n.a)(
                            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors  focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                            i
                        ),
                        ...s,
                        children: [(0, r.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, r.jsx)(a.wU, { children: (0, r.jsx)(c.Z, { className: "h-2 w-2 fill-current" }) }) }), o],
                    });
                }).displayName = a.Rk.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, inset: o, ...s } = e;
                    return (0, r.jsx)(a.__, { ref: t, className: (0, n.a)("px-2 py-1.5 text-sm font-semibold", o && "pl-8", i), ...s });
                }).displayName = a.__.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)(a.Z0, { ref: t, className: (0, n.a)("-mx-1 my-1 h-px bg-muted", i), ...o });
                }).displayName = a.Z0.displayName);
        },
        6653: function (e, t, i) {
            i.d(t, {
                HoverCard: function () {
                    return s;
                },
                HoverCardContent: function () {
                    return c;
                },
                HoverCardTrigger: function () {
                    return l;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(1936),
                s = a.fC,
                l = a.xz,
                c = o.forwardRef((e, t) => {
                    let { className: i, align: o = "center", sideOffset: s = 4, ...l } = e;
                    return (0, r.jsx)(a.VY, {
                        ref: t,
                        align: o,
                        sideOffset: s,
                        className: (0, n.a)(
                            "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            i
                        ),
                        ...l,
                    });
                });
            c.displayName = a.VY.displayName;
        },
        9393: function (e, t, i) {
            i.d(t, {
                Input: function () {
                    return o;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653).forwardRef((e, t) => {
                    let { className: i, outerClassName: o, startAdornment: a, endAdornment: s, type: l, allowScientific: c = !1, allowMinus: d = !0, allowDecimal: h = !0, onChange: u, onKeyDown: m, ...f } = e,
                        p = function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                i = e.indexOf(t),
                                r = e.replaceAll(t, "").split("");
                            return r.splice(i, 0, t), r.join("");
                        };
                    return (0, r.jsxs)("div", {
                        className: (0, n.a)("relative w-full", o),
                        children: [
                            a && (0, r.jsx)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 disabled:text-muted-foreground", children: a }),
                            (0, r.jsx)("input", {
                                type: "number-enhanced" === l ? void 0 : l,
                                className: (0, n.a)(
                                    "focus:border-1 flex h-10 w-full rounded-md border border-border px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-foreground focus:outline-none disabled:cursor-not-allowed disabled:text-muted-foreground",
                                    i
                                ),
                                ref: t,
                                onChange: (e) => {
                                    var t, i, r, n, o, a, s, m;
                                    if (
                                        ("number-enhanced" !== l || c || (e.target.value = null === (t = e.target.value) || void 0 === t ? void 0 : t.replaceAll(/[eE]/g, "")),
                                        "number-enhanced" !== l || d || (e.target.value = null === (i = e.target.value) || void 0 === i ? void 0 : i.replace("-", "")),
                                        "number-enhanced" !== l || h || (e.target.value = null === (r = e.target.value) || void 0 === r ? void 0 : r.replace(".", "")),
                                        "number-enhanced" === l)
                                    ) {
                                        if (((e.target.value = null === (n = e.target.value) || void 0 === n ? void 0 : n.replaceAll(/[^eE\d.-]+/g, "")), (null === (o = e.target.value) || void 0 === o ? void 0 : o.split(".").length) > 2)) {
                                            e.target.value = p(e.target.value, ".");
                                            return;
                                        }
                                        if ((null === (a = e.target.value) || void 0 === a ? void 0 : a.toLowerCase().split("e").length) > 2) {
                                            e.target.value = p(e.target.value, "e");
                                            return;
                                        }
                                        if (null === (m = e.target.value) || void 0 === m ? void 0 : null === (s = m.slice(1)) || void 0 === s ? void 0 : s.includes("-")) {
                                            e.target.value = e.target.value[0] + e.target.value.slice(1).replaceAll("-", "");
                                            return;
                                        }
                                    }
                                    null == u || u(e);
                                },
                                onKeyDown: (e) => {
                                    if (("number-enhanced" === l && !d && "-" === e.key) || ("number-enhanced" === l && !c && ["e", "E"].includes(e.key)) || ("number-enhanced" === l && !h && "." === e.key)) {
                                        e.preventDefault();
                                        return;
                                    }
                                    ("number-enhanced" === l && /[^eE\d.-]+/.test(e.key)) || null == m || m(e);
                                },
                                ...f,
                            }),
                            s && (0, r.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3 text-muted-foreground disabled:text-muted-foreground", children: s }),
                        ],
                    });
                });
            o.displayName = "Input";
        },
        5620: function (e, t, i) {
            i.d(t, {
                NavigationMenu: function () {
                    return c;
                },
                NavigationMenuContent: function () {
                    return f;
                },
                NavigationMenuItem: function () {
                    return h;
                },
                NavigationMenuLink: function () {
                    return p;
                },
                NavigationMenuList: function () {
                    return d;
                },
                NavigationMenuTrigger: function () {
                    return m;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(8704),
                s = i(9289),
                l = i(4744),
                c = o.forwardRef((e, t) => {
                    let { className: i, children: o, ...s } = e;
                    return (0, r.jsxs)(a.fC, { ref: t, className: (0, n.a)("relative z-10 flex max-w-max flex-1 items-center justify-center", i), ...s, children: [o, (0, r.jsx)(y, {})] });
                });
            c.displayName = a.fC.displayName;
            var d = o.forwardRef((e, t) => {
                let { className: i, ...o } = e;
                return (0, r.jsx)(a.aV, { ref: t, className: (0, n.a)("group flex flex-1 list-none items-center justify-center space-x-1", i), ...o });
            });
            d.displayName = a.aV.displayName;
            var h = a.ck,
                u = (0, s.j)(
                    "group inline-flex h-10 w-max items-center justify-center rounded-xs bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-muted/50 data-[state=open]:bg-muted/50 whitespace-nowrap flex-shrink-0"
                ),
                m = o.forwardRef((e, t) => {
                    let { className: i, children: o, ...s } = e;
                    return (0, r.jsxs)(a.xz, {
                        ref: t,
                        className: (0, n.a)(u(), "group", i),
                        ...s,
                        children: [o, " ", (0, r.jsx)(l.Z, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" })],
                    });
                });
            m.displayName = a.xz.displayName;
            var f = o.forwardRef((e, t) => {
                let { className: i, ...o } = e;
                return (0, r.jsx)(a.VY, {
                    ref: t,
                    className: (0, n.a)(
                        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
                        i
                    ),
                    ...o,
                });
            });
            f.displayName = a.VY.displayName;
            var p = a.rU,
                y = o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)("div", {
                        className: (0, n.a)("absolute left-0 top-full flex justify-center"),
                        children: (0, r.jsx)(a.l_, {
                            className: (0, n.a)(
                                "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xs border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
                                i
                            ),
                            ref: t,
                            ...o,
                        }),
                    });
                });
            (y.displayName = a.l_.displayName),
                (o.forwardRef((e, t) => {
                    let { className: i, ...o } = e;
                    return (0, r.jsx)(a.z$, {
                        ref: t,
                        className: (0, n.a)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", i),
                        ...o,
                        children: (0, r.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-2xs bg-border shadow-md" }),
                    });
                }).displayName = a.z$.displayName);
        },
        745: function (e, t, i) {
            i.d(t, {
                J2: function () {
                    return s;
                },
                xo: function () {
                    return l;
                },
                yk: function () {
                    return c;
                },
            });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(7888),
                s = a.fC,
                l = a.xz,
                c = o.forwardRef((e, t) => {
                    let { className: i, align: o = "center", sideOffset: s = 4, ...l } = e;
                    return (0, r.jsx)(a.h_, {
                        children: (0, r.jsx)(a.VY, {
                            ref: t,
                            align: o,
                            sideOffset: s,
                            className: (0, n.a)(
                                "z-50 w-72 rounded-md border bg-card p-4 text-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                                i
                            ),
                            ...l,
                        }),
                    });
                });
            c.displayName = a.VY.displayName;
        },
        8381: function (e, t, i) {
            i.r(t),
                i.d(t, {
                    Tooltip: function () {
                        return l;
                    },
                    TooltipContent: function () {
                        return d;
                    },
                    TooltipProvider: function () {
                        return s;
                    },
                    TooltipTrigger: function () {
                        return c;
                    },
                });
            var r = i(7573),
                n = i(963),
                o = i(7653),
                a = i(9956),
                s = a.zt,
                l = a.fC,
                c = a.xz,
                d = o.forwardRef((e, t) => {
                    let { className: i, sideOffset: o = 4, ...s } = e;
                    return (0, r.jsx)(a.VY, {
                        ref: t,
                        sideOffset: o,
                        className: (0, n.a)(
                            "z-50 overflow-hidden rounded-sm border bg-card px-3 py-1.5 text-sm text-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
                            i
                        ),
                        ...s,
                    });
                });
            d.displayName = a.VY.displayName;
        },
    },
]);
