"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},s="Microflow missing from list",a={unversionedId:"design-tests/microflow-missing",id:"design-tests/microflow-missing",title:"Microflow missing from list",description:"Issue summary",source:"@site/additional/04-knownissues/03-design-tests/microflow-missing.md",sourceDirName:"03-design-tests",slug:"/design-tests/microflow-missing",permalink:"/additional/knownissues/design-tests/microflow-missing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow list covers Close button",permalink:"/additional/knownissues/design-tests/microflow-list-covers-close-button"},next:{title:"Nothing happens",permalink:"/additional/knownissues/design-tests/nothing-happens"}},l={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Revision does not match",id:"revision-does-not-match",level:3},{value:"Hidden microflow",id:"hidden-microflow",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microflow-missing-from-list"},"Microflow missing from list"),(0,r.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,r.kt)("p",null,"In some cases a Microflow may not appear in the list of microflows when you add a Microflow Teststep or are Generating a Microflow test."),(0,r.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,r.kt)("h3",{id:"revision-does-not-match"},"Revision does not match"),(0,r.kt)("p",null,"One reason could be, that the revisions between MTA and the test application don't match. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resolution")),(0,r.kt)("p",null,"Commit your changes if you are working in Studio Pro, and ",(0,r.kt)("a",{parentName:"p",href:"../../../application-revision#change-the-application-revision-for-a-test-configuration"},"Update the revision that MTA uses")," for the Test Configuration."),(0,r.kt)("h3",{id:"hidden-microflow"},"Hidden microflow"),(0,r.kt)("p",null,"Another reason could be, that the Microflow is not included when downloading the model from Mendix. Mendix will not include a Microflow when it's implementation is hidden or if the Microflow is part of a hidden or private Module. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resolution")),(0,r.kt)("p",null,"To test such a microflow, create a non-private microflow, outside of any hidden or private modules, that calls this microflow as a submicroflow."))}p.isMDXComponent=!0}}]);