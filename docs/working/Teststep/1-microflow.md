# Microflow call

## Definition

With this Teststep type, a Microflow is executed. 

The microflow is executed using the credentials of the Execution User that is configured on the Test Case, regardless if this user is allowed to, according to the selected Allowed Roles on the microflow. However, if "Apply entity access" is on for the microflow, the access on the domain model will be applied.

## Actions

### Create a Microflow Teststep
- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "*+ Microflow*" to create a Microflow Teststep.
- Select the Microflow to execute.
- Choose "Save".
- If neccesary, select additional options like [Microflow Parameter Values](../refguide/microflow-parameter-value).
