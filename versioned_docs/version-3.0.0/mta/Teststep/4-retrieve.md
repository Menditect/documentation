# Retrieve Object

## Definition

With this [Teststep](.) type, objects can be retrieved from database or memory and used in subsequent Teststeps. Values entered for attributes and associations will be converted into an XPATH expression and subsequently filter the list of objects retrieved. Also objects that are output from previous teststeps can be filtered. 

## Entity Access

### Security applied

If the [Test Case](../test-case) that this teststep is in, has Apply Security enabled, the "Path to User" XPath constraint (if specified) on the Entity is evaluated to determine which objects are included. If there is no XPath constraint, all objects are included.

`Member rights` are ignored: for all objects, all attribute values will be shown, **regardless of specified Read/Write Entity Access**.

### Security not applied

If the [Test Case](../test-case) that this teststep is in, does not have Apply Security enabled, all objects are included.

## Retrieve from database

- Navigate to the Test Suite and move the mouse to the position you want to create a Teststep in.
- Click <i class="fal fa-plus-circle"></i> and Click `Retrieve teststep` to add a Retrieve Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in a [Construction Error](../construction-error), even if only retrieving the first object. In that case you need to filter using attributes and associations.
- Select "Retrieve from database" in the Retrieve options.
- [Set filter values](#set-filter-values).
- Click on the "Save" button. 

## Retrieve by association

- Navigate to the Test Suite and move the mouse to the position you want to create a Teststep in.
- Click <i class="fal fa-plus-circle"></i> and Click `Retrieve teststep` to add a Retrieve Teststep.
- Select an entity. You can search by name.
- Select either "All objects" or "Only first object" in the Retrieve options. Note that when there are more than 1000 results, the Teststep will result in a [Construction Error](../construction-error), even if only retrieving the first object. In that case you need to filter using attributes and associations.
- Select "Retrieve by association" in the Retrieve options.
- [Set filter values](#set-filter-values).
- Click on the "Save" button. 

Note that when retrieving by association, data needs to exist either in database, or have been created in the same Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

## Retrieve from former Teststep

- Navigate to the Test Suite and select the Test Case that you want to create a Teststep in.
- Choose <i class="fal fa-plus-circle"></i> **Retrieve output**

Note that if you move the new Teststep to a lower Test Case, data needs to be saved to the database in the originating Test Case. Data created in a previous Test Case that is not saved to the database will be lost.

## Set filter values

:::info
Binary attributes are not supported by MTA.
:::

### Include or exclude an Attribute filter
- Toggle the <i class="fal fa-filter"></i> button next to the attribute to include or exclude it.

### Manually set an Attribute filter
- Click <i class="fas fa-keyboard"></i> on the right of the attribute, which indicates that a filter operation and value(s) will be entered manually.
- Choose an Operator (see below for the complete list).
- Enter or select value(s) to be used as a filter on the attribute.

Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime.

The following Operators are supported for the Mendix data types:

|                          | String                       | Integer                      | Decimal                      | Boolean                      | Datetime                     | Enumeration                  |
| ------------------------ | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| Equals                   | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| Does not equal           | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| Contains                 | <i class="fas fa-check"></i> |                              |                              |                              |                              |                              |
| Does not Contain         | <i class="fas fa-check"></i> |                              |                              |                              |                              |                              |
| Within Range             |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Outside of Range         |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | <i class="fas fa-check"></i> |                              |
| Greater than             |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | (Use Range)                  |                              |
| Greater than or Equal to |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | (Use Range)                  |                              |
| Less than                |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | (Use Range)                  |                              |
| Less than or Equal to    |                              | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |                              | (Use Range)                  |                              |



### Use the value from a former Teststep to set the Attribute filter
- Click <i class="fal fa-chevron-circle-right"></i> on the right of the attribute, indicating a former Teststep should be used to set the value.
- Select the Teststep and (if the Teststep returns an Object) find the Attribute that should provide the value.

Note: you cannot choose to have a former Teststep set the value if you want to specify a Range of values. 

### Assign associations
- Click "<i class="fal fa-plus-circle"></i> Add" for each association that you want to set. 
- Use the "<i class="fal fa-empty-set"></i> Set empty" button to clear the association. 

Note that multiple values can only be set for both way reference set (many to many) associations.

### Generate assignments from database
You can choose to fill all the attributes and associations using existing values in the database, 
by clicking "<i class="fas fa-database"></i> Fill teststep with data" and then "Fill with stored data". 
This will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.

:::note
Because of performance reasons, the amount of associations retrieved is limited to 3.
:::

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 November 2025