"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="Incorrect sequence number in data variation",o={unversionedId:"design-tests/incorrect-number-datavariation",id:"design-tests/incorrect-number-datavariation",title:"Incorrect sequence number in data variation",description:"Issue summary",source:"@site/additional/04-knownissues/03-design-tests/incorrect-number-datavariation.md",sourceDirName:"03-design-tests",slug:"/design-tests/incorrect-number-datavariation",permalink:"/additional/knownissues/design-tests/incorrect-number-datavariation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add teststep fails",permalink:"/additional/knownissues/design-tests/add-teststep-fails"},next:{title:"Popup Menu is cut off in Firefox",permalink:"/additional/knownissues/design-tests/menu-in-firefox"}},u={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Revision does not match",id:"revision-does-not-match",level:3}],l={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"incorrect-sequence-number-in-data-variation"},"Incorrect sequence number in data variation"),(0,a.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,a.kt)("p",null,"In some cases the sequence number of the Test Case shown in the data variation pages is not correct."),(0,a.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,a.kt)("h3",{id:"revision-does-not-match"},"Revision does not match"),(0,a.kt)("p",null,"When deleting a Test Case before a Test Case that has data variation, the sequence number of the Test Case in the data variation page is not recalculated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resolution")),(0,a.kt)("p",null,"There is no workaround other than deleting and re-entering the data variation. "),(0,a.kt)("p",null,"But, although the wrong sequence number is displayed in the data variation page, the actual sequence number of the Test Case still applies."),(0,a.kt)("p",null,"The issue is known and will be fixed in a future release of MTA."))}p.isMDXComponent=!0}}]);