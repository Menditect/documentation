"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[582],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||h[f]||i;return n?o.createElement(d,a(a({ref:t},l),{},{components:n})):o.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7337:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="SSO",u={unversionedId:"howtos/sso",id:"howtos/sso",title:"SSO",description:"Menditect uses a username with each test case to indicate who is running it. This is basically the username of a local user account, but could also be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won't be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.",source:"@site/docs/howtos/sso.md",sourceDirName:"howtos",slug:"/howtos/sso",permalink:"/documentation/howtos/sso",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ci/Cd configuration",permalink:"/documentation/howtos/cicd"},next:{title:"Java Compile Error",permalink:"/documentation/knownissues/java-compile-error"}},l=[{value:"Connectiviteitstesten",id:"connectiviteitstesten",children:[],level:2}],h={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sso"},"SSO"),(0,i.kt)("p",null,"Menditect uses a username with each test case to indicate who is running it. This is basically the username of a local user account, but could also be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won't be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.\nIf you specify the SSO ID as execution user in MTA the test case will be executed on behalf of that user. We could add a documentation field on the execution user for this purpose so that you can indicate which user it is with an ID.\nIn this case, we are testing on behalf of an SSO user, but not testing SSO itself. Unfortunately, this is not really easy to automate, because SSO often requires credentials to be entered each time and we would rather not store them in Menditect. Furthermore, if 2-factor authentication has been set up, it is of course not easy to test in an automated way, because the token is then generated somewhere else and we cannot solve this in Menditect anyway.\nWhat could possibly be done for API users with SSO is that an app-specific user/password is created so that we can then give that user to test cases that test an API. However, not all SSO systems support that, so we would have to find that out for you."),(0,i.kt)("h2",{id:"connectiviteitstesten"},"Connectiviteitstesten"),(0,i.kt)("p",null,"MTA can be used to test connectivity by calling an API. The error handling of the API must be given as an output parameter to the microflow otherwise MTA cannot display the possible errors.\nIf you want to use MTA to periodically poll an interface you will have to create the schedule for this via the CI/CD APIs of MTA. MTA itself does not (yet) contain a scheduling mechanism that allows you to periodically run a test."))}p.isMDXComponent=!0}}]);