---
sidebar_position: 4
---

# Connect Playwright to MTA

## Purpose

This document describes how to connect to a running Playwright server from MTA, and start a Browser where a Frontend Test can be executed.

Make sure to first [host a Playwright Browser](../host-and-deploy/host-playwright-browsers).


## Modules to import

Download below modules from the Mendix marketplace to enable frontend testing.

**If you want access to these modules, please [contact support](mailto:support@menditect.com).**
- The Playwright Connector<br/>
- The Playwright Frontend Test Kit<br/>
- The [MTA Plugin](import-plugin) 

### Playwright Connector

The Playwright Connector makes it possible to define and run a frontend test from any Mendix App. It enables the App to connect to the Playwright server, based on specified connection settings, and execute the test. When executing a Frontend test, Playwright starts and hosts its own browser. This can be Chromium, Firefox or Webkit. In order to do this, Playwright needs to load required dependencies and, therefore, it needs the right permissions on the host server. In the image below, you can see how Playwright can be hosted on remote servers, either in the cloud or on a local server.

![Playwright Setup](../images/pw_setup.png)

The Playwright Connector includes Locator microflows to find elements on a webpage, and Action microflows to click on elements, fill them with text, or select a value. Therefore it can be used to test *any* webapplication, not just Mendix Apps. Locator and Action microflows in the Playwright Connector can be defined and executed from MTA.

### Frontend Test Kit

The Frontend Test Kit is meant specifically to define and run Frontend tests for **Mendix Apps**. 

It contains Reusable Locator and Action microflows to test Mendix Platform Supported Widgets.

A few notes about the Frontend Test Kit:
- The Frontend Test Kit currently has the en-US and nl-NL languages built-in. 
- [React-enabled projects](https://docs.mendix.com/refguide/mendix-client/react/) can be tested by setting the Constant IsUsingReactClient to True.
- Although more Widgets may be added as supported in the Frontend Test Kit, any changes made in the future can break Locating a Widget correctly.


## Setup

- Start by importing the Playwright Connector. 
- Then import the Frontend Test Kit module to start testing the most common Mendix Widgets. This module **requires the Apache Commons Lang** jar file in your userlib directory. Download the jar file here: https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar
- Add both the Module Roles to the project's User Role(s) that will be used to execute Frontend Tests.
- Download and import [this Snippet](../images/SNIP_Playwright_Files.mpk) into your Mendix App, add it to a Page that is accessible for Users that will be evaluating executed frontend Tests.


## Next step for Frontend Testing

[Prepare Frontend Test](../configure-mta/prepare-frontend-test)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2025
