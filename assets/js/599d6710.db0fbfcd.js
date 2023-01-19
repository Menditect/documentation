"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},o="Create Object",l={unversionedId:"Teststep/create",id:"version-1.8.0/Teststep/create",title:"Create Object",description:"Definition",source:"@site/versioned_docs/version-1.8.0/Teststep/2-create.md",sourceDirName:"Teststep",slug:"/Teststep/create",permalink:"/1.8.0/Teststep/create",draft:!1,tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow call",permalink:"/1.8.0/Teststep/microflow"},next:{title:"Change Object",permalink:"/1.8.0/Teststep/change"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Create Object Teststep",id:"add-a-create-object-teststep",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-object"},"Create Object"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"With this ",(0,r.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, an object is created in-memory and put on the list for objects to be committed using a ",(0,r.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,r.kt)("p",null,"When setting Attribute Values for a Create Object action, the Attribute will be ",(0,r.kt)("em",{parentName:"p"},"assigned")," the entered value, and 'empty' if checked, but left blank."),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("h3",{id:"add-a-create-object-teststep"},"Add a Create Object Teststep"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"+ Teststep"),'" and Click "',(0,r.kt)("em",{parentName:"li"},"+ Create"),'" to add a Create Object Teststep.'),(0,r.kt)("li",{parentName:"ul"},"Select an entity. You can search by name."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," that you want to use and enter a value."),(0,r.kt)("li",{parentName:"ul"},"Click '+Add' for each association that you want to set. Use the ",(0,r.kt)("i",{class:"fa-empty-set"}),' "Set empty" button to clear the association. Note that multiple values can only be set for both way reference set (many to many) associations.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Alternatively"),' you can choose to fill all the attributes and associations using existing values in the database, by clicking "',(0,r.kt)("i",{class:"fas fa-database"}),' Fill with values from database"!'),(0,r.kt)("li",{parentName:"ul"},'Click on the "Save" button. ')),(0,r.kt)("p",null,"Note that not checking an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).\nChecking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value ('')."))}u.isMDXComponent=!0}}]);