(this.webpackJsonpprojects = this.webpackJsonpprojects || []).push([
  [0],
  {
    10: function (e, a, t) {},
    11: function (e, a, t) {
      "use strict";
      t.r(a);
      var c = t(0),
        s = t(1),
        r = t.n(s),
        n = t(4),
        i = t.n(n);
      var j = function () {
          return Object(c.jsx)("header", {
            children: Object(c.jsx)("div", {
              className: "container",
              children: Object(c.jsxs)("nav", {
                className: "nav",
                children: [
                  Object(c.jsx)("h1", {
                    className: "header",
                    children: "Moviez App",
                  }),
                  Object(c.jsx)("a", {
                    href: "https://github.com/suyashpradhan/movie-search-app",
                    rel: "noreferrer",
                    target: "_blank",
                    children: Object(c.jsx)("i", {
                      className: "fab fa-github icon",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        d = t(2),
        l = t.p + "static/media/no-picture.80fd9fcf.jpg";
      var o = function (e) {
          return Object(c.jsxs)("div", {
            className: "card",
            children: [
              Object(c.jsx)("div", {
                className: "left-card",
                children: e.renderedData.poster_path
                  ? Object(c.jsx)("img", {
                      src: "https://image.tmdb.org/t/p/original/".concat(
                        e.renderedData.poster_path
                      ),
                      alt: e.renderedData.title,
                      className: "poster",
                    })
                  : Object(c.jsx)("img", {
                      src: l,
                      alt: e.renderedData.title,
                      className: "poster",
                    }),
              }),
              Object(c.jsxs)("div", {
                className: "right-card",
                children: [
                  Object(c.jsxs)("div", {
                    className: "right-card-inner",
                    children: [
                      Object(c.jsx)("h1", {
                        className: "title",
                        children: e.renderedData.original_title,
                      }),
                      Object(c.jsxs)("span", {
                        className: "vote",
                        children: [
                          Object(c.jsx)("i", {
                            className: "fas fa-star fa-fw fa-1x star-icon",
                          }),
                          e.renderedData.vote_average,
                        ],
                      }),
                      Object(c.jsx)("span", {
                        className: "lang",
                        children: e.renderedData.original_language,
                      }),
                    ],
                  }),
                  Object(c.jsx)("h2", {
                    className: "release-date",
                    children: e.renderedData.release_date,
                  }),
                  Object(c.jsx)("p", {
                    className: "overview",
                    children: e.renderedData.overview.substring(0, 200) + "...",
                  }),
                ],
              }),
            ],
          });
        },
        b = t.p + "static/media/banner.1a56dc51.svg";
      var h = function () {
        return Object(c.jsx)("div", {
          className: "container",
          children: Object(c.jsx)("img", {
            src: b,
            className: "banner",
            alt: "banner",
          }),
        });
      };
      var m = function () {
        var e = Object(s.useState)(""),
          a = Object(d.a)(e, 2),
          t = a[0],
          r = a[1],
          n = Object(s.useState)([]),
          i = Object(d.a)(n, 2),
          j = i[0],
          l = i[1],
          b = Object(s.useState)(""),
          m = Object(d.a)(b, 2),
          u =
            (m[0],
            m[1],
            "https://api.themoviedb.org/3/search/movie?api_key=20b3557e9e2b3e74919ce30cdada1468&language=en-US&query=".concat(
              t
            ));
        return Object(c.jsxs)("div", {
          className: "container",
          children: [
            Object(c.jsx)("section", {
              className: "section",
              children: Object(c.jsxs)("form", {
                onSubmit: function (e) {
                  e.preventDefault(),
                    fetch(u).then(function (e) {
                      e.json().then(function (e) {
                        l(e.results);
                      });
                    }),
                    r("");
                },
                children: [
                  Object(c.jsxs)("div", {
                    className: "form-group",
                    children: [
                      Object(c.jsx)("input", {
                        className: "field",
                        placeholder: "Enter movie name...",
                        name: "movie",
                        value: t,
                        onChange: function (e) {
                          return r(e.target.value);
                        },
                      }),
                      Object(c.jsx)("i", {
                        className: "fas fa-search search-icon",
                      }),
                    ],
                  }),
                  Object(c.jsx)("button", { children: "Search" }),
                ],
              }),
            }),
            0 === j.length
              ? Object(c.jsx)(h, {})
              : j.map(function (e, a) {
                  return Object(c.jsx)(o, { renderedData: e }, a);
                }),
          ],
        });
      };
      t(10);
      var u = function () {
        return Object(c.jsxs)(c.Fragment, {
          children: [Object(c.jsx)(j, {}), Object(c.jsx)(m, {})],
        });
      };
      i.a.render(
        Object(c.jsx)(r.a.StrictMode, { children: Object(c.jsx)(u, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.d6f794d0.chunk.js.map
