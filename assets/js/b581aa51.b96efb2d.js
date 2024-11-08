"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Configure MTA to use SAML SSO",l={unversionedId:"configure-mta/configure-mta-saml",id:"configure-mta/configure-mta-saml",title:"Configure MTA to use SAML SSO",description:"Definition",source:"@site/additional/01-howtos/02-configure-mta/configure-mta-saml.md",sourceDirName:"02-configure-mta",slug:"/configure-mta/configure-mta-saml",permalink:"/additional/howtos/configure-mta/configure-mta-saml",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Prepare Mendix project",permalink:"/additional/howtos/configure-mta/prepare-mendix-project"},next:{title:"Run MTA on premises",permalink:"/additional/howtos/configure-mta/run-mta-on-premise"}},s={},u=[{value:"Definition",id:"definition",level:2},{value:"Enable SAML SSO",id:"enable-saml-sso",level:2},{value:"Configure SAML SSO",id:"configure-saml-sso",level:2},{value:"User provisioning",id:"user-provisioning",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-mta-to-use-saml-sso"},"Configure MTA to use SAML SSO"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"This document describes how to configure MTA to use SAML SSO to authenticate users logging into MTA, instead of using Local Accounts."),(0,a.kt)("p",null,"This document does ",(0,a.kt)("em",{parentName:"p"},"not")," describe how to test an application using SSO authentication. Please read ",(0,a.kt)("a",{parentName:"p",href:"../design-tests/test-without-local-account"},"this howto")," for that."),(0,a.kt)("h2",{id:"enable-saml-sso"},"Enable SAML SSO"),(0,a.kt)("p",null,"The SAML20 module, and the necessary dependency modules, have been imported into MTA. "),(0,a.kt)("p",null,"If you have a on-premises license, please follow the ",(0,a.kt)("a",{parentName:"p",href:"run-mta-on-premise#saml-sso"},"run mta on premises")," howto for SAML SSO first."),(0,a.kt)("p",null,"If Menditect is hosting MTA for you, please ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"contact support")," to have it enabled. "),(0,a.kt)("h2",{id:"configure-saml-sso"},"Configure SAML SSO"),(0,a.kt)("p",null,"The basic configuration for SAML SSO is the same for all Identity Providers and described in the Mendix documentation. The current location of the relevant documentation page is here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mendix.com/appstore/modules/saml/"},"https://docs.mendix.com/appstore/modules/saml/")),(0,a.kt)("p",null,"This configuration has to be done when logged in with the MTA Manager role in MTA."),(0,a.kt)("p",null,"Use these settings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"IdP configuration"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alias"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"[Name your configuration]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response protocol binding"),(0,a.kt)("td",{parentName:"tr",align:null},"POST_BINDING")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use AssertionConsumerService Concept"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Assertion consumer service index"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Read IDP metadata from URL"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Preferred entity descriptor"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"[Will be filled automatically, after uploading the .xml file]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authentication context"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"[Use default configuration]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Identifying assertion type"),(0,a.kt)("td",{parentName:"tr",align:null},"Use Name ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Entity where the user is to be found"),(0,a.kt)("td",{parentName:"tr",align:null},"Administration.Account")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Attribute where the user principal is stored"),(0,a.kt)("td",{parentName:"tr",align:null},"FullName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Allow the module to create users"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use Custom logic for user provisioning"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Custom microflow"),(0,a.kt)("td",{parentName:"tr",align:null},"SSOConfigModule.CustomUserProvisioning")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Encryption settings"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"[Choose your preference, uploading a keypair is not required to enable this setting.]"))))),(0,a.kt)("h2",{id:"user-provisioning"},"User provisioning"),(0,a.kt)("p",null,"MTA uses user provisioning logic like any other Mendix App implementing SAML. It is not possible to change this logic."),(0,a.kt)("p",null,"The SAML20 module will create an Account if a user can be authenticated by the IdP. However, by default, the Account will have no User Roles. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Currently, it is not possible to assign user roles from MTA (after the user has signed in) when implementing SAML. If user roles are assigned in MTA they will be reset from the IdP. The only way to assign user roles is using below logic.  ")),(0,a.kt)("p",null,"In order to have MTA assign the desired roles to created Accounts, you must configure your IdP to use assertion attributes, as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- There must be at least one assertion attribute with the name \"MTA_UserRole\"\n- if the value is 'Administrator', then the 'Administrator' role will be assigned;\n- if the value is 'MTAManager', then the 'MTAManager' role will be assigned;\n- if the value is 'Tester', then the 'Tester' role will be assigned;\n- if the value is 'CiCdApiUser', then the 'CiCdApiUser' role will be assigned;\n")),(0,a.kt)("p",null,"When assigning the 'Administrator' role, MTA must be configured to ",(0,a.kt)("a",{parentName:"p",href:"/additional/howtos/configure-mta/run-mta-on-premise"},"run on-premises"),"."),(0,a.kt)("p",null,"More about User Roles can be found in the ",(0,a.kt)("a",{parentName:"p",href:"manage-accounts#mta-user-roles"},"Manage Accounts howto"),"."),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 31 January 2024"))}d.isMDXComponent=!0}}]);