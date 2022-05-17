"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1160],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],u={},s="Test Run",o={unversionedId:"refguide/test-run",id:"refguide/test-run",title:"Test Run",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/test-run.md",sourceDirName:"refguide",slug:"/refguide/test-run",permalink:"/refguide/test-run",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Instruction",permalink:"/refguide/test-instruction"},next:{title:"Test Suite",permalink:"/refguide/test-suite"}},p=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Test Run",id:"actions-on-test-run",children:[{value:"View Test Runs",id:"view-test-runs",children:[],level:3},{value:"Create a new Test Run",id:"create-a-new-test-run",children:[],level:3},{value:"Delete a Test Run",id:"delete-a-test-run",children:[],level:3},{value:"Pin a Test Run",id:"pin-a-test-run",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-run"},"Test Run"),(0,i.kt)("p",null,"This document is based on MTA version 1.6."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"The Test Run contains the tests that can be/are executed according a ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Test Run.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flagged for delete"),(0,i.kt)("td",{parentName:"tr",align:null},"This indicates if the Test Run is flagged for deletion by the user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pinned"),(0,i.kt)("td",{parentName:"tr",align:null},"If a Test Run is pinned by a user it will not be deleted overnight.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result"),(0,i.kt)("td",{parentName:"tr",align:null},"The test result ('Pass' or 'Fail').")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start date"),(0,i.kt)("td",{parentName:"tr",align:null},"The moment when the Test Run starts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null},"This indicates if the test is running or not; can be 'Running' or 'Finished'.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There can only be two Test Runs per ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),' that are "Pinned".')),(0,i.kt)("h2",{id:"actions-on-test-run"},"Actions on Test Run"),(0,i.kt)("h3",{id:"view-test-runs"},"View Test Runs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Run overview in MTA under Test Run, to view a list of all the executed Test Runs in MTA.")),(0,i.kt)("h3",{id:"create-a-new-test-run"},"Create a new Test Run"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To create a new Test Run, execute a ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".")),(0,i.kt)("p",null,"Read more at ",(0,i.kt)("a",{parentName:"p",href:"test-configuration#execute-a-test-configuration"},"Execute a Test Configuration"),"."),(0,i.kt)("h3",{id:"delete-a-test-run"},"Delete a Test Run"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Run overview in MTA under Test Run."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-trash-alt"})," to delete the Test Run you want to delete.")),(0,i.kt)("p",null,"Note that for each Test Configuration, only the last two executed Test Runs are persisted overnight, plus a maximum of two pinned Test Runs. The rest is cleaned up. Read the ",(0,i.kt)("a",{parentName:"p",href:"#pin-a-test-run"},"Pin a Test Run")," section in this page for more information.\nIf a Test Run is cleaned up, the following information about the Test Run is stored for the statistics on the dashboard page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start date"),(0,i.kt)("li",{parentName:"ul"},"result (Pas, Fail, Error)"),(0,i.kt)("li",{parentName:"ul"},"number of testcaseruns OK"),(0,i.kt)("li",{parentName:"ul"},"number of testcaseruns NOK"),(0,i.kt)("li",{parentName:"ul"},"number of testcaseruns not executed"),(0,i.kt)("li",{parentName:"ul"},"per Test Case run: Test Case name, application, environment, revision, Test Run result")),(0,i.kt)("h3",{id:"pin-a-test-run"},"Pin a Test Run"),(0,i.kt)("p",null,"Pinning a Test Run will prevent it from being cleaned up overnight."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Run overview in MTA under Test Run."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-thumbtack"})," next to the Test Run you want to keep.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);