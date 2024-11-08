"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3645],{3905:(t,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>d});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(i),b=a,d=u["".concat(c,".").concat(b)]||u[b]||h[b]||r;return i?n.createElement(d,l(l({ref:e},p),{},{components:i})):n.createElement(d,l({ref:e},p))}));function d(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,l=new Array(r);l[0]=b;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}b.displayName="MDXCreateElement"},7438:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:9},l="Branch Subscription",o={unversionedId:"branch-subscription",id:"branch-subscription",title:"Branch Subscription",description:"Definition",source:"@site/docs/branch-subscription.md",sourceDirName:".",slug:"/branch-subscription",permalink:"/branch-subscription",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Assert on Validation feedback",permalink:"/Assert/assert-validation-feedback"},next:{title:"Construction Error",permalink:"/construction-error"}},c={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on an Application Instance",id:"actions-on-an-application-instance",level:2},{value:"View Branch Subscriptions",id:"view-branch-subscriptions",level:3},{value:"Create a Branch Subscription",id:"create-a-branch-subscription",level:3},{value:"Edit a Branch Subscription",id:"edit-a-branch-subscription",level:3},{value:"Remove a Branch Subscription",id:"remove-a-branch-subscription",level:3},{value:"Repair a Branch Subscription",id:"repair-a-branch-subscription",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:s},u="wrapper";function h(t){let{components:e,...i}=t;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"branch-subscription"},"Branch Subscription"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Subscribing to a branch in a ",(0,a.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," will make MTA poll for new ",(0,a.kt)("a",{parentName:"p",href:"application-revision"},"Revisions")," (commits) on that branch and automatically download them in the background. "),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application"),(0,a.kt)("td",{parentName:"tr",align:null},"The Application where the Branch Subscription is made on. This can be any published free or licensed Mendix App.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Test Configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"The Test Configuration where the Branch Subscription is created in.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Branch"),(0,a.kt)("td",{parentName:"tr",align:null},"The branch where MTA will poll for new revisions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Polling frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"This how often the branch is checked for a new revision (High, Medium, Low).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Account"),(0,a.kt)("td",{parentName:"tr",align:null},"The Account of the user that created the Branch Subscription, that is used to authorize when polling and downloading revisions from Mendix.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the Account of the user that created the Branch Subscription is deleted, the subscription will be deactivated. The subscription can be ",(0,a.kt)("a",{parentName:"li",href:"#repair-a-branch-subscription"},"repaired")," by anyone having access to the same ",(0,a.kt)("a",{parentName:"li",href:"application"},"Application"),"."),(0,a.kt)("li",{parentName:"ul"},"If multiple Test Configurations are subscribed to the same Application Branch, the last configured Polling frequency will apply.")),(0,a.kt)("h2",{id:"actions-on-an-application-instance"},"Actions on an Application Instance"),(0,a.kt)("h3",{id:"view-branch-subscriptions"},"View Branch Subscriptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to the "Test configurations" page.'),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")," for which you want to see the Branch Subscriptions."),(0,a.kt)("li",{parentName:"ul"},'Navigate to "App revisions".'),(0,a.kt)("li",{parentName:"ul"},"For each Application that is associated to the Test Configuration, Branch Subscriptions, if present, are shown as ",(0,a.kt)("font",{color:"#21c359"}," ",(0,a.kt)("i",{class:"fal fa-code-branch"})," ")," in the list. ")),(0,a.kt)("h3",{id:"create-a-branch-subscription"},"Create a Branch Subscription"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," for the Application for which you want to create a subscription."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("i",{class:"fal fa-code-branch"}),' Subscribe to branch".'),(0,a.kt)("li",{parentName:"ul"},"Select which branch to subscribe to."),(0,a.kt)("li",{parentName:"ul"},"Select a Polling frequency."),(0,a.kt)("li",{parentName:"ul"},"Save. MTA will activate the subscription polling after 5 minutes. ")),(0,a.kt)("p",null,"Note that an active webhook will make MTA download new revisions instantly, but if it fails or is deactivated, the subscription polling frequency will still apply."),(0,a.kt)("h3",{id:"edit-a-branch-subscription"},"Edit a Branch Subscription"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," for the Application for which you want to edit the subscription."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("i",{class:"fal fa-code-branch"}),' Edit branch subscription".')),(0,a.kt)("h3",{id:"remove-a-branch-subscription"},"Remove a Branch Subscription"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," for the Application for which you want to remove the subscription."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("div",{class:"fa-stack"},(0,a.kt)("i",{class:"fal fa-code-branch fa-stack-1x"}),(0,a.kt)("i",{class:"fal fa-slash fa-stack-1x"})),'Unsubscribe from branch".')),(0,a.kt)("h3",{id:"repair-a-branch-subscription"},"Repair a Branch Subscription"),(0,a.kt)("p",null,"A Branch Subscription that is invalid will show as ",(0,a.kt)("font",{color:"#f99b1d"}," ",(0,a.kt)("i",{class:"fal fa-code-branch"})," ")," in the list."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-ellipsis"})," for the Application for which you want to repair the subscription."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("i",{class:"fal fa-code-branch"}),' Edit branch subscription".'),(0,a.kt)("li",{parentName:"ul"},"Click the button to create the polling cask. The subscription will be created on behalf of the user that is logged in."),(0,a.kt)("li",{parentName:"ul"},"Select a Polling frequency."),(0,a.kt)("li",{parentName:"ul"},"Save.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"application-revision"},"Application Revision")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 22 October 2024"))}h.isMDXComponent=!0}}]);