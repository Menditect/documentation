"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||s;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const s={},a="Duplicate empty Test suite fails",o={unversionedId:"design-tests/duplicate-empty-test-suite",id:"design-tests/duplicate-empty-test-suite",title:"Duplicate empty Test suite fails",description:"Issue summary",source:"@site/additional/04-knownissues/03-design-tests/duplicate-empty-test-suite.md",sourceDirName:"03-design-tests",slug:"/design-tests/duplicate-empty-test-suite",permalink:"/additional/knownissues/design-tests/duplicate-empty-test-suite",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Construction errors after move Entity",permalink:"/additional/knownissues/design-tests/construction-errors-after-moving-entity"},next:{title:"Popup Menu is cut off in Firefox",permalink:"/additional/knownissues/design-tests/menu-in-firefox"}},u={},l=[{value:"Issue summary",id:"issue-summary",level:2}],c={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"duplicate-empty-test-suite-fails"},"Duplicate empty Test suite fails"),(0,i.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,i.kt)("p",null,"When duplicating an a Test Suite without any Test Cases, an error is shown. "),(0,i.kt)("p",null,"This is a known issue that will be fixed in a future release."))}f.isMDXComponent=!0}}]);