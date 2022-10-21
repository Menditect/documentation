# Microflow Parameter Value

This document is based on MTA version 1.7.

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

- If the Datatype is an Object, either the value must be set to 'Empty' using the <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M491.3 20.69c-6.25-6.25-16.38-6.25-22.62 0L391.2 98.15C354.8 66.96 307.7 48 256 48C141.1 48 48 141.1 48 256c0 51.68 18.96 98.85 50.15 135.2l-77.46 77.46c-6.25 6.25-6.25 16.38 0 22.62C23.81 494.4 27.91 496 32 496s8.188-1.562 11.31-4.688l77.46-77.46C157.2 445 204.3 464 256 464c114.9 0 208-93.13 208-208c0-51.68-18.96-98.85-50.15-135.2l77.46-77.46C497.6 37.06 497.6 26.94 491.3 20.69zM80 256c0-97.05 78.95-176 176-176c42.78 0 82.01 15.37 112.5 40.83L120.8 368.5C95.37 338 80 298.8 80 256zM432 256c0 97.05-78.95 176-176 176c-42.78 0-82.01-15.37-112.5-40.83l247.7-247.7C416.6 173.1 432 213.2 432 256z" class=""></path></svg> button, or a former [Teststep](teststep) must be selected in order to be able to execute the Test Configuration.  
- If the Datatype is not an Object and the input type is Former Teststep, a former [Teststep](teststep) must be selected in order to be able to execute the Test Configuration.  

Note that if a Value on Microflow Parameter Value is not set, this means the input parameter will be set to 'Empty' when executing the test. 

## Actions on Microflow Parameter Value

### View Microflow Parameter Values
- In the Test Suite page, select the Microflow [Teststep](teststep) to view the Microflow Parameter Values for.
- The Microflow Parameter Values are shown in the right pane under Input parameters of microflow.

### Use an Empty object for the Microflow Parameter Value
- In the Test Suite page, select the Microflow Teststep to view the Microflow Parameter Values for.
- Select the <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M491.3 20.69c-6.25-6.25-16.38-6.25-22.62 0L391.2 98.15C354.8 66.96 307.7 48 256 48C141.1 48 48 141.1 48 256c0 51.68 18.96 98.85 50.15 135.2l-77.46 77.46c-6.25 6.25-6.25 16.38 0 22.62C23.81 494.4 27.91 496 32 496s8.188-1.562 11.31-4.688l77.46-77.46C157.2 445 204.3 464 256 464c114.9 0 208-93.13 208-208c0-51.68-18.96-98.85-50.15-135.2l77.46-77.46C497.6 37.06 497.6 26.94 491.3 20.69zM80 256c0-97.05 78.95-176 176-176c42.78 0 82.01 15.37 112.5 40.83L120.8 368.5C95.37 338 80 298.8 80 256zM432 256c0 97.05-78.95 176-176 176c-42.78 0-82.01-15.37-112.5-40.83l247.7-247.7C416.6 173.1 432 213.2 432 256z" class=""></path></svg> button for the parameter to set it to 'Empty'.

### Set a fixed Microflow Parameter Value
Note that Microflow Parameter Values can be either objects or primitives like String, Integer, etc.
If the Microflow Parameter Value is an object, a former Teststep must be used to provide the value.

- Click <i class="fas fa-keyboard"></i> on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute. 

For each datatype, there is a different way of entering the value:
1. String and numeric values can be entered in a text box;
2. Boolean values need to be Yes or No (and cannot be 'Empty');
3. Enumeration values can be selected from a dropdown;
4. Datetime values can be entered either with a specified date, or currentdatetime with an offset.

Note that if the value is not set, this means it will be set to 'Empty' when executing the test. 

### Use a former Teststep to set an Attribute Value
- If the Microflow Parameter Value is a primitive, first click <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" class=""></path></svg> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

### Fill a Microflow Parameter List
If a Microflow Parameter is a List instead of a single Object, it is possible to add multiple objects, thus filling the list. Use the "+ Another input teststep" to accomplish this.

Note that it is not possible to select the same previous teststep multiple times.

### Include a Microflow Parameter Value as a Data Variation Item
- In the Test Suite page, select the Microflow Teststep to view the Microflow Parameter Values for.
- Select the <i class="fas fa-table"></i> button for the parameter that you want to include in [Data Variation](datavariation).

## Related topics
- [Attribute Value](attribute-value)
- [Teststep](teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 12 july 2022