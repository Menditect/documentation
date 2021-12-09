"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79],{3172:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],s={sidebar_position:1},l="Test configuration",u={unversionedId:"definitions/test-configuration",id:"definitions/test-configuration",isDocsHomePage:!1,title:"Test configuration",description:"Definition",source:"@site/docs/definitions/test-configuration.md",sourceDirName:"definitions",slug:"/definitions/test-configuration",permalink:"/documentation/definitions/test-configuration",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/definitions/test-configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/documentation/"},next:{title:"Test run",permalink:"/documentation/definitions/test-run"}},d=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2}],c={toc:d};function p(t){var e=t.components,i=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-configuration"},"Test configuration"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Testconfiguration is an executable test script that describes which testsuites and which test applications will be/are tested. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the test configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CiCdEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true,  the testconfiguration will be runned if it is called via CiCd api, if false = the testconfiguration wil NOT be runne if it is called via CiCd api")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConstructionError"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the test configuration has a test suite with a test case with a test step with a construction error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error29"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the revision of the test configuration is not the same as the revision of the selected application environment. If false, no error")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Construction error with element type TCNF must have a relation with test configuration. All other relations with other element types must be empty"),(0,r.kt)("li",{parentName:"ul"},"Name is mandatory"),(0,r.kt)("li",{parentName:"ul"},"Test configuration is mandatory for test run"),(0,r.kt)("li",{parentName:"ul"},"Test configuration is mandatory for test suite"),(0,r.kt)("li",{parentName:"ul"},"The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application."),(0,r.kt)("li",{parentName:"ul"},"There can only be two Test Runs per Test Configuration with a flagged for save set to true.")))}p.isMDXComponent=!0}}]);