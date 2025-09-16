# Design Frontend test in MTA

## Purpose 

This document describes how to design a Frontend Test in MTA.

Make sure to first [prepare the Mendix model for the Frontend Test](../configure-mta/prepare-frontend-test).

## MTA Test structure

Each frontend test has the same basic structure:
- [Start Test](#start-test)
- [Locators and Actions](#locators-and-actions)
- [Stop Test](#stop-test)

### Start Test

These steps describe how to Start a frontend test for a Mendix App.

**1. How to connect to the Playwright Server?**

| Connection Method           | Add Teststep that Calls Microflow                        |
| --------------------------- | -------------------------------------------------------- |
| Connect to my local machine | `MenditectPlaywrightConnector.Create_Browser`            |
| Connect to BrowserStack     | `MenditectPlaywrightConnector.Connect_BrowserStack`      |
| Connect to URL              | `MenditectPlaywrightConnector.Connect_Playwright_Server` |

**2. What browser do you want to run your test on?**

Set the `BrowserType` parameter of the Microflow Teststep that you just added.

**3. Do you want to run a headless test?** Default `No`. Headless testing means that the browser will not be visible during the test. Only applicable when running Playwright on a local machine (other options are always Headless).

Set the `Headless` parameter of the Microflow Teststep that you just added. 

**4. Set milliseconds to wait between actions.** Default `0`. Setting this will make Playwright wait between actions so you can see what's happening in the browser.

Set the `SlowMo` parameter of the Microflow Teststep that you just added.

**5. Set remaining Microflow parameters.**

Set the remaining parameters, depending on which Microflow you chose.

**6. Do you want to provide a login, or view the Mendix App anonymously?**

| Login type                | Add Teststep that Calls Microflow                   |
| ------------------------- | --------------------------------------------------- |
| Username / Password       | `MenditectMxUITestKit.Start_MxUITest_With_Login`    |
| Anonymous (if configured) | `MenditectMxUITestKit.Start_MxUITest_Without_Login` |

**7. Provide the URL where the Mendix App is running.**

Set the `URL` parameter of the Microflow Teststep that you just added.

**8. Do you want to enable Tracing for the duration of the Test?** A Trace file will be generated, that you can upload at https://trace.playwright.dev/, where you will be able to view the actions in the browser. Particularly useful for Headless testing.

Set the `Tracing` parameter of the Microflow Teststep that you just added.

**9. Do you want to choose the height and width of the browser window?** 

Set the `ViewPort` object parameter of the Microflow Teststep that you just added. If left empty, Playwright will use default values.

**10. Set remaining Microflow parameters.**

Set the remaining parameters, depending on which Microflow you chose.

### Locators and Actions

### Stop Test

To Stop the Frontend Test, simply add a Teststep that calls `MenditectMxUITestKit.Stop_MxUITest`. 

At the end of the Test Configuration, to unload the Playwright libraries from memory, call `MenditectPlaywrightConnector.Shutdown_Playwright`.

## Generic App testing

To perform an action on an element in the page, the basic structure is to use two microflows; a Locator microflow and an Action microflow. Sometimes calling a second Locator microflow is needed.

In the Playwright Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../Teststep#properties) that calls the Locator Action microflow.

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).


### Session handling

The [Test Case](../../../test-case) containing the Teststeps should be using an Account with dedicated UserRoles in the Connector & UI Test Kit Playwright modules (for example, `UiTestUser`) as an Execution user, with the Apply-security Enabled. Although MTA creates it's own user session to perform actions in a Test Case, it is still necessary to login to the App under test when using MTA. 

The upside of the current implementation is that sessions created by Playwright can be carried onto subsequent Test Cases. Just point to the `MenditectPlaywrightConnector.Page` object that was created in a Test Case, whenever calling a Locator microflow, and the same browser tab will be used to run the test. 

When running Playwright on your local machine from Studio Pro, the free license will only allow for so many user sessions. Therefore, a few tips:
- prevent using Anonymous sessions;
- always logout at the end when creating a Playwright session;
- prevent also manually logging in from your own browser;
- restart the App if needed.

## Testing Mendix Platform Supported Widgets

[Click here to see a list of recent Platform supported Widgets](https://marketplace.mendix.com/link/supporttype/Platform)


## Testing Custom Widgets and Snippets

### Custom Widgets

Mendix will add the "mx-name-`widgetName`" class to every widget on the Page, so it is always possible to create a Locator for the surrounding HTML element. However in most cases you will want to add another Locator inside that Locator, so define Actions for child elements.

### Snippets

Snippets are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. 

In order to define Locators for Widgets inside a Snippet, add a surrounding Container rendered as a DIV element, with a representable name, to locate it.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025