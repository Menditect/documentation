"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4646],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>v});var i=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,i,n=function(t,a){if(null==t)return{};var e,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=i.createContext({}),u=function(t){var a=i.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},d=function(t){var a=u(t.components);return i.createElement(s.Provider,{value:a},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(t,a){var e=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(e),m=n,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return e?i.createElement(v,l(l({ref:a},d),{},{components:e})):i.createElement(v,l({ref:a},d))}));function v(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var r=e.length,l=new Array(r);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o[p]="string"==typeof t?t:n,l[1]=o;for(var u=2;u<r;u++)l[u]=e[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},4749:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=e(7462),n=(e(7294),e(3905));const r={sidebar_position:15},l="Data Variation",o={unversionedId:"datavariation",id:"datavariation",title:"Data Variation",description:"Definition",source:"@site/docs/datavariation.md",sourceDirName:".",slug:"/datavariation",permalink:"/datavariation",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Coverage Goal",permalink:"/coverage-goal"},next:{title:"Data Variation Item",permalink:"/datavariation-item"}},s={},u=[{value:"Definition",id:"definition",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Data Variation",id:"actions-on-data-variation",level:2},{value:"View Test Suite Data Variation",id:"view-test-suite-data-variation",level:3},{value:"Migrate Test Suite Data Variation to Test Case Data Variation",id:"migrate-test-suite-data-variation-to-test-case-data-variation",level:3},{value:"Remove all Test Suite Data Variation",id:"remove-all-test-suite-data-variation",level:3},{value:"View Test Case Data Variation",id:"view-test-case-data-variation",level:3},{value:"Migrate Test Case Data Variation to Test Suite Data Variation",id:"migrate-test-case-data-variation-to-test-suite-data-variation",level:3},{value:"Remove all Test Case Data Variation",id:"remove-all-test-case-data-variation",level:3},{value:"Add items to Data Variation",id:"add-items-to-data-variation",level:3},{value:"Add a Data Variation run",id:"add-a-data-variation-run",level:3},{value:"Delete a Data Variation run",id:"delete-a-data-variation-run",level:3},{value:"Edit Data Variation values",id:"edit-data-variation-values",level:3},{value:"Edit Data Variation description",id:"edit-data-variation-description",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:u},p="wrapper";function c(t){let{components:a,...e}=t;return(0,n.kt)(p,(0,i.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-variation"},"Data Variation"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Data Variation is used to execute the same test multiple times, but each time with different values for Attributes and Asserts. "),(0,n.kt)("p",null,"Data Variation can be defined on the ",(0,n.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," or ",(0,n.kt)("a",{parentName:"p",href:"test-case"},"Test Case")," level. "),(0,n.kt)("p",null,"To change the value of an Attribute or Assert per Test Run, it needs to be explicitly included in the Data Variation.\nIt is possible to combine Test Suite datavariation and Test Case variation in the same Test Suite. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"On the Test Case level, a choice has to be made between the Test Suite / Test Case datavariation when varying on an Attribute or Assert. Once the choice is made, it can only be undone by excluding the varied Attributes and Asserts.")),(0,n.kt)("p",null,"An included Attribute or Assert is referred to in the MTA Documentation as a ",(0,n.kt)("a",{parentName:"p",href:"datavariation-item"},"Data Variation Items"),"."),(0,n.kt)("p",null,"For each data variation of a Test Suite, a Test Suite Run will be created. For each data variation of a Test Case, a Test Case Run will be created. Therefore, if there is a Test Case with Test Case datavariation and another Test Case with Test Suite datavariation in the same Test Suite, this will have a multiplier-effect."),(0,n.kt)("p",null,"It is ",(0,n.kt)("strong",{parentName:"p"},"not possible")," to execute one single column in the data variation."),(0,n.kt)("h2",{id:"business-rules"},"Business rules"),(0,n.kt)("p",null,"None. "),(0,n.kt)("p",null,"Note that it is possible to have a data variation that does not consist of data variation items. This happens when all data variation items are deleted. The result is that the Test Suite or Test Case will simply be ran multiple times but with the exact same data. "),(0,n.kt)("p",null,"To resolve this, use below guide to remove all Data Variation."),(0,n.kt)("h2",{id:"actions-on-data-variation"},"Actions on Data Variation"),(0,n.kt)("h3",{id:"view-test-suite-data-variation"},"View Test Suite Data Variation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Open the Test Configuration and click "',(0,n.kt)("i",{class:"fal fa-cog"}),' Configure" to open the Test Suite. '),(0,n.kt)("li",{parentName:"ul"},'Navigate to "',(0,n.kt)("i",{class:"fal fa-table"}),' Data variation" in the left menu.')),(0,n.kt)("h3",{id:"migrate-test-suite-data-variation-to-test-case-data-variation"},"Migrate Test Suite Data Variation to Test Case Data Variation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-ellipsis"})," on the top right of the Data Variaton page."),(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fa-light fa-arrow-right"}),' Move to test case data variation".'),(0,n.kt)("li",{parentName:"ul"},"Select the Test Case that you want to migrate from Test Suite Data Variation to Test Case Data Variation.")),(0,n.kt)("h3",{id:"remove-all-test-suite-data-variation"},"Remove all Test Suite Data Variation"),(0,n.kt)("p",null,"To completely remove all Data Variation Items and also remove all Data Variations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-ellipsis"})," on the top right of the Data Variaton page."),(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-trash-alt"}),' Delete test suite data variation".')),(0,n.kt)("h3",{id:"view-test-case-data-variation"},"View Test Case Data Variation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Open the Test Configuration and click "',(0,n.kt)("i",{class:"fal fa-cog"}),' Configure" to open the Test Suite. '),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-ellipsis"})," on the Test Case."),(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fa-light fa-table-rows"}),' View data variation".')),(0,n.kt)("h3",{id:"migrate-test-case-data-variation-to-test-suite-data-variation"},"Migrate Test Case Data Variation to Test Suite Data Variation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-ellipsis"})," on the top right of the Data Variaton popup."),(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fa-light fa-arrow-right"}),' Move to test suite data variation".'),(0,n.kt)("li",{parentName:"ul"},"Confirm.")),(0,n.kt)("h3",{id:"remove-all-test-case-data-variation"},"Remove all Test Case Data Variation"),(0,n.kt)("p",null,"To completely remove all Data Variation Items and also remove all Data Variations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("i",{class:"fas fa-ellipsis"})," on the top right of the Data Variaton popup."),(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-trash-alt"}),' Delete test case data variation".')),(0,n.kt)("p",null,"The page will close."),(0,n.kt)("h3",{id:"add-items-to-data-variation"},"Add items to Data Variation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"datavariation-item#create-a-data-variation-item"},"Create a data variation item.")),(0,n.kt)("h3",{id:"add-a-data-variation-run"},"Add a Data Variation run"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Test Suite data variation page or Test Case data variation popup."),(0,n.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation run you want to create a copy from, for instance the column labeled ",(0,n.kt)("em",{parentName:"li"},"# 1"),". "),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("em",{parentName:"li"},"Copy"),'".')),(0,n.kt)("h3",{id:"delete-a-data-variation-run"},"Delete a Data Variation run"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Test Suite data variation page or Test Case data variation popup."),(0,n.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation run you want to delete, for instance the column labeled ",(0,n.kt)("em",{parentName:"li"},"# 2"),". "),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("i",{class:"fas fa-trash-alt"}),".")),(0,n.kt)("p",null,"Note that you cannot delete the first column labeled ",(0,n.kt)("em",{parentName:"p"},"# 1"),"."),(0,n.kt)("h3",{id:"edit-data-variation-values"},"Edit Data Variation values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Test Suite data variation page or Test Case data variation popup."),(0,n.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to edit, for instance the column labeled ",(0,n.kt)("em",{parentName:"li"},"# 2"),". "),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("i",{class:"fas fa-pencil"}),' Edit values".')),(0,n.kt)("h3",{id:"edit-data-variation-description"},"Edit Data Variation description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Test Suite data variation page or Test Case data variation popup."),(0,n.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to describe, for instance the column labeled ",(0,n.kt)("em",{parentName:"li"},"# 2"),". "),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("i",{class:"fas fa-pencil"}),' Edit description".')),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"Assert"},"Assert")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated: 19 april 2023"))}c.isMDXComponent=!0}}]);