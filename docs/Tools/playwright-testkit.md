---
sidebar_position: 3
---

# MTA Mendix Frontend Testkit

## Purpose

The Mendix Frontend Testkit is meant specifically to define and run Frontend tests for **Mendix Apps**. 

It contains microflows allowing an MTA Tester to [Locate](../mta/frontend-glossary#locator) a [Widget](../mta/frontend-glossary#widget) on a [Mendix Page](../mta/mendix-page) and perform an [Action](../mta/frontend-glossary#action) on it.

## Installation instructions

Download the Mendix Frontend Testkit from the Mendix Marketplace:

https://marketplace.mendix.com/link/component/206637

## Update instructions

Replace the existing module when importing a new version. 

## Dependencies

These modules are **required** to be imported in the Mendix App under test:
- [MTA Plugin](mta-plugin)
- [MTA Playwright Connector](playwright-connector)

Make sure to convert widgets to React widgets if [React](https://docs.mendix.com/refguide/mendix-client/react/) is enabled for the Mendix project.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025