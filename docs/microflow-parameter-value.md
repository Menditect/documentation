---
sidebar_position: 14
---


# Microflow Parameter Value

## Definition

The Microflow Parameter Value contains the value for a Microflow input parameter on a Microflow [Teststep](teststep).

## Properties
| Name       | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Name       | The name of the input parameter.                                                                             |
| Datatype   | The datatype of the input parameter.                                                                         |
| Input type | This indicates how the value is specified; manually by the user, or through the output of a former Teststep. |
| Value      | The value of the input parameter.                                                                            |

## Business rules

- If the Datatype is an Object, either the value must be set to 'Empty' using the <i class="fal fa-empty-set"></i> button, or a former [Teststep](teststep) must be selected in order to be able to execute the Test Configuration.  
- If the Datatype is not an Object and the input type is Former Teststep, a former [Teststep](teststep) must be selected in order to be able to execute the Test Configuration.  

Note that if a Value on Microflow Parameter Value is not set, this means the input parameter will be set to 'Empty' when executing the test. 

## Actions on Microflow Parameter Value

### View Microflow Parameter Values
- In the Test Suite page, select the Microflow [Teststep](teststep) to view the Microflow Parameter Values for.
- The Microflow Parameter Values are shown in the right pane under Input parameters of microflow.

### Use an Empty object for the Microflow Parameter Value
- In the Test Suite page, select the Microflow Teststep to view the Microflow Parameter Values for.
- Select the <i class="fal fa-empty-set"></i> button for the parameter to set it to 'Empty'.

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

** Setting a primitive (String, Integer, Datetime, etc) value **
- First click <i class="fal fa-chevron-circle-right"></i> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

** Setting an object value **
- Click "Select input", and either choose to select an existing teststep to set the objecct, or add a new Teststep that [Creates](Teststep/create) the value or [Retrieves](Teststep/retrieve) the value from database.
- Select or Save the Teststep that should provide the value.

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

Last updated 22 september 2022