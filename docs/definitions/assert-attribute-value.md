# Assert attribute value

## Definition

An assert on attribute value is defined on a test step and exists of a comparison between the expected and actual outcome value or value range upon test execution, of an attribute in the entity that is used in that test step.

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made: either Equals or Range (only applicable for numeric or date attributes |
| Value | The expected value of the attribute when executing the test |
| Min value | The expected lower boundary of the value of the attribute when executing the test (only applicable for numeric or date attributes |
| Max value | The expected higher boundary of the value of the attribute when executing the test (only applicable for numeric or date attributes |
| Trim string values | Used to be able to apply a trim to the string values when comparing (only applicable for string attributes |

## Business rules
- Compare type is mandatory

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
