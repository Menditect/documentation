"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_position:5},a="Test with anonymous user",i={unversionedId:"design-tests/test-anonymous-user",id:"design-tests/test-anonymous-user",title:"Test with anonymous user",description:"Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login.",source:"@site/additional/01-howtos/03-design-tests/test-anonymous-user.md",sourceDirName:"03-design-tests",slug:"/design-tests/test-anonymous-user",permalink:"/additional/howtos/design-tests/test-anonymous-user",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Use a Test Suite variable",permalink:"/additional/howtos/design-tests/use-test-suite-variable"},next:{title:"Test without local Account",permalink:"/additional/howtos/design-tests/test-without-local-account"}},l={},u=[{value:"Feedback?",id:"feedback",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-with-anonymous-user"},"Test with anonymous user"),(0,o.kt)("p",null,"Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login. "),(0,o.kt)("p",null,"MTA however always needs an Execution user that exists as a local user in the environment, to execute the Test Cases with. "),(0,o.kt)("p",null,'If the goal is to test functionality using the role that is assigned to the Anonymous user in the Mendix project, a local user must be created in the environment, with (only) that role assigned. Next, the local user needs to be set as the execution user for the Test Case that is testing the "anonymous" functionality. '),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);