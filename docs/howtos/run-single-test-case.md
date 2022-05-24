# Run a single Test Case

## Definition

This document describes how to test a single Test Case.

In MTA, the level where the test script is executed is the highest level in the hierarchy, being the Test Configuration. It is currently not possible to exclude Test Suites in a Test Configuration or exclude Test Cases in a Test Suite from being executed. The only workaround to test a single Test Case is to copy it into an empty Test Suite, in another Test Configuration, containing only that Test Suite.

There could be two scenario's where it is necessary to run a single Test Case: while creating a unit test and while creating a process test. Please read the respective Best Practice documents for this.
1. [Unit Test](../bestpractice/unittest)
2. [Process Test](../bestpractice/processtest)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 may 2022