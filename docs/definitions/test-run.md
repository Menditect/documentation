---
sidebar_position: 2
---
# Test run 

## Definition

The testrun contains the tests that can be/are executed according a testrunconfiguration.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The test run name |
| MicroflowDurationInS | Sum of the MicroflowDurationInS of all associated test suite runs |
| FlaggedForDelete | Flagged for deletion |
| FlaggedForSave | Flagged for save TRUNs are not deleted in the TRUNs cleanup. If a testrun is pinned by a user, the testrun.FlaggedForSave = true | 
| ResultTest | The test result (pass or fail) |
| StartDate |The moment when the test run starts | 
| Status | Running or Finished |
  
## Business rules
- Start date is mandatory
- Test configuration is mandatory for test run
- test run is mandatory for test run application environment
- test run is mandatory for test suite run
- There can only be two Test Runs per Test Configuration with a flagged for save set to true.

## Actions on Test run

### View test runs
- Go to the Test run overview in MTA under Test run, to view a list of all the executed test runs in MTA.

Note that for each test configuration, only the last two executed test runs are persisted overnight, plus a maximum of two pinned test runs. Read the [Pin a test run](#pin-a-test-run) section in this page for more information.

### Create a new test run
- To create a new test run, execute a test configuration.
 
Read more at [Execute a test configuration](test-configuration#execute-a-test-configuration).

### Delete a test run
- Go to the Test run overview in MTA under Test run.
- Click on the recycle bin icon to delete the test run you want to delete.

### Pin a test run
Pinning a test run will prevent it from being deleted overnight.
- Go to the Test run overview in MTA under Test run.
- Click on the pin icon next to the test run you want to keep.

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
