# Test run 

## Definition

The testrun contains the tests that can be/are executed according a [Test Configuration](test-configuration).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the test run |
| Flagged for delete |Indicates if the test run is flagged for deletion by the user |
| Pinned | If a testrun is pinned by a user it will not be deleted overnight | 
| Result | The test result (pass or fail) |
| Start date |The moment when the test run starts | 
| Status | Running or Finished |
  
## Business rules
- There can only be two Test Runs per Test Configuration that are "Pinned"

## Actions on Test run

### View test runs
- Go to the Test run overview in MTA under Test run, to view a list of all the executed test runs in MTA.

### Create a new test run
- To create a new test run, execute a test configuration.
 
Read more at [Execute a test configuration](test-configuration#execute-a-test-configuration).

### Delete a test run
- Go to the Test run overview in MTA under Test run.
- Click on the recycle bin icon to delete the test run you want to delete.

Note that for each test configuration, only the last two executed test runs are persisted overnight, plus a maximum of two pinned test runs. The rest is cleaned up. Read the [Pin a test run](#pin-a-test-run) section in this page for more information.
If a test run is cleaned up, the following information about the test run is stored for management purposes:
- start date
- result (Pas, Fail, Error)
- number of testcaseruns OK
- number of testcaseruns NOK
- number of testcaseruns not executed
- per test case run: test case name, application, environment, revision, test run result

### Pin a test run
Pinning a test run will prevent it from being deleted overnight.
- Go to the Test run overview in MTA under Test run.
- Click on the pin icon next to the test run you want to keep.

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
