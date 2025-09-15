# Generate a test

## Definition

This document describes how to make MTA generate tests, as alternative to creating tests manually. 

You can generate a test from Mendix Studio Pro, or from inside MTA. The aim of generating a test is to speed up test scripting, by using the Mendix model information available to MTA.

## From Mendix Studio Pro

The [Menditect Call Hierarchy extension](../connect-mta/use-microflow-call-hierarchy-extension) can be used to generate tests from Mendix Studio Pro.

First, make sure to [connect the extension to MTA](../connect-mta/connect-menditect-extension-to-mta).

### Generate Test

To generate a new Test Case, that will execute a specific microflow from the Mendix model:
- [Open the Microflow Call Hierarchy tab](../connect-mta/use-microflow-call-hierarchy-extension#microflow-call-hierarchy) for a specific microflow
- Click on the <i class="fal fa-circle"></i> icon, on the left of the microflow name, or right-click on the microflow name and select "Generate Test"
- Select which [Test suite](../../../test-suite) to use, to store the new [Test Case](../../../test-case).

MTA will create a new Test Case for the microflow, and Studio Pro will open a new tab showing MTA, containing the new Test Case.

:::info
If the microflow that you have selected is new, you first have to commit it, [download the new revision](../../../application-revision#change-the-application-revision-for-a-test-configuration) and [adapt the test suites in MTA](../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision).<br/>
:::

### Edit Test

The Test Case that MTA generates will execute the microflow, and prepare data that the microflow needs for it's parameters. The data that is used is *randomly generated*. It is not yet possible to use database data, that is only possible from [inside MTA](#in-mta). Therefore, you may want to edit the data for the microflow parameters. For security reasons, the MTA tab is read-only. 

To Edit the Test Case that MTA has generated, just click on the <i class="fas fa-external-link"></i> button in the MTA tab. MTA will open in a new browser window, showing the Test Case that was generated. Here you can [edit teststeps](../../../Teststep), add [asserts](../../../Assert) and add [data variation](../../../datavariation).

### Run Test

If your application is running in Studio Pro, and the [Plugin is connected to MTA](../connect-mta/import-plugin), you can now run your test. 

Just click on "Execute test case" button in the MTA tab.

### View Test

To view an existing Test Case that executes a specific microflow from the Mendix model:
- [Open the Microflow Call Hierarchy tab](../connect-mta/use-microflow-call-hierarchy-extension#microflow-call-hierarchy) for a specific microflow
- Click on the <font color="#5BDB5B"> <i class="fas fa-circle"></i> </font> icon, on the left of the microflow name, or right-click on the microflow name and select "View Test"
- Select the [Test Case](../../../test-case) that contains the [microflow teststep](../../../Teststep/microflow) that calls the microflow.

Studio Pro will open a tab showing MTA, containing the Test Case.

## In MTA

### Generate Test

It is possible to automatically generate teststeps to test a microflow. Teststeps will be generated to fill the input parameters of the microflow and the last teststep generated will call the microflow.

The generated teststeps will appear in a new test case inside a selected test suite, or in the test case where you are working in. This depends on from where the generating is done, because there are two ways to generate teststeps for testing a microflow:
- Navigate to "Mendix Model" in the Test Configuration. Select one or more microflows to generate a test case for. Using this option, it is possible to generate multiple test cases in a test suite, at once.
- Click on "Generate test by microflow" while working in a Test Case. Select a single microflow to generate teststeps for. Using this option, you can combine manually created teststeps with generated teststeps in the same test case.

Teststeps will be generated to fill any Object or List parameters of the microflow. Parameters can be filled using values from a database. Therefore it can be needed to select a running [Application instance](../../../application-instance).
If the object is nonpersistable, or if the database does not contain any objects of the necessary entity, MTA will use random values for the Object's attributes. 

*Primitive* microflow parameters will always be filled with random values. This means that, if the microflow has no Object or List parameters, the result of a generated test case will always be only the teststep that calls the selected microflow.

### Record Test

It is possible to generate teststeps based on recorded user actions, by creating a [Recording](../../../recording). By executing the resulting teststeps, the recorded actions are essentially replayed.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 9 April 2024