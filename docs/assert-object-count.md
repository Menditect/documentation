---
sidebar_position: 9
---

# Assert on Object Count

## Definition

An assert on object count is defined on a [Teststep](teststep) and exists of making a comparison between the expected and actual list size of output objects of a Teststep upon test execution.

Asserts on object count can be defined either on Retrieve Object Teststeps or on Microflow Teststeps that return a list of objects. 

## Properties
| Name                  | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Compare type          | The type of comparison to be made: either 'Equals', 'Greater-than' / 'Greater-than or equal to' or 'Less-than' / 'Less-than or equal to'. |
| Expected object count | The expected value of the attribute when executing the test.                                                                              |

## Business rules
- The compare type is mandatory.
- Expected object count is mandatory.
- Expected object count must be equal to or greater than 0.

## Actions on Assert Object Count

### View Teststeps that have asserts 
- All [Teststeps](teststep) in a [Test Case](test-case) that have one or more asserts added, are marked with <i class="fas fa-ballot-check"></i> in the list of Teststeps.

### Add an assert on Object Count
There are multiple ways to add an assert on Object Count:
1. When hovering the mouse on the Teststep, click on <i class="fas fa-ballot-check"></i> to open the page where asserts can be configured;
2. After configuring the Teststep, click on "Save and configure asserts" to open the page where asserts can be configured in bulk for all the attributes in the Teststep.
After the page opens, go to the Teststep output tab, and click on "*+ Assert*" to add the assert.

### Configure an assert on Object Count
- Select a compare type; 'Equals', 'Greater-than' or 'Less-than'.
- Enter an expected object count.
- Choose "Save".

### Delete an assert on Attribute Value
- Open the assertion configuration page and go to the Teststep output tab.
- Click on <i class="fas fa-trash-alt"></i> to delete the assert.

## Related topics
- [Assert Attribute Value](assert-attribute-value)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 september 2022