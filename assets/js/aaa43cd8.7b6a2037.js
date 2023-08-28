"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},s="Websocket keeps reconnecting",a={unversionedId:"websocket-keeps-reconnecting",id:"websocket-keeps-reconnecting",title:"Websocket keeps reconnecting",description:"Issue summary",source:"@site/additional/04-knownissues/websocket-keeps-reconnecting.md",sourceDirName:".",slug:"/websocket-keeps-reconnecting",permalink:"/additional/knownissues/websocket-keeps-reconnecting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Websocket error message",permalink:"/additional/knownissues/websocket-error-message"}},l={},c=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Mendix Private Cloud",id:"mendix-private-cloud",level:3},{value:"Google Cloud Platform (GCP)",id:"google-cloud-platform-gcp",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"websocket-keeps-reconnecting"},"Websocket keeps reconnecting"),(0,r.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,r.kt)("p",null,'This is an issue that occurs specifically when Menditect customers have an "On premise" or "Bring your own cloud" license, where MTA is not hosted and managed by Menditect in the Mendix cloud, but by the customer.\nWhen hosting MTA in a private cloud, like Google Cloud Platform (GCP) or Amazon Web Services (AWS), system administrators may notice that the Websocket communication between a Mendix App under test and MTA keeps dropping and reconnecting.\nAlso Test Automators in MTA will notice that the connection to their Mendix App under test appears stable but whenever they execute a test it will fail with an error. '),(0,r.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,r.kt)("p",null,"The issue is due to a default timeout setting on the container orchestration software like Kubernetes. The result will be that any connection will be dropped after a certain amount of time like for example 30 or 60 seconds.\nThe resolution is to extend this setting (the WebSocket Gateway Default Timeout for Mendix Private Cloud).\nHow or where to adjust this setting depends on the software being used."),(0,r.kt)("p",null,"The setting should be adjusted to an adequate time period, higher than the highest expected execution time of a Test Run.\nFor example: one hour (3600 sec)."),(0,r.kt)("p",null,"Some more information is provided below."),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("h3",{id:"mendix-private-cloud"},"Mendix Private Cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#websockets"},"Kubernetes - NGINX Ingress - Websocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-network-settings"},"Endpoint (network) configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mendix.com/developerportal/deploy/private-cloud-operator/#edit-cr"},"Editing the CR"))),(0,r.kt)("h3",{id:"google-cloud-platform-gcp"},"Google Cloud Platform (GCP)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_backendconfig"},"Ingress Configuration - Create Backend Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_service"},"Ingress Configuration - Creating a Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#timeout"},"Ingress Configuration - Backend service timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#same_backendconfig_for_all_service_ports"},"Ingress Configuration - Adding BackendConfig"))))}p.isMDXComponent=!0}}]);