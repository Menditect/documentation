"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Design Microflow testing",s={unversionedId:"howtos/design-microflow",id:"howtos/design-microflow",title:"Design Microflow testing",description:"How to prepare for testing microflows is a strategy that needs to be considered seperately. A single microflow can be regarded as a unit, a process or can be used for regression testing. More important to consider when designing tests is the amount of different possible execution paths or outcomes that exist in the microflow. This amount can grow rather quickly.",source:"@site/additional/01-howtos/design-microflow.md",sourceDirName:"01-howtos",slug:"/howtos/design-microflow",permalink:"/additional/howtos/design-microflow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deal with a failed Test Run",permalink:"/additional/howtos/deal-with-failed-testrun"},next:{title:"Import plugin",permalink:"/additional/howtos/import-plugin"}},l={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-microflow-testing"},"Design Microflow testing"),(0,o.kt)("p",null,"How to prepare for testing microflows is a strategy that needs to be considered seperately. A single microflow can be regarded as a unit, a process or can be used for regression testing. More important to consider when designing tests is the amount of different possible execution paths or outcomes that exist in the microflow. This amount can grow rather quickly.  "),(0,o.kt)("p",null,"An example to illustrate: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microflow ACT_CreateOrder takes 2 input parameters; ",(0,o.kt)("br",null)," - a Product object (with mandatory price and name attributes)",(0,o.kt)("br",null)," - a boolean HasDiscount"),(0,o.kt)("li",{parentName:"ul"},"The output of the microflow is an Order object. ")),(0,o.kt)("p",null,"Given these parameters there are already 10 test variations to consider:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scenarios",src:r(8599).Z,width:"600",height:"396"})),(0,o.kt)("p",null,"To achieve a 100% test coverage on this microflow at least 10 tests are needed, and even this is only considering data; without defining any expected error messages that should or should not occur. "),(0,o.kt)("p",null,"As part of the test strategy, ",(0,o.kt)("strong",{parentName:"p"},"define the maximum number of variations")," that are acceptable to achieve a 100% test coverage. Furthermore, define a strategy for the situation when exceeding this amount. What should the tester base their decisions on which scenarios need to be covered? Consider the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Happy path (at least these should be covered)"),(0,o.kt)("li",{parentName:"ul"},"Probability  (more probable scenarios first)"),(0,o.kt)("li",{parentName:"ul"},"Risk (high risk scenarios first)"),(0,o.kt)("li",{parentName:"ul"},"Impact (high impact scenarios first)")))}p.isMDXComponent=!0},8599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scenarios-473f6c3941ead2c4a4b946e0b7acf6ae.png"}}]);