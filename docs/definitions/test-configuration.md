# Test Configuration 

## Definition

A Test Configuration is an executable test script that describes which [Test Suites](test-suite) and which [Test Applications](test-application) will be/are tested. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Configuration |
| CiCd enabled | If set to Yes, the Test Configuration will be executed if one of it's associated Test Applications is executed via CiCd api |

## Business rules
- Name is mandatory
- The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application in order to be able to execute the Test Configuration.
- There can only be two Test Runs per Test Configuration that are Pinned.

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

From the Test Run overview page:
- Go to the Test Run](test-run) overview page in MTA. 
- Click on Execute on the Test Configuration you want to execute.

From a [Test Suite](test-suite):
- Open a Test Suite.
- Click on Execute and go to Test Run overview.
- Click Proceed on the confirmation window.

From a [Data Variation](data-variation):
- Click on Execute and go to Test Run overview.
- Click Proceed on the confirmation window.

From a [Test Run](test-run):
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
- [Test Suite](test-suite)
- [Test Run](test-run)
