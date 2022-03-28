# Attribute Value

## Definition

The Attribute Value contains the information that specifies the input of an Object [Test Step](test-step).

The purpose of an Attribute Value is:
- to set the value of an object attribute in a Create and Change Attribute Object Test Steps. The value of the attribute of the object will be set or changed in-memory.
- to narrow the list of output objects in a Retrieve Object Test Step. The given attribute value behaves like an XPATH statement.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the attribute |
| Included | This indicates whether setting the value for the attribute is included in the test step |
| Datatype | Datatype of the attribute |
| Input type | Indicates how the value is specified. The "Fixed" input type specifies a by the test automator given value. The "From former test step" input type specifies that the value is derived from a former test step. |
| Value | The value of the attribute |

## Business rules

- A former Test Step must be selected if an Attribute Value has the input type "Former Test Step". The Test Configuration can not be executed as long as the Test Step is not selected. 
- The offset of current date or a fixed date must be specified if an Attribute Value has the input type "Fixed value" and a datatype "Datetime".

## Actions on Attribute Value

### View Attribute Values
- Navigate to an Object Test Step in the Test Suite page. The Attribute Values of the object are shown in the "Attributes" tab.

### Include or exclude an Attribute Value
- Navigate to an Object Test Step in the test suite page.
- Toggle the checkbox value next to the attribute in the "Attributes" tab.

Note that: 
- All Attribute Values are enabled by default after creating an Object Test Step.
- An Attribute Value is empty during test execution if the checkbox is ticked but an attribute value is not set.

### Set a fixed Attribute Value 
- Navigate to an Object Test Step in the test suite page.
- Click <i class="fas fa-keyboard"></i> on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute.

Note: For datetime values you can enter either a fixed date, the current datetime, or an offset of the current datetime.

### Use a former Test Step to set an Attribute Value
- Navigate to an Object Test Step in the test suite page.
- Click <i class="fal fa-chevron-circle-right"></i> on the right of the attribute, indicating a former Test Step should be used to set the value.
- Select the Test Step that should provide the value.

## Related topics
- [Microflow Parameter Value](microflow-parameter-value)
- [Test Step](test-step)
