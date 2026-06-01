# Release 3.1

#### Release date

?? ??????? 2026

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


## Highlights in this release
<iframe src="https://player.vimeo.com/video/???????????" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>  
<i class="fas fa-fire"></i>  <b>Smart Test Run added!</b> <br/>  
- Option added to only execute Test Cases that have changed.<br/>  
- Option added to re-run only failed parts of a Test Run.<br/>  
<i class="fas fa-fire"></i>  <b>Conditional Run option added!</b> <br/>  
- Options added to either Skip, or Always-Run, Teststeps, Test Cases or Test Suites.<br/>  


## Required actions before upgrading to this version

:::caution
Do not skip these steps!
:::

### Check and fix (or delete) uneditable Test Configurations

- For all Test Configurations, check that the Status of the Test Suite is `Ready`: simply click to open the Test Suite, if it does not open, the status is `Changing`. 
- If (after some time) the Test Suite still cannot be opened, the Test Configuration is somehow in an error state. This indicates a possible issue with database data. Because database data need to be migrated to MTA 3.1, the data need to be repaired before upgrading to MTA 3.1.
- Decide if the Test Configuration can be deleted, otherwise contact [Menditect support](mailto:support@menditect.com)

### Check deleted Test Configurations

- Test Configurations marked for deletion will be permanently deleted when migrating to MTA 3.1.
- For all Test Configurations marked for deletion, check if they were accidently marked, and if so, restore them.


## New functionality

| ID                    | MTA-2279                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Restyled the pages to set Attributes and Associations for Create, Change and Retrieve Teststeps. Attributes and Associations now have to be added before they can be edited, but they can now be edited directly from the Test Suite page. Check the Reference Guide for more information. <br/> <br/>This change was implemented to speed up the processes of Adapting a Test Configuration to a revision, preparing a Test Run, and Test design in general. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<br/>

| ID                    | MTA-2377                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Options added to either Skip, or Always-Run, Teststeps, Test Cases or Test Suites. Check the Reference Guide for more information. |
| __Release actions__   | None.                                                                                                                              |

<br/>

| ID                    | MTA-2396                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Added the Smart Execute option on a Test Configuration, allowing only changed Test Cases or Failed Test Case Runs to be (re-)run. |
| __Release actions__   | None.                                                                                                                             |

<br/>

| ID                    | MTA-2425                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Removed support for Frontend testing with BrowserStack as the Playwright server; added (now preferred) option for Microsoft Azure. |
| __Release actions__   | None.                                                                                                                              |

<br/>

| ID                    | MTA-2002                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The filter that is set on Application in the Test Configurations page is now saved for the duration of the session. |
| __Release actions__   | None.                                                                                                               |

<br/>

| ID                    | N/A                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Improved flexibility of handling changed Pages and Widgets when importing or adapting a Test Configuration, leading to fewer construction errors. |
| __Release actions__   | None.                                                                                                                                             |

<br/>

| ID                    | N/A                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Changed the implementation of URL's that are used when clicking `Share` on an item.                             |
| __Release actions__   | Old URL's that are shared will still work but are deprecated. Preferred method is using the new implementation. |

<br/>


## Bug fixes

| ID                  | MTA-2287                                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Nightly [Data Validation](../additional/installation#data-validation) Runs always failed due to incorrect mutationdate check leading to incorrect record counts, and errors in the log file. |
| __Solution__        | Nightly Data Validation Runs now run as expected.                                                                                                                                            |
| __Release actions__ | None.                                                                                                                                                                                        |

<br/>


| ID                  | MTA-2302                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| __Problem__         | Deleting a Frontend-action (in step 3 of the Generate Frontend Tests wizard) resulted in an error. |
| __Solution__        | Deleting a Frontend-action (in step 3 of the Generate Frontend Tests wizard) works as expected.    |
| __Release actions__ | None.                                                                                              |

<br/>


| ID                  | MTA-2312                                                                                                                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Copying a Test Suite to another Test Configuration on a different Application Revision where the Test Suite is using Datavariation, fails when microflow parameter was added and the microflow no longer exists in the target Application Revision. |
| __Solution__        | Copying a Test Suite works as expected.                                                                                                                                                                                                             |
| __Release actions__ | None.                                                                                                                                                                                                                                               |

<br/>


| ID                  | MTA-2313                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Nightly Test Run Cleanup with the error `Cannot delete assert exception run because a test suite variation run uses the assert exception run` |
| __Solution__        | Nightly Test Run Cleanup works as expected.                                                                                                   |
| __Release actions__ | None.                                                                                                                                         |

<br/>


| ID                  | MTA-2400                                                             |
| ------------------- | -------------------------------------------------------------------- |
| __Problem__         | Duplicating an empty Test Suite resulted in an error.                |
| __Solution__        | Duplicating an empty Test Suite results in another empty Test Suite. |
| __Release actions__ | None.                                                                |

<br/>
