"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},s="Unit testing",l={unversionedId:"unittest",id:"unittest",title:"Unit testing",description:"Definition",source:"@site/additional/02-bestpractice/unittest.md",sourceDirName:".",slug:"/unittest",permalink:"/additional/bestpractice/unittest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test plan",permalink:"/additional/bestpractice/testplan"}},o={},c=[{value:"Definition",id:"definition",level:2},{value:"Characteristics",id:"characteristics",level:2},{value:"Structure",id:"structure",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A unit test in MTA is a test that executes a single microflow, and creates the necessary data in order to do so. "),(0,r.kt)("p",null,"Menditect advises to start with building Unit tests when introducing Menditect Test Automation, given it's characteristics."),(0,r.kt)("h2",{id:"characteristics"},"Characteristics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unit test is executed on a single Mendix App, in a single session by a single user."),(0,r.kt)("li",{parentName:"ul"},"A unit test is quick to build into MTA and thus a good way to get to know MTA."),(0,r.kt)("li",{parentName:"ul"},"A unit test is a direct prove that your code works."),(0,r.kt)("li",{parentName:"ul"},"A unit test provides immediate time savings."),(0,r.kt)("li",{parentName:"ul"},"If defects are found with unit tests, this is a signal that defects will also exist at the process level, and these defects can be solved faster than if they were found with a process test."),(0,r.kt)("li",{parentName:"ul"},"A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there.")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"Maintaining unit tests will have a different frequency than maintaining process tests. Therefore it is recommended to use below structure in MTA:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One test configuration per Mendix application, for all unit tests, and only for unit tests."),(0,r.kt)("li",{parentName:"ul"},"One test suite per Mendix model module.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The unit test structure",src:n(2046).Z,width:"1284",height:"519"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One test case per microflow to be tested."),(0,r.kt)("li",{parentName:"ul"},"Data variation on the test case level to reach higher test coverage for each microflow to be tested.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The unit test suite structure",src:n(1339).Z,width:"1676",height:"431"})),(0,r.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Have unit tests created, executed and maintained by ",(0,r.kt)("strong",{parentName:"li"},"the same Mendix developer")," that created the microflow."),(0,r.kt)("li",{parentName:"ul"},"Start building unit tests of ",(0,r.kt)("strong",{parentName:"li"},"validation flows, rules and calculation microflows"),"."),(0,r.kt)("li",{parentName:"ul"},"Build a unit test ",(0,r.kt)("strong",{parentName:"li"},"for every defect found"),"."),(0,r.kt)("li",{parentName:"ul"},"During product refinement, determine whether a feature is ",(0,r.kt)("strong",{parentName:"li"},"unit testable"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test without security")," on the ",(0,r.kt)("a",{parentName:"li",href:"../../test-case#properties"},"Test Case"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Test using rollback")," on the ",(0,r.kt)("a",{parentName:"li",href:"../../test-case#properties"},"Test Case"),"."),(0,r.kt)("li",{parentName:"ul"},"Use MTA's ",(0,r.kt)("strong",{parentName:"li"},"test generation by microflow")," feature as a starting point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prevent reliance on the database.")," Do not retrieve objects from database, and do not commit objects to database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Include asserts")," to have MTA check the results automatically instead of manually inspecting them. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use datavariation on relevant attributes"),", to achieve higher test coverage. ")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 1 March 2024"))}d.isMDXComponent=!0},2046:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bp_ut_01-a361bb346ac128ec3e9209ab28a101cb.png"},1339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bp_ut_02-3f6a9f2f6bb14b0789fdc4ca6db886a1.png"}}]);