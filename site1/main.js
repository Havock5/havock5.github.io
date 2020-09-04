(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\">J.Soles</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/releases\" routerLinkActive=\"active\" href=\"releases\">RELEASES</a></li>\r\n                <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/signup\" routerLinkActive=\"active\" href=\"signup\">SIGN UP</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">MENS\r\n          <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a class=\"nav-link\" routerLink=\"/deals\" href=\"deals\">SHOES</a></li>\r\n                        <li><a href=\"#\">CLOTHES</a></li>\r\n                        <li><a href=\"#\">TBD</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">WOMENS\r\n        <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a class=\"nav-link\" routerLink=\"/womens-shoes\" href=\"womens-shoes\">SHOES</a></li>\r\n                        <li><a class=\"nav-link\" routerLink=\"/womens-clothes\" href=\"womens-clothes\">CLOTHES</a></li>\r\n                        <li><a href=\"#\">TBD</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">KIDS\r\n      <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a class=\"nav-link\" routerLink=\"/kids-shoes\" href=\"kids-shoes\">SHOES</a></li>\r\n                        <li><a class=\"nav-link\" routerLink=\"/kids-clothes\" href=\"kids-clothes\">CLOTHES</a></li>\r\n                        <li><a href=\"#\">TBD</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li><a href=\"#\"><span class=\"glyphicon glyphicon-search\"></span></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"Header-top\">\r\n        <ul class=\"store-signin\">\r\n        <li><a href=\"#\">Welcome, Sign In</a></li>\r\n        <li><a href=\"#\">Find a Store</a></li>\r\n\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n\r\n</header>\r\n\r\n<div fxLayoutAlign=\"center center\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n</div>\r\n\r\n\r\n<mat-grid-list cols=\"4\" rowHeight=\"500px\" gutterSize=\"20px\">\r\n    <mat-grid-tile class=\"MensShoe\" *ngFor=\"let deal of MensShoes\">\r\n        <div fxLayout='row' fxLayoutWrap class=\"card-deck-container mat-elevation-z4\">\r\n            <mat-card style=\"margin-top:20px;\">\r\n                <mat-card-header>\r\n                    <mat-card-title>{{deal.Name}}</mat-card-title>\r\n                    <mat-card-subtitle>{{deal.Date}}\r\n                        <p>{{deal.Store}}</p>\r\n                        <p>{{deal.Price}}</p>\r\n                    </mat-card-subtitle>\r\n                    <mat-card-subtitle></mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"{{deal.Images}}\" alt=\"Image Link Could Not Load\">\r\n                <mat-card-content>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button>\r\n            <mat-icon>favorite</mat-icon>\r\n          </button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </mat-grid-tile>\r\n\r\n\r\n    <script type=\"text/javascript\">\r\n        var table = $('#shoe_table').DataTable({\r\n            ajax: 'data.json'\r\n        });\r\n        table.ajax.url('newData.json').load('https://shoeappapi20191004045147.azurewebsites.net/api/deals');\r\n\r\n        $.getJSON('https://shoeappapi20191004045147.azurewebsites.net/api/deals', function(data) {\r\n            console.log(data);\r\n        });\r\n        $(document).ready(function() {\r\n            $.ajax({\r\n                url: \"https://shoeappapi20191004045147.azurewebsites.net/api/deals\",\r\n                dataType: 'json',\r\n                type: 'get',\r\n                cache: false,\r\n                success: function(shoe_data) {\r\n                    var shoe_data = '';\r\n                    $.each(each.shoe_data, function(index, shoe) {\r\n                        shoe_data += '<tr>';\r\n                        shoe_data += '<td>' + shoe.name + '</td>';\r\n                        shoe_data += '<td>' + shoe.price + '</td>';\r\n                        shoe_data += '<td>' + shoe.Store + '</td>';\r\n                        shoe_data += '<tr>';\r\n                    });\r\n                    $('#shoe_table').append(shoe_data);\r\n                },\r\n                error: function(d) {\r\n                    alert(\"404.Please wait until the File is loaded.\");\r\n                }\r\n            });\r\n        });\r\n    </script>0");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"text-center\">\r\n    <a class=\"up-arrow\" href=\"#\" data-toggle=\"tooltip\" title=\"TO TOP\">\r\n        <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n    </a><br><br>\r\n    <p>Nakano</p>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"container\">\n        <div class=\"header-tab-1\">\n        </div>\n        <h1>Popular Shoes</h1>\n        <div class=\"popular-shoes\">\n            <div class=\"pop-div\">\n                <div class=\"pop\" id=\"pop-1\">\n\n                </div>\n                <p class=\"pop-text\" id=\"pop-text-1\">Jordans</p>\n            </div>\n            <div class=\"pop-div\">\n                <div class=\"pop\" id=\"pop-2\">\n\n                </div>\n                <p class=\"pop-text\" id=\"pop-text-2\">Nike</p>\n            </div>\n            <div class=\"pop-div\">\n                <div class=\"pop\" id=\"pop-3\">\n\n                </div>\n                <p class=\"pop-text\" id=\"pop-text-3\">Adidas</p>\n            </div>\n            \n        </div>\n        <div class=\"shoe-links\">\n            <ul class=\"shoe-links-list\">\n                <li><a href=\"\">Mens Shoes</a></li>\n                <li><a href=\"http://localhost:4200/womens-shoes\">Womens Shoes</a></li>\n                <li><a href=\"\">Boys Shoes</a></li>\n                <li><a href=\"\">Girls Shoes</a></li>\n            </ul>\n        </div>\n        <h1>Style on Budget</h1>\n        <div class=\"clothes-sale\">\n            <div class=\"clothes-div\">\n                <div class=\"clothes\" id=\"clothes-1\">\n\n                </div>\n                <p class=\"clothes-text\" id=\"clothes-text-1\">Under Armour</p>\n            </div>\n            <div class=\"clothes-div\">\n                <div class=\"clothes\" id=\"clothes-2\">\n\n                </div>\n                <p class=\"clothes-text\" id=\"clothes-text-2\">Nike</p>\n            </div>\n            <div class=\"clothes-div\">\n                <div class=\"clothes\" id=\"clothes-3\">\n\n                </div>\n                <p class=\"clothes-text\" id=\"clothes-text-3\">Adidas</p>\n            </div>\n            \n        </div>\n        <div class=\"clothes-links\">\n            <ul class=\"clothes-links-list\">\n                <li><a href=\"\">Mens Clothes</a></li>\n                <li><a href=\"\">Womens Clothes</a></li>\n                <li><a href=\"\">Boys Clothes</a></li>\n                <li><a href=\"\">Girls Clothes</a></li>\n            </ul>\n        </div>\n        \n\n\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-clothes/kids-clothes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kids-clothes/kids-clothes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>kids-clothes works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidenav\">\n    <h2 class=\"sideNavHeader\" style=\"color: white;\">Sort By:</h2>\n    <div class=\"storeCheckList\">\n        <button class=\"storeDropDownBtn\">Store\n            <i class=\"fa fa-caret-down\"></i>\n        </button>\n        <div class=\"dropdownContainer\" *ngFor=\"let s of HKS\">\n            <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n            <label class=\"colorCheckListLabels\" for=\"hibbets\">{{s.Store}}</label><br>    \n    </div>\n    </div>\n    <div class=\"priceCheckList\" >\n    <button class=\"priceDropDownBtn\">Price    \n        <i class=\"fa fa-caret-down\"></i>\n    </button>\n        <div class=\"dropdownContainer\" *ngFor=\"let p of HKS\">\n            <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n            <label class=\"colorCheckListLabels\" for=\"hibbets\">{{p.Price}}</label><br>    \n    </div>\n    </div>\n    <div class=\"colorCheckList\">\n        <button class=\"colorDropDownBtn\">Color            \n            <i class=\"fa fa-caret-down\"></i>\n        </button>\n        <div class=\"dropdownContainer\" *ngFor=\"let c of HKS\">\n            <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n            <label class=\"colorCheckListLabels\" for=\"hibbets\">{{c.Color}}</label><br>    \n    </div>\n    </div>\n</div>\n\n\n<mat-grid-list cols=\"4\" rowHeight=\"600px\" gutterSize=\"20px\">\n    <mat-grid-tile class=\"MensShoe\" *ngFor=\"let deal of HKS\">\n        <div fxLayout='row' fxLayoutWrap class=\"card-deck-container mat-elevation-z4\">\n            <mat-card>\n                <mat-card-header>\n                    <mat-card-title>{{deal.Names}}</mat-card-title>\n                    <mat-card-subtitle>{{deal.Date}}\n                        <p>Find them at <a href=\"https://www.{{deal.Store}}.com\" target=\"_blank\">{{deal.Store}}</a></p>\n                            <p>Product Price: ${{deal.Price}}</p>\n                    </mat-card-subtitle>\n                    <mat-card-subtitle></mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image src=\"{{deal.Images}}\" alt=\"Image Link Could Not Load\">\n                <mat-card-content>\n                    <p>Color: {{deal.Color}}</p>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </mat-grid-tile>\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mens-clothes/mens-clothes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mens-clothes/mens-clothes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>mens-clothes works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mens-shoes/mens-shoes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mens-shoes/mens-shoes.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>mens-shoes works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols=\"4\" rowHeight=\"600px\" gutterSize=\"20px\">\n    <mat-grid-tile class=\"divcls\" *ngFor=\"let release of Release\">\n        <div fxLayout='row' fxFlex.md=\"80\" fxLayoutWrap class=\"card-deck-container\">\n            <mat-card>\n                <mat-card-header>\n                    <mat-card-title>{{release.Names}}</mat-card-title>\n                    <mat-card-subtitle>Release Date: {{release.Date}}\n                        <p>Find them at <a href=\"https://www.{{release.Store}}.com\" target=\"_blank\">{{release.Store}}</a></p>\n                    </mat-card-subtitle>\n                    <mat-card-subtitle></mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image src=\"{{release.Images}}\" alt=\"Image Link Could Not Load\">\n            </mat-card>\n        </div>\n    </mat-grid-tile>\n</mat-grid-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n\r\n    <h2>Nakano SignUp</h2>\r\n    <form [formGroup]=\"entryForm\" (ngSubmit)=\"onSubmit\">\r\n        <legend>Email</legend>\r\n\r\n        <mat-form-field class=\"new-entry-field\">\r\n            <label for=\"FirstName\"></label>\r\n            <input class=\"form-control\" type=\"text\" id=\"FirstName\" matInput placeholder=\"FirstName\" formControlName=\"FirstName\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"form-group\" class=\"new-entry-field\">\r\n            <label for=\"LastName\">Last Name</label>\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"LastName\" id=\"LastName\" matInput placeholder=\"LastName\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Email\">Email Address</label>\r\n            <input class=\"form-control\" type=\"Email\" id=\"Email\" formControlName=\"Email\" aria-describedby=\"Email\" required>\r\n            <small id=\"Email\"></small>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Brand\">Favorite Brand</label>\r\n            <input class=\"form-control\" type=\"text\" id=\"Brand\" matInput placeholder=\"Brand\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Size\">Shoe Size</label>\r\n            <select class=\"form-control\" id=\"Size\">\r\n                <option>Option</option>\r\n                <option value=\"6\">6</option>\r\n                <option value=\"6.5\">6.5</option>\r\n                <option value=\"7\">7</option>\r\n                <option value=\"7.5\">7.5</option>\r\n                <option value=\"8\">8</option>\r\n                <option value=\"8.5\">8.5</option>\r\n                <option value=\"9\">9</option>\r\n                <option value=\"9.5\">9.5</option>\r\n                <option value=\"10\">10</option>\r\n                <option value=\"10.5\">10.5</option>\r\n                <option value=\"11\">11</option>\r\n                <option value=\"11.5\">11.5</option>\r\n                <option value=\"12\">12</option>\r\n                <option value=\"12.5\">12.5</option>\r\n                <option value=\"13\">13</option>\r\n                <option value=\"13.5\">13.5</option>\r\n                <option value=\"14\">14</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"comments\">Leave Any Comments About The Wesite</label>\r\n            <textarea id=\"comments\" rows=\"5\"></textarea>\r\n            <input class=\"form-control\" type=\"text\">\r\n        </div>\r\n\r\n        <button class=\"btn btn-dark\" type=\"submit\" id=\"button\" onclick=\"submit()\" value=\"Submit\">Submit</button>\r\n    </form>\r\n\r\n</body>\r\n\r\n<script>\r\n    $(document).ready(function() {\r\n        $('#submit').click(function() {\r\n            var First = $('#First Name').val();\r\n            var Last = $('#Last Name').val();\r\n            var Email = $('#Email').val();\r\n            var Size = $('#Size').val();\r\n            var Brand = $('#Brand').val();\r\n            var datastring = 'Email=' + Email + 'Size=' + Size + 'Brand' + Brand;\r\n            $ajax({\r\n                url: 'signup.php',\r\n                type: \"POST\",\r\n                data: datastring\r\n            })\r\n        })\r\n\r\n    })\r\n</script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/womens-clothes/womens-clothes.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/womens-clothes/womens-clothes.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>womens-clothes works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/womens-shoes/womens-shoes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/womens-shoes/womens-shoes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n</head>\n<body>\n    <!-- Side navigation -->\n    <div class=\"sidenav\">\n        <h2 class=\"sideNavHeader\" style=\"color: white;\">Sort By:</h2>\n        <div class=\"storeCheckList\">\n            <button class=\"storeDropDownBtn\">Store\n                <i class=\"fa fa-caret-down\"></i>\n            </button>\n            <div class=\"dropdownContainer\" *ngFor=\"let s of HWS\">\n                <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n                <label class=\"colorCheckListLabels\" for=\"hibbets\">{{s.Store}}</label><br>    \n        </div>\n        </div>\n        <div class=\"priceCheckList\" >\n        <button class=\"priceDropDownBtn\">Price    \n            <i class=\"fa fa-caret-down\"></i>\n        </button>\n            <div class=\"dropdownContainer\" *ngFor=\"let p of HWS\">\n                <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n                <label class=\"colorCheckListLabels\" for=\"hibbets\">{{p.Price}}</label><br>    \n        </div>\n        </div>\n        <div class=\"colorCheckList\">\n            <button class=\"colorDropDownBtn\">Color            \n                <i class=\"fa fa-caret-down\"></i>\n            </button>\n            <div class=\"dropdownContainer\" *ngFor=\"let c of HWS\">\n                <input class=\"checkBox\" type=\"checkbox\" id=\"color\" name=\"color\" value=\"Hibbets\">\n                <label class=\"colorCheckListLabels\" for=\"hibbets\">{{c.Color}}</label><br>    \n        </div>\n        </div>\n    </div>\n    \n    \n        <mat-grid-list cols=\"4\" rowHeight=\"500px\" gutterSize=\"5px\">\n            <mat-grid-tile class=\"WomensShoe\" *ngFor=\"let deal of HWS\">\n                <div fxLayout='row' fxLayoutWrap class=\"card-deck-container mat-elevation-z4\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>{{deal.Names}}</mat-card-title>\n                            <mat-card-subtitle>{{deal.Date}}\n                                <p>Store: <a>{{deal.Store}}</a></p>\n                            <p>Product Price: ${{deal.Price}}</p>\n                        </mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image src=\"{{deal.Images}}\" alt=\"Image Link Could Not Load\">\n                    <mat-card-content>\n                        <p style=\"font-size: 10px;\">Color: {{deal.Color}}</p>\n                    </mat-card-content>\n                    \n                </mat-card>\n            </div>\n        </mat-grid-tile>\n        </mat-grid-list>\n        <script>\n             \n          function show() {\n      var x = document.getElementsByClassName(\"dropdownContainer\");\n      if (x.style.display === \"none\") {\n        x.style.display = \"block\";\n      } else {\n        x.style.display = \"none\";\n      }\n    }\n    \n        </script>\n        </body>\n        <script >\n            function show() {\n          var x = document.getElementsByClassName(\"dropdownContainer\");\n          if (x.style.display === \"none\") {\n            x.style.display = \"block\";\n          } else {\n            x.style.display = \"none\";\n          }\n        }\n        \n        </script>\n</html>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _releases_releases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./releases/releases.component */ "./src/app/releases/releases.component.ts");
/* harmony import */ var _womens_shoes_womens_shoes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./womens-shoes/womens-shoes.component */ "./src/app/womens-shoes/womens-shoes.component.ts");
/* harmony import */ var _womens_clothes_womens_clothes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./womens-clothes/womens-clothes.component */ "./src/app/womens-clothes/womens-clothes.component.ts");
/* harmony import */ var _kids_shoes_kids_shoes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kids-shoes/kids-shoes.component */ "./src/app/kids-shoes/kids-shoes.component.ts");
/* harmony import */ var _kids_clothes_kids_clothes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kids-clothes/kids-clothes.component */ "./src/app/kids-clothes/kids-clothes.component.ts");
/* harmony import */ var _mens_clothes_mens_clothes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mens-clothes/mens-clothes.component */ "./src/app/mens-clothes/mens-clothes.component.ts");












// routes
const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'deals', component: _deals_deals_component__WEBPACK_IMPORTED_MODULE_4__["DealsComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] },
    { path: 'releases', component: _releases_releases_component__WEBPACK_IMPORTED_MODULE_6__["ReleasesComponent"] },
    { path: 'womens-shoes', component: _womens_shoes_womens_shoes_component__WEBPACK_IMPORTED_MODULE_7__["WomensShoesComponent"] },
    { path: 'womens-clothes', component: _womens_clothes_womens_clothes_component__WEBPACK_IMPORTED_MODULE_8__["WomensClothesComponent"] },
    { path: 'kids-shoes', component: _kids_shoes_kids_shoes_component__WEBPACK_IMPORTED_MODULE_9__["KidsShoesComponent"] },
    { path: 'kids-clothes', component: _kids_clothes_kids_clothes_component__WEBPACK_IMPORTED_MODULE_10__["KidsClothesComponent"] },
    { path: 'mens-clothes', component: _mens_clothes_mens_clothes_component__WEBPACK_IMPORTED_MODULE_11__["MensClothesComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar {\r\n    color: white;\r\n    background-color: black;\r\n}\r\n\r\n.container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    color: black;\r\n}\r\n\r\n.container .mat-drawer {\r\n    min-width: 200px;\r\n}\r\n\r\n.container .mat-drawer .mat-button .footer {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: left;\r\n    color: white;\r\n    background-color: black;\r\n    border-radius: 0%;\r\n}\r\n\r\n.spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.Header-top{\r\n    background-color: black;\r\n    float: right;\r\n    padding: 0;\r\n    border-top: thin white solid;\r\n    width: 100%;\r\n}\r\n\r\n.store-signin{\r\n    color: white;\r\n    list-style: none;\r\n    margin-bottom: 0;\r\n    padding-right: 10px;\r\n    float: right;\r\n\r\n}\r\n\r\n.store-signin li{\r\n    padding-right: 15px;\r\n    float: right;\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRhaW5lciAubWF0LWRyYXdlciB7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5tYXQtZHJhd2VyIC5tYXQtYnV0dG9uIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uSGVhZGVyLXRvcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IHRoaW4gd2hpdGUgc29saWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0b3JlLXNpZ25pbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuXHJcbi5zdG9yZS1zaWduaW4gbGl7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIFxyXG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _releases_releases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./releases/releases.component */ "./src/app/releases/releases.component.ts");
/* harmony import */ var _deals_deals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deals/deals.component */ "./src/app/deals/deals.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _releases_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./releases.service */ "./src/app/releases.service.ts");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sign-up.service */ "./src/app/sign-up.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home.service */ "./src/app/home.service.ts");
/* harmony import */ var _mens_clothes_mens_clothes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mens-clothes/mens-clothes.component */ "./src/app/mens-clothes/mens-clothes.component.ts");
/* harmony import */ var _mens_shoes_mens_shoes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mens-shoes/mens-shoes.component */ "./src/app/mens-shoes/mens-shoes.component.ts");
/* harmony import */ var _womens_clothes_womens_clothes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./womens-clothes/womens-clothes.component */ "./src/app/womens-clothes/womens-clothes.component.ts");
/* harmony import */ var _womens_shoes_womens_shoes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./womens-shoes/womens-shoes.component */ "./src/app/womens-shoes/womens-shoes.component.ts");
/* harmony import */ var _kids_shoes_kids_shoes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kids-shoes/kids-shoes.component */ "./src/app/kids-shoes/kids-shoes.component.ts");
/* harmony import */ var _kids_clothes_kids_clothes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./kids-clothes/kids-clothes.component */ "./src/app/kids-clothes/kids-clothes.component.ts");











// services

// material design
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _deals_deals_component__WEBPACK_IMPORTED_MODULE_10__["DealsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _releases_releases_component__WEBPACK_IMPORTED_MODULE_9__["ReleasesComponent"],
            _deals_deals_component__WEBPACK_IMPORTED_MODULE_10__["DealsComponent"],
            _mens_clothes_mens_clothes_component__WEBPACK_IMPORTED_MODULE_20__["MensClothesComponent"],
            _mens_shoes_mens_shoes_component__WEBPACK_IMPORTED_MODULE_21__["MensShoesComponent"],
            _womens_clothes_womens_clothes_component__WEBPACK_IMPORTED_MODULE_22__["WomensClothesComponent"],
            _womens_shoes_womens_shoes_component__WEBPACK_IMPORTED_MODULE_23__["WomensShoesComponent"],
            _kids_shoes_kids_shoes_component__WEBPACK_IMPORTED_MODULE_24__["KidsShoesComponent"],
            _kids_clothes_kids_clothes_component__WEBPACK_IMPORTED_MODULE_25__["KidsClothesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            // material design
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"]
        ],
        providers: [_deals_service__WEBPACK_IMPORTED_MODULE_14__["DealsService"], _releases_service__WEBPACK_IMPORTED_MODULE_17__["ReleasesService"], _sign_up_service__WEBPACK_IMPORTED_MODULE_18__["SignUpService"], _home_service__WEBPACK_IMPORTED_MODULE_19__["HomeService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/deals.service.ts":
/*!**********************************!*\
  !*** ./src/app/deals.service.ts ***!
  \**********************************/
/*! exports provided: DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DealsService = class DealsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://shoeappapi20191004045147.azurewebsites.net/api/deals';
    }
    getAll() {
        return this.http.get(this.baseUrl);
    }
};
DealsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DealsService);



/***/ }),

/***/ "./src/app/deals/deals.component.css":
/*!*******************************************!*\
  !*** ./src/app/deals/deals.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-deck-container {\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 30px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: black;\r\n    border: thin;\r\n    border: black;\r\n}\r\n\r\n.card-item {\r\n    padding: 3px 3px 3px 3px;\r\n}\r\n\r\n.mat-card-image {\r\n    max-height: 18.75rem;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbHMvZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvZGVhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWRlY2stY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMzBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiB0aGluO1xyXG4gICAgYm9yZGVyOiBibGFjaztcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxOC43NXJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/*!******************************************!*\
  !*** ./src/app/deals/deals.component.ts ***!
  \******************************************/
/*! exports provided: DealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsComponent", function() { return DealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deals.service */ "./src/app/deals.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");





let DealsComponent = class DealsComponent {
    constructor(service) {
        this.service = service;
        this.MensShoes = [{ "Id": 1, "Name": "Jordan", "Price": 0.00, "Color": " Why Not?", "Brand": "Jordan", "Store": "Hibbets", "Images": "test", "Type": " Zer0.2 SE White\/Orange Pulse Mens Basketball Shoe" }, { "Id": 2, "Name": "adidas Harden Vol. 4", "Price": 130.00, "Color": " Core Black Silver Metallic Bright Blue", "Brand": "adidas", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0707_0171_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 3, "Name": "Nike Zoom Freak 1", "Price": 100.00, "Color": " Hyper Royal Metallic Gold", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R0818_4190_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Grade School Kids Basketball Shoe" }, { "Id": 4, "Name": "Nike Zoom Freak 1", "Price": 120.00, "Color": " Hyper Royal Metallic Gold", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0636_4250_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 5, "Name": "Jordan 3 Retro Tinker", "Price": 134.97, "Color": " Black Cement", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/287x540-Flyout-NikeMens\" \/", "Type": " Mens Shoe" }, { "Id": 6, "Name": "Jordan Mars 270", "Price": 104.95, "Color": " White Red Black", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0585_1450_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 7, "Name": "Jordan 1 Mid", "Price": 79.97, "Color": " Black Infrared", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/03S07_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoes" },
            { "Id": 8, "Name": "Nike Air Max 98", "Price": 119.97, "Color": " Black White", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/04T67_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 9, "Name": "Nike Air Force 1 Mid", "Price": 64.95, "Color": " Grey", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/5082ZG_0256_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 10, "Name": "PUMA Roma Perf XTG", "Price": 59.97, "Color": " Red Navy", "Brand": "Puma", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/03D28_6000_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 11, "Name": "Nike Air Max 720", "Price": 99.97, "Color": " Black Pink", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/09F66_0001_main?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoes" }, { "Id": 12, "Name": "Nike LeBron 16", "Price": 124.95, "Color": " White Multicolor", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0461_9998_right3?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 13, "Name": "Nike Air Max 270", "Price": 104.95, "Color": " Wolf Grey Red", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0601_0381_right3?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 14, "Name": "Jordan 6 Rings", "Price": 124.95, "Color": " Poolside", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0451_1120_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" },
            { "Id": 15, "Name": "Jordan 7 Retro", "Price": 124.95, "Color": " Black Field Purple Fir", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0445_0136_right4?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 16, "Name": "Nike Air VaporMax Plus", "Price": 144.97, "Color": " Black White", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0713_0201_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 17, "Name": "Nike Air Max 97 Foam", "Price": 134.97, "Color": " Blue Black", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0704_4030_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoes" }, { "Id": 18, "Name": "Nike Air Max 95", "Price": 104.95, "Color": " Granite Dust Fresh Mint", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0717_0331_right4?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 19, "Name": "Jordan Legacy 312", "Price": 89.97, "Color": " Black White", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0385_0036_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 20, "Name": "Nike Air Force 1 Low 07", "Price": 69.97, "Color": " White Metallic", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0693_1010_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 21, "Name": "Nike LeBron 16 Low", "Price": 124.95, "Color": " White Gold University Red", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0464_1185_right4?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" },
            { "Id": 22, "Name": "Jordan 6 Rings", "Price": 124.97, "Color": " Black White", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0398_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 23, "Name": "Jordan 6 Rings", "Price": 124.95, "Color": " Black Metallic Gold", "Brand": "Jordan", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0396_0036_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 24, "Name": "Nike Kyrie 5", "Price": 74.97, "Color": " University Red Black", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0409_0141_right3?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 25, "Name": "adidas D.O.N. Issue 1", "Price": 79.97, "Color": " Blue Red", "Brand": "adidas", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0602_6175_right4?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Basketball Shoe" }, { "Id": 26, "Name": "Nike VaporMax Flyknit 3", "Price": 144.97, "Color": " White Black", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0374_1005_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoe" }, { "Id": 27, "Name": "Nike Air VaporMax Flyknit 2", "Price": 124.95, "Color": " Volt Black", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0268_3141_right3?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Running Shoe" }, { "Id": 28, "Name": "Nike Air Force 1 High", "Price": 79.97, "Color": " White Photo Blue", "Brand": "Nike", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M0698_1115_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"lazy calendar-image main-image-thumb\" \/", "Type": " Mens Shoes" }];
        this.displayedColumns = ["Name", "Color", "Brand", "Price", "Store"];
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    ngOnInit() {
        this.service.getAll().subscribe((data) => {
            console.log('Result - ', data);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
};
DealsComponent.ctorParameters = () => [
    { type: _deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], DealsComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], DealsComponent.prototype, "paginator", void 0);
DealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deals/deals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deals.component.css */ "./src/app/deals/deals.component.css")).default]
    })
], DealsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home.service.ts":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.HomeUrl = 'https://shoeappapi20191004045147.azurewebsites.net/api/home';
    }
    getAll() {
        return this.http.get(this.HomeUrl);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.ReleaseItemsLists = [{ "Id": 1, "Name": "\nUnder Armour Project Rock 2", "Date": "Sep 19" }, { "Id": 2, "Name": "\nUnder Armour Project Rock 2", "Date": "Sep 19" }, { "Id": 3, "Name": "\nJordan 4 Retro", "Date": "Sep 19" }, { "Id": 4, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 5, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 6, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 7, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 8, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 9, "Name": "\nNike Joyride CC", "Date": "Sep 20" }, { "Id": 10, "Name": "\nadidas Yeezy Boost 350 V2", "Date": "Sep 21" }, { "Id": 11, "Name": "\nadidas Yeezy Boost 350 V2", "Date": "Sep 21" }, { "Id": 12, "Name": "\nadidas Yeezy Boost 350 V2", "Date": "Sep 21" }, { "Id": 13, "Name": "\nadidas Yeezy Boost 350 V2", "Date": "Sep 21" }, { "Id": 14, "Name": "\nJordan 12 Retro", "Date": "Sep 21" }, { "Id": 15, "Name": "\nJordan 12 Retro", "Date": "Sep 21" }, { "Id": 16, "Name": "\nJordan 12 Retro", "Date": "Sep 21" }, { "Id": 17, "Name": "\nJordan 12 Retro", "Date": "Sep 21" }, { "Id": 18, "Name": "\nNike Joyride Run Flyknit", "Date": "Sep 26" }, { "Id": 19, "Name": "\nNike Air Max 95 SP", "Date": "Sep 26" }, { "Id": 20, "Name": "\nNike Air Max 200 SP", "Date": "Sep 26" }, { "Id": 21, "Name": "\nNike Zoom Freak 1", "Date": "Sep 27" }, { "Id": 22, "Name": "\nNike Zoom Freak 1", "Date": "Sep 27" }, { "Id": 23, "Name": "\nNike Kyrie 5", "Date": "Oct 01" }, { "Id": 24, "Name": "\nNike Kyrie 5", "Date": "Oct 01" }];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomeComponent.prototype, "ReleaseItemsList", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/kids-clothes/kids-clothes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/kids-clothes/kids-clothes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpZHMtY2xvdGhlcy9raWRzLWNsb3RoZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/kids-clothes/kids-clothes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/kids-clothes/kids-clothes.component.ts ***!
  \********************************************************/
/*! exports provided: KidsClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsClothesComponent", function() { return KidsClothesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KidsClothesComponent = class KidsClothesComponent {
    constructor() { }
    ngOnInit() {
    }
};
KidsClothesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kids-clothes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kids-clothes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-clothes/kids-clothes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kids-clothes.component.css */ "./src/app/kids-clothes/kids-clothes.component.css")).default]
    })
], KidsClothesComponent);



/***/ }),

/***/ "./src/app/kids-shoe-deals.service.ts":
/*!********************************************!*\
  !*** ./src/app/kids-shoe-deals.service.ts ***!
  \********************************************/
/*! exports provided: KidsShoeDealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsShoeDealsService", function() { return KidsShoeDealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let KidsShoeDealsService = class KidsShoeDealsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://shoeappapi20191004045147.azurewebsites.net/api/kidsshoes';
    }
    getAll() {
        return this.http.get(this.baseUrl);
    }
};
KidsShoeDealsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
KidsShoeDealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KidsShoeDealsService);



/***/ }),

/***/ "./src/app/kids-shoes/kids-shoes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/kids-shoes/kids-shoes.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-deck-container {\r\n    width: 100%;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 10px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: black;\r\n    border: thin;\r\n    border: black;\r\n    min-height: 590px;\r\n    max-height: 600px;\r\n}\r\n\r\n.card-item {\r\n    padding: 3px 3px 3px 3px;\r\n}\r\n\r\n.mat-card-title{\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 160px; /* Set the width of the sidebar */\r\n    position: absolute; /* Fixed Sidebar (stay in place on scroll) */\r\n    z-index: 1; /* Stay on top */\r\n    top: 71px; /* Stay at the top */\r\n    left: 0;\r\n    background-color: #111; /* Black */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n  }\r\n\r\n::-webkit-scrollbar {\r\n    width: 2px;\r\n  }\r\n\r\n.sidenav a, .sidenav p {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color:white;\r\n  display: block;\r\n  border-bottom: thin white solid;\r\n  text-align: center;\r\n}\r\n\r\n.checkBox{\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.sideNavHeader{\r\n    text-align: center;\r\n    color: white;\r\n      border-bottom: thin white solid;\r\n\r\n}\r\n\r\n.storeCheckList, .colorCheckList, .priceCheckList{\r\n    text-align: left;\r\n    border-bottom: thin white solid;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n\r\n}\r\n\r\n.storeCheckListLabels, .colorCheckListLabels{\r\n    color: white;\r\n}\r\n\r\n.colorCheckListLabels{\r\n    font-size: 10px;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.mat-grid-list {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n  }\r\n\r\n.priceDropDownBtn, .colorDropDownBtn, .storeDropDownBtn{\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    display: block;\r\n    border: none;\r\n    background: none;\r\n    width:100%;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n\r\n.fa-caret-down {\r\n    float: right;\r\n    padding-right: 8px;\r\n  }\r\n\r\n.dropdownContainer {\r\n    display: none;\r\n    background-color: #262626;\r\n    padding-left: 8px;\r\n  }\r\n\r\n.priceCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.colorCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.storeCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.active {\r\n    background-color: green;\r\n    color: white;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2lkcy1zaG9lcy9raWRzLXNob2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVksRUFBRSx1REFBdUQ7SUFDckUsWUFBWSxFQUFFLGlDQUFpQztJQUMvQyxrQkFBa0IsRUFBRSw0Q0FBNEM7SUFDaEUsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixTQUFTLEVBQUUsb0JBQW9CO0lBQy9CLE9BQU87SUFDUCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLGtCQUFrQixFQUFFLDhCQUE4QjtFQUNwRDs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtNQUNWLCtCQUErQjs7QUFFckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHRTtJQUNFLGtCQUFrQixFQUFFLHFDQUFxQztJQUN6RCxlQUFlLEVBQUUsdUNBQXVDO0lBQ3hELGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0FBRUEsMENBQTBDLGNBQWMsQ0FBQzs7QUFDekQsMENBQTBDLGNBQWMsQ0FBQzs7QUFDekQsMENBQTBDLGNBQWMsQ0FBQzs7QUFNekQ7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2tpZHMtc2hvZXMva2lkcy1zaG9lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZGVjay1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiB0aGluO1xyXG4gICAgYm9yZGVyOiBibGFjaztcclxuICAgIG1pbi1oZWlnaHQ6IDU5MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cclxuICAgIHdpZHRoOiAxNjBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXHJcbiAgICB0b3A6IDcxcHg7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7IC8qIEJsYWNrICovXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDJweDtcclxuICB9XHJcblxyXG4uc2lkZW5hdiBhLCAuc2lkZW5hdiBwIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiB3aGl0ZSBzb2xpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja0JveHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZU5hdkhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiB3aGl0ZSBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5zdG9yZUNoZWNrTGlzdCwgLmNvbG9yQ2hlY2tMaXN0LCAucHJpY2VDaGVja0xpc3R7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiB3aGl0ZSBzb2xpZDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uc3RvcmVDaGVja0xpc3RMYWJlbHMsIC5jb2xvckNoZWNrTGlzdExhYmVsc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbG9yQ2hlY2tMaXN0TGFiZWxze1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuXHJcbiAgLm1hdC1ncmlkLWxpc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gICAgZm9udC1zaXplOiAyOHB4OyAvKiBJbmNyZWFzZWQgdGV4dCB0byBlbmFibGUgc2Nyb2xsaW5nICovXHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICB9XHJcblxyXG4gIC5wcmljZURyb3BEb3duQnRuLCAuY29sb3JEcm9wRG93bkJ0biwgLnN0b3JlRHJvcERvd25CdG57XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAucHJpY2VDaGVja0xpc3Q6aG92ZXIgLmRyb3Bkb3duQ29udGFpbmVyIHtkaXNwbGF5OiBibG9jazt9XHJcbiAgLmNvbG9yQ2hlY2tMaXN0OmhvdmVyIC5kcm9wZG93bkNvbnRhaW5lciB7ZGlzcGxheTogYmxvY2s7fVxyXG4gIC5zdG9yZUNoZWNrTGlzdDpob3ZlciAuZHJvcGRvd25Db250YWluZXIge2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/kids-shoes/kids-shoes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/kids-shoes/kids-shoes.component.ts ***!
  \****************************************************/
/*! exports provided: KidsShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidsShoesComponent", function() { return KidsShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _kids_shoe_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kids-shoe-deals.service */ "./src/app/kids-shoe-deals.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");





let KidsShoesComponent = class KidsShoesComponent {
    constructor(service) {
        this.service = service;
        this.HKS = [{ "Id": 1, "Names": "Nike Air VaporMax 2020 Flyknit", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0648_1312_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Iron Grey", "Type": "Kids", "Brand": "Nike" },
            { "Id": 2, "Names": "Nike Air VaporMax 2020 Flyknit", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0917_0256_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Iron Grey", "Type": "Kids", "Brand": "Nike" },
            { "Id": 3, "Names": "Nike Air Vapormax 2020 Flyknit", "Price": "220", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R1078_4278_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Iron Grey", "Type": "Kids", "Brand": "Nike" },
            { "Id": 4, "Names": "Jordan 12 Retro", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/DSC_6628 (1)-Flyout\" \/", "Color": " Stone Blue", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 5, "Names": "Jordan 1 Retro High OG", "Price": "121.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0858_6125_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Satin Gym Red", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 6, "Names": "Nike Air VaporMax 2019", "Price": "131.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R0787_0036_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Metallic Gold", "Type": "Kids", "Brand": "Nike" },
            { "Id": 7, "Names": "Jordan True Flight", "Price": "56.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0833_0121_detail2?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Metallic Gold", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 8, "Names": "Nike Little Posite One", "Price": "131.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P865_1350_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Total Orange", "Type": "Kids", "Brand": "Nike" },
            { "Id": 9, "Names": "adidas Top Ten High", "Price": "70", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P875_6195_main?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image\" \/", "Color": " White Navy Red", "Type": "Kids", "Brand": "adidas" },
            { "Id": 10, "Names": "PUMA RS-X", "Price": "70", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0980_1115_right2?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Red White Black", "Type": "Kids", "Brand": "Puma" },
            { "Id": 11, "Names": "Nike Air Max 2090", "Price": "81.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/1098B_6000_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Black Pure Platinum", "Type": "Kids", "Brand": "Nike" },
            { "Id": 12, "Names": "adidas U_Path Run", "Price": "55", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R0916_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Red", "Type": "Kids", "Brand": "adidas" },
            { "Id": 13, "Names": "Jordan BLoyal", "Price": "91.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P868_0211_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 14, "Names": "New Balance 574", "Price": "45", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P624_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black White Grey", "Type": "Kids", "Brand": "New Balance" },
            { "Id": 15, "Names": "adidas Rivalry Low", "Price": "66.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0825_0111_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black", "Type": "Kids", "Brand": "adidas" },
            { "Id": 16, "Names": "Nike Air Force 1 LV8 2", "Price": "76.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/5064Z_1000_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Orange", "Type": "Kids", "Brand": "Nike" },
            { "Id": 17, "Names": "Nike Air Force 1 Low Crib Infant KidsCasual Shoe&quot;,&quot;parentID&quot;:&quot;5064Z&quot;,&quot;brand&quot;:&quot;Nike&quot;,&quot;category&quot;:&quot;\/Boys &amp; Girls\/Shoes\/Casual Shoes&quot;,&quot;price&quot;:36.97,&quot;dimension3&quot;:&quot;400&quot;,&quot;dimension4&quot;:&quot;400&quot;,&quot;dimension7&quot;:&quot;Non drop-ship&quot;,&quot;list&quot;:&quot;clearance-kids-shoes&quot;,&quot;dimension12&quot;:&quot;Available&quot;}\">\nNike Air Force 1 Low Crib Infant Kids&#39;Casual Shoe\n<\/a>\n<\/div>\n<div class=\"product-pricing \">\n<span class=\"product-standard-price\" title=\"Standard Price\"><span class=\"visually-hidden\">Standard Price<\/span>$38.00<\/span>\n<span class=\"product-sales-price\" title=\"Sale Price\"><span class=\"visually-hidden\">Sale Price<\/span>$36.97<\/span>\n<\/div>\n<span class=\"hidden store-availability\" data-storeavailability=\"false\"><\/span>\n<div class=\"product-promo\">\n<div class=\"promotional-message\">\n<\/div>\n<div class=\"promotional-message\">\nNot Eligible for Discount.\n<\/div>\n<div class=\"promotional-message\">\nFree Shipping.\n<\/div>\n<\/div>\n<\/div><\/div>\n<\/div>\n<\/li>\n<li class=\"grid-tile   \" data-colors-to-show=\"0296\">\n\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ *\/\n(function(){\ntry {\n    if(window.CQuotient) {\n\tvar cq_params = {};\n\t\n\tcq_params.cookieId = window.CQuotient.getCQCookieId();\n\tcq_params.userId = window.CQuotient.getCQUserId();\n\tcq_params.accumulate = true;\n\tcq_params.products = [{\n\t    id: P0824,\n\t    sku: \n\t}];\n\tcq_params.categoryId = clearance-kids-shoes;\n\tcq_params.refinements = [{\\\"name\\\":\\\"Category\\\",\\\"value\\\":\\\"clearance-kids-shoes\\\"}];\n\tcq_params.personalized = true;\n\tcq_params.sortingRule = Featured;\n\tcq_params.imageUUID = __UNDEFINED__;\n\tcq_params.realm = \"BBCV\";\n\tcq_params.siteId = \"Hibbett-US\";\n\tcq_params.instanceType = \"prd\";\n\t\n\tif(window.CQuotient.sendActivity)\n\t    window.CQuotient.sendActivity(CQuotient.clientId, viewCategory, cq_params);\n\telse\n\t    window.CQuotient.activities.push({\n\t    \tactivityType: viewCategory,\n\t    \tparameters: cq_params\n\t    });\n  }\n} catch(err) {}\n})();\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ (viewCategoryProduct-active_data.js) *\/\n(function(){\ntry {\n\tif (dw.ac) {\n\t\tvar search_params = {};\n\t\tsearch_params.persd = true;\n\t\tsearch_params.refs = [{\\\"name\\\":\\\"Category\\\",\\\"value\\\":\\\"clearance-kids-shoes\\\"}];\n\t\tsearch_params.sort = Featured;\n\t\tsearch_params.imageUUID = ;\n\t\tsearch_params.searchID = 9b763806-e534-45c9-acf2-b6db36b82888;\n\t\tsearch_params.locale = default;\n\t\tsearch_params.queryLocale = default;\n\t\tsearch_params.showProducts = true;\n\t\tdw.ac.applyContext({category: \"clearance-kids-shoes\", searchData: search_params});\n\t\tif (typeof dw.ac._scheduleDataSubmission === \"function\") {\n\t\t\tdw.ac._scheduleDataSubmission();\n\t\t}\n\t}\n} catch(err) {}\n})();\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ (viewProduct-active_data.js) *\/\ndw.ac._capture({id: \"P0824\", type: \"searchhit\"});\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<div class=\"product-tile \" id=\"c989997897b31f5cb5b884de99\" data-itemid=\"P0824\">\n<div class=\"product-image\">\n<a class=\"thumb-link has-alt-image\" href=\"https:\/\/www.hibbett.com\/nike-air-force-1-graffiti-grey-blue-black-infant-boys-shoe\/P0824.html?dwvar_P0824_color=0296&amp;cgid=clearance-kids-shoes\" data-gtmdata=\"{&quot;id&quot;:&quot;P0824&quot;,&quot;Nike Air Force 1 Graffiti", "Price": "36.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0824_0296_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Grey Blue Black", "Type": "Kids", "Brand": "Nike" },
            { "Id": 18, "Names": "Nike Air Force 1 Graffiti", "Price": "36.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P869_1312_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Grey Blue Black", "Type": "Kids", "Brand": "Nike" },
            { "Id": 19, "Names": "PUMA Roma", "Price": "50", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/15Q84_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Blue Green", "Type": "Kids", "Brand": "Puma" },
            { "Id": 20, "Names": "New Balance 574 Core Plus", "Price": "45", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0997_1475_detail?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Red Blue", "Type": "Kids", "Brand": "New Balance" },
            { "Id": 21, "Names": "PUMA RS-X Puzzle", "Price": "66.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R0784_0411_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Blue Grey", "Type": "Kids", "Brand": "Puma" },
            { "Id": 22, "Names": "Jordan Max Aura", "Price": "56.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0950_0276_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Cool Grey White", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 23, "Names": "Nike Air Max 95", "Price": "56.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/7635Z_0001_right3?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Grey Black White Red", "Type": "Kids", "Brand": "Nike" },
            { "Id": 24, "Names": "Nike Air Presto", "Price": "100", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P0844_0141_detail?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black", "Type": "Kids", "Brand": "Nike" },
            { "Id": 25, "Names": "Nike Air More Uptempo", "Price": "86.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/5982Z_0131_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Laser Crimson", "Type": "Kids", "Brand": "Nike" },
            { "Id": 26, "Names": "Jordan True Flight", "Price": "86.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/S0822_2070_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Pink", "Type": "Kids", "Brand": "Jordan" },
            { "Id": 27, "Names": "adidas XPLR Khaki Tonal Grade School Kids Shoe&quot;,&quot;parentID&quot;:&quot;S0822&quot;,&quot;brand&quot;:&quot;adidas&quot;,&quot;category&quot;:&quot;\/Boys &amp; Girls\/Shoes\/Casual Shoes&quot;,&quot;price&quot;:56.97,&quot;dimension3&quot;:&quot;400&quot;,&quot;dimension4&quot;:&quot;450&quot;,&quot;dimension7&quot;:&quot;Non drop-ship&quot;,&quot;list&quot;:&quot;clearance-kids-shoes&quot;,&quot;dimension12&quot;:&quot;Not Available&quot;}\">\nadidas XPLR Khaki Tonal Grade School Kids&#39; Shoe\n<\/a>\n<\/div>\n<div class=\"product-pricing \">\n<span class=\"product-standard-price\" title=\"Standard Price\"><span class=\"visually-hidden\">Standard Price<\/span>$65.00<\/span>\n<span class=\"product-sales-price\" title=\"Sale Price\"><span class=\"visually-hidden\">Sale Price<\/span>$56.97<\/span>\n<\/div>\n<span class=\"hidden store-availability\" data-storeavailability=\"false\"><\/span>\n<div class=\"product-promo\">\n<div class=\"promotional-message\">\n<\/div>\n<div class=\"promotional-message\">\n<\/div>\n<div class=\"promotional-message\">\nFree Shipping.\n<\/div>\n<\/div>\n<\/div><\/div>\n<\/div>\n<\/li>\n<li class=\"grid-tile   \" data-colors-to-show=\"0146\">\n\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ *\/\n(function(){\ntry {\n    if(window.CQuotient) {\n\tvar cq_params = {};\n\t\n\tcq_params.cookieId = window.CQuotient.getCQCookieId();\n\tcq_params.userId = window.CQuotient.getCQUserId();\n\tcq_params.accumulate = true;\n\tcq_params.products = [{\n\t    id: R0791,\n\t    sku: \n\t}];\n\tcq_params.categoryId = clearance-kids-shoes;\n\tcq_params.refinements = [{\\\"name\\\":\\\"Category\\\",\\\"value\\\":\\\"clearance-kids-shoes\\\"}];\n\tcq_params.personalized = true;\n\tcq_params.sortingRule = Featured;\n\tcq_params.imageUUID = __UNDEFINED__;\n\tcq_params.realm = \"BBCV\";\n\tcq_params.siteId = \"Hibbett-US\";\n\tcq_params.instanceType = \"prd\";\n\t\n\tif(window.CQuotient.sendActivity)\n\t    window.CQuotient.sendActivity(CQuotient.clientId, viewCategory, cq_params);\n\telse\n\t    window.CQuotient.activities.push({\n\t    \tactivityType: viewCategory,\n\t    \tparameters: cq_params\n\t    });\n  }\n} catch(err) {}\n})();\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ (viewCategoryProduct-active_data.js) *\/\n(function(){\ntry {\n\tif (dw.ac) {\n\t\tvar search_params = {};\n\t\tsearch_params.persd = true;\n\t\tsearch_params.refs = [{\\\"name\\\":\\\"Category\\\",\\\"value\\\":\\\"clearance-kids-shoes\\\"}];\n\t\tsearch_params.sort = Featured;\n\t\tsearch_params.imageUUID = ;\n\t\tsearch_params.searchID = 9b763806-e534-45c9-acf2-b6db36b82888;\n\t\tsearch_params.locale = default;\n\t\tsearch_params.queryLocale = default;\n\t\tsearch_params.showProducts = true;\n\t\tdw.ac.applyContext({category: \"clearance-kids-shoes\", searchData: search_params});\n\t\tif (typeof dw.ac._scheduleDataSubmission === \"function\") {\n\t\t\tdw.ac._scheduleDataSubmission();\n\t\t}\n\t}\n} catch(err) {}\n})();\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<script type=\"text\/javascript\">\/\/<!--\n\/* <![CDATA[ (viewProduct-active_data.js) *\/\ndw.ac._capture({id: \"R0791\", type: \"searchhit\"});\n\/* ]]> *\/\n\/\/ -->\n<\/script>\n<div class=\"product-tile \" id=\"07849a8c06f5115540ccb953a0\" data-itemid=\"R0791\">\n<div class=\"product-image\">\n<a class=\"thumb-link has-alt-image\" href=\"https:\/\/www.hibbett.com\/jordan-true-flight-black-red-white-toddler-kids-shoe\/R0791.html?dwvar_R0791_color=0146&amp;cgid=clearance-kids-shoes\" data-gtmdata=\"{&quot;id&quot;:&quot;R0791&quot;,&quot;Jordan True Flight", "Price": "56.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R0791_0146_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Red White", "Type": "Kids", "Brand": "adidas" },
            { "Id": 28, "Names": "Jordan True Flight", "Price": "51.95", "Store": "Hibbets", "Images": "https:\/\/photorankstatics-a.akamaihd.net\/743d2e78a76dedeb07e0745158547931\/static\/frontend\/latest\/build.min.js\" data-olapic=\"olapic_specific_widget\" data-instance=\"f52b51dcbc586bb9f1959250b2e08c66\" data-apikey=\"1cd0605dcf9d160039f88e191963f79b07bd6b66e83a97337950f30868dd5211\" data-tags=\"clearance-kids-shoes\" async=\"async\"", "Color": " Black Red White", "Type": "Kids", "Brand": "Jordan" }];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
KidsShoesComponent.ctorParameters = () => [
    { type: _kids_shoe_deals_service__WEBPACK_IMPORTED_MODULE_2__["KidsShoeDealsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
], KidsShoesComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], KidsShoesComponent.prototype, "paginator", void 0);
KidsShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kids-shoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kids-shoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kids-shoes/kids-shoes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kids-shoes.component.css */ "./src/app/kids-shoes/kids-shoes.component.css")).default]
    })
], KidsShoesComponent);



/***/ }),

/***/ "./src/app/mens-clothes/mens-clothes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mens-clothes/mens-clothes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnMtY2xvdGhlcy9tZW5zLWNsb3RoZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/mens-clothes/mens-clothes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mens-clothes/mens-clothes.component.ts ***!
  \********************************************************/
/*! exports provided: MensClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensClothesComponent", function() { return MensClothesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MensClothesComponent = class MensClothesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MensClothesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mens-clothes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mens-clothes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mens-clothes/mens-clothes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mens-clothes.component.css */ "./src/app/mens-clothes/mens-clothes.component.css")).default]
    })
], MensClothesComponent);



/***/ }),

/***/ "./src/app/mens-shoes/mens-shoes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mens-shoes/mens-shoes.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnMtc2hvZXMvbWVucy1zaG9lcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/mens-shoes/mens-shoes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mens-shoes/mens-shoes.component.ts ***!
  \****************************************************/
/*! exports provided: MensShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensShoesComponent", function() { return MensShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MensShoesComponent = class MensShoesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MensShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mens-shoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mens-shoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mens-shoes/mens-shoes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mens-shoes.component.css */ "./src/app/mens-shoes/mens-shoes.component.css")).default]
    })
], MensShoesComponent);



/***/ }),

/***/ "./src/app/releases.service.ts":
/*!*************************************!*\
  !*** ./src/app/releases.service.ts ***!
  \*************************************/
/*! exports provided: ReleasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesService", function() { return ReleasesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ReleasesService = class ReleasesService {
    constructor(http) {
        this.http = http;
        this.ReleasesUrl = 'https://shoeappapi20191004045147.azurewebsites.net/api/releases';
    }
    getAll() {
        return this.http.get(this.ReleasesUrl);
    }
};
ReleasesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReleasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReleasesService);



/***/ }),

/***/ "./src/app/releases/releases.component.css":
/*!*************************************************!*\
  !*** ./src/app/releases/releases.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-deck-container {\r\n    width: 100%;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 10px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: black;\r\n    border: thin;\r\n    border: black;\r\n    min-height: 600px;\r\n    max-height: 610px;\r\n}\r\n\r\n.card-item {\r\n    padding: 3px 3px 3px 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsZWFzZXMvcmVsZWFzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3JlbGVhc2VzL3JlbGVhc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNrLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IHRoaW47XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MTBweDtcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/releases/releases.component.ts":
/*!************************************************!*\
  !*** ./src/app/releases/releases.component.ts ***!
  \************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _releases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../releases.service */ "./src/app/releases.service.ts");



let ReleasesComponent = class ReleasesComponent {
    constructor(service) {
        this.service = service;
        this.Release = [{ "Id": 1, "Names": "Nike Kyrie Low 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https://.adis.ws/i/hibbett/P1230_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v1\"class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 2, "Names": "Under Armour Project Rock 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1230_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 3, "Names": "Under Armour Project Rock 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0684_0071_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 4, "Names": "adidas Predator Mutator 20.3", "Date": " Sep 01", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/W1101_1180_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 5, "Names": "Nike Kyrie Low 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/DSC_9381\" \/" },
            { "Id": 6, "Names": "Under Armour Project Rock 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https://i1.adis.ws/i/hibbett/O0684_0071_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" /" }, { "Id": 7, "Names": "Under Armour Project Rock 3", "Date": " Sep 03", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1230_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 8, "Names": "adidas X90004D", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0711_0103_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 9, "Names": "Jordan 1 Retro High OG", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0935_2000_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 10, "Names": "Jordan 1 Retro High OG", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R1083_2000_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 11, "Names": "Nike Air Foamposite One", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/M1241_0166_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 12, "Names": "Nike Little Posite One", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1201_0166_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 13, "Names": "Nike Little Posite One", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1202_0166_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 14, "Names": "Nike Little Posite One", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1204_0166_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 15, "Names": "Jordan 8 Retro", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/S1043_0131_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 16, "Names": "Jordan 8 Retro", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/S1045_0131_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 17, "Names": "Jordan 8 Retro", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/S1049_0131_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 18, "Names": "Nike Little Posite One", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1203_0166_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 19, "Names": "adidas X90004D", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0712_0256_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 20, "Names": "adidas X90004D", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0713_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 21, "Names": "Nike PG 4", "Date": " Sep 04", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0979_0264_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 22, "Names": "Nike Kyrie Low 3", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0976_0201_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 23, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P483_0411_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 24, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0646_0103_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 25, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/O0647_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 26, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1169_0001_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" },
            { "Id": 27, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/P1168_0436_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }, { "Id": 28, "Names": "Nike Air VaporMax 2020 Flyknit", "Date": " Sep 10", "Store": "Hibbett", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0916_1000_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/" }];
    }
    ngOnInit() {
    }
};
ReleasesComponent.ctorParameters = () => [
    { type: _releases_service__WEBPACK_IMPORTED_MODULE_2__["ReleasesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReleasesComponent.prototype, "ReleaseItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReleasesComponent.prototype, "FootLockerItem", void 0);
ReleasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-releases',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./releases.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./releases.component.css */ "./src/app/releases/releases.component.css")).default]
    })
], ReleasesComponent);



/***/ }),

/***/ "./src/app/sign-up.service.ts":
/*!************************************!*\
  !*** ./src/app/sign-up.service.ts ***!
  \************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SignUpService = class SignUpService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://shoeappapi20191004045147.azurewebsites.net/api/signup';
    }
    SubmitSignUp(signup) {
        return this.http.post(this.baseUrl, signup);
    }
};
SignUpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignUpService);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/sign-up.service.ts");




let SignUpComponent = class SignUpComponent {
    constructor(service) {
        this.service = service;
        this.entryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    onSubmit() {
        console.log(this.entryForm.value);
        this.service.SubmitSignUp(this.entryForm.value).subscribe((data) => {
            console.log('Data - ', data);
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/womens-clothes/womens-clothes.component.css":
/*!*************************************************************!*\
  !*** ./src/app/womens-clothes/womens-clothes.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbWVucy1jbG90aGVzL3dvbWVucy1jbG90aGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/womens-clothes/womens-clothes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/womens-clothes/womens-clothes.component.ts ***!
  \************************************************************/
/*! exports provided: WomensClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomensClothesComponent", function() { return WomensClothesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WomensClothesComponent = class WomensClothesComponent {
    constructor() { }
    ngOnInit() {
    }
};
WomensClothesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-womens-clothes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./womens-clothes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/womens-clothes/womens-clothes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./womens-clothes.component.css */ "./src/app/womens-clothes/womens-clothes.component.css")).default]
    })
], WomensClothesComponent);



/***/ }),

/***/ "./src/app/womens-shoes/womens-shoes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/womens-shoes/womens-shoes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-deck-container {\r\n    width: 100%;\r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 10px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: black;\r\n    border: thin;\r\n    border: black;\r\n    min-height: 460px;\r\n    max-height: 480px;\r\n}\r\n\r\n.card-item {\r\n    padding: 3px 3px 3px 3px;\r\n}\r\n\r\n.mat-card-title{\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.sidenav {\r\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\r\n    width: 160px; /* Set the width of the sidebar */\r\n    position: absolute; /* Fixed Sidebar (stay in place on scroll) */\r\n    z-index: 1; /* Stay on top */\r\n    top: 71px; /* Stay at the top */\r\n    left: 0;\r\n    background-color: #111; /* Black */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n  }\r\n\r\n::-webkit-scrollbar {\r\n    width: 2px;\r\n  }\r\n\r\n.sidenav a, .sidenav p {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color:white;\r\n  display: block;\r\n  border-bottom: thin white solid;\r\n  text-align: center;\r\n}\r\n\r\n.checkBox{\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.sideNavHeader{\r\n    text-align: center;\r\n    color: white;\r\n      border-bottom: thin white solid;\r\n\r\n}\r\n\r\n.storeCheckList, .colorCheckList, .priceCheckList{\r\n    text-align: left;\r\n    border-bottom: thin white solid;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n\r\n}\r\n\r\n.storeCheckListLabels, .colorCheckListLabels{\r\n    color: white;\r\n}\r\n\r\n.colorCheckListLabels{\r\n    font-size: 10px;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.mat-grid-list {\r\n    margin-left: 160px; /* Same as the width of the sidenav */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n  }\r\n\r\n.priceDropDownBtn, .colorDropDownBtn, .storeDropDownBtn{\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: white;\r\n    display: block;\r\n    border: none;\r\n    background: none;\r\n    width:100%;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n\r\n.fa-caret-down {\r\n    float: right;\r\n    padding-right: 8px;\r\n  }\r\n\r\n.dropdownContainer {\r\n    display: none;\r\n    background-color: #262626;\r\n    padding-left: 8px;\r\n  }\r\n\r\n.priceCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.colorCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.storeCheckList:hover .dropdownContainer {display: block;}\r\n\r\n.active {\r\n    background-color: green;\r\n    color: white;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29tZW5zLXNob2VzL3dvbWVucy1zaG9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsdURBQXVEO0lBQ3JFLFlBQVksRUFBRSxpQ0FBaUM7SUFDL0Msa0JBQWtCLEVBQUUsNENBQTRDO0lBQ2hFLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixPQUFPO0lBQ1Asc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxrQkFBa0IsRUFBRSw4QkFBOEI7RUFDcEQ7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7TUFDViwrQkFBK0I7O0FBRXJDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0U7SUFDRSxrQkFBa0IsRUFBRSxxQ0FBcUM7SUFDekQsZUFBZSxFQUFFLHVDQUF1QztJQUN4RCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsaUJBQWlCO0VBQ25COztBQUVBLDBDQUEwQyxjQUFjLENBQUM7O0FBQ3pELDBDQUEwQyxjQUFjLENBQUM7O0FBQ3pELDBDQUEwQyxjQUFjLENBQUM7O0FBTXpEO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC93b21lbnMtc2hvZXMvd29tZW5zLXNob2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZWNrLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IHRoaW47XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFwiYXV0b1wiIGhlaWdodCAqL1xyXG4gICAgd2lkdGg6IDE2MHB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xyXG4gICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cclxuICAgIHRvcDogNzFweDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTsgLyogQmxhY2sgKi9cclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gIH1cclxuXHJcbi5zaWRlbmF2IGEsIC5zaWRlbmF2IHAge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiB0aGluIHdoaXRlIHNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrQm94e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlTmF2SGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiB0aGluIHdoaXRlIHNvbGlkO1xyXG5cclxufVxyXG5cclxuLnN0b3JlQ2hlY2tMaXN0LCAuY29sb3JDaGVja0xpc3QsIC5wcmljZUNoZWNrTGlzdHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHdoaXRlIHNvbGlkO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5zdG9yZUNoZWNrTGlzdExhYmVscywgLmNvbG9yQ2hlY2tMaXN0TGFiZWxze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29sb3JDaGVja0xpc3RMYWJlbHN7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5cclxuICAubWF0LWdyaWQtbGlzdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlbmF2ICovXHJcbiAgICBmb250LXNpemU6IDI4cHg7IC8qIEluY3JlYXNlZCB0ZXh0IHRvIGVuYWJsZSBzY3JvbGxpbmcgKi9cclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByaWNlRHJvcERvd25CdG4sIC5jb2xvckRyb3BEb3duQnRuLCAuc3RvcmVEcm9wRG93bkJ0bntcclxuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd25Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5wcmljZUNoZWNrTGlzdDpob3ZlciAuZHJvcGRvd25Db250YWluZXIge2Rpc3BsYXk6IGJsb2NrO31cclxuICAuY29sb3JDaGVja0xpc3Q6aG92ZXIgLmRyb3Bkb3duQ29udGFpbmVyIHtkaXNwbGF5OiBibG9jazt9XHJcbiAgLnN0b3JlQ2hlY2tMaXN0OmhvdmVyIC5kcm9wZG93bkNvbnRhaW5lciB7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/womens-shoes/womens-shoes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/womens-shoes/womens-shoes.component.ts ***!
  \********************************************************/
/*! exports provided: WomensShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomensShoesComponent", function() { return WomensShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WomensShoesComponent = class WomensShoesComponent {
    constructor() {
        this.HWS = [{ "Id": 1, "Names": "Jordan 3 Retro SE", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/Q0929_1450_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Fire Red Black", "Type": "Womens", "Brand": "Jordan" }, { "Id": 2, "Names": "Jordan 3 Retro SE", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R1076_1450_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Fire Red Black", "Type": "Womens", "Brand": "Jordan" }, { "Id": 3, "Names": "Jordan 3 Retro SE", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/R1077_1450_right1?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Fire Red Black", "Type": "Womens", "Brand": "Jordan" }, { "Id": 4, "Names": "Jordan 3 Retro SE", "Price": "0", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/DSC_6628 (1)-Flyout\" \/", "Color": " White Fire Red Black", "Type": "Womens", "Brand": "Jordan" }, { "Id": 5, "Names": "adidas UltraBoost 20", "Price": "180", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0728_0103_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Ftwr White", "Type": "Womens", "Brand": "adidas" }, { "Id": 6, "Names": "Nike Air Max 97", "Price": "142.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0753_1180_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Barely Rose Tortoise", "Type": "Womens", "Brand": "Nike" }, { "Id": 7, "Names": "adidas NMD_R1", "Price": "102.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P829_9998_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Rose Gold", "Type": "Womens", "Brand": "adidas" },
            { "Id": 8, "Names": "adidas Superstar", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/16B43_4275_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Tie-Dye", "Type": "Womens", "Brand": "adidas" }, { "Id": 9, "Names": "Timberland Courmayeur Valley", "Price": "99.99", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0762_9998_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Navy", "Type": "Womens", "Brand": "Timberland" }, { "Id": 10, "Names": "Nike Air Max 270 React", "Price": "142.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0841_0201_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Volt Pink Teal", "Type": "Womens", "Brand": "Nike" }, { "Id": 11, "Names": "adidas U_Path X", "Price": "72.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0661_6264_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black White", "Type": "Womens", "Brand": "adidas" }, { "Id": 12, "Names": "Nike Air Max 270 React", "Price": "132.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P589_1005_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Mystic Red Bright Crimson Pink Blast", "Type": "Womens", "Brand": "Nike" }, { "Id": 13, "Names": "adidas Swift Run RF", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P827_0201_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Cloud White Grey Core Black", "Type": "Womens", "Brand": "adidas" }, { "Id": 14, "Names": "adidas Superstar", "Price": "72.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0899_0201_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " White Black Floral", "Type": "Womens", "Brand": "adidas" },
            { "Id": 15, "Names": "Brooks Levitate 3", "Price": "117.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0656_6006_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Oreo", "Type": "Womens", "Brand": "Brooks" }, { "Id": 16, "Names": "Nike Air Max 97", "Price": "122.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0842_0201_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Glam Dunk", "Type": "Womens", "Brand": "Nike" }, { "Id": 17, "Names": "adidas Swift Run", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P673_0111_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black White Print", "Type": "Womens", "Brand": "adidas" }, { "Id": 18, "Names": "New Balance T410v6", "Price": "62.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0811_9998_right2?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Peony", "Type": "Womens", "Brand": "New Balance" }, { "Id": 19, "Names": "Fila Disruptor 2", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P550_1005_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Tie-Dye", "Type": "Womens", "Brand": "FILA" }, { "Id": 20, "Names": "adidas U_Path X", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0778_0136_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Cloud White Purple Beauty Core Black", "Type": "Womens", "Brand": "adidas" }, { "Id": 21, "Names": "Brooks Ghost 12", "Price": "117.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0773_0336_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Purple", "Type": "Womens", "Brand": "Brooks" }, { "Id": 22, "Names": "Brooks Ghost 12", "Price": "117.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0764_0001_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Grey Blue", "Type": "Womens", "Brand": "Brooks" }, { "Id": 23, "Names": "adidas UltraBoost 20", "Price": "180", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P674_0076_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Core Black", "Type": "Womens", "Brand": "adidas" }, { "Id": 24, "Names": "New Balance 520 v5 Wide", "Price": "62.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/1P623_1312_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Grey White", "Type": "Womens", "Brand": "New Balance" }, { "Id": 25, "Names": "Fila Disruptor 2", "Price": "67.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P672_0071_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Leopard", "Type": "Womens", "Brand": "FILA" }, { "Id": 26, "Names": "New Balance 410v6", "Price": "52.95", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/0P574_0366_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Black Grey", "Type": "Womens", "Brand": "New Balance" },
            { "Id": 27, "Names": "Brooks Revel 3", "Price": "87.97", "Store": "Hibbets", "Images": "https:\/\/i1.adis.ws\/i\/hibbett\/T0807_1445_right?w=300&amp;h=300&amp;img404=404&amp;v=1\" class=\"unloaded lazy calendar-image main-image-thumb\" \/", "Color": " Grey Purple", "Type": "Womens", "Brand": "Brooks" }];
    }
    ngOnInit() {
    }
};
WomensShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-womens-shoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./womens-shoes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/womens-shoes/womens-shoes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./womens-shoes.component.css */ "./src/app/womens-shoes/womens-shoes.component.css")).default]
    })
], WomensShoesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jycari\Desktop\NewSite\site1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map