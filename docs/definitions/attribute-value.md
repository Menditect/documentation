# Attribute Value

## Definition

The Attribute Value contains the attribute information that is used for specification of the input of an Object [Test Step](test-step).
For Create and Change Attribute Object [Test Steps](test-step), an Attribute Value will set the value of an attribute of the object to be created in-memory.
For Retrieve Object [Test Steps](test-step), an Attribute Value will be used to narrow the list of output objects that match the given value, like an XPATH statement.

## Properties
| Name | Description |
| ----------- | ----------- |
| MxID | Mendix ID of the attribute (not shown in the application, but used to find the attribute when it has been changed after a revision update) |
| Name | Name of the attribute |
| Included | Indicates whether setting the value for the attribute is included in the test step |
| Datatype | Datatype of the attribute |
| Input type | Indicates how the value is specified; fixed, or through the output of a former Test Step |
| Value | The value of the attribute |
| Differ status | The differstatus indicates how the attribute value is changed since the previous application revision. Can be either <br /> - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision <br /> - New: the attribute does exist in current application revision and does not exist in previous application revision <br /> - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) <br /> - Changed: the attribute exists in both current and previous application revisions and is changed |

## Business rules

- In an Attribute Value is included, and the input type is Former Test Step, a former Test Step must be selected in order to be able to execute the Test Configuration.
- In an Attribute Value is included, and the input type is Fixed Value, and the datetype is Datetime, an option must be selected to use either fixed-date, or currentdatetime with an offset.

## Actions on Attribute Value

### View Attribute Values
- In the test suite page, select the Object [Test Step](test-step) to view the Attribute Values for.
- The Attribute Values are shown in the right pane in the Attributes tab.

### Include or exclude an Attribute Value
All Attribute Values are enabled by default after creating the Object [Test Step](test-step).
- When configuring the Object [Test Step](test-step), tick the checkbox next to the attribute to enable or disable setting the value.

Note that if the checkbox is ticked but a Value on Attribute value is not set, this means the attribute will be set to "Empty" when executing the test. 

### Set a fixed Attribute Value 
- When configuring the Object [Test Step](test-step), make sure the attribute that you want to set a value for, is included.
- Click the keyboard icon on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute. 

For each datatype, there is a different way of entering the value:
1. String and numeric values can be entered in a text box.
2. Boolean values need to be Yes or No (and cannot be "Empty").
3. Enumeration values can be selected from a dropdown.
4. Datetime values can be entered either fixed-date, or currentdatetime with an offset.

### Use a former Test Step to set an Attribute Value
- When configuring the Object [Test Step](test-step), make sure the attribute that you want to set a value for, is included.
- Click the right-arrow icon on the right of the attribute, indicating a former [Test Step](test-step) should be used to set the value.
- Select the [Test Step](test-step) that should provide the value.

## Related topics
- [Microflow Parameter Value](microflow-parameter-value)
- [Test Step](test-step)
