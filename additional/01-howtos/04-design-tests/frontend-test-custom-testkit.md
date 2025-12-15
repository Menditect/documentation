# Create a Custom Frontend Testkit

## Purpose 

It is possible to add a Custom Frontend Testkit that allows you to add Frontend testing support for Widgets that are not added to the [MTA Mendix Frontend Testkit](../../../Tools/playwright-testkit) (yet).

For all Widgets, Mendix will add the "mx-name-`widgetName`" property, so it is always possible to create a Locator for the surrounding [element](../../../mta/frontend-glossary#element). However in most cases you will need to append Locators to Locate a child element, for instance an <input\> element. See also the Mendix Docs: https://docs.mendix.com/refguide/common-widget-properties/#name

In order to use the MTA Frontend Teststep generate [feature](../../../mta/frontend-test#generate-teststeps), it is advisable to create your own Testkit module, as an 'extension' to the MTA Mendix Frontend Testkit. 

### Add Custom Frontend Testkit

This section describes how to add a [Locator](../../../mta/frontend-glossary#locator) for a fictitious Custom Widget called `MyWidget` and use the Microflows from the [MTA Playwright Connector](../../../Tools/playwright-connector) to add [Filters](../../../mta/frontend-glossary#filter), [Assertions](../../../mta/frontend-glossary#assertion) and [Actions](../../../mta/frontend-glossary#action).

#### Add Locator

- Add a new Module in your Mendix App called `MenditectMxFrontendTestKitCustom`. 
  - A Module with this exact name will be scanned by MTA for Frontend test Microflows and Entities.
- Add a new persistable Entity called `MxMyWidgetLocator`. 
  - If the Widget can contain other Widgets (MyWidget behaves like, for example, a Container), select `MenditectMxFrontendTestKit.MxParentWidgetLocator` for the Generalization.
  - If the Widget can contain other Widgets in a list (MyWidget behaves like, for example, a ListView), select `MenditectMxFrontendTestKit.MxParentMultiWidgetInstanceLocator` for the Generalization.
  - Otherwise, select `MenditectMxFrontendTestKit.MxLocator` for the Generalization.
- Add a new Microflow with the exact name `Locate_MxWidget_MyWidget`. <br/> <i class="fas fa-info-circle"></i> Microflows starting with `Locate` will be interpreted as Locator microflows.
  - Add a `WidgetName` String parameter. This will be filled with the name of the Widget (without the `mx-name-` part). 
  - Add a `ParentWidget` parameter of type `MenditectMxFrontendTestKit.MxParentWidgetLocator`. This will set the Locator for the parent, either a [Mendix Page](../../../mta/mendix-page) or another Widget.
  - Optionally add an `Options` parameter of type `MenditectPlaywrightConnector.Locator_IsVisibleOptions`. This enables the Tester to choose, whether MTA will check if the Locator yields a Visible element on the Mendix Page before an Action is executed on the element.
  - From `ParentWidget`, retrieve the associated `MenditectPlaywrightConnector.Locator` object, name it `ParentWidgetLocator`. This is the Playwright Locator for the Parent.
  - Create an `MxMyWidgetLocator` object.
  - Use this object for the Return value of the Microflow.
  - Now, a `MenditectPlaywrightConnector.Locator` object needs to be associated to the `MxMyWidgetLocator` object.
    - Select the best matching Microflow from the `MenditectPlaywrightConnector` that returns a `Locator` object. These Microflows all start with the name `Locator_Get_By_...`.
    - Build your own custom Locator logic and make sure to associate the resulting `Locator` object to the `MxMyWidgetLocator` object (1 on 1 association).

Now, if there is a `MyWidget` on a Mendix Page, if you use the MTA Frontend Teststep generate [feature](../../../mta/frontend-test#generate-teststeps), MTA will offer to Locate it by using the Microflow you just added. However, the feature will not be of any use without any Filters, Assertions or Actions.

#### Add Filter (Element Operation)

Adding a [Filter](../../../mta/frontend-glossary#filter) is needed if the Widget is composed of multiple elements, but you want to Locate just one. For this example, we assume the `MyWidget` shows multiple Rows, and we want to filter out a single Row. The filtering will be done based on some text that is shown in the Row.

- Add a new persistable Entity called `MxMyWidgetRowLocator`. 
  - Select `MenditectMxFrontendTestKit.MxLocator` for the Generalization.
- Add a new non-persistable Entity called `MyWidgetRowsFilterByTextOptions`.
  - Select `MenditectPlaywrightConnector.FilterByTextOptions` for the Generalization.
- Add a new Microflow with the exact name `ELO_Filter_MyWidget_Rows_by_Text`. <br/> <i class="fas fa-info-circle"></i> Microflows starting with `ELO` (ELement Operation being the internal name) will be interpreted as Filter microflows.
  - Add a parameter `MxMyWidgetLocator` of type `MenditectMxFrontendTestKitCustom.MxMyWidgetLocator`. 
  - Add a parameter `FilterByTextOptions` of type `MenditectMxFrontendTestKitCustom.MyWidgetRowsFilterByTextOptions`.
  - Add a parameter `IsVisibleOptions` of type `MenditectPlaywrightConnector.Locator_IsVisibleOptions`. 
  - Add a String parameter `Text`. This parameter will be used for the Filter.
- Build your own custom Filter logic and make sure to associate the returned `MxMyWidgetRowLocator` object to a `Locator` object (1 on 1 association). It's is recommended to use Microflows in the `Locator_Element_Operations` folder of the `MenditectPlaywrightConnector` module.

#### Add Assertion

Adding an [Assertion](../../../mta/frontend-glossary#assertion) allows to perform checks on the Widget. For this example, we assume the `MyWidget` shows multiple Rows, and we want to check if a certain Row is selected.

- Add a new non-persistable Entity called `MyWidgetRowIsSelectedOptions`.
  - Select `MenditectPlaywrightConnector.AssertOptions` for the Generalization.
- Add a new Microflow with the exact name `ASR_Is_Selected_MyWidget_Row`. <br/> <i class="fas fa-info-circle"></i> Microflows starting with `ASR` will be interpreted as Assertion microflows.
  - Add a parameter `MxMyWidgetRowLocator` of type `MenditectMxFrontendTestKitCustom.MxMyWidgetRowLocator`. 
  - Add a parameter `Options` of type `MenditectMxFrontendTestKitCustom.MyWidgetRowIsSelectedOptions`.
- Build your own custom Assertion logic and make sure to associate the returned `MxMyWidgetRowLocator` object to a `Locator` object (1 on 1 association). It's is recommended to use Microflows in the `Locator_Assertions` folder of the `MenditectPlaywrightConnector` module.

#### Add Action

For this example, we assume the `MyWidget` shows multiple Rows, and we want to click a certain Row.

- Add a new non-persistable Entity called `MyWidgetRowClickOptions`.
  - Select `MenditectPlaywrightConnector.ClickOptions` for the Generalization.
- Add a new Microflow with the exact name `ACT_Click_MyWidget_Row`. <br/> <i class="fas fa-info-circle"></i> Microflows starting with `ACT` will be interpreted as Action microflows.
  - Add a parameter `MxMyWidgetRowLocator` of type `MenditectMxFrontendTestKitCustom.MxMyWidgetRowLocator`. 
  - Add a parameter `Options` of type `MenditectMxFrontendTestKitCustom.MyWidgetRowIsSelectedOptions`.
- Build your own custom Action logic. It's is recommended to use Microflows in the `Locator_Actions` folder of the `MenditectPlaywrightConnector` module.



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025