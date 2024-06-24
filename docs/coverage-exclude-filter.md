---
sidebar_position: 12
---

# Coverage Exclude Filter

## Definition

An Exclude Filter is used to **exclude** one or more microflows from counting towards the coverage percentage that is calculated for one [Coverage Goal](coverage-goal) whenever a test is executed.

An Exclude Filter is evaluated on the **fully-qualified** name of a microflow: `MyModule.MyMicroflow`. Therefore, the filter is constructed in 2 parts; the Module name part and the Microflow name part.

An Exclude Filter is **case-insensitive**. This is because elements in a Mendix Model are also case-insensitive (there cannot be two modules with the same name even if the casing is different).

An Exclude Filter can be provided with asterisks (\*) as a **wildcard**. A wildcard anywhere in the filter will be evaluated as "any text". This means that
-  `MyModule.*` will be interpreted as "all microflows in MyModule". 
-  `*.*` will be interpreted as "All microflows" and 
-  `*.VAL_*` will be interpreted as "All microflows starting with VAL_ ".
-  `*.val_*` will also be interpreted as "All microflows starting with VAL_ ".

Microflows in the Mendix System module are always excluded from coverage calculation.

## Properties
| Name                  | Description                       |
| --------------------- | --------------------------------- |
| Module Name Filter    | The filter for the module name    |
| Microflow Name Filter | The filter for the microflow name |

## Business rules
- The Module Name Filter may not be empty and should start with a letter, underscore or asterisk and can only contain letters, digits, underscores and asterisks.
- The Microflow Name Filter may not be empty and should start with a letter, underscore or asterisk and can only contain letters, digits, underscores and asterisks.


## Actions on an Exclude Filter

### View Filters on a Coverage Goal
- Navigate to [<i class="fal fa-umbrella"></i> Coverage Goals](coverage-goal) for the respective [Application](application) or [Test Configuration](test-configuration).
- Select the [Coverage Goal](coverage-goal) you want to set filters for.
- Click <i class="fa fa-pencil"></i> in "Microflows used in coverage calculation" on the right side of the page.

### Evaluate Filters on a Coverage Goal 

:::info
Note that the evaluation of Coverage Filters is only valid for a single revision.<br/>
For Coverage Goals on a Test Configuration, this is the revision that was applied to that Test Configuration.<br/>
For Coverage Goals on an Application, this is the *latest* Application Revision found in the included Test Configurations.
:::

- Open the list of Filters on a Coverage Goal.
- In the top-left of the page, the number of included, excluded and total microflows is shown.
- Click on one of these numbers to view which microflows are either included or excluded.

### Generate a Filter on a Coverage Goal by Microflow name
- Open the list of Filters on a Coverage Goal.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by microflow name"
- Select the Microflow(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters for each selected microflow, with fully qualified name as Module Name filter and Microflow Name filter.

### Generate a Filter on a Coverage Goal by Module name
- Open the list of Filters on a Coverage Goal.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by module name"
- Select the Module(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters with the selected modules as Module Name filter, and wildcards for the Microflow Name filter.

### Add a Filter on a Coverage Goal manually
- Open the list of Filters on a Coverage Goal.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-plus-circle"></i> New"
- Enter the Module Name filter and Microflow Name filter and click Save.

### Edit a Filter on a Coverage Goal
- Open the list of Filters on a Coverage Goal.
- Click on the <i class="fa fa-pencil"></i> button on the filter you want to edit.

### Delete a Filter on a Coverage Goal
- Open the list of Filters on a Coverage Goal.
- Click on the <i class="fa fa-trash-alt"></i> button on the filter you want to delete.


## Related topics
- [Coverage Goal](coverage-goal)
- [Coverage Exception Filter](coverage-exception-filter)
- [Application](application)
- [Test Configuration](test-configuration)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 June 2024