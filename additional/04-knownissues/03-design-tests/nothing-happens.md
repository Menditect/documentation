# Nothing happens when starting action

## Issue summary

While working in MTA and trying to start any of below actions:
- [Execute a Test Configuration](../../../test-configuration#execute-a-test-configuration)
- [Execute a Test Suite](../../../test-suite#execute-a-test-suite)
- [Execute a Test Case](../../../test-case#execute-test-case)
- [Download a revision](../../../application-revision#change-the-application-revision-for-a-test-configuration)
- [Adapting Test Suites to a downloaded revision](../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision)

in some occasions, it may seem like nothing happens.

## Possible causes and resolutions

### Too many asynchronous processes are running simultaneously

When executing any of above mentioned actions, they are executed in the background by MTA. To prevent MTA from running out of memory because some processes use up a lot of resources, these actions can only be ran simultaneously 3 or 4 times. If someone tries to run another action of the same type, nothing seems to happen right away. This does not mean the action will not be started; MTA will wait until one of the running processes ends to start a new one. Given the nature of these actions however, this could take a couple minutes.

**Resolution**

In short; wait a little longer, or cancel the action and try again when fewer users are working in MTA. Or: contact other endusers working in MTA to see if their process can be cancelled, because (for example) a connected debugger has frozen a Test Run with a breakpoint.

If a process takes longer than an hour and does not seem to progress, [contact support](mailto:support@menditect.com).