(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185],
    {
        3290: function (e, i, t) {
            Promise.resolve().then(t.t.bind(t, 2625, 23)),
                Promise.resolve().then(t.bind(t, 6867)),
                Promise.resolve().then(t.bind(t, 7702)),
                Promise.resolve().then(t.t.bind(t, 3950, 23)),
                Promise.resolve().then(t.t.bind(t, 6340, 23)),
                Promise.resolve().then(t.t.bind(t, 2147, 23)),
                Promise.resolve().then(t.t.bind(t, 2001, 23)),
                Promise.resolve().then(t.bind(t, 257)),
                Promise.resolve().then(t.bind(t, 3059)),
                Promise.resolve().then(t.bind(t, 5776)),
                Promise.resolve().then(t.bind(t, 6682)),
                Promise.resolve().then(t.bind(t, 8882)),
                Promise.resolve().then(t.bind(t, 9371)),
                Promise.resolve().then(t.bind(t, 2676)),
                Promise.resolve().then(t.bind(t, 8544)),
                Promise.resolve().then(t.bind(t, 8127)),
                Promise.resolve().then(t.bind(t, 1561)),
                Promise.resolve().then(t.bind(t, 5981)),
                Promise.resolve().then(t.bind(t, 6007)),
                Promise.resolve().then(t.bind(t, 870)),
                Promise.resolve().then(t.bind(t, 4546)),
                Promise.resolve().then(t.bind(t, 9396)),
                Promise.resolve().then(t.bind(t, 9057)),
                Promise.resolve().then(t.bind(t, 9872)),
                Promise.resolve().then(t.bind(t, 9326)),
                Promise.resolve().then(t.bind(t, 6653)),
                Promise.resolve().then(t.bind(t, 9393)),
                Promise.resolve().then(t.bind(t, 5620)),
                Promise.resolve().then(t.bind(t, 8381));
        },
        6867: function (e, i, t) {
            "use strict";
            t.d(i, {
                default: function () {
                    return w;
                },
            });
            var n,
                s = t(7573);
            let o = [
                {
                    name: "BeraHub",
                    link: null !== (n = t(8571).env.NEXT_PUBLIC_HUB_URL) && void 0 !== n ? n : "https://hub.berachain.com/",
                    icon: "/images/icons/favicon_berahub.svg",
                    description: "Swaps, Pools, Reward Vaults & Validators",
                },
                { name: "Honey", link: "https://honey.berachain.com/", icon: "/images/icons/favicon_honey.svg", description: "Mint or redeem HONEY" },
                { name: "Token Bridge", link: "https://bridge.berachain.com/", icon: "/images/icons/icon_token_bridge.svg", description: "Bridge your tokens to Berachain" },
                { name: "NFT Bridge", link: "https://nftbridge.berachain.com/", icon: "/images/icons/icon_nft_bridge.svg", description: "Bridge your NFTs to Berachain" },
                { name: "Berascan", link: "https://berascan.com", icon: "/images/icons/favicon_berascan.svg", description: "Explore the Berachain blockchain" },
            ];
            var r = t(5866),
                a = t(135),
                l = t(75),
                c = t(4415),
                m = t(294),
                d = t(7653),
                h = t(1152),
                p = t(8146);
            function x() {
                return (0, s.jsxs)("header", {
                    className: "h-30 fixed top-0 z-50 flex w-[100vw] flex-col items-center justify-center bg-[#8AC5EA] pb-3 text-white md:h-16 md:flex-row md:py-3 xl:bottom-[72px] xl:top-auto",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "-mt-1 flex flex-row items-center justify-center md:mt-0",
                            children: [
                                (0, s.jsx)(m.default, { className: "h-16 w-14", src: "/images/graphics/rocket.png", alt: "rocket", width: 80, height: 80, unoptimized: !0 }),
                                (0, s.jsx)(m.default, { className: "pb-1", src: "/images/graphics/banner-text.png", alt: "parachute", width: 187, height: 40, unoptimized: !0 }),
                            ],
                        }),
                        (0, s.jsx)("div", { className: "md:mr-2 lg:mr-24" }),
                        (0, s.jsxs)("div", {
                            className: "flex flex-row items-center justify-center mx-1 sm:mx-0",
                            children: [
                                (0, s.jsx)(p.default, {
                                    href: "https://airdrop.berachain.com/",
                                    className: "mr-1 xl:mr-2",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsxs)(h.z, {
                                        className:
                                            "border border-white px-1 xl:px-2 py-1 font-mikado text-md lg:text-xl font-bold leading-tight sm:leading-normal transition-all duration-200 [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000] hover:border-white/70 hover:bg-white/20 md:px-4",
                                        children: [(0, s.jsx)(m.default, { src: "/images/icons/berachain.svg", alt: "airdrop", className: "mr-1 xl:mr-2 h-6 w-6 rounded-sm", width: 40, height: 40, unoptimized: !0 }), "Claim Airdrop"],
                                    }),
                                }),
                                (0, s.jsx)(p.default, {
                                    href: "https://hub.berachain.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsxs)(h.z, {
                                        className:
                                            "border border-white px-1 xl:px-2 py-1 font-mikado text-md lg:text-xl font-bold leading-tight sm:leading-normal transition-all duration-200 [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000] hover:border-white/70 hover:bg-white/20 md:px-4",
                                        children: [(0, s.jsx)(r.P.hubFav, { className: "h-6 w-6 mr-1 xl:mr-2 rounded-md border-[0.5px] border-black" }), "Visit BeraHub"],
                                    }),
                                }),
                                (0, s.jsx)(p.default, {
                                    href: "https://bridge.berachain.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, s.jsxs)(h.z, {
                                        className:
                                            "border border-white ml-1 xl:ml-2 px-1 xl:px-2 py-1 font-mikado text-md lg:text-xl font-bold leading-tight sm:leading-normal transition-all duration-200 [text-shadow:_-0.25px_-0.25px_0_#000,_0.25px_-0.25px_0_#000,_-0.25px_0.25px_0_#000,_0.25px_0.25px_0_#000] hover:border-white/70 hover:bg-white/20 md:px-4",
                                        children: [(0, s.jsx)(r.P.tokenBridgeFav, { className: "h-6 w-6 mr-1 xl:mr-2 rounded-md border-[0.5px] border-black" }), "Bridge Funds"],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
            var u = t(4103),
                g = t(8706),
                b = (e) => {
                    let { isOpen: i, toggleDropdown: t, title: n, navList: o, width: a, highlight: l } = e,
                        c = (0, d.useRef)(null),
                        [h, x] = (0, d.useState)(!1),
                        [b, v] = (0, d.useState)(!1),
                        f = (0, d.useCallback)(() => {
                            b || t();
                        }, [t, b]);
                    return (
                        (0, d.useEffect)(() => {
                            if (i) {
                                let e = setTimeout(() => {
                                    var e;
                                    null === (e = c.current) || void 0 === e || e.focus();
                                }, 101);
                                return () => clearTimeout(e);
                            }
                        }, [i]),
                        (0, d.useEffect)(() => {
                            let e = (e) => {
                                c.current && !c.current.contains(e.target) && t();
                            };
                            return (
                                i && document.addEventListener("mousedown", e),
                                () => {
                                    document.removeEventListener("mousedown", e);
                                }
                            );
                        }, [i, t]),
                        (0, d.useEffect)(() => {
                            if (h) {
                                let e = setTimeout(() => {
                                    x(!1);
                                }, 100);
                                return () => clearTimeout(e);
                            }
                        }, [h]),
                        (0, d.useEffect)(() => {
                            if (b) {
                                let e = setTimeout(() => {
                                    v(!1);
                                }, 100);
                                return () => clearTimeout(e);
                            }
                        }, [b]),
                        (0, s.jsxs)(
                            "div",
                            {
                                className: "relative z-[60] w-fit",
                                children: [
                                    (0, s.jsx)(g.u, {
                                        show: i,
                                        as: d.Fragment,
                                        enter: "transition ease-out duration-100",
                                        enterFrom: "transform opacity-0 scale-95",
                                        enterTo: "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom: "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: (0, s.jsx)("div", {
                                            ref: c,
                                            tabIndex: 0,
                                            className: "absolute right-0 top-0 z-10 -mt-3 flex -translate-y-[100%] transform flex-col gap-3 rounded-md bg-[#0B1014] p-4 text-white",
                                            style: { backdropFilter: "blur(24px)", width: null != a ? a : 200 },
                                            children: o.map((e, i) => {
                                                var t;
                                                return (0, s.jsxs)(
                                                    p.default,
                                                    {
                                                        className:
                                                            "flex w-full items-center gap-2 rounded-lg px-1 py-1 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)] hover:bg-opacity-30 hover:opacity-70",
                                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                                        target: "_blank",
                                                        children: [
                                                            e.icon && ("string" == typeof e.icon ? (0, s.jsx)(m.default, { src: e.icon, alt: e.name, width: e.isSmall ? 20 : 30, height: e.isSmall ? 20 : 30, unoptimized: !0 }) : e.icon),
                                                            (0, s.jsxs)("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    (0, s.jsx)("div", { className: "text-sm font-medium leading-5 text-white", children: e.name }),
                                                                    (0, s.jsx)("div", { className: "whitespace-nowrap text-[10px] font-medium leading-4 text-white", children: e.description }),
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    i
                                                );
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("div", {
                                        className:
                                            "flex h-full items-center justify-center gap-2 font-mikado font-bold [letter-spacing:-0.025em] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000,_0_2px_2px_rgba(0,0,0,0.6)]",
                                        children: (0, s.jsxs)("button", {
                                            type: "button",
                                            className: (0, u.a)("group inline-flex items-center rounded-xl px-4 py-2", l ? "bg-white text-black" : "text-white"),
                                            onClick: (e) => {
                                                e.stopPropagation(), b || (v(!0), f());
                                            },
                                            children: [
                                                (0, s.jsx)("span", { className: "group-hover:opacity-70", children: n }),
                                                i
                                                    ? (0, s.jsx)(r.P.chevronDown, { className: "h-5 w-5 group-hover:opacity-70", "aria-hidden": "true" })
                                                    : (0, s.jsx)(r.P.chevronUp, { className: "h-5 w-5 group-hover:opacity-70", "aria-hidden": "true" }),
                                            ],
                                        }),
                                    }),
                                ],
                            },
                            n
                        )
                    );
                },
                v = (e) => {
                    let { title: i, navList: t, highlight: n, index: o, toggleSubmenu: a, openSubmenuIndex: l, cycleOpen: c } = e;
                    return (0, s.jsxs)(
                        "div",
                        {
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "flex cursor-pointer items-center gap-2 p-2 font-mikado text-xl font-bold hover:cursor-pointer hover:opacity-60",
                                    onClick: () => (t ? a(o) : null),
                                    children: [i, t && t.length > 0 && (l === o ? (0, s.jsx)(r.P.chevronUp, { className: "h-5 w-5", "aria-hidden": "true" }) : (0, s.jsx)(r.P.chevronDown, { className: "h-5 w-5", "aria-hidden": "true" }))],
                                }),
                                t &&
                                    t.length > 0 &&
                                    l === o &&
                                    (0, s.jsx)(g.u, {
                                        show: l === o,
                                        as: d.Fragment,
                                        enter: "transition ease-out duration-100",
                                        enterFrom: "transform opacity-0 scale-95",
                                        enterTo: "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom: "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: (0, s.jsx)("div", {
                                            className: "flex flex-col gap-2 rounded-xl bg-[#FAFAF9] bg-opacity-20 p-4 font-mikado text-sm font-bold shadow backdrop-blur-lg",
                                            children: t.map((e, i) => {
                                                var t, n, o, r;
                                                return (0, s.jsxs)(
                                                    p.default,
                                                    {
                                                        href: null !== (t = e.link) && void 0 !== t ? t : "",
                                                        onClick: () => {
                                                            c();
                                                        },
                                                        className: "flex items-center gap-1 p-2 hover:cursor-pointer hover:opacity-60",
                                                        children: [
                                                            e.icon || e.mobileIcon
                                                                ? "string" == typeof (null !== (n = e.mobileIcon) && void 0 !== n ? n : e.icon)
                                                                    ? (0, s.jsx)(m.default, {
                                                                          src: null !== (o = e.mobileIcon) && void 0 !== o ? o : e.icon,
                                                                          alt: e.name,
                                                                          width: e.isSmall ? 18 : 24,
                                                                          height: e.isSmall ? 18 : 24,
                                                                          className: "mr-2",
                                                                          unoptimized: !0,
                                                                      })
                                                                    : null !== (r = e.mobileIcon) && void 0 !== r
                                                                    ? r
                                                                    : e.icon
                                                                : null,
                                                            (0, s.jsxs)("div", {
                                                                className: "flex flex-col leading-3",
                                                                children: [e.name, e.description && (0, s.jsx)("span", { className: "text-[9px] font-medium", children: e.description })],
                                                            }),
                                                        ],
                                                    },
                                                    i
                                                );
                                            }),
                                        }),
                                    }),
                            ],
                        },
                        o
                    );
                },
                f = t(1695);
            let _ = [
                { title: "dApps", subItems: o, width: 280, highlight: !0 },
                {
                    title: "Community",
                    subItems: [
                        { name: "Blog", link: "https://blog.berachain.com/" },
                        { name: "News", link: "https://news.berachain.com/" },
                    ],
                    highlight: !1,
                },
                {
                    title: "Developers",
                    subItems: [
                        { name: "Bug Report", link: "https://discord.com/invite/berachain" },
                        { name: "Dev Docs", link: "https://docs.berachain.com/" },
                        { name: "GitHub", link: "https://github.com/berachain" },
                    ],
                    highlight: !1,
                },
                {
                    title: "Ecosystem",
                    subItems: [
                        { name: "Projects", link: "https://ecosystem.berachain.com/" },
                        { name: "PoL", link: "https://blog.berachain.com/blog/flow-of-value-examining-the-differences-between-pos-and-pol-a-case-for-a-new-paradigm-in-sustainable-incentive-alignment-at-the-protocol-layer" },
                        { name: "Build-a-Bera", link: "https://buildabera.xyz/" },
                        { name: "Events", link: "https://ecosystem.berachain.com/events" },
                        { name: "Careers", link: "https://ecojobs.berachain.com/jobs" },
                    ],
                    highlight: !1,
                },
                {
                    title: "Foundation",
                    subItems: [
                        { name: "Honeypaper", link: "https://honeypaper.berachain.com/" },
                        { name: "Brand Kit", link: "https://drive.google.com/drive/folders/12t_a4Rci2txC3uVj9JyXXsSRCqWfd4GG/" },
                        { name: "Careers", link: "https://careers.berachain.com/" },
                        { name: "Terms of Use", link: "https://berachain.com/terms-of-use/" },
                        { name: "Privacy Policy", link: "https://berachain.com/privacy-policy/" },
                    ],
                    highlight: !1,
                },
                {
                    title: "Socials",
                    subItems: [
                        { name: "Twitter", link: "https://x.com/berachain", icon: "/images/icons/icon_x.svg", mobileIcon: "/images/icons/icon_x_mobile.svg", isSmall: !0 },
                        { name: "Discord", link: "https://discord.com/invite/berachain", icon: "/images/icons/icon_discord.svg", mobileIcon: "/images/icons/icon_discord_mobile.svg", isSmall: !0 },
                        { name: "Telegram", link: "https://t.me/BerachainPortal", icon: "/images/icons/icon_telegram.svg", mobileIcon: "/images/icons/icon_telegram_mobile.svg", isSmall: !0 },
                        { name: "Github", link: "https://github.com/berachain", icon: "/images/icons/icon_github.svg", mobileIcon: "/images/icons/icon_github_mobile.svg", isSmall: !0 },
                    ],
                    highlight: !1,
                },
            ];
            function w(e) {
                let { children: i } = e,
                    [t, n] = (0, a.n)(!1, !0),
                    [o, h] = d.useState(null),
                    [p, u] = d.useState(null),
                    g = (0, f.usePathname)(),
                    w = (e) => {
                        h((i) => (i !== e ? e : null));
                    },
                    j = (e) => {
                        p === e ? u(null) : u(e);
                    };
                return "/access-deny" === g || "/privacy-policy" === g || "/terms-of-use" === g
                    ? (0, s.jsx)("main", { children: i })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(l.M, {
                                  mode: "wait",
                                  initial: !1,
                                  children:
                                      t &&
                                      (0, s.jsxs)(c.E.aside, {
                                          initial: { width: 0 },
                                          animate: { width: "100%" },
                                          exit: { width: 0, transition: { duration: 0.1 } },
                                          className: "overflow-y-auto bg-[#FAFAF9CC] backdrop-blur-sm lg:hidden",
                                          children: [
                                              (0, s.jsx)("nav", {
                                                  className: "flex w-full px-[20px] py-[18px] lg:hidden",
                                                  children: (0, s.jsxs)("div", {
                                                      className: "relative z-[51] flex w-full items-center justify-between text-xl",
                                                      children: [
                                                          (0, s.jsx)(m.default, {
                                                              src: "/images/icons/logo_black.svg",
                                                              alt: "logo",
                                                              width: 60,
                                                              height: 30,
                                                              unoptimized: !0,
                                                              onClick: () => window.scrollTo(0, document.documentElement.scrollHeight),
                                                              className: "[pointer-events:auto] hover:cursor-pointer",
                                                          }),
                                                          (0, s.jsx)(c.E.div, {
                                                              animate: t ? "open" : "closed",
                                                              className: "h-[24px] text-black",
                                                              children: (0, s.jsx)(r.P.close, { onClick: n, className: "h-6 w-6 pr-2 hover:cursor-pointer" }),
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, s.jsx)(c.E.div, {
                                                  className: "flex flex-col gap-6 p-6",
                                                  initial: "closed",
                                                  animate: "open",
                                                  exit: "closed",
                                                  variants: { closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }, open: { transition: { staggerChildren: 0.1, staggerDirection: 1 } } },
                                                  children: _.map((e, i) => {
                                                      var t;
                                                      return (0, s.jsx)(
                                                          v,
                                                          { index: i, title: e.title, navList: e.subItems, highlight: null !== (t = e.highlight) && void 0 !== t && t, toggleSubmenu: w, openSubmenuIndex: o, cycleOpen: n },
                                                          i
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                              }),
                              (0, s.jsx)(x, {}),
                              (0, s.jsxs)("header", {
                                  className: "fixed bottom-0 z-50 flex h-[72px] w-[100vw] items-center overflow-visible bg-white bg-opacity-20 text-white shadow backdrop-blur-lg",
                                  children: [
                                      (0, s.jsx)("nav", {
                                          className: "flex w-full px-[20px] py-[18px] lg:hidden",
                                          children: (0, s.jsxs)("div", {
                                              className: "relative] flex w-full items-center justify-between text-xl",
                                              children: [
                                                  (0, s.jsx)(m.default, {
                                                      src: "/images/icons/logo_white.svg",
                                                      alt: "Berachain Logo",
                                                      width: 38,
                                                      height: 18,
                                                      className: "relative z-[51] h-auto [pointer-events:auto] hover:cursor-pointer",
                                                      onClick: () => window.scrollTo(0, document.documentElement.scrollHeight),
                                                      unoptimized: !0,
                                                  }),
                                                  !t &&
                                                      (0, s.jsx)(c.E.div, {
                                                          animate: t ? "open" : "closed",
                                                          className: "relative z-[51] h-[24px]",
                                                          children: (0, s.jsx)(r.P.menu, { onClick: n, className: " -mt-1 h-8 w-8 pr-2 hover:cursor-pointer" }),
                                                      }),
                                              ],
                                          }),
                                      }),
                                      (0, s.jsx)("nav", {
                                          className: "hidden w-full justify-center lg:flex",
                                          children: (0, s.jsxs)("div", {
                                              className: "flex items-center gap-2 text-sm",
                                              children: [
                                                  (0, s.jsx)(m.default, {
                                                      src: "/images/icons/logo_white.svg",
                                                      alt: "Berachain Logo",
                                                      width: 60,
                                                      height: 30,
                                                      className: "mr-2 w-[60px] [pointer-events:auto] hover:cursor-pointer",
                                                      onClick: () => window.scrollTo(0, document.documentElement.scrollHeight),
                                                      unoptimized: !0,
                                                  }),
                                                  _.map((e, i) => {
                                                      var t, n;
                                                      return (0, s.jsx)(
                                                          b,
                                                          {
                                                              isOpen: p === e.title.toLowerCase(),
                                                              toggleDropdown: () => j(e.title.toLowerCase()),
                                                              title: e.title,
                                                              navList: e.subItems,
                                                              width: null !== (t = e.width) && void 0 !== t ? t : 200,
                                                              highlight: null !== (n = e.highlight) && void 0 !== n && n,
                                                          },
                                                          i
                                                      );
                                                  }),
                                              ],
                                          }),
                                      }),
                                  ],
                              }),
                              (0, s.jsx)("main", { children: i }),
                          ],
                      });
            }
        },
        2625: function () {},
    },
    function (e) {
        e.O(0, [479, 310, 512, 298, 32, 28, 415, 71, 578, 406, 293, 528, 744], function () {
            return e((e.s = 3290));
        }),
            (_N_E = e.O());
    },
]);
