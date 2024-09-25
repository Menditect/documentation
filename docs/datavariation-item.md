---
sidebar_position: 16
---


# Data Variation Item


## Definition

Data Variation Item or variant refers to an attribute value or assert value that can be varied when executing test. 
Data Variation Items are always part of [Data Variation](datavariation).
The value of a Data Variation Item is defined either in the value of an attribute or in an [Assert on attribute](Assert/assert-attribute).

:::info
It is **not possible** to import a CSV or Excel file into the datavariation, for multiple reasons. 
<br/>There are multiple operators possible on a single value, other than "Equals", like "Contains", "Greater than", "Range", etc. These are not part of a list of values in CSV or Excel.
<br/>MTA performs an input validation according to the data type of the corresponding attribute, while entering the value. This cannot be done in a bulk import action.
<br/>Values shown in data variation are only part of the full set of values used during a test run, since the rest of the values are fixed per-run, so importing would most likely result in a lot of duplication.
:::

## Properties
| Name           | Description                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type           | There are two types of variants: <br /> - Attribute value, where an attribute is assigned a value, or a microflow parameter is given a value; <br /> - Assert, where the value of an attribute is checked. Asserts are recognizable by the "=" sign on the Data variation page.<br /> |
| Attribute name | The name of the attribute.                                                                                                                                                                                                                                                            |
| Value          | The value of the attribute or assert.                                                                                                                                                                                                                                                 |

## Business rules

None.

Note that not entering a value will be interpreted as 'Empty'.

## Actions on Data Variation Item

### View Data Variation Items in a Test Suite

Test Suite Datavariation is marked as <i class="fas fa-table"></i>.

[Open the Test Suite Data Variation page.](datavariation#view-test-suite-data-variation)

### View Data Variation Items in a Test Case

Test Case Datavariation is marked as <i class="fas fa-table-rows"></i>.

[Open the Test Case Data Variation page.](datavariation#view-test-case-data-variation)

### Create a Data Variation Item
To add an attribute or an [Assert on attribute](Assert/assert-attribute) as a Data Variation Item, there are two ways:
1. When configuring a [Teststep](teststep), <br/>- click on <i class="fas fa-table"></i> next to the attribute or assert to add it to the **Test Suite** Data Variation or <br/>- click on "<i class="fas fa-table-rows"></i>" next to the attribute or assert to add it to the **Test Case** Data Variation.<br/>Data Variation will be enabled and the respective attribute or assert will be added as a Data Variation Item;
2. From the Data Variation page or popup, click on "<i class="fal fa-plus-circle"></i> Attribute" or "<i class="fal fa-plus-circle"></i> Assert" to add an Attribute Value or an Assert on attribute as a Data Variation Item.

If only one of the icons is shown, this means the choice to use data variation on either the Test Case or Test Suite level was already made. 


### Edit a Data Variation Item from the Test Suite page
- On the Test Suite page, select the Test Case that has either the <i class="fas fa-table"></i> or the "<i class="fas fa-table-rows"></i>" icon next to it.
- For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item.
- Click on this icon to show the values per Data Variation.
 
### Edit a Data Variation Item from the Data Variation page or popup 

From the data variation page or popup, to edit a single attribute or assert in a Data Variation, simply click on the attribute or assert in the respective column.

### Delete a Data Variation Item
- From the data variation page or popup, click on the respective attribute or assert name on the left.
- Click "*Delete*".

## Related topics
- [Assert](Assert)
- [Data Variation](datavariation)
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 april 2023
