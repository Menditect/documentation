"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(r),f=n,b=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?a.createElement(b,l(l({ref:t},p),{},{components:r})):a.createElement(b,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],u={},s="Attribute Value",o={unversionedId:"refguide/Older versions/Version 1.6/attribute-value",id:"refguide/Older versions/Version 1.6/attribute-value",title:"Attribute Value",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/Older versions/Version 1.6/attribute-value.md",sourceDirName:"refguide/Older versions/Version 1.6",slug:"/refguide/Older versions/Version 1.6/attribute-value",permalink:"/refguide/Older versions/Version 1.6/attribute-value",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Object Count",permalink:"/refguide/Older versions/Version 1.6/assert-object-count"},next:{title:"Construction Error",permalink:"/refguide/Older versions/Version 1.6/construction-error"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Attribute Value",id:"actions-on-attribute-value",level:2},{value:"View Attribute Values",id:"view-attribute-values",level:3},{value:"Include or exclude an Attribute Value",id:"include-or-exclude-an-attribute-value",level:3},{value:"Set a fixed Attribute Value",id:"set-a-fixed-attribute-value",level:3},{value:"Use a former Teststep to set an Attribute Value",id:"use-a-former-teststep-to-set-an-attribute-value",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attribute-value"},"Attribute Value"),(0,i.kt)("p",null,"This document is based on MTA version 1.6."),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"The Attribute Value contains the information that specifies the input of an Object ",(0,i.kt)("a",{parentName:"p",href:"teststep"},"Teststep"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the attribute.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Included"),(0,i.kt)("td",{parentName:"tr",align:null},"This indicates whether setting the value for the attribute is included in the Teststep.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Datatype"),(0,i.kt)("td",{parentName:"tr",align:null},"Datatype of the attribute.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Input type"),(0,i.kt)("td",{parentName:"tr",align:null},'Indicates how the value is specified. The "Fixed" input type specifies a by the test automator given value. The "From former Teststep" input type specifies that the value is derived from a former Teststep.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Value"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the attribute.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A former ",(0,i.kt)("a",{parentName:"li",href:"teststep"},"Teststep")," must be selected if an Attribute Value has the input type 'Former Teststep'. The ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")," that contains the Teststep can not be executed as long as the former Teststep is not selected. "),(0,i.kt)("li",{parentName:"ul"},"The offset of current date or a fixed date must be specified if an Attribute Value has the input type 'Fixed value' and a datatype 'Datetime'.")),(0,i.kt)("h2",{id:"actions-on-attribute-value"},"Actions on Attribute Value"),(0,i.kt)("h3",{id:"view-attribute-values"},"View Attribute Values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to an Object ",(0,i.kt)("a",{parentName:"li",href:"teststep"},"Teststep"),' in the Test Suite page. The Attribute Values of the object are shown in the "Attributes" tab.')),(0,i.kt)("h3",{id:"include-or-exclude-an-attribute-value"},"Include or exclude an Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,i.kt)("li",{parentName:"ul"},'Toggle the checkbox value next to the attribute in the "Attributes" tab to include or exclude it.')),(0,i.kt)("p",null,"Note that: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After creating an Object Teststep, all Attribute Values are included by default."),(0,i.kt)("li",{parentName:"ul"},"If an attribute is included but an Attribute Value is not set, the value will be empty during test execution.")),(0,i.kt)("h3",{id:"set-a-fixed-attribute-value"},"Set a fixed Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fas fa-keyboard"})," on the right of the attribute, indicating a fixed value should be set."),(0,i.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute.")),(0,i.kt)("p",null,"Note: For datetime values you can enter either a fixed date, the current datetime, or an offset of the current datetime."),(0,i.kt)("h3",{id:"use-a-former-teststep-to-set-an-attribute-value"},"Use a former Teststep to set an Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("svg",{role:"img",viewBox:"0 0 512 512",width:"2%",height:"2%",xmlns:"http://www.w3.org/2000/svg"},(0,i.kt)("path",{fill:"currentColor",d:"M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z",class:""}))," on the right of the attribute, indicating a former Teststep should be used to set the value."),(0,i.kt)("li",{parentName:"ul"},"Select the Teststep that should provide the value.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"microflow-parameter-value"},"Microflow Parameter Value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}f.isMDXComponent=!0}}]);