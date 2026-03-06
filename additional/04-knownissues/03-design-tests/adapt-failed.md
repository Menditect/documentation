# Adapt failed

## Issue summary

This document describes how to recover from a "frozen" or failed [Adapt Test Configuration](../../../mta/application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision) action.

Note that if Adapting a Test Configuration leads to [Construction Errors](../../../mta/construction-error), this document is not applicable; you will need to solve the Construction Errors instead. 

An Adapt action was triggered, either by an MTA user or by calling the [API endpoint](../../../api#post-adapt-testconfiguration-to-revision).

Instead of successfully adapting the [Test Configuration](../../../mta/test-configuration) to the [Application revision](../../../mta/application-revision), an error is shown:
- <font color="#CA2834" <i class="fa-solid fa-exclamation-circle"></i></font> An error occured while adapting a revision. Please contact support

When clicking the "Retry adapt to next revision" button, a popup message is displayed:
- Cannot adapt the given test configuration, because test configuration {name} is being adapted. 

## Possible causes and resolutions

### Not sufficient resources

MTA did not have sufficient resources available at the time of starting the Adapt process. This can be verified by analyzing the application log file from the Mendix server where MTA is hosted, because most likely MTA will have restarted during the Adapt process. Also the metrics of the Mendix server should indicate a spike at that same time.

**Resolution**

Prior to starting the Adapt process, MTA created a [Snapshot](../../../mta/snapshot) of the Test Configuration. This Snapshot can be [restored](../../../mta/snapshot#restore-a-snapshot), which will create a copy of the same Test Configuration, but in the state before the Adapt process started.

### Concurrency

The Adapt process may be started in different sessions simultaneously, too many times. Check the "Running now" section in the Mendix server where MTA is hosted to see if there are still microflows running. Also consult this known issue: [Nothing happens](nothing-happens).

### Data problem

During the execution of the Adapt process, MTA encountered a problem with the data of one of the [Teststeps](../../../mta/Teststep/) in the Test Configuration. Because MTA checks all data against a set of business rules, the execution was stopped. Note that MTA will not have restarted, but there should be a note in the application log that one of these business rules failed.

**Resolution**

Contact support.

