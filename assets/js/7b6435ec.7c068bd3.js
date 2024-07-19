"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=s.createContext({}),l=function(e){var t=s.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return r?s.createElement(d,i(i({ref:t},c),{},{components:r})):s.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(7462),n=(r(7294),r(3905));const o={},i="Error on execute with a Retrieve action",a={unversionedId:"run-tests/error-on-execute-retrieve-action",id:"run-tests/error-on-execute-retrieve-action",title:"Error on execute with a Retrieve action",description:"Issue summary",source:"@site/additional/04-knownissues/04-run-tests/error-on-execute-retrieve-action.md",sourceDirName:"04-run-tests",slug:"/run-tests/error-on-execute-retrieve-action",permalink:"/additional/knownissues/run-tests/error-on-execute-retrieve-action",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recorder fails",permalink:"/additional/knownissues/design-tests/recorder-fails"},next:{title:"Persist teststep fails",permalink:"/additional/knownissues/run-tests/persist-step-fails"}},u={},l=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Consecutive Retrieve from Former Teststep without Persisting",id:"consecutive-retrieve-from-former-teststep-without-persisting",level:3},{value:"Resolutions",id:"resolutions",level:4}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"error-on-execute-with-a-retrieve-action"},"Error on execute with a Retrieve action"),(0,n.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,n.kt)("p",null,"When using a Retrieve from Former Teststep, pointing to a Teststep that also uses a Retrieve from Former Teststep, you may get an error upon Executing."),(0,n.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,n.kt)("h3",{id:"consecutive-retrieve-from-former-teststep-without-persisting"},"Consecutive Retrieve from Former Teststep without Persisting"),(0,n.kt)("p",null,"This is (an example of) an exact scenario:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test Case 1 contains a Create teststep of a persistable object, but no Persist Teststep or microflow that commits the object."),(0,n.kt)("li",{parentName:"ul"},"Test Case 2 contains a Retrieve from Former Teststep using the teststep in Test Case 1, but no Persist Teststep or microflow that commits the object."),(0,n.kt)("li",{parentName:"ul"},"Test Case 3 contains a Retrieve from Former Teststep using the teststep in Test Case 2, but no Persist Teststep or microflow that commits the object.")),(0,n.kt)("p",null,"When executing, this error will be shown in the Test Run for Test Case 3:"),(0,n.kt)("font",{color:"Red"},"Failed to execute..."),(0,n.kt)("br",null),'Cannot execute pre-action "select object for retrieve run" because entity value runs of the test step run output are not found',(0,n.kt)("p",null,"Other comparable scenario's leading to this error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the object is committed to the database, but deleted thereafter. "),(0,n.kt)("li",{parentName:"ul"},"the object is committed to the database, but the Execution User in Test Case 2 or 3 does not have access to the Entity.")),(0,n.kt)("h4",{id:"resolutions"},"Resolutions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Insert a Persist teststep in Test Case 1 after the first teststep."),(0,n.kt)("li",{parentName:"ol"},"Make sure the Execution User has access to the Entity."),(0,n.kt)("li",{parentName:"ol"},"Avoid using consequtive retrieves from former teststep, but always retrieve from the same teststep (in above example, the teststep in Test Case 1).")))}m.isMDXComponent=!0}}]);