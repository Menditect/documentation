---
sidebar_position: 11
---

# Coverage Filter

## Definition

A coverage filter is used to exclude one or more microflows from counting towards the coverage percentage that is calculated for one [Coverage Goal](coverage-goal) whenever a test is executed.

A coverage filter is evaluated on the fully-qualified name of a microflow: `MyModule.MyMicroflow`

A coverage filter can be provided with asterisks (*) as a wildcard. A wildcard anywhere in the filter will be evaluated as "any text". This means that `MyModule.*` will be interpreted as "all microflows in MyModule". `*.*` will be interpreted as "All microflows" and `*.VAL_*` will be interpreted as "All microflows starting with VAL_ ".

## Properties
| Name               | Description                    |
| ------------------ | ------------------------------ |
| Module Name Filter | The filter for the module name |

## Business rules
- ...


## Related topics
- [Application](application)
- [Test Configuration](test-configuration)
- [Coverage Goal](coverage-goal)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 November 2023