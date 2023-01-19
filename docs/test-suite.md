---
sidebar_position: 18
---


# Test Suite 


## Definition

A Test Suite is an executable part of a [Test Configuration](test-configuration) and consists of a collection of [Test Cases](test-case) that are intended to be used to test a software program to show that it has some specified set of behaviours.

The Test Suite is the second level of the 4-layer framework that is used in MTA. It allows for a Test Configurations to be split up into different functional or technical aspects of the tested software, but it is also the level where [Data Variation](datavariation) is defined. 

## Properties
| Name        | Description                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | The name of the Test Suite.                                                                                                                                                             |
| Description | The description of the Test Suite.                                                                                                                                                      |
| Status      | Can be either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision. If Ready, this means the Test Suite can be configured. |
  
## Business rules

AANPASSSEN: revisies moeten matchen met test configuratie
kan over meerdere  applicaties gaan

## Actions on Test Suite

### Create a new Test Suite
- Navigate to the Test configurations page in MTA and select the [Test Configuration](test-configuration) that you want to create the Test Suite in.
- Click "<i class="fal fa-plus-circle"></i> Test Suite" to create a new Test Suite.
- Enter a name and an optional description and choose "Save".

### Configure a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to configure a Test Suite.
- Select Configure on the Test Suite you want to configure.

### Change the order of a Test Suite in a Test Configuration
- Navigate to the Test Configuration that the Test Suite is in.
- Click on "<i class="fas fa-arrow-up"></i>" or "<i class="fas fa-arrow-down"></i>" on the left of the title of the Test Suite to move it up or down.

### Execute a Test Suite
- Open a Test Suite.
- Click on "Execute and to to [Test Run](test-run) overview".
- Click "Proceed on the confirmation window".

### Copy a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to copy a Test Suite.
- Click "<i class="fas fa-copy"></i>" on the Test Suite you want to copy.
- Click Select and proceed to copy the Test Suite in the same Test Configuration, or expand the list of other Test Configuration and select one there.
- Give the copy a name and choose "Save".

### Delete a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to delete a Test Suite.
- Click "<i class="fas fa-trash-alt"></i>" on the Test Suite you want to delete.

Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered.

## Related topics
- [Test case](test-case)
- [Test configuration](test-configuration)
- [Test run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 january 2023