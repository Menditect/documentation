---
sidebar_position: 2
---

# Use Microflow Call Hierarchy Extension in Studio Pro

**Watch installation video!**
<iframe src="https://player.vimeo.com/video/932891691" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>



## Howto

This document describes how to import and configure the [Microflow Call Hierarchy extension <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/225211), so you can use it in Mendix Studio Pro.

The Microflow Call Hierarchy extension can be used on a microflow in Mendix Studio Pro, to hierarchically view all submicroflows that are called from that microflow in a tree structure.

The Microflow Call Hierarchy extension can also be used to [generate a microflow test](../design-tests/generate-test#from-mendix-studio-pro) in Menditect Test Automation (MTA), and view [test cases](../../../mta/test-case) where that microflow is executed.


## Installation

To use the Microflow Call Hierarchy extension, you must have installed [Mendix Studio Pro 10.6.3 <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/studiopro/10.6.3) or higher.

To install the Microflow Call Hierarchy extension:
- Create or open a Mendix App in Studio Pro 10.6.3 or higher;
- Download the [Microflow Call Hierarchy extension <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/225211) from the Mendix marketplace;
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

### Call hierarchy limitations

- The order of microflow calls as shown in the hierarchy view, is based on how they were added in the microflow, not how they will be called when the microflow is executed.
- Rules are not shown in the hierarchy view.
- Viewing a very large microflow call hierarchy will crash the extension webviewer tab in Studio Pro.
- Switching Apps in Studio Pro may crash the extension in Studio Pro.
- Excluded microflows are not viewed differently than included microflows.
- If the project contains errors, the call hierarchy is not reliable.
- It is not possible to view the call hierarchy of microflows in the System module.
- Using the extension in Studio Pro under MacOS is currently not supported.

### MTA integration limitations

- If the Test Configuration that was configured for saving created Test Cases is deleted, the extension will show "An unexpected error has occured".
- Using SSO for the credentials that are used to login to MTA is not supported.
- Incorrect configuration of the constants in the Deeplink module may lead to errors in the web viewer.
- Clicking the `Open in MTA to Edit` button on the "Test runs" page currently results in an empty browser tab.
- Using mouse back & forward buttons to navigate back and forward in the webviewer, results in unexpected behaviour of the extension.
- A large number of user sessions can appear in MTA when using the extension intensively. 


## Feedback?

**Click on <i class="fas fa-pen-field"></i> to [leave a review <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/225211) of the Microflow Call Hierarchy extension on the Mendix Marketplace!**

Last updated 3 April 2024
