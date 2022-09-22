# Retrieve Object

## Definition

With this [Teststep](../Teststep) type, objects can be retrieved from database or memory and used in subsequent Teststeps. Also objects that are output from previous teststeps can be filtered. 

When setting Attribute Values for a Retrieve Object action, the resulting set of objects will be *filtered* by the entered value, and 'empty' if checked, but left blank.

## Actions

### Retrieve from database

- Select the Test Case that you want to create a Teststep in.
- Click "*+ Teststep*" and Click "*+ Retrieve*" to add a Retrieve Object Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an error, even if only retrieving the first object.
- Select "Retrieve from database" in the Retrieve options.
- Select [Attribute Values](../attribute-value) that you want to filter on and enter a value.
- Click '+Add' for each association that you want to filter on. Use the <i class="fa-empty-set"></i> "Set empty" button to indicate the association must be empty. 
- Click on the "Save" button. 

### Retrieve by association

- Select the Test Case that you want to create a Teststep in.
- Click "*+ Teststep*" and Click "*+ Retrieve*" to add a Retrieve Object Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an error, even if only retrieving the first object.
- Select "Retrieve by association" in the Retrieve options.
- Select [Attribute Values](../attribute-value) that you want to filter on and enter a value.
- Click '+Add' for each association that you want to filter on. Use the <i class="fa-empty-set"></i> "Set empty" button to indicate the association must be empty. 
- Click on the "Save" button. 

Note that when retrieving by association, data needs to exist either in database, or have been created in the same Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

### Retrieve from former Teststep

There are two ways to Retrieve from former Teststep. The first one is quicker:

The new way: 

- Click on the "..." button on the Teststep that returns the object that you want to change, and choose "*+ Retrieve output*".

The legacy way:

1. Select the Test Case that you want to create a Teststep in.
2. Click "*+ Teststep*" and Click "*+ Retrieve*" to add a Retrieve Object Teststep.
3. Select an entity. You can search by name.
4. Select the previous Teststep that returns the object that needs to be changed. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object.
5. Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an error, even if only retrieving the first object.
6. Select "Retrieve using output from former test step" in the Retrieve options.

From there:
- Select [Attribute Values](../attribute-value) that you want to filter on and enter a value.
- Click '+Add' for each association that you want to filter on. Use the <i class="fa-empty-set"></i> "Set empty" button to indicate the association must be empty. 
- Click on the "Save" button. 

Note that when retrieving from a former Teststep in a previous Test Case, data needs to be saved to the database in that Test Case. Data created in a previous Test Case that is not saved to the database will be lost.
