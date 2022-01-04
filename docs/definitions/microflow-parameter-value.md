# Microflow parameter value

## Definition

The microflow parameter value contains the value for a Microflow input parameter on a Microflow test step.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the input parameter |
| Datatype | Datatype of the input parameter |
| Input type | Indicates how the value is specified; manually by the user, or through the output of a former test step |
| Value | The value of the input parameter |
| Differ status | The differstatus indicates how the attribute value is changed since the previous application revision. Can be either <br /> - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision <br /> - New: the attribute does exist in current application revision and does not exist in previous application revision <br /> - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) <br /> - Changed: the attribute exists in both current and previous application revisions and is changed |

## Business rules

- If the input type is Former test step, a former test step must be selected in order to be able to execute the test configuration  

Note that if a Value on Microflow parameter value is not set, this means the input parameter will be set to "Empty" when executing the test. 

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
