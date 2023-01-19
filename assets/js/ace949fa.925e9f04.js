"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7796],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=o(a),d=r,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||l;return a?n.createElement(m,s(s({ref:e},p),{},{components:a})):n.createElement(m,s({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8208:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},s="Assert on Attribute",i={unversionedId:"Assert/assert-attribute",id:"Assert/assert-attribute",title:"Assert on Attribute",description:"Definition",source:"@site/docs/Assert/assert-attribute.md",sourceDirName:"Assert",slug:"/Assert/assert-attribute",permalink:"/Assert/assert-attribute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert",permalink:"/Assert/"},next:{title:"Assert on Microflow output",permalink:"/Assert/assert-microflow-output"}},u={},o=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Assert on Attribute",id:"actions-on-an-assert-on-attribute",level:2},{value:"Add an Assert on Attribute",id:"add-an-assert-on-attribute",level:3},{value:"Delete an Assert on Attribute",id:"delete-an-assert-on-attribute",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:o};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assert-on-attribute"},"Assert on Attribute"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An Assert on Attribute formulates an expected result of an attribute in an Object action ",(0,r.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," upon execution. It is possible to either define the result to have a single value, or a range that the value should be in. A Teststep can have multiple Asserts on Attribute."),(0,r.kt)("p",null,"An Assert on Attribute can be added for a value of an attribute in an Object action Teststep."),(0,r.kt)("p",null,"When a Teststep uses ",(0,r.kt)("a",{parentName:"p",href:"../datavariation"},"Data Variation")," to manipulate Teststep input, the Assert can be applied as a ",(0,r.kt)("a",{parentName:"p",href:"../datavariation-item"},"Data Variation Item")," for each defined variation."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compare type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of comparison to be made. ",(0,r.kt)("br",null),"  - The 'Equals' / 'Not equals' type means that the attribute value should exactly match (or not match, respectively) a single given value. ",(0,r.kt)("br",null),"   - The 'Range' / 'Not range' type  means that the attribute value should be within (or outside, respectively) the given boundaries. A 'Range' type is only applicable for numeric or date attributes.  ",(0,r.kt)("br",null),"   - The 'Greater than' / 'Greater than or equal to' means that the attribute value should be higher than (or include, respectively) the given value.  ",(0,r.kt)("br",null),"   - The 'Less than' / 'Less than or equal to' means that the attribute value should be lower than (or include, respectively) the given value.  ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The expected value of the attribute upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min value"),(0,r.kt)("td",{parentName:"tr",align:null},"The expected lower boundary of the attribute value if the selected compare type is 'Range'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max value"),(0,r.kt)("td",{parentName:"tr",align:null},"The expected higher boundary of the attribute value if the selected compare type is 'Range'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trim string values"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to be able trim string values for leading and trailing space characters before evaluating the result (only applicable for string attributes).")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("p",null,"The following Assert Compare types are supported for the Mendix data types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"String"),(0,r.kt)("th",{parentName:"tr",align:null},"Integer"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("th",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("th",{parentName:"tr",align:null},"Enumeration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equals"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Does not equal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Does not Contain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Within Range"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outside of Range"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or Equal to"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or Equal to"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",{class:"fas fa-check"})),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"actions-on-an-assert-on-attribute"},"Actions on an Assert on Attribute"),(0,r.kt)("h3",{id:"add-an-assert-on-attribute"},"Add an Assert on Attribute"),(0,r.kt)("p",null,"There are multiple ways to add an Assert on Attribute:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),'" next to the attribute to add the Assert;'),(0,r.kt)("li",{parentName:"ol"},'Click on the "',(0,r.kt)("i",{class:"fas fa-ellipsis"}),'" button on the Teststep where you want to add an assert, and click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. Click on "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),'" next to the attribute to add the Assert;'),(0,r.kt)("li",{parentName:"ol"},'Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Assert" button to add the Assert.')),(0,r.kt)("h3",{id:"delete-an-assert-on-attribute"},"Delete an Assert on Attribute"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on the "',(0,r.kt)("i",{class:"fas fa-ellipsis"}),'" button on the Teststep where you want to delete an assert, and click "',(0,r.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured;'),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("i",{class:"fas fa-ballot-check"}),'" on the attribute to delete the Assert from.'),(0,r.kt)("li",{parentName:"ul"},'Click on the "',(0,r.kt)("i",{class:"fal fa-trash-can"}),'" button.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-object-count"},"Assert Object Count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../Teststep"},"Teststep"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 27 december 2022"))}c.isMDXComponent=!0}}]);