# Teststep Exception


## Definition

A Teststep Exception occurs during the execution of a [Teststep](Teststep/). A Teststep Exception occurs because in the [Application Instance](application-instance) where the test was executed, a Mendix Error occured that was not handled by a Mendix [Error Handler](https://docs.mendix.com/refguide/error-handling-in-microflows/).

If a Teststep Exception is not handled by Mendix, it can be handled by MTA, by setting a [Teststep Exception Handler](Teststep#exception-handling) to `Continue`.

A Teststep Exception is not to be confused with the [Coverage Exception](coverage-exception).

## Properties

### Message
The Exception message text.
  
## Business rules

None.

## Actions on Teststep Exception

### View Teststep Exception

#### Unhandled Exception

- When a [Test Run](test-run) is Stopped because of a Teststep Exception, the executed [Teststep](Teststep/) is <font color="#d30d2e"> marked red</font>.
- In the details of the executed Teststep, this text is shown: <font color="#d30d2e"> Execution caused an exception - Execution stopped</font>. Also, the Exception Message is shown.

#### MTA Handled Exception

- When a [Test Run](test-run) Continues because of an [Assert that expects a Raised Teststep Exception](../mta/Assert/assert-exception), the executed [Teststep](Teststep/) is not marked red, but marked with a colored `Assert` tag.
- In the details of the executed Teststep, this text is shown: <font color="#d30d2e"> Execution caused an exception - Execution continued</font>. Also, the Exception Message is shown.

#### Mendix Handled Exception

- If an Exception occurs during execution that is handled by a Mendix [Error Handler](https://docs.mendix.com/refguide/error-handling-in-microflows/), it will not be visible in MTA.

## Related topics
- [Test Run](test-run)


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 26 November 2025