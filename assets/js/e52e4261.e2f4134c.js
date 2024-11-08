"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:10},a="Construction Error",s={unversionedId:"construction-error",id:"version-2.8.0/construction-error",title:"Construction Error",description:"Definition",source:"@site/versioned_docs/version-2.8.0/construction-error.md",sourceDirName:".",slug:"/construction-error",permalink:"/2.8.0/construction-error",draft:!1,tags:[],version:"2.8.0",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Assert on Validation feedback",permalink:"/2.8.0/Assert/assert-validation-feedback"},next:{title:"Coverage Calculation",permalink:"/2.8.0/coverage-calculation"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Construction Errors",id:"actions-on-construction-errors",level:2},{value:"View Construction Errors",id:"view-construction-errors",level:3},{value:"Fix Construction Errors",id:"fix-construction-errors",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"construction-error"},"Construction Error"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Construction Errors inside a ",(0,o.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," or in the ",(0,o.kt)("a",{parentName:"p",href:"test-setting"},"Test Settings"),' are indicated by the "',(0,o.kt)("font",{color:"#d30d2e"},(0,o.kt)("i",{class:"fas fa-circle-exclamation"})),'" icon. '),(0,o.kt)("p",null,"The cause of Construction Errors can be different each time, but the result is always that a test cannot be executed."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Message"),(0,o.kt)("td",{parentName:"tr",align:null},"The descriptive error message for the Construction Error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Element"),(0,o.kt)("td",{parentName:"tr",align:null},"The element that the Construction Error is associated with.")))),(0,o.kt)("h2",{id:"business-rules"},"Business rules"),(0,o.kt)("p",null,"None, as a Construction Error is generated by MTA. "),(0,o.kt)("h2",{id:"actions-on-construction-errors"},"Actions on Construction Errors"),(0,o.kt)("h3",{id:"view-construction-errors"},"View Construction Errors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to the relevant ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),"."),(0,o.kt)("li",{parentName:"ul"},'Navigate to "',(0,o.kt)("font",{color:"#d30d2e"},(0,o.kt)("i",{class:"fas fa-circle-exclamation"}),"  Construction Errors"),'".'),(0,o.kt)("li",{parentName:"ul"},"A list of Construction Errors is shown including the element that it relates to.")),(0,o.kt)("h3",{id:"fix-construction-errors"},"Fix Construction Errors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Construction Error contains a message that describes how it should be fixed."),(0,o.kt)("li",{parentName:"ul"},"A Construction Error related to a ",(0,o.kt)("a",{parentName:"li",href:"teststep"},"Teststep")," has a Solve button that will lead to the page where it can be fixed.")),(0,o.kt)("h2",{id:"related-topics"},"Related topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"teststep"},"Teststep")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," ")),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated: 6 December 2023"))}d.isMDXComponent=!0}}]);