---
sidebar_position: 5
---

# Application

## Definition

A Mendix project that can be added to MTA for test purposes. 

## Properties
| Name       | Description                                                |
| ---------- | ---------------------------------------------------------- |
| Name       | The name of the project in Mendix teamserver.              |
| Project ID | The unique identifier of the project in Mendix teamserver. |

## Business rules
- An MTA user is associated to a Mendix user in MTA. This MTA user can only add Mendix Applications that are registered to the Mendix user. 

To learn more about configuring an MTA user, read the How To section.

## Actions on an Application

### View Applications in use by MTA
- Navigate to the "Applications" page to view all Applications that are used in MTA.

### Register Application in MTA
- Navigate to the "Applications" page .
- Click on "<i class="fal fa-plus-circle"></i> Add".
- Select the Application you want to Add.

:::note
Apps that are not hosted in the Mendix cloud don't always show in this list.<br/>
Also, Apps that you have left, may still appear in the list, but cannot be registered in MTA.

Add a Mendix App manually by using the <i class="fas fa-ellipsis"></i> button on the top right.
:::

### View Project ID
- Navigate to the "Applications" page.
- Click on <i class="fal fa-info-circle"></i> to view the Project ID.

:::note
This Project ID is the same ID as the "App ID" that can be found in Mendix Sprintr, under the "Settings" page, after you selected an App.
:::

### Unregister Application from MTA
- Navigate to the "Applications" page .
- Click on the <i class="fas fa-ellipsis"></i> button for the Application you want to unregister.
- Click "<i class="fal fa-trash-can"></i> Delete".

## Related topics
- [Application Instance](application-instance)
- [Application Revision](application-revision)
- [Test Setting](test-setting)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023