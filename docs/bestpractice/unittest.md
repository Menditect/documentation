# Unit testing

In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation.

A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there.

A unit test in MTA typically looks like this:
- only one Test Case, where either Security is set to Off (because it's about testing the algorithm and not the User) or multiple copies of the same Test Case with different Execution Users;
- one or more Teststep(s) creating objects (or microflow calls creating objects);
- one or more Teststep(s) calling a microflow where some algorithm is performed, with the object(s) as a parameter;
- one Teststep retrieving the results and containing asserts.

Below steps are optional, not mandatory, but will make it much easier to unit test.

- First, make sure the microflow or microflows to be tested, have a **single responsibility**. This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. 
- If it can be avoided, **do not commit** any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation.
- **Reuse existing masterdata** that is necessary to test, instead of creating it from scratch. 
- **Include asserts** to check the results, for all attributes that are subject to mutation in the microflow.
- **Create datavariation**, to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022