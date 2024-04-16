"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="Reference guide",l={unversionedId:"reference-guide",id:"reference-guide",title:"Reference guide",description:"Here you can find the definitions for the most important terminology used in MTA.",source:"@site/docs/reference-guide.md",sourceDirName:".",slug:"/reference-guide",permalink:"/reference-guide",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MTA documentation",permalink:"/"},next:{title:"Public API",permalink:"/api"}},s={},p=[{value:"Contents",id:"contents",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-guide"},"Reference guide"),(0,a.kt)("p",null,"Here you can find the definitions for the most important terminology used in MTA."),(0,a.kt)("p",null,"By default, the reference guide is shown for the latest MTA version that is in production. "),(0,a.kt)("p",null,"It is possible to select a previous version on the top right of the page."),(0,a.kt)("h1",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"A page in the reference guide will always reference some element in MTA with that name.\nElements that occur in MTA, are usually accompanied by a ",(0,a.kt)("i",{class:"fal fa-question-circle"})," button, that links to the relevant page in the documentation."),(0,a.kt)("p",null,"Pages are structured in 4 segments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Definition: a description defining the element, why it exists and what it does."),(0,a.kt)("li",{parentName:"ul"},"Properties: the attributes of the element in the MTA database, limited by how they occur in the MTA user interface."),(0,a.kt)("li",{parentName:"ul"},"Business rules: rules as defined in the MTA application that apply to this element, excluding regular validation messages."),(0,a.kt)("li",{parentName:"ul"},"Actions: actions that can be done with this element.")),(0,a.kt)("p",null,"Actions are described with as few literal descriptions to page elements as possible. This means that sometimes buttons are visible on the page, but sometimes they are listed under a menu or overflow button."),(0,a.kt)("h2",{id:"contents"},"Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api"},"API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-instance"},"Application Instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/archive/"},"Archive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Assert/"},"Assert")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"construction-error"},"Construction Error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Item")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"feedback-message"},"Feedback Message")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"recording"},"Recording")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"snapshot"},"Snapshot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-setting"},"Test Setting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"Teststep/"},"Teststep"))))}m.isMDXComponent=!0}}]);