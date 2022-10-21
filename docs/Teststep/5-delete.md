# Delete Object

## Definition

With this [Teststep](../Teststep) type, an object or objects will be put on the list for objects to be deleted using a [Persist](persist) step. 

## Actions

### Add a Delete Object Teststep

There are two ways to add a Delete Object teststep. The first one is quicker:

The new way: 

- Click on the "..." button on the Teststep that returns the object that you want to delete, and choose "*+ Delete output*".

The legacy way:

1. Select the Test Case that you want to create a Teststep in.
2. Click "*+ Teststep*" and Click "*+ Delete*" to add a Delete Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be deleted. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.
5. Click on the "Save" button. 

When deleting objects from multiple entities, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s).

Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available.