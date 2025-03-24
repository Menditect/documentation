---
sidebar_position: 12
---

# Coverage Exception 

## Definition

An Exception is used to **include** one or more microflows, that were excluded from the [Coverage Goal](coverage-goal) by the associated [Exclude Filter](coverage-exclude-filter).

An Exception is always associated to exactly one Exclude Filter. The microflows excluded by the Exclude Filter, can be included again by setting an Exception Filter. Results will be updated immediately. 


## Properties

An Exception has the same properties as an [Exclude Filter](coverage-exclude-filter#properties).


## Business rules

An Exception has the same business rules as an [Exclude Filter](coverage-exclude-filter#business-rules).


## Actions on an Exception

### View Exceptions on an Exclude Filter
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter) you want to view Exceptions for.

Exceptions for this Exclude filter are shown below.

### Generate an Exception on an Exclude Filter by Microflow name
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter).
- Click "Click to add or generate exceptions for this exclude filter".
- Click "<i class="fal fa-play-circle"></i> Generate by microflow name"
- Select the Microflow(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate Exceptions for each selected microflow, with fully qualified name as Module Name filter and Microflow Name filter.

### Generate an Exception on an Exclude Filter by Module name
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter).
- Click "Click to add or generate exceptions for this exclude filter".
- Click "<i class="fal fa-cube"></i> Generate by module name"
- Select the Module(s) and click "<i class="fal fa-wand-magic-sparkles"></i> Generate filter" when done.
- MTA will generate Exceptions with the selected modules as Module Name filter, and wildcards for the Microflow Name filter.

### Add an Exception on an Exclude Filter manually
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter).
- Click "Click to add or generate exceptions for this exclude filter".
- Click "<i class="fal fa-plus-circle"></i> Add exception"
- Enter the Module Name filter and Microflow Name filter and click Save.

### Edit an Exception 
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter).
- Edit the Exception.

### Delete an Exception 
- [Edit the Exclude Filter](coverage-exclude-filter#edit-an-exclude-filter).
- Click on the <i class="fa fa-trash-alt"></i> button on the Exception you want to delete.

## Related topics
- [Coverage Goal](coverage-goal)
- [Coverage Exclude Filter](coverage-exclude-filter)
- [Application](application)
- [Test Configuration](test-configuration)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 24 June 2024