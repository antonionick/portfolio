!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3)},function(e,t,n){},function(e,t){const n=document.querySelectorAll(".panel");function r(e){this.parentElement.classList.toggle("panel_open")}[].forEach.call(n,e=>e.querySelector(".panel__title-wrapper").addEventListener("click",r))},function(e,t){const n=document.querySelectorAll(".carousel__description");function r(e){const t=["show description","hide description"],n=this.parentElement,r=this.querySelector(".carousel__show");n.classList.toggle("carousel__description_open"),n.classList.contains("panel_open")?r.textContent=t[1]:r.textContent=t[0]}[].forEach.call(n,e=>e.querySelector(".carousel__show-wrapper").addEventListener("click",r));const o=document.querySelectorAll(".carousel__button");function l(e){const t=this.parentElement.querySelector(".carousel__wrapper"),n=t.children.length;if(n<2)return;const r=t.firstElementChild,o=getComputedStyle(r);this.classList.contains("carousel__button_left")?i({element:r,styles:o,length:n}):s({element:r,styles:o,length:n})}function c(e,t=!1){const n=this.children.length;if(n<2)return;const r=this.firstElementChild,o=getComputedStyle(r);t?s({element:r,styles:o,length:n}):i({element:r,styles:o,length:n})}function s(e){const t=-parseInt(e.styles.marginLeft)/parseInt(e.styles.width);t>=e.length-1||t%1!=0||(e.element.style.marginLeft=`-${100*(t+1)}%`)}function i(e){const t=-parseInt(e.styles.marginLeft)/parseInt(e.styles.width);t<=0||t%1!=0||(e.element.style.marginLeft=`${100*(t-1)}%`)}[].forEach.call(o,e=>e.addEventListener("click",l));(()=>{let e=document.querySelector(".carousel__button").parentElement.querySelector(".carousel__wrapper"),t=0,n=0,r=0,o=0,s=0,i=0;e.addEventListener("touchstart",(function(e){if(e.target.classList.contains("carousel__button"))return void l.call(this,e);const r=e.changedTouches[0];t=r.pageX,n=r.pageY,s=(new Date).getTime()}),!1),e.addEventListener("touchend",(function(e){const l=e.changedTouches[0];r=l.pageX-t,o=l.pageY-n,(i=(new Date).getTime()-s)<=450&&Math.abs(r)>=150&&Math.abs(o)<=100&&(r<0?c.call(this,e,!0):c.call(this,e))}),!1)})()}]);