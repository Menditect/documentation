# Release 2.3.0

#### Release date

8 August 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.24.
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). **Mendix 10 support is monthly release based.**
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

 - Extended capibilities based on user feedback! 
 - No more need to use microflows for complex retrieve actions, we've added advanced retrieve filters! 
 - Use output values as a variable to fill an attribute's value!

## New functionality 

| ID                    | MTA-711                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to use the attribute value from the object output of a previous teststep. This was already possible for values that are the output of microflow teststeps. The attribute value from the object can be used to fill values in Create, Change and Retrieve teststeps, and on Microflow parameters. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                               |

<br/>


| ID                    | MTA-1311                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | It is now possible to use extended filter operators on Retrieve teststeps, including "Contains" on String attributes, "Greater/Smaller than" on Numeric attributes and "Range" on Numeric and Datetime attributes. |
| __Release actions__   | None.                                                                                                                                                                                                              |

<br/>


| ID                    | MTA-1214                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When a revision has been selected in the New Test Configuration Wizard, the "Select revision" button changes to "Change revision". |
| __Release actions__   | None.                                                                                                                              |

<br/>


| ID                    | MTA-1215                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When an application instance has been selected in the New Test Configuration Wizard, the "Select instance" button changes to "Change instance". |
| __Release actions__   | None.                                                                                                                                           |

<br/>


| ID                    | MTA-1224                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | Removed the Connect button from the Application Instances page, because it was confusing for the user as connections are made from the Test App to MTA and not the other way around. |
| __Release actions__   | None.                                                                                                                                                                                |

<br/>


| ID                    | MTA-1418                                                                      |
| --------------------- | ----------------------------------------------------------------------------- |
| __New functionality__ | Applications migrating from SVN to Git are now also showing correctly in MTA. |
| __Release actions__   | None.                                                                         |

<br/>


| ID                    | MTA-1437                                                                                                                                                                                                                                                        |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | While making changes in the Configure Teststep pages, entered values for attributes are preserved also if the attribute is unselected. This makes it easier to undo a change on the page. Only when saving, the values for unselected attributes are discarded. |
| __Release actions__   | None.                                                                                                                                                                                                                                                           |

<br/>


| ID                    | MTA-1463                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The Sequence Number is no longer displayed on the Edit page where Teststeps can be dragged and dropped, because it is calculated after the sequences is saved. |
| __Release actions__   | None.                                                                                                                                                          |

<br/>


| ID                    | MTA-1465                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The nightly cleanup processes that run as Scheduled Events are now executed before the Data validation Scheduled Event is executed, to prevent unnessesary data being checked. This will improve performance of MTA environments that are heavily used, and minimize JVM memory usage. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                  |

<br/>


| ID                    | MTA-1419                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When choosing to fill values from Database on a Retrieve teststep, only values are filled that are included to be used as a filter. |
| __Release actions__   | None.                                                                                                                               |

<br/>



| ID                  | MTA-1423                                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Adapting a Test Suite fails if a teststep contains a microflow parameter that has been changed from a String to Datetime in the next revision.           |
| __Solution__        | Adapting a Test Suite no longer fails if a teststep contains a microflow parameter that has been changed from a String to Datetime in the next revision. |
| __Release actions__ | None.                                                                                                                                                    |

<br/>

 