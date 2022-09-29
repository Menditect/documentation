"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4307],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6753:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=["components"],o={},l="Retrieve Object",u={unversionedId:"refguide/Older versions/Version 1.6/Teststep/retrieve",id:"refguide/Older versions/Version 1.6/Teststep/retrieve",title:"Retrieve Object",description:"Definition",source:"@site/docs/refguide/Older versions/Version 1.6/Teststep/4-retrieve.md",sourceDirName:"refguide/Older versions/Version 1.6/Teststep",slug:"/refguide/Older versions/Version 1.6/Teststep/retrieve",permalink:"/refguide/Older versions/Version 1.6/Teststep/retrieve",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change Object",permalink:"/refguide/Older versions/Version 1.6/Teststep/change"},next:{title:"Delete Object",permalink:"/refguide/Older versions/Version 1.6/Teststep/delete"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Retrieve Object Teststep",id:"add-a-retrieve-object-teststep",level:3},{value:"Retrieve from database",id:"retrieve-from-database",level:4},{value:"Retrieve by association",id:"retrieve-by-association",level:4},{value:"Retrieve from former Teststep",id:"retrieve-from-former-teststep",level:4}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieve-object"},"Retrieve Object"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"With this ",(0,a.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, objects can be retrieved from database or memory and used in subsequent Teststeps. Also objects that are output from previous teststeps can be filtered. "),(0,a.kt)("p",null,"When setting Attribute Values for a Retrieve Object action, the resulting set of objects will be ",(0,a.kt)("em",{parentName:"p"},"filtered")," by the entered value, and 'empty' if checked, but left blank."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("h3",{id:"add-a-retrieve-object-teststep"},"Add a Retrieve Object Teststep"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("em",{parentName:"li"},"+ Object"),'" to create an Object Teststep.'),(0,a.kt)("li",{parentName:"ul"},"Enter a name and Select 'Retrieve' for the Action."),(0,a.kt)("li",{parentName:"ul"},"Select an entity."),(0,a.kt)("li",{parentName:"ul"},'Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.'),(0,a.kt)("li",{parentName:"ul"},'Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an error, even if only retrieving the first object.'),(0,a.kt)("li",{parentName:"ul"},"Follow any of below steps.")),(0,a.kt)("h4",{id:"retrieve-from-database"},"Retrieve from database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select "Retrieve from database" in the Retrieve options.'),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," and associations.")),(0,a.kt)("h4",{id:"retrieve-by-association"},"Retrieve by association"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select "Retrieve by association" in the Retrieve options.'),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," and associations.")),(0,a.kt)("p",null,"Note that when retrieving by association, data needs to exist either in database, or have been created in the same Test Case. Data created in a previous Test Case that is not saved to the database will be lost."),(0,a.kt)("h4",{id:"retrieve-from-former-teststep"},"Retrieve from former Teststep"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select "Retrieve using output from former test step" in the Retrieve options.'),(0,a.kt)("li",{parentName:"ul"},"Now, select the object that needs to be changed, from a previous Teststep. This could be a Create or Retrieve Teststep but also a Microflow Teststep that returns an object."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," and associations.")),(0,a.kt)("p",null,"Note that when retrieving from a former Teststep in a previous Test Case, data needs to be saved to the database in that Test Case. Data created in a previous Test Case that is not saved to the database will be lost."))}f.isMDXComponent=!0}}]);