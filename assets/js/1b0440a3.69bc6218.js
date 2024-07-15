"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Manage Accounts",s={unversionedId:"configure-mta/manage-accounts",id:"configure-mta/manage-accounts",title:"Manage Accounts",description:"To manage MTA accounts, login as MTA Manager and navigate to MTA Management -> MTA Users.",source:"@site/additional/01-howtos/02-configure-mta/manage-accounts.md",sourceDirName:"02-configure-mta",slug:"/configure-mta/manage-accounts",permalink:"/additional/howtos/configure-mta/manage-accounts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connect Menditect Extension to MTA",permalink:"/additional/howtos/connect-mta/connect-menditect-extension-to-mta"},next:{title:"Prepare for using MTA for the first time",permalink:"/additional/howtos/configure-mta/prepare-for-using-mta"}},c={},l=[{value:"MTA User Roles",id:"mta-user-roles",level:2},{value:"MTAManager",id:"mtamanager",level:3},{value:"Tester",id:"tester",level:3},{value:"ApiUser",id:"apiuser",level:3},{value:"MTAConnectionUser",id:"mtaconnectionuser",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-accounts"},"Manage Accounts"),(0,r.kt)("p",null,"To manage MTA accounts, login as ",(0,r.kt)("a",{parentName:"p",href:"#mtamanager"},"MTA Manager")," and navigate to MTA Management -> MTA Users."),(0,r.kt)("p",null,"Accounts in MTA are managed like most Mendix Apps: using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/appstore/modules/administration/"},"Administration")," module. "),(0,r.kt)("p",null,"When creating an account, make sure to set the Time zone according to where the user will log in. For CiCdApiUser accounts, set the Time zone to the same Time zone as where MTA is hosted. "),(0,r.kt)("p",null,"Passwords have to meet the password policy criteria:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Length minimum of 6 characters."),(0,r.kt)("li",{parentName:"ul"},"Contain a digit."),(0,r.kt)("li",{parentName:"ul"},"Contain an uppercase character."),(0,r.kt)("li",{parentName:"ul"},"Contain non-alphanumeric characters.")),(0,r.kt)("p",null,"When assigning user roles, these are the possibilities:"),(0,r.kt)("h2",{id:"mta-user-roles"},"MTA User Roles"),(0,r.kt)("p",null,"Below are the roles that can be assigned when logged in as MTA Manager."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Logging in as ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," will only allow you to create other Administrator Accounts, or MTA Manager Accounts. ",(0,r.kt)("br",null),"Logging in as Administrator is only applicable ",(0,r.kt)("a",{parentName:"p",href:"run-mta-on-premise"},"when MTA is hosted on-premises"),".")),(0,r.kt)("h3",{id:"mtamanager"},"MTAManager"),(0,r.kt)("p",null,"This role can Manage Accounts and configure Mendix credentials for Accounts. It can also ",(0,r.kt)("a",{parentName:"p",href:"configure-mta-saml"},"configure SAML SSO"),"."),(0,r.kt)("h3",{id:"tester"},"Tester"),(0,r.kt)("p",null,"This role can manage ",(0,r.kt)("a",{parentName:"p",href:"../../../application"},"Applications"),", build ",(0,r.kt)("a",{parentName:"p",href:"../../../test-configuration"},"Test Configurations")," and ",(0,r.kt)("a",{parentName:"p",href:"../../../test-run"},"run tests"),". Use this role when creating Accounts for users who want to use MTA for testing."),(0,r.kt)("h3",{id:"apiuser"},"ApiUser"),(0,r.kt)("p",null,"This role can call endpoints in the ",(0,r.kt)("a",{parentName:"p",href:"../../../api"},"Public API"),". "),(0,r.kt)("h3",{id:"mtaconnectionuser"},"MTAConnectionUser"),(0,r.kt)("p",null,"This role should ",(0,r.kt)("strong",{parentName:"p"},"not")," be assigned to new Accounts. There is only one MTA Connection user, that should be configured for the ",(0,r.kt)("a",{parentName:"p",href:"../connect-mta/import-plugin#configuring-connection-user-in-mta"},"MTA Plugin"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 30 January 2024"))}m.isMDXComponent=!0}}]);