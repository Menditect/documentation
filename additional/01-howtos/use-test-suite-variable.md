# Use a Test Suite variable

## Howto

This document describes how to create a Test Suite variable (of type String, Integer, Long, Decimal, Datetime, Boolean or Enumeration).
It is possible to define a variable once, reuse it across the entire Test Suite, and optionally add it to the Data Variation. 

Simply create a microflow that takes a parameter and returns exactly the same parameter. You can then use it everywhere in the same test suite.

Example:

![Passthrough String microflow](images/passthrough.png)
