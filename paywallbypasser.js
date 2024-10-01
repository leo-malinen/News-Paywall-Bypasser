// ==UserScript==
// @name         Paywall Bypasser
// @version      2.0
// @description  Allows users to bypass the paywall of any article listed they want with a few choices to replace the tab or open in a new and incognito tab. Websites usable will be listed in the README.
// @author       LeoMalinen
// @license      NONE
// @include      *://*
// @icon         none
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// ==/UserScript==

GM_registerMenuCommand("Replace Current Tab", function() {
    let currentUrl = window.location.href;
    window.location.href = 'https://smry.ai/proxy?q=' + currentUrl;
}, "u");

GM_registerMenuCommand("New Tab", () => {
    const newUrl = 'https://smry.ai/proxy?q=' + window.location.href;
    GM_openInTab(newUrl, { active: true });
});

GM_registerMenuCommand("New Incognito Tab", function() {
    var incognitoUrl = 'https://smry.ai/proxy?q=' + window.location.href;
    GM_openInTab(incognitoUrl, { active: true, incognito: true });
});
