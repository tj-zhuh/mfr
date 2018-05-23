
// 菜单节点model
define(function () {

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

})