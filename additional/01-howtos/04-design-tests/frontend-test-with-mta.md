# Design Frontend test in MTA

## Purpose 

This document describes how to design a Frontend Test in MTA.

Make sure to first [prepare the Mendix model for the Frontend Test](../configure-mta/prepare-frontend-test).

## Mendix App testing

Each frontend test has the same basic structure:
- [Start Test](#start-test)
- [Locators and Actions](#locators-and-actions)
- [Stop Test](#stop-test)

### Start Test

**1. How do you want to start the Browser?**

| Connection Method         | Add Teststep that Calls Microflow                        |
| ------------------------- | -------------------------------------------------------- |
| Start at my local machine | `MenditectPlaywrightConnector.Create_Browser`            |
| Start at BrowserStack     | `MenditectPlaywrightConnector.Connect_BrowserStack`      |
| Start at URL              | `MenditectPlaywrightConnector.Connect_Playwright_Server` |

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

For convenience when testing Mendix Apps, instead of using Playwright Locators and Actions, we've introduced Widget-specific Locators and Actions.

The recurring <i class="fa-solid fa-1"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-3"></i> Teststep pattern for Mendix Apps is:
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

Pattern examples:

**Click on a row in a Datagrid:**<br/><i class="fa-solid fa-1"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-3"></i><br/>
Locate Mendix Page, Locate DataGrid, Filter by text, Click.

**Show a popup, fill text and close popup:**<br/><i class="fa-solid fa-1"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-3"></i> - <i class="fa-solid fa-1"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-3"></i> - <i class="fa-solid fa-2"></i> - <i class="fa-solid fa-3"></i><br/>
Locate Mendix Page, Locate Button, Click, Locate Popup Page, Locate Textbox, Fill text, Locate Button, Click.

### Stop Test

To Stop the Frontend Test, simply add a Teststep that calls `MenditectMxUITestKit.Stop_MxUITest`. 

At the end of the Test Configuration, to unload the Playwright libraries from memory, call `MenditectPlaywrightConnector.Shutdown_Playwright`.

## Generic App testing

To perform an action on an element in the page, the basic structure is to use two microflows; a Locator microflow and an Action microflow. Sometimes calling a second Locator microflow is needed.

In the Playwright Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../mta/Teststep#properties) that calls the Locator Action microflow.

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).


### Session handling

The [Test Case](../../../mta/test-case) containing the Teststeps should be using an Account with dedicated UserRoles in the Connector & UI Test Kit Playwright modules (for example, `UiTestUser`) as an Execution user, with the Apply-security Enabled. Although MTA creates it's own user session to perform actions in a Test Case, it is still necessary to login to the App under test when using MTA. 

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