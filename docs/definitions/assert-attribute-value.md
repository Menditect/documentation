# Assert Attribute Value

## Definition

An assert on [Attribute Value](attribute-value) is defined on a [Test Step](test-step) and exists of making a comparison between the expected and actual outcome value or value range upon test execution, of an attribute in the entity that is used in that [Test Step](test-step).

Asserts on [Attribute Value](attribute-value) can be defined on Object [Test Steps](test-step) that perform either a Create, Retrieve or Change action. It is possible to add asserts on [Attribute Values](attribute-value) that are not actually included to be set. For Create and Change actions, the comparison will be made for the object that is created or changed. If an assert on [Attribute Value](attribute-value) is defined on a Retrieve Object [Test Step](test-step), the comparison will be made for all objects that are in the result list of the retrieve action.

> Asserts on output parameters of a Microflow [Test Step](test-step) (either on the primitive output, on the object or on the list of objects) are currently under development.

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

## Actions on Assert Attribute Value

### View Test Steps that have asserts 
- All [Test Steps](test-step) in a [Test Case](test-case) that have one or more asserts added, are marked with a checklist icon in the list of [Test Steps](test-step).

### View attributes that have asserts 
- All attributes that have an assert added are highlighted in the Attributes tab in the Details of teststep pane on the right in the test suite overview page.
- If an assert is included in [Data Variation](datavariation), the matrix icon is also shown.

### Add an assert on Attribute Value
There are multiple ways to add an assert on Attribute Value:
1. In the Attributes tab in the Details of teststep pane on the right in the test suite overview page, click on the matrix icon next to the attribute to add an assert on it.
2. When hovering the mouse on the [Test Step](test-step), click on the matrix icon to open the page where asserts can be configured.
3. After configuring the [Test Step](test-step), click on Save and configure asserts to open the page where asserts can be configured.
After the page opens, go to the Attributes tab, click on *+ Assertion* to add the assert on the respective attribute.

### Configure an assert on Attribute Value
Asserts on Attribute Value can be configured in bulk, or only for 1 attribute.
For numeric and date values, either a fixed value, or a range of values can be set to compare against.
For boolean, enumeration and string values, only a fixed value can be set. String values can be optionally trimmed (leading and trailing spaces removed) before the comparison is made.

### Delete an assert on Attribute Value
- Open the assertion configuration page and go to the Attributes tab.
- Click on the recycle bin icon on the attribute to delete the assert from.

## Related topics
- [Attribute Value](attribute-value)
- [Test Step](test-step)
- [Assert Object Count](assert-object-count)