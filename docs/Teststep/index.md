# Teststep



## Definition

A Teststep tests some specific aspect of system behaviour. A Teststep is always part of a [Test Case](test-case).

The Teststep is the lowest or fourth level of the 4-layer framework that is used in MTA. It describes the actual operating functions. 

A Teststep must be one of the following types:
- [Microflow call](Teststep/microflow)
- Object Action

An Object Teststep can execute the following actions:
- [Create](Teststep/create): create an object (without committing it to the database).
- [Retrieve](Teststep/retrieve): retrieve object(s) from memory or database.
- [Change](Teststep/change): change an object (without committing it to the database).
- [Delete](Teststep/delete): mark an object to be deleted. When deleting, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s).
- [Persist](Teststep/persist): finalizes above Object teststeps. 

Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available.


## Properties
| Name            | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Name            | The name of the Teststep.                                                                                              |
| Description     | A description of the Teststep.                                                                                         |
| Highlight       | This indicates whether to visually highlight the Teststep in the Test Case to draw attention to it.                    |
| Category        | Can be either 'Object' or 'Microflow'.                                                                                 |
| Action          | Only for Object Teststeps; either 'Create', 'Retrieve', 'Change', 'Delete' or 'Persist'.                               |
| Retrieve set    | Only for Retrieve Object Teststeps; either 'All objects', or 'Only First object'.                                      |
| Retrieve option | Only for Retrieve Object Teststeps; either 'From database', 'From former Teststep', or 'By association' (from memory). |
| Microflow Name  | Only for Microflow Teststeps; Name of the microflow to be executed.                                                    |

## Business rules
- The name is mandatory.
- A Microflow Teststep must have a microflow selected in order to be able to execute the [Test Configuration](test-configuration).
- An 'Create', 'Change' or 'Retrieve' Object Teststep must have an entity selected in order to be able to execute the Test Configuration.

## Actions on Teststep

### View Teststeps in a Test Case
- Navigate to the [Test Suite](test-suite) that the Teststeps are in.
- Click on the [Test Case](test-case) to view the Teststeps.
- Teststeps are shown in the middle pane.

### View Teststep details
- Navigate to the Test Suite that the Teststeps are in.
- Click on the Test Case to view the Teststeps.
- Select the Teststep to view.
- Details of the Teststep are shown on the right pane.

### Create a Teststep
- Please consult the documentation for the respective Teststep type: [Microflow call](Teststep/microflow), [Create](Teststep/create), [Retrieve](Teststep/retrieve), [Change](Teststep/change), [Delete](Teststep/delete) or [Persist](Teststep/persist).

### Move a Teststep

First, navigate to the Test Case that the Teststep is in.

**Option 1: Move a teststep 1 position up or down.** 
- Click on the <i class="fas fa-ellipsis"></i> button on the Teststep.
- Click on <i class="fas fa-arrow-up"></i> or "<i class="fas fa-arrow-down"></i>" to move the Teststep up or down.
- Review and correct any resulting configuration [Errors](error).

**Option 2: Move a Teststep inside a Test Case.** 
- Click on "<i class="fa fa-pencil"></i> Edit".
- Use drag and drop to position the Teststep.
- Review any configuration [Errors](error) and save your changes.

**Option 3: Move a Teststep to another Test Case.** 
- Click on the <i class="fas fa-ellipsis"></i> button on the Teststep.
- Click on "<i class="fas fa-arrow-right"></i> Another test case".
- Use drag and drop to move the Teststep.
- Review any configuration [Errors](error) and save your changes.


### Edit a Teststep
- Click on "<i class="fa fa-pencil"></i> Edit".
- Click on <i class="fa fa-pencil"></i> next to the Teststep name to edit the Name or the Description, or to Highlight the Teststep.

Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with.

### Configure a Teststep
- Click on <i class="fas fa-cog"></i> on the Teststep name to set the Attribute Values or Microflow Parameter Values.

When setting Attribute Values, always keep in mind that the meaning of the value is different for a Retrieve action. 
- For Create / Change Object actions and Microflow parameters, the Attribute will be *assigned* the entered value, and 'empty' if checked, but left blank.
- For a Retrieve Object action, the resulting set of objects will be *filtered* by the entered value, and 'empty' if checked, but left blank.

Note that it not is possible to change the action or type of Teststep after creation, or change the entity or microflow that it is associated with.

### Delete a Teststep
- Navigate to the Test Case that the Teststep is in.
- Click on the <i class="fas fa-ellipsis"></i> button on the Teststep.
- Click on "<i class="fas fa-trash-alt"></i> Test step".

Note that it is possible that due to deleting a Teststep and dependencies with another Teststep, an [Error](error) will occur prohibiting the execution of the Test Configuration.

### Open the Microflow or Domain Model associated with a Teststep in Mendix Studio
- Navigate to the Test Case that the Teststep is in.
- Select the Teststep.
- Click on "*Mx Studio*" on top of the Teststep details pane on the right.

## Related topics
- [Assert](Assert/)
- [Data Variation](datavariation)
- [Test Case](test-case)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023