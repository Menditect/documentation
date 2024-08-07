---
sidebar_position: 20
---


# Test Suite 


## Definition

A Test Suite is an executable part of a [Test Configuration](test-configuration) and consists of a collection of [Test Cases](test-case) that are intended to be used to test a software program to show that it has some specified set of behaviours.

The Test Suite is the second level of the 4-layer framework that is used in MTA. It allows for a Test Configurations to be split up into different functional or technical aspects of the tested software. It is possible to define [Data Variation](datavariation) on the Test Suite level. 

## Properties
| Name        | Description                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | The name of the Test Suite.                                                                                                                                                             |
| Description | The description of the Test Suite.                                                                                                                                                      |
| Status      | Can be either Changing or Ready. If Changing, this means MTA is updating the Test Suite because the user applied a new revision. If Ready, this means the Test Suite can be configured. |
  
## Business rules

The [revision](application-revision) of all Applications used in the Test Suite must match the ones used in the Test Configuration.

## Actions on Test Suite

### Create a new Test Suite
- Navigate to the Test configurations page in MTA and select the [Test Configuration](test-configuration) that you want to create the Test Suite in.
- Use the Add Test Suite button to create a new Test Suite.
- Enter a name and an optional description and choose "Save".

### Configure a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to configure a Test Suite.
- Select Configure on the Test Suite you want to configure.

### Execute a Test Suite
- Use the Execute test suite button from the <i class="fal fa-link-simple"></i> menu or inside a Test Suite, to start a new [Test Run](test-run).

### Share a Test Suite

You can copy the URL to open a Test Suite directly from your browser's address bar. 

- Find the Test Suite you want to share.
- Use the <i class="fas fa-ellipsis"></i> button to open the menu.
- Click <i class="fal fa-share-nodes"></i> to copy the URL to the Test Suite to your clipboard.
- Paste `Ctrl+V` the URL anywhere to share it.

Note that after using a URL to open the Test Suite, each time you hit `F5` or `Ctrl+R` on your browser, you will end up on the same page, until you log out.

### Change the order of a Test Suite in a Test Configuration
- Navigate to the Test Configuration that the Test Suite is in.
- Click on <i class="fas fa-arrow-up"></i> or <i class="fas fa-arrow-down"></i> on the left of the title of the Test Suite to move it up or down.

### Copy a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to copy a Test Suite.
- Click <i class="fas fa-copy"></i> on the Test Suite you want to copy.
- Click Select and proceed to copy the Test Suite in the same Test Configuration, or expand the list of other Test Configuration and select one there.
- Give the copy a name and choose "Save".

### Delete a Test Suite
- Navigate to the Test configurations page in MTA and select the Test Configuration where you want to delete a Test Suite.
- Click <i class="fas fa-trash-alt"></i> on the Test Suite you want to delete.

Note that deleting a Test Suite is permanent. Individual Test Suites cannot be recovered.

## Related topics
- [Test case](test-case)
- [Test configuration](test-configuration)
- [Test run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023