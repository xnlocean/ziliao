!function(e){function r(r){for(var t,s,u=r[0],a=r[1],c=r[2],p=0,v=[];p<u.length;p++)s=u[p],o[s]&&v.push(o[s][0]),o[s]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(l&&l(r);v.length;)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,r=0;r<i.length;r++){for(var n=i[r],t=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(t=!1)}t&&(i.splice(r--,1),e=s(s.s=n[0]))}return e}var t={},o={4:0},i=[];function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var r=[],n=o[e];if(0!==n)if(n)r.push(n[2]);else{var t=new Promise(function(r,t){n=o[e]=[r,t]});r.push(n[2]=t);var i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=function(e){return s.p+"js/"+({}[e]||e)+"."+{1:"20fcf69a",2:"2f21ea4b",3:"b819fde6"}[e]+".js"}(e);var a=setTimeout(function(){c({type:"timeout",target:u})},12e4);function c(r){u.onerror=u.onload=null,clearTimeout(a);var n=o[e];if(0!==n){if(n){var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src,s=new Error("Loading chunk "+e+" failed.\n("+t+": "+i+")");s.type=t,s.request=i,n[1](s)}o[e]=void 0}}u.onerror=u.onload=c,i.appendChild(u)}return Promise.all(r)},s.m=e,s.c=t,s.d=function(e,r,n){s.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=r,u=u.slice();for(var c=0;c<u.length;c++)r(u[c]);var l=a;i.push([0,0]),n()}({"./src/main.js":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/vue/dist/vue.js"),o=n.n(t),i=function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)};i._withStripped=!0;var s={name:"APP"},u=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=Object(u.a)(s,i,[],!1,null,null,null);a.options.__file="src\\App.vue";var c=a.exports,l=n("./src/router/index.js");l.a.beforeEach((e,r,n)=>{"/"===e.path?n({path:"/login"}):n()}),l.a.afterEach(()=>{console.log(1)}),new o.a({el:"#app",router:l.a,template:"<App/>",components:{App:c}})},"./src/router/_import_production.js":function(e,r,n){e.exports=(e=>()=>n("./src/views lazy recursive ^\\.\\/.*\\.vue$")("./"+e+".vue"))},"./src/router/index.js":function(e,r,n){"use strict";(function(e){var t=n("./node_modules/vue/dist/vue.js"),o=n.n(t),i=n("./node_modules/vue-router/dist/vue-router.esm.js");const s=n("./src/router/_import_production.js");o.a.use(i.a);const u=[{path:"/login",components:s("go/index")}];r.a=new i.a({base:e,routes:u})}).call(this,"/")},"./src/views lazy recursive ^\\.\\/.*\\.vue$":function(e,r,n){var t={"./go/index.vue":["./src/views/go/index.vue",3],"./login/components/canvas/index.vue":["./src/views/login/components/canvas/index.vue",0,2],"./login/index.vue":["./src/views/login/index.vue",0,1]};function o(e){var r=t[e];return r?Promise.all(r.slice(1).map(n.e)).then(function(){return n(r[0])}):Promise.resolve().then(function(){var r=new Error('Cannot find module "'+e+'".');throw r.code="MODULE_NOT_FOUND",r})}o.keys=function(){return Object.keys(t)},o.id="./src/views lazy recursive ^\\.\\/.*\\.vue$",e.exports=o},0:function(e,r,n){n("./node_modules/babel-polyfill/lib/index.js"),e.exports=n("./src/main.js")}});