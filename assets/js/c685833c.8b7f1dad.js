"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4164],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],l={},p="Application Revision",s={unversionedId:"refguide/application-revision",id:"refguide/application-revision",title:"Application Revision",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/application-revision.md",sourceDirName:"refguide",slug:"/refguide/application-revision",permalink:"/refguide/application-revision",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Environment",permalink:"/refguide/application-environment"},next:{title:"Application",permalink:"/refguide/application"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on an Application Revision",id:"actions-on-an-application-revision",children:[{value:"View downloaded Application Revisions for an Application",id:"view-downloaded-application-revisions-for-an-application",children:[],level:3},{value:"Add an Application Revision",id:"add-an-application-revision",children:[],level:3},{value:"Apply a downloaded Application Revision to Test Suites in a Test Configuration",id:"apply-a-downloaded-application-revision-to-test-suites-in-a-test-configuration",children:[],level:3},{value:"Delete a downloaded Application Revision",id:"delete-a-downloaded-application-revision",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-revision"},"Application Revision"),(0,o.kt)("p",null,"This document is based on MTA version 1.6."),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"An Application revision is a development version of a Mendix application. A revision belongs to an ",(0,o.kt)("a",{parentName:"p",href:"application-branch"},"Application Branch"),". Revisions are created when Mendix model changes are commited in Mendix Studio Pro or Mendix Studio."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mendix.com"},"Mendix documentation")," for more information about revisions."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Author"),(0,o.kt)("td",{parentName:"tr",align:null},"The creator of the revision (committer).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Commit message"),(0,o.kt)("td",{parentName:"tr",align:null},"The description added to the commit action. Typically this contains information about the model changes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create revision date"),(0,o.kt)("td",{parentName:"tr",align:null},"The date when the revision is created (or the commit is done).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mendix version"),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Mendix Studio (Pro) in which the ",(0,o.kt)("a",{parentName:"td",href:"application"},"Application")," is developed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Progress"),(0,o.kt)("td",{parentName:"tr",align:null},"An indication of the download progression of the Application revision.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Revision number"),(0,o.kt)("td",{parentName:"tr",align:null},"The revision number of the model of the Mendix application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total modules"),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of modules in application revision.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total entities"),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of entities in application revision.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total microflows"),(0,o.kt)("td",{parentName:"tr",align:null},"The total number of microflows in application revision.")))),(0,o.kt)("h2",{id:"business-rules"},"Business rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The revision for a ",(0,o.kt)("a",{parentName:"li",href:"test-application"},"Test Application")," should be identical to the revision in use by ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configurations")," in order to be able to execute the Test Configuration. This can be achieved by downloading the revision and applying it to the ",(0,o.kt)("a",{parentName:"li",href:"test-suite"},"Test Suites")," in a Test Configuration."),(0,o.kt)("li",{parentName:"ul"},"The Application Revision information cannot be deleted from MTA if a Test Configuration is using the Application Revision.")),(0,o.kt)("h2",{id:"actions-on-an-application-revision"},"Actions on an Application Revision"),(0,o.kt)("h3",{id:"view-downloaded-application-revisions-for-an-application"},"View downloaded Application Revisions for an Application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab.'),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch"),"."),(0,o.kt)("li",{parentName:"ul"},"The Application Revisions are shown on the right pane.")),(0,o.kt)("h3",{id:"add-an-application-revision"},"Add an Application Revision"),(0,o.kt)("p",null,"Add a new Application Revision to MTA by downloading it from teamserver.\nDepending on the ",(0,o.kt)("a",{parentName:"p",href:"application-environment"},"Application Environment"),", there are two possible ways of achieving this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a MendixCloud Application Environment:",(0,o.kt)("br",null),' - Navigate to the "Test applications" tab of the ',(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".",(0,o.kt)("br",null)," - Click on ",(0,o.kt)("i",{class:"fas fa-sync"})," next to the revision number. The download will start automatically if a new revision is available on Mendix teamserver and this revision is deployed to the Application Environment."),(0,o.kt)("li",{parentName:"ul"},"For a Custom Application Environment:",(0,o.kt)("br",null),' - Navigate to the "Test applications" tab of the Test Configuration.',(0,o.kt)("br",null)," - Click on ",(0,o.kt)("i",{class:"fa fa-pencil"})," next to the revision number. A selection page is shown.",(0,o.kt)("br",null)," - Select an Application Branch and a revision to download. The download starts automatically.")),(0,o.kt)("p",null,"Note that downloading can take some time depending on the size of the Mendix project."),(0,o.kt)("h3",{id:"apply-a-downloaded-application-revision-to-test-suites-in-a-test-configuration"},"Apply a downloaded Application Revision to Test Suites in a Test Configuration"),(0,o.kt)("p",null,"A new Application Revision must be applied to the ",(0,o.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," in a Test Configuration, in order to be able to execute the Test Configuration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the \u201cApply to Test Suites\u201d button for the selected Test Configuration. MTA will evaluate all model changes and check the consistency of the Test Suite definitions with the Mendix model. If the test model and the Mendix model are not compliant a consistency error will be shown.")),(0,o.kt)("p",null,"Note that this can take some time depending on the size of the Mendix project, the number and size of Test Suites in the Test Configuration]."),(0,o.kt)("h3",{id:"delete-a-downloaded-application-revision"},"Delete a downloaded Application Revision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Applications" page to view all Applications that are used in MTA.'),(0,o.kt)("li",{parentName:"ul"},"Select an Application, MTA will show detailed Application information."),(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Application branches & revisions" tab.'),(0,o.kt)("li",{parentName:"ul"},"Select an Application Branch, MTA will show all Application Revisions on the right pane."),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("i",{class:"fas fa-trash-alt"})," to delete the Application Revision. Note this is only possible when the Application Revision is no longer in use by a Test Configuration. Application Revisions are only removed from MTA; not from the Mendix repository.")),(0,o.kt)("h2",{id:"related-topics"},"Related topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application"},"Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"test-application"},"Test Application"))),(0,o.kt)("h2",{id:"feedback"},"Feedback?"),(0,o.kt)("p",null,"Missing anything? ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,o.kt)("p",null,"Last updated 21 april 2022"))}u.isMDXComponent=!0}}]);