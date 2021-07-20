self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/ "./components/StyledLinks.tsx":
    /*!************************************!*\
  !*** ./components/StyledLinks.tsx ***!
  \************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Styled: function () {
          return /* binding */ Styled;
        },
        /* harmony export */ StyledLink: function () {
          return /* binding */ StyledLink;
        },
        /* harmony export */ StyledMailto: function () {
          return /* binding */ StyledMailto;
        },
        /* harmony export */ StyledIcon: function () {
          return /* binding */ StyledIcon;
        },
        /* harmony export */ InternalExternalLink: function () {
          return /* binding */ InternalExternalLink;
        },
        /* harmony export */
      });
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
        );
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
      /* module decorator */ module = __webpack_require__.hmd(module);

      var _jsxFileName = "C:\\biz\\taral-website\\components\\StyledLinks.tsx",
        _this = undefined;

      var Styled;

      (function (Styled) {
        Styled["HeaderLink"] =
          "font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl";
        Styled["FooterLink"] =
          "text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500";
        Styled["PageLink"] =
          "font-semibold text-blue-500 hover:text-cool-blue-600";
      })(Styled || (Styled = {}));

      var StyledLink = function StyledLink(_ref) {
        var type = _ref.type,
          href = _ref.href,
          children = _ref.children,
          _ref$external = _ref.external,
          external = _ref$external === void 0 ? false : _ref$external;
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          InternalExternalLink,
          {
            href: href,
            external: external,
            tailwindStyles: type,
            children: [" ", children, " "],
          },
          void 0,
          true,
          {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 3,
          },
          _this
        );
      };
      _c = StyledLink;
      var StyledMailto = function StyledMailto(_ref2) {
        var email = _ref2.email,
          children = _ref2.children,
          tailwindStyles = _ref2.tailwindStyles;
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          "a",
          {
            className: tailwindStyles,
            target: "_blank",
            href: "mailto:".concat(email),
            onClick: function onClick(e) {
              window.location = "mailto:".concat(email);
              e.preventDefault();
            },
            rel: "noopener noreferrer",
            children: children,
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 5,
          },
          _this
        );
      };
      _c2 = StyledMailto;
      var StyledIcon = function StyledIcon(_ref3) {
        var iconPath = _ref3.iconPath,
          href = _ref3.href,
          styles = _ref3.styles,
          altText = _ref3.altText;
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          InternalExternalLink,
          {
            href: href,
            external: true,
            children: /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
              "img",
              {
                className: "filter-grayscale hover:filter-none ".concat(styles),
                alt: altText,
                src: iconPath,
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 5,
              },
              _this
            ),
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 3,
          },
          _this
        );
      };
      _c3 = StyledIcon;
      var InternalExternalLink = function InternalExternalLink(_ref4) {
        var children = _ref4.children,
          href = _ref4.href,
          tailwindStyles = _ref4.tailwindStyles,
          _ref4$external = _ref4.external,
          external = _ref4$external === void 0 ? false : _ref4$external;
        if (!external)
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            next_link__WEBPACK_IMPORTED_MODULE_1___default(),
            {
              href: href,
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                "a",
                {
                  className: tailwindStyles,
                  children: children,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 7,
                },
                _this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 5,
            },
            _this
          );
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          "a",
          {
            className: tailwindStyles,
            target: "_blank",
            href: href,
            rel: "noopener noreferrer",
            children: children,
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 5,
          },
          _this
        );
      };
      _c4 = InternalExternalLink;

      var _c, _c2, _c3, _c4;

      $RefreshReg$(_c, "StyledLink");
      $RefreshReg$(_c2, "StyledMailto");
      $RefreshReg$(_c3, "StyledIcon");
      $RefreshReg$(_c4, "InternalExternalLink");

      var _a, _b;
      // Legacy CSS implementations will `eval` browser code in a Node.js context
      // to extract CSS. For backwards compatibility, we need to check we're in a
      // browser context before continuing.
      if (
        typeof self !== "undefined" &&
        // AMP / No-JS mode does not inject these helpers:
        "$RefreshHelpers$" in self
      ) {
        var currentExports = module.__proto__.exports;
        var prevExports =
          (_b =
            (_a = module.hot.data) === null || _a === void 0
              ? void 0
              : _a.prevExports) !== null && _b !== void 0
            ? _b
            : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(
          currentExports,
          module.id
        );
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
          // Save the previous exports on update so we can compare the boundary
          // signatures.
          module.hot.dispose(function (data) {
            data.prevExports = currentExports;
          });
          // Unconditionally accept an update to this module, we'll check if it's
          // still a Refresh Boundary later.
          module.hot.accept();
          // This field is set when the previous version of this module was a
          // Refresh Boundary, letting us know we need to check for invalidation or
          // enqueue an update.
          if (prevExports !== null) {
            // A boundary can become ineligible if its exports are incompatible
            // with the previous exports.
            //
            // For example, if you add/remove/change exports, we'll want to
            // re-execute the importing modules, and force those components to
            // re-render. Similarly, if you convert a class component to a
            // function, we want to invalidate the boundary.
            if (
              self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                prevExports,
                currentExports
              )
            ) {
              module.hot.invalidate();
            } else {
              self.$RefreshHelpers$.scheduleUpdate();
            }
          }
        } else {
          // Since we just executed the code for the module, it's possible that the
          // new exports made it ineligible for being a boundary.
          // We only care about the case when we were _previously_ a boundary,
          // because we already accepted this update (accidental side effect).
          var isNoLongerABoundary = prevExports !== null;
          if (isNoLongerABoundary) {
            module.hot.invalidate();
          }
        }
      }

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdHlsZWRMaW5rcy50c3giXSwibmFtZXMiOlsiU3R5bGVkIiwiU3R5bGVkTGluayIsInR5cGUiLCJocmVmIiwiY2hpbGRyZW4iLCJleHRlcm5hbCIsIlN0eWxlZE1haWx0byIsImVtYWlsIiwidGFpbHdpbmRTdHlsZXMiLCJlIiwid2luZG93IiwibG9jYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0eWxlZEljb24iLCJpY29uUGF0aCIsInN0eWxlcyIsImFsdFRleHQiLCJJbnRlcm5hbEV4dGVybmFsTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpQk8sSUFBS0EsTUFBWjs7V0FBWUEsTTtBQUFBQSxRO0FBQUFBLFE7QUFBQUEsUTtHQUFBQSxNLEtBQUFBLE07O0FBT0wsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxNQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSwyQkFBeUJDLFFBQXpCO0FBQUEsTUFBeUJBLFFBQXpCLDhCQUFvQyxLQUFwQztBQUFBLHNCQUN4Qiw4REFBQyxvQkFBRDtBQUNFLFFBQUksRUFBRUYsSUFEUjtBQUVFLFlBQVEsRUFBRUUsUUFGWjtBQUdFLGtCQUFjLEVBQUVILElBSGxCO0FBQUEsZUFLRyxHQUxILEVBS1FFLFFBTFIsRUFLa0IsR0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHdCO0FBQUEsQ0FBbkI7S0FBTUgsVTtBQVVOLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWdFO0FBQUEsTUFBN0RDLEtBQTZELFNBQTdEQSxLQUE2RDtBQUFBLE1BQXRESCxRQUFzRCxTQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q0ksY0FBNEMsU0FBNUNBLGNBQTRDO0FBQzFGLHNCQUNFO0FBQUcsYUFBUyxFQUFFQSxjQUFkO0FBQThCLFVBQU0sRUFBQyxRQUFyQztBQUE4QyxRQUFJLG1CQUFZRCxLQUFaLENBQWxEO0FBQ0UsV0FBTyxFQUFFLGlCQUFDRSxDQUFELEVBQU87QUFDZEMsWUFBTSxDQUFDQyxRQUFQLG9CQUE0QkosS0FBNUI7QUFDQUUsT0FBQyxDQUFDRyxjQUFGO0FBQ0QsS0FKSDtBQUtFLE9BQUcsRUFBQyxxQkFMTjtBQUFBLGNBTUdSO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYTTtNQUFNRSxZO0FBcUJOLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYVgsSUFBYixTQUFhQSxJQUFiO0FBQUEsTUFBbUJZLE1BQW5CLFNBQW1CQSxNQUFuQjtBQUFBLE1BQTJCQyxPQUEzQixTQUEyQkEsT0FBM0I7QUFBQSxzQkFDeEIsOERBQUMsb0JBQUQ7QUFDRSxRQUFJLEVBQUViLElBRFI7QUFFRSxZQUFRLE1BRlY7QUFBQSwyQkFJRTtBQUNFLGVBQVMsK0NBQXdDWSxNQUF4QyxDQURYO0FBRUUsU0FBRyxFQUFFQyxPQUZQO0FBR0UsU0FBRyxFQUFFRjtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHdCO0FBQUEsQ0FBbkI7TUFBTUQsVTtBQXFCTixJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLFFBQTJFO0FBQUEsTUFBeEViLFFBQXdFLFNBQXhFQSxRQUF3RTtBQUFBLE1BQTlERCxJQUE4RCxTQUE5REEsSUFBOEQ7QUFBQSxNQUF4REssY0FBd0QsU0FBeERBLGNBQXdEO0FBQUEsNkJBQXhDSCxRQUF3QztBQUFBLE1BQXhDQSxRQUF3QywrQkFBN0IsS0FBNkI7QUFFN0csTUFBSSxDQUFDQSxRQUFMLEVBQWUsb0JBQ2IsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUVGLElBQVo7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUssY0FBZDtBQUFBLGdCQUNHSjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGE7QUFRZixzQkFDRTtBQUFHLGFBQVMsRUFBRUksY0FBZDtBQUE4QixVQUFNLEVBQUMsUUFBckM7QUFBOEMsUUFBSSxFQUFFTCxJQUFwRDtBQUEwRCxPQUFHLEVBQUMscUJBQTlEO0FBQUEsY0FDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWZNO01BQU1hLG9CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDVkMDA2NWMwZGUwMTU5MmQ0ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRMaW5rUHJvcHMgPSB7XHJcbiAgdHlwZTogU3R5bGVkO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGV4dGVybmFsPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVkTWFpbHRvTGlua1Byb3BzID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB0YWlsd2luZFN0eWxlcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFN0eWxlZCB7XHJcbiAgSGVhZGVyTGluayA9ICdmb250LXNlbWlib2xkIHRleHQtY29vbC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWNvb2wtZ3JheS02MDAgc206dGV4dC14bCcsXHJcbiAgRm9vdGVyTGluayA9ICd0ZXh0LXNtIGZvbnQtbWVkaXVtIHNtOnRleHQtbGcgdGV4dC1jb29sLWdyYXktNjAwIGdyb3VwLWhvdmVyOnRleHQtY29vbC1ncmF5LTUwMCcsXHJcbiAgUGFnZUxpbmsgPSAnZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtY29vbC1ibHVlLTYwMCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gKHsgdHlwZSwgaHJlZiwgY2hpbGRyZW4sIGV4dGVybmFsID0gZmFsc2UgfTogU3R5bGVkTGlua1Byb3BzKSA9PiAoXHJcbiAgPEludGVybmFsRXh0ZXJuYWxMaW5rXHJcbiAgICBocmVmPXtocmVmfVxyXG4gICAgZXh0ZXJuYWw9e2V4dGVybmFsfVxyXG4gICAgdGFpbHdpbmRTdHlsZXM9e3R5cGV9XHJcbiAgPlxyXG4gICAgeycgJ317Y2hpbGRyZW59eycgJ31cclxuICA8L0ludGVybmFsRXh0ZXJuYWxMaW5rPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFpbHRvID0gKHsgZW1haWwsIGNoaWxkcmVuLCB0YWlsd2luZFN0eWxlcyB9OiBTdHlsZWRNYWlsdG9MaW5rUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXt0YWlsd2luZFN0eWxlc30gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYG1haWx0bzoke2VtYWlsfWAgYXMgYW55O1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfX1cclxuICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRJY29uUHJvcHMgPSB7XHJcbiAgYWx0VGV4dDogc3RyaW5nO1xyXG4gIGljb25QYXRoOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJY29uID0gKHsgaWNvblBhdGgsIGhyZWYsIHN0eWxlcywgYWx0VGV4dCB9OiBTdHlsZWRJY29uUHJvcHMpID0+IChcclxuICA8SW50ZXJuYWxFeHRlcm5hbExpbmtcclxuICAgIGhyZWY9e2hyZWZ9XHJcbiAgICBleHRlcm5hbFxyXG4gID5cclxuICAgIDxpbWdcclxuICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyLWdyYXlzY2FsZSBob3ZlcjpmaWx0ZXItbm9uZSAke3N0eWxlc31gfVxyXG4gICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgIHNyYz17aWNvblBhdGh9XHJcbiAgICAvPlxyXG4gIDwvSW50ZXJuYWxFeHRlcm5hbExpbms+XHJcbilcclxuXHJcbmV4cG9ydCB0eXBlIEludEV4dExpbmtQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogYW55O1xyXG4gIGhyZWY6IHN0cmluZztcclxuICB0YWlsd2luZFN0eWxlcz86IHN0cmluZztcclxuICBleHRlcm5hbD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJuYWxFeHRlcm5hbExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiwgdGFpbHdpbmRTdHlsZXMsIGV4dGVybmFsID0gZmFsc2UgfTogSW50RXh0TGlua1Byb3BzKSA9PiB7XHJcblxyXG4gIGlmICghZXh0ZXJuYWwpIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXt0YWlsd2luZFN0eWxlc30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXt0YWlsd2luZFN0eWxlc30gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aHJlZn0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
