"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[867],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},u="Test Suite",l={unversionedId:"refguide/Older versions/Version 1.6/test-suite",id:"refguide/Older versions/Version 1.6/test-suite",title:"Test Suite",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/Older versions/Version 1.6/test-suite.md",sourceDirName:"refguide/Older versions/Version 1.6",slug:"/refguide/Older versions/Version 1.6/test-suite",permalink:"/refguide/Older versions/Version 1.6/test-suite",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Run",permalink:"/refguide/Older versions/Version 1.6/test-run"},next:{title:"Teststep",permalink:"/refguide/Teststep/"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Suite",id:"actions-on-test-suite",level:2},{value:"Create a new Test Suite",id:"create-a-new-test-suite",level:3},{value:"Configure a Test Suite",id:"configure-a-test-suite",level:3},{value:"Change the order of a Test Suite in a Test Configuration",id:"change-the-order-of-a-test-suite-in-a-test-configuration",level:3},{value:"Execute a Test Suite",id:"execute-a-test-suite",level:3},{value:"Copy a Test Suite",id:"copy-a-test-suite",level:3},{value:"Delete a Test Suite",id:"delete-a-test-suite",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-suite"},"Test Suite"),(0,r.kt)("p",null,"This document is based on MTA version 1.6."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Test Suite is an executable part of a ",(0,r.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," and consists of a collection of ",(0,r.kt)("a",{parentName:"p",href:"test-case"},"Test Cases")," that are intended to be used to test a software program to show that it has some specified set of behaviours."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Test Suite.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the Test Suite.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision. If Ready, this means the Test Suite can be configured.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name is mandatory.")),(0,r.kt)("h2",{id:"actions-on-test-suite"},"Actions on Test Suite"),(0,r.kt)("h3",{id:"create-a-new-test-suite"},"Create a new Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test design page in MTA and select the ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")," that you want to create the Test Suite in."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"+ Test Suite"),'" to create a new Test Suite.'),(0,r.kt)("li",{parentName:"ul"},'Enter a name and an optional description and choose "Save".')),(0,r.kt)("h3",{id:"configure-a-test-suite"},"Configure a Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test design page in MTA and select the Test Configuration where you want to configure a Test Suite."),(0,r.kt)("li",{parentName:"ul"},"Select Configure on the Test Suite you want to configure.")),(0,r.kt)("h3",{id:"change-the-order-of-a-test-suite-in-a-test-configuration"},"Change the order of a Test Suite in a Test Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Configuration that the Test Suite is in."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,r.kt)("i",{class:"fas fa-arrow-down"})," on the left of the title of the Test Suite to move it up or down.")),(0,r.kt)("h3",{id:"execute-a-test-suite"},"Execute a Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a Test Suite."),(0,r.kt)("li",{parentName:"ul"},'Click on "Execute and to to ',(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run"),' overview".'),(0,r.kt)("li",{parentName:"ul"},'Click "Proceed on the confirmation window".')),(0,r.kt)("h3",{id:"copy-a-test-suite"},"Copy a Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test design page in MTA and select the Test Configuration where you want to copy a Test Suite."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-copy"})," on the Test Suite you want to copy."),(0,r.kt)("li",{parentName:"ul"},"Click Select and proceed to copy the Test Suite in the same Test Configuration, or expand the list of other Test Configuration and select one there."),(0,r.kt)("li",{parentName:"ul"},'Give the copy a name and choose "Save".')),(0,r.kt)("h3",{id:"delete-a-test-suite"},"Delete a Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test design page in MTA and select the Test Configuration where you want to delete a Test Suite."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," on the Test Suite you want to delete.")),(0,r.kt)("p",null,"Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered."),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test case")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test run"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}f.isMDXComponent=!0}}]);