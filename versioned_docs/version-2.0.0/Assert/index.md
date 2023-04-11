# Assert

## Definition

An Assert is a claim that a certain fact has to be true. It is defined on the [Teststep](../Teststep) level to check during test execution, if a certain output matches a given value.

Each Assert is evaluated after the execution of a Teststep. A Teststep execution fails when the evaluated value does not match to the defined expectation. 

Read more about dealing with failed [Test Runs](test-run) in the How To section.

There are three types of Asserts, that are described in detail in separate pages:
1. [Assert on Attribute](Assert/assert-attribute)
2. [Assert on Microflow output](Assert/assert-microflow-output)
3. [Assert on Object count](Assert/assert-object-count)

## Actions on Assert

### View Teststeps that have Asserts 
- All Teststeps in a [Test Case](../test-case) with one or more Assert, are marked with "<i class="fas fa-ballot-check"></i>" in the list of Teststeps.
