# Assert Object Count

## Definition

An assert on object count is defined on a [Test Step](test-step) and exists of making a comparison between the expected and actual list size of output objects of a Test Step upon test execution.

Asserts on object count can be defined either on Retrieve Object [Test Steps](test-step) or on Microflow [Test Steps](test-step) that return a list of objects. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made: either Equals, Greater-than or Less-than |
| Expected object count | The expected value of the attribute when executing the test |

## Business rules
- Compare type is mandatory
- Expected object count is mandatory
- Expected object count must be equal to or greater than 0

## Actions on Assert Object Count

### View Test Steps that have asserts 
- All [Test Steps](test-step) in a [Test Case](test-case) that have one or more asserts added, are marked with a checklist icon in the list of [Test Steps](test-step).

### Add an assert on Object Count
There are multiple ways to add an assert on Object Count:
1. When hovering the mouse on the [Test Step](test-step), click on the matrix icon to open the page where asserts can be configured.
2. After configuring the [Test Step](test-step), click on Save and configure asserts to open the page where asserts can be configured in bulk for all the attributes in the [Test Step](test-step).
After the page opens, go to the Test Step output tab, and click on *+ Assertion* to add the assert.

### Configure an assert on Object Count
- Select a compare type; Equals, Greater-than or Less-than.
- Enter an expected object count.
- Save.

### Delete an assert on Attribute Value
- Open the assertion configuration page and go to the Test Step output tab.
- Click on the recycle bin icon to delete the assert.

## Related topics
- [Test Step](test-step)
- [Assert Attribute Value](assert-attribute-value)