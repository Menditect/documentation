"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,k=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:14},s="Feedback Message",o={unversionedId:"feedback-message",id:"feedback-message",title:"Feedback Message",description:"Definition",source:"@site/docs/feedback-message.md",sourceDirName:".",slug:"/feedback-message",permalink:"/feedback-message",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Error",permalink:"/error"},next:{title:"Generated test",permalink:"/generated-test"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Feedback Message",id:"actions-on-feedback-message",level:2},{value:"View Feedback Messages",id:"view-feedback-messages",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-message"},"Feedback Message"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Feedback Message occurs in a ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),' a result of "Validation feedback" actions in Microflows that are executed. '),(0,r.kt)("p",null,"Feedback Messages in MTA are indicated by the ",(0,r.kt)("i",{class:"fal fa-message-check"})," icon."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"The message text.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("p",null,"None."),(0,r.kt)("h2",{id:"actions-on-feedback-message"},"Actions on Feedback Message"),(0,r.kt)("h3",{id:"view-feedback-messages"},"View Feedback Messages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run"),"."),(0,r.kt)("li",{parentName:"ul"},'Open the Test Suite Run by clicking on "',(0,r.kt)("i",{class:"fal fa-eye"}),' Results".'),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fal fa-message-check"})," icon on the Test Case, which indicates that there were Validation feedback messages."),(0,r.kt)("li",{parentName:"ul"},'Click "Show validation feedback messages".')),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 22 November 2023"))}d.isMDXComponent=!0}}]);