# Change Application

## Definition

This document helps you if you have built one or more [Test Cases](../../../test-case) for testing an [Application](../../../application), but for some reason you need to change the Application on that Test Case. For example, if: 
- a Mendix Model was migrated to another physical Mendix App, or 
- an App is split up into multiple microservices, or
- one or more Modules in the Mendix Model are (also) used in another App.

Changing the Application on a Test Case is not possible in MTA out-of-the-box, but you can [Import a Test Suite from a Test Configuration](../../../test-suite#import-a-test-suite-from-another-test-configuration-and-application) testing a different Application, and MTA will try to map the Mendix Model elements in the other Application.

## Steps 

Assuming the situation where there is one source Test Configuration testing Application "A", and the model elements in "A" now present in Application "B".

If there is only 1 Test Case to be copied, first copy that Test Case in it's own Test Suite.

1. Create a Test Configuration and link "B".
2. Choose [Import a Test Suite from a Test Configuration](../../../test-suite#import-a-test-suite-from-another-test-configuration-and-application).
3. MTA will not continue with [Construction Errors](../../../construction-error) if model elements cannot be found; instead, if that happens, first move the "problematic" Test Case to a different Test Suite.
4. Perform this for all the Test Suites in the source Test Configuration.

:::info
Importing is not possible if there is more than 1 Application linked in the *source* Test Suite.

If there is more than 1 Application linked in the *target* Test Configuration, MTA will ask which Application to map the Mendix Model elements to during the Import process.
:::

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 October 2024