# Assert

## Definition

An Assert is a claim that a certain fact has to be true. 
Asserts are defined on the [Teststep](../Teststep) or [Test Case](../test-case) level to check during test execution, if a certain output matches a given value.

Each Assert is evaluated after the execution of a Teststep or Test Case. The evaluation will fail when the evaluated value does not match to the defined expectation, but the execution will continue. 

Read more about dealing with failed [Test Runs](test-run) in the How To section.

There are four types of Asserts, that are described in detail in separate pages:
1. [Assert on Attribute](Assert/assert-attribute)
2. [Assert on Microflow output](Assert/assert-microflow-output)
3. [Assert on Object count](Assert/assert-object-count)
4. [Assert on Validation feedback](Assert/assert-validation-feedback)

## Actions on Assert

Some actions are described in the pages shown above.

### View Asserts on Attribute, Microflow output or Object count  
- Open the Test Configuration and [Test Suite](../test-suite) that you want to design.
- Teststeps in a [Test Case](../test-case) with one or more Assert, are marked with <i class="fas fa-ballot-check"></i> in the list of Teststeps.
- Click on the <i class="fas fa-ellipsis"></i> button on the Teststep and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured.   

### View Asserts on Validation feedback
- Open the Test Configuration and Test Suite that you want to design.
- Test Cases in a Test Suite with one or more Assert, are marked with <i class="fas fa-ballot-check"></i> in the list of Test Cases.
- Click on the <i class="fas fa-ellipsis"></i> button on the Test Case and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured.   
