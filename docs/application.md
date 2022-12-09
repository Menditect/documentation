---
sidebar_position: 4
---

# Application

## Definition

A Mendix project that you can add to MTA for test purposes. An Application must have one or more [Application Instances](application-instance) before it can be used in a [Test Configuration](test-configuration).

## Properties
| Name       | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| Name       | The name of the corresponding project in Mendix teamserver.              |
| Project ID | The unique identifier of the corresponding project in Mendix teamserver. |

## Business rules
- An MTA user must have a Mendix API Key registered in MTA in order to get Application information from Mendix teamserver. 

To learn more about configuring an MTA user, read the How To section.

## Actions on an Application

### View Applications in use by MTA
- Go to the "Applications" page to view all Applications that are used in MTA.

### Register Application in MTA
- Go to the "Applications" page .
- Click on <i class="fal fa-plus-circle"></i> Add.
- Select the Application you want to Add.

### View Project ID
- Go to the "Applications" page.
- Click on <i class="fal fa-info-circle"></i> to view the Project ID.

### Unregister Application from MTA
- Go to the "Applications" page .
- Click on ... for the Application you want to unregister.
- Click <i class="fal fa-trash-can"></i> Delete.

## Related topics
- [Application Instance](application-instance)
- [Application Revision](application-revision)
- [Test Setting](test-setting)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 8 december 2022