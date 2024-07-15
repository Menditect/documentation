"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Get started",s={unversionedId:"schedule-tests/cicd-get-started",id:"schedule-tests/cicd-get-started",title:"Get started",description:"Get started",source:"@site/additional/01-howtos/07-schedule-tests/02-cicd-get-started.md",sourceDirName:"07-schedule-tests",slug:"/schedule-tests/cicd-get-started",permalink:"/additional/howtos/schedule-tests/cicd-get-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure Account for MTA API",permalink:"/additional/howtos/schedule-tests/cicd-config"},next:{title:"Automate pipeline",permalink:"/additional/howtos/schedule-tests/cicd-flow"}},l={},p=[{value:"Get started",id:"get-started-1",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Feedback?",id:"feedback",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get started"),(0,o.kt)("h2",{id:"get-started-1"},"Get started"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../../../api"},"MTA Public API")," uses Keys to uniquely refer to objects in the database, as an alternative to using the Mendix internal Object ID (which is very long and not exposed in MTA), or object names (which are not always unique). As a result, the best way to get started is by using the Key of the Test Configuration, Application and Application Instance, to call the endpoints that you need."),(0,o.kt)("p",null,"For getting started, let's will assume that the goal is to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"download the latest revision of an App into MTA;"),(0,o.kt)("li",{parentName:"ul"},"adapt a Test Configuration (with only 1 App) to this revision;"),(0,o.kt)("li",{parentName:"ul"},"execute the Test Configuration.")),(0,o.kt)("h3",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"To download the latest revision, you need the Application Key and branch name and commit ID of the revision. You can find the Application Key by opening the Applications page and ",(0,o.kt)("a",{parentName:"p",href:"../../../application#view-key-and-project-id"},"View Key and Project ID")," of your App. Branch name and commit ID can be found in Mendix Sprintr or Studio Pro. You now have the information you need to call ",(0,o.kt)("a",{parentName:"p",href:"../../../api#post-download-revision"},"POST download revision"),". Save the Application Revision Key that is returned by this endpoint."),(0,o.kt)("h3",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"You can choose to wait until the download finishes, or use the ",(0,o.kt)("a",{parentName:"p",href:"../../../api#get-revision-download-status"},"GET revision download status")," endpoint, to poll every so-many seconds and check if it is finished. For that you need the Application Revision Key from the previous step."),(0,o.kt)("h3",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Now you will adapt the Test Configuration to the downloaded revision. You need the Test Configuration Key for that. You can find the Test Configuration Key by ",(0,o.kt)("a",{parentName:"p",href:"../../../test-configuration#edit-a-test-configuration"},"Editing the Test Configuration"),". The Key is shown in the header at the end of the title. You now have the information you need to call ",(0,o.kt)("a",{parentName:"p",href:"../../../api#post-adapt-testconfiguration-to-revision"},"POST adapt testconfiguration to revision"),". "),(0,o.kt)("h3",{id:"step-4"},"Step 4"),(0,o.kt)("p",null,"You can choose to wait until the adapt finishes, or use the ",(0,o.kt)("a",{parentName:"p",href:"../../../api#get-testconfiguration-adapt-status"},"GET testconfiguration adapt status")," endpoint, to poll every so-many seconds and check if it is finished. You will need the Test Configuration Key for that."),(0,o.kt)("h3",{id:"step-5"},"Step 5"),(0,o.kt)("p",null,"Now you can execute the Test Configuration. You need the Application Instance Key for that. You can find the Key by ",(0,o.kt)("a",{parentName:"p",href:"../../../application-instance#edit-an-application-instance"},"Editing the Application Instance"),". The Key is shown in the header at the end of the title. You now have the information you need to call ",(0,o.kt)("a",{parentName:"p",href:"../../../api#post-execute-testconfiguration"},"POST execute testconfiguration"),". "),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated 3 July 2023"))}u.isMDXComponent=!0}}]);