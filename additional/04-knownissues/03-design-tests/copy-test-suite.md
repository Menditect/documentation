# Copy Test Suite

## Issue summary

In MTA 2.8, it is sometimes not possible to [copy](../../../test-suite#copy-a-test-suite-from-another-test-configuration) or [duplicate](../../../test-suite#duplicate-a-test-suite) a [Test Suite](../../../test-suite).

The issue occurs when the Test Suite contains one or more [Teststeps](../../../teststep) where a value is filled with the output from a previous Teststep.

Using this "Use a former teststep to set an attribute value" will block the Copy or Duplicate action.


## Possible causes and resolutions

The cause is known and will be fixed in the next MTA release.

**Resolution**

Before copying the Test Suite, temporarily fill the attribute with a fixed value.

After copying, set the value from the previous teststep again, in both the copy and the original Test Suite.