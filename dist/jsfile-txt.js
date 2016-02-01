(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("JsFile"));
	else if(typeof define === 'function' && define.amd)
		define(["JsFile"], factory);
	else if(typeof exports === 'object')
		exports["JsFileTxt"] = factory(require("JsFile"));
	else
		root["JsFileTxt"] = factory(root["JsFile"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	var _createDocument = __webpack_require__(2);

	var _createDocument2 = _interopRequireDefault(_createDocument);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @description Supported files by engine
	 * @type {{extension: Array, mime: Array}}
	 */
	var files = {
	    extension: ['txt'],
	    mime: ['text/plain']
	};

	var TxtEngine = function (_Engine) {
	    _inherits(TxtEngine, _Engine);

	    function TxtEngine() {
	        _classCallCheck(this, TxtEngine);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TxtEngine).apply(this, arguments));

	        _this.createDocument = _createDocument2.default;
	        _this.parser = 'readSingleFile';
	        _this.files = files;
	        return _this;
	    }

	    _createClass(TxtEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }]);

	    return TxtEngine;
	}(_JsFile.Engine);

	TxtEngine.mimeTypes = files.mime.slice(0);

	(0, _JsFile.defineEngine)(TxtEngine);

	exports.default = TxtEngine;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (text) {
	    return new Promise(function (resolve) {
	        var children = [];
	        var textLines = text.split(/\n/);
	        var len = textLines.length;

	        textLines.forEach(function (tl, i) {
	            var textSections = tl.split(/\s/);

	            textSections.forEach(function (ts) {
	                if (ts) {
	                    var _element = Document.elementPrototype;
	                    _element.properties.tagName = 'SPAN';
	                    _element.properties.textContent = ts + ' ';

	                    // is it a link?
	                    if (validateUrl(ts)) {
	                        var textContent = ts.replace(/\s+/, '');

	                        _element.properties.tagName = 'A';
	                        _element.properties.href = textContent;
	                        _element.properties.textContent = textContent;
	                        _element.properties.after = ts.replace(/\S+/g, '') + ' ';
	                    }

	                    children.push(_element);
	                }
	            }, this);

	            if (i < len - 1) {
	                var _element2 = Document.elementPrototype;
	                _element2.properties.tagName = 'BR';

	                children.push(_element2);
	            }
	        }, this);

	        var element = Document.elementPrototype;
	        element.properties.tagName = 'P';
	        element.children = children;
	        children = null;

	        var page = Document.elementPrototype;
	        page.children = [element];

	        resolve(new Document({
	            meta: {
	                name: this.fileName,
	                wordsCount: text.split(/\s+/).length
	            },
	            content: [page]
	        }));
	    }.bind(this));
	};

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;
	var validateUrl = _JsFile2.default.Engine.validateUrl;

/***/ }
/******/ ])
});
;