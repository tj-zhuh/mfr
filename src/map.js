
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

define(function (require) {

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

})


