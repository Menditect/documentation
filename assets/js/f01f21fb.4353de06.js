"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3707],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(a),g=r,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3041:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},i="Use a previous teststep's data",o={unversionedId:"design-tests/use-previous-teststeps-data",id:"design-tests/use-previous-teststeps-data",title:"Use a previous teststep's data",description:"Definition",source:"@site/additional/01-howtos/03-design-tests/use-previous-teststeps-data.md",sourceDirName:"03-design-tests",slug:"/design-tests/use-previous-teststeps-data",permalink:"/additional/howtos/design-tests/use-previous-teststeps-data",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Record and complete teststeps",permalink:"/additional/howtos/design-tests/record-user-actions"},next:{title:"Use a Test Suite variable",permalink:"/additional/howtos/design-tests/use-test-suite-variable"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Usage",id:"usage",level:2},{value:"Using Primitives",id:"using-primitives",level:3},{value:"Implicit converts of datatypes",id:"implicit-converts-of-datatypes",level:4},{value:"Using Enumerations",id:"using-enumerations",level:3},{value:"Using Objects",id:"using-objects",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-a-previous-teststeps-data"},"Use a previous teststep's data"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"This document describes how MTA handles data from one teststep to another."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"In MTA it is possible to use the output of one teststep, to pass data to another teststep."),(0,r.kt)("p",null,'Let\'s assume there is a generic teststep "A" and another teststep "B". B uses the data from A. A returns either a primitive or an object. Primitive values are either a String, Integer, Long, Decimal, Datetime or Boolean. There are a couple scenarios how B can use A\'s data:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Teststep A is a"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns a"),(0,r.kt)("th",{parentName:"tr",align:null},"Teststep B is a"),(0,r.kt)("th",{parentName:"tr",align:null},"Uses data to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Primitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Primitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Enumeration"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill enumeration input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Enumeration"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill object input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Change, Delete or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform Change, Delete or Retrieve on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill association")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Change, Delete or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform Change, Delete or Retrieve on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill association")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive/enum input parameter from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value from within object from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive/enum input parameter")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"using-primitives"},"Using Primitives"),(0,r.kt)("p",null,'For Scenarios 1 and 2, the data is copied to MTA whenever executing the test. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case.\nAlso, for Scenarios 10 - 13, the data is first copied and then used to assign (fill) the value. '),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that because the data is first copied to MTA, the Domain Model Access on attributes is not checked when using the values from those attributes in another Test Case!")),(0,r.kt)("p",null,'Furthermore, because primitives are the same for all Mendix Apps, it is possible to use different Applications for the Test Cases: have one Test Case test App "ABC" and have the other Test Case test "XYZ".'),(0,r.kt)("h4",{id:"implicit-converts-of-datatypes"},"Implicit converts of datatypes"),(0,r.kt)("p",null,"Below tables illustrate what datatypes are interchangeable and (implicitly) converted when executing the Test Case."),(0,r.kt)("p",null,"Note that a String value that is converted into other another datatype could lead to an error on the Teststep upon execution."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"To set value for ",(0,r.kt)("strong",{parentName:"th"},"attribute")," that's a\u2026"),(0,r.kt)("th",{parentName:"tr",align:null},"Use attribute that's a\u2026"),(0,r.kt)("th",{parentName:"tr",align:null},"Or microflow return value that's a\u2026"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber (only for Retrieve teststep)"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Decimal/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal/Float/IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HashString"),(0,r.kt)("td",{parentName:"tr",align:null},"HashString/String"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"To set value for ",(0,r.kt)("strong",{parentName:"th"},"microflow parameter")," that's a\u2026"),(0,r.kt)("th",{parentName:"tr",align:null},"Use attribute that's a\u2026"),(0,r.kt)("th",{parentName:"tr",align:null},"Or microflow return value that's a\u2026"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Decimal/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"Decimal/Float/IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String (converted)"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String (converted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"AutoNumber/Integer/Long/String"),(0,r.kt)("td",{parentName:"tr",align:null},"IntegerLong/String")))),(0,r.kt)("h3",{id:"using-enumerations"},"Using Enumerations"),(0,r.kt)("p",null,'For Scenarios 3 and 4, the data is also copied to MTA whenever executing the test. However Enumerations are App-specific. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case, but both Test Cases need to test the same Application.'),(0,r.kt)("h3",{id:"using-objects"},"Using Objects"),(0,r.kt)("p",null,"For Scenarios 5 - 9 the data is not copied to MTA whenever executing the test. Instead, MTA uses the Object's ID to refer to the Object in-memory. Consequentually whenever retrieving data, regardless of which Teststep is being used to retrieve from, always the latest state of that object will be retrieved."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Beware that when changing an Object after retrieving it, if you retrieve it again from that same teststep, it will still be changed!")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 23 february 2023"))}m.isMDXComponent=!0}}]);