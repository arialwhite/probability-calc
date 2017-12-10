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

module.exports = "  <div id=\"wrapper\" class=\"toggled\">\n\n        <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n                <li class=\"sidebar-brand\">\n                    <a href=\"#\">\n                        Navigation\n                    </a>\n                </li>\n                <li *ngFor=\"let m of menus\" \n                    [ngClass]=\"{'selected': selectedMenu === m}\"\n                    >\n                    <a href=\"#\" \n                       (click)=\"select(m)\"\n                       >{{m}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'Loi binomial'\">\n            <div class=\"container-fluid\">\n              <app-binomial-coef></app-binomial-coef>\n              <app-binomial-law></app-binomial-law>\n              <app-binomial-distrib></app-binomial-distrib>\n            </div>\n        </div>\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'Covariance'\">\n            <div class=\"container-fluid\">\n              <app-matrix-stddev></app-matrix-stddev>\n              <app-matrix-covariance></app-matrix-covariance>\n              <app-matrix-correlation></app-matrix-correlation>\n            </div>\n        </div>\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'VaR'\">\n            <div class=\"container-fluid\">\n              <app-var-hist></app-var-hist>\n              <app-var-hist-two></app-var-hist-two>\n            </div>\n        </div>\n        <div id=\"page-content-wrapper\" *ngIf=\"selectedMenu == 'Volatilité'\">\n            <div class=\"container-fluid\">\n              <app-volat-hist></app-volat-hist>\n            </div>\n        </div>\n    </div>\n"

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
        this.menus = ['Loi binomial', 'Covariance', 'VaR', 'Volatilité'];
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__binomial_coef_binomial_coef_component__ = __webpack_require__("../../../../../src/app/binomial-coef/binomial-coef.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__binomial_law_binomial_law_component__ = __webpack_require__("../../../../../src/app/binomial-law/binomial-law.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__binomial_distrib_binomial_distrib_component__ = __webpack_require__("../../../../../src/app/binomial-distrib/binomial-distrib.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__matrix_stddev_matrix_stddev_component__ = __webpack_require__("../../../../../src/app/matrix-stddev/matrix-stddev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_matrix_editor_matrix_editor_component__ = __webpack_require__("../../../../../src/app/shared/matrix-editor/matrix-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__matrix_covariance_matrix_covariance_component__ = __webpack_require__("../../../../../src/app/matrix-covariance/matrix-covariance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_matrix_view_matrix_view_component__ = __webpack_require__("../../../../../src/app/shared/matrix-view/matrix-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_matrix_loader_matrix_loader_component__ = __webpack_require__("../../../../../src/app/shared/matrix-loader/matrix-loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__matrix_correlation_matrix_correlation_component__ = __webpack_require__("../../../../../src/app/matrix-correlation/matrix-correlation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__var_hist_var_hist_component__ = __webpack_require__("../../../../../src/app/var-hist/var-hist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_matrix_table_matrix_table_component__ = __webpack_require__("../../../../../src/app/shared/matrix-table/matrix-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_api__ = __webpack_require__("../../../../../src/app/shared/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__var_cov_var_cov_component__ = __webpack_require__("../../../../../src/app/var-cov/var-cov.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_cache_core__ = __webpack_require__("../../../../@ngx-cache/core/@ngx-cache/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__var_hist_two_var_hist_two_component__ = __webpack_require__("../../../../../src/app/var-hist-two/var-hist-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_multi_matrix_table_multi_matrix_table_component__ = __webpack_require__("../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__volat_hist_volat_hist_component__ = __webpack_require__("../../../../../src/app/volat-hist/volat-hist.component.ts");
/* unused harmony export highchartsFactory */
/* unused harmony export cacheFactory */
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
function cacheFactory() {
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_cache_core__["a" /* CacheStaticLoader */]({
        key: 'NGX_CACHE',
        lifeSpan: {
            "expiry": 1000 * 3600,
            "TTL": 1000 * 3600
        }
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__binomial_coef_binomial_coef_component__["a" /* BinomialCoefComponent */],
            __WEBPACK_IMPORTED_MODULE_8__binomial_law_binomial_law_component__["a" /* BinomialLawComponent */],
            __WEBPACK_IMPORTED_MODULE_9__binomial_distrib_binomial_distrib_component__["a" /* BinomialDistribComponent */],
            __WEBPACK_IMPORTED_MODULE_10__matrix_stddev_matrix_stddev_component__["a" /* MatrixStddevComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_matrix_editor_matrix_editor_component__["a" /* MatrixEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__matrix_covariance_matrix_covariance_component__["a" /* MatrixCovarianceComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_matrix_view_matrix_view_component__["a" /* MatrixViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_matrix_loader_matrix_loader_component__["a" /* MatrixLoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__matrix_correlation_matrix_correlation_component__["a" /* MatrixCorrelationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__var_hist_var_hist_component__["a" /* VarHistComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_matrix_table_matrix_table_component__["a" /* MatrixTableComponent */],
            __WEBPACK_IMPORTED_MODULE_19__var_cov_var_cov_component__["a" /* VarCovComponent */],
            __WEBPACK_IMPORTED_MODULE_21__var_hist_two_var_hist_two_component__["a" /* VarHistTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__shared_multi_matrix_table_multi_matrix_table_component__["a" /* MultiMatrixTableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__volat_hist_volat_hist_component__["a" /* VolatHistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_20__ngx_cache_core__["b" /* CacheModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_20__ngx_cache_core__["c" /* CacheLoader */],
                useFactory: (cacheFactory)
            })
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            },
            __WEBPACK_IMPORTED_MODULE_18__shared_api__["CoinDeskApiService"],
            __WEBPACK_IMPORTED_MODULE_18__shared_api__["AlphaVantageApiService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["l" /* bicoeff */])(this.N, this.K);
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["g" /* bilawDistrib */])(this.N, this.P);
        this.E = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["h" /* expectedValue */])(this.N, this.P);
        this.V = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["i" /* variance */])(this.N, this.P);
        this.STD_DEV = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["j" /* stdDev */])(this.N, this.P);
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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formulas__["k" /* bilaw */])(this.N, this.P, this.K);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return bicoeff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return bilaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return bilawDistrib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return expectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return variance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return stdDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stdDevMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return maxtrixCovBiased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return maxtrixCovUnbiased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return maxtrixCorrUnbiased; });
/* unused harmony export maxtrixCorrBiased */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mean; });



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
        this.unbiased = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["c" /* maxtrixCorrUnbiased */])(this.matrix));
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
        var m = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](this.matrix);
        this.biased = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["d" /* maxtrixCovBiased */])(m);
        this.unbiased = __WEBPACK_IMPORTED_MODULE_1_mathjs__["matrix"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["e" /* maxtrixCovUnbiased */])(this.matrix));
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

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Calcul de la déviation\n    </div>\n  <p class=\"badge\">\n    Evaluer la dispersion des mesures autour de la valeur moyenne\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>I</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" required></td>\n      </tr>\n      <tr>\n        <td>J</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de colonnes\" [(ngModel)]=\"J\" required></td>\n      </tr>\n      <tr>\n        <td>Matrice</td>\n        <td>\n          <app-matrix-editor (onload)=\"onload($event)\" [I]=\"I\" [J]=\"J\" [(ngModel)]=\"matrix\"> </app-matrix-editor>\n        </td>\n      </tr>\n    </table>\n    \n    <input type=\"button\" value=\"Calculer\" (click)=\"compute()\" class=\"btn btn-primary pull-right\" />\n    <br />\n    <hr />\n    <app-matrix-view *ngIf=\"result\" [matrix]=\"result\"></app-matrix-view>\n  </div>\n</div>"

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
        this.result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formulas__["f" /* stdDevMatrix */])(m);
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

/***/ "../../../../../src/app/shared/api/alpha-vantage-api/alpha-vantage-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaVantageApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlphaVantageApiService = (function () {
    function AlphaVantageApiService(http) {
        this.http = http;
    }
    AlphaVantageApiService.prototype.getBitCoinHistory = function (size, live) {
        if (live === void 0) { live = true; }
        var url = live ? "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=OJL446MIQFZVACMN"
            : './assets/data/alphavantage-BCT.json';
        return this.http.get(url).take(1)
            .toPromise()
            .then(function (data) {
            var result;
            var content = [];
            var bpiJSON = data['Time Series (Digital Currency Daily)'];
            var dates = Object.keys(data['Time Series (Digital Currency Daily)']);
            for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
                var dt = dates_1[_i];
                var value = bpiJSON[dt]['4a. close (USD)'];
                content.push([dt, value]);
            }
            return { data: content.slice(0, size) };
        });
    };
    AlphaVantageApiService.prototype.getEthereumHistory = function (size, live) {
        if (live === void 0) { live = true; }
        var url = live ? "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=OJL446MIQFZVACMN"
            : './assets/data/alphavantage-ETH.json';
        return this.http.get(url).take(1)
            .toPromise()
            .then(function (data) {
            var result;
            var content = [];
            var bpiJSON = data['Time Series (Digital Currency Daily)'];
            var dates = Object.keys(data['Time Series (Digital Currency Daily)']);
            for (var _i = 0, dates_2 = dates; _i < dates_2.length; _i++) {
                var dt = dates_2[_i];
                var value = bpiJSON[dt]['4a. close (USD)'];
                content.push([dt, value]);
            }
            return { data: content.slice(0, size) };
        });
    };
    AlphaVantageApiService.prototype.getDashHistory = function (size, live) {
        if (live === void 0) { live = true; }
        var url = live ? "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=DASH&market=USD&apikey=OJL446MIQFZVACMN"
            : './assets/data/alphavantage-DASH.json';
        return this.http.get(url).take(1)
            .toPromise()
            .then(function (data) {
            var result;
            var content = [];
            var bpiJSON = data['Time Series (Digital Currency Daily)'];
            var dates = Object.keys(data['Time Series (Digital Currency Daily)']);
            for (var _i = 0, dates_3 = dates; _i < dates_3.length; _i++) {
                var dt = dates_3[_i];
                var value = bpiJSON[dt]['4a. close (USD)'];
                content.push([dt, value]);
            }
            return { data: content.slice(0, size) };
        });
    };
    return AlphaVantageApiService;
}());
AlphaVantageApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AlphaVantageApiService);

var _a;
//# sourceMappingURL=alpha-vantage-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api/alpha-vantage-api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alpha_vantage_api_service__ = __webpack_require__("../../../../../src/app/shared/api/alpha-vantage-api/alpha-vantage-api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alpha_vantage_api_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api/coin-desk-api/coin-desk-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDeskApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinDeskApiService = (function () {
    function CoinDeskApiService(http) {
        this.http = http;
    }
    CoinDeskApiService.prototype.getBpiHistory = function (start, end) {
        var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + start + "&end=" + end;
        return this.http.get(url).take(1)
            .toPromise()
            .then(function (data) {
            var result;
            var bpi = [];
            var bpiJSON = data['bpi'];
            var dates = Object.keys(data['bpi']);
            for (var _i = 0, dates_1 = dates; _i < dates_1.length; _i++) {
                var dt = dates_1[_i];
                var value = bpiJSON[dt];
                bpi.push([dt, value]);
            }
            return { data: bpi };
        });
    };
    return CoinDeskApiService;
}());
CoinDeskApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], CoinDeskApiService);

var _a;
//# sourceMappingURL=coin-desk-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api/coin-desk-api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coin_desk_api_service__ = __webpack_require__("../../../../../src/app/shared/api/coin-desk-api/coin-desk-api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__coin_desk_api_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coin_desk_api__ = __webpack_require__("../../../../../src/app/shared/api/coin-desk-api/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "CoinDeskApiService", function() { return __WEBPACK_IMPORTED_MODULE_0__coin_desk_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_vantage_api__ = __webpack_require__("../../../../../src/app/shared/api/alpha-vantage-api/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AlphaVantageApiService", function() { return __WEBPACK_IMPORTED_MODULE_1__alpha_vantage_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_serie__ = __webpack_require__("../../../../../src/app/shared/api/time-serie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_serie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__time_serie__);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/api/time-serie.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=time-serie.js.map

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

/***/ "../../../../../src/app/shared/matrix-table/matrix-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n}\n\n.icon {\n  position: absolute;\n  display: block;\n  right: 0;\n  top: -40px;\n}\n\ntable {\n  margin: auto;\n}\n\ntd {\n  padding: 6px;\n}\n\ntbody {\n    display:block;\n    height:45vh;\n    overflow:auto;\n}\nthead, tbody tr {\n    display:table;\n    width:100%;\n    table-layout:fixed;/* even columns width , fix width of table too*/\n}\nthead {\n    width: calc( 100% - 1em )/* scrollbar is average 1em/16px width, remove it from thead width */\n}\n\n.line-number {\n  color: #aaa;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/matrix-table/matrix-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let h of headers\">{{h.label}}</th>\n    </tr>\n  </thead>\n  <tr *ngFor=\"let row of data; let i = index\">\n    <td *ngFor=\"let cell of row; let j = index\">\n      <div *ngIf=\"headers[j]; let header\">\n        <div *ngIf=\"header.type === 'numeric'\">\n          {{ cell | number:'1.0-4'}} {{ cell ? header.afterValue : undefined }}\n        </div>\n        <div *ngIf=\"header.type === 'string'\">\n          {{ cell }} <div class=\"line-number pull-right\">{{header.appendLineCount ? '('+(i+1)+')': ''}}</div>\n        </div>\n      </div>\n    </td>\n  </tr>\n</table>\n<div class=\"icon btn btn-default\" (click)=\"saveAsCsv()\">\n  <i class=\"fa fa-download\"></i>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/matrix-table/matrix-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatrixTableComponent = (function () {
    function MatrixTableComponent() {
    }
    MatrixTableComponent.prototype.ngOnInit = function () {
    };
    MatrixTableComponent.prototype.toCsv = function () {
        var _this = this;
        if (!this.data) {
            return '';
        }
        return this.data.map(function (row) { return row.map(function (n) { return _this.normalize(n); }).join(','); }).join('\r\n');
    };
    MatrixTableComponent.prototype.normalize = function (value) {
        return (typeof value === 'number') ? this.round(value, 4) : value;
    };
    MatrixTableComponent.prototype.round = function (value, decimals) {
        var val;
        val = Number(value) + 'e' + decimals;
        return Number(Math.round(val) + 'e-' + decimals);
    };
    MatrixTableComponent.prototype.saveAsCsv = function () {
        var csv = this.toCsv();
        var a = document.createElement("a");
        a.setAttribute('style', 'display: none');
        document.body.appendChild(a);
        var blob = new Blob([csv], { type: "octet/stream" }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'table.csv';
        a.click();
        window.URL.revokeObjectURL(url);
        window.setTimeout(function () {
            document.body.removeChild(a);
        }, 500);
    };
    return MatrixTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MatrixTableComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MatrixTableComponent.prototype, "headers", void 0);
MatrixTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-matrix-table',
        template: __webpack_require__("../../../../../src/app/shared/matrix-table/matrix-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/matrix-table/matrix-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MatrixTableComponent);

//# sourceMappingURL=matrix-table.component.js.map

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

/***/ "../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n}\n\n.btn-right {\n  position: absolute;\n  display: block;\n  right: 50px;\n  top: -50px;\n}\n\n.btn-left {\n  position: absolute;\n  display: block;\n  right: 100px;\n  top: -50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"icon btn btn-default btn-left\" (click)=\"go(page - 1)\" *ngIf=\"page > 0\">\n  <i class=\"fa fa-arrow-circle-left fa-2x\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"icon btn btn-default btn-right\" (click)=\"go(page + 1)\" *ngIf=\"page + 1 < headers.length\">\n  <i class=\"fa fa-arrow-circle-right fa-2x\" aria-hidden=\"true\"></i>\n</div>\n<div *ngFor=\"let h of headers; let i = index\">\n  <app-matrix-table [data]=\"data[i]\" [headers]=\"h\" *ngIf=\"page === i\"></app-matrix-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiMatrixTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiMatrixTableComponent = (function () {
    function MultiMatrixTableComponent() {
        this.page = 0;
    }
    MultiMatrixTableComponent.prototype.ngOnInit = function () {
        this.page = parseInt(localStorage.getItem(this.name), 10) || 0;
    };
    MultiMatrixTableComponent.prototype.go = function (page) {
        this.page = page;
        localStorage.setItem(this.name, String(this.page));
    };
    return MultiMatrixTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MultiMatrixTableComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultiMatrixTableComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MultiMatrixTableComponent.prototype, "headers", void 0);
MultiMatrixTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-multi-matrix-table',
        template: __webpack_require__("../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/multi-matrix-table/multi-matrix-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MultiMatrixTableComponent);

//# sourceMappingURL=multi-matrix-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/var-cov/var-cov.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 70%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/var-cov/var-cov.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    VaR Covariance-Variance\n    </div>\n  <p class=\"badge\">\n    Exemple : calcul de la VaR avec la méthode Covariance-Variance sur le bitcoin et l'Ethereum\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>Nombre de jours</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n      <tr>\n        <td>Horizon</td>\n        <td><input class=\"form-control\" placeholder=\"Période détention\" [(ngModel)]=\"horizon\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n    </table>\n    <br />\n    <hr />\n    <a href=\"https://www.alphavantage.co\">\n      <div class=\"btn btn-success\">\n        Powered by Alphavantage\n      </div>\n    </a>\n    <br /> <br />\n    <app-matrix-table *ngIf=\"data\" [data]=\"data\" [headers]=\"headers\"></app-matrix-table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/var-cov/var-cov.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("../../../../../src/app/shared/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarCovComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VarCovComponent = (function () {
    function VarCovComponent(alphaVantageApi) {
        this.alphaVantageApi = alphaVantageApi;
        this.I = 150;
        this.horizon = 10;
        this.data = [];
        this.headers = [
            { label: 'Date', afterValue: undefined, type: 'string' },
            { label: 'Bitcoin', afterValue: 'USD', type: 'numeric' },
            { label: 'Ethereum', afterValue: 'USD', type: 'numeric' },
            { label: 'Dash', afterValue: 'USD', type: 'numeric' }
        ];
    }
    VarCovComponent.prototype.ngOnInit = function () {
        this.feed();
    };
    VarCovComponent.prototype.getData = function (I) {
        return Promise.all([
            this.alphaVantageApi.getBitCoinHistory(I),
            this.alphaVantageApi.getEthereumHistory(I),
            this.alphaVantageApi.getDashHistory(I)
        ]);
    };
    VarCovComponent.prototype.feed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var end, I, start, series, bitCoin, ethereum, dash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        end = __WEBPACK_IMPORTED_MODULE_2_moment__();
                        I = this.I > 501 ? 501 : this.I;
                        start = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(I, 'day');
                        return [4 /*yield*/, this.getData(I)];
                    case 1:
                        series = _a.sent();
                        bitCoin = series[0];
                        ethereum = series[1];
                        dash = series[2];
                        this.data = bitCoin.data;
                        this.data = this.mergeTimeSerie(this.data, ethereum);
                        this.data = this.mergeTimeSerie(this.data, dash);
                        return [2 /*return*/];
                }
            });
        });
    };
    VarCovComponent.prototype.mergeTimeSerie = function (data, serie) {
        return data.map(function (row, i) {
            return row.concat([serie.data[i][1]]);
        });
    };
    VarCovComponent.prototype.merge = function (data, matrix) {
        return data.map(function (row, i) {
            return row.concat(matrix[i]);
        });
    };
    VarCovComponent.prototype.toNumberArray = function (data) {
        return data.map(function (row) {
            return row.slice(1);
        });
    };
    VarCovComponent.prototype.toMatrix = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_mathjs__["matrix"](data.map(function (row) {
            return row.slice(1);
        }));
    };
    return VarCovComponent;
}());
VarCovComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-var-cov',
        template: __webpack_require__("../../../../../src/app/var-cov/var-cov.component.html"),
        styles: [__webpack_require__("../../../../../src/app/var-cov/var-cov.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"]) === "function" && _a || Object])
], VarCovComponent);

var _a;
//# sourceMappingURL=var-cov.component.js.map

/***/ }),

/***/ "../../../../../src/app/var-hist-two/var-hist-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 70%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/var-hist-two/var-hist-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    VaR historique\n  </div>\n  <p class=\"badge\">\n    Exemple : calcul de la VaR historique sur un portfeuille de plusieurs indices\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>Nombre de Bitcoins</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"bcCount\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n      <tr>\n        <td>Nombre d'Ethereums</td>\n        <td><input class=\"form-control\" placeholder=\"Période détention\" [(ngModel)]=\"ethCount\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n    </table>\n    <br />\n    <hr />\n    <a href=\"https://www.alphavantage.co\">\n      <div class=\"btn btn-success\">\n        Powered by Alphavantage\n      </div>\n    </a>\n    <span class=\"warning\">\n       <label> <input  [(ngModel)]=\"isOffline\" type=\"checkbox\" (ngModelChange)=\"clearAndFeed()\" /> Offline Dataset</label>\n    </span>\n    <br /> <br />\n    <app-multi-matrix-table [name]=\"'hist-2-table'\" [data]=\"[data1, data2, data3]\" [headers]=\"[headers1, headers2, headers3]\"></app-multi-matrix-table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/var-hist-two/var-hist-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("../../../../../src/app/shared/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarHistTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VarHistTwoComponent = (function () {
    function VarHistTwoComponent(alphaVantageApi) {
        this.alphaVantageApi = alphaVantageApi;
        this.bcCount = 50;
        this.ethCount = 300;
        this.I = 501;
        this.horizon = 10;
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
        this.isOffline = true;
        this.headers1 = [
            { label: 'Date', afterValue: undefined, type: 'string', appendLineCount: true },
            { label: 'Bitcoin', afterValue: 'USD', type: 'numeric' },
            { label: 'Ethereum', afterValue: 'USD', type: 'numeric' },
            { label: 'Scenario Bitcoin', afterValue: 'USD', type: 'numeric' },
            { label: 'Scenario Ethereum', afterValue: 'USD', type: 'numeric' }
        ];
        this.headers2 = [
            { label: 'Date', afterValue: undefined, type: 'string', appendLineCount: true },
            { label: 'Valeur portefeuille', afterValue: 'USD', type: 'numeric' },
            { label: 'Gain & Perte', afterValue: 'USD', type: 'numeric' }
        ];
        this.headers3 = [
            { label: 'Rang', afterValue: undefined, type: 'string' },
            { label: 'Confiance', afterValue: '%', type: 'numeric' },
            { label: 'VaR 1J', afterValue: 'USD', type: 'numeric' },
            { label: 'VaR 10J', afterValue: 'USD', type: 'numeric' }
        ];
    }
    VarHistTwoComponent.prototype.ngOnInit = function () {
        this.feed();
    };
    VarHistTwoComponent.prototype.getData = function (I) {
        return Promise.all([
            this.alphaVantageApi.getBitCoinHistory(I, !this.isOffline),
            this.alphaVantageApi.getEthereumHistory(I, !this.isOffline)
        ]);
    };
    VarHistTwoComponent.prototype.feed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var end, I, start, series, _a, bitCoin, ethereum, dash, scenarioBitCoin, scenarioEthereum, portfolioSerie, currentPortfolioValue, pnl, sPnl, var10, ranks, confidences;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        end = __WEBPACK_IMPORTED_MODULE_2_moment__();
                        I = this.I > 501 ? 501 : this.I;
                        start = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(I, 'day');
                        _a = this.withoutMissingDates;
                        return [4 /*yield*/, this.getData(I)];
                    case 1:
                        series = _a.apply(this, [_b.sent()]);
                        bitCoin = series[0];
                        ethereum = series[1];
                        dash = series[2];
                        scenarioBitCoin = this.toScenario(bitCoin);
                        scenarioEthereum = this.toScenario(ethereum);
                        this.data1 = bitCoin.data;
                        this.data1 = this.mergeTimeSerie(this.data1, ethereum);
                        this.data1 = this.mergeTimeSerie(this.data1, scenarioBitCoin);
                        this.data1 = this.mergeTimeSerie(this.data1, scenarioEthereum);
                        this.data2 = this.colToMatrix(bitCoin.data, 0);
                        portfolioSerie = this.computePortfolioValues([scenarioBitCoin, scenarioEthereum], [this.bcCount, this.ethCount]);
                        this.data2 = this.mergeSerie(this.data2, portfolioSerie);
                        currentPortfolioValue = this.computeCurrentPortfolioValues([bitCoin, ethereum], [this.bcCount, this.ethCount]);
                        pnl = this.computePortfolioPnL(portfolioSerie, currentPortfolioValue);
                        this.data2 = this.mergeSerie(this.data2, pnl);
                        sPnl = this.sortPnl(pnl);
                        var10 = this.valueAtRisk10Days(sPnl);
                        ranks = this.getRanks(sPnl);
                        confidences = this.getConfidences(ranks);
                        this.data3 = this.serieToMatrix(ranks);
                        this.data3 = this.mergeSerie(this.data3, confidences);
                        this.data3 = this.mergeSerie(this.data3, sPnl);
                        this.data3 = this.mergeSerie(this.data3, var10);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
   * Get series with same dates number
   *
   * At worst the number of obervation will be less than expected
   */
    VarHistTwoComponent.prototype.withoutMissingDates = function (series) {
        var _this = this;
        var allSizesCorrect = series.every(function (serie) {
            return serie.data.length === _this.I;
        });
        if (allSizesCorrect) {
            return series;
        }
        // Note: may be optimized
        // get available dates
        var dates = new Set();
        for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
            var serie = series_1[_i];
            for (var item in serie.data) {
                dates.add(item[0]);
            }
        }
        // find dates that not every series contain
        var missingDates = new Set();
        dates.forEach(function (dt) {
            var missing = false;
            for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
                var serie = series_2[_i];
                var found = false;
                for (var item in serie.data) {
                    if (item[0] === dt) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    missingDates.add(dt);
                }
            }
        });
        // return series with dates that every series contain
        return series.map(function (serie) {
            var result = {
                data: serie.data.filter(function (item) {
                    return !missingDates.has(item[0]);
                })
            };
            return result;
        });
    };
    VarHistTwoComponent.prototype.clear = function () {
        this.data1 = [];
        this.data2 = [];
        this.data3 = [];
    };
    VarHistTwoComponent.prototype.clearAndFeed = function () {
        this.clear();
        return this.feed();
    };
    VarHistTwoComponent.prototype.getConfidences = function (ranks) {
        return ranks.map(function (value) {
            return (1 - value / ranks.length) * 100;
        });
    };
    VarHistTwoComponent.prototype.getRanks = function (serie) {
        return serie.map(function (value, i) { return i + 1; });
    };
    VarHistTwoComponent.prototype.sortPnl = function (values) {
        var result = values.slice();
        result.sort(function (a, b) { return a > b ? 1 : a === b ? 0 : -1; });
        return result;
    };
    VarHistTwoComponent.prototype.valueAtRisk10Days = function (values) {
        return values.map(function (value) {
            return Math.sqrt(10) * value;
        });
    };
    VarHistTwoComponent.prototype.toScenario = function (serie) {
        var result = {
            data: new Array()
        };
        var mostRecent = serie.data[0][1];
        for (var i = 0, ii = serie.data.length; i < ii - 1; i++) {
            var dt = serie.data[i][0];
            var current = serie.data[i][1];
            var previous = serie.data[i + 1][1];
            var scenario = mostRecent * current / previous;
            var item = [dt, scenario];
            result.data.push(item);
        }
        return result;
    };
    VarHistTwoComponent.prototype.computeCurrentPortfolioValues = function (allSeries, allCounts) {
        var result = 0;
        for (var i = 0, ii = allSeries.length; i < ii; i++) {
            var serie = allSeries[i];
            var count = allCounts[i];
            var mostRecent = serie.data[0][1];
            result += mostRecent * count;
        }
        return result;
    };
    VarHistTwoComponent.prototype.computePortfolioPnL = function (portfolioSerie, currentPortfolioValue) {
        return portfolioSerie.map(function (value) { return currentPortfolioValue - value; });
    };
    VarHistTwoComponent.prototype.computePortfolioValues = function (allScenarios, allCounts) {
        var results = [];
        var _loop_1 = function (i, ii) {
            var scenarios = allScenarios[i];
            var count = allCounts[i];
            results[i] = scenarios.data.map(function (row) {
                return count * row[1];
            });
        };
        for (var i = 0, ii = allScenarios.length; i < ii; i++) {
            _loop_1(i, ii);
        }
        if (!results.length) {
            return [];
        }
        var I = results[0].length;
        var J = results.length;
        var portfolio = [];
        for (var i = 0; i < I; i++) {
            var value = 0;
            for (var j = 0; j < J; j++) {
                value += results[j][i];
            }
            portfolio[i] = value;
        }
        return portfolio;
    };
    VarHistTwoComponent.prototype.mergeTimeSerie = function (data, serie) {
        return data.map(function (row, i) {
            return row.concat([serie.data[i] ? serie.data[i][1] : undefined]);
        });
    };
    VarHistTwoComponent.prototype.mergeSerie = function (data, serie) {
        return data.map(function (row, i) {
            return row.concat([serie[i]]);
        });
    };
    VarHistTwoComponent.prototype.getCol = function (data, index) {
        return data.map(function (row, i) {
            return row[index];
        });
    };
    VarHistTwoComponent.prototype.colToMatrix = function (data, index) {
        return data.map(function (row, i) {
            return [row[index]];
        });
    };
    VarHistTwoComponent.prototype.serieToMatrix = function (data) {
        return data.map(function (value) { return [value]; });
    };
    VarHistTwoComponent.prototype.merge = function (data, matrix) {
        return data.map(function (row, i) {
            return row.concat(matrix[i]);
        });
    };
    VarHistTwoComponent.prototype.toNumberArray = function (data) {
        return data.map(function (row) {
            return row.slice(1);
        });
    };
    VarHistTwoComponent.prototype.toMatrix = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_mathjs__["matrix"](data.map(function (row) {
            return row.slice(1);
        }));
    };
    return VarHistTwoComponent;
}());
VarHistTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-var-hist-two',
        template: __webpack_require__("../../../../../src/app/var-hist-two/var-hist-two.component.html"),
        styles: [__webpack_require__("../../../../../src/app/var-hist-two/var-hist-two.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"]) === "function" && _a || Object])
], VarHistTwoComponent);

var _a;
//# sourceMappingURL=var-hist-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/var-hist/var-hist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 70%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/var-hist/var-hist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    VaR historique\n    </div>\n  <p class=\"badge\">\n    Exemple : calcul de la VaR historique sur le cours du bitcoin\n  </p>\n  <div class=\"panel-body\">\n    <table class=\"table\">\n      <tr>\n        <td>Nombre de jours</td>\n        <td><input class=\"form-control\" placeholder=\"Nombre de lignes\" [(ngModel)]=\"I\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n      <tr>\n        <td>Horizon</td>\n        <td><input class=\"form-control\" placeholder=\"Période détention\" [(ngModel)]=\"horizon\" (ngModelChange)=\"feed()\" required></td>\n      </tr>\n    </table>\n    <br />\n    <hr />\n    <a href=\"https://www.coindesk.com/\">\n      <div class=\"btn btn-info\">\n        Powered by CoinDesk\n      </div>\n    </a>\n    <br /> <br />\n    <app-matrix-table *ngIf=\"data\" [data]=\"data\" [headers]=\"headers\"></app-matrix-table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/var-hist/var-hist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("../../../../../src/app/shared/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarHistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VarHistComponent = (function () {
    function VarHistComponent(coinDeskApi) {
        this.coinDeskApi = coinDeskApi;
        this.I = 500;
        this.horizon = 10;
        this.data = [];
        this.headers = [
            { label: 'Date', afterValue: undefined, type: 'string' },
            { label: 'Bitcoin', afterValue: 'USD', type: 'numeric' },
            { label: 'Gain & Perte', afterValue: 'USD', type: 'numeric' },
            { label: 'Confiance', afterValue: '%', type: 'numeric' },
            { label: 'VaR 10J', afterValue: 'USD', type: 'numeric' }
        ];
    }
    VarHistComponent.prototype.ngOnInit = function () {
        this.feed();
    };
    VarHistComponent.prototype.feed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var end, I, start, res, arr, pnl, sPnl, confidence, valueAtRisk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        end = __WEBPACK_IMPORTED_MODULE_2_moment__();
                        I = this.I > 501 ? 501 : this.I;
                        start = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(I, 'day');
                        return [4 /*yield*/, this.coinDeskApi.getBpiHistory(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'))];
                    case 1:
                        res = _a.sent();
                        this.data = res.data.reverse();
                        arr = this.toNumberArray(this.data);
                        pnl = this.getPnl(arr);
                        sPnl = this.getSortedPnl(pnl);
                        confidence = this.getConfidences(sPnl, pnl);
                        valueAtRisk = this.getValueAtRisk(pnl, this.horizon);
                        this.data = this.merge(this.data, pnl);
                        this.data = this.merge(this.data, confidence);
                        this.data = this.merge(this.data, valueAtRisk);
                        return [2 /*return*/];
                }
            });
        });
    };
    VarHistComponent.prototype.indexOf2D = function (j, arr, value) {
        for (var i = 0, ii = arr.length; i < ii; i++) {
            if (arr[i][j] === value) {
                return i;
            }
        }
        return -1;
    };
    VarHistComponent.prototype.getConfidences = function (sPnl, pnl) {
        var _this = this;
        return pnl.map(function (row, i) {
            return row.map(function (value, j) {
                var index = _this.indexOf2D(j, sPnl, value);
                var confidence = 100 * (1 - (index + 1) / sPnl.length);
                return confidence;
            });
        });
    };
    VarHistComponent.prototype.getValueAtRisk = function (pnl, day) {
        return pnl.map(function (row) {
            return row.map(function (value) {
                return Math.sqrt(day) * value;
            });
        });
    };
    VarHistComponent.prototype.merge = function (data, pnl) {
        return data.map(function (row, i) {
            return row.concat(pnl[i]);
        });
    };
    VarHistComponent.prototype.getSortedPnl = function (pnl) {
        if (!pnl.length) {
            return [];
        }
        var result = __WEBPACK_IMPORTED_MODULE_3_mathjs__["transpose"](pnl.slice());
        result = result.map(function (values) {
            values.sort(function (a, b) { return a > b ? 1 : a === b ? 0 : -1; });
            return values;
        });
        return __WEBPACK_IMPORTED_MODULE_3_mathjs__["transpose"](result);
    };
    VarHistComponent.prototype.getPnl = function (values) {
        if (!values.length) {
            return [];
        }
        var lastRow = values[values.length - 1];
        var otherRows = values.slice(0, -1);
        var result = otherRows.map(function (row) {
            return row.map(function (value, i) {
                return value - lastRow[i];
            });
        });
        result.push(lastRow.map(function () { return 0; }));
        return result;
    };
    VarHistComponent.prototype.toNumberArray = function (data) {
        return data.map(function (row) {
            return row.slice(1);
        });
    };
    VarHistComponent.prototype.toMatrix = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_mathjs__["matrix"](data.map(function (row) {
            return row.slice(1);
        }));
    };
    return VarHistComponent;
}());
VarHistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-var-hist',
        template: __webpack_require__("../../../../../src/app/var-hist/var-hist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/var-hist/var-hist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api__["CoinDeskApiService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api__["CoinDeskApiService"]) === "function" && _a || Object])
], VarHistComponent);

var _a;
//# sourceMappingURL=var-hist.component.js.map

/***/ }),

/***/ "../../../../../src/app/volat-hist/volat-hist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 70%;\n  margin: 20px auto;\n}\n\n.badge {\n  margin: 20px 0 0 20px;\n}\n\n.result-table {\n  margin: 10px;\n}\n\n.result-table td {\n  padding : 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/volat-hist/volat-hist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Volatilité journalière\n  </div>\n  <p class=\"badge\">\n    Exemple : Calcul de la volatilité journalière composée en continu du Bitcoin\n  </p>\n  <div class=\"panel-body\">\n    <br />\n    <hr />\n    <a href=\"https://www.alphavantage.co\">\n      <div class=\"btn btn-success\">\n        Powered by Alphavantage\n      </div>\n    </a>\n    <span class=\"warning\">\n       <label> <input  [(ngModel)]=\"isOffline\" type=\"checkbox\" (ngModelChange)=\"clearAndFeed()\" /> Offline Dataset</label>\n    </span>\n    <br /> <br />\n    <app-multi-matrix-table [name]=\"'volat-hist-table'\" [data]=\"[data1]\" [headers]=\"[headers1]\"></app-multi-matrix-table>\n  </div>\n  <table class=\"result-table\">\n      <tr>\n        <td>Variance journalière : </td>\n        <td> {{dailyVariancePercent | number : '1.0-4'}} %</td>\n      </tr>\n      <tr>\n        <td>Volatilité journalière : </td>\n        <td> {{dailyVolatilityPercent | number : '1.0-4'}} %</td>\n      </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/volat-hist/volat-hist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api__ = __webpack_require__("../../../../../src/app/shared/api/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__("../../../../mathjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulas__ = __webpack_require__("../../../../../src/app/formulas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolatHistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var VolatHistComponent = (function () {
    function VolatHistComponent(alphaVantageApi) {
        this.alphaVantageApi = alphaVantageApi;
        this.I = 501;
        this.data1 = [];
        this.isOffline = true;
        this.headers1 = [
            { label: 'Date', afterValue: undefined, type: 'string', appendLineCount: true },
            { label: 'Bitcoin', afterValue: 'USD', type: 'numeric' },
            { label: 'Rentabilité journalière', afterValue: '%', type: 'numeric' }
        ];
    }
    VolatHistComponent.prototype.ngOnInit = function () {
        this.feed();
    };
    VolatHistComponent.prototype.getData = function (I) {
        return this.alphaVantageApi.getBitCoinHistory(I, !this.isOffline);
    };
    VolatHistComponent.prototype.clear = function () {
        this.data1 = [];
    };
    VolatHistComponent.prototype.clearAndFeed = function () {
        this.clear();
        return this.feed();
    };
    VolatHistComponent.prototype.feed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var end, I, bitCoin, rprice, dailyReturns, dailyReturnsPercent, dailyVariance, dailyVolatility;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        end = __WEBPACK_IMPORTED_MODULE_2_moment__();
                        I = this.I > 501 ? 501 : this.I;
                        return [4 /*yield*/, this.getData(I)];
                    case 1:
                        bitCoin = _a.sent();
                        rprice = this.getRelativePrices(bitCoin);
                        dailyReturns = this.getDailyReturns(rprice);
                        dailyReturnsPercent = this.toPercents(dailyReturns);
                        dailyVariance = this.computeDailyVariance(dailyReturns);
                        this.dailyVariancePercent = dailyVariance;
                        dailyVolatility = Math.sqrt(dailyVariance);
                        this.dailyVolatilityPercent = dailyVolatility;
                        this.data1 = bitCoin.data;
                        this.data1 = this.mergeSerie(this.data1, dailyReturnsPercent);
                        return [2 /*return*/];
                }
            });
        });
    };
    VolatHistComponent.prototype.getRelativePrices = function (serie) {
        var result = [];
        var mostRecent = serie.data[0][1];
        for (var i = 0, ii = serie.data.length; i < ii - 1; i++) {
            var current = serie.data[i][1];
            var previous = serie.data[i + 1][1];
            result.push(current / previous);
        }
        return result;
    };
    VolatHistComponent.prototype.getDailyReturns = function (rprices) {
        return rprices.map(function (value) { return Math.log(value); });
    };
    VolatHistComponent.prototype.computeDailyVariance = function (returns) {
        var rMean = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__formulas__["a" /* mean */])(returns);
        var allSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__formulas__["b" /* sum */])(returns.map(function (r) { return Math.pow(r - rMean, 2); }));
        return allSum / (returns.length - 1);
    };
    VolatHistComponent.prototype.toPercents = function (values) {
        return values.map(function (value) { return value * 100; });
    };
    VolatHistComponent.prototype.mergeTimeSerie = function (data, serie) {
        return data.map(function (row, i) {
            return row.concat([serie.data[i] ? serie.data[i][1] : undefined]);
        });
    };
    VolatHistComponent.prototype.mergeSerie = function (data, serie) {
        return data.map(function (row, i) {
            return row.concat([serie[i]]);
        });
    };
    VolatHistComponent.prototype.getCol = function (data, index) {
        return data.map(function (row, i) {
            return row[index];
        });
    };
    VolatHistComponent.prototype.colToMatrix = function (data, index) {
        return data.map(function (row, i) {
            return [row[index]];
        });
    };
    VolatHistComponent.prototype.serieToMatrix = function (data) {
        return data.map(function (value) { return [value]; });
    };
    VolatHistComponent.prototype.merge = function (data, matrix) {
        return data.map(function (row, i) {
            return row.concat(matrix[i]);
        });
    };
    VolatHistComponent.prototype.toNumberArray = function (data) {
        return data.map(function (row) {
            return row.slice(1);
        });
    };
    VolatHistComponent.prototype.toMatrix = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_mathjs__["matrix"](data.map(function (row) {
            return row.slice(1);
        }));
    };
    return VolatHistComponent;
}());
VolatHistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-volat-hist',
        template: __webpack_require__("../../../../../src/app/volat-hist/volat-hist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/volat-hist/volat-hist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_api__["AlphaVantageApiService"]) === "function" && _a || Object])
], VolatHistComponent);

var _a;
//# sourceMappingURL=volat-hist.component.js.map

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map