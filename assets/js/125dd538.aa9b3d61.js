"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:11},o="Error",l={unversionedId:"error",id:"version-2.0.0/error",title:"Error",description:"Definition",source:"@site/versioned_docs/version-2.0.0/error.md",sourceDirName:".",slug:"/error",permalink:"/2.0.0/error",draft:!1,tags:[],version:"2.0.0",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Data Variation Item",permalink:"/2.0.0/datavariation-item"},next:{title:"Generated test",permalink:"/2.0.0/generated-test"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Error",id:"actions-on-error",level:2},{value:"View Errors",id:"view-errors",level:3},{value:"Fix Errors",id:"fix-errors",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error"},"Error"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Errors in ",(0,a.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configurations")," or in the ",(0,a.kt)("a",{parentName:"p",href:"test-setting"},"Test Settings"),' are indicated by the "',(0,a.kt)("font",{color:"red"},(0,a.kt)("i",{class:"fas fa-circle-exclamation"})),'" icon. '),(0,a.kt)("p",null,"The cause of Errors can be different each time, but the result is always that a test cannot be executed."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"The descriptive error message for the Error.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Element"),(0,a.kt)("td",{parentName:"tr",align:null},"The element that the Error is associated with.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("p",null,"None, as Errors are generated by MTA."),(0,a.kt)("h2",{id:"actions-on-error"},"Actions on Error"),(0,a.kt)("h3",{id:"view-errors"},"View Errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Errors are always shown in red on the element that they are related to, like ",(0,a.kt)("a",{parentName:"li",href:"test-setting"},"Test Settings"),", a ",(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," or a ",(0,a.kt)("a",{parentName:"li",href:"Teststep"},"Teststep"),".")),(0,a.kt)("h3",{id:"fix-errors"},"Fix Errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Errors contain a message that describes how the Error should be fixed."),(0,a.kt)("li",{parentName:"ul"},"Errors related to a ",(0,a.kt)("a",{parentName:"li",href:"teststep"},"Teststep")," have a Solve button that will lead to the page where the Error can be fixed.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"teststep"},"Teststep")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," ")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated: 19 january 2023"))}c.isMDXComponent=!0}}]);