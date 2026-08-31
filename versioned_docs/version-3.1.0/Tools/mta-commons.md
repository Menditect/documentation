---
sidebar_position: 4
---

# MTA Commons

## Purpose

Use the Menditect MTA Commons module to enrich the functions in MTA with functions available in Mendix.

MTA can execute [Microflows](../mta/mendix-microflow), but MTA cannot execute separate Mendix commands that are available inside a microflow.

The MTA Commons module makes these commands available as microflows that can be executed from MTA, and which output can be used in MTA for the input of other [Teststeps](../mta/Teststep/).

:::info
Consult the Demo Video site for more info. Click <i class="fal fa-clapperboard-play"></i> in MTA.
:::

### Test Suite variables

- microflows starting with `VAR_` 

This enables the use of a literal variable that can be used throughout the same [Test Suite](../mta/test-suite).

### Date, String and Integer functions

- microflows starting with `FTN_`

This enables the use of the Mendix grammar that is normally only available inside a microflow action.

For example: `FTN_ContainsSubstring`, `FTN_Multiply`, `FTN_CalendarMonthsBetween`.

### Session variables

- microflows starting with `GET_`

This enables the use of session variables like `GET_currentUser` or `GET_latestError`.

### REST requests

- microflows starting with `HTTP_`

This enables setting up a HTTP REST Request, using any method POST/PATCH/GET/DELETE/PUT, adding an optional JSON or file body, executing it and inspecting the Response.

## Installation instructions

Download the MTA Commons module for the respective Mendix version from the Mendix marketplace at:
https://marketplace.mendix.com/link/component/254123

## Update instructions

Replace the module in the Mendix Project if there is a newer version available for the Mendix Runtime.

## Dependencies


:::caution
When calling a Microflow from this module, a Connection to MTA **must be** established.
:::


