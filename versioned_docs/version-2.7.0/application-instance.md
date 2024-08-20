---
sidebar_position: 6
---

# Application Instance

## Definition

Previously: *Application Environment*.<br/>
A single Mendix Application or 'app' that is deployed on a computer, for example: Test, Acceptance, or Local machine. 

The associated [Test setting](test-setting) on a Test Configuration determines which Application Instances are being tested.

## Properties
| Name            | Description                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| Name            | The name of the Application Instance; the name of the first one is 'Default' but can be changed by the user. |
| Token           | A globally unique id (GUID) that is generated upon creation and identifies this instance.                    |
| Application URL | The URL to the instance that is entered by the user.                                                         |
| Connectiond Id  | A globally unique id (GUID) that is generated each time a connection is made to the instance.                |

## Business rules
- A Test Setting must be associated to exacly one Application Instance in order to Execute the Test Configuration.

## Actions on an Application Instance

### View Application Instances for an Application
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application) by clicking on the tile.
- Navigate to "App instances" to view the Application Instances.
- MTA will show details of the Application Instance on the right. Click on Copy of any of the values if you need to use them to configure your MTA plugin.

### View Test settings and Test Configurations that use an Application Instance
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an Application by clicking on the tile.
- Navigate to "App instances" to view the Application Instances.
- [Test settings](test-setting) and [Test Configurations](test-configuration) are shown in the block 'Used in the following test settings'.

### Create an Application Instance
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an Application by clicking on the tile.
- Navigate to "App instances" to view the Application Instances.
- Click "<i class="fal fa-plus-circle"></i> Add" to add an Application Instance.
- Enter a name and optional URL.
- Choose "Save".

Note that each time an Application is added, a Default Application Instance is autogenerated.

### Edit an Application Instance
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an Application by clicking on the tile.
- Navigate to "App instances" to view the Application Instances.
- Click <i class="fas fa-pencil"></i> on the Application Instance to edit it.

### Delete an Application Instance
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an Application by clicking on the tile.
- Navigate to "App instances" to view the Application Instances.
- Click <i class="fas fa-trash-alt"></i> on the Application Instance to delete it.

Note that if a Test Configuration was using the Application Instance, this will result in a [Construction Error](construction-error) on the Test Configurations page. 

## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Setting](test-setting)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023