"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Recorder fails",s={unversionedId:"recorder-fails",id:"recorder-fails",title:"Recorder fails",description:"Issue summary",source:"@site/additional/04-knownissues/recorder-fails.md",sourceDirName:".",slug:"/recorder-fails",permalink:"/additional/knownissues/recorder-fails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin falsely connected",permalink:"/additional/knownissues/plugin-falsely-connected"},next:{title:"Revision download fails",permalink:"/additional/knownissues/revision-download-fails"}},l={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Unsupported Mendix Version",id:"unsupported-mendix-version",level:3},{value:"Recorder started too late",id:"recorder-started-too-late",level:3},{value:"Limitations",id:"limitations",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recorder-fails"},"Recorder fails"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"After ",(0,o.kt)("a",{parentName:"p",href:"../../recording"},"recording")," user actions, when stopping the recording, the teststep generation fails with an error."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("h3",{id:"unsupported-mendix-version"},"Unsupported Mendix Version"),(0,o.kt)("p",null,"The Recorder does not work in Mendix runtime versions 9.24.4, 9.24.5, 9.24.6 and 9.24.7."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resolution")),(0,o.kt)("p",null,"Upgrade to a newer Mendix runtime version."),(0,o.kt)("h3",{id:"recorder-started-too-late"},"Recorder started too late"),(0,o.kt)("p",null,"It is possible that the recorder was started too late. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resolution")),(0,o.kt)("p",null,"Please start the recorder before logging in to the application."),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The limits of the recording feature are reached. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../bestpractice/record-actions#limitations"},"Check the limitations.")))}p.isMDXComponent=!0}}]);