"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={},r="Get started with the API",s={unversionedId:"schedule-tests/cicd-get-started",id:"schedule-tests/cicd-get-started",title:"Get started with the API",description:"If you're getting started using the MTA Public API, let us know.",source:"@site/additional/01-howtos/07-schedule-tests/02-cicd-get-started.md",sourceDirName:"07-schedule-tests",slug:"/schedule-tests/cicd-get-started",permalink:"/additional/howtos/schedule-tests/cicd-get-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure Account for MTA API",permalink:"/additional/howtos/schedule-tests/cicd-config"},next:{title:"Automate pipeline",permalink:"/additional/howtos/schedule-tests/cicd-flow"}},p={},l=[{value:"Getting started",id:"getting-started",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Feedback?",id:"feedback",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started-with-the-api"},"Get started with the API"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you're getting started using the MTA Public API, ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com?subject=MTA%20Public%20API"},"let us know"),". "),(0,i.kt)("p",{parentName:"admonition"},"Menditect has created a ",(0,i.kt)("strong",{parentName:"p"},"starter kit")," that we can share with you to make the implementation easier. ")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../../../api"},"MTA Public API")," uses Keys to uniquely refer to objects in the database, as an alternative to using the Mendix internal Object ID (which is very long and not exposed in MTA), or object names (which are not always unique). As a result, the best way to get started is by using the Key of the Test Configuration, Application and Application Instance, to call the endpoints that you need."),(0,i.kt)("p",null,"For getting started, let's will assume that the goal is to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"download the latest revision of an App into MTA;"),(0,i.kt)("li",{parentName:"ul"},"adapt a Test Configuration (with only 1 App) to this revision;"),(0,i.kt)("li",{parentName:"ul"},"execute the Test Configuration.")),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"To download the latest revision, you need the Application Key and branch name and commit ID of the revision. You can find the Application Key by opening the Applications page and ",(0,i.kt)("a",{parentName:"p",href:"../../../application#view-key-and-project-id"},"View Key and Project ID")," of your App. Branch name and commit ID can be found in Mendix Sprintr or Studio Pro. You now have the information you need to call ",(0,i.kt)("a",{parentName:"p",href:"../../../api#post-download-revision"},"POST download revision"),". Save the Application Revision Key that is returned by this endpoint."),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"You can choose to wait until the download finishes, or use the ",(0,i.kt)("a",{parentName:"p",href:"../../../api#get-revision-download-status"},"GET revision download status")," endpoint, to poll every so-many seconds and check if it is finished. For that you need the Application Revision Key from the previous step."),(0,i.kt)("h3",{id:"step-3"},"Step 3"),(0,i.kt)("p",null,"Now you will adapt the Test Configuration to the downloaded revision. You need the Test Configuration Key for that. You can find the Test Configuration Key by ",(0,i.kt)("a",{parentName:"p",href:"../../../test-configuration#edit-a-test-configuration"},"Editing the Test Configuration"),". The Key is shown in the header at the end of the title. You now have the information you need to call ",(0,i.kt)("a",{parentName:"p",href:"../../../api#post-adapt-testconfiguration-to-revision"},"POST adapt testconfiguration to revision"),". "),(0,i.kt)("h3",{id:"step-4"},"Step 4"),(0,i.kt)("p",null,"You can choose to wait until the adapt finishes, or use the ",(0,i.kt)("a",{parentName:"p",href:"../../../api#get-testconfiguration-adapt-status"},"GET testconfiguration adapt status")," endpoint, to poll every so-many seconds and check if it is finished. You will need the Test Configuration Key for that."),(0,i.kt)("h3",{id:"step-5"},"Step 5"),(0,i.kt)("p",null,"Now you can execute the Test Configuration. You need the Application Instance Key for that. You can find the Key by ",(0,i.kt)("a",{parentName:"p",href:"../../../application-instance#edit-an-application-instance"},"Editing the Application Instance"),". The Key is shown in the header at the end of the title. You now have the information you need to call ",(0,i.kt)("a",{parentName:"p",href:"../../../api#post-execute-testconfiguration"},"POST execute testconfiguration"),". "),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 3 July 2023"))}u.isMDXComponent=!0}}]);