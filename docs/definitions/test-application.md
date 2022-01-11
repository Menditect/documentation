# Test Application 

## Definition

A Test Application is an [Application environment](application-environment) that is linked with a certain [Test Configuration](test-configuration) and can be used to execute the [Test Configuration](test-configuration) on. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Configuration |


## Business rules

None.

## Actions on Test Application 

### View Test Application 
- To view the Test Applications for a Test Configuration, click Test applications after selecting the respective Test Configuration

### Create Test Application 
Creating a Test Application means linking an [Application environment](application-environment) to a [Test Configuration](test-configuration).
- First, create or select a [Test Configuration](test-configuration).
- Click *+ Test application* .
- Select the Mendix [Application](application) that you want to test.
- Then, select the [Application environment](application-environment)that you want to test on (for non-MendixCloud environments, first create a Custom Environment).
- Enter the details for the Mta Plugin User for the respective environment and optionally test if a connection can be established.
- Click Save.

### Delete Test Application 
- Click Test applications after selecting the Test Configuration that you want to delete the Test Application from.
- Click on the recycle bin icon to delete the Test Application you want to delete.

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
