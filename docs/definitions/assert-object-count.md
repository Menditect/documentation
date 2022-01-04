# Assert Object Count

## Definition

An assert on object count is defined on a [Test Step](test-step) and exists of a comparison between the expected and actual list size of output objects of a Test Step upon test execution.

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made: either Equals, Greater-than or Less-than |
| Expected object count | The expected value of the attribute when executing the test |

## Business rules
- Compare type is mandatory
- Exepcted object count is mandatory
- Expected object count must be equal to or greater than 0

## Actions on ...

### View ...
- ...

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
