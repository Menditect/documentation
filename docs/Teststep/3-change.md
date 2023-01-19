# Change Object

## Definition

With this [Teststep](.) type, an object from a previous [Teststep](.) is changed in-memory.

To save it to the database, add a [Persist](persist) step.

## Add a Change Object Teststep

There are two options to add a Change Object teststep. The first option is quicker:

**Option 1:**

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep that returns the object that you want to change, and choose "<i class="fal fa-plus-circle"></i> Change output".

**Option 2:**

1. Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
2. Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Change teststep" to add a Change Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be changed. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.

## Setting values

### Include or exclude an Attribute Value
- Toggle the checkbox next to the attribute to include or exclude it.

Note that not including an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.
Including an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 

### Set a fixed Attribute Value 
- Click "<i class="fas fa-keyboard"></i>" on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute.

Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime.

### Use a former Teststep to set an Attribute Value
- Click "<i class="fal fa-chevron-circle-right"></i>" on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep that should provide the value.

### Assign associations
- Click "<i class="fal fa-plus-circle"></i> Add" for each association that you want to set. 
- Use the "<i class="fal fa-empty-set"></i> Set empty" button to clear the association. 

Note that multiple values can only be set for both way reference set (many to many) associations.

### Generate assignments from database
You can choose to fill all the attributes and associations using existing values in the database, by clicking "<i class="fas fa-database"></i> Fill with values from database". This will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.