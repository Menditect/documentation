"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const a={},i="Assert",o={unversionedId:"Assert/index",id:"Assert/index",title:"Assert",description:"Definition",source:"@site/docs/Assert/index.md",sourceDirName:"Assert",slug:"/Assert/",permalink:"/Assert/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Revision",permalink:"/application-revision"},next:{title:"Assert on Attribute",permalink:"/Assert/assert-attribute"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions on Assert",id:"actions-on-assert",level:2},{value:"View Teststeps that have Asserts",id:"view-teststeps-that-have-asserts",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assert"},"Assert"),(0,s.kt)("h2",{id:"definition"},"Definition"),(0,s.kt)("p",null,"An Assert is a claim that a certain fact has to be true. It is defined on the ",(0,s.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," level to check during test execution, if a certain output matches a given value."),(0,s.kt)("p",null,"Each Assert is evaluated after the execution of a Teststep. A Teststep execution fails when the evaluated value does not match to the defined expectation. "),(0,s.kt)("p",null,"Read more about dealing with failed ",(0,s.kt)("a",{parentName:"p",href:"test-run"},"Test Runs")," in the How To section."),(0,s.kt)("p",null,"There are three types of Asserts, that are described in detail in separate pages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"Assert/assert-attribute"},"Assert on Attribute")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"Assert/assert-microflow-output"},"Assert on Microflow output")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"Assert/assert-object-count"},"Assert on Object count"))),(0,s.kt)("h2",{id:"actions-on-assert"},"Actions on Assert"),(0,s.kt)("h3",{id:"view-teststeps-that-have-asserts"},"View Teststeps that have Asserts"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All Teststeps in a ",(0,s.kt)("a",{parentName:"li",href:"../test-case"},"Test Case"),' with one or more Assert, are marked with "',(0,s.kt)("i",{class:"fas fa-ballot-check"}),'" in the list of Teststeps.')))}u.isMDXComponent=!0}}]);