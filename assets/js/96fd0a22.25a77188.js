"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={},l="Unit testing",c={unversionedId:"bestpractice/unittest",id:"bestpractice/unittest",title:"Unit testing",description:"In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation.",source:"@site/docs/bestpractice/unittest.md",sourceDirName:"bestpractice",slug:"/bestpractice/unittest",permalink:"/bestpractice/unittest",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Process testing",permalink:"/bestpractice/processtest"},next:{title:"Current release",permalink:"/releasenotes/current"}},u=[{value:"Feedback?",id:"feedback",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,a.kt)("p",null,"In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation."),(0,a.kt)("p",null,"A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there."),(0,a.kt)("p",null,"A unit test in MTA typically looks like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"only one Test Case, where either Security is set to Off (because it's about testing the algorithm and not the User) or multiple copies of the same Test Case with different Execution Users;"),(0,a.kt)("li",{parentName:"ul"},"one or more Teststep(s) creating objects (or microflow calls creating objects);"),(0,a.kt)("li",{parentName:"ul"},"one or more Teststep(s) calling a microflow where some algorithm is performed, with the object(s) as a parameter;"),(0,a.kt)("li",{parentName:"ul"},"one Teststep retrieving the results and containing asserts.")),(0,a.kt)("p",null,"Below steps are optional, not mandatory, but will make it much easier to unit test."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, make sure the microflow or microflows to be tested, have a ",(0,a.kt)("strong",{parentName:"li"},"single responsibility"),". This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. "),(0,a.kt)("li",{parentName:"ul"},"If it can be avoided, ",(0,a.kt)("strong",{parentName:"li"},"do not commit")," any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reuse existing masterdata")," that is necessary to test, instead of creating it from scratch. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Include asserts")," to check the results, for all attributes that are subject to mutation in the microflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Create datavariation"),", to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. ")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 21 april 2022"))}m.isMDXComponent=!0}}]);