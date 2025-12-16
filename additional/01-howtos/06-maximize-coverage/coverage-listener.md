---
sidebar_class_name: hidden
---

# Coverage listener

This document describes how to use MTA to detect executed microflows while you are working in the pages of your Test [Application](../../../mta/application).

It is possible to enable a so-called coverage listener on an [Application Instance](../../../mta/application-instance). You can use this to measure the code coverage of a test that is being done on the front-end of your app, either manually or automated. 

The steps are as follows:
- Create a [Test Case](../../../mta/test-case)
- In the Settings, set the [Execution User](../../../mta/execution-user) to 'MxAdmin' and *Apply Security* to "No"
- Also, set the *Execution time-out* slightly higher than you expect your test to take (for example, 960 for 16 minutes)
- Save the Test Case Settings
- Add a [Persist Teststep](../../../mta/Teststep/persist)
- [Edit the Teststep](../../../mta/Teststep#edit-a-teststep)
- Set the *Delay after execution* to slightly lower than the value you entered for the Test Case *Execution time-out* (for example, 950000 for 15 minutes, 50 seconds)
- Save the Teststep.
- Execute this Test Case using the relevant [Test Setting](../../../mta/test-setting).

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated October 2024