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
- Go to the Test design page in MTA to view a list of all the test configurations in MTA.

### Create a new test configuration
- Go to the Test design page in MTA. 
- Add a new test configuration and enter a Name and optional Description. 
- Choose whether the test configuration should be Ci/Cd enabled. 
- For more about Ci/Cd, go to [Ci/Cd configuration](../howtos/cicd)

### Execute a test configuration
There are multiple ways to execute a test configuration. 
From the Test design page:
- Go to the Test design page in MTA. 
- Click on Execute on the test configuration you want to execute.

From the Test run overview page:
- Go to the Test run overview page in MTA. 
- Click on Execute on the test configuration you want to execute.

From a test suite:
- Open a test suite.
- Click on Execute and to to test run overview.
- Click Proceed on the confirmation window.

From a test run:
- Click on Execute test configuration


### Delete a test configuration
- Go to the Test design page in MTA. 
- Click on the recycle bin icon to delete the test configuration you want to delete.

Note that Testers cannot delete test configurations.

### Restore a deleted test configuration
- Go to the Test design page in MTA. 
- Go to Deleted configurations.
- Click on recover on the test configuration you want to restore.
