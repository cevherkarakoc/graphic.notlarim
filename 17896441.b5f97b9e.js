(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a(78),i=a(22),o=a(83),s=a(81);var m=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(80);var u=function(){const{siteConfig:{title:e}}=Object(i.default)(),{pluginId:t}=Object(d.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(c.useDocsPreferredVersion)(t),n=Object(d.useActiveVersion)(t),{latestDocSuggestion:r,latestVersionSuggestion:o}=Object(d.useDocVersionSuggestions)(t);if(!o)return l.a.createElement(l.a.Fragment,null);const m=null!=r?r:(u=o).docs.find((e=>e.id===u.mainDocId));var u;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:m.path,onClick:()=>a(o.name)},"latest version"))," ","(",o.label,")."))},E=a(79);var g=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!c;){const e=i[a],{href:o}=e,s=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},v=a(64),p=a.n(v);const f="table-of-contents__link";function b({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:f,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(b,{isChild:!0,toc:e.children}))))):null}var h=function({toc:e}){return g(f,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(E.a)(p.a.tableOfContents,"thin-scrollbar")},l.a.createElement(b,{toc:e}))},N=a(3),_=a(65),O=a.n(_);var w=({className:e,...t})=>l.a.createElement("svg",Object(N.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(E.a)(O.a.iconEdit,e)},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),j=a(66),k=a.n(j);t.default=function(e){const{siteConfig:t}=Object(i.default)(),{url:a}=t,{content:n}=e,{metadata:s,frontMatter:{image:g,keywords:v,hide_title:p,hide_table_of_contents:f}}=n,{description:b,title:N,permalink:_,editUrl:O,lastUpdatedAt:j,lastUpdatedBy:y}=s,{pluginId:C}=Object(d.useActivePlugin)({failfast:!0}),x=Object(d.useVersions)(C),L=Object(d.useActiveVersion)(C),I=x.length>1,A=Object(c.useTitleFormatter)(N),S=Object(o.a)(g,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),v&&v.length&&l.a.createElement("meta",{name:"keywords",content:v.join(",")}),g&&l.a.createElement("meta",{property:"og:image",content:S}),g&&l.a.createElement("meta",{name:"twitter:image",content:S}),g&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${N}`}),_&&l.a.createElement("meta",{property:"og:url",content:a+_}),_&&l.a.createElement("link",{rel:"canonical",href:a+_})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(E.a)("col",{[k.a.docItemCol]:!f})},l.a.createElement(u,null),l.a.createElement("div",{className:k.a.docItemContainer},l.a.createElement("article",null,I&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!p&&l.a.createElement("header",null,l.a.createElement("h1",{className:k.a.docTitle},N)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(O||j||y)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},O&&l.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(w,null),"Edit this page")),(j||y)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",j&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*j).toISOString(),className:k.a.docLastUpdatedAt},new Date(1e3*j).toLocaleDateString()),y&&" "),y&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,y)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:s})))),!f&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(h,{toc:n.toc}))))}}}]);