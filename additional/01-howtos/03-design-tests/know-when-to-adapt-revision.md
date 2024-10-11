---
sidebar_position: 9
---

# Know when to adapt to next revision

## Explanation

Test Configurations are always built upon a single currently loaded Application Revision. The information in that revision is used to determine which objects and object values can exist in the database, and which microflows can be executed. This in turn allows to create the necessary Teststeps that are needed to build a test in MTA. And, when the test is executed, gives some guarantee that these model elements also exist in the Application Instance that the test is running on.

To allow Test Configurations to stay updated with changes done in the Mendix model, they can be adapted to another revision. Note that this does not necessarily have to be a newer revision, it can be any revision on any branch of the App. Downloading a revision can be done in the background by using a Branch Subscription (available from MTA 2.9), but adapting must be done manually because adapting can lead to Construction Errors.

Construction Errors in a Test Configuration will block executing it. Executing would lead to an error in the Test Run, because model elements don't match. But, it is not always necessary to adapt to the revision of the Application Instance, in order to Execute the Test Configuration. Below is a list of scenario's, which would lead to an error when executing or not.

## Scenario

:::info
**Microflow** means any Microflow or Rule<br/>
**Used?** means the entity, attribute or microflow is used in a teststep
:::

| Change done in next revision      | Used? | Executing when not adapting to next revision |
| --------------------------------- | ----- | -------------------------------------------- |
| Added entity                      | N/A   | <i class="fal fa-check"></i>                 |
| Deleted existing entity           | No    | <i class="fal fa-check"></i>                 |
| Deleted existing entity           | Yes   | <font color="red">Error</font>               |
| Added attribute                   | N/A   | <i class="fal fa-check"></i>                 |
| Deleted existing attribute        | No    | <i class="fal fa-check"></i>                 |
| Deleted existing attribute        | Yes   | <font color="red">Error</font>               |
| Added association                 | N/A   | <i class="fal fa-check"></i>                 |
| Deleted existing association      | No    | <i class="fal fa-check"></i>                 |
| Deleted existing association      | Yes   | <font color="red">Error</font>               |
| Renamed entity                    | No    | <i class="fal fa-check"></i>                 |
| Renamed entity                    | Yes   | <i class="fal fa-check"></i>                 |
| Renamed attribute                 | No    | <i class="fal fa-check"></i>                 |
| Renamed attribute                 | Yes   | <i class="fal fa-check"></i>                 |
| Renamed association               | No    | <i class="fal fa-check"></i>                 |
| Renamed association               | Yes   | <i class="fal fa-check"></i>                 |
| Other domain model change         | No    | <i class="fal fa-check"></i>                 |
| Other domain model change         | Yes   | <i class="fal fa-check"></i>                 |
| Added microflow                   | N/A   | <i class="fal fa-check"></i>                 |
| Deleted existing microflow        | No    | <i class="fal fa-check"></i>                 |
| Deleted existing microflow        | Yes   | <font color="red">Error</font>               |
| Added microflow input parameter   | No    | <i class="fal fa-check"></i>                 |
| Added microflow input parameter   | Yes   | <font color="red">Error</font>               |
| Deleted microflow input parameter | No    | <i class="fal fa-check"></i>                 |
| Deleted microflow input parameter | Yes   | <font color="red">Error</font>               |
| Renamed microflow input parameter | No    | <i class="fal fa-check"></i>                 |
| Renamed microflow input parameter | Yes   | <i class="fal fa-check"></i>                 |
| Changed microflow return value    | No    | <i class="fal fa-check"></i>                 |
| Changed microflow return value    | Yes   | <font color="red">Error</font>               |
| Other microflow change            | No    | <i class="fal fa-check"></i>                 |
| Other microflow change            | Yes   | <i class="fal fa-check"></i>                 |
| Any other model change            | N/A   | <i class="fal fa-check"></i>                 |



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 february 2023