---
sidebar_position: 5
---

# Application Branch

## Definition

A copy of an [Application](application) codeline, managed with Mendix teamserver. Information about an Application Branch is imported from teamserver by MTA. 

See [Mendix documentation](https://docs.mendix.com) for more information about branches. 

## Properties
| Name | Description                         |
| ---- | ----------------------------------- |
| Name | The name of the Application Branch. |

## Business rules

- The Application Branch information cannot be deleted from MTA if [Application Revision](application-revision) information still exists in the branch.

## Actions on Application branch

In MTA version 2.0, Application Branches are only used to select an [Application Revision](application-revision) for a [Test Configuration](test-configuration).

## Related topics
- [Application](application)
- [Application Instance](application-instance)
- [Application Revision](application-revision)
- [Test Application](test-application)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 2 december 2022