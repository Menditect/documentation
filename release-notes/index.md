# Release 2.8.0

#### Release date

23 August 2024

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


## Highlights in this release

<i class="fas fa-fire"></i>  <b>Export and Import Test Configuration to file</b> <br/>This allows for exporting your test scripts and enables MTA cross-instance migration. <i>Some useful examples:</i>
<iframe src="https://player.vimeo.com/video/1002007845" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>
<i class="fas fa-fire"></i>  <b>Copy a Test Suite from a Test Configuration using other Application</b> <br/>This allows for reusing test scripts across different Mendix Applications and supports splitting up Applications into microservices.
<br/><br/>
<i class="fas fa-fire"></i>  Bug fixes for stability and security.



## New functionality 


| ID                    | MTA-1828                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to export (backup) a Test Configuration to a text file, and import a Test Configuration from a text file. |
| __Release actions__   | None.                                                                                                                        |
<br/>


| ID                    | MTA-1829                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to import a Test Suite from a source Test Configuration, even if that Test Suite uses an Application, that is not used in the target Test Configuration. MTA will detect elements such as Microflows and Entities, by matching them by fully qualified Mendix name. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                  |
<br/>


| ID                    | MTA-1910                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The page where Test Suites and Test Cases can be copied has changed. Test Suites and Test Cases can now be "duplicated" in the same Test Configuration and Test Suite (respectively). When copying from another Test Configuration or Test Suite, the copy button is now available as "Copy from", in the Test Configuration or Test Suite that you want to copy into. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                  |
<br/>


| ID                    | MTA-1662                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| __New functionality__ | The MTA CiCd API v2 that was deprecated since MTA 2.6 has been permanently deleted.              |
| __Release actions__   | The MTA CiCd API v2 was replaced by the [MTA Public API](../api) (click to see reference guide). |
<br/>


| ID                    | MTA-86                                                                        |
| --------------------- | ----------------------------------------------------------------------------- |
| __New functionality__ | On the Test Configurations page, it is now possible to filter on Application. |
| __Release actions__   | None.                                                                         |
<br/>


## Bug fixes


| ID                  | MTA-1914                                                                                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When selecting "empty list" as value for a Microflow List parameter, the value would be empty (or null), instead of instantiating a List with 0 objects. This resulted in errors when mutating the list. |
| __Solution__        | When selecting "empty list" as value for a Microflow List parameter, an actual empty List is instantiated and passed as the parameter value.                                                             |
| __Release actions__ | **Open your App in Studio Pro, visit the Mendix Marketplace and update the MTA Plugin to the newest version.**                                                                                           |

<br/>


| ID                  | MTA-1886                                                                                                                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When connecting an Application Instance to MTA with the correct MTA Connection User credentials but a non-existing Token, the connection will show as Connected in the Appliation Instance, but as disconnected in MTA. |
| __Solution__        | When connecting to MTA using a non-existing Token, the connection will show an error message and display as disconnected in the Application Instance.                                                                   |
| __Release actions__ | None.                                                                                                                                                                                                                   |

<br/>


| ID                  | MTA-1930                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | When viewing the results of a Test Case Run, the Apply Security setting on the respective Test Case was not shown. |
| __Solution__        | The Apply Security setting on a Test Case is now shown, both in design view and in the Test Case Run results.      |
| __Release actions__ | None.                                                                                                              |

<br/>


| ID                  | MTA-1928                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When downloading a revision through the MTA Public API, a change in Repository type from SVN to Git, is not detected. |
| __Solution__        | Either when downloading a revision in MTA or through the MTA Public API, changes in Repository type are now detected. |
| __Release actions__ | None.                                                                                                                 |

<br/>


| ID                  | MTA-1924                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Adding a Microflow Parameter value to Test Suite data variation resulted in an error.                         |
| __Solution__        | It is again possible to add a Microflow Parameter value to Test Suite data variation without seeing an error. |
| __Release actions__ | None.                                                                                                         |

<br/>


| ID                  | MTA-1923                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| __Problem__         | A data variation row is added when a value was added, then deleted, and then added again.            |
| __Solution__        | The number of data variation rows when adding, deleting and again adding a value, remains unchanged. |
| __Release actions__ | None.                                                                                                |

<br/>


| ID                  | MTA-1901                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When cancelling the creation of a new Application Instance inside the Test Configuration wizard, an error would occur. |
| __Solution__        | The creation of a new Application Instance can again be cancelled when inside the Test Configuration wizard.           |
| __Release actions__ | None.                                                                                                                  |

<br/>


| ID                  | MTA-1940                                                                          |
| ------------------- | --------------------------------------------------------------------------------- |
| __Problem__         | Cannot delete a Test Run if there is Application level Coverage associated to it. |
| __Solution__        | A Test Run can be deleted also if Application level Coverage is associated to it. |
| __Release actions__ | None.                                                                             |

<br/>


| ID                  | MTA-1941                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | If a Test Run is still running while MTA is stopped, it appears to still be running after MTA is restarted.              |
| __Solution__        | If a Test Run is still running while MTA is stopped, it will show as stopped with status Failed, after MTA is restarted. |
| __Release actions__ | None.                                                                                                                    |

<br/>