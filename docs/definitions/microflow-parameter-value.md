# Microflow Parameter Value

## Definition

The Microflow Parameter Value contains the value for a Microflow input parameter on a Microflow [Test Step](test-step).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the input parameter |
| Datatype | Datatype of the input parameter |
| Input type | Indicates how the value is specified; manually by the user, or through the output of a former Test Step |
| Value | The value of the input parameter |
| Differ status | The differstatus indicates how the attribute value is changed since the previous application revision. Can be either <br /> - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision <br /> - New: the attribute does exist in current application revision and does not exist in previous application revision <br /> - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) <br /> - Changed: the attribute exists in both current and previous application revisions and is changed |

## Business rules

- If the input type is Former Test Step, a former Test Step must be selected in order to be able to execute the Test Configuration  

Note that if a Value on Microflow Parameter Value is not set, this means the input parameter will be set to "Empty" when executing the test. 

## Actions on Microflow Parameter Value

### View Microflow Parameter Values
- In the test suite page, select the Microflow [Test Step](test-step) to view the Microflow Parameter Values for.
- The Microflow Parameter Values are shown in the right pane under Input parameters of microflow.

### Set a fixed Microflow Parameter Value
Note that Microflow Parameter Values can be either objects or primitives like String, Integer, etc.
If the Microflow Parameter Value is an object, a former [Test Step](test-step) must be used to provide the value.

- Click the keyboard icon on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute. 

For each datatype, there is a different way of entering the value:
1. String and numeric values can be entered in a text box.
2. Boolean values need to be Yes or No (and cannot be "Empty").
3. Enumeration values can be selected from a dropdown.
4. Datetime values can be entered either fixed-date, or currentdatetime with an offset.

Note that if the value is not set, this means it will be set to "Empty" when executing the test. 

### Use a former Test Step to set an Attribute Value
- If the Microflow Parameter Value is a primitive, first click the right-arrow icon on the right of the attribute, indicating a former [Test Step](test-step) should be used to set the value.
- Select the [Test Step](test-step) that should provide the value.

## Related topics
- [Attribute Value](attribute-value)
- [Test Step](test-step)
