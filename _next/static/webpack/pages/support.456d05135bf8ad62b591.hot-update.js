self["webpackHotUpdate_N_E"]("pages/support", {
  /***/ "./pages/support.tsx":
    /*!***************************!*\
  !*** ./pages/support.tsx ***!
  \***************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
        );
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var _components_TitledContext__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! ../components/TitledContext */ "./components/TitledContext.tsx"
        );
      /* harmony import */ var _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          /*! ../components/StyledLinks */ "./components/StyledLinks.tsx"
        );
      /* harmony import */ var _components_FAQContent__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(
          /*! ../components/FAQContent */ "./components/FAQContent.tsx"
        );
      /* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
      /* module decorator */ module = __webpack_require__.hmd(module);

      var _jsxFileName = "C:\\biz\\taral-website\\pages\\support.tsx",
        _this = undefined;

      var Support = function Support() {
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          "main",
          {
            children: /*#__PURE__*/ (0,
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
              SupportContent,
              {},
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 9,
              },
              _this
            ),
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 5,
          },
          _this
        );
      };

      _c = Support;
      /* harmony default export */ __webpack_exports__["default"] = Support;

      var SupportContent = function SupportContent() {
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          _components_TitledContext__WEBPACK_IMPORTED_MODULE_1__.default,
          {
            title: "Taral support",
            maxwidth: "sm:max-w-3xl",
            children: [
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                _components_FAQContent__WEBPACK_IMPORTED_MODULE_3__.default,
                {
                  title: "I am a software developer",
                  children: [
                    "You are welcome to join in our",
                    " ",
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink,
                      {
                        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__
                          .Styled.PageLink,
                        external: true,
                        href: _common_constants__WEBPACK_IMPORTED_MODULE_4__.DISCORD_URL,
                        children: "Discord",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 18,
                        columnNumber: 13,
                      },
                      _this
                    ),
                    ". Also you can ask open questions on",
                    " ",
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink,
                      {
                        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__
                          .Styled.PageLink,
                        external: true,
                        href: _common_constants__WEBPACK_IMPORTED_MODULE_4__.TELEGRAM_URL,
                        children: "our Telegram group",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 22,
                        columnNumber: 13,
                      },
                      _this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 9,
                },
                _this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                _components_FAQContent__WEBPACK_IMPORTED_MODULE_3__.default,
                {
                  title: "How can I reach you by email?",
                  children: [
                    "We can be reached",
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledMailto,
                      {
                        email:
                          _common_constants__WEBPACK_IMPORTED_MODULE_4__.EMAIL_ADDRESS,
                        children: "here.",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 13,
                      },
                      _this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 9,
                },
                _this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 5,
          },
          _this
        );
      };

      _c2 = SupportContent;

      var _c, _c2;

      $RefreshReg$(_c, "Support");
      $RefreshReg$(_c2, "SupportContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VwcG9ydC50c3giXSwibmFtZXMiOlsiU3VwcG9ydCIsIlN1cHBvcnRDb250ZW50IiwiU3R5bGVkIiwiRElTQ09SRF9VUkwiLCJURUxFR1JBTV9VUkwiLCJFTUFJTF9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFDWjtBQUFBLDJCQUNJLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWhCOztLQUFNQSxPO0FBS04sK0RBQWVBLE9BQWY7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNuQiw4REFBQyw4REFBRDtBQUFlLFNBQUssRUFBQyxlQUFyQjtBQUFxQyxZQUFRLEVBQUMsY0FBOUM7QUFBQSw0QkFDSSw4REFBQywyREFBRDtBQUFZLFdBQUssRUFBQywyQkFBbEI7QUFBQSxtREFDbUMsR0FEbkMsZUFFSSw4REFBQywrREFBRDtBQUFZLFlBQUksRUFBRUMsb0VBQWxCO0FBQW1DLGdCQUFRLE1BQTNDO0FBQTRDLFlBQUksRUFBRUMsMERBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosMENBS3lDLEdBTHpDLGVBTUksOERBQUMsK0RBQUQ7QUFBWSxZQUFJLEVBQUVELG9FQUFsQjtBQUFtQyxnQkFBUSxNQUEzQztBQUE0QyxZQUFJLEVBQUVFLDJEQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0ksOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUMsK0JBQWxCO0FBQUEsbURBRUksOERBQUMsaUVBQUQ7QUFBYyxhQUFLLEVBQUVDLDREQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURtQjtBQUFBLENBQXZCOztNQUFNSixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N1cHBvcnQuNDU2ZDA1MTM1YmY4YWQ2MmI1OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZWRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlZENvbnRleHRcIjtcclxuaW1wb3J0IHsgU3R5bGVkLCBTdHlsZWRMaW5rLCBTdHlsZWRNYWlsdG8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdHlsZWRMaW5rc1wiO1xyXG5pbXBvcnQgRkFRQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9GQVFDb250ZW50XCI7XHJcblxyXG5pbXBvcnQgeyBESVNDT1JEX1VSTCwgRU1BSUxfQUREUkVTUywgVEVMRUdSQU1fVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFN1cHBvcnQgPSAoKSA9PiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8U3VwcG9ydENvbnRlbnQgLz5cclxuICAgIDwvbWFpbj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU3VwcG9ydDtcclxuXHJcbmNvbnN0IFN1cHBvcnRDb250ZW50ID0gKCkgPT4gKFxyXG4gICAgPFRpdGxlZENvbnRlbnQgdGl0bGU9XCJUYXJhbCBzdXBwb3J0XCIgbWF4d2lkdGg9XCJzbTptYXgtdy0zeGxcIj5cclxuICAgICAgICA8RkFRQ29udGVudCB0aXRsZT1cIkkgYW0gYSBzb2Z0d2FyZSBkZXZlbG9wZXJcIj5cclxuICAgICAgICAgICAgWW91IGFyZSB3ZWxjb21lIHRvIGpvaW4gaW4gb3Vye1wiIFwifVxyXG4gICAgICAgICAgICA8U3R5bGVkTGluayB0eXBlPXtTdHlsZWQuUGFnZUxpbmt9IGV4dGVybmFsIGhyZWY9e0RJU0NPUkRfVVJMfT5cclxuICAgICAgICAgICAgICAgIERpc2NvcmRcclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgICAgICAuIEFsc28geW91IGNhbiBhc2sgb3BlbiBxdWVzdGlvbnMgb257XCIgXCJ9XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIHR5cGU9e1N0eWxlZC5QYWdlTGlua30gZXh0ZXJuYWwgaHJlZj17VEVMRUdSQU1fVVJMfT5cclxuICAgICAgICAgICAgICAgIG91ciBUZWxlZ3JhbSBncm91cFxyXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9GQVFDb250ZW50PlxyXG4gICAgICAgIDxGQVFDb250ZW50IHRpdGxlPVwiSG93IGNhbiBJIHJlYWNoIHlvdSBieSBlbWFpbD9cIj5cclxuICAgICAgICAgICAgV2UgY2FuIGJlIHJlYWNoZWRcclxuICAgICAgICAgICAgPFN0eWxlZE1haWx0byBlbWFpbD17RU1BSUxfQUREUkVTU30+XHJcbiAgICAgICAgICAgICAgICBoZXJlLlxyXG4gICAgICAgICAgICA8L1N0eWxlZE1haWx0bz5cclxuICAgICAgICA8L0ZBUUNvbnRlbnQ+XHJcbiAgICA8L1RpdGxlZENvbnRlbnQ+XHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==
