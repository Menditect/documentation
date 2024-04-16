# Release 2.6.0

#### Release date

17 April 2024

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


**See what's new!**
<iframe src="https://player.vimeo.com/video/932536786?h=1540a8b7ed" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>


## Highlights in this release

- [Menditect Call Hierarchy <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/225211) Extension for Mendix Studio Pro 10 released!
- Huge **performance improvement** in test runs.
- Added much requested option to **Duplicate a teststep**.
- Loads of refactoring done.

## New functionality 


| ID                    | MTA-1595                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | For the process of adding a new Application to MTA, the Mendix user is now authorized using a Personal Access Token (PAT). We have removed the API Key from the Mendix User in MTA. All communication with Mendix is now secured via PAT's. |
| __Release actions__   | **Create a new PAT and select these scopes: <br/>- `mx:deployment:read` <br/>- `mx:modelrepository:repo:read`. <br/>Enter this PAT into MTA. <br/>Delete the old one.**                                                                     |

<br/>


| ID                    | MTA-1569                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | We have released the Menditect Call Hierarchy Extension. With this extension, the entire call hierarchy of a single Microflow can be viewed in Mendix Studio Pro. The extension also allows for test generation from Studio Pro, whereby a Test Case is created to execute a microflow, and setting all necessary parameters. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                         |

<br/>


| ID                    | MTA-1789                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| __New functionality__ | Improved the performance of test runs, resulting in test execution that is up to 4 times faster. |
| __Release actions__   | None.                                                                                            |

<br/>


| ID                    | MTA-96                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to duplicate a "Create" teststep, allowing the creation of multiple objects of the same entity in the same Test Case, without having to use Data Variation and persist each object one-by-one. |
| __Release actions__   | None.                                                                                                                                                                                                             |

<br/>


| ID                    | MTA-1641                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Replaced the CI/CD v2 `/rest/cicd/v2` endpoints by the new Public API `/rest/mta/api` endpoints. <br/><br/>Changes are:<br/>- a new base URL for this Public API<br/>- added GET testsuites and GET testcases endpoints <br/>- added GET testsuiteruns and GET testcaseruns endpoint<br/>- added GET applications endpoint<br/>- added GET testconfiguration adapt status endpoint<br/>- added GET testrun archive endpoint |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                       |

<br/>



| ID                    | MTA-1733                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to customize the time slot where MTA runs scheduled events to cleanup data and verify internal data consistency.                                                                                                                                                                                                |
| __Release actions__   | The default time slot to run internal scheduled events is between midnight (00:00) UTC and 04:00 AM. This can be adjusted to accomodate with another timezone, by changing the "ScheduledEventsOffsetUTC" constant. The format is an integer, where 0 is the default value, 12 is the maximum value, and -12 is the minimum value. |

<br/>


| ID                    | MTA-1720                                                                                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Removed the MtaDocVersion constant that was used to link to the correct MTA version in the documentation site. The correct MTA version is now derived from the release version that is also shown on the top-right in MTA. |
| __Release actions__   | None: the constant will be automatically removed upon deployment.                                                                                                                                                          |

<br/>


| ID                    | MTA-1651                                                                              |
| --------------------- | ------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to copy values from a String Unlimited attribute to the clipboard. |
| __Release actions__   | None.                                                                                 |

<br/>


| ID                    | MTA-1620                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Changed the page element that shows if a Test Configuration is adapting from a button to a text element with a spinner icon. |
| __Release actions__   | None.                                                                                                                        |

<br/>


| ID                    | MTA-1480                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | The first teststep in the Test Case no longer has an option to Move it Up. The last teststep in the Test Case no longer has an option to Move it Down. |
| __Release actions__   | None.                                                                                                                                                  |

<br/>


| ID                    | MTA-1421                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When creating a Delete Teststep, the popup is automatically shown where the source teststep must be selected. |
| __Release actions__   | None.                                                                                                         |

<br/>


| ID                    | MTA-1213                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Removed the MTA Manager "Mendix users" page. Only the logged in user can enter their Mendix user credentials. |
| __Release actions__   | None.                                                                                                         |

<br/>


## Bug fixes


| ID                  | MTA-819                                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | An attribute that is not either assigned a value, or used in an assert, led to construction errors, whenever a Test Configuration was adapted to a revision, where that attribute was deleted.           |
| __Solution__        | An attribute that is not either assigned a value, or used in an assert, no longer leads to construction errors, whenever a Test Configuration is adapted to a revision, where that attribute is deleted. |
| __Release actions__ | None.                                                                                                                                                                                                    |

<br/>


| ID                  | MTA-1509                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | An error occured leading to a broken session whenever two users simultaneously used the Add Test Configuration wizard. |
| __Solution__        | Using the the Add Test Configuration wizard no longer leads to errors when two users are using it simultaneously.      |
| __Release actions__ | None.                                                                                                                  |

<br/>


| ID                  | MTA-1509                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | An error occured when clicking Cancel after selecting an Application Revision in the Add Test Configuration wizard. |
| __Solution__        | Clicking Cancel after selecting an Application Revision in the Add Test Configuration wizard, closes the wizard.    |
| __Release actions__ | None.                                                                                                               |

<br/>


| ID                  | MTA-1719                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Values in the data variation pages were not refreshed after dismissing a construction error shown in the page. |
| __Solution__        | Values in the data variation pages are now refreshed automatically.                                            |
| __Release actions__ | None.                                                                                                          |

<br/>


| ID                  | MTA-1707                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | Copying a Test Suite from a Test Configuration that is linked to more than 1 Mendix App led to an error.           |
| __Solution__        | Copying a Test Suite from a Test Configuration that is linked to more than 1 Mendix App no longer leads to errors. |
| __Release actions__ | None.                                                                                                              |

<br/>


| ID                  | MTA-1678                                                                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When executing a single Test Case, the Test Case Run delay was applied to all Test Cases (both the Test Case that was triggered and any Test Cases that it depends on). |
| __Solution__        | When executing a single Test Case, the Test Case Run delay is now only applied to the second executed Test Case and beyond.                                             |
| __Release actions__ | None.                                                                                                                                                                   |

<br/>


| ID                  | MTA-1674                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Moving an empty data variation set from Test Suite to Test Case level or vice versa, led to an error.             |
| __Solution__        | Moving an empty data variation set from Test Suite to Test Case level or vice versa, no longer leads to an error. |
| __Release actions__ | None.                                                                                                             |

<br/>


| ID                  | MTA-1644                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Using a non-valid Application Instance Key in any of the Execute Test API's led to a test run that was frozen in MTA. |
| __Solution__        | Using a non-valid Application Instance Key in any of the Execute Test API's will not trigger a test run.              |
| __Release actions__ | None.                                                                                                                 |

<br/>


| ID                  | MTA-1228                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | It was possible to create a Retrieve teststep that Retrieves by association, and setting an association to Empty.           |
| __Solution__        | It is no longer possible to create a Retrieve teststep that Retrieves by association, and setting any association to Empty. |
| __Release actions__ | None.                                                                                                                       |

<br/>
