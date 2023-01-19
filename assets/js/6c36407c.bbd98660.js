"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4668],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(i),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return i?n.createElement(h,l(l({ref:t},d),{},{components:i})):n.createElement(h,l({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7694:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const o={},l="Application Revision",r={unversionedId:"application-revision",id:"version-1.8.0/application-revision",title:"Application Revision",description:"Definition",source:"@site/versioned_docs/version-1.8.0/application-revision.md",sourceDirName:".",slug:"/application-revision",permalink:"/1.8.0/application-revision",draft:!1,tags:[],version:"1.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Environment",permalink:"/1.8.0/application-environment"},next:{title:"Application",permalink:"/1.8.0/application"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Application revision",id:"actions-on-an-application-revision",level:2},{value:"View downloaded Application revisions for an Application",id:"view-downloaded-application-revisions-for-an-application",level:3},{value:"Add an Application revision",id:"add-an-application-revision",level:3},{value:"Apply a downloaded Application revision to Test Suites in a Test Configuration",id:"apply-a-downloaded-application-revision-to-test-suites-in-a-test-configuration",level:3},{value:"Delete a downloaded Application revision",id:"delete-a-downloaded-application-revision",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-revision"},"Application Revision"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"An Application Revision is a development version of a Mendix application. Revisions are created when Mendix model changes are commited in Mendix Studio Pro or Mendix Studio."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about revisions."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Author"),(0,a.kt)("td",{parentName:"tr",align:null},"The creator of the revision (committer).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Commit message"),(0,a.kt)("td",{parentName:"tr",align:null},"The description added to the commit action. Typically this contains information about the model changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Create commit date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date when the revision is created (or the commit is done).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mendix version"),(0,a.kt)("td",{parentName:"tr",align:null},"The version of Mendix Studio (Pro) in which the ",(0,a.kt)("a",{parentName:"td",href:"application"},"Application")," is developed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Progress"),(0,a.kt)("td",{parentName:"tr",align:null},"An indication of the download progression of the Application revision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Revision number"),(0,a.kt)("td",{parentName:"tr",align:null},"The commit number of the model of the Mendix application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total modules"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of modules in application revision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total entities"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of entities in application revision.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total microflows"),(0,a.kt)("td",{parentName:"tr",align:null},"The total number of microflows in application revision.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The revision for a ",(0,a.kt)("a",{parentName:"li",href:"test-application"},"Test Application")," should be identical to the revision in use by ",(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configurations")," in order to be able to execute the Test Configuration. This can be achieved by downloading the revision and applying it to the ",(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suites")," in a Test Configuration."),(0,a.kt)("li",{parentName:"ul"},"The Application revision information cannot be deleted from MTA if a Test Configuration is using the Application revision.")),(0,a.kt)("h2",{id:"actions-on-an-application-revision"},"Actions on an Application revision"),(0,a.kt)("h3",{id:"view-downloaded-application-revisions-for-an-application"},"View downloaded Application revisions for an Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,a.kt)("li",{parentName:"ul"},"Select an ",(0,a.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Application revisions" tab.'),(0,a.kt)("li",{parentName:"ul"},"The Application revisions are shown on the right pane.")),(0,a.kt)("h3",{id:"add-an-application-revision"},"Add an Application revision"),(0,a.kt)("p",null,"Add a new Application revision to MTA by downloading it from teamserver.\nDepending on the ",(0,a.kt)("a",{parentName:"p",href:"application-environment"},"Application Environment"),", there are two possible ways of achieving this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a MendixCloud Application Environment:",(0,a.kt)("br",null),' - Navigate to the "Test applications" tab of the ',(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".",(0,a.kt)("br",null)," - Click on ",(0,a.kt)("i",{class:"fas fa-sync"})," next to the revision number. The download will start automatically if a new revision is available on Mendix teamserver and this revision is deployed to the Application Environment."),(0,a.kt)("li",{parentName:"ul"},"For a Custom Application Environment:",(0,a.kt)("br",null),' - Navigate to the "Test applications" tab of the Test Configuration.',(0,a.kt)("br",null)," - Click on ",(0,a.kt)("i",{class:"fa fa-pencil"})," next to the revision number. A selection page is shown.",(0,a.kt)("br",null)," - Select an Application Branch and a revision to download. The download starts automatically.")),(0,a.kt)("p",null,"Note that downloading can take some time depending on the size of the Mendix project."),(0,a.kt)("h3",{id:"apply-a-downloaded-application-revision-to-test-suites-in-a-test-configuration"},"Apply a downloaded Application revision to Test Suites in a Test Configuration"),(0,a.kt)("p",null,"A new Application revision must be applied to the ",(0,a.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," in a Test Configuration, in order to be able to execute the Test Configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the \u201cApply to Test Suites\u201d button for the selected Test Configuration. MTA will evaluate all model changes and check the consistency of the Test Suite definitions with the Mendix model. If the test model and the Mendix model are not compliant a consistency error will be shown.")),(0,a.kt)("p",null,"Note that this can take some time depending on the size of the Mendix project, the number and size of Test Suites in the Test Configuration]."),(0,a.kt)("h3",{id:"delete-a-downloaded-application-revision"},"Delete a downloaded Application revision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,a.kt)("li",{parentName:"ul"},"Select an Application, MTA will show detailed Application information."),(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Application revisions" tab.'),(0,a.kt)("li",{parentName:"ul"},"MTA will show all Application revisions on the right pane."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-trash-alt"})," to delete the Application revision. Note this is only possible when the Application revision is no longer in use by a Test Configuration. Application revisions are only removed from MTA; not from the Mendix repository.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 20 september 2022"))}c.isMDXComponent=!0}}]);