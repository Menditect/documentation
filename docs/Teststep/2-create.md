# Create Object

## Definition

With this [Teststep](../Teststep) type, an object is created in-memory.

AANPASSEN OVER SECURITY

## Actions

### Add a Create Object Teststep

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "<i class="fal fa-info-circle"></i> Teststep" and Click "<i class="fal fa-info-circle"></i> Create" to add a Create Object Teststep.
- Select an entity. You can search by name.
- Select [Attribute Values](../attribute-value) that you want to use and enter a value.
- Click "<i class="fal fa-info-circle"></i> Add" for each association that you want to set. Use the "<i class="fa-empty-set"></i> Set empty" button to clear the association. Note that multiple values can only be set for both way reference set (many to many) associations.
- *Alternatively* you can choose to fill all the attributes and associations using existing values in the database, by clicking "<i class="fas fa-database"></i> Fill with values from database"!
- Click on the "Save" button. 

Note that not checking an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).
Including an Attribute but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 