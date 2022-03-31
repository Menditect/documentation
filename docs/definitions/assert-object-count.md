# Assert on Object Count

## Definition

An assert on object count is defined on a [Test Step](test-step) and exists of making a comparison between the expected and actual list size of output objects of a Test Step upon test execution.

Asserts on object count can be defined either on Retrieve Object Test Steps or on Microflow Test Steps that return a list of objects. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Compare type | The type of comparison to be made: either 'Equals', 'Greater-than' / 'Greater-than or equal to' or 'Less-than' / 'Less-than or equal to'. |
| Expected object count | The expected value of the attribute when executing the test. |

## Business rules
- The compare type is mandatory.
- Expected object count is mandatory.
- Expected object count must be equal to or greater than 0.

## Actions on Assert Object Count

### View Test Steps that have asserts 
- All [Test Steps](test-step) in a [Test Case](test-case) that have one or more asserts added, are marked with <svg role="img" viewBox="0 0 384 512" width="1%" height="1%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" class=""></path></svg> in the list of Test Steps.

### Add an assert on Object Count
There are multiple ways to add an assert on Object Count:
1. When hovering the mouse on the Test Step, click on <svg role="img" viewBox="0 0 384 512" width="1%" height="1%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M360 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24zM64 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm1.6 129.4l12.7-12.6c2.1-2.1 5.5-2.1 7.6 0l20.6 20.8 47.6-47.2c2.1-2.1 5.5-2.1 7.6 0l12.6 12.7c2.1 2.1 2.1 5.5 0 7.6l-64.2 63.6c-2.1 2.1-5.5 2.1-7.6 0L65.6 249c-2.1-2.1-2.1-5.5 0-7.6zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm192-8c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-128c0 4.4-4.3 8-9.6 8H170.2s29.2-30.2 30.4-32h109.7c5.3 0 9.6 3.6 9.6 8v16zm0-128c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" class=""></path></svg> to open the page where asserts can be configured;
2. After configuring the Test Step, click on "Save and configure asserts" to open the page where asserts can be configured in bulk for all the attributes in the Test Step.
After the page opens, go to the Test Step output tab, and click on "*+ Assert*" to add the assert.

### Configure an assert on Object Count
- Select a compare type; 'Equals', 'Greater-than' or 'Less-than'.
- Enter an expected object count.
- Choose "Save".

### Delete an assert on Attribute Value
- Open the assertion configuration page and go to the Test Step output tab.
- Click on <i class="fas fa-trash-alt"></i> to delete the assert.

## Related topics
- [Assert Attribute Value](assert-attribute-value)
- [Test Step](test-step)
