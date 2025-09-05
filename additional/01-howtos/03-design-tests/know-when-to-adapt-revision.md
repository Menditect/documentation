# Know when to adapt to next revision

## Explanation

[Test Configurations](../../../test-configuration) are always built upon a single currently loaded [Application Revision](../../../application-revision). The information in that revision is used to determine which objects and object values can exist in the database, and which microflows can be executed. This in turn allows to create the necessary [Teststeps](../../../Teststep/) that are needed to build a test in MTA. And, when the test is executed, gives some guarantee that these model elements also exist in the [Application Instance](../../../application-instance) that the test is running on.

To allow Test Configurations to stay updated with changes done in the Mendix model, they can be adapted to another revision. Note that this does not necessarily have to be a newer revision, it can be any revision on any branch of the App. Downloading a revision can be done in the background by using a [Branch Subscription](../../../branch-subscription), but adapting must be done [manually](../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision) because adapting can lead to [Construction Errors](../../../construction-error).

Construction Errors in a Test Configuration will block executing it. Executing would lead to an error in the Test Run, because model elements don't match. But, it is not always necessary to adapt to the revision of the Application Instance, in order to Execute the Test Configuration. Below is a list of scenario's, which would lead to an error when executing or not.

## Scenario

:::info
**Microflow** means any Microflow or Rule<br/>
**Used?** means the entity, attribute or microflow is used in a teststep
:::

| Change done in next revision    | Is Used?         | Result after adapt                          | Execute without adapt                  |
| ------------------------------- | ---------------- | ------------------------------------------- | -------------------------------------- |
| Added entity                    | N/A              | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing entity         | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing entity         | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Added attribute                 | N/A              | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing attribute      | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing attribute      | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Added association               | N/A              | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing association    | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing association    | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Renamed entity                  | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed entity                  | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed attribute               | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed attribute               | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed association             | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed association             | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Other domain model change       | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Other domain model change       | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Added microflow                 | N/A              | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing microflow      | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted existing microflow      | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Added input parameter           | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Added Primitive input parameter | Used in Teststep | <i class="fal fa-check"></i>                | <font color="red">Runtime Error</font> |
| Added Object input parameter    | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Deleted input parameter         | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Deleted input parameter         | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Changed parameter datatype      | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Changed parameter datatype `*`  | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Renamed input parameter         | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Renamed input parameter         | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Changed return value            | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Changed return value            | Used in Teststep | <font color="red">Construction Error</font> | <font color="red">Runtime Error</font> |
| Other microflow change          | Not Used         | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Other microflow change          | Used in Teststep | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |
| Any other model change          | N/A              | <i class="fal fa-check"></i>                | <i class="fal fa-check"></i>           |

`*` Upon adapting, some primitive datatypes are convertable by MTA when they are changed, and will not lead to a Construction Error. 

For more information, also see the [Using Primitives](use-previous-teststeps-data#using-primitives) chapter in "Use previous teststeps data".


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 16 July 2025