---
sidebar_position: 1
---

# MTA Plugin

## Purpose

In order for MTA to communicate with the [Application Instance](../mta/application-instance) under test, you need to import a module created by Menditect that will initiate this communication. 

This is the MTA Plugin module. 

## Supported Versions

### Plugin version vs MTA version

|          | MTA Plugin 4.9.1 | MTA Plugin 4.8.1 | Any older MTA Plugin |
| -------- | ---------------- | ---------------- | -------------------- |
| MTA 3.0  | Supported        | Supported *      | Not supported        |
| MTA 2.10 | Supported        | Supported        | Not supported        |
| MTA 2.9  | Not supported    | Not supported    | Not supported        |

\* In order to make use of all the features of MTA, import the latest plugin.
 

### Plugin version vs Mendix version

Download the MTA plugin module from Mendix Marketplace. 

Make sure to check your app's Mendix version before importing the module. 

| Mendix Version                 | Url                                                  |
| ------------------------------ | ---------------------------------------------------- |
| Mendix 11                      | Not supported                                        |
| Mendix 10                      | https://marketplace.mendix.com/link/component/214764 |
| Mendix 9.24.4 and higher       | https://marketplace.mendix.com/link/component/214717 |
| Mendix 9.0.5 - Mendix 9.24.3   | https://marketplace.mendix.com/link/component/206637 |
| Mendix 8.12.7 - Mendix 8.18.26 | https://marketplace.mendix.com/link/component/210123 |
| Mendix 7                       | Not supported                                        |


#### Upgrading Mendix 

To upgrade the major version of your Mendix App (for example, from Mendix 9.24 to 10.12), you need to make sure to replace all the files related to the MTA Plugin Module. Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. Then, download the respective MTA plugin module from Github that matches the newer Mendix version as listed above. You can do all this before performing the upgrade.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025