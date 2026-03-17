---
sidebar_position: 2
---

# Frontend test guide

## Purpose

This guide describes step-by-step how to prepare for, design, and run a Frontend test in MTA and analyze the run results.

## Prepare

### Adding Class

Start by [adding a Class](configure-mta/prepare-mendix-project#add-page-classes) to each [Mendix Page](../../mta/mendix-page) you want to test.

### Import modules

Then, [download and install](../installation/install-playwright-browser) the [Connector](../../Tools/playwright-connector) and [Testkit](../../Tools/playwright-testkit) modules, required for Frontend testing.

### Download Pages and Widgets

[Enable the downloading](../../mta/application#enable-loading-pages-and-widgets) of [Pages](../../mta/mendix-page) and [Widgets](../../mta/frontend-glossary#widget) on the App you want to test.

[Download a new revision](../../mta/application-revision#change-the-application-revision-for-a-test-configuration) and [adapt the Test Configuration](../../mta/application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision), so Page and Widget information is loaded into MTA.

## Design

[Setup the Test Cases for the Frontend test](../../mta/frontend-test#setup-frontend-test).

[Generate the Teststeps for the Frontend test](../../mta/frontend-test#generate-teststeps).

[Enable Tracing for the Frontend Test](../../mta/frontend-test#tracing) so you can re-watch the browser in action.

## Run

### Run the Frontend test

Run the test and analyse results with the Trace file

When a Frontend test is executed with one of the Menditect Playwright Modules, a Browser will execute the commands. Depending on [how the Browser is hosted](../installation/install-playwright-browser), and if you've chosen to run a Headless test (see [Frontend test](../../mta/frontend-test) ) the Browser window will also be visible during the test. It may take some time for Playwright to load it's libraries into memory and for the Browser to to become visible. 
 
:::info reboot may be needed
If the Test Run stalls in MTA and it takes too long for the Browser to become visible, it may be necessary to restart your computer.
:::

### Analyzing a Frontend test

The results of a Frontend test can be stored in a [Playwright Tracefile](../../mta/frontend-glossary#tracefile). 

:::info tracefile not generated
If a [Frontend test](../../mta/frontend-test) fails with a [Teststep Exception](../../mta/teststep-exception), the Playwright Tracefile may not be generated, because the Teststep that stores the FileDocument containing the Tracefile was not executed.

To make sure that this Teststep will be executed, set the [Exception Handling](../../mta/Teststep#exception-handling) property to `Continue` on the preceding Teststeps.
:::