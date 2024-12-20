"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1357],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,u=c["".concat(d,".").concat(m)]||c[m]||k[m]||l;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8101:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:9},i="Know when to adapt to next revision",o={unversionedId:"design-tests/know-when-to-adapt-revision",id:"design-tests/know-when-to-adapt-revision",title:"Know when to adapt to next revision",description:"Explanation",source:"@site/additional/01-howtos/03-design-tests/know-when-to-adapt-revision.md",sourceDirName:"03-design-tests",slug:"/design-tests/know-when-to-adapt-revision",permalink:"/additional/howtos/design-tests/know-when-to-adapt-revision",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Test Nanoflows",permalink:"/additional/howtos/design-tests/test-nanoflows"},next:{title:"Test using Playwright in Mendix",permalink:"/additional/howtos/design-tests/playwright-frontend-test"}},d={},p=[{value:"Explanation",id:"explanation",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Feedback?",id:"feedback",level:2}],s={toc:p},c="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"know-when-to-adapt-to-next-revision"},"Know when to adapt to next revision"),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../../test-configuration"},"Test Configurations")," are always built upon a single currently loaded ",(0,r.kt)("a",{parentName:"p",href:"../../../application-revision"},"Application Revision"),". The information in that revision is used to determine which objects and object values can exist in the database, and which microflows can be executed. This in turn allows to create the necessary ",(0,r.kt)("a",{parentName:"p",href:"../../../Teststep/"},"Teststeps")," that are needed to build a test in MTA. And, when the test is executed, gives some guarantee that these model elements also exist in the ",(0,r.kt)("a",{parentName:"p",href:"../../../application-instance"},"Application Instance")," that the test is running on."),(0,r.kt)("p",null,"To allow Test Configurations to stay updated with changes done in the Mendix model, they can be adapted to another revision. Note that this does not necessarily have to be a newer revision, it can be any revision on any branch of the App. Downloading a revision can be done in the background by using a ",(0,r.kt)("a",{parentName:"p",href:"../../../branch-subscription"},"Branch Subscription"),", but adapting must be done ",(0,r.kt)("a",{parentName:"p",href:"../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision"},"manually")," because adapting can lead to ",(0,r.kt)("a",{parentName:"p",href:"../../../construction-error"},"Construction Errors"),"."),(0,r.kt)("p",null,"Construction Errors in a Test Configuration will block executing it. Executing would lead to an error in the Test Run, because model elements don't match. But, it is not always necessary to adapt to the revision of the Application Instance, in order to Execute the Test Configuration. Below is a list of scenario's, which would lead to an error when executing or not."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Microflow")," means any Microflow or Rule",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Used?")," means the entity, attribute or microflow is used in a teststep")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Change done in next revision"),(0,r.kt)("th",{parentName:"tr",align:null},"Used?"),(0,r.kt)("th",{parentName:"tr",align:null},"Executing when not adapting to next revision"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added entity"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing entity"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing entity"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added association"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing association"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing association"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed entity"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed entity"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed association"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed association"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other domain model change"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other domain model change"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added microflow"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing microflow"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted existing microflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Added microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deleted microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Renamed microflow input parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Changed microflow return value"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Changed microflow return value"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("font",{color:"red"},"Error"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other microflow change"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other microflow change"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Any other model change"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fal fa-check"}))))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 23 October 2024"))}k.isMDXComponent=!0}}]);