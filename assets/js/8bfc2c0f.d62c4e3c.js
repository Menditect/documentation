"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[447],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,N=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(N,o(o({ref:e},u),{},{components:a})):n.createElement(N,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8723:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={},s="Release 1.5",p={unversionedId:"releasenotes/release_0105",id:"releasenotes/release_0105",title:"Release 1.5",description:"Release 1.5",source:"@site/docs/releasenotes/release_0105.md",sourceDirName:"releasenotes",slug:"/releasenotes/release_0105",permalink:"/releasenotes/release_0105",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Current release",permalink:"/releasenotes/current"},next:{title:"Service Level Agreement",permalink:"/sla"}},u=[{value:"Release 1.5",id:"release-15-1",children:[{value:"Release date",id:"release-date",children:[],level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",children:[],level:4}],level:2},{value:"New functionality",id:"new-functionality",children:[],level:2},{value:"Bug fixes",id:"bug-fixes",children:[],level:2}],d={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"release-15"},"Release 1.5"),(0,l.kt)("h2",{id:"release-15-1"},"Release 1.5"),(0,l.kt)("h4",{id:"release-date"},"Release date"),(0,l.kt)("p",null,"17 february 2022"),(0,l.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,l.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS)."),(0,l.kt)("h2",{id:"new-functionality"},"New functionality"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-46"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"It is now possible to add an assert on the attribute value of the (primitive) output parameter of a microflow in a microflow test step. ",(0,l.kt)("br",null)," Note that the option to add an assert on the attribute value of an object output parameter of a microflow will be built in a future release. To achieve this in release 1.5, create a retrieve object test step that retrieves the object output parameter, and add the assert there.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-270"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'It is now possible to add an assert on a string attribute value and choose "contains", so check if the value contains certain characters.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-402"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'It is now possible to negate an assert. For all existing options like "equals" and "range", and also for the new option "contains", there is now also a "not equals", "not range" and "not contains" option to indicate the assert should be negated. ',(0,l.kt)("br",null),(0,l.kt)("br",null),'Note that there is no "not" option added for boolean attributes.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-120"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'It is now possible to configure "currentdatetime with offset" on an assert on a datetime attribute value.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-418"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'If on an assert on attribute value the option "range" is selected, both the Min and Max values are now mandatory.',(0,l.kt)("br",null),(0,l.kt)("br",null),'Note that the option to check if a value is "greater than" or "smaller than" etc. will be built in a future release.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-453"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"It is now possible to record actions executed by a user in the frontend of a test application, and automatically create microflow test steps if these actions include a microflow call. For more info see our blog (",(0,l.kt)("a",{parentName:"td",href:"https://menditect.com/what-happens-below-the-screen"},"what happens below the screen?"),")",(0,l.kt)("br",null),(0,l.kt)("br",null),"Note this functionality is currently still under development (beta). The option to automatically create object test steps will be built in a future release.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-375"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'If the execution flow encounters a "validation feedback" action during the execution of a microflow, the details of the message are shown in the result of the test case.',(0,l.kt)("br",null),(0,l.kt)("br",null),'Note that validation feedback generated in a page is not included. Also "show message" actions in microflows are not included.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-325"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"Downloaded revisions that are not used anymore will be periodically cleaned up for performance reasons.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-451"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"When deleting an application that is associated with test configurations which are marked for deletion, but have not yet been deleted in the nightly cleanup process, will be deleted as well. A message is shown that the process can take some time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-415"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"If a construction error in a test step leads to an attribute or assert that is used in data variation, the \u2018Solve\u2019-button will lead to the data variation page, so the error(s) can be solved there. In the design overview only the first variant can be solved, and if there is still an error in one of the variations, a warning for this will be shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-446"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},'Boolean values are now always shown as "Yes" or "No" instead of sometimes as "true" or "false".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-454"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"Performance improvement for executing test steps where attribute values are configured.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-430"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When updating a revision of a Test Application associated with a Test Configuration that uses more than one Test Application, an unstable situation occurred, leading to unexpected errors.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"Updating a revision of a Test Application associated with a Test Configuration that uses more than one Test Application no longer leads to an unexpected situation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-423"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When changing the execution user on a test case results in the execution user no longer being used, it is not always possible to delete the execution user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"It is now always possible to delete an execution user that is not used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-404"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"Changing a retrieve test step sometimes results in an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"Changing a retrieve test step no longer results in an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-444"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"After changing a value in the data variation page, the table showing all the variations sometimes does not refresh correctly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"The table showing all the variations refreshes correctly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-445"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When editing the assert on an attribute value from the test results page, an empty page would be shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"It is now also possible to edit asserts from the test results page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-456"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When an assert attribute value is configured on a test step and the result of the test execution yields multiple objects, the assert result per object was not shown correctly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"The assert result per object is now shown correctly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))))}m.isMDXComponent=!0}}]);