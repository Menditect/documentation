# Attribute Value

## Definition

The Attribute Value contains the information that specifies the input of an Object [Test Step](test-step).

The purpose of an Attribute Value is:
- to set the value of an object attribute in a Create and Change Attribute Object Test Steps. The value of the attribute of the object will be set or changed in-memory.
- to narrow the list of output objects in a Retrieve Object Test Step. The given attribute value behaves like an XPATH statement.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the attribute. |
| Included | This indicates whether setting the value for the attribute is included in the test step. |
| Datatype | Datatype of the attribute. |
| Input type | Indicates how the value is specified. The "Fixed" input type specifies a by the test automator given value. The "From former test step" input type specifies that the value is derived from a former test step. |
| Value | The value of the attribute. |

## Business rules

- A former Test Step must be selected if an Attribute Value has the input type 'Former Test Step'. The Test Configuration can not be executed as long as the Test Step is not selected. 
- The offset of current date or a fixed date must be specified if an Attribute Value has the input type 'Fixed value' and a datatype 'Datetime'.

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
- Click <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" class=""></path></svg> on the right of the attribute, indicating a former Test Step should be used to set the value.
- Select the Test Step that should provide the value.

## Related topics
- [Microflow Parameter Value](microflow-parameter-value)
- [Test Step](test-step)
