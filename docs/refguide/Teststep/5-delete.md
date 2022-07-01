# Delete Object

## Definition

With this [Teststep](Teststep) type, an object or objects will be put on the list for objects to be deleted using a [Persist](persist) step. 

## Actions

### Add a Delete Object Teststep

- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in.
- Click "*+ Object*" to create an Object Teststep.
- Enter a name and Select 'Delete' for the Action.
- Select an entity.
- Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.
- Now, select the object that needs to be deleted, from a previous Teststep. This could be a Create or Retrieve Teststep but also a Microflow Teststep that returns an object.

When deleting objects from multiple entities, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s).

Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available.