"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:9,toc_max_heading_level:2},r="CI/CD API",s={unversionedId:"cicd",id:"cicd",title:"CI/CD API",description:"Version 2",source:"@site/docs/cicd.md",sourceDirName:".",slug:"/cicd",permalink:"/cicd",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Assert on Validation feedback",permalink:"/Assert/assert-validation-feedback"},next:{title:"Data Variation",permalink:"/datavariation"}},o={},p=[{value:"Version 2",id:"version-2",level:2},{value:"GET application instances",id:"get-application-instances",level:2},{value:"Request",id:"request",level:3},{value:"Responses",id:"responses",level:3},{value:"200 example:",id:"200-example",level:4},{value:"400: InvalidInput:",id:"400-invalidinput",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error",level:4},{value:"POST download revision",id:"post-download-revision",level:2},{value:"Request",id:"request-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"200 example:",id:"200-example-1",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-1",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-1",level:4},{value:"POST cancel revision download",id:"post-cancel-revision-download",level:2},{value:"Request",id:"request-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"200:",id:"200",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-2",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-2",level:4},{value:"GET revision download status",id:"get-revision-download-status",level:2},{value:"Request",id:"request-3",level:3},{value:"Responses",id:"responses-3",level:3},{value:"200 example:",id:"200-example-2",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-3",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-3",level:4},{value:"POST execute test case",id:"post-execute-test-case",level:2},{value:"Request",id:"request-4",level:3},{value:"Responses",id:"responses-4",level:3},{value:"200 example:",id:"200-example-3",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-4",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-4",level:4},{value:"GET testconfigurations",id:"get-testconfigurations",level:2},{value:"Request",id:"request-5",level:3},{value:"Responses",id:"responses-5",level:3},{value:"200 example:",id:"200-example-4",level:4},{value:"GET testconfiguration",id:"get-testconfiguration",level:2},{value:"Request",id:"request-6",level:3},{value:"Responses",id:"responses-6",level:3},{value:"200 example:",id:"200-example-5",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-5",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-5",level:4},{value:"GET applications in testconfiguration",id:"get-applications-in-testconfiguration",level:2},{value:"Request",id:"request-7",level:3},{value:"Responses",id:"responses-7",level:3},{value:"200 example:",id:"200-example-6",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-6",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-6",level:4},{value:"POST adapt testconfiguration to revision",id:"post-adapt-testconfiguration-to-revision",level:2},{value:"Request",id:"request-8",level:3},{value:"Responses",id:"responses-8",level:3},{value:"200:",id:"200-1",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-7",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-7",level:4},{value:"POST execute testconfiguration",id:"post-execute-testconfiguration",level:2},{value:"Request",id:"request-9",level:3},{value:"Responses",id:"responses-9",level:3},{value:"200 example:",id:"200-example-7",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-8",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-8",level:4},{value:"GET testrun",id:"get-testrun",level:2},{value:"Request",id:"request-10",level:3},{value:"Responses",id:"responses-10",level:3},{value:"200 example:",id:"200-example-8",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-9",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-9",level:4},{value:"GET testrun details",id:"get-testrun-details",level:2},{value:"Request",id:"request-11",level:3},{value:"Responses",id:"responses-11",level:3},{value:"200 example:",id:"200-example-9",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-10",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-10",level:4},{value:"POST cancel testrun",id:"post-cancel-testrun",level:2},{value:"Request",id:"request-12",level:3},{value:"Responses",id:"responses-12",level:3},{value:"200:",id:"200-2",level:4},{value:"400: InvalidInput:",id:"400-invalidinput-11",level:4},{value:"500: Internal Server Error:",id:"500-internal-server-error-11",level:4},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cicd-api"},"CI/CD API"),(0,l.kt)("h2",{id:"version-2"},"Version 2"),(0,l.kt)("p",null,"This document describes the structure of the published REST service ",(0,l.kt)("inlineCode",{parentName:"p"},"MTA public API's version 2.0.0 for CI/CD")," and it's endpoints."),(0,l.kt)("p",null,"To understand ",(0,l.kt)("strong",{parentName:"p"},"how to use")," the CI/CD interface, read the HowTo section."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"To read the documentation for version 1, use the version switcher on top of this page.")),(0,l.kt)("h2",{id:"get-application-instances"},"GET application instances"),(0,l.kt)("p",null,"Retrieve all application instances of an application."),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/applications/{ApplicationKey}/application-instances")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/applications/123/application-instances")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses"},"Responses"),(0,l.kt)("h4",{id:"200-example"},"200 example:"),(0,l.kt)("p",null,"A list of Application Instances with their respective Key, Name and Token to be used when configuring the MTA Plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "Key": "111",\n        "Name": "Default",\n        "Token": "4b004287-e08b-4189-aa23-7309c35e154f"\n    },\n    {\n        "Key": "222",\n        "Name": "Local",\n        "Token": "8a2e20d1-4cc9-4d43-b8b9-9d6ee7d24224"\n    },\n    {\n        "Key": "333",\n        "Name": "Acceptance",\n        "Token": "3886a0d8-4802-41ce-a889-21565b5ff26b"\n    }\n]\n')),(0,l.kt)("h4",{id:"400-invalidinput"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ApplicationKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-download-revision"},"POST download revision"),(0,l.kt)("p",null,"Initiate the download of a revision in MTA. The download process will be started asynchronously. The progress can be polled using the ",(0,l.kt)("a",{parentName:"p",href:"#get-revision-download-status"},"Get revision download status")," endpoint."),(0,l.kt)("h3",{id:"request-1"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/revisions/download?applicationkey={applicationkey}&branchname={branchname}&commitid={commitid}")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"For Apps stored in SVN, the mainline is named 'trunk';"),(0,l.kt)("li",{parentName:"ul"},"For Apps stored in Git, the mainline is named 'main'."))),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/download?applicationkey=123&branchname=main&commitid=582670e77da6ac294e37fbc2d141c2113e911abd")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-1"},"Responses"),(0,l.kt)("p",null,"An Application Revision with the CommitId and resulting Key."),(0,l.kt)("h4",{id:"200-example-1"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Key": "456",\n    "CommitId": "582670e77da6ac294e37fbc2d141c2113e911abd"\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-1"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ApplicationKey is missing."),(0,l.kt)("li",{parentName:"ul"},"BranchName is missing."),(0,l.kt)("li",{parentName:"ul"},"CommitId is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-1"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-cancel-revision-download"},"POST cancel revision download"),(0,l.kt)("p",null,"Cancel the download of a revision. This is only possible in the ",(0,l.kt)("em",{parentName:"p"},"requesting download")," stage."),(0,l.kt)("h3",{id:"request-2"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/revisions/{RevisionKey}/download-cancel")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/456/download-cancel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-2"},"Responses"),(0,l.kt)("h4",{id:"200"},"200:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No content")),(0,l.kt)("h4",{id:"400-invalidinput-2"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RevisionKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-2"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"get-revision-download-status"},"GET revision download status"),(0,l.kt)("p",null,"Retrieve the download status of a revision in MTA."),(0,l.kt)("h3",{id:"request-3"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/revisions/{RevisionKey}/download-status")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/456/download-status")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-3"},"Responses"),(0,l.kt)("p",null,"Any of below status descriptors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Empty"),": no download status defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Requesting download")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Downloading")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Downloaded")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Cancelled"),": download has been cancelled by a user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Error"),": an error has occured while trying to download a revision"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Deleting"),": revision is being deleted in MTA")),(0,l.kt)("h4",{id:"200-example-2"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "RevisionKey": "456",\n    "ApplicationName": "TestApp",\n    "CommitId": "582670e77da6ac294e37fbc2d141c2113e911abd",\n    "DownloadStatus": "Downloaded"\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-3"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RevisionKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-3"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-execute-test-case"},"POST execute test case"),(0,l.kt)("p",null,"Initiate the execution of a single test case for a specified application instance. The execute process will be started asynchronously. The progress can be polled using the ",(0,l.kt)("a",{parentName:"p",href:"#get-testrun"},"Get testrun")," endpoint."),(0,l.kt)("h3",{id:"request-4"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,"The request for this endpoint is made up of both a URL and a JSON body."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testcases/{TestCaseKey}/execute")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testcases/54321/execute")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Key": "111"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-4"},"Responses"),(0,l.kt)("p",null,"A unique execution ID of the Test Run:"),(0,l.kt)("h4",{id:"200-example-3"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15"\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-4"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestCaseKey is missing."),(0,l.kt)("li",{parentName:"ul"},"ApplicationInstanceKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-4"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"get-testconfigurations"},"GET testconfigurations"),(0,l.kt)("p",null,"Retrieve all test configurations in MTA, which are not deleted. "),(0,l.kt)("h3",{id:"request-5"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testconfigurations")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-5"},"Responses"),(0,l.kt)("p",null,"A list of Test Configurations with their Key and Name:"),(0,l.kt)("h4",{id:"200-example-4"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Key": "28",\n    "Name": "Test Configuration #1"\n  },\n  {\n    "Key": "29",\n    "Name": "Test Configuration #2"\n  },\n  {\n    "Key": "30",\n    "Name": "Test Configuration #3"\n  }\n]\n')),(0,l.kt)("h2",{id:"get-testconfiguration"},"GET testconfiguration"),(0,l.kt)("p",null,"Retrieve the details of a test configuration specified by Key."),(0,l.kt)("h3",{id:"request-6"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testconfigurations/{TestConfigurationKey}")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/28")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-6"},"Responses"),(0,l.kt)("p",null,"A list of all Test Suites and Test Cases in the Test Configuration, to allow the execution of a single Test Case."),(0,l.kt)("h4",{id:"200-example-5"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Key": "28",\n  "Name": "Test Configuration #1",\n  "TestSuites": [\n    {\n      "Key": "32",\n      "Name": "Test Suite #1",\n      "TestCases": [\n        {\n          "Key": "96",\n          "Name": "Test Case #1"\n        },\n        {\n          "Key": "97",\n          "Name": "Test Case #2"\n        },\n        {\n          "Key": "98",\n          "Name": "Test Case #3"\n        }\n      ]\n    },\n    {\n      "Key": "33",\n      "Name": "Test Suite #2",\n      "TestCases": [\n        {\n          "Key": "99",\n          "Name": "Test Case #1"\n        },\n        {\n          "Key": "100",\n          "Name": "Test Case #2"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-5"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestConfigurationKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-5"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"get-applications-in-testconfiguration"},"GET applications in testconfiguration"),(0,l.kt)("p",null,"Retrieve all applications of a test configuration, including the currently selected revision."),(0,l.kt)("h3",{id:"request-7"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/applications")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/28/applications")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-7"},"Responses"),(0,l.kt)("p",null,"A list of all Applications that are used in the Test Configuration, to allow downloading and adapting to another revision of that Application."),(0,l.kt)("h4",{id:"200-example-6"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "Key": "15",\n        "Name": "FirstTestApp",\n        "BranchName": "branchDev",\n        "CommitDate": "2023-08-29T09:31:13.000Z",\n        "CommitId": "247",\n        "CommitMessage": "DataType change of an attribute"\n    },\n    {\n        "Key": "16",\n        "Name": "SecondTestApp",\n        "BranchName": "trunk",\n        "CommitDate": "2023-08-22T11:09:38.000Z",\n        "CommitId": "173",\n        "CommitMessage": "Added an entity"\n    }\n]\n')),(0,l.kt)("h4",{id:"400-invalidinput-6"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestConfigurationKey is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-6"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-adapt-testconfiguration-to-revision"},"POST adapt testconfiguration to revision"),(0,l.kt)("p",null,"Adapt a test configuration to specified revision. Define revision by application, branch and revisionnumber/commitId."),(0,l.kt)("h3",{id:"request-8"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/applications/{ApplicationKey}/adapt?branchname={branchname}&commitid={commitid}")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/applications/{ApplicationKey}/adapt?branchname={branchname}&commitid={commitid}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-8"},"Responses"),(0,l.kt)("h4",{id:"200-1"},"200:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No content")),(0,l.kt)("h4",{id:"400-invalidinput-7"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestConfigurationKey is missing."),(0,l.kt)("li",{parentName:"ul"},"ApplicationKey is missing."),(0,l.kt)("li",{parentName:"ul"},"branchname is missing."),(0,l.kt)("li",{parentName:"ul"},"commitid is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-7"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-execute-testconfiguration"},"POST execute testconfiguration"),(0,l.kt)("p",null,"Initiate the execution of a test configuration for the specified application instance(s). The execute process will be started asynchronously. The progress can be polled using the ",(0,l.kt)("a",{parentName:"p",href:"#get-testrun"},"Get testrun")," endpoint."),(0,l.kt)("h3",{id:"request-9"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,"The request for this endpoint is made up of both a URL and a JSON body."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/execute")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/execute")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "Key": "8"\n    },\n    {\n        "Key": "12"\n    }\n]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-9"},"Responses"),(0,l.kt)("h4",{id:"200-example-7"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TestRunExecutionId": "5552275f-0733-4afa-b109-7dee0cf1eda9"\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-8"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestConfigurationKey is missing."),(0,l.kt)("li",{parentName:"ul"},"applicationinstancekeys is missing. ")),(0,l.kt)("h4",{id:"500-internal-server-error-8"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"get-testrun"},"GET testrun"),(0,l.kt)("p",null,"Retrieve a summary of a test run to allow checking if the test run is either Running, or finished with status Pass / Fail, or ERROR."),(0,l.kt)("h3",{id:"request-10"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testruns/{testrunexecutionid}")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/{testrunexecutionid}")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-10"},"Responses"),(0,l.kt)("h4",{id:"200-example-8"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",\n    "StartDate": "2023-08-22T08:06:31.182Z",\n    "Result": "Pass",\n    "TestConfigurationName": "My First Testconfiguration",\n    "TestRunUrl": "http://localhost:8081/link/testrun/45"\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-9"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestRunExecutionId is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-9"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"get-testrun-details"},"GET testrun details"),(0,l.kt)("p",null,"Retrieve the details of a test run."),(0,l.kt)("h3",{id:"request-11"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testruns/{testrunexecutionid}/details")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/{testrunexecutionid}/details")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-11"},"Responses"),(0,l.kt)("h4",{id:"200-example-9"},"200 example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",\n    "StartDate": "2023-08-22T08:06:31.182Z",\n    "Result": "Pass",\n    "TestConfigurationName": "My First Testconfiguration",\n    "TestRunUrl": "http://localhost:8081/link/testrun/45",\n    "TestSuiteRuns": [\n        {\n            "TestSuiteSequence": 1,\n            "TestSuiteName": "My First Test Suite",\n            "TestSuiteRunResult": "Pass",\n            "TestsuiteRunUrl": "http://localhost:8081/link/testsuiterun/44",\n            "TestCaseRuns": [\n                {\n                    "TestCaseSequence": 1,\n                    "TestCaseName": "My First Test Case",\n                    "TestCaseRunResult": "Pass",\n                    "TestCaseRunResultMessage": "",\n                    "TestCaseRunUrl": "http://localhost:8081/link/testcaserun/119"\n                }\n            ]\n        }\n    ]\n}\n')),(0,l.kt)("h4",{id:"400-invalidinput-10"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestRunExecutionId is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-10"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"post-cancel-testrun"},"POST cancel testrun"),(0,l.kt)("p",null,"Cancel a running test run. This is only possible in the ",(0,l.kt)("em",{parentName:"p"},"Running")," stage."),(0,l.kt)("h3",{id:"request-12"},"Request"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"URL")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/rest/cicd/v2/testruns/{testrunexecutionid}/cancel")),(0,l.kt)("p",null,"Example: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/{testrunexecutionid}/cancel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Authorization")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password:"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,l.kt)("h3",{id:"responses-12"},"Responses"),(0,l.kt)("h4",{id:"200-2"},"200:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No content")),(0,l.kt)("h4",{id:"400-invalidinput-11"},"400: InvalidInput:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TestRunExecutionId is missing.")),(0,l.kt)("h4",{id:"500-internal-server-error-11"},"500: Internal Server Error:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"See message for more details.")),(0,l.kt)("h2",{id:"related-topics"},"Related topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"application"},"Application")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))),(0,l.kt)("h2",{id:"feedback"},"Feedback?"),(0,l.kt)("p",null,"Missing anything? ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,l.kt)("p",null,"Last updated: 19 september 2023"))}m.isMDXComponent=!0}}]);