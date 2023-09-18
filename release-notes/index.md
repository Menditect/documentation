# Release 2.4.0

#### Release date

?? October 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.4.
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). **Mendix 10 support is monthly release based.**
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

 - Extended capabilities based on user feedback! 
 - No more need to use microflows for complex retrieve actions, we've added advanced retrieve filters! 
 - Use output values as a variable to fill an attribute's value!

## New functionality 

| ID                    | MTA-???                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to use the attribute value from the object output of a previous teststep. This was already possible for values that are the output of microflow teststeps. The attribute value from the object can be used to fill values in Create, Change and Retrieve teststeps, and on Microflow parameters. |
| __Release actions__   | None.                                                                                                                                                                                                                      

## Bug fixes


| ID                  | MTA-???                                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Adapting a Test Suite fails if a teststep contains a microflow parameter that has been changed from a String to Datetime in the next revision.           |
| __Solution__        | Adapting a Test Suite no longer fails if a teststep contains a microflow parameter that has been changed from a String to Datetime in the next revision. |
| __Release actions__ | None.                                                                                                                                                    |

<br/>

 