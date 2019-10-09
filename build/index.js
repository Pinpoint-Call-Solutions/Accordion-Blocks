/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_html_tag_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-html-tag-icon */ "./src/get-html-tag-icon.js");


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withInstanceId = _wp$compose.withInstanceId;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;
/**
 * Internal dependencies
 */



var AccordionItemEdit = function AccordionItemEdit(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      instanceId = _ref.instanceId;
  var title = attributes.title,
      initiallyOpen = attributes.initiallyOpen,
      clickToClose = attributes.clickToClose,
      autoClose = attributes.autoClose,
      titleTag = attributes.titleTag,
      scroll = attributes.scroll,
      scrollOffset = attributes.scrollOffset,
      uuid = attributes.uuid;
  setAttributes({
    uuid: instanceId
  });
  var titleClasses = ['c-accordion__title'];

  if (titleTag === 'button') {
    titleClasses.push('c-accordion__title--button');
  }

  var itemClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Toolbar, {
    controls: ['h1', 'h2', 'h3', 'h4', 'button'].map(function (tag) {
      return {
        icon: Object(_get_html_tag_icon__WEBPACK_IMPORTED_MODULE_1__["default"])(tag),
        title: tag.toUpperCase(),
        isActive: titleTag === tag,
        onClick: function onClick() {
          return setAttributes({
            'titleTag': tag
          });
        }
      };
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: __('Accordion Item Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Open By Default'),
    help: initiallyOpen ? __('This accordion item will be open when the page loads.') : __('This accordion item will be closed when the page loads.'),
    checked: initiallyOpen,
    onChange: function onChange(value) {
      return setAttributes({
        initiallyOpen: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Click to Close'),
    help: clickToClose ? __('When open, this accordion item title can be clicked again to close it.') : __('Once opened, this accordion item cannot be closed by clicking the title.'),
    checked: clickToClose,
    onChange: function onChange(value) {
      return setAttributes({
        clickToClose: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Auto Close'),
    help: autoClose ? __('This accordion item will close when opening another item.') : __('This accordion item will remain open when opening another item.'),
    checked: autoClose,
    onChange: function onChange(value) {
      return setAttributes({
        autoClose: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
    label: __('Scroll to Accordion Item'),
    help: scroll ? __('The page will scroll to the accordion item title when it is opened.') : __('The page will not scroll when opening accordion items.'),
    checked: scroll,
    onChange: function onChange(value) {
      return setAttributes({
        scroll: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    label: __('Scoll Pixel Offset'),
    value: scrollOffset,
    onChange: function onChange(value) {
      return setAttributes({
        scrollOffset: value ? value : 0
      });
    },
    min: 0,
    max: 1000,
    help: __('A pixel offset for the final scroll position.')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: [].concat(itemClasses, [className]).join(' ')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    className: titleClasses.join(' '),
    tagName: titleTag,
    allowedFormats: ['bold', 'italic'],
    placeholder: __('Accordion item title...'),
    value: title,
    onChange: function onChange(value) {
      return setAttributes({
        title: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "c-accordion__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose([withInstanceId])(AccordionItemEdit));

/***/ }),

/***/ "./src/get-html-tag-icon.js":
/*!**********************************!*\
  !*** ./src/get-html-tag-icon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLTagIcon; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Wordpress dependencies
 */
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
function getHTMLTagIcon(tag) {
  var icon;

  switch (tag) {
    case 'h1':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M18.63,15.88h-2V10.51l0-.88,0-1A7.37,7.37,0,0,1,16,9.3L15,10.16,14,9,17,6.6h1.61Z"
      }));
      break;

    case 'h2':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M20.27,15.88H13.78V14.52l2.33-2.36c.69-.71,1.14-1.2,1.36-1.47a3,3,0,0,0,.45-.76,1.78,1.78,0,0,0,.14-.72,1,1,0,0,0-.31-.83,1.13,1.13,0,0,0-.82-.28,2.45,2.45,0,0,0-1,.25,5.4,5.4,0,0,0-1.05.71L13.76,7.79A6.92,6.92,0,0,1,14.89,7a4,4,0,0,1,1-.37,4.82,4.82,0,0,1,1.19-.13,3.59,3.59,0,0,1,1.54.31,2.5,2.5,0,0,1,1,.89A2.33,2.33,0,0,1,20,9a3.16,3.16,0,0,1-.22,1.2,4.61,4.61,0,0,1-.7,1.15A16.65,16.65,0,0,1,17.42,13l-1.19,1.12v.09h4Z"
      }));
      break;

    case 'h3':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M19.91,8.68a2.18,2.18,0,0,1-.53,1.47A2.68,2.68,0,0,1,17.9,11v0a3,3,0,0,1,1.71.68,1.93,1.93,0,0,1,.57,1.47,2.47,2.47,0,0,1-1,2.08,4.45,4.45,0,0,1-2.77.75,6.81,6.81,0,0,1-2.68-.5V13.84a5.76,5.76,0,0,0,1.19.44,5.12,5.12,0,0,0,1.28.17,2.47,2.47,0,0,0,1.43-.33,1.21,1.21,0,0,0,.47-1.06,1,1,0,0,0-.54-.93,4,4,0,0,0-1.7-.27h-.7v-1.5h.71a3.45,3.45,0,0,0,1.58-.28,1,1,0,0,0,.5-1c0-.71-.44-1.06-1.32-1.06a2.8,2.8,0,0,0-.93.16,4.24,4.24,0,0,0-1.05.52l-.91-1.35a5.06,5.06,0,0,1,3-.91,3.93,3.93,0,0,1,2.28.58A1.89,1.89,0,0,1,19.91,8.68Z"
      }));
      break;

    case 'h4':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M20.48,14H19.36v1.92H17.45V14h-4V12.59l4.06-6h1.81v5.83h1.12Zm-3-1.53V10.86q0-.39,0-1.14c0-.5,0-.79.05-.87h-.05a7.85,7.85,0,0,1-.57,1l-1.7,2.57Z"
      }));
      break;

    case 'h5':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M17.16,10a3,3,0,0,1,2.14.76,2.71,2.71,0,0,1,.8,2.07,3,3,0,0,1-1,2.39A4,4,0,0,1,16.4,16a5.42,5.42,0,0,1-2.5-.5v-1.7a5.3,5.3,0,0,0,1.17.44,5.18,5.18,0,0,0,1.26.16q1.8,0,1.8-1.47c0-.93-.62-1.4-1.86-1.4a5.14,5.14,0,0,0-.75.06q-.4.08-.66.15l-.78-.42.35-4.73h5V8.26H16.15L16,10.08l.22,0A4.35,4.35,0,0,1,17.16,10Z"
      }));
      break;

    case 'h6':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12.09,15.88h-2v-4H6.45v4h-2V6.6h2v3.64h3.68V6.6h2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M13.72,11.94a6.1,6.1,0,0,1,1.17-4.1,4.33,4.33,0,0,1,3.48-1.35,5.86,5.86,0,0,1,1.25.1V8.15A5.4,5.4,0,0,0,18.5,8a3.93,3.93,0,0,0-1.65.3,2.13,2.13,0,0,0-1,.9,4.23,4.23,0,0,0-.38,1.7h.09a2.15,2.15,0,0,1,2-1.08,2.49,2.49,0,0,1,1.95.78,3.1,3.1,0,0,1,.7,2.16,3.23,3.23,0,0,1-.84,2.35,3.05,3.05,0,0,1-2.32.87,3.28,3.28,0,0,1-1.79-.48,3.06,3.06,0,0,1-1.18-1.39A5.23,5.23,0,0,1,13.72,11.94Zm3.35,2.5A1.18,1.18,0,0,0,18,14a1.94,1.94,0,0,0,.33-1.21,1.66,1.66,0,0,0-.31-1.07,1.15,1.15,0,0,0-.95-.39,1.44,1.44,0,0,0-1,.39,1.2,1.2,0,0,0-.42.9,2,2,0,0,0,.4,1.28A1.2,1.2,0,0,0,17.07,14.44Z"
      }));
      break;

    case 'p':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M15.5,9.49a2.87,2.87,0,0,1-.94,2.3,4,4,0,0,1-2.66.79h-.85v3.3h-2V6.6h3a3.92,3.92,0,0,1,2.57.73A2.65,2.65,0,0,1,15.5,9.49ZM11.05,11h.65a2.15,2.15,0,0,0,1.36-.36,1.27,1.27,0,0,0,.45-1,1.29,1.29,0,0,0-.38-1A1.75,1.75,0,0,0,12,8.21h-.9Z"
      }));
      break;

    case 'div':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M9.68,11.15a4.56,4.56,0,0,1-1.3,3.51,5.34,5.34,0,0,1-3.77,1.22H2V6.6H4.89A4.89,4.89,0,0,1,8.42,7.8,4.41,4.41,0,0,1,9.68,11.15Zm-2,0c0-2-.88-3-2.64-3H4v6h.84C6.69,14.25,7.64,13.24,7.64,11.2Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M11.6,15.88V6.6h2v9.28Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M21.2,6.6h2L20,15.88H17.89L14.74,6.6h2l1.74,5.52q.15.49.3,1.14c.11.44.17.74.2.91a15.19,15.19,0,0,1,.47-2.05Z"
      }));
      break;

    case 'button':
      icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M20,5.53H4a3,3,0,0,0-3,3v6.94a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.53A3,3,0,0,0,20,5.53Zm1.5,9.28A2.17,2.17,0,0,1,19.39,17H4.61A2.17,2.17,0,0,1,2.5,14.81V9.25A2.17,2.17,0,0,1,4.61,7H19.39A2.17,2.17,0,0,1,21.5,9.25Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M4.82,9.28H6.51a3.26,3.26,0,0,1,1.68.33,1.14,1.14,0,0,1,.52,1.05,1.35,1.35,0,0,1-.22.8.92.92,0,0,1-.61.37v0a1.21,1.21,0,0,1,.74.43,1.35,1.35,0,0,1,.23.84,1.37,1.37,0,0,1-.54,1.16,2.29,2.29,0,0,1-1.46.42h-2ZM6,11.43h.67a1.21,1.21,0,0,0,.68-.14.55.55,0,0,0,.21-.48.49.49,0,0,0-.23-.45,1.45,1.45,0,0,0-.72-.14H6Zm0,.92v1.42h.75a1.16,1.16,0,0,0,.71-.18A.69.69,0,0,0,7.65,13c0-.45-.32-.68-1-.68Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M12,14.72H10.88V10.24H9.41v-1h4.11v1H12Z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
        d: "M19.18,14.72H17.72L15.35,10.6h0c0,.73.08,1.25.08,1.56v2.56h-1V9.28h1.46l2.36,4.07h0q-.06-1-.06-1.5V9.28h1Z"
      }));
      break;
  }

  return icon;
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms */ "./src/transforms.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;
/**
 * Internal dependencies
 */




registerBlockType('pb/accordion-item', _objectSpread({}, _settings__WEBPACK_IMPORTED_MODULE_2__["default"], {
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var className = attributes.className,
        title = attributes.title,
        initiallyOpen = attributes.initiallyOpen,
        clickToClose = attributes.clickToClose,
        autoClose = attributes.autoClose,
        titleTag = attributes.titleTag,
        scroll = attributes.scroll,
        scrollOffset = attributes.scrollOffset,
        uuid = attributes.uuid;
    var itemClasses = ['c-accordion__item', 'js-accordion-item', 'no-js'];
    var titleClasses = ['c-accordion__title', 'js-accordion-controller'];
    var contentStyles = {};

    if (titleTag === 'button') {
      titleClasses.push('c-accordion__title--button');
    }

    if (initiallyOpen) {
      itemClasses.push('is-open');
    } else {
      contentStyles.display = 'none';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: [].concat(itemClasses, [className]).join(' '),
      "data-initially-open": initiallyOpen,
      "data-click-to-close": clickToClose,
      "data-auto-close": autoClose,
      "data-scroll": scroll,
      "data-scroll-offset": scrollOffset
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      id: 'at-' + uuid,
      className: titleClasses.join(' '),
      tagName: titleTag,
      tabIndex: 0,
      role: "button",
      "aria-controls": 'ac-' + uuid,
      value: title
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: 'ac-' + uuid,
      className: "c-accordion__content",
      style: contentStyles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)));
  }
}));

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Accordion Item', 'pb'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Path, {
    d: "M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"
  })),
  category: 'formatting',
  supports: {
    anchor: true
  },
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: '.c-accordion__title'
    },
    initiallyOpen: {
      type: 'boolean',
      default: false
    },
    clickToClose: {
      type: 'boolean',
      default: true
    },
    autoClose: {
      type: 'boolean',
      default: true
    },
    titleTag: {
      type: 'string',
      default: 'h2'
    },
    scroll: {
      type: 'boolean',
      default: false
    },
    scrollOffset: {
      type: 'number',
      default: 0
    },
    uuid: {
      type: 'number'
    }
  }
});

/***/ }),

/***/ "./src/transforms.js":
/*!***************************!*\
  !*** ./src/transforms.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies
 */
var createBlock = wp.blocks.createBlock;
var _wp$richText = wp.richText,
    create = _wp$richText.create,
    join = _wp$richText.join,
    split = _wp$richText.split,
    toHTMLString = _wp$richText.toHTMLString;
/* harmony default export */ __webpack_exports__["default"] = ({
  from: [{
    type: 'block',
    blocks: ['core/heading'],
    transform: function transform(attributes) {
      return createBlock('pb/accordion-item', {
        title: attributes.content,
        titleTag: 'h' + (attributes.level <= 4 ? attributes.level : 2)
      });
    }
  }, {
    type: 'block',
    isMultiBlock: true,
    blocks: ['core/paragraph'],
    transform: function transform(attributes) {
      return createBlock('pb/accordion-item', {}, attributes.map(function (item) {
        return createBlock('core/paragraph', {
          content: item.content
        });
      }));
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/paragraph'],
    transform: function transform(attributes, innerBlocks) {
      var newBlocks = innerBlocks.map(function (block) {
        return createBlock(block.name, block.attributes);
      });
      var level = attributes.titleTag !== 'button' ? parseInt(attributes.titleTag.replace('h', '')) : 2;
      newBlocks.splice(0, 0, createBlock('core/heading', {
        content: attributes.title,
        anchor: attributes.anchor,
        className: attributes.className,
        level: level
      }));
      return newBlocks;
    }
  }]
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map