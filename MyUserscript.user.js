// ==UserScript==
// @name         My Example Userscript
// @namespace    https://github.com/xzjbit715
// @version      0.4
// @description  try to take over the world!
// @author       xzjbit715
// @match        http*://example.com/*
// @icon         none
// @grant        GM_addElement
// ==/UserScript==

(function() {
    'use strict';
    console.log('MyUserscript 0.4');

    GM_addElement(document.querySelector('div'), 'input', {
        type: 'button',
        value: 'this button is added by userscript'
    });
})();
