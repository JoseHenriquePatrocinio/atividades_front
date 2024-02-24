(function(){"use strict";var a={1003:function(a,t,c){var e=c(5130),n=c(6768);function s(a,t){const c=(0,n.g2)("router-link"),e=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("nav",null,[(0,n.bF)(c,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("Home")])),_:1})]),(0,n.bF)(e)],64)}var o=c(1241);const r={},i=(0,o.A)(r,[["render",s]]);var d=i,l=c(1387);const u=a=>((0,n.Qi)("data-v-74d50ab7"),a=a(),(0,n.jt)(),a),v={class:"grid grid-template-columns"},f=u((()=>(0,n.Lk)("div",null,[(0,n.Lk)("img",{class:"card-img-top",src:"/img/contador.png",alt:"Contador incremental"}),(0,n.Lk)("h2",null,"Contador incremental")],-1))),b=u((()=>(0,n.Lk)("div",null,[(0,n.Lk)("img",{class:"card-img-top",src:"/img/faq.png",alt:"FAQ"}),(0,n.Lk)("h2",null,"Perguntas frequentes")],-1)));function p(a,t,c,e,s,o){const r=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",v,[(0,n.bF)(r,{to:"/contador",class:"card"},{default:(0,n.k6)((()=>[f])),_:1}),(0,n.bF)(r,{to:"/faq",class:"card"},{default:(0,n.k6)((()=>[b])),_:1})])}var m={name:"HomeView"};const h=(0,o.A)(m,[["render",p],["__scopeId","data-v-74d50ab7"]]);var g=h;const q=(0,n.Fv)('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" data-v-4b08007c><div class="counter-container" data-v-4b08007c><i class="fab fa-twitter fa-3x" data-v-4b08007c></i><div class="counter" data-target="12000" data-v-4b08007c></div><span data-v-4b08007c>Seguidores do Twitter</span></div><div class="counter-container" data-v-4b08007c><i class="fab fa-youtube fa-3x" data-v-4b08007c></i><div class="counter" data-target="5000" data-v-4b08007c></div><span data-v-4b08007c>Assinantes do YouTube</span></div><div class="counter-container" data-v-4b08007c><i class="fab fa-facebook fa-3x" data-v-4b08007c></i><div class="counter" data-target="7500" data-v-4b08007c></div><span data-v-4b08007c>Fãs do Facebook</span></div>',4),k=[q];function w(a,t,c,e,s,o){return(0,n.uX)(),(0,n.CE)("body",null,k)}var x={name:"ContadorView",mounted(){this.counters()},methods:{counters(){const a=document.querySelectorAll(".counter"),t=200;a.forEach((a=>{const c=+a.getAttribute("data-target"),e=c/t,n=()=>{const t=+a.innerText;t<c?(a.innerText=Math.ceil(t+e),requestAnimationFrame(n)):a.innerText=c};n()}))}}};const y=(0,o.A)(x,[["render",w],["__scopeId","data-v-4b08007c"]]);var F=y;const O=(0,n.Fv)('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" data-v-023bc1cc><h1 data-v-023bc1cc>Perguntas Frequentes</h1><div class="faq-container" data-v-023bc1cc><div class="faq active" data-v-023bc1cc><h3 class="faq-title" data-v-023bc1cc> Qual é a capital do Brasil presente em todas as festas de aniversário? </h3><p class="faq-text" data-v-023bc1cc> Palmas. </p><button class="faq-toggle" data-v-023bc1cc><i class="fas fa-chevron-down" data-v-023bc1cc></i><i class="fas fa-times" data-v-023bc1cc></i></button></div><div class="faq" data-v-023bc1cc><h3 class="faq-title" data-v-023bc1cc> O que é pequeno em Lisboa e grande no Brasil? </h3><p class="faq-text" data-v-023bc1cc> A letra B (minúscula em Lisboa e maiúscula em Brasil). </p><button class="faq-toggle" data-v-023bc1cc><i class="fas fa-chevron-down" data-v-023bc1cc></i><i class="fas fa-times" data-v-023bc1cc></i></button></div><div class="faq" data-v-023bc1cc><h3 class="faq-title" data-v-023bc1cc> Qual é a maneira orientada a objetos de se tornar rico? </h3><p class="faq-text" data-v-023bc1cc> Herança. </p><button class="faq-toggle" data-v-023bc1cc><i class="fas fa-chevron-down" data-v-023bc1cc></i><i class="fas fa-times" data-v-023bc1cc></i></button></div><div class="faq" data-v-023bc1cc><h3 class="faq-title" data-v-023bc1cc> Qual é a operadora que concorda sempre? </h3><p class="faq-text" data-v-023bc1cc> Claro. </p><button class="faq-toggle" data-v-023bc1cc><i class="fas fa-chevron-down" data-v-023bc1cc></i><i class="fas fa-times" data-v-023bc1cc></i></button></div><div class="faq" data-v-023bc1cc><h3 class="faq-title" data-v-023bc1cc> O que o açaí disse para os filhos? </h3><p class="faq-text" data-v-023bc1cc> O último açaí fecha a porta. </p><button class="faq-toggle" data-v-023bc1cc><i class="fas fa-chevron-down" data-v-023bc1cc></i><i class="fas fa-times" data-v-023bc1cc></i></button></div></div>',3),A=[O];function _(a,t,c,e,s,o){return(0,n.uX)(),(0,n.CE)("body",null,A)}var j={name:"FaqView",methods:{toggleFAQs(){const a=document.querySelectorAll(".faq-toggle");a.forEach((a=>{a.addEventListener("click",(()=>{a.parentNode.classList.toggle("active")}))}))}},mounted(){this.toggleFAQs()}};const L=(0,o.A)(j,[["render",_],["__scopeId","data-v-023bc1cc"]]);var C=L;const E=[{path:"/",name:"home",component:g},{path:"/contador",name:"contador",component:F},{path:"/faq",name:"faq",component:C}],Q=(0,l.aE)({history:(0,l.Bt)(),routes:E});var T=Q;(0,e.Ef)(d).use(T).mount("#app")}},t={};function c(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return a[e].call(s.exports,s,s.exports,c),s.exports}c.m=a,function(){var a=[];c.O=function(t,e,n,s){if(!e){var o=1/0;for(l=0;l<a.length;l++){e=a[l][0],n=a[l][1],s=a[l][2];for(var r=!0,i=0;i<e.length;i++)(!1&s||o>=s)&&Object.keys(c.O).every((function(a){return c.O[a](e[i])}))?e.splice(i--,1):(r=!1,s<o&&(o=s));if(r){a.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=a.length;l>0&&a[l-1][2]>s;l--)a[l]=a[l-1];a[l]=[e,n,s]}}(),function(){c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,{a:t}),t}}(),function(){c.d=function(a,t){for(var e in t)c.o(t,e)&&!c.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})}}(),function(){c.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};c.O.j=function(t){return 0===a[t]};var t=function(t,e){var n,s,o=e[0],r=e[1],i=e[2],d=0;if(o.some((function(t){return 0!==a[t]}))){for(n in r)c.o(r,n)&&(c.m[n]=r[n]);if(i)var l=i(c)}for(t&&t(e);d<o.length;d++)s=o[d],c.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return c.O(l)},e=self["webpackChunkatividades_front"]=self["webpackChunkatividades_front"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=c.O(void 0,[504],(function(){return c(1003)}));e=c.O(e)})();
//# sourceMappingURL=app.11152c7e.js.map