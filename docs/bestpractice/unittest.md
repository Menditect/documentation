# Unit testing

In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation.

A unit test typically exists of only one testcase and looks like this:
- one test step creating an object (or calling a microflow, which creates the object);
- one or more test step(s) calling a microflow, with the object as a parameter;
- one test step retrieving the results and containing asserts.

Below steps are optional, not mandatory, but will make it much easier to unit test.

- First, make sure the microflow or microflows to be tested, have a **single responsibility**. This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. 
- If it can be avoided, **do not commit** any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation.
- **Reuse existing masterdata** that is necessary to test, instead of creating it from scratch. 
- **Include asserts** to check the results, for all attributes that are subject to mutation in the microflow.
- **Create datavariation**, to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022