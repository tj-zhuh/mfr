
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

define(function (require) {

    var Node = require('./models/Node');
    var map = require('./map');

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

})


