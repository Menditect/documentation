---
sidebar_position: 18
---


# Test Configuration 



## Definition

A Test Configuration is an executable test script that describes which [Test Suites](test-suite) and which [Test Applications](test-application) will be/are tested. 

The Test Configuration is the highest or first level of the 4-layer framework that is used in MTA. 

## Properties
| Name         | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Name         | The name of the Test Configuration.                                                                                            |
| CiCd enabled | If set to Yes, the Test Configuration will be executed if one of it is associated Test Applications is executed via Ci/Cd API. |

## Business rules
- The name is mandatory.
- The application revision of the [Test Suite](test-suite) must be equal to the application revision of the Test Configuration, with the same [Application](application) in order to be able to execute the Test Configuration.
- There can only be two [Test Runs](test-run) per Test Configuration that are Pinned.

## Actions on Test Configuration

### View Test Configurations
- Navigate to the "Test design" page in MTA to view a list of all the Test Configurations in MTA.

### Create a new Test Configuration
- Navigate to the "Test design" page in MTA. 
- Add a new Test Configuration and enter a Name and optional Description. 
- Choose whether the Test Configuration should be Ci/Cd enabled. 

For more about Ci/Cd, read the How To section.

### Execute a Test Configuration
There are multiple ways to execute a Test Configuration. 

From the "Test design" page:
- Click on Execute on the Test Configuration you want to execute.

From the Test Run overview page:
- Click on Execute on the Test Configuration you want to execute.

From a [Test Suite](test-suite):
- Click on "Execute" and go to "Test Run overview".
- Click "Proceed on the confirmation window".

From a [Data Variation](datavariation):
- Click on "Execute and go to Test Run overview".
- Click "Proceed on the confirmation window".

From a [Test Run](test-run):
- Click on "Execute Test Configuration"

### Delete a Test Configuration
- Go to the "Test design" page in MTA. 
- Click on <i class="fas fa-trash-alt"></i> to delete the Test Configuration you want to delete.

Note that Testers cannot delete Test Configurations.

### Restore a deleted Test Configuration
- Go to the "Test design" page in MTA. 
- Go to "Deleted configurations".
- Click on "Recover" on the Test Configuration you want to restore.

## Related topics
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 september 2022