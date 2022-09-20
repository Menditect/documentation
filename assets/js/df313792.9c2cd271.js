"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[729],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8614:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="Delete Object",c={unversionedId:"refguide/Teststep/delete",id:"refguide/Teststep/delete",title:"Delete Object",description:"This document is currently being updated for the upcoming MTA release.",source:"@site/docs/refguide/Teststep/5-delete.md",sourceDirName:"refguide/Teststep",slug:"/refguide/Teststep/delete",permalink:"/refguide/Teststep/delete",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retrieve Object",permalink:"/refguide/Teststep/retrieve"},next:{title:"Persist",permalink:"/refguide/Teststep/persist"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Delete Object Teststep",id:"add-a-delete-object-teststep",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delete-object"},"Delete Object"),(0,i.kt)("table",{bgcolor:"orange"},(0,i.kt)("td",{width:"25%"},(0,i.kt)("font",{color:"black"},(0,i.kt)("b",null," This document is currently being updated for the upcoming MTA release. ")))),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"With this ",(0,i.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, an object or objects will be put on the list for objects to be deleted using a ",(0,i.kt)("a",{parentName:"p",href:"persist"},"Persist")," step. "),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"add-a-delete-object-teststep"},"Add a Delete Object Teststep"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("em",{parentName:"li"},"+ Object"),'" to create an Object Teststep.'),(0,i.kt)("li",{parentName:"ul"},"Enter a name and Select 'Delete' for the Action."),(0,i.kt)("li",{parentName:"ul"},"Select an entity."),(0,i.kt)("li",{parentName:"ul"},'Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.'),(0,i.kt)("li",{parentName:"ul"},"Now, select the object that needs to be deleted, from a previous Teststep. This could be a Create or Retrieve Teststep but also a Microflow Teststep that returns an object.")),(0,i.kt)("p",null,"When deleting objects from multiple entities, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s)."),(0,i.kt)("p",null,"Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available."))}f.isMDXComponent=!0}}]);