---
sidebar_position: 13
---

# Coverage Goal

## Definition

A Coverage Goal is used to define which microflows should at least be tested, when a Test Configuration is executed. Microflows that are included in the goal, will count towards the coverage percentage in the [Calculated Goal](coverage-calculated-goal). A Coverage Goal is made up of one or more [Coverage Exclude Filters](coverage-exclude-filter). Coverage Exclude Filters define which microflows to exclude, and which to include, when evaluating the Calculated Goal.

A Coverage Goal can be defined on a [Test Configuration](test-configuration), or on an [Application](application).

A Coverage Goal that is defined on a Test Configuration, is applicable for microflows in the [Application Revision](application-revision) that was last applied to that Test Configuration. When evaluating the Calculated Goal, this will only be done for [Test Suites](test-suite) that were included in the Coverage Goal.

When evaluating a Calculated Goal that is defined on an Application, this will only be done for Test Configurations that were included in the Coverage Goal. The Coverage Goal is applicable for microflows in the *latest* Application Revision found in these included Test Configurations.

Microflows in the Mendix System module are always excluded from coverage calculation.

## Properties
| Name                | Description                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | The name of the coverage goal.                                                                                                                                        |
| Exclude Filters     | The [Exclude Filters](coverage-exclude-filter) that will be applied when evaluating the Coverage Goal.                                                                |
| Test Suites         | Defines which [Test Suites](test-suite) are included when evaluating the Calculated Goal<br/> (only applicable for a Coverage Goal on a Test Configuration)           |
| Test Configurations | Defines which [Test Configurations](test-configuration) are included when evaluating the Calculated Goal<br/> (only applicable for a Coverage Goal on an Application) |

## Business rules

On a Coverage Goal that is defined on an Application, it is only possible to determine which microflows will be included based on the Exclude Filters, if at least 1 Test Configuration is included. 

If no Test Configurations are included on a Coverage Goal that is defined on an Application, the Exclude Filters cannot be changed.

Not including any Test Suites or Test Configurations on a Coverage Goal, will always lead to a 0 % coverage percentage.

Defining Exclude Filters leading to 0 microflows being included in the Coverage Goal, will always lead to a 0 % coverage percentage.

## Actions on a Coverage Goal

### View Coverage Goals on an Application
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application) by clicking on the tile.
- Navigate to "<i class="fal fa-umbrella"></i> Coverage Goals".

### View Coverage Goals on a Test Configuration
- Navigate to the "Test configurations" page to view a list of all the Test Configurations in MTA.
- Select a [Test Configuration](test-configuration) by clicking on the tile.
- Navigate to "<i class="fal fa-umbrella"></i> Coverage Goals".

### Change Included Test Configurations on a Coverage Goal
- Open the list of Coverage Goals for the Application.
- Click "<i class="fas fa-pencil"></i> Edit" in the "Test configurations included for coverage calculation" element on the right side.
- Select Test Configurations to include.
- Save.

### Change Included Test Suites on a Coverage Goal
- Open the list of Coverage Goals for the Test Configuration.
- Click "<i class="fas fa-pencil"></i> Edit" in the "Test suites included for coverage calculation" element on the right side.
- Select Test Suites to include.
- Save.

### Add a Coverage Goal
- Open the list of Coverage Goals for the Application or Test Configuration.
- Click "<i class="fal fa-plus-circle"></i> Add" to add a Coverage Goal.
- Enter a name for the Coverage Goal.
- Save.

### Edit the name of a Coverage Goal
- Open the list of Coverage Goals for the Application or Test Configuration.
- Click <i class="fas fa-ellipsis"></i> on the Coverage Goal you want to edit.
- Select "<i class="fas fa-pencil"></i> Edit".
- Change the name of the Coverage Goal.
- Save.

### Copy name of a Coverage Goal
- Open the list of Coverage Goals for the Application or Test Configuration.
- Click <i class="fas fa-ellipsis"></i> on the Coverage Goal you want to edit.
- Select "<i class="fal fa-copy"></i> Copy".

### Delete a Coverage Goal
- Open the list of Coverage Goals for the Application or Test Configuration.
- Click <i class="fas fa-ellipsis"></i> on the Coverage Goal you want to delete.
- Select "<i class="fas fa-trash-alt"></i> Delete".
- Confirm.

## Related topics
- [Coverage Calculated Goal](coverage-calculated-goal)
- [Coverage Exclude Filter](coverage-exclude-filter)
- [Application](application)
- [Test Configuration](test-configuration)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 June 2024