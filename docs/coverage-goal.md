---
sidebar_position: 13
---

# Coverage Goal

## Definition

A Coverage Goal is used to define which microflows should at least be tested, when a Test Configuration is executed. Microflows that are included in the goal, will count towards the coverage percentage in the [Calculated Goal](coverage-calculated-goal). A Coverage Goal is made up of one or more [Exclude Filters](coverage-exclude-filter). 

A Coverage Goal is **evaluated** immediately after associated Exclude Filters are saved. Evaluating leads to determining which microflows will be included, and which microflows will be excluded from the Coverage Goal.

A Coverage Goal is **calculated** and stored as a Calculated Goal, whenever a [Test Configuration](test-configuration) is executed, "Coverage" was selected when starting the Test Run, and Coverage Goals exist. 

A Coverage Goal can be defined on a [Test Configuration](test-configuration), or on an [Application](application).

A Coverage Goal that is defined on a Test Configuration, is applicable for microflows in the [Application Revision](application-revision) that was last applied to that Test Configuration. When evaluating or calculating the Calculated Goal, this will only be done for [Test Suites](test-suite) that were included in the Coverage Goal.

A Coverage Goal that is defined on an Application, is applicable for microflows in the *latest* Application Revision found in the included Test Configurations. When evaluating or calculating the Calculated Goal, this will only be done for [Test Configurations](test-configuration) that were included in the Coverage Goal.

Microflows in the Mendix System module are always excluded from coverage calculation.

## Properties
| Name                | Description                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | The name of the coverage goal.                                                                                                                                       |
| Exclude Filters     | The [Exclude Filters](coverage-exclude-filter) that determine the Coverage Goal.                                                                                     |
| Test Suites         | Defines which [Test Suites](test-suite) are included when calculating the Coverage Goal<br/> (only applicable for a Coverage Goal on a Test Configuration)           |
| Test Configurations | Defines which [Test Configurations](test-configuration) are included when calculating the Coverage Goal<br/> (only applicable for a Coverage Goal on an Application) |

## Business rules

- On a Coverage Goal that is defined on an Application, it is only possible to determine which microflows will be included based on the Exclude Filters, if at least 1 Test Configuration is included. 
- If no Test Configurations are included on a Coverage Goal that is defined on an Application, the Exclude Filters cannot be changed.
- Not including any Test Suites or Test Configurations on a Coverage Goal, will always lead to a 0 % coverage percentage.
- Defining Exclude Filters leading to 0 microflows being included in the Coverage Goal, will always lead to a 0 % coverage percentage.

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
- Select the Application if not yet pre-selected.
- Enter a name for the Coverage Goal.
- Save.

### Edit the name of a Coverage Goal
- Open the list of Coverage Goals for the Application or Test Configuration.
- Click <i class="fas fa-ellipsis"></i> on the Coverage Goal you want to edit.
- Select "<i class="fas fa-pencil"></i> Edit".
- Change the name of the Coverage Goal.
- Save.

### Evaluate a Coverage Goal

To evaluate a Coverage Goal, add, edit or delete an [Exclude Filter](coverage-exclude-filter).

### View Evaluated Coverage Goal 
- [Open the list of Filters on a Coverage Goal.](coverage-exclude-filter#view-filters-on-a-coverage-goal)
- In the top-left of the page, the number of included, excluded and total microflows is shown.
- Click on one of these numbers to view which microflows are either included or excluded.

### Calculate a Coverage Goal

To calculate a Coverage Goal and create a new [Calculated Goal](coverage-calculated-goal), [execute a Test Configuration](test-configuration#execute-a-test-configuration) and enable "Coverage".

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