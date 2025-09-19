---
sidebar_position: 4
---

# Connect Playwright to MTA

This document describes how to connect to a running Playwright server from MTA, and start a Browser where a Frontend Test can be executed.

Make sure to first [host a Playwright Browser](../host-and-deploy/host-playwright-browsers).


## Setup

- Make sure that the [MTA Plugin](../../../tools/mta-plugin) module is [imported and configured](import-plugin).
- Start by importing the [Playwright Connector](../../../tools/playwright-connector).
- Then import the [Frontend Test Kit](../../../tools/playwright-testkit) to start testing the most common Mendix Widgets. This module **requires the Apache Commons Lang** jar file in your userlib directory. Download the jar file here: https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar
- Add both the Module Roles to the project's User Role(s) that will be used to execute Frontend Tests.
- Download and import [this Snippet](../images/SNIP_Playwright_Files.mpk) into your Mendix App, add it to a Page that is accessible for Users that will be evaluating executed frontend Tests.


## Next step for Frontend Testing

[Prepare Frontend Test](../configure-mta/prepare-frontend-test)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2025
