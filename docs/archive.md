---
sidebar_position: 7
---

# Archive

## Definition

If enabled, the Archive function is meant for MTA customers that require that their [Test Run](test-run) results are persisted over a longer period of time. 
Every Test Run (regardless of the result) is stored in a hierarchical JSON string in an Archive Event. 

However, **only Test Runs of the Full Test Configuration** are archived.

Archive Events are stored in MTA for a trailing period of one year. 

The information in Archive Events can be used for auditing purposes, for example.

:::note
If enabled, the Archive function has a slight negative effect on MTA performance.
:::


## Properties (Archive Event)
| Name        | Description                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Timestamp   | Date and time of the occurence of the Archive Event.                                                                                                                                                          |
| Event type  | TestRunArchive: a Test Run that finished was stored in an Archive Event.<br/> TestRunArchiveEnabled: someone enabled the Archive function.<br/>TestRunArchiveDisabled: someone disabled the Archive function. |
| Description | Information that identifies the Archive Event. This could be the Account name of the person who enabled or disabled the Archive function, or information about the Test Run.                                  |
| Content     | The content of the Archive Event.                                                                                                                                                                             |  |

## Business rules

None.

## Actions on an Application


### Toggle Archive in MTA
- Login as an MTA Manager.
- Navigate to "MTA management", "MTA settings".
- Slide the "Test run archive" to either the Enabled or Disabled setting. 

### View Archive in MTA
- Navigate to "Archive".
- Use the filter options to find a specific Archive Event.

## Related topics
- [Test Run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 23 may 2023