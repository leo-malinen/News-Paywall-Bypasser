// ==UserScript==
// @name         Paywall Bypasser
// @version      1.0
// @description  Allows users to bypass the paywall of (almost) any article they want with a few other options.
// @author       LeoMalinen
// @license      NONE
// @include      *://*
// @icon         none
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// ==/UserScript==

GM_registerMenuCommand("Replace the Current Tab", function() {
    var currentUrl = window.location.href;
    var proxyUrl = 'https://bypasspaywallsclean.com/proxy?q=' + encodeURIComponent(currentUrl);
    window.location.href = proxyUrl;
}, "u");

GM_registerMenuCommand("Open in a New Tab", function() {
    var currentUrl = window.location.href;
    var proxyUrl = 'https://bypasspaywallsclean.com/proxy?q=' + encodeURIComponent(currentUrl);
    if (!window.openedTab) {
        window.openedTab = GM_openInTab(proxyUrl, { active: true });
    }
});

GM_registerMenuCommand("Open in an Incognito Tab", function() {
    console.log("Opening in Incognito Tab");
    var currentUrl = window.location.href;
    var proxyUrl = 'https://bypasspaywallsclean.com/proxy?q=' + encodeURIComponent(currentUrl);
    if (!window.openedIncognitoTab) {
        window.openedIncognitoTab = GM_openInTab(proxyUrl, { active: true, incognito: true });
    }
});
