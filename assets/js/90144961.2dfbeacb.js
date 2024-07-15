"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.createContext({}),u=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||n;return a?l.createElement(m,i(i({ref:t},s),{},{components:a})):l.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(7462),r=(a(7294),a(3905));const n={sidebar_position:12},i="Coverage Exclude Filter",o={unversionedId:"coverage-exclude-filter",id:"coverage-exclude-filter",title:"Coverage Exclude Filter",description:"Definition",source:"@site/docs/coverage-exclude-filter.md",sourceDirName:".",slug:"/coverage-exclude-filter",permalink:"/coverage-exclude-filter",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Coverage Exception",permalink:"/coverage-exception"},next:{title:"Coverage Goal",permalink:"/coverage-goal"}},c={},u=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Exclude Filter",id:"actions-on-an-exclude-filter",level:2},{value:"View Exclude Filters on a Coverage Goal",id:"view-exclude-filters-on-a-coverage-goal",level:3},{value:"Generate an Exclude Filter on a Coverage Goal by Microflow name",id:"generate-an-exclude-filter-on-a-coverage-goal-by-microflow-name",level:3},{value:"Generate an Exclude Filter on a Coverage Goal by Module name",id:"generate-an-exclude-filter-on-a-coverage-goal-by-module-name",level:3},{value:"Add an Exclude Filter on a Coverage Goal manually",id:"add-an-exclude-filter-on-a-coverage-goal-manually",level:3},{value:"Edit an Exclude Filter",id:"edit-an-exclude-filter",level:3},{value:"Delete an Exclude Filter",id:"delete-an-exclude-filter",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coverage-exclude-filter"},"Coverage Exclude Filter"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"An Exclude Filter is used to ",(0,r.kt)("strong",{parentName:"p"},"exclude")," one or more microflows from counting towards the coverage percentage that is calculated for one ",(0,r.kt)("a",{parentName:"p",href:"coverage-goal"},"Coverage Goal")," whenever a test is executed."),(0,r.kt)("p",null,"An Exclude Filter is evaluated on the ",(0,r.kt)("strong",{parentName:"p"},"fully-qualified")," name of a microflow: ",(0,r.kt)("inlineCode",{parentName:"p"},"MyModule.MyMicroflow"),". Therefore, the filter is constructed in 2 parts; the Module name part and the Microflow name part."),(0,r.kt)("p",null,"An Exclude Filter is ",(0,r.kt)("strong",{parentName:"p"},"case-insensitive"),". This is because elements in a Mendix Model are also case-insensitive (there cannot be two modules with the same name even if the casing is different)."),(0,r.kt)("p",null,"An Exclude Filter can be provided with asterisks (","*",") as a ",(0,r.kt)("strong",{parentName:"p"},"wildcard"),". "),(0,r.kt)("p",null,"Microflows in the Mendix System module are always excluded from coverage calculation."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Module Name Filter"),(0,r.kt)("td",{parentName:"tr",align:null},"The filter for the module name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microflow Name Filter"),(0,r.kt)("td",{parentName:"tr",align:null},"The filter for the microflow name")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Module Name Filter may not be empty and should start with a letter, underscore or asterisk and can only contain letters, digits, underscores and asterisks."),(0,r.kt)("li",{parentName:"ul"},"The Microflow Name Filter may not be empty and should start with a letter, underscore or asterisk and can only contain letters, digits, underscores and asterisks."),(0,r.kt)("li",{parentName:"ul"},"Exclude Filters that are added to a Coverage Goal on a Test Configuration, will apply to microflows in the ",(0,r.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," that was last applied to that Test Configuration. "),(0,r.kt)("li",{parentName:"ul"},"Exclude Filters that are added to a Coverage Goal on an Application, will apply to microflows in the ",(0,r.kt)("em",{parentName:"li"},"latest")," ",(0,r.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")," found in the included Test Configurations. ")),(0,r.kt)("h2",{id:"actions-on-an-exclude-filter"},"Actions on an Exclude Filter"),(0,r.kt)("h3",{id:"view-exclude-filters-on-a-coverage-goal"},"View Exclude Filters on a Coverage Goal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"coverage-goal"},(0,r.kt)("i",{class:"fal fa-umbrella"})," Coverage Goals")," for the respective ",(0,r.kt)("a",{parentName:"li",href:"application"},"Application")," or ",(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),"."),(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("a",{parentName:"li",href:"coverage-goal"},"Coverage Goal")," you want to set filters for."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fa fa-pencil"}),' in "Microflow usage for coverage calculation" on the right side of the page.')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On the top of this page, you will see how many microflows will be included and excluded, based on the current Application Revision and Exclude Filters in the Coverage Goal.\nThis information will be automatically updated if the Exclude Filters change or if another Application Revision is applied.\nClicking on one of the numbers will show which microflows the number relates to. ")),(0,r.kt)("h3",{id:"generate-an-exclude-filter-on-a-coverage-goal-by-microflow-name"},"Generate an Exclude Filter on a Coverage Goal by Microflow name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the list of Exclude Filters on a Coverage Goal."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-wand-magic-sparkles"}),' Generate" and select "',(0,r.kt)("i",{class:"fal fa-play-circle"}),' Generate by microflow name"'),(0,r.kt)("li",{parentName:"ul"},'Select the Microflow(s) and click "',(0,r.kt)("i",{class:"fal fa-wand-magic-sparkles"}),' Generate filter" when done.'),(0,r.kt)("li",{parentName:"ul"},"MTA will generate filters for each selected microflow, with fully qualified name as Module Name filter and Microflow Name filter.")),(0,r.kt)("h3",{id:"generate-an-exclude-filter-on-a-coverage-goal-by-module-name"},"Generate an Exclude Filter on a Coverage Goal by Module name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the list of Exclude Filters on a Coverage Goal."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-wand-magic-sparkles"}),' Generate" and select "',(0,r.kt)("i",{class:"fal fa-cube"}),' Generate by module name"'),(0,r.kt)("li",{parentName:"ul"},'Select the Module(s) and click "',(0,r.kt)("i",{class:"fal fa-wand-magic-sparkles"}),' Generate filter" when done.'),(0,r.kt)("li",{parentName:"ul"},"MTA will generate filters with the selected modules as Module Name filter, and wildcards for the Microflow Name filter.")),(0,r.kt)("h3",{id:"add-an-exclude-filter-on-a-coverage-goal-manually"},"Add an Exclude Filter on a Coverage Goal manually"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the list of Exclude Filters on a Coverage Goal."),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Add".'),(0,r.kt)("li",{parentName:"ul"},"Enter the Module Name filter and Microflow Name filter and click Save.")),(0,r.kt)("h3",{id:"edit-an-exclude-filter"},"Edit an Exclude Filter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the list of Exclude Filters on a Coverage Goal."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fa fa-pencil"})," button on the filter you want to edit.")),(0,r.kt)("h3",{id:"delete-an-exclude-filter"},"Delete an Exclude Filter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the list of Exclude Filters on a Coverage Goal."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("i",{class:"fa fa-trash-alt"})," button on the filter you want to delete.")),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"coverage-goal"},"Coverage Goal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"coverage-exception"},"Coverage Exception")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"application"},"Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 24 June 2024"))}p.isMDXComponent=!0}}]);