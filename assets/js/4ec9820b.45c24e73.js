"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,k=u["".concat(o,".").concat(p)]||u[p]||m[p]||s;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={},l="Assert on Validation feedback",i={unversionedId:"Assert/assert-validation-feedback",id:"Assert/assert-validation-feedback",title:"Assert on Validation feedback",description:"Definition",source:"@site/docs/Assert/assert-validation-feedback.md",sourceDirName:"Assert",slug:"/Assert/assert-validation-feedback",permalink:"/Assert/assert-validation-feedback",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Object Count",permalink:"/Assert/assert-object-count"},next:{title:"Branch Subscription",permalink:"/branch-subscription"}},o={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Actions on an Assert on Validation feedback",id:"actions-on-an-assert-on-validation-feedback",level:2},{value:"Add Count Assert",id:"add-count-assert",level:3},{value:"Add Attribute-member Assert",id:"add-attribute-member-assert",level:3},{value:"Add Association-member Assert",id:"add-association-member-assert",level:3},{value:"Add All-members Assert",id:"add-all-members-assert",level:3},{value:"Delete an Assert on Validation feedback",id:"delete-an-assert-on-validation-feedback",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assert-on-validation-feedback"},"Assert on Validation feedback"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An Assert on Validation feedback is used to evaluate ",(0,r.kt)("a",{parentName:"p",href:"../feedback-message"},"feedback messages"),' shown as a result of "Validation feedback" actions in Microflows that are executed during a Test Run.\nIt is possible to evaluate the message text and/or the member that the message is shown on.  '),(0,r.kt)("p",null,"Asserts on Validation feedback are defined on the ",(0,r.kt)("a",{parentName:"p",href:"../test-case"},"Test Case")," level. Test Cases can have zero, one or multiple Asserts on validation feedback."),(0,r.kt)("p",null,"Asserts on Validation feedback can be added to ",(0,r.kt)("a",{parentName:"p",href:"../datavariation"},"Data Variation"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assert type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of Validation feedback assert to be created. ",(0,r.kt)("br",null),"  - Count: evaluates only the number of validation feedback messages upon execution. ",(0,r.kt)("br",null),"  - Attribute-member: evaluates the message text of validation feedback shown on a certain attribute member. ",(0,r.kt)("br",null),"  - Association-member: evaluates the message text of validation feedback shown on a certain association. ",(0,r.kt)("br",null),"  - All-members: evaluates the message text of validation feedback regardless of the member or association.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entity"),(0,r.kt)("td",{parentName:"tr",align:null},"The entity that the Validation feedback is shown on. ",(0,r.kt)("br",null),"  Only for Attribute-member and Association-member asserts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute member that the Validation feedback is shown on. ",(0,r.kt)("br",null),"  Only for Attribute-member asserts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Association"),(0,r.kt)("td",{parentName:"tr",align:null},"The association that the Validation feedback is shown on. ",(0,r.kt)("br",null),"  Only for Assocation-member asserts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quantifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether to match the given the message text for all Validation feedback messages, or that there should be at least one Validation feedback message that matches.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison operator"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of evaluation to perform. ",(0,r.kt)("br",null),"  - The 'Equals' / 'Not equals' type means that the message text or message count should exactly match (or not match, respectively) a single given value. ",(0,r.kt)("br",null),"   - The 'Contains' / 'Not contains' type means that the message text should contain (or not contain, respectively) the given value.  ",(0,r.kt)("br",null),"   - The 'Greater than' / 'Greater than or equal to' means that the message count should be higher than (or include, respectively) the given value.  ",(0,r.kt)("br",null),"   - The 'Less than' / 'Less than or equal to' means that the message count should be lower than (or include, respectively) the given value.  ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison string"),(0,r.kt)("td",{parentName:"tr",align:null},"The (part of the) validation feedback message text to evaluate. ",(0,r.kt)("br",null),"  Only for Attribute-member, All-members and Association-member asserts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of validation feedback messages to evaluate. ",(0,r.kt)("br",null)," Only for Count asserts.")))),(0,r.kt)("h2",{id:"actions-on-an-assert-on-validation-feedback"},"Actions on an Assert on Validation feedback"),(0,r.kt)("h3",{id:"add-count-assert"},"Add Count Assert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"})," button on the Test Case. "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. '),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Assert" to add the Assert.'),(0,r.kt)("li",{parentName:"ul"},'Choose "Count assert" for the Assert type.'),(0,r.kt)("li",{parentName:"ul"},"Select the Comparison operator and fill in the Comparison number."),(0,r.kt)("li",{parentName:"ul"},"Save.")),(0,r.kt)("h3",{id:"add-attribute-member-assert"},"Add Attribute-member Assert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"})," button on the Test Case. "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. '),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Assert" to add the Assert.'),(0,r.kt)("li",{parentName:"ul"},'Choose "Attribute-member" for the Assert type.'),(0,r.kt)("li",{parentName:"ul"},"Choose the Entity that the feedback message should occur on."),(0,r.kt)("li",{parentName:"ul"},"Choose the Attribute that the feedback message should occur on."),(0,r.kt)("li",{parentName:"ul"},"Select the Quantifier, Comparison operator and fill in the Comparison string."),(0,r.kt)("li",{parentName:"ul"},"Save.")),(0,r.kt)("h3",{id:"add-association-member-assert"},"Add Association-member Assert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"})," button on the Test Case. "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. '),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Assert" to add the Assert.'),(0,r.kt)("li",{parentName:"ul"},'Choose "Association-member" for the Assert type.'),(0,r.kt)("li",{parentName:"ul"},"Choose the Entity that the feedback message should occur on."),(0,r.kt)("li",{parentName:"ul"},"Choose the Association that the feedback message should occur on."),(0,r.kt)("li",{parentName:"ul"},"Select the Quantifier, Comparison operator and fill in the Comparison string."),(0,r.kt)("li",{parentName:"ul"},"Save.")),(0,r.kt)("h3",{id:"add-all-members-assert"},"Add All-members Assert"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"})," button on the Test Case. "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. '),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Assert" to add the Assert.'),(0,r.kt)("li",{parentName:"ul"},'Choose "All-members" for the Assert type.'),(0,r.kt)("li",{parentName:"ul"},"Select the Quantifier, Comparison operator and fill in the Comparison string."),(0,r.kt)("li",{parentName:"ul"},"Save.")),(0,r.kt)("h3",{id:"delete-an-assert-on-validation-feedback"},"Delete an Assert on Validation feedback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fas fa-ellipsis"})," button on the Test Case. "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. '),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," to delete the assert.")),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../Assert/"},"Assert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../test-case"},"Test Case"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated: 12 April 2023"))}m.isMDXComponent=!0}}]);