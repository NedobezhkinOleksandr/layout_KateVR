parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),window.addEventListener("hashchange",function(){"#lang"===window.location.hash?document.body.classList.add("page__body--with-lang"):document.body.classList.remove("page__body--with-lang")}),window.addEventListener("hashchange",function(){"#help"===window.location.hash?document.body.classList.add("page__body--with-help"):document.body.classList.remove("page__body--with-help")}),window.addEventListener("hashchange",function(){"#buy"===window.location.hash?document.body.classList.add("page__body--with-buy"):document.body.classList.remove("page__body--with-buy")}),window.addEventListener("hashchange",function(){"#pay"===window.location.hash?document.body.classList.add("page__body--with-pay"):document.body.classList.remove("page__body--with-pay")}),window.addEventListener("hashchange",function(){"#complete"===window.location.hash?document.body.classList.add("page__body--with-complete"):document.body.classList.remove("page__body--with-complete")}),window.addEventListener("hashchange",function(){"#faq"===window.location.hash?document.body.classList.add("page__body--with-faq"):document.body.classList.remove("page__body--with-faq")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".lang");"#lang"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".faq");"#faq"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".help");"#help"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".buy");"#buy"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".pay");"#pay"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")}),window.addEventListener("hashchange",function(){var e=document.querySelector(".complete");"#complete"===window.location.hash?e.classList.add("page__menu"):e.classList.remove("page__menu")});var e=document.querySelector("#form");function n(n){n.preventDefault(),e.reset()}e.addEventListener("submit",n,!1);var t={1:1200,2:2400},o=function(e,n){var o=parseInt(e.value),a=t[o];a&&(n.textContent="".concat(a,"$"))},a=document.querySelector('select[name="amount"]'),d=document.querySelector(".place__price");a.addEventListener("change",function(){o(a,d)});var c=document.querySelector('select[name="amount-pay"]'),s=document.querySelector(".pay__price");c.addEventListener("change",function(){o(c,s)});var i=document.querySelector(".place__customer-info"),l=document.querySelector('select[name="countries"]'),u=document.querySelector('select[name="cities"]');i.addEventListener("submit",function(e){" "!==l.value&&" "!==u.value||(e.preventDefault(),alert("Please select a country and a city."))});var r,h=document.getElementById("video-source"),m=document.getElementById("video-link"),w=document.getElementById("video-link-2"),y=document.getElementsByClassName("close")[0],p=document.getElementById("videoPlayer");function _(){r=new YT.Player("videoPlayer",{events:{onReady:v}})}function v(){}m.onclick=function(){h.style.display="flex",p.src="https://www.youtube.com/embed/26nx1zTAthw?enablejsapi=1",_()},w.onclick=function(){h.style.display="flex",p.src="https://www.youtube.com/embed/26nx1zTAthw?enablejsapi=1",_()},y.onclick=function(){h.style.display="none",p.src="",r&&r.stopVideo()},window.onclick=function(e){e.target===h&&(h.style.display="none",h.src="",r&&r.stopVideo())};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e6b19b87.js.map