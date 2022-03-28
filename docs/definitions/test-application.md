# Test Application 

## Definition

A Test Application is an [Application environment](application-environment) that is linked with a certain [Test Configuration](test-configuration) and can be used to execute the [Test Configuration](test-configuration) on. 

## Properties

| Name | Description |
| ----------- | ----------- |
| Name | The name of the Application environment. |

## Business rules

None.

## Actions on Test Application 

### View Test Application 
- To view the Test Applications for a Test Configuration, click Test applications after selecting the respective Test Configuration.

### Create Test Application 
Creating a Test Application means linking an [Application environment](application-environment) to a [Test Configuration](test-configuration).
- First, create or select a [Test Configuration](test-configuration).
- Click "*+ Test application*".
- Select the Mendix [Application](application) that you want to test.
- Then, select the [Application environment](application-environment) that you want to test on (for non-MendixCloud environments, first create a Custom Environment).
- Enter the details for the Mta Plugin User for the respective environment and optionally test if a connection can be established.
- Choose "Save".

### Delete Test Application 
- Navigate to the "Test applications" tab after selecting the Test Configuration that you want to delete the Test Application from.
- Click on <i class="fas fa-trash-alt"></i> to delete the Test Application you want to delete.

## Related topics
- [Test Run](test-run)
- [Test Suite](test-suite)
