"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),f=i,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:21},o="Test Suite",s={unversionedId:"test-suite",id:"test-suite",title:"Test Suite",description:"Definition",source:"@site/docs/test-suite.md",sourceDirName:".",slug:"/test-suite",permalink:"/test-suite",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Test Setting",permalink:"/test-setting"},next:{title:"Teststep",permalink:"/Teststep/"}},l={},u=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Suite",id:"actions-on-test-suite",level:2},{value:"Create a new Test Suite",id:"create-a-new-test-suite",level:3},{value:"Configure a Test Suite",id:"configure-a-test-suite",level:3},{value:"Execute a Test Suite",id:"execute-a-test-suite",level:3},{value:"Share a Test Suite",id:"share-a-test-suite",level:3},{value:"Change the order of a Test Suite in a Test Configuration",id:"change-the-order-of-a-test-suite-in-a-test-configuration",level:3},{value:"Copy a Test Suite",id:"copy-a-test-suite",level:3},{value:"Delete a Test Suite",id:"delete-a-test-suite",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-suite"},"Test Suite"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A Test Suite is an executable part of a ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," and consists of a collection of ",(0,i.kt)("a",{parentName:"p",href:"test-case"},"Test Cases")," that are intended to be used to test a software program to show that it has some specified set of behaviours."),(0,i.kt)("p",null,"The Test Suite is the second level of the 4-layer framework that is used in MTA. It allows for a Test Configurations to be split up into different functional or technical aspects of the tested software. It is possible to define ",(0,i.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation")," on the Test Suite level. "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Test Suite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Description"),(0,i.kt)("td",{parentName:"tr",align:null},"The description of the Test Suite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null},"Can be either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision. If Ready, this means the Test Suite can be configured.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"application-revision"},"revision")," of all Applications used in the Test Suite must match the ones used in the Test Configuration."),(0,i.kt)("h2",{id:"actions-on-test-suite"},"Actions on Test Suite"),(0,i.kt)("h3",{id:"create-a-new-test-suite"},"Create a new Test Suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test configurations page in MTA and select the ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")," that you want to create the Test Suite in."),(0,i.kt)("li",{parentName:"ul"},"Use the Add Test Suite button to create a new Test Suite."),(0,i.kt)("li",{parentName:"ul"},'Enter a name and an optional description and choose "Save".')),(0,i.kt)("h3",{id:"configure-a-test-suite"},"Configure a Test Suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test configurations page in MTA and select the Test Configuration where you want to configure a Test Suite."),(0,i.kt)("li",{parentName:"ul"},"Select Configure on the Test Suite you want to configure.")),(0,i.kt)("h3",{id:"execute-a-test-suite"},"Execute a Test Suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the Execute test suite button from the ",(0,i.kt)("i",{class:"fal fa-link-simple"})," menu or inside a Test Suite, to start a new ",(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run"),".")),(0,i.kt)("h3",{id:"share-a-test-suite"},"Share a Test Suite"),(0,i.kt)("p",null,"You can copy the URL to open a Test Suite directly from your browser's address bar. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the Test Suite you want to share."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("i",{class:"fas fa-ellipsis"})," button to open the menu."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fal fa-share-nodes"})," to copy the URL to the Test Suite to your clipboard."),(0,i.kt)("li",{parentName:"ul"},"Paste ",(0,i.kt)("inlineCode",{parentName:"li"},"Ctrl+V")," the URL anywhere to share it.")),(0,i.kt)("p",null,"Note that after using a URL to open the Test Suite, each time you hit ",(0,i.kt)("inlineCode",{parentName:"p"},"F5")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+R")," on your browser, you will end up on the same page, until you log out."),(0,i.kt)("h3",{id:"change-the-order-of-a-test-suite-in-a-test-configuration"},"Change the order of a Test Suite in a Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Configuration that the Test Suite is in."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,i.kt)("i",{class:"fas fa-arrow-down"})," on the left of the title of the Test Suite to move it up or down.")),(0,i.kt)("h3",{id:"copy-a-test-suite"},"Copy a Test Suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test configurations page in MTA and select the Test Configuration where you want to copy a Test Suite."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fas fa-copy"})," on the Test Suite you want to copy."),(0,i.kt)("li",{parentName:"ul"},"Click Select and proceed to copy the Test Suite in the same Test Configuration, or expand the list of other Test Configuration and select one there."),(0,i.kt)("li",{parentName:"ul"},'Give the copy a name and choose "Save".')),(0,i.kt)("h3",{id:"delete-a-test-suite"},"Delete a Test Suite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test configurations page in MTA and select the Test Configuration where you want to delete a Test Suite."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fas fa-trash-alt"})," on the Test Suite you want to delete.")),(0,i.kt)("p",null,"Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered."),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-case"},"Test case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test run"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 22 November 2023"))}d.isMDXComponent=!0}}]);