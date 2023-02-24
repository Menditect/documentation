# Use a previous teststep's data

## Definition

This document describes how MTA handles data from one teststep to another.

## Scenario

In MTA it is possible to use the output of one teststep, to pass data to another teststep.

Let's assume there is a generic teststep "A" and another teststep "B". "B" uses the data from "A". "A" returns either a primitive or an object. Primitive values are either a String, Integer, Long, Decimal, Datetime or Boolean. There are a couple scenarios how B can use A's data:

| Scenario | Teststep A is a                             | Returns     | Teststep B is a                            | Uses data to                        |
| -------- | ------------------------------------------- | ----------- | ------------------------------------------ | ----------------------------------- |
| 1        | Microflow teststep                          | Primitive   | Microflow teststep                         | Fill primitive input parameter      |
| 2        | Microflow teststep                          | Primitive   | Create, Change or Retrieve Object teststep | Fill attribute value                |
| 3        | Microflow teststep                          | Enumeration | Microflow teststep                         | Fill enumeration input parameter    |
| 4        | Microflow teststep                          | Enumeration | Create, Change or Retrieve Object teststep | Fill attribute value                |
| 5        | Microflow teststep                          | Object      | Microflow teststep                         | Fill object input parameter         |
| 6        | Microflow teststep                          | Object      | Change, Delete or Retrieve Object teststep | Perform Change, Delete or Retrieve  |
| 7        | Microflow teststep                          | Object      | Create, Change or Retrieve Object teststep | Fill association                    |
| 8        | Create, Change or Retrieve Object teststep  | Object      | Change, Delete or Retrieve Object teststep | Perform Change, Delete or Retrieve  |
| 9        | Create, Change or Retrieve Object teststep  | Object      | Create, Change or Retrieve Object teststep | Fill association                    |
| 10 (N/A) | Microflow teststep                          | Object      | Create, Change or Retrieve Object teststep | Fill attribute value from object    |
| 11 (N/A) | Microflow teststep                          | Object      | Microflow teststep                         | Fill primitive/enum input parameter |
| 12 (N/A) | Create, Change or Retrieve Object teststep  | Object      | Create, Change or Retrieve Object teststep | Fill attribute value from object    |
| 13 (N/A) | MCreate, Change or Retrieve Object teststep | Object      | Microflow teststep                         | Fill primitive/enum input parameter |

## Usage

For Scenarios 1 and 2, the data is copied to MTA whenever executing the test. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case.
Furthermore, because primitives are the same for all Mendix Apps, it is possible to use different Applications for the Test Cases: have one Test Case test App "ABC" and have the other Test Case test "XYZ". 

For Scenarios 3 and 4, the data is also copied copied to MTA whenever executing the test. However Enumerations are App-specific. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case, but both Test Cases need to test the same Application.

For Scenarios 5 - 9 the data is not copied to MTA whenever executing the test. Instead, MTA uses the Object's ID to refer to the Object in-memory. Consequentually whenever retrieving data, regardless of which Teststep is being used to retrieve from, always the latest state of that object will be retrieved.

Lastly scenario's 10 - 13 are currently not yet supported. It is necessary to write a microflow instead to retrieve the primitive value from the object.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 february 2023