/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./constants/supportedChains.ts":
/*!**************************************!*\
  !*** ./constants/supportedChains.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supportedChains\": () => (/* binding */ supportedChains)\n/* harmony export */ });\nconst supportedChains = [\n    5\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvc3VwcG9ydGVkQ2hhaW5zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQkFBa0I7SUFBQztDQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcmNyeXB0by1iYXNlLy4vY29uc3RhbnRzL3N1cHBvcnRlZENoYWlucy50cz81NTFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdXBwb3J0ZWRDaGFpbnMgPSBbNV07Il0sIm5hbWVzIjpbInN1cHBvcnRlZENoYWlucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/supportedChains.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_web3Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/web3Store */ \"./store/web3Store.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_web3Store__WEBPACK_IMPORTED_MODULE_1__]);\n_store_web3Store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const { changeAddress , changeChainId , setProvider  } = (0,_store_web3Store__WEBPACK_IMPORTED_MODULE_1__.useWeb3Store)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setProvider();\n        if (!window.ethereum) return;\n        window.ethereum.on(\"chainChanged\", (newChain)=>{\n            changeChainId(Number(newChain));\n        });\n        window.ethereum.on(\"accountsChanged\", (acc)=>{\n            changeAddress(acc[0]);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/daviddemiguel/Documents/Cursos/Disrup3/disrup3_frontend/mrcrypto-frontend-base/pages/_app.tsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbkI7QUFFSTtBQUVsQixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFFaEUsTUFBTSxFQUFDQyxjQUFhLEVBQUVDLGNBQWEsRUFBRUMsWUFBVyxFQUFDLEdBQUdQLDhEQUFZQTtJQUVoRUMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTTtRQUNBLElBQUcsQ0FBQ0MsT0FBT0MsUUFBUSxFQUFFO1FBRXJCRCxPQUFPQyxRQUFRLENBQUNDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQ0MsV0FBcUI7WUFDdkRMLGNBQWNNLE9BQU9EO1FBQ3ZCO1FBRUFILE9BQU9DLFFBQVEsQ0FBQ0MsRUFBRSxDQUFDLG1CQUFtQixDQUFDRyxNQUFrQjtZQUN2RFIsY0FBY1EsR0FBRyxDQUFDLEVBQUU7UUFDdEI7SUFFRixHQUFHLEVBQUU7SUFHSCxxQkFBTyw4REFBQ1Y7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21yY3J5cHRvLWJhc2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNTdG9yZSB9IGZyb20gJ0Avc3RvcmUvd2ViM1N0b3JlJ1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXG5jb25zdCB7Y2hhbmdlQWRkcmVzcywgY2hhbmdlQ2hhaW5JZCwgc2V0UHJvdmlkZXJ9ID0gdXNlV2ViM1N0b3JlKCk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIHNldFByb3ZpZGVyKCk7XG4gIGlmKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybjtcblxuICB3aW5kb3cuZXRoZXJldW0ub24oXCJjaGFpbkNoYW5nZWRcIiwgKG5ld0NoYWluOiBudW1iZXIpID0+IHtcbiAgICBjaGFuZ2VDaGFpbklkKE51bWJlcihuZXdDaGFpbikpO1xuICB9KTtcblxuICB3aW5kb3cuZXRoZXJldW0ub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgKGFjYzogc3RyaW5nW10pID0+IHtcbiAgICBjaGFuZ2VBZGRyZXNzKGFjY1swXSk7XG4gIH0pO1xuXG59LCBbXSlcblxuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG4iXSwibmFtZXMiOlsidXNlV2ViM1N0b3JlIiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2hhbmdlQWRkcmVzcyIsImNoYW5nZUNoYWluSWQiLCJzZXRQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJuZXdDaGFpbiIsIk51bWJlciIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/web3Store.ts":
/*!****************************!*\
  !*** ./store/web3Store.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useWeb3Store\": () => (/* binding */ useWeb3Store)\n/* harmony export */ });\n/* harmony import */ var _constants_supportedChains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/supportedChains */ \"./constants/supportedChains.ts\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_2__]);\nzustand__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst useWeb3Store = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.create)((set)=>({\n        address: \"\",\n        isConnected: false,\n        chainId: 0,\n        errorMessage: \"\",\n        provider: undefined,\n        async connectWallet () {\n            if (!window.ethereum) return set({\n                errorMessage: \"Necesitas Metamask\"\n            });\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);\n            const accounts = await provider?.send(\"eth_requestAccounts\", []);\n            const chainId = await (await provider.getNetwork()).chainId;\n            if (checkChain(chainId)) return set({\n                errorMessage: \"Cadena no soportada\"\n            });\n            set({\n                isConnected: true,\n                address: accounts[0],\n                provider,\n                chainId,\n                errorMessage: \"\"\n            });\n        },\n        changeAddress (address) {\n            set({\n                address\n            });\n        },\n        disconnect () {\n            set({\n                isConnected: false,\n                address: \"\",\n                chainId: 0\n            });\n        },\n        changeChainId (chainId) {\n            if (checkChain(chainId)) return set({\n                errorMessage: \"Cadena no soportada\"\n            });\n            set({\n                chainId,\n                errorMessage: \"\"\n            });\n        },\n        setProvider () {\n            if (!window.ethereum) return set({\n                errorMessage: \"Necesitas Metamask\"\n            });\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);\n            set({\n                provider,\n                errorMessage: \"\"\n            });\n        }\n    }));\nconst checkChain = (chainId)=>{\n    return !_constants_supportedChains__WEBPACK_IMPORTED_MODULE_0__.supportedChains.includes(chainId);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS93ZWIzU3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDOUI7QUFDQztBQWdCMUIsTUFBTUcsZUFBZUQsK0NBQU1BLENBQWEsQ0FBQ0UsTUFBUztRQUN2REMsU0FBUztRQUNUQyxhQUFhLEtBQUs7UUFDbEJDLFNBQVM7UUFDVEMsY0FBYztRQUNkQyxVQUFVQztRQUVWLE1BQU1DLGlCQUFnQjtZQUNwQixJQUFJLENBQUNDLE9BQU9DLFFBQVEsRUFBRSxPQUFPVCxJQUFJO2dCQUFFSSxjQUFjO1lBQXFCO1lBQ3RFLE1BQU1DLFdBQVcsSUFBSVIsaUVBQTZCLENBQUNXLE9BQU9DLFFBQVE7WUFDbEUsTUFBTUcsV0FBVyxNQUFNUCxVQUFVUSxLQUFLLHVCQUF1QixFQUFFO1lBQy9ELE1BQU1WLFVBQVUsTUFBTSxDQUFDLE1BQU1FLFNBQVNTLFVBQVUsRUFBQyxFQUFHWCxPQUFPO1lBRTNELElBQUlZLFdBQVdaLFVBQ2IsT0FBT0gsSUFBSTtnQkFBRUksY0FBYztZQUFzQjtZQUNuREosSUFBSTtnQkFDRkUsYUFBYSxJQUFJO2dCQUNqQkQsU0FBU1csUUFBUSxDQUFDLEVBQUU7Z0JBQ3BCUDtnQkFDQUY7Z0JBQ0FDLGNBQWM7WUFDaEI7UUFDRjtRQUNBWSxlQUFjZixPQUFPLEVBQUU7WUFDckJELElBQUk7Z0JBQUVDO1lBQVE7UUFDaEI7UUFDQWdCLGNBQWE7WUFDWGpCLElBQUk7Z0JBQUVFLGFBQWEsS0FBSztnQkFBRUQsU0FBUztnQkFBSUUsU0FBUztZQUFFO1FBQ3BEO1FBQ0FlLGVBQWNmLE9BQU8sRUFBRTtZQUNyQixJQUFJWSxXQUFXWixVQUNiLE9BQU9ILElBQUk7Z0JBQUVJLGNBQWM7WUFBc0I7WUFDbkRKLElBQUk7Z0JBQUVHO2dCQUFTQyxjQUFjO1lBQUc7UUFDbEM7UUFDQWUsZUFBYTtZQUNYLElBQUksQ0FBQ1gsT0FBT0MsUUFBUSxFQUFFLE9BQU9ULElBQUk7Z0JBQUVJLGNBQWM7WUFBcUI7WUFDdEUsTUFBTUMsV0FBVyxJQUFJUixpRUFBNkIsQ0FBQ1csT0FBT0MsUUFBUTtZQUNsRVQsSUFBSTtnQkFBQ0s7Z0JBQVVELGNBQWM7WUFBRTtRQUNqQztJQUNGLElBQUk7QUFFSixNQUFNVyxhQUFhLENBQUNaLFVBQTRCO0lBQzlDLE9BQU8sQ0FBQ1AsZ0ZBQXdCLENBQUNPO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXJjcnlwdG8tYmFzZS8uL3N0b3JlL3dlYjNTdG9yZS50cz9lMzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cHBvcnRlZENoYWlucyB9IGZyb20gXCJAL2NvbnN0YW50cy9zdXBwb3J0ZWRDaGFpbnNcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBJd2ViM1N0YXRlIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBpc0Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgY2hhaW5JZDogbnVtYmVyO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgcHJvdmlkZXI/OiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcjtcblxuICBjb25uZWN0V2FsbGV0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBjaGFuZ2VBZGRyZXNzOiAoYWRkcmVzczogc3RyaW5nKSA9PiB2b2lkO1xuICBkaXNjb25uZWN0OiAoKSA9PiB2b2lkO1xuICBjaGFuZ2VDaGFpbklkOiAoY2hhaW5JZDogbnVtYmVyKSA9PiB2b2lkO1xuICBzZXRQcm92aWRlcjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdlYjNTdG9yZSA9IGNyZWF0ZTxJd2ViM1N0YXRlPigoc2V0KSA9PiAoe1xuICBhZGRyZXNzOiBcIlwiLFxuICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gIGNoYWluSWQ6IDAsXG4gIGVycm9yTWVzc2FnZTogXCJcIixcbiAgcHJvdmlkZXI6IHVuZGVmaW5lZCxcblxuICBhc3luYyBjb25uZWN0V2FsbGV0KCkge1xuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gc2V0KHsgZXJyb3JNZXNzYWdlOiBcIk5lY2VzaXRhcyBNZXRhbWFza1wiIH0pO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBwcm92aWRlcj8uc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xuICAgIGNvbnN0IGNoYWluSWQgPSBhd2FpdCAoYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpKS5jaGFpbklkO1xuXG4gICAgaWYgKGNoZWNrQ2hhaW4oY2hhaW5JZCkpXG4gICAgICByZXR1cm4gc2V0KHsgZXJyb3JNZXNzYWdlOiBcIkNhZGVuYSBubyBzb3BvcnRhZGFcIiB9KTtcbiAgICBzZXQoe1xuICAgICAgaXNDb25uZWN0ZWQ6IHRydWUsXG4gICAgICBhZGRyZXNzOiBhY2NvdW50c1swXSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgY2hhaW5JZCxcbiAgICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICB9KTtcbiAgfSxcbiAgY2hhbmdlQWRkcmVzcyhhZGRyZXNzKSB7XG4gICAgc2V0KHsgYWRkcmVzcyB9KTtcbiAgfSxcbiAgZGlzY29ubmVjdCgpIHtcbiAgICBzZXQoeyBpc0Nvbm5lY3RlZDogZmFsc2UsIGFkZHJlc3M6IFwiXCIsIGNoYWluSWQ6IDAgfSk7XG4gIH0sXG4gIGNoYW5nZUNoYWluSWQoY2hhaW5JZCkge1xuICAgIGlmIChjaGVja0NoYWluKGNoYWluSWQpKVxuICAgICAgcmV0dXJuIHNldCh7IGVycm9yTWVzc2FnZTogXCJDYWRlbmEgbm8gc29wb3J0YWRhXCIgfSk7XG4gICAgc2V0KHsgY2hhaW5JZCwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuICB9LFxuICBzZXRQcm92aWRlcigpe1xuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gc2V0KHsgZXJyb3JNZXNzYWdlOiBcIk5lY2VzaXRhcyBNZXRhbWFza1wiIH0pO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgc2V0KHtwcm92aWRlciwgZXJyb3JNZXNzYWdlOiBcIlwifSlcbiAgfSxcbn0pKTtcblxuY29uc3QgY2hlY2tDaGFpbiA9IChjaGFpbklkOiBudW1iZXIpOmJvb2xlYW4gPT4ge1xuICByZXR1cm4gIXN1cHBvcnRlZENoYWlucy5pbmNsdWRlcyhjaGFpbklkKTtcbn1cbiJdLCJuYW1lcyI6WyJzdXBwb3J0ZWRDaGFpbnMiLCJldGhlcnMiLCJjcmVhdGUiLCJ1c2VXZWIzU3RvcmUiLCJzZXQiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJjaGFpbklkIiwiZXJyb3JNZXNzYWdlIiwicHJvdmlkZXIiLCJ1bmRlZmluZWQiLCJjb25uZWN0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJhY2NvdW50cyIsInNlbmQiLCJnZXROZXR3b3JrIiwiY2hlY2tDaGFpbiIsImNoYW5nZUFkZHJlc3MiLCJkaXNjb25uZWN0IiwiY2hhbmdlQ2hhaW5JZCIsInNldFByb3ZpZGVyIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/web3Store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();