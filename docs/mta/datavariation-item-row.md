---
sidebar_position: 17
---


# Datavariation Item Row


## Definition

A Datavariation Item Row is an attribute value or assert value that can be varied when executing test. They are always part of [Datavariations](datavariation).
The value of a Datavariation Item Row is defined either in the value of an attribute or in an [Assert](Assert/).

:::info
It is **not possible** to import a CSV or Excel file into the datavariation, for multiple reasons:
<br/>- There are multiple operators possible on a single value, other than "Equals", like "Contains", "Greater than", "Range", etc. These are not part of a list of values in CSV or Excel.
<br/>- MTA performs an input validation according to the data type of the corresponding attribute, while entering the value. This cannot be done in a bulk import action.
<br/>- Values shown in Datavariations are only part of the full set of values used during a test run, since the rest of the values are fixed per-run, so importing would most likely result in a lot of duplication.
:::

## Properties
| Name           | Description                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type           | There are two types: <br /> - Attribute value, where an attribute is assigned a value, or a microflow parameter is given a value; <br /> - Assert, where the value of an attribute is checked. Asserts are recognizable by the "=" sign on the Datavariation page.<br /> |
| Attribute name | The name of the attribute.                                                                                                                                                                                                                                               |
| Value          | The value of the attribute or assert.                                                                                                                                                                                                                                    |

## Business rules

None.

Note that not entering a value will be interpreted as `Empty`, except for String values, where it will be interpreted as '' (zero-length String).

## Actions on Datavariation Item Row

### Create a Datavariation Item Row
To add an attribute or an [Assert on attribute](Assert/assert-attribute) as a Datavariation Item, there are two ways:
1. When configuring a [Teststep](teststep), <br/>- click on <i class="fas fa-table"></i> next to the attribute or assert to add it to the **Test Suite** Datavariation or <br/>- click on "<i class="fas fa-table-rows"></i>" next to the attribute or assert to add it to the **Test Case** Datavariation.<br/>Datavariation will be enabled and the respective attribute or assert will be added as a Datavariation Item;
2. From the Datavariation page or popup, click on "<i class="fal fa-plus-circle"></i> Attribute" or "<i class="fal fa-plus-circle"></i> Assert" to add an Attribute Value or an Assert on attribute as a Datavariation Item Row.

If only one of the icons is shown, this means the choice to use Datavariation on either the Test Case or Test Suite level was already made. 

### Edit a Datavariation Item Row from the Test Suite page
- On the Test Suite page, select the Test Case that has either the <i class="fas fa-table"></i> or the "<i class="fas fa-table-rows"></i>" icon next to it.
- For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Datavariation Item Row.
- Click on this icon to show the values per Datavariation.
 
### Edit a Datavariation Item Row from the Datavariations

From the Datavariations, to edit a single attribute or assert, simply double-click on the attribute or assert in the respective column.

### Delete a Datavariation Item Row
- From the Datavariations page, click <i class="fas fa-ellipsis"></i> in the Datavariation Item Row to delete.
- Click ""<i class="fal fa-trash-alt"></i> Delete".


### Navigate to the Test Case of the Datavariation Item Row

- From the Datavariations page, click <i class="fas fa-ellipsis"></i> in the Datavariation Item Row.
- Click ""<i class="fal fa-location-arrow"></i> Navigate to test case".

### Navigate to the Teststep of the Datavariation Item Row
This action is not possible for Test Case Asserts.

- From the Datavariations page, click <i class="fas fa-ellipsis"></i> in the Datavariation Item Row.
- Click ""<i class="fal fa-location-arrow"></i> Navigate to teststep".


### Change the order of a Datavariation Item Row

The order of Datavariation Item Rows is purely visual, and does not affect execution.

- Navigate to the Test Suite or Test Case Datavariations page.
- Click <i class="fa-light fa-arrow-up"></i> to swap the position with the Datavariation Item Row above, or
- Click <i class="fa-light fa-arrow-down"></i> to swap the position with the Datavariation Item Row below.


## Related topics
- [Assert](Assert)
- [Datavariations](datavariation)
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 9 April 2025