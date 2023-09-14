!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@zxn2889/achieve-proxy")):"function"==typeof define&&define.amd?define(["@zxn2889/achieve-proxy"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).achieveProxy)}(this,(function(e){"use strict";function n(e){if(e.type===Fragment)return void e.children.forEach((e=>n(e)));const t=e._el.parentNode;t&&t.removeChild(e._el)}function t(e,n,t){if(/^on/.test(e)){let o=(n._evi||(n._evi={}))[e];if(t)if(o)o.value=t;else{o=n._evi[e]=e=>{if(e.timeStamp<o.attachTime)return!1;Array.isArray(o.value)?o.value.forEach((e=>e)):"[object Object]"===Object.prototype.toString.call(o.value)?console.warn("事件值要为函数"):o.value(e)},o.value=t,o.attachTime=performance.now();const r=e.slice(2).toLowerCase();n.addEventListener(r,o)}else o&&n.removeEventListener(type,o)}"class"===e?n.className=t:!function(e,n){return("INPUT"!==n.tagName||"form"!==e)&&e in n}(e,n)?n.setAttribute(e,t):"boolean"==typeof n[e]&&""===t?n[e]=!0:n[e]=t}const o=Symbol(),r=Symbol(),l=Symbol();const c=function(c){const{createElement:i,setTextContent:s,insert:f}=c;function u(c,d,y,h){c&&c.type!==d.type&&(n(c),c=null);const m=d.type;if("string"==typeof m)c?function(e,n){const o=n._el=e._el,r=e.props,l=n.props;for(const e in l)Object.hasOwnProperty.call(l,e)&&l[e]!==r[e]&&t(e,o,l[e]);p(e,n,o)}(c,d):function(e,n,o){const r=e._el=i(e.type),l=e.children;if(e.props)for(const n in e.props)t(n,r,e.props[n]);if("string"==typeof l)s(r,l);else if(Array.isArray(l))for(let e=0;e<l.length;e++)u(null,l[e],r);f(r,n,o)}(d,y,h);else if(m===r)if(c){const e=d._el=c._el;d.children!==c.children&&(e.nodeValue=d.children)}else{const e=d._el=document.createTextNode(d.children);f(e,y)}else m===l?c?p(c,d,y):d.children.forEach((e=>u(null,e,y))):m===o||("object"==typeof m?c?function(e,n,t,o){const r=n._component=e._component,{props:l}=r;if(function(e,n){const t=Object.keys(e),o=Object.keys(n);if(t!==o)return!0;for(let o=0;o<t;o++){if(e[o]!==n[o])return!0}return!1}(e.props,n.props)){const[e]=a(n.type.props,n.type);Object.keys(l).forEach((n=>{n in e?l[n]=e[n]:delete l[n]}))}}(c,d):function(n,t,o){const r=n.type,{data:l,props:c,render:i,beforeCreate:s,created:f,beforeMounte:p,mounted:d,beforeUpdate:y,updated:h,setup:m}=r,[b,v]=a(c,n.props),_=n.children||{};s&&s.call();const g={state:e.reactive(l()),props:e.shallowReactive(b),subTree:null,isMounted:!1,mounted:[]};n._component=g;let E,A=i;if(m){const e={attr:v,emit:(e,...n)=>function(e,n,t){const o=`on${e[0].toUpperCase()}${e.slice(1)}`;o in t?t[o](n):console.warn(`当前事件未定义，请查看事件名称 ${o} 是否正确`)}(e,n,g.props),slots:_},n=m(shallowReadOnly(g.props),e);"function"==typeof n?A=n:E=n}const T=new Proxy(g,{get(e,n){const{state:t,props:o}=e;return t&&n in t?t[n]:o&&n in o?o[n]:E&&n in E?E[n]:"$slots"===n?_:(console.warn("当前组件不存在该属性"),null)},set(e,n,t){const{state:o,props:r}=e;if(o&&n in o)o[n]=t;else if(r&&n in r)r[n]=t;else{if(!E||!(n in E))return console.warn("当前组件不存在该属性"),!1;E[n]=t}}});f&&f.call(T),e.effect((()=>{const e=A.call(T);g.isMounted?(y&&y.call(T),u(g.subTree,e,t,o),h&&h.call(T)):(p&&p.call(T),u(null,e,t,o),g.isMounted=!0,g.mounted&&g.mounted.forEach((e=>e(T)))),g.subTree=e}))}(d,y,h):"function"==typeof m&&(c||function(n,t,o){const r=n.type,l=n.type.options,c={props:e.shallowReactive(l),subTree:null,isMounted:!1};n._component=c,e.effect((()=>{const e=r(l);c.isMounted?u(c.subTree,e,t,o):(u(null,e,t,o),c.isMounted=!0),c.subTree=e}))}(d,y,h)))}function a(e,n){const t={},o={};return Object.keys(n).forEach((r=>{r in e||"/^on/".text(r)?t[r]=n[r]:(console.warn("当前定义的属性在组件内没有定义，存放至 attr"),o[r]=n[r])})),[t,o]}function p(e,t,o){"string"==typeof t.children?(Array.isArray(e.children)&&e.children.forEach((e=>n(e))),s(o,t.children)):Array.isArray(t.children)?Array.isArray(e.children)?function(e,t,o){const r=e.children,l=t.children;let c=0,i=null,s=null;for(let e=0;e<l.length&&(i=r[e],s=l[e],s.key===i.key);e++)u(i,s,o),c++;const a=r.length,p=l.length,y=Math.max(a,p);let h=a-1,m=p-1;for(let e=y;e>=0&&(i=r[h],s=l[m],s.key===i.key);e--)u(i,s,o),h--,m--;if(h<c&&m>=c)for(let e=c;e<=m;e++)u(null,l[c],o,d(c,l));if(m<c&&h>=c)for(let e=c;e<=h;e++)n(r[e]);const b=new Array(m-c+1).fill(-1),v={};for(let e=c;e<=m;e++)v[l[e].key]=e;for(let e=c;e<=h;e++){i=r[e];const t=v[i.key];s=l[t],t>-1?(u(i,s,o),b[t-c]=e):n(i)}const _=function(e){const n=e.slice(),t=[0];let o,r,l,c,i;const s=e.length;for(o=0;o<s;o++){const s=e[o];if(0!==s){if(r=t[t.length-1],e[r]<s){n[o]=r,t.push(o);continue}for(l=0,c=t.length-1;l<c;)i=(l+c)/2|0,e[t[i]]<s?l=i+1:c=i;s<e[t[l]]&&(l>0&&(n[o]=t[l-1]),t[l]=o)}}l=t.length,c=t[l-1];for(;l-- >0;)t[l]=c,c=n[c];return t}(b),g=b.includes(-1);if(_.length<b.length||g){let e=_.length-1,n=b.length-1;for(;n>=0;n--)if(-1===b[n]){const e=n+c;u(null,l[e],o,d(e,l))}else if(n!==_[e]){let e=n+c;const t=l[e];f(t._el,o,d(e,l))}else e--}}(e,t,o):(s(el,""),t.children.forEach((e=>u(null,e,o)))):Array.isArray(e.children)?e.children.forEach((e=>n(e))):s(o,null)}function d(e,n){const t=n[e+1];return t?t._el:null}return{render:function(e,t){e?u(t._o_vnode,e,t):t._o_vnode&&n(t._o_vnode),t._o_vnode=e},patch:u}}({createElement:function(e){return document.createElement(e)},setTextContent:function(e,n){e.textContent=n},insert:function(e,n,t=null){n.insertBefore(e,t)}});function i(e){return{type:"div",children:`我是小黑，我今年 ${e.count} 岁了`}}i.options={count:1};const s={type:i};c.render(s,document.getElementById("app"))}));