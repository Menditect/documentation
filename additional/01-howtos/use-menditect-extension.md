# Use Menditect Extension in Studio Pro

## Howto

This document describes how to import and configure the Menditect Call Hierarchy extension, so you can use it in Mendix Studio Pro.

The Menditect Call Hierarchy extension can be used on a microflow in Mendix Studio Pro, to hierarchically view all submicroflows that are called from that microflow in a tree structure.

## Installation

To use the Menditect Call Hierarchy extension, you must have installed [Mendix Studio Pro 10.6.3 <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/studiopro/10.6.3) or higher.

To install the Menditect Call Hierarchy extension:
- Create or open a Mendix App in Studio Pro 10.6.3 or higher;
- Download the Menditect Call Hierarchy extension from the Mendix marketplace;
- Import it in the Mendix App.

## Microflow Call Hierarchy

To view the Microflow Call Hierarchy:
- Make sure the App Explorer tab is visible in Studio Pro.
- Right-click on any Microflow in the App Explorer.
- Select the "Menditect" sub menu.
- Click on "Microflow Call Hierarchy".

Mendix will open the Microflow Call Hierarchy tab and show all submicroflows called from the selected microflow, hierarchically.

Double-click on any of the microflows in this tab, to open it in Studio Pro.


## Known limitations

- Rules are not shown in the hierarchy view.
- Viewing a very large microflow call hierarchy will crash the extension webviewer tab in Studio Pro.
- Switching Apps in Studio Pro may crash the extension in Studio Pro.
- Excluded microflows are not viewed differently than included microflows.
- If the project contains errors, the call hierarchy is not reliable.
- For Menditect software used by non-paying Menditect users the support level is “Low” by default (see Menditect [Service Level Agreement](../../legal/sla)).

## Feedback?

**Click on <i class="fas fa-pen-field"></i> in the extension, to leave a review in the Mendix Marketplace!**

Last updated 10 April 2024