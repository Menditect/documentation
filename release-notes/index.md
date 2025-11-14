# Release 3.0

#### Release date

3 November 2025

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 

## Highlights in this release
<i class="fas fa-fire"></i>  <b>Test Suite pages completely redesigned!</b> <br/>  
- Test Cases and Teststeps are now shown in collapsible treeview, on the left side.<br/>  
- Change Test Case and Teststep Run Settings directly from the detail view, on the right side.<br/>  
- Change Test Case and Teststep name directly from the detail view.<br/> <br/> 
<i class="fas fa-fire"></i>  <b>Added Test Run Exception handling!</b> <br/>  
- Choose to either Raise the Exception when it occurs, or just Continue with the Test Run.<br/>  
- Option to add an Assert on an Exception.<br/> <br/>  
<i class="fas fa-fire"></i>  <b>UI testing now generally available!</b> <br/>  
- Connector and Test Kit add-ons can be downloaded from the Marketplace.<br/>  
- Option to Generate UI Teststep(s) from MTA!<br/> <br/>  


## New functionality 

de oude onofficiele utility module wordt nu officieel ondersteund met helper microflows (check bij Jort de naamgeving)
Chrome en Firefox extensies om te helpen met Locators bouwen bij frontend testing

MTA-2071
frontend testing wizard(s) en add frontend test functie

MTA-2041
Textboxes to enter String values are now replaced by Testareas to allow entering new lines.
Additionally, String values can be shown as a JSON tree in a popup.

MTA-2126
After an Application was added to MTA, it is possible to Enable loading Pages and Widgets on that Application.
When enabled, MTA now also downloads Page and Widget information when downloading a revision with Mendix model information.

MTA-2017
It is now possible to Export a Snapshot to a JSON file, if it was created before a Test Configuration was adapted to another Revision, and the adapt failed.

MTA-2018
Added Test Case and Teststep Exception handling and Assert on Teststep Exception. 
It is now possible to continue with the next Teststep upon an Exception, or continue with the next Test Case.
Additionally, it is possible to Assert that an Exception is expected, enabling the option to have a Test Run succeed with Exceptions.
Breaking change: Test Runs that fail because of an Exception will now Continue with the next Test Case by default.

MTA-2204
The SAML SSO module in MTA was updated to 3.6.21 because of a security breach found at Siemens.

MTA-2226
When a Teststep returns a FileDocument with contents in a Test Run, the contents can now be downloaded.
If the FileDocument is of the Playwright Tracefile type, it can also be (re-)played at the Playwright website.


MTA-2231
It is now possible to add a Microflow Teststep using output, 
directly from a Teststep that returns an Object, to fill an Object Microflow parameter of the added Teststep.

MTA-1870
MTA can now download Add-on Modules in a Mendix project and use the elements from an Add-on module for Teststeps. 
Also see https://docs.mendix.com/refguide/consume-add-on-modules-and-solutions/

MTA-2178
MTA will no longer fail a Test Run if there are attributes returned that are unknown in the downloaded revision.
The error message was that the model was not up to date, but because Add-on modules are now supported, 
it is possible that these attributes are marked as Hidden, and therefore should be omitted.

MTA-2196
Support form is now opened in a new browser tab instead of a popup.
This is done to enable customers hosting MTA themselves. 
Use the `MtaUtils.UrlSupportForm` constant to set the URL.

MTA-2011
complete redesign in the UI of the test suite page 
complete redesign in the UI of the test suite run page


MTA-2002
The application filter for the Test Configurations Page will now be stored for the current user.



## Unclear

STATUS? MTA-2200
content hash; export van microflows met bijbehorende content hash, zodat klanten zelf inzicht kan krijgen in de aangepaste microflows per revisie

STATUS? MTA-1487
Differentiate between Empty and zero length Strings values.

STATUS? MTA-2166 

STATUS? MTA-2115


| ID                    | MTA-xxxx |
| --------------------- | -------- |
| __New functionality__ | ...      |
| __Release actions__   | None.    |

<br/>


## Bug fixes

MTA-2140
Count validation feedback message Asserts that are included in Test Suite datavariation are not copied when duplicating a Test Case.

MTA-2149
Generate by Recording feature results in an error popup when performed in a Test Case without any Teststeps.

MTA-2166
Limited String values are sometimes not shown in results of an executed microflow Teststep that has an Object as return value

| ID                  | (none) |
| ------------------- | ------ |
| __Problem__         | ...    |
| __Solution__        | ...    |
| __Release actions__ | None.  |

<br/>