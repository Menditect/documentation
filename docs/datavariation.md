---
sidebar_position: 9
---


# Data Variation

## Definition

Data Variation is used to execute the same test multiple times, but each time with different values for Attributes and Asserts. 

Data Variation can be defined on the [Test Suite](test-suite) or [Test Case](test-case) level. 

To change the value of an Attribute or Assert per Test Run, it needs to be explicitly included in the Data Variation. 
It is possible to combine Test Suite datavariation and Test Case variation in the same Test Suite. 

:::note
On the Test Case level, a choice has to be made between the two when including an Attribute or Assert. 
:::

An included Attribute or Assert is referred to in the MTA Documentation as a [Data Variation Items](datavariation-item).

For each data variation of a Test Suite, a Test Suite Run will be created. For each data variation of a Test Case, a Test Case Run will be created. Therefore, if there is a Test Case with Test Case datavariation and another Test Case with Test Suite datavariation in the same Test Suite, this will have a multiplier-effect.
 
## Actions on Data Variation

### Enable Data Variation
There are two ways to enable Data Variation on a [Test Suite](test-suite):
1. Click on "<i class="fas fa-table"></i>" on top of the right pane in the Test Suite page. The data variation page will open and the icon color will turn dark, meaning Data Variation is enabled.
2. When configuring a [Teststep](teststep), click on "<i class="fas fa-table"></i>" next to the attribute or assert to add it to the Data Variation. Data Variation will be enabled and the respective attribute or assert will be added as a [Data Variation Item](datavariation-item).

### Disable Data Variation
To completely remove all Data Variation Items and also remove all Data Variations:
- Click on "<i class="fas fa-table"></i>" on top of the right pane in the Test Suite page.
- Click on "<i class="fas fa-trash-alt"></i>" on top of the list of Data Variation Items.

### Add a Data Variation
- Click on "<i class="fas fa-table"></i>" on top of the right pane in the Test Suite page. The data variation page will open.
- Click on the column of the Data Variation you want to create a copy from, for instance the column labeled *# 1*. 
- Click "*Copy*".

### Delete a Data Variation
- Click on "<i class="fas fa-table"></i>" on top of the right pane in the Test Suite page. The data variation page will open.
- Click on the column of the Data Variation you want to delete, for instance the column labeled *# 2*. 
- Click "<i class="fas fa-trash-alt"></i>".

Note that you cannot delete the first column labeled *# 1*.

### Edit a Data Variation
See [Edit a Data Variation Item](datavariation-item#edit-a-data-variation-item).

## Related topics
- [Assert](Assert)
- [Data Variation Items](datavariation-item)
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023