# Test step

## Definition

A test step tests some specific aspect of system behaviour. A test step is always part of a test case that has the Automatic type.

A test step must be one of the following types:
- Object
- Microflow

An Object test step can execute the following actions:
- Create: create an object (without committing it to the database)
- Retrieve: retrieve object(s) from the database
- Change: change an object (without committing it to the database)
- Delete: mark an object to be deleted 
- Persist: commit all the objects to the database that are created or changed and delete all the objects that are marked as deleted, since the previously executed persist test step in the same test case, or since the start of the test case

An Object test step can contain attribute values. 

A Microflow test step executes exactly one microflow (and all the activities in it) and can contain Microflow parameter values.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the test step |
| Description | Description of the test step |
| Highlight | Indicates whether to visually highlight the test step in the test case to draw attention to it |
| Category | Either Object or Microflow |
| Action | Only for Object test steps; either Create, Retrieve, Change, Delete or Persist |
| Retrieve set | Only for Retrieve Object test steps; either All objects, or only First object |
| Retrieve option | Only for Retrieve Object test steps; either From database, From former test step, or By association (from memory) |
| Microflow MxID | Only for Microflow test steps; Mendix ID of the microflow to be executed (not shown in the application, but used to find the attribute when it has been changed after a revision update) |
| Microflow Name | Only for Microflow test steps; Name of the microflow to be executed |
| AOBC allowed | Indicates if it is possible to add an assert on object count for the test step. This is the case when <br /> - A Microflow test step where the Microflow has an output parameter that is wither an Object or a List, or <br /> - A Retrieve Object test step  <br /> (not shown in the application) |

## Business rules
- Name is mandatory
- A Microflow test step must have a microflow selected in order to be able to execute the test configuration  
- An Create, Change or Retrieve Object test step must have an entity selected in order to be able to execute the test configuration  

## Actions on ...

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
