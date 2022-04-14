"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[459],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),k=o(a),d=r,h=k["".concat(u,".").concat(d)]||k[d]||p[d]||l;return a?n.createElement(h,i(i({ref:e},c),{},{components:a})):n.createElement(h,i({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1442:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return k}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],s={},u="Assert on Attribute Value",o={unversionedId:"refguide/assert-attribute-value",id:"refguide/assert-attribute-value",title:"Assert on Attribute Value",description:"Definition",source:"@site/docs/refguide/assert-attribute-value.md",sourceDirName:"refguide",slug:"/refguide/assert-attribute-value",permalink:"/refguide/assert-attribute-value",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application",permalink:"/refguide/application"},next:{title:"Assert on Object Count",permalink:"/refguide/assert-object-count"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on an Assert on Attribute Value",id:"actions-on-an-assert-on-attribute-value",children:[{value:"View Teststeps that have Asserts",id:"view-teststeps-that-have-asserts",children:[],level:3},{value:"View attributes that have Asserts",id:"view-attributes-that-have-asserts",children:[],level:3},{value:"Add an Assert on Attribute Value",id:"add-an-assert-on-attribute-value",children:[],level:3},{value:"Delete an Assert on Attribute Value",id:"delete-an-assert-on-attribute-value",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"assert-on-attribute-value"},"Assert on Attribute Value"),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("p",null,"An Assert on Attribute Value formulates an expected result of an attribute in a ",(0,l.kt)("a",{parentName:"p",href:"teststep"},"Teststep")," upon execution. It is possible to either define the result to have a single value, or a range that the value should be in. A Teststep can have multiple Asserts on Attribute Value."),(0,l.kt)("p",null,"An Assert on Attribute Value can be added for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")," of a created or changed object;"),(0,l.kt)("li",{parentName:"ul"},"an Attribute Value of a retrieved object. In that case the assert evaluates the Attribute Value of all retrieved objects;"),(0,l.kt)("li",{parentName:"ul"},"the value of a primitive microflow output parameter like string, integer, etc.")),(0,l.kt)("p",null,"Note that there are also ",(0,l.kt)("a",{parentName:"p",href:"assert-object-count"},"Asserts on Object Count"),", that are added on a retrieve object action, or on a microflow call action. "),(0,l.kt)("p",null,"When a Teststep uses ",(0,l.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation")," to manipulate Teststep input, the Assert can be applied as a ",(0,l.kt)("a",{parentName:"p",href:"datavariation-item"},"Data Variation Item")," for each defined variation."),(0,l.kt)("p",null,"Each Assert is evaluated after the execution of a Teststep. A Teststep execution fails when the evaluated value does not match to the defined expectation. "),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compare type"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of comparison to be made. ",(0,l.kt)("br",null),"  - The 'Equals' / 'Not equals' type means that the attribute value should exactly match (or not match, respectively) a single given value. ",(0,l.kt)("br",null),"   - The 'Range' / 'Not range' type  means that the attribute value should be within (or outside, respectively) the given boundaries. A 'Range' type is only applicable for numeric or date attributes.  ",(0,l.kt)("br",null),"   - The 'Greater than' / 'Greater than or equal to' means that the attribute value should be higher than (or include, respectively) the given value.  ",(0,l.kt)("br",null),"   - The 'Less than' / 'Less than or equal to' means that the attribute value should be lower than (or include, respectively) the given value.  ",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected value of the attribute upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Min value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected lower boundary of the attribute value if the selected compare type is 'Range'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max value"),(0,l.kt)("td",{parentName:"tr",align:null},"The expected higher boundary of the attribute value if the selected compare type is 'Range'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Trim string values"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to be able trim string values for leading and trailing space characters before evaluating the result (only applicable for string attributes).")))),(0,l.kt)("h2",{id:"business-rules"},"Business rules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The compare type is mandatory."),(0,l.kt)("li",{parentName:"ul"},"If the compare type is 'Range', both Min and Max values are mandatory.")),(0,l.kt)("p",null,"The following Assert Compare types are supported for the Mendix data types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"String"),(0,l.kt)("th",{parentName:"tr",align:null},"Integer"),(0,l.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,l.kt)("th",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("th",{parentName:"tr",align:null},"Datetime"),(0,l.kt)("th",{parentName:"tr",align:null},"Enumeration"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Does not equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contains"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Does not Contain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Within Range"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Outside of Range"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or Equal to"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than or Equal to"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",{class:"fas fa-check"})),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"actions-on-an-assert-on-attribute-value"},"Actions on an Assert on Attribute Value"),(0,l.kt)("h3",{id:"view-teststeps-that-have-asserts"},"View Teststeps that have Asserts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All Teststeps in a ",(0,l.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," with one or more Assert, are marked with ",(0,l.kt)("svg",{role:"img",viewBox:"0 0 384 512",width:"1%",height:"1%",xmlns:"http://www.w3.org/2000/svg"},(0,l.kt)("path",{fill:"currentColor",d:"M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",class:""}))," in the list of Teststeps.")),(0,l.kt)("h3",{id:"view-attributes-that-have-asserts"},"View attributes that have Asserts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All attributes with one or more Assert are highlighted in the Attributes tab in the Details of teststep pane on the right in the Test Suite overview page."),(0,l.kt)("li",{parentName:"ul"},"If an Assert is included in Data Variation, ",(0,l.kt)("i",{class:"fas fa-table"})," is also shown.")),(0,l.kt)("h3",{id:"add-an-assert-on-attribute-value"},"Add an Assert on Attribute Value"),(0,l.kt)("p",null,"There are multiple ways to add an Assert on Attribute Value:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on ',(0,l.kt)("i",{class:"fas fa-table"})," next to the attribute to add the Assert;"),(0,l.kt)("li",{parentName:"ol"},"Hover your mouse on a Teststep and click on ",(0,l.kt)("i",{class:"fas fa-table"})," to open the page where asserts can be configured;"),(0,l.kt)("li",{parentName:"ol"},'Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "+ Assertion" button to add the Assert.')),(0,l.kt)("h3",{id:"delete-an-assert-on-attribute-value"},"Delete an Assert on Attribute Value"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the assertion configuration page and go to the Attributes tab."),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("i",{class:"fas fa-trash-alt"})," on the attribute to delete the Assert from.")),(0,l.kt)("h2",{id:"related-topics"},"Related topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"assert-object-count"},"Assert Object Count")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))))}k.isMDXComponent=!0}}]);