# Retrieve Object

## Definition

With this [Teststep](.) type, objects can be retrieved from database or memory and used in subsequent Teststeps. Values entered for attributes and associations will be converted into an XPATH expression and subsequently filter the list of objects retrieved. Also objects that are output from previous teststeps can be filtered. 

The object is retrieved only if the Execution user is allowed to based on the domain model access rules in the Mendix model.

## Retrieve from database

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Retrieve teststep" to add a Retrieve Object Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an [Error](error), even if only retrieving the first object. In that case you need to filter using attributes and associations.
- Select "Retrieve from database" in the Retrieve options.
- [Set filter values](#set-filter-values).
- Click on the "Save" button. 

## Retrieve by association

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Retrieve teststep" to add a Retrieve Object Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an [Error](error), even if only retrieving the first object. In that case you need to filter using attributes and associations.
- Select "Retrieve by association" in the Retrieve options.
- [Set filter values](#set-filter-values).
- Click on the "Save" button. 

Note that when retrieving by association, data needs to exist either in database, or have been created in the same Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

## Retrieve from former Teststep

There are two options to Retrieve from former Teststep. The first option is quicker:

**Option 1:**

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep that returns the object that you want to retrieve, and choose "<i class="fal fa-plus-circle"></i> Retrieve output".

**Option 2:**

1. Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
2. Click "<i class="fal fa-plus-circle"></i> Add" and Click "<i class="fal fa-plus-circle"></i> Retrieve teststep" to add a Retrieve Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be retrieved. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.
5. Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an [Error](error), even if only retrieving the first object.
6. Select "Retrieve using output from former test step" in the Retrieve options.
7. [Set filter values](#set-filter-values).
8. Click on the "Save" button. 

Note that when retrieving from a former Teststep in a previous Test Case, data needs to be saved to the database in that Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

## Set filter values

### Include or exclude an Attribute Value
- Toggle the <i class="fal fa-filter"></i> button next to the attribute to include or exclude it.

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

