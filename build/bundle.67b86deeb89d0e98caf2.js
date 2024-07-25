/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.css":
/*!****************************!*\
  !*** ./src/scss/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/options.ts":
/*!***************************!*\
  !*** ./src/ts/options.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiKey: () => (/* binding */ apiKey)
/* harmony export */ });
var apiKey = '854c52e4aab6428a9ea190942240207';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/ts/options.ts");
/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.css */ "./src/scss/style.css");


// CONFIG
var entryPoint = 'http://api.weatherapi.com/v1/';
var requestType = 'current';
var responseFormat = 'json';
var myCity = '55.5725,39.5368';
// TYPES END
// HELPERS
function statusIsSuccess() {
    return xhr.status >= 200 && xhr.status < 300;
}
function getPressure(num) {
    var value = num * 0.750063755419211;
    return Number(value.toFixed());
}
function getWindDirectoin(dir) {
    var direction = dir.charAt(0);
    switch (direction) {
        case 'W': return "\u0417\u0430\u043F\u0430\u0434\u043D\u044B\u0439" /* WindDirections.West */;
        case 'N': return "\u0421\u0435\u0432\u0435\u0440\u043D\u044B\u0439" /* WindDirections.North */;
        case 'S': return "\u042E\u0436\u043D\u044B\u0439" /* WindDirections.South */;
        case 'E': return "\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439" /* WindDirections.East */;
        default: return "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E" /* WindDirections.Unknown */;
    }
}
function getWindSpeed(speed) {
    var value = speed / 3.6;
    return Number(value.toFixed());
}
function getResponse() {
    return JSON.parse(xhr.response);
}
// HELPERS END
var data = null;
var xhr = new XMLHttpRequest();
var url = "".concat(entryPoint).concat(requestType, ".").concat(responseFormat, "?key=").concat(_options__WEBPACK_IMPORTED_MODULE_0__.apiKey, "&q=auto:ip&lang=ru");
xhr.open('get', url, true);
xhr.send();
xhr.onprogress = function () {
    if (!statusIsSuccess()) {
        console.log("\u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438 ".concat(xhr.status));
    }
};
var cityElement = document.getElementById('city');
var temperatureElement = document.getElementById('temperature');
var conditionElement = document.getElementById('condition');
var pressureElement = document.getElementById('pressure');
var windDirectionElement = document.getElementById('wind-direction');
var windSpeedElement = document.getElementById('wind-speed');
var windchillElement = document.getElementById('windchill');
var humidityElement = document.getElementById('humidity');
xhr.onload = function () {
    if (statusIsSuccess()) {
        data = getResponse();
        console.log(data);
        console.log("\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 ".concat(data.location.name, " ").concat(data.current.temp_c, "\u2103"));
        console.log("\u0417\u0430 \u043E\u043A\u043D\u043E\u043C ".concat(data.current.condition.text));
        console.log("\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 ".concat(getPressure(data.current.pressure_mb), " \u043C\u043C.\u0440\u0442.\u0441\u0442"));
        console.log("\u0412\u0435\u0442\u0435\u0440 ".concat(getWindDirectoin(data.current.wind_dir)));
        console.log("\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430 ".concat(getWindSpeed(data.current.wind_kph), " \u043C/\u0441"));
        console.log("\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u0435\u0442\u0440\u0430 ".concat(data.current.windchill_c, "\u2103"));
        console.log("\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C ".concat(data.current.humidity, "%"));
        if (cityElement) {
            cityElement.textContent = "\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435: ".concat(data.location.name);
        }
        if (temperatureElement) {
            temperatureElement.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(data.current.temp_c, "\u2103");
        }
        if (conditionElement) {
            conditionElement.textContent = "\u0417\u0430 \u043E\u043A\u043D\u043E\u043C: ".concat(data.current.condition.text);
        }
        if (pressureElement) {
            pressureElement.textContent = "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ".concat(getPressure(data.current.pressure_mb), " \u043C\u043C.\u0440\u0442.\u0441\u0442");
        }
        if (windDirectionElement) {
            windDirectionElement.textContent = "\u0412\u0435\u0442\u0435\u0440: ".concat(getWindDirectoin(data.current.wind_dir));
        }
        if (windSpeedElement) {
            windSpeedElement.textContent = "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u0435\u0442\u0440\u0430: ".concat(getWindSpeed(data.current.wind_kph), " \u043C/\u0441");
        }
        if (windchillElement) {
            windchillElement.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u0435\u0442\u0440\u0430: ".concat(data.current.windchill_c, "\u2103");
        }
        if (humidityElement) {
            humidityElement.textContent = "\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: ".concat(data.current.humidity, "%");
        }
    }
};
window.addEventListener('click', function () { return location.reload(); });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjY3Yjg2ZGVlYjg5ZDBlOThjYWYyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPOzs7Ozs7O1VDQVA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ1I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csNENBQU07QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkJBQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zY3NzL3N0eWxlLmNzcz8yYjFlIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvdHMvb3B0aW9ucy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgdmFyIGFwaUtleSA9ICc4NTRjNTJlNGFhYjY0MjhhOWVhMTkwOTQyMjQwMjA3JztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0ICcuLi9zY3NzL3N0eWxlLmNzcyc7XG4vLyBDT05GSUdcbnZhciBlbnRyeVBvaW50ID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvJztcbnZhciByZXF1ZXN0VHlwZSA9ICdjdXJyZW50JztcbnZhciByZXNwb25zZUZvcm1hdCA9ICdqc29uJztcbnZhciBteUNpdHkgPSAnNTUuNTcyNSwzOS41MzY4Jztcbi8vIFRZUEVTIEVORFxuLy8gSEVMUEVSU1xuZnVuY3Rpb24gc3RhdHVzSXNTdWNjZXNzKCkge1xuICAgIHJldHVybiB4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwO1xufVxuZnVuY3Rpb24gZ2V0UHJlc3N1cmUobnVtKSB7XG4gICAgdmFyIHZhbHVlID0gbnVtICogMC43NTAwNjM3NTU0MTkyMTE7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZS50b0ZpeGVkKCkpO1xufVxuZnVuY3Rpb24gZ2V0V2luZERpcmVjdG9pbihkaXIpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gZGlyLmNoYXJBdCgwKTtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlICdXJzogcmV0dXJuIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDNGXFx1MDQzMFxcdTA0MzRcXHUwNDNEXFx1MDQ0QlxcdTA0MzlcIiAvKiBXaW5kRGlyZWN0aW9ucy5XZXN0ICovO1xuICAgICAgICBjYXNlICdOJzogcmV0dXJuIFwiXFx1MDQyMVxcdTA0MzVcXHUwNDMyXFx1MDQzNVxcdTA0NDBcXHUwNDNEXFx1MDQ0QlxcdTA0MzlcIiAvKiBXaW5kRGlyZWN0aW9ucy5Ob3J0aCAqLztcbiAgICAgICAgY2FzZSAnUyc6IHJldHVybiBcIlxcdTA0MkVcXHUwNDM2XFx1MDQzRFxcdTA0NEJcXHUwNDM5XCIgLyogV2luZERpcmVjdGlvbnMuU291dGggKi87XG4gICAgICAgIGNhc2UgJ0UnOiByZXR1cm4gXCJcXHUwNDEyXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0NDdcXHUwNDNEXFx1MDQ0QlxcdTA0MzlcIiAvKiBXaW5kRGlyZWN0aW9ucy5FYXN0ICovO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJcXHUwNDFEXFx1MDQzNVxcdTA0MzhcXHUwNDM3XFx1MDQzMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0M0RcXHUwNDNFXCIgLyogV2luZERpcmVjdGlvbnMuVW5rbm93biAqLztcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRXaW5kU3BlZWQoc3BlZWQpIHtcbiAgICB2YXIgdmFsdWUgPSBzcGVlZCAvIDMuNjtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlLnRvRml4ZWQoKSk7XG59XG5mdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xufVxuLy8gSEVMUEVSUyBFTkRcbnZhciBkYXRhID0gbnVsbDtcbnZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnZhciB1cmwgPSBcIlwiLmNvbmNhdChlbnRyeVBvaW50KS5jb25jYXQocmVxdWVzdFR5cGUsIFwiLlwiKS5jb25jYXQocmVzcG9uc2VGb3JtYXQsIFwiP2tleT1cIikuY29uY2F0KGFwaUtleSwgXCImcT1hdXRvOmlwJmxhbmc9cnVcIik7XG54aHIub3BlbignZ2V0JywgdXJsLCB0cnVlKTtcbnhoci5zZW5kKCk7XG54aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXN0YXR1c0lzU3VjY2VzcygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFx1MDQxQVxcdTA0M0VcXHUwNDM0IFxcdTA0M0VcXHUwNDQ4XFx1MDQzOFxcdTA0MzFcXHUwNDNBXFx1MDQzOCBcIi5jb25jYXQoeGhyLnN0YXR1cykpO1xuICAgIH1cbn07XG52YXIgY2l0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xudmFyIHRlbXBlcmF0dXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZScpO1xudmFyIGNvbmRpdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZGl0aW9uJyk7XG52YXIgcHJlc3N1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNzdXJlJyk7XG52YXIgd2luZERpcmVjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1kaXJlY3Rpb24nKTtcbnZhciB3aW5kU3BlZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtc3BlZWQnKTtcbnZhciB3aW5kY2hpbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRjaGlsbCcpO1xudmFyIGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xueGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdHVzSXNTdWNjZXNzKCkpIHtcbiAgICAgICAgZGF0YSA9IGdldFJlc3BvbnNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdTA0MUZcXHUwNDNFXFx1MDQzM1xcdTA0M0VcXHUwNDM0XFx1MDQzMCBcXHUwNDMyIFxcdTA0MzNcXHUwNDNFXFx1MDQ0MFxcdTA0M0VcXHUwNDM0XFx1MDQzNSBcIi5jb25jYXQoZGF0YS5sb2NhdGlvbi5uYW1lLCBcIiBcIikuY29uY2F0KGRhdGEuY3VycmVudC50ZW1wX2MsIFwiXFx1MjEwM1wiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFx1MDQxN1xcdTA0MzAgXFx1MDQzRVxcdTA0M0FcXHUwNDNEXFx1MDQzRVxcdTA0M0MgXCIuY29uY2F0KGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdTA0MTRcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFwiLmNvbmNhdChnZXRQcmVzc3VyZShkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIpLCBcIiBcXHUwNDNDXFx1MDQzQy5cXHUwNDQwXFx1MDQ0Mi5cXHUwNDQxXFx1MDQ0MlwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFx1MDQxMlxcdTA0MzVcXHUwNDQyXFx1MDQzNVxcdTA0NDAgXCIuY29uY2F0KGdldFdpbmREaXJlY3RvaW4oZGF0YS5jdXJyZW50LndpbmRfZGlyKSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdTA0MjFcXHUwNDNBXFx1MDQzRVxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDRDIFxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NDBcXHUwNDMwIFwiLmNvbmNhdChnZXRXaW5kU3BlZWQoZGF0YS5jdXJyZW50LndpbmRfa3BoKSwgXCIgXFx1MDQzQy9cXHUwNDQxXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0NcXHUwNDNGXFx1MDQzNVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0NDNcXHUwNDQwXFx1MDQzMCBcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzMCBcIi5jb25jYXQoZGF0YS5jdXJyZW50LndpbmRjaGlsbF9jLCBcIlxcdTIxMDNcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdTA0MTJcXHUwNDNCXFx1MDQzMFxcdTA0MzZcXHUwNDNEXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0QyBcIi5jb25jYXQoZGF0YS5jdXJyZW50Lmh1bWlkaXR5LCBcIiVcIikpO1xuICAgICAgICBpZiAoY2l0eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNpdHlFbGVtZW50LnRleHRDb250ZW50ID0gXCJcXHUwNDFGXFx1MDQzRVxcdTA0MzNcXHUwNDNFXFx1MDQzNFxcdTA0MzAgXFx1MDQzMiBcXHUwNDMzXFx1MDQzRVxcdTA0NDBcXHUwNDNFXFx1MDQzNFxcdTA0MzU6IFwiLmNvbmNhdChkYXRhLmxvY2F0aW9uLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wZXJhdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNDXFx1MDQzRlxcdTA0MzVcXHUwNDQwXFx1MDQzMFxcdTA0NDJcXHUwNDQzXFx1MDQ0MFxcdTA0MzA6IFwiLmNvbmNhdChkYXRhLmN1cnJlbnQudGVtcF9jLCBcIlxcdTIxMDNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmRpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlxcdTA0MTdcXHUwNDMwIFxcdTA0M0VcXHUwNDNBXFx1MDQzRFxcdTA0M0VcXHUwNDNDOiBcIi5jb25jYXQoZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc3N1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBwcmVzc3VyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlxcdTA0MTRcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1OiBcIi5jb25jYXQoZ2V0UHJlc3N1cmUoZGF0YS5jdXJyZW50LnByZXNzdXJlX21iKSwgXCIgXFx1MDQzQ1xcdTA0M0MuXFx1MDQ0MFxcdTA0NDIuXFx1MDQ0MVxcdTA0NDJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmREaXJlY3Rpb25FbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kRGlyZWN0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXFx1MDQxMlxcdTA0MzVcXHUwNDQyXFx1MDQzNVxcdTA0NDA6IFwiLmNvbmNhdChnZXRXaW5kRGlyZWN0b2luKGRhdGEuY3VycmVudC53aW5kX2RpcikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kU3BlZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kU3BlZWRFbGVtZW50LnRleHRDb250ZW50ID0gXCJcXHUwNDIxXFx1MDQzQVxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0QyBcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzMDogXCIuY29uY2F0KGdldFdpbmRTcGVlZChkYXRhLmN1cnJlbnQud2luZF9rcGgpLCBcIiBcXHUwNDNDL1xcdTA0NDFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRjaGlsbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHdpbmRjaGlsbEVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQ1xcdTA0M0ZcXHUwNDM1XFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQ0M1xcdTA0NDBcXHUwNDMwIFxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NDBcXHUwNDMwOiBcIi5jb25jYXQoZGF0YS5jdXJyZW50LndpbmRjaGlsbF9jLCBcIlxcdTIxMDNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGh1bWlkaXR5RWxlbWVudCkge1xuICAgICAgICAgICAgaHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gXCJcXHUwNDEyXFx1MDQzQlxcdTA0MzBcXHUwNDM2XFx1MDQzRFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NEM6IFwiLmNvbmNhdChkYXRhLmN1cnJlbnQuaHVtaWRpdHksIFwiJVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IHJldHVybiBsb2NhdGlvbi5yZWxvYWQoKTsgfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=