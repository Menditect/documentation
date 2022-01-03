# Test configuration 

## Definition

A Test Configuration is an executable test script that describes which testsuites and which test applications will be/are tested. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Configuration |
| CiCdEnabled | If true,  the Test Configuration will be runned if it is called via CiCd api, if false = the Test Configuration wil NOT be runne if it is called via CiCd api |
| ConstructionError | Indicates whether the Test Configuration has a test suite with a test case with a test step with a construction error |
| Error29 | If true, the revision of the Test Configuration is not the same as the revision of the selected application environment. If false, no error |

## Business rules
- Construction error with element type TCNF must have a relation with Test Configuration. All other relations with other element types must be empty
- Name is mandatory
- Test Configuration is mandatory for test run
- Test Configuration is mandatory for test suite
- The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application.
- There can only be two Test Runs per Test Configuration with a flagged for save set to true.

## Actions on Test Configuration

### View Test Configurations
- Go to the Test design page in MTA to view a list of all the Test Configurations in MTA.

### Create a new Test Configuration
- Go to the Test design page in MTA. 
- Add a new Test Configuration and enter a Name and optional Description. 
- Choose whether the Test Configuration should be Ci/Cd enabled. 
- For more about Ci/Cd, go to [Ci/Cd configuration](../howtos/cicd)

### Execute a Test Configuration
There are multiple ways to execute a Test Configuration. 
From the Test design page:
- Go to the Test design page in MTA. 
- Click on Execute on the Test Configuration you want to execute.

From the Test run overview page:
- Go to the Test run overview page in MTA. 
- Click on Execute on the Test Configuration you want to execute.

From a test suite:
- Open a test suite.
- Click on Execute and to to test run overview.
- Click Proceed on the confirmation window.

From a test run:
- Click on Execute Test Configuration


### Delete a Test Configuration
- Go to the Test design page in MTA. 
- Click on the recycle bin icon to delete the Test Configuration you want to delete.

Note that Testers cannot delete Test Configurations.

### Restore a deleted Test Configuration
- Go to the Test design page in MTA. 
- Go to Deleted configurations.
- Click on recover on the Test Configuration you want to restore.

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
