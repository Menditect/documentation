# Run a single Test Case

## Definition

This document describes how to test a single Test Case.

In MTA, the level where the test script is executed is the highest level in the hierarchy, being the Test Configuration. It is currently not possible to exclude Test Suites in a Test Configuration or exclude Test Cases in a Test Suite from being executed. The only workaround to test a single Test Case is to copy it into an empty Test Suite, in another Test Configuration, containing only that Test Suite.

The steps to achieve this are as follows:
- Edit the Test Case in MTA that needs to be single-tested using the <i class="fa fa-pencil" ></i> button
- Note the Test application that is selected for the Test Case
- Navigate to the Test Design (home)page
- Create a Test Configuration, and add the Test application that was noted
- Navigate back to the Test Configuration that contains the Test Case to be single-tested
- Create a Test Suite in this Test Configuration
- Navigate to the Test Suite that contains the Test Case to be single-tested
- Select that Test Case
- Use the <i class="fa fa-copy" ></i> button on the Test Case to copy the Test Case
- Expand the "Choose another test suite, if the test case should not be copied to the current test suite:" groupbox, and select the Test Suite that was just created as target
- Navigate back to the Test Configuration (tip: use the breadcrumb feature on top of the Test Cases list, and click on "Test design overview")
- Move the mouse over the Test Suite containing the single Test Case, to make the action buttons visible
- Use the <i class="fa fa-copy" ></i> button on the Test Suite to copy the Test Suite
- Expand the "Choose another test configuration, if the test suite should not be copied to the current test configuration:" groupbox, and select the empty Test Configuration that was created before as target
- Delete the original Test Suite using the <i class="fa fa-trash-alt" ></i> button (since the intention was to move it, not to copy it)
- Now it is possible to Execute the newly created Test Configuration, with only one Test Suite, with only one Test Case.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 may 2022