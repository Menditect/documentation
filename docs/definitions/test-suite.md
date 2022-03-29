# Test Suite 

## Definition

A Test Suite is an executable part of a [Test Configuration](test-configuration) and consists of a collection of [Test Cases](test-case) that are intended to be used to test a software program to show that it has some specified set of behaviours.

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | The name of the Test Suite. | 
| Description | The description of the Test Suite. | 
| Status | Can be either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision. | 
| Test Cases type | This is an indication which kind of Test Cases are in the Test Suite: <br /> - 'Manual': Only Manual Test Cases; <br />  - 'Automatic': At least one Automatic Test Case. | 
  
## Business rules
- The name is mandatory.

## Actions on Test Suite

### Create a new Test Suite
- Navigate to the Test design page in MTA and select the [Test Configuration](test-configuration) that you want to create the Test Suite in.
- Click "*+ Test Suite*" to create a new Test Suite.
- Enter a name and an optional description and choose "Save".

### Configure a Test Suite
- Navigate to the Test design page in MTA and select the Test Configuration where you want to configure a Test Suite.
- Select Configure on the Test Suite you want to configure.

### Change the order of a Test Suite in a Test Configuration
- Navigate to the Test Configuration that the Test Suite is in.
- Click on <i class="fas fa-arrow-up"></i> or <i class="fas fa-arrow-down"></i> on the left of the title of the Test Suite to move it up or down.

### Execute a Test Suite
- Open a Test Suite.
- Click on "Execute and to to [Test Run](test-run) overview".
- Click "Proceed on the confirmation window".

### Copy a Test Suite
- Navigate to the Test design page in MTA and select the Test Configuration where you want to copy a Test Suite.
- Click <i class="fas fa-copy"></i> on the Test Suite you want to copy.
- Click Select and proceed to copy the Test Suite in the same Test Configuration, or expand the list of other Test Configuration and select one there.
- Give the copy a name and choose "Save".

### Export a Test Suite to Word
- Navigate to the Test design page in MTA and select the Test Configuration where you want to export a Test Suite to Word.
- Click <i class="fas fa-file-word"></i> on the Test Suite you want to export to Word.

### Delete a Test Suite
- Navigate to the Test design page in MTA and select the Test Configuration where you want to delete a Test Suite.
- Click <i class="fas fa-trash-alt"></i> on the Test Suite you want to delete.

Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered.

## Related topics
- [Test case](test-case)
- [Test configuration](test-configuration)
- [Test run](test-run)
