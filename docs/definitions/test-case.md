# Test case

## Definition

A test case is a collection of [Test Steps](test-step) that are assembled to test some specific aspect of system behaviour. A test case is part of a [Test Suite](test-suite).
A test case is always executed on a [Test Application](test-application) and by an execution user. The name of the execution user must exactly match an existing, active and not blocked local user in the [Application environment](application-environment) that is tested.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the test case |
| Test case type | Indicates wheter a test case is a manual or automatic test case: <br /> - Manual test cases are not included when a test configuration is executed <br /> - Automatic test cases are included when a test configuration is executed <br /> |
| Objective | Objective of the testcase |
| Preconditions | Description of the preconditions of a test case |
| Expected result | Description of the expected result of a test case |
| Test application | The associated test application to execute the test case on |
| Execution user | The user to execute the test case with |
| Apply security | If set to No, any restrictive permissions set by the Mendix security model for the execution user are ignored (the execution username is however still used for associated data) |
| Execution time-out | The maximum number of seconds this test case is allowed to run. If the execution duration takes longer, the execution is aborted. |
| Execute with delay | The number of milliseconds to wait with executing this test case, after the previous test case has finished executing. |

## Business rules
- Name is mandatory
- Test application is mandatory 
- Execute with delay is mandatory
- Execute with delay must be greater than 0
- Execution time-out is mandatory
- Execution time-out must be greater than 0
- Execution user is mandatory 
- Test case type is mandatory

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
