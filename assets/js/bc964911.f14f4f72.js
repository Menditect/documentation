"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3015],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>d});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(s),d=n,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return s?r.createElement(m,a(a({ref:t},p),{},{components:s})):r.createElement(m,a({ref:t},p))}));function d(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var c=2;c<i;c++)a[c]=s[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}f.displayName="MDXCreateElement"},3660:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(7462),n=(s(7294),s(3905));const i={},a="Persist teststep fails",o={unversionedId:"knownissues/persist-step-fails",id:"knownissues/persist-step-fails",title:"Persist teststep fails",description:"Issue summary",source:"@site/additional/04-knownissues/persist-step-fails.md",sourceDirName:"04-knownissues",slug:"/knownissues/persist-step-fails",permalink:"/additional/knownissues/persist-step-fails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow missing from list",permalink:"/additional/knownissues/microflow-missing"},next:{title:"Recorder fails",permalink:"/additional/knownissues/recorder-fails"}},l={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Delete constraints",id:"delete-constraints",level:3}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"persist-teststep-fails"},"Persist teststep fails"),(0,n.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,n.kt)("p",null,"In some cases the Persist step can fail with an unspecified error."),(0,n.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,n.kt)("h3",{id:"delete-constraints"},"Delete constraints"),(0,n.kt)("p",null,"There are delete constraints defined on entities. Objects for these entities have to be deleted in a certain order. If the objects are deleted and there is only one persist action at the end, this action will fail in some scenarios."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Resolution ")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure to set the Test Case Apply Security to 'Off'."),(0,n.kt)("li",{parentName:"ol"},"After each set of Retrieve and Delete Object teststeps, create a Persist Object teststep."),(0,n.kt)("li",{parentName:"ol"},"If the problem is still not solved, create a separate Test Case for each set of Retrieve and Delete Object teststeps.")))}u.isMDXComponent=!0}}]);