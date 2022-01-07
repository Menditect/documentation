# Data Variation

## Definition

Data Variation is used to execute the same [Test Suite](test-suite) multiple times upon [Test Configuration](test-configuration) execution, but each time with different values for variant items, such as [Attribute Values](attribute-value) or input and output parameters. These variant items need to be explicitly included in the data variation to be able to vary them per [Test Run](test-run). For each data variation of a [Test Suite](test-suite), a [Test Run](test-run) will be created.
 
Data Variation consists of Data Variation Items or variants.

## Properties
| Name | Description |
| ----------- | ----------- |
| Number | The rank of the Data Variation in the execution order of the Test Suite. |

## Business rules

None. 
Note that it is possible to have a data variation that does not consist of data variation items. This happens when all data variation items are deleted. The result is that the Test Suite will simply be ran multiple times but with the exact same data.

## Actions on Data Variation

### Enable Data Variation
There are two ways to enable Data Variation on a [Test Suite](test-suite):
1. Click on the matrix icon on top of the right pane in the test suite page. The data variation page will open and the icon color will turn dark, meaning Data Variation is enabled.
2. When configuring a [Test Step](test-step), click on the data variation icon next to the attribute or assert to add it to the Data Variation. Data Variation will be enabled and the respective attribute or assert will be added as a [Data Variation Item](datavariation-item).

### Disable Data Variation
To completely remove all [Data Variation Items](datavariation-item) and also remove all Data Variations:
- Click on the matrix icon on top of the right pane in the test suite page.
- Click on the recycle bin icon on top of the list of [Data Variation Items](datavariation-item).

### Add a Data Variation
- Click on the matrix icon on top of the right pane in the test suite page. The data variation page will open.
- Click on the column of the Data Variation you want to create a copy from, for instance the column labeled *# 1*. 
- Click *Copy*

### Delete a Data Variation
- Click on the matrix icon on top of the right pane in the test suite page. The data variation page will open.
- Click on the column of the Data Variation you want to delete, for instance the column labeled *# 2*. 
- Click the recycle bin icon.

Note that you cannot delete the first column labeled *# 1*.

### Edit a Data Variation
See [Edit a Data Variation Item](datavariation-item#edit-a-data-variation-item)

## Related topics
- [Data Variation Items](datavariation-item
- [Test Suite](test-suite)
- [Test Run](test-run)
