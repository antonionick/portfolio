!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,,,,function(e,t,n){"use strict";n.r(t);n(5),n(6)},function(e,t,n){},function(e,t){const n=["theyalow","repair-design-project"],r=document.querySelector(".project__button_change"),o=["mobile","desktop"],c=document.createElement("iframe");r.addEventListener("click",(function(){c.classList.toggle("project__content_mobile"),r.textContent=c.classList.contains("project__content_mobile")?o[1]:o[0]})),function(){const e=window.location.search.slice(1);c.classList.add("project__content"),n.forEach(t=>{t===e&&c.setAttribute("src",`../projects/${t}/${t}.html`)}),c.style.height=window.innerHeight+"px",document.querySelector(".project").insertAdjacentElement("afterbegin",c)}()}]);