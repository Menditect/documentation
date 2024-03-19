"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5111],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6254:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={},o="Test maintenance",s={unversionedId:"test-maintenance",id:"test-maintenance",title:"Test maintenance",description:"Definition",source:"@site/additional/02-bestpractice/test-maintenance.md",sourceDirName:".",slug:"/test-maintenance",permalink:"/additional/bestpractice/test-maintenance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Record actions",permalink:"/additional/bestpractice/record-actions"},next:{title:"Testability",permalink:"/additional/bestpractice/testability"}},l={},u=[{value:"Definition",id:"definition",level:2},{value:"Updating tests",id:"updating-tests",level:2},{value:"Adding tests",id:"adding-tests",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"Feedback?",id:"feedback",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-maintenance"},"Test maintenance"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Maintaining tests up-to-date can be time consuming for projects that are under development. "),(0,i.kt)("p",null,"This Best Practice on test maintenance can help you be more efficient."),(0,i.kt)("p",null,"Note that the best practice is subject to change while features are being added to MTA."),(0,i.kt)("h2",{id:"updating-tests"},"Updating tests"),(0,i.kt)("p",null,'Adapting a large test configuration can take a lot of time, and if many changes are made between the current and next revision, chances are, you will end up with construction errors.\nIf this happens when you don\'t have time to fix these errors, the test configuration stays "broken" for a longer period of time. '),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that when your test configuration contains an error, you can still execute the test cases and test suites that do not contain errors.")),(0,i.kt)("p",null,"The quickest way to updating tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Choose a "master" test configuration to update to the latest revision.'),(0,i.kt)("li",{parentName:"ul"},'Create an empty test configuration (a "draft") with your name in the title, so other Tester\'s know not to touch it. '),(0,i.kt)("li",{parentName:"ul"},"Change the revision of the draft test configuration to the latest revision."),(0,i.kt)("li",{parentName:"ul"},"Next, copy the test suite that contains the test that you need to update, from the master into the draft."),(0,i.kt)("li",{parentName:"ul"},"MTA will ",(0,i.kt)("em",{parentName:"li"},"automatically")," adapt the contents of the test suite."),(0,i.kt)("li",{parentName:"ul"},"Make your changes in the draft test suite to fix any construction errors and repair broken tests."),(0,i.kt)("li",{parentName:"ul"},"Repeat this process until you have done this for all the test suites that need to be updated."),(0,i.kt)("li",{parentName:"ul"},"Remove these test suites from the master."),(0,i.kt)("li",{parentName:"ul"},"Adapt the master to the latest revision."),(0,i.kt)("li",{parentName:"ul"},"Copy the updated test suites to the master. Note that you can copy test suites even if the target test configuration contains errors."),(0,i.kt)("li",{parentName:"ul"},"Delete the test suites from the draft test configuration.")),(0,i.kt)("h2",{id:"adding-tests"},"Adding tests"),(0,i.kt)("p",null,"Like updating tests, adding tests to your existing test configuration is also quicker if you use a draft test configuration to build the tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Create an empty test configuration (a "draft") with your name in the title, so other Tester\'s know not to touch it. '),(0,i.kt)("li",{parentName:"ul"},"Change the revision of the draft test configuration to the latest revision."),(0,i.kt)("li",{parentName:"ul"},"Create your tests in this test configuration."),(0,i.kt)("li",{parentName:"ul"},"When you are done ",(0,i.kt)("a",{parentName:"li",href:"#updating-tests"},"updating existing tests"),', copy the new test suites to the "master" test configuration.'),(0,i.kt)("li",{parentName:"ul"},"Delete the test suites from the draft test configuration.")),(0,i.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,i.kt)("p",null,"Downloading revisions and adapting test configurations can be time consuming, especially for large Mendix projects."),(0,i.kt)("p",null,"Think twice before adapting. ",(0,i.kt)("a",{parentName:"p",href:"../howtos/know-when-to-adapt-revision"},"Knowing when to adapt")," helps save time if you have made changes to you App, and want to execute a test."),(0,i.kt)("p",null,"Recommended is to set up a CI/CD pipeline, which uses the ",(0,i.kt)("a",{parentName:"p",href:"../../cicd"},"API's in MTA"),".\nSetup a scheduded nightly action running at 5:00 UTC that always ",(0,i.kt)("a",{parentName:"p",href:"../../cicd#post-download-revision"},"downloads the latest revision")," of the relevant development branch(es).\nThis way, you will not have to wait for the download to complete during working hours.\nDon't worry about your database filling up with unnessesary revision data, because MTA cleans up unused revisions, daily at 2:30 UTC.\nJust make sure to run your CI/CD pipeline after that."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Don't have a CI/CD pipeline? ",(0,i.kt)("br",null),"You can also ",(0,i.kt)("a",{parentName:"p",href:"../../application-revision#change-the-application-revision-for-a-test-configuration"},"download the latest revision in MTA"),".")),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 23 February 2024"))}d.isMDXComponent=!0}}]);