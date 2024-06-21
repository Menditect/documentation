# Release 2.5.0

:::caution
These release notes are from a version that is no longer being actively maintained. 
:::

#### Release date

30 November 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.12.
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). **Mendix 10 support is monthly release based.**
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.


**See what's new!**
<iframe src="https://player.vimeo.com/video/889179420?h=4fdd5af8a4" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>

## Highlights in this release

- New Test Configuration menu structure!
- Generate Test Cases from scratch by using the Mendix Model menu!
- Option to use SAML SSO instead of local accounts.
- Function to run a single Test Suite.
- Option to stop a test run when an assert fails.

## New functionality 



| ID                    | MTA-1600                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The menu structure and navigation to configure a Test Configuration has been changed. Clicking a Test Suite in the list will now open it. Buttons to navigate from the Test Run to test design have changed. Apart from the Test Suite page containing all the Test Cases, there is now also a Test Case page, alowing more focus while working on Unit Tests. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                          |

<br/>


| ID                    | MTA-1493                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to execute only a single Test Suite. This change was also reflected in the CI/CD API. |
| __Release actions__   | None.                                                                                                    |

<br/>


| ID                    | MTA-0634                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA now supports the option to use SAML to authenticate, as an alternative to using local accounts. |
| __Release actions__   | *Contact support to have this implemented in an MTA environment.*                                   |

<br/>


| ID                    | MTA-1307                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to specify on an assert, that a test run should stop, whenever the assert fails. |
| __Release actions__   | None.                                                                                               |

<br/>


| ID                    | MTA-1451                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA has a new feature that allows to view which microflows are covered by a Test Case, and optionally create a microflow test from there. |
| __Release actions__   | None.                                                                                                                                     |

<br/>


| ID                    | MTA-1611                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Whenever executing a single Test Case, other Test Cases that it depends on, are also executed in sequence. |
| __Release actions__   | None.                                                                                                      |

<br/>


| ID                    | MTA-1568                                                                |
| --------------------- | ----------------------------------------------------------------------- |
| __New functionality__ | Test Instructions and Manual Test Cases are no longer supported in MTA. |
| __Release actions__   | None.                                                                   |

<br/>


| ID                    | MTA-1593                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The TestAutomator role no longer exists in MTA and has been replaced by the Tester role. The Tester role now has the same rights as the TestAutomator role in the previous versions of MTA. |
| __Release actions__   | None.                                                                                                                                                                                       |

<br/>


| ID                    | MTA-1584                                                                      |
| --------------------- | ----------------------------------------------------------------------------- |
| __New functionality__ | Keys that need to be used in the CI/CD API are now shown whenever applicable. |
| __Release actions__   | None.                                                                         |

<br/>


| ID                    | N/A                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | We have automated the execution of the migration scripts when upgrading an MTA version. This is especially useful for our on-premises customers. |
| __Release actions__   | None.                                                                                                                                            |

<br/>


## Bug fixes


| ID                  | MTA-1582                                           |
| ------------------- | -------------------------------------------------- |
| __Problem__         | The MTA Dashboard showed incorrect information.    |
| __Solution__        | The MTA Dashboard shows correct information again. |
| __Release actions__ | None.                                              |

<br/>

| ID                  | MTA-1103                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| __Problem__         | Whenever the recorder in MTA is no longer responding, it was not possible to stop the recording. |
| __Solution__        | A recording can now be stopped, also if it is no longer responding.                              |
| __Release actions__ | None.                                                                                            |

<br/>
