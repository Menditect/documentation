---
sidebar_position: 2
---

# Frontend Testing for Mendix Devs

Frontend testing of websites using tools like **Playwright** (or comparable libraries such as Cypress or Puppeteer) is fundamentally achieved through a process that simulates a real user's interaction with the website's **Document Object Model (DOM)**. This is done by combining three core elements: **locators**, **actions**, and **assertions**.

## 1. Locators

**Locators** are the mechanism used to find specific elements on a web page. Think of them as the coordinates or unique addresses for elements like buttons, text fields, or links. The most robust and common locators are based on **HTML/CSS attributes**, which ensure the test targets the correct element even if the visual layout changes slightly.

### Common HTML Locators

- **CSS Selectors:** These are the most versatile and common, targeting elements based on their HTML tag, `class`, `id`, or other attributes. For example, `#submit-button` targets an element with `id="submit-button"`.
- **Text Content:** Locating an element based on the visible text it contains, e.g., finding the button that says "Log In."
- **Accessibility Roles:** Using attributes like `aria-label` or the element's inherent role (e.g., `role="button"`), which is a modern, reliable approach that aligns tests with user accessibility.
- **XPath:** A powerful, but sometimes brittle, language for navigating and querying elements in the DOM. Not recommended for Mendix Apps, because even the smallest change will break the Locator.
- **Test ID:** Testing by test-id's a very resilient way of testing as even if your text or role of the attribute changes, the test will still pass. However there are some downsides; testing by test-id's is not user facing, it makes Testers depend on Developers keeping the test-id's up to date, and Mendix does not natively support it. 

### Locator Challenges
- **Multiplicity:** When a locator (like a CSS selector or XPath) matches multiple elements, the testing framework (e.g., Selenium, Cypress, Playwright) has to make a choice, which can lead to ambiguity. The simplest approach is to select the first matching element. However the element the test intends to interact with might not be the first one. If the page structure changes (e.g., a new, similar element is added earlier in the DOM), the locator will suddenly point to the wrong element, causing the test to interact with the wrong UI component or fail unexpectedly. This means the test is not reliably testing the intended functionality. In Mendix Apps, this challenge is faced when using a Listview, DataGrid or Gallery, or other Widgets with multiple rows or columns.
- **Visibility:** An element may be **located** however not visible on the Browser Page. This is, for instance, the case when multiple tab pages have been rendered, and (obviously) only one tab page is visible. There are two problems that can occur in this situation:
  1. The element may be locatable but an Action will fail because it is not Visible. 
  2. The same element may occur multiple times but on different tab pages, leading to the above issue with **Multiplicity**.

### Locators in Mendix Apps

For convenience when testing Mendix Apps, instead of using Playwright Locators and Actions, Menditect introduced Widget-specific Locators and Actions.

Read [Find a Locator](../howtos/design-tests/frontend-test-find-locator) to learn more about Locators for Mendix Apps.

The recurring pattern of Teststeps for frontend testing a Mendix App:
1. **Locate** the Mendix **Page**: `Locate_MxPage`, by Page Class. 
   - Takes a PageClass String parameter
   - Returns a MxPageLocator object 
2. **Locate** a Mendix **Widget**: for example `Locate_MxWidget_Button`, by Widget Name, for example `actionButton1`.
   - Takes a WidgetName String parameter
   - Returns a MxLocator specialization object
3. Perform **Action** on the Mendix Widget, for example `Click_Button`.
   - Takes a MxLocator specialization object
   - Throws a possible Playwright Error, when the Widget cannot be located. 

- When the navigation moves to another Mendix Page, a new `Locate_MxPage` microflow must be called to locate that Mendix Page. 
- When the Mendix Widget is inside another Mendix Widget, adding an additional Widget-specific `Locate_MxWidget_...` microflow may be needed.
- When there are multiple occurences of the same Mendix Widget, for example in a list, adding a Widget-specific `Filter...` or `Nth...` microflow may be needed.

:::info examples below
:::

**Click on a button:**

|     | Type          | Description          |
| --- | ------------- | -------------------- |
| 1   | Locate Page   | Locate the main page |
| 2   | Locate Widget | Locate actionbutton  |
| 3   | Action        | Click actionbutton   |

****

**Click on a row in a Datagrid:**

|     | Type          | Description                        |
| --- | ------------- | ---------------------------------- |
| 1   | Locate Page   | Locate the main page               |
| 2   | Locate Widget | Locate the datagrid widget         |
| 3   | Locate Widget | Locate the 2nd row in the datagrid |
| 4   | Action        | Click datagrid row                 |

Note that you have to add **a second Locator microflow** to find the 2nd row in the datagrid. 

This is necessary because the same Widget occurs multiple times and you have to choose which one to Click.

Also read [Find a Locator](../howtos/design-tests/frontend-test-find-locator) to learn more.

****

**Show a popup, fill text and close popup:**

|     | Type          | Description            |
| --- | ------------- | ---------------------- |
| 1   | Locate Page   | Locate the main page   |
| 2   | Locate Widget | Locate actionbutton    |
| 3   | Action        | Click actionbutton     |
| 4   | Locate Page   | Locate the popup page  |
| 5   | Locate Widget | Locate textbox         |
| 6   | Action        | Fill textbox with text |
| 7   | Locate Widget | Locate actionbutton    |
| 8   | Action        | Click actionbutton     |


## 2. Actions

Once a single element is **located**, the test framework needs to perform a **user action** on it. These actions mimic the input a real user would provide. The library translates high-level commands into lower-level browser operations.

### Examples of Actions

**Click:** Simulates a mouse click on a button, link, or checkbox.
**Fill/Type:** Enters text into an input field (e.g., a username or password box).
**Hover:** Moves the mouse cursor over an element, often to reveal a menu.
**Select:** Chooses an option from a dropdown menu.
**Navigate:** Directs the browser to a specific URL.

## 3. Assertions

**Assertions** are the final and most crucial step, determining if the application behaves as expected after an action is performed. An assertion is a conditional check; if the condition is **true**, the test passes; if **false**, the test fails.

### Examples of Assertions

**Visibility:** Asserting that a new element (like a success message) is now **visible** on the page.
**Text Content:** Asserting that a specific element contains the expected **text** (e.g., verifying a shopping cart total).
**State:** Asserting that an element is in the correct state, such as being **enabled** (not disabled), or a checkbox being **checked**.
**URL/Navigation:** Asserting that the browser has been redirected to the correct **new page/URL** after an action like a form submission.


### Assertions in Mendix Apps

An assertion in frontend testing will check if a certain fact about a Locator is true. An assertion in frontend testing behaves differently from an [MTA Assert](../../../mta/Assert). If the certain fact about the Locator is false, the assertion has failed, and a [Teststep Exception](../../../mta/teststep-exception) will be thrown. MTA default behaviour is to stop the test execution if this occors. You can also choose to continue the execution with the next Test Case by enabling a [Test Case Exception Handler](../../../mta/test-case#exception-handling). It is also possible, however not advisable, to continue the execution with the next Teststep by enabling a [Teststep Exception Handler](../../../mta/Teststep#exception-handling), because the rest of the actions will most likely also fail.

Learn more about Playwright Assertions here: https://playwright.dev/java/docs/test-assertions


:::info examples below
:::

**Check if page title matches expected text**

|     | Type        | Description            |
| --- | ----------- | ---------------------- |
| 1   | Locate Page | Locate the main page   |
| 2   | Assertion   | Assert Page title text |

****

**Check if a certain image is visible**

|     | Type          | Description             |
| --- | ------------- | ----------------------- |
| 1   | Locate Page   | Locate the main page    |
| 2   | Locate Widget | Locate image            |
| 4   | Assertion     | Assert image is visible |

****

**Check if a button can be clicked**

|     | Type          | Description                    |
| --- | ------------- | ------------------------------ |
| 1   | Locate Page   | Locate the main page           |
| 2   | Locate Widget | Locate actionbutton            |
| 4   | Assertion     | Assert actionbutton is enabled |

****

## The Testing Flow

A typical frontend test follows a simple **"Locate -> Act -> Assert"** loop:

1.  **Start:** The test navigates to a starting URL.
2.  **Locate & Act:** It uses a **locator** (e.g., the `id` of a username field) to find an element and performs an **action** (e.g., `fill` it with text).
3.  **Locate & Act:** It then **locates** a button (e.g., using its visible text) and performs another **action** (e.g., `click`).
4.  **Assert:** Finally, it uses a **locator** (e.g., a welcome message's class) to find a result element and makes an **assertion** (e.g., `expect` it to be **visible** and contain the text "Welcome, User!").

This structured approach allows tests to be readable, stable, and truly simulate a user's journey through the application. 
