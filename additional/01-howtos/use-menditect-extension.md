# Use Menditect Extension in Studio Pro

:::caution
The Menditect Call Hierarchy extension is currently in BETA.
:::

## Howto

This document describes how to import and configure the [Menditect Call Hierarchy extension <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/xxx), so you can use it in Mendix Studio Pro.

The Menditect Call Hierarchy extension can be used on a microflow in Mendix Studio Pro, to recusively view all submicroflows that are called from that microflow in a tree structure.

The Menditect Call Hierarchy extension can also be used to [generate a microflow test](generate-test#test-a-microflow), and view [test cases](../../test-case) where that microflow is executed.


## Installation

To install the Menditect Call Hierarchy extension:
- Download [Mendix Studio Pro 10.6.3 <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/studiopro/10.6.3) or higher;
- Create or open a Mendix App in this version of Studio Pro;
- Download the [Menditect Call Hierarchy extension <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/xxx) from the Mendix marketplace;
- Import it in the Mendix App.

## Microflow Call Hierarchy

To view the Microflow Call Hierarchy:
- Make sure the App Explorer tab is visible in Studio Pro.
- Right-click on any Microflow in the App Explorer.
- Select the "Menditect" sub menu.
- Click on "Microflow Call Hierarchy".

Mendix will open the Microflow Call Hierarchy tab and show all submicroflows called from the selected microflow, recursively.

Double-click on any of the microflows in this tab, to open it in Studio Pro.


## MTA integration

### Prerequisites

In order to use the MTA integration features of the Extension, some information needs to be entered in Studio Pro.

- Click on <i class="fal fa-cog"></i> in the Microflow Call Hierarchy tab.
- Enter the MTA Endpoint. For example: `https://mta-menditect-9fo2p.mendixcloud.com`
- Enter the Username and Password for an existing Account in MTA, having at least `Tester` and `ApiUser` [User Roles](manage-accounts#mta-user-roles). 
- Select which [Test configuration](../../test-configuration) to use, to store and view [Test Cases](../../test-case).
- Save the settings.

### Create Test

To create a new Test Case, that will execute a specific microflow from the Mendix model:
- [Open the Microflow Call Hierarchy tab](#microflow-call-hierarchy) for a specific microflow
- Click on the <i class="fal fa-circle"></i> icon, on the left of the microflow name, or right-click on the microflow name and select "Generate Test"
- Select which [Test suite](../../test-suite) to use, to store the new [Test Case](../../test-case).

MTA will create a new Test Case for the microflow, and Studio Pro will open the MTA page with the new Test Case.

:::note
Sometimes you may see the login page at this point. Restarting Studio Pro will make the Extension login automatically.
:::

### View Test

To view an existing Test Case that executes a specific microflow from the Mendix model:
- [Open the Microflow Call Hierarchy tab](#microflow-call-hierarchy)  for a specific microflow
- Click on the <font color="#5BDB5B"> <i class="fas fa-circle"></i> </font> icon, on the left of the microflow name, or right-click on the microflow name and select "View Test"
- Select the [Test Case](../../test-case) that contains the [microflow teststep](../../Teststep/microflow) that calls the microflow.

Studio Pro will open the MTA page with the new Test Case.

## Known limitations

- Viewing a very large microflow call hierarchy will crash the extension webviewer tab in Studio Pro.
- Excluded microflows are not viewed differently than included microflows.
- If the project contains errors, the call hierarchy is not reliable.
- Using SSO for the credentials that are used to login to MTA is not supported.
- The credentials that are used to login to MTA are stored in the Windows Account settings. This is done to prevent having to manually login everytime the extension is used.
- A large number of user sessions can appear in MTA when using the extension intensively. 

## Feedback?

**Click on <i class="fas fa-pen-field"></i> to [leave a review <i class="fas fa-external-link"></i>](https://marketplace.mendix.com/link/component/xxx) of the Microflow Call Hierarchy extension on the Mendix Marketplace!**

Last updated 3 April 2024