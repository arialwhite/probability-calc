webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-binomial-coef></app-binomial-coef>\n<app-binomial-law></app-binomial-law>\n<app-binomial-distrib></app-binomial-distrib>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__binomial_coef_binomial_coef_component__ = __webpack_require__("../../../../../src/app/binomial-coef/binomial-coef.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__binomial_law_binomial_law_component__ = __webpack_require__("../../../../../src/app/binomial-law/binomial-law.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__binomial_distrib_binomial_distrib_component__ = __webpack_require__("../../../../../src/app/binomial-distrib/binomial-distrib.component.ts");
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function highchartsFactory() {
    var hc = __webpack_require__("../../../../highcharts/highstock.js");
    var dd = __webpack_require__("../../../../highcharts/modules/exporting.js");
    dd(hc);
    return hc;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__binomial_coef_binomial_coef_component__["a" /* BinomialCoefComponent */],
            __WEBPACK_IMPORTED_MODULE_7__binomial_law_binomial_law_component__["a" /* BinomialLawComponent */],
            __WEBPACK_IMPORTED_MODULE_8__binomial_distrib_binomial_distrib_component__["a" /* BinomialDistribComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/binomial-coef/binomial-coef.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/binomial-coef/binomial-coef.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul du coefficient binomial\n    </div>\n  <p class=\"badge\">\n    nombre de combinaison possible\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>K</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de d'éléments\"  [(ngModel)]=\"K\" required></td>\n      </tr>\n      <tr>\n        <td>N</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de possibilités\" [(ngModel)]=\"N\" required></td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <br />\n    Choix de {{K === undefined ? 'K' : K}} éléments parmis {{N === undefined ? 'N' : N}} : {{result === undefined ? 'X' : result}} combinaisons possibles\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/binomial-coef/binomial-coef.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinomialCoefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BinomialCoefComponent = (function () {
    function BinomialCoefComponent() {
    }
    BinomialCoefComponent.prototype.compute = function () {
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["f" /* bicoeff */])(this.N, this.K);
    };
    return BinomialCoefComponent;
}());
BinomialCoefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-binomial-coef',
        template: __webpack_require__("../../../../../src/app/binomial-coef/binomial-coef.component.html"),
        styles: [__webpack_require__("../../../../../src/app/binomial-coef/binomial-coef.component.css")]
    })
], BinomialCoefComponent);

//# sourceMappingURL=binomial-coef.component.js.map

/***/ }),

/***/ "../../../../../src/app/binomial-distrib/binomial-distrib.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}\n\n.result-table td {\n  padding : 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/binomial-distrib/binomial-distrib.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Distribution de la loi binomial\n    </div>\n  <p class=\"badge\">\n    Distributions d'essais indépendants pour une même probabilité de succès\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>N</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre d'expériences\" [(ngModel)]=\"N\" required></td>\n      </tr>\n      <tr>\n        <td>P</td>\n        <td><input class=\"form-control\" placeholder=\"Probabilité de succès\"  [(ngModel)]=\"P\" required></td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <br />\n    Avec {{N === undefined ? 'N' : N}} essais de probabilité de succès de {{P === undefined ? 'P' : P}}:\n    <br />\n    <chart *ngIf=\"options\" [options]=\"options\"></chart>\n    <table class=\"result-table\" *ngIf=\"options\">\n      <tr>\n        <td>Espérance : </td>\n        <td> {{E | number : '1.0-4'}}</td>\n      </tr>\n      <tr>\n        <td>Variance : </td>\n        <td> {{V | number : '1.0-4'}}</td>\n      </tr>\n      <tr>\n        <td>Écart-type : </td>\n        <td> {{STD_DEV | number : '1.0-4'}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/binomial-distrib/binomial-distrib.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinomialDistribComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BinomialDistribComponent = (function () {
    function BinomialDistribComponent() {
    }
    BinomialDistribComponent.prototype.compute = function () {
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["a" /* bilawDistrib */])(this.N, this.P);
        this.E = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["b" /* expectedValue */])(this.N, this.P);
        this.V = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["c" /* variance */])(this.N, this.P);
        this.STD_DEV = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["d" /* stdDev */])(this.N, this.P);
        this.draw(this.result);
    };
    BinomialDistribComponent.prototype.draw = function (data) {
        this.options = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Distribution binomial'
            },
            xAxis: [{
                    title: { text: 'Nombre de succès' }
                }],
            yAxis: [{
                    title: { text: 'Probabilité' }
                }],
            series: [{
                    data: data
                }]
        };
    };
    return BinomialDistribComponent;
}());
BinomialDistribComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-binomial-distrib',
        template: __webpack_require__("../../../../../src/app/binomial-distrib/binomial-distrib.component.html"),
        styles: [__webpack_require__("../../../../../src/app/binomial-distrib/binomial-distrib.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BinomialDistribComponent);

//# sourceMappingURL=binomial-distrib.component.js.map

/***/ }),

/***/ "../../../../../src/app/binomial-law/binomial-law.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/binomial-law/binomial-law.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul de la loi binomial\n    </div>\n  <p class=\"badge\">\n    nombre de succès obtenus lors de la répétition indépendante de plusieurs expériences aléatoires identiques\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>N</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre d'expériences\" [(ngModel)]=\"N\" required></td>\n      </tr>\n      <tr>\n        <td>P</td>\n        <td><input class=\"form-control\" placeholder=\"Probabilité de succès\"  [(ngModel)]=\"P\" required></td>\n      </tr>\n      <tr>\n        <td>K</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de succès\"  [(ngModel)]=\"K\" required></td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <br />\n    Probalité de {{K === undefined ? 'K' : K}} succès pour {{N === undefined ? 'N' : N}} essais pour une probalité de succès de {{P === undefined ? 'P' : P}} : {{result === undefined ? 'X' : result}}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/binomial-law/binomial-law.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinomialLawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BinomialLawComponent = (function () {
    function BinomialLawComponent() {
    }
    BinomialLawComponent.prototype.compute = function () {
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["e" /* bilaw */])(this.N, this.P, this.K);
    };
    return BinomialLawComponent;
}());
BinomialLawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-binomial-law',
        template: __webpack_require__("../../../../../src/app/binomial-law/binomial-law.component.html"),
        styles: [__webpack_require__("../../../../../src/app/binomial-law/binomial-law.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BinomialLawComponent);

//# sourceMappingURL=binomial-law.component.js.map

/***/ }),

/***/ "../../../../../src/app/formulas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return bicoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bilaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bilawDistrib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return variance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return stdDev; });

function fact(n) {
    return n === 0 ? 1 : n * fact(n - 1);
}
function bicoeff(n, p) {
    return fact(n) / (fact(n - p) * fact(p));
}
function bilaw(n, p, k) {
    return bicoeff(n, k) *
        Math.pow(p, k) *
        Math.pow(1 - p, n - k);
}
function bilawDistrib(n, p) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result[i] = [i, bilaw(n, p, i)];
    }
    return result;
}
function expectedValue(n, p) {
    return (n * p);
}
function variance(n, p) {
    return (n * p) * (1 - p);
}
function stdDev(n, p) {
    return Math.sqrt(variance(n, p));
}
//# sourceMappingURL=formulas.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map