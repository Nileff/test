!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=7)}([function(e,r){e.exports=require("react")},function(e,r,t){var n=t(2),o=t(3),i=t(4),c=t(6);e.exports=function(e,r){return n(e)||o(e,r)||i(e,r)||c()}},function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},function(e,r){e.exports=function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}}},function(e,r,t){var n=t(5);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),i=t(0),c=t.n(i),a=function(e){var r=e.ready,t=e.setReady,n=e.zipEndpoint,o=e.fileServiceUrl,i=e.onReceiveZip;return function(){r&&(t(!1),fetch(n.url,{method:n.method,mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n.data)}).then((function(e){return e.json()})).then((function(e){var r,n=e.id;r=setInterval(function(e){var r=e.fileServiceUrl,t=e.fileId,n=e.onReady;return function(){return fetch("".concat(r,"/files/").concat(t,"/"),{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(e){e.data.ready&&n(e)}))}}({fileServiceUrl:o,fileId:n,onReady:function(e){i(e),t(!0),clearInterval(r)}}),5e3)})).catch((function(){return t(!0)})))}};r.default=function(e){var r=e.className,t=e.style,n=e.children,u=e.zipEndpoint,f=e.fileServiceUrl,l=e.onReceiveZip,d=Object(i.useState)(!0),s=o()(d,2),p=s[0],y=s[1],v=a({ready:p,setReady:y,zipEndpoint:u,fileServiceUrl:f,onReceiveZip:l});return c.a.createElement("div",{className:r,style:t,onClick:v},n)}}]));