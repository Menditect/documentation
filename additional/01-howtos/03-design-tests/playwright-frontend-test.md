---
sidebar_class_name: hidden
---

# Test using Playwright in Mendix

This section describes how to create a frontend test using Playwright, in Mendix. 
Playwright is a library with which you can locate elements on a web page and execute actions on these elements.
See https://playwright.dev/java/ for the relevant Playwright documentation.

Menditect has created 2 modules that enable MTA customers to build frontend tests using Playwright.
- The Menditect Playwright Connector module: https://marketplace.mendix.com/link/component/235323
- The Menditect Playwright Starter Kit module: https://marketplace.mendix.com/link/component/235327

## Connector Module

The Connector Module enables the use of Playwright to define and run a frontend test from any Mendix App. 
The Playwright Locators and Actions defined in the Connector Module can then be used to test *any* webapplication, not just Mendix Apps. 
Locator and Action microflows in the Connector Module can be defined and executed from MTA.

## Starter Kit

The Starter Kit is meant for using the Connector module for Mendix apps. This starter kit contains
- A reusable Locator and Action microflows to test standard Mendix Widgets
- An example Mendix Project with an example Playwright testscript
- A Page showing Test Results with Screenshots, Trace files & Aria Snapshots

A few notes about the Starter Kit:
- The Starter Kit assumes that the default texts for elements is used as defined in a US-English Mendix project. Other languages are not (yet) supported.
- [React-enabled projects](https://docs.mendix.com/refguide/mendix-client/react/) can be tested by setting the Constant IsUsingReactClient to True.
- Although more Widgets will be added to the Starter Kit to test with Playwright, any changes made in the future can break Locating a Widget correctly.

## Get started

It is not necessary to import the modules in the same Mendix App as the one under test. However for this example, this is assumed to be the case.

- Start by importing the Connector module. This module requires the playwright driver bundle jar file in your userlib directory. 
See the documentation in the Mendix Marketplace on how to download this jar file.
- Download the Starter Kit module to start testing the most common Mendix Widgets in Playwright.
- Add both the Module Roles to the project's User Roles.
- Add the MenditectPlaywrightStarterKit.TestResultFiles page to the Navigation for the User Role that will be evaluating executed Playwright Tests.
- Optionally add the MenditectPlaywrightStarterKit.Overview page to the Navigation if you want to see Playwright in action on some example pages. This is **recommended** for first-time users.

## Example App

The Example App was created to show how to Locate most of the standard Mendix Widgets and execute Actions like Click, Fill Text or Select Option. 
It contains an Overview page and two popup pages that combined contain these commonly used Widgets.
The "ACT_Playwright_Full_Test" microflow is an example microflow that tests these Pages with Playwright using the Connector. 
This microflow can be executed from MTA if the App is running locally from Studio Pro. 

Instead of using a single microflow calling the Locators and Actions, it is **recommended** to use [Teststeps](../../../Teststep) in MTA, instead. 

## Playwright Test Structure

As can be seen in the example "ACT_Playwright_Full_Test" microflow in the Starter Kit, each Playwright Test has the same basic structure:
- Setup
- Locators and Actions
- Teardown

### Setup (local testing)

These microflows are called in order to setup a locally executed Playwright test:

| Microflow             | Explanation                                                                                                                                                     |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start_Playwright_Test | Initiates a new Playwright Test with the given name.                                                                                                            |
| Create_Browser        | Creates a browser of the specified type. To run the test in background, set Headless to True. SlowMo sets the waiting time in milliseconds between each Action. |
| Create_BrowserContext | Used to define Browser attributes. Create and associate a ViewportSize object to set the Browser window Width and Height in pixels.                             |
| Create_Page           | Creates a new Page in the Browser.                                                                                                                              |
| Start_Tracing         | *Optionally*: enables the use of Screenshots, Snapshots and Tracefiles for a test.                                                                              |
| Navigate              | Use to navigate to the homepage of your App.                                                                                                                    |
| Mx_Login              | *Optionally*: use to login to your App with specified Username and Password. Works on a non-customized Mendix Login Page.                                       |

### Setup (using Browserstack)

To use Browserstack instead of running Playwright on a local machine, replace the call to the "Create_Browser" microflow, with a call to the "Connect_BrowserStack" microflow.

### Locators and Actions

#### Generic App testing

For each element on the browser page to perform an action on, the basic Playwright structure is to use at least two microflows; a Locator microflow and an Action microflow.

Chech out the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).

In the Connector Module, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](https://documentation.menditect.com/Teststep#properties) that calls the Locator Action microflow.

#### Mendix App testing

In order to test Mendix Widgets, use the microflows from the Starter Kit. In the Example_App folder, each Page has their own subfolder. A Page is accompanied by one Enumeration, that contains the names of the Widgets inside that Page. Note that the names have been changed to better reflect what the Widget represents. Also, a Page is accompanied by one Microflow, having this structure: 
- input parameters to identify the Widget to Locate. 
- a String variable representing the Module name.
- a String variable representing the Page class.
- a microflow call to "Locate_MxWidget".

The above structure can be duplicated for any Mendix Page.

A Mendix Page is not the same scope as a page in the Browser, but Mendix Pages can be on top of each other (Popups over Responsive pages). Therefore, it is **recommended** to always use the Locator microflows inside the "Get_Locator_By_Locator" folder, to narrow the scope to only one Mendix Page. In order to identify a Mendix Page, it is necessary to fill in the Page class on the Mendix Page in Studio Pro. Recommended is using the same Class name as the Page name.

The "Locate_MxWidget" microflow then defines the scope of the Mendix Page, and then calls the "Locate_MxWidget_in_Locator" microflow, where a different strategy is used to locate the Widget depending on the type.

Actions can be found in the "WidgetActions" folder. The "Generic" subfolder contains Actions that don't require a Locator. The "Specific" subfolder contains Actions that can be performed on the respective Mendix Widget, and take a Locator as an input parameter. 


### Teardown

These microflows are called at the end of a Playwright test:

| Microflow            | Explanation                                               |
| :------------------- | :-------------------------------------------------------- |
| Mx_Logout            | *Optionally*: locates the Logout button and clicks on it. |
| Stop_Tracing         | *Optionally*: saves the recorded trace files.             |
| Stop_Playwright_Test | Ends the Playwright test.                                 |
| Teardown_Playwright  | Removes the Playwright engine from memory.                |



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 20 December 2024