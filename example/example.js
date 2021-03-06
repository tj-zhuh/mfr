﻿
//require.config({
//    paths: {
//        mfr: '../dist/mfr'
//    }
//})

define(function (require) {

    console.log('----0----');
    console.log(new Date())

    var mfr = require('../dist/mfr');


    var ajax = (function () {

        function __ajax__() {
            var ajaxData = {
                type: arguments[0].type || "GET",
                url: arguments[0].url || "",
                async: arguments[0].async || "true",
                data: arguments[0].data || null,
                dataType: arguments[0].dataType || "text",
                contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
                beforeSend: arguments[0].beforeSend || function () { },
                success: arguments[0].success || function () { },
                error: arguments[0].error || function () { }
            }
            ajaxData.beforeSend()
            var xhr = createxmlHttpRequest();
            xhr.responseType = ajaxData.dataType;
            xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
            xhr.setRequestHeader("Content-Type", ajaxData.contentType);
            xhr.send(convertData(ajaxData.data));
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        ajaxData.success(xhr.response)
                    } else {
                        ajaxData.error()
                    }
                }
            }
        }

        function createxmlHttpRequest() {
            if (window.ActiveXObject) {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
        }

        function convertData(data) {
            if (typeof data === 'object') {
                var convertResult = "";
                for (var c in data) {
                    convertResult += c + "=" + data[c] + "&";
                }
                convertResult = convertResult.substring(0, convertResult.length - 1)
                return convertResult;
            } else {
                return data;
            }
        }

        return __ajax__;
    })()

    console.log('----1----');
    console.log(new Date())

    var domMenuId = document.getElementById('menuId');
    var domMenuName = document.getElementById('menuName');
    var domLevel = document.getElementById('level');
    var domFolderPath = document.getElementById('folderPath');

    ajax({
        type: 'get',
        url: 'menu.json',
        dataType: 'json',
        success: function (data) {

            for (var i = 0; i < data.length; i++) {
                if (data[i].parentId == 'root') {
                    data[i].iconUrl = './images/' + data[i].folder + '.png';
                }
            }

            var dom = document.getElementById('mfr');
            mfr.init(dom);
            mfr.load(data);
            set();

            mfr.change(function () { set(); })

            function set() {
                domMenuId.innerHTML = mfr.menuId;
                domMenuName.innerHTML = mfr.menuName;
                domLevel.innerHTML = mfr.level;

                var path = '';
                var arr = mfr.activeMenus;
                for (var i = 0; i < arr.length; i++) {
                    path += arr[i].folder;
                    if (i < arr.length - 1) path += '/';
                }
                domFolderPath.innerHTML = path;
            }

            // dev hack
            function getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return decodeURI(r[2]); return null;
            }

            var p = getUrlParam('p');
            if (p) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].menuName.indexOf(p) >=0 ) {
                        mfr.jump(data[i].menuId);
                        break;
                    }
                }
            }
        }
    })

})

