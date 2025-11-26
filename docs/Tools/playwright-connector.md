---
sidebar_position: 2
---

# Playwright Connector

## Purpose

The Playwright Connector makes it possible to define and run a **frontend test** in MTA, from any Mendix App. It enables the App to connect to a Playwright Browser, based on specified connection settings, and execute the test. The module is essentially a wrapper around Playwright [Locators](https://playwright.dev/java/docs/locators), [Assertions](https://playwright.dev/java/docs/test-assertions) and [Actions](https://playwright.dev/java/docs/input). These are executed as [Java Actions](https://docs.mendix.com/refguide/java-actions/) inside a Microflow, which in turn can be executed by MTA. Because these actions are generic, the module can be used to frontend test *any* webapplication, not just Mendix Apps.


## Supported Versions

The currently supported version is 4.6.0.

## Installation instructions

Download the Playwright Connector module from the Mendix Marketplace:

https://marketplace.mendix.com/link/component/235323

## Update instructions

Replace the existing module when importing a new version. When running the Playwright Browser from within your Mendix project, make sure to check which Playwright version is supported by the Playwright Connector.

Make sure to delete any old JAR files from the userlib subfolder in your project directory. 

## Dependencies

These modules are **required** to be imported in the Mendix App under test:
- [MTA Plugin](mta-plugin)
- Playwright Connector
- [Playwright for Mendix Test Kit](playwright-testkit)

Make sure to convert widgets to React widgets if [React](https://docs.mendix.com/refguide/mendix-client/react/) is enabled for the Mendix project.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025