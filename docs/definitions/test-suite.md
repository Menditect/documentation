# Test Suite 

## Definition

A Test Suite is an executable part of a [Test Configuration](test-configuration) and consists of a collection of [Test Cases](test-case) that are intended to be used to test a software program to show that it has some specified set of behaviours.

test <i class="fas fa-baseball-ball"></i>

## Properties
| Name | Description |
| ----------- | ----------- |
| Name | Name of the Test Suite | 
| Description | Description of the Test Suite | 
| Status | Either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision.   | 
| Test Cases type | Indication which kind of Test Cases are in the Test Suite: <br /> - Manual: Only Manual Test Cases <br />  - Automatic: At least one Automatic Test Case | 
  
## Business rules
- Name is mandatory

## Actions on Test Suite

### Create a new Test Suite
- Go to the Test design page in MTA and select the [Test Configuration](test-configuration) that you want to create the Test Suite in.
- Click *+ Test Suite* to create a new Test Suite.
- Enter a name and an optional description and choose Save.

### Configure a Test Suite
- Go to the Test design page in MTA and select the [Test Configuration](test-configuration) where you want to configure a Test Suite.
- Select Configure on the Test Suite you want to configure.

### Change the order of a Test Suite in a Test Configuration
- Go to the Test Configuration that the Test Suite is in
- Click on the Up or Down arrow on the left of the title of the Test Suite to move it up or down

### Execute a Test Suite
- Open a Test Suite.
- Click on Execute and to to [Test Run](test-run) overview.
- Click Proceed on the confirmation window.

### Copy a Test Suite
- Go to the Test design page in MTA and select the [Test Configuration](test-configuration) where you want to copy a Test Suite.
- Click the Copy icon on the Test Suite you want to copy.
- Click Select and proceed to copy the Test Suite in the same [Test Configuration](test-configuration), or expand the list of other [Test Configurations](test-configuration) and select one there.
- Give the copy a name and Save.

### Export a Test Suite to Word
- Go to the Test design page in MTA and select the [Test Configuration](test-configuration) where you want to export a Test Suite to Word.
- Click the Word icon on the Test Suite you want to export to Word.

### Delete a Test Suite
- Go to the Test design page in MTA and select the [Test Configuration](test-configuration) where you want to delete a Test Suite.
- Click the Recycle bin icon on the Test Suite you want to delete.

Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered.

## Related topics
- [Test configuration](test-configuration)
- [Test case](test-case)
- [Test run](test-run)
