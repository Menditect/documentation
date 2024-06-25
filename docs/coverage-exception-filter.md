---
sidebar_position: 11
---

# Coverage Exception Filter

## Definition

An Exception Filter is used to **include** one or more microflows, that were excluded from the [Coverage Goal](coverage-goal) by the associated [Exclude Filter](coverage-exclude-filter).

An Exception Filter is always associated to exactly one Exclude Filter. The microflows excluded by the Exclude Filter, can be included again by setting an Exception Filter. Results will be updated immediately. 


## Properties

An Exception Filter has the same properties as an [Exclude Filter](coverage-exclude-filter#properties).


## Business rules

An Exception Filter has the same business rules as an [Exclude Filter](coverage-exclude-filter#business-rules).


## Actions on an Exception Filter

### View Exception Filters on an Exclude Filter
- Navigate to [<i class="fal fa-umbrella"></i> Coverage Goals](coverage-goal) for the respective [Application](application) or [Test Configuration](test-configuration).
- Select the [Coverage Goal](coverage-goal) you want to view filters for.
- Click <i class="fa fa-pencil"></i> in "Microflows used in coverage calculation" on the right side of the page.
- Select the Exclude Filter you want to view Exception Filters for.

The Exception Filters for the selected Exclude Filter are shown on the right side of the page.

### Generate an Exception Filter on an Exclude Filter by Microflow name
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by microflow name"
- Select the Microflow(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters for each selected microflow, with fully qualified name as Module Name filter and Microflow Name filter.

The associated Coverage Goal will be evaluated after saving the Filter.

### Generate an Exception Filter on an Exclude Filter by Module name
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-wand-magic-sparkles"></i> Generate" and select "Generate by module name"
- Select the Module(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate filters with the selected modules as Module Name filter, and wildcards for the Microflow Name filter.

The associated Coverage Goal will be evaluated after saving the Filter.

### Add an Exception Filter on an Exclude Filter manually
- Open the list of Exception Filters on the Exclude Filter.
- Click "<i class="fal fa-plus-circle"></i> Add" in "Microflow exclude filters for this goal".
- Click "<i class="fal fa-plus-circle"></i> New"
- Enter the Module Name filter and Microflow Name filter and click Save.

The associated Coverage Goal will be evaluated after saving the Filter.

### Edit an Exception Filter
- Open the list of Exception Filters on the Exclude Filter.
- Click on the <i class="fa fa-pencil"></i> button on the filter you want to edit.

The associated Coverage Goal will be evaluated after saving the Filter.

### Delete an Exception Filter
- Open the list of Exception Filters on the Exclude Filter.
- Click on the <i class="fa fa-trash-alt"></i> button on the filter you want to delete.

The associated Coverage Goal will be evaluated after deleting the Filter.

## Related topics
- [Coverage Goal](coverage-goal)
- [Coverage Filter](coverage-exclude-filter)
- [Application](application)
- [Test Configuration](test-configuration)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 June 2024