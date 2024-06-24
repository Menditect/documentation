---
sidebar_position: 11
---

# Coverage Exception Filter

## Definition

An Exception Filter is used to **include** one or more microflows, that were excluded from the [Coverage Goal](coverage-goal) by an [Exclude Filter](coverage-exclude-filter).

An Exception Filter is always associated to exactly one [Exclude Filter](coverage-exclude-filter).


## Properties

An Exception Filter has the same properties as an [Exclude Filter](coverage-exclude-filter).


## Business rules

An Exception Filter has the same business rules as an [Exclude Filter](coverage-exclude-filter).


## Actions on an Exception Filter

### View Exception Filters on an Exclude Filter
- Navigate to [<i class="fal fa-umbrella"></i> Coverage Goals](coverage-goal) for the respective [Application](application) or [Test Configuration](test-configuration).
- Select the [Coverage Goal](coverage-goal) you want to view filters for.
- Click <i class="fa fa-pencil"></i> in "Microflows used in coverage calculation" on the right side of the page.
- Select the Exclude Filter you want to view Exception Filters for.

The Exception Filters for the selected Exclude Filter are shown on the right side of the page.

### Generate a Filter on a Coverage Goal by Microflow name
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by microflow name"
- Select the Microflow(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters for each selected microflow, with fully qualified name as Module Name filter and Microflow Name filter.

### Generate a Filter on a Coverage Goal by Module name
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by module name"
- Select the Module(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters with the selected modules as Module Name filter, and wildcards for the Microflow Name filter.

### Add a Filter on a Coverage Goal manually
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-plus-circle"></i> New"
- Enter the Module Name filter and Microflow Name filter and click Save.

### Edit a Filter on a Coverage Goal
- Open the list of Exception Filters on the Exclude Filter.
- Click on the <i class="fa fa-pencil"></i> button on the filter you want to edit.

### Delete a Filter on a Coverage Goal
- Open the list of Exception Filters on the Exclude Filter.
- Click on the <i class="fa fa-trash-alt"></i> button on the filter you want to delete.


## Related topics
- [Coverage Goal](coverage-goal)
- [Coverage Filter](coverage-exclude-filter)
- [Application](application)
- [Test Configuration](test-configuration)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 June 2024