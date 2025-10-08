# Handle Frontend User Sessions

## Purpose 

This document describes how to handle a user session in the Browser, in respect to the Test Case session that was created by MTA.

## Combining Test Case Sessions and Playwright Sessions

The [Test Case](../../../mta/test-case) containing the Teststeps should be using an Account with dedicated UserRoles in the Connector & UI Test Kit Playwright modules (for example, `UiTestUser`) as an Execution user, with the Apply-security Enabled. Although MTA creates it's own user session to perform actions in a Test Case, it is still necessary to login to the App under test when using MTA. 

The upside of the current implementation is that sessions created by Playwright can be carried onto subsequent Test Cases. Just point to the `MenditectPlaywrightConnector.Page` object that was created in a Test Case, whenever calling a Locator microflow, and the same browser tab will be used to run the test. 

When running Playwright on your local machine from Studio Pro, the free license will only allow for so many user sessions. Therefore, a few tips:
- prevent using Anonymous sessions;
- always logout at the end when creating a Playwright session;
- prevent also manually logging in from your own browser;
- restart the App if needed.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025