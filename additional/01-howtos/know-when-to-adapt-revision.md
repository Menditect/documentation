# Know when to adapt to next revision

## Definition

This document provides an overview of when it is necessary to adapt (download and adapt Test Suites) to a next revision.

In most scenarios it is not necessary to adapt to a next revision in order to Execute the Test Configuration.

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


