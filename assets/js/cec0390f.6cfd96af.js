"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7058],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2220:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={},l="Prepare for using MTA for first time use",s={unversionedId:"howtos/prepare-for-using-mta",id:"howtos/prepare-for-using-mta",title:"Prepare for using MTA for first time use",description:"Purpose",source:"@site/docs/howtos/prepare-for-using-mta.md",sourceDirName:"howtos",slug:"/howtos/prepare-for-using-mta",permalink:"/howtos/prepare-for-using-mta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import MTA Plugin",permalink:"/howtos/import-plugin"},next:{title:"Prepare Mendix project",permalink:"/howtos/prepare-mendix-project"}},u={},c=[{value:"Purpose",id:"purpose",level:2},{value:"1. Import the MTA Plugin module",id:"1-import-the-mta-plugin-module",level:2},{value:"2. Create an MTA Plugin User",id:"2-create-an-mta-plugin-user",level:2},{value:"3. Enable microflow testing for page calls",id:"3-enable-microflow-testing-for-page-calls",level:2},{value:"4. Create an API key for your Mendix account",id:"4-create-an-api-key-for-your-mendix-account",level:2},{value:"Feedback?",id:"feedback",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prepare-for-using-mta-for-first-time-use"},"Prepare for using MTA for first time use"),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"This document describes step by step which actions need to be performed whenever MTA is going to be used for the first time."),(0,i.kt)("p",null,"This can be useful to prepare for a first time implementation, a deep dive, or an on-premise implementation."),(0,i.kt)("h2",{id:"1-import-the-mta-plugin-module"},"1. Import the MTA Plugin module"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed. ")),(0,i.kt)("p",null,"Follow the steps described ",(0,i.kt)("a",{parentName:"p",href:"import-plugin"},"here")," to complete this action."),(0,i.kt)("h2",{id:"2-create-an-mta-plugin-user"},"2. Create an MTA Plugin User"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For each individual environment and for each Mendix App to be tested in MTA, this action needs to be performed. ")),(0,i.kt)("p",null,"Open the environment that is going to be used as Test application, and login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with only the role 'MTAPluginUser'. Give the user a name, and note the Username and Password for later."),(0,i.kt)("h2",{id:"3-enable-microflow-testing-for-page-calls"},"3. Enable microflow testing for page calls"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For each Mendix App to be tested in MTA, this action needs to be performed.  ")),(0,i.kt)("p",null,"Follow the steps described ",(0,i.kt)("a",{parentName:"p",href:"prepare-mendix-project"},"here")," to complete this action."),(0,i.kt)("h2",{id:"4-create-an-api-key-for-your-mendix-account"},"4. Create an API key for your Mendix account"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This action needs to be performed by each Mendix developer who wishes to test their Mendix Apps in MTA.")),(0,i.kt)("p",null,"An API key needs to be created to make communication possible with MTA and the Mendix platform. Make sure to store the API key in a password manager after creation.\nFollow the steps described on the Mendix documentation site to complete this action:\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key"},"https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key")),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 27 may 2022"))}d.isMDXComponent=!0}}]);