---
sidebar_position: 15
---

# Snapshot

## Definition

A Snapshot is the condition of the Test design in a [Test Configuration](test-configuration) that has been adapted to a certain [Application Revision](application-revision).

Every time a Test Configuration is adapted, a Snapshot is created, to allow restoring the Test design to the condition before the adapt.

Restoring a Snapshot will only restore the Test design, the [Test Runs](test-run) will remain in the original Test Configuration.

## Actions on Snapshot

### Create a Snapshot

A Snapshot is created automatically before the [Test Suites](test-suite) in a [Test Configuration](test-configuration) are adapted to an [Application Revision](application-revision).

### Restore a Snapshot

Restoring the Design of a Test Configuration using a snapshot will allow to **undo an Adapt**. 

The result of this action will be:
- **A new [Test Configuration](test-configuration)** that is based on a previously selected [Application Revision](application-revision) is created and opened. <br/>It will be named `"Restored" - {timestamp} - {Original name}`. To change the name, [Edit](test-configuration#edit-a-test-configuration) the Test Configuration.
- **The original Test Configuration** will contain the executed [Test Runs](test-run). To view the executed Test Runs, open that Test Configuration.

## Related topics
- [Test Configuration](test-configuration)
- [Application Revision](application-revision)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 29 september 2023