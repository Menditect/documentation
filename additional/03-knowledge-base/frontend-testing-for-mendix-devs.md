# Frontend Testing for Mendix Devs

Frontend testing of websites using tools like **Playwright** (or comparable libraries such as Cypress or Puppeteer) is fundamentally achieved through a process that simulates a real user's interaction with the website's **Document Object Model (DOM)**. This is done by combining three core elements: **locators**, **actions**, and **assertions**.

***

## 1. Locators 📍

**Locators** are the mechanism used to find specific elements on a web page. Think of them as the coordinates or unique addresses for elements like buttons, text fields, or links. The most robust and common locators are based on **HTML/CSS attributes**, which ensure the test targets the correct element even if the visual layout changes slightly.

### Common HTML Locators

* **CSS Selectors:** These are the most versatile and common, targeting elements based on their HTML tag, `class`, `id`, or other attributes. For example, `#submit-button` targets an element with `id="submit-button"`.
* **Text Content:** Locating an element based on the visible text it contains, e.g., finding the button that says "Log In."
* **Accessibility Roles:** Using attributes like `aria-label` or the element's inherent role (e.g., `role="button"`), which is a modern, reliable approach that aligns tests with user accessibility.
* **XPath:** A powerful, but sometimes brittle, language for navigating and querying elements in the DOM. Not recommended for Mendix Apps, because even the smallest change will break the Locator.

### Locator Challenges
* **Multiplicity:** When a locator (like a CSS selector or XPath) matches multiple elements, the testing framework (e.g., Selenium, Cypress, Playwright) has to make a choice, which can lead to ambiguity. The simplest approach is to select the first matching element. However the element the test intends to interact with might not be the first one. If the page structure changes (e.g., a new, similar element is added earlier in the DOM), the locator will suddenly point to the wrong element, causing the test to interact with the wrong UI component or fail unexpectedly. This means the test is not reliably testing the intended functionality. In Mendix Apps, this challenge is faced when using a Listview, DataGrid or Gallery, or other Widgets with multiple rows or columns.
* **Visibility:** An element may be **located** however not visible on the Browser Page. This is, for instance, the case when multiple tab pages have been rendered, and (obviously) only one tab page is visible. There are two problems that can occur in this situation:
* 1. The element may be locatable but an Action will fail because it is not Visible. 
* 2. The same element may occur multiple times but on different tab pages, leading to the above issue with **Multiplicity**.

***

## 2. Actions 🖱️

Once a single element is **located**, the test framework needs to perform a **user action** on it. These actions mimic the input a real user would provide. The library translates high-level commands into lower-level browser operations.

### Examples of Actions

* **Click:** Simulates a mouse click on a button, link, or checkbox.
* **Fill/Type:** Enters text into an input field (e.g., a username or password box).
* **Hover:** Moves the mouse cursor over an element, often to reveal a menu.
* **Select:** Chooses an option from a dropdown menu.
* **Navigate:** Directs the browser to a specific URL.

***

## 3. Assertions ✅

**Assertions** are the final and most crucial step, determining if the application behaves as expected after an action is performed. An assertion is a conditional check; if the condition is **true**, the test passes; if **false**, the test fails.

### Examples of Assertions

* **Visibility:** Asserting that a new element (like a success message) is now **visible** on the page.
* **Text Content:** Asserting that a specific element contains the expected **text** (e.g., verifying a shopping cart total).
* **State:** Asserting that an element is in the correct state, such as being **enabled** (not disabled), or a checkbox being **checked**.
* **URL/Navigation:** Asserting that the browser has been redirected to the correct **new page/URL** after an action like a form submission.

***

## The Testing Flow

A typical frontend test follows a simple **"Locate -> Act -> Assert"** loop:

1.  **Start:** The test navigates to a starting URL.
2.  **Locate & Act:** It uses a **locator** (e.g., the `id` of a username field) to find an element and performs an **action** (e.g., `fill` it with text).
3.  **Locate & Act:** It then **locates** a button (e.g., using its visible text) and performs another **action** (e.g., `click`).
4.  **Assert:** Finally, it uses a **locator** (e.g., a welcome message's class) to find a result element and makes an **assertion** (e.g., `expect` it to be **visible** and contain the text "Welcome, User!").

This structured approach allows tests to be readable, stable, and truly simulate a user's journey through the application. 
