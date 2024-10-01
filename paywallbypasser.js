// ==UserScript==
// @name         Paywall Bypasser
// @version      1.1
// @description  Allows users to bypass the paywall of (almost) any article they want with a few other options.
// @author       LeoMalinen
// @license      NONE
// @include      *://*
// @icon         none
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// ==/UserScript==

function replaceCurrentTab() {
    window.location = 'https://smry.ai/proxy?q=' + window.location;
}

function openNewTab() {
    GM_openInTab('https://smry.ai/proxy?q=' + window.location, { active: true });
}

function openNewIncognitoTab() {
    GM_openInTab('https://smry.ai/proxy?q=' + window.location, { active: true, incognito: true });
}

GM_registerMenuCommand("Replace Current Tab", replaceCurrentTab, "u");
GM_registerMenuCommand("New Tab", openNewTab);
GM_registerMenuCommand("New Incognito Tab", openNewIncognitoTab);

