# Find a Locator in Frontend Testing

## Purpose 

This document describes how to find a [Locator](../../../mta/frontend-glossary#locator) when designing a [Frontend Test](../../../mta/frontend-test). 

When designing a Frontend test, defining the right Locator(s) is not always simple. For background information about this challenge, consult the [Knowledge base docs](../../knowledge-base/frontend-testing-for-mendix-devs#locator-challenges).

Make sure to first [prepare your Mendix model](../configure-mta/prepare-mendix-project), and [host a Playwright Browser](../../installation/install-playwright-browser).


## Supported Widgets

To see an up-to-date list of Mendix Platform supported Widgets: https://marketplace.mendix.com/link/supporttype/Platform

Locating a Widget is made as simple as possible by Menditect: use the microflows and entities from the [MTA Mendix Frontend Testkit](../../../Tools/playwright-testkit). It is possible to create the Teststeps manually, but it is easier to use the MTA build-in [feature](../../../mta/frontend-test#generate-teststeps) that generates the Teststeps for you.

### 1. Determine Widget Name

The first step is to determine the name of the Widget, for example `actionButton1`, on the Page. 

For **Mendix developers**, the easiest way is to open the Page in Studio Pro and find the name by opening the Properties: https://docs.mendix.com/refguide/common-widget-properties/#name

For **Testers** who do not use Studio Pro, it is recommended to use one of the [MTA Widget Finder](../../../Tools/mta-widget-finder) created by Menditect to extract the Widget name from the `mx-name-widgetName123` in the CSS.

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


## Custom Widgets

Custom Widgets are [Widgets](../../../mta/frontend-glossary#widget) that are not supported by Menditect in the [MTA Mendix Frontend Testkit](../../../Tools/playwright-testkit). However, it is possible to still build a Frontend test with Locators for Custom Widgets. 

For all Widgets, Mendix will add the "mx-name-`widgetName`" property, so it is always possible to create a Locator for the surrounding [element](../../../mta/frontend-glossary#element). However in most cases you will need to append Locators to Locate a child element, for instance an <input\> element. See also the Mendix Docs: https://docs.mendix.com/refguide/common-widget-properties/#name

In order to use the MTA Frontend Teststep generate [feature](../../../mta/frontend-test#generate-teststeps), it is advisable to create your own Testkit module, as an 'extension' to the MTA Mendix Frontend Testkit. 

### Create Custom Frontend Testkit

This section describes how to Locate a fictitious Custom Widget called `MyWidget` and use the Microflows from the [MTA Playwright Connector](../../../Tools/playwright-connector) to add Filters, Assertions and Actions.

#### Add Locator

- Add a new Module in your Mendix App called `MenditectMxFrontendTestKitCustom`. 
  - A Module with this exact name will be scanned by MTA for Frontend test Microflows and Entities.
- Add a new persistable Entity called `MxMyWidgetLocator`. 
  - If the Widget can contain other Widgets (MyWidget behaves like, for example, a Container), select `MenditectMxFrontendTestKit.MxParentWidgetLocator` for the Generalization.
  - If the Widget can contain other Widgets in a list (MyWidget behaves like, for example, a ListView), select `MenditectMxFrontendTestKit.MxParentMultiWidgetInstanceLocator` for the Generalization.
  - Otherwise, select `MenditectMxFrontendTestKit.MxLocator` for the Generalization.
- Add a new Microflow with the exact name `Locate_MxWidget_MyWidget`
  - Add a `WidgetName` String parameter. This will be filled with the name of the Widget (without the `mx-name-` part). 
  - Add a `ParentWidget` parameter of type `MenditectMxFrontendTestKit.MxParentWidgetLocator`. This will set the Locator for the parent, either a [Mendix Page](../../../mta/mendix-page) or another Widget.
  - Optionally add an `Options` parameter of type `MenditectPlaywrightConnector.Locator_IsVisibleOptions`. This enables the Tester to choose, whether MTA will check if the Locator yields a Visible element on the Mendix Page before an Action is executed on the element.
  - From `ParentWidget`, retrieve the associated `MenditectPlaywrightConnector.Locator` object, name it `ParentWidgetLocator`. This is the Playwright Locator for the Parent.
  - Create an `MxMyDataGridLocator` object.
  - Use this object for the Return value of the Microflow.
  - Now, a `MenditectPlaywrightConnector.Locator` object needs to be associated to the `MxMyDataGridLocator` object.
    - Add a Microflow call to `MenditectPlaywrightConnector.Locator_Get_By_Selector`. 
    - Fill the `Locator` parameter with the `ParentWidgetLocator` variable.
    - Fill the `Selector` parameter with `'css=.mx-name-' + $WidgetName`.

## Locators in non-Mendix Apps

In the [MTA Playwright Connector](../../../Tools/playwright-connector), Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../mta/Teststep#delay-after-execution) that calls the Locator Action microflow.

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025