# Release 3.0

#### Release date

17 December 2025

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


## Highlights in this release
<iframe src="https://player.vimeo.com/video/1146578844" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>  
<i class="fas fa-fire"></i>  <b>Frontend testing now generally available!</b> <br/>  
- Just download the Connector and Test Kit modules from the Marketplace.<br/>  
- MTA will show options to prepare the Frontend Test Case structure and Generate Frontend Teststeps!<br/> <br/>  
<i class="fas fa-fire"></i>  <b>Test Suite pages completely redesigned!</b> <br/>  
- Test Cases and Teststeps are now shown in collapsible treeview, on the left side.<br/>  
- Change Test Case and Teststep Run Settings directly from the detail view, on the right side.<br/>  
- Change Test Case and Teststep name directly from the detail view.<br/> <br/> 
<i class="fas fa-fire"></i>  <b>Added Test Run Exception handling!</b> <br/>  
- Choose to either Raise the Exception when it occurs, or just Continue with the Test Run.<br/>  
- Option to add an Assert on an Exception.<br/> <br/>  


## Required actions

### Update the MTA Plugin

Some new functions will not work on the old version of the [MTA Plugin](../Tools/mta-plugin).
- Make sure to update the [MTA Plugin from the Mendix Marketplace](https://marketplace.mendix.com/link/component/214717). 

:::info changed versioning
Because Menditect now hosts all Mendix Runtime versions (9, 10 and 11) in the same marketplace component, we have moved to a different versioning system. The major MTA Plugin version indicates the Mendix Runtime version. The remaining digits indicate the internal version of the MTA Plugin.
:::

### Replace Page call by Microflow call

The [MTA Plugin](../Tools/mta-plugin) is now an [Add-on module](https://docs.mendix.com/refguide/consume-add-on-modules-and-solutions/). Imported Add-on modules cannot contain Snippets or Pages. If you used a Page to establish the connection to MTA, you can download a Module with a Snippet from here: https://marketplace.mendix.com/link/component/252213

### Re-create your PAT

For Mendix Teams still using SVN repositories, it is required to re-create a Personal Access Token (PAT) in their Mendix profile, with the required scopes.
- Follow the Steps in the [Access Mendix Model How-to](../additional/howtos/configure-mta/access-mendix-model#create-your-pat-in-your-mendix-account).

## New functionality 


| ID                    | MTA-2071                                                                                                                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | After an Application is added to MTA, it is possible to Enable loading Pages and Widgets on that Application. When enabled, MTA now also downloads Page and Widget information when downloading a revision with Mendix model information. |
| __Release actions__   | None.                                                                                                                                                                                                                                     |

<br/>

| ID                    | MTA-2126                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA now fully supports frontend testing a Mendix Application. Menditect has made the required Playwright modules publicly available in the Mendix Marketplace. When these are downloaded into the Mendix model, it is possible to generate Frontend Test Cases in MTA. With the Frontend Test Case structure in place, it is possible to add Teststeps that consistently Locate any Platform Supported Mendix Widget on a Mendix Page, and perform subsequent Actions on it. |
| __Release actions__   | Import [required Add-on modules](../Tools/) from the marketplace and Enable loading Pages and Widgets on the Application in MTA.                                                                                                                                                                                                                                                                                                                                             |

<br/>

| ID                    | MTA-2011                                                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Pages showing the Test Suite with Test Cases and Teststeps, and Pages showing Test Suite Run results, are completely redesigned, making it easier to add and edit Teststeps, set Asserts and Datavariation, and get a better overall user experience. |
| __Release actions__   | None.                                                                                                                                                                                                                                                 |

<br/>

| ID                    | MTA-2018                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Added Test Case and Teststep Exception handling and Assert on Teststep Exception. It is now possible to continue with the next Teststep upon an Exception, or continue with the next Test Case. Additionally, it is possible to Assert that an Exception is expected, enabling the option to have a Test Run succeed with Exceptions. |
| __Release actions__   | Import the latest MTA Plugin into your Mendix App. <br/>*Breaking change*: Test Runs that fail because of an Exception will now Continue with the next Test Case by default.                                                                                                                                                          |

<br/>

| ID                    | MTA-2041                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Text Boxes to enter String values are now replaced by Text Areas to allow entering new lines. Additionally, String values can be shown as a JSON tree in a popup. |
| __Release actions__   | None.                                                                                                                                                             |

<br/>


| ID                    | MTA-2226                                                                                                                                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When a Teststep returns a FileDocument with contents in a Test Run, the contents can now be downloaded. If the FileDocument is of the Playwright Tracefile type, it can also be (re-)played at the Playwright website. |
| __Release actions__   | Import the latest MTA Plugin into your Mendix App and execute a test in MTA 3.0.                                                                                                                                       |

<br/>


| ID                    | MTA-2017                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | It is now possible to Export a Snapshot to a JSON file, if it was created before a Test Configuration was adapted to another Revision, and the adapt failed. |
| __Release actions__   | None.                                                                                                                                                        |

<br/>


| ID                    | MTA-2204                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The SAML SSO module in MTA was updated to 3.6.21 because of a security breach found at Siemens Security Advisory. |
| __Release actions__   | None.                                                                                                             |

<br/>


| ID                    | MTA-2231                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to add a new Microflow Teststep "using output" from a Teststep that returns an Object. The Object Microflow parameter of the new Microflow Teststep will be filled with the output of the original Teststep. |
| __Release actions__   | None.                                                                                                                                                                                                                           |

<br/>

| ID                    | MTA-1870                                                                                                                                                                                                                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA will no longer fail a Test Run if there are attributes returned that are unknown in the downloaded revision. The error message was that the model was not up to date, but because Add-on modules are now supported,  it is possible that these attributes are marked as Hidden, and therefore should be omitted. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                |

<br/>


| ID                    | MTA-2178                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA can now download Add-on Modules in a Mendix project and use the elements from an Add-on module for Teststeps. |
| __Release actions__   | Read https://docs.mendix.com/refguide/consume-add-on-modules-and-solutions/ for more information.                 |

<br/>


| ID                    | MTA-2196                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The Support Form is now opened in a new browser tab instead of a popup. This is done to enable customers using MTA through a Mendix license, to contact Mendix Support instead of Menditect Support. |
| __Release actions__   | Use the `MtaUtils.UrlSupportForm` constant to set the URL.                                                                                                                                           |

<br/>



| ID                    | MTA-2229                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| __New functionality__ | Released browser extensions for Chrome and Firefox that show the mx-names of Widgets on the Page. |
| __Release actions__   | Download the browser extensions from the Chrome Web Store / Firefox Addon site.                   |

<br/>


| ID                    | N/A                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | If a Microflow, Entity or Attribute contains Documentation, it is now visible in MTA under the <i class="fal fa-book-open"></i> Icon. |
| __Release actions__   | None.                                                                                                                                 |

<br/>


| ID                    | N/A                                                            |
| --------------------- | -------------------------------------------------------------- |
| __New functionality__ | It is now possible to manually delete an Application Revision. |
| __Release actions__   | None.                                                          |

<br/>


| ID                    | N/A                                                            |
| --------------------- | -------------------------------------------------------------- |
| __New functionality__ | The Mendix Runtime version of MTA has been updated to 9.24.40. |
| __Release actions__   | None.                                                          |

<br/>


| ID                    | MTA-2200                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Included the Content Hash in the Microflow Usage CSV export on the Mendix Model page of a Test Configuration. The Content Hash of a Microflow can be used to determine whether a Microflow was changed between revisions. |
| __Release actions__   | Download a new revision in MTA 3.0.                                                                                                                                                                                       |

<br/>

## Bug fixes

| ID                  | MTA-2140                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | Count validation feedback message Asserts that are included in Test Suite datavariation are not copied when duplicating a Test Case. |
| __Solution__        | Count validation feedback message Asserts that are included in Test Suite datavariation are now copied when duplicating a Test Case. |
| __Release actions__ | None.                                                                                                                                |

<br/>

| ID                  | MTA-2149                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Generate by Recording feature results in an error popup when performed in a Test Case without any Teststeps.           |
| __Solution__        | Generate by Recording feature no longer results in an error popup when performed in a Test Case without any Teststeps. |
| __Release actions__ | None.                                                                                                                  |

<br/>

| ID                  | MTA-2166                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | String attribute values are not shown in the Test Run results of an executed Microflow Teststep that returns an Object. |
| __Solution__        | String attribute values are now shown in the Test Run results of an executed Microflow Teststep that returns an Object. |
| __Release actions__ | None.                                                                                                                   |

<br/>

| ID                  | Plugin-4114                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | If a Teststep results in empty output and it is used to fill a List type Microflow parameter, the parameter value will always be empty, also of other Teststeps that were added to the List do not have an empty output. |
| __Solution__        | If a Teststep results in empty output and it is used to fill a List type Microflow parameter, the parameter value will now be filled as expected, with only Teststeps that do not result in an empty value.              |
| __Release actions__ | None.                                                                                                                                                                                                                    |

<br/>
