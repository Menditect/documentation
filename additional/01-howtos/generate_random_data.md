# Generate random data

## Howto

This document describes how to generate random values for attributes in a teststep.

### Use MTA option for Create and Change teststeps

- For Create teststeps, see [Reference guide for Create teststep](../../Teststep/2-create#generate-random-values) 
- For Change teststeps, see [Reference guide for Change teststep](../../Teststep/3-change#generate-random-values)

### Use the MTA Utility Module for String attributes

The MTA Utility Module contains several extension microflows that can be used to perform operations that are not native functions of MTA (yet).

[Download the MTA Utility Module here](https://6434334.fs1.hubspotusercontent-na1.net/hubfs/6434334/MTA%20releases/MtaUtilityModule_mx9_24_2.mpk)

Create a teststep calling the GET_string_random microflow to create a random string (of specified length, and in lower- or uppercase). You can use the output of this teststep to fill String attributes in Create, Retrieve, Change teststeps and to fill String parameters in other microflow teststeps.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 14 june 2023