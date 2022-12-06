"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={},l="Revision download fails",u={unversionedId:"knownissues/revision-download-fails",id:"knownissues/revision-download-fails",title:"Revision download fails",description:"Issue summary",source:"@site/docs/knownissues/revision-download-fails.md",sourceDirName:"knownissues",slug:"/knownissues/revision-download-fails",permalink:"/knownissues/revision-download-fails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recorder fails",permalink:"/knownissues/recorder-fails"},next:{title:"Teststeps are not correctly numbered",permalink:"/knownissues/teststepnumbering"}},p={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Edit Develop rights on App level not granted",id:"edit-develop-rights-on-app-level-not-granted",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"revision-download-fails"},"Revision download fails"),(0,i.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,i.kt)("p",null,"In some cases an MTA user is not able to download a revision of a Mendix App, even if (s)he is linked to a Mendix user that has access to that App."),(0,i.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,i.kt)("h3",{id:"edit-develop-rights-on-app-level-not-granted"},"Edit Develop rights on App level not granted"),(0,i.kt)("p",null,"Missing App level Develop rights that are applied when selecting a Role in the Team page of a Mendix app."),(0,i.kt)("p",null,"To fix this, log in to Mendix Sprintr with a user having the Scrum Master role, and:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"select the Mendix App;"),(0,i.kt)("li",{parentName:"ul"},"select Team;"),(0,i.kt)("li",{parentName:"ul"},"click on Role settings;"),(0,i.kt)("li",{parentName:"ul"},"click on Edit for the Role that is assigned to the Mendix user;"),(0,i.kt)("li",{parentName:"ul"},"make sure that 'Edit' is set to 'Yes' for the 'Develop' permission.")))}f.isMDXComponent=!0}}]);