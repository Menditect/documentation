"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="Access Mendix model",l={unversionedId:"configure-mta/access-mendix-model",id:"configure-mta/access-mendix-model",title:"Access Mendix model",description:"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.",source:"@site/additional/01-howtos/02-configure-mta/access-mendix-model.md",sourceDirName:"02-configure-mta",slug:"/configure-mta/access-mendix-model",permalink:"/additional/howtos/configure-mta/access-mendix-model",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Prepare for using MTA for the first time",permalink:"/additional/howtos/configure-mta/prepare-for-using-mta"},next:{title:"Prepare Mendix project",permalink:"/additional/howtos/configure-mta/prepare-mendix-project"}},s={},c=[{value:"Personal access token",id:"personal-access-token",level:2},{value:"Create your PAT in your Mendix account",id:"create-your-pat-in-your-mendix-account",level:3},{value:"Enter PAT in MTA",id:"enter-pat-in-mta",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-mendix-model"},"Access Mendix model"),(0,i.kt)("p",null,"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.\nFirst time you login as a Tester, you will be provided a page where you can enter the necessary information to create this link."),(0,i.kt)("h2",{id:"personal-access-token"},"Personal access token"),(0,i.kt)("p",null,"A Personal Access Token (PAT) needs to be created to make communication possible with MTA and the Mendix platform.",(0,i.kt)("br",null),"Make sure to store it in a password manager after creation. "),(0,i.kt)("h3",{id:"create-your-pat-in-your-mendix-account"},"Create your PAT in your Mendix account"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://user-settings.mendix.com/link/developersettings"},"https://user-settings.mendix.com/link/developersettings")),(0,i.kt)("li",{parentName:"ul"},"Click \"New token\". Name it 'MTA Test'."),(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Deployment Mendix Cloud")),", ",(0,i.kt)("br",null),"select ",(0,i.kt)("inlineCode",{parentName:"li"},"mx:deployment:read")," "),(0,i.kt)("li",{parentName:"ul"},"Under ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Model Repository")),", ",(0,i.kt)("br",null),"select ",(0,i.kt)("inlineCode",{parentName:"li"},"mx:modelrepository:repo:read")," "),(0,i.kt)("li",{parentName:"ul"},'Click "Create".'),(0,i.kt)("li",{parentName:"ul"},"Store it in the password manager so you don't lose it.")),(0,i.kt)("h3",{id:"enter-pat-in-mta"},"Enter PAT in MTA"),(0,i.kt)("p",null,"Login to MTA using the credentials provided by your MTA Manager."),(0,i.kt)("p",null,"The following popup will appear:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mendix credentials",src:n(9669).Z,width:"877",height:"462"})),(0,i.kt)("p",null,"Now fill in the fields under 'Mendix credentials'"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Mendix account username (the email address you registered with at Mendix);"),(0,i.kt)("li",{parentName:"ul"},"Your PAT;")),(0,i.kt)("p",null,'Then choose "Save".'),(0,i.kt)("p",null,"If you need to change this information later, click the ",(0,i.kt)("i",{class:"fal fa-user-circle"}),"  user icon on the top right."),(0,i.kt)("p",null,"To test if this step was successful, try to ",(0,i.kt)("a",{parentName:"p",href:"../run-tests/run-first-test"},"Add an Application"),". The Mendix projects associated with the given Mendix user should be visible."),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 19 February 2024"))}p.isMDXComponent=!0},9669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mx-credentials-03cc14183c5b4434769de8d6ee0145dd.png"}}]);