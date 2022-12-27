
# Attribute Value

:::danger
VERHUIZEN NAAR OACT PAGINA'S
:::

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
- Click "<i class="fas fa-keyboard"></i>" on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute.

Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime.

### Use a former Teststep to set an Attribute Value
- Navigate to an Object Teststep in the Test Suite page.
- Click "<i class="fal fa-chevron-circle-right"></i>" on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

## Related topics
- [Microflow Parameter Value](microflow-parameter-value)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 december 2022