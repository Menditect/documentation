"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:10},r="Test the UI with MTA",l={unversionedId:"design-tests/test-ui-with-mta",id:"design-tests/test-ui-with-mta",title:"Test the UI with MTA",description:"This section describes how to create a frontend test in MTA, by adding the prerequisite modules to a Mendix project.",source:"@site/additional/01-howtos/03-design-tests/test-ui-with-mta.md",sourceDirName:"03-design-tests",slug:"/design-tests/test-ui-with-mta",permalink:"/additional/howtos/design-tests/test-ui-with-mta",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Know when to adapt to next revision",permalink:"/additional/howtos/design-tests/know-when-to-adapt-revision"},next:{title:"Run your first test in MTA",permalink:"/additional/howtos/run-tests/run-first-test"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Playwright Connector",id:"playwright-connector",level:3},{value:"Starter Kit",id:"starter-kit",level:3},{value:"Structure",id:"structure",level:4},{value:"Get started",id:"get-started",level:2},{value:"Test structure",id:"test-structure",level:2},{value:"Setup (local testing)",id:"setup-local-testing",level:3},{value:"Setup (using Browserstack)",id:"setup-using-browserstack",level:3},{value:"Setup (other platforms)",id:"setup-other-platforms",level:3},{value:"Locators and Actions",id:"locators-and-actions",level:3},{value:"Generic App testing",id:"generic-app-testing",level:4},{value:"Mendix App testing",id:"mendix-app-testing",level:4},{value:"Teardown",id:"teardown",level:3},{value:"MTA Implementation",id:"mta-implementation",level:2},{value:"Session handling",id:"session-handling",level:3},{value:"Testing Mendix Platform Supported Widgets",id:"testing-mendix-platform-supported-widgets",level:2},{value:"Widgets supported by Menditect",id:"widgets-supported-by-menditect",level:3},{value:"Testing Custom Widgets and Snippets",id:"testing-custom-widgets-and-snippets",level:2},{value:"Custom Widgets",id:"custom-widgets",level:3},{value:"Snippets",id:"snippets",level:3},{value:"Feedback?",id:"feedback",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-the-ui-with-mta"},"Test the UI with MTA"),(0,i.kt)("p",null,"This section describes how to create a frontend test in MTA, by adding the prerequisite modules to a Mendix project."),(0,i.kt)("admonition",{title:"Playwright",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Menditect uses the Playwright runtime to execute these frontend tests.\nPlaywright is a library with which you can locate elements on a web page and execute actions on these elements.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/"},"https://playwright.dev/java/")," for the relevant documentation.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Download below modules from the Mendix marketplace to enable frontend testing."),(0,i.kt)("p",null,"Note: the Playwright Connector and Starter Kit modules are still in Beta. Menditect distributes these modules but does not offer support for it's use. If you want access to these modules, please ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"contact support"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Playwright Connector: ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/235323"},"https://marketplace.mendix.com/link/component/235323")," "),(0,i.kt)("li",{parentName:"ul"},"The Playwright Starter Kit: ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/235327"},"https://marketplace.mendix.com/link/component/235327")," "),(0,i.kt)("li",{parentName:"ul"},"An Example App for testing Mendix Widgets with Playwright: ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/235973"},"https://marketplace.mendix.com/link/component/235973")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../connect-mta/import-plugin"},"MTA Plugin")," ")),(0,i.kt)("admonition",{title:"Separate from Test App",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For this how-to, we have imported these modules in the same Mendix App, as the one under test.",(0,i.kt)("br",null),"\nIt is however possible to import the prerequisite modules in a separate App.",(0,i.kt)("br",null),"\nDocumentation for this setup will be added in the future.")),(0,i.kt)("h3",{id:"playwright-connector"},"Playwright Connector"),(0,i.kt)("p",null,"The Playwright Connector makes it possible to define and run a frontend test from any Mendix App. It the App to connect to the Playwright server, based on specified connection settings, and execute the test. When executing a UI test, Playwright starts and hosts its own browser. This can be Chromium, Firefox or Webkit. In order to do this, Playwright needs to load required dependencies and, therefore, it needs the right permissions on the host server. In the image below, you can see how Playwright can be hosted on remote servers, either in the cloud or on a local server."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright Setup",src:a(1853).Z,width:"624",height:"347"})),(0,i.kt)("p",null,"The Playwright Connector includes Locator microflows to find elements on a webpage, and Action microflows to click on elements, fill them with text, or select a value. Therefore it can be used to test ",(0,i.kt)("em",{parentName:"p"},"any")," webapplication, not just Mendix Apps. Locator and Action microflows in the Playwright Connector can be defined and executed from MTA."),(0,i.kt)("h3",{id:"starter-kit"},"Starter Kit"),(0,i.kt)("p",null,"The Starter Kit is meant specifically to define and run frontend tests for Mendix apps. This starter kit contains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reusable Locator and Action microflows to test Mendix Platform Supported Widgets;"),(0,i.kt)("li",{parentName:"ul"},"A Page showing Results from executed tests.")),(0,i.kt)("p",null,"A few notes about the Starter Kit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Starter Kit currently has the en-US and nl-NL languages built-in. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.mendix.com/refguide/mendix-client/react/"},"React-enabled projects")," can be tested by setting the Constant IsUsingReactClient to True."),(0,i.kt)("li",{parentName:"ul"},"Although more Widgets will be added as supported in the Starter Kit, any changes made in the future can break Locating a Widget correctly.")),(0,i.kt)("h4",{id:"structure"},"Structure"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_Private"),"\nThis folder contains generic Locator microflows that are used internally by the Starter Kit to uniquely identify and locate a Widget on a Mendix Page. These microflows should not be called directly. Specific Locator microflows must be created for each Mendix Page, bespoke to your Mendix App. For now, use the ",(0,i.kt)("a",{parentName:"p",href:"#example-app"},"Example App")," to build Page-specific Locator microflows. In the future, Menditect will be able to generate these microflows based on the Page structure."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_Use_Me / TestResults"),"\nThis folder contains a Page that shows stored files (Screenshots, Snapshots and Trace Files) after executing a test where Tracing was enabled. For now, these files are stored in the Mendix App where the Playwright Connector module is imported. In the future, Test Results will be stored in MTA."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_Use_Me / WidgetActions"),"\nThis folder contains Action microflows for Mendix Widgets. "),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start by importing the Playwright Connector. This module ",(0,i.kt)("strong",{parentName:"li"},"requires the playwright driver bundle")," jar file in your userlib directory if you want to ",(0,i.kt)("a",{parentName:"li",href:"#setup-local-testing"},"run Playwright on your local machine"),". Download the jar file here: ",(0,i.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/com/microsoft/playwright/driver-bundle/1.49.0/driver-bundle-1.49.0.jar"},"https://repo1.maven.org/maven2/com/microsoft/playwright/driver-bundle/1.49.0/driver-bundle-1.49.0.jar")),(0,i.kt)("li",{parentName:"ul"},"Download the Starter Kit module to start testing the most common Mendix Widgets."),(0,i.kt)("li",{parentName:"ul"},"Add both the Module Roles to the project's User Roles."),(0,i.kt)("li",{parentName:"ul"},"Add the TestResultFiles page to the Navigation for the User Role that will be evaluating executed frontend Tests."),(0,i.kt)("li",{parentName:"ul"},"Optionally add the Overview page to the Navigation if you plan to use the examples in the Starter Kit as inspiration to start building your own frontend test. ")),(0,i.kt)("admonition",{title:"Recommended",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended for first-time users to use the Example App to get started.")),(0,i.kt)("h2",{id:"test-structure"},"Test structure"),(0,i.kt)("p",null,"Each frontend test has the same basic structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setup"),(0,i.kt)("li",{parentName:"ul"},"Locators and Actions"),(0,i.kt)("li",{parentName:"ul"},"Teardown")),(0,i.kt)("h3",{id:"setup-local-testing"},"Setup (local testing)"),(0,i.kt)("p",null,"Playwright can be hosted locally with the Mendix App running in Studio Pro (e.g. localhost). For this, you only need to add the necessary jar file (driver-bundle.jar) to the /userlib folder of the Mendix project. If this jar file is added to the Mendix project and the app is deployed to a local server that allows Playwright to load the dependencies it needs, this is sufficient for executing the Test Cases. Separate hosting of the Playwright browsers is not needed then. However, if the jar-file is not added and/or the local server is also limited in the access it requires for Playwright to load its dependencies, it is needed to host a Playwright server elsewhere. "),(0,i.kt)("admonition",{title:"Licensed Mendix node not supported",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Mendix Cloud currently does not allow for third party frameworks, like Playwright, to load its own dependencies. This is why it is currently not possible to use UI testing in MTA when the app under test is hosted in the Mendix Cloud.")),(0,i.kt)("p",null,"These microflows are called in order to setup a locally executed frontend test:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Microflow"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Location"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start_Test"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Starter Kit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Starts a new UI Test, a Browser with the specified width and height, sets the ",(0,i.kt)("inlineCode",{parentName:"td"},"wait between actions")," parameter, and creates a new ",(0,i.kt)("inlineCode",{parentName:"td"},"Page")," object that represents a browser tab.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start_Tracing"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Connector"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Optionally"),": enables the use of Screenshots, Snapshots and Tracefiles for a test.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Navigate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Connector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Opens the homepage of your App.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mx_Login"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Starter Kit"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Optionally"),": uses a Javascript action to login.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Create_Page"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Connector"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Optionally"),": adds an additional browser tab.")))),(0,i.kt)("h3",{id:"setup-using-browserstack"},"Setup (using Browserstack)"),(0,i.kt)("p",null,"One alternative option to hosting Playwright locally is to use Browserstack. BrowserStack is a cloud-based testing platform that enables developers and QA teams to test applications across various browsers and devices. It offers native support for Playwright, allowing users to run automated end-to-end tests on real devices and browsers within its cloud infrastructure. "),(0,i.kt)("p",null,'To test using BrowserStack, replace the call to the "Create_Browser" microflow, with a call to the "Connect_BrowserStack" microflow.'),(0,i.kt)("p",null,"Currently, using Browserstack is only supported if the Mendix App is running in the cloud.\nLocal Testing is currently only supported if Playwright is also running locally.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.browserstack.com/docs/local-testing"},"Local Testing with Browserstack")," will be supported in a future release of the Playwright Connector."),(0,i.kt)("h3",{id:"setup-other-platforms"},"Setup (other platforms)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Azure"),(0,i.kt)("br",null),"\nMicrosoft Azure also provides a cloud-based infrastructure for running Playwright tests, allowing teams to automate browser testing at scale without managing on-premise resources. It integrates with Azure DevOps and CI/CD pipelines. You can read more on Playwright in Azure ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/playwright-testing#Feature"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Docker"),(0,i.kt)("br",null),"\nIt is also possible to deploy a  Docker image on a separate local server (e.g. Windows server) or a Private Cloud deployment. This also allows for on-premise, air-gapped deployments within the customer\u2019s network. You can read more on how to host a Playwright server using Docker here.You can read more on how to host a Playwright server using Docker ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/main/docs/src/docker.md"},"here"),"."),(0,i.kt)("h3",{id:"locators-and-actions"},"Locators and Actions"),(0,i.kt)("h4",{id:"generic-app-testing"},"Generic App testing"),(0,i.kt)("p",null,"To perform an action on an element in the page, the basic structure is to use two microflows; a Locator microflow and an Action microflow. Sometimes calling a second Locator microflow is needed."),(0,i.kt)("p",null,'In the Playwright Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing ',(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/locators#filtering-locators"},"Filters")," and ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/other-locators#n-th-element-locator"},"Nth element locators"),'. In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. '),(0,i.kt)("p",null,'Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the ',(0,i.kt)("a",{parentName:"p",href:"../../../Teststep#properties"},"Teststep in MTA")," that calls the Locator Action microflow."),(0,i.kt)("p",null,"Are you missing any Locators? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"For more advanced usage, checkout the Playwright documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/locators"},"Locators")," and ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/input"},"Actions"),"."),(0,i.kt)("h4",{id:"mendix-app-testing"},"Mendix App testing"),(0,i.kt)("p",null,'In order to test Mendix Widgets, make use the microflows from the Starter Kit, and create your own library of pages and widgets, preferably in a separate "PlaywrightConnectorHelper" module.'),(0,i.kt)("p",null,"The proposed approach is, for each Mendix Page that you want to test:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create one Enumeration, containing the names of the Widgets inside that Page, called ",(0,i.kt)("inlineCode",{parentName:"li"},"PageName_Widgets")," (replace by actual page name)."),(0,i.kt)("li",{parentName:"ul"},"create one Microflow, called ",(0,i.kt)("inlineCode",{parentName:"li"},"PageName_Locators")," (replace by actual page name).")),(0,i.kt)("p",null,"Using fully-qualified names for the PageName is recommended if the same page name occurs in multiple modules."),(0,i.kt)("p",null,"Use only alphanumeric characters (letters and digits) for the names of the Widget in the enumeration. "),(0,i.kt)("p",null,"Create the Microflow like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"input parameters to identify the Widget to Locate. "),(0,i.kt)("li",{parentName:"ul"},"a String variable representing the Module name."),(0,i.kt)("li",{parentName:"ul"},"a String variable representing the Page class."),(0,i.kt)("li",{parentName:"ul"},'a microflow call to "Locate_MxWidget" in the Starter Kit ',(0,i.kt)("inlineCode",{parentName:"li"},"_Private")," folder.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"#testing-mendix-platform-supported-widgets"},"Mendix Platform Supported Widgets")," for some examples. The structure used there can be duplicated for any Mendix Page."),(0,i.kt)("p",null,'A Mendix Page is not the same scope as a page in the Browser, but Mendix Pages can be on top of each other (Popups over Responsive pages). Use the Locator microflows inside the "Get_Locator_By_Locator" folder, to narrow the scope to only one Mendix Page. Use the microflows inside the "Get_Locator_By_Page" only for page a-specific elements (like menuitems).'),(0,i.kt)("admonition",{title:"Mendix Popup Layout",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you close a Popup and then open it again, the old one will remain Locatable by Playwright, resulting in a ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/locators#strictness"},"strict mode violation")," when performing an action on it. Either create a duplicated Popup with a different class, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"Last_Locator_Element"),"; although no guarantee, the last visible Popup is usually also the last one added to the HTML.")),(0,i.kt)("p",null,"In order to identify a Mendix Page, it is necessary to fill in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/common-widget-properties/#class"},"Page class on the Mendix Page in Studio Pro"),". "),(0,i.kt)("admonition",{title:"Recommended",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Assign the same Class name on the Page as the Page's Title. ")),(0,i.kt)("p",null,'The "Locate_MxWidget" microflow then defines the scope of the Mendix Page, and then calls the "Locate_MxWidget_in_Locator" microflow, strategy is determined to locate the Widget depending on the type.'),(0,i.kt)("p",null,'Actions can be performed on a Widget by using microflows from the "WidgetActions" folder. The "Generic" subfolder contains Actions that don\'t require a Locator:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," on a DialogMessage"),(0,i.kt)("li",{parentName:"ul"},"Click on the specified button on a Confirmation Dialog (Proceed / Cancel, etc)")),(0,i.kt)("p",null,'The "Specific" subfolder contains Actions that can be performed on the respective Mendix Widget, and take a Locator as an input parameter. '),(0,i.kt)("h3",{id:"teardown"},"Teardown"),(0,i.kt)("p",null,"These microflows are called at the end of a Playwright test:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Microflow"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Location"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mx_Logout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Starter Kit"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Optionally"),": uses a Javascript action to logout.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Stop_Tracing"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Connector"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Optionally"),": saves the recorded trace files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Stop_Test"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Playwright Starter Kit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ends the Playwright test and optionally removes the Playwright engine from memory.")))),(0,i.kt)("h2",{id:"mta-implementation"},"MTA Implementation"),(0,i.kt)("admonition",{title:"Recommended",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"../../../Teststep"},"Teststeps")," in MTA to call abovementioned microflows.")),(0,i.kt)("h3",{id:"session-handling"},"Session handling"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../../../test-case"},"Test Case")," containing the Teststeps should be using MxAdmin as an Execution user, with the Apply-security setting Off. Although MTA creates it's own user session to perform actions in a Test Case, it is still necessary to login to the App under test when using MTA. Use the Mx_Login microflow from the Starter Kit or alternatively create a custom microflow in a separate module. In the future, the session that is created by MTA, will also be used during the execution of the frontend test."),(0,i.kt)("p",null,"The upside of the current implementation is that sessions created by Playwright can be carried onto subsequent Test Cases. Just point to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MenditectPlaywrightConnector.Page")," object that was created in a Test Case, whenever calling a Locator microflow, and the same browser tab will be used to run the test. Only when closing all the browser tabs (",(0,i.kt)("inlineCode",{parentName:"p"},"MenditectPlaywrightConnector.Close_Page"),") or by stopping the test (",(0,i.kt)("inlineCode",{parentName:"p"},"MenditectPlaywrightStarterKit.Stop_Test"),") the browser will be closed."),(0,i.kt)("p",null,"When running Playwright on your local machine from Studio Pro, the free license will only allow for so many user sessions. Therefore, a few tips:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prevent using Anonymous sessions;"),(0,i.kt)("li",{parentName:"ul"},"always logout at the end when creating a Playwright session;"),(0,i.kt)("li",{parentName:"ul"},"prevent also manually logging in from your own browser;"),(0,i.kt)("li",{parentName:"ul"},"restart the App if needed.")),(0,i.kt)("h2",{id:"testing-mendix-platform-supported-widgets"},"Testing Mendix Platform Supported Widgets"),(0,i.kt)("admonition",{title:"Platform supported widgets",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.mendix.com/link/supporttype/Platform"},"Click here to see a list of recent Platform supported Widgets"))),(0,i.kt)("p",null,'The Example App was created to show how to Locate most of the Mendix Platform Supported Widgets and execute Actions like Click, Fill Text or Select Option.\nIt contains an Overview page and two popup pages that combined contain these commonly used Widgets.\nThe "ACT_Playwright_Full_Test" microflow is an example microflow that tests these Pages.\nThis microflow can be executed from MTA if the App is running locally from Studio Pro.\nNote that the submicroflow actions inside, can be built as Teststeps in MTA.'),(0,i.kt)("h3",{id:"widgets-supported-by-menditect"},"Widgets supported by Menditect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication (login)"),(0,i.kt)("li",{parentName:"ul"},"ActionButton"),(0,i.kt)("li",{parentName:"ul"},"Badge"),(0,i.kt)("li",{parentName:"ul"},"Badge Button"),(0,i.kt)("li",{parentName:"ul"},"CheckBox"),(0,i.kt)("li",{parentName:"ul"},"ComboBox"),(0,i.kt)("li",{parentName:"ul"},"Confirmation Dialog"),(0,i.kt)("li",{parentName:"ul"},"DataGrid ",(0,i.kt)("inlineCode",{parentName:"li"},"\xb9")),(0,i.kt)("li",{parentName:"ul"},"DatePicker"),(0,i.kt)("li",{parentName:"ul"},"DialogMessage"),(0,i.kt)("li",{parentName:"ul"},"DropDown"),(0,i.kt)("li",{parentName:"ul"},"DynamicImage"),(0,i.kt)("li",{parentName:"ul"},"FileManager ",(0,i.kt)("inlineCode",{parentName:"li"},"2")),(0,i.kt)("li",{parentName:"ul"},"GroupBox"),(0,i.kt)("li",{parentName:"ul"},"Label"),(0,i.kt)("li",{parentName:"ul"},"ListView"),(0,i.kt)("li",{parentName:"ul"},"MenuBar"),(0,i.kt)("li",{parentName:"ul"},"MenuItem"),(0,i.kt)("li",{parentName:"ul"},"RadioButton"),(0,i.kt)("li",{parentName:"ul"},"RadioButton List"),(0,i.kt)("li",{parentName:"ul"},"Rich Text"),(0,i.kt)("li",{parentName:"ul"},"ReferenceSelector"),(0,i.kt)("li",{parentName:"ul"},"StaticImage"),(0,i.kt)("li",{parentName:"ul"},"Switch"),(0,i.kt)("li",{parentName:"ul"},"TabContainer"),(0,i.kt)("li",{parentName:"ul"},"TextArea"),(0,i.kt)("li",{parentName:"ul"},"TextBox"),(0,i.kt)("li",{parentName:"ul"},"X button (that closes page)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\xb9")," DataGrid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The button to toggle the search panel can be given any name, but the button to trigger the search action, is always called ",(0,i.kt)("inlineCode",{parentName:"li"},"search"),", so always use that (for the enumeration value) to locate it."),(0,i.kt)("li",{parentName:"ul"},"The ClickRow and DoubleClickRow actions are based on the Index of the row. Locating by Text is still under development. "),(0,i.kt)("li",{parentName:"ul"},'Both ClickRow and DoubleClickRow microflows, will wait 1 second to perform the action, to allow the search to be finished. To wait longer, it is recommended to use the "Delay after execution" property on the ',(0,i.kt)("a",{parentName:"li",href:"../../../Teststep#properties"},"Teststep in MTA"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2")," FileManager:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'To "catch" the event of downloading a file into a FileDocument, make use of the Playwright Connector. Write a new microflow that executes the ',(0,i.kt)("inlineCode",{parentName:"li"},"Click")," action on the ",(0,i.kt)("em",{parentName:"li"},"Download")," button, and pass the fully-qualified name of that microflow as parameter for the ",(0,i.kt)("inlineCode",{parentName:"li"},"On_Download")," microflow. Execute only the latter."),(0,i.kt)("li",{parentName:"ul"},'To "catch" the event of uploading a file, make use of the Playwright Connector. Write a new microflow that executes the ',(0,i.kt)("inlineCode",{parentName:"li"},"Click")," action on the ",(0,i.kt)("em",{parentName:"li"},"Browse...")," button, and pass the fully-qualified name of that microflow as parameter for the ",(0,i.kt)("inlineCode",{parentName:"li"},"On_File_Chooser")," microflow. Execute the latter. Next, define the FileDocuments to upload, by calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"Set_Files")," microflow. "),(0,i.kt)("li",{parentName:"ul"},"For uploading a file from the file system, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"MxFileDocument_UploadAs")," microflow from the Starter Kit. Point to the location on the file system of the ",(0,i.kt)("strong",{parentName:"li"},"Server")," where the Mendix App is running. Simulating a user that is uploading a file, only works if you are running locally!"),(0,i.kt)("li",{parentName:"ul"},"To view an image or pdf file in the Browser, use ",(0,i.kt)("inlineCode",{parentName:"li"},"FileDocument_Get_URL")," to get the URL to view it. Add a browser tab by calling ",(0,i.kt)("inlineCode",{parentName:"li"},"Create_Page")," and next the ",(0,i.kt)("inlineCode",{parentName:"li"},"Navigate")," microflow to navigate to that URL."),(0,i.kt)("li",{parentName:"ul"},"Use the microflows ",(0,i.kt)("inlineCode",{parentName:"li"},"FileDocument_to_MyImage")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"FileDocument_to_MyPdf")," to get some example FileDocuments..."),(0,i.kt)("li",{parentName:"ul"},"...or, read more about ",(0,i.kt)("a",{parentName:"li",href:"../tips-and-tricks/handle-files"},"File Handling in MTA"),".")),(0,i.kt)("p",null,"More Widgets will be added in future releases."),(0,i.kt)("h2",{id:"testing-custom-widgets-and-snippets"},"Testing Custom Widgets and Snippets"),(0,i.kt)("h3",{id:"custom-widgets"},"Custom Widgets"),(0,i.kt)("p",null,"In order to test custom made Widgets from the Marketplace, it is advisable to use the Starter Kit only as inspiration, but to replace it by your own Locator and Action Module that uses the Playwright Connector to execute the corresponding Playwright commands. "),(0,i.kt)("p",null,'Mendix will add the "mx-name-',(0,i.kt)("inlineCode",{parentName:"p"},"widgetName"),'" class to every widget on the Page, so it is always possible to create a Locator for the surrounding HTML element. However in most cases you will want to add another Locator inside that Locator, so define Actions for child elements.'),(0,i.kt)("h3",{id:"snippets"},"Snippets"),(0,i.kt)("p",null,'Mendix will add the "mx-name-',(0,i.kt)("inlineCode",{parentName:"p"},"snippetCallName"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"widgetName"),'" for some Widgets from older Mendix versions. In newer versions, the the "mx-name-',(0,i.kt)("inlineCode",{parentName:"p"},"widgetName"),'" is used. Take this into account when creating enumeration values.'),(0,i.kt)("p",null,"Important note: Snippets are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. In order to define Locators for Widgets inside a Snippet, is is always required to add a surrounding Container (rendered as a DIV element) to locate it."),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 29 January 2025"))}u.isMDXComponent=!0},1853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pw_setup-5eaabef3e36faf81940b0adc065ba009.png"}}]);