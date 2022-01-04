# Data variation

## Definition

Data variation is used to execute the same test suite multiple times upon [Test Configuration](test-configuration) execution, but each time with different values for variant items, such as [Attribute Values](attribute-value) or input and output parameters. These variant items need to be explicitly included in the data variation to be able to vary them per test suite run. For each data variation of a [Test Suite](test-suite), a [Test Run](test-run) will be created.
 
Data variation consists of data variation items or variants.

## Properties
| Name | Description |
| ----------- | ----------- |
| Number | The rank of the data variation in the execution order of the test suite. |

## Business rules

None. 
Note that it is possible to have a data variation that does not consist of data variation items. This means that the test suite will simply be ran multiple times but with the exact same data.

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
