---
sidebar_position: 3
---
# Test suite 

## Definition

A test suite is a collection of test cases that are intended to be used to test a software program to show that it has some specified set of behaviours.

## Properties
| Name | Description |
| ----------- | ----------- |
| ARVNStatus | Changing: MTA is updating the test suite with the next ARVN. Ready: otherwise | 
| DataVariation | true: test suite has data variations. false: test suite has no data variations | 
| Description | Description of the testsuite | 
| Name | Name of the testsuite | 
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
- Create a new test suite
- Configure a test suite
- Execute a test suite
- Copy a test suite
- Export a test suite to Word
- Delete a test suite