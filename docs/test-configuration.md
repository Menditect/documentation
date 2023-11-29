---
sidebar_position: 18
---


# Test Configuration 



## Definition

A Test Configuration is an executable test script that describes which [Test Suites](test-suite) and which [Applications](application) will be/are tested. 

The Test Configuration is the highest or first level of the 4-layer framework that is used in MTA. 

## Properties
| Name         | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Name         | The name of the Test Configuration.                                                                                            |
| CiCd enabled | If set to Yes, the Test Configuration will be executed if one of it is associated Test Applications is executed via Ci/Cd API. |

## Business rules

- The application revision of the [Test Suite](test-suite) must be equal to the application revision of the Test Configuration, with the same [Application](application) in order to be able to execute the Test Configuration.
- You can [pin](#pin-a-test-run) a maximum of two [Test Runs](test-run) per Test Configuration.

## Actions on Test Configuration

### View Test Configurations
- Navigate to the "Test configurations" page to view a list of all the Test Configurations in MTA.

### Create a new Test Configuration
- Navigate to the "Test configurations" page. 
- Add a new Test Configuration and enter a Name and optional Description. 
- Choose whether the Test Configuration should be Ci/Cd enabled. 

For the full explanation on how to add a Test Configuration, read the [How To](additional/howtos/run-first-test#2-add-a-test-configuration).

### Edit a Test Configuration

- Open or Select the Test Configuration that you want to edit.
- Use the <i class="fal fa-pencil"></i> button to edit the Test Configuration.

### Execute a Test Configuration

- Use the Execute test configuration button on the bottom left, to start a new [Test Run](test-run).

### Share a Test Configuration

You can copy the URL to open a Test Configuration directly from your browser's address bar. 

- Find the Test Configuration you want to share.
- Use the <i class="fas fa-ellipsis"></i> button to open the menu.
- Click <i class="fal fa-link-simple"></i> to copy the URL to the Test Configuration to your clipboard.
- Paste `Ctrl+V` the URL anywhere to share it.

Note that after using a URL to open the Test Configuration, each time you hit `F5` or `Ctrl+R` on your browser, you will end up on the same page, until you log out.

### Delete a Test Configuration
- Select the Test Configuration that you want to delete.
- Use the <i class="fal fa-trash-alt"></i> button to delete the Test Configuration.

Note that Testers cannot delete Test Configurations.

### Recover a deleted Test Configuration
- Navigate to the "Test configurations" page.
- Go to "<i class="fal fa-eye"></i> Deleted". 
- Click on "<i class="fal fa-check-double"></i> Recover" on the Test Configuration you want to restore.

Note that deleted Test Configuration will automatically be deleted permanently when 20 days are passed after the moment of deletion.

### Delete a Test Configuration permanently
- Navigate to the "Test configurations" page.
- Go to "<i class="fal fa-eye"></i> Deleted". 
- Click on "<i class="fal fa-trash-alt"></i> Delete" on the Test Configuration you want to permanently delete.

### Restore previous revision of Test Suites in a Test Configuration

See [Snapshot](snapshot).

## Related topics
- [Test Run](test-run)
- [Test Suite](test-suite)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023