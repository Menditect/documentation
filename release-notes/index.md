# Release 2.10

#### Release date

7 April 2025

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 

## Highlights in this release

<i class="fas fa-fire"></i>  <b>Datavariation pages and functions greatly improved!</b> <br/>  
- Cleaner UI, more flexible information density
- Added navigability between Datavariation Run and Design
- Added Title on variation column 

## New functionality 

| ID                    | (Multiple)                                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to navigate from a Test Suite Run, Test Case Run or Teststep Run to the corresponding variation column, and to navigate from an attribute, microflow parameter or assert in the Test Run, to the corresponding variation item row. |
| __Release actions__   | None.                                                                                                                                                                                                                                                 |

<br/>

| ID                    | MTA-2000                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to automatically adapt a Test Configuration to the most recently downloaded Application Revision using a Branch Subsciption. |
| __Release actions__   | None.                                                                                                                                           |

<br/>



## Bug fixes

| ID                  | MTA-2025                                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | With the Branch Subscriptions Scheduled Event enabled, MTA would restart after some time, due to the Java Runtime being out-of-memory. |
| __Solution__        | Fixed a memory leak in the Branch Subscriptions feature.                                                                               |
| __Release actions__ | None.                                                                                                                                  |

<br/>


| ID                  | MTA-2048                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Deleting an entire Application from MTA could take very long if there are still downloaded Application Revisions. |
| __Solution__        | Application Revisions are now deleted in batches to improve the Delete Application process.                       |
| __Release actions__ | None.                                                                                                             |

<br/>

| ID                  | MTA-1993                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Moving Test Case Datavariation to Test Suite Datavariation resulted in double confirmation dialogs and resulting error messages. |
| __Solution__        | Moving Test Case Datavariation to Test Suite Datavariation only needs to be confirmed once.                                      |
| __Release actions__ | None.                                                                                                                            |

<br/>

| ID                  | MTA-1993                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Git merge commits in the Select Application Revision pages were shown in the wrong order (in respect to other commits) |
| __Solution__        | Fixed the order of Git commits in the Select Application Revision pages.                                               |
| __Release actions__ | None.                                                                                                                  |

<br/>

| ID                  | MTA-1993                                                                                                              |
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



