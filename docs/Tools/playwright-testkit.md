---
sidebar_position: 3
---

# MTA Mendix Frontend Testkit

## Purpose

The MTA Mendix Frontend Testkit is a Mendix Add-on module built and maintained by Menditect, as a translator from generic Playwright Testing to specific Mendix App [Frontend testing](../mta/frontend-test). 

It extends the functionality of Microflows from the [Playwright Connector](playwright-connector) and allows a Tester to [Locate](../mta/frontend-glossary#locator) a [Widget](../mta/frontend-glossary#widget) on a [Mendix Page](../mta/mendix-page) and perform an [Action](../mta/frontend-glossary#action) on it.

## Properties

### Domain model

Some relevant entities are explained here. Note that specific Entity and Attribute documentation is also shown in MTA.
- `MxLocator`, this contains the definition of the [Playwright Locator](../mta/frontend-glossary#locator) for the Mendix Widget. The `MxLocator` is always 1 on 1 associated with a `Locator` object from the [Playwright Connector](playwright-connector) module. MxLocator Objects are persisted, for the duration of the Test, and deleted when stopping the test. This allows for a MxLocator to be used in subsequent Test Cases. The `MxLocator` is the generalization for all Mendix Widget specific Locator entities in the domain model.
- `MxParentWidgetLocator`, specializes from `MxLocator`. The specialization means that the respective Mendix Widget can behave as a parent, thus contain other Mendix Widgets, and the context is always a single Object. The `MxParentWidgetLocator` is the generalization for specific parent Locators, for example `MxContainerLocator` and `MxListViewItemLocator`.
- `MxParentMultiWidgetInstanceLocator`, specializes from `MxLocator`. The specialization means that the respective Mendix Widget can behave as a parent, thus contain other Mendix Widgets, and the context is always a List of Objects. The `MxParentMultiWidgetInstanceLocator` is the generalization for specific list-parent Locators, for example `MxDataGrid2Locator`.


### Microflows

Some relevant microflows are explained here. Note that specific Microflow and Microflow parameter documentation is also shown in MTA.

Note that some Microflows contain an `Options` parameter. This parameter can be left `Empty` when using the Microflow in MTA, but it allows for setting specific options for that microflow.

- `Start_MxFrontend_Test_With_Login` and `Start_MxFrontend_Test_Without_Login`, these are used to start a Mendix specific Frontend test, instead of the `Create_BrowserContext` and `Create_Page` microflows from the [Playwright Connector](playwright-connector) module.
- `Locate_MxPage`, this is used to Locate the [Mendix Page](../mta/mendix-page) on the [Playwright Page](../mta/frontend-glossary#playwright-page). On showing the Homepage, and whenever a new Mendix Page is shown, this microflow has to be called first, in order to Locate Widgets on the respective Mendix Page. 
- `Stop_MxFrontendTest` is used to stop a Mendix specific Frontend test, instead of the `Delete_...` microflows from the [Playwright Connector](playwright-connector) module.

- `Widget_Locators`, this folder contains [Locator](../mta/frontend-glossary#locator) microflows specifically for Mendix Widgets.
- `Widget_Element_Operators`, this folder contains [Filter](../mta/frontend-glossary#filter) microflows specifically for Mendix Widgets.
- `Widget_Asserts`, this folder contains [Assertion](../mta/frontend-glossary#assertion) microflows specifically for Mendix Widgets.
- `Widget_Actions`, this folder contains [Action](../mta/frontend-glossary#action) microflows specifically for Mendix Widgets.

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