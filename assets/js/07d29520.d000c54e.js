"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6196],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9059:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={},l="Microflow missing from list",c={unversionedId:"knownissues/microflow-missing",id:"knownissues/microflow-missing",title:"Microflow missing from list",description:"Issue summary",source:"@site/docs/knownissues/microflow-missing.md",sourceDirName:"knownissues",slug:"/knownissues/microflow-missing",permalink:"/knownissues/microflow-missing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Compile Error",permalink:"/knownissues/java-compile-error"},next:{title:"Persist teststep fails",permalink:"/knownissues/persist-step-fails"}},u={},f=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2}],m={toc:f};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microflow-missing-from-list"},"Microflow missing from list"),(0,i.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,i.kt)("p",null,"In some cases a Microflow may not appear in the list of microflows when you add a Microflow Teststep or are Generating a Microflow test."),(0,i.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,i.kt)("p",null,"The reason is that the Microflow is not included when downloading the model from Mendix. Mendix will not include a Microflow when it's implementation is hidden or if the Microflow is part of a hidden or private Module. "),(0,i.kt)("p",null,"To test such a microflow, create a non-private microflow, outside of any hidden or private modules, that calls this microflow as a submicroflow."))}p.isMDXComponent=!0}}]);