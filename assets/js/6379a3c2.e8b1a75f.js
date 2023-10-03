"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9188],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(s),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return s?r.createElement(m,i(i({ref:t},c),{},{components:s})):r.createElement(m,i({ref:t},c))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=s.length,i=new Array(a);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<a;p++)i[p]=s[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}f.displayName="MDXCreateElement"},6217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=s(7462),n=(s(7294),s(3905));const a={},i="Persist",o={unversionedId:"Teststep/persist",id:"version-2.3.1/Teststep/persist",title:"Persist",description:"Definition",source:"@site/versioned_docs/version-2.3.1/Teststep/6-persist.md",sourceDirName:"Teststep",slug:"/Teststep/persist",permalink:"/2.3.1/Teststep/persist",draft:!1,tags:[],version:"2.3.1",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete Object",permalink:"/2.3.1/Teststep/delete"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Domain model Access",id:"domain-model-access",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Persist Teststep",id:"add-a-persist-teststep",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"persist"},"Persist"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"With this ",(0,n.kt)("a",{parentName:"p",href:"."},"Teststep"),", Objects from a Create or Change Object Teststep that is positioned previously in the same Test Case, are ",(0,n.kt)("strong",{parentName:"p"},"committed")," to the database, and Objects from a Delete Object Teststep that is positioned previously in the same Test Case, are ",(0,n.kt)("strong",{parentName:"p"},"deleted")," from the database."),(0,n.kt)("p",null,"Domain model events (Before and After Commit), if configured, are triggered for Objects that are committed."),(0,n.kt)("p",null,"Domain model events (Before and After Delete), if configured, are triggered for Objects that are deleted."),(0,n.kt)("h2",{id:"domain-model-access"},"Domain model Access"),(0,n.kt)("p",null,"Domain model access rights are not checked during Persist, but in the other teststep types."),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("h3",{id:"add-a-persist-teststep"},"Add a Persist Teststep"),(0,n.kt)("p",null,'To add a Persist step, select Persist as the Action when creating a Teststep. Note that when selecting Persist, the name of the Teststep will be set to "Persist" automatically.'),(0,n.kt)("p",null,"Make sure to always insert the Persist Teststep after the Teststeps that perform other Object actions. "),(0,n.kt)("p",null,"A persist step will store all objects created or changed after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. "),(0,n.kt)("p",null,"A persist step will delete all objects that are marked as deleted after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. "),(0,n.kt)("p",null,"It is possible to have multiple Persist Teststeps in the same Test Case. However, if there is a technical error while executing the Test Case, the entire transaction for that Test Case is always rolled back."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note"),": an object that is created by a microflow (as the output parameter), is not committed to the database by a Persist action. To achieve this, put a ",(0,n.kt)("a",{parentName:"p",href:"change"},"Change Object")," Teststep before the Persist Teststep, that changes the object created by the Microflow Teststep (without actually changing any of the members)."),(0,n.kt)("p",null,"When encountering problems, also consult the ",(0,n.kt)("a",{parentName:"p",href:"../../additional/knownissues/persist-step-fails"},"Known issues"),"."))}u.isMDXComponent=!0}}]);