# Release 2.10

#### Release date

14 April 2025

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 

## Highlights in this release

<i class="fas fa-fire"></i>  <b>Datavariation pages and functions greatly improved!</b> <br/>  
- New features, like adding a Title, shift up and down, configuring amount of columns per page.<br/>  
- Improved Datavariation Navigability in both Run and Design, by using a.o. Highlighting and direct navigation to a Teststep or Test Case.
<br/>  <br/>  

<i class="fas fa-fire"></i>  <b>Automatically Adapt your Test Configuration!</b> <br/>  <br/>  

<i class="fas fa-fire"></i>  <b>Many improvements based on Customer Feedback! Highlighted with <i class="fa-regular fa-lightbulb-on"></i></b> <br/>  


## New functionality 


| ID                    | MTA-2013                                                                                                                                                                                   | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| __New functionality__ | It is now possible to assign a Title to a Datavariation column, shift Datavariation columns left and right, and delete the first Datavariation column, making the second column the first. |                                            |
| __Release actions__   | None.                                                                                                                                                                                      |                                            |

<br/>

| ID                    | MTA-2042                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | Improved navigation from and to Datavariation pages, where any navigated or added item(s) are Highlighted, with a blue border around it. It is now possible to navigate from a Test Suite, Test Case, or Teststep, to the corresponding variation column(s), or back, and to navigate from an attribute, microflow parameter or assert, to the corresponding variation column.  Also it is now possible, to navigate from a Test Suite Run, Test Case Run or Teststep Run to the corresponding variation column, and to navigate from an attribute, microflow parameter or assert in the Test Run, to the corresponding cell. |                                            |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                            |

<br/>

| ID                    | MTA-2050                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | The Datavariation pages UI are completely restyled. Both pages are now popup pages, where the amount of viewable columns on the page can be configured. The Title of the Datavariation colum is now displayed. Icons are now only shown for Asserts no longer for Values. Datavariation item rows within the same Test Case or Teststep can be shifted up and down (having no effect on resulting Test Run). Additionally, the Title of Datavariation colums are now shown as the Title of the executed Test Suite or Test Case, in the Test Run Result pages. |                                            |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                            |

<br/>

| ID                    | (none)                                                                                                                                                         | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | Executing a Test Case or Test Suite from a Test Suite / Case Run result page, will only run the respective Datavariation Column, if Datavariation was applied. |                                            |
| __Release actions__   | None.                                                                                                                                                          |                                            |

<br/>

| ID                    | MTA-2000                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to automatically adapt a Test Configuration to the most recently downloaded Application Revision using a Branch Subsciption. |
| __Release actions__   | None.                                                                                                                                           |

<br/>

| ID                    | MTA-2040                                                                                                                                                                                                                                                                                                             | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | It is now possible to set a time-to-live [in days] on any Test Run that was executed through the MTA Public API. The default is 2 days, the minimum is 1 day, and the maximum is 7 days. This allows, for example, to view the Test Results of scheduled Tests after the weekend, if they were executed on a Friday. |                                            |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                |                                            |

<br/>

| ID                    | MTA-2009                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When executing a Test Case or Test Suite, MTA navigates to the result page automatically (because there is only one result page). |
| __Release actions__   | None.                                                                                                                             |

<br/>

| ID                    | MTA-2054                                                                                                                                                                     | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | Customers using SAML SSO can now choose to use IdP assertion attributes to assign User Roles to created Accounts, or to login as MTA Manager and assign User Roles manually. |                                            |
| __Release actions__   | None.                                                                                                                                                                        |                                            |

<br/>

| ID                    | (none)                                                                                                                                                                                                                                                            | <i class="fa-regular fa-lightbulb-on"></i> |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __New functionality__ | The "Mendix Model" page in a Test Configuration now contains the option to export the list of microflows with the flag "Is used in Teststep". The resulting CSV file can be used for reporting which microflows are used in Teststeps of that Test Configuration. |                                            |
| __Release actions__   | None.                                                                                                                                                                                                                                                             |                                            |

<br/>

| ID                    | (none)                                                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Improved scaling of the MTA pages that are shown in the [Menditect Call Hierarchy extension](../additional/howtos/connect-mta/use-microflow-call-hierarchy-extension). |  |
| __Release actions__   | None (you do not need to update the Extension).                                                                                                                        |

<br/>


## Bug fixes


| ID                  | MTA-2032                                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | It was not possible to copy a Test Case from another Test Suite if the Test Case in that Test Suite had Test Case level Datavariation enabled. |
| __Solution__        | It is now possible to copy a Test Case from another Test Suite if this Test Case has Test Case level Datavariation enabled.                    |
| __Release actions__ | None.                                                                                                                                          |

<br/>

| ID                  | MTA-2025                                                   |
| ------------------- | ---------------------------------------------------------- |
| __Problem__         | Inefficient usage of the Java Virtual Memory (heap space). |
| __Solution__        | Improved usage of the Java Virtual Memory.                 |
| __Release actions__ | None.                                                      |

<br/>

| ID                  | MTA-1960                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Known issue "Incorrect sequence number in data variation", when deleting Test Cases having Datavariation.               |
| __Solution__        | Solved this known issue; the sequence number for Test Cases and Teststeps in the Datavariation are now shown correctly. |
| __Release actions__ | None.                                                                                                                   |

<br/>

| ID                  | MTA-2048                                                                                                       | <i class="fa-regular fa-lightbulb-on"></i> |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| __Problem__         | Deleting large Applications from MTA could take very long if there are still downloaded Application Revisions. |                                            |
| __Solution__        | Application Revisions are now deleted in batches to improve the Delete Application process.                    |                                            |
| __Release actions__ | None.                                                                                                          |                                            |

<br/>

| ID                  | MTA-1993                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Moving Test Case Datavariation to Test Suite Datavariation resulted in double confirmation dialogs and resulting error messages. |
| __Solution__        | Moving Test Case Datavariation to Test Suite Datavariation only needs to be confirmed once.                                      |
| __Release actions__ | None.                                                                                                                            |

<br/>

| ID                  | MTA-2027                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Git merge commits in the Select Application Revision pages were shown in the wrong order (in respect to other commits) |
| __Solution__        | Fixed the order of Git commits in the Select Application Revision pages.                                               |
| __Release actions__ | None.                                                                                                                  |

<br/>

| ID                  | MTA-1949                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Count validation feedback message Asserts in Test Suite Datavariation were not included when Duplicating a Test Case. |
| __Solution__        | Count validation feedback message Asserts in Test Suite Datavariation are now included when Duplicating a Test Case.  |
| __Release actions__ | None.                                                                                                                 |

<br/>

| ID                  | MTA-2035                                                                    |
| ------------------- | --------------------------------------------------------------------------- |
| __Problem__         | The Test Step Delay property was not included when Duplicating a Test Case. |
| __Solution__        | The Test Step Delay property is now included when Duplicating a Test Case.  |
| __Release actions__ | None.                                                                       |

<br/>

| ID                  | MTA-2085                                                                                                                                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Adding a newly created Assert to Test Suite datavariation from the Edit Assert page, shows an error message "DataVariationType has an issue: Test suite variation item can only exist for test case, if test case is flagged for test suite datavariation". |
| __Solution__        | Adding a newly created Assert to Test Suite datavariation from the Edit Assert page, no longer leads to an error message.                                                                                                                                   |
| __Release actions__ | None.                                                                                                                                                                                                                                                       |

<br/>

| ID                  | MTA-2086                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Deleting an Application is not possible if there are still calculated coverage runs on the Application level. |
| __Solution__        | Calculated coverage runs on the Application level are automatically deleted if the Application is deleted.    |
| __Release actions__ | None.                                                                                                         |

<br/>

