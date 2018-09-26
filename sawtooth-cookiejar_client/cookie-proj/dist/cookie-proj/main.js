(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bake_bake_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bake/bake.component */ "./src/app/bake/bake.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _eat_eat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eat/eat.component */ "./src/app/eat/eat.component.ts");
/* harmony import */ var _count_count_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./count/count.component */ "./src/app/count/count.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'login/sidebar',
        component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
    },
    {
        path: 'login/sidebar/bake',
        component: _bake_bake_component__WEBPACK_IMPORTED_MODULE_2__["BakeComponent"]
    },
    {
        path: 'login/sidebar/eat',
        component: _eat_eat_component__WEBPACK_IMPORTED_MODULE_5__["EatComponent"]
    },
    {
        path: 'login/sidebar/count',
        component: _count_count_component__WEBPACK_IMPORTED_MODULE_6__["CountComponent"]
    },
    {
        path: 'register/login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'login/register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav>\n<ul>\n<li>\n<a routerLink=\"/login\">\n<i class=\"material-icons\">LOGIN</i>\n</a>\n</li>\n<li>\n<a routerLink=\"/register\">\n  <i class=\"material-icons\">REGISTER</i>\n</a>\n</li>\n</ul>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(routerModule) {
        this.routerModule = routerModule;
        this.title = 'cookie-proj';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _eat_eat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eat/eat.component */ "./src/app/eat/eat.component.ts");
/* harmony import */ var _count_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./count/count.component */ "./src/app/count/count.component.ts");
/* harmony import */ var _bake_bake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bake/bake.component */ "./src/app/bake/bake.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _eat_eat_component__WEBPACK_IMPORTED_MODULE_4__["EatComponent"],
                _count_count_component__WEBPACK_IMPORTED_MODULE_5__["CountComponent"],
                _bake_bake_component__WEBPACK_IMPORTED_MODULE_6__["BakeComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bake/bake.component.html":
/*!******************************************!*\
  !*** ./src/app/bake/bake.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"bake\">\n  <div class=\"form\">\n    <form class=\"bake\" (submit)=\"bakeCookie($event)\">\n  <input id=\"bake_id\" type=\"text\" placeholder=\"No of cookies\"/>\n \n  <button id=\"submit\" type=\"submit\" >Bake</button>\n\n  </form>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/bake/bake.component.scss":
/*!******************************************!*\
  !*** ./src/app/bake/bake.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bake/bake.component.ts":
/*!****************************************!*\
  !*** ./src/app/bake/bake.component.ts ***!
  \****************************************/
/*! exports provided: BakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BakeComponent", function() { return BakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BakeComponent = /** @class */ (function () {
    function BakeComponent(Data, router) {
        this.Data = Data;
        this.router = router;
    }
    BakeComponent.prototype.ngOnInit = function () {
    };
    BakeComponent.prototype.bakeCookie = function (event) {
        event.preventDefault();
        var target = event.target;
        var bakevalue = target.querySelector('#bake_id').value;
        this.Data.wrap_and_send("bake", [bakevalue]); //.subscribe({});
        console.log(bakevalue);
        // this.Data.getUserDetails(username)
    };
    BakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bake',
            template: __webpack_require__(/*! ./bake.component.html */ "./src/app/bake/bake.component.html"),
            styles: [__webpack_require__(/*! ./bake.component.scss */ "./src/app/bake/bake.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]])
    ], BakeComponent);
    return BakeComponent;
}());



/***/ }),

/***/ "./src/app/count/count.component.html":
/*!********************************************!*\
  !*** ./src/app/count/count.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>hlooo</h1>\n<div class=\"count\">\n <div class=\"form\">\n  <form class=\"count\"(submit)=\"countCookie($event)\">\n \n    <input id=\"count_id\" type=\"text\" placeholder=\"Name\"/>\n \n    <button id=\"submit\" type=\"submit\" >Count</button>\n\n  </form>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/count/count.component.scss":
/*!********************************************!*\
  !*** ./src/app/count/count.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/count/count.component.ts":
/*!******************************************!*\
  !*** ./src/app/count/count.component.ts ***!
  \******************************************/
/*! exports provided: CountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountComponent", function() { return CountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountComponent = /** @class */ (function () {
    function CountComponent(Data, router) {
        this.Data = Data;
        this.router = router;
        console.log("haiii");
    }
    CountComponent.prototype.ngOnInit = function () {
        console.log("oninit..");
        this.Data._send_to_rest_api(null)
            .then(function (response) { return response.json(); })
            .then(function (responseJson) {
            console.log(responseJson);
            alert(responseJson);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CountComponent.prototype.countCookie = function (event) {
        event.preventDefault();
        var target = event.target;
        var count = target.querySelector('#count_id').value;
        var cookie = this.Data._send_to_rest_api(null);
        console.log(count);
        // this.countCookie = this.pubsub.subscribe('pleaseCloseSidenav').subscribe((from) => {
        // 	this.sidenavOpened = false;
        // });
        // // usage of subscribe(event: string, callback: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
        // this.openSidenavSub = this.pubsub.subscribe('pleaseOpenSidenav', (from) => {
        // 	this.sidenavOpened = true;
        // });
        // this.Data.getUserDetails(username)
    };
    CountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-count',
            template: __webpack_require__(/*! ./count.component.html */ "./src/app/count/count.component.html"),
            styles: [__webpack_require__(/*! ./count.component.scss */ "./src/app/count/count.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]])
    ], CountComponent);
    return CountComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sawtooth-sdk/signing */ "./node_modules/sawtooth-sdk/signing/index.js");
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browserify-fs */ "./node_modules/browserify-fs/index.js");
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(browserify_fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sawtooth-sdk/protobuf */ "./node_modules/sawtooth-sdk/protobuf/index.js");
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sawtooth-sdk/signing/secp256k1 */ "./node_modules/sawtooth-sdk/signing/secp256k1.js");
/* harmony import */ var sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! text-encoding/lib/encoding */ "./node_modules/text-encoding/lib/encoding.js");
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { create } from 'domain';

var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.loggedInStatus = false;
        //   loggin_user(userIds){
        //     if (userIds == "") {
        //       alert("Please Enter User ID");
        //       window.location.href = '/login';
        //   } else {
        //     this.http.post('/login', { userId: userIds },
        //       function (data, textStatus, jqXHR) {
        //           if (data.done == 1) {
        //               sessionStorage.clear();
        //               sessionStorage.setItem("userId" , data.userId);
        //               // to allow sessionstorage to complete
        //               setTimeout(null, 101);
        //               alert(data.message);
        //               window.location.href = "/sidebar";
        //           } else {
        //               alert(data.message);
        //               window.location.href = "/login";
        //           }
        //       },'json');
        // }
        // }
        this.FAMILY_NAME = 'cookiejar';
        this.f = function hash(v) {
            return Object(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__["createHash"])('sha512').update(v).digest('hex');
        };
        var privateKeyStrBuf = this.getUserPriKey('cookiejar');
        var privateKeyStr = privateKeyStrBuf.toString().trim();
        var context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_3__["createContext"])('secp256k1');
        var privateKey = sawtooth_sdk_signing_secp256k1__WEBPACK_IMPORTED_MODULE_7__["Secp256k1PrivateKey"].fromHex(privateKeyStr);
        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_3__["CryptoFactory"](context).newSigner(privateKey);
        this.publicKey = this.signer.getPublicKey().asHex();
        this.address = this.f("cookiejar").substr(0, 6) + this.f(this.publicKey).substr(0, 64);
        console.log("Storing at: " + this.address);
    }
    DataService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    Object.defineProperty(DataService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.getUserPriKey = function (cookiejar) {
        console.log('cookiejar');
        //console.log("Current working directory is: " + process.cwd());
        // var userprivkeyfile = '/root/.sawtooth/keys/'+'cookiejar'+'.priv';
        // return fs.readFileSync(userprivkeyfile);
        return browserify_fs__WEBPACK_IMPORTED_MODULE_4__["readFileSync"]('/root/.sawtooth/keys/' + 'cookiejar' + '.priv');
    };
    DataService.prototype.getUserPubKey = function (cookiejar) {
        console.log('cookiejar');
        //console.log("Current working directory is: " + process.cwd());
        // var userpubkeyfile = '/root/.sawtooth/keys/'+'cookiejar'+'.pub';
        // return fs.readFileSync(userpubkeyfile);
        return browserify_fs__WEBPACK_IMPORTED_MODULE_4__["readFileSync"]('/root/.sawtooth/keys/' + 'cookiejar' + '.pub');
    };
    DataService.prototype._send_to_rest_api = function (batchListBytes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (batchListBytes == null) {
                var geturl = 'http://rest-api:8008/state/' + _this.address;
                console.log("Getting from: " + geturl);
                return Object(node_fetch__WEBPACK_IMPORTED_MODULE_6__["fetch"])(geturl, {
                    method: 'GET',
                })
                    .then(function (response) { return response.json(); })
                    .then(function (responseJson) {
                    var data = responseJson.data;
                    var amount = new buffer___WEBPACK_IMPORTED_MODULE_9__["Buffer"](data, 'base64').toString();
                    return amount;
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
            else {
                return Object(node_fetch__WEBPACK_IMPORTED_MODULE_6__["fetch"])('http://rest-api:8008/batches', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    },
                    body: batchListBytes
                });
            }
        });
    };
    DataService.prototype.wrap_and_send = function (action, values) {
        var userid = '';
        userid = "cookiejar";
        var payload = '';
        var address = this.address;
        console.log("wrapping for: " + this.address);
        var inputAddressList = [address];
        var outputAddressList = [address];
        payload = action + "," + values[0];
        var enc = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_8__["TextEncoder"]('utf8');
        var payloadBytes = enc.encode(payload);
        var transactionHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__["protobuf"].TransactionHeader.encode({
            familyName: 'cookiejar',
            familyVersion: '1.0',
            inputs: inputAddressList,
            outputs: outputAddressList,
            signerPublicKey: this.signer.getPublicKey().asHex(),
            nonce: "" + Math.random(),
            batcherPublicKey: this.signer.getPublicKey().asHex(),
            dependencies: [],
            payloadSha512: this.f(payloadBytes),
        }).finish();
        var transaction = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__["protobuf"].Transaction.create({
            header: transactionHeaderBytes,
            headerSignature: this.signer.sign(transactionHeaderBytes),
            payload: payloadBytes
        });
        var transactions = [transaction];
        var batchHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__["protobuf"].BatchHeader.encode({
            signerPublicKey: this.signer.getPublicKey().asHex(),
            transactionIds: transactions.map(function (txn) { return txn.headerSignature; }),
        }).finish();
        var batchSignature = this.signer.sign(batchHeaderBytes);
        var batch = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__["protobuf"].Batch.create({
            header: batchHeaderBytes,
            headerSignature: batchSignature,
            transactions: transactions,
        });
        var batchListBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_5__["protobuf"].BatchList.encode({
            batches: [batch]
        }).finish();
        this._send_to_rest_api(batchListBytes);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/eat/eat.component.html":
/*!****************************************!*\
  !*** ./src/app/eat/eat.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"eat\">\n<div class=\"form\">\n  <form class=\"eat\" (submit)=\"eatCookie($event)\">\n \n  <input id=\"eat_id\" type=\"text\" placeholder=\"No of cookies\"/>\n \n  <button id=\"submit\" type=\"submit\" >Eat</button>\n\n  </form>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/eat/eat.component.scss":
/*!****************************************!*\
  !*** ./src/app/eat/eat.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eat/eat.component.ts":
/*!**************************************!*\
  !*** ./src/app/eat/eat.component.ts ***!
  \**************************************/
/*! exports provided: EatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EatComponent", function() { return EatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//declare const Buffer
//var Buffer=require('').Buffer;
var EatComponent = /** @class */ (function () {
    function EatComponent(router, Data) {
        this.router = router;
        this.Data = Data;
    }
    EatComponent.prototype.ngOnInit = function () {
        console.log("Inside eat component");
    };
    EatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eat',
            template: __webpack_require__(/*! ./eat.component.html */ "./src/app/eat/eat.component.html"),
            styles: [__webpack_require__(/*! ./eat.component.scss */ "./src/app/eat/eat.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], EatComponent);
    return EatComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"login\">\n    <div class=\"form\">\n       \n        <form (submit)=\"loginUser($event)\">\n        <input type=\"text\" placeholder=\"username\" id=\"username\"/>\n       \n            <button id=\"submit\" type=\"submit\" >LOGIN</button>\n            \n          \n        <p class=\"message\">Not Registered? <a routerLink=\"register\">\n            <i class=\"material-icons\">Register </i>\n        </a> </p>\n        \n        </form>\n        </div>\n       </div>\n  \n  \n  <router-outlet></router-outlet>\n  \n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Data, routerModule) {
        this.Data = Data;
        this.routerModule = routerModule;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        // var userId = document.getElementById('loginId').value;
        //  this.Data.loggin_user(username);
        //     if (username == "") {
        //         alert("Please Enter User ID");
        //         window.location.href = '/login';
        //     } else {
        //         $http.post('/login', { userId: username },
        //         function (data, textStatus, jqXHR) {
        //             if (data.done == 1) {
        //                 sessionStorage.clear();
        //                 sessionStorage.setItem("userId" , data.userId);
        //                 // some delay before redirecting to homepage
        //                 // to allow sessionstorage to complete
        //                 setTimeout(null, 101);
        //                 alert(data.message);
        //                 window.location.href = "/sidebar";
        //             } else {
        //                 alert(data.message);
        //                 window.location.href = "/login";
        //             }
        //         },'json');
        // }
        // this.Data.getUserDetails(username).subscribe(data => {
        //   if(data.success) {
        //     this.router.navigate(['sidebar'])
        //     this.Data.setLoggedIn(true)
        //   } else {
        //     window.alert(data.message)
        //   }
        // })
        //     console.log(username)
        // this.Data.getUserDetails(username)
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <form class=\"Register\" (submit)=\"registerUser($event)\">\n    \n  <input id=\"register\" type=\"text\" placeholder=\"Name\" />\n \n  <button id=\"submit\" type=\"submit\">Register</button>\n  <p class=\"message\">Already Register? <a routerLink=\"login\">\n    <i class=\"material-icons\">Login</i>\n</a> </p>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (event) {
        event.preventDefault();
        var target = event.target;
        var register = target.querySelector('#register').value;
        // this.Data.putUserDetails(username)
        console.log(register);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n      <li>\n        <a routerLink=\"bake\">\n          <i class=\"material-icons\">BAKE</i>\n        </a>\n      </li>\n      <li>\n          <a routerLink=\"eat\">\n            <i class=\"material-icons\">EAT</i>\n          </a>\n        </li>\n        <li>\n            <a routerLink=\"count\">\n              <i class=\"material-icons\">COUNT</i>\n            </a>\n        </li>\n    </ul>\n  </nav>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/Downloads/cookie-proj/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** leveldown/package (ignored) ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** semver (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!***************************!*\
  !*** leveldown (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map