# Assert on Object Count

## Definition

An Assert on Object count is defined on a [Teststep](../Teststep) and exists of making a comparison between the expected and actual list size of output objects of a Teststep upon test execution.

## Properties
| Name                  | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Compare type          | The type of comparison to be made: either 'Equals', 'Greater-than' / 'Greater-than or equal to' or 'Less-than' / 'Less-than or equal to'. |
| Expected object count | The expected value of the attribute when executing the test.                                                                              |

## Business rules

Asserts on object count can be defined either on Retrieve Object Teststeps or on Microflow Teststeps that return a list of objects. 

## Actions on Assert Object Count

### Add an Assert on Object Count
There are multiple ways to add an assert on Object Count:
1. Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep where you want to add an assert, and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured. 
2. After configuring the Teststep, click on "Save and configure asserts" to open the page where asserts can be configured. 

After the page opens, go to the "Teststep output" tab, and click on "<i class="fal fa-info-circle"></i> Assert" to add the assert.

### Configure an assert on Object Count
- Select a compare type; 'Equals', 'Greater-than' or 'Less-than'.
- Enter an expected object count.
- Choose "Save".

### Delete an assert on Object Count
- Open the Assert configuration page and go to the "Teststep output" tab.
- Click on "<i class="fas fa-trash-alt"></i>" to delete the assert.

## Related topics
- [Assert Attribute](assert-attribute)
- [Teststep](../teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023