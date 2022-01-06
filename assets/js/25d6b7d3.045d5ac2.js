"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[634],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8336:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={},s="Construction Error",u={unversionedId:"definitions/construction-error",id:"definitions/construction-error",title:"Construction Error",description:"Definition",source:"@site/docs/definitions/construction-error.md",sourceDirName:"definitions",slug:"/definitions/construction-error",permalink:"/documentation/definitions/construction-error",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attribute Value",permalink:"/documentation/definitions/attribute-value"},next:{title:"Data Variation Item",permalink:"/documentation/definitions/datavariation-item"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on ...",id:"actions-on-",children:[{value:"View Construction Errors",id:"view-construction-errors",children:[],level:3},{value:"Fix Construction Errors",id:"fix-construction-errors",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"construction-error"},"Construction Error"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A test Construction Error contains an error message for an error that is detected during test design. A Construction Error can be associated with any element in MTA such as a ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," or an ",(0,i.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Value"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Message"),(0,i.kt)("td",{parentName:"tr",align:null},"The descriptive error message for the Construction Error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Element type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of element that the error is associated with. Can be one of the following: ",(0,i.kt)("br",null)," - Test Configuration",(0,i.kt)("br",null)," - Test Step",(0,i.kt)("br",null)," - attribute value",(0,i.kt)("br",null)," - selected object for create object step",(0,i.kt)("br",null)," - selected object for change object step",(0,i.kt)("br",null)," - selected object for retrieve object step",(0,i.kt)("br",null)," - selected object for associated object in an object step",(0,i.kt)("br",null)," - Microflow Parameter Value",(0,i.kt)("br",null)," - selected object for Microflow Parameter Value",(0,i.kt)("br",null)," - selected value for compare on an assert",(0,i.kt)("br",null)," - selected object for count on an object list assert",(0,i.kt)("br",null))))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("p",null,"None, as Construction Errors are generated by MTA."),(0,i.kt)("h2",{id:"actions-on-"},"Actions on ..."),(0,i.kt)("h3",{id:"view-construction-errors"},"View Construction Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Construction Errors are always shown in red on the element that they are related to, like a ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),", ",(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," or ",(0,i.kt)("a",{parentName:"li",href:"test-case"},"Test Case"),".")),(0,i.kt)("h3",{id:"fix-construction-errors"},"Fix Construction Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("a",{parentName:"li",href:"test-step"},"Test Step")," level, a Solve button is shown that will lead to the page where the Construction Error can be fixed.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-step"},"Test Step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-case"},"Test Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"))))}f.isMDXComponent=!0}}]);