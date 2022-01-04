# Test Case

## Definition

A Test Case is a collection of [Test Steps](test-step) that are assembled to test some specific aspect of system behaviour. A Test Case is part of a [Test Suite](test-suite).
A Test Case is always executed on a [Test Application](test-application) and by an execution user. The name of the execution user must exactly match an existing, active and not blocked local user in the [Application environment](application-environment) that is tested.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the Test Case |
| Test Case type | Indicates wheter a Test Case is a manual or automatic Test Case: <br /> - Manual Test Cases are not included when a Test Configuration is executed <br /> - Automatic Test Cases are included when a Test Configuration is executed <br /> |
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

## Actions on ...

### View ...
- ...

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
