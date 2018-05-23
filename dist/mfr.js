(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mfr"] = factory();
	else
		root["mfr"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

    var assert = function (statement, msg) {
        if (!statement) throw new Error(msg);
    }

    assert.isArray = function (statement, msg) {
        assert(Object.prototype.toString.call(statement) === "[object Array]", msg);
    }

    assert.isNonEmptyString = function (statement, msg) {
        assert(typeof statement === 'string' && !!statement, msg);
    } 

    return assert;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
    
    var __helper__ = {};

    __helper__.addHandler = function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }

    __helper__.hasClass = function (obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    __helper__.addClass = function (obj, cls) {
        if (!this.hasClass(obj, cls)) obj.className += (obj.className ? " " : "") + cls;
    }

    __helper__.removeClass = function (obj, cls) {

        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
            obj.className = obj.className.replace(/^\s+$/, '');
        }
    }

    return __helper__;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿
// 菜单节点model
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

    var fn = function () {
        this.dom;               // 菜单最外层dom元素 
        this.menuId;            // 菜单Id
        this.menuName;          // 菜单名字
        this.level;             // 层级（一级菜单的level是1） 
        this.folder;            // 文件夹
        this.active = false;    // 是否为激活状态
        this.children = [];     // 对孩子的引用   
        this.parent = null;     // 父级（一级菜单的parent是null）
        this.suspend;           // 是否停止工作的（停止工作的节点无法被点击）
    }

    return fn;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿/*
 *  检查传入的数据格式
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var assert = __webpack_require__(0);
    
    return function (arr) {

        assert.isArray(arr, '传入参数必须是数组格式');
        assert(arr.length > 0, '传入数组需要是非空的');

        var hasLevel1 = false;

        for (var i = 0; i < arr.length; i++) {

            assert.isNonEmptyString(arr[i].menuId, '节点的menuId必须为字符串，且不得为空');
            assert.isNonEmptyString(arr[i].parentId, '节点的parentId必须为字符串，且不得为空');
            assert(arr[i].menuId != arr[i].parentId, '禁止节点parentId和menuId相等'); 

            for (var j = i + 1; j < arr.length; j++) {
                assert(arr[i].menuId != arr[j].menuId, '禁止重复的menuId');
            }

            if (arr[i].parentId == 'root')
                hasLevel1 = true;
        }

        assert(hasLevel1, '至少需要一个菜单节点的parentId等于root(一级菜单)');
    }

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿
/**
 * engine.js封装了一个引擎，主要实现以下功能
 *
 * 一、响应指令：激活某个节点。算法如下：
 *  ·取消所有节点的激活状态，清空ctns的nodes
 *  ·激活传入节点
 *  ·激活传入节点的父亲、爷爷、太爷爷……直到根节点
 *  ·激活传入节点的长子、长孙、长重孙……直到最末节点
 *  ·将所有的已激活节点的孩子添加到ctn中
 *
 *  ※注意：在这里只是修改了javascript变量，并未对dom进行任何变更。  
 *
 * 二、公开属性
 *  ·clan  正在激活的节点列表（根节点、被激活的一级节点、被激活的二级几点……）
 * 
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Node = __webpack_require__(2);
    var map = __webpack_require__(8);

    var ctns;
    var root;

    // 清空ctns的nodes，所有元素active设为false
    var clearAll = function () {

        var clearNode = function (node) {
            node.active = false;
            for (var i = 0; i < node.children.length; i++) {
                clearNode(node.children[i]);
            }
        }

        clearNode(root);

        for (var i = 0; i < ctns.length; i++) {
            ctns[i].nodes.length = 0;
        }
    }

    // 模块的输出对象
    var engine = (function () {

        var __engine__ = {
            clan: []  // 正在激活的节点列表，该数组第一项始终是root
        }

        // 初始化
        __engine__.init = function (_ctns, _root) {
            ctns = _ctns;
            root = _root;
        }

        __engine__.activate = function (node) {

            clearAll();
                        
            this.clan = map(root, node);

            for (var i = 0; i < this.clan.length; i++) {
                this.clan[i].active = true;

                if (ctns[i]) {
                    ctns[i].nodes = this.clan[i].children.slice();
                }
            }
        }

        return __engine__;
    })()

    return engine;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))




/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿
// 容器model
!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

    var fn = function () {
        this.dom;               // 容器的dom
        this.level;             // 层级
        this.nodes = [];             // 节点数组
    }

    return fn;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿/**
 * 渲染
 * 传入需要渲染的节点数据（指明需要绘制哪些节点，并指出哪些节点是active的）
 *  
 * 绘制算法
 * ·清空所有容器
 * ·遍历需要绘制的节点，如果dom元素不存在，则创建；将dom元素添加到容器里
 * ·根据active状态，修改dom元素的className
 *
 * 返回
 * ·返回本次渲染过程中，新绘制了dom元素的节点（后续绑定事件时需要用到）
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {

    var helper = __webpack_require__(1);

    // 绘制元素，返回生成的dom元素
    function drawNode(menuId, menuName, level, iconUrl) {

        var li = document.createElement('li');
        li.setAttribute('data-menuId', menuId);
         
        if (level == 1) {
            var img = document.createElement('img');
            img.src = iconUrl;
            li.appendChild(img);
        }

        var text = document.createTextNode(menuName);
        li.appendChild(text);

        return li;
    }
    
    return function (ctns) {

        // created记录在这次渲染流程中，被新创建了dom元素的节点
        var created = [];
         
        for (var i = 0; i < ctns.length; i++) {

            var ctn = ctns[i];

            if (ctn.nodes.length == 0) {
                ctn.dom.style.display = 'none';
                continue;
            }

            ctn.dom.style.display = 'block';

            while (ctn.dom.firstChild) {
                ctn.dom.removeChild(ctn.dom.firstChild);
            }

            for (var j = 0; j < ctn.nodes.length; j++) {

                var node = ctn.nodes[j];

                if (!node.dom) {
                    node.dom = drawNode(node.menuId, node.menuName, node.level, node.iconUrl);
                    created.push(node);
                }

                ctn.dom.appendChild(node.dom);

                node.active ? helper.addClass(node.dom, 'active') : helper.removeClass(node.dom, 'active');

                node.suspend ? helper.addClass(node.dom, 'suspend') : helper.removeClass(node.dom, 'suspend');

                node.children.length > 0 ? helper.addClass(node.dom, 'parent') : helper.removeClass(node.dom, 'parent');
            }
        }

        return created;
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿/*
 *  数据格式转换
 *  输入：通过load接口加载的数据
 *  输出：root节点，以Node.js为模板
 *  ※ 附加了一个额外的任务：推导所有节点的suspend状态
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var Node = __webpack_require__(2);

    return function (_arr) {

        // 复制arr
        var arr = _arr.slice();
         
        var all = [];   // 所有Node的数组

        var root = new Node();
        root.level = 0;
        root.menuId = 'root';

        all.push(root);

        var loopCount = 0,
           maxCount = arr.length;

        function getById(menuId) {
            for (var i = 0; i < all.length; i++) {
                if (all[i].menuId == menuId)
                    return all[i];
            }
        }

        // 最多循环arr.length次，防止意外的无限循环
        while (loopCount++ < maxCount) {
            for (var i = 0; i < arr.length; i++) {
                var menu = arr[i];
                var parent = getById(menu.parentId);
                if (parent) {
                    var node = new Node();
                    node.menuId = arr[i].menuId;
                    node.menuName = arr[i].menuName;
                    node.level = parent.level + 1;
                    node.folder = arr[i].folder;
                    node.iconUrl = arr[i].iconUrl;
                    node.suspend = arr[i].suspend;
                    node.parent = parent;
                    parent.children.push(node);
                    all.push(node);
                    arr.splice(i, 1);
                    break;
                }
            }
        }


        // 传入数据中会对某些节点设置suspend
        // 但只有叶子节点的suspend才有意义，非叶子节点的suspend一律计算获得
        // 下面的代码实现了suspend的递归推导

        checkSuspend(root);        

        function isLeaf(node) {
            return node.children.length == 0;
        }

        function checkSuspend(node) {

            if (isLeaf(node)) {
                node.suspend = !!node.suspend;
                return;
            }

            node.suspend = true;

            for (var i = 0; i < node.children.length; i++) {
                
                checkSuspend(node.children[i]);

                if (node.children[i].suspend == false) {
                    node.suspend = false;
                }
            }
        }

        return {
            root: root,
            all:all
        };
    }
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿
/**
 * map.js 负责active推导
 *
 * 输入：root、某个待激活的node 
 * 输出一个数组，描述全部需要设置为active的节点
 *
 * 算法如下
 *  ·深度复制root，在复制的过程中，进行以下处理  
 *     ·去除所有suspend的节点
 *     ·将待激活的节点active设为true，其它节点的active设为false
 *     ·复制后的节点添加source字段，保留对原节点的引用
 *  
 *  ·激活传入节点的父亲、爷爷、太爷爷……直到根节点
 *  ·激活传入节点的长子、长孙、长重孙……直到最末节点  
 * 
 */

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var input = null;
    var activeOne = null;

    function copy(node, p) {

        var x = {};
        x.source = node;
        x.children = [];
        x.active = node == input;
        x.parent = p;

        if (x.active) activeOne = x;

        for (var i = 0; i < node.children.length; i++) {
            if (!node.children[i].suspend) {
                x.children.push(copy( node.children[i] ,x));
            }
        }

        return x;

    }

    var map = function (root, node) {

        input = node;

        var dup = copy(root, null);

        var clan = [activeOne]; 

        var num = 0;
        var parent = activeOne.parent;
        while (parent) {
            parent.active = true;
            clan.unshift(parent);
            parent = parent.parent;
            if (num++ > 10) throw new Error('计算clan时出现错误')
        }
        num = 0;
        var fchild = activeOne.children[0];
        while (fchild) {
            fchild.active = true;
            clan.push(fchild);
            fchild = fchild.children[0];
            if (num++ > 10) throw new Error('计算clan时出现错误')
        } 

        var output = [];

        for (var i = 0; i < clan.length; i++) {
            output.push(clan[i].source);
        }

        return output;

    } 

    return map;

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))




/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;﻿

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

    var helper = __webpack_require__(1);
    var assert = __webpack_require__(0);

    var check = __webpack_require__(3);
    var translate = __webpack_require__(7);
    var engine = __webpack_require__(4);
    var render = __webpack_require__(6);

    var Ctn = __webpack_require__(5);

    function build(x) { var t = new (x())(); function b() { return new (x())(); } for (var i in t) { b[i] = t[i]; } return b; }

    return build(function () {

        // 容器的数组
        var ctns = [];

        // 虚拟的根节点
        var root;

        // 所有节点
        var all;

        // change事件处理函数
        var changeHandler = null;

        // 主函数
        function ctor() {
            this.menuId;    // 正在激活的叶子节点的id
            this.menuName;  // 正在激活的叶子节点的name
            this.level;     // 正在激活的叶子节点的level
            this.activeMenus;   // 正在激活的节点列表，每一项包含menuId、menuName、folder三个字段
        }

        // 设置外层容器
        ctor.prototype.init = function (_dom) {

            for (var i = 0; i < 4; i++) {

                var ul = document.createElement('ul');
                ul.className = "mfr" + (i + 1);
                _dom.appendChild(ul);

                var ctn = new Ctn();
                ctn.level = i + 1;
                ctn.dom = ul;
                ctns.push(ctn);
            }
        }

        /**
         * 加载菜单数据
         * @param {Array} arr
         *
         * arr每一项包含以下字段
         * menuId       {String}菜单Id
         * menuName     {String}菜单名字
         * parentId     {String}父级Id（一级菜单的parentId始终为root）
         * folder       {String}文件夹
         */
        ctor.prototype.load = function (arr) {

            var that = this;

            check(arr); // 校验输入数据arr，如果有误直接throw error 
            var result = translate(arr); // 将输入数据arr，转换为树形结构
            root = result.root;
            all = result.all;
            engine.init(ctns, root);  // engine初始化
            this.jump(root); 
        }

        // 跳转到指定的菜单
        // menuId可以是菜单Id，也可以是Node对象
        ctor.prototype.jump = function (menuId) {

            var that = this;
            var node = null;

            if (typeof menuId === 'object')
                node = menuId;
            else {
                for (var i = 0; i < all.length; i++) {
                    if (all[i].menuId == menuId) {
                        node = all[i];
                        break;
                    }
                }
            } 
         
            if (!node) return;
            if (node.active) return;
            if (node.suspend) return;

            engine.activate(node);
            var created = render(ctns); // 渲染菜单节点 

            // 菜单点击事件
            for (var i = 0; i < created.length; i++) {
                (function (node) {
                    helper.addHandler(node.dom, 'click', function () {
                        that.jump(node);
                    })
                })(created[i]);
            }

            var clan = engine.clan;
            var leaf = clan[clan.length - 1];
            that.menuId = leaf.menuId;
            that.menuName = leaf.menuName;
            that.level = leaf.level;
            that.activeMenus = [];
            for (var i = 1; i < clan.length; i++) {
                that.activeMenus.push({
                    menuId: clan[i].menuId,
                    menuName: clan[i].menuName,
                    folder: clan[i].folder
                })
            }

            if (typeof changeHandler === 'function')
                changeHandler();
        }

        // 指定change事件的处理函数
        ctor.prototype.change = function (fn) {
            changeHandler = fn;
        }

        return ctor;

    });

}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});