(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3646: function (e, t, n) {
      var r = n(7228);
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    1506: function (e) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    9713: function (e) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    9754: function (e) {
      function t(n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          t(n)
        );
      }
      e.exports = t;
    },
    2205: function (e, t, n) {
      var r = n(9489);
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    6860: function (e) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    8206: function (e) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    8585: function (e, t, n) {
      var r = n(8),
        o = n(1506);
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    319: function (e, t, n) {
      var r = n(3646),
        o = n(6860),
        a = n(379),
        i = n(8206);
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    6208: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kd: function () {
          return r;
        },
        U9: function () {
          return o;
        },
        qk: function () {
          return a;
        },
        Vs: function () {
          return i;
        },
        N$: function () {
          return c;
        },
        MS: function () {
          return s;
        },
        PN: function () {
          return u;
        },
      });
      var r = "https://github.com/taltoken",
        o = "https://www.stacks.co/",
        a = "",
        i = "https://discord.gg/",
        c = "https://twitter.com/",
        s = "",
        u = "taraldefi@gmail.com";
    },
    2434: function (e, t, n) {
      "use strict";
      n.d(t, {
        RQ: function () {
          return r;
        },
        Fg: function () {
          return i;
        },
        OD: function () {
          return c;
        },
      });
      var r,
        o = n(5893),
        a = n(1664);
      !(function (e) {
        (e.HeaderLink =
          "font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl"),
          (e.FooterLink =
            "text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500"),
          (e.PageLink = "font-semibold text-blue-500 hover:text-cool-blue-600");
      })(r || (r = {}));
      var i = function (e) {
          var t = e.type,
            n = e.href,
            r = e.children,
            a = e.external,
            i = void 0 !== a && a;
          return (0, o.jsxs)(s, {
            href: n,
            external: i,
            tailwindStyles: t,
            children: [" ", r, " "],
          });
        },
        c = function (e) {
          var t = e.email,
            n = e.children;
          return (0, o.jsxs)("a", {
            className: r.PageLink,
            target: "_blank",
            href: "mailto:".concat(t),
            onClick: function (e) {
              (window.location = "mailto:".concat(t)), e.preventDefault();
            },
            rel: "noopener noreferrer",
            children: [" ", n, " "],
          });
        },
        s = function (e) {
          var t = e.children,
            n = e.href,
            r = e.tailwindStyles,
            i = e.external;
          return void 0 !== i && i
            ? (0, o.jsx)("a", {
                className: r,
                target: "_blank",
                href: n,
                rel: "noopener noreferrer",
                children: t,
              })
            : (0, o.jsx)(a.default, {
                href: n,
                children: (0, o.jsx)("a", { className: r, children: t }),
              });
        };
    },
    6071: function (e, t, n) {
      "use strict";
      var r = n(3038),
        o = n(862);
      t.default = void 0;
      var a = o(n(7294)),
        i = n(1689),
        c = n(2441),
        s = n(5749),
        u = {};
      function l(e, t, n, r) {
        if (e && (0, i.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          u[t + "%" + n + (o ? "%" + o : "")] = !0;
        }
      }
      var f = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, c.useRouter)(),
          o = (n && n.pathname) || "/",
          f = a.default.useMemo(
            function () {
              var t = (0, i.resolveHref)(o, e.href, !0),
                n = r(t, 2),
                a = n[0],
                c = n[1];
              return {
                href: a,
                as: e.as ? (0, i.resolveHref)(o, e.as) : c || a,
              };
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          m = e.children,
          h = e.replace,
          v = e.shallow,
          y = e.scroll,
          g = e.locale;
        "string" === typeof m && (m = a.default.createElement("a", null, m));
        var x = a.Children.only(m),
          b = x && "object" === typeof x && x.ref,
          j = (0, s.useIntersection)({ rootMargin: "200px" }),
          w = r(j, 2),
          O = w[0],
          _ = w[1],
          k = a.default.useCallback(
            function (e) {
              O(e),
                b &&
                  ("function" === typeof b
                    ? b(e)
                    : "object" === typeof b && (b.current = e));
            },
            [b, O]
          );
        (0, a.useEffect)(
          function () {
            var e = _ && t && (0, i.isLocalURL)(d),
              r = "undefined" !== typeof g ? g : n && n.locale,
              o = u[d + "%" + p + (r ? "%" + r : "")];
            e && !o && l(n, d, p, { locale: r });
          },
          [p, d, _, g, t, n]
        );
        var M = {
          ref: k,
          onClick: function (e) {
            x.props &&
              "function" === typeof x.props.onClick &&
              x.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, o, a, c, s) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, i.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == c && (c = r.indexOf("#") < 0),
                    t[o ? "replace" : "push"](n, r, {
                      shallow: a,
                      locale: s,
                      scroll: c,
                    }));
                })(e, n, d, p, h, v, y, g);
          },
          onMouseEnter: function (e) {
            (0, i.isLocalURL)(d) &&
              (x.props &&
                "function" === typeof x.props.onMouseEnter &&
                x.props.onMouseEnter(e),
              l(n, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === x.type && !("href" in x.props))) {
          var P = "undefined" !== typeof g ? g : n && n.locale,
            C =
              n &&
              n.isLocaleDomain &&
              (0, i.getDomainLocale)(
                p,
                P,
                n && n.locales,
                n && n.domainLocales
              );
          M.href =
            C ||
            (0, i.addBasePath)((0, i.addLocale)(p, P, n && n.defaultLocale));
        }
        return a.default.cloneElement(x, M);
      };
      t.default = f;
    },
    5749: function (e, t, n) {
      "use strict";
      var r = n(3038);
      (t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !i,
            s = (0, o.useRef)(),
            u = (0, o.useState)(!1),
            l = r(u, 2),
            f = l[0],
            d = l[1],
            p = (0, o.useCallback)(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                    f ||
                    (e &&
                      e.tagName &&
                      (s.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || "",
                              n = c.get(t);
                            if (n) return n;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && n && t(n);
                                });
                              }, e);
                            return (
                              c.set(
                                t,
                                (n = { id: t, observer: o, elements: r })
                              ),
                              n
                            );
                          })(n),
                          o = r.id,
                          a = r.observer,
                          i = r.elements;
                        return (
                          i.set(e, t),
                          a.observe(e),
                          function () {
                            i.delete(e),
                              a.unobserve(e),
                              0 === i.size && (a.disconnect(), c.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: t }
                      )));
              },
              [n, t, f]
            );
          return (
            (0, o.useEffect)(
              function () {
                if (!i && !f) {
                  var e = (0, a.requestIdleCallback)(function () {
                    return d(!0);
                  });
                  return function () {
                    return (0, a.cancelIdleCallback)(e);
                  };
                }
              },
              [f]
            ),
            [p, f]
          );
        });
      var o = n(7294),
        a = n(8391),
        i = "undefined" !== typeof IntersectionObserver;
      var c = new Map();
    },
    3367: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    7845: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r },
        a = n(3367);
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
      }
    },
    4287: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = (
        (r = n(7294)) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    7947: function (e, t, n) {
      "use strict";
      var r = n(9713);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var a,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(7294)),
        c = (a = n(617)) && a.__esModule ? a : { default: a },
        s = n(3367),
        u = n(4287),
        l = n(7845);
      function f() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var m = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var n = i.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(p, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var c = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(c) ? (a = !1) : e.add(c);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var s = 0, u = m.length; s < u; s++) {
                      var l = m[s];
                      if (o.props.hasOwnProperty(l))
                        if ("charSet" === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var f = o.props[l],
                            d = r[l] || new Set();
                          ("name" === l && i) || !d.has(f)
                            ? (d.add(f), (r[l] = d))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var a = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              ["https://fonts.googleapis.com/css"].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var c = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (c["data-href"] = c.href),
                (c.href = void 0),
                i.default.cloneElement(e, c)
              );
            }
            return i.default.cloneElement(e, { key: a });
          });
      }
      function v(e) {
        var t = e.children,
          n = (0, i.useContext)(s.AmpStateContext),
          r = (0, i.useContext)(u.HeadManagerContext);
        return i.default.createElement(
          c.default,
          {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        );
      }
      v.rewind = function () {};
      var y = v;
      t.default = y;
    },
    617: function (e, t, n) {
      "use strict";
      var r = n(319),
        o = n(4575),
        a = n(3913),
        i = (n(1506), n(2205)),
        c = n(8585),
        s = n(9754);
      function u(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n(7294),
        f = (function (e) {
          i(n, e);
          var t = u(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(l.Component);
      t.default = f;
    },
    2351: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(5893);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n(7297);
      var a = n(9008),
        i = n(1664),
        c = n(6208),
        s = n(2434),
        u = function () {
          var e = "Taral",
            t = "https://github.io/taral",
            n =
              "TARAL is eliminating the friction, costs and time normally associated with trade finance.";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(a.default, {
                children: [
                  (0, r.jsx)("title", { children: e }),
                  (0, r.jsx)("link", {
                    rel: "shortcut icon",
                    href: "/favicon.ico",
                  }),
                  (0, r.jsx)("meta", {
                    name: "msapplication-TileColor",
                    content: "#da532c",
                  }),
                  (0, r.jsx)("meta", {
                    name: "theme-color",
                    content: "#ffffff",
                  }),
                  (0, r.jsx)("meta", { name: "description", content: n }),
                  (0, r.jsx)("meta", {
                    name: "keywords",
                    content:
                      "taral, stacks, cryptocurrency, blockchain, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp",
                  }),
                  (0, r.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, r.jsx)("meta", {
                    name: "twitter:site",
                    content: "@taral",
                  }),
                  (0, r.jsx)("meta", { name: "twitter:title", content: e }),
                  (0, r.jsx)("meta", {
                    name: "twitter:description",
                    content: n,
                  }),
                  (0, r.jsx)("meta", {
                    name: "twitter:img:src",
                    content: "".concat(t, "/social-card.png"),
                  }),
                  (0, r.jsx)("meta", { name: "og:title", content: e }),
                  (0, r.jsx)("meta", { name: "og:type", content: "website" }),
                  (0, r.jsx)("meta", { name: "og:url", content: t }),
                  (0, r.jsx)("meta", {
                    name: "og:image",
                    content: "".concat(t, "/social-card.png"),
                  }),
                  (0, r.jsx)("meta", { name: "og:description", content: n }),
                  (0, r.jsx)("meta", { name: "og:site_name", content: e }),
                  (0, r.jsx)("meta", {
                    name: "fb:admins",
                    content: "<TARAL_FACEBOOK_ID>",
                  }),
                ],
              }),
              (0, r.jsxs)("header", {
                className:
                  "sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-white md:py-6 ",
                children: [
                  (0, r.jsx)("div", {
                    className: "absolute inset-0 shadow-lg opacity-50",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "z-20 flex justify-around w-full sm:pr-10 md:pr-20",
                    children: (0, r.jsx)(s.Fg, {
                      href: c.Kd,
                      type: s.RQ.HeaderLink,
                      external: !0,
                      children: "GitHub",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "z-20 flex",
                    children: (0, r.jsx)("div", {
                      className: "w-16 mx-6 sm:w-20 md:w-28",
                      children: (0, r.jsx)(i.default, {
                        href: "/",
                        children: (0, r.jsx)("img", {
                          className: "cursor-pointer object-fit",
                          src: "logo.png",
                          alt: "logo",
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "z-20 flex justify-around w-full sm:pl-10 md:pl-20",
                    children: (0, r.jsx)(s.Fg, {
                      href: c.qk,
                      type: s.RQ.HeaderLink,
                      external: !0,
                      children: "Docs",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        l = function () {
          return (0, r.jsx)("footer", {
            className: "flex justify-center mt-24 mb-16 sm:mt-32",
            children: (0, r.jsxs)("div", {
              className:
                "flex flex-col space-y-6 sm:space-y-0 sm:space-x-20 sm:flex-row",
              children: [
                (0, r.jsx)(f, {
                  name: "Discord",
                  iconPath: "/discord.svg",
                  href: c.Vs,
                }),
                (0, r.jsx)(f, {
                  name: "Twitter",
                  iconPath: "/twitter.svg",
                  href: c.N$,
                }),
                (0, r.jsx)(f, {
                  name: "GitHub",
                  iconPath: "/github.svg",
                  href: c.Kd,
                }),
                (0, r.jsx)(f, {
                  name: "Support",
                  iconPath: "/mail.svg",
                  href: "/support",
                }),
              ],
            }),
          });
        },
        f = function (e) {
          var t = e.name,
            n = e.iconPath,
            o = e.href;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(s.Fg, {
              href: o,
              type: s.RQ.FooterLink,
              external: !0,
              children: (0, r.jsxs)("div", {
                className: "flex",
                children: [
                  (0, r.jsx)("img", {
                    className: "w-6 sm:w-8",
                    src: n,
                    alt: t,
                  }),
                  (0, r.jsx)("p", { className: "ml-2", children: t }),
                ],
              }),
            }),
          });
        },
        d = function (e) {
          var t = e.children;
          return (0, r.jsxs)("div", {
            className: "font-roboto",
            id: "content",
            children: [(0, r.jsx)(u, {}), t, (0, r.jsx)(l, {})],
          });
        };
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var h = function (e) {
        var t = e.Component,
          n = e.pageProps;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(d, { children: (0, r.jsx)(t, m({}, n)) }),
        });
      };
    },
    6363: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(2351);
        },
      ]);
    },
    7297: function () {},
    9008: function (e, t, n) {
      e.exports = n(7947);
    },
    1664: function (e, t, n) {
      e.exports = n(6071);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 351], function () {
      return t(6363), t(2441);
    });
    var n = e.O();
    _N_E = n;
  },
]);
