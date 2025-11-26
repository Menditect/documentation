---
sidebar_position: 1
---

# MTA Plugin

## Purpose

In order for MTA to communicate with the [Application Instance](../mta/application-instance) under test, you need to import the MTA Plugin module created by Menditect that will initiate this communication. 

The MTA Plugin triggers the execution of a test and returns the results of the test to MTA.

The Installation Guide covers instructions on how to install and configure the MTA Plugin.

## Supported Versions

### Plugin version vs MTA version

|          | MTA Plugin 4.9.1 | MTA Plugin 4.8.1 | Any older MTA Plugin |
| -------- | ---------------- | ---------------- | -------------------- |
| MTA 3.0  | Supported        | Supported *      | Not supported        |
| MTA 2.10 | Supported        | Supported        | Not supported        |
| MTA 2.9  | Not supported    | Not supported    | Not supported        |

\* In order to make use of all the features of MTA, import the latest plugin.
 

### Plugin version vs Mendix version

Download the MTA Plugin module from the Mendix Marketplace. 

Make sure to check your app's Mendix version before importing the module. 

| Mendix Version                 | Url                                                  |
| ------------------------------ | ---------------------------------------------------- |
| Mendix 11                      | Not supported                                        |
| Mendix 10                      | https://marketplace.mendix.com/link/component/214764 |
| Mendix 9.24.4 and higher       | https://marketplace.mendix.com/link/component/214717 |
| Mendix 9.0.5 - Mendix 9.24.3   | https://marketplace.mendix.com/link/component/206637 |
| Mendix 8.12.7 - Mendix 8.18.26 | https://marketplace.mendix.com/link/component/210123 |
| Mendix 7                       | Not supported                                        |



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025