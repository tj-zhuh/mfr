/**
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

define(function () {

    var helper = require('./helper');

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
})