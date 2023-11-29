"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2599],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>v});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(i),m=a,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return i?n.createElement(v,r(r({ref:t},d),{},{components:i})):n.createElement(v,r({ref:t},d))}));function v(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6207:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:6},r="Application Revision",l={unversionedId:"application-revision",id:"version-2.4.0/application-revision",title:"Application Revision",description:"Definition",source:"@site/versioned_docs/version-2.4.0/application-revision.md",sourceDirName:".",slug:"/application-revision",permalink:"/2.4.0/application-revision",draft:!1,tags:[],version:"2.4.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Application Instance",permalink:"/2.4.0/application-instance"},next:{title:"Archive",permalink:"/2.4.0/archive"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Application revision",id:"actions-on-an-application-revision",level:2},{value:"View downloaded Application revisions for an Application",id:"view-downloaded-application-revisions-for-an-application",level:3},{value:"View downloaded elements in a revision",id:"view-downloaded-elements-in-a-revision",level:3},{value:"Add an Application revision",id:"add-an-application-revision",level:3},{value:"Change the Application revision for a Test Configuration",id:"change-the-application-revision-for-a-test-configuration",level:3},{value:"Adapt Test Suites in a Test Configuration to a downloaded Application revision",id:"adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision",level:3},{value:"Restore previous revision of Test Suites in a Test Configuration",id:"restore-previous-revision-of-test-suites-in-a-test-configuration",level:3},{value:"Delete a downloaded Application revision",id:"delete-a-downloaded-application-revision",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-revision"},"Application Revision"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"An Application Revision is a development version of a Mendix ",(0,a.kt)("a",{parentName:"p",href:"application"},"Application"),". Revisions are created when Mendix model changes are commited in Mendix Studio Pro or Mendix Studio."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/version-control/#revision"},"Mendix documentation")," for more information about revisions."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Author"),(0,a.kt)("td",{parentName:"tr",align:null},"The creator of the revision (committer).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Commit message"),(0,a.kt)("td",{parentName:"tr",align:null},"The description added to the commit action. Typically this contains information about the model changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Create commit date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date when the revision is created (or the commit is done).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mendix version"),(0,a.kt)("td",{parentName:"tr",align:null},"The version of Mendix Studio (Pro) in which the Application is developed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Commit id"),(0,a.kt)("td",{parentName:"tr",align:null},"The commit number of the model of the Mendix application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total modules"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of modules in application revision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total entities"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of entities in application revision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total microflows"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of microflows in application revision.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Application revision information cannot be deleted from MTA if a Test Configuration is using the Application revision.")),(0,a.kt)("h2",{id:"actions-on-an-application-revision"},"Actions on an Application revision"),(0,a.kt)("h3",{id:"view-downloaded-application-revisions-for-an-application"},"View downloaded Application revisions for an Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,a.kt)("li",{parentName:"ul"},"Select an Application by clicking on the tile."),(0,a.kt)("li",{parentName:"ul"},'Navigate to "App revisions".')),(0,a.kt)("h3",{id:"view-downloaded-elements-in-a-revision"},"View downloaded elements in a revision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,a.kt)("li",{parentName:"ul"},"Select an Application by clicking on the tile."),(0,a.kt)("li",{parentName:"ul"},'Navigate to "App revisions" to view the Application revisions.'),(0,a.kt)("li",{parentName:"ul"},'Click on "',(0,a.kt)("i",{class:"fal fa-info-circle"}),'" to view Modules, Entities and Microflows in this revision.')),(0,a.kt)("h3",{id:"add-an-application-revision"},"Add an Application revision"),(0,a.kt)("p",null,"Add a new Application revision to MTA by downloading it from teamserver. The only way to download a revision, is if you select this revision to be used in a Test Configuration."),(0,a.kt)("p",null,"There are two possible ways of achieving this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-configuration#create-a-new-test-configuration"},"Add a new Test Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#change-the-application-revision-for-a-test-configuration"},"Change the Application revision for a Test Configuration"))),(0,a.kt)("p",null,"Note that downloading can take some time depending on the size of the Mendix project."),(0,a.kt)("h3",{id:"change-the-application-revision-for-a-test-configuration"},"Change the Application revision for a Test Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Test configurations" page.'),(0,a.kt)("li",{parentName:"ul"},"Select the Test Configuration."),(0,a.kt)("li",{parentName:"ul"},'Navigate to "App revisions". '),(0,a.kt)("li",{parentName:"ul"},'Click on "Change revision".'),(0,a.kt)("li",{parentName:"ul"},"Select the revision you want to test on."),(0,a.kt)("li",{parentName:"ul"},"MTA will download the revision if it is not yet downloaded.")),(0,a.kt)("h3",{id:"adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision"},"Adapt Test Suites in a Test Configuration to a downloaded Application revision"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"MTA will no longer check if the revision of a Test Configuration matches the one that is running on the Application Instance.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," in a Test Configuration must be adapted to a new downloaded Application revision, in order to be able to execute the Test Configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the Adapt to next revision\u201d button for the selected Test Configuration. MTA will evaluate all model changes and check the consistency of the Test Suite definitions with the Mendix model. If the test model and the Mendix model are not compliant an ",(0,a.kt)("a",{parentName:"li",href:"error"},"Error")," will be shown.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This can take some time depending on the size of the Mendix project, the number and size of Test Suites in the Test Configuration. The adapt is running as a background process, you can continue using MTA. However, you cannot edit a configuration for which the adapt is running (A limited view of the configuration is possible during the adapt).")),(0,a.kt)("h3",{id:"restore-previous-revision-of-test-suites-in-a-test-configuration"},"Restore previous revision of Test Suites in a Test Configuration"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"snapshot"},"Snapshot"),"."),(0,a.kt)("h3",{id:"delete-a-downloaded-application-revision"},"Delete a downloaded Application revision"),(0,a.kt)("p",null,"It is no longer possible to delete downloaded revisions manually.\nApplication revisions are cleaned up nightly by MTA if they are no longer in use."),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-instance"},"Application Instance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-setting"},"Test Setting"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated: 29 september 2023"))}u.isMDXComponent=!0}}]);