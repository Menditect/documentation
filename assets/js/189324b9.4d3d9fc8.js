"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={},a="Infinite loop when using deeplink",l={unversionedId:"configure-mta/infinite-loop-using-deeplink",id:"configure-mta/infinite-loop-using-deeplink",title:"Infinite loop when using deeplink",description:"Issue summary",source:"@site/additional/04-knownissues/02-configure-mta/infinite-loop-using-deeplink.md",sourceDirName:"02-configure-mta",slug:"/configure-mta/infinite-loop-using-deeplink",permalink:"/additional/knownissues/configure-mta/infinite-loop-using-deeplink",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generic random error message",permalink:"/additional/knownissues/configure-mta/generic-random-error-message"},next:{title:"Java Compile Error",permalink:"/additional/knownissues/configure-mta/java-compile-error"}},s={},u=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infinite-loop-when-using-deeplink"},"Infinite loop when using deeplink"),(0,i.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,i.kt)("p",null,"When using a deeplink to share a Test Configuration /  Test Case / Test Run etc. combined with SAML SSO, you will run into an infinite redirect loop. "),(0,i.kt)("p",null,"This will only happen after logging in and logging out using SAML SSO."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login using SAML SSO"),(0,i.kt)("li",{parentName:"ul"},"Logout"),(0,i.kt)("li",{parentName:"ul"},"Paste the deeplink in the Address bar and click Go to in the browser, for example:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://mta-menditect-9fo2p.mendixcloud.com/link/testconfiguration/208"))),(0,i.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,i.kt)("p",null,"This is a known issue for the Deeplink module."),(0,i.kt)("p",null,"The best way is to first login using SAML SSO and then open the deeplink URL, instead of using the deeplink URL directly."))}d.isMDXComponent=!0}}]);