// ==UserScript==
// @name         wikiwand
// @namespace    https://github.com/xzjbit715/
// @version      0.1
// @description  修正當頁面自動轉換繁簡中文字時，超連結文字格式未正確套用
// @author       xzjbit715
// @match        https://www.wikiwand.com/*
// @downloadURL  https://github.com/xzjbit715/hello-world/raw/master/userscript/wikiwand.user.js
// @updateURL    https://github.com/xzjbit715/hello-world/raw/master/userscript/wikiwand.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikiwand.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('a span[data-mw-variant-lang] { color: var(--color-link) !important; }');
})();
