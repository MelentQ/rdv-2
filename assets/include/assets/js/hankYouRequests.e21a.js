(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{183:function(t,e,o){"use strict";o.r(e),function(t){var e=o(84);const a=Math.round(90);let s,c=0;const n=()=>{c>=a&&r();const e=(()=>{const t=location.search;return new URLSearchParams(t).get("requestId")})(),o=localStorage.getItem("hashId")||"";t.post("/local/api/forms/getDemoAnswer/",{requestId:e,hashCode:o},t=>{const e=JSON.parse(t);e.success?window.location.replace(e.redirectUrl):(t=>{localStorage.setItem("hashId",t)})(e.hashId)}),c++},r=()=>{clearInterval(s),s=null,Object(e.a)("Извините, в данный момент наблюдается большая нагрузка на сервис.",'Через некоторое время вам придет на почту письмо с доступами.\n\t\tЕсли вы не получили письмо, проверьте, пожалуйста, папку "Спам".\n\t\tЕсли письма нет ни в одной из папок, пожалуйста, напишите нам на почту academy@rdv-it.ru')};n(),s||(s=setInterval(n,2e3))}.call(this,o(1))},187:function(t,e,o){"use strict";o.r(e);var a=o(48);const s=t=>{const e=t.currentTarget;if(e.classList.contains("state-active"))return;const o=e.closest("[data-tabs]"),a=o.hasAttribute("data-scroll-top"),s=o.querySelector(".state-active[data-tabs-button]"),c=e.getAttribute("data-tabs-button"),n=o.querySelector(`[data-tabs-body='${c}']`),r=o.querySelector(".state-active[data-tabs-body]");e.classList.add("state-active"),s.classList.remove("state-active"),n.classList.add("state-active"),r.classList.remove("state-active"),a&&window.scrollTo({top:o.getBoundingClientRect().top+document.documentElement.scrollTop-80})},c=t=>t.forEach(t=>t.addEventListener("click",s));let n=50;const r=t=>{const e=t.currentTarget,o=e.closest("[data-open-body-wrapper]"),a=o.querySelector("[data-open-body]"),s=o.classList.contains("state-open");s?o.classList.remove("state-open"):o.classList.add("state-open");const c=e.getAttribute(""+(s?"data-close-text":"data-open-text"));e.textContent=c,a.style.height=s?"":a.scrollHeight+n+"px",s&&window.scrollTo({top:a.getBoundingClientRect().top+document.documentElement.scrollTop,behavior:"smooth"}),n=0},l=t=>{const e=t.currentTarget.closest(".perfomance-section__item-slider"),o=e.querySelector(".swiper-slide-active")||e.querySelector(".swiper-slide"),a=new CustomEvent("click",{bubbles:!0});o.dispatchEvent(a)};var i;(()=>{const t=document.querySelectorAll("[data-slide-open-button]");t.length&&t.forEach(t=>t.addEventListener("click",r))})(),(()=>{if(document.querySelector("[data-sticky-tabs]")){new a.a("[data-sticky-tabs]",{topSpacing:window.innerWidth>=1100?100:63,bottomSpacing:100,containerSelector:"[data-sticky-tabs-container]",innerWrapperSelector:".perfomance-section__tabs-buttons-inner"})}})(),(()=>{const t=document.querySelectorAll(".perfomance-section__slider-counter");t&&t.forEach(t=>{const e=t.querySelector(".perfomance-section__slider-counter-title"),o=t.closest(".perfomance-section__slider"),a=o.querySelectorAll(".perfomance-section__slider-item");if(a.length<=1){if(o.querySelector("video")||o.querySelector("iframe"))return void o.classList.add("without-mobile-gradient")}t.addEventListener("click",l);const s=a.length;var c,n;e.textContent=`${s} ${c=s,n=["скриншот","скриншота","скриншотов"],n[c%100>4&&c%100<20?2:[2,0,1,1,1,2][c%10<5?Math.abs(c)%10:5]]}`})})(),i="[data-tabs]",document.querySelectorAll(i).forEach(t=>{const e=t.querySelectorAll("[data-tabs-button]");c(e)})}}]);