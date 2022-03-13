import{c as L}from"./vendor.735d07d3.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}};y();function b(){const t=L("#login-modal"),r=document.querySelector("#login-modal-wrapper"),i=document.querySelector("#login-modal-btn"),s=document.querySelector("#login-modal-close-btn");i.addEventListener("click",u),s.addEventListener("click",()=>{o()});function n(d){switch(d.code){case"Escape":o();break}}function o(){t.deactivate(),document.removeEventListener("keyup",n),r.classList.add("d-none")}function l(){document.addEventListener("keyup",n),r.classList.remove("d-none"),t.activate()}function u(){l()}}function p(){const t=document.querySelectorAll('[role="tab"]'),r=document.querySelectorAll('[role="tabpanel"]'),i={ArrowLeft:-1,ArrowRight:1};for(let e=0;e<t.length;++e)s(e);function s(e){t[e].addEventListener("click",n),t[e].addEventListener("keydown",o),t[e].addEventListener("keyup",l),t[e].index=e}function n(e){const c=e.target;d(c,!1)}function o(e){switch(e.code){case"End":e.preventDefault(),v();break;case"Home":e.preventDefault(),m();break}}function l(e){switch(e.code){case"ArrowLeft":case"ArrowRight":u(e);break;case"Enter":case"Space":d(e.target);break}}function u(e){const c=e.code,a=e.target;a.index!==void 0&&(console.debug(t),console.debug(a.index,t[a.index+i[c]]),t[a.index+i[c]]?t[a.index+i[c]].focus():c==="ArrowLeft"?v():c==="ArrowRight"&&m())}function d(e,c){c=c||!0,f(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),e.classList.add("active");const a=e.getAttribute("aria-controls");document.getElementById(a).classList.remove("d-none"),c&&e.focus()}function f(){for(let e=0;e<t.length;e++)t[e].setAttribute("tabindex","-1"),t[e].setAttribute("aria-selected","false"),t[e].classList.remove("active");for(let e=0;e<r.length;e++)r[e].classList.add("d-none")}function m(){t[0].focus()}function v(){t[t.length-1].focus()}}function h(){const t=document.querySelector("#exhibitions-items-next-btn"),r=document.querySelector("#exhibitions-items-prev-btn");t.addEventListener("click",n),r.addEventListener("click",o);let i=0;const s=document.querySelector("#exhibitions-items").children;function n(){s[i].classList.add("d-none"),i=(i+1)%s.length,s[i].classList.remove("d-none")}function o(){s[i].classList.add("d-none"),i=Math.abs(i-1)%s.length,s[i].classList.remove("d-none")}}function g(){const t=document.querySelector("#exhibition-filter-all"),r=document.querySelector("#exhibition-filter-today"),i=document.querySelector("#exhibition-filter-tomorrow"),s=document.querySelector("#exhibitions-list"),n=document.querySelector("#exhibitions-filter-results");r.addEventListener("click",()=>{r.classList.add("active"),i.classList.remove("active"),t.classList.remove("active");for(const o of s.children)o.classList.remove("d-none");n.textContent="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B 3 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0438"}),t.addEventListener("click",()=>{t.classList.add("active"),i.classList.remove("active"),r.classList.remove("active");for(const o of s.children)o.classList.remove("d-none");n.textContent="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B 3 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0438"}),i.addEventListener("click",()=>{i.classList.add("active"),r.classList.remove("active"),t.classList.remove("active"),s.children[2].classList.add("d-none"),n.textContent="\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B 2 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0438"})}g();p();b();h();
