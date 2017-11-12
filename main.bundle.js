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
exports.push([module.i, "li.selected {\n  color: #fff\n}\n\nli.selected a {\n  color: #ccc\n}\n\n/*\n\n\nli a:before {\n   content:  \"\";\n   display: inline-block;\n   background: transparent;\n   width: 5px;\n   height: 1em;\n   vertical-align: middle;\n   margin-right: 5px;\n}\n\nli.selected a:before {\n   background: #555;\n}\n\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"wrapper\" class=\"toggled\">\n\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\">\n                        Navigation\n                    </a>\n                </li>\n                <li *ngFor=\"let m of menus\" \n                    [ngClass]=\"{'selected': selectedMenu === m}\"\n                    >\n                    <a href=\"#\" \n                       (click)=\"select(m)\"\n                       >{{m}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'Loi binomial'\">\n            <div class=\"container-fluid\">\n              <app-binomial-coef></app-binomial-coef>\n              <app-binomial-law></app-binomial-law>\n              <app-binomial-distrib></app-binomial-distrib>\n            </div>\n        </div>\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'Covariance'\">\n            <div class=\"container-fluid\">\n              <app-matrix-stddev></app-matrix-stddev>\n              <app-matrix-covariance></app-matrix-covariance>\n              <app-matrix-correlation></app-matrix-correlation>\n            </div>\n        </div>\n\n    </div>\n"

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
        this.menus = ['Loi binomial', 'Covariance'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.selectedMenu = sessionStorage.getItem('selection') || 'Loi binomial';
    };
    AppComponent.prototype.select = function (menu) {
        sessionStorage.setItem('selection', menu);
        this.selectedMenu = menu;
    };
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__matrix_stddev_matrix_stddev_component__ = __webpack_require__("../../../../../src/app/matrix-stddev/matrix-stddev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_matrix_editor_matrix_editor_component__ = __webpack_require__("../../../../../src/app/shared/matrix-editor/matrix-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matrix_covariance_matrix_covariance_component__ = __webpack_require__("../../../../../src/app/matrix-covariance/matrix-covariance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_matrix_view_matrix_view_component__ = __webpack_require__("../../../../../src/app/shared/matrix-view/matrix-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_matrix_loader_matrix_loader_component__ = __webpack_require__("../../../../../src/app/shared/matrix-loader/matrix-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__matrix_correlation_matrix_correlation_component__ = __webpack_require__("../../../../../src/app/matrix-correlation/matrix-correlation.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__binomial_distrib_binomial_distrib_component__["a" /* BinomialDistribComponent */],
            __WEBPACK_IMPORTED_MODULE_9__matrix_stddev_matrix_stddev_component__["a" /* MatrixStddevComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_matrix_editor_matrix_editor_component__["a" /* MatrixEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__matrix_covariance_matrix_covariance_component__["a" /* MatrixCovarianceComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_matrix_view_matrix_view_component__["a" /* MatrixViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_matrix_loader_matrix_loader_component__["a" /* MatrixLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__matrix_correlation_matrix_correlation_component__["a" /* MatrixCorrelationComponent */]
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["j" /* bicoeff */])(this.N, this.K);
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["e" /* bilawDistrib */])(this.N, this.P);
        this.E = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["f" /* expectedValue */])(this.N, this.P);
        this.V = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["g" /* variance */])(this.N, this.P);
        this.STD_DEV = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["h" /* stdDev */])(this.N, this.P);
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["i" /* bilaw */])(this.N, this.P, this.K);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mathjs__);
/* unused harmony export fact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return bicoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return bilaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bilawDistrib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return expectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return variance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stdDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return stdDevMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return maxtrixCovBiased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return maxtrixCovUnbiased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return maxtrixCorrUnbiased; });
/* unused harmony export maxtrixCorrBiased */



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
function unitColMatrix(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push([1]);
    }
    return __WEBPACK_IMPORTED_MODULE_0_mathjs__["matrix"](arr, 'dense');
}
function unitRowMatrix(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(1);
    }
    return __WEBPACK_IMPORTED_MODULE_0_mathjs__["matrix"](arr, 'dense');
}
function unitMatrix(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        var arr = [];
        for (var j = 0; j < n; j++) {
            arr.push(1);
        }
        result.push(arr);
    }
    return __WEBPACK_IMPORTED_MODULE_0_mathjs__["matrix"](result, 'dense');
}
function stdDevMatrix(m) {
    var i = m.size()[0];
    var U = unitMatrix(i);
    var res;
    res = __WEBPACK_IMPORTED_MODULE_0_mathjs__["multiply"](U, m);
    res = __WEBPACK_IMPORTED_MODULE_0_mathjs__["divide"](res, i);
    res = __WEBPACK_IMPORTED_MODULE_0_mathjs__["subtract"](m, res);
    return res;
}
function sum(A) {
    var result = 0;
    for (var i = 0; i < A.length; i++) {
        result += A[i];
    }
    return result;
}
function mean(A) {
    return sum(A) / A.length;
}
function varianceBiased(A) {
    var N = A.length;
    var mA = mean(A);
    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += (A[i] - mA) * (A[i] - mA);
    }
    return sum / N;
}
function varianceUnbiased(A) {
    var N = A.length;
    var mA = mean(A);
    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += (A[i] - mA) * (A[i] - mA);
    }
    return sum / (N - 1);
}
function stdBiased(A) {
    return Math.sqrt(varianceBiased(A));
}
function stdUnbiased(A) {
    return Math.sqrt(varianceUnbiased(A));
}
function covUnbiased(A, B) {
    var N = A.length;
    var mA = mean(A);
    var mB = mean(B);
    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += ((A[i] - mA) * (B[i] - mB));
    }
    return sum / (N - 1);
}
function covBiased(A, B) {
    var N = A.length;
    var mA = mean(A);
    var mB = mean(B);
    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += A[i] * B[i];
    }
    return sum / N - (mA * mB);
}
function corrBiased(A, B) {
    return covBiased(A, B) / (stdBiased(A) * stdBiased(B));
}
function corrUnbiased(A, B) {
    return covUnbiased(A, B) / (stdUnbiased(A) * stdUnbiased(B));
}
function maxtrixCovBiased(X) {
    var i = X.size()[0];
    var x = stdDevMatrix(X);
    var xT = __WEBPACK_IMPORTED_MODULE_0_mathjs__["transpose"](x);
    var res;
    res = __WEBPACK_IMPORTED_MODULE_0_mathjs__["multiply"](xT, x);
    res = __WEBPACK_IMPORTED_MODULE_0_mathjs__["divide"](res, i);
    return res;
}
function maxtrixCovUnbiased(matrix) {
    var result = [];
    var N = matrix[0].length;
    for (var i = 0; i < N; i++) {
        result.push([]);
    }
    for (var a = 0; a < N; a++) {
        var A = [];
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            A.push(row[a]);
        }
        for (var b = 0; b < N; b++) {
            var B = [];
            for (var i = 0; i < matrix.length; i++) {
                var row = matrix[i];
                B.push(row[b]);
            }
            result[a][b] = covUnbiased(A, B);
        }
    }
    return result;
}
function maxtrixCorrUnbiased(matrix) {
    var result = [];
    var N = matrix[0].length;
    for (var i = 0; i < N; i++) {
        result.push([]);
    }
    for (var a = 0; a < N; a++) {
        var A = [];
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            A.push(row[a]);
        }
        for (var b = 0; b < N; b++) {
            var B = [];
            for (var i = 0; i < matrix.length; i++) {
                var row = matrix[i];
                B.push(row[b]);
            }
            result[a][b] = corrUnbiased(A, B);
        }
    }
    return result;
}
function maxtrixCorrBiased(matrix) {
    var result = [];
    var N = matrix[0].length;
    for (var i = 0; i < N; i++) {
        result.push([]);
    }
    for (var a = 0; a < N; a++) {
        var A = [];
        for (var i = 0; i < matrix.length; i++) {
            var row = matrix[i];
            A.push(row[a]);
        }
        for (var b = 0; b < N; b++) {
            var B = [];
            for (var i = 0; i < matrix.length; i++) {
                var row = matrix[i];
                B.push(row[b]);
            }
            result[a][b] = corrBiased(A, B);
        }
    }
    return result;
}
function getSubCovs(matrix) {
    var result = [];
    var N = matrix.length;
    for (var a = 0; a < N; a++) {
        for (var b = 1; a + b <= N; b++) {
            var m = matrix.slice(a, a + b);
            if (m && m.length && m[0] && m[0].length) {
                var unbiased = maxtrixCovUnbiased(m);
                result.push(unbiased);
                try {
                    var mm = __WEBPACK_IMPORTED_MODULE_0_mathjs__["matrix"](m);
                    var biased = maxtrixCovBiased(mm);
                    var biasedArr = biased.toArray();
                    result.push(biasedArr);
                }
                catch (err) {
                    console.log('cannot calculate biased matrix', a, a + b);
                }
            }
        }
    }
    return result;
}
//# sourceMappingURL=formulas.js.map

/***/ }),

/***/ "../../../../../src/app/matrix-correlation/matrix-correlation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/matrix-correlation/matrix-correlation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul de la matrice de correlation\n    </div>\n  <p class=\"badge\">\n    Évaluer la dépendance entre plusieurs variables\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>I</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" required></td>\n      </tr>\n      <tr>\n        <td>J</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de colonnes\" [(ngModel)]=\"J\" required></td>\n      </tr>\n      <tr>\n        <td>Matrice</td>\n        <td>\n          <app-matrix-editor (onload)=\"onload($event)\" [I]=\"I\" [J]=\"J\" [(ngModel)]=\"matrix\"> </app-matrix-editor>\n        </td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <app-matrix-view *ngIf=\"unbiased\" [matrix]=\"unbiased\"></app-matrix-view>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/matrix-correlation/matrix-correlation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixCorrelationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatrixCorrelationComponent = (function () {
    function MatrixCorrelationComponent() {
        this.I = 3;
        this.J = 3;
    }
    MatrixCorrelationComponent.prototype.ngOnInit = function () {
    };
    MatrixCorrelationComponent.prototype.compute = function (ma) {
        var m = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](this.matrix);
        this.unbiased = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["a" /* maxtrixCorrUnbiased */])(this.matrix));
    };
    MatrixCorrelationComponent.prototype.onload = function (matrix) {
        this.I = matrix.length;
        this.J = matrix[0].length;
        this.matrix = matrix;
    };
    return MatrixCorrelationComponent;
}());
MatrixCorrelationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-correlation',
        template: __webpack_require__("../../../../../src/app/matrix-correlation/matrix-correlation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/matrix-correlation/matrix-correlation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixCorrelationComponent);

//# sourceMappingURL=matrix-correlation.component.js.map

/***/ }),

/***/ "../../../../../src/app/matrix-covariance/matrix-covariance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/matrix-covariance/matrix-covariance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul de la matrice de covariance\n    </div>\n  <p class=\"badge\">\n    Quantifier l'écart conjoint \n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>I</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" required></td>\n      </tr>\n      <tr>\n        <td>J</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de colonnes\" [(ngModel)]=\"J\" required></td>\n      </tr>\n      <tr>\n        <td>Matrice</td>\n        <td>\n          <app-matrix-editor (onload)=\"onload($event)\" [I]=\"I\" [J]=\"J\" [(ngModel)]=\"matrix\"> </app-matrix-editor>\n        </td>\n      </tr>\n    </table>\n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <br />\n    <strong *ngIf=\"unbiased\">Unbiased:</strong>\n    <app-matrix-view *ngIf=\"unbiased\" [matrix]=\"unbiased\"></app-matrix-view>\n    <br />\n    <strong *ngIf=\"biased\">Biased:</strong>\n    <app-matrix-view *ngIf=\"biased\" [matrix]=\"biased\"></app-matrix-view>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/matrix-covariance/matrix-covariance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixCovarianceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatrixCovarianceComponent = (function () {
    function MatrixCovarianceComponent() {
        this.I = 3;
        this.J = 3;
    }
    MatrixCovarianceComponent.prototype.ngOnInit = function () {
    };
    MatrixCovarianceComponent.prototype.compute = function (ma) {
        console.log('compute', JSON.stringify(this.matrix));
        var m = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](this.matrix);
        this.biased = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["b" /* maxtrixCovBiased */])(m);
        this.unbiased = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["c" /* maxtrixCovUnbiased */])(this.matrix));
    };
    MatrixCovarianceComponent.prototype.onload = function (matrix) {
        this.I = matrix.length;
        this.J = matrix[0].length;
        this.matrix = matrix;
    };
    return MatrixCovarianceComponent;
}());
MatrixCovarianceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-covariance',
        template: __webpack_require__("../../../../../src/app/matrix-covariance/matrix-covariance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/matrix-covariance/matrix-covariance.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixCovarianceComponent);

//# sourceMappingURL=matrix-covariance.component.js.map

/***/ }),

/***/ "../../../../../src/app/matrix-stddev/matrix-stddev.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 50%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/matrix-stddev/matrix-stddev.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul de la déviation standard\n    </div>\n  <p class=\"badge\">\n    Evaluer la dispersion des mesures autour de la valeur moyenne\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>I</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" required></td>\n      </tr>\n      <tr>\n        <td>J</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de colonnes\" [(ngModel)]=\"J\" required></td>\n      </tr>\n      <tr>\n        <td>Matrice</td>\n        <td>\n          <app-matrix-editor (onload)=\"onload($event)\" [I]=\"I\" [J]=\"J\" [(ngModel)]=\"matrix\"> </app-matrix-editor>\n        </td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <app-matrix-view *ngIf=\"result\" [matrix]=\"result\"></app-matrix-view>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/matrix-stddev/matrix-stddev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixStddevComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatrixStddevComponent = (function () {
    function MatrixStddevComponent() {
        this.I = 3;
        this.J = 3;
    }
    MatrixStddevComponent.prototype.ngOnInit = function () {
    };
    MatrixStddevComponent.prototype.compute = function (ma) {
        var m = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](this.matrix);
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["d" /* stdDevMatrix */])(m);
    };
    MatrixStddevComponent.prototype.onload = function (matrix) {
        this.I = matrix.length;
        this.J = matrix[0].length;
        this.matrix = matrix;
    };
    return MatrixStddevComponent;
}());
MatrixStddevComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-stddev',
        template: __webpack_require__("../../../../../src/app/matrix-stddev/matrix-stddev.component.html"),
        styles: [__webpack_require__("../../../../../src/app/matrix-stddev/matrix-stddev.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixStddevComponent);

//# sourceMappingURL=matrix-stddev.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/matrix-editor/matrix-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\n  padding: 1px;\n}\n\n.form-control {\n  width: 70px;\n  padding: 4px 10px;\n}\n\n/* hide spinner */\ninput[type=number] {-moz-appearance: textfield;}\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/matrix-editor/matrix-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-matrix-loader (onload)=\"handleOnload($event)\"></app-matrix-loader>\n<table *ngIf=\"matrix\">\n  <tr *ngFor=\"let line of lines\">\n    <td *ngFor=\"let col of cols\">\n      <input class=\"form-control\" [(ngModel)]=\"matrix[line -1][col - 1]\" type=\"number\" (ngModelChange)=\"onChange($event)\" />\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/shared/matrix-editor/matrix-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MatrixEditorComponent; }),
    multi: true
};
var MatrixEditorComponent = (function () {
    function MatrixEditorComponent() {
        this.onload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lines = [];
        this.cols = [];
        this.matrix = [];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    MatrixEditorComponent.prototype.ngOnInit = function () {
    };
    MatrixEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.onChangeCallback(_this.matrix);
        }, 0);
    };
    MatrixEditorComponent.prototype.handleOnload = function (matrix) {
        this.onload.emit(matrix);
    };
    MatrixEditorComponent.prototype.ngOnChanges = function (changes) {
        var I, J;
        if (changes['I']) {
            I = changes['I'].currentValue;
        }
        else {
            I = this.I || 0;
        }
        if (changes['J']) {
            J = changes['J'].currentValue;
        }
        else {
            J = this.J || 0;
        }
        if (changes['I'] || changes['J']) {
            this.createLines(I);
            this.createCols(J);
            if (!this.matrix || !this.matrix.length) {
                this.matrix = this.createMatrix(I, J);
                this.onChangeCallback(this.matrix);
            }
            else {
                this.updateMatrix(I, J);
            }
        }
    };
    MatrixEditorComponent.prototype.updateMatrix = function (I, J) {
        if (I > this.matrix.length) {
            var diff = I - this.matrix.length;
            for (var i = 0; i < diff; i++) {
                this.matrix.push([]);
            }
        }
        else if (I < this.matrix.length) {
            var diff = this.matrix.length - I;
            this.matrix.splice(I, diff);
        }
        var mJ = this.matrix[0] ? this.matrix[0].length : 0;
        if (J > mJ) {
            var diff = I - mJ;
            for (var i = 0; i < this.matrix.length; i++) {
                for (var j = 0; j < diff; j++) {
                    this.matrix[i].push(0);
                }
            }
        }
        else if (J < mJ) {
            var diff = mJ - J;
            for (var i = 0; i < this.matrix.length; i++) {
                this.matrix[i].splice(J, diff);
            }
        }
    };
    MatrixEditorComponent.prototype.createLines = function (I) {
        if (!isNaN(I) && I !== null) {
            this.lines = [];
            for (var i = 1; i <= I; i++) {
                this.lines.push(i);
            }
        }
        else {
            this.lines = [];
        }
    };
    MatrixEditorComponent.prototype.createCols = function (J) {
        if (!isNaN(J) && J !== null) {
            this.cols = [];
            for (var i = 1; i <= J; i++) {
                this.cols.push(i);
            }
        }
        else {
            this.cols = [];
        }
    };
    MatrixEditorComponent.prototype.createMatrix = function (I, J) {
        var result = [];
        for (var i = 1; i <= I; i++) {
            var row = [];
            for (var j = 1; j <= J; j++) {
                row[j - 1] = 0;
            }
            result[i - 1] = row;
        }
        return result;
    };
    Object.defineProperty(MatrixEditorComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.matrix;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v) {
                this.matrix = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    MatrixEditorComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    MatrixEditorComponent.prototype.writeValue = function (value) {
        if (value) {
            this.matrix = value;
        }
    };
    //From ControlValueAccessor interface
    MatrixEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    MatrixEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MatrixEditorComponent.prototype.onChange = function ($event) {
        this.value = this.matrix;
    };
    return MatrixEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MatrixEditorComponent.prototype, "onload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MatrixEditorComponent.prototype, "I", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MatrixEditorComponent.prototype, "J", void 0);
MatrixEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-editor',
        template: __webpack_require__("../../../../../src/app/shared/matrix-editor/matrix-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/matrix-editor/matrix-editor.component.css")],
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], MatrixEditorComponent);

var _a;
//# sourceMappingURL=matrix-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/matrix-loader/matrix-loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  width: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/matrix-loader/matrix-loader.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" name=\"file\" (change)=\"handleInputChange($event)\" />"

/***/ }),

/***/ "../../../../../src/app/shared/matrix-loader/matrix-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixLoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatrixLoaderComponent = (function () {
    function MatrixLoaderComponent() {
        this.onload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MatrixLoaderComponent.prototype.ngOnInit = function () {
    };
    MatrixLoaderComponent.prototype.parse = function (csv) {
        if (!csv || csv.length <= 1) {
            return [];
        }
        var max = 0;
        var result = csv.split(/[\r?\n]+/g).map(function (str) {
            var row = str.split(',').map(function (s) { return Number(s); });
            if (row.length > max) {
                max = row.length;
            }
            return row;
        });
        return result.filter(function (row) { return row.length === max; }); // filter unwanted lines
    };
    MatrixLoaderComponent.prototype.handleInputChange = function (e) {
        var _this = this;
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var arr = _this.parse(reader.result);
            _this.onload.emit(arr);
        }, false);
        if (file) {
            reader.readAsText(file);
        }
    };
    return MatrixLoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MatrixLoaderComponent.prototype, "onload", void 0);
MatrixLoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-loader',
        template: __webpack_require__("../../../../../src/app/shared/matrix-loader/matrix-loader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/matrix-loader/matrix-loader.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixLoaderComponent);

var _a;
//# sourceMappingURL=matrix-loader.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/matrix-view/matrix-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n}\n\n.icon {\n  position: absolute;\n  display: block;\n  right: 0;\n  top: 0;\n}\n\ntable {\n  margin: auto;\n  border-left: 1px solid #555;\n  border-right: 1px solid #555;\n  border-radius: 10px;\n  padding: 6px 8px;\n  border-collapse: separate;\n  border-top: 1px solid #ffffff;\n  border-bottom: 1px solid #ffffff;\n}\n\ntd {\n  padding: 6px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/matrix-view/matrix-view.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr *ngFor=\"let row of arr\">\n    <td *ngFor=\"let cell of row\">\n      {{ cell | number:'1.0-4'}}\n    </td>\n  </tr>\n</table>\n<div class=\"icon btn btn-default\" (click)=\"saveAsCsv()\">\n  <i class=\"fa fa-download\"></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/matrix-view/matrix-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatrixViewComponent = (function () {
    function MatrixViewComponent() {
    }
    MatrixViewComponent.prototype.ngOnInit = function () {
    };
    MatrixViewComponent.prototype.ngOnChanges = function (changes) {
        var matrix;
        if (changes['matrix']) {
            matrix = changes['matrix'].currentValue;
            if (matrix) {
                this.arr = matrix.toArray();
            }
        }
    };
    MatrixViewComponent.prototype.toCsv = function () {
        var _this = this;
        if (!this.arr) {
            return '';
        }
        return this.arr.map(function (row) { return row.map(function (n) { return _this.round(n, 4); }).join(','); }).join('\r\n');
    };
    MatrixViewComponent.prototype.round = function (value, decimals) {
        var val;
        val = Number(value) + 'e' + decimals;
        return Number(Math.round(val) + 'e-' + decimals);
    };
    MatrixViewComponent.prototype.saveAsCsv = function () {
        var csv = this.toCsv();
        var a = document.createElement("a");
        a.setAttribute('style', 'display: none');
        document.body.appendChild(a);
        var blob = new Blob([csv], { type: "octet/stream" }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'matrice.csv';
        a.click();
        window.URL.revokeObjectURL(url);
        window.setTimeout(function () {
            document.body.removeChild(a);
        }, 500);
    };
    return MatrixViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MatrixViewComponent.prototype, "matrix", void 0);
MatrixViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-view',
        template: __webpack_require__("../../../../../src/app/shared/matrix-view/matrix-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/matrix-view/matrix-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixViewComponent);

//# sourceMappingURL=matrix-view.component.js.map

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