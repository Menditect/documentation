"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5042],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3893:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Release 2.8.0",o={unversionedId:"release-2.8.0",id:"release-2.8.0",title:"Release 2.8.0",description:"These release notes are from a version that is no longer being actively maintained.",source:"@site/release-notes/release-2.8.0.md",sourceDirName:".",slug:"/release-2.8.0",permalink:"/release-notes/release-2.8.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Release 2.9",permalink:"/release-notes/release-2.9.0"},next:{title:"Release 2.7.0",permalink:"/release-notes/release-2.7.0"}},s={},p=[{value:"Release date",id:"release-date",level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",level:4},{value:"Highlights in this release",id:"highlights-in-this-release",level:2},{value:"New functionality",id:"new-functionality",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-280"},"Release 2.8.0"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These release notes are from a version that is no longer being actively maintained. ")),(0,r.kt)("h4",{id:"release-date"},"Release date"),(0,r.kt)("p",null,"23 August 2024"),(0,r.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,r.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). ",(0,r.kt)("br",null),"\nRead more about MTS/LTS versions at Mendix docs: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"},"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"),". ",(0,r.kt)("br",null),"\nFor support levels on MTS/LTS and monthly releases, read the ",(0,r.kt)("a",{parentName:"p",href:"../legal/sla"},"SLA"),". "),(0,r.kt)("h2",{id:"highlights-in-this-release"},"Highlights in this release"),(0,r.kt)("i",{class:"fas fa-fire"}),"  ",(0,r.kt)("b",null,"Export and Import Test Configuration to file")," ",(0,r.kt)("br",null),"This allows for exporting your test scripts and enables MTA cross-instance migration. ",(0,r.kt)("i",null,"Some useful examples:"),(0,r.kt)("iframe",{src:"https://player.vimeo.com/video/1002007845",height:"300",width:"450",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  ",(0,r.kt)("b",null,"Copy a Test Suite from a Test Configuration using other Application")," ",(0,r.kt)("br",null),"This allows for reusing test scripts across different Mendix Applications and supports splitting up Applications into microservices.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("i",{class:"fas fa-fire"}),"  Bug fixes for stability and security.",(0,r.kt)("h2",{id:"new-functionality"},"New functionality"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1828"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to export (backup) a Test Configuration to a text file, and import a Test Configuration from a text file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1829"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to import a Test Suite from a source Test Configuration, even if that Test Suite uses an Application, that is not used in the target Test Configuration. MTA will detect elements such as Microflows and Entities, by matching them by fully qualified Mendix name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1910"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},'The page where Test Suites and Test Cases can be copied has changed. Test Suites and Test Cases can now be "duplicated" in the same Test Configuration and Test Suite (respectively). When copying from another Test Configuration or Test Suite, the copy button is now available as "Copy from", in the Test Configuration or Test Suite that you want to copy into.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1662"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"The MTA CiCd API v2 that was deprecated since MTA 2.6 has been permanently deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"The MTA CiCd API v2 was replaced by the ",(0,r.kt)("a",{parentName:"td",href:"../api"},"MTA Public API")," (click to see reference guide).")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-86"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"On the Test Configurations page, it is now possible to filter on Application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1914"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},'When selecting "empty list" as value for a Microflow List parameter, the value would be empty (or null), instead of instantiating a List with 0 objects. This resulted in errors when mutating the list.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},'When selecting "empty list" as value for a Microflow List parameter, an actual empty List is instantiated and passed as the parameter value.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Open your App in Studio Pro, visit the Mendix Marketplace and update the MTA Plugin to the newest version."))))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1886"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When connecting an Application Instance to MTA with the correct MTA Connection User credentials but a non-existing Token, the connection will show as Connected in the Appliation Instance, but as disconnected in MTA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"When connecting to MTA using a non-existing Token, the connection will show an error message and display as disconnected in the Application Instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1930"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When viewing the results of a Test Case Run, the Apply Security setting on the respective Test Case was not shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"The Apply Security setting on a Test Case is now shown, both in design view and in the Test Case Run results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1928"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When downloading a revision through the MTA Public API, a change in Repository type from SVN to Git, is not detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Either when downloading a revision in MTA or through the MTA Public API, changes in Repository type are now detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1924"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Adding a Microflow Parameter value to Test Suite data variation resulted in an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"It is again possible to add a Microflow Parameter value to Test Suite data variation without seeing an error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1923"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"A data variation row is added when a value was added, then deleted, and then added again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data variation rows when adding, deleting and again adding a value, remains unchanged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1901"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When cancelling the creation of a new Application Instance inside the Test Configuration wizard, an error would occur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"The creation of a new Application Instance can again be cancelled when inside the Test Configuration wizard.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1940"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot delete a Test Run if there is Application level Coverage associated to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"A Test Run can be deleted also if Application level Coverage is associated to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-1941"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"If a Test Run is still running while MTA is stopped, it appears to still be running after MTA is restarted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"If a Test Run is still running while MTA is stopped, it will show as stopped with status Failed, after MTA is restarted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);