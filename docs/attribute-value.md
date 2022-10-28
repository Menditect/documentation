---
sidebar_position: 10
---

# Attribute Value

## Definition

The Attribute Value contains the information that specifies the input of an Object [Teststep](teststep).

## Properties
| Name       | Description                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name       | The name of the attribute.                                                                                                                                                                                    |
| Included   | This indicates whether setting the value for the attribute is included in the Teststep.                                                                                                                       |
| Datatype   | Datatype of the attribute.                                                                                                                                                                                    |
| Input type | Indicates how the value is specified. The "Fixed" input type specifies a by the test automator given value. The "From former Teststep" input type specifies that the value is derived from a former Teststep. |
| Value      | The value of the attribute.                                                                                                                                                                                   |

## Business rules

- A former [Teststep](teststep) must be selected if an Attribute Value has the input type 'Former Teststep'. The [Test Configuration](test-configuration) that contains the Teststep can not be executed as long as the former Teststep is not selected. 
- The offset of current date or a pre-set date must be specified if an Attribute Value has the input type 'Specified' and a datatype 'Datetime'.

## Actions on Attribute Value

### View Attribute Values
- Navigate to an Object [Teststep](teststep) in the Test Suite page. The Attribute Values of the object are shown in the "Attributes" tab.

### Include or exclude an Attribute Value
- Navigate to an Object Teststep in the Test Suite page.
- Toggle the checkbox value next to the attribute in the "Attributes" tab to include or exclude it.

Note that: 
- After creating an Object Teststep, all Attribute Values are included by default.
- If an attribute is included but an Attribute Value is not set, the value will be empty during test execution.

### Set a fixed Attribute Value 
- Navigate to an Object Teststep in the Test Suite page.
- Click <i class="fas fa-keyboard"></i> on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute.

Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime.

### Use a former Teststep to set an Attribute Value
- Navigate to an Object Teststep in the Test Suite page.
- Click <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" class=""></path></svg> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

## Related topics
- [Microflow Parameter Value](microflow-parameter-value)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 september 2022