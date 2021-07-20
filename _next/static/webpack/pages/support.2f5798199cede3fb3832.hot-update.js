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
                columnNumber: 5,
              },
              _this
            ),
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 3,
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
            title: "WalletConnect support",
            maxwidth: "sm:max-w-3xl",
            children: /*#__PURE__*/ (0,
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
                      columnNumber: 7,
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
                      columnNumber: 7,
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
                columnNumber: 5,
              },
              _this
            ),
          },
          void 0,
          false,
          {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VwcG9ydC50c3giXSwibmFtZXMiOlsiU3VwcG9ydCIsIlN1cHBvcnRDb250ZW50IiwiU3R5bGVkIiwiRElTQ09SRF9VUkwiLCJURUxFR1JBTV9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNkO0FBQUEsMkJBQ0UsOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O0tBQU1BLE87QUFLTiwrREFBZUEsT0FBZjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ3JCLDhEQUFDLDhEQUFEO0FBQWUsU0FBSyxFQUFDLHVCQUFyQjtBQUE2QyxZQUFRLEVBQUMsY0FBdEQ7QUFBQSwyQkFDRSw4REFBQywyREFBRDtBQUFZLFdBQUssRUFBQywyQkFBbEI7QUFBQSxtREFDaUMsR0FEakMsZUFFRSw4REFBQywrREFBRDtBQUFZLFlBQUksRUFBRUMsb0VBQWxCO0FBQW1DLGdCQUFRLE1BQTNDO0FBQTRDLFlBQUksRUFBRUMsMERBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsMENBS3VDLEdBTHZDLGVBTUUsOERBQUMsK0RBQUQ7QUFBWSxZQUFJLEVBQUVELG9FQUFsQjtBQUFtQyxnQkFBUSxNQUEzQztBQUE0QyxZQUFJLEVBQUVFLDJEQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEcUI7QUFBQSxDQUF2Qjs7TUFBTUgsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdXBwb3J0LjJmNTc5ODE5OWNlZGUzZmIzODMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGVkQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZWRDb250ZXh0XCI7XHJcbmltcG9ydCB7IFN0eWxlZCwgU3R5bGVkTGluayB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0eWxlZExpbmtzXCI7XHJcbmltcG9ydCBGQVFDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0ZBUUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCB7IERJU0NPUkRfVVJMLCBURUxFR1JBTV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgU3VwcG9ydCA9ICgpID0+IChcclxuICA8bWFpbj5cclxuICAgIDxTdXBwb3J0Q29udGVudCAvPlxyXG4gIDwvbWFpbj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU3VwcG9ydDtcclxuXHJcbmNvbnN0IFN1cHBvcnRDb250ZW50ID0gKCkgPT4gKFxyXG4gIDxUaXRsZWRDb250ZW50IHRpdGxlPVwiV2FsbGV0Q29ubmVjdCBzdXBwb3J0XCIgbWF4d2lkdGg9XCJzbTptYXgtdy0zeGxcIj5cclxuICAgIDxGQVFDb250ZW50IHRpdGxlPVwiSSBhbSBhIHNvZnR3YXJlIGRldmVsb3BlclwiPlxyXG4gICAgICBZb3UgYXJlIHdlbGNvbWUgdG8gam9pbiBpbiBvdXJ7XCIgXCJ9XHJcbiAgICAgIDxTdHlsZWRMaW5rIHR5cGU9e1N0eWxlZC5QYWdlTGlua30gZXh0ZXJuYWwgaHJlZj17RElTQ09SRF9VUkx9PlxyXG4gICAgICAgIERpc2NvcmRcclxuICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAuIEFsc28geW91IGNhbiBhc2sgb3BlbiBxdWVzdGlvbnMgb257XCIgXCJ9XHJcbiAgICAgIDxTdHlsZWRMaW5rIHR5cGU9e1N0eWxlZC5QYWdlTGlua30gZXh0ZXJuYWwgaHJlZj17VEVMRUdSQU1fVVJMfT5cclxuICAgICAgICBvdXIgVGVsZWdyYW0gZ3JvdXBcclxuICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgPC9GQVFDb250ZW50PlxyXG4gIDwvVGl0bGVkQ29udGVudD5cclxuKTsiXSwic291cmNlUm9vdCI6IiJ9
