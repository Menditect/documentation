---
sidebar_position: 1
---

# MTA Plugin

## Purpose

In order for MTA to communicate with the [Application Instance](../mta/application-instance) under test, you need to import the MTA Plugin module created by Menditect that will initiate this communication. 

### Usage

The Installation Guide covers instructions on how to install and configure the MTA Plugin.

If a [Test Run](../mta/test-run) starts in MTA, the MTA Plugin triggers the execution in the Test [Application](../mta/application), and returns the results of the test to MTA.

To determine whether a Microflow is triggered by MTA, call the `Is_Current_Execution_By_MTA` [Rule](https://docs.mendix.com/refguide/rules/) in the MTA Plugin.

## Supported Versions

|          | MTA Plugin 9/10/11 | MTA Plugin 4.8.1  | Any older MTA Plugin |
| -------- | ------------------ | ----------------- | -------------------- |
| MTA 3.0  | Supported          | Partial support * | Not supported        |
| MTA 2.10 | Supported          | Supported         | Not supported        |
| MTA 2.9  | Not supported      | Not supported     | Not supported        |

\* [Teststep Exception](../mta/teststep-exception) handling and [Test Run](../mta/test-run) FileDocument downloads won't work.
 
:::info changed versioning
Because Menditect now hosts all Mendix Runtime versions (9, 10 and 11) in the same marketplace component, we have moved to a different versioning system. The major MTA Plugin version indicates the Mendix Runtime version. The remaining digits indicate the internal version of the MTA Plugin.
:::

## Installation instructions

- Import the MTA Plugin Add-on module into your [Application](../mta/application) from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/214717).
- Follow the [Installation guide](../../additional/installation/import-plugin) to configure the module.

## Update instructions

### Updating from MTA Plugin 4.8.1

:::caution delete before replace
Start with `Clean your Deployment directory` in Studio Pro. Then, delete the existing MTA Plugin from your Mendix project, delete MTA Plugin related `JAR files` from `userlib`, and delete the MTA Plugin directory from `javasource` in your project directory. 
:::

### Updating from MTA Plugin 9 and above

- Import the MTA Plugin Add-on module into your [Application](../mta/application) from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/214717).


## Known issues

### Merge Conflicts in Studio Pro

A merge conflict may occur on a Java file inside the `/modules/javasource/` directory in your Mendix project. This is a directory that is generated each time a local build is performed.

The conflict is usually the result of randomly generated GUID values, inside a Java file that may already be present on the server, while it is also generated locally but with different GUID values.

**The issue can be resolved by either choosing "Using mine" or completely deleting the concerning directory.**


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025