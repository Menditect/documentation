---
sidebar_position: 20
---

# Frontend Test

## Definition

A Frontend Test in MTA is a set of [Teststeps](Teststep/) that start a Playwright Browser and use the [Playwright Connector](../Tools/playwright-connector) module to [Locate](frontend-glossary#locator) [Elements](frontend-glossary#element) on a webpage and perform [Actions](frontend-glossary#action) on it.

In contrast to a "Traditional" backend test in MTA, where [Mendix Microflows](mendix-microflow) can be tested, a Frontend test allows to interact with any website's user interface. 

Read the how-to section and the installation guide to enable Frontend testing.

Preparing the structure for Frontend-testing any website is described below in [Setup Frontend Test](#setup-frontend-test). Teststeps that are generated, will be calling [Microflows](mendix-microflow) from the [Playwright Connector](../Tools/playwright-connector).

Generating Teststeps specifically for testing Mendix Apps is described in [Generate Teststep(s)](#generate-teststeps). Teststeps that are generated, will be calling [Microflows](mendix-microflow) from the [Mendix Frontend Testkit](../Tools/playwright-testkit). This allows for testing [Mendix Pages](mendix-page).

For background information about Playwright Testing, make sure to checkout the Knowledge Base section in this documentation site, or consult the [Playwright Documentation for Java](https://playwright.dev/java/docs/intro).


## Properties

### Application
The [Application](application) that will be used for generated [Test Cases](test-case#test-application).

### Execution user
The Execution user that will be used for generated [Test Cases](test-case#execution-user).

### Start test location
The hosting location of the Playwright Browser where the test will be executed in.

For installation instructions, please follow [this page](../../additional/installation/install-playwright-browser).

| Start test location | Teststep will call Microflow                                              |
| ------------------- | ------------------------------------------------------------------------- |
| Locally             | `MenditectPlaywrightConnector.Start_Frontend_Test_Locally`                |
| BrowserStack        | `MenditectPlaywrightConnector.Start_Frontend_Test_With_BrowserStack`      |
| PlaywrightServer    | `MenditectPlaywrightConnector.Start_Frontend_Test_With_Playwright_Server` |

### BrowserType

The browser that will be started; either `Chromium`, `Firefox`, or `Webkit`.

### Headless
Headless means that the browser will not be visible during the test. Only applicable when `Start test location` = `Locally` (other options are always Headless).

### SlowMo
`Property of LocalStartOptions`<br/>
Waiting time in milliseconds between [Actions](frontend-glossary#action). Comparable with the [Delay setting on Teststep](Teststep/index.md#delay-after-execution).

### Use login
Determines whether it is required to login to the Mendix App in order to test it's [Pages](mendix-page).

If the Mendix App has Anonymous access enabled it may not be necessary to Use login.

| Use login | Teststep will call Microflow                               |
| --------- | ---------------------------------------------------------- |
| Yes       | `MenditectMxUITestKit.Start_MxFrontend_Test_With_Login`    |
| No        | `MenditectMxUITestKit.Start_MxFrontend_Test_Without_Login` |

### Mendix_URL
The URL where the Mendix App is running.

### Tracing
`Property of StartMxFrontendTestOptions`<br/>
A Trace file will be generated, that you can upload at https://trace.playwright.dev/, where you will be able to view the actions in the browser. Particularly useful for Headless testing.

### ViewPort 
`Property of StartMxFrontendTestOptions`<br/>
Enables setting the height and width of the browser window.

## Business rules

- [The Playwright Connector](../Tools/playwright-connector) module must be imported in the App under test, to create generic Frontend Tests.
- [The Mendix Frontend Testkit](../Tools/playwright-testkit) module must be imported in the App under test, to Frontend Test Mendix Apps.
- [Enable Loading Pages and Widgets](../mta/application#enable-loading-pages-and-widgets), to Frontend Test Mendix Apps.
- The [Page Class](../mta/mendix-page#class-name) must be filled in in order to test Widgets on a Mendix Page.

## Actions on Frontend Test

### Setup Frontend Test

This action will generate 3 [Test Cases](test-case)
1. Frontend test - Setup 
   - The Playwright Browser is created.
2. Frontend test - `[Add test here]` 
   - The Frontend Test is started.
   - The Frontend Test is stopped, outputting any recorded [Trace files](frontend-glossary#tracefile).
   - Add the Teststeps in between.
3. Frontend test - Teardown 
   - The Playwright Browser is terminated.

- Navigate to the Test Suite where you want to create a Frontend test in.
- Use the `Add frontend test` button to create Frontend Test Cases.
- Select the [Application](application) for the Test Cases.
- Select the Execution user for the Test Cases.
- Select the `Start test location` to determine if Playwright is hosted locally, in Browserstack, or in a separate server.
- Fix the construction errors by setting the missing parameters. Consult [Properties](#properties) above to learn about parameters.

### Generate Teststep(s)

This action will generate one or more [Teststeps](Teststep/). 

- Move the mouse below the second Test Case.
- Click <i class="fal fa-plus-circle"></i> and Click `Frontend teststep(s)`.
- Select the [Page](mendix-page) where the [Widgets](frontend-glossary#widget) will be tested. If this is the first Page after opening the App, select the user's Homepage.
- Select the Widget to [locate](frontend-glossary#locator) and perform an [Action](frontend-glossary#action) on.
- MTA will show the structure of the Widget on the Page.
- If any of the parent Widgets can contain multiple child elements, you must select which [Filter](frontend-glossary#filter) to use.
- Define which Action to perform on the selected Widget.
- If the Action results in another Locator, select a secondary Action.
- Click `Add teststeps`.
- Fix any [construction errors](construction-error) by [filling in parameters of the Microflow teststeps](Teststep/microflow#setting-microflow-parameters) that MTA added.

## Related topics
- [Frontend Testing Glossary](frontend-glossary)
- [Teststep](Teststep/)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 14 October 2025