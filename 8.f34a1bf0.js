/*! For license information please see 8.f34a1bf0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{107:function(e,t,n){"use strict";n.r(t);n(12);var r=n(0),o=n.n(r),a=n(119),i=n(109),l=n(46),c=n(120),s=n(1),u=n(110),f=n.n(u),p=n(111),d=n(118),y=n(112),h=n(113),m=n(99),b=n.n(m);function g({item:e,onItemClick:t,collapsible:n}){const{items:a,href:i,label:l,type:c}=e,[u,p]=Object(r.useState)(e.collapsed),[d,m]=Object(r.useState)(null);e.collapsed!==d&&(m(e.collapsed),p(e.collapsed));const b=Object(r.useCallback)(e=>{e.preventDefault(),p(e=>!e)});switch(c){case"category":return a.length>0&&o.a.createElement("li",{className:f()("menu__list-item",{"menu__list-item--collapsed":u}),key:l},o.a.createElement("a",{className:f()("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&!e.collapsed}),href:"#!",onClick:n?b:void 0},l),o.a.createElement("ul",{className:"menu__list"},a.map(e=>o.a.createElement(g,{key:e.label,item:e,onItemClick:t,collapsible:n}))));case"link":default:return o.a.createElement("li",{className:"menu__list-item",key:l},o.a.createElement(y.a,Object(s.a)({className:"menu__link",to:i},Object(h.a)(i)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),l))}}var v=function(e){const[t,n]=Object(r.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:a,logo:l={}}={}}}={}}=Object(i.a)(),c=Object(p.a)(l.src),{docsSidebars:s,path:u,sidebar:y,sidebarCollapsible:h}=e;if(Object(d.a)(t),!y)return null;const m=s[y];if(!m)throw new Error(`Cannot find the sidebar "${y}" in the sidebar config!`);return h&&m.forEach(e=>function e(t,n){const{items:r,href:o,type:a}=t;switch(a){case"category":{const o=r.map(t=>e(t,n)).filter(e=>e).length>0;return t.collapsed=!o,o}case"link":default:return o===n}}(e,u)),o.a.createElement("div",{className:b.a.sidebar},o.a.createElement("div",{className:b.a.sidebarLogo},null!=l&&o.a.createElement("img",{src:c,alt:l.alt}),null!=a&&o.a.createElement("strong",null,a)),o.a.createElement("div",{className:f()("menu","menu--responsive",b.a.menu,{"menu--show":t})},o.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{n(!t)}},t?o.a.createElement("span",{className:f()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement("ul",{className:"menu__list"},m.map(e=>o.a.createElement(g,{key:e.label,item:e,onItemClick:()=>{n(!1)},collapsible:h})))))},k={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},E={Prism:n(35).a,theme:k};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=/\r\n|\r|\n/,j=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},T=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},C=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=O({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=O({},n,{backgroundColor:null}),o};function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var _=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?C(e.theme,e.language):void 0;return t.themeDict=n})),w(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=O({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?O({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),w(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),w(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=O({},x(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?O({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,l=[],c=[l];i>-1;){for(;(a=r[i]++)<o[i];){var s=void 0,u=t[i],f=n[i][a];if("string"==typeof f?(u=i>0?u:["plain"],s=f):(u=T(u,f.type),f.alias&&(u=T(u,f.alias)),s=f.content),"string"==typeof s){var p=s.split(S),d=p.length;l.push({types:u,content:p[0]});for(var y=1;y<d;y++)j(l),c.push(l=[]),l.push({types:u,content:p[y]})}else i++,t.push(u),n.push(s),r.push(0),o.push(s.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return j(l),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),N=n(131),A=n.n(N),L=n(129),P=n.n(L),M=n(130),I=n.n(M),D=n(117),F=n(100),H=n.n(F);const R=/{([\d,-]+)}/;var $=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:a={}}}}=Object(i.a)(),[l,c]=Object(r.useState)(!1),[u,p]=Object(r.useState)(!1);Object(r.useEffect)(()=>{p(!0)},[]);const d=Object(r.useRef)(null),y=Object(r.useRef)(null);let h=[];const{isDarkTheme:m}=Object(D.a)(),b=a.theme||A.a,g=a.darkTheme||b,v=m?g:b;if(n&&R.test(n)){const e=n.match(R)[1];h=I.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return y.current&&(e=new P.a(y.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[y.current,d.current]);let k=t&&t.replace(/language-/,"");!k&&a.defaultLanguage&&(k=a.defaultLanguage);const w=()=>{window.getSelection().empty(),c(!0),setTimeout(()=>c(!1),2e3)};return o.a.createElement(_,Object(s.a)({},E,{key:u,theme:v,code:e.replace(/\n$/,""),language:k}),({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:a})=>o.a.createElement("pre",{className:f()(e,H.a.codeBlock)},o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:H.a.copyButton,onClick:w},l?"Copied":"Copy"),o.a.createElement("code",{ref:d,className:H.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return h.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(s.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(s.a)({key:t},a({token:e,key:t})))))}))))},q=(n(101),n(102)),B=n.n(q);var z=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:r=!1}={}}={}}={}}=Object(i.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:f()("anchor",{[B.a.enhancedAnchor]:!r}),id:t}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),n.children):o.a.createElement(e,n)},J=n(103),W=n.n(J),Y={code:e=>{const{children:t}=e;return"string"==typeof t?o.a.createElement($,e):t},a:e=>/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(y.a,e),pre:e=>o.a.createElement("div",Object(s.a)({className:W.a.mdxCodeBlock},e)),h1:z("h1"),h2:z("h2"),h3:z("h3"),h4:z("h4"),h5:z("h5"),h6:z("h6")},U=n(121),X=n(114),G=n(104),K=n.n(G);t.default=function(e){const{route:t,docsMetadata:n,location:r}=e,s=t.routes.find(e=>Object(X.b)(r.pathname,e))||{},{permalinkToSidebar:u,docsSidebars:f,version:p}=n,d=u[s.path],{siteConfig:{themeConfig:y={}}={},isClient:h}=Object(i.a)(),{sidebarCollapsible:m=!0}=y;return 0===Object.keys(s).length?o.a.createElement(U.default,e):o.a.createElement(c.a,{version:p,key:h},o.a.createElement("div",{className:K.a.docPage},d&&o.a.createElement("div",{className:K.a.docSidebarContainer},o.a.createElement(v,{docsSidebars:f,path:s.path,sidebar:d,sidebarCollapsible:m})),o.a.createElement("main",{className:K.a.docMainContainer},o.a.createElement(a.a,{components:Y},Object(l.a)(t.routes)))))}},129:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var a=0,i=r.length;a<i;a++)r[a].fn!==t&&r[a].fn._!==t&&o.push(r[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var i=a.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function a(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,a){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,a)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),s=n.n(c),u=n(2),f=n.n(u),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=y}]).default},e.exports=r()},130:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var a=[],i=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=i);for(var l=n;l!=o;l+=i)a.push(l);return a}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},131:function(e,t){e.exports={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}}}]);