"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},487:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},o="Generate a test",s={unversionedId:"design-tests/generate-test",id:"design-tests/generate-test",title:"Generate a test",description:"Definition",source:"@site/additional/01-howtos/03-design-tests/generate-test.md",sourceDirName:"03-design-tests",slug:"/design-tests/generate-test",permalink:"/additional/howtos/design-tests/generate-test",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Run MTA on premises",permalink:"/additional/howtos/configure-mta/run-mta-on-premise"},next:{title:"Record and complete teststeps",permalink:"/additional/howtos/design-tests/record-user-actions"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"From Mendix Studio Pro",id:"from-mendix-studio-pro",level:2},{value:"Generate Test",id:"generate-test",level:3},{value:"Edit Test",id:"edit-test",level:3},{value:"Run Test",id:"run-test",level:3},{value:"View Test",id:"view-test",level:3},{value:"In MTA",id:"in-mta",level:2},{value:"Generate Test",id:"generate-test-1",level:3},{value:"Record Test",id:"record-test",level:3},{value:"Feedback?",id:"feedback",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generate-a-test"},"Generate a test"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"This document describes how to make MTA generate tests, as alternative to creating tests manually. "),(0,i.kt)("p",null,"You can generate a test from Mendix Studio Pro, or from inside MTA. The aim of generating a test is to speed up test scripting, by using the Mendix model information available to MTA."),(0,i.kt)("h2",{id:"from-mendix-studio-pro"},"From Mendix Studio Pro"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../connect-mta/use-microflow-call-hierarchy-extension"},"Menditect Call Hierarchy extension")," can be used to generate tests from Mendix Studio Pro."),(0,i.kt)("p",null,"First, make sure to ",(0,i.kt)("a",{parentName:"p",href:"../connect-mta/connect-menditect-extension-to-mta"},"connect the extension to MTA"),"."),(0,i.kt)("h3",{id:"generate-test"},"Generate Test"),(0,i.kt)("p",null,"To generate a new Test Case, that will execute a specific microflow from the Mendix model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../connect-mta/use-microflow-call-hierarchy-extension#microflow-call-hierarchy"},"Open the Microflow Call Hierarchy tab")," for a specific microflow"),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("i",{class:"fal fa-circle"}),' icon, on the left of the microflow name, or right-click on the microflow name and select "Generate Test"'),(0,i.kt)("li",{parentName:"ul"},"Select which ",(0,i.kt)("a",{parentName:"li",href:"../../../test-suite"},"Test suite")," to use, to store the new ",(0,i.kt)("a",{parentName:"li",href:"../../../test-case"},"Test Case"),".")),(0,i.kt)("p",null,"MTA will create a new Test Case for the microflow, and Studio Pro will open a new tab showing MTA, containing the new Test Case."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the microflow that you have selected is new, you first have to commit it, ",(0,i.kt)("a",{parentName:"p",href:"../../../application-revision#change-the-application-revision-for-a-test-configuration"},"download the new revision")," and ",(0,i.kt)("a",{parentName:"p",href:"../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision"},"adapt the test suites in MTA"),".",(0,i.kt)("br",null),"\nOtherwise, the microflow is unknown to MTA, and MTA will not be able to generate a Test Case for it.")),(0,i.kt)("h3",{id:"edit-test"},"Edit Test"),(0,i.kt)("p",null,"The Test Case that MTA generates will execute the microflow, and prepare data that the microflow needs for it's parameters. The data that is used is ",(0,i.kt)("em",{parentName:"p"},"randomly generated"),". It is not yet possible to use database data, that is only possible from ",(0,i.kt)("a",{parentName:"p",href:"#in-mta"},"inside MTA"),". Therefore, you may want to edit the data for the microflow parameters. For security reasons, the MTA tab is read-only. "),(0,i.kt)("p",null,"To Edit the Test Case that MTA has generated, just click on the ",(0,i.kt)("i",{class:"fas fa-external-link"})," button in the MTA tab. MTA will open in a new browser window, showing the Test Case that was generated. Here you can ",(0,i.kt)("a",{parentName:"p",href:"../../../Teststep"},"edit teststeps"),", add ",(0,i.kt)("a",{parentName:"p",href:"../../../Assert"},"asserts")," and add ",(0,i.kt)("a",{parentName:"p",href:"../../../datavariation"},"data variation"),"."),(0,i.kt)("h3",{id:"run-test"},"Run Test"),(0,i.kt)("p",null,"If your application is running in Studio Pro, and the ",(0,i.kt)("a",{parentName:"p",href:"../connect-mta/import-plugin"},"Plugin is connected to MTA"),", you can now run your test. "),(0,i.kt)("p",null,'Just click on "Execute test case" button in the MTA tab.'),(0,i.kt)("h3",{id:"view-test"},"View Test"),(0,i.kt)("p",null,"To view an existing Test Case that executes a specific microflow from the Mendix model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../connect-mta/use-microflow-call-hierarchy-extension#microflow-call-hierarchy"},"Open the Microflow Call Hierarchy tab")," for a specific microflow"),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("font",{color:"#5BDB5B"}," ",(0,i.kt)("i",{class:"fas fa-circle"})," "),' icon, on the left of the microflow name, or right-click on the microflow name and select "View Test"'),(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("a",{parentName:"li",href:"../../../test-case"},"Test Case")," that contains the ",(0,i.kt)("a",{parentName:"li",href:"../../../Teststep/microflow"},"microflow teststep")," that calls the microflow.")),(0,i.kt)("p",null,"Studio Pro will open a tab showing MTA, containing the Test Case."),(0,i.kt)("h2",{id:"in-mta"},"In MTA"),(0,i.kt)("h3",{id:"generate-test-1"},"Generate Test"),(0,i.kt)("p",null,"It is possible to automatically generate teststeps to test a microflow. Teststeps will be generated to fill the input parameters of the microflow and the last teststep generated will call the microflow."),(0,i.kt)("p",null,"The generated teststeps will appear in a new test case inside a selected test suite, or in the test case where you are working in. This depends on from where the generating is done, because there are two ways to generate teststeps for testing a microflow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Mendix Model" in the Test Configuration. Select one or more microflows to generate a test case for. Using this option, it is possible to generate multiple test cases in a test suite, at once.'),(0,i.kt)("li",{parentName:"ul"},'Click on "Generate test by microflow" while working in a Test Case. Select a single microflow to generate teststeps for. Using this option, you can combine manually created teststeps with generated teststeps in the same test case.')),(0,i.kt)("p",null,"Teststeps will be generated to fill any Object or List parameters of the microflow. Parameters can be filled using values from a database. Therefore it can be needed to select a running ",(0,i.kt)("a",{parentName:"p",href:"../../../application-instance"},"Application instance"),".\nIf the object is nonpersistable, or if the database does not contain any objects of the necessary entity, MTA will use random values for the Object's attributes. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Primitive")," microflow parameters will always be filled with random values. This means that, if the microflow has no Object or List parameters, the result of a generated test case will always be only the teststep that calls the selected microflow."),(0,i.kt)("h3",{id:"record-test"},"Record Test"),(0,i.kt)("p",null,"It is possible to generate teststeps based on recorded user actions, by creating a ",(0,i.kt)("a",{parentName:"p",href:"../../../recording"},"Recording"),". By executing the resulting teststeps, the recorded actions are essentially replayed."),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 9 April 2024"))}u.isMDXComponent=!0}}]);