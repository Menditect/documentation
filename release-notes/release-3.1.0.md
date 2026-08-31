# Release 3.1

#### Release date

15 June 2026

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 

:::tip Release Highlights
<br/>

**Improved performance of adapt process**
- Speed of adapt process is improved with 2-30x (depending on datamodel).

**Additional execution options added to improve run speed!**
- Option added to only execute Test Suites and Test Cases that have **changed**.
- Option added to re-run only **failed** Test Cases of a Test Run.

**Execution conditions added!**
- Conditions can be to `Skip` or `Always Run`, and are applied to Teststeps, Test Cases or Test Suites.
- Use `Skip` for example to perform quick debugging.
- Use `Always Run` to perform Test Setup/Teardown in Frontend tests.

**Improved UX**
- Improved test suite overview.
- Easy addition of attributes and assocations to teststeps.
- Create teststep for assocation.
- Create object from application instance, with filter options.
:::

## New functionality

| ID                    | MTA-2279                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Restyled the pages to set Attributes and Associations for Create, Change and Retrieve Teststeps. Attributes and Associations now have to be added before they can be edited, but they can now be edited directly from the Test Suite page. When adding an assocation, a teststep can be directly created to provide the object for assocation. Check the Reference Guide for more information. <br/> <br/>This change was implemented to improve UX and speed up the processes of Adapting a Test Configuration to a revision, preparing a Test Run, and Test design in general. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

<br/>

| ID                    | MTA-2377                                                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Options added to either Skip, or Always-Run, Teststeps, Test Cases or Test Suites. This allows for more options for building setup and teardown test suites and test cases. Check the Reference Guide for more information. |
| __Release actions__   | None.                                                                                                                                                                                                                       |

<br/>

| ID                    | MTA-2396                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | Added options on a Test Configuration, allowing only changed Test Cases / Test Suites or Failed Test Case Runs to be (re-)run. |
| __Release actions__   | None.                                                                                                                          |

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


| ID                    | N/A                                                                                                                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Dependencies between Teststeps are now visible. Teststeps that *Provide* data to other Teststeps contain a `Providing` indicator. Teststeps that *Receive* data to other Teststeps contain a `Receiving` indicator. Using these indicators, it's possible to navigate back and forth between dependent Teststeps. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                             |

<br/>


| ID                    | MTA-2436                                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| __New functionality__ | The name of the App that is linked to the Test Case is now shown when clicking 👁️. |
| __Release actions__   | None.                                                                             |

<br/>


| ID                    | MTA-2448                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | The `Description` field on Teststep and `Objective`, `Preconditions` and `Expected result` fields on Test Case now support Markdown format. When saving the field, the information is shown formatted as Markdown. |
| __Release actions__   | None.                                                                                                                                                                                                              |

<br/>

| ID                    | N/A                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------- |
| __New functionality__ | Default `Apply Security` setting of a new Test Case will be changed from `TRUE` to `FALSE`. |
| __Release actions__   | None.                                                                                       |

<br/>

| ID                    | N/A                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Changed the implementation of URL's that are used when clicking `Share` on an item.                             |
| __Release actions__   | Old URL's that are shared will still work but are deprecated. Preferred method is using the new implementation. |

<br/>

| ID                    | N/A                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Improved flexibility of handling changed Pages and Widgets when importing or adapting a Test Configuration, leading to fewer construction errors. |
| __Release actions__   | None.                                                                                                                                             |

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


| ID                  | MTA-2311                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | The name of the Test Suite was not shown correctly in the dropdown (on top of the Test Suite page) when it is changed. |
| __Solution__        | The name of the Test Suite is now shown correctly.                                                                     |
| __Release actions__ | None.                                                                                                                  |

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
