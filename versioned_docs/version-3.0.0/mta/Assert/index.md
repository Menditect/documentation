
# Assert

## Definition

An Assert is a claim that a certain fact has to be true. 
Asserts are defined on the [Teststep](Teststep) or [Test Case](test-case) level to check during test execution, if a certain output matches a given value.

Each Assert is evaluated after the execution of a Teststep or Test Case. The evaluation will fail when the evaluated value does not match to the defined expectation, but the execution will continue. 

Read more about dealing with failed [Test Runs](test-run) in the How To section.

There are four types of Asserts, that are described in detail in separate pages:
1. [Assert on Attribute](Assert/assert-attribute)
2. [Assert Exception](Assert/assert-exception)
3. [Assert on Microflow output](Assert/assert-microflow-output)
4. [Assert on Object Count](Assert/assert-object-count)
5. [Assert on Validation feedback](Assert/assert-validation-feedback)

## Actions on Assert

Some actions are described in the pages shown above.

### View Asserts
- Open the [Test Configuration](test-configuration) and [Test Suite](test-suite) that you want to design.
- [Test Cases](test-case) and [Teststeps](Teststep/) that have an Assert are marked with a colored `Assert` tag.
- The `Assert(s)` tab in the selection details shows more information.

### Add an Assert

Read one of the mentioned detail pages above to learn how to add asserts.

### Stop a Test Run when an assert fails

To indicate to have MTA stop the rest of the Test Run when an assert fails, select `Stop the test run` from the `When the assert fails:` dropdown on the respective Assert, whenever adding or editing the Assert.

**Note:** when an Assert fails, and `Stop the Test Run` is selected, this means that the next [Test Case](test-case) will not be executed.
Remaining [Teststeps](Teststep/) will be executed, unless a [Teststep Exception](teststep-exception) occurs and [Teststep Exception handling](Teststep#exception-handling) is set to `Stop`.

## Related topics
- [Data Variation](datavariation)
- [Test Run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 29 November 2023