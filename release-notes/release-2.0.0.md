# Release 2.0.0

:::caution
These release notes are from a version that is no longer being actively maintained. 
:::

#### Release date

19 january 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.18.3. For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla).
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

<ul><i class="fas fa-gift"></i>  Local testing!
<ul>
<li>It is now possible to execute a test on an Application that is running on your local computer. </li>
<li>No need to install third party tooling anymore. </li>
</ul>
</ul>

<ul><i class="fas fa-gift"></i>  Completely redesigned user interface!
<ul>
<li>MTA's user interface is completely renewed. </li>
<li>No need to select your Test Configuration each time after running your tests. </li>
</ul>
</ul>

<ul><i class="fas fa-gift"></i>  Improved CI/CD capabilities!
<ul>
<li>Results are now included in the get results API so you don't have to login to MTA anymore.   </li>
<li>When executing with CI/CD, MTA can push results in real time to a self-hosted API webservice!   </li>
</ul>
</ul>


:::caution
There is a breaking change in this MTA version that requires you to download, import and configure the MTA Plugin Module in every Mendix App that you want to test before you can continue using MTA again.

:::

## New functionality 

| ID                    | MTA-1079                                                              |
| --------------------- | --------------------------------------------------------------------- |
| __New functionality__ | When hovering the mouse over the help icon, the MTA version is shown. |
| __Release actions__   | None.                                                                 |

<br/>

| ID                    | MTA-0744                                                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to execute a test on an Application that is running on your local computer (without having to install third party tooling). |
| __Release actions__   | None.                                                                                                                                          |

<br/>

| ID                    | MTA-0965                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The connection between MTA and the Application under test is now secured with an MTA Connection User that exists in MTA, and no longer with an MTA Plugin User that exists in the Application under test. |
| __Release actions__   | Please read the howto page.                                                                                                                                                                               |

<br/>

| ID                    | MTA-0975                                                                                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The MTA Plugin User and the MTA Plugin Homepage are no longer required to be included in the Application under test. The MTA Plugin Homepage is now included in the Plugin Module as a Snippet and no longer as a Page. |
| __Release actions__   | Please read the howto page.                                                                                                                                                                                             |

<br/>

| ID                    | MTA-1006                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | MTA's user interface is completely renewed, allowing users to focus on either preparing test settings or designing their test by staying in the same Test Configuration. |
| __Release actions__   | None.                                                                                                                                                                    |

<br/>

| ID                    | MTA-0986                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Application Environments are now migrated to Application Instances. Instances are no longer automatically detected from the Mendix Cloud. |
| __Release actions__   | None.                                                                                                                                     |

<br/>

| ID                    | MTA-1056                                                                                                                                                                                                                                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Execution users are no longer registered on an Application Instance (previously: Application Environment) but on the combination Application / Test Configuration. This is because in a future release, Execution users will be generated based on the available User Roles in the revision of the Test Configuration. |
| __Release actions__   | None: Menditect will migrate existing execution users and copy them to every Test Configuration that uses that Application.                                                                                                                                                                                            |

<br/>

| ID                    | MTA-1019                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Test Configurations now use a Test Setting instead of an Application Environment. The Test Setting defines which Application Instance(s) the Test Configuration is executed on. |
| __Release actions__   | None.                                                                                                                                                                           |

<br/>

| ID                    | MTA-0961                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------- |
| __New functionality__ | When creating a Recording it is now possible to select which Application Instance to record. |
| __Release actions__   | None.                                                                                        |

<br/>

| ID                    | MTA-0786                                                                                                         |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | After stopping a Recording, upon creating Teststeps, MTA will only include attributes that are actually changed. |
| __Release actions__   | None.                                                                                                            |

<br/>

| ID                    | MTA-1037                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to stop a running Test Run. Manually stopped Test Runs can be recognized as such in the Test Run overview. |
| __Release actions__   | None.                                                                                                                         |

<br/>

| ID                    | MTA-1066                                                                                                                                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to view results while a Test Run is running; which Test Suites have been executed and which Test Suites are waiting to be executed. You can also view details of the results within the Test Suite. |
| __Release actions__   | None.                                                                                                                                                                                                                  |

<br/>

| ID                    | MTA-1033                                                                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When using "Retrieve output" on a Teststep to create a new Teststep that retrieves from former Teststep, "retrieve all" is now selected instead of "retrieve first". |
| __Release actions__   | None.                                                                                                                                                                |

<br/>

| ID                    | MTA-1111                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When creating a Test Case, both the Application to test and the Execution User are automatically selected if there is only one in the list. |
| __Release actions__   | None.                                                                                                                                       |

<br/>

| ID                    | MTA-0984                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When downloading a revision, elements (microflows, entities, etc.) in a module that is marked as "private" or "hidden" are skipped, to prevent encountering an error. This is because even though Mendix is including this experimental feature in the runtime, downloading these elements is not yet included in the Mendix SDK. Consequentually, it is not possible to test anything on these modules until this problem is fixed by Mendix. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                          |

<br/>

| ID                    | MTA-0939                                                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | CI/CD API: The results of the Test Run (on Test Configuration, Test Suite and Test Case level) are now also included in the "get results" API. |
| __Release actions__   | Please read the documentation page.                                                                                                            |

<br/>

| ID                    | MTA-1029                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | CI/CD API: When executing with CI/CD, MTA will no longer detect if there is a new revision deployed on the Application under test and consequentually no longer download or adapt to a new revision. |
| __Release actions__   | Please read the documentation page.page.                                                                                                                                                             |

<br/>

| ID                    | MTA-1037                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | CI/CD API: When executing with CI/CD, you can no longer specify which Application Instance to run on, because that is determined by the Test Setting for the CI/CD user in MTA. |
| __Release actions__   | Please read the documentation page.page.                                                                                                                                        |

<br/>

| ID                    | MTA-0938                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| __New functionality__ | CI/CD API: When executing with CI/CD, MTA can push results in real time to a self-hosted API webservice. |
| __Release actions__   | Please read the documentation page.                                                                      |

<br/>


## Bug fixes

| ID                  | MTA-1011                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------- |
| __Problem__         | When using drag and drop to move Teststeps, Errors are sometimes not correctly generated. |
| __Solution__        | Errors are now correctly generated when using drag and drop to move Teststeps.            |
| __Release actions__ | None.                                                                                     |

<br/>

| ID                  | MTA-0977                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When generatating Teststeps using Microflow ends in an error, all subsequent user actions lead to more errors. |
| __Solution__        | Errors shown after generatating Teststeps using Microflow no longer lead to more errors.                       |
| __Release actions__ | None.                                                                                                          |

<br/>

| ID                  | MTA-0589                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| __Problem__         | If a microflow is used in a Teststep but deleted in the new revision, MTA does not show the microflow name. |
| __Solution__        | If a microflow is used in a Teststep but deleted in the new revision, MTA also shows the microflow name.    |
| __Release actions__ | None.                                                                                                       |

<br/>

| ID                  | MTA-1039                                                                                                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When creating or editing an Object action Teststep and setting associations with a * - * cardinality, it is not clear to the user that an operation (set/add/remove) must be selected because the page where this happens can be closed without validation feedback. |
| __Solution__        | When creating or editing an Object action Teststep and setting associations with a * - * cardinality, the user will receive validation feedback that an operation (set/add/remove) must be selected.                                                                 |
| __Release actions__ | None.                                                                                                                                                                                                                                                                |

<br/>

| ID                  | MTA-1049                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| __Problem__         | If the last test run of a Test configuration is deleted then it remains visible and selected in the overview. |
| __Solution__        | Deleting the last test run of a Test configuration now works as expected.                                     |
| __Release actions__ | None.                                                                                                         |

<br/>

| ID                  | MTA-1072                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | When generatating Teststeps using Microflow cannot be completed because there are no objects in the database to generate parameters from, the user will not receieve a clear message about this. |
| __Solution__        | When generatating Teststeps using Microflow cannot be completed because there are no objects in the database to generate parameters from, the user will be presented clear message about this.   |
| __Release actions__ | None.                                                                                                                                                                                            |

<br/>

| ID                  | MTA-1073                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When using previous Teststeps to fill associations the same Teststep would be shown also if it is already used. |
| __Solution__        | When using previous Teststeps to fill associations the same Teststep is not shown again if it is already used.  |
| __Release actions__ | None.                                                                                                           |

<br/>

| ID                  | MTA-1080                                                       |
| ------------------- | -------------------------------------------------------------- |
| __Problem__         | On pages where tabs are used scrolling issues sometimes occur. |
| __Solution__        | Scrolling issues are fixed on pages where tabs are used.       |
| __Release actions__ | None.                                                          |

<br/>
