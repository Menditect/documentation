# Release 2.4.0

:::caution
These release notes are from a version that is no longer being actively maintained. 
:::

#### Release date

4 October 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.9.
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). **Mendix 10 support is monthly release based.**
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

 - Implemented CI/CD Version 2!
 - Restore a Test Configuration to a previous revision!

## New functionality 

| ID                    | MTA-1034                                                      |
| --------------------- | ------------------------------------------------------------- |
| __New functionality__ | Implemented CI/CD Version 2. See reference guide for details. |
| __Release actions__   | None.                                                         |

<br/>

 
| ID                    | MTA-1537                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Recover a Test Configuration to the previously used revision. This allows to undo the Adapt of Test Suites to the revision. |
| __Release actions__   | None.                                                                                                                       |

<br/>

 
| ID                    | MTA-1484                                                           |
| --------------------- | ------------------------------------------------------------------ |
| __New functionality__ | Show the delay on a Test Case or Teststep in the Test Run results. |
| __Release actions__   | None.                                                              |

<br/>

 
| ID                    | MTA-1561                                                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Changed asynchronous microflow execution management to use separate threadpools per microflow, instead of one threadpool for the whole application. Therefore the "NumberOfThreadsParallel" MTA constant is no longer used. |
| __Release actions__   | None.                                                                                                                                                                                                                       |

<br/>
 

| ID                    | MTA-1482                                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Implemented a more user-friendly message when constants in the MTA Plugin module are not correctly initialized. |
| __Release actions__   | None.                                                                                                           |

<br/>
 

| ID                    | N/A                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | Included Google Exo Font package and Font Awesome package in the MTA delivery package to prevent MTA from becoming unusable when Google.com or Fontawesome.com are down. |
| __Release actions__   | None.                                                                                                                                                                    |

<br/>


## Bug fixes

| ID                  | MTA-1515                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | MTA switches microflows when adapting to a revision containing 2 microflows with the same name (in different modules). |
| __Solution__        | MTA uses the fully qualified name of the microflow in a revision so using the same name twice is no longer a problem.  |
| __Release actions__ | None.                                                                                                                  |

<br/>

| ID                  | MTA-1498                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| __Problem__         | Retrieve teststep by association with "Equals" filter on decimal attribute does not return any objects. |
| __Solution__        | Retrieve teststep by association with "Equals" filter returns the correct objects.                      |
| __Release actions__ | None.                                                                                                   |

<br/>

| ID                  | MTA-1553                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| __Problem__         | Excluding an attribute after it was first included in datavariation leads to an error on Save.           |
| __Solution__        | Excluding an attribute after it was first included in datavariation no longer leads to an error on Save. |
| __Release actions__ | None.                                                                                                    |

<br/>

| ID                  | MTA-1474                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Due to a breaking change in Mendix 9.24.4, the Recorder function was broken in Runtime versions 9.24.4 and higher.  |
| __Solution__        | After a fix implemented by Mendix in 9.24.8, the Recorder function is working again in LTS Mendix 9 minor versions. |
| __Release actions__ | None.                                                                                                               |

<br/> 