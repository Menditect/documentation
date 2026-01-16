---
sidebar_position: 2
---

# Run and Analyze a Frontend test

## Purpose

This document describes how to run a Frontend test in MTA and analyze the run results.

## Running a Frontend test

When a Frontend test is executed with one of the Menditecgt Playwright Modules, a Browser will execute the commands. Depending on [how the Browser is hosted](../../installation/install-playwright-browser), and if you've chosen to run a Headless test (see [Frontend test](../../../mta/frontend-test) ) the Browser window will also be visible during the test. It may take some time for Playwright to load it's libraries into memory and for the Browser to to become visible. 
 
:::info reboot may be needed
If the Test Run stalls in MTA and it takes too long for the Browser to become visible, it may be necessary to restart your computer.
:::

## Analyzing a Frontend test

The results of a Frontend test can be stored in a [Playwright Tracefile](../../../mta/frontend-glossary#tracefile). 

### Generating Tracefile for failed Test Run

If a [Frontend test](../../../mta/frontend-test) fails with a [Teststep Exception](../../../mta/teststep-exception), the Playwright Tracefile may not be generated, because the Teststep that stores the FileDocument containing the Tracefile was not executed.

To make sure that this Teststep will be executed, set the [Exception Handling](../../../mta/Teststep#exception-handling) property to `Continue` on the preceding Teststeps.