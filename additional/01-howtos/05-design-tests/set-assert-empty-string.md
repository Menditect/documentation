# Set or Assert an Empty String

## Definition

This document describes how to 
- set a String attribute value or microflow parameter to EMPTY (or `null` in Java terms)
- [Assert](../../../mta/Assert/) that the String value *is* EMPTY / `null`.

MTA has the option to leave String Textboxes empty, but this results in a zero-length String \'\', not in EMPTY / `null`.

## Set empty String

- First, you need to import the [MTA Commons](../../../Tools/mta-commons) module.
- Add a [Microflow Teststep](../../../mta/Teststep/microflow) that calls `MenditectMtaCommons.VAR_Integer` 
- Select `Fixed value` and leave the value empty. This microflow will return an Integer with value EMPTY / `null`.
- Add a [Microflow Teststep](../../../mta/Teststep/microflow) that calls `MenditectMtaCommons.VAR_String` 
- Select `Teststep` and select the previous Teststep. This microflow will return a String with value EMPTY / `null`.
- Add the Teststep where you want to set a String to EMPTY / `null`.
- When asked to fill the value or microflow parameter, select `Teststep` and select the previous Teststep.

## Assert empty String

- First, you need to import the [MTA Commons](../../../Tools/mta-commons) module.
- Add a [Microflow Teststep](../../../mta/Teststep/microflow) that calls `MenditectMtaCommons.VAR_Integer` 
- Select `Fixed value` and leave the value empty. This microflow will return an Integer with value EMPTY / `null`.
- Add a [Microflow Teststep](../../../mta/Teststep/microflow) that calls `MenditectMtaCommons.VAR_String` 
- Select `Teststep` and select the previous Teststep. This microflow will return a String with value EMPTY / `null`.
- Add a [Microflow Teststep](../../../mta/Teststep/microflow) that calls `MenditectMtaCommons.FTN_EqualsString` 
- For the first parameter, select `Teststep` and select the Teststep that provides the value that you want to check.
- For the second parameter, select `Teststep` and select the previous Teststep.
- Add an Assert that verifies that the return value is `true`. 