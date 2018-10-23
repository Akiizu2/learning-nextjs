webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: initialize, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


var initialize = function initialize() {
  var config = {
    apiKey: "AIzaSyCQAUhXmgo-p_0y36CBND4AACu1MiUIjC8",
    authDomain: "aki-utility.firebaseapp.com",
    databaseURL: "https://aki-utility.firebaseio.com",
    projectId: "aki-utility",
    storageBucket: "aki-utility.appspot.com",
    messagingSenderId: "1039543323959"
  };
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
};
var test = function test() {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData; // ...
    } else {
      // User is signed out.
      console.log('User is signed out'); // ...
    }
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.f89511e840ddcbe19d57.hot-update.js.map