"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3721],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={},s="Access environment",l={unversionedId:"howtos/access-environment",id:"howtos/access-environment",title:"Access environment",description:"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well.",source:"@site/docs/howtos/access-environment.md",sourceDirName:"howtos",slug:"/howtos/access-environment",permalink:"/howtos/access-environment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teststep",permalink:"/refguide/teststep"},next:{title:"Access Mendix model",permalink:"/howtos/access-mendix-model"}},u={},p=[{value:"Feedback?",id:"feedback",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-environment"},"Access environment"),(0,i.kt)("p",null,"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new Test Application, or open an existing one and click on the pencil icon next to the existing plugin user settings, to edit: ",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Edit plugin user",src:n(689).Z,width:"482",height:"73"})),(0,i.kt)("li",{parentName:"ul"},"In the Mendix application under test, a local user has been created with the \u201cMTA Plugin\u201d role. Enter the username and password in this page: ",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Edit plugin user",src:n(6315).Z,width:"697",height:"301"})," "),(0,i.kt)("li",{parentName:"ul"},"Click \u201cCheck plugin\u201d to make sure a connection can be made.\nNote: If this check is performed three times unsuccessfully because the password is incorrect, Mendix can temporarily block the user.")),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}m.isMDXComponent=!0},689:function(e,t,n){t.Z=n.p+"assets/images/edit-plugin-user-1-31c08edff7d95695f4b68491e4569b97.png"},6315:function(e,t,n){t.Z=n.p+"assets/images/edit-plugin-user-2-54192d15f0f7a4c93989b638a13dd85b.png"}}]);