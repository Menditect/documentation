# Change Object

## Definition

With this [Teststep](../Teststep) type, an object is changed in-memory and put on the list for objects to be committed using a [Persist](persist) step.

When setting Attribute Values for a Change Object action, the Attribute will be *assigned* the entered value, and 'empty' if checked, but left blank.

## Actions

### Add a Change Object Teststep

There are two ways to add a Change Object teststep. The first one is quicker:

The new way: 

- Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep that returns the object that you want to change, and choose "<i class="fal fa-info-circle"></i>" Change output".

The legacy way:

1. Select the Test Case that you want to create a Teststep in.
2. Click "<i class="fal fa-info-circle"></i> Teststep" and Click "<i class="fal fa-info-circle"></i> Change" to add a Change Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be changed. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.

From there:
- Select [Attribute Values](../attribute-value) that you want to use and enter a value.
- Click "<i class="fal fa-info-circle"></i> Add" for each association that you want to set. Use the "<i class="fa-empty-set"></i> Set empty" button to clear the association. Note that multiple values can only be set for both way reference set (many to many) associations.
- *Alternatively* you can choose to fill all the attributes and associations using existing values in the database, by clicking "<i class="fas fa-database"></i> Fill with values from database"!
- Click on the "Save" button. 

Note that not checking an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.
Checking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 