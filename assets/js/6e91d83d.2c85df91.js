"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),v=n,b=u["".concat(c,".").concat(v)]||u[v]||p[v]||i;return a?r.createElement(b,o(o({ref:t},s),{},{components:a})):r.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},9833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={},o="Data variation",l={unversionedId:"data-variation",id:"data-variation",title:"Data variation",description:"Add only relevant attributes",source:"@site/additional/02-bestpractice/data-variation.md",sourceDirName:".",slug:"/data-variation",permalink:"/additional/bestpractice/data-variation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best practice",permalink:"/additional/bestpractice/"},next:{title:"Data management",permalink:"/additional/bestpractice/datamanagement"}},c={},d=[{value:"Add only relevant attributes",id:"add-only-relevant-attributes",level:2},{value:"Wrong:",id:"wrong",level:3},{value:"Right:",id:"right",level:3},{value:"Vary with only one value",id:"vary-with-only-one-value",level:2},{value:"Wrong:",id:"wrong-1",level:3},{value:"Right:",id:"right-1",level:3},{value:"Feedback?",id:"feedback",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-variation"},"Data variation"),(0,n.kt)("h2",{id:"add-only-relevant-attributes"},"Add only relevant attributes"),(0,n.kt)("p",null,"Only add relevant attributes to datavariation. Attributes that have the same value for all variations can be specified in the test case. This keeps the datavariation pages clean."),(0,n.kt)("h3",{id:"wrong"},"Wrong:"),(0,n.kt)("p",null,"Consider the situation of booking a rental car, where the booking price is determined by only a couple attribute's values."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Do not add all attributes",src:a(1161).Z,width:"1090",height:"468"})),(0,n.kt)("h3",{id:"right"},"Right:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add only relevant attributes",src:a(5971).Z,width:"1136",height:"215"})),(0,n.kt)("h2",{id:"vary-with-only-one-value"},"Vary with only one value"),(0,n.kt)("p",null,"Only change a single attribute value per variation. Add more variations if you need to cover more situations. If you get an unexpected test run result, you will know which attribute caused it."),(0,n.kt)("h3",{id:"wrong-1"},"Wrong:"),(0,n.kt)("p",null,"Consider the situation of booking a rental car, where the booking price is determined by only a couple attribute's values."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Do not vary more than 1 attribute",src:a(7815).Z,width:"1144",height:"230"})),(0,n.kt)("h3",{id:"right-1"},"Right:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vary only 1 attribute",src:a(3887).Z,width:"1134",height:"222"})),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated 1 March 2024"))}p.isMDXComponent=!0},5971:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bp_dv_01_right-45e43de3312bf28ce42c7bca9e8276bb.png"},1161:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bp_dv_01_wrong-bdaf67dcd19d9fad2af370c09d299cd1.png"},3887:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bp_dv_02_right-03ced7e681f43dc23ef8b5759574bb2f.png"},7815:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bp_dv_02_wrong-f070252c305c54e738ae41fa2a8e8f6b.png"}}]);