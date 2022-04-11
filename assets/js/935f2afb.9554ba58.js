"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Documentation","href":"/","docId":"intro"},{"type":"category","label":"Reference guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Application Branch","href":"/refguide/application-branch","docId":"refguide/application-branch"},{"type":"link","label":"Application Environment","href":"/refguide/application-environment","docId":"refguide/application-environment"},{"type":"link","label":"Application Revision","href":"/refguide/application-revision","docId":"refguide/application-revision"},{"type":"link","label":"Application","href":"/refguide/application","docId":"refguide/application"},{"type":"link","label":"Assert on Attribute Value","href":"/refguide/assert-attribute-value","docId":"refguide/assert-attribute-value"},{"type":"link","label":"Assert on Object Count","href":"/refguide/assert-object-count","docId":"refguide/assert-object-count"},{"type":"link","label":"Attribute Value","href":"/refguide/attribute-value","docId":"refguide/attribute-value"},{"type":"link","label":"Construction Error","href":"/refguide/construction-error","docId":"refguide/construction-error"},{"type":"link","label":"Data Variation Item","href":"/refguide/datavariation-item","docId":"refguide/datavariation-item"},{"type":"link","label":"Data Variation","href":"/refguide/datavariation","docId":"refguide/datavariation"},{"type":"link","label":"Microflow Parameter Value","href":"/refguide/microflow-parameter-value","docId":"refguide/microflow-parameter-value"},{"type":"link","label":"Test Application","href":"/refguide/test-application","docId":"refguide/test-application"},{"type":"link","label":"Test Case","href":"/refguide/test-case","docId":"refguide/test-case"},{"type":"link","label":"Test Configuration","href":"/refguide/test-configuration","docId":"refguide/test-configuration"},{"type":"link","label":"Test Instruction","href":"/refguide/test-instruction","docId":"refguide/test-instruction"},{"type":"link","label":"Test Run","href":"/refguide/test-run","docId":"refguide/test-run"},{"type":"link","label":"Test Step","href":"/refguide/test-step","docId":"refguide/test-step"},{"type":"link","label":"Test Suite","href":"/refguide/test-suite","docId":"refguide/test-suite"}]},{"type":"category","label":"MTA howto","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Access environment","href":"/howtos/access-environment","docId":"howtos/access-environment"},{"type":"link","label":"Access Mendix model","href":"/howtos/access-mendix-model","docId":"howtos/access-mendix-model"},{"type":"link","label":"Configure Ci/Cd pipeline","href":"/howtos/cicd","docId":"howtos/cicd"},{"type":"link","label":"Import MTA Plugin","href":"/howtos/import-plugin","docId":"howtos/import-plugin"},{"type":"link","label":"Prepare Mendix project","href":"/howtos/prepare-mendix-project","docId":"howtos/prepare-mendix-project"},{"type":"link","label":"Use SSO","href":"/howtos/sso","docId":"howtos/sso"},{"type":"link","label":"Test with anonymous user","href":"/howtos/test-anonymous-user","docId":"howtos/test-anonymous-user"},{"type":"link","label":"Test an API","href":"/howtos/test-api","docId":"howtos/test-api"}]},{"type":"category","label":"Known issues","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Java Compile Error","href":"/knownissues/java-compile-error","docId":"knownissues/java-compile-error"}]}]},"docs":{"howtos/access-environment":{"id":"howtos/access-environment","title":"Access environment","description":"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well.","sidebar":"tutorialSidebar"},"howtos/access-mendix-model":{"id":"howtos/access-mendix-model","title":"Access Mendix model","description":"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.","sidebar":"tutorialSidebar"},"howtos/cicd":{"id":"howtos/cicd","title":"Configure Ci/Cd pipeline","description":"Definition","sidebar":"tutorialSidebar"},"howtos/import-plugin":{"id":"howtos/import-plugin","title":"Import MTA Plugin","description":"Download the MTA plugin module from Github with the highest Mendix version possible for your project. Check the version that is displayed on the Plugin. It represents the lowest supported Mendix version, all higher Mendix versions are supported.","sidebar":"tutorialSidebar"},"howtos/prepare-mendix-project":{"id":"howtos/prepare-mendix-project","title":"Prepare Mendix project","description":"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page.","sidebar":"tutorialSidebar"},"howtos/sso":{"id":"howtos/sso","title":"Use SSO","description":"Menditect uses a username with each test case to indicate who is running it. This is basically the username of a local user account, but could also be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won\'t be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.","sidebar":"tutorialSidebar"},"howtos/test-anonymous-user":{"id":"howtos/test-anonymous-user","title":"Test with anonymous user","description":"Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login.","sidebar":"tutorialSidebar"},"howtos/test-api":{"id":"howtos/test-api","title":"Test an API","description":"Testing an API means creating an integration test where two apps communicate. One hypothetical app (A) executes a REST call. The other app (B) hosting a REST service, will answer. In MTA it is not possible to directly execute a REST call or host a REST service, but it is possible to use the microflows where the REST call or service depends on.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Documentation","description":"This is the home page for the Menditect Documentation site.","sidebar":"tutorialSidebar"},"knownissues/java-compile-error":{"id":"knownissues/java-compile-error","title":"Java Compile Error","description":"Issue summary","sidebar":"tutorialSidebar"},"refguide/application":{"id":"refguide/application","title":"Application","description":"Definition","sidebar":"tutorialSidebar"},"refguide/application-branch":{"id":"refguide/application-branch","title":"Application Branch","description":"Definition","sidebar":"tutorialSidebar"},"refguide/application-environment":{"id":"refguide/application-environment","title":"Application Environment","description":"Definition","sidebar":"tutorialSidebar"},"refguide/application-revision":{"id":"refguide/application-revision","title":"Application Revision","description":"Definition","sidebar":"tutorialSidebar"},"refguide/assert-attribute-value":{"id":"refguide/assert-attribute-value","title":"Assert on Attribute Value","description":"Definition","sidebar":"tutorialSidebar"},"refguide/assert-object-count":{"id":"refguide/assert-object-count","title":"Assert on Object Count","description":"Definition","sidebar":"tutorialSidebar"},"refguide/attribute-value":{"id":"refguide/attribute-value","title":"Attribute Value","description":"Definition","sidebar":"tutorialSidebar"},"refguide/construction-error":{"id":"refguide/construction-error","title":"Construction Error","description":"Definition","sidebar":"tutorialSidebar"},"refguide/datavariation":{"id":"refguide/datavariation","title":"Data Variation","description":"Definition","sidebar":"tutorialSidebar"},"refguide/datavariation-item":{"id":"refguide/datavariation-item","title":"Data Variation Item","description":"Definition","sidebar":"tutorialSidebar"},"refguide/microflow-parameter-value":{"id":"refguide/microflow-parameter-value","title":"Microflow Parameter Value","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-application":{"id":"refguide/test-application","title":"Test Application","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-case":{"id":"refguide/test-case","title":"Test Case","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-configuration":{"id":"refguide/test-configuration","title":"Test Configuration","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-instruction":{"id":"refguide/test-instruction","title":"Test Instruction","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-run":{"id":"refguide/test-run","title":"Test Run","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-step":{"id":"refguide/test-step","title":"Test Step","description":"Definition","sidebar":"tutorialSidebar"},"refguide/test-suite":{"id":"refguide/test-suite","title":"Test Suite","description":"Definition","sidebar":"tutorialSidebar"}}}')}}]);