---
sidebar_position: 14
---


# Test Configuration 



## Definition

A Test Configuration is an executable test script that describes which [Test Suites](test-suite) and which [Applications](application) will be/are tested. 

The Test Configuration is the highest or first level of the 4-layer framework that is used in MTA. 

## Properties
| Name         | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Name         | The name of the Test Configuration.                                                                                            |
| CiCd enabled | If set to Yes, the Test Configuration will be executed if one of it is associated Test Applications is executed via Ci/Cd API. |

## Business rules

- The application revision of the [Test Suite](test-suite) must be equal to the application revision of the Test Configuration, with the same [Application](application) in order to be able to execute the Test Configuration.
- You can [pin](#pin-a-test-run) a maximum of two [Test Runs](test-run) per Test Configuration.

## Actions on Test Configuration

### View Test Configurations
- Navigate to the "Test configurations" page to view a list of all the Test Configurations in MTA.

### Create a new Test Configuration
- Navigate to the "Test configurations" page. 
- Add a new Test Configuration and enter a Name and optional Description. 
- Choose whether the Test Configuration should be Ci/Cd enabled. 

For the full explanation on how to add a Test Configuration, read the [How To](additional/howtos/run-first-test#2-add-a-test-configuration).

### Execute a Test Configuration

- Navigate to the "Test configurations" page.
- Select the Test Configuration you want to execute.
- Click on "Execute".

### Delete a Test Configuration
- Navigate to the "Test configurations" page.
- Click on the "<i class="fas fa-ellipsis"></i>" button and select "Delete" on the Test Configuration you want to delete.

Note that Testers cannot delete Test Configurations.

### Restore a deleted Test Configuration
- Navigate to the "Test configurations" page.
- Go to "<i class="fal fa-eye"></i> Deleted". 
- Click on "<i class="fal fa-check-double"></i> Recover" on the Test Configuration you want to restore.

Note that deleted Test Configuration will automatically be deleted permanently when 20 days are passed after the moment of deletion.

### Delete a Test Configuration permanently
- Navigate to the "Test configurations" page.
- Go to "<i class="fal fa-eye"></i> Deleted". 
- Click on "<i class="fal fa-trash-alt"></i> Delete" on the Test Configuration you want to permanently delete.

## Related topics
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 december 2022