# Teststep

This document is based on MTA version 1.6.

## Definition

A Teststep tests some specific aspect of system behaviour. A Teststep is always part of a [Test Case](test-case) that has the 'Automatic' type.

A Teststep must be one of the following types:
- Object
- Microflow

An Object Teststep can execute the following actions:
- Create: create an object (without committing it to the database).
- Retrieve: retrieve object(s) from the database.
- Change: change an object (without committing it to the database).
- Delete: mark an object to be deleted.
- Persist: commit all the objects to the database that are created or changed. 

An Object Teststep can contain [Attribute Values](attribute-value). 

A Microflow Teststep executes exactly one microflow (and all the activities in it) and can contain [Microflow Parameter Values](microflow-parameter-value).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Teststep. |
| Description | A description of the Teststep. |
| Highlight | This indicates whether to visually highlight the Teststep in the Test Case to draw attention to it. |
| Category | Can be either 'Object' or 'Microflow'. |
| Action | Only for Object Teststeps; either 'Create', 'Retrieve', 'Change', 'Delete' or 'Persist'. |
| Retrieve set | Only for Retrieve Object Teststeps; either 'All objects', or 'Only First object'. |
| Retrieve option | Only for Retrieve Object Teststeps; either 'From database', 'From former Teststep', or 'By association' (from memory). |
| Microflow Name | Only for Microflow Teststeps; Name of the microflow to be executed. |

## Business rules
- The name is mandatory.
- A Microflow Teststep must have a microflow selected in order to be able to execute the [Test Configuration](test-configuration).
- An 'Create', 'Change' or 'Retrieve' Object Teststep must have an entity selected in order to be able to execute the Test Configuration.

## Actions on Teststep

### View Teststeps in a Test Case
- Navigate to the [Test Suite](test-suite) that the Teststeps are in.
- Click on the Automatic [Test Case](test-case) to view the Teststeps.
- Teststeps are shown in the middle pane.

### View Teststep details
- Navigate to the Test Suite that the Teststeps are in.
- Click on the Automatic Test Case to view the Teststeps.
- Select the Teststep to view.
- Details of the Teststep are shown on the right pane.

### Create an Object Teststep
- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in.
- Click "*+ Object*" to create an Object Teststep.
- Select the type of CRUD action you want to perform on the Object.
- Select an entity (only for actions other than Persist).
- Choose "Save".
- If neccesary, select additional options like [Attribute Values](attribute-value) or associations.

### Create an Microflow Teststep
- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "*+ Microflow*" to create a Microflow Teststep.
- Select the Microflow to execute.
- Choose "Save".
- If neccesary, select additional options like [Microflow Parameter Values](microflow-parameter-value).

### Change the order of a Teststep in a Test Case
- Navigate to the Automatic Test Case that the Teststep is in.
- Click on <i class="fas fa-arrow-up"></i> or <i class="fas fa-arrow-down"></i> on the left of the name of the Teststep to move it up or down.

Note that it is possible that due to moving a Teststep and dependencies with another Teststep, an error will occur prohibiting the execution of the Test Configuration.

### Edit a Teststep
- Click on <i class="fa fa-pencil"></i> next to the Teststep name to edit the Name or the Description, or to Highlight the Teststep.

Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with.

### Configure a Teststep
- Click on <i class="fas fa-cog"></i> on the Teststep name, or click on "*Configure*" on top of the Teststep details pane on the right, to set the [Attribute Values](attribute-value) or Microflow Parameter Values](microflow-parameter-value).

When setting Attribute Values, always keep in mind that the meaning of the value is different for a Retrieve action. 
- For Create / Change Object actions and Microflow parameters, the Attribute will be *assigned* the entered value, and 'empty' if checked, but left blank.
- For a Retrieve Object action, the resulting set of objects will be *filtered* by the entered value, and 'empty' if checked, but left blank.

Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with.

### Delete a Teststep
- Navigate to the Automatic Test Case that the Teststep is in.
- Click <i class="fas fa-trash-alt"></i> on the Teststep you want to delete.

Note that it is possible that due to deleting a Teststep and dependencies with another Teststep, an error will occur prohibiting the execution of the Test Configuration.

### Open the Microflow or Domain Model associated with a Teststep in Mendix Studio
- Navigate to the Automatic Test Case that the Teststep is in.
- Select the Teststep.
- Click on "*Mx Studio*" on top of the Teststep details pane on the right.

## Related topics
- [Assert Attribute Value](assert-attribute-value)
- [Assert Object Count](assert-object-count)
- [Data Variation](datavariation)
- [Test Case](test-case)
- [Test Instruction](test-instruction)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022