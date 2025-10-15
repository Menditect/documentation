# Find a Locator in Frontend Testing

## Purpose 

This document describes how to find a Locator when designing a Frontend Test. A Locator is used to uniquely define an element on a webpage, allowing you to perform actions on it.

When designing a Frontend test, defining the right Locator(s) is not always simple. For background information about this challenge, consult the [Knowledge base docs](../../knowledge-base/frontend-testing-for-mendix-devs#locator-challenges).

Make sure to first [prepare the Mendix model for the Frontend Test](../configure-mta/prepare-frontend-test), and [host a Playwright Browser](../../installation/install-playwright-browser).


## Locators for Platform supported Mendix Widgets

To see an up-to-date list of Mendix Platform supported Widgets: https://marketplace.mendix.com/link/supporttype/Platform

Locating Mendix Widgets is made as simple as possible by Menditect. For Locating Mendix Widgets, use the microflows and entities from the [Playwright Testkit](../../../Tools/playwright-testkit).

### 1. Determine Widget Name

The first step is to determine the name of the Widget, for example `actionButton1`, on the Page. 

For **Mendix developers**, the easiest way is to open the Page in Studio Pro and find the name by opening the Properties: https://docs.mendix.com/refguide/common-widget-properties/#name

For **Testers** who do not use Studio Pro, it is recommended to use one of the [Browser Extensions](../../../Tools/frontend-browser-extension) created by Menditect to extract the Widget name from the `mx-name-widgetName123` in the CSS.

### 2. Determine parent element

The parent is the encompassing element that the Widget from step 1 is in. In order to Locate any Widget using the Playwright Testkit, a parent element needs to be passed as a microflow parameter. In the Playwright Testkit, every element that can be a potential parent element is a specialization of the `MxParentWidgetLocator` entity. 

- Example: microflow `Locate_MxWidget_Button`, uses `MxParentWidgetLocator` as parent element parameter and `WidgetName` as the Widget determining Locator parameter.

#### Situation 1: Parent is the Mendix Page

In most cases, the Mendix Page can be used, meaning that the `MxPageLocator` object from the `Locate_MxPage` microflow can be passed. 

Note that even though the encompassing element on the Mendix Page is not the Page itself, it is still possible to use the `MxPageLocator` object, if the encompassing element does not influence the *multiplicity* or *visibility* of the Widget itself. This is the case for:
- [Containers](https://docs.mendix.com/refguide/container/)
- [Layout Grids](https://docs.mendix.com/refguide/layout-grid/)
- [Dataviews](https://docs.mendix.com/refguide/data-view/)
- etc. 

You will not find these Widgets as specializations of the `MxParentWidgetLocator` entity in the Playwright Testkit's domain model. 

#### Situation 2: Parent is another Widget

If the encompassing element is a
- [Datagrid](https://docs.mendix.com/refguide/data-grid/)
- [Listview](https://docs.mendix.com/refguide/list-view/)
- [TabContainer](https://docs.mendix.com/refguide/tab-container/)
- etc.

You **will** find these Widgets as specializations of the `MxParentWidgetLocator` entity in the Playwright Testkit's domain model. 



## Locators for Custom Widgets and Snippets

**Custom Widgets** are Widgets that are not created by Mendix and/or under community support. For all Widgets, Mendix will add the "mx-name-`widgetName`" class to the HTML, so it is always possible to create a Locator for the surrounding element. However in most cases you will want to add another Locator inside that Locator, so define Actions for child elements 
(for instance an '\<input\>' element).

**Snippets** are not rendered as HTML elements by Mendix, even though Mendix does allow for adding a Class to a Snippet. In order to define Locators for Widgets inside a Snippet, add a surrounding Container rendered as a DIV element, with a representable name, to locate it.


## Locators in non-Mendix Apps

In the Playwright Connector, Locator microflows are inside the "Microflows/Commands" folder. The "Get_Locator_By_Page" folder contains Locators that have the complete Browser Page as scope to locate any HTML element. The "Get_Locator_By_Locator" folder contains the same Locators, but using another Locator that narrows the scope within to locate the HTML element.  Another way to narrow down the list is using the microflows inside the "Locator_Element_Operations" folder, containing [Filters](https://playwright.dev/java/docs/locators#filtering-locators) and [Nth element locators](https://playwright.dev/java/docs/other-locators#n-th-element-locator). In order to use XPath or CSS Locators, use the "...Get_By_Selector" microflows. 

Locator Actions are in the "Locator_Actions" folder. Note that some Actions will wait for the element to become visible, others (like "Locator_Element_Count") will be executed immediately. If it is required to wait, it is recommended to use the "Delay after execution" property on the [Teststep in MTA](../../../mta/Teststep#delay-after-execution) that calls the Locator Action microflow.

For more advanced usage, checkout the Playwright documentation for [Locators](https://playwright.dev/java/docs/locators) and [Actions](https://playwright.dev/java/docs/input).


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025