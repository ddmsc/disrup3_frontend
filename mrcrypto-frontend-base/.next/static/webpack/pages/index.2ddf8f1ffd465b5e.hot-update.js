"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Error */ \"./components/Error.tsx\");\n/* harmony import */ var _components_Mint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Mint */ \"./components/Mint.tsx\");\n/* harmony import */ var _store_web3Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/web3Store */ \"./store/web3Store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address , connectWallet , provider  } = (0,_store_web3Store__WEBPACK_IMPORTED_MODULE_5__.useWeb3Store)();\n    const [nftCollectionContract, setnftCollectionContract] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if ( false || !provider) return;\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(nftCollectionContract.address, nftCollectionContract.abi, provider === null || provider === void 0 ? void 0 : provider.getSigner());\n        setnftCollectionContract(contract);\n    }, [\n        provider\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        address: address,\n                        connectWallet: connectWallet\n                    }, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Mint__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"zG2nu/b65YxVodBx5w1lz46fbOA=\", false, function() {\n    return [\n        _store_web3Store__WEBPACK_IMPORTED_MODULE_5__.useWeb3Store\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlTUE7QUFmc0I7QUFFWTtBQUNEO0FBQ0g7QUFDWTtBQUNMO0FBQ1g7QUFZakIsU0FBU1MsT0FBTzs7SUFFN0IsTUFBTSxFQUFDQyxRQUFPLEVBQUVDLGNBQWEsRUFBRUMsU0FBUSxFQUFDLEdBQUdQLDhEQUFZQTtJQUN2RCxNQUFNLENBQUNRLHVCQUF1QkMseUJBQXlCLEdBQUdQLCtDQUFRQTtJQUVsRUQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUcsTUFBMkJTLElBQUksQ0FBQ0gsVUFBVTtRQUU3QyxNQUFNSSxXQUFXLElBQUlSLG1EQUFlLENBQ2xDSyxzQkFBc0JILE9BQU8sRUFDN0JHLHNCQUFzQkssR0FBRyxFQUN6Qk4scUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTyxTQUFTO1FBR3JCTCx5QkFBeUJFO0lBRTNCLEdBQUc7UUFBQ0o7S0FBUztJQUViLHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUlBOztrQ0FDSCw4REFBQ21CO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztrQ0FDQyw4REFBQ3pCLDBEQUFNQTt3QkFBQ1EsU0FBU0E7d0JBQVNDLGVBQWVBOzs7Ozs7a0NBQ3pDLDhEQUFDUix5REFBS0E7Ozs7O2tDQUNOLDhEQUFDQyx3REFBSUE7Ozs7Ozs7Ozs7Ozs7QUFJYixDQUFDO0dBakN1Qks7O1FBRXFCSiwwREFBWUE7OztLQUZqQ0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IEVycm9yIGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JcIjtcbmltcG9ydCBNaW50IGZyb20gJ0AvY29tcG9uZW50cy9NaW50J1xuaW1wb3J0IHsgdXNlV2ViM1N0b3JlIH0gZnJvbSAnQC9zdG9yZS93ZWIzU3RvcmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cgeyBldGhlcmV1bTogYW55IH1cbn1cblxuLy9sZXQgcHJvdmlkZXI6IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHthZGRyZXNzLCBjb25uZWN0V2FsbGV0LCBwcm92aWRlcn0gPSB1c2VXZWIzU3RvcmUoKTtcbiAgY29uc3QgW25mdENvbGxlY3Rpb25Db250cmFjdCwgc2V0bmZ0Q29sbGVjdGlvbkNvbnRyYWN0XSA9IHVzZVN0YXRlPGV0aGVycy5Db250cmFjdD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZCB8fCAhcHJvdmlkZXIpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBuZnRDb2xsZWN0aW9uQ29udHJhY3QuYWRkcmVzcyxcbiAgICAgIG5mdENvbGxlY3Rpb25Db250cmFjdC5hYmksXG4gICAgICBwcm92aWRlcj8uZ2V0U2lnbmVyKClcbiAgICApXG5cbiAgICBzZXRuZnRDb2xsZWN0aW9uQ29udHJhY3QoY29udHJhY3QpO1xuICAgIFxuICB9LCBbcHJvdmlkZXJdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE5hdmJhciBhZGRyZXNzPXthZGRyZXNzfSBjb25uZWN0V2FsbGV0PXtjb25uZWN0V2FsbGV0fS8+XG4gICAgICAgIDxFcnJvci8+XG4gICAgICAgIDxNaW50IC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJOYXZiYXIiLCJFcnJvciIsIk1pbnQiLCJ1c2VXZWIzU3RvcmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkhvbWUiLCJhZGRyZXNzIiwiY29ubmVjdFdhbGxldCIsInByb3ZpZGVyIiwibmZ0Q29sbGVjdGlvbkNvbnRyYWN0Iiwic2V0bmZ0Q29sbGVjdGlvbkNvbnRyYWN0IiwidW5kZWZpbmVkIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImdldFNpZ25lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});