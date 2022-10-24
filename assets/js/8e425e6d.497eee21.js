"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8665],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},l="Assert on Object Count",c={unversionedId:"refguide/Older versions/Version 1.7/assert-object-count",id:"refguide/Older versions/Version 1.7/assert-object-count",title:"Assert on Object Count",description:"This document is based on MTA version 1.7.",source:"@site/docs/refguide/Older versions/Version 1.7/assert-object-count.md",sourceDirName:"refguide/Older versions/Version 1.7",slug:"/refguide/Older versions/Version 1.7/assert-object-count",permalink:"/refguide/Older versions/Version 1.7/assert-object-count",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Attribute Value",permalink:"/refguide/Older versions/Version 1.7/assert-attribute-value"},next:{title:"Attribute Value",permalink:"/refguide/Older versions/Version 1.7/attribute-value"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Assert Object Count",id:"actions-on-assert-object-count",level:2},{value:"View Teststeps that have asserts",id:"view-teststeps-that-have-asserts",level:3},{value:"Add an assert on Object Count",id:"add-an-assert-on-object-count",level:3},{value:"Configure an assert on Object Count",id:"configure-an-assert-on-object-count",level:3},{value:"Delete an assert on Attribute Value",id:"delete-an-assert-on-attribute-value",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assert-on-object-count"},"Assert on Object Count"),(0,s.kt)("p",null,"This document is based on MTA version 1.7."),(0,s.kt)("h2",{id:"definition"},"Definition"),(0,s.kt)("p",null,"An assert on object count is defined on a ",(0,s.kt)("a",{parentName:"p",href:"teststep"},"Teststep")," and exists of making a comparison between the expected and actual list size of output objects of a Teststep upon test execution."),(0,s.kt)("p",null,"Asserts on object count can be defined either on Retrieve Object Teststeps or on Microflow Teststeps that return a list of objects. "),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Compare type"),(0,s.kt)("td",{parentName:"tr",align:null},"The type of comparison to be made: either 'Equals', 'Greater-than' / 'Greater-than or equal to' or 'Less-than' / 'Less-than or equal to'.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Expected object count"),(0,s.kt)("td",{parentName:"tr",align:null},"The expected value of the attribute when executing the test.")))),(0,s.kt)("h2",{id:"business-rules"},"Business rules"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The compare type is mandatory."),(0,s.kt)("li",{parentName:"ul"},"Expected object count is mandatory."),(0,s.kt)("li",{parentName:"ul"},"Expected object count must be equal to or greater than 0.")),(0,s.kt)("h2",{id:"actions-on-assert-object-count"},"Actions on Assert Object Count"),(0,s.kt)("h3",{id:"view-teststeps-that-have-asserts"},"View Teststeps that have asserts"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All ",(0,s.kt)("a",{parentName:"li",href:"teststep"},"Teststeps")," in a ",(0,s.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," that have one or more asserts added, are marked with ",(0,s.kt)("svg",{role:"img",viewBox:"0 0 384 512",width:"1%",height:"1%",xmlns:"http://www.w3.org/2000/svg"},(0,s.kt)("path",{fill:"currentColor",d:"M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",class:""}))," in the list of Teststeps.")),(0,s.kt)("h3",{id:"add-an-assert-on-object-count"},"Add an assert on Object Count"),(0,s.kt)("p",null,"There are multiple ways to add an assert on Object Count:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"When hovering the mouse on the Teststep, click on ",(0,s.kt)("svg",{role:"img",viewBox:"0 0 384 512",width:"1%",height:"1%",xmlns:"http://www.w3.org/2000/svg"},(0,s.kt)("path",{fill:"currentColor",d:"M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",class:""}))," to open the page where asserts can be configured;"),(0,s.kt)("li",{parentName:"ol"},'After configuring the Teststep, click on "Save and configure asserts" to open the page where asserts can be configured in bulk for all the attributes in the Teststep.\nAfter the page opens, go to the Teststep output tab, and click on "',(0,s.kt)("em",{parentName:"li"},"+ Assert"),'" to add the assert.')),(0,s.kt)("h3",{id:"configure-an-assert-on-object-count"},"Configure an assert on Object Count"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select a compare type; 'Equals', 'Greater-than' or 'Less-than'."),(0,s.kt)("li",{parentName:"ul"},"Enter an expected object count."),(0,s.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,s.kt)("h3",{id:"delete-an-assert-on-attribute-value"},"Delete an assert on Attribute Value"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the assertion configuration page and go to the Teststep output tab."),(0,s.kt)("li",{parentName:"ul"},"Click on ",(0,s.kt)("i",{class:"fas fa-trash-alt"})," to delete the assert.")),(0,s.kt)("h2",{id:"related-topics"},"Related topics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,s.kt)("h2",{id:"feedback"},"Feedback?"),(0,s.kt)("p",null,"Missing anything? ",(0,s.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,s.kt)("p",null,"Last updated 12 july 2022"))}h.isMDXComponent=!0}}]);