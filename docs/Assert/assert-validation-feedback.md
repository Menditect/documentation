# Assert on Validation feedback

## Definition

An Assert on Validation feedback is used to evaluate messages shown as a result of "Validation feedback" actions in Microflows that are executed during a Test Run.
It is possible to evaluate the message text and/or the member that the message is shown on.  

Asserts on Validation feedback are defined on the [Test Case](../test-case) level. Test Cases can have zero, one or multiple Asserts on validation feedback.

Asserts on Validation feedback can be added to [Data Variation](../datavariation).


## Properties
| Name                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Assert type         | The type of Validation feedback assert to be created. <br />  - Count: evaluates only the number of validation feedback messages upon execution. <br />  - Attribute-member: evaluates the message text of validation feedback shown on a certain attribute member. <br />  - Association-member: evaluates the message text of validation feedback shown on a certain association. <br />  - All-member: evaluates the message text of validation feedback regardless of the member or association.                                                                                                                                                                 |
| Entity              | The entity that the Validation feedback is shown on. <br />  Only for Attribute-member and Association-member asserts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Attribute           | The attribute member that the Validation feedback is shown on. <br />  Only for Attribute-member asserts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Association         | The association that the Validation feedback is shown on. <br />  Only for Assocation-member asserts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Quantifier          | Determines whether to match the given the message text for all Validation feedback messages, or that there should be at least one Validation feedback message that matches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Comparison operator | The type of evaluation to perform. <br />  - The 'Equals' / 'Not equals' type means that the message text or message count should exactly match (or not match, respectively) a single given value. <br />   - The 'Contains' / 'Not contains' type means that the message text should contain (or not contain, respectively) the given value.  <br />   - The 'Greater than' / 'Greater than or equal to' means that the message count should be higher than (or include, respectively) the given value.  <br />   - The 'Less than' / 'Less than or equal to' means that the message count should be lower than (or include, respectively) the given value.  <br /> |
| Comparison string   | The (part of the) validation feedback message text to evaluate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Count               | The number of validation feedback messages to evaluate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |


## Actions on an Assert on Validation feedback 

### Add an Assert on Attribute 
There are multiple ways to add an Assert on Attribute:
1. Navigate to the "Attributes" tab in the "Details of teststep" pane on the right in the Test Suite overview page. Click on "<i class="fal fa-ballot-check"></i>" next to the attribute to add the Assert;
2. Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep where you want to add an assert, and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured. Click on "<i class="fal fa-ballot-check"></i>" next to the attribute to add the Assert;
3. Click on "Save and configure asserts" after configuring the Teststep. This will show the page where Asserts can be configured. Navigate to the "Attributes" tab, click on the "<i class="fal fa-plus-circle"></i> Assert" button to add the Assert.

### Delete an Assert on Attribute 
- Click on the "<i class="fas fa-ellipsis"></i>" button on the Teststep where you want to delete an assert, and click "<i class="fal fa-ballot-check"></i> Edit asserts" to open the page where asserts can be configured;
- Click on "<i class="fas fa-ballot-check"></i>" on the attribute to delete the Assert from.
- Click on the "<i class="fal fa-trash-can"></i>" button.

## Related topics
- [Assert Object Count](assert-object-count)
- [Teststep](../Teststep)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023