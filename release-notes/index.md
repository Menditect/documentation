# Release 2.7.0

#### Release date

19 June 2024

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


**Watch the video on coverage!**
<iframe src="https://player.vimeo.com/video/956958620?h=47a5aa5f4c" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>


## Highlights in this release

- COVERAGE


## New functionality 


| ID                    | MTA-1401  |
| --------------------- | --------- |
| __New functionality__ | Coverage. |
| __Release actions__   | None.     |

<br/>


| ID                    | MTA-1752                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | When executing any test, a choice must now be made to run the test with "Full output" or not. Running without full output will be faster than before, but when viewing the results of the Test Run, teststep values are only shown if they are used by other teststeps. Running with full output will be slower but will include all data values when viewing the results of the Test Run. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                      |

<br/>


| ID                    | MTA-1333       |
| --------------------- | -------------- |
| __New functionality__ | Teststep delay |
| __Release actions__   | None.          |

<br/>


| ID                    | MTA-1662                                                                            |
| --------------------- | ----------------------------------------------------------------------------------- |
| __New functionality__ | Removed the CI/CD v2 API endpoints as they were deprecated in the previous version. |
| __Release actions__   | None.                                                                               |

<br/>


| ID                    | N/A                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | Added instructional demo video's to MTA. Just click on the <i class="fal fa-clapperboard-play"></i>  button in the top-right in MTA. |
| __Release actions__   | None.                                                                                                                                |

<br/>



## Bug fixes


| ID                  | MTA-1727                                                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | Specifying a single quote (') as value of a String attribute in a retrieve teststep would lead to incorrect escaping when executing the test. This is because single quotes are escaped differently in XPATH parameters. |
| __Solution__        | Single quotes are now escaped correctly, resulting in correct XPATH parameters.                                                                                                                                          |
| __Release actions__ | None.                                                                                                                                                                                                                    |

<br/>



| ID                  | MTA-1835                                                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Microflow teststeps with the same output data type as needed for an input parameter are not visible (and cannot be used as input) if those microflow teststeps have input parameters where datavariation is applied. |
| __Solution__        | Microflow teststeps with the same output data type as needed for an input parameter are visible so they can be used as input.                                                                                        |
| __Release actions__ | None.                                                                                                                                                                                                                |

<br/>


