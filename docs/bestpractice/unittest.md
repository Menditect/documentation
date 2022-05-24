# Unit testing

## Definition

In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation.

A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there.

## Structure

Recommended best practice is create a draft version of a unit test that can be executed without testing other functions in the same Test Configuration. When the unit test becomes final, it is best to move it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected. This is described below. The Test Configuration can then be easily used in a regression test. 

A draft unit test in MTA typically looks like this:
- only one Test Suite;
- only one Test Case, where either Security is set to Off (because it's about testing the algorithm and not the User) or multiple copies of the same Test Case with different Execution Users;
- one or more Teststep(s) creating objects (or microflow calls creating objects);
- one or more Teststep(s) calling a microflow where some algorithm is performed, with the object(s) as a parameter;
- one Teststep retrieving the results and containing asserts.

A final unit test in MTA typically looks like this:
- many Test Cases, completely independent from each other (not using "from previous teststep" across Test Cases);
- many Test Suites that represents a certain part of the software (for instance 'CRM').

### Finalizing a Unit Test

Finalizing a Unit Test means moving it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected.

1. Navigate to the Test Design (home)page and select the Test Configuration containing the draft unit test
2. Use the <i class="fa fa-copy" ></i> button on the Test Suite to copy the Test Suite
3. Expand the "Choose another test configuration, if the test suite should not be copied to the current test configuration:" groupbox, and select the container Test Configuration as target
4. Navigate to the container Test Configuration and open the Test Suite copy
5. Use the <i class="fa fa-copy" ></i> button on the Test Case to copy the Test Case
6. Expand the "Choose another test suite, if the test case should not be copied to the current test suite:" groupbox, and select an existing relevant Test Suite as target
7. Navigate to the Test Design (home)page 
8. Delete the Test Configuration from step 1 using the <i class="fa fa-trash-alt" ></i> button (since the actual intention was to move it, not to copy it)

## Tips and tricks

Below steps are optional, not mandatory, but will make it much easier to unit test.

- First, make sure the microflow or microflows to be tested, have a **single responsibility**. This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. 
- If it can be avoided, **do not commit** any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation.
- **Reuse existing masterdata** that is necessary to test, instead of creating it from scratch. 
- **Include asserts** to check the results, for all attributes that are subject to mutation in the microflow.
- **Create datavariation**, to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022