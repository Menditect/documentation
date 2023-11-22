---
sidebar_position: 17
---


# Test Case



## Definition

A Test Case is a collection of operations to execute on an [Application Instance](application-instance), that are assembled to test some specific aspect of system behaviour. 

The Test Case is the third level of the 4-layer framework that is used in MTA. It allows for a [Test Suite](test-suite) to be split up into different functional or technical aspects of the tested software, but it is also the level where to choose which app to test and which credentials to test with. From MTA 2.0, it is possible to define [Data Variation](datavariation) on the Test Case level. Test Cases are executable, and contain [Teststeps](teststep) that run the underlying Mendix code.

A Test Case is always executed on a Test Application and by an execution user. The name of the execution user that is configured for the Test Case, must exactly match an existing, active and not blocked local user in the [Application Instance](application-instance) that is tested. Note that this is not the same user as the Mta Connection User that is used to communicate between the Application environment and MTA. 

When the Test Suite execution hits the Test Case, the Test Case's Execution User is used to login to the Test Case's Test application. When the Test Case is finished executing, the Execution user will be logged out again. The consequence of this, is that all data that was not saved to the database (either by a Persist Object Teststep or a Commit action in a Microflow), will be permanently lost. This is important to realize during test scripting, because if a subsequent Test Case retrieves data from a Teststep in this Test Case, this action will fail if the data was not saved to the database.

## Properties
| Name                     | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name                     | The name of the Test Case.                                                                                                                                                                                                                                                                                                                                                                                   |
| Test application         | The associated test application to execute the Test Case on.                                                                                                                                                                                                                                                                                                                                                 |
| Execution user           | The username to execute the Test Case with.                                                                                                                                                                                                                                                                                                                                                                  |
| Apply security           | If this is set to No, any restrictive permissions set by the Mendix security model for the execution user are ignored (the execution username is however still used for associated data).                                                                                                                                                                                                                    |
| Execution time-out       | The maximum number of seconds this Test Case is allowed to run. If the execution duration takes longer, the execution is aborted.                                                                                                                                                                                                                                                                            |
| Execute with delay       | The number of milliseconds to wait with executing this Test Case, after the previous Test Case has finished executing. This is particularly useful when some Mendix code is executed asyncronously in a previous Test Case, and you want to prevent the two Test Cases to run simultaneously.                                                                                                                |
| Rollback after execution | Indicates if all database transactions executed in this Test Case should be rolled back. This enables for unittesting without changing anything in the database. Note that when starting or stopping additional transactions in an executed microflow, this property will not work as expected. Setting this property to Yes will lead to [Errors](error) if subsequent Test Cases depend on this Test Case. |
| Objective                | The objective of the testcase.                                                                                                                                                                                                                                                                                                                                                                               |
| Preconditions            | A description of the preconditions of a Test Case.                                                                                                                                                                                                                                                                                                                                                           |
| Expected result          | A description of the expected result of a Test Case.                                                                                                                                                                                                                                                                                                                                                         |

## Business rules

- A Test Case is always about a single [Application](application).

## Actions on Test Case

### View Test Cases in a Test Suite
- Navigate to the [Test Suite](test-suite) that the Test Cases are in.
- MTA will show the Test Cases in the left pane.

### View Test Case details
- Navigate to the Test Suite that the Test Case is in.
- Click on the Test Case to select it.
- Click on Test case details on top of the middle pane.

### Create a Test Case
- Navigate to the Test Suite you want to create a Test Case in.
- Use the Add button to create a Test Case.
- Enter a name and other optional information.
- Select an [Application Instance](application-instance) to execute the Test Case on.
- Select an Execution User to execute the Test Case with.
- Optionally, change the Execution time-out and Execute with delay.
- Choose "Save".

### Execute Test Case
- Navigate to the Test Suite that the Test Case is in.
- Click on the "<i class="fa fa-play"></i>" button on the Test Case to execute it.

Executing a single Test Case is only possible if it does not depend on previous Test Cases. If you still want to execute it, make sure to remove the dependencies.

Note that [datavariation](datavariation) still applies when executing a single Test Case. This means that even if there are no variations on attributes or asserts from the Test Case in the datavariation, it will still be executed as many times as there are columns in the datavariation. This applies to both Test Suite datavariation as Test Case datavariation.

### Change the order of a Test Case in a Test Suite
- Click on "<i class="fas fa-arrow-up"></i>" or "<i class="fas fa-arrow-down"></i>" under the "<i class="fas fa-ellipsis"></i>" menu of the Test Case to move it up or down.

Note that it is possible that due to moving a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration.

Note that Testers cannot move Test Cases.

### Edit a Test Case 

- Click on "<i class="fa fa-pencil"></i>" under the "<i class="fas fa-ellipsis"></i>" menu in the Test Case to edit it.

Note that it not is possible to change the Test Case Type or associated Test Application after creation.

### Delete a Test Case

- Click on "<i class="fas fa-trash-alt"></i>" under the "<i class="fas fa-ellipsis"></i>" menu on the Test Case you want to delete.

Note that it is possible that due to deleting a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an [Error](error) will occur prohibiting the execution of the Test Configuration.

Note that Testers cannot delete Test Cases.

## Related topics
- [Test Setting](test-setting)
- [Teststep](teststep)
- [Test Suite](test-suite)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023