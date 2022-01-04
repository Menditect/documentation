# Data Variation

## Definition

Data Variation is used to execute the same [Test Suite](test-suite) multiple times upon [Test Configuration](test-configuration) execution, but each time with different values for variant items, such as [Attribute Values](attribute-value) or input and output parameters. These variant items need to be explicitly included in the data variation to be able to vary them per [Test Run](test-run). For each data variation of a [Test Suite](test-suite), a [Test Run](test-run) will be created.
 
Data Variation consists of Data Variation Items or variants.

## Properties
| Name | Description |
| ----------- | ----------- |
| Number | The rank of the data variation in the execution order of the Test Suite. |

## Business rules

None. 
Note that it is possible to have a data variation that does not consist of data variation items. This means that the Test Suite will simply be ran multiple times but with the exact same data.

## Actions on ...

### View ...
- ...

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
