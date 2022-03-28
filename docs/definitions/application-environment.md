# Application Environment

## Definition

A resource container on which exactly one Mendix application can be deployed i.e. Test, Acceptance and Production. 
An Application Environment can be hosted on the Mendix Cloud, a third party cloud environment, on premise or locally on a computer. Application Environments are imported from the Mendix model by MTA. 
See Mendix documentation for more information about Application Environments.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of environment. |
| Model version | The version number of the package deployed in your environment. |
| URL | The Mendix URL of the environment. |
| Plugin username | Username of the Plugin User in the environment of the application under test |
| Plugin password | Password of the Plugin User in the environment of the application under test |
| Show statistics | Indicates whether the application environment is displayed in the statistics overview (dashboard) |

## Business rules
- Name is mandatory
- URL is mandatory
- URL should start with http of https and not end with a slash
- Plugin username is mandatory
- Plugin password is mandatory

## Actions on an Application Environment

### View Application Environment for an Application
- Navigate to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Navigate to the Application environments & execution users tab to view the Application Environments.

### View Test Configurations that use an Application Environment
- Navigate to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Navigate to the Application environments & execution users tab to view the Application Environments.
- Click on <i class="fa fa-eye"></i> next to an Application Environment. MTA shows a popup page with [Test Configurations](test-configuration) that have a [Test Application](test-application) using this Application Environment.

If no [Test Applications](test-application) exist for the respective Application Environment, a recycle bin icon to delete the Application Environment, is shown instead of an eye icon. 

### Delete Application Environment
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application)
- Go to the Application environments & execution users tab to view the Application Environments.
- Click on <i class="fas fa-trash-alt"></i> next to the respective Application Environment. MTA will delete all data regarding the Application Environment. Note that the actual Mendix app environment will not be deleted. The Application Environment data will automatically be added again when referenced by a [Test Configuration](test-configuration).

If a [Test Application](test-application) is associated, <i class="fa fa-eye"></i> is shown instead of <i class="fas fa-trash-alt"></i>. 

## Related topics
- [Application](application)
- [Application Branch](application-branch)
- [Application Revision](application-revision)
- [Test Application](test-application)
