# Test Step

## Definition

A Test Step tests some specific aspect of system behaviour. A Test Step is always part of a [Test Case](test-case) that has the Automatic type.

A Test Step must be one of the following types:
- Object
- Microflow

An Object Test Step can execute the following actions:
- Create: create an object (without committing it to the database)
- Retrieve: retrieve object(s) from the database
- Change: change an object (without committing it to the database)
- Delete: mark an object to be deleted 
- Persist: commit all the objects to the database that are created or changed and delete all the objects that are marked as deleted, since the previously executed persist Test Step in the same Test Case, or since the start of the Test Case

An Object Test Step can contain [Attribute Values](attribute-value). 

A Microflow Test Step executes exactly one microflow (and all the activities in it) and can contain [Microflow Parameter Values](microflow-parameter-value).

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the Test Step |
| Description | Description of the Test Step |
| Highlight | Indicates whether to visually highlight the Test Step in the Test Case to draw attention to it |
| Category | Either Object or Microflow |
| Action | Only for Object Test Steps; either Create, Retrieve, Change, Delete or Persist |
| Retrieve set | Only for Retrieve Object Test Steps; either All objects, or only First object |
| Retrieve option | Only for Retrieve Object Test Steps; either From database, From former Test Step, or By association (from memory) |
| Microflow MxID | Only for Microflow Test Steps; Mendix ID of the microflow to be executed (not shown in the application, but used to find the attribute when it has been changed after a revision update) |
| Microflow Name | Only for Microflow Test Steps; Name of the microflow to be executed |
| AOBC allowed | Indicates if it is possible to add an assert on object count for the Test Step. This is the case when <br /> - A Microflow Test Step where the Microflow has an output parameter that is wither an Object or a List, or <br /> - A Retrieve Object Test Step  <br /> (not shown in the application) |

## Business rules
- Name is mandatory
- A Microflow Test Step must have a microflow selected in order to be able to execute the Test Configuration  
- An Create, Change or Retrieve Object Test Step must have an entity selected in order to be able to execute the Test Configuration  

## Actions on ...

### View ...
- ...

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
