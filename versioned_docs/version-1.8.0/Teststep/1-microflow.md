# Microflow call

## Definition

With this [Teststep](../Teststep) type, a Microflow is executed. 

The microflow is executed using the credentials of the Execution User that is configured on the Test Case, regardless if this user is allowed to, according to the selected Allowed Roles on the microflow. However, if "Apply entity access" is on for the microflow, the access on the domain model will be applied.

## Actions

### Add a Microflow Teststep
- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "*+ Teststep*" and Click "*+ Microflow*" to add a Microflow Teststep.
- Select the Microflow to execute. You can search by the module or microflow name, or by any of the input or output parameters.
- If neccesary, fill the [Microflow Parameter Values](../microflow-parameter-value).
- Click on the "Save" button. 

Note that it is possible to save the Microflow Teststep without providing a value for any of the input parameters, but this will result in MTA showing a [construction error](../construction-error).
