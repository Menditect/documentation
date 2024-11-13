"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Prepare for using MTA for the first time",p={unversionedId:"configure-mta/prepare-for-using-mta",id:"configure-mta/prepare-for-using-mta",title:"Prepare for using MTA for the first time",description:"Purpose",source:"@site/additional/01-howtos/02-configure-mta/prepare-for-using-mta.md",sourceDirName:"02-configure-mta",slug:"/configure-mta/prepare-for-using-mta",permalink:"/additional/howtos/configure-mta/prepare-for-using-mta",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Accounts",permalink:"/additional/howtos/configure-mta/manage-accounts"},next:{title:"Access Mendix model",permalink:"/additional/howtos/configure-mta/access-mendix-model"}},c={},s=[{value:"Purpose",id:"purpose",level:2},{value:"1. Import the MTA Plugin module",id:"1-import-the-mta-plugin-module",level:2},{value:"2. Enable microflow testing for page calls",id:"2-enable-microflow-testing-for-page-calls",level:2},{value:"3. Create an Access Token for your Mendix account",id:"3-create-an-access-token-for-your-mendix-account",level:2},{value:"Feedback?",id:"feedback",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-for-using-mta-for-the-first-time"},"Prepare for using MTA for the first time"),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This document describes step by step which actions need to be performed whenever MTA is going to be used for the first time."),(0,o.kt)("p",null,"This can be useful to prepare for a first time implementation, a deep dive, or an on-premise implementation."),(0,o.kt)("h2",{id:"1-import-the-mta-plugin-module"},"1. Import the MTA Plugin module"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed. ")),(0,o.kt)("p",null,"Follow the steps described ",(0,o.kt)("a",{parentName:"p",href:"../connect-mta/import-plugin"},"here")," to complete this action."),(0,o.kt)("h2",{id:"2-enable-microflow-testing-for-page-calls"},"2. Enable microflow testing for page calls"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed.  ")),(0,o.kt)("p",null,"Follow the steps described ",(0,o.kt)("a",{parentName:"p",href:"prepare-mendix-project"},"here")," to complete this action."),(0,o.kt)("h2",{id:"3-create-an-access-token-for-your-mendix-account"},"3. Create an Access Token for your Mendix account"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This action needs to be performed by each Mendix developer who wishes to test their Mendix Apps in MTA.")),(0,o.kt)("p",null,"Follow the steps described ",(0,o.kt)("a",{parentName:"p",href:"access-mendix-model"},"here")," to complete this action."),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated 27 march 2023"))}m.isMDXComponent=!0}}]);