"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),v=i,h=u["".concat(c,".").concat(v)]||u[v]||d[v]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:8},o="Archive",l={unversionedId:"archive",id:"version-2.6.0/archive",title:"Archive",description:"Definition",source:"@site/versioned_docs/version-2.6.0/archive.md",sourceDirName:".",slug:"/archive",permalink:"/2.6.0/archive",draft:!1,tags:[],version:"2.6.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Application Revision",permalink:"/2.6.0/application-revision"},next:{title:"Assert",permalink:"/2.6.0/Assert/"}},c={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties (Archive Event)",id:"properties-archive-event",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Application",id:"actions-on-an-application",level:2},{value:"Toggle Archive in MTA",id:"toggle-archive-in-mta",level:3},{value:"View Archive in MTA",id:"view-archive-in-mta",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"archive"},"Archive"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"If enabled, the Archive function is meant for MTA customers that require that their ",(0,i.kt)("a",{parentName:"p",href:"test-run"},"Test Run")," results are persisted over a longer period of time.\nEvery Test Run (regardless of the result) is stored in a hierarchical JSON string in an Archive Event. "),(0,i.kt)("p",null,"Archive Events are stored in MTA for a trailing period of one year. "),(0,i.kt)("p",null,"The information in Archive Events can be used for auditing purposes, for example."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If enabled, the Archive function has a slight negative effect on MTA performance.")),(0,i.kt)("h2",{id:"properties-archive-event"},"Properties (Archive Event)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"Date and time of the occurence of the Archive Event.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Event type"),(0,i.kt)("td",{parentName:"tr",align:null},"TestRunArchive: a Test Run that finished was stored in an Archive Event.",(0,i.kt)("br",null)," TestRunArchiveEnabled: someone enabled the Archive function.",(0,i.kt)("br",null),"TestRunArchiveDisabled: someone disabled the Archive function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"Information that identifies the Archive Event. This could be the Account name of the person who enabled or disabled the Archive function, or information about the Test Run.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Content"),(0,i.kt)("td",{parentName:"tr",align:null},"The content of the Archive Event.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",{id:"actions-on-an-application"},"Actions on an Application"),(0,i.kt)("h3",{id:"toggle-archive-in-mta"},"Toggle Archive in MTA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login as an MTA Manager."),(0,i.kt)("li",{parentName:"ul"},'Navigate to "MTA management", "MTA settings".'),(0,i.kt)("li",{parentName:"ul"},'Slide the "Test run archive" to either the Enabled or Disabled setting. ')),(0,i.kt)("h3",{id:"view-archive-in-mta"},"View Archive in MTA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Archive".'),(0,i.kt)("li",{parentName:"ul"},"Use the filter options to find a specific Archive Event.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated: 23 may 2023"))}d.isMDXComponent=!0}}]);