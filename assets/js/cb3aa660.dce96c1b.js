"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Application Branch",p={unversionedId:"application-branch",id:"version-1.8.0/application-branch",title:"Application Branch",description:"Definition",source:"@site/versioned_docs/version-1.8.0/application-branch.md",sourceDirName:".",slug:"/application-branch",permalink:"/1.8.0/application-branch",draft:!1,tags:[],version:"1.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Persist",permalink:"/1.8.0/Teststep/persist"},next:{title:"Application Environment",permalink:"/1.8.0/application-environment"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Application branch",id:"actions-on-application-branch",level:2},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-branch"},"Application Branch"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A copy of an ",(0,a.kt)("a",{parentName:"p",href:"application"},"Application")," codeline, managed with Mendix teamserver. Information about an Application Branch is imported from teamserver by MTA. "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about branches. "),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the Application Branch.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Application Branch information cannot be deleted from MTA if ",(0,a.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," information still exists in the branch.")),(0,a.kt)("h2",{id:"actions-on-application-branch"},"Actions on Application branch"),(0,a.kt)("p",null,"In MTA version 1.8, there are no actions on Application Branches."),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 20 september 2022"))}u.isMDXComponent=!0}}]);