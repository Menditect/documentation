# Test Case

## Definition

A Test Case is a collection of [Test Steps](test-step) that are assembled to test some specific aspect of system behaviour. A Test Case is part of a [Test Suite](test-suite).
A Test Case is always executed on a [Test Application](test-application) and by an execution user. The name of the execution user must exactly match an existing, active and not blocked local user in the [Application environment](application-environment) that is tested.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the Test Case |
| Test Case Type | Indicates wheter a Test Case is a manual or automatic Test Case: <br /> - Manual Test Cases are not included when a Test Configuration is executed <br /> - Automatic Test Cases are included when a Test Configuration is executed <br /> |
| Objective | Objective of the testcase |
| Preconditions | Description of the preconditions of a Test Case |
| Expected result | Description of the expected result of a Test Case |
| Test application | The associated test application to execute the Test Case on |
| Execution user | The user to execute the Test Case with |
| Apply security | If set to No, any restrictive permissions set by the Mendix security model for the execution user are ignored (the execution username is however still used for associated data) |
| Execution time-out | The maximum number of seconds this Test Case is allowed to run. If the execution duration takes longer, the execution is aborted. |
| Execute with delay | The number of milliseconds to wait with executing this Test Case, after the previous Test Case has finished executing. |

## Business rules
- Name is mandatory
- Test application is mandatory 
- Execute with delay is mandatory
- Execute with delay must be greater than 0
- Execution time-out is mandatory
- Execution time-out must be greater than 0
- Execution user is mandatory 
- Test Case type is mandatory

## Actions on Test Case

### View Test Cases in a Test Suite
- Go to the Test Suite that the Test Cases are in
- Test Cases shown in the left pane

### View Test Case details
- Go to the Test Suite that the Test Cases are in
- Click on the Test Case to select
- Click on Test case details on top of the middle pane

### Create a Test Case
- Go to the Test Suite you want to create a Test Case in
- Click *+ Test case* to create a Test Case
- Select either Manual or Automatic for the Test Case Type (Testers can only create Manual Test Cases)
- Enter a name and other optional information
- Select a [Test Application](test-application) to execute the Test Case on
- Select an Execution User to execute the Test Case with 
- Optionally, change the Execution time-out and Execute with delay
- Click Save

### Change the order of a Test Case in a Test Suite
- Click on the Up or Down arrow on the left of the name of the Test Case to move it up or down

Note that it is possible that due to moving a Test Case and dependencies of Test Steps in the Test Case with Test Steps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration.

Note that Testers can only move Manual Test Cases, but cannot move Automatic Test Cases.

### Edit a Test Case
- Click on the pencil icon next to the Test Case name to edit the Name or the Description, or to Highlight the Test Step

Note that it not is possible to change the Test Case Type or associated [Test Application](test-application) after creation.

### Delete a Test Case
- Click the Recycle bin icon on the Test Case you want to delete.

Note that it is possible that due to deleting a Test Case and dependencies of Test Steps in the Test Case with Test Steps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration.

Note that Testers can only delete Manual Test Cases, but cannot delete Automatic Test Cases.

## Related topics
- [Test Step](test-step)
- [Test Instruction](test-instruction)
- [Test Suite](test-suite)
- [Test Application](test-application)
