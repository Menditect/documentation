# Create Object

## Definition

With this [Teststep](.) type, an object is created in-memory. 

To save it to the database, add a [Persist](persist) step.

The object is created only if the Execution user is allowed to based on the domain model access rules in the Mendix model.

Domain model events (Before and After Create), if configured, are triggered.

## Add a Create Object Teststep

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "<i class="fal fa-plus-circle"></i> Teststep" and Click "<i class="fal fa-plus-circle"></i> Create teststep" to add a Create Object Teststep.
- Select an entity. You can search by name.
- [Set values](#setting-values).
- Click on the "Save" button. 


## Setting values

:::info
Binary attributes are not supported by MTA.
:::

### Include or exclude an Attribute Value
- Toggle the checkbox next to the attribute to include or exclude it.

Note that not including an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).
Including an Attribute but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 

### Set a fixed Attribute Value 
- Click "<i class="fas fa-keyboard"></i>" on the right of the attribute, indicating a fixed value should be set.
- Enter or select a value for the attribute.

Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime.

### Use a former Teststep to set an Attribute Value
- Click "<i class="fal fa-chevron-circle-right"></i>" on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep and (if the Teststep returns an Object) find the Attribute that should provide the value.

### Assign associations
- Click "<i class="fal fa-plus-circle"></i> Add" for each association that you want to set. 
- Use the "<i class="fal fa-empty-set"></i> Set empty" button to clear the association. 

Note that multiple values can only be set for both way reference set (many to many) associations.

### Generate assignments from database
You can choose to fill all the attributes and associations using existing values in the database, by clicking "<i class="fas fa-database"></i> Fill teststep with data" and then "Fill with stored data". This will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.

### Generate random values
You can choose to fill attributes with random data, by clicking "<i class="fas fa-database"></i> Fill teststep with data" and then "Fill attributes with random values". 

