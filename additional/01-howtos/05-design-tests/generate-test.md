# Generate a Microflow test

## Definition

This document describes how to make MTA generate a Microflow test, as opposed to creating one manually. 

## Generate Test

This feature enables you to generate a test just like when inside a test suite, but for multiple microflows at once.

You can choose to generate based on random data, or to use from existing data from a database.

Steps:
- Navigate to "Microflows" after opening a [Test Configuration](../../../mta/test-configuration).
- Select the microflow(s) to generate a Test Case for.
- Choose to either generate a Test Case with random data, or from database.
- When choosing from database, select the [application instance](../../../mta/application-instance).
- Optionally open and configure (one of) the test case(s) from here.

A few notes:
- Teststeps will be generated to fill any Object or List parameters of the microflow. Parameters can be filled using values from a database. Therefore it can be needed to select a running [Application instance](../../../mta/application-instance).
- Only when choosing *from database*, MTA will generate "Create object" teststeps for associations as well.
- If the object is nonpersistable, or if the database does not contain any objects of the necessary entity, MTA will use random values for the Object's attributes. 
- *Primitive* microflow parameters will always be filled with random values.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 9 April 2024