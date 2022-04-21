# Microflow Parameter Value

This document is based on MTA version 1.5.

## Definition

The Microflow Parameter Value contains the value for a Microflow input parameter on a Microflow [Teststep](teststep).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the input parameter. |
| Datatype | The datatype of the input parameter. |
| Input type | This indicates how the value is specified; manually by the user, or through the output of a former Teststep. |
| Value | The value of the input parameter. |

## Business rules

- If the input type is Former Test Step, a former [Test Step](test-step) must be selected in order to be able to execute the Test Configuration.    

Note that if a Value on Microflow Parameter Value is not set, this means the input parameter will be set to 'Empty' when executing the test. 

## Actions on Microflow Parameter Value

### View Microflow Parameter Values
- In the Test Suite page, select the Microflow [Teststep](teststep) to view the Microflow Parameter Values for.
- The Microflow Parameter Values are shown in the right pane under Input parameters of microflow.

### Set a fixed Microflow Parameter Value
Note that Microflow Parameter Values can be either objects or primitives like String, Integer, etc.
If the Microflow Parameter Value is an object, a former Teststep must be used to provide the value.

- Click <i class="fas fa-keyboard"></i> on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute. 

For each datatype, there is a different way of entering the value:
1. String and numeric values can be entered in a text box;
2. Boolean values need to be Yes or No (and cannot be 'Empty');
3. Enumeration values can be selected from a dropdown;
4. Datetime values can be entered either fixed-date, or currentdatetime with an offset.

Note that if the value is not set, this means it will be set to 'Empty' when executing the test. 

### Use a former Teststep to set an Attribute Value
- If the Microflow Parameter Value is a primitive, first click <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" class=""></path></svg> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

## Related topics
- [Attribute Value](attribute-value)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022