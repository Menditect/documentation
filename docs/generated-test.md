---
sidebar_position: 12
---


# Generated test

Test generation is meant to speedup test scripting and can be used as a starting point for building any Test Case. 

There are two types of generated tests, the result of both being a set of Teststeps in a single Test Case:
1. Generated test by recording;
2. Generated test by microflow. 

**Recording**<br/>
It is possible to automatically generate Teststeps by creating a recording. MTA bases these Teststeps on intercepted user actions that are executed on an [Application Instance](application-instance). 

**Microflow**<br/>
It is possible to automatically generate Teststeps by selecting a microflow. Teststeps will be generated to fill the input parameters of the microflow and the last teststep generated will call the microflow.

## Properties (recording)
| Name                            | Description                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| Max. duration recording (s)     | The number of seconds that MTA will intercept user actions before the recording times out. |
| Max. number of recorded actions | The maximum number of intercepted user actions to store in MTA.                            |

## Business rules (recording)
- If the recording times out, no Teststeps will be created. 
- If more user actions are intercepted than the set maximum, Teststeps will be created based until the maximum is reached.

Note that one recorded action can lead to zero or many Teststeps, and that the 'Max. number of recorded actions' is not the same as the maximum number of created Teststeps.

## Actions

### Create a Recording

- Click on "<i class="fas fa-wand-magic-sparkles"></i> Generate test" in the Test Case.
- Select "<i class="fas fa-wand-magic-sparkles"></i> Generate test by recording" to open the recording page.
- Click "Start recording".
- In the browser, navigate to the Test Application.
- Perform the actions to be recorded there. Make sure to start the recorder before opening the page where the first record action takes place.
- In the browser, navigate back to MTA.
- Click "Stop recording".

The recording page will close and the Teststeps created by the recorder will appear automatically. 

Learn more about creating Recordings in the How To and Best Practice sections.


### Create a Microflow test

- Click on "<i class="fas fa-wand-magic-sparkles"></i> Generate test" in the Test Case.
- Select "<i class="fas fa-wand-magic-sparkles"></i> Generate test by microflow" to open the microflow selection page.
- Select a microflow.

MTA will now generate Teststeps. Teststeps generated to fill the parameters of the microflow will contain random values, or values from the database if the parameter is an Object. Note that if the object is nonpersistable, MTA will not be able to generate a teststep to fill it.

## Related topics
- [Application Instance](application-instance)
- [Test Case](test-case)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023