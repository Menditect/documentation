"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7996:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],l={},p="Application Revision",s={unversionedId:"definitions/application-revision",id:"definitions/application-revision",title:"Application Revision",description:"Definition",source:"@site/docs/definitions/application-revision.md",sourceDirName:"definitions",slug:"/definitions/application-revision",permalink:"/documentation/definitions/application-revision",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Environment",permalink:"/documentation/definitions/application-environment"},next:{title:"Application",permalink:"/documentation/definitions/application"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Application Revision",id:"actions-on-application-revision",children:[{value:"View downloaded Application Revisions for an Application",id:"view-downloaded-application-revisions-for-an-application",children:[],level:3},{value:"Create a new Application Revision",id:"create-a-new-application-revision",children:[],level:3},{value:"Applying a downloaded Application Revision to the Test Suites in a Test Configuration",id:"applying-a-downloaded-application-revision-to-the-test-suites-in-a-test-configuration",children:[],level:3},{value:"Delete downloaded Application Revision",id:"delete-downloaded-application-revision",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-revision"},"Application Revision"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A revision in a ",(0,o.kt)("a",{parentName:"p",href:"application-branch"},"branch")," on teamserver used by an ",(0,o.kt)("a",{parentName:"p",href:"application"},"Application"),". Revisions are generally created by someone committing their changes made in the Mendix modeler or Mendix studio. "),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Author"),(0,o.kt)("td",{parentName:"tr",align:null},"Creator of the revision (committer)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Commit message"),(0,o.kt)("td",{parentName:"tr",align:null},"Commit message of the revision")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create revision date"),(0,o.kt)("td",{parentName:"tr",align:null},"Date when the revision is created (or the commit is done)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mendix version"),(0,o.kt)("td",{parentName:"tr",align:null},"Version string of the Mendix version of the app project in this revision")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Progress"),(0,o.kt)("td",{parentName:"tr",align:null},"Progress of the download of the application revision")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Revision number"),(0,o.kt)("td",{parentName:"tr",align:null},"The revisionumber of the model of the Mendix application")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total modules"),(0,o.kt)("td",{parentName:"tr",align:null},"Total number of modules in application revision")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total entities"),(0,o.kt)("td",{parentName:"tr",align:null},"Total number of entities in application revision")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total microflows"),(0,o.kt)("td",{parentName:"tr",align:null},"Total number of microflows in application revision")))),(0,o.kt)("h2",{id:"business-rules"},"Business rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The revision for a ",(0,o.kt)("a",{parentName:"li",href:"test-application"},"Test application")," should be identical to the revision in use by ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configurations")," in order to be able to execute the ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),". This can be achieved by downloading the revision and applying it to the ",(0,o.kt)("a",{parentName:"li",href:"test-suite"},"Test Suites")," in a ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".")),(0,o.kt)("h2",{id:"actions-on-application-revision"},"Actions on Application Revision"),(0,o.kt)("h3",{id:"view-downloaded-application-revisions-for-an-application"},"View downloaded Application Revisions for an Application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the Applications page to view all Applications that are used in MTA."),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,o.kt)("li",{parentName:"ul"},"Go to the Application branches & revisions tab."),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch"),"."),(0,o.kt)("li",{parentName:"ul"},"The Application Revisions are shown on the right pane.")),(0,o.kt)("h3",{id:"create-a-new-application-revision"},"Create a new Application Revision"),(0,o.kt)("p",null,"To create a new Application Revision in MTA, the revision on teamserver must be downloaded.\nDepending on the ",(0,o.kt)("a",{parentName:"p",href:"application-environment"},"Application Environment"),", there are two possible ways of achieving this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For an MendixCloud ",(0,o.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment"),", click on the refresh icon next to the revision number, on the Test applications tab of the ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),". If there is a new revision on teamserver, it will be downloaded automatically."),(0,o.kt)("li",{parentName:"ul"},"For a Custom ",(0,o.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment"),", click on the pencil icon next to the revision number, on the Test applications tab of the ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),". Then, select an ",(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch")," and select the revision to download. ")),(0,o.kt)("p",null,"Note that downloading can take some time depending on the size of the Mendix project."),(0,o.kt)("h3",{id:"applying-a-downloaded-application-revision-to-the-test-suites-in-a-test-configuration"},"Applying a downloaded Application Revision to the Test Suites in a Test Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After a new Application Revision is created or selected, it must be applied to the ",(0,o.kt)("a",{parentName:"li",href:"test-suite"},"Test Suites")," in a ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),", in order to be able to execute the ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),"."),(0,o.kt)("li",{parentName:"ul"},"Click the Apply to Test Suites button for the selected ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".")),(0,o.kt)("p",null,"Note that this can take some time depending on the size of the Mendix project, the number and size of ",(0,o.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," in the ",(0,o.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration"),"."),(0,o.kt)("h3",{id:"delete-downloaded-application-revision"},"Delete downloaded Application Revision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the Applications page to view all Applications that are used in MTA."),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,o.kt)("li",{parentName:"ul"},"Go to the Application branches & revisions tab."),(0,o.kt)("li",{parentName:"ul"},"Select an ",(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch"),"."),(0,o.kt)("li",{parentName:"ul"},"The Application Revisions are shown on the right pane."),(0,o.kt)("li",{parentName:"ul"},"Click on the recycle bin icon to delete the Application Revision. Note this is only possible when it is no longer in use by a ",(0,o.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),".")),(0,o.kt)("h2",{id:"related-topics"},"Related topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application"},"Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application-environment"},"Application Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"test-application"},"Test Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"application-branch"},"Application Branch"))))}d.isMDXComponent=!0}}]);