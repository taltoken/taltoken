self["webpackHotUpdate_N_E"]("pages/support",{

/***/ "./components/PrivateKeyWarning.tsx":
/*!******************************************!*\
  !*** ./components/PrivateKeyWarning.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\biz\\taral-website\\components\\PrivateKeyWarning.tsx",
    _this = undefined;

var PrivateKeyWarning = function PrivateKeyWarning() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-8 mt-16 font-thin md:flex md:justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "md:max-w-5xl",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        role: "alert",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bg-red-500 text-white font-bold rounded-t px-4 py-2",
          children: "Never share your private key"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Never give your private key or wallet seed words to anyone. Taral support team does not ask them. If you share your private key or seed words you will lose everything in your wallet."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }, _this);
};

_c = PrivateKeyWarning;
/* harmony default export */ __webpack_exports__["default"] = (PrivateKeyWarning);

var _c;

$RefreshReg$(_c, "PrivateKeyWarning");

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


/***/ }),

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
/* harmony import */ var _components_PrivateKeyWarning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PrivateKeyWarning */ "./components/PrivateKeyWarning.tsx");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./common/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\biz\\taral-website\\pages\\support.tsx",
    _this = undefined;







var Support = function Support() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrivateKeyWarning__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SupportContent, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
        href: _common_constants__WEBPACK_IMPORTED_MODULE_5__.DISCORD_URL,
        children: "Discord"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), ". Also you can ask open questions on", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {
        type: _components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.Styled.PageLink,
        external: true,
        href: _common_constants__WEBPACK_IMPORTED_MODULE_5__.TELEGRAM_URL,
        children: "our Telegram group"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FAQContent__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "How can I reach you by email?",
      children: ["We can be reached", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StyledLinks__WEBPACK_IMPORTED_MODULE_2__.StyledMailto, {
        email: _common_constants__WEBPACK_IMPORTED_MODULE_5__.EMAIL_ADDRESS,
        children: "here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcml2YXRlS2V5V2FybmluZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N1cHBvcnQudHN4Il0sIm5hbWVzIjpbIlByaXZhdGVLZXlXYXJuaW5nIiwiU3VwcG9ydCIsIlN1cHBvcnRDb250ZW50IiwiU3R5bGVkIiwiRElTQ09SRF9VUkwiLCJURUxFR1JBTV9VUkwiLCJFTUFJTF9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsc0JBQ3RCO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNFO0FBQUssWUFBSSxFQUFDLE9BQVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsOEVBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEc0I7QUFBQSxDQUExQjs7S0FBTUEsaUI7QUFtQkosK0RBQWVBLGlCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFDWjtBQUFBLDRCQUNJLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O0tBQU1BLE87QUFNTiwrREFBZUEsT0FBZjs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ25CLDhEQUFDLDhEQUFEO0FBQWUsU0FBSyxFQUFDLGVBQXJCO0FBQXFDLFlBQVEsRUFBQyxjQUE5QztBQUFBLDRCQUNJLDhEQUFDLDJEQUFEO0FBQVksV0FBSyxFQUFDLDJCQUFsQjtBQUFBLG1EQUNtQyxHQURuQyxlQUVJLDhEQUFDLCtEQUFEO0FBQVksWUFBSSxFQUFFQyxvRUFBbEI7QUFBbUMsZ0JBQVEsTUFBM0M7QUFBNEMsWUFBSSxFQUFFQywwREFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSiwwQ0FLeUMsR0FMekMsZUFNSSw4REFBQywrREFBRDtBQUFZLFlBQUksRUFBRUQsb0VBQWxCO0FBQW1DLGdCQUFRLE1BQTNDO0FBQTRDLFlBQUksRUFBRUUsMkRBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFXSSw4REFBQywyREFBRDtBQUFZLFdBQUssRUFBQywrQkFBbEI7QUFBQSxtREFFSSw4REFBQyxpRUFBRDtBQUFjLGFBQUssRUFBRUMsNERBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG1CO0FBQUEsQ0FBdkI7O01BQU1KLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VwcG9ydC40NjEyMmZkZGJiMTVlZWI2N2I4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJpdmF0ZUtleVdhcm5pbmcgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggbXQtMTYgZm9udC10aGluIG1kOmZsZXggbWQ6anVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDptYXgtdy01eGxcIj5cclxuICAgICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtdCBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgTmV2ZXIgc2hhcmUgeW91ciBwcml2YXRlIGtleVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItdC0wIGJvcmRlci1yZWQtNDAwIHJvdW5kZWQtYiBiZy1yZWQtMTAwIHB4LTQgcHktMyB0ZXh0LXJlZC03MDBcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTmV2ZXIgZ2l2ZSB5b3VyIHByaXZhdGUga2V5IG9yIHdhbGxldCBzZWVkIHdvcmRzIHRvIGFueW9uZS5cclxuICAgICAgICAgICAgICBUYXJhbCBzdXBwb3J0IHRlYW0gZG9lcyBub3QgYXNrIHRoZW0uIFxyXG4gICAgICAgICAgICAgIElmIHlvdSBzaGFyZSB5b3VyIHByaXZhdGUga2V5IG9yIHNlZWQgd29yZHMgeW91IHdpbGxcclxuICAgICAgICAgICAgICBsb3NlIGV2ZXJ5dGhpbmcgaW4geW91ciB3YWxsZXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZUtleVdhcm5pbmc7IiwiaW1wb3J0IFRpdGxlZENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVkQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTdHlsZWQsIFN0eWxlZExpbmssIFN0eWxlZE1haWx0byB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0eWxlZExpbmtzXCI7XHJcbmltcG9ydCBGQVFDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0ZBUUNvbnRlbnRcIjtcclxuaW1wb3J0IFByaXZhdGVLZXlXYXJuaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL1ByaXZhdGVLZXlXYXJuaW5nXCI7XHJcblxyXG5pbXBvcnQgeyBESVNDT1JEX1VSTCwgRU1BSUxfQUREUkVTUywgVEVMRUdSQU1fVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFN1cHBvcnQgPSAoKSA9PiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8UHJpdmF0ZUtleVdhcm5pbmcgLz5cclxuICAgICAgICA8U3VwcG9ydENvbnRlbnQgLz5cclxuICAgIDwvbWFpbj5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgU3VwcG9ydDtcclxuXHJcbmNvbnN0IFN1cHBvcnRDb250ZW50ID0gKCkgPT4gKFxyXG4gICAgPFRpdGxlZENvbnRlbnQgdGl0bGU9XCJUYXJhbCBzdXBwb3J0XCIgbWF4d2lkdGg9XCJzbTptYXgtdy0zeGxcIj5cclxuICAgICAgICA8RkFRQ29udGVudCB0aXRsZT1cIkkgYW0gYSBzb2Z0d2FyZSBkZXZlbG9wZXJcIj5cclxuICAgICAgICAgICAgWW91IGFyZSB3ZWxjb21lIHRvIGpvaW4gaW4gb3Vye1wiIFwifVxyXG4gICAgICAgICAgICA8U3R5bGVkTGluayB0eXBlPXtTdHlsZWQuUGFnZUxpbmt9IGV4dGVybmFsIGhyZWY9e0RJU0NPUkRfVVJMfT5cclxuICAgICAgICAgICAgICAgIERpc2NvcmRcclxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxyXG4gICAgICAgICAgICAuIEFsc28geW91IGNhbiBhc2sgb3BlbiBxdWVzdGlvbnMgb257XCIgXCJ9XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIHR5cGU9e1N0eWxlZC5QYWdlTGlua30gZXh0ZXJuYWwgaHJlZj17VEVMRUdSQU1fVVJMfT5cclxuICAgICAgICAgICAgICAgIG91ciBUZWxlZ3JhbSBncm91cFxyXG4gICAgICAgICAgICA8L1N0eWxlZExpbms+XHJcbiAgICAgICAgPC9GQVFDb250ZW50PlxyXG4gICAgICAgIDxGQVFDb250ZW50IHRpdGxlPVwiSG93IGNhbiBJIHJlYWNoIHlvdSBieSBlbWFpbD9cIj5cclxuICAgICAgICAgICAgV2UgY2FuIGJlIHJlYWNoZWRcclxuICAgICAgICAgICAgPFN0eWxlZE1haWx0byBlbWFpbD17RU1BSUxfQUREUkVTU30+XHJcbiAgICAgICAgICAgICAgICBoZXJlLlxyXG4gICAgICAgICAgICA8L1N0eWxlZE1haWx0bz5cclxuICAgICAgICA8L0ZBUUNvbnRlbnQ+XHJcbiAgICA8L1RpdGxlZENvbnRlbnQ+XHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==