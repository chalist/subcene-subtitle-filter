// ==UserScript==
// @name        subcene-subtitle-filter
// @namespace   ch-subscene-filter
// @include     http://subscene.com/subtitles/*
// @version     0.0.1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// allow pasting
// ==/UserScript==

// Your language name. For example I set Persian. you can see your language name one time for ever :D
var lang = 'Farsi/Persian';

var element = $('td.a1 a > span:first-child');
for (var i = 0; i < element.length; ++i) {
    var t = $(element[i]).text().trim();
    if (t != lang) {
        $(element[i]).closest('tr').remove();
    }
}

// remove blank tr between languages start
$('td[colspan=5]').remove();

// scrolls to page top
window.scrollTo(0,0);
