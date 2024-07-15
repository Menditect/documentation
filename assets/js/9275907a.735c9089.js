"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8485],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2136:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Release 2.5.0",i={unversionedId:"release-2.5.0",id:"release-2.5.0",title:"Release 2.5.0",description:"These release notes are from a version that is no longer being actively maintained.",source:"@site/release-notes/release-2.5.0.md",sourceDirName:".",slug:"/release-2.5.0",permalink:"/release-notes/release-2.5.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Release 2.6.0",permalink:"/release-notes/release-2.6.0"},next:{title:"Release 2.4.0",permalink:"/release-notes/release-2.4.0"}},s={},p=[{value:"Release date",id:"release-date",level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",level:4},{value:"Highlights in this release",id:"highlights-in-this-release",level:2},{value:"New functionality",id:"new-functionality",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],m={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-250"},"Release 2.5.0"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These release notes are from a version that is no longer being actively maintained. ")),(0,r.kt)("h4",{id:"release-date"},"Release date"),(0,r.kt)("p",null,"30 November 2023"),(0,r.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,r.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.12.\nFor support levels on MTS/LTS and monthly releases, read the ",(0,r.kt)("a",{parentName:"p",href:"../legal/sla"},"SLA"),". ",(0,r.kt)("strong",{parentName:"p"},"Mendix 10 support is monthly release based."),"\nRead more about MTS/LTS versions at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"},"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See what's new!")),(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/889179420?h=4fdd5af8a4",height:"300",width:"450",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"highlights-in-this-release"},"Highlights in this release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New Test Configuration menu structure!"),(0,r.kt)("li",{parentName:"ul"},"Generate Test Cases from scratch by using the Mendix Model menu!"),(0,r.kt)("li",{parentName:"ul"},"Option to use SAML SSO instead of local accounts."),(0,r.kt)("li",{parentName:"ul"},"Function to run a single Test Suite."),(0,r.kt)("li",{parentName:"ul"},"Option to stop a test run when an assert fails.")),(0,r.kt)("h2",{id:"new-functionality"},"New functionality"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1600"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"The menu structure and navigation to configure a Test Configuration has been changed. Clicking a Test Suite in the list will now open it. Buttons to navigate from the Test Run to test design have changed. Apart from the Test Suite page containing all the Test Cases, there is now also a Test Case page, alowing more focus while working on Unit Tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1493"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to execute only a single Test Suite. This change was also reflected in the CI/CD API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-0634"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"MTA now supports the option to use SAML to authenticate, as an alternative to using local accounts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Contact support to have this implemented in an MTA environment."))))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1307"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to specify on an assert, that a test run should stop, whenever the assert fails.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1451"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"MTA has a new feature that allows to view which microflows are covered by a Test Case, and optionally create a microflow test from there.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1611"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever executing a single Test Case, other Test Cases that it depends on, are also executed in sequence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1568"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Test Instructions and Manual Test Cases are no longer supported in MTA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1593"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"The TestAutomator role no longer exists in MTA and has been replaced by the Tester role. The Tester role now has the same rights as the TestAutomator role in the previous versions of MTA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1584"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Keys that need to be used in the CI/CD API are now shown whenever applicable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"N/A"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"We have automated the execution of the migration scripts when upgrading an MTA version. This is especially useful for our on-premises customers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1582"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"The MTA Dashboard showed incorrect information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"The MTA Dashboard shows correct information again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1103"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Whenever the recorder in MTA is no longer responding, it was not possible to stop the recording.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"A recording can now be stopped, also if it is no longer responding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null))}d.isMDXComponent=!0}}]);