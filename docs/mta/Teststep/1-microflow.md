# Microflow call

## Definition

With this [Teststep](.) type, a Microflow is executed. 

## Allowed roles

Microflows configured in a Microflow teststep are always executed regardless of the "Allowed roles" setting in Mendix.

## Entity Access

### Security applied

If the [Test Case](../test-case) that this teststep is in, has Apply Security enabled:
- For object actions in microflows that have "Apply entity access" set to "Yes", Entity Access will be checked;
- For object return values: if there is one (or more) attribute where the specified User does not have access to, an error will be shown upon execution.

### Security not applied 

If the [Test Case](../test-case) that this teststep is in, does not have Apply Security enabled, security limitations will be ignored.

## Add a Microflow Teststep
- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Microflow teststep" to add a Microflow Teststep.
- Select the Microflow to execute. You can search by the module or microflow name, or by any of the input or output parameters.
- [Set Microflow Parameters](#setting-microflow-parameters).
- Click on the "Save" button. 

## Setting Microflow Parameters

A microflow parameter can be an Object, a List of Objects, or any of the primitive types: String, Enumeration, Datetime, Integer, Decimal, Boolean.

Note that if the microflow contains input parameters, it is possible to save the Microflow Teststep without providing a value for these, but this may result in MTA showing a [Construction Error](../construction-error).

### Assign Empty 

- Select the <i class="fal fa-empty-set"></i> button for the parameter to set it to 'Empty'.

### Assign fixed value

You can only assign fixed values to primitive types. 
Assigning values to an Object must be done [from former Teststep](#assign-value-from-former-teststep).

- Click <i class="fas fa-keyboard"></i> on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute. 

For each datatype, there is a different way of entering the value:
1. String and numeric values can be entered in a text box;
2. Boolean values need to be Yes or No (and cannot be 'Empty');
3. Enumeration values can be selected from a dropdown;
4. Datetime values can be entered either with a specified date, or currentdatetime with an offset.

Note that if the value is not set, this means it will be set to 'Empty' when executing the test. 

### Assign value from former Teststep

** Setting a primitive value **
- First click <i class="fal fa-chevron-circle-right"></i> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep and (if the Teststep returns an Object) find the Attribute that should provide the value.

** Setting an Object value **
- Click "Select input", and either choose to select an existing teststep to set the objecct, or add a new Teststep that [Creates](create) the value or [Retrieves](retrieve) the value from database.
- Select or Save the Teststep that should provide the value.

:::note
Make sure the selected teststep returns one object, and not multiple objects. <br/>If the microflow returns multiple objects, the parameter will be empty when executing.
:::


### Assign values to a List of Objects
If a Microflow Parameter is a List instead of a single Object, it is possible to add multiple objects, thus filling the list. Use the "<i class="fal fa-plus-circle"></i>" Another input teststep" to accomplish this.

Note that it is not possible to select the same previous teststep multiple times.

### Include a Microflow Parameter Value as a Data Variation Item
- Select the <i class="fas fa-table"></i> button for the parameter that you want to include in [Data Variation](../datavariation).
