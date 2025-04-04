---
sidebar_position: 15
---


# Data Variation

## Definition

Data Variation is used to execute the same test multiple times, but each time with different values for Attributes and Asserts. 

Data Variation can be defined on the [Test Suite](test-suite) or [Test Case](test-case) level. 

To change the value of an Attribute or Assert per Test Run, it needs to be explicitly included in the Data Variation. 
It is possible to combine Test Suite datavariation and Test Case variation in the same Test Suite. 

:::note
On the Test Case level, a choice has to be made between the Test Suite / Test Case datavariation when varying on an Attribute or Assert. Once the choice is made, it can only be undone by excluding the varied Attributes and Asserts.
:::

An included Attribute or Assert is referred to in the MTA Documentation as a [Data Variation Item](datavariation-item).

For each data variation of a Test Suite, a Test Suite Run will be created. For each data variation of a Test Case, a Test Case Run will be created. Therefore, if there is a Test Case with Test Case datavariation and another Test Case with Test Suite datavariation in the same Test Suite, this will have a multiplier-effect.

It is **not possible** to execute one single column in the data variation.

## Business rules

None. 

Note that it is possible to have a data variation that does not consist of data variation items. This happens when all data variation items are deleted. The result is that the Test Suite or Test Case will simply be ran multiple times but with the exact same data. 

To resolve this, use below guide to remove all Data Variation.

## Actions on Data Variation

### View Test Suite Data Variation
- Open the Test Configuration and click "<i class="fal fa-cog"></i> Configure" to open the Test Suite. 
- Click on "<i class="fal fa-table"></i> Test suite data variation" on the top-right.

### Migrate Test Suite Data Variation to Test Case Data Variation
- Click on <i class="fas fa-ellipsis"></i> on the top right of the Data Variaton page.
- Click on "<i class="fa-light fa-arrow-right"></i> Move to test case data variation".
- Select the Test Case that you want to migrate from Test Suite Data Variation to Test Case Data Variation.

### Remove all Test Suite Data Variation
To completely remove all Data Variation Items and also remove all Data Variations:
- Click on <i class="fas fa-ellipsis"></i> on the top right of the Data Variaton page.
- Click on "<i class="fas fa-trash-alt"></i> Delete test suite data variation".

### View Test Case Data Variation
- Open the Test Configuration and click "<i class="fal fa-cog"></i> Configure" to open the Test Suite. 
- Click on <i class="fas fa-ellipsis"></i> on the Test Case.
- Click on "<i class="fa-light fa-table-rows"></i> View data variation".

### Migrate Test Case Data Variation to Test Suite Data Variation
- Click on <i class="fas fa-ellipsis"></i> on the top right of the Data Variaton popup.
- Click on "<i class="fa-light fa-arrow-right"></i> Move to test suite data variation".
- Confirm.
  
### Remove all Test Case Data Variation
To completely remove all Data Variation Items and also remove all Data Variations:
- Click on <i class="fas fa-ellipsis"></i> on the top right of the Data Variaton popup.
- Click on "<i class="fas fa-trash-alt"></i> Delete test case data variation".

The page will close.

### Add items to Data Variation

[Create a data variation item.](datavariation-item#create-a-data-variation-item)

### Add a Variation
- Open the Test Suite data variation page or Test Case data variation popup.
- Click on the column you want to create a copy from, for instance the column labeled *# 1*. 
- Click "*Copy*".

### Delete a Variation
- Open the Test Suite data variation page or Test Case data variation popup.
- Click on the column you want to delete, for instance the column labeled *# 2*. 
- Click <i class="fas fa-trash-alt"></i>.

Note that you cannot delete the first column labeled *# 1*.

### Execute a Variation
- Open the Test Suite data variation page or Test Case data variation popup.
- Click on the column you want to delete, for instance the column labeled *# 2*. 
- Click on "<i class="fal fa-play"></i> Execute variation".
- Choose "Coverage" to create a new [Coverage Calculation](coverage-calculation) after the Test Run was executed.
- Choose "Full output" to include all data values in the Test Run results. Not enabling "Full output" will finish the Test Run sooner, but will only include data values for teststeps that are used in other teststeps in the Test Run results.
- Choose a [Test Setting](test-setting) (the preferred Test Setting is pre-selected).

### Edit Data Variation values
- Open the Test Suite data variation page or Test Case data variation popup.
- Click on the column of the Data Variation you want to edit, for instance the column labeled *# 2*. 
- Click "<i class="fas fa-pencil"></i> Edit values".

### Edit Data Variation description
- Open the Test Suite data variation page or Test Case data variation popup.
- Click on the column of the Data Variation you want to describe, for instance the column labeled *# 2*. 
- Click "<i class="fas fa-pencil"></i> Edit description".

## Related topics
- [Assert](Assert)
- [Data Variation Items](datavariation-item)
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 21 October 2023