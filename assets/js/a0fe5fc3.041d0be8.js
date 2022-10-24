"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7475],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var i=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||n;return a?i.createElement(h,o(o({ref:e},p),{},{components:a})):i.createElement(h,o({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<n;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5205:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var i=a(7462),r=a(3366),n=(a(7294),a(3905)),o=["components"],l={},s="Data Variation Item",u={unversionedId:"refguide/datavariation-item",id:"refguide/datavariation-item",title:"Data Variation Item",description:"This document is based on MTA version 1.8.",source:"@site/docs/refguide/datavariation-item.md",sourceDirName:"refguide",slug:"/refguide/datavariation-item",permalink:"/refguide/datavariation-item",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Construction Error",permalink:"/refguide/construction-error"},next:{title:"Data Variation",permalink:"/refguide/datavariation"}},p={},d=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Data Variation Item",id:"actions-on-data-variation-item",level:2},{value:"View Data Variation Items in a Test Suite",id:"view-data-variation-items-in-a-test-suite",level:3},{value:"View Data Variation Items in a Test Case",id:"view-data-variation-items-in-a-test-case",level:3},{value:"View the values of a Data Variation Item per Data Variation",id:"view-the-values-of-a-data-variation-item-per-data-variation",level:3},{value:"Create a Data Variation Item",id:"create-a-data-variation-item",level:3},{value:"Edit a Data Variation Item",id:"edit-a-data-variation-item",level:3},{value:"Delete a Data Variation Item",id:"delete-a-data-variation-item",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],m={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-variation-item"},"Data Variation Item"),(0,n.kt)("p",null,"This document is based on MTA version 1.8."),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Data Variation Item or variant refers to an attribute that can be varied when executing a ",(0,n.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),".\nData Variation Items are always part of ",(0,n.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation"),".\nThe value of a Data Variation Item is defined either in an ",(0,n.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Value")," or in an ",(0,n.kt)("a",{parentName:"p",href:"assert-attribute-value"},"Assert on attribute value"),"."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"There are two types of variants: ",(0,n.kt)("br",null)," - Attribute value, where an attribute is assigned a value, or a microflow parameter is given a value; ",(0,n.kt)("br",null),' - Assert, where the value of an attribute is checked. Asserts are recognizable by the "=" sign on the Data variation page.',(0,n.kt)("br",null))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Attribute name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Value"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the attribute or assert.")))),(0,n.kt)("h2",{id:"business-rules"},"Business rules"),(0,n.kt)("p",null,"None.\nNote that not entering a value will be interpreted as 'Empty'."),(0,n.kt)("h2",{id:"actions-on-data-variation-item"},"Actions on Data Variation Item"),(0,n.kt)("h3",{id:"view-data-variation-items-in-a-test-suite"},"View Data Variation Items in a Test Suite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. "),(0,n.kt)("li",{parentName:"ul"},"The data variation page will be opened showing all the Data Variation Items in the ",(0,n.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"),".")),(0,n.kt)("h3",{id:"view-data-variation-items-in-a-test-case"},"View Data Variation Items in a Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the Test Suite page, click on the ",(0,n.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," that has the dark coloured ",(0,n.kt)("i",{class:"fas fa-table"})," icon next to it."),(0,n.kt)("li",{parentName:"ul"},"For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item.")),(0,n.kt)("h3",{id:"view-the-values-of-a-data-variation-item-per-data-variation"},"View the values of a Data Variation Item per Data Variation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the Test Suite page, click on the Test Case that has the dark coloured ",(0,n.kt)("i",{class:"fas fa-table"})," icon next to it."),(0,n.kt)("li",{parentName:"ul"},"For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item."),(0,n.kt)("li",{parentName:"ul"},"Click on this icon to show the values per ",(0,n.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation"),".")),(0,n.kt)("h3",{id:"create-a-data-variation-item"},"Create a Data Variation Item"),(0,n.kt)("p",null,"To add an ",(0,n.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Value")," or an ",(0,n.kt)("a",{parentName:"p",href:"assert-attribute-value"},"Assert on attribute value")," as a Data Variation Item, there are two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When configuring a ",(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep"),", click on ",(0,n.kt)("i",{class:"fas fa-table"})," next to the attribute or assert to add it to the ",(0,n.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation"),". Data Variation will be enabled and the respective attribute or assert will be added as a Data Variation Item;"),(0,n.kt)("li",{parentName:"ol"},'With Data Variation already enabled, go to the data variation page and click on "',(0,n.kt)("em",{parentName:"li"},"+ Attribute"),'" or "',(0,n.kt)("em",{parentName:"li"},"+ Assert"),'" to add an Attribute Value or an Assert on attribute value as a Data Variation Item.')),(0,n.kt)("h3",{id:"edit-a-data-variation-item"},"Edit a Data Variation Item"),(0,n.kt)("p",null,"There are two ways to edit values in a Data Variation. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'From the data variation page, to edit all attributes and asserts in a Data Variation at once, click on the column you want to edit, then click on "',(0,n.kt)("em",{parentName:"li"},"Edit"),'".'),(0,n.kt)("li",{parentName:"ol"},"From the data variation page, to edit a single attribute or assert in a Data Variation, simply click on the attribute or assert in the respective column.")),(0,n.kt)("h3",{id:"delete-a-data-variation-item"},"Delete a Data Variation Item"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"From the data variation page, click on the respective attribute or assert name on the left."),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("em",{parentName:"li"},"Delete"),'".')),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated 20 september 2022"))}c.isMDXComponent=!0}}]);