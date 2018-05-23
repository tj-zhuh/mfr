/*
 *  数据格式转换
 *  输入：通过load接口加载的数据
 *  输出：root节点，以Node.js为模板
 *  ※ 附加了一个额外的任务：推导所有节点的suspend状态
 */

define(function (require) {

    var Node = require('./models/Node');

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
})