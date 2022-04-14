# Assert on Attribute Value

## Definition

An Assert on Attribute Value formulates an expected result of an attribute in a [Teststep](teststep) upon execution. It is possible to either define the result to have a single value, or a range that the value should be in. A Teststep can have multiple Asserts on Attribute Value.

An Assert on Attribute Value can be added for:
- an [Attribute Value](attribute-value) of a created or changed object;
- an Attribute Value of a retrieved object. In that case the assert evaluates the Attribute Value of all retrieved objects;
- the value of a primitive microflow output parameter like string, integer, etc.

Note that there are also [Asserts on Object Count](assert-object-count), that are added on a retrieve object action, or on a microflow call action. 

When a Teststep uses [Data Variation](datavariation) to manipulate Teststep input, the Assert can be applied as a [Data Variation Item](datavariation-item) for each defined variation.

Each Assert is evaluated after the execution of a Teststep. A Teststep execution fails when the evaluated value does not match to the defined expectation. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made. <br />  - The 'Equals' / 'Not equals' type means that the attribute value should exactly match (or not match, respectively) a single given value. <br />   - The 'Range' / 'Not range' type  means that the attribute value should be within (or outside, respectively) the given boundaries. A 'Range' type is only applicable for numeric or date attributes.  <br />   - The 'Greater than' / 'Greater than or equal to' means that the attribute value should be higher than (or include, respectively) the given value.  <br />   - The 'Less than' / 'Less than or equal to' means that the attribute value should be lower than (or include, respectively) the given value.  <br />  |
| Value | The expected value of the attribute upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass. |
| Min value | The expected lower boundary of the attribute value if the selected compare type is 'Range'. |
| Max value | The expected higher boundary of the attribute value if the selected compare type is 'Range'. |
| Trim string values | Used to be able trim string values for leading and trailing space characters before evaluating the result (only applicable for string attributes). |

## Business rules
- The compare type is mandatory.
- If the compare type is 'Range', both Min and Max values are mandatory.

The following Assert Compare types are supported for the Mendix data types:

|   | String | Integer | Decimal | Boolean | Datetime | Enumeration | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Equals | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | 
| Does not equal | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | 
| Contains | <i class="fas fa-check"></i> |  |  |  |  |  | 
| Does not Contain | <i class="fas fa-check"></i> |  |  |  |  |  | 
| Within Range |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |  
| Outside of Range |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |  
| Greater than |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |   
| Greater than or Equal to |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |  
| Less than |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |   
| Less than or Equal to |  | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |  | <i class="fas fa-check"></i> |   

## Actions on an Assert on Attribute Value

### View Teststeps that have Asserts 
- All Teststeps in a [Test Case](test-case) with one or more Assert, are marked with <svg role="img" viewBox="0 0 384 512" width="1%" height="1%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" class=""></path></svg> in the list of Teststeps.

### View attributes that have Asserts 
- All attributes with one or more Assert are highlighted in the Attributes tab in the Details of teststep pane on the right in the Test Suite overview page.
- If an Assert is included in Data Variation, <i class="fas fa-table"></i> is also shown.

### Add an Assert on Attribute Value
There are multiple ways to add an Assert on Attribute Value:
1. Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on <i class="fas fa-table"></i> next to the attribute to add the Assert;
2. Hover your mouse on a Teststep and click on <i class="fas fa-table"></i> to open the page where asserts can be configured;
3. Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "+ Assertion" button to add the Assert.

### Delete an Assert on Attribute Value
- Open the assertion configuration page and go to the Attributes tab.
- Click on <i class="fas fa-trash-alt"></i> on the attribute to delete the Assert from.

## Related topics
- [Assert Object Count](assert-object-count)
- [Attribute Value](attribute-value)
- [Teststep](teststep)
