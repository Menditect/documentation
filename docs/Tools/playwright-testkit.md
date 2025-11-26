---
sidebar_position: 2
---
# Playwright for Mendix Test Kit

## Purpose

The Playwright Test Kit is meant specifically to define and run Frontend tests for **Mendix Apps**. 

It contains microflows to test Mendix Platform Supported Widgets.

## Supported Versions

The currently supported version is 4.6.0.

## Installation instructions

Download the Playwright for Mendix Test Kit from the Mendix Marketplace:

https://marketplace.mendix.com/link/component/235327

## Update instructions

Replace the existing module when importing a new version. 

## Dependencies

These modules are **required** to be imported in the Mendix App under test:
- [MTA Plugin](mta-plugin)
- [Playwright Connector](playwright-connector)
- Playwright for Mendix Test Kit

Make sure to convert widgets to React widgets if [React](https://docs.mendix.com/refguide/mendix-client/react/) is enabled for the Mendix project.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025