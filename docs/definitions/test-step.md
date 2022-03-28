# Test Step

## Definition

A Test Step tests some specific aspect of system behaviour. A Test Step is always part of a [Test Case](test-case) that has the 'Automatic' type.

A Test Step must be one of the following types:
- Object
- Microflow

An Object Test Step can execute the following actions:
- Create: create an object (without committing it to the database).
- Retrieve: retrieve object(s) from the database.
- Change: change an object (without committing it to the database).
- Delete: mark an object to be deleted .
- Persist: commit all the objects to the database that are created or changed and delete all the objects that are marked as deleted, since the previously executed persist Test Step in the same Test Case, or since the start of the Test Case.

An Object Test Step can contain [Attribute Values](attribute-value). 

A Microflow Test Step executes exactly one microflow (and all the activities in it) and can contain [Microflow Parameter Values](microflow-parameter-value).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the Test Step. |
| Description | Description of the Test Step. |
| Highlight | Indicates whether to visually highlight the Test Step in the Test Case to draw attention to it. |
| Category | Either 'Object' or 'Microflow'. |
| Action | Only for Object Test Steps; either 'Create', 'Retrieve', 'Change', 'Delete' or 'Persist'. |
| Retrieve set | Only for Retrieve Object Test Steps; either 'All objects', or 'Only First object'. |
| Retrieve option | Only for Retrieve Object Test Steps; either 'From database', 'From former Test Step', or 'By association' (from memory). |
| Microflow Name | Only for Microflow Test Steps; Name of the microflow to be executed. |

## Business rules
- Name is mandatory.
- A Microflow Test Step must have a microflow selected in order to be able to execute the Test Configuration.
- An 'Create', 'Change' or 'Retrieve' Object Test Step must have an entity selected in order to be able to execute the Test Configuration.

## Actions on Test Step

### View Test Steps in a Test Case
- Navigate to the Test Suite that the Test Steps are in.
- Click on the Automatic Test Case to view the Test Steps.
- Test Steps are shown in the middle pane.

### View Test Step details
- Navigate to the Test Suite that the Test Steps are in.
- Click on the Automatic Test Case to view the Test Steps.
- Select the Test Step to view.
- Details of the Test Step are shown on the right pane.

### Create an Object Test Step
- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Test Step in.
- Click "*+ Object*" to create an Object test step.
- Select the type of CRUD action you want to perform on the Object.
- Select an entity (only for actions other than Persist).
- Choose "Save".
- If neccesary, select additional options like [Attribute Values](attribute-value) or associations.

### Create an Microflow Test Step
- Navigate to the Test Suite and select the Test Case that you want to create a Test Step in.
- Click "*+ Microflow*" to create an Microflow test step.
- Select the Microflow to execute.
- Choose "Save".
- If neccesary, select additional options like [Microflow Parameter Values](microflow-parameter-value).

### Change the order of a Test Step in a Test Case
- Navigate to the Automatic Test Case that the Test Step is in.
- Click on <i class="fas fa-arrow-up"></i> or <i class="fas fa-arrow-down"></i> on the left of the name of the Test Step to move it up or down.

Note that it is possible that due to moving a Test Step and dependencies with another Test Step, an error will occur prohibiting the execution of the Test Configuration.

### Edit a Test Step
- Click on <i class="fa fa-pencil"></i> next to the Test Step name to edit the Name or the Description, or to Highlight the Test Step

Note that it not is possible to change the action or type of Test Step after creation, or change the entity or microflow that it is associated with.

### Configure a Test Step
- Click on <i class="fas fa-cog"></i> on the Test Step name, or click on "*Configure*" on top of the test step details pane on the right, to set the [Attribute Values](attribute-value) or Microflow Parameter Values](microflow-parameter-value).

Note that it not is possible to change the action or type of Test Step after creation, or change the entity or microflow that it is associated with.

### Delete a Test Step
- Navigate to the Automatic Test Case that the Test Step is in.
- Click <i class="fas fa-trash-alt"></i> on the Test Step you want to delete.

Note that it is possible that due to deleting a Test Step and dependencies with another Test Step, an error will occur prohibiting the execution of the Test Configuration.

### Open the Microflow or Domain Model associated with a Test Step in Mendix Studio
- Navigate to the Automatic Test Case that the Test Step is in.
- Select the Test Step.
- Click on "*Mx Studio*" on top of the test step details pane on the right.

## Related topics
- [Assert Attribute Value](assert-attribute-value)
- [Assert Object Count](assert-object-count)
- [Data Variation](datavariation)
- [Test Case](test-case)
- [Test Instruction](test-instruction)
