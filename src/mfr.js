

define(function (require) {

    var helper = require('./helper');
    var assert = require('./assert');

    var check = require('./check');
    var translate = require('./translate');
    var engine = require('./engine');
    var render = require('./render');

    var Ctn = require('./models/Ctn');

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

});