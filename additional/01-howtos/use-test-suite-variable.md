# Use a Test Suite variable

## Howto

This document describes how to create a Test Suite variable (of type String, Integer, Long, Decimal, Datetime, Boolean or Enumeration).
It is possible to define a variable once, reuse it across the entire Test Suite, and optionally add it to the Data Variation. 

Simply create a microflow in your project that takes a parameter and returns exactly the same parameter. <br/>
Call that microflow using a Microflow Teststep, and you can then use the output everywhere in the same test suite.

Example of this microflow:

![Passthrough String microflow](images/passthrough.png)
