# Assert on Attribute Value

## Definition

An Assert on Attribute Value formulates an expected result of an attribute in a [Test Step](test-step) upon execution. It is possible to either define the result to have a single value, or a range that the value should be in. A Test Step can have multiple Asserts on Attribute Value.

An Assert on Attribute Value can be added for:
- an [Attribute Value](attribute-value) of a created or changed object;
- an Attribute Value of a retrieved object. In that case the assert evaluates the Attribute Value of all retrieved objects;
- the value of a primitive microflow output parameter like string, integer, etc.

Note that there are also [Asserts on Object Count](assert-object-count), that are added on a retrieve object action, or on a microflow call action. 

When a Test Step uses [Data Variation](datavariation) to manipulate Test Step input, the Assert can be applied as a [Data Variation Item](datavariation-item) for each defined variation.

Each Assert is evaluated after the execution of a Test Step. A Test Step execution fails when the evaluated value does not match to the defined expectation. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made. <br />The 'Equals' type means that a single value is evaluated. <br />The 'Range' type  means that the expected attribute value should be within the given boundaries. A 'Range' type is only applicable for numeric or date attributes. |
| Value | The expected value of the attribute upon executing the test when the selected compare type is 'Equals'. If the asserted value is empty, the result must be empty in order for the assert to pass. |
| Min value | The expected lower boundary of the attribute value if the selected compare type is 'Range'. |
| Max value | The expected higher boundary of the attribute value if the selected compare type is 'Range'. |
| Trim string values | Used to be able trim string values for leading and trailing space characters before evaluating the result (only applicable for string attributes). |

## Business rules
- Compare type is mandatory.
- If the compare type is 'Range', both Min and Max values are mandatory.

## Actions on an Assert on Attribute Value

### View Test Steps that have Asserts 
- All Test Steps in a [Test Case](test-case) with one or more Assert, are marked with <i class="fas fa-ballot-check"></i> in the list of Test Steps.

### View attributes that have Asserts 
- All attributes with one or more Assert are highlighted in the Attributes tab in the Details of teststep pane on the right in the Test Suite overview page.
- If an Assert is included in Data Variation, <i class="fas fa-table"></i> is also shown.

### Add an Assert on Attribute Value
There are multiple ways to add an Assert on Attribute Value:
1. Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on <i class="fas fa-table"></i> next to the attribute to add the Assert.
2. Hover your mouse on a Test Step and click on <i class="fas fa-table"></i> to open the page where asserts can be configured.
3. Click on "Save and configure asserts" after configuring the Test Step. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "+ Assertion" button to add the Assert.

### Delete an Assert on Attribute Value
- Open the assertion configuration page and go to the Attributes tab.
- Click on <i class="fas fa-trash-alt"></i> on the attribute to delete the Assert from.

## Related topics
- [Attribute Value](attribute-value)
- [Test Step](test-step)
- [Assert Object Count](assert-object-count)