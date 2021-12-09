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
- ==View test runs==
- ==Create a new test run==
- ==Delete a test run==
- ==Pin a test run==