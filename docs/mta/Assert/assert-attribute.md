# Assert on Attribute

## Definition

An Assert on Attribute formulates an expected result of an attribute in an Object action [Teststep](../Teststep) upon execution. It is possible to either define the result to have a single value, or a range that the value should be in. A Teststep can have multiple Asserts on Attribute.

An Assert on Attribute can be added for a value of an attribute in an Object action Teststep.

When a Teststep uses [Data Variation](../datavariation) to manipulate Teststep input, the Assert can be applied as a [Data Variation Item](../datavariation-item-row) for each defined variation.

:::note
An Assert on Attribute is evaluated **for every returned object** of a Teststep. <br/>
If there are **no objects**, the Assert on Attribute will always **Pass**.
:::


## Properties
| Name               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compare type       | The type of comparison to be made. <br />  - The 'Equals' / 'Not equals' type means that the attribute value should exactly match (or not match, respectively) a single given value. <br />   - The 'Range' / 'Not range' type  means that the attribute value should be within (or outside, respectively) the given boundaries. A 'Range' type is only applicable for numeric or date attributes.  <br />   - The 'Greater than' / 'Greater than or equal to' means that the attribute value should be higher than (or include, respectively) the given value.  <br />   - The 'Less than' / 'Less than or equal to' means that the attribute value should be lower than (or include, respectively) the given value.  <br /> |
| Value              | The expected value of the attribute upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Min value          | The expected lower boundary of the attribute value if the selected compare type is 'Range'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Max value          | The expected higher boundary of the attribute value if the selected compare type is 'Range'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Trim string values | Used to be able trim string values for leading and trailing space characters before evaluating the result (only applicable for string attributes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Business rules

The following Assert Compare types are supported for the Mendix data types:


|                          | String                       | Integer                      | Decimal                      | Boolean                      | Datetime                     | Enumeration                  |
| ------------------------ | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| Equals                   | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| Does not equal           | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| Contains                 | <i class="fas fa-check"></i> |                              |                              |                              |                              |                              |
| Does not Contain         | <i class="fas fa-check"></i> |                              |                              |                              |                              |                              |
| Within Range             |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Outside of Range         |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Greater than             |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Greater than or Equal to |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Less than                |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Less than or Equal to    |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |


## Actions on an Assert on Attribute 

### Add an Assert on Attribute 
There are multiple ways to add an Assert on Attribute:
1. Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on <i class="fal fa-ballot-check"></i> next to the attribute to add the Assert;
2. Click on the <i class="fas fa-ellipsis"></i> button on the Teststep where you want to add an assert, and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured. Click on <i class="fal fa-ballot-check"></i> next to the attribute to add the Assert;
3. Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "<i class="fal fa-plus-circle"></i> Assert" button to add the Assert.

### Delete an Assert on Attribute 
- Click on the <i class="fas fa-ellipsis"></i> button on the Teststep where you want to delete an assert, and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured;
- Click on <i class="fas fa-ballot-check"></i> on the attribute to delete the Assert from.
- Click on the <i class="fal fa-trash-can"></i> button.

## Related topics
- [Assert Object Count](assert-object-count)
- [Teststep](../Teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 20 October 2025