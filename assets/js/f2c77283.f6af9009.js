"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Revision download fails",s={unversionedId:"revision-download-fails",id:"revision-download-fails",title:"Revision download fails",description:"Issue summary",source:"@site/additional/04-knownissues/revision-download-fails.md",sourceDirName:".",slug:"/revision-download-fails",permalink:"/additional/knownissues/revision-download-fails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recorder fails",permalink:"/additional/knownissues/recorder-fails"},next:{title:"Teststeps are not correctly numbered",permalink:"/additional/knownissues/teststepnumbering"}},l={},p=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Edit Develop rights on App level not granted",id:"edit-develop-rights-on-app-level-not-granted",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"revision-download-fails"},"Revision download fails"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"In some cases an MTA user is not able to download a revision of a Mendix App, even if (s)he is linked to a Mendix user that has access to that App."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("h3",{id:"edit-develop-rights-on-app-level-not-granted"},"Edit Develop rights on App level not granted"),(0,o.kt)("p",null,"Missing App level Develop rights that are applied when selecting a Role in the Team page of a Mendix app."),(0,o.kt)("p",null,"To fix this, log in to Mendix Sprintr with a user having the Scrum Master role, and:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"select the Mendix App;"),(0,o.kt)("li",{parentName:"ul"},"select Team;"),(0,o.kt)("li",{parentName:"ul"},"click on Role settings;"),(0,o.kt)("li",{parentName:"ul"},"click on Edit for the Role that is assigned to the Mendix user;"),(0,o.kt)("li",{parentName:"ul"},"make sure that 'Edit' is set to 'Yes' for the 'Develop' permission.")))}c.isMDXComponent=!0}}]);