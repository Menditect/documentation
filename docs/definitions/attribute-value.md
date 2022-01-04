# Attribute value

## Definition

The attribute value contains the attribute iniformation that is used for specification of the input of an Object test step.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the attribute |
| Datatype | Datatype of the attribute |
| Value | The value of the attribute |
| Differ status | The differstatus indicates how the attribute value is changed since the previous application revision. Can be either <br /> - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision <br /> - New: the attribute does exist in current application revision and does not exist in previous application revision <br /> - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) <br /> - Changed: the attribute exists in both current and previous application revisions and is changed |

## Business rules

None. 
Note that if a Value on Attribute value is not set, this means the attribute will be set to "Empty" when executing the test. 

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
