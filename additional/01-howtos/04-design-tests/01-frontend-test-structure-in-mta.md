# Structure a Frontend test in MTA

## Purpose 

This document describes how to structure a Frontend Test in MTA.

Make sure to first [prepare the Mendix model for the Frontend Test](../configure-mta/prepare-frontend-test), and [host a Playwright Browser](../../installation/install-playwright-browser).

## Mendix App testing

Each frontend test has the same basic structure:
1. [Start Test](#start-test)
2. [Locators and Actions](#locators-and-actions)
3. [Assertions](#assertions)
4. [Stop Test](#stop-test)

### Start Test

Before you can start the frontend test, you need to decide where the Playwright Browser will be hosted, where the test will be executed in.

For installation instructions, please follow [this page](../../installation/install-playwright-browser).

**1. How do you want to start the Browser?**

| Connection Method         | Add Teststep that Calls Microflow                                |
| ------------------------- | ---------------------------------------------------------------- |
| Start at my local machine | `MenditectPlaywrightConnector.Start_Test_Locally`                |
| Start at BrowserStack     | `MenditectPlaywrightConnector.Start_Test_With_BrowserStack`      |
| Start at URL              | `MenditectPlaywrightConnector.Start_Test_With_Playwright_Server` |

**2. What browser do you want to run your test on?**

Set the `BrowserType` parameter of the Microflow Teststep that you just added.

**3. Do you want to run a headless test?** Default `No`. Headless testing means that the browser will not be visible during the test. Only applicable when running Playwright on a local machine (other options are always Headless).

Set the `Headless` parameter of the Microflow Teststep that you just added. 

**4. Set milliseconds to wait between actions.** Default `0`. Setting this will make Playwright wait between actions so you can see what's happening in the browser.

Set the `SlowMo` parameter of the Microflow Teststep that you just added.

**5. Set remaining Microflow parameters.**

Set the remaining parameters, depending on which Microflow you chose.

**6. Do you want to provide a login to view your Mendix App?**

| Login type | Add Teststep that Calls Microflow                   |
| ---------- | --------------------------------------------------- |
| Yes        | `MenditectMxUITestKit.Start_MxUITest_With_Login`    |
| No         | `MenditectMxUITestKit.Start_MxUITest_Without_Login` |

**7. Provide the URL where the Mendix App is running.**

Set the `URL` parameter of the Microflow Teststep that you just added.

**8. Do you want to enable Tracing for the duration of the Test?** A Trace file will be generated, that you can upload at https://trace.playwright.dev/, where you will be able to view the actions in the browser. Particularly useful for Headless testing.

Set the `Tracing` parameter of the Microflow Teststep that you just added.

**9. Do you want to choose the height and width of the browser window?** 

Set the `ViewPort` object parameter of the Microflow Teststep that you just added. If left empty, Playwright will use default values.

**10. Set remaining Microflow parameters.**

Set the remaining parameters, depending on which Microflow you chose.

### Locators and Actions

For convenience when testing Mendix Apps, instead of using Playwright Locators and Actions, Menditect introduced Widget-specific Locators and Actions.

Read [Find a Locator](frontend-test-find-locator) to learn more about Locators for Mendix Apps.

The recurring pattern of Teststeps for frontend testing a Mendix App:
1. **Locate** the Mendix **Page**: `Locate_MxPage`, by Page Class, also see [Prepare for Frontend test](../configure-mta/prepare-frontend-test). 
   - Takes a PageClass String parameter
   - Returns a MxPageLocator object 
2. **Locate** a Mendix **Widget**: for example `Locate_MxWidget_Button`, by Widget Name, for example `actionButton1`.
   - Takes a WidgetName String parameter
   - Returns a MxLocator specialization object
3. Perform **Action** on the Mendix Widget, for example `Click_Button`.
   - Takes a MxLocator specialization object
   - Throws a possible Playwright Error, when the Widget cannot be located. 

- When the navigation moves to another Mendix Page, a new `Locate_MxPage` microflow must be called to locate that Mendix Page. 
- When the Mendix Widget is inside another Mendix Widget, adding an additional Widget-specific `Locate_MxWidget_...` microflow may be needed.
- When there are multiple occurences of the same Mendix Widget, for example in a list, adding a Widget-specific `Filter...` or `Nth...` microflow may be needed.

:::info examples below
:::

**Click on a button:**

|     | Type          | Description          |
| --- | ------------- | -------------------- |
| 1   | Locate Page   | Locate the main page |
| 2   | Locate Widget | Locate actionbutton  |
| 3   | Action        | Click actionbutton   |

****

**Click on a row in a Datagrid:**

|     | Type          | Description                        |
| --- | ------------- | ---------------------------------- |
| 1   | Locate Page   | Locate the main page               |
| 2   | Locate Widget | Locate the datagrid widget         |
| 3   | Locate Widget | Locate the 2nd row in the datagrid |
| 4   | Action        | Click datagrid row                 |

Note that you have to add **a second Locator microflow** to find the 2nd row in the datagrid. 

This is necessary because the same Widget occurs multiple times and you have to choose which one to Click.

Also read [Find a Locator](frontend-test-find-locator) to learn more.

****

**Show a popup, fill text and close popup:**

|     | Type          | Description            |
| --- | ------------- | ---------------------- |
| 1   | Locate Page   | Locate the main page   |
| 2   | Locate Widget | Locate actionbutton    |
| 3   | Action        | Click actionbutton     |
| 4   | Locate Page   | Locate the popup page  |
| 5   | Locate Widget | Locate textbox         |
| 6   | Action        | Fill textbox with text |
| 7   | Locate Widget | Locate actionbutton    |
| 8   | Action        | Click actionbutton     |

****

### Assertions

An assertion in frontend testing will check if a certain fact about a Locator is true. An assertion in frontend testing behaves differently from an [MTA Assert](../../../mta/Assert). If the certain fact about the Locator is false, the assertion has failed, and a [Teststep Exception](../../../mta/teststep-exception) will be thrown. MTA default behaviour is to stop the test execution if this occors. You can also choose to continue the execution with the next Test Case by enabling a [Test Case Exception Handler](../../../mta/test-case#exception-handling). It is also possible, however not advisable, to continue the execution with the next Teststep by enabling a [Teststep Exception Handler](../../../mta/Teststep#exception-handling), because the rest of the actions will most likely also fail.

Learn more about Playwright Assertions here: https://playwright.dev/java/docs/test-assertions


:::info examples below
:::

**Check if page title matches expected text**

|     | Type        | Description            |
| --- | ----------- | ---------------------- |
| 1   | Locate Page | Locate the main page   |
| 2   | Assertion   | Assert Page title text |

****

**Check if a certain image is visible**

|     | Type          | Description             |
| --- | ------------- | ----------------------- |
| 1   | Locate Page   | Locate the main page    |
| 2   | Locate Widget | Locate image            |
| 4   | Assertion     | Assert image is visible |

****

**Check if a button can be clicked**

|     | Type          | Description                    |
| --- | ------------- | ------------------------------ |
| 1   | Locate Page   | Locate the main page           |
| 2   | Locate Widget | Locate actionbutton            |
| 4   | Assertion     | Assert actionbutton is enabled |

****


### Stop Test

To Stop the Frontend Test, simply add a Teststep that calls `MenditectMxUITestKit.Stop_MxUITest`. 

At the end of the Test Configuration, to unload the Playwright libraries from memory, call `MenditectPlaywrightConnector.Shutdown_Playwright`.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025