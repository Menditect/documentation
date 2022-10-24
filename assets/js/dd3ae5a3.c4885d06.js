"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2236],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9386:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},s="Recording",c={unversionedId:"refguide/recording",id:"refguide/recording",title:"Recording",description:"This document is based on MTA version 1.8.",source:"@site/docs/refguide/recording.md",sourceDirName:"refguide",slug:"/refguide/recording",permalink:"/refguide/recording",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow Parameter Value",permalink:"/refguide/microflow-parameter-value"},next:{title:"Test Application",permalink:"/refguide/test-application"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on a Recording",id:"actions-on-a-recording",level:2},{value:"Create a Recording",id:"create-a-recording",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"recording"},"Recording"),(0,i.kt)("p",null,"This document is based on MTA version 1.8."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A Recording is meant to speedup test scripting and should be used as the starting point of a Test Case. A Recording is created by MTA and consists of one or more ",(0,i.kt)("a",{parentName:"p",href:"teststep"},"Teststeps")," in a single ",(0,i.kt)("a",{parentName:"p",href:"test-case"},"Test Case"),". MTA bases these Teststeps on intercepted user actions that are executed on an ",(0,i.kt)("a",{parentName:"p",href:"application-environment"},"Application Environment"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max. duration recording (s)"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of seconds that MTA will intercept user actions before the recording times out.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max. number of recorded actions"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of intercepted user actions to store in MTA.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the recording times out, no Teststeps will be created. "),(0,i.kt)("li",{parentName:"ul"},"If more user actions are intercepted than the set maximum, Teststeps will be created based until the maximum is reached.")),(0,i.kt)("p",null,"Note that one recorded action can lead to zero or many Teststeps, and that the 'Max. number of recorded actions' is not the same as the maximum number of created Teststeps."),(0,i.kt)("h2",{id:"actions-on-a-recording"},"Actions on a Recording"),(0,i.kt)("h3",{id:"create-a-recording"},"Create a Recording"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-video"}),' ("Create a recording") in the Test Case to open the recording page.'),(0,i.kt)("li",{parentName:"ul"},'Click "Start recording".'),(0,i.kt)("li",{parentName:"ul"},"In the browser, navigate to the Test Application."),(0,i.kt)("li",{parentName:"ul"},"Perform the actions to be recorded there. Make sure to start the recorder before opening the page where the first record action takes place."),(0,i.kt)("li",{parentName:"ul"},"In the browser, navigate back to MTA."),(0,i.kt)("li",{parentName:"ul"},'Click "Stop recording".')),(0,i.kt)("p",null,"The recording page will close and the Teststeps created by the recorder will appear automatically. "),(0,i.kt)("p",null,"Learn more about creating Recordings in the Best Practice section."),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 22 september 2022"))}m.isMDXComponent=!0}}]);