# Data Variation Item

## Definition

Data Variation Item or variant refers to an attribute that can be varied when executing a [Test Suite](test-suite). 
Data Variation Items are always part of [Data Variation](datavariation).
The value of a Data Variation Item is defined either in an [Attribute Value](attribute-value) or in an [Assert on attribute value](assert-attribute-value).

## Properties
| Name | Description |
| ----------- | ----------- |
| Type | There are two types of variants: <br /> - Attribute value, where an attribute is assigned a value, or a microflow parameter is given a value; <br /> - Assert, where the value of an attribute is checked. Asserts are recognizable by the "=" sign on the Data variation page.<br />  |
| Attribute name | The name of the attribute. |
| Value | The value of the attribute or assert. |

## Business rules
None.
Note that not entering a value will be interpreted as 'Empty'.

## Actions on Data Variation Item

### View Data Variation Items in a Test Suite
- Click on <i class="fas fa-table"></i> on top of the right pane in the Test Suite page. 
- The data variation page will be opened showing all the Data Variation Items in the [Test Suite](test-suite).

### View Data Variation Items in a Test Case
- On the Test Suite page, click on the [Test Case](test-case) that has the dark coloured <i class="fas fa-table"></i> icon next to it.
- For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item.

### View the values of a Data Variation Item per Data Variation
- On the Test Suite page, click on the Test Case that has the dark coloured <i class="fas fa-table"></i> icon next to it.
- For each attribute and assert shown in the Teststep details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item.
- Click on this icon to show the values per [Data Variation](datavariation).

### Create a Data Variation Item
To add an [Attribute Value](attribute-value) or an [Assert on attribute value](assert-attribute-value) as a Data Variation Item, there are two ways:
1. When configuring a [Teststep](teststep), click on <i class="fas fa-table"></i> next to the attribute or assert to add it to the [Data Variation](datavariation). Data Variation will be enabled and the respective attribute or assert will be added as a Data Variation Item;
2. With Data Variation already enabled, go to the data variation page and click on "*+ Attribute*" or "*+ Assert*" to add an Attribute Value or an Assert on attribute value as a Data Variation Item.

### Edit a Data Variation Item
There are two ways to edit values in a Data Variation. 
1. From the data variation page, to edit all attributes and asserts in a Data Variation at once, click on the column you want to edit, then click on "*Edit*".
2. From the data variation page, to edit a single attribute or assert in a Data Variation, simply click on the attribute or assert in the respective column.

### Delete a Data Variation Item
- From the data variation page, click on the respective attribute or assert name on the left.
- Click "*Delete*".

## Related topics
- [Assert Attribute Value](assert-attribute-value)
- [Attribute Value](attribute-value)
- [Data Variation](datavariation)
- [Test Run](test-run)
- [Test Suite](test-suite)
