---
sidebar_position: 1
---

# MTA Plugin

## Purpose

In order for MTA to communicate with the [Application Instance](../mta/application-instance) under test, you need to import the MTA Plugin module created by Menditect that will initiate this communication. 

The MTA Plugin triggers the execution of a test and returns the results of the test to MTA.

The Installation Guide covers instructions on how to install and configure the MTA Plugin.

## Supported Versions

|          | MTA Plugin 5  | MTA Plugin 4.8.1 | Any older MTA Plugin |
| -------- | ------------- | ---------------- | -------------------- |
| MTA 3.0  | Supported     | Supported *      | Not supported        |
| MTA 2.10 | Supported     | Supported        | Not supported        |
| MTA 2.9  | Not supported | Not supported    | Not supported        |

\* In order to make use of all the features of MTA, import the latest plugin.
 

## Installation instructions

- Import the MTA Plugin Add-on module into your [Application](../mta/application) from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/214717).
- Follow the [Installation guide](../additional/installation/) to configure the module.

## Update instructions

### Updating from MTA Plugin 4.8.1

:::caution delete before replace
Delete the existing MTA Plugin from your Mendix project, delete MTA Plugin related `JAR files` from `userlib`, and delete the MTA Plugin directory from `javasource` in your project directory. 
:::

### Updating from MTA Plugin 5 and above

- Import the MTA Plugin Add-on module into your [Application](../mta/application) from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/214717).

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025