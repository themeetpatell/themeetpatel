(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, a, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(6889);
        },
      ]);
    },
    1840: function (e, a, s) {
      "use strict";
      var i = s(5893),
        l = s(1664),
        t = s.n(l),
        n = s(5491),
        r = s(3762),
        c = s(9317);
      let d = (e) => {
        let { openClass: a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: "sidebar",
            children: [
              (0, i.jsxs)("div", {
                className: "box-sidebar bg-gray-850 border-gray-800",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "head-sidebar wow animate__animated animate__fadeIn",
                    children: (0, i.jsx)("h5", {
                      className: "line-bottom",
                      children: "Popular Posts",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "content-sidebar",
                    children: (0, i.jsx)("div", {
                      className: "list-posts",
                      children: n.Z.slice(0, 5).map((e, a) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "item-post wow animate__animated animate__fadeIn",
                            "data-wow-delay": "".concat(a / 10, "s"),
                            children: [
                              (0, i.jsx)("div", {
                                className: "image-post",
                                children: (0, i.jsx)(t(), {
                                  href: "/blog/".concat(e.id),
                                  children: (0, i.jsx)("img", {
                                    src: "/assets/imgs/page/healthy/".concat(
                                      e.img
                                    ),
                                    alt: "Genz",
                                  }),
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "info-post border-gray-800",
                                children: [
                                  (0, i.jsx)(t(), {
                                    href: "/blog/".concat(e.id),
                                    children: (0, i.jsx)("h6", {
                                      className: "color-white",
                                      children: e.title,
                                    }),
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: "color-gray-700",
                                    children: [e.duration, " mins read"],
                                  }),
                                  (0, i.jsx)("ul", {
                                    className: "d-inline-block",
                                    children: (0, i.jsx)("li", {
                                      className: "color-gray-700",
                                      children: e.date,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          a
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "box-sidebar bg-gray-850 border-gray-800",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "head-sidebar wow animate__animated animate__fadeIn",
                    children: (0, i.jsx)("h5", {
                      className: "line-bottom",
                      children: "Last Comment",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "content-sidebar",
                    children: (0, i.jsx)("div", {
                      className: "list-comments",
                      children: r.Z.slice(0, 3).map((e, a) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "item-comment border-gray-800 wow animate__animated animate__fadeIn",
                            "data-wow-delay": "".concat(a / 10, "s"),
                            children: [
                              (0, i.jsxs)("p", {
                                className: "color-gray-500 mb-20",
                                children: ["“", e.content, "“"],
                              }),
                              (0, i.jsxs)("div", {
                                className: "box-author-small",
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "/assets/imgs/page/homepage1/".concat(
                                      e.authorAvata
                                    ),
                                    alt: "Genz",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "author-info",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className:
                                          "d-block color-gray-700 text-sm",
                                        children: e.authorName,
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "color-gray-700 text-xs",
                                        children: e.date,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          a
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "box-sidebar bg-gray-850 border-gray-800",
                children: [
                  (0, i.jsxs)("div", {
                    className: "head-sidebar",
                    children: [
                      (0, i.jsx)(t(), {
                        href: "/",
                        children: (0, i.jsx)("img", {
                          src: "assets/imgs/template/logo.svg",
                          alt: "Genz",
                        }),
                      }),
                      (0, i.jsx)("h6", {
                        className: "color-gray-700",
                        children: "Follow us on instagram",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "content-sidebar",
                    children: (0, i.jsx)("div", {
                      className: "row mt-30 mb-10",
                      children: c.Z.slice(0, 9).map((e, a) =>
                        (0, i.jsx)(
                          "div",
                          {
                            className:
                              "col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn",
                            "data-wow-delay": "".concat(a / 10, "s"),
                            children: (0, i.jsx)(t(), {
                              href: "".concat(e.link),
                              children: (0, i.jsx)("img", {
                                className: "bdrd-8",
                                src: "/assets/imgs/page/homepage1/".concat(
                                  e.img
                                ),
                                alt: "Genz",
                              }),
                            }),
                          },
                          a
                        )
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      a.Z = d;
    },
    6889: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return w;
          },
        });
      var i = s(5893),
        l = s(9008),
        t = s.n(l),
        n = s(794),
        r = s(5459),
        c = s.n(r);
      let d = () =>
        (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: "banner",
            children: (0, i.jsxs)("div", {
              className: "row align-items-end",
              children: [
                (0, i.jsxs)("div", {
                  className: "col-lg-6 pt-100",
                  children: [
                    (0, i.jsx)("span", {
                      className:
                        "text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp",
                      children: "Hello Everyone!",
                    }),
                    (0, i.jsxs)("h2", {
                      className:
                        "color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp",
                      children: [
                        "I’m",
                        (0, i.jsx)(c(), {
                          options: {
                            wrapperClassName: "typewrite color-linear",
                            strings: ["The Meet Patel", "Head of Strategy", "Chief of Staff", "Writer", "Astrologer", "Pyschologist", "Business Strategist", "Product Manager"],
                            autoStart: !0,
                            loop: !0,
                          },
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "row",
                      children: (0, i.jsx)("div", {
                        className: "col-lg-9",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-base color-gray-600 wow animate__animated animate__fadeInUp",
                          children:
                            "A part business mind, part startup therapist, Writer & Strategist, and full-time pßroblem-solver. Whether you’re looking to grow your business or figure out why Slack notifications are eating your soul, I’m here to help.",
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp",
                      children: (0, i.jsx)("div", {
                        className: "inner-subscriber bg-gray-800",
                        children: (0, i.jsxs)("form", {
                          className: "d-flex",
                          action: "#",
                          children: [
                            (0, i.jsx)("input", {
                              className: "input-sybscriber",
                              type: "text",
                              placeholder: "Type your email address",
                            }),
                            (0, i.jsxs)("button", {
                              className: "btn btn-linear btn-arrow-right",
                              children: [
                                "Subscribe",
                                (0, i.jsx)("i", {
                                  className: "fi-rr-arrow-small-right",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "col-lg-6 text-center",
                  children: (0, i.jsxs)("div", {
                    className:
                      "banner-img position-relative wow animate__animated animate__fadeIn",
                    children: [
                      (0, i.jsx)("img", {
                        src: "assets/imgs/page/homepage1/banner.png",
                        alt: "Genz",
                      }),
                      (0, i.jsx)("div", {
                        className: "pattern-1",
                        children: (0, i.jsx)("img", {
                          src: "assets/imgs/template/pattern-1.svg",
                          alt: "Genz",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "pattern-2",
                        children: (0, i.jsx)("img", {
                          src: "assets/imgs/template/pattern-2.svg",
                          alt: "Genz",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "pattern-3",
                        children: (0, i.jsx)("img", {
                          src: "assets/imgs/template/pattern-3.svg",
                          alt: "Genz",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "pattern-4",
                        children: (0, i.jsx)("img", {
                          src: "assets/imgs/template/pattern-4.svg",
                          alt: "Genz",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      var o = s(850),
        m = s(5951),
        h = s(1664),
        g = s.n(h),
        x = s(5491);
      let p = () =>
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("h2", {
              className: "color-linear d-inline-block mb-10",
              children: "Recent posts",
            }),
            (0, i.jsx)("p", {
              className: "text-lg color-gray-500",
              children: "Don't miss the latest trends",
            }),
            (0, i.jsx)("div", {
              className: "box-list-posts mt-70",
              children: x.Z.slice(1, 6).map((e, a) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className:
                      "card-list-posts wow animate__animated animate__fadeIn",
                    "data-wow-delay": "".concat(a / 10, "s"),
                    children: [
                      (0, i.jsx)("div", {
                        className: "card-image hover-up",
                        children: (0, i.jsx)(g(), {
                          href: "/blog/".concat(e.id),
                          children: (0, i.jsx)("img", {
                            src: "/assets/imgs/page/healthy/".concat(e.img),
                            alt: "Genz",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card-info",
                        children: [
                          (0, i.jsx)(g(), {
                            className: "btn btn-tag bg-gray-800 hover-up",
                            href: "/blog/".concat(e.id),
                            children: e.category,
                          }),
                          (0, i.jsx)(g(), {
                            href: "/blog/".concat(e.id),
                            children: (0, i.jsx)("h4", {
                              className: "mt-15 mb-20 color-white",
                              children: e.title,
                            }),
                          }),
                          (0, i.jsx)("p", {
                            className: "color-gray-500",
                            children: e.excerpt,
                          }),
                          (0, i.jsxs)("div", {
                            className: "row mt-20",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-7",
                                children: e.tags
                                  ? e.tags.map((e) =>
                                      (0, i.jsxs)(
                                        g(),
                                        {
                                          className:
                                            "color-gray-700 text-sm mr-15",
                                          href: "/blog-archive",
                                          children: ["# ", e],
                                        },
                                        e
                                      )
                                    )
                                  : "",
                              }),
                              (0, i.jsx)("div", {
                                className: "col-5 text-end",
                                children: (0, i.jsxs)("span", {
                                  className: "color-gray-700 text-sm timeread",
                                  children: [e.duration, " mins read"],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
          ],
        });
      var j = s(1840);
      s(7294);
      var u = s(965),
        N = s(719),
        v = s(3359);
      u.ZP.use([u.pt, u.W_]);
      let b = () =>
        (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: "mb-70",
            children: (0, i.jsx)("div", {
              className: "box-topics border-gray-800 bg-gray-850",
              children: (0, i.jsxs)("div", {
                className: "row",
                children: [
                  (0, i.jsxs)("div", {
                    className: "col-lg-2",
                    children: [
                      (0, i.jsx)("h5", {
                        className:
                          "mb-15 color-white wow animate__animated animate__fadeInUp",
                        "data-wow-delay": "0s",
                        children: "Hot topics",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "color-gray-500 mb-20 wow animate__animated animate__fadeInUp",
                        "data-wow-delay": ".3s",
                        children:
                          "Don't miss out on the latest news about Travel tips, Hotels review, Food guide...",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "box-buttons-slider position-relative wow animate__animated animate__zoomIn",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "swiper-button-prev swiper-button-prev-style-1",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "swiper-button-next swiper-button-next-style-1",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "col-lg-10",
                    children: (0, i.jsx)("div", {
                      className: "box-swiper",
                      children: (0, i.jsx)("div", {
                        className: "swiper-container swiper-group-5",
                        children: (0, i.jsx)(N.tq, {
                          slidesPerView: 4,
                          spaceBetween: 30,
                          loop: !0,
                          autoplay: { delay: 2500, disableOnInteraction: !1 },
                          navigation: {
                            prevEl: ".swiper-button-prev-style-1",
                            nextEl: ".swiper-button-next-style-1",
                          },
                          breakpoints: {
                            320: { slidesPerView: 1, spaceBetween: 30 },
                            575: { slidesPerView: 1, spaceBetween: 30 },
                            767: { slidesPerView: 1, spaceBetween: 30 },
                            991: { slidesPerView: 2, spaceBetween: 30 },
                            1199: { slidesPerView: 3, spaceBetween: 30 },
                            1350: { slidesPerView: 4, spaceBetween: 30 },
                          },
                          className: "swiper-wrapper",
                          children: v.Z.map((e, a) =>
                            (0, i.jsx)(
                              N.o5,
                              {
                                className: "swiper-slide",
                                children: (0, i.jsx)("div", {
                                  className: "card-style-1",
                                  children: (0, i.jsx)(g(), {
                                    href: "/blog-archive",
                                    children: (0, i.jsxs)("div", {
                                      className: "card-image",
                                      children: [
                                        (0, i.jsx)("img", {
                                          src: "assets/imgs/page/categories/".concat(
                                            e.imgBig
                                          ),
                                          alt: "Genz",
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "card-info",
                                          children: (0, i.jsxs)("div", {
                                            className: "info-bottom",
                                            children: [
                                              (0, i.jsx)("h6", {
                                                className: "color-white mb-5",
                                                children: e.title,
                                              }),
                                              (0, i.jsxs)("p", {
                                                className:
                                                  "text-xs color-gray-500",
                                                children: [
                                                  " ",
                                                  e.postCount,
                                                  " Articles",
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              },
                              a
                            )
                          ),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      function w() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t(), {
              children: (0, i.jsx)("title", {
                children:
                  "The Meet Patel - The One & Only Piece",
              }),
            }),
            (0, i.jsx)(n.Z, {
              children: (0, i.jsx)("div", {
                className: "cover-home1",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", { className: "col-xl-1" }),
                      (0, i.jsxs)("div", {
                        className: "col-xl-10 col-lg-12",
                        children: [
                          (0, i.jsx)(d, {}),
                          (0, i.jsx)(b, {}),
                          (0, i.jsx)(o.Z, {}),
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsxs)("div", {
                            className: "row mt-70",
                            children: [
                              (0, i.jsx)("div", {
                                className: "col-lg-8",
                                children: (0, i.jsx)(p, {}),
                              }),
                              (0, i.jsx)("div", {
                                className: "col-lg-4",
                                children: (0, i.jsx)(j.Z, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    3762: function (e, a) {
      "use strict";
      a.Z = [
        {
          id: 1,
          content:
            "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far",
          authorName: "George Orwell",
          authorAvata: "author6.png",
          date: "17 April 2023",
        },
        {
          id: 2,
          content:
            "Nullam sit amet orci velit. Integer at rhoncus eros. Etiam vulputate eros quis gravida maximus. Pellentesque habitant morbi tristique senectus et netus et",
          authorName: "Maya Angelou",
          authorAvata: "author7.png",
          date: "25 April 2023",
        },
        {
          id: 3,
          content:
            "Morbi ligula nisi, finibus vel felis vitae, fringilla mollis leo. In pellentesque laoreet enim, tempor interdum est blandit a. Integer convallis et est et fringilla",
          authorName: "Toni Morrison",
          authorAvata: "author8.png",
          date: "05 May 2023",
        },
        {
          id: 4,
          content:
            "Vivamus tincidunt consectetur enim quis tincidunt. Duis eleifend dapibus elit sit amet tincidunt. Aliquam erat volutpat. Pellentesque risus ligula",
          authorName: "Agatha Christie",
          authorAvata: "author9.png",
          date: "26 May 2023",
        },
      ];
    },
    9317: function (e, a) {
      "use strict";
      a.Z = [
        { id: 1, img: "gallery.png", link: "#" },
        { id: 2, img: "gallery2.png", link: "#" },
        { id: 3, img: "gallery3.png", link: "#" },
        { id: 4, img: "gallery4.png", link: "#" },
        { id: 5, img: "gallery5.png", link: "#" },
        { id: 6, img: "gallery6.png", link: "#" },
        { id: 7, img: "gallery7.png", link: "#" },
        { id: 8, img: "gallery8.png", link: "#" },
        { id: 9, img: "gallery9.png", link: "#" },
      ];
    },
  },
  function (e) {
    e.O(0, [664, 717, 459, 794, 83, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
