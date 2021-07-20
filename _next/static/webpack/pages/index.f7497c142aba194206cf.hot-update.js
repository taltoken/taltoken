self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/StyledLinks.tsx":
/*!************************************!*\
  !*** ./components/StyledLinks.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Styled": function() { return /* binding */ Styled; },
/* harmony export */   "StyledLink": function() { return /* binding */ StyledLink; },
/* harmony export */   "StyledMailto": function() { return /* binding */ StyledMailto; },
/* harmony export */   "StyledIcon": function() { return /* binding */ StyledIcon; },
/* harmony export */   "InternalExternalLink": function() { return /* binding */ InternalExternalLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\biz\\taral-website\\components\\StyledLinks.tsx",
    _this = undefined;


var Styled;

(function (Styled) {
  Styled["HeaderLink"] = "font-semibold text-cool-gray-500 hover:text-cool-gray-600 sm:text-xl";
  Styled["FooterLink"] = "text-sm font-medium sm:text-lg text-cool-gray-600 group-hover:text-cool-gray-500";
  Styled["PageLink"] = "font-semibold text-blue-500 hover:text-cool-blue-600";
})(Styled || (Styled = {}));

var StyledLink = function StyledLink(_ref) {
  var type = _ref.type,
      href = _ref.href,
      children = _ref.children,
      _ref$external = _ref.external,
      external = _ref$external === void 0 ? false : _ref$external;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InternalExternalLink, {
    href: href,
    external: external,
    tailwindStyles: type,
    children: [' ', children, ' ']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};
_c = StyledLink;
var StyledMailto = function StyledMailto(_ref2) {
  var email = _ref2.email,
      children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: Styled.PageLink,
    target: "_blank",
    href: "mailto:".concat(email),
    onClick: function onClick(e) {
      window.location = "mailto:".concat(email);
      e.preventDefault();
    },
    rel: "noopener noreferrer",
    children: [' ', children, ' ']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};
_c2 = StyledMailto;
var StyledIcon = function StyledIcon(_ref3) {
  var iconPath = _ref3.iconPath,
      href = _ref3.href,
      styles = _ref3.styles,
      altText = _ref3.altText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InternalExternalLink, {
    href: href,
    external: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "filter-grayscale hover:filter-none ".concat(styles),
      alt: altText,
      src: iconPath
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, _this);
};
_c3 = StyledIcon;
var InternalExternalLink = function InternalExternalLink(_ref4) {
  var children = _ref4.children,
      href = _ref4.href,
      tailwindStyles = _ref4.tailwindStyles,
      _ref4$external = _ref4.external,
      external = _ref4$external === void 0 ? false : _ref4$external;
  if (!external) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: tailwindStyles,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    className: tailwindStyles,
    target: "_blank",
    href: href,
    rel: "noopener noreferrer",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, _this);
};
_c4 = InternalExternalLink;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "StyledLink");
$RefreshReg$(_c2, "StyledMailto");
$RefreshReg$(_c3, "StyledIcon");
$RefreshReg$(_c4, "InternalExternalLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdHlsZWRMaW5rcy50c3giXSwibmFtZXMiOlsiU3R5bGVkIiwiU3R5bGVkTGluayIsInR5cGUiLCJocmVmIiwiY2hpbGRyZW4iLCJleHRlcm5hbCIsIlN0eWxlZE1haWx0byIsImVtYWlsIiwiUGFnZUxpbmsiLCJlIiwid2luZG93IiwibG9jYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIlN0eWxlZEljb24iLCJpY29uUGF0aCIsInN0eWxlcyIsImFsdFRleHQiLCJJbnRlcm5hbEV4dGVybmFsTGluayIsInRhaWx3aW5kU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlCTyxJQUFLQSxNQUFaOztXQUFZQSxNO0FBQUFBLFE7QUFBQUEsUTtBQUFBQSxRO0dBQUFBLE0sS0FBQUEsTTs7QUFPTCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLDJCQUF5QkMsUUFBekI7QUFBQSxNQUF5QkEsUUFBekIsOEJBQW9DLEtBQXBDO0FBQUEsc0JBQ3hCLDhEQUFDLG9CQUFEO0FBQ0UsUUFBSSxFQUFFRixJQURSO0FBRUUsWUFBUSxFQUFFRSxRQUZaO0FBR0Usa0JBQWMsRUFBRUgsSUFIbEI7QUFBQSxlQUtHLEdBTEgsRUFLUUUsUUFMUixFQUtrQixHQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUFuQjtLQUFNSCxVO0FBVU4sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsUUFBZ0Q7QUFBQSxNQUE3Q0MsS0FBNkMsU0FBN0NBLEtBQTZDO0FBQUEsTUFBdENILFFBQXNDLFNBQXRDQSxRQUFzQztBQUMxRSxzQkFDRTtBQUFHLGFBQVMsRUFBRUosTUFBTSxDQUFDUSxRQUFyQjtBQUErQixVQUFNLEVBQUMsUUFBdEM7QUFBK0MsUUFBSSxtQkFBWUQsS0FBWixDQUFuRDtBQUNFLFdBQU8sRUFBRSxpQkFBQ0UsQ0FBRCxFQUFPO0FBQ2RDLFlBQU0sQ0FBQ0MsUUFBUCxvQkFBNEJKLEtBQTVCO0FBQ0FFLE9BQUMsQ0FBQ0csY0FBRjtBQUNELEtBSkg7QUFLRSxPQUFHLEVBQUMscUJBTE47QUFBQSxlQU1HLEdBTkgsRUFNUVIsUUFOUixFQU1rQixHQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWE07TUFBTUUsWTtBQXFCTixJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFYLElBQWIsU0FBYUEsSUFBYjtBQUFBLE1BQW1CWSxNQUFuQixTQUFtQkEsTUFBbkI7QUFBQSxNQUEyQkMsT0FBM0IsU0FBMkJBLE9BQTNCO0FBQUEsc0JBQ3hCLDhEQUFDLG9CQUFEO0FBQ0UsUUFBSSxFQUFFYixJQURSO0FBRUUsWUFBUSxNQUZWO0FBQUEsMkJBSUU7QUFDRSxlQUFTLCtDQUF3Q1ksTUFBeEMsQ0FEWDtBQUVFLFNBQUcsRUFBRUMsT0FGUDtBQUdFLFNBQUcsRUFBRUY7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR3QjtBQUFBLENBQW5CO01BQU1ELFU7QUFxQk4sSUFBTUksb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixRQUEyRTtBQUFBLE1BQXhFYixRQUF3RSxTQUF4RUEsUUFBd0U7QUFBQSxNQUE5REQsSUFBOEQsU0FBOURBLElBQThEO0FBQUEsTUFBeERlLGNBQXdELFNBQXhEQSxjQUF3RDtBQUFBLDZCQUF4Q2IsUUFBd0M7QUFBQSxNQUF4Q0EsUUFBd0MsK0JBQTdCLEtBQTZCO0FBRTdHLE1BQUksQ0FBQ0EsUUFBTCxFQUFlLG9CQUNiLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFRixJQUFaO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVlLGNBQWQ7QUFBQSxnQkFDR2Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURhO0FBUWYsc0JBQ0U7QUFBRyxhQUFTLEVBQUVjLGNBQWQ7QUFBOEIsVUFBTSxFQUFDLFFBQXJDO0FBQThDLFFBQUksRUFBRWYsSUFBcEQ7QUFBMEQsT0FBRyxFQUFDLHFCQUE5RDtBQUFBLGNBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FmTTtNQUFNYSxvQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzQ5N2MxNDJhYmExOTQyMDZjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlZExpbmtQcm9wcyA9IHtcclxuICB0eXBlOiBTdHlsZWQ7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgZXh0ZXJuYWw/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRNYWlsdG9MaW5rUHJvcHMgPSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHRhaWx3aW5kU3R5bGVzPzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU3R5bGVkIHtcclxuICBIZWFkZXJMaW5rID0gJ2ZvbnQtc2VtaWJvbGQgdGV4dC1jb29sLWdyYXktNTAwIGhvdmVyOnRleHQtY29vbC1ncmF5LTYwMCBzbTp0ZXh0LXhsJyxcclxuICBGb290ZXJMaW5rID0gJ3RleHQtc20gZm9udC1tZWRpdW0gc206dGV4dC1sZyB0ZXh0LWNvb2wtZ3JheS02MDAgZ3JvdXAtaG92ZXI6dGV4dC1jb29sLWdyYXktNTAwJyxcclxuICBQYWdlTGluayA9ICdmb250LXNlbWlib2xkIHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1jb29sLWJsdWUtNjAwJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSAoeyB0eXBlLCBocmVmLCBjaGlsZHJlbiwgZXh0ZXJuYWwgPSBmYWxzZSB9OiBTdHlsZWRMaW5rUHJvcHMpID0+IChcclxuICA8SW50ZXJuYWxFeHRlcm5hbExpbmtcclxuICAgIGhyZWY9e2hyZWZ9XHJcbiAgICBleHRlcm5hbD17ZXh0ZXJuYWx9XHJcbiAgICB0YWlsd2luZFN0eWxlcz17dHlwZX1cclxuICA+XHJcbiAgICB7JyAnfXtjaGlsZHJlbn17JyAnfVxyXG4gIDwvSW50ZXJuYWxFeHRlcm5hbExpbms+XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNYWlsdG8gPSAoeyBlbWFpbCwgY2hpbGRyZW4gfTogU3R5bGVkTWFpbHRvTGlua1Byb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT17U3R5bGVkLlBhZ2VMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH1cclxuICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgbWFpbHRvOiR7ZW1haWx9YCBhcyBhbnk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9fVxyXG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgIHsnICd9e2NoaWxkcmVufXsnICd9XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRJY29uUHJvcHMgPSB7XHJcbiAgYWx0VGV4dDogc3RyaW5nO1xyXG4gIGljb25QYXRoOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHN0eWxlcz86IHN0cmluZztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJY29uID0gKHsgaWNvblBhdGgsIGhyZWYsIHN0eWxlcywgYWx0VGV4dCB9OiBTdHlsZWRJY29uUHJvcHMpID0+IChcclxuICA8SW50ZXJuYWxFeHRlcm5hbExpbmtcclxuICAgIGhyZWY9e2hyZWZ9XHJcbiAgICBleHRlcm5hbFxyXG4gID5cclxuICAgIDxpbWdcclxuICAgICAgY2xhc3NOYW1lPXtgZmlsdGVyLWdyYXlzY2FsZSBob3ZlcjpmaWx0ZXItbm9uZSAke3N0eWxlc31gfVxyXG4gICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgIHNyYz17aWNvblBhdGh9XHJcbiAgICAvPlxyXG4gIDwvSW50ZXJuYWxFeHRlcm5hbExpbms+XHJcbilcclxuXHJcbmV4cG9ydCB0eXBlIEludEV4dExpbmtQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogYW55O1xyXG4gIGhyZWY6IHN0cmluZztcclxuICB0YWlsd2luZFN0eWxlcz86IHN0cmluZztcclxuICBleHRlcm5hbD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW50ZXJuYWxFeHRlcm5hbExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiwgdGFpbHdpbmRTdHlsZXMsIGV4dGVybmFsID0gZmFsc2UgfTogSW50RXh0TGlua1Byb3BzKSA9PiB7XHJcblxyXG4gIGlmICghZXh0ZXJuYWwpIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXt0YWlsd2luZFN0eWxlc30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXt0YWlsd2luZFN0eWxlc30gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17aHJlZn0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=