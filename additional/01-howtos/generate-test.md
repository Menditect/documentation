# Generate a test

## Definition

This document describes how to generate tests. 

Generating tests is implemented in different pages and levels in MTA. The aim of generating a test is to speed up test scripting, by using the Mendix model information available to MTA.

## Test a microflow

It is possible to automatically generate teststeps to test a microflow. Teststeps will be generated to fill the input parameters of the microflow and the last teststep generated will call the microflow.

The generated teststeps will appear in a new test case inside a selected test suite, or in the test case where you are working in. This depends on from where the generating is done, because there are two ways to generate teststeps for testing a microflow:
- Navigate to "Mendix Model" in the Test Configuration. Select one or more microflows to generate a test case for. Using this option, it is possible to generate multiple test cases in a test suite, at once.
- Click on "Generate test by microflow" while working in a Test Case. Select a single microflow to generate teststeps for. Using this option, you can combine manually created teststeps with generated teststeps in the same test case.

Teststeps will be generated to fill any Object or List parameters of the microflow. Parameters can be filled using values from a database. Therefore it can be needed to select a running [Application instance](../../application-instance).
If the object is nonpersistable, or if the database does not contain any objects of the necessary entity, MTA will use random values for the Object's attributes. 

*Primitive* microflow parameters will always be filled with random values. This means that, if the microflow has no Object or List parameters, the result of a generated test case will always be only the teststep that calls the selected microflow.

## Record and replay user actions

It is possible to generate teststeps based on recorded user actions, by creating a [Recording](../../recording). By executing the resulting teststeps, the recorded actions are essentially replayed.

## Fill attributes values

### Generate random values for attributes

- For Create teststeps, see [Reference guide for Create teststep](../../Teststep/create#generate-random-values) 
- For Change teststeps, see [Reference guide for Change teststep](../../Teststep/change#generate-random-values)

### Use database values for attributes

- For Create teststeps, see [Reference guide for Create teststep](../../Teststep/create#generate-assignments-from-database)
- For Change teststeps, see [Reference guide for Change teststep](../../Teststep/change#generate-assignments-from-database)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 January 2024