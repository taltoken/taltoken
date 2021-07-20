self["webpackHotUpdate_N_E"]("pages/index", {
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
          children = _ref2.children;
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          "a",
          {
            className: tailwindStyles,
            target: "_blank",
            href: "mailto:".concat(email),
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

      var ButtonMailto = function ButtonMailto(_ref3) {
        var email = _ref3.email,
          label = _ref3.label;
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          next_link__WEBPACK_IMPORTED_MODULE_1___default(),
          {
            to: "#",
            onClick: function onClick(e) {
              window.location = mailto;
              e.preventDefault();
            },
            children: label,
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7,
          },
          _this
        );
      };

      _c3 = ButtonMailto;
      var StyledIcon = function StyledIcon(_ref4) {
        var iconPath = _ref4.iconPath,
          href = _ref4.href,
          styles = _ref4.styles,
          altText = _ref4.altText;
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
                lineNumber: 71,
                columnNumber: 5,
              },
              _this
            ),
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 3,
          },
          _this
        );
      };
      _c4 = StyledIcon;
      var InternalExternalLink = function InternalExternalLink(_ref5) {
        var children = _ref5.children,
          href = _ref5.href,
          tailwindStyles = _ref5.tailwindStyles,
          _ref5$external = _ref5.external,
          external = _ref5$external === void 0 ? false : _ref5$external;
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
                  lineNumber: 91,
                  columnNumber: 7,
                },
                _this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 90,
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
            lineNumber: 98,
            columnNumber: 5,
          },
          _this
        );
      };
      _c5 = InternalExternalLink;

      var _c, _c2, _c3, _c4, _c5;

      $RefreshReg$(_c, "StyledLink");
      $RefreshReg$(_c2, "StyledMailto");
      $RefreshReg$(_c3, "ButtonMailto");
      $RefreshReg$(_c4, "StyledIcon");
      $RefreshReg$(_c5, "InternalExternalLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdHlsZWRMaW5rcy50c3giXSwibmFtZXMiOlsiU3R5bGVkIiwiU3R5bGVkTGluayIsInR5cGUiLCJocmVmIiwiY2hpbGRyZW4iLCJleHRlcm5hbCIsIlN0eWxlZE1haWx0byIsImVtYWlsIiwidGFpbHdpbmRTdHlsZXMiLCJCdXR0b25NYWlsdG8iLCJsYWJlbCIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm1haWx0byIsInByZXZlbnREZWZhdWx0IiwiU3R5bGVkSWNvbiIsImljb25QYXRoIiwic3R5bGVzIiwiYWx0VGV4dCIsIkludGVybmFsRXh0ZXJuYWxMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCTyxJQUFLQSxNQUFaOztXQUFZQSxNO0FBQUFBLFE7QUFBQUEsUTtBQUFBQSxRO0dBQUFBLE0sS0FBQUEsTTs7QUFPTCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLDJCQUF5QkMsUUFBekI7QUFBQSxNQUF5QkEsUUFBekIsOEJBQW9DLEtBQXBDO0FBQUEsc0JBQ3hCLDhEQUFDLG9CQUFEO0FBQ0UsUUFBSSxFQUFFRixJQURSO0FBRUUsWUFBUSxFQUFFRSxRQUZaO0FBR0Usa0JBQWMsRUFBRUgsSUFIbEI7QUFBQSxlQUtHLEdBTEgsRUFLUUUsUUFMUixFQUtrQixHQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUFuQjtLQUFNSCxVO0FBVU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBZ0Q7QUFBQSxNQUE3Q0MsS0FBNkMsU0FBN0NBLEtBQTZDO0FBQUEsTUFBdENILFFBQXNDLFNBQXRDQSxRQUFzQztBQUMxRSxzQkFDRTtBQUFHLGFBQVMsRUFBRUksY0FBZDtBQUE4QixVQUFNLEVBQUMsUUFBckM7QUFBOEMsUUFBSSxtQkFBWUQsS0FBWixDQUFsRDtBQUF1RSxPQUFHLEVBQUMscUJBQTNFO0FBQUEsY0FDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5NO01BQU1FLFk7O0FBUWIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBc0I7QUFBQSxNQUFuQkYsS0FBbUIsU0FBbkJBLEtBQW1CO0FBQUEsTUFBWkcsS0FBWSxTQUFaQSxLQUFZO0FBQ3pDLHNCQUNJLDhEQUFDLGtEQUFEO0FBQ0ksTUFBRSxFQUFDLEdBRFA7QUFFSSxXQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNaQyxZQUFNLENBQUNDLFFBQVAsR0FBa0JDLE1BQWxCO0FBQ0FILE9BQUMsQ0FBQ0ksY0FBRjtBQUNILEtBTEw7QUFBQSxjQU9LTDtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdELENBWkQ7O01BQU1ELFk7QUF1QkMsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhZCxJQUFiLFNBQWFBLElBQWI7QUFBQSxNQUFtQmUsTUFBbkIsU0FBbUJBLE1BQW5CO0FBQUEsTUFBMkJDLE9BQTNCLFNBQTJCQSxPQUEzQjtBQUFBLHNCQUN4Qiw4REFBQyxvQkFBRDtBQUNFLFFBQUksRUFBRWhCLElBRFI7QUFFRSxZQUFRLE1BRlY7QUFBQSwyQkFJRTtBQUNFLGVBQVMsK0NBQXdDZSxNQUF4QyxDQURYO0FBRUUsU0FBRyxFQUFFQyxPQUZQO0FBR0UsU0FBRyxFQUFFRjtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHdCO0FBQUEsQ0FBbkI7TUFBTUQsVTtBQXFCTixJQUFNSSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLFFBQTJFO0FBQUEsTUFBeEVoQixRQUF3RSxTQUF4RUEsUUFBd0U7QUFBQSxNQUE5REQsSUFBOEQsU0FBOURBLElBQThEO0FBQUEsTUFBeERLLGNBQXdELFNBQXhEQSxjQUF3RDtBQUFBLDZCQUF4Q0gsUUFBd0M7QUFBQSxNQUF4Q0EsUUFBd0MsK0JBQTdCLEtBQTZCO0FBRTdHLE1BQUksQ0FBQ0EsUUFBTCxFQUFlLG9CQUNiLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFRixJQUFaO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVLLGNBQWQ7QUFBQSxnQkFDR0o7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBUWYsc0JBQ0U7QUFBRyxhQUFTLEVBQUVJLGNBQWQ7QUFBOEIsVUFBTSxFQUFDLFFBQXJDO0FBQThDLFFBQUksRUFBRUwsSUFBcEQ7QUFBMEQsT0FBRyxFQUFDLHFCQUE5RDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FmTTtNQUFNZ0Isb0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdmYjBmOWFiMmI3YTI0NjA3N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRMaW5rUHJvcHMgPSB7XHJcbiAgdHlwZTogU3R5bGVkO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGV4dGVybmFsPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVkTWFpbHRvTGlua1Byb3BzID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB0YWlsd2luZFN0eWxlcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFN0eWxlZCB7XHJcbiAgSGVhZGVyTGluayA9ICdmb250LXNlbWlib2xkIHRleHQtY29vbC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWNvb2wtZ3JheS02MDAgc206dGV4dC14bCcsXHJcbiAgRm9vdGVyTGluayA9ICd0ZXh0LXNtIGZvbnQtbWVkaXVtIHNtOnRleHQtbGcgdGV4dC1jb29sLWdyYXktNjAwIGdyb3VwLWhvdmVyOnRleHQtY29vbC1ncmF5LTUwMCcsXHJcbiAgUGFnZUxpbmsgPSAnZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtY29vbC1ibHVlLTYwMCdcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gKHsgdHlwZSwgaHJlZiwgY2hpbGRyZW4sIGV4dGVybmFsID0gZmFsc2UgfTogU3R5bGVkTGlua1Byb3BzKSA9PiAoXHJcbiAgPEludGVybmFsRXh0ZXJuYWxMaW5rXHJcbiAgICBocmVmPXtocmVmfVxyXG4gICAgZXh0ZXJuYWw9e2V4dGVybmFsfVxyXG4gICAgdGFpbHdpbmRTdHlsZXM9e3R5cGV9XHJcbiAgPlxyXG4gICAgeycgJ317Y2hpbGRyZW59eycgJ31cclxuICA8L0ludGVybmFsRXh0ZXJuYWxMaW5rPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTWFpbHRvID0gKHsgZW1haWwsIGNoaWxkcmVuIH06IFN0eWxlZE1haWx0b0xpbmtQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzc05hbWU9e3RhaWx3aW5kU3R5bGVzfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b25NYWlsdG8gPSAoeyBlbWFpbCwgbGFiZWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAgICB0bz0nIydcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gbWFpbHRvO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVkSWNvblByb3BzID0ge1xyXG4gIGFsdFRleHQ6IHN0cmluZztcclxuICBpY29uUGF0aDogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBzdHlsZXM/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSWNvbiA9ICh7IGljb25QYXRoLCBocmVmLCBzdHlsZXMsIGFsdFRleHQgfTogU3R5bGVkSWNvblByb3BzKSA9PiAoXHJcbiAgPEludGVybmFsRXh0ZXJuYWxMaW5rXHJcbiAgICBocmVmPXtocmVmfVxyXG4gICAgZXh0ZXJuYWxcclxuICA+XHJcbiAgICA8aW1nXHJcbiAgICAgIGNsYXNzTmFtZT17YGZpbHRlci1ncmF5c2NhbGUgaG92ZXI6ZmlsdGVyLW5vbmUgJHtzdHlsZXN9YH1cclxuICAgICAgYWx0PXthbHRUZXh0fVxyXG4gICAgICBzcmM9e2ljb25QYXRofVxyXG4gICAgLz5cclxuICA8L0ludGVybmFsRXh0ZXJuYWxMaW5rPlxyXG4pXHJcblxyXG5leHBvcnQgdHlwZSBJbnRFeHRMaW5rUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IGFueTtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgdGFpbHdpbmRTdHlsZXM/OiBzdHJpbmc7XHJcbiAgZXh0ZXJuYWw/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEludGVybmFsRXh0ZXJuYWxMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYsIHRhaWx3aW5kU3R5bGVzLCBleHRlcm5hbCA9IGZhbHNlIH06IEludEV4dExpbmtQcm9wcykgPT4ge1xyXG5cclxuICBpZiAoIWV4dGVybmFsKSByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17dGFpbHdpbmRTdHlsZXN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT17dGFpbHdpbmRTdHlsZXN9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2hyZWZ9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
