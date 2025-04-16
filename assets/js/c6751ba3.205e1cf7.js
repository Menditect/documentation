"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=s,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const o={},a="Add teststep fails",i={unversionedId:"design-tests/add-teststep-fails",id:"design-tests/add-teststep-fails",title:"Add teststep fails",description:"Issue summary",source:"@site/additional/04-knownissues/03-design-tests/add-teststep-fails.md",sourceDirName:"03-design-tests",slug:"/design-tests/add-teststep-fails",permalink:"/additional/knownissues/design-tests/add-teststep-fails",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Revision download fails",permalink:"/additional/knownissues/configure-mta/revision-download-fails"},next:{title:"Construction errors after move Entity",permalink:"/additional/knownissues/design-tests/construction-errors-after-moving-entity"}},l={},u=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Too many attributes or associations",id:"too-many-attributes-or-associations",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"add-teststep-fails"},"Add teststep fails"),(0,s.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,s.kt)("p",null,"While adding a teststep, MTA seems to freeze, or even shuts down and restarts. "),(0,s.kt)("p",null,"The teststep is of type Create / Change / Retrieve. "),(0,s.kt)("p",null,"The freezing starts either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"after selecting the Entity, or"),(0,s.kt)("li",{parentName:"ul"},"after selecting a teststep to fill an Association, or"),(0,s.kt)("li",{parentName:"ul"},'after selecting a teststep as source for "Retrieve by previous teststep".')),(0,s.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,s.kt)("h3",{id:"too-many-attributes-or-associations"},"Too many attributes or associations"),(0,s.kt)("p",null,"There are too many attributes or associations in the Entity. Generally, more than 200 is problematic on an S21 resource pack. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Resolution")),(0,s.kt)("p",null,"The least expensive solution is to create a microflow in the Mendix model that Creates / Changes / Retrieves the object, and ",(0,s.kt)("a",{parentName:"p",href:"../../../Teststep/microflow"},"call that microflow in MTA"),"."),(0,s.kt)("p",null,"An alternative is to upgrade the Mendix resource pack. See Mendix docs: ",(0,s.kt)("a",{parentName:"p",href:"https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack"},"https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack"),"."))}d.isMDXComponent=!0}}]);