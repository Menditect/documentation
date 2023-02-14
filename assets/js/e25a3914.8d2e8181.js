"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i="Prepare Mendix project",l={unversionedId:"howtos/prepare-mendix-project",id:"howtos/prepare-mendix-project",title:"Prepare Mendix project",description:"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page.",source:"@site/additional/01-howtos/prepare-mendix-project.md",sourceDirName:"01-howtos",slug:"/howtos/prepare-mendix-project",permalink:"/additional/howtos/prepare-mendix-project",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prepare for using MTA for the first time",permalink:"/additional/howtos/prepare-for-using-mta"},next:{title:"Record and complete teststeps",permalink:"/additional/howtos/record-user-actions"}},p={},s=[{value:"Feedback?",id:"feedback",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prepare-mendix-project"},"Prepare Mendix project"),(0,n.kt)("p",null,"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page."),(0,n.kt)("p",null,"To find all microflows that have a \u201cshow page\u201d activity, open Mendix Studio Pro, go to Edit\u2192 Find Advanced and select the following options:  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Find microflows",src:r(3951).Z,width:"454",height:"195"})),(0,n.kt)("p",null,"Choose an optional layout that is used in the project and Mendix will give you a list of \u201cfind results\u201d. Filter the find results by only showing results of the type \u201cmicroflows\u201d. Check all the microflows of the \u201cfind results\u201d and add return types for microflows you want to include in testing. Repeat this for all page layouts in use. This process will save you a lot of time if completed before configuring MTA."),(0,n.kt)("p",null,"A few notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only follow these steps for the microflows that you actually want to test"),(0,n.kt)("li",{parentName:"ul"},"If pages are called without an input object, no changes are needed")),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated 21 april 2022"))}u.isMDXComponent=!0},3951:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/find-microflows-9ae0f3a9d9d1763abe6df60449326d26.png"}}]);