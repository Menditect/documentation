"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1014],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(n),y=o,m=f["".concat(u,".").concat(y)]||f[y]||p[y]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1883:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),a=["components"],i={},u="Test with anonymous user",c={unversionedId:"howtos/test-anonymous-user",id:"howtos/test-anonymous-user",title:"Test with anonymous user",description:"Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login.",source:"@site/docs/howtos/test-anonymous-user.md",sourceDirName:"howtos",slug:"/howtos/test-anonymous-user",permalink:"/howtos/test-anonymous-user",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use SSO",permalink:"/howtos/sso"},next:{title:"Test an API",permalink:"/howtos/test-api"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-with-anonymous-user"},"Test with anonymous user"),(0,s.kt)("p",null,"Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login. "),(0,s.kt)("p",null,"MTA however always needs an Execution user that exists as a local user in the environment, to execute the Test Cases with. "),(0,s.kt)("p",null,'If the goal is to test functionality using the role that is assigned to the Anonymous user in the Mendix project, a local user must be created in the environment, with (only) that role assigned. Next, the local user needs to be set as the execution user for the Test Case that is testing the "anonymous" functionality.'))}f.isMDXComponent=!0}}]);