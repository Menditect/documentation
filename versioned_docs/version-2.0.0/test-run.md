---
sidebar_position: 16
---


# Test Run 

## Definition

The Test Run contains the tests that can be/are executed according a [Test Configuration](test-configuration).

## Properties
| Name               | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| Name               | The name of the Test Run.                                                     |
| Flagged for delete | This indicates if the Test Run is flagged for deletion by the user.           |
| Pinned             | If a Test Run is pinned by a user it will not be deleted overnight.           |
| Result             | The test result ('Pass' or 'Fail').                                           |
| Start date         | The moment when the Test Run starts.                                          |
| Status             | This indicates if the test is running or not; can be 'Running' or 'Finished'. |
  
## Business rules
- You can [pin](#pin-a-test-run) a maximum of two Test Runs per [Test Configuration](test-configuration).

## Actions on Test Run

### View Test Runs
- Navigate to the "Test configurations" page.
- Select the Test Configuration you want to view Test Runs for.
- Navigate to "Test runs".

### Create a new Test Run
- To create a new Test Run, [Execute a Test Configuration](test-configuration#execute-a-test-configuration).

### Delete a Test Run
- Navigate to the "Test configurations" page.
- Select the Test Configuration you want to view Test Runs for.
- Navigate to "Test runs".
- Click "<i class="fal fa-trash-can"></i>" for the Test run you want to delete.


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
- Navigate to the Test Run overview in MTA under Test Run.
- Click on "<i class="fas fa-thumbtack"></i>" next to the Test Run you want to keep.

## Related topics
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023