# Attribute value

## Definition

The attribute value contains the attribute information that is used for specification of the input of an Object [Test Step](test-step).

## Properties
| Name | Description |
| ----------- | ----------- |
| MxID | Mendix ID of the attribute (not shown in the application, but used to find the attribute when it has been changed after a revision update) |
| Name | Name of the attribute |
| Datatype | Datatype of the attribute |
| Input type | Indicates how the value is specified; manually by the user, or through the output of a former test step |
| Value | The value of the attribute |
| Differ status | The differstatus indicates how the attribute value is changed since the previous application revision. Can be either <br /> - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision <br /> - New: the attribute does exist in current application revision and does not exist in previous application revision <br /> - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) <br /> - Changed: the attribute exists in both current and previous application revisions and is changed |

## Business rules

- If the input type is Former test step, a former test step must be selected in order to be able to execute the test configuration  

Note that if a Value on Attribute value is not set, this means the attribute will be set to "Empty" when executing the test. 

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
