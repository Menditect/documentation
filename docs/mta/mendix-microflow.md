---
sidebar_position: 20
---


# Mendix Microflow

MTA stores information about a Mendix Microflow to enable Backend testing. It is possible to execute a Microflow with a [Microflow Teststep](Teststep/microflow), enter a value or use the output of preceding Teststeps to fill parameters, and use the Microflow return value for the input of succeeding Teststeps.

More info at: https://docs.mendix.com/refguide/microflows/

## Properties

### Name
The name of the Microflow as entered in Studio Pro.

### Module
The Module of the Microflow in the Mendix model.

### Used in teststep
Indicates whether the Microflow is referenced by a [Teststep](Teststep/) in MTA.

### Contents Hash
A string of characters representing the calculated hash of the contents of the Microflow, in the applied [Application Revision](application-revision) of the [Test Configuration](test-configuration). If the Microflow is changed (also purely visual changes) the Hash will also change. This can be used to determine if a Microflow has changed between revisions.

### Documentation
The Documentation of the Microflow as entered in Studio Pro.

## Actions

### View or Export Microflow usage

- navigate to the [Test Configuration](test-configuration) of which you want to view Microflow usage 
- navigate to `Mendix Model` 
- navigate to `Microflows` 
- export the list with the `Microflow usage` button

## Related topics
- [Application Revision](application-revision)
- [Teststep](teststep)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 26 November 2025