"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2533],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),u=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?i.createElement(f,o(o({ref:e},p),{},{components:a})):i.createElement(f,o({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8840:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=["components"],l={},s="Data Variation",u={unversionedId:"refguide/Older versions/Version 1.7/datavariation",id:"refguide/Older versions/Version 1.7/datavariation",title:"Data Variation",description:"This document is based on MTA version 1.7.",source:"@site/docs/refguide/Older versions/Version 1.7/datavariation.md",sourceDirName:"refguide/Older versions/Version 1.7",slug:"/refguide/Older versions/Version 1.7/datavariation",permalink:"/refguide/Older versions/Version 1.7/datavariation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Variation Item",permalink:"/refguide/Older versions/Version 1.7/datavariation-item"},next:{title:"Microflow Parameter Value",permalink:"/refguide/Older versions/Version 1.7/microflow-parameter-value"}},p={},d=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Data Variation",id:"actions-on-data-variation",level:2},{value:"Enable Data Variation",id:"enable-data-variation",level:3},{value:"Disable Data Variation",id:"disable-data-variation",level:3},{value:"Add a Data Variation",id:"add-a-data-variation",level:3},{value:"Delete a Data Variation",id:"delete-a-data-variation",level:3},{value:"Edit a Data Variation",id:"edit-a-data-variation",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],c={toc:d};function m(t){var e=t.components,a=(0,n.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-variation"},"Data Variation"),(0,r.kt)("p",null,"This document is based on MTA version 1.7."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Data Variation is used to execute the same ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," multiple times upon ",(0,r.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," execution, but each time with different values for variant items, such as ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Values")," or input and output parameters. These variant items need to be explicitly included in the Data Variation to be able to vary them per ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),". For each data variation of a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),", a ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run")," will be created."),(0,r.kt)("p",null,"Data Variation consists of ",(0,r.kt)("a",{parentName:"p",href:"datavariation-item"},"Data Variation Items")," or variants."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The rank of the Data Variation in the execution order of the Test Suite.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("p",null,"None.\nNote that it is possible to have a data variation that does not consist of data variation items. This happens when all data variation items are deleted. The result is that the ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," will simply be ran multiple times but with the exact same data."),(0,r.kt)("h2",{id:"actions-on-data-variation"},"Actions on Data Variation"),(0,r.kt)("h3",{id:"enable-data-variation"},"Enable Data Variation"),(0,r.kt)("p",null,"There are two ways to enable Data Variation on a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open and the icon color will turn dark, meaning Data Variation is enabled."),(0,r.kt)("li",{parentName:"ol"},"When configuring a ",(0,r.kt)("a",{parentName:"li",href:"teststep"},"Teststep"),", click on ",(0,r.kt)("i",{class:"fas fa-table"})," next to the attribute or assert to add it to the Data Variation. Data Variation will be enabled and the respective attribute or assert will be added as a ",(0,r.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Item"),".")),(0,r.kt)("h3",{id:"disable-data-variation"},"Disable Data Variation"),(0,r.kt)("p",null,"To completely remove all Data Variation Items and also remove all Data Variations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," on top of the list of Data Variation Items.")),(0,r.kt)("h3",{id:"add-a-data-variation"},"Add a Data Variation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open."),(0,r.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to create a copy from, for instance the column labeled ",(0,r.kt)("em",{parentName:"li"},"# 1"),". "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"Copy"),'".')),(0,r.kt)("h3",{id:"delete-a-data-variation"},"Delete a Data Variation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open."),(0,r.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to delete, for instance the column labeled ",(0,r.kt)("em",{parentName:"li"},"# 2"),". "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"}),".")),(0,r.kt)("p",null,"Note that you cannot delete the first column labeled ",(0,r.kt)("em",{parentName:"p"},"# 1"),"."),(0,r.kt)("h3",{id:"edit-a-data-variation"},"Edit a Data Variation"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"datavariation-item#edit-a-data-variation-item"},"Edit a Data Variation Item"),"."),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 12 july 2022"))}m.isMDXComponent=!0}}]);