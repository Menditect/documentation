"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=i,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={},s="Create Object",l={unversionedId:"Teststep/create",id:"version-2.7.0/Teststep/create",title:"Create Object",description:"Definition",source:"@site/versioned_docs/version-2.7.0/Teststep/2-create.md",sourceDirName:"Teststep",slug:"/Teststep/create",permalink:"/2.7.0/Teststep/create",draft:!1,tags:[],version:"2.7.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow call",permalink:"/2.7.0/Teststep/microflow"},next:{title:"Change Object",permalink:"/2.7.0/Teststep/change"}},o={},u=[{value:"Definition",id:"definition",level:2},{value:"Domain model Access",id:"domain-model-access",level:2},{value:"Add a Create Object Teststep",id:"add-a-create-object-teststep",level:2},{value:"Setting values",id:"setting-values",level:2},{value:"Include or exclude an Attribute Value",id:"include-or-exclude-an-attribute-value",level:3},{value:"Set a fixed Attribute Value",id:"set-a-fixed-attribute-value",level:3},{value:"Use a former Teststep to set an Attribute Value",id:"use-a-former-teststep-to-set-an-attribute-value",level:3},{value:"Assign associations",id:"assign-associations",level:3},{value:"Generate assignments from database",id:"generate-assignments-from-database",level:3},{value:"Generate random values",id:"generate-random-values",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-object"},"Create Object"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"With this ",(0,i.kt)("a",{parentName:"p",href:"."},"Teststep")," type, an object is created in-memory. "),(0,i.kt)("p",null,"To save it to the database, add a ",(0,i.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,i.kt)("p",null,"The object is created only if the Execution user is allowed to based on the domain model access rules in the Mendix model."),(0,i.kt)("p",null,"Domain model events (Before and After Create), if configured, are triggered."),(0,i.kt)("h2",{id:"domain-model-access"},"Domain model Access"),(0,i.kt)("p",null,"Domain model access rights apply if the ",(0,i.kt)("a",{parentName:"p",href:"../test-case"},"Test Case")," that the teststep is in, has Apply Security enabled."),(0,i.kt)("p",null,"Upon executing a Create teststep, MTA will check if the Execution user has ",(0,i.kt)("em",{parentName:"p"},"Create")," rights on the Domain Model through the configured User Roles. "),(0,i.kt)("p",null,"If the necessary rights are not found in the Domain Model, an error will be shown on the ",(0,i.kt)("a",{parentName:"p",href:"../test-run"},"Test Run"),", and the Test Run will stop. "),(0,i.kt)("p",null,"To circumvent domain model access rights it is possible to use a ",(0,i.kt)("a",{parentName:"p",href:"microflow"},"Microflow teststep"),"."),(0,i.kt)("h2",{id:"add-a-create-object-teststep"},"Add a Create Object Teststep"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),' Teststep" and Click "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),' Create teststep" to add a Create Object Teststep.'),(0,i.kt)("li",{parentName:"ul"},"Select an entity. You can search by name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-values"},"Set values"),"."),(0,i.kt)("li",{parentName:"ul"},'Click on the "Save" button. ')),(0,i.kt)("h2",{id:"setting-values"},"Setting values"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Binary attributes are not supported by MTA.")),(0,i.kt)("h3",{id:"include-or-exclude-an-attribute-value"},"Include or exclude an Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Toggle the checkbox next to the attribute to include or exclude it.")),(0,i.kt)("p",null,"Note that not including an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).\nIncluding an Attribute but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). "),(0,i.kt)("h3",{id:"set-a-fixed-attribute-value"},"Set a fixed Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fas fa-keyboard"})," on the right of the attribute, indicating a fixed value should be set."),(0,i.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute.")),(0,i.kt)("p",null,"Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime."),(0,i.kt)("h3",{id:"use-a-former-teststep-to-set-an-attribute-value"},"Use a former Teststep to set an Attribute Value"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fal fa-chevron-circle-right"})," on the right of the attribute, indicating a former Teststep should be used to set the value."),(0,i.kt)("li",{parentName:"ul"},"Select the Teststep and (if the Teststep returns an Object) find the Attribute that should provide the value.")),(0,i.kt)("h3",{id:"assign-associations"},"Assign associations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),' Add" for each association that you want to set. '),(0,i.kt)("li",{parentName:"ul"},'Use the "',(0,i.kt)("i",{class:"fal fa-empty-set"}),' Set empty" button to clear the association. ')),(0,i.kt)("p",null,"Note that multiple values can only be set for both way reference set (many to many) associations."),(0,i.kt)("h3",{id:"generate-assignments-from-database"},"Generate assignments from database"),(0,i.kt)("p",null,'You can choose to fill all the attributes and associations using existing values in the database,\nby clicking "',(0,i.kt)("i",{class:"fas fa-database"}),' Fill teststep with data" and then "Fill with stored data".\nThis will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Because of performance reasons, the amount of associations retrieved is limited to 3.")),(0,i.kt)("h3",{id:"generate-random-values"},"Generate random values"),(0,i.kt)("p",null,'You can choose to fill attributes with random data, by clicking "',(0,i.kt)("i",{class:"fas fa-database"}),' Fill teststep with data" and then "Fill attributes with random values".'))}p.isMDXComponent=!0}}]);