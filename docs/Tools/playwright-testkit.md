---
sidebar_position: 3
---

# MTA Mendix Frontend Testkit

## Purpose

The MTA Mendix Frontend Testkit is a Mendix Add-on module built and maintained by Menditect, as a translator from generic Playwright Testing to specific Mendix App [Frontend testing](../mta/frontend-test). 

It extends the functionality of Microflows from the [Playwright Connector](playwright-connector) and allows a Tester to [Locate](../mta/frontend-glossary#locator) a [Widget](../mta/frontend-glossary#widget) on a [Mendix Page](../mta/mendix-page) and perform an [Action](../mta/frontend-glossary#action) on it.

## Properties

### Domain model

### Microflows

## Usage

At least all Mendix Platform supported Widgets are supported. To see an up-to-date list of Mendix Platform supported Widgets: https://marketplace.mendix.com/link/supporttype/Platform

For a comprehensive list of Widgets that can be Located, checkout the `Widget_Locators` folder in the module. Consult the How-to pages to learn how to build a custom MTA Mendix Frontend Testkit, if the Widget is not in this list.

Locating a Widget is made as simple as possible by Menditect: use the microflows and entities from the MTA Mendix Frontend Testkit. It is possible to create the Teststeps manually, but it is easier to use the MTA build-in [feature](../mta/frontend-test#generate-teststeps) that generates the Teststeps for you.

:::info auto visibility check
By default, when a Locator microflow is executed, MTA will perform an `IsVisible` Assertion. If the element is not visible on the Page, the test will fail. This allows for early detection if Locator might fail. To disable this, use the `IsVisibleOptions` parameter of the Locator microflow.
:::

### 1. Determine Widget Name

The first step is to determine the name of the Widget, for example `actionButton1`, on the Page. 

For **Mendix developers**, the easiest way is to open the Page in Studio Pro and find the name by opening the Properties: https://docs.mendix.com/refguide/common-widget-properties/#name

For **Testers** who do not use Studio Pro, it is recommended to use one of the [MTA Widget Finder](mta-widget-finder) created by Menditect to extract the Widget name from the `mx-name-widgetName123` in the CSS.

### 2. Determine parent element

The parent is the encompassing element that the Widget from step 1 is in. In order to Locate any Widget using the Playwright Testkit, a parent element needs to be passed as a microflow parameter. In the Playwright Testkit, every element that can be a potential parent element is a specialization of the `MxParentWidgetLocator` entity. 

- Example: microflow `Locate_MxWidget_Button`, uses `MxParentWidgetLocator` as parent element parameter and `WidgetName` as the Widget determining Locator parameter.

:::note Situation 1: Parent is the Mendix Page

In most cases, the Mendix Page can be used, meaning that the `MxPageLocator` object from the `Locate_MxPage` microflow can be passed. 

Note that even though the encompassing element on the Mendix Page is not the Page itself, it is still possible to use the `MxPageLocator` object, if the encompassing element does not influence the *multiplicity* or *visibility* of the Widget itself. This is the case for [Containers](https://docs.mendix.com/refguide/container/), [Layout Grids](https://docs.mendix.com/refguide/layout-grid/), [Dataviews](https://docs.mendix.com/refguide/data-view/) etc. 

You will not find these Widgets as specializations of the `MxParentWidgetLocator` entity in the Playwright Testkit's domain model. 
:::

:::note Situation 2: Parent is another Widget

If the encompassing element is a [Datagrid](https://docs.mendix.com/refguide/data-grid/), [Listview](https://docs.mendix.com/refguide/list-view/), [Tabcontainer](https://docs.mendix.com/refguide/tab-container/), [Template Grid](https://docs.mendix.com/refguide/template-grid/), etc., these will influence either the *multiplicity* or *visibility* of the Widget, and you have to add more Locators, to be more specific.

You **will** find these Widgets as specializations of the `MxParentWidgetLocator` entity in the Playwright Testkit's domain model. 

In this situation, you have to add at least two more Teststeps:
1. Find the Locator for the encompassing element, using [step 1](#1-determine-widget-name).
2. Perform a **Filter** action; filter by text, by row number, etc.
:::

**Example:**

| Parent Widget | 1. Widget Locator microflow    | 2. Widget Filter microflow                                                  |
| ------------- | ------------------------------ | --------------------------------------------------------------------------- |
| Datagrid      | `Locate_MxWidget_DataGrid`     | `Filter_DataGrid_Rows_by_Text`                                              |
| Listview      | `Locate_MxWidget_ListView`     | `Filter_ListView_Items_by_Text`                                             |
| Tabcontainer  | `Locate_MxWidget_TabContainer` | `Filter_TabContainer_Tabs_by_Text` or `Nth_TabContainer_Tab`                |
| Template Grid | `Locate_MxWidget_TemplateGrid` | `Filter_TemplateGrid_Items_by_Text` or `Filter_TemplateGrid_Items_by_Index` |

After these "parent" Locator and optional Filter Teststeps are added, it is now possible to add the Locator Teststep for the Widget itself.


:::info snippets
Snippets are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. In order to define Locators for Widgets inside a Snippet, add a surrounding Container rendered as a DIV element, with a representable name, to locate it.
:::

## Installation instructions

- Download the Mendix Frontend Testkit from the Mendix Marketplace: https://marketplace.mendix.com/link/component/206637
- To enable Mendix App Frontend Testing, you must [Enable Loading Pages and Widgets](../mta/application#enable-loading-pages-and-widgets) on the Mendix App.
- To test a [Mendix Page](../mta/mendix-page), you must fill in the [Page Class](../mta/mendix-page).


## Update instructions

Replace the existing module when importing a new version. 

## Dependencies

These modules are **required** to be imported in the Mendix App under test:
- [MTA Plugin](mta-plugin)
- [MTA Playwright Connector](playwright-connector)

Make sure to convert widgets to React widgets if [React](https://docs.mendix.com/refguide/mendix-client/react/) is enabled for the Mendix project.


## Feedback?
Are you missing a Mendix Widget? [Let us know by submitting a Feature Request!](https://share.hsforms.com/15C364bwdTfCyQypkV6lWrA3twri)

Last updated: 17 September 2025