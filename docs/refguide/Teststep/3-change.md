# Change Object

## Definition

With this [Teststep](../refguide/teststep) type, an object is changed in-memory and put on the list for objects to be committed using a [Persist](persist) step.

## Actions

### Add a Change Object Teststep

- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in.
- Click "*+ Object*" to create an Object Teststep.
- Enter a name and Select 'Change' for the Action.
- Select an entity.
- Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.
- Now, select the object that needs to be changed, from a previous Teststep. This could be a Create or Retrieve Teststep but also a Microflow Teststep that returns an object.
- Select [Attribute Values](../refguide/attribute-value) and associations.

Note that not checking an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.
Checking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 