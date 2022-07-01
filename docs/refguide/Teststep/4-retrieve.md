# Retrieve Object

## Definition

With this [Teststep](../Teststep) type, objects can be retrieved from database or memory and used in subsequent Teststeps. Also objects that are output from previous teststeps can be filtered. 

## Actions

### Add a Retrieve Object Teststep

- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in.
- Click "*+ Object*" to create an Object Teststep.
- Enter a name and Select 'Retrieve' for the Action.
- Select an entity.
- Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in an error, even if only retrieving the first object.
- Follow any of below steps.

#### Retrieve from database

- Select "Retrieve from database" in the Retrieve options.
- Select [Attribute Values](../attribute-value) and associations.

#### Retrieve by association

- Select "Retrieve by association" in the Retrieve options.
- Select [Attribute Values](../attribute-value) and associations.

Note that when retrieving by association, data needs to exist either in database, or have been created in the same Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

#### Retrieve from former Teststep

- Select "Retrieve using output from former test step" in the Retrieve options.
- Now, select the object that needs to be changed, from a previous Teststep. This could be a Create or Retrieve Teststep but also a Microflow Teststep that returns an object.
- Select [Attribute Values](../attribute-value) and associations.

Note that when retrieving from a former Teststep in a previous Test Case, data needs to be saved to the database in that Test Case. Data created in a previous Test Case that is not saved to the database will be lost.
