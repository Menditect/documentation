# Release 2.7.0

#### Release date

XXXXXXXXXXXXX

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 


**Watch the video on Code Coverage!**
<iframe src="https://player.vimeo.com/video/956958620?h=47a5aa5f4c" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>


## Highlights in this release

<i class="fas fa-fire"></i>  Introducing <b>Code Coverage</b>. Know which microflows are covered by your tests! Define specific coverage goals and measure coverage trends.
<br/>
<i class="fas fa-fire"></i>  Improved <b>analysis of Test Runs</b> by providing links to Teststeps that use a specific output.
<br/>
<i class="fas fa-fire"></i>  Added instructional <b>Demo Video's</b> to MTA.
<br/>
<i class="fas fa-fire"></i>  Added the option to execute with a <b>Teststep delay</b>, which allows more fine-grained waiting than Test Case delay.
<br/>
<i class="fas fa-fire"></i>  Optimized <b>Test Run performance</b> by providing the choice for normal (faster) and full output.


## New functionality 


| ID                    | MTA-1401                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Added the option to measure the Code Coverage of microflows that were executed in Test Runs. Look for the <i class="fal fa-umbrella"></i> icon! <br/><br/>This will be measured after a test was executed, on both Test Configuration and Application level. <br/>A 100 % coverage means all microflows were executed. Set Coverage Goals with Exclude Filters to exclude microflows. Use the Coverage Goals navigation item on your Application or Test Configuration to get started. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
<br/>


| ID                    | MTA-1333                                                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Added the Delay option on a teststep, to specify how long MTA should wait before executing the next teststep. If a delay other than 0 was specified, the delay is shown in the teststep. Look for the <i class="fal fa-hourglass-start"></i> icon! |
| __Release actions__   | None.                                                                                                                                                                                                                                              |

<br/>


| ID                    | MTA-1752                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When executing any test, a choice must now be made to run the test with "Full output" or not. Look for the <i class="fal fa-memo-circle-info"></i> icon!<br/><br/> Running without full output, which is now the new default setting, will be faster than before, but when viewing the results of the Test Run, teststep values are only shown if they are used by other teststeps. Running with full output will include all data values when viewing the results of the Test Run. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

<br/>


| ID                    | N/A                                                                                                                                                                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When executing any test, it is now possible to navigate through the output values of teststeps to determine in which other teststeps that output is used. Because there was already an option to see which teststep is providing input, these values are now fully navigable, back and forth. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                         |

<br/>


| ID                    | N/A                                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Added instructional demo video's to MTA. <br/><br/>Just click on the <i class="fal fa-clapperboard-play"></i> button in the top-right in MTA. |
| __Release actions__   | None.                                                                                                                                         |

<br/>



## Bug fixes


| ID                  | MTA-1727                                                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | Specifying a single quote (') as value of a String attribute in a retrieve teststep would lead to incorrect escaping when executing the test. This is because single quotes are escaped differently in XPATH parameters. |
| __Solution__        | Single quotes are now escaped correctly, resulting in correct XPATH parameters.                                                                                                                                          |
| __Release actions__ | None.                                                                                                                                                                                                                    |

<br/>



| ID                  | MTA-1822                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| __Problem__         | Unlimited String values could not be copied from attributes in the results of a Test Run.           |
| __Solution__        | Unlimited String values can now be copied with a Copy button from attributes results of a Test Run. |
| __Release actions__ | None.                                                                                               |

<br/>



| ID                  | MTA-1835                                                                                                                                                                                                             |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Microflow teststeps with the same output data type as needed for an input parameter are not visible (and cannot be used as input) if those microflow teststeps have input parameters where datavariation is applied. |
| __Solution__        | Microflow teststeps with the same output data type as needed for an input parameter are visible so they can be used as input.                                                                                        |
| __Release actions__ | None.                                                                                                                                                                                                                |

<br/>


