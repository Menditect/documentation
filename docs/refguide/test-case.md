# Test Case

This document is based on MTA version 1.7.

## Definition

A Test Case is a collection of operations to execute in a [Test Application](test-application), that are assembled to test some specific aspect of system behaviour. A Test Case is part of a [Test Suite](test-suite).

A Test Case can be either 'Manual' or 'Automatic'. Manual Test Cases contain [Test Instructions](test-instruction), do not run any Mendix code and subsequently do not appear whenever the Test Suite is executed. Automatic Test Cases are executable, and contain [Teststeps](teststep) that run the underlying Mendix code.

An 'Automatic' Test Case is always executed on a Test Application and by an execution user. The name of the execution user that is configured for the Test Case, must exactly match an existing, active and not blocked local user in the [Application environment](application-environment) that is tested. Note that this is not the same user as the Mta Plugin User that is used to communicate between the Application environment and MTA. 

When the Test Suite execution hits the Test Case, the Test Case's Execution User is used to login to the Test Case's Test application. When the Test Case is finished executing, the Execution user will be logged out again. The consequence of this, is that all data that was not saved to the database (either by a Persist Object Teststep or a Commit action in a Microflow), will be permanently lost. This is important to realize during test scripting, because if a subsequent Test Case retrieves data from a Teststep in this Test Case, this action will fail if the data was not saved to the database.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Case. |
| Test Case Type | This indicates if a Test Case is executable, can be either 'Manual' or 'Automatic'. |
| Objective | The objective of the testcase. |
| Preconditions | A description of the preconditions of a Test Case. |
| Expected result | A description of the expected result of a Test Case. |
| Test application | The associated test application to execute the Test Case on. |
| Execution user | The username to execute the Test Case with. |
| Apply security | If this is set to No, any restrictive permissions set by the Mendix security model for the execution user are ignored (the execution username is however still used for associated data). |
| Execution time-out | The maximum number of seconds this Test Case is allowed to run. If the execution duration takes longer, the execution is aborted. |
| Execute with delay | The number of milliseconds to wait with executing this Test Case, after the previous Test Case has finished executing. This is particularly useful when some Mendix code is executed asyncronously in a previous Test Case, and you want to prevent the two Test Cases to run simultaneously. |
| Rollback after execution | Indicates if all database transactions executed in this Test Case should be rolled back. This enables for unittesting without changing anything in the database. Note that when starting or stopping additional transactions in an executed microflow, this property will not work as expected. Setting this property to Yes will lead to [Construction Errors](construction-error) if subsequent Test Cases depend on this Test Case. |

## Business rules
- The name is mandatory.
- Test application is mandatory. 
- Execute with delay is mandatory.
- Execute with delay must be greater than 0.
- Execution time-out is mandatory.
- Execution time-out must be greater than 0.
- Execution user is mandatory. 
- Test Case type is mandatory.

## Actions on Test Case

### Run a single Test Case
- Navigate to the Test Suite that the Test Case is in.
- Click on the <i class="fa fa-play"></i> button on the Test Case to execute it.

Executing a single Test Case is only possible if it does not depend on previous Test Cases. If you still want to execute it, make sure to remove the dependencies.

Note that [datavariation](datavariation) still applies when executing a single Test Case. This means that even if there are no variations on attributes or asserts from the Test Case in the datavariation, it will still be executed as many times as there are columns in the datavariation.

### View Test Cases in a Test Suite
- Navigate to the [Test Suite](test-suite) that the Test Cases are in.
- MTA will show the Test Cases in the left pane.

### View Test Case details
- Navigate to the Test Suite that the Test Case is in.
- Click on the Test Case to select it.
- Click on Test case details on top of the middle pane.

### Create a Test Case
- Navigate to the Test Suite you want to create a Test Case in.
- Click "*+ Test case*" to create a Test Case.
- Select either 'Manual' or 'Automatic' for the Test Case Type (Testers can only create 'Manual' Test Cases).
- Enter a name and other optional information.
- Select a [Test Application](test-application) to execute the Test Case on.
- Select an Execution User to execute the Test Case with.
- Optionally, change the Execution time-out and Execute with delay.
- Choose "Save".

### Change the order of a Test Case in a Test Suite
- Click on <i class="fas fa-arrow-up"></i> or <i class="fas fa-arrow-down"></i> on the left of the name of the Test Case to move it up or down.

Note that it is possible that due to moving a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration.

Note that Testers can only move 'Manual' Test Cases, but cannot move 'Automatic' Test Cases.

### Edit a Test Case
- Click on <i class="fa fa-pencil"></i> next to the Test Case name to edit the Name or the Description, or to Highlight the Teststep

Note that it not is possible to change the Test Case Type or associated Test Application after creation.

### Delete a Test Case
- Click <i class="fas fa-trash-alt"></i> on the Test Case you want to delete.

Note that it is possible that due to deleting a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration.

Note that Testers can only delete 'Manual' Test Cases, but cannot delete 'Automatic' Test Cases.

## Related topics
- [Test Application](test-application)
- [Test Instruction](test-instruction)
- [Teststep](teststep)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 12 july 2022