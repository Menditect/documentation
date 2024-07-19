# Test Run timeout

## Issue summary

When executing a Test, the test run times out. After that, an error is shown in the test run results, but does not clarify why the time out occured.

## Possible causes and resolutions

### Infinite loop in Microflow

It is possible you have run into a (for or while) loop in your Mendix code. A microflow may be running endlessly, because data that was supposed to end the loop did not have the expected values.

**Resolution**

Use the Mendix debugger to check if the loop does not endlessly run.