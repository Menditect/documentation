---
sidebar_position: 1
---
# Test configuration 

## Definition

A Testconfiguration is an executable test script that describes which testsuites and which test applications will be/are tested. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the test configuration |
| CiCdEnabled | If true,  the testconfiguration will be runned if it is called via CiCd api, if false = the testconfiguration wil NOT be runne if it is called via CiCd api |
| ConstructionError | Indicates whether the test configuration has a test suite with a test case with a test step with a construction error |
| Error29 | If true, the revision of the test configuration is not the same as the revision of the selected application environment. If false, no error |

## Business rules
- Construction error with element type TCNF must have a relation with test configuration. All other relations with other element types must be empty
- Name is mandatory
- Test configuration is mandatory for test run
- Test configuration is mandatory for test suite
- The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application.
- There can only be two Test Runs per Test Configuration with a flagged for save set to true.

## Actions on Test configuration

### View testconfigurations
Go to the Test design page in MTA to view a list of all the test configurations in MTA.

### Create a new test configuration
Go to the Test design page in MTA. Add a new test configuration and enter a Name and optional Description. Choose whether the test configuration should be Ci/Cd enabled. 
For more about Ci/Cd, go to ...

### Execute a test configuration
...

### Delete a test configuration
...

### Restore a deleted test configuration
...
