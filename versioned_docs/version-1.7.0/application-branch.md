# Application Branch

This document is based on MTA version 1.7.

## Definition

A copy of an [Application](application) codeline, managed with Mendix teamserver. Information about an Application Branch is imported from teamserver by MTA. 

See [Mendix documentation](https://docs.mendix.com) for more information about branches. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Application Branch. |

## Business rules

- The Application Branch information cannot be deleted from MTA if [Application Revision](application-revision) information still exists in the branch.

## Actions on Application branch

### View Application branches for an Application
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application).
- Navigate to the "Application branches & revisions" tab to view the Application Branches.

### Delete an Application branch for an Application
- Navigate to the "Application branches & revisions" tab to view the Application Branches.
- Click <i class="fas fa-trash-alt"></i> next to the Application Branch name to delete the information about it from MTA.

## Related topics
- [Application](application)
- [Application Environment](application-environment)
- [Application Revision](application-revision)
- [Test Application](test-application)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 12 july 2022