# Application Environment

## Definition

An environment (instance) of a Mendix [Application](application). This could be hosted on the Mendix cloud, in Microsoft Azure, on premise, locally on a computer or otherwise. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of environment. |
| Model version | The version number of the package deployed in your environment. |
| URL | The Mendix URL of the environment. |
| Plugin username | Username of the plugin user in the environment of the application under test |
| Plugin password | Password of the plugin user in the environment of the application under test |
| Show statistics | Indicates whether the application environment is displayed in the statistics overview (dashboard) |

## Business rules
- Name is mandatory
- URL is mandatory
- URL should start with http of https and not end with a slash
- Plugin username is mandatory
- Plugin password is mandatory

## Actions on Application Environment

### View Application Environment for an Application
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Go to the Application environments & execution users tab to view the Application Environments.

### View Test Configurations that use an Application Environment
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Go to the Application environments & execution users tab to view the Application Environments.
- Click on the eye icon next to an Application Environment to view all [Test Configurations](test-configuration) that have a [Test Application](test-application) using this Application Environment.

If no [Test Applications](test-application) exist for the respective Application Environment, a recycle bin icon to delete the Application Environment, is shown instead of an eye icon. 

### Delete Application Environment
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Go to the Application environments & execution users tab to view the Application Environments.
- Click on the recycle bin icon next to delete all data regarding the respective Application Environment. Note that the actual Mendix app environment will not be deleted. The Application Environment data will be added again when referenced by a [Test Configuration](test-configuration).

If [Test Applications](test-application) exist for the respective Application Environment, an eye icon to view Test Configurations that use the Application Environment will be shown instead of a recycle bin icon. 

## Related topics
- [Application](application)
- [Test Application](test-application)
- [Test Configuration](test-configuration)
