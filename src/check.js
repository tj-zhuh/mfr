/*
 *  检查传入的数据格式
 */

define(function (require) {

    var assert = require('./assert');
    
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

})