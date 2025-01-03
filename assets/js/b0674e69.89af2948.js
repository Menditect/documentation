"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_class_name:"hidden"},i="Test the User Interface using MTA",s={unversionedId:"design-tests/test-user-interface",id:"design-tests/test-user-interface",title:"Test the User Interface using MTA",description:"This section describes how to create a frontend test in MTA, by adding the prerequisite modules to a Mendix project.",source:"@site/additional/01-howtos/03-design-tests/test-user-interface.md",sourceDirName:"03-design-tests",slug:"/design-tests/test-user-interface",permalink:"/additional/howtos/design-tests/test-user-interface",draft:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Know when to adapt to next revision",permalink:"/additional/howtos/design-tests/know-when-to-adapt-revision"},next:{title:"Run your first test in MTA",permalink:"/additional/howtos/run-tests/run-first-test"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connector",id:"connector",level:3},{value:"Starter Kit",id:"starter-kit",level:3},{value:"Structure",id:"structure",level:4},{value:"Get started",id:"get-started",level:2},{value:"Test structure",id:"test-structure",level:2},{value:"Setup (local testing)",id:"setup-local-testing",level:3},{value:"Setup (using Browserstack)",id:"setup-using-browserstack",level:3},{value:"Locators and Actions",id:"locators-and-actions",level:3},{value:"Generic App testing",id:"generic-app-testing",level:4},{value:"Mendix App testing",id:"mendix-app-testing",level:4},{value:"Teardown",id:"teardown",level:3},{value:"MTA Implementation",id:"mta-implementation",level:2},{value:"Testing Standard Widgets",id:"testing-standard-widgets",level:2},{value:"Testing Custom Widgets and Snippets",id:"testing-custom-widgets-and-snippets",level:2},{value:"Custom Widgets",id:"custom-widgets",level:3},{value:"Snippets",id:"snippets",level:3},{value:"Feedback?",id:"feedback",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-the-user-interface-using-mta"},"Test the User Interface using MTA"),(0,r.kt)("p",null,"This section describes how to create a frontend test in MTA, by adding the prerequisite modules to a Mendix project."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Menditect uses the Playwright runtime to execute these frontend tests.\nPlaywright is a library with which you can locate elements on a web page and execute actions on these elements.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/java/"},"https://playwright.dev/java/")," for the relevant documentation.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Download these modules from the Mendix marketplace to enable frontend testing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Connector: ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/235323"},"https://marketplace.mendix.com/link/component/235323")),(0,r.kt)("li",{parentName:"ul"},"The Starter Kit: ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/235327"},"https://marketplace.mendix.com/link/component/235327")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"../connect-mta/import-plugin"},"MTA Plugin")," ")),(0,r.kt)("h3",{id:"connector"},"Connector"),(0,r.kt)("p",null,"The Connector makes it possible to define and run a frontend test from any Mendix App.\nIt includes Locator microflows to find elements on a webpage, and Action microflows to click on elements, fill them with text, or select a value.\nThe Connector can be used to test ",(0,r.kt)("em",{parentName:"p"},"any")," webapplication, not just Mendix Apps.\nLocator and Action microflows in the Connector can be defined and executed from MTA."),(0,r.kt)("h3",{id:"starter-kit"},"Starter Kit"),(0,r.kt)("p",null,"The Starter Kit is meant specifically to define and run frontend tests for Mendix apps. This starter kit contains"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reusable Locator and Action microflows to test standard Mendix Widgets;"),(0,r.kt)("li",{parentName:"ul"},"An example Mendix Project with an example testscript;"),(0,r.kt)("li",{parentName:"ul"},"A Page showing Results from executed tests.")),(0,r.kt)("p",null,"A few notes about the Starter Kit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Starter Kit assumes that the default texts for elements is used as defined in a US-English Mendix project. Other languages are not (yet) supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mendix.com/refguide/mendix-client/react/"},"React-enabled projects")," can be tested by setting the Constant IsUsingReactClient to True."),(0,r.kt)("li",{parentName:"ul"},"Although more Widgets will be added as supported in the Starter Kit, any changes made in the future can break Locating a Widget correctly.")),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_Private"),"\nThis folder contains generic Locator microflows that are used internally by the Starter Kit to uniquely identify and locate a Widget on a Mendix Page. These microflows should not be called directly. Specific Locator microflows must be created for each Mendix Page, bespoke to your Mendix App. For now, use the ",(0,r.kt)("a",{parentName:"p",href:"#example-app"},"Example App")," to build Page-specific Locator microflows. In the future, Menditect will be able to generate these microflows based on the Page structure."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_Use_Me / TestResults"),"\nThis folder contains a Page that shows stored files (Screenshots, Snapshots and Trace Files) after executing a test where Tracing was enabled. For now, these files are stored in the Mendix App where the Connector module is imported. In the future, Test Results will be stored in MTA."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_Use_Me / WidgetActions"),"\nThis folder contains Action microflows for Mendix Widgets. "),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("p",null,"It is not necessary to import the modules in the same Mendix App as the one under test. However for this example, this is assumed to be the case."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start by importing the Connector. This module ",(0,r.kt)("strong",{parentName:"li"},"requires the playwright driver bundle")," jar file in your userlib directory.\nSee the documentation in the Mendix Marketplace on how to download this jar file."),(0,r.kt)("li",{parentName:"ul"},"Download the Starter Kit module to start testing the most common Mendix Widgets."),(0,r.kt)("li",{parentName:"ul"},"Add both the Module Roles to the project's User Roles."),(0,r.kt)("li",{parentName:"ul"},"Add the TestResultFiles page to the Navigation for the User Role that will be evaluating executed frontend Tests."),(0,r.kt)("li",{parentName:"ul"},"Optionally add the Overview page to the Navigation if you plan to use the examples in the Starter Kit as inspiration to start building your own frontend test. This is ",(0,r.kt)("strong",{parentName:"li"},"recommended")," for first-time users.")),(0,r.kt)("h2",{id:"test-structure"},"Test structure"),(0,r.kt)("p",null,"Each frontend test has the same basic structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup"),(0,r.kt)("li",{parentName:"ul"},"Locators and Actions"),(0,r.kt)("li",{parentName:"ul"},"Teardown")),(0,r.kt)("h3",{id:"setup-local-testing"},"Setup (local testing)"),(0,r.kt)("p",null,"These microflows are called in order to setup a locally executed frontend test:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Microflow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Start_Playwright_Test"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initiates a new frontend Test with the given name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Create_Browser"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a browser of the specified type. To run the test in background, set Headless to True. SlowMo sets the waiting time in milliseconds between each Action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Create_BrowserContext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Used to define Browser attributes. Create and associate a ViewportSize object to set the Browser window Width and Height in pixels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Create_Page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new Page in the Browser.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Start_Tracing"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Optionally"),": enables the use of Screenshots, Snapshots and Tracefiles for a test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Navigate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use to navigate to the homepage of your App.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mx_Login"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Optionally"),": use to login to your App with specified Username and Password. Works on a non-customized Mendix Login Page.")))),(0,r.kt)("h3",{id:"setup-using-browserstack"},"Setup (using Browserstack)"),(0,r.kt)("p",null,'To use Browserstack instead of running Playwright on a local machine, replace the call to the "Create_Browser" microflow, with a call to the "Connect_BrowserStack" microflow.'),(0,r.kt)("p",null,"Currently, using Browserstack is only supported if the Mendix App is running in the cloud. ",(0,r.kt)("a",{parentName:"p",href:"https://www.browserstack.com/docs/local-testing"},"Local Testing")," will be supported in a future release of the Connector."),(0,r.kt)("h3",{id:"locators-and-actions"},"Locators and Actions"),(0,r.kt)("h4",{id:"generic-app-testing"},"Generic App testing"),(0,r.kt)("p",null,"To perform an action on an element in the page, the basic structure is to use two microflows; a Locator microflow and an Action microflow. Sometimes calling a second Locator microflow is needed."),(0,r.kt)("p",null,'In the Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing ',(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/locators#filtering-locators"},"Filters")," and ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/other-locators#n-th-element-locator"},"Nth element locators"),'. In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. '),(0,r.kt)("p",null,'Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the ',(0,r.kt)("a",{parentName:"p",href:"../../../Teststep#properties"},"Teststep in MTA")," that calls the Locator Action microflow."),(0,r.kt)("p",null,"Are you missing any Locators? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"For more advanced usage, checkout the Playwright documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/locators"},"Locators")," and ",(0,r.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/input"},"Actions"),"."),(0,r.kt)("h4",{id:"mendix-app-testing"},"Mendix App testing"),(0,r.kt)("p",null,"In order to test Mendix Widgets, use the microflows from the Starter Kit. The proposed structure is to assign each Mendix Page their own subfolder. That folder should contain an Enumeration, containing the names of the Widgets inside that Page, and a Microflow, having this structure: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"input parameters to identify the Widget to Locate. "),(0,r.kt)("li",{parentName:"ul"},"a String variable representing the Module name."),(0,r.kt)("li",{parentName:"ul"},"a String variable representing the Page class."),(0,r.kt)("li",{parentName:"ul"},'a microflow call to "Locate_MxWidget" in the Starter Kit ',(0,r.kt)("inlineCode",{parentName:"li"},"_Private")," folder.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"#example-app"},"Example App")," for some examples. The structure used there can be duplicated for any Mendix Page."),(0,r.kt)("p",null,"A Mendix Page is not the same scope as a page in the Browser, but Mendix Pages can be on top of each other (Popups over Responsive pages). Therefore, it is ",(0,r.kt)("strong",{parentName:"p"},"recommended"),' to always use the Locator microflows inside the "Get_Locator_By_Locator" folder, to narrow the scope to only one Mendix Page. In order to identify a Mendix Page, it is necessary to fill in the ',(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/common-widget-properties/#class"},"Page class on the Mendix Page in Studio Pro"),". Recommended is using the same Class name as the Page name. "),(0,r.kt)("p",null,'The "Locate_MxWidget" microflow then defines the scope of the Mendix Page, and then calls the "Locate_MxWidget_in_Locator" microflow, strategy is determined to locate the Widget depending on the type.'),(0,r.kt)("p",null,'Actions can be performed on a Widget by using microflows from the "WidgetActions" folder. The "Generic" subfolder contains Actions that don\'t require a Locator.\nThe "Specific" subfolder contains Actions that can be performed on the respective Mendix Widget, and take a Locator as an input parameter. '),(0,r.kt)("h3",{id:"teardown"},"Teardown"),(0,r.kt)("p",null,"These microflows are called at the end of a Playwright test:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Microflow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Mx_Logout"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Optionally"),": locates the Logout button and clicks on it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop_Tracing"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Optionally"),": saves the recorded trace files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop_Playwright_Test"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ends the Playwright test.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Teardown_Playwright"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removes the Playwright engine from memory.")))),(0,r.kt)("h2",{id:"mta-implementation"},"MTA Implementation"),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"recommended")," to use ",(0,r.kt)("a",{parentName:"p",href:"../../../Teststep"},"Teststeps")," in MTA to call abovementioned microflows."),(0,r.kt)("p",null,"Furthermore, the ",(0,r.kt)("a",{parentName:"p",href:"../../../test-case"},"Test Case")," containing these Teststeps should be using MxAdmin as an Execution user, with the Apply-security setting Off. "),(0,r.kt)("p",null,"For now, logging into the Mendix App needs to occur using the Mx_Login microflow. In the future, the session that is created by MTA, will also be used during the execution of the frontend test."),(0,r.kt)("h2",{id:"testing-standard-widgets"},"Testing Standard Widgets"),(0,r.kt)("p",null,'The Example App was created to show how to Locate most of the standard Mendix Widgets and execute Actions like Click, Fill Text or Select Option.\nIt contains an Overview page and two popup pages that combined contain these commonly used Widgets.\nThe "ACT_Playwright_Full_Test" microflow is an example microflow that tests these Pages.\nThis microflow can be executed from MTA if the App is running locally from Studio Pro.\nNote that the submicroflow actions inside, can be built as Teststeps in MTA.'),(0,r.kt)("h2",{id:"testing-custom-widgets-and-snippets"},"Testing Custom Widgets and Snippets"),(0,r.kt)("h3",{id:"custom-widgets"},"Custom Widgets"),(0,r.kt)("p",null,"In order to test custom made Widgets from the Marketplace, it is advisable to use the Starter Kit only as inspiration, but to replace it by your own Locator and Action Module that uses the Connector to execute the corresponding Playwright commands. "),(0,r.kt)("p",null,'Mendix will add the "mx-name-',(0,r.kt)("inlineCode",{parentName:"p"},"widgetName"),'" class to any Widget that you add to a Page or Snippet, so it is always possible to create a Locator for the surrounding HTML element. However in most cases you will want to add another Locator inside that Locator, so define Actions for child elements.'),(0,r.kt)("h3",{id:"snippets"},"Snippets"),(0,r.kt)("p",null,"Important note: Snippets are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. In order to define Locators for Widgets inside a Snippet, is is always required to add a surrounding Container (rendered as a DIV element) to locate it."),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 20 December 2024"))}u.isMDXComponent=!0}}]);