---
sidebar_class_name: hidden
---

# Test the User Interface using MTA

This section describes how to create a frontend test in MTA, by adding the prerequisite modules to a Mendix project.

:::info
Menditect uses the Playwright runtime to execute these frontend tests. 
Playwright is a library with which you can locate elements on a web page and execute actions on these elements.
See https://playwright.dev/java/ for the relevant documentation.
:::

## Prerequisites

Download these modules from the Mendix marketplace to enable frontend testing.
- The Connector: https://marketplace.mendix.com/link/component/235323
- The Starter Kit: https://marketplace.mendix.com/link/component/235327
- The [MTA Plugin](../connect-mta/import-plugin) 

### Connector

The Connector makes it possible to define and run a frontend test from any Mendix App. 
It includes Locator microflows to find elements on a webpage, and Action microflows to click on elements, fill them with text, or select a value. 
The Connector can be used to test *any* webapplication, not just Mendix Apps. 
Locator and Action microflows in the Connector can be defined and executed from MTA.

### Starter Kit

The Starter Kit is meant specifically to define and run frontend tests for Mendix apps. This starter kit contains
- Reusable Locator and Action microflows to test standard Mendix Widgets;
- An example Mendix Project with an example testscript;
- A Page showing Results from executed tests.

A few notes about the Starter Kit:
- The Starter Kit assumes that the default texts for elements is used as defined in a US-English Mendix project. Other languages are not (yet) supported.
- [React-enabled projects](https://docs.mendix.com/refguide/mendix-client/react/) can be tested by setting the Constant IsUsingReactClient to True.
- Although more Widgets will be added as supported in the Starter Kit, any changes made in the future can break Locating a Widget correctly.

#### Structure

`_Private`
This folder contains generic Locator microflows that are used internally by the Starter Kit to uniquely identify and locate a Widget on a Mendix Page. These microflows should not be called directly. Specific Locator microflows must be created for each Mendix Page, bespoke to your Mendix App. For now, use the [Example App](#example-app) to build Page-specific Locator microflows. In the future, Menditect will be able to generate these microflows based on the Page structure.

`_Use_Me / TestResults`
This folder contains a Page that shows stored files (Screenshots, Snapshots and Trace Files) after executing a test where Tracing was enabled. For now, these files are stored in the Mendix App where the Connector module is imported. In the future, Test Results will be stored in MTA.

`_Use_Me / WidgetActions`
This folder contains Action microflows for Mendix Widgets. 

## Get started

It is not necessary to import the modules in the same Mendix App as the one under test. However for this example, this is assumed to be the case.

- Start by importing the Connector. This module **requires the playwright driver bundle** jar file in your userlib directory. 
See the documentation in the Mendix Marketplace on how to download this jar file.
- Download the Starter Kit module to start testing the most common Mendix Widgets.
- Add both the Module Roles to the project's User Roles.
- Add the TestResultFiles page to the Navigation for the User Role that will be evaluating executed frontend Tests.
- Optionally add the Overview page to the Navigation if you plan to use the examples in the Starter Kit as inspiration to start building your own frontend test. This is **recommended** for first-time users.


## Test structure

Each frontend test has the same basic structure:
- Setup
- Locators and Actions
- Teardown

### Setup (local testing)

These microflows are called in order to setup a locally executed frontend test:

| Microflow             | Explanation                                                                                                                                                     |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start_Playwright_Test | Initiates a new frontend Test with the given name.                                                                                                              |
| Create_Browser        | Creates a browser of the specified type. To run the test in background, set Headless to True. SlowMo sets the waiting time in milliseconds between each Action. |
| Create_BrowserContext | Used to define Browser attributes. Create and associate a ViewportSize object to set the Browser window Width and Height in pixels.                             |
| Create_Page           | Creates a new Page in the Browser.                                                                                                                              |
| Start_Tracing         | *Optionally*: enables the use of Screenshots, Snapshots and Tracefiles for a test.                                                                              |
| Navigate              | Use to navigate to the homepage of your App.                                                                                                                    |
| Mx_Login              | *Optionally*: use to login to your App with specified Username and Password. Works on a non-customized Mendix Login Page.                                       |

### Setup (using Browserstack)

To use Browserstack instead of running Playwright on a local machine, replace the call to the "Create_Browser" microflow, with a call to the "Connect_BrowserStack" microflow.

Currently, using Browserstack is only supported if the Mendix App is running in the cloud. [Local Testing](https://www.browserstack.com/docs/local-testing) will be supported in a future release of the Connector.

### Locators and Actions

#### Generic App testing

To perform an action on an element in the page, the basic structure is to use two microflows; a Locator microflow and an Action microflow. Sometimes calling a second Locator microflow is needed.

In the Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../Teststep#properties) that calls the Locator Action microflow.

Are you missing any Locators? [Let us know!](mailto:support@menditect.com)

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).

#### Mendix App testing

In order to test Mendix Widgets, use the microflows from the Starter Kit. The proposed structure is to assign each Mendix Page their own subfolder. That folder should contain an Enumeration, containing the names of the Widgets inside that Page, and a Microflow, having this structure: 
- input parameters to identify the Widget to Locate. 
- a String variable representing the Module name.
- a String variable representing the Page class.
- a microflow call to "Locate_MxWidget" in the Starter Kit `_Private` folder.

See the [Example App](#example-app) for some examples. The structure used there can be duplicated for any Mendix Page.

A Mendix Page is not the same scope as a page in the Browser, but Mendix Pages can be on top of each other (Popups over Responsive pages). Therefore, it is **recommended** to always use the Locator microflows inside the "Get_Locator_By_Locator" folder, to narrow the scope to only one Mendix Page. In order to identify a Mendix Page, it is necessary to fill in the [Page class on the Mendix Page in Studio Pro](https://docs.mendix.com/refguide/common-widget-properties/#class). Recommended is using the same Class name as the Page name. 

The "Locate_MxWidget" microflow then defines the scope of the Mendix Page, and then calls the "Locate_MxWidget_in_Locator" microflow, strategy is determined to locate the Widget depending on the type.

Actions can be performed on a Widget by using microflows from the "WidgetActions" folder. The "Generic" subfolder contains Actions that don't require a Locator. 
The "Specific" subfolder contains Actions that can be performed on the respective Mendix Widget, and take a Locator as an input parameter. 

### Teardown

These microflows are called at the end of a Playwright test:

| Microflow            | Explanation                                               |
| :------------------- | :-------------------------------------------------------- |
| Mx_Logout            | *Optionally*: locates the Logout button and clicks on it. |
| Stop_Tracing         | *Optionally*: saves the recorded trace files.             |
| Stop_Playwright_Test | Ends the Playwright test.                                 |
| Teardown_Playwright  | Removes the Playwright engine from memory.                |

## MTA Implementation

It is **recommended** to use [Teststeps](../../../Teststep) in MTA to call abovementioned microflows.

Furthermore, the [Test Case](../../../test-case) containing these Teststeps should be using MxAdmin as an Execution user, with the Apply-security setting Off. 

For now, logging into the Mendix App needs to occur using the Mx_Login microflow. In the future, the session that is created by MTA, will also be used during the execution of the frontend test.

## Testing Standard Widgets

The Example App was created to show how to Locate most of the standard Mendix Widgets and execute Actions like Click, Fill Text or Select Option. 
It contains an Overview page and two popup pages that combined contain these commonly used Widgets.
The "ACT_Playwright_Full_Test" microflow is an example microflow that tests these Pages.
This microflow can be executed from MTA if the App is running locally from Studio Pro. 
Note that the submicroflow actions inside, can be built as Teststeps in MTA.

## Testing Custom Widgets and Snippets

### Custom Widgets

In order to test custom made Widgets from the Marketplace, it is advisable to use the Starter Kit only as inspiration, but to replace it by your own Locator and Action Module that uses the Connector to execute the corresponding Playwright commands. 

Mendix will add the "mx-name-`widgetName`" class to any Widget that you add to a Page or Snippet, so it is always possible to create a Locator for the surrounding HTML element. However in most cases you will want to add another Locator inside that Locator, so define Actions for child elements.

### Snippets

Important note: Snippets are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. In order to define Locators for Widgets inside a Snippet, is is always required to add a surrounding Container (rendered as a DIV element) to locate it.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 December 2024