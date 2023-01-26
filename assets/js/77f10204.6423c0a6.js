"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={},r="Import plugin",l={unversionedId:"howtos/import-plugin",id:"howtos/import-plugin",title:"Import plugin",description:"In order for MTA to communicate with the Application under test, you need to import a module created by Menditect that will initiate this communication. This is the MTA Plugin module. Each version of MTA comes with a specific version of the MTA Plugin module. The versions are however not the same, because sometimes the MTA Plugin needs to be updated or patched resulting in a newer version.",source:"@site/additional/01-howtos/import-plugin.md",sourceDirName:"01-howtos",slug:"/howtos/import-plugin",permalink:"/additional/howtos/import-plugin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design Microflow testing",permalink:"/additional/howtos/design-microflow"},next:{title:"Isolate a Test Case",permalink:"/additional/howtos/isolate-test-case"}},s={},u=[{value:"Importing MTA Plugin",id:"importing-mta-plugin",level:2},{value:"Upgrading to a newer runtime version",id:"upgrading-to-a-newer-runtime-version",level:3},{value:"Configuring MTA Plugin",id:"configuring-mta-plugin",level:2},{value:"Including After startup microflow",id:"including-after-startup-microflow",level:3},{value:"Configuring Connection user in MTA",id:"configuring-connection-user-in-mta",level:3},{value:"Setting Constants",id:"setting-constants",level:3},{value:"<code>ApplicationInstanceToken</code>",id:"applicationinstancetoken",level:4},{value:"<code>ConnectionMethod</code>",id:"connectionmethod",level:4},{value:"<code>MTAConnectionUsername</code>",id:"mtaconnectionusername",level:4},{value:"<code>MTAConnectionPassword</code>",id:"mtaconnectionpassword",level:4},{value:"<code>MTAWebSocketURL</code>",id:"mtawebsocketurl",level:4},{value:"Configuring Plugin Home page",id:"configuring-plugin-home-page",level:3},{value:"Feedback?",id:"feedback",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"import-plugin"},"Import plugin"),(0,i.kt)("p",null,"In order for MTA to communicate with the Application under test, you need to import a module created by Menditect that will initiate this communication. This is the MTA Plugin module. Each version of MTA comes with a specific version of the MTA Plugin module. The versions are however not the same, because sometimes the MTA Plugin needs to be updated or patched resulting in a newer version."),(0,i.kt)("p",null,"If you are ",(0,i.kt)("a",{parentName:"p",href:"run-mta-on-premise"},"running MTA on Premise"),", you may notice that MTA also contains an MTA Plugin module. This is because Menditect regression-tests MTA with MTA. The information in this page is regarding the customer Application to test. For Menditect on-premise customers and partners: please don't import the MTA Plugin module into MTA."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In no case should you make changes to elements inside the MtaPluginModule. ",(0,i.kt)("br",null),"Menditect will not provide support if the MtaPluginModule is changed after you have imported it into your test project.")),(0,i.kt)("h2",{id:"importing-mta-plugin"},"Importing MTA Plugin"),(0,i.kt)("p",null,"Download the MTA plugin module from Github:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Menditect/MENDITECT-MTA-Plugin/releases"},"https://github.com/Menditect/MENDITECT-MTA-Plugin/releases"),"   "),(0,i.kt)("p",null,"Each release comes with 3 files, each corresponding with one of the supported Mendix runtime versions: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"download the 7-xx.xxx file for Mendix 7;"),(0,i.kt)("li",{parentName:"ul"},"download the 8-xx.xxx file for Mendix 8;"),(0,i.kt)("li",{parentName:"ul"},"download the 9-xx.xxx file for Mendix 9;")),(0,i.kt)("p",null,"Always make sure to download the right release. The MTA version supported by the release is listed in the description on Github. "),(0,i.kt)("p",null,"Import the MTA plugin module package ",(0,i.kt)("strong",{parentName:"p"},"in your test application")," as a new module. If you have imported it before, make sure to replace the module and not delete it first. Deleting it first may result in having to fix errors manually. After importing, make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can create Module content containing the MTA Plugin in your Company marketplace (",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.mendix.com/link/mymarketplace"},"https://marketplace.mendix.com/link/mymarketplace"),"), so you import the MTA Plugin module from the appstore. We are currently working on publishing it to the public Mendix marketplace. ")),(0,i.kt)("h3",{id:"upgrading-to-a-newer-runtime-version"},"Upgrading to a newer runtime version"),(0,i.kt)("p",null,"To upgrade the major version of your Mendix App (for example, from Mendix 8.18 to 9.12), you need to make sure to replace all the files related to the MTA Plugin Module. Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. Then, download the respective MTA plugin module from Github that matches the newer Mendix version as listed above. You can do all this before performing the upgrade."),(0,i.kt)("h2",{id:"configuring-mta-plugin"},"Configuring MTA Plugin"),(0,i.kt)("h3",{id:"including-after-startup-microflow"},"Including After startup microflow"),(0,i.kt)("p",null,'After you have downloaded the MTA Plugin, you need to configure your Application under test.\nOpen the App Settings window in Mendix Studio Pro and navigate to the Runtime tab. On the "After startup" setting, click on \'Show\' if there is an After startup microflow already selected. Make sure to include the "At_Startup_Setup_Connection" microflow in the MtaPluginModule. '),(0,i.kt)("p",null,'If there is no existing After startup microflow, just select the "ASU_Setup_Connection_MTA" in the popup window.'),(0,i.kt)("h3",{id:"configuring-connection-user-in-mta"},"Configuring Connection user in MTA"),(0,i.kt)("p",null,"After MTA has started up for the first time, it will create a Connection user. "),(0,i.kt)("p",null,"In order to allow a Mendix App to connect to MTA you need to set the password for this Connection user. There is only one Connection user per MTA node so the password is the same for all Mendix Apps that you want to test in MTA."),(0,i.kt)("p",null,"If you have already set the password previously for another App, use that password. Otherwise follow these steps. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to MTA as MTA Manager."),(0,i.kt)("li",{parentName:"ul"},"Navigate to MTA management, MTA Users."),(0,i.kt)("li",{parentName:"ul"},"Edit the 'MTAConnectionUser' account."),(0,i.kt)("li",{parentName:"ul"},"Set the password. "),(0,i.kt)("li",{parentName:"ul"},"Save the password in a password manager that you can share with your colleagues.")),(0,i.kt)("h3",{id:"setting-constants"},"Setting Constants"),(0,i.kt)("p",null,"To configure the MTA Plugin, there are 5 constants that you have to assign a value. If you are testing an app that is running locally, assign the values in the project configuration settings (Mendix docs: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/configuration/#2-configuration-settings"},"https://docs.mendix.com/refguide/configuration/#2-configuration-settings"),") but ",(0,i.kt)("em",{parentName:"p"},"never")," inside the MtaPluginModule. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To find the values for any of these Constants, simply ",(0,i.kt)("a",{parentName:"p",href:"../../application-instance#view-application-instances-for-an-application"},"open the details of the Application Instance")," in MTA and click on a Copy button. ")),(0,i.kt)("h4",{id:"applicationinstancetoken"},(0,i.kt)("inlineCode",{parentName:"h4"},"ApplicationInstanceToken")),(0,i.kt)("p",null,"This corresponds with an ID that MTA has generated for an Application Instance.\nYou can set this constant after you have ",(0,i.kt)("a",{parentName:"p",href:"../../application-instance#create-an-application-instance"},"added an Application Instance")," in MTA."),(0,i.kt)("h4",{id:"connectionmethod"},(0,i.kt)("inlineCode",{parentName:"h4"},"ConnectionMethod")),(0,i.kt)("p",null,"This will determine if your app will try to connect to MTA, either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"'AfterStartup': After deployment the app will try to connect to MTA using the provided token and Connection User's credentials."),(0,i.kt)("li",{parentName:"ul"},"'Manual': You have to establish the connection to MTA manually, with the ",(0,i.kt)("a",{parentName:"li",href:"#configuring-plugin-home-page"},"Plugin Home page")," in the app."),(0,i.kt)("li",{parentName:"ul"},"'None': This will disable the connection to MTA.")),(0,i.kt)("p",null,"Any other value will result in an error message when attempting to establish the connection to MTA."),(0,i.kt)("h4",{id:"mtaconnectionusername"},(0,i.kt)("inlineCode",{parentName:"h4"},"MTAConnectionUsername")),(0,i.kt)("p",null,"This is the username that is set for the Connection user in MTA. The default value is 'MTAConnectionUser'."),(0,i.kt)("h4",{id:"mtaconnectionpassword"},(0,i.kt)("inlineCode",{parentName:"h4"},"MTAConnectionPassword")),(0,i.kt)("p",null,"This is the password that is set for the Connection user in MTA ",(0,i.kt)("a",{parentName:"p",href:"#configuring-connection-user-in-mta"},"in the previous step"),"."),(0,i.kt)("h4",{id:"mtawebsocketurl"},(0,i.kt)("inlineCode",{parentName:"h4"},"MTAWebSocketURL")),(0,i.kt)("p",null,"This is the URL that the app will use to connect to MTA. The URL is setup as follows:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"wss://{URL to MTA}")),(0,i.kt)("p",null,"Example: wss://mta-mtatraining.mendixcloud.com"),(0,i.kt)("h3",{id:"configuring-plugin-home-page"},"Configuring Plugin Home page"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As of MTA version 2.0, configuring the MTA Plugin Home page is only necessary if you want to manually connect to MTA. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Page with a Responsive layout."),(0,i.kt)("li",{parentName:"ul"},'Insert the "MTAPluginPage" snippet from the MTA Plugin Module.'),(0,i.kt)("li",{parentName:"ul"},"Add Project User Roles to the Page."),(0,i.kt)("li",{parentName:"ul"},'Add the "MTAPluginUser" Module role from the MTA Plugin Module to all of these Project User Roles.'),(0,i.kt)("li",{parentName:"ul"},"Include the new Page in the Navigation.")),(0,i.kt)("p",null,"You can now view connection details and manually connect to MTA, with accounts having the Project User Roles that you specified."),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}c.isMDXComponent=!0}}]);