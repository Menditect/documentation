"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[227],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(i),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3316:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:5},l="Application",o={unversionedId:"application",id:"version-2.6.0/application",title:"Application",description:"Definition",source:"@site/versioned_docs/version-2.6.0/application.md",sourceDirName:".",slug:"/application",permalink:"/2.6.0/application",draft:!1,tags:[],version:"2.6.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Public API",permalink:"/2.6.0/api"},next:{title:"Application Instance",permalink:"/2.6.0/application-instance"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Application",id:"actions-on-an-application",level:2},{value:"View Applications in use by MTA",id:"view-applications-in-use-by-mta",level:3},{value:"Register Application in MTA",id:"register-application-in-mta",level:3},{value:"View Project ID",id:"view-project-id",level:3},{value:"Unregister Application from MTA",id:"unregister-application-from-mta",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application"},"Application"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Mendix project that can be added to MTA for test purposes. "),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the project in Mendix teamserver.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique identifier of the project in Mendix teamserver.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An MTA user is associated to a Mendix user in MTA. This MTA user can only add Mendix Applications that are registered to the Mendix user. ")),(0,a.kt)("p",null,"To learn more about configuring an MTA user, read the How To section."),(0,a.kt)("h2",{id:"actions-on-an-application"},"Actions on an Application"),(0,a.kt)("h3",{id:"view-applications-in-use-by-mta"},"View Applications in use by MTA"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.')),(0,a.kt)("h3",{id:"register-application-in-mta"},"Register Application in MTA"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page .'),(0,a.kt)("li",{parentName:"ul"},'Click on "',(0,a.kt)("i",{class:"fal fa-plus-circle"}),' Add".'),(0,a.kt)("li",{parentName:"ul"},"Select the Application you want to Add.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Apps that are not hosted in the Mendix cloud don't always show in this list.",(0,a.kt)("br",null),"\nAlso, Apps that you have left, may still appear in the list, but cannot be registered in MTA."),(0,a.kt)("p",{parentName:"admonition"},"Add a Mendix App manually by using the ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," button on the top right.")),(0,a.kt)("h3",{id:"view-project-id"},"View Project ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page.'),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fal fa-info-circle"})," to view the Project ID.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'This Project ID is the same ID as the "App ID" that can be found in Mendix Sprintr, under the "Settings" page, after you selected an App.')),(0,a.kt)("h3",{id:"unregister-application-from-mta"},"Unregister Application from MTA"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page .'),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," button for the Application you want to unregister."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("i",{class:"fal fa-trash-can"}),' Delete".')),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-instance"},"Application Instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-setting"},"Test Setting"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 22 November 2023"))}d.isMDXComponent=!0}}]);