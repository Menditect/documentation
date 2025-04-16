"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1923],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(a),d=l,m=c["".concat(o,".").concat(d)]||c[d]||k[d]||r;return a?n.createElement(m,s(s({ref:e},p),{},{components:a})):n.createElement(m,s({ref:e},p))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:l,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8557:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={},s="Assert on Microflow output",i={unversionedId:"Assert/assert-microflow-output",id:"Assert/assert-microflow-output",title:"Assert on Microflow output",description:"Definition",source:"@site/docs/Assert/assert-microflow-output.md",sourceDirName:"Assert",slug:"/Assert/assert-microflow-output",permalink:"/Assert/assert-microflow-output",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Attribute",permalink:"/Assert/assert-attribute"},next:{title:"Assert on Object Count",permalink:"/Assert/assert-object-count"}},o={},u=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Assert on Microflow output",id:"actions-on-an-assert-on-microflow-output",level:2},{value:"Set the Assert",id:"set-the-assert",level:3},{value:"Delete the Assert",id:"delete-the-assert",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:u},c="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"assert-on-microflow-output"},"Assert on Microflow output"),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("p",null,"An Assert on Microflow output formulates an expected result of the output value of a Microflow ",(0,l.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," upon execution,\nif the microflow returns a primitive datatype (String, Integer, Decimal, Boolean, Datetime or Enumeration)."),(0,l.kt)("p",null,"If the microflow returns an Object or a List of Objects, it is currently only possible to define an ",(0,l.kt)("a",{parentName:"p",href:"assert-object-count"},"Assert on Object count"),"."),(0,l.kt)("p",null,"It is possible to either define the result to have a single value, or a range that the value should be in. "),(0,l.kt)("p",null,"A Microflow Teststep can have zero or one Assert defined on the output."),(0,l.kt)("p",null,"When a Teststep uses ",(0,l.kt)("a",{parentName:"p",href:"../datavariation"},"Data Variation")," to manipulate Teststep input, the Assert can be applied as a ",(0,l.kt)("a",{parentName:"p",href:"../datavariation-item-row"},"Data Variation Item")," for each defined variation."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compare type"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of comparison to be made. ",(0,l.kt)("br",null),"  - The 'Equals' / 'Not equals' type means that the value should exactly match (or not match, respectively) a single given value. ",(0,l.kt)("br",null),"   - The 'Range' / 'Not range' type  means that the value should be within (or outside, respectively) the given boundaries. A 'Range' type is only applicable for Integer, Decimal or Datetime datatypes.  ",(0,l.kt)("br",null),"   - The 'Greater than' / 'Greater than or equal to' means that the attribute value should be higher than (or include, respectively) the given value.  ",(0,l.kt)("br",null),"   - The 'Less than' / 'Less than or equal to' means that the value should be lower than (or include, respectively) the given value.  ",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected value upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected lower boundary of the value if the selected compare type is 'Range'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected higher boundary of the value if the selected compare type is 'Range'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trim string values"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to be able trim String values for leading and trailing space characters before evaluating the result (only applicable for the String datatype).")))),(0,l.kt)("h2",{id:"business-rules"},"Business rules"),(0,l.kt)("p",null,"The following Assert Compare types are supported for the Mendix data types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"String"),(0,l.kt)("th",{parentName:"tr",align:null},"Integer"),(0,l.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,l.kt)("th",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("th",{parentName:"tr",align:null},"Datetime"),(0,l.kt)("th",{parentName:"tr",align:null},"Enumeration"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Does not equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contains"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Does not Contain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Within Range"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Outside of Range"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or Equal to"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than or Equal to"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"actions-on-an-assert-on-microflow-output"},"Actions on an Assert on Microflow output"),(0,l.kt)("h3",{id:"set-the-assert"},"Set the Assert"),(0,l.kt)("p",null,"There are multiple ways to add an Assert Microflow output:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on ',(0,l.kt)("i",{class:"fal fa-ballot-check"}),' under "Return value of microflow" to set the Assert;'),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("i",{class:"fas fa-ellipsis"}),' button on the Teststep where you want to set the assert, and click "',(0,l.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured. Click on the "',(0,l.kt)("i",{class:"fal fa-plus-circle"}),' Assert" button to set the Assert;'),(0,l.kt)("li",{parentName:"ol"},'Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Click on the "',(0,l.kt)("i",{class:"fal fa-plus-circle"}),' Assert" button to set the Assert.')),(0,l.kt)("h3",{id:"delete-the-assert"},"Delete the Assert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("i",{class:"fas fa-ellipsis"}),' button on the Teststep where you want to delete the assert, and click "',(0,l.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured;'),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("i",{class:"fal fa-trash-can"})," button.")),(0,l.kt)("h2",{id:"related-topics"},"Related topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"assert-object-count"},"Assert Object Count")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../Teststep"},"Teststep"))),(0,l.kt)("h2",{id:"feedback"},"Feedback?"),(0,l.kt)("p",null,"Missing anything? ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,l.kt)("p",null,"Last updated: 19 january 2023"))}k.isMDXComponent=!0}}]);