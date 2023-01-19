"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},o="Assert on Object Count",l={unversionedId:"assert-object-count",id:"version-1.8.0/assert-object-count",title:"Assert on Object Count",description:"Definition",source:"@site/versioned_docs/version-1.8.0/assert-object-count.md",sourceDirName:".",slug:"/assert-object-count",permalink:"/1.8.0/assert-object-count",draft:!1,tags:[],version:"1.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Attribute Value",permalink:"/1.8.0/assert-attribute-value"},next:{title:"Attribute Value",permalink:"/1.8.0/attribute-value"}},i={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Assert Object Count",id:"actions-on-assert-object-count",level:2},{value:"View Teststeps that have asserts",id:"view-teststeps-that-have-asserts",level:3},{value:"Add an assert on Object Count",id:"add-an-assert-on-object-count",level:3},{value:"Configure an assert on Object Count",id:"configure-an-assert-on-object-count",level:3},{value:"Delete an assert on Attribute Value",id:"delete-an-assert-on-attribute-value",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assert-on-object-count"},"Assert on Object Count"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An assert on object count is defined on a ",(0,r.kt)("a",{parentName:"p",href:"teststep"},"Teststep")," and exists of making a comparison between the expected and actual list size of output objects of a Teststep upon test execution."),(0,r.kt)("p",null,"Asserts on object count can be defined either on Retrieve Object Teststeps or on Microflow Teststeps that return a list of objects. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compare type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of comparison to be made: either 'Equals', 'Greater-than' / 'Greater-than or equal to' or 'Less-than' / 'Less-than or equal to'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Expected object count"),(0,r.kt)("td",{parentName:"tr",align:null},"The expected value of the attribute when executing the test.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The compare type is mandatory."),(0,r.kt)("li",{parentName:"ul"},"Expected object count is mandatory."),(0,r.kt)("li",{parentName:"ul"},"Expected object count must be equal to or greater than 0.")),(0,r.kt)("h2",{id:"actions-on-assert-object-count"},"Actions on Assert Object Count"),(0,r.kt)("h3",{id:"view-teststeps-that-have-asserts"},"View Teststeps that have asserts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("a",{parentName:"li",href:"teststep"},"Teststeps")," in a ",(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," that have one or more asserts added, are marked with ",(0,r.kt)("svg",{role:"img",viewBox:"0 0 384 512",width:"1%",height:"1%",xmlns:"http://www.w3.org/2000/svg"},(0,r.kt)("path",{fill:"currentColor",d:"M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",class:""}))," in the list of Teststeps.")),(0,r.kt)("h3",{id:"add-an-assert-on-object-count"},"Add an assert on Object Count"),(0,r.kt)("p",null,"There are multiple ways to add an assert on Object Count:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When hovering the mouse on the Teststep, click on ",(0,r.kt)("svg",{role:"img",viewBox:"0 0 384 512",width:"1%",height:"1%",xmlns:"http://www.w3.org/2000/svg"},(0,r.kt)("path",{fill:"currentColor",d:"M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",class:""}))," to open the page where asserts can be configured;"),(0,r.kt)("li",{parentName:"ol"},'After configuring the Teststep, click on "Save and configure asserts" to open the page where asserts can be configured in bulk for all the attributes in the Teststep.\nAfter the page opens, go to the Teststep output tab, and click on "',(0,r.kt)("em",{parentName:"li"},"+ Assert"),'" to add the assert.')),(0,r.kt)("h3",{id:"configure-an-assert-on-object-count"},"Configure an assert on Object Count"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a compare type; 'Equals', 'Greater-than' or 'Less-than'."),(0,r.kt)("li",{parentName:"ul"},"Enter an expected object count."),(0,r.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,r.kt)("h3",{id:"delete-an-assert-on-attribute-value"},"Delete an assert on Attribute Value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the assertion configuration page and go to the Teststep output tab."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," to delete the assert.")),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 20 september 2022"))}p.isMDXComponent=!0}}]);