---
sidebar_position: 3
---
# Test suite 

## Definition

A test suite is an executable part of a test configuration and consists of a collection of test cases that are intended to be used to test a software program to show that it has some specified set of behaviours.

## Properties
| Name | Description |
| ----------- | ----------- |
| ARVNStatus | Changing: MTA is updating the test suite with the next ARVN. Ready: otherwise | 
| DataVariation | true: test suite has data variations. false: test suite has no data variations | 
| Description | Description of the test suite | 
| Name | Name of the test suite | 
| ConstructionError | Indicates whether the test suite has a test case with a test step with a construction error | 
| TestCasesType | Indication which kind of Test Cases are in the Test Suite: <br /> - Manual: Only Manual Test Cases <br />  - Automatic: At least one Automatic Test Case | 
  
## Business rules
- Application revision of a test suite must have a contentstate which is loaded
- ARVNStatus is mandatory
- Name is mandatory
- Test configuration is mandatory for test suite
- test suite is mandatory for test case
- Test suite variant item must have a link to a Test suite
- Test suite variant must have a link to a Test suite with data variation = true
- The application revision of the Test Suite must be equal to the application revision of the Test Configuration, with the same Application.

## Actions on Test suite

### Create a new test suite
- Go to the Test design page in MTA and select the test configuration that you want to create the test suite in.
- Click *+ Test suite* to create a new test suite.
- Enter a name and an optional description and choose Save.

### Configure a test suite
- Go to the Test design page in MTA and select the test configuration where you want to configure a test suite.
- Select Configure on the test suite you want to configure.

To read about configuring test suites, go to ...

### Execute a test suite
- Open a test suite.
- Click on Execute and to to test run overview.
- Click Proceed on the confirmation window.

### Copy a test suite
- Go to the Test design page in MTA and select the test configuration where you want to copy a test suite.
- Click the Copy icon on the test suite you want to copy.
- Click Select and proceed to copy the test suite in the same test configuration, or expand the list of other test configurations and select one there.
- Give the copy a name and Save.

### Copy a test suite
- Go to the Test design page in MTA and select the test configuration where you want to export a test suite to Word.
- Click the Word icon on the test suite you want to export to Word.

### Delete a test suite
- Go to the Test design page in MTA and select the test configuration where you want to delete a test suite.
- Click the Recycle bin icon on the test suite you want to delete.

Note that deleting a test suite is permanent. Individual test suites cannot be recovered.