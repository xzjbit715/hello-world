// ==UserScript==
// @name         鳥哥Style
// @namespace    https://github.com/xzjbit715/
// @version      0.1
// @description  鳥哥的私房菜 取消空白背景
// @author       You
// @match        https://linux.vbird.org/*
// @downloadURL  https://github.com/xzjbit715/hello-world/blob/master/userscript/vbirdStyle.user.js
// @updateURL    https://github.com/xzjbit715/hello-world/blob/master/userscript/vbirdStyle.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vbird.org
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var line = '\r\n';
    var css = 'body { background-color: rosybrown !important; }' + line
        + 'table.news { background-color: burlywood !important; }' + line
        + '.vbirdface { color: #007000 !important; }' + line
        + '.myfooter { background-color: #343a40 !important; }' + line
        + 'div img { background-color: antiquewhite; }'
    ;

    GM_addStyle(css);
})();
