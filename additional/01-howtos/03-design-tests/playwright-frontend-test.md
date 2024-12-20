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

## Get started

It is not necessary to import the modules in the same Mendix App as the one under test. However for this example, this is assumed to be the case.

- Start by importing the Connector module. This module requires the playwright driver bundle jar file in your userlib directory. 
See the documentation in the Mendix Marketplace on how to download this jar file.
- Download the Starter Kit module to start testing the most common Mendix Widgets in Playwright.
- Add both the Module Roles to the project's User Roles.
- Add the MenditectPlaywrightStarterKit.TestResultFiles page to the Navigation for the User Role that will be evaluating executed Playwright Tests.
- Optionally add the MenditectPlaywrightStarterKit.Overview page to the Navigation if you want to see Playwright in action on some example pages. This is recommended for first-time users.

## Example App

The Example App was created to show how to Locate most of the standard Mendix Widgets and execute Actions like Click, Fill Text or Select Option. 
It contains an Overview page and two popup pages that combined contain these commonly used Widgets.
The "ACT_Playwright_Full_Test" microflow is an example microflow that tests these Pages with Playwright using the Connector. 
This microflow can be executed from MTA if the App is running locally from Studio Pro. 

Instead of using these microflow actions, it is also possible to use [Teststeps](../../../Teststep) in MTA. 

## Playwright Test Structure

As can be seen in the example "ACT_Playwright_Full_Test" microflow, each Playwright Test has the same basic structure:
- Test Setup
- Locators and Actions
- Test Teardown

### Test Setup (local testing)

| Microflow             | Explanation                                                                                                                                                     |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start_Playwright_Test | Initiates a new Playwright Test with the given name.                                                                                                            |
| Create_Browser        | Creates a browser of the specified type. To run the test in background, set Headless to True. SlowMo sets the waiting time in milliseconds between each Action. |
| Create_BrowserContext | Used for local testing. Create and associate a ViewportSize object to set the Browser window Width and Height in pixels.                                        |
| Create_Page           | Creates a new Page in the Browser.                                                                                                                              |
| Start_Tracing         | Optionally: enables the use of Screenshots, Snapshots and Tracefiles for a test.                                                                                |
| Navigate              | Use to navigate to the homepage of your App.                                                                                                                    |
| Mx_Login              | Optionally: use to login to your App with specified Username and Password. Works on a non-customized Mendix Login Page.                                         |

### Locators and Actions

For each Mendix Widget to perform an action on, the structure is to use at least two microflows; a Locator microflow and an Action microflow.

The Locator microflows (...)

### Test Teardown

| Microflow            | Explanation                                             |
| :------------------- | :------------------------------------------------------ |
| Mx_Logout            | Optionally: locates the Logout button and clicks on it. |
| Stop_Tracing         | Optionally: saves the recorded trace files.             |
| Stop_Playwright_Test | Ends the Playwright test.                               |
| Teardown_Playwright  | Removes the Playwright engine from memory.              |
