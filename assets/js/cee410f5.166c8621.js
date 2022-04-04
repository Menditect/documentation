"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[375],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7205:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={},u="Configure Ci/Cd pipeline",p={unversionedId:"howtos/cicd",id:"howtos/cicd",title:"Configure Ci/Cd pipeline",description:"Definition",source:"@site/docs/howtos/cicd.md",sourceDirName:"howtos",slug:"/howtos/cicd",permalink:"/documentation/howtos/cicd",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access Mendix model",permalink:"/documentation/howtos/access-mendix-model"},next:{title:"Import MTA Plugin",permalink:"/documentation/howtos/import-plugin"}},s=[{value:"Definition",id:"definition",children:[],level:2},{value:"How to prepare MTA",id:"how-to-prepare-mta",children:[],level:2},{value:"How to include a Test configuration in Ci/Cd",id:"how-to-include-a-test-configuration-in-cicd",children:[],level:2},{value:"How to execute a testrun from Ci/Cd",id:"how-to-execute-a-testrun-from-cicd",children:[{value:"POST testruns",id:"post-testruns",children:[],level:3},{value:"GET testrunsresult",id:"get-testrunsresult",children:[],level:3}],level:2},{value:"How to view results of a Ci/Cd testrun",id:"how-to-view-results-of-a-cicd-testrun",children:[],level:2},{value:"Testrun cleanup",id:"testrun-cleanup",children:[],level:2}],d={toc:s};function c(t){var e=t.components,o=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-cicd-pipeline"},"Configure Ci/Cd pipeline"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"This document describes the guidelines to use the CiCd api of MTA in a pipeline."),(0,i.kt)("h2",{id:"how-to-prepare-mta"},"How to prepare MTA"),(0,i.kt)("p",null,"In order to prepare MTA for integration with your Ci/Cd pipeline you need to create a user in MTA with only the Testautomator and CiCdApiUser roles:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Ci Cd user",src:n(5906).Z})),(0,i.kt)("p",null,"This is the username and password you will connect with to the API. "),(0,i.kt)("h2",{id:"how-to-include-a-test-configuration-in-cicd"},"How to include a Test configuration in Ci/Cd"),(0,i.kt)("p",null,"Where regular test runs are executed on the Test Configuration level, Ci/Cd enabled test runs are executed on the Test Application level. When testing a Test Application, all Test Configurations that are Ci/Cd enabled, are executed."),(0,i.kt)("p",null,'If you want to include a Test configuration in testing, you need to enable it by editing it from the Test design page.\nEdit the respective test configuration and set "Ci/Cd enabled" to TRUE.'),(0,i.kt)("h2",{id:"how-to-execute-a-testrun-from-cicd"},"How to execute a testrun from Ci/Cd"),(0,i.kt)("p",null,"The base URL for the Ci/Cd API is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{your mta node}/rest/cicdservice/v1/CiCd/\n")),(0,i.kt)("p",null,"The Ci/Cd API knows two REST requests. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"POST testruns ",(0,i.kt)("br",null)," This request executes a new Ci/Cd testrun"),(0,i.kt)("li",{parentName:"ol"},"GET testrunsresult ",(0,i.kt)("br",null)," This request returns the result for a previously executed Ci/Cd testrun")),(0,i.kt)("p",null,"The contents of these requests are described next."),(0,i.kt)("h3",{id:"post-testruns"},"POST testruns"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/rest/cicdservice/v1/CiCd/testruns")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example: https://mta-menditect-9fo2p/rest/cicdservice/v1/CiCd/testruns")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authorization")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username:"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the CiCd username in MTA}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password:"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the CiCd password in MTA}"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input body")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ProjectId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the Mendix project ID for the Mendix App you want to execute, which can be found under the Applications page in MTA}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EnvironmentName"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the exact name of the application environment you want to test on}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EnvironmentType"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{either \u201cCustom\u201d or \u201cMendixCloud\u201d}"))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "ProjectId":"fb9e16d9-05ea-42fc-91a6-41c5b2341384",\n   "EnvironmentName": "Lokaal Niels",\n   "EnvironmentType": "Custom"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output (if http response = 200/OK)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ExecutionId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{an incremented integer representing an ID for the created CiCd testrun}"))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Example: {"ExecutionId":123}')),(0,i.kt)("h3",{id:"get-testrunsresult"},"GET testrunsresult"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/rest/cicdservice/v1/CiCd/testrunsresult")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example: https://mta-menditect-9fo2p/rest/cicdservice/v1/CiCd/testrunsresult")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authorization")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,i.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username:"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the CiCd username in MTA}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Password:"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the CiCd password in MTA}"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ExecutionId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{the ID for a previously created CiCd testrun}"))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example: https://mta-menditect-9fo2p/rest/cicdservice/v1/CiCd/testrunsresult?ExecutionId=123")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output (if http response = 200/OK)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{either "Pass" or "Fail"}'))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Example: {"Result":"Pass"}')),(0,i.kt)("h2",{id:"how-to-view-results-of-a-cicd-testrun"},"How to view results of a Ci/Cd testrun"),(0,i.kt)("p",null,"To view the detailed results of a testrun that is executed from CiCd, login on MTA, and go to the \u201cTest run\u201d/\u201dCi/Cd test runs (beta)\u201d page. All the executed CiCd testruns are listed here with their respective Execution Id, also the ones that were not successful.\nUsing the Details button it is possible to view the results of the testrun."),(0,i.kt)("p",null,"Note that CiCd testruns are also listed on the Test Run overview page, recognizable by the infinity \u221e icon.\nGo to ",(0,i.kt)("a",{parentName:"p",href:"../definitions/test-run"},"Test run")," for more information about test runs."),(0,i.kt)("h2",{id:"testrun-cleanup"},"Testrun cleanup"),(0,i.kt)("p",null,"Currently, every night a scheduled event cleans up Ci/Cd test runs. MTA only persists Ci/Cd test runs associated with the last two executions for a single test application."))}c.isMDXComponent=!0},5906:function(t,e,n){e.Z=n.p+"assets/images/cicd-create-account-2c559352d875c354025afb3466f6c1ee.png"}}]);