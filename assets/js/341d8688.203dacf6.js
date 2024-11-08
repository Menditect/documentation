"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3725],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(c,o(o({ref:e},p),{},{components:a})):n.createElement(c,o({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},o="Release 2.7.0",i={unversionedId:"release-2.7.0",id:"release-2.7.0",title:"Release 2.7.0",description:"These release notes also apply for MTA version 2.7.1.",source:"@site/release-notes/release-2.7.0.md",sourceDirName:".",slug:"/release-2.7.0",permalink:"/release-notes/release-2.7.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Release 2.8.0",permalink:"/release-notes/release-2.8.0"},next:{title:"Release 2.6.0",permalink:"/release-notes/release-2.6.0"}},s={},u=[{value:"Release date",id:"release-date",level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",level:4},{value:"Highlights in this release",id:"highlights-in-this-release",level:2},{value:"New functionality",id:"new-functionality",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],p={toc:u},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-270"},"Release 2.7.0"),(0,r.kt)("sup",null,"These release notes also apply for MTA version 2.7.1."),(0,r.kt)("h4",{id:"release-date"},"Release date"),(0,r.kt)("p",null,"15 July 2024"),(0,r.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,r.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). ",(0,r.kt)("br",null),"\nRead more about MTS/LTS versions at Mendix docs: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"},"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"),". ",(0,r.kt)("br",null),"\nFor support levels on MTS/LTS and monthly releases, read the ",(0,r.kt)("a",{parentName:"p",href:"../legal/sla"},"SLA"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Watch the video on Code Coverage!")),(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/956958620?h=47a5aa5f4c",height:"300",width:"450",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"highlights-in-this-release"},"Highlights in this release"),(0,r.kt)("i",{class:"fas fa-fire"}),"  Introducing ",(0,r.kt)("b",null,"Code Coverage"),". Know which microflows are covered by your tests! Define specific coverage goals and measure coverage trends.",(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  Improved ",(0,r.kt)("b",null,"analysis of Test Runs")," by providing links to Teststeps that use a specific output.",(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  Added instructional ",(0,r.kt)("b",null,"Demo Video's")," to MTA.",(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  Added the option to execute with a ",(0,r.kt)("b",null,"Teststep delay"),", which allows more fine-grained waiting than Test Case delay.",(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  Optimized ",(0,r.kt)("b",null,"Test Run performance")," by providing the choice for normal (faster) and full output.",(0,r.kt)("h2",{id:"new-functionality"},"New functionality"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1401"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Added the option to measure the Code Coverage of microflows that were executed in Test Runs. Look for the ",(0,r.kt)("i",{class:"fal fa-umbrella"})," icon! ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This will be measured after a test was executed, on both Test Configuration and Application level. ",(0,r.kt)("br",null),"A 100 % coverage means all microflows were executed. Set Coverage Goals with Exclude Filters to exclude microflows. Use the Coverage Goals navigation item on your Application or Test Configuration to get started.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"Test management apps using MTA's ",(0,r.kt)("a",{parentName:"td",href:"../api#post-execute-testconfiguration"},"Public API"),' to execute a Test Configuration, have to provide a "Coverage" parameter in the body. Check the reference guide for more information.')))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1333"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Added the Delay option on a teststep, to specify how long MTA should wait before executing the next teststep. If a delay other than 0 was specified, the delay is shown in the teststep. Look for the ",(0,r.kt)("i",{class:"fal fa-hourglass-start"})," icon!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1752"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},'When executing any test, a choice must now be made to run the test with "Full output" or not. Look for the ',(0,r.kt)("i",{class:"fal fa-memo-circle-info"})," icon!",(0,r.kt)("br",null),(0,r.kt)("br",null)," Running without full output, which is now the new default setting, will be faster than before, but when viewing the results of the Test Run, teststep values are only shown if they are used by other teststeps. Running with full output will include all data values when viewing the results of the Test Run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"N/A"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When executing any test, it is now possible to navigate through the output values of teststeps to determine in which other teststeps that output is used. Because there was already an option to see which teststep is providing input, these values are now fully navigable, back and forth.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"N/A"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Added instructional demo video's to MTA. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Just click on the ",(0,r.kt)("i",{class:"fal fa-clapperboard-play"})," button in the top-right in MTA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1727"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifying a single quote (') as value of a String attribute in a retrieve teststep would lead to incorrect escaping when executing the test. This is because single quotes are escaped differently in XPATH parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Single quotes are now escaped correctly, resulting in correct XPATH parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1822"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited String values could not be copied from attributes in the results of a Test Run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited String values can now be copied with a Copy button from attributes results of a Test Run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1835"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststeps with the same output data type as needed for an input parameter are not visible (and cannot be used as input) if those microflow teststeps have input parameters where datavariation is applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststeps with the same output data type as needed for an input parameter are visible so they can be used as input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);