if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const o=e=>i(e,n),r={module:{uri:n},exports:c,require:o};s[n]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1c82256b9c64370a79fac25818595847"},{url:"/_next/static/chunks/173-61fb5956e8b0446c.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/23-09d7b437b8948f9e.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/231-c6c910d5ec889a8f.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/670-56a6e410a4fa6400.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/_not-found/page-fceab1079f9c6f1d.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/analytics/page-879df1b833d1adb7.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/details/page-8fd806332cf418f8.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/jobs/%5Bid%5D/page-375b78f5252c2d61.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/layout-fa71564d7df372e6.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/app/page-d008a5cd290b4491.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/fd9d1056-e4a831c32836bc26.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/main-app-16b7b473008dc760.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/main-cbd74d5667e5e42d.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-bbf38ab73833ad8f.js",revision:"kgob82gKOtPom0Pzo4xLI"},{url:"/_next/static/css/e203afc47637ceac.css",revision:"e203afc47637ceac"},{url:"/_next/static/kgob82gKOtPom0Pzo4xLI/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/kgob82gKOtPom0Pzo4xLI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/assets/icons/brief-filled.svg",revision:"e212ba4096e38af442b1e39f663835c1"},{url:"/assets/icons/brief-outline.svg",revision:"b00b4f92279eb812700b6c153c2d6422"},{url:"/assets/icons/graph-filled.svg",revision:"49e867c6e79f73da42ba5d26e9d902df"},{url:"/assets/icons/graph-outline.svg",revision:"1ec76284be0aa184565734175b8ff4e7"},{url:"/assets/icons/home-filled.svg",revision:"87770d6e8827bef5c98df1a5d2e1ef45"},{url:"/assets/icons/home-outline.svg",revision:"629f28c187bdf7e7349dbefa825c89ed"},{url:"/assets/icons/mail.svg",revision:"3ee337594667f5ed58dc4d3db11e53fd"},{url:"/assets/icons/menu.svg",revision:"9962a16a74260576a095d4ef01d38966"},{url:"/assets/icons/notify-outline.svg",revision:"4cdba1e216a854a736785286f51f3988"},{url:"/assets/icons/scope-filled.svg",revision:"131ea25c95ad1a8973b4d388252c598e"},{url:"/assets/icons/scope-outline.svg",revision:"7ccb72a3d7f1bbc638135332ae09ede3"},{url:"/assets/icons/search.svg",revision:"e124860b6ecff0f93c0b2f9e68a43883"},{url:"/assets/icons/settings-filled.svg",revision:"907ef75f4259caea6a11906c077c5655"},{url:"/assets/icons/settings-outline.svg",revision:"80d59055e7c68717dd5218a5c8d3d82b"},{url:"/assets/icons/support-filled.svg",revision:"d114fedb7e4f581fe55d034d5ffd8806"},{url:"/assets/icons/support-outline.svg",revision:"601962f4ed0a5193646d8e7994d3cda3"},{url:"/assets/images/jobbo-logo.jpg",revision:"275cdb4563f98e9f6d989a90c0fb4a10"},{url:"/manifest.json",revision:"5501bef54056c73bfd58d1b0ec4d4464"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
