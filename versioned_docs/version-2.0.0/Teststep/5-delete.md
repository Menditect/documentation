# Delete Object

## Definition

With this [Teststep](.) type, an object or objects from a previous [Teststep](.) is marked for deletion.

To delete it from the database, add a [Persist](persist) step.

## Actions

### Add a Delete Object Teststep

There are two options to Delete an Object. The first option is quicker:

**Option 1:**

- Click on the '<i class="fas fa-ellipsis"></i>' button on the Teststep that returns the object that you want to delete, and choose "<i class="fal fa-plus-circle"></i> Delete output".

**Option 2:**

1. Select the Test Case that you want to create a Teststep in.
2. Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Delete teststep" to add a Delete Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be deleted. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.
5. Click on the "Save" button. 

When deleting objects from multiple entities, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s).

Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available.