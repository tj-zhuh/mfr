define(function (require) {
    
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

})