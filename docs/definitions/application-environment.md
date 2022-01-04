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

## Actions on Application environment

### View Application environments for an Application
- Go to the Applications page to view all Applications that are used in MTA.
- Go to the Application environments & execution users tab to view the environments.

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
