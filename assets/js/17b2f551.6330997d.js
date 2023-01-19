"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2581],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,N=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(N,o(o({ref:e},d),{},{components:a})):n.createElement(N,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8513:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Release 1.8.0",i={unversionedId:"release-1.8.0",id:"release-1.8.0",title:"Release 1.8.0",description:"Release date",source:"@site/release-notes/release-1.8.0.md",sourceDirName:".",slug:"/release-1.8.0",permalink:"/release-notes/release-1.8.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Release 2.0.0",permalink:"/release-notes/"}},s={},p=[{value:"Release date",id:"release-date",level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",level:4},{value:"Highlights in this release",id:"highlights-in-this-release",level:2},{value:"New functionality",id:"new-functionality",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-180"},"Release 1.8.0"),(0,r.kt)("h4",{id:"release-date"},"Release date"),(0,r.kt)("p",null,"29 september 2022"),(0,r.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,r.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest monthly release that can be downloaded is 9.17. For support levels on MTS/LTS and monthly releases, read the ",(0,r.kt)("a",{parentName:"p",href:"../terms-of-use/sla"},"SLA"),".\nRead more about MTS/LTS versions at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"},"https://docs.mendix.com/releasenotes/studio-pro/lts-mts"),"."),(0,r.kt)("h2",{id:"highlights-in-this-release"},"Highlights in this release"),(0,r.kt)("ul",null,(0,r.kt)("i",{class:"fas fa-fire"}),"  Design teststeps much quicker!",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Reuse definitions for change, retrieve and delete teststeps, based on existing teststeps "),(0,r.kt)("li",null,"Teststeps for associated objects are also automatically created "),(0,r.kt)("li",null,"Create teststeps to fill microflow parameters on the fly! "))),(0,r.kt)("ul",null,(0,r.kt)("i",{class:"fas fa-fire"}),"  Drag and drop teststeps!",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Use drag&drop to position teststeps or move them to another test case "),(0,r.kt)("li",null,"View and fix resulting constrution errors realtime "))),(0,r.kt)("ul",null,(0,r.kt)("i",{class:"fas fa-fire"}),"  Use real data when designing teststeps!",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Build create or retrieve teststeps based on actual objects in the database "),(0,r.kt)("li",null,"The object's attributes and associations are used in the teststep "),(0,r.kt)("li",null,"Design-time select which database to use "),(0,r.kt)("li",null,"Feeling lucky? Use the single-click microflow test button and MTA will randomly insert values for all attributes! "))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to ",(0,r.kt)("a",{href:"../additional/howtos/import-plugin"},"download the latest MTA Plugin Module version")," before using this version of MTA.")),(0,r.kt)("h2",{id:"new-functionality"},"New functionality"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-824"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to fill attributes with user-selected values from the database on a Create or Retrieve object teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-850"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to randomly fill attributes with values from the database on a Create or Retrieve object teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-811"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},'It is now possible to create a Retrieve, Change or Delete teststep, using the output of an existing teststep, using the menu under the "..." button on that teststep.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-812"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"If an MTA user logs in without having an API key or Personal Access Token (PAT) filled in, a popup window will show allowing the user to enter this information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-856"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When adding a new Create Object teststep, all attributes are now unselected by default (this was already the case for Change Object teststeps).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-366"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to use drag and drop to reorder teststeps in a test case, in a separate Edit page. The option for deleting and renaming teststeps has also moved to this page. Resulting construction errors are shown in realtime, but the operation can now be made undone to prevent these errors from happening.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-779"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When selecting an entity from the domain model while adding a Create/Change/Retrieve/Delete object teststep, the name of the teststep is now auto generated and the popup window to enter the name is skipped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-780"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When selecting a microflow while adding a Microflow teststep, the name of the teststep is now auto generated and the popup window to enter the name is skipped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-617"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"It is now possible to test a Mendix project where Git is selected for the source control. The result of this is that Application Branches are no longer part of MTA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-792"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When executing a Ci/Cd Test Run using the MTA Ci/Cd API, and MTA detects that the application commit (revision) number of the Test Configuration does not match that of the Application Environment, MTA will download the new application commit asynchronously, so that the API consumer will get a result immediately and not have to wait or handle a time-out.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-793"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"If a Ci/Cd API call yields an error message, this error message is now formatted as a JSON string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-827"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Creating a teststep is now done from the menu under the + Teststep button instead of choosing the teststep type in a popup window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-843"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},'Moving a teststep up and down is now done from the menu under the "..." button on the teststep. Note that moving the top teststep Up, will make it move all the way down, and moving the bottom teststep Down, will make it move all the way up!')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-847"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},'Moving a teststep to another Test Case can now be done from the menu under the "..." button on the teststep.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-878"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"When a construction error is shown due to a microflow being deleted, the name of the microflow is now included in the error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-762"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"The max range of a saved date time assert is not saved correctly leading to errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Saving an assert on a date time attribute now works as expected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-781"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Only the first 100 attributes of an object were shown in a Create/Change/Retrieve object teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"All attributes are now shown in a Create/Change/Retrieve object teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-785"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When recording a list view with a reference selector, MTA is not able to determine which entity to retrieve for the input change object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"Recording a list view with a reference selector now works as expected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-809"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"The Copy Test Suite popup only shows the first 10 target Test Configurations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"All target Test Configurations are now shown in the Copy Test Suite popup.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-810"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"When trying to update a revision but the MTA user associated Mendix user does not have access to the Mendix App, the user will get the message that their credentials are not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"When trying to update a revision but the MTA user associated Mendix user does not have access to the Mendix App, the user will get an appropriate error message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"MTA-631"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Problem")),(0,r.kt)("td",{parentName:"tr",align:null},"Chromium browsers consistenly ignore the Do Not Autocomplete setting in Mendix, leading to MTA usernames and passwords showing in the respective associated Mendix username and API key fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Solution")),(0,r.kt)("td",{parentName:"tr",align:null},"When entering the associated Mendix username and API key, an extra action needs to be performed to show these fields, preventing Chromium browsers from autofilling them with incorrect values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Release actions")),(0,r.kt)("td",{parentName:"tr",align:null},"None.")))),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);