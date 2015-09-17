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

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _JsFile = __webpack_require__(1);

	var _readerCreateDocument = __webpack_require__(2);

	var _readerCreateDocument2 = _interopRequireDefault(_readerCreateDocument);

	var files = {
	    extension: ['txt'],
	    mime: ['text/plain']
	};

	var TxtEngine = (function (_Engine) {
	    _inherits(TxtEngine, _Engine);

	    function TxtEngine() {
	        _classCallCheck(this, TxtEngine);

	        _get(Object.getPrototypeOf(TxtEngine.prototype), 'constructor', this).apply(this, arguments);

	        this.createDocument = _readerCreateDocument2['default'];
	        this.parser = 'readSingleFile';
	        this.files = files;
	    }

	    _createClass(TxtEngine, null, [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }, {
	        key: 'mimeTypes',
	        value: files.mime.slice(0),
	        enumerable: true
	    }]);

	    return TxtEngine;
	})(_JsFile.Engine);

	(0, _JsFile.defineEngine)(TxtEngine);

	exports['default'] = TxtEngine;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var Document = _JsFile2['default'].Document;
	var validateUrl = _JsFile2['default'].Engine.validateUrl;

	exports['default'] = function (text) {
	    return new Promise((function (resolve) {
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
	            name: this.fileName,
	            wordsCount: text.split(/\s+/).length,
	            pages: [page]
	        }));
	    }).bind(this));
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;