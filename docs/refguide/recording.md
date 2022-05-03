# Recording

This document is based on MTA version 1.6.

## Definition

A Recording is meant to speedup test scripting and should be used as the starting point of a Test Case. A Recording is created by MTA and consists of one or more [Teststeps](teststep) in a single [Test Case](test-case). MTA bases these Teststeps on intercepted user actions that are executed on an [Application Environment](application-environment).

## Properties
| Name | Description |
| ----------- | ----------- |
| Max. duration recording (s) | The number of seconds that MTA will intercept user actions before the recording times out. |
| Max. number of recorded actions | The maximum number of intercepted user actions to store in MTA. |

## Business rules
- If the recording times out, no Teststeps will be created. 
- If more user actions are intercepted than the set maximum, Teststeps will be created based until the maximum is reached.

Note that one recorded action can lead to zero or many Teststeps, and that the 'Max. number of recorded actions' is not the same as the maximum number of created Teststeps.

## Actions on a Recording

### Create a Recording

- Click on <i class="fas fa-video"></i> ("Create a recording") in the Test Case to open the recording page.
- Click "Start recording".
- In the browser, navigate to the Test Application.
- Perform the actions to be recorded there. Make sure to start the recorder before opening the page where the first record action takes place.
- In the browser, navigate back to MTA.
- Click "Stop recording".

The recording page will close and the Teststeps created by the recorder will appear automatically. 

Learn more about creating Recordings in the How To section.

## Related topics
- [Application Environment](application-environment)
- [Test Case](test-case)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 may 2022