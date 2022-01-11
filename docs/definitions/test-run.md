# Test Run 

## Definition

The Test Run contains the tests that can be/are executed according a [Test Configuration](test-configuration).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Run |
| Flagged for delete | Indicates if the Test Run is flagged for deletion by the user |
| Pinned | If a Test Run is pinned by a user it will not be deleted overnight | 
| Result | The test result (pass or fail) |
| Start date |The moment when the Test Run starts | 
| Status | Running or Finished |
  
## Business rules
- There can only be two Test Runs per Test Configuration that are "Pinned"

## Actions on Test Run

### View Test Runs
- Go to the Test Run overview in MTA under Test Run, to view a list of all the executed Test Runs in MTA.

### Create a new Test Run
- To create a new Test Run, execute a Test Configuration.
 
Read more at [Execute a Test Configuration](test-configuration#execute-a-test-configuration).

### Delete a Test Run
- Go to the Test Run overview in MTA under Test Run.
- Click on the recycle bin icon to delete the Test Run you want to delete.

Note that for each Test Configuration, only the last two executed Test Runs are persisted overnight, plus a maximum of two pinned Test Runs. The rest is cleaned up. Read the [Pin a Test Run](#pin-a-test-run) section in this page for more information.
If a Test Run is cleaned up, the following information about the Test Run is stored for the statistics on the dashboard page:
- start date
- result (Pas, Fail, Error)
- number of testcaseruns OK
- number of testcaseruns NOK
- number of testcaseruns not executed
- per Test Case run: Test Case name, application, environment, revision, Test Run result

### Pin a Test Run
Pinning a Test Run will prevent it from being cleaned up overnight.
- Go to the Test Run overview in MTA under Test Run.
- Click on the pin icon next to the Test Run you want to keep.

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
