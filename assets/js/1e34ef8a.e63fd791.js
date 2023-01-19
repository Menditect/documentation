"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={},i="Record and complete teststeps",o={unversionedId:"howtos/record-user-actions",id:"howtos/record-user-actions",title:"Record and complete teststeps",description:"Definition",source:"@site/additional/01-howtos/record-user-actions.md",sourceDirName:"01-howtos",slug:"/howtos/record-user-actions",permalink:"/additional/howtos/record-user-actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prepare Mendix project",permalink:"/additional/howtos/prepare-mendix-project"},next:{title:"Run your first test in MTA",permalink:"/additional/howtos/run-first-test"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Retrieve teststeps",id:"retrieve-teststeps",level:2},{value:"Combine change object steps",id:"combine-change-object-steps",level:2},{value:"Combine teststeps from multiple recordings",id:"combine-teststeps-from-multiple-recordings",level:2},{value:"Add asserts on every retrieve",id:"add-asserts-on-every-retrieve",level:2},{value:"Handle date and time values",id:"handle-date-and-time-values",level:2},{value:"Handle objects in pages",id:"handle-objects-in-pages",level:2},{value:"Troubleshoot issues",id:"troubleshoot-issues",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"record-and-complete-teststeps"},"Record and complete teststeps"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"This document describes how to complete the created teststeps after recording.\nOther documents about this topic are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../generated-test"},"Recorder")," in the reference guide."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../bestpractice/record-actions"},"Record actions")," in the Best practice section.")),(0,n.kt)("h2",{id:"retrieve-teststeps"},"Retrieve teststeps"),(0,n.kt)("p",null,"By default, all created retrieve teststeps are set to 'From Database'."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure that retrieve actions are done By Association if retrieving a non-persistable object or an object that is not (yet) committed to the database.")),(0,n.kt)("p",null,"An existing object that is subsequently used in a Change Object Teststep or passed as a parameter in a Microflow Teststep, can be retrieved using a Retrieve Object Teststep. However it is not always possible to determine which members are used as constraints in that Teststep. Such Teststeps will be marked in a separate color to indicate they need to be reviewed. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure to verify that the correct associations, attributes, and attribute values are set, then dismiss the warning.")),(0,n.kt)("p",null,"Note that only constraining members that are also visible in the Client are included in the created Teststeps."),(0,n.kt)("h2",{id:"combine-change-object-steps"},"Combine change object steps"),(0,n.kt)("p",null,"If a microflow is called after each change in the page, for instance an 'on change' microflow, the recording result will contain multiple change object teststeps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Merge Change Object teststeps using the results from a former teststep, if they are changing the same object.")),(0,n.kt)("h2",{id:"combine-teststeps-from-multiple-recordings"},"Combine teststeps from multiple recordings"),(0,n.kt)("p",null,"When recording multiple sessions sequentially in the same Test Case it may be efficient to combine them. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microflows that are called to provide context to a page where the user performs the actions, usually only need to be executed once."),(0,n.kt)("li",{parentName:"ul"},"Check create object steps, and make sure the same object is not created twice unneccesarily. Also check the teststeps that use this object.")),(0,n.kt)("h2",{id:"add-asserts-on-every-retrieve"},"Add asserts on every retrieve"),(0,n.kt)("p",null,"To ensure the data that is created in the recording matches expectations, have MTA check the values in each retrieve teststep."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Enrich every retrieve teststep with an Assert on Object count. If the result is 1 object, add an "Equals 1" assert. If the result is a list, add an "Greater than 0" assert.'),(0,n.kt)("li",{parentName:"ul"},"Enrich every attribute that was visible while the recording was created with an Assert on Attribute Value. ")),(0,n.kt)("h2",{id:"handle-date-and-time-values"},"Handle date and time values"),(0,n.kt)("p",null,'All datetime values are set as "Specified date" instead of current datetime with an offset.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check datetime attribute values and make sure to change them to current datetime with an offset where necessary. ")),(0,n.kt)("h2",{id:"handle-objects-in-pages"},"Handle objects in pages"),(0,n.kt)("p",null,'If an object is created by the page and not by a microflow (for instance using a "Create Button" in Mendix) the recorder will create a Create Object Teststep without any members. The values set in the page by the user need to be set in MTA as well. If the object is subsequently committed (saved to the database) also by the page (for instance using a "Save changes" button) and not by a microflow, the recorder will not create a Persist Object Test Step to achieve this. '),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Manually set the members in the Create Object Teststep."),(0,n.kt)("li",{parentName:"ul"},"Manually include a Persist Object Teststep to save changes to the database.")),(0,n.kt)("h2",{id:"troubleshoot-issues"},"Troubleshoot issues"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"A recording results in errors"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Construction errors are most likely result of starting the recording too late. An object that is subject to change or passed as a microflow parameter, can not be found. ",(0,n.kt)("br",null),(0,n.kt)("br",null)," There are two possible fixes: ",(0,n.kt)("br",null)," 1. Delete the created teststeps and retry the recording, and this time login to the Test application, after starting the recording. ",(0,n.kt)("br",null),"  2. Create the necessary teststep that returns the object, place it before the created teststep, and fix the 'from former test step' error.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"A recording results in many (often identical) teststeps"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"In some cases MTA creates many teststeps after finishing the recording or gives a message that the maximum amount of recorded user actions is exceeded. The reason could be that a microflow is executed many times, for instance for each row in a datagrid or listview, or for each change on a page element like a textbox or radiobutton. Ideally, the recorded page(s) or microflow(s) are optimized to prevent this, but this may not always be achievable. In that case it is advisable to limit the amount of test data to only a few test records.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MTA is unable to set enumeration value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"In some cases the recorder is not able to determine an enumeration value. This happens when an enumeration value is deleted from Mendix, but not yet from the database, because a migration script has not yet been executed on the table where the enumeration is used.")))))}d.isMDXComponent=!0}}]);