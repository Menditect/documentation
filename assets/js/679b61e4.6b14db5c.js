"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[657],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6832:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),l=["components"],o={},s="Test Step",p={unversionedId:"refguide/test-step",id:"refguide/test-step",title:"Test Step",description:"Definition",source:"@site/docs/refguide/test-step.md",sourceDirName:"refguide",slug:"/refguide/test-step",permalink:"/refguide/test-step",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Run",permalink:"/refguide/test-run"},next:{title:"Test Suite",permalink:"/refguide/test-suite"}},u=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Test Step",id:"actions-on-test-step",children:[{value:"View Test Steps in a Test Case",id:"view-test-steps-in-a-test-case",children:[],level:3},{value:"View Test Step details",id:"view-test-step-details",children:[],level:3},{value:"Create an Object Test Step",id:"create-an-object-test-step",children:[],level:3},{value:"Create an Microflow Test Step",id:"create-an-microflow-test-step",children:[],level:3},{value:"Change the order of a Test Step in a Test Case",id:"change-the-order-of-a-test-step-in-a-test-case",children:[],level:3},{value:"Edit a Test Step",id:"edit-a-test-step",children:[],level:3},{value:"Configure a Test Step",id:"configure-a-test-step",children:[],level:3},{value:"Delete a Test Step",id:"delete-a-test-step",children:[],level:3},{value:"Open the Microflow or Domain Model associated with a Test Step in Mendix Studio",id:"open-the-microflow-or-domain-model-associated-with-a-test-step-in-mendix-studio",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],c={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-step"},"Test Step"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Test Step tests some specific aspect of system behaviour. A Test Step is always part of a ",(0,r.kt)("a",{parentName:"p",href:"test-case"},"Test Case")," that has the 'Automatic' type."),(0,r.kt)("p",null,"A Test Step must be one of the following types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object"),(0,r.kt)("li",{parentName:"ul"},"Microflow")),(0,r.kt)("p",null,"An Object Test Step can execute the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: create an object (without committing it to the database)."),(0,r.kt)("li",{parentName:"ul"},"Retrieve: retrieve object(s) from the database."),(0,r.kt)("li",{parentName:"ul"},"Change: change an object (without committing it to the database)."),(0,r.kt)("li",{parentName:"ul"},"Delete: mark an object to be deleted ."),(0,r.kt)("li",{parentName:"ul"},"Persist: commit all the objects to the database that are created or changed and delete all the objects that are marked as deleted, since the previously executed persist Test Step in the same Test Case, or since the start of the Test Case.")),(0,r.kt)("p",null,"An Object Test Step can contain ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Values"),". "),(0,r.kt)("p",null,"A Microflow Test Step executes exactly one microflow (and all the activities in it) and can contain ",(0,r.kt)("a",{parentName:"p",href:"microflow-parameter-value"},"Microflow Parameter Values"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Test Step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"A description of the Test Step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Highlight"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates whether to visually highlight the Test Step in the Test Case to draw attention to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"Can be either 'Object' or 'Microflow'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Object Test Steps; either 'Create', 'Retrieve', 'Change', 'Delete' or 'Persist'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve set"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Retrieve Object Test Steps; either 'All objects', or 'Only First object'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve option"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Retrieve Object Test Steps; either 'From database', 'From former Test Step', or 'By association' (from memory).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microflow Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for Microflow Test Steps; Name of the microflow to be executed.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name is mandatory."),(0,r.kt)("li",{parentName:"ul"},"A Microflow Test Step must have a microflow selected in order to be able to execute the ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"An 'Create', 'Change' or 'Retrieve' Object Test Step must have an entity selected in order to be able to execute the Test Configuration.")),(0,r.kt)("h2",{id:"actions-on-test-step"},"Actions on Test Step"),(0,r.kt)("h3",{id:"view-test-steps-in-a-test-case"},"View Test Steps in a Test Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," that the Test Steps are in."),(0,r.kt)("li",{parentName:"ul"},"Click on the Automatic ",(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," to view the Test Steps."),(0,r.kt)("li",{parentName:"ul"},"Test Steps are shown in the middle pane.")),(0,r.kt)("h3",{id:"view-test-step-details"},"View Test Step details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Test Steps are in."),(0,r.kt)("li",{parentName:"ul"},"Click on the Automatic Test Case to view the Test Steps."),(0,r.kt)("li",{parentName:"ul"},"Select the Test Step to view."),(0,r.kt)("li",{parentName:"ul"},"Details of the Test Step are shown on the right pane.")),(0,r.kt)("h3",{id:"create-an-object-test-step"},"Create an Object Test Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Automatic Test Case that you want to create a Test Step in."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"+ Object"),'" to create an Object test step.'),(0,r.kt)("li",{parentName:"ul"},"Select the type of CRUD action you want to perform on the Object."),(0,r.kt)("li",{parentName:"ul"},"Select an entity (only for actions other than Persist)."),(0,r.kt)("li",{parentName:"ul"},'Choose "Save".'),(0,r.kt)("li",{parentName:"ul"},"If neccesary, select additional options like ",(0,r.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Values")," or associations.")),(0,r.kt)("h3",{id:"create-an-microflow-test-step"},"Create an Microflow Test Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Test Step in."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"+ Microflow"),'" to create a Microflow test step.'),(0,r.kt)("li",{parentName:"ul"},"Select the Microflow to execute."),(0,r.kt)("li",{parentName:"ul"},'Choose "Save".'),(0,r.kt)("li",{parentName:"ul"},"If neccesary, select additional options like ",(0,r.kt)("a",{parentName:"li",href:"microflow-parameter-value"},"Microflow Parameter Values"),".")),(0,r.kt)("h3",{id:"change-the-order-of-a-test-step-in-a-test-case"},"Change the order of a Test Step in a Test Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Test Step is in."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,r.kt)("i",{class:"fas fa-arrow-down"})," on the left of the name of the Test Step to move it up or down.")),(0,r.kt)("p",null,"Note that it is possible that due to moving a Test Step and dependencies with another Test Step, an error will occur prohibiting the execution of the Test Configuration."),(0,r.kt)("h3",{id:"edit-a-test-step"},"Edit a Test Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fa fa-pencil"})," next to the Test Step name to edit the Name or the Description, or to Highlight the Test Step.")),(0,r.kt)("p",null,"Note that it not is possible to change the action or type of Test Step after creation, or change the entity or microflow that it is associated with."),(0,r.kt)("h3",{id:"configure-a-test-step"},"Configure a Test Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-cog"}),' on the Test Step name, or click on "',(0,r.kt)("em",{parentName:"li"},"Configure"),'" on top of the test step details pane on the right, to set the ',(0,r.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Values")," or Microflow Parameter Values](microflow-parameter-value).")),(0,r.kt)("p",null,"Note that it not is possible to change the action or type of Test Step after creation, or change the entity or microflow that it is associated with."),(0,r.kt)("h3",{id:"delete-a-test-step"},"Delete a Test Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Test Step is in."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," on the Test Step you want to delete.")),(0,r.kt)("p",null,"Note that it is possible that due to deleting a Test Step and dependencies with another Test Step, an error will occur prohibiting the execution of the Test Configuration."),(0,r.kt)("h3",{id:"open-the-microflow-or-domain-model-associated-with-a-test-step-in-mendix-studio"},"Open the Microflow or Domain Model associated with a Test Step in Mendix Studio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Automatic Test Case that the Test Step is in."),(0,r.kt)("li",{parentName:"ul"},"Select the Test Step."),(0,r.kt)("li",{parentName:"ul"},'Click on "',(0,r.kt)("em",{parentName:"li"},"Mx Studio"),'" on top of the test step details pane on the right.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-object-count"},"Assert Object Count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-instruction"},"Test Instruction"))))}h.isMDXComponent=!0}}]);