"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9901:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="Run MTA on premise",o={unversionedId:"run-mta-on-premise",id:"run-mta-on-premise",title:"Run MTA on premise",description:"Purpose",source:"@site/additional/01-howtos/run-mta-on-premise.md",sourceDirName:".",slug:"/run-mta-on-premise",permalink:"/additional/howtos/run-mta-on-premise",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run your first test in MTA",permalink:"/additional/howtos/run-first-test"},next:{title:"Use SSO",permalink:"/additional/howtos/sso"}},p={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Configuring a new MTA implementation",id:"configuring-a-new-mta-implementation",level:2},{value:"Actions",id:"actions",level:3},{value:"Upgrading an existing MTA implementation",id:"upgrading-an-existing-mta-implementation",level:2},{value:"MTA actions",id:"mta-actions",level:3},{value:"Test application actions",id:"test-application-actions",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:s},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-mta-on-premise"},"Run MTA on premise"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"This document describes the MTA implementation steps for customers that bring their own Mendix license and environment, either local or cloud hosted."),(0,r.kt)("p",null,"This could be any custom cloud environment like a Cloud Foundry or Kubernetes Pod or an on-premise installation. The main difference with Menditect hosting MTA on the Mendix cloud is that the client is responsible for managing the cloud platform."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When installing MTA for the first time, always clean up your existing environment first (both the database and the Mendix model).")),(0,r.kt)("h2",{id:"configuring-a-new-mta-implementation"},"Configuring a new MTA implementation"),(0,r.kt)("p",null,"Your cloud needs to meet at least the specifications of the Mendix S21-STANDARD container, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack"},"Mendix Cloud Container resources"),"."),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You will receive information from Menditect on how to download the MDA file that you need to set up MTA."),(0,r.kt)("li",{parentName:"ul"},"Deploy and transport it to the environment in your cloud. ",(0,r.kt)("br",null),"When deploying MTA on the Mendix Cloud, you need to use ",(0,r.kt)("strong",{parentName:"li"},"at least an S21 Resource Pack.")," ",(0,r.kt)("br",null),"When deploying MTA on another Cloud provider, you need to have ",(0,r.kt)("strong",{parentName:"li"},"at least 2 GB of RAM for the App and 1/2 CPU core")," available."),(0,r.kt)("li",{parentName:"ul"},"Check the content of the following environment variables for the MTA application:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApiMendixModule.WebsocketStage"),(0,r.kt)("td",{parentName:"tr",align:null},"production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Atlas_Core.Atlas_Core_Version"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Atlas_Web_Content.Atlas_Web_Content_Version"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.DeleteObjectBatchSize"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.InternalToken"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.MtaDocVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.NodeRevision"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.NumberOfThreadsParallel"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.UrlBaseDocumentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://documentation.menditect.com"},"https://documentation.menditect.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.UrlReleaseNotes"),(0,r.kt)("td",{parentName:"tr",align:null},"releasenotes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaUtils.UrlSupportForm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://share.hsforms.com/1x-oVL39kRTGw-b3CQ9im8g3twri"},"https://share.hsforms.com/1x-oVL39kRTGw-b3CQ9im8g3twri"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeepLink.EnableLeadingSlash"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeepLink.IndexPage"),(0,r.kt)("td",{parentName:"tr",align:null},"index.html")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeepLink.LoginLocation"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeepLink.RequestHandlerName"),(0,r.kt)("td",{parentName:"tr",align:null},"link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeepLink.DeepLink.SSOHandlerLocation"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EgalitConfigModule.EsaMultiInstanceMode"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaDataValidationModule.DataValidationAccessGuid"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MtaDataValidationModule.RunIntervalNrOfDaysBeforeSysdate"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PluginRecordModule.RecordingSupportRequestUrl"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://share.hsforms.com/1RJY9cRw-TSm9QWXD6bZcbw3twri"},"https://share.hsforms.com/1RJY9cRw-TSm9QWXD6bZcbw3twri"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TestconfigurationModule.TCNF_DaysRemainAfterFlaggedForDeleteDate"),(0,r.kt)("td",{parentName:"tr",align:null},"20")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You may notice that MTA also contains environment variables from the MTA Plugin Module. This is because Menditect regression-tests MTA with MTA.\nMenditect on-premise customers and partners ",(0,r.kt)("strong",{parentName:"p"},"do not")," have to set these values.")),(0,r.kt)("p",null,"Toggle these scheduled events to Currently Enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ApiCiCdModule.RunCtresCleanup\nApplicationModule.RunARVNsContentCleanUp\nMtaDataValidationModule.RunInterval\nTestconfigurationModule.RunTrunsCleanup\nTestconfigurationModule.RunTcnfsCleanup\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Below steps are important and MTA will not work if these steps are skipped.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that any firewalls applicable have whitelisted these URLs, on ports 80 and 443:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*.mendix.com/*\n*.sprintr.com/*\n*.fontawesome.com/*\nmtasdkapi-ws.menditect.com/*\nfonts.googleapis.com/*\nhsforms.com/*\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the /rest path allows all access (in Mendix: Environment details -> Network -> Path Based Access Restrictions and set the path /rest/ on allow access).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure the /rest-doc path denies all access (in Mendix: Environment details -> Network -> Path Based Access Restrictions and set the path /rest-doc/ on deny all access).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the MTA application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the MxAdmin password of the environment to your own MxAdmin password.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a database backup.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DONE!"))),(0,r.kt)("h2",{id:"upgrading-an-existing-mta-implementation"},"Upgrading an existing MTA implementation"),(0,r.kt)("h3",{id:"mta-actions"},"MTA actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always create a backup of your database before bringing MTA down and upgrading."),(0,r.kt)("li",{parentName:"ul"},"During deployment, make sure that you check all the values of the Constants for the Mendix model."),(0,r.kt)("li",{parentName:"ul"},"After upgrading with the provided MDA file in this directory, make sure to login using the admin account (usually MxAdmin)."),(0,r.kt)("li",{parentName:"ul"},"Run all the migrations from the top menu in MTA, from old to new. "),(0,r.kt)("li",{parentName:"ul"},"Wait for all of the migrations to be done. "),(0,r.kt)("li",{parentName:"ul"},"When running into errors, contact Menditect support (",(0,r.kt)("a",{parentName:"li",href:"mailto:support@menditect.com"},"support@menditect.com"),"), and do not proceed with test scripting."),(0,r.kt)("li",{parentName:"ul"},"Logout."),(0,r.kt)("li",{parentName:"ul"},"Login with a TestAutomator account and check if the test configurations can be executed.")),(0,r.kt)("h3",{id:"test-application-actions"},"Test application actions"),(0,r.kt)("p",null,"After updating MTA, make sure that all the test applications have the newest version of the MTA Plugin module installed. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"import-plugin"},"Read how to import and configure the Plugin here")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 december 2022"))}m.isMDXComponent=!0}}]);