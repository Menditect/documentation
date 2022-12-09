---
sidebar_position: 20
---


# Test Setting 

## Definition

A Test Setting describes on a [Test Configuration](test-configuration) which combination of [Application Instances](application-instance) are to be tested.
The user that is logged in determines which Test Setting is to be selected when Executing the Test Configuration.

## Properties

| Name       | Description                                    |
| ---------- | ---------------------------------------------- |
| Name       | The name of the Test Setting.                  |
| Preference | When yes, select this Test Setting to execute. |

## Business rules

None.

---

## Actions on Test Setting 

### View Test Application 
- To view the Test Applications for a [Test Configuration](test-configuration), click "Test applications" after selecting the respective Test Configuration.

### Create Test Application 
Creating a Test Application means linking an [Application Instance](application-instance) to a [Test Configuration](test-configuration).
- First, create or select a Test Configuration.
- Click "*+ Test application*".
- Select the Mendix [Application](application) that you want to test.
- Then, select the Application environment that you want to test on (for non-MendixCloud environments, first create a Custom Environment).
- Enter the details for the Mta Plugin User for the respective environment and optionally test if a connection can be established.
- Choose "Save".

### Delete Test Application 
- Navigate to the "Test applications" tab after selecting the Test Configuration that you want to delete the Test Application from.
- Click on <i class="fas fa-trash-alt"></i> to delete the Test Application you want to delete.

## Related topics
- [Application Instances](application-instance)
- [Test Configuration](test-configuration)
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 september 2022