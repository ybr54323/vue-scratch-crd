(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-scratch-crd"] = factory();
	else
		root["vue-scratch-crd"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0981":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "1664":
/***/ (function(module, exports) {

function Ele(x, y, {
  ctx,
  virtualCtx,
  virtualCanvas,
  r,
  fillStyle,
}) {
  this.ctx = ctx
  this.virtualCtx = virtualCtx
  this.virtualCanvas = virtualCanvas
  this.x = x
  this.y = y
  this.r = r
  this.fillStyle = fillStyle
}

Ele.prototype.draw = function () {
  this.ctx.beginPath()
  this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
  this.ctx.fillStyle = this.fillStyle
  this.ctx.fill()
  this.ctx.closePath()
}

function Point(x, y, params) {
  Ele.call(this, x, y, params)
  this.active = false
}


Point.prototype = Object.create(Ele.prototype)
Point.constructor = Point

Point.prototype.createPath = function () {
  this.ctx.beginPath()
  this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
  this.ctx.closePath()
}

function Chicken(x, y, params) {
  Ele.call(this, x, y, params)
  const {width, height, texture} = params
  this.width = width
  this.height = height
  this.texture = texture
  this.points = []
  this.activeCount = 0
  this.finish = false // 完成刮出
}

Chicken.prototype = Object.create(Chicken.prototype)
Chicken.constructor = Chicken
Chicken.prototype.draw = function () {
  this.virtualCtx.beginPath()
  this.virtualCtx.drawImage(this.texture, this.x, this.y, this.width, this.height)
  this.virtualCtx.closePath()
}

Chicken.prototype.initPoints = function () {
  if (this.points.length) return
  // const pRadius = least(this.width, this.height)
  // if (!pRadius) throw new Error('pRadius值错误:\n', pRadius)

  for (let i = 0; i < this.width / 20; i++) {
    for (let j = 0; j < this.height / 20; j++) {
      const p = new Point(i * 20 + this.x, j * 20 + this.y, {r: 10, ctx: this.ctx})
      this.points.push(p)
    }
  }
  console.log(this.points)
}

function Tap(x, y, params) {
  Ele.call(this, x, y, params)
  const {virtualCanvas} = params
  this.virtualCanvas = virtualCanvas // 画外的画
}

Tap.prototype = Object.create(Ele.prototype)
Tap.constructor = Tap

Tap.prototype.draw = function () {
  this.ctx.beginPath()
  this.ctx.drawImage(this.virtualCanvas, this.x, this.y, this.r, this.r, this.x, this.y, this.r, this.r)
  this.ctx.closePath()

}

module.exports = {
  Ele,
  Point,
  Chicken,
  Tap
}


/***/ }),

/***/ "1a51":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a55":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chicken1.png": "0981",
	"./chicken2.png": "b84c"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "3a55";

/***/ }),

/***/ "7f3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scratch_vue_vue_type_style_index_0_id_df3ce8c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a51");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scratch_vue_vue_type_style_index_0_id_df3ce8c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scratch_vue_vue_type_style_index_0_id_df3ce8c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scratch_vue_vue_type_style_index_0_id_df3ce8c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b84c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b07ccda4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/scratch/Scratch.vue?vue&type=template&id=df3ce8c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isOk),expression:"isOk"}],staticClass:"main-box",attrs:{"id":"res"}},[_c('img',{staticClass:"img-c",attrs:{"src":__webpack_require__("b84c"),"alt":"鸡"}}),_c('div',{staticClass:"sub-box"},[_c('svg',{staticClass:"icon-success",attrs:{"t":"1601341697648","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1375","width":"16","height":"16"}},[_c('path',{attrs:{"d":"M512 976.742c-256.67 0-464.742-208.071-464.742-464.737C47.258 255.33 255.329 47.258 512 47.258S976.742 255.329 976.742 512c0 256.67-208.071 464.742-464.742 464.742z m225.413-754.268C575.754 328.69 473.231 647.337 473.231 647.337l-63.088-156.795-130.12 101.161c55.209 25.288 134.067 106.214 201.093 212.429C528.43 692.864 674.324 465.254 745.298 445.02c-27.597-80.921-11.822-146.678-7.885-222.546z m0 0","p-id":"1376","fill":"#1afa29"}})]),_c('div',{staticClass:"success-text"},[_vm._v("恭喜您成功刮出小鸡，继续下一步操作吧")])])]),_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isOk),expression:"!isOk"}],attrs:{"id":"canvas"}},[_vm._v("请换一个现代浏览器")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/scratch/Scratch.vue?vue&type=template&id=df3ce8c8&scoped=true&

// EXTERNAL MODULE: ./src/lib/scratch/entity.js
var entity = __webpack_require__("1664");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/scratch/Scratch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Scratchvue_type_script_lang_js_ = ({
  name: "Scratch",
  props: {
    configParams: {
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isOk: false
    }
  },
  mounted() {
    window.onload = () => {
      this.init(this.configParams)
    }
  },
  methods: {
    init({
           width: customWidth = 300,
           height: customHeight = 200,
           id = 'canvas',
           layerBgColor = 'gray',
           bottomBgColor = 'skyBlue',
           targetWidth = 50,
           targetHeight = 50,
           targetCount = 2,
           tapRadius = 20,
         } = {}) {
      const vm = this
      const canvas = document.querySelector(id)
      canvas.style.display = id === 'canvas' ? 'unset' : 'none'
      const ctx = canvas.getContext('2d')

      const virtual = document.createElement('canvas'); // 画布外画
      const virtualCtx = virtual.getContext('2d')

      const res = document.querySelector('#res')

      const width = canvas.width = virtual.width = customWidth
      const height = canvas.height = virtual.height = customHeight

      res.style.width = width + 'px'
      res.style.height = height + 'px'

      let chickenTextureList = [] // 鸡图
      const chickenList = [] // 鸡的数组
      const tapTail = [] // 运动轨迹
      let rId // animation id

      let count = 0
      for (let i = 1; i <= 2; i++) {
        const url = __webpack_require__("3a55")("./chicken" + i + ".png")
        const img = new Image()
        img.src = url
        img.onload = () => {
          count++
          chickenTextureList.push(img)
          if (count === 2) {
            let isMouseDown = false
            bindMouseEvent()
            bindTouchEvent()
            loop()

            function bindTouchEvent() {
              const {offsetTop, offsetLeft} = canvas
              canvas.addEventListener('touchstart', (e) => {
                isMouseDown = true
                e.preventDefault()
              })
              canvas.addEventListener('touchend', (e) => {
                isMouseDown = false
                e.preventDefault()
              })
              canvas.addEventListener('touchcancel', (e) => {
                isMouseDown = false
                e.preventDefault()
              })
              canvas.addEventListener('touchmove', (e) => {
                if (!isMouseDown) return
                e.preventDefault()
                const {changedTouches: [touch]} = e
                const {pageX, pageY} = touch
                const offsetX = pageX - offsetLeft
                const offsetY = pageY - offsetTop
                console.log(offsetX, offsetY)
                for (let i = 0; i < tapTail.length; i++) { // handle repeat
                  if (tapTail[i].x === offsetX && tapTail[i].y === offsetY) {
                    return
                  }
                }
                tapTail.push(new entity["Tap"](offsetX, offsetY, {r: tapRadius, virtualCanvas: virtual, ctx}))
                for (let i = 0; i < chickenList.length; i++) {
                  const c = chickenList[i]
                  for (let i = 0; i < c.points.length; i++) {
                    const p = c.points[i]
                    p.createPath()
                    if (ctx.isPointInPath(offsetX, offsetY) && !p.active) {
                      p.active = true
                      c.activeCount++
                    }
                    ctx.closePath()
                  }
                  console.log(`总个数: ${c.points.length}\n点中个数: ${c.activeCount}`)
                  if (c.activeCount >= c.points.length) { // all active
                    c.finish = true
                  }
                }
              })
            }

            function bindMouseEvent() {
              canvas.addEventListener('mousedown', function (e) {
                isMouseDown = true
              })
              canvas.addEventListener('mouseup', function (e) {
                isMouseDown = false
              })

              canvas.addEventListener('mousemove', function (e) {
                if (!isMouseDown) return
                const {offsetX, offsetY} = e
                for (let i = 0; i < tapTail.length; i++) { // handle repeat
                  if (tapTail[i].x === offsetX && tapTail[i].y === offsetY) {
                    return
                  }
                }
                tapTail.push(new entity["Tap"](offsetX, offsetY, {r: tapRadius, virtualCanvas: virtual, ctx}))
                for (let i = 0; i < chickenList.length; i++) {
                  const c = chickenList[i]
                  for (let i = 0; i < c.points.length; i++) {
                    const p = c.points[i]
                    p.createPath()
                    if (ctx.isPointInPath(offsetX, offsetY) && !p.active) {
                      p.active = true
                      c.activeCount++
                    }
                    ctx.closePath()
                  }
                  console.log(`总个数: ${c.points.length}\n点中个数: ${c.activeCount}`)
                  if (c.activeCount >= c.points.length) { // all active
                    c.finish = true
                  }
                }
              })
            }

            function random(min, max) {
              return Math.random() * (max - min)
            }

            function loop() {
              if (!rId) {
                drawBase() // 画外画布画一次就够
              }
              const gradient = ctx.createLinearGradient(0, 0, width, height)
              gradient.addColorStop(0, "#333");
              gradient.addColorStop(0.2, "white");
              gradient.addColorStop(0.5, "#666");
              gradient.addColorStop(0.8, "white");
              gradient.addColorStop(1, "#333");
              ctx.fillStyle = gradient
              ctx.fillRect(0, 0, width, height)
              tapTail.forEach(t => {
                t.draw()
              })
              const allFinish = chickenList.every((c) => {
                return c.finish
              })
              if (allFinish) {
                cancelAnimationFrame(rId)
                vm.$emit('on-ok', true)
                vm.isOk = true
                return
              }
              rId = requestAnimationFrame(loop)
            }

            function drawBase() {
              let cWidth, cHeight
              cWidth = targetWidth
              cHeight = targetHeight

              const gradient = ctx.createLinearGradient(0, 0, width, 0)
              gradient.addColorStop(0, "#6495ED");
              gradient.addColorStop(0.1, "#AFEEEE");
              gradient.addColorStop(0.5, "#B0E0E6");
              gradient.addColorStop(0.9, "#AFEEEE");
              gradient.addColorStop(1, "#6495ED");
              virtualCtx.fillStyle = gradient
              virtualCtx.fillRect(0, 0, width, height)
              while (chickenList.length < targetCount) {
                const c = new entity["Chicken"](random(cWidth, width - cWidth), random(cHeight, height - cHeight), {
                  width: cWidth,
                  height: cHeight,
                  texture: chickenTextureList[Math.floor(Math.random() * 2)],
                  ctx,
                  virtualCtx
                })
                c.initPoints()
                chickenList.push(c)
              }
              console.log(chickenList)
              chickenList.forEach(c => {
                c.draw()
              })
            }
          }
        }
      }
    }

  }
});

// CONCATENATED MODULE: ./src/lib/scratch/Scratch.vue?vue&type=script&lang=js&
 /* harmony default export */ var scratch_Scratchvue_type_script_lang_js_ = (Scratchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lib/scratch/Scratch.vue?vue&type=style&index=0&id=df3ce8c8&scoped=true&lang=css&
var Scratchvue_type_style_index_0_id_df3ce8c8_scoped_true_lang_css_ = __webpack_require__("7f3a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/scratch/Scratch.vue






/* normalize component */

var component = normalizeComponent(
  scratch_Scratchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "df3ce8c8",
  null
  
)

/* harmony default export */ var Scratch = (component.exports);
// CONCATENATED MODULE: ./src/lib/scratch/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Scratch.install = function (Vue) {
  Vue.component(Scratch.name, Scratch)
}

// 导出组件
/* harmony default export */ var scratch = (Scratch);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (scratch);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-scratch-crd.umd.js.map