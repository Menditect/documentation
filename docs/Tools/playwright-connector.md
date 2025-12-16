---
sidebar_position: 2
---

# MTA Playwright Connector

## Purpose

The MTA Playwright Connector is a Mendix Add-on module built and maintained by Menditect, as a wrapper for Playwright Java commands.

The Playwright Connector makes it possible to define and run a [Frontend test](../mta/frontend-test) in MTA, from any Mendix App. It enables the App to connect to a Playwright Browser, based on specified connection settings, and execute the test. The module is essentially a wrapper around Playwright [Locators](https://playwright.dev/java/docs/locators), [Assertions](https://playwright.dev/java/docs/test-assertions) and [Actions](https://playwright.dev/java/docs/input). These are executed as [Java Actions](https://docs.mendix.com/refguide/java-actions/) inside a Microflow, which in turn can be executed by MTA. Because these actions are generic, the module can be used to frontend test *any* webapplication, not just Mendix Apps.

## Properties

### Domain model

Some relevant entities are explained here. Note that specific Entity and Attribute documentation is also shown in MTA.
- `Browser`, this is the [Playwright Browser](https://playwright.dev/java/docs/browsers) definition that is created when starting the test with one of the `Start_Frontend_Test...` microflows. This allows for setting the `BrowserType` and the default waiting time between Playwright Actions, using the `LocalStartOptions` non persistable entity.
- `BrowserContext`, this allows for setting a default timeout for Playwright Commands, using the `NewBrowserContextOptions` non persistable entity.
- `Page`, this contains the definition for the [Playwright Page](../mta/frontend-glossary#page). The Page is in fact the Browser Tab that is created upon setup. Page Objects are persisted, for the duration of the Test, and deleted when stopping the test. This allows for a Page to be used in subsequent Test Cases.
- `Locator`, this contains the definition of the [Playwright Locator](../mta/frontend-glossary#locator). Locator Objects are persisted, for the duration of the Test, and deleted when stopping the test. This allows for a Locator to be used in subsequent Test Cases.


### Microflows

Some relevant microflows are explained here. Note that specific Microflow and Microflow parameter documentation is also shown in MTA.

Note that some Microflows contain an `Options` parameter. This parameter can be left `Empty` when using the Microflow in MTA, but it allows for setting specific options for that microflow.

- `Start_Frontend_Test...` either one of these 3 microflows is called first when starting a Frontend Test, in order to create the Browser object.
- `Create_BrowserContext` is called next, creating the `BrowserContext` object.
- `Create_Page` is called next, creating the `Page` object.
- `Delete_...` in the `Deletion` folder, these are used to stop the test.
- `Teardown_Playwright` is used to remove Playwright from memory.

[Locator](../mta/frontend-glossary#locator) microflows are inside the `Microflows/Commands/Get_Locator_By...` folders. 
- The `Get_Locator_By_Page` folder contains Locators that have the complete Browser Page as scope to locate any HTML element. 
- The `Get_Locator_By_Locator` folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element. 
- Another way to narrow down the list is using the microflows inside the `Locator_Element_Operations` folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the `...Get_By_Selector` microflows. 

[Assertion](../mta/frontend-glossary#assertion) microflows are in the `Locator_Assertions` folder. 

[Action](../mta/frontend-glossary#action) microflows are in the `Locator_Actions` folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../mta/Teststep#delay-after-execution) that calls the Locator Action microflow.

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