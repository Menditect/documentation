"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},i="Assert",o={unversionedId:"Assert/index",id:"version-2.5.0/Assert/index",title:"Assert",description:"Definition",source:"@site/versioned_docs/version-2.5.0/Assert/index.md",sourceDirName:"Assert",slug:"/Assert/",permalink:"/2.5.0/Assert/",draft:!1,tags:[],version:"2.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Archive",permalink:"/2.5.0/archive"},next:{title:"Assert on Attribute",permalink:"/2.5.0/Assert/assert-attribute"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions on Assert",id:"actions-on-assert",level:2},{value:"View Asserts on Attribute, Microflow output or Object count",id:"view-asserts-on-attribute-microflow-output-or-object-count",level:3},{value:"View Asserts on Validation feedback",id:"view-asserts-on-validation-feedback",level:3},{value:"Add an Assert",id:"add-an-assert",level:3},{value:"Stop a Test Run when an assert fails",id:"stop-a-test-run-when-an-assert-fails",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assert"},"Assert"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An Assert is a claim that a certain fact has to be true.\nAsserts are defined on the ",(0,r.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," or ",(0,r.kt)("a",{parentName:"p",href:"../test-case"},"Test Case")," level to check during test execution, if a certain output matches a given value."),(0,r.kt)("p",null,"Each Assert is evaluated after the execution of a Teststep or Test Case. The evaluation will fail when the evaluated value does not match to the defined expectation, but the execution will continue. "),(0,r.kt)("p",null,"Read more about dealing with failed ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Runs")," in the How To section."),(0,r.kt)("p",null,"There are four types of Asserts, that are described in detail in separate pages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"Assert/assert-attribute"},"Assert on Attribute")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"Assert/assert-microflow-output"},"Assert on Microflow output")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"Assert/assert-object-count"},"Assert on Object count")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"Assert/assert-validation-feedback"},"Assert on Validation feedback"))),(0,r.kt)("h2",{id:"actions-on-assert"},"Actions on Assert"),(0,r.kt)("p",null,"Some actions are described in the pages shown above."),(0,r.kt)("h3",{id:"view-asserts-on-attribute-microflow-output-or-object-count"},"View Asserts on Attribute, Microflow output or Object count"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Test Configuration and ",(0,r.kt)("a",{parentName:"li",href:"../test-suite"},"Test Suite")," that you want to design."),(0,r.kt)("li",{parentName:"ul"},"Teststeps in a ",(0,r.kt)("a",{parentName:"li",href:"../test-case"},"Test Case")," with one or more Assert, are marked with ",(0,r.kt)("i",{class:"fas fa-ballot-check"})," in the list of Teststeps."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"}),' button on the Teststep and click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured.   ')),(0,r.kt)("h3",{id:"view-asserts-on-validation-feedback"},"View Asserts on Validation feedback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Test Configuration and Test Suite that you want to design."),(0,r.kt)("li",{parentName:"ul"},"Test Cases in a Test Suite with one or more Assert, are marked with ",(0,r.kt)("i",{class:"fas fa-ballot-check"})," in the list of Test Cases."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"}),' button on the Test Case and click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured.   ')),(0,r.kt)("h3",{id:"add-an-assert"},"Add an Assert"),(0,r.kt)("p",null,"Read one of the mentioned detail pages above to learn how to add asserts."),(0,r.kt)("h3",{id:"stop-a-test-run-when-an-assert-fails"},"Stop a Test Run when an assert fails"),(0,r.kt)("p",null,'To indicate to have MTA stop the rest of the Test Run when an assert fails, select "Stop the test run" from the "When the assert fails:" dropdown on the respective Assert, whenever adding or editing the Assert.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When an assert fails, remaining teststeps in the same Test Case will always be executed. "),(0,r.kt)("p",{parentName:"admonition"},'Only when "Stop the test run" is selected, any next Test Cases will not be executed.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated: 29 November 2023"))}d.isMDXComponent=!0}}]);