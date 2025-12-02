# Generate a Frontend test

## Definition

This document describes how to make MTA generate Teststeps used for Frontend testing.

## Generate Teststep(s)

- Navigate to the Test Suite where you want to create a Frontend test in.
- Start by setting up the Frontend test structure. This can be done by generating the [Test Cases](../../../mta/test-case#generate-frontend-test-cases) or by adding them manually, described in the [How-to page](frontend-test-structure-in-mta).
- Move the mouse below the second Test Case.
- Click <i class="fal fa-plus-circle"></i> and Click `Frontend teststep(s)`.
- Select the [Page](../../../mta/mendix-page) where the [Widgets](../../../mta/frontend-glossary#widget) will be tested. If this is the first Page after opening the App, select the user's Homepage.
- Select the Widget to [locate](../../../mta/frontend-glossary#locator) or perform an [Action](../../../mta/frontend-glossary#action) on.
- MTA will show the structure of the Widget on the Page.
- If any of the parent [elements](../../../mta/frontend-glossary#element) can contain multiple child elements, select which [Filter](../../../mta/frontend-glossary#filter) to use.
- Define which [Action](../../../mta/frontend-glossary#action) to perform on the selected Widget.
- If the Action results in another [Locator](../../../mta/frontend-glossary#locator), select a secondary Action.
- Click `Add teststeps`.
- Fix any [construction errors](../../../mta/construction-error) by [filling in parameters of the Microflow teststeps](../../../mta/Teststep/microflow#setting-microflow-parameters) that MTA added.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 14 October 2025