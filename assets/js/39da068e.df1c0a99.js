"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_class_name:"hidden"},o="Coverage listener",l={unversionedId:"maximize-coverage/coverage-listener",id:"maximize-coverage/coverage-listener",title:"Coverage listener",description:"This document describes how to use MTA to detect executed microflows while you are working in the pages of your Test Application.",source:"@site/additional/01-howtos/05-maximize-coverage/coverage-listener.md",sourceDirName:"05-maximize-coverage",slug:"/maximize-coverage/coverage-listener",permalink:"/additional/howtos/maximize-coverage/coverage-listener",draft:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Deal with a failed Test Run",permalink:"/additional/howtos/run-tests/deal-with-failed-testrun"},next:{title:"Design Microflow testing",permalink:"/additional/howtos/maximize-coverage/design-microflow"}},s={},c=[{value:"Feedback?",id:"feedback",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coverage-listener"},"Coverage listener"),(0,n.kt)("p",null,"This document describes how to use MTA to detect executed microflows while you are working in the pages of your Test ",(0,n.kt)("a",{parentName:"p",href:"../../../application"},"Application"),"."),(0,n.kt)("p",null,"It is possible to enable a so-called coverage listener on an ",(0,n.kt)("a",{parentName:"p",href:"../../../application-instance"},"Application Instance"),". You can use this to measure the code coverage of a test that is being done on the front-end of your app, either manually or automated. "),(0,n.kt)("p",null,"The steps are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"../../../test-case"},"Test Case")),(0,n.kt)("li",{parentName:"ul"},"In the Settings, set the ",(0,n.kt)("em",{parentName:"li"},"Execution User")," to 'MxAdmin' and ",(0,n.kt)("em",{parentName:"li"},"Apply Security"),' to "No"'),(0,n.kt)("li",{parentName:"ul"},"Also, set the ",(0,n.kt)("em",{parentName:"li"},"Execution time-out")," slightly higher than you expect your test to take (for example, 960 for 16 minutes)"),(0,n.kt)("li",{parentName:"ul"},"Save the Test Case Settings"),(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("a",{parentName:"li",href:"../../../Teststep/persist"},"Persist Teststep")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../../Teststep#edit-a-teststep"},"Edit the Teststep")),(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("em",{parentName:"li"},"Delay after execution")," to slightly lower than the value you entered for the Test Case ",(0,n.kt)("em",{parentName:"li"},"Execution time-out")," (for example, 950000 for 15 minutes, 50 seconds)"),(0,n.kt)("li",{parentName:"ul"},"Save the Teststep."),(0,n.kt)("li",{parentName:"ul"},"Execute this Test Case using the relevant ",(0,n.kt)("a",{parentName:"li",href:"../../../test-setting"},"Test Setting"),".")),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated October 2024"))}m.isMDXComponent=!0}}]);