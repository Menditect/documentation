---
sidebar_position: 2
---

# MTA Playwright Connector

## Purpose

The MTA Playwright Connector is a Mendix Add-on module built and maintained by Menditect, as a wrapper for Playwright Java commands.

The Playwright Connector makes it possible to define and run a [Frontend test](../mta/frontend-test) in MTA, from any Mendix App. It enables the App to connect to a Playwright Browser, based on specified connection settings, and execute the test. The module is essentially a wrapper around Playwright [Locators](https://playwright.dev/java/docs/locators), [Assertions](https://playwright.dev/java/docs/test-assertions) and [Actions](https://playwright.dev/java/docs/input). These are executed as [Java Actions](https://docs.mendix.com/refguide/java-actions/) inside a Microflow, which in turn can be executed by MTA. Because these actions are generic, the module can be used to frontend test *any* webapplication, not just Mendix Apps.

## Properties

### Domain model

### Microflows
Locator microflows are inside the `Microflows/Commands` folder. The `Get_Locator_By_Page` folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The `Get_Locator_By_Locator` folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the `Locator_Element_Operations` folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the `...Get_By_Selector` microflows. 

Locator Actions are in the `Locator_Actions` folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../mta/Teststep#delay-after-execution) that calls the Locator Action microflow.

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).

## Installation instructions

- Download the Playwright Connector module from the Mendix Marketplace: https://marketplace.mendix.com/link/component/214764
- To start Frontend Testing, you must [host a Playwright Browser](../../additional/installation/install-playwright-browser).


## Update instructions

Replace the existing module when importing a new version. When running the Playwright Browser from within your Mendix project, make sure to check which Playwright version is supported by the Playwright Connector.

Make sure to delete any old JAR files from the userlib subfolder in your project directory. 

## Dependencies

These modules are **required** to be imported in the Mendix App under test:
- [MTA Plugin](mta-plugin)
- [MTA Mendix Frontend Testkit](playwright-testkit)

Make sure to convert widgets to React widgets if [React](https://docs.mendix.com/refguide/mendix-client/react/) is enabled for the Mendix project.


## Feedback?
Are you missing a Playwright Java command? [Let us know by submitting a Feature Request!](https://share.hsforms.com/15C364bwdTfCyQypkV6lWrA3twri)

Last updated: 17 September 2025