"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=s,f=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6729:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),s=(a(7294),a(3905));const i={},r="Change Object",l={unversionedId:"Teststep/change",id:"version-2.5.0/Teststep/change",title:"Change Object",description:"Definition",source:"@site/versioned_docs/version-2.5.0/Teststep/3-change.md",sourceDirName:"Teststep",slug:"/Teststep/change",permalink:"/2.5.0/Teststep/change",draft:!1,tags:[],version:"2.5.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Object",permalink:"/2.5.0/Teststep/create"},next:{title:"Retrieve Object",permalink:"/2.5.0/Teststep/retrieve"}},o={},u=[{value:"Definition",id:"definition",level:2},{value:"Domain model Access",id:"domain-model-access",level:2},{value:"Add a Change Object Teststep",id:"add-a-change-object-teststep",level:2},{value:"Setting values",id:"setting-values",level:2},{value:"Include or exclude an Attribute Value",id:"include-or-exclude-an-attribute-value",level:3},{value:"Set a fixed Attribute Value",id:"set-a-fixed-attribute-value",level:3},{value:"Use a former Teststep to set an Attribute Value",id:"use-a-former-teststep-to-set-an-attribute-value",level:3},{value:"Assign associations",id:"assign-associations",level:3},{value:"Generate assignments from database",id:"generate-assignments-from-database",level:3},{value:"Generate random values",id:"generate-random-values",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"change-object"},"Change Object"),(0,s.kt)("h2",{id:"definition"},"Definition"),(0,s.kt)("p",null,"With this ",(0,s.kt)("a",{parentName:"p",href:"."},"Teststep")," type, objects from a previous ",(0,s.kt)("a",{parentName:"p",href:"."},"Teststep")," are changed in-memory."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Note that a Change teststep can be used on a single object or on a list of objects, and that attribute values and associations specified in the teststep, will be applied to ",(0,s.kt)("em",{parentName:"p"},"all")," objects!")),(0,s.kt)("p",null,"To save the changes to the database, add a ",(0,s.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,s.kt)("h2",{id:"domain-model-access"},"Domain model Access"),(0,s.kt)("p",null,"Domain model access rights apply if the ",(0,s.kt)("a",{parentName:"p",href:"../test-case"},"Test Case")," that the teststep is in, has Apply Security enabled."),(0,s.kt)("p",null,"Upon executing a Change teststep, MTA will check if the Execution user has ",(0,s.kt)("em",{parentName:"p"},"Write")," rights on the Domain Model through the configured User Roles. "),(0,s.kt)("p",null,"If the necessary rights are not found in the Domain Model, an error will be shown on the ",(0,s.kt)("a",{parentName:"p",href:"../test-run"},"Test Run"),", and the Test Run will stop. "),(0,s.kt)("p",null,"To circumvent domain model access rights it is possible to use a ",(0,s.kt)("a",{parentName:"p",href:"microflow"},"Microflow teststep"),"."),(0,s.kt)("h2",{id:"add-a-change-object-teststep"},"Add a Change Object Teststep"),(0,s.kt)("p",null,"There are two options to add a Change Object teststep. The first option is quicker:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Option 1:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,s.kt)("li",{parentName:"ul"},"Click on the ",(0,s.kt)("i",{class:"fas fa-ellipsis"}),' button on the Teststep that returns the object(s) that you want to change, and choose "',(0,s.kt)("i",{class:"fal fa-plus-circle"}),' Change output".')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Option 2:")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,s.kt)("li",{parentName:"ol"},'Click "',(0,s.kt)("i",{class:"fal fa-plus-circle"}),' Add" and Click "',(0,s.kt)("i",{class:"fal fa-plus-circle"}),' Change teststep" to add a Change Object Teststep.'),(0,s.kt)("li",{parentName:"ol"},"Select an entity. You can search by name."),(0,s.kt)("li",{parentName:"ol"},"Select the previous Teststep that returns the object(s) that you want to change. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object or a list of objects.")),(0,s.kt)("h2",{id:"setting-values"},"Setting values"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Binary attributes are not supported by MTA.")),(0,s.kt)("h3",{id:"include-or-exclude-an-attribute-value"},"Include or exclude an Attribute Value"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Toggle the checkbox next to the attribute to include or exclude it.")),(0,s.kt)("p",null,"Note that not including an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.\nIncluding an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). "),(0,s.kt)("h3",{id:"set-a-fixed-attribute-value"},"Set a fixed Attribute Value"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Click ",(0,s.kt)("i",{class:"fas fa-keyboard"})," on the right of the attribute, indicating a fixed value should be set."),(0,s.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute.")),(0,s.kt)("p",null,"Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime."),(0,s.kt)("h3",{id:"use-a-former-teststep-to-set-an-attribute-value"},"Use a former Teststep to set an Attribute Value"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Click ",(0,s.kt)("i",{class:"fal fa-chevron-circle-right"})," on the right of the attribute, indicating a former Teststep should be used to set the value."),(0,s.kt)("li",{parentName:"ul"},"Select the Teststep and (if the Teststep returns an Object) find the Attribute that should provide the value.")),(0,s.kt)("h3",{id:"assign-associations"},"Assign associations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Click "',(0,s.kt)("i",{class:"fal fa-plus-circle"}),' Add" for each association that you want to set. '),(0,s.kt)("li",{parentName:"ul"},'Use the "',(0,s.kt)("i",{class:"fal fa-empty-set"}),' Set empty" button to clear the association. ')),(0,s.kt)("p",null,"Note that multiple values can only be set for both way reference set (many to many) associations."),(0,s.kt)("h3",{id:"generate-assignments-from-database"},"Generate assignments from database"),(0,s.kt)("p",null,'You can choose to fill all the attributes and associations using existing values in the database, by clicking "',(0,s.kt)("i",{class:"fas fa-database"}),' Fill teststep with data" and then "Fill with stored data". This will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.'),(0,s.kt)("h3",{id:"generate-random-values"},"Generate random values"),(0,s.kt)("p",null,'You can choose to fill attributes with random data, by clicking "',(0,s.kt)("i",{class:"fas fa-database"}),' Fill teststep with data" and then "Fill attributes with random values".'))}d.isMDXComponent=!0}}]);