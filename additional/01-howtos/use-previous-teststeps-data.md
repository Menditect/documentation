# Use a previous teststep's data

## Definition

This document describes how MTA handles data from one teststep to another.

## Scenario

In MTA it is possible to use the output of one teststep, to pass data to another teststep.

Let's assume there is a generic teststep "A" and another teststep "B". B uses the data from A. A returns either a primitive or an object. Primitive values are either a String, Integer, Long, Decimal, Datetime or Boolean. There are a couple scenarios how B can use A's data:

| Scenario | Teststep A is a                            | Returns a   | Teststep B is a                            | Uses data to                                               |
| -------- | ------------------------------------------ | ----------- | ------------------------------------------ | ---------------------------------------------------------- |
| 1        | Microflow teststep                         | Primitive   | Microflow teststep                         | Fill primitive input parameter                             |
| 2        | Microflow teststep                         | Primitive   | Create, Change or Retrieve Object teststep | Fill attribute value                                       |
| 3        | Microflow teststep                         | Enumeration | Microflow teststep                         | Fill enumeration input parameter                           |
| 4        | Microflow teststep                         | Enumeration | Create, Change or Retrieve Object teststep | Fill attribute value                                       |
| 5        | Microflow teststep                         | Object      | Microflow teststep                         | Fill object input parameter                                |
| 6        | Microflow teststep                         | Object      | Change, Delete or Retrieve Object teststep | Perform Change, Delete or Retrieve on                      |
| 7        | Microflow teststep                         | Object      | Create, Change or Retrieve Object teststep | Fill association                                           |
| 8        | Create, Change or Retrieve Object teststep | Object      | Change, Delete or Retrieve Object teststep | Perform Change, Delete or Retrieve on                      |
| 9        | Create, Change or Retrieve Object teststep | Object      | Create, Change or Retrieve Object teststep | Fill association                                           |
| 10       | Microflow teststep                         | Object      | Create, Change or Retrieve Object teststep | Fill attribute value from within object                    |
| 11       | Microflow teststep                         | Object      | Microflow teststep                         | Fill primitive/enum input parameter from within object     |
| 12       | Create, Change or Retrieve Object teststep | Object      | Create, Change or Retrieve Object teststep | Fill attribute value from within object from within object |
| 13       | Create, Change or Retrieve Object teststep | Object      | Microflow teststep                         | Fill primitive/enum input parameter                        |

## Usage

### Using Primitives

For Scenarios 1 and 2, the data is copied to MTA whenever executing the test. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case.
Also, for Scenarios 10 - 13, the data is first copied and then used to assign (fill) the value. 

:::note
Note that because the data is first copied to MTA, the Domain Model Access on attributes is not checked when using the values from those attributes in another Test Case!
:::

Furthermore, because primitives are the same for all Mendix Apps, it is possible to use different Applications for the Test Cases: have one Test Case test App "ABC" and have the other Test Case test "XYZ".

#### Implicit converts of datatypes

Below tables illustrate what datatypes are interchangeable and (implicitly) converted when executing the Test Case.

Note that a String value that is converted into other another datatype could lead to an error on the Teststep upon execution.

| To set value for **attribute** that's a… | Use attribute that's a…                            | Or microflow return value that's a…          |
| ---------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| AutoNumber (only for Retrieve teststep)  | AutoNumber/Integer/Long/String                     | IntegerLong/String                           |
| Boolean                                  | Boolean                                            | Boolean                                      |
| DateTime                                 | DateTime                                           | DateTime                                     |
| Decimal                                  | AutoNumber/Decimal/Integer/Long/String (converted) | Decimal/Float/IntegerLong/String (converted) |
| HashString                               | HashString/String                                  | String                                       |
| Integer                                  | AutoNumber/Integer/Long/String (converted)         | IntegerLong/String (converted)               |
| Long                                     | AutoNumber/Integer/Long/String (converted)         | IntegerLong/String (converted)               |
| String                                   | AutoNumber/Integer/Long/String                     | IntegerLong/String                           |


| To set value for **microflow parameter** that's a… | Use attribute that's a…                            | Or microflow return value that's a…          |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------- |
| Boolean                                            | Boolean                                            | Boolean                                      |
| DateTime                                           | DateTime                                           | DateTime                                     |
| Decimal                                            | AutoNumber/Decimal/Integer/Long/String (converted) | Decimal/Float/IntegerLong/String (converted) |
| IntegerLong                                        | AutoNumber/Integer/Long/String (converted)         | IntegerLong/String (converted)               |
| String                                             | AutoNumber/Integer/Long/String                     | IntegerLong/String                           |


### Using Enumerations

For Scenarios 3 and 4, the data is also copied to MTA whenever executing the test. However Enumerations are App-specific. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case, but both Test Cases need to test the same Application.

### Using Objects

For Scenarios 5 - 9 the data is not copied to MTA whenever executing the test. Instead, MTA uses the Object's ID to refer to the Object in-memory. Consequentually whenever retrieving data, regardless of which Teststep is being used to retrieve from, always the latest state of that object will be retrieved.

:::caution
Beware that when changing an Object after retrieving it, if you retrieve it again from that same teststep, it will still be changed!
:::

## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 february 2023
