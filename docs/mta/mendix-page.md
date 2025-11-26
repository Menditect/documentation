---
sidebar_position: 21
---


# Mendix Page

MTA stores information about a Mendix Page to enable Frontend testing. For every Frontend test, it is required to start with Locating the Mendix Page.

A Mendix Page define the end-user interface of a Mendix application; every Page is based on a Page Layout.

More info at: https://docs.mendix.com/refguide/page/


## Properties

### Name
The name of the Page as entered in Studio Pro.

### Module
The Module of the Page in the Mendix model.

### Class Name
The Class of the Page as entered in Studio Pro. If the Class Name is empty, the Page cannot be used for Frontend testing.

### Used in teststep
Indicates whether the Page is referenced by a [Teststep](Teststep/) in MTA.

### Documentation
The Documentation of the Page as entered in Studio Pro.

## Actions

### View Page usage

- navigate to the [Test Configuration](test-configuration) of which you want to view Page usage 
- navigate to `Mendix Model` 
- navigate to `Pages` 

## Related topics
- [Application Revision](application-revision)
- [Teststep](teststep)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 12 November 2025