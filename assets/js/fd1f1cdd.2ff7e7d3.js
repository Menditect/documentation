"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),b=o,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||s;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={},i="Websocket error message",a={unversionedId:"websocket-error-message",id:"websocket-error-message",title:"Websocket error message",description:"Issue summary",source:"@site/additional/04-knownissues/websocket-error-message.md",sourceDirName:".",slug:"/websocket-error-message",permalink:"/additional/knownissues/websocket-error-message",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teststeps are not correctly numbered",permalink:"/additional/knownissues/teststepnumbering"},next:{title:"Websocket keeps reconnecting",permalink:"/additional/knownissues/websocket-keeps-reconnecting"}},c={},l=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket-error-message"},"Websocket error message"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"While running a Mendix Application locally on a computer from Mendix Studio Pro it sometimes fails to connect to MTA. Additionally, when trying to connect to MTA using the MTA Plugin, an error message about a Websocket connection keeps appearing in the Console."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("p",null,"The MTA Plugin uses a websocket connection to connect to MTA:",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/websockets-in-runtime/"},"https://docs.mendix.com/refguide/websockets-in-runtime/")),(0,o.kt)("p",null,"On some business networks, such connections are blocked by network settings or firewall settings that disallow the websocket (ws or wss) protocol.\nThe connection to MTA is created on port 443; please make sure this port allows access for the websocket protocol."),(0,o.kt)("p",null,"One way to test if the websocket connection is actively being blocked on the business network, is to try to connect to MTA from outside the business network, such as from home."),(0,o.kt)("p",null,"Please contact your network administrator if this issue persists."))}p.isMDXComponent=!0}}]);