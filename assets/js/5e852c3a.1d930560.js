"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),b=r,d=h["".concat(s,".").concat(b)]||h[b]||u[b]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Change Object",l={unversionedId:"Teststep/change",id:"version-1.8.0/Teststep/change",title:"Change Object",description:"Definition",source:"@site/versioned_docs/version-1.8.0/Teststep/3-change.md",sourceDirName:"Teststep",slug:"/Teststep/change",permalink:"/1.8.0/Teststep/change",draft:!1,tags:[],version:"1.8.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Object",permalink:"/1.8.0/Teststep/create"},next:{title:"Retrieve Object",permalink:"/1.8.0/Teststep/retrieve"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Change Object Teststep",id:"add-a-change-object-teststep",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-object"},"Change Object"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"With this ",(0,r.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, an object is changed in-memory and put on the list for objects to be committed using a ",(0,r.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,r.kt)("p",null,"When setting Attribute Values for a Change Object action, the Attribute will be ",(0,r.kt)("em",{parentName:"p"},"assigned")," the entered value, and 'empty' if checked, but left blank."),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("h3",{id:"add-a-change-object-teststep"},"Add a Change Object Teststep"),(0,r.kt)("p",null,"There are two ways to add a Change Object teststep. The first one is quicker:"),(0,r.kt)("p",null,"The new way: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on the "..." button on the Teststep that returns the object that you want to change, and choose "',(0,r.kt)("em",{parentName:"li"},"+ Change output"),'".')),(0,r.kt)("p",null,"The legacy way:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the Test Case that you want to create a Teststep in."),(0,r.kt)("li",{parentName:"ol"},'Click "',(0,r.kt)("em",{parentName:"li"},"+ Teststep"),'" and Click "',(0,r.kt)("em",{parentName:"li"},"+ Change"),'" to add a Change Object Teststep.'),(0,r.kt)("li",{parentName:"ol"},"Select an entity. You can search by name."),(0,r.kt)("li",{parentName:"ol"},"Select the previous Teststep that returns the object that needs to be changed. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.")),(0,r.kt)("p",null,"From there:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," that you want to use and enter a value."),(0,r.kt)("li",{parentName:"ul"},"Click '+Add' for each association that you want to set. Use the ",(0,r.kt)("i",{class:"fa-empty-set"}),' "Set empty" button to clear the association. Note that multiple values can only be set for both way reference set (many to many) associations.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Alternatively"),' you can choose to fill all the attributes and associations using existing values in the database, by clicking "',(0,r.kt)("i",{class:"fas fa-database"}),' Fill with values from database"!'),(0,r.kt)("li",{parentName:"ul"},'Click on the "Save" button. ')),(0,r.kt)("p",null,"Note that not checking an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.\nChecking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value ('')."))}u.isMDXComponent=!0}}]);