"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7873],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=i,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1870:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={},o="Teststep",p={unversionedId:"refguide/Teststep/index",id:"refguide/Teststep/index",title:"Teststep",description:"This document is based on MTA version 1.7.",source:"@site/docs/refguide/Teststep/index.md",sourceDirName:"refguide/Teststep",slug:"/refguide/Teststep/",permalink:"/refguide/Teststep/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Suite",permalink:"/refguide/Older versions/Version 1.6/test-suite"},next:{title:"Microflow call",permalink:"/refguide/Teststep/microflow"}},u={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Teststep",id:"actions-on-teststep",level:2},{value:"View Teststeps in a Test Case",id:"view-teststeps-in-a-test-case",level:3},{value:"View Teststep details",id:"view-teststep-details",level:3},{value:"Create a Teststep",id:"create-a-teststep",level:3},{value:"Change the order of a Teststep in a Test Case",id:"change-the-order-of-a-teststep-in-a-test-case",level:3},{value:"Edit a Teststep",id:"edit-a-teststep",level:3},{value:"Configure a Teststep",id:"configure-a-teststep",level:3},{value:"Delete a Teststep",id:"delete-a-teststep",level:3},{value:"Open the Microflow or Domain Model associated with a Teststep in Mendix Studio",id:"open-the-microflow-or-domain-model-associated-with-a-teststep-in-mendix-studio",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],h={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teststep"},"Teststep"),(0,r.kt)("p",null,"This document is based on MTA version 1.7."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Teststep tests some specific aspect of system behaviour. A Teststep is always part of a ",(0,r.kt)("a",{parentName:"p",href:"test-case"},"Test Case")," that has the 'Automatic' type."),(0,r.kt)("p",null,"A Teststep must be one of the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/microflow"},"Microflow call")),(0,r.kt)("li",{parentName:"ul"},"Object")),(0,r.kt)("p",null,"An Object Teststep can execute the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/create"},"Create"),": create an object (without committing it to the database)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/retrieve"},"Retrieve"),": retrieve object(s) from memory or database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/change"},"Change"),": change an object (without committing it to the database)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/delete"},"Delete"),": mark an object to be deleted. When deleting, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Teststep/persist"},"Persist"),": finalizes above Object teststeps. ")),(0,r.kt)("p",null,"Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available."),(0,r.kt)("p",null,"An Object Teststep can contain ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Values"),". When setting Attribute Values, always keep in mind that the meaning of the value is different for the Retrieve action than for the Create/Change actions. "),(0,r.kt)("p",null,"A Microflow Teststep executes exactly one microflow (and all the activities in it) and can contain ",(0,r.kt)("a",{parentName:"p",href:"microflow-parameter-value"},"Microflow Parameter Values"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the Teststep.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Highlight"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates whether to visually highlight the Teststep in the Test Case to draw attention to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be either 'Object' or 'Microflow'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Object Teststeps; either 'Create', 'Retrieve', 'Change', 'Delete' or 'Persist'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve set"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Retrieve Object Teststeps; either 'All objects', or 'Only First object'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve option"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Retrieve Object Teststeps; either 'From database', 'From former Teststep', or 'By association' (from memory).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microflow Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Microflow Teststeps; Name of the microflow to be executed.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name is mandatory."),(0,r.kt)("li",{parentName:"ul"},"A Microflow Teststep must have a microflow selected in order to be able to execute the ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"An 'Create', 'Change' or 'Retrieve' Object Teststep must have an entity selected in order to be able to execute the Test Configuration.")),(0,r.kt)("h2",{id:"actions-on-teststep"},"Actions on Teststep"),(0,r.kt)("h3",{id:"view-teststeps-in-a-test-case"},"View Teststeps in a Test Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," that the Teststeps are in."),(0,r.kt)("li",{parentName:"ul"},"Click on the Automatic ",(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," to view the Teststeps."),(0,r.kt)("li",{parentName:"ul"},"Teststeps are shown in the middle pane.")),(0,r.kt)("h3",{id:"view-teststep-details"},"View Teststep details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Teststeps are in."),(0,r.kt)("li",{parentName:"ul"},"Click on the Automatic Test Case to view the Teststeps."),(0,r.kt)("li",{parentName:"ul"},"Select the Teststep to view."),(0,r.kt)("li",{parentName:"ul"},"Details of the Teststep are shown on the right pane.")),(0,r.kt)("h3",{id:"create-a-teststep"},"Create a Teststep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please consult the documentation for the respective Teststep type: ",(0,r.kt)("a",{parentName:"li",href:"Teststep/microflow"},"Microflow call"),", ",(0,r.kt)("a",{parentName:"li",href:"Teststep/create"},"Create"),", ",(0,r.kt)("a",{parentName:"li",href:"Teststep/retrieve"},"Retrieve"),", ",(0,r.kt)("a",{parentName:"li",href:"Teststep/change"},"Change"),", ",(0,r.kt)("a",{parentName:"li",href:"Teststep/delete"},"Delete")," or ",(0,r.kt)("a",{parentName:"li",href:"Teststep/persist"},"Persist"),".")),(0,r.kt)("h3",{id:"change-the-order-of-a-teststep-in-a-test-case"},"Change the order of a Teststep in a Test Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Teststep is in."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,r.kt)("i",{class:"fas fa-arrow-down"})," on the left of the name of the Teststep to move it up or down.")),(0,r.kt)("p",null,"Note that it is possible that due to moving a Teststep and dependencies with another Teststep, an error will occur prohibiting the execution of the Test Configuration."),(0,r.kt)("h3",{id:"edit-a-teststep"},"Edit a Teststep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fa fa-pencil"})," next to the Teststep name to edit the Name or the Description, or to Highlight the Teststep.")),(0,r.kt)("p",null,"Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with."),(0,r.kt)("h3",{id:"configure-a-teststep"},"Configure a Teststep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-cog"}),' on the Teststep name, or click on "',(0,r.kt)("em",{parentName:"li"},"Configure"),'" on top of the Teststep details pane on the right, to set the Attribute Values or Microflow Parameter Values.')),(0,r.kt)("p",null,"When setting Attribute Values, always keep in mind that the meaning of the value is different for a Retrieve action. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Create / Change Object actions and Microflow parameters, the Attribute will be ",(0,r.kt)("em",{parentName:"li"},"assigned")," the entered value, and 'empty' if checked, but left blank."),(0,r.kt)("li",{parentName:"ul"},"For a Retrieve Object action, the resulting set of objects will be ",(0,r.kt)("em",{parentName:"li"},"filtered")," by the entered value, and 'empty' if checked, but left blank.")),(0,r.kt)("p",null,"Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with."),(0,r.kt)("h3",{id:"delete-a-teststep"},"Delete a Teststep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Teststep is in."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," on the Teststep you want to delete.")),(0,r.kt)("p",null,"Note that it is possible that due to deleting a Teststep and dependencies with another Teststep, an error will occur prohibiting the execution of the Test Configuration."),(0,r.kt)("h3",{id:"open-the-microflow-or-domain-model-associated-with-a-teststep-in-mendix-studio"},"Open the Microflow or Domain Model associated with a Teststep in Mendix Studio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Teststep is in."),(0,r.kt)("li",{parentName:"ul"},"Select the Teststep."),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("em",{parentName:"li"},"Mx Studio"),'" on top of the Teststep details pane on the right.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-object-count"},"Assert Object Count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-instruction"},"Test Instruction"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 30 june 2022"))}d.isMDXComponent=!0}}]);