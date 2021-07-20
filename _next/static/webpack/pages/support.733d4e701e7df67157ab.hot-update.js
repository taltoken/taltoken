self["webpackHotUpdate_N_E"]("pages/support",{

/***/ "./pages/support.tsx":
/*!***************************!*\
  !*** ./pages/support.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitledContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TitledContext */ "./components/TitledContext.tsx");
/* harmony import */ var _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyledLinks */ "./components/StyledLinks.tsx");
/* harmony import */ var _components_FAQContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FAQContent */ "./components/FAQContent.tsx");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\biz\\taral-website\\pages\\support.tsx",
    _this = undefined;






var Support = function Support() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SupportContent, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Support;
/* harmony default export */ __webpack_exports__["default"] = (Support);

var SupportContent = function SupportContent() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TitledContext__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Taral support",
    maxwidth: "sm:max-w-3xl",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FAQContent__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "I am a software developer",
      children: ["You are welcome to join in our", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {
        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.Styled.PageLink,
        external: true,
        href: _common_constants__WEBPACK_IMPORTED_MODULE_4__.DISCORD_URL,
        children: "Discord"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), ". Also you can ask open questions on", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {
        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.Styled.PageLink,
        external: true,
        href: _common_constants__WEBPACK_IMPORTED_MODULE_4__.TELEGRAM_URL,
        children: "our Telegram group"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FAQContent__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Where can I reach you?",
      children: ["We can be reached at", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {
        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.Styled.PageLink,
        external: true,
        href: _common_constants__WEBPACK_IMPORTED_MODULE_4__.DISCORD_URL,
        children: _common_constants__WEBPACK_IMPORTED_MODULE_4__.EMAIL_ADDRESS
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c2 = SupportContent;

var _c, _c2;

$RefreshReg$(_c, "Support");
$RefreshReg$(_c2, "SupportContent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VwcG9ydC50c3giXSwibmFtZXMiOlsiU3VwcG9ydCIsIlN1cHBvcnRDb250ZW50IiwiU3R5bGVkIiwiRElTQ09SRF9VUkwiLCJURUxFR1JBTV9VUkwiLCJFTUFJTF9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFDWjtBQUFBLDJCQUNJLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWhCOztLQUFNQSxPO0FBS04sK0RBQWVBLE9BQWY7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUNuQiw4REFBQyw4REFBRDtBQUFlLFNBQUssRUFBQyxlQUFyQjtBQUFxQyxZQUFRLEVBQUMsY0FBOUM7QUFBQSw0QkFDSSw4REFBQywyREFBRDtBQUFZLFdBQUssRUFBQywyQkFBbEI7QUFBQSxtREFDbUMsR0FEbkMsZUFFSSw4REFBQywrREFBRDtBQUFZLFlBQUksRUFBRUMsb0VBQWxCO0FBQW1DLGdCQUFRLE1BQTNDO0FBQTRDLFlBQUksRUFBRUMsMERBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosMENBS3lDLEdBTHpDLGVBTUksOERBQUMsK0RBQUQ7QUFBWSxZQUFJLEVBQUVELG9FQUFsQjtBQUFtQyxnQkFBUSxNQUEzQztBQUE0QyxZQUFJLEVBQUVFLDJEQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBV0ksOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUMsd0JBQWxCO0FBQUEsc0RBRUksOERBQUMsK0RBQUQ7QUFBWSxZQUFJLEVBQUVGLG9FQUFsQjtBQUFtQyxnQkFBUSxNQUEzQztBQUE0QyxZQUFJLEVBQUVDLDBEQUFsRDtBQUFBLGtCQUNLRSw0REFBYUE7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURtQjtBQUFBLENBQXZCOztNQUFNSixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N1cHBvcnQuNzMzZDRlNzAxZTdkZjY3MTU3YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZWRDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlZENvbnRleHRcIjtcclxuaW1wb3J0IHsgU3R5bGVkLCBTdHlsZWRMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3R5bGVkTGlua3NcIjtcclxuaW1wb3J0IEZBUUNvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRkFRQ29udGVudFwiO1xyXG5cclxuaW1wb3J0IHsgRElTQ09SRF9VUkwsIEVNQUlMX0FERFJFU1MsIFRFTEVHUkFNX1VSTCB9IGZyb20gXCIuLi9jb21tb24vY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBTdXBwb3J0ID0gKCkgPT4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPFN1cHBvcnRDb250ZW50IC8+XHJcbiAgICA8L21haW4+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnQ7XHJcblxyXG5jb25zdCBTdXBwb3J0Q29udGVudCA9ICgpID0+IChcclxuICAgIDxUaXRsZWRDb250ZW50IHRpdGxlPVwiVGFyYWwgc3VwcG9ydFwiIG1heHdpZHRoPVwic206bWF4LXctM3hsXCI+XHJcbiAgICAgICAgPEZBUUNvbnRlbnQgdGl0bGU9XCJJIGFtIGEgc29mdHdhcmUgZGV2ZWxvcGVyXCI+XHJcbiAgICAgICAgICAgIFlvdSBhcmUgd2VsY29tZSB0byBqb2luIGluIG91cntcIiBcIn1cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgdHlwZT17U3R5bGVkLlBhZ2VMaW5rfSBleHRlcm5hbCBocmVmPXtESVNDT1JEX1VSTH0+XHJcbiAgICAgICAgICAgICAgICBEaXNjb3JkXHJcbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgICAgICAgICAgLiBBbHNvIHlvdSBjYW4gYXNrIG9wZW4gcXVlc3Rpb25zIG9ue1wiIFwifVxyXG4gICAgICAgICAgICA8U3R5bGVkTGluayB0eXBlPXtTdHlsZWQuUGFnZUxpbmt9IGV4dGVybmFsIGhyZWY9e1RFTEVHUkFNX1VSTH0+XHJcbiAgICAgICAgICAgICAgICBvdXIgVGVsZWdyYW0gZ3JvdXBcclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvRkFRQ29udGVudD5cclxuICAgICAgICA8RkFRQ29udGVudCB0aXRsZT1cIldoZXJlIGNhbiBJIHJlYWNoIHlvdT9cIj5cclxuICAgICAgICAgICAgV2UgY2FuIGJlIHJlYWNoZWQgYXRcclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgdHlwZT17U3R5bGVkLlBhZ2VMaW5rfSBleHRlcm5hbCBocmVmPXtESVNDT1JEX1VSTH0+XHJcbiAgICAgICAgICAgICAgICB7RU1BSUxfQUREUkVTU31cclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvRkFRQ29udGVudD5cclxuICAgIDwvVGl0bGVkQ29udGVudD5cclxuKTsiXSwic291cmNlUm9vdCI6IiJ9