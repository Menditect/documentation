# Record actions

## Definition

For many user actions performed in the [Application](../../mta/application), it is possible to record these actions in MTA, and have MTA convert them to either Object [Teststeps](../../mta/teststep) or Microflow Teststeps, using the Recorder function. 

There are multiple advantages to using the Recording over creating teststeps by hand:
- Speed;
- Certainty that the created teststeps will match the user flow, and that the user will have access;
- Gaining insights in the performance and code quality of your Mendix model.

Despite these advantages, there can be scenario's that creating teststeps by hand is preferred:
- When the person creating the recorder is also the one writing the code being tested;
- When creating a unit test. 

This document describes what aspects to consider when creating such a recording.
Other documents about this topic are:
- [Recording](../../mta/recording) in the reference guide.
- [Complete recorded actions](../howtos/design-tests/record-user-actions) in the How to section.
 
## Guidelines

Before starting the recording, it is useful to follow these guidelines first.
- Create a draft first using a simple text tool like notepad. Keep the transaction that you want to record as small as possible, that way there is a higher chance that the Recorder will get it right in one try. Use a numbered list to describe each step the user takes. Take double the amount of steps as the "Max. number of recorded actions" for the recording.
- Prepare your project for recording, following the the steps below.
- Select an appropriate [Test Case](../../mta/test-case). You can choose to create multiple recordings and merge them in the same Test Case. This is described further in the How to section.
- Make sure the [Execution User](../../mta/execution-user) for the selected Test Case exists, is active and not blocked.
- Navigate to the Recorder page and set the "Max. number of recorded actions".
- Start the recorder.
- Login to the Test Application using the Execution User for the selected Test Case and follow the steps described in the draft. You can also start the recorder when already logged in, but if microflows are executed to determine the context of the (home)page, this may result in errors.
- When making a mistake during the recording, it is sometimes best to restart the process, otherwise the result will contain unwanted or duplicate steps.
- Stop the recording.
- Execute the Test Configuration (provided there are no errors) to check the result.
- Follow the steps described in the How to section to make the teststeps complete.

## Preparations

### Microflow page calls

To prepare microflows with "Show page" activities, read [this section](../howtos/configure-mta/prepare-mendix-project).

### Recurring patterns

Sometimes the Recording result contains numerous changes of the same object, or calls to the same microflow. This can be the result of an on change event on a page element or a microflow in a list view, causing the same microflow to be called multiple times. To avoid this kind of pattern repetition, it is best to work with small amounts of test data. 

### Object handling in microflows

If an object is created or changed by a microflow the recorder will create a Microflow Teststep calling that creation microflow. If the object is subsequently committed by a microflow, the recorder will create a second Microflow Teststep calling that save microflow. Also, the recorder will create a Change Object Teststep between the two Microflow Teststeps, where the values set in the page by the user are set.

Therefore, creating and saving objects using microflows is preferred over using page actions.

## Limitations

### Retrieve 

If the Menditect Plugin Module intercepts more than 8MB of data during a running recording, the recording will fail. 

The cause of this could be that the test application is retrieving:
- a large number of objects (more than 100), or
- objects with a lot of attributes (more than 100), or
- large attribute values (string attributes with more than 100 characters or unlimited), or
- a combination of above. 
 
Microflows that return more than 8MB of data, or front-end retrieve-from-database actions (in a datagrid / listview / nanoflow) that return more than 8MB of data, will consecutively break the recording.

Redesign your microflows, nanoflows and page retrieve actions. Consider retrieving only a subset or using paging. Challenge design decisions if these amounts of data are sent to your application's front-end. If not sure what is causing the issue, use the [Mendix debugger](https://docs.mendix.com/refguide/debug-microflows-and-nanoflows/) to check how much data is being retrieved from the database. 

### Rollback 

If an object is created and subsequently rolled back by the page and not by a microflow (for instance using a "Cancel changes" button in Mendix) it is not possible for the recorder to determine this rollback has taken place. 
- If testing the rollback action is the goal of the Test Case, it is advisable to include a Rollback action in a microflow and not in the page. 
- Otherwise for obvious reasons, it is advisable to only record actions that are part of the test. 

### Delete

Deletes are not yet part of the recorder. 
- If an object is deleted either in a microflow or in a page, manually include a Delete Object Teststep, and a subsequent Persist Object Teststep to finalize the delete.


## Important notes
- Only actions performed by the user that is set as the execution user will be recorded.
- No other users should login under the same username on the test environment while recording.
- Microflows used as datasource will not result in a Microflow Teststep, but in a Retrieve Object Teststep, and only if the object is used.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 2 june 2022