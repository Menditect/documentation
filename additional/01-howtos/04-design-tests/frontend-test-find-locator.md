# Find a Locator in Frontend Testing

## Purpose 

This document describes how to find a Locator when designing a Frontend Test.

## Locators for Platform supported Mendix Widgets

To see an up-to-date list of Mendix Platform supported Widgets: https://marketplace.mendix.com/link/supporttype/Platform

:::warning todo
:::

<!-- waarom moet ik extra actie doen? doel is uniciteit; uitleggen, verwijzen naar knowledge base, er zijn meerdere manieren -->
<!-- zowel in de browser extensie als in MTA krijg je een hint dat dit nodig zou kunnen zijn -->
<!-- generieke eigenschappen van mendix pagina's en consequenties voor playwright uitleggen in knowledge base -->


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