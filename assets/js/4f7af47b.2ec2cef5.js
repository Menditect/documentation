"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Design Microflow testing",s={unversionedId:"maximize-coverage/design-microflow",id:"maximize-coverage/design-microflow",title:"Design Microflow testing",description:"How to prepare for testing microflows is a strategy that needs to be considered seperately. A single microflow can be regarded as a unit, a process or can be used for regression testing. More important to consider when designing tests is the amount of different possible execution paths or outcomes that exist in the microflow. This amount can grow rather quickly.",source:"@site/additional/01-howtos/05-maximize-coverage/design-microflow.md",sourceDirName:"05-maximize-coverage",slug:"/maximize-coverage/design-microflow",permalink:"/additional/howtos/maximize-coverage/design-microflow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coverage listener",permalink:"/additional/howtos/maximize-coverage/coverage-listener"},next:{title:"Optimize Coverage Goals",permalink:"/additional/howtos/maximize-coverage/optimize-coverage-goals"}},c={},l=[{value:"Feedback?",id:"feedback",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-microflow-testing"},"Design Microflow testing"),(0,o.kt)("p",null,"How to prepare for testing microflows is a strategy that needs to be considered seperately. A single microflow can be regarded as a unit, a process or can be used for regression testing. More important to consider when designing tests is the amount of different possible execution paths or outcomes that exist in the microflow. This amount can grow rather quickly.  "),(0,o.kt)("p",null,"An example to illustrate: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microflow ACT_CreateOrder takes 2 input parameters; ",(0,o.kt)("br",null)," - a Product object (with mandatory price and name attributes)",(0,o.kt)("br",null)," - a boolean HasDiscount"),(0,o.kt)("li",{parentName:"ul"},"The output of the microflow is an Order object. ")),(0,o.kt)("p",null,"Given these parameters there are already 10 test variations to consider:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scenarios",src:r(8599).Z,width:"600",height:"396"})),(0,o.kt)("p",null,"To achieve a 100% test coverage on this microflow at least 10 tests are needed, and even this is only considering data; without defining any expected error messages that should or should not occur. "),(0,o.kt)("p",null,"As part of the test strategy, ",(0,o.kt)("strong",{parentName:"p"},"define the maximum number of variations")," that are acceptable to achieve a 100% test coverage. Furthermore, define a strategy for the situation when exceeding this amount. What should the tester base their decisions on which scenarios need to be covered? Consider the following elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Happy path (at least these should be covered)"),(0,o.kt)("li",{parentName:"ul"},"Probability  (more probable scenarios first)"),(0,o.kt)("li",{parentName:"ul"},"Risk (high risk scenarios first)"),(0,o.kt)("li",{parentName:"ul"},"Impact (high impact scenarios first)")),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated 9 April 2024"))}m.isMDXComponent=!0},8599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scenarios-473f6c3941ead2c4a4b946e0b7acf6ae.png"}}]);